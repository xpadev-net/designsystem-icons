import { _ as __toESM, b as __commonJS } from "./index-9ba8c932.js";
import { r as reactExports, R as React } from "./index-5c06e906.js";
import "./iframe-84e03dbc.js";
import "../sb-preview/runtime.js";
import "./index-9e612267.js";
import "./_commonjsHelpers-7a7fcd32.js";
import "./index-ee6951c2.js";
import "./index-70649251.js";
import "./index-eeefe080.js";
var require_OverlayScrollbars = __commonJS({ "../../node_modules/overlayscrollbars/js/OverlayScrollbars.js"(exports, module) {
  (function(global, factory) {
    typeof define == "function" && define.amd ? define(function() {
      return factory(global, global.document, void 0);
    }) : typeof module == "object" && typeof module.exports == "object" ? module.exports = factory(global, global.document, void 0) : factory(global, global.document, void 0);
  })(typeof window < "u" ? window : exports, function(window2, document, undefined2) {
    var PLUGINNAME = "OverlayScrollbars", TYPES = { o: "object", f: "function", a: "array", s: "string", b: "boolean", n: "number", u: "undefined", z: "null" }, LEXICON = { c: "class", s: "style", i: "id", l: "length", p: "prototype", ti: "tabindex", oH: "offsetHeight", cH: "clientHeight", sH: "scrollHeight", oW: "offsetWidth", cW: "clientWidth", sW: "scrollWidth", hOP: "hasOwnProperty", bCR: "getBoundingClientRect" }, VENDORS = function() {
      var jsCache = {}, cssCache = {}, cssPrefixes = ["-webkit-", "-moz-", "-o-", "-ms-"], jsPrefixes = ["WebKit", "Moz", "O", "MS"];
      function firstLetterToUpper(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
      return { _cssPrefixes: cssPrefixes, _jsPrefixes: jsPrefixes, _cssProperty: function(name) {
        var result = cssCache[name];
        if (cssCache[LEXICON.hOP](name))
          return result;
        for (var uppercasedName = firstLetterToUpper(name), elmStyle = document.createElement("div")[LEXICON.s], resultPossibilities, i = 0, v, currVendorWithoutDashes; i < cssPrefixes.length; i++)
          for (currVendorWithoutDashes = cssPrefixes[i].replace(/-/g, ""), resultPossibilities = [name, cssPrefixes[i] + name, currVendorWithoutDashes + uppercasedName, firstLetterToUpper(currVendorWithoutDashes) + uppercasedName], v = 0; v < resultPossibilities[LEXICON.l]; v++)
            if (elmStyle[resultPossibilities[v]] !== undefined2) {
              result = resultPossibilities[v];
              break;
            }
        return cssCache[name] = result, result;
      }, _cssPropertyValue: function(property, values, suffix) {
        var name = property + " " + values, result = cssCache[name];
        if (cssCache[LEXICON.hOP](name))
          return result;
        for (var dummyStyle = document.createElement("div")[LEXICON.s], possbleValues = values.split(" "), preparedSuffix = suffix || "", i = 0, v = -1, prop; i < possbleValues[LEXICON.l]; i++)
          for (; v < VENDORS._cssPrefixes[LEXICON.l]; v++)
            if (prop = v < 0 ? possbleValues[i] : VENDORS._cssPrefixes[v] + possbleValues[i], dummyStyle.cssText = property + ":" + prop + preparedSuffix, dummyStyle[LEXICON.l]) {
              result = prop;
              break;
            }
        return cssCache[name] = result, result;
      }, _jsAPI: function(name, isInterface, fallback) {
        var i = 0, result = jsCache[name];
        if (!jsCache[LEXICON.hOP](name)) {
          for (result = window2[name]; i < jsPrefixes[LEXICON.l]; i++)
            result = result || window2[(isInterface ? jsPrefixes[i] : jsPrefixes[i].toLowerCase()) + firstLetterToUpper(name)];
          jsCache[name] = result;
        }
        return result || fallback;
      } };
    }(), COMPATIBILITY = function() {
      function windowSize(x) {
        return x ? window2.innerWidth || document.documentElement[LEXICON.cW] || document.body[LEXICON.cW] : window2.innerHeight || document.documentElement[LEXICON.cH] || document.body[LEXICON.cH];
      }
      function bind(func, thisObj) {
        if (typeof func != TYPES.f)
          throw "Can't bind function!";
        var proto = LEXICON.p, aArgs = Array[proto].slice.call(arguments, 2), fNOP = function() {
        }, fBound = function() {
          return func.apply(this instanceof fNOP ? this : thisObj, aArgs.concat(Array[proto].slice.call(arguments)));
        };
        return func[proto] && (fNOP[proto] = func[proto]), fBound[proto] = new fNOP(), fBound;
      }
      return { wW: bind(windowSize, 0, true), wH: bind(windowSize, 0), mO: bind(VENDORS._jsAPI, 0, "MutationObserver", true), rO: bind(VENDORS._jsAPI, 0, "ResizeObserver", true), rAF: bind(VENDORS._jsAPI, 0, "requestAnimationFrame", false, function(func) {
        return window2.setTimeout(func, 1e3 / 60);
      }), cAF: bind(VENDORS._jsAPI, 0, "cancelAnimationFrame", false, function(id) {
        return window2.clearTimeout(id);
      }), now: function() {
        return Date.now && Date.now() || (/* @__PURE__ */ new Date()).getTime();
      }, stpP: function(event) {
        event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
      }, prvD: function(event) {
        event.preventDefault && event.cancelable ? event.preventDefault() : event.returnValue = false;
      }, page: function(event) {
        event = event.originalEvent || event;
        var strPage = "page", strClient = "client", strX = "X", strY = "Y", target = event.target || event.srcElement || document, eventDoc = target.ownerDocument || document, doc = eventDoc.documentElement, body = eventDoc.body;
        if (event.touches !== undefined2) {
          var touch = event.touches[0];
          return { x: touch[strPage + strX], y: touch[strPage + strY] };
        }
        return !event[strPage + strX] && event[strClient + strX] && event[strClient + strX] != null ? { x: event[strClient + strX] + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), y: event[strClient + strY] + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0) } : { x: event[strPage + strX], y: event[strPage + strY] };
      }, mBtn: function(event) {
        var button = event.button;
        return !event.which && button !== undefined2 ? button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0 : event.which;
      }, inA: function(item, arr) {
        for (var i = 0; i < arr[LEXICON.l]; i++)
          try {
            if (arr[i] === item)
              return i;
          } catch {
          }
        return -1;
      }, isA: function(arr) {
        var def = Array.isArray;
        return def ? def(arr) : this.type(arr) == TYPES.a;
      }, type: function(obj) {
        return obj === undefined2 || obj === null ? obj + "" : Object[LEXICON.p].toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
      }, bind };
    }(), MATH = Math, JQUERY = window2.jQuery, EASING = function() {
      var _easingsMath = { p: MATH.PI, c: MATH.cos, s: MATH.sin, w: MATH.pow, t: MATH.sqrt, n: MATH.asin, a: MATH.abs, o: 1.70158 };
      return { swing: function(x, t, b, c, d) {
        return 0.5 - _easingsMath.c(x * _easingsMath.p) / 2;
      }, linear: function(x, t, b, c, d) {
        return x;
      }, easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
      }, easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      }, easeInOutQuad: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t + b : -c / 2 * (--t * (t - 2) - 1) + b;
      }, easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
      }, easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
      }, easeInOutCubic: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t + b : c / 2 * ((t -= 2) * t * t + 2) + b;
      }, easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
      }, easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
      }, easeInOutQuart: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t + b : -c / 2 * ((t -= 2) * t * t * t - 2) + b;
      }, easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
      }, easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
      }, easeInOutQuint: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? c / 2 * t * t * t * t * t + b : c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }, easeInSine: function(x, t, b, c, d) {
        return -c * _easingsMath.c(t / d * (_easingsMath.p / 2)) + c + b;
      }, easeOutSine: function(x, t, b, c, d) {
        return c * _easingsMath.s(t / d * (_easingsMath.p / 2)) + b;
      }, easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (_easingsMath.c(_easingsMath.p * t / d) - 1) + b;
      }, easeInExpo: function(x, t, b, c, d) {
        return t == 0 ? b : c * _easingsMath.w(2, 10 * (t / d - 1)) + b;
      }, easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-_easingsMath.w(2, -10 * t / d) + 1) + b;
      }, easeInOutExpo: function(x, t, b, c, d) {
        return t == 0 ? b : t == d ? b + c : (t /= d / 2) < 1 ? c / 2 * _easingsMath.w(2, 10 * (t - 1)) + b : c / 2 * (-_easingsMath.w(2, -10 * --t) + 2) + b;
      }, easeInCirc: function(x, t, b, c, d) {
        return -c * (_easingsMath.t(1 - (t /= d) * t) - 1) + b;
      }, easeOutCirc: function(x, t, b, c, d) {
        return c * _easingsMath.t(1 - (t = t / d - 1) * t) + b;
      }, easeInOutCirc: function(x, t, b, c, d) {
        return (t /= d / 2) < 1 ? -c / 2 * (_easingsMath.t(1 - t * t) - 1) + b : c / 2 * (_easingsMath.t(1 - (t -= 2) * t) + 1) + b;
      }, easeInElastic: function(x, t, b, c, d) {
        var s = _easingsMath.o, p = 0, a = c;
        return t == 0 ? b : (t /= d) == 1 ? b + c : (p || (p = d * 0.3), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), -(a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p)) + b);
      }, easeOutElastic: function(x, t, b, c, d) {
        var s = _easingsMath.o, p = 0, a = c;
        return t == 0 ? b : (t /= d) == 1 ? b + c : (p || (p = d * 0.3), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), a * _easingsMath.w(2, -10 * t) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) + c + b);
      }, easeInOutElastic: function(x, t, b, c, d) {
        var s = _easingsMath.o, p = 0, a = c;
        return t == 0 ? b : (t /= d / 2) == 2 ? b + c : (p || (p = d * (0.3 * 1.5)), a < _easingsMath.a(c) ? (a = c, s = p / 4) : s = p / (2 * _easingsMath.p) * _easingsMath.n(c / a), t < 1 ? -0.5 * (a * _easingsMath.w(2, 10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p)) + b : a * _easingsMath.w(2, -10 * (t -= 1)) * _easingsMath.s((t * d - s) * (2 * _easingsMath.p) / p) * 0.5 + c + b);
      }, easeInBack: function(x, t, b, c, d, s) {
        return s = s || _easingsMath.o, c * (t /= d) * t * ((s + 1) * t - s) + b;
      }, easeOutBack: function(x, t, b, c, d, s) {
        return s = s || _easingsMath.o, c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
      }, easeInOutBack: function(x, t, b, c, d, s) {
        return s = s || _easingsMath.o, (t /= d / 2) < 1 ? c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b : c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
      }, easeInBounce: function(x, t, b, c, d) {
        return c - this.easeOutBounce(x, d - t, 0, c, d) + b;
      }, easeOutBounce: function(x, t, b, c, d) {
        var o = 7.5625;
        return (t /= d) < 1 / 2.75 ? c * (o * t * t) + b : t < 2 / 2.75 ? c * (o * (t -= 1.5 / 2.75) * t + 0.75) + b : t < 2.5 / 2.75 ? c * (o * (t -= 2.25 / 2.75) * t + 0.9375) + b : c * (o * (t -= 2.625 / 2.75) * t + 0.984375) + b;
      }, easeInOutBounce: function(x, t, b, c, d) {
        return t < d / 2 ? this.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b : this.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
      } };
    }(), FRAMEWORK = function() {
      var _rnothtmlwhite = /[^\x20\t\r\n\f]+/g, _strSpace = " ", _strEmpty = "", _strScrollLeft = "scrollLeft", _strScrollTop = "scrollTop", _animations = [], _type = COMPATIBILITY.type, _cssNumber = { animationIterationCount: true, columnCount: true, fillOpacity: true, flexGrow: true, flexShrink: true, fontWeight: true, lineHeight: true, opacity: true, order: true, orphans: true, widows: true, zIndex: true, zoom: true };
      function extend() {
        var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length2 = arguments[LEXICON.l], deep = false;
        for (_type(target) == TYPES.b && (deep = target, target = arguments[1] || {}, i = 2), _type(target) != TYPES.o && !_type(target) == TYPES.f && (target = {}), length2 === i && (target = FakejQuery, --i); i < length2; i++)
          if ((options = arguments[i]) != null)
            for (name in options)
              src = target[name], copy = options[name], target !== copy && (deep && copy && (isPlainObject(copy) || (copyIsArray = COMPATIBILITY.isA(copy))) ? (copyIsArray ? (copyIsArray = false, clone = src && COMPATIBILITY.isA(src) ? src : []) : clone = src && isPlainObject(src) ? src : {}, target[name] = extend(deep, clone, copy)) : copy !== undefined2 && (target[name] = copy));
        return target;
      }
      function inArray(item, arr, fromIndex) {
        for (var i = fromIndex || 0; i < arr[LEXICON.l]; i++)
          if (arr[i] === item)
            return i;
        return -1;
      }
      function isFunction(obj) {
        return _type(obj) == TYPES.f;
      }
      function isEmptyObject(obj) {
        for (var name in obj)
          return false;
        return true;
      }
      function isPlainObject(obj) {
        if (!obj || _type(obj) != TYPES.o)
          return false;
        var key, proto = LEXICON.p, hasOwnProperty = Object[proto].hasOwnProperty, hasOwnConstructor = hasOwnProperty.call(obj, "constructor"), hasIsPrototypeOf = obj.constructor && obj.constructor[proto] && hasOwnProperty.call(obj.constructor[proto], "isPrototypeOf");
        if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf)
          return false;
        for (key in obj)
          ;
        return _type(key) == TYPES.u || hasOwnProperty.call(obj, key);
      }
      function each(obj, callback) {
        var i = 0;
        if (isArrayLike(obj))
          for (; i < obj[LEXICON.l] && callback.call(obj[i], i, obj[i]) !== false; i++)
            ;
        else
          for (i in obj)
            if (callback.call(obj[i], i, obj[i]) === false)
              break;
        return obj;
      }
      function isArrayLike(obj) {
        var length2 = !!obj && [LEXICON.l] in obj && obj[LEXICON.l], t = _type(obj);
        return isFunction(t) ? false : t == TYPES.a || length2 === 0 || _type(length2) == TYPES.n && length2 > 0 && length2 - 1 in obj;
      }
      function stripAndCollapse(value) {
        var tokens = value.match(_rnothtmlwhite) || [];
        return tokens.join(_strSpace);
      }
      function matches(elem, selector) {
        for (var nodeList = (elem.parentNode || document).querySelectorAll(selector) || [], i = nodeList[LEXICON.l]; i--; )
          if (nodeList[i] == elem)
            return true;
        return false;
      }
      function insertAdjacentElement(el, strategy, child) {
        if (COMPATIBILITY.isA(child))
          for (var i = 0; i < child[LEXICON.l]; i++)
            insertAdjacentElement(el, strategy, child[i]);
        else
          _type(child) == TYPES.s ? el.insertAdjacentHTML(strategy, child) : el.insertAdjacentElement(strategy, child.nodeType ? child : child[0]);
      }
      function setCSSVal(el, prop, val) {
        try {
          el[LEXICON.s][prop] !== undefined2 && (el[LEXICON.s][prop] = parseCSSVal(prop, val));
        } catch {
        }
      }
      function parseCSSVal(prop, val) {
        return !_cssNumber[prop.toLowerCase()] && _type(val) == TYPES.n && (val += "px"), val;
      }
      function startNextAnimationInQ(animObj, removeFromQ) {
        var index, nextAnim;
        removeFromQ !== false && animObj.q.splice(0, 1), animObj.q[LEXICON.l] > 0 ? (nextAnim = animObj.q[0], animate(animObj.el, nextAnim.props, nextAnim.duration, nextAnim.easing, nextAnim.complete, true)) : (index = inArray(animObj, _animations), index > -1 && _animations.splice(index, 1));
      }
      function setAnimationValue(el, prop, value) {
        prop === _strScrollLeft || prop === _strScrollTop ? el[prop] = value : setCSSVal(el, prop, value);
      }
      function animate(el, props, options, easing, complete, guaranteedNext) {
        var hasOptions = isPlainObject(options), from = {}, to = {}, i = 0, key, animObj, progress, step, specialEasing, duration;
        for (hasOptions ? (easing = options.easing, options.start, progress = options.progress, step = options.step, specialEasing = options.specialEasing, complete = options.complete, duration = options.duration) : duration = options, specialEasing = specialEasing || {}, duration = duration || 400, easing = easing || "swing", guaranteedNext = guaranteedNext || false; i < _animations[LEXICON.l]; i++)
          if (_animations[i].el === el) {
            animObj = _animations[i];
            break;
          }
        animObj || (animObj = { el, q: [] }, _animations.push(animObj));
        for (key in props)
          key === _strScrollLeft || key === _strScrollTop ? from[key] = el[key] : from[key] = FakejQuery(el).css(key);
        for (key in from)
          from[key] !== props[key] && props[key] !== undefined2 && (to[key] = props[key]);
        if (isEmptyObject(to))
          guaranteedNext && startNextAnimationInQ(animObj);
        else {
          var timeNow, end, percent, fromVal, toVal, easedVal, timeStart, frame, elapsed, qPos = guaranteedNext ? 0 : inArray(qObj, animObj.q), qObj = { props: to, duration: hasOptions ? options : duration, easing, complete };
          if (qPos === -1 && (qPos = animObj.q[LEXICON.l], animObj.q.push(qObj)), qPos === 0)
            if (duration > 0)
              timeStart = COMPATIBILITY.now(), frame = function() {
                timeNow = COMPATIBILITY.now(), elapsed = timeNow - timeStart, end = qObj.stop || elapsed >= duration, percent = 1 - (MATH.max(0, timeStart + duration - timeNow) / duration || 0);
                for (key in to)
                  fromVal = parseFloat(from[key]), toVal = parseFloat(to[key]), easedVal = (toVal - fromVal) * EASING[specialEasing[key] || easing](percent, percent * duration, 0, 1, duration) + fromVal, setAnimationValue(el, key, easedVal), isFunction(step) && step(easedVal, { elem: el, prop: key, start: fromVal, now: easedVal, end: toVal, pos: percent, options: { easing, speacialEasing: specialEasing, duration, complete, step }, startTime: timeStart });
                isFunction(progress) && progress({}, percent, MATH.max(0, duration - elapsed)), end ? (startNextAnimationInQ(animObj), isFunction(complete) && complete()) : qObj.frame = COMPATIBILITY.rAF()(frame);
              }, qObj.frame = COMPATIBILITY.rAF()(frame);
            else {
              for (key in to)
                setAnimationValue(el, key, to[key]);
              startNextAnimationInQ(animObj);
            }
        }
      }
      function stop(el, clearQ, jumpToEnd) {
        for (var animObj, qObj, key, i = 0; i < _animations[LEXICON.l]; i++)
          if (animObj = _animations[i], animObj.el === el) {
            if (animObj.q[LEXICON.l] > 0) {
              if (qObj = animObj.q[0], qObj.stop = true, COMPATIBILITY.cAF()(qObj.frame), animObj.q.splice(0, 1), jumpToEnd)
                for (key in qObj.props)
                  setAnimationValue(el, key, qObj.props[key]);
              clearQ ? animObj.q = [] : startNextAnimationInQ(animObj, false);
            }
            break;
          }
      }
      function elementIsVisible(el) {
        return !!(el[LEXICON.oW] || el[LEXICON.oH] || el.getClientRects()[LEXICON.l]);
      }
      function FakejQuery(selector) {
        if (arguments[LEXICON.l] === 0)
          return this;
        var base = new FakejQuery(), elements = selector, i = 0, elms, el;
        if (_type(selector) == TYPES.s)
          for (elements = [], selector.charAt(0) === "<" ? (el = document.createElement("div"), el.innerHTML = selector, elms = el.children) : elms = document.querySelectorAll(selector); i < elms[LEXICON.l]; i++)
            elements.push(elms[i]);
        if (elements) {
          for (_type(elements) != TYPES.s && (!isArrayLike(elements) || elements === window2 || elements === elements.self) && (elements = [elements]), i = 0; i < elements[LEXICON.l]; i++)
            base[i] = elements[i];
          base[LEXICON.l] = elements[LEXICON.l];
        }
        return base;
      }
      return FakejQuery[LEXICON.p] = { on: function(eventName, handler) {
        eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty];
        var eventNameLength = eventName[LEXICON.l], i = 0, el;
        return this.each(function() {
          el = this;
          try {
            if (el.addEventListener)
              for (; i < eventNameLength; i++)
                el.addEventListener(eventName[i], handler);
            else if (el.detachEvent)
              for (; i < eventNameLength; i++)
                el.attachEvent("on" + eventName[i], handler);
          } catch {
          }
        });
      }, off: function(eventName, handler) {
        eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty];
        var eventNameLength = eventName[LEXICON.l], i = 0, el;
        return this.each(function() {
          el = this;
          try {
            if (el.removeEventListener)
              for (; i < eventNameLength; i++)
                el.removeEventListener(eventName[i], handler);
            else if (el.detachEvent)
              for (; i < eventNameLength; i++)
                el.detachEvent("on" + eventName[i], handler);
          } catch {
          }
        });
      }, one: function(eventName, handler) {
        return eventName = (eventName || _strEmpty).match(_rnothtmlwhite) || [_strEmpty], this.each(function() {
          var el = FakejQuery(this);
          FakejQuery.each(eventName, function(i, oneEventName) {
            var oneHandler = function(e) {
              handler.call(this, e), el.off(oneEventName, oneHandler);
            };
            el.on(oneEventName, oneHandler);
          });
        });
      }, trigger: function(eventName) {
        var el, event;
        return this.each(function() {
          el = this, document.createEvent ? (event = document.createEvent("HTMLEvents"), event.initEvent(eventName, true, false), el.dispatchEvent(event)) : el.fireEvent("on" + eventName);
        });
      }, append: function(child) {
        return this.each(function() {
          insertAdjacentElement(this, "beforeend", child);
        });
      }, prepend: function(child) {
        return this.each(function() {
          insertAdjacentElement(this, "afterbegin", child);
        });
      }, before: function(child) {
        return this.each(function() {
          insertAdjacentElement(this, "beforebegin", child);
        });
      }, after: function(child) {
        return this.each(function() {
          insertAdjacentElement(this, "afterend", child);
        });
      }, remove: function() {
        return this.each(function() {
          var el = this, parentNode = el.parentNode;
          parentNode == null ? void 0 : parentNode.removeChild(el);
        });
      }, unwrap: function() {
        var parents = [], i, el, parent;
        for (this.each(function() {
          parent = this.parentNode, inArray(parent, parents) === -1 && parents.push(parent);
        }), i = 0; i < parents[LEXICON.l]; i++) {
          for (el = parents[i], parent = el.parentNode; el.firstChild; )
            parent.insertBefore(el.firstChild, el);
          parent.removeChild(el);
        }
        return this;
      }, wrapAll: function(wrapperHTML) {
        for (var i, nodes = this, wrapper = FakejQuery(wrapperHTML)[0], deepest = wrapper, parent = nodes[0].parentNode, previousSibling = nodes[0].previousSibling; deepest.childNodes[LEXICON.l] > 0; )
          deepest = deepest.childNodes[0];
        for (i = 0; nodes[LEXICON.l] - i; deepest.firstChild === nodes[0] && i++)
          deepest.appendChild(nodes[i]);
        var nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild;
        return parent.insertBefore(wrapper, nextSibling), this;
      }, wrapInner: function(wrapperHTML) {
        return this.each(function() {
          var el = FakejQuery(this), contents = el.contents();
          contents[LEXICON.l] ? contents.wrapAll(wrapperHTML) : el.append(wrapperHTML);
        });
      }, wrap: function(wrapperHTML) {
        return this.each(function() {
          FakejQuery(this).wrapAll(wrapperHTML);
        });
      }, css: function(styles, val) {
        var el, key, cptStyle, getCptStyle = window2.getComputedStyle;
        return _type(styles) == TYPES.s ? val === undefined2 ? (el = this[0], cptStyle = getCptStyle ? getCptStyle(el, null) : el.currentStyle[styles], getCptStyle ? cptStyle != null ? cptStyle.getPropertyValue(styles) : el[LEXICON.s][styles] : cptStyle) : this.each(function() {
          setCSSVal(this, styles, val);
        }) : this.each(function() {
          for (key in styles)
            setCSSVal(this, key, styles[key]);
        });
      }, hasClass: function(className) {
        for (var elem, i = 0, classNamePrepared = _strSpace + className + _strSpace, classList; elem = this[i++]; ) {
          if (classList = elem.classList, classList && classList.contains(className))
            return true;
          if (elem.nodeType === 1 && (_strSpace + stripAndCollapse(elem.className + _strEmpty) + _strSpace).indexOf(classNamePrepared) > -1)
            return true;
        }
        return false;
      }, addClass: function(className) {
        var classes, elem, cur, curValue, clazz, finalValue, supportClassList, elmClassList, i = 0, v = 0;
        if (className) {
          for (classes = className.match(_rnothtmlwhite) || []; elem = this[i++]; )
            if (elmClassList = elem.classList, supportClassList === undefined2 && (supportClassList = elmClassList !== undefined2), supportClassList)
              for (; clazz = classes[v++]; )
                elmClassList.add(clazz);
            else if (curValue = elem.className + _strEmpty, cur = elem.nodeType === 1 && _strSpace + stripAndCollapse(curValue) + _strSpace, cur) {
              for (; clazz = classes[v++]; )
                cur.indexOf(_strSpace + clazz + _strSpace) < 0 && (cur += clazz + _strSpace);
              finalValue = stripAndCollapse(cur), curValue !== finalValue && (elem.className = finalValue);
            }
        }
        return this;
      }, removeClass: function(className) {
        var classes, elem, cur, curValue, clazz, finalValue, supportClassList, elmClassList, i = 0, v = 0;
        if (className) {
          for (classes = className.match(_rnothtmlwhite) || []; elem = this[i++]; )
            if (elmClassList = elem.classList, supportClassList === undefined2 && (supportClassList = elmClassList !== undefined2), supportClassList)
              for (; clazz = classes[v++]; )
                elmClassList.remove(clazz);
            else if (curValue = elem.className + _strEmpty, cur = elem.nodeType === 1 && _strSpace + stripAndCollapse(curValue) + _strSpace, cur) {
              for (; clazz = classes[v++]; )
                for (; cur.indexOf(_strSpace + clazz + _strSpace) > -1; )
                  cur = cur.replace(_strSpace + clazz + _strSpace, _strSpace);
              finalValue = stripAndCollapse(cur), curValue !== finalValue && (elem.className = finalValue);
            }
        }
        return this;
      }, hide: function() {
        return this.each(function() {
          this[LEXICON.s].display = "none";
        });
      }, show: function() {
        return this.each(function() {
          this[LEXICON.s].display = "block";
        });
      }, attr: function(attrName, value) {
        for (var i = 0, el; el = this[i++]; ) {
          if (value === undefined2)
            return el.getAttribute(attrName);
          el.setAttribute(attrName, value);
        }
        return this;
      }, removeAttr: function(attrName) {
        return this.each(function() {
          this.removeAttribute(attrName);
        });
      }, offset: function() {
        var el = this[0], rect = el[LEXICON.bCR](), scrollLeft = window2.pageXOffset || document.documentElement[_strScrollLeft], scrollTop = window2.pageYOffset || document.documentElement[_strScrollTop];
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      }, position: function() {
        var el = this[0];
        return { top: el.offsetTop, left: el.offsetLeft };
      }, scrollLeft: function(value) {
        for (var i = 0, el; el = this[i++]; ) {
          if (value === undefined2)
            return el[_strScrollLeft];
          el[_strScrollLeft] = value;
        }
        return this;
      }, scrollTop: function(value) {
        for (var i = 0, el; el = this[i++]; ) {
          if (value === undefined2)
            return el[_strScrollTop];
          el[_strScrollTop] = value;
        }
        return this;
      }, val: function(value) {
        var el = this[0];
        return value ? (el.value = value, this) : el.value;
      }, first: function() {
        return this.eq(0);
      }, last: function() {
        return this.eq(-1);
      }, eq: function(index) {
        return FakejQuery(this[index >= 0 ? index : this[LEXICON.l] + index]);
      }, find: function(selector) {
        var children = [], i;
        return this.each(function() {
          var el = this, ch = el.querySelectorAll(selector);
          for (i = 0; i < ch[LEXICON.l]; i++)
            children.push(ch[i]);
        }), FakejQuery(children);
      }, children: function(selector) {
        var children = [], el, ch, i;
        return this.each(function() {
          for (ch = this.children, i = 0; i < ch[LEXICON.l]; i++)
            el = ch[i], selector ? (el.matches && el.matches(selector) || matches(el, selector)) && children.push(el) : children.push(el);
        }), FakejQuery(children);
      }, parent: function(selector) {
        var parents = [], parent;
        return this.each(function() {
          parent = this.parentNode, (!selector || FakejQuery(parent).is(selector)) && parents.push(parent);
        }), FakejQuery(parents);
      }, is: function(selector) {
        var el, i;
        for (i = 0; i < this[LEXICON.l]; i++) {
          if (el = this[i], selector === ":visible")
            return elementIsVisible(el);
          if (selector === ":hidden")
            return !elementIsVisible(el);
          if (el.matches && el.matches(selector) || matches(el, selector))
            return true;
        }
        return false;
      }, contents: function() {
        var contents = [], childs, i;
        return this.each(function() {
          for (childs = this.childNodes, i = 0; i < childs[LEXICON.l]; i++)
            contents.push(childs[i]);
        }), FakejQuery(contents);
      }, each: function(callback) {
        return each(this, callback);
      }, animate: function(props, duration, easing, complete) {
        return this.each(function() {
          animate(this, props, duration, easing, complete);
        });
      }, stop: function(clearQ, jump) {
        return this.each(function() {
          stop(this, clearQ, jump);
        });
      } }, extend(FakejQuery, { extend, inArray, isEmptyObject, isPlainObject, each }), FakejQuery;
    }(), INSTANCES = function() {
      var _targets = [], _instancePropertyString = "__overlayScrollbars__";
      return function(target, instance) {
        var argLen = arguments[LEXICON.l];
        if (argLen < 1)
          return _targets;
        if (instance)
          target[_instancePropertyString] = instance, _targets.push(target);
        else {
          var index = COMPATIBILITY.inA(target, _targets);
          if (index > -1)
            if (argLen > 1)
              delete target[_instancePropertyString], _targets.splice(index, 1);
            else
              return _targets[index][_instancePropertyString];
        }
      };
    }(), PLUGIN = function() {
      var _plugin, _pluginsGlobals, _pluginsAutoUpdateLoop, _pluginsExtensions = [], _pluginsOptions = function() {
        var type = COMPATIBILITY.type, possibleTemplateTypes = [TYPES.b, TYPES.n, TYPES.s, TYPES.a, TYPES.o, TYPES.f, TYPES.z], restrictedStringsSplit = " ", restrictedStringsPossibilitiesSplit = ":", classNameAllowedValues = [TYPES.z, TYPES.s], numberAllowedValues = TYPES.n, booleanNullAllowedValues = [TYPES.z, TYPES.b], booleanTrueTemplate = [true, TYPES.b], booleanFalseTemplate = [false, TYPES.b], callbackTemplate = [null, [TYPES.z, TYPES.f]], updateOnLoadTemplate = [["img"], [TYPES.s, TYPES.a, TYPES.z]], inheritedAttrsTemplate = [["style", "class"], [TYPES.s, TYPES.a, TYPES.z]], resizeAllowedValues = "n:none b:both h:horizontal v:vertical", overflowBehaviorAllowedValues = "v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden", scrollbarsVisibilityAllowedValues = "v:visible h:hidden a:auto", scrollbarsAutoHideAllowedValues = "n:never s:scroll l:leave m:move", optionsDefaultsAndTemplate = { className: ["os-theme-dark", classNameAllowedValues], resize: ["none", resizeAllowedValues], sizeAutoCapable: booleanTrueTemplate, clipAlways: booleanTrueTemplate, normalizeRTL: booleanTrueTemplate, paddingAbsolute: booleanFalseTemplate, autoUpdate: [null, booleanNullAllowedValues], autoUpdateInterval: [33, numberAllowedValues], updateOnLoad: updateOnLoadTemplate, nativeScrollbarsOverlaid: { showNativeScrollbars: booleanFalseTemplate, initialize: booleanTrueTemplate }, overflowBehavior: { x: ["scroll", overflowBehaviorAllowedValues], y: ["scroll", overflowBehaviorAllowedValues] }, scrollbars: { visibility: ["auto", scrollbarsVisibilityAllowedValues], autoHide: ["never", scrollbarsAutoHideAllowedValues], autoHideDelay: [800, numberAllowedValues], dragScrolling: booleanTrueTemplate, clickScrolling: booleanFalseTemplate, touchSupport: booleanTrueTemplate, snapHandle: booleanFalseTemplate }, textarea: { dynWidth: booleanFalseTemplate, dynHeight: booleanFalseTemplate, inheritedAttrs: inheritedAttrsTemplate }, callbacks: { onInitialized: callbackTemplate, onInitializationWithdrawn: callbackTemplate, onDestroyed: callbackTemplate, onScrollStart: callbackTemplate, onScroll: callbackTemplate, onScrollStop: callbackTemplate, onOverflowChanged: callbackTemplate, onOverflowAmountChanged: callbackTemplate, onDirectionChanged: callbackTemplate, onContentSizeChanged: callbackTemplate, onHostSizeChanged: callbackTemplate, onUpdated: callbackTemplate } }, convert = function(template) {
          var recursive = function(obj) {
            var key, val, valType;
            for (key in obj)
              obj[LEXICON.hOP](key) && (val = obj[key], valType = type(val), valType == TYPES.a ? obj[key] = val[template ? 1 : 0] : valType == TYPES.o && (obj[key] = recursive(val)));
            return obj;
          };
          return recursive(FRAMEWORK.extend(true, {}, optionsDefaultsAndTemplate));
        };
        return { _defaults: convert(), _template: convert(true), _validate: function(obj, template, writeErrors, diffObj) {
          var validatedOptions = {}, validatedOptionsPrepared = {}, objectCopy = FRAMEWORK.extend(true, {}, obj), inArray = FRAMEWORK.inArray, isEmptyObj = FRAMEWORK.isEmptyObject, checkObjectProps = function(data, template2, diffData, validatedOptions2, validatedOptionsPrepared2, prevPropName) {
            for (var prop in template2)
              if (template2[LEXICON.hOP](prop) && data[LEXICON.hOP](prop)) {
                var isValid = false, isDiff = false, templateValue = template2[prop], templateValueType = type(templateValue), templateIsComplex = templateValueType == TYPES.o, templateTypes = COMPATIBILITY.isA(templateValue) ? templateValue : [templateValue], dataDiffValue = diffData[prop], dataValue = data[prop], dataValueType = type(dataValue), propPrefix = prevPropName ? prevPropName + "." : "", error = 'The option "' + propPrefix + prop + `" wasn't set, because`, errorPossibleTypes = [], errorRestrictedStrings = [], restrictedStringValuesSplit, restrictedStringValuesPossibilitiesSplit, isRestrictedValue, mainPossibility, currType, i, v, j;
                if (dataDiffValue = dataDiffValue === undefined2 ? {} : dataDiffValue, templateIsComplex && dataValueType == TYPES.o)
                  validatedOptions2[prop] = {}, validatedOptionsPrepared2[prop] = {}, checkObjectProps(dataValue, templateValue, dataDiffValue, validatedOptions2[prop], validatedOptionsPrepared2[prop], propPrefix + prop), FRAMEWORK.each([data, validatedOptions2, validatedOptionsPrepared2], function(index, value) {
                    isEmptyObj(value[prop]) && delete value[prop];
                  });
                else if (!templateIsComplex) {
                  for (i = 0; i < templateTypes[LEXICON.l]; i++)
                    if (currType = templateTypes[i], templateValueType = type(currType), isRestrictedValue = templateValueType == TYPES.s && inArray(currType, possibleTemplateTypes) === -1, isRestrictedValue)
                      for (errorPossibleTypes.push(TYPES.s), restrictedStringValuesSplit = currType.split(restrictedStringsSplit), errorRestrictedStrings = errorRestrictedStrings.concat(restrictedStringValuesSplit), v = 0; v < restrictedStringValuesSplit[LEXICON.l]; v++) {
                        for (restrictedStringValuesPossibilitiesSplit = restrictedStringValuesSplit[v].split(restrictedStringsPossibilitiesSplit), mainPossibility = restrictedStringValuesPossibilitiesSplit[0], j = 0; j < restrictedStringValuesPossibilitiesSplit[LEXICON.l]; j++)
                          if (dataValue === restrictedStringValuesPossibilitiesSplit[j]) {
                            isValid = true;
                            break;
                          }
                        if (isValid)
                          break;
                      }
                    else if (errorPossibleTypes.push(currType), dataValueType === currType) {
                      isValid = true;
                      break;
                    }
                  isValid ? (isDiff = dataValue !== dataDiffValue, isDiff && (validatedOptions2[prop] = dataValue), (isRestrictedValue ? inArray(dataDiffValue, restrictedStringValuesPossibilitiesSplit) < 0 : isDiff) && (validatedOptionsPrepared2[prop] = isRestrictedValue ? mainPossibility : dataValue)) : writeErrors && console.warn(error + " it doesn't accept the type [ " + dataValueType.toUpperCase() + ' ] with the value of "' + dataValue + `".\r
Accepted types are: [ ` + errorPossibleTypes.join(", ").toUpperCase() + " ]." + (errorRestrictedStrings[length] > 0 ? `\r
Valid strings are: [ ` + errorRestrictedStrings.join(", ").split(restrictedStringsPossibilitiesSplit).join(", ") + " ]." : "")), delete data[prop];
                }
              }
          };
          return checkObjectProps(objectCopy, template, diffObj || {}, validatedOptions, validatedOptionsPrepared), !isEmptyObj(objectCopy) && writeErrors && console.warn(`The following options are discarded due to invalidity:\r
` + window2.JSON.stringify(objectCopy, null, 2)), { _default: validatedOptions, _prepared: validatedOptionsPrepared };
        } };
      }();
      function initOverlayScrollbarsStatics() {
        _pluginsGlobals || (_pluginsGlobals = new OverlayScrollbarsGlobals(_pluginsOptions._defaults)), _pluginsAutoUpdateLoop || (_pluginsAutoUpdateLoop = new OverlayScrollbarsAutoUpdateLoop(_pluginsGlobals));
      }
      function OverlayScrollbarsGlobals(defaultOptions) {
        var _base = this, strOverflow = "overflow", strHidden = "hidden", strScroll = "scroll", bodyElement = FRAMEWORK("body"), scrollbarDummyElement = FRAMEWORK('<div id="os-dummy-scrollbar-size"><div></div></div>'), scrollbarDummyElement0 = scrollbarDummyElement[0], dummyContainerChild = FRAMEWORK(scrollbarDummyElement.children("div").eq(0));
        bodyElement.append(scrollbarDummyElement), scrollbarDummyElement.hide().show();
        var nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement0), nativeScrollbarIsOverlaid = { x: nativeScrollbarSize.x === 0, y: nativeScrollbarSize.y === 0 }, msie = function() {
          var ua = window2.navigator.userAgent, strIndexOf = "indexOf", strSubString = "substring", msie2 = ua[strIndexOf]("MSIE "), trident = ua[strIndexOf]("Trident/"), edge = ua[strIndexOf]("Edge/"), rv = ua[strIndexOf]("rv:"), result, parseIntFunc = parseInt;
          return msie2 > 0 ? result = parseIntFunc(ua[strSubString](msie2 + 5, ua[strIndexOf](".", msie2)), 10) : trident > 0 ? result = parseIntFunc(ua[strSubString](rv + 3, ua[strIndexOf](".", rv)), 10) : edge > 0 && (result = parseIntFunc(ua[strSubString](edge + 5, ua[strIndexOf](".", edge)), 10)), result;
        }();
        FRAMEWORK.extend(_base, { defaultOptions, msie, autoUpdateLoop: false, autoUpdateRecommended: !COMPATIBILITY.mO(), nativeScrollbarSize, nativeScrollbarIsOverlaid, nativeScrollbarStyling: function() {
          var result = false;
          scrollbarDummyElement.addClass("os-viewport-native-scrollbars-invisible");
          try {
            result = scrollbarDummyElement.css("scrollbar-width") === "none" && (msie > 9 || !msie) || window2.getComputedStyle(scrollbarDummyElement0, "::-webkit-scrollbar").getPropertyValue("display") === "none";
          } catch {
          }
          return result;
        }(), overlayScrollbarDummySize: { x: 30, y: 30 }, cssCalc: VENDORS._cssPropertyValue("width", "calc", "(1px)") || null, restrictedMeasuring: function() {
          scrollbarDummyElement.css(strOverflow, strHidden);
          var scrollSize = { w: scrollbarDummyElement0[LEXICON.sW], h: scrollbarDummyElement0[LEXICON.sH] };
          scrollbarDummyElement.css(strOverflow, "visible");
          var scrollSize2 = { w: scrollbarDummyElement0[LEXICON.sW], h: scrollbarDummyElement0[LEXICON.sH] };
          return scrollSize.w - scrollSize2.w !== 0 || scrollSize.h - scrollSize2.h !== 0;
        }(), rtlScrollBehavior: function() {
          scrollbarDummyElement.css({ "overflow-y": strHidden, "overflow-x": strScroll, direction: "rtl" }).scrollLeft(0);
          var dummyContainerOffset = scrollbarDummyElement.offset(), dummyContainerChildOffset = dummyContainerChild.offset();
          scrollbarDummyElement.scrollLeft(-999);
          var dummyContainerChildOffsetAfterScroll = dummyContainerChild.offset();
          return { i: dummyContainerOffset.left === dummyContainerChildOffset.left, n: dummyContainerChildOffset.left !== dummyContainerChildOffsetAfterScroll.left };
        }(), supportTransform: !!VENDORS._cssProperty("transform"), supportTransition: !!VENDORS._cssProperty("transition"), supportPassiveEvents: function() {
          var supportsPassive = false;
          try {
            window2.addEventListener("test", null, Object.defineProperty({}, "passive", { get: function() {
              supportsPassive = true;
            } }));
          } catch {
          }
          return supportsPassive;
        }(), supportResizeObserver: !!COMPATIBILITY.rO(), supportMutationObserver: !!COMPATIBILITY.mO() }), scrollbarDummyElement.removeAttr(LEXICON.s).remove(), function() {
          if (nativeScrollbarIsOverlaid.x && nativeScrollbarIsOverlaid.y)
            return;
          var abs = MATH.abs, windowWidth = COMPATIBILITY.wW(), windowHeight = COMPATIBILITY.wH(), windowDpr = getWindowDPR(), onResize = function() {
            if (INSTANCES().length > 0) {
              var newW = COMPATIBILITY.wW(), newH = COMPATIBILITY.wH(), deltaW = newW - windowWidth, deltaH = newH - windowHeight;
              if (deltaW === 0 && deltaH === 0)
                return;
              var deltaWRatio = MATH.round(newW / (windowWidth / 100)), deltaHRatio = MATH.round(newH / (windowHeight / 100)), absDeltaW = abs(deltaW), absDeltaH = abs(deltaH), absDeltaWRatio = abs(deltaWRatio), absDeltaHRatio = abs(deltaHRatio), newDPR = getWindowDPR(), deltaIsBigger = absDeltaW > 2 && absDeltaH > 2, difference = !differenceIsBiggerThanOne(absDeltaWRatio, absDeltaHRatio), dprChanged = newDPR !== windowDpr && windowDpr > 0, isZoom = deltaIsBigger && difference && dprChanged, oldScrollbarSize = _base.nativeScrollbarSize, newScrollbarSize;
              isZoom && (bodyElement.append(scrollbarDummyElement), newScrollbarSize = _base.nativeScrollbarSize = calcNativeScrollbarSize(scrollbarDummyElement[0]), scrollbarDummyElement.remove(), (oldScrollbarSize.x !== newScrollbarSize.x || oldScrollbarSize.y !== newScrollbarSize.y) && FRAMEWORK.each(INSTANCES(), function() {
                INSTANCES(this) && INSTANCES(this).update("zoom");
              })), windowWidth = newW, windowHeight = newH, windowDpr = newDPR;
            }
          };
          function differenceIsBiggerThanOne(valOne, valTwo) {
            var absValOne = abs(valOne), absValTwo = abs(valTwo);
            return !(absValOne === absValTwo || absValOne + 1 === absValTwo || absValOne - 1 === absValTwo);
          }
          function getWindowDPR() {
            var dDPI = window2.screen.deviceXDPI || 0, sDPI = window2.screen.logicalXDPI || 1;
            return window2.devicePixelRatio || dDPI / sDPI;
          }
          FRAMEWORK(window2).on("resize", onResize);
        }();
        function calcNativeScrollbarSize(measureElement) {
          return { x: measureElement[LEXICON.oH] - measureElement[LEXICON.cH], y: measureElement[LEXICON.oW] - measureElement[LEXICON.cW] };
        }
      }
      function OverlayScrollbarsAutoUpdateLoop(globals) {
        var _base = this, _inArray = FRAMEWORK.inArray, _getNow = COMPATIBILITY.now, _strAutoUpdate = "autoUpdate", _strAutoUpdateInterval = _strAutoUpdate + "Interval", _strLength = LEXICON.l, _loopingInstances = [], _loopingInstancesIntervalCache = [], _loopIsActive = false, _loopIntervalDefault = 33, _loopInterval = _loopIntervalDefault, _loopTimeOld = _getNow(), _loopID, loop = function() {
          if (_loopingInstances[_strLength] > 0 && _loopIsActive) {
            _loopID = COMPATIBILITY.rAF()(function() {
              loop();
            });
            var timeNew = _getNow(), timeDelta = timeNew - _loopTimeOld, lowestInterval, instance, instanceOptions, instanceAutoUpdateAllowed, instanceAutoUpdateInterval, now;
            if (timeDelta > _loopInterval) {
              _loopTimeOld = timeNew - timeDelta % _loopInterval, lowestInterval = _loopIntervalDefault;
              for (var i = 0; i < _loopingInstances[_strLength]; i++)
                instance = _loopingInstances[i], instance !== undefined2 && (instanceOptions = instance.options(), instanceAutoUpdateAllowed = instanceOptions[_strAutoUpdate], instanceAutoUpdateInterval = MATH.max(1, instanceOptions[_strAutoUpdateInterval]), now = _getNow(), (instanceAutoUpdateAllowed === true || instanceAutoUpdateAllowed === null) && now - _loopingInstancesIntervalCache[i] > instanceAutoUpdateInterval && (instance.update("auto"), _loopingInstancesIntervalCache[i] = new Date(now += instanceAutoUpdateInterval)), lowestInterval = MATH.max(1, MATH.min(lowestInterval, instanceAutoUpdateInterval)));
              _loopInterval = lowestInterval;
            }
          } else
            _loopInterval = _loopIntervalDefault;
        };
        _base.add = function(instance) {
          _inArray(instance, _loopingInstances) === -1 && (_loopingInstances.push(instance), _loopingInstancesIntervalCache.push(_getNow()), _loopingInstances[_strLength] > 0 && !_loopIsActive && (_loopIsActive = true, globals.autoUpdateLoop = _loopIsActive, loop()));
        }, _base.remove = function(instance) {
          var index = _inArray(instance, _loopingInstances);
          index > -1 && (_loopingInstancesIntervalCache.splice(index, 1), _loopingInstances.splice(index, 1), _loopingInstances[_strLength] === 0 && _loopIsActive && (_loopIsActive = false, globals.autoUpdateLoop = _loopIsActive, _loopID !== undefined2 && (COMPATIBILITY.cAF()(_loopID), _loopID = -1)));
        };
      }
      function OverlayScrollbarsInstance(pluginTargetElement, options, extensions, globals, autoUpdateLoop) {
        var type = COMPATIBILITY.type, inArray = FRAMEWORK.inArray, each = FRAMEWORK.each, _base = new _plugin(), _frameworkProto = FRAMEWORK[LEXICON.p];
        if (!isHTMLElement(pluginTargetElement))
          return;
        if (INSTANCES(pluginTargetElement)) {
          var inst = INSTANCES(pluginTargetElement);
          return inst.options(options), inst;
        }
        var _nativeScrollbarIsOverlaid, _overlayScrollbarDummySize, _rtlScrollBehavior, _autoUpdateRecommended, _msieVersion, _nativeScrollbarStyling, _cssCalc, _nativeScrollbarSize, _supportTransition, _supportTransform, _supportPassiveEvents, _supportResizeObserver, _supportMutationObserver, _initialized, _destroyed, _isTextarea, _isBody, _documentMixed, _domExists, _isBorderBox, _sizeAutoObserverAdded, _paddingX, _paddingY, _borderX, _borderY, _marginX, _marginY, _isRTL, _sleeping, _contentBorderSize = {}, _scrollHorizontalInfo = {}, _scrollVerticalInfo = {}, _viewportSize = {}, _nativeScrollbarMinSize = {}, _strMinusHidden = "-hidden", _strMarginMinus = "margin-", _strPaddingMinus = "padding-", _strBorderMinus = "border-", _strTop = "top", _strRight = "right", _strBottom = "bottom", _strLeft = "left", _strMinMinus = "min-", _strMaxMinus = "max-", _strWidth = "width", _strHeight = "height", _strFloat = "float", _strEmpty = "", _strAuto = "auto", _strSync = "sync", _strScroll = "scroll", _strHundredPercent = "100%", _strX = "x", _strY = "y", _strDot = ".", _strSpace = " ", _strScrollbar = "scrollbar", _strMinusHorizontal = "-horizontal", _strMinusVertical = "-vertical", _strScrollLeft = _strScroll + "Left", _strScrollTop = _strScroll + "Top", _strMouseTouchDownEvent = "mousedown touchstart", _strMouseTouchUpEvent = "mouseup touchend touchcancel", _strMouseTouchMoveEvent = "mousemove touchmove", _strMouseEnter = "mouseenter", _strMouseLeave = "mouseleave", _strKeyDownEvent = "keydown", _strKeyUpEvent = "keyup", _strSelectStartEvent = "selectstart", _strTransitionEndEvent = "transitionend webkitTransitionEnd oTransitionEnd", _strResizeObserverProperty = "__overlayScrollbarsRO__", _cassNamesPrefix = "os-", _classNameHTMLElement = _cassNamesPrefix + "html", _classNameHostElement = _cassNamesPrefix + "host", _classNameHostElementForeign = _classNameHostElement + "-foreign", _classNameHostTextareaElement = _classNameHostElement + "-textarea", _classNameHostScrollbarHorizontalHidden = _classNameHostElement + "-" + _strScrollbar + _strMinusHorizontal + _strMinusHidden, _classNameHostScrollbarVerticalHidden = _classNameHostElement + "-" + _strScrollbar + _strMinusVertical + _strMinusHidden, _classNameHostTransition = _classNameHostElement + "-transition", _classNameHostRTL = _classNameHostElement + "-rtl", _classNameHostResizeDisabled = _classNameHostElement + "-resize-disabled", _classNameHostScrolling = _classNameHostElement + "-scrolling", _classNameHostOverflow = _classNameHostElement + "-overflow", _classNameHostOverflow = _classNameHostElement + "-overflow", _classNameHostOverflowX = _classNameHostOverflow + "-x", _classNameHostOverflowY = _classNameHostOverflow + "-y", _classNameTextareaElement = _cassNamesPrefix + "textarea", _classNameTextareaCoverElement = _classNameTextareaElement + "-cover", _classNamePaddingElement = _cassNamesPrefix + "padding", _classNameViewportElement = _cassNamesPrefix + "viewport", _classNameViewportNativeScrollbarsInvisible = _classNameViewportElement + "-native-scrollbars-invisible", _classNameViewportNativeScrollbarsOverlaid = _classNameViewportElement + "-native-scrollbars-overlaid", _classNameContentElement = _cassNamesPrefix + "content", _classNameContentArrangeElement = _cassNamesPrefix + "content-arrange", _classNameContentGlueElement = _cassNamesPrefix + "content-glue", _classNameSizeAutoObserverElement = _cassNamesPrefix + "size-auto-observer", _classNameResizeObserverElement = _cassNamesPrefix + "resize-observer", _classNameResizeObserverItemElement = _cassNamesPrefix + "resize-observer-item", _classNameResizeObserverItemFinalElement = _classNameResizeObserverItemElement + "-final", _classNameTextInherit = _cassNamesPrefix + "text-inherit", _classNameScrollbar = _cassNamesPrefix + _strScrollbar, _classNameScrollbarTrack = _classNameScrollbar + "-track", _classNameScrollbarTrackOff = _classNameScrollbarTrack + "-off", _classNameScrollbarHandle = _classNameScrollbar + "-handle", _classNameScrollbarHandleOff = _classNameScrollbarHandle + "-off", _classNameScrollbarUnusable = _classNameScrollbar + "-unusable", _classNameScrollbarAutoHidden = _classNameScrollbar + "-" + _strAuto + _strMinusHidden, _classNameScrollbarCorner = _classNameScrollbar + "-corner", _classNameScrollbarCornerResize = _classNameScrollbarCorner + "-resize", _classNameScrollbarCornerResizeB = _classNameScrollbarCornerResize + "-both", _classNameScrollbarCornerResizeH = _classNameScrollbarCornerResize + _strMinusHorizontal, _classNameScrollbarCornerResizeV = _classNameScrollbarCornerResize + _strMinusVertical, _classNameScrollbarHorizontal = _classNameScrollbar + _strMinusHorizontal, _classNameScrollbarVertical = _classNameScrollbar + _strMinusVertical, _classNameDragging = _cassNamesPrefix + "dragging", _classNameThemeNone = _cassNamesPrefix + "theme-none", _classNamesDynamicDestroy = [_classNameViewportNativeScrollbarsInvisible, _classNameViewportNativeScrollbarsOverlaid, _classNameScrollbarTrackOff, _classNameScrollbarHandleOff, _classNameScrollbarUnusable, _classNameScrollbarAutoHidden, _classNameScrollbarCornerResize, _classNameScrollbarCornerResizeB, _classNameScrollbarCornerResizeH, _classNameScrollbarCornerResizeV, _classNameDragging].join(_strSpace), _callbacksInitQeueue = [], _viewportAttrsFromTarget = [LEXICON.ti], _defaultOptions, _currentOptions, _currentPreparedOptions, _extensions = {}, _extensionsPrivateMethods = "added removed on contract", _lastUpdateTime, _swallowedUpdateHints = {}, _swallowedUpdateTimeout, _swallowUpdateLag = 42, _updateOnLoadEventName = "load", _updateOnLoadElms = [], _windowElement, _documentElement, _htmlElement, _bodyElement, _targetElement, _hostElement, _sizeAutoObserverElement, _sizeObserverElement, _paddingElement, _viewportElement, _contentElement, _contentArrangeElement, _contentGlueElement, _textareaCoverElement, _scrollbarCornerElement, _scrollbarHorizontalElement, _scrollbarHorizontalTrackElement, _scrollbarHorizontalHandleElement, _scrollbarVerticalElement, _scrollbarVerticalTrackElement, _scrollbarVerticalHandleElement, _windowElementNative, _documentElementNative, _targetElementNative, _hostElementNative, _sizeAutoObserverElementNative, _sizeObserverElementNative, _paddingElementNative, _viewportElementNative, _contentElementNative, _hostSizeCache, _contentScrollSizeCache, _arrangeContentSizeCache, _hasOverflowCache, _hideOverflowCache, _widthAutoCache, _heightAutoCache, _cssBoxSizingCache, _cssPaddingCache, _cssBorderCache, _cssMarginCache, _cssDirectionCache, _cssDirectionDetectedCache, _paddingAbsoluteCache, _clipAlwaysCache, _contentGlueSizeCache, _overflowBehaviorCache, _overflowAmountCache, _ignoreOverlayScrollbarHidingCache, _autoUpdateCache, _sizeAutoCapableCache, _contentElementScrollSizeChangeDetectedCache, _hostElementSizeChangeDetectedCache, _scrollbarsVisibilityCache, _scrollbarsAutoHideCache, _scrollbarsClickScrollingCache, _scrollbarsDragScrollingCache, _resizeCache, _normalizeRTLCache, _classNameCache, _oldClassName, _textareaAutoWrappingCache, _textareaInfoCache, _textareaSizeCache, _textareaDynHeightCache, _textareaDynWidthCache, _bodyMinSizeCache, _updateAutoCache = {}, _mutationObserverHost, _mutationObserverContent, _mutationObserverHostCallback, _mutationObserverContentCallback, _mutationObserversConnected, _mutationObserverAttrsTextarea = ["wrap", "cols", "rows"], _mutationObserverAttrsHost = [LEXICON.i, LEXICON.c, LEXICON.s, "open"].concat(_viewportAttrsFromTarget), _destroyEvents = [], _textareaHasFocus, _scrollbarsAutoHideTimeoutId, _scrollbarsAutoHideMoveTimeoutId, _scrollbarsAutoHideDelay, _scrollbarsAutoHideNever, _scrollbarsAutoHideScroll, _scrollbarsAutoHideMove, _scrollbarsAutoHideLeave, _scrollbarsHandleHovered, _scrollbarsHandlesDefineScrollPos, _resizeNone, _resizeBoth, _resizeHorizontal, _resizeVertical;
        function setupResponsiveEventListener(element, eventNames, listener, remove2, passiveOrOptions) {
          var collected = COMPATIBILITY.isA(eventNames) && COMPATIBILITY.isA(listener), method = remove2 ? "removeEventListener" : "addEventListener", onOff = remove2 ? "off" : "on", events = collected ? false : eventNames.split(_strSpace), i = 0, passiveOrOptionsIsObj = FRAMEWORK.isPlainObject(passiveOrOptions), passive = _supportPassiveEvents && (passiveOrOptionsIsObj ? passiveOrOptions._passive : passiveOrOptions) || false, capture = passiveOrOptionsIsObj && (passiveOrOptions._capture || false), nativeParam = _supportPassiveEvents ? { passive, capture } : capture;
          if (collected)
            for (; i < eventNames[LEXICON.l]; i++)
              setupResponsiveEventListener(element, eventNames[i], listener[i], remove2, passiveOrOptions);
          else
            for (; i < events[LEXICON.l]; i++)
              _supportPassiveEvents ? element[0][method](events[i], listener, nativeParam) : element[onOff](events[i], listener);
        }
        function addDestroyEventListener(element, eventNames, listener, passive) {
          setupResponsiveEventListener(element, eventNames, listener, false, passive), _destroyEvents.push(COMPATIBILITY.bind(setupResponsiveEventListener, 0, element, eventNames, listener, true, passive));
        }
        function setupResizeObserver(targetElement, onElementResizedCallback) {
          if (targetElement) {
            var resizeObserver = COMPATIBILITY.rO(), strAnimationStartEvent = "animationstart mozAnimationStart webkitAnimationStart MSAnimationStart", strChildNodes = "childNodes", constScroll = 3333333, callback = function() {
              targetElement[_strScrollTop](constScroll)[_strScrollLeft](_isRTL ? _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll : constScroll), onElementResizedCallback();
            };
            if (onElementResizedCallback) {
              if (_supportResizeObserver) {
                var element = targetElement.addClass("observed").append(generateDiv(_classNameResizeObserverElement)).contents()[0], observer = element[_strResizeObserverProperty] = new resizeObserver(callback);
                observer.observe(element);
              } else if (_msieVersion > 9 || !_autoUpdateRecommended) {
                targetElement.prepend(generateDiv(_classNameResizeObserverElement, generateDiv({ c: _classNameResizeObserverItemElement, dir: "ltr" }, generateDiv(_classNameResizeObserverItemElement, generateDiv(_classNameResizeObserverItemFinalElement)) + generateDiv(_classNameResizeObserverItemElement, generateDiv({ c: _classNameResizeObserverItemFinalElement, style: "width: 200%; height: 200%" })))));
                var observerElement = targetElement[0][strChildNodes][0][strChildNodes][0], shrinkElement = FRAMEWORK(observerElement[strChildNodes][1]), expandElement = FRAMEWORK(observerElement[strChildNodes][0]), expandElementChild = FRAMEWORK(expandElement[0][strChildNodes][0]), widthCache = observerElement[LEXICON.oW], heightCache = observerElement[LEXICON.oH], isDirty, rAFId, currWidth, currHeight, factor = 2, nativeScrollbarSize = globals.nativeScrollbarSize, reset = function() {
                  expandElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll), shrinkElement[_strScrollLeft](constScroll)[_strScrollTop](constScroll);
                }, onResized = function() {
                  rAFId = 0, isDirty && (widthCache = currWidth, heightCache = currHeight, callback());
                }, onScroll = function(event) {
                  return currWidth = observerElement[LEXICON.oW], currHeight = observerElement[LEXICON.oH], isDirty = currWidth != widthCache || currHeight != heightCache, event && isDirty && !rAFId ? (COMPATIBILITY.cAF()(rAFId), rAFId = COMPATIBILITY.rAF()(onResized)) : event || onResized(), reset(), event && (COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event)), false;
                }, expandChildCSS = {}, observerElementCSS = {};
                setTopRightBottomLeft(observerElementCSS, _strEmpty, [-((nativeScrollbarSize.y + 1) * factor), nativeScrollbarSize.x * -factor, nativeScrollbarSize.y * -factor, -((nativeScrollbarSize.x + 1) * factor)]), FRAMEWORK(observerElement).css(observerElementCSS), expandElement.on(_strScroll, onScroll), shrinkElement.on(_strScroll, onScroll), targetElement.on(strAnimationStartEvent, function() {
                  onScroll(false);
                }), expandChildCSS[_strWidth] = constScroll, expandChildCSS[_strHeight] = constScroll, expandElementChild.css(expandChildCSS), reset();
              } else {
                var attachEvent = _documentElementNative.attachEvent, isIE = _msieVersion !== undefined2;
                if (attachEvent)
                  targetElement.prepend(generateDiv(_classNameResizeObserverElement)), findFirst(targetElement, _strDot + _classNameResizeObserverElement)[0].attachEvent("onresize", callback);
                else {
                  var obj = _documentElementNative.createElement(TYPES.o);
                  obj.setAttribute(LEXICON.ti, "-1"), obj.setAttribute(LEXICON.c, _classNameResizeObserverElement), obj.onload = function() {
                    var wnd = this.contentDocument.defaultView;
                    wnd.addEventListener("resize", callback), wnd.document.documentElement.style.display = "none";
                  }, obj.type = "text/html", isIE && targetElement.prepend(obj), obj.data = "about:blank", isIE || targetElement.prepend(obj), targetElement.on(strAnimationStartEvent, callback);
                }
              }
              if (targetElement[0] === _sizeObserverElementNative) {
                var directionChanged = function() {
                  var dir = _hostElement.css("direction"), css = {}, scrollLeftValue = 0, result = false;
                  return dir !== _cssDirectionDetectedCache && (dir === "ltr" ? (css[_strLeft] = 0, css[_strRight] = _strAuto, scrollLeftValue = constScroll) : (css[_strLeft] = _strAuto, css[_strRight] = 0, scrollLeftValue = _rtlScrollBehavior.n ? -constScroll : _rtlScrollBehavior.i ? 0 : constScroll), _sizeObserverElement.children().eq(0).css(css), _sizeObserverElement[_strScrollLeft](scrollLeftValue)[_strScrollTop](constScroll), _cssDirectionDetectedCache = dir, result = true), result;
                };
                directionChanged(), addDestroyEventListener(targetElement, _strScroll, function(event) {
                  return directionChanged() && update(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event), false;
                });
              }
            } else if (_supportResizeObserver) {
              var element = targetElement.contents()[0], resizeObserverObj = element[_strResizeObserverProperty];
              resizeObserverObj && (resizeObserverObj.disconnect(), delete element[_strResizeObserverProperty]);
            } else
              remove(targetElement.children(_strDot + _classNameResizeObserverElement).eq(0));
          }
        }
        function createMutationObservers() {
          if (_supportMutationObserver) {
            var mutationObserverContentLag = 11, mutationObserver = COMPATIBILITY.mO(), contentLastUpdate = COMPATIBILITY.now(), mutationTarget, mutationAttrName, mutationIsClass, oldMutationVal, newClassVal, hostClassNameRegex, contentTimeout, now, sizeAuto, action;
            _mutationObserverHostCallback = function(mutations) {
              var doUpdate = false, doUpdateForce = false, mutation, mutatedAttrs = [];
              return _initialized && !_sleeping && (each(mutations, function() {
                mutation = this, mutationTarget = mutation.target, mutationAttrName = mutation.attributeName, mutationIsClass = mutationAttrName === LEXICON.c, oldMutationVal = mutation.oldValue, newClassVal = mutationTarget.className, _domExists && mutationIsClass && !doUpdateForce && oldMutationVal.indexOf(_classNameHostElementForeign) > -1 && newClassVal.indexOf(_classNameHostElementForeign) < 0 && (hostClassNameRegex = createHostClassNameRegExp(true), _hostElementNative.className = newClassVal.split(_strSpace).concat(oldMutationVal.split(_strSpace).filter(function(name) {
                  return name.match(hostClassNameRegex);
                })).join(_strSpace), doUpdate = doUpdateForce = true), doUpdate || (doUpdate = mutationIsClass ? hostClassNamesChanged(oldMutationVal, newClassVal) : mutationAttrName === LEXICON.s ? oldMutationVal !== mutationTarget[LEXICON.s].cssText : true), mutatedAttrs.push(mutationAttrName);
              }), updateViewportAttrsFromTarget(mutatedAttrs), doUpdate && _base.update(doUpdateForce || _strAuto)), doUpdate;
            }, _mutationObserverContentCallback = function(mutations) {
              var doUpdate = false, mutation;
              return _initialized && !_sleeping && (each(mutations, function() {
                return mutation = this, doUpdate = isUnknownMutation(mutation), !doUpdate;
              }), doUpdate && (now = COMPATIBILITY.now(), sizeAuto = _heightAutoCache || _widthAutoCache, action = function() {
                _destroyed || (contentLastUpdate = now, _isTextarea && textareaUpdate(), sizeAuto ? update() : _base.update(_strAuto));
              }, clearTimeout(contentTimeout), mutationObserverContentLag <= 0 || now - contentLastUpdate > mutationObserverContentLag || !sizeAuto ? action() : contentTimeout = setTimeout(action, mutationObserverContentLag))), doUpdate;
            }, _mutationObserverHost = new mutationObserver(_mutationObserverHostCallback), _mutationObserverContent = new mutationObserver(_mutationObserverContentCallback);
          }
        }
        function connectMutationObservers() {
          _supportMutationObserver && !_mutationObserversConnected && (_mutationObserverHost.observe(_hostElementNative, { attributes: true, attributeOldValue: true, attributeFilter: _mutationObserverAttrsHost }), _mutationObserverContent.observe(_isTextarea ? _targetElementNative : _contentElementNative, { attributes: true, attributeOldValue: true, subtree: !_isTextarea, childList: !_isTextarea, characterData: !_isTextarea, attributeFilter: _isTextarea ? _mutationObserverAttrsTextarea : _mutationObserverAttrsHost }), _mutationObserversConnected = true);
        }
        function disconnectMutationObservers() {
          _supportMutationObserver && _mutationObserversConnected && (_mutationObserverHost.disconnect(), _mutationObserverContent.disconnect(), _mutationObserversConnected = false);
        }
        function hostOnResized() {
          if (!_sleeping) {
            var changed, hostSize = { w: _sizeObserverElementNative[LEXICON.sW], h: _sizeObserverElementNative[LEXICON.sH] };
            changed = checkCache(hostSize, _hostElementSizeChangeDetectedCache), _hostElementSizeChangeDetectedCache = hostSize, changed && update({ _hostSizeChanged: true });
          }
        }
        function hostOnMouseEnter() {
          _scrollbarsAutoHideLeave && refreshScrollbarsAutoHide(true);
        }
        function hostOnMouseLeave() {
          _scrollbarsAutoHideLeave && !_bodyElement.hasClass(_classNameDragging) && refreshScrollbarsAutoHide(false);
        }
        function hostOnMouseMove() {
          _scrollbarsAutoHideMove && (refreshScrollbarsAutoHide(true), clearTimeout(_scrollbarsAutoHideMoveTimeoutId), _scrollbarsAutoHideMoveTimeoutId = setTimeout(function() {
            _scrollbarsAutoHideMove && !_destroyed && refreshScrollbarsAutoHide(false);
          }, 100));
        }
        function documentOnSelectStart(event) {
          return COMPATIBILITY.prvD(event), false;
        }
        function updateOnLoadCallback(event) {
          if (!_destroyed) {
            var target = event.target, elm = FRAMEWORK(event.target), index = FRAMEWORK.inArray(target, _updateOnLoadElms);
            index > -1 && _updateOnLoadElms.splice(index, 1), eachUpdateOnLoad(function(i, updateOnLoadSelector) {
              elm.is(updateOnLoadSelector) && update({ _contentSizeChanged: true });
            });
          }
        }
        function setupHostMouseTouchEvents(destroy) {
          destroy || setupHostMouseTouchEvents(true), setupResponsiveEventListener(_hostElement, _strMouseTouchMoveEvent.split(_strSpace)[0], hostOnMouseMove, !_scrollbarsAutoHideMove || destroy, true), setupResponsiveEventListener(_hostElement, [_strMouseEnter, _strMouseLeave], [hostOnMouseEnter, hostOnMouseLeave], !_scrollbarsAutoHideLeave || destroy, true), !_initialized && !destroy && _hostElement.one("mouseover", hostOnMouseEnter);
        }
        function bodyMinSizeChanged() {
          var bodyMinSize = {};
          return _isBody && _contentArrangeElement && (bodyMinSize.w = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strWidth)), bodyMinSize.h = parseToZeroOrNumber(_contentArrangeElement.css(_strMinMinus + _strHeight)), bodyMinSize.c = checkCache(bodyMinSize, _bodyMinSizeCache), bodyMinSize.f = true), _bodyMinSizeCache = bodyMinSize, !!bodyMinSize.c;
        }
        function hostClassNamesChanged(oldClassNames, newClassNames) {
          var currClasses = typeof newClassNames == TYPES.s ? newClassNames.split(_strSpace) : [], oldClasses = typeof oldClassNames == TYPES.s ? oldClassNames.split(_strSpace) : [], diff = getArrayDifferences(oldClasses, currClasses), idx = inArray(_classNameThemeNone, diff), i, regex;
          if (idx > -1 && diff.splice(idx, 1), diff[LEXICON.l] > 0) {
            for (regex = createHostClassNameRegExp(true, true), i = 0; i < diff.length; i++)
              if (!diff[i].match(regex))
                return true;
          }
          return false;
        }
        function isUnknownMutation(mutation) {
          var attributeName = mutation.attributeName, mutationTarget = mutation.target, mutationType = mutation.type, strClosest = "closest";
          if (mutationTarget === _contentElementNative)
            return attributeName === null;
          if (mutationType === "attributes" && (attributeName === LEXICON.c || attributeName === LEXICON.s) && !_isTextarea) {
            if (attributeName === LEXICON.c && FRAMEWORK(mutationTarget).hasClass(_classNameHostElement))
              return hostClassNamesChanged(mutation.oldValue, mutationTarget.className);
            if (typeof mutationTarget[strClosest] != TYPES.f)
              return true;
            if (mutationTarget[strClosest](_strDot + _classNameResizeObserverElement) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbar) !== null || mutationTarget[strClosest](_strDot + _classNameScrollbarCorner) !== null)
              return false;
          }
          return true;
        }
        function updateAutoContentSizeChanged() {
          if (_sleeping)
            return false;
          var contentMeasureElement = getContentMeasureElement(), textareaValueLength = _isTextarea && _widthAutoCache && !_textareaAutoWrappingCache ? _targetElement.val().length : 0, setCSS = !_mutationObserversConnected && _widthAutoCache && !_isTextarea, css = {}, float, bodyMinSizeC, changed, contentElementScrollSize;
          return setCSS && (float = _contentElement.css(_strFloat), css[_strFloat] = _isRTL ? _strRight : _strLeft, css[_strWidth] = _strAuto, _contentElement.css(css)), contentElementScrollSize = { w: contentMeasureElement[LEXICON.sW] + textareaValueLength, h: contentMeasureElement[LEXICON.sH] + textareaValueLength }, setCSS && (css[_strFloat] = float, css[_strWidth] = _strHundredPercent, _contentElement.css(css)), bodyMinSizeC = bodyMinSizeChanged(), changed = checkCache(contentElementScrollSize, _contentElementScrollSizeChangeDetectedCache), _contentElementScrollSizeChangeDetectedCache = contentElementScrollSize, changed || bodyMinSizeC;
        }
        function meaningfulAttrsChanged() {
          if (!(_sleeping || _mutationObserversConnected)) {
            var elem, curr, cache, changedAttrs = [], checks = [{ _elem: _hostElement, _attrs: _mutationObserverAttrsHost.concat(":visible") }, { _elem: _isTextarea ? _targetElement : undefined2, _attrs: _mutationObserverAttrsTextarea }];
            return each(checks, function(index, check) {
              elem = check._elem, elem && each(check._attrs, function(index2, attr) {
                curr = attr.charAt(0) === ":" ? elem.is(attr) : elem.attr(attr), cache = _updateAutoCache[attr], checkCache(curr, cache) && changedAttrs.push(attr), _updateAutoCache[attr] = curr;
              });
            }), updateViewportAttrsFromTarget(changedAttrs), changedAttrs[LEXICON.l] > 0;
          }
        }
        function isSizeAffectingCSSProperty(propertyName) {
          if (!_initialized)
            return true;
          var flexGrow = "flex-grow", flexShrink = "flex-shrink", flexBasis = "flex-basis", affectingPropsX = [_strWidth, _strMinMinus + _strWidth, _strMaxMinus + _strWidth, _strMarginMinus + _strLeft, _strMarginMinus + _strRight, _strLeft, _strRight, "font-weight", "word-spacing", flexGrow, flexShrink, flexBasis], affectingPropsXContentBox = [_strPaddingMinus + _strLeft, _strPaddingMinus + _strRight, _strBorderMinus + _strLeft + _strWidth, _strBorderMinus + _strRight + _strWidth], affectingPropsY = [_strHeight, _strMinMinus + _strHeight, _strMaxMinus + _strHeight, _strMarginMinus + _strTop, _strMarginMinus + _strBottom, _strTop, _strBottom, "line-height", flexGrow, flexShrink, flexBasis], affectingPropsYContentBox = [_strPaddingMinus + _strTop, _strPaddingMinus + _strBottom, _strBorderMinus + _strTop + _strWidth, _strBorderMinus + _strBottom + _strWidth], _strS = "s", _strVS = "v-s", checkX = _overflowBehaviorCache.x === _strS || _overflowBehaviorCache.x === _strVS, checkY = _overflowBehaviorCache.y === _strS || _overflowBehaviorCache.y === _strVS, sizeIsAffected = false, checkPropertyName = function(arr, name) {
            for (var i = 0; i < arr[LEXICON.l]; i++)
              if (arr[i] === name)
                return true;
            return false;
          };
          return checkY && (sizeIsAffected = checkPropertyName(affectingPropsY, propertyName), !sizeIsAffected && !_isBorderBox && (sizeIsAffected = checkPropertyName(affectingPropsYContentBox, propertyName))), checkX && !sizeIsAffected && (sizeIsAffected = checkPropertyName(affectingPropsX, propertyName), !sizeIsAffected && !_isBorderBox && (sizeIsAffected = checkPropertyName(affectingPropsXContentBox, propertyName))), sizeIsAffected;
        }
        function updateViewportAttrsFromTarget(attrs) {
          attrs = attrs || _viewportAttrsFromTarget, each(attrs, function(index, attr) {
            if (COMPATIBILITY.inA(attr, _viewportAttrsFromTarget) > -1) {
              var targetAttr = _targetElement.attr(attr);
              type(targetAttr) == TYPES.s ? _viewportElement.attr(attr, targetAttr) : _viewportElement.removeAttr(attr);
            }
          });
        }
        function textareaUpdate() {
          if (!_sleeping) {
            var wrapAttrOff = !_textareaAutoWrappingCache, minWidth = _viewportSize.w, minHeight = _viewportSize.h, css = {}, doMeasure = _widthAutoCache || wrapAttrOff, origWidth, width, origHeight, height;
            return css[_strMinMinus + _strWidth] = _strEmpty, css[_strMinMinus + _strHeight] = _strEmpty, css[_strWidth] = _strAuto, _targetElement.css(css), origWidth = _targetElementNative[LEXICON.oW], width = doMeasure ? MATH.max(origWidth, _targetElementNative[LEXICON.sW] - 1) : 1, css[_strWidth] = _widthAutoCache ? _strAuto : _strHundredPercent, css[_strMinMinus + _strWidth] = _strHundredPercent, css[_strHeight] = _strAuto, _targetElement.css(css), origHeight = _targetElementNative[LEXICON.oH], height = MATH.max(origHeight, _targetElementNative[LEXICON.sH] - 1), css[_strWidth] = width, css[_strHeight] = height, _textareaCoverElement.css(css), css[_strMinMinus + _strWidth] = minWidth, css[_strMinMinus + _strHeight] = minHeight, _targetElement.css(css), { _originalWidth: origWidth, _originalHeight: origHeight, _dynamicWidth: width, _dynamicHeight: height };
          }
        }
        function update(updateHints) {
          clearTimeout(_swallowedUpdateTimeout), updateHints = updateHints || {}, _swallowedUpdateHints._hostSizeChanged |= updateHints._hostSizeChanged, _swallowedUpdateHints._contentSizeChanged |= updateHints._contentSizeChanged, _swallowedUpdateHints._force |= updateHints._force;
          var now = COMPATIBILITY.now(), hostSizeChanged = !!_swallowedUpdateHints._hostSizeChanged, contentSizeChanged = !!_swallowedUpdateHints._contentSizeChanged, force = !!_swallowedUpdateHints._force, changedOptions = updateHints._changedOptions, swallow = _initialized && !_destroyed && !force && !changedOptions && now - _lastUpdateTime < _swallowUpdateLag && !_heightAutoCache && !_widthAutoCache, displayIsHidden;
          if (swallow && (_swallowedUpdateTimeout = setTimeout(update, _swallowUpdateLag)), !(_destroyed || swallow || _sleeping && !changedOptions || _initialized && !force && (displayIsHidden = _hostElement.is(":hidden")) || _hostElement.css("display") === "inline")) {
            _lastUpdateTime = now, _swallowedUpdateHints = {}, _nativeScrollbarStyling && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y) ? (_nativeScrollbarSize.x = 0, _nativeScrollbarSize.y = 0) : _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize), _nativeScrollbarMinSize = { x: (_nativeScrollbarSize.x + (_nativeScrollbarIsOverlaid.x ? 0 : 3)) * 3, y: (_nativeScrollbarSize.y + (_nativeScrollbarIsOverlaid.y ? 0 : 3)) * 3 }, changedOptions = changedOptions || {};
            var checkCacheAutoForce = function() {
              return checkCache.apply(this, [].slice.call(arguments).concat([force]));
            }, currScroll = { x: _viewportElement[_strScrollLeft](), y: _viewportElement[_strScrollTop]() }, currentPreparedOptionsScrollbars = _currentPreparedOptions.scrollbars, currentPreparedOptionsTextarea = _currentPreparedOptions.textarea, scrollbarsVisibility = currentPreparedOptionsScrollbars.visibility, scrollbarsVisibilityChanged = checkCacheAutoForce(scrollbarsVisibility, _scrollbarsVisibilityCache), scrollbarsAutoHide = currentPreparedOptionsScrollbars.autoHide, scrollbarsAutoHideChanged = checkCacheAutoForce(scrollbarsAutoHide, _scrollbarsAutoHideCache), scrollbarsClickScrolling = currentPreparedOptionsScrollbars.clickScrolling, scrollbarsClickScrollingChanged = checkCacheAutoForce(scrollbarsClickScrolling, _scrollbarsClickScrollingCache), scrollbarsDragScrolling = currentPreparedOptionsScrollbars.dragScrolling, scrollbarsDragScrollingChanged = checkCacheAutoForce(scrollbarsDragScrolling, _scrollbarsDragScrollingCache), className = _currentPreparedOptions.className, classNameChanged = checkCacheAutoForce(className, _classNameCache), resize = _currentPreparedOptions.resize, resizeChanged = checkCacheAutoForce(resize, _resizeCache) && !_isBody, paddingAbsolute = _currentPreparedOptions.paddingAbsolute, paddingAbsoluteChanged = checkCacheAutoForce(paddingAbsolute, _paddingAbsoluteCache), clipAlways = _currentPreparedOptions.clipAlways, clipAlwaysChanged = checkCacheAutoForce(clipAlways, _clipAlwaysCache), sizeAutoCapable = _currentPreparedOptions.sizeAutoCapable && !_isBody, sizeAutoCapableChanged = checkCacheAutoForce(sizeAutoCapable, _sizeAutoCapableCache), ignoreOverlayScrollbarHiding = _currentPreparedOptions.nativeScrollbarsOverlaid.showNativeScrollbars, ignoreOverlayScrollbarHidingChanged = checkCacheAutoForce(ignoreOverlayScrollbarHiding, _ignoreOverlayScrollbarHidingCache), autoUpdate = _currentPreparedOptions.autoUpdate, autoUpdateChanged = checkCacheAutoForce(autoUpdate, _autoUpdateCache), overflowBehavior = _currentPreparedOptions.overflowBehavior, overflowBehaviorChanged = checkCacheAutoForce(overflowBehavior, _overflowBehaviorCache, force), textareaDynWidth = currentPreparedOptionsTextarea.dynWidth, textareaDynWidthChanged = checkCacheAutoForce(_textareaDynWidthCache, textareaDynWidth), textareaDynHeight = currentPreparedOptionsTextarea.dynHeight, textareaDynHeightChanged = checkCacheAutoForce(_textareaDynHeightCache, textareaDynHeight);
            if (_scrollbarsAutoHideNever = scrollbarsAutoHide === "n", _scrollbarsAutoHideScroll = scrollbarsAutoHide === "s", _scrollbarsAutoHideMove = scrollbarsAutoHide === "m", _scrollbarsAutoHideLeave = scrollbarsAutoHide === "l", _scrollbarsAutoHideDelay = currentPreparedOptionsScrollbars.autoHideDelay, _oldClassName = _classNameCache, _resizeNone = resize === "n", _resizeBoth = resize === "b", _resizeHorizontal = resize === "h", _resizeVertical = resize === "v", _normalizeRTLCache = _currentPreparedOptions.normalizeRTL, ignoreOverlayScrollbarHiding = ignoreOverlayScrollbarHiding && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y, _scrollbarsVisibilityCache = scrollbarsVisibility, _scrollbarsAutoHideCache = scrollbarsAutoHide, _scrollbarsClickScrollingCache = scrollbarsClickScrolling, _scrollbarsDragScrollingCache = scrollbarsDragScrolling, _classNameCache = className, _resizeCache = resize, _paddingAbsoluteCache = paddingAbsolute, _clipAlwaysCache = clipAlways, _sizeAutoCapableCache = sizeAutoCapable, _ignoreOverlayScrollbarHidingCache = ignoreOverlayScrollbarHiding, _autoUpdateCache = autoUpdate, _overflowBehaviorCache = extendDeep({}, overflowBehavior), _textareaDynWidthCache = textareaDynWidth, _textareaDynHeightCache = textareaDynHeight, _hasOverflowCache = _hasOverflowCache || { x: false, y: false }, classNameChanged && (removeClass(_hostElement, _oldClassName + _strSpace + _classNameThemeNone), addClass(_hostElement, className !== undefined2 && className !== null && className.length > 0 ? className : _classNameThemeNone)), autoUpdateChanged && (autoUpdate === true || autoUpdate === null && _autoUpdateRecommended ? (disconnectMutationObservers(), autoUpdateLoop.add(_base)) : (autoUpdateLoop.remove(_base), connectMutationObservers())), sizeAutoCapableChanged)
              if (sizeAutoCapable)
                if (_contentGlueElement ? _contentGlueElement.show() : (_contentGlueElement = FRAMEWORK(generateDiv(_classNameContentGlueElement)), _paddingElement.before(_contentGlueElement)), _sizeAutoObserverAdded)
                  _sizeAutoObserverElement.show();
                else {
                  _sizeAutoObserverElement = FRAMEWORK(generateDiv(_classNameSizeAutoObserverElement)), _sizeAutoObserverElementNative = _sizeAutoObserverElement[0], _contentGlueElement.before(_sizeAutoObserverElement);
                  var oldSize = { w: -1, h: -1 };
                  setupResizeObserver(_sizeAutoObserverElement, function() {
                    var newSize = { w: _sizeAutoObserverElementNative[LEXICON.oW], h: _sizeAutoObserverElementNative[LEXICON.oH] };
                    checkCache(newSize, oldSize) && (_initialized && _heightAutoCache && newSize.h > 0 || _widthAutoCache && newSize.w > 0 || _initialized && !_heightAutoCache && newSize.h === 0 || !_widthAutoCache && newSize.w === 0) && update(), oldSize = newSize;
                  }), _sizeAutoObserverAdded = true, _cssCalc !== null && _sizeAutoObserverElement.css(_strHeight, _cssCalc + "(100% + 1px)");
                }
              else
                _sizeAutoObserverAdded && _sizeAutoObserverElement.hide(), _contentGlueElement && _contentGlueElement.hide();
            force && (_sizeObserverElement.find("*").trigger(_strScroll), _sizeAutoObserverAdded && _sizeAutoObserverElement.find("*").trigger(_strScroll)), displayIsHidden = displayIsHidden === undefined2 ? _hostElement.is(":hidden") : displayIsHidden;
            var textareaAutoWrapping = _isTextarea ? _targetElement.attr("wrap") !== "off" : false, textareaAutoWrappingChanged = checkCacheAutoForce(textareaAutoWrapping, _textareaAutoWrappingCache), cssDirection = _hostElement.css("direction"), cssDirectionChanged = checkCacheAutoForce(cssDirection, _cssDirectionCache), boxSizing = _hostElement.css("box-sizing"), boxSizingChanged = checkCacheAutoForce(boxSizing, _cssBoxSizingCache), padding = getTopRightBottomLeftHost(_strPaddingMinus), sizeAutoObserverElementBCRect;
            try {
              sizeAutoObserverElementBCRect = _sizeAutoObserverAdded ? _sizeAutoObserverElementNative[LEXICON.bCR]() : null;
            } catch {
              return;
            }
            _isRTL = cssDirection === "rtl", _isBorderBox = boxSizing === "border-box";
            var isRTLLeft = _isRTL ? _strLeft : _strRight, isRTLRight = _isRTL ? _strRight : _strLeft, widthAutoResizeDetection = false, widthAutoObserverDetection = _sizeAutoObserverAdded && _hostElement.css(_strFloat) !== "none" ? MATH.round(sizeAutoObserverElementBCRect.right - sizeAutoObserverElementBCRect.left) === 0 && (paddingAbsolute ? true : _hostElementNative[LEXICON.cW] - _paddingX > 0) : false;
            if (sizeAutoCapable && !widthAutoObserverDetection) {
              var tmpCurrHostWidth = _hostElementNative[LEXICON.oW], tmpCurrContentGlueWidth = _contentGlueElement.css(_strWidth);
              _contentGlueElement.css(_strWidth, _strAuto);
              var tmpNewHostWidth = _hostElementNative[LEXICON.oW];
              _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth), widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth, widthAutoResizeDetection || (_contentGlueElement.css(_strWidth, tmpCurrHostWidth + 1), tmpNewHostWidth = _hostElementNative[LEXICON.oW], _contentGlueElement.css(_strWidth, tmpCurrContentGlueWidth), widthAutoResizeDetection = tmpCurrHostWidth !== tmpNewHostWidth);
            }
            var widthAuto = (widthAutoObserverDetection || widthAutoResizeDetection) && sizeAutoCapable && !displayIsHidden, widthAutoChanged = checkCacheAutoForce(widthAuto, _widthAutoCache), wasWidthAuto = !widthAuto && _widthAutoCache, heightAuto = _sizeAutoObserverAdded && sizeAutoCapable && !displayIsHidden ? MATH.round(sizeAutoObserverElementBCRect.bottom - sizeAutoObserverElementBCRect.top) === 0 : false, heightAutoChanged = checkCacheAutoForce(heightAuto, _heightAutoCache), wasHeightAuto = !heightAuto && _heightAutoCache, updateBorderX = widthAuto && _isBorderBox || !_isBorderBox, updateBorderY = heightAuto && _isBorderBox || !_isBorderBox, border = getTopRightBottomLeftHost(_strBorderMinus, "-" + _strWidth, !updateBorderX, !updateBorderY), margin = getTopRightBottomLeftHost(_strMarginMinus), contentElementCSS = {}, contentGlueElementCSS = {}, getHostSize = function() {
              return { w: _hostElementNative[LEXICON.cW], h: _hostElementNative[LEXICON.cH] };
            }, getViewportSize = function() {
              return { w: _paddingElementNative[LEXICON.oW] + MATH.max(0, _contentElementNative[LEXICON.cW] - _contentElementNative[LEXICON.sW]), h: _paddingElementNative[LEXICON.oH] + MATH.max(0, _contentElementNative[LEXICON.cH] - _contentElementNative[LEXICON.sH]) };
            }, paddingAbsoluteX = _paddingX = padding.l + padding.r, paddingAbsoluteY = _paddingY = padding.t + padding.b;
            if (paddingAbsoluteX *= paddingAbsolute ? 1 : 0, paddingAbsoluteY *= paddingAbsolute ? 1 : 0, padding.c = checkCacheAutoForce(padding, _cssPaddingCache), _borderX = border.l + border.r, _borderY = border.t + border.b, border.c = checkCacheAutoForce(border, _cssBorderCache), _marginX = margin.l + margin.r, _marginY = margin.t + margin.b, margin.c = checkCacheAutoForce(margin, _cssMarginCache), _textareaAutoWrappingCache = textareaAutoWrapping, _cssDirectionCache = cssDirection, _cssBoxSizingCache = boxSizing, _widthAutoCache = widthAuto, _heightAutoCache = heightAuto, _cssPaddingCache = padding, _cssBorderCache = border, _cssMarginCache = margin, cssDirectionChanged && _sizeAutoObserverAdded && _sizeAutoObserverElement.css(_strFloat, isRTLRight), padding.c || cssDirectionChanged || paddingAbsoluteChanged || widthAutoChanged || heightAutoChanged || boxSizingChanged || sizeAutoCapableChanged) {
              var paddingElementCSS = {}, textareaCSS = {}, paddingValues = [padding.t, padding.r, padding.b, padding.l];
              setTopRightBottomLeft(contentGlueElementCSS, _strMarginMinus, [-padding.t, -padding.r, -padding.b, -padding.l]), paddingAbsolute ? (setTopRightBottomLeft(paddingElementCSS, _strEmpty, paddingValues), setTopRightBottomLeft(_isTextarea ? textareaCSS : contentElementCSS, _strPaddingMinus)) : (setTopRightBottomLeft(paddingElementCSS, _strEmpty), setTopRightBottomLeft(_isTextarea ? textareaCSS : contentElementCSS, _strPaddingMinus, paddingValues)), _paddingElement.css(paddingElementCSS), _targetElement.css(textareaCSS);
            }
            _viewportSize = getViewportSize();
            var textareaSize = _isTextarea ? textareaUpdate() : false, textareaSizeChanged = _isTextarea && checkCacheAutoForce(textareaSize, _textareaSizeCache), textareaDynOrigSize = _isTextarea && textareaSize ? { w: textareaDynWidth ? textareaSize._dynamicWidth : textareaSize._originalWidth, h: textareaDynHeight ? textareaSize._dynamicHeight : textareaSize._originalHeight } : {};
            if (_textareaSizeCache = textareaSize, heightAuto && (heightAutoChanged || paddingAbsoluteChanged || boxSizingChanged || padding.c || border.c) ? contentElementCSS[_strHeight] = _strAuto : (heightAutoChanged || paddingAbsoluteChanged) && (contentElementCSS[_strHeight] = _strHundredPercent), widthAuto && (widthAutoChanged || paddingAbsoluteChanged || boxSizingChanged || padding.c || border.c || cssDirectionChanged) ? (contentElementCSS[_strWidth] = _strAuto, contentGlueElementCSS[_strMaxMinus + _strWidth] = _strHundredPercent) : (widthAutoChanged || paddingAbsoluteChanged) && (contentElementCSS[_strWidth] = _strHundredPercent, contentElementCSS[_strFloat] = _strEmpty, contentGlueElementCSS[_strMaxMinus + _strWidth] = _strEmpty), widthAuto ? (contentGlueElementCSS[_strWidth] = _strAuto, contentElementCSS[_strWidth] = VENDORS._cssPropertyValue(_strWidth, "max-content intrinsic") || _strAuto, contentElementCSS[_strFloat] = isRTLRight) : contentGlueElementCSS[_strWidth] = _strEmpty, heightAuto ? contentGlueElementCSS[_strHeight] = textareaDynOrigSize.h || _contentElementNative[LEXICON.cH] : contentGlueElementCSS[_strHeight] = _strEmpty, sizeAutoCapable && _contentGlueElement.css(contentGlueElementCSS), _contentElement.css(contentElementCSS), contentElementCSS = {}, contentGlueElementCSS = {}, hostSizeChanged || contentSizeChanged || textareaSizeChanged || cssDirectionChanged || boxSizingChanged || paddingAbsoluteChanged || widthAutoChanged || widthAuto || heightAutoChanged || heightAuto || ignoreOverlayScrollbarHidingChanged || overflowBehaviorChanged || clipAlwaysChanged || resizeChanged || scrollbarsVisibilityChanged || scrollbarsAutoHideChanged || scrollbarsDragScrollingChanged || scrollbarsClickScrollingChanged || textareaDynWidthChanged || textareaDynHeightChanged || textareaAutoWrappingChanged) {
              var strOverflow = "overflow", strOverflowX = strOverflow + "-x", strOverflowY = strOverflow + "-y", strHidden = "hidden", strVisible = "visible";
              if (!_nativeScrollbarStyling) {
                var viewportElementResetCSS = {}, resetXTmp = _hasOverflowCache.y && _hideOverflowCache.ys && !ignoreOverlayScrollbarHiding ? _nativeScrollbarIsOverlaid.y ? _viewportElement.css(isRTLLeft) : -_nativeScrollbarSize.y : 0, resetBottomTmp = _hasOverflowCache.x && _hideOverflowCache.xs && !ignoreOverlayScrollbarHiding ? _nativeScrollbarIsOverlaid.x ? _viewportElement.css(_strBottom) : -_nativeScrollbarSize.x : 0;
                setTopRightBottomLeft(viewportElementResetCSS, _strEmpty), _viewportElement.css(viewportElementResetCSS);
              }
              var contentMeasureElement = getContentMeasureElement(), contentSize = { w: textareaDynOrigSize.w || contentMeasureElement[LEXICON.cW], h: textareaDynOrigSize.h || contentMeasureElement[LEXICON.cH] }, scrollSize = { w: contentMeasureElement[LEXICON.sW], h: contentMeasureElement[LEXICON.sH] };
              _nativeScrollbarStyling || (viewportElementResetCSS[_strBottom] = wasHeightAuto ? _strEmpty : resetBottomTmp, viewportElementResetCSS[isRTLLeft] = wasWidthAuto ? _strEmpty : resetXTmp, _viewportElement.css(viewportElementResetCSS)), _viewportSize = getViewportSize();
              var hostSize = getHostSize(), hostAbsoluteRectSize = { w: hostSize.w - _marginX - _borderX - (_isBorderBox ? 0 : _paddingX), h: hostSize.h - _marginY - _borderY - (_isBorderBox ? 0 : _paddingY) }, contentGlueSize = { w: MATH.max((widthAuto ? contentSize.w : scrollSize.w) + paddingAbsoluteX, hostAbsoluteRectSize.w), h: MATH.max((heightAuto ? contentSize.h : scrollSize.h) + paddingAbsoluteY, hostAbsoluteRectSize.h) };
              if (contentGlueSize.c = checkCacheAutoForce(contentGlueSize, _contentGlueSizeCache), _contentGlueSizeCache = contentGlueSize, sizeAutoCapable) {
                (contentGlueSize.c || heightAuto || widthAuto) && (contentGlueElementCSS[_strWidth] = contentGlueSize.w, contentGlueElementCSS[_strHeight] = contentGlueSize.h, _isTextarea || (contentSize = { w: contentMeasureElement[LEXICON.cW], h: contentMeasureElement[LEXICON.cH] }));
                var textareaCoverCSS = {}, setContentGlueElementCSSfunction = function(horizontal) {
                  var scrollbarVars = getScrollbarVars(horizontal), wh = scrollbarVars._w_h, strWH = scrollbarVars._width_height, autoSize = horizontal ? widthAuto : heightAuto, borderSize = horizontal ? _borderX : _borderY, paddingSize = horizontal ? _paddingX : _paddingY, marginSize = horizontal ? _marginX : _marginY, viewportSize = _viewportSize[wh] - borderSize - marginSize - (_isBorderBox ? 0 : paddingSize);
                  (!autoSize || !autoSize && border.c) && (contentGlueElementCSS[strWH] = hostAbsoluteRectSize[wh] - 1), autoSize && contentSize[wh] < viewportSize && (!(horizontal && _isTextarea) || !textareaAutoWrapping) && (_isTextarea && (textareaCoverCSS[strWH] = parseToZeroOrNumber(_textareaCoverElement.css(strWH)) - 1), contentGlueElementCSS[strWH] -= 1), contentSize[wh] > 0 && (contentGlueElementCSS[strWH] = MATH.max(1, contentGlueElementCSS[strWH]));
                };
                setContentGlueElementCSSfunction(true), setContentGlueElementCSSfunction(false), _isTextarea && _textareaCoverElement.css(textareaCoverCSS), _contentGlueElement.css(contentGlueElementCSS);
              }
              widthAuto && (contentElementCSS[_strWidth] = _strHundredPercent), widthAuto && !_isBorderBox && !_mutationObserversConnected && (contentElementCSS[_strFloat] = "none"), _contentElement.css(contentElementCSS), contentElementCSS = {};
              var contentScrollSize = { w: contentMeasureElement[LEXICON.sW], h: contentMeasureElement[LEXICON.sH] };
              contentScrollSize.c = contentSizeChanged = checkCacheAutoForce(contentScrollSize, _contentScrollSizeCache), _contentScrollSizeCache = contentScrollSize, _viewportSize = getViewportSize(), hostSize = getHostSize(), hostSizeChanged = checkCacheAutoForce(hostSize, _hostSizeCache), _hostSizeCache = hostSize;
              var hideOverflowForceTextarea = _isTextarea && (_viewportSize.w === 0 || _viewportSize.h === 0), previousOverflowAmount = _overflowAmountCache, overflowBehaviorIsVS = {}, overflowBehaviorIsVH = {}, overflowBehaviorIsS = {}, overflowAmount = {}, hasOverflow = {}, hideOverflow = {}, canScroll = {}, viewportRect = _paddingElementNative[LEXICON.bCR](), setOverflowVariables = function(horizontal) {
                var scrollbarVars = getScrollbarVars(horizontal), scrollbarVarsInverted = getScrollbarVars(!horizontal), xyI = scrollbarVarsInverted._x_y, xy = scrollbarVars._x_y, wh = scrollbarVars._w_h, widthHeight = scrollbarVars._width_height, scrollMax = _strScroll + scrollbarVars._Left_Top + "Max", fractionalOverflowAmount = viewportRect[widthHeight] ? MATH.abs(viewportRect[widthHeight] - _viewportSize[wh]) : 0, checkFractionalOverflowAmount = previousOverflowAmount && previousOverflowAmount[xy] > 0 && _viewportElementNative[scrollMax] === 0;
                overflowBehaviorIsVS[xy] = overflowBehavior[xy] === "v-s", overflowBehaviorIsVH[xy] = overflowBehavior[xy] === "v-h", overflowBehaviorIsS[xy] = overflowBehavior[xy] === "s", overflowAmount[xy] = MATH.max(0, MATH.round((contentScrollSize[wh] - _viewportSize[wh]) * 100) / 100), overflowAmount[xy] *= hideOverflowForceTextarea || checkFractionalOverflowAmount && fractionalOverflowAmount > 0 && fractionalOverflowAmount < 1 ? 0 : 1, hasOverflow[xy] = overflowAmount[xy] > 0, hideOverflow[xy] = overflowBehaviorIsVS[xy] || overflowBehaviorIsVH[xy] ? hasOverflow[xyI] && !overflowBehaviorIsVS[xyI] && !overflowBehaviorIsVH[xyI] : hasOverflow[xy], hideOverflow[xy + "s"] = hideOverflow[xy] ? overflowBehaviorIsS[xy] || overflowBehaviorIsVS[xy] : false, canScroll[xy] = hasOverflow[xy] && hideOverflow[xy + "s"];
              };
              if (setOverflowVariables(true), setOverflowVariables(false), overflowAmount.c = checkCacheAutoForce(overflowAmount, _overflowAmountCache), _overflowAmountCache = overflowAmount, hasOverflow.c = checkCacheAutoForce(hasOverflow, _hasOverflowCache), _hasOverflowCache = hasOverflow, hideOverflow.c = checkCacheAutoForce(hideOverflow, _hideOverflowCache), _hideOverflowCache = hideOverflow, _nativeScrollbarIsOverlaid.x || _nativeScrollbarIsOverlaid.y) {
                var borderDesign = "px solid transparent", contentArrangeElementCSS = {}, arrangeContent = {}, arrangeChanged = force, setContentElementCSS;
                (hasOverflow.x || hasOverflow.y) && (arrangeContent.w = _nativeScrollbarIsOverlaid.y && hasOverflow.y ? contentScrollSize.w + _overlayScrollbarDummySize.y : _strEmpty, arrangeContent.h = _nativeScrollbarIsOverlaid.x && hasOverflow.x ? contentScrollSize.h + _overlayScrollbarDummySize.x : _strEmpty, arrangeChanged = checkCacheAutoForce(arrangeContent, _arrangeContentSizeCache), _arrangeContentSizeCache = arrangeContent), (hasOverflow.c || hideOverflow.c || contentScrollSize.c || cssDirectionChanged || widthAutoChanged || heightAutoChanged || widthAuto || heightAuto || ignoreOverlayScrollbarHidingChanged) && (contentElementCSS[_strMarginMinus + isRTLRight] = contentElementCSS[_strBorderMinus + isRTLRight] = _strEmpty, setContentElementCSS = function(horizontal) {
                  var scrollbarVars = getScrollbarVars(horizontal), scrollbarVarsInverted = getScrollbarVars(!horizontal), xy = scrollbarVars._x_y, strDirection = horizontal ? _strBottom : isRTLLeft, invertedAutoSize = horizontal ? heightAuto : widthAuto;
                  _nativeScrollbarIsOverlaid[xy] && hasOverflow[xy] && hideOverflow[xy + "s"] ? (contentElementCSS[_strMarginMinus + strDirection] = invertedAutoSize ? ignoreOverlayScrollbarHiding ? _strEmpty : _overlayScrollbarDummySize[xy] : _strEmpty, contentElementCSS[_strBorderMinus + strDirection] = (!horizontal || !invertedAutoSize) && !ignoreOverlayScrollbarHiding ? _overlayScrollbarDummySize[xy] + borderDesign : _strEmpty) : (arrangeContent[scrollbarVarsInverted._w_h] = contentElementCSS[_strMarginMinus + strDirection] = contentElementCSS[_strBorderMinus + strDirection] = _strEmpty, arrangeChanged = true);
                }, _nativeScrollbarStyling ? addRemoveClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible, !ignoreOverlayScrollbarHiding) : (setContentElementCSS(true), setContentElementCSS(false))), ignoreOverlayScrollbarHiding && (arrangeContent.w = arrangeContent.h = _strEmpty, arrangeChanged = true), arrangeChanged && !_nativeScrollbarStyling && (contentArrangeElementCSS[_strWidth] = hideOverflow.y ? arrangeContent.w : _strEmpty, contentArrangeElementCSS[_strHeight] = hideOverflow.x ? arrangeContent.h : _strEmpty, _contentArrangeElement || (_contentArrangeElement = FRAMEWORK(generateDiv(_classNameContentArrangeElement)), _viewportElement.prepend(_contentArrangeElement)), _contentArrangeElement.css(contentArrangeElementCSS)), _contentElement.css(contentElementCSS);
              }
              var viewportElementCSS = {}, paddingElementCSS = {}, setViewportCSS;
              if ((hostSizeChanged || hasOverflow.c || hideOverflow.c || contentScrollSize.c || overflowBehaviorChanged || boxSizingChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged || clipAlwaysChanged || heightAutoChanged) && (viewportElementCSS[isRTLRight] = _strEmpty, setViewportCSS = function(horizontal) {
                var scrollbarVars = getScrollbarVars(horizontal), scrollbarVarsInverted = getScrollbarVars(!horizontal), xy = scrollbarVars._x_y, XY = scrollbarVars._X_Y, strDirection = horizontal ? _strBottom : isRTLLeft, reset = function() {
                  viewportElementCSS[strDirection] = _strEmpty, _contentBorderSize[scrollbarVarsInverted._w_h] = 0;
                };
                hasOverflow[xy] && hideOverflow[xy + "s"] ? (viewportElementCSS[strOverflow + XY] = _strScroll, ignoreOverlayScrollbarHiding || _nativeScrollbarStyling ? reset() : (viewportElementCSS[strDirection] = -(_nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[xy] : _nativeScrollbarSize[xy]), _contentBorderSize[scrollbarVarsInverted._w_h] = _nativeScrollbarIsOverlaid[xy] ? _overlayScrollbarDummySize[scrollbarVarsInverted._x_y] : 0)) : (viewportElementCSS[strOverflow + XY] = _strEmpty, reset());
              }, setViewportCSS(true), setViewportCSS(false), !_nativeScrollbarStyling && (_viewportSize.h < _nativeScrollbarMinSize.x || _viewportSize.w < _nativeScrollbarMinSize.y) && (hasOverflow.x && hideOverflow.x && !_nativeScrollbarIsOverlaid.x || hasOverflow.y && hideOverflow.y && !_nativeScrollbarIsOverlaid.y) ? (viewportElementCSS[_strPaddingMinus + _strTop] = _nativeScrollbarMinSize.x, viewportElementCSS[_strMarginMinus + _strTop] = -_nativeScrollbarMinSize.x, viewportElementCSS[_strPaddingMinus + isRTLRight] = _nativeScrollbarMinSize.y, viewportElementCSS[_strMarginMinus + isRTLRight] = -_nativeScrollbarMinSize.y) : viewportElementCSS[_strPaddingMinus + _strTop] = viewportElementCSS[_strMarginMinus + _strTop] = viewportElementCSS[_strPaddingMinus + isRTLRight] = viewportElementCSS[_strMarginMinus + isRTLRight] = _strEmpty, viewportElementCSS[_strPaddingMinus + isRTLLeft] = viewportElementCSS[_strMarginMinus + isRTLLeft] = _strEmpty, hasOverflow.x && hideOverflow.x || hasOverflow.y && hideOverflow.y || hideOverflowForceTextarea ? _isTextarea && hideOverflowForceTextarea && (paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = strHidden) : (!clipAlways || overflowBehaviorIsVH.x || overflowBehaviorIsVS.x || overflowBehaviorIsVH.y || overflowBehaviorIsVS.y) && (_isTextarea && (paddingElementCSS[strOverflowX] = paddingElementCSS[strOverflowY] = _strEmpty), viewportElementCSS[strOverflowX] = viewportElementCSS[strOverflowY] = strVisible), _paddingElement.css(paddingElementCSS), _viewportElement.css(viewportElementCSS), viewportElementCSS = {}, (hasOverflow.c || boxSizingChanged || widthAutoChanged || heightAutoChanged) && !(_nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y))) {
                var elementStyle = _contentElementNative[LEXICON.s];
                elementStyle.webkitTransform = "scale(1)", elementStyle.display = "run-in", _contentElementNative[LEXICON.oH], elementStyle.display = _strEmpty, elementStyle.webkitTransform = _strEmpty;
              }
              if (contentElementCSS = {}, cssDirectionChanged || widthAutoChanged || heightAutoChanged)
                if (_isRTL && widthAuto) {
                  var floatTmp = _contentElement.css(_strFloat), posLeftWithoutFloat = MATH.round(_contentElement.css(_strFloat, _strEmpty).css(_strLeft, _strEmpty).position().left);
                  _contentElement.css(_strFloat, floatTmp);
                  var posLeftWithFloat = MATH.round(_contentElement.position().left);
                  posLeftWithoutFloat !== posLeftWithFloat && (contentElementCSS[_strLeft] = posLeftWithoutFloat);
                } else
                  contentElementCSS[_strLeft] = _strEmpty;
              if (_contentElement.css(contentElementCSS), _isTextarea && contentSizeChanged) {
                var textareaInfo = getTextareaInfo();
                if (textareaInfo) {
                  var textareaRowsChanged = _textareaInfoCache === undefined2 ? true : textareaInfo._rows !== _textareaInfoCache._rows, cursorRow = textareaInfo._cursorRow, cursorCol = textareaInfo._cursorColumn, widestRow = textareaInfo._widestRow, lastRow = textareaInfo._rows, lastCol = textareaInfo._columns, cursorPos = textareaInfo._cursorPosition, cursorMax = textareaInfo._cursorMax, cursorIsLastPosition = cursorPos >= cursorMax && _textareaHasFocus, textareaScrollAmount = { x: !textareaAutoWrapping && cursorCol === lastCol && cursorRow === widestRow ? _overflowAmountCache.x : -1, y: (textareaAutoWrapping ? cursorIsLastPosition || textareaRowsChanged && (previousOverflowAmount && currScroll.y === previousOverflowAmount.y) : (cursorIsLastPosition || textareaRowsChanged) && cursorRow === lastRow) ? _overflowAmountCache.y : -1 };
                  currScroll.x = textareaScrollAmount.x > -1 ? _isRTL && _normalizeRTLCache && _rtlScrollBehavior.i ? 0 : textareaScrollAmount.x : currScroll.x, currScroll.y = textareaScrollAmount.y > -1 ? textareaScrollAmount.y : currScroll.y;
                }
                _textareaInfoCache = textareaInfo;
              }
              _isRTL && _rtlScrollBehavior.i && _nativeScrollbarIsOverlaid.y && hasOverflow.x && _normalizeRTLCache && (currScroll.x += _contentBorderSize.w || 0), widthAuto && _hostElement[_strScrollLeft](0), heightAuto && _hostElement[_strScrollTop](0), _viewportElement[_strScrollLeft](currScroll.x)[_strScrollTop](currScroll.y);
              var scrollbarsVisibilityVisible = scrollbarsVisibility === "v", scrollbarsVisibilityHidden = scrollbarsVisibility === "h", scrollbarsVisibilityAuto = scrollbarsVisibility === "a", refreshScrollbarsVisibility = function(showX, showY) {
                showY = showY === undefined2 ? showX : showY, refreshScrollbarAppearance(true, showX, canScroll.x), refreshScrollbarAppearance(false, showY, canScroll.y);
              };
              addRemoveClass(_hostElement, _classNameHostOverflow, hideOverflow.x || hideOverflow.y), addRemoveClass(_hostElement, _classNameHostOverflowX, hideOverflow.x), addRemoveClass(_hostElement, _classNameHostOverflowY, hideOverflow.y), cssDirectionChanged && !_isBody && addRemoveClass(_hostElement, _classNameHostRTL, _isRTL), _isBody && addClass(_hostElement, _classNameHostResizeDisabled), resizeChanged && (addRemoveClass(_hostElement, _classNameHostResizeDisabled, _resizeNone), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResize, !_resizeNone), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeB, _resizeBoth), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeH, _resizeHorizontal), addRemoveClass(_scrollbarCornerElement, _classNameScrollbarCornerResizeV, _resizeVertical)), (scrollbarsVisibilityChanged || overflowBehaviorChanged || hideOverflow.c || hasOverflow.c || ignoreOverlayScrollbarHidingChanged) && (ignoreOverlayScrollbarHiding ? ignoreOverlayScrollbarHidingChanged && (removeClass(_hostElement, _classNameHostScrolling), ignoreOverlayScrollbarHiding && refreshScrollbarsVisibility(false)) : scrollbarsVisibilityAuto ? refreshScrollbarsVisibility(canScroll.x, canScroll.y) : scrollbarsVisibilityVisible ? refreshScrollbarsVisibility(true) : scrollbarsVisibilityHidden && refreshScrollbarsVisibility(false)), (scrollbarsAutoHideChanged || ignoreOverlayScrollbarHidingChanged) && (setupHostMouseTouchEvents(!_scrollbarsAutoHideLeave && !_scrollbarsAutoHideMove), refreshScrollbarsAutoHide(_scrollbarsAutoHideNever, !_scrollbarsAutoHideNever)), (hostSizeChanged || overflowAmount.c || heightAutoChanged || widthAutoChanged || resizeChanged || boxSizingChanged || paddingAbsoluteChanged || ignoreOverlayScrollbarHidingChanged || cssDirectionChanged) && (refreshScrollbarHandleLength(true), refreshScrollbarHandleOffset(true), refreshScrollbarHandleLength(false), refreshScrollbarHandleOffset(false)), scrollbarsClickScrollingChanged && refreshScrollbarsInteractive(true, scrollbarsClickScrolling), scrollbarsDragScrollingChanged && refreshScrollbarsInteractive(false, scrollbarsDragScrolling), dispatchCallback("onDirectionChanged", { isRTL: _isRTL, dir: cssDirection }, cssDirectionChanged), dispatchCallback("onHostSizeChanged", { width: _hostSizeCache.w, height: _hostSizeCache.h }, hostSizeChanged), dispatchCallback("onContentSizeChanged", { width: _contentScrollSizeCache.w, height: _contentScrollSizeCache.h }, contentSizeChanged), dispatchCallback("onOverflowChanged", { x: hasOverflow.x, y: hasOverflow.y, xScrollable: hideOverflow.xs, yScrollable: hideOverflow.ys, clipped: hideOverflow.x || hideOverflow.y }, hasOverflow.c || hideOverflow.c), dispatchCallback("onOverflowAmountChanged", { x: overflowAmount.x, y: overflowAmount.y }, overflowAmount.c);
            }
            _isBody && _bodyMinSizeCache && (_hasOverflowCache.c || _bodyMinSizeCache.c) && (_bodyMinSizeCache.f || bodyMinSizeChanged(), _nativeScrollbarIsOverlaid.y && _hasOverflowCache.x && _contentElement.css(_strMinMinus + _strWidth, _bodyMinSizeCache.w + _overlayScrollbarDummySize.y), _nativeScrollbarIsOverlaid.x && _hasOverflowCache.y && _contentElement.css(_strMinMinus + _strHeight, _bodyMinSizeCache.h + _overlayScrollbarDummySize.x), _bodyMinSizeCache.c = false), _initialized && changedOptions.updateOnLoad && updateElementsOnLoad(), dispatchCallback("onUpdated", { forced: force });
          }
        }
        function updateElementsOnLoad() {
          _isTextarea || eachUpdateOnLoad(function(i, updateOnLoadSelector) {
            _contentElement.find(updateOnLoadSelector).each(function(i2, el) {
              COMPATIBILITY.inA(el, _updateOnLoadElms) < 0 && (_updateOnLoadElms.push(el), FRAMEWORK(el).off(_updateOnLoadEventName, updateOnLoadCallback).on(_updateOnLoadEventName, updateOnLoadCallback));
            });
          });
        }
        function setOptions(newOptions) {
          var validatedOpts = _pluginsOptions._validate(newOptions, _pluginsOptions._template, true, _currentOptions);
          return _currentOptions = extendDeep({}, _currentOptions, validatedOpts._default), _currentPreparedOptions = extendDeep({}, _currentPreparedOptions, validatedOpts._prepared), validatedOpts._prepared;
        }
        function setupStructureDOM(destroy) {
          var strParent = "parent", classNameResizeObserverHost = "os-resize-observer-host", classNameTextareaElementFull = _classNameTextareaElement + _strSpace + _classNameTextInherit, textareaClass = _isTextarea ? _strSpace + _classNameTextInherit : _strEmpty, adoptAttrs = _currentPreparedOptions.textarea.inheritedAttrs, adoptAttrsMap = {}, applyAdoptedAttrs = function() {
            var applyAdoptedAttrsElm = destroy ? _targetElement : _hostElement;
            each(adoptAttrsMap, function(key, value) {
              type(value) == TYPES.s && (key == LEXICON.c ? applyAdoptedAttrsElm.addClass(value) : applyAdoptedAttrsElm.attr(key, value));
            });
          }, hostElementClassNames = [_classNameHostElement, _classNameHostElementForeign, _classNameHostTextareaElement, _classNameHostResizeDisabled, _classNameHostRTL, _classNameHostScrollbarHorizontalHidden, _classNameHostScrollbarVerticalHidden, _classNameHostTransition, _classNameHostScrolling, _classNameHostOverflow, _classNameHostOverflowX, _classNameHostOverflowY, _classNameThemeNone, _classNameTextareaElement, _classNameTextInherit, _classNameCache].join(_strSpace), hostElementCSS = {};
          _hostElement = _hostElement || (_isTextarea ? _domExists ? _targetElement[strParent]()[strParent]()[strParent]()[strParent]() : FRAMEWORK(generateDiv(_classNameHostTextareaElement)) : _targetElement), _contentElement = _contentElement || selectOrGenerateDivByClass(_classNameContentElement + textareaClass), _viewportElement = _viewportElement || selectOrGenerateDivByClass(_classNameViewportElement + textareaClass), _paddingElement = _paddingElement || selectOrGenerateDivByClass(_classNamePaddingElement + textareaClass), _sizeObserverElement = _sizeObserverElement || selectOrGenerateDivByClass(classNameResizeObserverHost), _textareaCoverElement = _textareaCoverElement || (_isTextarea ? selectOrGenerateDivByClass(_classNameTextareaCoverElement) : undefined2), _domExists && addClass(_hostElement, _classNameHostElementForeign), destroy && removeClass(_hostElement, hostElementClassNames), adoptAttrs = type(adoptAttrs) == TYPES.s ? adoptAttrs.split(_strSpace) : adoptAttrs, COMPATIBILITY.isA(adoptAttrs) && _isTextarea && each(adoptAttrs, function(i, v) {
            type(v) == TYPES.s && (adoptAttrsMap[v] = destroy ? _hostElement.attr(v) : _targetElement.attr(v));
          }), destroy ? (_domExists && _initialized ? (_sizeObserverElement.children().remove(), each([_paddingElement, _viewportElement, _contentElement, _textareaCoverElement], function(i, elm) {
            elm && removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
          }), addClass(_hostElement, _isTextarea ? _classNameHostTextareaElement : _classNameHostElement)) : (remove(_sizeObserverElement), _contentElement.contents().unwrap().unwrap().unwrap(), _isTextarea && (_targetElement.unwrap(), remove(_hostElement), remove(_textareaCoverElement), applyAdoptedAttrs())), _isTextarea && _targetElement.removeAttr(LEXICON.s), _isBody && removeClass(_htmlElement, _classNameHTMLElement)) : (_isTextarea && (_currentPreparedOptions.sizeAutoCapable || (hostElementCSS[_strWidth] = _targetElement.css(_strWidth), hostElementCSS[_strHeight] = _targetElement.css(_strHeight)), _domExists || _targetElement.addClass(_classNameTextInherit).wrap(_hostElement), _hostElement = _targetElement[strParent]().css(hostElementCSS)), _domExists || (addClass(_targetElement, _isTextarea ? classNameTextareaElementFull : _classNameHostElement), _hostElement.wrapInner(_contentElement).wrapInner(_viewportElement).wrapInner(_paddingElement).prepend(_sizeObserverElement), _contentElement = findFirst(_hostElement, _strDot + _classNameContentElement), _viewportElement = findFirst(_hostElement, _strDot + _classNameViewportElement), _paddingElement = findFirst(_hostElement, _strDot + _classNamePaddingElement), _isTextarea && (_contentElement.prepend(_textareaCoverElement), applyAdoptedAttrs())), _nativeScrollbarStyling && addClass(_viewportElement, _classNameViewportNativeScrollbarsInvisible), _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && addClass(_viewportElement, _classNameViewportNativeScrollbarsOverlaid), _isBody && addClass(_htmlElement, _classNameHTMLElement), _sizeObserverElementNative = _sizeObserverElement[0], _hostElementNative = _hostElement[0], _paddingElementNative = _paddingElement[0], _viewportElementNative = _viewportElement[0], _contentElementNative = _contentElement[0], updateViewportAttrsFromTarget());
        }
        function setupStructureEvents() {
          var textareaKeyDownRestrictedKeyCodes = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16, 17, 18, 19, 20, 144], textareaKeyDownKeyCodesList = [], textareaUpdateIntervalID, scrollStopTimeoutId, scrollStopDelay = 175, strFocus = "focus";
          function updateTextarea(doClearInterval) {
            textareaUpdate(), _base.update(_strAuto), doClearInterval && _autoUpdateRecommended && clearInterval(textareaUpdateIntervalID);
          }
          function textareaOnScroll(event) {
            return _targetElement[_strScrollLeft](_rtlScrollBehavior.i && _normalizeRTLCache ? 9999999 : 0), _targetElement[_strScrollTop](0), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event), false;
          }
          function textareaOnDrop(event) {
            setTimeout(function() {
              _destroyed || updateTextarea();
            }, 50);
          }
          function textareaOnFocus() {
            _textareaHasFocus = true, addClass(_hostElement, strFocus);
          }
          function textareaOnFocusout() {
            _textareaHasFocus = false, textareaKeyDownKeyCodesList = [], removeClass(_hostElement, strFocus), updateTextarea(true);
          }
          function textareaOnKeyDown(event) {
            var keyCode = event.keyCode;
            inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 && (textareaKeyDownKeyCodesList[LEXICON.l] || (updateTextarea(), textareaUpdateIntervalID = setInterval(updateTextarea, 1e3 / 60)), inArray(keyCode, textareaKeyDownKeyCodesList) < 0 && textareaKeyDownKeyCodesList.push(keyCode));
          }
          function textareaOnKeyUp(event) {
            var keyCode = event.keyCode, index = inArray(keyCode, textareaKeyDownKeyCodesList);
            inArray(keyCode, textareaKeyDownRestrictedKeyCodes) < 0 && (index > -1 && textareaKeyDownKeyCodesList.splice(index, 1), textareaKeyDownKeyCodesList[LEXICON.l] || updateTextarea(true));
          }
          function contentOnTransitionEnd(event) {
            _autoUpdateCache !== true && (event = event.originalEvent || event, isSizeAffectingCSSProperty(event.propertyName) && _base.update(_strAuto));
          }
          function viewportOnScroll(event) {
            _sleeping || (scrollStopTimeoutId !== undefined2 ? clearTimeout(scrollStopTimeoutId) : ((_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(true), nativeOverlayScrollbarsAreActive() || addClass(_hostElement, _classNameHostScrolling), dispatchCallback("onScrollStart", event)), _scrollbarsHandlesDefineScrollPos || (refreshScrollbarHandleOffset(true), refreshScrollbarHandleOffset(false)), dispatchCallback("onScroll", event), scrollStopTimeoutId = setTimeout(function() {
              _destroyed || (clearTimeout(scrollStopTimeoutId), scrollStopTimeoutId = undefined2, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(false), nativeOverlayScrollbarsAreActive() || removeClass(_hostElement, _classNameHostScrolling), dispatchCallback("onScrollStop", event));
            }, scrollStopDelay));
          }
          _isTextarea ? (_msieVersion > 9 || !_autoUpdateRecommended ? addDestroyEventListener(_targetElement, "input", updateTextarea) : addDestroyEventListener(_targetElement, [_strKeyDownEvent, _strKeyUpEvent], [textareaOnKeyDown, textareaOnKeyUp]), addDestroyEventListener(_targetElement, [_strScroll, "drop", strFocus, strFocus + "out"], [textareaOnScroll, textareaOnDrop, textareaOnFocus, textareaOnFocusout])) : addDestroyEventListener(_contentElement, _strTransitionEndEvent, contentOnTransitionEnd), addDestroyEventListener(_viewportElement, _strScroll, viewportOnScroll, true);
        }
        function setupScrollbarsDOM(destroy) {
          var selectOrGenerateScrollbarDOM = function(isHorizontal) {
            var scrollbarClassName = isHorizontal ? _classNameScrollbarHorizontal : _classNameScrollbarVertical, scrollbar = selectOrGenerateDivByClass(_classNameScrollbar + _strSpace + scrollbarClassName, true), track = selectOrGenerateDivByClass(_classNameScrollbarTrack, scrollbar), handle = selectOrGenerateDivByClass(_classNameScrollbarHandle, scrollbar);
            return !_domExists && !destroy && (scrollbar.append(track), track.append(handle)), { _scrollbar: scrollbar, _track: track, _handle: handle };
          };
          function resetScrollbarDOM(isHorizontal) {
            var scrollbarVars = getScrollbarVars(isHorizontal), scrollbar = scrollbarVars._scrollbar, track = scrollbarVars._track, handle = scrollbarVars._handle;
            _domExists && _initialized ? each([scrollbar, track, handle], function(i, elm) {
              removeClass(elm.removeAttr(LEXICON.s), _classNamesDynamicDestroy);
            }) : remove(scrollbar || selectOrGenerateScrollbarDOM(isHorizontal)._scrollbar);
          }
          var horizontalElements, verticalElements;
          destroy ? (resetScrollbarDOM(true), resetScrollbarDOM()) : (horizontalElements = selectOrGenerateScrollbarDOM(true), verticalElements = selectOrGenerateScrollbarDOM(), _scrollbarHorizontalElement = horizontalElements._scrollbar, _scrollbarHorizontalTrackElement = horizontalElements._track, _scrollbarHorizontalHandleElement = horizontalElements._handle, _scrollbarVerticalElement = verticalElements._scrollbar, _scrollbarVerticalTrackElement = verticalElements._track, _scrollbarVerticalHandleElement = verticalElements._handle, _domExists || (_paddingElement.after(_scrollbarVerticalElement), _paddingElement.after(_scrollbarHorizontalElement)));
        }
        function setupScrollbarEvents(isHorizontal) {
          var scrollbarVars = getScrollbarVars(isHorizontal), scrollbarVarsInfo = scrollbarVars._info, insideIFrame = _windowElementNative.top !== _windowElementNative, xy = scrollbarVars._x_y, XY = scrollbarVars._X_Y, scroll = _strScroll + scrollbarVars._Left_Top, strActive = "active", strSnapHandle = "snapHandle", strClickEvent = "click", scrollDurationFactor = 1, increaseDecreaseScrollAmountKeyCodes = [16, 17], trackTimeout, mouseDownScroll, mouseDownOffset, mouseDownInvertedScale;
          function getPointerPosition(event) {
            return _msieVersion && insideIFrame ? event["screen" + XY] : COMPATIBILITY.page(event)[xy];
          }
          function getPreparedScrollbarsOption(name) {
            return _currentPreparedOptions.scrollbars[name];
          }
          function increaseTrackScrollAmount() {
            scrollDurationFactor = 0.5;
          }
          function decreaseTrackScrollAmount() {
            scrollDurationFactor = 1;
          }
          function stopClickEventPropagation(event) {
            COMPATIBILITY.stpP(event);
          }
          function documentKeyDown(event) {
            inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1 && increaseTrackScrollAmount();
          }
          function documentKeyUp(event) {
            inArray(event.keyCode, increaseDecreaseScrollAmountKeyCodes) > -1 && decreaseTrackScrollAmount();
          }
          function onMouseTouchDownContinue(event) {
            var originalEvent = event.originalEvent || event, isTouchEvent = originalEvent.touches !== undefined2;
            return _sleeping || _destroyed || nativeOverlayScrollbarsAreActive() || !_scrollbarsDragScrollingCache || isTouchEvent && !getPreparedScrollbarsOption("touchSupport") ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
          }
          function documentDragMove(event) {
            if (onMouseTouchDownContinue(event)) {
              var trackLength = scrollbarVarsInfo._trackLength, handleLength = scrollbarVarsInfo._handleLength, scrollRange = scrollbarVarsInfo._maxScroll, scrollRaw = (getPointerPosition(event) - mouseDownOffset) * mouseDownInvertedScale, scrollDeltaPercent = scrollRaw / (trackLength - handleLength), scrollDelta = scrollRange * scrollDeltaPercent;
              scrollDelta = isFinite(scrollDelta) ? scrollDelta : 0, _isRTL && isHorizontal && !_rtlScrollBehavior.i && (scrollDelta *= -1), _viewportElement[scroll](MATH.round(mouseDownScroll + scrollDelta)), _scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, mouseDownScroll + scrollDelta), _supportPassiveEvents || COMPATIBILITY.prvD(event);
            } else
              documentMouseTouchUp(event);
          }
          function documentMouseTouchUp(event) {
            if (event = event || event.originalEvent, setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart], true), COMPATIBILITY.rAF()(function() {
              setupResponsiveEventListener(_documentElement, strClickEvent, stopClickEventPropagation, true, { _capture: true });
            }), _scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, true), _scrollbarsHandlesDefineScrollPos = false, removeClass(_bodyElement, _classNameDragging), removeClass(scrollbarVars._handle, strActive), removeClass(scrollbarVars._track, strActive), removeClass(scrollbarVars._scrollbar, strActive), mouseDownScroll = undefined2, mouseDownOffset = undefined2, mouseDownInvertedScale = 1, decreaseTrackScrollAmount(), trackTimeout !== undefined2 && (_base.scrollStop(), clearTimeout(trackTimeout), trackTimeout = undefined2), event) {
              var rect = _hostElementNative[LEXICON.bCR](), mouseInsideHost = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
              mouseInsideHost || hostOnMouseLeave(), (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(false);
            }
          }
          function onHandleMouseTouchDown(event) {
            onMouseTouchDownContinue(event) && onHandleMouseTouchDownAction(event);
          }
          function onHandleMouseTouchDownAction(event) {
            mouseDownScroll = _viewportElement[scroll](), mouseDownScroll = isNaN(mouseDownScroll) ? 0 : mouseDownScroll, (_isRTL && isHorizontal && !_rtlScrollBehavior.n || !_isRTL) && (mouseDownScroll = mouseDownScroll < 0 ? 0 : mouseDownScroll), mouseDownInvertedScale = getHostElementInvertedScale()[xy], mouseDownOffset = getPointerPosition(event), _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle), addClass(_bodyElement, _classNameDragging), addClass(scrollbarVars._handle, strActive), addClass(scrollbarVars._scrollbar, strActive), setupResponsiveEventListener(_documentElement, [_strMouseTouchMoveEvent, _strMouseTouchUpEvent, _strSelectStartEvent], [documentDragMove, documentMouseTouchUp, documentOnSelectStart]), COMPATIBILITY.rAF()(function() {
              setupResponsiveEventListener(_documentElement, strClickEvent, stopClickEventPropagation, false, { _capture: true });
            }), (_msieVersion || !_documentMixed) && COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event);
          }
          function onTrackMouseTouchDown(event) {
            if (onMouseTouchDownContinue(event)) {
              var handleToViewportRatio = scrollbarVars._info._handleLength / Math.round(MATH.min(1, _viewportSize[scrollbarVars._w_h] / _contentScrollSizeCache[scrollbarVars._w_h]) * scrollbarVars._info._trackLength), scrollDistance = MATH.round(_viewportSize[scrollbarVars._w_h] * handleToViewportRatio), scrollBaseDuration = 270 * handleToViewportRatio, scrollFirstIterationDelay = 400 * handleToViewportRatio, trackOffset = scrollbarVars._track.offset()[scrollbarVars._left_top], ctrlKey = event.ctrlKey, instantScroll = event.shiftKey, instantScrollTransition = instantScroll && ctrlKey, isFirstIteration = true, easing = "linear", decreaseScroll, finishedCondition, scrollActionFinsished = function(transition) {
                _scrollbarsHandlesDefineScrollPos && refreshScrollbarHandleOffset(isHorizontal, transition);
              }, scrollActionInstantFinished = function() {
                scrollActionFinsished(), onHandleMouseTouchDownAction(event);
              }, scrollAction = function() {
                if (!_destroyed) {
                  var mouseOffset = (mouseDownOffset - trackOffset) * mouseDownInvertedScale, handleOffset = scrollbarVarsInfo._handleOffset, trackLength = scrollbarVarsInfo._trackLength, handleLength = scrollbarVarsInfo._handleLength, scrollRange = scrollbarVarsInfo._maxScroll, currScroll = scrollbarVarsInfo._currentScroll, scrollDuration = scrollBaseDuration * scrollDurationFactor, timeoutDelay = isFirstIteration ? MATH.max(scrollFirstIterationDelay, scrollDuration) : scrollDuration, instantScrollPosition = scrollRange * ((mouseOffset - handleLength / 2) / (trackLength - handleLength)), rtlIsNormal = _isRTL && isHorizontal && (!_rtlScrollBehavior.i && !_rtlScrollBehavior.n || _normalizeRTLCache), decreaseScrollCondition = rtlIsNormal ? handleOffset < mouseOffset : handleOffset > mouseOffset, scrollObj = {}, animationObj = { easing, step: function(now) {
                    _scrollbarsHandlesDefineScrollPos && (_viewportElement[scroll](now), refreshScrollbarHandleOffset(isHorizontal, now));
                  } };
                  instantScrollPosition = isFinite(instantScrollPosition) ? instantScrollPosition : 0, instantScrollPosition = _isRTL && isHorizontal && !_rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition, instantScroll ? (_viewportElement[scroll](instantScrollPosition), instantScrollTransition ? (instantScrollPosition = _viewportElement[scroll](), _viewportElement[scroll](currScroll), instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.i ? scrollRange - instantScrollPosition : instantScrollPosition, instantScrollPosition = rtlIsNormal && _rtlScrollBehavior.n ? -instantScrollPosition : instantScrollPosition, scrollObj[xy] = instantScrollPosition, _base.scroll(scrollObj, extendDeep(animationObj, { duration: 130, complete: scrollActionInstantFinished }))) : scrollActionInstantFinished()) : (decreaseScroll = isFirstIteration ? decreaseScrollCondition : decreaseScroll, finishedCondition = rtlIsNormal ? decreaseScroll ? handleOffset + handleLength >= mouseOffset : handleOffset <= mouseOffset : decreaseScroll ? handleOffset <= mouseOffset : handleOffset + handleLength >= mouseOffset, finishedCondition ? (clearTimeout(trackTimeout), _base.scrollStop(), trackTimeout = undefined2, scrollActionFinsished(true)) : (trackTimeout = setTimeout(scrollAction, timeoutDelay), scrollObj[xy] = (decreaseScroll ? "-=" : "+=") + scrollDistance, _base.scroll(scrollObj, extendDeep(animationObj, { duration: scrollDuration }))), isFirstIteration = false);
                }
              };
              ctrlKey && increaseTrackScrollAmount(), mouseDownInvertedScale = getHostElementInvertedScale()[xy], mouseDownOffset = COMPATIBILITY.page(event)[xy], _scrollbarsHandlesDefineScrollPos = !getPreparedScrollbarsOption(strSnapHandle), addClass(_bodyElement, _classNameDragging), addClass(scrollbarVars._track, strActive), addClass(scrollbarVars._scrollbar, strActive), setupResponsiveEventListener(_documentElement, [_strMouseTouchUpEvent, _strKeyDownEvent, _strKeyUpEvent, _strSelectStartEvent], [documentMouseTouchUp, documentKeyDown, documentKeyUp, documentOnSelectStart]), scrollAction(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event);
            }
          }
          function onTrackMouseTouchEnter(event) {
            _scrollbarsHandleHovered = true, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(true);
          }
          function onTrackMouseTouchLeave(event) {
            _scrollbarsHandleHovered = false, (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove) && refreshScrollbarsAutoHide(false);
          }
          function onScrollbarMouseTouchDown(event) {
            COMPATIBILITY.stpP(event);
          }
          addDestroyEventListener(scrollbarVars._handle, _strMouseTouchDownEvent, onHandleMouseTouchDown), addDestroyEventListener(scrollbarVars._track, [_strMouseTouchDownEvent, _strMouseEnter, _strMouseLeave], [onTrackMouseTouchDown, onTrackMouseTouchEnter, onTrackMouseTouchLeave]), addDestroyEventListener(scrollbarVars._scrollbar, _strMouseTouchDownEvent, onScrollbarMouseTouchDown), _supportTransition && addDestroyEventListener(scrollbarVars._scrollbar, _strTransitionEndEvent, function(event) {
            event.target === scrollbarVars._scrollbar[0] && (refreshScrollbarHandleLength(isHorizontal), refreshScrollbarHandleOffset(isHorizontal));
          });
        }
        function refreshScrollbarAppearance(isHorizontal, shallBeVisible, canScroll) {
          var scrollbarHiddenClassName = isHorizontal ? _classNameHostScrollbarHorizontalHidden : _classNameHostScrollbarVerticalHidden, scrollbarElement = isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement;
          addRemoveClass(_hostElement, scrollbarHiddenClassName, !shallBeVisible), addRemoveClass(scrollbarElement, _classNameScrollbarUnusable, !canScroll);
        }
        function refreshScrollbarsAutoHide(shallBeVisible, delayfree) {
          if (clearTimeout(_scrollbarsAutoHideTimeoutId), shallBeVisible)
            removeClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden), removeClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden);
          else {
            var anyActive, strActive = "active", hide = function() {
              !_scrollbarsHandleHovered && !_destroyed && (anyActive = _scrollbarHorizontalHandleElement.hasClass(strActive) || _scrollbarVerticalHandleElement.hasClass(strActive), !anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave) && addClass(_scrollbarHorizontalElement, _classNameScrollbarAutoHidden), !anyActive && (_scrollbarsAutoHideScroll || _scrollbarsAutoHideMove || _scrollbarsAutoHideLeave) && addClass(_scrollbarVerticalElement, _classNameScrollbarAutoHidden));
            };
            _scrollbarsAutoHideDelay > 0 && delayfree !== true ? _scrollbarsAutoHideTimeoutId = setTimeout(hide, _scrollbarsAutoHideDelay) : hide();
          }
        }
        function refreshScrollbarHandleLength(isHorizontal) {
          var handleCSS = {}, scrollbarVars = getScrollbarVars(isHorizontal), scrollbarVarsInfo = scrollbarVars._info, digit = 1e6, handleRatio = MATH.min(1, _viewportSize[scrollbarVars._w_h] / _contentScrollSizeCache[scrollbarVars._w_h]);
          handleCSS[scrollbarVars._width_height] = MATH.floor(handleRatio * 100 * digit) / digit + "%", nativeOverlayScrollbarsAreActive() || scrollbarVars._handle.css(handleCSS), scrollbarVarsInfo._handleLength = scrollbarVars._handle[0]["offset" + scrollbarVars._Width_Height], scrollbarVarsInfo._handleLengthRatio = handleRatio;
        }
        function refreshScrollbarHandleOffset(isHorizontal, scrollOrTransition) {
          var transition = type(scrollOrTransition) == TYPES.b, transitionDuration = 250, isRTLisHorizontal = _isRTL && isHorizontal, scrollbarVars = getScrollbarVars(isHorizontal), scrollbarVarsInfo = scrollbarVars._info, strTranslateBrace = "translate(", strTransform = VENDORS._cssProperty("transform"), strTransition = VENDORS._cssProperty("transition"), nativeScroll = isHorizontal ? _viewportElement[_strScrollLeft]() : _viewportElement[_strScrollTop](), currentScroll = scrollOrTransition === undefined2 || transition ? nativeScroll : scrollOrTransition, handleLength = scrollbarVarsInfo._handleLength, trackLength = scrollbarVars._track[0]["offset" + scrollbarVars._Width_Height], handleTrackDiff = trackLength - handleLength, handleCSS = {}, transformOffset, translateValue, maxScroll = (_viewportElementNative[_strScroll + scrollbarVars._Width_Height] - _viewportElementNative["client" + scrollbarVars._Width_Height]) * (_rtlScrollBehavior.n && isRTLisHorizontal ? -1 : 1), getScrollRatio = function(base) {
            return isNaN(base / maxScroll) ? 0 : MATH.max(0, MATH.min(1, base / maxScroll));
          }, getHandleOffset = function(scrollRatio2) {
            var offset = handleTrackDiff * scrollRatio2;
            return offset = isNaN(offset) ? 0 : offset, offset = isRTLisHorizontal && !_rtlScrollBehavior.i ? trackLength - handleLength - offset : offset, offset = MATH.max(0, offset), offset;
          }, scrollRatio = getScrollRatio(nativeScroll), unsnappedScrollRatio = getScrollRatio(currentScroll), handleOffset = getHandleOffset(unsnappedScrollRatio), snappedHandleOffset = getHandleOffset(scrollRatio);
          scrollbarVarsInfo._maxScroll = maxScroll, scrollbarVarsInfo._currentScroll = nativeScroll, scrollbarVarsInfo._currentScrollRatio = scrollRatio, _supportTransform ? (transformOffset = isRTLisHorizontal ? -(trackLength - handleLength - handleOffset) : handleOffset, translateValue = isHorizontal ? strTranslateBrace + transformOffset + "px, 0)" : strTranslateBrace + "0, " + transformOffset + "px)", handleCSS[strTransform] = translateValue, _supportTransition && (handleCSS[strTransition] = transition && MATH.abs(handleOffset - scrollbarVarsInfo._handleOffset) > 1 ? getCSSTransitionString(scrollbarVars._handle) + ", " + (strTransform + _strSpace + transitionDuration + "ms") : _strEmpty)) : handleCSS[scrollbarVars._left_top] = handleOffset, nativeOverlayScrollbarsAreActive() || (scrollbarVars._handle.css(handleCSS), _supportTransform && _supportTransition && transition && scrollbarVars._handle.one(_strTransitionEndEvent, function() {
            _destroyed || scrollbarVars._handle.css(strTransition, _strEmpty);
          })), scrollbarVarsInfo._handleOffset = handleOffset, scrollbarVarsInfo._snappedHandleOffset = snappedHandleOffset, scrollbarVarsInfo._trackLength = trackLength;
        }
        function refreshScrollbarsInteractive(isTrack, value) {
          var action = value ? "removeClass" : "addClass", element1 = isTrack ? _scrollbarHorizontalTrackElement : _scrollbarHorizontalHandleElement, element2 = isTrack ? _scrollbarVerticalTrackElement : _scrollbarVerticalHandleElement, className = isTrack ? _classNameScrollbarTrackOff : _classNameScrollbarHandleOff;
          element1[action](className), element2[action](className);
        }
        function getScrollbarVars(isHorizontal) {
          return { _width_height: isHorizontal ? _strWidth : _strHeight, _Width_Height: isHorizontal ? "Width" : "Height", _left_top: isHorizontal ? _strLeft : _strTop, _Left_Top: isHorizontal ? "Left" : "Top", _x_y: isHorizontal ? _strX : _strY, _X_Y: isHorizontal ? "X" : "Y", _w_h: isHorizontal ? "w" : "h", _l_t: isHorizontal ? "l" : "t", _track: isHorizontal ? _scrollbarHorizontalTrackElement : _scrollbarVerticalTrackElement, _handle: isHorizontal ? _scrollbarHorizontalHandleElement : _scrollbarVerticalHandleElement, _scrollbar: isHorizontal ? _scrollbarHorizontalElement : _scrollbarVerticalElement, _info: isHorizontal ? _scrollHorizontalInfo : _scrollVerticalInfo };
        }
        function setupScrollbarCornerDOM(destroy) {
          _scrollbarCornerElement = _scrollbarCornerElement || selectOrGenerateDivByClass(_classNameScrollbarCorner, true), destroy ? _domExists && _initialized ? removeClass(_scrollbarCornerElement.removeAttr(LEXICON.s), _classNamesDynamicDestroy) : remove(_scrollbarCornerElement) : _domExists || _hostElement.append(_scrollbarCornerElement);
        }
        function setupScrollbarCornerEvents() {
          var insideIFrame = _windowElementNative.top !== _windowElementNative, mouseDownPosition = {}, mouseDownSize = {}, mouseDownInvertedScale = {}, reconnectMutationObserver;
          function documentDragMove(event) {
            if (onMouseTouchDownContinue(event)) {
              var pageOffset = getCoordinates(event), hostElementCSS = {};
              (_resizeHorizontal || _resizeBoth) && (hostElementCSS[_strWidth] = mouseDownSize.w + (pageOffset.x - mouseDownPosition.x) * mouseDownInvertedScale.x), (_resizeVertical || _resizeBoth) && (hostElementCSS[_strHeight] = mouseDownSize.h + (pageOffset.y - mouseDownPosition.y) * mouseDownInvertedScale.y), _hostElement.css(hostElementCSS), COMPATIBILITY.stpP(event);
            } else
              documentMouseTouchUp(event);
          }
          function documentMouseTouchUp(event) {
            var eventIsTrusted = event !== undefined2;
            setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp], true), removeClass(_bodyElement, _classNameDragging), _scrollbarCornerElement.releaseCapture && _scrollbarCornerElement.releaseCapture(), eventIsTrusted && (reconnectMutationObserver && connectMutationObservers(), _base.update(_strAuto)), reconnectMutationObserver = false;
          }
          function onMouseTouchDownContinue(event) {
            var originalEvent = event.originalEvent || event, isTouchEvent = originalEvent.touches !== undefined2;
            return _sleeping || _destroyed ? false : COMPATIBILITY.mBtn(event) === 1 || isTouchEvent;
          }
          function getCoordinates(event) {
            return _msieVersion && insideIFrame ? { x: event.screenX, y: event.screenY } : COMPATIBILITY.page(event);
          }
          addDestroyEventListener(_scrollbarCornerElement, _strMouseTouchDownEvent, function(event) {
            onMouseTouchDownContinue(event) && !_resizeNone && (_mutationObserversConnected && (reconnectMutationObserver = true, disconnectMutationObservers()), mouseDownPosition = getCoordinates(event), mouseDownSize.w = _hostElementNative[LEXICON.oW] - (_isBorderBox ? 0 : _paddingX), mouseDownSize.h = _hostElementNative[LEXICON.oH] - (_isBorderBox ? 0 : _paddingY), mouseDownInvertedScale = getHostElementInvertedScale(), setupResponsiveEventListener(_documentElement, [_strSelectStartEvent, _strMouseTouchMoveEvent, _strMouseTouchUpEvent], [documentOnSelectStart, documentDragMove, documentMouseTouchUp]), addClass(_bodyElement, _classNameDragging), _scrollbarCornerElement.setCapture && _scrollbarCornerElement.setCapture(), COMPATIBILITY.prvD(event), COMPATIBILITY.stpP(event));
          });
        }
        function dispatchCallback(name, args, dependent) {
          if (dependent !== false)
            if (_initialized) {
              var callback = _currentPreparedOptions.callbacks[name], extensionOnName = name, ext;
              extensionOnName.substr(0, 2) === "on" && (extensionOnName = extensionOnName.substr(2, 1).toLowerCase() + extensionOnName.substr(3)), type(callback) == TYPES.f && callback.call(_base, args), each(_extensions, function() {
                ext = this, type(ext.on) == TYPES.f && ext.on(extensionOnName, args);
              });
            } else
              _destroyed || _callbacksInitQeueue.push({ n: name, a: args });
        }
        function setTopRightBottomLeft(targetCSSObject, prefix, values) {
          prefix = prefix || _strEmpty, values = values || [_strEmpty, _strEmpty, _strEmpty, _strEmpty], targetCSSObject[prefix + _strTop] = values[0], targetCSSObject[prefix + _strRight] = values[1], targetCSSObject[prefix + _strBottom] = values[2], targetCSSObject[prefix + _strLeft] = values[3];
        }
        function getTopRightBottomLeftHost(prefix, suffix, zeroX, zeroY) {
          return suffix = suffix || _strEmpty, prefix = prefix || _strEmpty, { t: zeroY ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strTop + suffix)), r: zeroX ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strRight + suffix)), b: zeroY ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strBottom + suffix)), l: zeroX ? 0 : parseToZeroOrNumber(_hostElement.css(prefix + _strLeft + suffix)) };
        }
        function getCSSTransitionString(element) {
          var transitionStr = VENDORS._cssProperty("transition"), assembledValue = element.css(transitionStr);
          if (assembledValue)
            return assembledValue;
          for (var regExpString = "\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*", regExpMain = new RegExp(regExpString), regExpValidate = new RegExp("^(" + regExpString + ")+$"), properties = "property duration timing-function delay".split(" "), result = [], strResult, valueArray, i = 0, j, splitCssStyleByComma = function(str) {
            if (strResult = [], !str.match(regExpValidate))
              return str;
            for (; str.match(regExpMain); )
              strResult.push(RegExp.$1), str = str.replace(regExpMain, _strEmpty);
            return strResult;
          }; i < properties[LEXICON.l]; i++)
            for (valueArray = splitCssStyleByComma(element.css(transitionStr + "-" + properties[i])), j = 0; j < valueArray[LEXICON.l]; j++)
              result[j] = (result[j] ? result[j] + _strSpace : _strEmpty) + valueArray[j];
          return result.join(", ");
        }
        function createHostClassNameRegExp(withCurrClassNameOption, withOldClassNameOption) {
          var i, split, appendix, appendClasses = function(classes, condition) {
            if (appendix = "", condition && typeof classes == TYPES.s)
              for (split = classes.split(_strSpace), i = 0; i < split[LEXICON.l]; i++)
                appendix += "|" + split[i] + "$";
            return appendix;
          };
          return new RegExp("(^" + _classNameHostElement + "([-_].+|)$)" + appendClasses(_classNameCache, withCurrClassNameOption) + appendClasses(_oldClassName, withOldClassNameOption), "g");
        }
        function getHostElementInvertedScale() {
          var rect = _paddingElementNative[LEXICON.bCR]();
          return { x: _supportTransform && 1 / (MATH.round(rect.width) / _paddingElementNative[LEXICON.oW]) || 1, y: _supportTransform && 1 / (MATH.round(rect.height) / _paddingElementNative[LEXICON.oH]) || 1 };
        }
        function isHTMLElement(o) {
          var strOwnerDocument = "ownerDocument", strHTMLElement = "HTMLElement", wnd = o && o[strOwnerDocument] && o[strOwnerDocument].parentWindow || window2;
          return typeof wnd[strHTMLElement] == TYPES.o ? o instanceof wnd[strHTMLElement] : o && typeof o == TYPES.o && o !== null && o.nodeType === 1 && typeof o.nodeName == TYPES.s;
        }
        function getArrayDifferences(a1, a2) {
          var a = [], diff = [], i, k;
          for (i = 0; i < a1.length; i++)
            a[a1[i]] = true;
          for (i = 0; i < a2.length; i++)
            a[a2[i]] ? delete a[a2[i]] : a[a2[i]] = true;
          for (k in a)
            diff.push(k);
          return diff;
        }
        function parseToZeroOrNumber(value, toFloat) {
          var num = toFloat ? parseFloat(value) : parseInt(value, 10);
          return isNaN(num) ? 0 : num;
        }
        function getTextareaInfo() {
          var textareaCursorPosition = _targetElementNative.selectionStart;
          if (textareaCursorPosition !== undefined2) {
            var textareaValue = _targetElement.val(), textareaLength = textareaValue[LEXICON.l], textareaRowSplit = textareaValue.split(`
`), textareaLastRow = textareaRowSplit[LEXICON.l], textareaCurrentCursorRowSplit = textareaValue.substr(0, textareaCursorPosition).split(`
`), widestRow = 0, textareaLastCol = 0, cursorRow = textareaCurrentCursorRowSplit[LEXICON.l], cursorCol = textareaCurrentCursorRowSplit[textareaCurrentCursorRowSplit[LEXICON.l] - 1][LEXICON.l], rowCols, i;
            for (i = 0; i < textareaRowSplit[LEXICON.l]; i++)
              rowCols = textareaRowSplit[i][LEXICON.l], rowCols > textareaLastCol && (widestRow = i + 1, textareaLastCol = rowCols);
            return { _cursorRow: cursorRow, _cursorColumn: cursorCol, _rows: textareaLastRow, _columns: textareaLastCol, _widestRow: widestRow, _cursorPosition: textareaCursorPosition, _cursorMax: textareaLength };
          }
        }
        function nativeOverlayScrollbarsAreActive() {
          return _ignoreOverlayScrollbarHidingCache && _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y;
        }
        function getContentMeasureElement() {
          return _isTextarea ? _textareaCoverElement[0] : _contentElementNative;
        }
        function generateDiv(classesOrAttrs, content) {
          return "<div " + (classesOrAttrs ? type(classesOrAttrs) == TYPES.s ? 'class="' + classesOrAttrs + '"' : function() {
            var key, attrs = _strEmpty;
            if (FRAMEWORK.isPlainObject(classesOrAttrs))
              for (key in classesOrAttrs)
                attrs += (key === "c" ? "class" : key) + '="' + classesOrAttrs[key] + '" ';
            return attrs;
          }() : _strEmpty) + ">" + (content || _strEmpty) + "</div>";
        }
        function selectOrGenerateDivByClass(className, selectParentOrOnlyChildren) {
          var onlyChildren = type(selectParentOrOnlyChildren) == TYPES.b, selectParent = onlyChildren ? _hostElement : selectParentOrOnlyChildren || _hostElement;
          return _domExists && !selectParent[LEXICON.l] ? null : _domExists ? selectParent[onlyChildren ? "children" : "find"](_strDot + className.replace(/\s/g, _strDot)).eq(0) : FRAMEWORK(generateDiv(className));
        }
        function getObjectPropVal(obj, path) {
          for (var splits = path.split(_strDot), i = 0, val; i < splits.length; i++) {
            if (!obj[LEXICON.hOP](splits[i]))
              return;
            val = obj[splits[i]], i < splits.length && type(val) == TYPES.o && (obj = val);
          }
          return val;
        }
        function setObjectPropVal(obj, path, val) {
          for (var splits = path.split(_strDot), splitsLength = splits.length, i = 0, extendObj = {}, extendObjRoot = extendObj; i < splitsLength; i++)
            extendObj = extendObj[splits[i]] = i + 1 < splitsLength ? {} : val;
          FRAMEWORK.extend(obj, extendObjRoot, true);
        }
        function eachUpdateOnLoad(action) {
          var updateOnLoad = _currentPreparedOptions.updateOnLoad;
          updateOnLoad = type(updateOnLoad) == TYPES.s ? updateOnLoad.split(_strSpace) : updateOnLoad, COMPATIBILITY.isA(updateOnLoad) && !_destroyed && each(updateOnLoad, action);
        }
        function checkCache(current, cache, force) {
          if (force)
            return force;
          if (type(current) == TYPES.o && type(cache) == TYPES.o) {
            for (var prop in current)
              if (prop !== "c")
                if (current[LEXICON.hOP](prop) && cache[LEXICON.hOP](prop)) {
                  if (checkCache(current[prop], cache[prop]))
                    return true;
                } else
                  return true;
          } else
            return current !== cache;
          return false;
        }
        function extendDeep() {
          return FRAMEWORK.extend.apply(this, [true].concat([].slice.call(arguments)));
        }
        function addClass(el, classes) {
          return _frameworkProto.addClass.call(el, classes);
        }
        function removeClass(el, classes) {
          return _frameworkProto.removeClass.call(el, classes);
        }
        function addRemoveClass(el, classes, doAdd) {
          return doAdd ? addClass(el, classes) : removeClass(el, classes);
        }
        function remove(el) {
          return _frameworkProto.remove.call(el);
        }
        function findFirst(el, selector) {
          return _frameworkProto.find.call(el, selector).eq(0);
        }
        _base.sleep = function() {
          _sleeping = true;
        }, _base.update = function(force) {
          if (!_destroyed) {
            var attrsChanged, contentSizeC, isString = type(force) == TYPES.s, doUpdateAuto, mutHost, mutContent;
            return isString ? force === _strAuto ? (attrsChanged = meaningfulAttrsChanged(), contentSizeC = updateAutoContentSizeChanged(), doUpdateAuto = attrsChanged || contentSizeC, doUpdateAuto && update({ _contentSizeChanged: contentSizeC, _changedOptions: _initialized ? undefined2 : _currentPreparedOptions })) : force === _strSync ? _mutationObserversConnected ? (mutHost = _mutationObserverHostCallback(_mutationObserverHost.takeRecords()), mutContent = _mutationObserverContentCallback(_mutationObserverContent.takeRecords())) : mutHost = _base.update(_strAuto) : force === "zoom" && update({ _hostSizeChanged: true, _contentSizeChanged: true }) : (force = _sleeping || force, _sleeping = false, (!_base.update(_strSync) || force) && update({ _force: force })), updateElementsOnLoad(), doUpdateAuto || mutHost || mutContent;
          }
        }, _base.options = function(newOptions, value) {
          var option = {}, changedOps;
          if (FRAMEWORK.isEmptyObject(newOptions) || !FRAMEWORK.isPlainObject(newOptions))
            if (type(newOptions) == TYPES.s)
              if (arguments.length > 1)
                setObjectPropVal(option, newOptions, value), changedOps = setOptions(option);
              else
                return getObjectPropVal(_currentOptions, newOptions);
            else
              return _currentOptions;
          else
            changedOps = setOptions(newOptions);
          FRAMEWORK.isEmptyObject(changedOps) || update({ _changedOptions: changedOps });
        }, _base.destroy = function() {
          if (!_destroyed) {
            autoUpdateLoop.remove(_base), disconnectMutationObservers(), setupResizeObserver(_sizeObserverElement), setupResizeObserver(_sizeAutoObserverElement);
            for (var extName in _extensions)
              _base.removeExt(extName);
            for (; _destroyEvents[LEXICON.l] > 0; )
              _destroyEvents.pop()();
            setupHostMouseTouchEvents(true), _contentGlueElement && remove(_contentGlueElement), _contentArrangeElement && remove(_contentArrangeElement), _sizeAutoObserverAdded && remove(_sizeAutoObserverElement), setupScrollbarsDOM(true), setupScrollbarCornerDOM(true), setupStructureDOM(true);
            for (var i = 0; i < _updateOnLoadElms[LEXICON.l]; i++)
              FRAMEWORK(_updateOnLoadElms[i]).off(_updateOnLoadEventName, updateOnLoadCallback);
            _updateOnLoadElms = undefined2, _destroyed = true, _sleeping = true, INSTANCES(pluginTargetElement, 0), dispatchCallback("onDestroyed");
          }
        }, _base.scroll = function(coordinates, duration, easing, complete) {
          if (arguments.length === 0 || coordinates === undefined2) {
            var infoX = _scrollHorizontalInfo, infoY = _scrollVerticalInfo, normalizeInvert = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.i, normalizeNegate = _normalizeRTLCache && _isRTL && _rtlScrollBehavior.n, scrollX = infoX._currentScroll, scrollXRatio = infoX._currentScrollRatio, maxScrollX = infoX._maxScroll;
            return scrollXRatio = normalizeInvert ? 1 - scrollXRatio : scrollXRatio, scrollX = normalizeInvert ? maxScrollX - scrollX : scrollX, scrollX *= normalizeNegate ? -1 : 1, maxScrollX *= normalizeNegate ? -1 : 1, { position: { x: scrollX, y: infoY._currentScroll }, ratio: { x: scrollXRatio, y: infoY._currentScrollRatio }, max: { x: maxScrollX, y: infoY._maxScroll }, handleOffset: { x: infoX._handleOffset, y: infoY._handleOffset }, handleLength: { x: infoX._handleLength, y: infoY._handleLength }, handleLengthRatio: { x: infoX._handleLengthRatio, y: infoY._handleLengthRatio }, trackLength: { x: infoX._trackLength, y: infoY._trackLength }, snappedHandleOffset: { x: infoX._snappedHandleOffset, y: infoY._snappedHandleOffset }, isRTL: _isRTL, isRTLNormalized: _normalizeRTLCache };
          }
          _base.update(_strSync);
          var normalizeRTL = _normalizeRTLCache, coordinatesXAxisProps = [_strX, _strLeft, "l"], coordinatesYAxisProps = [_strY, _strTop, "t"], coordinatesOperators = ["+=", "-=", "*=", "/="], durationIsObject = type(duration) == TYPES.o, completeCallback = durationIsObject ? duration.complete : complete, i, finalScroll = {}, specialEasing = {}, doScrollLeft, doScrollTop, animationOptions, strEnd = "end", strBegin = "begin", strCenter = "center", strNearest = "nearest", strAlways = "always", strNever = "never", strIfNeeded = "ifneeded", strLength = LEXICON.l, settingsAxis, settingsScroll, settingsBlock, settingsMargin, finalElement, elementObjSettingsAxisValues = [_strX, _strY, "xy", "yx"], elementObjSettingsBlockValues = [strBegin, strEnd, strCenter, strNearest], elementObjSettingsScrollValues = [strAlways, strNever, strIfNeeded], coordinatesIsElementObj = coordinates[LEXICON.hOP]("el"), possibleElement = coordinatesIsElementObj ? coordinates.el : coordinates, possibleElementIsJQuery = possibleElement instanceof FRAMEWORK || JQUERY ? possibleElement instanceof JQUERY : false, possibleElementIsHTMLElement = possibleElementIsJQuery ? false : isHTMLElement(possibleElement), updateScrollbarInfos = function() {
            doScrollLeft && refreshScrollbarHandleOffset(true), doScrollTop && refreshScrollbarHandleOffset(false);
          }, proxyCompleteCallback = type(completeCallback) != TYPES.f ? undefined2 : function() {
            updateScrollbarInfos(), completeCallback();
          };
          function checkSettingsStringValue(currValue, allowedValues) {
            for (i = 0; i < allowedValues[strLength]; i++)
              if (currValue === allowedValues[i])
                return true;
            return false;
          }
          function getRawScroll(isX, coordinates2) {
            var coordinateProps = isX ? coordinatesXAxisProps : coordinatesYAxisProps;
            if (coordinates2 = type(coordinates2) == TYPES.s || type(coordinates2) == TYPES.n ? [coordinates2, coordinates2] : coordinates2, COMPATIBILITY.isA(coordinates2))
              return isX ? coordinates2[0] : coordinates2[1];
            if (type(coordinates2) == TYPES.o) {
              for (i = 0; i < coordinateProps[strLength]; i++)
                if (coordinateProps[i] in coordinates2)
                  return coordinates2[coordinateProps[i]];
            }
          }
          function getFinalScroll(isX, rawScroll) {
            var isString = type(rawScroll) == TYPES.s, operator, amount, scrollInfo = isX ? _scrollHorizontalInfo : _scrollVerticalInfo, currScroll = scrollInfo._currentScroll, maxScroll = scrollInfo._maxScroll, mult = " * ", finalValue, isRTLisX = _isRTL && isX, normalizeShortcuts = isRTLisX && _rtlScrollBehavior.n && !normalizeRTL, strReplace = "replace", evalFunc = eval, possibleOperator;
            if (isString ? (rawScroll[strLength] > 2 && (possibleOperator = rawScroll.substr(0, 2), inArray(possibleOperator, coordinatesOperators) > -1 && (operator = possibleOperator)), rawScroll = operator ? rawScroll.substr(2) : rawScroll, rawScroll = rawScroll[strReplace](/min/g, 0)[strReplace](/</g, 0)[strReplace](/max/g, (normalizeShortcuts ? "-" : _strEmpty) + _strHundredPercent)[strReplace](/>/g, (normalizeShortcuts ? "-" : _strEmpty) + _strHundredPercent)[strReplace](/px/g, _strEmpty)[strReplace](/%/g, mult + maxScroll * (isRTLisX && _rtlScrollBehavior.n ? -1 : 1) / 100)[strReplace](/vw/g, mult + _viewportSize.w)[strReplace](/vh/g, mult + _viewportSize.h), amount = parseToZeroOrNumber(isNaN(rawScroll) ? parseToZeroOrNumber(evalFunc(rawScroll), true).toFixed() : rawScroll)) : amount = rawScroll, amount !== undefined2 && !isNaN(amount) && type(amount) == TYPES.n) {
              var normalizeIsRTLisX = normalizeRTL && isRTLisX, operatorCurrScroll = currScroll * (normalizeIsRTLisX && _rtlScrollBehavior.n ? -1 : 1), invert = normalizeIsRTLisX && _rtlScrollBehavior.i, negate = normalizeIsRTLisX && _rtlScrollBehavior.n;
              switch (operatorCurrScroll = invert ? maxScroll - operatorCurrScroll : operatorCurrScroll, operator) {
                case "+=":
                  finalValue = operatorCurrScroll + amount;
                  break;
                case "-=":
                  finalValue = operatorCurrScroll - amount;
                  break;
                case "*=":
                  finalValue = operatorCurrScroll * amount;
                  break;
                case "/=":
                  finalValue = operatorCurrScroll / amount;
                  break;
                default:
                  finalValue = amount;
                  break;
              }
              finalValue = invert ? maxScroll - finalValue : finalValue, finalValue *= negate ? -1 : 1, finalValue = isRTLisX && _rtlScrollBehavior.n ? MATH.min(0, MATH.max(maxScroll, finalValue)) : MATH.max(0, MATH.min(maxScroll, finalValue));
            }
            return finalValue === currScroll ? undefined2 : finalValue;
          }
          function getPerAxisValue(value, valueInternalType, defaultValue, allowedValues) {
            var resultDefault = [defaultValue, defaultValue], valueType = type(value), valueArrLength, valueArrItem;
            if (valueType == valueInternalType)
              value = [value, value];
            else if (valueType == TYPES.a) {
              if (valueArrLength = value[strLength], valueArrLength > 2 || valueArrLength < 1)
                value = resultDefault;
              else
                for (valueArrLength === 1 && (value[1] = defaultValue), i = 0; i < valueArrLength; i++)
                  if (valueArrItem = value[i], type(valueArrItem) != valueInternalType || !checkSettingsStringValue(valueArrItem, allowedValues)) {
                    value = resultDefault;
                    break;
                  }
            } else
              valueType == TYPES.o ? value = [value[_strX] || defaultValue, value[_strY] || defaultValue] : value = resultDefault;
            return { x: value[0], y: value[1] };
          }
          function generateMargin(marginTopRightBottomLeftArray) {
            var result = [], currValue, currValueType, valueDirections = [_strTop, _strRight, _strBottom, _strLeft];
            for (i = 0; i < marginTopRightBottomLeftArray[strLength] && i !== valueDirections[strLength]; i++)
              currValue = marginTopRightBottomLeftArray[i], currValueType = type(currValue), currValueType == TYPES.b ? result.push(currValue ? parseToZeroOrNumber(finalElement.css(_strMarginMinus + valueDirections[i])) : 0) : result.push(currValueType == TYPES.n ? currValue : 0);
            return result;
          }
          if (possibleElementIsJQuery || possibleElementIsHTMLElement) {
            var margin = coordinatesIsElementObj ? coordinates.margin : 0, axis = coordinatesIsElementObj ? coordinates.axis : 0, scroll = coordinatesIsElementObj ? coordinates.scroll : 0, block = coordinatesIsElementObj ? coordinates.block : 0, marginDefault = [0, 0, 0, 0], marginType = type(margin), marginLength;
            if (finalElement = possibleElementIsJQuery ? possibleElement : FRAMEWORK(possibleElement), finalElement[strLength] > 0) {
              marginType == TYPES.n || marginType == TYPES.b ? margin = generateMargin([margin, margin, margin, margin]) : marginType == TYPES.a ? (marginLength = margin[strLength], marginLength === 2 ? margin = generateMargin([margin[0], margin[1], margin[0], margin[1]]) : marginLength >= 4 ? margin = generateMargin(margin) : margin = marginDefault) : marginType == TYPES.o ? margin = generateMargin([margin[_strTop], margin[_strRight], margin[_strBottom], margin[_strLeft]]) : margin = marginDefault, settingsAxis = checkSettingsStringValue(axis, elementObjSettingsAxisValues) ? axis : "xy", settingsScroll = getPerAxisValue(scroll, TYPES.s, strAlways, elementObjSettingsScrollValues), settingsBlock = getPerAxisValue(block, TYPES.s, strBegin, elementObjSettingsBlockValues), settingsMargin = margin;
              var viewportScroll = { l: _scrollHorizontalInfo._currentScroll, t: _scrollVerticalInfo._currentScroll }, viewportOffset = _paddingElement.offset(), elementOffset = finalElement.offset(), doNotScroll = { x: settingsScroll.x == strNever || settingsAxis == _strY, y: settingsScroll.y == strNever || settingsAxis == _strX };
              elementOffset[_strTop] -= settingsMargin[0], elementOffset[_strLeft] -= settingsMargin[3];
              var elementScrollCoordinates = { x: MATH.round(elementOffset[_strLeft] - viewportOffset[_strLeft] + viewportScroll.l), y: MATH.round(elementOffset[_strTop] - viewportOffset[_strTop] + viewportScroll.t) };
              if (_isRTL && (!_rtlScrollBehavior.n && !_rtlScrollBehavior.i && (elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + viewportScroll.l)), _rtlScrollBehavior.n && normalizeRTL && (elementScrollCoordinates.x *= -1), _rtlScrollBehavior.i && normalizeRTL && (elementScrollCoordinates.x = MATH.round(viewportOffset[_strLeft] - elementOffset[_strLeft] + (_scrollHorizontalInfo._maxScroll - viewportScroll.l)))), settingsBlock.x != strBegin || settingsBlock.y != strBegin || settingsScroll.x == strIfNeeded || settingsScroll.y == strIfNeeded || _isRTL) {
                var measuringElm = finalElement[0], rawElementSize = _supportTransform ? measuringElm[LEXICON.bCR]() : { width: measuringElm[LEXICON.oW], height: measuringElm[LEXICON.oH] }, elementSize = { w: rawElementSize[_strWidth] + settingsMargin[3] + settingsMargin[1], h: rawElementSize[_strHeight] + settingsMargin[0] + settingsMargin[2] }, finalizeBlock = function(isX) {
                  var vars = getScrollbarVars(isX), wh = vars._w_h, lt = vars._left_top, xy = vars._x_y, blockIsEnd = settingsBlock[xy] == (isX && _isRTL ? strBegin : strEnd), blockIsCenter = settingsBlock[xy] == strCenter, blockIsNearest = settingsBlock[xy] == strNearest, scrollNever = settingsScroll[xy] == strNever, scrollIfNeeded = settingsScroll[xy] == strIfNeeded, vpSize = _viewportSize[wh], vpOffset = viewportOffset[lt], elSize = elementSize[wh], elOffset = elementOffset[lt], divide = blockIsCenter ? 2 : 1, elementCenterOffset = elOffset + elSize / 2, viewportCenterOffset = vpOffset + vpSize / 2, isInView = elSize <= vpSize && elOffset >= vpOffset && elOffset + elSize <= vpOffset + vpSize;
                  scrollNever ? doNotScroll[xy] = true : doNotScroll[xy] || ((blockIsNearest || scrollIfNeeded) && (doNotScroll[xy] = scrollIfNeeded ? isInView : false, blockIsEnd = elSize < vpSize ? elementCenterOffset > viewportCenterOffset : elementCenterOffset < viewportCenterOffset), elementScrollCoordinates[xy] -= blockIsEnd || blockIsCenter ? (vpSize / divide - elSize / divide) * (isX && _isRTL && normalizeRTL ? -1 : 1) : 0);
                };
                finalizeBlock(true), finalizeBlock(false);
              }
              doNotScroll.y && delete elementScrollCoordinates.y, doNotScroll.x && delete elementScrollCoordinates.x, coordinates = elementScrollCoordinates;
            }
          }
          finalScroll[_strScrollLeft] = getFinalScroll(true, getRawScroll(true, coordinates)), finalScroll[_strScrollTop] = getFinalScroll(false, getRawScroll(false, coordinates)), doScrollLeft = finalScroll[_strScrollLeft] !== undefined2, doScrollTop = finalScroll[_strScrollTop] !== undefined2, (doScrollLeft || doScrollTop) && (duration > 0 || durationIsObject) ? durationIsObject ? (duration.complete = proxyCompleteCallback, _viewportElement.animate(finalScroll, duration)) : (animationOptions = { duration, complete: proxyCompleteCallback }, COMPATIBILITY.isA(easing) || FRAMEWORK.isPlainObject(easing) ? (specialEasing[_strScrollLeft] = easing[0] || easing.x, specialEasing[_strScrollTop] = easing[1] || easing.y, animationOptions.specialEasing = specialEasing) : animationOptions.easing = easing, _viewportElement.animate(finalScroll, animationOptions)) : (doScrollLeft && _viewportElement[_strScrollLeft](finalScroll[_strScrollLeft]), doScrollTop && _viewportElement[_strScrollTop](finalScroll[_strScrollTop]), updateScrollbarInfos());
        }, _base.scrollStop = function(param1, param2, param3) {
          return _viewportElement.stop(param1, param2, param3), _base;
        }, _base.getElements = function(elementName) {
          var obj = { target: _targetElementNative, host: _hostElementNative, padding: _paddingElementNative, viewport: _viewportElementNative, content: _contentElementNative, scrollbarHorizontal: { scrollbar: _scrollbarHorizontalElement[0], track: _scrollbarHorizontalTrackElement[0], handle: _scrollbarHorizontalHandleElement[0] }, scrollbarVertical: { scrollbar: _scrollbarVerticalElement[0], track: _scrollbarVerticalTrackElement[0], handle: _scrollbarVerticalHandleElement[0] }, scrollbarCorner: _scrollbarCornerElement[0] };
          return type(elementName) == TYPES.s ? getObjectPropVal(obj, elementName) : obj;
        }, _base.getState = function(stateProperty) {
          function prepare(obj2) {
            if (!FRAMEWORK.isPlainObject(obj2))
              return obj2;
            var extended = extendDeep({}, obj2), changePropertyName = function(from, to) {
              extended[LEXICON.hOP](from) && (extended[to] = extended[from], delete extended[from]);
            };
            return changePropertyName("w", _strWidth), changePropertyName("h", _strHeight), delete extended.c, extended;
          }
          var obj = { destroyed: !!prepare(_destroyed), sleeping: !!prepare(_sleeping), autoUpdate: prepare(!_mutationObserversConnected), widthAuto: prepare(_widthAutoCache), heightAuto: prepare(_heightAutoCache), padding: prepare(_cssPaddingCache), overflowAmount: prepare(_overflowAmountCache), hideOverflow: prepare(_hideOverflowCache), hasOverflow: prepare(_hasOverflowCache), contentScrollSize: prepare(_contentScrollSizeCache), viewportSize: prepare(_viewportSize), hostSize: prepare(_hostSizeCache), documentMixed: prepare(_documentMixed) };
          return type(stateProperty) == TYPES.s ? getObjectPropVal(obj, stateProperty) : obj;
        }, _base.ext = function(extName) {
          var result, privateMethods = _extensionsPrivateMethods.split(" "), i = 0;
          if (type(extName) == TYPES.s) {
            if (_extensions[LEXICON.hOP](extName))
              for (result = extendDeep({}, _extensions[extName]); i < privateMethods.length; i++)
                delete result[privateMethods[i]];
          } else {
            result = {};
            for (i in _extensions)
              result[i] = extendDeep({}, _base.ext(i));
          }
          return result;
        }, _base.addExt = function(extName, extensionOptions) {
          var registeredExtensionObj = _plugin.extension(extName), instance, instanceAdded, instanceContract, contractResult, contractFulfilled = true;
          if (registeredExtensionObj) {
            if (_extensions[LEXICON.hOP](extName))
              return _base.ext(extName);
            if (instance = registeredExtensionObj.extensionFactory.call(_base, extendDeep({}, registeredExtensionObj.defaultOptions), FRAMEWORK, COMPATIBILITY), instance && (instanceContract = instance.contract, type(instanceContract) == TYPES.f && (contractResult = instanceContract(window2), contractFulfilled = type(contractResult) == TYPES.b ? contractResult : contractFulfilled), contractFulfilled))
              return _extensions[extName] = instance, instanceAdded = instance.added, type(instanceAdded) == TYPES.f && instanceAdded(extensionOptions), _base.ext(extName);
          } else
            console.warn('A extension with the name "' + extName + `" isn't registered.`);
        }, _base.removeExt = function(extName) {
          var instance = _extensions[extName], instanceRemoved;
          return instance ? (delete _extensions[extName], instanceRemoved = instance.removed, type(instanceRemoved) == TYPES.f && instanceRemoved(), true) : false;
        };
        function construct(targetElement, options2, extensions2) {
          _defaultOptions = globals.defaultOptions, _nativeScrollbarStyling = globals.nativeScrollbarStyling, _nativeScrollbarSize = extendDeep({}, globals.nativeScrollbarSize), _nativeScrollbarIsOverlaid = extendDeep({}, globals.nativeScrollbarIsOverlaid), _overlayScrollbarDummySize = extendDeep({}, globals.overlayScrollbarDummySize), _rtlScrollBehavior = extendDeep({}, globals.rtlScrollBehavior), setOptions(extendDeep({}, _defaultOptions, options2)), _cssCalc = globals.cssCalc, _msieVersion = globals.msie, _autoUpdateRecommended = globals.autoUpdateRecommended, _supportTransition = globals.supportTransition, _supportTransform = globals.supportTransform, _supportPassiveEvents = globals.supportPassiveEvents, _supportResizeObserver = globals.supportResizeObserver, _supportMutationObserver = globals.supportMutationObserver, globals.restrictedMeasuring, _documentElement = FRAMEWORK(targetElement.ownerDocument), _documentElementNative = _documentElement[0], _windowElement = FRAMEWORK(_documentElementNative.defaultView || _documentElementNative.parentWindow), _windowElementNative = _windowElement[0], _htmlElement = findFirst(_documentElement, "html"), _bodyElement = findFirst(_htmlElement, "body"), _targetElement = FRAMEWORK(targetElement), _targetElementNative = _targetElement[0], _isTextarea = _targetElement.is("textarea"), _isBody = _targetElement.is("body"), _documentMixed = _documentElementNative !== document, _domExists = _isTextarea ? _targetElement.hasClass(_classNameTextareaElement) && _targetElement.parent().hasClass(_classNameContentElement) : _targetElement.hasClass(_classNameHostElement) && _targetElement.children(_strDot + _classNamePaddingElement)[LEXICON.l];
          var initBodyScroll, bodyMouseTouchDownListener;
          return _nativeScrollbarIsOverlaid.x && _nativeScrollbarIsOverlaid.y && !_currentPreparedOptions.nativeScrollbarsOverlaid.initialize ? (_initialized = true, dispatchCallback("onInitializationWithdrawn"), _domExists && (setupStructureDOM(true), setupScrollbarsDOM(true), setupScrollbarCornerDOM(true)), _initialized = false, _destroyed = true, _sleeping = true, _base) : (_isBody && (initBodyScroll = {}, initBodyScroll.l = MATH.max(_targetElement[_strScrollLeft](), _htmlElement[_strScrollLeft](), _windowElement[_strScrollLeft]()), initBodyScroll.t = MATH.max(_targetElement[_strScrollTop](), _htmlElement[_strScrollTop](), _windowElement[_strScrollTop]()), bodyMouseTouchDownListener = function() {
            _viewportElement.removeAttr(LEXICON.ti), setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, true, true);
          }), setupStructureDOM(), setupScrollbarsDOM(), setupScrollbarCornerDOM(), setupStructureEvents(), setupScrollbarEvents(true), setupScrollbarEvents(false), setupScrollbarCornerEvents(), createMutationObservers(), setupResizeObserver(_sizeObserverElement, hostOnResized), _isBody && (_viewportElement[_strScrollLeft](initBodyScroll.l)[_strScrollTop](initBodyScroll.t), document.activeElement == targetElement && _viewportElementNative.focus && (_viewportElement.attr(LEXICON.ti, "-1"), _viewportElementNative.focus(), setupResponsiveEventListener(_viewportElement, _strMouseTouchDownEvent, bodyMouseTouchDownListener, false, true))), _base.update(_strAuto), _initialized = true, dispatchCallback("onInitialized"), each(_callbacksInitQeueue, function(index, value) {
            dispatchCallback(value.n, value.a);
          }), _callbacksInitQeueue = [], type(extensions2) == TYPES.s && (extensions2 = [extensions2]), COMPATIBILITY.isA(extensions2) ? each(extensions2, function(index, value) {
            _base.addExt(value);
          }) : FRAMEWORK.isPlainObject(extensions2) && each(extensions2, function(key, value) {
            _base.addExt(key, value);
          }), setTimeout(function() {
            _supportTransition && !_destroyed && addClass(_hostElement, _classNameHostTransition);
          }, 333), _base);
        }
        return _plugin.valid(construct(pluginTargetElement, options, extensions)) && INSTANCES(pluginTargetElement, _base), _base;
      }
      return _plugin = window2[PLUGINNAME] = function(pluginTargetElements, options, extensions) {
        if (arguments[LEXICON.l] === 0)
          return this;
        var arr = [], optsIsPlainObj = FRAMEWORK.isPlainObject(options), inst, result;
        return pluginTargetElements ? (pluginTargetElements = pluginTargetElements[LEXICON.l] != undefined2 ? pluginTargetElements : [pluginTargetElements[0] || pluginTargetElements], initOverlayScrollbarsStatics(), pluginTargetElements[LEXICON.l] > 0 && (optsIsPlainObj ? FRAMEWORK.each(pluginTargetElements, function(i, v) {
          inst = v, inst !== undefined2 && arr.push(OverlayScrollbarsInstance(inst, options, extensions, _pluginsGlobals, _pluginsAutoUpdateLoop));
        }) : FRAMEWORK.each(pluginTargetElements, function(i, v) {
          inst = INSTANCES(v), (options === "!" && _plugin.valid(inst) || COMPATIBILITY.type(options) == TYPES.f && options(v, inst) || options === undefined2) && arr.push(inst);
        }), result = arr[LEXICON.l] === 1 ? arr[0] : arr), result) : optsIsPlainObj || !options ? result : arr;
      }, _plugin.globals = function() {
        initOverlayScrollbarsStatics();
        var globals = FRAMEWORK.extend(true, {}, _pluginsGlobals);
        return delete globals.msie, globals;
      }, _plugin.defaultOptions = function(newDefaultOptions) {
        initOverlayScrollbarsStatics();
        var currDefaultOptions = _pluginsGlobals.defaultOptions;
        if (newDefaultOptions === undefined2)
          return FRAMEWORK.extend(true, {}, currDefaultOptions);
        _pluginsGlobals.defaultOptions = FRAMEWORK.extend(true, {}, currDefaultOptions, _pluginsOptions._validate(newDefaultOptions, _pluginsOptions._template, true, currDefaultOptions)._default);
      }, _plugin.valid = function(osInstance) {
        return osInstance instanceof _plugin && !osInstance.getState().destroyed;
      }, _plugin.extension = function(extensionName, extension, defaultOptions) {
        var extNameTypeString = COMPATIBILITY.type(extensionName) == TYPES.s, argLen = arguments[LEXICON.l], i = 0;
        if (argLen < 1 || !extNameTypeString)
          return FRAMEWORK.extend(true, { length: _pluginsExtensions[LEXICON.l] }, _pluginsExtensions);
        if (extNameTypeString) {
          if (COMPATIBILITY.type(extension) == TYPES.f)
            _pluginsExtensions.push({ name: extensionName, extensionFactory: extension, defaultOptions });
          else
            for (; i < _pluginsExtensions[LEXICON.l]; i++)
              if (_pluginsExtensions[i].name === extensionName)
                if (argLen > 1)
                  _pluginsExtensions.splice(i, 1);
                else
                  return FRAMEWORK.extend(true, {}, _pluginsExtensions[i]);
        }
      }, _plugin;
    }();
    return JQUERY && JQUERY.fn && (JQUERY.fn.overlayScrollbars = function(options, extensions) {
      var _elements = this;
      return JQUERY.isPlainObject(options) ? (JQUERY.each(_elements, function() {
        PLUGIN(this, options, extensions);
      }), _elements) : PLUGIN(_elements, options);
    }), PLUGIN;
  });
} });
var import_overlayscrollbars = __toESM(require_OverlayScrollbars());
var OverlayScrollbarsComponent = ({ options = {}, extensions, className, children, ...rest }) => {
  let osTargetRef = reactExports.useRef(), osInstance = reactExports.useRef();
  return reactExports.useEffect(() => (osInstance.current = (0, import_overlayscrollbars.default)(osTargetRef.current, options, extensions), mergeHostClassNames(osInstance.current, className), () => {
    import_overlayscrollbars.default.valid(osInstance.current) && (osInstance.current.destroy(), osInstance.current = null);
  }), []), reactExports.useEffect(() => {
    import_overlayscrollbars.default.valid(osInstance.current) && osInstance.current.options(options);
  }, [options]), reactExports.useEffect(() => {
    import_overlayscrollbars.default.valid(osInstance.current) && mergeHostClassNames(osInstance.current, className);
  }, [className]), React.createElement("div", { className: "os-host", ...rest, ref: osTargetRef }, React.createElement("div", { className: "os-resize-observer-host" }), React.createElement("div", { className: "os-padding" }, React.createElement("div", { className: "os-viewport" }, React.createElement("div", { className: "os-content" }, children))), React.createElement("div", { className: "os-scrollbar os-scrollbar-horizontal " }, React.createElement("div", { className: "os-scrollbar-track" }, React.createElement("div", { className: "os-scrollbar-handle" }))), React.createElement("div", { className: "os-scrollbar os-scrollbar-vertical" }, React.createElement("div", { className: "os-scrollbar-track" }, React.createElement("div", { className: "os-scrollbar-handle" }))), React.createElement("div", { className: "os-scrollbar-corner" }));
};
function mergeHostClassNames(osInstance, className) {
  if (import_overlayscrollbars.default.valid(osInstance)) {
    let { host } = osInstance.getElements(), regex = new RegExp(`(^os-host([-_].+|)$)|${osInstance.options().className.replace(/\s/g, "$|")}$`, "g"), osClassNames = host.className.split(" ").filter((name) => name.match(regex)).join(" ");
    host.className = `${osClassNames} ${className || ""}`;
  }
}
var OverlayScrollbars_default = OverlayScrollbarsComponent;
export {
  OverlayScrollbarsComponent,
  OverlayScrollbars_default as default
};
