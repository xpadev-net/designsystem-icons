import { _ as __toESM, m as memoize, b as __commonJS } from "./index-9ba8c932.js";
import "./iframe-84e03dbc.js";
import "../sb-preview/runtime.js";
import "./index-5c06e906.js";
import "./_commonjsHelpers-7a7fcd32.js";
import "./index-9e612267.js";
import "./index-ee6951c2.js";
import "./index-70649251.js";
import "./index-eeefe080.js";
var require_parser_html = __commonJS({ "node_modules/prettier/parser-html.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var i = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      i.prettierPlugins = i.prettierPlugins || {}, i.prettierPlugins.html = e();
    }
  })(function() {
    var S = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), ee = S((cc, Kr) => {
      var Ne = function(e) {
        return e && e.Math == Math && e;
      };
      Kr.exports = Ne(typeof globalThis == "object" && globalThis) || Ne(typeof window == "object" && window) || Ne(typeof self == "object" && self) || Ne(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), se = S((hc, Jr) => {
      Jr.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), ae = S((pc, Zr) => {
      var qs = se();
      Zr.exports = !qs(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Oe = S((fc, eu) => {
      var Is = se();
      eu.exports = !Is(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), De = S((dc, ru) => {
      var Rs = Oe(), qe = Function.prototype.call;
      ru.exports = Rs ? qe.bind(qe) : function() {
        return qe.apply(qe, arguments);
      };
    }), su = S((nu) => {
      var uu = {}.propertyIsEnumerable, tu = Object.getOwnPropertyDescriptor, xs = tu && !uu.call({ 1: 2 }, 1);
      nu.f = xs ? function(r) {
        var u = tu(this, r);
        return !!u && u.enumerable;
      } : uu;
    }), Ie = S((Cc, iu) => {
      iu.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    }), re = S((mc, Du) => {
      var au = Oe(), ou = Function.prototype, er = ou.call, Ps = au && ou.bind.bind(er, er);
      Du.exports = au ? Ps : function(e) {
        return function() {
          return er.apply(e, arguments);
        };
      };
    }), me = S((gc, cu) => {
      var lu = re(), ks = lu({}.toString), Ls = lu("".slice);
      cu.exports = function(e) {
        return Ls(ks(e), 8, -1);
      };
    }), pu = S((Fc, hu) => {
      var $s = re(), Ms = se(), js = me(), rr = Object, Us = $s("".split);
      hu.exports = Ms(function() {
        return !rr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return js(e) == "String" ? Us(e, "") : rr(e);
      } : rr;
    }), Re = S((Ac, fu) => {
      fu.exports = function(e) {
        return e == null;
      };
    }), ur = S((vc, du) => {
      var Gs = Re(), Vs = TypeError;
      du.exports = function(e) {
        if (Gs(e))
          throw Vs("Can't call method on " + e);
        return e;
      };
    }), xe = S((_c, Eu) => {
      var Xs = pu(), Hs = ur();
      Eu.exports = function(e) {
        return Xs(Hs(e));
      };
    }), nr = S((Sc, Cu) => {
      var tr = typeof document == "object" && document.all, zs = typeof tr > "u" && tr !== void 0;
      Cu.exports = { all: tr, IS_HTMLDDA: zs };
    }), Y = S((yc, gu) => {
      var mu = nr(), Ws = mu.all;
      gu.exports = mu.IS_HTMLDDA ? function(e) {
        return typeof e == "function" || e === Ws;
      } : function(e) {
        return typeof e == "function";
      };
    }), le = S((Tc, vu) => {
      var Fu = Y(), Au = nr(), Ys = Au.all;
      vu.exports = Au.IS_HTMLDDA ? function(e) {
        return typeof e == "object" ? e !== null : Fu(e) || e === Ys;
      } : function(e) {
        return typeof e == "object" ? e !== null : Fu(e);
      };
    }), ge = S((Bc, _u) => {
      var sr = ee(), Qs = Y(), Ks = function(e) {
        return Qs(e) ? e : void 0;
      };
      _u.exports = function(e, r) {
        return arguments.length < 2 ? Ks(sr[e]) : sr[e] && sr[e][r];
      };
    }), ir = S((bc, Su) => {
      var Js = re();
      Su.exports = Js({}.isPrototypeOf);
    }), Tu = S((wc, yu) => {
      var Zs = ge();
      yu.exports = Zs("navigator", "userAgent") || "";
    }), Iu = S((Nc, qu) => {
      var Ou = ee(), ar = Tu(), Bu = Ou.process, bu = Ou.Deno, wu = Bu && Bu.versions || bu && bu.version, Nu = wu && wu.v8, ue, Pe;
      Nu && (ue = Nu.split("."), Pe = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1])), !Pe && ar && (ue = ar.match(/Edge\/(\d+)/), (!ue || ue[1] >= 74) && (ue = ar.match(/Chrome\/(\d+)/), ue && (Pe = +ue[1]))), qu.exports = Pe;
    }), or = S((Oc, xu) => {
      var Ru = Iu(), ei = se();
      xu.exports = !!Object.getOwnPropertySymbols && !ei(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ru && Ru < 41;
      });
    }), Dr = S((qc, Pu) => {
      var ri = or();
      Pu.exports = ri && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), lr = S((Ic, ku) => {
      var ui = ge(), ti = Y(), ni = ir(), si = Dr(), ii = Object;
      ku.exports = si ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = ui("Symbol");
        return ti(r) && ni(r.prototype, ii(e));
      };
    }), ke = S((Rc, Lu) => {
      var ai = String;
      Lu.exports = function(e) {
        try {
          return ai(e);
        } catch {
          return "Object";
        }
      };
    }), Fe = S((xc, $u) => {
      var oi = Y(), Di = ke(), li = TypeError;
      $u.exports = function(e) {
        if (oi(e))
          return e;
        throw li(Di(e) + " is not a function");
      };
    }), Le = S((Pc, Mu) => {
      var ci = Fe(), hi = Re();
      Mu.exports = function(e, r) {
        var u = e[r];
        return hi(u) ? void 0 : ci(u);
      };
    }), Uu = S((kc, ju) => {
      var cr = De(), hr = Y(), pr = le(), pi = TypeError;
      ju.exports = function(e, r) {
        var u, n;
        if (r === "string" && hr(u = e.toString) && !pr(n = cr(u, e)) || hr(u = e.valueOf) && !pr(n = cr(u, e)) || r !== "string" && hr(u = e.toString) && !pr(n = cr(u, e)))
          return n;
        throw pi("Can't convert object to primitive value");
      };
    }), Vu = S((Lc, Gu) => {
      Gu.exports = false;
    }), $e = S(($c, Hu) => {
      var Xu = ee(), fi = Object.defineProperty;
      Hu.exports = function(e, r) {
        try {
          fi(Xu, e, { value: r, configurable: true, writable: true });
        } catch {
          Xu[e] = r;
        }
        return r;
      };
    }), Me = S((Mc, Wu) => {
      var di = ee(), Ei = $e(), zu = "__core-js_shared__", Ci = di[zu] || Ei(zu, {});
      Wu.exports = Ci;
    }), fr = S((jc, Qu) => {
      var mi = Vu(), Yu = Me();
      (Qu.exports = function(e, r) {
        return Yu[e] || (Yu[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.26.1", mode: mi ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), dr = S((Uc, Ku) => {
      var gi = ur(), Fi = Object;
      Ku.exports = function(e) {
        return Fi(gi(e));
      };
    }), oe = S((Gc, Ju) => {
      var Ai = re(), vi = dr(), _i = Ai({}.hasOwnProperty);
      Ju.exports = Object.hasOwn || function(r, u) {
        return _i(vi(r), u);
      };
    }), Er = S((Vc, Zu) => {
      var Si = re(), yi = 0, Ti = Math.random(), Bi = Si(1 .toString);
      Zu.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Bi(++yi + Ti, 36);
      };
    }), he = S((Xc, nt) => {
      var bi = ee(), wi = fr(), et = oe(), Ni = Er(), rt = or(), tt = Dr(), fe = wi("wks"), ce = bi.Symbol, ut = ce && ce.for, Oi = tt ? ce : ce && ce.withoutSetter || Ni;
      nt.exports = function(e) {
        if (!et(fe, e) || !(rt || typeof fe[e] == "string")) {
          var r = "Symbol." + e;
          rt && et(ce, e) ? fe[e] = ce[e] : tt && ut ? fe[e] = ut(r) : fe[e] = Oi(r);
        }
        return fe[e];
      };
    }), ot = S((Hc, at) => {
      var qi = De(), st = le(), it = lr(), Ii = Le(), Ri = Uu(), xi = he(), Pi = TypeError, ki = xi("toPrimitive");
      at.exports = function(e, r) {
        if (!st(e) || it(e))
          return e;
        var u = Ii(e, ki), n;
        if (u) {
          if (r === void 0 && (r = "default"), n = qi(u, e, r), !st(n) || it(n))
            return n;
          throw Pi("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), Ri(e, r);
      };
    }), je = S((zc, Dt) => {
      var Li = ot(), $i = lr();
      Dt.exports = function(e) {
        var r = Li(e, "string");
        return $i(r) ? r : r + "";
      };
    }), ht = S((Wc, ct) => {
      var Mi = ee(), lt = le(), Cr = Mi.document, ji = lt(Cr) && lt(Cr.createElement);
      ct.exports = function(e) {
        return ji ? Cr.createElement(e) : {};
      };
    }), mr = S((Yc, pt) => {
      var Ui = ae(), Gi = se(), Vi = ht();
      pt.exports = !Ui && !Gi(function() {
        return Object.defineProperty(Vi("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), gr = S((dt) => {
      var Xi = ae(), Hi = De(), zi = su(), Wi = Ie(), Yi = xe(), Qi = je(), Ki = oe(), Ji = mr(), ft = Object.getOwnPropertyDescriptor;
      dt.f = Xi ? ft : function(r, u) {
        if (r = Yi(r), u = Qi(u), Ji)
          try {
            return ft(r, u);
          } catch {
          }
        if (Ki(r, u))
          return Wi(!Hi(zi.f, r, u), r[u]);
      };
    }), Ct = S((Kc, Et) => {
      var Zi = ae(), ea = se();
      Et.exports = Zi && ea(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), de = S((Jc, mt) => {
      var ra = le(), ua = String, ta = TypeError;
      mt.exports = function(e) {
        if (ra(e))
          return e;
        throw ta(ua(e) + " is not an object");
      };
    }), Ae = S((Ft) => {
      var na = ae(), sa = mr(), ia = Ct(), Ue = de(), gt = je(), aa = TypeError, Fr = Object.defineProperty, oa = Object.getOwnPropertyDescriptor, Ar = "enumerable", vr = "configurable", _r = "writable";
      Ft.f = na ? ia ? function(r, u, n) {
        if (Ue(r), u = gt(u), Ue(n), typeof r == "function" && u === "prototype" && "value" in n && _r in n && !n[_r]) {
          var D = oa(r, u);
          D && D[_r] && (r[u] = n.value, n = { configurable: vr in n ? n[vr] : D[vr], enumerable: Ar in n ? n[Ar] : D[Ar], writable: false });
        }
        return Fr(r, u, n);
      } : Fr : function(r, u, n) {
        if (Ue(r), u = gt(u), Ue(n), sa)
          try {
            return Fr(r, u, n);
          } catch {
          }
        if ("get" in n || "set" in n)
          throw aa("Accessors not supported");
        return "value" in n && (r[u] = n.value), r;
      };
    }), Sr = S((e2, At) => {
      var Da = ae(), la = Ae(), ca = Ie();
      At.exports = Da ? function(e, r, u) {
        return la.f(e, r, ca(1, u));
      } : function(e, r, u) {
        return e[r] = u, e;
      };
    }), St = S((r2, _t) => {
      var yr = ae(), ha = oe(), vt = Function.prototype, pa = yr && Object.getOwnPropertyDescriptor, Tr = ha(vt, "name"), fa = Tr && function() {
      }.name === "something", da = Tr && (!yr || yr && pa(vt, "name").configurable);
      _t.exports = { EXISTS: Tr, PROPER: fa, CONFIGURABLE: da };
    }), br = S((u2, yt) => {
      var Ea = re(), Ca = Y(), Br = Me(), ma = Ea(Function.toString);
      Ca(Br.inspectSource) || (Br.inspectSource = function(e) {
        return ma(e);
      }), yt.exports = Br.inspectSource;
    }), bt = S((t2, Bt) => {
      var ga = ee(), Fa = Y(), Tt = ga.WeakMap;
      Bt.exports = Fa(Tt) && /native code/.test(String(Tt));
    }), Ot = S((n2, Nt) => {
      var Aa = fr(), va = Er(), wt = Aa("keys");
      Nt.exports = function(e) {
        return wt[e] || (wt[e] = va(e));
      };
    }), wr = S((s2, qt) => {
      qt.exports = {};
    }), Pt = S((i2, xt) => {
      var _a = bt(), Rt = ee(), Sa = le(), ya = Sr(), Nr = oe(), Or = Me(), Ta = Ot(), Ba = wr(), It = "Object already initialized", qr = Rt.TypeError, ba = Rt.WeakMap, Ge, ve, Ve, wa = function(e) {
        return Ve(e) ? ve(e) : Ge(e, {});
      }, Na = function(e) {
        return function(r) {
          var u;
          if (!Sa(r) || (u = ve(r)).type !== e)
            throw qr("Incompatible receiver, " + e + " required");
          return u;
        };
      };
      _a || Or.state ? (te = Or.state || (Or.state = new ba()), te.get = te.get, te.has = te.has, te.set = te.set, Ge = function(e, r) {
        if (te.has(e))
          throw qr(It);
        return r.facade = e, te.set(e, r), r;
      }, ve = function(e) {
        return te.get(e) || {};
      }, Ve = function(e) {
        return te.has(e);
      }) : (pe = Ta("state"), Ba[pe] = true, Ge = function(e, r) {
        if (Nr(e, pe))
          throw qr(It);
        return r.facade = e, ya(e, pe, r), r;
      }, ve = function(e) {
        return Nr(e, pe) ? e[pe] : {};
      }, Ve = function(e) {
        return Nr(e, pe);
      });
      var te, pe;
      xt.exports = { set: Ge, get: ve, has: Ve, enforce: wa, getterFor: Na };
    }), $t = S((a2, Lt) => {
      var Oa = se(), qa = Y(), Xe = oe(), Ir = ae(), Ia = St().CONFIGURABLE, Ra = br(), kt = Pt(), xa = kt.enforce, Pa = kt.get, He = Object.defineProperty, ka = Ir && !Oa(function() {
        return He(function() {
        }, "length", { value: 8 }).length !== 8;
      }), La = String(String).split("String"), $a = Lt.exports = function(e, r, u) {
        String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), u && u.getter && (r = "get " + r), u && u.setter && (r = "set " + r), (!Xe(e, "name") || Ia && e.name !== r) && (Ir ? He(e, "name", { value: r, configurable: true }) : e.name = r), ka && u && Xe(u, "arity") && e.length !== u.arity && He(e, "length", { value: u.arity });
        try {
          u && Xe(u, "constructor") && u.constructor ? Ir && He(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
        } catch {
        }
        var n = xa(e);
        return Xe(n, "source") || (n.source = La.join(typeof r == "string" ? r : "")), e;
      };
      Function.prototype.toString = $a(function() {
        return qa(this) && Pa(this).source || Ra(this);
      }, "toString");
    }), jt = S((o2, Mt) => {
      var Ma = Y(), ja = Ae(), Ua = $t(), Ga = $e();
      Mt.exports = function(e, r, u, n) {
        n || (n = {});
        var D = n.enumerable, s = n.name !== void 0 ? n.name : r;
        if (Ma(u) && Ua(u, s, n), n.global)
          D ? e[r] = u : Ga(r, u);
        else {
          try {
            n.unsafe ? e[r] && (D = true) : delete e[r];
          } catch {
          }
          D ? e[r] = u : ja.f(e, r, { value: u, enumerable: false, configurable: !n.nonConfigurable, writable: !n.nonWritable });
        }
        return e;
      };
    }), Gt = S((D2, Ut) => {
      var Va = Math.ceil, Xa = Math.floor;
      Ut.exports = Math.trunc || function(r) {
        var u = +r;
        return (u > 0 ? Xa : Va)(u);
      };
    }), Rr = S((l2, Vt) => {
      var Ha = Gt();
      Vt.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : Ha(r);
      };
    }), Ht = S((c2, Xt) => {
      var za = Rr(), Wa = Math.max, Ya = Math.min;
      Xt.exports = function(e, r) {
        var u = za(e);
        return u < 0 ? Wa(u + r, 0) : Ya(u, r);
      };
    }), Wt = S((h2, zt) => {
      var Qa = Rr(), Ka = Math.min;
      zt.exports = function(e) {
        return e > 0 ? Ka(Qa(e), 9007199254740991) : 0;
      };
    }), _e = S((p2, Yt) => {
      var Ja = Wt();
      Yt.exports = function(e) {
        return Ja(e.length);
      };
    }), Jt = S((f2, Kt) => {
      var Za = xe(), eo = Ht(), ro = _e(), Qt = function(e) {
        return function(r, u, n) {
          var D = Za(r), s = ro(D), i = eo(n, s), f;
          if (e && u != u) {
            for (; s > i; )
              if (f = D[i++], f != f)
                return true;
          } else
            for (; s > i; i++)
              if ((e || i in D) && D[i] === u)
                return e || i || 0;
          return !e && -1;
        };
      };
      Kt.exports = { includes: Qt(true), indexOf: Qt(false) };
    }), rn = S((d2, en) => {
      var uo = re(), xr = oe(), to = xe(), no = Jt().indexOf, so = wr(), Zt = uo([].push);
      en.exports = function(e, r) {
        var u = to(e), n = 0, D = [], s;
        for (s in u)
          !xr(so, s) && xr(u, s) && Zt(D, s);
        for (; r.length > n; )
          xr(u, s = r[n++]) && (~no(D, s) || Zt(D, s));
        return D;
      };
    }), tn = S((E2, un) => {
      un.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), sn = S((nn) => {
      var io = rn(), ao = tn(), oo = ao.concat("length", "prototype");
      nn.f = Object.getOwnPropertyNames || function(r) {
        return io(r, oo);
      };
    }), on = S((an) => {
      an.f = Object.getOwnPropertySymbols;
    }), ln = S((g2, Dn) => {
      var Do = ge(), lo = re(), co = sn(), ho = on(), po = de(), fo = lo([].concat);
      Dn.exports = Do("Reflect", "ownKeys") || function(r) {
        var u = co.f(po(r)), n = ho.f;
        return n ? fo(u, n(r)) : u;
      };
    }), pn = S((F2, hn) => {
      var cn = oe(), Eo = ln(), Co = gr(), mo = Ae();
      hn.exports = function(e, r, u) {
        for (var n = Eo(r), D = mo.f, s = Co.f, i = 0; i < n.length; i++) {
          var f = n[i];
          !cn(e, f) && !(u && cn(u, f)) && D(e, f, s(r, f));
        }
      };
    }), dn = S((A2, fn) => {
      var go = se(), Fo = Y(), Ao = /#|\.prototype\./, Se = function(e, r) {
        var u = _o[vo(e)];
        return u == yo ? true : u == So ? false : Fo(r) ? go(r) : !!r;
      }, vo = Se.normalize = function(e) {
        return String(e).replace(Ao, ".").toLowerCase();
      }, _o = Se.data = {}, So = Se.NATIVE = "N", yo = Se.POLYFILL = "P";
      fn.exports = Se;
    }), ze = S((v2, En) => {
      var Pr = ee(), To = gr().f, Bo = Sr(), bo = jt(), wo = $e(), No = pn(), Oo = dn();
      En.exports = function(e, r) {
        var u = e.target, n = e.global, D = e.stat, s, i, f, c, F, a;
        if (n ? i = Pr : D ? i = Pr[u] || wo(u, {}) : i = (Pr[u] || {}).prototype, i)
          for (f in r) {
            if (F = r[f], e.dontCallGetSet ? (a = To(i, f), c = a && a.value) : c = i[f], s = Oo(n ? f : u + (D ? "." : "#") + f, e.forced), !s && c !== void 0) {
              if (typeof F == typeof c)
                continue;
              No(F, c);
            }
            (e.sham || c && c.sham) && Bo(F, "sham", true), bo(i, f, F, e);
          }
      };
    }), Cn = S(() => {
      var qo = ze(), kr = ee();
      qo({ global: true, forced: kr.globalThis !== kr }, { globalThis: kr });
    }), mn = S(() => {
      Cn();
    }), Lr = S((B2, gn) => {
      var Io = me();
      gn.exports = Array.isArray || function(r) {
        return Io(r) == "Array";
      };
    }), An = S((b2, Fn) => {
      var Ro = TypeError, xo = 9007199254740991;
      Fn.exports = function(e) {
        if (e > xo)
          throw Ro("Maximum allowed index exceeded");
        return e;
      };
    }), _n = S((w2, vn) => {
      var Po = me(), ko = re();
      vn.exports = function(e) {
        if (Po(e) === "Function")
          return ko(e);
      };
    }), $r = S((N2, yn) => {
      var Sn = _n(), Lo = Fe(), $o = Oe(), Mo = Sn(Sn.bind);
      yn.exports = function(e, r) {
        return Lo(e), r === void 0 ? e : $o ? Mo(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    }), bn = S((O2, Bn) => {
      var jo = Lr(), Uo = _e(), Go = An(), Vo = $r(), Tn = function(e, r, u, n, D, s, i, f) {
        for (var c = D, F = 0, a = i ? Vo(i, f) : false, l, h; F < n; )
          F in u && (l = a ? a(u[F], F, r) : u[F], s > 0 && jo(l) ? (h = Uo(l), c = Tn(e, r, l, h, c, s - 1) - 1) : (Go(c + 1), e[c] = l), c++), F++;
        return c;
      };
      Bn.exports = Tn;
    }), On = S((q2, Nn) => {
      var Xo = he(), Ho = Xo("toStringTag"), wn = {};
      wn[Ho] = "z", Nn.exports = String(wn) === "[object z]";
    }), Mr = S((I2, qn) => {
      var zo = On(), Wo = Y(), We = me(), Yo = he(), Qo = Yo("toStringTag"), Ko = Object, Jo = We(function() {
        return arguments;
      }()) == "Arguments", Zo = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      qn.exports = zo ? We : function(e) {
        var r, u, n;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (u = Zo(r = Ko(e), Qo)) == "string" ? u : Jo ? We(r) : (n = We(r)) == "Object" && Wo(r.callee) ? "Arguments" : n;
      };
    }), Ln = S((R2, kn) => {
      var eD = re(), rD = se(), In = Y(), uD = Mr(), tD = ge(), nD = br(), Rn = function() {
      }, sD = [], xn = tD("Reflect", "construct"), jr = /^\s*(?:class|function)\b/, iD = eD(jr.exec), aD = !jr.exec(Rn), ye = function(r) {
        if (!In(r))
          return false;
        try {
          return xn(Rn, sD, r), true;
        } catch {
          return false;
        }
      }, Pn = function(r) {
        if (!In(r))
          return false;
        switch (uD(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return aD || !!iD(jr, nD(r));
        } catch {
          return true;
        }
      };
      Pn.sham = true, kn.exports = !xn || rD(function() {
        var e;
        return ye(ye.call) || !ye(Object) || !ye(function() {
          e = true;
        }) || e;
      }) ? Pn : ye;
    }), Un = S((x2, jn) => {
      var $n = Lr(), oD = Ln(), DD = le(), lD = he(), cD = lD("species"), Mn = Array;
      jn.exports = function(e) {
        var r;
        return $n(e) && (r = e.constructor, oD(r) && (r === Mn || $n(r.prototype)) ? r = void 0 : DD(r) && (r = r[cD], r === null && (r = void 0))), r === void 0 ? Mn : r;
      };
    }), Vn = S((P2, Gn) => {
      var hD = Un();
      Gn.exports = function(e, r) {
        return new (hD(e))(r === 0 ? 0 : r);
      };
    }), Xn = S(() => {
      var pD = ze(), fD = bn(), dD = Fe(), ED = dr(), CD = _e(), mD = Vn();
      pD({ target: "Array", proto: true }, { flatMap: function(r) {
        var u = ED(this), n = CD(u), D;
        return dD(r), D = mD(u, 0), D.length = fD(D, u, u, n, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), D;
      } });
    }), Ur = S(($2, Hn) => {
      Hn.exports = {};
    }), Wn = S((M2, zn) => {
      var gD = he(), FD = Ur(), AD = gD("iterator"), vD = Array.prototype;
      zn.exports = function(e) {
        return e !== void 0 && (FD.Array === e || vD[AD] === e);
      };
    }), Gr = S((j2, Qn) => {
      var _D = Mr(), Yn = Le(), SD = Re(), yD = Ur(), TD = he(), BD = TD("iterator");
      Qn.exports = function(e) {
        if (!SD(e))
          return Yn(e, BD) || Yn(e, "@@iterator") || yD[_D(e)];
      };
    }), Jn = S((U2, Kn) => {
      var bD = De(), wD = Fe(), ND = de(), OD = ke(), qD = Gr(), ID = TypeError;
      Kn.exports = function(e, r) {
        var u = arguments.length < 2 ? qD(e) : r;
        if (wD(u))
          return ND(bD(u, e));
        throw ID(OD(e) + " is not iterable");
      };
    }), rs = S((G2, es) => {
      var RD = De(), Zn = de(), xD = Le();
      es.exports = function(e, r, u) {
        var n, D;
        Zn(e);
        try {
          if (n = xD(e, "return"), !n) {
            if (r === "throw")
              throw u;
            return u;
          }
          n = RD(n, e);
        } catch (s) {
          D = true, n = s;
        }
        if (r === "throw")
          throw u;
        if (D)
          throw n;
        return Zn(n), u;
      };
    }), is = S((V2, ss) => {
      var PD = $r(), kD = De(), LD = de(), $D = ke(), MD = Wn(), jD = _e(), us = ir(), UD = Jn(), GD = Gr(), ts = rs(), VD = TypeError, Ye = function(e, r) {
        this.stopped = e, this.result = r;
      }, ns = Ye.prototype;
      ss.exports = function(e, r, u) {
        var n = u && u.that, D = !!(u && u.AS_ENTRIES), s = !!(u && u.IS_RECORD), i = !!(u && u.IS_ITERATOR), f = !!(u && u.INTERRUPTED), c = PD(r, n), F, a, l, h, C, d, m, T = function(g) {
          return F && ts(F, "normal", g), new Ye(true, g);
        }, w = function(g) {
          return D ? (LD(g), f ? c(g[0], g[1], T) : c(g[0], g[1])) : f ? c(g, T) : c(g);
        };
        if (s)
          F = e.iterator;
        else if (i)
          F = e;
        else {
          if (a = GD(e), !a)
            throw VD($D(e) + " is not iterable");
          if (MD(a)) {
            for (l = 0, h = jD(e); h > l; l++)
              if (C = w(e[l]), C && us(ns, C))
                return C;
            return new Ye(false);
          }
          F = UD(e, a);
        }
        for (d = s ? e.next : F.next; !(m = kD(d, F)).done; ) {
          try {
            C = w(m.value);
          } catch (g) {
            ts(F, "throw", g);
          }
          if (typeof C == "object" && C && us(ns, C))
            return C;
        }
        return new Ye(false);
      };
    }), os = S((X2, as) => {
      var XD = je(), HD = Ae(), zD = Ie();
      as.exports = function(e, r, u) {
        var n = XD(r);
        n in e ? HD.f(e, n, zD(0, u)) : e[n] = u;
      };
    }), Ds = S(() => {
      var WD = ze(), YD = is(), QD = os();
      WD({ target: "Object", stat: true }, { fromEntries: function(r) {
        var u = {};
        return YD(r, function(n, D) {
          QD(u, n, D);
        }, { AS_ENTRIES: true }), u;
      } });
    }), Dc = S((W2, Os) => {
      var KD = ["cliName", "cliCategory", "cliDescription"];
      function JD(e, r) {
        if (e == null)
          return {};
        var u = ZD(e, r), n, D;
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (D = 0; D < s.length; D++)
            n = s[D], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]);
        }
        return u;
      }
      function ZD(e, r) {
        if (e == null)
          return {};
        var u = {}, n = Object.keys(e), D, s;
        for (s = 0; s < n.length; s++)
          D = n[s], !(r.indexOf(D) >= 0) && (u[D] = e[D]);
        return u;
      }
      mn(), Xn(), Ds();
      var el = Object.create, Je = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyNames, ul = Object.getPrototypeOf, tl = Object.prototype.hasOwnProperty, Ee = (e, r) => function() {
        return e && (r = (0, e[Xr(e)[0]])(e = 0)), r;
      }, I = (e, r) => function() {
        return r || (0, e[Xr(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, ps = (e, r) => {
        for (var u in r)
          Je(e, u, { get: r[u], enumerable: true });
      }, fs = (e, r, u, n) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let D of Xr(r))
            !tl.call(e, D) && D !== u && Je(e, D, { get: () => r[D], enumerable: !(n = rl(r, D)) || n.enumerable });
        return e;
      }, nl = (e, r, u) => (u = e != null ? el(ul(e)) : {}, fs(r || !e || !e.__esModule ? Je(u, "default", { value: e, enumerable: true }) : u, e)), ds = (e) => fs(Je({}, "__esModule", { value: true }), e), Te, q = Ee({ "<define:process>"() {
        Te = { env: {}, argv: [] };
      } }), Es = I({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(f) {
          return f >= e.$TAB && f <= e.$SPACE || f == e.$NBSP;
        }
        e.isWhitespace = r;
        function u(f) {
          return e.$0 <= f && f <= e.$9;
        }
        e.isDigit = u;
        function n(f) {
          return f >= e.$a && f <= e.$z || f >= e.$A && f <= e.$Z;
        }
        e.isAsciiLetter = n;
        function D(f) {
          return f >= e.$a && f <= e.$f || f >= e.$A && f <= e.$F || u(f);
        }
        e.isAsciiHexDigit = D;
        function s(f) {
          return f === e.$LF || f === e.$CR;
        }
        e.isNewLine = s;
        function i(f) {
          return e.$0 <= f && f <= e.$7;
        }
        e.isOctalDigit = i;
      } }), sl = I({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(n, D, s) {
            this.filePath = n, this.name = D, this.members = s;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = r;
        var u = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(n, D, s) {
            s = s || [];
            let i = s.length ? `.${s.join(".")}` : "", f = `"${n}".${D}${i}`, c = this.cache.get(f);
            return c || (c = new r(n, D, s), this.cache.set(f, c)), c;
          }
        };
        e.StaticSymbolCache = u;
      } }), il = I({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function u(o) {
          return o.replace(r, function() {
            for (var E = arguments.length, p = new Array(E), A = 0; A < E; A++)
              p[A] = arguments[A];
            return p[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = u;
        function n(o, E) {
          return s(o, ":", E);
        }
        e.splitAtColon = n;
        function D(o, E) {
          return s(o, ".", E);
        }
        e.splitAtPeriod = D;
        function s(o, E, p) {
          let A = o.indexOf(E);
          return A == -1 ? p : [o.slice(0, A).trim(), o.slice(A + 1).trim()];
        }
        function i(o, E, p) {
          return Array.isArray(o) ? E.visitArray(o, p) : g(o) ? E.visitStringMap(o, p) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? E.visitPrimitive(o, p) : E.visitOther(o, p);
        }
        e.visitValue = i;
        function f(o) {
          return o != null;
        }
        e.isDefined = f;
        function c(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = c;
        var F = class {
          visitArray(o, E) {
            return o.map((p) => i(p, this, E));
          }
          visitStringMap(o, E) {
            let p = {};
            return Object.keys(o).forEach((A) => {
              p[A] = i(o[A], this, E);
            }), p;
          }
          visitPrimitive(o, E) {
            return o;
          }
          visitOther(o, E) {
            return o;
          }
        };
        e.ValueTransformer = F, e.SyncAsync = { assertSync: (o) => {
          if (_(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, E) => _(o) ? o.then(E) : E(o), all: (o) => o.some(_) ? Promise.all(o) : o };
        function a(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = a;
        function l(o, E) {
          let p = Error(o);
          return p[h] = true, E && (p[C] = E), p;
        }
        e.syntaxError = l;
        var h = "ngSyntaxError", C = "ngParseErrors";
        function d(o) {
          return o[h];
        }
        e.isSyntaxError = d;
        function m(o) {
          return o[C] || [];
        }
        e.getParseErrors = m;
        function T(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = T;
        var w = Object.getPrototypeOf({});
        function g(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w;
        }
        function N(o) {
          let E = "";
          for (let p = 0; p < o.length; p++) {
            let A = o.charCodeAt(p);
            if (A >= 55296 && A <= 56319 && o.length > p + 1) {
              let P = o.charCodeAt(p + 1);
              P >= 56320 && P <= 57343 && (p++, A = (A - 55296 << 10) + P - 56320 + 65536);
            }
            A <= 127 ? E += String.fromCharCode(A) : A <= 2047 ? E += String.fromCharCode(A >> 6 & 31 | 192, A & 63 | 128) : A <= 65535 ? E += String.fromCharCode(A >> 12 | 224, A >> 6 & 63 | 128, A & 63 | 128) : A <= 2097151 && (E += String.fromCharCode(A >> 18 & 7 | 240, A >> 12 & 63 | 128, A >> 6 & 63 | 128, A & 63 | 128));
          }
          return E;
        }
        e.utf8Encode = N;
        function R(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(R).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let E = o.toString();
          if (E == null)
            return "" + E;
          let p = E.indexOf(`
`);
          return p === -1 ? E : E.substring(0, p);
        }
        e.stringify = R;
        function j(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = j;
        function _(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = _;
        var O = class {
          constructor(o) {
            this.full = o;
            let E = o.split(".");
            this.major = E[0], this.minor = E[1], this.patch = E.slice(2).join(".");
          }
        };
        e.Version = O;
        var x = typeof window < "u" && window, k = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, $ = typeof globalThis < "u" && globalThis, t = $ || x || k;
        e.global = t;
      } }), al = I({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = sl(), u = il(), n = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function D(p) {
          return p.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = D;
        var s = 0;
        function i(p) {
          if (!p || !p.reference)
            return null;
          let A = p.reference;
          if (A instanceof r.StaticSymbol)
            return A.name;
          if (A.__anonymousType)
            return A.__anonymousType;
          let P = u.stringify(A);
          return P.indexOf("(") >= 0 ? (P = `anonymous_${s++}`, A.__anonymousType = P) : P = D(P), P;
        }
        e.identifierName = i;
        function f(p) {
          let A = p.reference;
          return A instanceof r.StaticSymbol ? A.filePath : `./${u.stringify(A)}`;
        }
        e.identifierModuleUrl = f;
        function c(p, A) {
          return `View_${i({ reference: p })}_${A}`;
        }
        e.viewClassName = c;
        function F(p) {
          return `RenderType_${i({ reference: p })}`;
        }
        e.rendererTypeName = F;
        function a(p) {
          return `HostView_${i({ reference: p })}`;
        }
        e.hostViewClassName = a;
        function l(p) {
          return `${i({ reference: p })}NgFactory`;
        }
        e.componentFactoryName = l;
        var h;
        (function(p) {
          p[p.Pipe = 0] = "Pipe", p[p.Directive = 1] = "Directive", p[p.NgModule = 2] = "NgModule", p[p.Injectable = 3] = "Injectable";
        })(h = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function C(p) {
          return p.value != null ? D(p.value) : i(p.identifier);
        }
        e.tokenName = C;
        function d(p) {
          return p.identifier != null ? p.identifier.reference : p.value;
        }
        e.tokenReference = d;
        var m = class {
          constructor() {
            let { moduleUrl: p, styles: A, styleUrls: P } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = p || null, this.styles = _(A), this.styleUrls = _(P);
          }
        };
        e.CompileStylesheetMetadata = m;
        var T = class {
          constructor(p) {
            let { encapsulation: A, template: P, templateUrl: M, htmlAst: z, styles: V, styleUrls: X, externalStylesheets: H, animations: Q, ngContentSelectors: K, interpolation: J, isInline: v, preserveWhitespaces: y } = p;
            if (this.encapsulation = A, this.template = P, this.templateUrl = M, this.htmlAst = z, this.styles = _(V), this.styleUrls = _(X), this.externalStylesheets = _(H), this.animations = Q ? x(Q) : [], this.ngContentSelectors = K || [], J && J.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = J, this.isInline = v, this.preserveWhitespaces = y;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = T;
        var w = class {
          static create(p) {
            let { isHost: A, type: P, isComponent: M, selector: z, exportAs: V, changeDetection: X, inputs: H, outputs: Q, host: K, providers: J, viewProviders: v, queries: y, guards: B, viewQueries: b, entryComponents: L, template: U, componentViewType: G, rendererType: W, componentFactory: ne } = p, be = {}, we = {}, Wr = {};
            K != null && Object.keys(K).forEach((Z) => {
              let ie = K[Z], Ce = Z.match(n);
              Ce === null ? Wr[Z] = ie : Ce[1] != null ? we[Ce[1]] = ie : Ce[2] != null && (be[Ce[2]] = ie);
            });
            let Yr = {};
            H == null ? void 0 : H.forEach((Z) => {
              let ie = u.splitAtColon(Z, [Z, Z]);
              Yr[ie[0]] = ie[1];
            });
            let Qr = {};
            return Q == null ? void 0 : Q.forEach((Z) => {
              let ie = u.splitAtColon(Z, [Z, Z]);
              Qr[ie[0]] = ie[1];
            }), new w({ isHost: A, type: P, isComponent: !!M, selector: z, exportAs: V, changeDetection: X, inputs: Yr, outputs: Qr, hostListeners: be, hostProperties: we, hostAttributes: Wr, providers: J, viewProviders: v, queries: y, guards: B, viewQueries: b, entryComponents: L, template: U, componentViewType: G, rendererType: W, componentFactory: ne });
          }
          constructor(p) {
            let { isHost: A, type: P, isComponent: M, selector: z, exportAs: V, changeDetection: X, inputs: H, outputs: Q, hostListeners: K, hostProperties: J, hostAttributes: v, providers: y, viewProviders: B, queries: b, guards: L, viewQueries: U, entryComponents: G, template: W, componentViewType: ne, rendererType: be, componentFactory: we } = p;
            this.isHost = !!A, this.type = P, this.isComponent = M, this.selector = z, this.exportAs = V, this.changeDetection = X, this.inputs = H, this.outputs = Q, this.hostListeners = K, this.hostProperties = J, this.hostAttributes = v, this.providers = _(y), this.viewProviders = _(B), this.queries = _(b), this.guards = L, this.viewQueries = _(U), this.entryComponents = _(G), this.template = W, this.componentViewType = ne, this.rendererType = be, this.componentFactory = we;
          }
          toSummary() {
            return { summaryKind: h.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = w;
        var g = class {
          constructor(p) {
            let { type: A, name: P, pure: M } = p;
            this.type = A, this.name = P, this.pure = !!M;
          }
          toSummary() {
            return { summaryKind: h.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = g;
        var N = class {
        };
        e.CompileShallowModuleMetadata = N;
        var R = class {
          constructor(p) {
            let { type: A, providers: P, declaredDirectives: M, exportedDirectives: z, declaredPipes: V, exportedPipes: X, entryComponents: H, bootstrapComponents: Q, importedModules: K, exportedModules: J, schemas: v, transitiveModule: y, id: B } = p;
            this.type = A || null, this.declaredDirectives = _(M), this.exportedDirectives = _(z), this.declaredPipes = _(V), this.exportedPipes = _(X), this.providers = _(P), this.entryComponents = _(H), this.bootstrapComponents = _(Q), this.importedModules = _(K), this.exportedModules = _(J), this.schemas = _(v), this.id = B || null, this.transitiveModule = y || null;
          }
          toSummary() {
            let p = this.transitiveModule;
            return { summaryKind: h.NgModule, type: this.type, entryComponents: p.entryComponents, providers: p.providers, modules: p.modules, exportedDirectives: p.exportedDirectives, exportedPipes: p.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = R;
        var j = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(p, A) {
            this.providers.push({ provider: p, module: A });
          }
          addDirective(p) {
            this.directivesSet.has(p.reference) || (this.directivesSet.add(p.reference), this.directives.push(p));
          }
          addExportedDirective(p) {
            this.exportedDirectivesSet.has(p.reference) || (this.exportedDirectivesSet.add(p.reference), this.exportedDirectives.push(p));
          }
          addPipe(p) {
            this.pipesSet.has(p.reference) || (this.pipesSet.add(p.reference), this.pipes.push(p));
          }
          addExportedPipe(p) {
            this.exportedPipesSet.has(p.reference) || (this.exportedPipesSet.add(p.reference), this.exportedPipes.push(p));
          }
          addModule(p) {
            this.modulesSet.has(p.reference) || (this.modulesSet.add(p.reference), this.modules.push(p));
          }
          addEntryComponent(p) {
            this.entryComponentsSet.has(p.componentType) || (this.entryComponentsSet.add(p.componentType), this.entryComponents.push(p));
          }
        };
        e.TransitiveCompileNgModuleMetadata = j;
        function _(p) {
          return p || [];
        }
        var O = class {
          constructor(p, A) {
            let { useClass: P, useValue: M, useExisting: z, useFactory: V, deps: X, multi: H } = A;
            this.token = p, this.useClass = P || null, this.useValue = M, this.useExisting = z, this.useFactory = V || null, this.dependencies = X || null, this.multi = !!H;
          }
        };
        e.ProviderMeta = O;
        function x(p) {
          return p.reduce((A, P) => {
            let M = Array.isArray(P) ? x(P) : P;
            return A.concat(M);
          }, []);
        }
        e.flatten = x;
        function k(p) {
          return p.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function $(p, A, P) {
          let M;
          return P.isInline ? A.type.reference instanceof r.StaticSymbol ? M = `${A.type.reference.filePath}.${A.type.reference.name}.html` : M = `${i(p)}/${i(A.type)}.html` : M = P.templateUrl, A.type.reference instanceof r.StaticSymbol ? M : k(M);
        }
        e.templateSourceUrl = $;
        function t(p, A) {
          let P = p.moduleUrl.split(/\/\\/g), M = P[P.length - 1];
          return k(`css/${A}${M}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = t;
        function o(p) {
          return k(`${i(p.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function E(p, A) {
          return k(`${i(p)}/${i(A.type)}.ngfactory.js`);
        }
        e.templateJitUrl = E;
      } }), Be = I({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Es(), u = al(), n = class {
          constructor(a, l, h, C) {
            this.file = a, this.offset = l, this.line = h, this.col = C;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(a) {
            let l = this.file.content, h = l.length, C = this.offset, d = this.line, m = this.col;
            for (; C > 0 && a < 0; )
              if (C--, a++, l.charCodeAt(C) == r.$LF) {
                d--;
                let w = l.substr(0, C - 1).lastIndexOf(String.fromCharCode(r.$LF));
                m = w > 0 ? C - w : C;
              } else
                m--;
            for (; C < h && a > 0; ) {
              let T = l.charCodeAt(C);
              C++, a--, T == r.$LF ? (d++, m = 0) : m++;
            }
            return new n(this.file, C, d, m);
          }
          getContext(a, l) {
            let h = this.file.content, C = this.offset;
            if (C != null) {
              C > h.length - 1 && (C = h.length - 1);
              let d = C, m = 0, T = 0;
              for (; m < a && C > 0 && (C--, m++, !(h[C] == `
` && ++T == l)); )
                ;
              for (m = 0, T = 0; m < a && d < h.length - 1 && (d++, m++, !(h[d] == `
` && ++T == l)); )
                ;
              return { before: h.substring(C, this.offset), after: h.substring(this.offset, d + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = n;
        var D = class {
          constructor(a, l) {
            this.content = a, this.url = l;
          }
        };
        e.ParseSourceFile = D;
        var s = class {
          constructor(a, l) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = a, this.end = l, this.details = h;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = s, e.EMPTY_PARSE_LOCATION = new n(new D("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new s(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var i;
        (function(a) {
          a[a.WARNING = 0] = "WARNING", a[a.ERROR = 1] = "ERROR";
        })(i = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var f = class {
          constructor(a, l) {
            let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i.ERROR;
            this.span = a, this.msg = l, this.level = h;
          }
          contextualMessage() {
            let a = this.span.start.getContext(100, 3);
            return a ? `${this.msg} ("${a.before}[${i[this.level]} ->]${a.after}")` : this.msg;
          }
          toString() {
            let a = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${a}`;
          }
        };
        e.ParseError = f;
        function c(a, l) {
          let h = u.identifierModuleUrl(l), C = h != null ? `in ${a} ${u.identifierName(l)} in ${h}` : `in ${a} ${u.identifierName(l)}`, d = new D("", C);
          return new s(new n(d, -1, -1, -1), new n(d, -1, -1, -1));
        }
        e.typeSourceSpan = c;
        function F(a, l, h) {
          let C = `in ${a} ${l} in ${h}`, d = new D("", C);
          return new s(new n(d, -1, -1, -1), new n(d, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = F;
      } }), ol = I({ "src/utils/front-matter/parse.js"(e, r) {
        q();
        var u = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function n(D) {
          let s = D.match(u);
          if (!s)
            return { content: D };
          let { startDelimiter: i, language: f, value: c = "", endDelimiter: F } = s.groups, a = f.trim() || "yaml";
          if (i === "+++" && (a = "toml"), a !== "yaml" && i !== F)
            return { content: D };
          let [l] = s;
          return { frontMatter: { type: "front-matter", lang: a, value: c, startDelimiter: i, endDelimiter: F, raw: l.replace(/\n$/, "") }, content: l.replace(/[^\n]/g, " ") + D.slice(l.length) };
        }
        r.exports = n;
      } }), Cs = I({ "src/utils/get-last.js"(e, r) {
        q();
        var u = (n) => n[n.length - 1];
        r.exports = u;
      } }), Dl = I({ "src/common/parser-create-error.js"(e, r) {
        q();
        function u(n, D) {
          let s = new SyntaxError(n + " (" + D.start.line + ":" + D.start.column + ")");
          return s.loc = D, s;
        }
        r.exports = u;
      } }), ms = {};
      ps(ms, { default: () => ll });
      function ll(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var cl = Ee({ "node_modules/escape-string-regexp/index.js"() {
        q();
      } }), gs = I({ "node_modules/semver/internal/debug.js"(e, r) {
        q();
        var u = typeof Te == "object" && Te.env && Te.env.NODE_DEBUG && /\bsemver\b/i.test(Te.env.NODE_DEBUG) ? function() {
          for (var n = arguments.length, D = new Array(n), s = 0; s < n; s++)
            D[s] = arguments[s];
          return console.error("SEMVER", ...D);
        } : () => {
        };
        r.exports = u;
      } }), Fs = I({ "node_modules/semver/internal/constants.js"(e, r) {
        q();
        var u = "2.0.0", n = 256, D = Number.MAX_SAFE_INTEGER || 9007199254740991, s = 16;
        r.exports = { SEMVER_SPEC_VERSION: u, MAX_LENGTH: n, MAX_SAFE_INTEGER: D, MAX_SAFE_COMPONENT_LENGTH: s };
      } }), hl = I({ "node_modules/semver/internal/re.js"(e, r) {
        q();
        var { MAX_SAFE_COMPONENT_LENGTH: u } = Fs(), n = gs();
        e = r.exports = {};
        var D = e.re = [], s = e.src = [], i = e.t = {}, f = 0, c = (F, a, l) => {
          let h = f++;
          n(F, h, a), i[F] = h, s[h] = a, D[h] = new RegExp(a, l ? "g" : void 0);
        };
        c("NUMERICIDENTIFIER", "0|[1-9]\\d*"), c("NUMERICIDENTIFIERLOOSE", "[0-9]+"), c("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), c("MAINVERSION", `(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})\\.(${s[i.NUMERICIDENTIFIER]})`), c("MAINVERSIONLOOSE", `(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})\\.(${s[i.NUMERICIDENTIFIERLOOSE]})`), c("PRERELEASEIDENTIFIER", `(?:${s[i.NUMERICIDENTIFIER]}|${s[i.NONNUMERICIDENTIFIER]})`), c("PRERELEASEIDENTIFIERLOOSE", `(?:${s[i.NUMERICIDENTIFIERLOOSE]}|${s[i.NONNUMERICIDENTIFIER]})`), c("PRERELEASE", `(?:-(${s[i.PRERELEASEIDENTIFIER]}(?:\\.${s[i.PRERELEASEIDENTIFIER]})*))`), c("PRERELEASELOOSE", `(?:-?(${s[i.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[i.PRERELEASEIDENTIFIERLOOSE]})*))`), c("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), c("BUILD", `(?:\\+(${s[i.BUILDIDENTIFIER]}(?:\\.${s[i.BUILDIDENTIFIER]})*))`), c("FULLPLAIN", `v?${s[i.MAINVERSION]}${s[i.PRERELEASE]}?${s[i.BUILD]}?`), c("FULL", `^${s[i.FULLPLAIN]}$`), c("LOOSEPLAIN", `[v=\\s]*${s[i.MAINVERSIONLOOSE]}${s[i.PRERELEASELOOSE]}?${s[i.BUILD]}?`), c("LOOSE", `^${s[i.LOOSEPLAIN]}$`), c("GTLT", "((?:<|>)?=?)"), c("XRANGEIDENTIFIERLOOSE", `${s[i.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), c("XRANGEIDENTIFIER", `${s[i.NUMERICIDENTIFIER]}|x|X|\\*`), c("XRANGEPLAIN", `[v=\\s]*(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:\\.(${s[i.XRANGEIDENTIFIER]})(?:${s[i.PRERELEASE]})?${s[i.BUILD]}?)?)?`), c("XRANGEPLAINLOOSE", `[v=\\s]*(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[i.XRANGEIDENTIFIERLOOSE]})(?:${s[i.PRERELEASELOOSE]})?${s[i.BUILD]}?)?)?`), c("XRANGE", `^${s[i.GTLT]}\\s*${s[i.XRANGEPLAIN]}$`), c("XRANGELOOSE", `^${s[i.GTLT]}\\s*${s[i.XRANGEPLAINLOOSE]}$`), c("COERCE", `(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?(?:$|[^\\d])`), c("COERCERTL", s[i.COERCE], true), c("LONETILDE", "(?:~>?)"), c("TILDETRIM", `(\\s*)${s[i.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", c("TILDE", `^${s[i.LONETILDE]}${s[i.XRANGEPLAIN]}$`), c("TILDELOOSE", `^${s[i.LONETILDE]}${s[i.XRANGEPLAINLOOSE]}$`), c("LONECARET", "(?:\\^)"), c("CARETTRIM", `(\\s*)${s[i.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", c("CARET", `^${s[i.LONECARET]}${s[i.XRANGEPLAIN]}$`), c("CARETLOOSE", `^${s[i.LONECARET]}${s[i.XRANGEPLAINLOOSE]}$`), c("COMPARATORLOOSE", `^${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]})$|^$`), c("COMPARATOR", `^${s[i.GTLT]}\\s*(${s[i.FULLPLAIN]})$|^$`), c("COMPARATORTRIM", `(\\s*)${s[i.GTLT]}\\s*(${s[i.LOOSEPLAIN]}|${s[i.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", c("HYPHENRANGE", `^\\s*(${s[i.XRANGEPLAIN]})\\s+-\\s+(${s[i.XRANGEPLAIN]})\\s*$`), c("HYPHENRANGELOOSE", `^\\s*(${s[i.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[i.XRANGEPLAINLOOSE]})\\s*$`), c("STAR", "(<|>)?=?\\s*\\*"), c("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), c("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), pl = I({ "node_modules/semver/internal/parse-options.js"(e, r) {
        q();
        var u = ["includePrerelease", "loose", "rtl"], n = (D) => D ? typeof D != "object" ? { loose: true } : u.filter((s) => D[s]).reduce((s, i) => (s[i] = true, s), {}) : {};
        r.exports = n;
      } }), fl = I({ "node_modules/semver/internal/identifiers.js"(e, r) {
        q();
        var u = /^[0-9]+$/, n = (s, i) => {
          let f = u.test(s), c = u.test(i);
          return f && c && (s = +s, i = +i), s === i ? 0 : f && !c ? -1 : c && !f ? 1 : s < i ? -1 : 1;
        }, D = (s, i) => n(i, s);
        r.exports = { compareIdentifiers: n, rcompareIdentifiers: D };
      } }), dl = I({ "node_modules/semver/classes/semver.js"(e, r) {
        q();
        var u = gs(), { MAX_LENGTH: n, MAX_SAFE_INTEGER: D } = Fs(), { re: s, t: i } = hl(), f = pl(), { compareIdentifiers: c } = fl(), F = class {
          constructor(a, l) {
            if (l = f(l), a instanceof F) {
              if (a.loose === !!l.loose && a.includePrerelease === !!l.includePrerelease)
                return a;
              a = a.version;
            } else if (typeof a != "string")
              throw new TypeError(`Invalid Version: ${a}`);
            if (a.length > n)
              throw new TypeError(`version is longer than ${n} characters`);
            u("SemVer", a, l), this.options = l, this.loose = !!l.loose, this.includePrerelease = !!l.includePrerelease;
            let h = a.trim().match(l.loose ? s[i.LOOSE] : s[i.FULL]);
            if (!h)
              throw new TypeError(`Invalid Version: ${a}`);
            if (this.raw = a, this.major = +h[1], this.minor = +h[2], this.patch = +h[3], this.major > D || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > D || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > D || this.patch < 0)
              throw new TypeError("Invalid patch version");
            h[4] ? this.prerelease = h[4].split(".").map((C) => {
              if (/^[0-9]+$/.test(C)) {
                let d = +C;
                if (d >= 0 && d < D)
                  return d;
              }
              return C;
            }) : this.prerelease = [], this.build = h[5] ? h[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(a) {
            if (u("SemVer.compare", this.version, this.options, a), !(a instanceof F)) {
              if (typeof a == "string" && a === this.version)
                return 0;
              a = new F(a, this.options);
            }
            return a.version === this.version ? 0 : this.compareMain(a) || this.comparePre(a);
          }
          compareMain(a) {
            return a instanceof F || (a = new F(a, this.options)), c(this.major, a.major) || c(this.minor, a.minor) || c(this.patch, a.patch);
          }
          comparePre(a) {
            if (a instanceof F || (a = new F(a, this.options)), this.prerelease.length && !a.prerelease.length)
              return -1;
            if (!this.prerelease.length && a.prerelease.length)
              return 1;
            if (!this.prerelease.length && !a.prerelease.length)
              return 0;
            let l = 0;
            do {
              let h = this.prerelease[l], C = a.prerelease[l];
              if (u("prerelease compare", l, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return c(h, C);
            } while (++l);
          }
          compareBuild(a) {
            a instanceof F || (a = new F(a, this.options));
            let l = 0;
            do {
              let h = this.build[l], C = a.build[l];
              if (u("prerelease compare", l, h, C), h === void 0 && C === void 0)
                return 0;
              if (C === void 0)
                return 1;
              if (h === void 0)
                return -1;
              if (h !== C)
                return c(h, C);
            } while (++l);
          }
          inc(a, l) {
            switch (a) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", l);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", l);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", l), this.inc("pre", l);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", l), this.inc("pre", l);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let h = this.prerelease.length;
                  for (; --h >= 0; )
                    typeof this.prerelease[h] == "number" && (this.prerelease[h]++, h = -2);
                  h === -1 && this.prerelease.push(0);
                }
                l && (c(this.prerelease[0], l) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [l, 0]) : this.prerelease = [l, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${a}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = F;
      } }), Hr = I({ "node_modules/semver/functions/compare.js"(e, r) {
        q();
        var u = dl(), n = (D, s, i) => new u(D, i).compare(new u(s, i));
        r.exports = n;
      } }), El = I({ "node_modules/semver/functions/lt.js"(e, r) {
        q();
        var u = Hr(), n = (D, s, i) => u(D, s, i) < 0;
        r.exports = n;
      } }), Cl = I({ "node_modules/semver/functions/gte.js"(e, r) {
        q();
        var u = Hr(), n = (D, s, i) => u(D, s, i) >= 0;
        r.exports = n;
      } }), ml = I({ "src/utils/arrayify.js"(e, r) {
        q(), r.exports = (u, n) => Object.entries(u).map((D) => {
          let [s, i] = D;
          return Object.assign({ [n]: s }, i);
        });
      } }), gl = I({ "package.json"(e, r) {
        r.exports = { version: "2.8.7" };
      } }), Fl = I({ "node_modules/outdent/lib/index.js"(e, r) {
        q(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function u() {
          for (var g = [], N = 0; N < arguments.length; N++)
            g[N] = arguments[N];
        }
        function n() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : D();
        }
        function D() {
          return { add: u, delete: u, get: u, set: u, has: function(g) {
            return false;
          } };
        }
        var s = Object.prototype.hasOwnProperty, i = function(g, N) {
          return s.call(g, N);
        };
        function f(g, N) {
          for (var R in N)
            i(N, R) && (g[R] = N[R]);
          return g;
        }
        var c = /^[ \t]*(?:\r\n|\r|\n)/, F = /(?:\r\n|\r|\n)[ \t]*$/, a = /^(?:[\r\n]|$)/, l = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, h = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function C(g, N, R) {
          var j = 0, _ = g[0].match(l);
          _ && (j = _[1].length);
          var O = "(\\r\\n|\\r|\\n).{0," + j + "}", x = new RegExp(O, "g");
          N && (g = g.slice(1));
          var k = R.newline, $ = R.trimLeadingNewline, t = R.trimTrailingNewline, o = typeof k == "string", E = g.length, p = g.map(function(A, P) {
            return A = A.replace(x, "$1"), P === 0 && $ && (A = A.replace(c, "")), P === E - 1 && t && (A = A.replace(F, "")), o && (A = A.replace(/\r\n|\n|\r/g, function(M) {
              return k;
            })), A;
          });
          return p;
        }
        function d(g, N) {
          for (var R = "", j = 0, _ = g.length; j < _; j++)
            R += g[j], j < _ - 1 && (R += N[j]);
          return R;
        }
        function m(g) {
          return i(g, "raw") && i(g, "length");
        }
        function T(g) {
          var N = n(), R = n();
          function j(O) {
            for (var x = [], k = 1; k < arguments.length; k++)
              x[k - 1] = arguments[k];
            if (m(O)) {
              var $ = O, t = (x[0] === j || x[0] === w) && h.test($[0]) && a.test($[1]), o = t ? R : N, E = o.get($);
              if (E || (E = C($, t, g), o.set($, E)), x.length === 0)
                return E[0];
              var p = d(E, t ? x.slice(1) : x);
              return p;
            } else
              return T(f(f({}, g), O || {}));
          }
          var _ = f(j, { string: function(O) {
            return C([O], false, g)[0];
          } });
          return _;
        }
        var w = T({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = w, e.default = w, typeof r < "u")
          try {
            r.exports = w, Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.outdent = w;
          } catch {
          }
      } }), Al = I({ "src/main/core-options.js"(e, r) {
        q();
        var { outdent: u } = Fl(), n = "Config", D = "Editor", s = "Format", i = "Other", f = "Output", c = "Global", F = "Special", a = { cursorOffset: { since: "1.4.0", category: F, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: D }, endOfLine: { since: "1.15.0", category: c, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: u`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: F, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: i, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: F, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: i }, parser: { since: "0.0.10", category: c, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (l) => typeof l == "string" || typeof l == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: c, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin", cliCategory: n }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: c, description: u`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (l) => typeof l == "string" || typeof l == "object", cliName: "plugin-search-dir", cliCategory: n }, printWidth: { since: "0.0.0", category: c, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: F, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, rangeStart: { since: "1.4.0", category: F, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: u`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: D }, requirePragma: { since: "1.7.0", category: F, type: "boolean", default: false, description: u`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: i }, tabWidth: { type: "int", category: c, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: c, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: c, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: n, CATEGORY_EDITOR: D, CATEGORY_FORMAT: s, CATEGORY_OTHER: i, CATEGORY_OUTPUT: f, CATEGORY_GLOBAL: c, CATEGORY_SPECIAL: F, options: a };
      } }), vl = I({ "src/main/support.js"(e, r) {
        q();
        var u = { compare: Hr(), lt: El(), gte: Cl() }, n = ml(), D = gl().version, s = Al().options;
        function i() {
          let { plugins: c = [], showUnreleased: F = false, showDeprecated: a = false, showInternal: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = D.split("-", 1)[0], C = c.flatMap((g) => g.languages || []).filter(m), d = n(Object.assign({}, ...c.map((g) => {
            let { options: N } = g;
            return N;
          }), s), "name").filter((g) => m(g) && T(g)).sort((g, N) => g.name === N.name ? 0 : g.name < N.name ? -1 : 1).map(w).map((g) => {
            g = Object.assign({}, g), Array.isArray(g.default) && (g.default = g.default.length === 1 ? g.default[0].value : g.default.filter(m).sort((R, j) => u.compare(j.since, R.since))[0].value), Array.isArray(g.choices) && (g.choices = g.choices.filter((R) => m(R) && T(R)), g.name === "parser" && f(g, C, c));
            let N = Object.fromEntries(c.filter((R) => R.defaultOptions && R.defaultOptions[g.name] !== void 0).map((R) => [R.name, R.defaultOptions[g.name]]));
            return Object.assign(Object.assign({}, g), {}, { pluginDefaults: N });
          });
          return { languages: C, options: d };
          function m(g) {
            return F || !("since" in g) || g.since && u.gte(h, g.since);
          }
          function T(g) {
            return a || !("deprecated" in g) || g.deprecated && u.lt(h, g.deprecated);
          }
          function w(g) {
            if (l)
              return g;
            return JD(g, KD);
          }
        }
        function f(c, F, a) {
          let l = new Set(c.choices.map((h) => h.value));
          for (let h of F)
            if (h.parsers) {
              for (let C of h.parsers)
                if (!l.has(C)) {
                  l.add(C);
                  let d = a.find((T) => T.parsers && T.parsers[C]), m = h.name;
                  d && d.name && (m += ` (plugin: ${d.name})`), c.choices.push({ value: C, description: m });
                }
            }
        }
        r.exports = { getSupportInfo: i };
      } }), _l = I({ "src/utils/is-non-empty-array.js"(e, r) {
        q();
        function u(n) {
          return Array.isArray(n) && n.length > 0;
        }
        r.exports = u;
      } });
      function Sl() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      }
      var yl = Ee({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        q();
      } });
      function Tl(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(Sl(), "");
      }
      var Bl = Ee({ "node_modules/strip-ansi/index.js"() {
        q(), yl();
      } });
      function bl(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var wl = Ee({ "node_modules/is-fullwidth-code-point/index.js"() {
        q();
      } }), Nl = I({ "node_modules/emoji-regex/index.js"(e, r) {
        q(), r.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), As = {};
      ps(As, { default: () => Ol });
      function Ol(e) {
        if (typeof e != "string" || e.length === 0 || (e = Tl(e), e.length === 0))
          return 0;
        e = e.replace((0, vs.default)(), "  ");
        let r = 0;
        for (let u = 0; u < e.length; u++) {
          let n = e.codePointAt(u);
          n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (n > 65535 && u++, r += bl(n) ? 2 : 1);
        }
        return r;
      }
      var vs, ql = Ee({ "node_modules/string-width/index.js"() {
        q(), Bl(), wl(), vs = nl(Nl());
      } }), Il = I({ "src/utils/get-string-width.js"(e, r) {
        q();
        var u = (ql(), ds(As)).default, n = /[^\x20-\x7F]/;
        function D(s) {
          return s ? n.test(s) ? u(s) : s.length : 0;
        }
        r.exports = D;
      } }), zr = I({ "src/utils/text/skip.js"(e, r) {
        q();
        function u(f) {
          return (c, F, a) => {
            let l = a && a.backwards;
            if (F === false)
              return false;
            let { length: h } = c, C = F;
            for (; C >= 0 && C < h; ) {
              let d = c.charAt(C);
              if (f instanceof RegExp) {
                if (!f.test(d))
                  return C;
              } else if (!f.includes(d))
                return C;
              l ? C-- : C++;
            }
            return C === -1 || C === h ? C : false;
          };
        }
        var n = u(/\s/), D = u(" 	"), s = u(",; 	"), i = u(/[^\n\r]/);
        r.exports = { skipWhitespace: n, skipSpaces: D, skipToLineEnd: s, skipEverythingButNewLine: i };
      } }), _s = I({ "src/utils/text/skip-inline-comment.js"(e, r) {
        q();
        function u(n, D) {
          if (D === false)
            return false;
          if (n.charAt(D) === "/" && n.charAt(D + 1) === "*") {
            for (let s = D + 2; s < n.length; ++s)
              if (n.charAt(s) === "*" && n.charAt(s + 1) === "/")
                return s + 2;
          }
          return D;
        }
        r.exports = u;
      } }), Ss = I({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        q();
        var { skipEverythingButNewLine: u } = zr();
        function n(D, s) {
          return s === false ? false : D.charAt(s) === "/" && D.charAt(s + 1) === "/" ? u(D, s) : s;
        }
        r.exports = n;
      } }), ys = I({ "src/utils/text/skip-newline.js"(e, r) {
        q();
        function u(n, D, s) {
          let i = s && s.backwards;
          if (D === false)
            return false;
          let f = n.charAt(D);
          if (i) {
            if (n.charAt(D - 1) === "\r" && f === `
`)
              return D - 2;
            if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
              return D - 1;
          } else {
            if (f === "\r" && n.charAt(D + 1) === `
`)
              return D + 2;
            if (f === `
` || f === "\r" || f === "\u2028" || f === "\u2029")
              return D + 1;
          }
          return D;
        }
        r.exports = u;
      } }), Rl = I({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        q();
        var u = _s(), n = ys(), D = Ss(), { skipSpaces: s } = zr();
        function i(f, c) {
          let F = null, a = c;
          for (; a !== F; )
            F = a, a = s(f, a), a = u(f, a), a = D(f, a), a = n(f, a);
          return a;
        }
        r.exports = i;
      } }), xl = I({ "src/common/util.js"(e, r) {
        q();
        var { default: u } = (cl(), ds(ms)), n = Cs(), { getSupportInfo: D } = vl(), s = _l(), i = Il(), { skipWhitespace: f, skipSpaces: c, skipToLineEnd: F, skipEverythingButNewLine: a } = zr(), l = _s(), h = Ss(), C = ys(), d = Rl(), m = (v) => v[v.length - 2];
        function T(v) {
          return (y, B, b) => {
            let L = b && b.backwards;
            if (B === false)
              return false;
            let { length: U } = y, G = B;
            for (; G >= 0 && G < U; ) {
              let W = y.charAt(G);
              if (v instanceof RegExp) {
                if (!v.test(W))
                  return G;
              } else if (!v.includes(W))
                return G;
              L ? G-- : G++;
            }
            return G === -1 || G === U ? G : false;
          };
        }
        function w(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = c(v, B.backwards ? y - 1 : y, B), L = C(v, b, B);
          return b !== L;
        }
        function g(v, y, B) {
          for (let b = y; b < B; ++b)
            if (v.charAt(b) === `
`)
              return true;
          return false;
        }
        function N(v, y, B) {
          let b = B(y) - 1;
          b = c(v, b, { backwards: true }), b = C(v, b, { backwards: true }), b = c(v, b, { backwards: true });
          let L = C(v, b, { backwards: true });
          return b !== L;
        }
        function R(v, y) {
          let B = null, b = y;
          for (; b !== B; )
            B = b, b = F(v, b), b = l(v, b), b = c(v, b);
          return b = h(v, b), b = C(v, b), b !== false && w(v, b);
        }
        function j(v, y, B) {
          return R(v, B(y));
        }
        function _(v, y, B) {
          return d(v, B(y));
        }
        function O(v, y, B) {
          return v.charAt(_(v, y, B));
        }
        function x(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return c(v, B.backwards ? y - 1 : y, B) !== y;
        }
        function k(v, y) {
          let B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, b = 0;
          for (let L = B; L < v.length; ++L)
            v[L] === "	" ? b = b + y - b % y : b++;
          return b;
        }
        function $(v, y) {
          let B = v.lastIndexOf(`
`);
          return B === -1 ? 0 : k(v.slice(B + 1).match(/^[\t ]*/)[0], y);
        }
        function t(v, y) {
          let B = { quote: '"', regex: /"/g, escaped: "&quot;" }, b = { quote: "'", regex: /'/g, escaped: "&apos;" }, L = y === "'" ? b : B, U = L === b ? B : b, G = L;
          if (v.includes(L.quote) || v.includes(U.quote)) {
            let W = (v.match(L.regex) || []).length, ne = (v.match(U.regex) || []).length;
            G = W > ne ? U : L;
          }
          return G;
        }
        function o(v, y) {
          let B = v.slice(1, -1), b = y.parser === "json" || y.parser === "json5" && y.quoteProps === "preserve" && !y.singleQuote ? '"' : y.__isInHtmlAttribute ? "'" : t(B, y.singleQuote ? "'" : '"').quote;
          return E(B, b, !(y.parser === "css" || y.parser === "less" || y.parser === "scss" || y.__embeddedInHtml));
        }
        function E(v, y, B) {
          let b = y === '"' ? "'" : '"', L = /\\(.)|(["'])/gs, U = v.replace(L, (G, W, ne) => W === b ? W : ne === y ? "\\" + ne : ne || (B && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(W) ? W : "\\" + W));
          return y + U + y;
        }
        function p(v) {
          return v.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function A(v, y) {
          let B = v.match(new RegExp(`(${u(y)})+`, "g"));
          return B === null ? 0 : B.reduce((b, L) => Math.max(b, L.length / y.length), 0);
        }
        function P(v, y) {
          let B = v.match(new RegExp(`(${u(y)})+`, "g"));
          if (B === null)
            return 0;
          let b = /* @__PURE__ */ new Map(), L = 0;
          for (let U of B) {
            let G = U.length / y.length;
            b.set(G, true), G > L && (L = G);
          }
          for (let U = 1; U < L; U++)
            if (!b.get(U))
              return U;
          return L + 1;
        }
        function M(v, y) {
          (v.comments || (v.comments = [])).push(y), y.printed = false, y.nodeDescription = J(v);
        }
        function z(v, y) {
          y.leading = true, y.trailing = false, M(v, y);
        }
        function V(v, y, B) {
          y.leading = false, y.trailing = false, B && (y.marker = B), M(v, y);
        }
        function X(v, y) {
          y.leading = false, y.trailing = true, M(v, y);
        }
        function H(v, y) {
          let { languages: B } = D({ plugins: y.plugins }), b = B.find((L) => {
            let { name: U } = L;
            return U.toLowerCase() === v;
          }) || B.find((L) => {
            let { aliases: U } = L;
            return Array.isArray(U) && U.includes(v);
          }) || B.find((L) => {
            let { extensions: U } = L;
            return Array.isArray(U) && U.includes(`.${v}`);
          });
          return b && b.parsers[0];
        }
        function Q(v) {
          return v && v.type === "front-matter";
        }
        function K(v) {
          let y = /* @__PURE__ */ new WeakMap();
          return function(B) {
            return y.has(B) || y.set(B, Symbol(v)), y.get(B);
          };
        }
        function J(v) {
          let y = v.type || v.kind || "(unknown type)", B = String(v.name || v.id && (typeof v.id == "object" ? v.id.name : v.id) || v.key && (typeof v.key == "object" ? v.key.name : v.key) || v.value && (typeof v.value == "object" ? "" : String(v.value)) || v.operator || "");
          return B.length > 20 && (B = B.slice(0, 19) + "…"), y + (B ? " " + B : "");
        }
        r.exports = { inferParserByLanguage: H, getStringWidth: i, getMaxContinuousCount: A, getMinNotPresentContinuousCount: P, getPenultimate: m, getLast: n, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: d, getNextNonSpaceNonCommentCharacterIndex: _, getNextNonSpaceNonCommentCharacter: O, skip: T, skipWhitespace: f, skipSpaces: c, skipToLineEnd: F, skipEverythingButNewLine: a, skipInlineComment: l, skipTrailingComment: h, skipNewline: C, isNextLineEmptyAfterIndex: R, isNextLineEmpty: j, isPreviousLineEmpty: N, hasNewline: w, hasNewlineInRange: g, hasSpaces: x, getAlignmentSize: k, getIndentSize: $, getPreferredQuote: t, printString: o, printNumber: p, makeString: E, addLeadingComment: z, addDanglingComment: V, addTrailingComment: X, isFrontMatterNode: Q, isNonEmptyArray: s, createGroupIdMapper: K };
      } }), Pl = I({ "vendors/html-tag-names.json"(e, r) {
        r.exports = { htmlTagNames: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"] };
      } }), Ts = I({ "src/language-html/utils/array-to-map.js"(e, r) {
        q();
        function u(n) {
          let D = /* @__PURE__ */ Object.create(null);
          for (let s of n)
            D[s] = true;
          return D;
        }
        r.exports = u;
      } }), kl = I({ "src/language-html/utils/html-tag-names.js"(e, r) {
        q();
        var { htmlTagNames: u } = Pl(), n = Ts(), D = n(u);
        r.exports = D;
      } }), Ll = I({ "vendors/html-element-attributes.json"(e, r) {
        r.exports = { htmlElementAttributes: { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["for", "form"], legend: ["align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "media", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"], select: ["autocomplete", "disabled", "form", "multiple", "name", "required", "size"], slot: ["name"], source: ["height", "media", "sizes", "src", "srcset", "type", "width"], style: ["media", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] } };
      } }), $l = I({ "src/language-html/utils/map-object.js"(e, r) {
        q();
        function u(n, D) {
          let s = /* @__PURE__ */ Object.create(null);
          for (let [i, f] of Object.entries(n))
            s[i] = D(f, i);
          return s;
        }
        r.exports = u;
      } }), Ml = I({ "src/language-html/utils/html-elements-attributes.js"(e, r) {
        q();
        var { htmlElementAttributes: u } = Ll(), n = $l(), D = Ts(), s = n(u, D);
        r.exports = s;
      } }), jl = I({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        q();
        function u(n) {
          return n.type === "element" && !n.hasExplicitNamespace && !["html", "svg"].includes(n.namespace);
        }
        r.exports = u;
      } }), Ul = I({ "src/language-html/pragma.js"(e, r) {
        q();
        function u(D) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(D);
        }
        function n(D) {
          return `<!-- @format -->

` + D.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: u, insertPragma: n };
      } }), Gl = I({ "src/language-html/ast.js"(e, r) {
        q();
        var u = { attrs: true, children: true }, n = /* @__PURE__ */ new Set(["parent"]), D = class {
          constructor() {
            let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            for (let f of /* @__PURE__ */ new Set([...n, ...Object.keys(i)]))
              this.setProperty(f, i[f]);
          }
          setProperty(i, f) {
            if (this[i] !== f) {
              if (i in u && (f = f.map((c) => this.createChild(c))), !n.has(i)) {
                this[i] = f;
                return;
              }
              Object.defineProperty(this, i, { value: f, enumerable: false, configurable: true });
            }
          }
          map(i) {
            let f;
            for (let c in u) {
              let F = this[c];
              if (F) {
                let a = s(F, (l) => l.map(i));
                f !== F && (f || (f = new D({ parent: this.parent })), f.setProperty(c, a));
              }
            }
            if (f)
              for (let c in this)
                c in u || (f[c] = this[c]);
            return i(f || this);
          }
          walk(i) {
            for (let f in u) {
              let c = this[f];
              if (c)
                for (let F = 0; F < c.length; F++)
                  c[F].walk(i);
            }
            i(this);
          }
          createChild(i) {
            let f = i instanceof D ? i.clone() : new D(i);
            return f.setProperty("parent", this), f;
          }
          insertChildBefore(i, f) {
            this.children.splice(this.children.indexOf(i), 0, this.createChild(f));
          }
          removeChild(i) {
            this.children.splice(this.children.indexOf(i), 1);
          }
          replaceChild(i, f) {
            this.children[this.children.indexOf(i)] = this.createChild(f);
          }
          clone() {
            return new D(this);
          }
          get firstChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[0];
          }
          get lastChild() {
            var i;
            return (i = this.children) === null || i === void 0 ? void 0 : i[this.children.length - 1];
          }
          get prev() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var i;
            return (i = this.parent) === null || i === void 0 ? void 0 : i.children[this.parent.children.indexOf(this) + 1];
          }
          get rawName() {
            return this.hasExplicitNamespace ? this.fullName : this.name;
          }
          get fullName() {
            return this.namespace ? this.namespace + ":" + this.name : this.name;
          }
          get attrMap() {
            return Object.fromEntries(this.attrs.map((i) => [i.fullName, i.value]));
          }
        };
        function s(i, f) {
          let c = i.map(f);
          return c.some((F, a) => F !== i[a]) ? c : i;
        }
        r.exports = { Node: D };
      } }), Vl = I({ "src/language-html/conditional-comment.js"(e, r) {
        q();
        var { ParseSourceSpan: u } = Be(), n = [{ regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s, parse: s }, { regex: /^\[if([^\]]*)]><!$/, parse: i }, { regex: /^<!\s*\[endif]$/, parse: f }];
        function D(c, F) {
          if (c.value)
            for (let { regex: a, parse: l } of n) {
              let h = c.value.match(a);
              if (h)
                return l(c, F, h);
            }
          return null;
        }
        function s(c, F, a) {
          let [, l, h, C] = a, d = 4 + l.length, m = c.sourceSpan.start.moveBy(d), T = m.moveBy(C.length), [w, g] = (() => {
            try {
              return [true, F(C, m).children];
            } catch {
              return [false, [{ type: "text", value: C, sourceSpan: new u(m, T) }]];
            }
          })();
          return { type: "ieConditionalComment", complete: w, children: g, condition: h.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan, startSourceSpan: new u(c.sourceSpan.start, m), endSourceSpan: new u(T, c.sourceSpan.end) };
        }
        function i(c, F, a) {
          let [, l] = a;
          return { type: "ieConditionalStartComment", condition: l.trim().replace(/\s+/g, " "), sourceSpan: c.sourceSpan };
        }
        function f(c) {
          return { type: "ieConditionalEndComment", sourceSpan: c.sourceSpan };
        }
        r.exports = { parseIeConditionalComment: D };
      } }), Xl = I({ "src/language-html/loc.js"(e, r) {
        q();
        function u(D) {
          return D.sourceSpan.start.offset;
        }
        function n(D) {
          return D.sourceSpan.end.offset;
        }
        r.exports = { locStart: u, locEnd: n };
      } }), Ze = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/tags.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        (function(c) {
          c[c.RAW_TEXT = 0] = "RAW_TEXT", c[c.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", c[c.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        })(e.TagContentType || (e.TagContentType = {}));
        function u(c) {
          if (c[0] != ":")
            return [null, c];
          let F = c.indexOf(":", 1);
          if (F == -1)
            throw new Error(`Unsupported format "${c}" expecting ":namespace:name"`);
          return [c.slice(1, F), c.slice(F + 1)];
        }
        e.splitNsName = u;
        function n(c) {
          return u(c)[1] === "ng-container";
        }
        e.isNgContainer = n;
        function D(c) {
          return u(c)[1] === "ng-content";
        }
        e.isNgContent = D;
        function s(c) {
          return u(c)[1] === "ng-template";
        }
        e.isNgTemplate = s;
        function i(c) {
          return c === null ? null : u(c)[0];
        }
        e.getNsPrefix = i;
        function f(c, F) {
          return c ? `:${c}:${F}` : F;
        }
        e.mergeNsAndName = f, e.NAMED_ENTITIES = { Aacute: "Á", aacute: "á", Abreve: "Ă", abreve: "ă", ac: "∾", acd: "∿", acE: "∾̳", Acirc: "Â", acirc: "â", acute: "´", Acy: "А", acy: "а", AElig: "Æ", aelig: "æ", af: "⁡", Afr: "𝔄", afr: "𝔞", Agrave: "À", agrave: "à", alefsym: "ℵ", aleph: "ℵ", Alpha: "Α", alpha: "α", Amacr: "Ā", amacr: "ā", amalg: "⨿", AMP: "&", amp: "&", And: "⩓", and: "∧", andand: "⩕", andd: "⩜", andslope: "⩘", andv: "⩚", ang: "∠", ange: "⦤", angle: "∠", angmsd: "∡", angmsdaa: "⦨", angmsdab: "⦩", angmsdac: "⦪", angmsdad: "⦫", angmsdae: "⦬", angmsdaf: "⦭", angmsdag: "⦮", angmsdah: "⦯", angrt: "∟", angrtvb: "⊾", angrtvbd: "⦝", angsph: "∢", angst: "Å", angzarr: "⍼", Aogon: "Ą", aogon: "ą", Aopf: "𝔸", aopf: "𝕒", ap: "≈", apacir: "⩯", apE: "⩰", ape: "≊", apid: "≋", apos: "'", ApplyFunction: "⁡", approx: "≈", approxeq: "≊", Aring: "Å", aring: "å", Ascr: "𝒜", ascr: "𝒶", Assign: "≔", ast: "*", asymp: "≈", asympeq: "≍", Atilde: "Ã", atilde: "ã", Auml: "Ä", auml: "ä", awconint: "∳", awint: "⨑", backcong: "≌", backepsilon: "϶", backprime: "‵", backsim: "∽", backsimeq: "⋍", Backslash: "∖", Barv: "⫧", barvee: "⊽", Barwed: "⌆", barwed: "⌅", barwedge: "⌅", bbrk: "⎵", bbrktbrk: "⎶", bcong: "≌", Bcy: "Б", bcy: "б", bdquo: "„", becaus: "∵", Because: "∵", because: "∵", bemptyv: "⦰", bepsi: "϶", bernou: "ℬ", Bernoullis: "ℬ", Beta: "Β", beta: "β", beth: "ℶ", between: "≬", Bfr: "𝔅", bfr: "𝔟", bigcap: "⋂", bigcirc: "◯", bigcup: "⋃", bigodot: "⨀", bigoplus: "⨁", bigotimes: "⨂", bigsqcup: "⨆", bigstar: "★", bigtriangledown: "▽", bigtriangleup: "△", biguplus: "⨄", bigvee: "⋁", bigwedge: "⋀", bkarow: "⤍", blacklozenge: "⧫", blacksquare: "▪", blacktriangle: "▴", blacktriangledown: "▾", blacktriangleleft: "◂", blacktriangleright: "▸", blank: "␣", blk12: "▒", blk14: "░", blk34: "▓", block: "█", bne: "=⃥", bnequiv: "≡⃥", bNot: "⫭", bnot: "⌐", Bopf: "𝔹", bopf: "𝕓", bot: "⊥", bottom: "⊥", bowtie: "⋈", boxbox: "⧉", boxDL: "╗", boxDl: "╖", boxdL: "╕", boxdl: "┐", boxDR: "╔", boxDr: "╓", boxdR: "╒", boxdr: "┌", boxH: "═", boxh: "─", boxHD: "╦", boxHd: "╤", boxhD: "╥", boxhd: "┬", boxHU: "╩", boxHu: "╧", boxhU: "╨", boxhu: "┴", boxminus: "⊟", boxplus: "⊞", boxtimes: "⊠", boxUL: "╝", boxUl: "╜", boxuL: "╛", boxul: "┘", boxUR: "╚", boxUr: "╙", boxuR: "╘", boxur: "└", boxV: "║", boxv: "│", boxVH: "╬", boxVh: "╫", boxvH: "╪", boxvh: "┼", boxVL: "╣", boxVl: "╢", boxvL: "╡", boxvl: "┤", boxVR: "╠", boxVr: "╟", boxvR: "╞", boxvr: "├", bprime: "‵", Breve: "˘", breve: "˘", brvbar: "¦", Bscr: "ℬ", bscr: "𝒷", bsemi: "⁏", bsim: "∽", bsime: "⋍", bsol: "\\", bsolb: "⧅", bsolhsub: "⟈", bull: "•", bullet: "•", bump: "≎", bumpE: "⪮", bumpe: "≏", Bumpeq: "≎", bumpeq: "≏", Cacute: "Ć", cacute: "ć", Cap: "⋒", cap: "∩", capand: "⩄", capbrcup: "⩉", capcap: "⩋", capcup: "⩇", capdot: "⩀", CapitalDifferentialD: "ⅅ", caps: "∩︀", caret: "⁁", caron: "ˇ", Cayleys: "ℭ", ccaps: "⩍", Ccaron: "Č", ccaron: "č", Ccedil: "Ç", ccedil: "ç", Ccirc: "Ĉ", ccirc: "ĉ", Cconint: "∰", ccups: "⩌", ccupssm: "⩐", Cdot: "Ċ", cdot: "ċ", cedil: "¸", Cedilla: "¸", cemptyv: "⦲", cent: "¢", CenterDot: "·", centerdot: "·", Cfr: "ℭ", cfr: "𝔠", CHcy: "Ч", chcy: "ч", check: "✓", checkmark: "✓", Chi: "Χ", chi: "χ", cir: "○", circ: "ˆ", circeq: "≗", circlearrowleft: "↺", circlearrowright: "↻", circledast: "⊛", circledcirc: "⊚", circleddash: "⊝", CircleDot: "⊙", circledR: "®", circledS: "Ⓢ", CircleMinus: "⊖", CirclePlus: "⊕", CircleTimes: "⊗", cirE: "⧃", cire: "≗", cirfnint: "⨐", cirmid: "⫯", cirscir: "⧂", ClockwiseContourIntegral: "∲", CloseCurlyDoubleQuote: "”", CloseCurlyQuote: "’", clubs: "♣", clubsuit: "♣", Colon: "∷", colon: ":", Colone: "⩴", colone: "≔", coloneq: "≔", comma: ",", commat: "@", comp: "∁", compfn: "∘", complement: "∁", complexes: "ℂ", cong: "≅", congdot: "⩭", Congruent: "≡", Conint: "∯", conint: "∮", ContourIntegral: "∮", Copf: "ℂ", copf: "𝕔", coprod: "∐", Coproduct: "∐", COPY: "©", copy: "©", copysr: "℗", CounterClockwiseContourIntegral: "∳", crarr: "↵", Cross: "⨯", cross: "✗", Cscr: "𝒞", cscr: "𝒸", csub: "⫏", csube: "⫑", csup: "⫐", csupe: "⫒", ctdot: "⋯", cudarrl: "⤸", cudarrr: "⤵", cuepr: "⋞", cuesc: "⋟", cularr: "↶", cularrp: "⤽", Cup: "⋓", cup: "∪", cupbrcap: "⩈", CupCap: "≍", cupcap: "⩆", cupcup: "⩊", cupdot: "⊍", cupor: "⩅", cups: "∪︀", curarr: "↷", curarrm: "⤼", curlyeqprec: "⋞", curlyeqsucc: "⋟", curlyvee: "⋎", curlywedge: "⋏", curren: "¤", curvearrowleft: "↶", curvearrowright: "↷", cuvee: "⋎", cuwed: "⋏", cwconint: "∲", cwint: "∱", cylcty: "⌭", Dagger: "‡", dagger: "†", daleth: "ℸ", Darr: "↡", dArr: "⇓", darr: "↓", dash: "‐", Dashv: "⫤", dashv: "⊣", dbkarow: "⤏", dblac: "˝", Dcaron: "Ď", dcaron: "ď", Dcy: "Д", dcy: "д", DD: "ⅅ", dd: "ⅆ", ddagger: "‡", ddarr: "⇊", DDotrahd: "⤑", ddotseq: "⩷", deg: "°", Del: "∇", Delta: "Δ", delta: "δ", demptyv: "⦱", dfisht: "⥿", Dfr: "𝔇", dfr: "𝔡", dHar: "⥥", dharl: "⇃", dharr: "⇂", DiacriticalAcute: "´", DiacriticalDot: "˙", DiacriticalDoubleAcute: "˝", DiacriticalGrave: "`", DiacriticalTilde: "˜", diam: "⋄", Diamond: "⋄", diamond: "⋄", diamondsuit: "♦", diams: "♦", die: "¨", DifferentialD: "ⅆ", digamma: "ϝ", disin: "⋲", div: "÷", divide: "÷", divideontimes: "⋇", divonx: "⋇", DJcy: "Ђ", djcy: "ђ", dlcorn: "⌞", dlcrop: "⌍", dollar: "$", Dopf: "𝔻", dopf: "𝕕", Dot: "¨", dot: "˙", DotDot: "⃜", doteq: "≐", doteqdot: "≑", DotEqual: "≐", dotminus: "∸", dotplus: "∔", dotsquare: "⊡", doublebarwedge: "⌆", DoubleContourIntegral: "∯", DoubleDot: "¨", DoubleDownArrow: "⇓", DoubleLeftArrow: "⇐", DoubleLeftRightArrow: "⇔", DoubleLeftTee: "⫤", DoubleLongLeftArrow: "⟸", DoubleLongLeftRightArrow: "⟺", DoubleLongRightArrow: "⟹", DoubleRightArrow: "⇒", DoubleRightTee: "⊨", DoubleUpArrow: "⇑", DoubleUpDownArrow: "⇕", DoubleVerticalBar: "∥", DownArrow: "↓", Downarrow: "⇓", downarrow: "↓", DownArrowBar: "⤓", DownArrowUpArrow: "⇵", DownBreve: "̑", downdownarrows: "⇊", downharpoonleft: "⇃", downharpoonright: "⇂", DownLeftRightVector: "⥐", DownLeftTeeVector: "⥞", DownLeftVector: "↽", DownLeftVectorBar: "⥖", DownRightTeeVector: "⥟", DownRightVector: "⇁", DownRightVectorBar: "⥗", DownTee: "⊤", DownTeeArrow: "↧", drbkarow: "⤐", drcorn: "⌟", drcrop: "⌌", Dscr: "𝒟", dscr: "𝒹", DScy: "Ѕ", dscy: "ѕ", dsol: "⧶", Dstrok: "Đ", dstrok: "đ", dtdot: "⋱", dtri: "▿", dtrif: "▾", duarr: "⇵", duhar: "⥯", dwangle: "⦦", DZcy: "Џ", dzcy: "џ", dzigrarr: "⟿", Eacute: "É", eacute: "é", easter: "⩮", Ecaron: "Ě", ecaron: "ě", ecir: "≖", Ecirc: "Ê", ecirc: "ê", ecolon: "≕", Ecy: "Э", ecy: "э", eDDot: "⩷", Edot: "Ė", eDot: "≑", edot: "ė", ee: "ⅇ", efDot: "≒", Efr: "𝔈", efr: "𝔢", eg: "⪚", Egrave: "È", egrave: "è", egs: "⪖", egsdot: "⪘", el: "⪙", Element: "∈", elinters: "⏧", ell: "ℓ", els: "⪕", elsdot: "⪗", Emacr: "Ē", emacr: "ē", empty: "∅", emptyset: "∅", EmptySmallSquare: "◻", emptyv: "∅", EmptyVerySmallSquare: "▫", emsp: " ", emsp13: " ", emsp14: " ", ENG: "Ŋ", eng: "ŋ", ensp: " ", Eogon: "Ę", eogon: "ę", Eopf: "𝔼", eopf: "𝕖", epar: "⋕", eparsl: "⧣", eplus: "⩱", epsi: "ε", Epsilon: "Ε", epsilon: "ε", epsiv: "ϵ", eqcirc: "≖", eqcolon: "≕", eqsim: "≂", eqslantgtr: "⪖", eqslantless: "⪕", Equal: "⩵", equals: "=", EqualTilde: "≂", equest: "≟", Equilibrium: "⇌", equiv: "≡", equivDD: "⩸", eqvparsl: "⧥", erarr: "⥱", erDot: "≓", Escr: "ℰ", escr: "ℯ", esdot: "≐", Esim: "⩳", esim: "≂", Eta: "Η", eta: "η", ETH: "Ð", eth: "ð", Euml: "Ë", euml: "ë", euro: "€", excl: "!", exist: "∃", Exists: "∃", expectation: "ℰ", ExponentialE: "ⅇ", exponentiale: "ⅇ", fallingdotseq: "≒", Fcy: "Ф", fcy: "ф", female: "♀", ffilig: "ﬃ", fflig: "ﬀ", ffllig: "ﬄ", Ffr: "𝔉", ffr: "𝔣", filig: "ﬁ", FilledSmallSquare: "◼", FilledVerySmallSquare: "▪", fjlig: "fj", flat: "♭", fllig: "ﬂ", fltns: "▱", fnof: "ƒ", Fopf: "𝔽", fopf: "𝕗", ForAll: "∀", forall: "∀", fork: "⋔", forkv: "⫙", Fouriertrf: "ℱ", fpartint: "⨍", frac12: "½", frac13: "⅓", frac14: "¼", frac15: "⅕", frac16: "⅙", frac18: "⅛", frac23: "⅔", frac25: "⅖", frac34: "¾", frac35: "⅗", frac38: "⅜", frac45: "⅘", frac56: "⅚", frac58: "⅝", frac78: "⅞", frasl: "⁄", frown: "⌢", Fscr: "ℱ", fscr: "𝒻", gacute: "ǵ", Gamma: "Γ", gamma: "γ", Gammad: "Ϝ", gammad: "ϝ", gap: "⪆", Gbreve: "Ğ", gbreve: "ğ", Gcedil: "Ģ", Gcirc: "Ĝ", gcirc: "ĝ", Gcy: "Г", gcy: "г", Gdot: "Ġ", gdot: "ġ", gE: "≧", ge: "≥", gEl: "⪌", gel: "⋛", geq: "≥", geqq: "≧", geqslant: "⩾", ges: "⩾", gescc: "⪩", gesdot: "⪀", gesdoto: "⪂", gesdotol: "⪄", gesl: "⋛︀", gesles: "⪔", Gfr: "𝔊", gfr: "𝔤", Gg: "⋙", gg: "≫", ggg: "⋙", gimel: "ℷ", GJcy: "Ѓ", gjcy: "ѓ", gl: "≷", gla: "⪥", glE: "⪒", glj: "⪤", gnap: "⪊", gnapprox: "⪊", gnE: "≩", gne: "⪈", gneq: "⪈", gneqq: "≩", gnsim: "⋧", Gopf: "𝔾", gopf: "𝕘", grave: "`", GreaterEqual: "≥", GreaterEqualLess: "⋛", GreaterFullEqual: "≧", GreaterGreater: "⪢", GreaterLess: "≷", GreaterSlantEqual: "⩾", GreaterTilde: "≳", Gscr: "𝒢", gscr: "ℊ", gsim: "≳", gsime: "⪎", gsiml: "⪐", GT: ">", Gt: "≫", gt: ">", gtcc: "⪧", gtcir: "⩺", gtdot: "⋗", gtlPar: "⦕", gtquest: "⩼", gtrapprox: "⪆", gtrarr: "⥸", gtrdot: "⋗", gtreqless: "⋛", gtreqqless: "⪌", gtrless: "≷", gtrsim: "≳", gvertneqq: "≩︀", gvnE: "≩︀", Hacek: "ˇ", hairsp: " ", half: "½", hamilt: "ℋ", HARDcy: "Ъ", hardcy: "ъ", hArr: "⇔", harr: "↔", harrcir: "⥈", harrw: "↭", Hat: "^", hbar: "ℏ", Hcirc: "Ĥ", hcirc: "ĥ", hearts: "♥", heartsuit: "♥", hellip: "…", hercon: "⊹", Hfr: "ℌ", hfr: "𝔥", HilbertSpace: "ℋ", hksearow: "⤥", hkswarow: "⤦", hoarr: "⇿", homtht: "∻", hookleftarrow: "↩", hookrightarrow: "↪", Hopf: "ℍ", hopf: "𝕙", horbar: "―", HorizontalLine: "─", Hscr: "ℋ", hscr: "𝒽", hslash: "ℏ", Hstrok: "Ħ", hstrok: "ħ", HumpDownHump: "≎", HumpEqual: "≏", hybull: "⁃", hyphen: "‐", Iacute: "Í", iacute: "í", ic: "⁣", Icirc: "Î", icirc: "î", Icy: "И", icy: "и", Idot: "İ", IEcy: "Е", iecy: "е", iexcl: "¡", iff: "⇔", Ifr: "ℑ", ifr: "𝔦", Igrave: "Ì", igrave: "ì", ii: "ⅈ", iiiint: "⨌", iiint: "∭", iinfin: "⧜", iiota: "℩", IJlig: "Ĳ", ijlig: "ĳ", Im: "ℑ", Imacr: "Ī", imacr: "ī", image: "ℑ", ImaginaryI: "ⅈ", imagline: "ℐ", imagpart: "ℑ", imath: "ı", imof: "⊷", imped: "Ƶ", Implies: "⇒", in: "∈", incare: "℅", infin: "∞", infintie: "⧝", inodot: "ı", Int: "∬", int: "∫", intcal: "⊺", integers: "ℤ", Integral: "∫", intercal: "⊺", Intersection: "⋂", intlarhk: "⨗", intprod: "⨼", InvisibleComma: "⁣", InvisibleTimes: "⁢", IOcy: "Ё", iocy: "ё", Iogon: "Į", iogon: "į", Iopf: "𝕀", iopf: "𝕚", Iota: "Ι", iota: "ι", iprod: "⨼", iquest: "¿", Iscr: "ℐ", iscr: "𝒾", isin: "∈", isindot: "⋵", isinE: "⋹", isins: "⋴", isinsv: "⋳", isinv: "∈", it: "⁢", Itilde: "Ĩ", itilde: "ĩ", Iukcy: "І", iukcy: "і", Iuml: "Ï", iuml: "ï", Jcirc: "Ĵ", jcirc: "ĵ", Jcy: "Й", jcy: "й", Jfr: "𝔍", jfr: "𝔧", jmath: "ȷ", Jopf: "𝕁", jopf: "𝕛", Jscr: "𝒥", jscr: "𝒿", Jsercy: "Ј", jsercy: "ј", Jukcy: "Є", jukcy: "є", Kappa: "Κ", kappa: "κ", kappav: "ϰ", Kcedil: "Ķ", kcedil: "ķ", Kcy: "К", kcy: "к", Kfr: "𝔎", kfr: "𝔨", kgreen: "ĸ", KHcy: "Х", khcy: "х", KJcy: "Ќ", kjcy: "ќ", Kopf: "𝕂", kopf: "𝕜", Kscr: "𝒦", kscr: "𝓀", lAarr: "⇚", Lacute: "Ĺ", lacute: "ĺ", laemptyv: "⦴", lagran: "ℒ", Lambda: "Λ", lambda: "λ", Lang: "⟪", lang: "⟨", langd: "⦑", langle: "⟨", lap: "⪅", Laplacetrf: "ℒ", laquo: "«", Larr: "↞", lArr: "⇐", larr: "←", larrb: "⇤", larrbfs: "⤟", larrfs: "⤝", larrhk: "↩", larrlp: "↫", larrpl: "⤹", larrsim: "⥳", larrtl: "↢", lat: "⪫", lAtail: "⤛", latail: "⤙", late: "⪭", lates: "⪭︀", lBarr: "⤎", lbarr: "⤌", lbbrk: "❲", lbrace: "{", lbrack: "[", lbrke: "⦋", lbrksld: "⦏", lbrkslu: "⦍", Lcaron: "Ľ", lcaron: "ľ", Lcedil: "Ļ", lcedil: "ļ", lceil: "⌈", lcub: "{", Lcy: "Л", lcy: "л", ldca: "⤶", ldquo: "“", ldquor: "„", ldrdhar: "⥧", ldrushar: "⥋", ldsh: "↲", lE: "≦", le: "≤", LeftAngleBracket: "⟨", LeftArrow: "←", Leftarrow: "⇐", leftarrow: "←", LeftArrowBar: "⇤", LeftArrowRightArrow: "⇆", leftarrowtail: "↢", LeftCeiling: "⌈", LeftDoubleBracket: "⟦", LeftDownTeeVector: "⥡", LeftDownVector: "⇃", LeftDownVectorBar: "⥙", LeftFloor: "⌊", leftharpoondown: "↽", leftharpoonup: "↼", leftleftarrows: "⇇", LeftRightArrow: "↔", Leftrightarrow: "⇔", leftrightarrow: "↔", leftrightarrows: "⇆", leftrightharpoons: "⇋", leftrightsquigarrow: "↭", LeftRightVector: "⥎", LeftTee: "⊣", LeftTeeArrow: "↤", LeftTeeVector: "⥚", leftthreetimes: "⋋", LeftTriangle: "⊲", LeftTriangleBar: "⧏", LeftTriangleEqual: "⊴", LeftUpDownVector: "⥑", LeftUpTeeVector: "⥠", LeftUpVector: "↿", LeftUpVectorBar: "⥘", LeftVector: "↼", LeftVectorBar: "⥒", lEg: "⪋", leg: "⋚", leq: "≤", leqq: "≦", leqslant: "⩽", les: "⩽", lescc: "⪨", lesdot: "⩿", lesdoto: "⪁", lesdotor: "⪃", lesg: "⋚︀", lesges: "⪓", lessapprox: "⪅", lessdot: "⋖", lesseqgtr: "⋚", lesseqqgtr: "⪋", LessEqualGreater: "⋚", LessFullEqual: "≦", LessGreater: "≶", lessgtr: "≶", LessLess: "⪡", lesssim: "≲", LessSlantEqual: "⩽", LessTilde: "≲", lfisht: "⥼", lfloor: "⌊", Lfr: "𝔏", lfr: "𝔩", lg: "≶", lgE: "⪑", lHar: "⥢", lhard: "↽", lharu: "↼", lharul: "⥪", lhblk: "▄", LJcy: "Љ", ljcy: "љ", Ll: "⋘", ll: "≪", llarr: "⇇", llcorner: "⌞", Lleftarrow: "⇚", llhard: "⥫", lltri: "◺", Lmidot: "Ŀ", lmidot: "ŀ", lmoust: "⎰", lmoustache: "⎰", lnap: "⪉", lnapprox: "⪉", lnE: "≨", lne: "⪇", lneq: "⪇", lneqq: "≨", lnsim: "⋦", loang: "⟬", loarr: "⇽", lobrk: "⟦", LongLeftArrow: "⟵", Longleftarrow: "⟸", longleftarrow: "⟵", LongLeftRightArrow: "⟷", Longleftrightarrow: "⟺", longleftrightarrow: "⟷", longmapsto: "⟼", LongRightArrow: "⟶", Longrightarrow: "⟹", longrightarrow: "⟶", looparrowleft: "↫", looparrowright: "↬", lopar: "⦅", Lopf: "𝕃", lopf: "𝕝", loplus: "⨭", lotimes: "⨴", lowast: "∗", lowbar: "_", LowerLeftArrow: "↙", LowerRightArrow: "↘", loz: "◊", lozenge: "◊", lozf: "⧫", lpar: "(", lparlt: "⦓", lrarr: "⇆", lrcorner: "⌟", lrhar: "⇋", lrhard: "⥭", lrm: "‎", lrtri: "⊿", lsaquo: "‹", Lscr: "ℒ", lscr: "𝓁", Lsh: "↰", lsh: "↰", lsim: "≲", lsime: "⪍", lsimg: "⪏", lsqb: "[", lsquo: "‘", lsquor: "‚", Lstrok: "Ł", lstrok: "ł", LT: "<", Lt: "≪", lt: "<", ltcc: "⪦", ltcir: "⩹", ltdot: "⋖", lthree: "⋋", ltimes: "⋉", ltlarr: "⥶", ltquest: "⩻", ltri: "◃", ltrie: "⊴", ltrif: "◂", ltrPar: "⦖", lurdshar: "⥊", luruhar: "⥦", lvertneqq: "≨︀", lvnE: "≨︀", macr: "¯", male: "♂", malt: "✠", maltese: "✠", Map: "⤅", map: "↦", mapsto: "↦", mapstodown: "↧", mapstoleft: "↤", mapstoup: "↥", marker: "▮", mcomma: "⨩", Mcy: "М", mcy: "м", mdash: "—", mDDot: "∺", measuredangle: "∡", MediumSpace: " ", Mellintrf: "ℳ", Mfr: "𝔐", mfr: "𝔪", mho: "℧", micro: "µ", mid: "∣", midast: "*", midcir: "⫰", middot: "·", minus: "−", minusb: "⊟", minusd: "∸", minusdu: "⨪", MinusPlus: "∓", mlcp: "⫛", mldr: "…", mnplus: "∓", models: "⊧", Mopf: "𝕄", mopf: "𝕞", mp: "∓", Mscr: "ℳ", mscr: "𝓂", mstpos: "∾", Mu: "Μ", mu: "μ", multimap: "⊸", mumap: "⊸", nabla: "∇", Nacute: "Ń", nacute: "ń", nang: "∠⃒", nap: "≉", napE: "⩰̸", napid: "≋̸", napos: "ŉ", napprox: "≉", natur: "♮", natural: "♮", naturals: "ℕ", nbsp: " ", nbump: "≎̸", nbumpe: "≏̸", ncap: "⩃", Ncaron: "Ň", ncaron: "ň", Ncedil: "Ņ", ncedil: "ņ", ncong: "≇", ncongdot: "⩭̸", ncup: "⩂", Ncy: "Н", ncy: "н", ndash: "–", ne: "≠", nearhk: "⤤", neArr: "⇗", nearr: "↗", nearrow: "↗", nedot: "≐̸", NegativeMediumSpace: "​", NegativeThickSpace: "​", NegativeThinSpace: "​", NegativeVeryThinSpace: "​", nequiv: "≢", nesear: "⤨", nesim: "≂̸", NestedGreaterGreater: "≫", NestedLessLess: "≪", NewLine: `
`, nexist: "∄", nexists: "∄", Nfr: "𝔑", nfr: "𝔫", ngE: "≧̸", nge: "≱", ngeq: "≱", ngeqq: "≧̸", ngeqslant: "⩾̸", nges: "⩾̸", nGg: "⋙̸", ngsim: "≵", nGt: "≫⃒", ngt: "≯", ngtr: "≯", nGtv: "≫̸", nhArr: "⇎", nharr: "↮", nhpar: "⫲", ni: "∋", nis: "⋼", nisd: "⋺", niv: "∋", NJcy: "Њ", njcy: "њ", nlArr: "⇍", nlarr: "↚", nldr: "‥", nlE: "≦̸", nle: "≰", nLeftarrow: "⇍", nleftarrow: "↚", nLeftrightarrow: "⇎", nleftrightarrow: "↮", nleq: "≰", nleqq: "≦̸", nleqslant: "⩽̸", nles: "⩽̸", nless: "≮", nLl: "⋘̸", nlsim: "≴", nLt: "≪⃒", nlt: "≮", nltri: "⋪", nltrie: "⋬", nLtv: "≪̸", nmid: "∤", NoBreak: "⁠", NonBreakingSpace: " ", Nopf: "ℕ", nopf: "𝕟", Not: "⫬", not: "¬", NotCongruent: "≢", NotCupCap: "≭", NotDoubleVerticalBar: "∦", NotElement: "∉", NotEqual: "≠", NotEqualTilde: "≂̸", NotExists: "∄", NotGreater: "≯", NotGreaterEqual: "≱", NotGreaterFullEqual: "≧̸", NotGreaterGreater: "≫̸", NotGreaterLess: "≹", NotGreaterSlantEqual: "⩾̸", NotGreaterTilde: "≵", NotHumpDownHump: "≎̸", NotHumpEqual: "≏̸", notin: "∉", notindot: "⋵̸", notinE: "⋹̸", notinva: "∉", notinvb: "⋷", notinvc: "⋶", NotLeftTriangle: "⋪", NotLeftTriangleBar: "⧏̸", NotLeftTriangleEqual: "⋬", NotLess: "≮", NotLessEqual: "≰", NotLessGreater: "≸", NotLessLess: "≪̸", NotLessSlantEqual: "⩽̸", NotLessTilde: "≴", NotNestedGreaterGreater: "⪢̸", NotNestedLessLess: "⪡̸", notni: "∌", notniva: "∌", notnivb: "⋾", notnivc: "⋽", NotPrecedes: "⊀", NotPrecedesEqual: "⪯̸", NotPrecedesSlantEqual: "⋠", NotReverseElement: "∌", NotRightTriangle: "⋫", NotRightTriangleBar: "⧐̸", NotRightTriangleEqual: "⋭", NotSquareSubset: "⊏̸", NotSquareSubsetEqual: "⋢", NotSquareSuperset: "⊐̸", NotSquareSupersetEqual: "⋣", NotSubset: "⊂⃒", NotSubsetEqual: "⊈", NotSucceeds: "⊁", NotSucceedsEqual: "⪰̸", NotSucceedsSlantEqual: "⋡", NotSucceedsTilde: "≿̸", NotSuperset: "⊃⃒", NotSupersetEqual: "⊉", NotTilde: "≁", NotTildeEqual: "≄", NotTildeFullEqual: "≇", NotTildeTilde: "≉", NotVerticalBar: "∤", npar: "∦", nparallel: "∦", nparsl: "⫽⃥", npart: "∂̸", npolint: "⨔", npr: "⊀", nprcue: "⋠", npre: "⪯̸", nprec: "⊀", npreceq: "⪯̸", nrArr: "⇏", nrarr: "↛", nrarrc: "⤳̸", nrarrw: "↝̸", nRightarrow: "⇏", nrightarrow: "↛", nrtri: "⋫", nrtrie: "⋭", nsc: "⊁", nsccue: "⋡", nsce: "⪰̸", Nscr: "𝒩", nscr: "𝓃", nshortmid: "∤", nshortparallel: "∦", nsim: "≁", nsime: "≄", nsimeq: "≄", nsmid: "∤", nspar: "∦", nsqsube: "⋢", nsqsupe: "⋣", nsub: "⊄", nsubE: "⫅̸", nsube: "⊈", nsubset: "⊂⃒", nsubseteq: "⊈", nsubseteqq: "⫅̸", nsucc: "⊁", nsucceq: "⪰̸", nsup: "⊅", nsupE: "⫆̸", nsupe: "⊉", nsupset: "⊃⃒", nsupseteq: "⊉", nsupseteqq: "⫆̸", ntgl: "≹", Ntilde: "Ñ", ntilde: "ñ", ntlg: "≸", ntriangleleft: "⋪", ntrianglelefteq: "⋬", ntriangleright: "⋫", ntrianglerighteq: "⋭", Nu: "Ν", nu: "ν", num: "#", numero: "№", numsp: " ", nvap: "≍⃒", nVDash: "⊯", nVdash: "⊮", nvDash: "⊭", nvdash: "⊬", nvge: "≥⃒", nvgt: ">⃒", nvHarr: "⤄", nvinfin: "⧞", nvlArr: "⤂", nvle: "≤⃒", nvlt: "<⃒", nvltrie: "⊴⃒", nvrArr: "⤃", nvrtrie: "⊵⃒", nvsim: "∼⃒", nwarhk: "⤣", nwArr: "⇖", nwarr: "↖", nwarrow: "↖", nwnear: "⤧", Oacute: "Ó", oacute: "ó", oast: "⊛", ocir: "⊚", Ocirc: "Ô", ocirc: "ô", Ocy: "О", ocy: "о", odash: "⊝", Odblac: "Ő", odblac: "ő", odiv: "⨸", odot: "⊙", odsold: "⦼", OElig: "Œ", oelig: "œ", ofcir: "⦿", Ofr: "𝔒", ofr: "𝔬", ogon: "˛", Ograve: "Ò", ograve: "ò", ogt: "⧁", ohbar: "⦵", ohm: "Ω", oint: "∮", olarr: "↺", olcir: "⦾", olcross: "⦻", oline: "‾", olt: "⧀", Omacr: "Ō", omacr: "ō", Omega: "Ω", omega: "ω", Omicron: "Ο", omicron: "ο", omid: "⦶", ominus: "⊖", Oopf: "𝕆", oopf: "𝕠", opar: "⦷", OpenCurlyDoubleQuote: "“", OpenCurlyQuote: "‘", operp: "⦹", oplus: "⊕", Or: "⩔", or: "∨", orarr: "↻", ord: "⩝", order: "ℴ", orderof: "ℴ", ordf: "ª", ordm: "º", origof: "⊶", oror: "⩖", orslope: "⩗", orv: "⩛", oS: "Ⓢ", Oscr: "𝒪", oscr: "ℴ", Oslash: "Ø", oslash: "ø", osol: "⊘", Otilde: "Õ", otilde: "õ", Otimes: "⨷", otimes: "⊗", otimesas: "⨶", Ouml: "Ö", ouml: "ö", ovbar: "⌽", OverBar: "‾", OverBrace: "⏞", OverBracket: "⎴", OverParenthesis: "⏜", par: "∥", para: "¶", parallel: "∥", parsim: "⫳", parsl: "⫽", part: "∂", PartialD: "∂", Pcy: "П", pcy: "п", percnt: "%", period: ".", permil: "‰", perp: "⊥", pertenk: "‱", Pfr: "𝔓", pfr: "𝔭", Phi: "Φ", phi: "φ", phiv: "ϕ", phmmat: "ℳ", phone: "☎", Pi: "Π", pi: "π", pitchfork: "⋔", piv: "ϖ", planck: "ℏ", planckh: "ℎ", plankv: "ℏ", plus: "+", plusacir: "⨣", plusb: "⊞", pluscir: "⨢", plusdo: "∔", plusdu: "⨥", pluse: "⩲", PlusMinus: "±", plusmn: "±", plussim: "⨦", plustwo: "⨧", pm: "±", Poincareplane: "ℌ", pointint: "⨕", Popf: "ℙ", popf: "𝕡", pound: "£", Pr: "⪻", pr: "≺", prap: "⪷", prcue: "≼", prE: "⪳", pre: "⪯", prec: "≺", precapprox: "⪷", preccurlyeq: "≼", Precedes: "≺", PrecedesEqual: "⪯", PrecedesSlantEqual: "≼", PrecedesTilde: "≾", preceq: "⪯", precnapprox: "⪹", precneqq: "⪵", precnsim: "⋨", precsim: "≾", Prime: "″", prime: "′", primes: "ℙ", prnap: "⪹", prnE: "⪵", prnsim: "⋨", prod: "∏", Product: "∏", profalar: "⌮", profline: "⌒", profsurf: "⌓", prop: "∝", Proportion: "∷", Proportional: "∝", propto: "∝", prsim: "≾", prurel: "⊰", Pscr: "𝒫", pscr: "𝓅", Psi: "Ψ", psi: "ψ", puncsp: " ", Qfr: "𝔔", qfr: "𝔮", qint: "⨌", Qopf: "ℚ", qopf: "𝕢", qprime: "⁗", Qscr: "𝒬", qscr: "𝓆", quaternions: "ℍ", quatint: "⨖", quest: "?", questeq: "≟", QUOT: '"', quot: '"', rAarr: "⇛", race: "∽̱", Racute: "Ŕ", racute: "ŕ", radic: "√", raemptyv: "⦳", Rang: "⟫", rang: "⟩", rangd: "⦒", range: "⦥", rangle: "⟩", raquo: "»", Rarr: "↠", rArr: "⇒", rarr: "→", rarrap: "⥵", rarrb: "⇥", rarrbfs: "⤠", rarrc: "⤳", rarrfs: "⤞", rarrhk: "↪", rarrlp: "↬", rarrpl: "⥅", rarrsim: "⥴", Rarrtl: "⤖", rarrtl: "↣", rarrw: "↝", rAtail: "⤜", ratail: "⤚", ratio: "∶", rationals: "ℚ", RBarr: "⤐", rBarr: "⤏", rbarr: "⤍", rbbrk: "❳", rbrace: "}", rbrack: "]", rbrke: "⦌", rbrksld: "⦎", rbrkslu: "⦐", Rcaron: "Ř", rcaron: "ř", Rcedil: "Ŗ", rcedil: "ŗ", rceil: "⌉", rcub: "}", Rcy: "Р", rcy: "р", rdca: "⤷", rdldhar: "⥩", rdquo: "”", rdquor: "”", rdsh: "↳", Re: "ℜ", real: "ℜ", realine: "ℛ", realpart: "ℜ", reals: "ℝ", rect: "▭", REG: "®", reg: "®", ReverseElement: "∋", ReverseEquilibrium: "⇋", ReverseUpEquilibrium: "⥯", rfisht: "⥽", rfloor: "⌋", Rfr: "ℜ", rfr: "𝔯", rHar: "⥤", rhard: "⇁", rharu: "⇀", rharul: "⥬", Rho: "Ρ", rho: "ρ", rhov: "ϱ", RightAngleBracket: "⟩", RightArrow: "→", Rightarrow: "⇒", rightarrow: "→", RightArrowBar: "⇥", RightArrowLeftArrow: "⇄", rightarrowtail: "↣", RightCeiling: "⌉", RightDoubleBracket: "⟧", RightDownTeeVector: "⥝", RightDownVector: "⇂", RightDownVectorBar: "⥕", RightFloor: "⌋", rightharpoondown: "⇁", rightharpoonup: "⇀", rightleftarrows: "⇄", rightleftharpoons: "⇌", rightrightarrows: "⇉", rightsquigarrow: "↝", RightTee: "⊢", RightTeeArrow: "↦", RightTeeVector: "⥛", rightthreetimes: "⋌", RightTriangle: "⊳", RightTriangleBar: "⧐", RightTriangleEqual: "⊵", RightUpDownVector: "⥏", RightUpTeeVector: "⥜", RightUpVector: "↾", RightUpVectorBar: "⥔", RightVector: "⇀", RightVectorBar: "⥓", ring: "˚", risingdotseq: "≓", rlarr: "⇄", rlhar: "⇌", rlm: "‏", rmoust: "⎱", rmoustache: "⎱", rnmid: "⫮", roang: "⟭", roarr: "⇾", robrk: "⟧", ropar: "⦆", Ropf: "ℝ", ropf: "𝕣", roplus: "⨮", rotimes: "⨵", RoundImplies: "⥰", rpar: ")", rpargt: "⦔", rppolint: "⨒", rrarr: "⇉", Rrightarrow: "⇛", rsaquo: "›", Rscr: "ℛ", rscr: "𝓇", Rsh: "↱", rsh: "↱", rsqb: "]", rsquo: "’", rsquor: "’", rthree: "⋌", rtimes: "⋊", rtri: "▹", rtrie: "⊵", rtrif: "▸", rtriltri: "⧎", RuleDelayed: "⧴", ruluhar: "⥨", rx: "℞", Sacute: "Ś", sacute: "ś", sbquo: "‚", Sc: "⪼", sc: "≻", scap: "⪸", Scaron: "Š", scaron: "š", sccue: "≽", scE: "⪴", sce: "⪰", Scedil: "Ş", scedil: "ş", Scirc: "Ŝ", scirc: "ŝ", scnap: "⪺", scnE: "⪶", scnsim: "⋩", scpolint: "⨓", scsim: "≿", Scy: "С", scy: "с", sdot: "⋅", sdotb: "⊡", sdote: "⩦", searhk: "⤥", seArr: "⇘", searr: "↘", searrow: "↘", sect: "§", semi: ";", seswar: "⤩", setminus: "∖", setmn: "∖", sext: "✶", Sfr: "𝔖", sfr: "𝔰", sfrown: "⌢", sharp: "♯", SHCHcy: "Щ", shchcy: "щ", SHcy: "Ш", shcy: "ш", ShortDownArrow: "↓", ShortLeftArrow: "←", shortmid: "∣", shortparallel: "∥", ShortRightArrow: "→", ShortUpArrow: "↑", shy: "­", Sigma: "Σ", sigma: "σ", sigmaf: "ς", sigmav: "ς", sim: "∼", simdot: "⩪", sime: "≃", simeq: "≃", simg: "⪞", simgE: "⪠", siml: "⪝", simlE: "⪟", simne: "≆", simplus: "⨤", simrarr: "⥲", slarr: "←", SmallCircle: "∘", smallsetminus: "∖", smashp: "⨳", smeparsl: "⧤", smid: "∣", smile: "⌣", smt: "⪪", smte: "⪬", smtes: "⪬︀", SOFTcy: "Ь", softcy: "ь", sol: "/", solb: "⧄", solbar: "⌿", Sopf: "𝕊", sopf: "𝕤", spades: "♠", spadesuit: "♠", spar: "∥", sqcap: "⊓", sqcaps: "⊓︀", sqcup: "⊔", sqcups: "⊔︀", Sqrt: "√", sqsub: "⊏", sqsube: "⊑", sqsubset: "⊏", sqsubseteq: "⊑", sqsup: "⊐", sqsupe: "⊒", sqsupset: "⊐", sqsupseteq: "⊒", squ: "□", Square: "□", square: "□", SquareIntersection: "⊓", SquareSubset: "⊏", SquareSubsetEqual: "⊑", SquareSuperset: "⊐", SquareSupersetEqual: "⊒", SquareUnion: "⊔", squarf: "▪", squf: "▪", srarr: "→", Sscr: "𝒮", sscr: "𝓈", ssetmn: "∖", ssmile: "⌣", sstarf: "⋆", Star: "⋆", star: "☆", starf: "★", straightepsilon: "ϵ", straightphi: "ϕ", strns: "¯", Sub: "⋐", sub: "⊂", subdot: "⪽", subE: "⫅", sube: "⊆", subedot: "⫃", submult: "⫁", subnE: "⫋", subne: "⊊", subplus: "⪿", subrarr: "⥹", Subset: "⋐", subset: "⊂", subseteq: "⊆", subseteqq: "⫅", SubsetEqual: "⊆", subsetneq: "⊊", subsetneqq: "⫋", subsim: "⫇", subsub: "⫕", subsup: "⫓", succ: "≻", succapprox: "⪸", succcurlyeq: "≽", Succeeds: "≻", SucceedsEqual: "⪰", SucceedsSlantEqual: "≽", SucceedsTilde: "≿", succeq: "⪰", succnapprox: "⪺", succneqq: "⪶", succnsim: "⋩", succsim: "≿", SuchThat: "∋", Sum: "∑", sum: "∑", sung: "♪", Sup: "⋑", sup: "⊃", sup1: "¹", sup2: "²", sup3: "³", supdot: "⪾", supdsub: "⫘", supE: "⫆", supe: "⊇", supedot: "⫄", Superset: "⊃", SupersetEqual: "⊇", suphsol: "⟉", suphsub: "⫗", suplarr: "⥻", supmult: "⫂", supnE: "⫌", supne: "⊋", supplus: "⫀", Supset: "⋑", supset: "⊃", supseteq: "⊇", supseteqq: "⫆", supsetneq: "⊋", supsetneqq: "⫌", supsim: "⫈", supsub: "⫔", supsup: "⫖", swarhk: "⤦", swArr: "⇙", swarr: "↙", swarrow: "↙", swnwar: "⤪", szlig: "ß", Tab: "	", target: "⌖", Tau: "Τ", tau: "τ", tbrk: "⎴", Tcaron: "Ť", tcaron: "ť", Tcedil: "Ţ", tcedil: "ţ", Tcy: "Т", tcy: "т", tdot: "⃛", telrec: "⌕", Tfr: "𝔗", tfr: "𝔱", there4: "∴", Therefore: "∴", therefore: "∴", Theta: "Θ", theta: "θ", thetasym: "ϑ", thetav: "ϑ", thickapprox: "≈", thicksim: "∼", ThickSpace: "  ", thinsp: " ", ThinSpace: " ", thkap: "≈", thksim: "∼", THORN: "Þ", thorn: "þ", Tilde: "∼", tilde: "˜", TildeEqual: "≃", TildeFullEqual: "≅", TildeTilde: "≈", times: "×", timesb: "⊠", timesbar: "⨱", timesd: "⨰", tint: "∭", toea: "⤨", top: "⊤", topbot: "⌶", topcir: "⫱", Topf: "𝕋", topf: "𝕥", topfork: "⫚", tosa: "⤩", tprime: "‴", TRADE: "™", trade: "™", triangle: "▵", triangledown: "▿", triangleleft: "◃", trianglelefteq: "⊴", triangleq: "≜", triangleright: "▹", trianglerighteq: "⊵", tridot: "◬", trie: "≜", triminus: "⨺", TripleDot: "⃛", triplus: "⨹", trisb: "⧍", tritime: "⨻", trpezium: "⏢", Tscr: "𝒯", tscr: "𝓉", TScy: "Ц", tscy: "ц", TSHcy: "Ћ", tshcy: "ћ", Tstrok: "Ŧ", tstrok: "ŧ", twixt: "≬", twoheadleftarrow: "↞", twoheadrightarrow: "↠", Uacute: "Ú", uacute: "ú", Uarr: "↟", uArr: "⇑", uarr: "↑", Uarrocir: "⥉", Ubrcy: "Ў", ubrcy: "ў", Ubreve: "Ŭ", ubreve: "ŭ", Ucirc: "Û", ucirc: "û", Ucy: "У", ucy: "у", udarr: "⇅", Udblac: "Ű", udblac: "ű", udhar: "⥮", ufisht: "⥾", Ufr: "𝔘", ufr: "𝔲", Ugrave: "Ù", ugrave: "ù", uHar: "⥣", uharl: "↿", uharr: "↾", uhblk: "▀", ulcorn: "⌜", ulcorner: "⌜", ulcrop: "⌏", ultri: "◸", Umacr: "Ū", umacr: "ū", uml: "¨", UnderBar: "_", UnderBrace: "⏟", UnderBracket: "⎵", UnderParenthesis: "⏝", Union: "⋃", UnionPlus: "⊎", Uogon: "Ų", uogon: "ų", Uopf: "𝕌", uopf: "𝕦", UpArrow: "↑", Uparrow: "⇑", uparrow: "↑", UpArrowBar: "⤒", UpArrowDownArrow: "⇅", UpDownArrow: "↕", Updownarrow: "⇕", updownarrow: "↕", UpEquilibrium: "⥮", upharpoonleft: "↿", upharpoonright: "↾", uplus: "⊎", UpperLeftArrow: "↖", UpperRightArrow: "↗", Upsi: "ϒ", upsi: "υ", upsih: "ϒ", Upsilon: "Υ", upsilon: "υ", UpTee: "⊥", UpTeeArrow: "↥", upuparrows: "⇈", urcorn: "⌝", urcorner: "⌝", urcrop: "⌎", Uring: "Ů", uring: "ů", urtri: "◹", Uscr: "𝒰", uscr: "𝓊", utdot: "⋰", Utilde: "Ũ", utilde: "ũ", utri: "▵", utrif: "▴", uuarr: "⇈", Uuml: "Ü", uuml: "ü", uwangle: "⦧", vangrt: "⦜", varepsilon: "ϵ", varkappa: "ϰ", varnothing: "∅", varphi: "ϕ", varpi: "ϖ", varpropto: "∝", vArr: "⇕", varr: "↕", varrho: "ϱ", varsigma: "ς", varsubsetneq: "⊊︀", varsubsetneqq: "⫋︀", varsupsetneq: "⊋︀", varsupsetneqq: "⫌︀", vartheta: "ϑ", vartriangleleft: "⊲", vartriangleright: "⊳", Vbar: "⫫", vBar: "⫨", vBarv: "⫩", Vcy: "В", vcy: "в", VDash: "⊫", Vdash: "⊩", vDash: "⊨", vdash: "⊢", Vdashl: "⫦", Vee: "⋁", vee: "∨", veebar: "⊻", veeeq: "≚", vellip: "⋮", Verbar: "‖", verbar: "|", Vert: "‖", vert: "|", VerticalBar: "∣", VerticalLine: "|", VerticalSeparator: "❘", VerticalTilde: "≀", VeryThinSpace: " ", Vfr: "𝔙", vfr: "𝔳", vltri: "⊲", vnsub: "⊂⃒", vnsup: "⊃⃒", Vopf: "𝕍", vopf: "𝕧", vprop: "∝", vrtri: "⊳", Vscr: "𝒱", vscr: "𝓋", vsubnE: "⫋︀", vsubne: "⊊︀", vsupnE: "⫌︀", vsupne: "⊋︀", Vvdash: "⊪", vzigzag: "⦚", Wcirc: "Ŵ", wcirc: "ŵ", wedbar: "⩟", Wedge: "⋀", wedge: "∧", wedgeq: "≙", weierp: "℘", Wfr: "𝔚", wfr: "𝔴", Wopf: "𝕎", wopf: "𝕨", wp: "℘", wr: "≀", wreath: "≀", Wscr: "𝒲", wscr: "𝓌", xcap: "⋂", xcirc: "◯", xcup: "⋃", xdtri: "▽", Xfr: "𝔛", xfr: "𝔵", xhArr: "⟺", xharr: "⟷", Xi: "Ξ", xi: "ξ", xlArr: "⟸", xlarr: "⟵", xmap: "⟼", xnis: "⋻", xodot: "⨀", Xopf: "𝕏", xopf: "𝕩", xoplus: "⨁", xotime: "⨂", xrArr: "⟹", xrarr: "⟶", Xscr: "𝒳", xscr: "𝓍", xsqcup: "⨆", xuplus: "⨄", xutri: "△", xvee: "⋁", xwedge: "⋀", Yacute: "Ý", yacute: "ý", YAcy: "Я", yacy: "я", Ycirc: "Ŷ", ycirc: "ŷ", Ycy: "Ы", ycy: "ы", yen: "¥", Yfr: "𝔜", yfr: "𝔶", YIcy: "Ї", yicy: "ї", Yopf: "𝕐", yopf: "𝕪", Yscr: "𝒴", yscr: "𝓎", YUcy: "Ю", yucy: "ю", Yuml: "Ÿ", yuml: "ÿ", Zacute: "Ź", zacute: "ź", Zcaron: "Ž", zcaron: "ž", Zcy: "З", zcy: "з", Zdot: "Ż", zdot: "ż", zeetrf: "ℨ", ZeroWidthSpace: "​", Zeta: "Ζ", zeta: "ζ", Zfr: "ℨ", zfr: "𝔷", ZHcy: "Ж", zhcy: "ж", zigrarr: "⇝", Zopf: "ℤ", zopf: "𝕫", Zscr: "𝒵", zscr: "𝓏", zwj: "‍", zwnj: "‌" }, e.NGSP_UNICODE = "", e.NAMED_ENTITIES.ngsp = e.NGSP_UNICODE;
      } }), Bs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_tags.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ze(), u = class {
          constructor() {
            let { closedByChildren: i, implicitNamespacePrefix: f, contentType: c = r.TagContentType.PARSABLE_DATA, closedByParent: F = false, isVoid: a = false, ignoreFirstLf: l = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, i && i.length > 0 && i.forEach((h) => this.closedByChildren[h] = true), this.isVoid = a, this.closedByParent = F || a, this.implicitNamespacePrefix = f || null, this.contentType = c, this.ignoreFirstLf = l;
          }
          isClosedByChild(i) {
            return this.isVoid || i.toLowerCase() in this.closedByChildren;
          }
        };
        e.HtmlTagDefinition = u;
        var n, D;
        function s(i) {
          return D || (n = new u(), D = { base: new u({ isVoid: true }), meta: new u({ isVoid: true }), area: new u({ isVoid: true }), embed: new u({ isVoid: true }), link: new u({ isVoid: true }), img: new u({ isVoid: true }), input: new u({ isVoid: true }), param: new u({ isVoid: true }), hr: new u({ isVoid: true }), br: new u({ isVoid: true }), source: new u({ isVoid: true }), track: new u({ isVoid: true }), wbr: new u({ isVoid: true }), p: new u({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new u({ closedByChildren: ["tbody", "tfoot"] }), tbody: new u({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new u({ closedByChildren: ["tbody"], closedByParent: true }), tr: new u({ closedByChildren: ["tr"], closedByParent: true }), td: new u({ closedByChildren: ["td", "th"], closedByParent: true }), th: new u({ closedByChildren: ["td", "th"], closedByParent: true }), col: new u({ isVoid: true }), svg: new u({ implicitNamespacePrefix: "svg" }), math: new u({ implicitNamespacePrefix: "math" }), li: new u({ closedByChildren: ["li"], closedByParent: true }), dt: new u({ closedByChildren: ["dt", "dd"] }), dd: new u({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new u({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new u({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new u({ closedByChildren: ["optgroup"], closedByParent: true }), option: new u({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new u({ ignoreFirstLf: true }), listing: new u({ ignoreFirstLf: true }), style: new u({ contentType: r.TagContentType.RAW_TEXT }), script: new u({ contentType: r.TagContentType.RAW_TEXT }), title: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new u({ contentType: r.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), D[i] || n;
        }
        e.getHtmlTagDefinition = s;
      } }), Hl = I({ "node_modules/angular-html-parser/lib/compiler/src/ast_path.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(u) {
            let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
            this.path = u, this.position = n;
          }
          get empty() {
            return !this.path || !this.path.length;
          }
          get head() {
            return this.path[0];
          }
          get tail() {
            return this.path[this.path.length - 1];
          }
          parentOf(u) {
            return u && this.path[this.path.indexOf(u) - 1];
          }
          childOf(u) {
            return this.path[this.path.indexOf(u) + 1];
          }
          first(u) {
            for (let n = this.path.length - 1; n >= 0; n--) {
              let D = this.path[n];
              if (D instanceof u)
                return D;
            }
          }
          push(u) {
            this.path.push(u);
          }
          pop() {
            return this.path.pop();
          }
        };
        e.AstPath = r;
      } }), bs = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/ast.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Hl(), u = class {
          constructor(d, m, T) {
            this.value = d, this.sourceSpan = m, this.i18n = T, this.type = "text";
          }
          visit(d, m) {
            return d.visitText(this, m);
          }
        };
        e.Text = u;
        var n = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "cdata";
          }
          visit(d, m) {
            return d.visitCdata(this, m);
          }
        };
        e.CDATA = n;
        var D = class {
          constructor(d, m, T, w, g, N) {
            this.switchValue = d, this.type = m, this.cases = T, this.sourceSpan = w, this.switchValueSourceSpan = g, this.i18n = N;
          }
          visit(d, m) {
            return d.visitExpansion(this, m);
          }
        };
        e.Expansion = D;
        var s = class {
          constructor(d, m, T, w, g) {
            this.value = d, this.expression = m, this.sourceSpan = T, this.valueSourceSpan = w, this.expSourceSpan = g;
          }
          visit(d, m) {
            return d.visitExpansionCase(this, m);
          }
        };
        e.ExpansionCase = s;
        var i = class {
          constructor(d, m, T) {
            let w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
            this.name = d, this.value = m, this.sourceSpan = T, this.valueSpan = w, this.nameSpan = g, this.i18n = N, this.type = "attribute";
          }
          visit(d, m) {
            return d.visitAttribute(this, m);
          }
        };
        e.Attribute = i;
        var f = class {
          constructor(d, m, T, w) {
            let g = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, R = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, j = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
            this.name = d, this.attrs = m, this.children = T, this.sourceSpan = w, this.startSourceSpan = g, this.endSourceSpan = N, this.nameSpan = R, this.i18n = j, this.type = "element";
          }
          visit(d, m) {
            return d.visitElement(this, m);
          }
        };
        e.Element = f;
        var c = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "comment";
          }
          visit(d, m) {
            return d.visitComment(this, m);
          }
        };
        e.Comment = c;
        var F = class {
          constructor(d, m) {
            this.value = d, this.sourceSpan = m, this.type = "docType";
          }
          visit(d, m) {
            return d.visitDocType(this, m);
          }
        };
        e.DocType = F;
        function a(d, m) {
          let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, w = [], g = d.visit ? (N) => d.visit(N, T) || N.visit(d, T) : (N) => N.visit(d, T);
          return m.forEach((N) => {
            let R = g(N);
            R && w.push(R);
          }), w;
        }
        e.visitAll = a;
        var l = class {
          constructor() {
          }
          visitElement(d, m) {
            this.visitChildren(m, (T) => {
              T(d.attrs), T(d.children);
            });
          }
          visitAttribute(d, m) {
          }
          visitText(d, m) {
          }
          visitCdata(d, m) {
          }
          visitComment(d, m) {
          }
          visitDocType(d, m) {
          }
          visitExpansion(d, m) {
            return this.visitChildren(m, (T) => {
              T(d.cases);
            });
          }
          visitExpansionCase(d, m) {
          }
          visitChildren(d, m) {
            let T = [], w = this;
            function g(N) {
              N && T.push(a(w, N, d));
            }
            return m(g), Array.prototype.concat.apply([], T);
          }
        };
        e.RecursiveVisitor = l;
        function h(d) {
          let m = d.sourceSpan.start.offset, T = d.sourceSpan.end.offset;
          return d instanceof f && (d.endSourceSpan ? T = d.endSourceSpan.end.offset : d.children && d.children.length && (T = h(d.children[d.children.length - 1]).end)), { start: m, end: T };
        }
        function C(d, m) {
          let T = [], w = new class extends l {
            visit(g, N) {
              let R = h(g);
              if (R.start <= m && m < R.end)
                T.push(g);
              else
                return true;
            }
          }();
          return a(w, d), new r.AstPath(T, m);
        }
        e.findNode = C;
      } }), zl = I({ "node_modules/angular-html-parser/lib/compiler/src/assertions.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        function r(D, s) {
          if (s != null) {
            if (!Array.isArray(s))
              throw new Error(`Expected '${D}' to be an array of strings.`);
            for (let i = 0; i < s.length; i += 1)
              if (typeof s[i] != "string")
                throw new Error(`Expected '${D}' to be an array of strings.`);
          }
        }
        e.assertArrayOfStrings = r;
        var u = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function n(D, s) {
          if (s != null && !(Array.isArray(s) && s.length == 2))
            throw new Error(`Expected '${D}' to be an array, [start, end].`);
          if (s != null) {
            let i = s[0], f = s[1];
            u.forEach((c) => {
              if (c.test(i) || c.test(f))
                throw new Error(`['${i}', '${f}'] contains unusable interpolation symbol.`);
            });
          }
        }
        e.assertInterpolationSymbols = n;
      } }), Wl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/interpolation_config.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = zl(), u = class {
          constructor(n, D) {
            this.start = n, this.end = D;
          }
          static fromArray(n) {
            return n ? (r.assertInterpolationSymbols("interpolation", n), new u(n[0], n[1])) : e.DEFAULT_INTERPOLATION_CONFIG;
          }
        };
        e.InterpolationConfig = u, e.DEFAULT_INTERPOLATION_CONFIG = new u("{{", "}}");
      } }), Yl = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/lexer.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Es(), u = Be(), n = Wl(), D = Ze(), s;
        (function(t) {
          t[t.TAG_OPEN_START = 0] = "TAG_OPEN_START", t[t.TAG_OPEN_END = 1] = "TAG_OPEN_END", t[t.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", t[t.TAG_CLOSE = 3] = "TAG_CLOSE", t[t.TEXT = 4] = "TEXT", t[t.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", t[t.RAW_TEXT = 6] = "RAW_TEXT", t[t.COMMENT_START = 7] = "COMMENT_START", t[t.COMMENT_END = 8] = "COMMENT_END", t[t.CDATA_START = 9] = "CDATA_START", t[t.CDATA_END = 10] = "CDATA_END", t[t.ATTR_NAME = 11] = "ATTR_NAME", t[t.ATTR_QUOTE = 12] = "ATTR_QUOTE", t[t.ATTR_VALUE = 13] = "ATTR_VALUE", t[t.DOC_TYPE_START = 14] = "DOC_TYPE_START", t[t.DOC_TYPE_END = 15] = "DOC_TYPE_END", t[t.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", t[t.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", t[t.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", t[t.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", t[t.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", t[t.EOF = 21] = "EOF";
        })(s = e.TokenType || (e.TokenType = {}));
        var i = class {
          constructor(t, o, E) {
            this.type = t, this.parts = o, this.sourceSpan = E;
          }
        };
        e.Token = i;
        var f = class extends u.ParseError {
          constructor(t, o, E) {
            super(E, t), this.tokenType = o;
          }
        };
        e.TokenError = f;
        var c = class {
          constructor(t, o) {
            this.tokens = t, this.errors = o;
          }
        };
        e.TokenizeResult = c;
        function F(t, o, E) {
          let p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return new d(new u.ParseSourceFile(t, o), E, p).tokenize();
        }
        e.tokenize = F;
        var a = /\r\n?/g;
        function l(t) {
          return `Unexpected character "${t === r.$EOF ? "EOF" : String.fromCharCode(t)}"`;
        }
        function h(t) {
          return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        var C = class {
          constructor(t) {
            this.error = t;
          }
        }, d = class {
          constructor(t, o, E) {
            this._getTagContentType = o, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = E.tokenizeExpansionForms || false, this._interpolationConfig = E.interpolationConfig || n.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = E.leadingTriviaChars && E.leadingTriviaChars.map((A) => A.codePointAt(0) || 0), this._canSelfClose = E.canSelfClose || false, this._allowHtmComponentClosingTags = E.allowHtmComponentClosingTags || false;
            let p = E.range || { endPos: t.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = E.escapedString ? new k(t, p) : new x(t, p);
            try {
              this._cursor.init();
            } catch (A) {
              this.handleError(A);
            }
          }
          _processCarriageReturns(t) {
            return t.replace(a, `
`);
          }
          tokenize() {
            for (; this._cursor.peek() !== r.$EOF; ) {
              let t = this._cursor.clone();
              try {
                if (this._attemptCharCode(r.$LT))
                  if (this._attemptCharCode(r.$BANG))
                    this._attemptStr("[CDATA[") ? this._consumeCdata(t) : this._attemptStr("--") ? this._consumeComment(t) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(t) : this._consumeBogusComment(t);
                  else if (this._attemptCharCode(r.$SLASH))
                    this._consumeTagClose(t);
                  else {
                    let o = this._cursor.clone();
                    this._attemptCharCode(r.$QUESTION) ? (this._cursor = o, this._consumeBogusComment(t)) : this._consumeTagOpen(t);
                  }
                else
                  this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
              } catch (o) {
                this.handleError(o);
              }
            }
            return this._beginToken(s.EOF), this._endToken([]), new c(O(this.tokens), this.errors);
          }
          _tokenizeExpansionForm() {
            if (this.isExpansionFormStart())
              return this._consumeExpansionFormStart(), true;
            if (R(this._cursor.peek()) && this._isInExpansionForm())
              return this._consumeExpansionCaseStart(), true;
            if (this._cursor.peek() === r.$RBRACE) {
              if (this._isInExpansionCase())
                return this._consumeExpansionCaseEnd(), true;
              if (this._isInExpansionForm())
                return this._consumeExpansionFormEnd(), true;
            }
            return false;
          }
          _beginToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            this._currentTokenStart = o, this._currentTokenType = t;
          }
          _endToken(t) {
            let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
            if (this._currentTokenStart === null)
              throw new f("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(o));
            if (this._currentTokenType === null)
              throw new f("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let E = new i(this._currentTokenType, t, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
            return this.tokens.push(E), this._currentTokenStart = null, this._currentTokenType = null, E;
          }
          _createError(t, o) {
            this._isInExpansionForm() && (t += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let E = new f(t, this._currentTokenType, o);
            return this._currentTokenStart = null, this._currentTokenType = null, new C(E);
          }
          handleError(t) {
            if (t instanceof $ && (t = this._createError(t.msg, this._cursor.getSpan(t.cursor))), t instanceof C)
              this.errors.push(t.error);
            else
              throw t;
          }
          _attemptCharCode(t) {
            return this._cursor.peek() === t ? (this._cursor.advance(), true) : false;
          }
          _attemptCharCodeCaseInsensitive(t) {
            return j(this._cursor.peek(), t) ? (this._cursor.advance(), true) : false;
          }
          _requireCharCode(t) {
            let o = this._cursor.clone();
            if (!this._attemptCharCode(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptStr(t) {
            let o = t.length;
            if (this._cursor.charsLeft() < o)
              return false;
            let E = this._cursor.clone();
            for (let p = 0; p < o; p++)
              if (!this._attemptCharCode(t.charCodeAt(p)))
                return this._cursor = E, false;
            return true;
          }
          _attemptStrCaseInsensitive(t) {
            for (let o = 0; o < t.length; o++)
              if (!this._attemptCharCodeCaseInsensitive(t.charCodeAt(o)))
                return false;
            return true;
          }
          _requireStr(t) {
            let o = this._cursor.clone();
            if (!this._attemptStr(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _requireStrCaseInsensitive(t) {
            let o = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(t))
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(o));
          }
          _attemptCharCodeUntilFn(t) {
            for (; !t(this._cursor.peek()); )
              this._cursor.advance();
          }
          _requireCharCodeUntilFn(t, o) {
            let E = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(t), this._cursor.clone().diff(E) < o)
              throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(E));
          }
          _attemptUntilChar(t) {
            for (; this._cursor.peek() !== t; )
              this._cursor.advance();
          }
          _readChar(t) {
            if (t && this._cursor.peek() === r.$AMPERSAND)
              return this._decodeEntity();
            {
              let o = String.fromCodePoint(this._cursor.peek());
              return this._cursor.advance(), o;
            }
          }
          _decodeEntity() {
            let t = this._cursor.clone();
            if (this._cursor.advance(), this._attemptCharCode(r.$HASH)) {
              let o = this._attemptCharCode(r.$x) || this._attemptCharCode(r.$X), E = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(g), this._cursor.peek() != r.$SEMICOLON)
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan());
              let p = this._cursor.getChars(E);
              this._cursor.advance();
              try {
                let A = parseInt(p, o ? 16 : 10);
                return String.fromCharCode(A);
              } catch {
                throw this._createError(h(this._cursor.getChars(t)), this._cursor.getSpan());
              }
            } else {
              let o = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(N), this._cursor.peek() != r.$SEMICOLON)
                return this._cursor = o, "&";
              let E = this._cursor.getChars(o);
              this._cursor.advance();
              let p = D.NAMED_ENTITIES[E];
              if (!p)
                throw this._createError(h(E), this._cursor.getSpan(t));
              return p;
            }
          }
          _consumeRawText(t, o) {
            this._beginToken(t ? s.ESCAPABLE_RAW_TEXT : s.RAW_TEXT);
            let E = [];
            for (; ; ) {
              let p = this._cursor.clone(), A = o();
              if (this._cursor = p, A)
                break;
              E.push(this._readChar(t));
            }
            return this._endToken([this._processCarriageReturns(E.join(""))]);
          }
          _consumeComment(t) {
            this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(s.COMMENT_END), this._requireStr("-->"), this._endToken([]);
          }
          _consumeBogusComment(t) {
            this._beginToken(s.COMMENT_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.COMMENT_END), this._cursor.advance(), this._endToken([]);
          }
          _consumeCdata(t) {
            this._beginToken(s.CDATA_START, t), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(s.CDATA_END), this._requireStr("]]>"), this._endToken([]);
          }
          _consumeDocType(t) {
            this._beginToken(s.DOC_TYPE_START, t), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === r.$GT), this._beginToken(s.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
          }
          _consumePrefixAndName() {
            let t = this._cursor.clone(), o = "";
            for (; this._cursor.peek() !== r.$COLON && !w(this._cursor.peek()); )
              this._cursor.advance();
            let E;
            this._cursor.peek() === r.$COLON ? (o = this._cursor.getChars(t), this._cursor.advance(), E = this._cursor.clone()) : E = t, this._requireCharCodeUntilFn(T, o === "" ? 0 : 1);
            let p = this._cursor.getChars(E);
            return [o, p];
          }
          _consumeTagOpen(t) {
            let o, E, p, A = this.tokens.length, P = this._cursor.clone(), M = [];
            try {
              if (!r.isAsciiLetter(this._cursor.peek()))
                throw this._createError(l(this._cursor.peek()), this._cursor.getSpan(t));
              for (p = this._consumeTagOpenStart(t), E = p.parts[0], o = p.parts[1], this._attemptCharCodeUntilFn(m); this._cursor.peek() !== r.$SLASH && this._cursor.peek() !== r.$GT; ) {
                let [V, X] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$EQ)) {
                  this._attemptCharCodeUntilFn(m);
                  let H = this._consumeAttributeValue();
                  M.push({ prefix: V, name: X, value: H });
                } else
                  M.push({ prefix: V, name: X });
                this._attemptCharCodeUntilFn(m);
              }
              this._consumeTagOpenEnd();
            } catch (V) {
              if (V instanceof C) {
                this._cursor = P, p && (this.tokens.length = A), this._beginToken(s.TEXT, t), this._endToken(["<"]);
                return;
              }
              throw V;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === s.TAG_OPEN_END_VOID)
              return;
            let z = this._getTagContentType(o, E, this._fullNameStack.length > 0, M);
            this._handleFullNameStackForTagOpen(E, o), z === D.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(E, o, false) : z === D.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(E, o, true);
          }
          _consumeRawTextWithTagClose(t, o, E) {
            this._consumeRawText(E, () => !this._attemptCharCode(r.$LT) || !this._attemptCharCode(r.$SLASH) || (this._attemptCharCodeUntilFn(m), !this._attemptStrCaseInsensitive(t ? `${t}:${o}` : o)) ? false : (this._attemptCharCodeUntilFn(m), this._attemptCharCode(r.$GT)));
            this._beginToken(s.TAG_CLOSE), this._requireCharCodeUntilFn((A) => A === r.$GT, 3), this._cursor.advance(), this._endToken([t, o]), this._handleFullNameStackForTagClose(t, o);
          }
          _consumeTagOpenStart(t) {
            this._beginToken(s.TAG_OPEN_START, t);
            let o = this._consumePrefixAndName();
            return this._endToken(o);
          }
          _consumeAttributeName() {
            let t = this._cursor.peek();
            if (t === r.$SQ || t === r.$DQ)
              throw this._createError(l(t), this._cursor.getSpan());
            this._beginToken(s.ATTR_NAME);
            let o = this._consumePrefixAndName();
            return this._endToken(o), o;
          }
          _consumeAttributeValue() {
            let t;
            if (this._cursor.peek() === r.$SQ || this._cursor.peek() === r.$DQ) {
              this._beginToken(s.ATTR_QUOTE);
              let o = this._cursor.peek();
              this._cursor.advance(), this._endToken([String.fromCodePoint(o)]), this._beginToken(s.ATTR_VALUE);
              let E = [];
              for (; this._cursor.peek() !== o; )
                E.push(this._readChar(true));
              t = this._processCarriageReturns(E.join("")), this._endToken([t]), this._beginToken(s.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(o)]);
            } else {
              this._beginToken(s.ATTR_VALUE);
              let o = this._cursor.clone();
              this._requireCharCodeUntilFn(T, 1), t = this._processCarriageReturns(this._cursor.getChars(o)), this._endToken([t]);
            }
            return t;
          }
          _consumeTagOpenEnd() {
            let t = this._attemptCharCode(r.$SLASH) ? s.TAG_OPEN_END_VOID : s.TAG_OPEN_END;
            this._beginToken(t), this._requireCharCode(r.$GT), this._endToken([]);
          }
          _consumeTagClose(t) {
            if (this._beginToken(s.TAG_CLOSE, t), this._attemptCharCodeUntilFn(m), this._allowHtmComponentClosingTags && this._attemptCharCode(r.$SLASH))
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([]);
            else {
              let [o, E] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(m), this._requireCharCode(r.$GT), this._endToken([o, E]), this._handleFullNameStackForTagClose(o, E);
            }
          }
          _consumeExpansionFormStart() {
            this._beginToken(s.EXPANSION_FORM_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._expansionCaseStack.push(s.EXPANSION_FORM_START), this._beginToken(s.RAW_TEXT);
            let t = this._readUntil(r.$COMMA);
            this._endToken([t]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m), this._beginToken(s.RAW_TEXT);
            let o = this._readUntil(r.$COMMA);
            this._endToken([o]), this._requireCharCode(r.$COMMA), this._attemptCharCodeUntilFn(m);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(s.EXPANSION_CASE_VALUE);
            let t = this._readUntil(r.$LBRACE).trim();
            this._endToken([t]), this._attemptCharCodeUntilFn(m), this._beginToken(s.EXPANSION_CASE_EXP_START), this._requireCharCode(r.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.push(s.EXPANSION_CASE_EXP_START);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(s.EXPANSION_CASE_EXP_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(m), this._expansionCaseStack.pop();
          }
          _consumeExpansionFormEnd() {
            this._beginToken(s.EXPANSION_FORM_END), this._requireCharCode(r.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
          }
          _consumeText() {
            let t = this._cursor.clone();
            this._beginToken(s.TEXT, t);
            let o = [];
            do
              this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (o.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (o.push(this._interpolationConfig.end), this._inInterpolation = false) : o.push(this._readChar(true));
            while (!this._isTextEnd());
            this._endToken([this._processCarriageReturns(o.join(""))]);
          }
          _isTextEnd() {
            return !!(this._cursor.peek() === r.$LT || this._cursor.peek() === r.$EOF || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === r.$RBRACE && this._isInExpansionCase()));
          }
          _readUntil(t) {
            let o = this._cursor.clone();
            return this._attemptUntilChar(t), this._cursor.getChars(o);
          }
          _isInExpansionCase() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_CASE_EXP_START;
          }
          _isInExpansionForm() {
            return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === s.EXPANSION_FORM_START;
          }
          isExpansionFormStart() {
            if (this._cursor.peek() !== r.$LBRACE)
              return false;
            if (this._interpolationConfig) {
              let t = this._cursor.clone(), o = this._attemptStr(this._interpolationConfig.start);
              return this._cursor = t, !o;
            }
            return true;
          }
          _handleFullNameStackForTagOpen(t, o) {
            let E = D.mergeNsAndName(t, o);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === E) && this._fullNameStack.push(E);
          }
          _handleFullNameStackForTagClose(t, o) {
            let E = D.mergeNsAndName(t, o);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === E && this._fullNameStack.pop();
          }
        };
        function m(t) {
          return !r.isWhitespace(t) || t === r.$EOF;
        }
        function T(t) {
          return r.isWhitespace(t) || t === r.$GT || t === r.$SLASH || t === r.$SQ || t === r.$DQ || t === r.$EQ;
        }
        function w(t) {
          return (t < r.$a || r.$z < t) && (t < r.$A || r.$Z < t) && (t < r.$0 || t > r.$9);
        }
        function g(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiHexDigit(t);
        }
        function N(t) {
          return t == r.$SEMICOLON || t == r.$EOF || !r.isAsciiLetter(t);
        }
        function R(t) {
          return t === r.$EQ || r.isAsciiLetter(t) || r.isDigit(t);
        }
        function j(t, o) {
          return _(t) == _(o);
        }
        function _(t) {
          return t >= r.$a && t <= r.$z ? t - r.$a + r.$A : t;
        }
        function O(t) {
          let o = [], E;
          for (let p = 0; p < t.length; p++) {
            let A = t[p];
            E && E.type == s.TEXT && A.type == s.TEXT ? (E.parts[0] += A.parts[0], E.sourceSpan.end = A.sourceSpan.end) : (E = A, o.push(E));
          }
          return o;
        }
        var x = class {
          constructor(t, o) {
            if (t instanceof x)
              this.file = t.file, this.input = t.input, this.end = t.end, this.state = Object.assign({}, t.state);
            else {
              if (!o)
                throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = t, this.input = t.content, this.end = o.endPos, this.state = { peek: -1, offset: o.startPos, line: o.startLine, column: o.startCol };
            }
          }
          clone() {
            return new x(this);
          }
          peek() {
            return this.state.peek;
          }
          charsLeft() {
            return this.end - this.state.offset;
          }
          diff(t) {
            return this.state.offset - t.state.offset;
          }
          advance() {
            this.advanceState(this.state);
          }
          init() {
            this.updatePeek(this.state);
          }
          getSpan(t, o) {
            if (t = t || this, o)
              for (t = t.clone(); this.diff(t) > 0 && o.indexOf(t.peek()) !== -1; )
                t.advance();
            return new u.ParseSourceSpan(new u.ParseLocation(t.file, t.state.offset, t.state.line, t.state.column), new u.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
          }
          getChars(t) {
            return this.input.substring(t.state.offset, this.state.offset);
          }
          charAt(t) {
            return this.input.charCodeAt(t);
          }
          advanceState(t) {
            if (t.offset >= this.end)
              throw this.state = t, new $('Unexpected character "EOF"', this);
            let o = this.charAt(t.offset);
            o === r.$LF ? (t.line++, t.column = 0) : r.isNewLine(o) || t.column++, t.offset++, this.updatePeek(t);
          }
          updatePeek(t) {
            t.peek = t.offset >= this.end ? r.$EOF : this.charAt(t.offset);
          }
        }, k = class extends x {
          constructor(t, o) {
            t instanceof k ? (super(t), this.internalState = Object.assign({}, t.internalState)) : (super(t, o), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new k(this);
          }
          getChars(t) {
            let o = t.clone(), E = "";
            for (; o.internalState.offset < this.internalState.offset; )
              E += String.fromCodePoint(o.peek()), o.advance();
            return E;
          }
          processEscapeSequence() {
            let t = () => this.internalState.peek;
            if (t() === r.$BACKSLASH)
              if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), t() === r.$n)
                this.state.peek = r.$LF;
              else if (t() === r.$r)
                this.state.peek = r.$CR;
              else if (t() === r.$v)
                this.state.peek = r.$VTAB;
              else if (t() === r.$t)
                this.state.peek = r.$TAB;
              else if (t() === r.$b)
                this.state.peek = r.$BSPACE;
              else if (t() === r.$f)
                this.state.peek = r.$FF;
              else if (t() === r.$u)
                if (this.advanceState(this.internalState), t() === r.$LBRACE) {
                  this.advanceState(this.internalState);
                  let o = this.clone(), E = 0;
                  for (; t() !== r.$RBRACE; )
                    this.advanceState(this.internalState), E++;
                  this.state.peek = this.decodeHexDigits(o, E);
                } else {
                  let o = this.clone();
                  this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 4);
                }
              else if (t() === r.$x) {
                this.advanceState(this.internalState);
                let o = this.clone();
                this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(o, 2);
              } else if (r.isOctalDigit(t())) {
                let o = "", E = 0, p = this.clone();
                for (; r.isOctalDigit(t()) && E < 3; )
                  p = this.clone(), o += String.fromCodePoint(t()), this.advanceState(this.internalState), E++;
                this.state.peek = parseInt(o, 8), this.internalState = p.internalState;
              } else
                r.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(t, o) {
            let E = this.input.substr(t.internalState.offset, o), p = parseInt(E, 16);
            if (isNaN(p))
              throw t.state = t.internalState, new $("Invalid hexadecimal escape sequence", t);
            return p;
          }
        }, $ = class {
          constructor(t, o) {
            this.msg = t, this.cursor = o;
          }
        };
        e.CursorError = $;
      } }), ls = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/parser.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Be(), u = bs(), n = Yl(), D = Ze(), s = class extends r.ParseError {
          constructor(a, l, h) {
            super(l, h), this.elementName = a;
          }
          static create(a, l, h) {
            return new s(a, l, h);
          }
        };
        e.TreeError = s;
        var i = class {
          constructor(a, l) {
            this.rootNodes = a, this.errors = l;
          }
        };
        e.ParseTreeResult = i;
        var f = class {
          constructor(a) {
            this.getTagDefinition = a;
          }
          parse(a, l, h) {
            let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, d = arguments.length > 4 ? arguments[4] : void 0, m = (x) => function(k) {
              for (var $ = arguments.length, t = new Array($ > 1 ? $ - 1 : 0), o = 1; o < $; o++)
                t[o - 1] = arguments[o];
              return x(k.toLowerCase(), ...t);
            }, T = C ? this.getTagDefinition : m(this.getTagDefinition), w = (x) => T(x).contentType, g = C ? d : m(d), N = d ? (x, k, $, t) => {
              let o = g(x, k, $, t);
              return o !== void 0 ? o : w(x);
            } : w, R = n.tokenize(a, l, N, h), j = h && h.canSelfClose || false, _ = h && h.allowHtmComponentClosingTags || false, O = new c(R.tokens, T, j, _, C).build();
            return new i(O.rootNodes, R.errors.concat(O.errors));
          }
        };
        e.Parser = f;
        var c = class {
          constructor(a, l, h, C, d) {
            this.tokens = a, this.getTagDefinition = l, this.canSelfClose = h, this.allowHtmComponentClosingTags = C, this.isTagNameCaseSensitive = d, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
          }
          build() {
            for (; this._peek.type !== n.TokenType.EOF; )
              this._peek.type === n.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === n.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === n.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === n.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === n.TokenType.TEXT || this._peek.type === n.TokenType.RAW_TEXT || this._peek.type === n.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === n.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === n.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
            return new i(this._rootNodes, this._errors);
          }
          _advance() {
            let a = this._peek;
            return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], a;
          }
          _advanceIf(a) {
            return this._peek.type === a ? this._advance() : null;
          }
          _consumeCdata(a) {
            let l = this._advance(), h = this._getText(l), C = this._advanceIf(n.TokenType.CDATA_END);
            this._addToParent(new u.CDATA(h, new r.ParseSourceSpan(a.sourceSpan.start, (C || l).sourceSpan.end)));
          }
          _consumeComment(a) {
            let l = this._advanceIf(n.TokenType.RAW_TEXT), h = this._advanceIf(n.TokenType.COMMENT_END), C = l != null ? l.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || l || a).sourceSpan.end);
            this._addToParent(new u.Comment(C, d));
          }
          _consumeDocType(a) {
            let l = this._advanceIf(n.TokenType.RAW_TEXT), h = this._advanceIf(n.TokenType.DOC_TYPE_END), C = l != null ? l.parts[0].trim() : null, d = new r.ParseSourceSpan(a.sourceSpan.start, (h || l || a).sourceSpan.end);
            this._addToParent(new u.DocType(C, d));
          }
          _consumeExpansion(a) {
            let l = this._advance(), h = this._advance(), C = [];
            for (; this._peek.type === n.TokenType.EXPANSION_CASE_VALUE; ) {
              let m = this._parseExpansionCase();
              if (!m)
                return;
              C.push(m);
            }
            if (this._peek.type !== n.TokenType.EXPANSION_FORM_END) {
              this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
              return;
            }
            let d = new r.ParseSourceSpan(a.sourceSpan.start, this._peek.sourceSpan.end);
            this._addToParent(new u.Expansion(l.parts[0], h.parts[0], C, d, l.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let a = this._advance();
            if (this._peek.type !== n.TokenType.EXPANSION_CASE_EXP_START)
              return this._errors.push(s.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let l = this._advance(), h = this._collectExpansionExpTokens(l);
            if (!h)
              return null;
            let C = this._advance();
            h.push(new n.Token(n.TokenType.EOF, [], C.sourceSpan));
            let d = new c(h, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
            if (d.errors.length > 0)
              return this._errors = this._errors.concat(d.errors), null;
            let m = new r.ParseSourceSpan(a.sourceSpan.start, C.sourceSpan.end), T = new r.ParseSourceSpan(l.sourceSpan.start, C.sourceSpan.end);
            return new u.ExpansionCase(a.parts[0], d.rootNodes, m, a.sourceSpan, T);
          }
          _collectExpansionExpTokens(a) {
            let l = [], h = [n.TokenType.EXPANSION_CASE_EXP_START];
            for (; ; ) {
              if ((this._peek.type === n.TokenType.EXPANSION_FORM_START || this._peek.type === n.TokenType.EXPANSION_CASE_EXP_START) && h.push(this._peek.type), this._peek.type === n.TokenType.EXPANSION_CASE_EXP_END)
                if (F(h, n.TokenType.EXPANSION_CASE_EXP_START)) {
                  if (h.pop(), h.length == 0)
                    return l;
                } else
                  return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === n.TokenType.EXPANSION_FORM_END)
                if (F(h, n.TokenType.EXPANSION_FORM_START))
                  h.pop();
                else
                  return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === n.TokenType.EOF)
                return this._errors.push(s.create(null, a.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              l.push(this._advance());
            }
          }
          _getText(a) {
            let l = a.parts[0];
            if (l.length > 0 && l[0] == `
`) {
              let h = this._getParentElement();
              h != null && h.children.length == 0 && this.getTagDefinition(h.name).ignoreFirstLf && (l = l.substring(1));
            }
            return l;
          }
          _consumeText(a) {
            let l = this._getText(a);
            l.length > 0 && this._addToParent(new u.Text(l, a.sourceSpan));
          }
          _closeVoidElement() {
            let a = this._getParentElement();
            a && this.getTagDefinition(a.name).isVoid && this._elementStack.pop();
          }
          _consumeStartTag(a) {
            let l = a.parts[0], h = a.parts[1], C = [];
            for (; this._peek.type === n.TokenType.ATTR_NAME; )
              C.push(this._consumeAttr(this._advance()));
            let d = this._getElementFullName(l, h, this._getParentElement()), m = false;
            if (this._peek.type === n.TokenType.TAG_OPEN_END_VOID) {
              this._advance(), m = true;
              let R = this.getTagDefinition(d);
              this.canSelfClose || R.canSelfClose || D.getNsPrefix(d) !== null || R.isVoid || this._errors.push(s.create(d, a.sourceSpan, `Only void and foreign elements can be self closed "${a.parts[1]}"`));
            } else
              this._peek.type === n.TokenType.TAG_OPEN_END && (this._advance(), m = false);
            let T = this._peek.sourceSpan.start, w = new r.ParseSourceSpan(a.sourceSpan.start, T), g = new r.ParseSourceSpan(a.sourceSpan.start.moveBy(1), a.sourceSpan.end), N = new u.Element(d, C, [], w, w, void 0, g);
            this._pushElement(N), m && (this._popElement(d), N.endSourceSpan = w);
          }
          _pushElement(a) {
            let l = this._getParentElement();
            l && this.getTagDefinition(l.name).isClosedByChild(a.name) && this._elementStack.pop(), this._addToParent(a), this._elementStack.push(a);
          }
          _consumeEndTag(a) {
            let l = this.allowHtmComponentClosingTags && a.parts.length === 0 ? null : this._getElementFullName(a.parts[0], a.parts[1], this._getParentElement());
            if (this._getParentElement() && (this._getParentElement().endSourceSpan = a.sourceSpan), l && this.getTagDefinition(l).isVoid)
              this._errors.push(s.create(l, a.sourceSpan, `Void elements do not have end tags "${a.parts[1]}"`));
            else if (!this._popElement(l)) {
              let h = `Unexpected closing tag "${l}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this._errors.push(s.create(l, a.sourceSpan, h));
            }
          }
          _popElement(a) {
            for (let l = this._elementStack.length - 1; l >= 0; l--) {
              let h = this._elementStack[l];
              if (!a || (D.getNsPrefix(h.name) ? h.name == a : h.name.toLowerCase() == a.toLowerCase()))
                return this._elementStack.splice(l, this._elementStack.length - l), true;
              if (!this.getTagDefinition(h.name).closedByParent)
                return false;
            }
            return false;
          }
          _consumeAttr(a) {
            let l = D.mergeNsAndName(a.parts[0], a.parts[1]), h = a.sourceSpan.end, C = "", d, m;
            if (this._peek.type === n.TokenType.ATTR_QUOTE && (m = this._advance().sourceSpan.start), this._peek.type === n.TokenType.ATTR_VALUE) {
              let T = this._advance();
              C = T.parts[0], h = T.sourceSpan.end, d = T.sourceSpan;
            }
            return this._peek.type === n.TokenType.ATTR_QUOTE && (h = this._advance().sourceSpan.end, d = new r.ParseSourceSpan(m, h)), new u.Attribute(l, C, new r.ParseSourceSpan(a.sourceSpan.start, h), d, a.sourceSpan);
          }
          _getParentElement() {
            return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
          }
          _getParentElementSkippingContainers() {
            let a = null;
            for (let l = this._elementStack.length - 1; l >= 0; l--) {
              if (!D.isNgContainer(this._elementStack[l].name))
                return { parent: this._elementStack[l], container: a };
              a = this._elementStack[l];
            }
            return { parent: null, container: a };
          }
          _addToParent(a) {
            let l = this._getParentElement();
            l != null ? l.children.push(a) : this._rootNodes.push(a);
          }
          _insertBeforeContainer(a, l, h) {
            if (!l)
              this._addToParent(h), this._elementStack.push(h);
            else {
              if (a) {
                let C = a.children.indexOf(l);
                a.children[C] = h;
              } else
                this._rootNodes.push(h);
              h.children.push(l), this._elementStack.splice(this._elementStack.indexOf(l), 0, h);
            }
          }
          _getElementFullName(a, l, h) {
            return a === "" && (a = this.getTagDefinition(l).implicitNamespacePrefix || "", a === "" && h != null && (a = D.getNsPrefix(h.name))), D.mergeNsAndName(a, l);
          }
        };
        function F(a, l) {
          return a.length > 0 && a[a.length - 1] === l;
        }
      } }), Ql = I({ "node_modules/angular-html-parser/lib/compiler/src/ml_parser/html_parser.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Bs(), u = ls(), n = ls();
        e.ParseTreeResult = n.ParseTreeResult, e.TreeError = n.TreeError;
        var D = class extends u.Parser {
          constructor() {
            super(r.getHtmlTagDefinition);
          }
          parse(s, i, f) {
            let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, F = arguments.length > 4 ? arguments[4] : void 0;
            return super.parse(s, i, f, c, F);
          }
        };
        e.HtmlParser = D;
      } }), ws = I({ "node_modules/angular-html-parser/lib/angular-html-parser/src/index.js"(e) {
        q(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ql(), u = Ze();
        e.TagContentType = u.TagContentType;
        var n = null, D = () => (n || (n = new r.HtmlParser()), n);
        function s(i) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { canSelfClose: c = false, allowHtmComponentClosingTags: F = false, isTagNameCaseSensitive: a = false, getTagContentType: l } = f;
          return D().parse(i, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: c, allowHtmComponentClosingTags: F }, a, l);
        }
        e.parse = s;
      } });
      q();
      var { ParseSourceSpan: Qe, ParseLocation: cs, ParseSourceFile: Kl } = Be(), Jl = ol(), Zl = Cs(), ec = Dl(), { inferParserByLanguage: rc } = xl(), uc = kl(), Vr = Ml(), hs = jl(), { hasPragma: tc } = Ul(), { Node: nc } = Gl(), { parseIeConditionalComment: sc } = Vl(), { locStart: ic, locEnd: ac } = Xl();
      function oc(e, r, u) {
        let { canSelfClose: n, normalizeTagName: D, normalizeAttributeName: s, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f, getTagContentType: c } = r, F = ws(), { RecursiveVisitor: a, visitAll: l } = bs(), { ParseSourceSpan: h } = Be(), { getHtmlTagDefinition: C } = Bs(), { rootNodes: d, errors: m } = F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f, getTagContentType: c });
        if (u.parser === "vue")
          if (d.some((O) => O.type === "docType" && O.value === "html" || O.type === "element" && O.name.toLowerCase() === "html")) {
            n = true, D = true, s = true, i = true, f = false;
            let O = F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f });
            d = O.rootNodes, m = O.errors;
          } else {
            let O = (x) => {
              if (!x || x.type !== "element" || x.name !== "template")
                return false;
              let k = x.attrs.find((t) => t.name === "lang"), $ = k && k.value;
              return !$ || rc($, u) === "html";
            };
            if (d.some(O)) {
              let x, k = () => F.parse(e, { canSelfClose: n, allowHtmComponentClosingTags: i, isTagNameCaseSensitive: f }), $ = () => x || (x = k()), t = (o) => $().rootNodes.find((E) => {
                let { startSourceSpan: p } = E;
                return p && p.start.offset === o.startSourceSpan.start.offset;
              });
              for (let o = 0; o < d.length; o++) {
                let E = d[o], { endSourceSpan: p, startSourceSpan: A } = E;
                if (p === null)
                  m = $().errors, d[o] = t(E) || E;
                else if (O(E)) {
                  let M = $(), z = A.end.offset, V = p.start.offset;
                  for (let X of M.errors) {
                    let { offset: H } = X.span.start;
                    if (z < H && H < V) {
                      m = [X];
                      break;
                    }
                  }
                  d[o] = t(E) || E;
                }
              }
            }
          }
        if (m.length > 0) {
          let { msg: _, span: { start: O, end: x } } = m[0];
          throw ec(_, { start: { line: O.line + 1, column: O.col + 1 }, end: { line: x.line + 1, column: x.col + 1 } });
        }
        let T = (_) => {
          let O = _.name.startsWith(":") ? _.name.slice(1).split(":")[0] : null, x = _.nameSpan.toString(), k = O !== null && x.startsWith(`${O}:`), $ = k ? x.slice(O.length + 1) : x;
          _.name = $, _.namespace = O, _.hasExplicitNamespace = k;
        }, w = (_) => {
          switch (_.type) {
            case "element":
              T(_);
              for (let O of _.attrs)
                T(O), O.valueSpan ? (O.value = O.valueSpan.toString(), /["']/.test(O.value[0]) && (O.value = O.value.slice(1, -1))) : O.value = null;
              break;
            case "comment":
              _.value = _.sourceSpan.toString().slice(4, -3);
              break;
            case "text":
              _.value = _.sourceSpan.toString();
              break;
          }
        }, g = (_, O) => {
          let x = _.toLowerCase();
          return O(x) ? x : _;
        }, N = (_) => {
          if (_.type === "element" && (D && (!_.namespace || _.namespace === _.tagDefinition.implicitNamespacePrefix || hs(_)) && (_.name = g(_.name, (O) => O in uc)), s)) {
            let O = Vr[_.name] || /* @__PURE__ */ Object.create(null);
            for (let x of _.attrs)
              x.namespace || (x.name = g(x.name, (k) => _.name in Vr && (k in Vr["*"] || k in O)));
          }
        }, R = (_) => {
          _.sourceSpan && _.endSourceSpan && (_.sourceSpan = new h(_.sourceSpan.start, _.endSourceSpan.end));
        }, j = (_) => {
          if (_.type === "element") {
            let O = C(f ? _.name : _.name.toLowerCase());
            !_.namespace || _.namespace === O.implicitNamespacePrefix || hs(_) ? _.tagDefinition = O : _.tagDefinition = C("");
          }
        };
        return l(new class extends a {
          visit(_) {
            w(_), j(_), N(_), R(_);
          }
        }(), d), d;
      }
      function Ns(e, r, u) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true, { frontMatter: D, content: s } = n ? Jl(e) : { frontMatter: null, content: e }, i = new Kl(e, r.filepath), f = new cs(i, 0, 0, 0), c = f.moveBy(e.length), F = { type: "root", sourceSpan: new Qe(f, c), children: oc(s, u, r) };
        if (D) {
          let h = new cs(i, 0, 0, 0), C = h.moveBy(D.raw.length);
          D.sourceSpan = new Qe(h, C), F.children.unshift(D);
        }
        let a = new nc(F), l = (h, C) => {
          let { offset: d } = C, m = e.slice(0, d).replace(/[^\n\r]/g, " "), w = Ns(m + h, r, u, false);
          w.sourceSpan = new Qe(C, Zl(w.children).sourceSpan.end);
          let g = w.children[0];
          return g.length === d ? w.children.shift() : (g.sourceSpan = new Qe(g.sourceSpan.start.moveBy(d), g.sourceSpan.end), g.value = g.value.slice(d)), w;
        };
        return a.walk((h) => {
          if (h.type === "comment") {
            let C = sc(h, l);
            C && h.parent.replaceChild(h, C);
          }
        }), a;
      }
      function Ke() {
        let { name: e, canSelfClose: r = false, normalizeTagName: u = false, normalizeAttributeName: n = false, allowHtmComponentClosingTags: D = false, isTagNameCaseSensitive: s = false, getTagContentType: i } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        return { parse: (f, c, F) => Ns(f, Object.assign({ parser: e }, F), { canSelfClose: r, normalizeTagName: u, normalizeAttributeName: n, allowHtmComponentClosingTags: D, isTagNameCaseSensitive: s, getTagContentType: i }), hasPragma: tc, astFormat: "html", locStart: ic, locEnd: ac };
      }
      Os.exports = { parsers: { html: Ke({ name: "html", canSelfClose: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Ke({ name: "angular", canSelfClose: true }), vue: Ke({ name: "vue", canSelfClose: true, isTagNameCaseSensitive: true, getTagContentType: (e, r, u, n) => {
        if (e.toLowerCase() !== "html" && !u && (e !== "template" || n.some((D) => {
          let { name: s, value: i } = D;
          return s === "lang" && i !== "html" && i !== "" && i !== void 0;
        })))
          return ws().TagContentType.RAW_TEXT;
      } }), lwc: Ke({ name: "lwc" }) } };
    });
    return Dc();
  });
} });
var require_standalone = __commonJS({ "node_modules/prettier/standalone.js"(exports, module) {
  (function(e) {
    if (typeof exports == "object" && typeof module == "object")
      module.exports = e();
    else if (typeof define == "function" && define.amd)
      define(e);
    else {
      var f = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
      f.prettier = e();
    }
  })(function() {
    var xe = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports), pt = xe((r0, pu) => {
      var ir = function(e) {
        return e && e.Math == Math && e;
      };
      pu.exports = ir(typeof globalThis == "object" && globalThis) || ir(typeof window == "object" && window) || ir(typeof self == "object" && self) || ir(typeof global == "object" && global) || function() {
        return this;
      }() || Function("return this")();
    }), Dt = xe((n0, fu) => {
      fu.exports = function(e) {
        try {
          return !!e();
        } catch {
          return true;
        }
      };
    }), yt = xe((u0, Du) => {
      var Mo = Dt();
      Du.exports = !Mo(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), ar = xe((s0, mu) => {
      var Ro = Dt();
      mu.exports = !Ro(function() {
        var e = function() {
        }.bind();
        return typeof e != "function" || e.hasOwnProperty("prototype");
      });
    }), At = xe((i0, du) => {
      var $o = ar(), or = Function.prototype.call;
      du.exports = $o ? or.bind(or) : function() {
        return or.apply(or, arguments);
      };
    }), vu = xe((hu) => {
      var gu = {}.propertyIsEnumerable, yu = Object.getOwnPropertyDescriptor, Vo = yu && !gu.call({ 1: 2 }, 1);
      hu.f = Vo ? function(r) {
        var t = yu(this, r);
        return !!t && t.enumerable;
      } : gu;
    }), lr = xe((o0, Cu) => {
      Cu.exports = function(e, r) {
        return { enumerable: !(e & 1), configurable: !(e & 2), writable: !(e & 4), value: r };
      };
    }), mt = xe((l0, Au) => {
      var Eu = ar(), Fu = Function.prototype, Wr = Fu.call, Wo = Eu && Fu.bind.bind(Wr, Wr);
      Au.exports = Eu ? Wo : function(e) {
        return function() {
          return Wr.apply(e, arguments);
        };
      };
    }), Vt = xe((c0, xu) => {
      var Su = mt(), Ho = Su({}.toString), Go = Su("".slice);
      xu.exports = function(e) {
        return Go(Ho(e), 8, -1);
      };
    }), Tu = xe((p0, bu) => {
      var Uo = mt(), Jo = Dt(), zo = Vt(), Hr = Object, Xo = Uo("".split);
      bu.exports = Jo(function() {
        return !Hr("z").propertyIsEnumerable(0);
      }) ? function(e) {
        return zo(e) == "String" ? Xo(e, "") : Hr(e);
      } : Hr;
    }), cr = xe((f0, Bu) => {
      Bu.exports = function(e) {
        return e == null;
      };
    }), Gr = xe((D0, Nu) => {
      var Ko = cr(), Yo = TypeError;
      Nu.exports = function(e) {
        if (Ko(e))
          throw Yo("Can't call method on " + e);
        return e;
      };
    }), pr = xe((m0, wu) => {
      var Qo = Tu(), Zo = Gr();
      wu.exports = function(e) {
        return Qo(Zo(e));
      };
    }), Jr = xe((d0, _u) => {
      var Ur = typeof document == "object" && document.all, el = typeof Ur > "u" && Ur !== void 0;
      _u.exports = { all: Ur, IS_HTMLDDA: el };
    }), ot = xe((g0, Iu) => {
      var Pu = Jr(), tl = Pu.all;
      Iu.exports = Pu.IS_HTMLDDA ? function(e) {
        return typeof e == "function" || e === tl;
      } : function(e) {
        return typeof e == "function";
      };
    }), St = xe((y0, Ou) => {
      var ku = ot(), Lu = Jr(), rl = Lu.all;
      Ou.exports = Lu.IS_HTMLDDA ? function(e) {
        return typeof e == "object" ? e !== null : ku(e) || e === rl;
      } : function(e) {
        return typeof e == "object" ? e !== null : ku(e);
      };
    }), Wt = xe((h0, ju) => {
      var zr = pt(), nl = ot(), ul = function(e) {
        return nl(e) ? e : void 0;
      };
      ju.exports = function(e, r) {
        return arguments.length < 2 ? ul(zr[e]) : zr[e] && zr[e][r];
      };
    }), Xr = xe((v0, qu) => {
      var sl = mt();
      qu.exports = sl({}.isPrototypeOf);
    }), Ru = xe((C0, Mu) => {
      var il = Wt();
      Mu.exports = il("navigator", "userAgent") || "";
    }), Ju = xe((E0, Uu) => {
      var Gu = pt(), Kr = Ru(), $u = Gu.process, Vu = Gu.Deno, Wu = $u && $u.versions || Vu && Vu.version, Hu = Wu && Wu.v8, dt, fr;
      Hu && (dt = Hu.split("."), fr = dt[0] > 0 && dt[0] < 4 ? 1 : +(dt[0] + dt[1])), !fr && Kr && (dt = Kr.match(/Edge\/(\d+)/), (!dt || dt[1] >= 74) && (dt = Kr.match(/Chrome\/(\d+)/), dt && (fr = +dt[1]))), Uu.exports = fr;
    }), Yr = xe((F0, Xu) => {
      var zu = Ju(), al = Dt();
      Xu.exports = !!Object.getOwnPropertySymbols && !al(function() {
        var e = Symbol();
        return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && zu && zu < 41;
      });
    }), Qr = xe((A0, Ku) => {
      var ol = Yr();
      Ku.exports = ol && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Zr = xe((S0, Yu) => {
      var ll = Wt(), cl = ot(), pl = Xr(), fl = Qr(), Dl = Object;
      Yu.exports = fl ? function(e) {
        return typeof e == "symbol";
      } : function(e) {
        var r = ll("Symbol");
        return cl(r) && pl(r.prototype, Dl(e));
      };
    }), Dr = xe((x0, Qu) => {
      var ml = String;
      Qu.exports = function(e) {
        try {
          return ml(e);
        } catch {
          return "Object";
        }
      };
    }), Ht = xe((b0, Zu) => {
      var dl = ot(), gl = Dr(), yl = TypeError;
      Zu.exports = function(e) {
        if (dl(e))
          return e;
        throw yl(gl(e) + " is not a function");
      };
    }), mr = xe((T0, es) => {
      var hl = Ht(), vl = cr();
      es.exports = function(e, r) {
        var t = e[r];
        return vl(t) ? void 0 : hl(t);
      };
    }), rs = xe((B0, ts) => {
      var en = At(), tn = ot(), rn = St(), Cl = TypeError;
      ts.exports = function(e, r) {
        var t, s;
        if (r === "string" && tn(t = e.toString) && !rn(s = en(t, e)) || tn(t = e.valueOf) && !rn(s = en(t, e)) || r !== "string" && tn(t = e.toString) && !rn(s = en(t, e)))
          return s;
        throw Cl("Can't convert object to primitive value");
      };
    }), us = xe((N0, ns) => {
      ns.exports = false;
    }), dr = xe((w0, is) => {
      var ss = pt(), El = Object.defineProperty;
      is.exports = function(e, r) {
        try {
          El(ss, e, { value: r, configurable: true, writable: true });
        } catch {
          ss[e] = r;
        }
        return r;
      };
    }), gr = xe((_0, os) => {
      var Fl = pt(), Al = dr(), as = "__core-js_shared__", Sl = Fl[as] || Al(as, {});
      os.exports = Sl;
    }), nn = xe((P0, cs) => {
      var xl = us(), ls = gr();
      (cs.exports = function(e, r) {
        return ls[e] || (ls[e] = r !== void 0 ? r : {});
      })("versions", []).push({ version: "3.26.1", mode: xl ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), yr = xe((I0, ps) => {
      var bl = Gr(), Tl = Object;
      ps.exports = function(e) {
        return Tl(bl(e));
      };
    }), Ct = xe((k0, fs) => {
      var Bl = mt(), Nl = yr(), wl = Bl({}.hasOwnProperty);
      fs.exports = Object.hasOwn || function(r, t) {
        return wl(Nl(r), t);
      };
    }), un = xe((L0, Ds) => {
      var _l = mt(), Pl = 0, Il = Math.random(), kl = _l(1 .toString);
      Ds.exports = function(e) {
        return "Symbol(" + (e === void 0 ? "" : e) + ")_" + kl(++Pl + Il, 36);
      };
    }), bt = xe((O0, hs) => {
      var Ll = pt(), Ol = nn(), ms = Ct(), jl = un(), ds = Yr(), ys = Qr(), It = Ol("wks"), xt = Ll.Symbol, gs = xt && xt.for, ql = ys ? xt : xt && xt.withoutSetter || jl;
      hs.exports = function(e) {
        if (!ms(It, e) || !(ds || typeof It[e] == "string")) {
          var r = "Symbol." + e;
          ds && ms(xt, e) ? It[e] = xt[e] : ys && gs ? It[e] = gs(r) : It[e] = ql(r);
        }
        return It[e];
      };
    }), Fs = xe((j0, Es) => {
      var Ml = At(), vs = St(), Cs = Zr(), Rl = mr(), $l = rs(), Vl = bt(), Wl = TypeError, Hl = Vl("toPrimitive");
      Es.exports = function(e, r) {
        if (!vs(e) || Cs(e))
          return e;
        var t = Rl(e, Hl), s;
        if (t) {
          if (r === void 0 && (r = "default"), s = Ml(t, e, r), !vs(s) || Cs(s))
            return s;
          throw Wl("Can't convert object to primitive value");
        }
        return r === void 0 && (r = "number"), $l(e, r);
      };
    }), hr = xe((q0, As) => {
      var Gl = Fs(), Ul = Zr();
      As.exports = function(e) {
        var r = Gl(e, "string");
        return Ul(r) ? r : r + "";
      };
    }), bs = xe((M0, xs) => {
      var Jl = pt(), Ss = St(), sn = Jl.document, zl = Ss(sn) && Ss(sn.createElement);
      xs.exports = function(e) {
        return zl ? sn.createElement(e) : {};
      };
    }), an = xe((R0, Ts) => {
      var Xl = yt(), Kl = Dt(), Yl = bs();
      Ts.exports = !Xl && !Kl(function() {
        return Object.defineProperty(Yl("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), on = xe((Ns) => {
      var Ql = yt(), Zl = At(), ec = vu(), tc = lr(), rc = pr(), nc = hr(), uc = Ct(), sc = an(), Bs = Object.getOwnPropertyDescriptor;
      Ns.f = Ql ? Bs : function(r, t) {
        if (r = rc(r), t = nc(t), sc)
          try {
            return Bs(r, t);
          } catch {
          }
        if (uc(r, t))
          return tc(!Zl(ec.f, r, t), r[t]);
      };
    }), _s = xe((V0, ws) => {
      var ic = yt(), ac = Dt();
      ws.exports = ic && ac(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: false }).prototype != 42;
      });
    }), Tt = xe((W0, Ps) => {
      var oc = St(), lc = String, cc = TypeError;
      Ps.exports = function(e) {
        if (oc(e))
          return e;
        throw cc(lc(e) + " is not an object");
      };
    }), kt = xe((ks) => {
      var pc = yt(), fc = an(), Dc = _s(), vr = Tt(), Is = hr(), mc = TypeError, ln = Object.defineProperty, dc = Object.getOwnPropertyDescriptor, cn = "enumerable", pn = "configurable", fn = "writable";
      ks.f = pc ? Dc ? function(r, t, s) {
        if (vr(r), t = Is(t), vr(s), typeof r == "function" && t === "prototype" && "value" in s && fn in s && !s[fn]) {
          var a = dc(r, t);
          a && a[fn] && (r[t] = s.value, s = { configurable: pn in s ? s[pn] : a[pn], enumerable: cn in s ? s[cn] : a[cn], writable: false });
        }
        return ln(r, t, s);
      } : ln : function(r, t, s) {
        if (vr(r), t = Is(t), vr(s), fc)
          try {
            return ln(r, t, s);
          } catch {
          }
        if ("get" in s || "set" in s)
          throw mc("Accessors not supported");
        return "value" in s && (r[t] = s.value), r;
      };
    }), Dn = xe((G0, Ls) => {
      var gc = yt(), yc = kt(), hc = lr();
      Ls.exports = gc ? function(e, r, t) {
        return yc.f(e, r, hc(1, t));
      } : function(e, r, t) {
        return e[r] = t, e;
      };
    }), qs = xe((U0, js) => {
      var mn = yt(), vc = Ct(), Os = Function.prototype, Cc = mn && Object.getOwnPropertyDescriptor, dn = vc(Os, "name"), Ec = dn && function() {
      }.name === "something", Fc = dn && (!mn || mn && Cc(Os, "name").configurable);
      js.exports = { EXISTS: dn, PROPER: Ec, CONFIGURABLE: Fc };
    }), yn = xe((J0, Ms) => {
      var Ac = mt(), Sc = ot(), gn = gr(), xc = Ac(Function.toString);
      Sc(gn.inspectSource) || (gn.inspectSource = function(e) {
        return xc(e);
      }), Ms.exports = gn.inspectSource;
    }), Vs = xe((z0, $s) => {
      var bc = pt(), Tc = ot(), Rs = bc.WeakMap;
      $s.exports = Tc(Rs) && /native code/.test(String(Rs));
    }), Gs = xe((X0, Hs) => {
      var Bc = nn(), Nc = un(), Ws = Bc("keys");
      Hs.exports = function(e) {
        return Ws[e] || (Ws[e] = Nc(e));
      };
    }), hn = xe((K0, Us) => {
      Us.exports = {};
    }), Ks = xe((Y0, Xs) => {
      var wc = Vs(), zs = pt(), _c = St(), Pc = Dn(), vn = Ct(), Cn = gr(), Ic = Gs(), kc = hn(), Js = "Object already initialized", En = zs.TypeError, Lc = zs.WeakMap, Cr, Gt, Er, Oc = function(e) {
        return Er(e) ? Gt(e) : Cr(e, {});
      }, jc = function(e) {
        return function(r) {
          var t;
          if (!_c(r) || (t = Gt(r)).type !== e)
            throw En("Incompatible receiver, " + e + " required");
          return t;
        };
      };
      wc || Cn.state ? (gt = Cn.state || (Cn.state = new Lc()), gt.get = gt.get, gt.has = gt.has, gt.set = gt.set, Cr = function(e, r) {
        if (gt.has(e))
          throw En(Js);
        return r.facade = e, gt.set(e, r), r;
      }, Gt = function(e) {
        return gt.get(e) || {};
      }, Er = function(e) {
        return gt.has(e);
      }) : (Bt = Ic("state"), kc[Bt] = true, Cr = function(e, r) {
        if (vn(e, Bt))
          throw En(Js);
        return r.facade = e, Pc(e, Bt, r), r;
      }, Gt = function(e) {
        return vn(e, Bt) ? e[Bt] : {};
      }, Er = function(e) {
        return vn(e, Bt);
      });
      var gt, Bt;
      Xs.exports = { set: Cr, get: Gt, has: Er, enforce: Oc, getterFor: jc };
    }), An = xe((Q0, Qs) => {
      var qc = Dt(), Mc = ot(), Fr = Ct(), Fn = yt(), Rc = qs().CONFIGURABLE, $c = yn(), Ys = Ks(), Vc = Ys.enforce, Wc = Ys.get, Ar = Object.defineProperty, Hc = Fn && !qc(function() {
        return Ar(function() {
        }, "length", { value: 8 }).length !== 8;
      }), Gc = String(String).split("String"), Uc = Qs.exports = function(e, r, t) {
        String(r).slice(0, 7) === "Symbol(" && (r = "[" + String(r).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Fr(e, "name") || Rc && e.name !== r) && (Fn ? Ar(e, "name", { value: r, configurable: true }) : e.name = r), Hc && t && Fr(t, "arity") && e.length !== t.arity && Ar(e, "length", { value: t.arity });
        try {
          t && Fr(t, "constructor") && t.constructor ? Fn && Ar(e, "prototype", { writable: false }) : e.prototype && (e.prototype = void 0);
        } catch {
        }
        var s = Vc(e);
        return Fr(s, "source") || (s.source = Gc.join(typeof r == "string" ? r : "")), e;
      };
      Function.prototype.toString = Uc(function() {
        return Mc(this) && Wc(this).source || $c(this);
      }, "toString");
    }), ei = xe((Z0, Zs) => {
      var Jc = ot(), zc = kt(), Xc = An(), Kc = dr();
      Zs.exports = function(e, r, t, s) {
        s || (s = {});
        var a = s.enumerable, n = s.name !== void 0 ? s.name : r;
        if (Jc(t) && Xc(t, n, s), s.global)
          a ? e[r] = t : Kc(r, t);
        else {
          try {
            s.unsafe ? e[r] && (a = true) : delete e[r];
          } catch {
          }
          a ? e[r] = t : zc.f(e, r, { value: t, enumerable: false, configurable: !s.nonConfigurable, writable: !s.nonWritable });
        }
        return e;
      };
    }), ri = xe((ey, ti) => {
      var Yc = Math.ceil, Qc = Math.floor;
      ti.exports = Math.trunc || function(r) {
        var t = +r;
        return (t > 0 ? Qc : Yc)(t);
      };
    }), Sr = xe((ty, ni) => {
      var Zc = ri();
      ni.exports = function(e) {
        var r = +e;
        return r !== r || r === 0 ? 0 : Zc(r);
      };
    }), si = xe((ry, ui) => {
      var ep = Sr(), tp = Math.max, rp = Math.min;
      ui.exports = function(e, r) {
        var t = ep(e);
        return t < 0 ? tp(t + r, 0) : rp(t, r);
      };
    }), ai = xe((ny, ii) => {
      var np = Sr(), up = Math.min;
      ii.exports = function(e) {
        return e > 0 ? up(np(e), 9007199254740991) : 0;
      };
    }), Lt = xe((uy, oi) => {
      var sp = ai();
      oi.exports = function(e) {
        return sp(e.length);
      };
    }), pi = xe((sy, ci) => {
      var ip = pr(), ap = si(), op = Lt(), li = function(e) {
        return function(r, t, s) {
          var a = ip(r), n = op(a), u = ap(s, n), i;
          if (e && t != t) {
            for (; n > u; )
              if (i = a[u++], i != i)
                return true;
          } else
            for (; n > u; u++)
              if ((e || u in a) && a[u] === t)
                return e || u || 0;
          return !e && -1;
        };
      };
      ci.exports = { includes: li(true), indexOf: li(false) };
    }), mi = xe((iy, Di) => {
      var lp = mt(), Sn = Ct(), cp = pr(), pp = pi().indexOf, fp = hn(), fi = lp([].push);
      Di.exports = function(e, r) {
        var t = cp(e), s = 0, a = [], n;
        for (n in t)
          !Sn(fp, n) && Sn(t, n) && fi(a, n);
        for (; r.length > s; )
          Sn(t, n = r[s++]) && (~pp(a, n) || fi(a, n));
        return a;
      };
    }), gi = xe((ay, di) => {
      di.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), hi = xe((yi) => {
      var Dp = mi(), mp = gi(), dp = mp.concat("length", "prototype");
      yi.f = Object.getOwnPropertyNames || function(r) {
        return Dp(r, dp);
      };
    }), Ci = xe((vi) => {
      vi.f = Object.getOwnPropertySymbols;
    }), Fi = xe((cy, Ei) => {
      var gp = Wt(), yp = mt(), hp = hi(), vp = Ci(), Cp = Tt(), Ep = yp([].concat);
      Ei.exports = gp("Reflect", "ownKeys") || function(r) {
        var t = hp.f(Cp(r)), s = vp.f;
        return s ? Ep(t, s(r)) : t;
      };
    }), xi = xe((py, Si) => {
      var Ai = Ct(), Fp = Fi(), Ap = on(), Sp = kt();
      Si.exports = function(e, r, t) {
        for (var s = Fp(r), a = Sp.f, n = Ap.f, u = 0; u < s.length; u++) {
          var i = s[u];
          !Ai(e, i) && !(t && Ai(t, i)) && a(e, i, n(r, i));
        }
      };
    }), Ti = xe((fy, bi) => {
      var xp = Dt(), bp = ot(), Tp = /#|\.prototype\./, Ut = function(e, r) {
        var t = Np[Bp(e)];
        return t == _p ? true : t == wp ? false : bp(r) ? xp(r) : !!r;
      }, Bp = Ut.normalize = function(e) {
        return String(e).replace(Tp, ".").toLowerCase();
      }, Np = Ut.data = {}, wp = Ut.NATIVE = "N", _p = Ut.POLYFILL = "P";
      bi.exports = Ut;
    }), Jt = xe((Dy, Bi) => {
      var xn = pt(), Pp = on().f, Ip = Dn(), kp = ei(), Lp = dr(), Op = xi(), jp = Ti();
      Bi.exports = function(e, r) {
        var t = e.target, s = e.global, a = e.stat, n, u, i, l, p, y;
        if (s ? u = xn : a ? u = xn[t] || Lp(t, {}) : u = (xn[t] || {}).prototype, u)
          for (i in r) {
            if (p = r[i], e.dontCallGetSet ? (y = Pp(u, i), l = y && y.value) : l = u[i], n = jp(s ? i : t + (a ? "." : "#") + i, e.forced), !n && l !== void 0) {
              if (typeof p == typeof l)
                continue;
              Op(p, l);
            }
            (e.sham || l && l.sham) && Ip(p, "sham", true), kp(u, i, p, e);
          }
      };
    }), bn = xe((my, Ni) => {
      var qp = Vt();
      Ni.exports = Array.isArray || function(r) {
        return qp(r) == "Array";
      };
    }), _i = xe((dy, wi) => {
      var Mp = TypeError, Rp = 9007199254740991;
      wi.exports = function(e) {
        if (e > Rp)
          throw Mp("Maximum allowed index exceeded");
        return e;
      };
    }), Ii = xe((gy, Pi) => {
      var $p = Vt(), Vp = mt();
      Pi.exports = function(e) {
        if ($p(e) === "Function")
          return Vp(e);
      };
    }), Tn = xe((yy, Li) => {
      var ki = Ii(), Wp = Ht(), Hp = ar(), Gp = ki(ki.bind);
      Li.exports = function(e, r) {
        return Wp(e), r === void 0 ? e : Hp ? Gp(e, r) : function() {
          return e.apply(r, arguments);
        };
      };
    }), Bn = xe((hy, ji) => {
      var Up = bn(), Jp = Lt(), zp = _i(), Xp = Tn(), Oi = function(e, r, t, s, a, n, u, i) {
        for (var l = a, p = 0, y = u ? Xp(u, i) : false, h, g; p < s; )
          p in t && (h = y ? y(t[p], p, r) : t[p], n > 0 && Up(h) ? (g = Jp(h), l = Oi(e, r, h, g, l, n - 1) - 1) : (zp(l + 1), e[l] = h), l++), p++;
        return l;
      };
      ji.exports = Oi;
    }), Ri = xe((vy, Mi) => {
      var Kp = bt(), Yp = Kp("toStringTag"), qi = {};
      qi[Yp] = "z", Mi.exports = String(qi) === "[object z]";
    }), Nn = xe((Cy, $i) => {
      var Qp = Ri(), Zp = ot(), xr = Vt(), ef = bt(), tf = ef("toStringTag"), rf = Object, nf = xr(function() {
        return arguments;
      }()) == "Arguments", uf = function(e, r) {
        try {
          return e[r];
        } catch {
        }
      };
      $i.exports = Qp ? xr : function(e) {
        var r, t, s;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = uf(r = rf(e), tf)) == "string" ? t : nf ? xr(r) : (s = xr(r)) == "Object" && Zp(r.callee) ? "Arguments" : s;
      };
    }), Ji = xe((Ey, Ui) => {
      var sf = mt(), af = Dt(), Vi = ot(), of = Nn(), lf = Wt(), cf = yn(), Wi = function() {
      }, pf = [], Hi = lf("Reflect", "construct"), wn = /^\s*(?:class|function)\b/, ff = sf(wn.exec), Df = !wn.exec(Wi), zt = function(r) {
        if (!Vi(r))
          return false;
        try {
          return Hi(Wi, pf, r), true;
        } catch {
          return false;
        }
      }, Gi = function(r) {
        if (!Vi(r))
          return false;
        switch (of(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return Df || !!ff(wn, cf(r));
        } catch {
          return true;
        }
      };
      Gi.sham = true, Ui.exports = !Hi || af(function() {
        var e;
        return zt(zt.call) || !zt(Object) || !zt(function() {
          e = true;
        }) || e;
      }) ? Gi : zt;
    }), Yi = xe((Fy, Ki) => {
      var zi = bn(), mf = Ji(), df = St(), gf = bt(), yf = gf("species"), Xi = Array;
      Ki.exports = function(e) {
        var r;
        return zi(e) && (r = e.constructor, mf(r) && (r === Xi || zi(r.prototype)) ? r = void 0 : df(r) && (r = r[yf], r === null && (r = void 0))), r === void 0 ? Xi : r;
      };
    }), _n = xe((Ay, Qi) => {
      var hf = Yi();
      Qi.exports = function(e, r) {
        return new (hf(e))(r === 0 ? 0 : r);
      };
    }), Zi = xe(() => {
      var vf = Jt(), Cf = Bn(), Ef = Ht(), Ff = yr(), Af = Lt(), Sf = _n();
      vf({ target: "Array", proto: true }, { flatMap: function(r) {
        var t = Ff(this), s = Af(t), a;
        return Ef(r), a = Sf(t, 0), a.length = Cf(a, t, t, s, 0, 1, r, arguments.length > 1 ? arguments[1] : void 0), a;
      } });
    }), Pn = xe((by, ea) => {
      ea.exports = {};
    }), ra = xe((Ty, ta) => {
      var xf = bt(), bf = Pn(), Tf = xf("iterator"), Bf = Array.prototype;
      ta.exports = function(e) {
        return e !== void 0 && (bf.Array === e || Bf[Tf] === e);
      };
    }), In = xe((By, ua) => {
      var Nf = Nn(), na = mr(), wf = cr(), _f = Pn(), Pf = bt(), If = Pf("iterator");
      ua.exports = function(e) {
        if (!wf(e))
          return na(e, If) || na(e, "@@iterator") || _f[Nf(e)];
      };
    }), ia = xe((Ny, sa) => {
      var kf = At(), Lf = Ht(), Of = Tt(), jf = Dr(), qf = In(), Mf = TypeError;
      sa.exports = function(e, r) {
        var t = arguments.length < 2 ? qf(e) : r;
        if (Lf(t))
          return Of(kf(t, e));
        throw Mf(jf(e) + " is not iterable");
      };
    }), la = xe((wy, oa) => {
      var Rf = At(), aa = Tt(), $f = mr();
      oa.exports = function(e, r, t) {
        var s, a;
        aa(e);
        try {
          if (s = $f(e, "return"), !s) {
            if (r === "throw")
              throw t;
            return t;
          }
          s = Rf(s, e);
        } catch (n) {
          a = true, s = n;
        }
        if (r === "throw")
          throw t;
        if (a)
          throw s;
        return aa(s), t;
      };
    }), ma = xe((_y, Da) => {
      var Vf = Tn(), Wf = At(), Hf = Tt(), Gf = Dr(), Uf = ra(), Jf = Lt(), ca = Xr(), zf = ia(), Xf = In(), pa = la(), Kf = TypeError, br = function(e, r) {
        this.stopped = e, this.result = r;
      }, fa = br.prototype;
      Da.exports = function(e, r, t) {
        var s = t && t.that, a = !!(t && t.AS_ENTRIES), n = !!(t && t.IS_RECORD), u = !!(t && t.IS_ITERATOR), i = !!(t && t.INTERRUPTED), l = Vf(r, s), p, y, h, g, c, f, F, _ = function(E) {
          return p && pa(p, "normal", E), new br(true, E);
        }, w = function(E) {
          return a ? (Hf(E), i ? l(E[0], E[1], _) : l(E[0], E[1])) : i ? l(E, _) : l(E);
        };
        if (n)
          p = e.iterator;
        else if (u)
          p = e;
        else {
          if (y = Xf(e), !y)
            throw Kf(Gf(e) + " is not iterable");
          if (Uf(y)) {
            for (h = 0, g = Jf(e); g > h; h++)
              if (c = w(e[h]), c && ca(fa, c))
                return c;
            return new br(false);
          }
          p = zf(e, y);
        }
        for (f = n ? e.next : p.next; !(F = Wf(f, p)).done; ) {
          try {
            c = w(F.value);
          } catch (E) {
            pa(p, "throw", E);
          }
          if (typeof c == "object" && c && ca(fa, c))
            return c;
        }
        return new br(false);
      };
    }), ga = xe((Py, da) => {
      var Yf = hr(), Qf = kt(), Zf = lr();
      da.exports = function(e, r, t) {
        var s = Yf(r);
        s in e ? Qf.f(e, s, Zf(0, t)) : e[s] = t;
      };
    }), ya = xe(() => {
      var eD = Jt(), tD = ma(), rD = ga();
      eD({ target: "Object", stat: true }, { fromEntries: function(r) {
        var t = {};
        return tD(r, function(s, a) {
          rD(t, s, a);
        }, { AS_ENTRIES: true }), t;
      } });
    }), Ca = xe((Ly, va) => {
      var ha = An(), nD = kt();
      va.exports = function(e, r, t) {
        return t.get && ha(t.get, r, { getter: true }), t.set && ha(t.set, r, { setter: true }), nD.f(e, r, t);
      };
    }), Fa = xe((Oy, Ea) => {
      var uD = Tt();
      Ea.exports = function() {
        var e = uD(this), r = "";
        return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
      };
    }), xa = xe(() => {
      var sD = pt(), iD = yt(), aD = Ca(), oD = Fa(), lD = Dt(), Aa = sD.RegExp, Sa = Aa.prototype, cD = iD && lD(function() {
        var e = true;
        try {
          Aa(".", "d");
        } catch {
          e = false;
        }
        var r = {}, t = "", s = e ? "dgimsy" : "gimsy", a = function(l, p) {
          Object.defineProperty(r, l, { get: function() {
            return t += p, true;
          } });
        }, n = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        e && (n.hasIndices = "d");
        for (var u in n)
          a(u, n[u]);
        var i = Object.getOwnPropertyDescriptor(Sa, "flags").get.call(r);
        return i !== s || t !== s;
      });
      cD && aD(Sa, "flags", { configurable: true, get: oD });
    }), ba = xe(() => {
      var pD = Jt(), kn = pt();
      pD({ global: true, forced: kn.globalThis !== kn }, { globalThis: kn });
    }), Ta = xe(() => {
      ba();
    }), Ba = xe(() => {
      var fD = Jt(), DD = Bn(), mD = yr(), dD = Lt(), gD = Sr(), yD = _n();
      fD({ target: "Array", proto: true }, { flat: function() {
        var r = arguments.length ? arguments[0] : void 0, t = mD(this), s = dD(t), a = yD(t, 0);
        return a.length = DD(a, t, t, s, 0, r === void 0 ? 1 : gD(r)), a;
      } });
    }), e0 = xe((Uy, jo) => {
      var hD = ["cliName", "cliCategory", "cliDescription"], vD = ["_"], CD = ["languageId"];
      function Hn(e, r) {
        if (e == null)
          return {};
        var t = ED(e, r), s, a;
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (a = 0; a < n.length; a++)
            s = n[a], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (t[s] = e[s]);
        }
        return t;
      }
      function ED(e, r) {
        if (e == null)
          return {};
        var t = {}, s = Object.keys(e), a, n;
        for (n = 0; n < s.length; n++)
          a = s[n], !(r.indexOf(a) >= 0) && (t[a] = e[a]);
        return t;
      }
      Zi(), ya(), xa(), Ta(), Ba();
      var FD = Object.create, _r = Object.defineProperty, AD = Object.getOwnPropertyDescriptor, Gn = Object.getOwnPropertyNames, SD = Object.getPrototypeOf, xD = Object.prototype.hasOwnProperty, ht = (e, r) => function() {
        return e && (r = (0, e[Gn(e)[0]])(e = 0)), r;
      }, te = (e, r) => function() {
        return r || (0, e[Gn(e)[0]])((r = { exports: {} }).exports, r), r.exports;
      }, Kt = (e, r) => {
        for (var t in r)
          _r(e, t, { get: r[t], enumerable: true });
      }, Pa = (e, r, t, s) => {
        if (r && typeof r == "object" || typeof r == "function")
          for (let a of Gn(r))
            !xD.call(e, a) && a !== t && _r(e, a, { get: () => r[a], enumerable: !(s = AD(r, a)) || s.enumerable });
        return e;
      }, bD = (e, r, t) => (t = e != null ? FD(SD(e)) : {}, Pa(r || !e || !e.__esModule ? _r(t, "default", { value: e, enumerable: true }) : t, e)), ft = (e) => Pa(_r({}, "__esModule", { value: true }), e), wt, ne = ht({ "<define:process>"() {
        wt = { env: {}, argv: [] };
      } }), Ia = te({ "package.json"(e, r) {
        r.exports = { version: "2.8.7" };
      } }), TD = te({ "node_modules/diff/lib/diff/base.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.default = r;
        function r() {
        }
        r.prototype = { diff: function(n, u) {
          var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = i.callback;
          typeof i == "function" && (l = i, i = {}), this.options = i;
          var p = this;
          function y(N) {
            return l ? (setTimeout(function() {
              l(void 0, N);
            }, 0), true) : N;
          }
          n = this.castInput(n), u = this.castInput(u), n = this.removeEmpty(this.tokenize(n)), u = this.removeEmpty(this.tokenize(u));
          var h = u.length, g = n.length, c = 1, f = h + g, F = [{ newPos: -1, components: [] }], _ = this.extractCommon(F[0], u, n, 0);
          if (F[0].newPos + 1 >= h && _ + 1 >= g)
            return y([{ value: this.join(u), count: u.length }]);
          function w() {
            for (var N = -1 * c; N <= c; N += 2) {
              var x = void 0, I = F[N - 1], P = F[N + 1], $ = (P ? P.newPos : 0) - N;
              I && (F[N - 1] = void 0);
              var D = I && I.newPos + 1 < h, T = P && 0 <= $ && $ < g;
              if (!D && !T) {
                F[N] = void 0;
                continue;
              }
              if (!D || T && I.newPos < P.newPos ? (x = s(P), p.pushComponent(x.components, void 0, true)) : (x = I, x.newPos++, p.pushComponent(x.components, true, void 0)), $ = p.extractCommon(x, u, n, N), x.newPos + 1 >= h && $ + 1 >= g)
                return y(t(p, x.components, u, n, p.useLongestToken));
              F[N] = x;
            }
            c++;
          }
          if (l)
            (function N() {
              setTimeout(function() {
                if (c > f)
                  return l();
                w() || N();
              }, 0);
            })();
          else
            for (; c <= f; ) {
              var E = w();
              if (E)
                return E;
            }
        }, pushComponent: function(n, u, i) {
          var l = n[n.length - 1];
          l && l.added === u && l.removed === i ? n[n.length - 1] = { count: l.count + 1, added: u, removed: i } : n.push({ count: 1, added: u, removed: i });
        }, extractCommon: function(n, u, i, l) {
          for (var p = u.length, y = i.length, h = n.newPos, g = h - l, c = 0; h + 1 < p && g + 1 < y && this.equals(u[h + 1], i[g + 1]); )
            h++, g++, c++;
          return c && n.components.push({ count: c }), n.newPos = h, g;
        }, equals: function(n, u) {
          return this.options.comparator ? this.options.comparator(n, u) : n === u || this.options.ignoreCase && n.toLowerCase() === u.toLowerCase();
        }, removeEmpty: function(n) {
          for (var u = [], i = 0; i < n.length; i++)
            n[i] && u.push(n[i]);
          return u;
        }, castInput: function(n) {
          return n;
        }, tokenize: function(n) {
          return n.split("");
        }, join: function(n) {
          return n.join("");
        } };
        function t(a, n, u, i, l) {
          for (var p = 0, y = n.length, h = 0, g = 0; p < y; p++) {
            var c = n[p];
            if (c.removed) {
              if (c.value = a.join(i.slice(g, g + c.count)), g += c.count, p && n[p - 1].added) {
                var F = n[p - 1];
                n[p - 1] = n[p], n[p] = F;
              }
            } else {
              if (!c.added && l) {
                var f = u.slice(h, h + c.count);
                f = f.map(function(w, E) {
                  var N = i[g + E];
                  return N.length > w.length ? N : w;
                }), c.value = a.join(f);
              } else
                c.value = a.join(u.slice(h, h + c.count));
              h += c.count, c.added || (g += c.count);
            }
          }
          var _ = n[y - 1];
          return y > 1 && typeof _.value == "string" && (_.added || _.removed) && a.equals("", _.value) && (n[y - 2].value += _.value, n.pop()), n;
        }
        function s(a) {
          return { newPos: a.newPos, components: a.components.slice(0) };
        }
      } }), BD = te({ "node_modules/diff/lib/diff/array.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.diffArrays = a, e.arrayDiff = void 0;
        var r = t(TD());
        function t(n) {
          return n && n.__esModule ? n : { default: n };
        }
        var s = new r.default();
        e.arrayDiff = s, s.tokenize = function(n) {
          return n.slice();
        }, s.join = s.removeEmpty = function(n) {
          return n;
        };
        function a(n, u, i) {
          return s.diff(n, u, i);
        }
      } }), Un = te({ "src/document/doc-builders.js"(e, r) {
        ne();
        function t(C) {
          return { type: "concat", parts: C };
        }
        function s(C) {
          return { type: "indent", contents: C };
        }
        function a(C, o) {
          return { type: "align", contents: o, n: C };
        }
        function n(C) {
          let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: o.id, contents: C, break: Boolean(o.shouldBreak), expandedStates: o.expandedStates };
        }
        function u(C) {
          return a(Number.NEGATIVE_INFINITY, C);
        }
        function i(C) {
          return a({ type: "root" }, C);
        }
        function l(C) {
          return a(-1, C);
        }
        function p(C, o) {
          return n(C[0], Object.assign(Object.assign({}, o), {}, { expandedStates: C }));
        }
        function y(C) {
          return { type: "fill", parts: C };
        }
        function h(C, o) {
          let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: C, flatContents: o, groupId: d.groupId };
        }
        function g(C, o) {
          return { type: "indent-if-break", contents: C, groupId: o.groupId, negate: o.negate };
        }
        function c(C) {
          return { type: "line-suffix", contents: C };
        }
        var f = { type: "line-suffix-boundary" }, F = { type: "break-parent" }, _ = { type: "trim" }, w = { type: "line", hard: true }, E = { type: "line", hard: true, literal: true }, N = { type: "line" }, x = { type: "line", soft: true }, I = t([w, F]), P = t([E, F]), $ = { type: "cursor", placeholder: Symbol("cursor") };
        function D(C, o) {
          let d = [];
          for (let v = 0; v < o.length; v++)
            v !== 0 && d.push(C), d.push(o[v]);
          return t(d);
        }
        function T(C, o, d) {
          let v = C;
          if (o > 0) {
            for (let S = 0; S < Math.floor(o / d); ++S)
              v = s(v);
            v = a(o % d, v), v = a(Number.NEGATIVE_INFINITY, v);
          }
          return v;
        }
        function m(C, o) {
          return { type: "label", label: C, contents: o };
        }
        r.exports = { concat: t, join: D, line: N, softline: x, hardline: I, literalline: P, group: n, conditionalGroup: p, fill: y, lineSuffix: c, lineSuffixBoundary: f, cursor: $, breakParent: F, ifBreak: h, trim: _, indent: s, indentIfBreak: g, align: a, addAlignmentToDoc: T, markAsRoot: i, dedentToRoot: u, dedent: l, hardlineWithoutBreakParent: w, literallineWithoutBreakParent: E, label: m };
      } }), Jn = te({ "src/common/end-of-line.js"(e, r) {
        ne();
        function t(u) {
          let i = u.indexOf("\r");
          return i >= 0 ? u.charAt(i + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function s(u) {
          switch (u) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function a(u, i) {
          let l;
          switch (i) {
            case `
`:
              l = /\n/g;
              break;
            case "\r":
              l = /\r/g;
              break;
            case `\r
`:
              l = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(i)}.`);
          }
          let p = u.match(l);
          return p ? p.length : 0;
        }
        function n(u) {
          return u.replace(/\r\n?/g, `
`);
        }
        r.exports = { guessEndOfLine: t, convertEndOfLineToChars: s, countEndOfLineChars: a, normalizeEndOfLine: n };
      } }), lt = te({ "src/utils/get-last.js"(e, r) {
        ne();
        var t = (s) => s[s.length - 1];
        r.exports = t;
      } });
      function ND() {
        let { onlyFirst: e = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      }
      var wD = ht({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        ne();
      } });
      function _D(e) {
        if (typeof e != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
        return e.replace(ND(), "");
      }
      var PD = ht({ "node_modules/strip-ansi/index.js"() {
        ne(), wD();
      } });
      function ID(e) {
        return Number.isInteger(e) ? e >= 4352 && (e <= 4447 || e === 9001 || e === 9002 || 11904 <= e && e <= 12871 && e !== 12351 || 12880 <= e && e <= 19903 || 19968 <= e && e <= 42182 || 43360 <= e && e <= 43388 || 44032 <= e && e <= 55203 || 63744 <= e && e <= 64255 || 65040 <= e && e <= 65049 || 65072 <= e && e <= 65131 || 65281 <= e && e <= 65376 || 65504 <= e && e <= 65510 || 110592 <= e && e <= 110593 || 127488 <= e && e <= 127569 || 131072 <= e && e <= 262141) : false;
      }
      var kD = ht({ "node_modules/is-fullwidth-code-point/index.js"() {
        ne();
      } }), LD = te({ "node_modules/emoji-regex/index.js"(e, r) {
        ne(), r.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), ka = {};
      Kt(ka, { default: () => OD });
      function OD(e) {
        if (typeof e != "string" || e.length === 0 || (e = _D(e), e.length === 0))
          return 0;
        e = e.replace((0, La.default)(), "  ");
        let r = 0;
        for (let t = 0; t < e.length; t++) {
          let s = e.codePointAt(t);
          s <= 31 || s >= 127 && s <= 159 || s >= 768 && s <= 879 || (s > 65535 && t++, r += ID(s) ? 2 : 1);
        }
        return r;
      }
      var La, jD = ht({ "node_modules/string-width/index.js"() {
        ne(), PD(), kD(), La = bD(LD());
      } }), Oa = te({ "src/utils/get-string-width.js"(e, r) {
        ne();
        var t = (jD(), ft(ka)).default, s = /[^\x20-\x7F]/;
        function a(n) {
          return n ? s.test(n) ? t(n) : n.length : 0;
        }
        r.exports = a;
      } }), Yt = te({ "src/document/doc-utils.js"(e, r) {
        ne();
        var t = lt(), { literalline: s, join: a } = Un(), n = (o) => Array.isArray(o) || o && o.type === "concat", u = (o) => {
          if (Array.isArray(o))
            return o;
          if (o.type !== "concat" && o.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return o.parts;
        }, i = {};
        function l(o, d, v, S) {
          let b = [o];
          for (; b.length > 0; ) {
            let B = b.pop();
            if (B === i) {
              v(b.pop());
              continue;
            }
            if (v && b.push(B, i), !d || d(B) !== false)
              if (n(B) || B.type === "fill") {
                let k = u(B);
                for (let M = k.length, R = M - 1; R >= 0; --R)
                  b.push(k[R]);
              } else if (B.type === "if-break")
                B.flatContents && b.push(B.flatContents), B.breakContents && b.push(B.breakContents);
              else if (B.type === "group" && B.expandedStates)
                if (S)
                  for (let k = B.expandedStates.length, M = k - 1; M >= 0; --M)
                    b.push(B.expandedStates[M]);
                else
                  b.push(B.contents);
              else
                B.contents && b.push(B.contents);
          }
        }
        function p(o, d) {
          let v = /* @__PURE__ */ new Map();
          return S(o);
          function S(B) {
            if (v.has(B))
              return v.get(B);
            let k = b(B);
            return v.set(B, k), k;
          }
          function b(B) {
            if (Array.isArray(B))
              return d(B.map(S));
            if (B.type === "concat" || B.type === "fill") {
              let k = B.parts.map(S);
              return d(Object.assign(Object.assign({}, B), {}, { parts: k }));
            }
            if (B.type === "if-break") {
              let k = B.breakContents && S(B.breakContents), M = B.flatContents && S(B.flatContents);
              return d(Object.assign(Object.assign({}, B), {}, { breakContents: k, flatContents: M }));
            }
            if (B.type === "group" && B.expandedStates) {
              let k = B.expandedStates.map(S), M = k[0];
              return d(Object.assign(Object.assign({}, B), {}, { contents: M, expandedStates: k }));
            }
            if (B.contents) {
              let k = S(B.contents);
              return d(Object.assign(Object.assign({}, B), {}, { contents: k }));
            }
            return d(B);
          }
        }
        function y(o, d, v) {
          let S = v, b = false;
          function B(k) {
            let M = d(k);
            if (M !== void 0 && (b = true, S = M), b)
              return false;
          }
          return l(o, B), S;
        }
        function h(o) {
          if (o.type === "group" && o.break || o.type === "line" && o.hard || o.type === "break-parent")
            return true;
        }
        function g(o) {
          return y(o, h, false);
        }
        function c(o) {
          if (o.length > 0) {
            let d = t(o);
            !d.expandedStates && !d.break && (d.break = "propagated");
          }
          return null;
        }
        function f(o) {
          let d = /* @__PURE__ */ new Set(), v = [];
          function S(B) {
            if (B.type === "break-parent" && c(v), B.type === "group") {
              if (v.push(B), d.has(B))
                return false;
              d.add(B);
            }
          }
          function b(B) {
            B.type === "group" && v.pop().break && c(v);
          }
          l(o, S, b, true);
        }
        function F(o) {
          return o.type === "line" && !o.hard ? o.soft ? "" : " " : o.type === "if-break" ? o.flatContents || "" : o;
        }
        function _(o) {
          return p(o, F);
        }
        var w = (o, d) => o && o.type === "line" && o.hard && d && d.type === "break-parent";
        function E(o) {
          if (!o)
            return o;
          if (n(o) || o.type === "fill") {
            let d = u(o);
            for (; d.length > 1 && w(...d.slice(-2)); )
              d.length -= 2;
            if (d.length > 0) {
              let v = E(t(d));
              d[d.length - 1] = v;
            }
            return Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
          }
          switch (o.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let d = E(o.contents);
              return Object.assign(Object.assign({}, o), {}, { contents: d });
            }
            case "if-break": {
              let d = E(o.breakContents), v = E(o.flatContents);
              return Object.assign(Object.assign({}, o), {}, { breakContents: d, flatContents: v });
            }
          }
          return o;
        }
        function N(o) {
          return E(I(o));
        }
        function x(o) {
          switch (o.type) {
            case "fill":
              if (o.parts.every((v) => v === ""))
                return "";
              break;
            case "group":
              if (!o.contents && !o.id && !o.break && !o.expandedStates)
                return "";
              if (o.contents.type === "group" && o.contents.id === o.id && o.contents.break === o.break && o.contents.expandedStates === o.expandedStates)
                return o.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!o.contents)
                return "";
              break;
            case "if-break":
              if (!o.flatContents && !o.breakContents)
                return "";
              break;
          }
          if (!n(o))
            return o;
          let d = [];
          for (let v of u(o)) {
            if (!v)
              continue;
            let [S, ...b] = n(v) ? u(v) : [v];
            typeof S == "string" && typeof t(d) == "string" ? d[d.length - 1] += S : d.push(S), d.push(...b);
          }
          return d.length === 0 ? "" : d.length === 1 ? d[0] : Array.isArray(o) ? d : Object.assign(Object.assign({}, o), {}, { parts: d });
        }
        function I(o) {
          return p(o, (d) => x(d));
        }
        function P(o) {
          let d = [], v = o.filter(Boolean);
          for (; v.length > 0; ) {
            let S = v.shift();
            if (S) {
              if (n(S)) {
                v.unshift(...u(S));
                continue;
              }
              if (d.length > 0 && typeof t(d) == "string" && typeof S == "string") {
                d[d.length - 1] += S;
                continue;
              }
              d.push(S);
            }
          }
          return d;
        }
        function $(o) {
          return p(o, (d) => Array.isArray(d) ? P(d) : d.parts ? Object.assign(Object.assign({}, d), {}, { parts: P(d.parts) }) : d);
        }
        function D(o) {
          return p(o, (d) => typeof d == "string" && d.includes(`
`) ? T(d) : d);
        }
        function T(o) {
          let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s;
          return a(d, o.split(`
`)).parts;
        }
        function m(o) {
          if (o.type === "line")
            return true;
        }
        function C(o) {
          return y(o, m, false);
        }
        r.exports = { isConcat: n, getDocParts: u, willBreak: g, traverseDoc: l, findInDoc: y, mapDoc: p, propagateBreaks: f, removeLines: _, stripTrailingHardline: N, normalizeParts: P, normalizeDoc: $, cleanDoc: I, replaceTextEndOfLine: T, replaceEndOfLine: D, canBreak: C };
      } }), qD = te({ "src/document/doc-printer.js"(e, r) {
        ne();
        var { convertEndOfLineToChars: t } = Jn(), s = lt(), a = Oa(), { fill: n, cursor: u, indent: i } = Un(), { isConcat: l, getDocParts: p } = Yt(), y, h = 1, g = 2;
        function c() {
          return { value: "", length: 0, queue: [] };
        }
        function f(x, I) {
          return _(x, { type: "indent" }, I);
        }
        function F(x, I, P) {
          return I === Number.NEGATIVE_INFINITY ? x.root || c() : I < 0 ? _(x, { type: "dedent" }, P) : I ? I.type === "root" ? Object.assign(Object.assign({}, x), {}, { root: x }) : _(x, { type: typeof I == "string" ? "stringAlign" : "numberAlign", n: I }, P) : x;
        }
        function _(x, I, P) {
          let $ = I.type === "dedent" ? x.queue.slice(0, -1) : [...x.queue, I], D = "", T = 0, m = 0, C = 0;
          for (let k of $)
            switch (k.type) {
              case "indent":
                v(), P.useTabs ? o(1) : d(P.tabWidth);
                break;
              case "stringAlign":
                v(), D += k.n, T += k.n.length;
                break;
              case "numberAlign":
                m += 1, C += k.n;
                break;
              default:
                throw new Error(`Unexpected type '${k.type}'`);
            }
          return b(), Object.assign(Object.assign({}, x), {}, { value: D, length: T, queue: $ });
          function o(k) {
            D += "	".repeat(k), T += P.tabWidth * k;
          }
          function d(k) {
            D += " ".repeat(k), T += k;
          }
          function v() {
            P.useTabs ? S() : b();
          }
          function S() {
            m > 0 && o(m), B();
          }
          function b() {
            C > 0 && d(C), B();
          }
          function B() {
            m = 0, C = 0;
          }
        }
        function w(x) {
          if (x.length === 0)
            return 0;
          let I = 0;
          for (; x.length > 0 && typeof s(x) == "string" && /^[\t ]*$/.test(s(x)); )
            I += x.pop().length;
          if (x.length > 0 && typeof s(x) == "string") {
            let P = s(x).replace(/[\t ]*$/, "");
            I += s(x).length - P.length, x[x.length - 1] = P;
          }
          return I;
        }
        function E(x, I, P, $, D) {
          let T = I.length, m = [x], C = [];
          for (; P >= 0; ) {
            if (m.length === 0) {
              if (T === 0)
                return true;
              m.push(I[--T]);
              continue;
            }
            let { mode: o, doc: d } = m.pop();
            if (typeof d == "string")
              C.push(d), P -= a(d);
            else if (l(d) || d.type === "fill") {
              let v = p(d);
              for (let S = v.length - 1; S >= 0; S--)
                m.push({ mode: o, doc: v[S] });
            } else
              switch (d.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  m.push({ mode: o, doc: d.contents });
                  break;
                case "trim":
                  P += w(C);
                  break;
                case "group": {
                  if (D && d.break)
                    return false;
                  let v = d.break ? h : o, S = d.expandedStates && v === h ? s(d.expandedStates) : d.contents;
                  m.push({ mode: v, doc: S });
                  break;
                }
                case "if-break": {
                  let S = (d.groupId ? y[d.groupId] || g : o) === h ? d.breakContents : d.flatContents;
                  S && m.push({ mode: o, doc: S });
                  break;
                }
                case "line":
                  if (o === h || d.hard)
                    return true;
                  d.soft || (C.push(" "), P--);
                  break;
                case "line-suffix":
                  $ = true;
                  break;
                case "line-suffix-boundary":
                  if ($)
                    return false;
                  break;
              }
          }
          return false;
        }
        function N(x, I) {
          y = {};
          let P = I.printWidth, $ = t(I.endOfLine), D = 0, T = [{ ind: c(), mode: h, doc: x }], m = [], C = false, o = [];
          for (; T.length > 0; ) {
            let { ind: v, mode: S, doc: b } = T.pop();
            if (typeof b == "string") {
              let B = $ !== `
` ? b.replace(/\n/g, $) : b;
              m.push(B), D += a(B);
            } else if (l(b)) {
              let B = p(b);
              for (let k = B.length - 1; k >= 0; k--)
                T.push({ ind: v, mode: S, doc: B[k] });
            } else
              switch (b.type) {
                case "cursor":
                  m.push(u.placeholder);
                  break;
                case "indent":
                  T.push({ ind: f(v, I), mode: S, doc: b.contents });
                  break;
                case "align":
                  T.push({ ind: F(v, b.n, I), mode: S, doc: b.contents });
                  break;
                case "trim":
                  D -= w(m);
                  break;
                case "group":
                  switch (S) {
                    case g:
                      if (!C) {
                        T.push({ ind: v, mode: b.break ? h : g, doc: b.contents });
                        break;
                      }
                    case h: {
                      C = false;
                      let B = { ind: v, mode: g, doc: b.contents }, k = P - D, M = o.length > 0;
                      if (!b.break && E(B, T, k, M))
                        T.push(B);
                      else if (b.expandedStates) {
                        let R = s(b.expandedStates);
                        if (b.break) {
                          T.push({ ind: v, mode: h, doc: R });
                          break;
                        } else
                          for (let q = 1; q < b.expandedStates.length + 1; q++)
                            if (q >= b.expandedStates.length) {
                              T.push({ ind: v, mode: h, doc: R });
                              break;
                            } else {
                              let J = b.expandedStates[q], L = { ind: v, mode: g, doc: J };
                              if (E(L, T, k, M)) {
                                T.push(L);
                                break;
                              }
                            }
                      } else
                        T.push({ ind: v, mode: h, doc: b.contents });
                      break;
                    }
                  }
                  b.id && (y[b.id] = s(T).mode);
                  break;
                case "fill": {
                  let B = P - D, { parts: k } = b;
                  if (k.length === 0)
                    break;
                  let [M, R] = k, q = { ind: v, mode: g, doc: M }, J = { ind: v, mode: h, doc: M }, L = E(q, [], B, o.length > 0, true);
                  if (k.length === 1) {
                    L ? T.push(q) : T.push(J);
                    break;
                  }
                  let Q = { ind: v, mode: g, doc: R }, V = { ind: v, mode: h, doc: R };
                  if (k.length === 2) {
                    L ? T.push(Q, q) : T.push(V, J);
                    break;
                  }
                  k.splice(0, 2);
                  let j = { ind: v, mode: S, doc: n(k) }, Y = k[0];
                  E({ ind: v, mode: g, doc: [M, R, Y] }, [], B, o.length > 0, true) ? T.push(j, Q, q) : L ? T.push(j, V, q) : T.push(j, V, J);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let B = b.groupId ? y[b.groupId] : S;
                  if (B === h) {
                    let k = b.type === "if-break" ? b.breakContents : b.negate ? b.contents : i(b.contents);
                    k && T.push({ ind: v, mode: S, doc: k });
                  }
                  if (B === g) {
                    let k = b.type === "if-break" ? b.flatContents : b.negate ? i(b.contents) : b.contents;
                    k && T.push({ ind: v, mode: S, doc: k });
                  }
                  break;
                }
                case "line-suffix":
                  o.push({ ind: v, mode: S, doc: b.contents });
                  break;
                case "line-suffix-boundary":
                  o.length > 0 && T.push({ ind: v, mode: S, doc: { type: "line", hard: true } });
                  break;
                case "line":
                  switch (S) {
                    case g:
                      if (b.hard)
                        C = true;
                      else {
                        b.soft || (m.push(" "), D += 1);
                        break;
                      }
                    case h:
                      if (o.length > 0) {
                        T.push({ ind: v, mode: S, doc: b }, ...o.reverse()), o.length = 0;
                        break;
                      }
                      b.literal ? v.root ? (m.push($, v.root.value), D = v.root.length) : (m.push($), D = 0) : (D -= w(m), m.push($ + v.value), D = v.length);
                      break;
                  }
                  break;
                case "label":
                  T.push({ ind: v, mode: S, doc: b.contents });
                  break;
              }
            T.length === 0 && o.length > 0 && (T.push(...o.reverse()), o.length = 0);
          }
          let d = m.indexOf(u.placeholder);
          if (d !== -1) {
            let v = m.indexOf(u.placeholder, d + 1), S = m.slice(0, d).join(""), b = m.slice(d + 1, v).join(""), B = m.slice(v + 1).join("");
            return { formatted: S + b + B, cursorNodeStart: S.length, cursorNodeText: b };
          }
          return { formatted: m.join("") };
        }
        r.exports = { printDocToString: N };
      } }), MD = te({ "src/document/doc-debug.js"(e, r) {
        ne();
        var { isConcat: t, getDocParts: s } = Yt();
        function a(u) {
          if (!u)
            return "";
          if (t(u)) {
            let i = [];
            for (let l of s(u))
              if (t(l))
                i.push(...a(l).parts);
              else {
                let p = a(l);
                p !== "" && i.push(p);
              }
            return { type: "concat", parts: i };
          }
          return u.type === "if-break" ? Object.assign(Object.assign({}, u), {}, { breakContents: a(u.breakContents), flatContents: a(u.flatContents) }) : u.type === "group" ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents), expandedStates: u.expandedStates && u.expandedStates.map(a) }) : u.type === "fill" ? { type: "fill", parts: u.parts.map(a) } : u.contents ? Object.assign(Object.assign({}, u), {}, { contents: a(u.contents) }) : u;
        }
        function n(u) {
          let i = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ new Set();
          return p(a(u));
          function p(h, g, c) {
            if (typeof h == "string")
              return JSON.stringify(h);
            if (t(h)) {
              let f = s(h).map(p).filter(Boolean);
              return f.length === 1 ? f[0] : `[${f.join(", ")}]`;
            }
            if (h.type === "line") {
              let f = Array.isArray(c) && c[g + 1] && c[g + 1].type === "break-parent";
              return h.literal ? f ? "literalline" : "literallineWithoutBreakParent" : h.hard ? f ? "hardline" : "hardlineWithoutBreakParent" : h.soft ? "softline" : "line";
            }
            if (h.type === "break-parent")
              return Array.isArray(c) && c[g - 1] && c[g - 1].type === "line" && c[g - 1].hard ? void 0 : "breakParent";
            if (h.type === "trim")
              return "trim";
            if (h.type === "indent")
              return "indent(" + p(h.contents) + ")";
            if (h.type === "align")
              return h.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + p(h.contents) + ")" : h.n < 0 ? "dedent(" + p(h.contents) + ")" : h.n.type === "root" ? "markAsRoot(" + p(h.contents) + ")" : "align(" + JSON.stringify(h.n) + ", " + p(h.contents) + ")";
            if (h.type === "if-break")
              return "ifBreak(" + p(h.breakContents) + (h.flatContents ? ", " + p(h.flatContents) : "") + (h.groupId ? (h.flatContents ? "" : ', ""') + `, { groupId: ${y(h.groupId)} }` : "") + ")";
            if (h.type === "indent-if-break") {
              let f = [];
              h.negate && f.push("negate: true"), h.groupId && f.push(`groupId: ${y(h.groupId)}`);
              let F = f.length > 0 ? `, { ${f.join(", ")} }` : "";
              return `indentIfBreak(${p(h.contents)}${F})`;
            }
            if (h.type === "group") {
              let f = [];
              h.break && h.break !== "propagated" && f.push("shouldBreak: true"), h.id && f.push(`id: ${y(h.id)}`);
              let F = f.length > 0 ? `, { ${f.join(", ")} }` : "";
              return h.expandedStates ? `conditionalGroup([${h.expandedStates.map((_) => p(_)).join(",")}]${F})` : `group(${p(h.contents)}${F})`;
            }
            if (h.type === "fill")
              return `fill([${h.parts.map((f) => p(f)).join(", ")}])`;
            if (h.type === "line-suffix")
              return "lineSuffix(" + p(h.contents) + ")";
            if (h.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (h.type === "label")
              return `label(${JSON.stringify(h.label)}, ${p(h.contents)})`;
            throw new Error("Unknown doc type " + h.type);
          }
          function y(h) {
            if (typeof h != "symbol")
              return JSON.stringify(String(h));
            if (h in i)
              return i[h];
            let g = String(h).slice(7, -1) || "symbol";
            for (let c = 0; ; c++) {
              let f = g + (c > 0 ? ` #${c}` : "");
              if (!l.has(f))
                return l.add(f), i[h] = `Symbol.for(${JSON.stringify(f)})`;
            }
          }
        }
        r.exports = { printDocToDebug: n };
      } }), qe = te({ "src/document/index.js"(e, r) {
        ne(), r.exports = { builders: Un(), printer: qD(), utils: Yt(), debug: MD() };
      } }), ja = {};
      Kt(ja, { default: () => RD });
      function RD(e) {
        if (typeof e != "string")
          throw new TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var $D = ht({ "node_modules/escape-string-regexp/index.js"() {
        ne();
      } }), qa = te({ "node_modules/semver/internal/debug.js"(e, r) {
        ne();
        var t = typeof wt == "object" && wt.env && wt.env.NODE_DEBUG && /\bsemver\b/i.test(wt.env.NODE_DEBUG) ? function() {
          for (var s = arguments.length, a = new Array(s), n = 0; n < s; n++)
            a[n] = arguments[n];
          return console.error("SEMVER", ...a);
        } : () => {
        };
        r.exports = t;
      } }), Ma = te({ "node_modules/semver/internal/constants.js"(e, r) {
        ne();
        var t = "2.0.0", s = 256, a = Number.MAX_SAFE_INTEGER || 9007199254740991, n = 16;
        r.exports = { SEMVER_SPEC_VERSION: t, MAX_LENGTH: s, MAX_SAFE_INTEGER: a, MAX_SAFE_COMPONENT_LENGTH: n };
      } }), VD = te({ "node_modules/semver/internal/re.js"(e, r) {
        ne();
        var { MAX_SAFE_COMPONENT_LENGTH: t } = Ma(), s = qa();
        e = r.exports = {};
        var a = e.re = [], n = e.src = [], u = e.t = {}, i = 0, l = (p, y, h) => {
          let g = i++;
          s(p, g, y), u[p] = g, n[g] = y, a[g] = new RegExp(y, h ? "g" : void 0);
        };
        l("NUMERICIDENTIFIER", "0|[1-9]\\d*"), l("NUMERICIDENTIFIERLOOSE", "[0-9]+"), l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), l("MAINVERSION", `(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})\\.(${n[u.NUMERICIDENTIFIER]})`), l("MAINVERSIONLOOSE", `(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})\\.(${n[u.NUMERICIDENTIFIERLOOSE]})`), l("PRERELEASEIDENTIFIER", `(?:${n[u.NUMERICIDENTIFIER]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASEIDENTIFIERLOOSE", `(?:${n[u.NUMERICIDENTIFIERLOOSE]}|${n[u.NONNUMERICIDENTIFIER]})`), l("PRERELEASE", `(?:-(${n[u.PRERELEASEIDENTIFIER]}(?:\\.${n[u.PRERELEASEIDENTIFIER]})*))`), l("PRERELEASELOOSE", `(?:-?(${n[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${n[u.PRERELEASEIDENTIFIERLOOSE]})*))`), l("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), l("BUILD", `(?:\\+(${n[u.BUILDIDENTIFIER]}(?:\\.${n[u.BUILDIDENTIFIER]})*))`), l("FULLPLAIN", `v?${n[u.MAINVERSION]}${n[u.PRERELEASE]}?${n[u.BUILD]}?`), l("FULL", `^${n[u.FULLPLAIN]}$`), l("LOOSEPLAIN", `[v=\\s]*${n[u.MAINVERSIONLOOSE]}${n[u.PRERELEASELOOSE]}?${n[u.BUILD]}?`), l("LOOSE", `^${n[u.LOOSEPLAIN]}$`), l("GTLT", "((?:<|>)?=?)"), l("XRANGEIDENTIFIERLOOSE", `${n[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), l("XRANGEIDENTIFIER", `${n[u.NUMERICIDENTIFIER]}|x|X|\\*`), l("XRANGEPLAIN", `[v=\\s]*(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:\\.(${n[u.XRANGEIDENTIFIER]})(?:${n[u.PRERELEASE]})?${n[u.BUILD]}?)?)?`), l("XRANGEPLAINLOOSE", `[v=\\s]*(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${n[u.XRANGEIDENTIFIERLOOSE]})(?:${n[u.PRERELEASELOOSE]})?${n[u.BUILD]}?)?)?`), l("XRANGE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAIN]}$`), l("XRANGELOOSE", `^${n[u.GTLT]}\\s*${n[u.XRANGEPLAINLOOSE]}$`), l("COERCE", `(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?(?:$|[^\\d])`), l("COERCERTL", n[u.COERCE], true), l("LONETILDE", "(?:~>?)"), l("TILDETRIM", `(\\s*)${n[u.LONETILDE]}\\s+`, true), e.tildeTrimReplace = "$1~", l("TILDE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAIN]}$`), l("TILDELOOSE", `^${n[u.LONETILDE]}${n[u.XRANGEPLAINLOOSE]}$`), l("LONECARET", "(?:\\^)"), l("CARETTRIM", `(\\s*)${n[u.LONECARET]}\\s+`, true), e.caretTrimReplace = "$1^", l("CARET", `^${n[u.LONECARET]}${n[u.XRANGEPLAIN]}$`), l("CARETLOOSE", `^${n[u.LONECARET]}${n[u.XRANGEPLAINLOOSE]}$`), l("COMPARATORLOOSE", `^${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]})$|^$`), l("COMPARATOR", `^${n[u.GTLT]}\\s*(${n[u.FULLPLAIN]})$|^$`), l("COMPARATORTRIM", `(\\s*)${n[u.GTLT]}\\s*(${n[u.LOOSEPLAIN]}|${n[u.XRANGEPLAIN]})`, true), e.comparatorTrimReplace = "$1$2$3", l("HYPHENRANGE", `^\\s*(${n[u.XRANGEPLAIN]})\\s+-\\s+(${n[u.XRANGEPLAIN]})\\s*$`), l("HYPHENRANGELOOSE", `^\\s*(${n[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${n[u.XRANGEPLAINLOOSE]})\\s*$`), l("STAR", "(<|>)?=?\\s*\\*"), l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), WD = te({ "node_modules/semver/internal/parse-options.js"(e, r) {
        ne();
        var t = ["includePrerelease", "loose", "rtl"], s = (a) => a ? typeof a != "object" ? { loose: true } : t.filter((n) => a[n]).reduce((n, u) => (n[u] = true, n), {}) : {};
        r.exports = s;
      } }), HD = te({ "node_modules/semver/internal/identifiers.js"(e, r) {
        ne();
        var t = /^[0-9]+$/, s = (n, u) => {
          let i = t.test(n), l = t.test(u);
          return i && l && (n = +n, u = +u), n === u ? 0 : i && !l ? -1 : l && !i ? 1 : n < u ? -1 : 1;
        }, a = (n, u) => s(u, n);
        r.exports = { compareIdentifiers: s, rcompareIdentifiers: a };
      } }), GD = te({ "node_modules/semver/classes/semver.js"(e, r) {
        ne();
        var t = qa(), { MAX_LENGTH: s, MAX_SAFE_INTEGER: a } = Ma(), { re: n, t: u } = VD(), i = WD(), { compareIdentifiers: l } = HD(), p = class {
          constructor(y, h) {
            if (h = i(h), y instanceof p) {
              if (y.loose === !!h.loose && y.includePrerelease === !!h.includePrerelease)
                return y;
              y = y.version;
            } else if (typeof y != "string")
              throw new TypeError(`Invalid Version: ${y}`);
            if (y.length > s)
              throw new TypeError(`version is longer than ${s} characters`);
            t("SemVer", y, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
            let g = y.trim().match(h.loose ? n[u.LOOSE] : n[u.FULL]);
            if (!g)
              throw new TypeError(`Invalid Version: ${y}`);
            if (this.raw = y, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > a || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > a || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > a || this.patch < 0)
              throw new TypeError("Invalid patch version");
            g[4] ? this.prerelease = g[4].split(".").map((c) => {
              if (/^[0-9]+$/.test(c)) {
                let f = +c;
                if (f >= 0 && f < a)
                  return f;
              }
              return c;
            }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(y) {
            if (t("SemVer.compare", this.version, this.options, y), !(y instanceof p)) {
              if (typeof y == "string" && y === this.version)
                return 0;
              y = new p(y, this.options);
            }
            return y.version === this.version ? 0 : this.compareMain(y) || this.comparePre(y);
          }
          compareMain(y) {
            return y instanceof p || (y = new p(y, this.options)), l(this.major, y.major) || l(this.minor, y.minor) || l(this.patch, y.patch);
          }
          comparePre(y) {
            if (y instanceof p || (y = new p(y, this.options)), this.prerelease.length && !y.prerelease.length)
              return -1;
            if (!this.prerelease.length && y.prerelease.length)
              return 1;
            if (!this.prerelease.length && !y.prerelease.length)
              return 0;
            let h = 0;
            do {
              let g = this.prerelease[h], c = y.prerelease[h];
              if (t("prerelease compare", h, g, c), g === void 0 && c === void 0)
                return 0;
              if (c === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== c)
                return l(g, c);
            } while (++h);
          }
          compareBuild(y) {
            y instanceof p || (y = new p(y, this.options));
            let h = 0;
            do {
              let g = this.build[h], c = y.build[h];
              if (t("prerelease compare", h, g, c), g === void 0 && c === void 0)
                return 0;
              if (c === void 0)
                return 1;
              if (g === void 0)
                return -1;
              if (g !== c)
                return l(g, c);
            } while (++h);
          }
          inc(y, h) {
            switch (y) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", h), this.inc("pre", h);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", h), this.inc("pre", h);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let g = this.prerelease.length;
                  for (; --g >= 0; )
                    typeof this.prerelease[g] == "number" && (this.prerelease[g]++, g = -2);
                  g === -1 && this.prerelease.push(0);
                }
                h && (l(this.prerelease[0], h) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [h, 0]) : this.prerelease = [h, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${y}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        r.exports = p;
      } }), zn = te({ "node_modules/semver/functions/compare.js"(e, r) {
        ne();
        var t = GD(), s = (a, n, u) => new t(a, u).compare(new t(n, u));
        r.exports = s;
      } }), UD = te({ "node_modules/semver/functions/lt.js"(e, r) {
        ne();
        var t = zn(), s = (a, n, u) => t(a, n, u) < 0;
        r.exports = s;
      } }), JD = te({ "node_modules/semver/functions/gte.js"(e, r) {
        ne();
        var t = zn(), s = (a, n, u) => t(a, n, u) >= 0;
        r.exports = s;
      } }), zD = te({ "src/utils/arrayify.js"(e, r) {
        ne(), r.exports = (t, s) => Object.entries(t).map((a) => {
          let [n, u] = a;
          return Object.assign({ [s]: n }, u);
        });
      } }), XD = te({ "node_modules/outdent/lib/index.js"(e, r) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.outdent = void 0;
        function t() {
          for (var E = [], N = 0; N < arguments.length; N++)
            E[N] = arguments[N];
        }
        function s() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : a();
        }
        function a() {
          return { add: t, delete: t, get: t, set: t, has: function(E) {
            return false;
          } };
        }
        var n = Object.prototype.hasOwnProperty, u = function(E, N) {
          return n.call(E, N);
        };
        function i(E, N) {
          for (var x in N)
            u(N, x) && (E[x] = N[x]);
          return E;
        }
        var l = /^[ \t]*(?:\r\n|\r|\n)/, p = /(?:\r\n|\r|\n)[ \t]*$/, y = /^(?:[\r\n]|$)/, h = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, g = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function c(E, N, x) {
          var I = 0, P = E[0].match(h);
          P && (I = P[1].length);
          var $ = "(\\r\\n|\\r|\\n).{0," + I + "}", D = new RegExp($, "g");
          N && (E = E.slice(1));
          var T = x.newline, m = x.trimLeadingNewline, C = x.trimTrailingNewline, o = typeof T == "string", d = E.length, v = E.map(function(S, b) {
            return S = S.replace(D, "$1"), b === 0 && m && (S = S.replace(l, "")), b === d - 1 && C && (S = S.replace(p, "")), o && (S = S.replace(/\r\n|\n|\r/g, function(B) {
              return T;
            })), S;
          });
          return v;
        }
        function f(E, N) {
          for (var x = "", I = 0, P = E.length; I < P; I++)
            x += E[I], I < P - 1 && (x += N[I]);
          return x;
        }
        function F(E) {
          return u(E, "raw") && u(E, "length");
        }
        function _(E) {
          var N = s(), x = s();
          function I($) {
            for (var D = [], T = 1; T < arguments.length; T++)
              D[T - 1] = arguments[T];
            if (F($)) {
              var m = $, C = (D[0] === I || D[0] === w) && g.test(m[0]) && y.test(m[1]), o = C ? x : N, d = o.get(m);
              if (d || (d = c(m, C, E), o.set(m, d)), D.length === 0)
                return d[0];
              var v = f(d, C ? D.slice(1) : D);
              return v;
            } else
              return _(i(i({}, E), $ || {}));
          }
          var P = i(I, { string: function($) {
            return c([$], false, E)[0];
          } });
          return P;
        }
        var w = _({ trimLeadingNewline: true, trimTrailingNewline: true });
        if (e.outdent = w, e.default = w, typeof r < "u")
          try {
            r.exports = w, Object.defineProperty(w, "__esModule", { value: true }), w.default = w, w.outdent = w;
          } catch {
          }
      } }), KD = te({ "src/main/core-options.js"(e, r) {
        ne();
        var { outdent: t } = XD(), s = "Config", a = "Editor", n = "Format", u = "Other", i = "Output", l = "Global", p = "Special", y = { cursorOffset: { since: "1.4.0", category: p, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: a }, endOfLine: { since: "1.15.0", category: l, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: t`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: p, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: u, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: p, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: u }, parser: { since: "0.0.10", category: l, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (h) => typeof h == "string" || typeof h == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: l, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (h) => typeof h == "string" || typeof h == "object", cliName: "plugin", cliCategory: s }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: l, description: t`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (h) => typeof h == "string" || typeof h == "object", cliName: "plugin-search-dir", cliCategory: s }, printWidth: { since: "0.0.0", category: l, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: p, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, rangeStart: { since: "1.4.0", category: p, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: t`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: a }, requirePragma: { since: "1.7.0", category: p, type: "boolean", default: false, description: t`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: u }, tabWidth: { type: "int", category: l, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: l, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: l, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        r.exports = { CATEGORY_CONFIG: s, CATEGORY_EDITOR: a, CATEGORY_FORMAT: n, CATEGORY_OTHER: u, CATEGORY_OUTPUT: i, CATEGORY_GLOBAL: l, CATEGORY_SPECIAL: p, options: y };
      } }), Xn = te({ "src/main/support.js"(e, r) {
        ne();
        var t = { compare: zn(), lt: UD(), gte: JD() }, s = zD(), a = Ia().version, n = KD().options;
        function u() {
          let { plugins: l = [], showUnreleased: p = false, showDeprecated: y = false, showInternal: h = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = a.split("-", 1)[0], c = l.flatMap((E) => E.languages || []).filter(F), f = s(Object.assign({}, ...l.map((E) => {
            let { options: N } = E;
            return N;
          }), n), "name").filter((E) => F(E) && _(E)).sort((E, N) => E.name === N.name ? 0 : E.name < N.name ? -1 : 1).map(w).map((E) => {
            E = Object.assign({}, E), Array.isArray(E.default) && (E.default = E.default.length === 1 ? E.default[0].value : E.default.filter(F).sort((x, I) => t.compare(I.since, x.since))[0].value), Array.isArray(E.choices) && (E.choices = E.choices.filter((x) => F(x) && _(x)), E.name === "parser" && i(E, c, l));
            let N = Object.fromEntries(l.filter((x) => x.defaultOptions && x.defaultOptions[E.name] !== void 0).map((x) => [x.name, x.defaultOptions[E.name]]));
            return Object.assign(Object.assign({}, E), {}, { pluginDefaults: N });
          });
          return { languages: c, options: f };
          function F(E) {
            return p || !("since" in E) || E.since && t.gte(g, E.since);
          }
          function _(E) {
            return y || !("deprecated" in E) || E.deprecated && t.lt(g, E.deprecated);
          }
          function w(E) {
            if (h)
              return E;
            return Hn(E, hD);
          }
        }
        function i(l, p, y) {
          let h = new Set(l.choices.map((g) => g.value));
          for (let g of p)
            if (g.parsers) {
              for (let c of g.parsers)
                if (!h.has(c)) {
                  h.add(c);
                  let f = y.find((_) => _.parsers && _.parsers[c]), F = g.name;
                  f && f.name && (F += ` (plugin: ${f.name})`), l.choices.push({ value: c, description: F });
                }
            }
        }
        r.exports = { getSupportInfo: u };
      } }), Kn = te({ "src/utils/is-non-empty-array.js"(e, r) {
        ne();
        function t(s) {
          return Array.isArray(s) && s.length > 0;
        }
        r.exports = t;
      } }), Pr = te({ "src/utils/text/skip.js"(e, r) {
        ne();
        function t(i) {
          return (l, p, y) => {
            let h = y && y.backwards;
            if (p === false)
              return false;
            let { length: g } = l, c = p;
            for (; c >= 0 && c < g; ) {
              let f = l.charAt(c);
              if (i instanceof RegExp) {
                if (!i.test(f))
                  return c;
              } else if (!i.includes(f))
                return c;
              h ? c-- : c++;
            }
            return c === -1 || c === g ? c : false;
          };
        }
        var s = t(/\s/), a = t(" 	"), n = t(",; 	"), u = t(/[^\n\r]/);
        r.exports = { skipWhitespace: s, skipSpaces: a, skipToLineEnd: n, skipEverythingButNewLine: u };
      } }), Ra = te({ "src/utils/text/skip-inline-comment.js"(e, r) {
        ne();
        function t(s, a) {
          if (a === false)
            return false;
          if (s.charAt(a) === "/" && s.charAt(a + 1) === "*") {
            for (let n = a + 2; n < s.length; ++n)
              if (s.charAt(n) === "*" && s.charAt(n + 1) === "/")
                return n + 2;
          }
          return a;
        }
        r.exports = t;
      } }), $a = te({ "src/utils/text/skip-trailing-comment.js"(e, r) {
        ne();
        var { skipEverythingButNewLine: t } = Pr();
        function s(a, n) {
          return n === false ? false : a.charAt(n) === "/" && a.charAt(n + 1) === "/" ? t(a, n) : n;
        }
        r.exports = s;
      } }), Va = te({ "src/utils/text/skip-newline.js"(e, r) {
        ne();
        function t(s, a, n) {
          let u = n && n.backwards;
          if (a === false)
            return false;
          let i = s.charAt(a);
          if (u) {
            if (s.charAt(a - 1) === "\r" && i === `
`)
              return a - 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a - 1;
          } else {
            if (i === "\r" && s.charAt(a + 1) === `
`)
              return a + 2;
            if (i === `
` || i === "\r" || i === "\u2028" || i === "\u2029")
              return a + 1;
          }
          return a;
        }
        r.exports = t;
      } }), YD = te({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(e, r) {
        ne();
        var t = Ra(), s = Va(), a = $a(), { skipSpaces: n } = Pr();
        function u(i, l) {
          let p = null, y = l;
          for (; y !== p; )
            p = y, y = n(i, y), y = t(i, y), y = a(i, y), y = s(i, y);
          return y;
        }
        r.exports = u;
      } }), Ue = te({ "src/common/util.js"(e, r) {
        ne();
        var { default: t } = ($D(), ft(ja)), s = lt(), { getSupportInfo: a } = Xn(), n = Kn(), u = Oa(), { skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: y } = Pr(), h = Ra(), g = $a(), c = Va(), f = YD(), F = (V) => V[V.length - 2];
        function _(V) {
          return (j, Y, ie) => {
            let ee = ie && ie.backwards;
            if (Y === false)
              return false;
            let { length: ce } = j, W = Y;
            for (; W >= 0 && W < ce; ) {
              let K = j.charAt(W);
              if (V instanceof RegExp) {
                if (!V.test(K))
                  return W;
              } else if (!V.includes(K))
                return W;
              ee ? W-- : W++;
            }
            return W === -1 || W === ce ? W : false;
          };
        }
        function w(V, j) {
          let Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ie = l(V, Y.backwards ? j - 1 : j, Y), ee = c(V, ie, Y);
          return ie !== ee;
        }
        function E(V, j, Y) {
          for (let ie = j; ie < Y; ++ie)
            if (V.charAt(ie) === `
`)
              return true;
          return false;
        }
        function N(V, j, Y) {
          let ie = Y(j) - 1;
          ie = l(V, ie, { backwards: true }), ie = c(V, ie, { backwards: true }), ie = l(V, ie, { backwards: true });
          let ee = c(V, ie, { backwards: true });
          return ie !== ee;
        }
        function x(V, j) {
          let Y = null, ie = j;
          for (; ie !== Y; )
            Y = ie, ie = p(V, ie), ie = h(V, ie), ie = l(V, ie);
          return ie = g(V, ie), ie = c(V, ie), ie !== false && w(V, ie);
        }
        function I(V, j, Y) {
          return x(V, Y(j));
        }
        function P(V, j, Y) {
          return f(V, Y(j));
        }
        function $(V, j, Y) {
          return V.charAt(P(V, j, Y));
        }
        function D(V, j) {
          let Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return l(V, Y.backwards ? j - 1 : j, Y) !== j;
        }
        function T(V, j) {
          let Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ie = 0;
          for (let ee = Y; ee < V.length; ++ee)
            V[ee] === "	" ? ie = ie + j - ie % j : ie++;
          return ie;
        }
        function m(V, j) {
          let Y = V.lastIndexOf(`
`);
          return Y === -1 ? 0 : T(V.slice(Y + 1).match(/^[\t ]*/)[0], j);
        }
        function C(V, j) {
          let Y = { quote: '"', regex: /"/g, escaped: "&quot;" }, ie = { quote: "'", regex: /'/g, escaped: "&apos;" }, ee = j === "'" ? ie : Y, ce = ee === ie ? Y : ie, W = ee;
          if (V.includes(ee.quote) || V.includes(ce.quote)) {
            let K = (V.match(ee.regex) || []).length, de = (V.match(ce.regex) || []).length;
            W = K > de ? ce : ee;
          }
          return W;
        }
        function o(V, j) {
          let Y = V.slice(1, -1), ie = j.parser === "json" || j.parser === "json5" && j.quoteProps === "preserve" && !j.singleQuote ? '"' : j.__isInHtmlAttribute ? "'" : C(Y, j.singleQuote ? "'" : '"').quote;
          return d(Y, ie, !(j.parser === "css" || j.parser === "less" || j.parser === "scss" || j.__embeddedInHtml));
        }
        function d(V, j, Y) {
          let ie = j === '"' ? "'" : '"', ee = /\\(.)|(["'])/gs, ce = V.replace(ee, (W, K, de) => K === ie ? K : de === j ? "\\" + de : de || (Y && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(K) ? K : "\\" + K));
          return j + ce + j;
        }
        function v(V) {
          return V.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function S(V, j) {
          let Y = V.match(new RegExp(`(${t(j)})+`, "g"));
          return Y === null ? 0 : Y.reduce((ie, ee) => Math.max(ie, ee.length / j.length), 0);
        }
        function b(V, j) {
          let Y = V.match(new RegExp(`(${t(j)})+`, "g"));
          if (Y === null)
            return 0;
          let ie = /* @__PURE__ */ new Map(), ee = 0;
          for (let ce of Y) {
            let W = ce.length / j.length;
            ie.set(W, true), W > ee && (ee = W);
          }
          for (let ce = 1; ce < ee; ce++)
            if (!ie.get(ce))
              return ce;
          return ee + 1;
        }
        function B(V, j) {
          (V.comments || (V.comments = [])).push(j), j.printed = false, j.nodeDescription = Q(V);
        }
        function k(V, j) {
          j.leading = true, j.trailing = false, B(V, j);
        }
        function M(V, j, Y) {
          j.leading = false, j.trailing = false, Y && (j.marker = Y), B(V, j);
        }
        function R(V, j) {
          j.leading = false, j.trailing = true, B(V, j);
        }
        function q(V, j) {
          let { languages: Y } = a({ plugins: j.plugins }), ie = Y.find((ee) => {
            let { name: ce } = ee;
            return ce.toLowerCase() === V;
          }) || Y.find((ee) => {
            let { aliases: ce } = ee;
            return Array.isArray(ce) && ce.includes(V);
          }) || Y.find((ee) => {
            let { extensions: ce } = ee;
            return Array.isArray(ce) && ce.includes(`.${V}`);
          });
          return ie && ie.parsers[0];
        }
        function J(V) {
          return V && V.type === "front-matter";
        }
        function L(V) {
          let j = /* @__PURE__ */ new WeakMap();
          return function(Y) {
            return j.has(Y) || j.set(Y, Symbol(V)), j.get(Y);
          };
        }
        function Q(V) {
          let j = V.type || V.kind || "(unknown type)", Y = String(V.name || V.id && (typeof V.id == "object" ? V.id.name : V.id) || V.key && (typeof V.key == "object" ? V.key.name : V.key) || V.value && (typeof V.value == "object" ? "" : String(V.value)) || V.operator || "");
          return Y.length > 20 && (Y = Y.slice(0, 19) + "…"), j + (Y ? " " + Y : "");
        }
        r.exports = { inferParserByLanguage: q, getStringWidth: u, getMaxContinuousCount: S, getMinNotPresentContinuousCount: b, getPenultimate: F, getLast: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: f, getNextNonSpaceNonCommentCharacterIndex: P, getNextNonSpaceNonCommentCharacter: $, skip: _, skipWhitespace: i, skipSpaces: l, skipToLineEnd: p, skipEverythingButNewLine: y, skipInlineComment: h, skipTrailingComment: g, skipNewline: c, isNextLineEmptyAfterIndex: x, isNextLineEmpty: I, isPreviousLineEmpty: N, hasNewline: w, hasNewlineInRange: E, hasSpaces: D, getAlignmentSize: T, getIndentSize: m, getPreferredQuote: C, printString: o, printNumber: v, makeString: d, addLeadingComment: k, addDanglingComment: M, addTrailingComment: R, isFrontMatterNode: J, isNonEmptyArray: n, createGroupIdMapper: L };
      } }), Wa = {};
      Kt(Wa, { basename: () => za, default: () => Ka, delimiter: () => Mn, dirname: () => Ja, extname: () => Xa, isAbsolute: () => Qn, join: () => Ga, normalize: () => Yn, relative: () => Ua, resolve: () => wr, sep: () => qn });
      function Ha(e, r) {
        for (var t = 0, s = e.length - 1; s >= 0; s--) {
          var a = e[s];
          a === "." ? e.splice(s, 1) : a === ".." ? (e.splice(s, 1), t++) : t && (e.splice(s, 1), t--);
        }
        if (r)
          for (; t--; t)
            e.unshift("..");
        return e;
      }
      function wr() {
        for (var e = "", r = false, t = arguments.length - 1; t >= -1 && !r; t--) {
          var s = t >= 0 ? arguments[t] : "/";
          if (typeof s != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          s && (e = s + "/" + e, r = s.charAt(0) === "/");
        }
        return e = Ha(Zn(e.split("/"), function(a) {
          return !!a;
        }), !r).join("/"), (r ? "/" : "") + e || ".";
      }
      function Yn(e) {
        var r = Qn(e), t = Ya(e, -1) === "/";
        return e = Ha(Zn(e.split("/"), function(s) {
          return !!s;
        }), !r).join("/"), !e && !r && (e = "."), e && t && (e += "/"), (r ? "/" : "") + e;
      }
      function Qn(e) {
        return e.charAt(0) === "/";
      }
      function Ga() {
        var e = Array.prototype.slice.call(arguments, 0);
        return Yn(Zn(e, function(r, t) {
          if (typeof r != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return r;
        }).join("/"));
      }
      function Ua(e, r) {
        e = wr(e).substr(1), r = wr(r).substr(1);
        function t(p) {
          for (var y = 0; y < p.length && p[y] === ""; y++)
            ;
          for (var h = p.length - 1; h >= 0 && p[h] === ""; h--)
            ;
          return y > h ? [] : p.slice(y, h - y + 1);
        }
        for (var s = t(e.split("/")), a = t(r.split("/")), n = Math.min(s.length, a.length), u = n, i = 0; i < n; i++)
          if (s[i] !== a[i]) {
            u = i;
            break;
          }
        for (var l = [], i = u; i < s.length; i++)
          l.push("..");
        return l = l.concat(a.slice(u)), l.join("/");
      }
      function Ja(e) {
        var r = Ir(e), t = r[0], s = r[1];
        return !t && !s ? "." : (s && (s = s.substr(0, s.length - 1)), t + s);
      }
      function za(e, r) {
        var t = Ir(e)[2];
        return r && t.substr(-1 * r.length) === r && (t = t.substr(0, t.length - r.length)), t;
      }
      function Xa(e) {
        return Ir(e)[3];
      }
      function Zn(e, r) {
        if (e.filter)
          return e.filter(r);
        for (var t = [], s = 0; s < e.length; s++)
          r(e[s], s, e) && t.push(e[s]);
        return t;
      }
      var Na, Ir, qn, Mn, Ka, Ya, QD = ht({ "node-modules-polyfills:path"() {
        ne(), Na = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Ir = function(e) {
          return Na.exec(e).slice(1);
        }, qn = "/", Mn = ":", Ka = { extname: Xa, basename: za, dirname: Ja, sep: qn, delimiter: Mn, relative: Ua, join: Ga, isAbsolute: Qn, normalize: Yn, resolve: wr }, Ya = "ab".substr(-1) === "b" ? function(e, r, t) {
          return e.substr(r, t);
        } : function(e, r, t) {
          return r < 0 && (r = e.length + r), e.substr(r, t);
        };
      } }), ZD = te({ "node-modules-polyfills-commonjs:path"(e, r) {
        ne();
        var t = (QD(), ft(Wa));
        if (t && t.default) {
          r.exports = t.default;
          for (let s in t)
            r.exports[s] = t[s];
        } else
          t && (r.exports = t);
      } }), Qt = te({ "src/common/errors.js"(e, r) {
        ne();
        var t = class extends Error {
        }, s = class extends Error {
        }, a = class extends Error {
        }, n = class extends Error {
        };
        r.exports = { ConfigError: t, DebugError: s, UndefinedParserError: a, ArgExpansionBailout: n };
      } }), vt = {};
      Kt(vt, { __assign: () => Nr, __asyncDelegator: () => fm, __asyncGenerator: () => pm, __asyncValues: () => Dm, __await: () => Xt, __awaiter: () => sm, __classPrivateFieldGet: () => ym, __classPrivateFieldSet: () => hm, __createBinding: () => am, __decorate: () => rm, __exportStar: () => om, __extends: () => em, __generator: () => im, __importDefault: () => gm, __importStar: () => dm, __makeTemplateObject: () => mm, __metadata: () => um, __param: () => nm, __read: () => Qa, __rest: () => tm, __spread: () => lm, __spreadArrays: () => cm, __values: () => Rn });
      function em(e, r) {
        Br(e, r);
        function t() {
          this.constructor = e;
        }
        e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
      }
      function tm(e, r) {
        var t = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) && r.indexOf(s) < 0 && (t[s] = e[s]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (var a = 0, s = Object.getOwnPropertySymbols(e); a < s.length; a++)
            r.indexOf(s[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[a]) && (t[s[a]] = e[s[a]]);
        return t;
      }
      function rm(e, r, t, s) {
        var a = arguments.length, n = a < 3 ? r : s === null ? s = Object.getOwnPropertyDescriptor(r, t) : s, u;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          n = Reflect.decorate(e, r, t, s);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (u = e[i]) && (n = (a < 3 ? u(n) : a > 3 ? u(r, t, n) : u(r, t)) || n);
        return a > 3 && n && Object.defineProperty(r, t, n), n;
      }
      function nm(e, r) {
        return function(t, s) {
          r(t, s, e);
        };
      }
      function um(e, r) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(e, r);
      }
      function sm(e, r, t, s) {
        function a(n) {
          return n instanceof t ? n : new t(function(u) {
            u(n);
          });
        }
        return new (t || (t = Promise))(function(n, u) {
          function i(y) {
            try {
              p(s.next(y));
            } catch (h) {
              u(h);
            }
          }
          function l(y) {
            try {
              p(s.throw(y));
            } catch (h) {
              u(h);
            }
          }
          function p(y) {
            y.done ? n(y.value) : a(y.value).then(i, l);
          }
          p((s = s.apply(e, r || [])).next());
        });
      }
      function im(e, r) {
        var t = { label: 0, sent: function() {
          if (n[0] & 1)
            throw n[1];
          return n[1];
        }, trys: [], ops: [] }, s, a, n, u;
        return u = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
          return this;
        }), u;
        function i(p) {
          return function(y) {
            return l([p, y]);
          };
        }
        function l(p) {
          if (s)
            throw new TypeError("Generator is already executing.");
          for (; t; )
            try {
              if (s = 1, a && (n = p[0] & 2 ? a.return : p[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, p[1])).done)
                return n;
              switch (a = 0, n && (p = [p[0] & 2, n.value]), p[0]) {
                case 0:
                case 1:
                  n = p;
                  break;
                case 4:
                  return t.label++, { value: p[1], done: false };
                case 5:
                  t.label++, a = p[1], p = [0];
                  continue;
                case 7:
                  p = t.ops.pop(), t.trys.pop();
                  continue;
                default:
                  if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                    t = 0;
                    continue;
                  }
                  if (p[0] === 3 && (!n || p[1] > n[0] && p[1] < n[3])) {
                    t.label = p[1];
                    break;
                  }
                  if (p[0] === 6 && t.label < n[1]) {
                    t.label = n[1], n = p;
                    break;
                  }
                  if (n && t.label < n[2]) {
                    t.label = n[2], t.ops.push(p);
                    break;
                  }
                  n[2] && t.ops.pop(), t.trys.pop();
                  continue;
              }
              p = r.call(e, t);
            } catch (y) {
              p = [6, y], a = 0;
            } finally {
              s = n = 0;
            }
          if (p[0] & 5)
            throw p[1];
          return { value: p[0] ? p[1] : void 0, done: true };
        }
      }
      function am(e, r, t, s) {
        s === void 0 && (s = t), e[s] = r[t];
      }
      function om(e, r) {
        for (var t in e)
          t !== "default" && !r.hasOwnProperty(t) && (r[t] = e[t]);
      }
      function Rn(e) {
        var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], s = 0;
        if (t)
          return t.call(e);
        if (e && typeof e.length == "number")
          return { next: function() {
            return e && s >= e.length && (e = void 0), { value: e && e[s++], done: !e };
          } };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function Qa(e, r) {
        var t = typeof Symbol == "function" && e[Symbol.iterator];
        if (!t)
          return e;
        var s = t.call(e), a, n = [], u;
        try {
          for (; (r === void 0 || r-- > 0) && !(a = s.next()).done; )
            n.push(a.value);
        } catch (i) {
          u = { error: i };
        } finally {
          try {
            a && !a.done && (t = s.return) && t.call(s);
          } finally {
            if (u)
              throw u.error;
          }
        }
        return n;
      }
      function lm() {
        for (var e = [], r = 0; r < arguments.length; r++)
          e = e.concat(Qa(arguments[r]));
        return e;
      }
      function cm() {
        for (var e = 0, r = 0, t = arguments.length; r < t; r++)
          e += arguments[r].length;
        for (var s = Array(e), a = 0, r = 0; r < t; r++)
          for (var n = arguments[r], u = 0, i = n.length; u < i; u++, a++)
            s[a] = n[u];
        return s;
      }
      function Xt(e) {
        return this instanceof Xt ? (this.v = e, this) : new Xt(e);
      }
      function pm(e, r, t) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var s = t.apply(e, r || []), a, n = [];
        return a = {}, u("next"), u("throw"), u("return"), a[Symbol.asyncIterator] = function() {
          return this;
        }, a;
        function u(g) {
          s[g] && (a[g] = function(c) {
            return new Promise(function(f, F) {
              n.push([g, c, f, F]) > 1 || i(g, c);
            });
          });
        }
        function i(g, c) {
          try {
            l(s[g](c));
          } catch (f) {
            h(n[0][3], f);
          }
        }
        function l(g) {
          g.value instanceof Xt ? Promise.resolve(g.value.v).then(p, y) : h(n[0][2], g);
        }
        function p(g) {
          i("next", g);
        }
        function y(g) {
          i("throw", g);
        }
        function h(g, c) {
          g(c), n.shift(), n.length && i(n[0][0], n[0][1]);
        }
      }
      function fm(e) {
        var r, t;
        return r = {}, s("next"), s("throw", function(a) {
          throw a;
        }), s("return"), r[Symbol.iterator] = function() {
          return this;
        }, r;
        function s(a, n) {
          r[a] = e[a] ? function(u) {
            return (t = !t) ? { value: Xt(e[a](u)), done: a === "return" } : n ? n(u) : u;
          } : n;
        }
      }
      function Dm(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r = e[Symbol.asyncIterator], t;
        return r ? r.call(e) : (e = typeof Rn == "function" ? Rn(e) : e[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
          return this;
        }, t);
        function s(n) {
          t[n] = e[n] && function(u) {
            return new Promise(function(i, l) {
              u = e[n](u), a(i, l, u.done, u.value);
            });
          };
        }
        function a(n, u, i, l) {
          Promise.resolve(l).then(function(p) {
            n({ value: p, done: i });
          }, u);
        }
      }
      function mm(e, r) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
      }
      function dm(e) {
        if (e && e.__esModule)
          return e;
        var r = {};
        if (e != null)
          for (var t in e)
            Object.hasOwnProperty.call(e, t) && (r[t] = e[t]);
        return r.default = e, r;
      }
      function gm(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function ym(e, r) {
        if (!r.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return r.get(e);
      }
      function hm(e, r, t) {
        if (!r.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return r.set(e, t), t;
      }
      var Br, Nr, Et = ht({ "node_modules/tslib/tslib.es6.js"() {
        ne(), Br = function(e, r) {
          return Br = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
            t.__proto__ = s;
          } || function(t, s) {
            for (var a in s)
              s.hasOwnProperty(a) && (t[a] = s[a]);
          }, Br(e, r);
        }, Nr = function() {
          return Nr = Object.assign || function(r) {
            for (var t, s = 1, a = arguments.length; s < a; s++) {
              t = arguments[s];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
            }
            return r;
          }, Nr.apply(this, arguments);
        };
      } }), Za = te({ "node_modules/vnopts/lib/descriptors/api.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.apiDescriptor = { key: (r) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(r) ? r : JSON.stringify(r), value(r) {
          if (r === null || typeof r != "object")
            return JSON.stringify(r);
          if (Array.isArray(r))
            return `[${r.map((s) => e.apiDescriptor.value(s)).join(", ")}]`;
          let t = Object.keys(r);
          return t.length === 0 ? "{}" : `{ ${t.map((s) => `${e.apiDescriptor.key(s)}: ${e.apiDescriptor.value(r[s])}`).join(", ")} }`;
        }, pair: (r) => {
          let { key: t, value: s } = r;
          return e.apiDescriptor.value({ [t]: s });
        } };
      } }), vm = te({ "node_modules/vnopts/lib/descriptors/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Za(), e);
      } }), kr = te({ "scripts/build/shims/chalk.cjs"(e, r) {
        ne();
        var t = (s) => s;
        t.grey = t, t.red = t, t.bold = t, t.yellow = t, t.blue = t, t.default = t, r.exports = t;
      } }), eo = te({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr();
        e.commonDeprecatedHandler = (t, s, a) => {
          let { descriptor: n } = a, u = [`${r.default.yellow(typeof t == "string" ? n.key(t) : n.pair(t))} is deprecated`];
          return s && u.push(`we now treat it as ${r.default.blue(typeof s == "string" ? n.key(s) : n.pair(s))}`), u.join("; ") + ".";
        };
      } }), Cm = te({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(eo(), e);
      } }), Em = te({ "node_modules/vnopts/lib/handlers/invalid/common.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr();
        e.commonInvalidHandler = (t, s, a) => [`Invalid ${r.default.red(a.descriptor.key(t))} value.`, `Expected ${r.default.blue(a.schemas[t].expected(a))},`, `but received ${r.default.red(a.descriptor.value(s))}.`].join(" ");
      } }), to = te({ "node_modules/vnopts/lib/handlers/invalid/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Em(), e);
      } }), Fm = te({ "node_modules/vnopts/node_modules/leven/index.js"(e, r) {
        ne();
        var t = [], s = [];
        r.exports = function(a, n) {
          if (a === n)
            return 0;
          var u = a;
          a.length > n.length && (a = n, n = u);
          var i = a.length, l = n.length;
          if (i === 0)
            return l;
          if (l === 0)
            return i;
          for (; i > 0 && a.charCodeAt(~-i) === n.charCodeAt(~-l); )
            i--, l--;
          if (i === 0)
            return l;
          for (var p = 0; p < i && a.charCodeAt(p) === n.charCodeAt(p); )
            p++;
          if (i -= p, l -= p, i === 0)
            return l;
          for (var y, h, g, c, f = 0, F = 0; f < i; )
            s[p + f] = a.charCodeAt(p + f), t[f] = ++f;
          for (; F < l; )
            for (y = n.charCodeAt(p + F), g = F++, h = F, f = 0; f < i; f++)
              c = y === s[p + f] ? g : g + 1, g = t[f], h = t[f] = g > h ? c > h ? h + 1 : c : c > g ? g + 1 : c;
          return h;
        };
      } }), ro = te({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = kr(), t = Fm();
        e.levenUnknownHandler = (s, a, n) => {
          let { descriptor: u, logger: i, schemas: l } = n, p = [`Ignored unknown option ${r.default.yellow(u.pair({ key: s, value: a }))}.`], y = Object.keys(l).sort().find((h) => t(s, h) < 3);
          y && p.push(`Did you mean ${r.default.blue(u.key(y))}?`), i.warn(p.join(" "));
        };
      } }), Am = te({ "node_modules/vnopts/lib/handlers/unknown/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(ro(), e);
      } }), Sm = te({ "node_modules/vnopts/lib/handlers/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(Cm(), e), r.__exportStar(to(), e), r.__exportStar(Am(), e);
      } }), Ft = te({ "node_modules/vnopts/lib/schema.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function t(n, u) {
          let i = new n(u), l = Object.create(i);
          for (let p of r)
            p in u && (l[p] = a(u[p], i, s.prototype[p].length));
          return l;
        }
        e.createSchema = t;
        var s = class {
          constructor(n) {
            this.name = n.name;
          }
          static create(n) {
            return t(this, n);
          }
          default(n) {
          }
          expected(n) {
            return "nothing";
          }
          validate(n, u) {
            return false;
          }
          deprecated(n, u) {
            return false;
          }
          forward(n, u) {
          }
          redirect(n, u) {
          }
          overlap(n, u, i) {
            return n;
          }
          preprocess(n, u) {
            return n;
          }
          postprocess(n, u) {
            return n;
          }
        };
        e.Schema = s;
        function a(n, u, i) {
          return typeof n == "function" ? function() {
            for (var l = arguments.length, p = new Array(l), y = 0; y < l; y++)
              p[y] = arguments[y];
            return n(...p.slice(0, i - 1), u, ...p.slice(i - 1));
          } : () => n;
        }
      } }), xm = te({ "node_modules/vnopts/lib/schemas/alias.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          constructor(s) {
            super(s), this._sourceName = s.sourceName;
          }
          expected(s) {
            return s.schemas[this._sourceName].expected(s);
          }
          validate(s, a) {
            return a.schemas[this._sourceName].validate(s, a);
          }
          redirect(s, a) {
            return this._sourceName;
          }
        };
        e.AliasSchema = t;
      } }), bm = te({ "node_modules/vnopts/lib/schemas/any.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return true;
          }
        };
        e.AnySchema = t;
      } }), Tm = te({ "node_modules/vnopts/lib/schemas/array.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt)), t = Ft(), s = class extends t.Schema {
          constructor(n) {
            var { valueSchema: u, name: i = u.name } = n, l = r.__rest(n, ["valueSchema", "name"]);
            super(Object.assign({}, l, { name: i })), this._valueSchema = u;
          }
          expected(n) {
            return `an array of ${this._valueSchema.expected(n)}`;
          }
          validate(n, u) {
            if (!Array.isArray(n))
              return false;
            let i = [];
            for (let l of n) {
              let p = u.normalizeValidateResult(this._valueSchema.validate(l, u), l);
              p !== true && i.push(p.value);
            }
            return i.length === 0 ? true : { value: i };
          }
          deprecated(n, u) {
            let i = [];
            for (let l of n) {
              let p = u.normalizeDeprecatedResult(this._valueSchema.deprecated(l, u), l);
              p !== false && i.push(...p.map((y) => {
                let { value: h } = y;
                return { value: [h] };
              }));
            }
            return i;
          }
          forward(n, u) {
            let i = [];
            for (let l of n) {
              let p = u.normalizeForwardResult(this._valueSchema.forward(l, u), l);
              i.push(...p.map(a));
            }
            return i;
          }
          redirect(n, u) {
            let i = [], l = [];
            for (let p of n) {
              let y = u.normalizeRedirectResult(this._valueSchema.redirect(p, u), p);
              "remain" in y && i.push(y.remain), l.push(...y.redirect.map(a));
            }
            return i.length === 0 ? { redirect: l } : { redirect: l, remain: i };
          }
          overlap(n, u) {
            return n.concat(u);
          }
        };
        e.ArraySchema = s;
        function a(n) {
          let { from: u, to: i } = n;
          return { from: [u], to: i };
        }
      } }), Bm = te({ "node_modules/vnopts/lib/schemas/boolean.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "true or false";
          }
          validate(s) {
            return typeof s == "boolean";
          }
        };
        e.BooleanSchema = t;
      } }), eu = te({ "node_modules/vnopts/lib/utils.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        function r(c, f) {
          let F = /* @__PURE__ */ Object.create(null);
          for (let _ of c) {
            let w = _[f];
            if (F[w])
              throw new Error(`Duplicate ${f} ${JSON.stringify(w)}`);
            F[w] = _;
          }
          return F;
        }
        e.recordFromArray = r;
        function t(c, f) {
          let F = /* @__PURE__ */ new Map();
          for (let _ of c) {
            let w = _[f];
            if (F.has(w))
              throw new Error(`Duplicate ${f} ${JSON.stringify(w)}`);
            F.set(w, _);
          }
          return F;
        }
        e.mapFromArray = t;
        function s() {
          let c = /* @__PURE__ */ Object.create(null);
          return (f) => {
            let F = JSON.stringify(f);
            return c[F] ? true : (c[F] = true, false);
          };
        }
        e.createAutoChecklist = s;
        function a(c, f) {
          let F = [], _ = [];
          for (let w of c)
            f(w) ? F.push(w) : _.push(w);
          return [F, _];
        }
        e.partition = a;
        function n(c) {
          return c === Math.floor(c);
        }
        e.isInt = n;
        function u(c, f) {
          if (c === f)
            return 0;
          let F = typeof c, _ = typeof f, w = ["undefined", "object", "boolean", "number", "string"];
          return F !== _ ? w.indexOf(F) - w.indexOf(_) : F !== "string" ? Number(c) - Number(f) : c.localeCompare(f);
        }
        e.comparePrimitive = u;
        function i(c) {
          return c === void 0 ? {} : c;
        }
        e.normalizeDefaultResult = i;
        function l(c, f) {
          return c === true ? true : c === false ? { value: f } : c;
        }
        e.normalizeValidateResult = l;
        function p(c, f) {
          let F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          return c === false ? false : c === true ? F ? true : [{ value: f }] : "value" in c ? [c] : c.length === 0 ? false : c;
        }
        e.normalizeDeprecatedResult = p;
        function y(c, f) {
          return typeof c == "string" || "key" in c ? { from: f, to: c } : "from" in c ? { from: c.from, to: c.to } : { from: f, to: c.to };
        }
        e.normalizeTransferResult = y;
        function h(c, f) {
          return c === void 0 ? [] : Array.isArray(c) ? c.map((F) => y(F, f)) : [y(c, f)];
        }
        e.normalizeForwardResult = h;
        function g(c, f) {
          let F = h(typeof c == "object" && "redirect" in c ? c.redirect : c, f);
          return F.length === 0 ? { remain: f, redirect: F } : typeof c == "object" && "remain" in c ? { remain: c.remain, redirect: F } : { redirect: F };
        }
        e.normalizeRedirectResult = g;
      } }), Nm = te({ "node_modules/vnopts/lib/schemas/choice.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = eu(), s = class extends r.Schema {
          constructor(a) {
            super(a), this._choices = t.mapFromArray(a.choices.map((n) => n && typeof n == "object" ? n : { value: n }), "value");
          }
          expected(a) {
            let { descriptor: n } = a, u = Array.from(this._choices.keys()).map((p) => this._choices.get(p)).filter((p) => !p.deprecated).map((p) => p.value).sort(t.comparePrimitive).map(n.value), i = u.slice(0, -2), l = u.slice(-2);
            return i.concat(l.join(" or ")).join(", ");
          }
          validate(a) {
            return this._choices.has(a);
          }
          deprecated(a) {
            let n = this._choices.get(a);
            return n && n.deprecated ? { value: a } : false;
          }
          forward(a) {
            let n = this._choices.get(a);
            return n ? n.forward : void 0;
          }
          redirect(a) {
            let n = this._choices.get(a);
            return n ? n.redirect : void 0;
          }
        };
        e.ChoiceSchema = s;
      } }), no = te({ "node_modules/vnopts/lib/schemas/number.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "a number";
          }
          validate(s, a) {
            return typeof s == "number";
          }
        };
        e.NumberSchema = t;
      } }), wm = te({ "node_modules/vnopts/lib/schemas/integer.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = eu(), t = no(), s = class extends t.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(a, n) {
            return n.normalizeValidateResult(super.validate(a, n), a) === true && r.isInt(a);
          }
        };
        e.IntegerSchema = s;
      } }), _m = te({ "node_modules/vnopts/lib/schemas/string.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Ft(), t = class extends r.Schema {
          expected() {
            return "a string";
          }
          validate(s) {
            return typeof s == "string";
          }
        };
        e.StringSchema = t;
      } }), Pm = te({ "node_modules/vnopts/lib/schemas/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(xm(), e), r.__exportStar(bm(), e), r.__exportStar(Tm(), e), r.__exportStar(Bm(), e), r.__exportStar(Nm(), e), r.__exportStar(wm(), e), r.__exportStar(no(), e), r.__exportStar(_m(), e);
      } }), Im = te({ "node_modules/vnopts/lib/defaults.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Za(), t = eo(), s = to(), a = ro();
        e.defaultDescriptor = r.apiDescriptor, e.defaultUnknownHandler = a.levenUnknownHandler, e.defaultInvalidHandler = s.commonInvalidHandler, e.defaultDeprecatedHandler = t.commonDeprecatedHandler;
      } }), km = te({ "node_modules/vnopts/lib/normalize.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Im(), t = eu();
        e.normalize = (a, n, u) => new s(n, u).normalize(a);
        var s = class {
          constructor(a, n) {
            let { logger: u = console, descriptor: i = r.defaultDescriptor, unknown: l = r.defaultUnknownHandler, invalid: p = r.defaultInvalidHandler, deprecated: y = r.defaultDeprecatedHandler } = n || {};
            this._utils = { descriptor: i, logger: u || { warn: () => {
            } }, schemas: t.recordFromArray(a, "name"), normalizeDefaultResult: t.normalizeDefaultResult, normalizeDeprecatedResult: t.normalizeDeprecatedResult, normalizeForwardResult: t.normalizeForwardResult, normalizeRedirectResult: t.normalizeRedirectResult, normalizeValidateResult: t.normalizeValidateResult }, this._unknownHandler = l, this._invalidHandler = p, this._deprecatedHandler = y, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = t.createAutoChecklist();
          }
          normalize(a) {
            let n = {}, u = [a], i = () => {
              for (; u.length !== 0; ) {
                let l = u.shift(), p = this._applyNormalization(l, n);
                u.push(...p);
              }
            };
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let p = this._utils.schemas[l];
              if (!(l in n)) {
                let y = t.normalizeDefaultResult(p.default(this._utils));
                "value" in y && u.push({ [l]: y.value });
              }
            }
            i();
            for (let l of Object.keys(this._utils.schemas)) {
              let p = this._utils.schemas[l];
              l in n && (n[l] = p.postprocess(n[l], this._utils));
            }
            return n;
          }
          _applyNormalization(a, n) {
            let u = [], [i, l] = t.partition(Object.keys(a), (p) => p in this._utils.schemas);
            for (let p of i) {
              let y = this._utils.schemas[p], h = y.preprocess(a[p], this._utils), g = t.normalizeValidateResult(y.validate(h, this._utils), h);
              if (g !== true) {
                let { value: w } = g, E = this._invalidHandler(p, w, this._utils);
                throw typeof E == "string" ? new Error(E) : E;
              }
              let c = (w) => {
                let { from: E, to: N } = w;
                u.push(typeof N == "string" ? { [N]: E } : { [N.key]: N.value });
              }, f = (w) => {
                let { value: E, redirectTo: N } = w, x = t.normalizeDeprecatedResult(y.deprecated(E, this._utils), h, true);
                if (x !== false)
                  if (x === true)
                    this._hasDeprecationWarned(p) || this._utils.logger.warn(this._deprecatedHandler(p, N, this._utils));
                  else
                    for (let { value: I } of x) {
                      let P = { key: p, value: I };
                      if (!this._hasDeprecationWarned(P)) {
                        let $ = typeof N == "string" ? { key: N, value: I } : N;
                        this._utils.logger.warn(this._deprecatedHandler(P, $, this._utils));
                      }
                    }
              };
              t.normalizeForwardResult(y.forward(h, this._utils), h).forEach(c);
              let _ = t.normalizeRedirectResult(y.redirect(h, this._utils), h);
              if (_.redirect.forEach(c), "remain" in _) {
                let w = _.remain;
                n[p] = p in n ? y.overlap(n[p], w, this._utils) : w, f({ value: w });
              }
              for (let { from: w, to: E } of _.redirect)
                f({ value: w, redirectTo: E });
            }
            for (let p of l) {
              let y = a[p], h = this._unknownHandler(p, y, this._utils);
              if (h)
                for (let g of Object.keys(h)) {
                  let c = { [g]: h[g] };
                  g in this._utils.schemas ? u.push(c) : Object.assign(n, c);
                }
            }
            return u;
          }
        };
        e.Normalizer = s;
      } }), Lm = te({ "node_modules/vnopts/lib/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = (Et(), ft(vt));
        r.__exportStar(vm(), e), r.__exportStar(Sm(), e), r.__exportStar(Pm(), e), r.__exportStar(km(), e), r.__exportStar(Ft(), e);
      } }), Om = te({ "src/main/options-normalizer.js"(e, r) {
        ne();
        var t = Lm(), s = lt(), a = { key: (g) => g.length === 1 ? `-${g}` : `--${g}`, value: (g) => t.apiDescriptor.value(g), pair: (g) => {
          let { key: c, value: f } = g;
          return f === false ? `--no-${c}` : f === true ? a.key(c) : f === "" ? `${a.key(c)} without an argument` : `${a.key(c)}=${f}`;
        } }, n = (g) => {
          let { colorsModule: c, levenshteinDistance: f } = g;
          return class extends t.ChoiceSchema {
            constructor(_) {
              let { name: w, flags: E } = _;
              super({ name: w, choices: E }), this._flags = [...E].sort();
            }
            preprocess(_, w) {
              if (typeof _ == "string" && _.length > 0 && !this._flags.includes(_)) {
                let E = this._flags.find((N) => f(N, _) < 3);
                if (E)
                  return w.logger.warn([`Unknown flag ${c.yellow(w.descriptor.value(_))},`, `did you mean ${c.blue(w.descriptor.value(E))}?`].join(" ")), E;
              }
              return _;
            }
            expected() {
              return "a flag";
            }
          };
        }, u;
        function i(g, c) {
          let { logger: f = false, isCLI: F = false, passThrough: _ = false, colorsModule: w = null, levenshteinDistance: E = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, N = _ ? Array.isArray(_) ? (T, m) => _.includes(T) ? { [T]: m } : void 0 : (T, m) => ({ [T]: m }) : (T, m, C) => {
            let o = C.schemas, v = Hn(o, vD);
            return t.levenUnknownHandler(T, m, Object.assign(Object.assign({}, C), {}, { schemas: v }));
          }, x = F ? a : t.apiDescriptor, I = l(c, { isCLI: F, colorsModule: w, levenshteinDistance: E }), P = new t.Normalizer(I, { logger: f, unknown: N, descriptor: x }), $ = f !== false;
          $ && u && (P._hasDeprecationWarned = u);
          let D = P.normalize(g);
          return $ && (u = P._hasDeprecationWarned), F && D["plugin-search"] === false && (D["plugin-search-dir"] = false), D;
        }
        function l(g, c) {
          let { isCLI: f, colorsModule: F, levenshteinDistance: _ } = c, w = [];
          f && w.push(t.AnySchema.create({ name: "_" }));
          for (let E of g)
            w.push(p(E, { isCLI: f, optionInfos: g, colorsModule: F, levenshteinDistance: _ })), E.alias && f && w.push(t.AliasSchema.create({ name: E.alias, sourceName: E.name }));
          return w;
        }
        function p(g, c) {
          let { isCLI: f, optionInfos: F, colorsModule: _, levenshteinDistance: w } = c, { name: E } = g;
          if (E === "plugin-search-dir" || E === "pluginSearchDirs")
            return t.AnySchema.create({ name: E, preprocess(P) {
              return P === false || (P = Array.isArray(P) ? P : [P]), P;
            }, validate(P) {
              return P === false ? true : P.every(($) => typeof $ == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let N = { name: E }, x, I = {};
          switch (g.type) {
            case "int":
              x = t.IntegerSchema, f && (N.preprocess = Number);
              break;
            case "string":
              x = t.StringSchema;
              break;
            case "choice":
              x = t.ChoiceSchema, N.choices = g.choices.map((P) => typeof P == "object" && P.redirect ? Object.assign(Object.assign({}, P), {}, { redirect: { to: { key: g.name, value: P.redirect } } }) : P);
              break;
            case "boolean":
              x = t.BooleanSchema;
              break;
            case "flag":
              x = n({ colorsModule: _, levenshteinDistance: w }), N.flags = F.flatMap((P) => [P.alias, P.description && P.name, P.oppositeDescription && `no-${P.name}`].filter(Boolean));
              break;
            case "path":
              x = t.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${g.type}`);
          }
          if (g.exception ? N.validate = (P, $, D) => g.exception(P) || $.validate(P, D) : N.validate = (P, $, D) => P === void 0 || $.validate(P, D), g.redirect && (I.redirect = (P) => P ? { to: { key: g.redirect.option, value: g.redirect.value } } : void 0), g.deprecated && (I.deprecated = true), f && !g.array) {
            let P = N.preprocess || (($) => $);
            N.preprocess = ($, D, T) => D.preprocess(P(Array.isArray($) ? s($) : $), T);
          }
          return g.array ? t.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, f ? { preprocess: (P) => Array.isArray(P) ? P : [P] } : {}), I), {}, { valueSchema: x.create(N) })) : x.create(Object.assign(Object.assign({}, N), I));
        }
        function y(g, c, f) {
          return i(g, c, f);
        }
        function h(g, c, f) {
          return i(g, c, Object.assign({ isCLI: true }, f));
        }
        r.exports = { normalizeApiOptions: y, normalizeCliOptions: h };
      } }), ut = te({ "src/language-js/loc.js"(e, r) {
        ne();
        var t = Kn();
        function s(l) {
          var p, y;
          let h = l.range ? l.range[0] : l.start, g = (p = (y = l.declaration) === null || y === void 0 ? void 0 : y.decorators) !== null && p !== void 0 ? p : l.decorators;
          return t(g) ? Math.min(s(g[0]), h) : h;
        }
        function a(l) {
          return l.range ? l.range[1] : l.end;
        }
        function n(l, p) {
          let y = s(l);
          return Number.isInteger(y) && y === s(p);
        }
        function u(l, p) {
          let y = a(l);
          return Number.isInteger(y) && y === a(p);
        }
        function i(l, p) {
          return n(l, p) && u(l, p);
        }
        r.exports = { locStart: s, locEnd: a, hasSameLocStart: n, hasSameLoc: i };
      } }), jm = te({ "src/main/load-parser.js"(e, r) {
        ne(), r.exports = () => {
        };
      } }), qm = te({ "scripts/build/shims/babel-highlight.cjs"(e, r) {
        ne();
        var t = kr(), s = { shouldHighlight: () => false, getChalk: () => t };
        r.exports = s;
      } }), Mm = te({ "node_modules/@babel/code-frame/lib/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.codeFrameColumns = u, e.default = i;
        var r = qm(), t = false;
        function s(l) {
          return { gutter: l.grey, marker: l.red.bold, message: l.red.bold };
        }
        var a = /\r\n|[\n\r\u2028\u2029]/;
        function n(l, p, y) {
          let h = Object.assign({ column: 0, line: -1 }, l.start), g = Object.assign({}, h, l.end), { linesAbove: c = 2, linesBelow: f = 3 } = y || {}, F = h.line, _ = h.column, w = g.line, E = g.column, N = Math.max(F - (c + 1), 0), x = Math.min(p.length, w + f);
          F === -1 && (N = 0), w === -1 && (x = p.length);
          let I = w - F, P = {};
          if (I)
            for (let $ = 0; $ <= I; $++) {
              let D = $ + F;
              if (!_)
                P[D] = true;
              else if ($ === 0) {
                let T = p[D - 1].length;
                P[D] = [_, T - _ + 1];
              } else if ($ === I)
                P[D] = [0, E];
              else {
                let T = p[D - $].length;
                P[D] = [0, T];
              }
            }
          else
            _ === E ? _ ? P[F] = [_, 0] : P[F] = true : P[F] = [_, E - _];
          return { start: N, end: x, markerLines: P };
        }
        function u(l, p) {
          let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = (y.highlightCode || y.forceColor) && (0, r.shouldHighlight)(y), g = (0, r.getChalk)(y), c = s(g), f = ($, D) => h ? $(D) : D, F = l.split(a), { start: _, end: w, markerLines: E } = n(p, F, y), N = p.start && typeof p.start.column == "number", x = String(w).length, P = (h ? (0, r.default)(l, y) : l).split(a, w).slice(_, w).map(($, D) => {
            let T = _ + 1 + D, C = ` ${` ${T}`.slice(-x)} |`, o = E[T], d = !E[T + 1];
            if (o) {
              let v = "";
              if (Array.isArray(o)) {
                let S = $.slice(0, Math.max(o[0] - 1, 0)).replace(/[^\t]/g, " "), b = o[1] || 1;
                v = [`
 `, f(c.gutter, C.replace(/\d/g, " ")), " ", S, f(c.marker, "^").repeat(b)].join(""), d && y.message && (v += " " + f(c.message, y.message));
              }
              return [f(c.marker, ">"), f(c.gutter, C), $.length > 0 ? ` ${$}` : "", v].join("");
            } else
              return ` ${f(c.gutter, C)}${$.length > 0 ? ` ${$}` : ""}`;
          }).join(`
`);
          return y.message && !N && (P = `${" ".repeat(x + 1)}${y.message}
${P}`), h ? g.reset(P) : P;
        }
        function i(l, p, y) {
          let h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!t) {
            t = true;
            let c = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (wt.emitWarning)
              wt.emitWarning(c, "DeprecationWarning");
            else {
              let f = new Error(c);
              f.name = "DeprecationWarning", console.warn(new Error(c));
            }
          }
          return y = Math.max(y, 0), u(l, { start: { column: y, line: p } }, h);
        }
      } }), tu = te({ "src/main/parser.js"(e, r) {
        ne();
        var { ConfigError: t } = Qt(), s = ut();
        jm();
        var { locStart: n, locEnd: u } = s, i = Object.getOwnPropertyNames, l = Object.getOwnPropertyDescriptor;
        function p(g) {
          let c = {};
          for (let f of g.plugins)
            if (f.parsers)
              for (let F of i(f.parsers))
                Object.defineProperty(c, F, l(f.parsers, F));
          return c;
        }
        function y(g) {
          let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p(g);
          if (typeof g.parser == "function")
            return { parse: g.parser, astFormat: "estree", locStart: n, locEnd: u };
          if (typeof g.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(c, g.parser))
              return c[g.parser];
            throw new t(`Couldn't resolve parser "${g.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function h(g, c) {
          let f = p(c), F = Object.defineProperties({}, Object.fromEntries(Object.keys(f).map((w) => [w, { enumerable: true, get() {
            return f[w].parse;
          } }]))), _ = y(c, f);
          try {
            return _.preprocess && (g = _.preprocess(g, c)), { text: g, ast: _.parse(g, F, c) };
          } catch (w) {
            let { loc: E } = w;
            if (E) {
              let { codeFrameColumns: N } = Mm();
              throw w.codeFrame = N(g, E, { highlightCode: true }), w.message += `
` + w.codeFrame, w;
            }
            throw w;
          }
        }
        r.exports = { parse: h, resolveParser: y };
      } }), uo = te({ "src/main/options.js"(e, r) {
        ne();
        var t = ZD(), { UndefinedParserError: s } = Qt(), { getSupportInfo: a } = Xn(), n = Om(), { resolveParser: u } = tu(), i = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function l(h) {
          let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = Object.assign({}, h), f = a({ plugins: h.plugins, showUnreleased: true, showDeprecated: true }).options, F = Object.assign(Object.assign({}, i), Object.fromEntries(f.filter((x) => x.default !== void 0).map((x) => [x.name, x.default])));
          if (!c.parser) {
            if (!c.filepath)
              (g.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), c.parser = "babel";
            else if (c.parser = y(c.filepath, c.plugins), !c.parser)
              throw new s(`No parser could be inferred for file: ${c.filepath}`);
          }
          let _ = u(n.normalizeApiOptions(c, [f.find((x) => x.name === "parser")], { passThrough: true, logger: false }));
          c.astFormat = _.astFormat, c.locEnd = _.locEnd, c.locStart = _.locStart;
          let w = p(c);
          c.printer = w.printers[c.astFormat];
          let E = Object.fromEntries(f.filter((x) => x.pluginDefaults && x.pluginDefaults[w.name] !== void 0).map((x) => [x.name, x.pluginDefaults[w.name]])), N = Object.assign(Object.assign({}, F), E);
          for (let [x, I] of Object.entries(N))
            (c[x] === null || c[x] === void 0) && (c[x] = I);
          return c.parser === "json" && (c.trailingComma = "none"), n.normalizeApiOptions(c, f, Object.assign({ passThrough: Object.keys(i) }, g));
        }
        function p(h) {
          let { astFormat: g } = h;
          if (!g)
            throw new Error("getPlugin() requires astFormat to be set");
          let c = h.plugins.find((f) => f.printers && f.printers[g]);
          if (!c)
            throw new Error(`Couldn't find plugin for AST format "${g}"`);
          return c;
        }
        function y(h, g) {
          let c = t.basename(h).toLowerCase(), F = a({ plugins: g }).languages.filter((_) => _.since !== null).find((_) => _.extensions && _.extensions.some((w) => c.endsWith(w)) || _.filenames && _.filenames.some((w) => w.toLowerCase() === c));
          return F && F.parsers[0];
        }
        r.exports = { normalize: l, hiddenDefaults: i, inferParser: y };
      } }), Rm = te({ "src/main/massage-ast.js"(e, r) {
        ne();
        function t(s, a, n) {
          if (Array.isArray(s))
            return s.map((p) => t(p, a, n)).filter(Boolean);
          if (!s || typeof s != "object")
            return s;
          let u = a.printer.massageAstNode, i;
          u && u.ignoredProperties ? i = u.ignoredProperties : i = /* @__PURE__ */ new Set();
          let l = {};
          for (let [p, y] of Object.entries(s))
            !i.has(p) && typeof y != "function" && (l[p] = t(y, a, s));
          if (u) {
            let p = u(s, l, n);
            if (p === null)
              return;
            if (p)
              return p;
          }
          return l;
        }
        r.exports = t;
      } }), Zt = te({ "scripts/build/shims/assert.cjs"(e, r) {
        ne();
        var t = () => {
        };
        t.ok = t, t.strictEqual = t, r.exports = t;
      } }), et = te({ "src/main/comments.js"(e, r) {
        ne();
        var t = Zt(), { builders: { line: s, hardline: a, breakParent: n, indent: u, lineSuffix: i, join: l, cursor: p } } = qe(), { hasNewline: y, skipNewline: h, skipSpaces: g, isPreviousLineEmpty: c, addLeadingComment: f, addDanglingComment: F, addTrailingComment: _ } = Ue(), w = /* @__PURE__ */ new WeakMap();
        function E(k, M, R) {
          if (!k)
            return;
          let { printer: q, locStart: J, locEnd: L } = M;
          if (R) {
            if (q.canAttachComment && q.canAttachComment(k)) {
              let V;
              for (V = R.length - 1; V >= 0 && !(J(R[V]) <= J(k) && L(R[V]) <= L(k)); --V)
                ;
              R.splice(V + 1, 0, k);
              return;
            }
          } else if (w.has(k))
            return w.get(k);
          let Q = q.getCommentChildNodes && q.getCommentChildNodes(k, M) || typeof k == "object" && Object.entries(k).filter((V) => {
            let [j] = V;
            return j !== "enclosingNode" && j !== "precedingNode" && j !== "followingNode" && j !== "tokens" && j !== "comments" && j !== "parent";
          }).map((V) => {
            let [, j] = V;
            return j;
          });
          if (Q) {
            R || (R = [], w.set(k, R));
            for (let V of Q)
              E(V, M, R);
            return R;
          }
        }
        function N(k, M, R, q) {
          let { locStart: J, locEnd: L } = R, Q = J(M), V = L(M), j = E(k, R), Y, ie, ee = 0, ce = j.length;
          for (; ee < ce; ) {
            let W = ee + ce >> 1, K = j[W], de = J(K), ue = L(K);
            if (de <= Q && V <= ue)
              return N(K, M, R, K);
            if (ue <= Q) {
              Y = K, ee = W + 1;
              continue;
            }
            if (V <= de) {
              ie = K, ce = W;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (q && q.type === "TemplateLiteral") {
            let { quasis: W } = q, K = C(W, M, R);
            Y && C(W, Y, R) !== K && (Y = null), ie && C(W, ie, R) !== K && (ie = null);
          }
          return { enclosingNode: q, precedingNode: Y, followingNode: ie };
        }
        var x = () => false;
        function I(k, M, R, q) {
          if (!Array.isArray(k))
            return;
          let J = [], { locStart: L, locEnd: Q, printer: { handleComments: V = {} } } = q, { avoidAstMutation: j, ownLine: Y = x, endOfLine: ie = x, remaining: ee = x } = V, ce = k.map((W, K) => Object.assign(Object.assign({}, N(M, W, q)), {}, { comment: W, text: R, options: q, ast: M, isLastComment: k.length - 1 === K }));
          for (let [W, K] of ce.entries()) {
            let { comment: de, precedingNode: ue, enclosingNode: Fe, followingNode: z, text: U, options: Z, ast: se, isLastComment: fe } = K;
            if (Z.parser === "json" || Z.parser === "json5" || Z.parser === "__js_expression" || Z.parser === "__vue_expression" || Z.parser === "__vue_ts_expression") {
              if (L(de) - L(se) <= 0) {
                f(se, de);
                continue;
              }
              if (Q(de) - Q(se) >= 0) {
                _(se, de);
                continue;
              }
            }
            let ge;
            if (j ? ge = [K] : (de.enclosingNode = Fe, de.precedingNode = ue, de.followingNode = z, ge = [de, U, Z, se, fe]), $(U, Z, ce, W))
              de.placement = "ownLine", Y(...ge) || (z ? f(z, de) : ue ? _(ue, de) : F(Fe || se, de));
            else if (D(U, Z, ce, W))
              de.placement = "endOfLine", ie(...ge) || (ue ? _(ue, de) : z ? f(z, de) : F(Fe || se, de));
            else if (de.placement = "remaining", !ee(...ge))
              if (ue && z) {
                let he = J.length;
                he > 0 && J[he - 1].followingNode !== z && T(J, U, Z), J.push(K);
              } else
                ue ? _(ue, de) : z ? f(z, de) : F(Fe || se, de);
          }
          if (T(J, R, q), !j)
            for (let W of k)
              delete W.precedingNode, delete W.enclosingNode, delete W.followingNode;
        }
        var P = (k) => !/[\S\n\u2028\u2029]/.test(k);
        function $(k, M, R, q) {
          let { comment: J, precedingNode: L } = R[q], { locStart: Q, locEnd: V } = M, j = Q(J);
          if (L)
            for (let Y = q - 1; Y >= 0; Y--) {
              let { comment: ie, precedingNode: ee } = R[Y];
              if (ee !== L || !P(k.slice(V(ie), j)))
                break;
              j = Q(ie);
            }
          return y(k, j, { backwards: true });
        }
        function D(k, M, R, q) {
          let { comment: J, followingNode: L } = R[q], { locStart: Q, locEnd: V } = M, j = V(J);
          if (L)
            for (let Y = q + 1; Y < R.length; Y++) {
              let { comment: ie, followingNode: ee } = R[Y];
              if (ee !== L || !P(k.slice(j, Q(ie))))
                break;
              j = V(ie);
            }
          return y(k, j);
        }
        function T(k, M, R) {
          let q = k.length;
          if (q === 0)
            return;
          let { precedingNode: J, followingNode: L, enclosingNode: Q } = k[0], V = R.printer.getGapRegex && R.printer.getGapRegex(Q) || /^[\s(]*$/, j = R.locStart(L), Y;
          for (Y = q; Y > 0; --Y) {
            let { comment: ie, precedingNode: ee, followingNode: ce } = k[Y - 1];
            t.strictEqual(ee, J), t.strictEqual(ce, L);
            let W = M.slice(R.locEnd(ie), j);
            if (V.test(W))
              j = R.locStart(ie);
            else
              break;
          }
          for (let [ie, { comment: ee }] of k.entries())
            ie < Y ? _(J, ee) : f(L, ee);
          for (let ie of [J, L])
            ie.comments && ie.comments.length > 1 && ie.comments.sort((ee, ce) => R.locStart(ee) - R.locStart(ce));
          k.length = 0;
        }
        function m(k, M) {
          let R = k.getValue();
          return R.printed = true, M.printer.printComment(k, M);
        }
        function C(k, M, R) {
          let q = R.locStart(M) - 1;
          for (let J = 1; J < k.length; ++J)
            if (q < R.locStart(k[J]))
              return J - 1;
          return 0;
        }
        function o(k, M) {
          let R = k.getValue(), q = [m(k, M)], { printer: J, originalText: L, locStart: Q, locEnd: V } = M;
          if (J.isBlockComment && J.isBlockComment(R)) {
            let ie = y(L, V(R)) ? y(L, Q(R), { backwards: true }) ? a : s : " ";
            q.push(ie);
          } else
            q.push(a);
          let Y = h(L, g(L, V(R)));
          return Y !== false && y(L, Y) && q.push(a), q;
        }
        function d(k, M) {
          let R = k.getValue(), q = m(k, M), { printer: J, originalText: L, locStart: Q } = M, V = J.isBlockComment && J.isBlockComment(R);
          if (y(L, Q(R), { backwards: true })) {
            let Y = c(L, R, Q);
            return i([a, Y ? a : "", q]);
          }
          let j = [" ", q];
          return V || (j = [i(j), n]), j;
        }
        function v(k, M, R, q) {
          let J = [], L = k.getValue();
          return !L || !L.comments || (k.each(() => {
            let Q = k.getValue();
            !Q.leading && !Q.trailing && (!q || q(Q)) && J.push(m(k, M));
          }, "comments"), J.length === 0) ? "" : R ? l(a, J) : u([a, l(a, J)]);
        }
        function S(k, M, R) {
          let q = k.getValue();
          if (!q)
            return {};
          let J = q.comments || [];
          R && (J = J.filter((j) => !R.has(j)));
          let L = q === M.cursorNode;
          if (J.length === 0) {
            let j = L ? p : "";
            return { leading: j, trailing: j };
          }
          let Q = [], V = [];
          return k.each(() => {
            let j = k.getValue();
            if (R && R.has(j))
              return;
            let { leading: Y, trailing: ie } = j;
            Y ? Q.push(o(k, M)) : ie && V.push(d(k, M));
          }, "comments"), L && (Q.unshift(p), V.push(p)), { leading: Q, trailing: V };
        }
        function b(k, M, R, q) {
          let { leading: J, trailing: L } = S(k, R, q);
          return !J && !L ? M : [J, M, L];
        }
        function B(k) {
          if (k)
            for (let M of k) {
              if (!M.printed)
                throw new Error('Comment "' + M.value.trim() + '" was not printed. Please report this error!');
              delete M.printed;
            }
        }
        r.exports = { attach: I, printComments: b, printCommentsSeparately: S, printDanglingComments: v, getSortedChildNodes: E, ensureAllCommentsPrinted: B };
      } }), $m = te({ "src/common/ast-path.js"(e, r) {
        ne();
        var t = lt();
        function s(u, i) {
          let l = a(u.stack, i);
          return l === -1 ? null : u.stack[l];
        }
        function a(u, i) {
          for (let l = u.length - 1; l >= 0; l -= 2) {
            let p = u[l];
            if (p && !Array.isArray(p) && --i < 0)
              return l;
          }
          return -1;
        }
        var n = class {
          constructor(u) {
            this.stack = [u];
          }
          getName() {
            let { stack: u } = this, { length: i } = u;
            return i > 1 ? u[i - 2] : null;
          }
          getValue() {
            return t(this.stack);
          }
          getNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u);
          }
          getParentNode() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return s(this, u + 1);
          }
          call(u) {
            let { stack: i } = this, { length: l } = i, p = t(i);
            for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              h[g - 1] = arguments[g];
            for (let f of h)
              p = p[f], i.push(f, p);
            let c = u(this);
            return i.length = l, c;
          }
          callParent(u) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, l = a(this.stack, i + 1), p = this.stack.splice(l + 1), y = u(this);
            return this.stack.push(...p), y;
          }
          each(u) {
            let { stack: i } = this, { length: l } = i, p = t(i);
            for (var y = arguments.length, h = new Array(y > 1 ? y - 1 : 0), g = 1; g < y; g++)
              h[g - 1] = arguments[g];
            for (let c of h)
              p = p[c], i.push(c, p);
            for (let c = 0; c < p.length; ++c)
              i.push(c, p[c]), u(this, c, p), i.length -= 2;
            i.length = l;
          }
          map(u) {
            let i = [];
            for (var l = arguments.length, p = new Array(l > 1 ? l - 1 : 0), y = 1; y < l; y++)
              p[y - 1] = arguments[y];
            return this.each((h, g, c) => {
              i[g] = u(h, g, c);
            }, ...p), i;
          }
          try(u) {
            let { stack: i } = this, l = [...i];
            try {
              return u();
            } finally {
              i.length = 0, i.push(...l);
            }
          }
          match() {
            let u = this.stack.length - 1, i = null, l = this.stack[u--];
            for (var p = arguments.length, y = new Array(p), h = 0; h < p; h++)
              y[h] = arguments[h];
            for (let g of y) {
              if (l === void 0)
                return false;
              let c = null;
              if (typeof i == "number" && (c = i, i = this.stack[u--], l = this.stack[u--]), g && !g(l, i, c))
                return false;
              i = this.stack[u--], l = this.stack[u--];
            }
            return true;
          }
          findAncestor(u) {
            let i = this.stack.length - 1, l = null, p = this.stack[i--];
            for (; p; ) {
              let y = null;
              if (typeof l == "number" && (y = l, l = this.stack[i--], p = this.stack[i--]), l !== null && u(p, l, y))
                return p;
              l = this.stack[i--], p = this.stack[i--];
            }
          }
        };
        r.exports = n;
      } }), Vm = te({ "src/main/multiparser.js"(e, r) {
        ne();
        var { utils: { stripTrailingHardline: t } } = qe(), { normalize: s } = uo(), a = et();
        function n(i, l, p, y) {
          if (p.printer.embed && p.embeddedLanguageFormatting === "auto")
            return p.printer.embed(i, l, (h, g, c) => u(h, g, p, y, c), p);
        }
        function u(i, l, p, y) {
          let { stripTrailingHardline: h = false } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, g = s(Object.assign(Object.assign(Object.assign({}, p), l), {}, { parentParser: p.parser, originalText: i }), { passThrough: true }), c = tu().parse(i, g), { ast: f } = c;
          i = c.text;
          let F = f.comments;
          delete f.comments, a.attach(F, f, i, g), g[Symbol.for("comments")] = F || [], g[Symbol.for("tokens")] = f.tokens || [];
          let _ = y(f, g);
          return a.ensureAllCommentsPrinted(F), h ? typeof _ == "string" ? _.replace(/(?:\r?\n)*$/, "") : t(_) : _;
        }
        r.exports = { printSubtree: n };
      } }), Wm = te({ "src/main/ast-to-doc.js"(e, r) {
        ne();
        var t = $m(), { builders: { hardline: s, addAlignmentToDoc: a }, utils: { propagateBreaks: n } } = qe(), { printComments: u } = et(), i = Vm();
        function l(h, g) {
          let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: f } = g;
          f.preprocess && (h = f.preprocess(h, g));
          let F = /* @__PURE__ */ new Map(), _ = new t(h), w = E();
          return c > 0 && (w = a([s, w], c, g.tabWidth)), n(w), w;
          function E(x, I) {
            return x === void 0 || x === _ ? N(I) : Array.isArray(x) ? _.call(() => N(I), ...x) : _.call(() => N(I), x);
          }
          function N(x) {
            let I = _.getValue(), P = I && typeof I == "object" && x === void 0;
            if (P && F.has(I))
              return F.get(I);
            let $ = y(_, g, E, x);
            return P && F.set(I, $), $;
          }
        }
        function p(h, g) {
          let { originalText: c, [Symbol.for("comments")]: f, locStart: F, locEnd: _ } = g, w = F(h), E = _(h), N = /* @__PURE__ */ new Set();
          for (let x of f)
            F(x) >= w && _(x) <= E && (x.printed = true, N.add(x));
          return { doc: c.slice(w, E), printedComments: N };
        }
        function y(h, g, c, f) {
          let F = h.getValue(), { printer: _ } = g, w, E;
          if (_.hasPrettierIgnore && _.hasPrettierIgnore(h))
            ({ doc: w, printedComments: E } = p(F, g));
          else {
            if (F)
              try {
                w = i.printSubtree(h, c, g, l);
              } catch (N) {
                if (globalThis.PRETTIER_DEBUG)
                  throw N;
              }
            w || (w = _.print(h, g, c, f));
          }
          return (!_.willPrintOwnComments || !_.willPrintOwnComments(h, g)) && (w = u(h, w, g, E)), w;
        }
        r.exports = l;
      } }), Hm = te({ "src/main/range-util.js"(e, r) {
        ne();
        var t = Zt(), s = et(), a = (f) => {
          let { parser: F } = f;
          return F === "json" || F === "json5" || F === "json-stringify";
        };
        function n(f, F) {
          let _ = [f.node, ...f.parentNodes], w = /* @__PURE__ */ new Set([F.node, ...F.parentNodes]);
          return _.find((E) => y.has(E.type) && w.has(E));
        }
        function u(f) {
          let F = f.length - 1;
          for (; ; ) {
            let _ = f[F];
            if (_ && (_.type === "Program" || _.type === "File"))
              F--;
            else
              break;
          }
          return f.slice(0, F + 1);
        }
        function i(f, F, _) {
          let { locStart: w, locEnd: E } = _, N = f.node, x = F.node;
          if (N === x)
            return { startNode: N, endNode: x };
          let I = w(f.node);
          for (let $ of u(F.parentNodes))
            if (w($) >= I)
              x = $;
            else
              break;
          let P = E(F.node);
          for (let $ of u(f.parentNodes)) {
            if (E($) <= P)
              N = $;
            else
              break;
            if (N === x)
              break;
          }
          return { startNode: N, endNode: x };
        }
        function l(f, F, _, w) {
          let E = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], N = arguments.length > 5 ? arguments[5] : void 0, { locStart: x, locEnd: I } = _, P = x(f), $ = I(f);
          if (!(F > $ || F < P || N === "rangeEnd" && F === P || N === "rangeStart" && F === $)) {
            for (let D of s.getSortedChildNodes(f, _)) {
              let T = l(D, F, _, w, [f, ...E], N);
              if (T)
                return T;
            }
            if (!w || w(f, E[0]))
              return { node: f, parentNodes: E };
          }
        }
        function p(f, F) {
          return F !== "DeclareExportDeclaration" && f !== "TypeParameterDeclaration" && (f === "Directive" || f === "TypeAlias" || f === "TSExportAssignment" || f.startsWith("Declare") || f.startsWith("TSDeclare") || f.endsWith("Statement") || f.endsWith("Declaration"));
        }
        var y = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), h = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function g(f, F, _) {
          if (!F)
            return false;
          switch (f.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return p(F.type, _ && _.type);
            case "json":
            case "json5":
            case "json-stringify":
              return y.has(F.type);
            case "graphql":
              return h.has(F.kind);
            case "vue":
              return F.tag !== "root";
          }
          return false;
        }
        function c(f, F, _) {
          let { rangeStart: w, rangeEnd: E, locStart: N, locEnd: x } = F;
          t.ok(E > w);
          let I = f.slice(w, E).search(/\S/), P = I === -1;
          if (!P)
            for (w += I; E > w && !/\S/.test(f[E - 1]); --E)
              ;
          let $ = l(_, w, F, (C, o) => g(F, C, o), [], "rangeStart"), D = P ? $ : l(_, E, F, (C) => g(F, C), [], "rangeEnd");
          if (!$ || !D)
            return { rangeStart: 0, rangeEnd: 0 };
          let T, m;
          if (a(F)) {
            let C = n($, D);
            T = C, m = C;
          } else
            ({ startNode: T, endNode: m } = i($, D, F));
          return { rangeStart: Math.min(N(T), N(m)), rangeEnd: Math.max(x(T), x(m)) };
        }
        r.exports = { calculateRange: c, findNodeAtOffset: l };
      } }), Gm = te({ "src/main/core.js"(e, r) {
        ne();
        var { diffArrays: t } = BD(), { printer: { printDocToString: s }, debug: { printDocToDebug: a } } = qe(), { getAlignmentSize: n } = Ue(), { guessEndOfLine: u, convertEndOfLineToChars: i, countEndOfLineChars: l, normalizeEndOfLine: p } = Jn(), y = uo().normalize, h = Rm(), g = et(), c = tu(), f = Wm(), F = Hm(), _ = "\uFEFF", w = Symbol("cursor");
        function E(m, C, o) {
          let d = C.comments;
          return d && (delete C.comments, g.attach(d, C, m, o)), o[Symbol.for("comments")] = d || [], o[Symbol.for("tokens")] = C.tokens || [], o.originalText = m, d;
        }
        function N(m, C) {
          let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!m || m.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: d, text: v } = c.parse(m, C);
          if (C.cursorOffset >= 0) {
            let k = F.findNodeAtOffset(d, C.cursorOffset, C);
            k && k.node && (C.cursorNode = k.node);
          }
          let S = E(v, d, C), b = f(d, C, o), B = s(b, C);
          if (g.ensureAllCommentsPrinted(S), o > 0) {
            let k = B.formatted.trim();
            B.cursorNodeStart !== void 0 && (B.cursorNodeStart -= B.formatted.indexOf(k)), B.formatted = k + i(C.endOfLine);
          }
          if (C.cursorOffset >= 0) {
            let k, M, R, q, J;
            if (C.cursorNode && B.cursorNodeText ? (k = C.locStart(C.cursorNode), M = v.slice(k, C.locEnd(C.cursorNode)), R = C.cursorOffset - k, q = B.cursorNodeStart, J = B.cursorNodeText) : (k = 0, M = v, R = C.cursorOffset, q = 0, J = B.formatted), M === J)
              return { formatted: B.formatted, cursorOffset: q + R, comments: S };
            let L = [...M];
            L.splice(R, 0, w);
            let Q = [...J], V = t(L, Q), j = q;
            for (let Y of V)
              if (Y.removed) {
                if (Y.value.includes(w))
                  break;
              } else
                j += Y.count;
            return { formatted: B.formatted, cursorOffset: j, comments: S };
          }
          return { formatted: B.formatted, cursorOffset: -1, comments: S };
        }
        function x(m, C) {
          let { ast: o, text: d } = c.parse(m, C), { rangeStart: v, rangeEnd: S } = F.calculateRange(d, C, o), b = d.slice(v, S), B = Math.min(v, d.lastIndexOf(`
`, v) + 1), k = d.slice(B, v).match(/^\s*/)[0], M = n(k, C.tabWidth), R = N(b, Object.assign(Object.assign({}, C), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: C.cursorOffset > v && C.cursorOffset <= S ? C.cursorOffset - v : -1, endOfLine: "lf" }), M), q = R.formatted.trimEnd(), { cursorOffset: J } = C;
          J > S ? J += q.length - b.length : R.cursorOffset >= 0 && (J = R.cursorOffset + v);
          let L = d.slice(0, v) + q + d.slice(S);
          if (C.endOfLine !== "lf") {
            let Q = i(C.endOfLine);
            J >= 0 && Q === `\r
` && (J += l(L.slice(0, J), `
`)), L = L.replace(/\n/g, Q);
          }
          return { formatted: L, cursorOffset: J, comments: R.comments };
        }
        function I(m, C, o) {
          return typeof C != "number" || Number.isNaN(C) || C < 0 || C > m.length ? o : C;
        }
        function P(m, C) {
          let { cursorOffset: o, rangeStart: d, rangeEnd: v } = C;
          return o = I(m, o, -1), d = I(m, d, 0), v = I(m, v, m.length), Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: d, rangeEnd: v });
        }
        function $(m, C) {
          let { cursorOffset: o, rangeStart: d, rangeEnd: v, endOfLine: S } = P(m, C), b = m.charAt(0) === _;
          if (b && (m = m.slice(1), o--, d--, v--), S === "auto" && (S = u(m)), m.includes("\r")) {
            let B = (k) => l(m.slice(0, Math.max(k, 0)), `\r
`);
            o -= B(o), d -= B(d), v -= B(v), m = p(m);
          }
          return { hasBOM: b, text: m, options: P(m, Object.assign(Object.assign({}, C), {}, { cursorOffset: o, rangeStart: d, rangeEnd: v, endOfLine: S })) };
        }
        function D(m, C) {
          let o = c.resolveParser(C);
          return !o.hasPragma || o.hasPragma(m);
        }
        function T(m, C) {
          let { hasBOM: o, text: d, options: v } = $(m, y(C));
          if (v.rangeStart >= v.rangeEnd && d !== "" || v.requirePragma && !D(d, v))
            return { formatted: m, cursorOffset: C.cursorOffset, comments: [] };
          let S;
          return v.rangeStart > 0 || v.rangeEnd < d.length ? S = x(d, v) : (!v.requirePragma && v.insertPragma && v.printer.insertPragma && !D(d, v) && (d = v.printer.insertPragma(d)), S = N(d, v)), o && (S.formatted = _ + S.formatted, S.cursorOffset >= 0 && S.cursorOffset++), S;
        }
        r.exports = { formatWithCursor: T, parse(m, C, o) {
          let { text: d, options: v } = $(m, y(C)), S = c.parse(d, v);
          return o && (S.ast = h(S.ast, v)), S;
        }, formatAST(m, C) {
          C = y(C);
          let o = f(m, C);
          return s(o, C);
        }, formatDoc(m, C) {
          return T(a(m), Object.assign(Object.assign({}, C), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(m, C) {
          C = y(C);
          let { ast: o, text: d } = c.parse(m, C);
          return E(d, o, C), f(o, C);
        }, printDocToString(m, C) {
          return s(m, y(C));
        } };
      } }), Um = te({ "src/common/util-shared.js"(e, r) {
        ne();
        var { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: y, skipEverythingButNewLine: h, skipInlineComment: g, skipTrailingComment: c, hasNewline: f, hasNewlineInRange: F, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: E, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: I, addLeadingComment: P, addDanglingComment: $, addTrailingComment: D } = Ue();
        r.exports = { getMaxContinuousCount: t, getStringWidth: s, getAlignmentSize: a, getIndentSize: n, skip: u, skipWhitespace: i, skipSpaces: l, skipNewline: p, skipToLineEnd: y, skipEverythingButNewLine: h, skipInlineComment: g, skipTrailingComment: c, hasNewline: f, hasNewlineInRange: F, hasSpaces: _, isNextLineEmpty: w, isNextLineEmptyAfterIndex: E, isPreviousLineEmpty: N, getNextNonSpaceNonCommentCharacterIndex: x, makeString: I, addLeadingComment: P, addDanglingComment: $, addTrailingComment: D };
      } }), _t = te({ "src/utils/create-language.js"(e, r) {
        ne(), r.exports = function(t, s) {
          let { languageId: a } = t, n = Hn(t, CD);
          return Object.assign(Object.assign({ linguistLanguageId: a }, n), s(t));
        };
      } }), Jm = te({ "node_modules/esutils/lib/ast.js"(e, r) {
        ne(), function() {
          function t(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return true;
            }
            return false;
          }
          function s(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return true;
            }
            return false;
          }
          function a(l) {
            if (l == null)
              return false;
            switch (l.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return true;
            }
            return false;
          }
          function n(l) {
            return a(l) || l != null && l.type === "FunctionDeclaration";
          }
          function u(l) {
            switch (l.type) {
              case "IfStatement":
                return l.alternate != null ? l.alternate : l.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return l.body;
            }
            return null;
          }
          function i(l) {
            var p;
            if (l.type !== "IfStatement" || l.alternate == null)
              return false;
            p = l.consequent;
            do {
              if (p.type === "IfStatement" && p.alternate == null)
                return true;
              p = u(p);
            } while (p);
            return false;
          }
          r.exports = { isExpression: t, isStatement: a, isIterationStatement: s, isSourceElement: n, isProblematicIfStatement: i, trailingStatement: u };
        }();
      } }), so = te({ "node_modules/esutils/lib/code.js"(e, r) {
        ne(), function() {
          var t, s, a, n, u, i;
          s = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, t = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function l(E) {
            return 48 <= E && E <= 57;
          }
          function p(E) {
            return 48 <= E && E <= 57 || 97 <= E && E <= 102 || 65 <= E && E <= 70;
          }
          function y(E) {
            return E >= 48 && E <= 55;
          }
          a = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function h(E) {
            return E === 32 || E === 9 || E === 11 || E === 12 || E === 160 || E >= 5760 && a.indexOf(E) >= 0;
          }
          function g(E) {
            return E === 10 || E === 13 || E === 8232 || E === 8233;
          }
          function c(E) {
            if (E <= 65535)
              return String.fromCharCode(E);
            var N = String.fromCharCode(Math.floor((E - 65536) / 1024) + 55296), x = String.fromCharCode((E - 65536) % 1024 + 56320);
            return N + x;
          }
          for (n = new Array(128), i = 0; i < 128; ++i)
            n[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i === 36 || i === 95;
          for (u = new Array(128), i = 0; i < 128; ++i)
            u[i] = i >= 97 && i <= 122 || i >= 65 && i <= 90 || i >= 48 && i <= 57 || i === 36 || i === 95;
          function f(E) {
            return E < 128 ? n[E] : s.NonAsciiIdentifierStart.test(c(E));
          }
          function F(E) {
            return E < 128 ? u[E] : s.NonAsciiIdentifierPart.test(c(E));
          }
          function _(E) {
            return E < 128 ? n[E] : t.NonAsciiIdentifierStart.test(c(E));
          }
          function w(E) {
            return E < 128 ? u[E] : t.NonAsciiIdentifierPart.test(c(E));
          }
          r.exports = { isDecimalDigit: l, isHexDigit: p, isOctalDigit: y, isWhiteSpace: h, isLineTerminator: g, isIdentifierStartES5: f, isIdentifierPartES5: F, isIdentifierStartES6: _, isIdentifierPartES6: w };
        }();
      } }), zm = te({ "node_modules/esutils/lib/keyword.js"(e, r) {
        ne(), function() {
          var t = so();
          function s(f) {
            switch (f) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return true;
              default:
                return false;
            }
          }
          function a(f, F) {
            return !F && f === "yield" ? false : n(f, F);
          }
          function n(f, F) {
            if (F && s(f))
              return true;
            switch (f.length) {
              case 2:
                return f === "if" || f === "in" || f === "do";
              case 3:
                return f === "var" || f === "for" || f === "new" || f === "try";
              case 4:
                return f === "this" || f === "else" || f === "case" || f === "void" || f === "with" || f === "enum";
              case 5:
                return f === "while" || f === "break" || f === "catch" || f === "throw" || f === "const" || f === "yield" || f === "class" || f === "super";
              case 6:
                return f === "return" || f === "typeof" || f === "delete" || f === "switch" || f === "export" || f === "import";
              case 7:
                return f === "default" || f === "finally" || f === "extends";
              case 8:
                return f === "function" || f === "continue" || f === "debugger";
              case 10:
                return f === "instanceof";
              default:
                return false;
            }
          }
          function u(f, F) {
            return f === "null" || f === "true" || f === "false" || a(f, F);
          }
          function i(f, F) {
            return f === "null" || f === "true" || f === "false" || n(f, F);
          }
          function l(f) {
            return f === "eval" || f === "arguments";
          }
          function p(f) {
            var F, _, w;
            if (f.length === 0 || (w = f.charCodeAt(0), !t.isIdentifierStartES5(w)))
              return false;
            for (F = 1, _ = f.length; F < _; ++F)
              if (w = f.charCodeAt(F), !t.isIdentifierPartES5(w))
                return false;
            return true;
          }
          function y(f, F) {
            return (f - 55296) * 1024 + (F - 56320) + 65536;
          }
          function h(f) {
            var F, _, w, E, N;
            if (f.length === 0)
              return false;
            for (N = t.isIdentifierStartES6, F = 0, _ = f.length; F < _; ++F) {
              if (w = f.charCodeAt(F), 55296 <= w && w <= 56319) {
                if (++F, F >= _ || (E = f.charCodeAt(F), !(56320 <= E && E <= 57343)))
                  return false;
                w = y(w, E);
              }
              if (!N(w))
                return false;
              N = t.isIdentifierPartES6;
            }
            return true;
          }
          function g(f, F) {
            return p(f) && !u(f, F);
          }
          function c(f, F) {
            return h(f) && !i(f, F);
          }
          r.exports = { isKeywordES5: a, isKeywordES6: n, isReservedWordES5: u, isReservedWordES6: i, isRestrictedWord: l, isIdentifierNameES5: p, isIdentifierNameES6: h, isIdentifierES5: g, isIdentifierES6: c };
        }();
      } }), Xm = te({ "node_modules/esutils/lib/utils.js"(e) {
        ne(), function() {
          e.ast = Jm(), e.code = so(), e.keyword = zm();
        }();
      } }), Pt = te({ "src/language-js/utils/is-block-comment.js"(e, r) {
        ne();
        var t = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), s = (a) => t.has(a == null ? void 0 : a.type);
        r.exports = s;
      } }), Km = te({ "src/language-js/utils/is-node-matches.js"(e, r) {
        ne();
        function t(a, n) {
          let u = n.split(".");
          for (let i = u.length - 1; i >= 0; i--) {
            let l = u[i];
            if (i === 0)
              return a.type === "Identifier" && a.name === l;
            if (a.type !== "MemberExpression" || a.optional || a.computed || a.property.type !== "Identifier" || a.property.name !== l)
              return false;
            a = a.object;
          }
        }
        function s(a, n) {
          return n.some((u) => t(a, u));
        }
        r.exports = s;
      } }), Ke = te({ "src/language-js/utils/index.js"(e, r) {
        ne();
        var t = Xm().keyword.isIdentifierNameES5, { getLast: s, hasNewline: a, skipWhitespace: n, isNonEmptyArray: u, isNextLineEmptyAfterIndex: i, getStringWidth: l } = Ue(), { locStart: p, locEnd: y, hasSameLocStart: h } = ut(), g = Pt(), c = Km(), f = "(?:(?=.)\\s)", F = new RegExp(`^${f}*:`), _ = new RegExp(`^${f}*::`);
        function w(O) {
          var me, _e;
          return ((me = O.extra) === null || me === void 0 ? void 0 : me.parenthesized) && g((_e = O.trailingComments) === null || _e === void 0 ? void 0 : _e[0]) && F.test(O.trailingComments[0].value);
        }
        function E(O) {
          let me = O == null ? void 0 : O[0];
          return g(me) && _.test(me.value);
        }
        function N(O, me) {
          if (!O || typeof O != "object")
            return false;
          if (Array.isArray(O))
            return O.some((He) => N(He, me));
          let _e = me(O);
          return typeof _e == "boolean" ? _e : Object.values(O).some((He) => N(He, me));
        }
        function x(O) {
          return O.type === "AssignmentExpression" || O.type === "BinaryExpression" || O.type === "LogicalExpression" || O.type === "NGPipeExpression" || O.type === "ConditionalExpression" || de(O) || ue(O) || O.type === "SequenceExpression" || O.type === "TaggedTemplateExpression" || O.type === "BindExpression" || O.type === "UpdateExpression" && !O.prefix || st(O) || O.type === "TSNonNullExpression";
        }
        function I(O) {
          var me, _e, He, Ge, it, Qe;
          return O.expressions ? O.expressions[0] : (me = (_e = (He = (Ge = (it = (Qe = O.left) !== null && Qe !== void 0 ? Qe : O.test) !== null && it !== void 0 ? it : O.callee) !== null && Ge !== void 0 ? Ge : O.object) !== null && He !== void 0 ? He : O.tag) !== null && _e !== void 0 ? _e : O.argument) !== null && me !== void 0 ? me : O.expression;
        }
        function P(O, me) {
          if (me.expressions)
            return ["expressions", 0];
          if (me.left)
            return ["left"];
          if (me.test)
            return ["test"];
          if (me.object)
            return ["object"];
          if (me.callee)
            return ["callee"];
          if (me.tag)
            return ["tag"];
          if (me.argument)
            return ["argument"];
          if (me.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function $(O) {
          return O = new Set(O), (me) => O.has(me == null ? void 0 : me.type);
        }
        var D = $(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), T = $(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function m(O) {
          let me = O.getParentNode();
          return O.getName() === "declaration" && T(me) ? me : null;
        }
        var C = $(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function o(O) {
          return O.type === "NumericLiteral" || O.type === "Literal" && typeof O.value == "number";
        }
        function d(O) {
          return O.type === "UnaryExpression" && (O.operator === "+" || O.operator === "-") && o(O.argument);
        }
        function v(O) {
          return O.type === "StringLiteral" || O.type === "Literal" && typeof O.value == "string";
        }
        var S = $(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), b = $(["FunctionExpression", "ArrowFunctionExpression"]);
        function B(O) {
          return O.type === "FunctionExpression" || O.type === "ArrowFunctionExpression" && O.body.type === "BlockStatement";
        }
        function k(O) {
          return de(O) && O.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(O.callee.name);
        }
        var M = $(["JSXElement", "JSXFragment"]);
        function R(O, me) {
          if (O.parentParser !== "markdown" && O.parentParser !== "mdx")
            return false;
          let _e = me.getNode();
          if (!_e.expression || !M(_e.expression))
            return false;
          let He = me.getParentNode();
          return He.type === "Program" && He.body.length === 1;
        }
        function q(O) {
          return O.kind === "get" || O.kind === "set";
        }
        function J(O) {
          return q(O) || h(O, O.value);
        }
        function L(O) {
          return (O.type === "ObjectTypeProperty" || O.type === "ObjectTypeInternalSlot") && O.value.type === "FunctionTypeAnnotation" && !O.static && !J(O);
        }
        function Q(O) {
          return (O.type === "TypeAnnotation" || O.type === "TSTypeAnnotation") && O.typeAnnotation.type === "FunctionTypeAnnotation" && !O.static && !h(O, O.typeAnnotation);
        }
        var V = $(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function j(O) {
          return ue(O) || O.type === "BindExpression" && Boolean(O.object);
        }
        var Y = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function ie(O) {
          return O ? !!((O.type === "GenericTypeAnnotation" || O.type === "TSTypeReference") && !O.typeParameters || Y.has(O.type)) : false;
        }
        function ee(O) {
          let me = /^(?:before|after)(?:Each|All)$/;
          return O.callee.type === "Identifier" && me.test(O.callee.name) && O.arguments.length === 1;
        }
        var ce = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function W(O) {
          return c(O, ce);
        }
        function K(O, me) {
          if (O.type !== "CallExpression")
            return false;
          if (O.arguments.length === 1) {
            if (k(O) && me && K(me))
              return b(O.arguments[0]);
            if (ee(O))
              return k(O.arguments[0]);
          } else if ((O.arguments.length === 2 || O.arguments.length === 3) && (O.arguments[0].type === "TemplateLiteral" || v(O.arguments[0])) && W(O.callee))
            return O.arguments[2] && !o(O.arguments[2]) ? false : (O.arguments.length === 2 ? b(O.arguments[1]) : B(O.arguments[1]) && ve(O.arguments[1]).length <= 1) || k(O.arguments[1]);
          return false;
        }
        var de = $(["CallExpression", "OptionalCallExpression"]), ue = $(["MemberExpression", "OptionalMemberExpression"]);
        function Fe(O) {
          let me = "expressions";
          O.type === "TSTemplateLiteralType" && (me = "types");
          let _e = O[me];
          return _e.length === 0 ? false : _e.every((He) => {
            if (Me(He))
              return false;
            if (He.type === "Identifier" || He.type === "ThisExpression")
              return true;
            if (ue(He)) {
              let Ge = He;
              for (; ue(Ge); )
                if (Ge.property.type !== "Identifier" && Ge.property.type !== "Literal" && Ge.property.type !== "StringLiteral" && Ge.property.type !== "NumericLiteral" || (Ge = Ge.object, Me(Ge)))
                  return false;
              return Ge.type === "Identifier" || Ge.type === "ThisExpression";
            }
            return false;
          });
        }
        function z(O, me) {
          return O === "+" || O === "-" ? O + me : me;
        }
        function U(O, me) {
          let _e = p(me), He = n(O, y(me));
          return He !== false && O.slice(_e, _e + 2) === "/*" && O.slice(He, He + 2) === "*/";
        }
        function Z(O, me) {
          return M(me) ? Oe(me) : Me(me, Te.Leading, (_e) => a(O, y(_e)));
        }
        function se(O, me) {
          return me.parser !== "json" && v(O.key) && oe(O.key).slice(1, -1) === O.key.value && (t(O.key.value) && !(me.parser === "babel-ts" && O.type === "ClassProperty" || me.parser === "typescript" && O.type === "PropertyDefinition") || fe(O.key.value) && String(Number(O.key.value)) === O.key.value && (me.parser === "babel" || me.parser === "acorn" || me.parser === "espree" || me.parser === "meriyah" || me.parser === "__babel_estree"));
        }
        function fe(O) {
          return /^(?:\d+|\d+\.\d+)$/.test(O);
        }
        function ge(O, me) {
          let _e = /^[fx]?(?:describe|it|test)$/;
          return me.type === "TaggedTemplateExpression" && me.quasi === O && me.tag.type === "MemberExpression" && me.tag.property.type === "Identifier" && me.tag.property.name === "each" && (me.tag.object.type === "Identifier" && _e.test(me.tag.object.name) || me.tag.object.type === "MemberExpression" && me.tag.object.property.type === "Identifier" && (me.tag.object.property.name === "only" || me.tag.object.property.name === "skip") && me.tag.object.object.type === "Identifier" && _e.test(me.tag.object.object.name));
        }
        function he(O) {
          return O.quasis.some((me) => me.value.raw.includes(`
`));
        }
        function we(O, me) {
          return (O.type === "TemplateLiteral" && he(O) || O.type === "TaggedTemplateExpression" && he(O.quasi)) && !a(me, p(O), { backwards: true });
        }
        function ke(O) {
          if (!Me(O))
            return false;
          let me = s(ae(O, Te.Dangling));
          return me && !g(me);
        }
        function Re(O) {
          if (O.length <= 1)
            return false;
          let me = 0;
          for (let _e of O)
            if (b(_e)) {
              if (me += 1, me > 1)
                return true;
            } else if (de(_e)) {
              for (let He of _e.arguments)
                if (b(He))
                  return true;
            }
          return false;
        }
        function Ne(O) {
          let me = O.getValue(), _e = O.getParentNode();
          return de(me) && de(_e) && _e.callee === me && me.arguments.length > _e.arguments.length && _e.arguments.length > 0;
        }
        function Pe(O, me) {
          if (me >= 2)
            return false;
          let _e = (Qe) => Pe(Qe, me + 1), He = O.type === "Literal" && "regex" in O && O.regex.pattern || O.type === "RegExpLiteral" && O.pattern;
          if (He && l(He) > 5)
            return false;
          if (O.type === "Literal" || O.type === "BigIntLiteral" || O.type === "DecimalLiteral" || O.type === "BooleanLiteral" || O.type === "NullLiteral" || O.type === "NumericLiteral" || O.type === "RegExpLiteral" || O.type === "StringLiteral" || O.type === "Identifier" || O.type === "ThisExpression" || O.type === "Super" || O.type === "PrivateName" || O.type === "PrivateIdentifier" || O.type === "ArgumentPlaceholder" || O.type === "Import")
            return true;
          if (O.type === "TemplateLiteral")
            return O.quasis.every((Qe) => !Qe.value.raw.includes(`
`)) && O.expressions.every(_e);
          if (O.type === "ObjectExpression")
            return O.properties.every((Qe) => !Qe.computed && (Qe.shorthand || Qe.value && _e(Qe.value)));
          if (O.type === "ArrayExpression")
            return O.elements.every((Qe) => Qe === null || _e(Qe));
          if (tt(O))
            return (O.type === "ImportExpression" || Pe(O.callee, me)) && Ye(O).every(_e);
          if (ue(O))
            return Pe(O.object, me) && Pe(O.property, me);
          let Ge = { "!": true, "-": true, "+": true, "~": true };
          if (O.type === "UnaryExpression" && Ge[O.operator])
            return Pe(O.argument, me);
          let it = { "++": true, "--": true };
          return O.type === "UpdateExpression" && it[O.operator] ? Pe(O.argument, me) : O.type === "TSNonNullExpression" ? Pe(O.expression, me) : false;
        }
        function oe(O) {
          var me, _e;
          return (me = (_e = O.extra) === null || _e === void 0 ? void 0 : _e.raw) !== null && me !== void 0 ? me : O.raw;
        }
        function H(O) {
          return O;
        }
        function pe(O) {
          return O.filepath && /\.tsx$/i.test(O.filepath);
        }
        function X(O) {
          let me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return O.trailingComma === "es5" && me === "es5" || O.trailingComma === "all" && (me === "all" || me === "es5");
        }
        function le(O, me) {
          switch (O.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression":
              return le(O.left, me);
            case "MemberExpression":
            case "OptionalMemberExpression":
              return le(O.object, me);
            case "TaggedTemplateExpression":
              return O.tag.type === "FunctionExpression" ? false : le(O.tag, me);
            case "CallExpression":
            case "OptionalCallExpression":
              return O.callee.type === "FunctionExpression" ? false : le(O.callee, me);
            case "ConditionalExpression":
              return le(O.test, me);
            case "UpdateExpression":
              return !O.prefix && le(O.argument, me);
            case "BindExpression":
              return O.object && le(O.object, me);
            case "SequenceExpression":
              return le(O.expressions[0], me);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return le(O.expression, me);
            default:
              return me(O);
          }
        }
        var Ae = { "==": true, "!=": true, "===": true, "!==": true }, Ee = { "*": true, "/": true, "%": true }, De = { ">>": true, ">>>": true, "<<": true };
        function A(O, me) {
          return !(re(me) !== re(O) || O === "**" || Ae[O] && Ae[me] || me === "%" && Ee[O] || O === "%" && Ee[me] || me !== O && Ee[me] && Ee[O] || De[O] && De[me]);
        }
        var G = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((O, me) => O.map((_e) => [_e, me])));
        function re(O) {
          return G.get(O);
        }
        function ye(O) {
          return Boolean(De[O]) || O === "|" || O === "^" || O === "&";
        }
        function Ce(O) {
          var me;
          if (O.rest)
            return true;
          let _e = ve(O);
          return ((me = s(_e)) === null || me === void 0 ? void 0 : me.type) === "RestElement";
        }
        var Be = /* @__PURE__ */ new WeakMap();
        function ve(O) {
          if (Be.has(O))
            return Be.get(O);
          let me = [];
          return O.this && me.push(O.this), Array.isArray(O.parameters) ? me.push(...O.parameters) : Array.isArray(O.params) && me.push(...O.params), O.rest && me.push(O.rest), Be.set(O, me), me;
        }
        function ze(O, me) {
          let _e = O.getValue(), He = 0, Ge = (it) => me(it, He++);
          _e.this && O.call(Ge, "this"), Array.isArray(_e.parameters) ? O.each(Ge, "parameters") : Array.isArray(_e.params) && O.each(Ge, "params"), _e.rest && O.call(Ge, "rest");
        }
        var be = /* @__PURE__ */ new WeakMap();
        function Ye(O) {
          if (be.has(O))
            return be.get(O);
          let me = O.arguments;
          return O.type === "ImportExpression" && (me = [O.source], O.attributes && me.push(O.attributes)), be.set(O, me), me;
        }
        function Se(O, me) {
          let _e = O.getValue();
          _e.type === "ImportExpression" ? (O.call((He) => me(He, 0), "source"), _e.attributes && O.call((He) => me(He, 1), "attributes")) : O.each(me, "arguments");
        }
        function Ie(O) {
          return O.value.trim() === "prettier-ignore" && !O.unignore;
        }
        function Oe(O) {
          return O && (O.prettierIgnore || Me(O, Te.PrettierIgnore));
        }
        function Je(O) {
          let me = O.getValue();
          return Oe(me);
        }
        var Te = { Leading: 1 << 1, Trailing: 1 << 2, Dangling: 1 << 3, Block: 1 << 4, Line: 1 << 5, PrettierIgnore: 1 << 6, First: 1 << 7, Last: 1 << 8 }, je = (O, me) => {
          if (typeof O == "function" && (me = O, O = 0), O || me)
            return (_e, He, Ge) => !(O & Te.Leading && !_e.leading || O & Te.Trailing && !_e.trailing || O & Te.Dangling && (_e.leading || _e.trailing) || O & Te.Block && !g(_e) || O & Te.Line && !D(_e) || O & Te.First && He !== 0 || O & Te.Last && He !== Ge.length - 1 || O & Te.PrettierIgnore && !Ie(_e) || me && !me(_e));
        };
        function Me(O, me, _e) {
          if (!u(O == null ? void 0 : O.comments))
            return false;
          let He = je(me, _e);
          return He ? O.comments.some(He) : true;
        }
        function ae(O, me, _e) {
          if (!Array.isArray(O == null ? void 0 : O.comments))
            return [];
          let He = je(me, _e);
          return He ? O.comments.filter(He) : O.comments;
        }
        var nt = (O, me) => {
          let { originalText: _e } = me;
          return i(_e, y(O));
        };
        function tt(O) {
          return de(O) || O.type === "NewExpression" || O.type === "ImportExpression";
        }
        function Ve(O) {
          return O && (O.type === "ObjectProperty" || O.type === "Property" && !O.method && O.kind === "init");
        }
        function We(O) {
          return Boolean(O.__isUsingHackPipeline);
        }
        var Xe = Symbol("ifWithoutBlockAndSameLineComment");
        function st(O) {
          return O.type === "TSAsExpression" || O.type === "TSSatisfiesExpression";
        }
        r.exports = { getFunctionParameters: ve, iterateFunctionParametersPath: ze, getCallArguments: Ye, iterateCallArgumentsPath: Se, hasRestParameter: Ce, getLeftSide: I, getLeftSidePathName: P, getParentExportDeclaration: m, getTypeScriptMappedTypeModifier: z, hasFlowAnnotationComment: E, hasFlowShorthandAnnotationComment: w, hasLeadingOwnLineComment: Z, hasNakedLeftSide: x, hasNode: N, hasIgnoreComment: Je, hasNodeIgnoreComment: Oe, identity: H, isBinaryish: V, isCallLikeExpression: tt, isEnabledHackPipeline: We, isLineComment: D, isPrettierIgnoreComment: Ie, isCallExpression: de, isMemberExpression: ue, isExportDeclaration: T, isFlowAnnotationComment: U, isFunctionCompositionArgs: Re, isFunctionNotation: J, isFunctionOrArrowExpression: b, isGetterOrSetter: q, isJestEachTemplateLiteral: ge, isJsxNode: M, isLiteral: C, isLongCurriedCallExpression: Ne, isSimpleCallArgument: Pe, isMemberish: j, isNumericLiteral: o, isSignedNumericLiteral: d, isObjectProperty: Ve, isObjectType: S, isObjectTypePropertyAFunction: L, isSimpleType: ie, isSimpleNumber: fe, isSimpleTemplateLiteral: Fe, isStringLiteral: v, isStringPropSafeToUnquote: se, isTemplateOnItsOwnLine: we, isTestCall: K, isTheOnlyJsxElementInMarkdown: R, isTSXFile: pe, isTypeAnnotationAFunction: Q, isNextLineEmpty: nt, needsHardlineAfterDanglingComment: ke, rawText: oe, shouldPrintComma: X, isBitwiseOperator: ye, shouldFlatten: A, startsWithNoLookaheadToken: le, getPrecedence: re, hasComment: Me, getComments: ae, CommentCheckFlags: Te, markerForIfWithoutBlockAndSameLineComment: Xe, isTSTypeExpression: st };
      } }), jt = te({ "src/language-js/print/template-literal.js"(e, r) {
        ne();
        var t = lt(), { getStringWidth: s, getIndentSize: a } = Ue(), { builders: { join: n, hardline: u, softline: i, group: l, indent: p, align: y, lineSuffixBoundary: h, addAlignmentToDoc: g }, printer: { printDocToString: c }, utils: { mapDoc: f } } = qe(), { isBinaryish: F, isJestEachTemplateLiteral: _, isSimpleTemplateLiteral: w, hasComment: E, isMemberExpression: N, isTSTypeExpression: x } = Ke();
        function I(C, o, d) {
          let v = C.getValue();
          if (v.type === "TemplateLiteral" && _(v, C.getParentNode())) {
            let R = P(C, d, o);
            if (R)
              return R;
          }
          let b = "expressions";
          v.type === "TSTemplateLiteralType" && (b = "types");
          let B = [], k = C.map(o, b), M = w(v);
          return M && (k = k.map((R) => c(R, Object.assign(Object.assign({}, d), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), B.push(h, "`"), C.each((R) => {
            let q = R.getName();
            if (B.push(o()), q < k.length) {
              let { tabWidth: J } = d, L = R.getValue(), Q = a(L.value.raw, J), V = k[q];
              if (!M) {
                let Y = v[b][q];
                (E(Y) || N(Y) || Y.type === "ConditionalExpression" || Y.type === "SequenceExpression" || x(Y) || F(Y)) && (V = [p([i, V]), i]);
              }
              let j = Q === 0 && L.value.raw.endsWith(`
`) ? y(Number.NEGATIVE_INFINITY, V) : g(V, Q, J);
              B.push(l(["${", j, h, "}"]));
            }
          }, "quasis"), B.push("`"), B;
        }
        function P(C, o, d) {
          let v = C.getNode(), S = v.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (S.length > 1 || S.some((b) => b.length > 0)) {
            o.__inJestEach = true;
            let b = C.map(d, "expressions");
            o.__inJestEach = false;
            let B = [], k = b.map((L) => "${" + c(L, Object.assign(Object.assign({}, o), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), M = [{ hasLineBreak: false, cells: [] }];
            for (let L = 1; L < v.quasis.length; L++) {
              let Q = t(M), V = k[L - 1];
              Q.cells.push(V), V.includes(`
`) && (Q.hasLineBreak = true), v.quasis[L].value.raw.includes(`
`) && M.push({ hasLineBreak: false, cells: [] });
            }
            let R = Math.max(S.length, ...M.map((L) => L.cells.length)), q = Array.from({ length: R }).fill(0), J = [{ cells: S }, ...M.filter((L) => L.cells.length > 0)];
            for (let { cells: L } of J.filter((Q) => !Q.hasLineBreak))
              for (let [Q, V] of L.entries())
                q[Q] = Math.max(q[Q], s(V));
            return B.push(h, "`", p([u, n(u, J.map((L) => n(" | ", L.cells.map((Q, V) => L.hasLineBreak ? Q : Q + " ".repeat(q[V] - s(Q))))))]), u, "`"), B;
          }
        }
        function $(C, o) {
          let d = C.getValue(), v = o();
          return E(d) && (v = l([p([i, v]), i])), ["${", v, h, "}"];
        }
        function D(C, o) {
          return C.map((d) => $(d, o), "expressions");
        }
        function T(C, o) {
          return f(C, (d) => typeof d == "string" ? o ? d.replace(/(\\*)`/g, "$1$1\\`") : m(d) : d);
        }
        function m(C) {
          return C.replace(/([\\`]|\${)/g, "\\$1");
        }
        r.exports = { printTemplateLiteral: I, printTemplateExpressions: D, escapeTemplateCharacters: T, uncookTemplateElementValue: m };
      } }), Ym = te({ "src/language-js/embed/markdown.js"(e, r) {
        ne();
        var { builders: { indent: t, softline: s, literalline: a, dedentToRoot: n } } = qe(), { escapeTemplateCharacters: u } = jt();
        function i(p, y, h) {
          let c = p.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (w, E) => "\\".repeat(E.length / 2) + "`"), f = l(c), F = f !== "";
          F && (c = c.replace(new RegExp(`^${f}`, "gm"), ""));
          let _ = u(h(c, { parser: "markdown", __inJsTemplate: true }, { stripTrailingHardline: true }), true);
          return ["`", F ? t([s, _]) : [a, n(_)], s, "`"];
        }
        function l(p) {
          let y = p.match(/^([^\S\n]*)\S/m);
          return y === null ? "" : y[1];
        }
        r.exports = i;
      } }), Qm = te({ "src/language-js/embed/css.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { indent: s, hardline: a, softline: n }, utils: { mapDoc: u, replaceEndOfLine: i, cleanDoc: l } } = qe(), { printTemplateExpressions: p } = jt();
        function y(c, f, F) {
          let _ = c.getValue(), w = _.quasis.map((P) => P.value.raw), E = 0, N = w.reduce((P, $, D) => D === 0 ? $ : P + "@prettier-placeholder-" + E++ + "-id" + $, ""), x = F(N, { parser: "scss" }, { stripTrailingHardline: true }), I = p(c, f);
          return h(x, _, I);
        }
        function h(c, f, F) {
          if (f.quasis.length === 1 && !f.quasis[0].value.raw.trim())
            return "``";
          let w = g(c, F);
          if (!w)
            throw new Error("Couldn't insert all the expressions");
          return ["`", s([a, w]), n, "`"];
        }
        function g(c, f) {
          if (!t(f))
            return c;
          let F = 0, _ = u(l(c), (w) => typeof w != "string" || !w.includes("@prettier-placeholder") ? w : w.split(/@prettier-placeholder-(\d+)-id/).map((E, N) => N % 2 === 0 ? i(E) : (F++, f[E])));
          return f.length === F ? _ : null;
        }
        r.exports = y;
      } }), Zm = te({ "src/language-js/embed/graphql.js"(e, r) {
        ne();
        var { builders: { indent: t, join: s, hardline: a } } = qe(), { escapeTemplateCharacters: n, printTemplateExpressions: u } = jt();
        function i(p, y, h) {
          let g = p.getValue(), c = g.quasis.length;
          if (c === 1 && g.quasis[0].value.raw.trim() === "")
            return "``";
          let f = u(p, y), F = [];
          for (let _ = 0; _ < c; _++) {
            let w = g.quasis[_], E = _ === 0, N = _ === c - 1, x = w.value.cooked, I = x.split(`
`), P = I.length, $ = f[_], D = P > 2 && I[0].trim() === "" && I[1].trim() === "", T = P > 2 && I[P - 1].trim() === "" && I[P - 2].trim() === "", m = I.every((o) => /^\s*(?:#[^\n\r]*)?$/.test(o));
            if (!N && /#[^\n\r]*$/.test(I[P - 1]))
              return null;
            let C = null;
            m ? C = l(I) : C = h(x, { parser: "graphql" }, { stripTrailingHardline: true }), C ? (C = n(C, false), !E && D && F.push(""), F.push(C), !N && T && F.push("")) : !E && !N && D && F.push(""), $ && F.push($);
          }
          return ["`", t([a, s(a, F)]), a, "`"];
        }
        function l(p) {
          let y = [], h = false, g = p.map((c) => c.trim());
          for (let [c, f] of g.entries())
            f !== "" && (g[c - 1] === "" && h ? y.push([a, f]) : y.push(f), h = true);
          return y.length === 0 ? null : s(a, y);
        }
        r.exports = i;
      } }), ed = te({ "src/language-js/embed/html.js"(e, r) {
        ne();
        var { builders: { indent: t, line: s, hardline: a, group: n }, utils: { mapDoc: u } } = qe(), { printTemplateExpressions: i, uncookTemplateElementValue: l } = jt(), p = 0;
        function y(h, g, c, f, F) {
          let { parser: _ } = F, w = h.getValue(), E = p;
          p = p + 1 >>> 0;
          let N = (d) => `PRETTIER_HTML_PLACEHOLDER_${d}_${E}_IN_JS`, x = w.quasis.map((d, v, S) => v === S.length - 1 ? d.value.cooked : d.value.cooked + N(v)).join(""), I = i(h, g);
          if (I.length === 0 && x.trim().length === 0)
            return "``";
          let P = new RegExp(N("(\\d+)"), "g"), $ = 0, D = c(x, { parser: _, __onHtmlRoot(d) {
            $ = d.children.length;
          } }, { stripTrailingHardline: true }), T = u(D, (d) => {
            if (typeof d != "string")
              return d;
            let v = [], S = d.split(P);
            for (let b = 0; b < S.length; b++) {
              let B = S[b];
              if (b % 2 === 0) {
                B && (B = l(B), f.__embeddedInHtml && (B = B.replace(/<\/(script)\b/gi, "<\\/$1")), v.push(B));
                continue;
              }
              let k = Number(B);
              v.push(I[k]);
            }
            return v;
          }), m = /^\s/.test(x) ? " " : "", C = /\s$/.test(x) ? " " : "", o = f.htmlWhitespaceSensitivity === "ignore" ? a : m && C ? s : null;
          return n(o ? ["`", t([o, n(T)]), o, "`"] : ["`", m, $ > 1 ? t(n(T)) : n(T), C, "`"]);
        }
        r.exports = y;
      } }), td = te({ "src/language-js/embed.js"(e, r) {
        ne();
        var { hasComment: t, CommentCheckFlags: s, isObjectProperty: a } = Ke(), n = Ym(), u = Qm(), i = Zm(), l = ed();
        function p(D) {
          if (g(D) || _(D) || w(D) || c(D))
            return "css";
          if (x(D))
            return "graphql";
          if (P(D))
            return "html";
          if (f(D))
            return "angular";
          if (h(D))
            return "markdown";
        }
        function y(D, T, m, C) {
          let o = D.getValue();
          if (o.type !== "TemplateLiteral" || $(o))
            return;
          let d = p(D);
          if (d) {
            if (d === "markdown")
              return n(D, T, m);
            if (d === "css")
              return u(D, T, m);
            if (d === "graphql")
              return i(D, T, m);
            if (d === "html" || d === "angular")
              return l(D, T, m, C, { parser: d });
          }
        }
        function h(D) {
          let T = D.getValue(), m = D.getParentNode();
          return m && m.type === "TaggedTemplateExpression" && T.quasis.length === 1 && m.tag.type === "Identifier" && (m.tag.name === "md" || m.tag.name === "markdown");
        }
        function g(D) {
          let T = D.getValue(), m = D.getParentNode(), C = D.getParentNode(1);
          return C && T.quasis && m.type === "JSXExpressionContainer" && C.type === "JSXElement" && C.openingElement.name.name === "style" && C.openingElement.attributes.some((o) => o.name.name === "jsx") || m && m.type === "TaggedTemplateExpression" && m.tag.type === "Identifier" && m.tag.name === "css" || m && m.type === "TaggedTemplateExpression" && m.tag.type === "MemberExpression" && m.tag.object.name === "css" && (m.tag.property.name === "global" || m.tag.property.name === "resolve");
        }
        function c(D) {
          return D.match((T) => T.type === "TemplateLiteral", (T, m) => T.type === "ArrayExpression" && m === "elements", (T, m) => a(T) && T.key.type === "Identifier" && T.key.name === "styles" && m === "value", ...F);
        }
        function f(D) {
          return D.match((T) => T.type === "TemplateLiteral", (T, m) => a(T) && T.key.type === "Identifier" && T.key.name === "template" && m === "value", ...F);
        }
        var F = [(D, T) => D.type === "ObjectExpression" && T === "properties", (D, T) => D.type === "CallExpression" && D.callee.type === "Identifier" && D.callee.name === "Component" && T === "arguments", (D, T) => D.type === "Decorator" && T === "expression"];
        function _(D) {
          let T = D.getParentNode();
          if (!T || T.type !== "TaggedTemplateExpression")
            return false;
          let m = T.tag.type === "ParenthesizedExpression" ? T.tag.expression : T.tag;
          switch (m.type) {
            case "MemberExpression":
              return E(m.object) || N(m);
            case "CallExpression":
              return E(m.callee) || m.callee.type === "MemberExpression" && (m.callee.object.type === "MemberExpression" && (E(m.callee.object.object) || N(m.callee.object)) || m.callee.object.type === "CallExpression" && E(m.callee.object.callee));
            case "Identifier":
              return m.name === "css";
            default:
              return false;
          }
        }
        function w(D) {
          let T = D.getParentNode(), m = D.getParentNode(1);
          return m && T.type === "JSXExpressionContainer" && m.type === "JSXAttribute" && m.name.type === "JSXIdentifier" && m.name.name === "css";
        }
        function E(D) {
          return D.type === "Identifier" && D.name === "styled";
        }
        function N(D) {
          return /^[A-Z]/.test(D.object.name) && D.property.name === "extend";
        }
        function x(D) {
          let T = D.getValue(), m = D.getParentNode();
          return I(T, "GraphQL") || m && (m.type === "TaggedTemplateExpression" && (m.tag.type === "MemberExpression" && m.tag.object.name === "graphql" && m.tag.property.name === "experimental" || m.tag.type === "Identifier" && (m.tag.name === "gql" || m.tag.name === "graphql")) || m.type === "CallExpression" && m.callee.type === "Identifier" && m.callee.name === "graphql");
        }
        function I(D, T) {
          return t(D, s.Block | s.Leading, (m) => {
            let { value: C } = m;
            return C === ` ${T} `;
          });
        }
        function P(D) {
          return I(D.getValue(), "HTML") || D.match((T) => T.type === "TemplateLiteral", (T, m) => T.type === "TaggedTemplateExpression" && T.tag.type === "Identifier" && T.tag.name === "html" && m === "quasi");
        }
        function $(D) {
          let { quasis: T } = D;
          return T.some((m) => {
            let { value: { cooked: C } } = m;
            return C === null;
          });
        }
        r.exports = y;
      } }), rd = te({ "src/language-js/clean.js"(e, r) {
        ne();
        var t = Pt(), s = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), a = (u) => {
          for (let i of u.quasis)
            delete i.value;
        };
        function n(u, i, l) {
          if (u.type === "Program" && delete i.sourceType, (u.type === "BigIntLiteral" || u.type === "BigIntLiteralTypeAnnotation") && i.value && (i.value = i.value.toLowerCase()), (u.type === "BigIntLiteral" || u.type === "Literal") && i.bigint && (i.bigint = i.bigint.toLowerCase()), u.type === "DecimalLiteral" && (i.value = Number(i.value)), u.type === "Literal" && i.decimal && (i.decimal = Number(i.decimal)), u.type === "EmptyStatement" || u.type === "JSXText" || u.type === "JSXExpressionContainer" && (u.expression.type === "Literal" || u.expression.type === "StringLiteral") && u.expression.value === " ")
            return null;
          if ((u.type === "Property" || u.type === "ObjectProperty" || u.type === "MethodDefinition" || u.type === "ClassProperty" || u.type === "ClassMethod" || u.type === "PropertyDefinition" || u.type === "TSDeclareMethod" || u.type === "TSPropertySignature" || u.type === "ObjectTypeProperty") && typeof u.key == "object" && u.key && (u.key.type === "Literal" || u.key.type === "NumericLiteral" || u.key.type === "StringLiteral" || u.key.type === "Identifier") && delete i.key, u.type === "JSXElement" && u.openingElement.name.name === "style" && u.openingElement.attributes.some((h) => h.name.name === "jsx"))
            for (let { type: h, expression: g } of i.children)
              h === "JSXExpressionContainer" && g.type === "TemplateLiteral" && a(g);
          u.type === "JSXAttribute" && u.name.name === "css" && u.value.type === "JSXExpressionContainer" && u.value.expression.type === "TemplateLiteral" && a(i.value.expression), u.type === "JSXAttribute" && u.value && u.value.type === "Literal" && /["']|&quot;|&apos;/.test(u.value.value) && (i.value.value = i.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let p = u.expression || u.callee;
          if (u.type === "Decorator" && p.type === "CallExpression" && p.callee.name === "Component" && p.arguments.length === 1) {
            let h = u.expression.arguments[0].properties;
            for (let [g, c] of i.expression.arguments[0].properties.entries())
              switch (h[g].key.name) {
                case "styles":
                  c.value.type === "ArrayExpression" && a(c.value.elements[0]);
                  break;
                case "template":
                  c.value.type === "TemplateLiteral" && a(c.value);
                  break;
              }
          }
          if (u.type === "TaggedTemplateExpression" && (u.tag.type === "MemberExpression" || u.tag.type === "Identifier" && (u.tag.name === "gql" || u.tag.name === "graphql" || u.tag.name === "css" || u.tag.name === "md" || u.tag.name === "markdown" || u.tag.name === "html") || u.tag.type === "CallExpression") && a(i.quasi), u.type === "TemplateLiteral") {
            var y;
            (!((y = u.leadingComments) === null || y === void 0) && y.some((g) => t(g) && ["GraphQL", "HTML"].some((c) => g.value === ` ${c} `)) || l.type === "CallExpression" && l.callee.name === "graphql" || !u.leadingComments) && a(i);
          }
          if (u.type === "InterpreterDirective" && (i.value = i.value.trimEnd()), (u.type === "TSIntersectionType" || u.type === "TSUnionType") && u.types.length === 1)
            return i.types[0];
        }
        n.ignoredProperties = s, r.exports = n;
      } }), io = {};
      Kt(io, { EOL: () => Wn, arch: () => nd, cpus: () => Do, default: () => vo, endianness: () => ao, freemem: () => po, getNetworkInterfaces: () => ho, hostname: () => oo, loadavg: () => lo, networkInterfaces: () => yo, platform: () => ud, release: () => go, tmpDir: () => $n, tmpdir: () => Vn, totalmem: () => fo, type: () => mo, uptime: () => co });
      function ao() {
        if (typeof Tr > "u") {
          var e = new ArrayBuffer(2), r = new Uint8Array(e), t = new Uint16Array(e);
          if (r[0] = 1, r[1] = 2, t[0] === 258)
            Tr = "BE";
          else if (t[0] === 513)
            Tr = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Tr;
      }
      function oo() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function lo() {
        return [];
      }
      function co() {
        return 0;
      }
      function po() {
        return Number.MAX_VALUE;
      }
      function fo() {
        return Number.MAX_VALUE;
      }
      function Do() {
        return [];
      }
      function mo() {
        return "Browser";
      }
      function go() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function yo() {
      }
      function ho() {
      }
      function nd() {
        return "javascript";
      }
      function ud() {
        return "browser";
      }
      function $n() {
        return "/tmp";
      }
      var Tr, Vn, Wn, vo, sd = ht({ "node-modules-polyfills:os"() {
        ne(), Vn = $n, Wn = `
`, vo = { EOL: Wn, tmpdir: Vn, tmpDir: $n, networkInterfaces: yo, getNetworkInterfaces: ho, release: go, type: mo, cpus: Do, totalmem: fo, freemem: po, uptime: co, loadavg: lo, hostname: oo, endianness: ao };
      } }), id = te({ "node-modules-polyfills-commonjs:os"(e, r) {
        ne();
        var t = (sd(), ft(io));
        if (t && t.default) {
          r.exports = t.default;
          for (let s in t)
            r.exports[s] = t[s];
        } else
          t && (r.exports = t);
      } }), ad = te({ "node_modules/detect-newline/index.js"(e, r) {
        ne();
        var t = (s) => {
          if (typeof s != "string")
            throw new TypeError("Expected a string");
          let a = s.match(/(?:\r?\n)/g) || [];
          if (a.length === 0)
            return;
          let n = a.filter((i) => i === `\r
`).length, u = a.length - n;
          return n > u ? `\r
` : `
`;
        };
        r.exports = t, r.exports.graceful = (s) => typeof s == "string" && t(s) || `
`;
      } }), od = te({ "node_modules/jest-docblock/build/index.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.extract = c, e.parse = F, e.parseWithComments = _, e.print = w, e.strip = f;
        function r() {
          let N = id();
          return r = function() {
            return N;
          }, N;
        }
        function t() {
          let N = s(ad());
          return t = function() {
            return N;
          }, N;
        }
        function s(N) {
          return N && N.__esModule ? N : { default: N };
        }
        var a = /\*\/$/, n = /^\/\*\*?/, u = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, i = /(^|\s+)\/\/([^\r\n]*)/g, l = /^(\r?\n)+/, p = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, y = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, h = /(\r?\n|^) *\* ?/g, g = [];
        function c(N) {
          let x = N.match(u);
          return x ? x[0].trimLeft() : "";
        }
        function f(N) {
          let x = N.match(u);
          return x && x[0] ? N.substring(x[0].length) : N;
        }
        function F(N) {
          return _(N).pragmas;
        }
        function _(N) {
          let x = (0, t().default)(N) || r().EOL;
          N = N.replace(n, "").replace(a, "").replace(h, "$1");
          let I = "";
          for (; I !== N; )
            I = N, N = N.replace(p, `${x}$1 $2${x}`);
          N = N.replace(l, "").trimRight();
          let P = /* @__PURE__ */ Object.create(null), $ = N.replace(y, "").replace(l, "").trimRight(), D;
          for (; D = y.exec(N); ) {
            let T = D[2].replace(i, "");
            typeof P[D[1]] == "string" || Array.isArray(P[D[1]]) ? P[D[1]] = g.concat(P[D[1]], T) : P[D[1]] = T;
          }
          return { comments: $, pragmas: P };
        }
        function w(N) {
          let { comments: x = "", pragmas: I = {} } = N, P = (0, t().default)(x) || r().EOL, $ = "/**", D = " *", T = " */", m = Object.keys(I), C = m.map((d) => E(d, I[d])).reduce((d, v) => d.concat(v), []).map((d) => `${D} ${d}${P}`).join("");
          if (!x) {
            if (m.length === 0)
              return "";
            if (m.length === 1 && !Array.isArray(I[m[0]])) {
              let d = I[m[0]];
              return `${$} ${E(m[0], d)[0]}${T}`;
            }
          }
          let o = x.split(P).map((d) => `${D} ${d}`).join(P) + P;
          return $ + P + (x ? o : "") + (x && m.length ? D + P : "") + C + T;
        }
        function E(N, x) {
          return g.concat(x).map((I) => `@${N} ${I}`.trim());
        }
      } }), ld = te({ "src/language-js/utils/get-shebang.js"(e, r) {
        ne();
        function t(s) {
          if (!s.startsWith("#!"))
            return "";
          let a = s.indexOf(`
`);
          return a === -1 ? s : s.slice(0, a);
        }
        r.exports = t;
      } }), Co = te({ "src/language-js/pragma.js"(e, r) {
        ne();
        var { parseWithComments: t, strip: s, extract: a, print: n } = od(), { normalizeEndOfLine: u } = Jn(), i = ld();
        function l(h) {
          let g = i(h);
          g && (h = h.slice(g.length + 1));
          let c = a(h), { pragmas: f, comments: F } = t(c);
          return { shebang: g, text: h, pragmas: f, comments: F };
        }
        function p(h) {
          let g = Object.keys(l(h).pragmas);
          return g.includes("prettier") || g.includes("format");
        }
        function y(h) {
          let { shebang: g, text: c, pragmas: f, comments: F } = l(h), _ = s(c), w = n({ pragmas: Object.assign({ format: "" }, f), comments: F.trimStart() });
          return (g ? `${g}
` : "") + u(w) + (_.startsWith(`
`) ? `
` : `

`) + _;
        }
        r.exports = { hasPragma: p, insertPragma: y };
      } }), cd = te({ "src/language-js/utils/is-type-cast-comment.js"(e, r) {
        ne();
        var t = Pt();
        function s(a) {
          return t(a) && a.value[0] === "*" && /@(?:type|satisfies)\b/.test(a.value);
        }
        r.exports = s;
      } }), Eo = te({ "src/language-js/comments.js"(e, r) {
        ne();
        var { getLast: t, hasNewline: s, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: a, getNextNonSpaceNonCommentCharacter: n, hasNewlineInRange: u, addLeadingComment: i, addTrailingComment: l, addDanglingComment: p, getNextNonSpaceNonCommentCharacterIndex: y, isNonEmptyArray: h } = Ue(), { getFunctionParameters: g, isPrettierIgnoreComment: c, isJsxNode: f, hasFlowShorthandAnnotationComment: F, hasFlowAnnotationComment: _, hasIgnoreComment: w, isCallLikeExpression: E, getCallArguments: N, isCallExpression: x, isMemberExpression: I, isObjectProperty: P, isLineComment: $, getComments: D, CommentCheckFlags: T, markerForIfWithoutBlockAndSameLineComment: m } = Ke(), { locStart: C, locEnd: o } = ut(), d = Pt(), v = cd();
        function S(De) {
          return [H, Fe, Q, q, J, L, ie, he, se, ge, we, ke, ce, z, U].some((A) => A(De));
        }
        function b(De) {
          return [R, Fe, V, we, q, J, L, ie, z, Z, fe, ge, Pe, U, X].some((A) => A(De));
        }
        function B(De) {
          return [H, q, J, j, ue, ce, ge, de, K, pe, U, oe].some((A) => A(De));
        }
        function k(De, A) {
          let G = (De.body || De.properties).find((re) => {
            let { type: ye } = re;
            return ye !== "EmptyStatement";
          });
          G ? i(G, A) : p(De, A);
        }
        function M(De, A) {
          De.type === "BlockStatement" ? k(De, A) : i(De, A);
        }
        function R(De) {
          let { comment: A, followingNode: G } = De;
          return G && v(A) ? (i(G, A), true) : false;
        }
        function q(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye, text: Ce } = De;
          if ((re == null ? void 0 : re.type) !== "IfStatement" || !ye)
            return false;
          if (n(Ce, A, o) === ")")
            return l(G, A), true;
          if (G === re.consequent && ye === re.alternate) {
            if (G.type === "BlockStatement")
              l(G, A);
            else {
              let ve = A.type === "SingleLine" || A.loc.start.line === A.loc.end.line, ze = A.loc.start.line === G.loc.start.line;
              ve && ze ? p(G, A, m) : p(re, A);
            }
            return true;
          }
          return ye.type === "BlockStatement" ? (k(ye, A), true) : ye.type === "IfStatement" ? (M(ye.consequent, A), true) : re.consequent === ye ? (i(ye, A), true) : false;
        }
        function J(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye, text: Ce } = De;
          return (re == null ? void 0 : re.type) !== "WhileStatement" || !ye ? false : n(Ce, A, o) === ")" ? (l(G, A), true) : ye.type === "BlockStatement" ? (k(ye, A), true) : re.body === ye ? (i(ye, A), true) : false;
        }
        function L(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye } = De;
          return (re == null ? void 0 : re.type) !== "TryStatement" && (re == null ? void 0 : re.type) !== "CatchClause" || !ye ? false : re.type === "CatchClause" && G ? (l(G, A), true) : ye.type === "BlockStatement" ? (k(ye, A), true) : ye.type === "TryStatement" ? (M(ye.finalizer, A), true) : ye.type === "CatchClause" ? (M(ye.body, A), true) : false;
        }
        function Q(De) {
          let { comment: A, enclosingNode: G, followingNode: re } = De;
          return I(G) && (re == null ? void 0 : re.type) === "Identifier" ? (i(G, A), true) : false;
        }
        function V(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye, text: Ce } = De, Be = G && !u(Ce, o(G), C(A));
          return (!G || !Be) && ((re == null ? void 0 : re.type) === "ConditionalExpression" || (re == null ? void 0 : re.type) === "TSConditionalType") && ye ? (i(ye, A), true) : false;
        }
        function j(De) {
          let { comment: A, precedingNode: G, enclosingNode: re } = De;
          return P(re) && re.shorthand && re.key === G && re.value.type === "AssignmentPattern" ? (l(re.value.left, A), true) : false;
        }
        var Y = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function ie(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye } = De;
          if (Y.has(re == null ? void 0 : re.type)) {
            if (h(re.decorators) && !(ye && ye.type === "Decorator"))
              return l(t(re.decorators), A), true;
            if (re.body && ye === re.body)
              return k(re.body, A), true;
            if (ye) {
              if (re.superClass && ye === re.superClass && G && (G === re.id || G === re.typeParameters))
                return l(G, A), true;
              for (let Ce of ["implements", "extends", "mixins"])
                if (re[Ce] && ye === re[Ce][0])
                  return G && (G === re.id || G === re.typeParameters || G === re.superClass) ? l(G, A) : p(re, A, Ce), true;
            }
          }
          return false;
        }
        var ee = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function ce(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, text: ye } = De;
          return re && G && n(ye, A, o) === "(" && (re.type === "Property" || re.type === "TSDeclareMethod" || re.type === "TSAbstractMethodDefinition") && G.type === "Identifier" && re.key === G && n(ye, G, o) !== ":" || (G == null ? void 0 : G.type) === "Decorator" && ee.has(re == null ? void 0 : re.type) ? (l(G, A), true) : false;
        }
        var W = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function K(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, text: ye } = De;
          return n(ye, A, o) !== "(" ? false : G && W.has(re == null ? void 0 : re.type) ? (l(G, A), true) : false;
        }
        function de(De) {
          let { comment: A, enclosingNode: G, text: re } = De;
          if ((G == null ? void 0 : G.type) !== "ArrowFunctionExpression")
            return false;
          let ye = y(re, A, o);
          return ye !== false && re.slice(ye, ye + 2) === "=>" ? (p(G, A), true) : false;
        }
        function ue(De) {
          let { comment: A, enclosingNode: G, text: re } = De;
          return n(re, A, o) !== ")" ? false : G && (le(G) && g(G).length === 0 || E(G) && N(G).length === 0) ? (p(G, A), true) : ((G == null ? void 0 : G.type) === "MethodDefinition" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && g(G.value).length === 0 ? (p(G.value, A), true) : false;
        }
        function Fe(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye, text: Ce } = De;
          if ((G == null ? void 0 : G.type) === "FunctionTypeParam" && (re == null ? void 0 : re.type) === "FunctionTypeAnnotation" && (ye == null ? void 0 : ye.type) !== "FunctionTypeParam" || ((G == null ? void 0 : G.type) === "Identifier" || (G == null ? void 0 : G.type) === "AssignmentPattern") && re && le(re) && n(Ce, A, o) === ")")
            return l(G, A), true;
          if ((re == null ? void 0 : re.type) === "FunctionDeclaration" && (ye == null ? void 0 : ye.type) === "BlockStatement") {
            let Be = (() => {
              let ve = g(re);
              if (ve.length > 0)
                return a(Ce, o(t(ve)));
              let ze = a(Ce, o(re.id));
              return ze !== false && a(Ce, ze + 1);
            })();
            if (C(A) > Be)
              return k(ye, A), true;
          }
          return false;
        }
        function z(De) {
          let { comment: A, enclosingNode: G } = De;
          return (G == null ? void 0 : G.type) === "LabeledStatement" ? (i(G, A), true) : false;
        }
        function U(De) {
          let { comment: A, enclosingNode: G } = De;
          return ((G == null ? void 0 : G.type) === "ContinueStatement" || (G == null ? void 0 : G.type) === "BreakStatement") && !G.label ? (l(G, A), true) : false;
        }
        function Z(De) {
          let { comment: A, precedingNode: G, enclosingNode: re } = De;
          return x(re) && G && re.callee === G && re.arguments.length > 0 ? (i(re.arguments[0], A), true) : false;
        }
        function se(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye } = De;
          return (re == null ? void 0 : re.type) === "UnionTypeAnnotation" || (re == null ? void 0 : re.type) === "TSUnionType" ? (c(A) && (ye.prettierIgnore = true, A.unignore = true), G ? (l(G, A), true) : false) : (((ye == null ? void 0 : ye.type) === "UnionTypeAnnotation" || (ye == null ? void 0 : ye.type) === "TSUnionType") && c(A) && (ye.types[0].prettierIgnore = true, A.unignore = true), false);
        }
        function fe(De) {
          let { comment: A, enclosingNode: G } = De;
          return P(G) ? (i(G, A), true) : false;
        }
        function ge(De) {
          let { comment: A, enclosingNode: G, followingNode: re, ast: ye, isLastComment: Ce } = De;
          return ye && ye.body && ye.body.length === 0 ? (Ce ? p(ye, A) : i(ye, A), true) : (G == null ? void 0 : G.type) === "Program" && (G == null ? void 0 : G.body.length) === 0 && !h(G.directives) ? (Ce ? p(G, A) : i(G, A), true) : (re == null ? void 0 : re.type) === "Program" && (re == null ? void 0 : re.body.length) === 0 && (G == null ? void 0 : G.type) === "ModuleExpression" ? (p(re, A), true) : false;
        }
        function he(De) {
          let { comment: A, enclosingNode: G } = De;
          return (G == null ? void 0 : G.type) === "ForInStatement" || (G == null ? void 0 : G.type) === "ForOfStatement" ? (i(G, A), true) : false;
        }
        function we(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, text: ye } = De;
          if ((re == null ? void 0 : re.type) === "ImportSpecifier" || (re == null ? void 0 : re.type) === "ExportSpecifier")
            return i(re, A), true;
          let Ce = (G == null ? void 0 : G.type) === "ImportSpecifier" && (re == null ? void 0 : re.type) === "ImportDeclaration", Be = (G == null ? void 0 : G.type) === "ExportSpecifier" && (re == null ? void 0 : re.type) === "ExportNamedDeclaration";
          return (Ce || Be) && s(ye, o(A)) ? (l(G, A), true) : false;
        }
        function ke(De) {
          let { comment: A, enclosingNode: G } = De;
          return (G == null ? void 0 : G.type) === "AssignmentPattern" ? (i(G, A), true) : false;
        }
        var Re = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), Ne = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function Pe(De) {
          let { comment: A, enclosingNode: G, followingNode: re } = De;
          return Re.has(G == null ? void 0 : G.type) && re && (Ne.has(re.type) || d(A)) ? (i(re, A), true) : false;
        }
        function oe(De) {
          let { comment: A, enclosingNode: G, followingNode: re, text: ye } = De;
          return !re && ((G == null ? void 0 : G.type) === "TSMethodSignature" || (G == null ? void 0 : G.type) === "TSDeclareFunction" || (G == null ? void 0 : G.type) === "TSAbstractMethodDefinition") && n(ye, A, o) === ";" ? (l(G, A), true) : false;
        }
        function H(De) {
          let { comment: A, enclosingNode: G, followingNode: re } = De;
          if (c(A) && (G == null ? void 0 : G.type) === "TSMappedType" && (re == null ? void 0 : re.type) === "TSTypeParameter" && re.constraint)
            return G.prettierIgnore = true, A.unignore = true, true;
        }
        function pe(De) {
          let { comment: A, precedingNode: G, enclosingNode: re, followingNode: ye } = De;
          return (re == null ? void 0 : re.type) !== "TSMappedType" ? false : (ye == null ? void 0 : ye.type) === "TSTypeParameter" && ye.name ? (i(ye.name, A), true) : (G == null ? void 0 : G.type) === "TSTypeParameter" && G.constraint ? (l(G.constraint, A), true) : false;
        }
        function X(De) {
          let { comment: A, enclosingNode: G, followingNode: re } = De;
          return !G || G.type !== "SwitchCase" || G.test || !re || re !== G.consequent[0] ? false : (re.type === "BlockStatement" && $(A) ? k(re, A) : p(G, A), true);
        }
        function le(De) {
          return De.type === "ArrowFunctionExpression" || De.type === "FunctionExpression" || De.type === "FunctionDeclaration" || De.type === "ObjectMethod" || De.type === "ClassMethod" || De.type === "TSDeclareFunction" || De.type === "TSCallSignatureDeclaration" || De.type === "TSConstructSignatureDeclaration" || De.type === "TSMethodSignature" || De.type === "TSConstructorType" || De.type === "TSFunctionType" || De.type === "TSDeclareMethod";
        }
        function Ae(De, A) {
          if ((A.parser === "typescript" || A.parser === "flow" || A.parser === "acorn" || A.parser === "espree" || A.parser === "meriyah" || A.parser === "__babel_estree") && De.type === "MethodDefinition" && De.value && De.value.type === "FunctionExpression" && g(De.value).length === 0 && !De.value.returnType && !h(De.value.typeParameters) && De.value.body)
            return [...De.decorators || [], De.key, De.value.body];
        }
        function Ee(De) {
          let A = De.getValue(), G = De.getParentNode(), re = (ye) => _(D(ye, T.Leading)) || _(D(ye, T.Trailing));
          return (A && (f(A) || F(A) || x(G) && re(A)) || G && (G.type === "JSXSpreadAttribute" || G.type === "JSXSpreadChild" || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType" || (G.type === "ClassDeclaration" || G.type === "ClassExpression") && G.superClass === A)) && (!w(De) || G.type === "UnionTypeAnnotation" || G.type === "TSUnionType");
        }
        r.exports = { handleOwnLineComment: S, handleEndOfLineComment: b, handleRemainingComment: B, getCommentChildNodes: Ae, willPrintOwnComments: Ee };
      } }), qt = te({ "src/language-js/needs-parens.js"(e, r) {
        ne();
        var t = lt(), s = Kn(), { getFunctionParameters: a, getLeftSidePathName: n, hasFlowShorthandAnnotationComment: u, hasNakedLeftSide: i, hasNode: l, isBitwiseOperator: p, startsWithNoLookaheadToken: y, shouldFlatten: h, getPrecedence: g, isCallExpression: c, isMemberExpression: f, isObjectProperty: F, isTSTypeExpression: _ } = Ke();
        function w(D, T) {
          let m = D.getParentNode();
          if (!m)
            return false;
          let C = D.getName(), o = D.getNode();
          if (T.__isInHtmlInterpolation && !T.bracketSpacing && I(o) && P(D))
            return true;
          if (E(o))
            return false;
          if (T.parser !== "flow" && u(D.getValue()))
            return true;
          if (o.type === "Identifier") {
            if (o.extra && o.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o.name) || C === "left" && (o.name === "async" && !m.await || o.name === "let") && m.type === "ForOfStatement")
              return true;
            if (o.name === "let") {
              var d;
              let S = (d = D.findAncestor((b) => b.type === "ForOfStatement")) === null || d === void 0 ? void 0 : d.left;
              if (S && y(S, (b) => b === o))
                return true;
            }
            if (C === "object" && o.name === "let" && m.type === "MemberExpression" && m.computed && !m.optional) {
              let S = D.findAncestor((B) => B.type === "ExpressionStatement" || B.type === "ForStatement" || B.type === "ForInStatement"), b = S ? S.type === "ExpressionStatement" ? S.expression : S.type === "ForStatement" ? S.init : S.left : void 0;
              if (b && y(b, (B) => B === o))
                return true;
            }
            return false;
          }
          if (o.type === "ObjectExpression" || o.type === "FunctionExpression" || o.type === "ClassExpression" || o.type === "DoExpression") {
            var v;
            let S = (v = D.findAncestor((b) => b.type === "ExpressionStatement")) === null || v === void 0 ? void 0 : v.expression;
            if (S && y(S, (b) => b === o))
              return true;
          }
          switch (m.type) {
            case "ParenthesizedExpression":
              return false;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (C === "superClass" && (o.type === "ArrowFunctionExpression" || o.type === "AssignmentExpression" || o.type === "AwaitExpression" || o.type === "BinaryExpression" || o.type === "ConditionalExpression" || o.type === "LogicalExpression" || o.type === "NewExpression" || o.type === "ObjectExpression" || o.type === "SequenceExpression" || o.type === "TaggedTemplateExpression" || o.type === "UnaryExpression" || o.type === "UpdateExpression" || o.type === "YieldExpression" || o.type === "TSNonNullExpression"))
                return true;
              break;
            }
            case "ExportDefaultDeclaration":
              return $(D, T) || o.type === "SequenceExpression";
            case "Decorator": {
              if (C === "expression") {
                if (f(o) && o.computed)
                  return true;
                let S = false, b = false, B = o;
                for (; B; )
                  switch (B.type) {
                    case "MemberExpression":
                      b = true, B = B.object;
                      break;
                    case "CallExpression":
                      if (b || S)
                        return T.parser !== "typescript";
                      S = true, B = B.callee;
                      break;
                    case "Identifier":
                      return false;
                    case "TaggedTemplateExpression":
                      return T.parser !== "typescript";
                    default:
                      return true;
                  }
                return true;
              }
              break;
            }
            case "ArrowFunctionExpression": {
              if (C === "body" && o.type !== "SequenceExpression" && y(o, (S) => S.type === "ObjectExpression"))
                return true;
              break;
            }
          }
          switch (o.type) {
            case "UpdateExpression":
              if (m.type === "UnaryExpression")
                return o.prefix && (o.operator === "++" && m.operator === "+" || o.operator === "--" && m.operator === "-");
            case "UnaryExpression":
              switch (m.type) {
                case "UnaryExpression":
                  return o.operator === m.operator && (o.operator === "+" || o.operator === "-");
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return C === "object";
                case "TaggedTemplateExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "BinaryExpression":
                  return C === "left" && m.operator === "**";
                case "TSNonNullExpression":
                  return true;
                default:
                  return false;
              }
            case "BinaryExpression": {
              if (m.type === "UpdateExpression" || o.operator === "in" && N(D))
                return true;
              if (o.operator === "|>" && o.extra && o.extra.parenthesized) {
                let S = D.getParentNode(1);
                if (S.type === "BinaryExpression" && S.operator === "|>")
                  return true;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (m.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !_(o);
                case "ConditionalExpression":
                  return _(o);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return C === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return C === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return C === "left" && (o.type === "TSTypeAssertion" || _(o));
                case "LogicalExpression":
                  if (o.type === "LogicalExpression")
                    return m.operator !== o.operator;
                case "BinaryExpression": {
                  let { operator: S, type: b } = o;
                  if (!S && b !== "TSTypeAssertion")
                    return true;
                  let B = g(S), k = m.operator, M = g(k);
                  return M > B || C === "right" && M === B || M === B && !h(k, S) ? true : M < B && S === "%" ? k === "+" || k === "-" : !!p(k);
                }
                default:
                  return false;
              }
            case "SequenceExpression":
              switch (m.type) {
                case "ReturnStatement":
                  return false;
                case "ForStatement":
                  return false;
                case "ExpressionStatement":
                  return C !== "expression";
                case "ArrowFunctionExpression":
                  return C !== "body";
                default:
                  return true;
              }
            case "YieldExpression":
              if (m.type === "UnaryExpression" || m.type === "AwaitExpression" || _(m) || m.type === "TSNonNullExpression")
                return true;
            case "AwaitExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return C === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "ConditionalExpression":
                  return C === "test";
                case "BinaryExpression":
                  return !(!o.argument && m.operator === "|>");
                default:
                  return false;
              }
            case "TSConditionalType":
            case "TSFunctionType":
            case "TSConstructorType":
              if (C === "extendsType" && m.type === "TSConditionalType") {
                if (o.type === "TSConditionalType")
                  return true;
                let { typeAnnotation: S } = o.returnType || o.typeAnnotation;
                if (S.type === "TSTypePredicate" && S.typeAnnotation && (S = S.typeAnnotation.typeAnnotation), S.type === "TSInferType" && S.typeParameter.constraint)
                  return true;
              }
              if (C === "checkType" && m.type === "TSConditionalType")
                return true;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((m.type === "TSUnionType" || m.type === "TSIntersectionType") && m.types.length > 1 && (!o.types || o.types.length > 1))
                return true;
            case "TSInferType":
              if (o.type === "TSInferType" && m.type === "TSRestType")
                return false;
            case "TSTypeOperator":
              return m.type === "TSArrayType" || m.type === "TSOptionalType" || m.type === "TSRestType" || C === "objectType" && m.type === "TSIndexedAccessType" || m.type === "TSTypeOperator" || m.type === "TSTypeAnnotation" && D.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery":
              return C === "objectType" && m.type === "TSIndexedAccessType" || C === "elementType" && m.type === "TSArrayType";
            case "TypeofTypeAnnotation":
              return C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType") || C === "elementType" && m.type === "ArrayTypeAnnotation";
            case "ArrayTypeAnnotation":
              return m.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || m.type === "NullableTypeAnnotation" || m.type === "IntersectionTypeAnnotation" || m.type === "UnionTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return m.type === "ArrayTypeAnnotation" || C === "objectType" && (m.type === "IndexedAccessType" || m.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let S = m.type === "NullableTypeAnnotation" ? D.getParentNode(1) : m;
              return S.type === "UnionTypeAnnotation" || S.type === "IntersectionTypeAnnotation" || S.type === "ArrayTypeAnnotation" || C === "objectType" && (S.type === "IndexedAccessType" || S.type === "OptionalIndexedAccessType") || S.type === "NullableTypeAnnotation" || m.type === "FunctionTypeParam" && m.name === null && a(o).some((b) => b.typeAnnotation && b.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return C === "objectType" && m.type === "IndexedAccessType";
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof o.value == "string" && m.type === "ExpressionStatement" && !m.directive) {
                let S = D.getParentNode(1);
                return S.type === "Program" || S.type === "BlockStatement";
              }
              return C === "object" && m.type === "MemberExpression" && typeof o.value == "number";
            case "AssignmentExpression": {
              let S = D.getParentNode(1);
              return C === "body" && m.type === "ArrowFunctionExpression" ? true : C === "key" && (m.type === "ClassProperty" || m.type === "PropertyDefinition") && m.computed || (C === "init" || C === "update") && m.type === "ForStatement" ? false : m.type === "ExpressionStatement" ? o.left.type === "ObjectPattern" : !(C === "key" && m.type === "TSPropertySignature" || m.type === "AssignmentExpression" || m.type === "SequenceExpression" && S && S.type === "ForStatement" && (S.init === m || S.update === m) || C === "value" && m.type === "Property" && S && S.type === "ObjectPattern" && S.properties.includes(m) || m.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (m.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "ConditionalExpression":
                  return C === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return C === "object";
                default:
                  return false;
              }
            case "FunctionExpression":
              switch (m.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "TaggedTemplateExpression":
                  return true;
                default:
                  return false;
              }
            case "ArrowFunctionExpression":
              switch (m.type) {
                case "BinaryExpression":
                  return m.operator !== "|>" || o.extra && o.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return C === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return C === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return true;
                case "ConditionalExpression":
                  return C === "test";
                default:
                  return false;
              }
            case "ClassExpression":
              if (s(o.decorators))
                return true;
              switch (m.type) {
                case "NewExpression":
                  return C === "callee";
                default:
                  return false;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let S = D.getParentNode(1);
              if (C === "object" && m.type === "MemberExpression" || C === "callee" && (m.type === "CallExpression" || m.type === "NewExpression") || m.type === "TSNonNullExpression" && S.type === "MemberExpression" && S.object === m)
                return true;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression")) {
                let S = o;
                for (; S; )
                  switch (S.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return true;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      S = S.object;
                      break;
                    case "TaggedTemplateExpression":
                      S = S.tag;
                      break;
                    case "TSNonNullExpression":
                      S = S.expression;
                      break;
                    default:
                      return false;
                  }
              }
              return false;
            case "BindExpression":
              return C === "callee" && (m.type === "BindExpression" || m.type === "NewExpression") || C === "object" && f(m);
            case "NGPipeExpression":
              return !(m.type === "NGRoot" || m.type === "NGMicrosyntaxExpression" || m.type === "ObjectProperty" && !(o.extra && o.extra.parenthesized) || m.type === "ArrayExpression" || c(m) && m.arguments[C] === o || C === "right" && m.type === "NGPipeExpression" || C === "property" && m.type === "MemberExpression" || m.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return C === "callee" || C === "left" && m.type === "BinaryExpression" && m.operator === "<" || m.type !== "ArrayExpression" && m.type !== "ArrowFunctionExpression" && m.type !== "AssignmentExpression" && m.type !== "AssignmentPattern" && m.type !== "BinaryExpression" && m.type !== "NewExpression" && m.type !== "ConditionalExpression" && m.type !== "ExpressionStatement" && m.type !== "JsExpressionRoot" && m.type !== "JSXAttribute" && m.type !== "JSXElement" && m.type !== "JSXExpressionContainer" && m.type !== "JSXFragment" && m.type !== "LogicalExpression" && !c(m) && !F(m) && m.type !== "ReturnStatement" && m.type !== "ThrowStatement" && m.type !== "TypeCastExpression" && m.type !== "VariableDeclarator" && m.type !== "YieldExpression";
            case "TypeAnnotation":
              return C === "returnType" && m.type === "ArrowFunctionExpression" && x(o);
          }
          return false;
        }
        function E(D) {
          return D.type === "BlockStatement" || D.type === "BreakStatement" || D.type === "ClassBody" || D.type === "ClassDeclaration" || D.type === "ClassMethod" || D.type === "ClassProperty" || D.type === "PropertyDefinition" || D.type === "ClassPrivateProperty" || D.type === "ContinueStatement" || D.type === "DebuggerStatement" || D.type === "DeclareClass" || D.type === "DeclareExportAllDeclaration" || D.type === "DeclareExportDeclaration" || D.type === "DeclareFunction" || D.type === "DeclareInterface" || D.type === "DeclareModule" || D.type === "DeclareModuleExports" || D.type === "DeclareVariable" || D.type === "DoWhileStatement" || D.type === "EnumDeclaration" || D.type === "ExportAllDeclaration" || D.type === "ExportDefaultDeclaration" || D.type === "ExportNamedDeclaration" || D.type === "ExpressionStatement" || D.type === "ForInStatement" || D.type === "ForOfStatement" || D.type === "ForStatement" || D.type === "FunctionDeclaration" || D.type === "IfStatement" || D.type === "ImportDeclaration" || D.type === "InterfaceDeclaration" || D.type === "LabeledStatement" || D.type === "MethodDefinition" || D.type === "ReturnStatement" || D.type === "SwitchStatement" || D.type === "ThrowStatement" || D.type === "TryStatement" || D.type === "TSDeclareFunction" || D.type === "TSEnumDeclaration" || D.type === "TSImportEqualsDeclaration" || D.type === "TSInterfaceDeclaration" || D.type === "TSModuleDeclaration" || D.type === "TSNamespaceExportDeclaration" || D.type === "TypeAlias" || D.type === "VariableDeclaration" || D.type === "WhileStatement" || D.type === "WithStatement";
        }
        function N(D) {
          let T = 0, m = D.getValue();
          for (; m; ) {
            let C = D.getParentNode(T++);
            if (C && C.type === "ForStatement" && C.init === m)
              return true;
            m = C;
          }
          return false;
        }
        function x(D) {
          return l(D, (T) => T.type === "ObjectTypeAnnotation" && l(T, (m) => m.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function I(D) {
          switch (D.type) {
            case "ObjectExpression":
              return true;
            default:
              return false;
          }
        }
        function P(D) {
          let T = D.getValue(), m = D.getParentNode(), C = D.getName();
          switch (m.type) {
            case "NGPipeExpression":
              if (typeof C == "number" && m.arguments[C] === T && m.arguments.length - 1 === C)
                return D.callParent(P);
              break;
            case "ObjectProperty":
              if (C === "value") {
                let o = D.getParentNode(1);
                return t(o.properties) === m;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (C === "right")
                return D.callParent(P);
              break;
            case "ConditionalExpression":
              if (C === "alternate")
                return D.callParent(P);
              break;
            case "UnaryExpression":
              if (m.prefix)
                return D.callParent(P);
              break;
          }
          return false;
        }
        function $(D, T) {
          let m = D.getValue(), C = D.getParentNode();
          return m.type === "FunctionExpression" || m.type === "ClassExpression" ? C.type === "ExportDefaultDeclaration" || !w(D, T) : !i(m) || C.type !== "ExportDefaultDeclaration" && w(D, T) ? false : D.call((o) => $(o, T), ...n(D, m));
        }
        r.exports = w;
      } }), Fo = te({ "src/language-js/print-preprocess.js"(e, r) {
        ne();
        function t(s, a) {
          switch (a.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, s), {}, { type: a.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: s, comments: [], rootMarker: a.rootMarker });
            default:
              return s;
          }
        }
        r.exports = t;
      } }), pd = te({ "src/language-js/print/html-binding.js"(e, r) {
        ne();
        var { builders: { join: t, line: s, group: a, softline: n, indent: u } } = qe();
        function i(p, y, h) {
          let g = p.getValue();
          if (y.__onHtmlBindingRoot && p.getName() === null && y.__onHtmlBindingRoot(g, y), g.type === "File") {
            if (y.__isVueForBindingLeft)
              return p.call((c) => {
                let f = t([",", s], c.map(h, "params")), { params: F } = c.getValue();
                return F.length === 1 ? f : ["(", u([n, a(f)]), n, ")"];
              }, "program", "body", 0);
            if (y.__isVueBindings)
              return p.call((c) => t([",", s], c.map(h, "params")), "program", "body", 0);
          }
        }
        function l(p) {
          switch (p.type) {
            case "MemberExpression":
              switch (p.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return l(p.object);
              }
              return false;
            case "Identifier":
              return true;
            default:
              return false;
          }
        }
        r.exports = { isVueEventBindingExpression: l, printHtmlBinding: i };
      } }), ru = te({ "src/language-js/print/binaryish.js"(e, r) {
        ne();
        var { printComments: t } = et(), { getLast: s } = Ue(), { builders: { join: a, line: n, softline: u, group: i, indent: l, align: p, indentIfBreak: y }, utils: { cleanDoc: h, getDocParts: g, isConcat: c } } = qe(), { hasLeadingOwnLineComment: f, isBinaryish: F, isJsxNode: _, shouldFlatten: w, hasComment: E, CommentCheckFlags: N, isCallExpression: x, isMemberExpression: I, isObjectProperty: P, isEnabledHackPipeline: $ } = Ke(), D = 0;
        function T(o, d, v) {
          let S = o.getValue(), b = o.getParentNode(), B = o.getParentNode(1), k = S !== b.body && (b.type === "IfStatement" || b.type === "WhileStatement" || b.type === "SwitchStatement" || b.type === "DoWhileStatement"), M = $(d) && S.operator === "|>", R = m(o, v, d, false, k);
          if (k)
            return R;
          if (M)
            return i(R);
          if (x(b) && b.callee === S || b.type === "UnaryExpression" || I(b) && !b.computed)
            return i([l([u, ...R]), u]);
          let q = b.type === "ReturnStatement" || b.type === "ThrowStatement" || b.type === "JSXExpressionContainer" && B.type === "JSXAttribute" || S.operator !== "|" && b.type === "JsExpressionRoot" || S.type !== "NGPipeExpression" && (b.type === "NGRoot" && d.parser === "__ng_binding" || b.type === "NGMicrosyntaxExpression" && B.type === "NGMicrosyntax" && B.body.length === 1) || S === b.body && b.type === "ArrowFunctionExpression" || S !== b.body && b.type === "ForStatement" || b.type === "ConditionalExpression" && B.type !== "ReturnStatement" && B.type !== "ThrowStatement" && !x(B) || b.type === "TemplateLiteral", J = b.type === "AssignmentExpression" || b.type === "VariableDeclarator" || b.type === "ClassProperty" || b.type === "PropertyDefinition" || b.type === "TSAbstractPropertyDefinition" || b.type === "ClassPrivateProperty" || P(b), L = F(S.left) && w(S.operator, S.left.operator);
          if (q || C(S) && !L || !C(S) && J)
            return i(R);
          if (R.length === 0)
            return "";
          let Q = _(S.right), V = R.findIndex((W) => typeof W != "string" && !Array.isArray(W) && W.type === "group"), j = R.slice(0, V === -1 ? 1 : V + 1), Y = R.slice(j.length, Q ? -1 : void 0), ie = Symbol("logicalChain-" + ++D), ee = i([...j, l(Y)], { id: ie });
          if (!Q)
            return ee;
          let ce = s(R);
          return i([ee, y(ce, { groupId: ie })]);
        }
        function m(o, d, v, S, b) {
          let B = o.getValue();
          if (!F(B))
            return [i(d())];
          let k = [];
          w(B.operator, B.left.operator) ? k = o.call((Y) => m(Y, d, v, true, b), "left") : k.push(i(d("left")));
          let M = C(B), R = (B.operator === "|>" || B.type === "NGPipeExpression" || B.operator === "|" && v.parser === "__vue_expression") && !f(v.originalText, B.right), q = B.type === "NGPipeExpression" ? "|" : B.operator, J = B.type === "NGPipeExpression" && B.arguments.length > 0 ? i(l([n, ": ", a([n, ": "], o.map(d, "arguments").map((Y) => p(2, i(Y))))])) : "", L;
          if (M)
            L = [q, " ", d("right"), J];
          else {
            let ie = $(v) && q === "|>" ? o.call((ee) => m(ee, d, v, true, b), "right") : d("right");
            L = [R ? n : "", q, R ? " " : n, ie, J];
          }
          let Q = o.getParentNode(), V = E(B.left, N.Trailing | N.Line), j = V || !(b && B.type === "LogicalExpression") && Q.type !== B.type && B.left.type !== B.type && B.right.type !== B.type;
          if (k.push(R ? "" : " ", j ? i(L, { shouldBreak: V }) : L), S && E(B)) {
            let Y = h(t(o, k, v));
            return c(Y) || Y.type === "fill" ? g(Y) : [Y];
          }
          return k;
        }
        function C(o) {
          return o.type !== "LogicalExpression" ? false : !!(o.right.type === "ObjectExpression" && o.right.properties.length > 0 || o.right.type === "ArrayExpression" && o.right.elements.length > 0 || _(o.right));
        }
        r.exports = { printBinaryishExpression: T, shouldInlineLogicalExpression: C };
      } }), fd = te({ "src/language-js/print/angular.js"(e, r) {
        ne();
        var { builders: { join: t, line: s, group: a } } = qe(), { hasNode: n, hasComment: u, getComments: i } = Ke(), { printBinaryishExpression: l } = ru();
        function p(g, c, f) {
          let F = g.getValue();
          if (F.type.startsWith("NG"))
            switch (F.type) {
              case "NGRoot":
                return [f("node"), u(F.node) ? " //" + i(F.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return l(g, c, f);
              case "NGChainedExpression":
                return a(t([";", s], g.map((_) => h(_) ? f() : ["(", f(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [F.prefix, ": ", F.value.trim()];
              case "NGMicrosyntax":
                return g.map((_, w) => [w === 0 ? "" : y(_.getValue(), w, F) ? " " : [";", s], f()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(F.name) ? F.name : JSON.stringify(F.name);
              case "NGMicrosyntaxExpression":
                return [f("expression"), F.alias === null ? "" : [" as ", f("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let _ = g.getName(), w = g.getParentNode(), E = y(F, _, w) || (_ === 1 && (F.key.name === "then" || F.key.name === "else") || _ === 2 && F.key.name === "else" && w.body[_ - 1].type === "NGMicrosyntaxKeyedExpression" && w.body[_ - 1].key.name === "then") && w.body[0].type === "NGMicrosyntaxExpression";
                return [f("key"), E ? " " : ": ", f("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", f("key"), F.value === null ? "" : [" = ", f("value")]];
              case "NGMicrosyntaxAs":
                return [f("key"), " as ", f("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(F.type)}.`);
            }
        }
        function y(g, c, f) {
          return g.type === "NGMicrosyntaxKeyedExpression" && g.key.name === "of" && c === 1 && f.body[0].type === "NGMicrosyntaxLet" && f.body[0].value === null;
        }
        function h(g) {
          return n(g.getValue(), (c) => {
            switch (c.type) {
              case void 0:
                return false;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return true;
            }
          });
        }
        r.exports = { printAngular: p };
      } }), Dd = te({ "src/language-js/print/jsx.js"(e, r) {
        ne();
        var { printComments: t, printDanglingComments: s, printCommentsSeparately: a } = et(), { builders: { line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: y, fill: h, ifBreak: g, lineSuffixBoundary: c, join: f }, utils: { willBreak: F } } = qe(), { getLast: _, getPreferredQuote: w } = Ue(), { isJsxNode: E, rawText: N, isCallExpression: x, isStringLiteral: I, isBinaryish: P, hasComment: $, CommentCheckFlags: D, hasNodeIgnoreComment: T } = Ke(), m = qt(), { willPrintOwnComments: C } = Eo(), o = (U) => U === "" || U === n || U === u || U === i;
        function d(U, Z, se) {
          let fe = U.getValue();
          if (fe.type === "JSXElement" && de(fe))
            return [se("openingElement"), se("closingElement")];
          let ge = fe.type === "JSXElement" ? se("openingElement") : se("openingFragment"), he = fe.type === "JSXElement" ? se("closingElement") : se("closingFragment");
          if (fe.children.length === 1 && fe.children[0].type === "JSXExpressionContainer" && (fe.children[0].expression.type === "TemplateLiteral" || fe.children[0].expression.type === "TaggedTemplateExpression"))
            return [ge, ...U.map(se, "children"), he];
          fe.children = fe.children.map((A) => Fe(A) ? { type: "JSXText", value: " ", raw: " " } : A);
          let we = fe.children.some(E), ke = fe.children.filter((A) => A.type === "JSXExpressionContainer").length > 1, Re = fe.type === "JSXElement" && fe.openingElement.attributes.length > 1, Ne = F(ge) || we || Re || ke, Pe = U.getParentNode().rootMarker === "mdx", oe = Z.singleQuote ? "{' '}" : '{" "}', H = Pe ? " " : g([oe, i], " "), pe = fe.openingElement && fe.openingElement.name && fe.openingElement.name.name === "fbt", X = v(U, Z, se, H, pe), le = fe.children.some((A) => ue(A));
          for (let A = X.length - 2; A >= 0; A--) {
            let G = X[A] === "" && X[A + 1] === "", re = X[A] === u && X[A + 1] === "" && X[A + 2] === u, ye = (X[A] === i || X[A] === u) && X[A + 1] === "" && X[A + 2] === H, Ce = X[A] === H && X[A + 1] === "" && (X[A + 2] === i || X[A + 2] === u), Be = X[A] === H && X[A + 1] === "" && X[A + 2] === H, ve = X[A] === i && X[A + 1] === "" && X[A + 2] === u || X[A] === u && X[A + 1] === "" && X[A + 2] === i;
            re && le || G || ye || Be || ve ? X.splice(A, 2) : Ce && X.splice(A + 1, 2);
          }
          for (; X.length > 0 && o(_(X)); )
            X.pop();
          for (; X.length > 1 && o(X[0]) && o(X[1]); )
            X.shift(), X.shift();
          let Ae = [];
          for (let [A, G] of X.entries()) {
            if (G === H) {
              if (A === 1 && X[A - 1] === "") {
                if (X.length === 2) {
                  Ae.push(oe);
                  continue;
                }
                Ae.push([oe, u]);
                continue;
              } else if (A === X.length - 1) {
                Ae.push(oe);
                continue;
              } else if (X[A - 1] === "" && X[A - 2] === u) {
                Ae.push(oe);
                continue;
              }
            }
            Ae.push(G), F(G) && (Ne = true);
          }
          let Ee = le ? h(Ae) : l(Ae, { shouldBreak: true });
          if (Pe)
            return Ee;
          let De = l([ge, p([u, Ee]), u, he]);
          return Ne ? De : y([l([ge, ...X, he]), De]);
        }
        function v(U, Z, se, fe, ge) {
          let he = [];
          return U.each((we, ke, Re) => {
            let Ne = we.getValue();
            if (Ne.type === "JSXText") {
              let Pe = N(Ne);
              if (ue(Ne)) {
                let oe = Pe.split(ce);
                if (oe[0] === "") {
                  if (he.push(""), oe.shift(), /\n/.test(oe[0])) {
                    let pe = Re[ke + 1];
                    he.push(b(ge, oe[1], Ne, pe));
                  } else
                    he.push(fe);
                  oe.shift();
                }
                let H;
                if (_(oe) === "" && (oe.pop(), H = oe.pop()), oe.length === 0)
                  return;
                for (let [pe, X] of oe.entries())
                  pe % 2 === 1 ? he.push(n) : he.push(X);
                if (H !== void 0)
                  if (/\n/.test(H)) {
                    let pe = Re[ke + 1];
                    he.push(b(ge, _(he), Ne, pe));
                  } else
                    he.push(fe);
                else {
                  let pe = Re[ke + 1];
                  he.push(S(ge, _(he), Ne, pe));
                }
              } else
                /\n/.test(Pe) ? Pe.match(/\n/g).length > 1 && he.push("", u) : he.push("", fe);
            } else {
              let Pe = se();
              he.push(Pe);
              let oe = Re[ke + 1];
              if (oe && ue(oe)) {
                let pe = K(N(oe)).split(ce)[0];
                he.push(S(ge, pe, Ne, oe));
              } else
                he.push(u);
            }
          }, "children"), he;
        }
        function S(U, Z, se, fe) {
          return U ? "" : se.type === "JSXElement" && !se.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? Z.length === 1 ? i : u : i;
        }
        function b(U, Z, se, fe) {
          return U ? u : Z.length === 1 ? se.type === "JSXElement" && !se.closingElement || fe && fe.type === "JSXElement" && !fe.closingElement ? u : i : u;
        }
        function B(U, Z, se) {
          let fe = U.getParentNode();
          if (!fe || { ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true }[fe.type])
            return Z;
          let he = U.match(void 0, (ke) => ke.type === "ArrowFunctionExpression", x, (ke) => ke.type === "JSXExpressionContainer"), we = m(U, se);
          return l([we ? "" : g("("), p([i, Z]), i, we ? "" : g(")")], { shouldBreak: he });
        }
        function k(U, Z, se) {
          let fe = U.getValue(), ge = [];
          if (ge.push(se("name")), fe.value) {
            let he;
            if (I(fe.value)) {
              let ke = N(fe.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: Re, quote: Ne, regex: Pe } = w(ke, Z.jsxSingleQuote ? "'" : '"');
              ke = ke.replace(Pe, Re);
              let { leading: oe, trailing: H } = U.call(() => a(U, Z), "value");
              he = [oe, Ne, ke, Ne, H];
            } else
              he = se("value");
            ge.push("=", he);
          }
          return ge;
        }
        function M(U, Z, se) {
          let fe = U.getValue(), ge = (he, we) => he.type === "JSXEmptyExpression" || !$(he) && (he.type === "ArrayExpression" || he.type === "ObjectExpression" || he.type === "ArrowFunctionExpression" || he.type === "AwaitExpression" && (ge(he.argument, he) || he.argument.type === "JSXElement") || x(he) || he.type === "FunctionExpression" || he.type === "TemplateLiteral" || he.type === "TaggedTemplateExpression" || he.type === "DoExpression" || E(we) && (he.type === "ConditionalExpression" || P(he)));
          return ge(fe.expression, U.getParentNode(0)) ? l(["{", se("expression"), c, "}"]) : l(["{", p([i, se("expression")]), i, c, "}"]);
        }
        function R(U, Z, se) {
          let fe = U.getValue(), ge = fe.name && $(fe.name) || fe.typeParameters && $(fe.typeParameters);
          if (fe.selfClosing && fe.attributes.length === 0 && !ge)
            return ["<", se("name"), se("typeParameters"), " />"];
          if (fe.attributes && fe.attributes.length === 1 && fe.attributes[0].value && I(fe.attributes[0].value) && !fe.attributes[0].value.value.includes(`
`) && !ge && !$(fe.attributes[0]))
            return l(["<", se("name"), se("typeParameters"), " ", ...U.map(se, "attributes"), fe.selfClosing ? " />" : ">"]);
          let he = fe.attributes && fe.attributes.some((ke) => ke.value && I(ke.value) && ke.value.value.includes(`
`)), we = Z.singleAttributePerLine && fe.attributes.length > 1 ? u : n;
          return l(["<", se("name"), se("typeParameters"), p(U.map(() => [we, se()], "attributes")), ...q(fe, Z, ge)], { shouldBreak: he });
        }
        function q(U, Z, se) {
          return U.selfClosing ? [n, "/>"] : J(U, Z, se) ? [">"] : [i, ">"];
        }
        function J(U, Z, se) {
          let fe = U.attributes.length > 0 && $(_(U.attributes), D.Trailing);
          return U.attributes.length === 0 && !se || (Z.bracketSameLine || Z.jsxBracketSameLine) && (!se || U.attributes.length > 0) && !fe;
        }
        function L(U, Z, se) {
          let fe = U.getValue(), ge = [];
          ge.push("</");
          let he = se("name");
          return $(fe.name, D.Leading | D.Line) ? ge.push(p([u, he]), u) : $(fe.name, D.Leading | D.Block) ? ge.push(" ", he) : ge.push(he), ge.push(">"), ge;
        }
        function Q(U, Z) {
          let se = U.getValue(), fe = $(se), ge = $(se, D.Line), he = se.type === "JSXOpeningFragment";
          return [he ? "<" : "</", p([ge ? u : fe && !he ? " " : "", s(U, Z, true)]), ge ? u : "", ">"];
        }
        function V(U, Z, se) {
          let fe = t(U, d(U, Z, se), Z);
          return B(U, fe, Z);
        }
        function j(U, Z) {
          let se = U.getValue(), fe = $(se, D.Line);
          return [s(U, Z, !fe), fe ? u : ""];
        }
        function Y(U, Z, se) {
          let fe = U.getValue();
          return ["{", U.call((ge) => {
            let he = ["...", se()], we = ge.getValue();
            return !$(we) || !C(ge) ? he : [p([i, t(ge, he, Z)]), i];
          }, fe.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function ie(U, Z, se) {
          let fe = U.getValue();
          if (fe.type.startsWith("JSX"))
            switch (fe.type) {
              case "JSXAttribute":
                return k(U, Z, se);
              case "JSXIdentifier":
                return String(fe.name);
              case "JSXNamespacedName":
                return f(":", [se("namespace"), se("name")]);
              case "JSXMemberExpression":
                return f(".", [se("object"), se("property")]);
              case "JSXSpreadAttribute":
                return Y(U, Z, se);
              case "JSXSpreadChild":
                return Y(U, Z, se);
              case "JSXExpressionContainer":
                return M(U, Z, se);
              case "JSXFragment":
              case "JSXElement":
                return V(U, Z, se);
              case "JSXOpeningElement":
                return R(U, Z, se);
              case "JSXClosingElement":
                return L(U, Z, se);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return Q(U, Z);
              case "JSXEmptyExpression":
                return j(U, Z);
              case "JSXText":
                throw new Error("JSXText should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(fe.type)}.`);
            }
        }
        var ee = ` 
\r	`, ce = new RegExp("([" + ee + "]+)"), W = new RegExp("[^" + ee + "]"), K = (U) => U.replace(new RegExp("(?:^" + ce.source + "|" + ce.source + "$)"), "");
        function de(U) {
          if (U.children.length === 0)
            return true;
          if (U.children.length > 1)
            return false;
          let Z = U.children[0];
          return Z.type === "JSXText" && !ue(Z);
        }
        function ue(U) {
          return U.type === "JSXText" && (W.test(N(U)) || !/\n/.test(N(U)));
        }
        function Fe(U) {
          return U.type === "JSXExpressionContainer" && I(U.expression) && U.expression.value === " " && !$(U.expression);
        }
        function z(U) {
          let Z = U.getValue(), se = U.getParentNode();
          if (!se || !Z || !E(Z) || !E(se))
            return false;
          let fe = se.children.indexOf(Z), ge = null;
          for (let he = fe; he > 0; he--) {
            let we = se.children[he - 1];
            if (!(we.type === "JSXText" && !ue(we))) {
              ge = we;
              break;
            }
          }
          return ge && ge.type === "JSXExpressionContainer" && ge.expression.type === "JSXEmptyExpression" && T(ge.expression);
        }
        r.exports = { hasJsxIgnoreComment: z, printJsx: ie };
      } }), ct = te({ "src/language-js/print/misc.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { indent: s, join: a, line: n } } = qe(), { isFlowAnnotationComment: u } = Ke();
        function i(_) {
          let w = _.getValue();
          return !w.optional || w.type === "Identifier" && w === _.getParentNode().key ? "" : w.type === "OptionalCallExpression" || w.type === "OptionalMemberExpression" && w.computed ? "?." : "?";
        }
        function l(_) {
          return _.getValue().definite || _.match(void 0, (w, E) => E === "id" && w.type === "VariableDeclarator" && w.definite) ? "!" : "";
        }
        function p(_, w, E) {
          let N = _.getValue();
          return N.typeArguments ? E("typeArguments") : N.typeParameters ? E("typeParameters") : "";
        }
        function y(_, w, E) {
          let N = _.getValue();
          if (!N.typeAnnotation)
            return "";
          let x = _.getParentNode(), I = x.type === "DeclareFunction" && x.id === N;
          return u(w.originalText, N.typeAnnotation) ? [" /*: ", E("typeAnnotation"), " */"] : [I ? "" : ": ", E("typeAnnotation")];
        }
        function h(_, w, E) {
          return ["::", E("callee")];
        }
        function g(_, w, E) {
          let N = _.getValue();
          return t(N.modifiers) ? [a(" ", _.map(E, "modifiers")), " "] : "";
        }
        function c(_, w, E) {
          return _.type === "EmptyStatement" ? ";" : _.type === "BlockStatement" || E ? [" ", w] : s([n, w]);
        }
        function f(_, w, E) {
          return ["...", E("argument"), y(_, w, E)];
        }
        function F(_, w) {
          let E = _.slice(1, -1);
          if (E.includes('"') || E.includes("'"))
            return _;
          let N = w.singleQuote ? "'" : '"';
          return N + E + N;
        }
        r.exports = { printOptionalToken: i, printDefiniteToken: l, printFunctionTypeParameters: p, printBindExpressionCallee: h, printTypeScriptModifiers: g, printTypeAnnotation: y, printRestSpread: f, adjustClause: c, printDirective: F };
      } }), er = te({ "src/language-js/print/array.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, hardline: n, group: u, indent: i, ifBreak: l, fill: p } } = qe(), { getLast: y, hasNewline: h } = Ue(), { shouldPrintComma: g, hasComment: c, CommentCheckFlags: f, isNextLineEmpty: F, isNumericLiteral: _, isSignedNumericLiteral: w } = Ke(), { locStart: E } = ut(), { printOptionalToken: N, printTypeAnnotation: x } = ct();
        function I(T, m, C) {
          let o = T.getValue(), d = [], v = o.type === "TupleExpression" ? "#[" : "[", S = "]";
          if (o.elements.length === 0)
            c(o, f.Dangling) ? d.push(u([v, t(T, m), a, S])) : d.push(v, S);
          else {
            let b = y(o.elements), B = !(b && b.type === "RestElement"), k = b === null, M = Symbol("array"), R = !m.__inJestEach && o.elements.length > 1 && o.elements.every((L, Q, V) => {
              let j = L && L.type;
              if (j !== "ArrayExpression" && j !== "ObjectExpression")
                return false;
              let Y = V[Q + 1];
              if (Y && j !== Y.type)
                return false;
              let ie = j === "ArrayExpression" ? "elements" : "properties";
              return L[ie] && L[ie].length > 1;
            }), q = P(o, m), J = B ? k ? "," : g(m) ? q ? l(",", "", { groupId: M }) : l(",") : "" : "";
            d.push(u([v, i([a, q ? D(T, m, C, J) : [$(T, m, "elements", C), J], t(T, m, true)]), a, S], { shouldBreak: R, id: M }));
          }
          return d.push(N(T), x(T, m, C)), d;
        }
        function P(T, m) {
          return T.elements.length > 1 && T.elements.every((C) => C && (_(C) || w(C) && !c(C.argument)) && !c(C, f.Trailing | f.Line, (o) => !h(m.originalText, E(o), { backwards: true })));
        }
        function $(T, m, C, o) {
          let d = [], v = [];
          return T.each((S) => {
            d.push(v, u(o())), v = [",", s], S.getValue() && F(S.getValue(), m) && v.push(a);
          }, C), d;
        }
        function D(T, m, C, o) {
          let d = [];
          return T.each((v, S, b) => {
            let B = S === b.length - 1;
            d.push([C(), B ? o : ","]), B || d.push(F(v.getValue(), m) ? [n, n] : c(b[S + 1], f.Leading | f.Line) ? n : s);
          }, "elements"), p(d);
        }
        r.exports = { printArray: I, printArrayItems: $, isConciselyPrintedArray: P };
      } }), Ao = te({ "src/language-js/print/call-arguments.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { getLast: s, getPenultimate: a } = Ue(), { getFunctionParameters: n, hasComment: u, CommentCheckFlags: i, isFunctionCompositionArgs: l, isJsxNode: p, isLongCurriedCallExpression: y, shouldPrintComma: h, getCallArguments: g, iterateCallArgumentsPath: c, isNextLineEmpty: f, isCallExpression: F, isStringLiteral: _, isObjectProperty: w, isTSTypeExpression: E } = Ke(), { builders: { line: N, hardline: x, softline: I, group: P, indent: $, conditionalGroup: D, ifBreak: T, breakParent: m }, utils: { willBreak: C } } = qe(), { ArgExpansionBailout: o } = Qt(), { isConciselyPrintedArray: d } = er();
        function v(q, J, L) {
          let Q = q.getValue(), V = Q.type === "ImportExpression", j = g(Q);
          if (j.length === 0)
            return ["(", t(q, J, true), ")"];
          if (k(j))
            return ["(", L(["arguments", 0]), ", ", L(["arguments", 1]), ")"];
          let Y = false, ie = false, ee = j.length - 1, ce = [];
          c(q, (z, U) => {
            let Z = z.getNode(), se = [L()];
            U === ee || (f(Z, J) ? (U === 0 && (ie = true), Y = true, se.push(",", x, x)) : se.push(",", N)), ce.push(se);
          });
          let W = !(V || Q.callee && Q.callee.type === "Import") && h(J, "all") ? "," : "";
          function K() {
            return P(["(", $([N, ...ce]), W, N, ")"], { shouldBreak: true });
          }
          if (Y || q.getParentNode().type !== "Decorator" && l(j))
            return K();
          let de = B(j), ue = b(j, J);
          if (de || ue) {
            if (de ? ce.slice(1).some(C) : ce.slice(0, -1).some(C))
              return K();
            let z = [];
            try {
              q.try(() => {
                c(q, (U, Z) => {
                  de && Z === 0 && (z = [[L([], { expandFirstArg: true }), ce.length > 1 ? "," : "", ie ? x : N, ie ? x : ""], ...ce.slice(1)]), ue && Z === ee && (z = [...ce.slice(0, -1), L([], { expandLastArg: true })]);
                });
              });
            } catch (U) {
              if (U instanceof o)
                return K();
              throw U;
            }
            return [ce.some(C) ? m : "", D([["(", ...z, ")"], de ? ["(", P(z[0], { shouldBreak: true }), ...z.slice(1), ")"] : ["(", ...ce.slice(0, -1), P(s(z), { shouldBreak: true }), ")"], K()])];
          }
          let Fe = ["(", $([I, ...ce]), T(W), I, ")"];
          return y(q) ? Fe : P(Fe, { shouldBreak: ce.some(C) || Y });
        }
        function S(q) {
          let J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          return q.type === "ObjectExpression" && (q.properties.length > 0 || u(q)) || q.type === "ArrayExpression" && (q.elements.length > 0 || u(q)) || q.type === "TSTypeAssertion" && S(q.expression) || E(q) && S(q.expression) || q.type === "FunctionExpression" || q.type === "ArrowFunctionExpression" && (!q.returnType || !q.returnType.typeAnnotation || q.returnType.typeAnnotation.type !== "TSTypeReference" || M(q.body)) && (q.body.type === "BlockStatement" || q.body.type === "ArrowFunctionExpression" && S(q.body, true) || q.body.type === "ObjectExpression" || q.body.type === "ArrayExpression" || !J && (F(q.body) || q.body.type === "ConditionalExpression") || p(q.body)) || q.type === "DoExpression" || q.type === "ModuleExpression";
        }
        function b(q, J) {
          let L = s(q), Q = a(q);
          return !u(L, i.Leading) && !u(L, i.Trailing) && S(L) && (!Q || Q.type !== L.type) && (q.length !== 2 || Q.type !== "ArrowFunctionExpression" || L.type !== "ArrayExpression") && !(q.length > 1 && L.type === "ArrayExpression" && d(L, J));
        }
        function B(q) {
          if (q.length !== 2)
            return false;
          let [J, L] = q;
          return J.type === "ModuleExpression" && R(L) ? true : !u(J) && (J.type === "FunctionExpression" || J.type === "ArrowFunctionExpression" && J.body.type === "BlockStatement") && L.type !== "FunctionExpression" && L.type !== "ArrowFunctionExpression" && L.type !== "ConditionalExpression" && !S(L);
        }
        function k(q) {
          return q.length === 2 && q[0].type === "ArrowFunctionExpression" && n(q[0]).length === 0 && q[0].body.type === "BlockStatement" && q[1].type === "ArrayExpression" && !q.some((J) => u(J));
        }
        function M(q) {
          return q.type === "BlockStatement" && (q.body.some((J) => J.type !== "EmptyStatement") || u(q, i.Dangling));
        }
        function R(q) {
          return q.type === "ObjectExpression" && q.properties.length === 1 && w(q.properties[0]) && q.properties[0].key.type === "Identifier" && q.properties[0].key.name === "type" && _(q.properties[0].value) && q.properties[0].value.value === "module";
        }
        r.exports = v;
      } }), So = te({ "src/language-js/print/member.js"(e, r) {
        ne();
        var { builders: { softline: t, group: s, indent: a, label: n } } = qe(), { isNumericLiteral: u, isMemberExpression: i, isCallExpression: l } = Ke(), { printOptionalToken: p } = ct();
        function y(g, c, f) {
          let F = g.getValue(), _ = g.getParentNode(), w, E = 0;
          do
            w = g.getParentNode(E), E++;
          while (w && (i(w) || w.type === "TSNonNullExpression"));
          let N = f("object"), x = h(g, c, f), I = w && (w.type === "NewExpression" || w.type === "BindExpression" || w.type === "AssignmentExpression" && w.left.type !== "Identifier") || F.computed || F.object.type === "Identifier" && F.property.type === "Identifier" && !i(_) || (_.type === "AssignmentExpression" || _.type === "VariableDeclarator") && (l(F.object) && F.object.arguments.length > 0 || F.object.type === "TSNonNullExpression" && l(F.object.expression) && F.object.expression.arguments.length > 0 || N.label === "member-chain");
          return n(N.label === "member-chain" ? "member-chain" : "member", [N, I ? x : s(a([t, x]))]);
        }
        function h(g, c, f) {
          let F = f("property"), _ = g.getValue(), w = p(g);
          return _.computed ? !_.property || u(_.property) ? [w, "[", F, "]"] : s([w, "[", a([t, F]), t, "]"]) : [w, ".", F];
        }
        r.exports = { printMemberExpression: y, printMemberLookup: h };
      } }), md = te({ "src/language-js/print/member-chain.js"(e, r) {
        ne();
        var { printComments: t } = et(), { getLast: s, isNextLineEmptyAfterIndex: a, getNextNonSpaceNonCommentCharacterIndex: n } = Ue(), u = qt(), { isCallExpression: i, isMemberExpression: l, isFunctionOrArrowExpression: p, isLongCurriedCallExpression: y, isMemberish: h, isNumericLiteral: g, isSimpleCallArgument: c, hasComment: f, CommentCheckFlags: F, isNextLineEmpty: _ } = Ke(), { locEnd: w } = ut(), { builders: { join: E, hardline: N, group: x, indent: I, conditionalGroup: P, breakParent: $, label: D }, utils: { willBreak: T } } = qe(), m = Ao(), { printMemberLookup: C } = So(), { printOptionalToken: o, printFunctionTypeParameters: d, printBindExpressionCallee: v } = ct();
        function S(b, B, k) {
          let M = b.getParentNode(), R = !M || M.type === "ExpressionStatement", q = [];
          function J(Ne) {
            let { originalText: Pe } = B, oe = n(Pe, Ne, w);
            return Pe.charAt(oe) === ")" ? oe !== false && a(Pe, oe + 1) : _(Ne, B);
          }
          function L(Ne) {
            let Pe = Ne.getValue();
            i(Pe) && (h(Pe.callee) || i(Pe.callee)) ? (q.unshift({ node: Pe, printed: [t(Ne, [o(Ne), d(Ne, B, k), m(Ne, B, k)], B), J(Pe) ? N : ""] }), Ne.call((oe) => L(oe), "callee")) : h(Pe) ? (q.unshift({ node: Pe, needsParens: u(Ne, B), printed: t(Ne, l(Pe) ? C(Ne, B, k) : v(Ne, B, k), B) }), Ne.call((oe) => L(oe), "object")) : Pe.type === "TSNonNullExpression" ? (q.unshift({ node: Pe, printed: t(Ne, "!", B) }), Ne.call((oe) => L(oe), "expression")) : q.unshift({ node: Pe, printed: k() });
          }
          let Q = b.getValue();
          q.unshift({ node: Q, printed: [o(b), d(b, B, k), m(b, B, k)] }), Q.callee && b.call((Ne) => L(Ne), "callee");
          let V = [], j = [q[0]], Y = 1;
          for (; Y < q.length && (q[Y].node.type === "TSNonNullExpression" || i(q[Y].node) || l(q[Y].node) && q[Y].node.computed && g(q[Y].node.property)); ++Y)
            j.push(q[Y]);
          if (!i(q[0].node))
            for (; Y + 1 < q.length && h(q[Y].node) && h(q[Y + 1].node); ++Y)
              j.push(q[Y]);
          V.push(j), j = [];
          let ie = false;
          for (; Y < q.length; ++Y) {
            if (ie && h(q[Y].node)) {
              if (q[Y].node.computed && g(q[Y].node.property)) {
                j.push(q[Y]);
                continue;
              }
              V.push(j), j = [], ie = false;
            }
            (i(q[Y].node) || q[Y].node.type === "ImportExpression") && (ie = true), j.push(q[Y]), f(q[Y].node, F.Trailing) && (V.push(j), j = [], ie = false);
          }
          j.length > 0 && V.push(j);
          function ee(Ne) {
            return /^[A-Z]|^[$_]+$/.test(Ne);
          }
          function ce(Ne) {
            return Ne.length <= B.tabWidth;
          }
          function W(Ne) {
            let Pe = Ne[1].length > 0 && Ne[1][0].node.computed;
            if (Ne[0].length === 1) {
              let H = Ne[0][0].node;
              return H.type === "ThisExpression" || H.type === "Identifier" && (ee(H.name) || R && ce(H.name) || Pe);
            }
            let oe = s(Ne[0]).node;
            return l(oe) && oe.property.type === "Identifier" && (ee(oe.property.name) || Pe);
          }
          let K = V.length >= 2 && !f(V[1][0].node) && W(V);
          function de(Ne) {
            let Pe = Ne.map((oe) => oe.printed);
            return Ne.length > 0 && s(Ne).needsParens ? ["(", ...Pe, ")"] : Pe;
          }
          function ue(Ne) {
            return Ne.length === 0 ? "" : I(x([N, E(N, Ne.map(de))]));
          }
          let Fe = V.map(de), z = Fe, U = K ? 3 : 2, Z = V.flat(), se = Z.slice(1, -1).some((Ne) => f(Ne.node, F.Leading)) || Z.slice(0, -1).some((Ne) => f(Ne.node, F.Trailing)) || V[U] && f(V[U][0].node, F.Leading);
          if (V.length <= U && !se)
            return y(b) ? z : x(z);
          let fe = s(V[K ? 1 : 0]).node, ge = !i(fe) && J(fe), he = [de(V[0]), K ? V.slice(1, 2).map(de) : "", ge ? N : "", ue(V.slice(K ? 2 : 1))], we = q.map((Ne) => {
            let { node: Pe } = Ne;
            return Pe;
          }).filter(i);
          function ke() {
            let Ne = s(s(V)).node, Pe = s(Fe);
            return i(Ne) && T(Pe) && we.slice(0, -1).some((oe) => oe.arguments.some(p));
          }
          let Re;
          return se || we.length > 2 && we.some((Ne) => !Ne.arguments.every((Pe) => c(Pe, 0))) || Fe.slice(0, -1).some(T) || ke() ? Re = x(he) : Re = [T(z) || ge ? $ : "", P([z, he])], D("member-chain", Re);
        }
        r.exports = S;
      } }), xo = te({ "src/language-js/print/call-expression.js"(e, r) {
        ne();
        var { builders: { join: t, group: s } } = qe(), a = qt(), { getCallArguments: n, hasFlowAnnotationComment: u, isCallExpression: i, isMemberish: l, isStringLiteral: p, isTemplateOnItsOwnLine: y, isTestCall: h, iterateCallArgumentsPath: g } = Ke(), c = md(), f = Ao(), { printOptionalToken: F, printFunctionTypeParameters: _ } = ct();
        function w(N, x, I) {
          let P = N.getValue(), $ = N.getParentNode(), D = P.type === "NewExpression", T = P.type === "ImportExpression", m = F(N), C = n(P);
          if (C.length > 0 && (!T && !D && E(P, $) || C.length === 1 && y(C[0], x.originalText) || !D && h(P, $))) {
            let v = [];
            return g(N, () => {
              v.push(I());
            }), [D ? "new " : "", I("callee"), m, _(N, x, I), "(", t(", ", v), ")"];
          }
          let o = (x.parser === "babel" || x.parser === "babel-flow") && P.callee && P.callee.type === "Identifier" && u(P.callee.trailingComments);
          if (o && (P.callee.trailingComments[0].printed = true), !T && !D && l(P.callee) && !N.call((v) => a(v, x), "callee"))
            return c(N, x, I);
          let d = [D ? "new " : "", T ? "import" : I("callee"), m, o ? `/*:: ${P.callee.trailingComments[0].value.slice(2).trim()} */` : "", _(N, x, I), f(N, x, I)];
          return T || i(P.callee) ? s(d) : d;
        }
        function E(N, x) {
          if (N.callee.type !== "Identifier")
            return false;
          if (N.callee.name === "require")
            return true;
          if (N.callee.name === "define") {
            let I = n(N);
            return x.type === "ExpressionStatement" && (I.length === 1 || I.length === 2 && I[0].type === "ArrayExpression" || I.length === 3 && p(I[0]) && I[1].type === "ArrayExpression");
          }
          return false;
        }
        r.exports = { printCallExpression: w };
      } }), tr = te({ "src/language-js/print/assignment.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, getStringWidth: s } = Ue(), { builders: { line: a, group: n, indent: u, indentIfBreak: i, lineSuffixBoundary: l }, utils: { cleanDoc: p, willBreak: y, canBreak: h } } = qe(), { hasLeadingOwnLineComment: g, isBinaryish: c, isStringLiteral: f, isLiteral: F, isNumericLiteral: _, isCallExpression: w, isMemberExpression: E, getCallArguments: N, rawText: x, hasComment: I, isSignedNumericLiteral: P, isObjectProperty: $ } = Ke(), { shouldInlineLogicalExpression: D } = ru(), { printCallExpression: T } = xo();
        function m(W, K, de, ue, Fe, z) {
          let U = d(W, K, de, ue, z), Z = de(z, { assignmentLayout: U });
          switch (U) {
            case "break-after-operator":
              return n([n(ue), Fe, n(u([a, Z]))]);
            case "never-break-after-operator":
              return n([n(ue), Fe, " ", Z]);
            case "fluid": {
              let se = Symbol("assignment");
              return n([n(ue), Fe, n(u(a), { id: se }), l, i(Z, { groupId: se })]);
            }
            case "break-lhs":
              return n([ue, Fe, " ", n(Z)]);
            case "chain":
              return [n(ue), Fe, a, Z];
            case "chain-tail":
              return [n(ue), Fe, u([a, Z])];
            case "chain-tail-arrow-chain":
              return [n(ue), Fe, Z];
            case "only-left":
              return ue;
          }
        }
        function C(W, K, de) {
          let ue = W.getValue();
          return m(W, K, de, de("left"), [" ", ue.operator], "right");
        }
        function o(W, K, de) {
          return m(W, K, de, de("id"), " =", "init");
        }
        function d(W, K, de, ue, Fe) {
          let z = W.getValue(), U = z[Fe];
          if (!U)
            return "only-left";
          let Z = !b(U);
          if (W.match(b, B, (he) => !Z || he.type !== "ExpressionStatement" && he.type !== "VariableDeclaration"))
            return Z ? U.type === "ArrowFunctionExpression" && U.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!Z && b(U.right) || g(K.originalText, U))
            return "break-after-operator";
          if (U.type === "CallExpression" && U.callee.name === "require" || K.parser === "json5" || K.parser === "json")
            return "never-break-after-operator";
          if (S(z) || k(z) || q(z) || J(z) && h(ue))
            return "break-lhs";
          let ge = ie(z, ue, K);
          return W.call(() => v(W, K, de, ge), Fe) ? "break-after-operator" : ge || U.type === "TemplateLiteral" || U.type === "TaggedTemplateExpression" || U.type === "BooleanLiteral" || _(U) || U.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function v(W, K, de, ue) {
          let Fe = W.getValue();
          if (c(Fe) && !D(Fe))
            return true;
          switch (Fe.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return true;
            case "ConditionalExpression": {
              let { test: Z } = Fe;
              return c(Z) && !D(Z);
            }
            case "ClassExpression":
              return t(Fe.decorators);
          }
          if (ue)
            return false;
          let z = Fe, U = [];
          for (; ; )
            if (z.type === "UnaryExpression")
              z = z.argument, U.push("argument");
            else if (z.type === "TSNonNullExpression")
              z = z.expression, U.push("expression");
            else
              break;
          return !!(f(z) || W.call(() => V(W, K, de), ...U));
        }
        function S(W) {
          if (B(W)) {
            let K = W.left || W.id;
            return K.type === "ObjectPattern" && K.properties.length > 2 && K.properties.some((de) => $(de) && (!de.shorthand || de.value && de.value.type === "AssignmentPattern"));
          }
          return false;
        }
        function b(W) {
          return W.type === "AssignmentExpression";
        }
        function B(W) {
          return b(W) || W.type === "VariableDeclarator";
        }
        function k(W) {
          let K = M(W);
          if (t(K)) {
            let de = W.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (K.length > 1 && K.some((ue) => ue[de] || ue.default))
              return true;
          }
          return false;
        }
        function M(W) {
          return R(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function R(W) {
          return W.type === "TSTypeAliasDeclaration" || W.type === "TypeAlias";
        }
        function q(W) {
          if (W.type !== "VariableDeclarator")
            return false;
          let { typeAnnotation: K } = W.id;
          if (!K || !K.typeAnnotation)
            return false;
          let de = L(K.typeAnnotation);
          return t(de) && de.length > 1 && de.some((ue) => t(L(ue)) || ue.type === "TSConditionalType");
        }
        function J(W) {
          return W.type === "VariableDeclarator" && W.init && W.init.type === "ArrowFunctionExpression";
        }
        function L(W) {
          return Q(W) && W.typeParameters && W.typeParameters.params ? W.typeParameters.params : null;
        }
        function Q(W) {
          return W.type === "TSTypeReference" || W.type === "GenericTypeAnnotation";
        }
        function V(W, K, de) {
          let ue = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, Fe = W.getValue(), z = () => V(W, K, de, true);
          if (Fe.type === "TSNonNullExpression")
            return W.call(z, "expression");
          if (w(Fe)) {
            if (T(W, K, de).label === "member-chain")
              return false;
            let Z = N(Fe);
            return !(Z.length === 0 || Z.length === 1 && Y(Z[0], K)) || ee(Fe, de) ? false : W.call(z, "callee");
          }
          return E(Fe) ? W.call(z, "object") : ue && (Fe.type === "Identifier" || Fe.type === "ThisExpression");
        }
        var j = 0.25;
        function Y(W, K) {
          let { printWidth: de } = K;
          if (I(W))
            return false;
          let ue = de * j;
          if (W.type === "ThisExpression" || W.type === "Identifier" && W.name.length <= ue || P(W) && !I(W.argument))
            return true;
          let Fe = W.type === "Literal" && "regex" in W && W.regex.pattern || W.type === "RegExpLiteral" && W.pattern;
          return Fe ? Fe.length <= ue : f(W) ? x(W).length <= ue : W.type === "TemplateLiteral" ? W.expressions.length === 0 && W.quasis[0].value.raw.length <= ue && !W.quasis[0].value.raw.includes(`
`) : F(W);
        }
        function ie(W, K, de) {
          if (!$(W))
            return false;
          K = p(K);
          let ue = 3;
          return typeof K == "string" && s(K) < de.tabWidth + ue;
        }
        function ee(W, K) {
          let de = ce(W);
          if (t(de)) {
            if (de.length > 1)
              return true;
            if (de.length === 1) {
              let Fe = de[0];
              if (Fe.type === "TSUnionType" || Fe.type === "UnionTypeAnnotation" || Fe.type === "TSIntersectionType" || Fe.type === "IntersectionTypeAnnotation" || Fe.type === "TSTypeLiteral" || Fe.type === "ObjectTypeAnnotation")
                return true;
            }
            let ue = W.typeParameters ? "typeParameters" : "typeArguments";
            if (y(K(ue)))
              return true;
          }
          return false;
        }
        function ce(W) {
          return W.typeParameters && W.typeParameters.params || W.typeArguments && W.typeArguments.params;
        }
        r.exports = { printVariableDeclarator: o, printAssignmentExpression: C, printAssignment: m, isArrowFunctionVariableDeclarator: J };
      } }), Lr = te({ "src/language-js/print/function-parameters.js"(e, r) {
        ne();
        var { getNextNonSpaceNonCommentCharacter: t } = Ue(), { printDanglingComments: s } = et(), { builders: { line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p }, utils: { removeLines: y, willBreak: h } } = qe(), { getFunctionParameters: g, iterateFunctionParametersPath: c, isSimpleType: f, isTestCall: F, isTypeAnnotationAFunction: _, isObjectType: w, isObjectTypePropertyAFunction: E, hasRestParameter: N, shouldPrintComma: x, hasComment: I, isNextLineEmpty: P } = Ke(), { locEnd: $ } = ut(), { ArgExpansionBailout: D } = Qt(), { printFunctionTypeParameters: T } = ct();
        function m(v, S, b, B, k) {
          let M = v.getValue(), R = g(M), q = k ? T(v, b, S) : "";
          if (R.length === 0)
            return [q, "(", s(v, b, true, (ie) => t(b.originalText, ie, $) === ")"), ")"];
          let J = v.getParentNode(), L = F(J), Q = C(M), V = [];
          if (c(v, (ie, ee) => {
            let ce = ee === R.length - 1;
            ce && M.rest && V.push("..."), V.push(S()), !ce && (V.push(","), L || Q ? V.push(" ") : P(R[ee], b) ? V.push(n, n) : V.push(a));
          }), B) {
            if (h(q) || h(V))
              throw new D();
            return i([y(q), "(", y(V), ")"]);
          }
          let j = R.every((ie) => !ie.decorators);
          return Q && j ? [q, "(", ...V, ")"] : L ? [q, "(", ...V, ")"] : (E(J) || _(J) || J.type === "TypeAlias" || J.type === "UnionTypeAnnotation" || J.type === "TSUnionType" || J.type === "IntersectionTypeAnnotation" || J.type === "FunctionTypeAnnotation" && J.returnType === M) && R.length === 1 && R[0].name === null && M.this !== R[0] && R[0].typeAnnotation && M.typeParameters === null && f(R[0].typeAnnotation) && !M.rest ? b.arrowParens === "always" ? ["(", ...V, ")"] : V : [q, "(", l([u, ...V]), p(!N(M) && x(b, "all") ? "," : ""), u, ")"];
        }
        function C(v) {
          if (!v)
            return false;
          let S = g(v);
          if (S.length !== 1)
            return false;
          let [b] = S;
          return !I(b) && (b.type === "ObjectPattern" || b.type === "ArrayPattern" || b.type === "Identifier" && b.typeAnnotation && (b.typeAnnotation.type === "TypeAnnotation" || b.typeAnnotation.type === "TSTypeAnnotation") && w(b.typeAnnotation.typeAnnotation) || b.type === "FunctionTypeParam" && w(b.typeAnnotation) || b.type === "AssignmentPattern" && (b.left.type === "ObjectPattern" || b.left.type === "ArrayPattern") && (b.right.type === "Identifier" || b.right.type === "ObjectExpression" && b.right.properties.length === 0 || b.right.type === "ArrayExpression" && b.right.elements.length === 0));
        }
        function o(v) {
          let S;
          return v.returnType ? (S = v.returnType, S.typeAnnotation && (S = S.typeAnnotation)) : v.typeAnnotation && (S = v.typeAnnotation), S;
        }
        function d(v, S) {
          let b = o(v);
          if (!b)
            return false;
          let B = v.typeParameters && v.typeParameters.params;
          if (B) {
            if (B.length > 1)
              return false;
            if (B.length === 1) {
              let k = B[0];
              if (k.constraint || k.default)
                return false;
            }
          }
          return g(v).length === 1 && (w(b) || h(S));
        }
        r.exports = { printFunctionParameters: m, shouldHugFunctionParameters: C, shouldGroupFunctionParameters: d };
      } }), Or = te({ "src/language-js/print/type-annotation.js"(e, r) {
        ne();
        var { printComments: t, printDanglingComments: s } = et(), { isNonEmptyArray: a } = Ue(), { builders: { group: n, join: u, line: i, softline: l, indent: p, align: y, ifBreak: h } } = qe(), g = qt(), { locStart: c } = ut(), { isSimpleType: f, isObjectType: F, hasLeadingOwnLineComment: _, isObjectTypePropertyAFunction: w, shouldPrintComma: E } = Ke(), { printAssignment: N } = tr(), { printFunctionParameters: x, shouldGroupFunctionParameters: I } = Lr(), { printArrayItems: P } = er();
        function $(b) {
          if (f(b) || F(b))
            return true;
          if (b.type === "UnionTypeAnnotation" || b.type === "TSUnionType") {
            let B = b.types.filter((M) => M.type === "VoidTypeAnnotation" || M.type === "TSVoidKeyword" || M.type === "NullLiteralTypeAnnotation" || M.type === "TSNullKeyword").length, k = b.types.some((M) => M.type === "ObjectTypeAnnotation" || M.type === "TSTypeLiteral" || M.type === "GenericTypeAnnotation" || M.type === "TSTypeReference");
            if (b.types.length - 1 === B && k)
              return true;
          }
          return false;
        }
        function D(b, B, k) {
          let M = B.semi ? ";" : "", R = b.getValue(), q = [];
          return q.push("opaque type ", k("id"), k("typeParameters")), R.supertype && q.push(": ", k("supertype")), R.impltype && q.push(" = ", k("impltype")), q.push(M), q;
        }
        function T(b, B, k) {
          let M = B.semi ? ";" : "", R = b.getValue(), q = [];
          R.declare && q.push("declare "), q.push("type ", k("id"), k("typeParameters"));
          let J = R.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [N(b, B, k, q, " =", J), M];
        }
        function m(b, B, k) {
          let M = b.getValue(), R = b.map(k, "types"), q = [], J = false;
          for (let L = 0; L < R.length; ++L)
            L === 0 ? q.push(R[L]) : F(M.types[L - 1]) && F(M.types[L]) ? q.push([" & ", J ? p(R[L]) : R[L]]) : !F(M.types[L - 1]) && !F(M.types[L]) ? q.push(p([" &", i, R[L]])) : (L > 1 && (J = true), q.push(" & ", L > 1 ? p(R[L]) : R[L]));
          return n(q);
        }
        function C(b, B, k) {
          let M = b.getValue(), R = b.getParentNode(), q = R.type !== "TypeParameterInstantiation" && R.type !== "TSTypeParameterInstantiation" && R.type !== "GenericTypeAnnotation" && R.type !== "TSTypeReference" && R.type !== "TSTypeAssertion" && R.type !== "TupleTypeAnnotation" && R.type !== "TSTupleType" && !(R.type === "FunctionTypeParam" && !R.name && b.getParentNode(1).this !== R) && !((R.type === "TypeAlias" || R.type === "VariableDeclarator" || R.type === "TSTypeAliasDeclaration") && _(B.originalText, M)), J = $(M), L = b.map((j) => {
            let Y = k();
            return J || (Y = y(2, Y)), t(j, Y, B);
          }, "types");
          if (J)
            return u(" | ", L);
          let Q = q && !_(B.originalText, M), V = [h([Q ? i : "", "| "]), u([i, "| "], L)];
          return g(b, B) ? n([p(V), l]) : R.type === "TupleTypeAnnotation" && R.types.length > 1 || R.type === "TSTupleType" && R.elementTypes.length > 1 ? n([p([h(["(", l]), V]), l, h(")")]) : n(q ? p(V) : V);
        }
        function o(b, B, k) {
          let M = b.getValue(), R = [], q = b.getParentNode(0), J = b.getParentNode(1), L = b.getParentNode(2), Q = M.type === "TSFunctionType" || !((q.type === "ObjectTypeProperty" || q.type === "ObjectTypeInternalSlot") && !q.variance && !q.optional && c(q) === c(M) || q.type === "ObjectTypeCallProperty" || L && L.type === "DeclareFunction"), V = Q && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation"), j = V && Q && (q.type === "TypeAnnotation" || q.type === "TSTypeAnnotation") && J.type === "ArrowFunctionExpression";
          w(q) && (Q = true, V = true), j && R.push("(");
          let Y = x(b, k, B, false, true), ie = M.returnType || M.predicate || M.typeAnnotation ? [Q ? " => " : ": ", k("returnType"), k("predicate"), k("typeAnnotation")] : "", ee = I(M, ie);
          return R.push(ee ? n(Y) : Y), ie && R.push(ie), j && R.push(")"), n(R);
        }
        function d(b, B, k) {
          let M = b.getValue(), R = M.type === "TSTupleType" ? "elementTypes" : "types", q = M[R], J = a(q), L = J ? l : "";
          return n(["[", p([L, P(b, B, R, k)]), h(J && E(B, "all") ? "," : ""), s(b, B, true), L, "]"]);
        }
        function v(b, B, k) {
          let M = b.getValue(), R = M.type === "OptionalIndexedAccessType" && M.optional ? "?.[" : "[";
          return [k("objectType"), R, k("indexType"), "]"];
        }
        function S(b, B, k) {
          let M = b.getValue();
          return [M.postfix ? "" : k, B("typeAnnotation"), M.postfix ? k : ""];
        }
        r.exports = { printOpaqueType: D, printTypeAlias: T, printIntersectionType: m, printUnionType: C, printFunctionType: o, printTupleType: d, printIndexedAccessType: v, shouldHugType: $, printJSDocType: S };
      } }), jr = te({ "src/language-js/print/type-parameters.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { join: s, line: a, hardline: n, softline: u, group: i, indent: l, ifBreak: p } } = qe(), { isTestCall: y, hasComment: h, CommentCheckFlags: g, isTSXFile: c, shouldPrintComma: f, getFunctionParameters: F, isObjectType: _, getTypeScriptMappedTypeModifier: w } = Ke(), { createGroupIdMapper: E } = Ue(), { shouldHugType: N } = Or(), { isArrowFunctionVariableDeclarator: x } = tr(), I = E("typeParameters");
        function P(T, m, C, o) {
          let d = T.getValue();
          if (!d[o])
            return "";
          if (!Array.isArray(d[o]))
            return C(o);
          let v = T.getNode(2), S = v && y(v), b = T.match((M) => !(M[o].length === 1 && _(M[o][0])), void 0, (M, R) => R === "typeAnnotation", (M) => M.type === "Identifier", x);
          if (d[o].length === 0 || !b && (S || d[o].length === 1 && (d[o][0].type === "NullableTypeAnnotation" || N(d[o][0]))))
            return ["<", s(", ", T.map(C, o)), $(T, m), ">"];
          let k = d.type === "TSTypeParameterInstantiation" ? "" : F(d).length === 1 && c(m) && !d[o][0].constraint && T.getParentNode().type === "ArrowFunctionExpression" ? "," : f(m, "all") ? p(",") : "";
          return i(["<", l([u, s([",", a], T.map(C, o))]), k, u, ">"], { id: I(d) });
        }
        function $(T, m) {
          let C = T.getValue();
          if (!h(C, g.Dangling))
            return "";
          let o = !h(C, g.Line), d = t(T, m, o);
          return o ? d : [d, n];
        }
        function D(T, m, C) {
          let o = T.getValue(), d = [o.type === "TSTypeParameter" && o.const ? "const " : ""], v = T.getParentNode();
          return v.type === "TSMappedType" ? (v.readonly && d.push(w(v.readonly, "readonly"), " "), d.push("[", C("name")), o.constraint && d.push(" in ", C("constraint")), v.nameType && d.push(" as ", T.callParent(() => C("nameType"))), d.push("]"), d) : (o.variance && d.push(C("variance")), o.in && d.push("in "), o.out && d.push("out "), d.push(C("name")), o.bound && d.push(": ", C("bound")), o.constraint && d.push(" extends ", C("constraint")), o.default && d.push(" = ", C("default")), d);
        }
        r.exports = { printTypeParameter: D, printTypeParameters: P, getTypeParametersGroupId: I };
      } }), rr = te({ "src/language-js/print/property.js"(e, r) {
        ne();
        var { printComments: t } = et(), { printString: s, printNumber: a } = Ue(), { isNumericLiteral: n, isSimpleNumber: u, isStringLiteral: i, isStringPropSafeToUnquote: l, rawText: p } = Ke(), { printAssignment: y } = tr(), h = /* @__PURE__ */ new WeakMap();
        function g(f, F, _) {
          let w = f.getNode();
          if (w.computed)
            return ["[", _("key"), "]"];
          let E = f.getParentNode(), { key: N } = w;
          if (F.quoteProps === "consistent" && !h.has(E)) {
            let x = (E.properties || E.body || E.members).some((I) => !I.computed && I.key && i(I.key) && !l(I, F));
            h.set(E, x);
          }
          if ((N.type === "Identifier" || n(N) && u(a(p(N))) && String(N.value) === a(p(N)) && !(F.parser === "typescript" || F.parser === "babel-ts")) && (F.parser === "json" || F.quoteProps === "consistent" && h.get(E))) {
            let x = s(JSON.stringify(N.type === "Identifier" ? N.name : N.value.toString()), F);
            return f.call((I) => t(I, x, F), "key");
          }
          return l(w, F) && (F.quoteProps === "as-needed" || F.quoteProps === "consistent" && !h.get(E)) ? f.call((x) => t(x, /^\d/.test(N.value) ? a(N.value) : N.value, F), "key") : _("key");
        }
        function c(f, F, _) {
          return f.getValue().shorthand ? _("value") : y(f, F, _, g(f, F, _), ":", "value");
        }
        r.exports = { printProperty: c, printPropertyKey: g };
      } }), qr = te({ "src/language-js/print/function.js"(e, r) {
        ne();
        var t = Zt(), { printDanglingComments: s, printCommentsSeparately: a } = et(), n = lt(), { getNextNonSpaceNonCommentCharacterIndex: u } = Ue(), { builders: { line: i, softline: l, group: p, indent: y, ifBreak: h, hardline: g, join: c, indentIfBreak: f }, utils: { removeLines: F, willBreak: _ } } = qe(), { ArgExpansionBailout: w } = Qt(), { getFunctionParameters: E, hasLeadingOwnLineComment: N, isFlowAnnotationComment: x, isJsxNode: I, isTemplateOnItsOwnLine: P, shouldPrintComma: $, startsWithNoLookaheadToken: D, isBinaryish: T, isLineComment: m, hasComment: C, getComments: o, CommentCheckFlags: d, isCallLikeExpression: v, isCallExpression: S, getCallArguments: b, hasNakedLeftSide: B, getLeftSide: k } = Ke(), { locEnd: M } = ut(), { printFunctionParameters: R, shouldGroupFunctionParameters: q } = Lr(), { printPropertyKey: J } = rr(), { printFunctionTypeParameters: L } = ct();
        function Q(U, Z, se, fe) {
          let ge = U.getValue(), he = false;
          if ((ge.type === "FunctionDeclaration" || ge.type === "FunctionExpression") && fe && fe.expandLastArg) {
            let Pe = U.getParentNode();
            S(Pe) && b(Pe).length > 1 && (he = true);
          }
          let we = [];
          ge.type === "TSDeclareFunction" && ge.declare && we.push("declare "), ge.async && we.push("async "), ge.generator ? we.push("function* ") : we.push("function "), ge.id && we.push(Z("id"));
          let ke = R(U, Z, se, he), Re = K(U, Z, se), Ne = q(ge, Re);
          return we.push(L(U, se, Z), p([Ne ? p(ke) : ke, Re]), ge.body ? " " : "", Z("body")), se.semi && (ge.declare || !ge.body) && we.push(";"), we;
        }
        function V(U, Z, se) {
          let fe = U.getNode(), { kind: ge } = fe, he = fe.value || fe, we = [];
          return !ge || ge === "init" || ge === "method" || ge === "constructor" ? he.async && we.push("async ") : (t.ok(ge === "get" || ge === "set"), we.push(ge, " ")), he.generator && we.push("*"), we.push(J(U, Z, se), fe.optional || fe.key.optional ? "?" : ""), fe === he ? we.push(j(U, Z, se)) : he.type === "FunctionExpression" ? we.push(U.call((ke) => j(ke, Z, se), "value")) : we.push(se("value")), we;
        }
        function j(U, Z, se) {
          let fe = U.getNode(), ge = R(U, se, Z), he = K(U, se, Z), we = q(fe, he), ke = [L(U, Z, se), p([we ? p(ge) : ge, he])];
          return fe.body ? ke.push(" ", se("body")) : ke.push(Z.semi ? ";" : ""), ke;
        }
        function Y(U, Z, se, fe) {
          let ge = U.getValue(), he = [];
          if (ge.async && he.push("async "), W(U, Z))
            he.push(se(["params", 0]));
          else {
            let ke = fe && (fe.expandLastArg || fe.expandFirstArg), Re = K(U, se, Z);
            if (ke) {
              if (_(Re))
                throw new w();
              Re = p(F(Re));
            }
            he.push(p([R(U, se, Z, ke, true), Re]));
          }
          let we = s(U, Z, true, (ke) => {
            let Re = u(Z.originalText, ke, M);
            return Re !== false && Z.originalText.slice(Re, Re + 2) === "=>";
          });
          return we && he.push(" ", we), he;
        }
        function ie(U, Z, se, fe, ge, he) {
          let we = U.getName(), ke = U.getParentNode(), Re = v(ke) && we === "callee", Ne = Boolean(Z && Z.assignmentLayout), Pe = he.body.type !== "BlockStatement" && he.body.type !== "ObjectExpression" && he.body.type !== "SequenceExpression", oe = Re && Pe || Z && Z.assignmentLayout === "chain-tail-arrow-chain", H = Symbol("arrow-chain");
          return he.body.type === "SequenceExpression" && (ge = p(["(", y([l, ge]), l, ")"])), p([p(y([Re || Ne ? l : "", p(c([" =>", i], se), { shouldBreak: fe })]), { id: H, shouldBreak: oe }), " =>", f(Pe ? y([i, ge]) : [" ", ge], { groupId: H }), Re ? h(l, "", { groupId: H }) : ""]);
        }
        function ee(U, Z, se, fe) {
          let ge = U.getValue(), he = [], we = [], ke = false;
          if (function H() {
            let pe = Y(U, Z, se, fe);
            if (he.length === 0)
              he.push(pe);
            else {
              let { leading: X, trailing: le } = a(U, Z);
              he.push([X, pe]), we.unshift(le);
            }
            ke = ke || ge.returnType && E(ge).length > 0 || ge.typeParameters || E(ge).some((X) => X.type !== "Identifier"), ge.body.type !== "ArrowFunctionExpression" || fe && fe.expandLastArg ? we.unshift(se("body", fe)) : (ge = ge.body, U.call(H, "body"));
          }(), he.length > 1)
            return ie(U, fe, he, ke, we, ge);
          let Re = he;
          if (Re.push(" =>"), !N(Z.originalText, ge.body) && (ge.body.type === "ArrayExpression" || ge.body.type === "ObjectExpression" || ge.body.type === "BlockStatement" || I(ge.body) || P(ge.body, Z.originalText) || ge.body.type === "ArrowFunctionExpression" || ge.body.type === "DoExpression"))
            return p([...Re, " ", we]);
          if (ge.body.type === "SequenceExpression")
            return p([...Re, p([" (", y([l, we]), l, ")"])]);
          let Ne = (fe && fe.expandLastArg || U.getParentNode().type === "JSXExpressionContainer") && !C(ge), Pe = fe && fe.expandLastArg && $(Z, "all"), oe = ge.body.type === "ConditionalExpression" && !D(ge.body, (H) => H.type === "ObjectExpression");
          return p([...Re, p([y([i, oe ? h("", "(") : "", we, oe ? h("", ")") : ""]), Ne ? [h(Pe ? "," : ""), l] : ""])]);
        }
        function ce(U) {
          let Z = E(U);
          return Z.length === 1 && !U.typeParameters && !C(U, d.Dangling) && Z[0].type === "Identifier" && !Z[0].typeAnnotation && !C(Z[0]) && !Z[0].optional && !U.predicate && !U.returnType;
        }
        function W(U, Z) {
          if (Z.arrowParens === "always")
            return false;
          if (Z.arrowParens === "avoid") {
            let se = U.getValue();
            return ce(se);
          }
          return false;
        }
        function K(U, Z, se) {
          let fe = U.getValue(), ge = Z("returnType");
          if (fe.returnType && x(se.originalText, fe.returnType))
            return [" /*: ", ge, " */"];
          let he = [ge];
          return fe.returnType && fe.returnType.typeAnnotation && he.unshift(": "), fe.predicate && he.push(fe.returnType ? " " : ": ", Z("predicate")), he;
        }
        function de(U, Z, se) {
          let fe = U.getValue(), ge = Z.semi ? ";" : "", he = [];
          fe.argument && (z(Z, fe.argument) ? he.push([" (", y([g, se("argument")]), g, ")"]) : T(fe.argument) || fe.argument.type === "SequenceExpression" ? he.push(p([h(" (", " "), y([l, se("argument")]), l, h(")")])) : he.push(" ", se("argument")));
          let we = o(fe), ke = n(we), Re = ke && m(ke);
          return Re && he.push(ge), C(fe, d.Dangling) && he.push(" ", s(U, Z, true)), Re || he.push(ge), he;
        }
        function ue(U, Z, se) {
          return ["return", de(U, Z, se)];
        }
        function Fe(U, Z, se) {
          return ["throw", de(U, Z, se)];
        }
        function z(U, Z) {
          if (N(U.originalText, Z))
            return true;
          if (B(Z)) {
            let se = Z, fe;
            for (; fe = k(se); )
              if (se = fe, N(U.originalText, se))
                return true;
          }
          return false;
        }
        r.exports = { printFunction: Q, printArrowFunction: ee, printMethod: V, printReturnStatement: ue, printThrowStatement: Fe, printMethodInternal: j, shouldPrintParamsWithoutParens: W };
      } }), nu = te({ "src/language-js/print/decorators.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, hasNewline: s } = Ue(), { builders: { line: a, hardline: n, join: u, breakParent: i, group: l } } = qe(), { locStart: p, locEnd: y } = ut(), { getParentExportDeclaration: h } = Ke();
        function g(w, E, N) {
          let x = w.getValue();
          return l([u(a, w.map(N, "decorators")), F(x, E) ? n : a]);
        }
        function c(w, E, N) {
          return [u(n, w.map(N, "declaration", "decorators")), n];
        }
        function f(w, E, N) {
          let x = w.getValue(), { decorators: I } = x;
          if (!t(I) || _(w.getParentNode()))
            return;
          let P = x.type === "ClassExpression" || x.type === "ClassDeclaration" || F(x, E);
          return [h(w) ? n : P ? i : "", u(a, w.map(N, "decorators")), a];
        }
        function F(w, E) {
          return w.decorators.some((N) => s(E.originalText, y(N)));
        }
        function _(w) {
          if (w.type !== "ExportDefaultDeclaration" && w.type !== "ExportNamedDeclaration" && w.type !== "DeclareExportDeclaration")
            return false;
          let E = w.declaration && w.declaration.decorators;
          return t(E) && p(w) === p(E[0]);
        }
        r.exports = { printDecorators: f, printClassMemberDecorators: g, printDecoratorsBeforeExport: c, hasDecoratorsBeforeExport: _ };
      } }), nr = te({ "src/language-js/print/class.js"(e, r) {
        ne();
        var { isNonEmptyArray: t, createGroupIdMapper: s } = Ue(), { printComments: a, printDanglingComments: n } = et(), { builders: { join: u, line: i, hardline: l, softline: p, group: y, indent: h, ifBreak: g } } = qe(), { hasComment: c, CommentCheckFlags: f } = Ke(), { getTypeParametersGroupId: F } = jr(), { printMethod: _ } = qr(), { printOptionalToken: w, printTypeAnnotation: E, printDefiniteToken: N } = ct(), { printPropertyKey: x } = rr(), { printAssignment: I } = tr(), { printClassMemberDecorators: P } = nu();
        function $(b, B, k) {
          let M = b.getValue(), R = [];
          M.declare && R.push("declare "), M.abstract && R.push("abstract "), R.push("class");
          let q = M.id && c(M.id, f.Trailing) || M.typeParameters && c(M.typeParameters, f.Trailing) || M.superClass && c(M.superClass) || t(M.extends) || t(M.mixins) || t(M.implements), J = [], L = [];
          if (M.id && J.push(" ", k("id")), J.push(k("typeParameters")), M.superClass) {
            let Q = [d(b, B, k), k("superTypeParameters")], V = b.call((j) => ["extends ", a(j, Q, B)], "superClass");
            q ? L.push(i, y(V)) : L.push(" ", V);
          } else
            L.push(o(b, B, k, "extends"));
          if (L.push(o(b, B, k, "mixins"), o(b, B, k, "implements")), q) {
            let Q;
            C(M) ? Q = [...J, h(L)] : Q = h([...J, L]), R.push(y(Q, { id: D(M) }));
          } else
            R.push(...J, ...L);
          return R.push(" ", k("body")), R;
        }
        var D = s("heritageGroup");
        function T(b) {
          return g(l, "", { groupId: D(b) });
        }
        function m(b) {
          return ["superClass", "extends", "mixins", "implements"].filter((B) => Boolean(b[B])).length > 1;
        }
        function C(b) {
          return b.typeParameters && !c(b.typeParameters, f.Trailing | f.Line) && !m(b);
        }
        function o(b, B, k, M) {
          let R = b.getValue();
          if (!t(R[M]))
            return "";
          let q = n(b, B, true, (J) => {
            let { marker: L } = J;
            return L === M;
          });
          return [C(R) ? g(" ", i, { groupId: F(R.typeParameters) }) : i, q, q && l, M, y(h([i, u([",", i], b.map(k, M))]))];
        }
        function d(b, B, k) {
          let M = k("superClass");
          return b.getParentNode().type === "AssignmentExpression" ? y(g(["(", h([p, M]), p, ")"], M)) : M;
        }
        function v(b, B, k) {
          let M = b.getValue(), R = [];
          return t(M.decorators) && R.push(P(b, B, k)), M.accessibility && R.push(M.accessibility + " "), M.readonly && R.push("readonly "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractMethodDefinition" || M.abstract) && R.push("abstract "), M.override && R.push("override "), R.push(_(b, B, k)), R;
        }
        function S(b, B, k) {
          let M = b.getValue(), R = [], q = B.semi ? ";" : "";
          return t(M.decorators) && R.push(P(b, B, k)), M.accessibility && R.push(M.accessibility + " "), M.declare && R.push("declare "), M.static && R.push("static "), (M.type === "TSAbstractPropertyDefinition" || M.type === "TSAbstractAccessorProperty" || M.abstract) && R.push("abstract "), M.override && R.push("override "), M.readonly && R.push("readonly "), M.variance && R.push(k("variance")), (M.type === "ClassAccessorProperty" || M.type === "AccessorProperty" || M.type === "TSAbstractAccessorProperty") && R.push("accessor "), R.push(x(b, B, k), w(b), N(b), E(b, B, k)), [I(b, B, k, R, " =", "value"), q];
        }
        r.exports = { printClass: $, printClassMethod: v, printClassProperty: S, printHardlineAfterHeritage: T };
      } }), bo = te({ "src/language-js/print/interface.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { join: s, line: a, group: n, indent: u, ifBreak: i } } = qe(), { hasComment: l, identity: p, CommentCheckFlags: y } = Ke(), { getTypeParametersGroupId: h } = jr(), { printTypeScriptModifiers: g } = ct();
        function c(f, F, _) {
          let w = f.getValue(), E = [];
          w.declare && E.push("declare "), w.type === "TSInterfaceDeclaration" && E.push(w.abstract ? "abstract " : "", g(f, F, _)), E.push("interface");
          let N = [], x = [];
          w.type !== "InterfaceTypeAnnotation" && N.push(" ", _("id"), _("typeParameters"));
          let I = w.typeParameters && !l(w.typeParameters, y.Trailing | y.Line);
          return t(w.extends) && x.push(I ? i(" ", a, { groupId: h(w.typeParameters) }) : a, "extends ", (w.extends.length === 1 ? p : u)(s([",", a], f.map(_, "extends")))), w.id && l(w.id, y.Trailing) || t(w.extends) ? I ? E.push(n([...N, u(x)])) : E.push(n(u([...N, ...x]))) : E.push(...N, ...x), E.push(" ", _("body")), n(E);
        }
        r.exports = { printInterface: c };
      } }), To = te({ "src/language-js/print/module.js"(e, r) {
        ne();
        var { isNonEmptyArray: t } = Ue(), { builders: { softline: s, group: a, indent: n, join: u, line: i, ifBreak: l, hardline: p } } = qe(), { printDanglingComments: y } = et(), { hasComment: h, CommentCheckFlags: g, shouldPrintComma: c, needsHardlineAfterDanglingComment: f, isStringLiteral: F, rawText: _ } = Ke(), { locStart: w, hasSameLoc: E } = ut(), { hasDecoratorsBeforeExport: N, printDecoratorsBeforeExport: x } = nu();
        function I(S, b, B) {
          let k = S.getValue(), M = b.semi ? ";" : "", R = [], { importKind: q } = k;
          return R.push("import"), q && q !== "value" && R.push(" ", q), R.push(m(S, b, B), T(S, b, B), o(S, b, B), M), R;
        }
        function P(S, b, B) {
          let k = S.getValue(), M = [];
          N(k) && M.push(x(S, b, B));
          let { type: R, exportKind: q, declaration: J } = k;
          return M.push("export"), (k.default || R === "ExportDefaultDeclaration") && M.push(" default"), h(k, g.Dangling) && (M.push(" ", y(S, b, true)), f(k) && M.push(p)), J ? M.push(" ", B("declaration")) : M.push(q === "type" ? " type" : "", m(S, b, B), T(S, b, B), o(S, b, B)), D(k, b) && M.push(";"), M;
        }
        function $(S, b, B) {
          let k = S.getValue(), M = b.semi ? ";" : "", R = [], { exportKind: q, exported: J } = k;
          return R.push("export"), q === "type" && R.push(" type"), R.push(" *"), J && R.push(" as ", B("exported")), R.push(T(S, b, B), o(S, b, B), M), R;
        }
        function D(S, b) {
          if (!b.semi)
            return false;
          let { type: B, declaration: k } = S, M = S.default || B === "ExportDefaultDeclaration";
          if (!k)
            return true;
          let { type: R } = k;
          return !!(M && R !== "ClassDeclaration" && R !== "FunctionDeclaration" && R !== "TSInterfaceDeclaration" && R !== "DeclareClass" && R !== "DeclareFunction" && R !== "TSDeclareFunction" && R !== "EnumDeclaration");
        }
        function T(S, b, B) {
          let k = S.getValue();
          if (!k.source)
            return "";
          let M = [];
          return C(k, b) || M.push(" from"), M.push(" ", B("source")), M;
        }
        function m(S, b, B) {
          let k = S.getValue();
          if (C(k, b))
            return "";
          let M = [" "];
          if (t(k.specifiers)) {
            let R = [], q = [];
            S.each(() => {
              let J = S.getValue().type;
              if (J === "ExportNamespaceSpecifier" || J === "ExportDefaultSpecifier" || J === "ImportNamespaceSpecifier" || J === "ImportDefaultSpecifier")
                R.push(B());
              else if (J === "ExportSpecifier" || J === "ImportSpecifier")
                q.push(B());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(J)}`);
            }, "specifiers"), M.push(u(", ", R)), q.length > 0 && (R.length > 0 && M.push(", "), q.length > 1 || R.length > 0 || k.specifiers.some((L) => h(L)) ? M.push(a(["{", n([b.bracketSpacing ? i : s, u([",", i], q)]), l(c(b) ? "," : ""), b.bracketSpacing ? i : s, "}"])) : M.push(["{", b.bracketSpacing ? " " : "", ...q, b.bracketSpacing ? " " : "", "}"]));
          } else
            M.push("{}");
          return M;
        }
        function C(S, b) {
          let { type: B, importKind: k, source: M, specifiers: R } = S;
          return B !== "ImportDeclaration" || t(R) || k === "type" ? false : !/{\s*}/.test(b.originalText.slice(w(S), w(M)));
        }
        function o(S, b, B) {
          let k = S.getNode();
          return t(k.assertions) ? [" assert {", b.bracketSpacing ? " " : "", u(", ", S.map(B, "assertions")), b.bracketSpacing ? " " : "", "}"] : "";
        }
        function d(S, b, B) {
          let k = S.getNode(), { type: M } = k, R = [], q = M === "ImportSpecifier" ? k.importKind : k.exportKind;
          q && q !== "value" && R.push(q, " ");
          let J = M.startsWith("Import"), L = J ? "imported" : "local", Q = J ? "local" : "exported", V = k[L], j = k[Q], Y = "", ie = "";
          return M === "ExportNamespaceSpecifier" || M === "ImportNamespaceSpecifier" ? Y = "*" : V && (Y = B(L)), j && !v(k) && (ie = B(Q)), R.push(Y, Y && ie ? " as " : "", ie), R;
        }
        function v(S) {
          if (S.type !== "ImportSpecifier" && S.type !== "ExportSpecifier")
            return false;
          let { local: b, [S.type === "ImportSpecifier" ? "imported" : "exported"]: B } = S;
          if (b.type !== B.type || !E(b, B))
            return false;
          if (F(b))
            return b.value === B.value && _(b) === _(B);
          switch (b.type) {
            case "Identifier":
              return b.name === B.name;
            default:
              return false;
          }
        }
        r.exports = { printImportDeclaration: I, printExportDeclaration: P, printExportAllDeclaration: $, printModuleSpecifier: d };
      } }), uu = te({ "src/language-js/print/object.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { builders: { line: s, softline: a, group: n, indent: u, ifBreak: i, hardline: l } } = qe(), { getLast: p, hasNewlineInRange: y, hasNewline: h, isNonEmptyArray: g } = Ue(), { shouldPrintComma: c, hasComment: f, getComments: F, CommentCheckFlags: _, isNextLineEmpty: w } = Ke(), { locStart: E, locEnd: N } = ut(), { printOptionalToken: x, printTypeAnnotation: I } = ct(), { shouldHugFunctionParameters: P } = Lr(), { shouldHugType: $ } = Or(), { printHardlineAfterHeritage: D } = nr();
        function T(m, C, o) {
          let d = C.semi ? ";" : "", v = m.getValue(), S;
          v.type === "TSTypeLiteral" ? S = "members" : v.type === "TSInterfaceBody" ? S = "body" : S = "properties";
          let b = v.type === "ObjectTypeAnnotation", B = [S];
          b && B.push("indexers", "callProperties", "internalSlots");
          let k = B.map((W) => v[W][0]).sort((W, K) => E(W) - E(K))[0], M = m.getParentNode(0), R = b && M && (M.type === "InterfaceDeclaration" || M.type === "DeclareInterface" || M.type === "DeclareClass") && m.getName() === "body", q = v.type === "TSInterfaceBody" || R || v.type === "ObjectPattern" && M.type !== "FunctionDeclaration" && M.type !== "FunctionExpression" && M.type !== "ArrowFunctionExpression" && M.type !== "ObjectMethod" && M.type !== "ClassMethod" && M.type !== "ClassPrivateMethod" && M.type !== "AssignmentPattern" && M.type !== "CatchClause" && v.properties.some((W) => W.value && (W.value.type === "ObjectPattern" || W.value.type === "ArrayPattern")) || v.type !== "ObjectPattern" && k && y(C.originalText, E(v), E(k)), J = R ? ";" : v.type === "TSInterfaceBody" || v.type === "TSTypeLiteral" ? i(d, ";") : ",", L = v.type === "RecordExpression" ? "#{" : v.exact ? "{|" : "{", Q = v.exact ? "|}" : "}", V = [];
          for (let W of B)
            m.each((K) => {
              let de = K.getValue();
              V.push({ node: de, printed: o(), loc: E(de) });
            }, W);
          B.length > 1 && V.sort((W, K) => W.loc - K.loc);
          let j = [], Y = V.map((W) => {
            let K = [...j, n(W.printed)];
            return j = [J, s], (W.node.type === "TSPropertySignature" || W.node.type === "TSMethodSignature" || W.node.type === "TSConstructSignatureDeclaration") && f(W.node, _.PrettierIgnore) && j.shift(), w(W.node, C) && j.push(l), K;
          });
          if (v.inexact) {
            let W;
            if (f(v, _.Dangling)) {
              let K = f(v, _.Line);
              W = [t(m, C, true), K || h(C.originalText, N(p(F(v)))) ? l : s, "..."];
            } else
              W = ["..."];
            Y.push([...j, ...W]);
          }
          let ie = p(v[S]), ee = !(v.inexact || ie && ie.type === "RestElement" || ie && (ie.type === "TSPropertySignature" || ie.type === "TSCallSignatureDeclaration" || ie.type === "TSMethodSignature" || ie.type === "TSConstructSignatureDeclaration") && f(ie, _.PrettierIgnore)), ce;
          if (Y.length === 0) {
            if (!f(v, _.Dangling))
              return [L, Q, I(m, C, o)];
            ce = n([L, t(m, C), a, Q, x(m), I(m, C, o)]);
          } else
            ce = [R && g(v.properties) ? D(M) : "", L, u([C.bracketSpacing ? s : a, ...Y]), i(ee && (J !== "," || c(C)) ? J : ""), C.bracketSpacing ? s : a, Q, x(m), I(m, C, o)];
          return m.match((W) => W.type === "ObjectPattern" && !W.decorators, (W, K, de) => P(W) && (K === "params" || K === "parameters" || K === "this" || K === "rest") && de === 0) || m.match($, (W, K) => K === "typeAnnotation", (W, K) => K === "typeAnnotation", (W, K, de) => P(W) && (K === "params" || K === "parameters" || K === "this" || K === "rest") && de === 0) || !q && m.match((W) => W.type === "ObjectPattern", (W) => W.type === "AssignmentExpression" || W.type === "VariableDeclarator") ? ce : n(ce, { shouldBreak: q });
        }
        r.exports = { printObject: T };
      } }), dd = te({ "src/language-js/print/flow.js"(e, r) {
        ne();
        var t = Zt(), { printDanglingComments: s } = et(), { printString: a, printNumber: n } = Ue(), { builders: { hardline: u, softline: i, group: l, indent: p } } = qe(), { getParentExportDeclaration: y, isFunctionNotation: h, isGetterOrSetter: g, rawText: c, shouldPrintComma: f } = Ke(), { locStart: F, locEnd: _ } = ut(), { replaceTextEndOfLine: w } = Yt(), { printClass: E } = nr(), { printOpaqueType: N, printTypeAlias: x, printIntersectionType: I, printUnionType: P, printFunctionType: $, printTupleType: D, printIndexedAccessType: T } = Or(), { printInterface: m } = bo(), { printTypeParameter: C, printTypeParameters: o } = jr(), { printExportDeclaration: d, printExportAllDeclaration: v } = To(), { printArrayItems: S } = er(), { printObject: b } = uu(), { printPropertyKey: B } = rr(), { printOptionalToken: k, printTypeAnnotation: M, printRestSpread: R } = ct();
        function q(L, Q, V) {
          let j = L.getValue(), Y = Q.semi ? ";" : "", ie = [];
          switch (j.type) {
            case "DeclareClass":
              return J(L, E(L, Q, V));
            case "DeclareFunction":
              return J(L, ["function ", V("id"), j.predicate ? " " : "", V("predicate"), Y]);
            case "DeclareModule":
              return J(L, ["module ", V("id"), " ", V("body")]);
            case "DeclareModuleExports":
              return J(L, ["module.exports", ": ", V("typeAnnotation"), Y]);
            case "DeclareVariable":
              return J(L, ["var ", V("id"), Y]);
            case "DeclareOpaqueType":
              return J(L, N(L, Q, V));
            case "DeclareInterface":
              return J(L, m(L, Q, V));
            case "DeclareTypeAlias":
              return J(L, x(L, Q, V));
            case "DeclareExportDeclaration":
              return J(L, d(L, Q, V));
            case "DeclareExportAllDeclaration":
              return J(L, v(L, Q, V));
            case "OpaqueType":
              return N(L, Q, V);
            case "TypeAlias":
              return x(L, Q, V);
            case "IntersectionTypeAnnotation":
              return I(L, Q, V);
            case "UnionTypeAnnotation":
              return P(L, Q, V);
            case "FunctionTypeAnnotation":
              return $(L, Q, V);
            case "TupleTypeAnnotation":
              return D(L, Q, V);
            case "GenericTypeAnnotation":
              return [V("id"), o(L, Q, V, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return T(L, Q, V);
            case "TypeAnnotation":
              return V("typeAnnotation");
            case "TypeParameter":
              return C(L, Q, V);
            case "TypeofTypeAnnotation":
              return ["typeof ", V("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [V("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(j.value);
            case "EnumDeclaration":
              return ["enum ", V("id"), " ", V("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (j.type === "EnumSymbolBody" || j.explicitType) {
                let ee = null;
                switch (j.type) {
                  case "EnumBooleanBody":
                    ee = "boolean";
                    break;
                  case "EnumNumberBody":
                    ee = "number";
                    break;
                  case "EnumStringBody":
                    ee = "string";
                    break;
                  case "EnumSymbolBody":
                    ee = "symbol";
                    break;
                }
                ie.push("of ", ee, " ");
              }
              if (j.members.length === 0 && !j.hasUnknownMembers)
                ie.push(l(["{", s(L, Q), i, "}"]));
              else {
                let ee = j.members.length > 0 ? [u, S(L, Q, "members", V), j.hasUnknownMembers || f(Q) ? "," : ""] : [];
                ie.push(l(["{", p([...ee, ...j.hasUnknownMembers ? [u, "..."] : []]), s(L, Q, true), u, "}"]));
              }
              return ie;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [V("id"), " = ", typeof j.init == "object" ? V("init") : String(j.init)];
            case "EnumDefaultedMember":
              return V("id");
            case "FunctionTypeParam": {
              let ee = j.name ? V("name") : L.getParentNode().this === j ? "this" : "";
              return [ee, k(L), ee ? ": " : "", V("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return m(L, Q, V);
            case "ClassImplements":
            case "InterfaceExtends":
              return [V("id"), V("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", V("typeAnnotation")];
            case "Variance": {
              let { kind: ee } = j;
              return t.ok(ee === "plus" || ee === "minus"), ee === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return j.static && ie.push("static "), ie.push(V("value")), ie;
            case "ObjectTypeIndexer":
              return [j.static ? "static " : "", j.variance ? V("variance") : "", "[", V("id"), j.id ? ": " : "", V("key"), "]: ", V("value")];
            case "ObjectTypeProperty": {
              let ee = "";
              return j.proto ? ee = "proto " : j.static && (ee = "static "), [ee, g(j) ? j.kind + " " : "", j.variance ? V("variance") : "", B(L, Q, V), k(L), h(j) ? "" : ": ", V("value")];
            }
            case "ObjectTypeAnnotation":
              return b(L, Q, V);
            case "ObjectTypeInternalSlot":
              return [j.static ? "static " : "", "[[", V("id"), "]]", k(L), j.method ? "" : ": ", V("value")];
            case "ObjectTypeSpreadProperty":
              return R(L, Q, V);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [V("qualification"), ".", V("id")];
            case "StringLiteralTypeAnnotation":
              return w(a(c(j), Q));
            case "NumberLiteralTypeAnnotation":
              t.strictEqual(typeof j.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return j.extra ? n(j.extra.raw) : n(j.raw);
            case "TypeCastExpression":
              return ["(", V("expression"), M(L, Q, V), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let ee = o(L, Q, V, "params");
              if (Q.parser === "flow") {
                let ce = F(j), W = _(j), K = Q.originalText.lastIndexOf("/*", ce), de = Q.originalText.indexOf("*/", W);
                if (K !== -1 && de !== -1) {
                  let ue = Q.originalText.slice(K + 2, de).trim();
                  if (ue.startsWith("::") && !ue.includes("/*") && !ue.includes("*/"))
                    return ["/*:: ", ee, " */"];
                }
              }
              return ee;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", V("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(j.type));
          }
        }
        function J(L, Q) {
          let V = y(L);
          return V ? (t.strictEqual(V.type, "DeclareExportDeclaration"), Q) : ["declare ", Q];
        }
        r.exports = { printFlow: q };
      } }), gd = te({ "src/language-js/utils/is-ts-keyword-type.js"(e, r) {
        ne();
        function t(s) {
          let { type: a } = s;
          return a.startsWith("TS") && a.endsWith("Keyword");
        }
        r.exports = t;
      } }), Bo = te({ "src/language-js/print/ternary.js"(e, r) {
        ne();
        var { hasNewlineInRange: t } = Ue(), { isJsxNode: s, getComments: a, isCallExpression: n, isMemberExpression: u, isTSTypeExpression: i } = Ke(), { locStart: l, locEnd: p } = ut(), y = Pt(), { builders: { line: h, softline: g, group: c, indent: f, align: F, ifBreak: _, dedent: w, breakParent: E } } = qe();
        function N(D) {
          let T = [D];
          for (let m = 0; m < T.length; m++) {
            let C = T[m];
            for (let o of ["test", "consequent", "alternate"]) {
              let d = C[o];
              if (s(d))
                return true;
              d.type === "ConditionalExpression" && T.push(d);
            }
          }
          return false;
        }
        function x(D, T, m) {
          let C = D.getValue(), o = C.type === "ConditionalExpression", d = o ? "alternate" : "falseType", v = D.getParentNode(), S = o ? m("test") : [m("checkType"), " ", "extends", " ", m("extendsType")];
          return v.type === C.type && v[d] === C ? F(2, S) : S;
        }
        var I = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function P(D) {
          let T = D.getValue();
          if (T.type !== "ConditionalExpression")
            return false;
          let m, C = T;
          for (let o = 0; !m; o++) {
            let d = D.getParentNode(o);
            if (n(d) && d.callee === C || u(d) && d.object === C || d.type === "TSNonNullExpression" && d.expression === C) {
              C = d;
              continue;
            }
            d.type === "NewExpression" && d.callee === C || i(d) && d.expression === C ? (m = D.getParentNode(o + 1), C = d) : m = d;
          }
          return C === T ? false : m[I.get(m.type)] === C;
        }
        function $(D, T, m) {
          let C = D.getValue(), o = C.type === "ConditionalExpression", d = o ? "consequent" : "trueType", v = o ? "alternate" : "falseType", S = o ? ["test"] : ["checkType", "extendsType"], b = C[d], B = C[v], k = [], M = false, R = D.getParentNode(), q = R.type === C.type && S.some((ue) => R[ue] === C), J = R.type === C.type && !q, L, Q, V = 0;
          do
            Q = L || C, L = D.getParentNode(V), V++;
          while (L && L.type === C.type && S.every((ue) => L[ue] !== Q));
          let j = L || R, Y = Q;
          if (o && (s(C[S[0]]) || s(b) || s(B) || N(Y))) {
            M = true, J = true;
            let ue = (z) => [_("("), f([g, z]), g, _(")")], Fe = (z) => z.type === "NullLiteral" || z.type === "Literal" && z.value === null || z.type === "Identifier" && z.name === "undefined";
            k.push(" ? ", Fe(b) ? m(d) : ue(m(d)), " : ", B.type === C.type || Fe(B) ? m(v) : ue(m(v)));
          } else {
            let ue = [h, "? ", b.type === C.type ? _("", "(") : "", F(2, m(d)), b.type === C.type ? _("", ")") : "", h, ": ", B.type === C.type ? m(v) : F(2, m(v))];
            k.push(R.type !== C.type || R[v] === C || q ? ue : T.useTabs ? w(f(ue)) : F(Math.max(0, T.tabWidth - 2), ue));
          }
          let ee = [...S.map((ue) => a(C[ue])), a(b), a(B)].flat().some((ue) => y(ue) && t(T.originalText, l(ue), p(ue))), ce = (ue) => R === j ? c(ue, { shouldBreak: ee }) : ee ? [ue, E] : ue, W = !M && (u(R) || R.type === "NGPipeExpression" && R.left === C) && !R.computed, K = P(D), de = ce([x(D, T, m), J ? k : f(k), o && W && !K ? g : ""]);
          return q || K ? c([f([g, de]), g]) : de;
        }
        r.exports = { printTernary: $ };
      } }), No = te({ "src/language-js/print/statement.js"(e, r) {
        ne();
        var { builders: { hardline: t } } = qe(), s = qt(), { getLeftSidePathName: a, hasNakedLeftSide: n, isJsxNode: u, isTheOnlyJsxElementInMarkdown: i, hasComment: l, CommentCheckFlags: p, isNextLineEmpty: y } = Ke(), { shouldPrintParamsWithoutParens: h } = qr();
        function g(x, I, P, $) {
          let D = x.getValue(), T = [], m = D.type === "ClassBody", C = c(D[$]);
          return x.each((o, d, v) => {
            let S = o.getValue();
            if (S.type === "EmptyStatement")
              return;
            let b = P();
            !I.semi && !m && !i(I, o) && f(o, I) ? l(S, p.Leading) ? T.push(P([], { needsSemi: true })) : T.push(";", b) : T.push(b), !I.semi && m && E(S) && N(S, v[d + 1]) && T.push(";"), S !== C && (T.push(t), y(S, I) && T.push(t));
          }, $), T;
        }
        function c(x) {
          for (let I = x.length - 1; I >= 0; I--) {
            let P = x[I];
            if (P.type !== "EmptyStatement")
              return P;
          }
        }
        function f(x, I) {
          return x.getNode().type !== "ExpressionStatement" ? false : x.call(($) => F($, I), "expression");
        }
        function F(x, I) {
          let P = x.getValue();
          switch (P.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return true;
            case "ArrowFunctionExpression": {
              if (!h(x, I))
                return true;
              break;
            }
            case "UnaryExpression": {
              let { prefix: $, operator: D } = P;
              if ($ && (D === "+" || D === "-"))
                return true;
              break;
            }
            case "BindExpression": {
              if (!P.object)
                return true;
              break;
            }
            case "Literal": {
              if (P.regex)
                return true;
              break;
            }
            default:
              if (u(P))
                return true;
          }
          return s(x, I) ? true : n(P) ? x.call(($) => F($, I), ...a(x, P)) : false;
        }
        function _(x, I, P) {
          return g(x, I, P, "body");
        }
        function w(x, I, P) {
          return g(x, I, P, "consequent");
        }
        var E = (x) => {
          let { type: I } = x;
          return I === "ClassProperty" || I === "PropertyDefinition" || I === "ClassPrivateProperty" || I === "ClassAccessorProperty" || I === "AccessorProperty" || I === "TSAbstractPropertyDefinition" || I === "TSAbstractAccessorProperty";
        };
        function N(x, I) {
          let { type: P, name: $ } = x.key;
          if (!x.computed && P === "Identifier" && ($ === "static" || $ === "get" || $ === "set" || $ === "accessor") && !x.value && !x.typeAnnotation)
            return true;
          if (!I || I.static || I.accessibility)
            return false;
          if (!I.computed) {
            let D = I.key && I.key.name;
            if (D === "in" || D === "instanceof")
              return true;
          }
          if (E(I) && I.variance && !I.static && !I.declare)
            return true;
          switch (I.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return I.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((I.value ? I.value.async : I.async) || I.kind === "get" || I.kind === "set")
                return false;
              let T = I.value ? I.value.generator : I.generator;
              return !!(I.computed || T);
            }
            case "TSIndexSignature":
              return true;
          }
          return false;
        }
        r.exports = { printBody: _, printSwitchCaseConsequent: w };
      } }), wo = te({ "src/language-js/print/block.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { isNonEmptyArray: s } = Ue(), { builders: { hardline: a, indent: n } } = qe(), { hasComment: u, CommentCheckFlags: i, isNextLineEmpty: l } = Ke(), { printHardlineAfterHeritage: p } = nr(), { printBody: y } = No();
        function h(c, f, F) {
          let _ = c.getValue(), w = [];
          if (_.type === "StaticBlock" && w.push("static "), _.type === "ClassBody" && s(_.body)) {
            let N = c.getParentNode();
            w.push(p(N));
          }
          w.push("{");
          let E = g(c, f, F);
          if (E)
            w.push(n([a, E]), a);
          else {
            let N = c.getParentNode(), x = c.getParentNode(1);
            N.type === "ArrowFunctionExpression" || N.type === "FunctionExpression" || N.type === "FunctionDeclaration" || N.type === "ObjectMethod" || N.type === "ClassMethod" || N.type === "ClassPrivateMethod" || N.type === "ForStatement" || N.type === "WhileStatement" || N.type === "DoWhileStatement" || N.type === "DoExpression" || N.type === "CatchClause" && !x.finalizer || N.type === "TSModuleDeclaration" || N.type === "TSDeclareFunction" || _.type === "StaticBlock" || _.type === "ClassBody" || w.push(a);
          }
          return w.push("}"), w;
        }
        function g(c, f, F) {
          let _ = c.getValue(), w = s(_.directives), E = _.body.some((I) => I.type !== "EmptyStatement"), N = u(_, i.Dangling);
          if (!w && !E && !N)
            return "";
          let x = [];
          if (w && c.each((I, P, $) => {
            x.push(F()), (P < $.length - 1 || E || N) && (x.push(a), l(I.getValue(), f) && x.push(a));
          }, "directives"), E && x.push(y(c, f, F)), N && x.push(t(c, f, true)), _.type === "Program") {
            let I = c.getParentNode();
            (!I || I.type !== "ModuleExpression") && x.push(a);
          }
          return x;
        }
        r.exports = { printBlock: h, printBlockBody: g };
      } }), yd = te({ "src/language-js/print/typescript.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { hasNewlineInRange: s } = Ue(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p, conditionalGroup: y, ifBreak: h } } = qe(), { isStringLiteral: g, getTypeScriptMappedTypeModifier: c, shouldPrintComma: f, isCallExpression: F, isMemberExpression: _ } = Ke(), w = gd(), { locStart: E, locEnd: N } = ut(), { printOptionalToken: x, printTypeScriptModifiers: I } = ct(), { printTernary: P } = Bo(), { printFunctionParameters: $, shouldGroupFunctionParameters: D } = Lr(), { printTemplateLiteral: T } = jt(), { printArrayItems: m } = er(), { printObject: C } = uu(), { printClassProperty: o, printClassMethod: d } = nr(), { printTypeParameter: v, printTypeParameters: S } = jr(), { printPropertyKey: b } = rr(), { printFunction: B, printMethodInternal: k } = qr(), { printInterface: M } = bo(), { printBlock: R } = wo(), { printTypeAlias: q, printIntersectionType: J, printUnionType: L, printFunctionType: Q, printTupleType: V, printIndexedAccessType: j, printJSDocType: Y } = Or();
        function ie(ee, ce, W) {
          let K = ee.getValue();
          if (!K.type.startsWith("TS"))
            return;
          if (w(K))
            return K.type.slice(2, -7).toLowerCase();
          let de = ce.semi ? ";" : "", ue = [];
          switch (K.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let Fe = !(K.expression.type === "ArrayExpression" || K.expression.type === "ObjectExpression"), z = l(["<", p([i, W("typeAnnotation")]), i, ">"]), U = [h("("), p([i, W("expression")]), i, h(")")];
              return Fe ? y([[z, W("expression")], [z, l(U, { shouldBreak: true })], [z, W("expression")]]) : l([z, W("expression")]);
            }
            case "TSDeclareFunction":
              return B(ee, W, ce);
            case "TSExportAssignment":
              return ["export = ", W("expression"), de];
            case "TSModuleBlock":
              return R(ee, ce, W);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return C(ee, ce, W);
            case "TSTypeAliasDeclaration":
              return q(ee, ce, W);
            case "TSQualifiedName":
              return a(".", [W("left"), W("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return d(ee, ce, W);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition":
              return o(ee, ce, W);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return ue.push(W("expression")), K.typeParameters && ue.push(W("typeParameters")), ue;
            case "TSTemplateLiteralType":
              return T(ee, W, ce);
            case "TSNamedTupleMember":
              return [W("label"), K.optional ? "?" : "", ": ", W("elementType")];
            case "TSRestType":
              return ["...", W("typeAnnotation")];
            case "TSOptionalType":
              return [W("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return M(ee, ce, W);
            case "TSClassImplements":
              return [W("expression"), W("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return S(ee, ce, W, "params");
            case "TSTypeParameter":
              return v(ee, ce, W);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let Fe = K.type === "TSAsExpression" ? "as" : "satisfies";
              ue.push(W("expression"), ` ${Fe} `, W("typeAnnotation"));
              let z = ee.getParentNode();
              return F(z) && z.callee === K || _(z) && z.object === K ? l([p([i, ...ue]), i]) : ue;
            }
            case "TSArrayType":
              return [W("elementType"), "[]"];
            case "TSPropertySignature":
              return K.readonly && ue.push("readonly "), ue.push(b(ee, ce, W), x(ee)), K.typeAnnotation && ue.push(": ", W("typeAnnotation")), K.initializer && ue.push(" = ", W("initializer")), ue;
            case "TSParameterProperty":
              return K.accessibility && ue.push(K.accessibility + " "), K.export && ue.push("export "), K.static && ue.push("static "), K.override && ue.push("override "), K.readonly && ue.push("readonly "), ue.push(W("parameter")), ue;
            case "TSTypeQuery":
              return ["typeof ", W("exprName"), W("typeParameters")];
            case "TSIndexSignature": {
              let Fe = ee.getParentNode(), z = K.parameters.length > 1 ? h(f(ce) ? "," : "") : "", U = l([p([i, a([", ", i], ee.map(W, "parameters"))]), z, i]);
              return [K.export ? "export " : "", K.accessibility ? [K.accessibility, " "] : "", K.static ? "static " : "", K.readonly ? "readonly " : "", K.declare ? "declare " : "", "[", K.parameters ? U : "", K.typeAnnotation ? "]: " : "]", K.typeAnnotation ? W("typeAnnotation") : "", Fe.type === "ClassBody" ? de : ""];
            }
            case "TSTypePredicate":
              return [K.asserts ? "asserts " : "", W("parameterName"), K.typeAnnotation ? [" is ", W("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [W("expression"), "!"];
            case "TSImportType":
              return [K.isTypeOf ? "typeof " : "", "import(", W(K.parameter ? "parameter" : "argument"), ")", K.qualifier ? [".", W("qualifier")] : "", S(ee, ce, W, "typeParameters")];
            case "TSLiteralType":
              return W("literal");
            case "TSIndexedAccessType":
              return j(ee, ce, W);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (K.type === "TSConstructorType" && K.abstract && ue.push("abstract "), K.type !== "TSCallSignatureDeclaration" && ue.push("new "), ue.push(l($(ee, W, ce, false, true))), K.returnType || K.typeAnnotation) {
                let Fe = K.type === "TSConstructorType";
                ue.push(Fe ? " => " : ": ", W("returnType"), W("typeAnnotation"));
              }
              return ue;
            }
            case "TSTypeOperator":
              return [K.operator, " ", W("typeAnnotation")];
            case "TSMappedType": {
              let Fe = s(ce.originalText, E(K), N(K));
              return l(["{", p([ce.bracketSpacing ? n : i, W("typeParameter"), K.optional ? c(K.optional, "?") : "", K.typeAnnotation ? ": " : "", W("typeAnnotation"), h(de)]), t(ee, ce, true), ce.bracketSpacing ? n : i, "}"], { shouldBreak: Fe });
            }
            case "TSMethodSignature": {
              let Fe = K.kind && K.kind !== "method" ? `${K.kind} ` : "";
              ue.push(K.accessibility ? [K.accessibility, " "] : "", Fe, K.export ? "export " : "", K.static ? "static " : "", K.readonly ? "readonly " : "", K.abstract ? "abstract " : "", K.declare ? "declare " : "", K.computed ? "[" : "", W("key"), K.computed ? "]" : "", x(ee));
              let z = $(ee, W, ce, false, true), U = K.returnType ? "returnType" : "typeAnnotation", Z = K[U], se = Z ? W(U) : "", fe = D(K, se);
              return ue.push(fe ? l(z) : z), Z && ue.push(": ", l(se)), l(ue);
            }
            case "TSNamespaceExportDeclaration":
              return ue.push("export as namespace ", W("id")), ce.semi && ue.push(";"), l(ue);
            case "TSEnumDeclaration":
              return K.declare && ue.push("declare "), K.modifiers && ue.push(I(ee, ce, W)), K.const && ue.push("const "), ue.push("enum ", W("id"), " "), K.members.length === 0 ? ue.push(l(["{", t(ee, ce), i, "}"])) : ue.push(l(["{", p([u, m(ee, ce, "members", W), f(ce, "es5") ? "," : ""]), t(ee, ce, true), u, "}"])), ue;
            case "TSEnumMember":
              return K.computed ? ue.push("[", W("id"), "]") : ue.push(W("id")), K.initializer && ue.push(" = ", W("initializer")), ue;
            case "TSImportEqualsDeclaration":
              return K.isExport && ue.push("export "), ue.push("import "), K.importKind && K.importKind !== "value" && ue.push(K.importKind, " "), ue.push(W("id"), " = ", W("moduleReference")), ce.semi && ue.push(";"), l(ue);
            case "TSExternalModuleReference":
              return ["require(", W("expression"), ")"];
            case "TSModuleDeclaration": {
              let Fe = ee.getParentNode(), z = g(K.id), U = Fe.type === "TSModuleDeclaration", Z = K.body && K.body.type === "TSModuleDeclaration";
              if (U)
                ue.push(".");
              else {
                K.declare && ue.push("declare "), ue.push(I(ee, ce, W));
                let se = ce.originalText.slice(E(K), E(K.id));
                K.id.type === "Identifier" && K.id.name === "global" && !/namespace|module/.test(se) || ue.push(z || /(?:^|\s)module(?:\s|$)/.test(se) ? "module " : "namespace ");
              }
              return ue.push(W("id")), Z ? ue.push(W("body")) : K.body ? ue.push(" ", l(W("body"))) : ue.push(de), ue;
            }
            case "TSConditionalType":
              return P(ee, ce, W);
            case "TSInferType":
              return ["infer", " ", W("typeParameter")];
            case "TSIntersectionType":
              return J(ee, ce, W);
            case "TSUnionType":
              return L(ee, ce, W);
            case "TSFunctionType":
              return Q(ee, ce, W);
            case "TSTupleType":
              return V(ee, ce, W);
            case "TSTypeReference":
              return [W("typeName"), S(ee, ce, W, "typeParameters")];
            case "TSTypeAnnotation":
              return W("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return k(ee, ce, W);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return Y(ee, W, "?");
            case "TSJSDocNonNullableType":
              return Y(ee, W, "!");
            case "TSInstantiationExpression":
              return [W("expression"), W("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(K.type)}.`);
          }
        }
        r.exports = { printTypescript: ie };
      } }), hd = te({ "src/language-js/print/comment.js"(e, r) {
        ne();
        var { hasNewline: t } = Ue(), { builders: { join: s, hardline: a }, utils: { replaceTextEndOfLine: n } } = qe(), { isLineComment: u } = Ke(), { locStart: i, locEnd: l } = ut(), p = Pt();
        function y(c, f) {
          let F = c.getValue();
          if (u(F))
            return f.originalText.slice(i(F), l(F)).trimEnd();
          if (p(F)) {
            if (h(F)) {
              let E = g(F);
              return F.trailing && !t(f.originalText, i(F), { backwards: true }) ? [a, E] : E;
            }
            let _ = l(F), w = f.originalText.slice(_ - 3, _) === "*-/";
            return ["/*", n(F.value), w ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(F));
        }
        function h(c) {
          let f = `*${c.value}*`.split(`
`);
          return f.length > 1 && f.every((F) => F.trim()[0] === "*");
        }
        function g(c) {
          let f = c.value.split(`
`);
          return ["/*", s(a, f.map((F, _) => _ === 0 ? F.trimEnd() : " " + (_ < f.length - 1 ? F.trim() : F.trimStart()))), "*/"];
        }
        r.exports = { printComment: y };
      } }), vd = te({ "src/language-js/print/literal.js"(e, r) {
        ne();
        var { printString: t, printNumber: s } = Ue(), { replaceTextEndOfLine: a } = Yt(), { printDirective: n } = ct();
        function u(y, h) {
          let g = y.getNode();
          switch (g.type) {
            case "RegExpLiteral":
              return p(g);
            case "BigIntLiteral":
              return l(g.bigint || g.extra.raw);
            case "NumericLiteral":
              return s(g.extra.raw);
            case "StringLiteral":
              return a(t(g.extra.raw, h));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(g.value);
            case "DecimalLiteral":
              return s(g.value) + "m";
            case "Literal": {
              if (g.regex)
                return p(g.regex);
              if (g.bigint)
                return l(g.raw);
              if (g.decimal)
                return s(g.decimal) + "m";
              let { value: c } = g;
              return typeof c == "number" ? s(g.raw) : typeof c == "string" ? i(y) ? n(g.raw, h) : a(t(g.raw, h)) : String(c);
            }
          }
        }
        function i(y) {
          if (y.getName() !== "expression")
            return;
          let h = y.getParentNode();
          return h.type === "ExpressionStatement" && h.directive;
        }
        function l(y) {
          return y.toLowerCase();
        }
        function p(y) {
          let { pattern: h, flags: g } = y;
          return g = [...g].sort().join(""), `/${h}/${g}`;
        }
        r.exports = { printLiteral: u };
      } }), Cd = te({ "src/language-js/printer-estree.js"(e, r) {
        ne();
        var { printDanglingComments: t } = et(), { hasNewline: s } = Ue(), { builders: { join: a, line: n, hardline: u, softline: i, group: l, indent: p }, utils: { replaceTextEndOfLine: y } } = qe(), h = td(), g = rd(), { insertPragma: c } = Co(), f = Eo(), F = qt(), _ = Fo(), { hasFlowShorthandAnnotationComment: w, hasComment: E, CommentCheckFlags: N, isTheOnlyJsxElementInMarkdown: x, isLineComment: I, isNextLineEmpty: P, needsHardlineAfterDanglingComment: $, hasIgnoreComment: D, isCallExpression: T, isMemberExpression: m, markerForIfWithoutBlockAndSameLineComment: C } = Ke(), { locStart: o, locEnd: d } = ut(), v = Pt(), { printHtmlBinding: S, isVueEventBindingExpression: b } = pd(), { printAngular: B } = fd(), { printJsx: k, hasJsxIgnoreComment: M } = Dd(), { printFlow: R } = dd(), { printTypescript: q } = yd(), { printOptionalToken: J, printBindExpressionCallee: L, printTypeAnnotation: Q, adjustClause: V, printRestSpread: j, printDefiniteToken: Y, printDirective: ie } = ct(), { printImportDeclaration: ee, printExportDeclaration: ce, printExportAllDeclaration: W, printModuleSpecifier: K } = To(), { printTernary: de } = Bo(), { printTemplateLiteral: ue } = jt(), { printArray: Fe } = er(), { printObject: z } = uu(), { printClass: U, printClassMethod: Z, printClassProperty: se } = nr(), { printProperty: fe } = rr(), { printFunction: ge, printArrowFunction: he, printMethod: we, printReturnStatement: ke, printThrowStatement: Re } = qr(), { printCallExpression: Ne } = xo(), { printVariableDeclarator: Pe, printAssignmentExpression: oe } = tr(), { printBinaryishExpression: H } = ru(), { printSwitchCaseConsequent: pe } = No(), { printMemberExpression: X } = So(), { printBlock: le, printBlockBody: Ae } = wo(), { printComment: Ee } = hd(), { printLiteral: De } = vd(), { printDecorators: A } = nu();
        function G(Ce, Be, ve, ze) {
          let be = re(Ce, Be, ve, ze);
          if (!be)
            return "";
          let Ye = Ce.getValue(), { type: Se } = Ye;
          if (Se === "ClassMethod" || Se === "ClassPrivateMethod" || Se === "ClassProperty" || Se === "ClassAccessorProperty" || Se === "AccessorProperty" || Se === "TSAbstractAccessorProperty" || Se === "PropertyDefinition" || Se === "TSAbstractPropertyDefinition" || Se === "ClassPrivateProperty" || Se === "MethodDefinition" || Se === "TSAbstractMethodDefinition" || Se === "TSDeclareMethod")
            return be;
          let Ie = [be], Oe = A(Ce, Be, ve), Je = Ye.type === "ClassExpression" && Oe;
          if (Oe && (Ie = [...Oe, be], !Je))
            return l(Ie);
          if (!F(Ce, Be))
            return ze && ze.needsSemi && Ie.unshift(";"), Ie.length === 1 && Ie[0] === be ? be : Ie;
          if (Je && (Ie = [p([n, ...Ie])]), Ie.unshift("("), ze && ze.needsSemi && Ie.unshift(";"), w(Ye)) {
            let [je] = Ye.trailingComments;
            Ie.push(" /*", je.value.trimStart(), "*/"), je.printed = true;
          }
          return Je && Ie.push(n), Ie.push(")"), Ie;
        }
        function re(Ce, Be, ve, ze) {
          let be = Ce.getValue(), Ye = Be.semi ? ";" : "";
          if (!be)
            return "";
          if (typeof be == "string")
            return be;
          for (let Ie of [De, S, B, k, R, q]) {
            let Oe = Ie(Ce, Be, ve);
            if (typeof Oe < "u")
              return Oe;
          }
          let Se = [];
          switch (be.type) {
            case "JsExpressionRoot":
              return ve("node");
            case "JsonRoot":
              return [ve("node"), u];
            case "File":
              return be.program && be.program.interpreter && Se.push(ve(["program", "interpreter"])), Se.push(ve("program")), Se;
            case "Program":
              return Ae(Ce, Be, ve);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (Be.parser === "__vue_event_binding" || Be.parser === "__vue_ts_event_binding") {
                let Oe = Ce.getParentNode();
                if (Oe.type === "Program" && Oe.body.length === 1 && Oe.body[0] === be)
                  return [ve("expression"), b(be.expression) ? ";" : ""];
              }
              let Ie = t(Ce, Be, true, (Oe) => {
                let { marker: Je } = Oe;
                return Je === C;
              });
              return [ve("expression"), x(Be, Ce) ? "" : Ye, Ie ? [" ", Ie] : ""];
            }
            case "ParenthesizedExpression":
              return !E(be.expression) && (be.expression.type === "ObjectExpression" || be.expression.type === "ArrayExpression") ? ["(", ve("expression"), ")"] : l(["(", p([i, ve("expression")]), i, ")"]);
            case "AssignmentExpression":
              return oe(Ce, Be, ve);
            case "VariableDeclarator":
              return Pe(Ce, Be, ve);
            case "BinaryExpression":
            case "LogicalExpression":
              return H(Ce, Be, ve);
            case "AssignmentPattern":
              return [ve("left"), " = ", ve("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return X(Ce, Be, ve);
            case "MetaProperty":
              return [ve("meta"), ".", ve("property")];
            case "BindExpression":
              return be.object && Se.push(ve("object")), Se.push(l(p([i, L(Ce, Be, ve)]))), Se;
            case "Identifier":
              return [be.name, J(Ce), Y(Ce), Q(Ce, Be, ve)];
            case "V8IntrinsicIdentifier":
              return ["%", be.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return j(Ce, Be, ve);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return ge(Ce, ve, Be, ze);
            case "ArrowFunctionExpression":
              return he(Ce, Be, ve, ze);
            case "YieldExpression":
              return Se.push("yield"), be.delegate && Se.push("*"), be.argument && Se.push(" ", ve("argument")), Se;
            case "AwaitExpression": {
              if (Se.push("await"), be.argument) {
                Se.push(" ", ve("argument"));
                let Ie = Ce.getParentNode();
                if (T(Ie) && Ie.callee === be || m(Ie) && Ie.object === be) {
                  Se = [p([i, ...Se]), i];
                  let Oe = Ce.findAncestor((Je) => Je.type === "AwaitExpression" || Je.type === "BlockStatement");
                  if (!Oe || Oe.type !== "AwaitExpression")
                    return l(Se);
                }
              }
              return Se;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return ce(Ce, Be, ve);
            case "ExportAllDeclaration":
              return W(Ce, Be, ve);
            case "ImportDeclaration":
              return ee(Ce, Be, ve);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return K(Ce, Be, ve);
            case "ImportAttribute":
              return [ve("key"), ": ", ve("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return le(Ce, Be, ve);
            case "ThrowStatement":
              return Re(Ce, Be, ve);
            case "ReturnStatement":
              return ke(Ce, Be, ve);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return Ne(Ce, Be, ve);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return z(Ce, Be, ve);
            case "ObjectProperty":
            case "Property":
              return be.method || be.kind === "get" || be.kind === "set" ? we(Ce, Be, ve) : fe(Ce, Be, ve);
            case "ObjectMethod":
              return we(Ce, Be, ve);
            case "Decorator":
              return ["@", ve("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return Fe(Ce, Be, ve);
            case "SequenceExpression": {
              let Ie = Ce.getParentNode(0);
              if (Ie.type === "ExpressionStatement" || Ie.type === "ForStatement") {
                let Oe = [];
                return Ce.each((Je, Te) => {
                  Te === 0 ? Oe.push(ve()) : Oe.push(",", p([n, ve()]));
                }, "expressions"), l(Oe);
              }
              return l(a([",", n], Ce.map(ve, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [ve("value"), Ye];
            case "DirectiveLiteral":
              return ie(be.extra.raw, Be);
            case "UnaryExpression":
              return Se.push(be.operator), /[a-z]$/.test(be.operator) && Se.push(" "), E(be.argument) ? Se.push(l(["(", p([i, ve("argument")]), i, ")"])) : Se.push(ve("argument")), Se;
            case "UpdateExpression":
              return Se.push(ve("argument"), be.operator), be.prefix && Se.reverse(), Se;
            case "ConditionalExpression":
              return de(Ce, Be, ve);
            case "VariableDeclaration": {
              let Ie = Ce.map(ve, "declarations"), Oe = Ce.getParentNode(), Je = Oe.type === "ForStatement" || Oe.type === "ForInStatement" || Oe.type === "ForOfStatement", Te = be.declarations.some((Me) => Me.init), je;
              return Ie.length === 1 && !E(be.declarations[0]) ? je = Ie[0] : Ie.length > 0 && (je = p(Ie[0])), Se = [be.declare ? "declare " : "", be.kind, je ? [" ", je] : "", p(Ie.slice(1).map((Me) => [",", Te && !Je ? u : n, Me]))], Je && Oe.body !== be || Se.push(Ye), l(Se);
            }
            case "WithStatement":
              return l(["with (", ve("object"), ")", V(be.body, ve("body"))]);
            case "IfStatement": {
              let Ie = V(be.consequent, ve("consequent")), Oe = l(["if (", l([p([i, ve("test")]), i]), ")", Ie]);
              if (Se.push(Oe), be.alternate) {
                let Je = E(be.consequent, N.Trailing | N.Line) || $(be), Te = be.consequent.type === "BlockStatement" && !Je;
                Se.push(Te ? " " : u), E(be, N.Dangling) && Se.push(t(Ce, Be, true), Je ? u : " "), Se.push("else", l(V(be.alternate, ve("alternate"), be.alternate.type === "IfStatement")));
              }
              return Se;
            }
            case "ForStatement": {
              let Ie = V(be.body, ve("body")), Oe = t(Ce, Be, true), Je = Oe ? [Oe, i] : "";
              return !be.init && !be.test && !be.update ? [Je, l(["for (;;)", Ie])] : [Je, l(["for (", l([p([i, ve("init"), ";", n, ve("test"), ";", n, ve("update")]), i]), ")", Ie])];
            }
            case "WhileStatement":
              return l(["while (", l([p([i, ve("test")]), i]), ")", V(be.body, ve("body"))]);
            case "ForInStatement":
              return l(["for (", ve("left"), " in ", ve("right"), ")", V(be.body, ve("body"))]);
            case "ForOfStatement":
              return l(["for", be.await ? " await" : "", " (", ve("left"), " of ", ve("right"), ")", V(be.body, ve("body"))]);
            case "DoWhileStatement": {
              let Ie = V(be.body, ve("body"));
              return Se = [l(["do", Ie])], be.body.type === "BlockStatement" ? Se.push(" ") : Se.push(u), Se.push("while (", l([p([i, ve("test")]), i]), ")", Ye), Se;
            }
            case "DoExpression":
              return [be.async ? "async " : "", "do ", ve("body")];
            case "BreakStatement":
              return Se.push("break"), be.label && Se.push(" ", ve("label")), Se.push(Ye), Se;
            case "ContinueStatement":
              return Se.push("continue"), be.label && Se.push(" ", ve("label")), Se.push(Ye), Se;
            case "LabeledStatement":
              return be.body.type === "EmptyStatement" ? [ve("label"), ":;"] : [ve("label"), ": ", ve("body")];
            case "TryStatement":
              return ["try ", ve("block"), be.handler ? [" ", ve("handler")] : "", be.finalizer ? [" finally ", ve("finalizer")] : ""];
            case "CatchClause":
              if (be.param) {
                let Ie = E(be.param, (Je) => !v(Je) || Je.leading && s(Be.originalText, d(Je)) || Je.trailing && s(Be.originalText, o(Je), { backwards: true })), Oe = ve("param");
                return ["catch ", Ie ? ["(", p([i, Oe]), i, ") "] : ["(", Oe, ") "], ve("body")];
              }
              return ["catch ", ve("body")];
            case "SwitchStatement":
              return [l(["switch (", p([i, ve("discriminant")]), i, ")"]), " {", be.cases.length > 0 ? p([u, a(u, Ce.map((Ie, Oe, Je) => {
                let Te = Ie.getValue();
                return [ve(), Oe !== Je.length - 1 && P(Te, Be) ? u : ""];
              }, "cases"))]) : "", u, "}"];
            case "SwitchCase": {
              be.test ? Se.push("case ", ve("test"), ":") : Se.push("default:"), E(be, N.Dangling) && Se.push(" ", t(Ce, Be, true));
              let Ie = be.consequent.filter((Oe) => Oe.type !== "EmptyStatement");
              if (Ie.length > 0) {
                let Oe = pe(Ce, Be, ve);
                Se.push(Ie.length === 1 && Ie[0].type === "BlockStatement" ? [" ", Oe] : p([u, Oe]));
              }
              return Se;
            }
            case "DebuggerStatement":
              return ["debugger", Ye];
            case "ClassDeclaration":
            case "ClassExpression":
              return U(Ce, Be, ve);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return Z(Ce, Be, ve);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
            case "AccessorProperty":
              return se(Ce, Be, ve);
            case "TemplateElement":
              return y(be.value.raw);
            case "TemplateLiteral":
              return ue(Ce, ve, Be);
            case "TaggedTemplateExpression":
              return [ve("tag"), ve("typeParameters"), ve("quasi")];
            case "PrivateIdentifier":
              return ["#", ve("name")];
            case "PrivateName":
              return ["#", ve("id")];
            case "InterpreterDirective":
              return Se.push("#!", be.value, u), P(be, Be) && Se.push(u), Se;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              Se.push("module {");
              let Ie = ve("body");
              return Ie && Se.push(p([u, Ie]), u), Se.push("}"), Se;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(be.type));
          }
        }
        function ye(Ce) {
          return Ce.type && !v(Ce) && !I(Ce) && Ce.type !== "EmptyStatement" && Ce.type !== "TemplateElement" && Ce.type !== "Import" && Ce.type !== "TSEmptyBodyFunctionExpression";
        }
        r.exports = { preprocess: _, print: G, embed: h, insertPragma: c, massageAstNode: g, hasPrettierIgnore(Ce) {
          return D(Ce) || M(Ce);
        }, willPrintOwnComments: f.willPrintOwnComments, canAttachComment: ye, printComment: Ee, isBlockComment: v, handleComments: { avoidAstMutation: true, ownLine: f.handleOwnLineComment, endOfLine: f.handleEndOfLineComment, remaining: f.handleRemainingComment }, getCommentChildNodes: f.getCommentChildNodes };
      } }), Ed = te({ "src/language-js/printer-estree-json.js"(e, r) {
        ne();
        var { builders: { hardline: t, indent: s, join: a } } = qe(), n = Fo();
        function u(y, h, g) {
          let c = y.getValue();
          switch (c.type) {
            case "JsonRoot":
              return [g("node"), t];
            case "ArrayExpression": {
              if (c.elements.length === 0)
                return "[]";
              let f = y.map(() => y.getValue() === null ? "null" : g(), "elements");
              return ["[", s([t, a([",", t], f)]), t, "]"];
            }
            case "ObjectExpression":
              return c.properties.length === 0 ? "{}" : ["{", s([t, a([",", t], y.map(g, "properties"))]), t, "}"];
            case "ObjectProperty":
              return [g("key"), ": ", g("value")];
            case "UnaryExpression":
              return [c.operator === "+" ? "" : c.operator, g("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return c.value ? "true" : "false";
            case "StringLiteral":
              return JSON.stringify(c.value);
            case "NumericLiteral":
              return i(y) ? JSON.stringify(String(c.value)) : JSON.stringify(c.value);
            case "Identifier":
              return i(y) ? JSON.stringify(c.name) : c.name;
            case "TemplateLiteral":
              return g(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(c.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(c.type));
          }
        }
        function i(y) {
          return y.getName() === "key" && y.getParentNode().type === "ObjectProperty";
        }
        var l = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function p(y, h) {
          let { type: g } = y;
          if (g === "ObjectProperty") {
            let { key: c } = y;
            c.type === "Identifier" ? h.key = { type: "StringLiteral", value: c.name } : c.type === "NumericLiteral" && (h.key = { type: "StringLiteral", value: String(c.value) });
            return;
          }
          if (g === "UnaryExpression" && y.operator === "+")
            return h.argument;
          if (g === "ArrayExpression") {
            for (let [c, f] of y.elements.entries())
              f === null && h.elements.splice(c, 0, { type: "NullLiteral" });
            return;
          }
          if (g === "TemplateLiteral")
            return { type: "StringLiteral", value: y.quasis[0].value.cooked };
        }
        p.ignoredProperties = l, r.exports = { preprocess: n, print: u, massageAstNode: p };
      } }), Mt = te({ "src/common/common-options.js"(e, r) {
        ne();
        var t = "Common";
        r.exports = { bracketSpacing: { since: "0.0.0", category: t, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: t, type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: t, type: "choice", default: [{ since: "1.8.2", value: true }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: t, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: t, type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), Fd = te({ "src/language-js/options.js"(e, r) {
        ne();
        var t = Mt(), s = "JavaScript";
        r.exports = { arrowParens: { since: "1.9.0", category: s, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: t.bracketSameLine, bracketSpacing: t.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: s, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: s, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: t.singleQuote, jsxSingleQuote: { since: "1.15.0", category: s, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: s, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: s, type: "choice", default: [{ since: "0.0.0", value: false }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: t.singleAttributePerLine };
      } }), Ad = te({ "src/language-js/parse/parsers.js"() {
        ne();
      } }), Ln = te({ "node_modules/linguist-languages/data/JavaScript.json"(e, r) {
        r.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), Sd = te({ "node_modules/linguist-languages/data/TypeScript.json"(e, r) {
        r.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), xd = te({ "node_modules/linguist-languages/data/TSX.json"(e, r) {
        r.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), wa = te({ "node_modules/linguist-languages/data/JSON.json"(e, r) {
        r.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), bd = te({ "node_modules/linguist-languages/data/JSON with Comments.json"(e, r) {
        r.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), Td = te({ "node_modules/linguist-languages/data/JSON5.json"(e, r) {
        r.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), Bd = te({ "src/language-js/index.js"(e, r) {
        ne();
        var t = _t(), s = Cd(), a = Ed(), n = Fd(), u = Ad(), i = [t(Ln(), (p) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...p.interpreters, "zx"], extensions: [...p.extensions.filter((y) => y !== ".jsx"), ".wxs"] })), t(Ln(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), t(Ln(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), t(Sd(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), t(xd(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), t(wa(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), t(wa(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: p.extensions.filter((y) => y !== ".jsonl") })), t(bd(), (p) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...p.filenames, ".eslintrc", ".swcrc"] })), t(Td(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], l = { estree: s, "estree-json": a };
        r.exports = { languages: i, options: n, printers: l, parsers: u };
      } }), Nd = te({ "src/language-css/clean.js"(e, r) {
        ne();
        var { isFrontMatterNode: t } = Ue(), s = lt(), a = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function n(i, l, p) {
          if (t(i) && i.lang === "yaml" && delete l.value, i.type === "css-comment" && p.type === "css-root" && p.nodes.length > 0 && ((p.nodes[0] === i || t(p.nodes[0]) && p.nodes[1] === i) && (delete l.text, /^\*\s*@(?:format|prettier)\s*$/.test(i.text)) || p.type === "css-root" && s(p.nodes) === i))
            return null;
          if (i.type === "value-root" && delete l.text, (i.type === "media-query" || i.type === "media-query-list" || i.type === "media-feature-expression") && delete l.value, i.type === "css-rule" && delete l.params, i.type === "selector-combinator" && (l.value = l.value.replace(/\s+/g, " ")), i.type === "media-feature" && (l.value = l.value.replace(/ /g, "")), (i.type === "value-word" && (i.isColor && i.isHex || ["initial", "inherit", "unset", "revert"].includes(l.value.replace().toLowerCase())) || i.type === "media-feature" || i.type === "selector-root-invalid" || i.type === "selector-pseudo") && (l.value = l.value.toLowerCase()), i.type === "css-decl" && (l.prop = l.prop.toLowerCase()), (i.type === "css-atrule" || i.type === "css-import") && (l.name = l.name.toLowerCase()), i.type === "value-number" && (l.unit = l.unit.toLowerCase()), (i.type === "media-feature" || i.type === "media-keyword" || i.type === "media-type" || i.type === "media-unknown" || i.type === "media-url" || i.type === "media-value" || i.type === "selector-attribute" || i.type === "selector-string" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "value-string") && l.value && (l.value = u(l.value)), i.type === "selector-attribute" && (l.attribute = l.attribute.trim(), l.namespace && typeof l.namespace == "string" && (l.namespace = l.namespace.trim(), l.namespace.length === 0 && (l.namespace = true)), l.value && (l.value = l.value.trim().replace(/^["']|["']$/g, ""), delete l.quoted)), (i.type === "media-value" || i.type === "media-type" || i.type === "value-number" || i.type === "selector-root-invalid" || i.type === "selector-class" || i.type === "selector-combinator" || i.type === "selector-tag") && l.value && (l.value = l.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (y, h, g) => {
            let c = Number(h);
            return Number.isNaN(c) ? y : c + g.toLowerCase();
          })), i.type === "selector-tag") {
            let y = i.value.toLowerCase();
            ["from", "to"].includes(y) && (l.value = y);
          }
          if (i.type === "css-atrule" && i.name.toLowerCase() === "supports" && delete l.value, i.type === "selector-unknown" && delete l.value, i.type === "value-comma_group") {
            let y = i.groups.findIndex((h) => h.type === "value-number" && h.unit === "...");
            y !== -1 && (l.groups[y].unit = "", l.groups.splice(y + 1, 0, { type: "value-word", value: "...", isColor: false, isHex: false }));
          }
          if (i.type === "value-comma_group" && i.groups.some((y) => y.type === "value-atword" && y.value.endsWith("[") || y.type === "value-word" && y.value.startsWith("]")))
            return { type: "value-atword", value: i.groups.map((y) => y.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
        }
        n.ignoredProperties = a;
        function u(i) {
          return i.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        r.exports = n;
      } }), su = te({ "src/utils/front-matter/print.js"(e, r) {
        ne();
        var { builders: { hardline: t, markAsRoot: s } } = qe();
        function a(n, u) {
          if (n.lang === "yaml") {
            let i = n.value.trim(), l = i ? u(i, { parser: "yaml" }, { stripTrailingHardline: true }) : "";
            return s([n.startDelimiter, t, l, l ? t : "", n.endDelimiter]);
          }
        }
        r.exports = a;
      } }), wd = te({ "src/language-css/embed.js"(e, r) {
        ne();
        var { builders: { hardline: t } } = qe(), s = su();
        function a(n, u, i) {
          let l = n.getValue();
          if (l.type === "front-matter") {
            let p = s(l, i);
            return p ? [p, t] : "";
          }
        }
        r.exports = a;
      } }), _o = te({ "src/utils/front-matter/parse.js"(e, r) {
        ne();
        var t = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function s(a) {
          let n = a.match(t);
          if (!n)
            return { content: a };
          let { startDelimiter: u, language: i, value: l = "", endDelimiter: p } = n.groups, y = i.trim() || "yaml";
          if (u === "+++" && (y = "toml"), y !== "yaml" && u !== p)
            return { content: a };
          let [h] = n;
          return { frontMatter: { type: "front-matter", lang: y, value: l, startDelimiter: u, endDelimiter: p, raw: h.replace(/\n$/, "") }, content: h.replace(/[^\n]/g, " ") + a.slice(h.length) };
        }
        r.exports = s;
      } }), _d = te({ "src/language-css/pragma.js"(e, r) {
        ne();
        var t = Co(), s = _o();
        function a(u) {
          return t.hasPragma(s(u).content);
        }
        function n(u) {
          let { frontMatter: i, content: l } = s(u);
          return (i ? i.raw + `

` : "") + t.insertPragma(l);
        }
        r.exports = { hasPragma: a, insertPragma: n };
      } }), Pd = te({ "src/language-css/utils/index.js"(e, r) {
        ne();
        var t = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function s(z, U) {
          let Z = Array.isArray(U) ? U : [U], se = -1, fe;
          for (; fe = z.getParentNode(++se); )
            if (Z.includes(fe.type))
              return se;
          return -1;
        }
        function a(z, U) {
          let Z = s(z, U);
          return Z === -1 ? null : z.getParentNode(Z);
        }
        function n(z) {
          var U;
          let Z = a(z, "css-decl");
          return Z == null || (U = Z.prop) === null || U === void 0 ? void 0 : U.toLowerCase();
        }
        var u = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function i(z) {
          return u.has(z.toLowerCase());
        }
        function l(z, U) {
          let Z = a(z, "css-atrule");
          return (Z == null ? void 0 : Z.name) && Z.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(U.toLowerCase());
        }
        function p(z) {
          return z.includes("$") || z.includes("@") || z.includes("#") || z.startsWith("%") || z.startsWith("--") || z.startsWith(":--") || z.includes("(") && z.includes(")") ? z : z.toLowerCase();
        }
        function y(z, U) {
          var Z;
          let se = a(z, "value-func");
          return (se == null || (Z = se.value) === null || Z === void 0 ? void 0 : Z.toLowerCase()) === U;
        }
        function h(z) {
          var U;
          let Z = a(z, "css-rule"), se = Z == null || (U = Z.raws) === null || U === void 0 ? void 0 : U.selector;
          return se && (se.startsWith(":import") || se.startsWith(":export"));
        }
        function g(z, U) {
          let Z = Array.isArray(U) ? U : [U], se = a(z, "css-atrule");
          return se && Z.includes(se.name.toLowerCase());
        }
        function c(z) {
          let U = z.getValue(), Z = a(z, "css-atrule");
          return (Z == null ? void 0 : Z.name) === "import" && U.groups[0].value === "url" && U.groups.length === 2;
        }
        function f(z) {
          return z.type === "value-func" && z.value.toLowerCase() === "url";
        }
        function F(z, U) {
          var Z;
          let se = (Z = z.getParentNode()) === null || Z === void 0 ? void 0 : Z.nodes;
          return se && se.indexOf(U) === se.length - 1;
        }
        function _(z) {
          let { selector: U } = z;
          return U ? typeof U == "string" && /^@.+:.*$/.test(U) || U.value && /^@.+:.*$/.test(U.value) : false;
        }
        function w(z) {
          return z.type === "value-word" && ["from", "through", "end"].includes(z.value);
        }
        function E(z) {
          return z.type === "value-word" && ["and", "or", "not"].includes(z.value);
        }
        function N(z) {
          return z.type === "value-word" && z.value === "in";
        }
        function x(z) {
          return z.type === "value-operator" && z.value === "*";
        }
        function I(z) {
          return z.type === "value-operator" && z.value === "/";
        }
        function P(z) {
          return z.type === "value-operator" && z.value === "+";
        }
        function $(z) {
          return z.type === "value-operator" && z.value === "-";
        }
        function D(z) {
          return z.type === "value-operator" && z.value === "%";
        }
        function T(z) {
          return x(z) || I(z) || P(z) || $(z) || D(z);
        }
        function m(z) {
          return z.type === "value-word" && ["==", "!="].includes(z.value);
        }
        function C(z) {
          return z.type === "value-word" && ["<", ">", "<=", ">="].includes(z.value);
        }
        function o(z) {
          return z.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(z.name);
        }
        function d(z) {
          var U;
          return ((U = z.raws) === null || U === void 0 ? void 0 : U.params) && /^\(\s*\)$/.test(z.raws.params);
        }
        function v(z) {
          return z.name.startsWith("prettier-placeholder");
        }
        function S(z) {
          return z.prop.startsWith("@prettier-placeholder");
        }
        function b(z, U) {
          return z.value === "$$" && z.type === "value-func" && (U == null ? void 0 : U.type) === "value-word" && !U.raws.before;
        }
        function B(z) {
          var U, Z;
          return ((U = z.value) === null || U === void 0 ? void 0 : U.type) === "value-root" && ((Z = z.value.group) === null || Z === void 0 ? void 0 : Z.type) === "value-value" && z.prop.toLowerCase() === "composes";
        }
        function k(z) {
          var U, Z, se;
          return ((U = z.value) === null || U === void 0 || (Z = U.group) === null || Z === void 0 || (se = Z.group) === null || se === void 0 ? void 0 : se.type) === "value-paren_group" && z.value.group.group.open !== null && z.value.group.group.close !== null;
        }
        function M(z) {
          var U;
          return ((U = z.raws) === null || U === void 0 ? void 0 : U.before) === "";
        }
        function R(z) {
          var U, Z;
          return z.type === "value-comma_group" && ((U = z.groups) === null || U === void 0 || (Z = U[1]) === null || Z === void 0 ? void 0 : Z.type) === "value-colon";
        }
        function q(z) {
          var U;
          return z.type === "value-paren_group" && ((U = z.groups) === null || U === void 0 ? void 0 : U[0]) && R(z.groups[0]);
        }
        function J(z) {
          var U;
          let Z = z.getValue();
          if (Z.groups.length === 0)
            return false;
          let se = z.getParentNode(1);
          if (!q(Z) && !(se && q(se)))
            return false;
          let fe = a(z, "css-decl");
          return !!(fe != null && (U = fe.prop) !== null && U !== void 0 && U.startsWith("$") || q(se) || se.type === "value-func");
        }
        function L(z) {
          return z.type === "value-comment" && z.inline;
        }
        function Q(z) {
          return z.type === "value-word" && z.value === "#";
        }
        function V(z) {
          return z.type === "value-word" && z.value === "{";
        }
        function j(z) {
          return z.type === "value-word" && z.value === "}";
        }
        function Y(z) {
          return ["value-word", "value-atword"].includes(z.type);
        }
        function ie(z) {
          return (z == null ? void 0 : z.type) === "value-colon";
        }
        function ee(z, U) {
          if (!R(U))
            return false;
          let { groups: Z } = U, se = Z.indexOf(z);
          return se === -1 ? false : ie(Z[se + 1]);
        }
        function ce(z) {
          return z.value && ["not", "and", "or"].includes(z.value.toLowerCase());
        }
        function W(z) {
          return z.type !== "value-func" ? false : t.has(z.value.toLowerCase());
        }
        function K(z) {
          return /\/\//.test(z.split(/[\n\r]/).pop());
        }
        function de(z) {
          return (z == null ? void 0 : z.type) === "value-atword" && z.value.startsWith("prettier-placeholder-");
        }
        function ue(z, U) {
          var Z, se;
          if (((Z = z.open) === null || Z === void 0 ? void 0 : Z.value) !== "(" || ((se = z.close) === null || se === void 0 ? void 0 : se.value) !== ")" || z.groups.some((fe) => fe.type !== "value-comma_group"))
            return false;
          if (U.type === "value-comma_group") {
            let fe = U.groups.indexOf(z) - 1, ge = U.groups[fe];
            if ((ge == null ? void 0 : ge.type) === "value-word" && ge.value === "with")
              return true;
          }
          return false;
        }
        function Fe(z) {
          var U, Z;
          return z.type === "value-paren_group" && ((U = z.open) === null || U === void 0 ? void 0 : U.value) === "(" && ((Z = z.close) === null || Z === void 0 ? void 0 : Z.value) === ")";
        }
        r.exports = { getAncestorCounter: s, getAncestorNode: a, getPropOfDeclNode: n, maybeToLowerCase: p, insideValueFunctionNode: y, insideICSSRuleNode: h, insideAtRuleNode: g, insideURLFunctionInImportAtRuleNode: c, isKeyframeAtRuleKeywords: l, isWideKeywords: i, isLastNode: F, isSCSSControlDirectiveNode: o, isDetachedRulesetDeclarationNode: _, isRelationalOperatorNode: C, isEqualityOperatorNode: m, isMultiplicationNode: x, isDivisionNode: I, isAdditionNode: P, isSubtractionNode: $, isModuloNode: D, isMathOperatorNode: T, isEachKeywordNode: N, isForKeywordNode: w, isURLFunctionNode: f, isIfElseKeywordNode: E, hasComposesNode: B, hasParensAroundNode: k, hasEmptyRawBefore: M, isDetachedRulesetCallNode: d, isTemplatePlaceholderNode: v, isTemplatePropNode: S, isPostcssSimpleVarNode: b, isKeyValuePairNode: R, isKeyValuePairInParenGroupNode: q, isKeyInValuePairNode: ee, isSCSSMapItemNode: J, isInlineValueCommentNode: L, isHashNode: Q, isLeftCurlyBraceNode: V, isRightCurlyBraceNode: j, isWordNode: Y, isColonNode: ie, isMediaAndSupportsKeywords: ce, isColorAdjusterFuncNode: W, lastLineHasInlineComment: K, isAtWordPlaceholderNode: de, isConfigurationNode: ue, isParenGroupNode: Fe };
      } }), Id = te({ "src/utils/line-column-to-index.js"(e, r) {
        ne(), r.exports = function(t, s) {
          let a = 0;
          for (let n = 0; n < t.line - 1; ++n)
            a = s.indexOf(`
`, a) + 1;
          return a + t.column;
        };
      } }), kd = te({ "src/language-css/loc.js"(e, r) {
        ne();
        var { skipEverythingButNewLine: t } = Pr(), s = lt(), a = Id();
        function n(c, f) {
          return typeof c.sourceIndex == "number" ? c.sourceIndex : c.source ? a(c.source.start, f) - 1 : null;
        }
        function u(c, f) {
          if (c.type === "css-comment" && c.inline)
            return t(f, c.source.startOffset);
          let F = c.nodes && s(c.nodes);
          return F && c.source && !c.source.end && (c = F), c.source && c.source.end ? a(c.source.end, f) : null;
        }
        function i(c, f) {
          c.source && (c.source.startOffset = n(c, f), c.source.endOffset = u(c, f));
          for (let F in c) {
            let _ = c[F];
            F === "source" || !_ || typeof _ != "object" || (_.type === "value-root" || _.type === "value-unknown" ? l(_, p(c), _.text || _.value) : i(_, f));
          }
        }
        function l(c, f, F) {
          c.source && (c.source.startOffset = n(c, F) + f, c.source.endOffset = u(c, F) + f);
          for (let _ in c) {
            let w = c[_];
            _ === "source" || !w || typeof w != "object" || l(w, f, F);
          }
        }
        function p(c) {
          let f = c.source.startOffset;
          return typeof c.prop == "string" && (f += c.prop.length), c.type === "css-atrule" && typeof c.name == "string" && (f += 1 + c.name.length + c.raws.afterName.match(/^\s*:?\s*/)[0].length), c.type !== "css-atrule" && c.raws && typeof c.raws.between == "string" && (f += c.raws.between.length), f;
        }
        function y(c) {
          let f = "initial", F = "initial", _, w = false, E = [];
          for (let N = 0; N < c.length; N++) {
            let x = c[N];
            switch (f) {
              case "initial":
                if (x === "'") {
                  f = "single-quotes";
                  continue;
                }
                if (x === '"') {
                  f = "double-quotes";
                  continue;
                }
                if ((x === "u" || x === "U") && c.slice(N, N + 4).toLowerCase() === "url(") {
                  f = "url", N += 3;
                  continue;
                }
                if (x === "*" && c[N - 1] === "/") {
                  f = "comment-block";
                  continue;
                }
                if (x === "/" && c[N - 1] === "/") {
                  f = "comment-inline", _ = N - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (x === "'" && c[N - 1] !== "\\" && (f = F, F = "initial"), x === `
` || x === "\r")
                  return c;
                continue;
              case "double-quotes":
                if (x === '"' && c[N - 1] !== "\\" && (f = F, F = "initial"), x === `
` || x === "\r")
                  return c;
                continue;
              case "url":
                if (x === ")" && (f = "initial"), x === `
` || x === "\r")
                  return c;
                if (x === "'") {
                  f = "single-quotes", F = "url";
                  continue;
                }
                if (x === '"') {
                  f = "double-quotes", F = "url";
                  continue;
                }
                continue;
              case "comment-block":
                x === "/" && c[N - 1] === "*" && (f = "initial");
                continue;
              case "comment-inline":
                (x === '"' || x === "'" || x === "*") && (w = true), (x === `
` || x === "\r") && (w && E.push([_, N]), f = "initial", w = false);
                continue;
            }
          }
          for (let [N, x] of E)
            c = c.slice(0, N) + c.slice(N, x).replace(/["'*]/g, " ") + c.slice(x);
          return c;
        }
        function h(c) {
          return c.source.startOffset;
        }
        function g(c) {
          return c.source.endOffset;
        }
        r.exports = { locStart: h, locEnd: g, calculateLoc: i, replaceQuotesInInlineComments: y };
      } }), Ld = te({ "src/language-css/utils/is-less-parser.js"(e, r) {
        ne();
        function t(s) {
          return s.parser === "css" || s.parser === "less";
        }
        r.exports = t;
      } }), Od = te({ "src/language-css/utils/is-scss.js"(e, r) {
        ne();
        function t(s, a) {
          return s === "less" || s === "scss" ? s === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(a);
        }
        r.exports = t;
      } }), jd = te({ "src/language-css/utils/css-units.evaluate.js"(e, r) {
        r.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), qd = te({ "src/language-css/utils/print-unit.js"(e, r) {
        ne();
        var t = jd();
        function s(a) {
          let n = a.toLowerCase();
          return Object.prototype.hasOwnProperty.call(t, n) ? t[n] : a;
        }
        r.exports = s;
      } }), Md = te({ "src/language-css/printer-postcss.js"(e, r) {
        ne();
        var t = lt(), { printNumber: s, printString: a, hasNewline: n, isFrontMatterNode: u, isNextLineEmpty: i, isNonEmptyArray: l } = Ue(), { builders: { join: p, line: y, hardline: h, softline: g, group: c, fill: f, indent: F, dedent: _, ifBreak: w, breakParent: E }, utils: { removeLines: N, getDocParts: x } } = qe(), I = Nd(), P = wd(), { insertPragma: $ } = _d(), { getAncestorNode: D, getPropOfDeclNode: T, maybeToLowerCase: m, insideValueFunctionNode: C, insideICSSRuleNode: o, insideAtRuleNode: d, insideURLFunctionInImportAtRuleNode: v, isKeyframeAtRuleKeywords: S, isWideKeywords: b, isLastNode: B, isSCSSControlDirectiveNode: k, isDetachedRulesetDeclarationNode: M, isRelationalOperatorNode: R, isEqualityOperatorNode: q, isMultiplicationNode: J, isDivisionNode: L, isAdditionNode: Q, isSubtractionNode: V, isMathOperatorNode: j, isEachKeywordNode: Y, isForKeywordNode: ie, isURLFunctionNode: ee, isIfElseKeywordNode: ce, hasComposesNode: W, hasParensAroundNode: K, hasEmptyRawBefore: de, isKeyValuePairNode: ue, isKeyInValuePairNode: Fe, isDetachedRulesetCallNode: z, isTemplatePlaceholderNode: U, isTemplatePropNode: Z, isPostcssSimpleVarNode: se, isSCSSMapItemNode: fe, isInlineValueCommentNode: ge, isHashNode: he, isLeftCurlyBraceNode: we, isRightCurlyBraceNode: ke, isWordNode: Re, isColonNode: Ne, isMediaAndSupportsKeywords: Pe, isColorAdjusterFuncNode: oe, lastLineHasInlineComment: H, isAtWordPlaceholderNode: pe, isConfigurationNode: X, isParenGroupNode: le } = Pd(), { locStart: Ae, locEnd: Ee } = kd(), De = Ld(), A = Od(), G = qd();
        function re(Te) {
          return Te.trailingComma === "es5" || Te.trailingComma === "all";
        }
        function ye(Te, je, Me) {
          let ae = Te.getValue();
          if (!ae)
            return "";
          if (typeof ae == "string")
            return ae;
          switch (ae.type) {
            case "front-matter":
              return [ae.raw, h];
            case "css-root": {
              let Ve = Ce(Te, je, Me), We = ae.raws.after.trim();
              return We.startsWith(";") && (We = We.slice(1).trim()), [Ve, We ? ` ${We}` : "", x(Ve).length > 0 ? h : ""];
            }
            case "css-comment": {
              let Ve = ae.inline || ae.raws.inline, We = je.originalText.slice(Ae(ae), Ee(ae));
              return Ve ? We.trimEnd() : We;
            }
            case "css-rule":
              return [Me("selector"), ae.important ? " !important" : "", ae.nodes ? [ae.selector && ae.selector.type === "selector-unknown" && H(ae.selector.value) ? y : " ", "{", ae.nodes.length > 0 ? F([h, Ce(Te, je, Me)]) : "", h, "}", M(ae) ? ";" : ""] : ";"];
            case "css-decl": {
              let Ve = Te.getParentNode(), { between: We } = ae.raws, Xe = We.trim(), st = Xe === ":", O = W(ae) ? N(Me("value")) : Me("value");
              return !st && H(Xe) && (O = F([h, _(O)])), [ae.raws.before.replace(/[\s;]/g, ""), Ve.type === "css-atrule" && Ve.variable || o(Te) ? ae.prop : m(ae.prop), Xe.startsWith("//") ? " " : "", Xe, ae.extend ? "" : " ", De(je) && ae.extend && ae.selector ? ["extend(", Me("selector"), ")"] : "", O, ae.raws.important ? ae.raws.important.replace(/\s*!\s*important/i, " !important") : ae.important ? " !important" : "", ae.raws.scssDefault ? ae.raws.scssDefault.replace(/\s*!default/i, " !default") : ae.scssDefault ? " !default" : "", ae.raws.scssGlobal ? ae.raws.scssGlobal.replace(/\s*!global/i, " !global") : ae.scssGlobal ? " !global" : "", ae.nodes ? [" {", F([g, Ce(Te, je, Me)]), g, "}"] : Z(ae) && !Ve.raws.semicolon && je.originalText[Ee(ae) - 1] !== ";" ? "" : je.__isHTMLStyleAttribute && B(Te, ae) ? w(";") : ";"];
            }
            case "css-atrule": {
              let Ve = Te.getParentNode(), We = U(ae) && !Ve.raws.semicolon && je.originalText[Ee(ae) - 1] !== ";";
              if (De(je)) {
                if (ae.mixin)
                  return [Me("selector"), ae.important ? " !important" : "", We ? "" : ";"];
                if (ae.function)
                  return [ae.name, Me("params"), We ? "" : ";"];
                if (ae.variable)
                  return ["@", ae.name, ": ", ae.value ? Me("value") : "", ae.raws.between.trim() ? ae.raws.between.trim() + " " : "", ae.nodes ? ["{", F([ae.nodes.length > 0 ? g : "", Ce(Te, je, Me)]), g, "}"] : "", We ? "" : ";"];
              }
              return ["@", z(ae) || ae.name.endsWith(":") ? ae.name : m(ae.name), ae.params ? [z(ae) ? "" : U(ae) ? ae.raws.afterName === "" ? "" : ae.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ae.raws.afterName) ? [h, h] : /^\s*\n/.test(ae.raws.afterName) ? h : " " : " ", Me("params")] : "", ae.selector ? F([" ", Me("selector")]) : "", ae.value ? c([" ", Me("value"), k(ae) ? K(ae) ? " " : y : ""]) : ae.name === "else" ? " " : "", ae.nodes ? [k(ae) ? "" : ae.selector && !ae.selector.nodes && typeof ae.selector.value == "string" && H(ae.selector.value) || !ae.selector && typeof ae.params == "string" && H(ae.params) ? y : " ", "{", F([ae.nodes.length > 0 ? g : "", Ce(Te, je, Me)]), g, "}"] : We ? "" : ";"];
            }
            case "media-query-list": {
              let Ve = [];
              return Te.each((We) => {
                let Xe = We.getValue();
                Xe.type === "media-query" && Xe.value === "" || Ve.push(Me());
              }, "nodes"), c(F(p(y, Ve)));
            }
            case "media-query":
              return [p(" ", Te.map(Me, "nodes")), B(Te, ae) ? "" : ","];
            case "media-type":
              return Oe(Se(ae.value, je));
            case "media-feature-expression":
              return ae.nodes ? ["(", ...Te.map(Me, "nodes"), ")"] : ae.value;
            case "media-feature":
              return m(Se(ae.value.replace(/ +/g, " "), je));
            case "media-colon":
              return [ae.value, " "];
            case "media-value":
              return Oe(Se(ae.value, je));
            case "media-keyword":
              return Se(ae.value, je);
            case "media-url":
              return Se(ae.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), je);
            case "media-unknown":
              return ae.value;
            case "selector-root":
              return c([d(Te, "custom-selector") ? [D(Te, "css-atrule").customSelector, y] : "", p([",", d(Te, ["extend", "custom-selector", "nest"]) ? y : h], Te.map(Me, "nodes"))]);
            case "selector-selector":
              return c(F(Te.map(Me, "nodes")));
            case "selector-comment":
              return ae.value;
            case "selector-string":
              return Se(ae.value, je);
            case "selector-tag": {
              let Ve = Te.getParentNode(), We = Ve && Ve.nodes.indexOf(ae), Xe = We && Ve.nodes[We - 1];
              return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", Xe.type === "selector-nesting" ? ae.value : Oe(S(Te, ae.value) ? ae.value.toLowerCase() : ae.value)];
            }
            case "selector-id":
              return ["#", ae.value];
            case "selector-class":
              return [".", Oe(Se(ae.value, je))];
            case "selector-attribute": {
              var nt;
              return ["[", ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.attribute.trim(), (nt = ae.operator) !== null && nt !== void 0 ? nt : "", ae.value ? Ie(Se(ae.value.trim(), je), je) : "", ae.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (ae.value === "+" || ae.value === ">" || ae.value === "~" || ae.value === ">>>") {
                let Xe = Te.getParentNode();
                return [Xe.type === "selector-selector" && Xe.nodes[0] === ae ? "" : y, ae.value, B(Te, ae) ? "" : " "];
              }
              let Ve = ae.value.trim().startsWith("(") ? y : "", We = Oe(Se(ae.value.trim(), je)) || y;
              return [Ve, We];
            }
            case "selector-universal":
              return [ae.namespace ? [ae.namespace === true ? "" : ae.namespace.trim(), "|"] : "", ae.value];
            case "selector-pseudo":
              return [m(ae.value), l(ae.nodes) ? c(["(", F([g, p([",", y], Te.map(Me, "nodes"))]), g, ")"]) : ""];
            case "selector-nesting":
              return ae.value;
            case "selector-unknown": {
              let Ve = D(Te, "css-rule");
              if (Ve && Ve.isSCSSNesterProperty)
                return Oe(Se(m(ae.value), je));
              let We = Te.getParentNode();
              if (We.raws && We.raws.selector) {
                let st = Ae(We), O = st + We.raws.selector.length;
                return je.originalText.slice(st, O).trim();
              }
              let Xe = Te.getParentNode(1);
              if (We.type === "value-paren_group" && Xe && Xe.type === "value-func" && Xe.value === "selector") {
                let st = Ee(We.open) + 1, O = Ae(We.close), me = je.originalText.slice(st, O).trim();
                return H(me) ? [E, me] : me;
              }
              return ae.value;
            }
            case "value-value":
            case "value-root":
              return Me("group");
            case "value-comment":
              return je.originalText.slice(Ae(ae), Ee(ae));
            case "value-comma_group": {
              let Ve = Te.getParentNode(), We = Te.getParentNode(1), Xe = T(Te), st = Xe && Ve.type === "value-value" && (Xe === "grid" || Xe.startsWith("grid-template")), O = D(Te, "css-atrule"), me = O && k(O), _e = ae.groups.some((at) => ge(at)), He = Te.map(Me, "groups"), Ge = [], it = C(Te, "url"), Qe = false, rt = false;
              for (let at = 0; at < ae.groups.length; ++at) {
                var tt;
                Ge.push(He[at]);
                let Ze = ae.groups[at - 1], Le = ae.groups[at], $e = ae.groups[at + 1], sr = ae.groups[at + 2];
                if (it) {
                  ($e && Q($e) || Q(Le)) && Ge.push(" ");
                  continue;
                }
                if (d(Te, "forward") && Le.type === "value-word" && Le.value && Ze !== void 0 && Ze.type === "value-word" && Ze.value === "as" && $e.type === "value-operator" && $e.value === "*" || !$e || Le.type === "value-word" && Le.value.endsWith("-") && pe($e))
                  continue;
                if (Le.type === "value-string" && Le.quoted) {
                  let $r = Le.value.lastIndexOf("#{"), Vr = Le.value.lastIndexOf("}");
                  $r !== -1 && Vr !== -1 ? Qe = $r > Vr : $r !== -1 ? Qe = true : Vr !== -1 && (Qe = false);
                }
                if (Qe || Ne(Le) || Ne($e) || Le.type === "value-atword" && (Le.value === "" || Le.value.endsWith("[")) || $e.type === "value-word" && $e.value.startsWith("]") || Le.value === "~" || Le.value && Le.value.includes("\\") && $e && $e.type !== "value-comment" || Ze && Ze.value && Ze.value.indexOf("\\") === Ze.value.length - 1 && Le.type === "value-operator" && Le.value === "/" || Le.value === "\\" || se(Le, $e) || he(Le) || we(Le) || ke($e) || we($e) && de($e) || ke(Le) && de($e) || Le.value === "--" && he($e))
                  continue;
                let Rr = j(Le), ou = j($e);
                if ((Rr && he($e) || ou && ke(Le)) && de($e) || !Ze && L(Le) || C(Te, "calc") && (Q(Le) || Q($e) || V(Le) || V($e)) && de($e))
                  continue;
                let qo = (Q(Le) || V(Le)) && at === 0 && ($e.type === "value-number" || $e.isHex) && We && oe(We) && !de($e), lu = sr && sr.type === "value-func" || sr && Re(sr) || Le.type === "value-func" || Re(Le), cu = $e.type === "value-func" || Re($e) || Ze && Ze.type === "value-func" || Ze && Re(Ze);
                if (!(!(J($e) || J(Le)) && !C(Te, "calc") && !qo && (L($e) && !lu || L(Le) && !cu || Q($e) && !lu || Q(Le) && !cu || V($e) || V(Le)) && (de($e) || Rr && (!Ze || Ze && j(Ze)))) && !((je.parser === "scss" || je.parser === "less") && Rr && Le.value === "-" && le($e) && Ee(Le) === Ae($e.open) && $e.open.value === "(")) {
                  if (ge(Le)) {
                    if (Ve.type === "value-paren_group") {
                      Ge.push(_(h));
                      continue;
                    }
                    Ge.push(h);
                    continue;
                  }
                  if (me && (q($e) || R($e) || ce($e) || Y(Le) || ie(Le))) {
                    Ge.push(" ");
                    continue;
                  }
                  if (O && O.name.toLowerCase() === "namespace") {
                    Ge.push(" ");
                    continue;
                  }
                  if (st) {
                    Le.source && $e.source && Le.source.start.line !== $e.source.start.line ? (Ge.push(h), rt = true) : Ge.push(" ");
                    continue;
                  }
                  if (ou) {
                    Ge.push(" ");
                    continue;
                  }
                  if (!($e && $e.value === "...") && !(pe(Le) && pe($e) && Ee(Le) === Ae($e))) {
                    if (pe(Le) && le($e) && Ee(Le) === Ae($e.open)) {
                      Ge.push(g);
                      continue;
                    }
                    if (Le.value === "with" && le($e)) {
                      Ge.push(" ");
                      continue;
                    }
                    (tt = Le.value) !== null && tt !== void 0 && tt.endsWith("#") && $e.value === "{" && le($e.group) || Ge.push(y);
                  }
                }
              }
              return _e && Ge.push(E), rt && Ge.unshift(h), me ? c(F(Ge)) : v(Te) ? c(f(Ge)) : c(F(f(Ge)));
            }
            case "value-paren_group": {
              let Ve = Te.getParentNode();
              if (Ve && ee(Ve) && (ae.groups.length === 1 || ae.groups.length > 0 && ae.groups[0].type === "value-comma_group" && ae.groups[0].groups.length > 0 && ae.groups[0].groups[0].type === "value-word" && ae.groups[0].groups[0].value.startsWith("data:")))
                return [ae.open ? Me("open") : "", p(",", Te.map(Me, "groups")), ae.close ? Me("close") : ""];
              if (!ae.open) {
                let it = Te.map(Me, "groups"), Qe = [];
                for (let rt = 0; rt < it.length; rt++)
                  rt !== 0 && Qe.push([",", y]), Qe.push(it[rt]);
                return c(F(f(Qe)));
              }
              let We = fe(Te), Xe = t(ae.groups), st = Xe && Xe.type === "value-comment", O = Fe(ae, Ve), me = X(ae, Ve), _e = me || We && !O, He = me || O, Ge = c([ae.open ? Me("open") : "", F([g, p([y], Te.map((it, Qe) => {
                let rt = it.getValue(), at = Qe === ae.groups.length - 1, Ze = [Me(), at ? "" : ","];
                if (ue(rt) && rt.type === "value-comma_group" && rt.groups && rt.groups[0].type !== "value-paren_group" && rt.groups[2] && rt.groups[2].type === "value-paren_group") {
                  let Le = x(Ze[0].contents.contents);
                  Le[1] = c(Le[1]), Ze = [c(_(Ze))];
                }
                if (!at && rt.type === "value-comma_group" && l(rt.groups)) {
                  let Le = t(rt.groups);
                  !Le.source && Le.close && (Le = Le.close), Le.source && i(je.originalText, Le, Ee) && Ze.push(h);
                }
                return Ze;
              }, "groups"))]), w(!st && A(je.parser, je.originalText) && We && re(je) ? "," : ""), g, ae.close ? Me("close") : ""], { shouldBreak: _e });
              return He ? _(Ge) : Ge;
            }
            case "value-func":
              return [ae.value, d(Te, "supports") && Pe(ae) ? " " : "", Me("group")];
            case "value-paren":
              return ae.value;
            case "value-number":
              return [Je(ae.value), G(ae.unit)];
            case "value-operator":
              return ae.value;
            case "value-word":
              return ae.isColor && ae.isHex || b(ae.value) ? ae.value.toLowerCase() : ae.value;
            case "value-colon": {
              let Ve = Te.getParentNode(), We = Ve && Ve.groups.indexOf(ae), Xe = We && Ve.groups[We - 1];
              return [ae.value, Xe && typeof Xe.value == "string" && t(Xe.value) === "\\" || C(Te, "url") ? "" : y];
            }
            case "value-comma":
              return [ae.value, " "];
            case "value-string":
              return a(ae.raws.quote + ae.value + ae.raws.quote, je);
            case "value-atword":
              return ["@", ae.value];
            case "value-unicode-range":
              return ae.value;
            case "value-unknown":
              return ae.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(ae.type)}`);
          }
        }
        function Ce(Te, je, Me) {
          let ae = [];
          return Te.each((nt, tt, Ve) => {
            let We = Ve[tt - 1];
            if (We && We.type === "css-comment" && We.text.trim() === "prettier-ignore") {
              let Xe = nt.getValue();
              ae.push(je.originalText.slice(Ae(Xe), Ee(Xe)));
            } else
              ae.push(Me());
            tt !== Ve.length - 1 && (Ve[tt + 1].type === "css-comment" && !n(je.originalText, Ae(Ve[tt + 1]), { backwards: true }) && !u(Ve[tt]) || Ve[tt + 1].type === "css-atrule" && Ve[tt + 1].name === "else" && Ve[tt].type !== "css-comment" ? ae.push(" ") : (ae.push(je.__isHTMLStyleAttribute ? y : h), i(je.originalText, nt.getValue(), Ee) && !u(Ve[tt]) && ae.push(h)));
          }, "nodes"), ae;
        }
        var Be = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, ve = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, ze = /[A-Za-z]+/g, be = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, Ye = new RegExp(Be.source + `|(${be.source})?(${ve.source})(${ze.source})?`, "g");
        function Se(Te, je) {
          return Te.replace(Be, (Me) => a(Me, je));
        }
        function Ie(Te, je) {
          let Me = je.singleQuote ? "'" : '"';
          return Te.includes('"') || Te.includes("'") ? Te : Me + Te + Me;
        }
        function Oe(Te) {
          return Te.replace(Ye, (je, Me, ae, nt, tt) => !ae && nt ? Je(nt) + m(tt || "") : je);
        }
        function Je(Te) {
          return s(Te).replace(/\.0(?=$|e)/, "");
        }
        r.exports = { print: ye, embed: P, insertPragma: $, massageAstNode: I };
      } }), Rd = te({ "src/language-css/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { singleQuote: t.singleQuote };
      } }), $d = te({ "src/language-css/parsers.js"() {
        ne();
      } }), Vd = te({ "node_modules/linguist-languages/data/CSS.json"(e, r) {
        r.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), Wd = te({ "node_modules/linguist-languages/data/PostCSS.json"(e, r) {
        r.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), Hd = te({ "node_modules/linguist-languages/data/Less.json"(e, r) {
        r.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), Gd = te({ "node_modules/linguist-languages/data/SCSS.json"(e, r) {
        r.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), Ud = te({ "src/language-css/index.js"(e, r) {
        ne();
        var t = _t(), s = Md(), a = Rd(), n = $d(), u = [t(Vd(), (l) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...l.extensions, ".wxss"] })), t(Wd(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), t(Hd(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), t(Gd(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], i = { postcss: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), Jd = te({ "src/language-handlebars/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.loc.start.offset;
        }
        function s(a) {
          return a.loc.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), zd = te({ "src/language-handlebars/clean.js"(e, r) {
        ne();
        function t(s, a) {
          if (s.type === "TextNode") {
            let n = s.chars.trim();
            if (!n)
              return null;
            a.chars = n.replace(/[\t\n\f\r ]+/g, " ");
          }
          s.type === "AttrNode" && s.name.toLowerCase() === "class" && delete a.value;
        }
        t.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), r.exports = t;
      } }), Xd = te({ "src/language-handlebars/html-void-elements.evaluate.js"(e, r) {
        r.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      } }), Kd = te({ "src/language-handlebars/utils.js"(e, r) {
        ne();
        var t = lt(), s = Xd();
        function a(x) {
          let I = x.getValue(), P = x.getParentNode(0);
          return !!(g(x, ["ElementNode"]) && t(P.children) === I || g(x, ["Block"]) && t(P.body) === I);
        }
        function n(x) {
          return x.toUpperCase() === x;
        }
        function u(x) {
          return h(x, ["ElementNode"]) && typeof x.tag == "string" && !x.tag.startsWith(":") && (n(x.tag[0]) || x.tag.includes("."));
        }
        var i = new Set(s);
        function l(x) {
          return i.has(x.toLowerCase()) && !n(x[0]);
        }
        function p(x) {
          return x.selfClosing === true || l(x.tag) || u(x) && x.children.every((I) => y(I));
        }
        function y(x) {
          return h(x, ["TextNode"]) && !/\S/.test(x.chars);
        }
        function h(x, I) {
          return x && I.includes(x.type);
        }
        function g(x, I) {
          let P = x.getParentNode(0);
          return h(P, I);
        }
        function c(x, I) {
          let P = _(x);
          return h(P, I);
        }
        function f(x, I) {
          let P = w(x);
          return h(P, I);
        }
        function F(x, I) {
          var P, $, D, T;
          let m = x.getValue(), C = (P = x.getParentNode(0)) !== null && P !== void 0 ? P : {}, o = ($ = (D = (T = C.children) !== null && T !== void 0 ? T : C.body) !== null && D !== void 0 ? D : C.parts) !== null && $ !== void 0 ? $ : [], d = o.indexOf(m);
          return d !== -1 && o[d + I];
        }
        function _(x) {
          let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return F(x, -I);
        }
        function w(x) {
          return F(x, 1);
        }
        function E(x) {
          return h(x, ["MustacheCommentStatement"]) && typeof x.value == "string" && x.value.trim() === "prettier-ignore";
        }
        function N(x) {
          let I = x.getValue(), P = _(x, 2);
          return E(I) || E(P);
        }
        r.exports = { getNextNode: w, getPreviousNode: _, hasPrettierIgnore: N, isLastNodeOfSiblings: a, isNextNodeOfSomeType: f, isNodeOfSomeType: h, isParentOfSomeType: g, isPreviousNodeOfSomeType: c, isVoid: p, isWhitespaceNode: y };
      } }), Yd = te({ "src/language-handlebars/printer-glimmer.js"(e, r) {
        ne();
        var { builders: { dedent: t, fill: s, group: a, hardline: n, ifBreak: u, indent: i, join: l, line: p, softline: y }, utils: { getDocParts: h, replaceTextEndOfLine: g } } = qe(), { getPreferredQuote: c, isNonEmptyArray: f } = Ue(), { locStart: F, locEnd: _ } = Jd(), w = zd(), { getNextNode: E, getPreviousNode: N, hasPrettierIgnore: x, isLastNodeOfSiblings: I, isNextNodeOfSomeType: P, isNodeOfSomeType: $, isParentOfSomeType: D, isPreviousNodeOfSomeType: T, isVoid: m, isWhitespaceNode: C } = Kd(), o = 2;
        function d(H, pe, X) {
          let le = H.getValue();
          if (!le)
            return "";
          if (x(H))
            return pe.originalText.slice(F(le), _(le));
          let Ae = pe.singleQuote ? "'" : '"';
          switch (le.type) {
            case "Block":
            case "Program":
            case "Template":
              return a(H.map(X, "body"));
            case "ElementNode": {
              let Ee = a(S(H, X)), De = pe.htmlWhitespaceSensitivity === "ignore" && P(H, ["ElementNode"]) ? y : "";
              if (m(le))
                return [Ee, De];
              let A = ["</", le.tag, ">"];
              return le.children.length === 0 ? [Ee, i(A), De] : pe.htmlWhitespaceSensitivity === "ignore" ? [Ee, i(b(H, pe, X)), n, i(A), De] : [Ee, i(a(b(H, pe, X))), i(A), De];
            }
            case "BlockStatement": {
              let Ee = H.getParentNode(1);
              return Ee && Ee.inverse && Ee.inverse.body.length === 1 && Ee.inverse.body[0] === le && Ee.inverse.body[0].path.parts[0] === Ee.path.parts[0] ? [ie(H, X, Ee.inverse.body[0].path.parts[0]), de(H, X, pe), ue(H, X, pe)] : [j(H, X), a([de(H, X, pe), ue(H, X, pe), ee(H, X, pe)])];
            }
            case "ElementModifierStatement":
              return a(["{{", Re(H, X), "}}"]);
            case "MustacheStatement":
              return a([k(le), Re(H, X), M(le)]);
            case "SubExpression":
              return a(["(", ke(H, X), y, ")"]);
            case "AttrNode": {
              let Ee = le.value.type === "TextNode";
              if (Ee && le.value.chars === "" && F(le.value) === _(le.value))
                return le.name;
              let A = Ee ? c(le.value.chars, Ae).quote : le.value.type === "ConcatStatement" ? c(le.value.parts.filter((re) => re.type === "TextNode").map((re) => re.chars).join(""), Ae).quote : "", G = X("value");
              return [le.name, "=", A, le.name === "class" && A ? a(i(G)) : G, A];
            }
            case "ConcatStatement":
              return H.map(X, "parts");
            case "Hash":
              return l(p, H.map(X, "pairs"));
            case "HashPair":
              return [le.key, "=", X("value")];
            case "TextNode": {
              let Ee = le.chars.replace(/{{/g, "\\{{"), De = U(H);
              if (De) {
                if (De === "class") {
                  let Ye = Ee.trim().split(/\s+/).join(" "), Se = false, Ie = false;
                  return D(H, ["ConcatStatement"]) && (T(H, ["MustacheStatement"]) && /^\s/.test(Ee) && (Se = true), P(H, ["MustacheStatement"]) && /\s$/.test(Ee) && Ye !== "" && (Ie = true)), [Se ? p : "", Ye, Ie ? p : ""];
                }
                return g(Ee);
              }
              let G = /^[\t\n\f\r ]*$/.test(Ee), re = !N(H), ye = !E(H);
              if (pe.htmlWhitespaceSensitivity !== "ignore") {
                let Ye = /^[\t\n\f\r ]*/, Se = /[\t\n\f\r ]*$/, Ie = ye && D(H, ["Template"]), Oe = re && D(H, ["Template"]);
                if (G) {
                  if (Oe || Ie)
                    return "";
                  let ae = [p], nt = Z(Ee);
                  return nt && (ae = ge(nt)), I(H) && (ae = ae.map((tt) => t(tt))), ae;
                }
                let [Je] = Ee.match(Ye), [Te] = Ee.match(Se), je = [];
                if (Je) {
                  je = [p];
                  let ae = Z(Je);
                  ae && (je = ge(ae)), Ee = Ee.replace(Ye, "");
                }
                let Me = [];
                if (Te) {
                  if (!Ie) {
                    Me = [p];
                    let ae = Z(Te);
                    ae && (Me = ge(ae)), I(H) && (Me = Me.map((nt) => t(nt)));
                  }
                  Ee = Ee.replace(Se, "");
                }
                return [...je, s(Fe(Ee)), ...Me];
              }
              let Ce = Z(Ee), Be = se(Ee), ve = fe(Ee);
              if ((re || ye) && G && D(H, ["Block", "ElementNode", "Template"]))
                return "";
              G && Ce ? (Be = Math.min(Ce, o), ve = 0) : (P(H, ["BlockStatement", "ElementNode"]) && (ve = Math.max(ve, 1)), T(H, ["BlockStatement", "ElementNode"]) && (Be = Math.max(Be, 1)));
              let ze = "", be = "";
              return ve === 0 && P(H, ["MustacheStatement"]) && (be = " "), Be === 0 && T(H, ["MustacheStatement"]) && (ze = " "), re && (Be = 0, ze = ""), ye && (ve = 0, be = ""), Ee = Ee.replace(/^[\t\n\f\r ]+/g, ze).replace(/[\t\n\f\r ]+$/, be), [...ge(Be), s(Fe(Ee)), ...ge(ve)];
            }
            case "MustacheCommentStatement": {
              let Ee = F(le), De = _(le), A = pe.originalText.charAt(Ee + 2) === "~", G = pe.originalText.charAt(De - 3) === "~", re = le.value.includes("}}") ? "--" : "";
              return ["{{", A ? "~" : "", "!", re, le.value, re, G ? "~" : "", "}}"];
            }
            case "PathExpression":
              return le.original;
            case "BooleanLiteral":
              return String(le.value);
            case "CommentStatement":
              return ["<!--", le.value, "-->"];
            case "StringLiteral": {
              if (we(H)) {
                let Ee = pe.singleQuote ? '"' : "'";
                return he(le.value, Ee);
              }
              return he(le.value, Ae);
            }
            case "NumberLiteral":
              return String(le.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(le.type));
          }
        }
        function v(H, pe) {
          return F(H) - F(pe);
        }
        function S(H, pe) {
          let X = H.getValue(), le = ["attributes", "modifiers", "comments"].filter((Ee) => f(X[Ee])), Ae = le.flatMap((Ee) => X[Ee]).sort(v);
          for (let Ee of le)
            H.each((De) => {
              let A = Ae.indexOf(De.getValue());
              Ae.splice(A, 1, [p, pe()]);
            }, Ee);
          return f(X.blockParams) && Ae.push(p, oe(X)), ["<", X.tag, i(Ae), B(X)];
        }
        function b(H, pe, X) {
          let Ae = H.getValue().children.every((Ee) => C(Ee));
          return pe.htmlWhitespaceSensitivity === "ignore" && Ae ? "" : H.map((Ee, De) => {
            let A = X();
            return De === 0 && pe.htmlWhitespaceSensitivity === "ignore" ? [y, A] : A;
          }, "children");
        }
        function B(H) {
          return m(H) ? u([y, "/>"], [" />", y]) : u([y, ">"], ">");
        }
        function k(H) {
          let pe = H.escaped === false ? "{{{" : "{{", X = H.strip && H.strip.open ? "~" : "";
          return [pe, X];
        }
        function M(H) {
          let pe = H.escaped === false ? "}}}" : "}}";
          return [H.strip && H.strip.close ? "~" : "", pe];
        }
        function R(H) {
          let pe = k(H), X = H.openStrip.open ? "~" : "";
          return [pe, X, "#"];
        }
        function q(H) {
          let pe = M(H);
          return [H.openStrip.close ? "~" : "", pe];
        }
        function J(H) {
          let pe = k(H), X = H.closeStrip.open ? "~" : "";
          return [pe, X, "/"];
        }
        function L(H) {
          let pe = M(H);
          return [H.closeStrip.close ? "~" : "", pe];
        }
        function Q(H) {
          let pe = k(H), X = H.inverseStrip.open ? "~" : "";
          return [pe, X];
        }
        function V(H) {
          let pe = M(H);
          return [H.inverseStrip.close ? "~" : "", pe];
        }
        function j(H, pe) {
          let X = H.getValue(), le = [], Ae = Pe(H, pe);
          return Ae && le.push(a(Ae)), f(X.program.blockParams) && le.push(oe(X.program)), a([R(X), Ne(H, pe), le.length > 0 ? i([p, l(p, le)]) : "", y, q(X)]);
        }
        function Y(H, pe) {
          return [pe.htmlWhitespaceSensitivity === "ignore" ? n : "", Q(H), "else", V(H)];
        }
        function ie(H, pe, X) {
          let le = H.getValue(), Ae = H.getParentNode(1);
          return a([Q(Ae), ["else", " ", X], i([p, a(Pe(H, pe)), ...f(le.program.blockParams) ? [p, oe(le.program)] : []]), y, V(Ae)]);
        }
        function ee(H, pe, X) {
          let le = H.getValue();
          return X.htmlWhitespaceSensitivity === "ignore" ? [ce(le) ? y : n, J(le), pe("path"), L(le)] : [J(le), pe("path"), L(le)];
        }
        function ce(H) {
          return $(H, ["BlockStatement"]) && H.program.body.every((pe) => C(pe));
        }
        function W(H) {
          return K(H) && H.inverse.body.length === 1 && $(H.inverse.body[0], ["BlockStatement"]) && H.inverse.body[0].path.parts[0] === H.path.parts[0];
        }
        function K(H) {
          return $(H, ["BlockStatement"]) && H.inverse;
        }
        function de(H, pe, X) {
          let le = H.getValue();
          if (ce(le))
            return "";
          let Ae = pe("program");
          return X.htmlWhitespaceSensitivity === "ignore" ? i([n, Ae]) : i(Ae);
        }
        function ue(H, pe, X) {
          let le = H.getValue(), Ae = pe("inverse"), Ee = X.htmlWhitespaceSensitivity === "ignore" ? [n, Ae] : Ae;
          return W(le) ? Ee : K(le) ? [Y(le, X), i(Ee)] : "";
        }
        function Fe(H) {
          return h(l(p, z(H)));
        }
        function z(H) {
          return H.split(/[\t\n\f\r ]+/);
        }
        function U(H) {
          for (let pe = 0; pe < 2; pe++) {
            let X = H.getParentNode(pe);
            if (X && X.type === "AttrNode")
              return X.name.toLowerCase();
          }
        }
        function Z(H) {
          return H = typeof H == "string" ? H : "", H.split(`
`).length - 1;
        }
        function se(H) {
          H = typeof H == "string" ? H : "";
          let pe = (H.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return Z(pe);
        }
        function fe(H) {
          H = typeof H == "string" ? H : "";
          let pe = (H.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return Z(pe);
        }
        function ge() {
          let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(H, o) }).fill(n);
        }
        function he(H, pe) {
          let { quote: X, regex: le } = c(H, pe);
          return [X, H.replace(le, `\\${X}`), X];
        }
        function we(H) {
          let pe = 0, X = H.getParentNode(pe);
          for (; X && $(X, ["SubExpression"]); )
            pe++, X = H.getParentNode(pe);
          return !!(X && $(H.getParentNode(pe + 1), ["ConcatStatement"]) && $(H.getParentNode(pe + 2), ["AttrNode"]));
        }
        function ke(H, pe) {
          let X = Ne(H, pe), le = Pe(H, pe);
          return le ? i([X, p, a(le)]) : X;
        }
        function Re(H, pe) {
          let X = Ne(H, pe), le = Pe(H, pe);
          return le ? [i([X, p, le]), y] : X;
        }
        function Ne(H, pe) {
          return pe("path");
        }
        function Pe(H, pe) {
          let X = H.getValue(), le = [];
          if (X.params.length > 0) {
            let Ae = H.map(pe, "params");
            le.push(...Ae);
          }
          if (X.hash && X.hash.pairs.length > 0) {
            let Ae = pe("hash");
            le.push(Ae);
          }
          return le.length === 0 ? "" : l(p, le);
        }
        function oe(H) {
          return ["as |", H.blockParams.join(" "), "|"];
        }
        r.exports = { print: d, massageAstNode: w };
      } }), Qd = te({ "src/language-handlebars/parsers.js"() {
        ne();
      } }), Zd = te({ "node_modules/linguist-languages/data/Handlebars.json"(e, r) {
        r.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), eg = te({ "src/language-handlebars/index.js"(e, r) {
        ne();
        var t = _t(), s = Yd(), a = Qd(), n = [t(Zd(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], u = { glimmer: s };
        r.exports = { languages: n, printers: u, parsers: a };
      } }), tg = te({ "src/language-graphql/pragma.js"(e, r) {
        ne();
        function t(a) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(a);
        }
        function s(a) {
          return `# @format

` + a;
        }
        r.exports = { hasPragma: t, insertPragma: s };
      } }), rg = te({ "src/language-graphql/loc.js"(e, r) {
        ne();
        function t(a) {
          return typeof a.start == "number" ? a.start : a.loc && a.loc.start;
        }
        function s(a) {
          return typeof a.end == "number" ? a.end : a.loc && a.loc.end;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), ng = te({ "src/language-graphql/printer-graphql.js"(e, r) {
        ne();
        var { builders: { join: t, hardline: s, line: a, softline: n, group: u, indent: i, ifBreak: l } } = qe(), { isNextLineEmpty: p, isNonEmptyArray: y } = Ue(), { insertPragma: h } = tg(), { locStart: g, locEnd: c } = rg();
        function f(P, $, D) {
          let T = P.getValue();
          if (!T)
            return "";
          if (typeof T == "string")
            return T;
          switch (T.kind) {
            case "Document": {
              let m = [];
              return P.each((C, o, d) => {
                m.push(D()), o !== d.length - 1 && (m.push(s), p($.originalText, C.getValue(), c) && m.push(s));
              }, "definitions"), [...m, s];
            }
            case "OperationDefinition": {
              let m = $.originalText[g(T)] !== "{", C = Boolean(T.name);
              return [m ? T.operation : "", m && C ? [" ", D("name")] : "", m && !C && y(T.variableDefinitions) ? " " : "", y(T.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", F(P, D, T), T.selectionSet ? !m && !C ? "" : " " : "", D("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", D("name"), y(T.variableDefinitions) ? u(["(", i([n, t([l("", ", "), n], P.map(D, "variableDefinitions"))]), n, ")"]) : "", " on ", D("typeCondition"), F(P, D, T), " ", D("selectionSet")];
            case "SelectionSet":
              return ["{", i([s, t(s, _(P, $, D, "selections"))]), s, "}"];
            case "Field":
              return u([T.alias ? [D("alias"), ": "] : "", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", F(P, D, T), T.selectionSet ? " " : "", D("selectionSet")]);
            case "Name":
              return T.value;
            case "StringValue": {
              if (T.block) {
                let m = T.value.replace(/"""/g, "\\$&").split(`
`);
                return m.length === 1 && (m[0] = m[0].trim()), m.every((C) => C === "") && (m.length = 0), t(s, ['"""', ...m, '"""']);
              }
              return ['"', T.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return T.value;
            case "BooleanValue":
              return T.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", D("name")];
            case "ListValue":
              return u(["[", i([n, t([l("", ", "), n], P.map(D, "values"))]), n, "]"]);
            case "ObjectValue":
              return u(["{", $.bracketSpacing && T.fields.length > 0 ? " " : "", i([n, t([l("", ", "), n], P.map(D, "fields"))]), n, l("", $.bracketSpacing && T.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [D("name"), ": ", D("value")];
            case "Directive":
              return ["@", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : ""];
            case "NamedType":
              return D("name");
            case "VariableDefinition":
              return [D("variable"), ": ", D("type"), T.defaultValue ? [" = ", D("defaultValue")] : "", F(P, D, T)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [D("description"), T.description ? s : "", T.kind === "ObjectTypeExtension" ? "extend " : "", "type ", D("name"), T.interfaces.length > 0 ? [" implements ", ...N(P, $, D)] : "", F(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
            case "FieldDefinition":
              return [D("description"), T.description ? s : "", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", ": ", D("type"), F(P, D, T)];
            case "DirectiveDefinition":
              return [D("description"), T.description ? s : "", "directive ", "@", D("name"), T.arguments.length > 0 ? u(["(", i([n, t([l("", ", "), n], _(P, $, D, "arguments"))]), n, ")"]) : "", T.repeatable ? " repeatable" : "", " on ", t(" | ", P.map(D, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [D("description"), T.description ? s : "", T.kind === "EnumTypeExtension" ? "extend " : "", "enum ", D("name"), F(P, D, T), T.values.length > 0 ? [" {", i([s, t(s, _(P, $, D, "values"))]), s, "}"] : ""];
            case "EnumValueDefinition":
              return [D("description"), T.description ? s : "", D("name"), F(P, D, T)];
            case "InputValueDefinition":
              return [D("description"), T.description ? T.description.block ? s : a : "", D("name"), ": ", D("type"), T.defaultValue ? [" = ", D("defaultValue")] : "", F(P, D, T)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [D("description"), T.description ? s : "", T.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", D("name"), F(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", F(P, D, T), ...T.operationTypes.length > 0 ? [" {", i([s, t(s, _(P, $, D, "operationTypes"))]), s, "}"] : []];
            case "SchemaDefinition":
              return [D("description"), T.description ? s : "", "schema", F(P, D, T), " {", T.operationTypes.length > 0 ? i([s, t(s, _(P, $, D, "operationTypes"))]) : "", s, "}"];
            case "OperationTypeDefinition":
              return [D("operation"), ": ", D("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [D("description"), T.description ? s : "", T.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", D("name"), T.interfaces.length > 0 ? [" implements ", ...N(P, $, D)] : "", F(P, D, T), T.fields.length > 0 ? [" {", i([s, t(s, _(P, $, D, "fields"))]), s, "}"] : ""];
            case "FragmentSpread":
              return ["...", D("name"), F(P, D, T)];
            case "InlineFragment":
              return ["...", T.typeCondition ? [" on ", D("typeCondition")] : "", F(P, D, T), " ", D("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return u([D("description"), T.description ? s : "", u([T.kind === "UnionTypeExtension" ? "extend " : "", "union ", D("name"), F(P, D, T), T.types.length > 0 ? [" =", l("", " "), i([l([a, "  "]), t([a, "| "], P.map(D, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [D("description"), T.description ? s : "", T.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", D("name"), F(P, D, T)];
            case "NonNullType":
              return [D("type"), "!"];
            case "ListType":
              return ["[", D("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(T.kind));
          }
        }
        function F(P, $, D) {
          if (D.directives.length === 0)
            return "";
          let T = t(a, P.map($, "directives"));
          return D.kind === "FragmentDefinition" || D.kind === "OperationDefinition" ? u([a, T]) : [" ", u(i([n, T]))];
        }
        function _(P, $, D, T) {
          return P.map((m, C, o) => {
            let d = D();
            return C < o.length - 1 && p($.originalText, m.getValue(), c) ? [d, s] : d;
          }, T);
        }
        function w(P) {
          return P.kind && P.kind !== "Comment";
        }
        function E(P) {
          let $ = P.getValue();
          if ($.kind === "Comment")
            return "#" + $.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify($));
        }
        function N(P, $, D) {
          let T = P.getNode(), m = [], { interfaces: C } = T, o = P.map((d) => D(d), "interfaces");
          for (let d = 0; d < C.length; d++) {
            let v = C[d];
            m.push(o[d]);
            let S = C[d + 1];
            if (S) {
              let b = $.originalText.slice(v.loc.end, S.loc.start), B = b.includes("#"), k = b.replace(/#.*/g, "").trim();
              m.push(k === "," ? "," : " &", B ? a : " ");
            }
          }
          return m;
        }
        function x(P, $) {
          P.kind === "StringValue" && P.block && !P.value.includes(`
`) && ($.value = $.value.trim());
        }
        x.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function I(P) {
          var $;
          let D = P.getValue();
          return D == null || ($ = D.comments) === null || $ === void 0 ? void 0 : $.some((T) => T.value.trim() === "prettier-ignore");
        }
        r.exports = { print: f, massageAstNode: x, hasPrettierIgnore: I, insertPragma: h, printComment: E, canAttachComment: w };
      } }), ug = te({ "src/language-graphql/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { bracketSpacing: t.bracketSpacing };
      } }), sg = te({ "src/language-graphql/parsers.js"() {
        ne();
      } }), ig = te({ "node_modules/linguist-languages/data/GraphQL.json"(e, r) {
        r.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), ag = te({ "src/language-graphql/index.js"(e, r) {
        ne();
        var t = _t(), s = ng(), a = ug(), n = sg(), u = [t(ig(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], i = { graphql: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), Po = te({ "node_modules/collapse-white-space/index.js"(e, r) {
        ne(), r.exports = t;
        function t(s) {
          return String(s).replace(/\s+/g, " ");
        }
      } }), Io = te({ "src/language-markdown/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), og = te({ "src/language-markdown/constants.evaluate.js"(e, r) {
        r.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), iu = te({ "src/language-markdown/utils.js"(e, r) {
        ne();
        var { getLast: t } = Ue(), { locStart: s, locEnd: a } = Io(), { cjkPattern: n, kPattern: u, punctuationPattern: i } = og(), l = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], p = [...l, "tableCell", "paragraph", "heading"], y = new RegExp(u), h = new RegExp(i);
        function g(E, N) {
          let x = "non-cjk", I = "cj-letter", P = "k-letter", $ = "cjk-punctuation", D = [], T = (N.proseWrap === "preserve" ? E : E.replace(new RegExp(`(${n})
(${n})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [C, o] of T.entries()) {
            if (C % 2 === 1) {
              D.push({ type: "whitespace", value: /\n/.test(o) ? `
` : " " });
              continue;
            }
            if ((C === 0 || C === T.length - 1) && o === "")
              continue;
            let d = o.split(new RegExp(`(${n})`));
            for (let [v, S] of d.entries())
              if (!((v === 0 || v === d.length - 1) && S === "")) {
                if (v % 2 === 0) {
                  S !== "" && m({ type: "word", value: S, kind: x, hasLeadingPunctuation: h.test(S[0]), hasTrailingPunctuation: h.test(t(S)) });
                  continue;
                }
                m(h.test(S) ? { type: "word", value: S, kind: $, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: S, kind: y.test(S) ? P : I, hasLeadingPunctuation: false, hasTrailingPunctuation: false });
              }
          }
          return D;
          function m(C) {
            let o = t(D);
            o && o.type === "word" && (o.kind === x && C.kind === I && !o.hasTrailingPunctuation || o.kind === I && C.kind === x && !C.hasLeadingPunctuation ? D.push({ type: "whitespace", value: " " }) : !d(x, $) && ![o.value, C.value].some((v) => /\u3000/.test(v)) && D.push({ type: "whitespace", value: "" })), D.push(C);
            function d(v, S) {
              return o.kind === v && C.kind === S || o.kind === S && C.kind === v;
            }
          }
        }
        function c(E, N) {
          let [, x, I, P] = N.slice(E.position.start.offset, E.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: x, marker: I, leadingSpaces: P };
        }
        function f(E, N) {
          if (!E.ordered || E.children.length < 2)
            return false;
          let x = Number(c(E.children[0], N.originalText).numberText), I = Number(c(E.children[1], N.originalText).numberText);
          if (x === 0 && E.children.length > 2) {
            let P = Number(c(E.children[2], N.originalText).numberText);
            return I === 1 && P === 1;
          }
          return I === 1;
        }
        function F(E, N) {
          let { value: x } = E;
          return E.position.end.offset === N.length && x.endsWith(`
`) && N.endsWith(`
`) ? x.slice(0, -1) : x;
        }
        function _(E, N) {
          return function x(I, P, $) {
            let D = Object.assign({}, N(I, P, $));
            return D.children && (D.children = D.children.map((T, m) => x(T, m, [D, ...$]))), D;
          }(E, null, []);
        }
        function w(E) {
          if ((E == null ? void 0 : E.type) !== "link" || E.children.length !== 1)
            return false;
          let [N] = E.children;
          return s(E) === s(N) && a(E) === a(N);
        }
        r.exports = { mapAst: _, splitText: g, punctuationPattern: i, getFencedCodeBlockValue: F, getOrderedListItemInfo: c, hasGitDiffFriendlyOrderedList: f, INLINE_NODE_TYPES: l, INLINE_NODE_WRAPPER_TYPES: p, isAutolink: w };
      } }), lg = te({ "src/language-markdown/embed.js"(e, r) {
        ne();
        var { inferParserByLanguage: t, getMaxContinuousCount: s } = Ue(), { builders: { hardline: a, markAsRoot: n }, utils: { replaceEndOfLine: u } } = qe(), i = su(), { getFencedCodeBlockValue: l } = iu();
        function p(y, h, g, c) {
          let f = y.getValue();
          if (f.type === "code" && f.lang !== null) {
            let F = t(f.lang, c);
            if (F) {
              let _ = c.__inJsTemplate ? "~" : "`", w = _.repeat(Math.max(3, s(f.value, _) + 1)), E = { parser: F };
              f.lang === "tsx" && (E.filepath = "dummy.tsx");
              let N = g(l(f, c.originalText), E, { stripTrailingHardline: true });
              return n([w, f.lang, f.meta ? " " + f.meta : "", a, u(N), a, w]);
            }
          }
          switch (f.type) {
            case "front-matter":
              return i(f, g);
            case "importExport":
              return [g(f.value, { parser: "babel" }, { stripTrailingHardline: true }), a];
            case "jsx":
              return g(`<$>${f.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: true });
          }
          return null;
        }
        r.exports = p;
      } }), ko = te({ "src/language-markdown/pragma.js"(e, r) {
        ne();
        var t = _o(), s = ["format", "prettier"];
        function a(n) {
          let u = `@(${s.join("|")})`, i = new RegExp([`<!--\\s*${u}\\s*-->`, `{\\s*\\/\\*\\s*${u}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${u}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), l = n.match(i);
          return (l == null ? void 0 : l.index) === 0;
        }
        r.exports = { startWithPragma: a, hasPragma: (n) => a(t(n).content.trimStart()), insertPragma: (n) => {
          let u = t(n), i = `<!-- @${s[0]} -->`;
          return u.frontMatter ? `${u.frontMatter.raw}

${i}

${u.content}` : `${i}

${u.content}`;
        } };
      } }), cg = te({ "src/language-markdown/print-preprocess.js"(e, r) {
        ne();
        var t = lt(), { getOrderedListItemInfo: s, mapAst: a, splitText: n } = iu(), u = /^.$/su;
        function i(w, E) {
          return w = y(w, E), w = c(w), w = p(w, E), w = F(w, E), w = _(w, E), w = f(w, E), w = l(w), w = h(w), w;
        }
        function l(w) {
          return a(w, (E) => E.type !== "import" && E.type !== "export" ? E : Object.assign(Object.assign({}, E), {}, { type: "importExport" }));
        }
        function p(w, E) {
          return a(w, (N) => N.type !== "inlineCode" || E.proseWrap === "preserve" ? N : Object.assign(Object.assign({}, N), {}, { value: N.value.replace(/\s+/g, " ") }));
        }
        function y(w, E) {
          return a(w, (N) => N.type !== "text" || N.value === "*" || N.value === "_" || !u.test(N.value) || N.position.end.offset - N.position.start.offset === N.value.length ? N : Object.assign(Object.assign({}, N), {}, { value: E.originalText.slice(N.position.start.offset, N.position.end.offset) }));
        }
        function h(w) {
          return g(w, (E, N) => E.type === "importExport" && N.type === "importExport", (E, N) => ({ type: "importExport", value: E.value + `

` + N.value, position: { start: E.position.start, end: N.position.end } }));
        }
        function g(w, E, N) {
          return a(w, (x) => {
            if (!x.children)
              return x;
            let I = x.children.reduce((P, $) => {
              let D = t(P);
              return D && E(D, $) ? P.splice(-1, 1, N(D, $)) : P.push($), P;
            }, []);
            return Object.assign(Object.assign({}, x), {}, { children: I });
          });
        }
        function c(w) {
          return g(w, (E, N) => E.type === "text" && N.type === "text", (E, N) => ({ type: "text", value: E.value + N.value, position: { start: E.position.start, end: N.position.end } }));
        }
        function f(w, E) {
          return a(w, (N, x, I) => {
            let [P] = I;
            if (N.type !== "text")
              return N;
            let { value: $ } = N;
            return P.type === "paragraph" && (x === 0 && ($ = $.trimStart()), x === P.children.length - 1 && ($ = $.trimEnd())), { type: "sentence", position: N.position, children: n($, E) };
          });
        }
        function F(w, E) {
          return a(w, (N, x, I) => {
            if (N.type === "code") {
              let P = /^\n?(?: {4,}|\t)/.test(E.originalText.slice(N.position.start.offset, N.position.end.offset));
              if (N.isIndented = P, P)
                for (let $ = 0; $ < I.length; $++) {
                  let D = I[$];
                  if (D.hasIndentedCodeblock)
                    break;
                  D.type === "list" && (D.hasIndentedCodeblock = true);
                }
            }
            return N;
          });
        }
        function _(w, E) {
          return a(w, (I, P, $) => {
            if (I.type === "list" && I.children.length > 0) {
              for (let D = 0; D < $.length; D++) {
                let T = $[D];
                if (T.type === "list" && !T.isAligned)
                  return I.isAligned = false, I;
              }
              I.isAligned = x(I);
            }
            return I;
          });
          function N(I) {
            return I.children.length === 0 ? -1 : I.children[0].position.start.column - 1;
          }
          function x(I) {
            if (!I.ordered)
              return true;
            let [P, $] = I.children;
            if (s(P, E.originalText).leadingSpaces.length > 1)
              return true;
            let T = N(P);
            if (T === -1)
              return false;
            if (I.children.length === 1)
              return T % E.tabWidth === 0;
            let m = N($);
            return T !== m ? false : T % E.tabWidth === 0 ? true : s($, E.originalText).leadingSpaces.length > 1;
          }
        }
        r.exports = i;
      } }), pg = te({ "src/language-markdown/clean.js"(e, r) {
        ne();
        var t = Po(), { isFrontMatterNode: s } = Ue(), { startWithPragma: a } = ko(), n = /* @__PURE__ */ new Set(["position", "raw"]);
        function u(i, l, p) {
          if ((i.type === "front-matter" || i.type === "code" || i.type === "yaml" || i.type === "import" || i.type === "export" || i.type === "jsx") && delete l.value, i.type === "list" && delete l.isAligned, (i.type === "list" || i.type === "listItem") && (delete l.spread, delete l.loose), i.type === "text" || (i.type === "inlineCode" && (l.value = i.value.replace(/[\t\n ]+/g, " ")), i.type === "wikiLink" && (l.value = i.value.trim().replace(/[\t\n]+/g, " ")), (i.type === "definition" || i.type === "linkReference" || i.type === "imageReference") && (l.label = t(i.label)), (i.type === "definition" || i.type === "link" || i.type === "image") && i.title && (l.title = i.title.replace(/\\(["')])/g, "$1")), p && p.type === "root" && p.children.length > 0 && (p.children[0] === i || s(p.children[0]) && p.children[1] === i) && i.type === "html" && a(i.value)))
            return null;
        }
        u.ignoredProperties = n, r.exports = u;
      } }), fg = te({ "src/language-markdown/printer-markdown.js"(e, r) {
        ne();
        var t = Po(), { getLast: s, getMinNotPresentContinuousCount: a, getMaxContinuousCount: n, getStringWidth: u, isNonEmptyArray: i } = Ue(), { builders: { breakParent: l, join: p, line: y, literalline: h, markAsRoot: g, hardline: c, softline: f, ifBreak: F, fill: _, align: w, indent: E, group: N, hardlineWithoutBreakParent: x }, utils: { normalizeDoc: I, replaceTextEndOfLine: P }, printer: { printDocToString: $ } } = qe(), D = lg(), { insertPragma: T } = ko(), { locStart: m, locEnd: C } = Io(), o = cg(), d = pg(), { getFencedCodeBlockValue: v, hasGitDiffFriendlyOrderedList: S, splitText: b, punctuationPattern: B, INLINE_NODE_TYPES: k, INLINE_NODE_WRAPPER_TYPES: M, isAutolink: R } = iu(), q = /* @__PURE__ */ new Set(["importExport"]), J = ["heading", "tableCell", "link", "wikiLink"], L = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function Q(oe, H, pe) {
          let X = oe.getValue();
          if (ge(oe))
            return b(H.originalText.slice(X.position.start.offset, X.position.end.offset), H).map((le) => le.type === "word" ? le.value : le.value === "" ? "" : W(oe, le.value, H));
          switch (X.type) {
            case "front-matter":
              return H.originalText.slice(X.position.start.offset, X.position.end.offset);
            case "root":
              return X.children.length === 0 ? "" : [I(de(oe, H, pe)), q.has(z(X).type) ? "" : c];
            case "paragraph":
              return ue(oe, H, pe, { postprocessor: _ });
            case "sentence":
              return ue(oe, H, pe);
            case "word": {
              let le = X.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${B})(_+)`, `(_+)(${B}|$)`].join("|"), "g"), (De, A, G, re, ye) => (G ? `${A}${G}` : `${re}${ye}`).replace(/_/g, "\\_")), Ae = (De, A, G) => De.type === "sentence" && G === 0, Ee = (De, A, G) => R(De.children[G - 1]);
              return le !== X.value && (oe.match(void 0, Ae, Ee) || oe.match(void 0, Ae, (De, A, G) => De.type === "emphasis" && G === 0, Ee)) && (le = le.replace(/^(\\?[*_])+/, (De) => De.replace(/\\/g, ""))), le;
            }
            case "whitespace": {
              let le = oe.getParentNode(), Ae = le.children.indexOf(X), Ee = le.children[Ae + 1], De = Ee && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(Ee.value) ? "never" : H.proseWrap;
              return W(oe, X.value, { proseWrap: De });
            }
            case "emphasis": {
              let le;
              if (R(X.children[0]))
                le = H.originalText[X.position.start.offset];
              else {
                let Ae = oe.getParentNode(), Ee = Ae.children.indexOf(X), De = Ae.children[Ee - 1], A = Ae.children[Ee + 1];
                le = De && De.type === "sentence" && De.children.length > 0 && s(De.children).type === "word" && !s(De.children).hasTrailingPunctuation || A && A.type === "sentence" && A.children.length > 0 && A.children[0].type === "word" && !A.children[0].hasLeadingPunctuation || ce(oe, "emphasis") ? "*" : "_";
              }
              return [le, ue(oe, H, pe), le];
            }
            case "strong":
              return ["**", ue(oe, H, pe), "**"];
            case "delete":
              return ["~~", ue(oe, H, pe), "~~"];
            case "inlineCode": {
              let le = a(X.value, "`"), Ae = "`".repeat(le || 1), Ee = le && !/^\s/.test(X.value) ? " " : "";
              return [Ae, Ee, X.value, Ee, Ae];
            }
            case "wikiLink": {
              let le = "";
              return H.proseWrap === "preserve" ? le = X.value : le = X.value.replace(/[\t\n]+/g, " "), ["[[", le, "]]"];
            }
            case "link":
              switch (H.originalText[X.position.start.offset]) {
                case "<": {
                  let le = "mailto:";
                  return ["<", X.url.startsWith(le) && H.originalText.slice(X.position.start.offset + 1, X.position.start.offset + 1 + le.length) !== le ? X.url.slice(le.length) : X.url, ">"];
                }
                case "[":
                  return ["[", ue(oe, H, pe), "](", he(X.url, ")"), we(X.title, H), ")"];
                default:
                  return H.originalText.slice(X.position.start.offset, X.position.end.offset);
              }
            case "image":
              return ["![", X.alt || "", "](", he(X.url, ")"), we(X.title, H), ")"];
            case "blockquote":
              return ["> ", w("> ", ue(oe, H, pe))];
            case "heading":
              return ["#".repeat(X.depth) + " ", ue(oe, H, pe)];
            case "code": {
              if (X.isIndented) {
                let Ee = " ".repeat(4);
                return w(Ee, [Ee, ...P(X.value, c)]);
              }
              let le = H.__inJsTemplate ? "~" : "`", Ae = le.repeat(Math.max(3, n(X.value, le) + 1));
              return [Ae, X.lang || "", X.meta ? " " + X.meta : "", c, ...P(v(X, H.originalText), c), c, Ae];
            }
            case "html": {
              let le = oe.getParentNode(), Ae = le.type === "root" && s(le.children) === X ? X.value.trimEnd() : X.value, Ee = /^<!--.*-->$/s.test(Ae);
              return P(Ae, Ee ? c : g(h));
            }
            case "list": {
              let le = Y(X, oe.getParentNode()), Ae = S(X, H);
              return ue(oe, H, pe, { processor: (Ee, De) => {
                let A = re(), G = Ee.getValue();
                if (G.children.length === 2 && G.children[1].type === "html" && G.children[0].position.start.column !== G.children[1].position.start.column)
                  return [A, V(Ee, H, pe, A)];
                return [A, w(" ".repeat(A.length), V(Ee, H, pe, A))];
                function re() {
                  let ye = X.ordered ? (De === 0 ? X.start : Ae ? 1 : X.start + De) + (le % 2 === 0 ? ". " : ") ") : le % 2 === 0 ? "- " : "* ";
                  return X.isAligned || X.hasIndentedCodeblock ? j(ye, H) : ye;
                }
              } });
            }
            case "thematicBreak": {
              let le = ee(oe, "list");
              return le === -1 ? "---" : Y(oe.getParentNode(le), oe.getParentNode(le + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", ue(oe, H, pe), "]", X.referenceType === "full" ? Ne(X) : X.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (X.referenceType) {
                case "full":
                  return ["![", X.alt || "", "]", Ne(X)];
                default:
                  return ["![", X.alt, "]", X.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let le = H.proseWrap === "always" ? y : " ";
              return N([Ne(X), ":", E([le, he(X.url), X.title === null ? "" : [le, we(X.title, H, false)]])]);
            }
            case "footnote":
              return ["[^", ue(oe, H, pe), "]"];
            case "footnoteReference":
              return Pe(X);
            case "footnoteDefinition": {
              let le = oe.getParentNode().children[oe.getName() + 1], Ae = X.children.length === 1 && X.children[0].type === "paragraph" && (H.proseWrap === "never" || H.proseWrap === "preserve" && X.children[0].position.start.line === X.children[0].position.end.line);
              return [Pe(X), ": ", Ae ? ue(oe, H, pe) : N([w(" ".repeat(4), ue(oe, H, pe, { processor: (Ee, De) => De === 0 ? N([f, pe()]) : pe() })), le && le.type === "footnoteDefinition" ? f : ""])];
            }
            case "table":
              return K(oe, H, pe);
            case "tableCell":
              return ue(oe, H, pe);
            case "break":
              return /\s/.test(H.originalText[X.position.start.offset]) ? ["  ", g(h)] : ["\\", c];
            case "liquidNode":
              return P(X.value, c);
            case "importExport":
              return [X.value, c];
            case "esComment":
              return ["{/* ", X.value, " */}"];
            case "jsx":
              return X.value;
            case "math":
              return ["$$", c, X.value ? [...P(X.value, c), c] : "", "$$"];
            case "inlineMath":
              return H.originalText.slice(m(X), C(X));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(X.type)}`);
          }
        }
        function V(oe, H, pe, X) {
          let le = oe.getValue(), Ae = le.checked === null ? "" : le.checked ? "[x] " : "[ ] ";
          return [Ae, ue(oe, H, pe, { processor: (Ee, De) => {
            if (De === 0 && Ee.getValue().type !== "list")
              return w(" ".repeat(Ae.length), pe());
            let A = " ".repeat(ke(H.tabWidth - X.length, 0, 3));
            return [A, w(A, pe())];
          } })];
        }
        function j(oe, H) {
          let pe = X();
          return oe + " ".repeat(pe >= 4 ? 0 : pe);
          function X() {
            let le = oe.length % H.tabWidth;
            return le === 0 ? 0 : H.tabWidth - le;
          }
        }
        function Y(oe, H) {
          return ie(oe, H, (pe) => pe.ordered === oe.ordered);
        }
        function ie(oe, H, pe) {
          let X = -1;
          for (let le of H.children)
            if (le.type === oe.type && pe(le) ? X++ : X = -1, le === oe)
              return X;
        }
        function ee(oe, H) {
          let pe = Array.isArray(H) ? H : [H], X = -1, le;
          for (; le = oe.getParentNode(++X); )
            if (pe.includes(le.type))
              return X;
          return -1;
        }
        function ce(oe, H) {
          let pe = ee(oe, H);
          return pe === -1 ? null : oe.getParentNode(pe);
        }
        function W(oe, H, pe) {
          if (pe.proseWrap === "preserve" && H === `
`)
            return c;
          let X = pe.proseWrap === "always" && !ce(oe, J);
          return H !== "" ? X ? y : " " : X ? f : "";
        }
        function K(oe, H, pe) {
          let X = oe.getValue(), le = [], Ae = oe.map((ye) => ye.map((Ce, Be) => {
            let ve = $(pe(), H).formatted, ze = u(ve);
            return le[Be] = Math.max(le[Be] || 3, ze), { text: ve, width: ze };
          }, "children"), "children"), Ee = A(false);
          if (H.proseWrap !== "never")
            return [l, Ee];
          let De = A(true);
          return [l, N(F(De, Ee))];
          function A(ye) {
            let Ce = [re(Ae[0], ye), G(ye)];
            return Ae.length > 1 && Ce.push(p(x, Ae.slice(1).map((Be) => re(Be, ye)))), p(x, Ce);
          }
          function G(ye) {
            return `| ${le.map((Be, ve) => {
              let ze = X.align[ve], be = ze === "center" || ze === "left" ? ":" : "-", Ye = ze === "center" || ze === "right" ? ":" : "-", Se = ye ? "-" : "-".repeat(Be - 2);
              return `${be}${Se}${Ye}`;
            }).join(" | ")} |`;
          }
          function re(ye, Ce) {
            return `| ${ye.map((ve, ze) => {
              let { text: be, width: Ye } = ve;
              if (Ce)
                return be;
              let Se = le[ze] - Ye, Ie = X.align[ze], Oe = 0;
              Ie === "right" ? Oe = Se : Ie === "center" && (Oe = Math.floor(Se / 2));
              let Je = Se - Oe;
              return `${" ".repeat(Oe)}${be}${" ".repeat(Je)}`;
            }).join(" | ")} |`;
          }
        }
        function de(oe, H, pe) {
          let X = [], le = null, { children: Ae } = oe.getValue();
          for (let [Ee, De] of Ae.entries())
            switch (U(De)) {
              case "start":
                le === null && (le = { index: Ee, offset: De.position.end.offset });
                break;
              case "end":
                le !== null && (X.push({ start: le, end: { index: Ee, offset: De.position.start.offset } }), le = null);
                break;
            }
          return ue(oe, H, pe, { processor: (Ee, De) => {
            if (X.length > 0) {
              let A = X[0];
              if (De === A.start.index)
                return [Fe(Ae[A.start.index]), H.originalText.slice(A.start.offset, A.end.offset), Fe(Ae[A.end.index])];
              if (A.start.index < De && De < A.end.index)
                return false;
              if (De === A.end.index)
                return X.shift(), false;
            }
            return pe();
          } });
        }
        function ue(oe, H, pe) {
          let X = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: le } = X, Ae = X.processor || (() => pe()), Ee = oe.getValue(), De = [], A;
          return oe.each((G, re) => {
            let ye = G.getValue(), Ce = Ae(G, re);
            if (Ce !== false) {
              let Be = { parts: De, prevNode: A, parentNode: Ee, options: H };
              Z(ye, Be) && (De.push(c), A && q.has(A.type) || (se(ye, Be) || fe(ye, Be)) && De.push(c), fe(ye, Be) && De.push(c)), De.push(Ce), A = ye;
            }
          }, "children"), le ? le(De) : De;
        }
        function Fe(oe) {
          if (oe.type === "html")
            return oe.value;
          if (oe.type === "paragraph" && Array.isArray(oe.children) && oe.children.length === 1 && oe.children[0].type === "esComment")
            return ["{/* ", oe.children[0].value, " */}"];
        }
        function z(oe) {
          let H = oe;
          for (; i(H.children); )
            H = s(H.children);
          return H;
        }
        function U(oe) {
          let H;
          if (oe.type === "html")
            H = oe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let pe;
            oe.type === "esComment" ? pe = oe : oe.type === "paragraph" && oe.children.length === 1 && oe.children[0].type === "esComment" && (pe = oe.children[0]), pe && (H = pe.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return H ? H[1] || "next" : false;
        }
        function Z(oe, H) {
          let pe = H.parts.length === 0, X = k.includes(oe.type), le = oe.type === "html" && M.includes(H.parentNode.type);
          return !pe && !X && !le;
        }
        function se(oe, H) {
          var pe, X, le;
          let Ee = (H.prevNode && H.prevNode.type) === oe.type && L.has(oe.type), De = H.parentNode.type === "listItem" && !H.parentNode.loose, A = ((pe = H.prevNode) === null || pe === void 0 ? void 0 : pe.type) === "listItem" && H.prevNode.loose, G = U(H.prevNode) === "next", re = oe.type === "html" && ((X = H.prevNode) === null || X === void 0 ? void 0 : X.type) === "html" && H.prevNode.position.end.line + 1 === oe.position.start.line, ye = oe.type === "html" && H.parentNode.type === "listItem" && ((le = H.prevNode) === null || le === void 0 ? void 0 : le.type) === "paragraph" && H.prevNode.position.end.line + 1 === oe.position.start.line;
          return A || !(Ee || De || G || re || ye);
        }
        function fe(oe, H) {
          let pe = H.prevNode && H.prevNode.type === "list", X = oe.type === "code" && oe.isIndented;
          return pe && X;
        }
        function ge(oe) {
          let H = ce(oe, ["linkReference", "imageReference"]);
          return H && (H.type !== "linkReference" || H.referenceType !== "full");
        }
        function he(oe) {
          let H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pe = [" ", ...Array.isArray(H) ? H : [H]];
          return new RegExp(pe.map((X) => `\\${X}`).join("|")).test(oe) ? `<${oe}>` : oe;
        }
        function we(oe, H) {
          let pe = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
          if (!oe)
            return "";
          if (pe)
            return " " + we(oe, H, false);
          if (oe = oe.replace(/\\(["')])/g, "$1"), oe.includes('"') && oe.includes("'") && !oe.includes(")"))
            return `(${oe})`;
          let X = oe.split("'").length - 1, le = oe.split('"').length - 1, Ae = X > le ? '"' : le > X || H.singleQuote ? "'" : '"';
          return oe = oe.replace(/\\/, "\\\\"), oe = oe.replace(new RegExp(`(${Ae})`, "g"), "\\$1"), `${Ae}${oe}${Ae}`;
        }
        function ke(oe, H, pe) {
          return oe < H ? H : oe > pe ? pe : oe;
        }
        function Re(oe) {
          let H = Number(oe.getName());
          if (H === 0)
            return false;
          let pe = oe.getParentNode().children[H - 1];
          return U(pe) === "next";
        }
        function Ne(oe) {
          return `[${t(oe.label)}]`;
        }
        function Pe(oe) {
          return `[^${oe.label}]`;
        }
        r.exports = { preprocess: o, print: Q, embed: D, massageAstNode: d, hasPrettierIgnore: Re, insertPragma: T };
      } }), Dg = te({ "src/language-markdown/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { proseWrap: t.proseWrap, singleQuote: t.singleQuote };
      } }), mg = te({ "src/language-markdown/parsers.js"() {
        ne();
      } }), _a = te({ "node_modules/linguist-languages/data/Markdown.json"(e, r) {
        r.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), dg = te({ "src/language-markdown/index.js"(e, r) {
        ne();
        var t = _t(), s = fg(), a = Dg(), n = mg(), u = [t(_a(), (l) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...l.filenames, "README"], extensions: l.extensions.filter((p) => p !== ".mdx") })), t(_a(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], i = { mdast: s };
        r.exports = { languages: u, options: a, printers: i, parsers: n };
      } }), gg = te({ "src/language-html/clean.js"(e, r) {
        ne();
        var { isFrontMatterNode: t } = Ue(), s = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function a(n, u) {
          if (n.type === "text" || n.type === "comment" || t(n) || n.type === "yaml" || n.type === "toml")
            return null;
          n.type === "attribute" && delete u.value, n.type === "docType" && delete u.value;
        }
        a.ignoredProperties = s, r.exports = a;
      } }), yg = te({ "src/language-html/constants.evaluate.js"(e, r) {
        r.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), hg = te({ "src/language-html/utils/is-unknown-namespace.js"(e, r) {
        ne();
        function t(s) {
          return s.type === "element" && !s.hasExplicitNamespace && !["html", "svg"].includes(s.namespace);
        }
        r.exports = t;
      } }), Rt = te({ "src/language-html/utils/index.js"(e, r) {
        ne();
        var { inferParserByLanguage: t, isFrontMatterNode: s } = Ue(), { builders: { line: a, hardline: n, join: u }, utils: { getDocParts: i, replaceTextEndOfLine: l } } = qe(), { CSS_DISPLAY_TAGS: p, CSS_DISPLAY_DEFAULT: y, CSS_WHITE_SPACE_TAGS: h, CSS_WHITE_SPACE_DEFAULT: g } = yg(), c = hg(), f = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), F = (A) => A.replace(/^[\t\n\f\r ]+/, ""), _ = (A) => A.replace(/[\t\n\f\r ]+$/, ""), w = (A) => F(_(A)), E = (A) => A.replace(/^[\t\f\r ]*\n/g, ""), N = (A) => E(_(A)), x = (A) => A.split(/[\t\n\f\r ]+/), I = (A) => A.match(/^[\t\n\f\r ]*/)[0], P = (A) => {
          let [, G, re, ye] = A.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: G, trailingWhitespace: ye, text: re };
        }, $ = (A) => /[\t\n\f\r ]/.test(A);
        function D(A, G) {
          return !!(A.type === "ieConditionalComment" && A.lastChild && !A.lastChild.isSelfClosing && !A.lastChild.endSourceSpan || A.type === "ieConditionalComment" && !A.complete || se(A) && A.children.some((re) => re.type !== "text" && re.type !== "interpolation") || X(A, G) && !o(A) && A.type !== "interpolation");
        }
        function T(A) {
          return A.type === "attribute" || !A.parent || !A.prev ? false : m(A.prev);
        }
        function m(A) {
          return A.type === "comment" && A.value.trim() === "prettier-ignore";
        }
        function C(A) {
          return A.type === "text" || A.type === "comment";
        }
        function o(A) {
          return A.type === "element" && (A.fullName === "script" || A.fullName === "style" || A.fullName === "svg:style" || c(A) && (A.name === "script" || A.name === "style"));
        }
        function d(A) {
          return A.children && !o(A);
        }
        function v(A) {
          return o(A) || A.type === "interpolation" || S(A);
        }
        function S(A) {
          return we(A).startsWith("pre");
        }
        function b(A, G) {
          let re = ye();
          if (re && !A.prev && A.parent && A.parent.tagDefinition && A.parent.tagDefinition.ignoreFirstLf)
            return A.type === "interpolation";
          return re;
          function ye() {
            return s(A) ? false : (A.type === "text" || A.type === "interpolation") && A.prev && (A.prev.type === "text" || A.prev.type === "interpolation") ? true : !A.parent || A.parent.cssDisplay === "none" ? false : se(A.parent) ? true : !(!A.prev && (A.parent.type === "root" || se(A) && A.parent || o(A.parent) || H(A.parent, G) || !ue(A.parent.cssDisplay)) || A.prev && !U(A.prev.cssDisplay));
          }
        }
        function B(A, G) {
          return s(A) ? false : (A.type === "text" || A.type === "interpolation") && A.next && (A.next.type === "text" || A.next.type === "interpolation") ? true : !A.parent || A.parent.cssDisplay === "none" ? false : se(A.parent) ? true : !(!A.next && (A.parent.type === "root" || se(A) && A.parent || o(A.parent) || H(A.parent, G) || !Fe(A.parent.cssDisplay)) || A.next && !z(A.next.cssDisplay));
        }
        function k(A) {
          return Z(A.cssDisplay) && !o(A);
        }
        function M(A) {
          return s(A) || A.next && A.sourceSpan.end && A.sourceSpan.end.line + 1 < A.next.sourceSpan.start.line;
        }
        function R(A) {
          return q(A) || A.type === "element" && A.children.length > 0 && (["body", "script", "style"].includes(A.name) || A.children.some((G) => ee(G))) || A.firstChild && A.firstChild === A.lastChild && A.firstChild.type !== "text" && V(A.firstChild) && (!A.lastChild.isTrailingSpaceSensitive || j(A.lastChild));
        }
        function q(A) {
          return A.type === "element" && A.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(A.name) || A.cssDisplay.startsWith("table") && A.cssDisplay !== "table-cell");
        }
        function J(A) {
          return Y(A) || A.prev && L(A.prev) || Q(A);
        }
        function L(A) {
          return Y(A) || A.type === "element" && A.fullName === "br" || Q(A);
        }
        function Q(A) {
          return V(A) && j(A);
        }
        function V(A) {
          return A.hasLeadingSpaces && (A.prev ? A.prev.sourceSpan.end.line < A.sourceSpan.start.line : A.parent.type === "root" || A.parent.startSourceSpan.end.line < A.sourceSpan.start.line);
        }
        function j(A) {
          return A.hasTrailingSpaces && (A.next ? A.next.sourceSpan.start.line > A.sourceSpan.end.line : A.parent.type === "root" || A.parent.endSourceSpan && A.parent.endSourceSpan.start.line > A.sourceSpan.end.line);
        }
        function Y(A) {
          switch (A.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(A.name);
          }
          return false;
        }
        function ie(A) {
          return A.lastChild ? ie(A.lastChild) : A;
        }
        function ee(A) {
          return A.children && A.children.some((G) => G.type !== "text");
        }
        function ce(A) {
          let { type: G, lang: re } = A.attrMap;
          if (G === "module" || G === "text/javascript" || G === "text/babel" || G === "application/javascript" || re === "jsx")
            return "babel";
          if (G === "application/x-typescript" || re === "ts" || re === "tsx")
            return "typescript";
          if (G === "text/markdown")
            return "markdown";
          if (G === "text/html")
            return "html";
          if (G && (G.endsWith("json") || G.endsWith("importmap")) || G === "speculationrules")
            return "json";
          if (G === "text/x-handlebars-template")
            return "glimmer";
        }
        function W(A, G) {
          let { lang: re } = A.attrMap;
          if (!re || re === "postcss" || re === "css")
            return "css";
          if (re === "scss")
            return "scss";
          if (re === "less")
            return "less";
          if (re === "stylus")
            return t("stylus", G);
        }
        function K(A, G) {
          if (A.name === "script" && !A.attrMap.src)
            return !A.attrMap.lang && !A.attrMap.type ? "babel" : ce(A);
          if (A.name === "style")
            return W(A, G);
          if (G && X(A, G))
            return ce(A) || !("src" in A.attrMap) && t(A.attrMap.lang, G);
        }
        function de(A) {
          return A === "block" || A === "list-item" || A.startsWith("table");
        }
        function ue(A) {
          return !de(A) && A !== "inline-block";
        }
        function Fe(A) {
          return !de(A) && A !== "inline-block";
        }
        function z(A) {
          return !de(A);
        }
        function U(A) {
          return !de(A);
        }
        function Z(A) {
          return !de(A) && A !== "inline-block";
        }
        function se(A) {
          return we(A).startsWith("pre");
        }
        function fe(A, G) {
          let re = 0;
          for (let ye = A.stack.length - 1; ye >= 0; ye--) {
            let Ce = A.stack[ye];
            Ce && typeof Ce == "object" && !Array.isArray(Ce) && G(Ce) && re++;
          }
          return re;
        }
        function ge(A, G) {
          let re = A;
          for (; re; ) {
            if (G(re))
              return true;
            re = re.parent;
          }
          return false;
        }
        function he(A, G) {
          if (A.prev && A.prev.type === "comment") {
            let ye = A.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (ye)
              return ye[1];
          }
          let re = false;
          if (A.type === "element" && A.namespace === "svg")
            if (ge(A, (ye) => ye.fullName === "svg:foreignObject"))
              re = true;
            else
              return A.name === "svg" ? "inline-block" : "block";
          switch (G.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return G.parser === "vue" && A.parent && A.parent.type === "root" ? "block" : A.type === "element" && (!A.namespace || re || c(A)) && p[A.name] || y;
          }
        }
        function we(A) {
          return A.type === "element" && (!A.namespace || c(A)) && h[A.name] || g;
        }
        function ke(A) {
          let G = Number.POSITIVE_INFINITY;
          for (let re of A.split(`
`)) {
            if (re.length === 0)
              continue;
            if (!f.has(re[0]))
              return 0;
            let ye = I(re).length;
            re.length !== ye && ye < G && (G = ye);
          }
          return G === Number.POSITIVE_INFINITY ? 0 : G;
        }
        function Re(A) {
          let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke(A);
          return G === 0 ? A : A.split(`
`).map((re) => re.slice(G)).join(`
`);
        }
        function Ne(A, G) {
          let re = 0;
          for (let ye = 0; ye < A.length; ye++)
            A[ye] === G && re++;
          return re;
        }
        function Pe(A) {
          return A.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var oe = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function H(A, G) {
          return pe(A, G) && !oe.has(A.fullName);
        }
        function pe(A, G) {
          return G.parser === "vue" && A.type === "element" && A.parent.type === "root" && A.fullName.toLowerCase() !== "html";
        }
        function X(A, G) {
          return pe(A, G) && (H(A, G) || A.attrMap.lang && A.attrMap.lang !== "html");
        }
        function le(A) {
          let G = A.fullName;
          return G.charAt(0) === "#" || G === "slot-scope" || G === "v-slot" || G.startsWith("v-slot:");
        }
        function Ae(A, G) {
          let re = A.parent;
          if (!pe(re, G))
            return false;
          let ye = re.fullName, Ce = A.fullName;
          return ye === "script" && Ce === "setup" || ye === "style" && Ce === "vars";
        }
        function Ee(A) {
          let G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : A.value;
          return A.parent.isWhitespaceSensitive ? A.parent.isIndentationSensitive ? l(G) : l(Re(N(G)), n) : i(u(a, x(G)));
        }
        function De(A, G) {
          return pe(A, G) && A.name === "script";
        }
        r.exports = { htmlTrim: w, htmlTrimPreserveIndentation: N, hasHtmlWhitespace: $, getLeadingAndTrailingHtmlWhitespace: P, canHaveInterpolation: d, countChars: Ne, countParents: fe, dedentString: Re, forceBreakChildren: q, forceBreakContent: R, forceNextEmptyLine: M, getLastDescendant: ie, getNodeCssStyleDisplay: he, getNodeCssStyleWhiteSpace: we, hasPrettierIgnore: T, inferScriptParser: K, isVueCustomBlock: H, isVueNonHtmlBlock: X, isVueScriptTag: De, isVueSlotAttribute: le, isVueSfcBindingsAttribute: Ae, isVueSfcBlock: pe, isDanglingSpaceSensitiveNode: k, isIndentationSensitiveNode: S, isLeadingSpaceSensitiveNode: b, isPreLikeNode: se, isScriptLikeTag: o, isTextLikeNode: C, isTrailingSpaceSensitiveNode: B, isWhitespaceSensitiveNode: v, isUnknownNamespace: c, preferHardlineAsLeadingSpaces: J, preferHardlineAsTrailingSpaces: L, shouldPreserveContent: D, unescapeQuoteEntities: Pe, getTextValueParts: Ee };
      } }), vg = te({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true }), e.$EOF = 0, e.$BSPACE = 8, e.$TAB = 9, e.$LF = 10, e.$VTAB = 11, e.$FF = 12, e.$CR = 13, e.$SPACE = 32, e.$BANG = 33, e.$DQ = 34, e.$HASH = 35, e.$$ = 36, e.$PERCENT = 37, e.$AMPERSAND = 38, e.$SQ = 39, e.$LPAREN = 40, e.$RPAREN = 41, e.$STAR = 42, e.$PLUS = 43, e.$COMMA = 44, e.$MINUS = 45, e.$PERIOD = 46, e.$SLASH = 47, e.$COLON = 58, e.$SEMICOLON = 59, e.$LT = 60, e.$EQ = 61, e.$GT = 62, e.$QUESTION = 63, e.$0 = 48, e.$7 = 55, e.$9 = 57, e.$A = 65, e.$E = 69, e.$F = 70, e.$X = 88, e.$Z = 90, e.$LBRACKET = 91, e.$BACKSLASH = 92, e.$RBRACKET = 93, e.$CARET = 94, e.$_ = 95, e.$a = 97, e.$b = 98, e.$e = 101, e.$f = 102, e.$n = 110, e.$r = 114, e.$t = 116, e.$u = 117, e.$v = 118, e.$x = 120, e.$z = 122, e.$LBRACE = 123, e.$BAR = 124, e.$RBRACE = 125, e.$NBSP = 160, e.$PIPE = 124, e.$TILDA = 126, e.$AT = 64, e.$BT = 96;
        function r(i) {
          return i >= e.$TAB && i <= e.$SPACE || i == e.$NBSP;
        }
        e.isWhitespace = r;
        function t(i) {
          return e.$0 <= i && i <= e.$9;
        }
        e.isDigit = t;
        function s(i) {
          return i >= e.$a && i <= e.$z || i >= e.$A && i <= e.$Z;
        }
        e.isAsciiLetter = s;
        function a(i) {
          return i >= e.$a && i <= e.$f || i >= e.$A && i <= e.$F || t(i);
        }
        e.isAsciiHexDigit = a;
        function n(i) {
          return i === e.$LF || i === e.$CR;
        }
        e.isNewLine = n;
        function u(i) {
          return e.$0 <= i && i <= e.$7;
        }
        e.isOctalDigit = u;
      } }), Cg = te({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = class {
          constructor(s, a, n) {
            this.filePath = s, this.name = a, this.members = n;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        e.StaticSymbol = r;
        var t = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(s, a, n) {
            n = n || [];
            let u = n.length ? `.${n.join(".")}` : "", i = `"${s}".${a}${u}`, l = this.cache.get(i);
            return l || (l = new r(s, a, n), this.cache.set(i, l)), l;
          }
        };
        e.StaticSymbolCache = t;
      } }), Eg = te({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = /-+([a-z0-9])/g;
        function t(o) {
          return o.replace(r, function() {
            for (var d = arguments.length, v = new Array(d), S = 0; S < d; S++)
              v[S] = arguments[S];
            return v[1].toUpperCase();
          });
        }
        e.dashCaseToCamelCase = t;
        function s(o, d) {
          return n(o, ":", d);
        }
        e.splitAtColon = s;
        function a(o, d) {
          return n(o, ".", d);
        }
        e.splitAtPeriod = a;
        function n(o, d, v) {
          let S = o.indexOf(d);
          return S == -1 ? v : [o.slice(0, S).trim(), o.slice(S + 1).trim()];
        }
        function u(o, d, v) {
          return Array.isArray(o) ? d.visitArray(o, v) : E(o) ? d.visitStringMap(o, v) : o == null || typeof o == "string" || typeof o == "number" || typeof o == "boolean" ? d.visitPrimitive(o, v) : d.visitOther(o, v);
        }
        e.visitValue = u;
        function i(o) {
          return o != null;
        }
        e.isDefined = i;
        function l(o) {
          return o === void 0 ? null : o;
        }
        e.noUndefined = l;
        var p = class {
          visitArray(o, d) {
            return o.map((v) => u(v, this, d));
          }
          visitStringMap(o, d) {
            let v = {};
            return Object.keys(o).forEach((S) => {
              v[S] = u(o[S], this, d);
            }), v;
          }
          visitPrimitive(o, d) {
            return o;
          }
          visitOther(o, d) {
            return o;
          }
        };
        e.ValueTransformer = p, e.SyncAsync = { assertSync: (o) => {
          if (P(o))
            throw new Error("Illegal state: value cannot be a promise");
          return o;
        }, then: (o, d) => P(o) ? o.then(d) : d(o), all: (o) => o.some(P) ? Promise.all(o) : o };
        function y(o) {
          throw new Error(`Internal Error: ${o}`);
        }
        e.error = y;
        function h(o, d) {
          let v = Error(o);
          return v[g] = true, d && (v[c] = d), v;
        }
        e.syntaxError = h;
        var g = "ngSyntaxError", c = "ngParseErrors";
        function f(o) {
          return o[g];
        }
        e.isSyntaxError = f;
        function F(o) {
          return o[c] || [];
        }
        e.getParseErrors = F;
        function _(o) {
          return o.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        e.escapeRegExp = _;
        var w = Object.getPrototypeOf({});
        function E(o) {
          return typeof o == "object" && o !== null && Object.getPrototypeOf(o) === w;
        }
        function N(o) {
          let d = "";
          for (let v = 0; v < o.length; v++) {
            let S = o.charCodeAt(v);
            if (S >= 55296 && S <= 56319 && o.length > v + 1) {
              let b = o.charCodeAt(v + 1);
              b >= 56320 && b <= 57343 && (v++, S = (S - 55296 << 10) + b - 56320 + 65536);
            }
            S <= 127 ? d += String.fromCharCode(S) : S <= 2047 ? d += String.fromCharCode(S >> 6 & 31 | 192, S & 63 | 128) : S <= 65535 ? d += String.fromCharCode(S >> 12 | 224, S >> 6 & 63 | 128, S & 63 | 128) : S <= 2097151 && (d += String.fromCharCode(S >> 18 & 7 | 240, S >> 12 & 63 | 128, S >> 6 & 63 | 128, S & 63 | 128));
          }
          return d;
        }
        e.utf8Encode = N;
        function x(o) {
          if (typeof o == "string")
            return o;
          if (o instanceof Array)
            return "[" + o.map(x).join(", ") + "]";
          if (o == null)
            return "" + o;
          if (o.overriddenName)
            return `${o.overriddenName}`;
          if (o.name)
            return `${o.name}`;
          if (!o.toString)
            return "object";
          let d = o.toString();
          if (d == null)
            return "" + d;
          let v = d.indexOf(`
`);
          return v === -1 ? d : d.substring(0, v);
        }
        e.stringify = x;
        function I(o) {
          return typeof o == "function" && o.hasOwnProperty("__forward_ref__") ? o() : o;
        }
        e.resolveForwardRef = I;
        function P(o) {
          return !!o && typeof o.then == "function";
        }
        e.isPromise = P;
        var $ = class {
          constructor(o) {
            this.full = o;
            let d = o.split(".");
            this.major = d[0], this.minor = d[1], this.patch = d.slice(2).join(".");
          }
        };
        e.Version = $;
        var D = typeof window < "u" && window, T = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, m = typeof globalThis < "u" && globalThis, C = m || D || T;
        e.global = C;
      } }), Fg = te({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = Cg(), t = Eg(), s = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function a(v) {
          return v.replace(/\W/g, "_");
        }
        e.sanitizeIdentifier = a;
        var n = 0;
        function u(v) {
          if (!v || !v.reference)
            return null;
          let S = v.reference;
          if (S instanceof r.StaticSymbol)
            return S.name;
          if (S.__anonymousType)
            return S.__anonymousType;
          let b = t.stringify(S);
          return b.indexOf("(") >= 0 ? (b = `anonymous_${n++}`, S.__anonymousType = b) : b = a(b), b;
        }
        e.identifierName = u;
        function i(v) {
          let S = v.reference;
          return S instanceof r.StaticSymbol ? S.filePath : `./${t.stringify(S)}`;
        }
        e.identifierModuleUrl = i;
        function l(v, S) {
          return `View_${u({ reference: v })}_${S}`;
        }
        e.viewClassName = l;
        function p(v) {
          return `RenderType_${u({ reference: v })}`;
        }
        e.rendererTypeName = p;
        function y(v) {
          return `HostView_${u({ reference: v })}`;
        }
        e.hostViewClassName = y;
        function h(v) {
          return `${u({ reference: v })}NgFactory`;
        }
        e.componentFactoryName = h;
        var g;
        (function(v) {
          v[v.Pipe = 0] = "Pipe", v[v.Directive = 1] = "Directive", v[v.NgModule = 2] = "NgModule", v[v.Injectable = 3] = "Injectable";
        })(g = e.CompileSummaryKind || (e.CompileSummaryKind = {}));
        function c(v) {
          return v.value != null ? a(v.value) : u(v.identifier);
        }
        e.tokenName = c;
        function f(v) {
          return v.identifier != null ? v.identifier.reference : v.value;
        }
        e.tokenReference = f;
        var F = class {
          constructor() {
            let { moduleUrl: v, styles: S, styleUrls: b } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = v || null, this.styles = P(S), this.styleUrls = P(b);
          }
        };
        e.CompileStylesheetMetadata = F;
        var _ = class {
          constructor(v) {
            let { encapsulation: S, template: b, templateUrl: B, htmlAst: k, styles: M, styleUrls: R, externalStylesheets: q, animations: J, ngContentSelectors: L, interpolation: Q, isInline: V, preserveWhitespaces: j } = v;
            if (this.encapsulation = S, this.template = b, this.templateUrl = B, this.htmlAst = k, this.styles = P(M), this.styleUrls = P(R), this.externalStylesheets = P(q), this.animations = J ? D(J) : [], this.ngContentSelectors = L || [], Q && Q.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = Q, this.isInline = V, this.preserveWhitespaces = j;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        e.CompileTemplateMetadata = _;
        var w = class {
          static create(v) {
            let { isHost: S, type: b, isComponent: B, selector: k, exportAs: M, changeDetection: R, inputs: q, outputs: J, host: L, providers: Q, viewProviders: V, queries: j, guards: Y, viewQueries: ie, entryComponents: ee, template: ce, componentViewType: W, rendererType: K, componentFactory: de } = v, ue = {}, Fe = {}, z = {};
            L != null && Object.keys(L).forEach((se) => {
              let fe = L[se], ge = se.match(s);
              ge === null ? z[se] = fe : ge[1] != null ? Fe[ge[1]] = fe : ge[2] != null && (ue[ge[2]] = fe);
            });
            let U = {};
            q == null ? void 0 : q.forEach((se) => {
              let fe = t.splitAtColon(se, [se, se]);
              U[fe[0]] = fe[1];
            });
            let Z = {};
            return J == null ? void 0 : J.forEach((se) => {
              let fe = t.splitAtColon(se, [se, se]);
              Z[fe[0]] = fe[1];
            }), new w({ isHost: S, type: b, isComponent: !!B, selector: k, exportAs: M, changeDetection: R, inputs: U, outputs: Z, hostListeners: ue, hostProperties: Fe, hostAttributes: z, providers: Q, viewProviders: V, queries: j, guards: Y, viewQueries: ie, entryComponents: ee, template: ce, componentViewType: W, rendererType: K, componentFactory: de });
          }
          constructor(v) {
            let { isHost: S, type: b, isComponent: B, selector: k, exportAs: M, changeDetection: R, inputs: q, outputs: J, hostListeners: L, hostProperties: Q, hostAttributes: V, providers: j, viewProviders: Y, queries: ie, guards: ee, viewQueries: ce, entryComponents: W, template: K, componentViewType: de, rendererType: ue, componentFactory: Fe } = v;
            this.isHost = !!S, this.type = b, this.isComponent = B, this.selector = k, this.exportAs = M, this.changeDetection = R, this.inputs = q, this.outputs = J, this.hostListeners = L, this.hostProperties = Q, this.hostAttributes = V, this.providers = P(j), this.viewProviders = P(Y), this.queries = P(ie), this.guards = ee, this.viewQueries = P(ce), this.entryComponents = P(W), this.template = K, this.componentViewType = de, this.rendererType = ue, this.componentFactory = Fe;
          }
          toSummary() {
            return { summaryKind: g.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        e.CompileDirectiveMetadata = w;
        var E = class {
          constructor(v) {
            let { type: S, name: b, pure: B } = v;
            this.type = S, this.name = b, this.pure = !!B;
          }
          toSummary() {
            return { summaryKind: g.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        e.CompilePipeMetadata = E;
        var N = class {
        };
        e.CompileShallowModuleMetadata = N;
        var x = class {
          constructor(v) {
            let { type: S, providers: b, declaredDirectives: B, exportedDirectives: k, declaredPipes: M, exportedPipes: R, entryComponents: q, bootstrapComponents: J, importedModules: L, exportedModules: Q, schemas: V, transitiveModule: j, id: Y } = v;
            this.type = S || null, this.declaredDirectives = P(B), this.exportedDirectives = P(k), this.declaredPipes = P(M), this.exportedPipes = P(R), this.providers = P(b), this.entryComponents = P(q), this.bootstrapComponents = P(J), this.importedModules = P(L), this.exportedModules = P(Q), this.schemas = P(V), this.id = Y || null, this.transitiveModule = j || null;
          }
          toSummary() {
            let v = this.transitiveModule;
            return { summaryKind: g.NgModule, type: this.type, entryComponents: v.entryComponents, providers: v.providers, modules: v.modules, exportedDirectives: v.exportedDirectives, exportedPipes: v.exportedPipes };
          }
        };
        e.CompileNgModuleMetadata = x;
        var I = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(v, S) {
            this.providers.push({ provider: v, module: S });
          }
          addDirective(v) {
            this.directivesSet.has(v.reference) || (this.directivesSet.add(v.reference), this.directives.push(v));
          }
          addExportedDirective(v) {
            this.exportedDirectivesSet.has(v.reference) || (this.exportedDirectivesSet.add(v.reference), this.exportedDirectives.push(v));
          }
          addPipe(v) {
            this.pipesSet.has(v.reference) || (this.pipesSet.add(v.reference), this.pipes.push(v));
          }
          addExportedPipe(v) {
            this.exportedPipesSet.has(v.reference) || (this.exportedPipesSet.add(v.reference), this.exportedPipes.push(v));
          }
          addModule(v) {
            this.modulesSet.has(v.reference) || (this.modulesSet.add(v.reference), this.modules.push(v));
          }
          addEntryComponent(v) {
            this.entryComponentsSet.has(v.componentType) || (this.entryComponentsSet.add(v.componentType), this.entryComponents.push(v));
          }
        };
        e.TransitiveCompileNgModuleMetadata = I;
        function P(v) {
          return v || [];
        }
        var $ = class {
          constructor(v, S) {
            let { useClass: b, useValue: B, useExisting: k, useFactory: M, deps: R, multi: q } = S;
            this.token = v, this.useClass = b || null, this.useValue = B, this.useExisting = k, this.useFactory = M || null, this.dependencies = R || null, this.multi = !!q;
          }
        };
        e.ProviderMeta = $;
        function D(v) {
          return v.reduce((S, b) => {
            let B = Array.isArray(b) ? D(b) : b;
            return S.concat(B);
          }, []);
        }
        e.flatten = D;
        function T(v) {
          return v.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function m(v, S, b) {
          let B;
          return b.isInline ? S.type.reference instanceof r.StaticSymbol ? B = `${S.type.reference.filePath}.${S.type.reference.name}.html` : B = `${u(v)}/${u(S.type)}.html` : B = b.templateUrl, S.type.reference instanceof r.StaticSymbol ? B : T(B);
        }
        e.templateSourceUrl = m;
        function C(v, S) {
          let b = v.moduleUrl.split(/\/\\/g), B = b[b.length - 1];
          return T(`css/${S}${B}.ngstyle.js`);
        }
        e.sharedStylesheetJitUrl = C;
        function o(v) {
          return T(`${u(v.type)}/module.ngfactory.js`);
        }
        e.ngModuleJitUrl = o;
        function d(v, S) {
          return T(`${u(v)}/${u(S.type)}.ngfactory.js`);
        }
        e.templateJitUrl = d;
      } }), Ag = te({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(e) {
        ne(), Object.defineProperty(e, "__esModule", { value: true });
        var r = vg(), t = Fg(), s = class {
          constructor(y, h, g, c) {
            this.file = y, this.offset = h, this.line = g, this.col = c;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(y) {
            let h = this.file.content, g = h.length, c = this.offset, f = this.line, F = this.col;
            for (; c > 0 && y < 0; )
              if (c--, y++, h.charCodeAt(c) == r.$LF) {
                f--;
                let w = h.substr(0, c - 1).lastIndexOf(String.fromCharCode(r.$LF));
                F = w > 0 ? c - w : c;
              } else
                F--;
            for (; c < g && y > 0; ) {
              let _ = h.charCodeAt(c);
              c++, y--, _ == r.$LF ? (f++, F = 0) : F++;
            }
            return new s(this.file, c, f, F);
          }
          getContext(y, h) {
            let g = this.file.content, c = this.offset;
            if (c != null) {
              c > g.length - 1 && (c = g.length - 1);
              let f = c, F = 0, _ = 0;
              for (; F < y && c > 0 && (c--, F++, !(g[c] == `
` && ++_ == h)); )
                ;
              for (F = 0, _ = 0; F < y && f < g.length - 1 && (f++, F++, !(g[f] == `
` && ++_ == h)); )
                ;
              return { before: g.substring(c, this.offset), after: g.substring(this.offset, f + 1) };
            }
            return null;
          }
        };
        e.ParseLocation = s;
        var a = class {
          constructor(y, h) {
            this.content = y, this.url = h;
          }
        };
        e.ParseSourceFile = a;
        var n = class {
          constructor(y, h) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = y, this.end = h, this.details = g;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        e.ParseSourceSpan = n, e.EMPTY_PARSE_LOCATION = new s(new a("", ""), 0, 0, 0), e.EMPTY_SOURCE_SPAN = new n(e.EMPTY_PARSE_LOCATION, e.EMPTY_PARSE_LOCATION);
        var u;
        (function(y) {
          y[y.WARNING = 0] = "WARNING", y[y.ERROR = 1] = "ERROR";
        })(u = e.ParseErrorLevel || (e.ParseErrorLevel = {}));
        var i = class {
          constructor(y, h) {
            let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u.ERROR;
            this.span = y, this.msg = h, this.level = g;
          }
          contextualMessage() {
            let y = this.span.start.getContext(100, 3);
            return y ? `${this.msg} ("${y.before}[${u[this.level]} ->]${y.after}")` : this.msg;
          }
          toString() {
            let y = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${y}`;
          }
        };
        e.ParseError = i;
        function l(y, h) {
          let g = t.identifierModuleUrl(h), c = g != null ? `in ${y} ${t.identifierName(h)} in ${g}` : `in ${y} ${t.identifierName(h)}`, f = new a("", c);
          return new n(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }
        e.typeSourceSpan = l;
        function p(y, h, g) {
          let c = `in ${y} ${h} in ${g}`, f = new a("", c);
          return new n(new s(f, -1, -1, -1), new s(f, -1, -1, -1));
        }
        e.r3JitTypeSourceSpan = p;
      } }), Sg = te({ "src/language-html/print-preprocess.js"(e, r) {
        ne();
        var { ParseSourceSpan: t } = Ag(), { htmlTrim: s, getLeadingAndTrailingHtmlWhitespace: a, hasHtmlWhitespace: n, canHaveInterpolation: u, getNodeCssStyleDisplay: i, isDanglingSpaceSensitiveNode: l, isIndentationSensitiveNode: p, isLeadingSpaceSensitiveNode: y, isTrailingSpaceSensitiveNode: h, isWhitespaceSensitiveNode: g, isVueScriptTag: c } = Rt(), f = [_, w, N, I, P, T, $, D, m, x, C];
        function F(o, d) {
          for (let v of f)
            v(o, d);
          return o;
        }
        function _(o) {
          o.walk((d) => {
            if (d.type === "element" && d.tagDefinition.ignoreFirstLf && d.children.length > 0 && d.children[0].type === "text" && d.children[0].value[0] === `
`) {
              let v = d.children[0];
              v.value.length === 1 ? d.removeChild(v) : v.value = v.value.slice(1);
            }
          });
        }
        function w(o) {
          let d = (v) => v.type === "element" && v.prev && v.prev.type === "ieConditionalStartComment" && v.prev.sourceSpan.end.offset === v.startSourceSpan.start.offset && v.firstChild && v.firstChild.type === "ieConditionalEndComment" && v.firstChild.sourceSpan.start.offset === v.startSourceSpan.end.offset;
          o.walk((v) => {
            if (v.children)
              for (let S = 0; S < v.children.length; S++) {
                let b = v.children[S];
                if (!d(b))
                  continue;
                let B = b.prev, k = b.firstChild;
                v.removeChild(B), S--;
                let M = new t(B.sourceSpan.start, k.sourceSpan.end), R = new t(M.start, b.sourceSpan.end);
                b.condition = B.condition, b.sourceSpan = R, b.startSourceSpan = M, b.removeChild(k);
              }
          });
        }
        function E(o, d, v) {
          o.walk((S) => {
            if (S.children)
              for (let b = 0; b < S.children.length; b++) {
                let B = S.children[b];
                if (B.type !== "text" && !d(B))
                  continue;
                B.type !== "text" && (B.type = "text", B.value = v(B));
                let k = B.prev;
                !k || k.type !== "text" || (k.value += B.value, k.sourceSpan = new t(k.sourceSpan.start, B.sourceSpan.end), S.removeChild(B), b--);
              }
          });
        }
        function N(o) {
          return E(o, (d) => d.type === "cdata", (d) => `<![CDATA[${d.value}]]>`);
        }
        function x(o) {
          let d = (v) => v.type === "element" && v.attrs.length === 0 && v.children.length === 1 && v.firstChild.type === "text" && !n(v.children[0].value) && !v.firstChild.hasLeadingSpaces && !v.firstChild.hasTrailingSpaces && v.isLeadingSpaceSensitive && !v.hasLeadingSpaces && v.isTrailingSpaceSensitive && !v.hasTrailingSpaces && v.prev && v.prev.type === "text" && v.next && v.next.type === "text";
          o.walk((v) => {
            if (v.children)
              for (let S = 0; S < v.children.length; S++) {
                let b = v.children[S];
                if (!d(b))
                  continue;
                let B = b.prev, k = b.next;
                B.value += `<${b.rawName}>` + b.firstChild.value + `</${b.rawName}>` + k.value, B.sourceSpan = new t(B.sourceSpan.start, k.sourceSpan.end), B.isTrailingSpaceSensitive = k.isTrailingSpaceSensitive, B.hasTrailingSpaces = k.hasTrailingSpaces, v.removeChild(b), S--, v.removeChild(k);
              }
          });
        }
        function I(o, d) {
          if (d.parser === "html")
            return;
          let v = /{{(.+?)}}/s;
          o.walk((S) => {
            if (u(S))
              for (let b of S.children) {
                if (b.type !== "text")
                  continue;
                let B = b.sourceSpan.start, k = null, M = b.value.split(v);
                for (let R = 0; R < M.length; R++, B = k) {
                  let q = M[R];
                  if (R % 2 === 0) {
                    k = B.moveBy(q.length), q.length > 0 && S.insertChildBefore(b, { type: "text", value: q, sourceSpan: new t(B, k) });
                    continue;
                  }
                  k = B.moveBy(q.length + 4), S.insertChildBefore(b, { type: "interpolation", sourceSpan: new t(B, k), children: q.length === 0 ? [] : [{ type: "text", value: q, sourceSpan: new t(B.moveBy(2), k.moveBy(-2)) }] });
                }
                S.removeChild(b);
              }
          });
        }
        function P(o) {
          o.walk((d) => {
            if (!d.children)
              return;
            if (d.children.length === 0 || d.children.length === 1 && d.children[0].type === "text" && s(d.children[0].value).length === 0) {
              d.hasDanglingSpaces = d.children.length > 0, d.children = [];
              return;
            }
            let v = g(d), S = p(d);
            if (!v)
              for (let b = 0; b < d.children.length; b++) {
                let B = d.children[b];
                if (B.type !== "text")
                  continue;
                let { leadingWhitespace: k, text: M, trailingWhitespace: R } = a(B.value), q = B.prev, J = B.next;
                M ? (B.value = M, B.sourceSpan = new t(B.sourceSpan.start.moveBy(k.length), B.sourceSpan.end.moveBy(-R.length)), k && (q && (q.hasTrailingSpaces = true), B.hasLeadingSpaces = true), R && (B.hasTrailingSpaces = true, J && (J.hasLeadingSpaces = true))) : (d.removeChild(B), b--, (k || R) && (q && (q.hasTrailingSpaces = true), J && (J.hasLeadingSpaces = true)));
              }
            d.isWhitespaceSensitive = v, d.isIndentationSensitive = S;
          });
        }
        function $(o) {
          o.walk((d) => {
            d.isSelfClosing = !d.children || d.type === "element" && (d.tagDefinition.isVoid || d.startSourceSpan === d.endSourceSpan);
          });
        }
        function D(o, d) {
          o.walk((v) => {
            v.type === "element" && (v.hasHtmComponentClosingTag = v.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(d.originalText.slice(v.endSourceSpan.start.offset, v.endSourceSpan.end.offset)));
          });
        }
        function T(o, d) {
          o.walk((v) => {
            v.cssDisplay = i(v, d);
          });
        }
        function m(o, d) {
          o.walk((v) => {
            let { children: S } = v;
            if (S) {
              if (S.length === 0) {
                v.isDanglingSpaceSensitive = l(v);
                return;
              }
              for (let b of S)
                b.isLeadingSpaceSensitive = y(b, d), b.isTrailingSpaceSensitive = h(b, d);
              for (let b = 0; b < S.length; b++) {
                let B = S[b];
                B.isLeadingSpaceSensitive = (b === 0 || B.prev.isTrailingSpaceSensitive) && B.isLeadingSpaceSensitive, B.isTrailingSpaceSensitive = (b === S.length - 1 || B.next.isLeadingSpaceSensitive) && B.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function C(o, d) {
          if (d.parser === "vue") {
            let v = o.children.find((b) => c(b, d));
            if (!v)
              return;
            let { lang: S } = v.attrMap;
            (S === "ts" || S === "typescript") && (d.__should_parse_vue_template_with_ts = true);
          }
        }
        r.exports = F;
      } }), xg = te({ "src/language-html/pragma.js"(e, r) {
        ne();
        function t(a) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(a);
        }
        function s(a) {
          return `<!-- @format -->

` + a.replace(/^\s*\n/, "");
        }
        r.exports = { hasPragma: t, insertPragma: s };
      } }), au = te({ "src/language-html/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.sourceSpan.start.offset;
        }
        function s(a) {
          return a.sourceSpan.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), ur = te({ "src/language-html/print/tag.js"(e, r) {
        ne();
        var t = Zt(), { isNonEmptyArray: s } = Ue(), { builders: { indent: a, join: n, line: u, softline: i, hardline: l }, utils: { replaceTextEndOfLine: p } } = qe(), { locStart: y, locEnd: h } = au(), { isTextLikeNode: g, getLastDescendant: c, isPreLikeNode: f, hasPrettierIgnore: F, shouldPreserveContent: _, isVueSfcBlock: w } = Rt();
        function E(L, Q) {
          return [L.isSelfClosing ? "" : N(L, Q), x(L, Q)];
        }
        function N(L, Q) {
          return L.lastChild && o(L.lastChild) ? "" : [I(L, Q), $(L, Q)];
        }
        function x(L, Q) {
          return (L.next ? m(L.next) : C(L.parent)) ? "" : [D(L, Q), P(L, Q)];
        }
        function I(L, Q) {
          return C(L) ? D(L.lastChild, Q) : "";
        }
        function P(L, Q) {
          return o(L) ? $(L.parent, Q) : d(L) ? q(L.next) : "";
        }
        function $(L, Q) {
          if (t(!L.isSelfClosing), T(L, Q))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (L.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${L.rawName}`;
          }
        }
        function D(L, Q) {
          if (T(L, Q))
            return "";
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (L.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function T(L, Q) {
          return !L.isSelfClosing && !L.endSourceSpan && (F(L) || _(L.parent, Q));
        }
        function m(L) {
          return L.prev && L.prev.type !== "docType" && !g(L.prev) && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function C(L) {
          return L.lastChild && L.lastChild.isTrailingSpaceSensitive && !L.lastChild.hasTrailingSpaces && !g(c(L.lastChild)) && !f(L);
        }
        function o(L) {
          return !L.next && !L.hasTrailingSpaces && L.isTrailingSpaceSensitive && g(c(L));
        }
        function d(L) {
          return L.next && !g(L.next) && g(L) && L.isTrailingSpaceSensitive && !L.hasTrailingSpaces;
        }
        function v(L) {
          let Q = L.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return Q ? Q[1] ? Q[1].split(/\s+/) : true : false;
        }
        function S(L) {
          return !L.prev && L.isLeadingSpaceSensitive && !L.hasLeadingSpaces;
        }
        function b(L, Q, V) {
          let j = L.getValue();
          if (!s(j.attrs))
            return j.isSelfClosing ? " " : "";
          let Y = j.prev && j.prev.type === "comment" && v(j.prev.value), ie = typeof Y == "boolean" ? () => Y : Array.isArray(Y) ? (ue) => Y.includes(ue.rawName) : () => false, ee = L.map((ue) => {
            let Fe = ue.getValue();
            return ie(Fe) ? p(Q.originalText.slice(y(Fe), h(Fe))) : V();
          }, "attrs"), ce = j.type === "element" && j.fullName === "script" && j.attrs.length === 1 && j.attrs[0].fullName === "src" && j.children.length === 0, K = Q.singleAttributePerLine && j.attrs.length > 1 && !w(j, Q) ? l : u, de = [a([ce ? " " : u, n(K, ee)])];
          return j.firstChild && S(j.firstChild) || j.isSelfClosing && C(j.parent) || ce ? de.push(j.isSelfClosing ? " " : "") : de.push(Q.bracketSameLine ? j.isSelfClosing ? " " : "" : j.isSelfClosing ? u : i), de;
        }
        function B(L) {
          return L.firstChild && S(L.firstChild) ? "" : J(L);
        }
        function k(L, Q, V) {
          let j = L.getValue();
          return [M(j, Q), b(L, Q, V), j.isSelfClosing ? "" : B(j)];
        }
        function M(L, Q) {
          return L.prev && d(L.prev) ? "" : [R(L, Q), q(L)];
        }
        function R(L, Q) {
          return S(L) ? J(L.parent) : m(L) ? D(L.prev, Q) : "";
        }
        function q(L) {
          switch (L.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${L.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (L.condition)
                return `<!--[if ${L.condition}]><!--><${L.rawName}`;
            default:
              return `<${L.rawName}`;
          }
        }
        function J(L) {
          switch (t(!L.isSelfClosing), L.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (L.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        r.exports = { printClosingTag: E, printClosingTagStart: N, printClosingTagStartMarker: $, printClosingTagEndMarker: D, printClosingTagSuffix: P, printClosingTagEnd: x, needsToBorrowLastChildClosingTagEndMarker: C, needsToBorrowParentClosingTagStartMarker: o, needsToBorrowPrevClosingTagEndMarker: m, printOpeningTag: k, printOpeningTagStart: M, printOpeningTagPrefix: R, printOpeningTagStartMarker: q, printOpeningTagEndMarker: J, needsToBorrowNextOpeningTagStartMarker: d, needsToBorrowParentOpeningTagEndMarker: S };
      } }), bg = te({ "node_modules/parse-srcset/src/parse-srcset.js"(e, r) {
        ne(), function(t, s) {
          typeof define == "function" && define.amd ? define([], s) : typeof r == "object" && r.exports ? r.exports = s() : t.parseSrcset = s();
        }(e, function() {
          return function(t, s) {
            var a = s && s.logger || console;
            function n($) {
              return $ === " " || $ === "	" || $ === `
` || $ === "\f" || $ === "\r";
            }
            function u($) {
              var D, T = $.exec(t.substring(N));
              if (T)
                return D = T[0], N += D.length, D;
            }
            for (var i = t.length, l = /^[ \t\n\r\u000c]+/, p = /^[, \t\n\r\u000c]+/, y = /^[^ \t\n\r\u000c]+/, h = /[,]+$/, g = /^\d+$/, c = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, f, F, _, w, E, N = 0, x = []; ; ) {
              if (u(p), N >= i)
                return x;
              f = u(y), F = [], f.slice(-1) === "," ? (f = f.replace(h, ""), P()) : I();
            }
            function I() {
              for (u(l), _ = "", w = "in descriptor"; ; ) {
                if (E = t.charAt(N), w === "in descriptor")
                  if (n(E))
                    _ && (F.push(_), _ = "", w = "after descriptor");
                  else if (E === ",") {
                    N += 1, _ && F.push(_), P();
                    return;
                  } else if (E === "(")
                    _ = _ + E, w = "in parens";
                  else if (E === "") {
                    _ && F.push(_), P();
                    return;
                  } else
                    _ = _ + E;
                else if (w === "in parens")
                  if (E === ")")
                    _ = _ + E, w = "in descriptor";
                  else if (E === "") {
                    F.push(_), P();
                    return;
                  } else
                    _ = _ + E;
                else if (w === "after descriptor" && !n(E))
                  if (E === "") {
                    P();
                    return;
                  } else
                    w = "in descriptor", N -= 1;
                N += 1;
              }
            }
            function P() {
              var $ = false, D, T, m, C, o = {}, d, v, S, b, B;
              for (C = 0; C < F.length; C++)
                d = F[C], v = d[d.length - 1], S = d.substring(0, d.length - 1), b = parseInt(S, 10), B = parseFloat(S), g.test(S) && v === "w" ? ((D || T) && ($ = true), b === 0 ? $ = true : D = b) : c.test(S) && v === "x" ? ((D || T || m) && ($ = true), B < 0 ? $ = true : T = B) : g.test(S) && v === "h" ? ((m || T) && ($ = true), b === 0 ? $ = true : m = b) : $ = true;
              $ ? a && a.error && a.error("Invalid srcset descriptor found in '" + t + "' at '" + d + "'.") : (o.url = f, D && (o.w = D), T && (o.d = T), m && (o.h = m), x.push(o));
            }
          };
        });
      } }), Tg = te({ "src/language-html/syntax-attribute.js"(e, r) {
        ne();
        var t = bg(), { builders: { ifBreak: s, join: a, line: n } } = qe();
        function u(l) {
          let p = t(l, { logger: { error(I) {
            throw new Error(I);
          } } }), y = p.some((I) => {
            let { w: P } = I;
            return P;
          }), h = p.some((I) => {
            let { h: P } = I;
            return P;
          }), g = p.some((I) => {
            let { d: P } = I;
            return P;
          });
          if (y + h + g > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let c = y ? "w" : h ? "h" : "d", f = y ? "w" : h ? "h" : "x", F = (I) => Math.max(...I), _ = p.map((I) => I.url), w = F(_.map((I) => I.length)), E = p.map((I) => I[c]).map((I) => I ? I.toString() : ""), N = E.map((I) => {
            let P = I.indexOf(".");
            return P === -1 ? I.length : P;
          }), x = F(N);
          return a([",", n], _.map((I, P) => {
            let $ = [I], D = E[P];
            if (D) {
              let T = w - I.length + 1, m = x - N[P], C = " ".repeat(T + m);
              $.push(s(C, " "), D + f);
            }
            return $;
          }));
        }
        function i(l) {
          return l.trim().split(/\s+/).join(" ");
        }
        r.exports = { printImgSrcset: u, printClassNames: i };
      } }), Bg = te({ "src/language-html/syntax-vue.js"(e, r) {
        ne();
        var { builders: { group: t } } = qe();
        function s(i, l) {
          let { left: p, operator: y, right: h } = a(i);
          return [t(l(`function _(${p}) {}`, { parser: "babel", __isVueForBindingLeft: true })), " ", y, " ", l(h, { parser: "__js_expression" }, { stripTrailingHardline: true })];
        }
        function a(i) {
          let l = /(.*?)\s+(in|of)\s+(.*)/s, p = /,([^,\]}]*)(?:,([^,\]}]*))?$/, y = /^\(|\)$/g, h = i.match(l);
          if (!h)
            return;
          let g = {};
          if (g.for = h[3].trim(), !g.for)
            return;
          let c = h[1].trim().replace(y, ""), f = c.match(p);
          f ? (g.alias = c.replace(p, ""), g.iterator1 = f[1].trim(), f[2] && (g.iterator2 = f[2].trim())) : g.alias = c;
          let F = [g.alias, g.iterator1, g.iterator2];
          if (!F.some((_, w) => !_ && (w === 0 || F.slice(w + 1).some(Boolean))))
            return { left: F.filter(Boolean).join(","), operator: h[2], right: g.for };
        }
        function n(i, l) {
          return l(`function _(${i}) {}`, { parser: "babel", __isVueBindings: true });
        }
        function u(i) {
          let l = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, p = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, y = i.trim();
          return l.test(y) || p.test(y);
        }
        r.exports = { isVueEventBindingExpression: u, printVueFor: s, printVueBindings: n };
      } }), Lo = te({ "src/language-html/get-node-content.js"(e, r) {
        ne();
        var { needsToBorrowParentClosingTagStartMarker: t, printClosingTagStartMarker: s, needsToBorrowLastChildClosingTagEndMarker: a, printClosingTagEndMarker: n, needsToBorrowParentOpeningTagEndMarker: u, printOpeningTagEndMarker: i } = ur();
        function l(p, y) {
          let h = p.startSourceSpan.end.offset;
          p.firstChild && u(p.firstChild) && (h -= i(p).length);
          let g = p.endSourceSpan.start.offset;
          return p.lastChild && t(p.lastChild) ? g += s(p, y).length : a(p) && (g -= n(p.lastChild, y).length), y.originalText.slice(h, g);
        }
        r.exports = l;
      } }), Ng = te({ "src/language-html/embed.js"(e, r) {
        ne();
        var { builders: { breakParent: t, group: s, hardline: a, indent: n, line: u, fill: i, softline: l }, utils: { mapDoc: p, replaceTextEndOfLine: y } } = qe(), h = su(), { printClosingTag: g, printClosingTagSuffix: c, needsToBorrowPrevClosingTagEndMarker: f, printOpeningTagPrefix: F, printOpeningTag: _ } = ur(), { printImgSrcset: w, printClassNames: E } = Tg(), { printVueFor: N, printVueBindings: x, isVueEventBindingExpression: I } = Bg(), { isScriptLikeTag: P, isVueNonHtmlBlock: $, inferScriptParser: D, htmlTrimPreserveIndentation: T, dedentString: m, unescapeQuoteEntities: C, isVueSlotAttribute: o, isVueSfcBindingsAttribute: d, getTextValueParts: v } = Rt(), S = Lo();
        function b(k, M, R) {
          let q = (ee) => new RegExp(ee.join("|")).test(k.fullName), J = () => C(k.value), L = false, Q = (ee, ce) => {
            let W = ee.type === "NGRoot" ? ee.node.type === "NGMicrosyntax" && ee.node.body.length === 1 && ee.node.body[0].type === "NGMicrosyntaxExpression" ? ee.node.body[0].expression : ee.node : ee.type === "JsExpressionRoot" ? ee.node : ee;
            W && (W.type === "ObjectExpression" || W.type === "ArrayExpression" || ce.parser === "__vue_expression" && (W.type === "TemplateLiteral" || W.type === "StringLiteral")) && (L = true);
          }, V = (ee) => s(ee), j = function(ee) {
            let ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            return s([n([l, ee]), ce ? l : ""]);
          }, Y = (ee) => L ? V(ee) : j(ee), ie = (ee, ce) => M(ee, Object.assign({ __onHtmlBindingRoot: Q, __embeddedInHtml: true }, ce));
          if (k.fullName === "srcset" && (k.parent.fullName === "img" || k.parent.fullName === "source"))
            return j(w(J()));
          if (k.fullName === "class" && !R.parentParser) {
            let ee = J();
            if (!ee.includes("{{"))
              return E(ee);
          }
          if (k.fullName === "style" && !R.parentParser) {
            let ee = J();
            if (!ee.includes("{{"))
              return j(ie(ee, { parser: "css", __isHTMLStyleAttribute: true }));
          }
          if (R.parser === "vue") {
            if (k.fullName === "v-for")
              return N(J(), ie);
            if (o(k) || d(k, R))
              return x(J(), ie);
            let ee = ["^@", "^v-on:"], ce = ["^:", "^v-bind:"], W = ["^v-"];
            if (q(ee)) {
              let K = J(), de = I(K) ? "__js_expression" : R.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return Y(ie(K, { parser: de }));
            }
            if (q(ce))
              return Y(ie(J(), { parser: "__vue_expression" }));
            if (q(W))
              return Y(ie(J(), { parser: "__js_expression" }));
          }
          if (R.parser === "angular") {
            let ee = (z, U) => ie(z, Object.assign(Object.assign({}, U), {}, { trailingComma: "none" })), ce = ["^\\*"], W = ["^\\(.+\\)$", "^on-"], K = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], de = ["^i18n(-.+)?$"];
            if (q(W))
              return Y(ee(J(), { parser: "__ng_action" }));
            if (q(K))
              return Y(ee(J(), { parser: "__ng_binding" }));
            if (q(de)) {
              let z = J().trim();
              return j(i(v(k, z)), !z.includes("@@"));
            }
            if (q(ce))
              return Y(ee(J(), { parser: "__ng_directive" }));
            let ue = /{{(.+?)}}/s, Fe = J();
            if (ue.test(Fe)) {
              let z = [];
              for (let [U, Z] of Fe.split(ue).entries())
                if (U % 2 === 0)
                  z.push(y(Z));
                else
                  try {
                    z.push(s(["{{", n([u, ee(Z, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), u, "}}"]));
                  } catch {
                    z.push("{{", y(Z), "}}");
                  }
              return s(z);
            }
          }
          return null;
        }
        function B(k, M, R, q) {
          let J = k.getValue();
          switch (J.type) {
            case "element": {
              if (P(J) || J.type === "interpolation")
                return;
              if (!J.isSelfClosing && $(J, q)) {
                let L = D(J, q);
                if (!L)
                  return;
                let Q = S(J, q), V = /^\s*$/.test(Q), j = "";
                return V || (j = R(T(Q), { parser: L, __embeddedInHtml: true }, { stripTrailingHardline: true }), V = j === ""), [F(J, q), s(_(k, q, M)), V ? "" : a, j, V ? "" : a, g(J, q), c(J, q)];
              }
              break;
            }
            case "text": {
              if (P(J.parent)) {
                let L = D(J.parent, q);
                if (L) {
                  let Q = L === "markdown" ? m(J.value.replace(/^[^\S\n]*\n/, "")) : J.value, V = { parser: L, __embeddedInHtml: true };
                  if (q.parser === "html" && L === "babel") {
                    let j = "script", { attrMap: Y } = J.parent;
                    Y && (Y.type === "module" || Y.type === "text/babel" && Y["data-type"] === "module") && (j = "module"), V.__babelSourceType = j;
                  }
                  return [t, F(J, q), R(Q, V, { stripTrailingHardline: true }), c(J, q)];
                }
              } else if (J.parent.type === "interpolation") {
                let L = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                return q.parser === "angular" ? (L.parser = "__ng_interpolation", L.trailingComma = "none") : q.parser === "vue" ? L.parser = q.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : L.parser = "__js_expression", [n([u, R(J.value, L, { stripTrailingHardline: true })]), J.parent.next && f(J.parent.next) ? " " : u];
              }
              break;
            }
            case "attribute": {
              if (!J.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                return [J.rawName, "=", J.value];
              if (q.parser === "lwc" && /^{.*}$/s.test(q.originalText.slice(J.valueSpan.start.offset, J.valueSpan.end.offset)))
                return [J.rawName, "=", J.value];
              let L = b(J, (Q, V) => R(Q, Object.assign({ __isInHtmlAttribute: true, __embeddedInHtml: true }, V), { stripTrailingHardline: true }), q);
              if (L)
                return [J.rawName, '="', s(p(L, (Q) => typeof Q == "string" ? Q.replace(/"/g, "&quot;") : Q)), '"'];
              break;
            }
            case "front-matter":
              return h(J, R);
          }
        }
        r.exports = B;
      } }), Oo = te({ "src/language-html/print/children.js"(e, r) {
        ne();
        var { builders: { breakParent: t, group: s, ifBreak: a, line: n, softline: u, hardline: i }, utils: { replaceTextEndOfLine: l } } = qe(), { locStart: p, locEnd: y } = au(), { forceBreakChildren: h, forceNextEmptyLine: g, isTextLikeNode: c, hasPrettierIgnore: f, preferHardlineAsLeadingSpaces: F } = Rt(), { printOpeningTagPrefix: _, needsToBorrowNextOpeningTagStartMarker: w, printOpeningTagStartMarker: E, needsToBorrowPrevClosingTagEndMarker: N, printClosingTagEndMarker: x, printClosingTagSuffix: I, needsToBorrowParentClosingTagStartMarker: P } = ur();
        function $(m, C, o) {
          let d = m.getValue();
          return f(d) ? [_(d, C), ...l(C.originalText.slice(p(d) + (d.prev && w(d.prev) ? E(d).length : 0), y(d) - (d.next && N(d.next) ? x(d, C).length : 0))), I(d, C)] : o();
        }
        function D(m, C) {
          return c(m) && c(C) ? m.isTrailingSpaceSensitive ? m.hasTrailingSpaces ? F(C) ? i : n : "" : F(C) ? i : u : w(m) && (f(C) || C.firstChild || C.isSelfClosing || C.type === "element" && C.attrs.length > 0) || m.type === "element" && m.isSelfClosing && N(C) ? "" : !C.isLeadingSpaceSensitive || F(C) || N(C) && m.lastChild && P(m.lastChild) && m.lastChild.lastChild && P(m.lastChild.lastChild) ? i : C.hasLeadingSpaces ? n : u;
        }
        function T(m, C, o) {
          let d = m.getValue();
          if (h(d))
            return [t, ...m.map((S) => {
              let b = S.getValue(), B = b.prev ? D(b.prev, b) : "";
              return [B ? [B, g(b.prev) ? i : ""] : "", $(S, C, o)];
            }, "children")];
          let v = d.children.map(() => Symbol(""));
          return m.map((S, b) => {
            let B = S.getValue();
            if (c(B)) {
              if (B.prev && c(B.prev)) {
                let Q = D(B.prev, B);
                if (Q)
                  return g(B.prev) ? [i, i, $(S, C, o)] : [Q, $(S, C, o)];
              }
              return $(S, C, o);
            }
            let k = [], M = [], R = [], q = [], J = B.prev ? D(B.prev, B) : "", L = B.next ? D(B, B.next) : "";
            return J && (g(B.prev) ? k.push(i, i) : J === i ? k.push(i) : c(B.prev) ? M.push(J) : M.push(a("", u, { groupId: v[b - 1] }))), L && (g(B) ? c(B.next) && q.push(i, i) : L === i ? c(B.next) && q.push(i) : R.push(L)), [...k, s([...M, s([$(S, C, o), ...R], { id: v[b] })]), ...q];
          }, "children");
        }
        r.exports = { printChildren: T };
      } }), wg = te({ "src/language-html/print/element.js"(e, r) {
        ne();
        var { builders: { breakParent: t, dedentToRoot: s, group: a, ifBreak: n, indentIfBreak: u, indent: i, line: l, softline: p }, utils: { replaceTextEndOfLine: y } } = qe(), h = Lo(), { shouldPreserveContent: g, isScriptLikeTag: c, isVueCustomBlock: f, countParents: F, forceBreakContent: _ } = Rt(), { printOpeningTagPrefix: w, printOpeningTag: E, printClosingTagSuffix: N, printClosingTag: x, needsToBorrowPrevClosingTagEndMarker: I, needsToBorrowLastChildClosingTagEndMarker: P } = ur(), { printChildren: $ } = Oo();
        function D(T, m, C) {
          let o = T.getValue();
          if (g(o, m))
            return [w(o, m), a(E(T, m, C)), ...y(h(o, m)), ...x(o, m), N(o, m)];
          let d = o.children.length === 1 && o.firstChild.type === "interpolation" && o.firstChild.isLeadingSpaceSensitive && !o.firstChild.hasLeadingSpaces && o.lastChild.isTrailingSpaceSensitive && !o.lastChild.hasTrailingSpaces, v = Symbol("element-attr-group-id"), S = (M) => a([a(E(T, m, C), { id: v }), M, x(o, m)]), b = (M) => d ? u(M, { groupId: v }) : (c(o) || f(o, m)) && o.parent.type === "root" && m.parser === "vue" && !m.vueIndentScriptAndStyle ? M : i(M), B = () => d ? n(p, "", { groupId: v }) : o.firstChild.hasLeadingSpaces && o.firstChild.isLeadingSpaceSensitive ? l : o.firstChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive ? s(p) : p, k = () => (o.next ? I(o.next) : P(o.parent)) ? o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? " " : "" : d ? n(p, "", { groupId: v }) : o.lastChild.hasTrailingSpaces && o.lastChild.isTrailingSpaceSensitive ? l : (o.lastChild.type === "comment" || o.lastChild.type === "text" && o.isWhitespaceSensitive && o.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${m.tabWidth * F(T, (R) => R.parent && R.parent.type !== "root")}}$`).test(o.lastChild.value) ? "" : p;
          return o.children.length === 0 ? S(o.hasDanglingSpaces && o.isDanglingSpaceSensitive ? l : "") : S([_(o) ? t : "", b([B(), $(T, m, C)]), k()]);
        }
        r.exports = { printElement: D };
      } }), _g = te({ "src/language-html/printer-html.js"(e, r) {
        ne();
        var { builders: { fill: t, group: s, hardline: a, literalline: n }, utils: { cleanDoc: u, getDocParts: i, isConcat: l, replaceTextEndOfLine: p } } = qe(), y = gg(), { countChars: h, unescapeQuoteEntities: g, getTextValueParts: c } = Rt(), f = Sg(), { insertPragma: F } = xg(), { locStart: _, locEnd: w } = au(), E = Ng(), { printClosingTagSuffix: N, printClosingTagEnd: x, printOpeningTagPrefix: I, printOpeningTagStart: P } = ur(), { printElement: $ } = wg(), { printChildren: D } = Oo();
        function T(m, C, o) {
          let d = m.getValue();
          switch (d.type) {
            case "front-matter":
              return p(d.raw);
            case "root":
              return C.__onHtmlRoot && C.__onHtmlRoot(d), [s(D(m, C, o)), a];
            case "element":
            case "ieConditionalComment":
              return $(m, C, o);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [P(d), x(d)];
            case "interpolation":
              return [P(d, C), ...m.map(o, "children"), x(d, C)];
            case "text": {
              if (d.parent.type === "interpolation") {
                let S = /\n[^\S\n]*$/, b = S.test(d.value), B = b ? d.value.replace(S, "") : d.value;
                return [...p(B), b ? a : ""];
              }
              let v = u([I(d, C), ...c(d), N(d, C)]);
              return l(v) || v.type === "fill" ? t(i(v)) : v;
            }
            case "docType":
              return [s([P(d, C), " ", d.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), x(d, C)];
            case "comment":
              return [I(d, C), ...p(C.originalText.slice(_(d), w(d)), n), N(d, C)];
            case "attribute": {
              if (d.value === null)
                return d.rawName;
              let v = g(d.value), S = h(v, "'"), b = h(v, '"'), B = S < b ? "'" : '"';
              return [d.rawName, "=", B, ...p(B === '"' ? v.replace(/"/g, "&quot;") : v.replace(/'/g, "&apos;")), B];
            }
            default:
              throw new Error(`Unexpected node type ${d.type}`);
          }
        }
        r.exports = { preprocess: f, print: T, insertPragma: F, massageAstNode: y, embed: E };
      } }), Pg = te({ "src/language-html/options.js"(e, r) {
        ne();
        var t = Mt(), s = "HTML";
        r.exports = { bracketSameLine: t.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: s, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: t.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: s, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
      } }), Ig = te({ "src/language-html/parsers.js"() {
        ne();
      } }), On = te({ "node_modules/linguist-languages/data/HTML.json"(e, r) {
        r.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), kg = te({ "node_modules/linguist-languages/data/Vue.json"(e, r) {
        r.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), Lg = te({ "src/language-html/index.js"(e, r) {
        ne();
        var t = _t(), s = _g(), a = Pg(), n = Ig(), u = [t(On(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), t(On(), (l) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...l.extensions, ".mjml"] })), t(On(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), t(kg(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], i = { html: s };
        r.exports = { languages: u, printers: i, options: a, parsers: n };
      } }), Og = te({ "src/language-yaml/pragma.js"(e, r) {
        ne();
        function t(n) {
          return /^\s*@(?:prettier|format)\s*$/.test(n);
        }
        function s(n) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(n);
        }
        function a(n) {
          return `# @format

${n}`;
        }
        r.exports = { isPragma: t, hasPragma: s, insertPragma: a };
      } }), jg = te({ "src/language-yaml/loc.js"(e, r) {
        ne();
        function t(a) {
          return a.position.start.offset;
        }
        function s(a) {
          return a.position.end.offset;
        }
        r.exports = { locStart: t, locEnd: s };
      } }), qg = te({ "src/language-yaml/embed.js"(e, r) {
        ne();
        function t(s, a, n, u) {
          if (s.getValue().type === "root" && u.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(u.filepath))
            return n(u.originalText, Object.assign(Object.assign({}, u), {}, { parser: "json" }));
        }
        r.exports = t;
      } }), $t = te({ "src/language-yaml/utils.js"(e, r) {
        ne();
        var { getLast: t, isNonEmptyArray: s } = Ue();
        function a(D, T) {
          let m = 0, C = D.stack.length - 1;
          for (let o = 0; o < C; o++) {
            let d = D.stack[o];
            n(d) && T(d) && m++;
          }
          return m;
        }
        function n(D, T) {
          return D && typeof D.type == "string" && (!T || T.includes(D.type));
        }
        function u(D, T, m) {
          return T("children" in D ? Object.assign(Object.assign({}, D), {}, { children: D.children.map((C) => u(C, T, D)) }) : D, m);
        }
        function i(D, T, m) {
          Object.defineProperty(D, T, { get: m, enumerable: false });
        }
        function l(D, T) {
          let m = 0, C = T.length;
          for (let o = D.position.end.offset - 1; o < C; o++) {
            let d = T[o];
            if (d === `
` && m++, m === 1 && /\S/.test(d))
              return false;
            if (m === 2)
              return true;
          }
          return false;
        }
        function p(D) {
          switch (D.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return false;
          }
          let m = D.stack.length;
          for (let C = 1; C < m; C++) {
            let o = D.stack[C], d = D.stack[C - 1];
            if (Array.isArray(d) && typeof o == "number" && o !== d.length - 1)
              return false;
          }
          return true;
        }
        function y(D) {
          return s(D.children) ? y(t(D.children)) : D;
        }
        function h(D) {
          return D.value.trim() === "prettier-ignore";
        }
        function g(D) {
          let T = D.getValue();
          if (T.type === "documentBody") {
            let m = D.getParentNode();
            return N(m.head) && h(t(m.head.endComments));
          }
          return F(T) && h(t(T.leadingComments));
        }
        function c(D) {
          return !s(D.children) && !f(D);
        }
        function f(D) {
          return F(D) || _(D) || w(D) || E(D) || N(D);
        }
        function F(D) {
          return s(D == null ? void 0 : D.leadingComments);
        }
        function _(D) {
          return s(D == null ? void 0 : D.middleComments);
        }
        function w(D) {
          return D == null ? void 0 : D.indicatorComment;
        }
        function E(D) {
          return D == null ? void 0 : D.trailingComment;
        }
        function N(D) {
          return s(D == null ? void 0 : D.endComments);
        }
        function x(D) {
          let T = [], m;
          for (let C of D.split(/( +)/))
            C !== " " ? m === " " ? T.push(C) : T.push((T.pop() || "") + C) : m === void 0 && T.unshift(""), m = C;
          return m === " " && T.push((T.pop() || "") + " "), T[0] === "" && (T.shift(), T.unshift(" " + (T.shift() || ""))), T;
        }
        function I(D, T, m) {
          let C = T.split(`
`).map((o, d, v) => d === 0 && d === v.length - 1 ? o : d !== 0 && d !== v.length - 1 ? o.trim() : d === 0 ? o.trimEnd() : o.trimStart());
          return m.proseWrap === "preserve" ? C.map((o) => o.length === 0 ? [] : [o]) : C.map((o) => o.length === 0 ? [] : x(o)).reduce((o, d, v) => v !== 0 && C[v - 1].length > 0 && d.length > 0 && !(D === "quoteDouble" && t(t(o)).endsWith("\\")) ? [...o.slice(0, -1), [...t(o), ...d]] : [...o, d], []).map((o) => m.proseWrap === "never" ? [o.join(" ")] : o);
        }
        function P(D, T) {
          let { parentIndent: m, isLastDescendant: C, options: o } = T, d = D.position.start.line === D.position.end.line ? "" : o.originalText.slice(D.position.start.offset, D.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], v;
          if (D.indent === null) {
            let B = d.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            v = B ? B.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            v = D.indent - 1 + m;
          let S = d.split(`
`).map((B) => B.slice(v));
          if (o.proseWrap === "preserve" || D.type === "blockLiteral")
            return b(S.map((B) => B.length === 0 ? [] : [B]));
          return b(S.map((B) => B.length === 0 ? [] : x(B)).reduce((B, k, M) => M !== 0 && S[M - 1].length > 0 && k.length > 0 && !/^\s/.test(k[0]) && !/^\s|\s$/.test(t(B)) ? [...B.slice(0, -1), [...t(B), ...k]] : [...B, k], []).map((B) => B.reduce((k, M) => k.length > 0 && /\s$/.test(t(k)) ? [...k.slice(0, -1), t(k) + " " + M] : [...k, M], [])).map((B) => o.proseWrap === "never" ? [B.join(" ")] : B));
          function b(B) {
            if (D.chomping === "keep")
              return t(B).length === 0 ? B.slice(0, -1) : B;
            let k = 0;
            for (let M = B.length - 1; M >= 0 && B[M].length === 0; M--)
              k++;
            return k === 0 ? B : k >= 2 && !C ? B.slice(0, -(k - 1)) : B.slice(0, -k);
          }
        }
        function $(D) {
          if (!D)
            return true;
          switch (D.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return true;
            default:
              return false;
          }
        }
        r.exports = { getLast: t, getAncestorCount: a, isNode: n, isEmptyNode: c, isInlineNode: $, mapNode: u, defineShortcut: i, isNextLineEmpty: l, isLastDescendantNode: p, getBlockValueLineContents: P, getFlowScalarLineContents: I, getLastDescendantNode: y, hasPrettierIgnore: g, hasLeadingComments: F, hasMiddleComments: _, hasIndicatorComment: w, hasTrailingComment: E, hasEndComments: N };
      } }), Mg = te({ "src/language-yaml/print-preprocess.js"(e, r) {
        ne();
        var { defineShortcut: t, mapNode: s } = $t();
        function a(u) {
          return s(u, n);
        }
        function n(u) {
          switch (u.type) {
            case "document":
              t(u, "head", () => u.children[0]), t(u, "body", () => u.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              t(u, "content", () => u.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              t(u, "key", () => u.children[0]), t(u, "value", () => u.children[1]);
              break;
          }
          return u;
        }
        r.exports = a;
      } }), Mr = te({ "src/language-yaml/print/misc.js"(e, r) {
        ne();
        var { builders: { softline: t, align: s } } = qe(), { hasEndComments: a, isNextLineEmpty: n, isNode: u } = $t(), i = /* @__PURE__ */ new WeakMap();
        function l(h, g) {
          let c = h.getValue(), f = h.stack[0], F;
          return i.has(f) ? F = i.get(f) : (F = /* @__PURE__ */ new Set(), i.set(f, F)), !F.has(c.position.end.line) && (F.add(c.position.end.line), n(c, g) && !p(h.getParentNode())) ? t : "";
        }
        function p(h) {
          return a(h) && !u(h, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function y(h, g) {
          return s(" ".repeat(h), g);
        }
        r.exports = { alignWithSpaces: y, shouldPrintEndComments: p, printNextEmptyLine: l };
      } }), Rg = te({ "src/language-yaml/print/flow-mapping-sequence.js"(e, r) {
        ne();
        var { builders: { ifBreak: t, line: s, softline: a, hardline: n, join: u } } = qe(), { isEmptyNode: i, getLast: l, hasEndComments: p } = $t(), { printNextEmptyLine: y, alignWithSpaces: h } = Mr();
        function g(f, F, _) {
          let w = f.getValue(), E = w.type === "flowMapping", N = E ? "{" : "[", x = E ? "}" : "]", I = a;
          E && w.children.length > 0 && _.bracketSpacing && (I = s);
          let P = l(w.children), $ = P && P.type === "flowMappingItem" && i(P.key) && i(P.value);
          return [N, h(_.tabWidth, [I, c(f, F, _), _.trailingComma === "none" ? "" : t(","), p(w) ? [n, u(n, f.map(F, "endComments"))] : ""]), $ ? "" : I, x];
        }
        function c(f, F, _) {
          let w = f.getValue();
          return f.map((N, x) => [F(), x === w.children.length - 1 ? "" : [",", s, w.children[x].position.start.line !== w.children[x + 1].position.start.line ? y(N, _.originalText) : ""]], "children");
        }
        r.exports = { printFlowMapping: g, printFlowSequence: g };
      } }), $g = te({ "src/language-yaml/print/mapping-item.js"(e, r) {
        ne();
        var { builders: { conditionalGroup: t, group: s, hardline: a, ifBreak: n, join: u, line: i } } = qe(), { hasLeadingComments: l, hasMiddleComments: p, hasTrailingComment: y, hasEndComments: h, isNode: g, isEmptyNode: c, isInlineNode: f } = $t(), { alignWithSpaces: F } = Mr();
        function _(x, I, P, $, D) {
          let { key: T, value: m } = x, C = c(T), o = c(m);
          if (C && o)
            return ": ";
          let d = $("key"), v = E(x) ? " " : "";
          if (o)
            return x.type === "flowMappingItem" && I.type === "flowMapping" ? d : x.type === "mappingItem" && w(T.content, D) && !y(T.content) && (!I.tag || I.tag.value !== "tag:yaml.org,2002:set") ? [d, v, ":"] : ["? ", F(2, d)];
          let S = $("value");
          if (C)
            return [": ", F(2, S)];
          if (l(m) || !f(T.content))
            return ["? ", F(2, d), a, u("", P.map($, "value", "leadingComments").map((q) => [q, a])), ": ", F(2, S)];
          if (N(T.content) && !l(T.content) && !p(T.content) && !y(T.content) && !h(T) && !l(m.content) && !p(m.content) && !h(m) && w(m.content, D))
            return [d, v, ": ", S];
          let b = Symbol("mappingKey"), B = s([n("? "), s(F(2, d), { id: b })]), k = [a, ": ", F(2, S)], M = [v, ":"];
          l(m.content) || h(m) && m.content && !g(m.content, ["mapping", "sequence"]) || I.type === "mapping" && y(T.content) && f(m.content) || g(m.content, ["mapping", "sequence"]) && m.content.tag === null && m.content.anchor === null ? M.push(a) : m.content && M.push(i), M.push(S);
          let R = F(D.tabWidth, M);
          return w(T.content, D) && !l(T.content) && !p(T.content) && !h(T) ? t([[d, R]]) : t([[B, n(k, R, { groupId: b })]]);
        }
        function w(x, I) {
          if (!x)
            return true;
          switch (x.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return true;
            default:
              return false;
          }
          if (I.proseWrap === "preserve")
            return x.position.start.line === x.position.end.line;
          if (/\\$/m.test(I.originalText.slice(x.position.start.offset, x.position.end.offset)))
            return false;
          switch (I.proseWrap) {
            case "never":
              return !x.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(x.value);
            default:
              return false;
          }
        }
        function E(x) {
          return x.key.content && x.key.content.type === "alias";
        }
        function N(x) {
          if (!x)
            return true;
          switch (x.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return x.position.start.line === x.position.end.line;
            case "alias":
              return true;
            default:
              return false;
          }
        }
        r.exports = _;
      } }), Vg = te({ "src/language-yaml/print/block.js"(e, r) {
        ne();
        var { builders: { dedent: t, dedentToRoot: s, fill: a, hardline: n, join: u, line: i, literalline: l, markAsRoot: p }, utils: { getDocParts: y } } = qe(), { getAncestorCount: h, getBlockValueLineContents: g, hasIndicatorComment: c, isLastDescendantNode: f, isNode: F } = $t(), { alignWithSpaces: _ } = Mr();
        function w(E, N, x) {
          let I = E.getValue(), P = h(E, (C) => F(C, ["sequence", "mapping"])), $ = f(E), D = [I.type === "blockFolded" ? ">" : "|"];
          I.indent !== null && D.push(I.indent.toString()), I.chomping !== "clip" && D.push(I.chomping === "keep" ? "+" : "-"), c(I) && D.push(" ", N("indicatorComment"));
          let T = g(I, { parentIndent: P, isLastDescendant: $, options: x }), m = [];
          for (let [C, o] of T.entries())
            C === 0 && m.push(n), m.push(a(y(u(i, o)))), C !== T.length - 1 ? m.push(o.length === 0 ? n : p(l)) : I.chomping === "keep" && $ && m.push(s(o.length === 0 ? n : l));
          return I.indent === null ? D.push(t(_(x.tabWidth, m))) : D.push(s(_(I.indent - 1 + P, m))), D;
        }
        r.exports = w;
      } }), Wg = te({ "src/language-yaml/printer-yaml.js"(e, r) {
        ne();
        var { builders: { breakParent: t, fill: s, group: a, hardline: n, join: u, line: i, lineSuffix: l, literalline: p }, utils: { getDocParts: y, replaceTextEndOfLine: h } } = qe(), { isPreviousLineEmpty: g } = Ue(), { insertPragma: c, isPragma: f } = Og(), { locStart: F } = jg(), _ = qg(), { getFlowScalarLineContents: w, getLastDescendantNode: E, hasLeadingComments: N, hasMiddleComments: x, hasTrailingComment: I, hasEndComments: P, hasPrettierIgnore: $, isLastDescendantNode: D, isNode: T, isInlineNode: m } = $t(), C = Mg(), { alignWithSpaces: o, printNextEmptyLine: d, shouldPrintEndComments: v } = Mr(), { printFlowMapping: S, printFlowSequence: b } = Rg(), B = $g(), k = Vg();
        function M(j, Y, ie) {
          let ee = j.getValue(), ce = [];
          ee.type !== "mappingValue" && N(ee) && ce.push([u(n, j.map(ie, "leadingComments")), n]);
          let { tag: W, anchor: K } = ee;
          W && ce.push(ie("tag")), W && K && ce.push(" "), K && ce.push(ie("anchor"));
          let de = "";
          T(ee, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !D(j) && (de = d(j, Y.originalText)), (W || K) && (T(ee, ["sequence", "mapping"]) && !x(ee) ? ce.push(n) : ce.push(" ")), x(ee) && ce.push([ee.middleComments.length === 1 ? "" : n, u(n, j.map(ie, "middleComments")), n]);
          let ue = j.getParentNode();
          return $(j) ? ce.push(h(Y.originalText.slice(ee.position.start.offset, ee.position.end.offset).trimEnd(), p)) : ce.push(a(R(ee, ue, j, Y, ie))), I(ee) && !T(ee, ["document", "documentHead"]) && ce.push(l([ee.type === "mappingValue" && !ee.content ? "" : " ", ue.type === "mappingKey" && j.getParentNode(2).type === "mapping" && m(ee) ? "" : t, ie("trailingComment")])), v(ee) && ce.push(o(ee.type === "sequenceItem" ? 2 : 0, [n, u(n, j.map((Fe) => [g(Y.originalText, Fe.getValue(), F) ? n : "", ie()], "endComments"))])), ce.push(de), ce;
        }
        function R(j, Y, ie, ee, ce) {
          switch (j.type) {
            case "root": {
              let { children: W } = j, K = [];
              ie.each((ue, Fe) => {
                let z = W[Fe], U = W[Fe + 1];
                Fe !== 0 && K.push(n), K.push(ce()), J(z, U) ? (K.push(n, "..."), I(z) && K.push(" ", ce("trailingComment"))) : U && !I(U.head) && K.push(n, "---");
              }, "children");
              let de = E(j);
              return (!T(de, ["blockLiteral", "blockFolded"]) || de.chomping !== "keep") && K.push(n), K;
            }
            case "document": {
              let W = Y.children[ie.getName() + 1], K = [];
              return L(j, W, Y, ee) === "head" && ((j.head.children.length > 0 || j.head.endComments.length > 0) && K.push(ce("head")), I(j.head) ? K.push(["---", " ", ce(["head", "trailingComment"])]) : K.push("---")), q(j) && K.push(ce("body")), u(n, K);
            }
            case "documentHead":
              return u(n, [...ie.map(ce, "children"), ...ie.map(ce, "endComments")]);
            case "documentBody": {
              let { children: W, endComments: K } = j, de = "";
              if (W.length > 0 && K.length > 0) {
                let ue = E(j);
                T(ue, ["blockFolded", "blockLiteral"]) ? ue.chomping !== "keep" && (de = [n, n]) : de = n;
              }
              return [u(n, ie.map(ce, "children")), de, u(n, ie.map(ce, "endComments"))];
            }
            case "directive":
              return ["%", u(" ", [j.name, ...j.parameters])];
            case "comment":
              return ["#", j.value];
            case "alias":
              return ["*", j.value];
            case "tag":
              return ee.originalText.slice(j.position.start.offset, j.position.end.offset);
            case "anchor":
              return ["&", j.value];
            case "plain":
              return Q(j.type, ee.originalText.slice(j.position.start.offset, j.position.end.offset), ee);
            case "quoteDouble":
            case "quoteSingle": {
              let W = "'", K = '"', de = ee.originalText.slice(j.position.start.offset + 1, j.position.end.offset - 1);
              if (j.type === "quoteSingle" && de.includes("\\") || j.type === "quoteDouble" && /\\[^"]/.test(de)) {
                let Fe = j.type === "quoteDouble" ? K : W;
                return [Fe, Q(j.type, de, ee), Fe];
              }
              if (de.includes(K))
                return [W, Q(j.type, j.type === "quoteDouble" ? de.replace(/\\"/g, K).replace(/'/g, W.repeat(2)) : de, ee), W];
              if (de.includes(W))
                return [K, Q(j.type, j.type === "quoteSingle" ? de.replace(/''/g, W) : de, ee), K];
              let ue = ee.singleQuote ? W : K;
              return [ue, Q(j.type, de, ee), ue];
            }
            case "blockFolded":
            case "blockLiteral":
              return k(ie, ce, ee);
            case "mapping":
            case "sequence":
              return u(n, ie.map(ce, "children"));
            case "sequenceItem":
              return ["- ", o(2, j.content ? ce("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return j.content ? ce("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return B(j, Y, ie, ce, ee);
            case "flowMapping":
              return S(ie, ce, ee);
            case "flowSequence":
              return b(ie, ce, ee);
            case "flowSequenceItem":
              return ce("content");
            default:
              throw new Error(`Unexpected node type ${j.type}`);
          }
        }
        function q(j) {
          return j.body.children.length > 0 || P(j.body);
        }
        function J(j, Y) {
          return I(j) || Y && (Y.head.children.length > 0 || P(Y.head));
        }
        function L(j, Y, ie, ee) {
          return ie.children[0] === j && /---(?:\s|$)/.test(ee.originalText.slice(F(j), F(j) + 4)) || j.head.children.length > 0 || P(j.head) || I(j.head) ? "head" : J(j, Y) ? false : Y ? "root" : false;
        }
        function Q(j, Y, ie) {
          let ee = w(j, Y, ie);
          return u(n, ee.map((ce) => s(y(u(i, ce)))));
        }
        function V(j, Y) {
          if (T(Y))
            switch (delete Y.position, Y.type) {
              case "comment":
                if (f(Y.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                Y.type = "quote";
                break;
            }
        }
        r.exports = { preprocess: C, embed: _, print: M, massageAstNode: V, insertPragma: c };
      } }), Hg = te({ "src/language-yaml/options.js"(e, r) {
        ne();
        var t = Mt();
        r.exports = { bracketSpacing: t.bracketSpacing, singleQuote: t.singleQuote, proseWrap: t.proseWrap };
      } }), Gg = te({ "src/language-yaml/parsers.js"() {
        ne();
      } }), Ug = te({ "node_modules/linguist-languages/data/YAML.json"(e, r) {
        r.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), Jg = te({ "src/language-yaml/index.js"(e, r) {
        ne();
        var t = _t(), s = Wg(), a = Hg(), n = Gg(), u = [t(Ug(), (i) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...i.filenames.filter((l) => l !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        r.exports = { languages: u, printers: { yaml: s }, options: a, parsers: n };
      } }), zg = te({ "src/languages.js"(e, r) {
        ne(), r.exports = [Bd(), Ud(), eg(), ag(), dg(), Lg(), Jg()];
      } });
      ne();
      var { version: Xg } = Ia(), Ot = Gm(), { getSupportInfo: Kg } = Xn(), Yg = Um(), Qg = zg(), Zg = qe();
      function Nt(e) {
        let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
            s[a] = arguments[a];
          let n = s[r] || {}, u = n.plugins || [];
          return s[r] = Object.assign(Object.assign({}, n), {}, { plugins: [...Qg, ...Array.isArray(u) ? u : Object.values(u)] }), e(...s);
        };
      }
      var jn = Nt(Ot.formatWithCursor);
      jo.exports = { formatWithCursor: jn, format(e, r) {
        return jn(e, r).formatted;
      }, check(e, r) {
        let { formatted: t } = jn(e, r);
        return t === e;
      }, doc: Zg, getSupportInfo: Nt(Kg, 0), version: Xg, util: Yg, __debug: { parse: Nt(Ot.parse), formatAST: Nt(Ot.formatAST), formatDoc: Nt(Ot.formatDoc), printToDoc: Nt(Ot.printToDoc), printDocToString: Nt(Ot.printDocToString) } };
    });
    return e0();
  });
} });
var import_parser_html = __toESM(require_parser_html()), import_standalone = __toESM(require_standalone());
function dedent(templ) {
  for (var values = [], _i = 1; _i < arguments.length; _i++)
    values[_i - 1] = arguments[_i];
  var strings = Array.from(typeof templ == "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    return matches ? arr.concat(matches.map(function(match) {
      var _a, _b;
      return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    })) : arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp(`
[	 ]{` + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, `
`);
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  return values.forEach(function(value, i) {
    var endentations = string.match(/(?:^|\n)( *)$/), endentation = endentations ? endentations[1] : "", indentedValue = value;
    typeof value == "string" && value.includes(`
`) && (indentedValue = String(value).split(`
`).map(function(str, i2) {
      return i2 === 0 ? str : "" + endentation + str;
    }).join(`
`)), string += indentedValue + strings[i + 1];
  }), string;
}
var formatter = memoize(2)((type, source) => type === false ? source : type === "dedent" || type === true ? dedent(source) : import_standalone.default.format(source, { parser: type, plugins: [import_parser_html.default], htmlWhitespaceSensitivity: "ignore" }).trim());
export {
  formatter
};
