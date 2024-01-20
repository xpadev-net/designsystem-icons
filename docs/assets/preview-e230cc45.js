import { s as scope } from "./index-9e612267.js";
import { c as commonjsGlobal } from "./_commonjsHelpers-ca272635.js";
const { addons: addons$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { once, logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { FORCE_REMOUNT: FORCE_REMOUNT$1, STORY_RENDER_PHASE_CHANGED: STORY_RENDER_PHASE_CHANGED$1, SET_CURRENT_STORY, IGNORED_EXCEPTION } = __STORYBOOK_MODULE_CORE_EVENTS__;
var CallStates = ((CallStates2) => (CallStates2.DONE = "done", CallStates2.ERROR = "error", CallStates2.ACTIVE = "active", CallStates2.WAITING = "waiting", CallStates2))(CallStates || {});
var EVENTS = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, controlsDisabled = { start: false, back: false, goto: false, next: false, end: false }, alreadyCompletedException = new Error("This function ran after the play function completed. Did you forget to `await` it?"), isObject = (o) => Object.prototype.toString.call(o) === "[object Object]", isModule = (o) => Object.prototype.toString.call(o) === "[object Module]", isInstrumentable = (o) => {
  if (!isObject(o) && !isModule(o))
    return false;
  if (o.constructor === void 0)
    return true;
  let proto = o.constructor.prototype;
  return !(!isObject(proto) || Object.prototype.hasOwnProperty.call(proto, "isPrototypeOf") === false);
}, construct = (obj) => {
  try {
    return new obj.constructor();
  } catch {
    return {};
  }
}, getInitialState = () => ({ renderPhase: void 0, isDebugging: false, isPlaying: false, isLocked: false, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), getRetainedState = (state, isDebugging = false) => {
  let calls = (isDebugging ? state.shadowCalls : state.calls).filter((call) => call.retain);
  if (!calls.length)
    return;
  let callRefsByResult = new Map(Array.from(state.callRefsByResult.entries()).filter(([, ref]) => ref.retain));
  return { cursor: calls.length, calls, callRefsByResult };
}, Instrumenter = class {
  constructor() {
    this.initialized = false;
    this.channel = addons$1.getChannel(), this.state = scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {};
    let resetState = ({ storyId, isPlaying = true, isDebugging = false }) => {
      let state = this.getState(storyId);
      this.setState(storyId, { ...getInitialState(), ...getRetainedState(state, isDebugging), shadowCalls: isDebugging ? state.shadowCalls : [], chainedCallIds: isDebugging ? state.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: isDebugging ? state.playUntil : void 0, isPlaying, isDebugging }), this.sync(storyId);
    };
    this.channel.on(FORCE_REMOUNT$1, resetState), this.channel.on(STORY_RENDER_PHASE_CHANGED$1, ({ storyId, newPhase }) => {
      let { isDebugging } = this.getState(storyId);
      this.setState(storyId, { renderPhase: newPhase }), newPhase === "preparing" && isDebugging && resetState({ storyId }), newPhase === "playing" && resetState({ storyId, isDebugging }), newPhase === "played" && this.setState(storyId, { isLocked: false, isPlaying: false, isDebugging: false }), newPhase === "errored" && this.setState(storyId, { isLocked: false, isPlaying: false });
    }), this.channel.on(SET_CURRENT_STORY, () => {
      this.initialized ? this.cleanup() : this.initialized = true;
    });
    let start = ({ storyId, playUntil }) => {
      this.getState(storyId).isDebugging || this.setState(storyId, ({ calls }) => ({ calls: [], shadowCalls: calls.map((call) => ({ ...call, status: "waiting" })), isDebugging: true }));
      let log = this.getLog(storyId);
      this.setState(storyId, ({ shadowCalls }) => {
        var _a;
        if (playUntil || !log.length)
          return { playUntil };
        let firstRowIndex = shadowCalls.findIndex((call) => call.id === log[0].callId);
        return { playUntil: (_a = shadowCalls.slice(0, firstRowIndex).filter((call) => call.interceptable && !call.ancestors.length).slice(-1)[0]) == null ? void 0 : _a.id };
      }), this.channel.emit(FORCE_REMOUNT$1, { storyId, isDebugging: true });
    }, back = ({ storyId }) => {
      var _a;
      let log = this.getLog(storyId).filter((call) => !call.ancestors.length), last = log.reduceRight((res, item, index) => res >= 0 || item.status === "waiting" ? res : index, -1);
      start({ storyId, playUntil: (_a = log[last - 1]) == null ? void 0 : _a.callId });
    }, goto = ({ storyId, callId }) => {
      var _a;
      let { calls, shadowCalls, resolvers } = this.getState(storyId), call = calls.find(({ id }) => id === callId), shadowCall = shadowCalls.find(({ id }) => id === callId);
      if (!call && shadowCall && Object.values(resolvers).length > 0) {
        let nextId = (_a = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a.callId;
        shadowCall.id !== nextId && this.setState(storyId, { playUntil: shadowCall.id }), Object.values(resolvers).forEach((resolve) => resolve());
      } else
        start({ storyId, playUntil: callId });
    }, next = ({ storyId }) => {
      var _a;
      let { resolvers } = this.getState(storyId);
      if (Object.values(resolvers).length > 0)
        Object.values(resolvers).forEach((resolve) => resolve());
      else {
        let nextId = (_a = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a.callId;
        nextId ? start({ storyId, playUntil: nextId }) : end({ storyId });
      }
    }, end = ({ storyId }) => {
      this.setState(storyId, { playUntil: void 0, isDebugging: false }), Object.values(this.getState(storyId).resolvers).forEach((resolve) => resolve());
    };
    this.channel.on(EVENTS.START, start), this.channel.on(EVENTS.BACK, back), this.channel.on(EVENTS.GOTO, goto), this.channel.on(EVENTS.NEXT, next), this.channel.on(EVENTS.END, end);
  }
  getState(storyId) {
    return this.state[storyId] || getInitialState();
  }
  setState(storyId, update) {
    let state = this.getState(storyId), patch = typeof update == "function" ? update(state) : update;
    this.state = { ...this.state, [storyId]: { ...state, ...patch } }, scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  cleanup() {
    this.state = Object.entries(this.state).reduce((acc, [storyId, state]) => {
      let retainedState = getRetainedState(state);
      return retainedState && (acc[storyId] = Object.assign(getInitialState(), retainedState)), acc;
    }, {});
    let payload = { controlStates: controlsDisabled, logItems: [] };
    this.channel.emit(EVENTS.SYNC, payload), scope.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
  }
  getLog(storyId) {
    let { calls, shadowCalls } = this.getState(storyId), merged = [...shadowCalls];
    calls.forEach((call, index) => {
      merged[index] = call;
    });
    let seen2 = /* @__PURE__ */ new Set();
    return merged.reduceRight((acc, call) => (call.args.forEach((arg) => {
      (arg == null ? void 0 : arg.__callId__) && seen2.add(arg.__callId__);
    }), call.path.forEach((node) => {
      node.__callId__ && seen2.add(node.__callId__);
    }), (call.interceptable || call.exception) && !seen2.has(call.id) && (acc.unshift({ callId: call.id, status: call.status, ancestors: call.ancestors }), seen2.add(call.id)), acc), []);
  }
  instrument(obj, options) {
    if (!isInstrumentable(obj))
      return obj;
    let { mutate = false, path = [] } = options;
    return Object.keys(obj).reduce((acc, key) => {
      let value = obj[key];
      return typeof value != "function" ? (acc[key] = this.instrument(value, { ...options, path: path.concat(key) }), acc) : typeof value.__originalFn__ == "function" ? (acc[key] = value, acc) : (acc[key] = (...args) => this.track(key, value, args, options), acc[key].__originalFn__ = value, Object.defineProperty(acc[key], "name", { value: key, writable: false }), Object.keys(value).length > 0 && Object.assign(acc[key], this.instrument({ ...value }, { ...options, path: path.concat(key) })), acc);
    }, mutate ? obj : construct(obj));
  }
  track(method, fn2, args, options) {
    var _a, _b, _c, _d;
    let storyId = ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.__storyId__) || ((_d = (_c = (_b = scope.__STORYBOOK_PREVIEW__) == null ? void 0 : _b.selectionStore) == null ? void 0 : _c.selection) == null ? void 0 : _d.storyId), { cursor, ancestors } = this.getState(storyId);
    this.setState(storyId, { cursor: cursor + 1 });
    let id = `${ancestors.slice(-1)[0] || storyId} [${cursor}] ${method}`, { path = [], intercept = false, retain = false } = options, interceptable = typeof intercept == "function" ? intercept(method, path) : intercept, call = { id, cursor, storyId, ancestors, path, method, args, interceptable, retain }, result = (interceptable && !ancestors.length ? this.intercept : this.invoke).call(this, fn2, call, options);
    return this.instrument(result, { ...options, mutate: true, path: [{ __callId__: call.id }] });
  }
  intercept(fn2, call, options) {
    let { chainedCallIds, isDebugging, playUntil } = this.getState(call.storyId), isChainedUpon = chainedCallIds.has(call.id);
    return !isDebugging || isChainedUpon || playUntil ? (playUntil === call.id && this.setState(call.storyId, { playUntil: void 0 }), this.invoke(fn2, call, options)) : new Promise((resolve) => {
      this.setState(call.storyId, ({ resolvers }) => ({ isLocked: false, resolvers: { ...resolvers, [call.id]: resolve } }));
    }).then(() => (this.setState(call.storyId, (state) => {
      let { [call.id]: _, ...resolvers } = state.resolvers;
      return { isLocked: true, resolvers };
    }), this.invoke(fn2, call, options)));
  }
  invoke(fn2, call, options) {
    let { callRefsByResult, renderPhase } = this.getState(call.storyId), serializeValues = (value) => {
      var _a, _b;
      if (callRefsByResult.has(value))
        return callRefsByResult.get(value);
      if (value instanceof Array)
        return value.map(serializeValues);
      if (value instanceof Date)
        return { __date__: { value: value.toISOString() } };
      if (value instanceof Error) {
        let { name, message, stack } = value;
        return { __error__: { name, message, stack } };
      }
      if (value instanceof RegExp) {
        let { flags, source } = value;
        return { __regexp__: { flags, source } };
      }
      if (value instanceof scope.window.HTMLElement) {
        let { prefix, localName, id, classList, innerText } = value, classNames = Array.from(classList);
        return { __element__: { prefix, localName, id, classNames, innerText } };
      }
      return typeof value == "function" ? { __function__: { name: value.name } } : typeof value == "symbol" ? { __symbol__: { description: value.description } } : typeof value == "object" && ((_a = value == null ? void 0 : value.constructor) == null ? void 0 : _a.name) && ((_b = value == null ? void 0 : value.constructor) == null ? void 0 : _b.name) !== "Object" ? { __class__: { name: value.constructor.name } } : Object.prototype.toString.call(value) === "[object Object]" ? Object.fromEntries(Object.entries(value).map(([key, val]) => [key, serializeValues(val)])) : value;
    }, info = { ...call, args: call.args.map(serializeValues) };
    call.path.forEach((ref) => {
      (ref == null ? void 0 : ref.__callId__) && this.setState(call.storyId, ({ chainedCallIds }) => ({ chainedCallIds: new Set(Array.from(chainedCallIds).concat(ref.__callId__)) }));
    });
    let handleException = (e) => {
      if (e instanceof Error) {
        let { name, message, stack, callId = call.id } = e, exception = { name, message, stack, callId };
        if (this.update({ ...info, status: "error", exception }), this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [e, { __callId__: call.id, retain: call.retain }]]) })), call.ancestors.length)
          throw Object.prototype.hasOwnProperty.call(e, "callId") || Object.defineProperty(e, "callId", { value: call.id }), e;
        if (e !== alreadyCompletedException)
          throw logger.warn(e), IGNORED_EXCEPTION;
      }
      throw e;
    };
    try {
      if (renderPhase === "played" && !call.retain)
        throw alreadyCompletedException;
      let finalArgs = (options.getArgs ? options.getArgs(call, this.getState(call.storyId)) : call.args).map((arg) => typeof arg != "function" || Object.keys(arg).length ? arg : (...args) => {
        let { cursor, ancestors } = this.getState(call.storyId);
        this.setState(call.storyId, { cursor: 0, ancestors: [...ancestors, call.id] });
        let restore = () => this.setState(call.storyId, { cursor, ancestors }), willRestore = false;
        try {
          let res = arg(...args);
          return res instanceof Promise ? (willRestore = true, res.finally(restore)) : res;
        } finally {
          willRestore || restore();
        }
      }), result = fn2(...finalArgs);
      return result && ["object", "function", "symbol"].includes(typeof result) && this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [result, { __callId__: call.id, retain: call.retain }]]) })), this.update({ ...info, status: result instanceof Promise ? "active" : "done" }), result instanceof Promise ? result.then((value) => (this.update({ ...info, status: "done" }), value), handleException) : result;
    } catch (e) {
      return handleException(e);
    }
  }
  update(call) {
    this.channel.emit(EVENTS.CALL, call), this.setState(call.storyId, ({ calls }) => {
      let callsById = calls.concat(call).reduce((a, c) => Object.assign(a, { [c.id]: c }), {});
      return { calls: Object.values(callsById).sort((a, b) => a.id.localeCompare(b.id, void 0, { numeric: true })) };
    }), this.sync(call.storyId);
  }
  sync(storyId) {
    let synchronize = () => {
      var _a;
      let { isLocked, isPlaying } = this.getState(storyId), logItems = this.getLog(storyId), pausedAt = (_a = logItems.filter(({ ancestors }) => !ancestors.length).find((item) => item.status === "waiting")) == null ? void 0 : _a.callId, hasActive = logItems.some((item) => item.status === "active");
      if (isLocked || hasActive || logItems.length === 0) {
        let payload2 = { controlStates: controlsDisabled, logItems };
        this.channel.emit(EVENTS.SYNC, payload2);
        return;
      }
      let hasPrevious = logItems.some((item) => ["done", "error"].includes(item.status)), payload = { controlStates: { start: hasPrevious, back: hasPrevious, goto: true, next: isPlaying, end: isPlaying }, logItems, pausedAt };
      this.channel.emit(EVENTS.SYNC, payload);
    };
    this.setState(storyId, ({ syncTimeout }) => (clearTimeout(syncTimeout), { syncTimeout: setTimeout(synchronize, 0) }));
  }
};
function instrument(obj, options = {}) {
  var _a, _b, _c, _d;
  try {
    let forceInstrument = false, skipInstrument = false;
    return ((_b = (_a = scope.window.location) == null ? void 0 : _a.search) == null ? void 0 : _b.includes("instrument=true")) ? forceInstrument = true : ((_d = (_c = scope.window.location) == null ? void 0 : _c.search) == null ? void 0 : _d.includes("instrument=false")) && (skipInstrument = true), scope.window.parent === scope.window && !forceInstrument || skipInstrument ? obj : (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ || (scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter()), scope.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(obj, options));
  } catch (e) {
    return once.warn(e), obj;
  }
}
var build = {};
Object.defineProperty(build, "__esModule", {
  value: true
});
build.spyOn = build.mocked = build.fn = ModuleMocker_1 = build.ModuleMocker = void 0;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
const MOCK_CONSTRUCTOR_NAME = "mockConstructor";
const FUNCTION_NAME_RESERVED_PATTERN = /[\s!-\/:-@\[-`{-~]/;
const FUNCTION_NAME_RESERVED_REPLACE = new RegExp(
  FUNCTION_NAME_RESERVED_PATTERN.source,
  "g"
);
const RESERVED_KEYWORDS = /* @__PURE__ */ new Set([
  "arguments",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield"
]);
function matchArity(fn2, length) {
  let mockConstructor;
  switch (length) {
    case 1:
      mockConstructor = function(_a) {
        return fn2.apply(this, arguments);
      };
      break;
    case 2:
      mockConstructor = function(_a, _b) {
        return fn2.apply(this, arguments);
      };
      break;
    case 3:
      mockConstructor = function(_a, _b, _c) {
        return fn2.apply(this, arguments);
      };
      break;
    case 4:
      mockConstructor = function(_a, _b, _c, _d) {
        return fn2.apply(this, arguments);
      };
      break;
    case 5:
      mockConstructor = function(_a, _b, _c, _d, _e) {
        return fn2.apply(this, arguments);
      };
      break;
    case 6:
      mockConstructor = function(_a, _b, _c, _d, _e, _f) {
        return fn2.apply(this, arguments);
      };
      break;
    case 7:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g) {
        return fn2.apply(this, arguments);
      };
      break;
    case 8:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h) {
        return fn2.apply(this, arguments);
      };
      break;
    case 9:
      mockConstructor = function(_a, _b, _c, _d, _e, _f, _g, _h, _i) {
        return fn2.apply(this, arguments);
      };
      break;
    default:
      mockConstructor = function() {
        return fn2.apply(this, arguments);
      };
      break;
  }
  return mockConstructor;
}
function getObjectType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function getType(ref) {
  const typeName = getObjectType(ref);
  if (typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction") {
    return "function";
  } else if (Array.isArray(ref)) {
    return "array";
  } else if (typeName === "Object") {
    return "object";
  } else if (typeName === "Number" || typeName === "String" || typeName === "Boolean" || typeName === "Symbol") {
    return "constant";
  } else if (typeName === "Map" || typeName === "WeakMap" || typeName === "Set") {
    return "collection";
  } else if (typeName === "RegExp") {
    return "regexp";
  } else if (ref === void 0) {
    return "undefined";
  } else if (ref === null) {
    return "null";
  } else {
    return null;
  }
}
function isReadonlyProp(object, prop) {
  if (prop === "arguments" || prop === "caller" || prop === "callee" || prop === "name" || prop === "length") {
    const typeName = getObjectType(object);
    return typeName === "Function" || typeName === "AsyncFunction" || typeName === "GeneratorFunction";
  }
  if (prop === "source" || prop === "global" || prop === "ignoreCase" || prop === "multiline") {
    return getObjectType(object) === "RegExp";
  }
  return false;
}
class ModuleMocker {
  /**
   * @see README.md
   * @param global Global object of the test environment, used to create
   * mocks
   */
  constructor(global) {
    _defineProperty(this, "_environmentGlobal", void 0);
    _defineProperty(this, "_mockState", void 0);
    _defineProperty(this, "_mockConfigRegistry", void 0);
    _defineProperty(this, "_spyState", void 0);
    _defineProperty(this, "_invocationCallCounter", void 0);
    this._environmentGlobal = global;
    this._mockState = /* @__PURE__ */ new WeakMap();
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._spyState = /* @__PURE__ */ new Set();
    this._invocationCallCounter = 1;
  }
  _getSlots(object) {
    if (!object) {
      return [];
    }
    const slots = /* @__PURE__ */ new Set();
    const EnvObjectProto = this._environmentGlobal.Object.prototype;
    const EnvFunctionProto = this._environmentGlobal.Function.prototype;
    const EnvRegExpProto = this._environmentGlobal.RegExp.prototype;
    const ObjectProto = Object.prototype;
    const FunctionProto = Function.prototype;
    const RegExpProto = RegExp.prototype;
    while (object != null && object !== EnvObjectProto && object !== EnvFunctionProto && object !== EnvRegExpProto && object !== ObjectProto && object !== FunctionProto && object !== RegExpProto) {
      const ownNames = Object.getOwnPropertyNames(object);
      for (let i = 0; i < ownNames.length; i++) {
        const prop = ownNames[i];
        if (!isReadonlyProp(object, prop)) {
          const propDesc = Object.getOwnPropertyDescriptor(object, prop);
          if (propDesc !== void 0 && !propDesc.get || object.__esModule) {
            slots.add(prop);
          }
        }
      }
      object = Object.getPrototypeOf(object);
    }
    return Array.from(slots);
  }
  _ensureMockConfig(f) {
    let config = this._mockConfigRegistry.get(f);
    if (!config) {
      config = this._defaultMockConfig();
      this._mockConfigRegistry.set(f, config);
    }
    return config;
  }
  _ensureMockState(f) {
    let state = this._mockState.get(f);
    if (!state) {
      state = this._defaultMockState();
      this._mockState.set(f, state);
    }
    if (state.calls.length > 0) {
      state.lastCall = state.calls[state.calls.length - 1];
    }
    return state;
  }
  _defaultMockConfig() {
    return {
      mockImpl: void 0,
      mockName: "jest.fn()",
      specificMockImpls: [],
      specificReturnValues: []
    };
  }
  _defaultMockState() {
    return {
      calls: [],
      instances: [],
      invocationCallOrder: [],
      results: []
    };
  }
  _makeComponent(metadata, restore) {
    if (metadata.type === "object") {
      return new this._environmentGlobal.Object();
    } else if (metadata.type === "array") {
      return new this._environmentGlobal.Array();
    } else if (metadata.type === "regexp") {
      return new this._environmentGlobal.RegExp("");
    } else if (metadata.type === "constant" || metadata.type === "collection" || metadata.type === "null" || metadata.type === "undefined") {
      return metadata.value;
    } else if (metadata.type === "function") {
      const prototype = metadata.members && metadata.members.prototype && metadata.members.prototype.members || {};
      const prototypeSlots = this._getSlots(prototype);
      const mocker = this;
      const mockConstructor = matchArity(function(...args) {
        const mockState = mocker._ensureMockState(f);
        const mockConfig = mocker._ensureMockConfig(f);
        mockState.instances.push(this);
        mockState.calls.push(args);
        const mockResult = {
          type: "incomplete",
          value: void 0
        };
        mockState.results.push(mockResult);
        mockState.invocationCallOrder.push(mocker._invocationCallCounter++);
        let finalReturnValue;
        let thrownError;
        let callDidThrowError = false;
        try {
          finalReturnValue = (() => {
            if (this instanceof f) {
              prototypeSlots.forEach((slot) => {
                if (prototype[slot].type === "function") {
                  const protoImpl = this[slot];
                  this[slot] = mocker.generateFromMetadata(prototype[slot]);
                  this[slot]._protoImpl = protoImpl;
                }
              });
              const mockImpl = mockConfig.specificMockImpls.length ? mockConfig.specificMockImpls.shift() : mockConfig.mockImpl;
              return mockImpl && mockImpl.apply(this, arguments);
            }
            let specificMockImpl = mockConfig.specificMockImpls.shift();
            if (specificMockImpl === void 0) {
              specificMockImpl = mockConfig.mockImpl;
            }
            if (specificMockImpl) {
              return specificMockImpl.apply(this, arguments);
            }
            if (f._protoImpl) {
              return f._protoImpl.apply(this, arguments);
            }
            return void 0;
          })();
        } catch (error) {
          thrownError = error;
          callDidThrowError = true;
          throw error;
        } finally {
          mockResult.type = callDidThrowError ? "throw" : "return";
          mockResult.value = callDidThrowError ? thrownError : finalReturnValue;
        }
        return finalReturnValue;
      }, metadata.length || 0);
      const f = this._createMockFunction(metadata, mockConstructor);
      f._isMockFunction = true;
      f.getMockImplementation = () => this._ensureMockConfig(f).mockImpl;
      if (typeof restore === "function") {
        this._spyState.add(restore);
      }
      this._mockState.set(f, this._defaultMockState());
      this._mockConfigRegistry.set(f, this._defaultMockConfig());
      Object.defineProperty(f, "mock", {
        configurable: false,
        enumerable: true,
        get: () => this._ensureMockState(f),
        set: (val) => this._mockState.set(f, val)
      });
      f.mockClear = () => {
        this._mockState.delete(f);
        return f;
      };
      f.mockReset = () => {
        f.mockClear();
        this._mockConfigRegistry.delete(f);
        return f;
      };
      f.mockRestore = () => {
        f.mockReset();
        return restore ? restore() : void 0;
      };
      f.mockReturnValueOnce = (value) => f.mockImplementationOnce(() => value);
      f.mockResolvedValueOnce = (value) => f.mockImplementationOnce(() => Promise.resolve(value));
      f.mockRejectedValueOnce = (value) => f.mockImplementationOnce(() => Promise.reject(value));
      f.mockReturnValue = (value) => f.mockImplementation(() => value);
      f.mockResolvedValue = (value) => f.mockImplementation(() => Promise.resolve(value));
      f.mockRejectedValue = (value) => f.mockImplementation(() => Promise.reject(value));
      f.mockImplementationOnce = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.specificMockImpls.push(fn2);
        return f;
      };
      f.mockImplementation = (fn2) => {
        const mockConfig = this._ensureMockConfig(f);
        mockConfig.mockImpl = fn2;
        return f;
      };
      f.mockReturnThis = () => f.mockImplementation(function() {
        return this;
      });
      f.mockName = (name) => {
        if (name) {
          const mockConfig = this._ensureMockConfig(f);
          mockConfig.mockName = name;
        }
        return f;
      };
      f.getMockName = () => {
        const mockConfig = this._ensureMockConfig(f);
        return mockConfig.mockName || "jest.fn()";
      };
      if (metadata.mockImpl) {
        f.mockImplementation(metadata.mockImpl);
      }
      return f;
    } else {
      const unknownType = metadata.type || "undefined type";
      throw new Error("Unrecognized type " + unknownType);
    }
  }
  _createMockFunction(metadata, mockConstructor) {
    let name = metadata.name;
    if (!name) {
      return mockConstructor;
    }
    const boundFunctionPrefix = "bound ";
    let bindCall = "";
    if (name && name.startsWith(boundFunctionPrefix)) {
      do {
        name = name.substring(boundFunctionPrefix.length);
        bindCall = ".bind(null)";
      } while (name && name.startsWith(boundFunctionPrefix));
    }
    if (name === MOCK_CONSTRUCTOR_NAME) {
      return mockConstructor;
    }
    if (
      // It's a syntax error to define functions with a reserved keyword
      // as name.
      RESERVED_KEYWORDS.has(name) || // It's also a syntax error to define functions with a name that starts with a number
      /^\d/.test(name)
    ) {
      name = "$" + name;
    }
    if (FUNCTION_NAME_RESERVED_PATTERN.test(name)) {
      name = name.replace(FUNCTION_NAME_RESERVED_REPLACE, "$");
    }
    const body = "return function " + name + "() {return " + MOCK_CONSTRUCTOR_NAME + ".apply(this,arguments);}" + bindCall;
    const createConstructor = new this._environmentGlobal.Function(
      MOCK_CONSTRUCTOR_NAME,
      body
    );
    return createConstructor(mockConstructor);
  }
  _generateMock(metadata, callbacks, refs) {
    const mock = this._makeComponent(metadata);
    if (metadata.refID != null) {
      refs[metadata.refID] = mock;
    }
    this._getSlots(metadata.members).forEach((slot) => {
      const slotMetadata = metadata.members && metadata.members[slot] || {};
      if (slotMetadata.ref != null) {
        callbacks.push(
          function(ref) {
            return () => mock[slot] = refs[ref];
          }(slotMetadata.ref)
        );
      } else {
        mock[slot] = this._generateMock(slotMetadata, callbacks, refs);
      }
    });
    if (metadata.type !== "undefined" && metadata.type !== "null" && mock.prototype && typeof mock.prototype === "object") {
      mock.prototype.constructor = mock;
    }
    return mock;
  }
  /**
   * @see README.md
   * @param _metadata Metadata for the mock in the schema returned by the
   * getMetadata method of this module.
   */
  generateFromMetadata(_metadata) {
    const callbacks = [];
    const refs = {};
    const mock = this._generateMock(_metadata, callbacks, refs);
    callbacks.forEach((setter) => setter());
    return mock;
  }
  /**
   * @see README.md
   * @param component The component for which to retrieve metadata.
   */
  getMetadata(component, _refs) {
    const refs = _refs || /* @__PURE__ */ new Map();
    const ref = refs.get(component);
    if (ref != null) {
      return {
        ref
      };
    }
    const type = getType(component);
    if (!type) {
      return null;
    }
    const metadata = {
      type
    };
    if (type === "constant" || type === "collection" || type === "undefined" || type === "null") {
      metadata.value = component;
      return metadata;
    } else if (type === "function") {
      metadata.name = component.name;
      if (component._isMockFunction === true) {
        metadata.mockImpl = component.getMockImplementation();
      }
    }
    metadata.refID = refs.size;
    refs.set(component, metadata.refID);
    let members = null;
    if (type !== "array") {
      this._getSlots(component).forEach((slot) => {
        if (type === "function" && // @ts-expect-error may be a mock
        component._isMockFunction === true && slot.match(/^mock/)) {
          return;
        }
        const slotMetadata = this.getMetadata(component[slot], refs);
        if (slotMetadata) {
          if (!members) {
            members = {};
          }
          members[slot] = slotMetadata;
        }
      });
    }
    if (members) {
      metadata.members = members;
    }
    return metadata;
  }
  isMockFunction(fn2) {
    return !!fn2 && fn2._isMockFunction === true;
  }
  fn(implementation) {
    const length = implementation ? implementation.length : 0;
    const fn2 = this._makeComponent({
      length,
      type: "function"
    });
    if (implementation) {
      fn2.mockImplementation(implementation);
    }
    return fn2;
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  spyOn(object, methodName, accessType) {
    if (accessType) {
      return this._spyOnProperty(object, methodName, accessType);
    }
    if (typeof object !== "object" && typeof object !== "function") {
      throw new Error(
        "Cannot spyOn on a primitive value; " + this._typeOf(object) + " given"
      );
    }
    const original = object[methodName];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error(
          "Cannot spy the " + methodName + " property because it is not a function; " + this._typeOf(original) + " given instead"
        );
      }
      const isMethodOwner = Object.prototype.hasOwnProperty.call(
        object,
        methodName
      );
      let descriptor = Object.getOwnPropertyDescriptor(object, methodName);
      let proto = Object.getPrototypeOf(object);
      while (!descriptor && proto !== null) {
        descriptor = Object.getOwnPropertyDescriptor(proto, methodName);
        proto = Object.getPrototypeOf(proto);
      }
      let mock;
      if (descriptor && descriptor.get) {
        const originalGet = descriptor.get;
        mock = this._makeComponent(
          {
            type: "function"
          },
          () => {
            descriptor.get = originalGet;
            Object.defineProperty(object, methodName, descriptor);
          }
        );
        descriptor.get = () => mock;
        Object.defineProperty(object, methodName, descriptor);
      } else {
        mock = this._makeComponent(
          {
            type: "function"
          },
          () => {
            if (isMethodOwner) {
              object[methodName] = original;
            } else {
              delete object[methodName];
            }
          }
        );
        object[methodName] = mock;
      }
      mock.mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    return object[methodName];
  }
  _spyOnProperty(obj, propertyName, accessType = "get") {
    if (typeof obj !== "object" && typeof obj !== "function") {
      throw new Error(
        "Cannot spyOn on a primitive value; " + this._typeOf(obj) + " given"
      );
    }
    if (!obj) {
      throw new Error(
        "spyOn could not find an object to spy upon for " + propertyName
      );
    }
    if (!propertyName) {
      throw new Error("No property name supplied");
    }
    let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
    let proto = Object.getPrototypeOf(obj);
    while (!descriptor && proto !== null) {
      descriptor = Object.getOwnPropertyDescriptor(proto, propertyName);
      proto = Object.getPrototypeOf(proto);
    }
    if (!descriptor) {
      throw new Error(propertyName + " property does not exist");
    }
    if (!descriptor.configurable) {
      throw new Error(propertyName + " is not declared configurable");
    }
    if (!descriptor[accessType]) {
      throw new Error(
        "Property " + propertyName + " does not have access type " + accessType
      );
    }
    const original = descriptor[accessType];
    if (!this.isMockFunction(original)) {
      if (typeof original !== "function") {
        throw new Error(
          "Cannot spy the " + propertyName + " property because it is not a function; " + this._typeOf(original) + " given instead"
        );
      }
      descriptor[accessType] = this._makeComponent(
        {
          type: "function"
        },
        () => {
          descriptor[accessType] = original;
          Object.defineProperty(obj, propertyName, descriptor);
        }
      );
      descriptor[accessType].mockImplementation(function() {
        return original.apply(this, arguments);
      });
    }
    Object.defineProperty(obj, propertyName, descriptor);
    return descriptor[accessType];
  }
  clearAllMocks() {
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  resetAllMocks() {
    this._mockConfigRegistry = /* @__PURE__ */ new WeakMap();
    this._mockState = /* @__PURE__ */ new WeakMap();
  }
  restoreAllMocks() {
    this._spyState.forEach((restore) => restore());
    this._spyState = /* @__PURE__ */ new Set();
  }
  _typeOf(value) {
    return value == null ? "" + value : typeof value;
  }
  // the typings test helper
  mocked(item, _deep = false) {
    return item;
  }
}
var ModuleMocker_1 = build.ModuleMocker = ModuleMocker;
const JestMock$1 = new ModuleMocker(commonjsGlobal);
const fn$1 = JestMock$1.fn.bind(JestMock$1);
build.fn = fn$1;
const spyOn = JestMock$1.spyOn.bind(JestMock$1);
build.spyOn = spyOn;
const mocked = JestMock$1.mocked.bind(JestMock$1);
build.mocked = mocked;
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { FORCE_REMOUNT, STORY_RENDER_PHASE_CHANGED } = __STORYBOOK_MODULE_CORE_EVENTS__;
var JestMock = new ModuleMocker_1(scope), fn = JestMock.fn.bind(JestMock), { action } = instrument({ action: fn }, { retain: true }), channel = addons.getChannel(), seen = /* @__PURE__ */ new Set(), spies = [];
channel.on(FORCE_REMOUNT, () => spies.forEach((mock) => {
  var _a;
  return (_a = mock == null ? void 0 : mock.mockClear) == null ? void 0 : _a.call(mock);
}));
channel.on(STORY_RENDER_PHASE_CHANGED, ({ newPhase }) => {
  newPhase === "loading" && spies.forEach((mock) => {
    var _a;
    return (_a = mock == null ? void 0 : mock.mockClear) == null ? void 0 : _a.call(mock);
  });
});
var addSpies = (id, val, key) => {
  if (seen.has(val))
    return val;
  seen.add(val);
  try {
    if (Object.prototype.toString.call(val) === "[object Object]") {
      for (let [k, v] of Object.entries(val))
        val[k] = addSpies(id, v, k);
      return val;
    }
    if (Array.isArray(val))
      return val.map((item, index) => addSpies(id, item, `${key}[${index}]`));
    if (typeof val == "function" && val.isAction) {
      Object.defineProperty(val, "name", { value: key, writable: false }), Object.defineProperty(val, "__storyId__", { value: id, writable: false });
      let spy = action(val);
      return spies.push(spy), spy;
    }
  } catch {
  }
  return val;
}, addActionsFromArgTypes = ({ id, initialArgs }) => addSpies(id, initialArgs), argsEnhancers = [addActionsFromArgTypes], { step: runStep } = instrument({ step: (label, play, context) => play(context) }, { intercept: true }), parameters = { throwPlayFunctionExceptions: false };
export {
  argsEnhancers,
  parameters,
  runStep
};
