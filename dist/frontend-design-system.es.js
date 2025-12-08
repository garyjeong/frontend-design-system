import * as H from "react";
import w, { useEffect as Z, useId as J, useState as W, useRef as ee, useCallback as B, createContext as Ae, useContext as Le, useMemo as we, useLayoutEffect as Pt } from "react";
import { createPortal as At } from "react-dom";
var Ie = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Lt() {
  if (Ge) return fe;
  Ge = 1;
  var e = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function t(n, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: n,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return fe.Fragment = r, fe.jsx = t, fe.jsxs = t, fe;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Ot() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === P ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case x:
          return "Fragment";
        case R:
          return "Profiler";
        case y:
          return "StrictMode";
        case C:
          return "Suspense";
        case j:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case p:
            return "Portal";
          case E:
            return v.displayName || "Context";
          case k:
            return (v._context.displayName || "Context") + ".Consumer";
          case T:
            var _ = v.render;
            return v = v.displayName, v || (v = _.displayName || _.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case O:
            return _ = v.displayName || null, _ !== null ? _ : e(v.type) || "Memo";
          case M:
            _ = v._payload, v = v._init;
            try {
              return e(v(_));
            } catch {
            }
        }
      return null;
    }
    function r(v) {
      return "" + v;
    }
    function t(v) {
      try {
        r(v);
        var _ = !1;
      } catch {
        _ = !0;
      }
      if (_) {
        _ = console;
        var G = _.error, U = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return G.call(
          _,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), r(v);
      }
    }
    function n(v) {
      if (v === x) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === M)
        return "<...>";
      try {
        var _ = e(v);
        return _ ? "<" + _ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var v = I.A;
      return v === null ? null : v.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(v) {
      if (z.call(v, "key")) {
        var _ = Object.getOwnPropertyDescriptor(v, "key").get;
        if (_ && _.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function l(v, _) {
      function G() {
        V || (V = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          _
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: G,
        configurable: !0
      });
    }
    function d() {
      var v = e(this.type);
      return $[v] || ($[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function u(v, _, G, U, ve, Re) {
      var Y = G.ref;
      return v = {
        $$typeof: h,
        type: v,
        key: _,
        props: G,
        _owner: U
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ve
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Re
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function m(v, _, G, U, ve, Re) {
      var Y = _.children;
      if (Y !== void 0)
        if (U)
          if (F(Y)) {
            for (U = 0; U < Y.length; U++)
              c(Y[U]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else c(Y);
      if (z.call(_, "key")) {
        Y = e(v);
        var ie = Object.keys(_).filter(function(It) {
          return It !== "key";
        });
        U = 0 < ie.length ? "{key: someKey, " + ie.join(": ..., ") + ": ...}" : "{key: someKey}", se[Y + U] || (ie = 0 < ie.length ? "{" + ie.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          Y,
          ie,
          Y
        ), se[Y + U] = !0);
      }
      if (Y = null, G !== void 0 && (t(G), Y = "" + G), i(_) && (t(_.key), Y = "" + _.key), "key" in _) {
        G = {};
        for (var Ee in _)
          Ee !== "key" && (G[Ee] = _[Ee]);
      } else G = _;
      return Y && l(
        G,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), u(
        v,
        Y,
        G,
        s(),
        ve,
        Re
      );
    }
    function c(v) {
      b(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === M && (v._payload.status === "fulfilled" ? b(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
    }
    function b(v) {
      return typeof v == "object" && v !== null && v.$$typeof === h;
    }
    var f = w, h = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), E = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), P = Symbol.for("react.client.reference"), I = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, F = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var V, $ = {}, K = f.react_stack_bottom_frame.bind(
      f,
      o
    )(), X = A(n(o)), se = {};
    me.Fragment = x, me.jsx = function(v, _, G) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        v,
        _,
        G,
        !1,
        U ? Error("react-stack-top-frame") : K,
        U ? A(n(v)) : X
      );
    }, me.jsxs = function(v, _, G) {
      var U = 1e4 > I.recentlyCreatedOwnerStacks++;
      return m(
        v,
        _,
        G,
        !0,
        U ? Error("react-stack-top-frame") : K,
        U ? A(n(v)) : X
      );
    };
  }()), me;
}
process.env.NODE_ENV === "production" ? Ie.exports = Lt() : Ie.exports = Ot();
var a = Ie.exports;
function lt(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (t = lt(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function it() {
  for (var e, r, t = 0, n = "", s = arguments.length; t < s; t++) (e = arguments[t]) && (r = lt(e)) && (n && (n += " "), n += r);
  return n;
}
const Ye = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, qe = it, N = (e, r) => (t) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null) return qe(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: s, defaultVariants: o } = r, i = Object.keys(s).map((u) => {
    const m = t == null ? void 0 : t[u], c = o == null ? void 0 : o[u];
    if (m === null) return null;
    const b = Ye(m) || Ye(c);
    return s[u][b];
  }), l = t && Object.entries(t).reduce((u, m) => {
    let [c, b] = m;
    return b === void 0 || (u[c] = b), u;
  }, {}), d = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, m) => {
    let { class: c, className: b, ...f } = m;
    return Object.entries(f).every((h) => {
      let [p, x] = h;
      return Array.isArray(x) ? x.includes({
        ...o,
        ...l
      }[p]) : {
        ...o,
        ...l
      }[p] === x;
    }) ? [
      ...u,
      c,
      b
    ] : u;
  }, []);
  return qe(e, i, d, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
}, Oe = "-", _t = (e) => {
  const r = Bt(e), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(Oe);
      return l[0] === "" && l.length !== 1 && l.shift(), dt(l, r) || Ft(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const d = t[i] || [];
      return l && n[i] ? [...d, ...n[i]] : d;
    }
  };
}, dt = (e, r) => {
  var i;
  if (e.length === 0)
    return r.classGroupId;
  const t = e[0], n = r.nextPart.get(t), s = n ? dt(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (r.validators.length === 0)
    return;
  const o = e.join(Oe);
  return (i = r.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : i.classGroupId;
}, Ke = /^\[(.+)\]$/, Ft = (e) => {
  if (Ke.test(e)) {
    const r = Ke.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, Bt = (e) => {
  const {
    theme: r,
    prefix: t
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Dt(Object.entries(e.classGroups), t).forEach(([o, i]) => {
    Pe(i, n, o, r);
  }), n;
}, Pe = (e, r, t, n) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? r : Xe(r, s);
      o.classGroupId = t;
      return;
    }
    if (typeof s == "function") {
      if ($t(s)) {
        Pe(s(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: s,
        classGroupId: t
      });
      return;
    }
    Object.entries(s).forEach(([o, i]) => {
      Pe(i, Xe(r, o), t, n);
    });
  });
}, Xe = (e, r) => {
  let t = e;
  return r.split(Oe).forEach((n) => {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}, $t = (e) => e.isThemeGetter, Dt = (e, r) => r ? e.map(([t, n]) => {
  const s = n.map((o) => typeof o == "string" ? r + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, l]) => [r + i, l])) : o);
  return [t, s];
}) : e, Ht = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (o, i) => {
    t.set(o, i), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = t.get(o);
      if (i !== void 0)
        return i;
      if ((i = n.get(o)) !== void 0)
        return s(o, i), i;
    },
    set(o, i) {
      t.has(o) ? t.set(o, i) : s(o, i);
    }
  };
}, ct = "!", Wt = (e) => {
  const {
    separator: r,
    experimentalParseClassName: t
  } = e, n = r.length === 1, s = r[0], o = r.length, i = (l) => {
    const d = [];
    let u = 0, m = 0, c;
    for (let x = 0; x < l.length; x++) {
      let y = l[x];
      if (u === 0) {
        if (y === s && (n || l.slice(x, x + o) === r)) {
          d.push(l.slice(m, x)), m = x + o;
          continue;
        }
        if (y === "/") {
          c = x;
          continue;
        }
      }
      y === "[" ? u++ : y === "]" && u--;
    }
    const b = d.length === 0 ? l : l.substring(m), f = b.startsWith(ct), h = f ? b.substring(1) : b, p = c && c > m ? c - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: p
    };
  };
  return t ? (l) => t({
    className: l,
    parseClassName: i
  }) : i;
}, Gt = (e) => {
  if (e.length <= 1)
    return e;
  const r = [];
  let t = [];
  return e.forEach((n) => {
    n[0] === "[" ? (r.push(...t.sort(), n), t = []) : t.push(n);
  }), r.push(...t.sort()), r;
}, Ut = (e) => ({
  cache: Ht(e.cacheSize),
  parseClassName: Wt(e),
  ..._t(e)
}), Yt = /\s+/, qt = (e, r) => {
  const {
    parseClassName: t,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = r, o = [], i = e.trim().split(Yt);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      modifiers: m,
      hasImportantModifier: c,
      baseClassName: b,
      maybePostfixModifierPosition: f
    } = t(u);
    let h = !!f, p = n(h ? b.substring(0, f) : b);
    if (!p) {
      if (!h) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (p = n(b), !p) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      h = !1;
    }
    const x = Gt(m).join(":"), y = c ? x + ct : x, R = y + p;
    if (o.includes(R))
      continue;
    o.push(R);
    const k = s(p, h);
    for (let E = 0; E < k.length; ++E) {
      const T = k[E];
      o.push(y + T);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Kt() {
  let e = 0, r, t, n = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = ut(r)) && (n && (n += " "), n += t);
  return n;
}
const ut = (e) => {
  if (typeof e == "string")
    return e;
  let r, t = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (r = ut(e[n])) && (t && (t += " "), t += r);
  return t;
};
function Xt(e, ...r) {
  let t, n, s, o = i;
  function i(d) {
    const u = r.reduce((m, c) => c(m), e());
    return t = Ut(u), n = t.cache.get, s = t.cache.set, o = l, l(d);
  }
  function l(d) {
    const u = n(d);
    if (u)
      return u;
    const m = qt(d, t);
    return s(d, m), m;
  }
  return function() {
    return o(Kt.apply(null, arguments));
  };
}
const D = (e) => {
  const r = (t) => t[e] || [];
  return r.isThemeGetter = !0, r;
}, ft = /^\[(?:([a-z-]+):)?(.+)\]$/i, Jt = /^\d+\/\d+$/, Zt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Qt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, er = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, tr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, rr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ar = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, te = (e) => de(e) || Zt.has(e) || Jt.test(e), ae = (e) => ce(e, "length", ur), de = (e) => !!e && !Number.isNaN(Number(e)), Ve = (e) => ce(e, "number", de), pe = (e) => !!e && Number.isInteger(Number(e)), nr = (e) => e.endsWith("%") && de(e.slice(0, -1)), L = (e) => ft.test(e), ne = (e) => Qt.test(e), sr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), or = (e) => ce(e, sr, mt), lr = (e) => ce(e, "position", mt), ir = /* @__PURE__ */ new Set(["image", "url"]), dr = (e) => ce(e, ir, mr), cr = (e) => ce(e, "", fr), be = () => !0, ce = (e, r, t) => {
  const n = ft.exec(e);
  return n ? n[1] ? typeof r == "string" ? n[1] === r : r.has(n[1]) : t(n[2]) : !1;
}, ur = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  er.test(e) && !tr.test(e)
), mt = () => !1, fr = (e) => rr.test(e), mr = (e) => ar.test(e), pr = () => {
  const e = D("colors"), r = D("spacing"), t = D("blur"), n = D("brightness"), s = D("borderColor"), o = D("borderRadius"), i = D("borderSpacing"), l = D("borderWidth"), d = D("contrast"), u = D("grayscale"), m = D("hueRotate"), c = D("invert"), b = D("gap"), f = D("gradientColorStops"), h = D("gradientColorStopPositions"), p = D("inset"), x = D("margin"), y = D("opacity"), R = D("padding"), k = D("saturate"), E = D("scale"), T = D("sepia"), C = D("skew"), j = D("space"), O = D("translate"), M = () => ["auto", "contain", "none"], S = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", L, r], I = () => [L, r], z = () => ["", te, ae], F = () => ["auto", de, L], A = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], V = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", L], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], v = () => [de, L];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [be],
      spacing: [te, ae],
      blur: ["none", "", ne, L],
      brightness: v(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ne, L],
      borderSpacing: I(),
      borderWidth: z(),
      contrast: v(),
      grayscale: X(),
      hueRotate: v(),
      invert: X(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [nr, ae],
      inset: P(),
      margin: P(),
      opacity: v(),
      padding: I(),
      saturate: v(),
      scale: v(),
      sepia: X(),
      skew: v(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", L]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ne]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...A(), L]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", pe, L]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", L]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pe, L]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [be]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pe, L]
        }, L]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [be]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pe, L]
        }, L]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", L]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", L]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [j]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [j]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", L, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [L, r, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [L, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [ne]
        }, ne]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [L, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [L, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [L, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [L, r, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ne, ae]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ve]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [be]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", L]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", de, Ve]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", te, L]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", L]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", L]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [y]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...V(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", te, ae]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", te, L]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", L]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", L]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [y]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...A(), lr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", or]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [y]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...V(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [y]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: V()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [s]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...V()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [te, L]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [te, ae]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: z()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [y]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [te, ae]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ne, cr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [be]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...$(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ne, L]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", L]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: v()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", L]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: v()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", L]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pe, L]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [O]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [O]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", L]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", L]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", L]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [te, ae, Ve]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, br = /* @__PURE__ */ Xt(pr);
