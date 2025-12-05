import y, { useState as O, useId as ae, useRef as te, useEffect as Z, useCallback as P, createContext as He, useMemo as je, useContext as Ye } from "react";
import { createPortal as qe } from "react-dom";
var ve = { exports: {} }, oe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Xe() {
  if (Ne) return oe;
  Ne = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: a,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return oe.Fragment = t, oe.jsx = r, oe.jsxs = r, oe;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Je() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === _ ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case g:
          return "Fragment";
        case E:
          return "Profiler";
        case j:
          return "StrictMode";
        case $:
          return "Suspense";
        case D:
          return "SuspenseList";
        case N:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case h:
            return "Portal";
          case T:
            return u.displayName || "Context";
          case R:
            return (u._context.displayName || "Context") + ".Consumer";
          case M:
            var V = u.render;
            return u = u.displayName, u || (u = V.displayName || V.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case U:
            return V = u.displayName || null, V !== null ? V : e(u.type) || "Memo";
          case S:
            V = u._payload, u = u._init;
            try {
              return e(u(V));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var A = V.error, I = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return A.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(u);
      }
    }
    function a(u) {
      if (u === g) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === S)
        return "<...>";
      try {
        var V = e(u);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var u = z.A;
      return u === null ? null : u.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(u) {
      if (F.call(u, "key")) {
        var V = Object.getOwnPropertyDescriptor(u, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function l(u, V) {
      function A() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: A,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return K[u] || (K[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function c(u, V, A, I, ce, pe) {
      var L = A.ref;
      return u = {
        $$typeof: v,
        type: u,
        key: V,
        props: A,
        _owner: I
      }, (L !== void 0 ? L : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: pe
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function m(u, V, A, I, ce, pe) {
      var L = V.children;
      if (L !== void 0)
        if (I)
          if (H(L)) {
            for (I = 0; I < L.length; I++)
              b(L[I]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(L);
      if (F.call(V, "key")) {
        L = e(u);
        var ee = Object.keys(V).filter(function(Ue) {
          return Ue !== "key";
        });
        I = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", se[L + I] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          L,
          ee,
          L
        ), se[L + I] = !0);
      }
      if (L = null, A !== void 0 && (r(A), L = "" + A), i(V) && (r(V.key), L = "" + V.key), "key" in V) {
        A = {};
        for (var xe in V)
          xe !== "key" && (A[xe] = V[xe]);
      } else A = V;
      return L && l(
        A,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), c(
        u,
        L,
        A,
        o(),
        ce,
        pe
      );
    }
    function b(u) {
      x(u) ? u._store && (u._store.validated = 1) : typeof u == "object" && u !== null && u.$$typeof === S && (u._payload.status === "fulfilled" ? x(u._payload.value) && u._payload.value._store && (u._payload.value._store.validated = 1) : u._store && (u._store.validated = 1));
    }
    function x(u) {
      return typeof u == "object" && u !== null && u.$$typeof === v;
    }
    var f = y, v = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), T = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), N = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), z = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, H = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(u) {
        return u();
      }
    };
    var G, K = {}, Q = f.react_stack_bottom_frame.bind(
      f,
      s
    )(), Y = J(a(s)), se = {};
    le.Fragment = g, le.jsx = function(u, V, A) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return m(
        u,
        V,
        A,
        !1,
        I ? Error("react-stack-top-frame") : Q,
        I ? J(a(u)) : Y
      );
    }, le.jsxs = function(u, V, A) {
      var I = 1e4 > z.recentlyCreatedOwnerStacks++;
      return m(
        u,
        V,
        A,
        !0,
        I ? Error("react-stack-top-frame") : Q,
        I ? J(a(u)) : Y
      );
    };
  }()), le;
}
process.env.NODE_ENV === "production" ? ve.exports = Xe() : ve.exports = Je();
var n = ve.exports;
function _e(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = _e(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function Me() {
  for (var e, t, r = 0, a = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = _e(e)) && (a && (a += " "), a += t);
  return a;
}
const ze = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Re = Me, w = (e, t) => (r) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return Re(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const m = r == null ? void 0 : r[c], b = s == null ? void 0 : s[c];
    if (m === null) return null;
    const x = ze(m) || ze(b);
    return o[c][x];
  }), l = r && Object.entries(r).reduce((c, m) => {
    let [b, x] = m;
    return x === void 0 || (c[b] = x), c;
  }, {}), d = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, m) => {
    let { class: b, className: x, ...f } = m;
    return Object.entries(f).every((v) => {
      let [h, g] = v;
      return Array.isArray(g) ? g.includes({
        ...s,
        ...l
      }[h]) : {
        ...s,
        ...l
      }[h] === g;
    }) ? [
      ...c,
      b,
      x
    ] : c;
  }, []);
  return Re(e, i, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, we = "-", Ke = (e) => {
  const t = Qe(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (i) => {
      const l = i.split(we);
      return l[0] === "" && l.length !== 1 && l.shift(), Ie(l, t) || Ze(i);
    },
    getConflictingClassGroupIds: (i, l) => {
      const d = r[i] || [];
      return l && a[i] ? [...d, ...a[i]] : d;
    }
  };
}, Ie = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), o = a ? Ie(e.slice(1), a) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(we);
  return (i = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : i.classGroupId;
}, Ee = /^\[(.+)\]$/, Ze = (e) => {
  if (Ee.test(e)) {
    const t = Ee.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Qe = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rr(Object.entries(e.classGroups), r).forEach(([s, i]) => {
    ye(i, a, s, t);
  }), a;
}, ye = (e, t, r, a) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Ce(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (er(o)) {
        ye(o(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      ye(i, Ce(t, s), r, a);
    });
  });
}, Ce = (e, t) => {
  let r = e;
  return t.split(we).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, er = (e) => e.isThemeGetter, rr = (e, t) => t ? e.map(([r, a]) => {
  const o = a.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, l]) => [t + i, l])) : s);
  return [r, o];
}) : e, tr = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    r.set(s, i), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = a.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : o(s, i);
    }
  };
}, Le = "!", ar = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, o = t[0], s = t.length, i = (l) => {
    const d = [];
    let c = 0, m = 0, b;
    for (let g = 0; g < l.length; g++) {
      let j = l[g];
      if (c === 0) {
        if (j === o && (a || l.slice(g, g + s) === t)) {
          d.push(l.slice(m, g)), m = g + s;
          continue;
        }
        if (j === "/") {
          b = g;
          continue;
        }
      }
      j === "[" ? c++ : j === "]" && c--;
    }
    const x = d.length === 0 ? l : l.substring(m), f = x.startsWith(Le), v = f ? x.substring(1) : x, h = b && b > m ? b - m : void 0;
    return {
      modifiers: d,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: i
  }) : i;
}, nr = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, sr = (e) => ({
  cache: tr(e.cacheSize),
  parseClassName: ar(e),
  ...Ke(e)
}), or = /\s+/, lr = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: o
  } = t, s = [], i = e.trim().split(or);
  let l = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const c = i[d], {
      modifiers: m,
      hasImportantModifier: b,
      baseClassName: x,
      maybePostfixModifierPosition: f
    } = r(c);
    let v = !!f, h = a(v ? x.substring(0, f) : x);
    if (!h) {
      if (!v) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (h = a(x), !h) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const g = nr(m).join(":"), j = b ? g + Le : g, E = j + h;
    if (s.includes(E))
      continue;
    s.push(E);
    const R = o(h, v);
    for (let T = 0; T < R.length; ++T) {
      const M = R[T];
      s.push(j + M);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function ir() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Pe(t)) && (a && (a += " "), a += r);
  return a;
}
const Pe = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Pe(e[a])) && (r && (r += " "), r += t);
  return r;
};
function dr(e, ...t) {
  let r, a, o, s = i;
  function i(d) {
    const c = t.reduce((m, b) => b(m), e());
    return r = sr(c), a = r.cache.get, o = r.cache.set, s = l, l(d);
  }
  function l(d) {
    const c = a(d);
    if (c)
      return c;
    const m = lr(d, r);
    return o(d, m), m;
  }
  return function() {
    return s(ir.apply(null, arguments));
  };
}
const C = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Oe = /^\[(?:([a-z-]+):)?(.+)\]$/i, cr = /^\d+\/\d+$/, ur = /* @__PURE__ */ new Set(["px", "full", "screen"]), fr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, mr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, br = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, pr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, xr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (e) => re(e) || ur.has(e) || cr.test(e), q = (e) => ne(e, "length", Nr), re = (e) => !!e && !Number.isNaN(Number(e)), he = (e) => ne(e, "number", re), ie = (e) => !!e && Number.isInteger(Number(e)), hr = (e) => e.endsWith("%") && re(e.slice(0, -1)), k = (e) => Oe.test(e), X = (e) => fr.test(e), gr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), vr = (e) => ne(e, gr, $e), yr = (e) => ne(e, "position", $e), wr = /* @__PURE__ */ new Set(["image", "url"]), kr = (e) => ne(e, wr, zr), jr = (e) => ne(e, "", Vr), de = () => !0, ne = (e, t, r) => {
  const a = Oe.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, Nr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  mr.test(e) && !br.test(e)
), $e = () => !1, Vr = (e) => pr.test(e), zr = (e) => xr.test(e), Rr = () => {
  const e = C("colors"), t = C("spacing"), r = C("blur"), a = C("brightness"), o = C("borderColor"), s = C("borderRadius"), i = C("borderSpacing"), l = C("borderWidth"), d = C("contrast"), c = C("grayscale"), m = C("hueRotate"), b = C("invert"), x = C("gap"), f = C("gradientColorStops"), v = C("gradientColorStopPositions"), h = C("inset"), g = C("margin"), j = C("opacity"), E = C("padding"), R = C("saturate"), T = C("scale"), M = C("sepia"), $ = C("skew"), D = C("space"), U = C("translate"), S = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", k, t], z = () => [k, t], F = () => ["", W, q], H = () => ["auto", re, k], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", k], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], u = () => [re, k];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [de],
      spacing: [W, q],
      blur: ["none", "", X, k],
      brightness: u(),
      borderColor: [e],
      borderRadius: ["none", "", "full", X, k],
      borderSpacing: z(),
      borderWidth: F(),
      contrast: u(),
      grayscale: Y(),
      hueRotate: u(),
      invert: Y(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hr, q],
      inset: _(),
      margin: _(),
      opacity: u(),
      padding: z(),
      saturate: u(),
      scale: u(),
      sepia: Y(),
      skew: u(),
      space: z(),
      translate: z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", k]
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
        columns: [X]
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
        object: [...J(), k]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", ie, k]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: _()
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
        flex: ["1", "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ie, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [de]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ie, k]
        }, k]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [de]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ie, k]
        }, k]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", k]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Q()]
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
        content: ["normal", ...Q(), "baseline"]
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
        "place-content": [...Q(), "baseline"]
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
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [g]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [g]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [g]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [g]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [g]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [g]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [g]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [g]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [g]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
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
        "space-y": [D]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [k, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [X]
        }, X]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [k, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", X, q]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", he]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [de]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", re, he]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, k]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", k]
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
        "placeholder-opacity": [j]
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
        "text-opacity": [j]
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", W, q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, k]
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
        indent: z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k]
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
        content: ["none", k]
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
        "bg-opacity": [j]
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
        bg: [...J(), yr]
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
        bg: ["auto", "cover", "contain", vr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, kr]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
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
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
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
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [W, q]
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
        ring: F()
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
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [W, q]
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
        shadow: ["", "inner", "none", X, jr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [de]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [a]
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
        "drop-shadow": ["", "none", X, k]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
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
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [M]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [a]
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
        "backdrop-grayscale": [c]
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
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [M]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: u()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: u()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", k]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ie, k]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [$]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [$]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k]
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
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
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
        "will-change": ["auto", "scroll", "contents", "transform", k]
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
        stroke: [W, q, he]
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
}, Er = /* @__PURE__ */ dr(Rr);
function p(...e) {
  return Er(Me(e));
}
const Cr = w(
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
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg"
      }
    },
    defaultVariants: {
      size: "md",
      variant: "circle"
    }
  }
), Tr = y.forwardRef(
  ({ className: e, size: t, variant: r, src: a, alt: o, fallback: s, ...i }, l) => {
    const [d, c] = O(!1), m = () => {
      c(!0);
    }, b = () => {
      if (typeof s == "string")
        return s.slice(0, 2).toUpperCase();
      if (o) {
        const h = o.trim().split(/\s+/);
        if (h.length >= 2)
          return (h[0][0] + h[h.length - 1][0]).toUpperCase();
        if (h.length === 1 && h[0].length > 0)
          return h[0][0].toUpperCase();
      }
      return "?";
    }, x = a && !d, f = !x && !s, v = !x && s;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: l,
        className: p(Cr({ size: t, variant: r }), e),
        role: "img",
        "aria-label": o || "Avatar",
        ...i,
        children: [
          x && /* @__PURE__ */ n.jsx(
            "img",
            {
              src: a,
              alt: o,
              onError: m,
              className: "w-full h-full object-cover"
            }
          ),
          f && /* @__PURE__ */ n.jsx("div", { className: "flex w-full h-full items-center justify-center uppercase select-none", children: b() }),
          v && /* @__PURE__ */ n.jsx("div", { className: "flex w-full h-full items-center justify-center", children: typeof s == "string" ? /* @__PURE__ */ n.jsx("span", { children: s }) : s })
        ]
      }
    );
  }
);
Tr.displayName = "Avatar";
const Sr = w(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-background-dark disabled:cursor-not-allowed disabled:opacity-50 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 shadow-soft-sm border border-transparent",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 border border-transparent",
        outline: "bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20",
        ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 border border-transparent",
        link: "bg-transparent text-primary-500 hover:underline underline-offset-4 p-0 h-auto border-none dark:text-primary-400",
        danger: "bg-error-500 text-white hover:bg-error-600 dark:bg-error-500 dark:hover:bg-error-400 shadow-soft-sm border border-transparent"
      },
      size: {
        small: "text-xs h-8 px-3 rounded-lg",
        medium: "text-sm h-10 px-4 rounded-lg",
        large: "text-base h-12 px-6 rounded-lg",
        icon: "h-10 w-10 p-0 rounded-lg"
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto"
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full",
        none: "rounded-none",
        sm: "rounded-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      fullWidth: !1,
      rounded: "default"
    }
  }
), Ar = y.forwardRef(
  ({ className: e, variant: t, size: r, fullWidth: a, rounded: o, icon: s, iconPosition: i = "left", children: l, disabled: d, isLoading: c, ...m }, b) => {
    const x = !l && !!s;
    return /* @__PURE__ */ n.jsxs(
      "button",
      {
        ref: b,
        className: p(Sr({ variant: t, size: x ? "icon" : r, fullWidth: a, rounded: o }), e),
        disabled: d || c,
        "aria-busy": c,
        "aria-disabled": d || c,
        ...m,
        children: [
          c && /* @__PURE__ */ n.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ n.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ n.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          !c && s && i === "left" && /* @__PURE__ */ n.jsx(s, { className: "text-lg" }),
          l,
          !c && s && i === "right" && /* @__PURE__ */ n.jsx(s, { className: "text-lg" })
        ]
      }
    );
  }
);
Ar.displayName = "Button";
const _r = w(
  "flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 dark:border-neutral-700 rounded-lg",
        outlined: "border border-neutral-200 dark:border-neutral-700 rounded-lg",
        elevated: "shadow-soft-lg border-none rounded-lg",
        flat: "bg-neutral-50 dark:bg-neutral-900 border-none rounded-lg",
        glass: "bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 rounded-lg",
        premium: "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-3xl border border-white/60 shadow-soft-xl ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900/40 dark:border-neutral-700/60 dark:ring-white/10 rounded-lg"
      },
      hoverable: {
        true: "hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer",
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
), Mr = y.forwardRef(
  ({
    className: e,
    variant: t,
    hoverable: r,
    padding: a,
    title: o,
    headerAction: s,
    children: i,
    ...l
  }, d) => /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: d,
      className: p(_r({ variant: t, hoverable: r, padding: a }), e),
      ...l,
      children: [
        (o || s) && /* @__PURE__ */ n.jsxs("header", { className: p(
          "flex items-start justify-between gap-4",
          a === "none" ? "p-0" : a === "sm" ? "px-4 pt-4" : a === "lg" ? "px-8 pt-8" : "px-6 pt-6",
          a !== "none" && "border-b border-neutral-200 dark:border-neutral-700"
        ), children: [
          o && /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-bold text-neutral-900 dark:text-white", children: o }),
          s && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: s })
        ] }),
        /* @__PURE__ */ n.jsx("main", { className: p(
          "flex-1",
          a === "none" ? "p-0" : a
        ), children: i })
      ]
    }
  )
);
Mr.displayName = "Card";
const Ir = w(
  "list-none m-0 p-0 w-full bg-white dark:bg-neutral-800 rounded-lg overflow-hidden",
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
), Lr = w(
  "flex items-center gap-4 transition-colors",
  {
    variants: {
      dense: {
        true: "py-2 px-4 text-sm",
        false: "py-3 px-5"
      },
      clickable: {
        true: "cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/50",
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
), Pr = y.forwardRef(
  ({
    items: e,
    variant: t,
    onItemClick: r,
    className: a,
    ...o
  }, s) => {
    const i = (l) => {
      l.disabled || (l.onClick && l.onClick(), r && r(l));
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: s,
        className: p(Ir({ variant: t }), a),
        role: "list",
        ...o,
        children: e.map((l) => {
          const d = !!(l.onClick || r);
          return /* @__PURE__ */ n.jsxs(
            "li",
            {
              className: p(Lr({ dense: !1, clickable: d, disabled: l.disabled })),
              onClick: () => i(l),
              role: "listitem",
              "aria-disabled": l.disabled,
              children: [
                l.avatar && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0 w-10 h-10 rounded-full overflow-hidden flex items-center justify-center", children: l.avatar }),
                /* @__PURE__ */ n.jsx("div", { className: "flex-1 min-w-0", children: l.content }),
                l.action && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: l.action })
              ]
            },
            l.id
          );
        })
      }
    );
  }
);
Pr.displayName = "List";
const Or = w(
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
), $r = y.forwardRef(
  ({
    columns: e,
    data: t,
    variant: r,
    size: a,
    onRowClick: o,
    className: s,
    ...i
  }, l) => {
    const d = (c) => {
      o && o(c);
    };
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: l,
        className: p(Or({ variant: r, size: a }), s),
        role: "table",
        ...i,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "bg-neutral-50 dark:bg-neutral-900/50", children: /* @__PURE__ */ n.jsx("tr", { children: e.map((c) => /* @__PURE__ */ n.jsx(
            "th",
            {
              scope: "col",
              className: p(
                "p-4 font-semibold text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-200 dark:border-neutral-700 whitespace-nowrap",
                a === "sm" && "p-2",
                a === "lg" && "p-6",
                c.align === "center" && "text-center",
                c.align === "right" && "text-right",
                !c.align && "text-left"
              ),
              children: c.label
            },
            c.key
          )) }) }),
          /* @__PURE__ */ n.jsx("tbody", { className: "divide-y divide-neutral-200 dark:divide-neutral-700", children: t.map((c, m) => /* @__PURE__ */ n.jsx(
            "tr",
            {
              onClick: () => d(c),
              className: p(
                "transition-colors",
                o && "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
              ),
              children: e.map((b) => {
                const x = c[b.key];
                return /* @__PURE__ */ n.jsx(
                  "td",
                  {
                    className: p(
                      "p-4 text-neutral-700 dark:text-neutral-300 align-middle",
                      a === "sm" && "p-2",
                      a === "lg" && "p-6",
                      b.align === "center" && "text-center",
                      b.align === "right" && "text-right",
                      !b.align && "text-left"
                    ),
                    children: x
                  },
                  b.key
                );
              })
            },
            m
          )) })
        ]
      }
    );
  }
);
$r.displayName = "Table";
const Br = w(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 border",
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
), Fr = y.forwardRef(
  ({ className: e, variant: t, size: r, ...a }, o) => /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: o,
      className: p(Br({ variant: t, size: r }), e),
      ...a
    }
  )
);
Fr.displayName = "Badge";
const Gr = w(
  "w-full border rounded-lg bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors",
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
), Wr = y.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    variant: o,
    size: s,
    id: i,
    icon: l,
    iconPosition: d = "left",
    disabled: c,
    "aria-label": m,
    "aria-describedby": b,
    ...x
  }, f) => {
    const v = ae(), h = i || v, g = r ? `${h}-error` : void 0, j = a ? `${h}-helper` : void 0, E = [g, j, b].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ n.jsxs("div", { className: p("flex flex-col group w-full", e), children: [
      t && /* @__PURE__ */ n.jsxs(
        "label",
        {
          htmlFor: h,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            t,
            x.required && /* @__PURE__ */ n.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
        l && d === "left" && /* @__PURE__ */ n.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500", children: /* @__PURE__ */ n.jsx(l, { className: "text-lg" }) }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            ref: f,
            id: h,
            className: p(
              Gr({ variant: o, size: s, error: !!r }),
              l && d === "left" && "pl-10",
              l && d === "right" && "pr-10",
              c && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !r && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            "aria-label": m || t,
            "aria-invalid": r ? "true" : void 0,
            "aria-describedby": E,
            ...x
          }
        ),
        l && d === "right" && /* @__PURE__ */ n.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500", children: /* @__PURE__ */ n.jsx(l, { className: "text-lg" }) })
      ] }),
      r && /* @__PURE__ */ n.jsxs("span", { id: g, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        r
      ] }),
      a && !r && /* @__PURE__ */ n.jsx("span", { id: j, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: a })
    ] });
  }
);
Wr.displayName = "TextField";
const Dr = w(
  "w-full border rounded-lg bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors appearance-none cursor-pointer",
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
), Ur = y.forwardRef(
  ({
    className: e,
    label: t,
    options: r,
    error: a,
    helperText: o,
    variant: s,
    size: i,
    placeholder: l,
    id: d,
    disabled: c,
    "aria-label": m,
    "aria-describedby": b,
    ...x
  }, f) => {
    const v = ae(), h = d || v, g = a ? `${h}-error` : void 0, j = o ? `${h}-helper` : void 0, E = [g, j, b].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ n.jsxs("div", { className: p("flex flex-col w-full", e), children: [
      t && /* @__PURE__ */ n.jsxs(
        "label",
        {
          htmlFor: h,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: [
            t,
            x.required && /* @__PURE__ */ n.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ n.jsxs(
          "select",
          {
            ref: f,
            id: h,
            className: p(
              Dr({ variant: s, size: i, error: !!a }),
              c && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !a && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            "aria-label": m || t,
            "aria-invalid": a ? "true" : void 0,
            "aria-describedby": E,
            defaultValue: l ? "" : void 0,
            ...x,
            children: [
              l && /* @__PURE__ */ n.jsx("option", { value: "", disabled: !0, children: l }),
              r.map((R) => /* @__PURE__ */ n.jsx("option", { value: R.value, disabled: R.disabled, children: R.label }, R.value))
            ]
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500 dark:text-neutral-400", children: /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ n.jsx("path", { d: "M6 9L1 4h10z" }) }) })
      ] }),
      a && /* @__PURE__ */ n.jsx("span", { id: g, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 block", children: a }),
      o && !a && /* @__PURE__ */ n.jsx("span", { id: j, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: o })
    ] });
  }
);
Ur.displayName = "Dropdown";
const Hr = w(
  "rounded border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-colors appearance-none cursor-pointer",
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
), Yr = y.forwardRef(
  ({
    className: e,
    label: t,
    indeterminate: r,
    size: a,
    id: o,
    checked: s,
    disabled: i,
    "aria-label": l,
    "aria-describedby": d,
    onChange: c,
    ...m
  }, b) => {
    const x = ae(), f = o || x, v = te(null), h = b || v;
    return Z(() => {
      h.current && (h.current.indeterminate = r || !1);
    }, [r, h]), /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            ref: h,
            type: "checkbox",
            id: f,
            checked: s,
            disabled: i,
            onChange: c,
            "aria-label": l || t,
            "aria-checked": r ? "mixed" : s,
            "aria-describedby": d,
            className: p(
              Hr({ size: a }),
              s && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              !s && !r && "hover:border-primary-500 dark:hover:border-primary-400",
              r && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              i && "disabled:cursor-not-allowed disabled:opacity-50 disabled:checked:bg-neutral-400 disabled:border-neutral-300",
              e
            ),
            ...m
          }
        ),
        s && !r && /* @__PURE__ */ n.jsx(
          "svg",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ n.jsx("path", { d: "M11.6666 3.5L5.24992 9.91667L2.33325 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        ),
        r && /* @__PURE__ */ n.jsx(
          "svg",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ n.jsx("path", { d: "M2.33325 7H11.6666", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
          }
        )
      ] }),
      t && /* @__PURE__ */ n.jsx(
        "label",
        {
          htmlFor: f,
          className: p(
            "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
            i && "cursor-not-allowed opacity-60"
          ),
          children: t
        }
      )
    ] });
  }
);
Yr.displayName = "Checkbox";
const qr = w(
  "rounded-full border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-colors appearance-none cursor-pointer",
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
), Xr = y.forwardRef(
  ({
    className: e,
    label: t,
    size: r,
    id: a,
    checked: o,
    disabled: s,
    "aria-label": i,
    "aria-describedby": l,
    onChange: d,
    ...c
  }, m) => {
    const b = ae(), x = a || b;
    return /* @__PURE__ */ n.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ n.jsx(
          "input",
          {
            ref: m,
            type: "radio",
            id: x,
            checked: o,
            disabled: s,
            onChange: d,
            "aria-label": i || t,
            "aria-checked": o,
            "aria-describedby": l,
            className: p(
              qr({ size: r }),
              o && "border-primary-500 dark:border-primary-500",
              !o && "hover:border-primary-500 dark:hover:border-primary-400",
              s && "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-300",
              e
            ),
            ...c
          }
        ),
        o && /* @__PURE__ */ n.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-primary-500 opacity-100" })
      ] }),
      t && /* @__PURE__ */ n.jsx(
        "label",
        {
          htmlFor: x,
          className: p(
            "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
            s && "cursor-not-allowed opacity-60"
          ),
          children: t
        }
      )
    ] });
  }
);
Xr.displayName = "Radio";
const Jr = w(
  "relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 cursor-pointer",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        md: "h-6 w-11",
        lg: "h-8 w-14"
      },
      checked: {
        true: "bg-primary-500",
        false: "bg-neutral-200 dark:bg-neutral-700"
      },
      disabled: {
        true: "opacity-60 cursor-not-allowed",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      checked: !1,
      disabled: !1
    }
  }
), Kr = w(
  "pointer-events-none inline-block rounded-full bg-white shadow-soft-sm ring-0 transition-transform duration-200 ease-in-out",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-7 w-7"
      },
      checked: {
        true: "",
        false: "translate-x-0"
      }
    },
    defaultVariants: {
      size: "md",
      checked: !1
    }
  }
), Zr = y.forwardRef(
  ({ className: e, checked: t, disabled: r, onChange: a, label: o, labelPosition: s = "right", size: i, id: l, ...d }, c) => {
    const m = ae(), b = l || m, x = (g) => {
      r || a == null || a(g);
    }, f = t ?? !1, v = r ?? !1, h = i === "sm" ? "translate-x-3" : i === "lg" ? "translate-x-6" : "translate-x-5";
    return /* @__PURE__ */ n.jsxs("label", { htmlFor: b, className: p("flex items-center gap-3", v && "cursor-not-allowed"), children: [
      o && s === "left" && /* @__PURE__ */ n.jsx("span", { className: p("text-sm font-medium text-neutral-700 dark:text-neutral-300", v && "opacity-60"), children: o }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "checkbox",
          id: b,
          ref: c,
          checked: f,
          disabled: v,
          onChange: x,
          className: "sr-only",
          role: "switch",
          "aria-checked": f,
          "aria-label": o,
          ...d
        }
      ),
      /* @__PURE__ */ n.jsx("div", { className: p(Jr({ checked: f, disabled: v, size: i }), e), children: /* @__PURE__ */ n.jsx(
        "span",
        {
          className: p(
            Kr({ size: i }),
            f ? h : "translate-x-0"
          )
        }
      ) }),
      o && s === "right" && /* @__PURE__ */ n.jsx("span", { className: p("text-sm font-medium text-neutral-700 dark:text-neutral-300", v && "opacity-60"), children: o })
    ] });
  }
);
Zr.displayName = "Switch";
const Qr = w(
  "relative flex items-center w-full touch-action-none select-none",
  {
    variants: {
      size: {
        sm: "h-4",
        md: "h-5",
        lg: "h-6"
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
), et = w(
  "relative w-full rounded-full bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-1.5",
        lg: "h-2"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), rt = w(
  "absolute h-full rounded-full bg-primary-500"
), tt = w(
  "block rounded-full bg-white shadow-soft-sm border border-neutral-300 dark:bg-primary-500 dark:border-primary-400 transition-transform duration-100 ease-in-out transform scale-100",
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5"
      },
      focused: {
        true: "scale-110 ring-2 ring-primary-500/30",
        false: ""
      },
      active: {
        true: "scale-110 ring-2 ring-primary-500/30",
        false: ""
      }
    },
    defaultVariants: {
      size: "md",
      focused: !1,
      active: !1
    }
  }
), at = y.forwardRef(
  ({ className: e, value: t, defaultValue: r = 0, min: a = 0, max: o = 100, step: s = 1, onChange: i, disabled: l = !1, size: d, ...c }, m) => {
    const [b, x] = O(r), f = typeof t == "number", v = f ? t : b, h = te(null), [g, j] = O(!1), [E, R] = O(!1), M = P((S) => (S - a) / (o - a) * 100, [a, o])(v), $ = P(
      (S) => {
        const N = Math.max(a, Math.min(o, S)), _ = Math.round(N / s) * s;
        f || x(_), i == null || i(_);
      },
      [a, o, s, f, i]
    ), D = P((S) => {
      if (l) return;
      R(!0), S.preventDefault();
      const N = (z) => {
        if (!h.current) return;
        const { left: F, width: H } = h.current.getBoundingClientRect(), G = (z.clientX - F) / H, K = a + G * (o - a);
        $(K);
      }, _ = () => {
        R(!1), document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", _);
      };
      document.addEventListener("mousemove", N), document.addEventListener("mouseup", _);
    }, [l, a, o, $]), U = P(
      (S) => {
        if (l) return;
        let N = v;
        S.key === "ArrowRight" || S.key === "ArrowUp" ? N = v + s : (S.key === "ArrowLeft" || S.key === "ArrowDown") && (N = v - s), N !== v && (S.preventDefault(), $(N));
      },
      [l, v, s, $]
    );
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: h,
        className: p(Qr({ disabled: l, size: d }), e),
        onMouseDown: D,
        tabIndex: l ? -1 : 0,
        role: "slider",
        "aria-valuenow": v,
        "aria-valuemin": a,
        "aria-valuemax": o,
        "aria-label": c["aria-label"] || "Slider",
        "aria-disabled": l || void 0,
        onFocus: () => j(!0),
        onBlur: () => j(!1),
        onKeyDown: U,
        children: [
          /* @__PURE__ */ n.jsxs("div", { className: et({ size: d }), children: [
            /* @__PURE__ */ n.jsx("div", { className: rt(), style: { width: `${M}%` } }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: p(tt({ size: d, focused: g, active: E })),
                style: { left: `${M}%`, transform: `translateX(-${M}%)` }
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx(
            "input",
            {
              ref: m,
              type: "range",
              min: a,
              max: o,
              step: s,
              value: v,
              onChange: (S) => $(Number(S.target.value)),
              disabled: l || void 0,
              className: "sr-only",
              "aria-valuemin": a,
              "aria-valuemax": o,
              "aria-valuenow": v,
              "aria-label": c["aria-label"] || "Slider"
            }
          )
        ]
      }
    );
  }
);
at.displayName = "Slider";
const nt = w(
  "w-full border rounded-lg bg-white dark:bg-input-bg-dark text-text-primary-light dark:text-text-primary-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-colors resize-y",
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
), st = y.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    variant: o,
    size: s,
    id: i,
    disabled: l,
    "aria-label": d,
    "aria-describedby": c,
    ...m
  }, b) => {
    const x = ae(), f = i || x, v = r ? `${f}-error` : void 0, h = a ? `${f}-helper` : void 0, g = [v, h, c].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ n.jsxs("div", { className: p("flex flex-col group w-full", e), children: [
      t && /* @__PURE__ */ n.jsxs(
        "label",
        {
          htmlFor: f,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            t,
            m.required && /* @__PURE__ */ n.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "textarea",
        {
          ref: b,
          id: f,
          className: p(
            nt({ variant: o, size: s, error: !!r }),
            l && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !r && "hover:border-neutral-300 dark:hover:border-neutral-600"
          ),
          "aria-label": d || t,
          "aria-invalid": r ? "true" : void 0,
          "aria-describedby": g,
          ...m
        }
      ),
      r && /* @__PURE__ */ n.jsxs("span", { id: v, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        r
      ] }),
      a && !r && /* @__PURE__ */ n.jsx("span", { id: h, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: a })
    ] });
  }
);
st.displayName = "TextArea";
var Be = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Te = y.createContext && /* @__PURE__ */ y.createContext(Be), ot = ["attr", "size", "title"];
function lt(e, t) {
  if (e == null) return {};
  var r = it(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      a = s[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function it(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fe.apply(this, arguments);
}
function Se(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Se(Object(r), !0).forEach(function(a) {
      dt(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Se(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function dt(e, t, r) {
  return t = ct(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ct(e) {
  var t = ut(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ut(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fe(e) {
  return e && e.map((t, r) => /* @__PURE__ */ y.createElement(t.tag, me({
    key: r
  }, t.attr), Fe(t.child)));
}
function B(e) {
  return (t) => /* @__PURE__ */ y.createElement(ft, fe({
    attr: me({}, e.attr)
  }, t), Fe(e.child));
}
function ft(e) {
  var t = (r) => {
    var {
      attr: a,
      size: o,
      title: s
    } = e, i = lt(e, ot), l = o || r.size || "1em", d;
    return r.className && (d = r.className), e.className && (d = (d ? d + " " : "") + e.className), /* @__PURE__ */ y.createElement("svg", fe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, i, {
      className: d,
      style: me(me({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), s && /* @__PURE__ */ y.createElement("title", null, s), e.children);
  };
  return Te !== void 0 ? /* @__PURE__ */ y.createElement(Te.Consumer, null, (r) => t(r)) : t(Be);
}
function Ge(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function mt(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function ge(e) {
  return B({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(e);
}
function ue(e) {
  return B({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function bt(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function pt(e) {
  return B({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function xt(e) {
  return B({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(e);
}
function We(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function be(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function ke(e) {
  return B({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function ht(e) {
  return B({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" }, child: [] }] })(e);
}
const gt = w(
  "w-full border-2 border-dashed rounded-lg bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors cursor-pointer",
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
), vt = y.forwardRef(
  ({
    className: e,
    label: t,
    helperText: r,
    error: a,
    variant: o,
    size: s,
    multiple: i = !1,
    accept: l,
    onFileChange: d,
    id: c,
    "aria-label": m,
    "aria-describedby": b,
    ...x
  }, f) => {
    const v = y.useId(), h = c || v, g = a ? `${h}-error` : void 0, j = r ? `${h}-helper` : void 0, E = [g, j, b].filter(Boolean).join(" ") || void 0, [R, T] = O([]), M = te(null), $ = P((N) => {
      const _ = Array.from(N.target.files || []);
      T(_), d == null || d(_);
    }, [d]), D = P((N) => {
      N.preventDefault(), N.stopPropagation();
      const _ = Array.from(N.dataTransfer.files);
      T(_), d == null || d(_);
    }, [d]), U = P((N) => {
      N.preventDefault(), N.stopPropagation();
    }, []), S = P((N) => {
      T((_) => {
        const z = _.filter((F) => F !== N);
        return d == null || d(z), z;
      }), M.current && (M.current.value = "");
    }, [d]);
    return /* @__PURE__ */ n.jsxs("div", { className: p("flex flex-col w-full", e), children: [
      t && /* @__PURE__ */ n.jsx(
        "label",
        {
          htmlFor: h,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: t
        }
      ),
      /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: p(
            gt({ variant: o, size: s }),
            a && "border-error-500 hover:border-error-500",
            e
          ),
          onDrop: D,
          onDragOver: U,
          onClick: () => {
            var N;
            return (N = M.current) == null ? void 0 : N.click();
          },
          children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                id: h,
                ref: (N) => {
                  typeof f == "function" && f(N), M.current = N;
                },
                type: "file",
                multiple: i,
                accept: l,
                onChange: $,
                className: "sr-only",
                "aria-label": m || t,
                "aria-describedby": E,
                ...x
              }
            ),
            /* @__PURE__ */ n.jsx(ht, { className: "text-primary-500 text-3xl mb-3" }),
            /* @__PURE__ */ n.jsxs("p", { className: "text-sm text-neutral-600 dark:text-neutral-300 text-center", children: [
              /* @__PURE__ */ n.jsx("span", { className: "font-semibold text-primary-500 dark:text-primary-400", children: "Click to upload" }),
              " or drag and drop"
            ] }),
            r && !a && /* @__PURE__ */ n.jsx("p", { className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1 text-center", children: r })
          ]
        }
      ),
      R.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "mt-4 space-y-2", children: R.map((N, _) => /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ n.jsx(xt, { className: "text-neutral-500 dark:text-neutral-400" }),
              /* @__PURE__ */ n.jsx("span", { className: "text-sm text-neutral-700 dark:text-neutral-300 truncate", children: N.name }),
              /* @__PURE__ */ n.jsxs("span", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: [
                "(",
                (N.size / 1024).toFixed(2),
                " KB)"
              ] })
            ] }),
            /* @__PURE__ */ n.jsx(
              "button",
              {
                type: "button",
                onClick: () => S(N),
                className: "text-neutral-500 hover:text-error-500 transition-colors",
                "aria-label": `Remove ${N.name}`,
                children: /* @__PURE__ */ n.jsx(be, { className: "text-lg" })
              }
            )
          ]
        },
        N.name + _
      )) }),
      a && /* @__PURE__ */ n.jsxs("span", { id: g, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ n.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        a
      ] }),
      r && a && /* @__PURE__ */ n.jsx("span", { id: j, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: r })
    ] });
  }
);
vt.displayName = "FileUpload";
const yt = w(
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
), wt = y.forwardRef(
  ({ className: e, variant: t, centered: r, as: a = "div", ...o }, s) => /* @__PURE__ */ n.jsx(
    a,
    {
      ref: s,
      className: p(yt({ variant: t, centered: r, className: e })),
      ...o
    }
  )
);
wt.displayName = "Container";
const kt = w(
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
), jt = y.forwardRef(
  ({ className: e, cols: t, gap: r, align: a, justify: o, padding: s, margin: i, as: l = "div", ...d }, c) => /* @__PURE__ */ n.jsx(
    l,
    {
      ref: c,
      className: p(kt({ cols: t, gap: r, align: a, justify: o, padding: s, margin: i, className: e })),
      ...d
    }
  )
);
jt.displayName = "Grid";
const Nt = w(
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
), Vt = y.forwardRef(
  ({ className: e, direction: t, gap: r, align: a, justify: o, wrap: s, fullWidth: i, padding: l, margin: d, as: c = "div", ...m }, b) => /* @__PURE__ */ n.jsx(
    c,
    {
      ref: b,
      className: p(Nt({ direction: t, gap: r, align: a, justify: o, wrap: s, fullWidth: i, padding: l, margin: d, className: e })),
      ...m
    }
  )
);
Vt.displayName = "Stack";
const zt = w(
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
), Rt = y.forwardRef(
  ({ className: e, orientation: t, variant: r, label: a, labelPosition: o = "center", ...s }, i) => a && t === "horizontal" ? /* @__PURE__ */ n.jsxs("div", { className: p("flex items-center w-full my-4", e), ref: i, ...s, children: [
    /* @__PURE__ */ n.jsx("div", { className: p(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      r === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      r === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      o === "left" && "flex-none w-8",
      o === "right" && "flex-1"
    ) }),
    /* @__PURE__ */ n.jsx("span", { className: "px-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap", children: a }),
    /* @__PURE__ */ n.jsx("div", { className: p(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      r === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      r === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      o === "right" && "flex-none w-8",
      o === "left" && "flex-1"
    ) })
  ] }) : /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: i,
      className: p(zt({ orientation: t, variant: r, className: e })),
      ...s
    }
  )
);
Rt.displayName = "Divider";
const Et = y.forwardRef(
  ({ className: e, size: t = 16, axis: r = "vertical", flex: a = !1, style: o, ...s }, i) => {
    const l = r === "horizontal" ? t : 1, d = r === "vertical" ? t : 1;
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: i,
        className: p(
          "shrink-0",
          a && "flex-1",
          e
        ),
        style: {
          width: typeof l == "number" ? `${l}px` : l,
          height: typeof d == "number" ? `${d}px` : d,
          minWidth: r === "horizontal" && !a ? typeof l == "number" ? `${l}px` : l : void 0,
          minHeight: r === "vertical" && !a ? typeof d == "number" ? `${d}px` : d : void 0,
          ...o
        },
        ...s
      }
    );
  }
);
Et.displayName = "Spacer";
const Ct = w(
  "flex",
  {
    variants: {
      orientation: {
        horizontal: "flex-row items-center gap-1",
        vertical: "flex-col gap-1 w-full"
      },
      variant: {
        default: "",
        pills: "p-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl",
        tabs: "border-b border-neutral-200 dark:border-neutral-700 gap-6"
      }
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default"
    }
  }
), Ae = w(
  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 select-none outline-none",
  {
    variants: {
      active: {
        true: "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20",
        false: "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white"
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
        false: "cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500/50"
      },
      variant: {
        default: "",
        pills: "",
        // Handled by container
        tabs: "rounded-none border-b-2 border-transparent px-1 py-3 hover:bg-transparent hover:text-primary-600 dark:hover:text-primary-400"
      }
    },
    compoundVariants: [
      {
        variant: "pills",
        active: !0,
        className: "bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-sm"
      },
      {
        variant: "pills",
        active: !1,
        className: "hover:bg-white/50 dark:hover:bg-neutral-700/50"
      },
      {
        variant: "tabs",
        active: !0,
        className: "bg-transparent border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400"
      }
    ],
    defaultVariants: {
      active: !1,
      disabled: !1,
      variant: "default"
    }
  }
), ja = ({
  items: e,
  activeItem: t,
  orientation: r,
  variant: a,
  className: o,
  onItemClick: s
}) => /* @__PURE__ */ n.jsx("nav", { className: p(Ct({ orientation: r, variant: a, className: o })), children: e.map((i) => {
  const l = t === i.id || t === i.href, d = i.icon && typeof i.icon == "function" ? y.createElement(i.icon, { className: p("text-lg", l ? "text-current" : "text-neutral-400 dark:text-neutral-500 group-hover:text-current") }) : i.icon, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    d && /* @__PURE__ */ n.jsx("span", { className: "flex items-center justify-center w-5 h-5", children: d }),
    /* @__PURE__ */ n.jsx("span", { className: "truncate", children: i.label }),
    i.badge && /* @__PURE__ */ n.jsx("span", { className: "ml-auto flex items-center justify-center h-5 px-1.5 text-[10px] font-bold rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300", children: i.badge })
  ] }), m = (b) => {
    var x;
    if (i.disabled) {
      b.preventDefault();
      return;
    }
    (x = i.onClick) == null || x.call(i), s == null || s(i);
  };
  return i.href ? /* @__PURE__ */ n.jsx(
    "a",
    {
      href: i.href,
      onClick: m,
      className: p(Ae({ active: l, disabled: i.disabled, variant: a }), "group"),
      "aria-current": l ? "page" : void 0,
      children: c
    },
    i.id
  ) : /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: m,
      disabled: i.disabled,
      className: p(Ae({ active: l, disabled: i.disabled, variant: a }), "w-full text-left group"),
      type: "button",
      children: c
    },
    i.id
  );
}) }), Tt = w(
  "flex items-center gap-1 border-b border-neutral-200 dark:border-neutral-700"
), St = w(
  "flex items-center justify-center gap-2 px-4 py-2 text-base font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500/50",
  {
    variants: {
      variant: {
        default: "border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800",
        underlined: "border-b-2 border-transparent text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-800",
        pills: "rounded-full text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
      },
      active: {
        true: "",
        false: ""
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-neutral-500",
        false: "cursor-pointer"
      }
    },
    compoundVariants: [
      {
        variant: "default",
        active: !0,
        className: "border-primary-500 text-primary-500 hover:text-primary-500 hover:bg-transparent dark:text-primary-400 dark:hover:text-primary-400 dark:hover:bg-transparent"
      },
      {
        variant: "underlined",
        active: !0,
        className: "border-primary-500 text-primary-500 hover:text-primary-500 hover:bg-transparent dark:text-primary-400 dark:hover:text-primary-400 dark:hover:bg-transparent"
      },
      {
        variant: "pills",
        active: !0,
        className: "bg-primary-500 text-white hover:bg-primary-600 hover:text-white dark:bg-primary-500 dark:text-white dark:hover:bg-primary-400"
      }
    ],
    defaultVariants: {
      variant: "default",
      active: !1,
      disabled: !1
    }
  }
), At = y.forwardRef(
  ({
    items: e,
    value: t,
    onValueChange: r,
    variant: a = "default",
    className: o,
    ...s
  }, i) => {
    const l = (c, m) => {
      m || r(c);
    }, d = e.find((c) => c.value === t);
    return /* @__PURE__ */ n.jsxs("div", { ref: i, className: p("flex flex-col w-full", o), ...s, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": "Tabs",
          className: p(
            Tt(),
            a === "pills" && "border-b-0 gap-1"
          ),
          children: e.map((c) => {
            const m = t === c.value;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": m,
                "aria-controls": `tabpanel-${c.value}`,
                id: `tab-${c.value}`,
                onClick: () => l(c.value, c.disabled),
                tabIndex: c.disabled ? -1 : m ? 0 : -1,
                disabled: c.disabled,
                "aria-disabled": c.disabled,
                className: p(St({ variant: a, active: m, disabled: c.disabled })),
                children: [
                  c.icon && /* @__PURE__ */ n.jsx("span", { className: "text-lg", children: c.icon }),
                  /* @__PURE__ */ n.jsx("span", { children: c.label })
                ]
              },
              c.value
            );
          })
        }
      ),
      d && d.content && /* @__PURE__ */ n.jsx(
        "div",
        {
          id: `tabpanel-${d.value}`,
          role: "tabpanel",
          "aria-labelledby": `tab-${d.value}`,
          className: "py-4 w-full text-neutral-600 dark:text-neutral-300",
          children: d.content
        }
      )
    ] });
  }
);
At.displayName = "Tabs";
const _t = w(
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
), Mt = w(
  "flex items-center justify-center min-w-[40px] h-10 px-2 text-sm font-medium rounded-lg transition-colors duration-200 border",
  {
    variants: {
      variant: {
        page: "bg-transparent border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-primary-500 hover:border-primary-500 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800",
        ellipsis: "border-transparent text-neutral-500 dark:text-neutral-400 cursor-default"
      },
      active: {
        true: "bg-white border-primary-500 text-primary-500 font-semibold dark:bg-neutral-800 dark:border-primary-500 dark:text-primary-400",
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
        className: "hover:bg-white dark:hover:bg-neutral-800"
      }
    ],
    defaultVariants: {
      variant: "page",
      active: !1,
      disabled: !1
    }
  }
), It = y.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    onPageChange: r,
    showFirstLast: a = !1,
    showPrevNext: o = !0,
    size: s,
    className: i,
    ...l
  }, d) => {
    const c = () => {
      const f = [], h = Math.floor(2.5);
      if (t <= 5)
        return Array.from({ length: t }, (g, j) => j + 1);
      if (e <= h + 1) {
        for (let g = 1; g <= 4; g += 1) f.push(g);
        f.push("ellipsis"), f.push(t);
      } else if (e >= t - h) {
        f.push(1), f.push("ellipsis");
        for (let g = t - 5 + 2; g <= t; g += 1) f.push(g);
      } else {
        f.push(1), f.push("ellipsis");
        for (let g = e - Math.floor(1); g <= e + Math.floor(1); g += 1) f.push(g);
        f.push("ellipsis"), f.push(t);
      }
      return f;
    }, m = (f) => {
      f >= 1 && f <= t && f !== e && r(f);
    };
    if (t <= 1) return null;
    const b = ({
      page: f,
      label: v,
      icon: h,
      disabled: g = !1
    }) => {
      const j = f === "ellipsis", E = f === e, R = typeof f == "number" ? `page-${f}` : `item-${v}`, T = {
        className: p(Mt({ variant: j ? "ellipsis" : "page", active: E, disabled: g })),
        "aria-label": v,
        "aria-current": E ? "page" : void 0,
        "aria-disabled": g
      };
      if (j)
        return /* @__PURE__ */ n.jsx("span", { ...T, children: "..." }, R);
      const M = h || f;
      return /* @__PURE__ */ n.jsx("button", { type: "button", onClick: () => typeof f == "number" && m(f), disabled: g, ...T, children: M }, R);
    }, x = c();
    return /* @__PURE__ */ n.jsxs(
      "nav",
      {
        ref: d,
        className: p(_t({ size: s }), i),
        "aria-label": "Pagination",
        ...l,
        children: [
          a && b({ page: 1, label: "First page", icon: /* @__PURE__ */ n.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ n.jsx(ge, { size: 12 }),
            /* @__PURE__ */ n.jsx(ge, { size: 12, className: "-ml-1" })
          ] }), disabled: e === 1 }),
          o && b({ page: Math.max(1, e - 1), label: "Previous page", icon: /* @__PURE__ */ n.jsx(ge, { size: 14 }), disabled: e === 1 }),
          x.map((f, v) => b({ page: f, label: f === "ellipsis" ? `ellipsis-${v}` : `Page ${f}` })),
          o && b({ page: Math.min(t, e + 1), label: "Next page", icon: /* @__PURE__ */ n.jsx(ue, { size: 14 }), disabled: e === t }),
          a && b({ page: t, label: "Last page", icon: /* @__PURE__ */ n.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ n.jsx(ue, { size: 12 }),
            /* @__PURE__ */ n.jsx(ue, { size: 12, className: "-ml-1" })
          ] }), disabled: e === t })
        ]
      }
    );
  }
);
It.displayName = "Pagination";
const Lt = y.forwardRef(
  ({ items: e, separator: t = /* @__PURE__ */ n.jsx(ue, { className: "text-neutral-400 dark:text-neutral-500 mx-2 text-xs" }), className: r, ...a }, o) => /* @__PURE__ */ n.jsx("nav", { "aria-label": "breadcrumb", className: p("flex", r), ref: o, ...a, children: /* @__PURE__ */ n.jsx("ol", { className: "flex items-center space-x-0", children: e.map((s, i) => /* @__PURE__ */ n.jsxs("li", { className: "flex items-center", children: [
    s.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: s.href,
        onClick: s.onClick,
        className: "text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
        children: s.label
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "text-sm font-medium text-neutral-800 dark:text-neutral-200", children: s.label }),
    i < e.length - 1 && t
  ] }, i)) }) })
);
Lt.displayName = "Breadcrumb";
const Pt = w(
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
), Ot = w(
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
), $t = w(
  "flex items-center justify-center rounded-full font-bold transition-all duration-200 flex-shrink-0",
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
), Bt = y.forwardRef(
  ({ steps: e, currentStep: t, orientation: r = "horizontal", size: a = "md", className: o, ...s }, i) => /* @__PURE__ */ n.jsx("div", { ref: i, className: p(Pt({ orientation: r, className: o })), ...s, children: e.map((l, d) => {
    const c = d < t ? "completed" : d === t ? "active" : "upcoming", m = d === e.length - 1;
    return /* @__PURE__ */ n.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: p(Ot({ orientation: r, status: c })), children: [
        /* @__PURE__ */ n.jsx("div", { className: p($t({ size: a, status: c })), children: c === "completed" ? /* @__PURE__ */ n.jsx(mt, { className: "text-white" }) : d + 1 }),
        /* @__PURE__ */ n.jsxs("div", { className: p(
          r === "horizontal" ? "mt-2" : "ml-3 text-left"
        ), children: [
          /* @__PURE__ */ n.jsx("div", { className: "font-medium text-sm", children: l.label }),
          l.description && /* @__PURE__ */ n.jsx("div", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: l.description })
        ] })
      ] }),
      !m && /* @__PURE__ */ n.jsx("div", { className: p(
        "flex-1",
        r === "horizontal" && "h-[2px] bg-neutral-200 dark:bg-neutral-700 mx-2",
        r === "vertical" && "w-[2px] bg-neutral-200 dark:bg-neutral-700 my-2 ml-[19px]"
      ) })
    ] }, d);
  }) })
);
Bt.displayName = "Stepper";
const Ft = w(
  "fixed inset-0 z-50 transition-transform duration-300 ease-in-out bg-white dark:bg-neutral-900 shadow-xl",
  {
    variants: {
      open: {
        true: "translate-x-0 translate-y-0",
        false: ""
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
), Gt = w(
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
), Wt = y.forwardRef(
  ({ className: e, open: t, onClose: r, position: a = "left", title: o, children: s, ...i }, l) => {
    const d = te(null);
    y.useImperativeHandle(l, () => d.current);
    const c = P(() => {
      r();
    }, [r]), m = P(
      (b) => {
        b.key === "Escape" && c();
      },
      [c]
    );
    return Z(() => (t ? document.addEventListener("keydown", m) : document.removeEventListener("keydown", m), () => {
      document.removeEventListener("keydown", m);
    }), [t, m]), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx("div", { className: p(Gt({ open: t })), onClick: c }),
      /* @__PURE__ */ n.jsxs(
        "div",
        {
          ref: d,
          className: p(
            Ft({ open: t, position: a, className: e })
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": o ? "drawer-title" : void 0,
          ...i,
          children: [
            /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
              o && /* @__PURE__ */ n.jsx("h3", { id: "drawer-title", className: "text-lg font-semibold text-neutral-900 dark:text-white", children: o }),
              /* @__PURE__ */ n.jsx(
                "button",
                {
                  onClick: c,
                  className: "p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
                  "aria-label": "Close drawer",
                  children: /* @__PURE__ */ n.jsx(ke, { className: "text-neutral-500 dark:text-neutral-400 text-lg" })
                }
              )
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "p-4 flex-1 overflow-y-auto", children: s })
          ]
        }
      )
    ] });
  }
);
Wt.displayName = "Drawer";
const Dt = w(
  "flex items-center gap-3 p-4 rounded-lg shadow-soft-lg border bg-white dark:bg-neutral-800 min-w-[300px] max-w-[500px] transition-all duration-300 pointer-events-auto",
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
), Ut = (e) => {
  switch (e) {
    case "success":
      return /* @__PURE__ */ n.jsx(Ge, { className: "text-success-500 dark:text-success-400 text-xl" });
    case "error":
      return /* @__PURE__ */ n.jsx(be, { className: "text-error-500 dark:text-error-400 text-xl" });
    case "warning":
      return /* @__PURE__ */ n.jsx(bt, { className: "text-warning-500 dark:text-warning-400 text-xl" });
    default:
      return /* @__PURE__ */ n.jsx(We, { className: "text-info-500 dark:text-info-400 text-xl" });
  }
}, Ht = ({
  id: e,
  message: t,
  type: r = "info",
  duration: a = 3e3,
  position: o = "top-right",
  onClose: s
}) => {
  const [i, l] = O(!1), [d, c] = O(!1);
  Z(() => {
    const x = requestAnimationFrame(() => {
      c(!0);
    });
    if (a > 0) {
      const f = setTimeout(() => {
        c(!1), l(!0), setTimeout(() => {
          s(e);
        }, 300);
      }, a);
      return () => {
        clearTimeout(f), cancelAnimationFrame(x);
      };
    }
    return () => cancelAnimationFrame(x);
  }, [a, e, s]);
  const m = () => {
    c(!1), l(!0), setTimeout(() => {
      s(e);
    }, 300);
  }, b = () => d && !i ? "translate-x-0 translate-y-0" : o != null && o.includes("top") ? "-translate-y-full opacity-0" : o != null && o.includes("bottom") ? "translate-y-full opacity-0" : "translate-x-full opacity-0";
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: p(
        Dt({ variant: r }),
        b(),
        d && !i ? "opacity-100" : "opacity-0"
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: Ut(r) }),
        /* @__PURE__ */ n.jsx("div", { className: "flex-1 text-sm font-medium", children: t }),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            onClick: m,
            "aria-label": "Close toast",
            className: "flex-shrink-0 rounded p-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ n.jsx(ke, { className: "text-sm opacity-70" })
          }
        )
      ]
    }
  );
}, Yt = w(
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
), De = He(void 0), Na = ({ children: e, position: t = "top-right" }) => {
  const [r, a] = O([]), o = P((d) => {
    const c = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, m = d.position || t, b = {
      ...d,
      id: c,
      position: m
    };
    a((x) => [...x, b]);
  }, [t]), s = P((d) => {
    a((c) => c.filter((m) => m.id !== d));
  }, []), i = je(() => r.reduce((d, c) => {
    const m = c.position || t;
    return d[m] || (d[m] = []), d[m].push(c), d;
  }, {}), [r, t]), l = je(() => ({ showToast: o, removeToast: s }), [o, s]);
  return /* @__PURE__ */ n.jsxs(De.Provider, { value: l, children: [
    e,
    Object.entries(i).map(([d, c]) => /* @__PURE__ */ n.jsx(
      "div",
      {
        className: p(Yt({ position: d })),
        children: c.map((m) => /* @__PURE__ */ n.jsx(
          Ht,
          {
            ...m,
            onClose: s
          },
          m.id
        ))
      },
      d
    ))
  ] });
}, Va = () => {
  const e = Ye(De);
  if (e === void 0)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, qt = w(
  "fixed inset-0 z-50 flex items-center justify-center p-4",
  {
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
  }
), Xt = w(
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-300"
), Jt = y.forwardRef(
  ({
    open: e,
    onClose: t,
    title: r,
    description: a,
    footer: o,
    size: s,
    closeOnOverlayClick: i = !0,
    closeOnEscape: l = !0,
    className: d,
    children: c,
    ...m
  }, b) => {
    const [x, f] = O(!1), [v, h] = O(!1);
    Z(() => {
      h(!0);
    }, []);
    const g = P(() => {
      f(!0), setTimeout(() => {
        f(!1), t();
      }, 300);
    }, [t]);
    Z(() => {
      if (e) {
        const R = (T) => {
          l && T.key === "Escape" && g();
        };
        return document.addEventListener("keydown", R), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", R), document.body.style.overflow = "";
        };
      }
    }, [e, l, g]);
    const j = (R) => {
      i && R.target === R.currentTarget && g();
    };
    if (!v || !e && !x) return null;
    const E = /* @__PURE__ */ n.jsx(
      "div",
      {
        className: p(
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          x ? "opacity-0" : "opacity-100"
        ),
        onClick: j,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": r ? "modal-title" : void 0,
        "aria-describedby": a ? "modal-description" : void 0,
        children: /* @__PURE__ */ n.jsxs(
          "div",
          {
            ref: b,
            className: p(
              qt({ size: s }),
              Xt(),
              x ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
              d
            ),
            onClick: (R) => R.stopPropagation(),
            ...m,
            children: [
              (r || l) && /* @__PURE__ */ n.jsxs("header", { className: "flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4", children: [
                r && /* @__PURE__ */ n.jsx("h2", { id: "modal-title", className: "text-xl font-semibold text-neutral-900 dark:text-white", children: r }),
                l && /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    onClick: g,
                    "aria-label": "Close modal",
                    className: "flex items-center justify-center rounded-md p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
                    children: /* @__PURE__ */ n.jsx(ke, { className: "text-lg" })
                  }
                )
              ] }),
              a && /* @__PURE__ */ n.jsx("p", { id: "modal-description", className: "px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400", children: a }),
              /* @__PURE__ */ n.jsx("main", { className: "flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300", children: c }),
              o && /* @__PURE__ */ n.jsx("footer", { className: "flex items-center justify-end gap-2 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4", children: o })
            ]
          }
        )
      }
    );
    return qe(E, document.body);
  }
);
Jt.displayName = "Modal";
const Kt = w(
  "flex items-center justify-between h-16 px-6 border-b border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "",
        sticky: "sticky top-0 z-50",
        fixed: "fixed top-0 left-0 right-0 z-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Zt = y.forwardRef(
  ({
    className: e,
    variant: t,
    logo: r,
    nav: a,
    actions: o,
    ...s
  }, i) => /* @__PURE__ */ n.jsxs(
    "header",
    {
      ref: i,
      className: p(Kt({ variant: t }), e),
      role: "banner",
      ...s,
      children: [
        r && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: r }),
        a && /* @__PURE__ */ n.jsx("nav", { className: "flex-1 flex items-center justify-center", children: a }),
        o && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0 flex items-center gap-2", children: o })
      ]
    }
  )
);
Zt.displayName = "Header";
const Qt = w(
  "border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "py-8 px-6",
        minimal: "py-4 px-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ea = y.forwardRef(
  ({
    className: e,
    variant: t,
    links: r,
    copyright: a,
    ...o
  }, s) => /* @__PURE__ */ n.jsxs(
    "footer",
    {
      ref: s,
      className: p(Qt({ variant: t }), e),
      role: "contentinfo",
      ...o,
      children: [
        r && r.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "flex flex-wrap items-center gap-6 mb-4", children: r.map((i, l) => /* @__PURE__ */ n.jsx(
          "a",
          {
            href: i.href,
            className: "text-sm text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
            children: i.label
          },
          l
        )) }),
        a && /* @__PURE__ */ n.jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: a })
      ]
    }
  )
);
ea.displayName = "Footer";
const ra = w(
  "flex flex-col h-full border-r border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        collapsible: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), ta = y.forwardRef(
  ({
    className: e,
    variant: t,
    isOpen: r,
    onClose: a,
    items: o,
    onNavigate: s,
    header: i,
    collapsible: l,
    ...d
  }, c) => {
    const [m, b] = O("");
    Z(() => {
      const f = () => {
        b(window.location.hash || "");
      };
      return f(), window.addEventListener("hashchange", f), () => window.removeEventListener("hashchange", f);
    }, []);
    const x = (f) => {
      s && s(f), b(f);
    };
    return /* @__PURE__ */ n.jsxs(
      "aside",
      {
        ref: c,
        className: p(ra({ variant: t }), e),
        role: "navigation",
        "aria-label": "Sidebar navigation",
        ...d,
        children: [
          i && /* @__PURE__ */ n.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
            i,
            t === "collapsible" && a && /* @__PURE__ */ n.jsx(
              "button",
              {
                onClick: a,
                "aria-label": "Close sidebar",
                className: "p-2 text-neutral-500 rounded-lg hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700 transition-colors",
                children: /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ n.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
              }
            )
          ] }),
          /* @__PURE__ */ n.jsx("nav", { className: "flex-1 overflow-y-auto p-4", children: o.map((f) => {
            const v = m === f.href, h = f.icon;
            return /* @__PURE__ */ n.jsxs(
              "a",
              {
                href: f.href,
                className: p(
                  "group relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-lg",
                  v ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                ),
                onClick: () => x(f.href),
                children: [
                  h && /* @__PURE__ */ n.jsx(
                    h,
                    {
                      className: p(
                        "h-5 w-5 transition-colors",
                        v ? "text-primary-500 dark:text-primary-400" : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                      )
                    }
                  ),
                  /* @__PURE__ */ n.jsx("span", { className: "flex-1", children: f.label }),
                  f.badge !== void 0 && /* @__PURE__ */ n.jsx(
                    "span",
                    {
                      className: p(
                        "flex h-5 min-w-[1.25rem] items-center justify-center px-1.5 text-[10px] font-bold rounded-full",
                        v ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      ),
                      children: f.badge
                    }
                  )
                ]
              },
              f.href
            );
          }) })
        ]
      }
    );
  }
);
ta.displayName = "Sidebar";
const aa = w(
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
), na = y.forwardRef(
  ({
    className: e,
    variant: t,
    header: r,
    sidebar: a,
    footer: o,
    children: s,
    ...i
  }, l) => /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: l,
      className: p(aa({ variant: t }), e),
      ...i,
      children: [
        r && /* @__PURE__ */ n.jsx("header", { children: r }),
        /* @__PURE__ */ n.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
          a && /* @__PURE__ */ n.jsx("aside", { className: "flex-shrink-0", children: a }),
          /* @__PURE__ */ n.jsx("main", { className: "flex-1 overflow-auto", children: s })
        ] }),
        o && /* @__PURE__ */ n.jsx("footer", { children: o })
      ]
    }
  )
);
na.displayName = "Layout";
const sa = w(
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
        primary: "text-primary-500 dark:text-primary-400",
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
), oa = y.forwardRef(
  ({ className: e, variant: t, color: r, component: a, children: o, ...s }, i) => {
    const l = a || (t === "p" || t === "caption" || t === "small" ? "p" : t) || "span";
    return /* @__PURE__ */ n.jsx(
      l,
      {
        ref: i,
        className: p(sa({ variant: t, color: r }), e),
        ...s,
        children: o
      }
    );
  }
);
oa.displayName = "Typography";
const la = w(
  "flex items-start gap-3 p-4 rounded-lg shadow-soft-sm transition-colors duration-200",
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
), ia = {
  info: We,
  success: Ge,
  warning: pt,
  error: be
}, da = y.forwardRef(
  ({ className: e, variant: t = "info", title: r, description: a, showIcon: o = !0, closable: s = !1, onClose: i, action: l, ...d }, c) => {
    const b = ia[t ?? "info"];
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: c,
        className: p(la({ variant: t, className: e })),
        role: "alert",
        ...d,
        children: [
          o && b && /* @__PURE__ */ n.jsx(b, { className: "flex-shrink-0 text-xl" }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
            r && /* @__PURE__ */ n.jsx("h4", { className: "text-lg font-semibold mb-1", children: r }),
            /* @__PURE__ */ n.jsx("p", { className: "text-sm", children: a })
          ] }),
          l && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0 ml-auto", children: l }),
          s && /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: i,
              className: "flex-shrink-0 p-1 -mr-1 -mt-1 rounded-md transition-colors duration-150 hover:bg-current/[0.1]",
              "aria-label": "Close alert",
              children: /* @__PURE__ */ n.jsx(be, { className: "text-lg opacity-70" })
            }
          )
        ]
      }
    );
  }
);
da.displayName = "Alert";
const ca = w(
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
        top: "fixed top-0 left-0 right-0 z-50 rounded-b-lg",
        static: "relative"
      }
    },
    defaultVariants: {
      variant: "neutral",
      position: "top"
    }
  }
), ua = y.forwardRef(
  ({ className: e, variant: t, position: r, message: a, action: o, onClose: s, ...i }, l) => {
    const [d, c] = y.useState(!0), m = () => {
      c(!1), s == null || s();
    };
    return d ? /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: l,
        className: p(ca({ variant: t, position: r, className: e })),
        role: "banner",
        ...i,
        children: [
          /* @__PURE__ */ n.jsx("p", { className: "text-sm font-medium flex-1", children: a }),
          o && /* @__PURE__ */ n.jsx("div", { className: "flex-shrink-0", children: o }),
          s && /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: m,
              className: "flex-shrink-0 ml-auto p-1 rounded-md transition-colors duration-150 hover:bg-white/20",
              "aria-label": "Close banner",
              children: /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ n.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
            }
          )
        ]
      }
    ) : null;
  }
);
ua.displayName = "Banner";
const fa = w(
  "w-full bg-neutral-200 rounded-full h-2 dark:bg-neutral-700 overflow-hidden",
  {
    variants: {
      size: {
        sm: "h-1",
        md: "h-2",
        lg: "h-3"
      },
      rounded: {
        true: "rounded-full",
        false: "rounded-none"
      }
    },
    defaultVariants: {
      size: "md",
      rounded: !0
    }
  }
), ma = w(
  "h-full rounded-full text-white flex items-center justify-center text-xs font-medium transition-all duration-300 ease-in-out",
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
), ba = y.forwardRef(
  ({ className: e, size: t, rounded: r, value: a, max: o = 100, variant: s = "primary", showLabel: i = !1, ...l }, d) => {
    const c = Math.max(0, Math.min(100, a / o * 100));
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: d,
        className: p(fa({ size: t, rounded: r, className: e })),
        role: "progressbar",
        "aria-valuenow": a,
        "aria-valuemin": 0,
        "aria-valuemax": o,
        ...l,
        children: /* @__PURE__ */ n.jsx(
          "div",
          {
            className: p(ma({ variant: s })),
            style: { width: `${c}%` },
            children: i && `${Math.round(c)}%`
          }
        )
      }
    );
  }
);
ba.displayName = "Progress";
const pa = w(
  "animate-pulse bg-neutral-200 dark:bg-neutral-700",
  {
    variants: {
      variant: {
        text: "rounded-sm h-4",
        circle: "rounded-full",
        rectangle: "rounded-md"
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
), xa = y.forwardRef(
  ({ className: e, variant: t, width: r, height: a, children: o, ...s }, i) => o ? /* @__PURE__ */ n.jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ n.jsx("div", { className: "absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-700 rounded-md" }),
    /* @__PURE__ */ n.jsx("div", { className: "opacity-0", children: o })
  ] }) : /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: i,
      className: p(pa({ variant: t, width: r, height: a, className: e })),
      ...s
    }
  )
);
xa.displayName = "Skeleton";
const ha = w(
  "absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-neutral-800 rounded-lg shadow-soft-sm opacity-0 transition-opacity duration-200 pointer-events-none dark:bg-neutral-200 dark:text-neutral-900",
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
), ga = y.forwardRef(
  ({ children: e, content: t, placement: r = "top", delay: a = 300, className: o, ...s }, i) => {
    const [l, d] = O(!1), [c, m] = O(!1), b = y.useRef(null), x = P(() => {
      b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        d(!0), m(!0);
      }, a);
    }, [a]), f = P(() => {
      b.current && clearTimeout(b.current), m(!1), b.current = setTimeout(() => {
        d(!1);
      }, 200);
    }, []);
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: i,
        className: p("relative inline-block", o),
        onMouseEnter: x,
        onMouseLeave: f,
        ...s,
        children: [
          e,
          l && /* @__PURE__ */ n.jsxs("div", { className: p(ha({ placement: r, visible: c })), children: [
            t,
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: p(
                  "absolute w-0 h-0 border-solid border-transparent",
                  r === "top" && "top-full left-1/2 -translate-x-1/2 border-t-neutral-800 dark:border-t-neutral-200 border-8",
                  r === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800 dark:border-b-neutral-200 border-8",
                  r === "left" && "left-full top-1/2 -translate-y-1/2 border-l-neutral-800 dark:border-l-neutral-200 border-8",
                  r === "right" && "right-full top-1/2 -translate-y-1/2 border-r-neutral-800 dark:border-r-neutral-200 border-8"
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
ga.displayName = "Tooltip";
const va = w(
  "absolute z-50 bg-white rounded-lg shadow-soft-lg border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 opacity-0 transition-opacity duration-200",
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
      placement: "bottom"
    }
  }
), ya = y.forwardRef(
  ({ children: e, content: t, placement: r = "bottom", trigger: a = "click", open: o, onOpenChange: s, arrow: i = !0, className: l, ...d }, c) => {
    const [m, b] = O(!1), x = typeof o == "boolean", f = x ? o : m, v = te(null), h = te(null), g = P(() => {
      x ? s == null || s(!f) : b(!f);
    }, [f, x, s]), j = P(() => {
      a === "click" && g();
    }, [a, g]), E = P(() => {
      a === "hover" && (x ? s == null || s(!0) : b(!0));
    }, [a, x, s]), R = P(() => {
      a === "hover" && (x ? s == null || s(!1) : b(!1));
    }, [a, x, s]);
    return Z(() => {
      const T = (M) => {
        f && v.current && !v.current.contains(M.target) && h.current && !h.current.contains(M.target) && (x ? s == null || s(!1) : b(!1));
      };
      return f && a === "click" ? document.addEventListener("mousedown", T) : document.removeEventListener("mousedown", T), () => {
        document.removeEventListener("mousedown", T);
      };
    }, [f, x, s, a]), /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: c,
        className: p("relative inline-block", l),
        onMouseEnter: E,
        onMouseLeave: R,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("div", { ref: v, onClick: j, children: e }),
          f && /* @__PURE__ */ n.jsxs("div", { ref: h, className: p(va({ placement: r, visible: f }), "p-4"), children: [
            t,
            i && /* @__PURE__ */ n.jsx(
              "div",
              {
                className: p(
                  "absolute w-0 h-0 border-solid border-transparent",
                  r === "top" && "top-full left-1/2 -translate-x-1/2 border-t-neutral-200 dark:border-t-neutral-700 border-8 mt-[-1px]",
                  r === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-200 dark:border-b-neutral-700 border-8 mb-[-1px]",
                  r === "left" && "left-full top-1/2 -translate-y-1/2 border-l-neutral-200 dark:border-l-neutral-700 border-8 ml-[-1px]",
                  r === "right" && "right-full top-1/2 -translate-y-1/2 border-r-neutral-200 dark:border-r-neutral-700 border-8 mr-[-1px]"
                )
              }
            )
          ] })
        ]
      }
    );
  }
);
ya.displayName = "Popover";
export {
  da as Alert,
  Tr as Avatar,
  Fr as Badge,
  ua as Banner,
  Lt as Breadcrumb,
  Ar as Button,
  Mr as Card,
  Yr as Checkbox,
  wt as Container,
  Rt as Divider,
  Wt as Drawer,
  Ur as Dropdown,
  vt as FileUpload,
  ea as Footer,
  jt as Grid,
  Zt as Header,
  na as Layout,
  Pr as List,
  ja as Menu,
  Jt as Modal,
  It as Pagination,
  ya as Popover,
  ba as Progress,
  Xr as Radio,
  ta as Sidebar,
  xa as Skeleton,
  at as Slider,
  Et as Spacer,
  Vt as Stack,
  Bt as Stepper,
  Zr as Switch,
  $r as Table,
  At as Tabs,
  st as TextArea,
  Wr as TextField,
  Ht as Toast,
  Na as ToastProvider,
  ga as Tooltip,
  oa as Typography,
  Cr as avatarVariants,
  Sr as buttonVariants,
  Va as useToast
};
