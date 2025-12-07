import * as H from "react";
import w, { useEffect as Z, useId as K, useState as W, useRef as ee, useCallback as _, createContext as Ee, useContext as ze, useMemo as Ne } from "react";
import { createPortal as wt } from "react-dom";
var Ve = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function kt() {
  if (Se) return de;
  Se = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, n, o) {
    var d = null;
    if (o !== void 0 && (d = "" + o), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      o = {};
      for (var l in n)
        l !== "key" && (o[l] = n[l]);
    } else o = n;
    return n = o.ref, {
      $$typeof: e,
      type: a,
      key: d,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return de.Fragment = t, de.jsx = r, de.jsxs = r, de;
}
var ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function jt() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    function e(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === S ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case h:
          return "Fragment";
        case g:
          return "Profiler";
        case V:
          return "StrictMode";
        case T:
          return "Suspense";
        case P:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case v:
            return "Portal";
          case N:
            return b.displayName || "Context";
          case j:
            return (b._context.displayName || "Context") + ".Consumer";
          case A:
            var I = b.render;
            return b = b.displayName, b || (b = I.displayName || I.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case B:
            return I = b.displayName || null, I !== null ? I : e(b.type) || "Memo";
          case L:
            I = b._payload, b = b._init;
            try {
              return e(b(I));
            } catch {
            }
        }
      return null;
    }
    function t(b) {
      return "" + b;
    }
    function r(b) {
      try {
        t(b);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var G = I.error, U = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return G.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(b);
      }
    }
    function a(b) {
      if (b === h) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === L)
        return "<...>";
      try {
        var I = e(b);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var b = C.A;
      return b === null ? null : b.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function d(b) {
      if (z.call(b, "key")) {
        var I = Object.getOwnPropertyDescriptor(b, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function l(b, I) {
      function G() {
        E || (E = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      G.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: G,
        configurable: !0
      });
    }
    function i() {
      var b = e(this.type);
      return $[b] || ($[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function c(b, I, G, U, xe, ye) {
      var Y = G.ref;
      return b = {
        $$typeof: y,
        type: b,
        key: I,
        props: G,
        _owner: U
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: i
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ye
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function p(b, I, G, U, xe, ye) {
      var Y = I.children;
      if (Y !== void 0)
        if (U)
          if (F(Y)) {
            for (U = 0; U < Y.length; U++)
              f(Y[U]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (z.call(I, "key")) {
        Y = e(b);
        var se = Object.keys(I).filter(function(yt) {
          return yt !== "key";
        });
        U = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", ae[Y + U] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          Y,
          se,
          Y
        ), ae[Y + U] = !0);
      }
      if (Y = null, G !== void 0 && (r(G), Y = "" + G), d(I) && (r(I.key), Y = "" + I.key), "key" in I) {
        G = {};
        for (var we in I)
          we !== "key" && (G[we] = I[we]);
      } else G = I;
      return Y && l(
        G,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), c(
        b,
        Y,
        G,
        n(),
        xe,
        ye
      );
    }
    function f(b) {
      m(b) ? b._store && (b._store.validated = 1) : typeof b == "object" && b !== null && b.$$typeof === L && (b._payload.status === "fulfilled" ? m(b._payload.value) && b._payload.value._store && (b._payload.value._store.validated = 1) : b._store && (b._store.validated = 1));
    }
    function m(b) {
      return typeof b == "object" && b !== null && b.$$typeof === y;
    }
    var u = w, y = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), N = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), C = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, F = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var E, $ = {}, J = u.react_stack_bottom_frame.bind(
      u,
      o
    )(), X = O(a(o)), ae = {};
    ce.Fragment = h, ce.jsx = function(b, I, G) {
      var U = 1e4 > C.recentlyCreatedOwnerStacks++;
      return p(
        b,
        I,
        G,
        !1,
        U ? Error("react-stack-top-frame") : J,
        U ? O(a(b)) : X
      );
    }, ce.jsxs = function(b, I, G) {
      var U = 1e4 > C.recentlyCreatedOwnerStacks++;
      return p(
        b,
        I,
        G,
        !0,
        U ? Error("react-stack-top-frame") : J,
        U ? O(a(b)) : X
      );
    };
  }()), ce;
}
process.env.NODE_ENV === "production" ? Ve.exports = kt() : Ve.exports = jt();
var s = Ve.exports;
function Ye(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (r = Ye(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function qe() {
  for (var e, t, r = 0, a = "", n = arguments.length; r < n; r++) (e = arguments[r]) && (t = Ye(e)) && (a && (a += " "), a += t);
  return a;
}
const Oe = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _e = qe, k = (e, t) => (r) => {
  var a;
  if ((t == null ? void 0 : t.variants) == null) return _e(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: n, defaultVariants: o } = t, d = Object.keys(n).map((c) => {
    const p = r == null ? void 0 : r[c], f = o == null ? void 0 : o[c];
    if (p === null) return null;
    const m = Oe(p) || Oe(f);
    return n[c][m];
  }), l = r && Object.entries(r).reduce((c, p) => {
    let [f, m] = p;
    return m === void 0 || (c[f] = m), c;
  }, {}), i = t == null || (a = t.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((c, p) => {
    let { class: f, className: m, ...u } = p;
    return Object.entries(u).every((y) => {
      let [v, h] = y;
      return Array.isArray(h) ? h.includes({
        ...o,
        ...l
      }[v]) : {
        ...o,
        ...l
      }[v] === h;
    }) ? [
      ...c,
      f,
      m
    ] : c;
  }, []);
  return _e(e, d, i, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Ce = "-", Nt = (e) => {
  const t = Rt(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: a
  } = e;
  return {
    getClassGroupId: (d) => {
      const l = d.split(Ce);
      return l[0] === "" && l.length !== 1 && l.shift(), Xe(l, t) || Vt(d);
    },
    getConflictingClassGroupIds: (d, l) => {
      const i = r[d] || [];
      return l && a[d] ? [...i, ...a[d]] : i;
    }
  };
}, Xe = (e, t) => {
  var d;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], a = t.nextPart.get(r), n = a ? Xe(e.slice(1), a) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const o = e.join(Ce);
  return (d = t.validators.find(({
    validator: l
  }) => l(o))) == null ? void 0 : d.classGroupId;
}, Le = /^\[(.+)\]$/, Vt = (e) => {
  if (Le.test(e)) {
    const t = Le.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Rt = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, a = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zt(Object.entries(e.classGroups), r).forEach(([o, d]) => {
    Re(d, a, o, t);
  }), a;
}, Re = (e, t, r, a) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const o = n === "" ? t : Fe(t, n);
      o.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Et(n)) {
        Re(n(a), t, r, a);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(([o, d]) => {
      Re(d, Fe(t, o), r, a);
    });
  });
}, Fe = (e, t) => {
  let r = e;
  return t.split(Ce).forEach((a) => {
    r.nextPart.has(a) || r.nextPart.set(a, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(a);
  }), r;
}, Et = (e) => e.isThemeGetter, zt = (e, t) => t ? e.map(([r, a]) => {
  const n = a.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([d, l]) => [t + d, l])) : o);
  return [r, n];
}) : e, Ct = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  const n = (o, d) => {
    r.set(o, d), t++, t > e && (t = 0, a = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let d = r.get(o);
      if (d !== void 0)
        return d;
      if ((d = a.get(o)) !== void 0)
        return n(o, d), d;
    },
    set(o, d) {
      r.has(o) ? r.set(o, d) : n(o, d);
    }
  };
}, Ke = "!", Tt = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, a = t.length === 1, n = t[0], o = t.length, d = (l) => {
    const i = [];
    let c = 0, p = 0, f;
    for (let h = 0; h < l.length; h++) {
      let V = l[h];
      if (c === 0) {
        if (V === n && (a || l.slice(h, h + o) === t)) {
          i.push(l.slice(p, h)), p = h + o;
          continue;
        }
        if (V === "/") {
          f = h;
          continue;
        }
      }
      V === "[" ? c++ : V === "]" && c--;
    }
    const m = i.length === 0 ? l : l.substring(p), u = m.startsWith(Ke), y = u ? m.substring(1) : m, v = f && f > p ? f - p : void 0;
    return {
      modifiers: i,
      hasImportantModifier: u,
      baseClassName: y,
      maybePostfixModifierPosition: v
    };
  };
  return r ? (l) => r({
    className: l,
    parseClassName: d
  }) : d;
}, Mt = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((a) => {
    a[0] === "[" ? (t.push(...r.sort(), a), r = []) : r.push(a);
  }), t.push(...r.sort()), t;
}, At = (e) => ({
  cache: Ct(e.cacheSize),
  parseClassName: Tt(e),
  ...Nt(e)
}), It = /\s+/, St = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: a,
    getConflictingClassGroupIds: n
  } = t, o = [], d = e.trim().split(It);
  let l = "";
  for (let i = d.length - 1; i >= 0; i -= 1) {
    const c = d[i], {
      modifiers: p,
      hasImportantModifier: f,
      baseClassName: m,
      maybePostfixModifierPosition: u
    } = r(c);
    let y = !!u, v = a(y ? m.substring(0, u) : m);
    if (!v) {
      if (!y) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = a(m), !v) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      y = !1;
    }
    const h = Mt(p).join(":"), V = f ? h + Ke : h, g = V + v;
    if (o.includes(g))
      continue;
    o.push(g);
    const j = n(v, y);
    for (let N = 0; N < j.length; ++N) {
      const A = j[N];
      o.push(V + A);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Pt() {
  let e = 0, t, r, a = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Je(t)) && (a && (a += " "), a += r);
  return a;
}
const Je = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let a = 0; a < e.length; a++)
    e[a] && (t = Je(e[a])) && (r && (r += " "), r += t);
  return r;
};
function Ot(e, ...t) {
  let r, a, n, o = d;
  function d(i) {
    const c = t.reduce((p, f) => f(p), e());
    return r = At(c), a = r.cache.get, n = r.cache.set, o = l, l(i);
  }
  function l(i) {
    const c = a(i);
    if (c)
      return c;
    const p = St(i, r);
    return n(i, p), p;
  }
  return function() {
    return o(Pt.apply(null, arguments));
  };
}
const D = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Ze = /^\[(?:([a-z-]+):)?(.+)\]$/i, _t = /^\d+\/\d+$/, Lt = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ft = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Bt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $t = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Dt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ht = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Q = (e) => oe(e) || Lt.has(e) || _t.test(e), te = (e) => le(e, "length", Jt), oe = (e) => !!e && !Number.isNaN(Number(e)), ke = (e) => le(e, "number", oe), ue = (e) => !!e && Number.isInteger(Number(e)), Gt = (e) => e.endsWith("%") && oe(e.slice(0, -1)), M = (e) => Ze.test(e), re = (e) => Ft.test(e), Wt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ut = (e) => le(e, Wt, Qe), Yt = (e) => le(e, "position", Qe), qt = /* @__PURE__ */ new Set(["image", "url"]), Xt = (e) => le(e, qt, Qt), Kt = (e) => le(e, "", Zt), fe = () => !0, le = (e, t, r) => {
  const a = Ze.exec(e);
  return a ? a[1] ? typeof t == "string" ? a[1] === t : t.has(a[1]) : r(a[2]) : !1;
}, Jt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Bt.test(e) && !$t.test(e)
), Qe = () => !1, Zt = (e) => Dt.test(e), Qt = (e) => Ht.test(e), er = () => {
  const e = D("colors"), t = D("spacing"), r = D("blur"), a = D("brightness"), n = D("borderColor"), o = D("borderRadius"), d = D("borderSpacing"), l = D("borderWidth"), i = D("contrast"), c = D("grayscale"), p = D("hueRotate"), f = D("invert"), m = D("gap"), u = D("gradientColorStops"), y = D("gradientColorStopPositions"), v = D("inset"), h = D("margin"), V = D("opacity"), g = D("padding"), j = D("saturate"), N = D("scale"), A = D("sepia"), T = D("skew"), P = D("space"), B = D("translate"), L = () => ["auto", "contain", "none"], R = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", M, t], C = () => [M, t], z = () => ["", Q, te], F = () => ["auto", oe, M], O = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], E = () => ["solid", "dashed", "dotted", "double", "none"], $ = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", M], ae = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], b = () => [oe, M];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fe],
      spacing: [Q, te],
      blur: ["none", "", re, M],
      brightness: b(),
      borderColor: [e],
      borderRadius: ["none", "", "full", re, M],
      borderSpacing: C(),
      borderWidth: z(),
      contrast: b(),
      grayscale: X(),
      hueRotate: b(),
      invert: X(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Gt, te],
      inset: S(),
      margin: S(),
      opacity: b(),
      padding: C(),
      saturate: b(),
      scale: b(),
      sepia: X(),
      skew: b(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", M]
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
        columns: [re]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [...O(), M]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: L()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": L()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": L()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", ue, M]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: S()
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
        flex: ["1", "auto", "initial", "none", M]
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
        order: ["first", "last", "none", ue, M]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ue, M]
        }, M]
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
        "grid-rows": [fe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ue, M]
        }, M]
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
        "auto-cols": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", M]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...J()]
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
        content: ["normal", ...J(), "baseline"]
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
        "place-content": [...J(), "baseline"]
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
        p: [g]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [g]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [g]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [g]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [g]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [g]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [g]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [g]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [g]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [M, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [M, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [re]
        }, re]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [M, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", re, te]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", ke]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fe]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", oe, ke]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Q, M]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", M]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", M]
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
        "placeholder-opacity": [V]
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
        "text-opacity": [V]
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
        decoration: [...E(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Q, te]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Q, M]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
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
        content: ["none", M]
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
        "bg-opacity": [V]
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
        bg: [...O(), Yt]
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
        bg: ["auto", "cover", "contain", Ut]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xt]
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
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [u]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [u]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [u]
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
        "border-opacity": [V]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...E(), "hidden"]
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
        "divide-opacity": [V]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: E()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...E()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Q, M]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Q, te]
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
        "ring-opacity": [V]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Q, te]
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
        shadow: ["", "inner", "none", re, Kt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [V]
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
        contrast: [i]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", re, M]
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
        "hue-rotate": [p]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [j]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [A]
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
        "backdrop-contrast": [i]
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
        "backdrop-hue-rotate": [p]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [V]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [j]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: b()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", M]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: b()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", M]
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
        scale: [N]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [N]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [N]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ue, M]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [B]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [B]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", M]
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
        stroke: [Q, te, ke]
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
}, tr = /* @__PURE__ */ Ot(er);
function x(...e) {
  return tr(qe(e));
}
const rr = ({ ref: e, handler: t, enabled: r = !0 }) => {
  Z(() => {
    if (!r)
      return;
    const a = (n) => {
      const o = e.current;
      !o || o.contains(n.target) || t(n);
    };
    return document.addEventListener("mousedown", a), document.addEventListener("touchstart", a), () => {
      document.removeEventListener("mousedown", a), document.removeEventListener("touchstart", a);
    };
  }, [e, t, r]);
}, ar = (e) => {
  const {
    disabled: t = !1,
    readOnly: r = !1,
    required: a = !1,
    inputRef: n,
    value: o,
    defaultValue: d,
    onChange: l,
    ...i
  } = e, [c, p] = H.useState(d ?? o ?? "");
  H.useEffect(() => {
    o !== void 0 && p(o);
  }, [o]);
  const f = H.useCallback((u) => {
    if (t || r) {
      u.preventDefault();
      return;
    }
    p(u.target.value), l == null || l(u);
  }, [t, r, l]);
  return {
    inputProps: {
      ...i,
      onChange: f,
      disabled: t,
      readOnly: r,
      required: a,
      value: c,
      "aria-disabled": t,
      "aria-readonly": r,
      "aria-required": a
    },
    inputRef: n,
    disabled: t,
    readOnly: r,
    required: a
  };
}, nr = k(
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
), me = w.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    variant: n,
    size: o,
    id: d,
    icon: l,
    iconPosition: i = "left",
    "aria-label": c,
    "aria-describedby": p,
    disabled: f,
    readOnly: m,
    required: u,
    value: y,
    defaultValue: v,
    onChange: h,
    ...V
  }, g) => {
    const j = K(), N = d || j, A = r ? `${N}-error` : void 0, T = a ? `${N}-helper` : void 0, P = [A, T, p].filter(Boolean).join(" ") || void 0, { inputProps: B, inputRef: L, disabled: R, readOnly: S, required: C } = ar({
      inputRef: g,
      disabled: f,
      readOnly: m,
      required: u,
      value: y,
      defaultValue: v,
      onChange: h,
      id: N,
      "aria-label": c || t,
      "aria-invalid": r ? "true" : void 0,
      "aria-describedby": P,
      ...V
    });
    return /* @__PURE__ */ s.jsxs("div", { className: x("flex flex-col group w-full", e), children: [
      t && /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: N,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            t,
            C && /* @__PURE__ */ s.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        l && i === "left" && /* @__PURE__ */ s.jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500", children: /* @__PURE__ */ s.jsx(l, { className: "text-lg" }) }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: L || g,
            className: x(
              nr({ variant: n, size: o, error: !!r }),
              l && i === "left" && "pl-10",
              l && i === "right" && "pr-10",
              R && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !r && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            ...B
          }
        ),
        l && i === "right" && /* @__PURE__ */ s.jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 pointer-events-none transition-colors group-focus-within:text-primary-500", children: /* @__PURE__ */ s.jsx(l, { className: "text-lg" }) })
      ] }),
      r && /* @__PURE__ */ s.jsxs("span", { id: A, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        r
      ] }),
      a && !r && /* @__PURE__ */ s.jsx("span", { id: T, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: a })
    ] });
  }
);
me.displayName = "TextField";
var et = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Be = w.createContext && /* @__PURE__ */ w.createContext(et), sr = ["attr", "size", "title"];
function or(e, t) {
  if (e == null) return {};
  var r = lr(e, t), a, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++)
      a = o[n], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function lr(e, t) {
  if (e == null) return {};
  var r = {};
  for (var a in e)
    if (Object.prototype.hasOwnProperty.call(e, a)) {
      if (t.indexOf(a) >= 0) continue;
      r[a] = e[a];
    }
  return r;
}
function he() {
  return he = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, he.apply(this, arguments);
}
function $e(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), r.push.apply(r, a);
  }
  return r;
}
function ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $e(Object(r), !0).forEach(function(a) {
      ir(e, a, r[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $e(Object(r)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a));
    });
  }
  return e;
}
function ir(e, t, r) {
  return t = dr(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function dr(e) {
  var t = cr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function cr(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var a = r.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function tt(e) {
  return e && e.map((t, r) => /* @__PURE__ */ w.createElement(t.tag, ge({
    key: r
  }, t.attr), tt(t.child)));
}
function q(e) {
  return (t) => /* @__PURE__ */ w.createElement(ur, he({
    attr: ge({}, e.attr)
  }, t), tt(e.child));
}
function ur(e) {
  var t = (r) => {
    var {
      attr: a,
      size: n,
      title: o
    } = e, d = or(e, sr), l = n || r.size || "1em", i;
    return r.className && (i = r.className), e.className && (i = (i ? i + " " : "") + e.className), /* @__PURE__ */ w.createElement("svg", he({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, a, d, {
      className: i,
      style: ge(ge({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ w.createElement("title", null, o), e.children);
  };
  return Be !== void 0 ? /* @__PURE__ */ w.createElement(Be.Consumer, null, (r) => t(r)) : t(et);
}
function rt(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" }, child: [] }] })(e);
}
function fr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" }, child: [] }] })(e);
}
function Te(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" }, child: [] }] })(e);
}
function je(e) {
  return q({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" }, child: [] }] })(e);
}
function pe(e) {
  return q({ attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" }, child: [] }] })(e);
}
function pr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function mr(e) {
  return q({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" }, child: [] }] })(e);
}
function br(e) {
  return q({ attr: { viewBox: "0 0 384 512" }, child: [{ tag: "path", attr: { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" }, child: [] }] })(e);
}
function at(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" }, child: [] }] })(e);
}
function xr(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function hr(e) {
  return q({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function gr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" }, child: [] }] })(e);
}
function ve(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" }, child: [] }] })(e);
}
function be(e) {
  return q({ attr: { viewBox: "0 0 352 512" }, child: [{ tag: "path", attr: { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, child: [] }] })(e);
}
function vr(e) {
  return q({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" }, child: [] }] })(e);
}
const yr = k(
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
), De = k(
  "absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-soft-lg max-h-60 overflow-auto"
), wr = k(
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
), kr = (e, t) => e.label.toLowerCase().includes(t.toLowerCase()), jr = w.forwardRef(
  ({
    className: e,
    options: t,
    value: r,
    defaultValue: a = "",
    onChange: n,
    onSelect: o,
    filterFn: d = kr,
    size: l,
    placeholder: i = "Type to search...",
    clearable: c = !0,
    label: p,
    error: f,
    helperText: m,
    disabled: u,
    ...y
  }, v) => {
    const [h, V] = W(a), [g, j] = W(!1), [N, A] = W(-1), T = r !== void 0, P = T ? r : h, B = ee(null), L = ee(null), R = K(), S = P ? t.filter((E) => d(E, P)) : t, C = _((E) => {
      const $ = E.target.value;
      T || V($), n == null || n($), j(!0), A(-1);
    }, [T, n]), z = _((E) => {
      if (E.disabled) return;
      const $ = E.value;
      T || V($), n == null || n($), o == null || o(E), j(!1), A(-1);
    }, [T, n, o]), F = _(() => {
      T || V(""), n == null || n(""), j(!1), A(-1);
    }, [T, n]), O = _((E) => {
      if (!g || S.length === 0) {
        (E.key === "ArrowDown" || E.key === "ArrowUp") && (E.preventDefault(), j(!0));
        return;
      }
      switch (E.key) {
        case "ArrowDown":
          E.preventDefault(), A(
            ($) => $ < S.length - 1 ? $ + 1 : $
          );
          break;
        case "ArrowUp":
          E.preventDefault(), A(($) => $ > 0 ? $ - 1 : -1);
          break;
        case "Enter":
          E.preventDefault(), N >= 0 && N < S.length && z(S[N]);
          break;
        case "Escape":
          E.preventDefault(), j(!1), A(-1);
          break;
      }
    }, [g, S, N, z]);
    return rr({
      ref: B,
      handler: () => j(!1),
      enabled: g
    }), /* @__PURE__ */ s.jsxs("div", { ref: B, className: x(yr({ size: l }), e), children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsx(
          me,
          {
            ref: v,
            id: R,
            value: P,
            onChange: C,
            onFocus: () => j(!0),
            onKeyDown: O,
            placeholder: i,
            label: p,
            error: f,
            helperText: m,
            disabled: u,
            icon: Te,
            iconPosition: "right",
            ...y
          }
        ),
        c && P && !u && /* @__PURE__ */ s.jsx(
          "button",
          {
            type: "button",
            onClick: F,
            className: "absolute right-10 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
            "aria-label": "Clear",
            children: /* @__PURE__ */ s.jsx(be, { className: "text-sm" })
          }
        )
      ] }),
      g && S.length > 0 && /* @__PURE__ */ s.jsx(
        "div",
        {
          ref: L,
          className: De(),
          role: "listbox",
          "aria-labelledby": R,
          children: S.map((E, $) => /* @__PURE__ */ s.jsx(
            "div",
            {
              role: "option",
              "aria-selected": E.value === P,
              className: x(
                wr({
                  selected: E.value === P,
                  highlighted: $ === N
                }),
                E.disabled && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => !E.disabled && z(E),
              onMouseEnter: () => A($),
              children: E.label
            },
            E.value
          ))
        }
      ),
      g && S.length === 0 && P && /* @__PURE__ */ s.jsx("div", { className: x(De(), "p-4 text-center text-neutral-500 dark:text-neutral-400"), children: "No options found" })
    ] });
  }
);
jr.displayName = "Autocomplete";
const Nr = k(
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
), Vr = w.forwardRef(
  ({ className: e, size: t, variant: r, src: a, alt: n, fallback: o, ...d }, l) => {
    const [i, c] = W(!1), p = () => {
      c(!0);
    }, f = () => {
      if (typeof o == "string")
        return o.slice(0, 2).toUpperCase();
      if (n) {
        const v = n.trim().split(/\s+/);
        if (v.length >= 2)
          return (v[0][0] + v[v.length - 1][0]).toUpperCase();
        if (v.length === 1 && v[0].length > 0)
          return v[0][0].toUpperCase();
      }
      return "?";
    }, m = a && !i, u = !m && !o, y = !m && o;
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: l,
        className: x(Nr({ size: t, variant: r }), e),
        role: "img",
        "aria-label": n || "Avatar",
        ...d,
        children: [
          m && /* @__PURE__ */ s.jsx(
            "img",
            {
              src: a,
              alt: n,
              onError: p,
              className: "w-full h-full object-cover"
            }
          ),
          u && /* @__PURE__ */ s.jsx("div", { className: "flex w-full h-full items-center justify-center uppercase select-none", children: f() }),
          y && /* @__PURE__ */ s.jsx("div", { className: "flex w-full h-full items-center justify-center", children: typeof o == "string" ? /* @__PURE__ */ s.jsx("span", { children: o }) : o })
        ]
      }
    );
  }
);
Vr.displayName = "Avatar";
const Rr = k(
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
), Er = w.forwardRef(
  ({ className: e, variant: t, size: r, ...a }, n) => /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: n,
      className: x(Rr({ variant: t, size: r }), e),
      ...a
    }
  )
);
Er.displayName = "Badge";
const zr = (e) => {
  const { disabled: t = !1, loading: r = !1, buttonRef: a, onClick: n, ...o } = e, d = H.useCallback((i) => {
    if (t || r) {
      i.preventDefault();
      return;
    }
    n == null || n(i);
  }, [t, r, n]);
  return {
    buttonProps: {
      ...o,
      onClick: d,
      disabled: t || r,
      "aria-disabled": t || r
    },
    buttonRef: a,
    disabled: t || r,
    loading: r
  };
}, Cr = k(
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
), Tr = w.forwardRef(
  ({ className: e, variant: t, size: r, fullWidth: a, rounded: n, icon: o, iconPosition: d = "left", children: l, disabled: i, loading: c, onClick: p, ...f }, m) => {
    const { buttonProps: u, buttonRef: y, disabled: v, loading: h } = zr({
      buttonRef: m,
      disabled: i,
      loading: c,
      onClick: p,
      ...f
    }), V = !l && !!o;
    return /* @__PURE__ */ s.jsxs(
      "button",
      {
        ref: y || m,
        className: x(Cr({ variant: t, size: V ? "icon" : r, fullWidth: a, rounded: n }), e),
        ...u,
        children: [
          h && /* @__PURE__ */ s.jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-current", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ s.jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ s.jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }),
          !h && o && d === "left" && /* @__PURE__ */ s.jsx(o, { className: "text-lg" }),
          l,
          !h && o && d === "right" && /* @__PURE__ */ s.jsx(o, { className: "text-lg" })
        ]
      }
    );
  }
);
Tr.displayName = "Button";
const Mr = k(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-colors appearance-none cursor-pointer",
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
), Ar = w.forwardRef(
  ({
    className: e,
    label: t,
    indeterminate: r,
    size: a,
    id: n,
    checked: o,
    disabled: d,
    "aria-label": l,
    "aria-describedby": i,
    onChange: c,
    ...p
  }, f) => {
    const m = K(), u = n || m, y = ee(null), v = f || y;
    return Z(() => {
      v.current && (v.current.indeterminate = r || !1);
    }, [r, v]), /* @__PURE__ */ s.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: v,
            type: "checkbox",
            id: u,
            checked: o,
            disabled: d,
            onChange: c,
            "aria-label": l || t,
            "aria-checked": r ? "mixed" : o,
            "aria-describedby": i,
            className: x(
              Mr({ size: a }),
              o && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              !o && !r && "hover:border-primary-500 dark:hover:border-primary-400",
              r && "bg-primary-500 border-primary-500 dark:bg-primary-500 dark:border-primary-500",
              d && "disabled:cursor-not-allowed disabled:opacity-50 disabled:checked:bg-neutral-400 disabled:border-neutral-300",
              e
            ),
            ...p
          }
        ),
        o && !r && /* @__PURE__ */ s.jsx(
          "svg",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ s.jsx("path", { d: "M11.6666 3.5L5.24992 9.91667L2.33325 7", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          }
        ),
        r && /* @__PURE__ */ s.jsx(
          "svg",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-100",
            width: "14",
            height: "14",
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ s.jsx("path", { d: "M2.33325 7H11.6666", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
          }
        )
      ] }),
      t && /* @__PURE__ */ s.jsx(
        "label",
        {
          htmlFor: u,
          className: x(
            "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
            d && "cursor-not-allowed opacity-60"
          ),
          children: t
        }
      )
    ] });
  }
);
Ar.displayName = "Checkbox";
const Ir = k(
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
), He = k(
  "flex items-center justify-center w-8 h-8 border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
), Sr = w.forwardRef(
  ({
    className: e,
    value: t,
    defaultValue: r = 0,
    min: a,
    max: n,
    step: o = 1,
    precision: d,
    size: l,
    label: i,
    error: c,
    helperText: p,
    onChange: f,
    showControls: m = !0,
    disabled: u,
    id: y,
    ...v
  }, h) => {
    const [V, g] = W(r), j = t !== void 0, N = j ? t : V, A = K(), T = y || A, P = _((O) => d !== void 0 ? O.toFixed(d) : O.toString(), [d]), B = _((O) => {
      const E = parseFloat(O);
      return isNaN(E) ? 0 : E;
    }, []), L = _((O) => {
      let E = O;
      return a !== void 0 && (E = Math.max(E, a)), n !== void 0 && (E = Math.min(E, n)), E;
    }, [a, n]), R = _((O) => {
      const E = B(O.target.value), $ = L(E);
      j || g($), f == null || f($);
    }, [j, f, B, L]), S = _(() => {
      if (u) return;
      const O = L(N + o);
      j || g(O), f == null || f(O);
    }, [u, N, o, j, f, L]), C = _(() => {
      if (u) return;
      const O = L(N - o);
      j || g(O), f == null || f(O);
    }, [u, N, o, j, f, L]), z = a !== void 0 && N <= a, F = n !== void 0 && N >= n;
    return /* @__PURE__ */ s.jsx("div", { className: x(Ir({ size: l }), e), children: /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
      m && /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: C,
          disabled: u || z,
          className: x(
            He(),
            "absolute left-1 top-1/2 -translate-y-1/2 z-10"
          ),
          "aria-label": "Decrease",
          children: /* @__PURE__ */ s.jsx(xr, { className: "text-xs" })
        }
      ),
      /* @__PURE__ */ s.jsx(
        me,
        {
          ref: h,
          id: T,
          type: "number",
          value: P(N),
          onChange: R,
          min: a,
          max: n,
          step: o,
          label: i,
          error: c,
          helperText: p,
          disabled: u,
          className: x(m && "pl-10 pr-10"),
          ...v
        }
      ),
      m && /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: S,
          disabled: u || F,
          className: x(
            He(),
            "absolute right-1 top-1/2 -translate-y-1/2 z-10"
          ),
          "aria-label": "Increase",
          children: /* @__PURE__ */ s.jsx(hr, { className: "text-xs" })
        }
      )
    ] }) });
  }
);
Sr.displayName = "NumberInput";
const Pr = k(
  "border-neutral-300 dark:border-neutral-600 bg-white dark:bg-input-bg-dark text-primary-500 focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 transition-colors appearance-none cursor-pointer",
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
), Or = w.forwardRef(
  ({
    className: e,
    label: t,
    size: r,
    id: a,
    checked: n,
    disabled: o,
    "aria-label": d,
    "aria-describedby": l,
    onChange: i,
    ...c
  }, p) => {
    const f = K(), m = a || f;
    return /* @__PURE__ */ s.jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "relative flex items-center", children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            ref: p,
            type: "radio",
            id: m,
            checked: n,
            disabled: o,
            onChange: i,
            "aria-label": d || t,
            "aria-checked": n,
            "aria-describedby": l,
            className: x(
              Pr({ size: r }),
              n && "border-primary-500 dark:border-primary-500",
              !n && "hover:border-primary-500 dark:hover:border-primary-400",
              o && "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-neutral-300",
              e
            ),
            ...c
          }
        ),
        n && /* @__PURE__ */ s.jsx("div", { className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 bg-primary-500 opacity-100" })
      ] }),
      t && /* @__PURE__ */ s.jsx(
        "label",
        {
          htmlFor: m,
          className: x(
            "text-sm font-normal text-neutral-900 dark:text-white select-none cursor-pointer",
            o && "cursor-not-allowed opacity-60"
          ),
          children: t
        }
      )
    ] });
  }
);
Or.displayName = "Radio";
const _r = k(
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
), Lr = w.forwardRef(
  ({
    className: e,
    label: t,
    options: r,
    error: a,
    helperText: n,
    variant: o,
    size: d,
    placeholder: l,
    id: i,
    disabled: c,
    "aria-label": p,
    "aria-describedby": f,
    ...m
  }, u) => {
    const y = K(), v = i || y, h = a ? `${v}-error` : void 0, V = n ? `${v}-helper` : void 0, g = [h, V, f].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ s.jsxs("div", { className: x("flex flex-col w-full", e), children: [
      t && /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: v,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: [
            t,
            m.required && /* @__PURE__ */ s.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ s.jsxs(
          "select",
          {
            ref: u,
            id: v,
            className: x(
              _r({ variant: o, size: d, error: !!a }),
              c && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
              !a && "hover:border-neutral-300 dark:hover:border-neutral-600"
            ),
            "aria-label": p || t,
            "aria-invalid": a ? "true" : void 0,
            "aria-describedby": g,
            defaultValue: l ? "" : void 0,
            ...m,
            children: [
              l && /* @__PURE__ */ s.jsx("option", { value: "", disabled: !0, children: l }),
              r.map((j) => /* @__PURE__ */ s.jsx("option", { value: j.value, disabled: j.disabled, children: j.label }, j.value))
            ]
          }
        ),
        /* @__PURE__ */ s.jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-neutral-500 dark:text-neutral-400", children: /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 12 12", fill: "currentColor", children: /* @__PURE__ */ s.jsx("path", { d: "M6 9L1 4h10z" }) }) })
      ] }),
      a && /* @__PURE__ */ s.jsx("span", { id: h, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 block", children: a }),
      n && !a && /* @__PURE__ */ s.jsx("span", { id: V, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: n })
    ] });
  }
);
Lr.displayName = "Dropdown";
const Fr = k(
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
), Br = k(
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
), $r = k(
  "absolute h-full bg-primary-500 transition-all duration-150 group-hover:bg-primary-600"
), Dr = k(
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
), Hr = w.forwardRef(
  ({ className: e, value: t, defaultValue: r = 0, min: a = 0, max: n = 100, step: o = 1, onChange: d, disabled: l = !1, size: i, ...c }, p) => {
    const [f, m] = W(r), u = typeof t == "number", y = u ? t : f, v = ee(null), [h, V] = W(!1), [g, j] = W(!1), A = _((z) => (z - a) / (n - a) * 100, [a, n])(y), T = _(
      (z) => {
        const F = Math.max(a, Math.min(n, z)), O = Math.round(F / o) * o;
        u || m(O), d == null || d(O);
      },
      [a, n, o, u, d]
    ), P = _((z) => {
      if (!v.current) return y;
      const { left: F, width: O } = v.current.getBoundingClientRect(), E = Math.max(0, Math.min(1, (z - F) / O));
      return a + E * (n - a);
    }, [a, n, y]), B = _((z) => {
      if (l) return;
      const F = P(z);
      T(F);
    }, [l, P, T]), L = _((z) => {
      l || z.target.closest("[data-slider-thumb]") || (z.preventDefault(), z.stopPropagation(), B(z.clientX));
    }, [l, B]), R = _((z) => {
      if (l || z.target.closest("[data-slider-thumb]"))
        return;
      z.preventDefault(), z.stopPropagation();
      const F = z.touches[0];
      F && B(F.clientX);
    }, [l, B]), S = _((z) => {
      if (l) return;
      z.preventDefault(), z.stopPropagation(), j(!0);
      const F = "touches" in z, O = (J) => {
        var X;
        return "touches" in J ? (X = J.touches[0]) == null ? void 0 : X.clientX : J.clientX;
      }, E = (J) => {
        if (!v.current) return;
        const X = O(J);
        if (X !== void 0) {
          const ae = P(X);
          T(ae);
        }
      }, $ = () => {
        j(!1), document.removeEventListener(F ? "touchmove" : "mousemove", E), document.removeEventListener(F ? "touchend" : "mouseup", $);
      };
      document.addEventListener(F ? "touchmove" : "mousemove", E), document.addEventListener(F ? "touchend" : "mouseup", $);
    }, [l, P, T]), C = _(
      (z) => {
        if (l) return;
        let F = y;
        z.key === "ArrowRight" || z.key === "ArrowUp" ? F = y + o : (z.key === "ArrowLeft" || z.key === "ArrowDown") && (F = y - o), F !== y && (z.preventDefault(), T(F));
      },
      [l, y, o, T]
    );
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: v,
        className: x(Fr({ disabled: l, size: i }), e),
        tabIndex: l ? -1 : 0,
        role: "slider",
        "aria-valuenow": y,
        "aria-valuemin": a,
        "aria-valuemax": n,
        "aria-label": c["aria-label"] || "Slider",
        "aria-disabled": l || void 0,
        onFocus: () => V(!0),
        onBlur: () => V(!1),
        onKeyDown: C,
        children: [
          /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: Br({ size: i }),
              onClick: L,
              onTouchStart: R,
              children: [
                /* @__PURE__ */ s.jsx("div", { className: $r(), style: { width: `${A}%` } }),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    "data-slider-thumb": !0,
                    className: x(Dr({ size: i, focused: h, active: g })),
                    style: { left: `${A}%`, transform: "translate(-50%, -50%)" },
                    onMouseDown: S,
                    onTouchStart: S
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              ref: p,
              type: "range",
              min: a,
              max: n,
              step: o,
              value: y,
              onChange: (z) => T(Number(z.target.value)),
              disabled: l || void 0,
              className: "sr-only",
              "aria-valuemin": a,
              "aria-valuemax": n,
              "aria-valuenow": y,
              "aria-label": c["aria-label"] || "Slider"
            }
          )
        ]
      }
    );
  }
);
Hr.displayName = "Slider";
const Gr = k(
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
), Wr = k(
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
), Ur = w.forwardRef(
  ({ className: e, checked: t, disabled: r, onChange: a, label: n, labelPosition: o = "right", size: d, id: l, ...i }, c) => {
    const p = K(), f = l || p, m = (h) => {
      r || a == null || a(h);
    }, u = t ?? !1, y = r ?? !1, v = d === "sm" ? "translate-x-5" : d === "lg" ? "translate-x-[34px]" : "translate-x-[26px]";
    return /* @__PURE__ */ s.jsxs("label", { htmlFor: f, className: x("flex items-center gap-3", y && "cursor-not-allowed"), children: [
      n && o === "left" && /* @__PURE__ */ s.jsx("span", { className: x("text-sm font-medium text-neutral-700 dark:text-neutral-300", y && "opacity-60"), children: n }),
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "checkbox",
          id: f,
          ref: c,
          checked: u,
          disabled: y,
          onChange: m,
          className: "sr-only",
          role: "switch",
          "aria-checked": u,
          "aria-label": n,
          ...i
        }
      ),
      /* @__PURE__ */ s.jsx("div", { className: x(Gr({ checked: u, disabled: y, size: d }), e), children: /* @__PURE__ */ s.jsx(
        "span",
        {
          className: x(
            Wr({ size: d }),
            u ? v : "translate-x-0.5",
            "absolute left-0.5 top-1/2 -translate-y-1/2"
          )
        }
      ) }),
      n && o === "right" && /* @__PURE__ */ s.jsx("span", { className: x("text-sm font-medium text-neutral-700 dark:text-neutral-300", y && "opacity-60"), children: n })
    ] });
  }
);
Ur.displayName = "Switch";
const Yr = k(
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
), qr = w.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    variant: n,
    size: o,
    id: d,
    disabled: l,
    "aria-label": i,
    "aria-describedby": c,
    ...p
  }, f) => {
    const m = K(), u = d || m, y = r ? `${u}-error` : void 0, v = a ? `${u}-helper` : void 0, h = [y, v, c].filter(Boolean).join(" ") || void 0;
    return /* @__PURE__ */ s.jsxs("div", { className: x("flex flex-col group w-full", e), children: [
      t && /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            t,
            p.required && /* @__PURE__ */ s.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "textarea",
        {
          ref: f,
          id: u,
          className: x(
            Yr({ variant: n, size: o, error: !!r }),
            l && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !r && "hover:border-neutral-300 dark:hover:border-neutral-600"
          ),
          "aria-label": i || t,
          "aria-invalid": r ? "true" : void 0,
          "aria-describedby": h,
          ...p
        }
      ),
      r && /* @__PURE__ */ s.jsxs("span", { id: y, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        r
      ] }),
      a && !r && /* @__PURE__ */ s.jsx("span", { id: v, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: a })
    ] });
  }
);
qr.displayName = "TextArea";
const Xr = k(
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
), Kr = w.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    variant: n,
    size: o,
    minRows: d = 1,
    maxRows: l,
    id: i,
    disabled: c,
    value: p,
    "aria-label": f,
    "aria-describedby": m,
    ...u
  }, y) => {
    const v = K(), h = i || v, V = r ? `${h}-error` : void 0, g = a ? `${h}-helper` : void 0, j = [V, g, m].filter(Boolean).join(" ") || void 0, N = ee(null), A = y || N;
    return Z(() => {
      const T = A.current;
      if (!T) return;
      T.style.height = "auto";
      const P = T.scrollHeight, B = parseInt(getComputedStyle(T).lineHeight, 10) || 20, L = d * B, R = l ? l * B : 1 / 0, S = Math.min(Math.max(P, L), R);
      T.style.height = `${S}px`;
    }, [p, d, l, A]), /* @__PURE__ */ s.jsxs("div", { className: x("flex flex-col group w-full", e), children: [
      t && /* @__PURE__ */ s.jsxs(
        "label",
        {
          htmlFor: h,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block group-focus-within:text-primary-500 dark:group-focus-within:text-primary-400 transition-colors",
          children: [
            t,
            u.required && /* @__PURE__ */ s.jsx("span", { className: "text-error-500 ml-1", "aria-label": "required", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ s.jsx(
        "textarea",
        {
          ref: A,
          id: h,
          className: x(
            Xr({ variant: n, size: o, error: !!r, minRows: d }),
            c && "disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed dark:disabled:bg-neutral-900",
            !r && "hover:border-neutral-300 dark:hover:border-neutral-600"
          ),
          value: p,
          "aria-label": f || t,
          "aria-invalid": r ? "true" : void 0,
          "aria-describedby": j,
          disabled: c,
          ...u
        }
      ),
      r && /* @__PURE__ */ s.jsxs("span", { id: V, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        r
      ] }),
      a && !r && /* @__PURE__ */ s.jsx("span", { id: g, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: a })
    ] });
  }
);
Kr.displayName = "TextareaAutosize";
let Ge = 0;
const nt = (e = "id") => (Ge += 1, `${e}-${Ge}`), st = (e) => {
  const t = {};
  for (const r in e)
    (r.startsWith("aria-") || r.startsWith("role")) && (t[r] = e[r]);
  return t;
}, Jr = (e) => {
  const { delay: t = 300, defaultOpen: r = !1, open: a, onOpenChange: n } = e, [o, d] = H.useState(r), l = a !== void 0, i = l ? a : o, c = H.useRef(nt("tooltip")).current, p = H.useRef(null), f = H.useRef(null), m = H.useCallback(() => {
    f.current && clearTimeout(f.current), f.current = setTimeout(() => {
      l || d(!0), n == null || n(!0);
    }, t);
  }, [t, l, n]), u = H.useCallback(() => {
    f.current && clearTimeout(f.current), l || d(!1), n == null || n(!1);
  }, [l, n]), v = {
    ...{
      onMouseEnter: m,
      onMouseLeave: u,
      onFocus: m,
      onBlur: u,
      onKeyDown: (V) => {
        V.key === "Escape" && u();
      }
    },
    "aria-describedby": i ? c : void 0
  }, h = {
    ...st(e),
    id: c,
    role: "tooltip"
  };
  return {
    triggerProps: v,
    triggerRef: p,
    tooltipProps: h,
    isVisible: i,
    contentId: c
  };
}, Zr = k(
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
), Qr = w.forwardRef(
  ({ children: e, content: t, placement: r = "top", delay: a = 300, className: n, open: o, defaultOpen: d, onOpenChange: l, ...i }, c) => {
    const { triggerProps: p, triggerRef: f, tooltipProps: m, isVisible: u } = Jr({
      delay: a,
      content: t,
      open: o,
      defaultOpen: d,
      onOpenChange: l
    });
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: c,
        className: x("relative inline-block", n),
        ...i,
        children: [
          w.cloneElement(e, { ...p, ref: f }),
          u && /* @__PURE__ */ s.jsxs("div", { className: x(Zr({ placement: r, visible: u })), ...m, children: [
            t,
            /* @__PURE__ */ s.jsx(
              "div",
              {
                className: x(
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
Qr.displayName = "Tooltip";
const ea = k(
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
), ta = w.forwardRef(
  ({ className: e, variant: t, color: r, component: a, children: n, ...o }, d) => {
    const l = a || (t === "p" || t === "caption" || t === "small" ? "p" : t) || "span";
    return /* @__PURE__ */ s.jsx(
      l,
      {
        ref: d,
        className: x(ea({ variant: t, color: r }), e),
        ...o,
        children: n
      }
    );
  }
);
ta.displayName = "Typography";
const ra = (e) => {
  const { interactive: t = !1, hoverable: r = !1, cardRef: a, ...n } = e;
  return {
    cardProps: {
      ...n,
      role: t ? "article" : void 0,
      tabIndex: t ? 0 : void 0
    },
    cardRef: a,
    interactive: t,
    hoverable: r
  };
}, aa = k(
  "flex flex-col bg-white dark:bg-neutral-800 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border border-neutral-200 dark:border-neutral-700",
        outlined: "border border-neutral-200 dark:border-neutral-700",
        elevated: "shadow-soft-lg border-none",
        flat: "bg-neutral-50 dark:bg-neutral-900 border-none",
        glass: "bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5",
        premium: "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-3xl border border-white/60 shadow-soft-xl ring-1 ring-black/5 dark:from-neutral-900/80 dark:to-neutral-900/40 dark:border-neutral-700/60 dark:ring-white/10"
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
), ie = w.forwardRef(
  ({
    className: e,
    variant: t,
    hoverable: r,
    padding: a,
    children: n,
    interactive: o,
    title: d,
    headerAction: l,
    ...i
  }, c) => {
    const { cardProps: p, interactive: f, hoverable: m } = ra({
      cardRef: c,
      interactive: o,
      hoverable: r,
      ...i
    });
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        className: x(
          aa({
            variant: t,
            hoverable: m,
            padding: a
          }),
          e
        ),
        ...p,
        children: [
          (d || l) && /* @__PURE__ */ s.jsxs(Me, { padding: a, children: [
            d && /* @__PURE__ */ s.jsx(Ae, { children: d }),
            l && /* @__PURE__ */ s.jsx(Ie, { children: l })
          ] }),
          n
        ]
      }
    );
  }
);
ie.displayName = "Card";
const Me = w.forwardRef(
  ({
    className: e,
    padding: t,
    children: r,
    ...a
  }, n) => /* @__PURE__ */ s.jsx(
    "header",
    {
      ref: n,
      className: x(
        "flex items-center justify-between gap-4",
        t === "none" ? "p-0" : t === "sm" ? "px-4 pt-4 pb-0" : t === "lg" ? "px-8 pt-8 pb-0" : "px-6 pt-6 pb-0",
        t !== "none" && "border-b border-neutral-200 dark:border-neutral-700 mb-0",
        e
      ),
      ...a,
      children: r
    }
  )
);
Me.displayName = "CardHeader";
const Ae = w.forwardRef(
  ({
    className: e,
    children: t,
    ...r
  }, a) => /* @__PURE__ */ s.jsx(
    "h3",
    {
      ref: a,
      className: x("text-lg font-bold text-neutral-900 dark:text-white", e),
      ...r,
      children: t
    }
  )
);
Ae.displayName = "CardTitle";
const Ie = w.forwardRef(
  ({
    className: e,
    children: t,
    ...r
  }, a) => /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: a,
      className: x("flex-shrink-0", e),
      ...r,
      children: t
    }
  )
);
Ie.displayName = "CardHeaderAction";
const ot = w.forwardRef(
  ({
    className: e,
    padding: t,
    children: r,
    ...a
  }, n) => /* @__PURE__ */ s.jsx(
    "main",
    {
      ref: n,
      className: x(
        "flex-1",
        t === "none" ? "p-0" : t === "sm" ? "px-4 pt-4 pb-4" : t === "lg" ? "px-8 pt-8 pb-8" : "px-6 pt-6 pb-6",
        e
      ),
      ...a,
      children: r
    }
  )
);
ot.displayName = "CardContent";
const lt = w.forwardRef(
  ({
    className: e,
    padding: t,
    children: r,
    ...a
  }, n) => /* @__PURE__ */ s.jsx(
    "footer",
    {
      ref: n,
      className: x(
        "flex items-center justify-end gap-4",
        t === "none" ? "p-0" : t === "sm" ? "px-4 pt-0 pb-4" : t === "lg" ? "px-8 pt-0 pb-8" : "px-6 pt-0 pb-6",
        t !== "none" && "border-t border-neutral-200 dark:border-neutral-700 mt-0",
        e
      ),
      ...a,
      children: r
    }
  )
);
lt.displayName = "CardFooter";
ie.Header = Me;
ie.Title = Ae;
ie.HeaderAction = Ie;
ie.Content = ot;
ie.Footer = lt;
const na = k(
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
), sa = w.forwardRef(
  ({
    className: e,
    label: t,
    helperText: r,
    error: a,
    variant: n,
    size: o,
    multiple: d = !1,
    accept: l,
    onFileChange: i,
    id: c,
    "aria-label": p,
    "aria-describedby": f,
    ...m
  }, u) => {
    const y = w.useId(), v = c || y, h = a ? `${v}-error` : void 0, V = r ? `${v}-helper` : void 0, g = [h, V, f].filter(Boolean).join(" ") || void 0, [j, N] = W([]), A = ee(null), T = _((R) => {
      const S = Array.from(R.target.files || []);
      N(S), i == null || i(S);
    }, [i]), P = _((R) => {
      R.preventDefault(), R.stopPropagation();
      const S = Array.from(R.dataTransfer.files);
      N(S), i == null || i(S);
    }, [i]), B = _((R) => {
      R.preventDefault(), R.stopPropagation();
    }, []), L = _((R) => {
      N((S) => {
        const C = S.filter((z) => z !== R);
        return i == null || i(C), C;
      }), A.current && (A.current.value = "");
    }, [i]);
    return /* @__PURE__ */ s.jsxs("div", { className: x("flex flex-col w-full", e), children: [
      t && /* @__PURE__ */ s.jsx(
        "label",
        {
          htmlFor: v,
          className: "text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block",
          children: t
        }
      ),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: x(
            na({ variant: n, size: o }),
            a && "border-error-500 hover:border-error-500",
            e
          ),
          onDrop: P,
          onDragOver: B,
          onClick: () => {
            var R;
            return (R = A.current) == null ? void 0 : R.click();
          },
          children: [
            /* @__PURE__ */ s.jsx(
              "input",
              {
                id: v,
                ref: (R) => {
                  typeof u == "function" && u(R), A.current = R;
                },
                type: "file",
                multiple: d,
                accept: l,
                onChange: T,
                className: "sr-only",
                "aria-label": p || t,
                "aria-describedby": g,
                ...m
              }
            ),
            /* @__PURE__ */ s.jsx(vr, { className: "text-primary-500 text-3xl mb-3" }),
            /* @__PURE__ */ s.jsxs("p", { className: "text-sm text-neutral-600 dark:text-neutral-300 text-center", children: [
              /* @__PURE__ */ s.jsx("span", { className: "font-semibold text-primary-500 dark:text-primary-400", children: "Click to upload" }),
              " or drag and drop"
            ] }),
            r && !a && /* @__PURE__ */ s.jsx("p", { className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1 text-center", children: r })
          ]
        }
      ),
      j.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "mt-4 space-y-2", children: j.map((R, S) => /* @__PURE__ */ s.jsxs(
        "div",
        {
          className: "flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700",
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s.jsx(br, { className: "text-neutral-500 dark:text-neutral-400" }),
              /* @__PURE__ */ s.jsx("span", { className: "text-sm text-neutral-700 dark:text-neutral-300 truncate", children: R.name }),
              /* @__PURE__ */ s.jsxs("span", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: [
                "(",
                (R.size / 1024).toFixed(2),
                " KB)"
              ] })
            ] }),
            /* @__PURE__ */ s.jsx(
              "button",
              {
                type: "button",
                onClick: () => L(R),
                className: "text-neutral-500 hover:text-error-500 transition-colors",
                "aria-label": `Remove ${R.name}`,
                children: /* @__PURE__ */ s.jsx(ve, { className: "text-lg" })
              }
            )
          ]
        },
        R.name + S
      )) }),
      a && /* @__PURE__ */ s.jsxs("span", { id: h, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
        /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
        a
      ] }),
      r && a && /* @__PURE__ */ s.jsx("span", { id: V, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: r })
    ] });
  }
);
sa.displayName = "FileUpload";
const it = Ee(void 0), Vn = () => ze(it), oa = w.forwardRef(
  ({
    className: e,
    error: t,
    helperText: r,
    required: a,
    disabled: n,
    children: o,
    id: d,
    ...l
  }, i) => {
    const c = K(), p = d || c, f = t ? `${p}-error` : void 0, m = r ? `${p}-helper` : void 0, u = {
      id: p,
      error: t,
      helperText: r,
      required: a,
      disabled: n
    };
    return /* @__PURE__ */ s.jsx(it.Provider, { value: u, children: /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: i,
        className: x("flex flex-col w-full", e),
        ...l,
        children: [
          o,
          t && /* @__PURE__ */ s.jsxs("span", { id: f, role: "alert", className: "text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in", children: [
            /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", className: "w-3.5 h-3.5", children: /* @__PURE__ */ s.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }),
            t
          ] }),
          r && !t && /* @__PURE__ */ s.jsx("span", { id: m, className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block", children: r })
        ]
      }
    ) });
  }
);
oa.displayName = "FormControl";
const la = k(
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
), ia = w.forwardRef(
  ({
    className: e,
    label: t,
    error: r,
    helperText: a,
    spacing: n,
    id: o,
    ...d
  }, l) => {
    const i = K(), c = o || i;
    return /* @__PURE__ */ s.jsx("div", { className: x(la({ spacing: n }), e), children: /* @__PURE__ */ s.jsx(
      me,
      {
        ref: l,
        id: c,
        label: t,
        error: r,
        helperText: a,
        ...d
      }
    ) });
  }
);
ia.displayName = "FormField";
const da = k(
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
), ca = w.forwardRef(
  ({
    className: e,
    onSearch: t,
    onClear: r,
    clearable: a = !0,
    size: n,
    placeholder: o = "Search...",
    ...d
  }, l) => {
    const [i, c] = W(""), p = (m) => {
      const u = m.target.value;
      c(u), t == null || t(u);
    }, f = () => {
      c(""), t == null || t(""), r == null || r();
    };
    return /* @__PURE__ */ s.jsxs("div", { className: x(da({ size: n }), e), children: [
      /* @__PURE__ */ s.jsx(
        me,
        {
          ref: l,
          value: i,
          onChange: p,
          placeholder: o,
          icon: gr,
          iconPosition: "left",
          ...d
        }
      ),
      a && i && /* @__PURE__ */ s.jsx(
        "button",
        {
          type: "button",
          onClick: f,
          className: "absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors",
          "aria-label": "Clear search",
          children: /* @__PURE__ */ s.jsx(be, { className: "text-lg" })
        }
      )
    ] });
  }
);
ca.displayName = "SearchBar";
const ua = k(
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
), fa = k(
  "border-b border-neutral-200 dark:border-neutral-700 last:border-b-0"
), pa = k(
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
), ma = k(
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
), ba = w.forwardRef(
  ({
    className: e,
    variant: t,
    items: r,
    allowMultiple: a = !1,
    defaultExpanded: n = [],
    ...o
  }, d) => {
    const [l, i] = W(
      new Set(n)
    ), c = K(), p = (f) => {
      i((m) => {
        const u = new Set(m);
        return u.has(f) ? u.delete(f) : (a || u.clear(), u.add(f)), u;
      });
    };
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: d,
        className: x(ua({ variant: t }), e),
        ...o,
        children: r.map((f, m) => {
          const u = f.id || `accordion-item-${m}`, y = l.has(u), v = `${c}-trigger-${m}`, h = `${c}-content-${m}`;
          return /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: fa(),
              children: [
                /* @__PURE__ */ s.jsxs(
                  "button",
                  {
                    id: v,
                    type: "button",
                    onClick: () => !f.disabled && p(u),
                    disabled: f.disabled,
                    "aria-expanded": y,
                    "aria-controls": h,
                    className: x(
                      pa({ expanded: y }),
                      f.disabled && "opacity-50 cursor-not-allowed"
                    ),
                    children: [
                      /* @__PURE__ */ s.jsx("span", { children: f.title }),
                      /* @__PURE__ */ s.jsx(
                        Te,
                        {
                          className: x(
                            "text-neutral-500 dark:text-neutral-400 transition-transform duration-300",
                            y && "transform rotate-180"
                          )
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "div",
                  {
                    id: h,
                    role: "region",
                    "aria-labelledby": v,
                    className: x(
                      ma({ expanded: y }),
                      "px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                    ),
                    children: f.content
                  }
                )
              ]
            },
            u
          );
        })
      }
    );
  }
);
ba.displayName = "Accordion";
const xa = k(
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
), ha = {
  info: at,
  success: rt,
  warning: mr,
  error: ve
}, ga = w.forwardRef(
  ({ className: e, variant: t = "info", title: r, description: a, showIcon: n = !0, closable: o = !1, onClose: d, action: l, ...i }, c) => {
    const f = ha[t ?? "info"];
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: c,
        className: x(xa({ variant: t, className: e })),
        role: "alert",
        ...i,
        children: [
          n && f && /* @__PURE__ */ s.jsx(f, { className: "flex-shrink-0 text-xl" }),
          /* @__PURE__ */ s.jsxs("div", { className: "flex-1", children: [
            r && /* @__PURE__ */ s.jsx("h4", { className: "text-lg font-semibold mb-1", children: r }),
            /* @__PURE__ */ s.jsx("p", { className: "text-sm", children: a })
          ] }),
          l && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0 ml-auto", children: l }),
          o && /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: d,
              className: "flex-shrink-0 p-1 -mr-1 -mt-1 transition-colors duration-150 hover:bg-current/[0.1]",
              "aria-label": "Close alert",
              children: /* @__PURE__ */ s.jsx(ve, { className: "text-lg opacity-70" })
            }
          )
        ]
      }
    );
  }
);
ga.displayName = "Alert";
const va = k(
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
), ya = w.forwardRef(
  ({ className: e, variant: t, position: r, message: a, action: n, onClose: o, ...d }, l) => {
    const [i, c] = w.useState(!0), p = () => {
      c(!1), o == null || o();
    };
    return i ? /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: l,
        className: x(va({ variant: t, position: r, className: e })),
        role: "banner",
        ...d,
        children: [
          /* @__PURE__ */ s.jsx("p", { className: "text-sm font-medium flex-1", children: a }),
          n && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: n }),
          o && /* @__PURE__ */ s.jsx(
            "button",
            {
              onClick: p,
              className: "flex-shrink-0 ml-auto p-1 transition-colors duration-150 hover:bg-white/20",
              "aria-label": "Close banner",
              children: /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
            }
          )
        ]
      }
    ) : null;
  }
);
ya.displayName = "Banner";
const wa = w.forwardRef(
  ({ items: e, separator: t = /* @__PURE__ */ s.jsx(pe, { className: "text-neutral-400 dark:text-neutral-500 mx-2 text-xs" }), className: r, ...a }, n) => /* @__PURE__ */ s.jsx("nav", { "aria-label": "breadcrumb", className: x("flex", r), ref: n, ...a, children: /* @__PURE__ */ s.jsx("ol", { className: "flex items-center space-x-0", children: e.map((o, d) => /* @__PURE__ */ s.jsxs("li", { className: "flex items-center", children: [
    o.href ? /* @__PURE__ */ s.jsx(
      "a",
      {
        href: o.href,
        onClick: o.onClick,
        className: "text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
        children: o.label
      }
    ) : /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-neutral-800 dark:text-neutral-200", children: o.label }),
    d < e.length - 1 && t
  ] }, d)) }) })
);
wa.displayName = "Breadcrumb";
const dt = ({ children: e, container: t }) => {
  const [r, a] = W(!1), [n, o] = W(null);
  return Z(() => {
    if (a(!0), t)
      o(t);
    else {
      const d = document.createElement("div");
      return document.body.appendChild(d), o(d), () => {
        document.body.removeChild(d);
      };
    }
  }, [t]), !r || !n ? null : wt(e, n);
}, ka = k(
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
), ja = k(
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
), Na = w.forwardRef(
  ({ className: e, open: t, onClose: r, position: a = "left", title: n, children: o, ...d }, l) => {
    const i = ee(null), [c, p] = w.useState(t);
    w.useImperativeHandle(l, () => i.current);
    const f = _(() => {
      r();
    }, [r]), m = _(
      (u) => {
        u.key === "Escape" && t && f();
      },
      [f, t]
    );
    return Z(() => {
      if (t)
        p(!0), document.addEventListener("keydown", m), document.body.style.overflow = "hidden";
      else {
        const u = setTimeout(() => {
          p(!1);
        }, 300);
        return document.removeEventListener("keydown", m), document.body.style.overflow = "", () => clearTimeout(u);
      }
      return () => {
        document.removeEventListener("keydown", m), document.body.style.overflow = "";
      };
    }, [t, m]), c ? /* @__PURE__ */ s.jsx(dt, { children: /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx("div", { className: x(ja({ open: t })), onClick: f }),
      /* @__PURE__ */ s.jsxs(
        "div",
        {
          ref: i,
          className: x(
            ka({ open: t, position: a, className: e })
          ),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": n ? "drawer-title" : void 0,
          ...d,
          children: [
            /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
              n && /* @__PURE__ */ s.jsx("h3", { id: "drawer-title", className: "text-lg font-semibold text-neutral-900 dark:text-white", children: n }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: f,
                  type: "button",
                  className: "p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
                  "aria-label": "Close drawer",
                  children: /* @__PURE__ */ s.jsx(be, { className: "text-neutral-500 dark:text-neutral-400 text-lg" })
                }
              )
            ] }),
            /* @__PURE__ */ s.jsx("div", { className: "p-4 flex-1 overflow-y-auto", children: o })
          ]
        }
      )
    ] }) }) : null;
  }
);
Na.displayName = "Drawer";
const Va = k(
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
), Ra = k(
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
), Ea = w.forwardRef(
  ({
    items: e,
    variant: t,
    onItemClick: r,
    className: a,
    ...n
  }, o) => {
    const d = (l) => {
      l.disabled || (l.onClick && l.onClick(), r && r(l));
    };
    return /* @__PURE__ */ s.jsx(
      "ul",
      {
        ref: o,
        className: x(Va({ variant: t }), a),
        role: "list",
        ...n,
        children: e.map((l) => {
          const i = !!(l.onClick || r);
          return /* @__PURE__ */ s.jsxs(
            "li",
            {
              className: x(Ra({ dense: !1, clickable: i, disabled: l.disabled })),
              onClick: () => d(l),
              role: "listitem",
              "aria-disabled": l.disabled,
              children: [
                l.avatar && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0 w-10 h-10 overflow-hidden flex items-center justify-center", children: l.avatar }),
                /* @__PURE__ */ s.jsx("div", { className: "flex-1 min-w-0", children: l.content }),
                l.action && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: l.action })
              ]
            },
            l.id
          );
        })
      }
    );
  }
);
Ea.displayName = "List";
const za = k(
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
), We = k(
  "flex items-center gap-2.5 px-3 py-2 text-sm font-medium transition-all duration-200 select-none outline-none",
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
), Rn = ({
  items: e,
  activeItem: t,
  orientation: r,
  variant: a,
  className: n,
  onItemClick: o
}) => /* @__PURE__ */ s.jsx("nav", { className: x(za({ orientation: r, variant: a, className: n })), children: e.map((d) => {
  const l = t === d.id || t === d.href, i = d.icon && typeof d.icon == "function" ? w.createElement(d.icon, { className: x("text-lg", l ? "text-current" : "text-neutral-400 dark:text-neutral-500 group-hover:text-current") }) : d.icon, c = /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    i && /* @__PURE__ */ s.jsx("span", { className: "flex items-center justify-center w-5 h-5", children: typeof i == "function" ? /* @__PURE__ */ s.jsx(i, {}) : i }),
    /* @__PURE__ */ s.jsx("span", { className: "truncate", children: d.label }),
    d.badge && /* @__PURE__ */ s.jsx("span", { className: "ml-auto flex items-center justify-center h-5 px-1.5 text-[10px] font-bold bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300", children: d.badge })
  ] }), p = (f) => {
    var m;
    if (d.disabled) {
      f.preventDefault();
      return;
    }
    (m = d.onClick) == null || m.call(d), o == null || o(d);
  };
  return d.href ? /* @__PURE__ */ s.jsx(
    "a",
    {
      href: d.href,
      onClick: p,
      className: x(We({ active: l, disabled: d.disabled, variant: a }), "group"),
      "aria-current": l ? "page" : void 0,
      children: c
    },
    d.id
  ) : /* @__PURE__ */ s.jsx(
    "button",
    {
      onClick: p,
      disabled: d.disabled,
      className: x(We({ active: l, disabled: d.disabled, variant: a }), "w-full text-left group"),
      type: "button",
      children: c
    },
    d.id
  );
}) }), ct = (e) => {
  const { enabled: t = !0, containerRef: r } = e;
  H.useEffect(() => {
    if (!t)
      return;
    const a = r.current;
    if (!a)
      return;
    const n = [];
    if (a.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    ).forEach((i) => {
      i instanceof HTMLElement && n.push(i);
    }), n.length === 0)
      return;
    const o = n[0], d = n[n.length - 1], l = (i) => {
      i.key === "Tab" && (i.shiftKey ? document.activeElement === o && (i.preventDefault(), d.focus()) : document.activeElement === d && (i.preventDefault(), o.focus()));
    };
    return a.addEventListener("keydown", l), o.focus(), () => {
      a.removeEventListener("keydown", l);
    };
  }, [t, r]);
}, Ca = (e) => {
  const { enabled: t = !0, restoreElementRef: r } = e, a = H.useRef(null);
  H.useEffect(() => {
    if (t)
      return a.current = document.activeElement, () => {
        const n = (r == null ? void 0 : r.current) || a.current;
        n && typeof n.focus == "function" && n.focus();
      };
  }, [t, r]);
}, Ta = k(
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
), Ma = k(
  "relative flex flex-col w-full max-h-[90vh] overflow-hidden bg-white dark:bg-neutral-800 shadow-soft-xl transition-all duration-300"
), ne = w.forwardRef(
  ({
    open: e,
    onClose: t,
    size: r,
    closeOnOverlayClick: a = !0,
    closeOnEscape: n = !0,
    className: o,
    children: d,
    ...l
  }, i) => {
    const [c, p] = W(!1), [f, m] = W(!1), u = ee(null), y = K(), v = K();
    ct({ enabled: e, containerRef: u }), Ca({ enabled: e }), Z(() => {
      m(!0);
    }, []);
    const h = _(() => {
      p(!0), setTimeout(() => {
        p(!1), t();
      }, 300);
    }, [t]);
    Z(() => {
      if (e) {
        const g = (j) => {
          n && j.key === "Escape" && h();
        };
        return document.addEventListener("keydown", g), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", g), document.body.style.overflow = "";
        };
      }
    }, [e, n, h]);
    const V = (g) => {
      a && g.target === g.currentTarget && h();
    };
    return !f || !e && !c ? null : /* @__PURE__ */ s.jsx(dt, { children: /* @__PURE__ */ s.jsx(
      "div",
      {
        className: x(
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          c ? "opacity-0" : "opacity-100"
        ),
        onClick: V,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": y,
        "aria-describedby": v,
        children: /* @__PURE__ */ s.jsx(
          "div",
          {
            ref: u,
            className: x(
              Ta({ size: r }),
              Ma(),
              c ? "translate-y-8 opacity-0" : "translate-y-0 opacity-100",
              o
            ),
            onClick: (g) => g.stopPropagation(),
            ...l,
            children: w.Children.map(d, (g) => {
              if (w.isValidElement(g) && typeof g.type != "string") {
                const j = g.type;
                if (j.displayName === "ModalTitle")
                  return w.cloneElement(g, { id: y });
                if (j.displayName === "ModalDescription")
                  return w.cloneElement(g, { id: v });
                if (j.displayName === "ModalCloseButton")
                  return w.cloneElement(g, { onClick: h });
              }
              return g;
            })
          }
        )
      }
    ) });
  }
);
ne.displayName = "Modal";
const ut = w.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s.jsx(
    "header",
    {
      ref: a,
      className: x(
        "flex items-center justify-between border-b border-neutral-200 dark:border-neutral-700 px-6 py-4",
        e
      ),
      ...r,
      children: t
    }
  )
);
ut.displayName = "ModalHeader";
const ft = w.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s.jsx(
    "h2",
    {
      ref: a,
      className: x("text-xl font-semibold text-neutral-900 dark:text-white", e),
      ...r,
      children: t
    }
  )
);
ft.displayName = "ModalTitle";
const pt = w.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ s.jsx(
    "button",
    {
      ref: r,
      "aria-label": "Close modal",
      className: x(
        "flex items-center justify-center p-1 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-white",
        e
      ),
      ...t,
      children: /* @__PURE__ */ s.jsx(be, { className: "text-lg" })
    }
  )
);
pt.displayName = "ModalCloseButton";
const mt = w.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s.jsx(
    "p",
    {
      ref: a,
      className: x("px-6 py-2 text-sm text-neutral-600 dark:text-neutral-400", e),
      ...r,
      children: t
    }
  )
);
mt.displayName = "ModalDescription";
const bt = w.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s.jsx(
    "main",
    {
      ref: a,
      className: x("flex-1 overflow-y-auto p-6 text-neutral-600 dark:text-neutral-300", e),
      ...r,
      children: t
    }
  )
);
bt.displayName = "ModalContent";
const xt = w.forwardRef(
  ({ className: e, children: t, ...r }, a) => /* @__PURE__ */ s.jsx(
    "footer",
    {
      ref: a,
      className: x(
        "flex items-center justify-stretch gap-2 border-t border-neutral-200 dark:border-neutral-700 px-6 py-4",
        e
      ),
      ...r,
      children: w.Children.map(t, (n) => {
        if (w.isValidElement(n)) {
          const o = n.props;
          return w.cloneElement(n, {
            className: x("flex-1", o.className)
          });
        }
        return n;
      })
    }
  )
);
xt.displayName = "ModalFooter";
ne.Header = ut;
ne.Title = ft;
ne.CloseButton = pt;
ne.Description = mt;
ne.Content = bt;
ne.Footer = xt;
const Aa = k(
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
), Ia = k(
  "flex items-center justify-center min-w-[40px] h-10 px-2 text-sm font-medium transition-colors duration-200 border",
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
), ht = w.forwardRef(
  ({
    currentPage: e,
    totalPages: t,
    onPageChange: r,
    showFirstLast: a = !1,
    showPrevNext: n = !0,
    size: o,
    className: d,
    ...l
  }, i) => {
    const c = () => {
      const u = [], v = Math.floor(2.5);
      if (t <= 5)
        return Array.from({ length: t }, (h, V) => V + 1);
      if (e <= v + 1) {
        for (let h = 1; h <= 4; h += 1) u.push(h);
        u.push("ellipsis"), u.push(t);
      } else if (e >= t - v) {
        u.push(1), u.push("ellipsis");
        for (let h = t - 5 + 2; h <= t; h += 1) u.push(h);
      } else {
        u.push(1), u.push("ellipsis");
        for (let h = e - Math.floor(1); h <= e + Math.floor(1); h += 1) u.push(h);
        u.push("ellipsis"), u.push(t);
      }
      return u;
    }, p = (u) => {
      u >= 1 && u <= t && u !== e && r(u);
    };
    if (t <= 1) return null;
    const f = ({
      page: u,
      label: y,
      icon: v,
      disabled: h = !1
    }) => {
      const V = u === "ellipsis", g = u === e, j = typeof u == "number" ? `page-${u}` : `item-${y}`, N = {
        className: x(Ia({ variant: V ? "ellipsis" : "page", active: g, disabled: h })),
        "aria-label": y,
        "aria-current": g ? "page" : void 0,
        "aria-disabled": h
      };
      if (V)
        return /* @__PURE__ */ s.jsx("span", { ...N, children: "..." }, j);
      const A = v || u;
      return /* @__PURE__ */ s.jsx("button", { type: "button", onClick: () => typeof u == "number" && p(u), disabled: h, ...N, children: A }, j);
    }, m = c();
    return /* @__PURE__ */ s.jsxs(
      "nav",
      {
        ref: i,
        className: x(Aa({ size: o }), d),
        "aria-label": "Pagination",
        ...l,
        children: [
          a && f({ page: 1, label: "First page", icon: /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ s.jsx(je, { size: 12 }),
            /* @__PURE__ */ s.jsx(je, { size: 12, className: "-ml-1" })
          ] }), disabled: e === 1 }),
          n && f({ page: Math.max(1, e - 1), label: "Previous page", icon: /* @__PURE__ */ s.jsx(je, { size: 14 }), disabled: e === 1 }),
          m.map((u, y) => f({ page: u, label: u === "ellipsis" ? `ellipsis-${y}` : `Page ${u}` })),
          n && f({ page: Math.min(t, e + 1), label: "Next page", icon: /* @__PURE__ */ s.jsx(pe, { size: 14 }), disabled: e === t }),
          a && f({ page: t, label: "Last page", icon: /* @__PURE__ */ s.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ s.jsx(pe, { size: 12 }),
            /* @__PURE__ */ s.jsx(pe, { size: 12, className: "-ml-1" })
          ] }), disabled: e === t })
        ]
      }
    );
  }
);
ht.displayName = "Pagination";
const Sa = (e) => {
  const { trigger: t = "click", defaultOpen: r = !1, open: a, onOpenChange: n } = e, [o, d] = H.useState(r), l = a !== void 0, i = l ? a : o, c = H.useRef(nt("popover")).current, p = H.useRef(null), f = H.useRef(null), m = H.useCallback(() => {
    l || d(!0), n == null || n(!0);
  }, [l, n]), u = H.useCallback(() => {
    l || d(!1), n == null || n(!1);
  }, [l, n]), y = H.useCallback(() => {
    t === "click" && (i ? u() : m());
  }, [t, i, u, m]), v = H.useCallback(() => {
    t === "hover" && m();
  }, [t, m]), h = H.useCallback(() => {
    t === "hover" && u();
  }, [t, u]);
  H.useEffect(() => {
    const j = (N) => {
      i && p.current && !p.current.contains(N.target) && f.current && !f.current.contains(N.target) && u();
    };
    return i && t === "click" ? document.addEventListener("mousedown", j) : document.removeEventListener("mousedown", j), () => {
      document.removeEventListener("mousedown", j);
    };
  }, [i, t, u]), ct({ enabled: i, containerRef: f });
  const V = {
    onClick: y,
    onMouseEnter: v,
    onMouseLeave: h,
    "aria-haspopup": "dialog",
    "aria-expanded": i,
    "aria-controls": c
  }, g = {
    ...st(e),
    id: c,
    role: "dialog",
    tabIndex: -1
  };
  return {
    triggerProps: V,
    triggerRef: p,
    popoverProps: g,
    popoverRef: f,
    isOpen: i,
    contentId: c
  };
}, Pa = k(
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
), Oa = w.forwardRef(
  ({ children: e, content: t, placement: r = "bottom", arrow: a = !0, className: n, trigger: o, open: d, defaultOpen: l, onOpenChange: i, ...c }, p) => {
    const f = ee(null), { triggerProps: m, triggerRef: u, popoverProps: y, popoverRef: v, isOpen: h } = Sa({
      content: t,
      trigger: o,
      open: d,
      defaultOpen: l,
      onOpenChange: i,
      ...c
    });
    return w.useImperativeHandle(p, () => f.current), /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: f,
        className: x("relative inline-block", n),
        children: [
          w.cloneElement(e, { ...m, ref: u }),
          h && /* @__PURE__ */ s.jsxs(
            "div",
            {
              ref: v,
              className: x(
                Pa({ placement: r, visible: h }),
                n
              ),
              ...y,
              children: [
                t,
                a && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: x(
                        "absolute w-0 h-0 border-solid border-transparent",
                        r === "top" && "top-full left-1/2 -translate-x-1/2 border-t-neutral-300 dark:border-t-neutral-600 border-[9px] mt-[-1px]",
                        r === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-300 dark:border-b-neutral-600 border-[9px] mb-[-1px]",
                        r === "left" && "left-full top-1/2 -translate-y-1/2 border-l-neutral-300 dark:border-l-neutral-600 border-[9px] ml-[-1px]",
                        r === "right" && "right-full top-1/2 -translate-y-1/2 border-r-neutral-300 dark:border-r-neutral-600 border-[9px] mr-[-1px]"
                      )
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "div",
                    {
                      className: x(
                        "absolute w-0 h-0 border-solid border-transparent",
                        r === "top" && "top-full left-1/2 -translate-x-1/2 border-t-white dark:border-t-neutral-800 border-8 mt-[-2px]",
                        r === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-white dark:border-b-neutral-800 border-8 mb-[-2px]",
                        r === "left" && "left-full top-1/2 -translate-y-1/2 border-l-white dark:border-l-neutral-800 border-8 ml-[-2px]",
                        r === "right" && "right-full top-1/2 -translate-y-1/2 border-r-white dark:border-r-neutral-800 border-8 mr-[-2px]"
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
Oa.displayName = "Popover";
const _a = k(
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
), La = k(
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
), Fa = w.forwardRef(
  ({ className: e, size: t, rounded: r, value: a, max: n = 100, variant: o = "primary", showLabel: d = !1, ...l }, i) => {
    const c = Math.max(0, Math.min(100, a / n * 100));
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: i,
        className: x(_a({ size: t, rounded: r, className: e })),
        role: "progressbar",
        "aria-valuenow": a,
        "aria-valuemin": 0,
        "aria-valuemax": n,
        ...l,
        children: /* @__PURE__ */ s.jsx(
          "div",
          {
            className: x(La({ variant: o })),
            style: { width: `${c}%` },
            children: d && `${Math.round(c)}%`
          }
        )
      }
    );
  }
);
Fa.displayName = "Progress";
const Ba = k(
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
), $a = w.forwardRef(
  ({ className: e, variant: t, width: r, height: a, children: n, ...o }, d) => n ? /* @__PURE__ */ s.jsxs("div", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ s.jsx("div", { className: "absolute inset-0 animate-pulse bg-neutral-200 dark:bg-neutral-700" }),
    /* @__PURE__ */ s.jsx("div", { className: "opacity-0", children: n })
  ] }) : /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: d,
      className: x(Ba({ variant: t, width: r, height: a, className: e })),
      ...o
    }
  )
);
$a.displayName = "Skeleton";
const Da = k(
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
), Ha = k(
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
), Ga = k(
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
), Wa = w.forwardRef(
  ({ steps: e, currentStep: t, orientation: r = "horizontal", size: a = "md", className: n, ...o }, d) => /* @__PURE__ */ s.jsx("div", { ref: d, className: x(Da({ orientation: r, className: n })), ...o, children: e.map((l, i) => {
    const c = i < t ? "completed" : i === t ? "active" : "upcoming", p = i === e.length - 1;
    return /* @__PURE__ */ s.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ s.jsxs("div", { className: x(Ha({ orientation: r, status: c })), children: [
        /* @__PURE__ */ s.jsx("div", { className: x(Ga({ size: a, status: c })), children: c === "completed" ? /* @__PURE__ */ s.jsx(fr, { className: "text-white" }) : i + 1 }),
        /* @__PURE__ */ s.jsxs("div", { className: x(
          r === "horizontal" ? "mt-2" : "ml-3 text-left"
        ), children: [
          /* @__PURE__ */ s.jsx("div", { className: "font-medium text-sm", children: l.label }),
          l.description && /* @__PURE__ */ s.jsx("div", { className: "text-xs text-neutral-500 dark:text-neutral-400", children: l.description })
        ] })
      ] }),
      !p && /* @__PURE__ */ s.jsx("div", { className: x(
        "flex-1",
        r === "horizontal" && "h-[2px] bg-neutral-200 dark:bg-neutral-700 mx-2",
        r === "vertical" && "w-[2px] bg-neutral-200 dark:bg-neutral-700 my-2 ml-[19px]"
      ) })
    ] }, i);
  }) })
);
Wa.displayName = "Stepper";
const Ua = k(
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
), Ya = w.forwardRef(
  ({
    columns: e,
    data: t,
    variant: r,
    size: a,
    onRowClick: n,
    className: o,
    ...d
  }, l) => {
    const i = (c) => {
      n && n(c);
    };
    return /* @__PURE__ */ s.jsxs(
      "table",
      {
        ref: l,
        className: x(Ua({ variant: r, size: a }), o),
        role: "table",
        ...d,
        children: [
          /* @__PURE__ */ s.jsx("thead", { className: "bg-neutral-50 dark:bg-neutral-900/50", children: /* @__PURE__ */ s.jsx("tr", { children: e.map((c) => /* @__PURE__ */ s.jsx(
            "th",
            {
              scope: "col",
              className: x(
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
          /* @__PURE__ */ s.jsx("tbody", { className: "divide-y divide-neutral-200 dark:divide-neutral-700", children: t.map((c, p) => /* @__PURE__ */ s.jsx(
            "tr",
            {
              onClick: () => i(c),
              className: x(
                "transition-colors",
                n && "cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/50"
              ),
              children: e.map((f) => {
                const m = c[f.key];
                return /* @__PURE__ */ s.jsx(
                  "td",
                  {
                    className: x(
                      "p-4 text-neutral-700 dark:text-neutral-300 align-middle",
                      a === "sm" && "p-2",
                      a === "lg" && "p-6",
                      f.align === "center" && "text-center",
                      f.align === "right" && "text-right",
                      !f.align && "text-left"
                    ),
                    children: m
                  },
                  f.key
                );
              })
            },
            p
          )) })
        ]
      }
    );
  }
);
Ya.displayName = "Table";
const qa = k(
  "flex items-center justify-between px-4 py-3 border-t border-neutral-200 dark:border-neutral-700"
), Xa = (e, t, r) => `${e}-${t} of ${r}`, Ka = w.forwardRef(
  ({
    className: e,
    count: t,
    rowsPerPage: r,
    page: a,
    onPageChange: n,
    onRowsPerPageChange: o,
    rowsPerPageLabel: d = "Rows per page:",
    rowsPerPageOptions: l = [5, 10, 25, 50, 100],
    labelDisplayedRows: i = Xa,
    ...c
  }, p) => {
    const f = Math.ceil(t / r), m = a * r + 1, u = Math.min((a + 1) * r, t), y = (h) => {
      n(h);
    }, v = (h) => {
      const V = parseInt(h.target.value, 10);
      o == null || o(V), n(0);
    };
    return /* @__PURE__ */ s.jsxs(
      "div",
      {
        ref: p,
        className: x(qa(), e),
        ...c,
        children: [
          /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-4", children: [
            o && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ s.jsx("label", { className: "text-sm text-neutral-700 dark:text-neutral-300", children: d }),
              /* @__PURE__ */ s.jsx(
                "select",
                {
                  value: r,
                  onChange: v,
                  className: "px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500/50",
                  children: l.map((h) => /* @__PURE__ */ s.jsx("option", { value: h, children: h }, h))
                }
              )
            ] }),
            /* @__PURE__ */ s.jsx("span", { className: "text-sm text-neutral-700 dark:text-neutral-300", children: i(m, u, t) })
          ] }),
          /* @__PURE__ */ s.jsx(
            ht,
            {
              currentPage: a + 1,
              totalPages: f,
              onPageChange: (h) => y(h - 1),
              showFirstLast: !0,
              showPrevNext: !0
            }
          )
        ]
      }
    );
  }
);
Ka.displayName = "TablePagination";
const Ja = k(
  "flex items-center gap-0.5 border-b border-neutral-200 dark:border-neutral-700"
), Za = k(
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
      disabled: !1
    }
  }
), Qa = w.forwardRef(
  ({
    items: e,
    value: t,
    onValueChange: r,
    variant: a = "default",
    className: n,
    ...o
  }, d) => {
    const l = (c, p) => {
      p || r(c);
    }, i = e.find((c) => c.value === t);
    return /* @__PURE__ */ s.jsxs("div", { ref: d, className: x("flex flex-col w-full", n), ...o, children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": "Tabs",
          className: x(
            Ja(),
            a === "pills" && "border-b-0 gap-1"
          ),
          children: e.map((c) => {
            const p = t === c.value;
            return /* @__PURE__ */ s.jsxs(
              "button",
              {
                type: "button",
                role: "tab",
                "aria-selected": p,
                "aria-controls": `tabpanel-${c.value}`,
                id: `tab-${c.value}`,
                onClick: () => l(c.value, c.disabled),
                tabIndex: c.disabled ? -1 : p ? 0 : -1,
                disabled: c.disabled,
                "aria-disabled": c.disabled,
                className: x(Za({ variant: a, active: p, disabled: c.disabled })),
                children: [
                  c.icon && /* @__PURE__ */ s.jsx("span", { className: "text-lg", children: c.icon }),
                  /* @__PURE__ */ s.jsx("span", { children: c.label })
                ]
              },
              c.value
            );
          })
        }
      ),
      i && i.content && /* @__PURE__ */ s.jsx(
        "div",
        {
          id: `tabpanel-${i.value}`,
          role: "tabpanel",
          "aria-labelledby": `tab-${i.value}`,
          className: "py-4 w-full text-neutral-600 dark:text-neutral-300",
          children: i.content
        }
      )
    ] });
  }
);
Qa.displayName = "Tabs";
const en = k(
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
), tn = (e) => {
  switch (e) {
    case "success":
      return /* @__PURE__ */ s.jsx(rt, { className: "text-success-500 dark:text-success-400 text-xl" });
    case "error":
      return /* @__PURE__ */ s.jsx(ve, { className: "text-error-500 dark:text-error-400 text-xl" });
    case "warning":
      return /* @__PURE__ */ s.jsx(pr, { className: "text-warning-500 dark:text-warning-400 text-xl" });
    default:
      return /* @__PURE__ */ s.jsx(at, { className: "text-info-500 dark:text-info-400 text-xl" });
  }
}, rn = ({
  id: e,
  message: t,
  type: r = "info",
  duration: a = 3e3,
  position: n = "top-right",
  onClose: o
}) => {
  const [d, l] = W(!1), [i, c] = W(!1);
  Z(() => {
    const m = requestAnimationFrame(() => {
      c(!0);
    });
    if (a > 0) {
      const u = setTimeout(() => {
        c(!1), l(!0), setTimeout(() => {
          o(e);
        }, 300);
      }, a);
      return () => {
        clearTimeout(u), cancelAnimationFrame(m);
      };
    }
    return () => cancelAnimationFrame(m);
  }, [a, e, o]);
  const p = () => {
    c(!1), l(!0), setTimeout(() => {
      o(e);
    }, 300);
  }, f = () => i && !d ? "translate-x-0 translate-y-0" : n != null && n.includes("top") ? "-translate-y-full opacity-0" : n != null && n.includes("bottom") ? "translate-y-full opacity-0" : "translate-x-full opacity-0";
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: x(
        en({ variant: r }),
        f(),
        i && !d ? "opacity-100" : "opacity-0"
      ),
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: tn(r) }),
        /* @__PURE__ */ s.jsx("div", { className: "flex-1 text-sm font-medium", children: t }),
        /* @__PURE__ */ s.jsx(
          "button",
          {
            onClick: p,
            "aria-label": "Close toast",
            className: "flex-shrink-0 p-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
            children: /* @__PURE__ */ s.jsx(be, { className: "text-sm opacity-70" })
          }
        )
      ]
    }
  );
}, an = k(
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
), gt = Ee(void 0), En = ({ children: e, position: t = "top-right" }) => {
  const [r, a] = W([]), n = _((i) => {
    const c = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, p = i.position || t, f = {
      ...i,
      id: c,
      position: p
    };
    a((m) => [...m, f]);
  }, [t]), o = _((i) => {
    a((c) => c.filter((p) => p.id !== i));
  }, []), d = Ne(() => r.reduce((i, c) => {
    const p = c.position || t;
    return i[p] || (i[p] = []), i[p].push(c), i;
  }, {}), [r, t]), l = Ne(() => ({ showToast: n, removeToast: o }), [n, o]);
  return /* @__PURE__ */ s.jsxs(gt.Provider, { value: l, children: [
    e,
    Object.entries(d).map(([i, c]) => /* @__PURE__ */ s.jsx(
      "div",
      {
        className: x(an({ position: i })),
        children: c.map((p) => /* @__PURE__ */ s.jsx(
          rn,
          {
            ...p,
            onClose: o
          },
          p.id
        ))
      },
      i
    ))
  ] });
}, zn = () => {
  const e = ze(gt);
  if (e === void 0)
    throw new Error("useToast must be used within a ToastProvider");
  return e;
}, nn = k(
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
), sn = w.forwardRef(
  ({ className: e, variant: t, centered: r, as: a = "div", ...n }, o) => /* @__PURE__ */ s.jsx(
    a,
    {
      ref: o,
      className: x(nn({ variant: t, centered: r, className: e })),
      ...n
    }
  )
);
sn.displayName = "Container";
const on = k(
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
), ln = w.forwardRef(
  ({ className: e, orientation: t, variant: r, label: a, labelPosition: n = "center", ...o }, d) => a && t === "horizontal" ? /* @__PURE__ */ s.jsxs("div", { className: x("flex items-center w-full my-4", e), ref: d, ...o, children: [
    /* @__PURE__ */ s.jsx("div", { className: x(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      r === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      r === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      n === "left" && "flex-none w-8",
      n === "right" && "flex-1"
    ) }),
    /* @__PURE__ */ s.jsx("span", { className: "px-3 text-sm text-neutral-500 dark:text-neutral-400 font-medium whitespace-nowrap", children: a }),
    /* @__PURE__ */ s.jsx("div", { className: x(
      "h-[1px] bg-neutral-200 dark:bg-neutral-700 flex-1",
      r === "dashed" && "bg-transparent border-t border-dashed border-neutral-200 dark:border-neutral-700",
      r === "dotted" && "bg-transparent border-t-2 border-dotted border-neutral-200 dark:border-neutral-700",
      n === "right" && "flex-none w-8",
      n === "left" && "flex-1"
    ) })
  ] }) : /* @__PURE__ */ s.jsx(
    "div",
    {
      ref: d,
      className: x(on({ orientation: t, variant: r, className: e })),
      ...o
    }
  )
);
ln.displayName = "Divider";
const dn = k(
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
), cn = w.forwardRef(
  ({
    className: e,
    variant: t,
    links: r,
    copyright: a,
    ...n
  }, o) => /* @__PURE__ */ s.jsxs(
    "footer",
    {
      ref: o,
      className: x(dn({ variant: t }), e),
      role: "contentinfo",
      ...n,
      children: [
        r && r.length > 0 && /* @__PURE__ */ s.jsx("div", { className: "flex flex-wrap items-center gap-6 mb-4", children: r.map((d, l) => /* @__PURE__ */ s.jsx(
          "a",
          {
            href: d.href,
            className: "text-sm text-neutral-600 hover:text-primary-500 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors",
            children: d.label
          },
          l
        )) }),
        a && /* @__PURE__ */ s.jsx("div", { className: "text-sm text-neutral-500 dark:text-neutral-400", children: a })
      ]
    }
  )
);
cn.displayName = "Footer";
const un = k(
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
), fn = w.forwardRef(
  ({ className: e, cols: t, gap: r, align: a, justify: n, padding: o, margin: d, as: l = "div", ...i }, c) => /* @__PURE__ */ s.jsx(
    l,
    {
      ref: c,
      className: x(un({ cols: t, gap: r, align: a, justify: n, padding: o, margin: d, className: e })),
      ...i
    }
  )
);
fn.displayName = "Grid";
const pn = k(
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
), mn = w.forwardRef(
  ({
    className: e,
    variant: t,
    logo: r,
    nav: a,
    actions: n,
    ...o
  }, d) => /* @__PURE__ */ s.jsxs(
    "header",
    {
      ref: d,
      className: x(pn({ variant: t }), e),
      role: "banner",
      ...o,
      children: [
        r && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0", children: r }),
        a && /* @__PURE__ */ s.jsx("nav", { className: "flex-1 flex items-center justify-center", children: a }),
        n && /* @__PURE__ */ s.jsx("div", { className: "flex-shrink-0 flex items-center gap-2", children: n })
      ]
    }
  )
);
mn.displayName = "Header";
const bn = k(
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
), xn = w.forwardRef(
  ({
    className: e,
    variant: t,
    header: r,
    sidebar: a,
    footer: n,
    children: o,
    ...d
  }, l) => /* @__PURE__ */ s.jsxs(
    "div",
    {
      ref: l,
      className: x(bn({ variant: t }), e),
      ...d,
      children: [
        r && /* @__PURE__ */ s.jsx("header", { children: r }),
        /* @__PURE__ */ s.jsxs("div", { className: "flex flex-1 overflow-hidden", children: [
          a && /* @__PURE__ */ s.jsx("aside", { className: "flex-shrink-0", children: a }),
          /* @__PURE__ */ s.jsx("main", { className: "flex-1 overflow-auto", children: o })
        ] }),
        n && /* @__PURE__ */ s.jsx("footer", { children: n })
      ]
    }
  )
);
xn.displayName = "Layout";
const hn = k(
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
), gn = w.forwardRef(
  ({
    className: e,
    variant: t,
    isOpen: r,
    onClose: a,
    items: n,
    onNavigate: o,
    header: d,
    collapsible: l,
    ...i
  }, c) => {
    const [p, f] = W(""), [m, u] = W(/* @__PURE__ */ new Set());
    Z(() => {
      const g = () => {
        f(window.location.hash || "");
      };
      return g(), window.addEventListener("hashchange", g), () => window.removeEventListener("hashchange", g);
    }, []), Z(() => {
      if (!p) return;
      const g = (N, A) => {
        for (const T of N)
          if (T.children) {
            if (T.children.some((L) => L.href === A))
              return T.label;
            const B = g(T.children, A);
            if (B) return B;
          }
        return null;
      }, j = g(n, p);
      j && u((N) => /* @__PURE__ */ new Set([...N, j]));
    }, [p, n]);
    const y = (g) => {
      o && g && o(g), g && f(g);
    }, v = (g) => {
      u((j) => {
        const N = new Set(j);
        return N.has(g) ? N.delete(g) : N.add(g), N;
      });
    }, h = (g) => g.children && g.children.length > 0 ? g.children[0].href || h(g.children[0]) : g.href, V = (g) => {
      if (g.children && g.children.length > 0) {
        v(g.label);
        const j = h(g);
        j && o && o(j);
      } else g.href && y(g.href);
    };
    return /* @__PURE__ */ s.jsxs(
      "aside",
      {
        ref: c,
        className: x(hn({ variant: t }), e),
        role: "navigation",
        "aria-label": "Sidebar navigation",
        ...i,
        children: [
          d && /* @__PURE__ */ s.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-700", children: [
            d,
            t === "collapsible" && a && /* @__PURE__ */ s.jsx(
              "button",
              {
                onClick: a,
                "aria-label": "Close sidebar",
                className: "p-2 text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-700 transition-colors",
                children: /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-5 h-5", children: /* @__PURE__ */ s.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) })
              }
            )
          ] }),
          /* @__PURE__ */ s.jsx("nav", { className: "flex-1 overflow-y-auto p-4 pt-6", children: n.map((g) => {
            var B, L;
            const N = g.children && g.children.length > 0, A = N && m.has(g.label), T = g.icon, P = N ? ((B = g.children) == null ? void 0 : B.some((R) => R.href === p)) || !1 : p === g.href;
            return /* @__PURE__ */ s.jsxs("div", { className: "mb-1", children: [
              /* @__PURE__ */ s.jsxs(
                "button",
                {
                  onClick: () => V(g),
                  className: x(
                    "group relative flex w-full items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200",
                    N ? P ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200" : P ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                  ),
                  children: [
                    T && /* @__PURE__ */ s.jsx(
                      T,
                      {
                        className: x(
                          "h-5 w-5 transition-colors flex-shrink-0",
                          P ? "text-primary-500 dark:text-primary-400" : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                        )
                      }
                    ),
                    N && /* @__PURE__ */ s.jsx("span", { className: "flex-shrink-0", children: A ? /* @__PURE__ */ s.jsx(Te, { className: "h-3.5 w-3.5 text-neutral-400 transition-transform" }) : /* @__PURE__ */ s.jsx(pe, { className: "h-3.5 w-3.5 text-neutral-400 transition-transform" }) }),
                    /* @__PURE__ */ s.jsx("span", { className: "flex-1 text-left", children: g.label }),
                    g.badge !== void 0 && /* @__PURE__ */ s.jsx(
                      "span",
                      {
                        className: x(
                          "flex h-5 min-w-[1.25rem] items-center justify-center px-1.5 text-[10px] font-bold flex-shrink-0",
                          P ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        ),
                        children: g.badge
                      }
                    )
                  ]
                }
              ),
              N && A && /* @__PURE__ */ s.jsx("div", { className: "ml-4 mt-1 space-y-0.5", children: (L = g.children) == null ? void 0 : L.map((R) => {
                const S = p === R.href, C = R.icon;
                return /* @__PURE__ */ s.jsxs(
                  "a",
                  {
                    href: R.href,
                    onClick: (z) => {
                      z.preventDefault(), y(R.href || "");
                    },
                    className: x(
                      "group relative flex w-full items-center gap-3 pl-8 pr-4 py-2.5 text-xs font-medium transition-all duration-200",
                      S ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400" : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-700/50 dark:hover:text-neutral-200"
                    ),
                    children: [
                      C && /* @__PURE__ */ s.jsx(
                        C,
                        {
                          className: x(
                            "h-4 w-4 transition-colors flex-shrink-0",
                            S ? "text-primary-500 dark:text-primary-400" : "text-neutral-400 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-300"
                          )
                        }
                      ),
                      /* @__PURE__ */ s.jsx("span", { className: "flex-1", children: R.label }),
                      R.badge !== void 0 && /* @__PURE__ */ s.jsx(
                        "span",
                        {
                          className: x(
                            "flex h-4 min-w-[1rem] items-center justify-center px-1 text-[10px] font-bold flex-shrink-0",
                            S ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300" : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                          ),
                          children: R.badge
                        }
                      )
                    ]
                  },
                  R.href
                );
              }) })
            ] }, g.label);
          }) })
        ]
      }
    );
  }
);
gn.displayName = "Sidebar";
const vn = w.forwardRef(
  ({ className: e, size: t = 16, axis: r = "vertical", flex: a = !1, style: n, ...o }, d) => {
    const l = r === "horizontal" ? t : 1, i = r === "vertical" ? t : 1;
    return /* @__PURE__ */ s.jsx(
      "div",
      {
        ref: d,
        className: x(
          "shrink-0",
          a && "flex-1",
          e
        ),
        style: {
          width: typeof l == "number" ? `${l}px` : l,
          height: typeof i == "number" ? `${i}px` : i,
          minWidth: r === "horizontal" && !a ? typeof l == "number" ? `${l}px` : l : void 0,
          minHeight: r === "vertical" && !a ? typeof i == "number" ? `${i}px` : i : void 0,
          ...n
        },
        ...o
      }
    );
  }
);
vn.displayName = "Spacer";
const yn = k(
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
), wn = w.forwardRef(
  ({ className: e, direction: t, gap: r, align: a, justify: n, wrap: o, fullWidth: d, padding: l, margin: i, as: c = "div", ...p }, f) => /* @__PURE__ */ s.jsx(
    c,
    {
      ref: f,
      className: x(yn({ direction: t, gap: r, align: a, justify: n, wrap: o, fullWidth: d, padding: l, margin: i, className: e })),
      ...p
    }
  )
);
wn.displayName = "Stack";
const Cn = (e) => {
  const { ref: t } = e, [r, a] = H.useState(!1);
  return H.useEffect(() => {
    const n = t.current;
    if (!n)
      return;
    const o = () => {
      a(!1);
    }, d = (i) => {
      i.key === "Tab" && a(!0);
    }, l = () => {
      a(!1);
    };
    return n.addEventListener("mousedown", o), n.addEventListener("keydown", d), n.addEventListener("blur", l), () => {
      n.removeEventListener("mousedown", o), n.removeEventListener("keydown", d), n.removeEventListener("blur", l);
    };
  }, [t]), r;
}, kn = (e, t, r = {}) => {
  const {
    placement: a = "bottom",
    offset: n = 8,
    flip: o = !0,
    shift: d = !1
  } = r, l = e.getBoundingClientRect(), i = t.getBoundingClientRect(), c = window.innerWidth, p = window.innerHeight;
  let f = 0, m = 0, u = a;
  const y = {
    top: () => {
      f = l.top - i.height - n, m = l.left + (l.width - i.width) / 2;
    },
    "top-start": () => {
      f = l.top - i.height - n, m = l.left;
    },
    "top-end": () => {
      f = l.top - i.height - n, m = l.right - i.width;
    },
    bottom: () => {
      f = l.bottom + n, m = l.left + (l.width - i.width) / 2;
    },
    "bottom-start": () => {
      f = l.bottom + n, m = l.left;
    },
    "bottom-end": () => {
      f = l.bottom + n, m = l.right - i.width;
    },
    left: () => {
      f = l.top + (l.height - i.height) / 2, m = l.left - i.width - n;
    },
    "left-start": () => {
      f = l.top, m = l.left - i.width - n;
    },
    "left-end": () => {
      f = l.bottom - i.height, m = l.left - i.width - n;
    },
    right: () => {
      f = l.top + (l.height - i.height) / 2, m = l.right + n;
    },
    "right-start": () => {
      f = l.top, m = l.right + n;
    },
    "right-end": () => {
      f = l.bottom - i.height, m = l.right + n;
    }
  };
  return y[a](), o && (u.startsWith("top") && f < 0 ? (u = u.replace("top", "bottom"), y[u]()) : u.startsWith("bottom") && f + i.height > p ? (u = u.replace("bottom", "top"), y[u]()) : u.startsWith("left") && m < 0 ? (u = u.replace("left", "right"), y[u]()) : u.startsWith("right") && m + i.width > c && (u = u.replace("right", "left"), y[u]())), d && (m < 0 ? m = n : m + i.width > c && (m = c - i.width - n), f < 0 ? f = n : f + i.height > p && (f = p - i.height - n)), {
    top: f + window.scrollY,
    left: m + window.scrollX,
    placement: u
  };
}, Tn = (e, t, r = {}) => !e || !t ? null : kn(e, t, r), Ue = "theme", vt = Ee(void 0), Mn = ({ children: e, defaultMode: t = "light" }) => {
  const [r, a] = W(t), n = _((i) => {
    a(i), typeof document < "u" && (document.documentElement.classList.toggle("dark", i === "dark"), localStorage.setItem(Ue, i));
  }, []);
  Z(() => {
    if (typeof document > "u") return;
    const i = localStorage.getItem(Ue) || t;
    n(i);
  }, [t, n]);
  const o = _(() => {
    n(r === "light" ? "dark" : "light");
  }, [r, n]), d = _((i) => {
    n(i);
  }, [n]), l = Ne(() => ({ mode: r, toggleTheme: o, setTheme: d }), [r, o, d]);
  return /* @__PURE__ */ s.jsx(vt.Provider, { value: l, children: e });
}, An = () => {
  const e = ze(vt);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, In = "theme", Sn = "light";
export {
  ba as Accordion,
  ga as Alert,
  jr as Autocomplete,
  Vr as Avatar,
  Er as Badge,
  ya as Banner,
  wa as Breadcrumb,
  Tr as Button,
  ie as Card,
  Ar as Checkbox,
  sn as Container,
  Sn as DEFAULT_THEME,
  ln as Divider,
  Na as Drawer,
  Lr as Dropdown,
  sa as FileUpload,
  cn as Footer,
  oa as FormControl,
  ia as FormField,
  fn as Grid,
  mn as Header,
  me as Input,
  xn as Layout,
  Ea as List,
  Rn as Menu,
  ne as Modal,
  Sr as NumberInput,
  ht as Pagination,
  Oa as Popover,
  dt as Portal,
  Fa as Progress,
  Or as Radio,
  ca as SearchBar,
  Lr as Select,
  gn as Sidebar,
  $a as Skeleton,
  Hr as Slider,
  vn as Spacer,
  wn as Stack,
  Wa as Stepper,
  Ur as Switch,
  In as THEME_STORAGE_KEY,
  Ya as Table,
  Ka as TablePagination,
  Qa as Tabs,
  qr as TextArea,
  me as TextField,
  Kr as TextareaAutosize,
  Mn as ThemeProvider,
  rn as Toast,
  En as ToastProvider,
  Qr as Tooltip,
  ta as Typography,
  yr as autocompleteVariants,
  Nr as avatarVariants,
  Rr as badgeVariants,
  Cr as buttonVariants,
  aa as cardVariants,
  Mr as checkboxVariants,
  x as cn,
  kn as computePopperPosition,
  De as dropdownVariants,
  nt as generateId,
  st as getAriaProps,
  za as menuVariants,
  Ir as numberInputVariants,
  wr as optionVariants,
  Pr as radioVariants,
  $r as rangeVariants,
  Fr as sliderVariants,
  Wr as switchThumbVariants,
  Gr as switchVariants,
  Za as tabTriggerVariants,
  Ja as tabsVariants,
  nr as textFieldVariants,
  Xr as textareaAutosizeVariants,
  Dr as thumbVariants,
  en as toastVariants,
  Br as trackVariants,
  Tn as updatePopperPosition,
  zr as useButton,
  ra as useCard,
  rr as useClickAway,
  Ca as useFocusRestore,
  ct as useFocusTrap,
  Cn as useFocusVisible,
  Vn as useFormControl,
  ar as useInput,
  Sa as usePopover,
  An as useTheme,
  zn as useToast,
  Jr as useTooltip
};