function g(...e) {
  return br(it(e));
}
const xr = ({ ref: e, handler: r, enabled: t = !0 }) => {
  Z(() => {
    if (!t)
      return;
    const n = (s) => {
      const o = e.current;
      !o || o.contains(s.target) || r(s);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, r, t]);
}, hr = (e) => {
  const {
    disabled: r = !1,
    readOnly: t = !1,
    required: n = !1,
    inputRef: s,
    value: o,
    defaultValue: i,
    onChange: l,
    ...d
  } = e, [u, m] = H.useState(i ?? o ?? "");
  H.useEffect(() => {
    o !== void 0 && m(o);
  }, [o]);
  const c = H.useCallback((f) => {
    if (r || t) {
      f.preventDefault();
      return;
    }
    m(f.target.value), l == null || l(f);
  }, [r, t, l]);
  return {
    inputProps: {
      ...d,
      onChange: c,
      disabled: r,
      readOnly: t,
      required: n,
      value: u,
      "aria-disabled": r,
      "aria-readonly": t,
      "aria-required": n
    },
    inputRef: s,
    disabled: r,
    readOnly: t,
    required: n
  };
}, gr = N(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600"
      },
      size: {
        sm: "text-xs h-8 px-3",
        md: "text-sm h-10 px-4",
        lg: "text-base h-12 px-4"
      },
      error: {
        true: "border-error-500 focus:border-error-500 focus:ring-error-500/50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: !1
    }
  }
), he = w.forwardRef(
  ({
    className: e,
    label: r,
    error: t,
    helperText: n,
    variant: s,
    size: o,
    id: i,
    icon: l,
    iconPosition: d = "left",
    "aria-label": u,
    "aria-describedby": m,
    disabled: c,
    readOnly: b,
    required: f,
    value: h,
    defaultValue: p,
    onChange: x,
    ...y
  }, R) => {
    const k = J(), E = i || k, T = t ? `${E}-error` : void 0, C = n ? `${E}-helper` : void 0, j = [T, C, m].filter(Boolean).join(" ") || void 0, { inputProps: O, inputRef: M } = hr({
      inputRef: R,
      disabled: c,
      readOnly: b,
      required: f,
      value: h,
      defaultValue: p,
      onChange: x,
      id: E,
      "aria-label": u || r,
      "aria-invalid": t ? "true" : void 0,
      "aria-describedby": j,
      ...y
    });
    return /* @__PURE__ */ a.jsxs("div", { className: g("flex flex-col group w-full", e), children: [
      r && /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: E,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-800 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            r,
            f && /* @__PURE__ */ a.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        l && d === "left" && /* @__PURE__ */ a.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-800", children: /* @__PURE__ */ a.jsx(l, { className: "text-lg" }) }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            ref: M || R,
            className: g(
              gr({ variant: s, size: o, error: !!t }),
              l && d === "left" && "pl-10",
              l && d === "right" && "pr-10",
              c && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !t && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            ...O
          }
        ),
        l && d === "right" && /* @__PURE__ */ a.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-800", children: /* @__PURE__ */ a.jsx(l, { className: "text-lg" }) })
      ] }),
      t && /* @__PURE__ */ a.jsxs("span", { id: T, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        t
      ] }),
      n && !t && /* @__PURE__ */ a.jsx("span", { id: C, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: n })
    ] });
  }
);
he.displayName = "TextField";
var pt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Je = w.createContext && /* @__PURE__ */ w.createContext(pt), vr = ["attr", "size", "title"];
function yr(e, r) {
  if (e == null) return {};
  var t = wr(e, r), n, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (s = 0; s < o.length; s++)
      n = o[s], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function wr(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0) continue;
      t[n] = e[n];
    }
  return t;
}
function ke() {
  return ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, ke.apply(this, arguments);
}
function Ze(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function je(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ze(Object(t), !0).forEach(function(n) {
      kr(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ze(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function kr(e, r, t) {
  return r = jr(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function jr(e) {
  var r = Nr(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Nr(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function bt(e) {
  return e && e.map((r, t) => /* @__PURE__ */ w.createElement(r.tag, je({
    key: t
  }, r.attr), bt(r.child)));
}
function q(e) {
  return (r) => /* @__PURE__ */ w.createElement(Rr, ke({
    attr: je({}, e.attr)
  }, r), bt(e.child));
}
function Rr(e) {
  var r = (t) => {
    var {
      attr: n,
      size: s,
      title: o
    } = e, i = yr(e, vr), l = s || t.size || "1em", d;
    return t.className && (d = t.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ w.createElement("svg", ke({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, i, {
      className: d,
      style: je(je({
        color: e.color || t.color
      }, t.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ w.createElement("title", null, o), e.children);
  };
  return Je !== void 0 ? /* @__PURE__ */ w.createElement(Je.Consumer, null, (t) => r(t)) : r(pt);
}
function xt(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function Er(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function _e(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(e);
}
function ze(e) {
  return q({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(e);
}
function xe(e) {
  return q({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function Vr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function zr(e) {
  return q({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function Cr(e) {
  return q({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(e);
}
function ht(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function Tr(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function Ce(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" }, child: [] }] })(e);
}
function Mr(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function Sr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(e);
}
function Te(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" }, child: [] }] })(e);
}
function Ne(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function ge(e) {
  return q({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function Ir(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" }, child: [] }] })(e);
}
const Pr = N(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Qe = N(
  "absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-soft-lg max-h-60 overflow-auto"
), Ar = N(
  "px-4 py-2 cursor-pointer transition-colors",
  {
    variants: {
      selected: {
        true: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400",
        false: "hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
      },
      highlighted: {
        true: "bg-neutral-100 dark:bg-neutral-700",
        false: ""
      }
    },
    defaultVariants: {
      selected: !1,
      highlighted: !1
    }
  }
), Lr = (e, r) => e.label.toLowerCase().includes(r.toLowerCase()), Or = w.forwardRef(
  ({
    className: e,
    options: r,
    value: t,
    defaultValue: n = "",
    onChange: s,
    onSelect: o,
    filterFn: i = Lr,
    size: l,
    placeholder: d = "Type to search...",
    clearable: u = !0,
    label: m,
    error: c,
    helperText: b,
    disabled: f,
    ...h
  }, p) => {
    const [x, y] = W(n), [R, k] = W(!1), [E, T] = W(-1), C = t !== void 0, j = C ? t : x, O = ee(null), M = ee(null), S = J(), P = j ? r.filter((V) => i(V, j)) : r, I = B((V) => {
      const $ = V.target.value;
      C || y($), s == null || s($), k(!0), T(-1);
    }, [C, s]), z = B((V) => {
      if (V.disabled) return;
      const $ = V.value;
      C || y($), s == null || s($), o == null || o(V), k(!1), T(-1);
    }, [C, s, o]), F = B(() => {
      C || y(""), s == null || s(""), k(!1), T(-1);
    }, [C, s]), A = B((V) => {
      if (!R || P.length === 0) {
        (V.key === "ArrowDown" || V.key === "ArrowUp") && (V.preventDefault(), k(!0));
        return;
      }
      switch (V.key) {
        case "ArrowDown":
          V.preventDefault(), T(
            ($) => $ < P.length - 1 ? $ + 1 : $
          );
          break;
        case "ArrowUp":
          V.preventDefault(), T(($) => $ > 0 ? $ - 1 : -1);
          break;
        case "Enter":
          V.preventDefault(), E >= 0 && E < P.length && z(P[E]);
          break;
        case "Escape":
          V.preventDefault(), k(!1), T(-1);
          break;
      }
    }, [R, P, E, z]);
    return xr({
      ref: O,
      handler: () => k(!1),
      enabled: R
    }), /* @__PURE__ */ a.jsxs("div", { ref: O, className: g(Pr({ size: l }), e), children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsx(
          he,
          {
            ref: p,
            id: S,
            value: j,
            onChange: I,
            onFocus: () => k(!0),
            onKeyDown: A,
            placeholder: d,
            label: m,
            error: c,
            helperText: b,
            disabled: f,
            icon: _e,
            iconPosition: "right",
            ...h
          }
        ),
        u && j && !f && /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            onClick: F,
            className: "absolute right-10 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
            "aria-label": "Clear",
            children: /* @__PURE__ */ a.jsx(ge, { className: "text-sm" })
          }
        )
      ] }),
      R && P.length > 0 && /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: M,
          className: Qe(),
          role: "listbox",
          "aria-labelledby": S,
          children: P.map((V, $) => /* @__PURE__ */ a.jsx(
            "div",
            {
              role: "option",
              "aria-selected": V.value === j,
              className: g(
                Ar({
                  selected: V.value === j,
                  highlighted: $ === E
                }),
                V.disabled && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => !V.disabled && z(V),
              onMouseEnter: () => T($),
              children: V.label
            },
            V.value
          ))
        }
      ),
      R && P.length === 0 && j && /* @__PURE__ */ a.jsx("div", { className: g(Qe(), "p-4 text-center text-neutral-500 dark:text-neutral-400"), children: "No options found" })
    ] });
  }
);
Or.displayName = "Autocomplete";
const _r = N(
  "inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium overflow-hidden",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg"
      },
      variant: {
        circle: "rounded-none",
        square: "rounded-none",
        rounded: "rounded-none"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "circle"
    }
  }
), Fr = w.forwardRef(
  ({ className: e, size: r, variant: t, src: n, alt: s, fallback: o, ...i }, l) => {
    const [d, u] = W(!1), m = () => {
      u(!0);
    }, c = () => {
      if (typeof o == "string")
        return o.slice(0, 2).toUpperCase();
      if (s) {
        const p = s.trim().split(/\s+/);
        if (p.length >= 2)
          return (p[0][0] + p[p.length - 1][0]).toUpperCase();
        if (p.length === 1 && p[0].length > 0)
          return p[0][0].toUpperCase();
      }
      return "?";
    }, b = n && !d, f = !b && !o, h = !b && o;
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: l,
        className: g(_r({ size: r, variant: t }), e),
        role: "img",
        "aria-label": s || "Avatar",
        ...i,
        children: [
          b && /* @__PURE__ */ a.jsx(
            "img",
            {
              src: n,
              alt: s,
              onError: m,
              className: "w-full h-full object-cover"
            }
          ),
          f && /* @__PURE__ */ a.jsx("div", { className: "flex w-full h-full items-center justify-center uppercase select-none", children: c() }),
          h && /* @__PURE__ */ a.jsx("div", { className: "flex w-full h-full items-center justify-center", children: typeof o == "string" ? /* @__PURE__ */ a.jsx("span", { children: o }) : o })
        ]
      }
    );
  }
);
Fr.displayName = "Avatar";
const Br = N(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 border",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary-500 text-white shadow hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        destructive: "border-transparent bg-error-500 text-white shadow hover:bg-error-600 dark:bg-error-500 dark:hover:bg-error-400",
        outline: "text-neutral-900 border-neutral-200 dark:text-neutral-50 dark:border-neutral-800",
        success: "border-transparent bg-success-500 text-white shadow hover:bg-success-600 dark:bg-success-500 dark:hover:bg-success-400",
        warning: "border-transparent bg-warning-500 text-white shadow hover:bg-warning-600 dark:bg-warning-500 dark:hover:bg-warning-400"
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), $r = w.forwardRef(
  ({ className: e, variant: r, size: t, ...n }, s) => /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: s,
      className: g(Br({ variant: r, size: t }), e),
      ...n
    }
  )
);
$r.displayName = "Badge";
const Dr = (e) => {
  const { disabled: r = !1, loading: t = !1, buttonRef: n, onClick: s, ...o } = e, i = H.useCallback((d) => {
    if (r || t) {
      d.preventDefault();
      return;
    }
    s == null || s(d);
  }, [r, t, s]);
  return {
    buttonProps: {
      ...o,
      onClick: i,
      disabled: r || t,
      "aria-disabled": r || t
    },
    buttonRef: n,
    disabled: r || t,
    loading: t
  };
}, Hr = N(
  "inline-flex items-center justify-center gap-2 font-medium transform transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark disabled:cursor-not-allowed disabled:opacity-50 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary-800 text-white hover:shadow-md dark:bg-primary-800 shadow-soft-sm border border-transparent",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border border-transparent hover:shadow-sm hover:-translate-y-0.5",
        outline: "bg-transparent text-primary-800 border border-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 hover:shadow-sm hover:-translate-y-0.5 hover:ring-1 hover:ring-primary-500/20",
        ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-transparent hover:shadow-sm hover:-translate-y-0.5",
        link: "bg-transparent text-primary-800 hover:underline underline-offset-4 p-0 h-auto border-none dark:text-primary-400 hover:ring-1 hover:ring-primary-500/10",
        danger: "bg-error-500 text-white hover:bg-error-600 dark:bg-error-500 dark:hover:bg-error-400 shadow-soft-sm border border-transparent hover:shadow-sm hover:-translate-y-0.5"
      },
      size: {
        small: "text-xs h-8 px-3",
        medium: "text-sm h-10 px-4",
        large: "text-base h-12 px-6",
        icon: "h-10 w-10 p-0"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      },
      rounded: {
        default: "rounded-none",
        full: "rounded-none",
        none: "rounded-none",
        sm: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      fullWidth: !1,
      rounded: "none"
    }
  }
), gt = w.forwardRef(
  ({ className: e, variant: r, size: t, fullWidth: n, rounded: s, icon: o, iconPosition: i = "left", children: l, disabled: d, loading: u, onClick: m, ...c }, b) => {
    const { buttonProps: f, buttonRef: h, loading: p } = Dr({
      buttonRef: b,
      disabled: d,
      loading: u,
      onClick: m,
      ...c
    }), x = !l && !!o;
    return /* @__PURE__ */ a.jsxs(
      "button",
      {
        ref: h || b,
        className: g(Hr({ variant: r, size: x ? "icon" : t, fullWidth: n, rounded: s }), e),
        ...f,
        children: [
          p && /* @__PURE__ */ a.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ a.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ a.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          !p && o && i === "left" && /* @__PURE__ */ a.jsx(o, { className: "text-lg" }),
          l,
          !p && o && i === "right" && /* @__PURE__ */ a.jsx(o, { className: "text-lg" })
        ]
      }
    );
  }
);
gt.displayName = "Button";
const Wr = N(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-800 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transform transition-all appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Gr = w.forwardRef(
  ({
    className: e,
    label: r,
    indeterminate: t,
    size: n,
    id: s,
    checked: o,
    disabled: i,
    error: l,
    helperText: d,
    "aria-label": u,
    "aria-describedby": m,
    onChange: c,
    ...b
  }, f) => {
    const h = J(), p = s || h, x = ee(null), y = f || x;
    Z(() => {
      y.current && (y.current.indeterminate = t || !1);
    }, [t, y]);
    const R = l ? `${p}-error` : void 0, k = d ? `${p}-helper` : void 0, E = [m, R, k].filter(Boolean).join(" ") || void 0, T = (C) => {
      i || c == null || c(C);
    };
    return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: y,
              type: "checkbox",
              id: p,
              checked: o,
              disabled: i,
              onChange: T,
              "aria-label": u || r,
              "aria-checked": t ? "mixed" : o,
              "aria-describedby": E,
              className: g(
                Wr({ size: n }),
                o && "bg-primary-800 border-primary-800 dark:bg-primary-800 dark:border-primary-800 hover:shadow-md",
                !o && !t && "hover:border-primary-800 dark:hover:border-primary-400 hover:shadow-md",
                t && "bg-primary-800 border-primary-800 dark:bg-primary-800 dark:border-primary-800 hover:shadow-md",
                i && "disabled:cursor-not-allowed disabled:opacity-50 disabled:checked:bg-neutral-400 disabled:border-neutral-300",
                e
              ),
              ...b
            }
          ),
          o && !t && /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ a.jsx("path", { d: "M11.6666 3.5L5.24992 9.91667L2.33325 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          ),
          t && /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ a.jsx("path", { d: "M2.33325 7H11.6666", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
            }
          )
        ] }),
        r && /* @__PURE__ */ a.jsx(
          "label",
          {
            htmlFor: p,
            className: g(
              "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
              i && "cursor-not-allowed opacity-60"
            ),
            children: r
          }
        )
      ] }),
      l && /* @__PURE__ */ a.jsx("span", { id: R, role: "alert", className: "text-xs font-medium text-error-500", children: l }),
      !l && d && /* @__PURE__ */ a.jsx("span", { id: k, className: "text-xs text-neutral-500 dark:text-neutral-400", children: d })
    ] });
  }
);
Gr.displayName = "Checkbox";
const Ur = N(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), et = N(
  "flex items-center justify-center w-8 h-8 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
), Yr = w.forwardRef(
  ({
    className: e,
    value: r,
    defaultValue: t = 0,
    min: n,
    max: s,
    step: o = 1,
    precision: i,
    size: l,
    label: d,
    error: u,
    helperText: m,
    onChange: c,
    showControls: b = !0,
    disabled: f,
    id: h,
    ...p
  }, x) => {
    const [y, R] = W(t), k = r !== void 0, E = k ? r : y, T = J(), C = h || T, j = B((A) => i !== void 0 ? A.toFixed(i) : A.toString(), [i]), O = B((A) => {
      const V = parseFloat(A);
      return isNaN(V) ? 0 : V;
    }, []), M = B((A) => {
      let V = A;
      return n !== void 0 && (V = Math.max(V, n)), s !== void 0 && (V = Math.min(V, s)), V;
    }, [n, s]), S = B((A) => {
      const V = O(A.target.value), $ = M(V);
      k || R($), c == null || c($);
    }, [k, c, O, M]), P = B(() => {
      if (f) return;
      const A = M(E + o);
      k || R(A), c == null || c(A);
    }, [f, E, o, k, c, M]), I = B(() => {
      if (f) return;
      const A = M(E - o);
      k || R(A), c == null || c(A);
    }, [f, E, o, k, c, M]), z = n !== void 0 && E <= n, F = s !== void 0 && E >= s;
    return /* @__PURE__ */ a.jsx("div", { className: g(Ur({ size: l }), e), children: /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
      b && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: I,
          disabled: f || z,
          className: g(
            et(),
            "absolute left-1 top-1/2 -translate-y-1/2 z-10"
          ),
          "aria-label": "Decrease",
          children: /* @__PURE__ */ a.jsx(Tr, { className: "text-xs" })
        }
      ),
      /* @__PURE__ */ a.jsx(
        he,
        {
          ref: x,
          id: C,
          type: "number",
          value: j(E),
          onChange: S,
          min: n,
          max: s,
          step: o,
          label: d,
          error: u,
          helperText: m,
          disabled: f,
          className: g(b && "pl-10 pr-10"),
          ...p
        }
      ),
      b && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: P,
          disabled: f || F,
          className: g(
            et(),
            "absolute right-1 top-1/2 -translate-y-1/2 z-10"
          ),
          "aria-label": "Increase",
          children: /* @__PURE__ */ a.jsx(Mr, { className: "text-xs" })
        }
      )
    ] }) });
  }
);
Yr.displayName = "NumberInput";
const qr = N(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-800 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transform transition-all appearance-none cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Kr = w.forwardRef(
  ({
    className: e,
    label: r,
    size: t,
    id: n,
    checked: s,
    disabled: o,
    error: i,
    helperText: l,
    "aria-label": d,
    "aria-describedby": u,
    onChange: m,
    ...c
  }, b) => {
    const f = J(), h = n || f, p = i ? `${h}-error` : void 0, x = l ? `${h}-helper` : void 0, y = [u, p, x].filter(Boolean).join(" ") || void 0, R = (k) => {
      o || m == null || m(k);
    };
    return /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "relative flex items-center", children: [
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: b,
              type: "radio",
              id: h,
              checked: s,
              disabled: o,
              onChange: R,
              "aria-label": d || r,
              "aria-checked": s,
              "aria-describedby": y,
              className: g(
                qr({ size: t }),
                s && "border-primary-800 dark:border-primary-800 hover:shadow-md",
                !s && "hover:border-primary-800 dark:hover:border-primary-400 hover:shadow-md",
                o && "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-300",
                e
              ),
              ...c
            }
          ),
          s && /* @__PURE__ */ a.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-primary-800 opacity-100" })
        ] }),
        r && /* @__PURE__ */ a.jsx(
          "label",
          {
            htmlFor: h,
            className: g(
              "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
              o && "cursor-not-allowed opacity-60"
            ),
            children: r
          }
        )
      ] }),
      i && /* @__PURE__ */ a.jsx("span", { id: p, role: "alert", className: "text-xs font-medium text-error-500", children: i }),
      !i && l && /* @__PURE__ */ a.jsx("span", { id: x, className: "text-xs text-neutral-500 dark:text-neutral-400", children: l })
    ] });
  }
);
Kr.displayName = "Radio";
const Xr = N(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600"
      },
      size: {
        sm: "text-xs h-8 px-3 pr-8",
        md: "text-sm h-10 px-4 pr-10",
        lg: "text-base h-12 px-4 pr-10"
      },
      error: {
        true: "border-error-500 focus:border-error-500 focus:ring-error-500/50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: !1
    }
  }
), Jr = w.forwardRef(
  ({
    className: e,
    label: r,
    options: t,
    error: n,
    helperText: s,
    variant: o,
    size: i,
    placeholder: l,
    id: d,
    disabled: u,
    "aria-label": m,
    "aria-describedby": c,
    ...b
  }, f) => {
    const h = J(), p = d || h, x = n ? `${p}-error` : void 0, y = s ? `${p}-helper` : void 0, R = [x, y, c].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a.jsxs("div", { className: g("flex flex-col w-full", e), children: [
      r && /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: [
            r,
            b.required && /* @__PURE__ */ a.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ a.jsxs(
          "select",
          {
            ref: f,
            id: p,
            className: g(
              Xr({ variant: o, size: i, error: !!n }),
              u && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !n && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            disabled: u,
            "aria-label": m || r,
            "aria-invalid": n ? "true" : void 0,
            "aria-describedby": R,
            defaultValue: l ? "" : void 0,
            ...b,
            children: [
              l && /* @__PURE__ */ a.jsx("option", { value: "", disabled: !0, children: l }),
              t.map((k) => /* @__PURE__ */ a.jsx("option", { value: k.value, disabled: k.disabled, children: k.label }, k.value))
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500 dark:text-neutral-400", children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ a.jsx("path", { d: "M6 9L1 4h10z" }) }) })
      ] }),
      n && /* @__PURE__ */ a.jsx("span", { id: x, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 block", children: n }),
      s && !n && /* @__PURE__ */ a.jsx("span", { id: y, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: s })
    ] });
  }
);
Jr.displayName = "Dropdown";
const Zr = N(
  "relative flex items-center w-full touch-action-none select-none cursor-pointer group",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-6",
        lg: "h-8"
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      disabled: !1
    }
  }
), Qr = N(
  "relative w-full bg-neutral-200 dark:bg-neutral-700 transition-colors group-hover:bg-neutral-300 dark:group-hover:bg-neutral-600",
  {
    variants: {
      size: {
        sm: "h-1.5",
        md: "h-2",
        lg: "h-2.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), ea = N(
  "absolute h-full bg-primary-500 transition-all duration-150 group-hover:bg-primary-600"
), ta = N(
  "absolute top-1/2 -translate-y-1/2 bg-white shadow-md border-2 border-primary-500 dark:bg-white transition-all duration-150 ease-in-out cursor-grab active:cursor-grabbing hover:scale-110 hover:shadow-lg",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6"
      },
      focused: {
        true: "scale-125 ring-4 ring-primary-500/20 shadow-lg",
        false: ""
      },
      active: {
        true: "scale-125 ring-4 ring-primary-500/20 shadow-lg",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      focused: !1,
      active: !1
    }
  }
), ra = w.forwardRef(
  ({ className: e, value: r, defaultValue: t = 0, min: n = 0, max: s = 100, step: o = 1, onChange: i, disabled: l = !1, size: d, ...u }, m) => {
    const [c, b] = W(t), f = typeof r == "number", h = f ? r : c, p = ee(null), [x, y] = W(!1), [R, k] = W(!1), T = B((z) => (z - n) / (s - n) * 100, [n, s])(h), C = B(
      (z) => {
        const F = Math.max(n, Math.min(s, z)), A = Math.round(F / o) * o;
        f || b(A), i == null || i(A);
      },
      [n, s, o, f, i]
    ), j = B((z) => {
      if (!p.current) return h;
      const { left: F, width: A } = p.current.getBoundingClientRect(), V = Math.max(0, Math.min(1, (z - F) / A));
      return n + V * (s - n);
    }, [n, s, h]), O = B((z) => {
      if (l) return;
      const F = j(z);
      C(F);
    }, [l, j, C]), M = B((z) => {
      l || z.target.closest("[data-slider-thumb]") || (z.preventDefault(), z.stopPropagation(), O(z.clientX));
    }, [l, O]), S = B((z) => {
      if (l || z.target.closest("[data-slider-thumb]"))
        return;
      z.preventDefault(), z.stopPropagation();
      const F = z.touches[0];
      F && O(F.clientX);
    }, [l, O]), P = B((z) => {
      if (l) return;
      z.preventDefault(), z.stopPropagation(), k(!0);
      const F = "touches" in z, A = (K) => {
        var X;
        return "touches" in K ? (X = K.touches[0]) == null ? void 0 : X.clientX : K.clientX;
      }, V = (K) => {
        if (!p.current) return;
        const X = A(K);
        if (X !== void 0) {
          const se = j(X);
          C(se);
        }
      }, $ = () => {
        k(!1), document.removeEventListener(F ? "touchmove" : "mousemove", V), document.removeEventListener(F ? "touchend" : "mouseup", $);
      };
      document.addEventListener(F ? "touchmove" : "mousemove", V), document.addEventListener(F ? "touchend" : "mouseup", $);
    }, [l, j, C]), I = B(
      (z) => {
        if (l) return;
        let F = h;
        z.key === "ArrowRight" || z.key === "ArrowUp" ? F = h + o : (z.key === "ArrowLeft" || z.key === "ArrowDown") && (F = h - o), F !== h && (z.preventDefault(), C(F));
      },
      [l, h, o, C]
    );
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: p,
        className: g(Zr({ disabled: l, size: d }), e),
        tabIndex: l ? -1 : 0,
        role: "slider",
        "aria-valuenow": h,
        "aria-valuemin": n,
        "aria-valuemax": s,
        "aria-label": u["aria-label"] || "Slider",
        "aria-disabled": l || void 0,
        onFocus: () => y(!0),
        onBlur: () => y(!1),
        onKeyDown: I,
        children: [
          /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Qr({ size: d }),
              onClick: M,
              onTouchStart: S,
              children: [
                /* @__PURE__ */ a.jsx("div", { className: ea(), style: { width: `${T}%` } }),
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    "data-slider-thumb": !0,
                    className: g(ta({ size: d, focused: x, active: R })),
                    style: { left: `${T}%`, transform: "translate(-50%, -50%)" },
                    onMouseDown: P,
                    onTouchStart: P
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              ref: m,
              type: "range",
              min: n,
              max: s,
              step: o,
              value: h,
              onChange: (z) => C(Number(z.target.value)),
              disabled: l || void 0,
              className: "sr-only",
              "aria-valuemin": n,
              "aria-valuemax": s,
              "aria-valuenow": h,
              "aria-label": u["aria-label"] || "Slider"
            }
          )
        ]
      }
    );
  }
);
ra.displayName = "Slider";
const aa = N(
  "relative inline-block transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 cursor-pointer border-2",
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-7 w-12",
        lg: "h-9 w-16"
      },
      checked: {
        true: "bg-primary-500 border-primary-500 hover:bg-primary-600 hover:border-primary-600",
        false: "bg-neutral-200 border-neutral-300 dark:bg-neutral-700 dark:border-neutral-600 hover:bg-neutral-300 dark:hover:bg-neutral-600"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      checked: !1,
      disabled: !1
    }
  }
), na = N(
  "pointer-events-none inline-block bg-white shadow-lg transition-all duration-300 ease-in-out",
  {
    variants: {
      size: {
        sm: "h-3.5 w-3.5",
        md: "h-5 w-5",
        lg: "h-7 w-7"
      },
      checked: {
        true: "",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      checked: !1
    }
  }
), sa = w.forwardRef(
  ({ className: e, checked: r, disabled: t, onChange: n, label: s, labelPosition: o = "right", size: i, id: l, ...d }, u) => {
    const m = J(), c = l || m, b = (x) => {
      t || n == null || n(x);
    }, f = r ?? !1, h = t ?? !1, p = i === "sm" ? "translate-x-5" : i === "lg" ? "translate-x-[34px]" : "translate-x-[26px]";
    return /* @__PURE__ */ a.jsxs("label", { htmlFor: c, className: g("flex items-center gap-3", h && "cursor-not-allowed"), children: [
      s && o === "left" && /* @__PURE__ */ a.jsx("span", { className: g("text-sm font-medium text-neutral-700 dark:text-neutral-300", h && "opacity-60"), children: s }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          type: "checkbox",
          id: c,
          ref: u,
          checked: f,
          disabled: h,
          onChange: b,
          className: "sr-only",
          role: "switch",
          "aria-checked": f,
          "aria-label": s,
          ...d
        }
      ),
      /* @__PURE__ */ a.jsx("div", { className: g(aa({ checked: f, disabled: h, size: i }), e), children: /* @__PURE__ */ a.jsx(
        "span",
        {
          className: g(
            na({ size: i }),
            f ? p : "translate-x-0.5",
            "absolute left-0.5 top-1/2 -translate-y-1/2"
          )
        }
      ) }),
      s && o === "right" && /* @__PURE__ */ a.jsx("span", { className: g("text-sm font-medium text-neutral-700 dark:text-neutral-300", h && "opacity-60"), children: s })
    ] });
  }
);
sa.displayName = "Switch";
const re = {
  purple: {
    name: "purple",
    primary: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#7c3aed",
      600: "#6d28d9",
      700: "#5b21b6",
      800: "#4c1d95",
      900: "#3b0764",
      950: "#2c0335"
    },
    foreground: "#ffffff"
  },
  orange: {
    name: "orange",
    primary: {
      50: "#fff7ed",
      100: "#fff1e6",
      200: "#ffe7cc",
      300: "#ffd59a",
      400: "#ffb86b",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d0a",
      950: "#4b1c06"
    },
    foreground: "#ffffff"
  },
  green: {
    name: "green",
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    foreground: "#ffffff"
  },
  blue: {
    name: "blue",
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    foreground: "#ffffff"
  },
  custom: {
    name: "custom",
    primary: {
      500: "#74b9ff"
    },
    foreground: "#ffffff"
  }
};
function tt(e) {
  if (!e) return null;
  const r = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (r)
    return [Number(r[1]), Number(r[2]), Number(r[3])];
  const t = e.match(/^#([0-9a-f]{3,6})$/i);
  if (t) {
    let n = t[1];
    n.length === 3 && (n = n.split("").map((d) => d + d).join(""));
    const s = parseInt(n, 16), o = s >> 16 & 255, i = s >> 8 & 255, l = s & 255;
    return [o, i, l];
  }
  return null;
}
function Me(e) {
  const r = e / 255;
  return r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
}
function rt(e) {
  const [r, t, n] = e;
  return 0.2126 * Me(r) + 0.7152 * Me(t) + 0.0722 * Me(n);
}
function Q(e, r) {
  const t = tt(e), n = tt(r);
  if (!t || !n) return 1;
  const s = rt(t), o = rt(n), i = Math.max(s, o), l = Math.min(s, o);
  return (i + 0.05) / (l + 0.05);
}
const at = "theme_mode", ye = "theme_color", Se = "theme_custom_palette", vt = Ae(void 0), oe = (e, r) => {
  if (typeof document > "u") return;
  const t = document.documentElement, n = e.primary;
  Object.entries(n).forEach(([m, c]) => {
    c && t.style.setProperty(`--theme-primary-${m}`, c);
  }), r === "light" ? (t.style.setProperty("--theme-background-default", "var(--theme-background-default, #f8fafc)"), t.style.setProperty("--theme-text-primary", "#0f172a")) : (t.style.setProperty("--theme-background-default", "var(--theme-background-dark, #0f172a)"), t.style.setProperty("--theme-text-primary", "#f8fafc")), t.style.setProperty("--theme-foreground", e.foreground || "#ffffff");
  const s = (m) => {
    const c = (m || "").trim();
    return c.startsWith("rgb") || !c.startsWith("#") ? c : c.length === 4 ? "#" + c[1] + c[1] + c[2] + c[2] + c[3] + c[3] : c;
  }, o = (m, c) => {
    try {
      const b = s(m);
      if (b.startsWith("rgb")) return b;
      const f = parseInt(b.slice(1), 16);
      let h = f >> 16 & 255, p = f >> 8 & 255, x = f & 255;
      return h = Math.max(0, Math.floor(h * (1 - c))), p = Math.max(0, Math.floor(p * (1 - c))), x = Math.max(0, Math.floor(x * (1 - c))), "#" + ((1 << 24) + (h << 16) + (p << 8) + x).toString(16).slice(1);
    } catch {
      return m;
    }
  }, i = "#ffffff", l = "#0f172a", d = n[500] || getComputedStyle(t).getPropertyValue("--theme-primary-500") || "";
  let u = s(d) || "";
  if (u) {
    let m = Q(i, u), c = Q(l, u), b = 0;
    for (; (m < 4.5 || c < 4.5) && b < 10; ) {
      b += 1;
      const x = 0.06 * b;
      u = o(u, x), m = Q(i, u), c = Q(l, u);
    }
    t.style.setProperty("--theme-primary-700", u);
    let f = u, h = Q(i, f), p = 0;
    for (; h < 4.5 && p < 10; ) {
      p += 1;
      const x = 0.06 * (p + 1);
      f = o(f, x), h = Q(i, f);
    }
    t.style.setProperty("--theme-primary-800", f), t.style.setProperty("--theme-primary-500", s(n[500] || "") || u);
  }
}, nt = (e, r) => {
  if (typeof document > "u") return;
  const t = document.documentElement;
  Object.entries(e).forEach(([m, c]) => {
    c && t.style.setProperty(`--theme-primary-${m}`, c);
  }), r === "light" ? (t.style.setProperty("--theme-background-default", "var(--theme-background-default, #f8fafc)"), t.style.setProperty("--theme-text-primary", "#0f172a")) : (t.style.setProperty("--theme-background-default", "var(--theme-background-dark, #0f172a)"), t.style.setProperty("--theme-text-primary", "#f8fafc"));
  const n = e[500] || getComputedStyle(t).getPropertyValue("--theme-primary-500") || "", s = (m) => {
    const c = m.trim();
    return c.startsWith("rgb") || !c.startsWith("#") ? c : c.length === 4 ? "#" + c[1] + c[1] + c[2] + c[2] + c[3] + c[3] : c;
  }, o = (m, c) => {
    try {
      const b = s(m);
      if (b.startsWith("rgb")) return b;
      const f = parseInt(b.slice(1), 16);
      let h = f >> 16 & 255, p = f >> 8 & 255, x = f & 255;
      return h = Math.max(0, Math.floor(h * (1 - c))), p = Math.max(0, Math.floor(p * (1 - c))), x = Math.max(0, Math.floor(x * (1 - c))), "#" + ((1 << 24) + (h << 16) + (p << 8) + x).toString(16).slice(1);
    } catch {
      return m;
    }
  }, i = "#ffffff", l = "#0f172a";
  let d = s(n) || "", u = d;
  if (d) {
    let m = Q(i, d), c = Q(l, d), b = 0;
    for (; (m < 4.5 || c < 4.5) && b < 10; ) {
      b += 1;
      const x = 0.06 * b;
      d = o(d, x), m = Q(i, d), c = Q(l, d);
    }
    u = d, t.style.setProperty("--theme-primary-700", u);
    let f = u, h = Q(i, f), p = 0;
    for (; h < 4.5 && p < 10; ) {
      p += 1;
      const x = 0.06 * (p + 1);
      f = o(f, x), h = Q(i, f);
    }
    t.style.setProperty("--theme-primary-800", f), t.style.setProperty("--theme-primary-500", s(n) || u);
  }
}, Fn = ({ children: e, defaultMode: r = "light", defaultColor: t = "purple" }) => {
  const [n, s] = W(r), [o, i] = W(t), l = B((f) => {
    oe(f, n), localStorage.setItem(ye, f.name);
  }, [n]), d = B((f) => {
    i(f), localStorage.setItem(ye, f);
  }, []), u = B((f) => {
    localStorage.setItem(Se, JSON.stringify(f)), i("custom"), localStorage.setItem(ye, "custom");
  }, []), m = B((f) => {
    s(f), localStorage.setItem(at, f);
  }, []), c = B(() => {
    m(n === "light" ? "dark" : "light");
  }, [n, m]);
  Z(() => {
    if (typeof document > "u") return;
    const f = localStorage.getItem(at) || r, h = localStorage.getItem(ye) || t;
    if (s(f), i(h), document.documentElement.classList.toggle("dark", f === "dark"), h === "custom") {
      const x = localStorage.getItem(Se);
      if (x)
        try {
          const y = JSON.parse(x);
          nt(y, f);
        } catch {
          const y = re.purple;
          oe(y, f);
        }
      else {
        const y = re.purple;
        oe(y, f);
      }
    } else {
      const x = re[h] || re.purple;
      oe(x, f);
    }
  }, [r, t]), Z(() => {
    if (typeof document > "u") return;
    if (document.documentElement.classList.toggle("dark", n === "dark"), o === "custom") {
      const h = localStorage.getItem(Se);
      if (h)
        try {
          const p = JSON.parse(h);
          nt(p, n);
        } catch {
          const p = re.purple;
          oe(p, n);
        }
      else {
        const p = re.purple;
        oe(p, n);
      }
    } else {
      const h = re[o] || re.purple;
      oe(h, n);
    }
  }, [n, o]);
  const b = we(() => ({ mode: n, color: o, toggleTheme: c, setThemeMode: m, setThemeColor: d, applyThemePreset: l, setCustomPalette: u }), [n, o, c, m, d, l, u]);
  return /* @__PURE__ */ a.jsx(vt.Provider, { value: b, children: e });
}, oa = () => {
  const e = Le(vt);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Fe = ({ children: e, container: r }) => {
  const [t, n] = W(!1), [s, o] = W(null);
  return Z(() => {
    if (n(!0), r)
      o(r);
    else {
      const i = document.createElement("div");
      return document.body.appendChild(i), o(i), () => {
        document.body.removeChild(i);
      };
    }
  }, [r]), !t || !s ? null : At(e, s);
}, yt = w.forwardRef(
  ({ className: e, variant: r = "icon", showLabel: t = !1, size: n = "md", ...s }, o) => {
    const { mode: i, toggleTheme: l, color: d, setThemeColor: u } = oa(), m = i === "dark", [c, b] = W(!1), [f, h] = W(), p = ee(null), y = { sm: "small", md: "medium", lg: "large" }[n] ?? "medium", R = B(() => {
      const k = p.current;
      if (!k) return;
      const E = k.getBoundingClientRect(), T = 192, C = 12, O = E.right + 8, M = E.top, S = Math.min(O, window.innerWidth - T - C), P = Math.max(C, Math.min(M, window.innerHeight - 200 - C));
      h({ position: "fixed", top: P, left: S, width: T });
    }, []);
    return Pt(() => {
      c && R();
    }, [c, R]), Z(() => {
      if (!c) return;
      const k = () => R();
      return window.addEventListener("resize", k), window.addEventListener("scroll", k, !0), () => {
        window.removeEventListener("resize", k), window.removeEventListener("scroll", k, !0);
      };
    }, [c, R]), r === "button" ? /* @__PURE__ */ a.jsx(
      gt,
      {
        ref: o,
        variant: "ghost",
        size: y,
        onClick: l,
        className: g(e),
        "aria-label": m ? "라이트모드로 전환" : "다크모드로 전환",
        ...s,
        children: m ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(Te, { className: "h-4 w-4" }),
          t && /* @__PURE__ */ a.jsx("span", { children: "라이트 모드" })
        ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(Ce, { className: "h-4 w-4" }),
          t && /* @__PURE__ */ a.jsx("span", { children: "다크 모드" })
        ] })
      }
    ) : /* @__PURE__ */ a.jsxs("div", { className: g("relative inline-flex items-center", e), children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          ref: (k) => {
            p.current = k, typeof o == "function" ? o(k) : o && (o.current = k);
          },
          onClick: () => b((k) => !k),
          className: g(
            "flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/80 text-neutral-600 shadow-sm transition-all duration-200",
            "hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md hover:text-neutral-900",
            "dark:border-neutral-700/70 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900",
            c && "ring-2 ring-primary-500/50 shadow-lg"
          ),
          "aria-label": m ? "라이트모드로 전환" : "다크모드로 전환",
          "aria-pressed": c,
          ...s,
          children: m ? /* @__PURE__ */ a.jsx(Te, { className: "h-4 w-4 transition-transform duration-200" }) : /* @__PURE__ */ a.jsx(Ce, { className: "h-4 w-4 transition-transform duration-200" })
        }
      ),
      c && /* @__PURE__ */ a.jsx(Fe, { children: /* @__PURE__ */ a.jsxs(
        "div",
        {
          style: f,
          className: "relative rounded-xl border border-neutral-200/80 bg-white/90 p-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-xl dark:border-neutral-700/80 dark:bg-neutral-900/90 dark:ring-white/5 z-50",
          children: [
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "absolute left-0 top-3 -translate-x-full pointer-events-none dark:hidden",
                style: {
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderRight: "8px solid rgb(229 231 235 / 0.8)"
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "absolute left-0 top-3 -translate-x-full pointer-events-none hidden dark:block",
                style: {
                  width: 0,
                  height: 0,
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderRight: "8px solid rgb(64 64 64 / 0.8)"
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "absolute left-0 top-3 -translate-x-[calc(100%-1px)] pointer-events-none dark:hidden",
                style: {
                  width: 0,
                  height: 0,
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  borderRight: "7px solid rgba(255, 255, 255, 0.9)"
                }
              }
            ),
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "absolute left-0 top-3 -translate-x-[calc(100%-1px)] pointer-events-none hidden dark:block",
                style: {
                  width: 0,
                  height: 0,
                  borderTop: "7px solid transparent",
                  borderBottom: "7px solid transparent",
                  borderRight: "7px solid rgb(23 23 23 / 0.9)"
                }
              }
            ),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between px-1 pb-3 border-b border-neutral-100 dark:border-neutral-800", children: [
              /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsx("span", { className: "text-xs font-semibold text-neutral-700 dark:text-neutral-200", children: "테마 모드" }) }),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: l,
                  "aria-label": "Toggle light/dark",
                  className: g(
                    "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
                    m ? "bg-primary-600" : "bg-neutral-300"
                  ),
                  children: /* @__PURE__ */ a.jsx(
                    "span",
                    {
                      className: g(
                        "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
                        m ? "translate-x-[22px]" : "translate-x-[2px]"
                      ),
                      children: m ? /* @__PURE__ */ a.jsx(Ce, { className: "h-3 w-3 text-primary-600" }) : /* @__PURE__ */ a.jsx(Te, { className: "h-3 w-3 text-amber-500" })
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-4 gap-2 pt-2", children: ["purple", "orange", "green", "blue"].map((k) => {
              const E = re[k], T = E == null ? void 0 : E.primary;
              let C;
              T && typeof T == "object" && (C = T[500]);
              const O = C || {
                purple: "#7c3aed",
                orange: "#f97316",
                green: "#22c55e",
                blue: "#3b82f6"
              }[k], M = d === k;
              return /* @__PURE__ */ a.jsxs(
                "button",
                {
                  onClick: () => {
                    u(k);
                  },
                  "aria-label": `${k} 테마 사용`,
                  className: g(
                    "relative h-9 w-9 rounded-lg border border-neutral-200/80 transition-all duration-150",
                    "hover:-translate-y-0.5 hover:shadow-sm hover:border-neutral-300",
                    "dark:border-neutral-700/80 dark:hover:border-neutral-600",
                    M ? "ring-2 ring-primary-500 shadow-md" : "ring-0"
                  ),
                  style: { backgroundColor: O },
                  children: [
                    /* @__PURE__ */ a.jsxs("span", { className: "sr-only", children: [
                      k,
                      " theme"
                    ] }),
                    M && /* @__PURE__ */ a.jsx("span", { className: "absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white drop-shadow-sm", children: "✓" })
                  ]
                },
                k
              );
            }) })
          ]
        }
      ) })
    ] });
  }
);
yt.displayName = "ThemeToggle";
const la = N(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors resize-y",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600"
      },
      size: {
        sm: "text-xs py-2 px-3",
        md: "text-sm py-2.5 px-4",
        lg: "text-base py-3 px-4"
      },
      error: {
        true: "border-error-500 focus:border-error-500 focus:ring-error-500/50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: !1
    }
  }
), ia = w.forwardRef(
  ({
    className: e,
    label: r,
    error: t,
    helperText: n,
    variant: s,
    size: o,
    id: i,
    disabled: l,
    "aria-label": d,
    "aria-describedby": u,
    ...m
  }, c) => {
    const b = J(), f = i || b, h = t ? `${f}-error` : void 0, p = n ? `${f}-helper` : void 0, x = [h, p, u].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ a.jsxs("div", { className: g("flex flex-col group w-full", e), children: [
      r && /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: f,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-800 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            r,
            m.required && /* @__PURE__ */ a.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          ref: c,
          id: f,
          className: g(
            la({ variant: s, size: o, error: !!t }),
            l && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !t && "hover:border-neutral-300 dark:hover:border-neutral-600"
          ),
          "aria-label": d || r,
          "aria-invalid": t ? "true" : void 0,
          "aria-describedby": x,
          ...m
        }
      ),
      t && /* @__PURE__ */ a.jsxs("span", { id: h, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        t
      ] }),
      n && !t && /* @__PURE__ */ a.jsx("span", { id: p, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: n })
    ] });
  }
);
ia.displayName = "TextArea";
const da = N(
  "w-full border bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors resize-none overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-neutral-200 dark:border-neutral-700",
        filled: "bg-neutral-50 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600"
      },
      size: {
        sm: "text-xs py-2 px-3",
        md: "text-sm py-2.5 px-4",
        lg: "text-base py-3 px-4"
      },
      error: {
        true: "border-error-500 focus:border-error-500 focus:ring-error-500/50",
        false: ""
      },
      minRows: {
        1: "min-h-[2.5rem]",
        2: "min-h-[4rem]",
        3: "min-h-[5.5rem]",
        4: "min-h-[7rem]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      error: !1,
      minRows: 1
    }
  }
), ca = w.forwardRef(
  ({
    className: e,
    label: r,
    error: t,
    helperText: n,
    variant: s,
    size: o,
    minRows: i = 1,
    maxRows: l,
    id: d,
    disabled: u,
    value: m,
    "aria-label": c,
    "aria-describedby": b,
    ...f
  }, h) => {
    const p = J(), x = d || p, y = t ? `${x}-error` : void 0, R = n ? `${x}-helper` : void 0, k = [y, R, b].filter(Boolean).join(" ") || void 0, E = ee(null), T = h || E;
    return Z(() => {
      const C = T.current;
      if (!C) return;
      C.style.height = "auto";
      const j = C.scrollHeight, O = parseInt(getComputedStyle(C).lineHeight, 10) || 20, M = i * O, S = l ? l * O : 1 / 0, P = Math.min(Math.max(j, M), S);
      C.style.height = `${P}px`;
    }, [m, i, l, T]), /* @__PURE__ */ a.jsxs("div", { className: g("flex flex-col group w-full", e), children: [
      r && /* @__PURE__ */ a.jsxs(
        "label",
        {
          htmlFor: x,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-800 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            r,
            f.required && /* @__PURE__ */ a.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(
        "textarea",
        {
          ref: T,
          id: x,
          className: g(
            da({ variant: s, size: o, error: !!t, minRows: i }),
            u && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !t && "hover:border-neutral-300 dark:hover:border-neutral-600"
          ),
          value: m,
          "aria-label": c || r,
          "aria-invalid": t ? "true" : void 0,
          "aria-describedby": k,
          disabled: u,
          ...f
        }
      ),
      t && /* @__PURE__ */ a.jsxs("span", { id: y, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        t
      ] }),
      n && !t && /* @__PURE__ */ a.jsx("span", { id: R, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: n })
    ] });
  }
);
ca.displayName = "TextareaAutosize";
let st = 0;
const wt = (e = "id") => (st += 1, `${e}-${st}`), kt = (e) => {
  const r = {};
  for (const t in e)
    (t.startsWith("aria-") || t.startsWith("role")) && (r[t] = e[t]);
  return r;
}, ua = (e) => {
  const { delay: r = 300, defaultOpen: t = !1, open: n, onOpenChange: s } = e, [o, i] = H.useState(t), l = n !== void 0, d = l ? n : o, u = H.useRef(wt("tooltip")).current, m = H.useRef(null), c = H.useRef(null), b = H.useCallback(() => {
    c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      l || i(!0), s == null || s(!0);
    }, r);
  }, [r, l, s]), f = H.useCallback(() => {
    c.current && clearTimeout(c.current), l || i(!1), s == null || s(!1);
  }, [l, s]), p = {
    ...{
      onMouseEnter: b,
      onMouseLeave: f,
      onFocus: b,
      onBlur: f,
      onKeyDown: (y) => {
        y.key === "Escape" && f();
      }
    },
    "aria-describedby": d ? u : void 0
  }, x = {
    ...kt(e),
    id: u,
    role: "tooltip"
  };
  return {
    triggerProps: p,
    triggerRef: m,
    tooltipProps: x,
    isVisible: d,
    contentId: u
  };
}, fa = N(
  "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-neutral-800 shadow-soft-sm opacity-0 transition-opacity duration-200 pointer-events-none dark:bg-neutral-200 dark:text-neutral-900",
  {
    variants: {
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
      },
      visible: {
        true: "opacity-100",
        false: "opacity-0"
      }
    },
    defaultVariants: {
      placement: "top"
    }
  }
), ma = w.forwardRef(
  ({ children: e, content: r, placement: t = "top", delay: n = 300, className: s, open: o, defaultOpen: i, onOpenChange: l, ...d }, u) => {
    const { triggerProps: m, triggerRef: c, tooltipProps: b, isVisible: f } = ua({
      delay: n,
      content: r,
      open: o,
      defaultOpen: i,
      onOpenChange: l
    });
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: u,
        className: g("relative inline-block", s),
        ...d,
        children: [
          w.cloneElement(e, { ...m, ref: c }),
          f && /* @__PURE__ */ a.jsxs("div", { className: g(fa({ placement: t, visible: f })), ...b, children: [
            r,
            /* @__PURE__ */ a.jsx(
              "div",
              {
                className: g(
                  "absolute w-0 h-0 border-solid border-transparent",
                  t === "top" && "top-full left-1/2 -translate-x-1/2 border-t-neutral-800 dark:border-t-neutral-200 border-8",
                  t === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 dark:border-b-neutral-200 border-8",
                  t === "left" && "left-full top-1/2 -translate-y-1/2 border-l-neutral-800 dark:border-l-neutral-200 border-8",
                  t === "right" && "right-full top-1/2 -translate-y-1/2 border-r-neutral-800 dark:border-r-neutral-200 border-8"
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
ma.displayName = "Tooltip";
const pa = N(
  "font-display text-neutral-900 dark:text-white",
  {
    variants: {
      variant: {
        h1: "text-4xl font-black leading-tight tracking-tight",
        h2: "text-2xl font-bold leading-tight tracking-tight",
        h3: "text-xl font-bold leading-tight",
        h4: "text-lg font-bold leading-normal",
        h5: "text-base font-bold leading-normal",
        h6: "text-sm font-bold leading-normal",
        p: "text-base font-normal leading-normal text-neutral-600 dark:text-neutral-300",
        caption: "text-sm font-medium text-neutral-500 dark:text-neutral-400",
        small: "text-xs font-medium text-neutral-500 dark:text-neutral-400"
      },
      color: {
        default: "text-neutral-900 dark:text-white",
        primary: "text-primary-800 dark:text-primary-400",
        secondary: "text-neutral-500 dark:text-neutral-400",
        success: "text-success-500 dark:text-success-400",
        error: "text-error-500 dark:text-error-400",
        warning: "text-warning-500 dark:text-warning-300",
        info: "text-info-500 dark:text-info-400",
        muted: "text-neutral-400 dark:text-neutral-500",
        white: "text-white"
      }
    },
    defaultVariants: {
      variant: "p",
      color: "default"
    }
  }
), ba = w.forwardRef(
  ({ className: e, variant: r, color: t, component: n, children: s, ...o }, i) => {
    const l = n || (r === "p" || r === "caption" || r === "small" ? "p" : r) || "span";
    return /* @__PURE__ */ a.jsx(
      l,
      {
        ref: i,
        className: g(pa({ variant: r, color: t }), e),
        ...o,
        children: s
      }
    );
  }
);
ba.displayName = "Typography";
const xa = N(
  "flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "shadow-sm border border-neutral-200 dark:border-neutral-700",
        outlined: "border border-neutral-200 dark:border-neutral-700",
        elevated: "shadow-md border-none",
        flat: "bg-neutral-50 dark:bg-neutral-900 border-none",
        glass: "bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5",
        premium: "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-3xl border border-white/60 shadow-soft-xl ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900/40 dark:border-neutral-700/60 dark:ring-white/10"
      },
      hoverable: {
        true: "hover:shadow-lg hover:-translate-y-0.5 cursor-pointer",
        false: ""
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8"
      }
    },
    defaultVariants: {
      variant: "default",
      hoverable: !1,
      padding: "md"
    }
  }
), ha = N("", {
  variants: {
    padding: {
      none: "p-0",
      sm: "px-4 pt-4 pb-4",
      md: "px-6 pt-6 pb-6",
      lg: "px-8 pt-8 pb-8"
    }
  },
  defaultVariants: {
    padding: "md"
  }
}), ue = w.forwardRef(
  ({
    className: e,
    variant: r = "default",
    padding: t = "md",
    title: n,
    subtitle: s,
    image: o,
    imageAlt: i,
    actions: l,
    hoverable: d = !1,
    headerAction: u,
    children: m
  }, c) => /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: c,
      className: g(
        xa({
          variant: r,
          hoverable: d,
          padding: t
        }),
        e
      ),
      children: [
        o && /* @__PURE__ */ a.jsx(
          "img",
          {
            src: o,
            alt: i || n || "card image",
            className: g(t === "none" ? "" : "w-full h-auto object-cover", t !== "none" && "rounded-t-xl")
          }
        ),
        (n || s || u) && /* @__PURE__ */ a.jsxs(Be, { padding: t, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col", children: [
            n && /* @__PURE__ */ a.jsx($e, { children: n }),
            s && /* @__PURE__ */ a.jsx("p", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: s })
          ] }),
          u && /* @__PURE__ */ a.jsx(De, { children: u })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: g(ha({ padding: t })), children: m }),
        l && /* @__PURE__ */ a.jsx(He, { padding: t, children: l })
      ]
    }
  )
);
ue.displayName = "Card";
const Be = w.forwardRef(
  ({ className: e, padding: r, children: t, ...n }, s) => /* @__PURE__ */ a.jsx(
    "header",
    {
      ref: s,
      className: g(
        "flex items-center justify-between gap-4",
        r === "none" ? "p-0" : r === "sm" ? "px-4 pt-4 pb-0" : r === "lg" ? "px-8 pt-8 pb-0" : "px-6 pt-6 pb-0",
        r !== "none" && "border-b border-neutral-200 dark:border-neutral-700 mb-0",
        e
      ),
      ...n,
      children: t
    }
  )
);
Be.displayName = "CardHeader";
const $e = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "h3",
    {
      ref: n,
      className: g("text-lg font-bold text-neutral-900 dark:text-white", e),
      ...t,
      children: r
    }
  )
);
$e.displayName = "CardTitle";
const De = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx("div", { ref: n, className: g("flex-shrink-0", e), ...t, children: r })
);
De.displayName = "CardHeaderAction";
const jt = w.forwardRef(
  ({ className: e, padding: r, children: t, ...n }, s) => /* @__PURE__ */ a.jsx(
    "main",
    {
      ref: s,
      className: g(
        "flex-1",
        r === "none" ? "p-0" : r === "sm" ? "px-4 pt-4 pb-4" : r === "lg" ? "px-8 pt-8 pb-8" : "px-6 pt-6 pb-6",
        e
      ),
      ...n,
      children: t
    }
  )
);
jt.displayName = "CardContent";
const He = w.forwardRef(
  ({ className: e, padding: r, children: t, ...n }, s) => /* @__PURE__ */ a.jsx(
    "footer",
    {
      ref: s,
      className: g(
        "flex items-center justify-end gap-4",
        r === "none" ? "p-0" : r === "sm" ? "px-4 pt-0 pb-4" : r === "lg" ? "px-8 pt-0 pb-8" : "px-6 pt-0 pb-6",
        r !== "none" && "border-t border-neutral-200 dark:border-neutral-700 mt-0",
        e
      ),
      ...n,
      children: t
    }
  )
);
He.displayName = "CardFooter";
ue.Header = Be;
ue.Title = $e;
ue.HeaderAction = De;
ue.Content = jt;
ue.Footer = He;
const ga = N(
  "w-full border-2 border-dashed bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "flex flex-col items-center justify-center px-4 py-6",
        drag: "flex flex-col items-center justify-center px-4 py-6"
      },
      size: {
        sm: "px-3 py-4",
        md: "px-4 py-6",
        lg: "px-6 py-8"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), va = w.forwardRef(
  ({
    className: e,
    label: r,
    helperText: t,
    error: n,
    variant: s,
    size: o,
    multiple: i = !1,
    accept: l,
    onFileChange: d,
    id: u,
    "aria-label": m,
    "aria-describedby": c,
    ...b
  }, f) => {
    const h = w.useId(), p = u || h, x = n ? `${p}-error` : void 0, y = t ? `${p}-helper` : void 0, R = [x, y, c].filter(Boolean).join(" ") || void 0, [k, E] = W([]), T = ee(null), C = B((S) => {
      const P = Array.from(S.target.files || []);
      E(P), d == null || d(P);
    }, [d]), j = B((S) => {
      S.preventDefault(), S.stopPropagation();
      const P = Array.from(S.dataTransfer.files);
      E(P), d == null || d(P);
    }, [d]), O = B((S) => {
      S.preventDefault(), S.stopPropagation();
    }, []), M = B((S) => {
      E((P) => {
        const I = P.filter((z) => z !== S);
        return d == null || d(I), I;
      }), T.current && (T.current.value = "");
    }, [d]);
    return /* @__PURE__ */ a.jsxs("div", { className: g("flex flex-col w-full", e), children: [
      r && /* @__PURE__ */ a.jsx(
        "label",
        {
          htmlFor: p,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: r
        }
      ),
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: g(
            ga({ variant: s, size: o }),
            n && "border-error-500 hover:border-error-500",
            e
          ),
          onDrop: j,
          onDragOver: O,
          onClick: () => {
            var S;
            return (S = T.current) == null ? void 0 : S.click();
          },
          children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                id: p,
                ref: (S) => {
                  typeof f == "function" && f(S), T.current = S;
                },
                type: "file",
                multiple: i,
                accept: l,
                onChange: C,
                className: "sr-only",
                "aria-label": m || r,
                "aria-describedby": R,
                ...b
              }
            ),
            /* @__PURE__ */ a.jsx(Ir, { className: "text-primary-800 text-3xl mb-3" }),
            /* @__PURE__ */ a.jsxs("p", { className: "text-sm text-neutral-600 dark:text-neutral-300 text-center", children: [
              /* @__PURE__ */ a.jsx("span", { className: "font-semibold text-primary-800 dark:text-primary-400", children: "Click to upload" }),
              " or drag and drop"
            ] }),
            t && !n && /* @__PURE__ */ a.jsx("p", { className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1 text-center", children: t })
          ]
        }
      ),
      k.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "mt-4 space-y-2", children: k.map((S, P) => /* @__PURE__ */ a.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ a.jsx(Cr, { className: "text-neutral-500 dark:text-neutral-400" }),
              /* @__PURE__ */ a.jsx("span", { className: "text-sm text-neutral-700 dark:text-neutral-300 truncate", children: S.name }),
              /* @__PURE__ */ a.jsxs("span", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: [
                "(",
                (S.size / 1024).toFixed(2),
                " KB)"
              ] })
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                type: "button",
                onClick: () => M(S),
                className: "text-neutral-500 hover:text-error-500 transition-colors",
                "aria-label": `Remove ${S.name}`,
                children: /* @__PURE__ */ a.jsx(Ne, { className: "text-lg" })
              }
            )
          ]
        },
        S.name + P
      )) }),
      n && /* @__PURE__ */ a.jsxs("span", { id: x, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        n
      ] }),
      t && n && /* @__PURE__ */ a.jsx("span", { id: y, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: t })
    ] });
  }
);
va.displayName = "FileUpload";
const Nt = Ae(void 0), Bn = () => Le(Nt), ya = w.forwardRef(
  ({
    className: e,
    error: r,
    helperText: t,
    required: n,
    disabled: s,
    children: o,
    id: i,
    ...l
  }, d) => {
    const u = J(), m = i || u, c = r ? `${m}-error` : void 0, b = t ? `${m}-helper` : void 0, f = {
      id: m,
      error: r,
      helperText: t,
      required: n,
      disabled: s
    };
    return /* @__PURE__ */ a.jsx(Nt.Provider, { value: f, children: /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: d,
        className: g("flex flex-col w-full", e),
        ...l,
        children: [
          o,
          r && /* @__PURE__ */ a.jsxs("span", { id: c, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
            /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ a.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
            r
          ] }),
          t && !r && /* @__PURE__ */ a.jsx("span", { id: b, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: t })
        ]
      }
    ) });
  }
);
ya.displayName = "FormControl";
const wa = N(
  "flex flex-col w-full",
  {
    variants: {
      spacing: {
        none: "gap-0",
        sm: "gap-1.5",
        md: "gap-2",
        lg: "gap-3"
      }
    },
    defaultVariants: {
      spacing: "md"
    }
  }
), ka = w.forwardRef(
  ({
    className: e,
    label: r,
    error: t,
    helperText: n,
    spacing: s,
    id: o,
    ...i
  }, l) => {
    const d = J(), u = o || d;
    return /* @__PURE__ */ a.jsx("div", { className: g(wa({ spacing: s }), e), children: /* @__PURE__ */ a.jsx(
      he,
      {
        ref: l,
        id: u,
        label: r,
        error: t,
        helperText: n,
        ...i
      }
    ) });
  }
);
ka.displayName = "FormField";
const ja = N(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Na = w.forwardRef(
  ({
    className: e,
    onSearch: r,
    onClear: t,
    clearable: n = !0,
    size: s,
    placeholder: o = "Search...",
    ...i
  }, l) => {
    const [d, u] = W(""), m = (b) => {
      const f = b.target.value;
      u(f), r == null || r(f);
    }, c = () => {
      u(""), r == null || r(""), t == null || t();
    };
    return /* @__PURE__ */ a.jsxs("div", { className: g(ja({ size: s }), e), children: [
      /* @__PURE__ */ a.jsx(
        he,
        {
          ref: l,
          value: d,
          onChange: m,
          placeholder: o,
          icon: Sr,
          iconPosition: "left",
          ...i
        }
      ),
      n && d && /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: c,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
          "aria-label": "Clear search",
          children: /* @__PURE__ */ a.jsx(ge, { className: "text-lg" })
        }
      )
    ] });
  }
);
Na.displayName = "SearchBar";
const Ra = N(
  "w-full border border-neutral-200 dark:border-neutral-700 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white dark:bg-neutral-800",
        filled: "bg-neutral-50 dark:bg-neutral-900",
        outlined: "border-2 border-neutral-300 dark:border-neutral-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ea = N(
  "border-b border-neutral-200 dark:border-neutral-700 last:border-b-0"
), Va = N(
  "flex w-full items-center justify-between px-4 py-3 text-left font-medium text-neutral-900 dark:text-neutral-100 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-inset",
  {
    variants: {
      expanded: {
        true: "bg-neutral-50 dark:bg-neutral-900",
        false: ""
      }
    },
    defaultVariants: {
      expanded: !1
    }
  }
), za = N(
  "overflow-hidden transition-all duration-300 ease-in-out bg-neutral-50 dark:bg-neutral-900/50",
  {
    variants: {
      expanded: {
        true: "max-h-[1000px] opacity-100",
        false: "max-h-0 opacity-0"
      }
    },
    defaultVariants: {
      expanded: !1
    }
  }
), Ca = w.forwardRef(
  ({
    className: e,
    variant: r,
    items: t,
    allowMultiple: n = !1,
    defaultExpanded: s = [],
    ...o
  }, i) => {
    const [l, d] = W(
      new Set(s)
    ), u = J(), m = (c) => {
      d((b) => {
        const f = new Set(b);
        return f.has(c) ? f.delete(c) : (n || f.clear(), f.add(c)), f;
      });
    };
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: i,
        className: g(Ra({ variant: r }), e),
        ...o,
        children: t.map((c, b) => {
          const f = c.id || `accordion-item-${b}`, h = l.has(f), p = `${u}-trigger-${b}`, x = `${u}-content-${b}`;
          return /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: Ea(),
              children: [
                /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    id: p,
                    type: "button",
                    onClick: () => !c.disabled && m(f),
                    disabled: c.disabled,
                    "aria-expanded": h,
                    "aria-controls": x,
                    className: g(
                      Va({ expanded: h }),
                      c.disabled && "opacity-50 cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { children: c.title }),
                      /* @__PURE__ */ a.jsx(
                        _e,
                        {
                          className: g(
                            "text-neutral-500 dark:text-neutral-400 transition-transform duration-300",
                            h && "transform rotate-180"
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "div",
                  {
                    id: x,
                    role: "region",
                    "aria-labelledby": p,
                    className: g(
                      za({ expanded: h }),
                      "px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    ),
                    children: c.content
                  }
                )
              ]
            },
            f
          );
        })
      }
    );
  }
);
Ca.displayName = "Accordion";
const Ta = N(
  "flex items-start gap-3 p-4 shadow-soft-sm transition-colors duration-200",
  {
    variants: {
      variant: {
        info: "bg-info-50 text-info-800 border border-info-200 dark:bg-info-950 dark:text-info-200 dark:border-info-800",
        success: "bg-success-50 text-success-800 border border-success-200 dark:bg-success-950 dark:text-success-200 dark:border-success-800",
        warning: "bg-warning-50 text-warning-800 border border-warning-200 dark:bg-warning-950 dark:text-warning-200 dark:border-warning-800",
        error: "bg-error-50 text-error-800 border border-error-200 dark:bg-error-950 dark:text-error-200 dark:border-error-800"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), Ma = {
  info: ht,
  success: xt,
  warning: zr,
  error: Ne
}, Sa = w.forwardRef(
  ({ className: e, variant: r = "info", title: t, description: n, showIcon: s = !0, closable: o = !1, onClose: i, action: l, ...d }, u) => {
    const c = Ma[r ?? "info"];
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: u,
        className: g(Ta({ variant: r, className: e })),
        role: "alert",
        ...d,
        children: [
          s && c && /* @__PURE__ */ a.jsx(c, { className: "flex-shrink-0 text-xl" }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex-1", children: [
            t && /* @__PURE__ */ a.jsx("h4", { className: "text-lg font-semibold mb-1", children: t }),
            /* @__PURE__ */ a.jsx("p", { className: "text-sm", children: n })
          ] }),
          l && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0 ml-auto", children: l }),
          o && /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: i,
              className: "flex-shrink-0 p-1 -mr-1 -mt-1 transition-colors duration-150 hover:bg-current/[0.1]",
              "aria-label": "Close alert",
              children: /* @__PURE__ */ a.jsx(Ne, { className: "text-lg opacity-70" })
            }
          )
        ]
      }
    );
  }
);
Sa.displayName = "Alert";
const Ia = N(
  "flex items-center justify-between gap-4 p-4 text-white shadow-soft-sm",
  {
    variants: {
      variant: {
        info: "bg-info-600",
        success: "bg-success-600",
        warning: "bg-warning-600",
        error: "bg-error-600",
        neutral: "bg-neutral-700"
      },
      position: {
        top: "fixed top-0 left-0 right-0 z-50",
        static: "relative"
      }
    },
    defaultVariants: {
      variant: "neutral",
      position: "top"
    }
  }
), Pa = w.forwardRef(
  ({ className: e, variant: r, position: t, message: n, action: s, onClose: o, ...i }, l) => {
    const [d, u] = w.useState(!0), m = () => {
      u(!1), o == null || o();
    };
    return d ? /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: l,
        className: g(Ia({ variant: r, position: t, className: e })),
        role: "banner",
        ...i,
        children: [
          /* @__PURE__ */ a.jsx("p", { className: "text-sm font-medium flex-1", children: n }),
          s && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: s }),
          o && /* @__PURE__ */ a.jsx(
            "button",
            {
              onClick: m,
              className: "flex-shrink-0 ml-auto p-1 transition-colors duration-150 hover:bg-white/20",
              "aria-label": "Close banner",
              children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
            }
          )
        ]
      }
    ) : null;
  }
);
Pa.displayName = "Banner";
const Aa = w.forwardRef(
  ({ items: e, separator: r = /* @__PURE__ */ a.jsx(xe, { className: "text-neutral-400 dark:text-neutral-500 mx-2 text-xs" }), className: t, ...n }, s) => /* @__PURE__ */ a.jsx("nav", { "aria-label": "breadcrumb", className: g("flex", t), ref: s, ...n, children: /* @__PURE__ */ a.jsx("ol", { className: "flex items-center space-x-0", children: e.map((o, i) => /* @__PURE__ */ a.jsxs("li", { className: "flex items-center", children: [
    o.href ? /* @__PURE__ */ a.jsx(
      "a",
      {
        href: o.href,
        onClick: o.onClick,
        className: "text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
        children: o.label
      }
    ) : /* @__PURE__ */ a.jsx("span", { className: "text-sm font-medium text-neutral-800 dark:text-neutral-200", children: o.label }),
    i < e.length - 1 && r
  ] }, i)) }) })
);
Aa.displayName = "Breadcrumb";
const La = N(
  "fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-white dark:bg-neutral-900 shadow-xl",
  {
    variants: {
      open: {
        true: "translate-x-0 translate-y-0 opacity-100",
        false: "opacity-0"
      },
      position: {
        left: "top-0 left-0 h-full w-80",
        right: "top-0 right-0 h-full w-80",
        top: "top-0 left-0 w-full h-80",
        bottom: "bottom-0 left-0 w-full h-80"
      }
    },
    compoundVariants: [
      { open: !1, position: "left", className: "-translate-x-full" },
      { open: !1, position: "right", className: "translate-x-full" },
      { open: !1, position: "top", className: "-translate-y-full" },
      { open: !1, position: "bottom", className: "translate-y-full" }
    ],
    defaultVariants: {
      position: "left",
      open: !1
    }
  }
), Oa = N(
  "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out",
  {
    variants: {
      open: {
        true: "opacity-100",
        false: "opacity-0 pointer-events-none"
      }
    },
    defaultVariants: {
      open: !1
    }
  }
), _a = w.forwardRef(
  ({ className: e, open: r, onClose: t, position: n = "left", title: s, children: o, ...i }, l) => {
    const d = ee(null), [u, m] = w.useState(r);
    w.useImperativeHandle(l, () => d.current);
    const c = B(() => {
      t();
    }, [t]), b = B(
      (f) => {
        f.key === "Escape" && r && c();
      },
      [c, r]
    );
    return Z(() => {
      if (r)
        m(!0), document.addEventListener("keydown", b), document.body.style.overflow = "hidden";
      else {
        const f = setTimeout(() => {
          m(!1);
        }, 300);
        return document.removeEventListener("keydown", b), document.body.style.overflow = "", () => clearTimeout(f);
      }
      return () => {
        document.removeEventListener("keydown", b), document.body.style.overflow = "";
      };
    }, [r, b]), u ? /* @__PURE__ */ a.jsx(Fe, { children: /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx("div", { className: g(Oa({ open: r })), onClick: c }),
      /* @__PURE__ */ a.jsxs(
        "div",
        {
          ref: d,
          className: g(
            La({ open: r, position: n, className: e })
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": s ? "drawer-title" : void 0,
          ...i,
          children: [
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
              s && /* @__PURE__ */ a.jsx("h3", { id: "drawer-title", className: "text-lg font-semibold text-neutral-900 dark:text-white", children: s }),
              /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: c,
                  type: "button",
                  className: "p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
                  "aria-label": "Close drawer",
                  children: /* @__PURE__ */ a.jsx(ge, { className: "text-neutral-500 dark:text-neutral-400 text-lg" })
                }
              )
            ] }),
            /* @__PURE__ */ a.jsx("div", { className: "p-4 flex-1 overflow-y-auto", children: o })
          ]
        }
      )
    ] }) }) : null;
  }
);
_a.displayName = "Drawer";
const Fa = N(
  "list-none m-0 p-0 w-full bg-white dark:bg-neutral-800 overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border border-neutral-200 dark:border-neutral-700",
        divided: "border border-neutral-200 dark:border-neutral-700 divide-y divide-neutral-200 dark:divide-neutral-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Ba = N(
  "flex items-center gap-4 transition-colors transform",
  {
    variants: {
      dense: {
        true: "py-2 px-4 text-sm",
        false: "py-3 px-5"
      },
      clickable: {
        true: "cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50 hover:shadow-md",
        false: "cursor-default"
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed pointer-events-none",
        false: ""
      }
    },
    defaultVariants: {
      dense: !1,
      clickable: !1,
      disabled: !1
    }
  }
), $a = w.forwardRef(
  ({
    items: e,
    variant: r,
    dense: t = !1,
    maxHeight: n,
    onItemClick: s,
    className: o,
    ...i
  }, l) => {
    const d = (u) => {
      u.disabled || (u.onClick && u.onClick(), s && s(u));
    };
    return /* @__PURE__ */ a.jsx(
      "ul",
      {
        ref: l,
        className: g(Fa({ variant: r }), o),
        role: "list",
        style: n ? { maxHeight: n, overflowY: "auto" } : void 0,
        ...i,
        children: e.map((u) => {
          const m = !!(u.onClick || s);
          return /* @__PURE__ */ a.jsxs(
            "li",
            {
              className: g(Ba({ dense: t, clickable: m, disabled: u.disabled })),
              onClick: () => d(u),
              role: "listitem",
              "aria-disabled": u.disabled,
              children: [
                u.avatar && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0 w-10 h-10 overflow-hidden flex items-center justify-center", children: u.avatar }),
                /* @__PURE__ */ a.jsx("div", { className: "flex-1 min-w-0", children: u.content }),
                u.action && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: u.action })
              ]
            },
            u.id
          );
        })
      }
    );
  }
);
$a.displayName = "List";
const Da = N(
  "flex",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center gap-1",
        vertical: "flex-col gap-1 w-full"
      },
      variant: {
        default: "",
        pills: "p-1 bg-neutral-100 dark:bg-neutral-800",
        tabs: "border-b border-neutral-200 dark:border-neutral-700 gap-6"
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default"
    }
  }
), ot = N(
  "flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-all duration-200 select-none outline-none",
  {
    variants: {
      active: {
        true: "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20",
        false: "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white hover:shadow-md"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500/50"
      },
      variant: {
        default: "",
        pills: "",
        tabs: "rounded-none border-b-2 border-transparent px-1 py-3 hover:bg-transparent hover:text-primary-600 dark:hover:text-primary-400"
      }
    },
    compoundVariants: [
      { variant: "pills", active: !0, className: "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm" },
      { variant: "pills", active: !1, className: "hover:bg-white/50 dark:hover:bg-neutral-700/50" },
      { variant: "tabs", active: !0, className: "bg-transparent border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400" }
    ],
    defaultVariants: {
      active: !1,
      disabled: !1,
      variant: "default"
    }
  }
), $n = ({ items: e, activeItem: r, orientation: t, variant: n, className: s, onItemClick: o }) => /* @__PURE__ */ a.jsx("nav", { className: g(Da({ orientation: t, variant: n }), s), children: e.map((i, l) => {
  const d = i.id || `${i.label}-${l}`, u = r === i.id || r === i.href, m = i.icon && typeof i.icon == "function" ? w.createElement(i.icon, { className: g("text-lg", u ? "text-current" : "text-neutral-400 dark:text-neutral-500 group-hover:text-current") }) : i.icon, c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    m && /* @__PURE__ */ a.jsx("span", { className: "flex items-center justify-center w-5 h-5", children: typeof m == "function" ? /* @__PURE__ */ a.jsx(m, {}) : m }),
    /* @__PURE__ */ a.jsx("span", { className: "truncate", children: i.label }),
    i.badge && /* @__PURE__ */ a.jsx("span", { className: "ml-auto flex items-center justify-center h-5 px-1.5 text-[10px] font-bold bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300", children: i.badge })
  ] }), b = (f) => {
    var h;
    if (i.disabled) {
      f.preventDefault();
      return;
    }
    (h = i.onClick) == null || h.call(i), o == null || o(i);
  };
  return i.href ? /* @__PURE__ */ a.jsx(
    "a",
    {
      href: i.href,
      onClick: b,
      className: g(ot({ active: u, disabled: i.disabled, variant: n }), "group"),
      "aria-current": u ? "page" : void 0,
      "aria-disabled": i.disabled ? "true" : void 0,
      children: c
    },
    d
  ) : /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: b,
      disabled: i.disabled,
      className: g(ot({ active: u, disabled: i.disabled, variant: n }), "w-full text-left group"),
      type: "button",
      "aria-disabled": i.disabled ? "true" : void 0,
      children: c
    },
    d
  );
}) }), Rt = (e) => {
  const { enabled: r = !0, containerRef: t } = e;
  H.useEffect(() => {
    if (!r)
      return;
    const n = t.current;
    if (!n)
      return;
    const s = [];
    if (n.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ).forEach((d) => {
      d instanceof HTMLElement && s.push(d);
    }), s.length === 0)
      return;
    const o = s[0], i = s[s.length - 1], l = (d) => {
      d.key === "Tab" && (d.shiftKey ? document.activeElement === o && (d.preventDefault(), i.focus()) : document.activeElement === i && (d.preventDefault(), o.focus()));
    };
    return n.addEventListener("keydown", l), o.focus(), () => {
      n.removeEventListener("keydown", l);
    };
  }, [r, t]);
}, Ha = ({ enabled: e = !0 } = {}) => {
  const r = H.useRef(null);
  return H.useEffect(() => {
    r.current = document.activeElement;
    const t = r.current;
    return () => {
      e && t && document.body.contains(t) ? t.focus({ preventScroll: !0 }) : e && r.current instanceof HTMLElement && r.current.focus({ preventScroll: !0 });
    };
  }, [e]), r;
}, Wa = N("w-full", {
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-4xl",
      xl: "max-w-6xl",
      full: "max-w-[95vw]"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Ga = N(
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-200"
), le = w.forwardRef(
  ({
    open: e,
    onClose: r,
    size: t,
    closeOnOverlayClick: n = !0,
    closeOnEscape: s = !0,
    showCloseButton: o = !0,
    className: i,
    children: l,
    ...d
  }, u) => {
    const m = ee(null), c = J(), b = J(), { hasTitle: f, hasDescription: h } = we(() => {
      let x = !1, y = !1;
      return w.Children.forEach(l, (R) => {
        if (w.isValidElement(R) && typeof R.type != "string") {
          const k = R.type;
          k.displayName === "ModalTitle" && (x = !0), k.displayName === "ModalDescription" && (y = !0);
        }
      }), { hasTitle: x, hasDescription: y };
    }, [l]);
    Rt({ enabled: e, containerRef: m }), Ha({ enabled: e });
    const p = B(() => {
      r();
    }, [r]);
    return Z(() => {
      if (!e) return;
      const x = (y) => {
        s && y.key === "Escape" && p();
      };
      return document.addEventListener("keydown", x), document.body.style.overflow = "hidden", () => {
        document.removeEventListener("keydown", x), document.body.style.overflow = "";
      };
    }, [e, s, p]), e ? /* @__PURE__ */ a.jsx(Fe, { children: /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        onClick: (x) => {
          n && x.target === x.currentTarget && p();
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": f ? c : void 0,
        "aria-describedby": h ? b : void 0,
        children: /* @__PURE__ */ a.jsxs(
          "div",
          {
            ref: (x) => {
              m.current = x, typeof u == "function" ? u(x) : u && (u.current = x);
            },
            className: g(Wa({ size: t }), Ga(), i),
            onClick: (x) => x.stopPropagation(),
            ...d,
            children: [
              o && /* @__PURE__ */ a.jsx(
                We,
                {
                  "aria-label": "Close modal",
                  onClick: p,
                  className: "absolute right-3 top-3"
                }
              ),
              w.Children.map(l, (x) => {
                if (w.isValidElement(x) && typeof x.type != "string") {
                  const y = x.type;
                  if (y.displayName === "ModalTitle")
                    return w.cloneElement(x, { id: c });
                  if (y.displayName === "ModalDescription")
                    return w.cloneElement(x, { id: b });
                  if (y.displayName === "ModalCloseButton")
                    return w.cloneElement(x, { onClick: p });
                }
                return x;
              })
            ]
          }
        )
      }
    ) }) : null;
  }
);
le.displayName = "Modal";
const Et = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "header",
    {
      ref: n,
      className: g(
        "flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4",
        e
      ),
      ...t,
      children: r
    }
  )
);
Et.displayName = "ModalHeader";
const Vt = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "h2",
    {
      ref: n,
      className: g("text-xl font-semibold text-neutral-900 dark:text-white", e),
      ...t,
      children: r
    }
  )
);
Vt.displayName = "ModalTitle";
const We = w.forwardRef(
  ({ className: e, ...r }, t) => /* @__PURE__ */ a.jsx(
    "button",
    {
      ref: t,
      className: g(
        "flex items-center justify-center p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
        e
      ),
      ...r,
      type: "button",
      children: /* @__PURE__ */ a.jsx(ge, { className: "text-lg" })
    }
  )
);
We.displayName = "ModalCloseButton";
const zt = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "p",
    {
      ref: n,
      className: g("px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400", e),
      ...t,
      children: r
    }
  )
);
zt.displayName = "ModalDescription";
const Ct = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "main",
    {
      ref: n,
      className: g("flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300", e),
      ...t,
      children: r
    }
  )
);
Ct.displayName = "ModalContent";
const Tt = w.forwardRef(
  ({ className: e, children: r, ...t }, n) => /* @__PURE__ */ a.jsx(
    "footer",
    {
      ref: n,
      className: g(
        "flex items-center justify-end gap-4 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4",
        e
      ),
      ...t,
      children: r
    }
  )
);
Tt.displayName = "ModalFooter";
le.Header = Et;
le.Title = Vt;
le.CloseButton = We;
le.Description = zt;
le.Content = Ct;
le.Footer = Tt;
const Ua = N(
  "flex items-center gap-1",
  {
    variants: {
      size: {
        sm: "gap-0.5",
        md: "gap-1",
        lg: "gap-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), Ya = N(
  "flex items-center justify-center min-w-[40px] h-10 px-2 text-sm font-medium transform transition-all duration-200 border rounded",
  {
    variants: {
      variant: {
        page: "bg-transparent border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-primary-800 hover:border-primary-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 hover:shadow-md",
        ellipsis: "border-transparent text-neutral-500 dark:text-neutral-400 cursor-default"
      },
      active: {
        true: "bg-white border-primary text-primary font-semibold dark:bg-neutral-800 dark:border-primary-500 dark:text-primary-400",
        false: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed !bg-transparent !text-neutral-600 !border-neutral-200 dark:!text-neutral-300 dark:!border-neutral-700",
        false: "cursor-pointer"
      }
    },
    compoundVariants: [
      {
        active: !0,
        variant: "page",
        className: "hover:bg-white dark:hover:bg-neutral-800 border-primary text-primary dark:text-primary-400"
      }
    ],
    defaultVariants: {
      variant: "page",
      active: !1,
      disabled: !1
    }
  }
), Mt = w.forwardRef(
  ({
    currentPage: e,
    totalPages: r,
    onPageChange: t,
    showFirstLast: n = !1,
    showPrevNext: s = !0,
    maxVisible: o = 5,
    hrefBuilder: i,
    size: l,
    className: d,
    ...u
  }, m) => {
    const c = () => {
      const p = [], x = Math.floor(o / 2);
      if (r <= o)
        return Array.from({ length: r }, (y, R) => R + 1);
      if (e <= x + 1) {
        for (let y = 1; y <= o - 1; y += 1) p.push(y);
        p.push("ellipsis"), p.push(r);
      } else if (e >= r - x) {
        p.push(1), p.push("ellipsis");
        for (let y = r - o + 2; y <= r; y += 1) p.push(y);
      } else {
        p.push(1), p.push("ellipsis");
        for (let y = e - Math.floor((o - 3) / 2); y <= e + Math.floor((o - 3) / 2); y += 1) p.push(y);
        p.push("ellipsis"), p.push(r);
      }
      return p;
    }, b = (p) => {
      p >= 1 && p <= r && p !== e && (t == null || t(p));
    };
    if (r <= 1) return null;
    const f = ({
      page: p,
      label: x,
      icon: y,
      disabled: R = !1
    }) => {
      const k = p === "ellipsis", E = p === e, T = typeof p == "number" ? `page-${p}` : `item-${x}`, C = {
        className: g(Ya({ variant: k ? "ellipsis" : "page", active: E, disabled: R })),
        "aria-label": x,
        "aria-current": E ? "page" : void 0,
        "aria-disabled": R
      };
      if (k)
        return /* @__PURE__ */ a.jsx("span", { ...C, children: "..." }, T);
      const j = y || p, O = typeof p == "number" && i ? i(p) : void 0;
      return O ? /* @__PURE__ */ a.jsx(
        "a",
        {
          href: O,
          ...C,
          onClick: (M) => {
            M.preventDefault(), b(p);
          },
          children: j
        },
        T
      ) : /* @__PURE__ */ a.jsx(
        "button",
        {
          type: "button",
          onClick: () => b(p),
          disabled: R,
          ...C,
          children: j
        },
        T
      );
    }, h = c();
    return /* @__PURE__ */ a.jsxs(
      "nav",
      {
        ref: m,
        className: g(Ua({ size: l }), d),
        "aria-label": "Pagination",
        ...u,
        children: [
          n && f({ page: 1, label: "First page", icon: /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ a.jsx(ze, { size: 12 }),
            /* @__PURE__ */ a.jsx(ze, { size: 12, className: "-ml-1" })
          ] }), disabled: e === 1 }),
          s && f({ page: Math.max(1, e - 1), label: "Previous page", icon: /* @__PURE__ */ a.jsx(ze, { size: 14 }), disabled: e === 1 }),
          h.map((p, x) => f({ page: p, label: p === "ellipsis" ? `ellipsis-${x}` : `Page ${p}` })),
          s && f({ page: Math.min(r, e + 1), label: "Next page", icon: /* @__PURE__ */ a.jsx(xe, { size: 14 }), disabled: e === r }),
          n && f({ page: r, label: "Last page", icon: /* @__PURE__ */ a.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ a.jsx(xe, { size: 12 }),
            /* @__PURE__ */ a.jsx(xe, { size: 12, className: "-ml-1" })
          ] }), disabled: e === r })
        ]
      }
    );
  }
);
Mt.displayName = "Pagination";
const qa = (e) => {
  const { trigger: r = "click", defaultOpen: t = !1, open: n, onOpenChange: s } = e, [o, i] = H.useState(t), l = n !== void 0, d = l ? n : o, u = H.useRef(wt("popover")).current, m = H.useRef(null), c = H.useRef(null), b = H.useCallback(() => {
    l || i(!0), s == null || s(!0);
  }, [l, s]), f = H.useCallback(() => {
    l || i(!1), s == null || s(!1);
  }, [l, s]), h = H.useCallback(() => {
    r === "click" && (d ? f() : b());
  }, [r, d, f, b]), p = H.useCallback(() => {
    r === "hover" && b();
  }, [r, b]), x = H.useCallback(() => {
    r === "hover" && f();
  }, [r, f]);
  H.useEffect(() => {
    const k = (E) => {
      d && m.current && !m.current.contains(E.target) && c.current && !c.current.contains(E.target) && f();
    };
    return d && r === "click" ? document.addEventListener("mousedown", k) : document.removeEventListener("mousedown", k), () => {
      document.removeEventListener("mousedown", k);
    };
  }, [d, r, f]), Rt({ enabled: d, containerRef: c });
  const y = {
    onClick: h,
    onMouseEnter: p,
    onMouseLeave: x,
    "aria-haspopup": "dialog",
    "aria-expanded": d,
    "aria-controls": u
  }, R = {
    ...kt(e),
    id: u,
    role: "dialog",
    tabIndex: -1
  };
  return {
    triggerProps: y,
    triggerRef: m,
    popoverProps: R,
    popoverRef: c,
    isOpen: d,
    contentId: u
  };
}, Ka = N(
  "absolute z-50 bg-white dark:bg-neutral-800 shadow-xl border border-neutral-200 dark:border-neutral-700 min-w-[200px] max-w-sm opacity-0 transition-all duration-200",
  {
    variants: {
      placement: {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
      },
      visible: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-95"
      }
    },
    defaultVariants: {
      placement: "bottom"
    }
  }
), Xa = w.forwardRef(
  ({ children: e, content: r, placement: t = "bottom", arrow: n = !0, className: s, trigger: o, open: i, defaultOpen: l, onOpenChange: d, ...u }, m) => {
    const c = ee(null), { triggerProps: b, triggerRef: f, popoverProps: h, popoverRef: p, isOpen: x } = qa({
      content: r,
      trigger: o,
      open: i,
      defaultOpen: l,
      onOpenChange: d,
      ...u
    });
    return w.useImperativeHandle(m, () => c.current), /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: c,
        className: g("relative inline-block", s),
        children: [
          w.cloneElement(e, { ...b, ref: f }),
          x && /* @__PURE__ */ a.jsxs(
            "div",
            {
              ref: p,
              className: g(
                Ka({ placement: t, visible: x }),
                s
              ),
              ...h,
              children: [
                r,
                n && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                  /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: g(
                        "absolute w-0 h-0 border-solid border-transparent",
                        t === "top" && "top-full left-1/2 -translate-x-1/2 border-t-neutral-300 dark:border-t-neutral-600 border-[9px] mt-[-1px]",
                        t === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-300 dark:border-b-neutral-600 border-[9px] mb-[-1px]",
                        t === "left" && "left-full top-1/2 -translate-y-1/2 border-l-neutral-300 dark:border-l-neutral-600 border-[9px] ml-[-1px]",
                        t === "right" && "right-full top-1/2 -translate-y-1/2 border-r-neutral-300 dark:border-r-neutral-600 border-[9px] mr-[-1px]"
                      )
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    "div",
                    {
                      className: g(
                        "absolute w-0 h-0 border-solid border-transparent",
                        t === "top" && "top-full left-1/2 -translate-x-1/2 border-t-white dark:border-t-neutral-800 border-8 mt-[-2px]",
                        t === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-white dark:border-b-neutral-800 border-8 mb-[-2px]",
                        t === "left" && "left-full top-1/2 -translate-y-1/2 border-l-white dark:border-l-neutral-800 border-8 ml-[-2px]",
                        t === "right" && "right-full top-1/2 -translate-y-1/2 border-r-white dark:border-r-neutral-800 border-8 mr-[-2px]"
                      )
                    }
                  )
                ] })
              ]
            }
          )
        ]
      }
    );
  }
);
Xa.displayName = "Popover";
const Ja = N(
  "w-full bg-neutral-200 h-2 dark:bg-neutral-700 overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      },
      rounded: {
        true: "rounded-none",
        false: "rounded-none"
      }
    },
    defaultVariants: {
      size: "md",
      rounded: !1
    }
  }
), Za = N(
  "h-full text-white flex items-center justify-center text-xs font-bold transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        primary: "bg-primary-500",
        success: "bg-success-500",
        warning: "bg-warning-500",
        error: "bg-error-500",
        info: "bg-info-500"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
), Qa = w.forwardRef(
  ({ className: e, size: r, rounded: t, value: n, max: s = 100, variant: o = "primary", showLabel: i = !1, ...l }, d) => {
    const u = Math.max(0, Math.min(100, n / s * 100));
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: d,
        className: g(Ja({ size: r, rounded: t, className: e })),
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": s,
        ...l,
        children: /* @__PURE__ */ a.jsx(
          "div",
          {
            className: g(Za({ variant: o })),
            style: { width: `${u}%` },
            children: i && `${Math.round(u)}%`
          }
        )
      }
    );
  }
);
Qa.displayName = "Progress";
const en = N(
  "animate-pulse bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      variant: {
        text: "h-4",
        circle: "rounded-none",
        rectangle: "rounded-none"
      },
      width: {
        full: "w-full",
        "3/4": "w-3/4",
        "1/2": "w-1/2",
        "1/3": "w-1/3",
        "1/4": "w-1/4"
      },
      height: {
        auto: "h-auto",
        full: "h-full",
        sm: "h-4",
        md: "h-6",
        lg: "h-8"
      }
    },
    defaultVariants: {
      variant: "rectangle",
      width: "full",
      height: "sm"
    }
  }
), tn = w.forwardRef(
  ({ className: e, variant: r, width: t, height: n, children: s, ...o }, i) => s ? /* @__PURE__ */ a.jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ a.jsx("div", { className: "absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-700" }),
    /* @__PURE__ */ a.jsx("div", { className: "opacity-0", children: s })
  ] }) : /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: i,
      className: g(en({ variant: r, width: t, height: n, className: e })),
      ...o
    }
  )
);
tn.displayName = "Skeleton";
const rn = N(
  "flex items-center justify-between w-full",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col items-start"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
), an = N(
  "flex items-center",
  {
    variants: {
      orientation: {
        horizontal: "flex-col text-center",
        vertical: "flex-row"
      },
      status: {
        active: "text-primary-600 dark:text-primary-400",
        completed: "text-success-600 dark:text-success-400",
        upcoming: "text-neutral-500 dark:text-neutral-400"
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      status: "upcoming"
    }
  }
), nn = N(
  "flex items-center justify-center font-bold transition-all duration-200 flex-shrink-0",
  {
    variants: {
      size: {
        sm: "w-6 h-6 text-xs",
        md: "w-8 h-8 text-sm",
        lg: "w-10 h-10 text-base"
      },
      status: {
        active: "bg-primary-500 text-white",
        completed: "bg-success-500 text-white",
        upcoming: "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
      }
    },
    defaultVariants: {
      size: "md",
      status: "upcoming"
    }
  }
), sn = w.forwardRef(
  ({ steps: e, currentStep: r, orientation: t = "horizontal", size: n = "md", className: s, ...o }, i) => /* @__PURE__ */ a.jsx("div", { ref: i, className: g(rn({ orientation: t, className: s })), ...o, children: e.map((l, d) => {
    const u = d < r ? "completed" : d === r ? "active" : "upcoming", m = d === e.length - 1;
    return /* @__PURE__ */ a.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ a.jsxs("div", { className: g(an({ orientation: t, status: u })), children: [
        /* @__PURE__ */ a.jsx("div", { className: g(nn({ size: n, status: u })), children: u === "completed" ? /* @__PURE__ */ a.jsx(Er, { className: "text-white" }) : d + 1 }),
        /* @__PURE__ */ a.jsxs("div", { className: g(
          t === "horizontal" ? "mt-2" : "ml-3 text-left"
        ), children: [
          /* @__PURE__ */ a.jsx("div", { className: "font-medium text-sm", children: l.label }),
          l.description && /* @__PURE__ */ a.jsx("div", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: l.description })
        ] })
      ] }),
      !m && /* @__PURE__ */ a.jsx("div", { className: g(
        "flex-1",
        t === "horizontal" && "h-[2px] bg-neutral-200 dark:bg-neutral-700 mx-2",
        t === "vertical" && "w-[2px] bg-neutral-200 dark:bg-neutral-700 my-2 ml-[19px]"
      ) })
    ] }, d);
  }) })
);
sn.displayName = "Stepper";
const on = N(
  "w-full border-collapse",
  {
    variants: {
      variant: {
        default: "",
        striped: "[&>tbody>tr:nth-child(even)]:bg-neutral-50 dark:[&>tbody>tr:nth-child(even)]:bg-neutral-900/50",
        bordered: "border border-neutral-200 dark:border-neutral-700"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
), ln = w.forwardRef(
  ({
    columns: e,
    data: r,
    variant: t,
    size: n,
    onRowClick: s,
    emptyMessage: o = "No data available",
    className: i,
    ...l
  }, d) => {
    const u = (m) => {
      s && s(m);
    };
    return /* @__PURE__ */ a.jsxs(
      "table",
      {
        ref: d,
        className: g(on({ variant: t, size: n }), i),
        role: "table",
        ...l,
        children: [
          /* @__PURE__ */ a.jsx("thead", { className: "bg-neutral-50 dark:bg-neutral-900/50", children: /* @__PURE__ */ a.jsx("tr", { children: e.map((m) => /* @__PURE__ */ a.jsx(
            "th",
            {
              scope: "col",
              className: g(
                "p-4 font-semibold text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-200 dark:border-neutral-700 whitespace-nowrap",
                n === "sm" && "p-2",
                n === "lg" && "p-6",
                m.align === "center" && "text-center",
                m.align === "right" && "text-right",
                !m.align && "text-left"
              ),
              children: m.label
            },
            m.key
          )) }) }),
          /* @__PURE__ */ a.jsx("tbody", { className: "divide-y divide-neutral-200 dark:divide-neutral-700", children: r.length > 0 ? r.map((m, c) => /* @__PURE__ */ a.jsx(
            "tr",
            {
              onClick: () => u(m),
              className: g(
                "transition-colors transform",
                s && "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/50 hover:shadow-md"
              ),
              children: e.map((b) => {
                const f = m[b.key];
                return /* @__PURE__ */ a.jsx(
                  "td",
                  {
                    className: g(
                      "p-4 text-neutral-700 dark:text-neutral-300 align-middle",
                      n === "sm" && "p-2",
                      n === "lg" && "p-6",
                      b.align === "center" && "text-center",
                      b.align === "right" && "text-right",
                      !b.align && "text-left"
                    ),
                    children: f
                  },
                  b.key
                );
              })
            },
            c
          )) : /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx(
            "td",
            {
              colSpan: e.length,
              className: "p-8 text-center text-neutral-500",
              children: o
            }
          ) }) })
        ]
      }
    );
  }
);
ln.displayName = "Table";
const dn = N(
  "flex items-center justify-between px-4 py-3 border-t border-neutral-200 dark:border-neutral-700"
), cn = (e, r, t) => `${e}-${r} of ${t}`, un = w.forwardRef(
  ({
    className: e,
    count: r,
    rowsPerPage: t,
    page: n,
    onPageChange: s,
    onRowsPerPageChange: o,
    rowsPerPageLabel: i = "Rows per page:",
    rowsPerPageOptions: l = [5, 10, 25, 50, 100],
    labelDisplayedRows: d = cn,
    ...u
  }, m) => {
    const c = Math.ceil(r / t), b = n * t + 1, f = Math.min((n + 1) * t, r), h = (x) => {
      s(x);
    }, p = (x) => {
      const y = parseInt(x.target.value, 10);
      o == null || o(y), s(0);
    };
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: m,
        className: g(dn(), e),
        ...u,
        children: [
          /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4", children: [
            o && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ a.jsx("label", { className: "text-sm text-neutral-700 dark:text-neutral-300", children: i }),
              /* @__PURE__ */ a.jsx(
                "select",
                {
                  value: t,
                  onChange: p,
                  className: "px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50",
                  children: l.map((x) => /* @__PURE__ */ a.jsx("option", { value: x, children: x }, x))
                }
              )
            ] }),
            /* @__PURE__ */ a.jsx("span", { className: "text-sm text-neutral-700 dark:text-neutral-300", children: d(b, f, r) })
          ] }),
          /* @__PURE__ */ a.jsx(
            Mt,
            {
              currentPage: n + 1,
              totalPages: c,
              onPageChange: (x) => h(x - 1),
              showFirstLast: !0,
              showPrevNext: !0
            }
          )
        ]
      }
    );
  }
);
un.displayName = "TablePagination";
const fn = N(
  "flex items-center gap-0.5 border-b border-neutral-200 dark:border-neutral-700"
), mn = N(
  "relative flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50",
        underlined: "border-b-2 border-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50/50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800/50",
        pills: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
      },
      active: {
        true: "",
        false: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-neutral-600",
        false: "cursor-pointer"
      },
      fullWidth: {
        true: "flex-1",
        false: ""
      }
    },
    compoundVariants: [
      {
        variant: "default",
        active: !0,
        className: "border-primary-500 text-primary-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-transparent font-semibold"
      },
      {
        variant: "underlined",
        active: !0,
        className: "border-primary-500 text-primary-600 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-transparent font-semibold"
      },
      {
        variant: "pills",
        active: !0,
        className: "bg-primary-500 text-white hover:bg-primary-600 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400 font-semibold"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: !1,
      disabled: !1,
      fullWidth: !1
    }
  }
), pn = w.forwardRef(
  ({
    items: e,
    value: r,
    defaultValue: t,
    onValueChange: n,
    variant: s = "default",
    fullWidth: o = !1,
    className: i,
    ...l
  }, d) => {
    const [u, m] = W(t || (e.length > 0 ? e[0].value : "")), c = r !== void 0, b = c ? r : u;
    Z(() => {
      c && m(r);
    }, [r, c]);
    const f = (p, x) => {
      x || (c || m(p), n == null || n(p));
    }, h = e.find((p) => p.value === b);
    return /* @__PURE__ */ a.jsxs("div", { ref: d, className: g("flex flex-col w-full", i), ...l, children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": "Tabs",
          className: g(
            fn(),
            s === "pills" && "border-b-0 gap-1"
          ),
          children: e.map((p) => {
            const x = b === p.value;
            return /* @__PURE__ */ a.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": x,
                "aria-controls": `tabpanel-${p.value}`,
                id: `tab-${p.value}`,
                onClick: () => f(p.value, p.disabled),
                tabIndex: p.disabled ? -1 : x ? 0 : -1,
                disabled: p.disabled,
                "aria-disabled": p.disabled,
                className: g(mn({ variant: s, active: x, disabled: p.disabled, fullWidth: o })),
                children: [
                  p.icon && /* @__PURE__ */ a.jsx("span", { className: "text-lg", children: p.icon }),
                  /* @__PURE__ */ a.jsx("span", { children: p.label })
                ]
              },
              p.value
            );
          })
        }
      ),
      h && h.content && /* @__PURE__ */ a.jsx(
        "div",
        {
          id: `tabpanel-${h.value}`,
          role: "tabpanel",
          "aria-labelledby": `tab-${h.value}`,
          className: "py-4 w-full text-neutral-600 dark:text-neutral-300",
          children: h.content
        }
      )
    ] });
  }
);
pn.displayName = "Tabs";
const bn = N(
  "flex items-center gap-3 p-4 shadow-soft-lg border bg-white dark:bg-neutral-800 min-w-[300px] max-w-[500px] transition-all duration-300 pointer-events-auto",
  {
    variants: {
      variant: {
        success: "border-success-200 bg-success-50 text-success-900 dark:bg-success-900/40 dark:text-success-100 dark:border-success-800",
        error: "border-error-200 bg-error-50 text-error-900 dark:bg-error-900/40 dark:text-error-100 dark:border-error-800",
        warning: "border-warning-200 bg-warning-50 text-warning-900 dark:bg-warning-900/40 dark:text-warning-100 dark:border-warning-800",
        info: "border-info-200 bg-info-50 text-info-900 dark:bg-info-900/40 dark:text-info-100 dark:border-info-800"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), xn = (e) => {
  switch (e) {
    case "success":
      return /* @__PURE__ */ a.jsx(xt, { className: "text-success-500 dark:text-success-400 text-xl" });
    case "error":
      return /* @__PURE__ */ a.jsx(Ne, { className: "text-error-500 dark:text-error-400 text-xl" });
    case "warning":
      return /* @__PURE__ */ a.jsx(Vr, { className: "text-warning-500 dark:text-warning-400 text-xl" });
    default:
      return /* @__PURE__ */ a.jsx(ht, { className: "text-info-500 dark:text-info-400 text-xl" });
  }
}, hn = ({
  id: e,
  message: r,
  type: t = "info",
  duration: n = 3e3,
  position: s = "top-right",
  onClose: o
}) => {
  const [i, l] = W(!1), [d, u] = W(!1);
  Z(() => {
    const b = requestAnimationFrame(() => {
      u(!0);
    });
    if (n > 0) {
      const f = setTimeout(() => {
        u(!1), l(!0), setTimeout(() => {
          o(e);
        }, 300);
      }, n);
      return () => {
        clearTimeout(f), cancelAnimationFrame(b);
      };
    }
    return () => cancelAnimationFrame(b);
  }, [n, e, o]);
  const m = () => {
    u(!1), l(!0), setTimeout(() => {
      o(e);
    }, 300);
  }, c = () => d && !i ? "translate-x-0 translate-y-0" : s != null && s.includes("top") ? "-translate-y-full opacity-0" : s != null && s.includes("bottom") ? "translate-y-full opacity-0" : "translate-x-full opacity-0";
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: g(
        bn({ variant: t }),
        c(),
        d && !i ? "opacity-100" : "opacity-0"
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: xn(t) }),
        /* @__PURE__ */ a.jsx("div", { className: "flex-1 text-sm font-medium", children: r }),
        /* @__PURE__ */ a.jsx(
          "button",
          {
            onClick: m,
            "aria-label": "Close toast",
            className: "flex-shrink-0 p-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ a.jsx(ge, { className: "text-sm opacity-70" })
          }
        )
      ]
    }
  );
}, gn = N(
  "fixed z-[9999] flex flex-col gap-4 p-4 pointer-events-none",
  {
    variants: {
      position: {
        "top-left": "top-0 left-0 items-start",
        "top-center": "top-0 left-1/2 -translate-x-1/2 items-center",
        "top-right": "top-0 right-0 items-end",
        "bottom-left": "bottom-0 left-0 items-start",
        "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 items-center",
        "bottom-right": "bottom-0 right-0 items-end"
      }
    },
    defaultVariants: {
      position: "top-right"
    }
  }
), St = Ae(void 0), Dn = ({ children: e, position: r = "top-right" }) => {
  const [t, n] = W([]), s = B((d) => {
    const u = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, m = d.position || r, c = {
      ...d,
      id: u,
      position: m
    };
    n((b) => [...b, c]);
  }, [r]), o = B((d) => {
    n((u) => u.filter((m) => m.id !== d));
  }, []), i = we(() => t.reduce((d, u) => {
    const m = u.position || r;
    return d[m] || (d[m] = []), d[m].push(u), d;
  }, {}), [t, r]), l = we(() => ({ showToast: s, removeToast: o }), [s, o]);
  return /* @__PURE__ */ a.jsxs(St.Provider, { value: l, children: [
    e,
    Object.entries(i).map(([d, u]) => /* @__PURE__ */ a.jsx(
      "div",
      {
        className: g(gn({ position: d })),
        children: u.map((m) => /* @__PURE__ */ a.jsx(
          hn,
          {
            ...m,
            onClose: o
          },
          m.id
        ))
      },
      d
    ))
  ] });
}, Hn = () => {
  const e = Le(St);
  if (e === void 0)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, vn = N(
  "mx-auto px-4 md:px-6 lg:px-8 w-full",
  {
    variants: {
      variant: {
        fluid: "max-w-full",
        fixed: "max-w-screen-xl",
        // Default fixed width
        narrow: "max-w-screen-md",
        wide: "max-w-screen-2xl"
      },
      centered: {
        true: "flex flex-col items-center",
        false: ""
      }
    },
    defaultVariants: {
      variant: "fixed",
      centered: !1
    }
  }
), yn = w.forwardRef(
  ({ className: e, variant: r, centered: t, as: n = "div", ...s }, o) => /* @__PURE__ */ a.jsx(
    n,
    {
      ref: o,
      className: g(vn({ variant: r, centered: t, className: e })),
      ...s
    }
  )
);
yn.displayName = "Container";
const wn = N(
  "shrink-0 bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      orientation: {
        horizontal: "h-[1px] w-full my-4",
        vertical: "h-full w-[1px] mx-4 min-h-[1em]"
      },
      variant: {
        solid: "border-solid",
        dashed: "bg-transparent border-neutral-200 dark:border-neutral-700 border-dashed",
        dotted: "bg-transparent border-neutral-200 dark:border-neutral-700 border-dotted"
      }
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        variant: "dashed",
        className: "border-t"
      },
      {
        orientation: "horizontal",
        variant: "dotted",
        className: "border-t-2"
      },
      {
        orientation: "vertical",
        variant: "dashed",
        className: "border-l"
      },
      {
        orientation: "vertical",
        variant: "dotted",
        className: "border-l-2"
      }
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "solid"
    }
  }
), kn = w.forwardRef(
  ({ className: e, orientation: r, variant: t, label: n, labelPosition: s = "center", ...o }, i) => n && r === "horizontal" ? /* @__PURE__ */ a.jsxs("div", { className: g("flex items-center w-full my-4", e), ref: i, ...o, children: [
    /* @__PURE__ */ a.jsx("div", { className: g(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      t === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      t === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      s === "left" && "flex-none w-8",
      s === "right" && "flex-1"
    ) }),
    /* @__PURE__ */ a.jsx("span", { className: "px-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap", children: n }),
    /* @__PURE__ */ a.jsx("div", { className: g(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      t === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      t === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      s === "right" && "flex-none w-8",
      s === "left" && "flex-1"
    ) })
  ] }) : /* @__PURE__ */ a.jsx(
    "div",
    {
      ref: i,
      className: g(wn({ orientation: r, variant: t, className: e })),
      ...o
    }
  )
);
kn.displayName = "Divider";
const jn = N(
  "bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "py-8 px-6 border-t border-neutral-200 dark:border-neutral-700",
        minimal: "py-4 px-6 border-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Nn = w.forwardRef(
  ({ className: e, variant: r, links: t, copyright: n, ...s }, o) => /* @__PURE__ */ a.jsxs(
    "footer",
    {
      ref: o,
      className: g(jn({ variant: r }), e),
      role: "contentinfo",
      ...s,
      children: [
        t && t.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap items-center gap-6 mb-4", children: t.map((i, l) => /* @__PURE__ */ a.jsx(
          "a",
          {
            href: i.href,
            className: "text-sm text-neutral-600 hover:text-primary-800 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
            children: i.label
          },
          l
        )) }),
        n && /* @__PURE__ */ a.jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: n })
      ]
    }
  )
);
Nn.displayName = "Footer";
const Rn = N(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
        6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
        12: "grid-cols-12",
        none: ""
      },
      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-12"
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around"
      },
      padding: {
        none: "p-0",
        xs: "p-1",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
        "2xl": "p-12"
      },
      margin: {
        none: "m-0",
        xs: "m-1",
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8",
        "2xl": "m-12"
      }
    },
    defaultVariants: {
      cols: 1,
      gap: "md",
      align: "stretch",
      justify: "start",
      padding: "none",
      margin: "none"
    }
  }
), En = w.forwardRef(
  ({ className: e, cols: r, gap: t, align: n, justify: s, padding: o, margin: i, as: l = "div", ...d }, u) => /* @__PURE__ */ a.jsx(
    l,
    {
      ref: u,
      className: g(Rn({ cols: r, gap: t, align: n, justify: s, padding: o, margin: i, className: e })),
      ...d
    }
  )
);
En.displayName = "Grid";
const Vn = N(
  "flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        transparent: "bg-transparent border-none",
        fixed: "fixed top-0 left-0 right-0 z-50"
      },
      sticky: {
        true: "sticky top-0 z-50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      sticky: !1
    }
  }
), zn = w.forwardRef(
  ({ className: e, variant: r, sticky: t, logo: n, nav: s, actions: o, ...i }, l) => /* @__PURE__ */ a.jsxs(
    "header",
    {
      ref: l,
      className: g(Vn({ variant: r, sticky: t }), e),
      role: "banner",
      ...i,
      children: [
        n && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0", children: n }),
        s && /* @__PURE__ */ a.jsx("nav", { className: "flex-1 flex items-center justify-center", children: s }),
        o && /* @__PURE__ */ a.jsx("div", { className: "flex-shrink-0 flex items-center gap-2", children: o })
      ]
    }
  )
);
zn.displayName = "Header";
const Cn = N(
  "min-h-screen flex flex-col bg-background-light dark:bg-background-dark",
  {
    variants: {
      variant: {
        default: "",
        sidebar: "",
        "header-footer": ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Tn = w.forwardRef(
  ({
    className: e,
    variant: r,
    header: t,
    sidebar: n,
    footer: s,
    children: o,
    fullHeight: i,
    sidebarPosition: l = "left",
    ...d
  }, u) => /* @__PURE__ */ a.jsxs(
    "div",
    {
      ref: u,
      className: g(Cn({ variant: r }), i && "min-h-screen", e),
      ...d,
      children: [
        t && /* @__PURE__ */ a.jsx("header", { children: t }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
          l === "left" && n && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0", children: n }),
          /* @__PURE__ */ a.jsx("main", { className: "flex-1 overflow-auto", children: o }),
          l === "right" && n && /* @__PURE__ */ a.jsx("aside", { className: "flex-shrink-0", children: n })
        ] }),
        s && /* @__PURE__ */ a.jsx("footer", { children: s })
      ]
    }
  )
);
Tn.displayName = "Layout";
const Mn = N(
  "flex flex-col h-full border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        collapsible: ""
      },
      position: {
        left: "left-0",
        right: "right-0"
      }
    },
    defaultVariants: {
      variant: "default",
      position: "left"
    }
  }
), Sn = w.forwardRef(
  ({
    className: e,
    variant: r,
    isOpen: t = !0,
    onClose: n,
    items: s = [],
    onNavigate: o,
    header: i,
    collapsible: l = !1,
    showThemeToggle: d = !1,
    width: u,
    position: m = "left",
    children: c,
    ...b
  }, f) => {
    const [h, p] = W(""), [x, y] = W(/* @__PURE__ */ new Set());
    Z(() => {
      const j = () => {
        p(window.location.hash || "");
      };
      return j(), window.addEventListener("hashchange", j), () => window.removeEventListener("hashchange", j);
    }, []), Z(() => {
      if (!h) return;
      const j = (M, S) => {
        for (const P of M)
          if (P.children) {
            if (P.children.some((F) => F.href === S)) return P.label;
            const z = j(P.children, S);
            if (z) return z;
          }
        return null;
      }, O = j(s, h);
      O && y((M) => /* @__PURE__ */ new Set([...M, O]));
    }, [h, s]);
    const R = (j) => {
      o && j && o(j), j && p(j);
    }, k = (j) => {
      y((O) => {
        const M = new Set(O);
        return M.has(j) ? M.delete(j) : M.add(j), M;
      });
    }, E = (j) => j.children && j.children.length > 0 ? j.children[0].href || E(j.children[0]) : j.href, T = (j) => {
      if (j.children && j.children.length > 0) {
        k(j.label);
        const O = E(j);
        O && o && o(O);
      } else j.href && R(j.href);
    };
    if (!t) return null;
    const C = l ? "collapsible" : r;
    return /* @__PURE__ */ a.jsxs(
      "aside",
      {
        ref: f,
        className: g(Mn({ variant: C, position: m }), e),
        role: "navigation",
        "aria-label": "Sidebar navigation",
        style: { width: u },
        ...b,
        children: [
          (i || l && n || d) && /* @__PURE__ */ a.jsxs("div", { className: "flex items-center justify-between gap-3 p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
            i && /* @__PURE__ */ a.jsx("div", { className: "flex-1", children: i }),
            /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-2", children: [
              d && /* @__PURE__ */ a.jsx(yt, {}),
              l && n && /* @__PURE__ */ a.jsx(
                "button",
                {
                  onClick: n,
                  "aria-label": "Close sidebar",
                  className: "p-2 text-neutral-500 rounded-lg hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700 transition-colors",
                  children: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a.jsxs("nav", { className: "flex-1 overflow-y-auto p-4 pt-6", children: [
            c,
            s.map((j) => {
              var z, F;
              const M = j.children && j.children.length > 0, S = M && x.has(j.label), P = j.icon, I = M ? ((z = j.children) == null ? void 0 : z.some((A) => A.href === h)) || !1 : h === j.href;
              return /* @__PURE__ */ a.jsxs("div", { className: "mb-1", children: [
                /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    onClick: () => T(j),
                    className: g(
                      "group relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
                      M ? I ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200" : I ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                    ),
                    children: [
                      P && /* @__PURE__ */ a.jsx(
                        P,
                        {
                          className: g(
                            "h-5 w-5 transition-colors flex-shrink-0",
                            I ? "text-primary-800 dark:text-primary-400" : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                          )
                        }
                      ),
                      M && /* @__PURE__ */ a.jsx("span", { className: "flex-shrink-0", children: S ? /* @__PURE__ */ a.jsx(_e, { className: "h-3.5 w-3.5 text-neutral-400 transition-transform" }) : /* @__PURE__ */ a.jsx(xe, { className: "h-3.5 w-3.5 text-neutral-400 transition-transform" }) }),
                      /* @__PURE__ */ a.jsx("span", { className: "flex-1 text-left", children: j.label }),
                      j.badge !== void 0 && /* @__PURE__ */ a.jsx(
                        "span",
                        {
                          className: g(
                            "flex h-5 min-w-[1.25rem] items-center justify-center px-1.5 text-[10px] font-bold flex-shrink-0",
                            I ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                          ),
                          children: j.badge
                        }
                      )
                    ]
                  }
                ),
                M && S && /* @__PURE__ */ a.jsx("div", { className: "ml-4 mt-1 space-y-0.5", children: (F = j.children) == null ? void 0 : F.map((A) => {
                  const V = h === A.href, $ = A.icon;
                  return /* @__PURE__ */ a.jsxs(
                    "a",
                    {
                      href: A.href,
                      onClick: (K) => {
                        K.preventDefault(), R(A.href || "");
                      },
                      className: g(
                        "group relative flex w-full items-center gap-3 pl-8 pr-4 py-2.5 text-xs font-medium transition-all duration-200",
                        V ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                      ),
                      children: [
                        $ && /* @__PURE__ */ a.jsx(
                          $,
                          {
                            className: g(
                              "h-4 w-4 transition-colors flex-shrink-0",
                              V ? "text-primary-800 dark:text-primary-400" : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                            )
                          }
                        ),
                        /* @__PURE__ */ a.jsx("span", { className: "flex-1", children: A.label }),
                        A.badge !== void 0 && /* @__PURE__ */ a.jsx(
                          "span",
                          {
                            className: g(
                              "flex h-4 min-w-[1rem] items-center justify-center px-1 text-[10px] font-bold flex-shrink-0",
                              V ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                            ),
                            children: A.badge
                          }
                        )
                      ]
                    },
                    A.href
                  );
                }) })
              ] }, j.label);
            })
          ] })
        ]
      }
    );
  }
);
Sn.displayName = "Sidebar";
const In = w.forwardRef(
  ({ className: e, size: r = 16, axis: t = "vertical", flex: n = !1, style: s, ...o }, i) => {
    const l = t === "horizontal" ? r : 1, d = t === "vertical" ? r : 1;
    return /* @__PURE__ */ a.jsx(
      "div",
      {
        ref: i,
        className: g(
          "shrink-0",
          n && "flex-1",
          e
        ),
        style: {
          width: typeof l == "number" ? `${l}px` : l,
          height: typeof d == "number" ? `${d}px` : d,
          minWidth: t === "horizontal" && !n ? typeof l == "number" ? `${l}px` : l : void 0,
          minHeight: t === "vertical" && !n ? typeof d == "number" ? `${d}px` : d : void 0,
          ...s
        },
        ...o
      }
    );
  }
);
In.displayName = "Spacer";
const Pn = N(
  "flex",
  {
    variants: {
      direction: {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse"
      },
      gap: {
        none: "gap-0",
        xs: "gap-1",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
        xl: "gap-8",
        "2xl": "gap-12"
      },
      align: {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline"
      },
      justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly"
      },
      wrap: {
        true: "flex-wrap",
        false: "flex-nowrap"
      },
      fullWidth: {
        true: "w-full",
        false: ""
      },
      padding: {
        none: "p-0",
        xs: "p-1",
        sm: "p-2",
        md: "p-4",
        lg: "p-6",
        xl: "p-8",
        "2xl": "p-12"
      },
      margin: {
        none: "m-0",
        xs: "m-1",
        sm: "m-2",
        md: "m-4",
        lg: "m-6",
        xl: "m-8",
        "2xl": "m-12"
      }
    },
    defaultVariants: {
      direction: "column",
      gap: "md",
      align: "stretch",
      justify: "start",
      wrap: !1,
      fullWidth: !1,
      padding: "none",
      margin: "none"
    }
  }
), An = w.forwardRef(
  ({ className: e, direction: r, gap: t, align: n, justify: s, wrap: o, fullWidth: i, padding: l, margin: d, as: u = "div", ...m }, c) => /* @__PURE__ */ a.jsx(
    u,
    {
      ref: c,
      className: g(Pn({ direction: r, gap: t, align: n, justify: s, wrap: o, fullWidth: i, padding: l, margin: d, className: e })),
      ...m
    }
  )
);
An.displayName = "Stack";
const Wn = (e) => {
  const { interactive: r = !1, hoverable: t = !1, cardRef: n, ...s } = e;
  return {
    cardProps: {
      ...s,
      role: r ? "article" : void 0,
      tabIndex: r ? 0 : void 0
    },
    cardRef: n,
    interactive: r,
    hoverable: t
  };
}, Gn = (e) => {
  const { ref: r } = e, [t, n] = H.useState(!1);
  return H.useEffect(() => {
    const s = r.current;
    if (!s)
      return;
    const o = () => {
      n(!1);
    }, i = (d) => {
      d.key === "Tab" && n(!0);
    }, l = () => {
      n(!1);
    };
    return s.addEventListener("mousedown", o), s.addEventListener("keydown", i), s.addEventListener("blur", l), () => {
      s.removeEventListener("mousedown", o), s.removeEventListener("keydown", i), s.removeEventListener("blur", l);
    };
  }, [r]), t;
}, Ln = (e, r, t = {}) => {
  const {
    placement: n = "bottom",
    offset: s = 8,
    flip: o = !0,
    shift: i = !1
  } = t, l = e.getBoundingClientRect(), d = r.getBoundingClientRect(), u = window.innerWidth, m = window.innerHeight;
  let c = 0, b = 0, f = n;
  const h = {
    top: () => {
      c = l.top - d.height - s, b = l.left + (l.width - d.width) / 2;
    },
    "top-start": () => {
      c = l.top - d.height - s, b = l.left;
    },
    "top-end": () => {
      c = l.top - d.height - s, b = l.right - d.width;
    },
    bottom: () => {
      c = l.bottom + s, b = l.left + (l.width - d.width) / 2;
    },
    "bottom-start": () => {
      c = l.bottom + s, b = l.left;
    },
    "bottom-end": () => {
      c = l.bottom + s, b = l.right - d.width;
    },
    left: () => {
      c = l.top + (l.height - d.height) / 2, b = l.left - d.width - s;
    },
    "left-start": () => {
      c = l.top, b = l.left - d.width - s;
    },
    "left-end": () => {
      c = l.bottom - d.height, b = l.left - d.width - s;
    },
    right: () => {
      c = l.top + (l.height - d.height) / 2, b = l.right + s;
    },
    "right-start": () => {
      c = l.top, b = l.right + s;
    },
    "right-end": () => {
      c = l.bottom - d.height, b = l.right + s;
    }
  };
  return h[n](), o && (f.startsWith("top") && c < 0 ? (f = f.replace("top", "bottom"), h[f]()) : f.startsWith("bottom") && c + d.height > m ? (f = f.replace("bottom", "top"), h[f]()) : f.startsWith("left") && b < 0 ? (f = f.replace("left", "right"), h[f]()) : f.startsWith("right") && b + d.width > u && (f = f.replace("right", "left"), h[f]())), i && (b < 0 ? b = s : b + d.width > u && (b = u - d.width - s), c < 0 ? c = s : c + d.height > m && (c = m - d.height - s)), {
    top: c + window.scrollY,
    left: b + window.scrollX,
    placement: f
  };
}, Un = (e, r, t = {}) => !e || !r ? null : Ln(e, r, t), Yn = "theme", qn = "light";
export {
  Ca as Accordion,
  Sa as Alert,
  Or as Autocomplete,
  Fr as Avatar,
  $r as Badge,
  Pa as Banner,
  Aa as Breadcrumb,
  gt as Button,
  ue as Card,
  Gr as Checkbox,
  yn as Container,
  qn as DEFAULT_THEME,
  kn as Divider,
  _a as Drawer,
  Jr as Dropdown,
  va as FileUpload,
  Nn as Footer,
  ya as FormControl,
  ka as FormField,
  En as Grid,
  zn as Header,
  he as Input,
  Tn as Layout,
  $a as List,
  $n as Menu,
  le as Modal,
  Yr as NumberInput,
  Mt as Pagination,
  Xa as Popover,
  Fe as Portal,
  Qa as Progress,
  Kr as Radio,
  Na as SearchBar,
  Jr as Select,
  Sn as Sidebar,
  tn as Skeleton,
  ra as Slider,
  In as Spacer,
  An as Stack,
  sn as Stepper,
  sa as Switch,
  Yn as THEME_STORAGE_KEY,
  ln as Table,
  un as TablePagination,
  pn as Tabs,
  ia as TextArea,
  he as TextField,
  ca as TextareaAutosize,
  Fn as ThemeProvider,
  yt as ThemeToggle,
  hn as Toast,
  Dn as ToastProvider,
  ma as Tooltip,
  ba as Typography,
  Pr as autocompleteVariants,
  _r as avatarVariants,
  Br as badgeVariants,
  Hr as buttonVariants,
  xa as cardVariants,
  Wr as checkboxVariants,
  g as cn,
  Ln as computePopperPosition,
  Qe as dropdownVariants,
  wt as generateId,
  kt as getAriaProps,
  Da as menuVariants,
  Ur as numberInputVariants,
  Ar as optionVariants,
  qr as radioVariants,
  ea as rangeVariants,
  Zr as sliderVariants,
  na as switchThumbVariants,
  aa as switchVariants,
  mn as tabTriggerVariants,
  fn as tabsVariants,
  gr as textFieldVariants,
  da as textareaAutosizeVariants,
  ta as thumbVariants,
  bn as toastVariants,
  Qr as trackVariants,
  Un as updatePopperPosition,
  Dr as useButton,
  Wn as useCard,
  xr as useClickAway,
  Ha as useFocusRestore,
  Rt as useFocusTrap,
  Gn as useFocusVisible,
  Bn as useFormControl,
  hr as useInput,
  qa as usePopover,
  oa as useTheme,
  Hn as useToast,
  ua as useTooltip
};
