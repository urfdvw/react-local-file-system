import * as b from "react";
import ht, { forwardRef as gl, useContext as vn, Children as bl, isValidElement as Nr, cloneElement as Ir, createContext as ka, useState as Pt, useEffect as zo } from "react";
import * as xl from "react-dom";
import Tr from "react-dom";
function El(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Tl(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Uo = { exports: {} }, An = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function Cl() {
  if (os)
    return An;
  os = 1;
  var e = ht, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var d, p = {}, v = null, g = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l)
      r.call(l, d) && !s.hasOwnProperty(d) && (p[d] = l[d]);
    if (c && c.defaultProps)
      for (d in l = c.defaultProps, l)
        p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: c, key: v, ref: g, props: p, _owner: i.current };
  }
  return An.Fragment = n, An.jsx = a, An.jsxs = a, An;
}
var Ln = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function wl() {
  return is || (is = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ht, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, m = "@@iterator";
    function f(x) {
      if (x === null || typeof x != "object")
        return null;
      var D = y && x[y] || x[m];
      return typeof D == "function" ? D : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(x) {
      {
        for (var D = arguments.length, H = new Array(D > 1 ? D - 1 : 0), ie = 1; ie < D; ie++)
          H[ie - 1] = arguments[ie];
        C("error", x, H);
      }
    }
    function C(x, D, H) {
      {
        var ie = w.ReactDebugCurrentFrame, me = ie.getStackAddendum();
        me !== "" && (D += "%s", H = H.concat([me]));
        var ge = H.map(function(fe) {
          return String(fe);
        });
        ge.unshift("Warning: " + D), Function.prototype.apply.call(console[x], console, ge);
      }
    }
    var E = !1, h = !1, P = !1, O = !1, V = !1, L;
    L = Symbol.for("react.module.reference");
    function _(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === s || V || x === i || x === u || x === d || O || x === g || E || h || P || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === p || x.$$typeof === a || x.$$typeof === c || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === L || x.getModuleId !== void 0));
    }
    function z(x, D, H) {
      var ie = x.displayName;
      if (ie)
        return ie;
      var me = D.displayName || D.name || "";
      return me !== "" ? H + "(" + me + ")" : H;
    }
    function W(x) {
      return x.displayName || "Context";
    }
    function B(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case c:
            var D = x;
            return W(D) + ".Consumer";
          case a:
            var H = x;
            return W(H._context) + ".Provider";
          case l:
            return z(x, x.render, "ForwardRef");
          case p:
            var ie = x.displayName || null;
            return ie !== null ? ie : B(x.type) || "Memo";
          case v: {
            var me = x, ge = me._payload, fe = me._init;
            try {
              return B(fe(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, A = 0, k, U, G, ee, N, F, X;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function q() {
      {
        if (A === 0) {
          k = console.log, U = console.info, G = console.warn, ee = console.error, N = console.group, F = console.groupCollapsed, X = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        A++;
      }
    }
    function K() {
      {
        if (A--, A === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, x, {
              value: k
            }),
            info: M({}, x, {
              value: U
            }),
            warn: M({}, x, {
              value: G
            }),
            error: M({}, x, {
              value: ee
            }),
            group: M({}, x, {
              value: N
            }),
            groupCollapsed: M({}, x, {
              value: F
            }),
            groupEnd: M({}, x, {
              value: X
            })
          });
        }
        A < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = w.ReactCurrentDispatcher, Q;
    function j(x, D, H) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (me) {
            var ie = me.stack.trim().match(/\n( *(at )?)/);
            Q = ie && ie[1] || "";
          }
        return `
` + Q + x;
      }
    }
    var Y = !1, Z;
    {
      var ue = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new ue();
    }
    function $(x, D) {
      if (!x || Y)
        return "";
      {
        var H = Z.get(x);
        if (H !== void 0)
          return H;
      }
      var ie;
      Y = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = J.current, J.current = null, q();
      try {
        if (D) {
          var fe = function() {
            throw Error();
          };
          if (Object.defineProperty(fe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(fe, []);
            } catch (St) {
              ie = St;
            }
            Reflect.construct(x, [], fe);
          } else {
            try {
              fe.call();
            } catch (St) {
              ie = St;
            }
            x.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            ie = St;
          }
          x();
        }
      } catch (St) {
        if (St && ie && typeof St.stack == "string") {
          for (var de = St.stack.split(`
`), qe = ie.stack.split(`
`), je = de.length - 1, Ae = qe.length - 1; je >= 1 && Ae >= 0 && de[je] !== qe[Ae]; )
            Ae--;
          for (; je >= 1 && Ae >= 0; je--, Ae--)
            if (de[je] !== qe[Ae]) {
              if (je !== 1 || Ae !== 1)
                do
                  if (je--, Ae--, Ae < 0 || de[je] !== qe[Ae]) {
                    var re = `
` + de[je].replace(" at new ", " at ");
                    return x.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", x.displayName)), typeof x == "function" && Z.set(x, re), re;
                  }
                while (je >= 1 && Ae >= 0);
              break;
            }
        }
      } finally {
        Y = !1, J.current = ge, K(), Error.prepareStackTrace = me;
      }
      var ze = x ? x.displayName || x.name : "", rs = ze ? j(ze) : "";
      return typeof x == "function" && Z.set(x, rs), rs;
    }
    function ne(x, D, H) {
      return $(x, !1);
    }
    function S(x) {
      var D = x.prototype;
      return !!(D && D.isReactComponent);
    }
    function ae(x, D, H) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return $(x, S(x));
      if (typeof x == "string")
        return j(x);
      switch (x) {
        case u:
          return j("Suspense");
        case d:
          return j("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return ne(x.render);
          case p:
            return ae(x.type, D, H);
          case v: {
            var ie = x, me = ie._payload, ge = ie._init;
            try {
              return ae(ge(me), D, H);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, De = {}, _e = w.ReactDebugCurrentFrame;
    function et(x) {
      if (x) {
        var D = x._owner, H = ae(x.type, x._source, D ? D.type : null);
        _e.setExtraStackFrame(H);
      } else
        _e.setExtraStackFrame(null);
    }
    function Be(x, D, H, ie, me) {
      {
        var ge = Function.call.bind(he);
        for (var fe in x)
          if (ge(x, fe)) {
            var de = void 0;
            try {
              if (typeof x[fe] != "function") {
                var qe = Error((ie || "React class") + ": " + H + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw qe.name = "Invariant Violation", qe;
              }
              de = x[fe](D, fe, ie, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (je) {
              de = je;
            }
            de && !(de instanceof Error) && (et(me), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", H, fe, typeof de), et(null)), de instanceof Error && !(de.message in De) && (De[de.message] = !0, et(me), R("Failed %s type: %s", H, de.message), et(null));
          }
      }
    }
    var Xe = Array.isArray;
    function We(x) {
      return Xe(x);
    }
    function st(x) {
      {
        var D = typeof Symbol == "function" && Symbol.toStringTag, H = D && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return H;
      }
    }
    function Pe(x) {
      try {
        return Ge(x), !1;
      } catch {
        return !0;
      }
    }
    function Ge(x) {
      return "" + x;
    }
    function Je(x) {
      if (Pe(x))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", st(x)), Ge(x);
    }
    var tt = w.ReactCurrentOwner, kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, le, Ze, Rt;
    Rt = {};
    function bt(x) {
      if (he.call(x, "ref")) {
        var D = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function Wt(x) {
      if (he.call(x, "key")) {
        var D = Object.getOwnPropertyDescriptor(x, "key").get;
        if (D && D.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function pr(x, D) {
      if (typeof x.ref == "string" && tt.current && D && tt.current.stateNode !== D) {
        var H = B(tt.current.type);
        Rt[H] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(tt.current.type), x.ref), Rt[H] = !0);
      }
    }
    function tn(x, D) {
      {
        var H = function() {
          le || (le = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        H.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: H,
          configurable: !0
        });
      }
    }
    function Nn(x, D) {
      {
        var H = function() {
          Ze || (Ze = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        H.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: H,
          configurable: !0
        });
      }
    }
    var mr = function(x, D, H, ie, me, ge, fe) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: D,
        ref: H,
        props: fe,
        // Record the component responsible for creating this element.
        _owner: ge
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: me
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function hr(x, D, H, ie, me) {
      {
        var ge, fe = {}, de = null, qe = null;
        H !== void 0 && (Je(H), de = "" + H), Wt(D) && (Je(D.key), de = "" + D.key), bt(D) && (qe = D.ref, pr(D, me));
        for (ge in D)
          he.call(D, ge) && !kt.hasOwnProperty(ge) && (fe[ge] = D[ge]);
        if (x && x.defaultProps) {
          var je = x.defaultProps;
          for (ge in je)
            fe[ge] === void 0 && (fe[ge] = je[ge]);
        }
        if (de || qe) {
          var Ae = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          de && tn(fe, Ae), qe && Nn(fe, Ae);
        }
        return mr(x, de, qe, me, ie, tt.current, fe);
      }
    }
    var In = w.ReactCurrentOwner, vr = w.ReactDebugCurrentFrame;
    function jt(x) {
      if (x) {
        var D = x._owner, H = ae(x.type, x._source, D ? D.type : null);
        vr.setExtraStackFrame(H);
      } else
        vr.setExtraStackFrame(null);
    }
    var nn;
    nn = !1;
    function rn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function Mn() {
      {
        if (In.current) {
          var x = B(In.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function yr(x) {
      {
        if (x !== void 0) {
          var D = x.fileName.replace(/^.*[\\\/]/, ""), H = x.lineNumber;
          return `

Check your code at ` + D + ":" + H + ".";
        }
        return "";
      }
    }
    var kn = {};
    function gr(x) {
      {
        var D = Mn();
        if (!D) {
          var H = typeof x == "string" ? x : x.displayName || x.name;
          H && (D = `

Check the top-level render call using <` + H + ">.");
        }
        return D;
      }
    }
    function br(x, D) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var H = gr(D);
        if (kn[H])
          return;
        kn[H] = !0;
        var ie = "";
        x && x._owner && x._owner !== In.current && (ie = " It was passed a child from " + B(x._owner.type) + "."), jt(x), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, ie), jt(null);
      }
    }
    function xr(x, D) {
      {
        if (typeof x != "object")
          return;
        if (We(x))
          for (var H = 0; H < x.length; H++) {
            var ie = x[H];
            rn(ie) && br(ie, D);
          }
        else if (rn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var me = f(x);
          if (typeof me == "function" && me !== x.entries)
            for (var ge = me.call(x), fe; !(fe = ge.next()).done; )
              rn(fe.value) && br(fe.value, D);
        }
      }
    }
    function So(x) {
      {
        var D = x.type;
        if (D == null || typeof D == "string")
          return;
        var H;
        if (typeof D == "function")
          H = D.propTypes;
        else if (typeof D == "object" && (D.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        D.$$typeof === p))
          H = D.propTypes;
        else
          return;
        if (H) {
          var ie = B(D);
          Be(H, x.props, "prop", ie, x);
        } else if (D.PropTypes !== void 0 && !nn) {
          nn = !0;
          var me = B(D);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jn(x) {
      {
        for (var D = Object.keys(x.props), H = 0; H < D.length; H++) {
          var ie = D[H];
          if (ie !== "children" && ie !== "key") {
            jt(x), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), jt(null);
            break;
          }
        }
        x.ref !== null && (jt(x), R("Invalid attribute `ref` supplied to `React.Fragment`."), jt(null));
      }
    }
    function Er(x, D, H, ie, me, ge) {
      {
        var fe = _(x);
        if (!fe) {
          var de = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var qe = yr(me);
          qe ? de += qe : de += Mn();
          var je;
          x === null ? je = "null" : We(x) ? je = "array" : x !== void 0 && x.$$typeof === t ? (je = "<" + (B(x.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : je = typeof x, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", je, de);
        }
        var Ae = hr(x, D, H, me, ge);
        if (Ae == null)
          return Ae;
        if (fe) {
          var re = D.children;
          if (re !== void 0)
            if (ie)
              if (We(re)) {
                for (var ze = 0; ze < re.length; ze++)
                  xr(re[ze], x);
                Object.freeze && Object.freeze(re);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xr(re, x);
        }
        return x === r ? jn(Ae) : So(Ae), Ae;
      }
    }
    function Yt(x, D, H) {
      return Er(x, D, H, !0);
    }
    function Dn(x, D, H) {
      return Er(x, D, H, !1);
    }
    var nt = Dn, qt = Yt;
    Ln.Fragment = r, Ln.jsx = nt, Ln.jsxs = qt;
  }()), Ln;
}
process.env.NODE_ENV === "production" ? Uo.exports = Cl() : Uo.exports = wl();
var I = Uo.exports;
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, T.apply(this, arguments);
}
function oe(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
var Wo = { exports: {} }, be = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function Ol() {
  if (ss)
    return be;
  ss = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(f) {
    if (typeof f == "object" && f !== null) {
      var w = f.$$typeof;
      switch (w) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case a:
                case l:
                case v:
                case p:
                case s:
                  return f;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return be.ContextConsumer = a, be.ContextProvider = s, be.Element = e, be.ForwardRef = l, be.Fragment = n, be.Lazy = v, be.Memo = p, be.Portal = t, be.Profiler = i, be.StrictMode = r, be.Suspense = u, be.SuspenseList = d, be.isAsyncMode = function() {
    return !1;
  }, be.isConcurrentMode = function() {
    return !1;
  }, be.isContextConsumer = function(f) {
    return m(f) === a;
  }, be.isContextProvider = function(f) {
    return m(f) === s;
  }, be.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, be.isForwardRef = function(f) {
    return m(f) === l;
  }, be.isFragment = function(f) {
    return m(f) === n;
  }, be.isLazy = function(f) {
    return m(f) === v;
  }, be.isMemo = function(f) {
    return m(f) === p;
  }, be.isPortal = function(f) {
    return m(f) === t;
  }, be.isProfiler = function(f) {
    return m(f) === i;
  }, be.isStrictMode = function(f) {
    return m(f) === r;
  }, be.isSuspense = function(f) {
    return m(f) === u;
  }, be.isSuspenseList = function(f) {
    return m(f) === d;
  }, be.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === u || f === d || f === g || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === p || f.$$typeof === s || f.$$typeof === a || f.$$typeof === l || f.$$typeof === y || f.getModuleId !== void 0);
  }, be.typeOf = m, be;
}
var xe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as;
function Rl() {
  return as || (as = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, f = !1, w = !1, R = !1, C;
    C = Symbol.for("react.module.reference");
    function E(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || R || S === r || S === u || S === d || w || S === g || y || m || f || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === p || S.$$typeof === s || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === C || S.getModuleId !== void 0));
    }
    function h(S) {
      if (typeof S == "object" && S !== null) {
        var ae = S.$$typeof;
        switch (ae) {
          case e:
            var he = S.type;
            switch (he) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return he;
              default:
                var De = he && he.$$typeof;
                switch (De) {
                  case c:
                  case a:
                  case l:
                  case v:
                  case p:
                  case s:
                    return De;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var P = a, O = s, V = e, L = l, _ = n, z = v, W = p, B = t, M = i, A = r, k = u, U = d, G = !1, ee = !1;
    function N(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(S) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(S) {
      return h(S) === a;
    }
    function te(S) {
      return h(S) === s;
    }
    function q(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function K(S) {
      return h(S) === l;
    }
    function J(S) {
      return h(S) === n;
    }
    function Q(S) {
      return h(S) === v;
    }
    function j(S) {
      return h(S) === p;
    }
    function Y(S) {
      return h(S) === t;
    }
    function Z(S) {
      return h(S) === i;
    }
    function ue(S) {
      return h(S) === r;
    }
    function $(S) {
      return h(S) === u;
    }
    function ne(S) {
      return h(S) === d;
    }
    xe.ContextConsumer = P, xe.ContextProvider = O, xe.Element = V, xe.ForwardRef = L, xe.Fragment = _, xe.Lazy = z, xe.Memo = W, xe.Portal = B, xe.Profiler = M, xe.StrictMode = A, xe.Suspense = k, xe.SuspenseList = U, xe.isAsyncMode = N, xe.isConcurrentMode = F, xe.isContextConsumer = X, xe.isContextProvider = te, xe.isElement = q, xe.isForwardRef = K, xe.isFragment = J, xe.isLazy = Q, xe.isMemo = j, xe.isPortal = Y, xe.isProfiler = Z, xe.isStrictMode = ue, xe.isSuspense = $, xe.isSuspenseList = ne, xe.isValidElementType = E, xe.typeOf = h;
  }()), xe;
}
process.env.NODE_ENV === "production" ? Wo.exports = Ol() : Wo.exports = Rl();
var Zr = Wo.exports, Yo = { exports: {} }, Cr = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Sl() {
  if (cs)
    return Ee;
  cs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case r:
            case s:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case y:
                case g:
                case a:
                  return h;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(h) {
    return C(h) === u;
  }
  return Ee.AsyncMode = l, Ee.ConcurrentMode = u, Ee.ContextConsumer = c, Ee.ContextProvider = a, Ee.Element = t, Ee.ForwardRef = d, Ee.Fragment = r, Ee.Lazy = y, Ee.Memo = g, Ee.Portal = n, Ee.Profiler = s, Ee.StrictMode = i, Ee.Suspense = p, Ee.isAsyncMode = function(h) {
    return E(h) || C(h) === l;
  }, Ee.isConcurrentMode = E, Ee.isContextConsumer = function(h) {
    return C(h) === c;
  }, Ee.isContextProvider = function(h) {
    return C(h) === a;
  }, Ee.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Ee.isForwardRef = function(h) {
    return C(h) === d;
  }, Ee.isFragment = function(h) {
    return C(h) === r;
  }, Ee.isLazy = function(h) {
    return C(h) === y;
  }, Ee.isMemo = function(h) {
    return C(h) === g;
  }, Ee.isPortal = function(h) {
    return C(h) === n;
  }, Ee.isProfiler = function(h) {
    return C(h) === s;
  }, Ee.isStrictMode = function(h) {
    return C(h) === i;
  }, Ee.isSuspense = function(h) {
    return C(h) === p;
  }, Ee.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === p || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === f || h.$$typeof === w || h.$$typeof === R || h.$$typeof === m);
  }, Ee.typeOf = C, Ee;
}
var Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ls;
function Pl() {
  return ls || (ls = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function C($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === u || $ === s || $ === i || $ === p || $ === v || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === g || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === f || $.$$typeof === w || $.$$typeof === R || $.$$typeof === m);
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var ne = $.$$typeof;
        switch (ne) {
          case t:
            var S = $.type;
            switch (S) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case p:
                return S;
              default:
                var ae = S && S.$$typeof;
                switch (ae) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return ae;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, P = u, O = c, V = a, L = t, _ = d, z = r, W = y, B = g, M = n, A = s, k = i, U = p, G = !1;
    function ee($) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N($) || E($) === l;
    }
    function N($) {
      return E($) === u;
    }
    function F($) {
      return E($) === c;
    }
    function X($) {
      return E($) === a;
    }
    function te($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function q($) {
      return E($) === d;
    }
    function K($) {
      return E($) === r;
    }
    function J($) {
      return E($) === y;
    }
    function Q($) {
      return E($) === g;
    }
    function j($) {
      return E($) === n;
    }
    function Y($) {
      return E($) === s;
    }
    function Z($) {
      return E($) === i;
    }
    function ue($) {
      return E($) === p;
    }
    Te.AsyncMode = h, Te.ConcurrentMode = P, Te.ContextConsumer = O, Te.ContextProvider = V, Te.Element = L, Te.ForwardRef = _, Te.Fragment = z, Te.Lazy = W, Te.Memo = B, Te.Portal = M, Te.Profiler = A, Te.StrictMode = k, Te.Suspense = U, Te.isAsyncMode = ee, Te.isConcurrentMode = N, Te.isContextConsumer = F, Te.isContextProvider = X, Te.isElement = te, Te.isForwardRef = q, Te.isFragment = K, Te.isLazy = J, Te.isMemo = Q, Te.isPortal = j, Te.isProfiler = Y, Te.isStrictMode = Z, Te.isSuspense = ue, Te.isValidElementType = C, Te.typeOf = E;
  }()), Te;
}
var us;
function ja() {
  return us || (us = 1, process.env.NODE_ENV === "production" ? Cr.exports = Sl() : Cr.exports = Pl()), Cr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Po, ds;
function $l() {
  if (ds)
    return Po;
  ds = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Po = i() ? Object.assign : function(s, a) {
    for (var c, l = r(s), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        u = e(c);
        for (var v = 0; v < u.length; v++)
          n.call(c, u[v]) && (l[u[v]] = c[u[v]]);
      }
    }
    return l;
  }, Po;
}
var $o, fs;
function di() {
  if (fs)
    return $o;
  fs = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $o = e, $o;
}
var _o, ps;
function Da() {
  return ps || (ps = 1, _o = Function.call.bind(Object.prototype.hasOwnProperty)), _o;
}
var No, ms;
function _l() {
  if (ms)
    return No;
  ms = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = di(), n = {}, r = Da();
    e = function(s) {
      var a = "Warning: " + s;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(s, a, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in s)
        if (r(s, d)) {
          var p;
          try {
            if (typeof s[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            p = s[d](a, d, l, c, null, t);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + c + " type: " + p.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, No = i, No;
}
var Io, hs;
function Nl() {
  if (hs)
    return Io;
  hs = 1;
  var e = ja(), t = $l(), n = di(), r = Da(), i = _l(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Io = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(N) {
      var F = N && (u && N[u] || N[d]);
      if (typeof F == "function")
        return F;
    }
    var v = "<<anonymous>>", g = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: R(),
      arrayOf: C,
      element: E(),
      elementType: h(),
      instanceOf: P,
      node: _(),
      objectOf: V,
      oneOf: O,
      oneOfType: L,
      shape: W,
      exact: B
    };
    function y(N, F) {
      return N === F ? N !== 0 || 1 / N === 1 / F : N !== N && F !== F;
    }
    function m(N, F) {
      this.message = N, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function f(N) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, X = 0;
      function te(K, J, Q, j, Y, Z, ue) {
        if (j = j || v, Z = Z || Q, ue !== n) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = j + ":" + Q;
            !F[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[ne] = !0, X++);
          }
        }
        return J[Q] == null ? K ? J[Q] === null ? new m("The " + Y + " `" + Z + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new m("The " + Y + " `" + Z + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : N(J, Q, j, Y, Z);
      }
      var q = te.bind(null, !1);
      return q.isRequired = te.bind(null, !0), q;
    }
    function w(N) {
      function F(X, te, q, K, J, Q) {
        var j = X[te], Y = k(j);
        if (Y !== N) {
          var Z = U(j);
          return new m(
            "Invalid " + K + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + q + "`, expected ") + ("`" + N + "`."),
            { expectedType: N }
          );
        }
        return null;
      }
      return f(F);
    }
    function R() {
      return f(a);
    }
    function C(N) {
      function F(X, te, q, K, J) {
        if (typeof N != "function")
          return new m("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var Q = X[te];
        if (!Array.isArray(Q)) {
          var j = k(Q);
          return new m("Invalid " + K + " `" + J + "` of type " + ("`" + j + "` supplied to `" + q + "`, expected an array."));
        }
        for (var Y = 0; Y < Q.length; Y++) {
          var Z = N(Q, Y, q, K, J + "[" + Y + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return f(F);
    }
    function E() {
      function N(F, X, te, q, K) {
        var J = F[X];
        if (!c(J)) {
          var Q = k(J);
          return new m("Invalid " + q + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + te + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(N);
    }
    function h() {
      function N(F, X, te, q, K) {
        var J = F[X];
        if (!e.isValidElementType(J)) {
          var Q = k(J);
          return new m("Invalid " + q + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + te + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(N);
    }
    function P(N) {
      function F(X, te, q, K, J) {
        if (!(X[te] instanceof N)) {
          var Q = N.name || v, j = ee(X[te]);
          return new m("Invalid " + K + " `" + J + "` of type " + ("`" + j + "` supplied to `" + q + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return f(F);
    }
    function O(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function F(X, te, q, K, J) {
        for (var Q = X[te], j = 0; j < N.length; j++)
          if (y(Q, N[j]))
            return null;
        var Y = JSON.stringify(N, function(ue, $) {
          var ne = U($);
          return ne === "symbol" ? String($) : $;
        });
        return new m("Invalid " + K + " `" + J + "` of value `" + String(Q) + "` " + ("supplied to `" + q + "`, expected one of " + Y + "."));
      }
      return f(F);
    }
    function V(N) {
      function F(X, te, q, K, J) {
        if (typeof N != "function")
          return new m("Property `" + J + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var Q = X[te], j = k(Q);
        if (j !== "object")
          return new m("Invalid " + K + " `" + J + "` of type " + ("`" + j + "` supplied to `" + q + "`, expected an object."));
        for (var Y in Q)
          if (r(Q, Y)) {
            var Z = N(Q, Y, q, K, J + "." + Y, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return f(F);
    }
    function L(N) {
      if (!Array.isArray(N))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var F = 0; F < N.length; F++) {
        var X = N[F];
        if (typeof X != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(X) + " at index " + F + "."
          ), a;
      }
      function te(q, K, J, Q, j) {
        for (var Y = [], Z = 0; Z < N.length; Z++) {
          var ue = N[Z], $ = ue(q, K, J, Q, j, n);
          if ($ == null)
            return null;
          $.data && r($.data, "expectedType") && Y.push($.data.expectedType);
        }
        var ne = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new m("Invalid " + Q + " `" + j + "` supplied to " + ("`" + J + "`" + ne + "."));
      }
      return f(te);
    }
    function _() {
      function N(F, X, te, q, K) {
        return M(F[X]) ? null : new m("Invalid " + q + " `" + K + "` supplied to " + ("`" + te + "`, expected a ReactNode."));
      }
      return f(N);
    }
    function z(N, F, X, te, q) {
      return new m(
        (N || "React class") + ": " + F + " type `" + X + "." + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function W(N) {
      function F(X, te, q, K, J) {
        var Q = X[te], j = k(Q);
        if (j !== "object")
          return new m("Invalid " + K + " `" + J + "` of type `" + j + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var Y in N) {
          var Z = N[Y];
          if (typeof Z != "function")
            return z(q, K, J, Y, U(Z));
          var ue = Z(Q, Y, q, K, J + "." + Y, n);
          if (ue)
            return ue;
        }
        return null;
      }
      return f(F);
    }
    function B(N) {
      function F(X, te, q, K, J) {
        var Q = X[te], j = k(Q);
        if (j !== "object")
          return new m("Invalid " + K + " `" + J + "` of type `" + j + "` " + ("supplied to `" + q + "`, expected `object`."));
        var Y = t({}, X[te], N);
        for (var Z in Y) {
          var ue = N[Z];
          if (r(N, Z) && typeof ue != "function")
            return z(q, K, J, Z, U(ue));
          if (!ue)
            return new m(
              "Invalid " + K + " `" + J + "` key `" + Z + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(X[te], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(N), null, "  ")
            );
          var $ = ue(Q, Z, q, K, J + "." + Z, n);
          if ($)
            return $;
        }
        return null;
      }
      return f(F);
    }
    function M(N) {
      switch (typeof N) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !N;
        case "object":
          if (Array.isArray(N))
            return N.every(M);
          if (N === null || c(N))
            return !0;
          var F = p(N);
          if (F) {
            var X = F.call(N), te;
            if (F !== N.entries) {
              for (; !(te = X.next()).done; )
                if (!M(te.value))
                  return !1;
            } else
              for (; !(te = X.next()).done; ) {
                var q = te.value;
                if (q && !M(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function A(N, F) {
      return N === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function k(N) {
      var F = typeof N;
      return Array.isArray(N) ? "array" : N instanceof RegExp ? "object" : A(F, N) ? "symbol" : F;
    }
    function U(N) {
      if (typeof N > "u" || N === null)
        return "" + N;
      var F = k(N);
      if (F === "object") {
        if (N instanceof Date)
          return "date";
        if (N instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function G(N) {
      var F = U(N);
      switch (F) {
        case "array":
        case "object":
          return "an " + F;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + F;
        default:
          return F;
      }
    }
    function ee(N) {
      return !N.constructor || !N.constructor.name ? v : N.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, Io;
}
var Mo, vs;
function Il() {
  if (vs)
    return Mo;
  vs = 1;
  var e = di();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Mo = function() {
    function r(a, c, l, u, d, p) {
      if (p !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return s.PropTypes = s, s;
  }, Mo;
}
if (process.env.NODE_ENV !== "production") {
  var Ml = ja(), kl = !0;
  Yo.exports = Nl()(Ml.isElement, kl);
} else
  Yo.exports = Il()();
var jl = Yo.exports;
const o = /* @__PURE__ */ El(jl);
function Aa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Aa(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function se() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Aa(e)) && (r && (r += " "), r += t);
  return r;
}
function Bt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function $t(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function La(e) {
  if (!$t(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = La(e[n]);
  }), t;
}
function yt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? T({}, e) : e;
  return $t(e) && $t(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && ($t(t[i]) && i in e && $t(e[i]) ? r[i] = yt(e[i], t[i], n) : n.clone ? r[i] = $t(t[i]) ? La(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function Dl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Fa(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !Dl(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Va = Bt(o.element, Fa);
Va.isRequired = Bt(o.element.isRequired, Fa);
const Rn = Va;
function Al(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ll(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Al(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fi = Bt(o.elementType, Ll), Fl = "exact-prop: ​";
function Ba(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [Fl]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function yn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var qo = { exports: {} }, Ce = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ys;
function Vl() {
  if (ys)
    return Ce;
  ys = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function m(f) {
    if (typeof f == "object" && f !== null) {
      var w = f.$$typeof;
      switch (w) {
        case e:
          switch (f = f.type, f) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case a:
                case l:
                case v:
                case p:
                case s:
                  return f;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return Ce.ContextConsumer = a, Ce.ContextProvider = s, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = n, Ce.Lazy = v, Ce.Memo = p, Ce.Portal = t, Ce.Profiler = i, Ce.StrictMode = r, Ce.Suspense = u, Ce.SuspenseList = d, Ce.isAsyncMode = function() {
    return !1;
  }, Ce.isConcurrentMode = function() {
    return !1;
  }, Ce.isContextConsumer = function(f) {
    return m(f) === a;
  }, Ce.isContextProvider = function(f) {
    return m(f) === s;
  }, Ce.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, Ce.isForwardRef = function(f) {
    return m(f) === l;
  }, Ce.isFragment = function(f) {
    return m(f) === n;
  }, Ce.isLazy = function(f) {
    return m(f) === v;
  }, Ce.isMemo = function(f) {
    return m(f) === p;
  }, Ce.isPortal = function(f) {
    return m(f) === t;
  }, Ce.isProfiler = function(f) {
    return m(f) === i;
  }, Ce.isStrictMode = function(f) {
    return m(f) === r;
  }, Ce.isSuspense = function(f) {
    return m(f) === u;
  }, Ce.isSuspenseList = function(f) {
    return m(f) === d;
  }, Ce.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === i || f === r || f === u || f === d || f === g || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === p || f.$$typeof === s || f.$$typeof === a || f.$$typeof === l || f.$$typeof === y || f.getModuleId !== void 0);
  }, Ce.typeOf = m, Ce;
}
var we = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function Bl() {
  return gs || (gs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, m = !1, f = !1, w = !1, R = !1, C;
    C = Symbol.for("react.module.reference");
    function E(S) {
      return !!(typeof S == "string" || typeof S == "function" || S === n || S === i || R || S === r || S === u || S === d || w || S === g || y || m || f || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === p || S.$$typeof === s || S.$$typeof === a || S.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      S.$$typeof === C || S.getModuleId !== void 0));
    }
    function h(S) {
      if (typeof S == "object" && S !== null) {
        var ae = S.$$typeof;
        switch (ae) {
          case e:
            var he = S.type;
            switch (he) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return he;
              default:
                var De = he && he.$$typeof;
                switch (De) {
                  case c:
                  case a:
                  case l:
                  case v:
                  case p:
                  case s:
                    return De;
                  default:
                    return ae;
                }
            }
          case t:
            return ae;
        }
      }
    }
    var P = a, O = s, V = e, L = l, _ = n, z = v, W = p, B = t, M = i, A = r, k = u, U = d, G = !1, ee = !1;
    function N(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(S) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(S) {
      return h(S) === a;
    }
    function te(S) {
      return h(S) === s;
    }
    function q(S) {
      return typeof S == "object" && S !== null && S.$$typeof === e;
    }
    function K(S) {
      return h(S) === l;
    }
    function J(S) {
      return h(S) === n;
    }
    function Q(S) {
      return h(S) === v;
    }
    function j(S) {
      return h(S) === p;
    }
    function Y(S) {
      return h(S) === t;
    }
    function Z(S) {
      return h(S) === i;
    }
    function ue(S) {
      return h(S) === r;
    }
    function $(S) {
      return h(S) === u;
    }
    function ne(S) {
      return h(S) === d;
    }
    we.ContextConsumer = P, we.ContextProvider = O, we.Element = V, we.ForwardRef = L, we.Fragment = _, we.Lazy = z, we.Memo = W, we.Portal = B, we.Profiler = M, we.StrictMode = A, we.Suspense = k, we.SuspenseList = U, we.isAsyncMode = N, we.isConcurrentMode = F, we.isContextConsumer = X, we.isContextProvider = te, we.isElement = q, we.isForwardRef = K, we.isFragment = J, we.isLazy = Q, we.isMemo = j, we.isPortal = Y, we.isProfiler = Z, we.isStrictMode = ue, we.isSuspense = $, we.isSuspenseList = ne, we.isValidElementType = E, we.typeOf = h;
  }()), we;
}
process.env.NODE_ENV === "production" ? qo.exports = Vl() : qo.exports = Bl();
var bs = qo.exports;
const zl = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ul(e) {
  const t = `${e}`.match(zl);
  return t && t[1] || "";
}
function za(e, t = "") {
  return e.displayName || e.name || Ul(e) || t;
}
function xs(e, t, n) {
  const r = za(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Wl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return za(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case bs.ForwardRef:
          return xs(e, e.render, "ForwardRef");
        case bs.Memo:
          return xs(e, e.type, "memo");
        default:
          return;
      }
  }
}
function _t(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Yl = o.oneOfType([o.func, o.object]), Qr = Yl;
function pe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : yn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ho(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Ua(e, t = 166) {
  let n;
  function r(...i) {
    const s = () => {
      e.apply(this, i);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function ql(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, i, s, a) => {
    const c = i || "<<anonymous>>", l = a || r;
    return typeof n[r] < "u" ? new Error(`The ${s} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function eo(e, t) {
  var n, r;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Qe(e) {
  return e && e.ownerDocument || document;
}
function gn(e) {
  return Qe(e).defaultView || window;
}
function Hl(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? T({}, t.propTypes) : null;
  return (i) => (s, a, c, l, u, ...d) => {
    const p = u || a, v = n == null ? void 0 : n[p];
    if (v) {
      const g = v(s, a, c, l, u, ...d);
      if (g)
        return g;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Vr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Gl = typeof window < "u" ? b.useLayoutEffect : b.useEffect, wt = Gl;
let Es = 0;
function Kl(e) {
  const [t, n] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (Es += 1, n(`mui-${Es}`));
  }, [t]), r;
}
const Ts = b["useId".toString()];
function Wa(e) {
  if (Ts !== void 0) {
    const t = Ts();
    return e ?? t;
  }
  return Kl(e);
}
function Xl(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function pi({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = b.useRef(e !== void 0), [s, a] = b.useState(t), c = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    b.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = b.useRef(t);
    b.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = b.useCallback((u) => {
    i || a(u);
  }, []);
  return [c, l];
}
function Lt(e) {
  const t = b.useRef(e);
  return wt(() => {
    t.current = e;
  }), b.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function Ye(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Vr(n, t);
    });
  }, e);
}
let to = !0, Go = !1, Cs;
const Jl = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Zl(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Jl[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ql(e) {
  e.metaKey || e.altKey || e.ctrlKey || (to = !0);
}
function ko() {
  to = !1;
}
function eu() {
  this.visibilityState === "hidden" && Go && (to = !0);
}
function tu(e) {
  e.addEventListener("keydown", Ql, !0), e.addEventListener("mousedown", ko, !0), e.addEventListener("pointerdown", ko, !0), e.addEventListener("touchstart", ko, !0), e.addEventListener("visibilitychange", eu, !0);
}
function nu(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return to || Zl(t);
}
function mi() {
  const e = b.useCallback((i) => {
    i != null && tu(i.ownerDocument);
  }, []), t = b.useRef(!1);
  function n() {
    return t.current ? (Go = !0, window.clearTimeout(Cs), Cs = window.setTimeout(() => {
      Go = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return nu(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Ya(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function ru(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function ou(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const iu = Number.isInteger || ou;
function qa(e, t, n, r) {
  const i = e[t];
  if (i == null || !iu(i)) {
    const s = ru(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ha(e, t, ...n) {
  return e[t] === void 0 ? null : qa(e, t, ...n);
}
function Ko() {
  return null;
}
Ha.isRequired = qa;
Ko.isRequired = Ko;
const Kn = process.env.NODE_ENV === "production" ? Ko : Ha;
function hi(e, t) {
  const n = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = T({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = T({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = hi(i[a], s[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Me(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (i) => {
      r[i] = e[i].reduce((s, a) => {
        if (a) {
          const c = t(a);
          c !== "" && s.push(c), n && n[a] && s.push(n[a]);
        }
        return s;
      }, []).join(" ");
    }
  ), r;
}
const ws = (e) => e, su = () => {
  let e = ws;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ws;
    }
  };
}, au = su(), Ga = au, cu = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function $e(e, t, n = "Mui") {
  const r = cu[t];
  return r ? `${n}-${r}` : `${Ga.generate(e)}-${t}`;
}
function Ne(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = $e(e, i, n);
  }), r;
}
function Br(e) {
  return typeof e == "string";
}
function qn(e, t, n) {
  return e === void 0 || Br(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, n)
  });
}
const lu = {
  disableDefaultClasses: !1
}, uu = /* @__PURE__ */ b.createContext(lu);
function du(e) {
  const {
    disableDefaultClasses: t
  } = b.useContext(uu);
  return (n) => t ? "" : e(n);
}
function Ka(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function fu(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Os(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function pu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = se(i == null ? void 0 : i.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className), y = T({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = T({}, n, i, r);
    return g.length > 0 && (m.className = g), Object.keys(y).length > 0 && (m.style = y), {
      props: m,
      internalRef: void 0
    };
  }
  const a = Ka(T({}, i, r)), c = Os(r), l = Os(i), u = t(a), d = se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = T({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), v = T({}, u, n, l, c);
  return d.length > 0 && (v.className = d), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: u.ref
  };
}
const mu = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Vt(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = oe(e, mu), c = s ? {} : fu(r, i), {
    props: l,
    internalRef: u
  } = pu(T({}, a, {
    externalSlotProps: c
  })), d = Ye(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return qn(n, T({}, l, {
    ref: d
  }), i);
}
const hu = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function vu(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function yu(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function gu(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || yu(e));
}
function bu(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(hu)).forEach((r, i) => {
    const s = vu(r);
    s === -1 || !gu(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function xu() {
  return !0;
}
function zr(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = bu,
    isEnabled: a = xu,
    open: c
  } = e, l = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), p = b.useRef(null), v = b.useRef(null), g = b.useRef(!1), y = b.useRef(null), m = Ye(t.ref, y), f = b.useRef(null);
  b.useEffect(() => {
    !c || !y.current || (g.current = !n);
  }, [n, c]), b.useEffect(() => {
    if (!c || !y.current)
      return;
    const C = Qe(y.current);
    return y.current.contains(C.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      i || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null);
    };
  }, [c]), b.useEffect(() => {
    if (!c || !y.current)
      return;
    const C = Qe(y.current), E = (O) => {
      f.current = O, !(r || !a() || O.key !== "Tab") && C.activeElement === y.current && O.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const O = y.current;
      if (O === null)
        return;
      if (!C.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (O.contains(C.activeElement) || r && C.activeElement !== u.current && C.activeElement !== d.current)
        return;
      if (C.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!g.current)
        return;
      let V = [];
      if ((C.activeElement === u.current || C.activeElement === d.current) && (V = s(y.current)), V.length > 0) {
        var L, _;
        const z = !!((L = f.current) != null && L.shiftKey && ((_ = f.current) == null ? void 0 : _.key) === "Tab"), W = V[0], B = V[V.length - 1];
        typeof W != "string" && typeof B != "string" && (z ? B.focus() : W.focus());
      } else
        O.focus();
    };
    C.addEventListener("focusin", h), C.addEventListener("keydown", E, !0);
    const P = setInterval(() => {
      C.activeElement && C.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(P), C.removeEventListener("focusin", h), C.removeEventListener("keydown", E, !0);
    };
  }, [n, r, i, a, c, s]);
  const w = (C) => {
    p.current === null && (p.current = C.relatedTarget), g.current = !0, v.current = C.target;
    const E = t.props.onFocus;
    E && E(C);
  }, R = (C) => {
    p.current === null && (p.current = C.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ I.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ I.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: m,
      onFocus: w
    }), /* @__PURE__ */ I.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (zr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Rn,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: o.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: o.func,
  /**
   * If `true`, focus is locked.
   */
  open: o.bool.isRequired
});
process.env.NODE_ENV !== "production" && (zr["propTypes"] = Ba(zr.propTypes));
var rt = "top", ft = "bottom", pt = "right", ot = "left", yi = "auto", ar = [rt, ft, pt, ot], bn = "start", er = "end", Eu = "clippingParents", Xa = "viewport", Fn = "popper", Tu = "reference", Rs = /* @__PURE__ */ ar.reduce(function(e, t) {
  return e.concat([t + "-" + bn, t + "-" + er]);
}, []), Ja = /* @__PURE__ */ [].concat(ar, [yi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + bn, t + "-" + er]);
}, []), Cu = "beforeRead", wu = "read", Ou = "afterRead", Ru = "beforeMain", Su = "main", Pu = "afterMain", $u = "beforeWrite", _u = "write", Nu = "afterWrite", Iu = [Cu, wu, Ou, Ru, Su, Pu, $u, _u, Nu];
function Ot(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function lt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zt(e) {
  var t = lt(e).Element;
  return e instanceof t || e instanceof Element;
}
function dt(e) {
  var t = lt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Mu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !dt(s) || !Ot(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function ku(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var i = t.elements[r], s = t.attributes[r] || {}, a = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), c = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !dt(i) || !Ot(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const ju = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Mu,
  effect: ku,
  requires: ["computeStyles"]
};
function Tt(e) {
  return e.split("-")[0];
}
var Jt = Math.max, Ur = Math.min, xn = Math.round;
function Xo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Za() {
  return !/^((?!chrome|android).)*safari/i.test(Xo());
}
function En(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && dt(e) && (i = e.offsetWidth > 0 && xn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && xn(r.height) / e.offsetHeight || 1);
  var a = Zt(e) ? lt(e) : window, c = a.visualViewport, l = !Za() && n, u = (r.left + (l && c ? c.offsetLeft : 0)) / i, d = (r.top + (l && c ? c.offsetTop : 0)) / s, p = r.width / i, v = r.height / s;
  return {
    width: p,
    height: v,
    top: d,
    right: u + p,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function bi(e) {
  var t = En(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Qa(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Nt(e) {
  return lt(e).getComputedStyle(e);
}
function Du(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function zt(e) {
  return ((Zt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function no(e) {
  return Ot(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (gi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    zt(e)
  );
}
function Ss(e) {
  return !dt(e) || // https://github.com/popperjs/popper-core/issues/837
  Nt(e).position === "fixed" ? null : e.offsetParent;
}
function Au(e) {
  var t = /firefox/i.test(Xo()), n = /Trident/i.test(Xo());
  if (n && dt(e)) {
    var r = Nt(e);
    if (r.position === "fixed")
      return null;
  }
  var i = no(e);
  for (gi(i) && (i = i.host); dt(i) && ["html", "body"].indexOf(Ot(i)) < 0; ) {
    var s = Nt(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function cr(e) {
  for (var t = lt(e), n = Ss(e); n && Du(n) && Nt(n).position === "static"; )
    n = Ss(n);
  return n && (Ot(n) === "html" || Ot(n) === "body" && Nt(n).position === "static") ? t : n || Au(e) || t;
}
function xi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xn(e, t, n) {
  return Jt(e, Ur(t, n));
}
function Lu(e, t, n) {
  var r = Xn(e, t, n);
  return r > n ? n : r;
}
function ec() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tc(e) {
  return Object.assign({}, ec(), e);
}
function nc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Fu = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, tc(typeof t != "number" ? t : nc(t, ar));
};
function Vu(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Tt(n.placement), l = xi(c), u = [ot, pt].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = Fu(i.padding, n), v = bi(s), g = l === "y" ? rt : ot, y = l === "y" ? ft : pt, m = n.rects.reference[d] + n.rects.reference[l] - a[l] - n.rects.popper[d], f = a[l] - n.rects.reference[l], w = cr(s), R = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, C = m / 2 - f / 2, E = p[g], h = R - v[d] - p[y], P = R / 2 - v[d] / 2 + C, O = Xn(E, P, h), V = l;
    n.modifiersData[r] = (t = {}, t[V] = O, t.centerOffset = O - P, t);
  }
}
function Bu(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Qa(t.elements.popper, i) && (t.elements.arrow = i));
}
const zu = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Vu,
  effect: Bu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Tn(e) {
  return e.split("-")[1];
}
var Uu = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Wu(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: xn(n * i) / i || 0,
    y: xn(r * i) / i || 0
  };
}
function Ps(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, y = a.y, m = y === void 0 ? 0 : y, f = typeof d == "function" ? d({
    x: g,
    y: m
  }) : {
    x: g,
    y: m
  };
  g = f.x, m = f.y;
  var w = a.hasOwnProperty("x"), R = a.hasOwnProperty("y"), C = ot, E = rt, h = window;
  if (u) {
    var P = cr(n), O = "clientHeight", V = "clientWidth";
    if (P === lt(n) && (P = zt(n), Nt(P).position !== "static" && c === "absolute" && (O = "scrollHeight", V = "scrollWidth")), P = P, i === rt || (i === ot || i === pt) && s === er) {
      E = ft;
      var L = p && P === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[O]
      );
      m -= L - r.height, m *= l ? 1 : -1;
    }
    if (i === ot || (i === rt || i === ft) && s === er) {
      C = pt;
      var _ = p && P === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[V]
      );
      g -= _ - r.width, g *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: c
  }, u && Uu), W = d === !0 ? Wu({
    x: g,
    y: m
  }, lt(n)) : {
    x: g,
    y: m
  };
  if (g = W.x, m = W.y, l) {
    var B;
    return Object.assign({}, z, (B = {}, B[E] = R ? "0" : "", B[C] = w ? "0" : "", B.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + m + "px)" : "translate3d(" + g + "px, " + m + "px, 0)", B));
  }
  return Object.assign({}, z, (t = {}, t[E] = R ? m + "px" : "", t[C] = w ? g + "px" : "", t.transform = "", t));
}
function Yu(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: Tt(t.placement),
    variation: Tn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ps(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ps(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const qu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Yu,
  data: {}
};
var wr = {
  passive: !0
};
function Hu(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, l = lt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, wr);
  }), c && l.addEventListener("resize", n.update, wr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, wr);
    }), c && l.removeEventListener("resize", n.update, wr);
  };
}
const Gu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hu,
  data: {}
};
var Ku = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ku[t];
  });
}
var Xu = {
  start: "end",
  end: "start"
};
function $s(e) {
  return e.replace(/start|end/g, function(t) {
    return Xu[t];
  });
}
function Ei(e) {
  var t = lt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Ti(e) {
  return En(zt(e)).left + Ei(e).scrollLeft;
}
function Ju(e, t) {
  var n = lt(e), r = zt(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = Za();
    (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + Ti(e),
    y: l
  };
}
function Zu(e) {
  var t, n = zt(e), r = Ei(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Jt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Jt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + Ti(e), l = -r.scrollTop;
  return Nt(i || n).direction === "rtl" && (c += Jt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function Ci(e) {
  var t = Nt(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function rc(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0 ? e.ownerDocument.body : dt(e) && Ci(e) ? e : rc(no(e));
}
function Jn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = rc(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = lt(r), a = i ? [s].concat(s.visualViewport || [], Ci(r) ? r : []) : r, c = t.concat(a);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Jn(no(a)))
  );
}
function Jo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Qu(e, t) {
  var n = En(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function _s(e, t, n) {
  return t === Xa ? Jo(Ju(e, n)) : Zt(t) ? Qu(t, n) : Jo(Zu(zt(e)));
}
function ed(e) {
  var t = Jn(no(e)), n = ["absolute", "fixed"].indexOf(Nt(e).position) >= 0, r = n && dt(e) ? cr(e) : e;
  return Zt(r) ? t.filter(function(i) {
    return Zt(i) && Qa(i, r) && Ot(i) !== "body";
  }) : [];
}
function td(e, t, n, r) {
  var i = t === "clippingParents" ? ed(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], c = s.reduce(function(l, u) {
    var d = _s(e, u, r);
    return l.top = Jt(d.top, l.top), l.right = Ur(d.right, l.right), l.bottom = Ur(d.bottom, l.bottom), l.left = Jt(d.left, l.left), l;
  }, _s(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function oc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Tt(r) : null, s = r ? Tn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case rt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ft:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case pt:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case ot:
      l = {
        x: t.x - n.width,
        y: c
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = i ? xi(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case bn:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case er:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function tr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, c = n.boundary, l = c === void 0 ? Eu : c, u = n.rootBoundary, d = u === void 0 ? Xa : u, p = n.elementContext, v = p === void 0 ? Fn : p, g = n.altBoundary, y = g === void 0 ? !1 : g, m = n.padding, f = m === void 0 ? 0 : m, w = tc(typeof f != "number" ? f : nc(f, ar)), R = v === Fn ? Tu : Fn, C = e.rects.popper, E = e.elements[y ? R : v], h = td(Zt(E) ? E : E.contextElement || zt(e.elements.popper), l, d, a), P = En(e.elements.reference), O = oc({
    reference: P,
    element: C,
    strategy: "absolute",
    placement: i
  }), V = Jo(Object.assign({}, C, O)), L = v === Fn ? V : P, _ = {
    top: h.top - L.top + w.top,
    bottom: L.bottom - h.bottom + w.bottom,
    left: h.left - L.left + w.left,
    right: L.right - h.right + w.right
  }, z = e.modifiersData.offset;
  if (v === Fn && z) {
    var W = z[i];
    Object.keys(_).forEach(function(B) {
      var M = [pt, ft].indexOf(B) >= 0 ? 1 : -1, A = [rt, ft].indexOf(B) >= 0 ? "y" : "x";
      _[B] += W[A] * M;
    });
  }
  return _;
}
function nd(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ja : l, d = Tn(r), p = d ? c ? Rs : Rs.filter(function(y) {
    return Tn(y) === d;
  }) : ar, v = p.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  v.length === 0 && (v = p);
  var g = v.reduce(function(y, m) {
    return y[m] = tr(e, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Tt(m)], y;
  }, {});
  return Object.keys(g).sort(function(y, m) {
    return g[y] - g[m];
  });
}
function rd(e) {
  if (Tt(e) === yi)
    return [];
  var t = Mr(e);
  return [$s(e), t, $s(t)];
}
function od(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, m = n.allowedAutoPlacements, f = t.options.placement, w = Tt(f), R = w === f, C = l || (R || !y ? [Mr(f)] : rd(f)), E = [f].concat(C).reduce(function(q, K) {
      return q.concat(Tt(K) === yi ? nd(t, {
        placement: K,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: m
      }) : K);
    }, []), h = t.rects.reference, P = t.rects.popper, O = /* @__PURE__ */ new Map(), V = !0, L = E[0], _ = 0; _ < E.length; _++) {
      var z = E[_], W = Tt(z), B = Tn(z) === bn, M = [rt, ft].indexOf(W) >= 0, A = M ? "width" : "height", k = tr(t, {
        placement: z,
        boundary: d,
        rootBoundary: p,
        altBoundary: v,
        padding: u
      }), U = M ? B ? pt : ot : B ? ft : rt;
      h[A] > P[A] && (U = Mr(U));
      var G = Mr(U), ee = [];
      if (s && ee.push(k[W] <= 0), c && ee.push(k[U] <= 0, k[G] <= 0), ee.every(function(q) {
        return q;
      })) {
        L = z, V = !1;
        break;
      }
      O.set(z, ee);
    }
    if (V)
      for (var N = y ? 3 : 1, F = function(K) {
        var J = E.find(function(Q) {
          var j = O.get(Q);
          if (j)
            return j.slice(0, K).every(function(Y) {
              return Y;
            });
        });
        if (J)
          return L = J, "break";
      }, X = N; X > 0; X--) {
        var te = F(X);
        if (te === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const id = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: od,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ns(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Is(e) {
  return [rt, pt, ft, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function sd(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = tr(t, {
    elementContext: "reference"
  }), c = tr(t, {
    altBoundary: !0
  }), l = Ns(a, r), u = Ns(c, i, s), d = Is(l), p = Is(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const ad = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: sd
};
function cd(e, t, n) {
  var r = Tt(e), i = [ot, rt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * i, [ot, pt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function ld(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Ja.reduce(function(d, p) {
    return d[p] = cd(p, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const ud = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ld
};
function dd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const fd = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: dd,
  data: {}
};
function pd(e) {
  return e === "x" ? "y" : "x";
}
function md(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, v = n.tether, g = v === void 0 ? !0 : v, y = n.tetherOffset, m = y === void 0 ? 0 : y, f = tr(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), w = Tt(t.placement), R = Tn(t.placement), C = !R, E = xi(w), h = pd(E), P = t.modifiersData.popperOffsets, O = t.rects.reference, V = t.rects.popper, L = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, _ = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if (P) {
    if (s) {
      var B, M = E === "y" ? rt : ot, A = E === "y" ? ft : pt, k = E === "y" ? "height" : "width", U = P[E], G = U + f[M], ee = U - f[A], N = g ? -V[k] / 2 : 0, F = R === bn ? O[k] : V[k], X = R === bn ? -V[k] : -O[k], te = t.elements.arrow, q = g && te ? bi(te) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ec(), J = K[M], Q = K[A], j = Xn(0, O[k], q[k]), Y = C ? O[k] / 2 - N - j - J - _.mainAxis : F - j - J - _.mainAxis, Z = C ? -O[k] / 2 + N + j + Q + _.mainAxis : X + j + Q + _.mainAxis, ue = t.elements.arrow && cr(t.elements.arrow), $ = ue ? E === "y" ? ue.clientTop || 0 : ue.clientLeft || 0 : 0, ne = (B = z == null ? void 0 : z[E]) != null ? B : 0, S = U + Y - ne - $, ae = U + Z - ne, he = Xn(g ? Ur(G, S) : G, U, g ? Jt(ee, ae) : ee);
      P[E] = he, W[E] = he - U;
    }
    if (c) {
      var De, _e = E === "x" ? rt : ot, et = E === "x" ? ft : pt, Be = P[h], Xe = h === "y" ? "height" : "width", We = Be + f[_e], st = Be - f[et], Pe = [rt, ot].indexOf(w) !== -1, Ge = (De = z == null ? void 0 : z[h]) != null ? De : 0, Je = Pe ? We : Be - O[Xe] - V[Xe] - Ge + _.altAxis, tt = Pe ? Be + O[Xe] + V[Xe] - Ge - _.altAxis : st, kt = g && Pe ? Lu(Je, Be, tt) : Xn(g ? Je : We, Be, g ? tt : st);
      P[h] = kt, W[h] = kt - Be;
    }
    t.modifiersData[r] = W;
  }
}
const hd = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: md,
  requiresIfExists: ["offset"]
};
function vd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yd(e) {
  return e === lt(e) || !dt(e) ? Ei(e) : vd(e);
}
function gd(e) {
  var t = e.getBoundingClientRect(), n = xn(t.width) / e.offsetWidth || 1, r = xn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function bd(e, t, n) {
  n === void 0 && (n = !1);
  var r = dt(t), i = dt(t) && gd(t), s = zt(t), a = En(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ot(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ci(s)) && (c = yd(t)), dt(t) ? (l = En(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Ti(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function xd(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var a = [].concat(s.requires || [], s.requiresIfExists || []);
    a.forEach(function(c) {
      if (!n.has(c)) {
        var l = t.get(c);
        l && i(l);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || i(s);
  }), r;
}
function Ed(e) {
  var t = xd(e);
  return Iu.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Td(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Cd(e) {
  var t = e.reduce(function(n, r) {
    var i = n[r.name];
    return n[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ms = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ks() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function wd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Ms : i;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ms, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, g = {
      state: d,
      setOptions: function(w) {
        var R = typeof w == "function" ? w(d.options) : w;
        m(), d.options = Object.assign({}, s, d.options, R), d.scrollParents = {
          reference: Zt(c) ? Jn(c) : c.contextElement ? Jn(c.contextElement) : [],
          popper: Jn(l)
        };
        var C = Ed(Cd([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = C.filter(function(E) {
          return E.enabled;
        }), y(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var w = d.elements, R = w.reference, C = w.popper;
          if (ks(R, C)) {
            d.rects = {
              reference: bd(R, cr(C), d.options.strategy === "fixed"),
              popper: bi(C)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(_) {
              return d.modifiersData[_.name] = Object.assign({}, _.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var h = d.orderedModifiers[E], P = h.fn, O = h.options, V = O === void 0 ? {} : O, L = h.name;
              typeof P == "function" && (d = P({
                state: d,
                options: V,
                name: L,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Td(function() {
        return new Promise(function(f) {
          g.forceUpdate(), f(d);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!ks(c, l))
      return g;
    g.setOptions(u).then(function(f) {
      !v && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function y() {
      d.orderedModifiers.forEach(function(f) {
        var w = f.name, R = f.options, C = R === void 0 ? {} : R, E = f.effect;
        if (typeof E == "function") {
          var h = E({
            state: d,
            name: w,
            instance: g,
            options: C
          }), P = function() {
          };
          p.push(h || P);
        }
      });
    }
    function m() {
      p.forEach(function(f) {
        return f();
      }), p = [];
    }
    return g;
  };
}
var Od = [Gu, fd, qu, ju, ud, id, hd, zu, ad], Rd = /* @__PURE__ */ wd({
  defaultModifiers: Od
});
function Sd(e) {
  return typeof e == "function" ? e() : e;
}
const nr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = b.useState(null), l = Ye(/* @__PURE__ */ b.isValidElement(r) ? r.ref : null, n);
  if (wt(() => {
    s || c(Sd(i) || document.body);
  }, [i, s]), wt(() => {
    if (a && !s)
      return Vr(n, a), () => {
        Vr(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ I.jsx(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ I.jsx(b.Fragment, {
    children: a && /* @__PURE__ */ xl.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (nr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: o.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([_t, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (nr["propTypes"] = Ba(nr.propTypes));
function Pd(e) {
  return $e("MuiPopper", e);
}
Ne("MuiPopper", ["root"]);
const $d = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], _d = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Nd(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Wr(e) {
  return typeof e == "function" ? e() : e;
}
function ro(e) {
  return e.nodeType !== void 0;
}
function Id(e) {
  return !ro(e);
}
const Md = () => Me({
  root: ["root"]
}, du(Pd)), kd = {}, jd = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: i,
    children: s,
    direction: a,
    disablePortal: c,
    modifiers: l,
    open: u,
    placement: d,
    popperOptions: p,
    popperRef: v,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, f = oe(t, $d), w = b.useRef(null), R = Ye(w, n), C = b.useRef(null), E = Ye(C, v), h = b.useRef(E);
  wt(() => {
    h.current = E;
  }, [E]), b.useImperativeHandle(v, () => C.current, []);
  const P = Nd(d, a), [O, V] = b.useState(P), [L, _] = b.useState(Wr(i));
  b.useEffect(() => {
    C.current && C.current.forceUpdate();
  }), b.useEffect(() => {
    i && _(Wr(i));
  }, [i]), wt(() => {
    if (!L || !u)
      return;
    const A = (G) => {
      V(G.placement);
    };
    if (process.env.NODE_ENV !== "production" && L && ro(L) && L.nodeType === 1) {
      const G = L.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && G.top === 0 && G.left === 0 && G.right === 0 && G.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let k = [{
      name: "preventOverflow",
      options: {
        altBoundary: c
      }
    }, {
      name: "flip",
      options: {
        altBoundary: c
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: G
      }) => {
        A(G);
      }
    }];
    l != null && (k = k.concat(l)), p && p.modifiers != null && (k = k.concat(p.modifiers));
    const U = Rd(L, w.current, T({
      placement: P
    }, p, {
      modifiers: k
    }));
    return h.current(U), () => {
      U.destroy(), h.current(null);
    };
  }, [L, c, l, u, p, P]);
  const z = {
    placement: O
  };
  m !== null && (z.TransitionProps = m);
  const W = Md(), B = (r = y.root) != null ? r : "div", M = Vt({
    elementType: B,
    externalSlotProps: g.root,
    externalForwardedProps: f,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: W.root
  });
  return /* @__PURE__ */ I.jsx(B, T({}, M, {
    children: typeof s == "function" ? s(z) : s
  }));
}), ic = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: v = kd,
    popperRef: g,
    style: y,
    transition: m = !1,
    slotProps: f = {},
    slots: w = {}
  } = t, R = oe(t, _d), [C, E] = b.useState(!0), h = () => {
    E(!1);
  }, P = () => {
    E(!0);
  };
  if (!l && !d && (!m || C))
    return null;
  let O;
  if (s)
    O = s;
  else if (r) {
    const _ = Wr(r);
    O = _ && ro(_) ? Qe(_).body : Qe(null).body;
  }
  const V = !d && l && (!m || C) ? "none" : void 0, L = m ? {
    in: d,
    onEnter: h,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ I.jsx(nr, {
    disablePortal: c,
    container: O,
    children: /* @__PURE__ */ I.jsx(jd, T({
      anchorEl: r,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: n,
      open: m ? !C : d,
      placement: p,
      popperOptions: v,
      popperRef: g,
      slotProps: f,
      slots: w
    }, R, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: V
      }, y),
      TransitionProps: L,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (ic.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Bt(o.oneOfType([_t, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Wr(e.anchorEl);
      if (t && ro(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Id(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([_t, o.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: o.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Qr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
function Dd(e) {
  const t = Qe(e);
  return t.body === e ? gn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Zn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function js(e) {
  return parseInt(gn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Ad(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ds(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = s.indexOf(a) === -1, l = !Ad(a);
    c && l && Zn(a, i);
  });
}
function jo(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Ld(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Dd(r)) {
      const a = Ya(Qe(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${js(r) + a}px`;
      const c = Qe(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${js(l) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Qe(r).body;
    else {
      const a = r.parentElement, c = gn(r);
      s = (a == null ? void 0 : a.nodeName) === "HTML" && c.getComputedStyle(a).overflowY === "scroll" ? a : r;
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: a,
      property: c
    }) => {
      s ? a.style.setProperty(c, s) : a.style.removeProperty(c);
    });
  };
}
function Fd(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Vd {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Zn(t.modalRef, !1);
    const i = Fd(n);
    Ds(n, t.mount, t.modalRef, i, !0);
    const s = jo(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = jo(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = Ld(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = jo(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Zn(t.modalRef, n), Ds(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Zn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Bd(e) {
  return typeof e == "function" ? e() : e;
}
function zd(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Ud = new Vd();
function Wd(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = Ud,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: d,
    rootRef: p
  } = e, v = b.useRef({}), g = b.useRef(null), y = b.useRef(null), m = Ye(y, p), [f, w] = b.useState(!d), R = zd(l);
  let C = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (C = !1);
  const E = () => Qe(g.current), h = () => (v.current.modalRef = y.current, v.current.mount = g.current, v.current), P = () => {
    i.mount(h(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, O = Lt(() => {
    const k = Bd(t) || E().body;
    i.add(h(), k), y.current && P();
  }), V = b.useCallback(() => i.isTopModal(h()), [i]), L = Lt((k) => {
    g.current = k, k && (d && V() ? P() : y.current && Zn(y.current, C));
  }), _ = b.useCallback(() => {
    i.remove(h(), C);
  }, [C, i]);
  b.useEffect(() => () => {
    _();
  }, [_]), b.useEffect(() => {
    d ? O() : (!R || !s) && _();
  }, [d, _, R, s, O]);
  const z = (k) => (U) => {
    var G;
    (G = k.onKeyDown) == null || G.call(k, U), !(U.key !== "Escape" || !V()) && (n || (U.stopPropagation(), u && u(U, "escapeKeyDown")));
  }, W = (k) => (U) => {
    var G;
    (G = k.onClick) == null || G.call(k, U), U.target === U.currentTarget && u && u(U, "backdropClick");
  };
  return {
    getRootProps: (k = {}) => {
      const U = Ka(e);
      delete U.onTransitionEnter, delete U.onTransitionExited;
      const G = T({}, U, k);
      return T({
        role: "presentation"
      }, G, {
        onKeyDown: z(G),
        ref: m
      });
    },
    getBackdropProps: (k = {}) => {
      const U = k;
      return T({
        "aria-hidden": !0
      }, U, {
        onClick: W(U),
        open: d
      });
    },
    getTransitionProps: () => {
      const k = () => {
        w(!1), a && a();
      }, U = () => {
        w(!0), c && c(), s && _();
      };
      return {
        onEnter: Ho(k, l == null ? void 0 : l.props.onEnter),
        onExited: Ho(U, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: m,
    portalRef: L,
    isTopModal: V,
    exited: f,
    hasTransition: R
  };
}
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
function sc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Yd = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qd = /* @__PURE__ */ sc(
  function(e) {
    return Yd.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Hd(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Gd(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Kd = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? process.env.NODE_ENV === "production" : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gd(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = Hd(i);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch (c) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(r) && console.error('There was a problem inserting the following rule: "' + r + '"', c);
      }
    } else
      i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      return r.parentNode && r.parentNode.removeChild(r);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ke = "-ms-", Yr = "-moz-", ve = "-webkit-", wi = "comm", Oi = "rule", Ri = "decl", Xd = "@import", ac = "@keyframes", Jd = "@layer", Zd = Math.abs, oo = String.fromCharCode, Qd = Object.assign;
function ef(e, t) {
  return He(e, 0) ^ 45 ? (((t << 2 ^ He(e, 0)) << 2 ^ He(e, 1)) << 2 ^ He(e, 2)) << 2 ^ He(e, 3) : 0;
}
function cc(e) {
  return e.trim();
}
function tf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Qo(e, t) {
  return e.indexOf(t);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function rr(e, t, n) {
  return e.slice(t, n);
}
function xt(e) {
  return e.length;
}
function Si(e) {
  return e.length;
}
function Or(e, t) {
  return t.push(e), e;
}
function nf(e, t) {
  return e.map(t).join("");
}
var io = 1, Cn = 1, lc = 0, it = 0, Ue = 0, Sn = "";
function so(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: io, column: Cn, length: a, return: "" };
}
function Vn(e, t) {
  return Qd(so("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rf() {
  return Ue;
}
function of() {
  return Ue = it > 0 ? He(Sn, --it) : 0, Cn--, Ue === 10 && (Cn = 1, io--), Ue;
}
function ct() {
  return Ue = it < lc ? He(Sn, it++) : 0, Cn++, Ue === 10 && (Cn = 1, io++), Ue;
}
function Ct() {
  return He(Sn, it);
}
function kr() {
  return it;
}
function lr(e, t) {
  return rr(Sn, e, t);
}
function or(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function uc(e) {
  return io = Cn = 1, lc = xt(Sn = e), it = 0, [];
}
function dc(e) {
  return Sn = "", e;
}
function jr(e) {
  return cc(lr(it - 1, ei(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sf(e) {
  for (; (Ue = Ct()) && Ue < 33; )
    ct();
  return or(e) > 2 || or(Ue) > 3 ? "" : " ";
}
function af(e, t) {
  for (; --t && ct() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return lr(e, kr() + (t < 6 && Ct() == 32 && ct() == 32));
}
function ei(e) {
  for (; ct(); )
    switch (Ue) {
      case e:
        return it;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ei(Ue);
        break;
      case 40:
        e === 41 && ei(e);
        break;
      case 92:
        ct();
        break;
    }
  return it;
}
function cf(e, t) {
  for (; ct() && e + Ue !== 47 + 10; )
    if (e + Ue === 42 + 42 && Ct() === 47)
      break;
  return "/*" + lr(t, it - 1) + "*" + oo(e === 47 ? e : ct());
}
function lf(e) {
  for (; !or(Ct()); )
    ct();
  return lr(e, it);
}
function uf(e) {
  return dc(Dr("", null, null, null, [""], e = uc(e), 0, [0], e));
}
function Dr(e, t, n, r, i, s, a, c, l) {
  for (var u = 0, d = 0, p = a, v = 0, g = 0, y = 0, m = 1, f = 1, w = 1, R = 0, C = "", E = i, h = s, P = r, O = C; f; )
    switch (y = R, R = ct()) {
      case 40:
        if (y != 108 && He(O, p - 1) == 58) {
          Qo(O += ye(jr(R), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += jr(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += sf(y);
        break;
      case 92:
        O += af(kr() - 1, 7);
        continue;
      case 47:
        switch (Ct()) {
          case 42:
          case 47:
            Or(df(cf(ct(), kr()), t, n), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * m:
        c[u++] = xt(O) * w;
      case 125 * m:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            f = 0;
          case 59 + d:
            w == -1 && (O = ye(O, /\f/g, "")), g > 0 && xt(O) - p && Or(g > 32 ? Ls(O + ";", r, n, p - 1) : Ls(ye(O, " ", "") + ";", r, n, p - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (Or(P = As(O, t, n, u, d, i, c, C, E = [], h = [], p), s), R === 123)
              if (d === 0)
                Dr(O, t, P, P, E, s, p, c, h);
              else
                switch (v === 99 && He(O, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Dr(e, P, P, r && Or(As(e, P, P, 0, 0, i, c, C, i, E = [], p), h), i, h, p, c, r ? E : h);
                    break;
                  default:
                    Dr(O, P, P, P, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, m = w = 1, C = O = "", p = a;
        break;
      case 58:
        p = 1 + xt(O), g = y;
      default:
        if (m < 1) {
          if (R == 123)
            --m;
          else if (R == 125 && m++ == 0 && of() == 125)
            continue;
        }
        switch (O += oo(R), R * m) {
          case 38:
            w = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            c[u++] = (xt(O) - 1) * w, w = 1;
            break;
          case 64:
            Ct() === 45 && (O += jr(ct())), v = Ct(), d = p = xt(C = O += lf(kr())), R++;
            break;
          case 45:
            y === 45 && xt(O) == 2 && (m = 0);
        }
    }
  return s;
}
function As(e, t, n, r, i, s, a, c, l, u, d) {
  for (var p = i - 1, v = i === 0 ? s : [""], g = Si(v), y = 0, m = 0, f = 0; y < r; ++y)
    for (var w = 0, R = rr(e, p + 1, p = Zd(m = a[y])), C = e; w < g; ++w)
      (C = cc(m > 0 ? v[w] + " " + R : ye(R, /&\f/g, v[w]))) && (l[f++] = C);
  return so(e, t, n, i === 0 ? Oi : c, l, u, d);
}
function df(e, t, n) {
  return so(e, t, n, wi, oo(rf()), rr(e, 2, -2), 0);
}
function Ls(e, t, n, r) {
  return so(e, t, n, Ri, rr(e, 0, r), rr(e, r + 1, -1), r);
}
function mn(e, t) {
  for (var n = "", r = Si(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function ff(e, t, n, r) {
  switch (e.type) {
    case Jd:
      if (e.children.length)
        break;
    case Xd:
    case Ri:
      return e.return = e.return || e.value;
    case wi:
      return "";
    case ac:
      return e.return = e.value + "{" + mn(e.children, r) + "}";
    case Oi:
      e.value = e.props.join(",");
  }
  return xt(n = mn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function pf(e) {
  var t = Si(e);
  return function(n, r, i, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, i, s) || "";
    return a;
  };
}
function mf(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var hf = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = Ct(), i === 38 && s === 12 && (n[r] = 1), !or(s); )
    ct();
  return lr(t, it);
}, vf = function(t, n) {
  var r = -1, i = 44;
  do
    switch (or(i)) {
      case 0:
        i === 38 && Ct() === 12 && (n[r] = 1), t[r] += hf(it - 1, n, r);
        break;
      case 2:
        t[r] += jr(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Ct() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += oo(i);
    }
  while (i = ct());
  return t;
}, yf = function(t, n) {
  return dc(vf(uc(t), n));
}, Fs = /* @__PURE__ */ new WeakMap(), gf = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Fs.get(r)) && !i) {
      Fs.set(t, !0);
      for (var s = [], a = yf(n, s), c = r.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, bf = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, xf = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Ef = function(t) {
  return t.type === "comm" && t.children.indexOf(xf) > -1;
}, Tf = function(t) {
  return function(n, r, i) {
    if (!(n.type !== "rule" || t.compat)) {
      var s = n.value.match(/(:first|:nth|:nth-last)-child/g);
      if (s) {
        for (var a = !!n.parent, c = a ? n.parent.children : (
          // global rule at the root level
          i
        ), l = c.length - 1; l >= 0; l--) {
          var u = c[l];
          if (u.line < n.line)
            break;
          if (u.column < n.column) {
            if (Ef(u))
              return;
            break;
          }
        }
        s.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, fc = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Cf = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!fc(n[r]))
      return !0;
  return !1;
}, Vs = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, wf = function(t, n, r) {
  fc(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Vs(t)) : Cf(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Vs(t)));
};
function pc(e, t) {
  switch (ef(e, t)) {
    case 5103:
      return ve + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + Yr + e + Ke + e + e;
    case 6828:
    case 4268:
      return ve + e + Ke + e + e;
    case 6165:
      return ve + e + Ke + "flex-" + e + e;
    case 5187:
      return ve + e + ye(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + Ke + "flex-$1$2") + e;
    case 5443:
      return ve + e + Ke + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ve + e + Ke + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ve + e + Ke + ye(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + Ke + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ve + "box-" + ye(e, "-grow", "") + ve + e + Ke + ye(e, "grow", "positive") + e;
    case 4554:
      return ve + ye(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + Ke + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (xt(e) - 1 - t > 6)
        switch (He(e, t + 1)) {
          case 109:
            if (He(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Yr + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Qo(e, "stretch") ? pc(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (He(e, t + 1) !== 115)
        break;
    case 6444:
      switch (He(e, xt(e) - 3 - (~Qo(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ve) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ve + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + Ke + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (He(e, t + 11)) {
        case 114:
          return ve + e + Ke + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + Ke + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + Ke + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ve + e + Ke + e + e;
  }
  return e;
}
var Of = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Ri:
        t.return = pc(t.value, t.length);
        break;
      case ac:
        return mn([Vn(t, {
          value: ye(t.value, "@", "@" + ve)
        })], i);
      case Oi:
        if (t.length)
          return nf(t.props, function(s) {
            switch (tf(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return mn([Vn(t, {
                  props: [ye(s, /:(read-\w+)/, ":" + Yr + "$1")]
                })], i);
              case "::placeholder":
                return mn([Vn(t, {
                  props: [ye(s, /:(plac\w+)/, ":" + ve + "input-$1")]
                }), Vn(t, {
                  props: [ye(s, /:(plac\w+)/, ":" + Yr + "$1")]
                }), Vn(t, {
                  props: [ye(s, /:(plac\w+)/, Ke + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Rf = [Of], Sf = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(m) {
      var f = m.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Rf;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(m) {
      for (var f = m.getAttribute("data-emotion").split(" "), w = 1; w < f.length; w++)
        s[f[w]] = !0;
      c.push(m);
    }
  );
  var l, u = [gf, bf];
  process.env.NODE_ENV !== "production" && u.push(Tf({
    get compat() {
      return y.compat;
    }
  }), wf);
  {
    var d, p = [ff, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? d.insert(m.return) : m.value && m.type !== wi && d.insert(m.value + "{}"));
    } : mf(function(m) {
      d.insert(m);
    })], v = pf(u.concat(i, p)), g = function(f) {
      return mn(uf(f), v);
    };
    l = function(f, w, R, C) {
      d = R, process.env.NODE_ENV !== "production" && w.map !== void 0 && (d = {
        insert: function(h) {
          R.insert(h + w.map);
        }
      }), g(f ? f + "{" + w.styles + "}" : w.styles), C && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new Kd({
      key: n,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(c), y;
}, ti = { exports: {} }, Oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function Pf() {
  if (Bs)
    return Oe;
  Bs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var P = h.$$typeof;
      switch (P) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case r:
            case s:
            case i:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case d:
                case y:
                case g:
                case a:
                  return h;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function E(h) {
    return C(h) === u;
  }
  return Oe.AsyncMode = l, Oe.ConcurrentMode = u, Oe.ContextConsumer = c, Oe.ContextProvider = a, Oe.Element = t, Oe.ForwardRef = d, Oe.Fragment = r, Oe.Lazy = y, Oe.Memo = g, Oe.Portal = n, Oe.Profiler = s, Oe.StrictMode = i, Oe.Suspense = p, Oe.isAsyncMode = function(h) {
    return E(h) || C(h) === l;
  }, Oe.isConcurrentMode = E, Oe.isContextConsumer = function(h) {
    return C(h) === c;
  }, Oe.isContextProvider = function(h) {
    return C(h) === a;
  }, Oe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Oe.isForwardRef = function(h) {
    return C(h) === d;
  }, Oe.isFragment = function(h) {
    return C(h) === r;
  }, Oe.isLazy = function(h) {
    return C(h) === y;
  }, Oe.isMemo = function(h) {
    return C(h) === g;
  }, Oe.isPortal = function(h) {
    return C(h) === n;
  }, Oe.isProfiler = function(h) {
    return C(h) === s;
  }, Oe.isStrictMode = function(h) {
    return C(h) === i;
  }, Oe.isSuspense = function(h) {
    return C(h) === p;
  }, Oe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === p || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === f || h.$$typeof === w || h.$$typeof === R || h.$$typeof === m);
  }, Oe.typeOf = C, Oe;
}
var Re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function $f() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function C($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === r || $ === u || $ === s || $ === i || $ === p || $ === v || typeof $ == "object" && $ !== null && ($.$$typeof === y || $.$$typeof === g || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === f || $.$$typeof === w || $.$$typeof === R || $.$$typeof === m);
    }
    function E($) {
      if (typeof $ == "object" && $ !== null) {
        var ne = $.$$typeof;
        switch (ne) {
          case t:
            var S = $.type;
            switch (S) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case p:
                return S;
              default:
                var ae = S && S.$$typeof;
                switch (ae) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return ae;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, P = u, O = c, V = a, L = t, _ = d, z = r, W = y, B = g, M = n, A = s, k = i, U = p, G = !1;
    function ee($) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), N($) || E($) === l;
    }
    function N($) {
      return E($) === u;
    }
    function F($) {
      return E($) === c;
    }
    function X($) {
      return E($) === a;
    }
    function te($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function q($) {
      return E($) === d;
    }
    function K($) {
      return E($) === r;
    }
    function J($) {
      return E($) === y;
    }
    function Q($) {
      return E($) === g;
    }
    function j($) {
      return E($) === n;
    }
    function Y($) {
      return E($) === s;
    }
    function Z($) {
      return E($) === i;
    }
    function ue($) {
      return E($) === p;
    }
    Re.AsyncMode = h, Re.ConcurrentMode = P, Re.ContextConsumer = O, Re.ContextProvider = V, Re.Element = L, Re.ForwardRef = _, Re.Fragment = z, Re.Lazy = W, Re.Memo = B, Re.Portal = M, Re.Profiler = A, Re.StrictMode = k, Re.Suspense = U, Re.isAsyncMode = ee, Re.isConcurrentMode = N, Re.isContextConsumer = F, Re.isContextProvider = X, Re.isElement = te, Re.isForwardRef = q, Re.isFragment = K, Re.isLazy = J, Re.isMemo = Q, Re.isPortal = j, Re.isProfiler = Y, Re.isStrictMode = Z, Re.isSuspense = ue, Re.isValidElementType = C, Re.typeOf = E;
  }()), Re;
}
process.env.NODE_ENV === "production" ? ti.exports = Pf() : ti.exports = $f();
var _f = ti.exports, mc = _f, Nf = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, If = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, hc = {};
hc[mc.ForwardRef] = Nf;
hc[mc.Memo] = If;
var Mf = !0;
function Pi(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var ao = function(t, n, r) {
  var i = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Mf === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, co = function(t, n, r) {
  ao(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function kf(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var jf = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Us = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Df = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Af = /[A-Z]|^ms/g, vc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $i = function(t) {
  return t.charCodeAt(1) === 45;
}, Ws = function(t) {
  return t != null && typeof t != "boolean";
}, Do = /* @__PURE__ */ sc(function(e) {
  return $i(e) ? e : e.replace(Af, "-$&").toLowerCase();
}), qr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(vc, function(r, i, s) {
          return mt = {
            name: i,
            styles: s,
            next: mt
          }, i;
        });
  }
  return jf[t] !== 1 && !$i(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Lf = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Ff = ["normal", "none", "initial", "inherit", "unset"], Vf = qr, Bf = /^-ms-/, zf = /-(.)/g, Ys = {};
  qr = function(t, n) {
    if (t === "content" && (typeof n != "string" || Ff.indexOf(n) === -1 && !Lf.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = Vf(t, n);
    return r !== "" && !$i(t) && t.indexOf("-") !== -1 && Ys[t] === void 0 && (Ys[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Bf, "ms-").replace(zf, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var yc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ir(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(yc);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return mt = {
          name: n.name,
          styles: n.styles,
          next: mt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            mt = {
              name: r.name,
              styles: r.styles,
              next: mt
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return Uf(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = mt, a = n(e);
        return mt = s, ir(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = n.replace(vc, function(d, p, v) {
          var g = "animation" + c.length;
          return c.push("const " + g + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
        });
        c.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(c, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return n;
  var u = t[n];
  return u !== void 0 ? u : n;
}
function Uf(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += ir(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : Ws(a) && (r += Do(s) + ":" + qr(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(yc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Ws(a[c]) && (r += Do(s) + ":" + qr(s, a[c]) + ";");
        else {
          var l = ir(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += Do(s) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Df), r += s + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var qs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, gc;
process.env.NODE_ENV !== "production" && (gc = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var mt, wn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  mt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (i = !1, s += ir(r, n, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Us), s += a[0]);
  for (var c = 1; c < t.length; c++)
    s += ir(r, n, t[c]), i && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(Us), s += a[c]);
  var l;
  process.env.NODE_ENV !== "production" && (s = s.replace(gc, function(v) {
    return l = v, "";
  })), qs.lastIndex = 0;
  for (var u = "", d; (d = qs.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var p = kf(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: s,
    map: l,
    next: mt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: s,
    next: mt
  };
}, Wf = function(t) {
  return t();
}, bc = b["useInsertionEffect"] ? b["useInsertionEffect"] : !1, _i = bc || Wf, Hs = bc || b.useLayoutEffect, Yf = {}.hasOwnProperty, Ni = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Sf({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ni.displayName = "EmotionCacheContext");
Ni.Provider;
var lo = function(t) {
  return /* @__PURE__ */ gl(function(n, r) {
    var i = vn(Ni);
    return t(n, i, r);
  });
}, Pn = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Pn.displayName = "EmotionThemeContext");
var Gs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ks = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", qf = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ao(n, r, i), _i(function() {
    return co(n, r, i);
  }), null;
}, Hf = /* @__PURE__ */ lo(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[Gs], s = [r], a = "";
  typeof e.className == "string" ? a = Pi(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = wn(s, void 0, b.useContext(Pn));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[Ks];
    l && (c = wn([c, "label:" + l + ";"]));
  }
  a += t.key + "-" + c.name;
  var u = {};
  for (var d in e)
    Yf.call(e, d) && d !== "css" && d !== Gs && (process.env.NODE_ENV === "production" || d !== Ks) && (u[d] = e[d]);
  return u.ref = n, u.className = a, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(qf, {
    cache: t,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ b.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (Hf.displayName = "EmotionCssPropInternal");
var Gf = {
  name: "@emotion/react",
  version: "11.11.0",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Xs = !1, Kf = /* @__PURE__ */ lo(function(e, t) {
  process.env.NODE_ENV !== "production" && !Xs && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Xs = !0);
  var n = e.styles, r = wn([n], void 0, b.useContext(Pn)), i = b.useRef();
  return Hs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), i.current = [a, c], function() {
      a.flush();
    };
  }, [t]), Hs(function() {
    var s = i.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && co(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (Kf.displayName = "EmotionGlobal");
function Ii() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return wn(t);
}
var ur = function() {
  var t = Ii.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Xf = function e(t) {
  for (var n = t.length, r = 0, i = ""; r < n; r++) {
    var s = t[r];
    if (s != null) {
      var a = void 0;
      switch (typeof s) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(s))
            a = e(s);
          else {
            process.env.NODE_ENV !== "production" && s.styles !== void 0 && s.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var c in s)
              s[c] && c && (a && (a += " "), a += c);
          }
          break;
        }
        default:
          a = s;
      }
      a && (i && (i += " "), i += a);
    }
  }
  return i;
};
function Jf(e, t, n) {
  var r = [], i = Pi(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Zf = function(t) {
  var n = t.cache, r = t.serializedArr;
  return _i(function() {
    for (var i = 0; i < r.length; i++)
      co(n, r[i], !1);
  }), null;
}, Qf = /* @__PURE__ */ lo(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    var v = wn(d, t.registered);
    return r.push(v), ao(t, v, !1), t.key + "-" + v.name;
  }, s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    return Jf(t.registered, i, Xf(d));
  }, a = {
    css: i,
    cx: s,
    theme: b.useContext(Pn)
  }, c = e.children(a);
  return n = !0, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Zf, {
    cache: t,
    serializedArr: r
  }), c);
});
process.env.NODE_ENV !== "production" && (Qf.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Js = !0, ep = typeof jest < "u" || typeof vi < "u";
  if (Js && !ep) {
    var Zs = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Js ? window : global
    ), Qs = "__EMOTION_REACT_" + Gf.version.split(".")[0] + "__";
    Zs[Qs] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Zs[Qs] = !0;
  }
}
var tp = qd, np = function(t) {
  return t !== "theme";
}, ea = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? tp : np;
}, ta = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, na = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, rp = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return ao(n, r, i), _i(function() {
    return co(n, r, i);
  }), null;
}, op = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var c = ta(t, n, r), l = c || ea(i), u = !l("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(na), p.push(d[0][0]);
      for (var v = d.length, g = 1; g < v; g++)
        process.env.NODE_ENV !== "production" && d[0][g] === void 0 && console.error(na), p.push(d[g], d[0][g]);
    }
    var y = lo(function(m, f, w) {
      var R = u && m.as || i, C = "", E = [], h = m;
      if (m.theme == null) {
        h = {};
        for (var P in m)
          h[P] = m[P];
        h.theme = b.useContext(Pn);
      }
      typeof m.className == "string" ? C = Pi(f.registered, E, m.className) : m.className != null && (C = m.className + " ");
      var O = wn(p.concat(E), f.registered, h);
      C += f.key + "-" + O.name, a !== void 0 && (C += " " + a);
      var V = u && c === void 0 ? ea(R) : l, L = {};
      for (var _ in m)
        u && _ === "as" || // $FlowFixMe
        V(_) && (L[_] = m[_]);
      return L.className = C, L.ref = w, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(rp, {
        cache: f,
        serialized: O,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ b.createElement(R, L));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = p, y.__emotion_forwardProp = c, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(m, f) {
      return e(m, Zo({}, n, f, {
        shouldForwardProp: ta(y, f, !0)
      })).apply(void 0, p);
    }, y;
  };
}, ip = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], ni = op.bind();
ip.forEach(function(e) {
  ni[e] = ni(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function sp(e, t) {
  const n = ni(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const ap = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, cp = ["values", "unit", "step"], lp = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => T({}, n, {
    [r.key]: r.val
  }), {});
};
function up(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: n = "px",
    step: r = 5
  } = e, i = oe(e, cp), s = lp(t), a = Object.keys(s);
  function c(v) {
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${n})`;
  }
  function l(v) {
    return `@media (max-width:${(typeof t[v] == "number" ? t[v] : v) - r / 100}${n})`;
  }
  function u(v, g) {
    const y = a.indexOf(g);
    return `@media (min-width:${typeof t[v] == "number" ? t[v] : v}${n}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : g) - r / 100}${n})`;
  }
  function d(v) {
    return a.indexOf(v) + 1 < a.length ? u(v, a[a.indexOf(v) + 1]) : c(v);
  }
  function p(v) {
    const g = a.indexOf(v);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(v, a[a.indexOf(v) + 1]).replace("@media", "@media not all and");
  }
  return T({
    keys: a,
    values: s,
    up: c,
    down: l,
    between: u,
    only: d,
    not: p,
    unit: n
  }, i);
}
const dp = {
  borderRadius: 4
}, fp = dp, pp = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, Ut = pp;
function Qn(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Mi = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, ra = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Mi[e]}px)`
};
function It(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || ra;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || ra;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(s.values || Mi).indexOf(c) !== -1) {
        const l = s.up(c);
        a[l] = n(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return n(t);
}
function mp(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function hp(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function uo(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Hr(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = uo(e, n) || r, t && (i = t(i, r, e)), i;
}
function Se(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = uo(l, r) || {};
    return It(a, c, (p) => {
      let v = Hr(u, i, p);
      return p === v && typeof p == "string" && (v = Hr(u, i, `${t}${p === "default" ? "" : pe(p)}`, p)), n === !1 ? v : {
        [n]: v
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ut
  } : {}, s.filterProps = [t], s;
}
function vp(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const yp = {
  m: "margin",
  p: "padding"
}, gp = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, oa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, bp = vp((e) => {
  if (e.length > 2)
    if (oa[e])
      e = oa[e];
    else
      return [e];
  const [t, n] = e.split(""), r = yp[t], i = gp[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), fo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], po = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xp = [...fo, ...po];
function dr(e, t, n, r) {
  var i;
  const s = (i = uo(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xc(e) {
  return dr(e, "spacing", 8, "spacing");
}
function fr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ep(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = fr(t, n), r), {});
}
function Tp(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = bp(n), s = Ep(i, r), a = e[n];
  return It(e, a, s);
}
function Ec(e, t) {
  const n = xc(e.theme);
  return Object.keys(e).map((r) => Tp(e, t, r, n)).reduce(Qn, {});
}
function Le(e) {
  return Ec(e, fo);
}
Le.propTypes = process.env.NODE_ENV !== "production" ? fo.reduce((e, t) => (e[t] = Ut, e), {}) : {};
Le.filterProps = fo;
function Fe(e) {
  return Ec(e, po);
}
Fe.propTypes = process.env.NODE_ENV !== "production" ? po.reduce((e, t) => (e[t] = Ut, e), {}) : {};
Fe.filterProps = po;
process.env.NODE_ENV !== "production" && xp.reduce((e, t) => (e[t] = Ut, e), {});
function Cp(e = 8) {
  if (e.mui)
    return e;
  const t = xc({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function mo(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? Qn(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Et(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const wp = Se({
  prop: "border",
  themeKey: "borders",
  transform: Et
}), Op = Se({
  prop: "borderTop",
  themeKey: "borders",
  transform: Et
}), Rp = Se({
  prop: "borderRight",
  themeKey: "borders",
  transform: Et
}), Sp = Se({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Et
}), Pp = Se({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Et
}), $p = Se({
  prop: "borderColor",
  themeKey: "palette"
}), _p = Se({
  prop: "borderTopColor",
  themeKey: "palette"
}), Np = Se({
  prop: "borderRightColor",
  themeKey: "palette"
}), Ip = Se({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Mp = Se({
  prop: "borderLeftColor",
  themeKey: "palette"
}), ho = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = dr(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: fr(t, r)
    });
    return It(e, e.borderRadius, n);
  }
  return null;
};
ho.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ut
} : {};
ho.filterProps = ["borderRadius"];
mo(wp, Op, Rp, Sp, Pp, $p, _p, Np, Ip, Mp, ho);
const vo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = dr(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: fr(t, r)
    });
    return It(e, e.gap, n);
  }
  return null;
};
vo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ut
} : {};
vo.filterProps = ["gap"];
const yo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = dr(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: fr(t, r)
    });
    return It(e, e.columnGap, n);
  }
  return null;
};
yo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ut
} : {};
yo.filterProps = ["columnGap"];
const go = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = dr(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: fr(t, r)
    });
    return It(e, e.rowGap, n);
  }
  return null;
};
go.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ut
} : {};
go.filterProps = ["rowGap"];
const kp = Se({
  prop: "gridColumn"
}), jp = Se({
  prop: "gridRow"
}), Dp = Se({
  prop: "gridAutoFlow"
}), Ap = Se({
  prop: "gridAutoColumns"
}), Lp = Se({
  prop: "gridAutoRows"
}), Fp = Se({
  prop: "gridTemplateColumns"
}), Vp = Se({
  prop: "gridTemplateRows"
}), Bp = Se({
  prop: "gridTemplateAreas"
}), zp = Se({
  prop: "gridArea"
});
mo(vo, yo, go, kp, jp, Dp, Ap, Lp, Fp, Vp, Bp, zp);
function hn(e, t) {
  return t === "grey" ? t : e;
}
const Up = Se({
  prop: "color",
  themeKey: "palette",
  transform: hn
}), Wp = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: hn
}), Yp = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: hn
});
mo(Up, Wp, Yp);
function at(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const qp = Se({
  prop: "width",
  transform: at
}), ki = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Mi[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: at(n)
      };
    };
    return It(e, e.maxWidth, t);
  }
  return null;
};
ki.filterProps = ["maxWidth"];
const Hp = Se({
  prop: "minWidth",
  transform: at
}), Gp = Se({
  prop: "height",
  transform: at
}), Kp = Se({
  prop: "maxHeight",
  transform: at
}), Xp = Se({
  prop: "minHeight",
  transform: at
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: at
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: at
});
const Jp = Se({
  prop: "boxSizing"
});
mo(qp, ki, Hp, Gp, Kp, Xp, Jp);
const Zp = {
  // borders
  border: {
    themeKey: "borders",
    transform: Et
  },
  borderTop: {
    themeKey: "borders",
    transform: Et
  },
  borderRight: {
    themeKey: "borders",
    transform: Et
  },
  borderBottom: {
    themeKey: "borders",
    transform: Et
  },
  borderLeft: {
    themeKey: "borders",
    transform: Et
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ho
  },
  // palette
  color: {
    themeKey: "palette",
    transform: hn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: hn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: hn
  },
  // spacing
  p: {
    style: Fe
  },
  pt: {
    style: Fe
  },
  pr: {
    style: Fe
  },
  pb: {
    style: Fe
  },
  pl: {
    style: Fe
  },
  px: {
    style: Fe
  },
  py: {
    style: Fe
  },
  padding: {
    style: Fe
  },
  paddingTop: {
    style: Fe
  },
  paddingRight: {
    style: Fe
  },
  paddingBottom: {
    style: Fe
  },
  paddingLeft: {
    style: Fe
  },
  paddingX: {
    style: Fe
  },
  paddingY: {
    style: Fe
  },
  paddingInline: {
    style: Fe
  },
  paddingInlineStart: {
    style: Fe
  },
  paddingInlineEnd: {
    style: Fe
  },
  paddingBlock: {
    style: Fe
  },
  paddingBlockStart: {
    style: Fe
  },
  paddingBlockEnd: {
    style: Fe
  },
  m: {
    style: Le
  },
  mt: {
    style: Le
  },
  mr: {
    style: Le
  },
  mb: {
    style: Le
  },
  ml: {
    style: Le
  },
  mx: {
    style: Le
  },
  my: {
    style: Le
  },
  margin: {
    style: Le
  },
  marginTop: {
    style: Le
  },
  marginRight: {
    style: Le
  },
  marginBottom: {
    style: Le
  },
  marginLeft: {
    style: Le
  },
  marginX: {
    style: Le
  },
  marginY: {
    style: Le
  },
  marginInline: {
    style: Le
  },
  marginInlineStart: {
    style: Le
  },
  marginInlineEnd: {
    style: Le
  },
  marginBlock: {
    style: Le
  },
  marginBlockStart: {
    style: Le
  },
  marginBlockEnd: {
    style: Le
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: vo
  },
  rowGap: {
    style: go
  },
  columnGap: {
    style: yo
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: at
  },
  maxWidth: {
    style: ki
  },
  minWidth: {
    transform: at
  },
  height: {
    transform: at
  },
  maxHeight: {
    transform: at
  },
  minHeight: {
    transform: at
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, bo = Zp;
function Qp(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function em(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tm() {
  function e(n, r, i, s) {
    const a = {
      [n]: r,
      theme: i
    }, c = s[n];
    if (!c)
      return {
        [n]: r
      };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: d,
      style: p
    } = c;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const v = uo(i, u) || {};
    return p ? p(a) : It(a, r, (y) => {
      let m = Hr(v, d, y);
      return y === m && typeof y == "string" && (m = Hr(v, d, `${n}${y === "default" ? "" : pe(y)}`, y)), l === !1 ? m : {
        [l]: m
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: i,
      theme: s = {}
    } = n || {};
    if (!i)
      return null;
    const a = (r = s.unstable_sxConfig) != null ? r : bo;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(s);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = mp(s.breakpoints), p = Object.keys(d);
      let v = d;
      return Object.keys(u).forEach((g) => {
        const y = em(u[g], s);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              v = Qn(v, e(g, y, s, a));
            else {
              const m = It({
                theme: s
              }, y, (f) => ({
                [g]: f
              }));
              Qp(m, y) ? v[g] = t({
                sx: y,
                theme: s
              }) : v = Qn(v, m);
            }
          else
            v = Qn(v, e(g, y, s, a));
      }), hp(p, v);
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return t;
}
const Tc = tm();
Tc.filterProps = ["sx"];
const ji = Tc, nm = ["breakpoints", "palette", "spacing", "shape"];
function Di(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = oe(e, nm), c = up(n), l = Cp(i);
  let u = yt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: l,
    shape: T({}, fp, s)
  }, a);
  return u = t.reduce((d, p) => yt(d, p), u), u.unstable_sxConfig = T({}, bo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return ji({
      sx: p,
      theme: this
    });
  }, u;
}
function rm(e) {
  return Object.keys(e).length === 0;
}
function Cc(e = null) {
  const t = b.useContext(Pn);
  return !t || rm(t) ? e : t;
}
const om = Di();
function wc(e = om) {
  return Cc(e);
}
const im = ["sx"], sm = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : bo;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function am(e) {
  const {
    sx: t
  } = e, n = oe(e, im), {
    systemProps: r,
    otherProps: i
  } = sm(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return $t(c) ? T({}, r, c) : r;
  } : s = T({}, r, t), T({}, i, {
    sx: s
  });
}
const cm = ["variant"];
function ia(e) {
  return e.length === 0;
}
function Oc(e) {
  const {
    variant: t
  } = e, n = oe(e, cm);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += ia(r) ? e[i] : pe(e[i]) : r += `${ia(r) ? i : pe(i)}${pe(e[i].toString())}`;
  }), r;
}
const lm = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function um(e) {
  return Object.keys(e).length === 0;
}
function dm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const fm = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Gr = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = Oc(n.props);
    t[r] = n.style;
  }), t;
}, pm = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Gr(n);
}, Kr = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, i = [];
  return n && n.forEach((s) => {
    let a = !0;
    Object.keys(s.props).forEach((c) => {
      r[c] !== s.props[c] && e[c] !== s.props[c] && (a = !1);
    }), a && i.push(t[Oc(s.props)]);
  }), i;
}, mm = (e, t, n, r) => {
  var i;
  const s = n == null || (i = n.components) == null || (i = i[r]) == null ? void 0 : i.variants;
  return Kr(e, t, s);
};
function Ar(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const hm = Di(), sa = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Lr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return um(t) ? e : t[n] || t;
}
function vm(e) {
  return e ? (t, n) => n[e] : null;
}
const aa = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const i = e(T({}, t, {
    theme: Lr(T({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let s;
  if (i && i.variants && (s = i.variants, delete i.variants), s) {
    const a = Kr(t, Gr(s), s);
    return [i, ...a];
  }
  return i;
};
function ym(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = hm,
    rootShouldForwardProp: r = Ar,
    slotShouldForwardProp: i = Ar
  } = e, s = (a) => ji(T({}, a, {
    theme: Lr(T({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, c = {}) => {
    ap(a, (E) => E.filter((h) => !(h != null && h.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = vm(sa(u))
    } = c, g = oe(c, lm), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), m = p || !1;
    let f;
    process.env.NODE_ENV !== "production" && l && (f = `${l}-${sa(u || "Root")}`);
    let w = Ar;
    u === "Root" || u === "root" ? w = r : u ? w = i : dm(a) && (w = void 0);
    const R = sp(a, T({
      shouldForwardProp: w,
      label: f
    }, g)), C = (E, ...h) => {
      const P = h ? h.map((_) => {
        if (typeof _ == "function" && _.__emotion_real !== _)
          return (z) => aa({
            styledArg: _,
            props: z,
            defaultTheme: n,
            themeId: t
          });
        if ($t(_)) {
          let z = _, W;
          return _ && _.variants && (W = _.variants, delete z.variants, z = (B) => {
            let M = _;
            return Kr(B, Gr(W), W).forEach((k) => {
              M = yt(M, k);
            }), M;
          }), z;
        }
        return _;
      }) : [];
      let O = E;
      if ($t(E)) {
        let _;
        E && E.variants && (_ = E.variants, delete O.variants, O = (z) => {
          let W = E;
          return Kr(z, Gr(_), _).forEach((M) => {
            W = yt(W, M);
          }), W;
        });
      } else
        typeof E == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        E.__emotion_real !== E && (O = (_) => aa({
          styledArg: E,
          props: _,
          defaultTheme: n,
          themeId: t
        }));
      l && v && P.push((_) => {
        const z = Lr(T({}, _, {
          defaultTheme: n,
          themeId: t
        })), W = fm(l, z);
        if (W) {
          const B = {};
          return Object.entries(W).forEach(([M, A]) => {
            B[M] = typeof A == "function" ? A(T({}, _, {
              theme: z
            })) : A;
          }), v(_, B);
        }
        return null;
      }), l && !y && P.push((_) => {
        const z = Lr(T({}, _, {
          defaultTheme: n,
          themeId: t
        }));
        return mm(_, pm(l, z), z, l);
      }), m || P.push(s);
      const V = P.length - h.length;
      if (Array.isArray(E) && V > 0) {
        const _ = new Array(V).fill("");
        O = [...E, ..._], O.raw = [...E.raw, ..._];
      }
      const L = R(O, ...P);
      if (process.env.NODE_ENV !== "production") {
        let _;
        l && (_ = `${l}${pe(u || "")}`), _ === void 0 && (_ = `Styled(${Wl(a)})`), L.displayName = _;
      }
      return a.muiName && (L.muiName = a.muiName), L;
    };
    return R.withConfig && (C.withConfig = R.withConfig), C;
  };
}
function gm(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : hi(t.components[n].defaultProps, r);
}
function bm({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = wc(n);
  return r && (i = i[r] || i), gm({
    theme: i,
    name: t,
    props: e
  });
}
function Ai(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function xm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Qt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Qt(xm(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : yn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : yn(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function xo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Em(e) {
  e = Qt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), xo({
    type: c,
    values: l
  });
}
function ri(e) {
  e = Qt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Qt(Em(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function ca(e, t) {
  const n = ri(e), r = ri(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ve(e, t) {
  return e = Qt(e), t = Ai(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, xo(e);
}
function Rc(e, t) {
  if (e = Qt(e), t = Ai(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return xo(e);
}
function Sc(e, t) {
  if (e = Qt(e), t = Ai(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return xo(e);
}
function oi(e, t = 0.15) {
  return ri(e) > 0.5 ? Rc(e, t) : Sc(e, t);
}
function Tm(e, t) {
  return T({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const Cm = {
  black: "#000",
  white: "#fff"
}, sr = Cm, wm = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Om = wm, Rm = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, on = Rm, Sm = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, sn = Sm, Pm = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Bn = Pm, $m = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, an = $m, _m = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, cn = _m, Nm = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ln = Nm, Im = ["mode", "contrastThreshold", "tonalOffset"], la = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: sr.white,
    default: sr.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Ao = {
  text: {
    primary: sr.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: sr.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ua(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Sc(e.main, i) : t === "dark" && (e.dark = Rc(e.main, s)));
}
function Mm(e = "light") {
  return e === "dark" ? {
    main: an[200],
    light: an[50],
    dark: an[400]
  } : {
    main: an[700],
    light: an[400],
    dark: an[800]
  };
}
function km(e = "light") {
  return e === "dark" ? {
    main: on[200],
    light: on[50],
    dark: on[400]
  } : {
    main: on[500],
    light: on[300],
    dark: on[700]
  };
}
function jm(e = "light") {
  return e === "dark" ? {
    main: sn[500],
    light: sn[300],
    dark: sn[700]
  } : {
    main: sn[700],
    light: sn[400],
    dark: sn[800]
  };
}
function Dm(e = "light") {
  return e === "dark" ? {
    main: cn[400],
    light: cn[300],
    dark: cn[700]
  } : {
    main: cn[700],
    light: cn[500],
    dark: cn[900]
  };
}
function Am(e = "light") {
  return e === "dark" ? {
    main: ln[400],
    light: ln[300],
    dark: ln[700]
  } : {
    main: ln[800],
    light: ln[500],
    dark: ln[900]
  };
}
function Lm(e = "light") {
  return e === "dark" ? {
    main: Bn[400],
    light: Bn[300],
    dark: Bn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Bn[500],
    dark: Bn[900]
  };
}
function Fm(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = oe(e, Im), s = e.primary || Mm(t), a = e.secondary || km(t), c = e.error || jm(t), l = e.info || Dm(t), u = e.success || Am(t), d = e.warning || Lm(t);
  function p(m) {
    const f = ca(m, Ao.text.primary) >= n ? Ao.text.primary : la.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = ca(m, f);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${f} on ${m}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const v = ({
    color: m,
    name: f,
    mainShade: w = 500,
    lightShade: R = 300,
    darkShade: C = 700
  }) => {
    if (m = T({}, m), !m.main && m[w] && (m.main = m[w]), !m.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : yn(11, f ? ` (${f})` : "", w));
    if (typeof m.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(m.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : yn(12, f ? ` (${f})` : "", JSON.stringify(m.main)));
    return ua(m, "light", R, r), ua(m, "dark", C, r), m.contrastText || (m.contrastText = p(m.main)), m;
  }, g = {
    dark: Ao,
    light: la
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), yt(T({
    // A collection of common colors.
    common: T({}, sr),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: v({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: v({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: v({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: v({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: v({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: v({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Om,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), i);
}
const Vm = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Bm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const da = {
  textTransform: "uppercase"
}, fa = '"Roboto", "Helvetica", "Arial", sans-serif';
function zm(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = fa,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = n, v = oe(n, Vm);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, y = p || ((w) => `${w / u * g}rem`), m = (w, R, C, E, h) => T({
    fontFamily: r,
    fontWeight: w,
    fontSize: y(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: C
  }, r === fa ? {
    letterSpacing: `${Bm(E / R)}em`
  } : {}, h, d), f = {
    h1: m(s, 96, 1.167, -1.5),
    h2: m(s, 60, 1.2, -0.5),
    h3: m(a, 48, 1.167, 0),
    h4: m(a, 34, 1.235, 0.25),
    h5: m(a, 24, 1.334, 0),
    h6: m(c, 20, 1.6, 0.15),
    subtitle1: m(a, 16, 1.75, 0.15),
    subtitle2: m(c, 14, 1.57, 0.1),
    body1: m(a, 16, 1.5, 0.15),
    body2: m(a, 14, 1.43, 0.15),
    button: m(c, 14, 1.75, 0.4, da),
    caption: m(a, 12, 1.66, 0.4),
    overline: m(a, 12, 2.66, 1, da),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt(T({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, f), v, {
    clone: !1
    // No need to clone deep
  });
}
const Um = 0.2, Wm = 0.14, Ym = 0.12;
function ke(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Um})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Wm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ym})`].join(",");
}
const qm = ["none", ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hm = qm, Gm = ["duration", "easing", "delay"], Km = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xm = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function pa(e) {
  return `${Math.round(e)}ms`;
}
function Jm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Zm(e) {
  const t = T({}, Km, e.easing), n = T({}, Xm, e.duration);
  return T({
    getAutoHeightDuration: Jm,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = s, u = oe(s, Gm);
      if (process.env.NODE_ENV !== "production") {
        const d = (v) => typeof v == "string", p = (v) => !isNaN(parseFloat(v));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : pa(a)} ${c} ${typeof l == "string" ? l : pa(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Qm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, eh = Qm, th = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function nh(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = oe(e, th);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : yn(18));
  const c = Fm(r), l = Di(e);
  let u = yt(l, {
    mixins: Tm(l.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Hm.slice(),
    typography: zm(c, s),
    transitions: Zm(i),
    zIndex: T({}, eh)
  });
  if (u = yt(u, a), u = t.reduce((d, p) => yt(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (v, g) => {
      let y;
      for (y in v) {
        const m = v[y];
        if (d.indexOf(y) !== -1 && Object.keys(m).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const f = $e("", y);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${f}' syntax:`, JSON.stringify({
              root: {
                [`&.${f}`]: m
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          v[y] = {};
        }
      }
    };
    Object.keys(u.components).forEach((v) => {
      const g = u.components[v].styleOverrides;
      g && v.indexOf("Mui") === 0 && p(g, v);
    });
  }
  return u.unstable_sxConfig = T({}, bo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return ji({
      sx: p,
      theme: this
    });
  }, u;
}
const rh = nh(), Li = rh, Fi = "$$material", $n = (e) => Ar(e) && e !== "classes", oh = ym({
  themeId: Fi,
  defaultTheme: Li,
  rootShouldForwardProp: $n
}), ce = oh;
function Ie({
  props: e,
  name: t
}) {
  return bm({
    props: e,
    name: t,
    defaultTheme: Li,
    themeId: Fi
  });
}
function ih(e) {
  return $e("MuiTypography", e);
}
Ne("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const sh = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], ah = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${pe(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Me(c, ih, a);
}, ch = ce("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${pe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), ma = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, lh = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, uh = (e) => lh[e] || e, Pc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiTypography"
  }), i = uh(r.color), s = am(T({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: v = "body1",
    variantMapping: g = ma
  } = s, y = oe(s, sh), m = T({}, s, {
    align: a,
    color: i,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: v,
    variantMapping: g
  }), f = l || (p ? "p" : g[v] || ma[v]) || "span", w = ah(m);
  return /* @__PURE__ */ I.jsx(ch, T({
    as: f,
    ref: n,
    ownerState: m,
    className: se(w.root, c)
  }, y));
});
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: o.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: o.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: o.oneOfType([o.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), o.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: o.object
});
const Hn = Pc;
function dh(e) {
  return $e("MuiSvgIcon", e);
}
Ne("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const fh = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ph = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${pe(t)}`, `fontSize${pe(n)}`]
  };
  return Me(i, dh, r);
}, mh = ce("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${pe(n.color)}`], t[`fontSize${pe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, c, l, u, d, p, v, g, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((s = e.typography) == null || (a = s.pxToRem) == null ? void 0 : a.call(s, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (l = c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (v = (e.vars || e).palette) == null || (v = v[t.color]) == null ? void 0 : v.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Vi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: s,
    color: a = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: v = "0 0 24 24"
  } = r, g = oe(r, fh), y = /* @__PURE__ */ b.isValidElement(i) && i.type === "svg", m = T({}, r, {
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: y
  }), f = {};
  d || (f.viewBox = v);
  const w = ph(m);
  return /* @__PURE__ */ I.jsxs(mh, T({
    as: c,
    className: se(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, f, g, y && i.props, {
    ownerState: m,
    children: [y ? i.props.children : i, p ? /* @__PURE__ */ I.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Vi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
Vi.muiName = "SvgIcon";
const ha = Vi;
function Bi(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ I.jsx(ha, T({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = ha.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(n));
}
const hh = Bi(/* @__PURE__ */ I.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");
function ii(e, t) {
  return ii = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ii(e, t);
}
function $c(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ii(e, t);
}
const va = {
  disabled: !1
};
var vh = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
  enter: o.number,
  exit: o.number,
  appear: o.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && o.oneOfType([o.string, o.shape({
  enter: o.string,
  exit: o.string,
  active: o.string
}), o.shape({
  enter: o.string,
  enterDone: o.string,
  enterActive: o.string,
  exit: o.string,
  exitDone: o.string,
  exitActive: o.string
})]);
const Xr = ht.createContext(null);
var yh = function(t) {
  return t.scrollTop;
}, Gn = "unmounted", Gt = "exited", Kt = "entering", dn = "entered", si = "exiting", Mt = /* @__PURE__ */ function(e) {
  $c(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, c = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? c ? (l = Gt, s.appearStatus = Kt) : l = dn : r.unmountOnExit || r.mountOnEnter ? l = Gn : l = Gt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Gn ? {
      status: Gt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Kt && a !== dn && (s = Kt) : (a === Kt || a === dn) && (s = si);
    }
    this.updateStatus(!1, s);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var i = this.props.timeout, s, a, c;
    return s = a = c = i, i != null && typeof i != "number" && (s = i.exit, a = i.enter, c = i.appear !== void 0 ? i.appear : a), {
      exit: s,
      enter: a,
      appear: c
    };
  }, n.updateStatus = function(i, s) {
    if (i === void 0 && (i = !1), s !== null)
      if (this.cancelNextCallback(), s === Kt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this);
          a && yh(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Gt && this.setState({
        status: Gn
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [Tr.findDOMNode(this), c], u = l[0], d = l[1], p = this.getTimeouts(), v = c ? p.appear : p.enter;
    if (!i && !a || va.disabled) {
      this.safeSetState({
        status: dn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Kt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(v, function() {
        s.safeSetState({
          status: dn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Tr.findDOMNode(this);
    if (!s || va.disabled) {
      this.safeSetState({
        status: Gt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: si
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Gt
        }, function() {
          i.props.onExited(c);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(i, s) {
    s = this.setNextCallback(s), this.setState(i, s);
  }, n.setNextCallback = function(i) {
    var s = this, a = !0;
    return this.nextCallback = function(c) {
      a && (a = !1, s.nextCallback = null, i(c));
    }, this.nextCallback.cancel = function() {
      a = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(i, s) {
    this.setNextCallback(s);
    var a = this.props.nodeRef ? this.props.nodeRef.current : Tr.findDOMNode(this), c = i == null && !this.props.addEndListener;
    if (!a || c) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var l = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback], u = l[0], d = l[1];
      this.props.addEndListener(u, d);
    }
    i != null && setTimeout(this.nextCallback, i);
  }, n.render = function() {
    var i = this.state.status;
    if (i === Gn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = oe(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ht.createElement(Xr.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : ht.cloneElement(ht.Children.only(a), c))
    );
  }, t;
}(ht.Component);
Mt.contextType = Xr;
Mt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: o.shape({
    current: typeof Element > "u" ? o.any : function(e, t, n, r, i, s) {
      var a = e[t];
      return o.instanceOf(a && "ownerDocument" in a ? a.ownerDocument.defaultView.Element : Element)(e, t, n, r, i, s);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: o.oneOfType([o.func.isRequired, o.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: o.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: o.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: o.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: o.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: o.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: o.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var n = vh;
    t.addEndListener || (n = n.isRequired);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return n.apply(void 0, [t].concat(i));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: o.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: o.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: o.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: o.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: o.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: o.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: o.func
} : {};
function un() {
}
Mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: un,
  onEntering: un,
  onEntered: un,
  onExit: un,
  onExiting: un,
  onExited: un
};
Mt.UNMOUNTED = Gn;
Mt.EXITED = Gt;
Mt.ENTERING = Kt;
Mt.ENTERED = dn;
Mt.EXITING = si;
const zi = Mt;
function gh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ui(e, t) {
  var n = function(s) {
    return t && Nr(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && bl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function bh(e, t) {
  e = e || {}, t = t || {};
  function n(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), i = [];
  for (var s in e)
    s in t ? i.length && (r[s] = i, i = []) : i.push(s);
  var a, c = {};
  for (var l in t) {
    if (r[l])
      for (a = 0; a < r[l].length; a++) {
        var u = r[l][a];
        c[r[l][a]] = n(u);
      }
    c[l] = n(l);
  }
  for (a = 0; a < i.length; a++)
    c[i[a]] = n(i[a]);
  return c;
}
function Xt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function xh(e, t) {
  return Ui(e.children, function(n) {
    return Ir(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Xt(n, "appear", e),
      enter: Xt(n, "enter", e),
      exit: Xt(n, "exit", e)
    });
  });
}
function Eh(e, t, n) {
  var r = Ui(e.children), i = bh(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Nr(a)) {
      var c = s in t, l = s in r, u = t[s], d = Nr(u) && !u.props.in;
      l && (!c || d) ? i[s] = Ir(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Xt(a, "exit", e),
        enter: Xt(a, "enter", e)
      }) : !l && c && !d ? i[s] = Ir(a, {
        in: !1
      }) : l && c && Nr(u) && (i[s] = Ir(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Xt(a, "exit", e),
        enter: Xt(a, "enter", e)
      }));
    }
  }), i;
}
var Th = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ch = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Wi = /* @__PURE__ */ function(e) {
  $c(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(gh(s));
    return s.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, s;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(i, s) {
    var a = s.children, c = s.handleExited, l = s.firstRender;
    return {
      children: l ? xh(i, c) : Eh(i, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Ui(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = T({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = oe(i, ["component", "childFactory"]), l = this.state.contextValue, u = Th(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ ht.createElement(Xr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ht.createElement(Xr.Provider, {
      value: l
    }, /* @__PURE__ */ ht.createElement(s, c, u));
  }, t;
}(ht.Component);
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: o.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: o.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: o.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: o.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: o.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: o.func
} : {};
Wi.defaultProps = Ch;
const wh = Wi;
function _c(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: i,
    rippleY: s,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: u
  } = e, [d, p] = b.useState(!1), v = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = se(n.child, d && n.childLeaving, r && n.childPulsate);
  return !c && !d && p(!0), b.useEffect(() => {
    if (!c && l != null) {
      const m = setTimeout(l, u);
      return () => {
        clearTimeout(m);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ I.jsx("span", {
    className: v,
    style: g,
    children: /* @__PURE__ */ I.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (_c.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object.isRequired,
  className: o.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: o.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: o.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: o.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: o.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: o.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: o.number,
  /**
   * exit delay
   */
  timeout: o.number.isRequired
});
const Oh = Ne("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ut = Oh, Rh = ["center", "classes", "className"];
let Eo = (e) => e, ya, ga, ba, xa;
const ai = 550, Sh = 80, Ph = ur(ya || (ya = Eo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), $h = ur(ga || (ga = Eo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), _h = ur(ba || (ba = Eo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Nh = ce("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Ih = ce(_c, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(xa || (xa = Eo`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), ut.rippleVisible, Ph, ai, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ut.child, ut.childLeaving, $h, ai, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.childPulsate, _h, ({
  theme: e
}) => e.transitions.easing.easeInOut), Nc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, c = oe(r, Rh), [l, u] = b.useState([]), d = b.useRef(0), p = b.useRef(null);
  b.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const v = b.useRef(!1), g = b.useRef(0), y = b.useRef(null), m = b.useRef(null);
  b.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const f = b.useCallback((E) => {
    const {
      pulsate: h,
      rippleX: P,
      rippleY: O,
      rippleSize: V,
      cb: L
    } = E;
    u((_) => [..._, /* @__PURE__ */ I.jsx(Ih, {
      classes: {
        ripple: se(s.ripple, ut.ripple),
        rippleVisible: se(s.rippleVisible, ut.rippleVisible),
        ripplePulsate: se(s.ripplePulsate, ut.ripplePulsate),
        child: se(s.child, ut.child),
        childLeaving: se(s.childLeaving, ut.childLeaving),
        childPulsate: se(s.childPulsate, ut.childPulsate)
      },
      timeout: ai,
      pulsate: h,
      rippleX: P,
      rippleY: O,
      rippleSize: V
    }, d.current)]), d.current += 1, p.current = L;
  }, [s]), w = b.useCallback((E = {}, h = {}, P = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: V = i || h.pulsate,
      fakeElement: L = !1
      // For test purposes
    } = h;
    if ((E == null ? void 0 : E.type) === "mousedown" && v.current) {
      v.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (v.current = !0);
    const _ = L ? null : m.current, z = _ ? _.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let W, B, M;
    if (V || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      W = Math.round(z.width / 2), B = Math.round(z.height / 2);
    else {
      const {
        clientX: A,
        clientY: k
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      W = Math.round(A - z.left), B = Math.round(k - z.top);
    }
    if (V)
      M = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), M % 2 === 0 && (M += 1);
    else {
      const A = Math.max(Math.abs((_ ? _.clientWidth : 0) - W), W) * 2 + 2, k = Math.max(Math.abs((_ ? _.clientHeight : 0) - B), B) * 2 + 2;
      M = Math.sqrt(A ** 2 + k ** 2);
    }
    E != null && E.touches ? y.current === null && (y.current = () => {
      f({
        pulsate: O,
        rippleX: W,
        rippleY: B,
        rippleSize: M,
        cb: P
      });
    }, g.current = setTimeout(() => {
      y.current && (y.current(), y.current = null);
    }, Sh)) : f({
      pulsate: O,
      rippleX: W,
      rippleY: B,
      rippleSize: M,
      cb: P
    });
  }, [i, f]), R = b.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), C = b.useCallback((E, h) => {
    if (clearTimeout(g.current), (E == null ? void 0 : E.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.current = setTimeout(() => {
        C(E, h);
      });
      return;
    }
    y.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = h;
  }, []);
  return b.useImperativeHandle(n, () => ({
    pulsate: R,
    start: w,
    stop: C
  }), [R, w, C]), /* @__PURE__ */ I.jsx(Nh, T({
    className: se(ut.root, s.root, a),
    ref: m
  }, c, {
    children: /* @__PURE__ */ I.jsx(wh, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (Nc.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: o.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string
});
const Mh = Nc;
function kh(e) {
  return $e("MuiButtonBase", e);
}
const jh = Ne("MuiButtonBase", ["root", "disabled", "focusVisible"]), Dh = jh, Ah = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Lh = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Me({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, kh, i);
  return n && r && (a.root += ` ${r}`), a;
}, Fh = ce("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Dh.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ic = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: i,
    centerRipple: s = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: v = !1,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: m,
    onContextMenu: f,
    onDragLeave: w,
    onFocus: R,
    onFocusVisible: C,
    onKeyDown: E,
    onKeyUp: h,
    onMouseDown: P,
    onMouseLeave: O,
    onMouseUp: V,
    onTouchEnd: L,
    onTouchMove: _,
    onTouchStart: z,
    tabIndex: W = 0,
    TouchRippleProps: B,
    touchRippleRef: M,
    type: A
  } = r, k = oe(r, Ah), U = b.useRef(null), G = b.useRef(null), ee = Ye(G, M), {
    isFocusVisibleRef: N,
    onFocus: F,
    onBlur: X,
    ref: te
  } = mi(), [q, K] = b.useState(!1);
  u && q && K(!1), b.useImperativeHandle(i, () => ({
    focusVisible: () => {
      K(!0), U.current.focus();
    }
  }), []);
  const [J, Q] = b.useState(!1);
  b.useEffect(() => {
    Q(!0);
  }, []);
  const j = J && !d && !u;
  b.useEffect(() => {
    q && v && !d && J && G.current.pulsate();
  }, [d, v, q, J]);
  function Y(le, Ze, Rt = p) {
    return Lt((bt) => (Ze && Ze(bt), !Rt && G.current && G.current[le](bt), !0));
  }
  const Z = Y("start", P), ue = Y("stop", f), $ = Y("stop", w), ne = Y("stop", V), S = Y("stop", (le) => {
    q && le.preventDefault(), O && O(le);
  }), ae = Y("start", z), he = Y("stop", L), De = Y("stop", _), _e = Y("stop", (le) => {
    X(le), N.current === !1 && K(!1), y && y(le);
  }, !1), et = Lt((le) => {
    U.current || (U.current = le.currentTarget), F(le), N.current === !0 && (K(!0), C && C(le)), R && R(le);
  }), Be = () => {
    const le = U.current;
    return l && l !== "button" && !(le.tagName === "A" && le.href);
  }, Xe = b.useRef(!1), We = Lt((le) => {
    v && !Xe.current && q && G.current && le.key === " " && (Xe.current = !0, G.current.stop(le, () => {
      G.current.start(le);
    })), le.target === le.currentTarget && Be() && le.key === " " && le.preventDefault(), E && E(le), le.target === le.currentTarget && Be() && le.key === "Enter" && !u && (le.preventDefault(), m && m(le));
  }), st = Lt((le) => {
    v && le.key === " " && G.current && q && !le.defaultPrevented && (Xe.current = !1, G.current.stop(le, () => {
      G.current.pulsate(le);
    })), h && h(le), m && le.target === le.currentTarget && Be() && le.key === " " && !le.defaultPrevented && m(le);
  });
  let Pe = l;
  Pe === "button" && (k.href || k.to) && (Pe = g);
  const Ge = {};
  Pe === "button" ? (Ge.type = A === void 0 ? "button" : A, Ge.disabled = u) : (!k.href && !k.to && (Ge.role = "button"), u && (Ge["aria-disabled"] = u));
  const Je = Ye(n, te, U);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    j && !G.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [j]);
  const tt = T({}, r, {
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: v,
    tabIndex: W,
    focusVisible: q
  }), kt = Lh(tt);
  return /* @__PURE__ */ I.jsxs(Fh, T({
    as: Pe,
    className: se(kt.root, c),
    ownerState: tt,
    onBlur: _e,
    onClick: m,
    onContextMenu: ue,
    onFocus: et,
    onKeyDown: We,
    onKeyUp: st,
    onMouseDown: Z,
    onMouseLeave: S,
    onMouseUp: ne,
    onDragLeave: $,
    onTouchEnd: he,
    onTouchMove: De,
    onTouchStart: ae,
    ref: Je,
    tabIndex: u ? -1 : W,
    type: A
  }, Ge, k, {
    children: [a, j ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ I.jsx(Mh, T({
        ref: ee,
        center: s
      }, B))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Qr,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: fi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: o.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: o.elementType,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * @ignore
   */
  onClick: o.func,
  /**
   * @ignore
   */
  onContextMenu: o.func,
  /**
   * @ignore
   */
  onDragLeave: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onKeyUp: o.func,
  /**
   * @ignore
   */
  onMouseDown: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * @ignore
   */
  onMouseUp: o.func,
  /**
   * @ignore
   */
  onTouchEnd: o.func,
  /**
   * @ignore
   */
  onTouchMove: o.func,
  /**
   * @ignore
   */
  onTouchStart: o.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: o.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: o.oneOfType([o.func, o.shape({
    current: o.shape({
      pulsate: o.func.isRequired,
      start: o.func.isRequired,
      stop: o.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string])
});
const _n = Ic, Vh = ["slots", "slotProps"], Bh = ce(_n)(({
  theme: e
}) => T({
  display: "flex",
  marginLeft: `calc(${e.spacing(1)} * 0.5)`,
  marginRight: `calc(${e.spacing(1)} * 0.5)`
}, e.palette.mode === "light" ? {
  backgroundColor: e.palette.grey[100],
  color: e.palette.grey[700]
} : {
  backgroundColor: e.palette.grey[700],
  color: e.palette.grey[100]
}, {
  borderRadius: 2,
  "&:hover, &:focus": T({}, e.palette.mode === "light" ? {
    backgroundColor: e.palette.grey[200]
  } : {
    backgroundColor: e.palette.grey[600]
  }),
  "&:active": T({
    boxShadow: e.shadows[0]
  }, e.palette.mode === "light" ? {
    backgroundColor: oi(e.palette.grey[200], 0.12)
  } : {
    backgroundColor: oi(e.palette.grey[600], 0.12)
  })
})), zh = ce(hh)({
  width: 24,
  height: 16
});
function Mc(e) {
  const {
    slots: t = {},
    slotProps: n = {}
  } = e, r = oe(e, Vh), i = e;
  return /* @__PURE__ */ I.jsx("li", {
    children: /* @__PURE__ */ I.jsx(Bh, T({
      focusRipple: !0
    }, r, {
      ownerState: i,
      children: /* @__PURE__ */ I.jsx(zh, T({
        as: t.CollapsedIcon,
        ownerState: i
      }, n.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" && (Mc.propTypes = {
  /**
   * The props used for the CollapsedIcon slot.
   * @default {}
   */
  slotProps: o.shape({
    collapsedIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the BreadcumbCollapsed.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    CollapsedIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object
});
function Uh(e) {
  return $e("MuiBreadcrumbs", e);
}
const Wh = Ne("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), Yh = Wh, qh = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"], Hh = (e) => {
  const {
    classes: t
  } = e;
  return Me({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, Uh, t);
}, Gh = ce(Hn, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${Yh.li}`]: t.li
  }, t.root]
})({}), Kh = ce("ol", {
  name: "MuiBreadcrumbs",
  slot: "Ol",
  overridesResolver: (e, t) => t.ol
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
}), Xh = ce("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function Jh(e, t, n, r) {
  return e.reduce((i, s, a) => (a < e.length - 1 ? i = i.concat(s, /* @__PURE__ */ I.jsx(Xh, {
    "aria-hidden": !0,
    className: t,
    ownerState: r,
    children: n
  }, `separator-${a}`)) : i.push(s), i), []);
}
const kc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiBreadcrumbs"
  }), {
    children: i,
    className: s,
    component: a = "nav",
    slots: c = {},
    slotProps: l = {},
    expandText: u = "Show path",
    itemsAfterCollapse: d = 1,
    itemsBeforeCollapse: p = 1,
    maxItems: v = 8,
    separator: g = "/"
  } = r, y = oe(r, qh), [m, f] = b.useState(!1), w = T({}, r, {
    component: a,
    expanded: m,
    expandText: u,
    itemsAfterCollapse: d,
    itemsBeforeCollapse: p,
    maxItems: v,
    separator: g
  }), R = Hh(w), C = Vt({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: w
  }), E = b.useRef(null), h = (O) => {
    const V = () => {
      f(!0);
      const L = E.current.querySelector("a[href],button,[tabindex]");
      L && L.focus();
    };
    return p + d >= O.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${d}} + itemsBeforeCollapse={${p}} >= maxItems={${v}}`].join(`
`)), O) : [...O.slice(0, p), /* @__PURE__ */ I.jsx(Mc, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: C
      },
      onClick: V
    }, "ellipsis"), ...O.slice(O.length - d, O.length)];
  }, P = b.Children.toArray(i).filter((O) => (process.env.NODE_ENV !== "production" && Zr.isFragment(O) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ b.isValidElement(O))).map((O, V) => /* @__PURE__ */ I.jsx("li", {
    className: R.li,
    children: O
  }, `child-${V}`));
  return /* @__PURE__ */ I.jsx(Gh, T({
    ref: n,
    component: a,
    color: "text.secondary",
    className: se(R.root, s),
    ownerState: w
  }, y, {
    children: /* @__PURE__ */ I.jsx(Kh, {
      className: R.ol,
      ref: E,
      ownerState: w,
      children: Jh(m || v && P.length <= v ? P : h(P), R.separator, g, w)
    })
  }));
});
process.env.NODE_ENV !== "production" && (kc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Override the default label for the expand button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Show path'
   */
  expandText: o.string,
  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   * @default 1
   */
  itemsAfterCollapse: Kn,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Kn,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Kn,
  /**
   * Custom separator node.
   * @default '/'
   */
  separator: o.node,
  /**
   * The props used for each slot inside the Breadcumb.
   * @default {}
   */
  slotProps: o.shape({
    collapsedIcon: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Breadcumb.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    CollapsedIcon: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Zh = kc;
function en() {
  const e = wc(Li);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[Fi] || e;
}
const Qh = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ea = Qh, ev = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Ga.configure(e);
  }
}, tv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: pe,
  createChainedFunction: Ho,
  createSvgIcon: Bi,
  debounce: Ua,
  deprecatedPropType: ql,
  isMuiElement: eo,
  ownerDocument: Qe,
  ownerWindow: gn,
  requirePropFactory: Hl,
  setRef: Vr,
  unstable_ClassNameGenerator: ev,
  unstable_useEnhancedEffect: wt,
  unstable_useId: Wa,
  unsupportedProp: Xl,
  useControlled: pi,
  useEventCallback: Lt,
  useForkRef: Ye,
  useIsFocusVisible: mi
}, Symbol.toStringTag, { value: "Module" })), Yi = (e) => e.scrollTop;
function On(e, t) {
  var n, r;
  const {
    timeout: i,
    easing: s,
    style: a = {}
  } = e;
  return {
    duration: (n = a.transitionDuration) != null ? n : typeof i == "number" ? i : i[t.mode] || 0,
    easing: (r = a.transitionTimingFunction) != null ? r : typeof s == "object" ? s[t.mode] : s,
    delay: a.transitionDelay
  };
}
function nv(e) {
  return $e("MuiPaper", e);
}
Ne("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const rv = ["className", "component", "elevation", "square", "variant"], ov = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Me(s, nv, i);
}, iv = ce("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n;
  return T({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && T({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Ve("#fff", Ea(t.elevation))}, ${Ve("#fff", Ea(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), jc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = oe(r, rv), d = T({}, r, {
    component: s,
    elevation: a,
    square: c,
    variant: l
  }), p = ov(d);
  return process.env.NODE_ENV !== "production" && en().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ I.jsx(iv, T({
    as: s,
    ownerState: d,
    className: se(p.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (jc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Bt(Kn, (e) => {
    const {
      elevation: t,
      variant: n
    } = e;
    return t > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: o.oneOfType([o.oneOf(["elevation", "outlined"]), o.string])
});
const sv = jc, av = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], cv = ce(ic, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Dc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const i = Cc(), s = Ie({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: c,
    components: l,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: v,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: f,
    popperRef: w,
    transition: R,
    slots: C,
    slotProps: E
  } = s, h = oe(s, av), P = (r = C == null ? void 0 : C.root) != null ? r : l == null ? void 0 : l.Root, O = T({
    anchorEl: a,
    container: d,
    disablePortal: p,
    keepMounted: v,
    modifiers: g,
    open: y,
    placement: m,
    popperOptions: f,
    popperRef: w,
    transition: R
  }, h);
  return /* @__PURE__ */ I.jsx(cv, T({
    as: c,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: P
    },
    slotProps: E ?? u
  }, O, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: o.oneOfType([_t, o.object, o.func]),
  /**
   * Popper render function or node.
   */
  children: o.oneOfType([o.node, o.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([_t, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: o.arrayOf(o.shape({
    data: o.object,
    effect: o.func,
    enabled: o.bool,
    fn: o.func,
    name: o.any,
    options: o.object,
    phase: o.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: o.arrayOf(o.string),
    requiresIfExists: o.arrayOf(o.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: o.shape({
    modifiers: o.array,
    onFirstUpdate: o.func,
    placement: o.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: o.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: Qr,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: o.shape({
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: o.bool
});
const Ac = Dc, lv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], uv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Lc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = en(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: v,
    onExit: g,
    onExited: y,
    onExiting: m,
    style: f,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = zi
  } = t, C = oe(t, lv), E = b.useRef(null), h = Ye(E, c.ref, n), P = (M) => (A) => {
    if (M) {
      const k = E.current;
      A === void 0 ? M(k) : M(k, A);
    }
  }, O = P(v), V = P((M, A) => {
    Yi(M);
    const k = On({
      style: f,
      timeout: w,
      easing: l
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("opacity", k), M.style.transition = r.transitions.create("opacity", k), d && d(M, A);
  }), L = P(p), _ = P(m), z = P((M) => {
    const A = On({
      style: f,
      timeout: w,
      easing: l
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("opacity", A), M.style.transition = r.transitions.create("opacity", A), g && g(M);
  }), W = P(y), B = (M) => {
    s && s(E.current, M);
  };
  return /* @__PURE__ */ I.jsx(R, T({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: V,
    onEntered: L,
    onEntering: O,
    onExit: z,
    onExited: W,
    onExiting: _,
    addEndListener: B,
    timeout: w
  }, C, {
    children: (M, A) => /* @__PURE__ */ b.cloneElement(c, T({
      style: T({
        opacity: 0,
        visibility: M === "exited" && !u ? "hidden" : void 0
      }, uv[M], f, c.props.style),
      ref: h
    }, A))
  }));
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Rn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const dv = Lc;
function fv(e) {
  return $e("MuiBackdrop", e);
}
Ne("MuiBackdrop", ["root", "invisible"]);
const pv = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], mv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Me({
    root: ["root", n && "invisible"]
  }, fv, t);
}, hv = ce("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => T({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), Fc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = Ie({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: v = !1,
    open: g,
    slotProps: y = {},
    slots: m = {},
    TransitionComponent: f = dv,
    transitionDuration: w
  } = a, R = oe(a, pv), C = T({}, a, {
    component: u,
    invisible: v
  }), E = mv(C), h = (r = y.root) != null ? r : p.root;
  return /* @__PURE__ */ I.jsx(f, T({
    in: g,
    timeout: w
  }, R, {
    children: /* @__PURE__ */ I.jsx(hv, T({
      "aria-hidden": !0
    }, h, {
      as: (i = (s = m.root) != null ? s : d.Root) != null ? i : u,
      className: se(E.root, l, h == null ? void 0 : h.className),
      ownerState: T({}, C, h == null ? void 0 : h.ownerState),
      classes: E,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: o.bool,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const Vc = Fc;
function vv(e) {
  return $e("MuiButton", e);
}
const yv = Ne("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Rr = yv, Bc = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Bc.displayName = "ButtonGroupContext");
const gv = Bc, zc = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (zc.displayName = "ButtonGroupButtonContext");
const bv = zc, xv = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Ev = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, `${s}${pe(t)}`, `size${pe(i)}`, `${s}Size${pe(i)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${pe(i)}`],
    endIcon: ["endIcon", `iconSize${pe(i)}`]
  }, l = Me(c, vv, a);
  return T({}, a, l);
}, Uc = (e) => T({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Tv = ce(_n, {
  shouldForwardProp: (e) => $n(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${pe(n.color)}`], t[`size${pe(n.size)}`], t[`${n.variant}Size${pe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return T({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": T({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ve(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : s,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": T({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Rr.focusVisible}`]: T({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Rr.disabled}`]: T({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ve(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : i,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Rr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Rr.disabled}`]: {
    boxShadow: "none"
  }
}), Cv = ce("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${pe(n.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Uc(e))), wv = ce("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${pe(n.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Uc(e))), Wc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = b.useContext(gv), i = b.useContext(bv), s = hi(r, t), a = Ie({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: g = !1,
    endIcon: y,
    focusVisibleClassName: m,
    fullWidth: f = !1,
    size: w = "medium",
    startIcon: R,
    type: C,
    variant: E = "text"
  } = a, h = oe(a, xv), P = T({}, a, {
    color: l,
    component: u,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: g,
    fullWidth: f,
    size: w,
    type: C,
    variant: E
  }), O = Ev(P), V = R && /* @__PURE__ */ I.jsx(Cv, {
    className: O.startIcon,
    ownerState: P,
    children: R
  }), L = y && /* @__PURE__ */ I.jsx(wv, {
    className: O.endIcon,
    ownerState: P,
    children: y
  }), _ = i || "";
  return /* @__PURE__ */ I.jsxs(Tv, T({
    ownerState: P,
    className: se(r.className, O.root, d, _),
    component: u,
    disabled: p,
    focusRipple: !g,
    focusVisibleClassName: se(O.focusVisible, m),
    ref: n,
    type: C
  }, h, {
    classes: O,
    children: [V, c, L]
  }));
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * Element placed after the children.
   */
  endIcon: o.node,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * Element placed before the children.
   */
  startIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @ignore
   */
  type: o.oneOfType([o.oneOf(["button", "reset", "submit"]), o.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["contained", "outlined", "text"]), o.string])
});
const Ov = Wc;
function Rv(e) {
  return $e("MuiCircularProgress", e);
}
Ne("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Sv = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let To = (e) => e, Ta, Ca, wa, Oa;
const Dt = 44, Pv = ur(Ta || (Ta = To`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), $v = ur(Ca || (Ca = To`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), _v = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${pe(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${pe(n)}`, i && "circleDisableShrink"]
  };
  return Me(s, Rv, t);
}, Nv = ce("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${pe(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => T({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && Ii(wa || (wa = To`
      animation: ${0} 1.4s linear infinite;
    `), Pv)), Iv = ce("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Mv = ce("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${pe(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => T({
  stroke: "currentColor"
}, e.variant === "determinate" && {
  transition: t.transitions.create("stroke-dashoffset")
}, e.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && !e.disableShrink && Ii(Oa || (Oa = To`
      animation: ${0} 1.4s ease-in-out infinite;
    `), $v)), Yc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: i,
    color: s = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: l,
    thickness: u = 3.6,
    value: d = 0,
    variant: p = "indeterminate"
  } = r, v = oe(r, Sv), g = T({}, r, {
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: d,
    variant: p
  }), y = _v(g), m = {}, f = {}, w = {};
  if (p === "determinate") {
    const R = 2 * Math.PI * ((Dt - u) / 2);
    m.strokeDasharray = R.toFixed(3), w["aria-valuenow"] = Math.round(d), m.strokeDashoffset = `${((100 - d) / 100 * R).toFixed(3)}px`, f.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ I.jsx(Nv, T({
    className: se(y.root, i),
    style: T({
      width: c,
      height: c
    }, f, l),
    ownerState: g,
    ref: n,
    role: "progressbar"
  }, w, v, {
    children: /* @__PURE__ */ I.jsx(Iv, {
      className: y.svg,
      ownerState: g,
      viewBox: `${Dt / 2} ${Dt / 2} ${Dt} ${Dt}`,
      children: /* @__PURE__ */ I.jsx(Mv, {
        className: y.circle,
        style: m,
        ownerState: g,
        cx: Dt,
        cy: Dt,
        r: (Dt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Bt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g. '3rem'.
   * @default 40
   */
  size: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: o.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: o.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["determinate", "indeterminate"])
});
const kv = Yc;
function jv(e) {
  return $e("MuiModal", e);
}
Ne("MuiModal", ["root", "hidden", "backdrop"]);
const Dv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], Av = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, jv, r);
}, Lv = ce("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Fv = ce(Vc, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), qc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, c, l;
  const u = Ie({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Fv,
    BackdropProps: p,
    className: v,
    closeAfterTransition: g = !1,
    children: y,
    container: m,
    component: f,
    components: w = {},
    componentsProps: R = {},
    disableAutoFocus: C = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: P = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: V = !1,
    hideBackdrop: L = !1,
    keepMounted: _ = !1,
    onBackdropClick: z,
    open: W,
    slotProps: B,
    slots: M
    // eslint-disable-next-line react/prop-types
  } = u, A = oe(u, Dv), k = T({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: C,
    disableEnforceFocus: E,
    disableEscapeKeyDown: h,
    disablePortal: P,
    disableRestoreFocus: O,
    disableScrollLock: V,
    hideBackdrop: L,
    keepMounted: _
  }), {
    getRootProps: U,
    getBackdropProps: G,
    getTransitionProps: ee,
    portalRef: N,
    isTopModal: F,
    exited: X,
    hasTransition: te
  } = Wd(T({}, k, {
    rootRef: n
  })), q = T({}, k, {
    exited: X
  }), K = Av(q), J = {};
  if (y.props.tabIndex === void 0 && (J.tabIndex = "-1"), te) {
    const {
      onEnter: ne,
      onExited: S
    } = ee();
    J.onEnter = ne, J.onExited = S;
  }
  const Q = (r = (i = M == null ? void 0 : M.root) != null ? i : w.Root) != null ? r : Lv, j = (s = (a = M == null ? void 0 : M.backdrop) != null ? a : w.Backdrop) != null ? s : d, Y = (c = B == null ? void 0 : B.root) != null ? c : R.root, Z = (l = B == null ? void 0 : B.backdrop) != null ? l : R.backdrop, ue = Vt({
    elementType: Q,
    externalSlotProps: Y,
    externalForwardedProps: A,
    getSlotProps: U,
    additionalProps: {
      ref: n,
      as: f
    },
    ownerState: q,
    className: se(v, Y == null ? void 0 : Y.className, K == null ? void 0 : K.root, !q.open && q.exited && (K == null ? void 0 : K.hidden))
  }), $ = Vt({
    elementType: j,
    externalSlotProps: Z,
    additionalProps: p,
    getSlotProps: (ne) => G(T({}, ne, {
      onClick: (S) => {
        z && z(S), ne != null && ne.onClick && ne.onClick(S);
      }
    })),
    className: se(Z == null ? void 0 : Z.className, p == null ? void 0 : p.className, K == null ? void 0 : K.backdrop),
    ownerState: q
  });
  return !_ && !W && (!te || X) ? null : /* @__PURE__ */ I.jsx(nr, {
    ref: N,
    container: m,
    disablePortal: P,
    children: /* @__PURE__ */ I.jsxs(Q, T({}, ue, {
      children: [!L && d ? /* @__PURE__ */ I.jsx(j, T({}, $)) : null, /* @__PURE__ */ I.jsx(zr, {
        disableEnforceFocus: E,
        disableAutoFocus: C,
        disableRestoreFocus: O,
        isEnabled: F,
        open: W,
        children: /* @__PURE__ */ b.cloneElement(y, J)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: o.object,
  /**
   * A single child content element.
   */
  children: Rn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: o.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Backdrop: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([_t, o.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: o.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: o.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: o.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: o.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: o.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: o.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: o.shape({
    backdrop: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    backdrop: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Vv = qc;
function Bv(e) {
  return $e("MuiDivider", e);
}
const Ra = Ne("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), zv = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Uv = (e) => {
  const {
    absolute: t,
    children: n,
    classes: r,
    flexItem: i,
    light: s,
    orientation: a,
    textAlign: c,
    variant: l
  } = e;
  return Me({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Bv, r);
}, Wv = ce("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Ve(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => T({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => T({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => T({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => T({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), Yv = ce("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), qi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: i = !1,
    children: s,
    className: a,
    component: c = s ? "div" : "hr",
    flexItem: l = !1,
    light: u = !1,
    orientation: d = "horizontal",
    role: p = c !== "hr" ? "separator" : void 0,
    textAlign: v = "center",
    variant: g = "fullWidth"
  } = r, y = oe(r, zv), m = T({}, r, {
    absolute: i,
    component: c,
    flexItem: l,
    light: u,
    orientation: d,
    role: p,
    textAlign: v,
    variant: g
  }), f = Uv(m);
  return /* @__PURE__ */ I.jsx(Wv, T({
    as: c,
    className: se(f.root, a),
    role: p,
    ref: n,
    ownerState: m
  }, y, {
    children: s ? /* @__PURE__ */ I.jsx(Yv, {
      className: f.wrapper,
      ownerState: m,
      children: s
    }) : null
  }));
});
qi.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (qi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
const qv = qi;
function Hv(e) {
  return $e("MuiFab", e);
}
const Gv = Ne("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Sa = Gv, Kv = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], Xv = (e) => {
  const {
    color: t,
    variant: n,
    classes: r,
    size: i
  } = e, s = {
    root: ["root", n, `size${pe(i)}`, t === "inherit" ? "colorInherit" : t]
  }, a = Me(s, Hv, r);
  return T({}, r, a);
}, Jv = ce(_n, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => $n(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${pe(n.size)}`], n.color === "inherit" && t.colorInherit, t[pe(n.size)], t[n.color]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  return T({}, e.typography.button, {
    minHeight: 36,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
      duration: e.transitions.duration.short
    }),
    borderRadius: "50%",
    padding: 0,
    minWidth: 0,
    width: 56,
    height: 56,
    zIndex: (e.vars || e).zIndex.fab,
    boxShadow: (e.vars || e).shadows[6],
    "&:active": {
      boxShadow: (e.vars || e).shadows[12]
    },
    color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
    backgroundColor: (e.vars || e).palette.grey[300],
    "&:hover": {
      backgroundColor: (e.vars || e).palette.grey.A100,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.grey[300]
      },
      textDecoration: "none"
    },
    [`&.${Sa.focusVisible}`]: {
      boxShadow: (e.vars || e).shadows[6]
    }
  }, t.size === "small" && {
    width: 40,
    height: 40
  }, t.size === "medium" && {
    width: 48,
    height: 48
  }, t.variant === "extended" && {
    borderRadius: 48 / 2,
    padding: "0 16px",
    width: "auto",
    minHeight: "auto",
    minWidth: 48,
    height: 48
  }, t.variant === "extended" && t.size === "small" && {
    width: "auto",
    padding: "0 8px",
    borderRadius: 34 / 2,
    minWidth: 34,
    height: 34
  }, t.variant === "extended" && t.size === "medium" && {
    width: "auto",
    padding: "0 16px",
    borderRadius: 40 / 2,
    minWidth: 40,
    height: 40
  }, t.color === "inherit" && {
    color: "inherit"
  });
}, ({
  theme: e,
  ownerState: t
}) => T({}, t.color !== "inherit" && t.color !== "default" && (e.vars || e).palette[t.color] != null && {
  color: (e.vars || e).palette[t.color].contrastText,
  backgroundColor: (e.vars || e).palette[t.color].main,
  "&:hover": {
    backgroundColor: (e.vars || e).palette[t.color].dark,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: (e.vars || e).palette[t.color].main
    }
  }
}), ({
  theme: e
}) => ({
  [`&.${Sa.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
})), Hc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiFab"
  }), {
    children: i,
    className: s,
    color: a = "default",
    component: c = "button",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    focusVisibleClassName: d,
    size: p = "large",
    variant: v = "circular"
  } = r, g = oe(r, Kv), y = T({}, r, {
    color: a,
    component: c,
    disabled: l,
    disableFocusRipple: u,
    size: p,
    variant: v
  }), m = Xv(y);
  return /* @__PURE__ */ I.jsx(Jv, T({
    className: se(m.root, s),
    component: c,
    disabled: l,
    focusRipple: !u,
    focusVisibleClassName: se(m.focusVisible, d),
    ownerState: y,
    ref: n
  }, g, {
    classes: m,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "error", "info", "inherit", "primary", "secondary", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   */
  disableRipple: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: o.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'large'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'circular'
   */
  variant: o.oneOfType([o.oneOf(["circular", "extended"]), o.string])
});
const Gc = Hc, Zv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ci(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Qv = {
  entering: {
    opacity: 1,
    transform: ci(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Lo = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Hi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: v,
    onExiting: g,
    style: y,
    timeout: m = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: f = zi
  } = t, w = oe(t, Zv), R = b.useRef(), C = b.useRef(), E = en(), h = b.useRef(null), P = Ye(h, s.ref, n), O = (A) => (k) => {
    if (A) {
      const U = h.current;
      k === void 0 ? A(U) : A(U, k);
    }
  }, V = O(d), L = O((A, k) => {
    Yi(A);
    const {
      duration: U,
      delay: G,
      easing: ee
    } = On({
      style: y,
      timeout: m,
      easing: a
    }, {
      mode: "enter"
    });
    let N;
    m === "auto" ? (N = E.transitions.getAutoHeightDuration(A.clientHeight), C.current = N) : N = U, A.style.transition = [E.transitions.create("opacity", {
      duration: N,
      delay: G
    }), E.transitions.create("transform", {
      duration: Lo ? N : N * 0.666,
      delay: G,
      easing: ee
    })].join(","), l && l(A, k);
  }), _ = O(u), z = O(g), W = O((A) => {
    const {
      duration: k,
      delay: U,
      easing: G
    } = On({
      style: y,
      timeout: m,
      easing: a
    }, {
      mode: "exit"
    });
    let ee;
    m === "auto" ? (ee = E.transitions.getAutoHeightDuration(A.clientHeight), C.current = ee) : ee = k, A.style.transition = [E.transitions.create("opacity", {
      duration: ee,
      delay: U
    }), E.transitions.create("transform", {
      duration: Lo ? ee : ee * 0.666,
      delay: Lo ? U : U || ee * 0.333,
      easing: G
    })].join(","), A.style.opacity = 0, A.style.transform = ci(0.75), p && p(A);
  }), B = O(v), M = (A) => {
    m === "auto" && (R.current = setTimeout(A, C.current || 0)), r && r(h.current, A);
  };
  return b.useEffect(() => () => {
    clearTimeout(R.current);
  }, []), /* @__PURE__ */ I.jsx(f, T({
    appear: i,
    in: c,
    nodeRef: h,
    onEnter: L,
    onEntered: _,
    onEntering: V,
    onExit: W,
    onExited: B,
    onExiting: z,
    addEndListener: M,
    timeout: m === "auto" ? null : m
  }, w, {
    children: (A, k) => /* @__PURE__ */ b.cloneElement(s, T({
      style: T({
        opacity: 0,
        transform: ci(0.75),
        visibility: A === "exited" && !c ? "hidden" : void 0
      }, Qv[A], y, s.props.style),
      ref: P
    }, k))
  }));
});
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Rn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
Hi.muiSupportAuto = !0;
const li = Hi, Kc = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Kc.displayName = "ListContext");
const gt = Kc;
function ey(e) {
  return $e("MuiList", e);
}
Ne("MuiList", ["root", "padding", "dense", "subheader"]);
const ty = ["children", "className", "component", "dense", "disablePadding", "subheader"], ny = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Me({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, ey, t);
}, ry = ce("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => T({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), Xc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, d = oe(r, ty), p = b.useMemo(() => ({
    dense: c
  }), [c]), v = T({}, r, {
    component: a,
    dense: c,
    disablePadding: l
  }), g = ny(v);
  return /* @__PURE__ */ I.jsx(gt.Provider, {
    value: p,
    children: /* @__PURE__ */ I.jsxs(ry, T({
      as: a,
      className: se(g.root, s),
      ref: n,
      ownerState: v
    }, d, {
      children: [u, i]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Xc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Jc = Xc;
function oy(e) {
  return $e("MuiListItem", e);
}
const iy = Ne("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), fn = iy;
function sy(e) {
  return $e("MuiListItemButton", e);
}
const ay = Ne("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), pn = ay, cy = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], ly = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, uy = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: c
  } = e, u = Me({
    root: ["root", r && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, sy, n);
  return T({}, n, u);
}, dy = ce(_n, {
  shouldForwardProp: (e) => $n(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: ly
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "flex",
  flexGrow: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minWidth: 0,
  boxSizing: "border-box",
  textAlign: "left",
  paddingTop: 8,
  paddingBottom: 8,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${pn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${pn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${pn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${pn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${pn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
})), Zc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiListItemButton"
  }), {
    alignItems: i = "center",
    autoFocus: s = !1,
    component: a = "div",
    children: c,
    dense: l = !1,
    disableGutters: u = !1,
    divider: d = !1,
    focusVisibleClassName: p,
    selected: v = !1,
    className: g
  } = r, y = oe(r, cy), m = b.useContext(gt), f = b.useMemo(() => ({
    dense: l || m.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, m.dense, l, u]), w = b.useRef(null);
  wt(() => {
    s && (w.current ? w.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const R = T({}, r, {
    alignItems: i,
    dense: f.dense,
    disableGutters: u,
    divider: d,
    selected: v
  }), C = uy(R), E = Ye(w, n);
  return /* @__PURE__ */ I.jsx(gt.Provider, {
    value: f,
    children: /* @__PURE__ */ I.jsx(dy, T({
      ref: E,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: se(C.focusVisible, p),
      ownerState: R,
      className: se(C.root, g)
    }, y, {
      classes: C,
      children: c
    }))
  });
});
process.env.NODE_ENV !== "production" && (Zc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  href: o.string,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const fy = Zc;
function py(e) {
  return $e("MuiListItemSecondaryAction", e);
}
Ne("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const my = ["className"], hy = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return Me({
    root: ["root", t && "disableGutters"]
  }, py, n);
}, vy = ce("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => T({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Gi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i
  } = r, s = oe(r, my), a = b.useContext(gt), c = T({}, r, {
    disableGutters: a.disableGutters
  }), l = hy(c);
  return /* @__PURE__ */ I.jsx(vy, T({
    className: se(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
Gi.muiName = "ListItemSecondaryAction";
const yy = Gi, gy = ["className"], by = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], xy = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, Ey = (e) => {
  const {
    alignItems: t,
    button: n,
    classes: r,
    dense: i,
    disabled: s,
    disableGutters: a,
    disablePadding: c,
    divider: l,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return Me({
    root: ["root", i && "dense", !a && "gutters", !c && "padding", l && "divider", s && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, oy, r);
}, Ty = ce("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: xy
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && T({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${pn.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${fn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${fn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${fn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${fn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${fn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), Cy = ce("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Qc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: i = "center",
    autoFocus: s = !1,
    button: a = !1,
    children: c,
    className: l,
    component: u,
    components: d = {},
    componentsProps: p = {},
    ContainerComponent: v = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: y = !1,
    disabled: m = !1,
    disableGutters: f = !1,
    disablePadding: w = !1,
    divider: R = !1,
    focusVisibleClassName: C,
    secondaryAction: E,
    selected: h = !1,
    slotProps: P = {},
    slots: O = {}
  } = r, V = oe(r.ContainerProps, gy), L = oe(r, by), _ = b.useContext(gt), z = b.useMemo(() => ({
    dense: y || _.dense || !1,
    alignItems: i,
    disableGutters: f
  }), [i, _.dense, y, f]), W = b.useRef(null);
  wt(() => {
    s && (W.current ? W.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const B = b.Children.toArray(c), M = B.length && eo(B[B.length - 1], ["ListItemSecondaryAction"]), A = T({}, r, {
    alignItems: i,
    autoFocus: s,
    button: a,
    dense: z.dense,
    disabled: m,
    disableGutters: f,
    disablePadding: w,
    divider: R,
    hasSecondaryAction: M,
    selected: h
  }), k = Ey(A), U = Ye(W, n), G = O.root || d.Root || Ty, ee = P.root || p.root || {}, N = T({
    className: se(k.root, ee.className, l),
    disabled: m
  }, L);
  let F = u || "li";
  return a && (N.component = u || "div", N.focusVisibleClassName = se(fn.focusVisible, C), F = _n), M ? (F = !N.component && !u ? "div" : F, v === "li" && (F === "li" ? F = "div" : N.component === "li" && (N.component = "div")), /* @__PURE__ */ I.jsx(gt.Provider, {
    value: z,
    children: /* @__PURE__ */ I.jsxs(Cy, T({
      as: v,
      className: se(k.container, g),
      ref: U,
      ownerState: A
    }, V, {
      children: [/* @__PURE__ */ I.jsx(G, T({}, ee, !Br(G) && {
        as: F,
        ownerState: T({}, A, ee.ownerState)
      }, N, {
        children: B
      })), B.pop()]
    }))
  })) : /* @__PURE__ */ I.jsx(gt.Provider, {
    value: z,
    children: /* @__PURE__ */ I.jsxs(G, T({}, ee, {
      as: F,
      ref: U
    }, !Br(G) && {
      ownerState: T({}, A, ee.ownerState)
    }, N, {
      children: [B, E && /* @__PURE__ */ I.jsx(yy, {
        children: E
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: o.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Bt(o.node, (e) => {
    const t = b.Children.toArray(e.children);
    let n = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const i = t[r];
      if (eo(i, ["ListItemSecondaryAction"])) {
        n = r;
        break;
      }
    }
    return n !== -1 && n !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    root: o.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: fi,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: o.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: o.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const wy = Qc;
function Oy(e) {
  return $e("MuiListItemIcon", e);
}
const Ry = Ne("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Pa = Ry, Sy = ["className"], Py = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return Me({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Oy, n);
}, $y = ce("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), el = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i
  } = r, s = oe(r, Sy), a = b.useContext(gt), c = T({}, r, {
    alignItems: a.alignItems
  }), l = Py(c);
  return /* @__PURE__ */ I.jsx($y, T({
    className: se(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const _y = el;
function Ny(e) {
  return $e("MuiListItemText", e);
}
const Iy = Ne("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Jr = Iy, My = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], ky = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: i,
    dense: s
  } = e;
  return Me({
    root: ["root", n && "inset", s && "dense", r && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Ny, t);
}, jy = ce("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Jr.primary}`]: t.primary
    }, {
      [`& .${Jr.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})(({
  ownerState: e
}) => T({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), tl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiListItemText"
  }), {
    children: i,
    className: s,
    disableTypography: a = !1,
    inset: c = !1,
    primary: l,
    primaryTypographyProps: u,
    secondary: d,
    secondaryTypographyProps: p
  } = r, v = oe(r, My), {
    dense: g
  } = b.useContext(gt);
  let y = l ?? i, m = d;
  const f = T({}, r, {
    disableTypography: a,
    inset: c,
    primary: !!y,
    secondary: !!m,
    dense: g
  }), w = ky(f);
  return y != null && y.type !== Hn && !a && (y = /* @__PURE__ */ I.jsx(Hn, T({
    variant: g ? "body2" : "body1",
    className: w.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: y
  }))), m != null && m.type !== Hn && !a && (m = /* @__PURE__ */ I.jsx(Hn, T({
    variant: "body2",
    className: w.secondary,
    color: "text.secondary",
    display: "block"
  }, p, {
    children: m
  }))), /* @__PURE__ */ I.jsxs(jy, T({
    className: se(w.root, s),
    ownerState: f,
    ref: n
  }, v, {
    children: [y, m]
  }));
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Alias for the `primary` prop.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: o.bool,
  /**
   * The main content element.
   */
  primary: o.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: o.object,
  /**
   * The secondary content element.
   */
  secondary: o.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Dy = tl, Ay = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Fo(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function $a(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function nl(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function zn(e, t, n, r, i, s) {
  let a = !1, c = i(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !nl(c, s) || l)
      c = i(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const rl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: i = !1,
    autoFocusItem: s = !1,
    children: a,
    className: c,
    disabledItemsFocusable: l = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu"
  } = t, v = oe(t, Ay), g = b.useRef(null), y = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  wt(() => {
    i && g.current.focus();
  }, [i]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (C, E) => {
      const h = !g.current.style.width;
      if (C.clientHeight < g.current.clientHeight && h) {
        const P = `${Ya(Qe(C))}px`;
        g.current.style[E.direction === "rtl" ? "paddingLeft" : "paddingRight"] = P, g.current.style.width = `calc(100% + ${P})`;
      }
      return g.current;
    }
  }), []);
  const m = (C) => {
    const E = g.current, h = C.key, P = Qe(E).activeElement;
    if (h === "ArrowDown")
      C.preventDefault(), zn(E, P, u, l, Fo);
    else if (h === "ArrowUp")
      C.preventDefault(), zn(E, P, u, l, $a);
    else if (h === "Home")
      C.preventDefault(), zn(E, null, u, l, Fo);
    else if (h === "End")
      C.preventDefault(), zn(E, null, u, l, $a);
    else if (h.length === 1) {
      const O = y.current, V = h.toLowerCase(), L = performance.now();
      O.keys.length > 0 && (L - O.lastTime > 500 ? (O.keys = [], O.repeating = !0, O.previousKeyMatched = !0) : O.repeating && V !== O.keys[0] && (O.repeating = !1)), O.lastTime = L, O.keys.push(V);
      const _ = P && !O.repeating && nl(P, O);
      O.previousKeyMatched && (_ || zn(E, P, !1, l, Fo, O)) ? C.preventDefault() : O.previousKeyMatched = !1;
    }
    d && d(C);
  }, f = Ye(g, n);
  let w = -1;
  b.Children.forEach(a, (C, E) => {
    if (!/* @__PURE__ */ b.isValidElement(C)) {
      w === E && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Zr.isFragment(C) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), C.props.disabled || (p === "selectedMenu" && C.props.selected || w === -1) && (w = E), w === E && (C.props.disabled || C.props.muiSkipListHighlight || C.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const R = b.Children.map(a, (C, E) => {
    if (E === w) {
      const h = {};
      return s && (h.autoFocus = !0), C.props.tabIndex === void 0 && p === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ b.cloneElement(C, h);
    }
    return C;
  });
  return /* @__PURE__ */ I.jsx(Jc, T({
    role: "menu",
    ref: f,
    className: c,
    onKeyDown: m,
    tabIndex: i ? 0 : -1
  }, v, {
    children: R
  }));
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: o.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const Ly = rl;
function Fy(e) {
  return $e("MuiPopover", e);
}
Ne("MuiPopover", ["root", "paper"]);
const Vy = ["onEntering"], By = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], zy = ["slotProps"];
function _a(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Na(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ia(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Fr(e) {
  return typeof e == "function" ? e() : e;
}
const Uy = (e) => {
  const {
    classes: t
  } = e;
  return Me({
    root: ["root"],
    paper: ["paper"]
  }, Fy, t);
}, Wy = ce(Vv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ol = ce(sv, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), il = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = Ie({
    props: t,
    name: "MuiPopover"
  }), {
    action: c,
    anchorEl: l,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: p = "anchorEl",
    children: v,
    className: g,
    container: y,
    elevation: m = 8,
    marginThreshold: f = 16,
    open: w,
    PaperProps: R = {},
    slots: C,
    slotProps: E,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = li,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: V
    } = {},
    disableScrollLock: L = !1
  } = a, _ = oe(a.TransitionProps, Vy), z = oe(a, By), W = (r = E == null ? void 0 : E.paper) != null ? r : R, B = b.useRef(), M = Ye(B, W.ref), A = T({}, a, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: m,
    marginThreshold: f,
    externalPaperSlotProps: W,
    transformOrigin: h,
    TransitionComponent: P,
    transitionDuration: O,
    TransitionProps: _
  }), k = Uy(A), U = b.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ne = Fr(l), S = ne && ne.nodeType === 1 ? ne : Qe(B.current).body, ae = S.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const he = S.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && he.top === 0 && he.left === 0 && he.right === 0 && he.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ae.top + _a(ae, u.vertical),
      left: ae.left + Na(ae, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, d, p]), G = b.useCallback((ne) => ({
    vertical: _a(ne, h.vertical),
    horizontal: Na(ne, h.horizontal)
  }), [h.horizontal, h.vertical]), ee = b.useCallback((ne) => {
    const S = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, ae = G(S);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ia(ae)
      };
    const he = U();
    let De = he.top - ae.vertical, _e = he.left - ae.horizontal;
    const et = De + S.height, Be = _e + S.width, Xe = gn(Fr(l)), We = Xe.innerHeight - f, st = Xe.innerWidth - f;
    if (f !== null && De < f) {
      const Pe = De - f;
      De -= Pe, ae.vertical += Pe;
    } else if (f !== null && et > We) {
      const Pe = et - We;
      De -= Pe, ae.vertical += Pe;
    }
    if (process.env.NODE_ENV !== "production" && S.height > We && S.height && We && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${S.height - We}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), f !== null && _e < f) {
      const Pe = _e - f;
      _e -= Pe, ae.horizontal += Pe;
    } else if (Be > st) {
      const Pe = Be - st;
      _e -= Pe, ae.horizontal += Pe;
    }
    return {
      top: `${Math.round(De)}px`,
      left: `${Math.round(_e)}px`,
      transformOrigin: Ia(ae)
    };
  }, [l, p, U, G, f]), [N, F] = b.useState(w), X = b.useCallback(() => {
    const ne = B.current;
    if (!ne)
      return;
    const S = ee(ne);
    S.top !== null && (ne.style.top = S.top), S.left !== null && (ne.style.left = S.left), ne.style.transformOrigin = S.transformOrigin, F(!0);
  }, [ee]);
  b.useEffect(() => (L && window.addEventListener("scroll", X), () => window.removeEventListener("scroll", X)), [l, L, X]);
  const te = (ne, S) => {
    V && V(ne, S), X();
  }, q = () => {
    F(!1);
  };
  b.useEffect(() => {
    w && X();
  }), b.useImperativeHandle(c, () => w ? {
    updatePosition: () => {
      X();
    }
  } : null, [w, X]), b.useEffect(() => {
    if (!w)
      return;
    const ne = Ua(() => {
      X();
    }), S = gn(l);
    return S.addEventListener("resize", ne), () => {
      ne.clear(), S.removeEventListener("resize", ne);
    };
  }, [l, w, X]);
  let K = O;
  O === "auto" && !P.muiSupportAuto && (K = void 0);
  const J = y || (l ? Qe(Fr(l)).body : void 0), Q = (i = C == null ? void 0 : C.root) != null ? i : Wy, j = (s = C == null ? void 0 : C.paper) != null ? s : ol, Y = Vt({
    elementType: j,
    externalSlotProps: T({}, W, {
      style: N ? W.style : T({}, W.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: m,
      ref: M
    },
    ownerState: A,
    className: se(k.paper, W == null ? void 0 : W.className)
  }), Z = Vt({
    elementType: Q,
    externalSlotProps: (E == null ? void 0 : E.root) || {},
    externalForwardedProps: z,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: J,
      open: w
    },
    ownerState: A,
    className: se(k.root, g)
  }), {
    slotProps: ue
  } = Z, $ = oe(Z, zy);
  return /* @__PURE__ */ I.jsx(Q, T({}, $, !Br(Q) && {
    slotProps: ue,
    disableScrollLock: L
  }, {
    children: /* @__PURE__ */ I.jsx(P, T({
      appear: !0,
      in: w,
      onEntering: te,
      onExited: q,
      timeout: K
    }, _, {
      children: /* @__PURE__ */ I.jsx(j, T({}, Y, {
        children: v
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Qr,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Bt(o.oneOfType([_t, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Fr(e.anchorEl);
      if (t && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: o.shape({
    left: o.number.isRequired,
    top: o.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: o.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: o.oneOfType([_t, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Kn,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: o.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: o.shape({
    component: fi
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: o.shape({
    horizontal: o.oneOfType([o.oneOf(["center", "left", "right"]), o.number]).isRequired,
    vertical: o.oneOfType([o.oneOf(["bottom", "center", "top"]), o.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object
});
const Yy = il;
function qy(e) {
  return $e("MuiMenu", e);
}
Ne("MuiMenu", ["root", "paper", "list"]);
const Hy = ["onEntering"], Gy = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Ky = {
  vertical: "top",
  horizontal: "right"
}, Xy = {
  vertical: "top",
  horizontal: "left"
}, Jy = (e) => {
  const {
    classes: t
  } = e;
  return Me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, qy, t);
}, Zy = ce(Yy, {
  shouldForwardProp: (e) => $n(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Qy = ce(ol, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), eg = ce(Ly, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), sl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i;
  const s = Ie({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: c,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: v,
    PaperProps: g = {},
    PopoverClasses: y,
    transitionDuration: m = "auto",
    TransitionProps: {
      onEntering: f
    } = {},
    variant: w = "selectedMenu",
    slots: R = {},
    slotProps: C = {}
  } = s, E = oe(s.TransitionProps, Hy), h = oe(s, Gy), P = en(), O = P.direction === "rtl", V = T({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: f,
    PaperProps: g,
    transitionDuration: m,
    TransitionProps: E,
    variant: w
  }), L = Jy(V), _ = a && !u && v, z = b.useRef(null), W = (ee, N) => {
    z.current && z.current.adjustStyleForScrollbar(ee, P), f && f(ee, N);
  }, B = (ee) => {
    ee.key === "Tab" && (ee.preventDefault(), p && p(ee, "tabKeyDown"));
  };
  let M = -1;
  b.Children.map(c, (ee, N) => {
    /* @__PURE__ */ b.isValidElement(ee) && (process.env.NODE_ENV !== "production" && Zr.isFragment(ee) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ee.props.disabled || (w === "selectedMenu" && ee.props.selected || M === -1) && (M = N));
  });
  const A = (r = R.paper) != null ? r : Qy, k = (i = C.paper) != null ? i : g, U = Vt({
    elementType: R.root,
    externalSlotProps: C.root,
    ownerState: V,
    className: [L.root, l]
  }), G = Vt({
    elementType: A,
    externalSlotProps: k,
    ownerState: V,
    className: L.paper
  });
  return /* @__PURE__ */ I.jsx(Zy, T({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? Ky : Xy,
    slots: {
      paper: A,
      root: R.root
    },
    slotProps: {
      root: U,
      paper: G
    },
    open: v,
    ref: n,
    transitionDuration: m,
    TransitionProps: T({
      onEntering: W
    }, E),
    ownerState: V
  }, h, {
    classes: y,
    children: /* @__PURE__ */ I.jsx(eg, T({
      onKeyDown: B,
      actions: z,
      autoFocus: a && (M === -1 || u),
      autoFocusItem: _,
      variant: w
    }, d, {
      className: se(L.list, d.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (sl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([_t, o.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: o.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: o.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: o.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: o.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: o.shape({
    paper: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: o.shape({
    paper: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: o.oneOfType([o.oneOf(["auto"]), o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: o.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: o.oneOf(["menu", "selectedMenu"])
});
const tg = sl;
function ng(e) {
  return $e("MuiMenuItem", e);
}
const rg = Ne("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Un = rg, og = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ig = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, sg = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = Me({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, ng, a);
  return T({}, a, l);
}, ag = ce(_n, {
  shouldForwardProp: (e) => $n(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ig
})(({
  theme: e,
  ownerState: t
}) => T({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Un.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Un.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Un.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ve(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Un.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Un.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Ra.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Ra.inset}`]: {
    marginLeft: 52
  },
  [`& .${Jr.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Jr.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Pa.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && T({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${Pa.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), al = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: i = !1,
    component: s = "li",
    dense: a = !1,
    divider: c = !1,
    disableGutters: l = !1,
    focusVisibleClassName: u,
    role: d = "menuitem",
    tabIndex: p,
    className: v
  } = r, g = oe(r, og), y = b.useContext(gt), m = b.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), f = b.useRef(null);
  wt(() => {
    i && (f.current ? f.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const w = T({}, r, {
    dense: m.dense,
    divider: c,
    disableGutters: l
  }), R = sg(r), C = Ye(f, n);
  let E;
  return r.disabled || (E = p !== void 0 ? p : -1), /* @__PURE__ */ I.jsx(gt.Provider, {
    value: m,
    children: /* @__PURE__ */ I.jsx(ag, T({
      ref: C,
      role: d,
      tabIndex: E,
      component: s,
      focusVisibleClassName: se(R.focusVisible, u),
      className: se(R.root, v)
    }, g, {
      ownerState: w,
      classes: R
    }))
  });
});
process.env.NODE_ENV !== "production" && (al.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const cg = al, lg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ug = {
  entering: {
    transform: "none"
  },
  entered: {
    transform: "none"
  }
}, cl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = en(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: v,
    onExit: g,
    onExited: y,
    onExiting: m,
    style: f,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = zi
  } = t, C = oe(t, lg), E = b.useRef(null), h = Ye(E, c.ref, n), P = (M) => (A) => {
    if (M) {
      const k = E.current;
      A === void 0 ? M(k) : M(k, A);
    }
  }, O = P(v), V = P((M, A) => {
    Yi(M);
    const k = On({
      style: f,
      timeout: w,
      easing: l
    }, {
      mode: "enter"
    });
    M.style.webkitTransition = r.transitions.create("transform", k), M.style.transition = r.transitions.create("transform", k), d && d(M, A);
  }), L = P(p), _ = P(m), z = P((M) => {
    const A = On({
      style: f,
      timeout: w,
      easing: l
    }, {
      mode: "exit"
    });
    M.style.webkitTransition = r.transitions.create("transform", A), M.style.transition = r.transitions.create("transform", A), g && g(M);
  }), W = P(y), B = (M) => {
    s && s(E.current, M);
  };
  return /* @__PURE__ */ I.jsx(R, T({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: V,
    onEntered: L,
    onEntering: O,
    onExit: z,
    onExited: W,
    onExiting: _,
    addEndListener: B,
    timeout: w
  }, C, {
    children: (M, A) => /* @__PURE__ */ b.cloneElement(c, T({
      style: T({
        transform: "scale(0)",
        visibility: M === "exited" && !u ? "hidden" : void 0
      }, ug[M], f, c.props.style),
      ref: h
    }, A))
  }));
});
process.env.NODE_ENV !== "production" && (cl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: o.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: o.bool,
  /**
   * A single child content element.
   */
  children: Rn.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: o.oneOfType([o.shape({
    enter: o.string,
    exit: o.string
  }), o.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: o.bool,
  /**
   * @ignore
   */
  onEnter: o.func,
  /**
   * @ignore
   */
  onEntered: o.func,
  /**
   * @ignore
   */
  onEntering: o.func,
  /**
   * @ignore
   */
  onExit: o.func,
  /**
   * @ignore
   */
  onExited: o.func,
  /**
   * @ignore
   */
  onExiting: o.func,
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })])
});
const dg = cl;
function fg(e) {
  return $e("MuiSpeedDial", e);
}
const pg = Ne("MuiSpeedDial", ["root", "fab", "directionUp", "directionDown", "directionLeft", "directionRight", "actions", "actionsClosed"]), Sr = pg, mg = ["ref"], hg = ["ariaLabel", "FabProps", "children", "className", "direction", "hidden", "icon", "onBlur", "onClose", "onFocus", "onKeyDown", "onMouseEnter", "onMouseLeave", "onOpen", "open", "openIcon", "TransitionComponent", "transitionDuration", "TransitionProps"], vg = ["ref"], yg = (e) => {
  const {
    classes: t,
    open: n,
    direction: r
  } = e, i = {
    root: ["root", `direction${pe(r)}`],
    fab: ["fab"],
    actions: ["actions", !n && "actionsClosed"]
  };
  return Me(i, fg, t);
};
function Wn(e) {
  if (e === "up" || e === "down")
    return "vertical";
  if (e === "right" || e === "left")
    return "horizontal";
}
function gg(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
const At = 32, Pr = 16, bg = ce("div", {
  name: "MuiSpeedDial",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`direction${pe(n.direction)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  zIndex: (e.vars || e).zIndex.speedDial,
  display: "flex",
  alignItems: "center",
  pointerEvents: "none"
}, t.direction === "up" && {
  flexDirection: "column-reverse",
  [`& .${Sr.actions}`]: {
    flexDirection: "column-reverse",
    marginBottom: -At,
    paddingBottom: Pr + At
  }
}, t.direction === "down" && {
  flexDirection: "column",
  [`& .${Sr.actions}`]: {
    flexDirection: "column",
    marginTop: -At,
    paddingTop: Pr + At
  }
}, t.direction === "left" && {
  flexDirection: "row-reverse",
  [`& .${Sr.actions}`]: {
    flexDirection: "row-reverse",
    marginRight: -At,
    paddingRight: Pr + At
  }
}, t.direction === "right" && {
  flexDirection: "row",
  [`& .${Sr.actions}`]: {
    flexDirection: "row",
    marginLeft: -At,
    paddingLeft: Pr + At
  }
})), xg = ce(Gc, {
  name: "MuiSpeedDial",
  slot: "Fab",
  overridesResolver: (e, t) => t.fab
})(() => ({
  pointerEvents: "auto"
})), Eg = ce("div", {
  name: "MuiSpeedDial",
  slot: "Actions",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.actions, !n.open && t.actionsClosed];
  }
})(({
  ownerState: e
}) => T({
  display: "flex",
  pointerEvents: "auto"
}, !e.open && {
  transition: "top 0s linear 0.2s",
  pointerEvents: "none"
})), ll = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiSpeedDial"
  }), i = en(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    ariaLabel: a,
    FabProps: {
      ref: c
    } = {},
    children: l,
    className: u,
    direction: d = "up",
    hidden: p = !1,
    icon: v,
    onBlur: g,
    onClose: y,
    onFocus: m,
    onKeyDown: f,
    onMouseEnter: w,
    onMouseLeave: R,
    onOpen: C,
    open: E,
    TransitionComponent: h = dg,
    transitionDuration: P = s,
    TransitionProps: O
  } = r, V = oe(r.FabProps, mg), L = oe(r, hg), [_, z] = pi({
    controlled: E,
    default: !1,
    name: "SpeedDial",
    state: "open"
  }), W = T({}, r, {
    open: _,
    direction: d
  }), B = yg(W), M = b.useRef();
  b.useEffect(() => () => {
    clearTimeout(M.current);
  }, []);
  const A = b.useRef(0), k = b.useRef(), U = b.useRef([]);
  U.current = [U.current[0]];
  const G = b.useCallback((j) => {
    U.current[0] = j;
  }, []), ee = Ye(c, G), N = (j, Y) => (Z) => {
    U.current[j + 1] = Z, Y && Y(Z);
  }, F = (j) => {
    f && f(j);
    const Y = j.key.replace("Arrow", "").toLowerCase(), {
      current: Z = Y
    } = k;
    if (j.key === "Escape") {
      z(!1), U.current[0].focus(), y && y(j, "escapeKeyDown");
      return;
    }
    if (Wn(Y) === Wn(Z) && Wn(Y) !== void 0) {
      j.preventDefault();
      const ue = Y === Z ? 1 : -1, $ = gg(A.current + ue, 0, U.current.length - 1);
      U.current[$].focus(), A.current = $, k.current = Z;
    }
  };
  b.useEffect(() => {
    _ || (A.current = 0, k.current = void 0);
  }, [_]);
  const X = (j) => {
    j.type === "mouseleave" && R && R(j), j.type === "blur" && g && g(j), clearTimeout(M.current), j.type === "blur" ? M.current = setTimeout(() => {
      z(!1), y && y(j, "blur");
    }) : (z(!1), y && y(j, "mouseLeave"));
  }, te = (j) => {
    V.onClick && V.onClick(j), clearTimeout(M.current), _ ? (z(!1), y && y(j, "toggle")) : (z(!0), C && C(j, "toggle"));
  }, q = (j) => {
    j.type === "mouseenter" && w && w(j), j.type === "focus" && m && m(j), clearTimeout(M.current), _ || (M.current = setTimeout(() => {
      z(!0), C && C(j, {
        focus: "focus",
        mouseenter: "mouseEnter"
      }[j.type]);
    }));
  }, K = a.replace(/^[^a-z]+|[^\w:.-]+/gi, ""), J = b.Children.toArray(l).filter((j) => (process.env.NODE_ENV !== "production" && Zr.isFragment(j) && console.error(["MUI: The SpeedDial component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ b.isValidElement(j))), Q = J.map((j, Y) => {
    const Z = j.props, {
      FabProps: {
        ref: ue
      } = {},
      tooltipPlacement: $
    } = Z, ne = oe(Z.FabProps, vg), S = $ || (Wn(d) === "vertical" ? "left" : "top");
    return /* @__PURE__ */ b.cloneElement(j, {
      FabProps: T({}, ne, {
        ref: N(Y, ue)
      }),
      delay: 30 * (_ ? Y : J.length - Y),
      open: _,
      tooltipPlacement: S,
      id: `${K}-action-${Y}`
    });
  });
  return /* @__PURE__ */ I.jsxs(bg, T({
    className: se(B.root, u),
    ref: n,
    role: "presentation",
    onKeyDown: F,
    onBlur: X,
    onFocus: q,
    onMouseEnter: q,
    onMouseLeave: X,
    ownerState: W
  }, L, {
    children: [/* @__PURE__ */ I.jsx(h, T({
      in: !p,
      timeout: P,
      unmountOnExit: !0
    }, O, {
      children: /* @__PURE__ */ I.jsx(xg, T({
        color: "primary",
        "aria-label": a,
        "aria-haspopup": "true",
        "aria-expanded": _,
        "aria-controls": `${K}-actions`
      }, V, {
        onClick: te,
        className: se(B.fab, V.className),
        ref: ee,
        ownerState: W,
        children: /* @__PURE__ */ b.isValidElement(v) && eo(v, ["SpeedDialIcon"]) ? /* @__PURE__ */ b.cloneElement(v, {
          open: _
        }) : v
      }))
    })), /* @__PURE__ */ I.jsx(Eg, {
      id: `${K}-actions`,
      role: "menu",
      "aria-orientation": Wn(d),
      className: se(B.actions, !_ && B.actionsClosed),
      ownerState: W,
      children: Q
    })]
  }));
});
process.env.NODE_ENV !== "production" && (ll.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The aria-label of the button element.
   * Also used to provide the `id` for the `SpeedDial` element and its children.
   */
  ariaLabel: o.string.isRequired,
  /**
   * SpeedDialActions to display when the SpeedDial is `open`.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The direction the actions open relative to the floating action button.
   * @default 'up'
   */
  direction: o.oneOf(["down", "left", "right", "up"]),
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) element.
   * @default {}
   */
  FabProps: o.object,
  /**
   * If `true`, the SpeedDial is hidden.
   * @default false
   */
  hidden: o.bool,
  /**
   * The icon to display in the SpeedDial Fab. The `SpeedDialIcon` component
   * provides a default Icon with animation.
   */
  icon: o.node,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"blur"`, `"mouseLeave"`, `"escapeKeyDown"`.
   */
  onClose: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * @ignore
   */
  onMouseEnter: o.func,
  /**
   * @ignore
   */
  onMouseLeave: o.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggle"`, `"focus"`, `"mouseEnter"`.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * The icon to display in the SpeedDial Fab when the SpeedDial is open.
   */
  openIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Zoom
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const Tg = ll;
function Cg(e) {
  return $e("MuiTooltip", e);
}
const wg = Ne("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Ft = wg, Og = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Rg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Sg = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${pe(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Me(a, Cg, t);
}, Pg = ce(Ac, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(({
  theme: e,
  ownerState: t,
  open: n
}) => T({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Ft.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Ft.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Ft.arrow}`]: T({}, t.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${Ft.arrow}`]: T({}, t.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), $g = ce("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${pe(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ve(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
  position: "relative",
  margin: 0
}, t.touch && {
  padding: "8px 16px",
  fontSize: e.typography.pxToRem(14),
  lineHeight: `${Rg(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Ft.popper}[data-popper-placement*="left"] &`]: T({
    transformOrigin: "right center"
  }, t.isRtl ? T({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : T({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Ft.popper}[data-popper-placement*="right"] &`]: T({
    transformOrigin: "left center"
  }, t.isRtl ? T({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : T({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Ft.popper}[data-popper-placement*="top"] &`]: T({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Ft.popper}[data-popper-placement*="bottom"] &`]: T({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), _g = ce("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : Ve(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let $r = !1, Vo = null, Yn = {
  x: 0,
  y: 0
};
function _r(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const ul = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, c, l, u, d, p, v, g, y, m, f, w, R, C, E, h;
  const P = Ie({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: O = !1,
    children: V,
    components: L = {},
    componentsProps: _ = {},
    describeChild: z = !1,
    disableFocusListener: W = !1,
    disableHoverListener: B = !1,
    disableInteractive: M = !1,
    disableTouchListener: A = !1,
    enterDelay: k = 100,
    enterNextDelay: U = 0,
    enterTouchDelay: G = 700,
    followCursor: ee = !1,
    id: N,
    leaveDelay: F = 0,
    leaveTouchDelay: X = 1500,
    onClose: te,
    onOpen: q,
    open: K,
    placement: J = "bottom",
    PopperComponent: Q,
    PopperProps: j = {},
    slotProps: Y = {},
    slots: Z = {},
    title: ue,
    TransitionComponent: $ = li,
    TransitionProps: ne
  } = P, S = oe(P, Og), ae = /* @__PURE__ */ b.isValidElement(V) ? V : /* @__PURE__ */ I.jsx("span", {
    children: V
  }), he = en(), De = he.direction === "rtl", [_e, et] = b.useState(), [Be, Xe] = b.useState(null), We = b.useRef(!1), st = M || ee, Pe = b.useRef(), Ge = b.useRef(), Je = b.useRef(), tt = b.useRef(), [kt, le] = pi({
    controlled: K,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Ze = kt;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = b.useRef(K !== void 0);
    b.useEffect(() => {
      _e && _e.disabled && !re && ue !== "" && _e.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [ue, _e, re]);
  }
  const Rt = Wa(N), bt = b.useRef(), Wt = b.useCallback(() => {
    bt.current !== void 0 && (document.body.style.WebkitUserSelect = bt.current, bt.current = void 0), clearTimeout(tt.current);
  }, []);
  b.useEffect(() => () => {
    clearTimeout(Pe.current), clearTimeout(Ge.current), clearTimeout(Je.current), Wt();
  }, [Wt]);
  const pr = (re) => {
    clearTimeout(Vo), $r = !0, le(!0), q && !Ze && q(re);
  }, tn = Lt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      clearTimeout(Vo), Vo = setTimeout(() => {
        $r = !1;
      }, 800 + F), le(!1), te && Ze && te(re), clearTimeout(Pe.current), Pe.current = setTimeout(() => {
        We.current = !1;
      }, he.transitions.duration.shortest);
    }
  ), Nn = (re) => {
    We.current && re.type !== "touchstart" || (_e && _e.removeAttribute("title"), clearTimeout(Ge.current), clearTimeout(Je.current), k || $r && U ? Ge.current = setTimeout(() => {
      pr(re);
    }, $r ? U : k) : pr(re));
  }, mr = (re) => {
    clearTimeout(Ge.current), clearTimeout(Je.current), Je.current = setTimeout(() => {
      tn(re);
    }, F);
  }, {
    isFocusVisibleRef: hr,
    onBlur: In,
    onFocus: vr,
    ref: jt
  } = mi(), [, nn] = b.useState(!1), rn = (re) => {
    In(re), hr.current === !1 && (nn(!1), mr(re));
  }, Mn = (re) => {
    _e || et(re.currentTarget), vr(re), hr.current === !0 && (nn(!0), Nn(re));
  }, yr = (re) => {
    We.current = !0;
    const ze = ae.props;
    ze.onTouchStart && ze.onTouchStart(re);
  }, kn = Nn, gr = mr, br = (re) => {
    yr(re), clearTimeout(Je.current), clearTimeout(Pe.current), Wt(), bt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", tt.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = bt.current, Nn(re);
    }, G);
  }, xr = (re) => {
    ae.props.onTouchEnd && ae.props.onTouchEnd(re), Wt(), clearTimeout(Je.current), Je.current = setTimeout(() => {
      tn(re);
    }, X);
  };
  b.useEffect(() => {
    if (!Ze)
      return;
    function re(ze) {
      (ze.key === "Escape" || ze.key === "Esc") && tn(ze);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [tn, Ze]);
  const So = Ye(ae.ref, jt, et, n);
  !ue && ue !== 0 && (Ze = !1);
  const jn = b.useRef(), Er = (re) => {
    const ze = ae.props;
    ze.onMouseMove && ze.onMouseMove(re), Yn = {
      x: re.clientX,
      y: re.clientY
    }, jn.current && jn.current.update();
  }, Yt = {}, Dn = typeof ue == "string";
  z ? (Yt.title = !Ze && Dn && !B ? ue : null, Yt["aria-describedby"] = Ze ? Rt : null) : (Yt["aria-label"] = Dn ? ue : null, Yt["aria-labelledby"] = Ze && !Dn ? Rt : null);
  const nt = T({}, Yt, S, ae.props, {
    className: se(S.className, ae.props.className),
    onTouchStart: yr,
    ref: So
  }, ee ? {
    onMouseMove: Er
  } : {});
  process.env.NODE_ENV !== "production" && (nt["data-mui-internal-clone-element"] = !0, b.useEffect(() => {
    _e && !_e.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [_e]));
  const qt = {};
  A || (nt.onTouchStart = br, nt.onTouchEnd = xr), B || (nt.onMouseOver = _r(kn, nt.onMouseOver), nt.onMouseLeave = _r(gr, nt.onMouseLeave), st || (qt.onMouseOver = kn, qt.onMouseLeave = gr)), W || (nt.onFocus = _r(Mn, nt.onFocus), nt.onBlur = _r(rn, nt.onBlur), st || (qt.onFocus = Mn, qt.onBlur = rn)), process.env.NODE_ENV !== "production" && ae.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${ae.props.title}\` or the Tooltip component.`].join(`
`));
  const x = b.useMemo(() => {
    var re;
    let ze = [{
      name: "arrow",
      enabled: !!Be,
      options: {
        element: Be,
        padding: 4
      }
    }];
    return (re = j.popperOptions) != null && re.modifiers && (ze = ze.concat(j.popperOptions.modifiers)), T({}, j.popperOptions, {
      modifiers: ze
    });
  }, [Be, j]), D = T({}, P, {
    isRtl: De,
    arrow: O,
    disableInteractive: st,
    placement: J,
    PopperComponentProp: Q,
    touch: We.current
  }), H = Sg(D), ie = (r = (i = Z.popper) != null ? i : L.Popper) != null ? r : Pg, me = (s = (a = (c = Z.transition) != null ? c : L.Transition) != null ? a : $) != null ? s : li, ge = (l = (u = Z.tooltip) != null ? u : L.Tooltip) != null ? l : $g, fe = (d = (p = Z.arrow) != null ? p : L.Arrow) != null ? d : _g, de = qn(ie, T({}, j, (v = Y.popper) != null ? v : _.popper, {
    className: se(H.popper, j == null ? void 0 : j.className, (g = (y = Y.popper) != null ? y : _.popper) == null ? void 0 : g.className)
  }), D), qe = qn(me, T({}, ne, (m = Y.transition) != null ? m : _.transition), D), je = qn(ge, T({}, (f = Y.tooltip) != null ? f : _.tooltip, {
    className: se(H.tooltip, (w = (R = Y.tooltip) != null ? R : _.tooltip) == null ? void 0 : w.className)
  }), D), Ae = qn(fe, T({}, (C = Y.arrow) != null ? C : _.arrow, {
    className: se(H.arrow, (E = (h = Y.arrow) != null ? h : _.arrow) == null ? void 0 : E.className)
  }), D);
  return /* @__PURE__ */ I.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.cloneElement(ae, nt), /* @__PURE__ */ I.jsx(ie, T({
      as: Q ?? Ac,
      placement: J,
      anchorEl: ee ? {
        getBoundingClientRect: () => ({
          top: Yn.y,
          left: Yn.x,
          right: Yn.x,
          bottom: Yn.y,
          width: 0,
          height: 0
        })
      } : _e,
      popperRef: jn,
      open: _e ? Ze : !1,
      id: Rt,
      transition: !0
    }, qt, de, {
      popperOptions: x,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ I.jsx(me, T({
        timeout: he.transitions.duration.shorter
      }, re, qe, {
        children: /* @__PURE__ */ I.jsxs(ge, T({}, je, {
          children: [ue, O ? /* @__PURE__ */ I.jsx(fe, T({}, Ae, {
            ref: Xe
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ul.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: o.bool,
  /**
   * Tooltip reference element.
   */
  children: Rn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Arrow: o.elementType,
    Popper: o.elementType,
    Tooltip: o.elementType,
    Transition: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: o.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: o.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: o.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: o.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: o.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: o.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: o.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: o.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: o.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: o.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: o.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: o.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    arrow: o.elementType,
    popper: o.elementType,
    tooltip: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: o.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const Ng = ul;
function Ig(e) {
  return $e("MuiSpeedDialAction", e);
}
const Mg = Ne("MuiSpeedDialAction", ["fab", "fabClosed", "staticTooltip", "staticTooltipClosed", "staticTooltipLabel", "tooltipPlacementLeft", "tooltipPlacementRight"]), kg = Mg, jg = ["className", "delay", "FabProps", "icon", "id", "open", "TooltipClasses", "tooltipOpen", "tooltipPlacement", "tooltipTitle"], Dg = (e) => {
  const {
    open: t,
    tooltipPlacement: n,
    classes: r
  } = e, i = {
    fab: ["fab", !t && "fabClosed"],
    staticTooltip: ["staticTooltip", `tooltipPlacement${pe(n)}`, !t && "staticTooltipClosed"],
    staticTooltipLabel: ["staticTooltipLabel"]
  };
  return Me(i, Ig, r);
}, Ag = ce(Gc, {
  name: "MuiSpeedDialAction",
  slot: "Fab",
  skipVariantsResolver: !1,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.fab, !n.open && t.fabClosed];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  margin: 8,
  color: (e.vars || e).palette.text.secondary,
  backgroundColor: (e.vars || e).palette.background.paper,
  "&:hover": {
    backgroundColor: e.vars ? e.vars.palette.SpeedDialAction.fabHoverBg : oi(e.palette.background.paper, 0.15)
  },
  transition: `${e.transitions.create("transform", {
    duration: e.transitions.duration.shorter
  })}, opacity 0.8s`,
  opacity: 1
}, !t.open && {
  opacity: 0,
  transform: "scale(0)"
})), Lg = ce("span", {
  name: "MuiSpeedDialAction",
  slot: "StaticTooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.staticTooltip, !n.open && t.staticTooltipClosed, t[`tooltipPlacement${pe(n.tooltipPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  [`& .${kg.staticTooltipLabel}`]: T({
    transition: e.transitions.create(["transform", "opacity"], {
      duration: e.transitions.duration.shorter
    }),
    opacity: 1
  }, !t.open && {
    opacity: 0,
    transform: "scale(0.5)"
  }, t.tooltipPlacement === "left" && {
    transformOrigin: "100% 50%",
    right: "100%",
    marginRight: 8
  }, t.tooltipPlacement === "right" && {
    transformOrigin: "0% 50%",
    left: "100%",
    marginLeft: 8
  })
})), Fg = ce("span", {
  name: "MuiSpeedDialAction",
  slot: "StaticTooltipLabel",
  overridesResolver: (e, t) => t.staticTooltipLabel
})(({
  theme: e
}) => T({
  position: "absolute"
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.paper,
  borderRadius: (e.vars || e).shape.borderRadius,
  boxShadow: (e.vars || e).shadows[1],
  color: (e.vars || e).palette.text.secondary,
  padding: "4px 16px",
  wordBreak: "keep-all"
})), dl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiSpeedDialAction"
  }), {
    className: i,
    delay: s = 0,
    FabProps: a = {},
    icon: c,
    id: l,
    open: u,
    TooltipClasses: d,
    tooltipOpen: p = !1,
    tooltipPlacement: v = "left",
    tooltipTitle: g
  } = r, y = oe(r, jg), m = T({}, r, {
    tooltipPlacement: v
  }), f = Dg(m), [w, R] = b.useState(p), C = () => {
    R(!1);
  }, E = () => {
    R(!0);
  }, h = {
    transitionDelay: `${s}ms`
  }, P = /* @__PURE__ */ I.jsx(Ag, T({
    size: "small",
    className: se(f.fab, i),
    tabIndex: -1,
    role: "menuitem",
    ownerState: m
  }, a, {
    style: T({}, h, a.style),
    children: c
  }));
  return p ? /* @__PURE__ */ I.jsxs(Lg, T({
    id: l,
    ref: n,
    className: f.staticTooltip,
    ownerState: m
  }, y, {
    children: [/* @__PURE__ */ I.jsx(Fg, {
      style: h,
      id: `${l}-label`,
      className: f.staticTooltipLabel,
      ownerState: m,
      children: g
    }), /* @__PURE__ */ b.cloneElement(P, {
      "aria-labelledby": `${l}-label`
    })]
  })) : (!u && w && R(!1), /* @__PURE__ */ I.jsx(Ng, T({
    id: l,
    ref: n,
    title: g,
    placement: v,
    onClose: C,
    onOpen: E,
    open: u && w,
    classes: d
  }, y, {
    children: P
  })));
});
process.env.NODE_ENV !== "production" && (dl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * Adds a transition delay, to allow a series of SpeedDialActions to be animated.
   * @default 0
   */
  delay: o.number,
  /**
   * Props applied to the [`Fab`](/material-ui/api/fab/) component.
   * @default {}
   */
  FabProps: o.object,
  /**
   * The icon to display in the SpeedDial Fab.
   */
  icon: o.node,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: o.string,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * `classes` prop applied to the [`Tooltip`](/material-ui/api/tooltip/) element.
   */
  TooltipClasses: o.object,
  /**
   * Make the tooltip always visible when the SpeedDial is open.
   * @default false
   */
  tooltipOpen: o.bool,
  /**
   * Placement of the tooltip.
   * @default 'left'
   */
  tooltipPlacement: o.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Label to display in the tooltip.
   */
  tooltipTitle: o.node
});
const Vg = dl, Bg = Bi(/* @__PURE__ */ I.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
function zg(e) {
  return $e("MuiSpeedDialIcon", e);
}
const Ug = Ne("MuiSpeedDialIcon", ["root", "icon", "iconOpen", "iconWithOpenIconOpen", "openIcon", "openIconOpen"]), Ht = Ug, Wg = ["className", "icon", "open", "openIcon"], Yg = (e) => {
  const {
    classes: t,
    open: n,
    openIcon: r
  } = e;
  return Me({
    root: ["root"],
    icon: ["icon", n && "iconOpen", r && n && "iconWithOpenIconOpen"],
    openIcon: ["openIcon", n && "openIconOpen"]
  }, zg, t);
}, qg = ce("span", {
  name: "MuiSpeedDialIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ht.icon}`]: t.icon
    }, {
      [`& .${Ht.icon}`]: n.open && t.iconOpen
    }, {
      [`& .${Ht.icon}`]: n.open && n.openIcon && t.iconWithOpenIconOpen
    }, {
      [`& .${Ht.openIcon}`]: t.openIcon
    }, {
      [`& .${Ht.openIcon}`]: n.open && t.openIconOpen
    }, t.root];
  }
})(({
  theme: e,
  ownerState: t
}) => ({
  height: 24,
  [`& .${Ht.icon}`]: T({
    transition: e.transitions.create(["transform", "opacity"], {
      duration: e.transitions.duration.short
    })
  }, t.open && T({
    transform: "rotate(45deg)"
  }, t.openIcon && {
    opacity: 0
  })),
  [`& .${Ht.openIcon}`]: T({
    position: "absolute",
    transition: e.transitions.create(["transform", "opacity"], {
      duration: e.transitions.duration.short
    }),
    opacity: 0,
    transform: "rotate(-45deg)"
  }, t.open && {
    transform: "rotate(0deg)",
    opacity: 1
  })
})), Ki = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Ie({
    props: t,
    name: "MuiSpeedDialIcon"
  }), {
    className: i,
    icon: s,
    openIcon: a
  } = r, c = oe(r, Wg), l = r, u = Yg(l);
  function d(p, v) {
    return /* @__PURE__ */ b.isValidElement(p) ? /* @__PURE__ */ b.cloneElement(p, {
      className: v
    }) : p;
  }
  return /* @__PURE__ */ I.jsxs(qg, T({
    className: se(u.root, i),
    ref: n,
    ownerState: l
  }, c, {
    children: [a ? d(a, u.openIcon) : null, s ? d(s, u.icon) : /* @__PURE__ */ I.jsx(Bg, {
      className: u.icon
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ki.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display.
   */
  icon: o.node,
  /**
   * @ignore
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * The icon to display in the SpeedDial Floating Action Button when the SpeedDial is open.
   */
  openIcon: o.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
Ki.muiName = "SpeedDialIcon";
const Hg = Ki;
var Xi = {}, fl = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(fl);
var pl = fl.exports, Bo = {};
const Gg = /* @__PURE__ */ Tl(tv);
var Ma;
function ml() {
  return Ma || (Ma = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Gg;
  }(Bo)), Bo;
}
var Kg = pl;
Object.defineProperty(Xi, "__esModule", {
  value: !0
});
var Ji = Xi.default = void 0, Xg = Kg(ml()), Jg = I, Zg = (0, Xg.default)(/* @__PURE__ */ (0, Jg.jsx)("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
}), "Folder");
Ji = Xi.default = Zg;
var Zi = {}, Qg = pl;
Object.defineProperty(Zi, "__esModule", {
  value: !0
});
var Qi = Zi.default = void 0, eb = Qg(ml()), tb = I, nb = (0, eb.default)(/* @__PURE__ */ (0, tb.jsx)("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
}), "InsertDriveFile");
Qi = Zi.default = nb;
function ui() {
  try {
    Object.defineProperty(Date.prototype, "YYYYMMDDHHMMSS", {
      // https://stackoverflow.com/a/19449076/7037749
      value: function() {
        function t(n) {
          return (n < 10 ? "0" : "") + n;
        }
        return this.getFullYear() + t(this.getMonth() + 1) + t(this.getDate()) + t(this.getHours()) + t(this.getMinutes()) + t(this.getSeconds());
      }
    });
  } catch {
  }
  return (/* @__PURE__ */ new Date()).YYYYMMDDHHMMSS();
}
function rb({ children: e, items: t }) {
  const [n, r] = Pt(null), i = (a) => {
    a.preventDefault(), r(
      n === null ? {
        mouseX: a.clientX,
        mouseY: a.clientY
      } : (
        // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
        // Other native context menus might behave different.
        // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
        null
      )
    );
  }, s = () => {
    r(null);
  };
  return /* @__PURE__ */ I.jsx(I.Fragment, { children: /* @__PURE__ */ I.jsxs("div", { onContextMenu: i, style: { cursor: "context-menu" }, children: [
    e,
    /* @__PURE__ */ I.jsx(
      tg,
      {
        open: n !== null,
        onClose: s,
        anchorReference: "anchorPosition",
        anchorPosition: n !== null ? { top: n.mouseY, left: n.mouseX } : void 0,
        children: t.map((a) => /* @__PURE__ */ I.jsx(
          cg,
          {
            onClick: (c) => {
              s(), a.handler(c);
            },
            children: a.name
          },
          crypto.randomUUID()
        ))
      }
    )
  ] }) });
}
function hl({ children: e, onDropHandler: t }) {
  return /* @__PURE__ */ I.jsx(
    "div",
    {
      onDrop: t,
      onDragOver: (n) => {
        n.preventDefault();
      },
      children: e
    }
  );
}
function ob({ entryHandle: e }) {
  const { currentFolderHandle: t, onFileClick: n, showFolderView: r, setIsLoading: i } = vn(Co), { setEntryOnDrag: s, handleDrop: a } = vn(es), c = [
    {
      name: "rename",
      handler: async (v) => {
        console.log("ContentEntry rename handler called", v);
        const g = prompt("new name", "");
        if (g) {
          if (await vl(t, g)) {
            alert('"' + g + `" is an existing name.
Please try again with another name.`);
            return;
          }
          i(!0), await yb(t, e, g), await r(t), i(!1);
        }
      }
    },
    {
      name: "duplicate",
      handler: async (v) => {
        console.log("ContentEntry duplicate handler called", v), i(!0), await Ro(e, t, e.name + "_copy_" + ui()), await r(t), i(!1);
      }
    },
    {
      name: "remove",
      handler: async (v) => {
        console.log("ContentEntry remove handler called", v), confirm('Are you sure to remove "' + e.name + `"?
This is not revertible!`) && (i(!0), await Oo(t, e), await r(t), i(!1));
      }
    }
  ];
  function l(v) {
    console.log("ContentEntry onClickHandler called", v), vt(e) ? r(e) : n(e);
  }
  function u(v) {
    console.log("ContentEntry onDragHandler called", v), s(e);
  }
  function d(v) {
    console.log("ContentEntry onDropHandler called", v), a(e);
  }
  const p = /* @__PURE__ */ I.jsx(rb, { items: c, children: /* @__PURE__ */ I.jsx(wy, { disablePadding: !0, children: /* @__PURE__ */ I.jsxs(fy, { onClick: l, children: [
    /* @__PURE__ */ I.jsx(_y, { children: vt(e) ? /* @__PURE__ */ I.jsx(Ji, {}) : /* @__PURE__ */ I.jsx(Qi, {}) }),
    /* @__PURE__ */ I.jsx(Dy, { draggable: !0, onDragStart: u, primary: e.name })
  ] }) }) });
  return vt(e) ? /* @__PURE__ */ I.jsx(hl, { onDropHandler: d, children: p }) : p;
}
function ib({ entryHandle: e }) {
  const { showFolderView: t } = vn(Co), { handleDrop: n } = vn(es);
  function r(s) {
    console.log("PathEntry onDropHandler called", s), n(e);
  }
  function i(s) {
    console.log("PathEntry onClickHandler called", s), t(e);
  }
  return /* @__PURE__ */ I.jsx(hl, { onDropHandler: r, children: /* @__PURE__ */ I.jsx(Ov, { size: "small", onClick: i, sx: { minWidth: 10, textTransform: "none" }, children: e.name === "\\" ? "ROOT" : e.name }) });
}
function sb() {
  const { showFolderView: e, currentFolderHandle: t, setIsLoading: n } = vn(Co), r = [
    {
      icon: /* @__PURE__ */ I.jsx(Qi, {}),
      name: "new file",
      handler: async (i) => {
        console.log("AddEntry new file called", i), n(!0), await ns(t, "new_file_" + ui()), await e(t), n(!1);
      }
    },
    {
      icon: /* @__PURE__ */ I.jsx(Ji, {}),
      name: "new folder",
      handler: async (i) => {
        console.log("AddEntry new folder called", i), n(!0), await ts(t, "new_folder_" + ui()), await e(t), n(!1);
      }
    }
  ];
  return /* @__PURE__ */ I.jsx(
    Tg,
    {
      ariaLabel: "SpeedDial basic example",
      sx: { position: "fixed", bottom: 16, right: 16 },
      icon: /* @__PURE__ */ I.jsx(Hg, {}),
      children: r.map((i) => /* @__PURE__ */ I.jsx(
        Vg,
        {
          icon: i.icon,
          tooltipTitle: i.name,
          onClick: i.handler
        },
        i.name
      ))
    }
  );
}
const Co = ka(), es = ka();
function Eb({ rootFolder: e, onFileClick: t }) {
  const [n, r] = Pt(e), [i, s] = Pt(), [a, c] = Pt([e]), [l, u] = Pt([]), [d, p] = Pt(!1);
  zo(() => {
    async function y() {
      await v(n);
    }
    y();
  }, []);
  async function v(y) {
    r(y), u(await wo(y));
    for (var m = 0; m < a.length; m++)
      if (await y.isSameEntry(a[m])) {
        c((f) => f.slice(0, m + 1));
        return;
      }
    c((f) => [...f, y]);
  }
  async function g(y) {
    if (!await y.isSameEntry(i) && !await y.isSameEntry(n)) {
      if (await vl(y, i.name)) {
        alert('"' + i.name + '" conflicts with another name in the target folder.');
        return;
      }
      p(!0), await gb(n, i, y), await v(n), p(!1);
    }
  }
  return /* @__PURE__ */ I.jsx(Co.Provider, { value: { currentFolderHandle: n, onFileClick: t, showFolderView: v, setIsLoading: p }, children: /* @__PURE__ */ I.jsxs(es.Provider, { value: { setEntryOnDrag: s, handleDrop: g }, children: [
    /* @__PURE__ */ I.jsx(Zh, { "aria-label": "breadcrumb", children: a.map((y) => /* @__PURE__ */ I.jsx(ib, { entryHandle: y }, crypto.randomUUID())) }),
    /* @__PURE__ */ I.jsx(qv, {}),
    /* @__PURE__ */ I.jsx(Jc, { children: l.sort((y, m) => vt(y) && !vt(m) ? -1 : !vt(y) && vt(m) ? 1 : y.name < m.name ? -1 : y.name > m.name ? 1 : 0).filter((y) => !y.name.startsWith(".")).map((y) => /* @__PURE__ */ I.jsx(ob, { entryHandle: y }, crypto.randomUUID())) }),
    /* @__PURE__ */ I.jsx(sb, {}),
    /* @__PURE__ */ I.jsx(Vc, { sx: { color: "#fff", zIndex: (y) => y.zIndex.drawer + 1 }, open: d, children: /* @__PURE__ */ I.jsx(kv, { color: "inherit" }) })
  ] }) });
}
const Tb = () => {
  const [e, t] = Pt(null), [n, r] = Pt(!1), [i, s] = Pt("");
  zo(() => {
    const l = setInterval(async () => {
      r(await cb(e));
    }, 1e3);
    return () => clearInterval(l);
  }, [e]), zo(() => {
    s(() => e ? n ? "Connected to " + e.name : "Connecting" : "No Directory Connected");
  }, [e, n]);
  async function a() {
    try {
      const l = await window.showDirectoryPicker({
        mode: "readwrite"
      });
      if (l)
        console.log("Directory handle opened."), t(l);
      else
        throw new Error("Failed to open directory handle. `dirHandle` created but empty");
    } catch (l) {
      alert(l), console.error(l);
    }
  }
  async function c(l = "", u = !1) {
    l.replace("\\", "/");
    const d = l.split("/").map((v) => v.trim());
    let p = e;
    for (const v of d)
      if (v.length !== 0)
        try {
          p = await p.getDirectoryHandle(v, { create: u });
        } catch {
          console.log(l + " does not exist");
          return;
        }
    return p;
  }
  return {
    openDirectory: a,
    directoryReady: n,
    statusText: i,
    rootDirHandle: e,
    path2FolderHandles: c
  };
};
async function Cb(e, t) {
  const n = await e.createWritable();
  await n.write(t), await n.close(), console.log("Successfully wrote to", e.name);
}
async function ab(e) {
  const n = await (await e.getFile()).text();
  return String(n);
}
function vt(e) {
  return e.kind === "directory";
}
async function cb(e) {
  if (e === null)
    return !1;
  if (vt(e))
    try {
      for await (const [t, n] of e.entries())
        break;
      return !0;
    } catch {
      return !1;
    }
  else
    try {
      return await ab(e), !0;
    } catch {
      return !1;
    }
}
async function wo(e) {
  const t = [];
  for await (const n of await e.values())
    t.push(n);
  return t;
}
async function lb(e) {
  var t = [];
  for (const n of await wo(e))
    t.push({
      parent: e,
      handle: n,
      children: vt(n) ? await lb(n) : null
    });
  return t;
}
async function ub(e, t) {
  try {
    return await e.getFileHandle(t), !0;
  } catch {
    return !1;
  }
}
async function db(e, t) {
  try {
    return await e.getDirectoryHandle(t), !0;
  } catch {
    return !1;
  }
}
async function vl(e, t) {
  return await ub(e, t) || await db(e, t);
}
async function ts(e, t) {
  return await e.getDirectoryHandle(t, {
    create: !0
  });
}
async function ns(e, t) {
  return await e.getFileHandle(t, {
    create: !0
  });
}
async function wb(e, t, n) {
  var r = [e];
  for (let i = 0; i < t; i++) {
    const s = [];
    for (const a of r)
      for (let c = 0; c < n; c++) {
        const l = Math.random();
        l < 0.7 ? s.push(await ts(a, String(l))) : await ns(a, String(l));
      }
    r = s;
  }
}
async function Oo(e, t) {
  vt(t) ? await fb(e, t) : await pb(e, t);
}
async function yl(e) {
  const t = await wo(e);
  t.sort((r, i) => r.name.startsWith(".") ? -1 : i.name.startsWith(".") ? 1 : 0);
  for (var n = 0; n < t.length; n++)
    await Oo(e, t[n]);
}
async function fb(e, t) {
  await yl(t), await e.removeEntry(t.name);
}
async function pb(e, t) {
  await e.removeEntry(t.name);
}
async function Ro(e, t, n) {
  return vt(e) ? await hb(e, t, n) : await vb(e, t, n);
}
async function mb(e, t, n = !1) {
  n && await yl(t);
  for (const r of await wo(e))
    await Ro(r, t, r.name);
}
async function hb(e, t, n) {
  const r = await ts(t, n);
  return await mb(e, r), r;
}
async function vb(e, t, n) {
  const r = await e.getFile(), i = await ns(t, n), s = await i.createWritable();
  return await s.write(r), await s.close(), i;
}
async function yb(e, t, n) {
  const r = await Ro(t, e, n);
  return await Oo(e, t), r;
}
async function gb(e, t, n) {
  const r = await Ro(t, n, t.name);
  return await Oo(e, t), r;
}
export {
  hb as _copyFolder,
  pb as _removeFile,
  fb as _removeFolder,
  ns as addNewFile,
  ts as addNewFolder,
  wb as addRandomFolderTree,
  mb as backupFolder,
  vl as checkEntryExists,
  ub as checkFileExists,
  db as checkFolderExists,
  yl as cleanFolder,
  Ro as copyEntry,
  Eb as default,
  ab as getFileText,
  wo as getFolderContent,
  lb as getFolderTree,
  cb as isEntryHealthy,
  vt as isFolder,
  gb as moveEntry,
  Oo as removeEntry,
  yb as renameEntry,
  Tb as useFileSystem,
  Cb as writeFileText
};
