import * as b from "react";
import ft, { forwardRef as pl, useContext as mn, Children as fl, isValidElement as _r, cloneElement as Nr, createContext as Sa, useState as Rt, useEffect as Vo } from "react";
import * as ml from "react-dom";
import Er from "react-dom";
function hl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function vl(e) {
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
var Bo = { exports: {} }, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function yl() {
  if (ts)
    return Dn;
  ts = 1;
  var e = ft, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, u) {
    var d, p = {}, m = null, g = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l)
      r.call(l, d) && !s.hasOwnProperty(d) && (p[d] = l[d]);
    if (c && c.defaultProps)
      for (d in l = c.defaultProps, l)
        p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: c, key: m, ref: g, props: p, _owner: i.current };
  }
  return Dn.Fragment = n, Dn.jsx = a, Dn.jsxs = a, Dn;
}
var An = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns;
function gl() {
  return ns || (ns = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ft, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, f = "@@iterator";
    function y(x) {
      if (x === null || typeof x != "object")
        return null;
      var j = v && x[v] || x[f];
      return typeof j == "function" ? j : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(x) {
      {
        for (var j = arguments.length, q = new Array(j > 1 ? j - 1 : 0), ie = 1; ie < j; ie++)
          q[ie - 1] = arguments[ie];
        w("error", x, q);
      }
    }
    function w(x, j, q) {
      {
        var ie = O.ReactDebugCurrentFrame, me = ie.getStackAddendum();
        me !== "" && (j += "%s", q = q.concat([me]));
        var ye = q.map(function(pe) {
          return String(pe);
        });
        ye.unshift("Warning: " + j), Function.prototype.apply.call(console[x], console, ye);
      }
    }
    var E = !1, h = !1, P = !1, C = !1, V = !1, L;
    L = Symbol.for("react.module.reference");
    function $(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === r || x === s || V || x === i || x === u || x === d || C || x === g || E || h || P || typeof x == "object" && x !== null && (x.$$typeof === m || x.$$typeof === p || x.$$typeof === a || x.$$typeof === c || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === L || x.getModuleId !== void 0));
    }
    function z(x, j, q) {
      var ie = x.displayName;
      if (ie)
        return ie;
      var me = j.displayName || j.name || "";
      return me !== "" ? q + "(" + me + ")" : q;
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
            var j = x;
            return W(j) + ".Consumer";
          case a:
            var q = x;
            return W(q._context) + ".Provider";
          case l:
            return z(x, x.render, "ForwardRef");
          case p:
            var ie = x.displayName || null;
            return ie !== null ? ie : B(x.type) || "Memo";
          case m: {
            var me = x, ye = me._payload, pe = me._init;
            try {
              return B(pe(ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, D = 0, M, U, G, ee, _, F, X;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function H() {
      {
        if (D === 0) {
          M = console.log, U = console.info, G = console.warn, ee = console.error, _ = console.group, F = console.groupCollapsed, X = console.groupEnd;
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
        D++;
      }
    }
    function K() {
      {
        if (D--, D === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, x, {
              value: M
            }),
            info: I({}, x, {
              value: U
            }),
            warn: I({}, x, {
              value: G
            }),
            error: I({}, x, {
              value: ee
            }),
            group: I({}, x, {
              value: _
            }),
            groupCollapsed: I({}, x, {
              value: F
            }),
            groupEnd: I({}, x, {
              value: X
            })
          });
        }
        D < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, Q;
    function k(x, j, q) {
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
      var le = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new le();
    }
    function S(x, j) {
      if (!x || Y)
        return "";
      {
        var q = Z.get(x);
        if (q !== void 0)
          return q;
      }
      var ie;
      Y = !0;
      var me = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ye;
      ye = J.current, J.current = null, H();
      try {
        if (j) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (Ct) {
              ie = Ct;
            }
            Reflect.construct(x, [], pe);
          } else {
            try {
              pe.call();
            } catch (Ct) {
              ie = Ct;
            }
            x.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            ie = Ct;
          }
          x();
        }
      } catch (Ct) {
        if (Ct && ie && typeof Ct.stack == "string") {
          for (var de = Ct.stack.split(`
`), We = ie.stack.split(`
`), Me = de.length - 1, ke = We.length - 1; Me >= 1 && ke >= 0 && de[Me] !== We[ke]; )
            ke--;
          for (; Me >= 1 && ke >= 0; Me--, ke--)
            if (de[Me] !== We[ke]) {
              if (Me !== 1 || ke !== 1)
                do
                  if (Me--, ke--, ke < 0 || de[Me] !== We[ke]) {
                    var re = `
` + de[Me].replace(" at new ", " at ");
                    return x.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", x.displayName)), typeof x == "function" && Z.set(x, re), re;
                  }
                while (Me >= 1 && ke >= 0);
              break;
            }
        }
      } finally {
        Y = !1, J.current = ye, K(), Error.prepareStackTrace = me;
      }
      var Fe = x ? x.displayName || x.name : "", es = Fe ? k(Fe) : "";
      return typeof x == "function" && Z.set(x, es), es;
    }
    function ne(x, j, q) {
      return S(x, !1);
    }
    function A(x) {
      var j = x.prototype;
      return !!(j && j.isReactComponent);
    }
    function ue(x, j, q) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return S(x, A(x));
      if (typeof x == "string")
        return k(x);
      switch (x) {
        case u:
          return k("Suspense");
        case d:
          return k("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return ne(x.render);
          case p:
            return ue(x.type, j, q);
          case m: {
            var ie = x, me = ie._payload, ye = ie._init;
            try {
              return ue(ye(me), j, q);
            } catch {
            }
          }
        }
      return "";
    }
    var Pe = Object.prototype.hasOwnProperty, Be = {}, Se = O.ReactDebugCurrentFrame;
    function Ze(x) {
      if (x) {
        var j = x._owner, q = ue(x.type, x._source, j ? j.type : null);
        Se.setExtraStackFrame(q);
      } else
        Se.setExtraStackFrame(null);
    }
    function Le(x, j, q, ie, me) {
      {
        var ye = Function.call.bind(Pe);
        for (var pe in x)
          if (ye(x, pe)) {
            var de = void 0;
            try {
              if (typeof x[pe] != "function") {
                var We = Error((ie || "React class") + ": " + q + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw We.name = "Invariant Violation", We;
              }
              de = x[pe](j, pe, ie, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Me) {
              de = Me;
            }
            de && !(de instanceof Error) && (Ze(me), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", q, pe, typeof de), Ze(null)), de instanceof Error && !(de.message in Be) && (Be[de.message] = !0, Ze(me), R("Failed %s type: %s", q, de.message), Ze(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ze(x) {
      return Ge(x);
    }
    function ot(x) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, q = j && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return q;
      }
    }
    function Ce(x) {
      try {
        return qe(x), !1;
      } catch {
        return !0;
      }
    }
    function qe(x) {
      return "" + x;
    }
    function Ke(x) {
      if (Ce(x))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ot(x)), qe(x);
    }
    var Qe = O.ReactCurrentOwner, It = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ce, Xe, Ot;
    Ot = {};
    function yt(x) {
      if (Pe.call(x, "ref")) {
        var j = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function zt(x) {
      if (Pe.call(x, "key")) {
        var j = Object.getOwnPropertyDescriptor(x, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function pr(x, j) {
      if (typeof x.ref == "string" && Qe.current && j && Qe.current.stateNode !== j) {
        var q = B(Qe.current.type);
        Ot[q] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', B(Qe.current.type), x.ref), Ot[q] = !0);
      }
    }
    function Qt(x, j) {
      {
        var q = function() {
          ce || (ce = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function _n(x, j) {
      {
        var q = function() {
          Xe || (Xe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        q.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var fr = function(x, j, q, ie, me, ye, pe) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: j,
        ref: q,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: ye
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
    function mr(x, j, q, ie, me) {
      {
        var ye, pe = {}, de = null, We = null;
        q !== void 0 && (Ke(q), de = "" + q), zt(j) && (Ke(j.key), de = "" + j.key), yt(j) && (We = j.ref, pr(j, me));
        for (ye in j)
          Pe.call(j, ye) && !It.hasOwnProperty(ye) && (pe[ye] = j[ye]);
        if (x && x.defaultProps) {
          var Me = x.defaultProps;
          for (ye in Me)
            pe[ye] === void 0 && (pe[ye] = Me[ye]);
        }
        if (de || We) {
          var ke = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          de && Qt(pe, ke), We && _n(pe, ke);
        }
        return fr(x, de, We, me, ie, Qe.current, pe);
      }
    }
    var Nn = O.ReactCurrentOwner, hr = O.ReactDebugCurrentFrame;
    function Mt(x) {
      if (x) {
        var j = x._owner, q = ue(x.type, x._source, j ? j.type : null);
        hr.setExtraStackFrame(q);
      } else
        hr.setExtraStackFrame(null);
    }
    var en;
    en = !1;
    function tn(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function In() {
      {
        if (Nn.current) {
          var x = B(Nn.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function vr(x) {
      {
        if (x !== void 0) {
          var j = x.fileName.replace(/^.*[\\\/]/, ""), q = x.lineNumber;
          return `

Check your code at ` + j + ":" + q + ".";
        }
        return "";
      }
    }
    var Mn = {};
    function yr(x) {
      {
        var j = In();
        if (!j) {
          var q = typeof x == "string" ? x : x.displayName || x.name;
          q && (j = `

Check the top-level render call using <` + q + ">.");
        }
        return j;
      }
    }
    function gr(x, j) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var q = yr(j);
        if (Mn[q])
          return;
        Mn[q] = !0;
        var ie = "";
        x && x._owner && x._owner !== Nn.current && (ie = " It was passed a child from " + B(x._owner.type) + "."), Mt(x), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, ie), Mt(null);
      }
    }
    function br(x, j) {
      {
        if (typeof x != "object")
          return;
        if (ze(x))
          for (var q = 0; q < x.length; q++) {
            var ie = x[q];
            tn(ie) && gr(ie, j);
          }
        else if (tn(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var me = y(x);
          if (typeof me == "function" && me !== x.entries)
            for (var ye = me.call(x), pe; !(pe = ye.next()).done; )
              tn(pe.value) && gr(pe.value, j);
        }
      }
    }
    function Co(x) {
      {
        var j = x.type;
        if (j == null || typeof j == "string")
          return;
        var q;
        if (typeof j == "function")
          q = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === p))
          q = j.propTypes;
        else
          return;
        if (q) {
          var ie = B(j);
          Le(q, x.props, "prop", ie, x);
        } else if (j.PropTypes !== void 0 && !en) {
          en = !0;
          var me = B(j);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", me || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kn(x) {
      {
        for (var j = Object.keys(x.props), q = 0; q < j.length; q++) {
          var ie = j[q];
          if (ie !== "children" && ie !== "key") {
            Mt(x), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Mt(null);
            break;
          }
        }
        x.ref !== null && (Mt(x), R("Invalid attribute `ref` supplied to `React.Fragment`."), Mt(null));
      }
    }
    function xr(x, j, q, ie, me, ye) {
      {
        var pe = $(x);
        if (!pe) {
          var de = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var We = vr(me);
          We ? de += We : de += In();
          var Me;
          x === null ? Me = "null" : ze(x) ? Me = "array" : x !== void 0 && x.$$typeof === t ? (Me = "<" + (B(x.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof x, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, de);
        }
        var ke = mr(x, j, q, me, ye);
        if (ke == null)
          return ke;
        if (pe) {
          var re = j.children;
          if (re !== void 0)
            if (ie)
              if (ze(re)) {
                for (var Fe = 0; Fe < re.length; Fe++)
                  br(re[Fe], x);
                Object.freeze && Object.freeze(re);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              br(re, x);
        }
        return x === r ? kn(ke) : Co(ke), ke;
      }
    }
    function Ut(x, j, q) {
      return xr(x, j, q, !0);
    }
    function jn(x, j, q) {
      return xr(x, j, q, !1);
    }
    var et = jn, Wt = Ut;
    An.Fragment = r, An.jsx = et, An.jsxs = Wt;
  }()), An;
}
process.env.NODE_ENV === "production" ? Bo.exports = yl() : Bo.exports = gl();
var N = Bo.exports;
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
var zo = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rs;
function bl() {
  if (rs)
    return ge;
  rs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function f(y) {
    if (typeof y == "object" && y !== null) {
      var O = y.$$typeof;
      switch (O) {
        case e:
          switch (y = y.type, y) {
            case n:
            case i:
            case r:
            case u:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case c:
                case a:
                case l:
                case m:
                case p:
                case s:
                  return y;
                default:
                  return O;
              }
          }
        case t:
          return O;
      }
    }
  }
  return ge.ContextConsumer = a, ge.ContextProvider = s, ge.Element = e, ge.ForwardRef = l, ge.Fragment = n, ge.Lazy = m, ge.Memo = p, ge.Portal = t, ge.Profiler = i, ge.StrictMode = r, ge.Suspense = u, ge.SuspenseList = d, ge.isAsyncMode = function() {
    return !1;
  }, ge.isConcurrentMode = function() {
    return !1;
  }, ge.isContextConsumer = function(y) {
    return f(y) === a;
  }, ge.isContextProvider = function(y) {
    return f(y) === s;
  }, ge.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ge.isForwardRef = function(y) {
    return f(y) === l;
  }, ge.isFragment = function(y) {
    return f(y) === n;
  }, ge.isLazy = function(y) {
    return f(y) === m;
  }, ge.isMemo = function(y) {
    return f(y) === p;
  }, ge.isPortal = function(y) {
    return f(y) === t;
  }, ge.isProfiler = function(y) {
    return f(y) === i;
  }, ge.isStrictMode = function(y) {
    return f(y) === r;
  }, ge.isSuspense = function(y) {
    return f(y) === u;
  }, ge.isSuspenseList = function(y) {
    return f(y) === d;
  }, ge.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === n || y === i || y === r || y === u || y === d || y === g || typeof y == "object" && y !== null && (y.$$typeof === m || y.$$typeof === p || y.$$typeof === s || y.$$typeof === a || y.$$typeof === l || y.$$typeof === v || y.getModuleId !== void 0);
  }, ge.typeOf = f, ge;
}
var be = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function xl() {
  return os || (os = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = !1, f = !1, y = !1, O = !1, R = !1, w;
    w = Symbol.for("react.module.reference");
    function E(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === i || R || A === r || A === u || A === d || O || A === g || v || f || y || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === p || A.$$typeof === s || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === w || A.getModuleId !== void 0));
    }
    function h(A) {
      if (typeof A == "object" && A !== null) {
        var ue = A.$$typeof;
        switch (ue) {
          case e:
            var Pe = A.type;
            switch (Pe) {
              case n:
              case i:
              case r:
              case u:
              case d:
                return Pe;
              default:
                var Be = Pe && Pe.$$typeof;
                switch (Be) {
                  case c:
                  case a:
                  case l:
                  case m:
                  case p:
                  case s:
                    return Be;
                  default:
                    return ue;
                }
            }
          case t:
            return ue;
        }
      }
    }
    var P = a, C = s, V = e, L = l, $ = n, z = m, W = p, B = t, I = i, D = r, M = u, U = d, G = !1, ee = !1;
    function _(A) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(A) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function X(A) {
      return h(A) === a;
    }
    function te(A) {
      return h(A) === s;
    }
    function H(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function K(A) {
      return h(A) === l;
    }
    function J(A) {
      return h(A) === n;
    }
    function Q(A) {
      return h(A) === m;
    }
    function k(A) {
      return h(A) === p;
    }
    function Y(A) {
      return h(A) === t;
    }
    function Z(A) {
      return h(A) === i;
    }
    function le(A) {
      return h(A) === r;
    }
    function S(A) {
      return h(A) === u;
    }
    function ne(A) {
      return h(A) === d;
    }
    be.ContextConsumer = P, be.ContextProvider = C, be.Element = V, be.ForwardRef = L, be.Fragment = $, be.Lazy = z, be.Memo = W, be.Portal = B, be.Profiler = I, be.StrictMode = D, be.Suspense = M, be.SuspenseList = U, be.isAsyncMode = _, be.isConcurrentMode = F, be.isContextConsumer = X, be.isContextProvider = te, be.isElement = H, be.isForwardRef = K, be.isFragment = J, be.isLazy = Q, be.isMemo = k, be.isPortal = Y, be.isProfiler = Z, be.isStrictMode = le, be.isSuspense = S, be.isSuspenseList = ne, be.isValidElementType = E, be.typeOf = h;
  }()), be;
}
process.env.NODE_ENV === "production" ? zo.exports = bl() : zo.exports = xl();
var hn = zo.exports, Uo = { exports: {} }, Tr = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var is;
function El() {
  if (is)
    return xe;
  is = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
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
                case v:
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
    return w(h) === u;
  }
  return xe.AsyncMode = l, xe.ConcurrentMode = u, xe.ContextConsumer = c, xe.ContextProvider = a, xe.Element = t, xe.ForwardRef = d, xe.Fragment = r, xe.Lazy = v, xe.Memo = g, xe.Portal = n, xe.Profiler = s, xe.StrictMode = i, xe.Suspense = p, xe.isAsyncMode = function(h) {
    return E(h) || w(h) === l;
  }, xe.isConcurrentMode = E, xe.isContextConsumer = function(h) {
    return w(h) === c;
  }, xe.isContextProvider = function(h) {
    return w(h) === a;
  }, xe.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, xe.isForwardRef = function(h) {
    return w(h) === d;
  }, xe.isFragment = function(h) {
    return w(h) === r;
  }, xe.isLazy = function(h) {
    return w(h) === v;
  }, xe.isMemo = function(h) {
    return w(h) === g;
  }, xe.isPortal = function(h) {
    return w(h) === n;
  }, xe.isProfiler = function(h) {
    return w(h) === s;
  }, xe.isStrictMode = function(h) {
    return w(h) === i;
  }, xe.isSuspense = function(h) {
    return w(h) === p;
  }, xe.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === p || h === m || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === y || h.$$typeof === O || h.$$typeof === R || h.$$typeof === f);
  }, xe.typeOf = w, xe;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function Tl() {
  return ss || (ss = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === s || S === i || S === p || S === m || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === g || S.$$typeof === a || S.$$typeof === c || S.$$typeof === d || S.$$typeof === y || S.$$typeof === O || S.$$typeof === R || S.$$typeof === f);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ne = S.$$typeof;
        switch (ne) {
          case t:
            var A = S.type;
            switch (A) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case p:
                return A;
              default:
                var ue = A && A.$$typeof;
                switch (ue) {
                  case c:
                  case d:
                  case v:
                  case g:
                  case a:
                    return ue;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, P = u, C = c, V = a, L = t, $ = d, z = r, W = v, B = g, I = n, D = s, M = i, U = p, G = !1;
    function ee(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || E(S) === l;
    }
    function _(S) {
      return E(S) === u;
    }
    function F(S) {
      return E(S) === c;
    }
    function X(S) {
      return E(S) === a;
    }
    function te(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function H(S) {
      return E(S) === d;
    }
    function K(S) {
      return E(S) === r;
    }
    function J(S) {
      return E(S) === v;
    }
    function Q(S) {
      return E(S) === g;
    }
    function k(S) {
      return E(S) === n;
    }
    function Y(S) {
      return E(S) === s;
    }
    function Z(S) {
      return E(S) === i;
    }
    function le(S) {
      return E(S) === p;
    }
    Ee.AsyncMode = h, Ee.ConcurrentMode = P, Ee.ContextConsumer = C, Ee.ContextProvider = V, Ee.Element = L, Ee.ForwardRef = $, Ee.Fragment = z, Ee.Lazy = W, Ee.Memo = B, Ee.Portal = I, Ee.Profiler = D, Ee.StrictMode = M, Ee.Suspense = U, Ee.isAsyncMode = ee, Ee.isConcurrentMode = _, Ee.isContextConsumer = F, Ee.isContextProvider = X, Ee.isElement = te, Ee.isForwardRef = H, Ee.isFragment = K, Ee.isLazy = J, Ee.isMemo = Q, Ee.isPortal = k, Ee.isProfiler = Y, Ee.isStrictMode = Z, Ee.isSuspense = le, Ee.isValidElementType = w, Ee.typeOf = E;
  }()), Ee;
}
var as;
function $a() {
  return as || (as = 1, process.env.NODE_ENV === "production" ? Tr.exports = El() : Tr.exports = Tl()), Tr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ro, cs;
function wl() {
  if (cs)
    return Ro;
  cs = 1;
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
  return Ro = i() ? Object.assign : function(s, a) {
    for (var c, l = r(s), u, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        u = e(c);
        for (var m = 0; m < u.length; m++)
          n.call(c, u[m]) && (l[u[m]] = c[u[m]]);
      }
    }
    return l;
  }, Ro;
}
var Po, ls;
function ci() {
  if (ls)
    return Po;
  ls = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Po = e, Po;
}
var So, us;
function _a() {
  return us || (us = 1, So = Function.call.bind(Object.prototype.hasOwnProperty)), So;
}
var $o, ds;
function Ol() {
  if (ds)
    return $o;
  ds = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ci(), n = {}, r = _a();
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
              var m = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            p = s[d](a, d, l, c, null, t);
          } catch (v) {
            p = v;
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
  }, $o = i, $o;
}
var _o, ps;
function Cl() {
  if (ps)
    return _o;
  ps = 1;
  var e = $a(), t = wl(), n = ci(), r = _a(), i = Ol(), s = function() {
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
  return _o = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(_) {
      var F = _ && (u && _[u] || _[d]);
      if (typeof F == "function")
        return F;
    }
    var m = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: R(),
      arrayOf: w,
      element: E(),
      elementType: h(),
      instanceOf: P,
      node: $(),
      objectOf: V,
      oneOf: C,
      oneOfType: L,
      shape: W,
      exact: B
    };
    function v(_, F) {
      return _ === F ? _ !== 0 || 1 / _ === 1 / F : _ !== _ && F !== F;
    }
    function f(_, F) {
      this.message = _, this.data = F && typeof F == "object" ? F : {}, this.stack = "";
    }
    f.prototype = Error.prototype;
    function y(_) {
      if (process.env.NODE_ENV !== "production")
        var F = {}, X = 0;
      function te(K, J, Q, k, Y, Z, le) {
        if (k = k || m, Z = Z || Q, le !== n) {
          if (l) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = k + ":" + Q;
            !F[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            X < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), F[ne] = !0, X++);
          }
        }
        return J[Q] == null ? K ? J[Q] === null ? new f("The " + Y + " `" + Z + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new f("The " + Y + " `" + Z + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : _(J, Q, k, Y, Z);
      }
      var H = te.bind(null, !1);
      return H.isRequired = te.bind(null, !0), H;
    }
    function O(_) {
      function F(X, te, H, K, J, Q) {
        var k = X[te], Y = M(k);
        if (Y !== _) {
          var Z = U(k);
          return new f(
            "Invalid " + K + " `" + J + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("`" + _ + "`."),
            { expectedType: _ }
          );
        }
        return null;
      }
      return y(F);
    }
    function R() {
      return y(a);
    }
    function w(_) {
      function F(X, te, H, K, J) {
        if (typeof _ != "function")
          return new f("Property `" + J + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var Q = X[te];
        if (!Array.isArray(Q)) {
          var k = M(Q);
          return new f("Invalid " + K + " `" + J + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected an array."));
        }
        for (var Y = 0; Y < Q.length; Y++) {
          var Z = _(Q, Y, H, K, J + "[" + Y + "]", n);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return y(F);
    }
    function E() {
      function _(F, X, te, H, K) {
        var J = F[X];
        if (!c(J)) {
          var Q = M(J);
          return new f("Invalid " + H + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + te + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(_);
    }
    function h() {
      function _(F, X, te, H, K) {
        var J = F[X];
        if (!e.isValidElementType(J)) {
          var Q = M(J);
          return new f("Invalid " + H + " `" + K + "` of type " + ("`" + Q + "` supplied to `" + te + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(_);
    }
    function P(_) {
      function F(X, te, H, K, J) {
        if (!(X[te] instanceof _)) {
          var Q = _.name || m, k = ee(X[te]);
          return new f("Invalid " + K + " `" + J + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected ") + ("instance of `" + Q + "`."));
        }
        return null;
      }
      return y(F);
    }
    function C(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), a;
      function F(X, te, H, K, J) {
        for (var Q = X[te], k = 0; k < _.length; k++)
          if (v(Q, _[k]))
            return null;
        var Y = JSON.stringify(_, function(le, S) {
          var ne = U(S);
          return ne === "symbol" ? String(S) : S;
        });
        return new f("Invalid " + K + " `" + J + "` of value `" + String(Q) + "` " + ("supplied to `" + H + "`, expected one of " + Y + "."));
      }
      return y(F);
    }
    function V(_) {
      function F(X, te, H, K, J) {
        if (typeof _ != "function")
          return new f("Property `" + J + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var Q = X[te], k = M(Q);
        if (k !== "object")
          return new f("Invalid " + K + " `" + J + "` of type " + ("`" + k + "` supplied to `" + H + "`, expected an object."));
        for (var Y in Q)
          if (r(Q, Y)) {
            var Z = _(Q, Y, H, K, J + "." + Y, n);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return y(F);
    }
    function L(_) {
      if (!Array.isArray(_))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var F = 0; F < _.length; F++) {
        var X = _[F];
        if (typeof X != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + G(X) + " at index " + F + "."
          ), a;
      }
      function te(H, K, J, Q, k) {
        for (var Y = [], Z = 0; Z < _.length; Z++) {
          var le = _[Z], S = le(H, K, J, Q, k, n);
          if (S == null)
            return null;
          S.data && r(S.data, "expectedType") && Y.push(S.data.expectedType);
        }
        var ne = Y.length > 0 ? ", expected one of type [" + Y.join(", ") + "]" : "";
        return new f("Invalid " + Q + " `" + k + "` supplied to " + ("`" + J + "`" + ne + "."));
      }
      return y(te);
    }
    function $() {
      function _(F, X, te, H, K) {
        return I(F[X]) ? null : new f("Invalid " + H + " `" + K + "` supplied to " + ("`" + te + "`, expected a ReactNode."));
      }
      return y(_);
    }
    function z(_, F, X, te, H) {
      return new f(
        (_ || "React class") + ": " + F + " type `" + X + "." + te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function W(_) {
      function F(X, te, H, K, J) {
        var Q = X[te], k = M(Q);
        if (k !== "object")
          return new f("Invalid " + K + " `" + J + "` of type `" + k + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var Y in _) {
          var Z = _[Y];
          if (typeof Z != "function")
            return z(H, K, J, Y, U(Z));
          var le = Z(Q, Y, H, K, J + "." + Y, n);
          if (le)
            return le;
        }
        return null;
      }
      return y(F);
    }
    function B(_) {
      function F(X, te, H, K, J) {
        var Q = X[te], k = M(Q);
        if (k !== "object")
          return new f("Invalid " + K + " `" + J + "` of type `" + k + "` " + ("supplied to `" + H + "`, expected `object`."));
        var Y = t({}, X[te], _);
        for (var Z in Y) {
          var le = _[Z];
          if (r(_, Z) && typeof le != "function")
            return z(H, K, J, Z, U(le));
          if (!le)
            return new f(
              "Invalid " + K + " `" + J + "` key `" + Z + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(X[te], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(_), null, "  ")
            );
          var S = le(Q, Z, H, K, J + "." + Z, n);
          if (S)
            return S;
        }
        return null;
      }
      return y(F);
    }
    function I(_) {
      switch (typeof _) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !_;
        case "object":
          if (Array.isArray(_))
            return _.every(I);
          if (_ === null || c(_))
            return !0;
          var F = p(_);
          if (F) {
            var X = F.call(_), te;
            if (F !== _.entries) {
              for (; !(te = X.next()).done; )
                if (!I(te.value))
                  return !1;
            } else
              for (; !(te = X.next()).done; ) {
                var H = te.value;
                if (H && !I(H[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function D(_, F) {
      return _ === "symbol" ? !0 : F ? F["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && F instanceof Symbol : !1;
    }
    function M(_) {
      var F = typeof _;
      return Array.isArray(_) ? "array" : _ instanceof RegExp ? "object" : D(F, _) ? "symbol" : F;
    }
    function U(_) {
      if (typeof _ > "u" || _ === null)
        return "" + _;
      var F = M(_);
      if (F === "object") {
        if (_ instanceof Date)
          return "date";
        if (_ instanceof RegExp)
          return "regexp";
      }
      return F;
    }
    function G(_) {
      var F = U(_);
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
    function ee(_) {
      return !_.constructor || !_.constructor.name ? m : _.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, _o;
}
var No, fs;
function Rl() {
  if (fs)
    return No;
  fs = 1;
  var e = ci();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, No = function() {
    function r(a, c, l, u, d, p) {
      if (p !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
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
  }, No;
}
if (process.env.NODE_ENV !== "production") {
  var Pl = $a(), Sl = !0;
  Uo.exports = Cl()(Pl.isElement, Sl);
} else
  Uo.exports = Rl()();
var $l = Uo.exports;
const o = /* @__PURE__ */ hl($l);
function Na(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Na(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function se() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Na(e)) && (r && (r += " "), r += t);
  return r;
}
function Ft(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function Pt(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Ia(e) {
  if (!Pt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = Ia(e[n]);
  }), t;
}
function ht(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? T({}, e) : e;
  return Pt(e) && Pt(t) && Object.keys(t).forEach((i) => {
    i !== "__proto__" && (Pt(t[i]) && i in e && Pt(e[i]) ? r[i] = ht(e[i], t[i], n) : n.clone ? r[i] = Pt(t[i]) ? Ia(t[i]) : t[i] : r[i] = t[i]);
  }), r;
}
function _l(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Ma(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  const l = s.type;
  return typeof l == "function" && !_l(l) && (c = "Did you accidentally use a plain function component for an element instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const ka = Ft(o.element, Ma);
ka.isRequired = Ft(o.element.isRequired, Ma);
const Cn = ka;
function Nl(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Il(e, t, n, r, i) {
  const s = e[t], a = i || t;
  if (s == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof s == "function" && !Nl(s) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const li = Ft(o.elementType, Il), Ml = "exact-prop: ​";
function ja(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [Ml]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function vn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const kl = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function jl(e) {
  const t = `${e}`.match(kl);
  return t && t[1] || "";
}
function Da(e, t = "") {
  return e.displayName || e.name || jl(e) || t;
}
function ms(e, t, n) {
  const r = Da(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function Dl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Da(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case hn.ForwardRef:
          return ms(e, e.render, "ForwardRef");
        case hn.Memo:
          return ms(e, e.type, "memo");
        default:
          return;
      }
  }
}
function St(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = e[t], a = i || t;
  return s == null ? null : s && s.nodeType !== 1 ? new Error(`Invalid ${r} \`${a}\` supplied to \`${n}\`. Expected an HTMLElement.`) : null;
}
const Al = o.oneOfType([o.func, o.object]), Jr = Al;
function fe(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Wo(...e) {
  return e.reduce((t, n) => n == null ? t : function(...i) {
    t.apply(this, i), n.apply(this, i);
  }, () => {
  });
}
function Aa(e, t = 166) {
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
function Ll(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (n, r, i, s, a) => {
    const c = i || "<<anonymous>>", l = a || r;
    return typeof n[r] < "u" ? new Error(`The ${s} \`${l}\` of \`${c}\` is deprecated. ${t}`) : null;
  };
}
function Zr(e, t) {
  var n, r;
  return /* @__PURE__ */ b.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Je(e) {
  return e && e.ownerDocument || document;
}
function yn(e) {
  return Je(e).defaultView || window;
}
function Fl(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const n = t ? T({}, t.propTypes) : null;
  return (i) => (s, a, c, l, u, ...d) => {
    const p = u || a, m = n == null ? void 0 : n[p];
    if (m) {
      const g = m(s, a, c, l, u, ...d);
      if (g)
        return g;
    }
    return typeof s[a] < "u" && !s[i] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${i}\` prop.`) : null;
  };
}
function Fr(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Vl = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Tt = Vl;
let hs = 0;
function Bl(e) {
  const [t, n] = b.useState(e), r = e || t;
  return b.useEffect(() => {
    t == null && (hs += 1, n(`mui-${hs}`));
  }, [t]), r;
}
const vs = b["useId".toString()];
function La(e) {
  if (vs !== void 0) {
    const t = vs();
    return e ?? t;
  }
  return Bl(e);
}
function zl(e, t, n, r, i) {
  if (process.env.NODE_ENV === "production")
    return null;
  const s = i || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${s}\` is not supported. Please remove it.`) : null;
}
function ui({
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
function Dt(e) {
  const t = b.useRef(e);
  return Tt(() => {
    t.current = e;
  }), b.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function Ue(...e) {
  return b.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      Fr(n, t);
    });
  }, e);
}
let Qr = !0, Yo = !1, ys;
const Ul = {
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
function Wl(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && Ul[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Yl(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Qr = !0);
}
function Io() {
  Qr = !1;
}
function ql() {
  this.visibilityState === "hidden" && Yo && (Qr = !0);
}
function Hl(e) {
  e.addEventListener("keydown", Yl, !0), e.addEventListener("mousedown", Io, !0), e.addEventListener("pointerdown", Io, !0), e.addEventListener("touchstart", Io, !0), e.addEventListener("visibilitychange", ql, !0);
}
function Gl(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Qr || Wl(t);
}
function di() {
  const e = b.useCallback((i) => {
    i != null && Hl(i.ownerDocument);
  }, []), t = b.useRef(!1);
  function n() {
    return t.current ? (Yo = !0, window.clearTimeout(ys), ys = window.setTimeout(() => {
      Yo = !1;
    }, 100), t.current = !1, !0) : !1;
  }
  function r(i) {
    return Gl(i) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  };
}
function Fa(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Kl(e) {
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
function Xl(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Jl = Number.isInteger || Xl;
function Va(e, t, n, r) {
  const i = e[t];
  if (i == null || !Jl(i)) {
    const s = Kl(i);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${s}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function Ba(e, t, ...n) {
  return e[t] === void 0 ? null : Va(e, t, ...n);
}
function qo() {
  return null;
}
Ba.isRequired = Va;
qo.isRequired = qo;
const Gn = process.env.NODE_ENV === "production" ? qo : Ba;
function pi(e, t) {
  const n = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = T({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const i = e[r] || {}, s = t[r];
      n[r] = {}, !s || !Object.keys(s) ? n[r] = i : !i || !Object.keys(i) ? n[r] = s : (n[r] = T({}, s), Object.keys(i).forEach((a) => {
        n[r][a] = pi(i[a], s[a]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function Ne(e, t, n = void 0) {
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
const gs = (e) => e, Zl = () => {
  let e = gs;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = gs;
    }
  };
}, Ql = Zl(), za = Ql, eu = {
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
function Re(e, t, n = "Mui") {
  const r = eu[t];
  return r ? `${n}-${r}` : `${za.generate(e)}-${t}`;
}
function $e(e, t, n = "Mui") {
  const r = {};
  return t.forEach((i) => {
    r[i] = Re(e, i, n);
  }), r;
}
function Vr(e) {
  return typeof e == "string";
}
function Yn(e, t, n) {
  return e === void 0 || Vr(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, n)
  });
}
const tu = {
  disableDefaultClasses: !1
}, nu = /* @__PURE__ */ b.createContext(tu);
function ru(e) {
  const {
    disableDefaultClasses: t
  } = b.useContext(nu);
  return (n) => t ? "" : e(n);
}
function Ua(e, t = []) {
  if (e === void 0)
    return {};
  const n = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    n[r] = e[r];
  }), n;
}
function ou(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function bs(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function iu(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: i,
    className: s
  } = e;
  if (!t) {
    const g = se(i == null ? void 0 : i.className, r == null ? void 0 : r.className, s, n == null ? void 0 : n.className), v = T({}, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), f = T({}, n, i, r);
    return g.length > 0 && (f.className = g), Object.keys(v).length > 0 && (f.style = v), {
      props: f,
      internalRef: void 0
    };
  }
  const a = Ua(T({}, i, r)), c = bs(r), l = bs(i), u = t(a), d = se(u == null ? void 0 : u.className, n == null ? void 0 : n.className, s, i == null ? void 0 : i.className, r == null ? void 0 : r.className), p = T({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, i == null ? void 0 : i.style, r == null ? void 0 : r.style), m = T({}, u, n, l, c);
  return d.length > 0 && (m.className = d), Object.keys(p).length > 0 && (m.style = p), {
    props: m,
    internalRef: u.ref
  };
}
const su = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Lt(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1
  } = e, a = oe(e, su), c = s ? {} : ou(r, i), {
    props: l,
    internalRef: u
  } = iu(T({}, a, {
    externalSlotProps: c
  })), d = Ue(u, c == null ? void 0 : c.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Yn(n, T({}, l, {
    ref: d
  }), i);
}
const au = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function cu(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function lu(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function uu(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || lu(e));
}
function du(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(au)).forEach((r, i) => {
    const s = cu(r);
    s === -1 || !uu(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: i,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, i) => r.tabIndex === i.tabIndex ? r.documentOrder - i.documentOrder : r.tabIndex - i.tabIndex).map((r) => r.node).concat(t);
}
function pu() {
  return !0;
}
function Br(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: i = !1,
    getTabbable: s = du,
    isEnabled: a = pu,
    open: c
  } = e, l = b.useRef(!1), u = b.useRef(null), d = b.useRef(null), p = b.useRef(null), m = b.useRef(null), g = b.useRef(!1), v = b.useRef(null), f = Ue(t.ref, v), y = b.useRef(null);
  b.useEffect(() => {
    !c || !v.current || (g.current = !n);
  }, [n, c]), b.useEffect(() => {
    if (!c || !v.current)
      return;
    const w = Je(v.current);
    return v.current.contains(w.activeElement) || (v.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), v.current.setAttribute("tabIndex", "-1")), g.current && v.current.focus()), () => {
      i || (p.current && p.current.focus && (l.current = !0, p.current.focus()), p.current = null);
    };
  }, [c]), b.useEffect(() => {
    if (!c || !v.current)
      return;
    const w = Je(v.current), E = (C) => {
      y.current = C, !(r || !a() || C.key !== "Tab") && w.activeElement === v.current && C.shiftKey && (l.current = !0, d.current && d.current.focus());
    }, h = () => {
      const C = v.current;
      if (C === null)
        return;
      if (!w.hasFocus() || !a() || l.current) {
        l.current = !1;
        return;
      }
      if (C.contains(w.activeElement) || r && w.activeElement !== u.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!g.current)
        return;
      let V = [];
      if ((w.activeElement === u.current || w.activeElement === d.current) && (V = s(v.current)), V.length > 0) {
        var L, $;
        const z = !!((L = y.current) != null && L.shiftKey && (($ = y.current) == null ? void 0 : $.key) === "Tab"), W = V[0], B = V[V.length - 1];
        typeof W != "string" && typeof B != "string" && (z ? B.focus() : W.focus());
      } else
        C.focus();
    };
    w.addEventListener("focusin", h), w.addEventListener("keydown", E, !0);
    const P = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && h();
    }, 50);
    return () => {
      clearInterval(P), w.removeEventListener("focusin", h), w.removeEventListener("keydown", E, !0);
    };
  }, [n, r, i, a, c, s]);
  const O = (w) => {
    p.current === null && (p.current = w.relatedTarget), g.current = !0, m.current = w.target;
    const E = t.props.onFocus;
    E && E(w);
  }, R = (w) => {
    p.current === null && (p.current = w.relatedTarget), g.current = !0;
  };
  return /* @__PURE__ */ N.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ N.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ b.cloneElement(t, {
      ref: f,
      onFocus: O
    }), /* @__PURE__ */ N.jsx("div", {
      tabIndex: c ? 0 : -1,
      onFocus: R,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Br.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: Cn,
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
process.env.NODE_ENV !== "production" && (Br["propTypes"] = ja(Br.propTypes));
var tt = "top", ut = "bottom", dt = "right", nt = "left", fi = "auto", sr = [tt, ut, dt, nt], gn = "start", Qn = "end", fu = "clippingParents", Wa = "viewport", Ln = "popper", mu = "reference", xs = /* @__PURE__ */ sr.reduce(function(e, t) {
  return e.concat([t + "-" + gn, t + "-" + Qn]);
}, []), Ya = /* @__PURE__ */ [].concat(sr, [fi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + gn, t + "-" + Qn]);
}, []), hu = "beforeRead", vu = "read", yu = "afterRead", gu = "beforeMain", bu = "main", xu = "afterMain", Eu = "beforeWrite", Tu = "write", wu = "afterWrite", Ou = [hu, vu, yu, gu, bu, xu, Eu, Tu, wu];
function wt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function at(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Xt(e) {
  var t = at(e).Element;
  return e instanceof t || e instanceof Element;
}
function lt(e) {
  var t = at(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function mi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = at(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Cu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, i = t.attributes[n] || {}, s = t.elements[n];
    !lt(s) || !wt(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(a) {
      var c = i[a];
      c === !1 ? s.removeAttribute(a) : s.setAttribute(a, c === !0 ? "" : c);
    }));
  });
}
function Ru(e) {
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
      !lt(i) || !wt(i) || (Object.assign(i.style, c), Object.keys(s).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Pu = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cu,
  effect: Ru,
  requires: ["computeStyles"]
};
function xt(e) {
  return e.split("-")[0];
}
var Kt = Math.max, zr = Math.min, bn = Math.round;
function Ho() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qa() {
  return !/^((?!chrome|android).)*safari/i.test(Ho());
}
function xn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), i = 1, s = 1;
  t && lt(e) && (i = e.offsetWidth > 0 && bn(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && bn(r.height) / e.offsetHeight || 1);
  var a = Xt(e) ? at(e) : window, c = a.visualViewport, l = !qa() && n, u = (r.left + (l && c ? c.offsetLeft : 0)) / i, d = (r.top + (l && c ? c.offsetTop : 0)) / s, p = r.width / i, m = r.height / s;
  return {
    width: p,
    height: m,
    top: d,
    right: u + p,
    bottom: d + m,
    left: u,
    x: u,
    y: d
  };
}
function hi(e) {
  var t = xn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Ha(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && mi(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function $t(e) {
  return at(e).getComputedStyle(e);
}
function Su(e) {
  return ["table", "td", "th"].indexOf(wt(e)) >= 0;
}
function Vt(e) {
  return ((Xt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function eo(e) {
  return wt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (mi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Vt(e)
  );
}
function Es(e) {
  return !lt(e) || // https://github.com/popperjs/popper-core/issues/837
  $t(e).position === "fixed" ? null : e.offsetParent;
}
function $u(e) {
  var t = /firefox/i.test(Ho()), n = /Trident/i.test(Ho());
  if (n && lt(e)) {
    var r = $t(e);
    if (r.position === "fixed")
      return null;
  }
  var i = eo(e);
  for (mi(i) && (i = i.host); lt(i) && ["html", "body"].indexOf(wt(i)) < 0; ) {
    var s = $t(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function ar(e) {
  for (var t = at(e), n = Es(e); n && Su(n) && $t(n).position === "static"; )
    n = Es(n);
  return n && (wt(n) === "html" || wt(n) === "body" && $t(n).position === "static") ? t : n || $u(e) || t;
}
function yi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Kn(e, t, n) {
  return Kt(e, zr(t, n));
}
function _u(e, t, n) {
  var r = Kn(e, t, n);
  return r > n ? n : r;
}
function Ga() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ka(e) {
  return Object.assign({}, Ga(), e);
}
function Xa(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Nu = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ka(typeof t != "number" ? t : Xa(t, sr));
};
function Iu(e) {
  var t, n = e.state, r = e.name, i = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, c = xt(n.placement), l = yi(c), u = [nt, dt].indexOf(c) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var p = Nu(i.padding, n), m = hi(s), g = l === "y" ? tt : nt, v = l === "y" ? ut : dt, f = n.rects.reference[d] + n.rects.reference[l] - a[l] - n.rects.popper[d], y = a[l] - n.rects.reference[l], O = ar(s), R = O ? l === "y" ? O.clientHeight || 0 : O.clientWidth || 0 : 0, w = f / 2 - y / 2, E = p[g], h = R - m[d] - p[v], P = R / 2 - m[d] / 2 + w, C = Kn(E, P, h), V = l;
    n.modifiersData[r] = (t = {}, t[V] = C, t.centerOffset = C - P, t);
  }
}
function Mu(e) {
  var t = e.state, n = e.options, r = n.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Ha(t.elements.popper, i) && (t.elements.arrow = i));
}
const ku = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Iu,
  effect: Mu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function En(e) {
  return e.split("-")[1];
}
var ju = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Du(e, t) {
  var n = e.x, r = e.y, i = t.devicePixelRatio || 1;
  return {
    x: bn(n * i) / i || 0,
    y: bn(r * i) / i || 0
  };
}
function Ts(e) {
  var t, n = e.popper, r = e.popperRect, i = e.placement, s = e.variation, a = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = a.x, g = m === void 0 ? 0 : m, v = a.y, f = v === void 0 ? 0 : v, y = typeof d == "function" ? d({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = y.x, f = y.y;
  var O = a.hasOwnProperty("x"), R = a.hasOwnProperty("y"), w = nt, E = tt, h = window;
  if (u) {
    var P = ar(n), C = "clientHeight", V = "clientWidth";
    if (P === at(n) && (P = Vt(n), $t(P).position !== "static" && c === "absolute" && (C = "scrollHeight", V = "scrollWidth")), P = P, i === tt || (i === nt || i === dt) && s === Qn) {
      E = ut;
      var L = p && P === h && h.visualViewport ? h.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[C]
      );
      f -= L - r.height, f *= l ? 1 : -1;
    }
    if (i === nt || (i === tt || i === ut) && s === Qn) {
      w = dt;
      var $ = p && P === h && h.visualViewport ? h.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[V]
      );
      g -= $ - r.width, g *= l ? 1 : -1;
    }
  }
  var z = Object.assign({
    position: c
  }, u && ju), W = d === !0 ? Du({
    x: g,
    y: f
  }, at(n)) : {
    x: g,
    y: f
  };
  if (g = W.x, f = W.y, l) {
    var B;
    return Object.assign({}, z, (B = {}, B[E] = R ? "0" : "", B[w] = O ? "0" : "", B.transform = (h.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", B));
  }
  return Object.assign({}, z, (t = {}, t[E] = R ? f + "px" : "", t[w] = O ? g + "px" : "", t.transform = "", t));
}
function Au(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, i = r === void 0 ? !0 : r, s = n.adaptive, a = s === void 0 ? !0 : s, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
    placement: xt(t.placement),
    variation: En(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ts(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ts(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Lu = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Au,
  data: {}
};
var wr = {
  passive: !0
};
function Fu(e) {
  var t = e.state, n = e.instance, r = e.options, i = r.scroll, s = i === void 0 ? !0 : i, a = r.resize, c = a === void 0 ? !0 : a, l = at(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, wr);
  }), c && l.addEventListener("resize", n.update, wr), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, wr);
    }), c && l.removeEventListener("resize", n.update, wr);
  };
}
const Vu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fu,
  data: {}
};
var Bu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ir(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Bu[t];
  });
}
var zu = {
  start: "end",
  end: "start"
};
function ws(e) {
  return e.replace(/start|end/g, function(t) {
    return zu[t];
  });
}
function gi(e) {
  var t = at(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function bi(e) {
  return xn(Vt(e)).left + gi(e).scrollLeft;
}
function Uu(e, t) {
  var n = at(e), r = Vt(e), i = n.visualViewport, s = r.clientWidth, a = r.clientHeight, c = 0, l = 0;
  if (i) {
    s = i.width, a = i.height;
    var u = qa();
    (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: s,
    height: a,
    x: c + bi(e),
    y: l
  };
}
function Wu(e) {
  var t, n = Vt(e), r = gi(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, s = Kt(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), a = Kt(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -r.scrollLeft + bi(e), l = -r.scrollTop;
  return $t(i || n).direction === "rtl" && (c += Kt(n.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: a,
    x: c,
    y: l
  };
}
function xi(e) {
  var t = $t(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function Ja(e) {
  return ["html", "body", "#document"].indexOf(wt(e)) >= 0 ? e.ownerDocument.body : lt(e) && xi(e) ? e : Ja(eo(e));
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ja(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = at(r), a = i ? [s].concat(s.visualViewport || [], xi(r) ? r : []) : r, c = t.concat(a);
  return i ? c : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    c.concat(Xn(eo(a)))
  );
}
function Go(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Yu(e, t) {
  var n = xn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Os(e, t, n) {
  return t === Wa ? Go(Uu(e, n)) : Xt(t) ? Yu(t, n) : Go(Wu(Vt(e)));
}
function qu(e) {
  var t = Xn(eo(e)), n = ["absolute", "fixed"].indexOf($t(e).position) >= 0, r = n && lt(e) ? ar(e) : e;
  return Xt(r) ? t.filter(function(i) {
    return Xt(i) && Ha(i, r) && wt(i) !== "body";
  }) : [];
}
function Hu(e, t, n, r) {
  var i = t === "clippingParents" ? qu(e) : [].concat(t), s = [].concat(i, [n]), a = s[0], c = s.reduce(function(l, u) {
    var d = Os(e, u, r);
    return l.top = Kt(d.top, l.top), l.right = zr(d.right, l.right), l.bottom = zr(d.bottom, l.bottom), l.left = Kt(d.left, l.left), l;
  }, Os(e, a, r));
  return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
}
function Za(e) {
  var t = e.reference, n = e.element, r = e.placement, i = r ? xt(r) : null, s = r ? En(r) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
  switch (i) {
    case tt:
      l = {
        x: a,
        y: t.y - n.height
      };
      break;
    case ut:
      l = {
        x: a,
        y: t.y + t.height
      };
      break;
    case dt:
      l = {
        x: t.x + t.width,
        y: c
      };
      break;
    case nt:
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
  var u = i ? yi(i) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case gn:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case Qn:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function er(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = r === void 0 ? e.placement : r, s = n.strategy, a = s === void 0 ? e.strategy : s, c = n.boundary, l = c === void 0 ? fu : c, u = n.rootBoundary, d = u === void 0 ? Wa : u, p = n.elementContext, m = p === void 0 ? Ln : p, g = n.altBoundary, v = g === void 0 ? !1 : g, f = n.padding, y = f === void 0 ? 0 : f, O = Ka(typeof y != "number" ? y : Xa(y, sr)), R = m === Ln ? mu : Ln, w = e.rects.popper, E = e.elements[v ? R : m], h = Hu(Xt(E) ? E : E.contextElement || Vt(e.elements.popper), l, d, a), P = xn(e.elements.reference), C = Za({
    reference: P,
    element: w,
    strategy: "absolute",
    placement: i
  }), V = Go(Object.assign({}, w, C)), L = m === Ln ? V : P, $ = {
    top: h.top - L.top + O.top,
    bottom: L.bottom - h.bottom + O.bottom,
    left: h.left - L.left + O.left,
    right: L.right - h.right + O.right
  }, z = e.modifiersData.offset;
  if (m === Ln && z) {
    var W = z[i];
    Object.keys($).forEach(function(B) {
      var I = [dt, ut].indexOf(B) >= 0 ? 1 : -1, D = [tt, ut].indexOf(B) >= 0 ? "y" : "x";
      $[B] += W[D] * I;
    });
  }
  return $;
}
function Gu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, i = n.boundary, s = n.rootBoundary, a = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ya : l, d = En(r), p = d ? c ? xs : xs.filter(function(v) {
    return En(v) === d;
  }) : sr, m = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(v, f) {
    return v[f] = er(e, {
      placement: f,
      boundary: i,
      rootBoundary: s,
      padding: a
    })[xt(f)], v;
  }, {});
  return Object.keys(g).sort(function(v, f) {
    return g[v] - g[f];
  });
}
function Ku(e) {
  if (xt(e) === fi)
    return [];
  var t = Ir(e);
  return [ws(e), t, ws(t)];
}
function Xu(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, f = n.allowedAutoPlacements, y = t.options.placement, O = xt(y), R = O === y, w = l || (R || !v ? [Ir(y)] : Ku(y)), E = [y].concat(w).reduce(function(H, K) {
      return H.concat(xt(K) === fi ? Gu(t, {
        placement: K,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: f
      }) : K);
    }, []), h = t.rects.reference, P = t.rects.popper, C = /* @__PURE__ */ new Map(), V = !0, L = E[0], $ = 0; $ < E.length; $++) {
      var z = E[$], W = xt(z), B = En(z) === gn, I = [tt, ut].indexOf(W) >= 0, D = I ? "width" : "height", M = er(t, {
        placement: z,
        boundary: d,
        rootBoundary: p,
        altBoundary: m,
        padding: u
      }), U = I ? B ? dt : nt : B ? ut : tt;
      h[D] > P[D] && (U = Ir(U));
      var G = Ir(U), ee = [];
      if (s && ee.push(M[W] <= 0), c && ee.push(M[U] <= 0, M[G] <= 0), ee.every(function(H) {
        return H;
      })) {
        L = z, V = !1;
        break;
      }
      C.set(z, ee);
    }
    if (V)
      for (var _ = v ? 3 : 1, F = function(K) {
        var J = E.find(function(Q) {
          var k = C.get(Q);
          if (k)
            return k.slice(0, K).every(function(Y) {
              return Y;
            });
        });
        if (J)
          return L = J, "break";
      }, X = _; X > 0; X--) {
        var te = F(X);
        if (te === "break")
          break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const Ju = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Xu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Cs(e, t, n) {
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
function Rs(e) {
  return [tt, dt, ut, nt].some(function(t) {
    return e[t] >= 0;
  });
}
function Zu(e) {
  var t = e.state, n = e.name, r = t.rects.reference, i = t.rects.popper, s = t.modifiersData.preventOverflow, a = er(t, {
    elementContext: "reference"
  }), c = er(t, {
    altBoundary: !0
  }), l = Cs(a, r), u = Cs(c, i, s), d = Rs(l), p = Rs(u);
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
const Qu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Zu
};
function ed(e, t, n) {
  var r = xt(e), i = [nt, tt].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, a = s[0], c = s[1];
  return a = a || 0, c = (c || 0) * i, [nt, dt].indexOf(r) >= 0 ? {
    x: c,
    y: a
  } : {
    x: a,
    y: c
  };
}
function td(e) {
  var t = e.state, n = e.options, r = e.name, i = n.offset, s = i === void 0 ? [0, 0] : i, a = Ya.reduce(function(d, p) {
    return d[p] = ed(p, t.rects, s), d;
  }, {}), c = a[t.placement], l = c.x, u = c.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = a;
}
const nd = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: td
};
function rd(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Za({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const od = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rd,
  data: {}
};
function id(e) {
  return e === "x" ? "y" : "x";
}
function sd(e) {
  var t = e.state, n = e.options, r = e.name, i = n.mainAxis, s = i === void 0 ? !0 : i, a = n.altAxis, c = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, v = n.tetherOffset, f = v === void 0 ? 0 : v, y = er(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), O = xt(t.placement), R = En(t.placement), w = !R, E = yi(O), h = id(E), P = t.modifiersData.popperOffsets, C = t.rects.reference, V = t.rects.popper, L = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, $ = typeof L == "number" ? {
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
      var B, I = E === "y" ? tt : nt, D = E === "y" ? ut : dt, M = E === "y" ? "height" : "width", U = P[E], G = U + y[I], ee = U - y[D], _ = g ? -V[M] / 2 : 0, F = R === gn ? C[M] : V[M], X = R === gn ? -V[M] : -C[M], te = t.elements.arrow, H = g && te ? hi(te) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ga(), J = K[I], Q = K[D], k = Kn(0, C[M], H[M]), Y = w ? C[M] / 2 - _ - k - J - $.mainAxis : F - k - J - $.mainAxis, Z = w ? -C[M] / 2 + _ + k + Q + $.mainAxis : X + k + Q + $.mainAxis, le = t.elements.arrow && ar(t.elements.arrow), S = le ? E === "y" ? le.clientTop || 0 : le.clientLeft || 0 : 0, ne = (B = z == null ? void 0 : z[E]) != null ? B : 0, A = U + Y - ne - S, ue = U + Z - ne, Pe = Kn(g ? zr(G, A) : G, U, g ? Kt(ee, ue) : ee);
      P[E] = Pe, W[E] = Pe - U;
    }
    if (c) {
      var Be, Se = E === "x" ? tt : nt, Ze = E === "x" ? ut : dt, Le = P[h], Ge = h === "y" ? "height" : "width", ze = Le + y[Se], ot = Le - y[Ze], Ce = [tt, nt].indexOf(O) !== -1, qe = (Be = z == null ? void 0 : z[h]) != null ? Be : 0, Ke = Ce ? ze : Le - C[Ge] - V[Ge] - qe + $.altAxis, Qe = Ce ? Le + C[Ge] + V[Ge] - qe - $.altAxis : ot, It = g && Ce ? _u(Ke, Le, Qe) : Kn(g ? Ke : ze, Le, g ? Qe : ot);
      P[h] = It, W[h] = It - Le;
    }
    t.modifiersData[r] = W;
  }
}
const ad = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sd,
  requiresIfExists: ["offset"]
};
function cd(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ld(e) {
  return e === at(e) || !lt(e) ? gi(e) : cd(e);
}
function ud(e) {
  var t = e.getBoundingClientRect(), n = bn(t.width) / e.offsetWidth || 1, r = bn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function dd(e, t, n) {
  n === void 0 && (n = !1);
  var r = lt(t), i = lt(t) && ud(t), s = Vt(t), a = xn(e, i, n), c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((wt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xi(s)) && (c = ld(t)), lt(t) ? (l = xn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : s && (l.x = bi(s))), {
    x: a.left + c.scrollLeft - l.x,
    y: a.top + c.scrollTop - l.y,
    width: a.width,
    height: a.height
  };
}
function pd(e) {
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
function fd(e) {
  var t = pd(e);
  return Ou.reduce(function(n, r) {
    return n.concat(t.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function md(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function hd(e) {
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
var Ps = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ss() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function vd(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, i = t.defaultOptions, s = i === void 0 ? Ps : i;
  return function(c, l, u) {
    u === void 0 && (u = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ps, s),
      modifiersData: {},
      elements: {
        reference: c,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], m = !1, g = {
      state: d,
      setOptions: function(O) {
        var R = typeof O == "function" ? O(d.options) : O;
        f(), d.options = Object.assign({}, s, d.options, R), d.scrollParents = {
          reference: Xt(c) ? Xn(c) : c.contextElement ? Xn(c.contextElement) : [],
          popper: Xn(l)
        };
        var w = fd(hd([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(E) {
          return E.enabled;
        }), v(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var O = d.elements, R = O.reference, w = O.popper;
          if (Ss(R, w)) {
            d.rects = {
              reference: dd(R, ar(w), d.options.strategy === "fixed"),
              popper: hi(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
              return d.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var h = d.orderedModifiers[E], P = h.fn, C = h.options, V = C === void 0 ? {} : C, L = h.name;
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
      update: md(function() {
        return new Promise(function(y) {
          g.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        f(), m = !0;
      }
    };
    if (!Ss(c, l))
      return g;
    g.setOptions(u).then(function(y) {
      !m && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function v() {
      d.orderedModifiers.forEach(function(y) {
        var O = y.name, R = y.options, w = R === void 0 ? {} : R, E = y.effect;
        if (typeof E == "function") {
          var h = E({
            state: d,
            name: O,
            instance: g,
            options: w
          }), P = function() {
          };
          p.push(h || P);
        }
      });
    }
    function f() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return g;
  };
}
var yd = [Vu, od, Lu, Pu, nd, Ju, ad, ku, Qu], gd = /* @__PURE__ */ vd({
  defaultModifiers: yd
});
function bd(e) {
  return typeof e == "function" ? e() : e;
}
const tr = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const {
    children: r,
    container: i,
    disablePortal: s = !1
  } = t, [a, c] = b.useState(null), l = Ue(/* @__PURE__ */ b.isValidElement(r) ? r.ref : null, n);
  if (Tt(() => {
    s || c(bd(i) || document.body);
  }, [i, s]), Tt(() => {
    if (a && !s)
      return Fr(n, a), () => {
        Fr(n, null);
      };
  }, [n, a, s]), s) {
    if (/* @__PURE__ */ b.isValidElement(r)) {
      const u = {
        ref: l
      };
      return /* @__PURE__ */ b.cloneElement(r, u);
    }
    return /* @__PURE__ */ N.jsx(b.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ N.jsx(b.Fragment, {
    children: a && /* @__PURE__ */ ml.createPortal(r, a)
  });
});
process.env.NODE_ENV !== "production" && (tr.propTypes = {
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
  container: o.oneOfType([St, o.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool
});
process.env.NODE_ENV !== "production" && (tr["propTypes"] = ja(tr.propTypes));
function xd(e) {
  return Re("MuiPopper", e);
}
$e("MuiPopper", ["root"]);
const Ed = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Td = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function wd(e, t) {
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
function Ur(e) {
  return typeof e == "function" ? e() : e;
}
function to(e) {
  return e.nodeType !== void 0;
}
function Od(e) {
  return !to(e);
}
const Cd = () => Ne({
  root: ["root"]
}, ru(xd)), Rd = {}, Pd = /* @__PURE__ */ b.forwardRef(function(t, n) {
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
    popperRef: m,
    slotProps: g = {},
    slots: v = {},
    TransitionProps: f
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, y = oe(t, Ed), O = b.useRef(null), R = Ue(O, n), w = b.useRef(null), E = Ue(w, m), h = b.useRef(E);
  Tt(() => {
    h.current = E;
  }, [E]), b.useImperativeHandle(m, () => w.current, []);
  const P = wd(d, a), [C, V] = b.useState(P), [L, $] = b.useState(Ur(i));
  b.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), b.useEffect(() => {
    i && $(Ur(i));
  }, [i]), Tt(() => {
    if (!L || !u)
      return;
    const D = (G) => {
      V(G.placement);
    };
    if (process.env.NODE_ENV !== "production" && L && to(L) && L.nodeType === 1) {
      const G = L.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && G.top === 0 && G.left === 0 && G.right === 0 && G.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
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
        D(G);
      }
    }];
    l != null && (M = M.concat(l)), p && p.modifiers != null && (M = M.concat(p.modifiers));
    const U = gd(L, O.current, T({
      placement: P
    }, p, {
      modifiers: M
    }));
    return h.current(U), () => {
      U.destroy(), h.current(null);
    };
  }, [L, c, l, u, p, P]);
  const z = {
    placement: C
  };
  f !== null && (z.TransitionProps = f);
  const W = Cd(), B = (r = v.root) != null ? r : "div", I = Lt({
    elementType: B,
    externalSlotProps: g.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: R
    },
    ownerState: t,
    className: W.root
  });
  return /* @__PURE__ */ N.jsx(B, T({}, I, {
    children: typeof s == "function" ? s(z) : s
  }));
}), Qa = /* @__PURE__ */ b.forwardRef(function(t, n) {
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
    popperOptions: m = Rd,
    popperRef: g,
    style: v,
    transition: f = !1,
    slotProps: y = {},
    slots: O = {}
  } = t, R = oe(t, Td), [w, E] = b.useState(!0), h = () => {
    E(!1);
  }, P = () => {
    E(!0);
  };
  if (!l && !d && (!f || w))
    return null;
  let C;
  if (s)
    C = s;
  else if (r) {
    const $ = Ur(r);
    C = $ && to($) ? Je($).body : Je(null).body;
  }
  const V = !d && l && (!f || w) ? "none" : void 0, L = f ? {
    in: d,
    onEnter: h,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ N.jsx(tr, {
    disablePortal: c,
    container: C,
    children: /* @__PURE__ */ N.jsx(Pd, T({
      anchorEl: r,
      direction: a,
      disablePortal: c,
      modifiers: u,
      ref: n,
      open: f ? !w : d,
      placement: p,
      popperOptions: m,
      popperRef: g,
      slotProps: y,
      slots: O
    }, R, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: V
      }, v),
      TransitionProps: L,
      children: i
    }))
  });
});
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
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
  anchorEl: Ft(o.oneOfType([St, o.object, o.func]), (e) => {
    if (e.open) {
      const t = Ur(e.anchorEl);
      if (t && to(t) && t.nodeType === 1) {
        const n = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && n.top === 0 && n.left === 0 && n.right === 0 && n.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Od(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
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
  container: o.oneOfType([St, o.func]),
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
function Sd(e) {
  const t = Je(e);
  return t.body === e ? yn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Jn(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function $s(e) {
  return parseInt(yn(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function $d(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function _s(e, t, n, r, i) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (a) => {
    const c = s.indexOf(a) === -1, l = !$d(a);
    c && l && Jn(a, i);
  });
}
function Mo(e, t) {
  let n = -1;
  return e.some((r, i) => t(r) ? (n = i, !0) : !1), n;
}
function _d(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Sd(r)) {
      const a = Fa(Je(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${$s(r) + a}px`;
      const c = Je(r).querySelectorAll(".mui-fixed");
      [].forEach.call(c, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${$s(l) + a}px`;
      });
    }
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = Je(r).body;
    else {
      const a = r.parentElement, c = yn(r);
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
function Nd(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class Id {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Jn(t.modalRef, !1);
    const i = Nd(n);
    _s(n, t.mount, t.modalRef, i, !0);
    const s = Mo(this.containers, (a) => a.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: i
    }), r);
  }
  mount(t, n) {
    const r = Mo(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[r];
    i.restore || (i.restore = _d(i, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const i = Mo(this.containers, (a) => a.modals.indexOf(t) !== -1), s = this.containers[i];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && Jn(t.modalRef, n), _s(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(i, 1);
    else {
      const a = s.modals[s.modals.length - 1];
      a.modalRef && Jn(a.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Md(e) {
  return typeof e == "function" ? e() : e;
}
function kd(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const jd = new Id();
function Dd(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: i = jd,
    closeAfterTransition: s = !1,
    onTransitionEnter: a,
    onTransitionExited: c,
    children: l,
    onClose: u,
    open: d,
    rootRef: p
  } = e, m = b.useRef({}), g = b.useRef(null), v = b.useRef(null), f = Ue(v, p), [y, O] = b.useState(!d), R = kd(l);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const E = () => Je(g.current), h = () => (m.current.modalRef = v.current, m.current.mount = g.current, m.current), P = () => {
    i.mount(h(), {
      disableScrollLock: r
    }), v.current && (v.current.scrollTop = 0);
  }, C = Dt(() => {
    const M = Md(t) || E().body;
    i.add(h(), M), v.current && P();
  }), V = b.useCallback(() => i.isTopModal(h()), [i]), L = Dt((M) => {
    g.current = M, M && (d && V() ? P() : v.current && Jn(v.current, w));
  }), $ = b.useCallback(() => {
    i.remove(h(), w);
  }, [w, i]);
  b.useEffect(() => () => {
    $();
  }, [$]), b.useEffect(() => {
    d ? C() : (!R || !s) && $();
  }, [d, $, R, s, C]);
  const z = (M) => (U) => {
    var G;
    (G = M.onKeyDown) == null || G.call(M, U), !(U.key !== "Escape" || !V()) && (n || (U.stopPropagation(), u && u(U, "escapeKeyDown")));
  }, W = (M) => (U) => {
    var G;
    (G = M.onClick) == null || G.call(M, U), U.target === U.currentTarget && u && u(U, "backdropClick");
  };
  return {
    getRootProps: (M = {}) => {
      const U = Ua(e);
      delete U.onTransitionEnter, delete U.onTransitionExited;
      const G = T({}, U, M);
      return T({
        role: "presentation"
      }, G, {
        onKeyDown: z(G),
        ref: f
      });
    },
    getBackdropProps: (M = {}) => {
      const U = M;
      return T({
        "aria-hidden": !0
      }, U, {
        onClick: W(U),
        open: d
      });
    },
    getTransitionProps: () => {
      const M = () => {
        O(!1), a && a();
      }, U = () => {
        O(!0), c && c(), s && $();
      };
      return {
        onEnter: Wo(M, l == null ? void 0 : l.props.onEnter),
        onExited: Wo(U, l == null ? void 0 : l.props.onExited)
      };
    },
    rootRef: f,
    portalRef: L,
    isTopModal: V,
    exited: y,
    hasTransition: R
  };
}
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
function ec(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ad = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ld = /* @__PURE__ */ ec(
  function(e) {
    return Ad.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function Fd(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Vd(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Bd = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Vd(this));
    var i = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var s = r.charCodeAt(0) === 64 && r.charCodeAt(1) === 105;
      s && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + r + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !s;
    }
    if (this.isSpeedy) {
      var a = Fd(i);
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
}(), He = "-ms-", Wr = "-moz-", he = "-webkit-", Ei = "comm", Ti = "rule", wi = "decl", zd = "@import", tc = "@keyframes", Ud = "@layer", Wd = Math.abs, no = String.fromCharCode, Yd = Object.assign;
function qd(e, t) {
  return Ye(e, 0) ^ 45 ? (((t << 2 ^ Ye(e, 0)) << 2 ^ Ye(e, 1)) << 2 ^ Ye(e, 2)) << 2 ^ Ye(e, 3) : 0;
}
function nc(e) {
  return e.trim();
}
function Hd(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ve(e, t, n) {
  return e.replace(t, n);
}
function Xo(e, t) {
  return e.indexOf(t);
}
function Ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function nr(e, t, n) {
  return e.slice(t, n);
}
function gt(e) {
  return e.length;
}
function Oi(e) {
  return e.length;
}
function Or(e, t) {
  return t.push(e), e;
}
function Gd(e, t) {
  return e.map(t).join("");
}
var ro = 1, Tn = 1, rc = 0, rt = 0, Ve = 0, Rn = "";
function oo(e, t, n, r, i, s, a) {
  return { value: e, root: t, parent: n, type: r, props: i, children: s, line: ro, column: Tn, length: a, return: "" };
}
function Fn(e, t) {
  return Yd(oo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Kd() {
  return Ve;
}
function Xd() {
  return Ve = rt > 0 ? Ye(Rn, --rt) : 0, Tn--, Ve === 10 && (Tn = 1, ro--), Ve;
}
function st() {
  return Ve = rt < rc ? Ye(Rn, rt++) : 0, Tn++, Ve === 10 && (Tn = 1, ro++), Ve;
}
function Et() {
  return Ye(Rn, rt);
}
function Mr() {
  return rt;
}
function cr(e, t) {
  return nr(Rn, e, t);
}
function rr(e) {
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
function oc(e) {
  return ro = Tn = 1, rc = gt(Rn = e), rt = 0, [];
}
function ic(e) {
  return Rn = "", e;
}
function kr(e) {
  return nc(cr(rt - 1, Jo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Jd(e) {
  for (; (Ve = Et()) && Ve < 33; )
    st();
  return rr(e) > 2 || rr(Ve) > 3 ? "" : " ";
}
function Zd(e, t) {
  for (; --t && st() && !(Ve < 48 || Ve > 102 || Ve > 57 && Ve < 65 || Ve > 70 && Ve < 97); )
    ;
  return cr(e, Mr() + (t < 6 && Et() == 32 && st() == 32));
}
function Jo(e) {
  for (; st(); )
    switch (Ve) {
      case e:
        return rt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Jo(Ve);
        break;
      case 40:
        e === 41 && Jo(e);
        break;
      case 92:
        st();
        break;
    }
  return rt;
}
function Qd(e, t) {
  for (; st() && e + Ve !== 47 + 10; )
    if (e + Ve === 42 + 42 && Et() === 47)
      break;
  return "/*" + cr(t, rt - 1) + "*" + no(e === 47 ? e : st());
}
function ep(e) {
  for (; !rr(Et()); )
    st();
  return cr(e, rt);
}
function tp(e) {
  return ic(jr("", null, null, null, [""], e = oc(e), 0, [0], e));
}
function jr(e, t, n, r, i, s, a, c, l) {
  for (var u = 0, d = 0, p = a, m = 0, g = 0, v = 0, f = 1, y = 1, O = 1, R = 0, w = "", E = i, h = s, P = r, C = w; y; )
    switch (v = R, R = st()) {
      case 40:
        if (v != 108 && Ye(C, p - 1) == 58) {
          Xo(C += ve(kr(R), "&", "&\f"), "&\f") != -1 && (O = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += kr(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Jd(v);
        break;
      case 92:
        C += Zd(Mr() - 1, 7);
        continue;
      case 47:
        switch (Et()) {
          case 42:
          case 47:
            Or(np(Qd(st(), Mr()), t, n), l);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * f:
        c[u++] = gt(C) * O;
      case 125 * f:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            y = 0;
          case 59 + d:
            O == -1 && (C = ve(C, /\f/g, "")), g > 0 && gt(C) - p && Or(g > 32 ? Is(C + ";", r, n, p - 1) : Is(ve(C, " ", "") + ";", r, n, p - 2), l);
            break;
          case 59:
            C += ";";
          default:
            if (Or(P = Ns(C, t, n, u, d, i, c, w, E = [], h = [], p), s), R === 123)
              if (d === 0)
                jr(C, t, P, P, E, s, p, c, h);
              else
                switch (m === 99 && Ye(C, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    jr(e, P, P, r && Or(Ns(e, P, P, 0, 0, i, c, w, i, E = [], p), h), i, h, p, c, r ? E : h);
                    break;
                  default:
                    jr(C, P, P, P, [""], h, 0, c, h);
                }
        }
        u = d = g = 0, f = O = 1, w = C = "", p = a;
        break;
      case 58:
        p = 1 + gt(C), g = v;
      default:
        if (f < 1) {
          if (R == 123)
            --f;
          else if (R == 125 && f++ == 0 && Xd() == 125)
            continue;
        }
        switch (C += no(R), R * f) {
          case 38:
            O = d > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            c[u++] = (gt(C) - 1) * O, O = 1;
            break;
          case 64:
            Et() === 45 && (C += kr(st())), m = Et(), d = p = gt(w = C += ep(Mr())), R++;
            break;
          case 45:
            v === 45 && gt(C) == 2 && (f = 0);
        }
    }
  return s;
}
function Ns(e, t, n, r, i, s, a, c, l, u, d) {
  for (var p = i - 1, m = i === 0 ? s : [""], g = Oi(m), v = 0, f = 0, y = 0; v < r; ++v)
    for (var O = 0, R = nr(e, p + 1, p = Wd(f = a[v])), w = e; O < g; ++O)
      (w = nc(f > 0 ? m[O] + " " + R : ve(R, /&\f/g, m[O]))) && (l[y++] = w);
  return oo(e, t, n, i === 0 ? Ti : c, l, u, d);
}
function np(e, t, n) {
  return oo(e, t, n, Ei, no(Kd()), nr(e, 2, -2), 0);
}
function Is(e, t, n, r) {
  return oo(e, t, n, wi, nr(e, 0, r), nr(e, r + 1, -1), r);
}
function pn(e, t) {
  for (var n = "", r = Oi(e), i = 0; i < r; i++)
    n += t(e[i], i, e, t) || "";
  return n;
}
function rp(e, t, n, r) {
  switch (e.type) {
    case Ud:
      if (e.children.length)
        break;
    case zd:
    case wi:
      return e.return = e.return || e.value;
    case Ei:
      return "";
    case tc:
      return e.return = e.value + "{" + pn(e.children, r) + "}";
    case Ti:
      e.value = e.props.join(",");
  }
  return gt(n = pn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function op(e) {
  var t = Oi(e);
  return function(n, r, i, s) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](n, r, i, s) || "";
    return a;
  };
}
function ip(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var sp = function(t, n, r) {
  for (var i = 0, s = 0; i = s, s = Et(), i === 38 && s === 12 && (n[r] = 1), !rr(s); )
    st();
  return cr(t, rt);
}, ap = function(t, n) {
  var r = -1, i = 44;
  do
    switch (rr(i)) {
      case 0:
        i === 38 && Et() === 12 && (n[r] = 1), t[r] += sp(rt - 1, n, r);
        break;
      case 2:
        t[r] += kr(i);
        break;
      case 4:
        if (i === 44) {
          t[++r] = Et() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += no(i);
    }
  while (i = st());
  return t;
}, cp = function(t, n) {
  return ic(ap(oc(t), n));
}, Ms = /* @__PURE__ */ new WeakMap(), lp = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, i = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ms.get(r)) && !i) {
      Ms.set(t, !0);
      for (var s = [], a = cp(n, s), c = r.props, l = 0, u = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, u++)
          t.props[u] = s[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, up = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, dp = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", pp = function(t) {
  return t.type === "comm" && t.children.indexOf(dp) > -1;
}, fp = function(t) {
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
            if (pp(u))
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
}, sc = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, mp = function(t, n) {
  for (var r = t - 1; r >= 0; r--)
    if (!sc(n[r]))
      return !0;
  return !1;
}, ks = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, hp = function(t, n, r) {
  sc(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), ks(t)) : mp(n, r) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), ks(t)));
};
function ac(e, t) {
  switch (qd(e, t)) {
    case 5103:
      return he + "print-" + e + e;
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
      return he + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return he + e + Wr + e + He + e + e;
    case 6828:
    case 4268:
      return he + e + He + e + e;
    case 6165:
      return he + e + He + "flex-" + e + e;
    case 5187:
      return he + e + ve(e, /(\w+).+(:[^]+)/, he + "box-$1$2" + He + "flex-$1$2") + e;
    case 5443:
      return he + e + He + "flex-item-" + ve(e, /flex-|-self/, "") + e;
    case 4675:
      return he + e + He + "flex-line-pack" + ve(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return he + e + He + ve(e, "shrink", "negative") + e;
    case 5292:
      return he + e + He + ve(e, "basis", "preferred-size") + e;
    case 6060:
      return he + "box-" + ve(e, "-grow", "") + he + e + He + ve(e, "grow", "positive") + e;
    case 4554:
      return he + ve(e, /([^-])(transform)/g, "$1" + he + "$2") + e;
    case 6187:
      return ve(ve(ve(e, /(zoom-|grab)/, he + "$1"), /(image-set)/, he + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ve(e, /(image-set\([^]*)/, he + "$1$`$1");
    case 4968:
      return ve(ve(e, /(.+:)(flex-)?(.*)/, he + "box-pack:$3" + He + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + he + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ve(e, /(.+)-inline(.+)/, he + "$1$2") + e;
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
      if (gt(e) - 1 - t > 6)
        switch (Ye(e, t + 1)) {
          case 109:
            if (Ye(e, t + 4) !== 45)
              break;
          case 102:
            return ve(e, /(.+:)(.+)-([^]+)/, "$1" + he + "$2-$3$1" + Wr + (Ye(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Xo(e, "stretch") ? ac(ve(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Ye(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Ye(e, gt(e) - 3 - (~Xo(e, "!important") && 10))) {
        case 107:
          return ve(e, ":", ":" + he) + e;
        case 101:
          return ve(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + he + (Ye(e, 14) === 45 ? "inline-" : "") + "box$3$1" + he + "$2$3$1" + He + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ye(e, t + 11)) {
        case 114:
          return he + e + He + ve(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return he + e + He + ve(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return he + e + He + ve(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return he + e + He + e + e;
  }
  return e;
}
var vp = function(t, n, r, i) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case wi:
        t.return = ac(t.value, t.length);
        break;
      case tc:
        return pn([Fn(t, {
          value: ve(t.value, "@", "@" + he)
        })], i);
      case Ti:
        if (t.length)
          return Gd(t.props, function(s) {
            switch (Hd(s, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return pn([Fn(t, {
                  props: [ve(s, /:(read-\w+)/, ":" + Wr + "$1")]
                })], i);
              case "::placeholder":
                return pn([Fn(t, {
                  props: [ve(s, /:(plac\w+)/, ":" + he + "input-$1")]
                }), Fn(t, {
                  props: [ve(s, /:(plac\w+)/, ":" + Wr + "$1")]
                }), Fn(t, {
                  props: [ve(s, /:(plac\w+)/, He + "input-$1")]
                })], i);
            }
            return "";
          });
    }
}, yp = [vp], gp = function(t) {
  var n = t.key;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(f) {
      var y = f.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(f), f.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || yp;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(n))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + n + '" was passed');
  var s = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(f) {
      for (var y = f.getAttribute("data-emotion").split(" "), O = 1; O < y.length; O++)
        s[y[O]] = !0;
      c.push(f);
    }
  );
  var l, u = [lp, up];
  process.env.NODE_ENV !== "production" && u.push(fp({
    get compat() {
      return v.compat;
    }
  }), hp);
  {
    var d, p = [rp, process.env.NODE_ENV !== "production" ? function(f) {
      f.root || (f.return ? d.insert(f.return) : f.value && f.type !== Ei && d.insert(f.value + "{}"));
    } : ip(function(f) {
      d.insert(f);
    })], m = op(u.concat(i, p)), g = function(y) {
      return pn(tp(y), m);
    };
    l = function(y, O, R, w) {
      d = R, process.env.NODE_ENV !== "production" && O.map !== void 0 && (d = {
        insert: function(h) {
          R.insert(h + O.map);
        }
      }), g(y ? y + "{" + O.styles + "}" : O.styles), w && (v.inserted[O.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Bd({
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
  return v.sheet.hydrate(c), v;
}, Zo = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js;
function bp() {
  if (js)
    return Te;
  js = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
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
                case v:
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
    return w(h) === u;
  }
  return Te.AsyncMode = l, Te.ConcurrentMode = u, Te.ContextConsumer = c, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = d, Te.Fragment = r, Te.Lazy = v, Te.Memo = g, Te.Portal = n, Te.Profiler = s, Te.StrictMode = i, Te.Suspense = p, Te.isAsyncMode = function(h) {
    return E(h) || w(h) === l;
  }, Te.isConcurrentMode = E, Te.isContextConsumer = function(h) {
    return w(h) === c;
  }, Te.isContextProvider = function(h) {
    return w(h) === a;
  }, Te.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, Te.isForwardRef = function(h) {
    return w(h) === d;
  }, Te.isFragment = function(h) {
    return w(h) === r;
  }, Te.isLazy = function(h) {
    return w(h) === v;
  }, Te.isMemo = function(h) {
    return w(h) === g;
  }, Te.isPortal = function(h) {
    return w(h) === n;
  }, Te.isProfiler = function(h) {
    return w(h) === s;
  }, Te.isStrictMode = function(h) {
    return w(h) === i;
  }, Te.isSuspense = function(h) {
    return w(h) === p;
  }, Te.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === u || h === s || h === i || h === p || h === m || typeof h == "object" && h !== null && (h.$$typeof === v || h.$$typeof === g || h.$$typeof === a || h.$$typeof === c || h.$$typeof === d || h.$$typeof === y || h.$$typeof === O || h.$$typeof === R || h.$$typeof === f);
  }, Te.typeOf = w, Te;
}
var we = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function xp() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, f = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === r || S === u || S === s || S === i || S === p || S === m || typeof S == "object" && S !== null && (S.$$typeof === v || S.$$typeof === g || S.$$typeof === a || S.$$typeof === c || S.$$typeof === d || S.$$typeof === y || S.$$typeof === O || S.$$typeof === R || S.$$typeof === f);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var ne = S.$$typeof;
        switch (ne) {
          case t:
            var A = S.type;
            switch (A) {
              case l:
              case u:
              case r:
              case s:
              case i:
              case p:
                return A;
              default:
                var ue = A && A.$$typeof;
                switch (ue) {
                  case c:
                  case d:
                  case v:
                  case g:
                  case a:
                    return ue;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var h = l, P = u, C = c, V = a, L = t, $ = d, z = r, W = v, B = g, I = n, D = s, M = i, U = p, G = !1;
    function ee(S) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), _(S) || E(S) === l;
    }
    function _(S) {
      return E(S) === u;
    }
    function F(S) {
      return E(S) === c;
    }
    function X(S) {
      return E(S) === a;
    }
    function te(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function H(S) {
      return E(S) === d;
    }
    function K(S) {
      return E(S) === r;
    }
    function J(S) {
      return E(S) === v;
    }
    function Q(S) {
      return E(S) === g;
    }
    function k(S) {
      return E(S) === n;
    }
    function Y(S) {
      return E(S) === s;
    }
    function Z(S) {
      return E(S) === i;
    }
    function le(S) {
      return E(S) === p;
    }
    we.AsyncMode = h, we.ConcurrentMode = P, we.ContextConsumer = C, we.ContextProvider = V, we.Element = L, we.ForwardRef = $, we.Fragment = z, we.Lazy = W, we.Memo = B, we.Portal = I, we.Profiler = D, we.StrictMode = M, we.Suspense = U, we.isAsyncMode = ee, we.isConcurrentMode = _, we.isContextConsumer = F, we.isContextProvider = X, we.isElement = te, we.isForwardRef = H, we.isFragment = K, we.isLazy = J, we.isMemo = Q, we.isPortal = k, we.isProfiler = Y, we.isStrictMode = Z, we.isSuspense = le, we.isValidElementType = w, we.typeOf = E;
  }()), we;
}
process.env.NODE_ENV === "production" ? Zo.exports = bp() : Zo.exports = xp();
var Ep = Zo.exports, cc = Ep, Tp = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, wp = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, lc = {};
lc[cc.ForwardRef] = Tp;
lc[cc.Memo] = wp;
var Op = !0;
function Ci(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : r += i + " ";
  }), r;
}
var io = function(t, n, r) {
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
  Op === !1) && t.registered[i] === void 0 && (t.registered[i] = n.styles);
}, so = function(t, n, r) {
  io(t, n, r);
  var i = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + i : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function Cp(e) {
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
var Rp = {
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
}, As = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Pp = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Sp = /[A-Z]|^ms/g, uc = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ri = function(t) {
  return t.charCodeAt(1) === 45;
}, Ls = function(t) {
  return t != null && typeof t != "boolean";
}, ko = /* @__PURE__ */ ec(function(e) {
  return Ri(e) ? e : e.replace(Sp, "-$&").toLowerCase();
}), Yr = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(uc, function(r, i, s) {
          return pt = {
            name: i,
            styles: s,
            next: pt
          }, i;
        });
  }
  return Rp[t] !== 1 && !Ri(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
if (process.env.NODE_ENV !== "production") {
  var $p = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, _p = ["normal", "none", "initial", "inherit", "unset"], Np = Yr, Ip = /^-ms-/, Mp = /-(.)/g, Fs = {};
  Yr = function(t, n) {
    if (t === "content" && (typeof n != "string" || _p.indexOf(n) === -1 && !$p.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + n + "\"'`");
    var r = Np(t, n);
    return r !== "" && !Ri(t) && t.indexOf("-") !== -1 && Fs[t] === void 0 && (Fs[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Ip, "ms-").replace(Mp, function(i, s) {
      return s.toUpperCase();
    }) + "?")), r;
  };
}
var dc = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function or(e, t, n) {
  if (n == null)
    return "";
  if (n.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && n.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(dc);
    return n;
  }
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return pt = {
          name: n.name,
          styles: n.styles,
          next: pt
        }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            pt = {
              name: r.name,
              styles: r.styles,
              next: pt
            }, r = r.next;
        var i = n.styles + ";";
        return process.env.NODE_ENV !== "production" && n.map !== void 0 && (i += n.map), i;
      }
      return kp(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = pt, a = n(e);
        return pt = s, or(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var c = [], l = n.replace(uc, function(d, p, m) {
          var g = "animation" + c.length;
          return c.push("const " + g + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + g + "}";
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
function kp(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var i = 0; i < n.length; i++)
      r += or(e, t, n[i]) + ";";
  else
    for (var s in n) {
      var a = n[s];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? r += s + "{" + t[a] + "}" : Ls(a) && (r += ko(s) + ":" + Yr(s, a) + ";");
      else {
        if (s === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(dc);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var c = 0; c < a.length; c++)
            Ls(a[c]) && (r += ko(s) + ":" + Yr(s, a[c]) + ";");
        else {
          var l = or(e, t, a);
          switch (s) {
            case "animation":
            case "animationName": {
              r += ko(s) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && s === "undefined" && console.error(Pp), r += s + "{" + l + "}";
          }
        }
      }
    }
  return r;
}
var Vs = /label:\s*([^\s;\n{]+)\s*(;|$)/g, pc;
process.env.NODE_ENV !== "production" && (pc = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var pt, wn = function(t, n, r) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var i = !0, s = "";
  pt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (i = !1, s += or(r, n, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(As), s += a[0]);
  for (var c = 1; c < t.length; c++)
    s += or(r, n, t[c]), i && (process.env.NODE_ENV !== "production" && a[c] === void 0 && console.error(As), s += a[c]);
  var l;
  process.env.NODE_ENV !== "production" && (s = s.replace(pc, function(m) {
    return l = m, "";
  })), Vs.lastIndex = 0;
  for (var u = "", d; (d = Vs.exec(s)) !== null; )
    u += "-" + // $FlowFixMe we know it's not null
    d[1];
  var p = Cp(s) + u;
  return process.env.NODE_ENV !== "production" ? {
    name: p,
    styles: s,
    map: l,
    next: pt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: p,
    styles: s,
    next: pt
  };
}, jp = function(t) {
  return t();
}, fc = b["useInsertionEffect"] ? b["useInsertionEffect"] : !1, Pi = fc || jp, Bs = fc || b.useLayoutEffect, Dp = {}.hasOwnProperty, Si = /* @__PURE__ */ b.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ gp({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Si.displayName = "EmotionCacheContext");
Si.Provider;
var ao = function(t) {
  return /* @__PURE__ */ pl(function(n, r) {
    var i = mn(Si);
    return t(n, i, r);
  });
}, Pn = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Pn.displayName = "EmotionThemeContext");
var zs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Us = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ap = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return io(n, r, i), Pi(function() {
    return so(n, r, i);
  }), null;
}, Lp = /* @__PURE__ */ ao(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var i = e[zs], s = [r], a = "";
  typeof e.className == "string" ? a = Ci(t.registered, s, e.className) : e.className != null && (a = e.className + " ");
  var c = wn(s, void 0, b.useContext(Pn));
  if (process.env.NODE_ENV !== "production" && c.name.indexOf("-") === -1) {
    var l = e[Us];
    l && (c = wn([c, "label:" + l + ";"]));
  }
  a += t.key + "-" + c.name;
  var u = {};
  for (var d in e)
    Dp.call(e, d) && d !== "css" && d !== zs && (process.env.NODE_ENV === "production" || d !== Us) && (u[d] = e[d]);
  return u.ref = n, u.className = a, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Ap, {
    cache: t,
    serialized: c,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ b.createElement(i, u));
});
process.env.NODE_ENV !== "production" && (Lp.displayName = "EmotionCssPropInternal");
var Fp = {
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
}, Ws = !1, Vp = /* @__PURE__ */ ao(function(e, t) {
  process.env.NODE_ENV !== "production" && !Ws && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Ws = !0);
  var n = e.styles, r = wn([n], void 0, b.useContext(Pn)), i = b.useRef();
  return Bs(function() {
    var s = t.key + "-global", a = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), c = !1, l = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (c = !0, l.setAttribute("data-emotion", s), a.hydrate([l])), i.current = [a, c], function() {
      a.flush();
    };
  }, [t]), Bs(function() {
    var s = i.current, a = s[0], c = s[1];
    if (c) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && so(t, r.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", r, a, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (Vp.displayName = "EmotionGlobal");
function $i() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return wn(t);
}
var lr = function() {
  var t = $i.apply(void 0, arguments), n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Bp = function e(t) {
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
function zp(e, t, n) {
  var r = [], i = Ci(e, r, n);
  return r.length < 2 ? n : i + t(r);
}
var Up = function(t) {
  var n = t.cache, r = t.serializedArr;
  return Pi(function() {
    for (var i = 0; i < r.length; i++)
      so(n, r[i], !1);
  }), null;
}, Wp = /* @__PURE__ */ ao(function(e, t) {
  var n = !1, r = [], i = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    var m = wn(d, t.registered);
    return r.push(m), io(t, m, !1), t.key + "-" + m.name;
  }, s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    return zp(t.registered, i, Bp(d));
  }, a = {
    css: i,
    cx: s,
    theme: b.useContext(Pn)
  }, c = e.children(a);
  return n = !0, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Up, {
    cache: t,
    serializedArr: r
  }), c);
});
process.env.NODE_ENV !== "production" && (Wp.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Ys = !0, Yp = typeof jest < "u" || typeof vi < "u";
  if (Ys && !Yp) {
    var qs = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Ys ? window : global
    ), Hs = "__EMOTION_REACT_" + Fp.version.split(".")[0] + "__";
    qs[Hs] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), qs[Hs] = !0;
  }
}
var qp = Ld, Hp = function(t) {
  return t !== "theme";
}, Gs = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? qp : Hp;
}, Ks = function(t, n, r) {
  var i;
  if (n) {
    var s = n.shouldForwardProp;
    i = t.__emotion_forwardProp && s ? function(a) {
      return t.__emotion_forwardProp(a) && s(a);
    } : s;
  }
  return typeof i != "function" && r && (i = t.__emotion_forwardProp), i;
}, Xs = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Gp = function(t) {
  var n = t.cache, r = t.serialized, i = t.isStringTag;
  return io(n, r, i), Pi(function() {
    return so(n, r, i);
  }), null;
}, Kp = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, i = r && t.__emotion_base || t, s, a;
  n !== void 0 && (s = n.label, a = n.target);
  var c = Ks(t, n, r), l = c || Gs(i), u = !l("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && p.push("label:" + s + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Xs), p.push(d[0][0]);
      for (var m = d.length, g = 1; g < m; g++)
        process.env.NODE_ENV !== "production" && d[0][g] === void 0 && console.error(Xs), p.push(d[g], d[0][g]);
    }
    var v = ao(function(f, y, O) {
      var R = u && f.as || i, w = "", E = [], h = f;
      if (f.theme == null) {
        h = {};
        for (var P in f)
          h[P] = f[P];
        h.theme = b.useContext(Pn);
      }
      typeof f.className == "string" ? w = Ci(y.registered, E, f.className) : f.className != null && (w = f.className + " ");
      var C = wn(p.concat(E), y.registered, h);
      w += y.key + "-" + C.name, a !== void 0 && (w += " " + a);
      var V = u && c === void 0 ? Gs(R) : l, L = {};
      for (var $ in f)
        u && $ === "as" || // $FlowFixMe
        V($) && (L[$] = f[$]);
      return L.className = w, L.ref = O, /* @__PURE__ */ b.createElement(b.Fragment, null, /* @__PURE__ */ b.createElement(Gp, {
        cache: y,
        serialized: C,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ b.createElement(R, L));
    });
    return v.displayName = s !== void 0 ? s : "Styled(" + (typeof i == "string" ? i : i.displayName || i.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = i, v.__emotion_styles = p, v.__emotion_forwardProp = c, Object.defineProperty(v, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), v.withComponent = function(f, y) {
      return e(f, Ko({}, n, y, {
        shouldForwardProp: Ks(v, y, !0)
      })).apply(void 0, p);
    }, v;
  };
}, Xp = [
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
], Qo = Kp.bind();
Xp.forEach(function(e) {
  Qo[e] = Qo(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Jp(e, t) {
  const n = Qo(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const i = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${i})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((s) => s === void 0) && console.error(`MUI: the styled(${i})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
const Zp = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Qp = ["values", "unit", "step"], ef = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => T({}, n, {
    [r.key]: r.val
  }), {});
};
function tf(e) {
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
  } = e, i = oe(e, Qp), s = ef(t), a = Object.keys(s);
  function c(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - r / 100}${n})`;
  }
  function u(m, g) {
    const v = a.indexOf(g);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : g) - r / 100}${n})`;
  }
  function d(m) {
    return a.indexOf(m) + 1 < a.length ? u(m, a[a.indexOf(m) + 1]) : c(m);
  }
  function p(m) {
    const g = a.indexOf(m);
    return g === 0 ? c(a[1]) : g === a.length - 1 ? l(a[g]) : u(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
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
const nf = {
  borderRadius: 4
}, rf = nf, of = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.string, o.object, o.array]) : {}, Bt = of;
function Zn(e, t) {
  return t ? ht(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _i = {
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
}, Js = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${_i[e]}px)`
};
function _t(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const s = r.breakpoints || Js;
    return t.reduce((a, c, l) => (a[s.up(s.keys[l])] = n(t[l]), a), {});
  }
  if (typeof t == "object") {
    const s = r.breakpoints || Js;
    return Object.keys(t).reduce((a, c) => {
      if (Object.keys(s.values || _i).indexOf(c) !== -1) {
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
function sf(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {})) || {};
}
function af(e, t) {
  return e.reduce((n, r) => {
    const i = n[r];
    return (!i || Object.keys(i).length === 0) && delete n[r], n;
  }, t);
}
function co(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((i, s) => i && i[s] ? i[s] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, i) => r && r[i] != null ? r[i] : null, e);
}
function qr(e, t, n, r = n) {
  let i;
  return typeof e == "function" ? i = e(n) : Array.isArray(e) ? i = e[n] || r : i = co(e, n) || r, t && (i = t(i, r, e)), i;
}
function Oe(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: i
  } = e, s = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, u = co(l, r) || {};
    return _t(a, c, (p) => {
      let m = qr(u, i, p);
      return p === m && typeof p == "string" && (m = qr(u, i, `${t}${p === "default" ? "" : fe(p)}`, p)), n === !1 ? m : {
        [n]: m
      };
    });
  };
  return s.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Bt
  } : {}, s.filterProps = [t], s;
}
function cf(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const lf = {
  m: "margin",
  p: "padding"
}, uf = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zs = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, df = cf((e) => {
  if (e.length > 2)
    if (Zs[e])
      e = Zs[e];
    else
      return [e];
  const [t, n] = e.split(""), r = lf[t], i = uf[n] || "";
  return Array.isArray(i) ? i.map((s) => r + s) : [r + i];
}), lo = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], uo = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], pf = [...lo, ...uo];
function ur(e, t, n, r) {
  var i;
  const s = (i = co(e, t, !1)) != null ? i : n;
  return typeof s == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${a}.`), s * a) : Array.isArray(s) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > s.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(s)}.`, `${a} > ${s.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), s[a]) : typeof s == "function" ? s : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${s}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function mc(e) {
  return ur(e, "spacing", 8, "spacing");
}
function dr(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function ff(e, t) {
  return (n) => e.reduce((r, i) => (r[i] = dr(t, n), r), {});
}
function mf(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const i = df(n), s = ff(i, r), a = e[n];
  return _t(e, a, s);
}
function hc(e, t) {
  const n = mc(e.theme);
  return Object.keys(e).map((r) => mf(e, t, r, n)).reduce(Zn, {});
}
function je(e) {
  return hc(e, lo);
}
je.propTypes = process.env.NODE_ENV !== "production" ? lo.reduce((e, t) => (e[t] = Bt, e), {}) : {};
je.filterProps = lo;
function De(e) {
  return hc(e, uo);
}
De.propTypes = process.env.NODE_ENV !== "production" ? uo.reduce((e, t) => (e[t] = Bt, e), {}) : {};
De.filterProps = uo;
process.env.NODE_ENV !== "production" && pf.reduce((e, t) => (e[t] = Bt, e), {});
function hf(e = 8) {
  if (e.mui)
    return e;
  const t = mc({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((s) => {
    const a = t(s);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return n.mui = !0, n;
}
function po(...e) {
  const t = e.reduce((r, i) => (i.filterProps.forEach((s) => {
    r[s] = i;
  }), r), {}), n = (r) => Object.keys(r).reduce((i, s) => t[s] ? Zn(i, t[s](r)) : i, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, i) => Object.assign(r, i.propTypes), {}) : {}, n.filterProps = e.reduce((r, i) => r.concat(i.filterProps), []), n;
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const vf = Oe({
  prop: "border",
  themeKey: "borders",
  transform: bt
}), yf = Oe({
  prop: "borderTop",
  themeKey: "borders",
  transform: bt
}), gf = Oe({
  prop: "borderRight",
  themeKey: "borders",
  transform: bt
}), bf = Oe({
  prop: "borderBottom",
  themeKey: "borders",
  transform: bt
}), xf = Oe({
  prop: "borderLeft",
  themeKey: "borders",
  transform: bt
}), Ef = Oe({
  prop: "borderColor",
  themeKey: "palette"
}), Tf = Oe({
  prop: "borderTopColor",
  themeKey: "palette"
}), wf = Oe({
  prop: "borderRightColor",
  themeKey: "palette"
}), Of = Oe({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Cf = Oe({
  prop: "borderLeftColor",
  themeKey: "palette"
}), fo = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ur(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: dr(t, r)
    });
    return _t(e, e.borderRadius, n);
  }
  return null;
};
fo.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Bt
} : {};
fo.filterProps = ["borderRadius"];
po(vf, yf, gf, bf, xf, Ef, Tf, wf, Of, Cf, fo);
const mo = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ur(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: dr(t, r)
    });
    return _t(e, e.gap, n);
  }
  return null;
};
mo.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Bt
} : {};
mo.filterProps = ["gap"];
const ho = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ur(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: dr(t, r)
    });
    return _t(e, e.columnGap, n);
  }
  return null;
};
ho.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Bt
} : {};
ho.filterProps = ["columnGap"];
const vo = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ur(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: dr(t, r)
    });
    return _t(e, e.rowGap, n);
  }
  return null;
};
vo.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Bt
} : {};
vo.filterProps = ["rowGap"];
const Rf = Oe({
  prop: "gridColumn"
}), Pf = Oe({
  prop: "gridRow"
}), Sf = Oe({
  prop: "gridAutoFlow"
}), $f = Oe({
  prop: "gridAutoColumns"
}), _f = Oe({
  prop: "gridAutoRows"
}), Nf = Oe({
  prop: "gridTemplateColumns"
}), If = Oe({
  prop: "gridTemplateRows"
}), Mf = Oe({
  prop: "gridTemplateAreas"
}), kf = Oe({
  prop: "gridArea"
});
po(mo, ho, vo, Rf, Pf, Sf, $f, _f, Nf, If, Mf, kf);
function fn(e, t) {
  return t === "grey" ? t : e;
}
const jf = Oe({
  prop: "color",
  themeKey: "palette",
  transform: fn
}), Df = Oe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fn
}), Af = Oe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fn
});
po(jf, Df, Af);
function it(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Lf = Oe({
  prop: "width",
  transform: it
}), Ni = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, i;
      const s = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || _i[n];
      return s ? ((i = e.theme) == null || (i = i.breakpoints) == null ? void 0 : i.unit) !== "px" ? {
        maxWidth: `${s}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: s
      } : {
        maxWidth: it(n)
      };
    };
    return _t(e, e.maxWidth, t);
  }
  return null;
};
Ni.filterProps = ["maxWidth"];
const Ff = Oe({
  prop: "minWidth",
  transform: it
}), Vf = Oe({
  prop: "height",
  transform: it
}), Bf = Oe({
  prop: "maxHeight",
  transform: it
}), zf = Oe({
  prop: "minHeight",
  transform: it
});
Oe({
  prop: "size",
  cssProperty: "width",
  transform: it
});
Oe({
  prop: "size",
  cssProperty: "height",
  transform: it
});
const Uf = Oe({
  prop: "boxSizing"
});
po(Lf, Ni, Ff, Vf, Bf, zf, Uf);
const Wf = {
  // borders
  border: {
    themeKey: "borders",
    transform: bt
  },
  borderTop: {
    themeKey: "borders",
    transform: bt
  },
  borderRight: {
    themeKey: "borders",
    transform: bt
  },
  borderBottom: {
    themeKey: "borders",
    transform: bt
  },
  borderLeft: {
    themeKey: "borders",
    transform: bt
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
    style: fo
  },
  // palette
  color: {
    themeKey: "palette",
    transform: fn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: fn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: fn
  },
  // spacing
  p: {
    style: De
  },
  pt: {
    style: De
  },
  pr: {
    style: De
  },
  pb: {
    style: De
  },
  pl: {
    style: De
  },
  px: {
    style: De
  },
  py: {
    style: De
  },
  padding: {
    style: De
  },
  paddingTop: {
    style: De
  },
  paddingRight: {
    style: De
  },
  paddingBottom: {
    style: De
  },
  paddingLeft: {
    style: De
  },
  paddingX: {
    style: De
  },
  paddingY: {
    style: De
  },
  paddingInline: {
    style: De
  },
  paddingInlineStart: {
    style: De
  },
  paddingInlineEnd: {
    style: De
  },
  paddingBlock: {
    style: De
  },
  paddingBlockStart: {
    style: De
  },
  paddingBlockEnd: {
    style: De
  },
  m: {
    style: je
  },
  mt: {
    style: je
  },
  mr: {
    style: je
  },
  mb: {
    style: je
  },
  ml: {
    style: je
  },
  mx: {
    style: je
  },
  my: {
    style: je
  },
  margin: {
    style: je
  },
  marginTop: {
    style: je
  },
  marginRight: {
    style: je
  },
  marginBottom: {
    style: je
  },
  marginLeft: {
    style: je
  },
  marginX: {
    style: je
  },
  marginY: {
    style: je
  },
  marginInline: {
    style: je
  },
  marginInlineStart: {
    style: je
  },
  marginInlineEnd: {
    style: je
  },
  marginBlock: {
    style: je
  },
  marginBlockStart: {
    style: je
  },
  marginBlockEnd: {
    style: je
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
    style: mo
  },
  rowGap: {
    style: vo
  },
  columnGap: {
    style: ho
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
    transform: it
  },
  maxWidth: {
    style: Ni
  },
  minWidth: {
    transform: it
  },
  height: {
    transform: it
  },
  maxHeight: {
    transform: it
  },
  minHeight: {
    transform: it
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
}, yo = Wf;
function Yf(...e) {
  const t = e.reduce((r, i) => r.concat(Object.keys(i)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function qf(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Hf() {
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
    const m = co(i, u) || {};
    return p ? p(a) : _t(a, r, (v) => {
      let f = qr(m, d, v);
      return v === f && typeof v == "string" && (f = qr(m, d, `${n}${v === "default" ? "" : fe(v)}`, v)), l === !1 ? f : {
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
    const a = (r = s.unstable_sxConfig) != null ? r : yo;
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(s);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const d = sf(s.breakpoints), p = Object.keys(d);
      let m = d;
      return Object.keys(u).forEach((g) => {
        const v = qf(u[g], s);
        if (v != null)
          if (typeof v == "object")
            if (a[g])
              m = Zn(m, e(g, v, s, a));
            else {
              const f = _t({
                theme: s
              }, v, (y) => ({
                [g]: y
              }));
              Yf(f, v) ? m[g] = t({
                sx: v,
                theme: s
              }) : m = Zn(m, f);
            }
          else
            m = Zn(m, e(g, v, s, a));
      }), af(p, m);
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return t;
}
const vc = Hf();
vc.filterProps = ["sx"];
const Ii = vc, Gf = ["breakpoints", "palette", "spacing", "shape"];
function Mi(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: i,
    shape: s = {}
  } = e, a = oe(e, Gf), c = tf(n), l = hf(i);
  let u = ht({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: l,
    shape: T({}, rf, s)
  }, a);
  return u = t.reduce((d, p) => ht(d, p), u), u.unstable_sxConfig = T({}, yo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return Ii({
      sx: p,
      theme: this
    });
  }, u;
}
function Kf(e) {
  return Object.keys(e).length === 0;
}
function yc(e = null) {
  const t = b.useContext(Pn);
  return !t || Kf(t) ? e : t;
}
const Xf = Mi();
function gc(e = Xf) {
  return yc(e);
}
const Jf = ["sx"], Zf = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, i = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : yo;
  return Object.keys(e).forEach((s) => {
    i[s] ? r.systemProps[s] = e[s] : r.otherProps[s] = e[s];
  }), r;
};
function Qf(e) {
  const {
    sx: t
  } = e, n = oe(e, Jf), {
    systemProps: r,
    otherProps: i
  } = Zf(n);
  let s;
  return Array.isArray(t) ? s = [r, ...t] : typeof t == "function" ? s = (...a) => {
    const c = t(...a);
    return Pt(c) ? T({}, r, c) : r;
  } : s = T({}, r, t), T({}, i, {
    sx: s
  });
}
const em = ["variant"];
function Qs(e) {
  return e.length === 0;
}
function bc(e) {
  const {
    variant: t
  } = e, n = oe(e, em);
  let r = t || "";
  return Object.keys(n).sort().forEach((i) => {
    i === "color" ? r += Qs(r) ? e[i] : fe(e[i]) : r += `${Qs(r) ? i : fe(i)}${fe(e[i].toString())}`;
  }), r;
}
const tm = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function nm(e) {
  return Object.keys(e).length === 0;
}
function rm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const om = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null, Hr = (e) => {
  const t = {};
  return e && e.forEach((n) => {
    const r = bc(n.props);
    t[r] = n.style;
  }), t;
}, im = (e, t) => {
  let n = [];
  return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Hr(n);
}, Gr = (e, t, n) => {
  const {
    ownerState: r = {}
  } = e, i = [];
  return n && n.forEach((s) => {
    let a = !0;
    Object.keys(s.props).forEach((c) => {
      r[c] !== s.props[c] && e[c] !== s.props[c] && (a = !1);
    }), a && i.push(t[bc(s.props)]);
  }), i;
}, sm = (e, t, n, r) => {
  var i;
  const s = n == null || (i = n.components) == null || (i = i[r]) == null ? void 0 : i.variants;
  return Gr(e, t, s);
};
function Dr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const am = Mi(), ea = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ar({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return nm(t) ? e : t[n] || t;
}
function cm(e) {
  return e ? (t, n) => n[e] : null;
}
const ta = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const i = e(T({}, t, {
    theme: Ar(T({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let s;
  if (i && i.variants && (s = i.variants, delete i.variants), s) {
    const a = Gr(t, Hr(s), s);
    return [i, ...a];
  }
  return i;
};
function lm(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = am,
    rootShouldForwardProp: r = Dr,
    slotShouldForwardProp: i = Dr
  } = e, s = (a) => Ii(T({}, a, {
    theme: Ar(T({}, a, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return s.__mui_systemSx = !0, (a, c = {}) => {
    Zp(a, (E) => E.filter((h) => !(h != null && h.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = cm(ea(u))
    } = c, g = oe(c, tm), v = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), f = p || !1;
    let y;
    process.env.NODE_ENV !== "production" && l && (y = `${l}-${ea(u || "Root")}`);
    let O = Dr;
    u === "Root" || u === "root" ? O = r : u ? O = i : rm(a) && (O = void 0);
    const R = Jp(a, T({
      shouldForwardProp: O,
      label: y
    }, g)), w = (E, ...h) => {
      const P = h ? h.map(($) => {
        if (typeof $ == "function" && $.__emotion_real !== $)
          return (z) => ta({
            styledArg: $,
            props: z,
            defaultTheme: n,
            themeId: t
          });
        if (Pt($)) {
          let z = $, W;
          return $ && $.variants && (W = $.variants, delete z.variants, z = (B) => {
            let I = $;
            return Gr(B, Hr(W), W).forEach((M) => {
              I = ht(I, M);
            }), I;
          }), z;
        }
        return $;
      }) : [];
      let C = E;
      if (Pt(E)) {
        let $;
        E && E.variants && ($ = E.variants, delete C.variants, C = (z) => {
          let W = E;
          return Gr(z, Hr($), $).forEach((I) => {
            W = ht(W, I);
          }), W;
        });
      } else
        typeof E == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        E.__emotion_real !== E && (C = ($) => ta({
          styledArg: E,
          props: $,
          defaultTheme: n,
          themeId: t
        }));
      l && m && P.push(($) => {
        const z = Ar(T({}, $, {
          defaultTheme: n,
          themeId: t
        })), W = om(l, z);
        if (W) {
          const B = {};
          return Object.entries(W).forEach(([I, D]) => {
            B[I] = typeof D == "function" ? D(T({}, $, {
              theme: z
            })) : D;
          }), m($, B);
        }
        return null;
      }), l && !v && P.push(($) => {
        const z = Ar(T({}, $, {
          defaultTheme: n,
          themeId: t
        }));
        return sm($, im(l, z), z, l);
      }), f || P.push(s);
      const V = P.length - h.length;
      if (Array.isArray(E) && V > 0) {
        const $ = new Array(V).fill("");
        C = [...E, ...$], C.raw = [...E.raw, ...$];
      }
      const L = R(C, ...P);
      if (process.env.NODE_ENV !== "production") {
        let $;
        l && ($ = `${l}${fe(u || "")}`), $ === void 0 && ($ = `Styled(${Dl(a)})`), L.displayName = $;
      }
      return a.muiName && (L.muiName = a.muiName), L;
    };
    return R.withConfig && (w.withConfig = R.withConfig), w;
  };
}
function um(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : pi(t.components[n].defaultProps, r);
}
function dm({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let i = gc(n);
  return r && (i = i[r] || i), um({
    theme: i,
    name: t,
    props: e
  });
}
function ki(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function pm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, i) => i < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Jt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Jt(pm(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : vn(9, e));
  let r = e.substring(t + 1, e.length - 1), i;
  if (n === "color") {
    if (r = r.split(" "), i = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(i) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${i}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : vn(10, i));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: i
  };
}
function go(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((i, s) => s < 3 ? parseInt(i, 10) : i) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function fm(e) {
  e = Jt(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, i = t[2] / 100, s = r * Math.min(i, 1 - i), a = (u, d = (u + n / 30) % 12) => i - s * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), go({
    type: c,
    values: l
  });
}
function ei(e) {
  e = Jt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Jt(fm(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function na(e, t) {
  const n = ei(e), r = ei(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ae(e, t) {
  return e = Jt(e), t = ki(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, go(e);
}
function xc(e, t) {
  if (e = Jt(e), t = ki(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return go(e);
}
function Ec(e, t) {
  if (e = Jt(e), t = ki(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return go(e);
}
function ti(e, t = 0.15) {
  return ei(e) > 0.5 ? xc(e, t) : Ec(e, t);
}
function mm(e, t) {
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
const hm = {
  black: "#000",
  white: "#fff"
}, ir = hm, vm = {
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
}, ym = vm, gm = {
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
}, nn = gm, bm = {
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
}, rn = bm, xm = {
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
}, Vn = xm, Em = {
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
}, on = Em, Tm = {
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
}, sn = Tm, wm = {
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
}, an = wm, Om = ["mode", "contrastThreshold", "tonalOffset"], ra = {
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
    paper: ir.white,
    default: ir.white
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
}, jo = {
  text: {
    primary: ir.white,
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
    active: ir.white,
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
function oa(e, t, n, r) {
  const i = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ec(e.main, i) : t === "dark" && (e.dark = xc(e.main, s)));
}
function Cm(e = "light") {
  return e === "dark" ? {
    main: on[200],
    light: on[50],
    dark: on[400]
  } : {
    main: on[700],
    light: on[400],
    dark: on[800]
  };
}
function Rm(e = "light") {
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
function Pm(e = "light") {
  return e === "dark" ? {
    main: rn[500],
    light: rn[300],
    dark: rn[700]
  } : {
    main: rn[700],
    light: rn[400],
    dark: rn[800]
  };
}
function Sm(e = "light") {
  return e === "dark" ? {
    main: sn[400],
    light: sn[300],
    dark: sn[700]
  } : {
    main: sn[700],
    light: sn[500],
    dark: sn[900]
  };
}
function $m(e = "light") {
  return e === "dark" ? {
    main: an[400],
    light: an[300],
    dark: an[700]
  } : {
    main: an[800],
    light: an[500],
    dark: an[900]
  };
}
function _m(e = "light") {
  return e === "dark" ? {
    main: Vn[400],
    light: Vn[300],
    dark: Vn[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Vn[500],
    dark: Vn[900]
  };
}
function Nm(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, i = oe(e, Om), s = e.primary || Cm(t), a = e.secondary || Rm(t), c = e.error || Pm(t), l = e.info || Sm(t), u = e.success || $m(t), d = e.warning || _m(t);
  function p(f) {
    const y = na(f, jo.text.primary) >= n ? jo.text.primary : ra.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = na(f, y);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${y} on ${f}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const m = ({
    color: f,
    name: y,
    mainShade: O = 500,
    lightShade: R = 300,
    darkShade: w = 700
  }) => {
    if (f = T({}, f), !f.main && f[O] && (f.main = f[O]), !f.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : vn(11, y ? ` (${y})` : "", O));
    if (typeof f.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(f.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : vn(12, y ? ` (${y})` : "", JSON.stringify(f.main)));
    return oa(f, "light", R, r), oa(f, "dark", w, r), f.contrastText || (f.contrastText = p(f.main)), f;
  }, g = {
    dark: jo,
    light: ra
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ht(T({
    // A collection of common colors.
    common: T({}, ir),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: ym,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), i);
}
const Im = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Mm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ia = {
  textTransform: "uppercase"
}, sa = '"Roboto", "Helvetica", "Arial", sans-serif';
function km(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = sa,
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
  } = n, m = oe(n, Im);
  process.env.NODE_ENV !== "production" && (typeof i != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = i / 14, v = p || ((O) => `${O / u * g}rem`), f = (O, R, w, E, h) => T({
    fontFamily: r,
    fontWeight: O,
    fontSize: v(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, r === sa ? {
    letterSpacing: `${Mm(E / R)}em`
  } : {}, h, d), y = {
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
    button: f(c, 14, 1.75, 0.4, ia),
    caption: f(a, 12, 1.66, 0.4),
    overline: f(a, 12, 2.66, 1, ia),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ht(T({
    htmlFontSize: u,
    pxToRem: v,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: a,
    fontWeightMedium: c,
    fontWeightBold: l
  }, y), m, {
    clone: !1
    // No need to clone deep
  });
}
const jm = 0.2, Dm = 0.14, Am = 0.12;
function Ie(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jm})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Dm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Am})`].join(",");
}
const Lm = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Fm = Lm, Vm = ["duration", "easing", "delay"], Bm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, zm = {
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
function aa(e) {
  return `${Math.round(e)}ms`;
}
function Um(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Wm(e) {
  const t = T({}, Bm, e.easing), n = T({}, zm, e.duration);
  return T({
    getAutoHeightDuration: Um,
    create: (i = ["all"], s = {}) => {
      const {
        duration: a = n.standard,
        easing: c = t.easeInOut,
        delay: l = 0
      } = s, u = oe(s, Vm);
      if (process.env.NODE_ENV !== "production") {
        const d = (m) => typeof m == "string", p = (m) => !isNaN(parseFloat(m));
        !d(i) && !Array.isArray(i) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof s != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(i) ? i : [i]).map((d) => `${d} ${typeof a == "string" ? a : aa(a)} ${c} ${typeof l == "string" ? l : aa(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const Ym = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, qm = Ym, Hm = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Gm(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: i = {},
    typography: s = {}
  } = e, a = oe(e, Hm);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : vn(18));
  const c = Nm(r), l = Mi(e);
  let u = ht(l, {
    mixins: mm(l.breakpoints, n),
    palette: c,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Fm.slice(),
    typography: km(c, s),
    transitions: Wm(i),
    zIndex: T({}, qm)
  });
  if (u = ht(u, a), u = t.reduce((d, p) => ht(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (m, g) => {
      let v;
      for (v in m) {
        const f = m[v];
        if (d.indexOf(v) !== -1 && Object.keys(f).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = Re("", v);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${v}\` internal state.`, "You can not override it like this: ", JSON.stringify(m, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: f
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          m[v] = {};
        }
      }
    };
    Object.keys(u.components).forEach((m) => {
      const g = u.components[m].styleOverrides;
      g && m.indexOf("Mui") === 0 && p(g, m);
    });
  }
  return u.unstable_sxConfig = T({}, yo, a == null ? void 0 : a.unstable_sxConfig), u.unstable_sx = function(p) {
    return Ii({
      sx: p,
      theme: this
    });
  }, u;
}
const Km = Gm(), ji = Km, Di = "$$material", Sn = (e) => Dr(e) && e !== "classes", Xm = lm({
  themeId: Di,
  defaultTheme: ji,
  rootShouldForwardProp: Sn
}), ae = Xm;
function _e({
  props: e,
  name: t
}) {
  return dm({
    props: e,
    name: t,
    defaultTheme: ji,
    themeId: Di
  });
}
function Jm(e) {
  return Re("MuiTypography", e);
}
$e("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Zm = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], Qm = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    paragraph: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, e.align !== "inherit" && `align${fe(t)}`, n && "gutterBottom", r && "noWrap", i && "paragraph"]
  };
  return Ne(c, Jm, a);
}, eh = ae("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${fe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph];
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
})), ca = {
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
}, th = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, nh = (e) => th[e] || e, Tc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiTypography"
  }), i = nh(r.color), s = Qf(T({}, r, {
    color: i
  })), {
    align: a = "inherit",
    className: c,
    component: l,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: m = "body1",
    variantMapping: g = ca
  } = s, v = oe(s, Zm), f = T({}, s, {
    align: a,
    color: i,
    className: c,
    component: l,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: m,
    variantMapping: g
  }), y = l || (p ? "p" : g[m] || ca[m]) || "span", O = Qm(f);
  return /* @__PURE__ */ N.jsx(eh, T({
    as: y,
    ref: n,
    ownerState: f,
    className: se(O.root, c)
  }, v));
});
process.env.NODE_ENV !== "production" && (Tc.propTypes = {
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
const qn = Tc;
function rh(e) {
  return Re("MuiSvgIcon", e);
}
$e("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const oh = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], ih = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, i = {
    root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(n)}`]
  };
  return Ne(i, rh, r);
}, sh = ae("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${fe(n.color)}`], t[`fontSize${fe(n.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var n, r, i, s, a, c, l, u, d, p, m, g, v;
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
    color: (p = (m = (e.vars || e).palette) == null || (m = m[t.color]) == null ? void 0 : m.main) != null ? p : {
      action: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.active,
      disabled: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ai = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    viewBox: m = "0 0 24 24"
  } = r, g = oe(r, oh), v = /* @__PURE__ */ b.isValidElement(i) && i.type === "svg", f = T({}, r, {
    color: a,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: m,
    hasSvgAsChild: v
  }), y = {};
  d || (y.viewBox = m);
  const O = ih(f);
  return /* @__PURE__ */ N.jsxs(sh, T({
    as: c,
    className: se(O.root, s),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n
  }, y, g, v && i.props, {
    ownerState: f,
    children: [v ? i.props.children : i, p ? /* @__PURE__ */ N.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
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
Ai.muiName = "SvgIcon";
const la = Ai;
function Li(e, t) {
  function n(r, i) {
    return /* @__PURE__ */ N.jsx(la, T({
      "data-testid": `${t}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (n.displayName = `${t}Icon`), n.muiName = la.muiName, /* @__PURE__ */ b.memo(/* @__PURE__ */ b.forwardRef(n));
}
const ah = Li(/* @__PURE__ */ N.jsx("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreHoriz");
function ni(e, t) {
  return ni = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ni(e, t);
}
function wc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ni(e, t);
}
const ua = {
  disabled: !1
};
var ch = process.env.NODE_ENV !== "production" ? o.oneOfType([o.number, o.shape({
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
const Kr = ft.createContext(null);
var lh = function(t) {
  return t.scrollTop;
}, Hn = "unmounted", qt = "exited", Ht = "entering", ln = "entered", ri = "exiting", Nt = /* @__PURE__ */ function(e) {
  wc(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = i, c = a && !a.isMounting ? r.enter : r.appear, l;
    return s.appearStatus = null, r.in ? c ? (l = qt, s.appearStatus = Ht) : l = ln : r.unmountOnExit || r.mountOnEnter ? l = Hn : l = qt, s.state = {
      status: l
    }, s.nextCallback = null, s;
  }
  t.getDerivedStateFromProps = function(i, s) {
    var a = i.in;
    return a && s.status === Hn ? {
      status: qt
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(i) {
    var s = null;
    if (i !== this.props) {
      var a = this.state.status;
      this.props.in ? a !== Ht && a !== ln && (s = Ht) : (a === Ht || a === ln) && (s = ri);
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
      if (this.cancelNextCallback(), s === Ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var a = this.props.nodeRef ? this.props.nodeRef.current : Er.findDOMNode(this);
          a && lh(a);
        }
        this.performEnter(i);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === qt && this.setState({
        status: Hn
      });
  }, n.performEnter = function(i) {
    var s = this, a = this.props.enter, c = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [c] : [Er.findDOMNode(this), c], u = l[0], d = l[1], p = this.getTimeouts(), m = c ? p.appear : p.enter;
    if (!i && !a || ua.disabled) {
      this.safeSetState({
        status: ln
      }, function() {
        s.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Ht
    }, function() {
      s.props.onEntering(u, d), s.onTransitionEnd(m, function() {
        s.safeSetState({
          status: ln
        }, function() {
          s.props.onEntered(u, d);
        });
      });
    });
  }, n.performExit = function() {
    var i = this, s = this.props.exit, a = this.getTimeouts(), c = this.props.nodeRef ? void 0 : Er.findDOMNode(this);
    if (!s || ua.disabled) {
      this.safeSetState({
        status: qt
      }, function() {
        i.props.onExited(c);
      });
      return;
    }
    this.props.onExit(c), this.safeSetState({
      status: ri
    }, function() {
      i.props.onExiting(c), i.onTransitionEnd(a.exit, function() {
        i.safeSetState({
          status: qt
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
    var a = this.props.nodeRef ? this.props.nodeRef.current : Er.findDOMNode(this), c = i == null && !this.props.addEndListener;
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
    if (i === Hn)
      return null;
    var s = this.props, a = s.children;
    s.in, s.mountOnEnter, s.unmountOnExit, s.appear, s.enter, s.exit, s.timeout, s.addEndListener, s.onEnter, s.onEntering, s.onEntered, s.onExit, s.onExiting, s.onExited, s.nodeRef;
    var c = oe(s, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ft.createElement(Kr.Provider, {
        value: null
      }, typeof a == "function" ? a(i, c) : ft.cloneElement(ft.Children.only(a), c))
    );
  }, t;
}(ft.Component);
Nt.contextType = Kr;
Nt.propTypes = process.env.NODE_ENV !== "production" ? {
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
    var n = ch;
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
function cn() {
}
Nt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: cn,
  onEntering: cn,
  onEntered: cn,
  onExit: cn,
  onExiting: cn,
  onExited: cn
};
Nt.UNMOUNTED = Hn;
Nt.EXITED = qt;
Nt.ENTERING = Ht;
Nt.ENTERED = ln;
Nt.EXITING = ri;
const Fi = Nt;
function uh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Vi(e, t) {
  var n = function(s) {
    return t && _r(s) ? t(s) : s;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && fl.map(e, function(i) {
    return i;
  }).forEach(function(i) {
    r[i.key] = n(i);
  }), r;
}
function dh(e, t) {
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
function ph(e, t) {
  return Vi(e.children, function(n) {
    return Nr(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Gt(n, "appear", e),
      enter: Gt(n, "enter", e),
      exit: Gt(n, "exit", e)
    });
  });
}
function fh(e, t, n) {
  var r = Vi(e.children), i = dh(t, r);
  return Object.keys(i).forEach(function(s) {
    var a = i[s];
    if (_r(a)) {
      var c = s in t, l = s in r, u = t[s], d = _r(u) && !u.props.in;
      l && (!c || d) ? i[s] = Nr(a, {
        onExited: n.bind(null, a),
        in: !0,
        exit: Gt(a, "exit", e),
        enter: Gt(a, "enter", e)
      }) : !l && c && !d ? i[s] = Nr(a, {
        in: !1
      }) : l && c && _r(u) && (i[s] = Nr(a, {
        onExited: n.bind(null, a),
        in: u.props.in,
        exit: Gt(a, "exit", e),
        enter: Gt(a, "enter", e)
      }));
    }
  }), i;
}
var mh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, hh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Bi = /* @__PURE__ */ function(e) {
  wc(t, e);
  function t(r, i) {
    var s;
    s = e.call(this, r, i) || this;
    var a = s.handleExited.bind(uh(s));
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
      children: l ? ph(i, c) : fh(i, a, c),
      firstRender: !1
    };
  }, n.handleExited = function(i, s) {
    var a = Vi(this.props.children);
    i.key in a || (i.props.onExited && i.props.onExited(s), this.mounted && this.setState(function(c) {
      var l = T({}, c.children);
      return delete l[i.key], {
        children: l
      };
    }));
  }, n.render = function() {
    var i = this.props, s = i.component, a = i.childFactory, c = oe(i, ["component", "childFactory"]), l = this.state.contextValue, u = mh(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, s === null ? /* @__PURE__ */ ft.createElement(Kr.Provider, {
      value: l
    }, u) : /* @__PURE__ */ ft.createElement(Kr.Provider, {
      value: l
    }, /* @__PURE__ */ ft.createElement(s, c, u));
  }, t;
}(ft.Component);
Bi.propTypes = process.env.NODE_ENV !== "production" ? {
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
Bi.defaultProps = hh;
const vh = Bi;
function Oc(e) {
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
  } = e, [d, p] = b.useState(!1), m = se(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: a,
    height: a,
    top: -(a / 2) + s,
    left: -(a / 2) + i
  }, v = se(n.child, d && n.childLeaving, r && n.childPulsate);
  return !c && !d && p(!0), b.useEffect(() => {
    if (!c && l != null) {
      const f = setTimeout(l, u);
      return () => {
        clearTimeout(f);
      };
    }
  }, [l, c, u]), /* @__PURE__ */ N.jsx("span", {
    className: m,
    style: g,
    children: /* @__PURE__ */ N.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Oc.propTypes = {
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
const yh = $e("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), ct = yh, gh = ["center", "classes", "className"];
let bo = (e) => e, da, pa, fa, ma;
const oi = 550, bh = 80, xh = lr(da || (da = bo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Eh = lr(pa || (pa = bo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Th = lr(fa || (fa = bo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), wh = ae("span", {
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
}), Oh = ae(Oc, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(ma || (ma = bo`
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
`), ct.rippleVisible, xh, oi, ({
  theme: e
}) => e.transitions.easing.easeInOut, ct.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, ct.child, ct.childLeaving, Eh, oi, ({
  theme: e
}) => e.transitions.easing.easeInOut, ct.childPulsate, Th, ({
  theme: e
}) => e.transitions.easing.easeInOut), Cc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: i = !1,
    classes: s = {},
    className: a
  } = r, c = oe(r, gh), [l, u] = b.useState([]), d = b.useRef(0), p = b.useRef(null);
  b.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const m = b.useRef(!1), g = b.useRef(0), v = b.useRef(null), f = b.useRef(null);
  b.useEffect(() => () => {
    g.current && clearTimeout(g.current);
  }, []);
  const y = b.useCallback((E) => {
    const {
      pulsate: h,
      rippleX: P,
      rippleY: C,
      rippleSize: V,
      cb: L
    } = E;
    u(($) => [...$, /* @__PURE__ */ N.jsx(Oh, {
      classes: {
        ripple: se(s.ripple, ct.ripple),
        rippleVisible: se(s.rippleVisible, ct.rippleVisible),
        ripplePulsate: se(s.ripplePulsate, ct.ripplePulsate),
        child: se(s.child, ct.child),
        childLeaving: se(s.childLeaving, ct.childLeaving),
        childPulsate: se(s.childPulsate, ct.childPulsate)
      },
      timeout: oi,
      pulsate: h,
      rippleX: P,
      rippleY: C,
      rippleSize: V
    }, d.current)]), d.current += 1, p.current = L;
  }, [s]), O = b.useCallback((E = {}, h = {}, P = () => {
  }) => {
    const {
      pulsate: C = !1,
      center: V = i || h.pulsate,
      fakeElement: L = !1
      // For test purposes
    } = h;
    if ((E == null ? void 0 : E.type) === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (m.current = !0);
    const $ = L ? null : f.current, z = $ ? $.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let W, B, I;
    if (V || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      W = Math.round(z.width / 2), B = Math.round(z.height / 2);
    else {
      const {
        clientX: D,
        clientY: M
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      W = Math.round(D - z.left), B = Math.round(M - z.top);
    }
    if (V)
      I = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3), I % 2 === 0 && (I += 1);
    else {
      const D = Math.max(Math.abs(($ ? $.clientWidth : 0) - W), W) * 2 + 2, M = Math.max(Math.abs(($ ? $.clientHeight : 0) - B), B) * 2 + 2;
      I = Math.sqrt(D ** 2 + M ** 2);
    }
    E != null && E.touches ? v.current === null && (v.current = () => {
      y({
        pulsate: C,
        rippleX: W,
        rippleY: B,
        rippleSize: I,
        cb: P
      });
    }, g.current = setTimeout(() => {
      v.current && (v.current(), v.current = null);
    }, bh)) : y({
      pulsate: C,
      rippleX: W,
      rippleY: B,
      rippleSize: I,
      cb: P
    });
  }, [i, y]), R = b.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), w = b.useCallback((E, h) => {
    if (clearTimeout(g.current), (E == null ? void 0 : E.type) === "touchend" && v.current) {
      v.current(), v.current = null, g.current = setTimeout(() => {
        w(E, h);
      });
      return;
    }
    v.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = h;
  }, []);
  return b.useImperativeHandle(n, () => ({
    pulsate: R,
    start: O,
    stop: w
  }), [R, O, w]), /* @__PURE__ */ N.jsx(wh, T({
    className: se(ct.root, s.root, a),
    ref: f
  }, c, {
    children: /* @__PURE__ */ N.jsx(vh, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (Cc.propTypes = {
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
const Ch = Cc;
function Rh(e) {
  return Re("MuiButtonBase", e);
}
const Ph = $e("MuiButtonBase", ["root", "disabled", "focusVisible"]), Sh = Ph, $h = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], _h = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    classes: i
  } = e, a = Ne({
    root: ["root", t && "disabled", n && "focusVisible"]
  }, Rh, i);
  return n && r && (a.root += ` ${r}`), a;
}, Nh = ae("button", {
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
  [`&.${Sh.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Rc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    focusRipple: m = !1,
    LinkComponent: g = "a",
    onBlur: v,
    onClick: f,
    onContextMenu: y,
    onDragLeave: O,
    onFocus: R,
    onFocusVisible: w,
    onKeyDown: E,
    onKeyUp: h,
    onMouseDown: P,
    onMouseLeave: C,
    onMouseUp: V,
    onTouchEnd: L,
    onTouchMove: $,
    onTouchStart: z,
    tabIndex: W = 0,
    TouchRippleProps: B,
    touchRippleRef: I,
    type: D
  } = r, M = oe(r, $h), U = b.useRef(null), G = b.useRef(null), ee = Ue(G, I), {
    isFocusVisibleRef: _,
    onFocus: F,
    onBlur: X,
    ref: te
  } = di(), [H, K] = b.useState(!1);
  u && H && K(!1), b.useImperativeHandle(i, () => ({
    focusVisible: () => {
      K(!0), U.current.focus();
    }
  }), []);
  const [J, Q] = b.useState(!1);
  b.useEffect(() => {
    Q(!0);
  }, []);
  const k = J && !d && !u;
  b.useEffect(() => {
    H && m && !d && J && G.current.pulsate();
  }, [d, m, H, J]);
  function Y(ce, Xe, Ot = p) {
    return Dt((yt) => (Xe && Xe(yt), !Ot && G.current && G.current[ce](yt), !0));
  }
  const Z = Y("start", P), le = Y("stop", y), S = Y("stop", O), ne = Y("stop", V), A = Y("stop", (ce) => {
    H && ce.preventDefault(), C && C(ce);
  }), ue = Y("start", z), Pe = Y("stop", L), Be = Y("stop", $), Se = Y("stop", (ce) => {
    X(ce), _.current === !1 && K(!1), v && v(ce);
  }, !1), Ze = Dt((ce) => {
    U.current || (U.current = ce.currentTarget), F(ce), _.current === !0 && (K(!0), w && w(ce)), R && R(ce);
  }), Le = () => {
    const ce = U.current;
    return l && l !== "button" && !(ce.tagName === "A" && ce.href);
  }, Ge = b.useRef(!1), ze = Dt((ce) => {
    m && !Ge.current && H && G.current && ce.key === " " && (Ge.current = !0, G.current.stop(ce, () => {
      G.current.start(ce);
    })), ce.target === ce.currentTarget && Le() && ce.key === " " && ce.preventDefault(), E && E(ce), ce.target === ce.currentTarget && Le() && ce.key === "Enter" && !u && (ce.preventDefault(), f && f(ce));
  }), ot = Dt((ce) => {
    m && ce.key === " " && G.current && H && !ce.defaultPrevented && (Ge.current = !1, G.current.stop(ce, () => {
      G.current.pulsate(ce);
    })), h && h(ce), f && ce.target === ce.currentTarget && Le() && ce.key === " " && !ce.defaultPrevented && f(ce);
  });
  let Ce = l;
  Ce === "button" && (M.href || M.to) && (Ce = g);
  const qe = {};
  Ce === "button" ? (qe.type = D === void 0 ? "button" : D, qe.disabled = u) : (!M.href && !M.to && (qe.role = "button"), u && (qe["aria-disabled"] = u));
  const Ke = Ue(n, te, U);
  process.env.NODE_ENV !== "production" && b.useEffect(() => {
    k && !G.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [k]);
  const Qe = T({}, r, {
    centerRipple: s,
    component: l,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: m,
    tabIndex: W,
    focusVisible: H
  }), It = _h(Qe);
  return /* @__PURE__ */ N.jsxs(Nh, T({
    as: Ce,
    className: se(It.root, c),
    ownerState: Qe,
    onBlur: Se,
    onClick: f,
    onContextMenu: le,
    onFocus: Ze,
    onKeyDown: ze,
    onKeyUp: ot,
    onMouseDown: Z,
    onMouseLeave: A,
    onMouseUp: ne,
    onDragLeave: S,
    onTouchEnd: Pe,
    onTouchMove: Be,
    onTouchStart: ue,
    ref: Ke,
    tabIndex: u ? -1 : W,
    type: D
  }, qe, M, {
    children: [a, k ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ N.jsx(Ch, T({
        ref: ee,
        center: s
      }, B))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Rc.propTypes = {
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
  component: li,
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
const $n = Rc, Ih = ["slots", "slotProps"], Mh = ae($n)(({
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
    backgroundColor: ti(e.palette.grey[200], 0.12)
  } : {
    backgroundColor: ti(e.palette.grey[600], 0.12)
  })
})), kh = ae(ah)({
  width: 24,
  height: 16
});
function Pc(e) {
  const {
    slots: t = {},
    slotProps: n = {}
  } = e, r = oe(e, Ih), i = e;
  return /* @__PURE__ */ N.jsx("li", {
    children: /* @__PURE__ */ N.jsx(Mh, T({
      focusRipple: !0
    }, r, {
      ownerState: i,
      children: /* @__PURE__ */ N.jsx(kh, T({
        as: t.CollapsedIcon,
        ownerState: i
      }, n.collapsedIcon))
    }))
  });
}
process.env.NODE_ENV !== "production" && (Pc.propTypes = {
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
function jh(e) {
  return Re("MuiBreadcrumbs", e);
}
const Dh = $e("MuiBreadcrumbs", ["root", "ol", "li", "separator"]), Ah = Dh, Lh = ["children", "className", "component", "slots", "slotProps", "expandText", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"], Fh = (e) => {
  const {
    classes: t
  } = e;
  return Ne({
    root: ["root"],
    li: ["li"],
    ol: ["ol"],
    separator: ["separator"]
  }, jh, t);
}, Vh = ae(qn, {
  name: "MuiBreadcrumbs",
  slot: "Root",
  overridesResolver: (e, t) => [{
    [`& .${Ah.li}`]: t.li
  }, t.root]
})({}), Bh = ae("ol", {
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
}), zh = ae("li", {
  name: "MuiBreadcrumbs",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})({
  display: "flex",
  userSelect: "none",
  marginLeft: 8,
  marginRight: 8
});
function Uh(e, t, n, r) {
  return e.reduce((i, s, a) => (a < e.length - 1 ? i = i.concat(s, /* @__PURE__ */ N.jsx(zh, {
    "aria-hidden": !0,
    className: t,
    ownerState: r,
    children: n
  }, `separator-${a}`)) : i.push(s), i), []);
}
const Sc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    maxItems: m = 8,
    separator: g = "/"
  } = r, v = oe(r, Lh), [f, y] = b.useState(!1), O = T({}, r, {
    component: a,
    expanded: f,
    expandText: u,
    itemsAfterCollapse: d,
    itemsBeforeCollapse: p,
    maxItems: m,
    separator: g
  }), R = Fh(O), w = Lt({
    elementType: c.CollapsedIcon,
    externalSlotProps: l.collapsedIcon,
    ownerState: O
  }), E = b.useRef(null), h = (C) => {
    const V = () => {
      y(!0);
      const L = E.current.querySelector("a[href],button,[tabindex]");
      L && L.focus();
    };
    return p + d >= C.length ? (process.env.NODE_ENV !== "production" && console.error(["MUI: You have provided an invalid combination of props to the Breadcrumbs.", `itemsAfterCollapse={${d}} + itemsBeforeCollapse={${p}} >= maxItems={${m}}`].join(`
`)), C) : [...C.slice(0, p), /* @__PURE__ */ N.jsx(Pc, {
      "aria-label": u,
      slots: {
        CollapsedIcon: c.CollapsedIcon
      },
      slotProps: {
        collapsedIcon: w
      },
      onClick: V
    }, "ellipsis"), ...C.slice(C.length - d, C.length)];
  }, P = b.Children.toArray(i).filter((C) => (process.env.NODE_ENV !== "production" && hn.isFragment(C) && console.error(["MUI: The Breadcrumbs component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ b.isValidElement(C))).map((C, V) => /* @__PURE__ */ N.jsx("li", {
    className: R.li,
    children: C
  }, `child-${V}`));
  return /* @__PURE__ */ N.jsx(Vh, T({
    ref: n,
    component: a,
    color: "text.secondary",
    className: se(R.root, s),
    ownerState: O
  }, v, {
    children: /* @__PURE__ */ N.jsx(Bh, {
      className: R.ol,
      ref: E,
      ownerState: O,
      children: Uh(f || m && P.length <= m ? P : h(P), R.separator, g, O)
    })
  }));
});
process.env.NODE_ENV !== "production" && (Sc.propTypes = {
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
  itemsAfterCollapse: Gn,
  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   * @default 1
   */
  itemsBeforeCollapse: Gn,
  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   * @default 8
   */
  maxItems: Gn,
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
const Wh = Sc;
function Zt() {
  const e = gc(ji);
  return process.env.NODE_ENV !== "production" && b.useDebugValue(e), e[Di] || e;
}
const Yh = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, ha = Yh, qh = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), za.configure(e);
  }
}, Hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: fe,
  createChainedFunction: Wo,
  createSvgIcon: Li,
  debounce: Aa,
  deprecatedPropType: Ll,
  isMuiElement: Zr,
  ownerDocument: Je,
  ownerWindow: yn,
  requirePropFactory: Fl,
  setRef: Fr,
  unstable_ClassNameGenerator: qh,
  unstable_useEnhancedEffect: Tt,
  unstable_useId: La,
  unsupportedProp: zl,
  useControlled: ui,
  useEventCallback: Dt,
  useForkRef: Ue,
  useIsFocusVisible: di
}, Symbol.toStringTag, { value: "Module" })), zi = (e) => e.scrollTop;
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
function Gh(e) {
  return Re("MuiPaper", e);
}
$e("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Kh = ["className", "component", "elevation", "square", "variant"], Xh = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: i
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return Ne(s, Gh, i);
}, Jh = ae("div", {
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
    backgroundImage: `linear-gradient(${Ae("#fff", ha(t.elevation))}, ${Ae("#fff", ha(t.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
  }));
}), $c = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiPaper"
  }), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: c = !1,
    variant: l = "elevation"
  } = r, u = oe(r, Kh), d = T({}, r, {
    component: s,
    elevation: a,
    square: c,
    variant: l
  }), p = Xh(d);
  return process.env.NODE_ENV !== "production" && Zt().shadows[a] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${a}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${a}]\` is defined.`].join(`
`)), /* @__PURE__ */ N.jsx(Jh, T({
    as: s,
    ownerState: d,
    className: se(p.root, i),
    ref: n
  }, u));
});
process.env.NODE_ENV !== "production" && ($c.propTypes = {
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
  elevation: Ft(Gn, (e) => {
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
const Zh = $c, Qh = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], ev = ae(Qa, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), _c = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r;
  const i = yc(), s = _e({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: a,
    component: c,
    components: l,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: v,
    placement: f,
    popperOptions: y,
    popperRef: O,
    transition: R,
    slots: w,
    slotProps: E
  } = s, h = oe(s, Qh), P = (r = w == null ? void 0 : w.root) != null ? r : l == null ? void 0 : l.Root, C = T({
    anchorEl: a,
    container: d,
    disablePortal: p,
    keepMounted: m,
    modifiers: g,
    open: v,
    placement: f,
    popperOptions: y,
    popperRef: O,
    transition: R
  }, h);
  return /* @__PURE__ */ N.jsx(ev, T({
    as: c,
    direction: i == null ? void 0 : i.direction,
    slots: {
      root: P
    },
    slotProps: E ?? u
  }, C, {
    ref: n
  }));
});
process.env.NODE_ENV !== "production" && (_c.propTypes = {
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
  anchorEl: o.oneOfType([St, o.object, o.func]),
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
  container: o.oneOfType([St, o.func]),
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
const Nc = _c, tv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], nv = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Ic = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Zt(), i = {
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
    onEntering: m,
    onExit: g,
    onExited: v,
    onExiting: f,
    style: y,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = Fi
  } = t, w = oe(t, tv), E = b.useRef(null), h = Ue(E, c.ref, n), P = (I) => (D) => {
    if (I) {
      const M = E.current;
      D === void 0 ? I(M) : I(M, D);
    }
  }, C = P(m), V = P((I, D) => {
    zi(I);
    const M = On({
      style: y,
      timeout: O,
      easing: l
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("opacity", M), I.style.transition = r.transitions.create("opacity", M), d && d(I, D);
  }), L = P(p), $ = P(f), z = P((I) => {
    const D = On({
      style: y,
      timeout: O,
      easing: l
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("opacity", D), I.style.transition = r.transitions.create("opacity", D), g && g(I);
  }), W = P(v), B = (I) => {
    s && s(E.current, I);
  };
  return /* @__PURE__ */ N.jsx(R, T({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: V,
    onEntered: L,
    onEntering: C,
    onExit: z,
    onExited: W,
    onExiting: $,
    addEndListener: B,
    timeout: O
  }, w, {
    children: (I, D) => /* @__PURE__ */ b.cloneElement(c, T({
      style: T({
        opacity: 0,
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, nv[I], y, c.props.style),
      ref: h
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (Ic.propTypes = {
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
  children: Cn.isRequired,
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
const rv = Ic;
function ov(e) {
  return Re("MuiBackdrop", e);
}
$e("MuiBackdrop", ["root", "invisible"]);
const iv = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], sv = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return Ne({
    root: ["root", n && "invisible"]
  }, ov, t);
}, av = ae("div", {
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
})), Mc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = _e({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: c,
    className: l,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: m = !1,
    open: g,
    slotProps: v = {},
    slots: f = {},
    TransitionComponent: y = rv,
    transitionDuration: O
  } = a, R = oe(a, iv), w = T({}, a, {
    component: u,
    invisible: m
  }), E = sv(w), h = (r = v.root) != null ? r : p.root;
  return /* @__PURE__ */ N.jsx(y, T({
    in: g,
    timeout: O
  }, R, {
    children: /* @__PURE__ */ N.jsx(av, T({
      "aria-hidden": !0
    }, h, {
      as: (i = (s = f.root) != null ? s : d.Root) != null ? i : u,
      className: se(E.root, l, h == null ? void 0 : h.className),
      ownerState: T({}, w, h == null ? void 0 : h.ownerState),
      classes: E,
      ref: n,
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Mc.propTypes = {
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
const kc = Mc;
function cv(e) {
  return Re("MuiButton", e);
}
const lv = $e("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Cr = lv, jc = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (jc.displayName = "ButtonGroupContext");
const uv = jc, Dc = /* @__PURE__ */ b.createContext(void 0);
process.env.NODE_ENV !== "production" && (Dc.displayName = "ButtonGroupButtonContext");
const dv = Dc, pv = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], fv = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: i,
    variant: s,
    classes: a
  } = e, c = {
    root: ["root", s, `${s}${fe(t)}`, `size${fe(i)}`, `${s}Size${fe(i)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${fe(i)}`],
    endIcon: ["endIcon", `iconSize${fe(i)}`]
  }, l = Ne(c, cv, a);
  return T({}, a, l);
}, Ac = (e) => T({}, e.size === "small" && {
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
}), mv = ae($n, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`${n.variant}${fe(n.color)}`], t[`size${fe(n.size)}`], t[`${n.variant}Size${fe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth];
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
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Ae(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ae(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Ae(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
    [`&.${Cr.focusVisible}`]: T({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Cr.disabled}`]: T({
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
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Ae(e.palette[t.color].main, 0.5)}`
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
  [`&.${Cr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Cr.disabled}`]: {
    boxShadow: "none"
  }
}), hv = ae("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.startIcon, t[`iconSize${fe(n.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Ac(e))), vv = ae("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.endIcon, t[`iconSize${fe(n.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Ac(e))), Lc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = b.useContext(uv), i = b.useContext(dv), s = pi(r, t), a = _e({
    props: s,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: m = !1,
    disableFocusRipple: g = !1,
    endIcon: v,
    focusVisibleClassName: f,
    fullWidth: y = !1,
    size: O = "medium",
    startIcon: R,
    type: w,
    variant: E = "text"
  } = a, h = oe(a, pv), P = T({}, a, {
    color: l,
    component: u,
    disabled: p,
    disableElevation: m,
    disableFocusRipple: g,
    fullWidth: y,
    size: O,
    type: w,
    variant: E
  }), C = fv(P), V = R && /* @__PURE__ */ N.jsx(hv, {
    className: C.startIcon,
    ownerState: P,
    children: R
  }), L = v && /* @__PURE__ */ N.jsx(vv, {
    className: C.endIcon,
    ownerState: P,
    children: v
  }), $ = i || "";
  return /* @__PURE__ */ N.jsxs(mv, T({
    ownerState: P,
    className: se(r.className, C.root, d, $),
    component: u,
    disabled: p,
    focusRipple: !g,
    focusVisibleClassName: se(C.focusVisible, f),
    ref: n,
    type: w
  }, h, {
    classes: C,
    children: [V, c, L]
  }));
});
process.env.NODE_ENV !== "production" && (Lc.propTypes = {
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
const yv = Lc;
function gv(e) {
  return Re("MuiCircularProgress", e);
}
$e("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const bv = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let xo = (e) => e, va, ya, ga, ba;
const kt = 44, xv = lr(va || (va = xo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), Ev = lr(ya || (ya = xo`
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
`)), Tv = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: i
  } = e, s = {
    root: ["root", n, `color${fe(r)}`],
    svg: ["svg"],
    circle: ["circle", `circle${fe(n)}`, i && "circleDisableShrink"]
  };
  return Ne(s, gv, t);
}, wv = ae("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${fe(n.color)}`]];
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
}) => e.variant === "indeterminate" && $i(ga || (ga = xo`
      animation: ${0} 1.4s linear infinite;
    `), xv)), Ov = ae("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Cv = ae("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, t[`circle${fe(n.variant)}`], n.disableShrink && t.circleDisableShrink];
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
}) => e.variant === "indeterminate" && !e.disableShrink && $i(ba || (ba = xo`
      animation: ${0} 1.4s ease-in-out infinite;
    `), Ev)), Fc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
  } = r, m = oe(r, bv), g = T({}, r, {
    color: s,
    disableShrink: a,
    size: c,
    thickness: u,
    value: d,
    variant: p
  }), v = Tv(g), f = {}, y = {}, O = {};
  if (p === "determinate") {
    const R = 2 * Math.PI * ((kt - u) / 2);
    f.strokeDasharray = R.toFixed(3), O["aria-valuenow"] = Math.round(d), f.strokeDashoffset = `${((100 - d) / 100 * R).toFixed(3)}px`, y.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ N.jsx(wv, T({
    className: se(v.root, i),
    style: T({
      width: c,
      height: c
    }, y, l),
    ownerState: g,
    ref: n,
    role: "progressbar"
  }, O, m, {
    children: /* @__PURE__ */ N.jsx(Ov, {
      className: v.svg,
      ownerState: g,
      viewBox: `${kt / 2} ${kt / 2} ${kt} ${kt}`,
      children: /* @__PURE__ */ N.jsx(Cv, {
        className: v.circle,
        style: f,
        ownerState: g,
        cx: kt,
        cy: kt,
        r: (kt - u) / 2,
        fill: "none",
        strokeWidth: u
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (Fc.propTypes = {
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
  disableShrink: Ft(o.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
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
const Rv = Fc;
function Pv(e) {
  return Re("MuiModal", e);
}
$e("MuiModal", ["root", "hidden", "backdrop"]);
const Sv = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], $v = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return Ne({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, Pv, r);
}, _v = ae("div", {
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
})), Nv = ae(kc, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Vc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, c, l;
  const u = _e({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = Nv,
    BackdropProps: p,
    className: m,
    closeAfterTransition: g = !1,
    children: v,
    container: f,
    component: y,
    components: O = {},
    componentsProps: R = {},
    disableAutoFocus: w = !1,
    disableEnforceFocus: E = !1,
    disableEscapeKeyDown: h = !1,
    disablePortal: P = !1,
    disableRestoreFocus: C = !1,
    disableScrollLock: V = !1,
    hideBackdrop: L = !1,
    keepMounted: $ = !1,
    onBackdropClick: z,
    open: W,
    slotProps: B,
    slots: I
    // eslint-disable-next-line react/prop-types
  } = u, D = oe(u, Sv), M = T({}, u, {
    closeAfterTransition: g,
    disableAutoFocus: w,
    disableEnforceFocus: E,
    disableEscapeKeyDown: h,
    disablePortal: P,
    disableRestoreFocus: C,
    disableScrollLock: V,
    hideBackdrop: L,
    keepMounted: $
  }), {
    getRootProps: U,
    getBackdropProps: G,
    getTransitionProps: ee,
    portalRef: _,
    isTopModal: F,
    exited: X,
    hasTransition: te
  } = Dd(T({}, M, {
    rootRef: n
  })), H = T({}, M, {
    exited: X
  }), K = $v(H), J = {};
  if (v.props.tabIndex === void 0 && (J.tabIndex = "-1"), te) {
    const {
      onEnter: ne,
      onExited: A
    } = ee();
    J.onEnter = ne, J.onExited = A;
  }
  const Q = (r = (i = I == null ? void 0 : I.root) != null ? i : O.Root) != null ? r : _v, k = (s = (a = I == null ? void 0 : I.backdrop) != null ? a : O.Backdrop) != null ? s : d, Y = (c = B == null ? void 0 : B.root) != null ? c : R.root, Z = (l = B == null ? void 0 : B.backdrop) != null ? l : R.backdrop, le = Lt({
    elementType: Q,
    externalSlotProps: Y,
    externalForwardedProps: D,
    getSlotProps: U,
    additionalProps: {
      ref: n,
      as: y
    },
    ownerState: H,
    className: se(m, Y == null ? void 0 : Y.className, K == null ? void 0 : K.root, !H.open && H.exited && (K == null ? void 0 : K.hidden))
  }), S = Lt({
    elementType: k,
    externalSlotProps: Z,
    additionalProps: p,
    getSlotProps: (ne) => G(T({}, ne, {
      onClick: (A) => {
        z && z(A), ne != null && ne.onClick && ne.onClick(A);
      }
    })),
    className: se(Z == null ? void 0 : Z.className, p == null ? void 0 : p.className, K == null ? void 0 : K.backdrop),
    ownerState: H
  });
  return !$ && !W && (!te || X) ? null : /* @__PURE__ */ N.jsx(tr, {
    ref: _,
    container: f,
    disablePortal: P,
    children: /* @__PURE__ */ N.jsxs(Q, T({}, le, {
      children: [!L && d ? /* @__PURE__ */ N.jsx(k, T({}, S)) : null, /* @__PURE__ */ N.jsx(Br, {
        disableEnforceFocus: E,
        disableAutoFocus: w,
        disableRestoreFocus: C,
        isEnabled: F,
        open: W,
        children: /* @__PURE__ */ b.cloneElement(v, J)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Vc.propTypes = {
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
  children: Cn.isRequired,
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
  container: o.oneOfType([St, o.func]),
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
const Iv = Vc;
function Mv(e) {
  return Re("MuiDivider", e);
}
const xa = $e("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), kv = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], jv = (e) => {
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
  return Ne({
    root: ["root", t && "absolute", l, s && "light", a === "vertical" && "vertical", i && "flexItem", n && "withChildren", n && a === "vertical" && "withChildrenVertical", c === "right" && a !== "vertical" && "textAlignRight", c === "left" && a !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", a === "vertical" && "wrapperVertical"]
  }, Mv, r);
}, Dv = ae("div", {
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
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : Ae(e.palette.divider, 0.08)
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
})), Av = ae("span", {
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
})), Ui = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    textAlign: m = "center",
    variant: g = "fullWidth"
  } = r, v = oe(r, kv), f = T({}, r, {
    absolute: i,
    component: c,
    flexItem: l,
    light: u,
    orientation: d,
    role: p,
    textAlign: m,
    variant: g
  }), y = jv(f);
  return /* @__PURE__ */ N.jsx(Dv, T({
    as: c,
    className: se(y.root, a),
    role: p,
    ref: n,
    ownerState: f
  }, v, {
    children: s ? /* @__PURE__ */ N.jsx(Av, {
      className: y.wrapper,
      ownerState: f,
      children: s
    }) : null
  }));
});
Ui.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (Ui.propTypes = {
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
const Lv = Ui;
function Fv(e) {
  return Re("MuiFab", e);
}
const Vv = $e("MuiFab", ["root", "primary", "secondary", "extended", "circular", "focusVisible", "disabled", "colorInherit", "sizeSmall", "sizeMedium", "sizeLarge", "info", "error", "warning", "success"]), Ea = Vv, Bv = ["children", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"], zv = (e) => {
  const {
    color: t,
    variant: n,
    classes: r,
    size: i
  } = e, s = {
    root: ["root", n, `size${fe(i)}`, t === "inherit" ? "colorInherit" : t]
  }, a = Ne(s, Fv, r);
  return T({}, r, a);
}, Uv = ae($n, {
  name: "MuiFab",
  slot: "Root",
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${fe(n.size)}`], n.color === "inherit" && t.colorInherit, t[fe(n.size)], t[n.color]];
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
    [`&.${Ea.focusVisible}`]: {
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
  [`&.${Ea.disabled}`]: {
    color: (e.vars || e).palette.action.disabled,
    boxShadow: (e.vars || e).shadows[0],
    backgroundColor: (e.vars || e).palette.action.disabledBackground
  }
})), Bc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    variant: m = "circular"
  } = r, g = oe(r, Bv), v = T({}, r, {
    color: a,
    component: c,
    disabled: l,
    disableFocusRipple: u,
    size: p,
    variant: m
  }), f = zv(v);
  return /* @__PURE__ */ N.jsx(Uv, T({
    className: se(f.root, s),
    component: c,
    disabled: l,
    focusRipple: !u,
    focusVisibleClassName: se(f.focusVisible, d),
    ownerState: v,
    ref: n
  }, g, {
    classes: f,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (Bc.propTypes = {
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
const zc = Bc, Wv = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function ii(e) {
  return `scale(${e}, ${e ** 2})`;
}
const Yv = {
  entering: {
    opacity: 1,
    transform: ii(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Do = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Wi = /* @__PURE__ */ b.forwardRef(function(t, n) {
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
    onExited: m,
    onExiting: g,
    style: v,
    timeout: f = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = Fi
  } = t, O = oe(t, Wv), R = b.useRef(), w = b.useRef(), E = Zt(), h = b.useRef(null), P = Ue(h, s.ref, n), C = (D) => (M) => {
    if (D) {
      const U = h.current;
      M === void 0 ? D(U) : D(U, M);
    }
  }, V = C(d), L = C((D, M) => {
    zi(D);
    const {
      duration: U,
      delay: G,
      easing: ee
    } = On({
      style: v,
      timeout: f,
      easing: a
    }, {
      mode: "enter"
    });
    let _;
    f === "auto" ? (_ = E.transitions.getAutoHeightDuration(D.clientHeight), w.current = _) : _ = U, D.style.transition = [E.transitions.create("opacity", {
      duration: _,
      delay: G
    }), E.transitions.create("transform", {
      duration: Do ? _ : _ * 0.666,
      delay: G,
      easing: ee
    })].join(","), l && l(D, M);
  }), $ = C(u), z = C(g), W = C((D) => {
    const {
      duration: M,
      delay: U,
      easing: G
    } = On({
      style: v,
      timeout: f,
      easing: a
    }, {
      mode: "exit"
    });
    let ee;
    f === "auto" ? (ee = E.transitions.getAutoHeightDuration(D.clientHeight), w.current = ee) : ee = M, D.style.transition = [E.transitions.create("opacity", {
      duration: ee,
      delay: U
    }), E.transitions.create("transform", {
      duration: Do ? ee : ee * 0.666,
      delay: Do ? U : U || ee * 0.333,
      easing: G
    })].join(","), D.style.opacity = 0, D.style.transform = ii(0.75), p && p(D);
  }), B = C(m), I = (D) => {
    f === "auto" && (R.current = setTimeout(D, w.current || 0)), r && r(h.current, D);
  };
  return b.useEffect(() => () => {
    clearTimeout(R.current);
  }, []), /* @__PURE__ */ N.jsx(y, T({
    appear: i,
    in: c,
    nodeRef: h,
    onEnter: L,
    onEntered: $,
    onEntering: V,
    onExit: W,
    onExited: B,
    onExiting: z,
    addEndListener: I,
    timeout: f === "auto" ? null : f
  }, O, {
    children: (D, M) => /* @__PURE__ */ b.cloneElement(s, T({
      style: T({
        opacity: 0,
        transform: ii(0.75),
        visibility: D === "exited" && !c ? "hidden" : void 0
      }, Yv[D], v, s.props.style),
      ref: P
    }, M))
  }));
});
process.env.NODE_ENV !== "production" && (Wi.propTypes = {
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
  children: Cn.isRequired,
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
Wi.muiSupportAuto = !0;
const si = Wi, Uc = /* @__PURE__ */ b.createContext({});
process.env.NODE_ENV !== "production" && (Uc.displayName = "ListContext");
const vt = Uc;
function qv(e) {
  return Re("MuiList", e);
}
$e("MuiList", ["root", "padding", "dense", "subheader"]);
const Hv = ["children", "className", "component", "dense", "disablePadding", "subheader"], Gv = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: i
  } = e;
  return Ne({
    root: ["root", !n && "padding", r && "dense", i && "subheader"]
  }, qv, t);
}, Kv = ae("ul", {
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
})), Wc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiList"
  }), {
    children: i,
    className: s,
    component: a = "ul",
    dense: c = !1,
    disablePadding: l = !1,
    subheader: u
  } = r, d = oe(r, Hv), p = b.useMemo(() => ({
    dense: c
  }), [c]), m = T({}, r, {
    component: a,
    dense: c,
    disablePadding: l
  }), g = Gv(m);
  return /* @__PURE__ */ N.jsx(vt.Provider, {
    value: p,
    children: /* @__PURE__ */ N.jsxs(Kv, T({
      as: a,
      className: se(g.root, s),
      ref: n,
      ownerState: m
    }, d, {
      children: [u, i]
    }))
  });
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
const Yc = Wc;
function Xv(e) {
  return Re("MuiListItem", e);
}
const Jv = $e("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), un = Jv;
function Zv(e) {
  return Re("MuiListItemButton", e);
}
const Qv = $e("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), dn = Qv, ey = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"], ty = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters];
}, ny = (e) => {
  const {
    alignItems: t,
    classes: n,
    dense: r,
    disabled: i,
    disableGutters: s,
    divider: a,
    selected: c
  } = e, u = Ne({
    root: ["root", r && "dense", !s && "gutters", a && "divider", i && "disabled", t === "flex-start" && "alignItemsFlexStart", c && "selected"]
  }, Zv, n);
  return T({}, n, u);
}, ry = ae($n, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiListItemButton",
  slot: "Root",
  overridesResolver: ty
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
  [`&.${dn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${dn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${dn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${dn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${dn.disabled}`]: {
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
})), qc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    selected: m = !1,
    className: g
  } = r, v = oe(r, ey), f = b.useContext(vt), y = b.useMemo(() => ({
    dense: l || f.dense || !1,
    alignItems: i,
    disableGutters: u
  }), [i, f.dense, l, u]), O = b.useRef(null);
  Tt(() => {
    s && (O.current ? O.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItemButton whose component has not been rendered."));
  }, [s]);
  const R = T({}, r, {
    alignItems: i,
    dense: y.dense,
    disableGutters: u,
    divider: d,
    selected: m
  }), w = ny(R), E = Ue(O, n);
  return /* @__PURE__ */ N.jsx(vt.Provider, {
    value: y,
    children: /* @__PURE__ */ N.jsx(ry, T({
      ref: E,
      href: v.href || v.to,
      component: (v.href || v.to) && a === "div" ? "button" : a,
      focusVisibleClassName: se(w.focusVisible, p),
      ownerState: R,
      className: se(w.root, g)
    }, v, {
      classes: w,
      children: c
    }))
  });
});
process.env.NODE_ENV !== "production" && (qc.propTypes = {
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
const oy = qc;
function iy(e) {
  return Re("MuiListItemSecondaryAction", e);
}
$e("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const sy = ["className"], ay = (e) => {
  const {
    disableGutters: t,
    classes: n
  } = e;
  return Ne({
    root: ["root", t && "disableGutters"]
  }, iy, n);
}, cy = ae("div", {
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
})), Yi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: i
  } = r, s = oe(r, sy), a = b.useContext(vt), c = T({}, r, {
    disableGutters: a.disableGutters
  }), l = ay(c);
  return /* @__PURE__ */ N.jsx(cy, T({
    className: se(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (Yi.propTypes = {
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
Yi.muiName = "ListItemSecondaryAction";
const ly = Yi, uy = ["className"], dy = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], py = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction];
}, fy = (e) => {
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
  return Ne({
    root: ["root", i && "dense", !a && "gutters", !c && "padding", l && "divider", s && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, Xv, r);
}, my = ae("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: py
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
  [`& > .${dn.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${un.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${un.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${un.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${un.disabled}`]: {
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
  [`&.${un.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), hy = ae("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Hc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    ContainerComponent: m = "li",
    ContainerProps: {
      className: g
    } = {},
    dense: v = !1,
    disabled: f = !1,
    disableGutters: y = !1,
    disablePadding: O = !1,
    divider: R = !1,
    focusVisibleClassName: w,
    secondaryAction: E,
    selected: h = !1,
    slotProps: P = {},
    slots: C = {}
  } = r, V = oe(r.ContainerProps, uy), L = oe(r, dy), $ = b.useContext(vt), z = b.useMemo(() => ({
    dense: v || $.dense || !1,
    alignItems: i,
    disableGutters: y
  }), [i, $.dense, v, y]), W = b.useRef(null);
  Tt(() => {
    s && (W.current ? W.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [s]);
  const B = b.Children.toArray(c), I = B.length && Zr(B[B.length - 1], ["ListItemSecondaryAction"]), D = T({}, r, {
    alignItems: i,
    autoFocus: s,
    button: a,
    dense: z.dense,
    disabled: f,
    disableGutters: y,
    disablePadding: O,
    divider: R,
    hasSecondaryAction: I,
    selected: h
  }), M = fy(D), U = Ue(W, n), G = C.root || d.Root || my, ee = P.root || p.root || {}, _ = T({
    className: se(M.root, ee.className, l),
    disabled: f
  }, L);
  let F = u || "li";
  return a && (_.component = u || "div", _.focusVisibleClassName = se(un.focusVisible, w), F = $n), I ? (F = !_.component && !u ? "div" : F, m === "li" && (F === "li" ? F = "div" : _.component === "li" && (_.component = "div")), /* @__PURE__ */ N.jsx(vt.Provider, {
    value: z,
    children: /* @__PURE__ */ N.jsxs(hy, T({
      as: m,
      className: se(M.container, g),
      ref: U,
      ownerState: D
    }, V, {
      children: [/* @__PURE__ */ N.jsx(G, T({}, ee, !Vr(G) && {
        as: F,
        ownerState: T({}, D, ee.ownerState)
      }, _, {
        children: B
      })), B.pop()]
    }))
  })) : /* @__PURE__ */ N.jsx(vt.Provider, {
    value: z,
    children: /* @__PURE__ */ N.jsxs(G, T({}, ee, {
      as: F,
      ref: U
    }, !Vr(G) && {
      ownerState: T({}, D, ee.ownerState)
    }, _, {
      children: [B, E && /* @__PURE__ */ N.jsx(ly, {
        children: E
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Hc.propTypes = {
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
  children: Ft(o.node, (e) => {
    const t = b.Children.toArray(e.children);
    let n = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const i = t[r];
      if (Zr(i, ["ListItemSecondaryAction"])) {
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
  ContainerComponent: li,
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
const vy = Hc;
function yy(e) {
  return Re("MuiListItemIcon", e);
}
const gy = $e("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Ta = gy, by = ["className"], xy = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return Ne({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, yy, n);
}, Ey = ae("div", {
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
})), Gc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: i
  } = r, s = oe(r, by), a = b.useContext(vt), c = T({}, r, {
    alignItems: a.alignItems
  }), l = xy(c);
  return /* @__PURE__ */ N.jsx(Ey, T({
    className: se(l.root, i),
    ownerState: c,
    ref: n
  }, s));
});
process.env.NODE_ENV !== "production" && (Gc.propTypes = {
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
const Ty = Gc;
function wy(e) {
  return Re("MuiListItemText", e);
}
const Oy = $e("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Xr = Oy, Cy = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], Ry = (e) => {
  const {
    classes: t,
    inset: n,
    primary: r,
    secondary: i,
    dense: s
  } = e;
  return Ne({
    root: ["root", n && "inset", s && "dense", r && i && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, wy, t);
}, Py = ae("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Xr.primary}`]: t.primary
    }, {
      [`& .${Xr.secondary}`]: t.secondary
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
})), Kc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
  } = r, m = oe(r, Cy), {
    dense: g
  } = b.useContext(vt);
  let v = l ?? i, f = d;
  const y = T({}, r, {
    disableTypography: a,
    inset: c,
    primary: !!v,
    secondary: !!f,
    dense: g
  }), O = Ry(y);
  return v != null && v.type !== qn && !a && (v = /* @__PURE__ */ N.jsx(qn, T({
    variant: g ? "body2" : "body1",
    className: O.primary,
    component: u != null && u.variant ? void 0 : "span",
    display: "block"
  }, u, {
    children: v
  }))), f != null && f.type !== qn && !a && (f = /* @__PURE__ */ N.jsx(qn, T({
    variant: "body2",
    className: O.secondary,
    color: "text.secondary",
    display: "block"
  }, p, {
    children: f
  }))), /* @__PURE__ */ N.jsxs(Py, T({
    className: se(O.root, s),
    ownerState: y,
    ref: n
  }, m, {
    children: [v, f]
  }));
});
process.env.NODE_ENV !== "production" && (Kc.propTypes = {
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
const Sy = Kc, $y = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ao(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function wa(e, t, n) {
  return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
}
function Xc(e, t) {
  if (t === void 0)
    return !0;
  let n = e.innerText;
  return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0;
}
function Bn(e, t, n, r, i, s) {
  let a = !1, c = i(e, t, t ? n : !1);
  for (; c; ) {
    if (c === e.firstChild) {
      if (a)
        return !1;
      a = !0;
    }
    const l = r ? !1 : c.disabled || c.getAttribute("aria-disabled") === "true";
    if (!c.hasAttribute("tabindex") || !Xc(c, s) || l)
      c = i(e, c, n);
    else
      return c.focus(), !0;
  }
  return !1;
}
const Jc = /* @__PURE__ */ b.forwardRef(function(t, n) {
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
  } = t, m = oe(t, $y), g = b.useRef(null), v = b.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Tt(() => {
    i && g.current.focus();
  }, [i]), b.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, E) => {
      const h = !g.current.style.width;
      if (w.clientHeight < g.current.clientHeight && h) {
        const P = `${Fa(Je(w))}px`;
        g.current.style[E.direction === "rtl" ? "paddingLeft" : "paddingRight"] = P, g.current.style.width = `calc(100% + ${P})`;
      }
      return g.current;
    }
  }), []);
  const f = (w) => {
    const E = g.current, h = w.key, P = Je(E).activeElement;
    if (h === "ArrowDown")
      w.preventDefault(), Bn(E, P, u, l, Ao);
    else if (h === "ArrowUp")
      w.preventDefault(), Bn(E, P, u, l, wa);
    else if (h === "Home")
      w.preventDefault(), Bn(E, null, u, l, Ao);
    else if (h === "End")
      w.preventDefault(), Bn(E, null, u, l, wa);
    else if (h.length === 1) {
      const C = v.current, V = h.toLowerCase(), L = performance.now();
      C.keys.length > 0 && (L - C.lastTime > 500 ? (C.keys = [], C.repeating = !0, C.previousKeyMatched = !0) : C.repeating && V !== C.keys[0] && (C.repeating = !1)), C.lastTime = L, C.keys.push(V);
      const $ = P && !C.repeating && Xc(P, C);
      C.previousKeyMatched && ($ || Bn(E, P, !1, l, Ao, C)) ? w.preventDefault() : C.previousKeyMatched = !1;
    }
    d && d(w);
  }, y = Ue(g, n);
  let O = -1;
  b.Children.forEach(a, (w, E) => {
    if (!/* @__PURE__ */ b.isValidElement(w)) {
      O === E && (O += 1, O >= a.length && (O = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && hn.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (p === "selectedMenu" && w.props.selected || O === -1) && (O = E), O === E && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (O += 1, O >= a.length && (O = -1));
  });
  const R = b.Children.map(a, (w, E) => {
    if (E === O) {
      const h = {};
      return s && (h.autoFocus = !0), w.props.tabIndex === void 0 && p === "selectedMenu" && (h.tabIndex = 0), /* @__PURE__ */ b.cloneElement(w, h);
    }
    return w;
  });
  return /* @__PURE__ */ N.jsx(Yc, T({
    role: "menu",
    ref: y,
    className: c,
    onKeyDown: f,
    tabIndex: i ? 0 : -1
  }, m, {
    children: R
  }));
});
process.env.NODE_ENV !== "production" && (Jc.propTypes = {
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
const _y = Jc;
function Ny(e) {
  return Re("MuiPopover", e);
}
$e("MuiPopover", ["root", "paper"]);
const Iy = ["onEntering"], My = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], ky = ["slotProps"];
function Oa(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ca(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ra(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Lr(e) {
  return typeof e == "function" ? e() : e;
}
const jy = (e) => {
  const {
    classes: t
  } = e;
  return Ne({
    root: ["root"],
    paper: ["paper"]
  }, Ny, t);
}, Dy = ae(Iv, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Zc = ae(Zh, {
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
}), Qc = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s;
  const a = _e({
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
    children: m,
    className: g,
    container: v,
    elevation: f = 8,
    marginThreshold: y = 16,
    open: O,
    PaperProps: R = {},
    slots: w,
    slotProps: E,
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = si,
    transitionDuration: C = "auto",
    TransitionProps: {
      onEntering: V
    } = {},
    disableScrollLock: L = !1
  } = a, $ = oe(a.TransitionProps, Iy), z = oe(a, My), W = (r = E == null ? void 0 : E.paper) != null ? r : R, B = b.useRef(), I = Ue(B, W.ref), D = T({}, a, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: f,
    marginThreshold: y,
    externalPaperSlotProps: W,
    transformOrigin: h,
    TransitionComponent: P,
    transitionDuration: C,
    TransitionProps: $
  }), M = jy(D), U = b.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const ne = Lr(l), A = ne && ne.nodeType === 1 ? ne : Je(B.current).body, ue = A.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Pe = A.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Pe.top === 0 && Pe.left === 0 && Pe.right === 0 && Pe.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: ue.top + Oa(ue, u.vertical),
      left: ue.left + Ca(ue, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, d, p]), G = b.useCallback((ne) => ({
    vertical: Oa(ne, h.vertical),
    horizontal: Ca(ne, h.horizontal)
  }), [h.horizontal, h.vertical]), ee = b.useCallback((ne) => {
    const A = {
      width: ne.offsetWidth,
      height: ne.offsetHeight
    }, ue = G(A);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ra(ue)
      };
    const Pe = U();
    let Be = Pe.top - ue.vertical, Se = Pe.left - ue.horizontal;
    const Ze = Be + A.height, Le = Se + A.width, Ge = yn(Lr(l)), ze = Ge.innerHeight - y, ot = Ge.innerWidth - y;
    if (y !== null && Be < y) {
      const Ce = Be - y;
      Be -= Ce, ue.vertical += Ce;
    } else if (y !== null && Ze > ze) {
      const Ce = Ze - ze;
      Be -= Ce, ue.vertical += Ce;
    }
    if (process.env.NODE_ENV !== "production" && A.height > ze && A.height && ze && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${A.height - ze}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && Se < y) {
      const Ce = Se - y;
      Se -= Ce, ue.horizontal += Ce;
    } else if (Le > ot) {
      const Ce = Le - ot;
      Se -= Ce, ue.horizontal += Ce;
    }
    return {
      top: `${Math.round(Be)}px`,
      left: `${Math.round(Se)}px`,
      transformOrigin: Ra(ue)
    };
  }, [l, p, U, G, y]), [_, F] = b.useState(O), X = b.useCallback(() => {
    const ne = B.current;
    if (!ne)
      return;
    const A = ee(ne);
    A.top !== null && (ne.style.top = A.top), A.left !== null && (ne.style.left = A.left), ne.style.transformOrigin = A.transformOrigin, F(!0);
  }, [ee]);
  b.useEffect(() => (L && window.addEventListener("scroll", X), () => window.removeEventListener("scroll", X)), [l, L, X]);
  const te = (ne, A) => {
    V && V(ne, A), X();
  }, H = () => {
    F(!1);
  };
  b.useEffect(() => {
    O && X();
  }), b.useImperativeHandle(c, () => O ? {
    updatePosition: () => {
      X();
    }
  } : null, [O, X]), b.useEffect(() => {
    if (!O)
      return;
    const ne = Aa(() => {
      X();
    }), A = yn(l);
    return A.addEventListener("resize", ne), () => {
      ne.clear(), A.removeEventListener("resize", ne);
    };
  }, [l, O, X]);
  let K = C;
  C === "auto" && !P.muiSupportAuto && (K = void 0);
  const J = v || (l ? Je(Lr(l)).body : void 0), Q = (i = w == null ? void 0 : w.root) != null ? i : Dy, k = (s = w == null ? void 0 : w.paper) != null ? s : Zc, Y = Lt({
    elementType: k,
    externalSlotProps: T({}, W, {
      style: _ ? W.style : T({}, W.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: f,
      ref: I
    },
    ownerState: D,
    className: se(M.paper, W == null ? void 0 : W.className)
  }), Z = Lt({
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
      open: O
    },
    ownerState: D,
    className: se(M.root, g)
  }), {
    slotProps: le
  } = Z, S = oe(Z, ky);
  return /* @__PURE__ */ N.jsx(Q, T({}, S, !Vr(Q) && {
    slotProps: le,
    disableScrollLock: L
  }, {
    children: /* @__PURE__ */ N.jsx(P, T({
      appear: !0,
      in: O,
      onEntering: te,
      onExited: H,
      timeout: K
    }, $, {
      children: /* @__PURE__ */ N.jsx(k, T({}, Y, {
        children: m
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Qc.propTypes = {
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
  anchorEl: Ft(o.oneOfType([St, o.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Lr(e.anchorEl);
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
  container: o.oneOfType([St, o.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: o.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Gn,
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
    component: li
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
const Ay = Qc;
function Ly(e) {
  return Re("MuiMenu", e);
}
$e("MuiMenu", ["root", "paper", "list"]);
const Fy = ["onEntering"], Vy = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], By = {
  vertical: "top",
  horizontal: "right"
}, zy = {
  vertical: "top",
  horizontal: "left"
}, Uy = (e) => {
  const {
    classes: t
  } = e;
  return Ne({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Ly, t);
}, Wy = ae(Ay, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Yy = ae(Zc, {
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
}), qy = ae(_y, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), el = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i;
  const s = _e({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: a = !0,
    children: c,
    className: l,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: m,
    PaperProps: g = {},
    PopoverClasses: v,
    transitionDuration: f = "auto",
    TransitionProps: {
      onEntering: y
    } = {},
    variant: O = "selectedMenu",
    slots: R = {},
    slotProps: w = {}
  } = s, E = oe(s.TransitionProps, Fy), h = oe(s, Vy), P = Zt(), C = P.direction === "rtl", V = T({}, s, {
    autoFocus: a,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: y,
    PaperProps: g,
    transitionDuration: f,
    TransitionProps: E,
    variant: O
  }), L = Uy(V), $ = a && !u && m, z = b.useRef(null), W = (ee, _) => {
    z.current && z.current.adjustStyleForScrollbar(ee, P), y && y(ee, _);
  }, B = (ee) => {
    ee.key === "Tab" && (ee.preventDefault(), p && p(ee, "tabKeyDown"));
  };
  let I = -1;
  b.Children.map(c, (ee, _) => {
    /* @__PURE__ */ b.isValidElement(ee) && (process.env.NODE_ENV !== "production" && hn.isFragment(ee) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), ee.props.disabled || (O === "selectedMenu" && ee.props.selected || I === -1) && (I = _));
  });
  const D = (r = R.paper) != null ? r : Yy, M = (i = w.paper) != null ? i : g, U = Lt({
    elementType: R.root,
    externalSlotProps: w.root,
    ownerState: V,
    className: [L.root, l]
  }), G = Lt({
    elementType: D,
    externalSlotProps: M,
    ownerState: V,
    className: L.paper
  });
  return /* @__PURE__ */ N.jsx(Wy, T({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: C ? "right" : "left"
    },
    transformOrigin: C ? By : zy,
    slots: {
      paper: D,
      root: R.root
    },
    slotProps: {
      root: U,
      paper: G
    },
    open: m,
    ref: n,
    transitionDuration: f,
    TransitionProps: T({
      onEntering: W
    }, E),
    ownerState: V
  }, h, {
    classes: v,
    children: /* @__PURE__ */ N.jsx(qy, T({
      onKeyDown: B,
      actions: z,
      autoFocus: a && (I === -1 || u),
      autoFocusItem: $,
      variant: O
    }, d, {
      className: se(L.list, d.className),
      children: c
    }))
  }));
});
process.env.NODE_ENV !== "production" && (el.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: o.oneOfType([St, o.func]),
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
const Hy = el;
function Gy(e) {
  return Re("MuiMenuItem", e);
}
const Ky = $e("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), zn = Ky, Xy = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], Jy = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, Zy = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: i,
    selected: s,
    classes: a
  } = e, l = Ne({
    root: ["root", n && "dense", t && "disabled", !i && "gutters", r && "divider", s && "selected"]
  }, Gy, a);
  return T({}, a, l);
}, Qy = ae($n, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: Jy
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
  [`&.${zn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${zn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${zn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Ae(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${zn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${zn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${xa.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${xa.inset}`]: {
    marginLeft: 52
  },
  [`& .${Xr.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Xr.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Ta.root}`]: {
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
  [`& .${Ta.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), tl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    className: m
  } = r, g = oe(r, Xy), v = b.useContext(vt), f = b.useMemo(() => ({
    dense: a || v.dense || !1,
    disableGutters: l
  }), [v.dense, a, l]), y = b.useRef(null);
  Tt(() => {
    i && (y.current ? y.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [i]);
  const O = T({}, r, {
    dense: f.dense,
    divider: c,
    disableGutters: l
  }), R = Zy(r), w = Ue(y, n);
  let E;
  return r.disabled || (E = p !== void 0 ? p : -1), /* @__PURE__ */ N.jsx(vt.Provider, {
    value: f,
    children: /* @__PURE__ */ N.jsx(Qy, T({
      ref: w,
      role: d,
      tabIndex: E,
      component: s,
      focusVisibleClassName: se(R.focusVisible, u),
      className: se(R.root, m)
    }, g, {
      ownerState: O,
      classes: R
    }))
  });
});
process.env.NODE_ENV !== "production" && (tl.propTypes = {
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
const eg = tl, tg = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], ng = {
  entering: {
    transform: "none"
  },
  entered: {
    transform: "none"
  }
}, nl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = Zt(), i = {
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
    onEntering: m,
    onExit: g,
    onExited: v,
    onExiting: f,
    style: y,
    timeout: O = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = Fi
  } = t, w = oe(t, tg), E = b.useRef(null), h = Ue(E, c.ref, n), P = (I) => (D) => {
    if (I) {
      const M = E.current;
      D === void 0 ? I(M) : I(M, D);
    }
  }, C = P(m), V = P((I, D) => {
    zi(I);
    const M = On({
      style: y,
      timeout: O,
      easing: l
    }, {
      mode: "enter"
    });
    I.style.webkitTransition = r.transitions.create("transform", M), I.style.transition = r.transitions.create("transform", M), d && d(I, D);
  }), L = P(p), $ = P(f), z = P((I) => {
    const D = On({
      style: y,
      timeout: O,
      easing: l
    }, {
      mode: "exit"
    });
    I.style.webkitTransition = r.transitions.create("transform", D), I.style.transition = r.transitions.create("transform", D), g && g(I);
  }), W = P(v), B = (I) => {
    s && s(E.current, I);
  };
  return /* @__PURE__ */ N.jsx(R, T({
    appear: a,
    in: u,
    nodeRef: E,
    onEnter: V,
    onEntered: L,
    onEntering: C,
    onExit: z,
    onExited: W,
    onExiting: $,
    addEndListener: B,
    timeout: O
  }, w, {
    children: (I, D) => /* @__PURE__ */ b.cloneElement(c, T({
      style: T({
        transform: "scale(0)",
        visibility: I === "exited" && !u ? "hidden" : void 0
      }, ng[I], y, c.props.style),
      ref: h
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (nl.propTypes = {
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
  children: Cn.isRequired,
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
const rg = nl;
function og(e) {
  return Re("MuiSpeedDial", e);
}
const ig = $e("MuiSpeedDial", ["root", "fab", "directionUp", "directionDown", "directionLeft", "directionRight", "actions", "actionsClosed"]), Rr = ig, sg = ["ref"], ag = ["ariaLabel", "FabProps", "children", "className", "direction", "hidden", "icon", "onBlur", "onClose", "onFocus", "onKeyDown", "onMouseEnter", "onMouseLeave", "onOpen", "open", "openIcon", "TransitionComponent", "transitionDuration", "TransitionProps"], cg = ["ref"], lg = (e) => {
  const {
    classes: t,
    open: n,
    direction: r
  } = e, i = {
    root: ["root", `direction${fe(r)}`],
    fab: ["fab"],
    actions: ["actions", !n && "actionsClosed"]
  };
  return Ne(i, og, t);
};
function Un(e) {
  if (e === "up" || e === "down")
    return "vertical";
  if (e === "right" || e === "left")
    return "horizontal";
}
function ug(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
const jt = 32, Pr = 16, dg = ae("div", {
  name: "MuiSpeedDial",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`direction${fe(n.direction)}`]];
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
  [`& .${Rr.actions}`]: {
    flexDirection: "column-reverse",
    marginBottom: -jt,
    paddingBottom: Pr + jt
  }
}, t.direction === "down" && {
  flexDirection: "column",
  [`& .${Rr.actions}`]: {
    flexDirection: "column",
    marginTop: -jt,
    paddingTop: Pr + jt
  }
}, t.direction === "left" && {
  flexDirection: "row-reverse",
  [`& .${Rr.actions}`]: {
    flexDirection: "row-reverse",
    marginRight: -jt,
    paddingRight: Pr + jt
  }
}, t.direction === "right" && {
  flexDirection: "row",
  [`& .${Rr.actions}`]: {
    flexDirection: "row",
    marginLeft: -jt,
    paddingLeft: Pr + jt
  }
})), pg = ae(zc, {
  name: "MuiSpeedDial",
  slot: "Fab",
  overridesResolver: (e, t) => t.fab
})(() => ({
  pointerEvents: "auto"
})), fg = ae("div", {
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
})), rl = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiSpeedDial"
  }), i = Zt(), s = {
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
    icon: m,
    onBlur: g,
    onClose: v,
    onFocus: f,
    onKeyDown: y,
    onMouseEnter: O,
    onMouseLeave: R,
    onOpen: w,
    open: E,
    TransitionComponent: h = rg,
    transitionDuration: P = s,
    TransitionProps: C
  } = r, V = oe(r.FabProps, sg), L = oe(r, ag), [$, z] = ui({
    controlled: E,
    default: !1,
    name: "SpeedDial",
    state: "open"
  }), W = T({}, r, {
    open: $,
    direction: d
  }), B = lg(W), I = b.useRef();
  b.useEffect(() => () => {
    clearTimeout(I.current);
  }, []);
  const D = b.useRef(0), M = b.useRef(), U = b.useRef([]);
  U.current = [U.current[0]];
  const G = b.useCallback((k) => {
    U.current[0] = k;
  }, []), ee = Ue(c, G), _ = (k, Y) => (Z) => {
    U.current[k + 1] = Z, Y && Y(Z);
  }, F = (k) => {
    y && y(k);
    const Y = k.key.replace("Arrow", "").toLowerCase(), {
      current: Z = Y
    } = M;
    if (k.key === "Escape") {
      z(!1), U.current[0].focus(), v && v(k, "escapeKeyDown");
      return;
    }
    if (Un(Y) === Un(Z) && Un(Y) !== void 0) {
      k.preventDefault();
      const le = Y === Z ? 1 : -1, S = ug(D.current + le, 0, U.current.length - 1);
      U.current[S].focus(), D.current = S, M.current = Z;
    }
  };
  b.useEffect(() => {
    $ || (D.current = 0, M.current = void 0);
  }, [$]);
  const X = (k) => {
    k.type === "mouseleave" && R && R(k), k.type === "blur" && g && g(k), clearTimeout(I.current), k.type === "blur" ? I.current = setTimeout(() => {
      z(!1), v && v(k, "blur");
    }) : (z(!1), v && v(k, "mouseLeave"));
  }, te = (k) => {
    V.onClick && V.onClick(k), clearTimeout(I.current), $ ? (z(!1), v && v(k, "toggle")) : (z(!0), w && w(k, "toggle"));
  }, H = (k) => {
    k.type === "mouseenter" && O && O(k), k.type === "focus" && f && f(k), clearTimeout(I.current), $ || (I.current = setTimeout(() => {
      z(!0), w && w(k, {
        focus: "focus",
        mouseenter: "mouseEnter"
      }[k.type]);
    }));
  }, K = a.replace(/^[^a-z]+|[^\w:.-]+/gi, ""), J = b.Children.toArray(l).filter((k) => (process.env.NODE_ENV !== "production" && hn.isFragment(k) && console.error(["MUI: The SpeedDial component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), /* @__PURE__ */ b.isValidElement(k))), Q = J.map((k, Y) => {
    const Z = k.props, {
      FabProps: {
        ref: le
      } = {},
      tooltipPlacement: S
    } = Z, ne = oe(Z.FabProps, cg), A = S || (Un(d) === "vertical" ? "left" : "top");
    return /* @__PURE__ */ b.cloneElement(k, {
      FabProps: T({}, ne, {
        ref: _(Y, le)
      }),
      delay: 30 * ($ ? Y : J.length - Y),
      open: $,
      tooltipPlacement: A,
      id: `${K}-action-${Y}`
    });
  });
  return /* @__PURE__ */ N.jsxs(dg, T({
    className: se(B.root, u),
    ref: n,
    role: "presentation",
    onKeyDown: F,
    onBlur: X,
    onFocus: H,
    onMouseEnter: H,
    onMouseLeave: X,
    ownerState: W
  }, L, {
    children: [/* @__PURE__ */ N.jsx(h, T({
      in: !p,
      timeout: P,
      unmountOnExit: !0
    }, C, {
      children: /* @__PURE__ */ N.jsx(pg, T({
        color: "primary",
        "aria-label": a,
        "aria-haspopup": "true",
        "aria-expanded": $,
        "aria-controls": `${K}-actions`
      }, V, {
        onClick: te,
        className: se(B.fab, V.className),
        ref: ee,
        ownerState: W,
        children: /* @__PURE__ */ b.isValidElement(m) && Zr(m, ["SpeedDialIcon"]) ? /* @__PURE__ */ b.cloneElement(m, {
          open: $
        }) : m
      }))
    })), /* @__PURE__ */ N.jsx(fg, {
      id: `${K}-actions`,
      role: "menu",
      "aria-orientation": Un(d),
      className: se(B.actions, !$ && B.actionsClosed),
      ownerState: W,
      children: Q
    })]
  }));
});
process.env.NODE_ENV !== "production" && (rl.propTypes = {
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
const mg = rl;
function hg(e) {
  return Re("MuiTooltip", e);
}
const vg = $e("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), At = vg, yg = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function gg(e) {
  return Math.round(e * 1e5) / 1e5;
}
const bg = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: i,
    placement: s
  } = e, a = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", i && "touch", `tooltipPlacement${fe(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return Ne(a, hg, t);
}, xg = ae(Nc, {
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
  [`&[data-popper-placement*="bottom"] .${At.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${At.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${At.arrow}`]: T({}, t.isRtl ? {
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
  [`&[data-popper-placement*="left"] .${At.arrow}`]: T({}, t.isRtl ? {
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
})), Eg = ae("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${fe(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : Ae(e.palette.grey[700], 0.92),
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
  lineHeight: `${gg(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${At.popper}[data-popper-placement*="left"] &`]: T({
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
  [`.${At.popper}[data-popper-placement*="right"] &`]: T({
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
  [`.${At.popper}[data-popper-placement*="top"] &`]: T({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${At.popper}[data-popper-placement*="bottom"] &`]: T({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Tg = ae("span", {
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
  color: e.vars ? e.vars.palette.Tooltip.bg : Ae(e.palette.grey[700], 0.9),
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
let Sr = !1, Lo = null, Wn = {
  x: 0,
  y: 0
};
function $r(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const ol = /* @__PURE__ */ b.forwardRef(function(t, n) {
  var r, i, s, a, c, l, u, d, p, m, g, v, f, y, O, R, w, E, h;
  const P = _e({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: C = !1,
    children: V,
    components: L = {},
    componentsProps: $ = {},
    describeChild: z = !1,
    disableFocusListener: W = !1,
    disableHoverListener: B = !1,
    disableInteractive: I = !1,
    disableTouchListener: D = !1,
    enterDelay: M = 100,
    enterNextDelay: U = 0,
    enterTouchDelay: G = 700,
    followCursor: ee = !1,
    id: _,
    leaveDelay: F = 0,
    leaveTouchDelay: X = 1500,
    onClose: te,
    onOpen: H,
    open: K,
    placement: J = "bottom",
    PopperComponent: Q,
    PopperProps: k = {},
    slotProps: Y = {},
    slots: Z = {},
    title: le,
    TransitionComponent: S = si,
    TransitionProps: ne
  } = P, A = oe(P, yg), ue = /* @__PURE__ */ b.isValidElement(V) ? V : /* @__PURE__ */ N.jsx("span", {
    children: V
  }), Pe = Zt(), Be = Pe.direction === "rtl", [Se, Ze] = b.useState(), [Le, Ge] = b.useState(null), ze = b.useRef(!1), ot = I || ee, Ce = b.useRef(), qe = b.useRef(), Ke = b.useRef(), Qe = b.useRef(), [It, ce] = ui({
    controlled: K,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Xe = It;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: re
    } = b.useRef(K !== void 0);
    b.useEffect(() => {
      Se && Se.disabled && !re && le !== "" && Se.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [le, Se, re]);
  }
  const Ot = La(_), yt = b.useRef(), zt = b.useCallback(() => {
    yt.current !== void 0 && (document.body.style.WebkitUserSelect = yt.current, yt.current = void 0), clearTimeout(Qe.current);
  }, []);
  b.useEffect(() => () => {
    clearTimeout(Ce.current), clearTimeout(qe.current), clearTimeout(Ke.current), zt();
  }, [zt]);
  const pr = (re) => {
    clearTimeout(Lo), Sr = !0, ce(!0), H && !Xe && H(re);
  }, Qt = Dt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      clearTimeout(Lo), Lo = setTimeout(() => {
        Sr = !1;
      }, 800 + F), ce(!1), te && Xe && te(re), clearTimeout(Ce.current), Ce.current = setTimeout(() => {
        ze.current = !1;
      }, Pe.transitions.duration.shortest);
    }
  ), _n = (re) => {
    ze.current && re.type !== "touchstart" || (Se && Se.removeAttribute("title"), clearTimeout(qe.current), clearTimeout(Ke.current), M || Sr && U ? qe.current = setTimeout(() => {
      pr(re);
    }, Sr ? U : M) : pr(re));
  }, fr = (re) => {
    clearTimeout(qe.current), clearTimeout(Ke.current), Ke.current = setTimeout(() => {
      Qt(re);
    }, F);
  }, {
    isFocusVisibleRef: mr,
    onBlur: Nn,
    onFocus: hr,
    ref: Mt
  } = di(), [, en] = b.useState(!1), tn = (re) => {
    Nn(re), mr.current === !1 && (en(!1), fr(re));
  }, In = (re) => {
    Se || Ze(re.currentTarget), hr(re), mr.current === !0 && (en(!0), _n(re));
  }, vr = (re) => {
    ze.current = !0;
    const Fe = ue.props;
    Fe.onTouchStart && Fe.onTouchStart(re);
  }, Mn = _n, yr = fr, gr = (re) => {
    vr(re), clearTimeout(Ke.current), clearTimeout(Ce.current), zt(), yt.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Qe.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = yt.current, _n(re);
    }, G);
  }, br = (re) => {
    ue.props.onTouchEnd && ue.props.onTouchEnd(re), zt(), clearTimeout(Ke.current), Ke.current = setTimeout(() => {
      Qt(re);
    }, X);
  };
  b.useEffect(() => {
    if (!Xe)
      return;
    function re(Fe) {
      (Fe.key === "Escape" || Fe.key === "Esc") && Qt(Fe);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [Qt, Xe]);
  const Co = Ue(ue.ref, Mt, Ze, n);
  !le && le !== 0 && (Xe = !1);
  const kn = b.useRef(), xr = (re) => {
    const Fe = ue.props;
    Fe.onMouseMove && Fe.onMouseMove(re), Wn = {
      x: re.clientX,
      y: re.clientY
    }, kn.current && kn.current.update();
  }, Ut = {}, jn = typeof le == "string";
  z ? (Ut.title = !Xe && jn && !B ? le : null, Ut["aria-describedby"] = Xe ? Ot : null) : (Ut["aria-label"] = jn ? le : null, Ut["aria-labelledby"] = Xe && !jn ? Ot : null);
  const et = T({}, Ut, A, ue.props, {
    className: se(A.className, ue.props.className),
    onTouchStart: vr,
    ref: Co
  }, ee ? {
    onMouseMove: xr
  } : {});
  process.env.NODE_ENV !== "production" && (et["data-mui-internal-clone-element"] = !0, b.useEffect(() => {
    Se && !Se.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [Se]));
  const Wt = {};
  D || (et.onTouchStart = gr, et.onTouchEnd = br), B || (et.onMouseOver = $r(Mn, et.onMouseOver), et.onMouseLeave = $r(yr, et.onMouseLeave), ot || (Wt.onMouseOver = Mn, Wt.onMouseLeave = yr)), W || (et.onFocus = $r(In, et.onFocus), et.onBlur = $r(tn, et.onBlur), ot || (Wt.onFocus = In, Wt.onBlur = tn)), process.env.NODE_ENV !== "production" && ue.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${ue.props.title}\` or the Tooltip component.`].join(`
`));
  const x = b.useMemo(() => {
    var re;
    let Fe = [{
      name: "arrow",
      enabled: !!Le,
      options: {
        element: Le,
        padding: 4
      }
    }];
    return (re = k.popperOptions) != null && re.modifiers && (Fe = Fe.concat(k.popperOptions.modifiers)), T({}, k.popperOptions, {
      modifiers: Fe
    });
  }, [Le, k]), j = T({}, P, {
    isRtl: Be,
    arrow: C,
    disableInteractive: ot,
    placement: J,
    PopperComponentProp: Q,
    touch: ze.current
  }), q = bg(j), ie = (r = (i = Z.popper) != null ? i : L.Popper) != null ? r : xg, me = (s = (a = (c = Z.transition) != null ? c : L.Transition) != null ? a : S) != null ? s : si, ye = (l = (u = Z.tooltip) != null ? u : L.Tooltip) != null ? l : Eg, pe = (d = (p = Z.arrow) != null ? p : L.Arrow) != null ? d : Tg, de = Yn(ie, T({}, k, (m = Y.popper) != null ? m : $.popper, {
    className: se(q.popper, k == null ? void 0 : k.className, (g = (v = Y.popper) != null ? v : $.popper) == null ? void 0 : g.className)
  }), j), We = Yn(me, T({}, ne, (f = Y.transition) != null ? f : $.transition), j), Me = Yn(ye, T({}, (y = Y.tooltip) != null ? y : $.tooltip, {
    className: se(q.tooltip, (O = (R = Y.tooltip) != null ? R : $.tooltip) == null ? void 0 : O.className)
  }), j), ke = Yn(pe, T({}, (w = Y.arrow) != null ? w : $.arrow, {
    className: se(q.arrow, (E = (h = Y.arrow) != null ? h : $.arrow) == null ? void 0 : E.className)
  }), j);
  return /* @__PURE__ */ N.jsxs(b.Fragment, {
    children: [/* @__PURE__ */ b.cloneElement(ue, et), /* @__PURE__ */ N.jsx(ie, T({
      as: Q ?? Nc,
      placement: J,
      anchorEl: ee ? {
        getBoundingClientRect: () => ({
          top: Wn.y,
          left: Wn.x,
          right: Wn.x,
          bottom: Wn.y,
          width: 0,
          height: 0
        })
      } : Se,
      popperRef: kn,
      open: Se ? Xe : !1,
      id: Ot,
      transition: !0
    }, Wt, de, {
      popperOptions: x,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ N.jsx(me, T({
        timeout: Pe.transitions.duration.shorter
      }, re, We, {
        children: /* @__PURE__ */ N.jsxs(ye, T({}, Me, {
          children: [le, C ? /* @__PURE__ */ N.jsx(pe, T({}, ke, {
            ref: Ge
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ol.propTypes = {
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
  children: Cn.isRequired,
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
const wg = ol;
function Og(e) {
  return Re("MuiSpeedDialAction", e);
}
const Cg = $e("MuiSpeedDialAction", ["fab", "fabClosed", "staticTooltip", "staticTooltipClosed", "staticTooltipLabel", "tooltipPlacementLeft", "tooltipPlacementRight"]), Rg = Cg, Pg = ["className", "delay", "FabProps", "icon", "id", "open", "TooltipClasses", "tooltipOpen", "tooltipPlacement", "tooltipTitle"], Sg = (e) => {
  const {
    open: t,
    tooltipPlacement: n,
    classes: r
  } = e, i = {
    fab: ["fab", !t && "fabClosed"],
    staticTooltip: ["staticTooltip", `tooltipPlacement${fe(n)}`, !t && "staticTooltipClosed"],
    staticTooltipLabel: ["staticTooltipLabel"]
  };
  return Ne(i, Og, r);
}, $g = ae(zc, {
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
    backgroundColor: e.vars ? e.vars.palette.SpeedDialAction.fabHoverBg : ti(e.palette.background.paper, 0.15)
  },
  transition: `${e.transitions.create("transform", {
    duration: e.transitions.duration.shorter
  })}, opacity 0.8s`,
  opacity: 1
}, !t.open && {
  opacity: 0,
  transform: "scale(0)"
})), _g = ae("span", {
  name: "MuiSpeedDialAction",
  slot: "StaticTooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.staticTooltip, !n.open && t.staticTooltipClosed, t[`tooltipPlacement${fe(n.tooltipPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  [`& .${Rg.staticTooltipLabel}`]: T({
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
})), Ng = ae("span", {
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
})), il = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
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
    tooltipPlacement: m = "left",
    tooltipTitle: g
  } = r, v = oe(r, Pg), f = T({}, r, {
    tooltipPlacement: m
  }), y = Sg(f), [O, R] = b.useState(p), w = () => {
    R(!1);
  }, E = () => {
    R(!0);
  }, h = {
    transitionDelay: `${s}ms`
  }, P = /* @__PURE__ */ N.jsx($g, T({
    size: "small",
    className: se(y.fab, i),
    tabIndex: -1,
    role: "menuitem",
    ownerState: f
  }, a, {
    style: T({}, h, a.style),
    children: c
  }));
  return p ? /* @__PURE__ */ N.jsxs(_g, T({
    id: l,
    ref: n,
    className: y.staticTooltip,
    ownerState: f
  }, v, {
    children: [/* @__PURE__ */ N.jsx(Ng, {
      style: h,
      id: `${l}-label`,
      className: y.staticTooltipLabel,
      ownerState: f,
      children: g
    }), /* @__PURE__ */ b.cloneElement(P, {
      "aria-labelledby": `${l}-label`
    })]
  })) : (!u && O && R(!1), /* @__PURE__ */ N.jsx(wg, T({
    id: l,
    ref: n,
    title: g,
    placement: m,
    onClose: w,
    onOpen: E,
    open: u && O,
    classes: d
  }, v, {
    children: P
  })));
});
process.env.NODE_ENV !== "production" && (il.propTypes = {
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
const Ig = il, Mg = Li(/* @__PURE__ */ N.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
function kg(e) {
  return Re("MuiSpeedDialIcon", e);
}
const jg = $e("MuiSpeedDialIcon", ["root", "icon", "iconOpen", "iconWithOpenIconOpen", "openIcon", "openIconOpen"]), Yt = jg, Dg = ["className", "icon", "open", "openIcon"], Ag = (e) => {
  const {
    classes: t,
    open: n,
    openIcon: r
  } = e;
  return Ne({
    root: ["root"],
    icon: ["icon", n && "iconOpen", r && n && "iconWithOpenIconOpen"],
    openIcon: ["openIcon", n && "openIconOpen"]
  }, kg, t);
}, Lg = ae("span", {
  name: "MuiSpeedDialIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Yt.icon}`]: t.icon
    }, {
      [`& .${Yt.icon}`]: n.open && t.iconOpen
    }, {
      [`& .${Yt.icon}`]: n.open && n.openIcon && t.iconWithOpenIconOpen
    }, {
      [`& .${Yt.openIcon}`]: t.openIcon
    }, {
      [`& .${Yt.openIcon}`]: n.open && t.openIconOpen
    }, t.root];
  }
})(({
  theme: e,
  ownerState: t
}) => ({
  height: 24,
  [`& .${Yt.icon}`]: T({
    transition: e.transitions.create(["transform", "opacity"], {
      duration: e.transitions.duration.short
    })
  }, t.open && T({
    transform: "rotate(45deg)"
  }, t.openIcon && {
    opacity: 0
  })),
  [`& .${Yt.openIcon}`]: T({
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
})), qi = /* @__PURE__ */ b.forwardRef(function(t, n) {
  const r = _e({
    props: t,
    name: "MuiSpeedDialIcon"
  }), {
    className: i,
    icon: s,
    openIcon: a
  } = r, c = oe(r, Dg), l = r, u = Ag(l);
  function d(p, m) {
    return /* @__PURE__ */ b.isValidElement(p) ? /* @__PURE__ */ b.cloneElement(p, {
      className: m
    }) : p;
  }
  return /* @__PURE__ */ N.jsxs(Lg, T({
    className: se(u.root, i),
    ref: n,
    ownerState: l
  }, c, {
    children: [a ? d(a, u.openIcon) : null, s ? d(s, u.icon) : /* @__PURE__ */ N.jsx(Mg, {
      className: u.icon
    })]
  }));
});
process.env.NODE_ENV !== "production" && (qi.propTypes = {
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
qi.muiName = "SpeedDialIcon";
const Fg = qi;
var Hi = {}, sl = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(sl);
var al = sl.exports, Fo = {};
const Vg = /* @__PURE__ */ vl(Hh);
var Pa;
function cl() {
  return Pa || (Pa = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = Vg;
  }(Fo)), Fo;
}
var Bg = al;
Object.defineProperty(Hi, "__esModule", {
  value: !0
});
var Gi = Hi.default = void 0, zg = Bg(cl()), Ug = N, Wg = (0, zg.default)(/* @__PURE__ */ (0, Ug.jsx)("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
}), "Folder");
Gi = Hi.default = Wg;
var Ki = {}, Yg = al;
Object.defineProperty(Ki, "__esModule", {
  value: !0
});
var Xi = Ki.default = void 0, qg = Yg(cl()), Hg = N, Gg = (0, qg.default)(/* @__PURE__ */ (0, Hg.jsx)("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"
}), "InsertDriveFile");
Xi = Ki.default = Gg;
function ai() {
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
function Kg({ children: e, items: t }) {
  const [n, r] = Rt(null), i = (a) => {
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
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: /* @__PURE__ */ N.jsxs("div", { onContextMenu: i, style: { cursor: "context-menu" }, children: [
    e,
    /* @__PURE__ */ N.jsx(
      Hy,
      {
        open: n !== null,
        onClose: s,
        anchorReference: "anchorPosition",
        anchorPosition: n !== null ? { top: n.mouseY, left: n.mouseX } : void 0,
        children: t.map((a) => /* @__PURE__ */ N.jsx(
          eg,
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
function ll({ children: e, onDropHandler: t }) {
  return /* @__PURE__ */ N.jsx(
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
function Xg({ entryHandle: e }) {
  const { currentFolderHandle: t, onFileClick: n, showFolderView: r, setIsLoading: i } = mn(Eo), { setEntryOnDrag: s, handleDrop: a } = mn(Ji), c = [
    {
      name: "rename",
      handler: async (m) => {
        console.log("ContentEntry rename handler called", m);
        const g = prompt("new name", "");
        if (g) {
          if (await ul(t, g)) {
            alert('"' + g + `" is an existing name.
Please try again with another name.`);
            return;
          }
          i(!0), await lb(t, e, g), await r(t), i(!1);
        }
      }
    },
    {
      name: "duplicate",
      handler: async (m) => {
        console.log("ContentEntry duplicate handler called", m), i(!0), await Oo(e, t, e.name + "_copy_" + ai()), await r(t), i(!1);
      }
    },
    {
      name: "remove",
      handler: async (m) => {
        console.log("ContentEntry remove handler called", m), confirm('Are you sure to remove "' + e.name + `"?
This is not revertible!`) && (i(!0), await wo(t, e), await r(t), i(!1));
      }
    }
  ];
  function l(m) {
    console.log("ContentEntry onClickHandler called", m), mt(e) ? r(e) : n(e);
  }
  function u(m) {
    console.log("ContentEntry onDragHandler called", m), s(e);
  }
  function d(m) {
    console.log("ContentEntry onDropHandler called", m), a(e);
  }
  const p = /* @__PURE__ */ N.jsx(Kg, { items: c, children: /* @__PURE__ */ N.jsx(vy, { disablePadding: !0, children: /* @__PURE__ */ N.jsxs(oy, { onClick: l, children: [
    /* @__PURE__ */ N.jsx(Ty, { children: mt(e) ? /* @__PURE__ */ N.jsx(Gi, {}) : /* @__PURE__ */ N.jsx(Xi, {}) }),
    /* @__PURE__ */ N.jsx(Sy, { draggable: !0, onDragStart: u, primary: e.name })
  ] }) }) });
  return mt(e) ? /* @__PURE__ */ N.jsx(ll, { onDropHandler: d, children: p }) : p;
}
function Jg({ entryHandle: e }) {
  const { showFolderView: t } = mn(Eo), { handleDrop: n } = mn(Ji);
  function r(s) {
    console.log("PathEntry onDropHandler called", s), n(e);
  }
  function i(s) {
    console.log("PathEntry onClickHandler called", s), t(e);
  }
  return /* @__PURE__ */ N.jsx(ll, { onDropHandler: r, children: /* @__PURE__ */ N.jsx(yv, { size: "small", onClick: i, sx: { minWidth: 10, textTransform: "none" }, children: e.name === "\\" ? "ROOT" : e.name }) });
}
function Zg() {
  const { showFolderView: e, currentFolderHandle: t, setIsLoading: n } = mn(Eo), r = [
    {
      icon: /* @__PURE__ */ N.jsx(Xi, {}),
      name: "new file",
      handler: async (i) => {
        console.log("AddEntry new file called", i), n(!0), await Qi(t, "new_file_" + ai()), await e(t), n(!1);
      }
    },
    {
      icon: /* @__PURE__ */ N.jsx(Gi, {}),
      name: "new folder",
      handler: async (i) => {
        console.log("AddEntry new folder called", i), n(!0), await Zi(t, "new_folder_" + ai()), await e(t), n(!1);
      }
    }
  ];
  return /* @__PURE__ */ N.jsx(
    mg,
    {
      ariaLabel: "SpeedDial basic example",
      sx: { position: "fixed", bottom: 16, right: 16 },
      icon: /* @__PURE__ */ N.jsx(Fg, {}),
      children: r.map((i) => /* @__PURE__ */ N.jsx(
        Ig,
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
const Eo = Sa(), Ji = Sa();
function fb({ rootFolder: e, onFileClick: t }) {
  const [n, r] = Rt(e), [i, s] = Rt(), [a, c] = Rt([e]), [l, u] = Rt([]), [d, p] = Rt(!1);
  Vo(() => {
    async function v() {
      await m(n);
    }
    v();
  }, []);
  async function m(v) {
    r(v), u(await To(v));
    for (var f = 0; f < a.length; f++)
      if (await v.isSameEntry(a[f])) {
        c((y) => y.slice(0, f + 1));
        return;
      }
    c((y) => [...y, v]);
  }
  async function g(v) {
    if (!await v.isSameEntry(i) && !await v.isSameEntry(n)) {
      if (await ul(v, i.name)) {
        alert('"' + i.name + '" conflicts with another name in the target folder.');
        return;
      }
      p(!0), await ub(n, i, v), await m(n), p(!1);
    }
  }
  return /* @__PURE__ */ N.jsx(Eo.Provider, { value: { currentFolderHandle: n, onFileClick: t, showFolderView: m, setIsLoading: p }, children: /* @__PURE__ */ N.jsxs(Ji.Provider, { value: { setEntryOnDrag: s, handleDrop: g }, children: [
    /* @__PURE__ */ N.jsx(Wh, { "aria-label": "breadcrumb", children: a.map((v) => /* @__PURE__ */ N.jsx(Jg, { entryHandle: v }, crypto.randomUUID())) }),
    /* @__PURE__ */ N.jsx(Lv, {}),
    /* @__PURE__ */ N.jsx(Yc, { children: l.sort((v, f) => mt(v) && !mt(f) ? -1 : !mt(v) && mt(f) ? 1 : v.name < f.name ? -1 : v.name > f.name ? 1 : 0).filter((v) => !v.name.startsWith(".")).map((v) => /* @__PURE__ */ N.jsx(Xg, { entryHandle: v }, crypto.randomUUID())) }),
    /* @__PURE__ */ N.jsx(Zg, {}),
    /* @__PURE__ */ N.jsx(kc, { sx: { color: "#fff", zIndex: (v) => v.zIndex.drawer + 1 }, open: d, children: /* @__PURE__ */ N.jsx(Rv, { color: "inherit" }) })
  ] }) });
}
const mb = () => {
  const [e, t] = Rt(null), [n, r] = Rt(!1), [i, s] = Rt("");
  Vo(() => {
    const l = setInterval(async () => {
      r(await eb(e));
    }, 1e3);
    return () => clearInterval(l);
  }, [e]), Vo(() => {
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
    const d = l.split("/").map((m) => m.trim());
    let p = e;
    for (const m of d)
      if (m.length !== 0)
        try {
          p = await p.getDirectoryHandle(m, { create: u });
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
async function hb(e, t) {
  const n = await e.createWritable();
  await n.write(t), await n.close(), console.log("Successfully wrote to", e.name);
}
async function Qg(e) {
  const n = await (await e.getFile()).text();
  return String(n);
}
function mt(e) {
  return e.kind === "directory";
}
async function eb(e) {
  if (e === null)
    return !1;
  if (mt(e))
    try {
      for await (const [t, n] of e.entries())
        break;
      return !0;
    } catch {
      return !1;
    }
  else
    try {
      return await Qg(e), !0;
    } catch {
      return !1;
    }
}
async function To(e) {
  const t = [];
  for await (const n of await e.values())
    t.push(n);
  return t;
}
async function tb(e) {
  var t = [];
  for (const n of await To(e))
    t.push({
      parent: e,
      handle: n,
      children: mt(n) ? await tb(n) : null
    });
  return t;
}
async function nb(e, t) {
  try {
    return await e.getFileHandle(t), !0;
  } catch {
    return !1;
  }
}
async function rb(e, t) {
  try {
    return await e.getDirectoryHandle(t), !0;
  } catch {
    return !1;
  }
}
async function ul(e, t) {
  return await nb(e, t) || await rb(e, t);
}
async function Zi(e, t) {
  return await e.getDirectoryHandle(t, {
    create: !0
  });
}
async function Qi(e, t) {
  return await e.getFileHandle(t, {
    create: !0
  });
}
async function vb(e, t, n) {
  var r = [e];
  for (let i = 0; i < t; i++) {
    const s = [];
    for (const a of r)
      for (let c = 0; c < n; c++) {
        const l = Math.random();
        l < 0.7 ? s.push(await Zi(a, String(l))) : await Qi(a, String(l));
      }
    r = s;
  }
}
async function wo(e, t) {
  mt(t) ? await ob(e, t) : await ib(e, t);
}
async function dl(e) {
  const t = await To(e);
  t.sort((r, i) => r.name.startsWith(".") ? -1 : i.name.startsWith(".") ? 1 : 0);
  for (var n = 0; n < t.length; n++)
    await wo(e, t[n]);
}
async function ob(e, t) {
  await dl(t), await e.removeEntry(t.name);
}
async function ib(e, t) {
  await e.removeEntry(t.name);
}
async function Oo(e, t, n) {
  return mt(e) ? await ab(e, t, n) : await cb(e, t, n);
}
async function sb(e, t, n = !1) {
  n && await dl(t);
  for (const r of await To(e))
    await Oo(r, t, r.name);
}
async function ab(e, t, n) {
  const r = await Zi(t, n);
  return await sb(e, r), r;
}
async function cb(e, t, n) {
  const r = await e.getFile(), i = await Qi(t, n), s = await i.createWritable();
  return await s.write(r), await s.close(), i;
}
async function lb(e, t, n) {
  const r = await Oo(t, e, n);
  return await wo(e, t), r;
}
async function ub(e, t, n) {
  const r = await Oo(t, n, t.name);
  return await wo(e, t), r;
}
export {
  ab as _copyFolder,
  ib as _removeFile,
  ob as _removeFolder,
  Qi as addNewFile,
  Zi as addNewFolder,
  vb as addRandomFolderTree,
  sb as backupFolder,
  ul as checkEntryExists,
  nb as checkFileExists,
  rb as checkFolderExists,
  dl as cleanFolder,
  Oo as copyEntry,
  fb as default,
  Qg as getFileText,
  To as getFolderContent,
  tb as getFolderTree,
  eb as isEntryHealthy,
  mt as isFolder,
  ub as moveEntry,
  wo as removeEntry,
  lb as renameEntry,
  mb as useFileSystem,
  hb as writeFileText
};
