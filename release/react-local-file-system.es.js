import * as T from "react";
import vt, { forwardRef as Qc, useContext as qn, Children as el, isValidElement as Pr, cloneElement as Sr, createContext as ga, useState as xt, useEffect as Ar } from "react";
import * as tl from "react-dom";
import xr from "react-dom";
function nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Do = { exports: {} }, Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zi;
function rl() {
  if (zi)
    return Nn;
  zi = 1;
  var e = vt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var d, m = {}, v = null, g = null;
    u !== void 0 && (v = "" + u), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l)
      r.call(l, d) && !s.hasOwnProperty(d) && (m[d] = l[d]);
    if (c && c.defaultProps)
      for (d in l = c.defaultProps, l)
        m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: t, type: c, key: v, ref: g, props: m, _owner: i.current };
  }
  return Nn.Fragment = n, Nn.jsx = a, Nn.jsxs = a, Nn;
}
var In = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ui;
function ol() {
  return Ui || (Ui = 1, process.env.NODE_ENV !== "production" && function() {
    var e = vt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, f = "@@iterator";
    function p(b) {
      if (b === null || typeof b != "object")
        return null;
      var M = y && b[y] || b[f];
      return typeof M == "function" ? M : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(b) {
      {
        for (var M = arguments.length, U = new Array(M > 1 ? M - 1 : 0), oe = 1; oe < M; oe++)
          U[oe - 1] = arguments[oe];
        x("error", b, U);
      }
    }
    function x(b, M, U) {
      {
        var oe = w.ReactDebugCurrentFrame, pe = oe.getStackAddendum();
        pe !== "" && (M += "%s", U = U.concat([pe]));
        var ge = U.map(function(fe) {
          return String(fe);
        });
        ge.unshift("Warning: " + M), Function.prototype.apply.call(console[b], console, ge);
      }
    }
    var E = !1, h = !1, $ = !1, O = !1, F = !1, A;
    A = Symbol.for("react.module.reference");
    function N(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === r || b === s || F || b === i || b === u || b === d || O || b === g || E || h || $ || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === m || b.$$typeof === a || b.$$typeof === c || b.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === A || b.getModuleId !== void 0));
    }
    function B(b, M, U) {
      var oe = b.displayName;
      if (oe)
        return oe;
      var pe = M.displayName || M.name || "";
      return pe !== "" ? U + "(" + pe + ")" : U;
    }
    function W(b) {
      return b.displayName || "Context";
    }
    function V(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
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
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            var M = b;
            return W(M) + ".Consumer";
          case a:
            var U = b;
            return W(U._context) + ".Provider";
          case l:
            return B(b, b.render, "ForwardRef");
          case m:
            var oe = b.displayName || null;
            return oe !== null ? oe : V(b.type) || "Memo";
          case v: {
            var pe = b, ge = pe._payload, fe = pe._init;
            try {
              return V(fe(ge));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, D = 0, k, z, q, Q, _, j, G;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function Y() {
      {
        if (D === 0) {
          k = console.log, z = console.info, q = console.warn, Q = console.error, _ = console.group, j = console.groupCollapsed, G = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        D++;
      }
    }
    function K() {
      {
        if (D--, D === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, b, {
              value: k
            }),
            info: L({}, b, {
              value: z
            }),
            warn: L({}, b, {
              value: q
            }),
            error: L({}, b, {
              value: Q
            }),
            group: L({}, b, {
              value: _
            }),
            groupCollapsed: L({}, b, {
              value: j
            }),
            groupEnd: L({}, b, {
              value: G
            })
          });
        }
        D < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = w.ReactCurrentDispatcher, Z;
    function H(b, M, U) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (pe) {
            var oe = pe.stack.trim().match(/\n( *(at )?)/);
            Z = oe && oe[1] || "";
          }
        return `
` + Z + b;
      }
    }
    var J = !1, te;
    {
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      te = new le();
    }
    function S(b, M) {
      if (!b || J)
        return "";
      {
        var U = te.get(b);
        if (U !== void 0)
          return U;
      }
      var oe;
      J = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ge;
      ge = X.current, X.current = null, Y();
      try {
        if (M) {
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
            } catch (Pt) {
              oe = Pt;
            }
            Reflect.construct(b, [], fe);
          } else {
            try {
              fe.call();
            } catch (Pt) {
              oe = Pt;
            }
            b.call(fe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Pt) {
            oe = Pt;
          }
          b();
        }
      } catch (Pt) {
        if (Pt && oe && typeof Pt.stack == "string") {
          for (var de = Pt.stack.split(`
`), Ye = oe.stack.split(`
`), ke = de.length - 1, Le = Ye.length - 1; ke >= 1 && Le >= 0 && de[ke] !== Ye[Le]; )
            Le--;
          for (; ke >= 1 && Le >= 0; ke--, Le--)
            if (de[ke] !== Ye[Le]) {
              if (ke !== 1 || Le !== 1)
                do
                  if (ke--, Le--, Le < 0 || de[ke] !== Ye[Le]) {
                    var re = `
` + de[ke].replace(" at new ", " at ");
                    return b.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", b.displayName)), typeof b == "function" && te.set(b, re), re;
                  }
                while (ke >= 1 && Le >= 0);
              break;
            }
        }
      } finally {
        J = !1, X.current = ge, K(), Error.prepareStackTrace = pe;
      }
      var ze = b ? b.displayName || b.name : "", Bi = ze ? H(ze) : "";
      return typeof b == "function" && te.set(b, Bi), Bi;
    }
    function ne(b, M, U) {
      return S(b, !1);
    }
    function P(b) {
      var M = b.prototype;
      return !!(M && M.isReactComponent);
    }
    function ie(b, M, U) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return S(b, P(b));
      if (typeof b == "string")
        return H(b);
      switch (b) {
        case u:
          return H("Suspense");
        case d:
          return H("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return ne(b.render);
          case m:
            return ie(b.type, M, U);
          case v: {
            var oe = b, pe = oe._payload, ge = oe._init;
            try {
              return ie(ge(pe), M, U);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, De = {}, $e = w.ReactDebugCurrentFrame;
    function Qe(b) {
      if (b) {
        var M = b._owner, U = ie(b.type, b._source, M ? M.type : null);
        $e.setExtraStackFrame(U);
      } else
        $e.setExtraStackFrame(null);
    }
    function Be(b, M, U, oe, pe) {
      {
        var ge = Function.call.bind(he);
        for (var fe in b)
          if (ge(b, fe)) {
            var de = void 0;
            try {
              if (typeof b[fe] != "function") {
                var Ye = Error((oe || "React class") + ": " + U + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ye.name = "Invariant Violation", Ye;
              }
              de = b[fe](M, fe, oe, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ke) {
              de = ke;
            }
            de && !(de instanceof Error) && (Qe(pe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", U, fe, typeof de), Qe(null)), de instanceof Error && !(de.message in De) && (De[de.message] = !0, Qe(pe), C("Failed %s type: %s", U, de.message), Qe(null));
          }
      }
    }
    var Xe = Array.isArray;
    function We(b) {
      return Xe(b);
    }
    function st(b) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, U = M && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return U;
      }
    }
    function Se(b) {
      try {
        return He(b), !1;
      } catch {
        return !0;
      }
    }
    function He(b) {
      return "" + b;
    }
    function Je(b) {
      if (Se(b))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", st(b)), He(b);
    }
    var et = w.ReactCurrentOwner, jt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, se, Ze, Ct;
    Ct = {};
    function bt(b) {
      if (he.call(b, "ref")) {
        var M = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function zt(b) {
      if (he.call(b, "key")) {
        var M = Object.getOwnPropertyDescriptor(b, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function dr(b, M) {
      if (typeof b.ref == "string" && et.current && M && et.current.stateNode !== M) {
        var U = V(et.current.type);
        Ct[U] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(et.current.type), b.ref), Ct[U] = !0);
      }
    }
    function Zt(b, M) {
      {
        var U = function() {
          se || (se = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        U.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function On(b, M) {
      {
        var U = function() {
          Ze || (Ze = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        U.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var fr = function(b, M, U, oe, pe, ge, fe) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: M,
        ref: U,
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
        value: oe
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function pr(b, M, U, oe, pe) {
      {
        var ge, fe = {}, de = null, Ye = null;
        U !== void 0 && (Je(U), de = "" + U), zt(M) && (Je(M.key), de = "" + M.key), bt(M) && (Ye = M.ref, dr(M, pe));
        for (ge in M)
          he.call(M, ge) && !jt.hasOwnProperty(ge) && (fe[ge] = M[ge]);
        if (b && b.defaultProps) {
          var ke = b.defaultProps;
          for (ge in ke)
            fe[ge] === void 0 && (fe[ge] = ke[ge]);
        }
        if (de || Ye) {
          var Le = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          de && Zt(fe, Le), Ye && On(fe, Le);
        }
        return fr(b, de, Ye, pe, oe, et.current, fe);
      }
    }
    var Cn = w.ReactCurrentOwner, mr = w.ReactDebugCurrentFrame;
    function At(b) {
      if (b) {
        var M = b._owner, U = ie(b.type, b._source, M ? M.type : null);
        mr.setExtraStackFrame(U);
      } else
        mr.setExtraStackFrame(null);
    }
    var Qt;
    Qt = !1;
    function en(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Pn() {
      {
        if (Cn.current) {
          var b = V(Cn.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function hr(b) {
      {
        if (b !== void 0) {
          var M = b.fileName.replace(/^.*[\\\/]/, ""), U = b.lineNumber;
          return `

Check your code at ` + M + ":" + U + ".";
        }
        return "";
      }
    }
    var Sn = {};
    function vr(b) {
      {
        var M = Pn();
        if (!M) {
          var U = typeof b == "string" ? b : b.displayName || b.name;
          U && (M = `

Check the top-level render call using <` + U + ">.");
        }
        return M;
      }
    }
    function yr(b, M) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var U = vr(M);
        if (Sn[U])
          return;
        Sn[U] = !0;
        var oe = "";
        b && b._owner && b._owner !== Cn.current && (oe = " It was passed a child from " + V(b._owner.type) + "."), At(b), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, oe), At(null);
      }
    }
    function gr(b, M) {
      {
        if (typeof b != "object")
          return;
        if (We(b))
          for (var U = 0; U < b.length; U++) {
            var oe = b[U];
            en(oe) && yr(oe, M);
          }
        else if (en(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var pe = p(b);
          if (typeof pe == "function" && pe !== b.entries)
            for (var ge = pe.call(b), fe; !(fe = ge.next()).done; )
              en(fe.value) && yr(fe.value, M);
        }
      }
    }
    function To(b) {
      {
        var M = b.type;
        if (M == null || typeof M == "string")
          return;
        var U;
        if (typeof M == "function")
          U = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        M.$$typeof === m))
          U = M.propTypes;
        else
          return;
        if (U) {
          var oe = V(M);
          Be(U, b.props, "prop", oe, b);
        } else if (M.PropTypes !== void 0 && !Qt) {
          Qt = !0;
          var pe = V(M);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $n(b) {
      {
        for (var M = Object.keys(b.props), U = 0; U < M.length; U++) {
          var oe = M[U];
          if (oe !== "children" && oe !== "key") {
            At(b), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), At(null);
            break;
          }
        }
        b.ref !== null && (At(b), C("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    function br(b, M, U, oe, pe, ge) {
      {
        var fe = N(b);
        if (!fe) {
          var de = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ye = hr(pe);
          Ye ? de += Ye : de += Pn();
          var ke;
          b === null ? ke = "null" : We(b) ? ke = "array" : b !== void 0 && b.$$typeof === t ? (ke = "<" + (V(b.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : ke = typeof b, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ke, de);
        }
        var Le = pr(b, M, U, pe, ge);
        if (Le == null)
          return Le;
        if (fe) {
          var re = M.children;
          if (re !== void 0)
            if (oe)
              if (We(re)) {
                for (var ze = 0; ze < re.length; ze++)
                  gr(re[ze], b);
                Object.freeze && Object.freeze(re);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gr(re, b);
        }
        return b === r ? $n(Le) : To(Le), Le;
      }
    }
    function Ut(b, M, U) {
      return br(b, M, U, !0);
    }
    function _n(b, M, U) {
      return br(b, M, U, !1);
    }
    var tt = _n, Wt = Ut;
    In.Fragment = r, In.jsx = tt, In.jsxs = Wt;
  }()), In;
}
process.env.NODE_ENV === "production" ? Do.exports = rl() : Do.exports = ol();
var I = Do.exports;
const il = {
  black: "#000",
  white: "#fff"
}, Hn = il, sl = {
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
}, tn = sl, al = {
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
}, nn = al, cl = {
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
}, rn = cl, ll = {
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
}, on = ll, ul = {
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
}, sn = ul, dl = {
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
}, Mn = dl, fl = {
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
}, pl = fl;
function Mt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function R() {
  return R = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, R.apply(this, arguments);
}
function St(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function ba(e) {
  if (!St(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ba(e[n]);
  }), t;
}
function yt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? R({}, e) : e;
  return St(e) && St(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (St(t[i]) && i in e && St(e[i]) ? r[i] = yt(e[i], t[i], n) : n.clone ? r[i] = St(t[i]) ? ba(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
var Lo = { exports: {} }, Er = { exports: {} }, be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wi;
function ml() {
  if (Wi)
    return be;
  Wi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var $ = h.$$typeof;
      switch ($) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case r:
            case s:
            case i:
            case m:
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
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  function E(h) {
    return x(h) === u;
  }
  return be.AsyncMode = l, be.ConcurrentMode = u, be.ContextConsumer = c, be.ContextProvider = a, be.Element = t, be.ForwardRef = d, be.Fragment = r, be.Lazy = y, be.Memo = g, be.Portal = n, be.Profiler = s, be.StrictMode = i, be.Suspense = m, be.isAsyncMode = function(h) {
    return E(h) || x(h) === l;
  }, be.isConcurrentMode = E, be.isContextConsumer = function(h) {
    return x(h) === c;
  }, be.isContextProvider = function(h) {
    return x(h) === a;
  }, be.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, be.isForwardRef = function(h) {
    return x(h) === d;
  }, be.isFragment = function(h) {
    return x(h) === r;
  }, be.isLazy = function(h) {
    return x(h) === y;
  }, be.isMemo = function(h) {
    return x(h) === g;
  }, be.isPortal = function(h) {
    return x(h) === n;
  }, be.isProfiler = function(h) {
    return x(h) === s;
  }, be.isStrictMode = function(h) {
    return x(h) === i;
  }, be.isSuspense = function(h) {
    return x(h) === m;
  }, be.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === m || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === p || h.$$typeof === w || h.$$typeof === C || h.$$typeof === f);
  }, be.typeOf = x, be;
}
var xe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yi;
function hl() {
  return Yi || (Yi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function x(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === s || S === i || S === m || S === v || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === g || S.$$typeof === a || S.$$typeof === c || S.$$typeof === d || S.$$typeof === p || S.$$typeof === w || S.$$typeof === C || S.$$typeof === f);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ne = S.$$typeof;
        switch (ne) {
          case t:
            var P = S.type;
            switch (P) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case m:
                return P;
              default:
                var ie = P && P.$$typeof;
                switch (ie) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return ie;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, $ = u, O = c, F = a, A = t, N = d, B = r, W = y, V = g, L = n, D = s, k = i, z = m, q = !1;
    function Q(S) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || E(S) === l;
    }
    function _(S) {
      return E(S) === u;
    }
    function j(S) {
      return E(S) === c;
    }
    function G(S) {
      return E(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Y(S) {
      return E(S) === d;
    }
    function K(S) {
      return E(S) === r;
    }
    function X(S) {
      return E(S) === y;
    }
    function Z(S) {
      return E(S) === g;
    }
    function H(S) {
      return E(S) === n;
    }
    function J(S) {
      return E(S) === s;
    }
    function te(S) {
      return E(S) === i;
    }
    function le(S) {
      return E(S) === m;
    }
    xe.AsyncMode = h, xe.ConcurrentMode = $, xe.ContextConsumer = O, xe.ContextProvider = F, xe.Element = A, xe.ForwardRef = N, xe.Fragment = B, xe.Lazy = W, xe.Memo = V, xe.Portal = L, xe.Profiler = D, xe.StrictMode = k, xe.Suspense = z, xe.isAsyncMode = Q, xe.isConcurrentMode = _, xe.isContextConsumer = j, xe.isContextProvider = G, xe.isElement = ee, xe.isForwardRef = Y, xe.isFragment = K, xe.isLazy = X, xe.isMemo = Z, xe.isPortal = H, xe.isProfiler = J, xe.isStrictMode = te, xe.isSuspense = le, xe.isValidElementType = x, xe.typeOf = E;
  }()), xe;
}
var qi;
function xa() {
  return qi || (qi = 1, process.env.NODE_ENV === "production" ? Er.exports = ml() : Er.exports = hl()), Er.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var wo, Hi;
function vl() {
  if (Hi)
    return wo;
  Hi = 1;
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
  return wo = i() ? Object.assign : function(s, a) {
    for (var c, l = r(s), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var m in c)
        t.call(c, m) && (l[m] = c[m]);
      if (e) {
        u = e(c);
        for (var v = 0; v < u.length; v++)
          n.call(c, u[v]) && (l[u[v]] = c[u[v]]);
      }
    }
    return l;
  }, wo;
}
var Ro, Gi;
function oi() {
  if (Gi)
    return Ro;
  Gi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ro = e, Ro;
}
var Oo, Ki;
function Ea() {
  return Ki || (Ki = 1, Oo = Function.call.bind(Object.prototype.hasOwnProperty)), Oo;
}
var Co, Xi;
function yl() {
  if (Xi)
    return Co;
  Xi = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = oi(), n = {}, r = Ea();
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
          var m;
          try {
            if (typeof s[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            m = s[d](a, d, l, c, null, t);
          } catch (y) {
            m = y;
          }
          if (m && !(m instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + c + " type: " + m.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Co = i, Co;
}
var Po, Ji;
function gl() {
  if (Ji)
    return Po;
  Ji = 1;
  var e = xa(), t = vl(), n = oi(), r = Ea(), i = yl(), s = function() {
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
  return Po = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function m(_) {
      var j = _ && (u && _[u] || _[d]);
      if (typeof j == "function")
        return j;
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
      any: C(),
      arrayOf: x,
      element: E(),
      elementType: h(),
      instanceOf: $,
      node: N(),
      objectOf: F,
      oneOf: O,
      oneOfType: A,
      shape: W,
      exact: V
    };
    function y(_, j) {
      return _ === j ? _ !== 0 || 1 / _ === 1 / j : _ !== _ && j !== j;
    }
    function f(_, j) {
      this.message = _, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function p(_) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, G = 0;
      function ee(K, X, Z, H, J, te, le) {
        if (H = H || v, te = te || Z, le !== n) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = H + ":" + Z;
            !j[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            G < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + H + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[ne] = !0, G++);
          }
        }
        return X[Z] == null ? K ? X[Z] === null ? new f("The " + J + " `" + te + "` is marked as required " + ("in `" + H + "`, but its value is `null`.")) : new f("The " + J + " `" + te + "` is marked as required in " + ("`" + H + "`, but its value is `undefined`.")) : null : _(X, Z, H, J, te);
      }
      var Y = ee.bind(null, !1);
      return Y.isRequired = ee.bind(null, !0), Y;
    }
    function w(_) {
      function j(G, ee, Y, K, X, Z) {
        var H = G[ee], J = k(H);
        if (J !== _) {
          var te = z(H);
          return new f(
            "Invalid " + K + " `" + X + "` of type " + ("`" + te + "` supplied to `" + Y + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return p(j);
    }
    function C() {
      return p(a);
    }
    function x(_) {
      function j(G, ee, Y, K, X) {
        if (typeof _ != "function")
          return new f("Property `" + X + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var Z = G[ee];
        if (!Array.isArray(Z)) {
          var H = k(Z);
          return new f("Invalid " + K + " `" + X + "` of type " + ("`" + H + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var J = 0; J < Z.length; J++) {
          var te = _(Z, J, Y, K, X + "[" + J + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return p(j);
    }
    function E() {
      function _(j, G, ee, Y, K) {
        var X = j[G];
        if (!c(X)) {
          var Z = k(X);
          return new f("Invalid " + Y + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + ee + "`, expected a single ReactElement."));
        }
        return null;
      }
      return p(_);
    }
    function h() {
      function _(j, G, ee, Y, K) {
        var X = j[G];
        if (!e.isValidElementType(X)) {
          var Z = k(X);
          return new f("Invalid " + Y + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + ee + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return p(_);
    }
    function $(_) {
      function j(G, ee, Y, K, X) {
        if (!(G[ee] instanceof _)) {
          var Z = _.name || v, H = Q(G[ee]);
          return new f("Invalid " + K + " `" + X + "` of type " + ("`" + H + "` supplied to `" + Y + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return p(j);
    }
    function O(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function j(G, ee, Y, K, X) {
        for (var Z = G[ee], H = 0; H < _.length; H++)
          if (y(Z, _[H]))
            return null;
        var J = JSON.stringify(_, function(le, S) {
          var ne = z(S);
          return ne === "symbol" ? String(S) : S;
        });
        return new f("Invalid " + K + " `" + X + "` of value `" + String(Z) + "` " + ("supplied to `" + Y + "`, expected one of " + J + "."));
      }
      return p(j);
    }
    function F(_) {
      function j(G, ee, Y, K, X) {
        if (typeof _ != "function")
          return new f("Property `" + X + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var Z = G[ee], H = k(Z);
        if (H !== "object")
          return new f("Invalid " + K + " `" + X + "` of type " + ("`" + H + "` supplied to `" + Y + "`, expected an object."));
        for (var J in Z)
          if (r(Z, J)) {
            var te = _(Z, J, Y, K, X + "." + J, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return p(j);
    }
    function A(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var j = 0; j < _.length; j++) {
        var G = _[j];
        if (typeof G != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(G) + " at index " + j + "."
          ), a;
      }
      function ee(Y, K, X, Z, H) {
        for (var J = [], te = 0; te < _.length; te++) {
          var le = _[te], S = le(Y, K, X, Z, H, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && J.push(S.data.expectedType);
        }
        var ne = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new f("Invalid " + Z + " `" + H + "` supplied to " + ("`" + X + "`" + ne + "."));
      }
      return p(ee);
    }
    function N() {
      function _(j, G, ee, Y, K) {
        return L(j[G]) ? null : new f("Invalid " + Y + " `" + K + "` supplied to " + ("`" + ee + "`, expected a ReactNode."));
      }
      return p(_);
    }
    function B(_, j, G, ee, Y) {
      return new f(
        (_ || "React class") + ": " + j + " type `" + G + "." + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function W(_) {
      function j(G, ee, Y, K, X) {
        var Z = G[ee], H = k(Z);
        if (H !== "object")
          return new f("Invalid " + K + " `" + X + "` of type `" + H + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var J in _) {
          var te = _[J];
          if (typeof te != "function")
            return B(Y, K, X, J, z(te));
          var le = te(Z, J, Y, K, X + "." + J, n);
          if (le)
            return le;
        }
        return null;
      }
      return p(j);
    }
    function V(_) {
      function j(G, ee, Y, K, X) {
        var Z = G[ee], H = k(Z);
        if (H !== "object")
          return new f("Invalid " + K + " `" + X + "` of type `" + H + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var J = t({}, G[ee], _);
        for (var te in J) {
          var le = _[te];
          if (r(_, te) && typeof le != "function")
            return B(Y, K, X, te, z(le));
          if (!le)
            return new f(
              "Invalid " + K + " `" + X + "` key `" + te + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(G[ee], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var S = le(Z, te, Y, K, X + "." + te, n);
          if (S)
            return S;
        }
        return null;
      }
      return p(j);
    }
    function L(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(L);
          if (_ === null || c(_))
            return !0;
          var j = m(_);
          if (j) {
            var G = j.call(_), ee;
            if (j !== _.entries) {
              for (; !(ee = G.next()).done; )
                if (!L(ee.value))
                  return !1;
            } else
              for (; !(ee = G.next()).done; ) {
                var Y = ee.value;
                if (Y && !L(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(_, j) {
      return _ === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function k(_) {
      var j = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : D(j, _) ? "symbol" : j;
    }
    function z(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var j = k(_);
      if (j === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function q(_) {
      var j = z(_);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function Q(_) {
      return !_.constructor || !_.constructor.name ? v : _.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, Po;
}
var So, Zi;
function bl() {
  if (Zi)
    return So;
  Zi = 1;
  var e = oi();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, So = function() {
    function r(a, c, l, u, d, m) {
      if (m !== e) {
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
  }, So;
}
if (process.env.NODE_ENV !== "production") {
  var xl = xa(), El = !0;
  Lo.exports = gl()(xl.isElement, El);
} else
  Lo.exports = bl()();
var Tl = Lo.exports;
const o = /* @__PURE__ */ nl(Tl);
function wl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ta(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !wl(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const wa = Mt(o.element, Ta);
wa.isRequired = Mt(o.element.isRequired, Ta);
const nr = wa;
function Rl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ol(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Rl(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ii = Mt(o.elementType, Ol), Cl = "exact-prop: ​";
function Ra(e) {
  return process.env.NODE_ENV === "production" ? e : R({}, e, {
    [Cl]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function mn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var Fo = { exports: {} }, Ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Pl() {
  if (Qi)
    return Ee;
  Qi = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function f(p) {
    if (typeof p == "object" && p !== null) {
      var w = p.$$typeof;
      switch (w) {
        case e:
          switch (p = p.type, p) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case a:
                case l:
                case v:
                case m:
                case s:
                  return p;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return Ee.ContextConsumer = a, Ee.ContextProvider = s, Ee.Element = e, Ee.ForwardRef = l, Ee.Fragment = n, Ee.Lazy = v, Ee.Memo = m, Ee.Portal = t, Ee.Profiler = i, Ee.StrictMode = r, Ee.Suspense = u, Ee.SuspenseList = d, Ee.isAsyncMode = function() {
    return !1;
  }, Ee.isConcurrentMode = function() {
    return !1;
  }, Ee.isContextConsumer = function(p) {
    return f(p) === a;
  }, Ee.isContextProvider = function(p) {
    return f(p) === s;
  }, Ee.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Ee.isForwardRef = function(p) {
    return f(p) === l;
  }, Ee.isFragment = function(p) {
    return f(p) === n;
  }, Ee.isLazy = function(p) {
    return f(p) === v;
  }, Ee.isMemo = function(p) {
    return f(p) === m;
  }, Ee.isPortal = function(p) {
    return f(p) === t;
  }, Ee.isProfiler = function(p) {
    return f(p) === i;
  }, Ee.isStrictMode = function(p) {
    return f(p) === r;
  }, Ee.isSuspense = function(p) {
    return f(p) === u;
  }, Ee.isSuspenseList = function(p) {
    return f(p) === d;
  }, Ee.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === r || p === u || p === d || p === g || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === m || p.$$typeof === s || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
  }, Ee.typeOf = f, Ee;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function Sl() {
  return es || (es = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, f = !1, p = !1, w = !1, C = !1, x;
    x = Symbol.for("react.module.reference");
    function E(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === i || C || P === r || P === u || P === d || w || P === g || y || f || p || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === m || P.$$typeof === s || P.$$typeof === a || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === x || P.getModuleId !== void 0));
    }
    function h(P) {
      if (typeof P == "object" && P !== null) {
        var ie = P.$$typeof;
        switch (ie) {
          case e:
            var he = P.type;
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
                  case m:
                  case s:
                    return De;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var $ = a, O = s, F = e, A = l, N = n, B = v, W = m, V = t, L = i, D = r, k = u, z = d, q = !1, Q = !1;
    function _(P) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(P) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(P) {
      return h(P) === a;
    }
    function ee(P) {
      return h(P) === s;
    }
    function Y(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function K(P) {
      return h(P) === l;
    }
    function X(P) {
      return h(P) === n;
    }
    function Z(P) {
      return h(P) === v;
    }
    function H(P) {
      return h(P) === m;
    }
    function J(P) {
      return h(P) === t;
    }
    function te(P) {
      return h(P) === i;
    }
    function le(P) {
      return h(P) === r;
    }
    function S(P) {
      return h(P) === u;
    }
    function ne(P) {
      return h(P) === d;
    }
    Te.ContextConsumer = $, Te.ContextProvider = O, Te.Element = F, Te.ForwardRef = A, Te.Fragment = N, Te.Lazy = B, Te.Memo = W, Te.Portal = V, Te.Profiler = L, Te.StrictMode = D, Te.Suspense = k, Te.SuspenseList = z, Te.isAsyncMode = _, Te.isConcurrentMode = j, Te.isContextConsumer = G, Te.isContextProvider = ee, Te.isElement = Y, Te.isForwardRef = K, Te.isFragment = X, Te.isLazy = Z, Te.isMemo = H, Te.isPortal = J, Te.isProfiler = te, Te.isStrictMode = le, Te.isSuspense = S, Te.isSuspenseList = ne, Te.isValidElementType = E, Te.typeOf = h;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Fo.exports = Pl() : Fo.exports = Sl();
var ts = Fo.exports;
const $l = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function _l(e) {
  const t = `${e}`.match($l);
  return t && t[1] || "";
}
function Oa(e, t = "") {
  return e.displayName || e.name || _l(e) || t;
}
function ns(e, t, n) {
  const r = Oa(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Nl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Oa(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ts.ForwardRef:
          return ns(e, e.render, "ForwardRef");
        case ts.Memo:
          return ns(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $t(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Il = o.oneOfType([o.func, o.object]), Jr = Il;
function me(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : mn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function rs(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Ml(e, t = 166) {
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
function Ca(e, t) {
  var n, r;
  return /* @__PURE__ */ T.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function nt(e) {
  return e && e.ownerDocument || document;
}
function Gn(e) {
  return nt(e).defaultView || window;
}
function Vo(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const kl = typeof window < "u" ? T.useLayoutEffect : T.useEffect, _t = kl;
let os = 0;
function jl(e) {
  const [t, n] = T.useState(e), r = e || t;
  return T.useEffect(() => {
    t == null && (os += 1, n(`mui-${os}`));
  }, [t]), r;
}
const is = T["useId".toString()];
function Al(e) {
  if (is !== void 0) {
    const t = is();
    return e ?? t;
  }
  return jl(e);
}
function Dl({
  controlled: e,
  default: t,
  name: n,
  state: r = "value"
}) {
  const {
    current: i
  } = T.useRef(e !== void 0), [s, a] = T.useState(t), c = i ? e : s;
  if (process.env.NODE_ENV !== "production") {
    T.useEffect(() => {
      i !== (e !== void 0) && console.error([`MUI: A component is changing the ${i ? "" : "un"}controlled ${r} state of ${n} to be ${i ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${n} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, n, e]);
    const {
      current: u
    } = T.useRef(t);
    T.useEffect(() => {
      !i && u !== t && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${n} after being initialized. To suppress this warning opt to use a controlled ${n}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const l = T.useCallback((u) => {
    i || a(u);
  }, []);
  return [c, l];
}
function Ht(e) {
  const t = T.useRef(e);
  return _t(() => {
    t.current = e;
  }), T.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function Ke(...e) {
  return T.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Vo(n, t);
    });
  }, e);
}
let Zr = !0, Bo = !1, ss;
const Ll = {
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
function Fl(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Ll[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Vl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Zr = !0);
}
function $o() {
  Zr = !1;
}
function Bl() {
  this.visibilityState === "hidden" && Bo && (Zr = !0);
}
function zl(e) {
  e.addEventListener("keydown", Vl, !0), e.addEventListener("mousedown", $o, !0), e.addEventListener("pointerdown", $o, !0), e.addEventListener("touchstart", $o, !0), e.addEventListener("visibilitychange", Bl, !0);
}
function Ul(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Zr || Fl(t);
}
function Pa() {
  const e = T.useCallback((i) => {
    i != null && zl(i.ownerDocument);
  }, []), t = T.useRef(!1);
  function n() {
    return t.current ? (Bo = !0, window.clearTimeout(ss), ss = window.setTimeout(() => {
      Bo = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Ul(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Sa(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Wl(e) {
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
function Yl(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const ql = Number.isInteger || Yl;
function $a(e, t, n, r) {
  const i = e[t];
  if (i == null || !ql(i)) {
    const s = Wl(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function _a(e, t, ...n) {
  return e[t] === void 0 ? null : $a(e, t, ...n);
}
function zo() {
  return null;
}
_a.isRequired = $a;
zo.isRequired = zo;
const Bn = process.env.NODE_ENV === "production" ? zo : _a;
function si(e, t) {
  const n = R({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = R({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = R({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = si(i[a], s[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Ae(e, t, n = void 0) {
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
const as = (e) => e, Hl = () => {
  let e = as;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = as;
    }
  };
}, Gl = Hl(), Kl = Gl, Xl = {
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
function _e(e, t, n = "Mui") {
  const r = Xl[t];
  return r ? `${n}-${r}` : `${Kl.generate(e)}-${t}`;
}
function Ie(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = _e(e, i, n);
  }), r;
}
const ai = "$$material";
function ae(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, s;
  for (s = 0; s < r.length; s++)
    i = r[s], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
function Na(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Jl = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zl = /* @__PURE__ */ Na(
  function(e) {
    return Jl.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Ql(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function eu(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var tu = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(eu(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = Ql(i);
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
}(), Ge = "-ms-", Dr = "-moz-", ve = "-webkit-", ci = "comm", li = "rule", ui = "decl", nu = "@import", Ia = "@keyframes", ru = "@layer", ou = Math.abs, Qr = String.fromCharCode, iu = Object.assign;
function su(e, t) {
  return qe(e, 0) ^ 45 ? (((t << 2 ^ qe(e, 0)) << 2 ^ qe(e, 1)) << 2 ^ qe(e, 2)) << 2 ^ qe(e, 3) : 0;
}
function Ma(e) {
  return e.trim();
}
function au(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function Wo(e, t) {
  return e.indexOf(t);
}
function qe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kn(e, t, n) {
  return e.slice(t, n);
}
function Et(e) {
  return e.length;
}
function di(e) {
  return e.length;
}
function Tr(e, t) {
  return t.push(e), e;
}
function cu(e, t) {
  return e.map(t).join("");
}
var eo = 1, hn = 1, ka = 0, it = 0, Ue = 0, En = "";
function to(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: eo, column: hn, length: a, return: "" };
}
function kn(e, t) {
  return iu(to("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function lu() {
  return Ue;
}
function uu() {
  return Ue = it > 0 ? qe(En, --it) : 0, hn--, Ue === 10 && (hn = 1, eo--), Ue;
}
function ct() {
  return Ue = it < ka ? qe(En, it++) : 0, hn++, Ue === 10 && (hn = 1, eo++), Ue;
}
function wt() {
  return qe(En, it);
}
function $r() {
  return it;
}
function rr(e, t) {
  return Kn(En, e, t);
}
function Xn(e) {
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
function ja(e) {
  return eo = hn = 1, ka = Et(En = e), it = 0, [];
}
function Aa(e) {
  return En = "", e;
}
function _r(e) {
  return Ma(rr(it - 1, Yo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function du(e) {
  for (; (Ue = wt()) && Ue < 33; )
    ct();
  return Xn(e) > 2 || Xn(Ue) > 3 ? "" : " ";
}
function fu(e, t) {
  for (; --t && ct() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
    ;
  return rr(e, $r() + (t < 6 && wt() == 32 && ct() == 32));
}
function Yo(e) {
  for (; ct(); )
    switch (Ue) {
      case e:
        return it;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yo(Ue);
        break;
      case 40:
        e === 41 && Yo(e);
        break;
      case 92:
        ct();
        break;
    }
  return it;
}
function pu(e, t) {
  for (; ct() && e + Ue !== 47 + 10; )
    if (e + Ue === 42 + 42 && wt() === 47)
      break;
  return "/*" + rr(t, it - 1) + "*" + Qr(e === 47 ? e : ct());
}
function mu(e) {
  for (; !Xn(wt()); )
    ct();
  return rr(e, it);
}
function hu(e) {
  return Aa(Nr("", null, null, null, [""], e = ja(e), 0, [0], e));
}
function Nr(e, t, n, r, i, s, a, c, l) {
  for (var u = 0, d = 0, m = a, v = 0, g = 0, y = 0, f = 1, p = 1, w = 1, C = 0, x = "", E = i, h = s, $ = r, O = x; p; )
    switch (y = C, C = ct()) {
      case 40:
        if (y != 108 && qe(O, m - 1) == 58) {
          Wo(O += ye(_r(C), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += _r(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += du(y);
        break;
      case 92:
        O += fu($r() - 1, 7);
        continue;
      case 47:
        switch (wt()) {
          case 42:
          case 47:
            Tr(vu(pu(ct(), $r()), t, n), l);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * f:
        c[u++] = Et(O) * w;
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            p = 0;
          case 59 + d:
            w == -1 && (O = ye(O, /\f/g, "")), g > 0 && Et(O) - m && Tr(g > 32 ? ls(O + ";", r, n, m - 1) : ls(ye(O, " ", "") + ";", r, n, m - 2), l);
            break;
          case 59:
            O += ";";
          default:
            if (Tr($ = cs(O, t, n, u, d, i, c, x, E = [], h = [], m), s), C === 123)
              if (d === 0)
                Nr(O, t, $, $, E, s, m, c, h);
              else
                switch (v === 99 && qe(O, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Nr(e, $, $, r && Tr(cs(e, $, $, 0, 0, i, c, x, i, E = [], m), h), i, h, m, c, r ? E : h);
                    break;
                  default:
                    Nr(O, $, $, $, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, f = w = 1, x = O = "", m = a;
        break;
      case 58:
        m = 1 + Et(O), g = y;
      default:
        if (f < 1) {
          if (C == 123)
            --f;
          else if (C == 125 && f++ == 0 && uu() == 125)
            continue;
        }
        switch (O += Qr(C), C * f) {
          case 38:
            w = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            c[u++] = (Et(O) - 1) * w, w = 1;
            break;
          case 64:
            wt() === 45 && (O += _r(ct())), v = wt(), d = m = Et(x = O += mu($r())), C++;
            break;
          case 45:
            y === 45 && Et(O) == 2 && (f = 0);
        }
    }
  return s;
}
function cs(e, t, n, r, i, s, a, c, l, u, d) {
  for (var m = i - 1, v = i === 0 ? s : [""], g = di(v), y = 0, f = 0, p = 0; y < r; ++y)
    for (var w = 0, C = Kn(e, m + 1, m = ou(f = a[y])), x = e; w < g; ++w)
      (x = Ma(f > 0 ? v[w] + " " + C : ye(C, /&\f/g, v[w]))) && (l[p++] = x);
  return to(e, t, n, i === 0 ? li : c, l, u, d);
}
function vu(e, t, n) {
  return to(e, t, n, ci, Qr(lu()), Kn(e, 2, -2), 0);
}
function ls(e, t, n, r) {
  return to(e, t, n, ui, Kn(e, 0, r), Kn(e, r + 1, -1), r);
}
function fn(e, t) {
  for (var n = "", r = di(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function yu(e, t, n, r) {
  switch (e.type) {
    case ru:
      if (e.children.length)
        break;
    case nu:
    case ui:
      return e.return = e.return || e.value;
    case ci:
      return "";
    case Ia:
      return e.return = e.value + "{" + fn(e.children, r) + "}";
    case li:
      e.value = e.props.join(",");
  }
  return Et(n = fn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function gu(e) {
  var t = di(e);
  return function(n, r, i, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, i, s) || "";
    return a;
  };
}
function bu(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var xu = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = wt(), i === 38 && s === 12 && (n[r] = 1), !Xn(s); )
    ct();
  return rr(t, it);
}, Eu = function(t, n) {
  var r = -1, i = 44;
  do
    switch (Xn(i)) {
      case 0:
        i === 38 && wt() === 12 && (n[r] = 1), t[r] += xu(it - 1, n, r);
        break;
      case 2:
        t[r] += _r(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = wt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Qr(i);
    }
  while (i = ct());
  return t;
}, Tu = function(t, n) {
  return Aa(Eu(ja(t), n));
}, us = /* @__PURE__ */ new WeakMap(), wu = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !us.get(r)) && !i) {
      us.set(t, !0);
      for (var s = [], a = Tu(n, s), c = r.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, Ru = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Ou = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Cu = function(t) {
  return t.type === "comm" && t.children.indexOf(Ou) > -1;
}, Pu = function(t) {
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
            if (Cu(u))
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
}, Da = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Su = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!Da(n[r]))
      return !0;
  return !1;
}, ds = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, $u = function(t, n, r) {
  Da(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ds(t)) : Su(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ds(t)));
};
function La(e, t) {
  switch (su(e, t)) {
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
      return ve + e + Dr + e + Ge + e + e;
    case 6828:
    case 4268:
      return ve + e + Ge + e + e;
    case 6165:
      return ve + e + Ge + "flex-" + e + e;
    case 5187:
      return ve + e + ye(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + Ge + "flex-$1$2") + e;
    case 5443:
      return ve + e + Ge + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return ve + e + Ge + "flex-line-pack" + ye(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ve + e + Ge + ye(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + Ge + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return ve + "box-" + ye(e, "-grow", "") + ve + e + Ge + ye(e, "grow", "positive") + e;
    case 4554:
      return ve + ye(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return ye(ye(ye(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return ye(ye(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + Ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + e + e;
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
      if (Et(e) - 1 - t > 6)
        switch (qe(e, t + 1)) {
          case 109:
            if (qe(e, t + 4) !== 45)
              break;
          case 102:
            return ye(e, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Dr + (qe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Wo(e, "stretch") ? La(ye(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (qe(e, t + 1) !== 115)
        break;
    case 6444:
      switch (qe(e, Et(e) - 3 - (~Wo(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ve) + e;
        case 101:
          return ye(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ve + (qe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + Ge + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (qe(e, t + 11)) {
        case 114:
          return ve + e + Ge + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + Ge + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + Ge + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ve + e + Ge + e + e;
  }
  return e;
}
var _u = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case ui:
        t.return = La(t.value, t.length);
        break;
      case Ia:
        return fn([kn(t, {
          value: ye(t.value, "@", "@" + ve)
        })], i);
      case li:
        if (t.length)
          return cu(t.props, function(s) {
            switch (au(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return fn([kn(t, {
                  props: [ye(s, /:(read-\w+)/, ":" + Dr + "$1")]
                })], i);
              case "::placeholder":
                return fn([kn(t, {
                  props: [ye(s, /:(plac\w+)/, ":" + ve + "input-$1")]
                }), kn(t, {
                  props: [ye(s, /:(plac\w+)/, ":" + Dr + "$1")]
                }), kn(t, {
                  props: [ye(s, /:(plac\w+)/, Ge + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, Nu = [_u], Iu = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var p = f.getAttribute("data-emotion");
      p.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Nu;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var p = f.getAttribute("data-emotion").split(" "), w = 1; w < p.length; w++)
        s[p[w]] = !0;
      c.push(f);
    }
  );
  var l, u = [wu, Ru];
  process.env.NODE_ENV !== "production" && u.push(Pu({
    get compat() {
      return y.compat;
    }
  }), $u);
  {
    var d, m = [yu, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? d.insert(f.return) : f.value && f.type !== ci && d.insert(f.value + "{}"));
    } : bu(function(f) {
      d.insert(f);
    })], v = gu(u.concat(i, m)), g = function(p) {
      return fn(hu(p), v);
    };
    l = function(p, w, C, x) {
      d = C, process.env.NODE_ENV !== "production" && w.map !== void 0 && (d = {
        insert: function(h) {
          C.insert(h + w.map);
        }
      }), g(p ? p + "{" + w.styles + "}" : w.styles), x && (y.inserted[w.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new tu({
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
}, qo = { exports: {} }, we = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Mu() {
  if (fs)
    return we;
  fs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function x(h) {
    if (typeof h == "object" && h !== null) {
      var $ = h.$$typeof;
      switch ($) {
        case t:
          switch (h = h.type, h) {
            case l:
            case u:
            case r:
            case s:
            case i:
            case m:
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
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  function E(h) {
    return x(h) === u;
  }
  return we.AsyncMode = l, we.ConcurrentMode = u, we.ContextConsumer = c, we.ContextProvider = a, we.Element = t, we.ForwardRef = d, we.Fragment = r, we.Lazy = y, we.Memo = g, we.Portal = n, we.Profiler = s, we.StrictMode = i, we.Suspense = m, we.isAsyncMode = function(h) {
    return E(h) || x(h) === l;
  }, we.isConcurrentMode = E, we.isContextConsumer = function(h) {
    return x(h) === c;
  }, we.isContextProvider = function(h) {
    return x(h) === a;
  }, we.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, we.isForwardRef = function(h) {
    return x(h) === d;
  }, we.isFragment = function(h) {
    return x(h) === r;
  }, we.isLazy = function(h) {
    return x(h) === y;
  }, we.isMemo = function(h) {
    return x(h) === g;
  }, we.isPortal = function(h) {
    return x(h) === n;
  }, we.isProfiler = function(h) {
    return x(h) === s;
  }, we.isStrictMode = function(h) {
    return x(h) === i;
  }, we.isSuspense = function(h) {
    return x(h) === m;
  }, we.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === m || h === v || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === p || h.$$typeof === w || h.$$typeof === C || h.$$typeof === f);
  }, we.typeOf = x, we;
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
var ps;
function ku() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function x(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === s || S === i || S === m || S === v || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === g || S.$$typeof === a || S.$$typeof === c || S.$$typeof === d || S.$$typeof === p || S.$$typeof === w || S.$$typeof === C || S.$$typeof === f);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ne = S.$$typeof;
        switch (ne) {
          case t:
            var P = S.type;
            switch (P) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case m:
                return P;
              default:
                var ie = P && P.$$typeof;
                switch (ie) {
                  case c:
                  case d:
                  case y:
                  case g:
                  case a:
                    return ie;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, $ = u, O = c, F = a, A = t, N = d, B = r, W = y, V = g, L = n, D = s, k = i, z = m, q = !1;
    function Q(S) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || E(S) === l;
    }
    function _(S) {
      return E(S) === u;
    }
    function j(S) {
      return E(S) === c;
    }
    function G(S) {
      return E(S) === a;
    }
    function ee(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function Y(S) {
      return E(S) === d;
    }
    function K(S) {
      return E(S) === r;
    }
    function X(S) {
      return E(S) === y;
    }
    function Z(S) {
      return E(S) === g;
    }
    function H(S) {
      return E(S) === n;
    }
    function J(S) {
      return E(S) === s;
    }
    function te(S) {
      return E(S) === i;
    }
    function le(S) {
      return E(S) === m;
    }
    Re.AsyncMode = h, Re.ConcurrentMode = $, Re.ContextConsumer = O, Re.ContextProvider = F, Re.Element = A, Re.ForwardRef = N, Re.Fragment = B, Re.Lazy = W, Re.Memo = V, Re.Portal = L, Re.Profiler = D, Re.StrictMode = k, Re.Suspense = z, Re.isAsyncMode = Q, Re.isConcurrentMode = _, Re.isContextConsumer = j, Re.isContextProvider = G, Re.isElement = ee, Re.isForwardRef = Y, Re.isFragment = K, Re.isLazy = X, Re.isMemo = Z, Re.isPortal = H, Re.isProfiler = J, Re.isStrictMode = te, Re.isSuspense = le, Re.isValidElementType = x, Re.typeOf = E;
  }()), Re;
}
process.env.NODE_ENV === "production" ? qo.exports = Mu() : qo.exports = ku();
var ju = qo.exports, Fa = ju, Au = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Du = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Va = {};
Va[Fa.ForwardRef] = Au;
Va[Fa.Memo] = Du;
var Lu = !0;
function fi(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var no = function(t, n, r) {
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
  Lu === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, ro = function(t, n, r) {
  no(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Fu(e) {
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
var Vu = {
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
}, ms = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Bu = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", zu = /[A-Z]|^ms/g, Ba = /_EMO_([^_]+?)_([^]*?)_EMO_/g, pi = function(t) {
  return t.charCodeAt(1) === 45;
}, hs = function(t) {
  return t != null && typeof t != "boolean";
}, _o = /* @__PURE__ */ Na(function(e) {
  return pi(e) ? e : e.replace(zu, "-$&").toLowerCase();
}), Lr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ba, function(r, i, s) {
          return ht = {
            name: i,
            styles: s,
            next: ht
          }, i;
        });
  }
  return Vu[t] !== 1 && !pi(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var Uu = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Wu = ["normal", "none", "initial", "inherit", "unset"], Yu = Lr, qu = /^-ms-/, Hu = /-(.)/g, vs = {};
  Lr = function(t, n) {
    if (t === "content" && (typeof n != "string" || Wu.indexOf(n) === -1 && !Uu.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = Yu(t, n);
    return r !== "" && !pi(t) && t.indexOf("-") !== -1 && vs[t] === void 0 && (vs[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(qu, "ms-").replace(Hu, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var za = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Jn(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(za);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return ht = {
          name: n.name,
          styles: n.styles,
          next: ht
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            ht = {
              name: r.name,
              styles: r.styles,
              next: ht
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return Gu(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = ht, a = n(e);
        return ht = s, Jn(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = n.replace(Ba, function(d, m, v) {
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
function Gu(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += Jn(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : hs(a) && (r += _o(s) + ":" + Lr(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(za);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            hs(a[c]) && (r += _o(s) + ":" + Lr(s, a[c]) + ";");
        else {
          var l = Jn(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += _o(s) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Bu), r += s + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var ys = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ua;
process.env.NODE_ENV !== "production" && (Ua = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ht, vn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  ht = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (i = !1, s += Jn(r, n, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(ms), s += a[0]);
  for (var c = 1; c < t.length; c++)
    s += Jn(r, n, t[c]), i && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(ms), s += a[c]);
  var l;
  process.env.NODE_ENV !== "production" && (s = s.replace(Ua, function(v) {
    return l = v, "";
  })), ys.lastIndex = 0;
  for (var u = "", d; (d = ys.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var m = Fu(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: s,
    map: l,
    next: ht,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: s,
    next: ht
  };
}, Ku = function(t) {
  return t();
}, Wa = T["useInsertionEffect"] ? T["useInsertionEffect"] : !1, mi = Wa || Ku, gs = Wa || T.useLayoutEffect, Xu = {}.hasOwnProperty, hi = /* @__PURE__ */ T.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Iu({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (hi.displayName = "EmotionCacheContext");
hi.Provider;
var oo = function(t) {
  return /* @__PURE__ */ Qc(function(n, r) {
    var i = qn(hi);
    return t(n, i, r);
  });
}, Tn = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Tn.displayName = "EmotionThemeContext");
var bs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", xs = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ju = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return no(n, r, i), mi(function() {
    return ro(n, r, i);
  }), null;
}, Zu = /* @__PURE__ */ oo(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[bs], s = [r], a = "";
  typeof e.className == "string" ? a = fi(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = vn(s, void 0, T.useContext(Tn));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[xs];
    l && (c = vn([c, "label:" + l + ";"]));
  }
  a += t.key + "-" + c.name;
  var u = {};
  for (var d in e)
    Xu.call(e, d) && d !== "css" && d !== bs && (process.env.NODE_ENV === "production" || d !== xs) && (u[d] = e[d]);
  return u.ref = n, u.className = a, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Ju, {
    cache: t,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ T.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (Zu.displayName = "EmotionCssPropInternal");
var Qu = {
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
}, Es = !1, ed = /* @__PURE__ */ oo(function(e, t) {
  process.env.NODE_ENV !== "production" && !Es && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Es = !0);
  var n = e.styles, r = vn([n], void 0, T.useContext(Tn)), i = T.useRef();
  return gs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), i.current = [a, c], function() {
      a.flush();
    };
  }, [t]), gs(function() {
    var s = i.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && ro(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (ed.displayName = "EmotionGlobal");
function yi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return vn(t);
}
var or = function() {
  var t = yi.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, td = function e(t) {
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
function nd(e, t, n) {
  var r = [], i = fi(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var rd = function(t) {
  var n = t.cache, r = t.serializedArr;
  return mi(function() {
    for (var i = 0; i < r.length; i++)
      ro(n, r[i], !1);
  }), null;
}, od = /* @__PURE__ */ oo(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), m = 0; m < u; m++)
      d[m] = arguments[m];
    var v = vn(d, t.registered);
    return r.push(v), no(t, v, !1), t.key + "-" + v.name;
  }, s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), m = 0; m < u; m++)
      d[m] = arguments[m];
    return nd(t.registered, i, td(d));
  }, a = {
    css: i,
    cx: s,
    theme: T.useContext(Tn)
  }, c = e.children(a);
  return n = !0, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(rd, {
    cache: t,
    serializedArr: r
  }), c);
});
process.env.NODE_ENV !== "production" && (od.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Ts = !0, id = typeof jest < "u" || typeof vi < "u";
  if (Ts && !id) {
    var ws = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Ts ? window : global
    ), Rs = "__EMOTION_REACT_" + Qu.version.split(".")[0] + "__";
    ws[Rs] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), ws[Rs] = !0;
  }
}
var sd = Zl, ad = function(t) {
  return t !== "theme";
}, Os = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? sd : ad;
}, Cs = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Ps = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, cd = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return no(n, r, i), mi(function() {
    return ro(n, r, i);
  }), null;
}, ld = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var c = Cs(t, n, r), l = c || Os(i), u = !l("as");
  return function() {
    var d = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && m.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Ps), m.push(d[0][0]);
      for (var v = d.length, g = 1; g < v; g++)
        process.env.NODE_ENV !== "production" && d[0][g] === void 0 && console.error(Ps), m.push(d[g], d[0][g]);
    }
    var y = oo(function(f, p, w) {
      var C = u && f.as || i, x = "", E = [], h = f;
      if (f.theme == null) {
        h = {};
        for (var $ in f)
          h[$] = f[$];
        h.theme = T.useContext(Tn);
      }
      typeof f.className == "string" ? x = fi(p.registered, E, f.className) : f.className != null && (x = f.className + " ");
      var O = vn(m.concat(E), p.registered, h);
      x += p.key + "-" + O.name, a !== void 0 && (x += " " + a);
      var F = u && c === void 0 ? Os(C) : l, A = {};
      for (var N in f)
        u && N === "as" || // $FlowFixMe
        F(N) && (A[N] = f[N]);
      return A.className = x, A.ref = w, /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(cd, {
        cache: p,
        serialized: O,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ T.createElement(C, A));
    });
    return y.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = i, y.__emotion_styles = m, y.__emotion_forwardProp = c, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(f, p) {
      return e(f, Uo({}, n, p, {
        shouldForwardProp: Cs(y, p, !0)
      })).apply(void 0, m);
    }, y;
  };
}, ud = [
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
], Ho = ld.bind();
ud.forEach(function(e) {
  Ho[e] = Ho(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function dd(e, t) {
  const n = Ho(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const fd = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, pd = ["values", "unit", "step"], md = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => R({}, n, {
    [r.key]: r.val
  }), {});
};
function hd(e) {
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
  } = e, i = ae(e, pd), s = md(t), a = Object.keys(s);
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
  function m(v) {
    const g = a.indexOf(v);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(v, a[a.indexOf(v) + 1]).replace("@media", "@media not all and");
  }
  return R({
    keys: a,
    values: s,
    up: c,
    down: l,
    between: u,
    only: d,
    not: m,
    unit: n
  }, i);
}
const vd = {
  borderRadius: 4
}, yd = vd, gd = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, Vt = gd;
function zn(e, t) {
  return t ? yt(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const gi = {
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
}, Ss = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${gi[e]}px)`
};
function Nt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Ss;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Ss;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(s.values || gi).indexOf(c) !== -1) {
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
function bd(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function xd(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function io(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function Fr(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = io(e, n) || r, t && (i = t(i, r, e)), i;
}
function Pe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = io(l, r) || {};
    return Nt(a, c, (m) => {
      let v = Fr(u, i, m);
      return m === v && typeof m == "string" && (v = Fr(u, i, `${t}${m === "default" ? "" : me(m)}`, m)), n === !1 ? v : {
        [n]: v
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Vt
  } : {}, s.filterProps = [t], s;
}
function Ed(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Td = {
  m: "margin",
  p: "padding"
}, wd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $s = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Rd = Ed((e) => {
  if (e.length > 2)
    if ($s[e])
      e = $s[e];
    else
      return [e];
  const [t, n] = e.split(""), r = Td[t], i = wd[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), so = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ao = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Od = [...so, ...ao];
function ir(e, t, n, r) {
  var i;
  const s = (i = io(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ya(e) {
  return ir(e, "spacing", 8, "spacing");
}
function sr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Cd(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = sr(t, n), r), {});
}
function Pd(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = Rd(n), s = Cd(i, r), a = e[n];
  return Nt(e, a, s);
}
function qa(e, t) {
  const n = Ya(e.theme);
  return Object.keys(e).map((r) => Pd(e, t, r, n)).reduce(zn, {});
}
function Fe(e) {
  return qa(e, so);
}
Fe.propTypes = process.env.NODE_ENV !== "production" ? so.reduce((e, t) => (e[t] = Vt, e), {}) : {};
Fe.filterProps = so;
function Ve(e) {
  return qa(e, ao);
}
Ve.propTypes = process.env.NODE_ENV !== "production" ? ao.reduce((e, t) => (e[t] = Vt, e), {}) : {};
Ve.filterProps = ao;
process.env.NODE_ENV !== "production" && Od.reduce((e, t) => (e[t] = Vt, e), {});
function Sd(e = 8) {
  if (e.mui)
    return e;
  const t = Ya({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function co(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? zn(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function Tt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const $d = Pe({
  prop: "border",
  themeKey: "borders",
  transform: Tt
}), _d = Pe({
  prop: "borderTop",
  themeKey: "borders",
  transform: Tt
}), Nd = Pe({
  prop: "borderRight",
  themeKey: "borders",
  transform: Tt
}), Id = Pe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Tt
}), Md = Pe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Tt
}), kd = Pe({
  prop: "borderColor",
  themeKey: "palette"
}), jd = Pe({
  prop: "borderTopColor",
  themeKey: "palette"
}), Ad = Pe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Dd = Pe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ld = Pe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), lo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ir(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: sr(t, r)
    });
    return Nt(e, e.borderRadius, n);
  }
  return null;
};
lo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Vt
} : {};
lo.filterProps = ["borderRadius"];
co($d, _d, Nd, Id, Md, kd, jd, Ad, Dd, Ld, lo);
const uo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ir(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: sr(t, r)
    });
    return Nt(e, e.gap, n);
  }
  return null;
};
uo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Vt
} : {};
uo.filterProps = ["gap"];
const fo = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ir(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: sr(t, r)
    });
    return Nt(e, e.columnGap, n);
  }
  return null;
};
fo.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Vt
} : {};
fo.filterProps = ["columnGap"];
const po = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ir(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: sr(t, r)
    });
    return Nt(e, e.rowGap, n);
  }
  return null;
};
po.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Vt
} : {};
po.filterProps = ["rowGap"];
const Fd = Pe({
  prop: "gridColumn"
}), Vd = Pe({
  prop: "gridRow"
}), Bd = Pe({
  prop: "gridAutoFlow"
}), zd = Pe({
  prop: "gridAutoColumns"
}), Ud = Pe({
  prop: "gridAutoRows"
}), Wd = Pe({
  prop: "gridTemplateColumns"
}), Yd = Pe({
  prop: "gridTemplateRows"
}), qd = Pe({
  prop: "gridTemplateAreas"
}), Hd = Pe({
  prop: "gridArea"
});
co(uo, fo, po, Fd, Vd, Bd, zd, Ud, Wd, Yd, qd, Hd);
function pn(e, t) {
  return t === "grey" ? t : e;
}
const Gd = Pe({
  prop: "color",
  themeKey: "palette",
  transform: pn
}), Kd = Pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: pn
}), Xd = Pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: pn
});
co(Gd, Kd, Xd);
function at(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Jd = Pe({
  prop: "width",
  transform: at
}), bi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || gi[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: at(n)
      };
    };
    return Nt(e, e.maxWidth, t);
  }
  return null;
};
bi.filterProps = ["maxWidth"];
const Zd = Pe({
  prop: "minWidth",
  transform: at
}), Qd = Pe({
  prop: "height",
  transform: at
}), ef = Pe({
  prop: "maxHeight",
  transform: at
}), tf = Pe({
  prop: "minHeight",
  transform: at
});
Pe({
  prop: "size",
  cssProperty: "width",
  transform: at
});
Pe({
  prop: "size",
  cssProperty: "height",
  transform: at
});
const nf = Pe({
  prop: "boxSizing"
});
co(Jd, bi, Zd, Qd, ef, tf, nf);
const rf = {
  // borders
  border: {
    themeKey: "borders",
    transform: Tt
  },
  borderTop: {
    themeKey: "borders",
    transform: Tt
  },
  borderRight: {
    themeKey: "borders",
    transform: Tt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Tt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Tt
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
    style: lo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: pn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: pn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: pn
  },
  // spacing
  p: {
    style: Ve
  },
  pt: {
    style: Ve
  },
  pr: {
    style: Ve
  },
  pb: {
    style: Ve
  },
  pl: {
    style: Ve
  },
  px: {
    style: Ve
  },
  py: {
    style: Ve
  },
  padding: {
    style: Ve
  },
  paddingTop: {
    style: Ve
  },
  paddingRight: {
    style: Ve
  },
  paddingBottom: {
    style: Ve
  },
  paddingLeft: {
    style: Ve
  },
  paddingX: {
    style: Ve
  },
  paddingY: {
    style: Ve
  },
  paddingInline: {
    style: Ve
  },
  paddingInlineStart: {
    style: Ve
  },
  paddingInlineEnd: {
    style: Ve
  },
  paddingBlock: {
    style: Ve
  },
  paddingBlockStart: {
    style: Ve
  },
  paddingBlockEnd: {
    style: Ve
  },
  m: {
    style: Fe
  },
  mt: {
    style: Fe
  },
  mr: {
    style: Fe
  },
  mb: {
    style: Fe
  },
  ml: {
    style: Fe
  },
  mx: {
    style: Fe
  },
  my: {
    style: Fe
  },
  margin: {
    style: Fe
  },
  marginTop: {
    style: Fe
  },
  marginRight: {
    style: Fe
  },
  marginBottom: {
    style: Fe
  },
  marginLeft: {
    style: Fe
  },
  marginX: {
    style: Fe
  },
  marginY: {
    style: Fe
  },
  marginInline: {
    style: Fe
  },
  marginInlineStart: {
    style: Fe
  },
  marginInlineEnd: {
    style: Fe
  },
  marginBlock: {
    style: Fe
  },
  marginBlockStart: {
    style: Fe
  },
  marginBlockEnd: {
    style: Fe
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
    style: uo
  },
  rowGap: {
    style: po
  },
  columnGap: {
    style: fo
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
    style: bi
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
}, mo = rf;
function of(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function sf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function af() {
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
      style: m
    } = c;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const v = io(i, u) || {};
    return m ? m(a) : Nt(a, r, (y) => {
      let f = Fr(v, d, y);
      return y === f && typeof y == "string" && (f = Fr(v, d, `${n}${y === "default" ? "" : me(y)}`, y)), l === !1 ? f : {
        [l]: f
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
    const a = (r = s.unstable_sxConfig) != null ? r : mo;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(s);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = bd(s.breakpoints), m = Object.keys(d);
      let v = d;
      return Object.keys(u).forEach((g) => {
        const y = sf(u[g], s);
        if (y != null)
          if (typeof y == "object")
            if (a[g])
              v = zn(v, e(g, y, s, a));
            else {
              const f = Nt({
                theme: s
              }, y, (p) => ({
                [g]: p
              }));
              of(f, y) ? v[g] = t({
                sx: y,
                theme: s
              }) : v = zn(v, f);
            }
          else
            v = zn(v, e(g, y, s, a));
      }), xd(m, v);
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return t;
}
const Ha = af();
Ha.filterProps = ["sx"];
const xi = Ha, cf = ["breakpoints", "palette", "spacing", "shape"];
function Ei(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = ae(e, cf), c = hd(n), l = Sd(i);
  let u = yt({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: R({
      mode: "light"
    }, r),
    spacing: l,
    shape: R({}, yd, s)
  }, a);
  return u = t.reduce((d, m) => yt(d, m), u), u.unstable_sxConfig = R({}, mo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return xi({
      sx: m,
      theme: this
    });
  }, u;
}
function lf(e) {
  return Object.keys(e).length === 0;
}
function Ga(e = null) {
  const t = T.useContext(Tn);
  return !t || lf(t) ? e : t;
}
const uf = Ei();
function Ka(e = uf) {
  return Ga(e);
}
const df = ["sx"], ff = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : mo;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function pf(e) {
  const {
    sx: t
  } = e, n = ae(e, df), {
    systemProps: r,
    otherProps: i
  } = ff(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return St(c) ? R({}, r, c) : r;
  } : s = R({}, r, t), R({}, i, {
    sx: s
  });
}
function Xa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Xa(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function ce() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Xa(e)) && (r && (r += " "), r += t);
  return r;
}
const mf = ["variant"];
function _s(e) {
  return e.length === 0;
}
function Ja(e) {
  const {
    variant: t
  } = e, n = ae(e, mf);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += _s(r) ? e[i] : me(e[i]) : r += `${_s(r) ? i : me(i)}${me(e[i].toString())}`;
  }), r;
}
const hf = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function vf(e) {
  return Object.keys(e).length === 0;
}
function yf(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const gf = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Vr = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = Ja(n.props);
    t[r] = n.style;
  }), t;
}, bf = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Vr(n);
}, Br = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, i = [];
  return n && n.forEach((s) => {
    let a = !0;
    Object.keys(s.props).forEach((c) => {
      r[c] !== s.props[c] && e[c] !== s.props[c] && (a = !1);
    }), a && i.push(t[Ja(s.props)]);
  }), i;
}, xf = (e, t, n, r) => {
  var i;
  const s = n == null || (i = n.components) == null || (i = i[r]) == null ? void 0 : i.variants;
  return Br(e, t, s);
};
function Ir(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ef = Ei(), Ns = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Mr({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return vf(t) ? e : t[n] || t;
}
function Tf(e) {
  return e ? (t, n) => n[e] : null;
}
const Is = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const i = e(R({}, t, {
    theme: Mr(R({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let s;
  if (i && i.variants && (s = i.variants, delete i.variants), s) {
    const a = Br(t, Vr(s), s);
    return [i, ...a];
  }
  return i;
};
function wf(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Ef,
    rootShouldForwardProp: r = Ir,
    slotShouldForwardProp: i = Ir
  } = e, s = (a) => xi(R({}, a, {
    theme: Mr(R({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, c = {}) => {
    fd(a, (E) => E.filter((h) => !(h != null && h.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: d,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: v = Tf(Ns(u))
    } = c, g = ae(c, hf), y = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = m || !1;
    let p;
    process.env.NODE_ENV !== "production" && l && (p = `${l}-${Ns(u || "Root")}`);
    let w = Ir;
    u === "Root" || u === "root" ? w = r : u ? w = i : yf(a) && (w = void 0);
    const C = dd(a, R({
      shouldForwardProp: w,
      label: p
    }, g)), x = (E, ...h) => {
      const $ = h ? h.map((N) => {
        if (typeof N == "function" && N.__emotion_real !== N)
          return (B) => Is({
            styledArg: N,
            props: B,
            defaultTheme: n,
            themeId: t
          });
        if (St(N)) {
          let B = N, W;
          return N && N.variants && (W = N.variants, delete B.variants, B = (V) => {
            let L = N;
            return Br(V, Vr(W), W).forEach((k) => {
              L = yt(L, k);
            }), L;
          }), B;
        }
        return N;
      }) : [];
      let O = E;
      if (St(E)) {
        let N;
        E && E.variants && (N = E.variants, delete O.variants, O = (B) => {
          let W = E;
          return Br(B, Vr(N), N).forEach((L) => {
            W = yt(W, L);
          }), W;
        });
      } else
        typeof E == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        E.__emotion_real !== E && (O = (N) => Is({
          styledArg: E,
          props: N,
          defaultTheme: n,
          themeId: t
        }));
      l && v && $.push((N) => {
        const B = Mr(R({}, N, {
          defaultTheme: n,
          themeId: t
        })), W = gf(l, B);
        if (W) {
          const V = {};
          return Object.entries(W).forEach(([L, D]) => {
            V[L] = typeof D == "function" ? D(R({}, N, {
              theme: B
            })) : D;
          }), v(N, V);
        }
        return null;
      }), l && !y && $.push((N) => {
        const B = Mr(R({}, N, {
          defaultTheme: n,
          themeId: t
        }));
        return xf(N, bf(l, B), B, l);
      }), f || $.push(s);
      const F = $.length - h.length;
      if (Array.isArray(E) && F > 0) {
        const N = new Array(F).fill("");
        O = [...E, ...N], O.raw = [...E.raw, ...N];
      }
      const A = C(O, ...$);
      if (process.env.NODE_ENV !== "production") {
        let N;
        l && (N = `${l}${me(u || "")}`), N === void 0 && (N = `Styled(${Nl(a)})`), A.displayName = N;
      }
      return a.muiName && (A.muiName = a.muiName), A;
    };
    return C.withConfig && (x.withConfig = C.withConfig), x;
  };
}
function Rf(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : si(t.components[n].defaultProps, r);
}
function Of({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = Ka(n);
  return r && (i = i[r] || i), Rf({
    theme: i,
    name: t,
    props: e
  });
}
function Ti(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function Cf(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xt(Cf(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : mn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : mn(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function ho(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Pf(e) {
  e = Xt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), ho({
    type: c,
    values: l
  });
}
function Go(e) {
  e = Xt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xt(Pf(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ms(e, t) {
  const n = Go(e), r = Go(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function je(e, t) {
  return e = Xt(e), t = Ti(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ho(e);
}
function Za(e, t) {
  if (e = Xt(e), t = Ti(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ho(e);
}
function Qa(e, t) {
  if (e = Xt(e), t = Ti(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ho(e);
}
function ks(e, t = 0.15) {
  return Go(e) > 0.5 ? Za(e, t) : Qa(e, t);
}
function Sf(e, t) {
  return R({
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
const $f = ["mode", "contrastThreshold", "tonalOffset"], js = {
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
    paper: Hn.white,
    default: Hn.white
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
}, No = {
  text: {
    primary: Hn.white,
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
    active: Hn.white,
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
function As(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Qa(e.main, i) : t === "dark" && (e.dark = Za(e.main, s)));
}
function _f(e = "light") {
  return e === "dark" ? {
    main: rn[200],
    light: rn[50],
    dark: rn[400]
  } : {
    main: rn[700],
    light: rn[400],
    dark: rn[800]
  };
}
function Nf(e = "light") {
  return e === "dark" ? {
    main: nn[200],
    light: nn[50],
    dark: nn[400]
  } : {
    main: nn[500],
    light: nn[300],
    dark: nn[700]
  };
}
function If(e = "light") {
  return e === "dark" ? {
    main: tn[500],
    light: tn[300],
    dark: tn[700]
  } : {
    main: tn[700],
    light: tn[400],
    dark: tn[800]
  };
}
function Mf(e = "light") {
  return e === "dark" ? {
    main: on[400],
    light: on[300],
    dark: on[700]
  } : {
    main: on[700],
    light: on[500],
    dark: on[900]
  };
}
function kf(e = "light") {
  return e === "dark" ? {
    main: sn[400],
    light: sn[300],
    dark: sn[700]
  } : {
    main: sn[800],
    light: sn[500],
    dark: sn[900]
  };
}
function jf(e = "light") {
  return e === "dark" ? {
    main: Mn[400],
    light: Mn[300],
    dark: Mn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mn[500],
    dark: Mn[900]
  };
}
function Af(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = ae(e, $f), s = e.primary || _f(t), a = e.secondary || Nf(t), c = e.error || If(t), l = e.info || Mf(t), u = e.success || kf(t), d = e.warning || jf(t);
  function m(f) {
    const p = Ms(f, No.text.primary) >= n ? No.text.primary : js.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const w = Ms(f, p);
      w < 3 && console.error([`MUI: The contrast ratio of ${w}:1 for ${p} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return p;
  }
  const v = ({
    color: f,
    name: p,
    mainShade: w = 500,
    lightShade: C = 300,
    darkShade: x = 700
  }) => {
    if (f = R({}, f), !f.main && f[w] && (f.main = f[w]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${w}\` property.` : mn(11, p ? ` (${p})` : "", w));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${p ? ` (${p})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : mn(12, p ? ` (${p})` : "", JSON.stringify(f.main)));
    return As(f, "light", C, r), As(f, "dark", x, r), f.contrastText || (f.contrastText = m(f.main)), f;
  }, g = {
    dark: No,
    light: js
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), yt(R({
    // A collection of common colors.
    common: R({}, Hn),
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
    grey: pl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: v,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), i);
}
const Df = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Lf(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ds = {
  textTransform: "uppercase"
}, Ls = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ff(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Ls,
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
    pxToRem: m
  } = n, v = ae(n, Df);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, y = m || ((w) => `${w / u * g}rem`), f = (w, C, x, E, h) => R({
    fontFamily: r,
    fontWeight: w,
    fontSize: y(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: x
  }, r === Ls ? {
    letterSpacing: `${Lf(E / C)}em`
  } : {}, h, d), p = {
    h1: f(s, 96, 1.167, -1.5),
    h2: f(s, 60, 1.2, -0.5),
    h3: f(a, 48, 1.167, 0),
    h4: f(a, 34, 1.235, 0.25),
    h5: f(a, 24, 1.334, 0),
    h6: f(c, 20, 1.6, 0.15),
    subtitle1: f(a, 16, 1.75, 0.15),
    subtitle2: f(c, 14, 1.57, 0.1),
    body1: f(a, 16, 1.5, 0.15),
    body2: f(a, 14, 1.43, 0.15),
    button: f(c, 14, 1.75, 0.4, Ds),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, Ds),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return yt(R({
    htmlFontSize: u,
    pxToRem: y,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, p), v, {
    clone: !1
    // No need to clone deep
  });
}
const Vf = 0.2, Bf = 0.14, zf = 0.12;
function Ne(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Vf})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bf})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${zf})`].join(",");
}
const Uf = ["none", Ne(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ne(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ne(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ne(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ne(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ne(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ne(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ne(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ne(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ne(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ne(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ne(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ne(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ne(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ne(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ne(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ne(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ne(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ne(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ne(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ne(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ne(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ne(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ne(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Wf = Uf, Yf = ["duration", "easing", "delay"], qf = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Hf = {
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
function Fs(e) {
  return `${Math.round(e)}ms`;
}
function Gf(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Kf(e) {
  const t = R({}, qf, e.easing), n = R({}, Hf, e.duration);
  return R({
    getAutoHeightDuration: Gf,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = s, u = ae(s, Yf);
      if (process.env.NODE_ENV !== "production") {
        const d = (v) => typeof v == "string", m = (v) => !isNaN(parseFloat(v));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !m(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : Fs(a)} ${c} ${typeof l == "string" ? l : Fs(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Xf = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Jf = Xf, Zf = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Qf(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = ae(e, Zf);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : mn(18));
  const c = Af(r), l = Ei(e);
  let u = yt(l, {
    mixins: Sf(l.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Wf.slice(),
    typography: Ff(c, s),
    transitions: Kf(i),
    zIndex: R({}, Jf)
  });
  if (u = yt(u, a), u = t.reduce((d, m) => yt(d, m), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (v, g) => {
      let y;
      for (y in v) {
        const f = v[y];
        if (d.indexOf(y) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const p = _e("", y);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(v, null, 2), "", `Instead, you need to use the '&.${p}' syntax:`, JSON.stringify({
              root: {
                [`&.${p}`]: f
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
      g && v.indexOf("Mui") === 0 && m(g, v);
    });
  }
  return u.unstable_sxConfig = R({}, mo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(m) {
    return xi({
      sx: m,
      theme: this
    });
  }, u;
}
const ep = Qf(), wi = ep;
function ar() {
  const e = Ka(wi);
  return process.env.NODE_ENV !== "production" && T.useDebugValue(e), e[ai] || e;
}
function Me({
  props: e,
  name: t
}) {
  return Of({
    props: e,
    name: t,
    defaultTheme: wi,
    themeId: ai
  });
}
const cr = (e) => Ir(e) && e !== "classes", tp = wf({
  themeId: ai,
  defaultTheme: wi,
  rootShouldForwardProp: cr
}), ue = tp, np = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Vs = np;
function rp(e) {
  return _e("MuiSvgIcon", e);
}
Ie("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const op = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ip = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${me(t)}`, `fontSize${me(n)}`]
  };
  return Ae(i, rp, r);
}, sp = ue("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${me(n.color)}`], t[`fontSize${me(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, c, l, u, d, m, v, g, y;
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
    color: (m = (v = (e.vars || e).palette) == null || (v = v[t.color]) == null ? void 0 : v.main) != null ? m : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ri = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    titleAccess: m,
    viewBox: v = "0 0 24 24"
  } = r, g = ae(r, op), y = /* @__PURE__ */ T.isValidElement(i) && i.type === "svg", f = R({}, r, {
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: y
  }), p = {};
  d || (p.viewBox = v);
  const w = ip(f);
  return /* @__PURE__ */ I.jsxs(sp, R({
    as: c,
    className: ce(w.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n
  }, p, g, y && i.props, {
    ownerState: f,
    children: [y ? i.props.children : i, m ? /* @__PURE__ */ I.jsx("title", {
      children: m
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
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
Ri.muiName = "SvgIcon";
const Bs = Ri;
function wn(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ I.jsx(Bs, R({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = Bs.muiName, /* @__PURE__ */ T.memo(/* @__PURE__ */ T.forwardRef(n));
}
var Ko = { exports: {} }, Oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function ap() {
  if (zs)
    return Oe;
  zs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function f(p) {
    if (typeof p == "object" && p !== null) {
      var w = p.$$typeof;
      switch (w) {
        case e:
          switch (p = p.type, p) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case a:
                case l:
                case v:
                case m:
                case s:
                  return p;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return Oe.ContextConsumer = a, Oe.ContextProvider = s, Oe.Element = e, Oe.ForwardRef = l, Oe.Fragment = n, Oe.Lazy = v, Oe.Memo = m, Oe.Portal = t, Oe.Profiler = i, Oe.StrictMode = r, Oe.Suspense = u, Oe.SuspenseList = d, Oe.isAsyncMode = function() {
    return !1;
  }, Oe.isConcurrentMode = function() {
    return !1;
  }, Oe.isContextConsumer = function(p) {
    return f(p) === a;
  }, Oe.isContextProvider = function(p) {
    return f(p) === s;
  }, Oe.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, Oe.isForwardRef = function(p) {
    return f(p) === l;
  }, Oe.isFragment = function(p) {
    return f(p) === n;
  }, Oe.isLazy = function(p) {
    return f(p) === v;
  }, Oe.isMemo = function(p) {
    return f(p) === m;
  }, Oe.isPortal = function(p) {
    return f(p) === t;
  }, Oe.isProfiler = function(p) {
    return f(p) === i;
  }, Oe.isStrictMode = function(p) {
    return f(p) === r;
  }, Oe.isSuspense = function(p) {
    return f(p) === u;
  }, Oe.isSuspenseList = function(p) {
    return f(p) === d;
  }, Oe.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === n || p === i || p === r || p === u || p === d || p === g || typeof p == "object" && p !== null && (p.$$typeof === v || p.$$typeof === m || p.$$typeof === s || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
  }, Oe.typeOf = f, Oe;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Us;
function cp() {
  return Us || (Us = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = !1, f = !1, p = !1, w = !1, C = !1, x;
    x = Symbol.for("react.module.reference");
    function E(P) {
      return !!(typeof P == "string" || typeof P == "function" || P === n || P === i || C || P === r || P === u || P === d || w || P === g || y || f || p || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === m || P.$$typeof === s || P.$$typeof === a || P.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      P.$$typeof === x || P.getModuleId !== void 0));
    }
    function h(P) {
      if (typeof P == "object" && P !== null) {
        var ie = P.$$typeof;
        switch (ie) {
          case e:
            var he = P.type;
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
                  case m:
                  case s:
                    return De;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var $ = a, O = s, F = e, A = l, N = n, B = v, W = m, V = t, L = i, D = r, k = u, z = d, q = !1, Q = !1;
    function _(P) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(P) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(P) {
      return h(P) === a;
    }
    function ee(P) {
      return h(P) === s;
    }
    function Y(P) {
      return typeof P == "object" && P !== null && P.$$typeof === e;
    }
    function K(P) {
      return h(P) === l;
    }
    function X(P) {
      return h(P) === n;
    }
    function Z(P) {
      return h(P) === v;
    }
    function H(P) {
      return h(P) === m;
    }
    function J(P) {
      return h(P) === t;
    }
    function te(P) {
      return h(P) === i;
    }
    function le(P) {
      return h(P) === r;
    }
    function S(P) {
      return h(P) === u;
    }
    function ne(P) {
      return h(P) === d;
    }
    Ce.ContextConsumer = $, Ce.ContextProvider = O, Ce.Element = F, Ce.ForwardRef = A, Ce.Fragment = N, Ce.Lazy = B, Ce.Memo = W, Ce.Portal = V, Ce.Profiler = L, Ce.StrictMode = D, Ce.Suspense = k, Ce.SuspenseList = z, Ce.isAsyncMode = _, Ce.isConcurrentMode = j, Ce.isContextConsumer = G, Ce.isContextProvider = ee, Ce.isElement = Y, Ce.isForwardRef = K, Ce.isFragment = X, Ce.isLazy = Z, Ce.isMemo = H, Ce.isPortal = J, Ce.isProfiler = te, Ce.isStrictMode = le, Ce.isSuspense = S, Ce.isSuspenseList = ne, Ce.isValidElementType = E, Ce.typeOf = h;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? Ko.exports = ap() : Ko.exports = cp();
var Oi = Ko.exports;
function Xo(e, t) {
  return Xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Xo(e, t);
}
function ec(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xo(e, t);
}
const Ws = {
  disabled: !1
};
var lp = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const zr = vt.createContext(null);
var up = function(t) {
  return t.scrollTop;
}, Fn = "unmounted", Yt = "exited", qt = "entering", cn = "entered", Jo = "exiting", kt = /* @__PURE__ */ function(e) {
  ec(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, c = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? c ? (l = Yt, s.appearStatus = qt) : l = cn : r.unmountOnExit || r.mountOnEnter ? l = Fn : l = Yt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Fn ? {
      status: Yt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== qt && a !== cn && (s = qt) : (a === qt || a === cn) && (s = Jo);
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
      if (this.cancelNextCallback(), s === qt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : xr.findDOMNode(this);
          a && up(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Yt && this.setState({
        status: Fn
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [xr.findDOMNode(this), c], u = l[0], d = l[1], m = this.getTimeouts(), v = c ? m.appear : m.enter;
    if (!i && !a || Ws.disabled) {
      this.safeSetState({
        status: cn
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: qt
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(v, function() {
        s.safeSetState({
          status: cn
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : xr.findDOMNode(this);
    if (!s || Ws.disabled) {
      this.safeSetState({
        status: Yt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: Jo
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: Yt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : xr.findDOMNode(this), c = i == null && !this.props.addEndListener;
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
    if (i === Fn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = ae(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ vt.createElement(zr.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : vt.cloneElement(vt.Children.only(a), c))
    );
  }, t;
}(vt.Component);
kt.contextType = zr;
kt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = lp;
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
function an() {
}
kt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: an,
  onEntering: an,
  onEntered: an,
  onExit: an,
  onExiting: an,
  onExited: an
};
kt.UNMOUNTED = Fn;
kt.EXITED = Yt;
kt.ENTERING = qt;
kt.ENTERED = cn;
kt.EXITING = Jo;
const tc = kt;
function dp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ci(e, t) {
  var n = function(s) {
    return t && Pr(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && el.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function fp(e, t) {
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
function Gt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function pp(e, t) {
  return Ci(e.children, function(n) {
    return Sr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Gt(n, "appear", e),
      enter: Gt(n, "enter", e),
      exit: Gt(n, "exit", e)
    });
  });
}
function mp(e, t, n) {
  var r = Ci(e.children), i = fp(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (Pr(a)) {
      var c = s in t, l = s in r, u = t[s], d = Pr(u) && !u.props.in;
      l && (!c || d) ? i[s] = Sr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Gt(a, "exit", e),
        enter: Gt(a, "enter", e)
      }) : !l && c && !d ? i[s] = Sr(a, {
        in: !1
      }) : l && c && Pr(u) && (i[s] = Sr(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Gt(a, "exit", e),
        enter: Gt(a, "enter", e)
      }));
    }
  }), i;
}
var hp = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, vp = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Pi = /* @__PURE__ */ function(e) {
  ec(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(dp(s));
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
      children: l ? pp(i, c) : mp(i, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Ci(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = R({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = ae(i, ["component", "childFactory"]), l = this.state.contextValue, u = hp(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ vt.createElement(zr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ vt.createElement(zr.Provider, {
      value: l
    }, /* @__PURE__ */ vt.createElement(s, c, u));
  }, t;
}(vt.Component);
Pi.propTypes = process.env.NODE_ENV !== "production" ? {
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
Pi.defaultProps = vp;
const yp = Pi, nc = (e) => e.scrollTop;
function Ur(e, t) {
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
function gp(e) {
  return _e("MuiPaper", e);
}
Ie("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const bp = ["className", "component", "elevation", "square", "variant"], xp = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ae(s, gp, i);
}, Ep = ue("div", {
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
  return R({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && R({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${je("#fff", Vs(t.elevation))}, ${je("#fff", Vs(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), rc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = ae(r, bp), d = R({}, r, {
    component: s,
    elevation: a,
    square: c,
    variant: l
  }), m = xp(d);
  return process.env.NODE_ENV !== "production" && ar().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ I.jsx(Ep, R({
    as: s,
    ownerState: d,
    className: ce(m.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && (rc.propTypes = {
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
  elevation: Mt(Bn, (e) => {
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
const Tp = rc;
function oc(e) {
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
  } = e, [d, m] = T.useState(!1), v = ce(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, y = ce(n.child, d && n.childLeaving, r && n.childPulsate);
  return !c && !d && m(!0), T.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
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
process.env.NODE_ENV !== "production" && (oc.propTypes = {
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
const wp = Ie("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ut = wp, Rp = ["center", "classes", "className"];
let vo = (e) => e, Ys, qs, Hs, Gs;
const Zo = 550, Op = 80, Cp = or(Ys || (Ys = vo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Pp = or(qs || (qs = vo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Sp = or(Hs || (Hs = vo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), $p = ue("span", {
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
}), _p = ue(oc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Gs || (Gs = vo`
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
`), ut.rippleVisible, Cp, Zo, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ut.child, ut.childLeaving, Pp, Zo, ({
  theme: e
}) => e.transitions.easing.easeInOut, ut.childPulsate, Sp, ({
  theme: e
}) => e.transitions.easing.easeInOut), ic = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, c = ae(r, Rp), [l, u] = T.useState([]), d = T.useRef(0), m = T.useRef(null);
  T.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [l]);
  const v = T.useRef(!1), g = T.useRef(0), y = T.useRef(null), f = T.useRef(null);
  T.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const p = T.useCallback((E) => {
    const {
      pulsate: h,
      rippleX: $,
      rippleY: O,
      rippleSize: F,
      cb: A
    } = E;
    u((N) => [...N, /* @__PURE__ */ I.jsx(_p, {
      classes: {
        ripple: ce(s.ripple, ut.ripple),
        rippleVisible: ce(s.rippleVisible, ut.rippleVisible),
        ripplePulsate: ce(s.ripplePulsate, ut.ripplePulsate),
        child: ce(s.child, ut.child),
        childLeaving: ce(s.childLeaving, ut.childLeaving),
        childPulsate: ce(s.childPulsate, ut.childPulsate)
      },
      timeout: Zo,
      pulsate: h,
      rippleX: $,
      rippleY: O,
      rippleSize: F
    }, d.current)]), d.current += 1, m.current = A;
  }, [s]), w = T.useCallback((E = {}, h = {}, $ = () => {
  }) => {
    const {
      pulsate: O = !1,
      center: F = i || h.pulsate,
      fakeElement: A = !1
      // For test purposes
    } = h;
    if ((E == null ? void 0 : E.type) === "mousedown" && v.current) {
      v.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (v.current = !0);
    const N = A ? null : f.current, B = N ? N.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let W, V, L;
    if (F || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      W = Math.round(B.width / 2), V = Math.round(B.height / 2);
    else {
      const {
        clientX: D,
        clientY: k
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      W = Math.round(D - B.left), V = Math.round(k - B.top);
    }
    if (F)
      L = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), L % 2 === 0 && (L += 1);
    else {
      const D = Math.max(Math.abs((N ? N.clientWidth : 0) - W), W) * 2 + 2, k = Math.max(Math.abs((N ? N.clientHeight : 0) - V), V) * 2 + 2;
      L = Math.sqrt(D ** 2 + k ** 2);
    }
    E != null && E.touches ? y.current === null && (y.current = () => {
      p({
        pulsate: O,
        rippleX: W,
        rippleY: V,
        rippleSize: L,
        cb: $
      });
    }, g.current = setTimeout(() => {
      y.current && (y.current(), y.current = null);
    }, Op)) : p({
      pulsate: O,
      rippleX: W,
      rippleY: V,
      rippleSize: L,
      cb: $
    });
  }, [i, p]), C = T.useCallback(() => {
    w({}, {
      pulsate: !0
    });
  }, [w]), x = T.useCallback((E, h) => {
    if (clearTimeout(g.current), (E == null ? void 0 : E.type) === "touchend" && y.current) {
      y.current(), y.current = null, g.current = setTimeout(() => {
        x(E, h);
      });
      return;
    }
    y.current = null, u(($) => $.length > 0 ? $.slice(1) : $), m.current = h;
  }, []);
  return T.useImperativeHandle(n, () => ({
    pulsate: C,
    start: w,
    stop: x
  }), [C, w, x]), /* @__PURE__ */ I.jsx($p, R({
    className: ce(ut.root, s.root, a),
    ref: f
  }, c, {
    children: /* @__PURE__ */ I.jsx(yp, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (ic.propTypes = {
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
const Np = ic;
function Ip(e) {
  return _e("MuiButtonBase", e);
}
const Mp = Ie("MuiButtonBase", ["root", "disabled", "focusVisible"]), kp = Mp, jp = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Ap = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Ae({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Ip, i);
  return n && r && (a.root += ` ${r}`), a;
}, Dp = ue("button", {
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
  [`&.${kp.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), sc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    disableTouchRipple: m = !1,
    focusRipple: v = !1,
    LinkComponent: g = "a",
    onBlur: y,
    onClick: f,
    onContextMenu: p,
    onDragLeave: w,
    onFocus: C,
    onFocusVisible: x,
    onKeyDown: E,
    onKeyUp: h,
    onMouseDown: $,
    onMouseLeave: O,
    onMouseUp: F,
    onTouchEnd: A,
    onTouchMove: N,
    onTouchStart: B,
    tabIndex: W = 0,
    TouchRippleProps: V,
    touchRippleRef: L,
    type: D
  } = r, k = ae(r, jp), z = T.useRef(null), q = T.useRef(null), Q = Ke(q, L), {
    isFocusVisibleRef: _,
    onFocus: j,
    onBlur: G,
    ref: ee
  } = Pa(), [Y, K] = T.useState(!1);
  u && Y && K(!1), T.useImperativeHandle(i, () => ({
    focusVisible: () => {
      K(!0), z.current.focus();
    }
  }), []);
  const [X, Z] = T.useState(!1);
  T.useEffect(() => {
    Z(!0);
  }, []);
  const H = X && !d && !u;
  T.useEffect(() => {
    Y && v && !d && X && q.current.pulsate();
  }, [d, v, Y, X]);
  function J(se, Ze, Ct = m) {
    return Ht((bt) => (Ze && Ze(bt), !Ct && q.current && q.current[se](bt), !0));
  }
  const te = J("start", $), le = J("stop", p), S = J("stop", w), ne = J("stop", F), P = J("stop", (se) => {
    Y && se.preventDefault(), O && O(se);
  }), ie = J("start", B), he = J("stop", A), De = J("stop", N), $e = J("stop", (se) => {
    G(se), _.current === !1 && K(!1), y && y(se);
  }, !1), Qe = Ht((se) => {
    z.current || (z.current = se.currentTarget), j(se), _.current === !0 && (K(!0), x && x(se)), C && C(se);
  }), Be = () => {
    const se = z.current;
    return l && l !== "button" && !(se.tagName === "A" && se.href);
  }, Xe = T.useRef(!1), We = Ht((se) => {
    v && !Xe.current && Y && q.current && se.key === " " && (Xe.current = !0, q.current.stop(se, () => {
      q.current.start(se);
    })), se.target === se.currentTarget && Be() && se.key === " " && se.preventDefault(), E && E(se), se.target === se.currentTarget && Be() && se.key === "Enter" && !u && (se.preventDefault(), f && f(se));
  }), st = Ht((se) => {
    v && se.key === " " && q.current && Y && !se.defaultPrevented && (Xe.current = !1, q.current.stop(se, () => {
      q.current.pulsate(se);
    })), h && h(se), f && se.target === se.currentTarget && Be() && se.key === " " && !se.defaultPrevented && f(se);
  });
  let Se = l;
  Se === "button" && (k.href || k.to) && (Se = g);
  const He = {};
  Se === "button" ? (He.type = D === void 0 ? "button" : D, He.disabled = u) : (!k.href && !k.to && (He.role = "button"), u && (He["aria-disabled"] = u));
  const Je = Ke(n, ee, z);
  process.env.NODE_ENV !== "production" && T.useEffect(() => {
    H && !q.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [H]);
  const et = R({}, r, {
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: v,
    tabIndex: W,
    focusVisible: Y
  }), jt = Ap(et);
  return /* @__PURE__ */ I.jsxs(Dp, R({
    as: Se,
    className: ce(jt.root, c),
    ownerState: et,
    onBlur: $e,
    onClick: f,
    onContextMenu: le,
    onFocus: Qe,
    onKeyDown: We,
    onKeyUp: st,
    onMouseDown: te,
    onMouseLeave: P,
    onMouseUp: ne,
    onDragLeave: S,
    onTouchEnd: he,
    onTouchMove: De,
    onTouchStart: ie,
    ref: Je,
    tabIndex: u ? -1 : W,
    type: D
  }, He, k, {
    children: [a, H ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ I.jsx(Np, R({
        ref: Q,
        center: s
      }, V))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (sc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Jr,
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
  component: ii,
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
const Rn = sc;
function Lp(e) {
  return _e("MuiIconButton", e);
}
const Fp = Ie("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), Vp = Fp, Bp = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], zp = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: i,
    size: s
  } = e, a = {
    root: ["root", n && "disabled", r !== "default" && `color${me(r)}`, i && `edge${me(i)}`, `size${me(s)}`]
  };
  return Ae(a, Lp, t);
}, Up = ue(Rn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${me(n.color)}`], n.edge && t[`edge${me(n.edge)}`], t[`size${me(n.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : je(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var n;
  const r = (n = (e.vars || e).palette) == null ? void 0 : n[t.color];
  return R({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && R({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": R({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : je(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${Vp.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), ac = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: s,
    className: a,
    color: c = "default",
    disabled: l = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, m = ae(r, Bp), v = R({}, r, {
    edge: i,
    color: c,
    disabled: l,
    disableFocusRipple: u,
    size: d
  }), g = zp(v);
  return /* @__PURE__ */ I.jsx(Up, R({
    className: ce(g.root, a),
    centerRipple: !0,
    focusRipple: !u,
    disabled: l,
    ref: n,
    ownerState: v
  }, m, {
    children: s
  }));
});
process.env.NODE_ENV !== "production" && (ac.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: Mt(o.node, (e) => T.Children.toArray(e.children).some((n) => /* @__PURE__ */ T.isValidElement(n) && n.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
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
  color: o.oneOfType([o.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
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
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Wp = ac;
function Yp(e) {
  return _e("MuiTypography", e);
}
Ie("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const qp = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Hp = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${me(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Ae(c, Yp, a);
}, Gp = ue("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${me(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
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
})), Ks = {
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
}, Kp = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Xp = (e) => Kp[e] || e, cc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiTypography"
  }), i = Xp(r.color), s = pf(R({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: m = !1,
    variant: v = "body1",
    variantMapping: g = Ks
  } = s, y = ae(s, qp), f = R({}, s, {
    align: a,
    color: i,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: d,
    paragraph: m,
    variant: v,
    variantMapping: g
  }), p = l || (m ? "p" : g[v] || Ks[v]) || "span", w = Hp(f);
  return /* @__PURE__ */ I.jsx(Gp, R({
    as: p,
    ref: n,
    ownerState: f,
    className: ce(w.root, c)
  }, y));
});
process.env.NODE_ENV !== "production" && (cc.propTypes = {
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
const dn = cc;
function Wr(e) {
  return typeof e == "string";
}
function Vn(e, t, n) {
  return e === void 0 || Wr(e) ? t : R({}, t, {
    ownerState: R({}, t.ownerState, n)
  });
}
const Jp = {
  disableDefaultClasses: !1
}, Zp = /* @__PURE__ */ T.createContext(Jp);
function Qp(e) {
  const {
    disableDefaultClasses: t
  } = T.useContext(Zp);
  return (n) => t ? "" : e(n);
}
function lc(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function em(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Xs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function tm(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = ce(i == null ? void 0 : i.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className), y = R({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), f = R({}, n, i, r);
    return g.length > 0 && (f.className = g), Object.keys(y).length > 0 && (f.style = y), {
      props: f,
      internalRef: void 0
    };
  }
  const a = lc(R({}, i, r)), c = Xs(r), l = Xs(i), u = t(a), d = ce(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), m = R({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), v = R({}, u, n, l, c);
  return d.length > 0 && (v.className = d), Object.keys(m).length > 0 && (v.style = m), {
    props: v,
    internalRef: u.ref
  };
}
const nm = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ft(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = ae(e, nm), c = s ? {} : em(r, i), {
    props: l,
    internalRef: u
  } = tm(R({}, a, {
    externalSlotProps: c
  })), d = Ke(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Vn(n, R({}, l, {
    ref: d
  }), i);
}
const rm = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function om(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function im(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function sm(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || im(e));
}
function am(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(rm)).forEach((r, i) => {
    const s = om(r);
    s === -1 || !sm(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function cm() {
  return !0;
}
function Yr(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = am,
    isEnabled: a = cm,
    open: c
  } = e, l = T.useRef(!1), u = T.useRef(null), d = T.useRef(null), m = T.useRef(null), v = T.useRef(null), g = T.useRef(!1), y = T.useRef(null), f = Ke(t.ref, y), p = T.useRef(null);
  T.useEffect(() => {
    !c || !y.current || (g.current = !n);
  }, [n, c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const x = nt(y.current);
    return y.current.contains(x.activeElement) || (y.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), y.current.setAttribute("tabIndex", "-1")), g.current && y.current.focus()), () => {
      i || (m.current && m.current.focus && (l.current = !0, m.current.focus()), m.current = null);
    };
  }, [c]), T.useEffect(() => {
    if (!c || !y.current)
      return;
    const x = nt(y.current), E = (O) => {
      p.current = O, !(r || !a() || O.key !== "Tab") && x.activeElement === y.current && O.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const O = y.current;
      if (O === null)
        return;
      if (!x.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (O.contains(x.activeElement) || r && x.activeElement !== u.current && x.activeElement !== d.current)
        return;
      if (x.activeElement !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!g.current)
        return;
      let F = [];
      if ((x.activeElement === u.current || x.activeElement === d.current) && (F = s(y.current)), F.length > 0) {
        var A, N;
        const B = !!((A = p.current) != null && A.shiftKey && ((N = p.current) == null ? void 0 : N.key) === "Tab"), W = F[0], V = F[F.length - 1];
        typeof W != "string" && typeof V != "string" && (B ? V.focus() : W.focus());
      } else
        O.focus();
    };
    x.addEventListener("focusin", h), x.addEventListener("keydown", E, !0);
    const $ = setInterval(() => {
      x.activeElement && x.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval($), x.removeEventListener("focusin", h), x.removeEventListener("keydown", E, !0);
    };
  }, [n, r, i, a, c, s]);
  const w = (x) => {
    m.current === null && (m.current = x.relatedTarget), g.current = !0, v.current = x.target;
    const E = t.props.onFocus;
    E && E(x);
  }, C = (x) => {
    m.current === null && (m.current = x.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ I.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ I.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: C,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ T.cloneElement(t, {
      ref: f,
      onFocus: w
    }), /* @__PURE__ */ I.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: C,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: nr,
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
process.env.NODE_ENV !== "production" && (Yr["propTypes"] = Ra(Yr.propTypes));
var rt = "top", pt = "bottom", mt = "right", ot = "left", Si = "auto", lr = [rt, pt, mt, ot], yn = "start", Zn = "end", lm = "clippingParents", uc = "viewport", jn = "popper", um = "reference", Js = /* @__PURE__ */ lr.reduce(function(e, t) {
  return e.concat([t + "-" + yn, t + "-" + Zn]);
}, []), dc = /* @__PURE__ */ [].concat(lr, [Si]).reduce(function(e, t) {
  return e.concat([t, t + "-" + yn, t + "-" + Zn]);
}, []), dm = "beforeRead", fm = "read", pm = "afterRead", mm = "beforeMain", hm = "main", vm = "afterMain", ym = "beforeWrite", gm = "write", bm = "afterWrite", xm = [dm, fm, pm, mm, hm, vm, ym, gm, bm];
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
function Jt(e) {
  var t = lt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ft(e) {
  var t = lt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function $i(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = lt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Em(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !ft(s) || !Ot(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Tm(e) {
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
      !ft(i) || !Ot(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const wm = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Em,
  effect: Tm,
  requires: ["computeStyles"]
};
function Rt(e) {
  return e.split("-")[0];
}
var Kt = Math.max, qr = Math.min, gn = Math.round;
function Qo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fc() {
  return !/^((?!chrome|android).)*safari/i.test(Qo());
}
function bn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && ft(e) && (i = e.offsetWidth > 0 && gn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && gn(r.height) / e.offsetHeight || 1);
  var a = Jt(e) ? lt(e) : window, c = a.visualViewport, l = !fc() && n, u = (r.left + (l && c ? c.offsetLeft : 0)) / i, d = (r.top + (l && c ? c.offsetTop : 0)) / s, m = r.width / i, v = r.height / s;
  return {
    width: m,
    height: v,
    top: d,
    right: u + m,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function _i(e) {
  var t = bn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function pc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && $i(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function It(e) {
  return lt(e).getComputedStyle(e);
}
function Rm(e) {
  return ["table", "td", "th"].indexOf(Ot(e)) >= 0;
}
function Bt(e) {
  return ((Jt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function yo(e) {
  return Ot(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    ($i(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Bt(e)
  );
}
function Zs(e) {
  return !ft(e) || // https://github.com/popperjs/popper-core/issues/837
  It(e).position === "fixed" ? null : e.offsetParent;
}
function Om(e) {
  var t = /firefox/i.test(Qo()), n = /Trident/i.test(Qo());
  if (n && ft(e)) {
    var r = It(e);
    if (r.position === "fixed")
      return null;
  }
  var i = yo(e);
  for ($i(i) && (i = i.host); ft(i) && ["html", "body"].indexOf(Ot(i)) < 0; ) {
    var s = It(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ur(e) {
  for (var t = lt(e), n = Zs(e); n && Rm(n) && It(n).position === "static"; )
    n = Zs(n);
  return n && (Ot(n) === "html" || Ot(n) === "body" && It(n).position === "static") ? t : n || Om(e) || t;
}
function Ni(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Un(e, t, n) {
  return Kt(e, qr(t, n));
}
function Cm(e, t, n) {
  var r = Un(e, t, n);
  return r > n ? n : r;
}
function mc() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hc(e) {
  return Object.assign({}, mc(), e);
}
function vc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Pm = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, hc(typeof t != "number" ? t : vc(t, lr));
};
function Sm(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, c = Rt(n.placement), l = Ni(c), u = [ot, mt].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var m = Pm(i.padding, n), v = _i(s), g = l === "y" ? rt : ot, y = l === "y" ? pt : mt, f = n.rects.reference[d] + n.rects.reference[l] - a[l] - n.rects.popper[d], p = a[l] - n.rects.reference[l], w = ur(s), C = w ? l === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, x = f / 2 - p / 2, E = m[g], h = C - v[d] - m[y], $ = C / 2 - v[d] / 2 + x, O = Un(E, $, h), F = l;
    n.modifiersData[r] = (t = {}, t[F] = O, t.centerOffset = O - $, t);
  }
}
function $m(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || pc(t.elements.popper, i) && (t.elements.arrow = i));
}
const _m = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Sm,
  effect: $m,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function xn(e) {
  return e.split("-")[1];
}
var Nm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Im(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: gn(n * i) / i || 0,
    y: gn(r * i) / i || 0
  };
}
function Qs(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = a.x, g = v === void 0 ? 0 : v, y = a.y, f = y === void 0 ? 0 : y, p = typeof d == "function" ? d({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = p.x, f = p.y;
  var w = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), x = ot, E = rt, h = window;
  if (u) {
    var $ = ur(n), O = "clientHeight", F = "clientWidth";
    if ($ === lt(n) && ($ = Bt(n), It($).position !== "static" && c === "absolute" && (O = "scrollHeight", F = "scrollWidth")), $ = $, i === rt || (i === ot || i === mt) && s === Zn) {
      E = pt;
      var A = m && $ === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[O]
      );
      f -= A - r.height, f *= l ? 1 : -1;
    }
    if (i === ot || (i === rt || i === pt) && s === Zn) {
      x = mt;
      var N = m && $ === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[F]
      );
      g -= N - r.width, g *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: c
  }, u && Nm), W = d === !0 ? Im({
    x: g,
    y: f
  }, lt(n)) : {
    x: g,
    y: f
  };
  if (g = W.x, f = W.y, l) {
    var V;
    return Object.assign({}, B, (V = {}, V[E] = C ? "0" : "", V[x] = w ? "0" : "", V.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", V));
  }
  return Object.assign({}, B, (t = {}, t[E] = C ? f + "px" : "", t[x] = w ? g + "px" : "", t.transform = "", t));
}
function Mm(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: Rt(t.placement),
    variation: xn(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Qs(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const km = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mm,
  data: {}
};
var wr = {
  passive: !0
};
function jm(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, l = lt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, wr);
  }), c && l.addEventListener("resize", n.update, wr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, wr);
    }), c && l.removeEventListener("resize", n.update, wr);
  };
}
const Am = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jm,
  data: {}
};
var Dm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dm[t];
  });
}
var Lm = {
  start: "end",
  end: "start"
};
function ea(e) {
  return e.replace(/start|end/g, function(t) {
    return Lm[t];
  });
}
function Ii(e) {
  var t = lt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Mi(e) {
  return bn(Bt(e)).left + Ii(e).scrollLeft;
}
function Fm(e, t) {
  var n = lt(e), r = Bt(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = fc();
    (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + Mi(e),
    y: l
  };
}
function Vm(e) {
  var t, n = Bt(e), r = Ii(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Kt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Kt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + Mi(e), l = -r.scrollTop;
  return It(i || n).direction === "rtl" && (c += Kt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function ki(e) {
  var t = It(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function yc(e) {
  return ["html", "body", "#document"].indexOf(Ot(e)) >= 0 ? e.ownerDocument.body : ft(e) && ki(e) ? e : yc(yo(e));
}
function Wn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = yc(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = lt(r), a = i ? [s].concat(s.visualViewport || [], ki(r) ? r : []) : r, c = t.concat(a);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Wn(yo(a)))
  );
}
function ei(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Bm(e, t) {
  var n = bn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ta(e, t, n) {
  return t === uc ? ei(Fm(e, n)) : Jt(t) ? Bm(t, n) : ei(Vm(Bt(e)));
}
function zm(e) {
  var t = Wn(yo(e)), n = ["absolute", "fixed"].indexOf(It(e).position) >= 0, r = n && ft(e) ? ur(e) : e;
  return Jt(r) ? t.filter(function(i) {
    return Jt(i) && pc(i, r) && Ot(i) !== "body";
  }) : [];
}
function Um(e, t, n, r) {
  var i = t === "clippingParents" ? zm(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], c = s.reduce(function(l, u) {
    var d = ta(e, u, r);
    return l.top = Kt(d.top, l.top), l.right = qr(d.right, l.right), l.bottom = qr(d.bottom, l.bottom), l.left = Kt(d.left, l.left), l;
  }, ta(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function gc(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? Rt(r) : null, s = r ? xn(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case rt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case pt:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case mt:
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
  var u = i ? Ni(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case yn:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Zn:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Qn(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, c = n.boundary, l = c === void 0 ? lm : c, u = n.rootBoundary, d = u === void 0 ? uc : u, m = n.elementContext, v = m === void 0 ? jn : m, g = n.altBoundary, y = g === void 0 ? !1 : g, f = n.padding, p = f === void 0 ? 0 : f, w = hc(typeof p != "number" ? p : vc(p, lr)), C = v === jn ? um : jn, x = e.rects.popper, E = e.elements[y ? C : v], h = Um(Jt(E) ? E : E.contextElement || Bt(e.elements.popper), l, d, a), $ = bn(e.elements.reference), O = gc({
    reference: $,
    element: x,
    strategy: "absolute",
    placement: i
  }), F = ei(Object.assign({}, x, O)), A = v === jn ? F : $, N = {
    top: h.top - A.top + w.top,
    bottom: A.bottom - h.bottom + w.bottom,
    left: h.left - A.left + w.left,
    right: A.right - h.right + w.right
  }, B = e.modifiersData.offset;
  if (v === jn && B) {
    var W = B[i];
    Object.keys(N).forEach(function(V) {
      var L = [mt, pt].indexOf(V) >= 0 ? 1 : -1, D = [rt, pt].indexOf(V) >= 0 ? "y" : "x";
      N[V] += W[D] * L;
    });
  }
  return N;
}
function Wm(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? dc : l, d = xn(r), m = d ? c ? Js : Js.filter(function(y) {
    return xn(y) === d;
  }) : lr, v = m.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  v.length === 0 && (v = m);
  var g = v.reduce(function(y, f) {
    return y[f] = Qn(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[Rt(f)], y;
  }, {});
  return Object.keys(g).sort(function(y, f) {
    return g[y] - g[f];
  });
}
function Ym(e) {
  if (Rt(e) === Si)
    return [];
  var t = kr(e);
  return [ea(e), t, ea(t)];
}
function qm(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, v = n.altBoundary, g = n.flipVariations, y = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, p = t.options.placement, w = Rt(p), C = w === p, x = l || (C || !y ? [kr(p)] : Ym(p)), E = [p].concat(x).reduce(function(Y, K) {
      return Y.concat(Rt(K) === Si ? Wm(t, {
        placement: K,
        boundary: d,
        rootBoundary: m,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: f
      }) : K);
    }, []), h = t.rects.reference, $ = t.rects.popper, O = /* @__PURE__ */ new Map(), F = !0, A = E[0], N = 0; N < E.length; N++) {
      var B = E[N], W = Rt(B), V = xn(B) === yn, L = [rt, pt].indexOf(W) >= 0, D = L ? "width" : "height", k = Qn(t, {
        placement: B,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: u
      }), z = L ? V ? mt : ot : V ? pt : rt;
      h[D] > $[D] && (z = kr(z));
      var q = kr(z), Q = [];
      if (s && Q.push(k[W] <= 0), c && Q.push(k[z] <= 0, k[q] <= 0), Q.every(function(Y) {
        return Y;
      })) {
        A = B, F = !1;
        break;
      }
      O.set(B, Q);
    }
    if (F)
      for (var _ = y ? 3 : 1, j = function(K) {
        var X = E.find(function(Z) {
          var H = O.get(Z);
          if (H)
            return H.slice(0, K).every(function(J) {
              return J;
            });
        });
        if (X)
          return A = X, "break";
      }, G = _; G > 0; G--) {
        var ee = j(G);
        if (ee === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const Hm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: qm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function na(e, t, n) {
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
function ra(e) {
  return [rt, mt, pt, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function Gm(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = Qn(t, {
    elementContext: "reference"
  }), c = Qn(t, {
    altBoundary: !0
  }), l = na(a, r), u = na(c, i, s), d = ra(l), m = ra(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const Km = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Gm
};
function Xm(e, t, n) {
  var r = Rt(e), i = [ot, rt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * i, [ot, mt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function Jm(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = dc.reduce(function(d, m) {
    return d[m] = Xm(m, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const Zm = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jm
};
function Qm(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = gc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const eh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Qm,
  data: {}
};
function th(e) {
  return e === "x" ? "y" : "x";
}
function nh(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, v = n.tether, g = v === void 0 ? !0 : v, y = n.tetherOffset, f = y === void 0 ? 0 : y, p = Qn(t, {
    boundary: l,
    rootBoundary: u,
    padding: m,
    altBoundary: d
  }), w = Rt(t.placement), C = xn(t.placement), x = !C, E = Ni(w), h = th(E), $ = t.modifiersData.popperOffsets, O = t.rects.reference, F = t.rects.popper, A = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, N = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, W = {
    x: 0,
    y: 0
  };
  if ($) {
    if (s) {
      var V, L = E === "y" ? rt : ot, D = E === "y" ? pt : mt, k = E === "y" ? "height" : "width", z = $[E], q = z + p[L], Q = z - p[D], _ = g ? -F[k] / 2 : 0, j = C === yn ? O[k] : F[k], G = C === yn ? -F[k] : -O[k], ee = t.elements.arrow, Y = g && ee ? _i(ee) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mc(), X = K[L], Z = K[D], H = Un(0, O[k], Y[k]), J = x ? O[k] / 2 - _ - H - X - N.mainAxis : j - H - X - N.mainAxis, te = x ? -O[k] / 2 + _ + H + Z + N.mainAxis : G + H + Z + N.mainAxis, le = t.elements.arrow && ur(t.elements.arrow), S = le ? E === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, ne = (V = B == null ? void 0 : B[E]) != null ? V : 0, P = z + J - ne - S, ie = z + te - ne, he = Un(g ? qr(q, P) : q, z, g ? Kt(Q, ie) : Q);
      $[E] = he, W[E] = he - z;
    }
    if (c) {
      var De, $e = E === "x" ? rt : ot, Qe = E === "x" ? pt : mt, Be = $[h], Xe = h === "y" ? "height" : "width", We = Be + p[$e], st = Be - p[Qe], Se = [rt, ot].indexOf(w) !== -1, He = (De = B == null ? void 0 : B[h]) != null ? De : 0, Je = Se ? We : Be - O[Xe] - F[Xe] - He + N.altAxis, et = Se ? Be + O[Xe] + F[Xe] - He - N.altAxis : st, jt = g && Se ? Cm(Je, Be, et) : Un(g ? Je : We, Be, g ? et : st);
      $[h] = jt, W[h] = jt - Be;
    }
    t.modifiersData[r] = W;
  }
}
const rh = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: nh,
  requiresIfExists: ["offset"]
};
function oh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ih(e) {
  return e === lt(e) || !ft(e) ? Ii(e) : oh(e);
}
function sh(e) {
  var t = e.getBoundingClientRect(), n = gn(t.width) / e.offsetWidth || 1, r = gn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ah(e, t, n) {
  n === void 0 && (n = !1);
  var r = ft(t), i = ft(t) && sh(t), s = Bt(t), a = bn(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Ot(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ki(s)) && (c = ih(t)), ft(t) ? (l = bn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = Mi(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function ch(e) {
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
function lh(e) {
  var t = ch(e);
  return xm.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function uh(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function dh(e) {
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
var oa = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ia() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function fh(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? oa : i;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, oa, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], v = !1, g = {
      state: d,
      setOptions: function(w) {
        var C = typeof w == "function" ? w(d.options) : w;
        f(), d.options = Object.assign({}, s, d.options, C), d.scrollParents = {
          reference: Jt(c) ? Wn(c) : c.contextElement ? Wn(c.contextElement) : [],
          popper: Wn(l)
        };
        var x = lh(dh([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(E) {
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
          var w = d.elements, C = w.reference, x = w.popper;
          if (ia(C, x)) {
            d.rects = {
              reference: ah(C, ur(x), d.options.strategy === "fixed"),
              popper: _i(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var h = d.orderedModifiers[E], $ = h.fn, O = h.options, F = O === void 0 ? {} : O, A = h.name;
              typeof $ == "function" && (d = $({
                state: d,
                options: F,
                name: A,
                instance: g
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: uh(function() {
        return new Promise(function(p) {
          g.forceUpdate(), p(d);
        });
      }),
      destroy: function() {
        f(), v = !0;
      }
    };
    if (!ia(c, l))
      return g;
    g.setOptions(u).then(function(p) {
      !v && u.onFirstUpdate && u.onFirstUpdate(p);
    });
    function y() {
      d.orderedModifiers.forEach(function(p) {
        var w = p.name, C = p.options, x = C === void 0 ? {} : C, E = p.effect;
        if (typeof E == "function") {
          var h = E({
            state: d,
            name: w,
            instance: g,
            options: x
          }), $ = function() {
          };
          m.push(h || $);
        }
      });
    }
    function f() {
      m.forEach(function(p) {
        return p();
      }), m = [];
    }
    return g;
  };
}
var ph = [Am, eh, km, wm, Zm, Hm, rh, _m, Km], mh = /* @__PURE__ */ fh({
  defaultModifiers: ph
});
function hh(e) {
  return typeof e == "function" ? e() : e;
}
const er = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = T.useState(null), l = Ke(/* @__PURE__ */ T.isValidElement(r) ? r.ref : null, n);
  if (_t(() => {
    s || c(hh(i) || document.body);
  }, [i, s]), _t(() => {
    if (a && !s)
      return Vo(n, a), () => {
        Vo(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ T.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ T.cloneElement(r, u);
    }
    return /* @__PURE__ */ I.jsx(T.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ I.jsx(T.Fragment, {
    children: a && /* @__PURE__ */ tl.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (er.propTypes = {
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
  container: o.oneOfType([$t, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (er["propTypes"] = Ra(er.propTypes));
function vh(e) {
  return _e("MuiPopper", e);
}
Ie("MuiPopper", ["root"]);
const yh = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], gh = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function bh(e, t) {
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
function Hr(e) {
  return typeof e == "function" ? e() : e;
}
function go(e) {
  return e.nodeType !== void 0;
}
function xh(e) {
  return !go(e);
}
const Eh = () => Ae({
  root: ["root"]
}, Qp(vh)), Th = {}, wh = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r;
  const {
    anchorEl: i,
    children: s,
    direction: a,
    disablePortal: c,
    modifiers: l,
    open: u,
    placement: d,
    popperOptions: m,
    popperRef: v,
    slotProps: g = {},
    slots: y = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, p = ae(t, yh), w = T.useRef(null), C = Ke(w, n), x = T.useRef(null), E = Ke(x, v), h = T.useRef(E);
  _t(() => {
    h.current = E;
  }, [E]), T.useImperativeHandle(v, () => x.current, []);
  const $ = bh(d, a), [O, F] = T.useState($), [A, N] = T.useState(Hr(i));
  T.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), T.useEffect(() => {
    i && N(Hr(i));
  }, [i]), _t(() => {
    if (!A || !u)
      return;
    const D = (q) => {
      F(q.placement);
    };
    if (process.env.NODE_ENV !== "production" && A && go(A) && A.nodeType === 1) {
      const q = A.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && q.top === 0 && q.left === 0 && q.right === 0 && q.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
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
        state: q
      }) => {
        D(q);
      }
    }];
    l != null && (k = k.concat(l)), m && m.modifiers != null && (k = k.concat(m.modifiers));
    const z = mh(A, w.current, R({
      placement: $
    }, m, {
      modifiers: k
    }));
    return h.current(z), () => {
      z.destroy(), h.current(null);
    };
  }, [A, c, l, u, m, $]);
  const B = {
    placement: O
  };
  f !== null && (B.TransitionProps = f);
  const W = Eh(), V = (r = y.root) != null ? r : "div", L = Ft({
    elementType: V,
    externalSlotProps: g.root,
    externalForwardedProps: p,
    additionalProps: {
      role: "tooltip",
      ref: C
    },
    ownerState: t,
    className: W.root
  });
  return /* @__PURE__ */ I.jsx(V, R({}, L, {
    children: typeof s == "function" ? s(B) : s
  }));
}), bc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: i,
    container: s,
    direction: a = "ltr",
    disablePortal: c = !1,
    keepMounted: l = !1,
    modifiers: u,
    open: d,
    placement: m = "bottom",
    popperOptions: v = Th,
    popperRef: g,
    style: y,
    transition: f = !1,
    slotProps: p = {},
    slots: w = {}
  } = t, C = ae(t, gh), [x, E] = T.useState(!0), h = () => {
    E(!1);
  }, $ = () => {
    E(!0);
  };
  if (!l && !d && (!f || x))
    return null;
  let O;
  if (s)
    O = s;
  else if (r) {
    const N = Hr(r);
    O = N && go(N) ? nt(N).body : nt(null).body;
  }
  const F = !d && l && (!f || x) ? "none" : void 0, A = f ? {
    in: d,
    onEnter: h,
    onExited: $
  } : void 0;
  return /* @__PURE__ */ I.jsx(er, {
    disablePortal: c,
    container: O,
    children: /* @__PURE__ */ I.jsx(wh, R({
      anchorEl: r,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: n,
      open: f ? !x : d,
      placement: m,
      popperOptions: v,
      popperRef: g,
      slotProps: p,
      slots: w
    }, C, {
      style: R({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: F
      }, y),
      TransitionProps: A,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (bc.propTypes = {
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
  anchorEl: Mt(o.oneOfType([$t, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Hr(e.anchorEl);
      if (t && go(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || xh(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([$t, o.func]),
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
  popperRef: Jr,
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
function Rh(e) {
  const t = nt(e);
  return t.body === e ? Gn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Yn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function sa(e) {
  return parseInt(Gn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Oh(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function aa(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = s.indexOf(a) === -1, l = !Oh(a);
    c && l && Yn(a, i);
  });
}
function Io(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function Ch(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Rh(r)) {
      const a = Sa(nt(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${sa(r) + a}px`;
      const c = nt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${sa(l) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = nt(r).body;
    else {
      const a = r.parentElement, c = Gn(r);
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
function Ph(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Sh {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Yn(t.modalRef, !1);
    const i = Ph(n);
    aa(n, t.mount, t.modalRef, i, !0);
    const s = Io(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Io(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = Ch(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Io(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Yn(t.modalRef, n), aa(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Yn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function $h(e) {
  return typeof e == "function" ? e() : e;
}
function _h(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Nh = new Sh();
function Ih(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = Nh,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: d,
    rootRef: m
  } = e, v = T.useRef({}), g = T.useRef(null), y = T.useRef(null), f = Ke(y, m), [p, w] = T.useState(!d), C = _h(l);
  let x = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (x = !1);
  const E = () => nt(g.current), h = () => (v.current.modalRef = y.current, v.current.mount = g.current, v.current), $ = () => {
    i.mount(h(), {
      disableScrollLock: r
    }), y.current && (y.current.scrollTop = 0);
  }, O = Ht(() => {
    const k = $h(t) || E().body;
    i.add(h(), k), y.current && $();
  }), F = T.useCallback(() => i.isTopModal(h()), [i]), A = Ht((k) => {
    g.current = k, k && (d && F() ? $() : y.current && Yn(y.current, x));
  }), N = T.useCallback(() => {
    i.remove(h(), x);
  }, [x, i]);
  T.useEffect(() => () => {
    N();
  }, [N]), T.useEffect(() => {
    d ? O() : (!C || !s) && N();
  }, [d, N, C, s, O]);
  const B = (k) => (z) => {
    var q;
    (q = k.onKeyDown) == null || q.call(k, z), !(z.key !== "Escape" || !F()) && (n || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
  }, W = (k) => (z) => {
    var q;
    (q = k.onClick) == null || q.call(k, z), z.target === z.currentTarget && u && u(z, "backdropClick");
  };
  return {
    getRootProps: (k = {}) => {
      const z = lc(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const q = R({}, z, k);
      return R({
        role: "presentation"
      }, q, {
        onKeyDown: B(q),
        ref: f
      });
    },
    getBackdropProps: (k = {}) => {
      const z = k;
      return R({
        "aria-hidden": !0
      }, z, {
        onClick: W(z),
        open: d
      });
    },
    getTransitionProps: () => {
      const k = () => {
        w(!1), a && a();
      }, z = () => {
        w(!0), c && c(), s && N();
      };
      return {
        onEnter: rs(k, l == null ? void 0 : l.props.onEnter),
        onExited: rs(z, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: f,
    portalRef: A,
    isTopModal: F,
    exited: p,
    hasTransition: C
  };
}
const Mh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], kh = ue(bc, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), xc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r;
  const i = Ga(), s = Me({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: c,
    components: l,
    componentsProps: u,
    container: d,
    disablePortal: m,
    keepMounted: v,
    modifiers: g,
    open: y,
    placement: f,
    popperOptions: p,
    popperRef: w,
    transition: C,
    slots: x,
    slotProps: E
  } = s, h = ae(s, Mh), $ = (r = x == null ? void 0 : x.root) != null ? r : l == null ? void 0 : l.Root, O = R({
    anchorEl: a,
    container: d,
    disablePortal: m,
    keepMounted: v,
    modifiers: g,
    open: y,
    placement: f,
    popperOptions: p,
    popperRef: w,
    transition: C
  }, h);
  return /* @__PURE__ */ I.jsx(kh, R({
    as: c,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: $
    },
    slotProps: E ?? u
  }, O, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (xc.propTypes = {
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
  anchorEl: o.oneOfType([$t, o.object, o.func]),
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
  container: o.oneOfType([$t, o.func]),
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
  popperRef: Jr,
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
const Ec = xc, jh = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], Ah = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Tc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = ar(), i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: a = !0,
    children: c,
    easing: l,
    in: u,
    onEnter: d,
    onEntered: m,
    onEntering: v,
    onExit: g,
    onExited: y,
    onExiting: f,
    style: p,
    timeout: w = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: C = tc
  } = t, x = ae(t, jh), E = T.useRef(null), h = Ke(E, c.ref, n), $ = (L) => (D) => {
    if (L) {
      const k = E.current;
      D === void 0 ? L(k) : L(k, D);
    }
  }, O = $(v), F = $((L, D) => {
    nc(L);
    const k = Ur({
      style: p,
      timeout: w,
      easing: l
    }, {
      mode: "enter"
    });
    L.style.webkitTransition = r.transitions.create("opacity", k), L.style.transition = r.transitions.create("opacity", k), d && d(L, D);
  }), A = $(m), N = $(f), B = $((L) => {
    const D = Ur({
      style: p,
      timeout: w,
      easing: l
    }, {
      mode: "exit"
    });
    L.style.webkitTransition = r.transitions.create("opacity", D), L.style.transition = r.transitions.create("opacity", D), g && g(L);
  }), W = $(y), V = (L) => {
    s && s(E.current, L);
  };
  return /* @__PURE__ */ I.jsx(C, R({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: F,
    onEntered: A,
    onEntering: O,
    onExit: B,
    onExited: W,
    onExiting: N,
    addEndListener: V,
    timeout: w
  }, x, {
    children: (L, D) => /* @__PURE__ */ T.cloneElement(c, R({
      style: R({
        opacity: 0,
        visibility: L === "exited" && !u ? "hidden" : void 0
      }, Ah[L], p, c.props.style),
      ref: h
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (Tc.propTypes = {
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
  children: nr.isRequired,
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
const Dh = Tc;
function Lh(e) {
  return _e("MuiBackdrop", e);
}
Ie("MuiBackdrop", ["root", "invisible"]);
const Fh = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], Vh = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ae({
    root: ["root", n && "invisible"]
  }, Lh, t);
}, Bh = ue("div", {
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
}) => R({
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
})), wc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, i, s;
  const a = Me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: d = {},
    componentsProps: m = {},
    invisible: v = !1,
    open: g,
    slotProps: y = {},
    slots: f = {},
    TransitionComponent: p = Dh,
    transitionDuration: w
  } = a, C = ae(a, Fh), x = R({}, a, {
    component: u,
    invisible: v
  }), E = Vh(x), h = (r = y.root) != null ? r : m.root;
  return /* @__PURE__ */ I.jsx(p, R({
    in: g,
    timeout: w
  }, C, {
    children: /* @__PURE__ */ I.jsx(Bh, R({
      "aria-hidden": !0
    }, h, {
      as: (i = (s = f.root) != null ? s : d.Root) != null ? i : u,
      className: ce(E.root, l, h == null ? void 0 : h.className),
      ownerState: R({}, x, h == null ? void 0 : h.ownerState),
      classes: E,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (wc.propTypes = {
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
const Rc = wc, zh = wn(/* @__PURE__ */ I.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz"), Uh = ["slots", "slotProps"], Wh = ue(Rn)(({
  theme: e
}) => R({
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
  "&:hover, &:focus": R({}, e.palette.mode === "light" ? {
    backgroundColor: e.palette.grey[200]
  } : {
    backgroundColor: e.palette.grey[600]
  }),
  "&:active": R({
    boxShadow: e.shadows[0]
  }, e.palette.mode === "light" ? {
    backgroundColor: ks(e.palette.grey[200], 0.12)
  } : {
    backgroundColor: ks(e.palette.grey[600], 0.12)
  })
})), Yh = ue(zh)({
  width: 24,
  height: 16
});
function Oc(e) {
  const {
    slots: t = {},
    slotProps: n = {}
  } = e, r = ae(e, Uh), i = e;
  return /* @__PURE__ */ I.jsx("li", {
    children: /* @__PURE__ */ I.jsx(Wh, R({
      focusRipple: !0
    }, r, {
      ownerState: i,
      children: /* @__PURE__ */ I.jsx(Yh, R({
        as: t.CollapsedIcon,
        ownerState: i
      }, n.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" && (Oc.propTypes = {
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
function qh(e) {
  return _e("MuiBreadcrumbs", e);
}
const Hh = Ie("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), Gh = Hh, Kh = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"], Xh = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, qh, t);
}, Jh = ue(dn, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${Gh.li}`]: t.li
  }, t.root]
})({}), Zh = ue("ol", {
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
}), Qh = ue("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function ev(e, t, n, r) {
  return e.reduce((i, s, a) => (a < e.length - 1 ? i = i.concat(s, /* @__PURE__ */ I.jsx(Qh, {
    "aria-hidden": !0,
    className: t,
    ownerState: r,
    children: n
  }, `separator-${a}`)) : i.push(s), i), []);
}
const Cc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    itemsBeforeCollapse: m = 1,
    maxItems: v = 8,
    separator: g = "/"
  } = r, y = ae(r, Kh), [f, p] = T.useState(!1), w = R({}, r, {
    component: a,
    expanded: f,
    expandText: u,
    itemsAfterCollapse: d,
    itemsBeforeCollapse: m,
    maxItems: v,
    separator: g
  }), C = Xh(w), x = Ft({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: w
  }), E = T.useRef(null), h = (O) => {
    const F = () => {
      p(!0);
      const A = E.current.querySelector("a[href],button,[tabindex]");
      A && A.focus();
    };
    return m + d >= O.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${d}} + itemsBeforeCollapse={${m}} >= maxItems={${v}}`].join(`
`)), O) : [...O.slice(0, m), /* @__PURE__ */ I.jsx(Oc, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: x
      },
      onClick: F
    }, "ellipsis"), ...O.slice(O.length - d, O.length)];
  }, $ = T.Children.toArray(i).filter((O) => (process.env.NODE_ENV !== "production" && Oi.isFragment(O) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ T.isValidElement(O))).map((O, F) => /* @__PURE__ */ I.jsx("li", {
    className: C.li,
    children: O
  }, `child-${F}`));
  return /* @__PURE__ */ I.jsx(Jh, R({
    ref: n,
    component: a,
    color: "text.secondary",
    className: ce(C.root, s),
    ownerState: w
  }, y, {
    children: /* @__PURE__ */ I.jsx(Zh, {
      className: C.ol,
      ref: E,
      ownerState: w,
      children: ev(f || v && $.length <= v ? $ : h($), C.separator, g, w)
    })
  }));
});
process.env.NODE_ENV !== "production" && (Cc.propTypes = {
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
  itemsAfterCollapse: Bn,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Bn,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Bn,
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
const tv = Cc;
function nv(e) {
  return _e("MuiButton", e);
}
const rv = Ie("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Rr = rv, Pc = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Pc.displayName = "ButtonGroupContext");
const ov = Pc, Sc = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Sc.displayName = "ButtonGroupButtonContext");
const iv = Sc, sv = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], av = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, `${s}${me(t)}`, `size${me(i)}`, `${s}Size${me(i)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${me(i)}`],
    endIcon: ["endIcon", `iconSize${me(i)}`]
  }, l = Ae(c, nv, a);
  return R({}, a, l);
}, $c = (e) => R({}, e.size === "small" && {
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
}), cv = ue(Rn, {
  shouldForwardProp: (e) => cr(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${me(n.color)}`], t[`size${me(n.size)}`], t[`${n.variant}Size${me(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r;
  const i = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], s = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return R({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": R({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : je(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : je(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : je(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    "&:active": R({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Rr.focusVisible}`]: R({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Rr.disabled}`]: R({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${je(e.palette[t.color].main, 0.5)}`
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
}), lv = ue("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${me(n.size)}`]];
  }
})(({
  ownerState: e
}) => R({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, $c(e))), uv = ue("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${me(n.size)}`]];
  }
})(({
  ownerState: e
}) => R({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, $c(e))), _c = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = T.useContext(ov), i = T.useContext(iv), s = si(r, t), a = Me({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: m = !1,
    disableElevation: v = !1,
    disableFocusRipple: g = !1,
    endIcon: y,
    focusVisibleClassName: f,
    fullWidth: p = !1,
    size: w = "medium",
    startIcon: C,
    type: x,
    variant: E = "text"
  } = a, h = ae(a, sv), $ = R({}, a, {
    color: l,
    component: u,
    disabled: m,
    disableElevation: v,
    disableFocusRipple: g,
    fullWidth: p,
    size: w,
    type: x,
    variant: E
  }), O = av($), F = C && /* @__PURE__ */ I.jsx(lv, {
    className: O.startIcon,
    ownerState: $,
    children: C
  }), A = y && /* @__PURE__ */ I.jsx(uv, {
    className: O.endIcon,
    ownerState: $,
    children: y
  }), N = i || "";
  return /* @__PURE__ */ I.jsxs(cv, R({
    ownerState: $,
    className: ce(r.className, O.root, d, N),
    component: u,
    disabled: m,
    focusRipple: !g,
    focusVisibleClassName: ce(O.focusVisible, f),
    ref: n,
    type: x
  }, h, {
    classes: O,
    children: [F, c, A]
  }));
});
process.env.NODE_ENV !== "production" && (_c.propTypes = {
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
const dv = _c;
function fv(e) {
  return _e("MuiCircularProgress", e);
}
Ie("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const pv = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let bo = (e) => e, ca, la, ua, da;
const Dt = 44, mv = or(ca || (ca = bo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), hv = or(la || (la = bo`
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
`)), vv = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${me(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${me(n)}`, i && "circleDisableShrink"]
  };
  return Ae(s, fv, t);
}, yv = ue("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${me(n.color)}`]];
  }
})(({
  ownerState: e,
  theme: t
}) => R({
  display: "inline-block"
}, e.variant === "determinate" && {
  transition: t.transitions.create("transform")
}, e.color !== "inherit" && {
  color: (t.vars || t).palette[e.color].main
}), ({
  ownerState: e
}) => e.variant === "indeterminate" && yi(ua || (ua = bo`
      animation: ${0} 1.4s linear infinite;
    `), mv)), gv = ue("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), bv = ue("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${me(n.variant)}`], n.disableShrink && t.circleDisableShrink];
  }
})(({
  ownerState: e,
  theme: t
}) => R({
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
}) => e.variant === "indeterminate" && !e.disableShrink && yi(da || (da = bo`
      animation: ${0} 1.4s ease-in-out infinite;
    `), hv)), Nc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    variant: m = "indeterminate"
  } = r, v = ae(r, pv), g = R({}, r, {
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: d,
    variant: m
  }), y = vv(g), f = {}, p = {}, w = {};
  if (m === "determinate") {
    const C = 2 * Math.PI * ((Dt - u) / 2);
    f.strokeDasharray = C.toFixed(3), w["aria-valuenow"] = Math.round(d), f.strokeDashoffset = `${((100 - d) / 100 * C).toFixed(3)}px`, p.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ I.jsx(yv, R({
    className: ce(y.root, i),
    style: R({
      width: c,
      height: c
    }, p, l),
    ownerState: g,
    ref: n,
    role: "progressbar"
  }, w, v, {
    children: /* @__PURE__ */ I.jsx(gv, {
      className: y.svg,
      ownerState: g,
      viewBox: `${Dt / 2} ${Dt / 2} ${Dt} ${Dt}`,
      children: /* @__PURE__ */ I.jsx(bv, {
        className: y.circle,
        style: f,
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
process.env.NODE_ENV !== "production" && (Nc.propTypes = {
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
  disableShrink: Mt(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const xv = Nc;
function Ev(e) {
  return _e("MuiModal", e);
}
Ie("MuiModal", ["root", "hidden", "backdrop"]);
const Tv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], wv = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ae({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Ev, r);
}, Rv = ue("div", {
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
}) => R({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), Ov = ue(Rc, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Ic = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, i, s, a, c, l;
  const u = Me({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Ov,
    BackdropProps: m,
    className: v,
    closeAfterTransition: g = !1,
    children: y,
    container: f,
    component: p,
    components: w = {},
    componentsProps: C = {},
    disableAutoFocus: x = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: $ = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: F = !1,
    hideBackdrop: A = !1,
    keepMounted: N = !1,
    onBackdropClick: B,
    open: W,
    slotProps: V,
    slots: L
    // eslint-disable-next-line react/prop-types
  } = u, D = ae(u, Tv), k = R({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: x,
    disableEnforceFocus: E,
    disableEscapeKeyDown: h,
    disablePortal: $,
    disableRestoreFocus: O,
    disableScrollLock: F,
    hideBackdrop: A,
    keepMounted: N
  }), {
    getRootProps: z,
    getBackdropProps: q,
    getTransitionProps: Q,
    portalRef: _,
    isTopModal: j,
    exited: G,
    hasTransition: ee
  } = Ih(R({}, k, {
    rootRef: n
  })), Y = R({}, k, {
    exited: G
  }), K = wv(Y), X = {};
  if (y.props.tabIndex === void 0 && (X.tabIndex = "-1"), ee) {
    const {
      onEnter: ne,
      onExited: P
    } = Q();
    X.onEnter = ne, X.onExited = P;
  }
  const Z = (r = (i = L == null ? void 0 : L.root) != null ? i : w.Root) != null ? r : Rv, H = (s = (a = L == null ? void 0 : L.backdrop) != null ? a : w.Backdrop) != null ? s : d, J = (c = V == null ? void 0 : V.root) != null ? c : C.root, te = (l = V == null ? void 0 : V.backdrop) != null ? l : C.backdrop, le = Ft({
    elementType: Z,
    externalSlotProps: J,
    externalForwardedProps: D,
    getSlotProps: z,
    additionalProps: {
      ref: n,
      as: p
    },
    ownerState: Y,
    className: ce(v, J == null ? void 0 : J.className, K == null ? void 0 : K.root, !Y.open && Y.exited && (K == null ? void 0 : K.hidden))
  }), S = Ft({
    elementType: H,
    externalSlotProps: te,
    additionalProps: m,
    getSlotProps: (ne) => q(R({}, ne, {
      onClick: (P) => {
        B && B(P), ne != null && ne.onClick && ne.onClick(P);
      }
    })),
    className: ce(te == null ? void 0 : te.className, m == null ? void 0 : m.className, K == null ? void 0 : K.backdrop),
    ownerState: Y
  });
  return !N && !W && (!ee || G) ? null : /* @__PURE__ */ I.jsx(er, {
    ref: _,
    container: f,
    disablePortal: $,
    children: /* @__PURE__ */ I.jsxs(Z, R({}, le, {
      children: [!A && d ? /* @__PURE__ */ I.jsx(H, R({}, S)) : null, /* @__PURE__ */ I.jsx(Yr, {
        disableEnforceFocus: E,
        disableAutoFocus: x,
        disableRestoreFocus: O,
        isEnabled: j,
        open: W,
        children: /* @__PURE__ */ T.cloneElement(y, X)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
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
  children: nr.isRequired,
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
  container: o.oneOfType([$t, o.func]),
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
const Cv = Ic;
function Pv(e) {
  return _e("MuiDivider", e);
}
const Sv = Ie("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), fa = Sv, $v = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], _v = (e) => {
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
  return Ae({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Pv, r);
}, Nv = ue("div", {
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
}) => R({
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
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : je(e.palette.divider, 0.08)
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
}) => R({}, e.children && {
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
}) => R({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => R({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => R({}, e.textAlign === "right" && e.orientation !== "vertical" && {
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
})), Iv = ue("span", {
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
}) => R({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), ji = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    role: m = c !== "hr" ? "separator" : void 0,
    textAlign: v = "center",
    variant: g = "fullWidth"
  } = r, y = ae(r, $v), f = R({}, r, {
    absolute: i,
    component: c,
    flexItem: l,
    light: u,
    orientation: d,
    role: m,
    textAlign: v,
    variant: g
  }), p = _v(f);
  return /* @__PURE__ */ I.jsx(Nv, R({
    as: c,
    className: ce(p.root, a),
    role: m,
    ref: n,
    ownerState: f
  }, y, {
    children: s ? /* @__PURE__ */ I.jsx(Iv, {
      className: p.wrapper,
      ownerState: f,
      children: s
    }) : null
  }));
});
ji.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (ji.propTypes = {
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
const Mo = ji, Mv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ti(e) {
  return `scale(${e}, ${e ** 2})`;
}
const kv = {
  entering: {
    opacity: 1,
    transform: ti(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ko = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Ai = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: i = !0,
    children: s,
    easing: a,
    in: c,
    onEnter: l,
    onEntered: u,
    onEntering: d,
    onExit: m,
    onExited: v,
    onExiting: g,
    style: y,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: p = tc
  } = t, w = ae(t, Mv), C = T.useRef(), x = T.useRef(), E = ar(), h = T.useRef(null), $ = Ke(h, s.ref, n), O = (D) => (k) => {
    if (D) {
      const z = h.current;
      k === void 0 ? D(z) : D(z, k);
    }
  }, F = O(d), A = O((D, k) => {
    nc(D);
    const {
      duration: z,
      delay: q,
      easing: Q
    } = Ur({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let _;
    f === "auto" ? (_ = E.transitions.getAutoHeightDuration(D.clientHeight), x.current = _) : _ = z, D.style.transition = [E.transitions.create("opacity", {
      duration: _,
      delay: q
    }), E.transitions.create("transform", {
      duration: ko ? _ : _ * 0.666,
      delay: q,
      easing: Q
    })].join(","), l && l(D, k);
  }), N = O(u), B = O(g), W = O((D) => {
    const {
      duration: k,
      delay: z,
      easing: q
    } = Ur({
      style: y,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let Q;
    f === "auto" ? (Q = E.transitions.getAutoHeightDuration(D.clientHeight), x.current = Q) : Q = k, D.style.transition = [E.transitions.create("opacity", {
      duration: Q,
      delay: z
    }), E.transitions.create("transform", {
      duration: ko ? Q : Q * 0.666,
      delay: ko ? z : z || Q * 0.333,
      easing: q
    })].join(","), D.style.opacity = 0, D.style.transform = ti(0.75), m && m(D);
  }), V = O(v), L = (D) => {
    f === "auto" && (C.current = setTimeout(D, x.current || 0)), r && r(h.current, D);
  };
  return T.useEffect(() => () => {
    clearTimeout(C.current);
  }, []), /* @__PURE__ */ I.jsx(p, R({
    appear: i,
    in: c,
    nodeRef: h,
    onEnter: A,
    onEntered: N,
    onEntering: F,
    onExit: W,
    onExited: V,
    onExiting: B,
    addEndListener: L,
    timeout: f === "auto" ? null : f
  }, w, {
    children: (D, k) => /* @__PURE__ */ T.cloneElement(s, R({
      style: R({
        opacity: 0,
        transform: ti(0.75),
        visibility: D === "exited" && !c ? "hidden" : void 0
      }, kv[D], y, s.props.style),
      ref: $
    }, k))
  }));
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
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
  children: nr.isRequired,
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
Ai.muiSupportAuto = !0;
const ni = Ai, Mc = /* @__PURE__ */ T.createContext({});
process.env.NODE_ENV !== "production" && (Mc.displayName = "ListContext");
const gt = Mc;
function jv(e) {
  return _e("MuiList", e);
}
Ie("MuiList", ["root", "padding", "dense", "subheader"]);
const Av = ["children", "className", "component", "dense", "disablePadding", "subheader"], Dv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ae({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, jv, t);
}, Lv = ue("ul", {
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
}) => R({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), kc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, d = ae(r, Av), m = T.useMemo(() => ({
    dense: c
  }), [c]), v = R({}, r, {
    component: a,
    dense: c,
    disablePadding: l
  }), g = Dv(v);
  return /* @__PURE__ */ I.jsx(gt.Provider, {
    value: m,
    children: /* @__PURE__ */ I.jsxs(Lv, R({
      as: a,
      className: ce(g.root, s),
      ref: n,
      ownerState: v
    }, d, {
      children: [u, i]
    }))
  });
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
const jc = kc;
function Fv(e) {
  return _e("MuiListItem", e);
}
const Vv = Ie("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), ln = Vv;
function Bv(e) {
  return _e("MuiListItemButton", e);
}
const zv = Ie("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), un = zv, Uv = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], Wv = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Yv = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: c
  } = e, u = Ae({
    root: ["root", r && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, Bv, n);
  return R({}, n, u);
}, qv = ue(Rn, {
  shouldForwardProp: (e) => cr(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: Wv
})(({
  theme: e,
  ownerState: t
}) => R({
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
  [`&.${un.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${un.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${un.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${un.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${un.disabled}`]: {
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
})), Ac = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    focusVisibleClassName: m,
    selected: v = !1,
    className: g
  } = r, y = ae(r, Uv), f = T.useContext(gt), p = T.useMemo(() => ({
    dense: l || f.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, f.dense, l, u]), w = T.useRef(null);
  _t(() => {
    s && (w.current ? w.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const C = R({}, r, {
    alignItems: i,
    dense: p.dense,
    disableGutters: u,
    divider: d,
    selected: v
  }), x = Yv(C), E = Ke(w, n);
  return /* @__PURE__ */ I.jsx(gt.Provider, {
    value: p,
    children: /* @__PURE__ */ I.jsx(qv, R({
      ref: E,
      href: y.href || y.to,
      component: (y.href || y.to) && a === "div" ? "button" : a,
      focusVisibleClassName: ce(x.focusVisible, m),
      ownerState: C,
      className: ce(x.root, g)
    }, y, {
      classes: x,
      children: c
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ac.propTypes = {
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
const Hv = Ac;
function Gv(e) {
  return _e("MuiListItemSecondaryAction", e);
}
Ie("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const Kv = ["className"], Xv = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return Ae({
    root: ["root", t && "disableGutters"]
  }, Gv, n);
}, Jv = ue("div", {
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
}) => R({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Di = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i
  } = r, s = ae(r, Kv), a = T.useContext(gt), c = R({}, r, {
    disableGutters: a.disableGutters
  }), l = Xv(c);
  return /* @__PURE__ */ I.jsx(Jv, R({
    className: ce(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (Di.propTypes = {
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
Di.muiName = "ListItemSecondaryAction";
const Zv = Di, Qv = ["className"], ey = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], ty = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, ny = (e) => {
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
  return Ae({
    root: ["root", i && "dense", !a && "gutters", !c && "padding", l && "divider", s && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, Fv, r);
}, ry = ue("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: ty
})(({
  theme: e,
  ownerState: t
}) => R({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && R({
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
  [`& > .${un.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${ln.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ln.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${ln.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${ln.disabled}`]: {
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
  [`&.${ln.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), oy = ue("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Dc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    componentsProps: m = {},
    ContainerComponent: v = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: y = !1,
    disabled: f = !1,
    disableGutters: p = !1,
    disablePadding: w = !1,
    divider: C = !1,
    focusVisibleClassName: x,
    secondaryAction: E,
    selected: h = !1,
    slotProps: $ = {},
    slots: O = {}
  } = r, F = ae(r.ContainerProps, Qv), A = ae(r, ey), N = T.useContext(gt), B = T.useMemo(() => ({
    dense: y || N.dense || !1,
    alignItems: i,
    disableGutters: p
  }), [i, N.dense, y, p]), W = T.useRef(null);
  _t(() => {
    s && (W.current ? W.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const V = T.Children.toArray(c), L = V.length && Ca(V[V.length - 1], ["ListItemSecondaryAction"]), D = R({}, r, {
    alignItems: i,
    autoFocus: s,
    button: a,
    dense: B.dense,
    disabled: f,
    disableGutters: p,
    disablePadding: w,
    divider: C,
    hasSecondaryAction: L,
    selected: h
  }), k = ny(D), z = Ke(W, n), q = O.root || d.Root || ry, Q = $.root || m.root || {}, _ = R({
    className: ce(k.root, Q.className, l),
    disabled: f
  }, A);
  let j = u || "li";
  return a && (_.component = u || "div", _.focusVisibleClassName = ce(ln.focusVisible, x), j = Rn), L ? (j = !_.component && !u ? "div" : j, v === "li" && (j === "li" ? j = "div" : _.component === "li" && (_.component = "div")), /* @__PURE__ */ I.jsx(gt.Provider, {
    value: B,
    children: /* @__PURE__ */ I.jsxs(oy, R({
      as: v,
      className: ce(k.container, g),
      ref: z,
      ownerState: D
    }, F, {
      children: [/* @__PURE__ */ I.jsx(q, R({}, Q, !Wr(q) && {
        as: j,
        ownerState: R({}, D, Q.ownerState)
      }, _, {
        children: V
      })), V.pop()]
    }))
  })) : /* @__PURE__ */ I.jsx(gt.Provider, {
    value: B,
    children: /* @__PURE__ */ I.jsxs(q, R({}, Q, {
      as: j,
      ref: z
    }, !Wr(q) && {
      ownerState: R({}, D, Q.ownerState)
    }, _, {
      children: [V, E && /* @__PURE__ */ I.jsx(Zv, {
        children: E
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Dc.propTypes = {
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
  children: Mt(o.node, (e) => {
    const t = T.Children.toArray(e.children);
    let n = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const i = t[r];
      if (Ca(i, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: ii,
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
const iy = Dc;
function sy(e) {
  return _e("MuiListItemIcon", e);
}
const ay = Ie("MuiListItemIcon", ["root", "alignItemsFlexStart"]), pa = ay, cy = ["className"], ly = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return Ae({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, sy, n);
}, uy = ue("div", {
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
}) => R({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), Lc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i
  } = r, s = ae(r, cy), a = T.useContext(gt), c = R({}, r, {
    alignItems: a.alignItems
  }), l = ly(c);
  return /* @__PURE__ */ I.jsx(uy, R({
    className: ce(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
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
const dy = Lc;
function fy(e) {
  return _e("MuiListItemText", e);
}
const py = Ie("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Gr = py, my = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], hy = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: i,
    dense: s
  } = e;
  return Ae({
    root: ["root", n && "inset", s && "dense", r && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, fy, t);
}, vy = ue("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Gr.primary}`]: t.primary
    }, {
      [`& .${Gr.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})(({
  ownerState: e
}) => R({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), Fc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    secondaryTypographyProps: m
  } = r, v = ae(r, my), {
    dense: g
  } = T.useContext(gt);
  let y = l ?? i, f = d;
  const p = R({}, r, {
    disableTypography: a,
    inset: c,
    primary: !!y,
    secondary: !!f,
    dense: g
  }), w = hy(p);
  return y != null && y.type !== dn && !a && (y = /* @__PURE__ */ I.jsx(dn, R({
    variant: g ? "body2" : "body1",
    className: w.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: y
  }))), f != null && f.type !== dn && !a && (f = /* @__PURE__ */ I.jsx(dn, R({
    variant: "body2",
    className: w.secondary,
    color: "text.secondary",
    display: "block"
  }, m, {
    children: f
  }))), /* @__PURE__ */ I.jsxs(vy, R({
    className: ce(w.root, s),
    ownerState: p,
    ref: n
  }, v, {
    children: [y, f]
  }));
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
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
const yy = Fc, gy = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function jo(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function ma(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Vc(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function An(e, t, n, r, i, s) {
  let a = !1, c = i(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Vc(c, s) || l)
      c = i(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Bc = /* @__PURE__ */ T.forwardRef(function(t, n) {
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
    variant: m = "selectedMenu"
  } = t, v = ae(t, gy), g = T.useRef(null), y = T.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  _t(() => {
    i && g.current.focus();
  }, [i]), T.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (x, E) => {
      const h = !g.current.style.width;
      if (x.clientHeight < g.current.clientHeight && h) {
        const $ = `${Sa(nt(x))}px`;
        g.current.style[E.direction === "rtl" ? "paddingLeft" : "paddingRight"] = $, g.current.style.width = `calc(100% + ${$})`;
      }
      return g.current;
    }
  }), []);
  const f = (x) => {
    const E = g.current, h = x.key, $ = nt(E).activeElement;
    if (h === "ArrowDown")
      x.preventDefault(), An(E, $, u, l, jo);
    else if (h === "ArrowUp")
      x.preventDefault(), An(E, $, u, l, ma);
    else if (h === "Home")
      x.preventDefault(), An(E, null, u, l, jo);
    else if (h === "End")
      x.preventDefault(), An(E, null, u, l, ma);
    else if (h.length === 1) {
      const O = y.current, F = h.toLowerCase(), A = performance.now();
      O.keys.length > 0 && (A - O.lastTime > 500 ? (O.keys = [], O.repeating = !0, O.previousKeyMatched = !0) : O.repeating && F !== O.keys[0] && (O.repeating = !1)), O.lastTime = A, O.keys.push(F);
      const N = $ && !O.repeating && Vc($, O);
      O.previousKeyMatched && (N || An(E, $, !1, l, jo, O)) ? x.preventDefault() : O.previousKeyMatched = !1;
    }
    d && d(x);
  }, p = Ke(g, n);
  let w = -1;
  T.Children.forEach(a, (x, E) => {
    if (!/* @__PURE__ */ T.isValidElement(x)) {
      w === E && (w += 1, w >= a.length && (w = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && Oi.isFragment(x) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), x.props.disabled || (m === "selectedMenu" && x.props.selected || w === -1) && (w = E), w === E && (x.props.disabled || x.props.muiSkipListHighlight || x.type.muiSkipListHighlight) && (w += 1, w >= a.length && (w = -1));
  });
  const C = T.Children.map(a, (x, E) => {
    if (E === w) {
      const h = {};
      return s && (h.autoFocus = !0), x.props.tabIndex === void 0 && m === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ T.cloneElement(x, h);
    }
    return x;
  });
  return /* @__PURE__ */ I.jsx(jc, R({
    role: "menu",
    ref: p,
    className: c,
    onKeyDown: f,
    tabIndex: i ? 0 : -1
  }, v, {
    children: C
  }));
});
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
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
const by = Bc;
function xy(e) {
  return _e("MuiPopover", e);
}
Ie("MuiPopover", ["root", "paper"]);
const Ey = ["onEntering"], Ty = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], wy = ["slotProps"];
function ha(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function va(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function ya(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function jr(e) {
  return typeof e == "function" ? e() : e;
}
const Ry = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"],
    paper: ["paper"]
  }, xy, t);
}, Oy = ue(Cv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), zc = ue(Tp, {
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
}), Uc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, i, s;
  const a = Me({
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
    anchorReference: m = "anchorEl",
    children: v,
    className: g,
    container: y,
    elevation: f = 8,
    marginThreshold: p = 16,
    open: w,
    PaperProps: C = {},
    slots: x,
    slotProps: E,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: $ = ni,
    transitionDuration: O = "auto",
    TransitionProps: {
      onEntering: F
    } = {},
    disableScrollLock: A = !1
  } = a, N = ae(a.TransitionProps, Ey), B = ae(a, Ty), W = (r = E == null ? void 0 : E.paper) != null ? r : C, V = T.useRef(), L = Ke(V, W.ref), D = R({}, a, {
    anchorOrigin: u,
    anchorReference: m,
    elevation: f,
    marginThreshold: p,
    externalPaperSlotProps: W,
    transformOrigin: h,
    TransitionComponent: $,
    transitionDuration: O,
    TransitionProps: N
  }), k = Ry(D), z = T.useCallback(() => {
    if (m === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ne = jr(l), P = ne && ne.nodeType === 1 ? ne : nt(V.current).body, ie = P.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const he = P.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && he.top === 0 && he.left === 0 && he.right === 0 && he.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ie.top + ha(ie, u.vertical),
      left: ie.left + va(ie, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, d, m]), q = T.useCallback((ne) => ({
    vertical: ha(ne, h.vertical),
    horizontal: va(ne, h.horizontal)
  }), [h.horizontal, h.vertical]), Q = T.useCallback((ne) => {
    const P = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, ie = q(P);
    if (m === "none")
      return {
        top: null,
        left: null,
        transformOrigin: ya(ie)
      };
    const he = z();
    let De = he.top - ie.vertical, $e = he.left - ie.horizontal;
    const Qe = De + P.height, Be = $e + P.width, Xe = Gn(jr(l)), We = Xe.innerHeight - p, st = Xe.innerWidth - p;
    if (p !== null && De < p) {
      const Se = De - p;
      De -= Se, ie.vertical += Se;
    } else if (p !== null && Qe > We) {
      const Se = Qe - We;
      De -= Se, ie.vertical += Se;
    }
    if (process.env.NODE_ENV !== "production" && P.height > We && P.height && We && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${P.height - We}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), p !== null && $e < p) {
      const Se = $e - p;
      $e -= Se, ie.horizontal += Se;
    } else if (Be > st) {
      const Se = Be - st;
      $e -= Se, ie.horizontal += Se;
    }
    return {
      top: `${Math.round(De)}px`,
      left: `${Math.round($e)}px`,
      transformOrigin: ya(ie)
    };
  }, [l, m, z, q, p]), [_, j] = T.useState(w), G = T.useCallback(() => {
    const ne = V.current;
    if (!ne)
      return;
    const P = Q(ne);
    P.top !== null && (ne.style.top = P.top), P.left !== null && (ne.style.left = P.left), ne.style.transformOrigin = P.transformOrigin, j(!0);
  }, [Q]);
  T.useEffect(() => (A && window.addEventListener("scroll", G), () => window.removeEventListener("scroll", G)), [l, A, G]);
  const ee = (ne, P) => {
    F && F(ne, P), G();
  }, Y = () => {
    j(!1);
  };
  T.useEffect(() => {
    w && G();
  }), T.useImperativeHandle(c, () => w ? {
    updatePosition: () => {
      G();
    }
  } : null, [w, G]), T.useEffect(() => {
    if (!w)
      return;
    const ne = Ml(() => {
      G();
    }), P = Gn(l);
    return P.addEventListener("resize", ne), () => {
      ne.clear(), P.removeEventListener("resize", ne);
    };
  }, [l, w, G]);
  let K = O;
  O === "auto" && !$.muiSupportAuto && (K = void 0);
  const X = y || (l ? nt(jr(l)).body : void 0), Z = (i = x == null ? void 0 : x.root) != null ? i : Oy, H = (s = x == null ? void 0 : x.paper) != null ? s : zc, J = Ft({
    elementType: H,
    externalSlotProps: R({}, W, {
      style: _ ? W.style : R({}, W.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: L
    },
    ownerState: D,
    className: ce(k.paper, W == null ? void 0 : W.className)
  }), te = Ft({
    elementType: Z,
    externalSlotProps: (E == null ? void 0 : E.root) || {},
    externalForwardedProps: B,
    additionalProps: {
      ref: n,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: X,
      open: w
    },
    ownerState: D,
    className: ce(k.root, g)
  }), {
    slotProps: le
  } = te, S = ae(te, wy);
  return /* @__PURE__ */ I.jsx(Z, R({}, S, !Wr(Z) && {
    slotProps: le,
    disableScrollLock: A
  }, {
    children: /* @__PURE__ */ I.jsx($, R({
      appear: !0,
      in: w,
      onEntering: ee,
      onExited: Y,
      timeout: K
    }, N, {
      children: /* @__PURE__ */ I.jsx(H, R({}, J, {
        children: v
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Uc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: Jr,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Mt(o.oneOfType([$t, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = jr(e.anchorEl);
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
  container: o.oneOfType([$t, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Bn,
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
    component: ii
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
const Cy = Uc;
function Py(e) {
  return _e("MuiMenu", e);
}
Ie("MuiMenu", ["root", "paper", "list"]);
const Sy = ["onEntering"], $y = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], _y = {
  vertical: "top",
  horizontal: "right"
}, Ny = {
  vertical: "top",
  horizontal: "left"
}, Iy = (e) => {
  const {
    classes: t
  } = e;
  return Ae({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Py, t);
}, My = ue(Cy, {
  shouldForwardProp: (e) => cr(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), ky = ue(zc, {
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
}), jy = ue(by, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Wc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, i;
  const s = Me({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: c,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: m,
    open: v,
    PaperProps: g = {},
    PopoverClasses: y,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: p
    } = {},
    variant: w = "selectedMenu",
    slots: C = {},
    slotProps: x = {}
  } = s, E = ae(s.TransitionProps, Sy), h = ae(s, $y), $ = ar(), O = $.direction === "rtl", F = R({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: p,
    PaperProps: g,
    transitionDuration: f,
    TransitionProps: E,
    variant: w
  }), A = Iy(F), N = a && !u && v, B = T.useRef(null), W = (Q, _) => {
    B.current && B.current.adjustStyleForScrollbar(Q, $), p && p(Q, _);
  }, V = (Q) => {
    Q.key === "Tab" && (Q.preventDefault(), m && m(Q, "tabKeyDown"));
  };
  let L = -1;
  T.Children.map(c, (Q, _) => {
    /* @__PURE__ */ T.isValidElement(Q) && (process.env.NODE_ENV !== "production" && Oi.isFragment(Q) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), Q.props.disabled || (w === "selectedMenu" && Q.props.selected || L === -1) && (L = _));
  });
  const D = (r = C.paper) != null ? r : ky, k = (i = x.paper) != null ? i : g, z = Ft({
    elementType: C.root,
    externalSlotProps: x.root,
    ownerState: F,
    className: [A.root, l]
  }), q = Ft({
    elementType: D,
    externalSlotProps: k,
    ownerState: F,
    className: A.paper
  });
  return /* @__PURE__ */ I.jsx(My, R({
    onClose: m,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: O ? "right" : "left"
    },
    transformOrigin: O ? _y : Ny,
    slots: {
      paper: D,
      root: C.root
    },
    slotProps: {
      root: z,
      paper: q
    },
    open: v,
    ref: n,
    transitionDuration: f,
    TransitionProps: R({
      onEntering: W
    }, E),
    ownerState: F
  }, h, {
    classes: y,
    children: /* @__PURE__ */ I.jsx(jy, R({
      onKeyDown: V,
      actions: B,
      autoFocus: a && (L === -1 || u),
      autoFocusItem: N,
      variant: w
    }, d, {
      className: ce(A.list, d.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Wc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([$t, o.func]),
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
const Ay = Wc;
function Dy(e) {
  return _e("MuiMenuItem", e);
}
const Ly = Ie("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Dn = Ly, Fy = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], Vy = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, By = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = Ae({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, Dy, a);
  return R({}, a, l);
}, zy = ue(Rn, {
  shouldForwardProp: (e) => cr(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Vy
})(({
  theme: e,
  ownerState: t
}) => R({}, e.typography.body1, {
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
  [`&.${Dn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Dn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Dn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : je(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : je(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Dn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Dn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${fa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${fa.inset}`]: {
    marginLeft: 52
  },
  [`& .${Gr.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Gr.inset}`]: {
    paddingLeft: 36
  },
  [`& .${pa.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && R({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${pa.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Yc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
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
    tabIndex: m,
    className: v
  } = r, g = ae(r, Fy), y = T.useContext(gt), f = T.useMemo(() => ({
    dense: a || y.dense || !1,
    disableGutters: l
  }), [y.dense, a, l]), p = T.useRef(null);
  _t(() => {
    i && (p.current ? p.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const w = R({}, r, {
    dense: f.dense,
    divider: c,
    disableGutters: l
  }), C = By(r), x = Ke(p, n);
  let E;
  return r.disabled || (E = m !== void 0 ? m : -1), /* @__PURE__ */ I.jsx(gt.Provider, {
    value: f,
    children: /* @__PURE__ */ I.jsx(zy, R({
      ref: x,
      role: d,
      tabIndex: E,
      component: s,
      focusVisibleClassName: ce(C.focusVisible, u),
      className: ce(C.root, v)
    }, g, {
      ownerState: w,
      classes: C
    }))
  });
});
process.env.NODE_ENV !== "production" && (Yc.propTypes = {
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
const Uy = Yc;
function Wy(e) {
  return _e("MuiTooltip", e);
}
const Yy = Ie("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), Lt = Yy, qy = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function Hy(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gy = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${me(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ae(a, Wy, t);
}, Ky = ue(Ec, {
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
}) => R({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${Lt.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${Lt.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${Lt.arrow}`]: R({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${Lt.arrow}`]: R({}, t.isRtl ? {
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
})), Xy = ue("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${me(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : je(e.palette.grey[700], 0.92),
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
  lineHeight: `${Hy(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${Lt.popper}[data-popper-placement*="left"] &`]: R({
    transformOrigin: "right center"
  }, t.isRtl ? R({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : R({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${Lt.popper}[data-popper-placement*="right"] &`]: R({
    transformOrigin: "left center"
  }, t.isRtl ? R({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : R({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${Lt.popper}[data-popper-placement*="top"] &`]: R({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${Lt.popper}[data-popper-placement*="bottom"] &`]: R({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Jy = ue("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : je(e.palette.grey[700], 0.9),
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
let Or = !1, Ao = null, Ln = {
  x: 0,
  y: 0
};
function Cr(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const qc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  var r, i, s, a, c, l, u, d, m, v, g, y, f, p, w, C, x, E, h;
  const $ = Me({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: O = !1,
    children: F,
    components: A = {},
    componentsProps: N = {},
    describeChild: B = !1,
    disableFocusListener: W = !1,
    disableHoverListener: V = !1,
    disableInteractive: L = !1,
    disableTouchListener: D = !1,
    enterDelay: k = 100,
    enterNextDelay: z = 0,
    enterTouchDelay: q = 700,
    followCursor: Q = !1,
    id: _,
    leaveDelay: j = 0,
    leaveTouchDelay: G = 1500,
    onClose: ee,
    onOpen: Y,
    open: K,
    placement: X = "bottom",
    PopperComponent: Z,
    PopperProps: H = {},
    slotProps: J = {},
    slots: te = {},
    title: le,
    TransitionComponent: S = ni,
    TransitionProps: ne
  } = $, P = ae($, qy), ie = /* @__PURE__ */ T.isValidElement(F) ? F : /* @__PURE__ */ I.jsx("span", {
    children: F
  }), he = ar(), De = he.direction === "rtl", [$e, Qe] = T.useState(), [Be, Xe] = T.useState(null), We = T.useRef(!1), st = L || Q, Se = T.useRef(), He = T.useRef(), Je = T.useRef(), et = T.useRef(), [jt, se] = Dl({
    controlled: K,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Ze = jt;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = T.useRef(K !== void 0);
    T.useEffect(() => {
      $e && $e.disabled && !re && le !== "" && $e.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [le, $e, re]);
  }
  const Ct = Al(_), bt = T.useRef(), zt = T.useCallback(() => {
    bt.current !== void 0 && (document.body.style.WebkitUserSelect = bt.current, bt.current = void 0), clearTimeout(et.current);
  }, []);
  T.useEffect(() => () => {
    clearTimeout(Se.current), clearTimeout(He.current), clearTimeout(Je.current), zt();
  }, [zt]);
  const dr = (re) => {
    clearTimeout(Ao), Or = !0, se(!0), Y && !Ze && Y(re);
  }, Zt = Ht(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      clearTimeout(Ao), Ao = setTimeout(() => {
        Or = !1;
      }, 800 + j), se(!1), ee && Ze && ee(re), clearTimeout(Se.current), Se.current = setTimeout(() => {
        We.current = !1;
      }, he.transitions.duration.shortest);
    }
  ), On = (re) => {
    We.current && re.type !== "touchstart" || ($e && $e.removeAttribute("title"), clearTimeout(He.current), clearTimeout(Je.current), k || Or && z ? He.current = setTimeout(() => {
      dr(re);
    }, Or ? z : k) : dr(re));
  }, fr = (re) => {
    clearTimeout(He.current), clearTimeout(Je.current), Je.current = setTimeout(() => {
      Zt(re);
    }, j);
  }, {
    isFocusVisibleRef: pr,
    onBlur: Cn,
    onFocus: mr,
    ref: At
  } = Pa(), [, Qt] = T.useState(!1), en = (re) => {
    Cn(re), pr.current === !1 && (Qt(!1), fr(re));
  }, Pn = (re) => {
    $e || Qe(re.currentTarget), mr(re), pr.current === !0 && (Qt(!0), On(re));
  }, hr = (re) => {
    We.current = !0;
    const ze = ie.props;
    ze.onTouchStart && ze.onTouchStart(re);
  }, Sn = On, vr = fr, yr = (re) => {
    hr(re), clearTimeout(Je.current), clearTimeout(Se.current), zt(), bt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", et.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = bt.current, On(re);
    }, q);
  }, gr = (re) => {
    ie.props.onTouchEnd && ie.props.onTouchEnd(re), zt(), clearTimeout(Je.current), Je.current = setTimeout(() => {
      Zt(re);
    }, G);
  };
  T.useEffect(() => {
    if (!Ze)
      return;
    function re(ze) {
      (ze.key === "Escape" || ze.key === "Esc") && Zt(ze);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [Zt, Ze]);
  const To = Ke(ie.ref, At, Qe, n);
  !le && le !== 0 && (Ze = !1);
  const $n = T.useRef(), br = (re) => {
    const ze = ie.props;
    ze.onMouseMove && ze.onMouseMove(re), Ln = {
      x: re.clientX,
      y: re.clientY
    }, $n.current && $n.current.update();
  }, Ut = {}, _n = typeof le == "string";
  B ? (Ut.title = !Ze && _n && !V ? le : null, Ut["aria-describedby"] = Ze ? Ct : null) : (Ut["aria-label"] = _n ? le : null, Ut["aria-labelledby"] = Ze && !_n ? Ct : null);
  const tt = R({}, Ut, P, ie.props, {
    className: ce(P.className, ie.props.className),
    onTouchStart: hr,
    ref: To
  }, Q ? {
    onMouseMove: br
  } : {});
  process.env.NODE_ENV !== "production" && (tt["data-mui-internal-clone-element"] = !0, T.useEffect(() => {
    $e && !$e.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [$e]));
  const Wt = {};
  D || (tt.onTouchStart = yr, tt.onTouchEnd = gr), V || (tt.onMouseOver = Cr(Sn, tt.onMouseOver), tt.onMouseLeave = Cr(vr, tt.onMouseLeave), st || (Wt.onMouseOver = Sn, Wt.onMouseLeave = vr)), W || (tt.onFocus = Cr(Pn, tt.onFocus), tt.onBlur = Cr(en, tt.onBlur), st || (Wt.onFocus = Pn, Wt.onBlur = en)), process.env.NODE_ENV !== "production" && ie.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${ie.props.title}\` or the Tooltip component.`].join(`
`));
  const b = T.useMemo(() => {
    var re;
    let ze = [{
      name: "arrow",
      enabled: !!Be,
      options: {
        element: Be,
        padding: 4
      }
    }];
    return (re = H.popperOptions) != null && re.modifiers && (ze = ze.concat(H.popperOptions.modifiers)), R({}, H.popperOptions, {
      modifiers: ze
    });
  }, [Be, H]), M = R({}, $, {
    isRtl: De,
    arrow: O,
    disableInteractive: st,
    placement: X,
    PopperComponentProp: Z,
    touch: We.current
  }), U = Gy(M), oe = (r = (i = te.popper) != null ? i : A.Popper) != null ? r : Ky, pe = (s = (a = (c = te.transition) != null ? c : A.Transition) != null ? a : S) != null ? s : ni, ge = (l = (u = te.tooltip) != null ? u : A.Tooltip) != null ? l : Xy, fe = (d = (m = te.arrow) != null ? m : A.Arrow) != null ? d : Jy, de = Vn(oe, R({}, H, (v = J.popper) != null ? v : N.popper, {
    className: ce(U.popper, H == null ? void 0 : H.className, (g = (y = J.popper) != null ? y : N.popper) == null ? void 0 : g.className)
  }), M), Ye = Vn(pe, R({}, ne, (f = J.transition) != null ? f : N.transition), M), ke = Vn(ge, R({}, (p = J.tooltip) != null ? p : N.tooltip, {
    className: ce(U.tooltip, (w = (C = J.tooltip) != null ? C : N.tooltip) == null ? void 0 : w.className)
  }), M), Le = Vn(fe, R({}, (x = J.arrow) != null ? x : N.arrow, {
    className: ce(U.arrow, (E = (h = J.arrow) != null ? h : N.arrow) == null ? void 0 : E.className)
  }), M);
  return /* @__PURE__ */ I.jsxs(T.Fragment, {
    children: [/* @__PURE__ */ T.cloneElement(ie, tt), /* @__PURE__ */ I.jsx(oe, R({
      as: Z ?? Ec,
      placement: X,
      anchorEl: Q ? {
        getBoundingClientRect: () => ({
          top: Ln.y,
          left: Ln.x,
          right: Ln.x,
          bottom: Ln.y,
          width: 0,
          height: 0
        })
      } : $e,
      popperRef: $n,
      open: $e ? Ze : !1,
      id: Ct,
      transition: !0
    }, Wt, de, {
      popperOptions: b,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ I.jsx(pe, R({
        timeout: he.transitions.duration.shorter
      }, re, Ye, {
        children: /* @__PURE__ */ I.jsxs(ge, R({}, ke, {
          children: [le, O ? /* @__PURE__ */ I.jsx(fe, R({}, Le, {
            ref: Xe
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
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
  children: nr.isRequired,
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
const Zy = qc;
function Qy(e) {
  return _e("MuiToolbar", e);
}
Ie("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const eg = ["className", "component", "disableGutters", "variant"], tg = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return Ae({
    root: ["root", !n && "gutters", r]
  }, Qy, t);
}, ng = ue("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => R({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), Hc = /* @__PURE__ */ T.forwardRef(function(t, n) {
  const r = Me({
    props: t,
    name: "MuiToolbar"
  }), {
    className: i,
    component: s = "div",
    disableGutters: a = !1,
    variant: c = "regular"
  } = r, l = ae(r, eg), u = R({}, r, {
    component: s,
    disableGutters: a,
    variant: c
  }), d = tg(u);
  return /* @__PURE__ */ I.jsx(ng, R({
    as: s,
    className: ce(d.root, i),
    ref: n,
    ownerState: u
  }, l));
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
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
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const rg = Hc, og = wn(/* @__PURE__ */ I.jsx("path", {
  d: "M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-4h2v2h2v-2h2v-2h-2v-2h-2v2h-2z"
}), "CreateNewFolderOutlined"), ig = wn(/* @__PURE__ */ I.jsx("path", {
  d: "M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
}), "DescriptionOutlined"), sg = wn(/* @__PURE__ */ I.jsx("path", {
  d: "m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
}), "FolderOutlined"), ag = wn(/* @__PURE__ */ I.jsx("path", {
  d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"
}), "KeyboardReturnOutlined"), cg = wn(/* @__PURE__ */ I.jsx("path", {
  d: "M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
}), "NoteAddOutlined"), Kr = ga(), Xr = ga();
function lg({ children: e, items: t }) {
  const [n, r] = xt(null), i = (a) => {
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
      Ay,
      {
        open: n !== null,
        onClose: s,
        anchorReference: "anchorPosition",
        anchorPosition: n !== null ? { top: n.mouseY, left: n.mouseX } : void 0,
        children: t.map((a) => /* @__PURE__ */ I.jsx(
          Uy,
          {
            onClick: (c) => {
              s(), a.handler(c);
            },
            children: a.name
          },
          "local_file_system_menu_item_key_" + a.name
        ))
      }
    )
  ] }) });
}
function Gc({ children: e, onDropHandler: t }) {
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
async function Pg(e, t) {
  const n = await e.createWritable();
  await n.write(t), await n.close(), console.log("Successfully wrote to", e.name);
}
async function Kc(e) {
  const n = await (await e.getFile()).text();
  return String(n);
}
function dt(e) {
  return e.kind === "directory";
}
async function Xc(e) {
  if (e === null)
    return !1;
  if (dt(e))
    try {
      for await (const [t, n] of e.entries())
        break;
      return !0;
    } catch {
      return !1;
    }
  else
    try {
      return await Kc(e), !0;
    } catch {
      return !1;
    }
}
async function Sg(e, t) {
  if (e === null)
    return !1;
  try {
    const n = await Kc(e);
    return t === n;
  } catch {
    return !1;
  }
}
async function tr(e, t = !1) {
  const n = [];
  if (t && e.parent) {
    const r = e.parent;
    r.isParent = !0, n.push(r);
  }
  for await (const r of await e.values()) {
    const i = r.name.match(/\.([^\.]+)$/i);
    r.parent = e, r.isParent = !1, r.fullPath = (e.fullPath || "") + "/" + r.name, r.extension = i ? i[1].toLowerCase() : null, n.push(r);
  }
  return n;
}
async function ug(e) {
  var t = [];
  for (const n of await tr(e))
    t.push({
      parent: e,
      handle: n,
      children: dt(n) ? await ug(n) : null
    });
  return t.sort((n, r) => n.handle.fullPath > r.handle.fullPath ? 1 : r.handle.fullPath > n.handle.fullPath ? -1 : 0), t;
}
function dg(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++) {
    if (e[n].handle.fullPath !== t[n].handle.fullPath)
      return console.log(e[n].handle.fullPath, t[n].handle.fullPath, "not eq"), !1;
    if (e[n].children && t[n].children) {
      if (!dg(e[n].children, t[n].children))
        return !1;
    } else if (e[n].children || t[n].children)
      return !1;
  }
  return !0;
}
async function fg(e, t) {
  try {
    return await e.getFileHandle(t), !0;
  } catch {
    return !1;
  }
}
async function pg(e, t) {
  try {
    return await e.getDirectoryHandle(t), !0;
  } catch {
    return !1;
  }
}
async function Li(e, t) {
  return await fg(e, t) || await pg(e, t);
}
async function Fi(e, t) {
  return await e.getDirectoryHandle(t, {
    create: !0
  });
}
async function Vi(e, t) {
  return await e.getFileHandle(t, {
    create: !0
  });
}
async function $g(e, t, n) {
  var r = [e];
  for (let i = 0; i < t; i++) {
    const s = [];
    for (const a of r)
      for (let c = 0; c < n; c++) {
        const l = Math.random();
        l < 0.7 ? s.push(await Fi(a, String(l))) : await Vi(a, String(l));
      }
    r = s;
  }
}
async function xo(e, t) {
  dt(t) ? await mg(e, t) : await hg(e, t);
}
async function Jc(e) {
  const t = await tr(e);
  t.sort((r, i) => r.name.startsWith(".") ? -1 : i.name.startsWith(".") ? 1 : 0);
  for (var n = 0; n < t.length; n++)
    await xo(e, t[n]);
}
async function mg(e, t) {
  await Jc(t), await e.removeEntry(t.name);
}
async function hg(e, t) {
  await e.removeEntry(t.name);
}
async function Eo(e, t, n) {
  return dt(e) ? await yg(e, t, n) : await gg(e, t, n);
}
async function vg(e, t, n = !1, r = !0) {
  n && await Jc(t);
  for (const i of await tr(e))
    r && i.name.startsWith(".") || await Eo(i, t, i.name);
}
async function yg(e, t, n) {
  const r = await Fi(t, n);
  return await vg(e, r), r;
}
async function gg(e, t, n) {
  const r = await e.getFile(), i = await Vi(t, n), s = await i.createWritable();
  return await s.write(r), await s.close(), i;
}
async function bg(e, t, n) {
  const r = await Eo(t, e, n);
  return await xo(e, t), r;
}
async function xg(e, t, n) {
  const r = await Eo(t, n, t.name);
  return await xo(e, t), r;
}
function _g(e, t) {
  var n = new Blob([t], { type: "text" });
  if (window.navigator.msSaveOrOpenBlob)
    window.navigator.msSaveOrOpenBlob(n, e);
  else {
    var r = document.createElement("a"), i = URL.createObjectURL(n);
    r.href = i, r.download = e, document.body.appendChild(r), r.click(), setTimeout(function() {
      document.body.removeChild(r), window.URL.revokeObjectURL(i);
    }, 0);
  }
}
async function ri(e, t, n) {
  const r = prompt(t, n);
  if (!(!r || r === n)) {
    if (await Li(e, r)) {
      alert('"' + r + `" is an existing name.
Please try again with another name.`);
      return;
    }
    return r;
  }
}
function Zc(e) {
  return e === "\\" ? "ROOT" : e;
}
async function Eg(e, t) {
  let n = 0, r = t.name, i = null;
  if (!dt(t)) {
    const a = t.name.match(/^(.*)(\.[^\.]+)$/);
    a && (r = a[1], i = a[2]);
  }
  let s = r + "_copy" + (i || "");
  for (; await Li(e, s); )
    n++, s = r + "_copy_" + n.toString() + (i || "");
  return s;
}
function Tg({ entryHandle: e }) {
  const { currentFolderHandle: t, onFileClick: n, showFolderView: r, setIsLoading: i } = qn(Kr), { setEntryOnDrag: s, handleDrop: a } = qn(Xr), c = e.isParent ? ".." : e.name, l = !e.isParent, u = 30, d = u - 10, m = { width: `${d}px`, height: `${d}px` };
  let v = /* @__PURE__ */ I.jsx(ig, { sx: m });
  e.isParent ? v = /* @__PURE__ */ I.jsx(ag, { sx: m }) : dt(e) && (v = /* @__PURE__ */ I.jsx(sg, { sx: m }));
  const g = [
    {
      name: "Rename",
      handler: async (x) => {
        console.log("ContentEntry rename handler called", x);
        const E = await ri(
          t,
          "Rename from '" + e.name + "' to:",
          e.name
        );
        E && (i(!0), await bg(t, e, E), await r(t), i(!1));
      }
    },
    {
      name: "Duplicate",
      handler: async (x) => {
        console.log("ContentEntry duplicate handler called", x);
        const E = await Eg(t, e);
        i(!0), await Eo(e, t, E), await r(t), i(!1);
      }
    },
    {
      name: "Remove",
      handler: async (x) => {
        if (console.log("ContentEntry remove handler called", x), !!confirm('Are you sure to remove "' + e.name + `"?
This is not revertible!`)) {
          i(!0);
          try {
            await xo(t, e);
          } catch {
            console.warn("remove file failed");
          }
          await r(t), i(!1);
        }
      }
    }
  ];
  function y(x) {
    console.log("ContentEntry onClickHandler called", x), dt(e) ? r(e) : n(e);
  }
  function f(x) {
    console.log("ContentEntry onDragHandler called", x), s(e);
  }
  function p(x) {
    console.log("ContentEntry onDropHandler called", x), a(e);
  }
  const w = /* @__PURE__ */ I.jsx(iy, { onContextMenu: (x) => x.preventDefault(), disablePadding: !0, dense: !0, sx: { height: `${u}px` }, children: /* @__PURE__ */ I.jsxs(Hv, { onClick: y, sx: { height: `${u}px` }, children: [
    /* @__PURE__ */ I.jsx(dy, { sx: { minWidth: `${d + 5}px` }, children: v }),
    /* @__PURE__ */ I.jsx(yy, { draggable: l, onDragStart: f, primary: c })
  ] }) }), C = e.isParent ? w : /* @__PURE__ */ I.jsx(lg, { items: g, children: w });
  return dt(e) ? /* @__PURE__ */ I.jsx(Gc, { onDropHandler: p, children: C }) : C;
}
function wg({ entryHandle: e }) {
  const { showFolderView: t } = qn(Kr), { handleDrop: n } = qn(Xr);
  function r(s) {
    console.log("PathEntry onDropHandler called", s), n(e);
  }
  function i(s) {
    console.log("PathEntry onClickHandler called", s), t(e);
  }
  return /* @__PURE__ */ I.jsx(Gc, { onDropHandler: r, children: /* @__PURE__ */ I.jsx(dv, { size: "small", onClick: i, sx: { minWidth: 10, textTransform: "none" }, children: Zc(e.name) }) });
}
function Rg(e, t) {
  if (e.length != t.length)
    return !1;
  const n = e.map((s) => s.fullPath).sort(), r = t.map((s) => s.fullPath).sort();
  for (var i = 0; i < e.length; i++)
    if (n[i] !== r[i])
      return !1;
  return !0;
}
function Ng({ rootFolder: e, onFileClick: t }) {
  const [n, r] = xt(e), [i, s] = xt(), [a, c] = xt([e]), [l, u] = xt([]), [d, m] = xt(!1);
  xt(null), Ar(() => {
    async function f() {
      r(e), u(await tr(e)), c([e]);
    }
    f();
  }, [e]), Ar(() => {
    const f = setInterval(async () => {
      await v(n);
    }, 1e3);
    return () => clearInterval(f);
  }, [l, n]);
  async function v(f) {
    if (!await Xc(f)) {
      await v(e);
      return;
    }
    r(f);
    const w = await tr(f, !0);
    if (!Rg(w, l)) {
      u(w);
      for (var C = 0; C < a.length; C++)
        if (await f.isSameEntry(a[C])) {
          c((x) => x.slice(0, C + 1));
          return;
        }
      c((x) => [...x, f]), console.log("Folder view updated");
    }
  }
  async function g(f) {
    if (!await f.isSameEntry(i) && !await f.isSameEntry(n)) {
      if (await Li(f, i.name)) {
        alert('"' + i.name + '" conflicts with another name in the target folder.');
        return;
      }
      m(!0), await xg(n, i, f), await v(n), m(!1);
    }
  }
  const y = [
    {
      name: "new_file",
      title: "New file",
      icon: cg,
      handler: async (f) => {
        console.log("FolderView new file called", f);
        const p = await ri(n, "New file name:", "");
        if (!p)
          return;
        m(!0);
        const w = await Vi(n, p);
        await v(n), m(!1), w.fullPath = (n.fullPath || "") + "/" + w.name, t(w);
      }
    },
    {
      name: "new_folder",
      title: "New folder",
      icon: og,
      handler: async (f) => {
        console.log("FolderView new folder called", f);
        const p = await ri(n, "New folder name:", "");
        p && (m(!0), await Fi(n, p), await v(n), m(!1));
      }
    }
    // {
    //     name: "refresh",
    //     title: "Refresh",
    //     icon: RefreshIcon,
    //     handler: async (event) => {
    //         console.log("Toolbar refresh called", event);
    //         setIsLoading(true);
    //         await showFolderView(currentFolderHandle);
    //         setIsLoading(false);
    //     },
    // },
  ];
  return /* @__PURE__ */ I.jsxs(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ I.jsxs(
          "div",
          {
            style: {
              flexGrow: 0
            },
            children: [
              /* @__PURE__ */ I.jsx(Kr.Provider, { value: { currentFolderHandle: n, onFileClick: t, showFolderView: v, setIsLoading: m }, children: /* @__PURE__ */ I.jsx(Xr.Provider, { value: { setEntryOnDrag: s, handleDrop: g }, children: /* @__PURE__ */ I.jsx(tv, { "aria-label": "breadcrumb", children: a.map((f) => /* @__PURE__ */ I.jsx(wg, { entryHandle: f }, "local_file_system_path_key_" + f.name)) }) }) }),
              /* @__PURE__ */ I.jsx(Mo, {}),
              /* @__PURE__ */ I.jsxs(rg, { variant: "dense", disableGutters: !0, sx: { minHeight: "35px" }, children: [
                /* @__PURE__ */ I.jsx(dn, { component: "div", noWrap: !0, sx: { flexGrow: 1, pl: 1, fontSize: "14px" }, children: Zc(a[a.length - 1].name) }),
                y.map((f) => /* @__PURE__ */ I.jsx(
                  Zy,
                  {
                    id: f.name,
                    title: f.title,
                    children: /* @__PURE__ */ I.jsx(
                      Wp,
                      {
                        edge: "start",
                        size: "small",
                        style: { borderRadius: 0 },
                        onClick: f.handler,
                        children: /* @__PURE__ */ I.jsx(f.icon, {})
                      }
                    )
                  },
                  "local_file_system_toolbar_item_key_" + f.name
                ))
              ] }),
              /* @__PURE__ */ I.jsx(Mo, {})
            ]
          }
        ),
        /* @__PURE__ */ I.jsx(
          "div",
          {
            style: {
              flexGrow: 1,
              overflow: "auto"
            },
            children: /* @__PURE__ */ I.jsx(Kr.Provider, { value: { currentFolderHandle: n, onFileClick: t, showFolderView: v, setIsLoading: m }, children: /* @__PURE__ */ I.jsx(Xr.Provider, { value: { setEntryOnDrag: s, handleDrop: g }, children: /* @__PURE__ */ I.jsx(jc, { children: l.sort((f, p) => f.isParent && !p.isParent ? -1 : !f.isParent && p.isParent ? 1 : dt(f) && !dt(p) ? -1 : !dt(f) && dt(p) ? 1 : f.name < p.name ? -1 : f.name > p.name ? 1 : 0).filter((f) => !f.name.startsWith(".")).map((f) => /* @__PURE__ */ I.jsx(Tg, { entryHandle: f }, "file_system_content_key_" + f.name)) }) }) })
          }
        ),
        /* @__PURE__ */ I.jsx(
          "div",
          {
            style: {
              flexGrow: 0
            },
            children: /* @__PURE__ */ I.jsx(Mo, {})
          }
        ),
        /* @__PURE__ */ I.jsx(Rc, { sx: { color: "#fff", zIndex: (f) => f.zIndex.drawer + 1 }, open: d, children: /* @__PURE__ */ I.jsx(xv, { color: "inherit" }) })
      ]
    }
  );
}
function Ig() {
  const [e, t] = xt(null), [n, r] = xt(!1), [i, s] = xt("");
  Ar(() => {
    const l = setInterval(async () => {
      r(await Xc(e));
    }, 1e3);
    return () => clearInterval(l);
  }, [e]), Ar(() => {
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
    let m = e;
    for (const v of d)
      if (v.length !== 0)
        try {
          m = await m.getDirectoryHandle(v, { create: u });
        } catch {
          console.log(l + " does not exist");
          return;
        }
    return m;
  }
  return {
    openDirectory: a,
    directoryReady: n,
    statusText: i,
    rootDirHandle: e,
    path2FolderHandles: c
  };
}
export {
  yg as _copyFolder,
  hg as _removeFile,
  mg as _removeFolder,
  Vi as addNewFile,
  Fi as addNewFolder,
  $g as addRandomFolderTree,
  vg as backupFolder,
  Li as checkEntryExists,
  fg as checkFileExists,
  pg as checkFolderExists,
  Jc as cleanFolder,
  dg as compareFolderTrees,
  Eo as copyEntry,
  Ng as default,
  _g as downloadAsFile,
  Kc as getFileText,
  tr as getFolderContent,
  ug as getFolderTree,
  Xc as isEntryHealthy,
  dt as isFolder,
  Sg as isfileSame,
  xg as moveEntry,
  xo as removeEntry,
  bg as renameEntry,
  Ig as useFileSystem,
  Pg as writeFileText
};
