var jc = Object.defineProperty;
var Hc = (e, t, n) => t in e ? jc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var No = (e, t, n) => Hc(e, typeof t != "symbol" ? t + "" : t, n);
import { app as Us } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function dl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const St = {}, Rn = [], Fs = () => {
}, Hi = () => !1, ca = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ml = (e) => e.startsWith("onUpdate:"), zt = Object.assign, fl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qc = Object.prototype.hasOwnProperty, kt = (e, t) => qc.call(e, t), st = Array.isArray, Dn = (e) => Io(e) === "[object Map]", Wn = (e) => Io(e) === "[object Set]", Wl = (e) => Io(e) === "[object Date]", lt = (e) => typeof e == "function", Rt = (e) => typeof e == "string", Is = (e) => typeof e == "symbol", Ct = (e) => e !== null && typeof e == "object", qi = (e) => (Ct(e) || lt(e)) && lt(e.then) && lt(e.catch), Ki = Object.prototype.toString, Io = (e) => Ki.call(e), Kc = (e) => Io(e).slice(8, -1), Ji = (e) => Io(e) === "[object Object]", vl = (e) => Rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ro = /* @__PURE__ */ dl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ua = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Jc = /-\w/g, $s = ua(
  (e) => e.replace(Jc, (t) => t.slice(1).toUpperCase())
), Qc = /\B([A-Z])/g, cn = ua(
  (e) => e.replace(Qc, "-$1").toLowerCase()
), da = ua((e) => e.charAt(0).toUpperCase() + e.slice(1)), Na = ua(
  (e) => e ? `on${da(e)}` : ""
), an = (e, t) => !Object.is(e, t), Bo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Qi = (e, t, n, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: n
  });
}, ma = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Yc = (e) => {
  const t = Rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gl;
const fa = () => Gl || (Gl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ft(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const a = e[n], l = Rt(a) ? tu(a) : Ft(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Rt(e) || Ct(e))
    return e;
}
const Xc = /;(?![^(]*\))/g, Zc = /:([^]+)/, eu = /\/\*[^]*?\*\//g;
function tu(e) {
  const t = {};
  return e.replace(eu, "").split(Xc).forEach((n) => {
    if (n) {
      const a = n.split(Zc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if (Rt(e))
    t = e;
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const a = Fe(e[n]);
      a && (t += a + " ");
    }
  else if (Ct(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const su = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nu = /* @__PURE__ */ dl(su);
function Yi(e) {
  return !!e || e === "";
}
function ou(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let a = 0; n && a < e.length; a++)
    n = _n(e[a], t[a]);
  return n;
}
function _n(e, t) {
  if (e === t) return !0;
  let n = Wl(e), a = Wl(t);
  if (n || a)
    return n && a ? e.getTime() === t.getTime() : !1;
  if (n = Is(e), a = Is(t), n || a)
    return e === t;
  if (n = st(e), a = st(t), n || a)
    return n && a ? ou(e, t) : !1;
  if (n = Ct(e), a = Ct(t), n || a) {
    if (!n || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !_n(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function pl(e, t) {
  return e.findIndex((n) => _n(n, t));
}
const Xi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Rt(e) ? e : e == null ? "" : st(e) || Ct(e) && (e.toString === Ki || !lt(e.toString)) ? Xi(e) ? m(e.value) : JSON.stringify(e, Zi, 2) : String(e), Zi = (e, t) => Xi(t) ? Zi(e, t.value) : Dn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [a, l], r) => (n[La(a, r) + " =>"] = l, n),
    {}
  )
} : Wn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => La(n))
} : Is(t) ? La(t) : Ct(t) && !st(t) && !Ji(t) ? String(t) : t, La = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Is(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ms;
class au {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ms, !t && ms && (this.index = (ms.scopes || (ms.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = ms;
      try {
        return ms = this, t();
      } finally {
        ms = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ms, ms = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ms = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, a;
      for (n = 0, a = this.effects.length; n < a; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, a = this.cleanups.length; n < a; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, a = this.scopes.length; n < a; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function lu() {
  return ms;
}
let Et;
const Ua = /* @__PURE__ */ new WeakSet();
class er {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ms && ms.active && ms.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ua.has(this) && (Ua.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jl(this), nr(this);
    const t = Et, n = xs;
    Et = this, xs = !0;
    try {
      return this.fn();
    } finally {
      or(this), Et = t, xs = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        yl(t);
      this.deps = this.depsTail = void 0, jl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ua.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ka(this) && this.run();
  }
  get dirty() {
    return Ka(this);
  }
}
let tr = 0, co, uo;
function sr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = uo, uo = e;
    return;
  }
  e.next = co, co = e;
}
function gl() {
  tr++;
}
function hl() {
  if (--tr > 0)
    return;
  if (uo) {
    let t = uo;
    for (uo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; co; ) {
    let t = co;
    for (co = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (a) {
          e || (e = a);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function nr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function or(e) {
  let t, n = e.depsTail, a = n;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === n && (n = l), yl(a), iu(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = t, e.depsTail = n;
}
function Ka(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ar(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ar(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wo) || (e.globalVersion = wo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ka(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Et, a = xs;
  Et = e, xs = !0;
  try {
    nr(e);
    const l = e.fn(e._value);
    (t.version === 0 || an(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    Et = n, xs = a, or(e), e.flags &= -3;
  }
}
function yl(e, t = !1) {
  const { dep: n, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), n.subs === e && (n.subs = a, !a && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      yl(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function iu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xs = !0;
const lr = [];
function Qs() {
  lr.push(xs), xs = !1;
}
function Ys() {
  const e = lr.pop();
  xs = e === void 0 ? !0 : e;
}
function jl(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Et;
    Et = void 0;
    try {
      t();
    } finally {
      Et = n;
    }
  }
}
let wo = 0;
class ru {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Et || !xs || Et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Et)
      n = this.activeLink = new ru(Et, this), Et.deps ? (n.prevDep = Et.depsTail, Et.depsTail.nextDep = n, Et.depsTail = n) : Et.deps = Et.depsTail = n, ir(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const a = n.nextDep;
      a.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = a), n.prevDep = Et.depsTail, n.nextDep = void 0, Et.depsTail.nextDep = n, Et.depsTail = n, Et.deps === n && (Et.deps = a);
    }
    return n;
  }
  trigger(t) {
    this.version++, wo++, this.notify(t);
  }
  notify(t) {
    gl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      hl();
    }
  }
}
function ir(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let a = t.deps; a; a = a.nextDep)
        ir(a);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ja = /* @__PURE__ */ new WeakMap(), hn = Symbol(
  ""
), Qa = Symbol(
  ""
), _o = Symbol(
  ""
);
function Jt(e, t, n) {
  if (xs && Et) {
    let a = Ja.get(e);
    a || Ja.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(n);
    l || (a.set(n, l = new wl()), l.map = a, l.key = n), l.track();
  }
}
function Hs(e, t, n, a, l, r) {
  const c = Ja.get(e);
  if (!c) {
    wo++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (gl(), t === "clear")
    c.forEach(u);
  else {
    const d = st(e), f = d && vl(n);
    if (d && n === "length") {
      const p = Number(a);
      c.forEach((v, w) => {
        (w === "length" || w === _o || !Is(w) && w >= p) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), f && u(c.get(_o)), t) {
        case "add":
          d ? f && u(c.get("length")) : (u(c.get(hn)), Dn(e) && u(c.get(Qa)));
          break;
        case "delete":
          d || (u(c.get(hn)), Dn(e) && u(c.get(Qa)));
          break;
        case "set":
          Dn(e) && u(c.get(hn));
          break;
      }
  }
  hl();
}
function xn(e) {
  const t = ht(e);
  return t === e ? t : (Jt(t, "iterate", _o), ks(e) ? t : t.map(Es));
}
function va(e) {
  return Jt(e = ht(e), "iterate", _o), e;
}
function sn(e, t) {
  return Xs(e) ? yn(e) ? Fn(Es(t)) : Fn(t) : Es(t);
}
const cu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Oa(this, Symbol.iterator, (e) => sn(this, e));
  },
  concat(...e) {
    return xn(this).concat(
      ...e.map((t) => st(t) ? xn(t) : t)
    );
  },
  entries() {
    return Oa(this, "entries", (e) => (e[1] = sn(this, e[1]), e));
  },
  every(e, t) {
    return Ws(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ws(
      this,
      "filter",
      e,
      t,
      (n) => n.map((a) => sn(this, a)),
      arguments
    );
  },
  find(e, t) {
    return Ws(
      this,
      "find",
      e,
      t,
      (n) => sn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ws(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ws(
      this,
      "findLast",
      e,
      t,
      (n) => sn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ws(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ws(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Aa(this, "includes", e);
  },
  indexOf(...e) {
    return Aa(this, "indexOf", e);
  },
  join(e) {
    return xn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Aa(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ws(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qn(this, "pop");
  },
  push(...e) {
    return Qn(this, "push", e);
  },
  reduce(e, ...t) {
    return Hl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Hl(this, "reduceRight", e, t);
  },
  shift() {
    return Qn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ws(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qn(this, "splice", e);
  },
  toReversed() {
    return xn(this).toReversed();
  },
  toSorted(e) {
    return xn(this).toSorted(e);
  },
  toSpliced(...e) {
    return xn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qn(this, "unshift", e);
  },
  values() {
    return Oa(this, "values", (e) => sn(this, e));
  }
};
function Oa(e, t, n) {
  const a = va(e), l = a[t]();
  return a !== e && !ks(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = n(r.value)), r;
  }), l;
}
const uu = Array.prototype;
function Ws(e, t, n, a, l, r) {
  const c = va(e), u = c !== e && !ks(e), d = c[t];
  if (d !== uu[t]) {
    const v = d.apply(e, r);
    return u ? Es(v) : v;
  }
  let f = n;
  c !== e && (u ? f = function(v, w) {
    return n.call(this, sn(e, v), w, e);
  } : n.length > 2 && (f = function(v, w) {
    return n.call(this, v, w, e);
  }));
  const p = d.call(c, f, a);
  return u && l ? l(p) : p;
}
function Hl(e, t, n, a) {
  const l = va(e);
  let r = n;
  return l !== e && (ks(e) ? n.length > 3 && (r = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return n.call(this, c, sn(e, u), d, e);
  }), l[t](r, ...a);
}
function Aa(e, t, n) {
  const a = ht(e);
  Jt(a, "iterate", _o);
  const l = a[t](...n);
  return (l === -1 || l === !1) && bl(n[0]) ? (n[0] = ht(n[0]), a[t](...n)) : l;
}
function Qn(e, t, n = []) {
  Qs(), gl();
  const a = ht(e)[t].apply(e, n);
  return hl(), Ys(), a;
}
const du = /* @__PURE__ */ dl("__proto__,__v_isRef,__isVue"), rr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Is)
);
function mu(e) {
  Is(e) || (e = String(e));
  const t = ht(this);
  return Jt(t, "has", e), t.hasOwnProperty(e);
}
class cr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, a) {
    if (n === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !l;
    if (n === "__v_isReadonly")
      return l;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return a === (l ? r ? bu : fr : r ? mr : dr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
    const c = st(t);
    if (!l) {
      let d;
      if (c && (d = cu[n]))
        return d;
      if (n === "hasOwnProperty")
        return mu;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Zt(t) ? t : a
    );
    if ((Is(n) ? rr.has(n) : du(n)) || (l || Jt(t, "get", n), r))
      return u;
    if (Zt(u)) {
      const d = c && vl(n) ? u : u.value;
      return l && Ct(d) ? Yo(d) : d;
    }
    return Ct(u) ? l ? Yo(u) : $n(u) : u;
  }
}
class ur extends cr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, a, l) {
    let r = t[n];
    const c = st(t) && vl(n);
    if (!this._isShallow) {
      const f = Xs(r);
      if (!ks(a) && !Xs(a) && (r = ht(r), a = ht(a)), !c && Zt(r) && !Zt(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(n) < t.length : kt(t, n), d = Reflect.set(
      t,
      n,
      a,
      Zt(t) ? t : l
    );
    return t === ht(l) && (u ? an(a, r) && Hs(t, "set", n, a) : Hs(t, "add", n, a)), d;
  }
  deleteProperty(t, n) {
    const a = kt(t, n);
    t[n];
    const l = Reflect.deleteProperty(t, n);
    return l && a && Hs(t, "delete", n, void 0), l;
  }
  has(t, n) {
    const a = Reflect.has(t, n);
    return (!Is(n) || !rr.has(n)) && Jt(t, "has", n), a;
  }
  ownKeys(t) {
    return Jt(
      t,
      "iterate",
      st(t) ? "length" : hn
    ), Reflect.ownKeys(t);
  }
}
class fu extends cr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const vu = /* @__PURE__ */ new ur(), pu = /* @__PURE__ */ new fu(), gu = /* @__PURE__ */ new ur(!0);
const Ya = (e) => e, Lo = (e) => Reflect.getPrototypeOf(e);
function hu(e, t, n) {
  return function(...a) {
    const l = this.__v_raw, r = ht(l), c = Dn(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, f = l[e](...a), p = n ? Ya : t ? Fn : Es;
    return !t && Jt(
      r,
      "iterate",
      d ? Qa : hn
    ), {
      // iterator protocol
      next() {
        const { value: v, done: w } = f.next();
        return w ? { value: v, done: w } : {
          value: u ? [p(v[0]), p(v[1])] : p(v),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Uo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yu(e, t) {
  const n = {
    get(l) {
      const r = this.__v_raw, c = ht(r), u = ht(l);
      e || (an(l, u) && Jt(c, "get", l), Jt(c, "get", u));
      const { has: d } = Lo(c), f = t ? Ya : e ? Fn : Es;
      if (d.call(c, l))
        return f(r.get(l));
      if (d.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Jt(ht(l), "iterate", hn), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ht(r), u = ht(l);
      return e || (an(l, u) && Jt(c, "has", l), Jt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ht(u), f = t ? Ya : e ? Fn : Es;
      return !e && Jt(d, "iterate", hn), u.forEach((p, v) => l.call(r, f(p), f(v), c));
    }
  };
  return zt(
    n,
    e ? {
      add: Uo("add"),
      set: Uo("set"),
      delete: Uo("delete"),
      clear: Uo("clear")
    } : {
      add(l) {
        !t && !ks(l) && !Xs(l) && (l = ht(l));
        const r = ht(this);
        return Lo(r).has.call(r, l) || (r.add(l), Hs(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ks(r) && !Xs(r) && (r = ht(r));
        const c = ht(this), { has: u, get: d } = Lo(c);
        let f = u.call(c, l);
        f || (l = ht(l), f = u.call(c, l));
        const p = d.call(c, l);
        return c.set(l, r), f ? an(r, p) && Hs(c, "set", l, r) : Hs(c, "add", l, r), this;
      },
      delete(l) {
        const r = ht(this), { has: c, get: u } = Lo(r);
        let d = c.call(r, l);
        d || (l = ht(l), d = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return d && Hs(r, "delete", l, void 0), f;
      },
      clear() {
        const l = ht(this), r = l.size !== 0, c = l.clear();
        return r && Hs(
          l,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    n[l] = hu(l, e, t);
  }), n;
}
function _l(e, t) {
  const n = yu(e, t);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    kt(n, l) && l in a ? n : a,
    l,
    r
  );
}
const wu = {
  get: /* @__PURE__ */ _l(!1, !1)
}, _u = {
  get: /* @__PURE__ */ _l(!1, !0)
}, ku = {
  get: /* @__PURE__ */ _l(!0, !1)
};
const dr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), bu = /* @__PURE__ */ new WeakMap();
function $u(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Cu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $u(Kc(e));
}
function $n(e) {
  return Xs(e) ? e : kl(
    e,
    !1,
    vu,
    wu,
    dr
  );
}
function xu(e) {
  return kl(
    e,
    !1,
    gu,
    _u,
    mr
  );
}
function Yo(e) {
  return kl(
    e,
    !0,
    pu,
    ku,
    fr
  );
}
function kl(e, t, n, a, l) {
  if (!Ct(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Cu(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? a : n
  );
  return l.set(e, u), u;
}
function yn(e) {
  return Xs(e) ? yn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xs(e) {
  return !!(e && e.__v_isReadonly);
}
function ks(e) {
  return !!(e && e.__v_isShallow);
}
function bl(e) {
  return e ? !!e.__v_raw : !1;
}
function ht(e) {
  const t = e && e.__v_raw;
  return t ? ht(t) : e;
}
function Su(e) {
  return !kt(e, "__v_skip") && Object.isExtensible(e) && Qi(e, "__v_skip", !0), e;
}
const Es = (e) => Ct(e) ? $n(e) : e, Fn = (e) => Ct(e) ? Yo(e) : e;
function Zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Iu(e, !1);
}
function Iu(e, t) {
  return Zt(e) ? e : new Eu(e, t);
}
class Eu {
  constructor(t, n) {
    this.dep = new wl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ht(t), this._value = n ? t : Es(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, a = this.__v_isShallow || ks(t) || Xs(t);
    t = a ? t : ht(t), an(t, n) && (this._rawValue = t, this._value = a ? t : Es(t), this.dep.trigger());
  }
}
function it(e) {
  return Zt(e) ? e.value : e;
}
const Tu = {
  get: (e, t, n) => t === "__v_raw" ? e : it(Reflect.get(e, t, n)),
  set: (e, t, n, a) => {
    const l = e[t];
    return Zt(l) && !Zt(n) ? (l.value = n, !0) : Reflect.set(e, t, n, a);
  }
};
function vr(e) {
  return yn(e) ? e : new Proxy(e, Tu);
}
class Mu {
  constructor(t, n, a) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new wl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Et !== this)
      return sr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ar(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Pu(e, t, n = !1) {
  let a, l;
  return lt(e) ? a = e : (a = e.get, l = e.set), new Mu(a, l, n);
}
const Oo = {}, Xo = /* @__PURE__ */ new WeakMap();
let pn;
function Ru(e, t = !1, n = pn) {
  if (n) {
    let a = Xo.get(n);
    a || Xo.set(n, a = []), a.push(e);
  }
}
function Du(e, t, n = St) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = n, f = (P) => l ? P : ks(P) || l === !1 || l === 0 ? qs(P, 1) : qs(P);
  let p, v, w, g, k = !1, $ = !1;
  if (Zt(e) ? (v = () => e.value, k = ks(e)) : yn(e) ? (v = () => f(e), k = !0) : st(e) ? ($ = !0, k = e.some((P) => yn(P) || ks(P)), v = () => e.map((P) => {
    if (Zt(P))
      return P.value;
    if (yn(P))
      return f(P);
    if (lt(P))
      return d ? d(P, 2) : P();
  })) : lt(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (w) {
      Qs();
      try {
        w();
      } finally {
        Ys();
      }
    }
    const P = pn;
    pn = p;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      pn = P;
    }
  } : v = Fs, t && l) {
    const P = v, O = l === !0 ? 1 / 0 : l;
    v = () => qs(P(), O);
  }
  const S = lu(), C = () => {
    p.stop(), S && S.active && fl(S.effects, p);
  };
  if (r && t) {
    const P = t;
    t = (...O) => {
      P(...O), C();
    };
  }
  let I = $ ? new Array(e.length).fill(Oo) : Oo;
  const E = (P) => {
    if (!(!(p.flags & 1) || !p.dirty && !P))
      if (t) {
        const O = p.run();
        if (l || k || ($ ? O.some((U, F) => an(U, I[F])) : an(O, I))) {
          w && w();
          const U = pn;
          pn = p;
          try {
            const F = [
              O,
              // pass undefined as the old value when it's changed for the first time
              I === Oo ? void 0 : $ && I[0] === Oo ? [] : I,
              g
            ];
            I = O, d ? d(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            pn = U;
          }
        }
      } else
        p.run();
  };
  return u && u(E), p = new er(v), p.scheduler = c ? () => c(E, !1) : E, g = (P) => Ru(P, !1, p), w = p.onStop = () => {
    const P = Xo.get(p);
    if (P) {
      if (d)
        d(P, 4);
      else
        for (const O of P) O();
      Xo.delete(p);
    }
  }, t ? a ? E(!0) : I = p.run() : c ? c(E.bind(null, !0), !0) : p.run(), C.pause = p.pause.bind(p), C.resume = p.resume.bind(p), C.stop = C, C;
}
function qs(e, t = 1 / 0, n) {
  if (t <= 0 || !Ct(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Zt(e))
    qs(e.value, t, n);
  else if (st(e))
    for (let a = 0; a < e.length; a++)
      qs(e[a], t, n);
  else if (Wn(e) || Dn(e))
    e.forEach((a) => {
      qs(a, t, n);
    });
  else if (Ji(e)) {
    for (const a in e)
      qs(e[a], t, n);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && qs(e[a], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Eo(e, t, n, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    pa(l, t, n);
  }
}
function Ts(e, t, n, a) {
  if (lt(e)) {
    const l = Eo(e, t, n, a);
    return l && qi(l) && l.catch((r) => {
      pa(r, t, n);
    }), l;
  }
  if (st(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(Ts(e[r], t, n, a));
    return l;
  }
}
function pa(e, t, n, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || St;
  if (t) {
    let u = t.parent;
    const d = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const p = u.ec;
      if (p) {
        for (let v = 0; v < p.length; v++)
          if (p[v](e, d, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Qs(), Eo(r, null, 10, [
        e,
        d,
        f
      ]), Ys();
      return;
    }
  }
  Nu(e, n, l, a, c);
}
function Nu(e, t, n, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const is = [];
let Ls = -1;
const Nn = [];
let nn = null, En = 0;
const pr = /* @__PURE__ */ Promise.resolve();
let Zo = null;
function Wt(e) {
  const t = Zo || pr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lu(e) {
  let t = Ls + 1, n = is.length;
  for (; t < n; ) {
    const a = t + n >>> 1, l = is[a], r = ko(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : n = a;
  }
  return t;
}
function $l(e) {
  if (!(e.flags & 1)) {
    const t = ko(e), n = is[is.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ko(n) ? is.push(e) : is.splice(Lu(t), 0, e), e.flags |= 1, gr();
  }
}
function gr() {
  Zo || (Zo = pr.then(yr));
}
function Uu(e) {
  st(e) ? Nn.push(...e) : nn && e.id === -1 ? nn.splice(En + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), gr();
}
function ql(e, t, n = Ls + 1) {
  for (; n < is.length; n++) {
    const a = is[n];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      is.splice(n, 1), n--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function hr(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, a) => ko(n) - ko(a)
    );
    if (Nn.length = 0, nn) {
      nn.push(...t);
      return;
    }
    for (nn = t, En = 0; En < nn.length; En++) {
      const n = nn[En];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    nn = null, En = 0;
  }
}
const ko = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function yr(e) {
  try {
    for (Ls = 0; Ls < is.length; Ls++) {
      const t = is[Ls];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Eo(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ls < is.length; Ls++) {
      const t = is[Ls];
      t && (t.flags &= -2);
    }
    Ls = -1, is.length = 0, hr(), Zo = null, (is.length || Nn.length) && yr();
  }
}
let Gt = null, wr = null;
function ea(e) {
  const t = Gt;
  return Gt = e, wr = e && e.type.__scopeId || null, t;
}
function h(e, t = Gt, n) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && na(-1);
    const r = ea(t);
    let c;
    try {
      c = e(...l);
    } finally {
      ea(r), a._d && na(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function At(e, t) {
  if (Gt === null)
    return e;
  const n = _a(Gt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = St] = t[l];
    r && (lt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && qs(c), a.push({
      dir: r,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function dn(e, t, n, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Qs(), Ts(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Ys());
  }
}
const _r = Symbol("_vte"), kr = (e) => e.__isTeleport, mo = (e) => e && (e.disabled || e.disabled === ""), Kl = (e) => e && (e.defer || e.defer === ""), Jl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ql = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Xa = (e, t) => {
  const n = e && e.to;
  return Rt(n) ? t ? t(n) : null : n;
}, br = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, a, l, r, c, u, d, f) {
    const {
      mc: p,
      pc: v,
      pbc: w,
      o: { insert: g, querySelector: k, createText: $, createComment: S }
    } = f, C = mo(t.props);
    let { shapeFlag: I, children: E, dynamicChildren: P } = t;
    if (e == null) {
      const O = t.el = $(""), U = t.anchor = $("");
      g(O, n, a), g(U, n, a);
      const F = (W, ce) => {
        I & 16 && p(
          E,
          W,
          ce,
          l,
          r,
          c,
          u,
          d
        );
      }, D = () => {
        const W = t.target = Xa(t.props, k), ce = $r(W, t, $, g);
        W && (c !== "svg" && Jl(W) ? c = "svg" : c !== "mathml" && Ql(W) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(W), C || (F(W, ce), Wo(t, !1)));
      };
      C && (F(n, U), Wo(t, !0)), Kl(t.props) ? (t.el.__isMounted = !1, as(() => {
        D(), delete t.el.__isMounted;
      }, r)) : D();
    } else {
      if (Kl(t.props) && e.el.__isMounted === !1) {
        as(() => {
          br.process(
            e,
            t,
            n,
            a,
            l,
            r,
            c,
            u,
            d,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const O = t.anchor = e.anchor, U = t.target = e.target, F = t.targetAnchor = e.targetAnchor, D = mo(e.props), W = D ? n : U, ce = D ? O : F;
      if (c === "svg" || Jl(U) ? c = "svg" : (c === "mathml" || Ql(U)) && (c = "mathml"), P ? (w(
        e.dynamicChildren,
        P,
        W,
        l,
        r,
        c,
        u
      ), El(e, t, !0)) : d || v(
        e,
        t,
        W,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), C)
        D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ao(
          t,
          n,
          O,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const de = t.target = Xa(
          t.props,
          k
        );
        de && Ao(
          t,
          de,
          null,
          f,
          0
        );
      } else D && Ao(
        t,
        U,
        F,
        f,
        1
      );
      Wo(t, C);
    }
  },
  remove(e, t, n, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: f,
      targetAnchor: p,
      target: v,
      props: w
    } = e;
    if (v && (l(f), l(p)), r && l(d), c & 16) {
      const g = r || !mo(w);
      for (let k = 0; k < u.length; k++) {
        const $ = u[k];
        a(
          $,
          t,
          n,
          g,
          !!$.dynamicChildren
        );
      }
    }
  },
  move: Ao,
  hydrate: Ou
};
function Ao(e, t, n, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, n);
  const { el: c, anchor: u, shapeFlag: d, children: f, props: p } = e, v = r === 2;
  if (v && a(c, t, n), (!v || mo(p)) && d & 16)
    for (let w = 0; w < f.length; w++)
      l(
        f[w],
        t,
        n,
        2
      );
  v && a(u, t, n);
}
function Ou(e, t, n, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: f, createText: p }
}, v) {
  function w($, S, C, I) {
    S.anchor = v(
      c($),
      S,
      u($),
      n,
      a,
      l,
      r
    ), S.targetStart = C, S.targetAnchor = I;
  }
  const g = t.target = Xa(
    t.props,
    d
  ), k = mo(t.props);
  if (g) {
    const $ = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (k)
        w(
          e,
          t,
          $,
          $ && c($)
        );
      else {
        t.anchor = c(e);
        let S = $;
        for (; S; ) {
          if (S && S.nodeType === 8) {
            if (S.data === "teleport start anchor")
              t.targetStart = S;
            else if (S.data === "teleport anchor") {
              t.targetAnchor = S, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          S = c(S);
        }
        t.targetAnchor || $r(g, t, p, f), v(
          $ && c($),
          t,
          g,
          n,
          a,
          l,
          r
        );
      }
    Wo(t, k);
  } else k && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const rs = br;
function Wo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", n.uid), a = a.nextSibling;
    n.ut();
  }
}
function $r(e, t, n, a) {
  const l = t.targetStart = n(""), r = t.targetAnchor = n("");
  return l[_r] = r, e && (a(l, e), a(r, e)), r;
}
const js = Symbol("_leaveCb"), zo = Symbol("_enterCb");
function Cr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return dt(() => {
    e.isMounted = !0;
  }), To(() => {
    e.isUnmounting = !0;
  }), e;
}
const ws = [Function, Array], xr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ws,
  onEnter: ws,
  onAfterEnter: ws,
  onEnterCancelled: ws,
  // leave
  onBeforeLeave: ws,
  onLeave: ws,
  onAfterLeave: ws,
  onLeaveCancelled: ws,
  // appear
  onBeforeAppear: ws,
  onAppear: ws,
  onAfterAppear: ws,
  onAppearCancelled: ws
}, Sr = (e) => {
  const t = e.subTree;
  return t.component ? Sr(t.component) : t;
}, Au = {
  name: "BaseTransition",
  props: xr,
  setup(e, { slots: t }) {
    const n = Ml(), a = Cr();
    return () => {
      const l = t.default && Cl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = Ir(l), c = ht(e), { mode: u } = c;
      if (a.isLeaving)
        return za(r);
      const d = Yl(r);
      if (!d)
        return za(r);
      let f = bo(
        d,
        c,
        a,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (v) => f = v
      );
      d.type !== Yt && kn(d, f);
      let p = n.subTree && Yl(n.subTree);
      if (p && p.type !== Yt && !gn(p, d) && Sr(n).type !== Yt) {
        let v = bo(
          p,
          c,
          a,
          n
        );
        if (kn(p, v), u === "out-in" && d.type !== Yt)
          return a.isLeaving = !0, v.afterLeave = () => {
            a.isLeaving = !1, n.job.flags & 8 || n.update(), delete v.afterLeave, p = void 0;
          }, za(r);
        u === "in-out" && d.type !== Yt ? v.delayLeave = (w, g, k) => {
          const $ = Er(
            a,
            p
          );
          $[String(p.key)] = p, w[js] = () => {
            g(), w[js] = void 0, delete f.delayedLeave, p = void 0;
          }, f.delayedLeave = () => {
            k(), delete f.delayedLeave, p = void 0;
          };
        } : p = void 0;
      } else p && (p = void 0);
      return r;
    };
  }
};
function Ir(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Yt) {
        t = n;
        break;
      }
  }
  return t;
}
const zu = Au;
function Er(e, t) {
  const { leavingVNodes: n } = e;
  let a = n.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), n.set(t.type, a)), a;
}
function bo(e, t, n, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: f,
    onAfterEnter: p,
    onEnterCancelled: v,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: k,
    onLeaveCancelled: $,
    onBeforeAppear: S,
    onAppear: C,
    onAfterAppear: I,
    onAppearCancelled: E
  } = t, P = String(e.key), O = Er(n, e), U = (W, ce) => {
    W && Ts(
      W,
      a,
      9,
      ce
    );
  }, F = (W, ce) => {
    const de = ce[1];
    U(W, ce), st(W) ? W.every((J) => J.length <= 1) && de() : W.length <= 1 && de();
  }, D = {
    mode: c,
    persisted: u,
    beforeEnter(W) {
      let ce = d;
      if (!n.isMounted)
        if (r)
          ce = S || d;
        else
          return;
      W[js] && W[js](
        !0
        /* cancelled */
      );
      const de = O[P];
      de && gn(e, de) && de.el[js] && de.el[js](), U(ce, [W]);
    },
    enter(W) {
      let ce = f, de = p, J = v;
      if (!n.isMounted)
        if (r)
          ce = C || f, de = I || p, J = E || v;
        else
          return;
      let ve = !1;
      const K = W[zo] = (L) => {
        ve || (ve = !0, L ? U(J, [W]) : U(de, [W]), D.delayedLeave && D.delayedLeave(), W[zo] = void 0);
      };
      ce ? F(ce, [W, K]) : K();
    },
    leave(W, ce) {
      const de = String(e.key);
      if (W[zo] && W[zo](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return ce();
      U(w, [W]);
      let J = !1;
      const ve = W[js] = (K) => {
        J || (J = !0, ce(), K ? U($, [W]) : U(k, [W]), W[js] = void 0, O[de] === e && delete O[de]);
      };
      O[de] = e, g ? F(g, [W, ve]) : ve();
    },
    clone(W) {
      const ce = bo(
        W,
        t,
        n,
        a,
        l
      );
      return l && l(ce), ce;
    }
  };
  return D;
}
function za(e) {
  if (ga(e))
    return e = ln(e), e.children = null, e;
}
function Yl(e) {
  if (!ga(e))
    return kr(e.type) && e.children ? Ir(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && lt(n.default))
      return n.default();
  }
}
function kn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, kn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Cl(e, t = !1, n) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = n == null ? c.key : String(n) + String(c.key != null ? c.key : r);
    c.type === V ? (c.patchFlag & 128 && l++, a = a.concat(
      Cl(c.children, t, u)
    )) : (t || c.type !== Yt) && a.push(u != null ? ln(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  return lt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    zt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Tr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ta = /* @__PURE__ */ new WeakMap();
function fo(e, t, n, a, l = !1) {
  if (st(e)) {
    e.forEach(
      (k, $) => fo(
        k,
        t && (st(t) ? t[$] : t),
        n,
        a,
        l
      )
    );
    return;
  }
  if (Ln(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && fo(e, t, n, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? _a(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, f = t && t.r, p = u.refs === St ? u.refs = {} : u.refs, v = u.setupState, w = ht(v), g = v === St ? Hi : (k) => kt(w, k);
  if (f != null && f !== d) {
    if (Xl(t), Rt(f))
      p[f] = null, g(f) && (v[f] = null);
    else if (Zt(f)) {
      f.value = null;
      const k = t;
      k.k && (p[k.k] = null);
    }
  }
  if (lt(d))
    Eo(d, u, 12, [c, p]);
  else {
    const k = Rt(d), $ = Zt(d);
    if (k || $) {
      const S = () => {
        if (e.f) {
          const C = k ? g(d) ? v[d] : p[d] : d.value;
          if (l)
            st(C) && fl(C, r);
          else if (st(C))
            C.includes(r) || C.push(r);
          else if (k)
            p[d] = [r], g(d) && (v[d] = p[d]);
          else {
            const I = [r];
            d.value = I, e.k && (p[e.k] = I);
          }
        } else k ? (p[d] = c, g(d) && (v[d] = c)) : $ && (d.value = c, e.k && (p[e.k] = c));
      };
      if (c) {
        const C = () => {
          S(), ta.delete(e);
        };
        C.id = -1, ta.set(e, C), as(C, n);
      } else
        Xl(e), S();
    }
  }
}
function Xl(e) {
  const t = ta.get(e);
  t && (t.flags |= 8, ta.delete(e));
}
fa().requestIdleCallback;
fa().cancelIdleCallback;
const Ln = (e) => !!e.type.__asyncLoader, ga = (e) => e.type.__isKeepAlive;
function Fu(e, t) {
  Mr(e, "a", t);
}
function Vu(e, t) {
  Mr(e, "da", t);
}
function Mr(e, t, n = Xt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = n;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (ha(t, a, n), n) {
    let l = n.parent;
    for (; l && l.parent; )
      ga(l.parent.vnode) && Bu(a, t, n, l), l = l.parent;
  }
}
function Bu(e, t, n, a) {
  const l = ha(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Gn(() => {
    fl(a[t], l);
  }, n);
}
function ha(e, t, n = Xt, a = !1) {
  if (n) {
    const l = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Qs();
      const u = Mo(n), d = Ts(t, n, e, c);
      return u(), Ys(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Zs = (e) => (t, n = Xt) => {
  (!xo || e === "sp") && ha(e, (...a) => t(...a), n);
}, Wu = Zs("bm"), dt = Zs("m"), Gu = Zs(
  "bu"
), Pr = Zs("u"), To = Zs(
  "bum"
), Gn = Zs("um"), ju = Zs(
  "sp"
), Hu = Zs("rtg"), qu = Zs("rtc");
function Ku(e, t = Xt) {
  ha("ec", e, t);
}
const Ju = "components", Rr = Symbol.for("v-ndc");
function xl(e) {
  return Rt(e) ? Qu(Ju, e, !1) || e : e || Rr;
}
function Qu(e, t, n = !0, a = !1) {
  const l = Gt || Xt;
  if (l) {
    const r = l.type;
    {
      const u = Ad(
        r,
        !1
      );
      if (u && (u === t || u === $s(t) || u === da($s(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zl(l[e] || r[e], t) || // global registration
      Zl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Zl(e, t) {
  return e && (e[t] || e[$s(t)] || e[da($s(t))]);
}
function ye(e, t, n, a) {
  let l;
  const r = n, c = st(e);
  if (c || Rt(e)) {
    const u = c && yn(e);
    let d = !1, f = !1;
    u && (d = !ks(e), f = Xs(e), e = va(e)), l = new Array(e.length);
    for (let p = 0, v = e.length; p < v; p++)
      l[p] = t(
        d ? f ? Fn(Es(e[p])) : Es(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (Ct(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, f = u.length; d < f; d++) {
        const p = u[d];
        l[d] = t(e[p], p, d, r);
      }
    }
  else
    l = [];
  return l;
}
function fs(e, t) {
  for (let n = 0; n < t.length; n++) {
    const a = t[n];
    if (st(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function rt(e, t, n = {}, a, l) {
  if (Gt.ce || Gt.parent && Ln(Gt.parent) && Gt.parent.ce) {
    const f = Object.keys(n).length > 0;
    return t !== "default" && (n.name = t), o(), R(
      V,
      null,
      [b("slot", n, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), o();
  const c = r && Dr(r(n)), u = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    V,
    {
      key: (u && !Is(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Dr(e) {
  return e.some((t) => Co(t) ? !(t.type === Yt || t.type === V && !Dr(t.children)) : !0) ? e : null;
}
const Za = (e) => e ? Xr(e) ? _a(e) : Za(e.parent) : null, vo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ zt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Za(e.parent),
    $root: (e) => Za(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Lr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $l(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wt.bind(e.proxy)),
    $watch: (e) => rd.bind(e)
  })
), Fa = (e, t) => e !== St && !e.__isScriptSetup && kt(e, t), Yu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Fa(a, t))
          return c[t] = 1, a[t];
        if (l !== St && kt(l, t))
          return c[t] = 2, l[t];
        if (kt(r, t))
          return c[t] = 3, r[t];
        if (n !== St && kt(n, t))
          return c[t] = 4, n[t];
        el && (c[t] = 0);
      }
    }
    const f = vo[t];
    let p, v;
    if (f)
      return t === "$attrs" && Jt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (p = u.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== St && kt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, kt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: a, setupState: l, ctx: r } = e;
    return Fa(l, t) ? (l[t] = n, !0) : a !== St && kt(a, t) ? (a[t] = n, !0) : kt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== St && u[0] !== "$" && kt(e, u) || Fa(t, u) || kt(r, u) || kt(a, u) || kt(vo, u) || kt(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : kt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ei(e) {
  return st(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let el = !0;
function Xu(e) {
  const t = Lr(e), n = e.proxy, a = e.ctx;
  el = !1, t.beforeCreate && ti(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: f,
    // lifecycle
    created: p,
    beforeMount: v,
    mounted: w,
    beforeUpdate: g,
    updated: k,
    activated: $,
    deactivated: S,
    beforeDestroy: C,
    beforeUnmount: I,
    destroyed: E,
    unmounted: P,
    render: O,
    renderTracked: U,
    renderTriggered: F,
    errorCaptured: D,
    serverPrefetch: W,
    // public API
    expose: ce,
    inheritAttrs: de,
    // assets
    components: J,
    directives: ve,
    filters: K
  } = t;
  if (f && Zu(f, a, null), c)
    for (const re in c) {
      const te = c[re];
      lt(te) && (a[re] = te.bind(n));
    }
  if (l) {
    const re = l.call(n, n);
    Ct(re) && (e.data = $n(re));
  }
  if (el = !0, r)
    for (const re in r) {
      const te = r[re], ue = lt(te) ? te.bind(n, n) : lt(te.get) ? te.get.bind(n, n) : Fs, me = !lt(te) && lt(te.set) ? te.set.bind(n) : Fs, q = M({
        get: ue,
        set: me
      });
      Object.defineProperty(a, re, {
        enumerable: !0,
        configurable: !0,
        get: () => q.value,
        set: (Q) => q.value = Q
      });
    }
  if (u)
    for (const re in u)
      Nr(u[re], a, n, re);
  if (d) {
    const re = lt(d) ? d.call(n) : d;
    Reflect.ownKeys(re).forEach((te) => {
      ad(te, re[te]);
    });
  }
  p && ti(p, e, "c");
  function G(re, te) {
    st(te) ? te.forEach((ue) => re(ue.bind(n))) : te && re(te.bind(n));
  }
  if (G(Wu, v), G(dt, w), G(Gu, g), G(Pr, k), G(Fu, $), G(Vu, S), G(Ku, D), G(qu, U), G(Hu, F), G(To, I), G(Gn, P), G(ju, W), st(ce))
    if (ce.length) {
      const re = e.exposed || (e.exposed = {});
      ce.forEach((te) => {
        Object.defineProperty(re, te, {
          get: () => n[te],
          set: (ue) => n[te] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Fs && (e.render = O), de != null && (e.inheritAttrs = de), J && (e.components = J), ve && (e.directives = ve), W && Tr(e);
}
function Zu(e, t, n = Fs) {
  st(e) && (e = tl(e));
  for (const a in e) {
    const l = e[a];
    let r;
    Ct(l) ? "default" in l ? r = Go(
      l.from || a,
      l.default,
      !0
    ) : r = Go(l.from || a) : r = Go(l), Zt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function ti(e, t, n) {
  Ts(
    st(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Nr(e, t, n, a) {
  let l = a.includes(".") ? Ar(n, a) : () => n[a];
  if (Rt(e)) {
    const r = t[e];
    lt(r) && $t(l, r);
  } else if (lt(e))
    $t(l, e.bind(n));
  else if (Ct(e))
    if (st(e))
      e.forEach((r) => Nr(r, t, n, a));
    else {
      const r = lt(e.handler) ? e.handler.bind(n) : t[e.handler];
      lt(r) && $t(l, r, e);
    }
}
function Lr(e) {
  const t = e.type, { mixins: n, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !n && !a ? d = t : (d = {}, l.length && l.forEach(
    (f) => sa(d, f, c, !0)
  ), sa(d, t, c)), Ct(t) && r.set(t, d), d;
}
function sa(e, t, n, a = !1) {
  const { mixins: l, extends: r } = t;
  r && sa(e, r, n, !0), l && l.forEach(
    (c) => sa(e, c, n, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
      const u = ed[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const ed = {
  data: si,
  props: ni,
  emits: ni,
  // objects
  methods: ao,
  computed: ao,
  // lifecycle
  beforeCreate: os,
  created: os,
  beforeMount: os,
  mounted: os,
  beforeUpdate: os,
  updated: os,
  beforeDestroy: os,
  beforeUnmount: os,
  destroyed: os,
  unmounted: os,
  activated: os,
  deactivated: os,
  errorCaptured: os,
  serverPrefetch: os,
  // assets
  components: ao,
  directives: ao,
  // watch
  watch: sd,
  // provide / inject
  provide: si,
  inject: td
};
function si(e, t) {
  return t ? e ? function() {
    return zt(
      lt(e) ? e.call(this, this) : e,
      lt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function td(e, t) {
  return ao(tl(e), tl(t));
}
function tl(e) {
  if (st(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function os(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ao(e, t) {
  return e ? zt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ni(e, t) {
  return e ? st(e) && st(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : zt(
    /* @__PURE__ */ Object.create(null),
    ei(e),
    ei(t ?? {})
  ) : t;
}
function sd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = zt(/* @__PURE__ */ Object.create(null), e);
  for (const a in t)
    n[a] = os(e[a], t[a]);
  return n;
}
function Ur() {
  return {
    app: null,
    config: {
      isNativeTag: Hi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let nd = 0;
function od(e, t) {
  return function(a, l = null) {
    lt(a) || (a = zt({}, a)), l != null && !Ct(l) && (l = null);
    const r = Ur(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const f = r.app = {
      _uid: nd++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Fd,
      get config() {
        return r.config;
      },
      set config(p) {
      },
      use(p, ...v) {
        return c.has(p) || (p && lt(p.install) ? (c.add(p), p.install(f, ...v)) : lt(p) && (c.add(p), p(f, ...v))), f;
      },
      mixin(p) {
        return r.mixins.includes(p) || r.mixins.push(p), f;
      },
      component(p, v) {
        return v ? (r.components[p] = v, f) : r.components[p];
      },
      directive(p, v) {
        return v ? (r.directives[p] = v, f) : r.directives[p];
      },
      mount(p, v, w) {
        if (!d) {
          const g = f._ceVNode || b(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, p, w), d = !0, f._container = p, p.__vue_app__ = f, _a(g.component);
        }
      },
      onUnmount(p) {
        u.push(p);
      },
      unmount() {
        d && (Ts(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(p, v) {
        return r.provides[p] = v, f;
      },
      runWithContext(p) {
        const v = Un;
        Un = f;
        try {
          return p();
        } finally {
          Un = v;
        }
      }
    };
    return f;
  };
}
let Un = null;
function ad(e, t) {
  if (Xt) {
    let n = Xt.provides;
    const a = Xt.parent && Xt.parent.provides;
    a === n && (n = Xt.provides = Object.create(a)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const a = Ml();
  if (a || Un) {
    let l = Un ? Un._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return n && lt(t) ? t.call(a && a.proxy) : t;
  }
}
const ld = Symbol.for("v-scx"), id = () => Go(ld);
function $t(e, t, n) {
  return Or(e, t, n);
}
function Or(e, t, n = St) {
  const { immediate: a, deep: l, flush: r, once: c } = n, u = zt({}, n), d = t && a || !t && r !== "post";
  let f;
  if (xo) {
    if (r === "sync") {
      const g = id();
      f = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = Fs, g.resume = Fs, g.pause = Fs, g;
    }
  }
  const p = Xt;
  u.call = (g, k, $) => Ts(g, p, k, $);
  let v = !1;
  r === "post" ? u.scheduler = (g) => {
    as(g, p && p.suspense);
  } : r !== "sync" && (v = !0, u.scheduler = (g, k) => {
    k ? g() : $l(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), v && (g.flags |= 2, p && (g.id = p.uid, g.i = p));
  };
  const w = Du(e, t, u);
  return xo && (f ? f.push(w) : d && w()), w;
}
function rd(e, t, n) {
  const a = this.proxy, l = Rt(e) ? e.includes(".") ? Ar(a, e) : () => a[e] : e.bind(a, a);
  let r;
  lt(t) ? r = t : (r = t.handler, n = t);
  const c = Mo(this), u = Or(l, r.bind(a), n);
  return c(), u;
}
function Ar(e, t) {
  const n = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < n.length && a; l++)
      a = a[n[l]];
    return a;
  };
}
const cd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$s(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function ud(e, t, ...n) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || St;
  let l = n;
  const r = t.startsWith("update:"), c = r && cd(a, t.slice(7));
  c && (c.trim && (l = n.map((p) => Rt(p) ? p.trim() : p)), c.number && (l = n.map(ma)));
  let u, d = a[u = Na(t)] || // also try camelCase event handler (#2249)
  a[u = Na($s(t))];
  !d && r && (d = a[u = Na(cn(t))]), d && Ts(
    d,
    e,
    6,
    l
  );
  const f = a[u + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Ts(
      f,
      e,
      6,
      l
    );
  }
}
const dd = /* @__PURE__ */ new WeakMap();
function zr(e, t, n = !1) {
  const a = n ? dd : t.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!lt(e)) {
    const d = (f) => {
      const p = zr(f, t, !0);
      p && (u = !0, zt(c, p));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (Ct(e) && a.set(e, null), null) : (st(r) ? r.forEach((d) => c[d] = null) : zt(c, r), Ct(e) && a.set(e, c), c);
}
function ya(e, t) {
  return !e || !ca(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), kt(e, t[0].toLowerCase() + t.slice(1)) || kt(e, cn(t)) || kt(e, t));
}
function oi(e) {
  const {
    type: t,
    vnode: n,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: f,
    renderCache: p,
    props: v,
    data: w,
    setupState: g,
    ctx: k,
    inheritAttrs: $
  } = e, S = ea(e);
  let C, I;
  try {
    if (n.shapeFlag & 4) {
      const P = l || a, O = P;
      C = As(
        f.call(
          O,
          P,
          p,
          v,
          g,
          w,
          k
        )
      ), I = u;
    } else {
      const P = t;
      C = As(
        P.length > 1 ? P(
          v,
          { attrs: u, slots: c, emit: d }
        ) : P(
          v,
          null
        )
      ), I = t.props ? u : md(u);
    }
  } catch (P) {
    po.length = 0, pa(P, e, 1), C = b(Yt);
  }
  let E = C;
  if (I && $ !== !1) {
    const P = Object.keys(I), { shapeFlag: O } = E;
    P.length && O & 7 && (r && P.some(ml) && (I = fd(
      I,
      r
    )), E = ln(E, I, !1, !0));
  }
  return n.dirs && (E = ln(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && kn(E, n.transition), C = E, ea(S), C;
}
const md = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ca(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, fd = (e, t) => {
  const n = {};
  for (const a in e)
    (!ml(a) || !(a.slice(9) in t)) && (n[a] = e[a]);
  return n;
};
function vd(e, t, n) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? ai(a, c, f) : !!c;
    if (d & 8) {
      const p = t.dynamicProps;
      for (let v = 0; v < p.length; v++) {
        const w = p[v];
        if (c[w] !== a[w] && !ya(f, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? ai(a, c, f) : !0 : !!c;
  return !1;
}
function ai(e, t, n) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !ya(n, r))
      return !0;
  }
  return !1;
}
function pd({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Fr = {}, Vr = () => Object.create(Fr), Br = (e) => Object.getPrototypeOf(e) === Fr;
function gd(e, t, n, a = !1) {
  const l = {}, r = Vr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Wr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  n ? e.props = a ? l : xu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function hd(e, t, n, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ht(l), [d] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const p = e.vnode.dynamicProps;
      for (let v = 0; v < p.length; v++) {
        let w = p[v];
        if (ya(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (kt(r, w))
            g !== r[w] && (r[w] = g, f = !0);
          else {
            const k = $s(w);
            l[k] = sl(
              d,
              u,
              k,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, f = !0);
      }
    }
  } else {
    Wr(e, t, l, r) && (f = !0);
    let p;
    for (const v in u)
      (!t || // for camelCase
      !kt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = cn(v)) === v || !kt(t, p))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[p] !== void 0) && (l[v] = sl(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete l[v]);
    if (r !== u)
      for (const v in r)
        (!t || !kt(t, v)) && (delete r[v], f = !0);
  }
  f && Hs(e.attrs, "set", "");
}
function Wr(e, t, n, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (ro(d))
        continue;
      const f = t[d];
      let p;
      l && kt(l, p = $s(d)) ? !r || !r.includes(p) ? n[p] = f : (u || (u = {}))[p] = f : ya(e.emitsOptions, d) || (!(d in a) || f !== a[d]) && (a[d] = f, c = !0);
    }
  if (r) {
    const d = ht(n), f = u || St;
    for (let p = 0; p < r.length; p++) {
      const v = r[p];
      n[v] = sl(
        l,
        d,
        v,
        f[v],
        e,
        !kt(f, v)
      );
    }
  }
  return c;
}
function sl(e, t, n, a, l, r) {
  const c = e[n];
  if (c != null) {
    const u = kt(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && lt(d)) {
        const { propsDefaults: f } = l;
        if (n in f)
          a = f[n];
        else {
          const p = Mo(l);
          a = f[n] = d.call(
            null,
            t
          ), p();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(n, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === cn(n)) && (a = !0));
  }
  return a;
}
const yd = /* @__PURE__ */ new WeakMap();
function Gr(e, t, n = !1) {
  const a = n ? yd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!lt(e)) {
    const p = (v) => {
      d = !0;
      const [w, g] = Gr(v, t, !0);
      zt(c, w), g && u.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !d)
    return Ct(e) && a.set(e, Rn), Rn;
  if (st(r))
    for (let p = 0; p < r.length; p++) {
      const v = $s(r[p]);
      li(v) && (c[v] = St);
    }
  else if (r)
    for (const p in r) {
      const v = $s(p);
      if (li(v)) {
        const w = r[p], g = c[v] = st(w) || lt(w) ? { type: w } : zt({}, w), k = g.type;
        let $ = !1, S = !0;
        if (st(k))
          for (let C = 0; C < k.length; ++C) {
            const I = k[C], E = lt(I) && I.name;
            if (E === "Boolean") {
              $ = !0;
              break;
            } else E === "String" && (S = !1);
          }
        else
          $ = lt(k) && k.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = $, g[
          1
          /* shouldCastTrue */
        ] = S, ($ || kt(g, "default")) && u.push(v);
      }
    }
  const f = [c, u];
  return Ct(e) && a.set(e, f), f;
}
function li(e) {
  return e[0] !== "$" && !ro(e);
}
const Sl = (e) => e === "_" || e === "_ctx" || e === "$stable", Il = (e) => st(e) ? e.map(As) : [As(e)], wd = (e, t, n) => {
  if (t._n)
    return t;
  const a = h((...l) => Il(t(...l)), n);
  return a._c = !1, a;
}, jr = (e, t, n) => {
  const a = e._ctx;
  for (const l in e) {
    if (Sl(l)) continue;
    const r = e[l];
    if (lt(r))
      t[l] = wd(l, r, a);
    else if (r != null) {
      const c = Il(r);
      t[l] = () => c;
    }
  }
}, Hr = (e, t) => {
  const n = Il(t);
  e.slots.default = () => n;
}, qr = (e, t, n) => {
  for (const a in t)
    (n || !Sl(a)) && (e[a] = t[a]);
}, _d = (e, t, n) => {
  const a = e.slots = Vr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (qr(a, t, n), n && Qi(a, "_", l, !0)) : jr(t, a);
  } else t && Hr(e, t);
}, kd = (e, t, n) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = St;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? r = !1 : qr(l, t, n) : (r = !t.$stable, jr(t, l)), c = t;
  } else t && (Hr(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !Sl(u) && c[u] == null && delete l[u];
}, as = Sd;
function bd(e) {
  return $d(e);
}
function $d(e, t) {
  const n = fa();
  n.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: f,
    setElementText: p,
    parentNode: v,
    nextSibling: w,
    setScopeId: g = Fs,
    insertStaticContent: k
  } = e, $ = (T, A, le, Ee = null, we = null, Se = null, X = void 0, j = null, pe = !!A.dynamicChildren) => {
    if (T === A)
      return;
    T && !gn(T, A) && (Ee = Ne(T), Q(T, we, Se, !0), T = null), A.patchFlag === -2 && (pe = !1, A.dynamicChildren = null);
    const { type: be, ref: je, shapeFlag: Ve } = A;
    switch (be) {
      case wa:
        S(T, A, le, Ee);
        break;
      case Yt:
        C(T, A, le, Ee);
        break;
      case Ba:
        T == null && I(A, le, Ee, X);
        break;
      case V:
        J(
          T,
          A,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe
        );
        break;
      default:
        Ve & 1 ? O(
          T,
          A,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe
        ) : Ve & 6 ? ve(
          T,
          A,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe
        ) : (Ve & 64 || Ve & 128) && be.process(
          T,
          A,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe,
          he
        );
    }
    je != null && we ? fo(je, T && T.ref, Se, A || T, !A) : je == null && T && T.ref != null && fo(T.ref, null, Se, T, !0);
  }, S = (T, A, le, Ee) => {
    if (T == null)
      a(
        A.el = u(A.children),
        le,
        Ee
      );
    else {
      const we = A.el = T.el;
      A.children !== T.children && f(we, A.children);
    }
  }, C = (T, A, le, Ee) => {
    T == null ? a(
      A.el = d(A.children || ""),
      le,
      Ee
    ) : A.el = T.el;
  }, I = (T, A, le, Ee) => {
    [T.el, T.anchor] = k(
      T.children,
      A,
      le,
      Ee,
      T.el,
      T.anchor
    );
  }, E = ({ el: T, anchor: A }, le, Ee) => {
    let we;
    for (; T && T !== A; )
      we = w(T), a(T, le, Ee), T = we;
    a(A, le, Ee);
  }, P = ({ el: T, anchor: A }) => {
    let le;
    for (; T && T !== A; )
      le = w(T), l(T), T = le;
    l(A);
  }, O = (T, A, le, Ee, we, Se, X, j, pe) => {
    if (A.type === "svg" ? X = "svg" : A.type === "math" && (X = "mathml"), T == null)
      U(
        A,
        le,
        Ee,
        we,
        Se,
        X,
        j,
        pe
      );
    else {
      const be = T.el && T.el._isVueCE ? T.el : null;
      try {
        be && be._beginPatch(), W(
          T,
          A,
          we,
          Se,
          X,
          j,
          pe
        );
      } finally {
        be && be._endPatch();
      }
    }
  }, U = (T, A, le, Ee, we, Se, X, j) => {
    let pe, be;
    const { props: je, shapeFlag: Ve, transition: Ce, dirs: ne } = T;
    if (pe = T.el = c(
      T.type,
      Se,
      je && je.is,
      je
    ), Ve & 8 ? p(pe, T.children) : Ve & 16 && D(
      T.children,
      pe,
      null,
      Ee,
      we,
      Va(T, Se),
      X,
      j
    ), ne && dn(T, null, Ee, "created"), F(pe, T, T.scopeId, X, Ee), je) {
      for (const Te in je)
        Te !== "value" && !ro(Te) && r(pe, Te, null, je[Te], Se, Ee);
      "value" in je && r(pe, "value", null, je.value, Se), (be = je.onVnodeBeforeMount) && Rs(be, Ee, T);
    }
    ne && dn(T, null, Ee, "beforeMount");
    const He = Cd(we, Ce);
    He && Ce.beforeEnter(pe), a(pe, A, le), ((be = je && je.onVnodeMounted) || He || ne) && as(() => {
      be && Rs(be, Ee, T), He && Ce.enter(pe), ne && dn(T, null, Ee, "mounted");
    }, we);
  }, F = (T, A, le, Ee, we) => {
    if (le && g(T, le), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        g(T, Ee[Se]);
    if (we) {
      let Se = we.subTree;
      if (A === Se || Jr(Se.type) && (Se.ssContent === A || Se.ssFallback === A)) {
        const X = we.vnode;
        F(
          T,
          X,
          X.scopeId,
          X.slotScopeIds,
          we.parent
        );
      }
    }
  }, D = (T, A, le, Ee, we, Se, X, j, pe = 0) => {
    for (let be = pe; be < T.length; be++) {
      const je = T[be] = j ? on(T[be]) : As(T[be]);
      $(
        null,
        je,
        A,
        le,
        Ee,
        we,
        Se,
        X,
        j
      );
    }
  }, W = (T, A, le, Ee, we, Se, X) => {
    const j = A.el = T.el;
    let { patchFlag: pe, dynamicChildren: be, dirs: je } = A;
    pe |= T.patchFlag & 16;
    const Ve = T.props || St, Ce = A.props || St;
    let ne;
    if (le && mn(le, !1), (ne = Ce.onVnodeBeforeUpdate) && Rs(ne, le, A, T), je && dn(A, T, le, "beforeUpdate"), le && mn(le, !0), (Ve.innerHTML && Ce.innerHTML == null || Ve.textContent && Ce.textContent == null) && p(j, ""), be ? ce(
      T.dynamicChildren,
      be,
      j,
      le,
      Ee,
      Va(A, we),
      Se
    ) : X || te(
      T,
      A,
      j,
      null,
      le,
      Ee,
      Va(A, we),
      Se,
      !1
    ), pe > 0) {
      if (pe & 16)
        de(j, Ve, Ce, le, we);
      else if (pe & 2 && Ve.class !== Ce.class && r(j, "class", null, Ce.class, we), pe & 4 && r(j, "style", Ve.style, Ce.style, we), pe & 8) {
        const He = A.dynamicProps;
        for (let Te = 0; Te < He.length; Te++) {
          const Ze = He[Te], Ue = Ve[Ze], Ae = Ce[Ze];
          (Ae !== Ue || Ze === "value") && r(j, Ze, Ue, Ae, we, le);
        }
      }
      pe & 1 && T.children !== A.children && p(j, A.children);
    } else !X && be == null && de(j, Ve, Ce, le, we);
    ((ne = Ce.onVnodeUpdated) || je) && as(() => {
      ne && Rs(ne, le, A, T), je && dn(A, T, le, "updated");
    }, Ee);
  }, ce = (T, A, le, Ee, we, Se, X) => {
    for (let j = 0; j < A.length; j++) {
      const pe = T[j], be = A[j], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        pe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (pe.type === V || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gn(pe, be) || // - In the case of a component, it could contain anything.
        pe.shapeFlag & 198) ? v(pe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      $(
        pe,
        be,
        je,
        null,
        Ee,
        we,
        Se,
        X,
        !0
      );
    }
  }, de = (T, A, le, Ee, we) => {
    if (A !== le) {
      if (A !== St)
        for (const Se in A)
          !ro(Se) && !(Se in le) && r(
            T,
            Se,
            A[Se],
            null,
            we,
            Ee
          );
      for (const Se in le) {
        if (ro(Se)) continue;
        const X = le[Se], j = A[Se];
        X !== j && Se !== "value" && r(T, Se, j, X, we, Ee);
      }
      "value" in le && r(T, "value", A.value, le.value, we);
    }
  }, J = (T, A, le, Ee, we, Se, X, j, pe) => {
    const be = A.el = T ? T.el : u(""), je = A.anchor = T ? T.anchor : u("");
    let { patchFlag: Ve, dynamicChildren: Ce, slotScopeIds: ne } = A;
    ne && (j = j ? j.concat(ne) : ne), T == null ? (a(be, le, Ee), a(je, le, Ee), D(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      le,
      je,
      we,
      Se,
      X,
      j,
      pe
    )) : Ve > 0 && Ve & 64 && Ce && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren ? (ce(
      T.dynamicChildren,
      Ce,
      le,
      we,
      Se,
      X,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || we && A === we.subTree) && El(
      T,
      A,
      !0
      /* shallow */
    )) : te(
      T,
      A,
      le,
      je,
      we,
      Se,
      X,
      j,
      pe
    );
  }, ve = (T, A, le, Ee, we, Se, X, j, pe) => {
    A.slotScopeIds = j, T == null ? A.shapeFlag & 512 ? we.ctx.activate(
      A,
      le,
      Ee,
      X,
      pe
    ) : K(
      A,
      le,
      Ee,
      we,
      Se,
      X,
      pe
    ) : L(T, A, pe);
  }, K = (T, A, le, Ee, we, Se, X) => {
    const j = T.component = Dd(
      T,
      Ee,
      we
    );
    if (ga(T) && (j.ctx.renderer = he), Nd(j, !1, X), j.asyncDep) {
      if (we && we.registerDep(j, G, X), !T.el) {
        const pe = j.subTree = b(Yt);
        C(null, pe, A, le), T.placeholder = pe.el;
      }
    } else
      G(
        j,
        T,
        A,
        le,
        we,
        Se,
        X
      );
  }, L = (T, A, le) => {
    const Ee = A.component = T.component;
    if (vd(T, A, le))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        re(Ee, A, le);
        return;
      } else
        Ee.next = A, Ee.update();
    else
      A.el = T.el, Ee.vnode = A;
  }, G = (T, A, le, Ee, we, Se, X) => {
    const j = () => {
      if (T.isMounted) {
        let { next: Ve, bu: Ce, u: ne, parent: He, vnode: Te } = T;
        {
          const yt = Kr(T);
          if (yt) {
            Ve && (Ve.el = Te.el, re(T, Ve, X)), yt.asyncDep.then(() => {
              T.isUnmounted || j();
            });
            return;
          }
        }
        let Ze = Ve, Ue;
        mn(T, !1), Ve ? (Ve.el = Te.el, re(T, Ve, X)) : Ve = Te, Ce && Bo(Ce), (Ue = Ve.props && Ve.props.onVnodeBeforeUpdate) && Rs(Ue, He, Ve, Te), mn(T, !0);
        const Ae = oi(T), Xe = T.subTree;
        T.subTree = Ae, $(
          Xe,
          Ae,
          // parent may have changed if it's in a teleport
          v(Xe.el),
          // anchor may have changed if it's in a fragment
          Ne(Xe),
          T,
          we,
          Se
        ), Ve.el = Ae.el, Ze === null && pd(T, Ae.el), ne && as(ne, we), (Ue = Ve.props && Ve.props.onVnodeUpdated) && as(
          () => Rs(Ue, He, Ve, Te),
          we
        );
      } else {
        let Ve;
        const { el: Ce, props: ne } = A, { bm: He, m: Te, parent: Ze, root: Ue, type: Ae } = T, Xe = Ln(A);
        mn(T, !1), He && Bo(He), !Xe && (Ve = ne && ne.onVnodeBeforeMount) && Rs(Ve, Ze, A), mn(T, !0);
        {
          Ue.ce && // @ts-expect-error _def is private
          Ue.ce._def.shadowRoot !== !1 && Ue.ce._injectChildStyle(Ae);
          const yt = T.subTree = oi(T);
          $(
            null,
            yt,
            le,
            Ee,
            T,
            we,
            Se
          ), A.el = yt.el;
        }
        if (Te && as(Te, we), !Xe && (Ve = ne && ne.onVnodeMounted)) {
          const yt = A;
          as(
            () => Rs(Ve, Ze, yt),
            we
          );
        }
        (A.shapeFlag & 256 || Ze && Ln(Ze.vnode) && Ze.vnode.shapeFlag & 256) && T.a && as(T.a, we), T.isMounted = !0, A = le = Ee = null;
      }
    };
    T.scope.on();
    const pe = T.effect = new er(j);
    T.scope.off();
    const be = T.update = pe.run.bind(pe), je = T.job = pe.runIfDirty.bind(pe);
    je.i = T, je.id = T.uid, pe.scheduler = () => $l(je), mn(T, !0), be();
  }, re = (T, A, le) => {
    A.component = T;
    const Ee = T.vnode.props;
    T.vnode = A, T.next = null, hd(T, A.props, Ee, le), kd(T, A.children, le), Qs(), ql(T), Ys();
  }, te = (T, A, le, Ee, we, Se, X, j, pe = !1) => {
    const be = T && T.children, je = T ? T.shapeFlag : 0, Ve = A.children, { patchFlag: Ce, shapeFlag: ne } = A;
    if (Ce > 0) {
      if (Ce & 128) {
        me(
          be,
          Ve,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe
        );
        return;
      } else if (Ce & 256) {
        ue(
          be,
          Ve,
          le,
          Ee,
          we,
          Se,
          X,
          j,
          pe
        );
        return;
      }
    }
    ne & 8 ? (je & 16 && ze(be, we, Se), Ve !== be && p(le, Ve)) : je & 16 ? ne & 16 ? me(
      be,
      Ve,
      le,
      Ee,
      we,
      Se,
      X,
      j,
      pe
    ) : ze(be, we, Se, !0) : (je & 8 && p(le, ""), ne & 16 && D(
      Ve,
      le,
      Ee,
      we,
      Se,
      X,
      j,
      pe
    ));
  }, ue = (T, A, le, Ee, we, Se, X, j, pe) => {
    T = T || Rn, A = A || Rn;
    const be = T.length, je = A.length, Ve = Math.min(be, je);
    let Ce;
    for (Ce = 0; Ce < Ve; Ce++) {
      const ne = A[Ce] = pe ? on(A[Ce]) : As(A[Ce]);
      $(
        T[Ce],
        ne,
        le,
        null,
        we,
        Se,
        X,
        j,
        pe
      );
    }
    be > je ? ze(
      T,
      we,
      Se,
      !0,
      !1,
      Ve
    ) : D(
      A,
      le,
      Ee,
      we,
      Se,
      X,
      j,
      pe,
      Ve
    );
  }, me = (T, A, le, Ee, we, Se, X, j, pe) => {
    let be = 0;
    const je = A.length;
    let Ve = T.length - 1, Ce = je - 1;
    for (; be <= Ve && be <= Ce; ) {
      const ne = T[be], He = A[be] = pe ? on(A[be]) : As(A[be]);
      if (gn(ne, He))
        $(
          ne,
          He,
          le,
          null,
          we,
          Se,
          X,
          j,
          pe
        );
      else
        break;
      be++;
    }
    for (; be <= Ve && be <= Ce; ) {
      const ne = T[Ve], He = A[Ce] = pe ? on(A[Ce]) : As(A[Ce]);
      if (gn(ne, He))
        $(
          ne,
          He,
          le,
          null,
          we,
          Se,
          X,
          j,
          pe
        );
      else
        break;
      Ve--, Ce--;
    }
    if (be > Ve) {
      if (be <= Ce) {
        const ne = Ce + 1, He = ne < je ? A[ne].el : Ee;
        for (; be <= Ce; )
          $(
            null,
            A[be] = pe ? on(A[be]) : As(A[be]),
            le,
            He,
            we,
            Se,
            X,
            j,
            pe
          ), be++;
      }
    } else if (be > Ce)
      for (; be <= Ve; )
        Q(T[be], we, Se, !0), be++;
    else {
      const ne = be, He = be, Te = /* @__PURE__ */ new Map();
      for (be = He; be <= Ce; be++) {
        const Z = A[be] = pe ? on(A[be]) : As(A[be]);
        Z.key != null && Te.set(Z.key, be);
      }
      let Ze, Ue = 0;
      const Ae = Ce - He + 1;
      let Xe = !1, yt = 0;
      const Nt = new Array(Ae);
      for (be = 0; be < Ae; be++) Nt[be] = 0;
      for (be = ne; be <= Ve; be++) {
        const Z = T[be];
        if (Ue >= Ae) {
          Q(Z, we, Se, !0);
          continue;
        }
        let ee;
        if (Z.key != null)
          ee = Te.get(Z.key);
        else
          for (Ze = He; Ze <= Ce; Ze++)
            if (Nt[Ze - He] === 0 && gn(Z, A[Ze])) {
              ee = Ze;
              break;
            }
        ee === void 0 ? Q(Z, we, Se, !0) : (Nt[ee - He] = be + 1, ee >= yt ? yt = ee : Xe = !0, $(
          Z,
          A[ee],
          le,
          null,
          we,
          Se,
          X,
          j,
          pe
        ), Ue++);
      }
      const es = Xe ? xd(Nt) : Rn;
      for (Ze = es.length - 1, be = Ae - 1; be >= 0; be--) {
        const Z = He + be, ee = A[Z], se = A[Z + 1], Qe = Z + 1 < je ? (
          // #13559, fallback to el placeholder for unresolved async component
          se.el || se.placeholder
        ) : Ee;
        Nt[be] === 0 ? $(
          null,
          ee,
          le,
          Qe,
          we,
          Se,
          X,
          j,
          pe
        ) : Xe && (Ze < 0 || be !== es[Ze] ? q(ee, le, Qe, 2) : Ze--);
      }
    }
  }, q = (T, A, le, Ee, we = null) => {
    const { el: Se, type: X, transition: j, children: pe, shapeFlag: be } = T;
    if (be & 6) {
      q(T.component.subTree, A, le, Ee);
      return;
    }
    if (be & 128) {
      T.suspense.move(A, le, Ee);
      return;
    }
    if (be & 64) {
      X.move(T, A, le, he);
      return;
    }
    if (X === V) {
      a(Se, A, le);
      for (let Ve = 0; Ve < pe.length; Ve++)
        q(pe[Ve], A, le, Ee);
      a(T.anchor, A, le);
      return;
    }
    if (X === Ba) {
      E(T, A, le);
      return;
    }
    if (Ee !== 2 && be & 1 && j)
      if (Ee === 0)
        j.beforeEnter(Se), a(Se, A, le), as(() => j.enter(Se), we);
      else {
        const { leave: Ve, delayLeave: Ce, afterLeave: ne } = j, He = () => {
          T.ctx.isUnmounted ? l(Se) : a(Se, A, le);
        }, Te = () => {
          Se._isLeaving && Se[js](
            !0
            /* cancelled */
          ), Ve(Se, () => {
            He(), ne && ne();
          });
        };
        Ce ? Ce(Se, He, Te) : Te();
      }
    else
      a(Se, A, le);
  }, Q = (T, A, le, Ee = !1, we = !1) => {
    const {
      type: Se,
      props: X,
      ref: j,
      children: pe,
      dynamicChildren: be,
      shapeFlag: je,
      patchFlag: Ve,
      dirs: Ce,
      cacheIndex: ne
    } = T;
    if (Ve === -2 && (we = !1), j != null && (Qs(), fo(j, null, le, T, !0), Ys()), ne != null && (A.renderCache[ne] = void 0), je & 256) {
      A.ctx.deactivate(T);
      return;
    }
    const He = je & 1 && Ce, Te = !Ln(T);
    let Ze;
    if (Te && (Ze = X && X.onVnodeBeforeUnmount) && Rs(Ze, A, T), je & 6)
      ge(T.component, le, Ee);
    else {
      if (je & 128) {
        T.suspense.unmount(le, Ee);
        return;
      }
      He && dn(T, null, A, "beforeUnmount"), je & 64 ? T.type.remove(
        T,
        A,
        le,
        he,
        Ee
      ) : be && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !be.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== V || Ve > 0 && Ve & 64) ? ze(
        be,
        A,
        le,
        !1,
        !0
      ) : (Se === V && Ve & 384 || !we && je & 16) && ze(pe, A, le), Ee && ae(T);
    }
    (Te && (Ze = X && X.onVnodeUnmounted) || He) && as(() => {
      Ze && Rs(Ze, A, T), He && dn(T, null, A, "unmounted");
    }, le);
  }, ae = (T) => {
    const { type: A, el: le, anchor: Ee, transition: we } = T;
    if (A === V) {
      Pe(le, Ee);
      return;
    }
    if (A === Ba) {
      P(T);
      return;
    }
    const Se = () => {
      l(le), we && !we.persisted && we.afterLeave && we.afterLeave();
    };
    if (T.shapeFlag & 1 && we && !we.persisted) {
      const { leave: X, delayLeave: j } = we, pe = () => X(le, Se);
      j ? j(T.el, Se, pe) : pe();
    } else
      Se();
  }, Pe = (T, A) => {
    let le;
    for (; T !== A; )
      le = w(T), l(T), T = le;
    l(A);
  }, ge = (T, A, le) => {
    const { bum: Ee, scope: we, job: Se, subTree: X, um: j, m: pe, a: be } = T;
    ii(pe), ii(be), Ee && Bo(Ee), we.stop(), Se && (Se.flags |= 8, Q(X, T, A, le)), j && as(j, A), as(() => {
      T.isUnmounted = !0;
    }, A);
  }, ze = (T, A, le, Ee = !1, we = !1, Se = 0) => {
    for (let X = Se; X < T.length; X++)
      Q(T[X], A, le, Ee, we);
  }, Ne = (T) => {
    if (T.shapeFlag & 6)
      return Ne(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const A = w(T.anchor || T.el), le = A && A[_r];
    return le ? w(le) : A;
  };
  let _e = !1;
  const De = (T, A, le) => {
    T == null ? A._vnode && Q(A._vnode, null, null, !0) : $(
      A._vnode || null,
      T,
      A,
      null,
      null,
      null,
      le
    ), A._vnode = T, _e || (_e = !0, ql(), hr(), _e = !1);
  }, he = {
    p: $,
    um: Q,
    m: q,
    r: ae,
    mt: K,
    mc: D,
    pc: te,
    pbc: ce,
    n: Ne,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: od(De)
  };
}
function Va({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function mn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Cd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function El(e, t, n = !1) {
  const a = e.children, l = t.children;
  if (st(a) && st(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = on(l[r]), u.el = c.el), !n && u.patchFlag !== -2 && El(c, u)), u.type === wa && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Yt && !u.el && (u.el = c.el);
    }
}
function xd(e) {
  const t = e.slice(), n = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = n[n.length - 1], e[l] < f) {
        t[a] = l, n.push(a);
        continue;
      }
      for (r = 0, c = n.length - 1; r < c; )
        u = r + c >> 1, e[n[u]] < f ? r = u + 1 : c = u;
      f < e[n[r]] && (r > 0 && (t[a] = n[r - 1]), n[r] = a);
    }
  }
  for (r = n.length, c = n[r - 1]; r-- > 0; )
    n[r] = c, c = t[c];
  return n;
}
function Kr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Kr(t);
}
function ii(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Jr = (e) => e.__isSuspense;
function Sd(e, t) {
  t && t.pendingBranch ? st(e) ? t.effects.push(...e) : t.effects.push(e) : Uu(e);
}
const V = Symbol.for("v-fgt"), wa = Symbol.for("v-txt"), Yt = Symbol.for("v-cmt"), Ba = Symbol.for("v-stc"), po = [];
let gs = null;
function o(e = !1) {
  po.push(gs = e ? null : []);
}
function Id() {
  po.pop(), gs = po[po.length - 1] || null;
}
let $o = 1;
function na(e, t = !1) {
  $o += e, e < 0 && gs && t && (gs.hasOnce = !0);
}
function Qr(e) {
  return e.dynamicChildren = $o > 0 ? gs || Rn : null, Id(), $o > 0 && gs && gs.push(e), e;
}
function i(e, t, n, a, l, r) {
  return Qr(
    s(
      e,
      t,
      n,
      a,
      l,
      r,
      !0
    )
  );
}
function R(e, t, n, a, l) {
  return Qr(
    b(
      e,
      t,
      n,
      a,
      l,
      !0
    )
  );
}
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Yr = ({ key: e }) => e ?? null, jo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Rt(e) || Zt(e) || lt(e) ? { i: Gt, r: e, k: t, f: !!n } : e : null);
function s(e, t = null, n = null, a = 0, l = null, r = e === V ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yr(t),
    ref: t && jo(t),
    scopeId: wr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Gt
  };
  return u ? (Tl(d, n), r & 128 && e.normalize(d)) : n && (d.shapeFlag |= Rt(n) ? 8 : 16), $o > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  gs && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && gs.push(d), d;
}
const b = Ed;
function Ed(e, t = null, n = null, a = 0, l = null, r = !1) {
  if ((!e || e === Rr) && (e = Yt), Co(e)) {
    const u = ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Tl(u, n), $o > 0 && !r && gs && (u.shapeFlag & 6 ? gs[gs.indexOf(e)] = u : gs.push(u)), u.patchFlag = -2, u;
  }
  if (zd(e) && (e = e.__vccOpts), t) {
    t = Td(t);
    let { class: u, style: d } = t;
    u && !Rt(u) && (t.class = Fe(u)), Ct(d) && (bl(d) && !st(d) && (d = zt({}, d)), t.style = Ft(d));
  }
  const c = Rt(e) ? 1 : Jr(e) ? 128 : kr(e) ? 64 : Ct(e) ? 4 : lt(e) ? 2 : 0;
  return s(
    e,
    t,
    n,
    a,
    l,
    c,
    r,
    !0
  );
}
function Td(e) {
  return e ? bl(e) || Br(e) ? zt({}, e) : e : null;
}
function ln(e, t, n = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, f = t ? Md(l || {}, t) : l, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Yr(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? st(r) ? r.concat(jo(t)) : [r, jo(t)] : jo(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== V ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ln(e.ssContent),
    ssFallback: e.ssFallback && ln(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && a && kn(
    p,
    d.clone(p)
  ), p;
}
function x(e = " ", t = 0) {
  return b(wa, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (o(), R(Yt, null, e)) : b(Yt, null, e);
}
function As(e) {
  return e == null || typeof e == "boolean" ? b(Yt) : st(e) ? b(
    V,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Co(e) ? on(e) : b(wa, null, String(e));
}
function on(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ln(e);
}
function Tl(e, t) {
  let n = 0;
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (st(t))
    n = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Tl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      n = 32;
      const l = t._;
      !l && !Br(t) ? t._ctx = Gt : l === 3 && Gt && (Gt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else lt(t) ? (t = { default: t, _ctx: Gt }, n = 32) : (t = String(t), a & 64 ? (n = 16, t = [x(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Fe([t.class, a.class]));
      else if (l === "style")
        t.style = Ft([t.style, a.style]);
      else if (ca(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(st(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function Rs(e, t, n, a = null) {
  Ts(e, t, 7, [
    n,
    a
  ]);
}
const Pd = Ur();
let Rd = 0;
function Dd(e, t, n) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || Pd, r = {
    uid: Rd++,
    vnode: e,
    type: a,
    parent: t,
    appContext: l,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new au(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(l.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Gr(a, l),
    emitsOptions: zr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: St,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: St,
    data: St,
    props: St,
    attrs: St,
    slots: St,
    refs: St,
    setupState: St,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ud.bind(null, r), e.ce && e.ce(r), r;
}
let Xt = null;
const Ml = () => Xt || Gt;
let oa, nl;
{
  const e = fa(), t = (n, a) => {
    let l;
    return (l = e[n]) || (l = e[n] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  oa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Xt = n
  ), nl = t(
    "__VUE_SSR_SETTERS__",
    (n) => xo = n
  );
}
const Mo = (e) => {
  const t = Xt;
  return oa(e), e.scope.on(), () => {
    e.scope.off(), oa(t);
  };
}, ri = () => {
  Xt && Xt.scope.off(), oa(null);
};
function Xr(e) {
  return e.vnode.shapeFlag & 4;
}
let xo = !1;
function Nd(e, t = !1, n = !1) {
  t && nl(t);
  const { props: a, children: l } = e.vnode, r = Xr(e);
  gd(e, a, r, t), _d(e, l, n || t);
  const c = r ? Ld(e, t) : void 0;
  return t && nl(!1), c;
}
function Ld(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yu);
  const { setup: a } = n;
  if (a) {
    Qs();
    const l = e.setupContext = a.length > 1 ? Od(e) : null, r = Mo(e), c = Eo(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = qi(c);
    if (Ys(), r(), (u || e.sp) && !Ln(e) && Tr(e), u) {
      if (c.then(ri, ri), t)
        return c.then((d) => {
          ci(e, d);
        }).catch((d) => {
          pa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ci(e, c);
  } else
    Zr(e);
}
function ci(e, t, n) {
  lt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ct(t) && (e.setupState = vr(t)), Zr(e);
}
function Zr(e, t, n) {
  const a = e.type;
  e.render || (e.render = a.render || Fs);
  {
    const l = Mo(e);
    Qs();
    try {
      Xu(e);
    } finally {
      Ys(), l();
    }
  }
}
const Ud = {
  get(e, t) {
    return Jt(e, "get", ""), e[t];
  }
};
function Od(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ud),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function _a(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vr(Su(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vo)
        return vo[n](e);
    },
    has(t, n) {
      return n in t || n in vo;
    }
  })) : e.proxy;
}
function Ad(e, t = !0) {
  return lt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zd(e) {
  return lt(e) && "__vccOpts" in e;
}
const M = (e, t) => Pu(e, t, xo);
function jn(e, t, n) {
  try {
    na(-1);
    const a = arguments.length;
    return a === 2 ? Ct(t) && !st(t) ? Co(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? n = Array.prototype.slice.call(arguments, 2) : a === 3 && Co(n) && (n = [n]), b(e, t, n));
  } finally {
    na(1);
  }
}
const Fd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ol;
const ui = typeof window < "u" && window.trustedTypes;
if (ui)
  try {
    ol = /* @__PURE__ */ ui.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ec = ol ? (e) => ol.createHTML(e) : (e) => e, Vd = "http://www.w3.org/2000/svg", Bd = "http://www.w3.org/1998/Math/MathML", Gs = typeof document < "u" ? document : null, di = Gs && /* @__PURE__ */ Gs.createElement("template"), Wd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, a) => {
    const l = t === "svg" ? Gs.createElementNS(Vd, e) : t === "mathml" ? Gs.createElementNS(Bd, e) : n ? Gs.createElement(e, { is: n }) : Gs.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Gs.createTextNode(e),
  createComment: (e) => Gs.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Gs.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, a, l, r) {
    const c = n ? n.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), n), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      di.innerHTML = ec(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = di.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, en = "transition", Yn = "animation", Vn = Symbol("_vtc"), tc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, sc = /* @__PURE__ */ zt(
  {},
  xr,
  tc
), Gd = (e) => (e.displayName = "Transition", e.props = sc, e), jd = /* @__PURE__ */ Gd(
  (e, { slots: t }) => jn(zu, nc(e), t)
), fn = (e, t = []) => {
  st(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mi = (e) => e ? st(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function nc(e) {
  const t = {};
  for (const J in e)
    J in tc || (t[J] = e[J]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: c = `${n}-enter-active`,
    enterToClass: u = `${n}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: f = c,
    appearToClass: p = u,
    leaveFromClass: v = `${n}-leave-from`,
    leaveActiveClass: w = `${n}-leave-active`,
    leaveToClass: g = `${n}-leave-to`
  } = e, k = Hd(l), $ = k && k[0], S = k && k[1], {
    onBeforeEnter: C,
    onEnter: I,
    onEnterCancelled: E,
    onLeave: P,
    onLeaveCancelled: O,
    onBeforeAppear: U = C,
    onAppear: F = I,
    onAppearCancelled: D = E
  } = t, W = (J, ve, K, L) => {
    J._enterCancelled = L, tn(J, ve ? p : u), tn(J, ve ? f : c), K && K();
  }, ce = (J, ve) => {
    J._isLeaving = !1, tn(J, v), tn(J, g), tn(J, w), ve && ve();
  }, de = (J) => (ve, K) => {
    const L = J ? F : I, G = () => W(ve, J, K);
    fn(L, [ve, G]), fi(() => {
      tn(ve, J ? d : r), Ns(ve, J ? p : u), mi(L) || vi(ve, a, $, G);
    });
  };
  return zt(t, {
    onBeforeEnter(J) {
      fn(C, [J]), Ns(J, r), Ns(J, c);
    },
    onBeforeAppear(J) {
      fn(U, [J]), Ns(J, d), Ns(J, f);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(J, ve) {
      J._isLeaving = !0;
      const K = () => ce(J, ve);
      Ns(J, v), J._enterCancelled ? (Ns(J, w), al(J)) : (al(J), Ns(J, w)), fi(() => {
        J._isLeaving && (tn(J, v), Ns(J, g), mi(P) || vi(J, a, S, K));
      }), fn(P, [J, K]);
    },
    onEnterCancelled(J) {
      W(J, !1, void 0, !0), fn(E, [J]);
    },
    onAppearCancelled(J) {
      W(J, !0, void 0, !0), fn(D, [J]);
    },
    onLeaveCancelled(J) {
      ce(J), fn(O, [J]);
    }
  });
}
function Hd(e) {
  if (e == null)
    return null;
  if (Ct(e))
    return [Wa(e.enter), Wa(e.leave)];
  {
    const t = Wa(e);
    return [t, t];
  }
}
function Wa(e) {
  return Yc(e);
}
function Ns(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Vn] || (e[Vn] = /* @__PURE__ */ new Set())).add(t);
}
function tn(e, t) {
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const n = e[Vn];
  n && (n.delete(t), n.size || (e[Vn] = void 0));
}
function fi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let qd = 0;
function vi(e, t, n, a) {
  const l = e._endId = ++qd, r = () => {
    l === e._endId && a();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: c, timeout: u, propCount: d } = oc(e, t);
  if (!c)
    return a();
  const f = c + "end";
  let p = 0;
  const v = () => {
    e.removeEventListener(f, w), r();
  }, w = (g) => {
    g.target === e && ++p >= d && v();
  };
  setTimeout(() => {
    p < d && v();
  }, u + 1), e.addEventListener(f, w);
}
function oc(e, t) {
  const n = window.getComputedStyle(e), a = (k) => (n[k] || "").split(", "), l = a(`${en}Delay`), r = a(`${en}Duration`), c = pi(l, r), u = a(`${Yn}Delay`), d = a(`${Yn}Duration`), f = pi(u, d);
  let p = null, v = 0, w = 0;
  t === en ? c > 0 && (p = en, v = c, w = r.length) : t === Yn ? f > 0 && (p = Yn, v = f, w = d.length) : (v = Math.max(c, f), p = v > 0 ? c > f ? en : Yn : null, w = p ? p === en ? r.length : d.length : 0);
  const g = p === en && /\b(?:transform|all)(?:,|$)/.test(
    a(`${en}Property`).toString()
  );
  return {
    type: p,
    timeout: v,
    propCount: w,
    hasTransform: g
  };
}
function pi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, a) => gi(n) + gi(e[a])));
}
function gi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function al(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Kd(e, t, n) {
  const a = e[Vn];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const hi = Symbol("_vod"), Jd = Symbol("_vsh"), Qd = Symbol(""), Yd = /(?:^|;)\s*display\s*:/;
function Xd(e, t, n) {
  const a = e.style, l = Rt(n);
  let r = !1;
  if (n && !l) {
    if (t)
      if (Rt(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Ho(a, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Ho(a, c, "");
    for (const c in n)
      c === "display" && (r = !0), Ho(a, c, n[c]);
  } else if (l) {
    if (t !== n) {
      const c = a[Qd];
      c && (n += ";" + c), a.cssText = n, r = Yd.test(n);
    }
  } else t && e.removeAttribute("style");
  hi in e && (e[hi] = r ? a.display : "", e[Jd] && (a.display = "none"));
}
const yi = /\s*!important$/;
function Ho(e, t, n) {
  if (st(n))
    n.forEach((a) => Ho(e, t, a));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const a = Zd(e, t);
    yi.test(n) ? e.setProperty(
      cn(a),
      n.replace(yi, ""),
      "important"
    ) : e[a] = n;
  }
}
const wi = ["Webkit", "Moz", "ms"], Ga = {};
function Zd(e, t) {
  const n = Ga[t];
  if (n)
    return n;
  let a = $s(t);
  if (a !== "filter" && a in e)
    return Ga[t] = a;
  a = da(a);
  for (let l = 0; l < wi.length; l++) {
    const r = wi[l] + a;
    if (r in e)
      return Ga[t] = r;
  }
  return t;
}
const _i = "http://www.w3.org/1999/xlink";
function ki(e, t, n, a, l, r = nu(t)) {
  a && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_i, t.slice(6, t.length)) : e.setAttributeNS(_i, t, n) : n == null || r && !Yi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Is(n) ? String(n) : n
  );
}
function bi(e, t, n, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ec(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Yi(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ks(e, t, n, a) {
  e.addEventListener(t, n, a);
}
function em(e, t, n, a) {
  e.removeEventListener(t, n, a);
}
const $i = Symbol("_vei");
function tm(e, t, n, a, l = null) {
  const r = e[$i] || (e[$i] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = sm(t);
    if (a) {
      const f = r[t] = am(
        a,
        l
      );
      Ks(e, u, f, d);
    } else c && (em(e, u, c, d), r[t] = void 0);
  }
}
const Ci = /(?:Once|Passive|Capture)$/;
function sm(e) {
  let t;
  if (Ci.test(e)) {
    t = {};
    let a;
    for (; a = e.match(Ci); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let ja = 0;
const nm = /* @__PURE__ */ Promise.resolve(), om = () => ja || (nm.then(() => ja = 0), ja = Date.now());
function am(e, t) {
  const n = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= n.attached)
      return;
    Ts(
      lm(a, n.value),
      t,
      5,
      [a]
    );
  };
  return n.value = e, n.attached = om(), n;
}
function lm(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const xi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, im = (e, t, n, a, l, r) => {
  const c = l === "svg";
  t === "class" ? Kd(e, a, c) : t === "style" ? Xd(e, n, a) : ca(t) ? ml(t) || tm(e, t, n, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rm(e, t, a, c)) ? (bi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ki(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Rt(a)) ? bi(e, $s(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), ki(e, t, a, c));
};
function rm(e, t, n, a) {
  if (a)
    return !!(t === "innerHTML" || t === "textContent" || t in e && xi(t) && lt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return xi(t) && Rt(n) ? !1 : t in e;
}
const ac = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), aa = Symbol("_moveCb"), Si = Symbol("_enterCb"), cm = (e) => (delete e.props.mode, e), um = /* @__PURE__ */ cm({
  name: "TransitionGroup",
  props: /* @__PURE__ */ zt({}, sc, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = Ml(), a = Cr();
    let l, r;
    return Pr(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!pm(
        l[0].el,
        n.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(mm), l.forEach(fm);
      const u = l.filter(vm);
      al(n.vnode.el), u.forEach((d) => {
        const f = d.el, p = f.style;
        Ns(f, c), p.transform = p.webkitTransform = p.transitionDuration = "";
        const v = f[aa] = (w) => {
          w && w.target !== f || (!w || w.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", v), f[aa] = null, tn(f, c));
        };
        f.addEventListener("transitionend", v);
      }), l = [];
    }), () => {
      const c = ht(e), u = nc(c);
      let d = c.tag || V;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const p = r[f];
          p.el && p.el instanceof Element && (l.push(p), kn(
            p,
            bo(
              p,
              u,
              a,
              n
            )
          ), ac.set(p, {
            left: p.el.offsetLeft,
            top: p.el.offsetTop
          }));
        }
      r = t.default ? Cl(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const p = r[f];
        p.key != null && kn(
          p,
          bo(p, u, a, n)
        );
      }
      return b(d, null, r);
    };
  }
}), dm = um;
function mm(e) {
  const t = e.el;
  t[aa] && t[aa](), t[Si] && t[Si]();
}
function fm(e) {
  lc.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function vm(e) {
  const t = ac.get(e), n = lc.get(e), a = t.left - n.left, l = t.top - n.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function pm(e, t, n) {
  const a = e.cloneNode(), l = e[Vn];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), n.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = oc(a);
  return r.removeChild(a), c;
}
const rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return st(t) ? (n) => Bo(t, n) : t;
};
function gm(e) {
  e.target.composing = !0;
}
function Ii(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const bs = Symbol("_assign");
function Ei(e, t, n) {
  return t && (e = e.trim()), n && (e = ma(e)), e;
}
const go = {
  created(e, { modifiers: { lazy: t, trim: n, number: a } }, l) {
    e[bs] = rn(l);
    const r = a || l.props && l.props.type === "number";
    Ks(e, t ? "change" : "input", (c) => {
      c.target.composing || e[bs](Ei(e.value, n, r));
    }), (n || r) && Ks(e, "change", () => {
      e.value = Ei(e.value, n, r);
    }), t || (Ks(e, "compositionstart", gm), Ks(e, "compositionend", Ii), Ks(e, "change", Ii));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[bs] = rn(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ma(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === n || l && e.value.trim() === d) || (e.value = d));
  }
}, la = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[bs] = rn(n), Ks(e, "change", () => {
      const a = e._modelValue, l = Bn(e), r = e.checked, c = e[bs];
      if (st(a)) {
        const u = pl(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Wn(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(ic(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ti,
  beforeUpdate(e, t, n) {
    e[bs] = rn(n), Ti(e, t, n);
  }
};
function Ti(e, { value: t, oldValue: n }, a) {
  e._modelValue = t;
  let l;
  if (st(t))
    l = pl(t, a.props.value) > -1;
  else if (Wn(t))
    l = t.has(a.props.value);
  else {
    if (t === n) return;
    l = _n(t, ic(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const qo = {
  created(e, { value: t }, n) {
    e.checked = _n(t, n.props.value), e[bs] = rn(n), Ks(e, "change", () => {
      e[bs](Bn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, a) {
    e[bs] = rn(a), t !== n && (e.checked = _n(t, a.props.value));
  }
}, On = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, a) {
    const l = Wn(t);
    Ks(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? ma(Bn(c)) : Bn(c)
      );
      e[bs](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Wt(() => {
        e._assigning = !1;
      });
    }), e[bs] = rn(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Mi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[bs] = rn(n);
  },
  updated(e, { value: t }) {
    e._assigning || Mi(e, t);
  }
};
function Mi(e, t) {
  const n = e.multiple, a = st(t);
  if (!(n && !a && !Wn(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Bn(c);
      if (n)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((f) => String(f) === String(u)) : c.selected = pl(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (_n(Bn(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Bn(e) {
  return "_value" in e ? e._value : e.value;
}
function ic(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const hm = ["ctrl", "shift", "alt", "meta"], ym = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => hm.some((n) => e[`${n}Key`] && !t.includes(n))
}, bt = (e, t) => {
  const n = e._withMods || (e._withMods = {}), a = t.join(".");
  return n[a] || (n[a] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = ym[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, wm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ss = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return n[a] || (n[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = cn(l.key);
    if (t.some(
      (c) => c === r || wm[c] === r
    ))
      return e(l);
  }));
}, _m = /* @__PURE__ */ zt({ patchProp: im }, Wd);
let Pi;
function km() {
  return Pi || (Pi = bd(_m));
}
const Po = ((...e) => {
  const t = km().createApp(...e), { mount: n } = t;
  return t.mount = (a) => {
    const l = $m(a);
    if (!l) return;
    const r = t._component;
    !lt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = n(l, !1, bm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function bm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function $m(e) {
  return Rt(e) ? document.querySelector(e) : e;
}
const PD = $n({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const RD = [
  // BROKEN workflows (4) - Missing dependencies or category mismatch
  {
    name: "flux-dev-img2img.json",
    status: "broken",
    missing_nodes: 2,
    missing_models: 1,
    node_count: 12,
    model_count: 3,
    sync_state: "synced"
    // Git status vs dependency status
  },
  // Category mismatch example - model exists but in wrong directory
  {
    name: "lora-wrong-dir.json",
    status: "broken",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 8,
    model_count: 2,
    sync_state: "synced",
    has_category_mismatch_issues: !0,
    models_with_category_mismatch: 1
  },
  {
    name: "sdxl-lightning.json",
    status: "broken",
    missing_nodes: 1,
    missing_models: 2,
    node_count: 8,
    model_count: 2,
    sync_state: "synced"
  },
  {
    name: "sd15-upscale.json",
    status: "broken",
    missing_nodes: 3,
    missing_models: 0,
    node_count: 15,
    model_count: 4,
    sync_state: "modified"
    // Modified AND broken
  },
  // NEW workflows (2) - Untracked
  {
    name: "img2img-basic.json",
    status: "new",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 6,
    model_count: 1,
    sync_state: "new"
  },
  {
    name: "controlnet-pose.json",
    status: "new",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 10,
    model_count: 2,
    sync_state: "new"
  },
  // MODIFIED workflows (1) - Changed since last commit
  {
    name: "flux-schnell.json",
    status: "modified",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 9,
    model_count: 2,
    sync_state: "modified"
  },
  // SYNCED workflows (12) - All good
  ...Array(12).fill(null).map((e, t) => ({
    name: `synced-workflow-${t + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + t,
    model_count: 1 + t % 3,
    sync_state: "synced"
  }))
], DD = {
  "flux-dev-img2img.json": {
    name: "flux-dev-img2img.json",
    status: "broken",
    // Nodes based on NodeInfo structure (lines 1833-1858)
    nodes: [
      {
        name: "comfyui_flux",
        installed: !0,
        registry_id: "comfyui_flux",
        repository: "https://github.com/black-forest-labs/flux",
        version: "1.2.0",
        source: "registry",
        download_url: null
      },
      {
        name: "rgthree-comfy",
        installed: !1,
        registry_id: "rgthree-comfy",
        repository: "https://github.com/rgthree/rgthree-comfy",
        version: null,
        // Not installed
        source: "registry",
        download_url: "https://github.com/rgthree/rgthree-comfy/archive/refs/heads/main.zip"
      },
      {
        name: "comfyui-image-saver",
        installed: !1,
        registry_id: "comfyui-image-saver",
        repository: "https://github.com/girish946/ComfyUI-Image-Saver",
        version: null,
        source: "registry",
        download_url: "https://github.com/girish946/ComfyUI-Image-Saver/archive/refs/heads/main.zip"
      }
    ],
    // Models based on ResolvedModel structure (lines 1805-1827)
    models: [
      {
        filename: "flux1-dev-fp8.safetensors",
        hash: "a11e2e7b",
        // CRC32 hash (Core Library uses CRC32)
        sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 11725,
        file_size: 12298780672,
        // bytes
        node_type: "Load Checkpoint",
        node_id: "4",
        relative_path: "checkpoints/flux1-dev-fp8.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 7,
        // 7 days ago
        metadata: {
          model_type: "checkpoint",
          base_model: "FLUX.1-dev",
          format: "fp8"
        }
      },
      {
        filename: "flux_vae.safetensors",
        hash: "d21a4f89",
        // CRC32
        sha256_hash: "d21a4f89d0c1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "missing",
        importance: "required",
        size_mb: 335,
        file_size: 351272960,
        // bytes
        node_type: "VAELoader",
        node_id: "10",
        relative_path: "vae/flux_vae.safetensors",
        category: "vae",
        mtime: null,
        // Not present
        metadata: {}
      },
      {
        filename: "clip_l.safetensors",
        hash: "3e9f12a7",
        // CRC32
        sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1",
        blake3_hash: null,
        status: "available",
        importance: "flexible",
        size_mb: 246,
        file_size: 257949696,
        // bytes
        node_type: "DualCLIPLoader",
        node_id: "11",
        relative_path: "clip/clip_l.safetensors",
        category: "clip",
        mtime: Date.now() / 1e3 - 86400 * 14,
        // 14 days ago
        metadata: {
          model_type: "clip",
          clip_type: "clip_l"
        }
      }
    ]
  },
  // Category mismatch example - LoRA in wrong directory
  "lora-wrong-dir.json": {
    name: "lora-wrong-dir.json",
    status: "broken",
    nodes: [
      {
        name: "comfyui-core",
        installed: !0,
        registry_id: "comfyui-core",
        repository: null,
        version: "0.3.0",
        source: "builtin",
        download_url: null
      }
    ],
    models: [
      {
        filename: "my_character_lora.safetensors",
        hash: "f8c9e2d1",
        // CRC32
        sha256_hash: "f8c9e2d1a0b1c2d3e4f5678901234567890abcdef1234567890abcdef12345678",
        blake3_hash: null,
        status: "category_mismatch",
        // Wrong directory!
        importance: "required",
        size_mb: 185,
        file_size: 194e6,
        node_type: "LoraLoader",
        node_id: "7",
        relative_path: "checkpoints/my_character_lora.safetensors",
        // Wrong! Should be loras/
        category: "checkpoints",
        // Wrong category
        mtime: Date.now() / 1e3 - 86400 * 3,
        metadata: {
          model_type: "lora",
          base_model: "SDXL"
        },
        // Category mismatch details
        has_category_mismatch: !0,
        expected_categories: ["loras"],
        actual_category: "checkpoints"
      },
      {
        filename: "sdxl_base_1.0.safetensors",
        hash: "b22f3f8c",
        sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
        blake3_hash: null,
        status: "available",
        importance: "required",
        size_mb: 6938,
        file_size: 7275159552,
        node_type: "CheckpointLoader",
        node_id: "4",
        relative_path: "checkpoints/sdxl_base_1.0.safetensors",
        category: "checkpoints",
        mtime: Date.now() / 1e3 - 86400 * 30,
        metadata: {
          model_type: "checkpoint",
          base_model: "SDXL"
        },
        has_category_mismatch: !1,
        expected_categories: ["checkpoints"],
        actual_category: "checkpoints"
      }
    ]
  }
}, Cm = [
  {
    filename: "flux1-dev-fp8.safetensors",
    hash: "a11e2e7b",
    // CRC32 hash (8 chars)
    sha256_hash: "a11e2e7b89c4d5e6f7890abcdef12345678901234567890abcdef1234567890ab",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 11725,
    file_size: 12298780672,
    // bytes
    relative_path: "checkpoints/flux1-dev-fp8.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 7,
    // 7 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    // Unix timestamp
    base_directory: "/workspace/models",
    used_by: ["flux-dev-img2img.json", "flux-schnell.json"],
    sources: ["https://civitai.com/api/download/models/flux1-dev"],
    metadata: {
      model_type: "checkpoint",
      base_model: "FLUX.1-dev",
      format: "fp8"
    }
  },
  {
    filename: "sd_xl_base_1.0.safetensors",
    hash: "b22f3f8c",
    // CRC32
    sha256_hash: "b22f3f8c90d1e2f3456789abcdef01234567890abcdef1234567890abcdef012",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 6938,
    file_size: 7275159552,
    // bytes
    relative_path: "checkpoints/sd_xl_base_1.0.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 30,
    // 30 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: ["sdxl-lightning.json"],
    sources: ["https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/resolve/main/sd_xl_base_1.0.safetensors"],
    metadata: {
      model_type: "checkpoint",
      base_model: "SDXL",
      version: "1.0"
    }
  },
  {
    filename: "clip_l.safetensors",
    hash: "3e9f12a7",
    // CRC32
    sha256_hash: "3e9f12a7c8d9e0f1234567890abcdef1234567890abcdef1234567890abcdef1",
    blake3_hash: null,
    type: "clip",
    category: "clip",
    size_mb: 246,
    file_size: 257949696,
    // bytes
    relative_path: "clip/clip_l.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 14,
    // 14 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: ["flux-dev-img2img.json", "flux-schnell.json"],
    sources: [],
    // No source URL configured
    metadata: {
      model_type: "clip",
      clip_type: "clip_l"
    }
  }
], ND = [
  ...Cm,
  {
    filename: "v1-5-pruned.ckpt",
    hash: "c33g4g9d",
    // CRC32
    sha256_hash: "c33g4g9d91e2f3456789abcdef01234567890abcdef1234567890abcdef01234",
    blake3_hash: null,
    type: "checkpoints",
    category: "checkpoints",
    size_mb: 4265,
    file_size: 4472033280,
    // bytes
    relative_path: "checkpoints/v1-5-pruned.ckpt",
    mtime: Date.now() / 1e3 - 86400 * 60,
    // 60 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: [],
    // Unused model
    sources: ["https://huggingface.co/runwayml/stable-diffusion-v1-5/resolve/main/v1-5-pruned.ckpt"],
    metadata: {
      model_type: "checkpoint",
      base_model: "SD1.5",
      version: "1.5"
    }
  },
  {
    filename: "controlnet_openpose.safetensors",
    hash: "d44h5h0e",
    // CRC32
    sha256_hash: "d44h5h0e02f3456789abcdef01234567890abcdef1234567890abcdef01234567",
    blake3_hash: null,
    type: "controlnet",
    category: "controlnet",
    size_mb: 1450,
    file_size: 1520435200,
    // bytes
    relative_path: "controlnet/controlnet_openpose.safetensors",
    mtime: Date.now() / 1e3 - 86400 * 45,
    // 45 days ago
    last_seen: Math.floor(Date.now() / 1e3),
    base_directory: "/workspace/models",
    used_by: [],
    // Unused model
    sources: ["https://huggingface.co/lllyasviel/ControlNet/resolve/main/models/control_openpose-fp16.safetensors"],
    metadata: {
      model_type: "controlnet",
      controlnet_type: "openpose"
    }
  }
];
function Xn() {
  return !1;
}
function xm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Hn() {
  var n, a, l;
  const e = window, t = [
    (n = e.app) == null ? void 0 : n.api,
    (l = (a = e.comfyAPI) == null ? void 0 : a.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (xm(r))
      return r;
  return null;
}
async function Js(e, t) {
  const n = Hn();
  if (!n)
    throw new Error("ComfyUI API not available");
  return n.fetchApi(e, t);
}
function Sm(e = "comfygit-panel") {
  const t = Hn();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class ll extends Error {
  constructor(n, a, l, r) {
    super(n);
    No(this, "status");
    No(this, "data");
    No(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Im() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ft() {
  const e = _(!1), t = _(null);
  async function n(z, xe) {
    const Ge = await Js(z, xe), _t = await Ge.text();
    if (!Ge.ok) {
      let Ot = {};
      if (_t)
        try {
          const tt = JSON.parse(_t);
          tt && typeof tt == "object" && (Ot = tt);
        } catch {
          Ot = { error: _t };
        }
      const Ps = Ot.error || Ot.message || Ot.detail || Ge.statusText || `Request failed: ${Ge.status}`;
      throw new ll(String(Ps), Ge.status, Ot, z);
    }
    if (_t)
      return JSON.parse(_t);
  }
  async function a(z) {
    return n(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(z)}`);
  }
  async function l(z, xe, Ge) {
    return n("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: xe, password: Ge })
    });
  }
  async function r(z, xe, Ge) {
    return n("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, email: xe, password: Ge })
    });
  }
  async function c(z, xe) {
    return n(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function u(z, xe) {
    return n("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: z, refresh_token: xe || null })
    });
  }
  async function d(z, xe) {
    return n(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(z)}`, {
      headers: { Authorization: `Bearer ${xe}` }
    });
  }
  async function f(z, xe, Ge) {
    return n(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(xe)}/revisions?cloud_url=${encodeURIComponent(z)}`,
      {
        headers: { Authorization: `Bearer ${Ge}` }
      }
    );
  }
  async function p(z, xe, Ge, _t) {
    return n("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${xe}`
      },
      body: JSON.stringify({
        cloud_url: z,
        source_message: Ge || null,
        cloud_environment_id: _t || null
      })
    });
  }
  async function v(z = !1) {
    return n(z ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(z, xe = !1) {
    return n("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: z, allow_issues: xe })
    });
  }
  async function g(z = 10, xe = 0) {
    return n(`/v2/comfygit/log?limit=${z}&offset=${xe}`);
  }
  async function k(z, xe = 50) {
    return n(`/v2/comfygit/log?branch=${encodeURIComponent(z)}&limit=${xe}`);
  }
  async function $(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function S() {
    return n("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function C() {
    return n("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(z) {
    return n("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z, force: !0 })
    });
  }
  async function E(z) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function P(z, xe) {
    return n(`/v2/comfygit/environment_export/${encodeURIComponent(z)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: xe, force: !0 })
    });
  }
  async function O() {
    return n("/v2/comfygit/branches");
  }
  async function U(z) {
    return n(`/v2/comfygit/commit/${z}`);
  }
  async function F(z, xe = !1) {
    return n("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: z, force: xe })
    });
  }
  async function D(z, xe = "HEAD") {
    return n("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, start_point: xe })
    });
  }
  async function W(z, xe = !1) {
    return n("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: z, force: xe })
    });
  }
  async function ce() {
    return n("/v2/comfygit/revert-changes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function de(z, xe = !1) {
    return n(`/v2/comfygit/branch/${encodeURIComponent(z)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: xe })
    });
  }
  async function J() {
    try {
      return await n("/v2/comfygit/environments");
    } catch {
      try {
        const z = await v();
        return {
          environments: [{
            name: z.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + z.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: z.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: z.branch
          }],
          current: z.environment,
          is_managed: !0,
          orchestrator_active: !1,
          orchestrator_environment: null,
          is_supervised: !1
        };
      } catch {
        return {
          environments: [],
          current: null,
          is_managed: !1,
          orchestrator_active: !1,
          orchestrator_environment: null,
          is_supervised: !1
        };
      }
    }
  }
  async function ve() {
    return (await J()).environments;
  }
  async function K(z) {
    try {
      return await n(`/v2/comfygit/environments/${encodeURIComponent(z)}`);
    } catch {
      return null;
    }
  }
  async function L(z, xe) {
    const Ge = { target_env: z };
    return xe && (Ge.workspace_path = xe), n("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ge)
    });
  }
  async function G() {
    try {
      return n("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function re(z) {
    return n("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function te() {
    return n("/v2/workspace/environments/create_status");
  }
  async function ue(z = 100) {
    return n(`/v2/workspace/comfyui_releases?limit=${z}`);
  }
  async function me(z) {
    return n(`/v2/workspace/environments/${z}`, {
      method: "DELETE"
    });
  }
  async function q(z = !1) {
    try {
      return n(z ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const xe = await v(z), Ge = [];
      return xe.workflows.new.forEach((_t) => {
        Ge.push({
          name: _t,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), xe.workflows.modified.forEach((_t) => {
        Ge.push({
          name: _t,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), xe.workflows.synced.forEach((_t) => {
        Ge.push({
          name: _t,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: _t
        });
      }), Ge;
    }
  }
  async function Q(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/details`);
  }
  async function ae(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`);
  }
  async function Pe(z, xe) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function ge(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/contract`, {
      method: "DELETE"
    });
  }
  async function ze(z) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/resolve`, {
      method: "POST"
    });
  }
  async function Ne(z, xe, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: xe, install_models: Ge })
    });
  }
  async function _e(z, xe, Ge) {
    return n(`/v2/comfygit/workflow/${encodeURIComponent(z)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: xe, importance: Ge })
    });
  }
  async function De() {
    try {
      return n("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function he() {
    try {
      return n("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function ke(z) {
    return n(`/v2/workspace/models/details/${encodeURIComponent(z)}`);
  }
  async function T(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/source-candidates`);
  }
  async function A(z) {
    return n(`/v2/workspace/models/${encodeURIComponent(z)}/hashes`, {
      method: "POST"
    });
  }
  async function le() {
    return n("/v2/workspace/models/workflow-source-candidates");
  }
  async function Ee(z) {
    return n("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function we(z, xe) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function Se(z, xe) {
    return n(`/v2/workspace/models/${z}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: xe })
    });
  }
  async function X(z) {
    return n(`/v2/workspace/models/${z}`, {
      method: "DELETE"
    });
  }
  async function j(z) {
    return n("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function pe() {
    return n("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function be() {
    return n("/v2/workspace/models/directory");
  }
  async function je(z) {
    return n("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function Ve(z) {
    const xe = new URLSearchParams({ url: z });
    return n(`/v2/workspace/huggingface/repo-info?${xe}`);
  }
  async function Ce() {
    return n("/v2/workspace/models/subdirectories");
  }
  async function ne(z, xe = 10) {
    const Ge = new URLSearchParams({ query: z, limit: String(xe) });
    return n(`/v2/workspace/huggingface/search?${Ge}`);
  }
  async function He(z) {
    try {
      const xe = z ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(z)}` : "/v2/comfygit/config";
      return n(xe);
    } catch {
      return {
        workspace_path: "~/comfygit",
        models_path: "~/comfygit/models",
        auto_sync_models: !0,
        confirm_destructive: !0,
        comfyui_extra_args: []
      };
    }
  }
  async function Te(z, xe) {
    const Ge = xe ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(xe)}` : "/v2/comfygit/config";
    return n(Ge, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Ze(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/comfygit/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ue(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/workspace/debug/logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function Ae() {
    return n("/v2/comfygit/debug/logs/path");
  }
  async function Xe() {
    return n("/v2/comfygit/debug/manifest");
  }
  async function yt() {
    return n("/v2/workspace/debug/logs/path");
  }
  async function Nt(z, xe) {
    try {
      const Ge = new URLSearchParams();
      return z && Ge.append("level", z), xe && Ge.append("lines", xe.toString()), n(`/v2/workspace/debug/orchestrator-logs?${Ge}`);
    } catch {
      return [];
    }
  }
  async function es() {
    return n("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Z(z) {
    return n("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: z })
    });
  }
  async function ee() {
    try {
      return n("/v2/comfygit/nodes");
    } catch {
      return {
        nodes: [],
        total_count: 0,
        installed_count: 0,
        missing_count: 0,
        untracked_count: 0
      };
    }
  }
  async function se(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/track-dev`, {
      method: "POST"
    });
  }
  async function Qe(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/install`, {
      method: "POST"
    });
  }
  async function Be(z, xe) {
    var zl, Fl, Vl, Bl;
    const Ge = Im(), _t = Sm(), Ot = {
      id: z.id,
      version: z.version || z.selected_version || "latest",
      selected_version: z.selected_version || "latest",
      mode: z.mode || "remote",
      channel: z.channel || "default"
    };
    z.install_source && (Ot.install_source = z.install_source), z.install_source === "git" && z.repository && (Ot.repository = z.repository), await n("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Ot,
        ui_id: Ge,
        client_id: _t
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ge, "for package:", z.id), xe != null && xe.beforeQueueStart && await xe.beforeQueueStart(Ge), await n("/v2/manager/queue/start", {
      method: "POST"
    });
    const tt = await n("/v2/manager/queue/history"), ns = (zl = tt == null ? void 0 : tt.history) == null ? void 0 : zl[Ge];
    if ((ns == null ? void 0 : ns.result) === "error" || ((Fl = ns == null ? void 0 : ns.status) == null ? void 0 : Fl.status_str) === "error") {
      const Gc = ((Bl = (Vl = ns.status) == null ? void 0 : Vl.messages) == null ? void 0 : Bl[0]) || `Failed to install ${z.id}`;
      throw new ll(Gc, 500, ns.status || {}, "/v2/manager/queue/start");
    }
    return {
      ui_id: Ge,
      result: ns == null ? void 0 : ns.result,
      status: ns == null ? void 0 : ns.status
    };
  }
  async function at(z) {
    return n("/v2/comfygit/nodes/dependency-preview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function nt(z) {
    return n("/v2/comfygit/nodes/dependency-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function We(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/update`, {
      method: "POST"
    });
  }
  async function ut(z, xe) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: xe })
    });
  }
  async function ts(z) {
    return n(`/v2/comfygit/nodes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function qt() {
    try {
      return n("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function ss(z, xe) {
    return n("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: z, url: xe })
    });
  }
  async function Kt(z) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function H(z, xe, Ge) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: xe, push_url: Ge })
    });
  }
  async function fe(z, xe) {
    const Ge = {};
    return xe && (Ge["X-Git-Auth-Token"] = xe), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/fetch`, {
      method: "POST",
      headers: Ge
    });
  }
  async function Le(z) {
    try {
      return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/status`);
    } catch {
      return null;
    }
  }
  async function $e(z = "skip", xe = !0) {
    return n("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: z,
        remove_extra_nodes: xe
      })
    });
  }
  async function qe(z, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/pull-preview`;
    return n(Ge);
  }
  async function Ye(z, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/pull`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({
        model_strategy: xe.modelStrategy || "skip",
        force: xe.force || !1,
        resolutions: xe.resolutions
      })
    });
  }
  async function ct(z, xe) {
    const Ge = xe ? `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview?branch=${encodeURIComponent(xe)}` : `/v2/comfygit/remotes/${encodeURIComponent(z)}/push-preview`;
    return n(Ge);
  }
  async function vt(z, xe = {}) {
    const Ge = { "Content-Type": "application/json" };
    return xe.authToken && (Ge["X-Git-Auth-Token"] = xe.authToken), n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/push`, {
      method: "POST",
      headers: Ge,
      body: JSON.stringify({ force: xe.force || !1 })
    });
  }
  async function It(z, xe) {
    return n(`/v2/comfygit/remotes/${encodeURIComponent(z)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: xe })
    });
  }
  async function Y(z) {
    const xe = {
      success: 0,
      failed: []
    };
    for (const Ge of z)
      try {
        await ze(Ge), xe.success++;
      } catch (_t) {
        xe.failed.push({
          name: Ge,
          error: _t instanceof Error ? _t.message : "Unknown error"
        });
      }
    return xe;
  }
  async function N(z) {
    const xe = new FormData();
    xe.append("file", z);
    const Ge = await Js("/v2/workspace/import/preview", {
      method: "POST",
      body: xe
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ge.ok) {
      const _t = await Ge.json().catch(() => ({}));
      throw new Error(_t.error || `Preview failed: ${Ge.status}`);
    }
    return Ge.json();
  }
  async function oe(z) {
    return n(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(z)}`
    );
  }
  async function Ke(z, xe, Ge, _t) {
    const Ot = new FormData();
    Ot.append("file", z), Ot.append("name", xe), Ot.append("model_strategy", Ge), Ot.append("torch_backend", _t);
    const Ps = await Js("/v2/workspace/import", {
      method: "POST",
      body: Ot
    });
    if (!Ps.ok) {
      const tt = await Ps.json().catch(() => ({}));
      throw new Error(tt.message || tt.error || `Import failed: ${Ps.status}`);
    }
    return Ps.json();
  }
  async function et() {
    return n("/v2/workspace/import/status");
  }
  async function mt(z) {
    return n("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: z })
    });
  }
  async function Ut(z, xe, Ge, _t) {
    return n("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: z,
        name: xe,
        model_strategy: Ge,
        torch_backend: _t
      })
    });
  }
  async function cs() {
    return n("/v2/setup/status");
  }
  async function us() {
    return n("/v2/comfygit/update-check");
  }
  async function gt() {
    return n("/v2/comfygit/update", { method: "POST" });
  }
  async function ds(z) {
    return n("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Lt() {
    return n("/v2/setup/initialize_status");
  }
  async function un(z) {
    return n("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function hs() {
    return n("/v2/comfygit/deploy/summary");
  }
  async function Cn() {
    return n("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ba(z, xe) {
    return n("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: z, save_key: xe })
    });
  }
  async function $a() {
    return n("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Ro(z) {
    const xe = z ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(z)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return n(xe);
  }
  async function Ca(z) {
    return n("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function xa() {
    return n("/v2/comfygit/deploy/runpod/pods");
  }
  async function Sa(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function Ia(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/stop`, {
      method: "POST"
    });
  }
  async function Ea(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/start`, {
      method: "POST"
    });
  }
  async function Ta(z) {
    return n(`/v2/comfygit/deploy/runpod/${encodeURIComponent(z)}/status`);
  }
  async function Ma(z) {
    return n("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: z })
    });
  }
  async function Pa(z = !1) {
    return n(z ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Do() {
    return n("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ra() {
    return n("/v2/comfygit/deploy/custom/workers");
  }
  async function Da(z) {
    return n("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function Kn(z) {
    return n(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(z)}`, {
      method: "DELETE"
    });
  }
  async function ie(z) {
    return n("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(z)
    });
  }
  async function B() {
    return n("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Je(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/info`);
  }
  async function ot(z) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`);
  }
  async function wt(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(xe)
    });
  }
  async function xt(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}/start`, {
      method: "POST"
    });
  }
  async function Vt(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}/stop`, {
      method: "POST"
    });
  }
  async function ys(z, xe) {
    return n(`/v2/comfygit/deploy/custom/${encodeURIComponent(z)}/instances/${encodeURIComponent(xe)}`, {
      method: "DELETE"
    });
  }
  async function Jn(z) {
    return n("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: z })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: v,
    commit: w,
    getHistory: g,
    getBranchHistory: k,
    exportEnv: $,
    validateExport: S,
    validateDeploy: C,
    exportEnvWithForce: I,
    validateEnvironmentExport: E,
    exportEnvironmentWithForce: P,
    // Git Operations
    getBranches: O,
    getCommitDetail: U,
    checkout: F,
    createBranch: D,
    switchBranch: W,
    revertChanges: ce,
    deleteBranch: de,
    // Environment Management
    listEnvironments: J,
    getEnvironments: ve,
    getEnvironmentDetails: K,
    switchEnvironment: L,
    getSwitchProgress: G,
    createEnvironment: re,
    getCreateProgress: te,
    getComfyUIReleases: ue,
    deleteEnvironment: me,
    // Workflow Management
    getWorkflows: q,
    getWorkflowDetails: Q,
    getWorkflowContract: ae,
    saveWorkflowContract: Pe,
    deleteWorkflowContract: ge,
    resolveWorkflow: ze,
    installWorkflowDeps: Ne,
    setModelImportance: _e,
    // Model Management
    getEnvironmentModels: De,
    getWorkspaceModels: he,
    getModelDetails: ke,
    getModelSourceCandidates: T,
    computeModelHashes: A,
    getWorkflowSourceCandidates: le,
    openFileLocation: Ee,
    addModelSource: we,
    removeModelSource: Se,
    deleteModel: X,
    downloadModel: j,
    scanWorkspaceModels: pe,
    getModelsDirectory: be,
    setModelsDirectory: je,
    getHuggingFaceRepoInfo: Ve,
    getModelsSubdirectories: Ce,
    searchHuggingFaceRepos: ne,
    // Settings
    getConfig: He,
    updateConfig: Te,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: f,
    publishCurrentEnvironmentToCloud: p,
    // Debug/Logs
    getEnvironmentLogs: Ze,
    getEnvironmentManifest: Xe,
    getWorkspaceLogs: Ue,
    getEnvironmentLogPath: Ae,
    getWorkspaceLogPath: yt,
    getOrchestratorLogs: Nt,
    getOrchestratorLogPath: es,
    openFile: Z,
    // Node Management
    getNodes: ee,
    trackNodeAsDev: se,
    installNode: Qe,
    queueNodeInstall: Be,
    previewNodeDependencyChanges: at,
    applyReviewedNodeDependencyChanges: nt,
    updateNode: We,
    updateNodeCriticality: ut,
    uninstallNode: ts,
    // Git Remotes
    getRemotes: qt,
    addRemote: ss,
    removeRemote: Kt,
    updateRemoteUrl: H,
    fetchRemote: fe,
    getRemoteSyncStatus: Le,
    // Push/Pull
    getPullPreview: qe,
    pullFromRemote: Ye,
    getPushPreview: ct,
    pushToRemote: vt,
    validateMerge: It,
    // Environment Sync
    syncEnvironmentManually: $e,
    // Workflow Repair
    repairWorkflowModels: Y,
    // Import Operations
    previewTarballImport: N,
    previewGitImport: mt,
    validateEnvironmentName: oe,
    executeImport: Ke,
    executeGitImport: Ut,
    getImportProgress: et,
    // First-Time Setup
    getSetupStatus: cs,
    // Manager Update Notice
    getUpdateCheck: us,
    updateManager: gt,
    initializeWorkspace: ds,
    getInitializeProgress: Lt,
    validatePath: un,
    // Deploy Operations
    getDeploySummary: hs,
    getDataCenters: Cn,
    testRunPodConnection: ba,
    getNetworkVolumes: $a,
    getRunPodGpuTypes: Ro,
    deployToRunPod: Ca,
    getRunPodPods: xa,
    terminateRunPodPod: Sa,
    stopRunPodPod: Ia,
    startRunPodPod: Ea,
    getDeploymentStatus: Ta,
    exportDeployPackage: Ma,
    getStoredRunPodKey: Pa,
    clearRunPodKey: Do,
    // Custom Worker Operations
    getCustomWorkers: Ra,
    addCustomWorker: Da,
    removeCustomWorker: Kn,
    testWorkerConnection: ie,
    scanForWorkers: B,
    getWorkerSystemInfo: Je,
    getWorkerInstances: ot,
    deployToWorker: wt,
    startWorkerInstance: xt,
    stopWorkerInstance: Vt,
    terminateWorkerInstance: ys,
    // Git Authentication
    testGitAuth: Jn
  };
}
const Em = { class: "panel-layout" }, Tm = {
  key: 0,
  class: "panel-layout-header"
}, Mm = {
  key: 1,
  class: "panel-layout-search"
}, Pm = { class: "panel-layout-content" }, Rm = {
  key: 2,
  class: "panel-layout-footer"
}, Dm = /* @__PURE__ */ Ie({
  __name: "PanelLayout",
  setup(e) {
    return (t, n) => (o(), i("div", Em, [
      t.$slots.header ? (o(), i("div", Tm, [
        rt(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (o(), i("div", Mm, [
        rt(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", Pm, [
        rt(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (o(), i("div", Rm, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, l] of t)
    n[a] = l;
  return n;
}, jt = /* @__PURE__ */ Me(Dm, [["__scopeId", "data-v-21565df9"]]), Nm = {
  key: 0,
  class: "panel-title-prefix"
}, Lm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Um = /* @__PURE__ */ Ie({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, n) => (o(), R(xl(`h${e.level}`), {
      class: Fe(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (o(), i("span", Nm, m(e.prefix), 1)) : (o(), i("span", Lm)),
        rt(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Om = /* @__PURE__ */ Me(Um, [["__scopeId", "data-v-c3875efc"]]), Am = ["title"], zm = ["width", "height"], Fm = /* @__PURE__ */ Ie({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: n[0] || (n[0] = (a) => t.$emit("click"))
    }, [
      (o(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...n[1] || (n[1] = [
        s("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        s("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, zm))
    ], 8, Am));
  }
}), rc = /* @__PURE__ */ Me(Fm, [["__scopeId", "data-v-6fc7f16d"]]), Vm = { class: "header-left" }, Bm = {
  key: 0,
  class: "header-actions"
}, Wm = /* @__PURE__ */ Ie({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Fe(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Vm, [
        b(Om, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            x(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (o(), R(rc, {
          key: 0,
          onClick: n[0] || (n[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (o(), i("div", Bm, [
        rt(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ht = /* @__PURE__ */ Me(Wm, [["__scopeId", "data-v-55a62cd6"]]), Gm = {
  key: 0,
  class: "section-title-count"
}, jm = {
  key: 1,
  class: "section-title-icon"
}, Hm = /* @__PURE__ */ Ie({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), R(xl(`h${e.level}`), {
      class: Fe(["section-title", { clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Gm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (o(), i("span", jm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), _s = /* @__PURE__ */ Me(Hm, [["__scopeId", "data-v-559361eb"]]), qm = { class: "status-grid" }, Km = { class: "status-grid__columns" }, Jm = { class: "status-grid__column" }, Qm = { class: "status-grid__title" }, Ym = { class: "status-grid__column status-grid__column--right" }, Xm = { class: "status-grid__title" }, Zm = {
  key: 0,
  class: "status-grid__footer"
}, ef = /* @__PURE__ */ Ie({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", qm, [
      s("div", Km, [
        s("div", Jm, [
          s("h4", Qm, m(e.leftTitle), 1),
          rt(t.$slots, "left", {}, void 0)
        ]),
        s("div", Ym, [
          s("h4", Xm, m(e.rightTitle), 1),
          rt(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (o(), i("div", Zm, [
        rt(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), tf = /* @__PURE__ */ Me(ef, [["__scopeId", "data-v-73b7ba3f"]]), sf = {
  key: 0,
  class: "status-item__icon"
}, nf = {
  key: 1,
  class: "status-item__count"
}, of = { class: "status-item__label" }, af = /* @__PURE__ */ Ie({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = M(() => `status-item--${t.variant}`);
    return (a, l) => (o(), i("div", {
      class: Fe(["status-item", n.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (o(), i("span", sf, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (o(), i("span", nf, m(e.count), 1)) : y("", !0),
      s("span", of, m(e.label), 1)
    ], 2));
  }
}), Ds = /* @__PURE__ */ Me(af, [["__scopeId", "data-v-6f929183"]]), lf = { class: "issue-card__header" }, rf = { class: "issue-card__icon" }, cf = { class: "issue-card__title" }, uf = {
  key: 0,
  class: "issue-card__content"
}, df = {
  key: 0,
  class: "issue-card__description"
}, mf = {
  key: 1,
  class: "issue-card__items"
}, ff = {
  key: 2,
  class: "issue-card__actions"
}, vf = /* @__PURE__ */ Ie({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, n = M(() => `issue-card--${t.severity}`);
    return (a, l) => (o(), i("div", {
      class: Fe(["issue-card", n.value])
    }, [
      s("div", lf, [
        s("span", rf, m(e.icon), 1),
        s("h4", cf, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (o(), i("div", uf, [
        e.description ? (o(), i("p", df, m(e.description), 1)) : y("", !0),
        rt(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (o(), i("div", mf, [
        (o(!0), i(V, null, ye(e.items, (r, c) => (o(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (o(), i("div", ff, [
        rt(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), vs = /* @__PURE__ */ Me(vf, [["__scopeId", "data-v-df6aa348"]]), pf = ["type", "disabled"], gf = {
  key: 0,
  class: "spinner"
}, hf = /* @__PURE__ */ Ie({
  __name: "ActionButton",
  props: {
    variant: { default: "primary" },
    size: { default: "sm" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Fe(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", gf)) : y("", !0),
      e.loading ? y("", !0) : rt(t.$slots, "default", { key: 1 }, void 0)
    ], 10, pf));
  }
}), Re = /* @__PURE__ */ Me(hf, [["__scopeId", "data-v-772abe47"]]), yf = /* @__PURE__ */ Ie({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Fe(["detail-label"]),
      style: Ft({ minWidth: e.minWidth })
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ko = /* @__PURE__ */ Me(yf, [["__scopeId", "data-v-75e9eeb8"]]), wf = /* @__PURE__ */ Ie({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("span", {
      class: Fe(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), il = /* @__PURE__ */ Me(wf, [["__scopeId", "data-v-2f186e4c"]]), _f = { class: "detail-row" }, kf = /* @__PURE__ */ Ie({
  __name: "DetailRow",
  props: {
    label: {},
    value: {},
    mono: { type: Boolean, default: !1 },
    valueVariant: { default: "default" },
    truncate: { type: Boolean, default: !1 },
    labelMinWidth: { default: "70px" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", _f, [
      b(Ko, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          x(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (o(), R(il, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          x(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : rt(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), Tt = /* @__PURE__ */ Me(kf, [["__scopeId", "data-v-ef15664a"]]), bf = { class: "modal-header" }, $f = { class: "modal-body" }, Cf = { class: "status-section" }, xf = {
  key: 0,
  class: "status-section"
}, Sf = { class: "section-header-row" }, If = {
  key: 0,
  class: "workflow-group"
}, Ef = { class: "workflow-group-header" }, Tf = { class: "workflow-group-title" }, Mf = { class: "workflow-list" }, Pf = { class: "workflow-name" }, Rf = { class: "workflow-issue" }, Df = {
  key: 1,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Lf = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, Of = { class: "workflow-name" }, Af = { class: "workflow-issue" }, zf = {
  key: 2,
  class: "workflow-group"
}, Ff = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Wf = { class: "workflow-name" }, Gf = {
  key: 3,
  class: "workflow-group"
}, jf = { class: "workflow-group-header" }, Hf = { class: "workflow-group-title" }, qf = { class: "workflow-list" }, Kf = { class: "workflow-name" }, Jf = {
  key: 4,
  class: "workflow-group"
}, Qf = { class: "workflow-group-header" }, Yf = { class: "workflow-group-title" }, Xf = { class: "workflow-list" }, Zf = { class: "workflow-name" }, ev = {
  key: 5,
  class: "workflow-group"
}, tv = { class: "workflow-group-title" }, sv = { class: "expand-icon" }, nv = {
  key: 0,
  class: "workflow-list"
}, ov = { class: "workflow-name" }, av = {
  key: 1,
  class: "status-section"
}, lv = {
  key: 0,
  class: "change-group"
}, iv = { class: "change-group-header" }, rv = { class: "change-group-title" }, cv = { class: "change-list" }, uv = { class: "node-name" }, dv = {
  key: 0,
  class: "dev-badge"
}, mv = {
  key: 1,
  class: "change-group"
}, fv = { class: "change-group-header" }, vv = { class: "change-group-title" }, pv = { class: "change-list" }, gv = { class: "node-name" }, hv = {
  key: 0,
  class: "dev-badge"
}, yv = {
  key: 2,
  class: "change-group"
}, wv = { class: "change-list" }, _v = { class: "change-item" }, kv = { class: "node-name" }, bv = {
  key: 3,
  class: "change-group"
}, $v = {
  key: 2,
  class: "status-section"
}, Cv = { class: "section-header-row" }, xv = {
  key: 0,
  class: "drift-item"
}, Sv = { class: "drift-list" }, Iv = {
  key: 0,
  class: "drift-list-more"
}, Ev = {
  key: 1,
  class: "drift-item"
}, Tv = { class: "drift-list" }, Mv = {
  key: 0,
  class: "drift-list-more"
}, Pv = {
  key: 2,
  class: "drift-item"
}, Rv = { class: "drift-list" }, Dv = { class: "version-actual" }, Nv = { class: "version-expected" }, Lv = {
  key: 0,
  class: "drift-list-more"
}, Uv = {
  key: 3,
  class: "drift-item"
}, Ov = { class: "repair-action" }, Av = {
  key: 3,
  class: "status-section"
}, zv = { class: "info-box" }, Fv = { class: "drift-list" }, Vv = {
  key: 0,
  class: "drift-list-more"
}, Bv = {
  key: 4,
  class: "status-section"
}, Wv = { class: "warning-box" }, Gv = {
  key: 5,
  class: "empty-state-inline"
}, jv = { class: "modal-actions" }, Hv = /* @__PURE__ */ Ie({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, n = _(!1);
    dt(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), $t(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state === "synced"
      )) || [];
    }), l = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : k.filter(
        ($) => $.status === "broken" && $.sync_state !== "synced"
      )) || [];
    }), r = M(() => {
      var w, g, k;
      return ((k = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : k.filter(($) => {
        var C, I, E;
        const S = (E = (I = (C = t.status) == null ? void 0 : C.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : E.find((P) => P.name === $);
        return !S || S.status !== "broken";
      })) || [];
    }), c = M(() => {
      var w, g, k, $, S;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((k = t.status.workflows.modified) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = t.status.workflows.deleted) == null ? void 0 : $.length) ?? 0) > 0 || (((S = t.status.workflows.synced) == null ? void 0 : S.length) ?? 0) > 0 : !1;
    }), u = M(() => {
      var g, k, $;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((k = w.nodes_added) == null ? void 0 : k.length) ?? 0) > 0 || ((($ = w.nodes_removed) == null ? void 0 : $.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = M(() => {
      var w, g, k, $, S, C;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((k = t.status) == null ? void 0 : k.missing_models_count) ?? 0) === 0 && (((C = (S = ($ = t.status) == null ? void 0 : $.comparison) == null ? void 0 : S.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), f = M(() => {
      var g, k;
      const w = (k = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : k.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function p(w) {
      return typeof w == "string" ? w : w.name;
    }
    function v(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var k, $, S, C, I, E, P, O, U, F, D, W, ce, de, J, ve, K, L, G, re, te, ue;
      return o(), R(rs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (me) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", bf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (me) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", $f, [
              s("div", Cf, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    x("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(Tt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (o(), i("div", xf, [
                s("div", Sf, [
                  b(_s, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      x("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (me) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (o(), i("div", If, [
                  s("div", Ef, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Tf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", Mf, [
                    (o(!0), i(V, null, ye(a.value, (me) => (o(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      s("span", Pf, m(me.name), 1),
                      s("span", Rf, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (o(), i("div", Df, [
                  s("div", Nf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Lf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Uf, [
                    (o(!0), i(V, null, ye(l.value, (me) => (o(), i("div", {
                      key: me.name,
                      class: "workflow-item"
                    }, [
                      s("span", Of, m(me.name), 1),
                      s("span", Af, m(me.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                ($ = (k = e.status.workflows) == null ? void 0 : k.new) != null && $.length ? (o(), i("div", zf, [
                  s("div", Ff, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Vf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (o(!0), i(V, null, ye(e.status.workflows.new, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", Wf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (S = e.status.workflows) == null ? void 0 : S.modified) != null && C.length ? (o(), i("div", Gf, [
                  s("div", jf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Hf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", qf, [
                    (o(!0), i(V, null, ye(e.status.workflows.modified, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (E = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && E.length ? (o(), i("div", Jf, [
                  s("div", Qf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Yf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Xf, [
                    (o(!0), i(V, null, ye(e.status.workflows.deleted, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", Zf, m(me), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (o(), i("div", ev, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (me) => n.value = !n.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", tv, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", sv, m(n.value ? "▼" : "▶"), 1)
                  ]),
                  n.value ? (o(), i("div", nv, [
                    (o(!0), i(V, null, ye(r.value, (me) => (o(), i("div", {
                      key: me,
                      class: "workflow-item"
                    }, [
                      s("span", ov, m(me), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (o(), i("div", av, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    x("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (O = (P = e.status.git_changes) == null ? void 0 : P.nodes_added) != null && O.length ? (o(), i("div", lv, [
                  s("div", iv, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", rv, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", cv, [
                    (o(!0), i(V, null, ye(e.status.git_changes.nodes_added, (me) => (o(), i("div", {
                      key: p(me),
                      class: "change-item"
                    }, [
                      s("span", uv, m(p(me)), 1),
                      v(me) ? (o(), i("span", dv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (F = (U = e.status.git_changes) == null ? void 0 : U.nodes_removed) != null && F.length ? (o(), i("div", mv, [
                  s("div", fv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", vv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", pv, [
                    (o(!0), i(V, null, ye(e.status.git_changes.nodes_removed, (me) => (o(), i("div", {
                      key: p(me),
                      class: "change-item"
                    }, [
                      s("span", gv, m(p(me)), 1),
                      v(me) ? (o(), i("span", hv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (D = e.status.git_changes) != null && D.workflow_changes ? (o(), i("div", yv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", wv, [
                    s("div", _v, [
                      s("span", kv, m(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (W = e.status.git_changes) != null && W.has_other_changes ? (o(), i("div", bv, [...g[21] || (g[21] = [
                  s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  s("div", { class: "change-list" }, [
                    s("div", { class: "change-item" }, [
                      s("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : y("", !0)
              ])) : y("", !0),
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (o(), i("div", $v, [
                s("div", Cv, [
                  b(_s, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      x("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (me) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (J = (de = e.status.comparison) == null ? void 0 : de.missing_nodes) != null && J.length ? (o(), i("div", xv, [
                  b(Tt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", Sv, [
                    (o(!0), i(V, null, ye(e.status.comparison.missing_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (o(), i("div", Iv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (ve = e.status.comparison) == null ? void 0 : ve.extra_nodes) != null && K.length ? (o(), i("div", Ev, [
                  b(Tt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", Tv, [
                    (o(!0), i(V, null, ye(e.status.comparison.extra_nodes.slice(0, 10), (me) => (o(), i("div", {
                      key: me,
                      class: "drift-list-item"
                    }, " - " + m(me), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (o(), i("div", Mv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (G = (L = e.status.comparison) == null ? void 0 : L.version_mismatches) != null && G.length ? (o(), i("div", Pv, [
                  b(Tt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", Rv, [
                    (o(!0), i(V, null, ye(e.status.comparison.version_mismatches.slice(0, 10), (me) => (o(), i("div", {
                      key: me.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      x(m(me.name) + ": ", 1),
                      s("span", Dv, m(me.actual), 1),
                      g[23] || (g[23] = x(" → ", -1)),
                      s("span", Nv, m(me.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (o(), i("div", Lv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((re = e.status.comparison) == null ? void 0 : re.packages_in_sync) === !1 ? (o(), i("div", Uv, [
                  b(Tt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Ov, [
                  b(Re, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (me) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      x(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ue = (te = e.status.comparison) == null ? void 0 : te.disabled_nodes) != null && ue.length ? (o(), i("div", Av, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    x("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", zv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Fv, [
                  (o(!0), i(V, null, ye(e.status.comparison.disabled_nodes.slice(0, 10), (me) => (o(), i("div", {
                    key: me,
                    class: "drift-list-item"
                  }, " • " + m(me), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (o(), i("div", Vv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (o(), i("div", Bv, [
                b(_s, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    x("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Wv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (o(), i("div", Gv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", jv, [
              b(Re, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (me) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), qv = /* @__PURE__ */ Me(Hv, [["__scopeId", "data-v-e2b37122"]]), Kv = { class: "base-modal-header" }, Jv = {
  key: 0,
  class: "base-modal-title"
}, Qv = { class: "base-modal-body" }, Yv = {
  key: 0,
  class: "base-modal-loading"
}, Xv = {
  key: 1,
  class: "base-modal-error"
}, Zv = {
  key: 0,
  class: "base-modal-footer"
}, ep = /* @__PURE__ */ Ie({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {},
    fixedHeight: { type: Boolean, default: !1 },
    overlayZIndex: { default: 10003 }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l() {
      n.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && n.showCloseButton && a("close");
    }
    return dt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Gn(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (o(), R(rs, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Ft({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Fe(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", Kv, [
            rt(c.$slots, "header", {}, () => [
              e.title ? (o(), i("h3", Jv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (o(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : y("", !0)
          ]),
          s("div", Qv, [
            e.loading ? (o(), i("div", Yv, "Loading...")) : e.error ? (o(), i("div", Xv, m(e.error), 1)) : rt(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (o(), i("div", Zv, [
            rt(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), Mt = /* @__PURE__ */ Me(ep, [["__scopeId", "data-v-06a4be14"]]), tp = ["type", "disabled"], sp = {
  key: 0,
  class: "spinner"
}, np = /* @__PURE__ */ Ie({
  __name: "BaseButton",
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !1 },
    type: { default: "button" }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Fe(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: n[0] || (n[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (o(), i("span", sp)) : y("", !0),
      rt(t.$slots, "default", {}, void 0)
    ], 10, tp));
  }
}), Oe = /* @__PURE__ */ Me(np, [["__scopeId", "data-v-f3452606"]]), op = ["type", "value", "placeholder", "disabled"], ap = {
  key: 0,
  class: "base-input-error"
}, lp = /* @__PURE__ */ Ie({
  __name: "BaseInput",
  props: {
    modelValue: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {},
    fullWidth: { type: Boolean, default: !1 },
    type: { default: "text" }
  },
  emits: ["update:modelValue", "enter", "escape"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Fe(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Fe(["base-input", { error: !!e.error }]),
        onInput: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          n[1] || (n[1] = Ss((a) => t.$emit("enter"), ["enter"])),
          n[2] || (n[2] = Ss((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, op),
      e.error ? (o(), i("span", ap, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ Me(lp, [["__scopeId", "data-v-9ba02cdc"]]), ip = ["disabled"], rp = { class: "dropdown-value" }, cp = ["onClick"], up = {
  key: 0,
  class: "dropdown-error"
}, dp = /* @__PURE__ */ Ie({
  __name: "BaseDropdown",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(null), c = _(null), u = _({});
    function d(C) {
      return typeof C == "string" ? C : C.value;
    }
    function f(C) {
      return typeof C == "string" ? C : C.label;
    }
    const p = M(() => {
      if (!n.modelValue && n.placeholder)
        return n.placeholder;
      const C = n.options.find((I) => d(I) === n.modelValue);
      return C ? f(C) : String(n.modelValue);
    });
    function v() {
      n.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(C) {
      a("update:modelValue", d(C)), w();
    }
    function k() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), I = window.innerHeight, E = I - C.bottom, P = C.top, O = Math.min(300, n.options.length * 36 + 8), U = E < O && P > E;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...U ? { bottom: `${I - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    $t(l, async (C) => {
      C && (await Wt(), k());
    });
    function $() {
      l.value && k();
    }
    function S(C) {
      C.key === "Escape" && l.value && w();
    }
    return dt(() => {
      window.addEventListener("scroll", $, !0), window.addEventListener("keydown", S);
    }), Gn(() => {
      window.removeEventListener("scroll", $, !0), window.removeEventListener("keydown", S);
    }), (C, I) => (o(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Fe(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: v
      }, [
        s("span", rp, m(p.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, ip),
      (o(), R(rs, { to: "body" }, [
        l.value ? (o(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (o(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Ft(u.value)
        }, [
          (o(!0), i(V, null, ye(e.options, (E) => (o(), i("div", {
            key: d(E),
            class: Fe(["dropdown-option", { selected: d(E) === e.modelValue }]),
            onClick: (P) => g(E)
          }, m(f(E)), 11, cp))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (o(), i("span", up, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), mp = /* @__PURE__ */ Me(dp, [["__scopeId", "data-v-857e085b"]]), fp = { class: "destination-section" }, vp = { class: "section-label" }, pp = { class: "destination-row" }, gp = {
  key: 0,
  class: "path-separator"
}, hp = /* @__PURE__ */ Ie({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelsSubdirectories: l } = ft(), r = _(""), c = _(""), u = _(""), d = _([]), f = _(!1);
    let p = !1;
    const v = M(() => {
      const $ = d.value.map((S) => ({
        label: S,
        value: S
      }));
      return $.push({ label: "Custom path...", value: "__custom__" }), $;
    }), w = M(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (f.value || !n.suggestedDirectory) return;
      const $ = d.value.find(
        (S) => {
          var C;
          return S.toLowerCase() === ((C = n.suggestedDirectory) == null ? void 0 : C.toLowerCase());
        }
      );
      $ && $ !== r.value && (p = !0, r.value = $, Wt(() => {
        p = !1;
      }));
    }
    async function k() {
      try {
        const $ = await l();
        d.value = $.directories, $.directories.length > 0 && !r.value && (r.value = $.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return $t(w, ($) => {
      a("update:modelValue", $);
    }, { immediate: !0 }), $t(() => n.suggestedDirectory, g), $t(d, g), $t(r, ($, S) => {
      p || S === "" || (f.value = !0);
    }), dt(k), ($, S) => (o(), i("div", fp, [
      s("h4", vp, m(e.label), 1),
      s("div", pp, [
        b(mp, {
          modelValue: r.value,
          "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
          options: v.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (o(), i("span", gp, "/")) : y("", !0),
        r.value !== "__custom__" ? (o(), R(Pt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": S[1] || (S[1] = (C) => c.value = C),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (o(), R(Pt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": S[2] || (S[2] = (C) => u.value = C),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), cc = /* @__PURE__ */ Me(hp, [["__scopeId", "data-v-2fbc2b02"]]);
function yp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function wp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let n;
  try {
    n = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!yp(n.hostname)) return { kind: "unknown" };
  const a = n.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const c = r[0];
  if (c === "tree") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: d || void 0 };
  }
  if (c === "resolve") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = r[1] || "main", d = r.slice(2).join("/");
    return d ? { kind: "file", repoId: l, revision: u, path: d } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function _p(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ri(e, t, n) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${_p(n)}`;
}
const kp = { class: "hf-file-browser" }, bp = { class: "browser-header" }, $p = { class: "repo-info" }, Cp = { class: "repo-id" }, xp = {
  key: 0,
  class: "revision-pill"
}, Sp = {
  key: 0,
  class: "loading-state"
}, Ip = {
  key: 1,
  class: "error-state"
}, Ep = { class: "toolbar" }, Tp = { class: "toolbar-actions" }, Mp = { class: "file-list-container" }, Pp = {
  key: 0,
  class: "file-list-header"
}, Rp = ["checked", "indeterminate"], Dp = {
  key: 1,
  class: "file-checkbox-spacer"
}, Np = { class: "sort-indicator" }, Lp = { class: "sort-indicator" }, Up = {
  key: 1,
  class: "empty-state"
}, Op = {
  key: 2,
  class: "file-list"
}, Ap = ["onClick"], zp = ["checked", "onChange"], Fp = { class: "file-path" }, Vp = { class: "file-size" }, Bp = { class: "action-bar" }, Wp = { class: "summary-info" }, Gp = { class: "summary-count" }, jp = { class: "summary-size" }, Hp = /* @__PURE__ */ Ie({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {},
    mode: {},
    actionLabel: {}
  },
  emits: ["queue", "selectSource", "back"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getHuggingFaceRepoInfo: l } = ft(), r = _([]), c = _(/* @__PURE__ */ new Set()), u = _(!1), d = _(null), f = _(""), p = _(!1), v = _("name"), w = _(!0), g = _(""), k = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, $ = M(() => {
      let ae = r.value;
      if (n.initialPath) {
        const Pe = n.initialPath.endsWith("/") ? n.initialPath : `${n.initialPath}/`;
        ae = ae.filter((ge) => ge.path.startsWith(Pe) || ge.path === n.initialPath);
      }
      if (p.value && (ae = ae.filter((Pe) => Pe.is_model_file)), f.value.trim()) {
        const Pe = f.value.toLowerCase();
        ae = ae.filter((ge) => ge.path.toLowerCase().includes(Pe));
      }
      return ae;
    }), S = M(() => {
      const ae = [...$.value];
      return ae.sort((Pe, ge) => {
        let ze;
        return v.value === "name" ? ze = Pe.path.localeCompare(ge.path) : ze = Pe.size - ge.size, w.value ? ze : -ze;
      }), ae;
    }), C = M(() => $.value.length === 0 ? !1 : $.value.every((ae) => c.value.has(ae.path))), I = M(() => $.value.some((ae) => c.value.has(ae.path))), E = M(() => g.value.trim().length > 0), P = M(() => {
      let ae = 0;
      for (const Pe of c.value) {
        const ge = r.value.find((ze) => ze.path === Pe);
        ge && (ae += ge.size);
      }
      return ae;
    }), O = M(() => {
      if (c.value.size === 0) return null;
      const ae = /* @__PURE__ */ new Set();
      for (const Pe of c.value) {
        const ge = re(Pe);
        ge && ae.add(ge.toLowerCase());
      }
      return ae.size !== 1 ? null : [...ae][0];
    }), U = M(() => n.mode || "download"), F = M(() => n.actionLabel || (U.value === "source" ? "Use as Source" : "Queue Download")), D = M(() => U.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), W = M(() => U.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !E.value);
    function ce(ae) {
      if (ae === 0) return "0 B";
      const Pe = 1024 * 1024 * 1024, ge = 1024 * 1024, ze = 1024;
      return ae >= Pe ? `${(ae / Pe).toFixed(2)} GB` : ae >= ge ? `${(ae / ge).toFixed(1)} MB` : ae >= ze ? `${(ae / ze).toFixed(0)} KB` : `${ae} B`;
    }
    function de(ae) {
      const Pe = ae.match(k);
      return Pe ? `${Pe[1]}${Pe[4]}` : null;
    }
    function J(ae) {
      if (U.value === "source") {
        c.value = c.value.has(ae.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ae.path]);
        return;
      }
      const Pe = new Set(c.value), ge = Pe.has(ae.path), ze = ae.shard_group || de(ae.path);
      if (ze) {
        const Ne = r.value.filter((_e) => (_e.shard_group || de(_e.path)) === ze);
        ge ? Ne.forEach((_e) => Pe.delete(_e.path)) : Ne.forEach((_e) => Pe.add(_e.path));
      } else
        ge ? Pe.delete(ae.path) : Pe.add(ae.path);
      c.value = Pe;
    }
    function ve() {
      const ae = new Set(c.value);
      for (const Pe of $.value)
        Pe.is_model_file && ae.add(Pe.path);
      c.value = ae;
    }
    function K() {
      c.value = /* @__PURE__ */ new Set();
    }
    function L() {
      if (C.value) {
        const ae = new Set(c.value);
        for (const Pe of $.value)
          ae.delete(Pe.path);
        c.value = ae;
      } else {
        const ae = new Set(c.value);
        for (const Pe of $.value)
          ae.add(Pe.path);
        c.value = ae;
      }
    }
    function G(ae) {
      v.value === ae ? w.value = !w.value : (v.value = ae, w.value = !0);
    }
    function re(ae) {
      const Pe = ae.split("/");
      return Pe.length >= 2 ? Pe[Pe.length - 2] : null;
    }
    function te() {
      return g.value.trim();
    }
    function ue() {
      if (c.value.size === 0 || !E.value) return;
      const ae = te(), Pe = [];
      for (const ge of c.value) {
        const ze = r.value.find((Ne) => Ne.path === ge);
        ze && Pe.push({
          url: Ri(n.repoId, n.revision, ze.path),
          destination: ae,
          filename: ze.path.split("/").pop() || ze.path
        });
      }
      a("queue", Pe);
    }
    function me() {
      if (c.value.size !== 1) return;
      const [ae] = c.value;
      a("selectSource", Ri(n.repoId, n.revision, ae));
    }
    function q() {
      if (U.value === "source") {
        me();
        return;
      }
      ue();
    }
    async function Q() {
      if (n.repoId) {
        u.value = !0, d.value = null;
        try {
          const ae = `https://huggingface.co/${n.repoId}/tree/${n.revision || "main"}`, Pe = await l(ae);
          if (r.value = Pe.files, n.preselectedFile) {
            const ge = r.value.find((ze) => ze.path === n.preselectedFile);
            ge && J(ge);
          }
        } catch (ae) {
          d.value = ae instanceof Error ? ae.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return $t(() => [n.repoId, n.revision], () => {
      n.repoId && Q();
    }, { immediate: !1 }), dt(() => {
      Q();
    }), (ae, Pe) => (o(), i("div", kp, [
      s("div", bp, [
        s("button", {
          class: "back-btn",
          onClick: Pe[0] || (Pe[0] = (ge) => ae.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", $p, [
          s("span", Cp, m(e.repoId), 1),
          e.revision ? (o(), i("span", xp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (o(), i("div", Sp, " Loading repository files... ")) : d.value ? (o(), i("div", Ip, m(d.value), 1)) : (o(), i(V, { key: 2 }, [
        s("div", Ep, [
          b(Pt, {
            modelValue: f.value,
            "onUpdate:modelValue": Pe[1] || (Pe[1] = (ge) => f.value = ge),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", Tp, [
            s("button", {
              class: Fe(["toggle-btn", { active: p.value }]),
              onClick: Pe[2] || (Pe[2] = (ge) => p.value = !p.value)
            }, m(p.value ? "Models Only" : "All Files"), 3),
            U.value === "download" ? (o(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: ve
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: K
            }, "Clear")
          ])
        ]),
        s("div", Mp, [
          $.value.length > 0 ? (o(), i("div", Pp, [
            U.value === "download" ? (o(), i("input", {
              key: 0,
              type: "checkbox",
              checked: C.value,
              indeterminate: I.value && !C.value,
              class: "file-checkbox",
              onChange: L
            }, null, 40, Rp)) : (o(), i("span", Dp)),
            s("span", {
              class: "header-name",
              onClick: Pe[3] || (Pe[3] = (ge) => G("name"))
            }, [
              Pe[7] || (Pe[7] = x(" Name ", -1)),
              s("span", Np, m(v.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Pe[4] || (Pe[4] = (ge) => G("size"))
            }, [
              Pe[8] || (Pe[8] = x(" Size ", -1)),
              s("span", Lp, m(v.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          $.value.length === 0 ? (o(), i("div", Up, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (o(), i("div", Op, [
            (o(!0), i(V, null, ye(S.value, (ge) => (o(), i("div", {
              key: ge.path,
              class: Fe(["file-item", { selected: c.value.has(ge.path) }]),
              onClick: (ze) => J(ge)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(ge.path),
                class: "file-checkbox",
                onClick: Pe[5] || (Pe[5] = bt(() => {
                }, ["stop"])),
                onChange: (ze) => J(ge)
              }, null, 40, zp),
              s("span", Fp, m(ge.path), 1),
              s("span", Vp, m(ce(ge.size)), 1)
            ], 10, Ap))), 128))
          ]))
        ]),
        U.value === "download" ? (o(), R(cc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Pe[6] || (Pe[6] = (ge) => g.value = ge),
          "suggested-directory": O.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Bp, [
          s("div", Wp, [
            s("span", Gp, m(D.value), 1),
            s("span", jp, m(ce(P.value)), 1)
          ]),
          b(Oe, {
            variant: "primary",
            disabled: W.value,
            onClick: q
          }, {
            default: h(() => [
              x(m(F.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), qp = /* @__PURE__ */ Me(Hp, [["__scopeId", "data-v-06caa551"]]), Kp = { class: "token-config-modal" }, Jp = { class: "provider-info" }, Qp = { class: "provider-icon" }, Yp = { class: "provider-name" }, Xp = {
  key: 0,
  class: "current-token"
}, Zp = { class: "mask" }, eg = { class: "token-input-section" }, tg = { class: "input-label" }, sg = { class: "help-text" }, ng = ["href"], og = { class: "modal-actions" }, ag = /* @__PURE__ */ Ie({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const n = e, a = t, { updateConfig: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = M(
      () => n.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = M(
      () => n.provider === "huggingface" ? "🤗" : "🎨"
    ), p = M(
      () => n.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), v = M(
      () => n.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = M(
      () => n.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const $ = n.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l($), r.value = "", a("saved"), a("close");
        } catch ($) {
          console.error("Failed to save token:", $);
        } finally {
          c.value = !1;
        }
      }
    }
    async function k() {
      u.value = !0;
      try {
        const $ = n.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l($), a("cleared"), a("close");
      } catch ($) {
        console.error("Failed to clear token:", $);
      } finally {
        u.value = !1;
      }
    }
    return ($, S) => (o(), R(Mt, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: S[2] || (S[2] = (C) => $.$emit("close"))
    }, {
      body: h(() => [
        s("div", Kp, [
          s("div", Jp, [
            s("span", Qp, m(f.value), 1),
            s("span", Yp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (o(), i("div", Xp, [
            S[4] || (S[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Zp, m(e.currentTokenMask), 1),
            b(Oe, {
              variant: "danger",
              size: "sm",
              onClick: k,
              loading: u.value
            }, {
              default: h(() => [...S[3] || (S[3] = [
                x(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", eg, [
            s("label", tg, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(Pt, {
              modelValue: r.value,
              "onUpdate:modelValue": S[0] || (S[0] = (C) => r.value = C),
              type: "password",
              placeholder: p.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", sg, [
              s("a", {
                href: v.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, ng)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", og, [
          b(Oe, {
            variant: "secondary",
            onClick: S[1] || (S[1] = (C) => $.$emit("close"))
          }, {
            default: h(() => [...S[5] || (S[5] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), lg = /* @__PURE__ */ Me(ag, [["__scopeId", "data-v-525ec64a"]]), ig = { class: "huggingface-tab" }, rg = {
  key: 0,
  class: "search-section"
}, cg = { class: "search-header" }, ug = { class: "search-bar" }, dg = {
  key: 1,
  class: "search-results"
}, mg = {
  key: 0,
  class: "loading-state"
}, fg = {
  key: 1,
  class: "error-state"
}, vg = {
  key: 2,
  class: "results-list"
}, pg = ["onClick"], gg = { class: "repo-header" }, hg = { class: "repo-id" }, yg = { class: "repo-stats" }, wg = {
  class: "stat",
  title: "Downloads"
}, _g = {
  class: "stat",
  title: "Likes"
}, kg = {
  key: 0,
  class: "repo-desc"
}, bg = {
  key: 1,
  class: "repo-tags"
}, $g = {
  key: 3,
  class: "empty-state"
}, Cg = {
  key: 4,
  class: "hint-state"
}, xg = /* @__PURE__ */ Ie({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: n } = ft(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _(null), p = _("main"), v = _(), w = _(), g = _(!1), k = _(null), $ = M(() => {
      if (!u.value) return !1;
      const F = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || F.includes("authentication") || F.includes("unauthorized");
    });
    function S(F) {
      return F >= 1e6 ? `${(F / 1e6).toFixed(1)}M` : F >= 1e3 ? `${(F / 1e3).toFixed(1)}K` : String(F);
    }
    async function C() {
      const F = l.value.trim();
      if (!F) return;
      u.value = null;
      const D = wp(F);
      if (D.kind === "file" && D.repoId && D.path) {
        f.value = D.repoId, p.value = D.revision || "main";
        const W = D.path.split("/");
        W.length > 1 ? v.value = W.slice(0, -1).join("/") : v.value = void 0, w.value = D.path, a.value = "browse";
        return;
      }
      if (D.kind === "repo" && D.repoId) {
        f.value = D.repoId, p.value = D.revision || "main", v.value = D.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(F) && !F.includes("://")) {
        f.value = F, p.value = "main", v.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const W = await t(F);
        r.value = W.results, d.value = !0;
      } catch (W) {
        u.value = W instanceof Error ? W.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(F) {
      f.value = F, p.value = "main", v.value = void 0, w.value = void 0, a.value = "browse";
    }
    function E() {
      a.value = "search", f.value = null, v.value = void 0, w.value = void 0;
    }
    async function P() {
      try {
        const F = await n();
        k.value = F.huggingface_token || null;
      } catch (F) {
        console.error("Failed to load config:", F);
      }
    }
    function O() {
      P(), $.value && l.value && C();
    }
    function U() {
      k.value = null;
    }
    return dt(P), (F, D) => (o(), i("div", ig, [
      a.value === "search" ? (o(), i("div", rg, [
        s("div", cg, [
          s("div", ug, [
            b(Pt, {
              modelValue: l.value,
              "onUpdate:modelValue": D[0] || (D[0] = (W) => l.value = W),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: Ss(C, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Oe, {
              variant: "primary",
              onClick: C,
              loading: c.value
            }, {
              default: h(() => [...D[6] || (D[6] = [
                x(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: D[1] || (D[1] = (W) => g.value = !0)
          }, {
            default: h(() => [
              x(m(k.value ? `Token: ${k.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (o(), i("div", dg, [
        c.value ? (o(), i("div", mg, " Searching HuggingFace... ")) : u.value ? (o(), i("div", fg, [
          s("p", null, m(u.value), 1),
          $.value ? (o(), R(Oe, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: D[2] || (D[2] = (W) => g.value = !0)
          }, {
            default: h(() => [...D[7] || (D[7] = [
              x(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (o(), i("div", vg, [
          (o(!0), i(V, null, ye(r.value, (W) => (o(), i("div", {
            key: W.repo_id,
            class: "repo-card",
            onClick: (ce) => I(W.repo_id)
          }, [
            s("div", gg, [
              s("span", hg, m(W.repo_id), 1),
              s("div", yg, [
                s("span", wg, [
                  D[8] || (D[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  x(" " + m(S(W.downloads)), 1)
                ]),
                s("span", _g, [
                  D[9] || (D[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  x(" " + m(S(W.likes)), 1)
                ])
              ])
            ]),
            W.description ? (o(), i("p", kg, m(W.description), 1)) : y("", !0),
            W.tags.length > 0 ? (o(), i("div", bg, [
              (o(!0), i(V, null, ye(W.tags.slice(0, 5), (ce) => (o(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, pg))), 128))
        ])) : d.value ? (o(), i("div", $g, " No repositories found ")) : (o(), i("div", Cg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (o(), R(qp, {
        key: 2,
        "repo-id": f.value,
        revision: p.value,
        "initial-path": v.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: E,
        onQueue: D[3] || (D[3] = (W) => F.$emit("queue", W)),
        onSelectSource: D[4] || (D[4] = (W) => F.$emit("selectSource", W))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (o(), R(lg, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": k.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: D[5] || (D[5] = (W) => g.value = !1),
        onSaved: O,
        onCleared: U
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), uc = /* @__PURE__ */ Me(xg, [["__scopeId", "data-v-eccbf32d"]]), Sg = { class: "candidate-card" }, Ig = { class: "candidate-main" }, Eg = { class: "candidate-url" }, Tg = { class: "candidate-meta" }, Mg = { class: "meta-chip" }, Pg = {
  key: 0,
  class: "meta-chip"
}, Rg = ["aria-expanded"], Dg = {
  key: 1,
  class: "meta-chip"
}, Ng = { class: "match-popover-reasons" }, Lg = { class: "candidate-footer" }, Ug = {
  key: 0,
  class: "candidate-context"
}, Og = { key: 1 }, Ag = /* @__PURE__ */ Ie({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r() {
      a.value = !1;
    }
    function c(p) {
      var w;
      const v = p.target;
      v instanceof Node && ((w = l.value) != null && w.contains(v) || r());
    }
    function u(p) {
      p.key === "Escape" && r();
    }
    $t(a, (p) => {
      p ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), To(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(p) {
      return p === "huggingface" ? "Hugging Face" : p === "civitai" ? "Civitai" : "Direct URL";
    }
    function f(p) {
      return p >= 75 ? "Strong" : p >= 45 ? "Possible" : "Weak";
    }
    return (p, v) => {
      var w, g;
      return o(), i("article", Sg, [
        s("div", Ig, [
          s("div", Eg, m(e.candidate.url), 1),
          s("div", Tg, [
            s("span", Mg, [
              v[3] || (v[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (o(), i("span", Pg, [
              v[4] || (v[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (o(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (o(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": a.value,
                onClick: v[0] || (v[0] = bt((k) => a.value = !a.value, ["stop"]))
              }, [
                v[5] || (v[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ], 8, Rg)) : (o(), i("span", Dg, [
                v[6] || (v[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(f(e.candidate.confidence)), 1)
              ])),
              a.value && ((g = e.candidate.reasons) != null && g.length) ? (o(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: v[1] || (v[1] = bt(() => {
                }, ["stop"]))
              }, [
                v[7] || (v[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Ng, [
                  (o(!0), i(V, null, ye(e.candidate.reasons, (k) => (o(), i("span", {
                    key: k,
                    class: "reason-chip"
                  }, m(k), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Lg, [
            e.candidate.context ? (o(), i("details", Ug, [
              v[8] || (v[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (o(), i("div", Og)),
            b(Oe, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: v[2] || (v[2] = (k) => n("select", e.candidate.url))
            }, {
              default: h(() => [
                x(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), dc = /* @__PURE__ */ Me(Ag, [["__scopeId", "data-v-329b9068"]]), zg = { class: "source-url-form" }, Fg = { class: "input-group" }, Vg = { key: 0 }, Bg = {
  key: 1,
  class: "description"
}, Wg = { class: "actions" }, Gg = /* @__PURE__ */ Ie({
  __name: "SourceUrlActionForm",
  props: {
    modelValue: {},
    actionLabel: {},
    label: { default: "Download URL" },
    placeholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" },
    description: { default: "" },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "submit"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.modelValue.trim()), r = M(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const f = new URL(d);
        if (!["http:", "https:"].includes(f.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = M(() => !!l.value && !r.value && !n.disabled);
    function u() {
      c.value && a("submit", l.value);
    }
    return (d, f) => (o(), i("div", zg, [
      s("div", Fg, [
        e.label ? (o(), i("label", Vg, m(e.label), 1)) : y("", !0),
        b(Pt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": f[0] || (f[0] = (p) => a("update:modelValue", p)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (o(), i("p", Bg, m(e.description), 1)) : y("", !0)
      ]),
      rt(d.$slots, "default", {}, void 0),
      s("div", Wg, [
        b(Oe, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            x(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), mc = /* @__PURE__ */ Me(Gg, [["__scopeId", "data-v-e2610d45"]]), jg = { class: "source-picker" }, Hg = {
  key: 0,
  class: "model-summary"
}, qg = { class: "model-heading" }, Kg = { class: "summary-name" }, Jg = { class: "summary-meta" }, Qg = {
  key: 0,
  class: "hash-row"
}, Yg = { class: "hash-value" }, Xg = {
  key: 1,
  class: "hash-row"
}, Zg = { class: "hash-value" }, eh = {
  key: 2,
  class: "hash-row"
}, th = { class: "hash-value" }, sh = {
  key: 4,
  class: "hash-error"
}, nh = { class: "tab-bar" }, oh = ["onClick"], ah = {
  key: 1,
  class: "tab-content"
}, lh = { class: "section-header-row" }, ih = {
  key: 0,
  class: "state-message"
}, rh = {
  key: 1,
  class: "error-message"
}, ch = {
  key: 2,
  class: "candidate-list"
}, uh = {
  key: 3,
  class: "state-message"
}, dh = {
  key: 2,
  class: "tab-content source-browser-content"
}, mh = {
  key: 3,
  class: "tab-content"
}, fh = { class: "section-header-row" }, vh = /* @__PURE__ */ Ie({
  __name: "ModelSourcePicker",
  props: {
    model: {},
    actionLabel: { default: "Use as Source" },
    loadingUrl: { default: null },
    overlayZIndex: { default: 10011 },
    showModelSummary: { type: Boolean, default: !0 },
    directDescription: { default: "Paste the download URL that another machine should use for this exact model file." },
    directPlaceholder: { default: "https://huggingface.co/org/repo/resolve/main/model.safetensors" }
  },
  emits: ["selectSource", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ft(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = _("workflow"), d = _([]), f = _(!1), p = _(null), v = _(""), w = _(!1), g = _(null), k = M(() => d.value.filter((I) => I.source === "workflow")), $ = M(() => !!(n.model.hash && (!n.model.blake3 || !n.model.sha256)));
    async function S() {
      f.value = !0, p.value = null;
      try {
        const I = await l(n.model.hash);
        d.value = I.candidates;
      } catch (I) {
        p.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      if (n.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(n.model.hash);
          a("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return dt(S), (I, E) => (o(), i("div", jg, [
      e.showModelSummary ? (o(), i("div", Hg, [
        s("div", qg, [
          E[4] || (E[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Kg, m(e.model.filename), 1)
        ]),
        s("div", Jg, [
          e.model.hash ? (o(), i("div", Qg, [
            E[5] || (E[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Yg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (o(), i("div", Xg, [
            E[6] || (E[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Zg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (o(), i("div", eh, [
            E[7] || (E[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", th, m(e.model.sha256), 1)
          ])) : y("", !0),
          $.value ? (o(), R(Oe, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: C
          }, {
            default: h(() => [...E[8] || (E[8] = [
              x(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (o(), i("p", sh, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", nh, [
        (o(), i(V, null, ye(c, (P) => s("button", {
          key: P.id,
          class: Fe(["tab-btn", { active: u.value === P.id }]),
          onClick: (O) => u.value = P.id
        }, m(P.label), 11, oh)), 64))
      ]),
      u.value === "workflow" ? (o(), i("section", ah, [
        s("div", lh, [
          E[10] || (E[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            loading: f.value,
            onClick: S
          }, {
            default: h(() => [...E[9] || (E[9] = [
              x(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        f.value ? (o(), i("div", ih, "Scanning workflows...")) : p.value ? (o(), i("div", rh, m(p.value), 1)) : k.value.length ? (o(), i("div", ch, [
          (o(!0), i(V, null, ye(k.value, (P) => (o(), R(dc, {
            key: `${P.workflow}:${P.url}`,
            candidate: P,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === P.url,
            onSelect: E[0] || (E[0] = (O) => a("selectSource", O))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (o(), i("div", uh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (o(), i("section", dh, [
        b(uc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: E[1] || (E[1] = (P) => a("selectSource", P))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (o(), i("section", mh, [
        s("div", fh, [
          s("div", null, [
            E[11] || (E[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(mc, {
          modelValue: v.value,
          "onUpdate:modelValue": E[2] || (E[2] = (P) => v.value = P),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === v.value.trim(),
          onSubmit: E[3] || (E[3] = (P) => a("selectSource", P))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), ph = /* @__PURE__ */ Me(vh, [["__scopeId", "data-v-e9633660"]]), gh = {
  key: 0,
  class: "error-message"
}, hh = /* @__PURE__ */ Ie({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { addModelSource: l } = ft(), r = _(n.model), c = _(null), u = _(null);
    $t(() => n.model, (p) => {
      r.value = p;
    });
    async function d(p) {
      if (!(!p || !n.model.hash)) {
        c.value = p, u.value = null;
        try {
          await l(n.model.hash, p), a("saved"), a("close");
        } catch (v) {
          u.value = v instanceof Error ? v.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function f(p) {
      r.value = p, a("hashesComputed");
    }
    return (p, v) => (o(), R(Mt, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: v[1] || (v[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(ph, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: f
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (o(), i("p", gh, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: v[0] || (v[0] = (w) => a("close"))
        }, {
          default: h(() => [...v[2] || (v[2] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), fc = /* @__PURE__ */ Me(hh, [["__scopeId", "data-v-62104cdb"]]), yh = { class: "readiness-body" }, wh = {
  key: 0,
  class: "issue-section"
}, _h = { class: "section-heading" }, kh = { class: "issue-list" }, bh = { class: "issue-main" }, $h = { class: "issue-name" }, Ch = { class: "issue-meta" }, xh = { key: 0 }, Sh = { key: 1 }, Ih = ["disabled", "onClick"], Eh = {
  key: 1,
  class: "issue-note"
}, Th = {
  key: 1,
  class: "issue-section"
}, Mh = { class: "section-heading" }, Ph = { class: "issue-list" }, Rh = { class: "issue-main" }, Dh = { class: "issue-name" }, Nh = { class: "issue-meta" }, Lh = { class: "issue-reason" }, Uh = ["disabled", "onClick"], Oh = {
  key: 1,
  class: "issue-note"
}, Ah = {
  key: 2,
  class: "empty-state"
}, zh = {
  key: 3,
  class: "error-message"
}, Fh = /* @__PURE__ */ Ie({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ft(), c = _(null), u = _(null), d = _(null), f = _(null), p = M(() => n.warnings.models_without_sources), v = M(() => n.warnings.nodes_without_provenance);
    async function w(S) {
      u.value = S, f.value = null;
      try {
        c.value = await l(S);
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to load ${S}`;
      } finally {
        u.value = null;
      }
    }
    async function g(S) {
      d.value = S, f.value = null;
      try {
        const C = await r(S, "optional");
        if (C.status !== "success") {
          f.value = C.message || `Failed to update ${S}`;
          return;
        }
        a("revalidate");
      } catch (C) {
        f.value = C instanceof Error ? C.message : `Failed to update ${S}`;
      } finally {
        d.value = null;
      }
    }
    function k() {
      c.value = null, a("revalidate");
    }
    function $() {
      a("revalidate");
    }
    return (S, C) => (o(), i(V, null, [
      b(Mt, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: C[1] || (C[1] = (I) => a("close"))
      }, {
        header: h(() => [...C[3] || (C[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", yh, [
            p.value.length ? (o(), i("section", wh, [
              s("div", _h, [
                C[4] || (C[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", kh, [
                (o(!0), i(V, null, ye(p.value, (I) => (o(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", bh, [
                    s("div", $h, m(I.filename), 1),
                    s("div", Ch, [
                      I.hash ? (o(), i("span", xh, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (o(), i("span", Sh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (E) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, Ih)) : (o(), i("span", Eh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            v.value.length ? (o(), i("section", Th, [
              s("div", Mh, [
                C[5] || (C[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(v.value.length), 1)
              ]),
              s("div", Ph, [
                (o(!0), i(V, null, ye(v.value, (I) => (o(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Rh, [
                    s("div", Dh, m(I.name), 1),
                    s("div", Nh, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Lh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (o(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (E) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Uh)) : (o(), i("span", Oh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !p.value.length && !v.value.length ? (o(), i("div", Ah, " No reproducibility issues remain. ")) : y("", !0),
            f.value ? (o(), i("div", zh, m(f.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: C[0] || (C[0] = (I) => a("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (o(), R(fc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: C[2] || (C[2] = (I) => c.value = null),
        onSaved: k,
        onHashesComputed: $
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Pl = /* @__PURE__ */ Me(Fh, [["__scopeId", "data-v-03f88a10"]]), Vh = { class: "health-section-header" }, Bh = { class: "suggestions-content" }, Wh = { class: "suggestions-text" }, Gh = { style: { "margin-top": "var(--cg-space-3)" } }, jh = {
  key: 1,
  class: "no-issues-text"
}, Hh = {
  key: 2,
  class: "no-issues-text"
}, qh = /* @__PURE__ */ Ie({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = _(!1), r = _(!1), c = _(!1), u = _(null), d = _(null), f = _(!1), { validateExport: p } = ft();
    function v() {
      l.value = !0;
    }
    function w() {
      l.value = !1, k("view-workflows");
    }
    function g() {
      l.value = !1, k("view-nodes");
    }
    const k = n, $ = _(!1), S = _(!1);
    function C() {
      S.value = !0, k("repair-environment");
    }
    function I() {
      S.value = !1;
    }
    function E() {
      l.value = !1;
    }
    const P = M(() => {
      const X = a.status.workflows.analyzed || [], j = X.filter(
        (pe) => pe.unresolved_models_count > 0 || pe.ambiguous_models_count > 0
      );
      return j.length === 0 && a.status.missing_models_count > 0 ? X.filter((pe) => pe.sync_state === "synced") : j;
    });
    function O() {
      const X = P.value;
      X.length !== 0 && ($.value = !0, k("repair-missing-models", X.map((j) => j.name)));
    }
    function U() {
      $.value = !1;
    }
    t({ resetRepairingState: U, resetRepairingEnvironmentState: I, closeDetailModal: E });
    const F = M(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), D = M(() => a.status.has_changes), W = M(() => {
      const X = a.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ce = M(() => a.status.has_changes || F.value), de = M(() => {
      var X;
      return ((X = u.value) == null ? void 0 : X.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), J = M(
      () => de.value.models_without_sources.length
    ), ve = M(
      () => de.value.nodes_without_provenance.length
    ), K = M(
      () => J.value + ve.value
    ), L = M(
      () => K.value > 0
    ), G = M(() => {
      const X = [];
      if (J.value > 0 && X.push(`${J.value} model${J.value === 1 ? "" : "s"} missing download source`), ve.value > 0) {
        const j = de.value.nodes_without_provenance.filter((be) => be.criticality === "optional").length, pe = ve.value - j;
        pe > 0 && X.push(`${pe} required node${pe === 1 ? "" : "s"} missing portable source`), j > 0 && X.push(`${j} optional node${j === 1 ? "" : "s"} missing portable source`);
      }
      return X;
    });
    async function re() {
      f.value = !0, d.value = null;
      try {
        u.value = await p();
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to check readiness";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      await re();
    }
    $t(
      () => [
        a.setupState,
        a.status.has_changes,
        a.status.workflows.new.length,
        a.status.workflows.modified.length,
        a.status.workflows.deleted.length,
        a.status.missing_models_count,
        a.status.comparison.is_synced,
        a.status.has_legacy_manager
      ],
      () => {
        a.setupState === "managed" && re();
      },
      { immediate: !0 }
    );
    const ue = M(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), me = M(() => a.status.git_changes.has_other_changes), q = M(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter((j) => j.status === "broken")) || [];
    }), Q = M(() => {
      var X;
      return ((X = a.status.workflows.analyzed) == null ? void 0 : X.filter(
        (j) => j.has_path_sync_issues && !j.has_issues
      )) || [];
    }), ae = M(() => q.value.length > 0);
    function Pe(X) {
      const j = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const pe of j) {
        const be = X.match(pe);
        if (be != null && be[1])
          return be[1];
      }
      return null;
    }
    function ge(X) {
      const j = X.map(Pe).filter((pe) => !!pe);
      return [...new Set(j)];
    }
    function ze(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const j = X.slice(0, 2).map((be) => `>= ${be}`).join(", "), pe = X.length > 2;
      return ` (${j}${pe ? ", ..." : ""})`;
    }
    function Ne(X) {
      return X.replace(/uninstallable node mappings?/gi, (j) => j.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function _e(X) {
      const j = Ne(X.issue_summary || "Has issues"), pe = /(?:>=|v?\d+\.\d+)/i.test(j), be = ge(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && be.length > 0 && !pe ? `${X.name} — ${j} (needs ComfyUI ${be.map((je) => `>= ${je}`).join(", ")})` : `${X.name} — ${j}`;
    }
    const De = M(() => q.value.reduce(
      (X, j) => X + (j.nodes_version_gated_count || 0),
      0
    )), he = M(() => {
      const X = q.value.flatMap(
        (j) => ge(j.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ke = M(() => q.value.reduce(
      (X, j) => X + (j.nodes_uninstallable_count || 0),
      0
    )), T = M(() => {
      const X = [];
      return De.value > 0 && X.push(
        `${De.value} require newer ComfyUI${ze(he.value)}`
      ), ke.value > 0 && X.push(`${ke.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), A = M(() => ae.value || Q.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), le = M(() => A.value || L.value || !!d.value), Ee = M(() => {
      const X = [];
      return a.status.workflows.new.length > 0 && X.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && X.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && X.push(`${a.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), we = M(() => {
      var pe, be;
      const X = [], j = a.status.comparison;
      return (pe = j.missing_nodes) != null && pe.length && X.push(`${j.missing_nodes.length} missing node${j.missing_nodes.length === 1 ? "" : "s"}`), (be = j.extra_nodes) != null && be.length && X.push(`${j.extra_nodes.length} untracked node${j.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), Se = M(() => {
      var pe, be;
      const X = [], j = a.status.comparison;
      return (pe = j.extra_nodes) != null && pe.length && (j.extra_nodes.slice(0, 3).forEach((je) => {
        X.push(`Untracked: ${je}`);
      }), j.extra_nodes.length > 3 && X.push(`...and ${j.extra_nodes.length - 3} more untracked`)), (be = j.missing_nodes) != null && be.length && (j.missing_nodes.slice(0, 3).forEach((je) => {
        X.push(`Missing: ${je}`);
      }), j.missing_nodes.length > 3 && X.push(`...and ${j.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, j) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (o(), R(vs, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: j[0] || (j[0] = (pe) => X.$emit("start-setup"))
              }, {
                default: h(() => [...j[15] || (j[15] = [
                  x(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (o(), R(vs, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: j[1] || (j[1] = (pe) => X.$emit("view-environments"))
              }, {
                default: h(() => [...j[16] || (j[16] = [
                  x(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (o(), R(vs, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: j[2] || (j[2] = (pe) => X.$emit("create-environment"))
              }, {
                default: h(() => [...j[17] || (j[17] = [
                  x(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: j[4] || (j[4] = (pe) => r.value = !0),
            onMouseleave: j[5] || (j[5] = (pe) => r.value = !1)
          }, [
            s("div", Vh, [
              b(_s, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...j[18] || (j[18] = [
                  x(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(jd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (o(), R(Re, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: v
                  }, {
                    default: h(() => [...j[19] || (j[19] = [
                      x(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(tf, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, fs({
              left: h(() => [
                e.status.workflows.new.length ? (o(), R(Ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (o(), R(Ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (o(), R(Ds, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(Ds, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: F.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (o(), R(Ds, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (o(), R(Ds, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (o(), R(Ds, {
                  key: 2,
                  icon: "●",
                  count: ue.value,
                  label: ue.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                me.value ? (o(), R(Ds, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                D.value && !W.value && !me.value ? (o(), R(Ds, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                D.value ? y("", !0) : (o(), R(Ds, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              ce.value ? {
                name: "footer",
                fn: h(() => [
                  j[21] || (j[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Bh, [
                    s("span", Wh, m(Ee.value), 1),
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: j[3] || (j[3] = (pe) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...j[20] || (j[20] = [
                        x(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (o(), R(vs, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: j[6] || (j[6] = (pe) => X.$emit("create-branch"))
              }, {
                default: h(() => [...j[22] || (j[22] = [
                  x(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Gh, [
            b(_s, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...j[23] || (j[23] = [
                x(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (o(), i(V, { key: 0 }, [
              q.value.length > 0 ? (o(), R(vs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${q.value.length} workflow${q.value.length === 1 ? "" : "s"} can't run`,
                description: T.value,
                items: q.value.map(_e)
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[7] || (j[7] = (pe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[24] || (j[24] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              Q.value.length > 0 ? (o(), R(vs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${Q.value.length} workflow${Q.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: Q.value.map((pe) => `${pe.name} — ${pe.models_needing_path_sync_count} model path${pe.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[8] || (j[8] = (pe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[25] || (j[25] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ae.value ? (o(), R(vs, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    disabled: $.value,
                    onClick: O
                  }, {
                    default: h(() => [
                      x(m($.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: j[9] || (j[9] = (pe) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...j[26] || (j[26] = [
                      x(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (o(), R(vs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: we.value,
                items: Se.value
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "secondary",
                    size: "sm",
                    onClick: v
                  }, {
                    default: h(() => [...j[27] || (j[27] = [
                      x(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[10] || (j[10] = (pe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[28] || (j[28] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (o(), R(vs, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[11] || (j[11] = (pe) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...j[29] || (j[29] = [
                      x(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              L.value ? (o(), R(vs, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: G.value
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "primary",
                    size: "sm",
                    onClick: j[12] || (j[12] = (pe) => c.value = !0)
                  }, {
                    default: h(() => [...j[30] || (j[30] = [
                      x(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (o(), R(vs, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  b(Re, {
                    variant: "secondary",
                    size: "sm",
                    loading: f.value,
                    onClick: re
                  }, {
                    default: h(() => [...j[31] || (j[31] = [
                      x(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ce.value ? (o(), i("span", jh, "No issues")) : (o(), i("span", Hh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(qv, {
        show: l.value,
        status: e.status,
        "is-repairing": S.value,
        onClose: j[13] || (j[13] = (pe) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: C
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (o(), R(Pl, {
        key: 0,
        warnings: u.value.warnings,
        onClose: j[14] || (j[14] = (pe) => c.value = !1),
        onRevalidate: te
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Kh = /* @__PURE__ */ Me(qh, [["__scopeId", "data-v-f6b165fd"]]);
async function Fo(e, t) {
  const n = await Js(e, t);
  if (!n.ok) {
    const a = await n.json().catch(() => ({}));
    throw new Error(a.error || a.message || `Request failed: ${n.status}`);
  }
  return n.json();
}
function Jh() {
  async function e() {
    try {
      return await Fo("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Fo("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function n() {
    await Fo("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Fo("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: n,
    kill: a
  };
}
const Qh = {
  key: 0,
  class: "base-title-count"
}, Yh = /* @__PURE__ */ Ie({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, n) => (o(), R(xl(`h${e.level}`), {
      class: Fe(["base-title", e.variant])
    }, {
      default: h(() => [
        rt(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (o(), i("span", Qh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), wn = /* @__PURE__ */ Me(Yh, [["__scopeId", "data-v-5a01561d"]]), Xh = ["value", "disabled"], Zh = {
  key: 0,
  value: "",
  disabled: ""
}, ey = ["value"], ty = {
  key: 0,
  class: "base-select-error"
}, sy = /* @__PURE__ */ Ie({
  __name: "BaseSelect",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {},
    fullWidth: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    function t(a) {
      return typeof a == "string" ? a : a.value;
    }
    function n(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (o(), i("div", {
      class: Fe(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Fe(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (o(), i("option", Zh, m(e.placeholder), 1)) : y("", !0),
        (o(!0), i(V, null, ye(e.options, (r) => (o(), i("option", {
          key: t(r),
          value: t(r)
        }, m(n(r)), 9, ey))), 128))
      ], 42, Xh),
      e.error ? (o(), i("span", ty, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Jo = /* @__PURE__ */ Me(sy, [["__scopeId", "data-v-4996bfe0"]]), ny = { class: "popover-header" }, oy = { class: "popover-title" }, ay = { class: "popover-content" }, ly = {
  key: 0,
  class: "popover-actions"
}, iy = /* @__PURE__ */ Ie({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, n) => (o(), R(rs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Ft({ zIndex: e.overlayZIndex }),
        onClick: n[2] || (n[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Ft({ maxWidth: e.maxWidth }),
          onClick: n[1] || (n[1] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", ny, [
            s("h4", oy, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", ay, [
            rt(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (o(), i("div", ly, [
            rt(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Me(iy, [["__scopeId", "data-v-7c1f5547"]]), ry = { class: "detail-section" }, cy = {
  key: 0,
  class: "empty-message"
}, uy = { class: "model-header" }, dy = { class: "model-name" }, my = { class: "model-details" }, fy = { class: "model-row" }, vy = { class: "model-row" }, py = { class: "label" }, gy = {
  key: 0,
  class: "model-row model-row-nodes"
}, hy = { class: "node-list" }, yy = ["onClick"], wy = {
  key: 1,
  class: "model-row"
}, _y = { class: "value" }, ky = {
  key: 2,
  class: "model-row"
}, by = { class: "value error" }, $y = {
  key: 0,
  class: "model-actions"
}, Cy = { class: "detail-section" }, xy = {
  key: 0,
  class: "empty-message"
}, Sy = { class: "node-content" }, Iy = { class: "node-main" }, Ey = { class: "node-name" }, Ty = { class: "node-badge" }, My = {
  key: 0,
  class: "node-version"
}, Py = ["onClick"], Ry = {
  key: 2,
  class: "node-install-queued"
}, Dy = {
  key: 0,
  class: "node-guidance"
}, Ny = { class: "details-footer" }, Ly = { class: "details-footer-actions" }, Uy = /* @__PURE__ */ Ie({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ft(), d = _(null), f = _(!1), p = _(null), v = _(!1), w = _({}), g = _(!1), k = _(/* @__PURE__ */ new Set()), $ = _(/* @__PURE__ */ new Set()), S = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(K) {
      switch (K) {
        case "available":
          return "success";
        case "path_mismatch":
          return "warning";
        case "downloadable":
          return "info";
        case "category_mismatch":
          return "error";
        case "missing":
        default:
          return "error";
      }
    }
    function I(K) {
      switch (K) {
        case "available":
          return "✓ Available";
        case "path_mismatch":
          return "⚠ Path Mismatch";
        case "category_mismatch":
          return "✗ Wrong Directory";
        case "downloadable":
          return "⬇ Downloadable";
        case "missing":
        default:
          return "✗ Missing";
      }
    }
    function E(K) {
      switch (K) {
        case "installed":
          return "installed";
        case "version_gated":
          return "version-gated";
        case "uninstallable":
          return "community-mapped";
        case "missing":
        default:
          return "missing";
      }
    }
    function P(K) {
      switch (K) {
        case "installed":
          return "✓";
        case "version_gated":
          return "⚠";
        case "uninstallable":
          return "⚠";
        case "missing":
        default:
          return "✕";
      }
    }
    function O(K) {
      switch (K) {
        case "installed":
          return "Installed";
        case "version_gated":
          return "Needs newer ComfyUI";
        case "uninstallable":
          return "Community-Mapped";
        case "missing":
        default:
          return "Missing";
      }
    }
    function U(K) {
      if (!K.loaded_by || K.loaded_by.length === 0) return [];
      const L = K.hash || K.filename;
      return k.value.has(L) ? K.loaded_by : K.loaded_by.slice(0, 3);
    }
    function F(K) {
      return k.value.has(K);
    }
    function D(K) {
      k.value.has(K) ? k.value.delete(K) : k.value.add(K), k.value = new Set(k.value);
    }
    async function W() {
      f.value = !0, p.value = null;
      try {
        d.value = await l(n.workflowName);
      } catch (K) {
        p.value = K instanceof Error ? K.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function ce(K, L) {
      w.value[K] = L, v.value = !0;
    }
    async function de(K) {
      try {
        await c(K);
      } catch (L) {
        p.value = L instanceof Error ? L.message : "Failed to open file location";
      }
    }
    async function J(K) {
      if (K.package_id)
        try {
          const L = K.latest_version || "latest";
          await u({
            id: K.package_id,
            version: L,
            selected_version: L,
            mode: "remote",
            channel: "default"
          }), $.value.add(K.package_id);
        } catch (L) {
          p.value = L instanceof Error ? L.message : "Failed to queue node install";
        }
    }
    async function ve() {
      if (!v.value) {
        a("close");
        return;
      }
      f.value = !0, p.value = null;
      try {
        for (const [K, L] of Object.entries(w.value))
          await r(n.workflowName, K, L);
        a("refresh"), a("close");
      } catch (K) {
        p.value = K instanceof Error ? K.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return dt(W), (K, L) => (o(), i(V, null, [
      b(Mt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: p.value || void 0,
        onClose: L[5] || (L[5] = (G) => a("close"))
      }, {
        body: h(() => [
          d.value ? (o(), i(V, { key: 0 }, [
            s("section", ry, [
              b(wn, { variant: "section" }, {
                default: h(() => [
                  x("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (o(), i("div", cy, " No models used in this workflow ")) : y("", !0),
              (o(!0), i(V, null, ye(d.value.models, (G) => {
                var re;
                return o(), i("div", {
                  key: G.hash || G.filename,
                  class: "model-card"
                }, [
                  s("div", uy, [
                    L[7] || (L[7] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", dy, m(G.filename), 1)
                  ]),
                  s("div", my, [
                    s("div", fy, [
                      L[8] || (L[8] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Fe(["value", C(G.status)])
                      }, m(I(G.status)), 3)
                    ]),
                    s("div", vy, [
                      s("span", py, [
                        L[9] || (L[9] = x(" Importance: ", -1)),
                        b(rc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: L[0] || (L[0] = (te) => g.value = !0)
                        })
                      ]),
                      b(Jo, {
                        "model-value": w.value[G.filename] || G.importance,
                        options: S,
                        "onUpdate:modelValue": (te) => ce(G.filename, te)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    G.loaded_by && G.loaded_by.length > 0 ? (o(), i("div", gy, [
                      L[10] || (L[10] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", hy, [
                        (o(!0), i(V, null, ye(U(G), (te, ue) => (o(), i("div", {
                          key: `${te.node_id}-${ue}`,
                          class: "node-reference"
                        }, m(te.node_type) + " (Node #" + m(te.node_id) + ") ", 1))), 128)),
                        G.loaded_by.length > 3 ? (o(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (te) => D(G.hash || G.filename)
                        }, m(F(G.hash || G.filename) ? "▼ Show less" : `▶ View all (${G.loaded_by.length})`), 9, yy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    G.size_mb ? (o(), i("div", wy, [
                      L[11] || (L[11] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", _y, m(G.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    G.has_category_mismatch ? (o(), i("div", ky, [
                      L[14] || (L[14] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", by, [
                        L[12] || (L[12] = x(" In ", -1)),
                        s("code", null, m(G.actual_category) + "/", 1),
                        L[13] || (L[13] = x(" but loader needs ", -1)),
                        s("code", null, m((re = G.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  G.status !== "available" ? (o(), i("div", $y, [
                    G.status === "downloadable" ? (o(), R(Oe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: L[1] || (L[1] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...L[15] || (L[15] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    })) : G.status === "category_mismatch" && G.file_path ? (o(), R(Oe, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => de(G.file_path)
                    }, {
                      default: h(() => [...L[16] || (L[16] = [
                        x(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : G.status !== "path_mismatch" ? (o(), R(Oe, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: L[2] || (L[2] = (te) => a("resolve"))
                    }, {
                      default: h(() => [...L[17] || (L[17] = [
                        x(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Cy, [
              b(wn, { variant: "section" }, {
                default: h(() => [
                  x("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (o(), i("div", xy, " No custom nodes used in this workflow ")) : y("", !0),
              (o(!0), i(V, null, ye(d.value.nodes, (G, re) => (o(), i("div", {
                key: `${G.name}-${G.status}-${re}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Fe(["node-status", E(G.status)])
                }, m(P(G.status)), 3),
                s("div", Sy, [
                  s("div", Iy, [
                    s("span", Ey, m(G.name), 1),
                    s("span", Ty, m(O(G.status)), 1),
                    G.version ? (o(), i("span", My, "v" + m(G.version), 1)) : y("", !0),
                    G.status === "uninstallable" && G.package_id && !$.value.has(G.package_id) ? (o(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (te) => J(G)
                    }, " Install ", 8, Py)) : G.status === "uninstallable" && G.package_id && $.value.has(G.package_id) ? (o(), i("span", Ry, " Queued ")) : y("", !0)
                  ]),
                  G.guidance ? (o(), i("div", Dy, m(G.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          s("div", Ny, [
            b(Oe, {
              variant: "secondary",
              onClick: L[3] || (L[3] = (G) => a("resolve"))
            }, {
              default: h(() => [...L[18] || (L[18] = [
                x(" Review Resolution ", -1)
              ])]),
              _: 1
            }),
            s("div", Ly, [
              b(Oe, {
                variant: "secondary",
                onClick: L[4] || (L[4] = (G) => a("close"))
              }, {
                default: h(() => [...L[19] || (L[19] = [
                  x(" Close ", -1)
                ])]),
                _: 1
              }),
              v.value ? (o(), R(Oe, {
                key: 0,
                variant: "primary",
                onClick: ve
              }, {
                default: h(() => [...L[20] || (L[20] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(Cs, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: L[6] || (L[6] = (G) => g.value = !1)
      }, {
        content: h(() => [...L[21] || (L[21] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              x(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              x(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              x(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Oy = /* @__PURE__ */ Me(Uy, [["__scopeId", "data-v-00cf34e6"]]), pt = $n({
  items: [],
  status: "idle"
});
let Os = null;
function vc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ha(e) {
  return pt.items.find((t) => t.id === e);
}
async function Tn() {
  if (pt.status === "downloading") return;
  const e = pt.items.find((t) => t.status === "queued");
  if (!e) {
    pt.status = "idle";
    return;
  }
  pt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Ay(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    pt.status = "idle", Tn();
  }
}
async function Ay(e) {
  return new Promise((t, n) => {
    Os && (Os.close(), Os = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    Os = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const f = 2e3, p = window.setInterval(() => {
      d || Date.now() - u > f && (e.speed = 0, e.eta = 0);
    }, 250), v = () => {
      window.clearInterval(p);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const k = u, $ = (k - r) / 1e3, S = e.downloaded - c;
            if (S > 0 && $ > 0)
              if (e.speed = S / $, r = k, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const C = e.size - e.downloaded;
                e.eta = C / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, v(), l.close(), Os = null, t();
            break;
          case "error":
            d = !0, v(), l.close(), Os = null, n(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      v(), l.close(), Os = null, d || n(new Error("Connection lost"));
    };
  });
}
async function zy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const n of t.pending_downloads) {
      if (pt.items.some((l) => l.url === n.url && l.filename === n.filename))
        continue;
      const a = {
        id: vc(),
        workflow: n.workflow,
        filename: n.filename,
        url: n.url,
        targetPath: n.target_path,
        size: n.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function qn() {
  function e(S) {
    for (const C of S) {
      if (pt.items.some(
        (P) => P.url === C.url && P.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(P.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const E = {
        id: vc(),
        workflow: C.workflow,
        filename: C.filename,
        url: C.url,
        targetPath: C.targetPath,
        size: C.size || 0,
        type: C.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      pt.items.push(E);
    }
    pt.status === "idle" && Tn();
  }
  async function t(S) {
    const C = Ha(S);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        Os && (Os.close(), Os = null), C.status = "failed", C.error = "Cancelled by user", pt.status = "idle", Tn();
      } else if (C.status === "queued") {
        const I = pt.items.findIndex((E) => E.id === S);
        I >= 0 && pt.items.splice(I, 1);
      }
    }
  }
  function n(S) {
    const C = Ha(S);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, pt.status === "idle" && Tn());
  }
  function a(S) {
    const C = Ha(S);
    !C || C.status !== "paused" || (C.status = "queued", pt.status === "idle" && Tn());
  }
  function l() {
    const S = pt.items.filter((C) => C.status === "paused");
    for (const C of S)
      C.status = "queued";
    pt.status === "idle" && Tn();
  }
  function r(S) {
    const C = pt.items.findIndex((I) => I.id === S);
    C >= 0 && ["completed", "failed", "paused"].includes(pt.items[C].status) && pt.items.splice(C, 1);
  }
  function c() {
    pt.items = pt.items.filter((S) => S.status !== "completed");
  }
  function u() {
    pt.items = pt.items.filter((S) => S.status !== "failed");
  }
  const d = M(
    () => pt.items.find((S) => S.status === "downloading")
  ), f = M(
    () => pt.items.filter((S) => S.status === "queued")
  ), p = M(
    () => pt.items.filter((S) => S.status === "completed")
  ), v = M(
    () => pt.items.filter((S) => S.status === "failed")
  ), w = M(
    () => pt.items.filter((S) => S.status === "paused")
  ), g = M(() => pt.items.length > 0), k = M(
    () => pt.items.filter((S) => S.status === "queued" || S.status === "downloading").length
  ), $ = M(
    () => pt.items.some((S) => S.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Yo(pt),
    // Computed
    currentDownload: d,
    queuedItems: f,
    completedItems: p,
    failedItems: v,
    pausedItems: w,
    hasItems: g,
    activeCount: k,
    hasPaused: $,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: n,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: zy
  };
}
function pc() {
  const e = _(null), t = _(null), n = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(I, E) {
    const P = await Js(I, E);
    if (!P.ok) {
      const O = await P.json().catch(() => ({})), U = O.error || O.message || `Request failed: ${P.status}`;
      throw new Error(U);
    }
    return P.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Xn() || (E = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), E.nodes.version_gated = E.nodes.version_gated || [], E.nodes.uninstallable = E.nodes.uninstallable || [], E.node_guidance = E.node_guidance || {}, E.package_aliases = E.package_aliases || {}, e.value = E, E;
    } catch (E) {
      const P = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = P, E;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, E, P, O) {
    l.value = !0, r.value = null;
    try {
      let U;
      if (!Xn()) {
        const F = Object.fromEntries(E), D = Object.fromEntries(P), W = O ? Array.from(O) : [];
        U = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: F,
              model_choices: D,
              skipped_packages: W
            })
          }
        );
      }
      return t.value = U, U;
    } catch (U) {
      const F = U instanceof Error ? U.message : "Unknown error occurred";
      throw r.value = F, U;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), n.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  async function p(I, E = 10) {
    l.value = !0, r.value = null;
    try {
      let P;
      return Xn() || (P = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: E })
        }
      )), a.value = P.results, P.results;
    } catch (P) {
      const O = P instanceof Error ? P.message : "Unknown error occurred";
      throw r.value = O, P;
    } finally {
      l.value = !1;
    }
  }
  const v = $n({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: [],
    nodesMarkedOptional: [],
    nodesMapped: [],
    modelPathsSynced: 0
  });
  function w() {
    v.phase = "idle", v.currentFile = void 0, v.currentFileIndex = void 0, v.totalFiles = void 0, v.bytesDownloaded = void 0, v.bytesTotal = void 0, v.completedFiles = [], v.nodesToInstall = [], v.nodesInstalled = [], v.nodesMarkedOptional = [], v.nodesMapped = [], v.modelPathsSynced = 0, v.dependencyReviews = [], v.installError = void 0, v.needsRestart = void 0, v.error = void 0, v.nodeInstallProgress = void 0;
  }
  async function g(I) {
    v.phase = "installing", v.nodesInstalled = [], v.installError = void 0, v.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Xn(), await k(I);
    } catch (E) {
      const P = E instanceof Error ? E.message : "Failed to install nodes";
      throw v.installError = P, E;
    }
  }
  async function k(I) {
    var O, U, F;
    const E = await c(
      `/v2/comfygit/workflow/${I}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: v.nodesToInstall
        })
      }
    );
    if (v.nodeInstallProgress) {
      v.nodeInstallProgress.totalNodes = v.nodesToInstall.length;
      const D = new Map(((O = E.failed) == null ? void 0 : O.map((ce) => [ce.node_id, ce.error])) || []), W = new Map((E.dependency_review_required || []).map((ce) => [ce.node_id, ce]));
      for (let ce = 0; ce < v.nodesToInstall.length; ce++) {
        const de = v.nodesToInstall[ce], J = D.get(de), ve = W.get(de);
        v.nodeInstallProgress.completedNodes.push({
          node_id: de,
          success: !J && !ve,
          error: J || (ve == null ? void 0 : ve.error),
          dependency_review: ve == null ? void 0 : ve.dependency_review
        });
      }
    }
    v.nodesInstalled = E.nodes_installed, v.dependencyReviews = E.dependency_review_required || [], v.needsRestart = E.nodes_installed.length > 0;
    const P = (((U = E.failed) == null ? void 0 : U.length) || 0) + (((F = E.dependency_review_required) == null ? void 0 : F.length) || 0);
    return P > 0 && (v.installError = `${P} package(s) need attention`), E;
  }
  async function $(I, E, P) {
    w(), v.phase = "resolving", r.value = null;
    const O = Object.fromEntries(E), U = Object.fromEntries(P);
    try {
      const F = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: O,
          model_choices: U
        })
      });
      if (!F.ok)
        throw new Error(`Request failed: ${F.status}`);
      if (!F.body)
        throw new Error("No response body");
      const D = F.body.getReader(), W = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: de, value: J } = await D.read();
        if (de) break;
        ce += W.decode(J, { stream: !0 });
        const ve = ce.split(`

`);
        ce = ve.pop() || "";
        for (const K of ve) {
          if (!K.trim()) continue;
          const L = K.split(`
`);
          let G = "", re = "";
          for (const te of L)
            te.startsWith("event: ") ? G = te.slice(7) : te.startsWith("data: ") && (re = te.slice(6));
          if (re)
            try {
              const te = JSON.parse(re);
              S(G, te);
            } catch (te) {
              console.warn("Failed to parse SSE event:", te);
            }
        }
      }
    } catch (F) {
      const D = F instanceof Error ? F.message : "Unknown error occurred";
      throw r.value = D, v.error = D, v.phase = "error", F;
    }
  }
  function S(I, E) {
    switch (I) {
      case "batch_start":
        v.phase = "downloading", v.totalFiles = E.total;
        break;
      case "file_start":
        v.currentFile = E.filename, v.currentFileIndex = E.index, v.bytesDownloaded = 0, v.bytesTotal = void 0;
        break;
      case "file_progress":
        v.bytesDownloaded = E.downloaded, v.bytesTotal = E.total;
        break;
      case "file_complete":
        v.completedFiles.push({
          filename: E.filename,
          success: E.success,
          error: E.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        v.nodesToInstall = E.nodes_to_install || [], v.nodesMarkedOptional = E.nodes_marked_optional || [], v.nodesMapped = E.nodes_mapped || [], v.modelPathsSynced = E.model_paths_synced || 0, E.download_results && (v.completedFiles = E.download_results), v.phase = "complete";
        break;
      case "error":
        v.error = E.message, v.phase = "error", r.value = E.message;
        break;
    }
  }
  function C(I, E) {
    const { addToQueue: P } = qn(), O = E.filter((U) => U.url && U.target_path).map((U) => ({
      workflow: I,
      filename: U.filename,
      url: U.url,
      targetPath: U.target_path,
      size: U.size || 0,
      type: "model"
    }));
    return O.length > 0 && P(O), O.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: n,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: v,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: $,
    installNodes: g,
    searchNodes: f,
    searchModels: p,
    resetProgress: w,
    queueModelDownloads: C
  };
}
const Fy = { class: "resolution-stepper" }, Vy = { class: "stepper-header" }, By = ["onClick"], Wy = {
  key: 0,
  class: "step-icon"
}, Gy = {
  key: 1,
  class: "step-number"
}, jy = { class: "step-label" }, Hy = {
  key: 0,
  class: "step-connector"
}, qy = { class: "stepper-content" }, Ky = /* @__PURE__ */ Ie({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(f) {
      var p;
      if ((p = n.stepStats) != null && p[f]) {
        const v = n.stepStats[f];
        return v.total > 0 && v.resolved === v.total;
      }
      return n.completedSteps.includes(f);
    }
    function r(f) {
      var p;
      if ((p = n.stepStats) != null && p[f]) {
        const v = n.stepStats[f];
        return v.resolved > 0 && v.resolved < v.total;
      }
      return !1;
    }
    function c(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function u(f) {
      return !1;
    }
    function d(f) {
      a("step-change", f);
    }
    return (f, p) => (o(), i("div", Fy, [
      s("div", Vy, [
        (o(!0), i(V, null, ye(e.steps, (v, w) => (o(), i("div", {
          key: v.id,
          class: Fe(["step", {
            active: e.currentStep === v.id,
            completed: l(v.id),
            "in-progress": r(v.id),
            disabled: u(v.id)
          }]),
          onClick: (g) => d(v.id)
        }, [
          s("div", {
            class: Fe(["step-indicator", c(v.id)])
          }, [
            l(v.id) ? (o(), i("span", Wy, "✓")) : (o(), i("span", Gy, m(w + 1), 1))
          ], 2),
          s("div", jy, m(v.label), 1),
          w < e.steps.length - 1 ? (o(), i("div", Hy)) : y("", !0)
        ], 10, By))), 128))
      ]),
      s("div", qy, [
        rt(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Jy = /* @__PURE__ */ Me(Ky, [["__scopeId", "data-v-2a7b3af8"]]), Qy = { class: "item-body" }, Yy = {
  key: 0,
  class: "resolved-state"
}, Xy = { class: "resolved-message" }, Zy = {
  key: 1,
  class: "unresolved"
}, e1 = {
  key: 0,
  class: "installed-packs-section"
}, t1 = { class: "installed-packs-list" }, s1 = ["onClick"], n1 = { class: "installed-pack-name" }, o1 = { class: "installed-pack-source" }, a1 = { class: "action-buttons" }, l1 = /* @__PURE__ */ Ie({
  __name: "NodeResolutionItem",
  props: {
    nodeType: {},
    packageId: {},
    confidence: {},
    matchType: {},
    description: {},
    repository: {},
    source: {},
    isInstalled: { type: Boolean },
    isOptional: { type: Boolean },
    isSelected: { type: Boolean },
    hasMultipleOptions: { type: Boolean },
    choice: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "clear-choice", "installed-pack-selected"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => !!n.choice), r = M(() => {
      var p;
      return (p = n.choice) == null ? void 0 : p.action;
    }), c = M(() => {
      var p;
      return (p = n.choice) == null ? void 0 : p.package_id;
    }), u = M(() => n.installedNodePacks || []), d = M(() => {
      var p, v;
      switch (r.value) {
        case "install":
          return ((p = n.choice) == null ? void 0 : p.install_source) === "git" ? c.value ? `Will install ${c.value} from GitHub` : "Will install from GitHub" : ((v = n.choice) == null ? void 0 : v.install_source) === "registry" ? c.value ? `Will install ${c.value} from Registry` : "Will install from Registry" : c.value ? `Will install ${c.value}` : "Will install selected package";
        case "map-installed":
          return c.value ? `Mapped to ${c.value}` : "Mapped to installed node pack";
        case "manual":
          return c.value ? `Will use ${c.value}` : "Will use manual package";
        case "optional":
          return "Marked optional";
        case "skip":
          return "Will be skipped";
        default:
          return "Decision saved";
      }
    });
    function f(p) {
      switch (p) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return p || "unknown";
      }
    }
    return (p, v) => (o(), i("div", {
      class: Fe(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: l.value }])
    }, [
      s("div", Qy, [
        l.value ? (o(), i("div", Yy, [
          s("span", Xy, m(d.value), 1),
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...v[4] || (v[4] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : (o(), i("div", Zy, [
          u.value.length > 0 ? (o(), i("div", e1, [
            v[5] || (v[5] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", t1, [
              (o(!0), i(V, null, ye(u.value, (w) => (o(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", n1, m(w.package_id), 1),
                s("span", o1, m(f(w.source)), 1)
              ], 8, s1))), 128))
            ])
          ])) : y("", !0),
          s("div", a1, [
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[1] || (v[1] = (w) => a("search"))
            }, {
              default: h(() => [...v[6] || (v[6] = [
                x(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[2] || (v[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...v[7] || (v[7] = [
                x(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...v[8] || (v[8] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), i1 = /* @__PURE__ */ Me(l1, [["__scopeId", "data-v-4338b305"]]), r1 = { class: "item-navigator" }, c1 = { class: "nav-item-info" }, u1 = ["title"], d1 = { class: "nav-controls" }, m1 = { class: "nav-arrows" }, f1 = ["disabled"], v1 = ["disabled"], p1 = { class: "nav-position" }, g1 = /* @__PURE__ */ Ie({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", r1, [
      s("div", c1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, u1)
      ]),
      s("div", d1, [
        s("div", m1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => n("prev")),
            title: "Previous item"
          }, " ← ", 8, f1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => n("next")),
            title: "Next item"
          }, " → ", 8, v1)
        ]),
        s("span", p1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), gc = /* @__PURE__ */ Me(g1, [["__scopeId", "data-v-74af7920"]]), h1 = { class: "node-resolution-step" }, y1 = {
  key: 0,
  class: "auto-resolved-section"
}, w1 = { class: "section-header" }, _1 = { class: "stat-badge" }, k1 = { class: "resolved-packages-list" }, b1 = { class: "package-info" }, $1 = { class: "package-id" }, C1 = { class: "node-count" }, x1 = { class: "package-actions" }, S1 = {
  key: 0,
  class: "status-badge install"
}, I1 = {
  key: 1,
  class: "status-badge skip"
}, E1 = ["onClick"], T1 = {
  key: 1,
  class: "section-divider"
}, M1 = { class: "step-header" }, P1 = { class: "stat-badge" }, R1 = {
  key: 1,
  class: "step-body"
}, D1 = {
  key: 3,
  class: "empty-state"
}, N1 = { class: "node-modal-body" }, L1 = { class: "node-search-results-container" }, U1 = {
  key: 0,
  class: "node-search-results"
}, O1 = { class: "node-result-header" }, A1 = { class: "node-result-title" }, z1 = { class: "node-result-package-id" }, F1 = {
  key: 0,
  class: "node-result-display-name"
}, V1 = {
  key: 0,
  class: "node-result-stats",
  "aria-label": "Package popularity"
}, B1 = {
  key: 0,
  class: "node-result-stat"
}, W1 = {
  key: 1,
  class: "node-result-stat"
}, G1 = {
  key: 0,
  class: "node-result-description"
}, j1 = { class: "node-result-actions" }, H1 = ["onClick"], q1 = ["onClick"], K1 = {
  key: 1,
  class: "node-empty-state"
}, J1 = {
  key: 2,
  class: "node-empty-state"
}, Q1 = {
  key: 3,
  class: "node-empty-state"
}, Y1 = { class: "node-manual-entry-modal" }, X1 = { class: "node-modal-body" }, Z1 = { class: "node-modal-actions" }, ew = /* @__PURE__ */ Ie({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "installed-pack-selected", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const n = e, a = t, { searchNodes: l } = pc(), r = _(0), c = _(!1), u = _(!1), d = _(""), f = _(""), p = _([]), v = _(!1), w = _(!1);
    function g() {
      w.value && de(), w.value = !1;
    }
    const k = M(() => n.nodes[r.value]), $ = M(() => n.nodes.filter((q) => n.nodeChoices.has(q.node_type)).length), S = M(() => n.autoResolvedPackages.filter((q) => !n.skippedPackages.has(q.package_id)).length);
    function C(q) {
      return n.skippedPackages.has(q);
    }
    function I(q) {
      a("package-skip", q);
    }
    function E(q) {
      q >= 0 && q < n.nodes.length && (r.value = q);
    }
    function P() {
      var q;
      for (let Q = r.value + 1; Q < n.nodes.length; Q++) {
        const ae = n.nodes[Q];
        if (!((q = n.nodeChoices) != null && q.has(ae.node_type))) {
          E(Q);
          return;
        }
      }
    }
    function O() {
      k.value && (a("mark-optional", k.value.node_type), Wt(() => P()));
    }
    function U() {
      k.value && (a("skip", k.value.node_type), Wt(() => P()));
    }
    function F() {
      k.value && a("clear-choice", k.value.node_type);
    }
    function D() {
      k.value && (d.value = k.value.node_type, p.value = [], c.value = !0, L(d.value));
    }
    function W() {
      f.value = "", u.value = !0;
    }
    function ce(q) {
      k.value && (a("installed-pack-selected", k.value.node_type, q), Wt(() => P()));
    }
    function de() {
      c.value = !1, d.value = "", p.value = [];
    }
    function J() {
      u.value = !1, f.value = "";
    }
    let ve = null;
    function K() {
      ve && clearTimeout(ve), ve = setTimeout(() => {
        L(d.value);
      }, 300);
    }
    async function L(q) {
      if (!q.trim()) {
        p.value = [];
        return;
      }
      v.value = !0;
      try {
        p.value = await l(q, 10);
      } catch {
        p.value = [];
      } finally {
        v.value = !1;
      }
    }
    function G(q) {
      k.value && (a("manual-entry", k.value.node_type, q.package_id, {
        install_source: "registry",
        version: q.registry_version || null
      }), de(), Wt(() => P()));
    }
    function re(q) {
      !k.value || !q.repository || (a("manual-entry", k.value.node_type, q.package_id, {
        install_source: "git",
        repository: q.repository
      }), de(), Wt(() => P()));
    }
    function te(q) {
      return !!q.github_stars || !!q.downloads;
    }
    function ue(q) {
      return q ? Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: q >= 1e3 ? 1 : 0
      }).format(q) : "";
    }
    function me() {
      !k.value || !f.value.trim() || (a("manual-entry", k.value.node_type, f.value.trim()), J(), Wt(() => P()));
    }
    return (q, Q) => {
      var ae, Pe;
      return o(), i("div", h1, [
        e.autoResolvedPackages.length > 0 ? (o(), i("div", y1, [
          s("div", w1, [
            Q[6] || (Q[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", _1, m(S.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", k1, [
            (o(!0), i(V, null, ye(e.autoResolvedPackages, (ge) => (o(), i("div", {
              key: ge.package_id,
              class: "resolved-package-item"
            }, [
              s("div", b1, [
                s("code", $1, m(ge.package_id), 1),
                s("span", C1, m(ge.node_types_count) + " node type" + m(ge.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", x1, [
                C(ge.package_id) ? (o(), i("span", I1, " SKIPPED ")) : (o(), i("span", S1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (ze) => I(ge.package_id)
                }, m(C(ge.package_id) ? "Include" : "Skip"), 9, E1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (o(), i("div", T1)) : y("", !0),
        e.nodes.length > 0 ? (o(), i(V, { key: 2 }, [
          s("div", M1, [
            Q[7] || (Q[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", P1, m($.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          k.value ? (o(), R(gc, {
            key: 0,
            "item-name": k.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: Q[0] || (Q[0] = (ge) => E(r.value - 1)),
            onNext: Q[1] || (Q[1] = (ge) => E(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          k.value ? (o(), i("div", R1, [
            b(i1, {
              "node-type": k.value.node_type,
              "has-multiple-options": !!((ae = k.value.options) != null && ae.length),
              choice: (Pe = e.nodeChoices) == null ? void 0 : Pe.get(k.value.node_type),
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: O,
              onSkip: U,
              onManualEntry: W,
              onSearch: D,
              onClearChoice: F,
              onInstalledPackSelected: ce
            }, null, 8, ["node-type", "has-multiple-options", "choice", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (o(), i("div", D1, [...Q[8] || (Q[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (o(), R(rs, { to: "body" }, [
          c.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: Q[4] || (Q[4] = bt((ge) => w.value = !0, ["self"])),
            onMouseup: bt(g, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: Q[3] || (Q[3] = (ge) => w.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                Q[9] || (Q[9] = s("h4", null, "Search Node Registry", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: de
                }, "✕")
              ]),
              s("div", N1, [
                b(Pt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": Q[2] || (Q[2] = (ge) => d.value = ge),
                  placeholder: "Search registry by node type or package name...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                s("div", L1, [
                  p.value.length > 0 ? (o(), i("div", U1, [
                    (o(!0), i(V, null, ye(p.value, (ge) => (o(), i("div", {
                      key: ge.package_id,
                      class: "node-search-result-item"
                    }, [
                      s("div", O1, [
                        s("div", A1, [
                          s("code", z1, m(ge.package_id), 1),
                          ge.display_name && ge.display_name !== ge.package_id ? (o(), i("span", F1, m(ge.display_name), 1)) : y("", !0)
                        ]),
                        te(ge) ? (o(), i("div", V1, [
                          ge.github_stars ? (o(), i("span", B1, " ★ " + m(ue(ge.github_stars)), 1)) : y("", !0),
                          ge.downloads ? (o(), i("span", W1, " ↓ " + m(ue(ge.downloads)), 1)) : y("", !0)
                        ])) : y("", !0)
                      ]),
                      ge.description ? (o(), i("div", G1, m(ge.description), 1)) : y("", !0),
                      s("div", j1, [
                        ge.can_install_registry ? (o(), i("button", {
                          key: 0,
                          type: "button",
                          class: "node-result-action",
                          onClick: (ze) => G(ge)
                        }, " Install from Registry ", 8, H1)) : y("", !0),
                        ge.can_install_git ? (o(), i("button", {
                          key: 1,
                          type: "button",
                          class: "node-result-action secondary",
                          onClick: (ze) => re(ge)
                        }, " Install from GitHub ", 8, q1)) : y("", !0)
                      ])
                    ]))), 128))
                  ])) : v.value ? (o(), i("div", K1, "Searching...")) : d.value ? (o(), i("div", J1, 'No packages found matching "' + m(d.value) + '"', 1)) : (o(), i("div", Q1, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (o(), R(rs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", Y1, [
              s("div", { class: "node-modal-header" }, [
                Q[10] || (Q[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", X1, [
                b(Pt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": Q[5] || (Q[5] = (ge) => f.value = ge),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Z1, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: J
                  }, {
                    default: h(() => [...Q[11] || (Q[11] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: me
                  }, {
                    default: h(() => [...Q[12] || (Q[12] = [
                      x(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : y("", !0)
        ]))
      ]);
    };
  }
}), tw = /* @__PURE__ */ Me(ew, [["__scopeId", "data-v-a85bb4b7"]]), sw = /* @__PURE__ */ Ie({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = M(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = M(() => `confidence-${n.value}`), l = M(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : n.value.charAt(0).toUpperCase() + n.value.slice(1));
    return (r, c) => (o(), i("span", {
      class: Fe(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), nw = /* @__PURE__ */ Me(sw, [["__scopeId", "data-v-17ec4b80"]]), ow = { class: "node-info" }, aw = { class: "node-info-text" }, lw = { class: "item-body" }, iw = {
  key: 0,
  class: "resolved-state"
}, rw = {
  key: 1,
  class: "multiple-options"
}, cw = { class: "options-list" }, uw = ["onClick"], dw = ["name", "value", "checked", "onChange"], mw = { class: "option-content" }, fw = { class: "option-header" }, vw = { class: "option-filename" }, pw = { class: "option-meta" }, gw = { class: "option-size" }, hw = { class: "option-category" }, yw = { class: "option-path" }, ww = { class: "action-buttons" }, _w = {
  key: 2,
  class: "unresolved"
}, kw = { class: "action-buttons" }, bw = /* @__PURE__ */ Ie({
  __name: "ModelResolutionItem",
  props: {
    filename: {},
    nodeType: {},
    category: {},
    size: {},
    hash: {},
    confidence: {},
    matchType: {},
    isOptional: { type: Boolean },
    hasMultipleOptions: { type: Boolean },
    options: {},
    selectedOptionIndex: {},
    choice: {},
    status: {},
    statusLabel: {}
  },
  emits: ["mark-optional", "skip", "download-url", "search", "option-selected", "clear-choice"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => !!n.choice);
    M(() => {
      var d;
      return (d = n.choice) == null ? void 0 : d.action;
    }), M(() => {
      var d, f;
      return ((f = (d = n.choice) == null ? void 0 : d.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = M(() => {
      switch (n.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "download":
        case "select":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    function c(d) {
      a("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const f = d / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, f) => (o(), i("div", {
      class: Fe(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", ow, [
        s("span", aw, [
          f[7] || (f[7] = x("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (o(), i("span", {
          key: 0,
          class: Fe(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", lw, [
        l.value ? (o(), i("div", iw, [
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (p) => a("clear-choice"))
          }, {
            default: h(() => [...f[8] || (f[8] = [
              x(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (o(), i("div", rw, [
          f[12] || (f[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", cw, [
            (o(!0), i(V, null, ye(e.options, (p, v) => (o(), i("label", {
              key: p.model.hash,
              class: Fe(["option-card", { selected: e.selectedOptionIndex === v }]),
              onClick: (w) => c(v)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: v,
                checked: e.selectedOptionIndex === v,
                onChange: (w) => c(v)
              }, null, 40, dw),
              s("div", mw, [
                s("div", fw, [
                  s("span", vw, m(p.model.filename), 1),
                  b(nw, {
                    confidence: p.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", pw, [
                  s("span", gw, m(u(p.model.size)), 1),
                  s("span", hw, m(p.model.category), 1)
                ]),
                s("div", yw, m(p.model.relative_path), 1)
              ])
            ], 10, uw))), 128))
          ]),
          s("div", ww, [
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (p) => a("search"))
            }, {
              default: h(() => [...f[9] || (f[9] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (p) => a("download-url"))
            }, {
              default: h(() => [...f[10] || (f[10] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (p) => a("mark-optional"))
            }, {
              default: h(() => [...f[11] || (f[11] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (o(), i("div", _w, [
          f[16] || (f[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", kw, [
            b(Oe, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (p) => a("search"))
            }, {
              default: h(() => [...f[13] || (f[13] = [
                x(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (p) => a("download-url"))
            }, {
              default: h(() => [...f[14] || (f[14] = [
                x(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (p) => a("mark-optional"))
            }, {
              default: h(() => [...f[15] || (f[15] = [
                x(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), $w = /* @__PURE__ */ Me(bw, [["__scopeId", "data-v-8a82fefa"]]), Cw = { class: "model-resolution-step" }, xw = { class: "step-header" }, Sw = { class: "step-info" }, Iw = { class: "step-title" }, Ew = { class: "step-description" }, Tw = { class: "stat-badge" }, Mw = {
  key: 1,
  class: "step-body"
}, Pw = {
  key: 2,
  class: "empty-state"
}, Rw = { class: "model-search-modal" }, Dw = { class: "model-modal-body" }, Nw = {
  key: 0,
  class: "model-search-results"
}, Lw = ["onClick"], Uw = { class: "model-result-header" }, Ow = { class: "model-result-filename" }, Aw = { class: "model-result-meta" }, zw = { class: "model-result-category" }, Fw = { class: "model-result-size" }, Vw = {
  key: 0,
  class: "model-result-path"
}, Bw = {
  key: 1,
  class: "model-no-results"
}, Ww = {
  key: 2,
  class: "model-searching"
}, Gw = { class: "model-download-url-modal" }, jw = { class: "model-modal-body" }, Hw = { class: "model-input-group" }, qw = { class: "model-input-group" }, Kw = { class: "model-modal-actions" }, Jw = /* @__PURE__ */ Ie({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
    const n = {
      CheckpointLoaderSimple: ["checkpoints"],
      CheckpointLoader: ["checkpoints"],
      unCLIPCheckpointLoader: ["checkpoints"],
      ImageOnlyCheckpointLoader: ["checkpoints"],
      VAELoader: ["vae"],
      LoraLoader: ["loras"],
      LoraLoaderModelOnly: ["loras"],
      CLIPLoader: ["clip"],
      DualCLIPLoader: ["clip"],
      TripleCLIPLoader: ["clip"],
      QuadrupleCLIPLoader: ["clip"],
      UNETLoader: ["diffusion_models"],
      CLIPVisionLoader: ["clip_vision"],
      ControlNetLoader: ["controlnet"],
      DiffControlNetLoader: ["controlnet"],
      StyleModelLoader: ["style_models"],
      UpscaleModelLoader: ["upscale_models"],
      GLIGENLoader: ["gligen"],
      HypernetworkLoader: ["hypernetworks"],
      PhotoMakerLoader: ["photomaker"],
      DiffusersLoader: ["diffusers"]
    };
    function a(te) {
      var ue;
      return te && ((ue = n[te]) == null ? void 0 : ue[0]) || null;
    }
    const l = e, r = t, c = _(0), u = _(!1), d = _(!1), f = _(""), p = _(""), v = _(""), w = _([]), g = _(!1), k = M(() => l.models[c.value]), $ = M(() => l.models.some((te) => te.is_download_intent)), S = M(() => l.models.filter(
      (te) => l.modelChoices.has(te.filename) || te.is_download_intent
    ).length), C = M(() => {
      var ue;
      if (!k.value) return "";
      const te = a((ue = k.value.reference) == null ? void 0 : ue.node_type);
      return te ? `${te}/${k.value.filename}` : "";
    }), I = M(() => {
      var ue;
      if (!k.value) return "not-found";
      const te = l.modelChoices.get(k.value.filename);
      if (te)
        switch (te.action) {
          case "select":
            return "select";
          case "download":
            return "download";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
          case "cancel_download":
            return "skip";
        }
      return k.value.is_download_intent ? "download" : (ue = k.value.options) != null && ue.length ? "ambiguous" : "not-found";
    }), E = M(() => {
      var ue, me;
      if (!k.value) return;
      const te = l.modelChoices.get(k.value.filename);
      if (te)
        switch (te.action) {
          case "select":
            return (ue = te.selected_model) != null && ue.filename ? `→ ${te.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return k.value.is_download_intent ? "Pending Download" : (me = k.value.options) != null && me.length ? `${k.value.options.length} matches` : "Not Found";
    });
    function P(te) {
      te >= 0 && te < l.models.length && (c.value = te);
    }
    function O() {
      var te;
      for (let ue = c.value + 1; ue < l.models.length; ue++) {
        const me = l.models[ue];
        if (!me.is_download_intent && !((te = l.modelChoices) != null && te.has(me.filename))) {
          P(ue);
          return;
        }
      }
    }
    function U() {
      k.value && (r("mark-optional", k.value.filename), Wt(() => O()));
    }
    function F() {
      k.value && (r("skip", k.value.filename), Wt(() => O()));
    }
    function D(te) {
      k.value && (r("option-selected", k.value.filename, te), Wt(() => O()));
    }
    function W() {
      k.value && r("clear-choice", k.value.filename);
    }
    function ce() {
      k.value && (f.value = k.value.filename, u.value = !0);
    }
    function de() {
      k.value && (p.value = k.value.download_source || "", v.value = k.value.target_path || C.value, d.value = !0);
    }
    function J() {
      u.value = !1, f.value = "", w.value = [];
    }
    function ve() {
      d.value = !1, p.value = "", v.value = "";
    }
    function K() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function L(te) {
      k.value && (J(), Wt(() => O()));
    }
    function G() {
      !k.value || !p.value.trim() || (r("download-url", k.value.filename, p.value.trim(), v.value.trim() || void 0), ve(), Wt(() => O()));
    }
    function re(te) {
      if (!te) return "Unknown";
      const ue = te / (1024 * 1024 * 1024);
      return ue >= 1 ? `${ue.toFixed(2)} GB` : `${(te / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (te, ue) => {
      var me, q, Q;
      return o(), i("div", Cw, [
        s("div", xw, [
          s("div", Sw, [
            s("h3", Iw, m($.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Ew, m($.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Tw, m(S.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        k.value ? (o(), R(gc, {
          key: 0,
          "item-name": k.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ue[0] || (ue[0] = (ae) => P(c.value - 1)),
          onNext: ue[1] || (ue[1] = (ae) => P(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        k.value ? (o(), i("div", Mw, [
          b($w, {
            filename: k.value.filename,
            "node-type": ((me = k.value.reference) == null ? void 0 : me.node_type) || "Unknown",
            "has-multiple-options": !!((q = k.value.options) != null && q.length),
            options: k.value.options,
            choice: (Q = e.modelChoices) == null ? void 0 : Q.get(k.value.filename),
            status: I.value,
            "status-label": E.value,
            onMarkOptional: U,
            onSkip: F,
            onDownloadUrl: de,
            onSearch: ce,
            onOptionSelected: D,
            onClearChoice: W
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (o(), i("div", Pw, [...ue[5] || (ue[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (o(), R(rs, { to: "body" }, [
          u.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(J, ["self"])
          }, [
            s("div", Rw, [
              s("div", { class: "model-modal-header" }, [
                ue[6] || (ue[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: J
                }, "✕")
              ]),
              s("div", Dw, [
                b(Pt, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ue[2] || (ue[2] = (ae) => f.value = ae),
                  placeholder: "Search by filename, category...",
                  onInput: K
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (o(), i("div", Nw, [
                  (o(!0), i(V, null, ye(w.value, (ae) => (o(), i("div", {
                    key: ae.hash,
                    class: "model-search-result-item",
                    onClick: (Pe) => L()
                  }, [
                    s("div", Uw, [
                      s("code", Ow, m(ae.filename), 1)
                    ]),
                    s("div", Aw, [
                      s("span", zw, m(ae.category), 1),
                      s("span", Fw, m(re(ae.size)), 1)
                    ]),
                    ae.relative_path ? (o(), i("div", Vw, m(ae.relative_path), 1)) : y("", !0)
                  ], 8, Lw))), 128))
                ])) : f.value && !g.value ? (o(), i("div", Bw, ' No models found matching "' + m(f.value) + '" ', 1)) : y("", !0),
                g.value ? (o(), i("div", Ww, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (o(), R(rs, { to: "body" }, [
          d.value ? (o(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: bt(ve, ["self"])
          }, [
            s("div", Gw, [
              s("div", { class: "model-modal-header" }, [
                ue[7] || (ue[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: ve
                }, "✕")
              ]),
              s("div", jw, [
                s("div", Hw, [
                  ue[8] || (ue[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(Pt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": ue[3] || (ue[3] = (ae) => p.value = ae),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", qw, [
                  ue[9] || (ue[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(Pt, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ue[4] || (ue[4] = (ae) => v.value = ae),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Kw, [
                  b(Oe, {
                    variant: "secondary",
                    onClick: ve
                  }, {
                    default: h(() => [...ue[10] || (ue[10] = [
                      x("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Oe, {
                    variant: "primary",
                    disabled: !p.value.trim() || !v.value.trim(),
                    onClick: G
                  }, {
                    default: h(() => [...ue[11] || (ue[11] = [
                      x(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : y("", !0)
        ]))
      ]);
    };
  }
}), Qw = /* @__PURE__ */ Me(Jw, [["__scopeId", "data-v-5c700bfa"]]), Yw = {
  key: 0,
  class: "dependency-preview"
}, Xw = { class: "intro" }, Zw = { class: "summary-strip" }, e0 = { class: "summary-item" }, t0 = { class: "summary-item danger" }, s0 = { class: "summary-item" }, n0 = { class: "summary-item" }, o0 = { class: "summary-item" }, a0 = {
  key: 0,
  class: "requirements"
}, l0 = { class: "chips" }, i0 = { class: "changes" }, r0 = {
  key: 0,
  class: "empty-state"
}, c0 = {
  key: 1,
  class: "change-list"
}, u0 = { class: "package-name" }, d0 = { class: "change-kind" }, m0 = { class: "version current" }, f0 = { class: "version proposed" }, v0 = /* @__PURE__ */ Ie({
  __name: "DependencyReviewPreviewModal",
  props: {
    loading: { type: Boolean },
    error: {},
    preview: {},
    canApply: { type: Boolean },
    applying: { type: Boolean }
  },
  emits: ["close", "apply"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = {
      downgraded: 0,
      removed: 1,
      upgraded: 2,
      added: 3,
      changed: 4
    }, r = M(() => {
      var u;
      return [...((u = n.preview) == null ? void 0 : u.changes) || []].sort((d, f) => l[d.kind] - l[f.kind] || d.name.localeCompare(f.name));
    });
    function c(u) {
      return u === "downgraded" ? "Downgrade" : u === "upgraded" ? "Upgrade" : u === "added" ? "Add" : u === "removed" ? "Remove" : "Change";
    }
    return (u, d) => (o(), R(Mt, {
      title: "Dependency Review",
      size: "lg",
      loading: e.loading,
      error: e.error || void 0,
      onClose: d[2] || (d[2] = (f) => a("close"))
    }, {
      body: h(() => [
        e.preview ? (o(), i("div", Yw, [
          s("div", Xw, [
            s("h3", null, m(e.preview.node_name), 1),
            d[3] || (d[3] = s("p", null, " Installing this node package would change Python dependencies in the environment. Apply only if you accept these package changes in the current environment. ", -1))
          ]),
          s("div", Zw, [
            s("div", e0, [
              s("strong", null, m(e.preview.summary.total), 1),
              d[4] || (d[4] = s("span", null, "Total", -1))
            ]),
            s("div", t0, [
              s("strong", null, m(e.preview.summary.downgraded), 1),
              d[5] || (d[5] = s("span", null, "Downgraded", -1))
            ]),
            s("div", s0, [
              s("strong", null, m(e.preview.summary.upgraded), 1),
              d[6] || (d[6] = s("span", null, "Upgraded", -1))
            ]),
            s("div", n0, [
              s("strong", null, m(e.preview.summary.added), 1),
              d[7] || (d[7] = s("span", null, "Added", -1))
            ]),
            s("div", o0, [
              s("strong", null, m(e.preview.summary.removed), 1),
              d[8] || (d[8] = s("span", null, "Removed", -1))
            ])
          ]),
          e.preview.requirements.length > 0 ? (o(), i("div", a0, [
            d[9] || (d[9] = s("div", { class: "section-title" }, "Node Requirements", -1)),
            s("div", l0, [
              (o(!0), i(V, null, ye(e.preview.requirements, (f) => (o(), i("code", {
                key: f,
                class: "chip"
              }, m(f), 1))), 128))
            ])
          ])) : y("", !0),
          s("div", i0, [
            d[11] || (d[11] = s("div", { class: "section-title" }, "Proposed Package Changes", -1)),
            e.preview.changes.length === 0 ? (o(), i("div", r0, " No package version changes found. ")) : (o(), i("div", c0, [
              (o(!0), i(V, null, ye(r.value, (f) => (o(), i("div", {
                key: `${f.name}-${f.kind}`,
                class: Fe(["change-row", f.kind])
              }, [
                s("code", u0, m(f.name), 1),
                s("span", d0, m(c(f.kind)), 1),
                s("span", m0, m(f.current || "not installed"), 1),
                d[10] || (d[10] = s("span", { class: "arrow" }, "→", -1)),
                s("span", f0, m(f.proposed || "removed"), 1)
              ], 2))), 128))
            ]))
          ])
        ])) : y("", !0)
      ]),
      footer: h(() => {
        var f;
        return [
          b(Oe, {
            variant: "secondary",
            onClick: d[0] || (d[0] = (p) => a("close"))
          }, {
            default: h(() => [...d[12] || (d[12] = [
              x("Close", -1)
            ])]),
            _: 1
          }),
          e.canApply && ((f = e.preview) != null && f.success) ? (o(), R(Oe, {
            key: 0,
            variant: "primary",
            loading: e.applying,
            disabled: e.loading || e.applying,
            onClick: d[1] || (d[1] = (p) => a("apply"))
          }, {
            default: h(() => [...d[13] || (d[13] = [
              x(" Apply to Current Environment ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : y("", !0)
        ];
      }),
      _: 1
    }, 8, ["loading", "error"]));
  }
}), hc = /* @__PURE__ */ Me(v0, [["__scopeId", "data-v-28094338"]]), p0 = { class: "applying-step" }, g0 = {
  key: 0,
  class: "phase-content"
}, h0 = {
  key: 1,
  class: "phase-content"
}, y0 = { class: "phase-description" }, w0 = { class: "overall-progress" }, _0 = { class: "progress-bar" }, k0 = { class: "progress-label" }, b0 = { class: "install-list" }, $0 = { class: "install-icon" }, C0 = { key: 0 }, x0 = {
  key: 1,
  class: "spinner"
}, S0 = { key: 2 }, I0 = { key: 3 }, E0 = {
  key: 0,
  class: "install-error"
}, T0 = {
  key: 2,
  class: "phase-content"
}, M0 = { class: "phase-header" }, P0 = { class: "phase-title" }, R0 = { class: "completion-summary" }, D0 = {
  key: 0,
  class: "summary-item success"
}, N0 = { class: "summary-text" }, L0 = {
  key: 1,
  class: "summary-item success"
}, U0 = { class: "summary-text" }, O0 = {
  key: 2,
  class: "summary-item success"
}, A0 = { class: "summary-text" }, z0 = {
  key: 3,
  class: "summary-item success"
}, F0 = { class: "summary-text" }, V0 = {
  key: 4,
  class: "summary-item success"
}, B0 = { class: "summary-text" }, W0 = {
  key: 5,
  class: "summary-item error"
}, G0 = { class: "summary-text" }, j0 = {
  key: 6,
  class: "summary-item warning"
}, H0 = { class: "summary-text" }, q0 = {
  key: 7,
  class: "failed-list"
}, K0 = { class: "failed-node-id" }, J0 = { class: "failed-error" }, Q0 = {
  key: 8,
  class: "failed-list dependency-review-list"
}, Y0 = { class: "failed-node-id" }, X0 = ["onClick"], Z0 = {
  key: 10,
  class: "summary-item success"
}, e_ = { class: "summary-text" }, t_ = {
  key: 11,
  class: "summary-note"
}, s_ = {
  key: 12,
  class: "restart-prompt"
}, n_ = {
  key: 3,
  class: "phase-content error"
}, o_ = { class: "error-message" }, a_ = /* @__PURE__ */ Ie({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, {
      previewNodeDependencyChanges: n,
      applyReviewedNodeDependencyChanges: a
    } = ft(), l = _(/* @__PURE__ */ new Set()), r = M(() => {
      var G, re;
      const K = ((G = t.progress.nodeInstallProgress) == null ? void 0 : G.totalNodes) || t.progress.nodesToInstall.length;
      if (!K) return 0;
      const L = ((re = t.progress.nodeInstallProgress) == null ? void 0 : re.completedNodes.length) ?? 0;
      return Math.round(L / K * 100);
    }), c = M(() => {
      var K;
      return ((K = t.progress.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((L) => !L.success && !L.dependency_review)) || [];
    });
    function u(K) {
      var L;
      return ((L = K.dependency_review) == null ? void 0 : L.identifier) || K.node_id;
    }
    const d = M(() => {
      var K;
      return ((K = t.progress.nodeInstallProgress) == null ? void 0 : K.completedNodes.filter((L) => L.dependency_review && !l.value.has(u(L)))) || [];
    }), f = M(() => l.value.size), p = M(() => t.progress.needsRestart || f.value > 0), v = M(() => c.value.length > 0 || d.value.length > 0), w = M(() => t.progress.nodesInstalled.length), g = M(() => {
      var K;
      return ((K = t.progress.nodesMarkedOptional) == null ? void 0 : K.length) || 0;
    }), k = M(() => {
      var K;
      return ((K = t.progress.nodesMapped) == null ? void 0 : K.length) || 0;
    }), $ = M(() => t.progress.modelPathsSynced || 0), S = M(() => t.progress.completedFiles.length > 0), C = M(() => w.value > 0 || g.value > 0 || k.value > 0 || $.value > 0 || S.value || p.value || f.value > 0), I = M(() => C.value ? "Workflow dependencies resolved" : "No changes applied");
    function E(K, L) {
      var re, te;
      const G = (re = t.progress.nodeInstallProgress) == null ? void 0 : re.completedNodes.find((ue) => ue.node_id === K);
      return G ? G.success ? "complete" : "failed" : ((te = t.progress.nodeInstallProgress) == null ? void 0 : te.currentIndex) === L ? "installing" : "pending";
    }
    function P(K) {
      var L, G;
      return (G = (L = t.progress.nodeInstallProgress) == null ? void 0 : L.completedNodes.find((re) => re.node_id === K)) == null ? void 0 : G.error;
    }
    const O = _(!1), U = _(!1), F = _(!1), D = _(null), W = _(null), ce = _(null);
    async function de(K) {
      var G;
      const L = u(K);
      ce.value = L, O.value = !0, U.value = !0, F.value = !1, D.value = null, W.value = null;
      try {
        if ((G = K.dependency_review) != null && G.preview) {
          W.value = K.dependency_review.preview;
          return;
        }
        const re = await n({ id: L });
        W.value = re.preview, re.preview.success || (D.value = re.preview.error || "Unable to generate dependency preview");
      } catch (re) {
        D.value = re instanceof Error ? re.message : "Unable to generate dependency preview";
      } finally {
        U.value = !1;
      }
    }
    async function J() {
      const K = ce.value, L = W.value;
      if (!(!K || !L || F.value)) {
        F.value = !0, D.value = null;
        try {
          const G = await a({
            id: K,
            accepted_preview: {
              baseline_fingerprint: L.baseline_fingerprint,
              diff_fingerprint: L.diff_fingerprint,
              proposed_fingerprint: L.proposed_fingerprint
            }
          });
          if (G.status !== "success")
            throw new Error(G.error || G.message || "Unable to apply dependency changes");
          l.value = /* @__PURE__ */ new Set([
            ...l.value,
            K
          ]), ve();
        } catch (G) {
          D.value = G instanceof Error ? G.message : "Unable to apply dependency changes";
        } finally {
          F.value = !1;
        }
      }
    }
    function ve() {
      O.value = !1, U.value = !1, F.value = !1, D.value = null, W.value = null, ce.value = null;
    }
    return (K, L) => {
      var G, re, te, ue, me;
      return o(), i("div", p0, [
        e.progress.phase === "resolving" ? (o(), i("div", g0, [...L[2] || (L[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (o(), i("div", h0, [
          L[3] || (L[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", y0, " Installing " + m((((G = e.progress.nodeInstallProgress) == null ? void 0 : G.currentIndex) ?? 0) + 1) + " of " + m(((re = e.progress.nodeInstallProgress) == null ? void 0 : re.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", w0, [
            s("div", _0, [
              s("div", {
                class: "progress-fill",
                style: Ft({ width: `${r.value}%` })
              }, null, 4)
            ]),
            s("span", k0, m(((te = e.progress.nodeInstallProgress) == null ? void 0 : te.completedNodes.length) ?? 0) + " / " + m(((ue = e.progress.nodeInstallProgress) == null ? void 0 : ue.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", b0, [
            (o(!0), i(V, null, ye(e.progress.nodesToInstall, (q, Q) => (o(), i("div", {
              key: q,
              class: Fe(["install-item", E(q, Q)])
            }, [
              s("span", $0, [
                E(q, Q) === "pending" ? (o(), i("span", C0, "○")) : E(q, Q) === "installing" ? (o(), i("span", x0, "◌")) : E(q, Q) === "complete" ? (o(), i("span", S0, "✓")) : E(q, Q) === "failed" ? (o(), i("span", I0, "✗")) : y("", !0)
              ]),
              s("code", null, m(q), 1),
              P(q) ? (o(), i("span", E0, m(P(q)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (o(), i("div", T0, [
          s("div", M0, [
            s("span", {
              class: Fe(["phase-icon", v.value ? "warning" : "success"])
            }, m(v.value ? "⚠" : "✓"), 3),
            s("h3", P0, m(v.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", R0, [
            e.progress.nodesInstalled.length > 0 ? (o(), i("div", D0, [
              L[4] || (L[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", N0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            f.value > 0 ? (o(), i("div", L0, [
              L[5] || (L[5] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", U0, m(f.value) + " reviewed package" + m(f.value > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            g.value > 0 ? (o(), i("div", O0, [
              L[6] || (L[6] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", A0, m(g.value) + " node type" + m(g.value > 1 ? "s" : "") + " marked optional", 1)
            ])) : y("", !0),
            k.value > 0 ? (o(), i("div", z0, [
              L[7] || (L[7] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", F0, m(k.value) + " node mapping" + m(k.value > 1 ? "s" : "") + " changed", 1)
            ])) : y("", !0),
            $.value > 0 ? (o(), i("div", V0, [
              L[8] || (L[8] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", B0, m($.value) + " model path" + m($.value > 1 ? "s" : "") + " synced", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", W0, [
              L[9] || (L[9] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", G0, m(c.value.length) + " package" + m(c.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", j0, [
              L[10] || (L[10] = s("span", { class: "summary-icon" }, "⚠", -1)),
              s("span", H0, m(d.value.length) + " package" + m(d.value.length > 1 ? "s" : "") + " need dependency review", 1)
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("div", q0, [
              (o(!0), i(V, null, ye(c.value, (q) => (o(), i("div", {
                key: q.node_id,
                class: "failed-item"
              }, [
                s("code", K0, m(q.node_id), 1),
                s("span", J0, m(q.error), 1)
              ]))), 128))
            ])) : y("", !0),
            d.value.length > 0 ? (o(), i("div", Q0, [
              (o(!0), i(V, null, ye(d.value, (q) => (o(), i("div", {
                key: q.node_id,
                class: "failed-item dependency-review-item"
              }, [
                s("code", Y0, m(q.node_id), 1),
                L[11] || (L[11] = s("span", { class: "failed-error" }, "Dependency changes require review before install.", -1)),
                s("button", {
                  class: "review-button",
                  onClick: (Q) => de(q)
                }, " View Changes ", 8, X0)
              ]))), 128))
            ])) : y("", !0),
            c.value.length > 0 ? (o(), i("button", {
              key: 9,
              class: "retry-button",
              onClick: L[0] || (L[0] = (q) => K.$emit("retry-failed"))
            }, " Retry Failed (" + m(c.value.length) + ") ", 1)) : y("", !0),
            v.value ? y("", !0) : (o(), i("div", Z0, [
              L[12] || (L[12] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", e_, m(I.value), 1)
            ])),
            S.value ? (o(), i("p", t_, "Model downloads will continue in the background.")) : y("", !0),
            p.value ? (o(), i("div", s_, [
              L[13] || (L[13] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: L[1] || (L[1] = (q) => K.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (o(), i("div", n_, [
          L[14] || (L[14] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", o_, m(e.progress.error), 1)
        ])) : y("", !0),
        O.value ? (o(), R(hc, {
          key: 4,
          loading: U.value,
          error: D.value,
          preview: W.value,
          "can-apply": !!(ce.value && ((me = W.value) != null && me.success)),
          applying: F.value,
          onClose: ve,
          onApply: J
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ]);
    };
  }
}), l_ = /* @__PURE__ */ Me(a_, [["__scopeId", "data-v-0d61d037"]]), i_ = {
  key: 0,
  class: "loading-state"
}, r_ = {
  key: 1,
  class: "wizard-content"
}, c_ = {
  key: 0,
  class: "step-content"
}, u_ = { class: "analysis-summary" }, d_ = { class: "analysis-header" }, m_ = { class: "summary-description" }, f_ = { class: "stats-grid" }, v_ = { class: "stat-card" }, p_ = { class: "stat-items" }, g_ = {
  key: 0,
  class: "stat-item success"
}, h_ = { class: "stat-count" }, y_ = {
  key: 1,
  class: "stat-item info"
}, w_ = { class: "stat-count" }, __ = {
  key: 2,
  class: "stat-item warning"
}, k_ = { class: "stat-count" }, b_ = {
  key: 3,
  class: "stat-item warning"
}, $_ = { class: "stat-count" }, C_ = {
  key: 4,
  class: "stat-item warning"
}, x_ = { class: "stat-count" }, S_ = {
  key: 5,
  class: "stat-item error"
}, I_ = { class: "stat-count" }, E_ = { class: "stat-card" }, T_ = { class: "stat-items" }, M_ = { class: "stat-item success" }, P_ = { class: "stat-count" }, R_ = {
  key: 0,
  class: "stat-item info"
}, D_ = { class: "stat-count" }, N_ = {
  key: 1,
  class: "stat-item warning"
}, L_ = { class: "stat-count" }, U_ = {
  key: 2,
  class: "stat-item warning"
}, O_ = { class: "stat-count" }, A_ = {
  key: 3,
  class: "stat-item error"
}, z_ = { class: "stat-count" }, F_ = {
  key: 0,
  class: "status-message warning"
}, V_ = { class: "status-text" }, B_ = {
  key: 1,
  class: "status-message warning"
}, W_ = { class: "status-text" }, G_ = {
  key: 2,
  class: "status-message info"
}, j_ = { class: "status-text" }, H_ = {
  key: 3,
  class: "status-message info"
}, q_ = { class: "status-text" }, K_ = {
  key: 4,
  class: "status-message info"
}, J_ = { class: "status-text" }, Q_ = {
  key: 5,
  class: "status-message warning"
}, Y_ = { class: "status-text" }, X_ = {
  key: 6,
  class: "status-message success"
}, Z_ = {
  key: 7,
  class: "category-mismatch-section"
}, ek = { class: "mismatch-list" }, tk = { class: "mismatch-path" }, sk = { class: "mismatch-target" }, nk = {
  key: 8,
  class: "category-mismatch-section"
}, ok = { class: "mismatch-list" }, ak = { class: "mismatch-path" }, lk = { class: "status-text" }, ik = {
  key: 1,
  class: "step-content node-step-content"
}, rk = {
  key: 2,
  class: "step-content package-step-content"
}, ck = { class: "package-step-header" }, uk = { class: "stat-badge" }, dk = {
  key: 0,
  class: "package-section"
}, mk = { class: "package-section-header" }, fk = { class: "package-section-title" }, vk = { class: "stat-badge" }, pk = { class: "package-list" }, gk = { class: "package-info" }, hk = { class: "item-name" }, yk = { class: "package-meta" }, wk = { class: "package-actions" }, _k = {
  key: 0,
  class: "choice-badge install"
}, kk = {
  key: 1,
  class: "choice-badge skip"
}, bk = {
  key: 1,
  class: "community-node-section"
}, $k = { class: "community-node-header" }, Ck = { class: "community-node-title" }, xk = { class: "community-node-list" }, Sk = { class: "community-node-info" }, Ik = { class: "community-node-heading" }, Ek = { class: "item-name" }, Tk = { class: "community-node-package" }, Mk = { class: "community-node-meta" }, Pk = { class: "community-node-guidance" }, Rk = { key: 0 }, Dk = {
  key: 0,
  class: "community-node-selection"
}, Nk = { class: "community-selected-label" }, Lk = {
  key: 1,
  class: "community-node-actions"
}, Uk = {
  key: 4,
  class: "step-content"
}, Ok = { class: "review-summary" }, Ak = { class: "review-stats" }, zk = { class: "review-stat" }, Fk = { class: "stat-value" }, Vk = { class: "review-stat" }, Bk = { class: "stat-value" }, Wk = { class: "review-stat" }, Gk = { class: "stat-value" }, jk = { class: "review-stat" }, Hk = { class: "stat-value" }, qk = {
  key: 0,
  class: "review-section"
}, Kk = { class: "section-title" }, Jk = { class: "review-items" }, Qk = { class: "item-name" }, Yk = { class: "item-choice" }, Xk = {
  key: 0,
  class: "choice-badge install"
}, Zk = {
  key: 1,
  class: "choice-badge skip"
}, eb = {
  key: 1,
  class: "review-section"
}, tb = { class: "section-title" }, sb = { class: "review-items" }, nb = { class: "item-name" }, ob = { class: "item-choice" }, ab = {
  key: 0,
  class: "choice-badge install"
}, lb = {
  key: 1,
  class: "choice-badge optional"
}, ib = {
  key: 2,
  class: "choice-badge skip"
}, rb = {
  key: 2,
  class: "review-section"
}, cb = { class: "section-title" }, ub = { class: "review-items" }, db = { class: "item-name" }, mb = { class: "item-choice" }, fb = {
  key: 0,
  class: "choice-badge install"
}, vb = {
  key: 1,
  class: "choice-badge mapped"
}, pb = {
  key: 2,
  class: "choice-badge optional"
}, gb = {
  key: 3,
  class: "choice-badge skip"
}, hb = {
  key: 1,
  class: "choice-badge pending"
}, yb = {
  key: 3,
  class: "review-section"
}, wb = { class: "section-title" }, _b = { class: "review-items download-details" }, kb = { class: "download-info" }, bb = { class: "item-name" }, $b = { class: "download-meta" }, Cb = { class: "download-path" }, xb = ["title"], Sb = {
  key: 4,
  class: "review-section"
}, Ib = { class: "section-title" }, Eb = { class: "review-items" }, Tb = { class: "item-name" }, Mb = { class: "item-choice" }, Pb = {
  key: 0,
  class: "choice-badge install"
}, Rb = {
  key: 1,
  class: "choice-badge download"
}, Db = {
  key: 2,
  class: "choice-badge optional"
}, Nb = {
  key: 3,
  class: "choice-badge skip"
}, Lb = {
  key: 4,
  class: "choice-badge skip"
}, Ub = {
  key: 1,
  class: "choice-badge download"
}, Ob = {
  key: 2,
  class: "choice-badge pending"
}, Ab = {
  key: 5,
  class: "no-choices"
}, zb = /* @__PURE__ */ Ie({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const n = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: f } = pc(), { loadPendingDownloads: p } = qn(), { openFileLocation: v, queueNodeInstall: w, getNodes: g } = ft(), k = _(null), $ = _([]), S = _(!1), C = _(!1), I = _(null), E = _("analysis"), P = _([]), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), F = _(/* @__PURE__ */ new Set()), D = M(() => {
      const Y = [
        { id: "analysis", label: "Analysis" }
      ];
      return re.value && Y.push({ id: "nodes", label: "Nodes" }), Q.value && Y.push({ id: "packages", label: "Packages" }), te.value && Y.push({ id: "models", label: "Models" }), Y.push({ id: "review", label: "Review" }), E.value === "applying" && Y.push({ id: "applying", label: "Applying" }), Y;
    });
    M(() => k.value ? k.value.stats.needs_user_input : !1);
    const W = M(() => L.value.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length), ce = M(() => le.value.filter(
      (N) => !O.value.has(N.node_type)
    ).length + we.value.length + W.value), de = M(() => k.value ? k.value.nodes.unresolved.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length : 0), J = M(() => k.value ? k.value.nodes.ambiguous.filter(
      (Y) => !O.value.has(Y.reference.node_type)
    ).length : 0), ve = M(() => k.value ? k.value.nodes.version_gated || [] : []), K = M(() => k.value ? k.value.nodes.uninstallable || [] : []), L = M(() => K.value.filter((Y) => {
      var N;
      return !!((N = Y.package) != null && N.package_id);
    })), G = M(() => ve.value.length > 0), re = M(() => k.value ? k.value.nodes.unresolved.length > 0 || k.value.nodes.ambiguous.length > 0 || Ee.value.length > 0 : !1), te = M(() => k.value ? k.value.models.unresolved.length > 0 || k.value.models.ambiguous.length > 0 : !1), ue = M(() => k.value ? k.value.stats.download_intents > 0 : !1), me = M(() => k.value ? k.value.stats.nodes_needing_installation > 0 : !1), q = M(() => L.value.length > 0), Q = M(() => me.value || q.value), ae = M(() => k.value ? k.value.nodes.resolved.length : 0), Pe = M(() => k.value ? k.value.models.resolved.filter((Y) => Y.has_category_mismatch) : []), ge = M(() => Pe.value.length > 0), ze = M(() => re.value ? "nodes" : Q.value ? "packages" : te.value ? "models" : "review"), Ne = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((oe) => !oe.is_installed), N = /* @__PURE__ */ new Set();
      return Y.filter((oe) => N.has(oe.package.package_id) ? !1 : (N.add(oe.package.package_id), !0));
    }), _e = M(() => {
      if (!k.value) return [];
      const Y = k.value.nodes.resolved.filter((oe) => !oe.is_installed), N = /* @__PURE__ */ new Map();
      for (const oe of Y) {
        const Ke = N.get(oe.package.package_id);
        Ke ? Ke.node_types_count++ : N.set(oe.package.package_id, {
          package_id: oe.package.package_id,
          title: oe.package.title,
          node_types_count: 1
        });
      }
      return Array.from(N.values());
    }), De = M(() => _e.value.filter((Y) => !F.value.has(Y.package_id)).length), he = M(() => _e.value.length + L.value.length), ke = M(() => {
      const Y = L.value.filter(
        (N) => O.value.has(N.reference.node_type)
      ).length;
      return _e.value.length + Y;
    }), T = M(() => Ne.value.filter((Y) => !F.value.has(Y.package.package_id))), A = M(() => k.value ? k.value.models.resolved.filter(
      (Y) => Y.match_type === "download_intent" || Y.match_type === "property_download_intent"
    ).map((Y) => ({
      filename: Y.reference.widget_value,
      reference: Y.reference,
      is_download_intent: !0,
      resolved_model: Y.model,
      download_source: Y.download_source,
      target_path: Y.target_path
    })) : []), le = M(() => {
      if (!k.value) return [];
      const Y = Ee.value.map((Ke) => ({
        node_type: Ke.reference.node_type,
        reason: "saved_mapping",
        is_unresolved: !1,
        options: void 0
      })), N = k.value.nodes.unresolved.map((Ke) => ({
        node_type: Ke.reference.node_type,
        reason: Ke.reason,
        is_unresolved: !0,
        options: void 0
      })), oe = k.value.nodes.ambiguous.map((Ke) => ({
        node_type: Ke.reference.node_type,
        has_multiple_options: !0,
        options: Ke.options.map((et) => ({
          package_id: et.package.package_id,
          title: et.package.title,
          match_confidence: et.match_confidence,
          match_type: et.match_type,
          is_installed: et.is_installed
        }))
      }));
      return [...Y, ...N, ...oe];
    }), Ee = M(() => k.value ? k.value.nodes.resolved.filter(
      (Y) => {
        var N;
        return ((N = Y.saved_choice) == null ? void 0 : N.action) === "map-installed";
      }
    ) : []), we = M(() => {
      if (!k.value) return [];
      const Y = k.value.models.unresolved.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        reason: oe.reason,
        is_unresolved: !0,
        options: void 0
      })), N = k.value.models.ambiguous.map((oe) => ({
        filename: oe.reference.widget_value,
        reference: oe.reference,
        has_multiple_options: !0,
        options: oe.options.map((Ke) => ({
          model: Ke.model,
          match_confidence: Ke.match_confidence,
          match_type: Ke.match_type,
          has_download_source: Ke.has_download_source
        }))
      }));
      return [...Y, ...N];
    }), Se = M(() => {
      const Y = we.value, N = A.value.map((oe) => ({
        filename: oe.filename,
        reference: oe.reference,
        is_download_intent: !0,
        resolved_model: oe.resolved_model,
        download_source: oe.download_source,
        target_path: oe.target_path,
        options: void 0
      }));
      return [...Y, ...N];
    }), X = M(() => A.value.filter((Y) => {
      const N = U.value.get(Y.filename);
      return N ? N.action === "download" : !0;
    }).map((Y) => ({
      filename: Y.filename,
      url: Y.download_source,
      target_path: Y.target_path
    })));
    function j(Y, N = 50) {
      return Y.length <= N ? Y : Y.slice(0, N - 3) + "...";
    }
    const pe = M(() => {
      let Y = T.value.length;
      for (const N of O.value.values())
        N.action === "install" && Y++;
      for (const N of U.value.values())
        N.action === "select" && Y++;
      return Y;
    }), be = M(() => {
      let Y = 0;
      for (const N of U.value.values())
        N.action === "download" && Y++;
      for (const N of A.value)
        U.value.get(N.filename) || Y++;
      return Y;
    }), je = M(() => {
      let Y = 0;
      for (const N of O.value.values())
        N.action === "optional" && Y++;
      for (const N of U.value.values())
        N.action === "optional" && Y++;
      return Y;
    }), Ve = M(() => {
      let Y = F.value.size;
      for (const N of O.value.values())
        N.action === "skip" && Y++;
      for (const N of U.value.values())
        N.action === "skip" && Y++;
      for (const N of le.value)
        O.value.has(N.node_type) || Y++;
      for (const N of we.value)
        U.value.has(N.filename) || Y++;
      return Y;
    }), Ce = M(() => {
      const Y = {};
      if (Y.analysis = { resolved: 1, total: 1 }, re.value) {
        const N = le.value.length, oe = le.value.filter(
          (Ke) => O.value.has(Ke.node_type)
        ).length;
        Y.nodes = { resolved: oe, total: N };
      }
      if (Q.value && (Y.packages = {
        resolved: ke.value,
        total: he.value || 1
      }), te.value) {
        const N = Se.value.length, oe = Se.value.filter(
          (Ke) => U.value.has(Ke.filename) || Ke.is_download_intent
        ).length;
        Y.models = { resolved: oe, total: N };
      }
      if (Y.review = { resolved: 1, total: 1 }, E.value === "applying") {
        const N = d.totalFiles || 1, oe = d.completedFiles.length;
        Y.applying = { resolved: oe, total: N };
      }
      return Y;
    });
    function ne(Y) {
      E.value = Y;
    }
    function He() {
      const Y = D.value.findIndex((N) => N.id === E.value);
      Y > 0 && (E.value = D.value[Y - 1].id);
    }
    function Te() {
      const Y = D.value.findIndex((N) => N.id === E.value);
      Y < D.value.length - 1 && (E.value = D.value[Y + 1].id);
    }
    function Ze() {
      const Y = D.value.findIndex((oe) => oe.id === E.value), N = D.value[Y + 1];
      return (N == null ? void 0 : N.label) || "Review";
    }
    function Ue(Y) {
      var N;
      return !!((N = Y.package) != null && N.latest_version);
    }
    function Ae(Y) {
      switch (Y) {
        case "development":
          return 0;
        case "git":
          return 1;
        case "registry":
          return 2;
        default:
          return 3;
      }
    }
    function Xe(Y) {
      return Y.filter((N) => N.installed && N.tracked).filter((N) => N.name !== "comfygit-manager").map((N) => ({
        package_id: N.registry_id || N.name,
        source: N.source
      })).filter((N, oe, Ke) => Ke.findIndex((et) => et.package_id === N.package_id) === oe).sort((N, oe) => {
        const Ke = Ae(N.source) - Ae(oe.source);
        return Ke !== 0 ? Ke : N.package_id.localeCompare(oe.package_id);
      });
    }
    async function yt() {
      S.value = !0, I.value = null;
      try {
        const [Y, N] = await Promise.all([
          l(n.workflowName),
          g()
        ]);
        k.value = Y, $.value = Xe(N.nodes), Nt(Y);
      } catch (Y) {
        I.value = Y instanceof Error ? Y.message : "Failed to analyze workflow";
      } finally {
        S.value = !1;
      }
    }
    function Nt(Y) {
      O.value.clear();
      for (const N of Y.nodes.unresolved)
        N.saved_choice && O.value.set(N.reference.node_type, N.saved_choice);
      for (const N of Y.nodes.resolved)
        N.saved_choice && O.value.set(N.reference.node_type, N.saved_choice);
      for (const N of Y.nodes.ambiguous)
        N.saved_choice && O.value.set(N.reference.node_type, N.saved_choice);
      for (const N of Y.nodes.uninstallable)
        N.saved_choice && O.value.set(N.reference.node_type, N.saved_choice);
    }
    function es() {
      P.value.includes("analysis") || P.value.push("analysis"), re.value ? E.value = "nodes" : Q.value ? E.value = "packages" : te.value ? E.value = "models" : E.value = "review";
    }
    function Z(Y) {
      O.value.set(Y, { action: "optional" });
    }
    function ee(Y) {
      O.value.set(Y, { action: "skip" });
    }
    function se(Y, N) {
      var Ke;
      const oe = le.value.find((et) => et.node_type === Y);
      (Ke = oe == null ? void 0 : oe.options) != null && Ke[N] && O.value.set(Y, {
        action: "install",
        package_id: oe.options[N].package_id
      });
    }
    function Qe(Y, N, oe = {}) {
      O.value.set(Y, {
        action: "install",
        package_id: N,
        install_source: oe.install_source,
        repository: oe.repository,
        version: oe.version
      });
    }
    function Be(Y, N) {
      O.value.set(Y, {
        action: "map-installed",
        package_id: N
      });
    }
    function at(Y) {
      O.value.delete(Y);
    }
    function nt(Y) {
      return O.value.get(Y);
    }
    function We(Y) {
      const N = nt(Y);
      return N ? N.action === "optional" ? "Will be marked optional" : N.action === "skip" ? "Will be skipped" : N.action === "install" ? N.install_source === "git" ? "Will install via Git" : "Will install from Registry" : "Undecided" : "Undecided";
    }
    function ut(Y, N) {
      var et;
      const oe = (et = Y.package) == null ? void 0 : et.package_id;
      if (!oe) return;
      const Ke = {
        action: "install",
        package_id: oe,
        version: Y.package.latest_version || null,
        install_source: N
      };
      N === "git" && Y.package.repository && (Ke.repository = Y.package.repository), O.value.set(Y.reference.node_type, Ke);
    }
    function ts(Y) {
      O.value.set(Y, { action: "optional" });
    }
    function qt(Y) {
      O.value.set(Y, { action: "skip" });
    }
    function ss(Y) {
      O.value.delete(Y);
    }
    function Kt(Y) {
      F.value.has(Y) ? F.value.delete(Y) : F.value.add(Y);
    }
    function H(Y) {
      U.value.set(Y, { action: "optional" });
    }
    function fe(Y) {
      U.value.set(Y, { action: "skip" });
    }
    function Le(Y, N) {
      var Ke;
      const oe = we.value.find((et) => et.filename === Y);
      (Ke = oe == null ? void 0 : oe.options) != null && Ke[N] && U.value.set(Y, {
        action: "select",
        selected_model: oe.options[N].model
      });
    }
    function $e(Y, N, oe) {
      U.value.set(Y, {
        action: "download",
        url: N,
        target_path: oe
      });
    }
    function qe(Y) {
      U.value.delete(Y);
    }
    async function Ye(Y) {
      try {
        await v(Y);
      } catch (N) {
        I.value = N instanceof Error ? N.message : "Failed to open file location";
      }
    }
    async function ct() {
      var Y, N, oe, Ke;
      C.value = !0, I.value = null, f(), d.phase = "resolving", E.value = "applying";
      try {
        const et = await r(n.workflowName, O.value, U.value, F.value);
        et.models_to_download && et.models_to_download.length > 0 && u(n.workflowName, et.models_to_download), d.nodesMarkedOptional = et.nodes_marked_optional || [], d.nodesMapped = et.nodes_mapped || [], d.modelPathsSynced = et.model_paths_synced || 0;
        const mt = Array.from(O.value.values()).map((gt) => {
          if ((gt == null ? void 0 : gt.action) !== "install" || gt.install_source !== "git")
            return null;
          const ds = gt.repository, Lt = gt.package_id;
          return !ds || !Lt ? null : {
            id: Lt,
            repository: ds,
            selectedVersion: gt.version || "latest"
          };
        }).filter((gt) => !!gt), Ut = new Set(mt.map((gt) => gt.id)), cs = new Set(
          Array.from(O.value.values()).filter((gt) => (gt == null ? void 0 : gt.action) === "install" && !!gt.package_id).map((gt) => gt.package_id)
        ), us = [
          ...et.nodes_to_install || [],
          ...T.value.filter((gt) => !cs.has(gt.package.package_id)).map((gt) => gt.package.package_id)
        ];
        if (d.nodesToInstall = [...new Set(us)].filter((gt) => !Ut.has(gt)), d.nodesToInstall.length > 0 && await c(n.workflowName), mt.length > 0) {
          d.phase = "installing";
          const gt = ((Y = d.nodeInstallProgress) == null ? void 0 : Y.completedNodes) || [], ds = ((N = d.nodeInstallProgress) == null ? void 0 : N.totalNodes) || d.nodesToInstall.length;
          d.nodesToInstall = [
            ...d.nodesToInstall,
            ...mt.map((Lt) => Lt.id)
          ], d.nodeInstallProgress = {
            completedNodes: gt,
            totalNodes: ds + mt.length
          };
          for (const Lt of mt) {
            const un = d.nodeInstallProgress.completedNodes.length;
            d.nodeInstallProgress.currentNode = Lt.id, d.nodeInstallProgress.currentIndex = un;
            try {
              const hs = await w({
                id: Lt.id,
                version: Lt.selectedVersion,
                selected_version: Lt.selectedVersion,
                repository: Lt.repository,
                install_source: "git",
                mode: "remote",
                channel: "default"
              });
              if (((oe = hs.status) == null ? void 0 : oe.status_str) === "dependency_review_required") {
                d.nodeInstallProgress.completedNodes.push({
                  node_id: Lt.id,
                  success: !1,
                  error: ((Ke = hs.status.messages) == null ? void 0 : Ke[0]) || "Dependency review required",
                  dependency_review: hs.status.dependency_review
                }), d.dependencyReviews = [
                  ...d.dependencyReviews || [],
                  ...hs.status.dependency_review ? [{ node_id: Lt.id, dependency_review: hs.status.dependency_review }] : []
                ];
                continue;
              }
              d.nodeInstallProgress.completedNodes.push({
                node_id: Lt.id,
                success: !0
              }), d.nodesInstalled = [.../* @__PURE__ */ new Set([...d.nodesInstalled, Lt.id])], d.needsRestart = !0;
            } catch (hs) {
              const Cn = hs instanceof Error ? hs.message : `Failed to install ${Lt.id}`;
              d.nodeInstallProgress.completedNodes.push({
                node_id: Lt.id,
                success: !1,
                error: Cn
              }), d.installError = Cn;
            }
          }
        }
        d.phase = "complete", await p(), window.dispatchEvent(new CustomEvent("comfygit:status-refresh")), a("refresh"), a("install");
      } catch (et) {
        I.value = et instanceof Error ? et.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        C.value = !1;
      }
    }
    function vt() {
      a("refresh"), a("restart"), a("close");
    }
    async function It() {
      var N;
      const Y = ((N = d.nodeInstallProgress) == null ? void 0 : N.completedNodes.filter((oe) => !oe.success).map((oe) => oe.node_id)) || [];
      if (Y.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: Y.length
        }, d.nodesToInstall = Y, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(n.workflowName), d.phase = "complete";
        } catch (oe) {
          d.error = oe instanceof Error ? oe.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return dt(yt), (Y, N) => (o(), R(Mt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: S.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: N[1] || (N[1] = (oe) => a("close"))
    }, {
      body: h(() => [
        S.value && !k.value ? (o(), i("div", i_, [...N[2] || (N[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : k.value ? (o(), i("div", r_, [
          b(Jy, {
            steps: D.value,
            "current-step": E.value,
            "completed-steps": P.value,
            "step-stats": Ce.value,
            onStepChange: ne
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          E.value === "analysis" ? (o(), i("div", c_, [
            s("div", u_, [
              s("div", d_, [
                N[3] || (N[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", m_, " Found " + m(k.value.stats.total_nodes) + " nodes and " + m(k.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", f_, [
                s("div", v_, [
                  N[16] || (N[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", p_, [
                    ae.value > 0 ? (o(), i("div", g_, [
                      N[4] || (N[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", h_, m(ae.value), 1),
                      N[5] || (N[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    k.value.stats.packages_needing_installation > 0 ? (o(), i("div", y_, [
                      N[6] || (N[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", w_, m(k.value.stats.packages_needing_installation), 1),
                      N[7] || (N[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    J.value > 0 ? (o(), i("div", __, [
                      N[8] || (N[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", k_, m(J.value), 1),
                      N[9] || (N[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ve.value.length > 0 ? (o(), i("div", b_, [
                      N[10] || (N[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", $_, m(ve.value.length), 1),
                      N[11] || (N[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    W.value > 0 ? (o(), i("div", C_, [
                      N[12] || (N[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", x_, m(W.value), 1),
                      N[13] || (N[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    de.value > 0 ? (o(), i("div", S_, [
                      N[14] || (N[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", I_, m(de.value), 1),
                      N[15] || (N[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", E_, [
                  N[27] || (N[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", T_, [
                    s("div", M_, [
                      N[17] || (N[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", P_, m(k.value.models.resolved.length - k.value.stats.download_intents - k.value.stats.models_with_category_mismatch), 1),
                      N[18] || (N[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    k.value.stats.download_intents > 0 ? (o(), i("div", R_, [
                      N[19] || (N[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", D_, m(k.value.stats.download_intents), 1),
                      N[20] || (N[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ge.value ? (o(), i("div", N_, [
                      N[21] || (N[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", L_, m(Pe.value.length), 1),
                      N[22] || (N[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    k.value.models.ambiguous.length > 0 ? (o(), i("div", U_, [
                      N[23] || (N[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", O_, m(k.value.models.ambiguous.length), 1),
                      N[24] || (N[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    k.value.models.unresolved.length > 0 ? (o(), i("div", A_, [
                      N[25] || (N[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", z_, m(k.value.models.unresolved.length), 1),
                      N[26] || (N[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              ce.value > 0 ? (o(), i("div", F_, [
                N[28] || (N[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", V_, m(ce.value) + " item" + m(ce.value === 1 ? "" : "s") + " need your input", 1)
              ])) : G.value ? (o(), i("div", B_, [
                N[29] || (N[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", W_, m(ve.value.length) + " node type" + m(ve.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : W.value > 0 ? (o(), i("div", G_, [
                N[30] || (N[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", j_, m(W.value) + " community-mapped node type" + m(W.value > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : me.value ? (o(), i("div", H_, [
                N[31] || (N[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", q_, m(k.value.stats.packages_needing_installation) + " package" + m(k.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(k.value.stats.nodes_needing_installation) + " node type" + m(k.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(ue.value ? `, ${k.value.stats.download_intents} model${k.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : ue.value ? (o(), i("div", K_, [
                N[32] || (N[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", J_, m(k.value.stats.download_intents) + " model" + m(k.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ge.value ? (o(), i("div", Q_, [
                N[33] || (N[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", Y_, m(Pe.value.length) + " model" + m(Pe.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (o(), i("div", X_, [...N[34] || (N[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ge.value ? (o(), i("div", Z_, [
                N[37] || (N[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", ek, [
                  (o(!0), i(V, null, ye(Pe.value, (oe) => {
                    var Ke, et;
                    return o(), i("div", {
                      key: oe.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", tk, m(oe.actual_category) + "/" + m((Ke = oe.model) == null ? void 0 : Ke.filename), 1),
                      N[36] || (N[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", sk, m((et = oe.expected_categories) == null ? void 0 : et[0]) + "/", 1),
                      oe.file_path ? (o(), R(Oe, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (mt) => Ye(oe.file_path)
                      }, {
                        default: h(() => [...N[35] || (N[35] = [
                          x(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              G.value ? (o(), i("div", nk, [
                N[38] || (N[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", ok, [
                  (o(!0), i(V, null, ye(ve.value, (oe) => {
                    var Ke;
                    return o(), i("div", {
                      key: `vg-${oe.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", ak, m(oe.reference.node_type), 1),
                      s("span", lk, m(oe.guidance || ((Ke = k.value.node_guidance) == null ? void 0 : Ke[oe.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "nodes" ? (o(), i("div", ik, [
            b(tw, {
              nodes: le.value,
              "node-choices": O.value,
              "auto-resolved-packages": [],
              "skipped-packages": F.value,
              "installed-node-packs": $.value,
              onMarkOptional: Z,
              onSkip: ee,
              onOptionSelected: se,
              onManualEntry: Qe,
              onInstalledPackSelected: Be,
              onClearChoice: at,
              onPackageSkip: Kt
            }, null, 8, ["nodes", "node-choices", "skipped-packages", "installed-node-packs"])
          ])) : y("", !0),
          E.value === "packages" ? (o(), i("div", rk, [
            s("div", ck, [
              N[39] || (N[39] = s("div", null, [
                s("h3", { class: "summary-title" }, "Review Node Packages"),
                s("p", { class: "summary-description" }, " Choose which package-level installs should run. These decisions are separate from mapping unresolved node names. ")
              ], -1)),
              s("span", uk, m(ke.value) + "/" + m(he.value) + " decided", 1)
            ]),
            _e.value.length > 0 ? (o(), i("div", dk, [
              s("div", mk, [
                s("div", null, [
                  s("h4", fk, "Resolved Packages (" + m(_e.value.length) + ")", 1),
                  N[40] || (N[40] = s("p", { class: "package-section-description" }, " These packages were matched automatically. Skip any package you do not want installed. ", -1))
                ]),
                s("span", vk, m(De.value) + "/" + m(_e.value.length) + " to install", 1)
              ]),
              s("div", pk, [
                (o(!0), i(V, null, ye(_e.value, (oe) => (o(), i("div", {
                  key: oe.package_id,
                  class: "package-item"
                }, [
                  s("div", gk, [
                    s("code", hk, m(oe.package_id), 1),
                    s("span", yk, m(oe.node_types_count) + " node type" + m(oe.node_types_count > 1 ? "s" : ""), 1)
                  ]),
                  s("div", wk, [
                    F.value.has(oe.package_id) ? (o(), i("span", kk, "Skipped")) : (o(), i("span", _k, "Will Install")),
                    b(Oe, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => Kt(oe.package_id)
                    }, {
                      default: h(() => [
                        x(m(F.value.has(oe.package_id) ? "Include" : "Skip"), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0),
            L.value.length > 0 ? (o(), i("div", bk, [
              s("div", $k, [
                s("h4", Ck, "Community-Mapped Packages (" + m(L.value.length) + ")", 1),
                N[41] || (N[41] = s("p", { class: "community-node-description" }, " These mappings came from community metadata. Use a registry install only when a package version exists; otherwise install from Git or skip. ", -1))
              ]),
              s("div", xk, [
                (o(!0), i(V, null, ye(L.value, (oe) => (o(), i("div", {
                  key: `community-${oe.reference.node_type}-${oe.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", Sk, [
                    s("div", Ik, [
                      s("code", Ek, m(oe.reference.node_type), 1),
                      s("span", Tk, m(oe.package.title || oe.package.package_id), 1)
                    ]),
                    s("div", Mk, m(oe.package.package_id), 1),
                    s("div", Pk, [
                      N[42] || (N[42] = x(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      oe.guidance ? (o(), i("span", Rk, m(oe.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  nt(oe.reference.node_type) ? (o(), i("div", Dk, [
                    s("div", Nk, m(We(oe.reference.node_type)), 1),
                    b(Oe, {
                      class: "change-selection-button",
                      size: "sm",
                      variant: "ghost",
                      onClick: (Ke) => ss(oe.reference.node_type)
                    }, {
                      default: h(() => [...N[43] || (N[43] = [
                        x(" Change Selection ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])) : (o(), i("div", Lk, [
                    Ue(oe) ? (o(), R(Oe, {
                      key: 0,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !oe.package.package_id,
                      onClick: (Ke) => ut(oe, "registry")
                    }, {
                      default: h(() => [...N[44] || (N[44] = [
                        x(" Install from Registry ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    oe.package.repository ? (o(), R(Oe, {
                      key: 1,
                      class: "community-choice-button install-choice",
                      size: "sm",
                      variant: "secondary",
                      disabled: !oe.package.package_id,
                      onClick: (Ke) => ut(oe, "git")
                    }, {
                      default: h(() => [...N[45] || (N[45] = [
                        x(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Oe, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => ts(oe.reference.node_type)
                    }, {
                      default: h(() => [...N[46] || (N[46] = [
                        x(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Oe, {
                      class: "community-choice-button",
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ke) => qt(oe.reference.node_type)
                    }, {
                      default: h(() => [...N[47] || (N[47] = [
                        x(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          E.value === "models" ? (o(), R(Qw, {
            key: 3,
            models: Se.value,
            "model-choices": U.value,
            onMarkOptional: H,
            onSkip: fe,
            onOptionSelected: Le,
            onDownloadUrl: $e,
            onClearChoice: qe
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          E.value === "review" ? (o(), i("div", Uk, [
            s("div", Ok, [
              N[53] || (N[53] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Ak, [
                s("div", zk, [
                  s("span", Fk, m(pe.value), 1),
                  N[48] || (N[48] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", Vk, [
                  s("span", Bk, m(be.value), 1),
                  N[49] || (N[49] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", Wk, [
                  s("span", Gk, m(je.value), 1),
                  N[50] || (N[50] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", jk, [
                  s("span", Hk, m(Ve.value), 1),
                  N[51] || (N[51] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              _e.value.length > 0 ? (o(), i("div", qk, [
                s("h4", Kk, "Node Packages (" + m(_e.value.length) + ")", 1),
                s("div", Jk, [
                  (o(!0), i(V, null, ye(_e.value, (oe) => (o(), i("div", {
                    key: oe.package_id,
                    class: "review-item"
                  }, [
                    s("code", Qk, m(oe.package_id), 1),
                    s("div", Yk, [
                      F.value.has(oe.package_id) ? (o(), i("span", Zk, "Skipped")) : (o(), i("span", Xk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              L.value.length > 0 ? (o(), i("div", eb, [
                s("h4", tb, "Community-Mapped Packages (" + m(L.value.length) + ")", 1),
                s("div", sb, [
                  (o(!0), i(V, null, ye(L.value, (oe) => {
                    var Ke, et, mt;
                    return o(), i("div", {
                      key: `review-community-${oe.reference.node_type}-${oe.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", nb, m(oe.reference.node_type), 1),
                      s("div", ob, [
                        ((Ke = nt(oe.reference.node_type)) == null ? void 0 : Ke.action) === "install" ? (o(), i("span", ab, m(((et = nt(oe.reference.node_type)) == null ? void 0 : et.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((mt = nt(oe.reference.node_type)) == null ? void 0 : mt.action) === "optional" ? (o(), i("span", lb, " Optional ")) : (o(), i("span", ib, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (o(), i("div", rb, [
                s("h4", cb, "Node Choices (" + m(le.value.length) + ")", 1),
                s("div", ub, [
                  (o(!0), i(V, null, ye(le.value, (oe) => {
                    var Ke, et, mt, Ut, cs, us;
                    return o(), i("div", {
                      key: oe.node_type,
                      class: "review-item"
                    }, [
                      s("code", db, m(oe.node_type), 1),
                      s("div", mb, [
                        O.value.has(oe.node_type) ? (o(), i(V, { key: 0 }, [
                          ((Ke = O.value.get(oe.node_type)) == null ? void 0 : Ke.action) === "install" ? (o(), i("span", fb, m((et = O.value.get(oe.node_type)) == null ? void 0 : et.package_id), 1)) : ((mt = O.value.get(oe.node_type)) == null ? void 0 : mt.action) === "map-installed" ? (o(), i("span", vb, " Mapped to " + m((Ut = O.value.get(oe.node_type)) == null ? void 0 : Ut.package_id), 1)) : ((cs = O.value.get(oe.node_type)) == null ? void 0 : cs.action) === "optional" ? (o(), i("span", pb, " Optional ")) : ((us = O.value.get(oe.node_type)) == null ? void 0 : us.action) === "skip" ? (o(), i("span", gb, " Skip ")) : y("", !0)
                        ], 64)) : (o(), i("span", hb, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              X.value.length > 0 ? (o(), i("div", yb, [
                s("h4", wb, "Models to Download (" + m(X.value.length) + ")", 1),
                s("div", _b, [
                  (o(!0), i(V, null, ye(X.value, (oe) => (o(), i("div", {
                    key: oe.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", kb, [
                      s("code", bb, m(oe.filename), 1),
                      s("div", $b, [
                        s("span", Cb, "→ " + m(oe.target_path), 1),
                        oe.url ? (o(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: oe.url
                        }, m(j(oe.url)), 9, xb)) : y("", !0)
                      ])
                    ]),
                    N[52] || (N[52] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Se.value.length > 0 ? (o(), i("div", Sb, [
                s("h4", Ib, "Models (" + m(Se.value.length) + ")", 1),
                s("div", Eb, [
                  (o(!0), i(V, null, ye(Se.value, (oe) => {
                    var Ke, et, mt, Ut, cs, us, gt;
                    return o(), i("div", {
                      key: oe.filename,
                      class: "review-item"
                    }, [
                      s("code", Tb, m(oe.filename), 1),
                      s("div", Mb, [
                        U.value.has(oe.filename) ? (o(), i(V, { key: 0 }, [
                          ((Ke = U.value.get(oe.filename)) == null ? void 0 : Ke.action) === "select" ? (o(), i("span", Pb, m((mt = (et = U.value.get(oe.filename)) == null ? void 0 : et.selected_model) == null ? void 0 : mt.filename), 1)) : ((Ut = U.value.get(oe.filename)) == null ? void 0 : Ut.action) === "download" ? (o(), i("span", Rb, " Download ")) : ((cs = U.value.get(oe.filename)) == null ? void 0 : cs.action) === "optional" ? (o(), i("span", Db, " Optional ")) : ((us = U.value.get(oe.filename)) == null ? void 0 : us.action) === "skip" ? (o(), i("span", Nb, " Skip ")) : ((gt = U.value.get(oe.filename)) == null ? void 0 : gt.action) === "cancel_download" ? (o(), i("span", Lb, " Cancel Download ")) : y("", !0)
                        ], 64)) : oe.is_download_intent ? (o(), i("span", Ub, " Pending Download ")) : (o(), i("span", Ob, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              Ne.value.length === 0 && L.value.length === 0 && le.value.length === 0 && Se.value.length === 0 ? (o(), i("div", Ab, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          E.value === "applying" ? (o(), R(l_, {
            key: 5,
            progress: it(d),
            onRestart: vt,
            onRetryFailed: It
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        E.value !== "analysis" && E.value !== "applying" ? (o(), R(Oe, {
          key: 0,
          variant: "secondary",
          disabled: C.value,
          onClick: He
        }, {
          default: h(() => [...N[54] || (N[54] = [
            x(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        N[56] || (N[56] = s("div", { class: "footer-spacer" }, null, -1)),
        E.value !== "applying" || it(d).phase === "complete" || it(d).phase === "error" ? (o(), R(Oe, {
          key: 1,
          variant: "secondary",
          onClick: N[0] || (N[0] = (oe) => a("close"))
        }, {
          default: h(() => [
            x(m(it(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "analysis" ? (o(), R(Oe, {
          key: 2,
          variant: "primary",
          disabled: S.value,
          onClick: es
        }, {
          default: h(() => [
            x(m(ze.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        E.value === "nodes" || E.value === "packages" || E.value === "models" ? (o(), R(Oe, {
          key: 3,
          variant: "primary",
          onClick: Te
        }, {
          default: h(() => [
            x(" Continue to " + m(Ze()) + " → ", 1)
          ]),
          _: 1
        })) : y("", !0),
        E.value === "review" ? (o(), R(Oe, {
          key: 4,
          variant: "primary",
          disabled: C.value,
          loading: C.value,
          onClick: ct
        }, {
          default: h(() => [...N[55] || (N[55] = [
            x(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Fb = /* @__PURE__ */ Me(zb, [["__scopeId", "data-v-f198a009"]]), Vb = { class: "search-input-wrapper" }, Bb = ["value", "placeholder"], Wb = /* @__PURE__ */ Ie({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(null);
    let r;
    function c(d) {
      const f = d.target.value;
      n.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, n.debounce)) : a("update:modelValue", f);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return dt(() => {
      n.autoFocus && l.value && l.value.focus();
    }), (d, f) => (o(), i("div", Vb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: Ss(u, ["escape"])
      }, null, 40, Bb),
      e.clearable && e.modelValue ? (o(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), Gb = /* @__PURE__ */ Me(Wb, [["__scopeId", "data-v-266f857a"]]), jb = { class: "search-bar" }, Hb = /* @__PURE__ */ Ie({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, n) => (o(), i("div", jb, [
      b(Gb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": n[0] || (n[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: n[1] || (n[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), bn = /* @__PURE__ */ Me(Hb, [["__scopeId", "data-v-3d51bbfd"]]), qb = { class: "section-group" }, Kb = {
  key: 0,
  class: "section-content"
}, Jb = /* @__PURE__ */ Ie({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.initiallyExpanded);
    function r() {
      n.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (o(), i("section", qb, [
      b(_s, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          x(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (o(), i("div", Kb, [
        rt(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Dt = /* @__PURE__ */ Me(Jb, [["__scopeId", "data-v-c48e33ed"]]), Qb = { class: "item-header" }, Yb = {
  key: 0,
  class: "item-icon"
}, Xb = { class: "item-info" }, Zb = {
  key: 0,
  class: "item-title"
}, e2 = {
  key: 1,
  class: "item-subtitle"
}, t2 = {
  key: 0,
  class: "item-details"
}, s2 = {
  key: 1,
  class: "item-actions"
}, n2 = /* @__PURE__ */ Ie({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = M(() => n.status ? `status-${n.status}` : "");
    return (l, r) => (o(), i("div", {
      class: Fe(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", Qb, [
        l.$slots.icon ? (o(), i("span", Yb, [
          rt(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", Xb, [
          l.$slots.title ? (o(), i("div", Zb, [
            rt(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (o(), i("div", e2, [
            rt(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (o(), i("div", t2, [
        rt(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (o(), i("div", s2, [
        rt(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qt = /* @__PURE__ */ Me(n2, [["__scopeId", "data-v-cc435e0e"]]), o2 = { class: "empty-state" }, a2 = {
  key: 0,
  class: "empty-icon"
}, l2 = { class: "empty-message" }, i2 = /* @__PURE__ */ Ie({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, n) => (o(), i("div", o2, [
      e.icon ? (o(), i("div", a2, m(e.icon), 1)) : y("", !0),
      s("p", l2, m(e.message), 1),
      e.actionLabel ? (o(), R(Re, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          x(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), Ms = /* @__PURE__ */ Me(i2, [["__scopeId", "data-v-4466284f"]]), r2 = { class: "loading-state" }, c2 = { class: "loading-message" }, u2 = /* @__PURE__ */ Ie({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, n) => (o(), i("div", r2, [
      n[0] || (n[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", c2, m(e.message), 1)
    ]));
  }
}), Vs = /* @__PURE__ */ Me(u2, [["__scopeId", "data-v-ad8436c9"]]), d2 = { class: "error-state" }, m2 = { class: "error-message" }, f2 = /* @__PURE__ */ Ie({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, n) => (o(), i("div", d2, [
      n[2] || (n[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", m2, m(e.message), 1),
      e.retry ? (o(), R(Re, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: n[0] || (n[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...n[1] || (n[1] = [
          x(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Bs = /* @__PURE__ */ Me(f2, [["__scopeId", "data-v-5397be48"]]);
function v2(e) {
  return e.toLowerCase().endsWith(".json") ? e : `${e}.json`;
}
function Di(e) {
  return Array.from(new Set(e.filter(Boolean)));
}
function p2(e) {
  const t = e.trim(), n = v2(t);
  return t.startsWith("workflows/") ? Di([n, t]) : Di([
    `workflows/${n}`,
    n,
    t
  ]);
}
function g2(e) {
  return e.trim().replace(/^workflows\//, "").replace(/\.json$/i, "");
}
async function h2(e) {
  const t = p2(e), n = [];
  for (const a of t)
    try {
      const l = await Js(`/userdata/${encodeURIComponent(a)}`);
      if (l.ok)
        return l.json();
      n.push(`${a}: ${l.status}`);
    } catch (l) {
      n.push(`${a}: ${l instanceof Error ? l.message : String(l)}`);
    }
  throw new Error(`Could not load saved workflow "${e}" (${n.join(", ")})`);
}
async function y2(e) {
  const t = window.app;
  if (typeof t.loadGraphData != "function")
    throw new Error("ComfyUI loadGraphData is not available");
  const n = await h2(e);
  await t.loadGraphData(
    n,
    !0,
    !0,
    g2(e),
    {
      showMissingModelsDialog: !0,
      showMissingNodesDialog: !0
    }
  ), await new Promise((a) => requestAnimationFrame(a));
}
const w2 = /* @__PURE__ */ Ie({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getWorkflows: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(""), f = _(!0), p = _(!1), v = _(!1), w = _(!1), g = _(null), k = M(
      () => r.value.filter((q) => q.status === "broken")
    ), $ = M(
      () => r.value.filter((q) => q.status === "new")
    ), S = M(
      () => r.value.filter((q) => q.status === "modified")
    ), C = M(
      () => r.value.filter((q) => q.status === "synced")
    ), I = M(() => {
      if (!d.value.trim()) return r.value;
      const q = d.value.toLowerCase();
      return r.value.filter((Q) => Q.name.toLowerCase().includes(q));
    }), E = M(
      () => k.value.filter(
        (q) => !d.value.trim() || q.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), P = M(
      () => $.value.filter(
        (q) => !d.value.trim() || q.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), O = M(
      () => S.value.filter(
        (q) => !d.value.trim() || q.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), U = M(
      () => C.value.filter(
        (q) => !d.value.trim() || q.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), F = M(
      () => p.value ? U.value : U.value.slice(0, 5)
    );
    async function D(q = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(q);
      } catch (Q) {
        u.value = Q instanceof Error ? Q.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: D });
    function W(q) {
      g.value = q, v.value = !0;
    }
    function ce(q) {
      g.value = q, v.value = !1, w.value = !0;
    }
    async function de(q) {
      g.value = q;
      try {
        await y2(q);
      } catch (Q) {
        console.error("[ComfyGit] Failed to activate workflow for contract mapping:", Q), u.value = Q instanceof Error ? Q.message : "Failed to open workflow for contract mapping";
        return;
      }
      window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: q }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function J(q) {
      var Pe;
      const ae = (Pe = q.detail) == null ? void 0 : Pe.workflowName;
      ae && de(ae);
    }
    function ve() {
    }
    function K() {
      a("refresh", { refreshWorkflows: !1 });
    }
    async function L() {
      w.value = !1, await D(!0);
    }
    async function G() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function re(q) {
      return q.replace(/uninstallable node mappings?/gi, (Q) => Q.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function te(q) {
      if (q.issue_summary && q.issue_summary.trim().length > 0)
        return re(q.issue_summary);
      const Q = [];
      return q.version_gated_count && q.version_gated_count > 0 && Q.push(`${q.version_gated_count} node${q.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), q.uninstallable_count && q.uninstallable_count > 0 && Q.push(`${q.uninstallable_count} node${q.uninstallable_count > 1 ? "s" : ""} need community packages`), q.missing_nodes > 0 && Q.push(`${q.missing_nodes} missing node${q.missing_nodes > 1 ? "s" : ""}`), q.missing_models > 0 && Q.push(`${q.missing_models} missing model${q.missing_models > 1 ? "s" : ""}`), q.models_with_category_mismatch && q.models_with_category_mismatch > 0 && Q.push(`${q.models_with_category_mismatch} model${q.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), q.pending_downloads && q.pending_downloads > 0 && Q.push(`${q.pending_downloads} pending download${q.pending_downloads > 1 ? "s" : ""}`), Q.length > 0 ? Q.join(", ") : "Has issues";
    }
    function ue(q) {
      const Q = q.sync_state === "new" ? "New" : q.sync_state === "modified" ? "Modified" : q.sync_state === "synced" ? "Synced" : q.sync_state, ae = me(q);
      return q.has_path_sync_issues && q.models_needing_path_sync && q.models_needing_path_sync > 0 ? `${q.models_needing_path_sync} model path${q.models_needing_path_sync > 1 ? "s" : ""} need${q.models_needing_path_sync === 1 ? "s" : ""} sync · ${ae}` : `${Q || "Unknown"} · ${ae}`;
    }
    function me(q) {
      const Q = q.contract_summary;
      return !Q || !Q.has_contract ? "No contract" : Q.status === "incomplete" ? `${Q.input_count} in / ${Q.output_count} out · incomplete` : `${Q.input_count} in / ${Q.output_count} out`;
    }
    return dt(() => {
      D(), window.addEventListener("comfygit:open-workflow-contract", J);
    }), To(() => {
      window.removeEventListener("comfygit:open-workflow-contract", J);
    }), (q, Q) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(bn, {
            modelValue: d.value,
            "onUpdate:modelValue": Q[0] || (Q[0] = (ae) => d.value = ae),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (o(), R(Bs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            E.value.length ? (o(), R(Dt, {
              key: 0,
              title: "BROKEN",
              count: E.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(E.value, (ae) => (o(), R(Qt, {
                  key: ae.name,
                  status: "broken"
                }, {
                  icon: h(() => [...Q[6] || (Q[6] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(te(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Pe) => ce(ae.name)
                    }, {
                      default: h(() => [...Q[7] || (Q[7] = [
                        x(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => W(ae.name)
                    }, {
                      default: h(() => [...Q[8] || (Q[8] = [
                        x(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => de(ae.name)
                    }, {
                      default: h(() => [...Q[9] || (Q[9] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), R(Dt, {
              key: 1,
              title: "NEW",
              count: P.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(P.value, (ae) => (o(), R(Qt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    x(m(ae.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ue(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => W(ae.name)
                    }, {
                      default: h(() => [...Q[10] || (Q[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => de(ae.name)
                    }, {
                      default: h(() => [...Q[11] || (Q[11] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (o(), R(Dt, {
              key: 2,
              title: "MODIFIED",
              count: O.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(O.value, (ae) => (o(), R(Qt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...Q[12] || (Q[12] = [
                    x("⚡", -1)
                  ])]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ue(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => W(ae.name)
                    }, {
                      default: h(() => [...Q[13] || (Q[13] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => de(ae.name)
                    }, {
                      default: h(() => [...Q[14] || (Q[14] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (o(), R(Dt, {
              key: 3,
              title: "SYNCED",
              count: U.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: Q[2] || (Q[2] = (ae) => f.value = ae)
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(F.value, (ae) => (o(), R(Qt, {
                  key: ae.name,
                  status: ae.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    x(m(ae.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    x(m(ae.name), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(ue(ae)), 1)
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => W(ae.name)
                    }, {
                      default: h(() => [...Q[15] || (Q[15] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (Pe) => de(ae.name)
                    }, {
                      default: h(() => [...Q[16] || (Q[16] = [
                        x(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !p.value && U.value.length > 5 ? (o(), R(Re, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: Q[1] || (Q[1] = (ae) => p.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    x(" View all " + m(U.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (o(), R(Ms, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      v.value && g.value ? (o(), R(Oy, {
        key: 0,
        "workflow-name": g.value,
        onClose: Q[3] || (Q[3] = (ae) => v.value = !1),
        onResolve: Q[4] || (Q[4] = (ae) => ce(g.value)),
        onRefresh: Q[5] || (Q[5] = (ae) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (o(), R(Fb, {
        key: 1,
        "workflow-name": g.value,
        onClose: L,
        onInstall: ve,
        onRefresh: K,
        onRestart: G
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), _2 = /* @__PURE__ */ Me(w2, [["__scopeId", "data-v-7bf48b3a"]]), k2 = /* @__PURE__ */ Ie({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Fe(["summary-bar", e.variant])
    }, [
      rt(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Rl = /* @__PURE__ */ Me(k2, [["__scopeId", "data-v-ccb7816e"]]);
async function Dl(e) {
  var n;
  if (typeof navigator < "u" && ((n = navigator.clipboard) != null && n.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const t = document.createElement("textarea");
  t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "-1000px", t.style.left = "-1000px", t.style.opacity = "0", document.body.appendChild(t);
  try {
    if (t.focus(), t.select(), t.setSelectionRange(0, t.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    t.remove();
  }
}
const b2 = {
  key: 0,
  class: "model-details"
}, $2 = { class: "detail-section" }, C2 = { class: "detail-row" }, x2 = { class: "detail-value mono" }, S2 = { class: "detail-row" }, I2 = { class: "detail-value mono" }, E2 = { class: "detail-row" }, T2 = { class: "detail-value mono" }, M2 = {
  key: 0,
  class: "detail-row"
}, P2 = { class: "detail-value" }, R2 = ["disabled"], D2 = {
  key: 1,
  class: "detail-row"
}, N2 = { class: "detail-value hash-error" }, L2 = { class: "detail-row" }, U2 = { class: "detail-value" }, O2 = { class: "detail-row" }, A2 = { class: "detail-value" }, z2 = { class: "detail-row" }, F2 = { class: "detail-value" }, V2 = { class: "detail-section" }, B2 = { class: "section-header" }, W2 = {
  key: 0,
  class: "locations-list"
}, G2 = { class: "location-path mono" }, j2 = {
  key: 0,
  class: "location-modified"
}, H2 = ["onClick"], q2 = {
  key: 1,
  class: "empty-state"
}, K2 = { class: "detail-section" }, J2 = { class: "section-header-row" }, Q2 = { class: "section-header" }, Y2 = {
  key: 0,
  class: "sources-list"
}, X2 = { class: "source-type" }, Z2 = ["href"], e$ = ["disabled", "onClick"], t$ = {
  key: 1,
  class: "empty-state"
}, s$ = {
  key: 2,
  class: "source-error"
}, n$ = {
  key: 3,
  class: "source-success"
}, o$ = /* @__PURE__ */ Ie({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const n = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ft(), u = _(null), d = _(!0), f = _(null), p = _(null), v = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = M(() => {
      var de;
      return !!((de = u.value) != null && de.hash && (!u.value.blake3 || !u.value.sha256));
    }), C = _(null);
    let I = null;
    function E(de, J = "success", ve = 2e3) {
      I && clearTimeout(I), C.value = { message: de, type: J }, I = setTimeout(() => {
        C.value = null;
      }, ve);
    }
    function P(de) {
      if (!de) return "Unknown";
      const J = 1024 * 1024 * 1024, ve = 1024 * 1024;
      return de >= J ? `${(de / J).toFixed(1)} GB` : de >= ve ? `${(de / ve).toFixed(0)} MB` : `${(de / 1024).toFixed(0)} KB`;
    }
    async function O(de) {
      try {
        await Dl(de), E("Copied to clipboard!");
      } catch (J) {
        console.error("Failed to copy:", J), E("Failed to copy to clipboard", "error");
      }
    }
    async function U(de) {
      if (u.value) {
        p.value = de, v.value = null, w.value = null;
        try {
          await r(u.value.hash, de), E("Source removed"), await ce();
        } catch (J) {
          v.value = J instanceof Error ? J.message : "Failed to remove source";
        } finally {
          p.value = null;
        }
      }
    }
    async function F() {
      w.value = "Source added successfully!", g.value = !1, await ce(), a("sourceSaved");
    }
    async function D() {
      await ce();
    }
    async function W() {
      var de;
      if ((de = u.value) != null && de.hash) {
        k.value = !0, $.value = null;
        try {
          u.value = await c(u.value.hash), E("Hashes computed successfully!");
        } catch (J) {
          $.value = J instanceof Error ? J.message : "Failed to compute hashes";
        } finally {
          k.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, f.value = null;
      try {
        u.value = await l(n.identifier);
      } catch (de) {
        f.value = de instanceof Error ? de.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return dt(ce), (de, J) => {
      var ve;
      return o(), i(V, null, [
        b(Mt, {
          title: `Model Details: ${((ve = u.value) == null ? void 0 : ve.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: f.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: J[5] || (J[5] = (K) => de.$emit("close"))
        }, {
          body: h(() => {
            var K, L, G, re;
            return [
              u.value ? (o(), i("div", b2, [
                s("section", $2, [
                  s("div", C2, [
                    J[7] || (J[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", x2, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[0] || (J[0] = (te) => O(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", S2, [
                    J[8] || (J[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", I2, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[1] || (J[1] = (te) => O(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", E2, [
                    J[9] || (J[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", T2, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (o(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: J[2] || (J[2] = (te) => O(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  S.value ? (o(), i("div", M2, [
                    J[10] || (J[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", P2, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: k.value,
                        onClick: W
                      }, m(k.value ? "Computing hashes..." : "Compute Full Hashes"), 9, R2)
                    ])
                  ])) : y("", !0),
                  $.value ? (o(), i("div", D2, [
                    J[11] || (J[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", N2, m($.value), 1)
                  ])) : y("", !0),
                  s("div", L2, [
                    J[12] || (J[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", U2, m(P(u.value.size)), 1)
                  ]),
                  s("div", O2, [
                    J[13] || (J[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", A2, m(u.value.category), 1)
                  ]),
                  s("div", z2, [
                    J[14] || (J[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", F2, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", V2, [
                  s("h4", B2, "Locations (" + m(((K = u.value.locations) == null ? void 0 : K.length) || 0) + ")", 1),
                  (L = u.value.locations) != null && L.length ? (o(), i("div", W2, [
                    (o(!0), i(V, null, ye(u.value.locations, (te, ue) => (o(), i("div", {
                      key: ue,
                      class: "location-item"
                    }, [
                      s("span", G2, m(te.path), 1),
                      te.modified ? (o(), i("span", j2, "Modified: " + m(te.modified), 1)) : y("", !0),
                      te.path ? (o(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (me) => O(te.path)
                      }, " Copy File Path ", 8, H2)) : y("", !0)
                    ]))), 128))
                  ])) : (o(), i("div", q2, "No locations found"))
                ]),
                s("section", K2, [
                  s("div", J2, [
                    s("h4", Q2, "Download Sources (" + m(((G = u.value.sources) == null ? void 0 : G.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: J[3] || (J[3] = (te) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (re = u.value.sources) != null && re.length ? (o(), i("div", Y2, [
                    (o(!0), i(V, null, ye(u.value.sources, (te, ue) => (o(), i("div", {
                      key: ue,
                      class: "source-item"
                    }, [
                      s("span", X2, m(te.type) + ":", 1),
                      s("a", {
                        href: te.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(te.url), 9, Z2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: p.value === te.url,
                        onClick: (me) => U(te.url)
                      }, m(p.value === te.url ? "..." : "×"), 9, e$)
                    ]))), 128))
                  ])) : (o(), i("div", t$, " No download sources configured ")),
                  v.value ? (o(), i("p", s$, m(v.value), 1)) : y("", !0),
                  w.value ? (o(), i("p", n$, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: J[4] || (J[4] = (K) => de.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (o(), R(rs, { to: "body" }, [
          C.value ? (o(), i("div", {
            key: 0,
            class: Fe(["toast", C.value.type])
          }, m(C.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (o(), R(fc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: J[6] || (J[6] = (K) => g.value = !1),
          onSaved: F,
          onHashesComputed: D
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), yc = /* @__PURE__ */ Me(o$, [["__scopeId", "data-v-cd808fbc"]]), a$ = { class: "workflow-links-tab" }, l$ = { class: "section-header-row" }, i$ = {
  key: 0,
  class: "state-message"
}, r$ = {
  key: 1,
  class: "error-message"
}, c$ = {
  key: 2,
  class: "candidate-list"
}, u$ = {
  key: 3,
  class: "state-message"
}, d$ = /* @__PURE__ */ Ie({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const n = t, { getWorkflowSourceCandidates: a } = ft(), l = _([]), r = _(!1), c = _(null), u = M(() => l.value.filter((f) => f.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const f = await a();
        l.value = f.candidates;
      } catch (f) {
        c.value = f instanceof Error ? f.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return dt(d), (f, p) => (o(), i("div", a$, [
      s("div", l$, [
        p[2] || (p[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Oe, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...p[1] || (p[1] = [
            x(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (o(), i("div", i$, "Scanning workflows...")) : c.value ? (o(), i("div", r$, m(c.value), 1)) : u.value.length ? (o(), i("div", c$, [
        (o(!0), i(V, null, ye(u.value, (v) => (o(), R(dc, {
          key: `${v.workflow}:${v.url}`,
          candidate: v,
          "action-label": "Use URL",
          onSelect: p[0] || (p[0] = (w) => n("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (o(), i("div", u$, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), m$ = /* @__PURE__ */ Me(d$, [["__scopeId", "data-v-1aac54cc"]]), f$ = { class: "civitai-tab" }, v$ = /* @__PURE__ */ Ie({
  __name: "CivitaiTab",
  setup(e) {
    return (t, n) => (o(), i("div", f$, [...n[0] || (n[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), p$ = /* @__PURE__ */ Me(v$, [["__scopeId", "data-v-44948051"]]), g$ = { class: "direct-url-tab" }, h$ = {
  key: 0,
  class: "error"
}, y$ = /* @__PURE__ */ Ie({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(""), r = _("");
    $t(() => n.initialUrl, (f) => {
      f && f !== l.value && (l.value = f);
    }, { immediate: !0 });
    const c = M(() => {
      const f = l.value.trim();
      if (!f) return "";
      try {
        const p = new URL(f);
        return decodeURIComponent(p.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return f.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (f) => {
      if (!r.value.trim() || !c.value) return;
      const p = d(r.value, c.value);
      a("queue", [{
        url: f,
        targetPath: p,
        filename: c.value
      }]), l.value = "";
    };
    function d(f, p) {
      return `${f.replace(/\/+$/, "")}/${p.replace(/^\/+/, "")}`;
    }
    return (f, p) => (o(), i("div", g$, [
      b(mc, {
        modelValue: l.value,
        "onUpdate:modelValue": p[1] || (p[1] = (v) => l.value = v),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(cc, {
            modelValue: r.value,
            "onUpdate:modelValue": p[0] || (p[0] = (v) => r.value = v)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (o(), i("p", h$, " Could not infer a filename from this URL. ")) : y("", !0),
          p[2] || (p[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), w$ = /* @__PURE__ */ Me(y$, [["__scopeId", "data-v-a6d21f27"]]), _$ = { class: "download-modal" }, k$ = { class: "tab-bar" }, b$ = ["onClick"], $$ = { class: "tab-content" }, C$ = /* @__PURE__ */ Ie({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = t, { addToQueue: a } = qn(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = _("workflow"), c = _("");
    function u(v) {
      a(v.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), n("close");
    }
    function d(v) {
      a(v.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), n("close");
    }
    function f(v) {
      c.value = v, r.value = "direct";
    }
    function p() {
      n("close");
    }
    return (v, w) => e.show ? (o(), R(Mt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: p
    }, {
      body: h(() => [
        s("div", _$, [
          s("div", k$, [
            (o(), i(V, null, ye(l, (g) => s("button", {
              key: g.id,
              class: Fe(["tab-btn", { active: r.value === g.id }]),
              onClick: (k) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, b$)), 64))
          ]),
          s("div", $$, [
            r.value === "workflow" ? (o(), R(m$, {
              key: 0,
              onSelectUrl: f
            })) : r.value === "huggingface" ? (o(), R(uc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (o(), R(p$, { key: 2 })) : r.value === "direct" ? (o(), R(w$, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: p
        }, {
          default: h(() => [...w[0] || (w[0] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), wc = /* @__PURE__ */ Me(C$, [["__scopeId", "data-v-de2e4fac"]]), x$ = /* @__PURE__ */ Ie({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const n = t, { getEnvironmentModels: a, getStatus: l } = ft(), r = _([]), c = _([]), u = _("production"), d = _(!1), f = _(null), p = _(""), v = _(!1), w = _(null), g = _(!1);
    function k() {
      v.value = !1, n("navigate", "model-index");
    }
    const $ = M(
      () => r.value.reduce((D, W) => D + (W.size || 0), 0)
    ), S = M(() => {
      if (!p.value.trim()) return r.value;
      const D = p.value.toLowerCase();
      return r.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), C = M(() => {
      if (!p.value.trim()) return c.value;
      const D = p.value.toLowerCase();
      return c.value.filter((W) => W.filename.toLowerCase().includes(D));
    }), I = M(() => {
      const D = {};
      for (const ce of S.value) {
        const de = ce.type || "other";
        D[de] || (D[de] = []), D[de].push(ce);
      }
      const W = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(D).sort(([ce], [de]) => {
        const J = W.indexOf(ce), ve = W.indexOf(de);
        return J >= 0 && ve >= 0 ? J - ve : J >= 0 ? -1 : ve >= 0 ? 1 : ce.localeCompare(de);
      }).map(([ce, de]) => ({ type: ce, models: de }));
    });
    function E(D) {
      if (!D) return "Unknown";
      const W = D / (1024 * 1024);
      return W >= 1024 ? `${(W / 1024).toFixed(1)} GB` : `${W.toFixed(0)} MB`;
    }
    function P(D) {
      w.value = D.hash || D.filename;
    }
    function O(D) {
      n("navigate", "model-index");
    }
    function U(D) {
      alert(`Download functionality not yet implemented for ${D}`);
    }
    async function F() {
      d.value = !0, f.value = null;
      try {
        const D = await a();
        r.value = D, c.value = [];
        const W = await l();
        u.value = W.environment || "production";
      } catch (D) {
        f.value = D instanceof Error ? D.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return dt(F), (D, W) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: W[1] || (W[1] = (ce) => v.value = !0)
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: W[0] || (W[0] = (ce) => g.value = !0)
              }, {
                default: h(() => [...W[6] || (W[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(bn, {
            modelValue: p.value,
            "onUpdate:modelValue": W[2] || (W[2] = (ce) => p.value = ce),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (o(), R(Bs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: F
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            r.value.length ? (o(), R(Rl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(r.value.length) + " models • " + m(E($.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(V, null, ye(I.value, (ce) => (o(), R(Dt, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(ce.models, (de) => (o(), R(Qt, {
                  key: de.hash || de.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...W[7] || (W[7] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(de.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(E(de.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: (de.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Path:",
                      value: de.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (J) => P(de)
                    }, {
                      default: h(() => [...W[8] || (W[8] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (o(), R(Dt, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(C.value, (ce) => (o(), R(Qt, {
                  key: ce.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...W[9] || (W[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [...W[10] || (W[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var de;
                    return [
                      b(Tt, {
                        label: "Required by:",
                        value: ((de = ce.workflow_names) == null ? void 0 : de.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (de) => U(ce.filename)
                    }, {
                      default: h(() => [...W[11] || (W[11] = [
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (de) => O(ce.filename)
                    }, {
                      default: h(() => [...W[12] || (W[12] = [
                        x(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !S.value.length && !C.value.length ? (o(), R(Ms, {
              key: 2,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: v.value,
        title: "About Environment Models",
        onClose: W[3] || (W[3] = (ce) => v.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            W[13] || (W[13] = x(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            W[14] || (W[14] = x(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            onClick: k
          }, {
            default: h(() => [...W[15] || (W[15] = [
              x(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(yc, {
        key: 0,
        identifier: w.value,
        onClose: W[4] || (W[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(wc, {
        show: g.value,
        onClose: W[5] || (W[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), S$ = /* @__PURE__ */ Me(x$, [["__scopeId", "data-v-af3ca736"]]), I$ = {
  key: 0,
  class: "indexing-progress"
}, E$ = { class: "progress-info" }, T$ = { class: "progress-label" }, M$ = { class: "progress-count" }, P$ = { class: "progress-bar" }, R$ = { class: "directory-modal-body" }, D$ = { class: "input-group" }, N$ = { class: "current-path" }, L$ = { class: "input-group" }, U$ = /* @__PURE__ */ Ie({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: n,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ft(), c = t, u = _([]), d = _(!1), f = _(!1), p = _(null), v = _(""), w = _(!1), g = _(null), k = _(!1), $ = _(null), S = _(""), C = _(!1), I = _(!1), E = _(null), P = M(
      () => u.value.reduce((ve, K) => ve + (K.size || 0), 0)
    ), O = M(() => {
      if (!v.value.trim()) return u.value;
      const ve = v.value.toLowerCase();
      return u.value.filter((K) => {
        const L = K, G = K.sha256 || L.sha256_hash || "";
        return K.filename.toLowerCase().includes(ve) || G.toLowerCase().includes(ve);
      });
    }), U = M(() => {
      const ve = {};
      for (const L of O.value) {
        const G = L.type || "other";
        ve[G] || (ve[G] = []), ve[G].push(L);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(ve).sort(([L], [G]) => {
        const re = K.indexOf(L), te = K.indexOf(G);
        return re >= 0 && te >= 0 ? re - te : re >= 0 ? -1 : te >= 0 ? 1 : L.localeCompare(G);
      }).map(([L, G]) => ({ type: L, models: G }));
    });
    function F(ve) {
      if (!ve) return "Unknown";
      const K = 1024 * 1024 * 1024, L = 1024 * 1024;
      return ve >= K ? `${(ve / K).toFixed(1)} GB` : ve >= L ? `${(ve / L).toFixed(0)} MB` : `${(ve / 1024).toFixed(0)} KB`;
    }
    function D(ve) {
      g.value = ve.hash || ve.filename;
    }
    async function W() {
      f.value = !0, p.value = null;
      try {
        const ve = await a();
        await de(), ve.changes > 0 && console.log(`Scan complete: ${ve.changes} changes detected`);
      } catch (ve) {
        p.value = ve instanceof Error ? ve.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function ce() {
      if (S.value.trim()) {
        C.value = !0, p.value = null;
        try {
          const ve = await r(S.value.trim());
          $.value = ve.path, k.value = !1, S.value = "", await de(), console.log(`Directory changed: ${ve.models_indexed} models indexed`), c("refresh");
        } catch (ve) {
          p.value = ve instanceof Error ? ve.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function de() {
      d.value = !0, p.value = null;
      try {
        u.value = await n();
      } catch (ve) {
        p.value = ve instanceof Error ? ve.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function J() {
      try {
        const ve = await l();
        $.value = ve.path;
      } catch {
      }
    }
    return dt(() => {
      de(), J();
    }), (ve, K) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: K[2] || (K[2] = (L) => w.value = !0)
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: W
              }, {
                default: h(() => [
                  x(m(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (L) => k.value = !0)
              }, {
                default: h(() => [...K[10] || (K[10] = [
                  x(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: K[1] || (K[1] = (L) => I.value = !0)
              }, {
                default: h(() => [...K[11] || (K[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  x(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          E.value ? (o(), i("div", I$, [
            s("div", E$, [
              s("span", T$, m(E.value.message), 1),
              s("span", M$, m(E.value.current) + "/" + m(E.value.total), 1)
            ]),
            s("div", P$, [
              s("div", {
                class: "progress-fill",
                style: Ft({ width: `${E.value.current / E.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(bn, {
            modelValue: v.value,
            "onUpdate:modelValue": K[3] || (K[3] = (L) => v.value = L),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || E.value ? (o(), R(Vs, {
            key: 0,
            message: E.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : p.value ? (o(), R(Bs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: de
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            u.value.length ? (o(), R(Rl, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                x(" Total: " + m(u.value.length) + " models • " + m(F(P.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (o(!0), i(V, null, ye(U.value, (L) => (o(), R(Dt, {
              key: L.type,
              title: L.type.toUpperCase(),
              count: L.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(L.models, (G) => (o(), R(Qt, {
                  key: G.sha256 || G.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[12] || (K[12] = [
                    x("📦", -1)
                  ])]),
                  title: h(() => [
                    x(m(G.filename), 1)
                  ]),
                  subtitle: h(() => [
                    x(m(F(G.size)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Hash:",
                      value: G.hash ? G.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => D(G)
                    }, {
                      default: h(() => [...K[13] || (K[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            O.value.length ? y("", !0) : (o(), R(Ms, {
              key: 1,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: K[4] || (K[4] = (L) => w.value = !1)
      }, {
        content: h(() => [...K[14] || (K[14] = [
          s("p", null, [
            x(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            x(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (o(), R(yc, {
        key: 0,
        identifier: g.value,
        onClose: K[5] || (K[5] = (L) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      k.value ? (o(), R(Mt, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: K[8] || (K[8] = (L) => k.value = !1)
      }, {
        body: h(() => [
          s("div", R$, [
            s("div", D$, [
              K[15] || (K[15] = s("label", null, "Current Directory", -1)),
              s("code", N$, m($.value || "Not set"), 1)
            ]),
            s("div", L$, [
              K[16] || (K[16] = s("label", null, "New Directory Path", -1)),
              b(Pt, {
                modelValue: S.value,
                "onUpdate:modelValue": K[6] || (K[6] = (L) => S.value = L),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            K[17] || (K[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Oe, {
            variant: "secondary",
            onClick: K[7] || (K[7] = (L) => k.value = !1)
          }, {
            default: h(() => [...K[18] || (K[18] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: "primary",
            disabled: !S.value.trim() || C.value,
            loading: C.value,
            onClick: ce
          }, {
            default: h(() => [
              x(m(C.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(wc, {
        show: I.value,
        onClose: K[9] || (K[9] = (L) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), O$ = /* @__PURE__ */ Me(U$, [["__scopeId", "data-v-9fca048b"]]), A$ = { class: "node-details" }, z$ = { class: "status-row" }, F$ = {
  key: 0,
  class: "detail-row"
}, V$ = { class: "value" }, B$ = { class: "detail-row" }, W$ = { class: "value" }, G$ = {
  key: 1,
  class: "detail-row"
}, j$ = { class: "value mono" }, H$ = {
  key: 2,
  class: "detail-row"
}, q$ = ["href"], K$ = {
  key: 3,
  class: "detail-row"
}, J$ = { class: "value mono small" }, Q$ = { class: "detail-row" }, Y$ = {
  key: 0,
  class: "value"
}, X$ = {
  key: 1,
  class: "workflow-list"
}, Z$ = /* @__PURE__ */ Ie({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = M(() => n.node.installed ? n.node.tracked ? n.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = M(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[n.node.source] || n.node.source);
    return (u, d) => (o(), R(Mt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (f) => a("close"))
    }, {
      body: h(() => [
        s("div", A$, [
          s("div", z$, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Fe(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (o(), i("div", F$, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", V$, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", B$, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", W$, m(c.value), 1)
          ]),
          e.node.registry_id ? (o(), i("div", G$, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", j$, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (o(), i("div", H$, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              x(m(e.node.repository) + " ", 1),
              d[6] || (d[6] = s("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                s("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, q$)
          ])) : y("", !0),
          e.node.download_url ? (o(), i("div", K$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", J$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", Q$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (o(), i("span", Y$, " Not used in any workflows ")) : (o(), i("div", X$, [
              (o(!0), i(V, null, ye(e.node.used_in_workflows, (f) => (o(), i("span", {
                key: f,
                class: "workflow-tag"
              }, m(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (f) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            x(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), eC = /* @__PURE__ */ Me(Z$, [["__scopeId", "data-v-b342f626"]]), tC = { class: "dialog-message" }, sC = {
  key: 0,
  class: "dialog-details"
}, nC = {
  key: 1,
  class: "dialog-warning"
}, oC = /* @__PURE__ */ Ie({
  __name: "ConfirmDialog",
  props: {
    title: {},
    message: {},
    details: {},
    warning: {},
    confirmLabel: { default: "Confirm" },
    cancelLabel: { default: "Cancel" },
    secondaryLabel: { default: "Alternative" },
    secondaryAction: { type: Boolean, default: !1 },
    destructive: { type: Boolean, default: !1 }
  },
  emits: ["confirm", "cancel", "secondary"],
  setup(e) {
    return (t, n) => (o(), R(Mt, {
      title: e.title,
      size: "sm",
      onClose: n[3] || (n[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", tC, m(e.message), 1),
        e.details && e.details.length ? (o(), i("div", sC, [
          (o(!0), i(V, null, ye(e.details, (a, l) => (o(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (o(), i("p", nC, [
          n[4] || (n[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          x(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            x(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (o(), R(Oe, {
          key: 0,
          variant: "secondary",
          onClick: n[1] || (n[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            x(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Oe, {
          variant: e.destructive ? "danger" : "primary",
          onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            x(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Nl = /* @__PURE__ */ Me(oC, [["__scopeId", "data-v-3670b9f5"]]), aC = { class: "mismatch-warning" }, lC = { class: "version-mismatch" }, iC = { class: "version-actual" }, rC = { class: "version-expected" }, cC = { style: { color: "var(--cg-color-warning)" } }, uC = { style: { color: "var(--cg-color-warning)" } }, dC = {
  key: 0,
  class: "community-status-badge"
}, mC = { key: 0 }, fC = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, vC = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, pC = { class: "criticality-control" }, gC = ["value", "disabled", "onChange"], hC = /* @__PURE__ */ Ie({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: f
    } = ft(), p = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = _(!1), w = _(null), g = _(""), k = _(!1), $ = _(null), S = _(/* @__PURE__ */ new Set()), C = _(/* @__PURE__ */ new Set()), I = _(null), E = M(() => {
      if (!g.value.trim()) return p.value.nodes;
      const he = g.value.toLowerCase();
      return p.value.nodes.filter(
        (ke) => {
          var T, A;
          return ke.name.toLowerCase().includes(he) || ((T = ke.description) == null ? void 0 : T.toLowerCase().includes(he)) || ((A = ke.repository) == null ? void 0 : A.toLowerCase().includes(he));
        }
      );
    }), P = M(
      () => E.value.filter((he) => he.installed && he.tracked)
    ), O = M(
      () => E.value.filter((he) => !he.installed && he.tracked && !he.issue_type)
    ), U = M(
      () => E.value.filter((he) => he.installed && !he.tracked)
    ), F = M(
      () => E.value.filter((he) => he.issue_type === "version_gated")
    ), D = M(
      () => E.value.filter((he) => he.issue_type === "uninstallable")
    );
    function W(he) {
      return he.registry_id || he.name;
    }
    function ce(he) {
      return S.value.has(W(he));
    }
    async function de(he, ke) {
      const T = he.registry_id;
      if (!T) {
        a("toast", `Node "${he.name}" has no package id for install`, "warning");
        return;
      }
      if (ke === "git" && !he.repository) {
        a("toast", `Node "${he.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: T,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ke === "git" && he.repository && (A.repository = he.repository, A.install_source = "git"), await d(A), S.value.add(W(he)), a("toast", `✓ Queued install for "${he.name}"`, "success");
    }
    function J(he) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[he] || he;
    }
    const ve = M(() => n.versionMismatches.length > 0);
    function K(he) {
      return !he.used_in_workflows || he.used_in_workflows.length === 0 ? "Not used in any workflows" : he.used_in_workflows.length === 1 ? he.used_in_workflows[0] : `${he.used_in_workflows.length} workflows`;
    }
    function L(he) {
      return he.criticality === "optional" ? "optional" : "required";
    }
    function G(he) {
      return C.value.has(he.name);
    }
    async function re(he, ke) {
      const T = ke.target, A = L(he), le = T.value;
      if (le !== A) {
        C.value = new Set(C.value).add(he.name), he.criticality = le;
        try {
          const Ee = await f(he.name, le);
          if (Ee.status !== "success") {
            he.criticality = A, a("toast", Ee.message || `Failed to update "${he.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${he.name}" as ${le}`, "success");
        } catch (Ee) {
          he.criticality = A, T.value = A, a("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
        } finally {
          const Ee = new Set(C.value);
          Ee.delete(he.name), C.value = Ee;
        }
      }
    }
    function te(he) {
      return he.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ue(he) {
      return he.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function me(he) {
      return he.registry_id ? `Community-mapped package: ${he.registry_id}` : "Community-mapped package";
    }
    function q(he) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Q(he) {
      $.value = he;
    }
    function ae() {
      a("open-node-manager");
    }
    function Pe(he) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${he}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            v.value = !0;
            const ke = await r(he);
            ke.status === "success" ? (a("toast", `✓ Node "${he}" tracked as development`, "success"), await De()) : a("toast", `Failed to track node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error tracking node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ge(he) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${he}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            v.value = !0;
            const ke = await u(he);
            ke.status === "success" ? (a("toast", `✓ Node "${he}" removed`, "success"), await De()) : a("toast", `Failed to remove node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error removing node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function ze(he) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${he}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            v.value = !0;
            const ke = await c(he);
            ke.status === "success" ? (a("toast", `✓ Node "${he}" installed`, "success"), await De()) : a("toast", `Failed to install node: ${ke.message || "Unknown error"}`, "error");
          } catch (ke) {
            a("toast", `Error installing node: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function Ne(he) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${he.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            v.value = !0, await de(he, "registry");
          } catch (ke) {
            a("toast", `Error queueing install: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function _e(he) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${he.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            v.value = !0, await de(he, "git");
          } catch (ke) {
            a("toast", `Error queueing git install: ${ke instanceof Error ? ke.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function De() {
      v.value = !0, w.value = null;
      try {
        p.value = await l();
      } catch (he) {
        w.value = he instanceof Error ? he.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return dt(De), (he, ke) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ke[0] || (ke[0] = (T) => k.value = !0)
          }, {
            actions: h(() => [
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: ae
              }, {
                default: h(() => [...ke[7] || (ke[7] = [
                  x(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(bn, {
            modelValue: g.value,
            "onUpdate:modelValue": ke[1] || (ke[1] = (T) => g.value = T),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          v.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (o(), R(Bs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: De
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            ve.value ? (o(), R(Dt, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", aC, [
                  ke[8] || (ke[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (o(!0), i(V, null, ye(e.versionMismatches, (T) => (o(), R(Qt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[9] || (ke[9] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", lC, [
                      s("span", iC, m(T.actual), 1),
                      ke[10] || (ke[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", rC, m(T.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "warning",
                      size: "sm",
                      onClick: ke[2] || (ke[2] = (A) => a("repair-environment"))
                    }, {
                      default: h(() => [...ke[11] || (ke[11] = [
                        x(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            F.value.length ? (o(), R(Dt, {
              key: 1,
              title: "BLOCKED",
              count: F.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(F.value, (T) => (o(), R(Qt, {
                  key: `blocked-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[12] || (ke[12] = [
                    x("⛔", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", cC, m(te(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || ue(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Q(T)
                    }, {
                      default: h(() => [...ke[13] || (ke[13] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (o(), R(Dt, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(D.value, (T) => (o(), R(Qt, {
                  key: `community-${T.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[14] || (ke[14] = [
                    x("⚠", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", uC, m(me(T)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Guidance:",
                      value: T.issue_guidance || q(T)
                    }, null, 8, ["value"]),
                    b(Tt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Q(T)
                    }, {
                      default: h(() => [...ke[15] || (ke[15] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(T) ? (o(), i("span", dC, "Queued")) : (o(), i(V, { key: 1 }, [
                      T.registry_id ? (o(), R(Re, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => Ne(T)
                      }, {
                        default: h(() => [...ke[16] || (ke[16] = [
                          x(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      T.repository ? (o(), R(Re, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => _e(T)
                      }, {
                        default: h(() => [...ke[17] || (ke[17] = [
                          x(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            U.value.length ? (o(), R(Dt, {
              key: 3,
              title: "UNTRACKED",
              count: U.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(U.value, (T) => (o(), R(Qt, {
                  key: T.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ke[18] || (ke[18] = [
                    x("?", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ke[19] || (ke[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Q(T)
                    }, {
                      default: h(() => [...ke[20] || (ke[20] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Pe(T.name)
                    }, {
                      default: h(() => [...ke[21] || (ke[21] = [
                        x(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => ge(T.name)
                    }, {
                      default: h(() => [...ke[22] || (ke[22] = [
                        x(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            P.value.length ? (o(), R(Dt, {
              key: 4,
              title: "INSTALLED",
              count: P.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(P.value, (T) => (o(), R(Qt, {
                  key: T.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    x(m(T.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [
                    T.version ? (o(), i("span", mC, m(T.source === "development" ? "" : "v") + m(T.version), 1)) : (o(), i("span", fC, "version unknown")),
                    s("span", vC, " • " + m(J(T.source)), 1)
                  ]),
                  details: h(() => [
                    b(Tt, {
                      label: "Used by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Q(T)
                    }, {
                      default: h(() => [...ke[23] || (ke[23] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", pC, [
                      ke[25] || (ke[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: L(T),
                        disabled: G(T),
                        onChange: (A) => re(T, A)
                      }, [...ke[24] || (ke[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, gC)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            O.value.length ? (o(), R(Dt, {
              key: 5,
              title: "MISSING",
              count: O.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(O.value, (T) => (o(), R(Qt, {
                  key: T.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ke[26] || (ke[26] = [
                    x("!", -1)
                  ])]),
                  title: h(() => [
                    x(m(T.name), 1)
                  ]),
                  subtitle: h(() => [...ke[27] || (ke[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(Tt, {
                      label: "Required by:",
                      value: K(T)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Re, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Q(T)
                    }, {
                      default: h(() => [...ke[28] || (ke[28] = [
                        x(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => ze(T.name)
                    }, {
                      default: h(() => [...ke[29] || (ke[29] = [
                        x(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !P.value.length && !O.value.length && !F.value.length && !D.value.length && !U.value.length ? (o(), R(Ms, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: k.value,
        title: "About Custom Nodes",
        onClose: ke[4] || (ke[4] = (T) => k.value = !1)
      }, {
        content: h(() => [...ke[30] || (ke[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            x(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            x(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            x(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            x(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            x(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            onClick: ke[3] || (ke[3] = (T) => k.value = !1)
          }, {
            default: h(() => [...ke[31] || (ke[31] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      $.value ? (o(), R(eC, {
        key: 0,
        node: $.value,
        onClose: ke[5] || (ke[5] = (T) => $.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (o(), R(Nl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ke[6] || (ke[6] = (T) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), yC = /* @__PURE__ */ Me(hC, [["__scopeId", "data-v-edfa1c86"]]), wC = { class: "setting-info" }, _C = { class: "setting-label" }, kC = {
  key: 0,
  class: "required-marker"
}, bC = {
  key: 0,
  class: "setting-description"
}, $C = { class: "setting-control" }, CC = /* @__PURE__ */ Ie({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Fe(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", wC, [
        s("div", _C, [
          x(m(e.label) + " ", 1),
          e.required ? (o(), i("span", kC, "*")) : y("", !0)
        ]),
        e.description ? (o(), i("div", bC, m(e.description), 1)) : y("", !0)
      ]),
      s("div", $C, [
        rt(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), Sn = /* @__PURE__ */ Me(CC, [["__scopeId", "data-v-3e106b1c"]]), xC = ["type", "value", "placeholder", "disabled"], SC = /* @__PURE__ */ Ie({
  __name: "TextInput",
  props: {
    modelValue: {},
    type: { default: "text" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    hasError: { type: Boolean, default: !1 },
    monospace: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "enter", "escape", "focus", "blur"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, r = _(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return dt(() => {
      a.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (o(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Fe(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = Ss((f) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = Ss((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (f) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (f) => u.$emit("blur"))
    }, null, 42, xC));
  }
}), Mn = /* @__PURE__ */ Me(SC, [["__scopeId", "data-v-0380d08f"]]), IC = { class: "toggle" }, EC = ["checked", "disabled"], TC = /* @__PURE__ */ Ie({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", IC, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, EC),
      n[1] || (n[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ni = /* @__PURE__ */ Me(TC, [["__scopeId", "data-v-71c0f550"]]), qa = "ComfyGit.Deploy.GitHubPAT";
function _c(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function MC(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function PC() {
  function e() {
    try {
      return localStorage.getItem(qa);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(qa, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function n() {
    try {
      localStorage.removeItem(qa);
    } catch (l) {
      console.error("[useGitAuth] Failed to clear token:", l);
    }
  }
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: n,
    hasToken: a,
    isRemoteSsh: _c,
    isRemoteHttps: MC
  };
}
const RC = { class: "workspace-settings-content" }, DC = { class: "settings-section" }, NC = { class: "path-setting" }, LC = { class: "path-value" }, UC = { class: "path-setting" }, OC = { class: "path-value" }, AC = { class: "settings-section" }, zC = { class: "token-setting" }, FC = {
  key: 0,
  class: "token-warning"
}, VC = { class: "token-actions" }, BC = { class: "settings-section" }, WC = { class: "settings-section" }, GC = /* @__PURE__ */ Ie({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: n }) {
    const a = e, l = n, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ft(), { getToken: f, setToken: p, clearToken: v, hasToken: w } = PC(), g = _(!1), k = _(null), $ = _(null), S = _(null), C = _(null), I = _(""), E = _(""), P = _(""), O = _(""), U = _(!1), F = _(!1), D = _(!1), W = _(""), ce = _(!1), de = _(!1), J = _(null), ve = _(!1), K = _(!0);
    function L(ze) {
      return ze.join(" ");
    }
    function G(ze) {
      return ze.trim() ? ze.trim().split(/\s+/) : [];
    }
    const re = M(() => {
      if (!C.value) return !1;
      const ze = U.value, Ne = F.value, _e = D.value, De = O.value !== L(C.value.comfyui_extra_args || []);
      return ze || Ne || _e || De;
    }), te = M(() => w());
    async function ue() {
      var ze;
      g.value = !0, k.value = null;
      try {
        S.value = await r(a.workspacePath || void 0), C.value = { ...S.value }, I.value = S.value.civitai_api_key || "", E.value = S.value.huggingface_token || "", O.value = L(S.value.comfyui_extra_args || []), P.value = f() || "", W.value = P.value, U.value = !1, F.value = !1, D.value = !1, J.value = null;
        const Ne = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        ve.value = Ne !== "false", K.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const De = (ze = (await u()).remotes) == null ? void 0 : ze.find((he) => he.name === "origin");
          ce.value = !!(De && _c(De.url));
        } catch {
          ce.value = !1;
        }
      } catch (Ne) {
        k.value = Ne instanceof Error ? Ne.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function me() {
      var ze;
      $.value = null;
      try {
        const Ne = {};
        U.value && (Ne.civitai_api_key = I.value || null), F.value && (Ne.huggingface_token = E.value || null), O.value !== L(((ze = C.value) == null ? void 0 : ze.comfyui_extra_args) || []) && (Ne.comfyui_extra_args = G(O.value)), await c(Ne, a.workspacePath || void 0), D.value && (P.value ? p(P.value) : v()), await ue(), $.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          $.value = null;
        }, 3e3);
      } catch (Ne) {
        const _e = Ne instanceof Error ? Ne.message : "Failed to save settings";
        $.value = { type: "error", message: _e }, l("error", _e);
      }
    }
    function q() {
      C.value && (I.value = C.value.civitai_api_key || "", E.value = C.value.huggingface_token || "", O.value = L(C.value.comfyui_extra_args || []), P.value = W.value, U.value = !1, F.value = !1, D.value = !1, J.value = null, $.value = null);
    }
    async function Q() {
      if (P.value) {
        de.value = !0, J.value = null;
        try {
          const ze = await d(P.value);
          J.value = {
            type: ze.status === "success" ? "success" : "error",
            message: ze.message
          };
        } catch (ze) {
          J.value = {
            type: "error",
            message: ze instanceof Error ? ze.message : "Connection test failed"
          };
        } finally {
          de.value = !1;
        }
      }
    }
    function ae() {
      P.value = "", D.value = !0, J.value = null;
    }
    function Pe(ze) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(ze)), console.log("[ComfyGit] Auto-refresh setting saved:", ze);
    }
    function ge(ze) {
      ze ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", ze ? "enabled" : "disabled");
    }
    return t({
      saveSettings: me,
      resetSettings: q,
      hasChanges: re,
      loadSettings: ue
    }), dt(ue), (ze, Ne) => (o(), i("div", RC, [
      g.value ? (o(), R(Vs, {
        key: 0,
        message: "Loading workspace settings..."
      })) : k.value ? (o(), R(Bs, {
        key: 1,
        message: k.value,
        retry: !0,
        onRetry: ue
      }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
        b(Dt, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var _e, De;
            return [
              s("div", DC, [
                s("div", NC, [
                  Ne[9] || (Ne[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  Ne[10] || (Ne[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", LC, m(((_e = S.value) == null ? void 0 : _e.workspace_path) || "Loading..."), 1)
                ]),
                s("div", UC, [
                  Ne[11] || (Ne[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  Ne[12] || (Ne[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", OC, m(((De = S.value) == null ? void 0 : De.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(Dt, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", AC, [
              b(Sn, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: I.value,
                    "onUpdate:modelValue": Ne[0] || (Ne[0] = (_e) => I.value = _e),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: Ne[1] || (Ne[1] = (_e) => U.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: E.value,
                    "onUpdate:modelValue": Ne[2] || (Ne[2] = (_e) => E.value = _e),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: Ne[3] || (Ne[3] = (_e) => F.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", zC, [
                    b(Mn, {
                      modelValue: P.value,
                      "onUpdate:modelValue": Ne[4] || (Ne[4] = (_e) => P.value = _e),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: Ne[5] || (Ne[5] = (_e) => D.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (o(), i("div", FC, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    Ne[15] || (Ne[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", VC, [
                      b(Re, {
                        variant: "ghost",
                        size: "xs",
                        loading: de.value,
                        disabled: !P.value || de.value,
                        onClick: Q
                      }, {
                        default: h(() => [...Ne[13] || (Ne[13] = [
                          x(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      te.value ? (o(), R(Re, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ae
                      }, {
                        default: h(() => [...Ne[14] || (Ne[14] = [
                          x(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    J.value ? (o(), i("div", {
                      key: 1,
                      class: Fe(["token-test-result", J.value.type])
                    }, m(J.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(Dt, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", BC, [
              b(Sn, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(Mn, {
                    modelValue: O.value,
                    "onUpdate:modelValue": Ne[6] || (Ne[6] = (_e) => O.value = _e),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              Ne[16] || (Ne[16] = s("div", { class: "setting-hint" }, [
                x(" Common flags: "),
                s("code", null, "--lowvram"),
                x(", "),
                s("code", null, "--highvram"),
                x(", "),
                s("code", null, "--listen 0.0.0.0"),
                x(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(Dt, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", WC, [
              b(Sn, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: ve.value,
                    "onUpdate:modelValue": [
                      Ne[7] || (Ne[7] = (_e) => ve.value = _e),
                      Pe
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(Sn, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Ni, {
                    modelValue: K.value,
                    "onUpdate:modelValue": [
                      Ne[8] || (Ne[8] = (_e) => K.value = _e),
                      ge
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        $.value ? (o(), R(Rl, {
          key: 0,
          variant: ($.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Ft({ color: $.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m($.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), kc = /* @__PURE__ */ Me(GC, [["__scopeId", "data-v-f1bdc574"]]), jC = /* @__PURE__ */ Ie({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = _(null);
    function n() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (o(), R(jt, null, {
      header: h(() => [
        b(Ht, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Re, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  x(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (o(), R(Re, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  x(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        b(kc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: n
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), HC = { class: "env-title" }, qC = {
  key: 0,
  class: "current-badge"
}, KC = {
  key: 0,
  class: "branch-info"
}, JC = /* @__PURE__ */ Ie({
  __name: "EnvironmentListItem",
  props: {
    environmentName: {},
    isCurrent: { type: Boolean, default: !1 },
    currentBranch: { default: null },
    workflowCount: { default: 0 },
    nodeCount: { default: 0 },
    modelCount: { default: 0 },
    lastUsed: { default: void 0 },
    showCurrentLabel: { type: Boolean, default: !0 },
    showLastUsed: { type: Boolean, default: !0 },
    showDetails: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, n) => (o(), R(Qt, {
      status: e.isCurrent ? "synced" : void 0
    }, fs({
      icon: h(() => [
        x(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", HC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (o(), i("span", qC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (o(), i("span", KC, [
          n[0] || (n[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          x(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        rt(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(Tt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(Tt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(Tt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (o(), R(Tt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), QC = /* @__PURE__ */ Me(JC, [["__scopeId", "data-v-9231917a"]]), YC = { class: "env-details" }, XC = { class: "status-row" }, ZC = {
  key: 0,
  class: "detail-row"
}, ex = { class: "value mono" }, tx = {
  key: 1,
  class: "detail-row"
}, sx = { class: "value mono small" }, nx = { class: "collapsible-section" }, ox = { class: "value" }, ax = {
  key: 0,
  class: "collapsible-body"
}, lx = { class: "item-list" }, ix = { class: "item-name" }, rx = { class: "item-name" }, cx = { class: "item-name" }, ux = { class: "item-name" }, dx = {
  key: 0,
  class: "empty-list"
}, mx = { class: "collapsible-section" }, fx = { class: "value" }, vx = {
  key: 0,
  class: "collapsible-body"
}, px = { class: "item-list" }, gx = { class: "item-name" }, hx = {
  key: 0,
  class: "item-meta"
}, yx = {
  key: 0,
  class: "empty-list"
}, wx = { class: "collapsible-section" }, _x = { class: "value" }, kx = {
  key: 0,
  class: "missing-count"
}, bx = {
  key: 0,
  class: "collapsible-body"
}, $x = { class: "item-list" }, Cx = { class: "model-row" }, xx = { class: "item-name" }, Sx = { class: "model-meta" }, Ix = { class: "item-meta" }, Ex = {
  key: 0,
  class: "item-meta"
}, Tx = {
  key: 0,
  class: "empty-list"
}, Mx = {
  key: 2,
  class: "section-divider"
}, Px = {
  key: 3,
  class: "detail-row"
}, Rx = { class: "value" }, Dx = { class: "footer-actions" }, Nx = /* @__PURE__ */ Ie({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = M(() => {
      var f;
      if (!((f = n.detail) != null && f.workflows)) return !0;
      const d = n.detail.workflows;
      return !d.synced.length && !d.new.length && !d.modified.length && !d.deleted.length;
    });
    function u(d) {
      if (!d) return "Unknown";
      try {
        return new Date(d).toLocaleString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        });
      } catch {
        return d;
      }
    }
    return (d, f) => (o(), R(Mt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[6] || (f[6] = (p) => a("close"))
    }, {
      body: h(() => {
        var p, v, w, g, k, $, S, C, I, E, P, O, U, F;
        return [
          s("div", YC, [
            s("div", XC, [
              f[7] || (f[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Fe(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (o(), i("div", ZC, [
              f[8] || (f[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", ex, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (o(), i("div", tx, [
              f[9] || (f[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", sx, m(e.environment.path), 1)
            ])) : y("", !0),
            f[18] || (f[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", nx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (D) => r("workflows"))
              }, [
                f[10] || (f[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", ox, m(((p = e.detail) == null ? void 0 : p.workflow_count) ?? e.environment.workflow_count), 1),
                (v = e.detail) != null && v.workflows ? (o(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (o(), i("div", ax, [
                s("div", lx, [
                  (o(!0), i(V, null, ye(e.detail.workflows.synced, (D) => (o(), i("div", {
                    key: "synced-" + D,
                    class: "list-item"
                  }, [
                    s("span", ix, m(D), 1),
                    f[11] || (f[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (o(!0), i(V, null, ye(e.detail.workflows.new, (D) => (o(), i("div", {
                    key: "new-" + D,
                    class: "list-item"
                  }, [
                    s("span", rx, m(D), 1),
                    f[12] || (f[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (o(!0), i(V, null, ye(e.detail.workflows.modified, (D) => (o(), i("div", {
                    key: "mod-" + D,
                    class: "list-item"
                  }, [
                    s("span", cx, m(D), 1),
                    f[13] || (f[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (o(!0), i(V, null, ye(e.detail.workflows.deleted, (D) => (o(), i("div", {
                    key: "del-" + D,
                    class: "list-item"
                  }, [
                    s("span", ux, m(D), 1),
                    f[14] || (f[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (o(), i("div", dx, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", mx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (D) => r("nodes"))
              }, [
                f[15] || (f[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", fx, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (k = e.detail) != null && k.nodes ? (o(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              ($ = e.detail) != null && $.nodes && l.value.has("nodes") ? (o(), i("div", vx, [
                s("div", px, [
                  (o(!0), i(V, null, ye(e.detail.nodes, (D) => (o(), i("div", {
                    key: D.name,
                    class: "list-item"
                  }, [
                    s("span", gx, m(D.name), 1),
                    D.version ? (o(), i("span", hx, m(D.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (o(), i("div", yx, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", wx, [
              s("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (D) => r("models"))
              }, [
                f[16] || (f[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", _x, [
                  x(m(((S = e.detail) == null ? void 0 : S.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (C = e.detail) == null ? void 0 : C.models) != null && I.missing.length ? (o(), i("span", kx, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (E = e.detail) != null && E.models ? (o(), i("span", {
                  key: 0,
                  class: Fe(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (P = e.detail) != null && P.models && l.value.has("models") ? (o(), i("div", bx, [
                s("div", $x, [
                  (o(!0), i(V, null, ye(e.detail.models.missing, (D) => (o(), i("div", {
                    key: D.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", Cx, [
                      s("span", xx, m(D.filename), 1),
                      s("span", {
                        class: Fe(["criticality-badge", D.criticality])
                      }, m(D.criticality), 3)
                    ]),
                    s("div", Sx, [
                      s("span", Ix, m(D.category), 1),
                      D.workflow_names.length ? (o(), i("span", Ex, " used by: " + m(D.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (o(), i("div", Tx, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (O = e.detail) != null && O.created_at || e.environment.created_at ? (o(), i("div", Mx)) : y("", !0),
            (U = e.detail) != null && U.created_at || e.environment.created_at ? (o(), i("div", Px, [
              f[17] || (f[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", Rx, m(u(((F = e.detail) == null ? void 0 : F.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", Dx, [
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: f[3] || (f[3] = (p) => a("export", e.environment.name))
          }, {
            default: h(() => [...f[19] || (f[19] = [
              x(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (o(), R(Oe, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[4] || (f[4] = (p) => a("delete", e.environment.name))
          }, {
            default: h(() => [...f[20] || (f[20] = [
              x(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          f[22] || (f[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Oe, {
            variant: "secondary",
            size: "sm",
            onClick: f[5] || (f[5] = (p) => a("close"))
          }, {
            default: h(() => [...f[21] || (f[21] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Lx = /* @__PURE__ */ Me(Nx, [["__scopeId", "data-v-750671f5"]]), bc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], $c = "3.12", Ll = [
  // Auto-detect
  "auto",
  // CPU only
  "cpu",
  // CUDA (newest first)
  "cu129",
  "cu128",
  "cu126",
  "cu125",
  "cu124",
  "cu123",
  "cu122",
  "cu121",
  "cu120",
  "cu118",
  "cu117",
  "cu116",
  "cu115",
  "cu114",
  "cu113",
  "cu112",
  "cu111",
  "cu110",
  "cu102",
  "cu101",
  "cu100",
  "cu92",
  "cu91",
  "cu90",
  "cu80",
  // ROCm (AMD)
  "rocm6.3",
  "rocm6.2.4",
  "rocm6.2",
  "rocm6.1",
  "rocm6.0",
  "rocm5.7",
  "rocm5.6",
  "rocm5.5",
  "rocm5.4.2",
  "rocm5.4",
  "rocm5.3",
  "rocm5.2",
  "rocm5.1.1",
  "rocm4.2",
  "rocm4.1",
  "rocm4.0.1",
  // Intel
  "xpu"
], Cc = "auto", Ux = { class: "progress-bar" }, Ox = /* @__PURE__ */ Ie({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, n = M(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (o(), i("div", Ux, [
      s("div", {
        class: Fe(["progress-fill", e.variant]),
        style: Ft({ width: n.value })
      }, null, 6)
    ]));
  }
}), xc = /* @__PURE__ */ Me(Ox, [["__scopeId", "data-v-1beb0512"]]), Ax = { class: "task-progress" }, zx = { class: "progress-info" }, Fx = { class: "progress-percentage" }, Vx = { class: "progress-message" }, Bx = {
  key: 0,
  class: "progress-steps"
}, Wx = { class: "step-icon" }, Gx = { class: "step-label" }, jx = /* @__PURE__ */ Ie({
  __name: "TaskProgressDisplay",
  props: {
    progress: {},
    message: {},
    currentPhase: {},
    variant: { default: "default" },
    showSteps: { type: Boolean, default: !1 },
    steps: { default: () => [] }
  },
  setup(e) {
    const t = e;
    function n(l) {
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = n(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (o(), i("div", Ax, [
      b(xc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", zx, [
        s("span", Fx, m(e.progress) + "%", 1),
        s("span", Vx, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (o(), i("div", Bx, [
        (o(!0), i(V, null, ye(e.steps, (c) => (o(), i("div", {
          key: c.id,
          class: Fe(["step", n(c.id)])
        }, [
          s("span", Wx, m(a(c.id)), 1),
          s("span", Gx, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), ia = /* @__PURE__ */ Me(jx, [["__scopeId", "data-v-9d1de66c"]]), Hx = {
  key: 0,
  class: "create-env-form"
}, qx = { class: "form-field" }, Kx = { class: "input-wrapper" }, Jx = {
  key: 0,
  class: "validating-indicator"
}, Qx = {
  key: 1,
  class: "valid-indicator"
}, Yx = {
  key: 0,
  class: "field-error"
}, Xx = { class: "form-field" }, Zx = ["value"], e3 = { class: "form-field" }, t3 = ["disabled"], s3 = ["value"], n3 = { class: "form-field" }, o3 = ["value"], a3 = { class: "form-field form-field--checkbox" }, l3 = { class: "form-checkbox" }, i3 = {
  key: 1,
  class: "create-env-progress"
}, r3 = { class: "creating-intro" }, c3 = {
  key: 0,
  class: "progress-warning"
}, u3 = {
  key: 1,
  class: "create-error"
}, d3 = { class: "error-message" }, m3 = {
  key: 1,
  class: "footer-status"
}, f3 = 10, v3 = /* @__PURE__ */ Ie({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const n = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ft(), u = _(""), d = _($c), f = _("latest"), p = _(Cc), v = _(!1), w = _(null), g = _(!1), k = _(!1);
    let $ = null, S = 0;
    const C = M(() => !!u.value.trim() && k.value && !w.value && !g.value && !P.value), I = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), E = _(!1), P = _(!1), O = _({
      progress: 0,
      message: ""
    });
    let U = null, F = 0;
    const D = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], W = _(null);
    $t(u, (te) => {
      k.value = !1, $ && (clearTimeout($), $ = null);
      const ue = te.trim();
      if (!ue) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, $ = setTimeout(() => {
        ce(ue);
      }, 400);
    });
    async function ce(te, ue = !1) {
      const me = te.trim();
      if (!me)
        return k.value = !1, g.value = !1, w.value = ue ? "Environment name is required" : null, !1;
      const q = ++S;
      g.value = !0;
      try {
        const Q = await c(me);
        return q !== S ? !1 : (w.value = Q.valid ? null : Q.error || "Invalid name", k.value = !!Q.valid, !!Q.valid);
      } catch {
        return q !== S || (w.value = "Failed to validate name", k.value = !1), !1;
      } finally {
        q === S && (g.value = !1);
      }
    }
    async function de() {
      $ && (clearTimeout($), $ = null), await ce(u.value, !0);
    }
    function J() {
      P.value || n("close");
    }
    async function ve() {
      const te = u.value.trim();
      if (!te) {
        w.value = "Environment name is required";
        return;
      }
      if ($ && (clearTimeout($), $ = null), !!await ce(te, !0)) {
        P.value = !0, O.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const me = {
            name: te,
            python_version: d.value,
            comfyui_version: f.value,
            torch_backend: p.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, q = await l(me);
          q.status === "started" ? K() : q.status === "error" && (O.value = {
            progress: 0,
            message: q.message || "Failed to start creation",
            error: q.message
          });
        } catch (me) {
          O.value = {
            progress: 0,
            message: me instanceof Error ? me.message : "Unknown error",
            error: me instanceof Error ? me.message : "Unknown error"
          };
        }
      }
    }
    function K() {
      U || (F = 0, U = window.setInterval(async () => {
        try {
          const te = await r();
          F = 0, O.value = {
            progress: te.progress ?? 0,
            message: te.message,
            phase: te.phase,
            error: te.error
          }, te.state === "complete" ? (L(), n("created", te.environment_name || u.value.trim(), v.value)) : te.state === "error" ? (L(), O.value.error = te.error || te.message) : te.state === "idle" && P.value && (L(), O.value.error = "Creation was interrupted. Please try again.");
        } catch {
          F++, F >= f3 && (L(), O.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function L() {
      U && (clearInterval(U), U = null);
    }
    function G() {
      P.value = !1, O.value = { progress: 0, message: "" }, n("close");
    }
    async function re() {
      E.value = !0;
      try {
        I.value = await a();
      } catch (te) {
        console.error("Failed to load ComfyUI releases:", te);
      } finally {
        E.value = !1;
      }
    }
    return dt(async () => {
      var te;
      await Wt(), (te = W.value) == null || te.focus(), re();
    }), Gn(() => {
      L(), $ && (clearTimeout($), $ = null);
    }), (te, ue) => (o(), R(Mt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !P.value,
      onClose: J
    }, {
      body: h(() => [
        P.value ? (o(), i("div", i3, [
          s("p", r3, [
            ue[12] || (ue[12] = x(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            ue[13] || (ue[13] = x("... ", -1))
          ]),
          b(ia, {
            progress: O.value.progress,
            message: O.value.message,
            "current-phase": O.value.phase,
            variant: O.value.error ? "error" : "default",
            "show-steps": !0,
            steps: D
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          O.value.error ? y("", !0) : (o(), i("p", c3, " This may take several minutes. Please wait... ")),
          O.value.error ? (o(), i("div", u3, [
            s("p", d3, m(O.value.error), 1)
          ])) : y("", !0)
        ])) : (o(), i("div", Hx, [
          s("div", qx, [
            ue[6] || (ue[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", Kx, [
              At(s("input", {
                ref_key: "nameInput",
                ref: W,
                "onUpdate:modelValue": ue[0] || (ue[0] = (me) => u.value = me),
                type: "text",
                class: Fe(["form-input", { error: !!w.value, valid: k.value }]),
                placeholder: "my-environment",
                onKeyup: Ss(ve, ["enter"]),
                onBlur: de
              }, null, 34), [
                [go, u.value]
              ]),
              g.value ? (o(), i("span", Jx, "...")) : k.value ? (o(), i("span", Qx, "✓")) : y("", !0)
            ]),
            w.value ? (o(), i("div", Yx, m(w.value), 1)) : y("", !0),
            ue[7] || (ue[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", Xx, [
            ue[8] || (ue[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            At(s("select", {
              "onUpdate:modelValue": ue[1] || (ue[1] = (me) => d.value = me),
              class: "form-select"
            }, [
              (o(!0), i(V, null, ye(it(bc), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me), 9, Zx))), 128))
            ], 512), [
              [On, d.value]
            ])
          ]),
          s("div", e3, [
            ue[9] || (ue[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            At(s("select", {
              "onUpdate:modelValue": ue[2] || (ue[2] = (me) => f.value = me),
              class: "form-select",
              disabled: E.value
            }, [
              (o(!0), i(V, null, ye(I.value, (me) => (o(), i("option", {
                key: me.tag_name,
                value: me.tag_name
              }, m(me.name), 9, s3))), 128))
            ], 8, t3), [
              [On, f.value]
            ])
          ]),
          s("div", n3, [
            ue[10] || (ue[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            At(s("select", {
              "onUpdate:modelValue": ue[3] || (ue[3] = (me) => p.value = me),
              class: "form-select"
            }, [
              (o(!0), i(V, null, ye(it(Ll), (me) => (o(), i("option", {
                key: me,
                value: me
              }, m(me) + m(me === "auto" ? " (detect GPU)" : ""), 9, o3))), 128))
            ], 512), [
              [On, p.value]
            ])
          ]),
          s("div", a3, [
            s("label", l3, [
              At(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": ue[4] || (ue[4] = (me) => v.value = me)
              }, null, 512), [
                [la, v.value]
              ]),
              ue[11] || (ue[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        P.value ? (o(), i(V, { key: 1 }, [
          O.value.error ? (o(), R(Oe, {
            key: 0,
            variant: "secondary",
            onClick: G
          }, {
            default: h(() => [...ue[16] || (ue[16] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })) : (o(), i("span", m3, " Creating environment... "))
        ], 64)) : (o(), i(V, { key: 0 }, [
          b(Oe, {
            variant: "primary",
            disabled: !C.value,
            onClick: ve
          }, {
            default: h(() => [...ue[14] || (ue[14] = [
              x(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: ue[5] || (ue[5] = (me) => n("close"))
          }, {
            default: h(() => [...ue[15] || (ue[15] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), p3 = /* @__PURE__ */ Me(v3, [["__scopeId", "data-v-3faa3d9b"]]), g3 = /* @__PURE__ */ Ie({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: n }) {
    const a = n, { getEnvironments: l, getEnvironmentDetails: r } = ft(), c = _([]), u = _(!1), d = _(null), f = _(""), p = _(!1), v = _(!1), w = _(null), g = _(null), k = M(() => [...c.value].sort((U, F) => U.is_current !== F.is_current ? U.is_current ? -1 : 1 : U.name.localeCompare(F.name))), $ = M(() => {
      if (!f.value.trim()) return k.value;
      const U = f.value.toLowerCase();
      return k.value.filter(
        (F) => {
          var D;
          return F.name.toLowerCase().includes(U) || ((D = F.current_branch) == null ? void 0 : D.toLowerCase().includes(U));
        }
      );
    });
    function S(U, F) {
      v.value = !1, a("created", U, F);
    }
    function C() {
      v.value = !0;
    }
    async function I(U) {
      w.value = U, g.value = null;
      const F = await r(U.name);
      F && (g.value = F);
    }
    function E(U) {
      w.value = null, g.value = null, a("delete", U);
    }
    function P(U) {
      w.value = null, g.value = null, a("export", U);
    }
    async function O() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (U) {
        d.value = U instanceof Error ? U.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return dt(O), t({
      loadEnvironments: O,
      openCreateModal: C
    }), (U, F) => (o(), i(V, null, [
      b(jt, null, {
        header: h(() => [
          b(Ht, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: F[1] || (F[1] = (D) => p.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (o(), R(Re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: C
              }, {
                default: h(() => [...F[7] || (F[7] = [
                  x(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Re, {
                variant: "secondary",
                size: "sm",
                onClick: F[0] || (F[0] = (D) => U.$emit("import"))
              }, {
                default: h(() => [...F[8] || (F[8] = [
                  x(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(bn, {
            modelValue: f.value,
            "onUpdate:modelValue": F[2] || (F[2] = (D) => f.value = D),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (o(), R(Bs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: O
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            $.value.length ? (o(), R(Dt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: $.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye($.value, (D) => (o(), R(QC, {
                  key: D.name,
                  "environment-name": D.name,
                  "is-current": D.is_current,
                  "current-branch": D.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !D.is_current && e.canSwitch ? (o(), R(Re, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => U.$emit("switch", D.name)
                    }, {
                      default: h(() => [...F[9] || (F[9] = [
                        x(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => I(D)
                    }, {
                      default: h(() => [...F[10] || (F[10] = [
                        x(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => U.$emit("export", D.name)
                    }, {
                      default: h(() => [...F[11] || (F[11] = [
                        x(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            $.value.length ? y("", !0) : (o(), R(Ms, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, fs({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (o(), R(Re, {
                    key: 0,
                    variant: "primary",
                    onClick: C
                  }, {
                    default: h(() => [...F[12] || (F[12] = [
                      x(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(Cs, {
        show: p.value,
        title: "About Environments",
        onClose: F[4] || (F[4] = (D) => p.value = !1)
      }, {
        content: h(() => [...F[13] || (F[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            x(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Use cases:")
          ], -1),
          s("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            s("li", null, "Separate production and development workflows"),
            s("li", null, "Test different node configurations"),
            s("li", null, "Experiment with new models safely"),
            s("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: h(() => [
          b(Re, {
            variant: "secondary",
            onClick: F[3] || (F[3] = (D) => p.value = !1)
          }, {
            default: h(() => [...F[14] || (F[14] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (o(), R(Lx, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: F[5] || (F[5] = (D) => {
          w.value = null, g.value = null;
        }),
        onDelete: E,
        onExport: P
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      v.value ? (o(), R(p3, {
        key: 1,
        onClose: F[6] || (F[6] = (D) => v.value = !1),
        onCreated: S
      })) : y("", !0)
    ], 64));
  }
}), h3 = /* @__PURE__ */ Me(g3, [["__scopeId", "data-v-01163d8c"]]), y3 = { class: "file-path" }, w3 = { class: "file-path-text" }, _3 = ["title"], k3 = /* @__PURE__ */ Ie({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, n = _(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (o(), i("div", y3, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", w3, m(e.path), 1),
      e.copyable ? (o(), i("button", {
        key: 0,
        class: "copy-btn",
        title: n.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(n.value ? "✓" : "📋"), 9, _3)) : y("", !0)
    ]));
  }
}), b3 = /* @__PURE__ */ Me(k3, [["__scopeId", "data-v-f0982173"]]), $3 = { class: "base-textarea-wrapper" }, C3 = ["value", "rows", "placeholder", "disabled", "maxlength"], x3 = {
  key: 0,
  class: "base-textarea-count"
}, S3 = /* @__PURE__ */ Ie({
  __name: "BaseTextarea",
  props: {
    modelValue: {},
    rows: { default: 3 },
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    maxLength: {},
    showCharCount: { type: Boolean, default: !1 },
    submitOnEnter: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "ctrlEnter", "submit"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || n.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (o(), i("div", $3, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = Ss(bt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = Ss(bt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          Ss(l, ["enter"])
        ]
      }, null, 40, C3),
      e.showCharCount && e.maxLength ? (o(), i("div", x3, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), An = /* @__PURE__ */ Me(S3, [["__scopeId", "data-v-c6d16c93"]]), I3 = ["checked", "disabled"], E3 = { class: "base-checkbox-box" }, T3 = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, M3 = {
  key: 0,
  class: "base-checkbox-label"
}, P3 = /* @__PURE__ */ Ie({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("label", {
      class: Fe(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: n[0] || (n[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, I3),
      s("span", E3, [
        e.modelValue ? (o(), i("svg", T3, [...n[1] || (n[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (o(), i("span", M3, [
        rt(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), ra = /* @__PURE__ */ Me(P3, [["__scopeId", "data-v-bf17c831"]]), R3 = { class: "export-blocked" }, D3 = { class: "error-header" }, N3 = { class: "error-summary" }, L3 = { class: "error-title" }, U3 = { class: "error-description" }, O3 = { class: "issues-list" }, A3 = { class: "issue-message" }, z3 = {
  key: 0,
  class: "issue-details"
}, F3 = ["onClick"], V3 = { class: "issue-fix" }, B3 = {
  key: 0,
  class: "commit-section"
}, W3 = {
  key: 0,
  class: "issues-warning"
}, G3 = {
  key: 1,
  class: "commit-error"
}, j3 = /* @__PURE__ */ Ie({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = _(""), f = $n({}), p = M(() => n.mode === "publish" ? "Publish" : "Export"), v = M(
      () => n.issues.some((C) => C.type === "uncommitted_workflows" || C.type === "uncommitted_git_changes")
    ), w = M(
      () => n.issues.some((C) => C.type === "unresolved_issues")
    ), g = M(
      () => w.value && !u.value
    ), k = M(
      () => v.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function $(C) {
      const I = n.issues[C];
      return f[C] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function S() {
      var C;
      if (k.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${E}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (C, I) => (o(), R(Mt, {
      title: v.value ? `Commit & ${p.value}` : `Cannot ${p.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (E) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", R3, [
          s("div", D3, [
            I[5] || (I[5] = s("span", { class: "error-icon" }, [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            s("div", N3, [
              s("h3", L3, m(p.value) + " blocked", 1),
              s("p", U3, m(v.value ? `Commit your changes to proceed with ${p.value.toLowerCase()}.` : `The following issues must be resolved before ${p.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", O3, [
            (o(!0), i(V, null, ye(e.issues, (E, P) => (o(), i("div", {
              key: P,
              class: "issue-item"
            }, [
              s("div", A3, m(E.message), 1),
              E.details.length ? (o(), i("div", z3, [
                (o(!0), i(V, null, ye($(P), (O, U) => (o(), i("div", {
                  key: U,
                  class: "issue-detail"
                }, m(O), 1))), 128)),
                E.details.length > 3 && !f[P] ? (o(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (O) => f[P] = !0
                }, " +" + m(E.details.length - 3) + " more ", 9, F3)) : y("", !0)
              ])) : y("", !0),
              s("div", V3, [
                E.type === "uncommitted_workflows" ? (o(), i(V, { key: 0 }, [
                  x(" Commit your workflow changes before " + m(p.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "uncommitted_git_changes" ? (o(), i(V, { key: 1 }, [
                  x(" Commit your changes before " + m(p.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : E.type === "unresolved_issues" ? (o(), i(V, { key: 2 }, [
                  x(" Resolve all workflow issues before " + m(p.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (o(), i("div", B3, [
            w.value ? (o(), i("div", W3, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(ra, {
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (E) => u.value = E),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(An, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (E) => r.value = E),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: S,
              onCtrlEnter: S
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (o(), i("div", G3, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        v.value ? (o(), i(V, { key: 0 }, [
          b(Oe, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (E) => C.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              x(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Oe, {
            variant: u.value ? "danger" : "primary",
            disabled: !k.value,
            loading: c.value,
            onClick: S
          }, {
            default: h(() => [
              x(m(c.value ? "Committing..." : u.value ? `Force Commit & ${p.value}` : `Commit & ${p.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (o(), R(Oe, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (E) => C.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            x(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), H3 = /* @__PURE__ */ Me(j3, [["__scopeId", "data-v-a8990107"]]), q3 = { class: "repro-warning" }, K3 = { class: "repro-warning-content" }, J3 = {
  key: 0,
  class: "warning-group"
}, Q3 = { class: "warning-list" }, Y3 = { key: 0 }, X3 = {
  key: 1,
  class: "warning-group"
}, Z3 = { class: "warning-list" }, eS = { key: 0 }, tS = /* @__PURE__ */ Ie({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, n = M(() => t.warnings.models_without_sources || []), a = M(() => t.warnings.nodes_without_provenance || []), l = M(() => n.value.length), r = M(() => a.value.length), c = M(() => l.value + r.value), u = M(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), d = M(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), f = M(
      () => Math.max(0, l.value - u.value.length)
    ), p = M(
      () => Math.max(0, r.value - d.value.length)
    );
    return (v, w) => (o(), i("div", q3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", K3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (o(), i("div", J3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", Q3, [
            (o(!0), i(V, null, ye(u.value, (g) => (o(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            f.value ? (o(), i("li", Y3, "+" + m(f.value) + " more model" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (o(), i("div", X3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", Z3, [
            (o(!0), i(V, null, ye(d.value, (g) => (o(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            p.value ? (o(), i("li", eS, "+" + m(p.value) + " more node" + m(p.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => v.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), rl = /* @__PURE__ */ Me(tS, [["__scopeId", "data-v-11be310d"]]), sS = { class: "export-card" }, nS = { class: "export-path-row" }, oS = {
  key: 1,
  class: "export-warning"
}, aS = { class: "export-footer-actions" }, lS = /* @__PURE__ */ Ie({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: n, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ft(), c = _(""), u = _(!1), d = _(!1), f = _(!1), p = _(null), v = _(!1), w = _(null), g = _(!1), k = _(!1), $ = M(() => {
      var L;
      return ((L = t.environmentName) == null ? void 0 : L.trim()) || null;
    }), S = M(() => $.value ? `EXPORT ENVIRONMENT: ${$.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), C = M(() => $.value ? `Environment '${$.value}' has been exported` : "Your environment has been exported"), I = M(() => u.value ? "Validating..." : d.value ? "Exporting..." : F.value ? "Export Anyway" : "Export Environment"), E = M(() => {
      var L;
      return ((L = w.value) == null ? void 0 : L.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), P = M(
      () => E.value.models_without_sources.length
    ), O = M(
      () => {
        var L;
        return ((L = E.value.nodes_without_provenance) == null ? void 0 : L.length) || 0;
      }
    ), U = M(
      () => P.value + O.value
    ), F = M(
      () => {
        var L;
        return !!((L = w.value) != null && L.can_export) && U.value > 0;
      }
    );
    async function D() {
      u.value = !0;
      try {
        const L = $.value ? await l($.value) : await n();
        return w.value = L, L;
      } catch (L) {
        return p.value = {
          status: "error",
          message: L instanceof Error ? L.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function W() {
      p.value = null;
      const L = await D();
      if (L) {
        if (!L.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function ce() {
      g.value = !1;
      const L = await D();
      if (L) {
        if (!L.can_export) {
          g.value = !0;
          return;
        }
        await J();
      }
    }
    async function de() {
      await D();
    }
    async function J() {
      d.value = !0;
      try {
        const L = $.value ? await r($.value, c.value || void 0) : await a(c.value || void 0);
        p.value = L;
      } catch (L) {
        p.value = {
          status: "error",
          message: L instanceof Error ? L.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function ve() {
      var L;
      if ((L = p.value) != null && L.path)
        try {
          await navigator.clipboard.writeText(p.value.path);
        } catch (G) {
          console.error("Failed to copy path:", G);
        }
    }
    async function K() {
      var L;
      if ((L = p.value) != null && L.path) {
        f.value = !0;
        try {
          const G = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(p.value.path)}`);
          if (!G.ok)
            throw new Error(`Download failed: ${G.statusText}`);
          const re = await G.blob(), te = URL.createObjectURL(re), ue = p.value.path.split("/").pop() || "environment-export.tar.gz", me = document.createElement("a");
          me.href = te, me.download = ue, document.body.appendChild(me), me.click(), document.body.removeChild(me), URL.revokeObjectURL(te);
        } catch (G) {
          console.error("Failed to download:", G), alert(`Download failed: ${G instanceof Error ? G.message : "Unknown error"}`);
        } finally {
          f.value = !1;
        }
      }
    }
    return dt(() => {
      D();
    }), (L, G) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          F.value ? (o(), R(rl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: E.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: G[1] || (G[1] = (re) => k.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(Dt, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", sS, [
                G[8] || (G[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", nS, [
                  b(Mn, {
                    modelValue: c.value,
                    "onUpdate:modelValue": G[2] || (G[2] = (re) => c.value = re),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          p.value ? (o(), R(Dt, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Qt, {
                status: p.value.status === "success" ? "synced" : "broken"
              }, fs({
                icon: h(() => [
                  x(m(p.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  x(m(p.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  x(m(p.value.status === "success" ? C.value : p.value.message), 1)
                ]),
                _: 2
              }, [
                p.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(Tt, { label: "Saved to:" }, {
                      default: h(() => [
                        b(b3, {
                          path: p.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    p.value.models_without_sources !== void 0 ? (o(), R(Tt, {
                      key: 0,
                      label: "Models without sources:",
                      value: p.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    p.value.models_without_sources && p.value.models_without_sources > 0 ? (o(), i("div", oS, [...G[9] || (G[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                p.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Re, {
                      variant: "primary",
                      size: "sm",
                      loading: f.value,
                      onClick: K
                    }, {
                      default: h(() => [...G[10] || (G[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        x(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Re, {
                      variant: "secondary",
                      size: "sm",
                      onClick: ve
                    }, {
                      default: h(() => [...G[11] || (G[11] = [
                        x(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Re, {
                      variant: "ghost",
                      size: "sm",
                      onClick: G[3] || (G[3] = (re) => p.value = null)
                    }, {
                      default: h(() => [...G[12] || (G[12] = [
                        x(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        footer: h(() => [
          s("div", aS, [
            e.embedded ? (o(), R(Re, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: G[4] || (G[4] = (re) => L.$emit("close"))
            }, {
              default: h(() => [...G[13] || (G[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Re, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: W
            }, {
              default: h(() => [
                x(m(I.value), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: S.value,
              "show-info": !0,
              onInfoClick: G[0] || (G[0] = (re) => v.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
        show: v.value,
        title: "What Gets Exported",
        onClose: G[5] || (G[5] = (re) => v.value = !1)
      }, {
        content: h(() => [...G[14] || (G[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  x(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  x(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  x(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  x(" — Environment settings and metadata")
                ])
              ])
            ]),
            s("div", { class: "info-section" }, [
              s("strong", null, "Use Cases:"),
              s("ul", null, [
                s("li", null, "Share environments with collaborators"),
                s("li", null, "Back up your setup for safekeeping"),
                s("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            s("p", { class: "info-note" }, [
              s("strong", null, "Note:"),
              x(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (o(), R(H3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: G[6] || (G[6] = (re) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      k.value && w.value ? (o(), R(Pl, {
        key: 1,
        warnings: w.value.warnings,
        onClose: G[7] || (G[7] = (re) => k.value = !1),
        onRevalidate: de
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), iS = /* @__PURE__ */ Me(lS, [["__scopeId", "data-v-6cf814a2"]]), rS = { class: "file-input-wrapper" }, cS = ["accept", "multiple", "disabled"], uS = /* @__PURE__ */ Ie({
  __name: "FileInput",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    variant: { default: "primary" },
    size: { default: "sm" },
    label: { default: "Choose File" }
  },
  emits: ["change"],
  setup(e, { expose: t, emit: n }) {
    const a = n, l = _(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (o(), i("div", rS, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, cS),
      b(Re, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          rt(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            x(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), dS = /* @__PURE__ */ Me(uS, [["__scopeId", "data-v-cd192091"]]), mS = {
  key: 0,
  class: "drop-zone-empty"
}, fS = { class: "drop-zone-text" }, vS = { class: "drop-zone-primary" }, pS = { class: "drop-zone-secondary" }, gS = { class: "drop-zone-actions" }, hS = {
  key: 1,
  class: "drop-zone-file"
}, yS = { class: "file-info" }, wS = { class: "file-details" }, _S = { class: "file-name" }, kS = { class: "file-size" }, bS = /* @__PURE__ */ Ie({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null), r = _(0), c = M(() => l.value !== null), u = M(() => {
      var S;
      return ((S = l.value) == null ? void 0 : S.name) || "";
    }), d = M(() => {
      if (!l.value) return "";
      const S = l.value.size;
      return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KB` : S < 1024 * 1024 * 1024 ? `${(S / (1024 * 1024)).toFixed(1)} MB` : `${(S / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f(S) {
      var C;
      S.stopPropagation(), r.value++, (C = S.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function p(S) {
      S.stopPropagation(), S.dataTransfer && (S.dataTransfer.dropEffect = "copy");
    }
    function v(S) {
      S.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(S) {
      var I;
      S.stopPropagation(), r.value = 0, a.value = !1;
      const C = (I = S.dataTransfer) == null ? void 0 : I.files;
      C && C.length > 0 && k(C[0]);
    }
    function g(S) {
      S.length > 0 && k(S[0]);
    }
    function k(S) {
      l.value = S, n("fileSelected", S);
    }
    function $() {
      l.value = null, n("clear");
    }
    return (S, C) => (o(), i("div", {
      class: Fe(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: bt(f, ["prevent"]),
      onDragover: bt(p, ["prevent"]),
      onDragleave: bt(v, ["prevent"]),
      onDrop: bt(w, ["prevent"])
    }, [
      c.value ? (o(), i("div", hS, [
        s("div", yS, [
          C[1] || (C[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", wS, [
            s("div", _S, m(u.value), 1),
            s("div", kS, m(d.value), 1)
          ])
        ]),
        b(Re, {
          variant: "ghost",
          size: "xs",
          onClick: $,
          title: "Remove file"
        }, {
          default: h(() => [...C[2] || (C[2] = [
            s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (o(), i("div", mS, [
        C[0] || (C[0] = s("div", { class: "drop-zone-icon" }, [
          s("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            s("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        s("div", fS, [
          s("p", vS, m(e.primaryText), 1),
          s("p", pS, m(e.secondaryText), 1)
        ]),
        s("div", gS, [
          b(dS, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              x(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), $S = /* @__PURE__ */ Me(bS, [["__scopeId", "data-v-0f79cb86"]]), CS = { class: "commit-hash" }, xS = /* @__PURE__ */ Ie({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, n = M(() => t.hash.slice(0, t.length));
    return (a, l) => (o(), i("span", CS, m(n.value), 1));
  }
}), Sc = /* @__PURE__ */ Me(xS, [["__scopeId", "data-v-7c333cc6"]]), SS = { class: "import-preview" }, IS = { class: "preview-header" }, ES = {
  key: 0,
  class: "source-env"
}, TS = { class: "preview-content" }, MS = { class: "preview-section" }, PS = { class: "section-header" }, RS = { class: "section-info" }, DS = { class: "section-count" }, NS = {
  key: 0,
  class: "item-list"
}, LS = { class: "item-name" }, US = {
  key: 0,
  class: "item-more"
}, OS = { class: "preview-section" }, AS = { class: "section-header" }, zS = { class: "section-info" }, FS = { class: "section-count" }, VS = {
  key: 0,
  class: "item-list"
}, BS = { class: "item-details" }, WS = { class: "item-name" }, GS = { class: "item-meta" }, jS = {
  key: 0,
  class: "item-more"
}, HS = { class: "preview-section" }, qS = { class: "section-header" }, KS = { class: "section-info" }, JS = { class: "section-count" }, QS = {
  key: 0,
  class: "item-list"
}, YS = { class: "item-name" }, XS = {
  key: 0,
  class: "item-more"
}, ZS = {
  key: 0,
  class: "preview-section"
}, e5 = { class: "git-info" }, t5 = /* @__PURE__ */ Ie({
  __name: "ImportPreview",
  props: {
    sourceEnvironment: {},
    workflows: { default: () => [] },
    models: { default: () => [] },
    nodes: { default: () => [] },
    gitBranch: {},
    gitCommit: {},
    maxPreviewItems: { default: 5 }
  },
  setup(e) {
    const t = e, n = M(() => t.workflows.length), a = M(() => t.models.length), l = M(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (o(), i("div", SS, [
      s("div", IS, [
        b(_s, null, {
          default: h(() => [...u[0] || (u[0] = [
            x("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (o(), i("span", ES, [
          u[1] || (u[1] = x(" From: ", -1)),
          b(il, null, {
            default: h(() => [
              x(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", TS, [
        s("div", MS, [
          s("div", PS, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", RS, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", DS, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (o(), i("div", NS, [
            (o(!0), i(V, null, ye(e.workflows.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", LS, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (o(), i("div", US, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", OS, [
          s("div", AS, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", zS, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", FS, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (o(), i("div", VS, [
            (o(!0), i(V, null, ye(e.models.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", BS, [
                s("span", WS, m(d.filename), 1),
                s("span", GS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (o(), i("div", jS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", HS, [
          s("div", qS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", KS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", JS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (o(), i("div", QS, [
            (o(!0), i(V, null, ye(e.nodes.slice(0, e.maxPreviewItems), (d) => (o(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", YS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (o(), i("div", XS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (o(), i("div", ZS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", e5, [
            e.gitBranch ? (o(), R(Tt, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(il, null, {
                  default: h(() => [
                    x(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (o(), R(Tt, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(Sc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), s5 = /* @__PURE__ */ Me(t5, [["__scopeId", "data-v-182fe113"]]), n5 = { class: "import-config" }, o5 = { class: "config-container" }, a5 = { class: "config-field" }, l5 = { class: "input-wrapper" }, i5 = ["value"], r5 = {
  key: 0,
  class: "validating-indicator"
}, c5 = {
  key: 1,
  class: "valid-indicator"
}, u5 = {
  key: 0,
  class: "field-error"
}, d5 = { class: "config-field" }, m5 = { class: "strategy-options" }, f5 = ["value", "checked", "onChange"], v5 = { class: "strategy-content" }, p5 = { class: "strategy-label" }, g5 = { class: "strategy-description" }, h5 = { class: "config-field switch-field" }, y5 = { class: "switch-label" }, w5 = ["checked"], _5 = { class: "advanced-section" }, k5 = { class: "advanced-content" }, b5 = { class: "config-field" }, $5 = ["value"], C5 = ["value"], x5 = /* @__PURE__ */ Ie({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(!1);
    $t(() => n.nameError, (p) => {
      l.value = !1, r.value = !p && n.name.length > 0;
    });
    const c = [
      {
        value: "all",
        label: "Download All",
        description: "Download all models with available sources"
      },
      {
        value: "required",
        label: "Required Only",
        description: "Only download models marked as required in workflows"
      },
      {
        value: "skip",
        label: "Skip Downloads",
        description: "Don't download any models now (resolve later)"
      }
    ];
    let u = null;
    function d(p) {
      const v = p.target.value;
      a("update:name", v), r.value = !1, u && clearTimeout(u), v.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", v);
      }, 400)) : l.value = !1;
    }
    function f() {
      n.name.length > 0 && a("validate-name", n.name);
    }
    return (p, v) => (o(), i("div", n5, [
      b(_s, null, {
        default: h(() => [...v[2] || (v[2] = [
          x("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", o5, [
        s("div", a5, [
          b(Ko, { required: "" }, {
            default: h(() => [...v[3] || (v[3] = [
              x("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", l5, [
            s("input", {
              type: "text",
              class: Fe(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: f
            }, null, 42, i5),
            l.value ? (o(), i("span", r5, "...")) : r.value ? (o(), i("span", c5, "✓")) : y("", !0)
          ]),
          e.nameError ? (o(), i("div", u5, m(e.nameError), 1)) : y("", !0),
          v[4] || (v[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", d5, [
          b(Ko, null, {
            default: h(() => [...v[5] || (v[5] = [
              x("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", m5, [
            (o(), i(V, null, ye(c, (w) => s("label", {
              key: w.value,
              class: Fe(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, f5),
              s("div", v5, [
                s("span", p5, m(w.label), 1),
                s("span", g5, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", h5, [
          s("label", y5, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: v[0] || (v[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, w5),
            v[6] || (v[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", _5, [
          v[8] || (v[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", k5, [
            s("div", b5, [
              b(Ko, null, {
                default: h(() => [...v[7] || (v[7] = [
                  x("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: v[1] || (v[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (o(!0), i(V, null, ye(it(Ll), (w) => (o(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, C5))), 128))
              ], 40, $5)
            ])
          ])
        ])
      ])
    ]));
  }
}), S5 = /* @__PURE__ */ Me(x5, [["__scopeId", "data-v-89ea06a1"]]), I5 = { class: "import-flow" }, E5 = {
  key: 0,
  class: "import-empty"
}, T5 = { class: "git-import-section" }, M5 = { class: "git-url-input-row" }, P5 = ["disabled"], R5 = {
  key: 0,
  class: "git-error"
}, D5 = {
  key: 1,
  class: "import-configure"
}, N5 = { class: "selected-file-bar" }, L5 = {
  key: 0,
  class: "file-bar-content"
}, U5 = { class: "file-bar-info" }, O5 = { class: "file-bar-name" }, A5 = { class: "file-bar-size" }, z5 = {
  key: 1,
  class: "file-bar-content"
}, F5 = { class: "file-bar-info" }, V5 = { class: "file-bar-name" }, B5 = {
  key: 0,
  class: "preview-loading"
}, W5 = { class: "import-actions" }, G5 = {
  key: 2,
  class: "import-progress"
}, j5 = { class: "creating-intro" }, H5 = {
  key: 0,
  class: "progress-warning"
}, q5 = {
  key: 1,
  class: "import-error"
}, K5 = { class: "error-message" }, J5 = {
  key: 3,
  class: "import-complete"
}, Q5 = { class: "complete-message" }, Y5 = { class: "complete-title" }, X5 = { class: "complete-details" }, Z5 = { class: "complete-actions" }, e8 = /* @__PURE__ */ Ie({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: n }) {
    var Pe, ge, ze, Ne;
    const a = e, l = n, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: f, getImportProgress: p } = ft();
    let v = null;
    const w = _(null), g = _(a.resumeImport ?? !1), k = _(!1), $ = _(!1), S = _(""), C = _(!1), I = _(null), E = _(""), P = _(null), O = _(!1), U = _(null), F = _(null), D = _({
      name: ((Pe = a.initialProgress) == null ? void 0 : Pe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), W = _(null), ce = _({
      message: ((ge = a.initialProgress) == null ? void 0 : ge.message) ?? "Preparing import...",
      phase: ((ze = a.initialProgress) == null ? void 0 : ze.phase) ?? "",
      progress: ((Ne = a.initialProgress) == null ? void 0 : Ne.progress) ?? 0,
      error: null
    }), de = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], J = M(() => {
      if (!F.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const _e = F.value;
      return {
        sourceEnvironment: _e.comfyui_version ? `ComfyUI ${_e.comfyui_version}` : "Unknown",
        workflows: _e.workflows.map((De) => De.name),
        models: _e.models.map((De) => ({
          filename: De.filename,
          size: 0,
          type: De.relative_path.split("/")[0] || "model"
        })),
        nodes: _e.nodes.map((De) => De.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), ve = M(() => !C.value && !I.value && F.value && D.value.name.length > 0 && !W.value && (w.value || P.value));
    async function K(_e) {
      w.value = _e, C.value = !0, I.value = null, F.value = null;
      try {
        const De = await r(_e);
        F.value = De;
      } catch (De) {
        I.value = De instanceof Error ? De.message : "Failed to analyze file", console.error("Preview error:", De);
      } finally {
        C.value = !1;
      }
    }
    function L() {
      w.value = null, P.value = null, E.value = "", U.value = null, k.value = !1, $.value = !1, S.value = "", F.value = null, I.value = null, D.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, W.value = null, l("source-cleared");
    }
    function G() {
      Q(), L(), g.value = !1, C.value = !1, O.value = !1, ce.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function re() {
      if (E.value.trim()) {
        O.value = !0, U.value = null;
        try {
          const _e = await c(E.value.trim());
          P.value = E.value.trim(), F.value = _e;
        } catch (_e) {
          U.value = _e instanceof Error ? _e.message : "Failed to analyze repository";
        } finally {
          O.value = !1;
        }
      }
    }
    function te(_e) {
      try {
        const De = new URL(_e);
        return De.host + De.pathname.replace(/\.git$/, "");
      } catch {
        return _e;
      }
    }
    async function ue(_e) {
      if (!_e) {
        W.value = "Environment name is required";
        return;
      }
      try {
        const De = await u(_e);
        W.value = De.valid ? null : De.error || "Invalid name";
      } catch {
        W.value = "Failed to validate name";
      }
    }
    async function me() {
      if (D.value.name && !(!w.value && !P.value)) {
        g.value = !0, k.value = !1, ce.value = { message: `Creating environment '${D.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let _e;
          if (w.value)
            _e = await d(
              w.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else if (P.value)
            _e = await f(
              P.value,
              D.value.name,
              D.value.modelStrategy,
              D.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          _e.status === "started" ? q() : ($.value = !1, S.value = _e.message, g.value = !1, k.value = !0);
        } catch (_e) {
          $.value = !1, S.value = _e instanceof Error ? _e.message : "Unknown error occurred during import", g.value = !1, k.value = !0;
        }
      }
    }
    async function q() {
      if (v) return;
      const _e = async () => {
        try {
          const he = await p();
          return ce.value = {
            message: he.message,
            phase: he.phase || "",
            progress: he.progress ?? (he.state === "importing" ? 50 : 0),
            error: he.error || null
          }, he.state === "complete" ? (Q(), $.value = !0, S.value = `Environment '${he.environment_name}' created successfully`, g.value = !1, k.value = !0, he.environment_name && l("import-complete", he.environment_name, D.value.switchAfterImport), !1) : he.state === "error" ? (Q(), $.value = !1, S.value = he.error || he.message, g.value = !1, k.value = !0, !1) : !0;
        } catch (he) {
          return console.error("Failed to poll import progress:", he), !0;
        }
      };
      await _e() && (v = setInterval(async () => {
        await _e() || Q();
      }, 2e3));
    }
    function Q() {
      v && (clearInterval(v), v = null);
    }
    function ae(_e) {
      return _e < 1024 ? `${_e} B` : _e < 1024 * 1024 ? `${(_e / 1024).toFixed(1)} KB` : _e < 1024 * 1024 * 1024 ? `${(_e / (1024 * 1024)).toFixed(1)} MB` : `${(_e / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return dt(async () => {
      try {
        const _e = await p();
        console.log("[ComfyGit ImportFlow] Import progress check:", _e.state, _e), _e.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", _e.environment_name), g.value = !0, D.value.name = _e.environment_name || D.value.name || "", ce.value = {
          progress: _e.progress ?? 0,
          message: _e.message || "Importing...",
          phase: _e.phase || "",
          error: null
        }, q());
      } catch (_e) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", _e);
      }
    }), t({
      handleReset: G,
      isImporting: g,
      canImport: ve
    }), (_e, De) => {
      var he;
      return o(), i("div", I5, [
        !w.value && !P.value && !g.value ? (o(), i("div", E5, [
          b($S, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: K
          }),
          De[7] || (De[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", T5, [
            De[5] || (De[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", M5, [
              At(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": De[0] || (De[0] = (ke) => E.value = ke),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: Ss(re, ["enter"]),
                disabled: O.value
              }, null, 40, P5), [
                [go, E.value]
              ]),
              b(Re, {
                variant: "primary",
                size: "sm",
                disabled: !E.value.trim() || O.value,
                onClick: re
              }, {
                default: h(() => [
                  x(m(O.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            U.value ? (o(), i("div", R5, m(U.value), 1)) : y("", !0),
            De[6] || (De[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || P.value) && !g.value && !k.value ? (o(), i("div", D5, [
          s("div", N5, [
            w.value ? (o(), i("div", L5, [
              De[8] || (De[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", U5, [
                s("div", O5, m(w.value.name), 1),
                s("div", A5, m(ae(w.value.size)), 1)
              ])
            ])) : P.value ? (o(), i("div", z5, [
              De[10] || (De[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", F5, [
                s("div", V5, m(te(P.value)), 1),
                De[9] || (De[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Re, {
              variant: "ghost",
              size: "sm",
              onClick: L
            }, {
              default: h(() => [...De[11] || (De[11] = [
                x(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (o(), i("div", B5, [...De[12] || (De[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (o(), R(vs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : F.value ? (o(), R(s5, {
            key: 2,
            "source-environment": J.value.sourceEnvironment,
            workflows: J.value.workflows,
            models: J.value.models,
            nodes: J.value.nodes,
            "git-branch": J.value.gitBranch,
            "git-commit": J.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          F.value ? (o(), R(S5, {
            key: 3,
            name: D.value.name,
            "onUpdate:name": De[1] || (De[1] = (ke) => D.value.name = ke),
            "model-strategy": D.value.modelStrategy,
            "onUpdate:modelStrategy": De[2] || (De[2] = (ke) => D.value.modelStrategy = ke),
            "torch-backend": D.value.torchBackend,
            "onUpdate:torchBackend": De[3] || (De[3] = (ke) => D.value.torchBackend = ke),
            "switch-after-import": D.value.switchAfterImport,
            "onUpdate:switchAfterImport": De[4] || (De[4] = (ke) => D.value.switchAfterImport = ke),
            "name-error": W.value,
            onValidateName: ue
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          D.value.modelStrategy === "skip" && ((he = F.value) != null && he.models_needing_download) ? (o(), R(vs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${F.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", W5, [
            b(Re, {
              variant: "secondary",
              size: "md",
              onClick: L
            }, {
              default: h(() => [...De[13] || (De[13] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Re, {
              variant: "primary",
              size: "md",
              disabled: !ve.value,
              onClick: me
            }, {
              default: h(() => [...De[14] || (De[14] = [
                x(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (o(), i("div", G5, [
          s("p", j5, [
            De[15] || (De[15] = x(" Importing environment ", -1)),
            s("strong", null, m(D.value.name), 1),
            De[16] || (De[16] = x("... ", -1))
          ]),
          b(ia, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: de
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (o(), i("p", H5, " This may take several minutes. Please wait... ")),
          ce.value.error ? (o(), i("div", q5, [
            s("p", K5, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : k.value ? (o(), i("div", J5, [
          s("div", {
            class: Fe(["complete-icon", $.value ? "success" : "error"])
          }, m($.value ? "✓" : "✕"), 3),
          s("div", Q5, [
            s("div", Y5, m($.value ? "Import Successful" : "Import Failed"), 1),
            s("div", X5, m(S.value), 1)
          ]),
          s("div", Z5, [
            b(Re, {
              variant: "primary",
              size: "md",
              onClick: G
            }, {
              default: h(() => [...De[17] || (De[17] = [
                x(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ic = /* @__PURE__ */ Me(e8, [["__scopeId", "data-v-72cbc04e"]]), t8 = /* @__PURE__ */ Ie({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1);
    function l(r, c) {
      c && n("import-complete-switch", r);
    }
    return (r, c) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          b(Ic, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
      }, {
        content: h(() => [...c[2] || (c[2] = [
          s("div", { class: "help-steps" }, [
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "1"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Creates a New Environment"),
                s("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "2"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Preview Before Import"),
                s("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "3"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Choose Model Strategy"),
                s("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            s("div", { class: "help-step" }, [
              s("span", { class: "step-number" }, "4"),
              s("div", { class: "step-content" }, [
                s("strong", null, "Switch When Ready"),
                s("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), s8 = /* @__PURE__ */ Me(t8, [["__scopeId", "data-v-41b1f298"]]), n8 = { class: "base-tabs" }, o8 = ["disabled", "onClick"], a8 = {
  key: 0,
  class: "base-tabs__badge"
}, l8 = /* @__PURE__ */ Ie({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l(r) {
      var c;
      (c = n.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (o(), i("div", n8, [
      (o(!0), i(V, null, ye(e.tabs, (u) => (o(), i("button", {
        key: u.id,
        class: Fe([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        x(m(u.label) + " ", 1),
        u.badge ? (o(), i("span", a8, m(u.badge), 1)) : y("", !0)
      ], 10, o8))), 128))
    ]));
  }
}), Ul = /* @__PURE__ */ Me(l8, [["__scopeId", "data-v-ad5e6cad"]]), i8 = { class: "commit-list" }, r8 = /* @__PURE__ */ Ie({
  __name: "CommitList",
  setup(e) {
    return (t, n) => (o(), i("div", i8, [
      rt(t.$slots, "default", {}, void 0)
    ]));
  }
}), Ec = /* @__PURE__ */ Me(r8, [["__scopeId", "data-v-8c5ee761"]]), c8 = { class: "commit-message" }, u8 = { class: "commit-date" }, d8 = /* @__PURE__ */ Ie({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t;
    function l() {
      n.clickable && a("click");
    }
    return (r, c) => (o(), i("div", {
      class: Fe(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(Sc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", c8, m(e.message), 1),
      s("span", u8, m(e.relativeDate), 1),
      r.$slots.actions ? (o(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = bt(() => {
        }, ["stop"]))
      }, [
        rt(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Tc = /* @__PURE__ */ Me(d8, [["__scopeId", "data-v-dd7c621b"]]), m8 = /* @__PURE__ */ Ie({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, n = M(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (o(), R(jt, null, fs({
      content: h(() => [
        e.commits.length === 0 ? (o(), R(Ms, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (o(), R(Ec, {
          key: 1,
          class: "history-commits"
        }, {
          default: h(() => [
            (o(!0), i(V, null, ye(e.commits, (r) => (o(), R(Tc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Re, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: h(() => [...l[0] || (l[0] = [
                    s("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
                    ], -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["hash", "message", "relative-date", "onClick"]))), 128))
          ]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(Ht, { title: n.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), f8 = /* @__PURE__ */ Me(m8, [["__scopeId", "data-v-dc0d8955"]]), v8 = { class: "branch-create-form" }, p8 = { class: "form-actions" }, g8 = /* @__PURE__ */ Ie({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const n = t, a = _(""), l = M(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (n("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", n("cancel");
    }
    return (u, d) => (o(), i("div", v8, [
      b(Mn, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", p8, [
        b(Re, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            x(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Re, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), h8 = /* @__PURE__ */ Me(g8, [["__scopeId", "data-v-7c500394"]]), y8 = { class: "branch-list-item__indicator" }, w8 = { class: "branch-list-item__name" }, _8 = {
  key: 0,
  class: "branch-list-item__actions"
}, k8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, b8 = /* @__PURE__ */ Ie({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, n) => (o(), i("div", {
      class: Fe(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: n[0] || (n[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", y8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", w8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (o(), i("div", _8, [
        rt(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (o(), i("span", k8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), $8 = /* @__PURE__ */ Me(b8, [["__scopeId", "data-v-c6581a24"]]), C8 = { class: "header-info" }, x8 = { class: "branch-name" }, S8 = {
  key: 0,
  class: "current-badge"
}, I8 = { class: "branch-meta" }, E8 = { key: 0 }, T8 = {
  key: 0,
  class: "meta-note"
}, M8 = {
  key: 0,
  class: "loading"
}, P8 = {
  key: 1,
  class: "empty-state"
}, R8 = /* @__PURE__ */ Ie({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch", "revert-current"],
  setup(e) {
    const t = e, { getBranchHistory: n } = ft(), a = _([]), l = _(!1), r = _(!0);
    return dt(async () => {
      try {
        const c = await n(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (o(), R(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[4] || (u[4] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", C8, [
          u[5] || (u[5] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", x8, m(e.branchName), 1),
          e.isCurrent ? (o(), i("span", S8, "CURRENT")) : y("", !0)
        ]),
        b(Oe, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            s("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ]),
      body: h(() => [
        s("div", I8, [
          r.value ? (o(), i("span", E8, "Loading...")) : (o(), i(V, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (o(), i("span", T8, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (o(), i("div", M8, "Loading commit history...")) : a.value.length === 0 ? (o(), i("div", P8, " No commits found on this branch ")) : (o(), R(Ec, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (o(!0), i(V, null, ye(a.value, (d) => (o(), R(Tc, {
              key: d.hash,
              hash: d.short_hash || d.hash.slice(0, 7),
              message: d.message,
              "relative-date": d.date_relative || d.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128))
          ]),
          _: 1
        }))
      ]),
      footer: h(() => [
        e.isCurrent ? (o(), R(Re, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("revert-current"))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            x(" Revert Changes ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        e.isCurrent ? y("", !0) : (o(), R(Re, {
          key: 1,
          variant: "destructive",
          size: "sm",
          onClick: u[2] || (u[2] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[8] || (u[8] = [
            x(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[10] || (u[10] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (o(), R(Oe, {
          key: 2,
          variant: "primary",
          onClick: u[3] || (u[3] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[9] || (u[9] = [
            x(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), D8 = /* @__PURE__ */ Me(R8, [["__scopeId", "data-v-e9f13e23"]]), N8 = {
  key: 0,
  class: "branch-toolbar"
}, L8 = {
  key: 3,
  class: "branch-list"
}, U8 = /* @__PURE__ */ Ie({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete", "revert-current"],
  setup(e, { emit: t }) {
    const n = t, a = _(!1), l = _(null);
    function r(v) {
      n("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function d(v) {
      l.value = null, n("delete", v);
    }
    function f(v) {
      l.value = null, n("switch", v);
    }
    function p() {
      l.value = null, n("revert-current");
    }
    return (v, w) => (o(), R(jt, null, fs({
      content: h(() => [
        e.embedded && !a.value ? (o(), i("div", N8, [
          b(Re, {
            variant: "primary",
            size: "sm",
            onClick: w[1] || (w[1] = (g) => a.value = !0)
          }, {
            default: h(() => [...w[4] || (w[4] = [
              x(" + Create Branch ", -1)
            ])]),
            _: 1
          })
        ])) : y("", !0),
        a.value ? (o(), R(h8, {
          key: 1,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (o(), R(Ms, {
          key: 2,
          icon: "○",
          message: "No branches found"
        })) : (o(), i("div", L8, [
          (o(!0), i(V, null, ye(e.branches, (g) => (o(), R($8, {
            key: g.name,
            "branch-name": g.name,
            "is-current": g.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (k) => u(g)
          }, {
            actions: h(() => [
              g.is_current ? y("", !0) : (o(), R(Re, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: bt((k) => n("switch", g.name), ["stop"])
              }, {
                default: h(() => [...w[5] || (w[5] = [
                  x(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (o(), R(D8, {
          key: 4,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: w[2] || (w[2] = (g) => l.value = null),
          onDelete: d,
          onSwitch: f,
          onRevertCurrent: p
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(Ht, { title: "BRANCHES" }, {
            actions: h(() => [
              a.value ? y("", !0) : (o(), R(Re, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: w[0] || (w[0] = (g) => a.value = !0)
              }, {
                default: h(() => [...w[3] || (w[3] = [
                  x(" + Create Branch ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), O8 = /* @__PURE__ */ Me(U8, [["__scopeId", "data-v-b24413b8"]]);
function Mc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const A8 = { class: "remote-url-display" }, z8 = ["title"], F8 = ["title"], V8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, B8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, W8 = /* @__PURE__ */ Ie({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, n = _(!1), a = M(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), n.value = !0, setTimeout(() => {
          n.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (o(), i("div", A8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, z8),
      s("button", {
        class: Fe(["copy-btn", { copied: n.value }]),
        onClick: l,
        title: n.value ? "Copied!" : "Copy URL"
      }, [
        n.value ? (o(), i("svg", B8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (o(), i("svg", V8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, F8)
    ]));
  }
}), G8 = /* @__PURE__ */ Me(W8, [["__scopeId", "data-v-7768a58d"]]), j8 = { class: "remote-title" }, H8 = {
  key: 0,
  class: "default-badge"
}, q8 = {
  key: 1,
  class: "sync-badge"
}, K8 = {
  key: 0,
  class: "ahead"
}, J8 = {
  key: 1,
  class: "behind"
}, Q8 = {
  key: 1,
  class: "synced"
}, Y8 = ["href"], X8 = {
  key: 1,
  class: "remote-url-text"
}, Z8 = /* @__PURE__ */ Ie({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, n = M(() => t.fetchingRemote === t.remote.name), a = M(() => t.remote.is_default), l = M(() => t.syncStatus && t.syncStatus.behind > 0), r = M(() => t.syncStatus && t.syncStatus.ahead > 0), c = M(() => t.remote.push_url !== t.remote.fetch_url), u = M(() => {
      const f = t.remote.fetch_url, p = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return p ? `https://${p[1]}/${p[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), d = M(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, p) => (o(), R(Qt, {
      status: a.value ? "synced" : void 0
    }, fs({
      icon: h(() => [
        x(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", j8, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (o(), i("span", H8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (o(), i("span", q8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (o(), i(V, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (o(), i("span", K8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (o(), i("span", J8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (o(), i("span", Q8, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (o(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: p[0] || (p[0] = bt(() => {
          }, ["stop"]))
        }, m(d.value), 9, Y8)) : (o(), i("span", X8, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Re, {
          variant: "primary",
          size: "xs",
          loading: n.value,
          onClick: p[1] || (p[1] = (v) => f.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...p[6] || (p[6] = [
            x(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Re, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: p[2] || (p[2] = (v) => f.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            x(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Re, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: p[3] || (p[3] = (v) => f.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            x(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Re, {
          variant: "secondary",
          size: "xs",
          onClick: p[4] || (p[4] = (v) => f.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...p[7] || (p[7] = [
            x(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (o(), R(Re, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: p[5] || (p[5] = (v) => f.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...p[8] || (p[8] = [
            x(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (o(), R(Tt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(G8, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), e4 = /* @__PURE__ */ Me(Z8, [["__scopeId", "data-v-8310f3a8"]]), t4 = ["for"], s4 = {
  key: 0,
  class: "base-form-field-required"
}, n4 = { class: "base-form-field-input" }, o4 = {
  key: 1,
  class: "base-form-field-error"
}, a4 = {
  key: 2,
  class: "base-form-field-hint"
}, l4 = /* @__PURE__ */ Ie({
  __name: "BaseFormField",
  props: {
    label: {},
    error: {},
    hint: {},
    required: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean, default: !0 },
    id: {}
  },
  setup(e) {
    const t = e, n = M(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (o(), i("div", {
      class: Fe(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (o(), i("label", {
        key: 0,
        for: n.value,
        class: "base-form-field-label"
      }, [
        x(m(e.label) + " ", 1),
        e.required ? (o(), i("span", s4, "*")) : y("", !0)
      ], 8, t4)) : y("", !0),
      s("div", n4, [
        rt(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (o(), i("span", o4, m(e.error), 1)) : e.hint ? (o(), i("span", a4, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Bt = /* @__PURE__ */ Me(l4, [["__scopeId", "data-v-9a1cf296"]]), i4 = { class: "remote-form" }, r4 = { class: "form-header" }, c4 = { class: "form-body" }, u4 = {
  key: 0,
  class: "form-error"
}, d4 = { class: "form-actions" }, m4 = /* @__PURE__ */ Ie({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _({
      name: n.remoteName,
      fetchUrl: n.fetchUrl,
      pushUrl: n.pushUrl
    }), r = _(!1), c = _(null);
    $t(() => [n.remoteName, n.fetchUrl, n.pushUrl], () => {
      l.value = {
        name: n.remoteName,
        fetchUrl: n.fetchUrl,
        pushUrl: n.pushUrl
      };
    });
    const u = M(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          a("submit", l.value);
        } catch (f) {
          c.value = f instanceof Error ? f.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (f, p) => (o(), i("div", i4, [
      s("div", r4, [
        b(_s, null, {
          default: h(() => [
            x(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", c4, [
        b(Bt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": p[0] || (p[0] = (v) => l.value.name = v),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Bt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": p[1] || (p[1] = (v) => l.value.fetchUrl = v),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Bt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(Pt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": p[2] || (p[2] = (v) => l.value.pushUrl = v),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (o(), i("div", u4, m(c.value), 1)) : y("", !0)
      ]),
      s("div", d4, [
        b(Re, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            x(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Re, {
          variant: "ghost",
          size: "md",
          onClick: p[3] || (p[3] = (v) => f.$emit("cancel"))
        }, {
          default: h(() => [...p[4] || (p[4] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), f4 = /* @__PURE__ */ Me(m4, [["__scopeId", "data-v-56021b18"]]), v4 = { class: "conflict-summary-box" }, p4 = { class: "summary-header" }, g4 = { class: "summary-text" }, h4 = { key: 0 }, y4 = {
  key: 1,
  class: "all-resolved"
}, w4 = { class: "summary-progress" }, _4 = { class: "progress-bar" }, k4 = { class: "progress-text" }, b4 = /* @__PURE__ */ Ie({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, n = M(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (a, l) => (o(), i("div", v4, [
      s("div", p4, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", g4, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (o(), i("p", h4, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (o(), i("p", y4, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", w4, [
        s("div", _4, [
          s("div", {
            class: "progress-fill",
            style: Ft({ width: n.value + "%" })
          }, null, 4)
        ]),
        s("span", k4, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), $4 = /* @__PURE__ */ Me(b4, [["__scopeId", "data-v-4e9e6cc9"]]), C4 = { class: "modal-header" }, x4 = { class: "modal-title" }, S4 = { class: "modal-body" }, I4 = {
  key: 0,
  class: "error-box"
}, E4 = {
  key: 0,
  class: "error-hint"
}, T4 = {
  key: 1,
  class: "loading-state"
}, M4 = { class: "commit-summary" }, P4 = {
  key: 0,
  class: "commits-section"
}, R4 = { class: "commit-list" }, D4 = { class: "commit-hash" }, N4 = { class: "commit-message" }, L4 = { class: "commit-date" }, U4 = {
  key: 1,
  class: "changes-section"
}, O4 = {
  key: 0,
  class: "change-group",
  open: ""
}, A4 = { class: "change-count" }, z4 = { class: "change-list" }, F4 = {
  key: 0,
  class: "conflict-badge"
}, V4 = {
  key: 1,
  class: "change-group"
}, B4 = { class: "change-count" }, W4 = { class: "change-list" }, G4 = {
  key: 2,
  class: "change-group"
}, j4 = { class: "change-count" }, H4 = { class: "change-list" }, q4 = {
  key: 3,
  class: "strategy-section"
}, K4 = { class: "radio-group" }, J4 = { class: "radio-option" }, Q4 = { class: "radio-option" }, Y4 = { class: "radio-option" }, X4 = {
  key: 4,
  class: "up-to-date"
}, Z4 = { class: "modal-actions" }, Li = "comfygit.pullModelStrategy", eI = /* @__PURE__ */ Ie({
  __name: "PullModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pulling: { type: Boolean },
    error: {},
    conflictResolutions: {}
  },
  emits: ["close", "pull", "openConflictResolution"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(localStorage.getItem(Li) || "skip");
    $t(l, (S) => {
      localStorage.setItem(Li, S);
    });
    const r = M(() => {
      var S;
      return ((S = n.error) == null ? void 0 : S.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = M(() => {
      if (!n.preview) return 0;
      const S = n.preview.changes.workflows;
      return S.added.length + S.modified.length + S.deleted.length;
    }), u = M(() => n.preview ? n.preview.changes.nodes.to_install.length : 0), d = M(() => {
      var S;
      return c.value > 0 || u.value > 0 || (((S = n.preview) == null ? void 0 : S.changes.models.count) || 0) > 0;
    }), f = M(() => n.preview && Mc(n.preview) ? n.preview : null), p = M(() => {
      var S;
      return ((S = f.value) == null ? void 0 : S.workflow_conflicts.length) ?? 0;
    }), v = M(() => {
      var S;
      return ((S = n.conflictResolutions) == null ? void 0 : S.size) ?? 0;
    }), w = M(
      () => p.value > 0 && v.value === p.value
    ), g = M(() => !(!n.preview || n.preview.has_uncommitted_changes || f.value && !w.value));
    function k(S) {
      if (!f.value) return !1;
      const C = S.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((I) => I.name === C);
    }
    function $(S) {
      const C = n.conflictResolutions ? Array.from(n.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: S, resolutions: C });
    }
    return (S, C) => {
      var I, E;
      return o(), R(rs, { to: "body" }, [
        e.show ? (o(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (P) => S.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = bt(() => {
            }, ["stop"]))
          }, [
            s("div", C4, [
              s("h3", x4, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (P) => S.$emit("close"))
              }, "✕")
            ]),
            s("div", S4, [
              e.error ? (o(), i("div", I4, [
                C[13] || (C[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  C[12] || (C[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (o(), i("p", E4, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (o(), i("div", T4, [...C[14] || (C[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                x(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (o(), i(V, { key: 2 }, [
                C[15] || (C[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (o(), i(V, { key: 3 }, [
                s("div", M4, [
                  C[17] || (C[17] = s("span", { class: "icon" }, "📥", -1)),
                  x(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (o(), i("div", P4, [
                  C[18] || (C[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", R4, [
                    (o(!0), i(V, null, ye(e.preview.commits, (P) => (o(), i("div", {
                      key: P.hash,
                      class: "commit-item"
                    }, [
                      s("span", D4, m(P.short_hash || P.hash.slice(0, 7)), 1),
                      s("span", N4, m(P.message), 1),
                      s("span", L4, m(P.date_relative || P.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (o(), i("div", U4, [
                  C[22] || (C[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (o(), i("details", O4, [
                    s("summary", null, [
                      C[19] || (C[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", A4, m(c.value) + " changes", 1)
                    ]),
                    s("div", z4, [
                      (o(!0), i(V, null, ye(e.preview.changes.workflows.added, (P) => (o(), i("div", {
                        key: "a-" + P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128)),
                      (o(!0), i(V, null, ye(e.preview.changes.workflows.modified, (P) => (o(), i("div", {
                        key: "m-" + P,
                        class: "change-item modify"
                      }, [
                        x(" ~ " + m(P) + " ", 1),
                        k(P) ? (o(), i("span", F4, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (o(!0), i(V, null, ye(e.preview.changes.workflows.deleted, (P) => (o(), i("div", {
                        key: "d-" + P,
                        class: "change-item delete"
                      }, " - " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (o(), i("details", V4, [
                    s("summary", null, [
                      C[20] || (C[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", B4, m(u.value) + " to install", 1)
                    ]),
                    s("div", W4, [
                      (o(!0), i(V, null, ye(e.preview.changes.nodes.to_install, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item add"
                      }, " + " + m(P), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (o(), i("details", G4, [
                    s("summary", null, [
                      C[21] || (C[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", j4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", H4, [
                      (o(!0), i(V, null, ye(e.preview.changes.models.referenced, (P) => (o(), i("div", {
                        key: P,
                        class: "change-item"
                      }, m(P), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                f.value ? (o(), R($4, {
                  key: 2,
                  "conflict-count": p.value,
                  "resolved-count": v.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (o(), i("div", q4, [
                  C[27] || (C[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", K4, [
                    s("label", J4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (P) => l.value = P),
                        value: "all"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[23] || (C[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", Q4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (P) => l.value = P),
                        value: "required"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[24] || (C[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", Y4, [
                      At(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (P) => l.value = P),
                        value: "skip"
                      }, null, 512), [
                        [qo, l.value]
                      ]),
                      C[25] || (C[25] = s("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (o(), i("div", X4, [
                  C[29] || (C[29] = s("span", { class: "icon" }, "✓", -1)),
                  x(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", Z4, [
              b(Re, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (P) => S.$emit("close"))
              }, {
                default: h(() => [...C[30] || (C[30] = [
                  x(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (o(), i(V, { key: 0 }, [
                b(Re, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (P) => $(!1))
                }, {
                  default: h(() => [...C[31] || (C[31] = [
                    x(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Re, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (P) => $(!0))
                }, {
                  default: h(() => [...C[32] || (C[32] = [
                    x(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (E = e.preview) != null && E.has_uncommitted_changes ? (o(), R(Re, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (P) => $(!0))
              }, {
                default: h(() => [...C[33] || (C[33] = [
                  x(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (o(), i(V, { key: 2 }, [
                f.value && !w.value ? (o(), R(Re, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (P) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    x(" Resolve Conflicts (" + m(v.value) + "/" + m(p.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (o(), R(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: C[9] || (C[9] = (P) => $(!1))
                }, {
                  default: h(() => [...C[34] || (C[34] = [
                    x(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : y("", !0)
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), tI = /* @__PURE__ */ Me(eI, [["__scopeId", "data-v-1d633bba"]]), sI = { class: "modal-header" }, nI = { class: "modal-title" }, oI = { class: "modal-body" }, aI = {
  key: 0,
  class: "error-box"
}, lI = {
  key: 1,
  class: "loading-state"
}, iI = {
  key: 2,
  class: "warning-box"
}, rI = {
  key: 1,
  class: "commits-section"
}, cI = { class: "commit-list" }, uI = { class: "commit-hash" }, dI = { class: "commit-message" }, mI = { class: "commit-date" }, fI = { class: "force-option" }, vI = { class: "checkbox-option" }, pI = { class: "commit-summary" }, gI = { key: 0 }, hI = { key: 1 }, yI = {
  key: 0,
  class: "info-box"
}, wI = {
  key: 2,
  class: "commits-section"
}, _I = { class: "commit-list" }, kI = { class: "commit-hash" }, bI = { class: "commit-message" }, $I = { class: "commit-date" }, CI = {
  key: 3,
  class: "up-to-date"
}, xI = { class: "modal-actions" }, SI = /* @__PURE__ */ Ie({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean },
    error: {}
  },
  emits: ["close", "push", "pull-first", "revalidate"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(!1), r = _(!1), c = M(() => {
      var w;
      return ((w = n.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = M(
      () => c.value.models_without_sources.length
    ), d = M(
      () => c.value.nodes_without_provenance.length
    ), f = M(
      () => u.value + d.value
    ), p = M(() => f.value > 0);
    function v(w) {
      a("push", { force: w });
    }
    return (w, g) => {
      var k, $, S, C;
      return o(), i(V, null, [
        (o(), R(rs, { to: "body" }, [
          e.show ? (o(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = bt(() => {
              }, ["stop"]))
            }, [
              s("div", sI, [
                s("h3", nI, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", oI, [
                e.error ? (o(), i("div", aI, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (o(), i("div", lI, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  x(" Loading preview... ", -1)
                ])])) : (k = e.preview) != null && k.has_uncommitted_changes ? (o(), i("div", iI, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : ($ = e.preview) != null && $.remote_has_new_commits ? (o(), i(V, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  p.value ? (o(), R(rl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", rI, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", cI, [
                      (o(!0), i(V, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", uI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", dI, m(I.message), 1),
                        s("span", mI, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", fI, [
                    s("label", vI, [
                      At(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [la, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (o(), i(V, { key: 4 }, [
                  s("div", pI, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (o(), i("span", gI, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (o(), i("span", hI, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (o(), i("div", yI, [...g[21] || (g[21] = [
                    s("svg", {
                      class: "info-icon",
                      width: "16",
                      height: "16",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      s("circle", {
                        cx: "8",
                        cy: "8",
                        r: "7",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        fill: "none"
                      }),
                      s("text", {
                        x: "8",
                        y: "11",
                        "text-anchor": "middle",
                        "font-size": "10",
                        "font-weight": "bold",
                        fill: "currentColor"
                      }, "i")
                    ], -1),
                    s("span", null, "This will create the remote branch for the first time.", -1)
                  ])])) : y("", !0),
                  p.value ? (o(), R(rl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (o(), i("div", wI, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", _I, [
                      (o(!0), i(V, null, ye(e.preview.commits, (I) => (o(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", kI, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", bI, m(I.message), 1),
                        s("span", $I, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (o(), i("div", CI, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    x(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", xI, [
                b(Re, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    x(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (S = e.preview) != null && S.remote_has_new_commits ? (o(), i(V, { key: 0 }, [
                  b(Re, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      x(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Re, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => v(!0))
                  }, {
                    default: h(() => [
                      x(m(p.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (o(), R(Re, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => v(!1))
                }, {
                  default: h(() => [
                    x(m(p.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((C = e.preview) != null && C.warnings) ? (o(), R(Pl, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), II = /* @__PURE__ */ Me(SI, [["__scopeId", "data-v-7748bf33"]]), EI = { class: "resolution-choice-group" }, TI = ["disabled"], MI = ["disabled"], PI = /* @__PURE__ */ Ie({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, n) => (o(), i("div", EI, [
      s("button", {
        class: Fe(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: n[0] || (n[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...n[2] || (n[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, TI),
      s("button", {
        class: Fe(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: n[1] || (n[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...n[3] || (n[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, MI)
    ]));
  }
}), RI = /* @__PURE__ */ Me(PI, [["__scopeId", "data-v-985715ed"]]), DI = { class: "conflict-header" }, NI = { class: "conflict-info" }, LI = { class: "workflow-name" }, UI = { class: "conflict-description" }, OI = {
  key: 0,
  class: "resolved-badge"
}, AI = { class: "resolved-text" }, zI = { class: "conflict-hashes" }, FI = { class: "hash-item" }, VI = { class: "hash-item" }, BI = { class: "conflict-actions" }, WI = /* @__PURE__ */ Ie({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = _(n.resolution);
    $t(() => n.resolution, (d) => {
      l.value = d;
    }), $t(l, (d) => {
      d && a("resolve", d);
    });
    const r = M(() => l.value !== null), c = M(() => n.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = M(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, f) => {
      var p, v;
      return o(), i("div", {
        class: Fe(["conflict-item", { resolved: r.value }])
      }, [
        s("div", DI, [
          f[2] || (f[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", NI, [
            s("code", LI, m(e.conflict.name) + ".json", 1),
            s("div", UI, m(c.value), 1)
          ]),
          r.value ? (o(), i("div", OI, [
            f[1] || (f[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", AI, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", zI, [
          s("span", FI, [
            f[3] || (f[3] = x("Your: ", -1)),
            s("code", null, m(((p = e.conflict.base_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", VI, [
            f[4] || (f[4] = x("Theirs: ", -1)),
            s("code", null, m(((v = e.conflict.target_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", BI, [
          b(RI, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), GI = /* @__PURE__ */ Me(WI, [["__scopeId", "data-v-506d3bbf"]]), jI = { class: "resolution-content" }, HI = {
  key: 0,
  class: "error-box"
}, qI = { class: "resolution-header" }, KI = { class: "header-stats" }, JI = { class: "stat" }, QI = { class: "stat-value" }, YI = { class: "stat resolved" }, XI = { class: "stat-value" }, ZI = {
  key: 0,
  class: "stat pending"
}, e6 = { class: "stat-value" }, t6 = { class: "conflicts-list" }, s6 = {
  key: 1,
  class: "all-resolved-message"
}, n6 = /* @__PURE__ */ Ie({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.resolutions.size), r = M(() => n.workflowConflicts.length - l.value), c = M(() => l.value === n.workflowConflicts.length), u = M(
      () => n.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = n.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function f(w, g) {
      a("resolve", w, g);
    }
    function p() {
      a("close");
    }
    function v() {
      a("apply");
    }
    return (w, g) => (o(), R(Mt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: p
    }, {
      body: h(() => [
        s("div", jI, [
          e.error ? (o(), i("div", HI, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", qI, [
            s("div", KI, [
              s("div", JI, [
                s("span", QI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", YI, [
                s("span", XI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (o(), i("div", ZI, [
                s("span", e6, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", t6, [
            (o(!0), i(V, null, ye(e.workflowConflicts, (k) => (o(), R(GI, {
              key: k.name,
              conflict: k,
              resolution: d(k.name),
              onResolve: ($) => f(k.name, $)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (o(), i("div", s6, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: p
        }, {
          default: h(() => [...g[7] || (g[7] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: v
        }, {
          default: h(() => [
            x(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), o6 = /* @__PURE__ */ Me(n6, [["__scopeId", "data-v-c58d150d"]]), a6 = { class: "node-conflict-item" }, l6 = { class: "node-header" }, i6 = { class: "node-name" }, r6 = { class: "node-id" }, c6 = { class: "version-comparison" }, u6 = { class: "version yours" }, d6 = { class: "version theirs" }, m6 = { class: "chosen-version" }, f6 = { class: "chosen" }, v6 = { class: "chosen-reason" }, p6 = { class: "affected-workflows" }, g6 = { class: "wf-source" }, h6 = { class: "wf-version" }, y6 = /* @__PURE__ */ Ie({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, n) => (o(), i("div", a6, [
      s("div", l6, [
        s("code", i6, m(e.conflict.node_name), 1),
        s("span", r6, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", c6, [
        s("div", u6, [
          n[0] || (n[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        n[2] || (n[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", d6, [
          n[1] || (n[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", m6, [
        n[3] || (n[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", f6, m(e.conflict.chosen_version), 1),
        s("span", v6, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", p6, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (o(!0), i(V, null, ye(e.conflict.affected_workflows, (a) => (o(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", g6, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", h6, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), w6 = /* @__PURE__ */ Me(y6, [["__scopeId", "data-v-8b626725"]]), _6 = { class: "validation-content" }, k6 = {
  key: 0,
  class: "compatible-message"
}, b6 = { class: "conflicts-list" }, $6 = {
  key: 2,
  class: "warnings-section"
}, C6 = /* @__PURE__ */ Ie({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.validation.is_compatible ? n.operationType === "pull" ? "Pull" : "Merge" : n.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (o(), R(Mt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", _6, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (o(), i("div", k6, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (o(), i(V, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", b6, [
              (o(!0), i(V, null, ye(e.validation.node_conflicts, (u) => (o(), R(w6, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (o(), i("div", $6, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (o(!0), i(V, null, ye(e.validation.warnings, (u, d) => (o(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Oe, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            x(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            x(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), x6 = /* @__PURE__ */ Me(C6, [["__scopeId", "data-v-fefd26ed"]]), S6 = {
  key: 0,
  class: "embedded-toolbar"
}, I6 = { class: "embedded-toolbar-search" }, E6 = /* @__PURE__ */ Ie({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const n = t, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: f,
      pullFromRemote: p,
      getPushPreview: v,
      pushToRemote: w,
      validateMerge: g
    } = ft(), k = _([]), $ = _({}), S = _(!1), C = _(null), I = _(""), E = _(!1), P = _(null), O = _(!1), U = _("add"), F = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), D = M(() => {
      if (!I.value.trim()) return k.value;
      const Ue = I.value.toLowerCase();
      return k.value.filter(
        (Ae) => Ae.name.toLowerCase().includes(Ue) || Ae.fetch_url.toLowerCase().includes(Ue) || Ae.push_url.toLowerCase().includes(Ue)
      );
    });
    async function W() {
      S.value = !0, C.value = null;
      try {
        const Ue = await a();
        k.value = Ue.remotes, await Promise.all(
          Ue.remotes.map(async (Ae) => {
            const Xe = await d(Ae.name);
            Xe && ($.value[Ae.name] = Xe);
          })
        );
      } catch (Ue) {
        C.value = Ue instanceof Error ? Ue.message : "Failed to load remotes";
      } finally {
        S.value = !1;
      }
    }
    function ce() {
      U.value = "add", F.value = { name: "", fetchUrl: "", pushUrl: "" }, O.value = !0;
    }
    function de(Ue) {
      const Ae = k.value.find((Xe) => Xe.name === Ue);
      Ae && (U.value = "edit", F.value = {
        name: Ae.name,
        fetchUrl: Ae.fetch_url,
        pushUrl: Ae.push_url
      }, O.value = !0);
    }
    async function J(Ue) {
      try {
        U.value === "add" ? await l(Ue.name, Ue.fetchUrl) : await c(Ue.name, Ue.fetchUrl, Ue.pushUrl || void 0), O.value = !1, await W();
      } catch (Ae) {
        C.value = Ae instanceof Error ? Ae.message : "Operation failed";
      }
    }
    function ve() {
      O.value = !1, F.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function K(Ue) {
      P.value = Ue;
      try {
        await u(Ue);
        const Ae = await d(Ue);
        Ae && ($.value[Ue] = Ae), n("toast", `✓ Fetched from ${Ue}`, "success");
      } catch (Ae) {
        n("toast", Ae instanceof Error ? Ae.message : "Fetch failed", "error");
      } finally {
        P.value = null;
      }
    }
    async function L(Ue) {
      if (confirm(`Remove remote "${Ue}"?`))
        try {
          await r(Ue), await W();
        } catch (Ae) {
          C.value = Ae instanceof Error ? Ae.message : "Failed to remove remote";
        }
    }
    function G() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const re = _("idle"), te = M(() => re.value === "pull_preview"), ue = M(
      () => re.value === "resolving" || re.value === "validating"
    ), me = M(
      () => re.value === "validation_review" || re.value === "executing"
    ), q = _(!1), Q = _(null), ae = _(!1), Pe = _(null), ge = _(null), ze = _(!1), Ne = _(null), _e = _(null), De = _(/* @__PURE__ */ new Map()), he = _(null), ke = _(null), T = M(() => Ne.value && Mc(Ne.value) ? Ne.value : null);
    async function A(Ue) {
      ge.value = Ue, re.value = "pull_preview", ze.value = !0, Ne.value = null, _e.value = null;
      try {
        Ne.value = await f(Ue);
      } catch (Ae) {
        _e.value = Ae instanceof Error ? Ae.message : "Failed to load pull preview";
      } finally {
        ze.value = !1;
      }
    }
    function le() {
      re.value = "idle", Ne.value = null, _e.value = null, ge.value = null;
    }
    async function Ee(Ue) {
      if (!ge.value) return;
      re.value = "executing", _e.value = null;
      const Ae = ge.value;
      try {
        const Xe = await p(Ae, Ue);
        if (Xe.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, re.value = "pull_preview";
          return;
        }
        Ve(), re.value = "idle", n("toast", `✓ Pulled from ${Ae}`, "success"), await W();
      } catch (Xe) {
        _e.value = Xe instanceof Error ? Xe.message : "Pull failed", re.value = "pull_preview";
      }
    }
    function we() {
      T.value && (re.value = "resolving", ke.value = null);
    }
    function Se(Ue, Ae) {
      De.value.set(Ue, { name: Ue, resolution: Ae });
    }
    function X() {
      re.value = "pull_preview";
    }
    async function j() {
      re.value = "validating", ke.value = null;
      try {
        const Ue = Array.from(De.value.values());
        he.value = await g(ge.value, Ue), re.value = "validation_review";
      } catch (Ue) {
        ke.value = Ue instanceof Error ? Ue.message : "Validation failed", re.value = "resolving";
      }
    }
    async function pe() {
      re.value = "executing";
      const Ue = ge.value;
      try {
        const Ae = Array.from(De.value.values()), Xe = await p(Ue, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ae
        });
        if (Xe.rolled_back) {
          _e.value = `Pull failed and was rolled back: ${Xe.error || "Unknown error"}`, re.value = "pull_preview";
          return;
        }
        Ve(), re.value = "idle", n("toast", `✓ Pulled from ${Ue}`, "success"), await W();
      } catch (Ae) {
        _e.value = Ae instanceof Error ? Ae.message : "Pull failed", re.value = "validation_review";
      }
    }
    function be() {
      re.value = "resolving";
    }
    function je() {
      Ve(), re.value = "idle";
    }
    function Ve() {
      De.value.clear(), he.value = null, ke.value = null, _e.value = null, Ne.value = null, ge.value = null;
    }
    async function Ce(Ue) {
      ge.value = Ue, q.value = !0, ze.value = !0, Q.value = null, Pe.value = null;
      try {
        Q.value = await v(Ue);
      } catch (Ae) {
        Pe.value = Ae instanceof Error ? Ae.message : "Failed to load push preview";
      } finally {
        ze.value = !1;
      }
    }
    async function ne() {
      if (ge.value) {
        ze.value = !0, Pe.value = null;
        try {
          Q.value = await v(ge.value);
        } catch (Ue) {
          Pe.value = Ue instanceof Error ? Ue.message : "Failed to refresh push preview";
        } finally {
          ze.value = !1;
        }
      }
    }
    function He() {
      q.value = !1, Q.value = null, Pe.value = null, ge.value = null;
    }
    async function Te(Ue) {
      var Xe;
      if (!ge.value) return;
      ae.value = !0;
      const Ae = ge.value;
      Pe.value = null;
      try {
        await w(Ae, Ue), He(), n("toast", `✓ Pushed to ${Ae}`, "success"), await W();
      } catch (yt) {
        const Nt = yt instanceof Error ? yt.message : "Push failed";
        Pe.value = Nt, yt instanceof ll && yt.status === 409 && ((Xe = yt.data) != null && Xe.needs_force) && Q.value ? Q.value = {
          ...Q.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : n("toast", Nt, "error");
      } finally {
        ae.value = !1;
      }
    }
    function Ze() {
      const Ue = ge.value;
      He(), Ue && A(Ue);
    }
    return dt(W), (Ue, Ae) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          S.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading remotes..."
          })) : C.value ? (o(), R(Bs, {
            key: 1,
            message: C.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            e.embedded && !O.value ? (o(), i("div", S6, [
              s("div", I6, [
                b(bn, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ae[2] || (Ae[2] = (Xe) => I.value = Xe),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Re, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...Ae[5] || (Ae[5] = [
                  x(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            O.value ? (o(), R(f4, {
              key: 1,
              mode: U.value,
              "remote-name": F.value.name,
              "fetch-url": F.value.fetchUrl,
              "push-url": F.value.pushUrl,
              onSubmit: J,
              onCancel: ve
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            D.value.length && !O.value ? (o(), R(Dt, {
              key: 2,
              title: "REMOTES",
              count: D.value.length
            }, {
              default: h(() => [
                (o(!0), i(V, null, ye(D.value, (Xe) => (o(), R(e4, {
                  key: Xe.name,
                  remote: Xe,
                  "sync-status": $.value[Xe.name],
                  "fetching-remote": P.value,
                  onFetch: K,
                  onEdit: de,
                  onRemove: L,
                  onPull: A,
                  onPush: Ce
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !D.value.length && !O.value ? (o(), R(Ms, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Re, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...Ae[6] || (Ae[6] = [
                    x(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ae[0] || (Ae[0] = (Xe) => E.value = !0)
            }, {
              actions: h(() => [
                O.value ? y("", !0) : (o(), R(Re, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ce
                }, {
                  default: h(() => [...Ae[4] || (Ae[4] = [
                    x(" + Add Remote ", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            })
          ]),
          key: "0"
        },
        e.embedded ? void 0 : {
          name: "search",
          fn: h(() => [
            O.value ? y("", !0) : (o(), R(bn, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Ae[1] || (Ae[1] = (Xe) => I.value = Xe),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(Cs, {
        show: E.value,
        title: "About Git Remotes",
        onClose: Ae[3] || (Ae[3] = (Xe) => E.value = !1)
      }, {
        content: h(() => [...Ae[7] || (Ae[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            x(" The "),
            s("strong", null, '"origin"'),
            x(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Re, {
            variant: "link",
            onClick: G
          }, {
            default: h(() => [...Ae[8] || (Ae[8] = [
              x(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(tI, {
        show: te.value,
        "remote-name": ge.value || "",
        preview: Ne.value,
        loading: ze.value,
        pulling: re.value === "executing",
        error: _e.value,
        "conflict-resolutions": De.value,
        onClose: le,
        onPull: Ee,
        onOpenConflictResolution: we
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(II, {
        show: q.value,
        "remote-name": ge.value || "",
        preview: Q.value,
        loading: ze.value,
        pushing: ae.value,
        error: Pe.value,
        onClose: He,
        onPush: Te,
        onPullFirst: Ze,
        onRevalidate: ne
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      ue.value && T.value ? (o(), R(o6, {
        key: 0,
        "workflow-conflicts": T.value.workflow_conflicts,
        resolutions: De.value,
        "operation-type": "pull",
        validating: re.value === "validating",
        error: ke.value,
        onClose: X,
        onResolve: Se,
        onApply: j
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      me.value && he.value ? (o(), R(x6, {
        key: 1,
        validation: he.value,
        "operation-type": "pull",
        executing: re.value === "executing",
        onProceed: pe,
        onGoBack: be,
        onCancel: je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), T6 = /* @__PURE__ */ Me(E6, [["__scopeId", "data-v-a6651a66"]]), M6 = /* @__PURE__ */ Ie({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "revert-current", "toast"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = _(n.initialTab ?? "remotes");
    return $t(() => n.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (o(), R(jt, null, {
      header: h(() => [
        b(Ht, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Ul, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (o(), R(f8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (o(), R(O8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d)),
          onRevertCurrent: u[6] || (u[6] = (d) => a("revert-current"))
        }, null, 8, ["branches", "current"])) : (o(), R(T6, {
          key: 2,
          embedded: "",
          onToast: u[7] || (u[7] = (d, f) => a("toast", d, f))
        }))
      ]),
      _: 1
    }));
  }
}), P6 = { class: "text-viewer-wrapper" }, R6 = ["disabled", "title"], D6 = { class: "text-content" }, N6 = /* @__PURE__ */ Ie({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle");
    async function l() {
      if (t.content)
        try {
          await Dl(t.content), a.value = "copied", setTimeout(() => {
            a.value = "idle";
          }, 2e3);
        } catch (u) {
          console.error("Failed to copy text:", u);
        }
    }
    function r(u) {
      (u.ctrlKey || u.metaKey) && u.key === "c" && u.stopPropagation();
    }
    function c(u) {
      u.stopPropagation();
    }
    return (u, d) => (o(), i("div", P6, [
      s("div", {
        ref_key: "textOutputElement",
        ref: n,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, R6),
        s("pre", D6, m(e.content), 1)
      ], 544)
    ]));
  }
}), L6 = /* @__PURE__ */ Me(N6, [["__scopeId", "data-v-85a537ba"]]), U6 = {
  key: 1,
  class: "manifest-viewer-shell"
}, O6 = { class: "manifest-path" }, A6 = /* @__PURE__ */ Ie({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ft(), n = _(!1), a = _(null), l = _(!1), r = _({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      n.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        n.value = !1;
      }
    }
    return dt(c), (u, d) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          n.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (o(), R(Bs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            !r.value.exists || !r.value.content ? (o(), R(Ms, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (o(), i("div", U6, [
              b(L6, {
                content: r.value.content
              }, null, 8, ["content"])
            ]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (f) => l.value = !0)
            }, {
              actions: h(() => [
                b(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: n.value
                }, {
                  default: h(() => [
                    x(m(n.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (f) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            x(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            x(" from the current environment's "),
            s("strong", null, ".cec"),
            x(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", O6, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            onClick: d[1] || (d[1] = (f) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), z6 = /* @__PURE__ */ Me(A6, [["__scopeId", "data-v-814a8fdd"]]), F6 = { class: "log-viewer-wrapper" }, V6 = ["disabled", "title"], B6 = /* @__PURE__ */ Ie({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, n = _(null), a = _("idle"), l = M(() => t.logs.map((f) => ({
      text: t.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var p;
      await Wt();
      const f = (p = n.value) == null ? void 0 : p.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    dt(r), $t(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((p) => p.text).join(`
`);
      try {
        await Dl(f), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (p) {
        console.error("Failed to copy logs:", p);
      }
    }
    function u(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function d(f) {
      f.stopPropagation();
    }
    return (f, p) => (o(), i("div", F6, [
      s("div", {
        ref_key: "logOutputElement",
        ref: n,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, V6),
        (o(!0), i(V, null, ye(l.value, (v, w) => (o(), i("div", {
          key: w,
          class: Fe(`log-line log-level-${v.level.toLowerCase()}`)
        }, m(v.text), 3))), 128))
      ], 544)
    ]));
  }
}), Pc = /* @__PURE__ */ Me(B6, [["__scopeId", "data-v-5aaf1b88"]]), W6 = /* @__PURE__ */ Ie({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: n, getEnvironmentLogPath: a, openFile: l } = ft(), r = _([]), c = _(!1), u = _(null), d = _(!1), f = _("production"), p = _(null), v = _(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const $ = await n();
          f.value = $.environment || "production";
        } catch {
        }
      } catch ($) {
        u.value = $ instanceof Error ? $.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const $ = await a();
        $.exists && (p.value = $.path);
      } catch {
      }
    }
    async function k() {
      if (p.value) {
        v.value = !0;
        try {
          await l(p.value);
        } catch ($) {
          console.error("Failed to open log file:", $);
        } finally {
          v.value = !1;
        }
      }
    }
    return dt(() => {
      w(), g();
    }), ($, S) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          c.value ? (o(), R(Vs, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (o(), R(Bs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            r.value.length === 0 ? (o(), R(Ms, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (o(), R(Pc, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: S[0] || (S[0] = (C) => d.value = !0)
            }, {
              actions: h(() => [
                b(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: k,
                  disabled: !p.value || v.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(v.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    x(m(c.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Cs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: S[2] || (S[2] = (C) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            S[3] || (S[3] = x(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(f.value), 1),
            S[4] || (S[4] = x(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          S[5] || (S[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            onClick: S[1] || (S[1] = (C) => d.value = !1)
          }, {
            default: h(() => [...S[6] || (S[6] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ui = /* @__PURE__ */ Ie({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: n,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ft(), c = e, u = _(c.initialTab ?? "workspace"), d = _([]), f = _(!1), p = _(null), v = _(!1), w = _(null), g = _(null), k = _(!1), $ = M(() => u.value === "workspace" ? w.value : g.value);
    async function S() {
      f.value = !0, p.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (E) {
        p.value = E instanceof Error ? E.message : `Failed to load ${u.value} logs`;
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      try {
        const [E, P] = await Promise.all([
          n(),
          l()
        ]);
        E.exists && (w.value = E.path), P.exists && (g.value = P.path);
      } catch {
      }
    }
    async function I() {
      if ($.value) {
        k.value = !0;
        try {
          await r($.value);
        } catch (E) {
          console.error("Failed to open log file:", E);
        } finally {
          k.value = !1;
        }
      }
    }
    return $t(u, () => {
      S();
    }), $t(() => c.initialTab, (E) => {
      E && (u.value = E);
    }), dt(() => {
      S(), C();
    }), (E, P) => (o(), i(V, null, [
      b(jt, null, fs({
        content: h(() => [
          f.value ? (o(), R(Vs, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : p.value ? (o(), R(Bs, {
            key: 1,
            message: p.value,
            retry: !0,
            onRetry: S
          }, null, 8, ["message"])) : (o(), i(V, { key: 2 }, [
            d.value.length === 0 ? (o(), R(Ms, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (o(), R(Pc, {
              key: 1,
              logs: d.value,
              "raw-format": u.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(Ht, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: P[0] || (P[0] = (O) => v.value = !0)
            }, {
              actions: h(() => [
                b(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !$.value || k.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    x(m(k.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Re, {
                  variant: "secondary",
                  size: "sm",
                  onClick: S,
                  disabled: f.value
                }, {
                  default: h(() => [
                    x(m(f.value ? "Loading..." : "Refresh"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          key: "0"
        },
        e.embedded ? void 0 : {
          name: "search",
          fn: h(() => [
            b(Ul, {
              modelValue: u.value,
              "onUpdate:modelValue": P[1] || (P[1] = (O) => u.value = O),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(Cs, {
        show: v.value,
        title: "About Logs",
        onClose: P[3] || (P[3] = (O) => v.value = !1)
      }, {
        content: h(() => [...P[4] || (P[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            x(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            x(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            x(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            x(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            x(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            x(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            onClick: P[2] || (P[2] = (O) => v.value = !1)
          }, {
            default: h(() => [...P[5] || (P[5] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), G6 = /* @__PURE__ */ Ie({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, n = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = _(t.initialTab ?? "manifest"), l = _(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = _(!1), c = M(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = M(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return $t(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), $t(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, f) => (o(), i(V, null, [
      b(jt, null, fs({
        header: h(() => [
          b(Ht, {
            title: c.value,
            "show-info": !0,
            onInfoClick: f[0] || (f[0] = (p) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (o(), R(z6, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (o(), R(W6, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (o(), R(Ui, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (o(), R(Ui, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        a.value !== "manifest" ? {
          name: "search",
          fn: h(() => [
            b(Ul, {
              modelValue: l.value,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
              tabs: n
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(Cs, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: f[3] || (f[3] = (p) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (o(), i(V, { key: 0 }, [
            f[4] || (f[4] = s("p", null, [
              s("strong", null, "Manifest"),
              x(" shows the live "),
              s("strong", null, "pyproject.toml"),
              x(" from the current environment's "),
              s("strong", null, ".cec"),
              x(" directory. ")
            ], -1)),
            f[5] || (f[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            f[6] || (f[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (o(), i(V, { key: 1 }, [
            f[7] || (f[7] = s("p", null, [
              s("strong", null, "Logging"),
              x(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            f[8] || (f[8] = s("p", null, [
              s("strong", null, "Environment"),
              x(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            f[9] || (f[9] = s("p", null, [
              s("strong", null, "Workspace"),
              x(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            f[10] || (f[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              x(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Re, {
            variant: "primary",
            size: "sm",
            onClick: f[2] || (f[2] = (p) => r.value = !1)
          }, {
            default: h(() => [...f[11] || (f[11] = [
              x(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), j6 = { class: "header-info" }, H6 = { class: "commit-hash" }, q6 = {
  key: 0,
  class: "commit-refs"
}, K6 = { class: "commit-message" }, J6 = { class: "commit-date" }, Q6 = {
  key: 0,
  class: "loading"
}, Y6 = {
  key: 1,
  class: "changes-section"
}, X6 = { class: "stats-row" }, Z6 = { class: "stat" }, eE = { class: "stat insertions" }, tE = { class: "stat deletions" }, sE = {
  key: 0,
  class: "change-group"
}, nE = {
  key: 1,
  class: "change-group"
}, oE = {
  key: 0,
  class: "version"
}, aE = {
  key: 2,
  class: "change-group"
}, lE = { class: "change-item" }, iE = /* @__PURE__ */ Ie({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: n } = ft(), a = _(null), l = _(!0), r = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = M(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return dt(async () => {
      try {
        a.value = await n(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (o(), R(Mt, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (f) => u.$emit("close"))
    }, {
      header: h(() => {
        var f, p, v, w;
        return [
          s("div", j6, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", H6, m(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((p = e.commit.hash) == null ? void 0 : p.slice(0, 7))), 1),
            (w = (v = a.value) == null ? void 0 : v.refs) != null && w.length ? (o(), i("span", q6, [
              (o(!0), i(V, null, ye(a.value.refs, (g) => (o(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Oe, {
            variant: "ghost",
            size: "sm",
            onClick: d[0] || (d[0] = (g) => u.$emit("close"))
          }, {
            default: h(() => [...d[5] || (d[5] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: h(() => {
        var f, p;
        return [
          s("div", K6, m(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          s("div", J6, m(((p = a.value) == null ? void 0 : p.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (o(), i("div", Q6, "Loading details...")) : a.value ? (o(), i("div", Y6, [
            s("div", X6, [
              s("span", Z6, m(a.value.stats.files_changed) + " files", 1),
              s("span", eE, "+" + m(a.value.stats.insertions), 1),
              s("span", tE, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (o(), i("div", sE, [
              b(wn, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  x("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(V, null, ye(a.value.changes.workflows.added, (v) => (o(), i("div", {
                key: "add-" + v,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(v), 1)
              ]))), 128)),
              (o(!0), i(V, null, ye(a.value.changes.workflows.modified, (v) => (o(), i("div", {
                key: "mod-" + v,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(v), 1)
              ]))), 128)),
              (o(!0), i(V, null, ye(a.value.changes.workflows.deleted, (v) => (o(), i("div", {
                key: "del-" + v,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(v), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (o(), i("div", nE, [
              b(wn, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  x("NODES", -1)
                ])]),
                _: 1
              }),
              (o(!0), i(V, null, ye(a.value.changes.nodes.added, (v) => (o(), i("div", {
                key: "add-" + v.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(v.name), 1),
                v.version ? (o(), i("span", oE, "(" + m(v.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (o(!0), i(V, null, ye(a.value.changes.nodes.removed, (v) => (o(), i("div", {
                key: "rem-" + v.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(v.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (o(), i("div", aE, [
              b(wn, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  x("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", lE, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            x(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: "primary",
          onClick: d[2] || (d[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            x(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), rE = /* @__PURE__ */ Me(iE, [["__scopeId", "data-v-d256ff6d"]]), cE = { class: "popover-header" }, uE = { class: "popover-body" }, dE = {
  key: 0,
  class: "changes-summary"
}, mE = {
  key: 0,
  class: "change-item"
}, fE = {
  key: 1,
  class: "change-item"
}, vE = {
  key: 2,
  class: "change-item"
}, pE = {
  key: 3,
  class: "change-item"
}, gE = {
  key: 4,
  class: "change-item"
}, hE = {
  key: 5,
  class: "change-item"
}, yE = {
  key: 1,
  class: "no-changes"
}, wE = {
  key: 2,
  class: "loading"
}, _E = {
  key: 3,
  class: "issues-error"
}, kE = { class: "error-header" }, bE = { class: "error-title" }, $E = { class: "issues-list" }, CE = { class: "workflow-state" }, xE = { class: "message-section" }, SE = { class: "popover-footer" }, IE = {
  key: 1,
  class: "commit-popover"
}, EE = { class: "popover-header" }, TE = { class: "popover-body" }, ME = {
  key: 0,
  class: "changes-summary"
}, PE = {
  key: 0,
  class: "change-item"
}, RE = {
  key: 1,
  class: "change-item"
}, DE = {
  key: 2,
  class: "change-item"
}, NE = {
  key: 3,
  class: "change-item"
}, LE = {
  key: 4,
  class: "change-item"
}, UE = {
  key: 5,
  class: "change-item"
}, OE = {
  key: 1,
  class: "no-changes"
}, AE = {
  key: 2,
  class: "loading"
}, zE = {
  key: 3,
  class: "issues-error"
}, FE = { class: "error-header" }, VE = { class: "error-title" }, BE = { class: "issues-list" }, WE = { class: "workflow-state" }, GE = { class: "message-section" }, jE = { class: "popover-footer" }, HE = /* @__PURE__ */ Ie({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const n = e, a = t, { commit: l } = ft(), r = _(""), c = _(!1), u = _(!1), d = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || n.status.has_changes;
    }), f = M(() => {
      if (!n.status) return !1;
      const k = n.status.workflows, $ = n.status.git_changes;
      return k.new.length > 0 || k.modified.length > 0 || k.deleted.length > 0 || $.nodes_added.length > 0 || $.nodes_removed.length > 0;
    }), p = M(() => {
      var k;
      return (k = n.status) != null && k.workflows.analyzed ? n.status.workflows.analyzed.filter(($) => $.has_issues) : [];
    }), v = M(() => p.value.length > 0), w = M(() => v.value && !u.value);
    async function g() {
      var k, $, S, C;
      if (!(v.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const E = `Committed: ${((k = I.summary) == null ? void 0 : k.new) || 0} new, ${(($ = I.summary) == null ? void 0 : $.modified) || 0} modified, ${((S = I.summary) == null ? void 0 : S.deleted) || 0} deleted`;
            a("committed", { success: !0, message: E });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const E = ((C = I.issues) == null ? void 0 : C.map((P) => `${P.name}: ${P.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${E}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          a("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (k, $) => e.asModal ? (o(), R(rs, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: $[5] || ($[5] = (S) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: $[4] || ($[4] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", cE, [
            $[11] || ($[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: $[0] || ($[0] = (S) => a("close"))
            }, [...$[10] || ($[10] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          s("div", uE, [
            e.status && d.value ? (o(), i("div", dE, [
              e.status.workflows.new.length ? (o(), i("div", mE, [
                $[12] || ($[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (o(), i("div", fE, [
                $[13] || ($[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (o(), i("div", vE, [
                $[14] || ($[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (o(), i("div", pE, [
                $[15] || ($[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (o(), i("div", gE, [
                $[16] || ($[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              f.value ? y("", !0) : (o(), i("div", hE, [...$[17] || ($[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (o(), i("div", yE, " No changes to commit ")) : (o(), i("div", wE, " Loading... ")),
            v.value ? (o(), i("div", _E, [
              s("div", kE, [
                $[18] || ($[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", bE, m(p.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", $E, [
                (o(!0), i(V, null, ye(p.value, (S) => (o(), i("div", {
                  key: S.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(S.name), 1),
                  s("span", CE, "(" + m(S.sync_state) + ")", 1),
                  x(": " + m(S.issue_summary), 1)
                ]))), 128))
              ]),
              b(ra, {
                modelValue: u.value,
                "onUpdate:modelValue": $[1] || ($[1] = (S) => u.value = S),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...$[19] || ($[19] = [
                  x(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", xE, [
              b(An, {
                modelValue: r.value,
                "onUpdate:modelValue": $[2] || ($[2] = (S) => r.value = S),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", SE, [
            b(Oe, {
              variant: "secondary",
              onClick: $[3] || ($[3] = (S) => a("close"))
            }, {
              default: h(() => [...$[20] || ($[20] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Oe, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (o(), i("div", IE, [
      s("div", EE, [
        $[22] || ($[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: $[6] || ($[6] = (S) => a("close"))
        }, [...$[21] || ($[21] = [
          s("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      s("div", TE, [
        e.status && d.value ? (o(), i("div", ME, [
          e.status.workflows.new.length ? (o(), i("div", PE, [
            $[23] || ($[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (o(), i("div", RE, [
            $[24] || ($[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (o(), i("div", DE, [
            $[25] || ($[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (o(), i("div", NE, [
            $[26] || ($[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (o(), i("div", LE, [
            $[27] || ($[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          f.value ? y("", !0) : (o(), i("div", UE, [...$[28] || ($[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (o(), i("div", OE, " No changes to commit ")) : (o(), i("div", AE, " Loading... ")),
        v.value ? (o(), i("div", zE, [
          s("div", FE, [
            $[29] || ($[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", VE, m(p.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", BE, [
            (o(!0), i(V, null, ye(p.value, (S) => (o(), i("div", {
              key: S.name,
              class: "issue-item"
            }, [
              s("strong", null, m(S.name), 1),
              s("span", WE, "(" + m(S.sync_state) + ")", 1),
              x(": " + m(S.issue_summary), 1)
            ]))), 128))
          ]),
          b(ra, {
            modelValue: u.value,
            "onUpdate:modelValue": $[7] || ($[7] = (S) => u.value = S),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...$[30] || ($[30] = [
              x(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", GE, [
          b(An, {
            modelValue: r.value,
            "onUpdate:modelValue": $[8] || ($[8] = (S) => r.value = S),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", jE, [
        b(Oe, {
          variant: "secondary",
          onClick: $[9] || ($[9] = (S) => a("close"))
        }, {
          default: h(() => [...$[31] || ($[31] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Oe, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            x(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Rc = /* @__PURE__ */ Me(HE, [["__scopeId", "data-v-5f897631"]]), qE = { class: "switch-body" }, KE = { class: "switch-message" }, JE = { class: "switch-details" }, QE = /* @__PURE__ */ Ie({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => e.show ? (o(), R(Mt, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: n[2] || (n[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", qE, [
          s("p", KE, [
            n[3] || (n[3] = x(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            n[4] || (n[4] = x(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            n[5] || (n[5] = x("? ", -1))
          ]),
          n[6] || (n[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", JE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          n[7] || (n[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Re, {
          variant: "secondary",
          onClick: n[0] || (n[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...n[8] || (n[8] = [
            x(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Re, {
          variant: "primary",
          onClick: n[1] || (n[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...n[9] || (n[9] = [
            x(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), YE = /* @__PURE__ */ Me(QE, [["__scopeId", "data-v-f6d223e6"]]), XE = {
  key: 0,
  class: "modal-overlay"
}, ZE = { class: "modal-content" }, eT = { class: "modal-body" }, tT = { class: "progress-info" }, sT = { class: "progress-percentage" }, nT = { class: "progress-state" }, oT = { class: "switch-steps" }, aT = { class: "step-icon" }, lT = { class: "step-label" }, iT = /* @__PURE__ */ Ie({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, n = M(() => {
      const r = {
        idle: "Idle",
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!",
        rolled_back: "Switch failed, restored previous environment",
        critical_failure: "Critical error occurred"
      };
      return t.message || r[t.state] || t.state;
    }), a = M(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = M(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let f = "pending", p = "○";
        return d < c ? (f = "completed", p = "✓") : d === c && (f = "active", p = "⟳"), {
          ...u,
          status: f,
          icon: p
        };
      });
    });
    return (r, c) => (o(), R(rs, { to: "body" }, [
      e.show ? (o(), i("div", XE, [
        s("div", ZE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", eT, [
            b(xc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", tT, [
              s("div", sT, m(e.progress) + "%", 1),
              s("div", nT, m(n.value), 1)
            ]),
            s("div", oT, [
              (o(!0), i(V, null, ye(l.value, (u) => (o(), i("div", {
                key: u.state,
                class: Fe(["switch-step", u.status])
              }, [
                s("span", aT, m(u.icon), 1),
                s("span", lT, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), rT = /* @__PURE__ */ Me(iT, [["__scopeId", "data-v-768a5078"]]), cT = { class: "modal-header" }, uT = { class: "modal-body" }, dT = {
  key: 0,
  class: "node-section"
}, mT = { class: "node-list" }, fT = {
  key: 1,
  class: "node-section"
}, vT = { class: "node-list" }, pT = { class: "modal-actions" }, gT = /* @__PURE__ */ Ie({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, n) => (o(), R(rs, { to: "body" }, [
      e.show ? (o(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: n[4] || (n[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: n[3] || (n[3] = bt(() => {
          }, ["stop"]))
        }, [
          s("div", cT, [
            n[5] || (n[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: n[0] || (n[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", uT, [
            n[8] || (n[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (o(), i("div", dT, [
              n[6] || (n[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", mT, [
                (o(!0), i(V, null, ye(e.mismatchDetails.missing_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (o(), i("div", fT, [
              n[7] || (n[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", vT, [
                (o(!0), i(V, null, ye(e.mismatchDetails.extra_nodes, (a) => (o(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            n[9] || (n[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", pT, [
            b(Re, {
              variant: "secondary",
              onClick: n[1] || (n[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...n[10] || (n[10] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Re, {
              variant: "primary",
              onClick: n[2] || (n[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...n[11] || (n[11] = [
                x(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), hT = /* @__PURE__ */ Me(gT, [["__scopeId", "data-v-7cad7518"]]), yT = [
  {
    id: "sponsor",
    url: "https://github.com/sponsors/comfygit-ai",
    title: "Sponsor ComfyGit",
    ariaLabel: "Sponsor ComfyGit on GitHub",
    iconPath: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z",
    label: "Sponsor"
  },
  {
    id: "discord",
    url: "https://discord.gg/2h5rSTeh6Y",
    title: "Join Discord",
    ariaLabel: "Join ComfyGit Discord",
    iconPath: "M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.027-.07 8.735 8.735 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085c-.399.233-.813.44-1.249.594a.05.05 0 0 0-.027.07c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019zM5.347 10.64c-.79 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.807 0 1.451.733 1.44 1.613 0 .888-.637 1.612-1.44 1.612zm5.316 0c-.788 0-1.44-.724-1.44-1.612 0-.889.637-1.613 1.44-1.613.808 0 1.451.733 1.44 1.613 0 .888-.632 1.612-1.44 1.612z"
  },
  {
    id: "x",
    url: "https://x.com/akatz_ai",
    title: "Follow on X",
    ariaLabel: "Follow on X",
    iconPath: "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633z"
  },
  {
    id: "github",
    url: "https://github.com/comfygit-ai/comfygit",
    title: "View on GitHub",
    ariaLabel: "View ComfyGit on GitHub",
    iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
  },
  {
    id: "docs",
    url: "https://docs.comfygit.org/",
    title: "Documentation",
    ariaLabel: "View ComfyGit Documentation",
    iconPath: "M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
  }
], Vo = "v0.0.24", wT = "Akatz", _T = { class: "social-buttons" }, kT = ["title", "aria-label", "onClick"], bT = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, $T = ["d"], CT = ["title", "aria-label", "onClick"], xT = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ST = ["d"], IT = /* @__PURE__ */ Ie({
  __name: "SocialButtons",
  setup(e) {
    function t(n) {
      window.open(n, "_blank", "noopener,noreferrer");
    }
    return (n, a) => (o(), i("div", _T, [
      (o(!0), i(V, null, ye(it(yT), (l) => (o(), i(V, {
        key: l.id
      }, [
        l.label ? (o(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          x(m(l.label) + " ", 1),
          (o(), i("svg", bT, [
            s("path", {
              d: l.iconPath
            }, null, 8, $T)
          ]))
        ], 8, kT)) : (o(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (o(), i("svg", xT, [
            s("path", {
              d: l.iconPath
            }, null, 8, ST)
          ]))
        ], 8, CT))
      ], 64))), 128))
    ]));
  }
}), Dc = /* @__PURE__ */ Me(IT, [["__scopeId", "data-v-4f846342"]]), ET = { class: "footer-info" }, TT = ["title"], MT = {
  key: 0,
  class: "dev-badge"
}, PT = { class: "made-by" }, RT = /* @__PURE__ */ Ie({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ft(), n = _(null), a = _(null), l = _(null), r = M(() => n.value === "development"), c = M(() => {
      var d;
      if (!r.value) return Vo;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Vo} (${u})` : `${Vo} (development)`;
    });
    return dt(async () => {
      try {
        const u = await t();
        n.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        n.value = null;
      }
    }), (u, d) => (o(), i("div", ET, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        x(m(it(Vo)) + " ", 1),
        r.value ? (o(), i("span", MT, "dev")) : y("", !0)
      ], 8, TT),
      s("span", PT, [
        d[0] || (d[0] = x(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        x(" by " + m(it(wT)), 1)
      ])
    ]));
  }
}), Nc = /* @__PURE__ */ Me(RT, [["__scopeId", "data-v-4fa265b3"]]), DT = /* @__PURE__ */ Ie({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = _(null);
    async function a() {
      var r;
      await ((r = n.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (o(), R(Mt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(kc, {
          ref_key: "contentRef",
          ref: n,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(Oe, {
            variant: "primary",
            disabled: !((u = n.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              x(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Oe, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              x(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), NT = /* @__PURE__ */ Me(DT, [["__scopeId", "data-v-fac00ae7"]]), LT = { class: "header-actions" }, UT = {
  key: 0,
  class: "wizard-step"
}, OT = { class: "form-field" }, AT = ["placeholder"], zT = {
  key: 0,
  class: "form-error"
}, FT = { class: "form-field form-field--checkbox" }, VT = { class: "form-checkbox" }, BT = {
  key: 0,
  class: "form-field"
}, WT = ["placeholder"], GT = {
  key: 0,
  class: "form-info"
}, jT = {
  key: 1,
  class: "form-suggestion"
}, HT = {
  key: 2,
  class: "form-error"
}, qT = {
  key: 3,
  class: "form-info"
}, KT = {
  key: 1,
  class: "wizard-step"
}, JT = {
  key: 0,
  class: "progress-check-loading"
}, QT = {
  key: 0,
  class: "cli-warning"
}, YT = { class: "cli-warning-header" }, XT = {
  key: 1,
  class: "env-landing"
}, ZT = { class: "env-list" }, eM = ["value"], tM = { class: "env-name" }, sM = {
  key: 2,
  class: "env-create"
}, nM = { class: "form-field" }, oM = { class: "form-field" }, aM = ["value"], lM = { class: "form-field" }, iM = ["disabled"], rM = ["value"], cM = { class: "form-field" }, uM = ["value"], dM = { class: "form-field form-field--checkbox" }, mM = { class: "form-checkbox" }, fM = {
  key: 0,
  class: "form-error"
}, vM = {
  key: 1,
  class: "env-creating"
}, pM = { class: "creating-intro" }, gM = {
  key: 3,
  class: "env-import"
}, hM = { class: "wizard-footer" }, yM = { class: "wizard-footer-actions" }, In = 10, wM = 600 * 1e3, Oi = 1800 * 1e3, _M = /* @__PURE__ */ Ie({
  __name: "FirstTimeSetupWizard",
  props: {
    defaultPath: {},
    detectedModelsDir: {},
    initialStep: {},
    existingEnvironments: {},
    cliInstalled: { type: Boolean },
    setupState: {},
    workspacePath: {}
  },
  emits: ["complete", "close", "switch-environment", "environment-created-no-switch"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: f,
      getComfyUIReleases: p
    } = ft(), v = _(n.initialStep || 1), w = _(null), g = _("landing"), k = _(!1), $ = _(!1), S = _(!1), C = _(!1), I = _(null), E = _(n.initialStep === 2), P = _(n.defaultPath), O = _(!!n.detectedModelsDir), U = _(n.detectedModelsDir || ""), F = _(null), D = _(null), W = _(null), ce = _(null), de = _("my-new-env"), J = _($c), ve = _("latest"), K = _(Cc), L = _(!0), G = _(null), re = _(null), te = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ue = _(!1), me = _(!1), q = _(!1), Q = _({ progress: 0, message: "" }), ae = _({ progress: 0, message: "" }), Pe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], ge = _(0), ze = _(null), Ne = _(0), _e = _(null), De = M(() => {
      var Te, Ze;
      const Ce = (Te = P.value) == null ? void 0 : Te.trim(), ne = !F.value, He = !O.value || !D.value && ((Ze = U.value) == null ? void 0 : Ze.trim());
      return Ce && ne && He;
    }), he = M(() => {
      var Ce;
      return (Ce = de.value) == null ? void 0 : Ce.trim();
    }), ke = M(() => !!(v.value === 2 || re.value || n.setupState === "empty_workspace" || n.setupState === "unmanaged")), T = M(() => re.value || n.workspacePath || null);
    async function A() {
      var Ce;
      if (F.value = null, !!((Ce = P.value) != null && Ce.trim()))
        try {
          const ne = await c({ path: P.value, type: "workspace" });
          ne.valid || (F.value = ne.error || "Invalid path");
        } catch (ne) {
          F.value = ne instanceof Error ? ne.message : "Validation failed";
        }
    }
    async function le() {
      var Ce;
      if (D.value = null, W.value = null, ce.value = null, !!((Ce = U.value) != null && Ce.trim()))
        try {
          const ne = await c({ path: U.value, type: "models" });
          if (ne.valid)
            ce.value = ne.model_count ?? null;
          else if (D.value = ne.error || "Invalid path", ne.suggestion) {
            W.value = ne.suggestion, U.value = ne.suggestion, D.value = null;
            const He = await c({ path: ne.suggestion, type: "models" });
            He.valid && (ce.value = He.model_count ?? null);
          }
        } catch (ne) {
          D.value = ne instanceof Error ? ne.message : "Validation failed";
        }
    }
    async function Ee() {
      var Ce, ne, He, Te, Ze;
      if (F.value = null, D.value = null, await A(), (Ce = F.value) != null && Ce.includes("already exists")) {
        F.value = null, re.value = ((ne = P.value) == null ? void 0 : ne.trim()) || n.defaultPath, v.value = 2, Se();
        return;
      }
      if (!F.value && !(O.value && ((He = U.value) != null && He.trim()) && (await le(), D.value))) {
        me.value = !0;
        try {
          await l({
            workspace_path: ((Te = P.value) == null ? void 0 : Te.trim()) || n.defaultPath,
            models_directory: O.value && ((Ze = U.value) == null ? void 0 : Ze.trim()) || null
          }), ge.value = 0, ze.value = Date.now();
          const Ue = setInterval(async () => {
            var Ae;
            if (ze.value && Date.now() - ze.value > wM) {
              clearInterval(Ue), me.value = !1, F.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const Xe = await r();
              if (ge.value = 0, Xe.state === "idle" && me.value) {
                clearInterval(Ue), me.value = !1, F.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Q.value = { progress: Xe.progress, message: Xe.message }, Xe.state === "complete" ? (clearInterval(Ue), me.value = !1, re.value = ((Ae = P.value) == null ? void 0 : Ae.trim()) || n.defaultPath, v.value = 2, Se()) : Xe.state === "error" && (clearInterval(Ue), me.value = !1, F.value = Xe.error || "Workspace creation failed");
            } catch (Xe) {
              ge.value++, console.warn(`Polling failure ${ge.value}/${In}:`, Xe), ge.value >= In && (clearInterval(Ue), me.value = !1, F.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ue) {
          me.value = !1, F.value = Ue instanceof Error ? Ue.message : "Failed to create workspace";
        }
      }
    }
    async function we() {
      q.value = !0, G.value = null;
      try {
        const Ce = {
          name: de.value.trim() || "my-new-env",
          python_version: J.value,
          comfyui_version: ve.value,
          torch_backend: K.value,
          switch_after: L.value,
          workspace_path: re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(Ce)).status === "started") {
          Ne.value = 0, _e.value = Date.now();
          const He = setInterval(async () => {
            if (_e.value && Date.now() - _e.value > Oi) {
              clearInterval(He), q.value = !1, G.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Te = await d();
              if (Ne.value = 0, Te.state === "idle" && q.value) {
                clearInterval(He), q.value = !1, G.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ae.value = {
                progress: Te.progress ?? 0,
                message: Te.message,
                phase: Te.phase
              }, Te.state === "complete") {
                clearInterval(He), q.value = !1;
                const Ze = Te.environment_name || Ce.name;
                L.value ? a("complete", Ze, re.value) : (g.value = "landing", a("environment-created-no-switch", Ze));
              } else Te.state === "error" && (clearInterval(He), q.value = !1, G.value = Te.error || "Environment creation failed");
            } catch (Te) {
              Ne.value++, console.warn(`Polling failure ${Ne.value}/${In}:`, Te), Ne.value >= In && (clearInterval(He), q.value = !1, G.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (Ce) {
        q.value = !1, G.value = Ce instanceof Error ? Ce.message : "Unknown error";
      }
    }
    async function Se() {
      ue.value = !0;
      try {
        te.value = await p();
      } catch (Ce) {
        console.error("Failed to load ComfyUI releases:", Ce);
      } finally {
        ue.value = !1;
      }
    }
    function X() {
      w.value && a("switch-environment", w.value, re.value);
    }
    function j() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : v.value === 2 && n.setupState === "no_workspace" && (v.value = 1);
    }
    function pe(Ce, ne) {
      $.value = !1, ne ? a("complete", Ce, re.value) : (a("environment-created-no-switch", Ce), g.value = "landing");
    }
    function be() {
    }
    dt(async () => {
      if (n.detectedModelsDir && (U.value = n.detectedModelsDir), n.workspacePath && (re.value = n.workspacePath), v.value === 2) {
        Se();
        const Ce = setTimeout(() => {
          E.value = !1;
        }, 3e3);
        await je(), clearTimeout(Ce), E.value = !1;
      }
    });
    async function je() {
      try {
        const Ce = await d();
        if (console.log("[ComfyGit] Create progress check:", Ce.state, Ce), Ce.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", Ce.environment_name), g.value = "create", q.value = !0, de.value = Ce.environment_name || "my-new-env", ae.value = {
            progress: Ce.progress ?? 0,
            message: Ce.message,
            phase: Ce.phase
          }, Ve();
          return;
        }
      } catch (Ce) {
        console.log("[ComfyGit] Create progress check failed:", Ce);
      }
      try {
        const Ce = await f();
        console.log("[ComfyGit] Import progress check:", Ce.state, Ce), Ce.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", Ce.environment_name), I.value = {
          message: Ce.message || "Importing...",
          phase: Ce.phase || "",
          progress: Ce.progress ?? 0,
          environmentName: Ce.environment_name || ""
        }, C.value = !0, g.value = "import", $.value = !0);
      } catch (Ce) {
        console.log("[ComfyGit] Import progress check failed:", Ce);
      }
    }
    async function Ve() {
      Ne.value = 0, _e.value = Date.now();
      let Ce = null;
      const ne = async () => {
        if (_e.value && Date.now() - _e.value > Oi)
          return Ce && clearInterval(Ce), q.value = !1, G.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Te = await d();
          if (Ne.value = 0, Te.state === "idle" && q.value)
            return Ce && clearInterval(Ce), q.value = !1, G.value = "Environment creation was interrupted. Please try again.", !1;
          if (ae.value = {
            progress: Te.progress ?? 0,
            message: Te.message,
            phase: Te.phase
          }, Te.state === "complete") {
            Ce && clearInterval(Ce), q.value = !1;
            const Ze = Te.environment_name || de.value;
            return a("complete", Ze, re.value), !1;
          } else if (Te.state === "error")
            return Ce && clearInterval(Ce), q.value = !1, G.value = Te.error || "Environment creation failed", !1;
          return !0;
        } catch (Te) {
          return Ne.value++, console.warn(`Polling failure ${Ne.value}/${In}:`, Te), Ne.value >= In ? (Ce && clearInterval(Ce), q.value = !1, G.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await ne() && (Ce = setInterval(async () => {
        !await ne() && Ce && clearInterval(Ce);
      }, 2e3));
    }
    return (Ce, ne) => (o(), i(V, null, [
      b(Mt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: ne[15] || (ne[15] = (He) => Ce.$emit("close"))
      }, {
        header: h(() => [
          ne[20] || (ne[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", LT, [
            b(Dc),
            ne[19] || (ne[19] = s("span", { class: "header-divider" }, null, -1)),
            ke.value ? (o(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: ne[0] || (ne[0] = (He) => k.value = !0)
            }, [...ne[17] || (ne[17] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                s("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                s("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : y("", !0),
            s("button", {
              class: "icon-btn",
              onClick: ne[1] || (ne[1] = (He) => Ce.$emit("close")),
              title: "Close"
            }, [...ne[18] || (ne[18] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        body: h(() => {
          var He;
          return [
            v.value === 1 ? (o(), i("div", UT, [
              ne[24] || (ne[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", OT, [
                ne[21] || (ne[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                At(s("input", {
                  "onUpdate:modelValue": ne[2] || (ne[2] = (Te) => P.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, AT), [
                  [go, P.value]
                ]),
                F.value ? (o(), i("p", zT, m(F.value), 1)) : y("", !0)
              ]),
              s("div", FT, [
                s("label", VT, [
                  At(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": ne[3] || (ne[3] = (Te) => O.value = Te)
                  }, null, 512), [
                    [la, O.value]
                  ]),
                  ne[22] || (ne[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              O.value ? (o(), i("div", BT, [
                ne[23] || (ne[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                At(s("input", {
                  "onUpdate:modelValue": ne[4] || (ne[4] = (Te) => U.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, WT), [
                  [go, U.value]
                ]),
                e.detectedModelsDir && !U.value ? (o(), i("p", GT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                W.value ? (o(), i("p", jT, " Did you mean: " + m(W.value), 1)) : y("", !0),
                D.value ? (o(), i("p", HT, m(D.value), 1)) : y("", !0),
                ce.value !== null && !D.value ? (o(), i("p", qT, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              me.value ? (o(), R(ia, {
                key: 1,
                progress: Q.value.progress,
                message: Q.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            v.value === 2 ? (o(), i("div", KT, [
              E.value ? (o(), i("div", JT, [...ne[25] || (ne[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (o(), i(V, { key: 1 }, [
                !n.cliInstalled && !S.value ? (o(), i("div", QT, [
                  s("div", YT, [
                    ne[27] || (ne[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    ne[28] || (ne[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: ne[5] || (ne[5] = (Te) => S.value = !0),
                      title: "Dismiss"
                    }, [...ne[26] || (ne[26] = [
                      s("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  ne[29] || (ne[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  ne[30] || (ne[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (o(), i("div", XT, [
                  ne[34] || (ne[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: ne[6] || (ne[6] = (Te) => g.value = "create")
                  }, [...ne[31] || (ne[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: ne[7] || (ne[7] = (Te) => {
                      C.value = !1, g.value = "import";
                    })
                  }, [...ne[32] || (ne[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (He = n.existingEnvironments) != null && He.length ? (o(), i(V, { key: 0 }, [
                    ne[33] || (ne[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", ZT, [
                      (o(!0), i(V, null, ye(n.existingEnvironments, (Te) => (o(), i("label", {
                        key: Te,
                        class: Fe(["env-option", { selected: w.value === Te }])
                      }, [
                        At(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Te,
                          "onUpdate:modelValue": ne[8] || (ne[8] = (Ze) => w.value = Ze)
                        }, null, 8, eM), [
                          [qo, w.value]
                        ]),
                        s("span", tM, m(Te), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (o(), i("div", sM, [
                  q.value ? (o(), i("div", vM, [
                    s("p", pM, [
                      ne[41] || (ne[41] = x(" Creating environment ", -1)),
                      s("strong", null, m(de.value), 1),
                      ne[42] || (ne[42] = x("... ", -1))
                    ]),
                    b(ia, {
                      progress: ae.value.progress,
                      message: ae.value.message,
                      "current-phase": ae.value.phase,
                      "show-steps": !0,
                      steps: Pe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    ne[43] || (ne[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (o(), i(V, { key: 0 }, [
                    ne[40] || (ne[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", nM, [
                      ne[35] || (ne[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      At(s("input", {
                        "onUpdate:modelValue": ne[9] || (ne[9] = (Te) => de.value = Te),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [go, de.value]
                      ])
                    ]),
                    s("div", oM, [
                      ne[36] || (ne[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": ne[10] || (ne[10] = (Te) => J.value = Te),
                        class: "form-select"
                      }, [
                        (o(!0), i(V, null, ye(it(bc), (Te) => (o(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te), 9, aM))), 128))
                      ], 512), [
                        [On, J.value]
                      ])
                    ]),
                    s("div", lM, [
                      ne[37] || (ne[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": ne[11] || (ne[11] = (Te) => ve.value = Te),
                        class: "form-select",
                        disabled: ue.value
                      }, [
                        (o(!0), i(V, null, ye(te.value, (Te) => (o(), i("option", {
                          key: Te.tag_name,
                          value: Te.tag_name
                        }, m(Te.name), 9, rM))), 128))
                      ], 8, iM), [
                        [On, ve.value]
                      ])
                    ]),
                    s("div", cM, [
                      ne[38] || (ne[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      At(s("select", {
                        "onUpdate:modelValue": ne[12] || (ne[12] = (Te) => K.value = Te),
                        class: "form-select"
                      }, [
                        (o(!0), i(V, null, ye(it(Ll), (Te) => (o(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te) + m(Te === "auto" ? " (detect GPU)" : ""), 9, uM))), 128))
                      ], 512), [
                        [On, K.value]
                      ])
                    ]),
                    s("div", dM, [
                      s("label", mM, [
                        At(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": ne[13] || (ne[13] = (Te) => L.value = Te)
                        }, null, 512), [
                          [la, L.value]
                        ]),
                        ne[39] || (ne[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    G.value ? (o(), i("div", fM, m(G.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (o(), i("div", gM, [
                  b(Ic, {
                    "workspace-path": re.value,
                    "resume-import": C.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: pe,
                    onImportStarted: ne[14] || (ne[14] = (Te) => $.value = !0),
                    onSourceCleared: be
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", hM, [
            b(Nc),
            s("div", yM, [
              v.value === 1 ? (o(), R(Oe, {
                key: 0,
                variant: "primary",
                disabled: !De.value || me.value,
                onClick: Ee
              }, {
                default: h(() => [
                  x(m(me.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : v.value === 2 ? (o(), i(V, { key: 1 }, [
                !q.value && !$.value && (g.value !== "landing" || n.setupState === "no_workspace" && !re.value) ? (o(), R(Oe, {
                  key: 0,
                  variant: "secondary",
                  onClick: j
                }, {
                  default: h(() => [...ne[44] || (ne[44] = [
                    x(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (o(), R(Oe, {
                  key: 1,
                  variant: "primary",
                  disabled: !he.value || q.value,
                  onClick: we
                }, {
                  default: h(() => [
                    x(m(q.value ? "Creating..." : L.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (o(), R(Oe, {
                  key: 2,
                  variant: "primary",
                  onClick: X
                }, {
                  default: h(() => [
                    x(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      k.value ? (o(), R(NT, {
        key: 0,
        "workspace-path": T.value,
        onClose: ne[16] || (ne[16] = (He) => k.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), kM = /* @__PURE__ */ Me(_M, [["__scopeId", "data-v-9a9aadc0"]]), bM = { class: "update-banner" }, $M = { class: "update-banner__left" }, CM = { class: "update-banner__title" }, xM = {
  key: 0,
  class: "update-banner__summary"
}, SM = { class: "update-banner__actions" }, IM = ["disabled"], EM = ["disabled"], TM = ["disabled"], MM = /* @__PURE__ */ Ie({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const n = t;
    return (a, l) => (o(), i("div", bM, [
      s("div", $M, [
        s("div", CM, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (o(), i("div", xM, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", SM, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => n("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, IM),
        e.info.release_url ? (o(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => n("release-notes"))
        }, " Release notes ", 8, EM)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => n("dismiss"))
        }, " Dismiss ", 8, TM)
      ])
    ]));
  }
}), PM = /* @__PURE__ */ Me(MM, [["__scopeId", "data-v-49562c5c"]]), Lc = "ComfyGit.UpdateNotice.DismissedVersion";
function RM() {
  try {
    return localStorage.getItem(Lc);
  } catch {
    return null;
  }
}
function DM(e) {
  try {
    localStorage.setItem(Lc, e);
  } catch {
  }
}
function NM(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : RM() !== e.latest_version;
}
const LM = { class: "comfygit-panel" }, UM = { class: "panel-header" }, OM = { class: "header-left" }, AM = {
  key: 0,
  class: "header-info"
}, zM = { class: "header-actions" }, FM = { class: "env-switcher" }, VM = { class: "env-switcher-header" }, BM = { class: "env-control-buttons" }, WM = {
  key: 0,
  class: "header-info"
}, GM = { class: "branch-name" }, jM = { class: "panel-main" }, HM = { class: "sidebar" }, qM = { class: "sidebar-content" }, KM = { class: "sidebar-section" }, JM = { class: "sidebar-section" }, QM = { class: "sidebar-section" }, YM = { class: "sidebar-footer" }, XM = { class: "content-area" }, ZM = {
  key: 0,
  class: "error-message"
}, eP = {
  key: 1,
  class: "loading"
}, tP = { class: "dialog-content env-selector-dialog" }, sP = { class: "dialog-header" }, nP = { class: "dialog-body" }, oP = { class: "env-list" }, aP = { class: "env-info" }, lP = { class: "env-name-row" }, iP = { class: "env-indicator" }, rP = { class: "env-name" }, cP = {
  key: 0,
  class: "env-branch"
}, uP = {
  key: 1,
  class: "current-label"
}, dP = { class: "env-stats" }, mP = ["onClick"], fP = { class: "toast-container" }, vP = { class: "toast-message" }, Ai = "ComfyGit.LastView", zi = "ComfyGit.LastSection", pP = /* @__PURE__ */ Ie({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const n = e, a = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: f,
      revertChanges: p,
      deleteBranch: v,
      getEnvironments: w,
      switchEnvironment: g,
      getSwitchProgress: k,
      deleteEnvironment: $,
      syncEnvironmentManually: S,
      repairWorkflowModels: C,
      getSetupStatus: I,
      getUpdateCheck: E,
      updateManager: P
    } = ft(), O = Jh(), U = _(null), F = _([]), D = _([]), W = _([]), ce = M(() => W.value.find((ie) => ie.is_current)), de = _(null), J = _(!1), ve = _(!1), K = _("remotes");
    function L(ie) {
      return ie ? {
        manifest: "manifest",
        "debug-env": "env",
        "debug-workspace": "workspace",
        "debug-orchestrator": "orchestrator"
      }[ie] ?? "manifest" : "manifest";
    }
    const G = _(L(n.initialView)), re = _(null), te = _(!1), ue = _(1), me = M(() => {
      var ie;
      return ((ie = re.value) == null ? void 0 : ie.state) || "managed";
    }), q = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, Q = M(() => {
      var ie, B;
      return ((B = (ie = re.value) == null ? void 0 : ie.runtime_context) == null ? void 0 : B.capabilities) || q;
    }), ae = _(!1), Pe = _(null), ge = _(null), ze = _(!1), Ne = _(null), _e = _(!1), De = _(!1), he = M(() => !_e.value && NM(Ne.value)), ke = _(null), T = _(null), A = _(null), le = _(!1), Ee = _(!1), we = _(""), Se = _(null), X = _({ state: "idle", progress: 0, message: "" });
    let j = null, pe = null;
    const be = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" },
      nodes: { view: "nodes", section: "this-env" }
    }, je = n.initialView ? be[n.initialView] : null, Ve = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Ce = ["this-env", "version-control", "workspace", "diagnostics"];
    function ne() {
      try {
        const ie = sessionStorage.getItem(Ai), B = sessionStorage.getItem(zi), Je = ie === "branches" || ie === "history" || ie === "remotes" ? "version-control" : ie === "manifest" || ie === "debug-env" || ie === "debug-workspace" ? "diagnostics" : ie, ot = B === "all-envs" ? "workspace" : B === "sharing" ? "version-control" : B;
        if (ie && B && Ve.includes(Je) && Ce.includes(ot))
          return { view: Je, section: ot };
      } catch {
      }
      return null;
    }
    const He = ne(), Te = _((je == null ? void 0 : je.view) ?? (He == null ? void 0 : He.view) ?? "status"), Ze = _((je == null ? void 0 : je.section) ?? (He == null ? void 0 : He.section) ?? "this-env");
    function Ue(ie, B) {
      Te.value = ie, Ze.value = B;
      try {
        sessionStorage.setItem(Ai, ie), sessionStorage.setItem(zi, B);
      } catch {
      }
    }
    function Ae(ie) {
      const Je = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ie];
      Je && Ue(Je.view, Je.section);
    }
    function Xe(ie) {
      K.value = ie, Ue("version-control", "version-control");
    }
    function yt(ie) {
      G.value = ie, Ue("diagnostics", "diagnostics");
    }
    function Nt() {
      Xe("branches");
    }
    function es() {
      a("close"), setTimeout(async () => {
        await Z("Comfy.OpenManagerDialog") || await Z("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || ee(["Extensions", "Manage extensions"]) || ee(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function Z(ie) {
      var ot, wt;
      const B = window.app, Je = [
        (ot = B == null ? void 0 : B.extensionManager) == null ? void 0 : ot.command,
        (wt = B == null ? void 0 : B.extensionManager) == null ? void 0 : wt.commands,
        B == null ? void 0 : B.command,
        B == null ? void 0 : B.commands
      ];
      for (const xt of Je)
        if (typeof (xt == null ? void 0 : xt.execute) == "function")
          try {
            return await xt.execute(ie), !0;
          } catch (Vt) {
            console.debug(`[ComfyGit] Command ${ie} did not open Extensions manager`, Vt);
          }
      return !1;
    }
    function ee(ie) {
      var ot, wt, xt;
      const B = ie.map((Vt) => Vt.toLowerCase()), Je = document.querySelectorAll('button, [role="button"]');
      for (const Vt of Je) {
        const ys = Vt;
        if ([
          (ot = ys.textContent) == null ? void 0 : ot.trim(),
          (wt = ys.getAttribute("title")) == null ? void 0 : wt.trim(),
          (xt = ys.getAttribute("aria-label")) == null ? void 0 : xt.trim()
        ].filter(Boolean).map((z) => z.toLowerCase()).some((z) => B.includes(z)))
          return ys.click(), !0;
      }
      return !1;
    }
    const se = _(null), Qe = _(!1), Be = _(!1), at = _([]);
    let nt = 0;
    function We(ie, B = "info", Je = 3e3) {
      const ot = ++nt;
      return at.value.push({ id: ot, message: ie, type: B }), Je > 0 && setTimeout(() => {
        at.value = at.value.filter((wt) => wt.id !== ot);
      }, Je), ot;
    }
    function ut(ie) {
      at.value = at.value.filter((B) => B.id !== ie);
    }
    function ts(ie, B) {
      We(ie, B);
    }
    async function qt() {
      Ne.value = null, _e.value = !1;
      try {
        Ne.value = await E();
      } catch {
      }
    }
    function ss() {
      var B;
      const ie = (B = Ne.value) == null ? void 0 : B.release_url;
      if (ie)
        try {
          window.open(ie, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Kt() {
      var B;
      const ie = (B = Ne.value) == null ? void 0 : B.latest_version;
      ie && DM(ie), _e.value = !0;
    }
    async function H() {
      if (De.value) return;
      De.value = !0;
      const ie = We("Updating comfygit-manager...", "info", 0);
      try {
        const B = await P();
        if (ut(ie), B.status !== "success") {
          if (We(B.message || "Update failed", "error"), B.manual_instructions) {
            const Je = B.manual_instructions.split(`
`).map((ot) => ot.trim()).filter(Boolean);
            se.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Je,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                se.value = null;
              }
            };
          }
          return;
        }
        if (We(B.message || "Update complete", "success"), Kt(), B.restart_required) {
          oe();
          try {
            await Js("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (B) {
        ut(ie);
        const Je = B instanceof Error ? B.message : "Update failed";
        We(Je, "error");
      } finally {
        De.value = !1;
      }
    }
    const fe = M(() => {
      if (!U.value) return "neutral";
      const ie = U.value.workflows, B = ie.new.length > 0 || ie.modified.length > 0 || ie.deleted.length > 0 || U.value.has_changes;
      return U.value.comparison.is_synced ? B ? "warning" : "success" : "error";
    });
    M(() => U.value ? fe.value === "success" ? "All synced" : fe.value === "warning" ? "Uncommitted changes" : fe.value === "error" ? "Not synced" : "" : "");
    async function Le(ie = {}) {
      ae.value = !0, Pe.value = null;
      try {
        const [B, Je, ot, wt] = await Promise.all([
          l(!0),
          r(50),
          c(),
          w()
        ]);
        U.value = B, F.value = Je.commits, D.value = ot.branches, W.value = wt, a("statusUpdate", B), (ie.refreshWorkflows ?? !0) && ke.value && await ke.value.loadWorkflows(!0);
      } catch (B) {
        Pe.value = B instanceof Error ? B.message : "Failed to load status", U.value = null, F.value = [], D.value = [];
      } finally {
        ae.value = !1;
      }
    }
    function $e(ie) {
      ge.value = ie;
    }
    function qe() {
      return U.value ? U.value.workflows.new.length > 0 || U.value.workflows.modified.length > 0 || U.value.workflows.deleted.length > 0 || U.value.has_changes : !1;
    }
    async function Ye(ie) {
      var Je;
      ge.value = null;
      const B = qe();
      se.value = {
        title: B ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: B ? "You have uncommitted changes that will be lost." : `Checkout commit ${ie.short_hash || ((Je = ie.hash) == null ? void 0 : Je.slice(0, 7))}?`,
        details: B ? Kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: B,
        onConfirm: async () => {
          var xt;
          se.value = null, oe();
          const ot = We(`Checking out ${ie.short_hash || ((xt = ie.hash) == null ? void 0 : xt.slice(0, 7))}...`, "info", 0), wt = await u(ie.hash, B);
          ut(ot), wt.status === "success" ? We("Restarting ComfyUI...", "success") : We(wt.message || "Checkout failed", "error");
        }
      };
    }
    async function ct(ie) {
      const B = qe();
      se.value = {
        title: B ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: B ? "You have uncommitted changes." : `Switch to branch "${ie}"?`,
        details: B ? Kn() : void 0,
        warning: B ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: B ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          se.value = null, oe();
          const Je = We(`Switching to ${ie}...`, "info", 0), ot = await f(ie, B);
          ut(Je), ot.status === "success" ? We("Restarting ComfyUI...", "success") : We(ot.message || "Branch switch failed", "error");
        }
      };
    }
    async function vt() {
      if (!qe()) {
        We("No uncommitted changes to revert", "info");
        return;
      }
      se.value = {
        title: "Revert Uncommitted Changes",
        message: "Discard all uncommitted changes on the current branch?",
        details: Kn(),
        warning: "This permanently discards uncommitted workflow and manifest changes, then restarts ComfyUI from the current HEAD.",
        confirmLabel: "Revert Changes",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          se.value = null, oe();
          const ie = We("Reverting uncommitted changes...", "info", 0), B = await p();
          ut(ie), B.status === "success" ? We("Restarting ComfyUI...", "success") : We(B.message || "Revert failed", "error");
        }
      };
    }
    async function It(ie) {
      const B = We(`Creating branch ${ie}...`, "info", 0), Je = await d(ie);
      ut(B), Je.status === "success" ? (We(`Branch "${ie}" created`, "success"), await Le()) : We(Je.message || "Failed to create branch", "error");
    }
    async function Y(ie, B = !1) {
      const Je = async (ot) => {
        var xt;
        const wt = We(`Deleting branch ${ie}...`, "info", 0);
        try {
          const Vt = await v(ie, ot);
          ut(wt), Vt.status === "success" ? (We(`Branch "${ie}" deleted`, "success"), await Le()) : (xt = Vt.message) != null && xt.includes("not fully merged") ? se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              se.value = null, await Je(!0);
            }
          } : We(Vt.message || "Failed to delete branch", "error");
        } catch (Vt) {
          ut(wt);
          const ys = Vt instanceof Error ? Vt.message : "Failed to delete branch";
          ys.includes("not fully merged") ? se.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ie}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              se.value = null, await Je(!0);
            }
          } : We(ys, "error");
        }
      };
      se.value = {
        title: "Delete Branch",
        message: `Delete branch "${ie}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          se.value = null, await Je(B);
        }
      };
    }
    async function N(ie) {
      ge.value = null;
      const B = prompt("Enter branch name:");
      if (B) {
        const Je = We(`Creating branch ${B}...`, "info", 0), ot = await d(B, ie.hash);
        ut(Je), ot.status === "success" ? (We(`Branch "${B}" created from ${ie.short_hash}`, "success"), await Le()) : We(ot.message || "Failed to create branch", "error");
      }
    }
    function oe() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Ke() {
      if (!Q.value.can_restart_current) {
        We("Restart is not available in this runtime context.", "warning");
        return;
      }
      se.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          se.value = null, oe(), We("Restarting environment...", "info");
          try {
            await Js("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function et() {
      if (!Q.value.can_stop_current) {
        We("Stop is not available in this runtime context.", "warning");
        return;
      }
      se.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          se.value = null, We("Stopping environment...", "info");
          try {
            await Js("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function mt(ie, B) {
      if (!Q.value.can_switch_environment) {
        We("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      ze.value = !1, we.value = ie, Se.value = B || null, le.value = !0;
    }
    async function Ut() {
      le.value = !1, Ee.value = !0, oe(), X.value = {
        progress: 10,
        state: cs(10),
        message: us(10)
      };
      try {
        await g(we.value, Se.value || void 0), gt(), Lt();
      } catch (ie) {
        ds(), Ee.value = !1, We(`Failed to initiate switch: ${ie instanceof Error ? ie.message : "Unknown error"}`, "error"), X.value = { state: "idle", progress: 0, message: "" }, Se.value = null;
      }
    }
    function cs(ie) {
      return ie >= 100 ? "complete" : ie >= 80 ? "validating" : ie >= 60 ? "starting" : ie >= 30 ? "syncing" : "preparing";
    }
    function us(ie) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[cs(ie)] || "";
    }
    function gt() {
      if (pe) return;
      let ie = 10;
      const B = 60, Je = 5e3, ot = 100, wt = (B - ie) / (Je / ot);
      pe = window.setInterval(() => {
        if (ie += wt, ie >= B && (ie = B, ds()), X.value.progress < B) {
          const xt = Math.floor(ie);
          X.value = {
            progress: xt,
            state: cs(xt),
            message: us(xt)
          };
        }
      }, ot);
    }
    function ds() {
      pe && (clearInterval(pe), pe = null);
    }
    function Lt() {
      j || (j = window.setInterval(async () => {
        try {
          let ie = await O.getStatus();
          if ((!ie || ie.state === "idle") && (ie = await k()), !ie)
            return;
          const B = ie.progress || 0;
          B >= 60 && ds();
          const Je = Math.max(B, X.value.progress), ot = ie.state && ie.state !== "idle" && ie.state !== "unknown", wt = ot ? ie.state : cs(Je), xt = ot && ie.message || us(Je);
          X.value = {
            state: wt,
            progress: Je,
            message: xt
          }, ie.state === "complete" ? (ds(), un(), Ee.value = !1, We(`✓ Switched to ${we.value}`, "success"), await Le(), we.value = "") : ie.state === "rolled_back" ? (ds(), un(), Ee.value = !1, We("Switch failed, restored previous environment", "warning"), we.value = "") : ie.state === "critical_failure" && (ds(), un(), Ee.value = !1, We(`Critical error during switch: ${ie.message}`, "error"), we.value = "");
        } catch (ie) {
          console.error("Failed to poll switch progress:", ie);
        }
      }, 1e3));
    }
    function un() {
      ds(), j && (clearInterval(j), j = null);
    }
    function hs() {
      var ie;
      le.value = !1, we.value = "", (ie = re.value) != null && ie.state && re.value.state !== "managed" && (ue.value = re.value.state === "no_workspace" ? 1 : 2, te.value = !0);
    }
    async function Cn(ie) {
      Qe.value = !1, await Le(), We(ie.message, ie.success ? "success" : "error");
    }
    async function ba() {
      Be.value = !1;
      const ie = We("Syncing environment...", "info", 0);
      try {
        const B = await S("skip", !0);
        if (ut(ie), B.status === "success") {
          const Je = [];
          B.nodes_installed.length && Je.push(`${B.nodes_installed.length} installed`), B.nodes_removed.length && Je.push(`${B.nodes_removed.length} removed`);
          const ot = Je.length ? `: ${Je.join(", ")}` : "";
          We(`✓ Environment synced${ot}`, "success"), await Le();
        } else {
          const Je = B.errors.length ? B.errors.join("; ") : B.message;
          We(`Sync failed: ${Je}`, "error");
        }
      } catch (B) {
        ut(ie), We(`Sync error: ${B instanceof Error ? B.message : "Unknown error"}`, "error");
      }
    }
    async function $a(ie) {
      var B;
      try {
        const Je = await C(ie);
        Je.failed.length === 0 ? We(`✓ Repaired ${Je.success} workflow${Je.success === 1 ? "" : "s"}`, "success") : We(`Repaired ${Je.success}, failed: ${Je.failed.length}`, "warning"), await Le();
      } catch (Je) {
        We(`Repair failed: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
      } finally {
        (B = A.value) == null || B.resetRepairingState();
      }
    }
    async function Ro() {
      var B, Je;
      const ie = We("Repairing environment...", "info", 0);
      try {
        const ot = await S("skip", !0);
        if (ut(ie), ot.status === "success") {
          const wt = [];
          ot.nodes_installed.length && wt.push(`${ot.nodes_installed.length} installed`), ot.nodes_removed.length && wt.push(`${ot.nodes_removed.length} removed`);
          const xt = wt.length ? `: ${wt.join(", ")}` : "";
          We(`✓ Environment repaired${xt}`, "success"), (B = A.value) == null || B.closeDetailModal(), await Le();
        } else {
          const wt = ot.errors.length ? ot.errors.join(", ") : ot.message || "Unknown error";
          We(`Repair failed: ${wt}`, "error");
        }
      } catch (ot) {
        ut(ie), We(`Repair error: ${ot instanceof Error ? ot.message : "Unknown error"}`, "error");
      } finally {
        (Je = A.value) == null || Je.resetRepairingEnvironmentState();
      }
    }
    async function Ca(ie, B) {
      We(`Environment '${ie}' created`, "success"), await Le(), T.value && await T.value.loadEnvironments(), B && Q.value.can_switch_environment && await mt(ie);
    }
    async function xa(ie) {
      var B;
      if (!Q.value.can_delete_environment) {
        We("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((B = ce.value) == null ? void 0 : B.name) === ie) {
        We("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      se.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ie}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          se.value = null;
          try {
            const Je = await $(ie);
            Je.status === "success" ? (We(`Environment "${ie}" deleted`, "success"), await Le(), T.value && await T.value.loadEnvironments()) : We(Je.message || "Failed to delete environment", "error");
          } catch (Je) {
            We(`Error deleting environment: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function Sa(ie, B) {
      te.value = !1;
      try {
        re.value = await I();
      } catch {
      }
      Q.value.can_switch_environment && await mt(ie, B);
    }
    function Ia() {
      te.value = !1, a("close");
    }
    async function Ea(ie, B) {
      await mt(ie, B);
    }
    async function Ta(ie) {
      J.value = !1, await Le(), await mt(ie);
    }
    function Ma() {
      de.value = null, J.value = !0;
    }
    function Pa(ie) {
      de.value = ie, ve.value = !0;
    }
    function Do() {
      ve.value = !1, de.value = null;
    }
    async function Ra(ie) {
      re.value = await I(), console.log(`Environment '${ie}' created. Available for switching.`);
    }
    function Da() {
      if (!Q.value.can_create_environment) {
        We("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Ue("environments", "workspace"), setTimeout(() => {
        var ie;
        (ie = T.value) == null || ie.openCreateModal();
      }, 100);
    }
    function Kn() {
      if (!U.value) return [];
      const ie = [], B = U.value.workflows;
      return B.new.length && ie.push(`${B.new.length} new workflow(s)`), B.modified.length && ie.push(`${B.modified.length} modified workflow(s)`), B.deleted.length && ie.push(`${B.deleted.length} deleted workflow(s)`), U.value.has_changes && ie.length === 0 && ie.push("manifest or environment metadata changes"), ie;
    }
    return dt(async () => {
      try {
        if (re.value = await I(), re.value.state === "no_workspace" && Q.value.can_initialize_workspace) {
          te.value = !0, ue.value = 1;
          return;
        }
        if (re.value.state === "empty_workspace" && Q.value.can_create_environment) {
          te.value = !0, ue.value = 2;
          return;
        }
        if (re.value.state === "unmanaged" && Q.value.can_switch_environment) {
          te.value = !0, ue.value = 2;
          return;
        }
      } catch (ie) {
        console.warn("Setup status check failed, proceeding normally:", ie);
      }
      await Promise.all([
        Le({ refreshWorkflows: !1 }),
        qt()
      ]);
    }), (ie, B) => {
      var Je, ot, wt, xt, Vt, ys, Jn, z, xe, Ge, _t, Ot, Ps;
      return o(), i("div", LM, [
        s("div", UM, [
          s("div", OM, [
            B[27] || (B[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            U.value ? (o(), i("div", AM)) : y("", !0)
          ]),
          s("div", zM, [
            b(Dc),
            B[30] || (B[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Fe(["icon-btn", { spinning: ae.value }]),
              onClick: Le,
              title: "Refresh"
            }, [...B[28] || (B[28] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            s("button", {
              class: "icon-btn",
              onClick: B[0] || (B[0] = (tt) => a("close")),
              title: "Close"
            }, [...B[29] || (B[29] = [
              s("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        he.value && Ne.value ? (o(), R(PM, {
          key: 0,
          info: Ne.value,
          updating: De.value,
          onUpdate: H,
          onDismiss: Kt,
          onReleaseNotes: ss
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", FM, [
          s("div", VM, [
            B[31] || (B[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", BM, [
              Q.value.can_restart_current ? (o(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Ke
              }, " Restart ")) : y("", !0),
              Q.value.can_stop_current ? (o(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: et
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: B[1] || (B[1] = (tt) => Ue("environments", "workspace"))
          }, [
            U.value ? (o(), i("div", WM, [
              s("span", null, m(((Je = ce.value) == null ? void 0 : Je.name) || ((ot = U.value) == null ? void 0 : ot.environment) || "Loading..."), 1),
              s("span", GM, "(" + m(U.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            B[32] || (B[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", jM, [
          s("div", HM, [
            s("div", qM, [
              s("div", KM, [
                B[33] || (B[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "status" && Ze.value === "this-env" }]),
                  onClick: B[2] || (B[2] = (tt) => Ue("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "workflows" }]),
                  onClick: B[3] || (B[3] = (tt) => Ue("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "models-env" }]),
                  onClick: B[4] || (B[4] = (tt) => Ue("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "nodes" }]),
                  onClick: B[5] || (B[5] = (tt) => Ue("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "version-control" }]),
                  onClick: B[6] || (B[6] = (tt) => Xe("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              B[36] || (B[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", JM, [
                B[34] || (B[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "environments" }]),
                  onClick: B[7] || (B[7] = (tt) => Ue("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "model-index" }]),
                  onClick: B[8] || (B[8] = (tt) => Ue("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "settings" }]),
                  onClick: B[9] || (B[9] = (tt) => Ue("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              B[37] || (B[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", QM, [
                B[35] || (B[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "diagnostics" && G.value === "manifest" }]),
                  onClick: B[10] || (B[10] = (tt) => yt("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Fe(["sidebar-item", { active: Te.value === "diagnostics" && G.value !== "manifest" }]),
                  onClick: B[11] || (B[11] = (tt) => yt("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", YM, [
              b(Nc)
            ])
          ]),
          s("div", XM, [
            Pe.value ? (o(), i("div", ZM, m(Pe.value), 1)) : !U.value && Te.value === "status" ? (o(), i("div", eP, " Loading status... ")) : (o(), i(V, { key: 2 }, [
              Te.value === "status" ? (o(), R(Kh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: A,
                status: U.value,
                "setup-state": me.value,
                onSwitchBranch: Nt,
                onCommitChanges: B[12] || (B[12] = (tt) => Qe.value = !0),
                onSyncEnvironment: B[13] || (B[13] = (tt) => Be.value = !0),
                onViewWorkflows: B[14] || (B[14] = (tt) => Ue("workflows", "this-env")),
                onViewHistory: B[15] || (B[15] = (tt) => Xe("history")),
                onViewDebug: B[16] || (B[16] = (tt) => yt("env")),
                onViewNodes: B[17] || (B[17] = (tt) => Ue("nodes", "this-env")),
                onRepairMissingModels: $a,
                onRepairEnvironment: Ro,
                onStartSetup: B[18] || (B[18] = (tt) => te.value = !0),
                onViewEnvironments: B[19] || (B[19] = (tt) => Ue("environments", "workspace")),
                onCreateEnvironment: Da
              }, null, 8, ["status", "setup-state"])) : Te.value === "workflows" ? (o(), R(_2, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: ke,
                onRefresh: Le
              }, null, 512)) : Te.value === "models-env" ? (o(), R(S$, {
                key: 2,
                onNavigate: Ae
              })) : Te.value === "version-control" ? (o(), R(M6, {
                key: 3,
                commits: F.value,
                "current-ref": (wt = U.value) == null ? void 0 : wt.branch,
                branches: D.value,
                current: ((xt = U.value) == null ? void 0 : xt.branch) || null,
                "initial-tab": K.value,
                onSelect: $e,
                onCheckout: Ye,
                onSwitch: ct,
                onCreate: It,
                onDelete: Y,
                onRevertCurrent: vt,
                onToast: ts
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : Te.value === "nodes" ? (o(), R(yC, {
                key: 4,
                "version-mismatches": ((ys = (Vt = U.value) == null ? void 0 : Vt.comparison) == null ? void 0 : ys.version_mismatches) || [],
                onOpenNodeManager: es,
                onRepairEnvironment: Ro,
                onToast: ts
              }, null, 8, ["version-mismatches"])) : Te.value === "diagnostics" ? (o(), R(G6, {
                key: 5,
                "initial-tab": G.value
              }, null, 8, ["initial-tab"])) : Te.value === "environments" ? (o(), R(h3, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: T,
                "can-create": Q.value.can_create_environment,
                "can-switch": Q.value.can_switch_environment,
                "can-delete": Q.value.can_delete_environment,
                onSwitch: mt,
                onCreated: Ca,
                onDelete: xa,
                onImport: Ma,
                onExport: Pa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : Te.value === "model-index" ? (o(), R(O$, {
                key: 7,
                onRefresh: Le
              })) : Te.value === "settings" ? (o(), R(jC, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        ge.value ? (o(), R(rE, {
          key: 1,
          commit: ge.value,
          onClose: B[20] || (B[20] = (tt) => ge.value = null),
          onCheckout: Ye,
          onCreateBranch: N
        }, null, 8, ["commit"])) : y("", !0),
        se.value ? (o(), R(Nl, {
          key: 2,
          title: se.value.title,
          message: se.value.message,
          details: se.value.details,
          warning: se.value.warning,
          confirmLabel: se.value.confirmLabel,
          cancelLabel: se.value.cancelLabel,
          secondaryLabel: se.value.secondaryLabel,
          secondaryAction: se.value.secondaryAction,
          destructive: se.value.destructive,
          onConfirm: se.value.onConfirm,
          onCancel: B[21] || (B[21] = (tt) => se.value = null),
          onSecondary: se.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        J.value ? (o(), R(Mt, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: B[22] || (B[22] = (tt) => J.value = !1)
        }, {
          body: h(() => [
            b(s8, {
              embedded: "",
              onImportCompleteSwitch: Ta
            })
          ]),
          _: 1
        })) : y("", !0),
        ve.value ? (o(), R(Mt, {
          key: 4,
          title: de.value ? `EXPORT ENVIRONMENT: ${de.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: Do
        }, {
          body: h(() => [
            b(iS, {
              embedded: "",
              "environment-name": de.value,
              onClose: Do
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(YE, {
          show: le.value,
          "from-environment": ((Jn = ce.value) == null ? void 0 : Jn.name) || "unknown",
          "to-environment": we.value,
          onConfirm: Ut,
          onClose: hs
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Qe.value && U.value ? (o(), R(Rc, {
          key: 5,
          status: U.value,
          "as-modal": !0,
          onClose: B[23] || (B[23] = (tt) => Qe.value = !1),
          onCommitted: Cn
        }, null, 8, ["status"])) : y("", !0),
        Be.value && U.value ? (o(), R(hT, {
          key: 6,
          show: Be.value,
          "mismatch-details": {
            missing_nodes: U.value.comparison.missing_nodes,
            extra_nodes: U.value.comparison.extra_nodes
          },
          onConfirm: ba,
          onClose: B[24] || (B[24] = (tt) => Be.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(rT, {
          show: Ee.value,
          state: X.value.state,
          progress: X.value.progress,
          message: X.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ze.value ? (o(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: B[26] || (B[26] = bt((tt) => ze.value = !1, ["self"]))
        }, [
          s("div", tP, [
            s("div", sP, [
              B[39] || (B[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: B[25] || (B[25] = (tt) => ze.value = !1)
              }, [...B[38] || (B[38] = [
                s("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  s("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            s("div", nP, [
              B[40] || (B[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", oP, [
                (o(!0), i(V, null, ye(W.value, (tt) => (o(), i("div", {
                  key: tt.name,
                  class: Fe(["env-item", { current: tt.is_current }])
                }, [
                  s("div", aP, [
                    s("div", lP, [
                      s("span", iP, m(tt.is_current ? "●" : "○"), 1),
                      s("span", rP, m(tt.name), 1),
                      tt.current_branch ? (o(), i("span", cP, "(" + m(tt.current_branch) + ")", 1)) : y("", !0),
                      tt.is_current ? (o(), i("span", uP, "CURRENT")) : y("", !0)
                    ]),
                    s("div", dP, m(tt.workflow_count) + " workflows • " + m(tt.node_count) + " nodes ", 1)
                  ]),
                  !tt.is_current && Q.value.can_switch_environment ? (o(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ns) => mt(tt.name)
                  }, " SWITCH ", 8, mP)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        te.value ? (o(), R(kM, {
          key: 8,
          "default-path": ((z = re.value) == null ? void 0 : z.default_path) || "~/comfygit",
          "detected-models-dir": ((xe = re.value) == null ? void 0 : xe.detected_models_dir) || null,
          "initial-step": ue.value,
          "existing-environments": ((Ge = re.value) == null ? void 0 : Ge.environments) || [],
          "cli-installed": ((_t = re.value) == null ? void 0 : _t.cli_installed) ?? !0,
          "setup-state": ((Ot = re.value) == null ? void 0 : Ot.state) || "no_workspace",
          "workspace-path": ((Ps = re.value) == null ? void 0 : Ps.workspace_path) || null,
          onComplete: Sa,
          onClose: Ia,
          onSwitchEnvironment: Ea,
          onEnvironmentCreatedNoSwitch: Ra
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", fP, [
          b(dm, { name: "toast" }, {
            default: h(() => [
              (o(!0), i(V, null, ye(at.value, (tt) => (o(), i("div", {
                key: tt.id,
                class: Fe(["toast", tt.type])
              }, [
                s("span", vP, m(tt.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), gP = /* @__PURE__ */ Me(pP, [["__scopeId", "data-v-defff290"]]), hP = { class: "item-header" }, yP = { class: "item-info" }, wP = { class: "filename" }, _P = { class: "metadata" }, kP = { class: "size" }, bP = {
  key: 0,
  class: "type"
}, $P = { class: "item-actions" }, CP = {
  key: 0,
  class: "progress-section"
}, xP = { class: "progress-bar" }, SP = { class: "progress-stats" }, IP = { class: "downloaded" }, EP = { class: "speed" }, TP = {
  key: 0,
  class: "eta"
}, MP = {
  key: 1,
  class: "status-msg paused"
}, PP = {
  key: 2,
  class: "status-msg queued"
}, RP = {
  key: 3,
  class: "status-msg completed"
}, DP = {
  key: 4,
  class: "status-msg failed"
}, NP = {
  key: 0,
  class: "retries"
}, LP = /* @__PURE__ */ Ie({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const n = t;
    function a(c) {
      if (c === 0) return "?";
      const u = c / (1024 * 1024 * 1024);
      return u >= 1 ? `${u.toFixed(2)} GB` : `${(c / (1024 * 1024)).toFixed(1)} MB`;
    }
    function l(c) {
      return c === 0 ? "-" : `${(c / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    function r(c) {
      if (c < 60) return `${Math.round(c)}s`;
      const u = Math.floor(c / 60);
      return u < 60 ? `${u}m` : `${Math.floor(u / 60)}h ${u % 60}m`;
    }
    return (c, u) => (o(), i("div", {
      class: Fe(["download-item", `status-${e.item.status}`])
    }, [
      s("div", hP, [
        s("div", yP, [
          s("div", wP, m(e.item.filename), 1),
          s("div", _P, [
            s("span", kP, m(a(e.item.size)), 1),
            e.item.type ? (o(), i("span", bP, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", $P, [
          e.item.status === "queued" || e.item.status === "downloading" ? (o(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => n("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (o(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => n("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (o(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => n("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (o(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => n("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (o(), i("div", CP, [
        s("div", xP, [
          s("div", {
            class: "progress-fill",
            style: Ft({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", SP, [
          s("span", IP, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", EP, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (o(), i("span", TP, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (o(), i("div", MP, " Paused - click Resume to download ")) : e.item.status === "queued" ? (o(), i("div", PP, " Waiting in queue... ")) : e.item.status === "completed" ? (o(), i("div", RP, " ✓ Downloaded ")) : e.item.status === "failed" ? (o(), i("div", DP, [
        x(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (o(), i("span", NP, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Zn = /* @__PURE__ */ Me(LP, [["__scopeId", "data-v-2110df65"]]), UP = { class: "queue-title" }, OP = { class: "count" }, AP = { class: "queue-actions" }, zP = { class: "action-label" }, FP = {
  key: 0,
  class: "overall-progress"
}, VP = { class: "progress-bar" }, BP = {
  key: 0,
  class: "current-mini"
}, WP = { class: "filename" }, GP = { class: "speed" }, jP = {
  key: 1,
  class: "queue-content"
}, HP = {
  key: 0,
  class: "section"
}, qP = {
  key: 1,
  class: "section"
}, KP = { class: "section-header" }, JP = { class: "section-label paused" }, QP = { class: "items-list" }, YP = {
  key: 2,
  class: "section"
}, XP = { class: "section-header" }, ZP = { class: "section-label" }, eR = { class: "items-list" }, tR = {
  key: 3,
  class: "section"
}, sR = { class: "section-header" }, nR = { class: "section-label" }, oR = { class: "items-list" }, aR = {
  key: 4,
  class: "section"
}, lR = { class: "section-header" }, iR = { class: "section-label failed" }, rR = { class: "items-list" }, cR = /* @__PURE__ */ Ie({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: n,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: f,
      retryDownload: p,
      resumeDownload: v,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: k
    } = qn(), $ = _(!1);
    let S = null;
    $t(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (P, O) => {
        S && (clearTimeout(S), S = null);
        const U = P.active === 0 && P.failed === 0 && P.paused === 0 && P.completed > 0, F = O && (O.active > 0 || O.paused > 0);
        U && F && (S = setTimeout(() => {
          k(), S = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = M(() => {
      var U;
      if (t.items.length === 0) return 0;
      const P = l.value.length, O = ((U = n.value) == null ? void 0 : U.progress) || 0;
      return Math.round((P + O / 100) / t.items.length * 100);
    });
    function I(P) {
      f(P);
    }
    function E(P) {
      return P === 0 ? "..." : `${(P / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (P, O) => (o(), R(rs, { to: "body" }, [
      it(u) ? (o(), i("div", {
        key: 0,
        class: Fe(["model-download-queue", { minimized: !$.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: O[0] || (O[0] = (U) => $.value = !$.value)
        }, [
          s("div", UP, [
            O[4] || (O[4] = s("span", { class: "icon" }, "↓", -1)),
            O[5] || (O[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", OP, "(" + m(it(d)) + "/" + m(it(t).items.length) + ")", 1)
          ]),
          s("div", AP, [
            s("span", zP, m($.value ? "minimize" : "expand"), 1)
          ])
        ]),
        $.value ? (o(), i("div", jP, [
          it(n) ? (o(), i("div", HP, [
            O[6] || (O[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Zn, {
              item: it(n),
              onCancel: O[1] || (O[1] = (U) => I(it(n).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          it(c).length > 0 ? (o(), i("div", qP, [
            s("div", KP, [
              s("span", JP, "Paused (" + m(it(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: O[2] || (O[2] = //@ts-ignore
                (...U) => it(w) && it(w)(...U))
              }, "Resume All")
            ]),
            s("div", QP, [
              (o(!0), i(V, null, ye(it(c), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onResume: (F) => it(v)(U.id),
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(a).length > 0 ? (o(), i("div", YP, [
            s("div", XP, [
              s("span", ZP, "Queued (" + m(it(a).length) + ")", 1)
            ]),
            s("div", eR, [
              (o(!0), i(V, null, ye(it(a), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onCancel: (F) => I(U.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          it(l).length > 0 ? (o(), i("div", tR, [
            s("div", sR, [
              s("span", nR, "Completed (" + m(it(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: O[3] || (O[3] = //@ts-ignore
                (...U) => it(k) && it(k)(...U))
              }, "Clear")
            ]),
            s("div", oR, [
              (o(!0), i(V, null, ye(it(l).slice(0, 3), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          it(r).length > 0 ? (o(), i("div", aR, [
            s("div", lR, [
              s("span", iR, "Failed (" + m(it(r).length) + ")", 1)
            ]),
            s("div", rR, [
              (o(!0), i(V, null, ye(it(r), (U) => (o(), R(Zn, {
                key: U.id,
                item: U,
                onRetry: (F) => it(p)(U.id),
                onRemove: (F) => it(g)(U.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (o(), i("div", FP, [
          s("div", VP, [
            s("div", {
              class: "progress-fill",
              style: Ft({ width: `${C.value}%` })
            }, null, 4)
          ]),
          it(n) ? (o(), i("div", BP, [
            s("span", WP, m(it(n).filename), 1),
            s("span", GP, m(E(it(n).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), uR = /* @__PURE__ */ Me(cR, [["__scopeId", "data-v-3a3c9607"]]), dR = { class: "detail-header" }, mR = { class: "item-count" }, fR = { class: "resource-list" }, vR = { class: "item-info" }, pR = { class: "item-name" }, gR = {
  key: 0,
  class: "item-subtitle"
}, hR = {
  key: 0,
  class: "installing-badge"
}, yR = ["title"], wR = {
  key: 2,
  class: "installed-badge"
}, _R = {
  key: 3,
  class: "queued-badge"
}, kR = {
  key: 4,
  class: "action-buttons"
}, bR = {
  key: 1,
  class: "no-action"
}, $R = /* @__PURE__ */ Ie({
  __name: "MissingResourcesDetailModal",
  props: {
    title: {},
    items: {},
    itemType: {},
    queuedItems: {},
    installedItems: {},
    failedItems: {},
    installingItem: {}
  },
  emits: ["close", "action", "bulk-action"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = M(() => n.items.filter((g) => g.canAction)), r = M(() => l.value.length > 0 && l.value.every(
      (g) => {
        var k, $;
        return n.queuedItems.has(g.id) || ((k = n.installedItems) == null ? void 0 : k.has(g.id)) || (($ = n.failedItems) == null ? void 0 : $.has(g.id));
      }
    )), c = M(() => r.value ? "All Queued" : n.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return n.queuedItems.has(g.id);
    }
    function d(g) {
      return n.installingItem === g.id;
    }
    function f(g) {
      var k;
      return ((k = n.installedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function p(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.has(g.id)) ?? !1;
    }
    function v(g) {
      var k;
      return ((k = n.failedItems) == null ? void 0 : k.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: n.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, k) => (o(), R(Mt, {
      title: e.title,
      size: "md",
      onClose: k[2] || (k[2] = ($) => a("close"))
    }, {
      body: h(() => [
        s("div", dR, [
          s("span", mR, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (o(), R(Oe, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: k[0] || (k[0] = ($) => a("bulk-action"))
          }, {
            default: h(() => [
              x(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", fR, [
          (o(!0), i(V, null, ye(e.items, ($) => (o(), i("div", {
            key: $.id,
            class: "resource-item"
          }, [
            s("div", vR, [
              s("span", pR, m($.name), 1),
              $.subtitle ? (o(), i("span", gR, m($.subtitle), 1)) : y("", !0)
            ]),
            $.canAction ? (o(), i(V, { key: 0 }, [
              d($) ? (o(), i("span", hR, "Installing...")) : p($) ? (o(), i("span", {
                key: 1,
                class: "failed-badge",
                title: v($)
              }, "Failed ⚠", 8, yR)) : f($) ? (o(), i("span", wR, "Installed")) : u($) ? (o(), i("span", _R, "Queued")) : (o(), i("div", kR, [
                (o(!0), i(V, null, ye(w($), (S) => (o(), R(Oe, {
                  key: `${$.id}-${S.key}`,
                  size: "sm",
                  variant: S.variant || "secondary",
                  onClick: (C) => a("action", $, S.key)
                }, {
                  default: h(() => [
                    x(m(S.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (o(), i("span", bR, m($.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Oe, {
          variant: "secondary",
          onClick: k[1] || (k[1] = ($) => a("close"))
        }, {
          default: h(() => [...k[3] || (k[3] = [
            x("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), CR = /* @__PURE__ */ Me($R, [["__scopeId", "data-v-ec7e9202"]]), xR = {
  key: 0,
  class: "loading-state"
}, SR = {
  key: 1,
  class: "analysis-results"
}, IR = {
  key: 0,
  class: "section"
}, ER = { class: "section-header" }, TR = { class: "section-title" }, MR = { class: "item-list" }, PR = { class: "package-info" }, RR = { class: "package-name" }, DR = { class: "node-count" }, NR = {
  key: 1,
  class: "installing-badge"
}, LR = {
  key: 2,
  class: "queued-badge"
}, UR = ["title"], OR = {
  key: 5,
  class: "installed-badge"
}, AR = {
  key: 1,
  class: "section"
}, zR = { class: "section-header" }, FR = { class: "section-title" }, VR = { class: "item-list" }, BR = { class: "node-type" }, WR = {
  key: 0,
  class: "overflow-note"
}, GR = {
  key: 2,
  class: "section"
}, jR = { class: "section-header" }, HR = { class: "section-title" }, qR = { class: "item-list" }, KR = { class: "node-type" }, JR = { class: "not-found" }, QR = {
  key: 0,
  class: "overflow-note"
}, YR = {
  key: 3,
  class: "section"
}, XR = { class: "section-header" }, ZR = { class: "section-title" }, e7 = { class: "item-list" }, t7 = { class: "package-info community-info" }, s7 = { class: "community-title-row" }, n7 = { class: "package-name" }, o7 = { class: "node-count" }, a7 = { class: "community-mapping-note" }, l7 = { key: 0 }, i7 = {
  key: 0,
  class: "community-actions"
}, r7 = {
  key: 1,
  class: "installing-badge"
}, c7 = {
  key: 2,
  class: "queued-badge"
}, u7 = ["title"], d7 = {
  key: 5,
  class: "installed-badge"
}, m7 = ["title"], f7 = {
  key: 1,
  class: "no-url"
}, v7 = {
  key: 4,
  class: "section"
}, p7 = { class: "section-header" }, g7 = { class: "section-title" }, h7 = { class: "item-list" }, y7 = { class: "model-info" }, w7 = { class: "model-name" }, _7 = {
  key: 1,
  class: "queued-badge"
}, k7 = {
  key: 1,
  class: "no-url"
}, b7 = { class: "dont-show-again" }, $7 = 3e4, C7 = /* @__PURE__ */ Ie({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = _(!1), n = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), d = _(/* @__PURE__ */ new Map()), f = _(/* @__PURE__ */ new Set()), p = _(!1), v = _(null), w = _(0), g = _(null), k = _(!1), $ = _(!1), S = _(!1), C = _(null), I = _(null), E = _(null), P = _(/* @__PURE__ */ new Set()), O = _(/* @__PURE__ */ new Map()), U = _(/* @__PURE__ */ new Map()), { addToQueue: F } = qn(), {
      queueNodeInstall: D,
      previewNodeDependencyChanges: W,
      applyReviewedNodeDependencyChanges: ce
    } = ft(), de = M(() => {
      var H;
      return ((H = a.value) == null ? void 0 : H.package_aliases) || {};
    });
    function J(H) {
      if (!H) return null;
      const fe = de.value;
      let Le = H;
      const $e = /* @__PURE__ */ new Set();
      for (; fe[Le] && !$e.has(Le); )
        $e.add(Le), Le = fe[Le];
      return Le;
    }
    function ve(H, fe) {
      return H instanceof Error && H.message ? H.message : typeof H == "string" && H.trim().length > 0 ? H : fe;
    }
    function K(H) {
      for (const [fe, Le] of O.value.entries())
        Le === H && O.value.delete(fe);
    }
    function L(H, fe, Le) {
      var $e, qe;
      u.value.delete(H), c.value.delete(H), d.value.set(H, fe), console.warn("[ComfyGit] Package requires dependency review:", {
        packageId: H,
        reason: (($e = Le == null ? void 0 : Le.dependency_review) == null ? void 0 : $e.reason) || ((qe = Le == null ? void 0 : Le.messages) == null ? void 0 : qe[0])
      });
    }
    async function G(H) {
      const fe = d.value.get(H);
      if (!(!fe || Pe.value)) {
        k.value = !0, $.value = !0, S.value = !1, C.value = null, I.value = null, E.value = H;
        try {
          const Le = await W(fe);
          I.value = Le.preview, Le.preview.success || (C.value = Le.preview.error || "Unable to generate dependency preview");
        } catch (Le) {
          C.value = ve(Le, "Unable to generate dependency preview");
        } finally {
          $.value = !1;
        }
      }
    }
    async function re() {
      const H = E.value, fe = I.value, Le = H ? d.value.get(H) : null;
      if (!(!H || !fe || !Le || S.value)) {
        S.value = !0, C.value = null;
        try {
          const $e = await ce({
            ...Le,
            accepted_preview: {
              baseline_fingerprint: fe.baseline_fingerprint,
              diff_fingerprint: fe.diff_fingerprint,
              proposed_fingerprint: fe.proposed_fingerprint
            }
          });
          if ($e.status !== "success")
            throw new Error($e.error || $e.message || "Unable to apply dependency changes");
          d.value.delete(H), u.value.delete(H), c.value.delete(H), r.value.add(H), w.value++, window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
            detail: { count: 1 }
          })), te();
        } catch ($e) {
          C.value = ve($e, "Unable to apply dependency changes");
        } finally {
          S.value = !1;
        }
      }
    }
    function te() {
      k.value = !1, $.value = !1, S.value = !1, C.value = null, I.value = null, E.value = null;
    }
    function ue(H) {
      if (!U.value.has(H)) return;
      const fe = U.value.get(H);
      clearTimeout(fe), U.value.delete(H);
    }
    function me() {
      for (const H of U.value.values())
        clearTimeout(H);
      U.value = /* @__PURE__ */ new Map();
    }
    function q(H) {
      ue(H);
      const fe = setTimeout(() => {
        if (U.value.delete(H), !c.value.has(H)) return;
        K(H), c.value.delete(H), v.value === H && (v.value = null), u.value.set(H, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", H);
      }, $7);
      U.value.set(H, fe);
    }
    function Q(H) {
      const fe = `Cannot install "${H.title}" - package_id is missing`;
      u.value.set(H.item_id, fe), n.value = fe, console.warn("[ComfyGit] Community install requested without package_id:", H);
    }
    const ae = M(() => ge.value.length > 0 || Ne.value.length > 0 || _e.value.length > 0 || De.value.length > 0 || we.value.length > 0), Pe = M(() => O.value.size > 0 || c.value.size > 0 || !!v.value), ge = M(() => {
      var Le, $e;
      if (!((Le = a.value) != null && Le.nodes)) return [];
      const H = /* @__PURE__ */ new Map(), fe = (a.value.nodes.resolved || []).filter((qe) => {
        var Ye;
        return !qe.is_installed && ((Ye = qe.package) == null ? void 0 : Ye.package_id);
      });
      for (const qe of fe) {
        const Ye = J(qe.package.package_id);
        if (!Ye) continue;
        H.has(Ye) || H.set(Ye, {
          package_id: Ye,
          title: qe.package.title || Ye,
          node_count: 0,
          node_types: [],
          repository: qe.package.repository || null,
          latest_version: qe.package.latest_version || null
        });
        const ct = H.get(Ye);
        ct.node_count++, ct.node_types.push((($e = qe.reference) == null ? void 0 : $e.node_type) || qe.node_type);
      }
      return Array.from(H.values());
    }), ze = M(() => ge.value.reduce((H, fe) => H + fe.node_count, 0)), Ne = M(() => {
      var H;
      return (H = a.value) != null && H.nodes ? (a.value.nodes.unresolved || []).map((fe) => {
        var Le;
        return {
          node_type: ((Le = fe.reference) == null ? void 0 : Le.node_type) || fe.node_type
        };
      }) : [];
    }), _e = M(() => {
      var fe;
      if (!((fe = a.value) != null && fe.nodes)) return [];
      const H = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((Le) => {
        var qe;
        const $e = ((qe = Le.reference) == null ? void 0 : qe.node_type) || Le.node_type;
        return {
          node_type: $e,
          guidance: Le.guidance || H[$e] || null
        };
      });
    }), De = M(() => {
      var Le, $e, qe, Ye, ct, vt, It, Y;
      if (!((Le = a.value) != null && Le.nodes)) return [];
      const H = a.value.node_guidance || {}, fe = /* @__PURE__ */ new Map();
      for (const N of a.value.nodes.uninstallable || []) {
        const oe = (($e = N.reference) == null ? void 0 : $e.node_type) || N.node_type, Ke = J(((qe = N.package) == null ? void 0 : qe.package_id) || null), et = Ke || `node:${oe}`;
        fe.has(et) || fe.set(et, {
          item_id: et,
          node_type: oe,
          title: ((Ye = N.package) == null ? void 0 : Ye.title) || Ke || oe,
          node_count: 0,
          package_id: Ke,
          repository: ((ct = N.package) == null ? void 0 : ct.repository) || null,
          latest_version: ((vt = N.package) == null ? void 0 : vt.latest_version) || null,
          guidance: N.guidance || H[oe] || null
        });
        const mt = fe.get(et);
        mt.node_count++, mt.guidance || (mt.guidance = N.guidance || H[oe] || null), !mt.repository && ((It = N.package) != null && It.repository) && (mt.repository = N.package.repository), !mt.latest_version && ((Y = N.package) != null && Y.latest_version) && (mt.latest_version = N.package.latest_version);
      }
      return Array.from(fe.values());
    }), he = M(() => De.value.filter((H) => !!Ee(H))), ke = M(() => De.value.length >= 5 ? De.value.slice(0, 4) : De.value), T = M(() => he.value.length > 0 && he.value.every((H) => {
      const fe = H.package_id;
      return r.value.has(fe) || c.value.has(fe) || u.value.has(fe) || d.value.has(fe);
    }));
    function A(H) {
      const fe = [];
      return le(H) && fe.push({ key: "install_registry", label: "Install from Registry", variant: "secondary" }), H.repository && fe.push({
        key: "install_git",
        label: "Install via Git",
        variant: le(H) ? "ghost" : "secondary"
      }), fe;
    }
    function le(H) {
      return !!H.latest_version;
    }
    function Ee(H) {
      return H.package_id ? le(H) ? "registry" : H.repository ? "git" : null : null;
    }
    const we = M(() => {
      var qe;
      if (!((qe = a.value) != null && qe.models)) return [];
      const H = (a.value.models.resolved || []).filter(
        (Ye) => Ye.match_type === "download_intent" || Ye.match_type === "property_download_intent" || Ye.match_type === "not_found"
      ).map((Ye) => {
        var ct, vt, It, Y;
        return {
          filename: ((vt = (ct = Ye.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : vt.split("/").pop()) || ((It = Ye.reference) == null ? void 0 : It.widget_value) || Ye.widget_value,
          widget_value: ((Y = Ye.reference) == null ? void 0 : Y.widget_value) || Ye.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: Ye.download_source || null,
          targetPath: Ye.target_path || null,
          canDownload: !!(Ye.download_source && Ye.target_path)
        };
      }), fe = (a.value.models.unresolved || []).map((Ye) => {
        var ct, vt, It, Y;
        return {
          filename: ((vt = (ct = Ye.reference) == null ? void 0 : ct.widget_value) == null ? void 0 : vt.split("/").pop()) || ((It = Ye.reference) == null ? void 0 : It.widget_value) || Ye.widget_value,
          widget_value: ((Y = Ye.reference) == null ? void 0 : Y.widget_value) || Ye.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), Le = /* @__PURE__ */ new Map(), $e = [];
      for (const Ye of H) {
        if (!Ye.url) {
          $e.push(Ye);
          continue;
        }
        const ct = `${Ye.filename}::${Ye.url}`, vt = Le.get(ct);
        if (!vt) {
          Le.set(ct, Ye);
          continue;
        }
        !vt.targetPath && Ye.targetPath && (vt.targetPath = Ye.targetPath), !vt.canDownload && Ye.canDownload && (vt.canDownload = Ye.canDownload);
      }
      return [...Le.values(), ...$e, ...fe];
    }), Se = M(() => we.value.filter((H) => H.canDownload)), X = M(() => ge.value.length >= 5 ? ge.value.slice(0, 4) : ge.value), j = M(() => we.value.length >= 5 ? we.value.slice(0, 4) : we.value), pe = M(() => ge.value.length > 0 && ge.value.every(
      (H) => r.value.has(H.package_id) || c.value.has(H.package_id) || u.value.has(H.package_id) || d.value.has(H.package_id)
    )), be = M(() => Se.value.length > 0 && Se.value.every((H) => f.value.has(H.url))), je = M(() => ge.value.length > 0 || he.value.length > 0 || Se.value.length > 0), Ve = M(() => {
      const H = (ge.value.length === 0 || pe.value) && (he.value.length === 0 || T.value), fe = Se.value.length === 0 || be.value;
      return H && fe;
    }), Ce = M(() => g.value === "models" ? `Missing Models (${we.value.length})` : g.value === "packages" ? `Missing Custom Nodes (${ze.value})` : g.value === "community" ? `Community-Mapped Packages (${De.value.length})` : ""), ne = M(() => g.value === "models" ? we.value.map((H) => ({
      id: H.url || H.widget_value,
      name: H.filename,
      canAction: H.canDownload,
      actionDisabledReason: H.canDownload ? void 0 : "Manual download required"
    })) : g.value === "packages" ? ge.value.map((H) => ({
      id: H.package_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : g.value === "community" ? De.value.map((H) => ({
      id: H.package_id || H.item_id,
      name: H.title,
      subtitle: `(${H.node_count} ${H.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!Ee(H),
      actionDisabledReason: Ee(H) ? void 0 : "Manual setup required",
      actions: A(H)
    })) : []);
    function He(H, fe) {
      if (g.value === "models") {
        const Le = we.value.find(($e) => $e.url === H.id || $e.widget_value === H.id);
        Le && Xe(Le);
      } else if (g.value === "packages") {
        const Le = ge.value.find(($e) => $e.package_id === H.id);
        Le && Ze(Le);
      } else if (g.value === "community") {
        const Le = De.value.find((qe) => (qe.package_id || qe.item_id) === H.id);
        if (!Le) return;
        if (!Le.package_id) {
          Q({ item_id: Le.item_id, title: Le.title });
          return;
        }
        const $e = fe === "install_git" ? "git" : "registry";
        if ($e === "registry" && !le(Le)) {
          Q({ item_id: Le.item_id, title: Le.title });
          return;
        }
        Ue(Le, $e);
      }
    }
    function Te() {
      g.value === "models" ? es() : g.value === "packages" ? yt() : g.value === "community" && Nt();
    }
    async function Ze(H) {
      return Ae(H.package_id, H.latest_version, "registry");
    }
    async function Ue(H, fe) {
      return H.package_id ? fe === "registry" && !le(H) ? (u.value.set(H.package_id, "No installable registry version is available. Use Git install if a repository is available."), !1) : fe === "git" && !H.repository ? (u.value.set(H.package_id, "No Git repository is available for this community mapping."), !1) : Ae(H.package_id, H.latest_version, fe, H.repository) : (Q({ item_id: H.item_id, title: H.title }), !1);
    }
    async function Ae(H, fe, Le, $e) {
      const qe = J(H) || H, Ye = fe || "latest";
      if (r.value.has(qe) || c.value.has(qe) || u.value.has(qe) || d.value.has(qe))
        return !0;
      ss(), v.value = qe;
      let ct = null;
      try {
        const vt = {
          id: qe,
          version: Ye,
          selected_version: Ye,
          mode: "remote",
          channel: "default"
        };
        Le === "git" && $e && (vt.repository = $e, vt.install_source = "git");
        const { ui_id: It, status: Y } = await D(vt, {
          beforeQueueStart: (N) => {
            ct = N, O.value.set(N, qe), c.value.add(qe), q(qe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: N,
              packageId: qe,
              pendingInstalls: Array.from(O.value.entries())
            });
          }
        });
        return (Y == null ? void 0 : Y.status_str) === "dependency_review_required" ? (ct && O.value.delete(ct), K(qe), ue(qe), v.value === qe && (v.value = null), L(qe, vt, Y), !1) : (ct || (ct = It, O.value.set(It, qe), c.value.add(qe), q(qe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: It,
          packageId: qe,
          pendingInstalls: Array.from(O.value.entries())
        })), !0);
      } catch (vt) {
        const It = ve(vt, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", vt), ct && O.value.delete(ct), K(qe), ue(qe), c.value.delete(qe), d.value.delete(qe), u.value.set(qe, It), !1;
      } finally {
        v.value = null;
      }
    }
    function Xe(H) {
      !H.url || !H.targetPath || f.value.has(H.url) || (F([{
        workflow: "unsaved",
        filename: H.filename,
        url: H.url,
        targetPath: H.targetPath
      }]), f.value.add(H.url));
    }
    async function yt() {
      const H = { attempted: 0, failed: 0 };
      for (const fe of ge.value)
        !r.value.has(fe.package_id) && !c.value.has(fe.package_id) && !u.value.has(fe.package_id) && !d.value.has(fe.package_id) && (H.attempted++, await Ze(fe) || H.failed++);
      return H;
    }
    async function Nt() {
      const H = { attempted: 0, failed: 0 };
      for (const fe of he.value) {
        const Le = fe.package_id;
        if (!r.value.has(Le) && !c.value.has(Le) && !u.value.has(Le) && !d.value.has(Le)) {
          H.attempted++;
          const $e = Ee(fe);
          ($e ? await Ue(fe, $e) : !1) || H.failed++;
        }
      }
      return H;
    }
    function es() {
      const H = Se.value.filter(
        (fe) => !f.value.has(fe.url)
      );
      if (H.length === 0) return 0;
      F(H.map((fe) => ({
        workflow: "unsaved",
        filename: fe.filename,
        url: fe.url,
        targetPath: fe.targetPath
      })));
      for (const fe of H)
        f.value.add(fe.url);
      return H.length;
    }
    async function Z() {
      const H = await yt(), fe = await Nt();
      es();
      const Le = H.attempted + fe.attempted, $e = H.failed + fe.failed;
      if (Le > 0 && $e > 0) {
        const qe = Le - $e;
        n.value = `${qe} of ${Le} installs queued, ${$e} failed`;
      }
    }
    function ee() {
      if (Ve.value) {
        Be();
        return;
      }
      Z();
    }
    function se() {
      p.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Qe(H) {
      var qe, Ye;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const fe = H == null ? void 0 : H.id;
      if (fe && P.value.has(fe)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${fe} this session`);
        return;
      }
      const Le = window.app, $e = (qe = Le == null ? void 0 : Le.extensionManager) == null ? void 0 : qe.workflow;
      if ($e) {
        let It = !1;
        for (let Y = 0; Y < 20; Y++) {
          const N = $e.activeWorkflow;
          if (!N) {
            await new Promise((et) => setTimeout(et, 50));
            continue;
          }
          const oe = (Ye = N.activeState) == null ? void 0 : Ye.id;
          if (!(fe && oe === fe)) {
            Y < 19 && await new Promise((et) => setTimeout(et, 50));
            continue;
          }
          if (It = !0, N.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${N.filename}`), fe && P.value.add(fe);
            return;
          }
          break;
        }
        It || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, n.value = null, me(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Map(), f.value = /* @__PURE__ */ new Set(), O.value = /* @__PURE__ */ new Map(), p.value = !1, w.value = 0;
      try {
        const ct = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: H, name: "unsaved" })
        });
        if (!ct.ok) {
          const vt = await ct.json();
          throw new Error(vt.error || "Failed to analyze workflow");
        }
        a.value = await ct.json(), ae.value && (l.value = !0, fe && P.value.add(fe));
      } catch (ct) {
        console.error("[ComfyGit] Failed to analyze workflow:", ct);
      } finally {
        t.value = !1;
      }
    }
    function Be() {
      me(), l.value = !1, a.value = null;
    }
    function at(H) {
      const { workflow: fe } = H.detail;
      fe && Qe(fe);
    }
    function nt(H) {
      var $e;
      const fe = ($e = H.detail) == null ? void 0 : $e.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: fe,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: H.detail
      });
      const Le = O.value.get(fe);
      Le ? (ue(Le), v.value = Le, console.log("[ComfyGit] Installing package:", Le)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", fe);
    }
    function We(H) {
      var qe, Ye, ct, vt, It, Y, N, oe, Ke, et, mt;
      const fe = (qe = H.detail) == null ? void 0 : qe.ui_id, Le = (ct = (Ye = H.detail) == null ? void 0 : Ye.status) == null ? void 0 : ct.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: fe,
        status: Le,
        pendingInstalls: Array.from(O.value.entries()),
        eventDetail: H.detail
      });
      const $e = O.value.get(fe);
      if ($e) {
        if (ue($e), O.value.delete(fe), c.value.delete($e), v.value === $e && (v.value = null), Le === "success")
          r.value.add($e), w.value++, console.log("[ComfyGit] Package installed successfully:", $e);
        else if (Le === "dependency_review_required") {
          const Ut = ((It = (vt = H.detail) == null ? void 0 : vt.task) == null ? void 0 : It.params) || ((Y = H.detail) == null ? void 0 : Y.params);
          Ut != null && Ut.id ? L($e, Ut, (N = H.detail) == null ? void 0 : N.status) : u.value.set($e, "Dependency review required");
        } else {
          const Ut = ((et = (Ke = (oe = H.detail) == null ? void 0 : oe.status) == null ? void 0 : Ke.messages) == null ? void 0 : et[0]) || ((mt = H.detail) == null ? void 0 : mt.result) || "Unknown error";
          u.value.set($e, Ut), console.error("[ComfyGit] Package install failed:", $e, Ut);
        }
        O.value.size === 0 && w.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", w.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: w.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", fe);
    }
    let ut = null;
    function ts() {
      return ut || (ut = Hn()), ut;
    }
    let qt = !1;
    function ss() {
      if (qt) return !0;
      const H = ts();
      return H ? (H.addEventListener("cm-task-started", nt), H.addEventListener("cm-task-completed", We), H.addEventListener("comfygit:workflow-changed", Kt), qt = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Kt(H) {
      const { change_type: fe } = H.detail;
      (fe === "created" || fe === "modified") && l.value && (me(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return dt(() => {
      window.addEventListener("comfygit:workflow-loaded", at);
    }), Gn(() => {
      if (me(), window.removeEventListener("comfygit:workflow-loaded", at), qt) {
        const H = ts();
        H && (H.removeEventListener("cm-task-started", nt), H.removeEventListener("cm-task-completed", We), H.removeEventListener("comfygit:workflow-changed", Kt)), qt = !1;
      }
    }), (H, fe) => {
      var Le;
      return o(), i(V, null, [
        l.value ? (o(), R(Mt, {
          key: 0,
          title: "Missing Dependencies",
          size: "md",
          loading: t.value,
          error: n.value || void 0,
          onClose: Be
        }, {
          body: h(() => [
            t.value ? (o(), i("div", xR, [...fe[5] || (fe[5] = [
              s("div", { class: "loading-spinner" }, null, -1),
              s("span", null, "Analyzing workflow...", -1)
            ])])) : a.value && ae.value ? (o(), i("div", SR, [
              ge.value.length > 0 ? (o(), i("div", IR, [
                s("div", ER, [
                  s("span", TR, "Missing Custom Nodes (" + m(ze.value) + ")", 1),
                  ge.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: pe.value,
                    onClick: yt
                  }, {
                    default: h(() => [
                      x(m(pe.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", MR, [
                  (o(!0), i(V, null, ye(X.value, ($e) => (o(), i("div", {
                    key: $e.package_id,
                    class: "package-item"
                  }, [
                    s("div", PR, [
                      s("span", RR, m($e.title), 1),
                      s("span", DR, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), R(Oe, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      disabled: v.value === $e.package_id,
                      onClick: (qe) => Ze($e)
                    }, {
                      default: h(() => [
                        x(m(v.value === $e.package_id ? "Queueing..." : "Install"), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "onClick"])) : v.value === $e.package_id ? (o(), i("span", NR, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", LR, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get($e.package_id)
                    }, "Failed ⚠", 8, UR)) : d.value.has($e.package_id) ? (o(), R(Oe, {
                      key: 4,
                      size: "sm",
                      variant: "secondary",
                      disabled: Pe.value,
                      onClick: (qe) => G($e.package_id)
                    }, {
                      default: h(() => [...fe[6] || (fe[6] = [
                        x(" Needs Review ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : (o(), i("span", OR, "Installed"))
                  ]))), 128)),
                  ge.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[0] || (fe[0] = ($e) => g.value = "packages")
                  }, [
                    s("span", null, "Show all " + m(ge.value.length) + " packages...", 1),
                    fe[7] || (fe[7] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              Ne.value.length > 0 ? (o(), i("div", AR, [
                s("div", zR, [
                  s("span", FR, "Unknown Nodes (" + m(Ne.value.length) + ")", 1)
                ]),
                s("div", VR, [
                  (o(!0), i(V, null, ye(Ne.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: $e.node_type,
                    class: "item"
                  }, [
                    s("code", BR, m($e.node_type), 1),
                    fe[8] || (fe[8] = s("span", { class: "not-found" }, "Not found in registry", -1))
                  ]))), 128)),
                  Ne.value.length > 5 ? (o(), i("div", WR, " ...and " + m(Ne.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              _e.value.length > 0 ? (o(), i("div", GR, [
                s("div", jR, [
                  s("span", HR, "Requires Newer ComfyUI (" + m(_e.value.length) + ")", 1)
                ]),
                s("div", qR, [
                  (o(!0), i(V, null, ye(_e.value.slice(0, 5), ($e) => (o(), i("div", {
                    key: `vg-${$e.node_type}`,
                    class: "item"
                  }, [
                    s("code", KR, m($e.node_type), 1),
                    s("span", JR, m($e.guidance || "Requires a newer ComfyUI version"), 1)
                  ]))), 128)),
                  _e.value.length > 5 ? (o(), i("div", QR, " ...and " + m(_e.value.length - 5) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              De.value.length > 0 ? (o(), i("div", YR, [
                s("div", XR, [
                  s("span", ZR, "Community-Mapped Packages (" + m(De.value.length) + ")", 1),
                  he.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: T.value,
                    onClick: Nt
                  }, {
                    default: h(() => [
                      x(m(T.value ? "All Done" : "Install All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", e7, [
                  (o(!0), i(V, null, ye(ke.value, ($e) => (o(), i("div", {
                    key: `community-${$e.item_id}`,
                    class: "package-item"
                  }, [
                    s("div", t7, [
                      s("div", s7, [
                        s("span", n7, m($e.title), 1),
                        s("span", o7, "(" + m($e.node_count) + " " + m($e.node_count === 1 ? "node" : "nodes") + ")", 1)
                      ]),
                      s("div", a7, [
                        fe[9] || (fe[9] = x(" Found via community mapping — registry metadata may be incomplete", -1)),
                        $e.guidance ? (o(), i("span", l7, ". " + m($e.guidance), 1)) : y("", !0)
                      ])
                    ]),
                    $e.package_id ? (o(), i(V, { key: 0 }, [
                      !r.value.has($e.package_id) && !c.value.has($e.package_id) && !u.value.has($e.package_id) && !d.value.has($e.package_id) ? (o(), i("div", i7, [
                        le($e) ? (o(), R(Oe, {
                          key: 0,
                          size: "sm",
                          variant: "secondary",
                          disabled: v.value === $e.package_id,
                          onClick: (qe) => Ue($e, "registry")
                        }, {
                          default: h(() => [
                            x(m(v.value === $e.package_id ? "Queueing..." : "Install from Registry"), 1)
                          ]),
                          _: 2
                        }, 1032, ["disabled", "onClick"])) : y("", !0),
                        $e.repository ? (o(), R(Oe, {
                          key: 1,
                          size: "sm",
                          variant: le($e) ? "ghost" : "secondary",
                          disabled: v.value === $e.package_id,
                          onClick: (qe) => Ue($e, "git")
                        }, {
                          default: h(() => [...fe[10] || (fe[10] = [
                            x(" Install via Git ", -1)
                          ])]),
                          _: 1
                        }, 8, ["variant", "disabled", "onClick"])) : y("", !0)
                      ])) : v.value === $e.package_id ? (o(), i("span", r7, "Installing...")) : c.value.has($e.package_id) ? (o(), i("span", c7, "Queued")) : u.value.has($e.package_id) ? (o(), i("span", {
                        key: 3,
                        class: "failed-badge",
                        title: u.value.get($e.package_id)
                      }, "Failed ⚠", 8, u7)) : d.value.has($e.package_id) ? (o(), R(Oe, {
                        key: 4,
                        size: "sm",
                        variant: "secondary",
                        disabled: Pe.value,
                        onClick: (qe) => G($e.package_id)
                      }, {
                        default: h(() => [...fe[11] || (fe[11] = [
                          x(" Needs Review ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : (o(), i("span", d7, "Installed"))
                    ], 64)) : (o(), i(V, { key: 1 }, [
                      u.value.has($e.item_id) ? (o(), i("span", {
                        key: 0,
                        class: "failed-badge",
                        title: u.value.get($e.item_id)
                      }, "Failed ⚠", 8, m7)) : (o(), i("span", f7, "Manual setup required"))
                    ], 64))
                  ]))), 128)),
                  De.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[1] || (fe[1] = ($e) => g.value = "community")
                  }, [
                    s("span", null, "Show all " + m(De.value.length) + " packages...", 1),
                    fe[12] || (fe[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              we.value.length > 0 ? (o(), i("div", v7, [
                s("div", p7, [
                  s("span", g7, "Missing Models (" + m(we.value.length) + ")", 1),
                  Se.value.length > 1 ? (o(), R(Oe, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: be.value,
                    onClick: es
                  }, {
                    default: h(() => [
                      x(m(be.value ? "All Queued" : "Download All"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])) : y("", !0)
                ]),
                s("div", h7, [
                  (o(!0), i(V, null, ye(j.value, ($e) => (o(), i("div", {
                    key: $e.widget_value,
                    class: "model-item"
                  }, [
                    s("div", y7, [
                      s("span", w7, m($e.filename), 1)
                    ]),
                    $e.canDownload ? (o(), i(V, { key: 0 }, [
                      f.value.has($e.url) ? (o(), i("span", _7, "Queued")) : (o(), R(Oe, {
                        key: 0,
                        size: "sm",
                        variant: "secondary",
                        onClick: (qe) => Xe($e)
                      }, {
                        default: h(() => [...fe[13] || (fe[13] = [
                          x(" Download ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"]))
                    ], 64)) : (o(), i("span", k7, "Manual download required"))
                  ]))), 128)),
                  we.value.length >= 5 ? (o(), i("div", {
                    key: 0,
                    class: "show-all-row",
                    onClick: fe[2] || (fe[2] = ($e) => g.value = "models")
                  }, [
                    s("span", null, "Show all " + m(we.value.length) + " models...", 1),
                    fe[14] || (fe[14] = s("span", { class: "show-all-arrow" }, "→", -1))
                  ])) : y("", !0)
                ])
              ])) : y("", !0),
              s("div", b7, [
                b(ra, {
                  modelValue: p.value,
                  "onUpdate:modelValue": [
                    fe[3] || (fe[3] = ($e) => p.value = $e),
                    se
                  ]
                }, {
                  default: h(() => [...fe[15] || (fe[15] = [
                    x(" Don't show this popup ", -1)
                  ])]),
                  _: 1
                }, 8, ["modelValue"])
              ])
            ])) : y("", !0)
          ]),
          footer: h(() => [
            b(Oe, {
              variant: "secondary",
              onClick: Be
            }, {
              default: h(() => [...fe[16] || (fe[16] = [
                x("Dismiss", -1)
              ])]),
              _: 1
            }),
            je.value ? (o(), R(Oe, {
              key: 0,
              variant: "primary",
              onClick: ee
            }, {
              default: h(() => [
                x(m(Ve.value ? "All Done" : "Download All"), 1)
              ]),
              _: 1
            })) : y("", !0)
          ]),
          _: 1
        }, 8, ["loading", "error"])) : y("", !0),
        g.value ? (o(), R(CR, {
          key: 1,
          title: Ce.value,
          items: ne.value,
          "item-type": g.value,
          "queued-items": g.value === "models" ? f.value : c.value,
          "installed-items": g.value === "models" ? void 0 : r.value,
          "failed-items": g.value === "models" ? void 0 : u.value,
          "installing-item": g.value === "models" ? void 0 : v.value,
          onClose: fe[4] || (fe[4] = ($e) => g.value = null),
          onAction: He,
          onBulkAction: Te
        }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0),
        k.value ? (o(), R(hc, {
          key: 2,
          loading: $.value,
          error: C.value,
          preview: I.value,
          "can-apply": !!(E.value && ((Le = I.value) != null && Le.success)),
          applying: S.value,
          onClose: te,
          onApply: re
        }, null, 8, ["loading", "error", "preview", "can-apply", "applying"])) : y("", !0)
      ], 64);
    };
  }
}), x7 = /* @__PURE__ */ Me(C7, [["__scopeId", "data-v-f0b1aac5"]]), S7 = {
  key: 0,
  class: "io-mapping-root"
}, I7 = { class: "io-mapping-visual-layer" }, E7 = { class: "io-mapping-header" }, T7 = { class: "io-mapping-header-main" }, M7 = { class: "io-mapping-subtitle" }, P7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, R7 = { class: "io-mapping-header-actions" }, D7 = { class: "io-mapping-sidebar" }, N7 = { class: "io-mapping-sidebar-scroll" }, L7 = {
  key: 0,
  class: "io-state-block"
}, U7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, O7 = { class: "contract-meta-section" }, A7 = { class: "contract-meta-toggle-icon" }, z7 = {
  key: 0,
  class: "contract-meta-body"
}, F7 = { class: "contract-summary" }, V7 = { class: "summary-pill" }, B7 = { class: "summary-pill" }, W7 = { class: "summary-pill" }, G7 = { class: "mapping-section" }, j7 = { class: "section-header" }, H7 = {
  key: 0,
  class: "empty-message"
}, q7 = ["onClick"], K7 = { class: "item-card-title" }, J7 = { class: "item-card-meta" }, Q7 = { class: "item-card-summary" }, Y7 = { key: 0 }, X7 = { class: "mapping-section" }, Z7 = { class: "section-header" }, eD = {
  key: 0,
  class: "empty-message"
}, tD = ["onClick"], sD = { class: "item-card-title" }, nD = { class: "item-card-meta" }, oD = { class: "item-card-summary" }, aD = { class: "io-mapping-footer" }, lD = { class: "io-mapping-footer-left" }, iD = { class: "io-mapping-footer-right" }, rD = /* @__PURE__ */ Ie({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: n, saveWorkflowContract: a, deleteWorkflowContract: l } = ft(), r = _(!1), c = _(""), u = _(!1), d = _(!1), f = _(!1), p = _(null), v = _(null), w = _(null), g = _(!1), k = _(!1), $ = _(null), S = _(null), C = _(0), I = _(null), E = _(null);
    let P = null;
    const O = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], U = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], F = M(() => {
      var Z;
      return ((Z = v.value) == null ? void 0 : Z.contract_summary.has_contract) === !0;
    }), D = M(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const Z = w.value.default_contract || "default";
      return w.value.contracts[Z] || (w.value.contracts[Z] = { inputs: [], outputs: [] }), w.value.contracts[Z];
    }), W = M(() => {
      var ee;
      const Z = ((ee = v.value) == null ? void 0 : ee.contract_summary.status) ?? "none";
      return Z === "valid" ? "Valid Contract" : Z === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ce(Z) {
      return Z ? JSON.parse(JSON.stringify(Z)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function de(Z) {
      return Z === "integer" || Z === "number";
    }
    function J(Z) {
      return Z === "enum";
    }
    function ve(Z) {
      return Z == null ? "" : String(Z);
    }
    function K(Z) {
      const ee = Z.trim();
      if (!ee) return;
      const se = Number(ee);
      return Number.isFinite(se) ? se : void 0;
    }
    function L(Z) {
      return (Z || []).join(`
`);
    }
    function G(Z) {
      return Z.split(/[\n,]/).map((ee) => ee.trim()).filter(Boolean);
    }
    function re(Z) {
      return typeof Z == "string" ? Z.length > 24 ? `${Z.slice(0, 24)}...` : Z : String(Z);
    }
    function te(Z) {
      return Z == null ? "" : String(Z);
    }
    function ue(Z) {
      var se;
      const ee = (se = Z == null ? void 0 : Z.options) == null ? void 0 : se.values;
      return Array.isArray(ee) ? ee.map((Qe) => String(Qe)).filter(Boolean) : [];
    }
    function me(Z, ee) {
      var Be;
      const se = (Be = Z == null ? void 0 : Z.options) == null ? void 0 : Be[ee];
      if (se == null || se === "") return;
      const Qe = Number(se);
      return Number.isFinite(Qe) ? Qe : void 0;
    }
    function q(Z, ee) {
      return Z.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || ee;
    }
    function Q(Z) {
      if (!w.value) return;
      const ee = Z.trim() || "default";
      w.value.default_contract = ee, w.value.contracts[ee] || (w.value.contracts[ee] = { inputs: [], outputs: [] });
    }
    function ae(Z) {
      const ee = String(Z ?? "").toLowerCase();
      return ee.includes("image") ? "image" : ee.includes("video") ? "video" : ee.includes("audio") ? "audio" : ee.includes("int") ? "integer" : ee.includes("float") || ee.includes("double") || ee.includes("number") ? "number" : ee.includes("bool") ? "boolean" : ee.includes("combo") || ee.includes("enum") ? "enum" : ee.includes("string") || ee.includes("text") ? "string" : "file";
    }
    function Pe(Z) {
      D.value.inputs.splice(Z, 1), $.value === Z && ($.value = null);
    }
    function ge(Z) {
      D.value.outputs.splice(Z, 1), S.value === Z && (S.value = null);
    }
    function ze(Z) {
      $.value = $.value === Z ? null : Z, $.value != null && (S.value = null);
    }
    function Ne(Z) {
      S.value = S.value === Z ? null : Z, S.value != null && ($.value = null);
    }
    function _e(Z) {
      const ee = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(Z)) : String(Z);
      return document.querySelector(`[data-node-id="${ee}"]`);
    }
    function De(Z) {
      return Z instanceof Element ? !!Z.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function he(Z) {
      var Qe, Be, at, nt, We, ut;
      if (!(Z instanceof Element)) return null;
      const ee = Z.closest("[data-node-id]"), se = ee == null ? void 0 : ee.getAttribute("data-node-id");
      return se ? ((at = (Be = (Qe = t.comfyApp) == null ? void 0 : Qe.graph) == null ? void 0 : Be.getNodeById) == null ? void 0 : at.call(Be, se)) ?? ((ut = (We = (nt = t.comfyApp) == null ? void 0 : nt.rootGraph) == null ? void 0 : We.getNodeById) == null ? void 0 : ut.call(We, se)) ?? null : null;
    }
    function ke(Z, ee) {
      if (ee == null || ee < 0) return null;
      const se = _e(Z);
      return se ? se.querySelectorAll('[data-testid="node-widget"]')[ee] ?? null : null;
    }
    function T(Z) {
      return !Z || Z.width <= 0 || Z.height <= 0 ? null : {
        left: `${Z.left}px`,
        top: `${Z.top}px`,
        width: `${Z.width}px`,
        height: `${Z.height}px`
      };
    }
    function A(Z) {
      const ee = _e((Z == null ? void 0 : Z.id) ?? "");
      if (ee) return ee.getBoundingClientRect();
      const se = t.comfyApp;
      if (!Z || typeof (se == null ? void 0 : se.canvasPosToClientPos) != "function") return null;
      const Be = se.canvasPosToClientPos([Z.pos[0], Z.pos[1] - 32]), at = se.canvasPosToClientPos([Z.pos[0] + Z.size[0], Z.pos[1] + Z.size[1]]);
      return !Be || !at ? null : new DOMRect(Be[0], Be[1], at[0] - Be[0], at[1] - Be[1]);
    }
    function le(Z) {
      var We, ut, ts, qt, ss, Kt, H;
      const ee = ke(Z.node_id, Z.widget_idx);
      if (ee) return ee.getBoundingClientRect();
      const se = ((ts = (ut = (We = t.comfyApp) == null ? void 0 : We.graph) == null ? void 0 : ut.getNodeById) == null ? void 0 : ts.call(ut, String(Z.node_id))) ?? ((Kt = (ss = (qt = t.comfyApp) == null ? void 0 : qt.rootGraph) == null ? void 0 : ss.getNodeById) == null ? void 0 : Kt.call(ss, String(Z.node_id)));
      if (!se || typeof Z.widget_idx != "number" || !Array.isArray(se.widgets)) return null;
      const Qe = se.widgets[Z.widget_idx];
      if (!Qe || typeof ((H = t.comfyApp) == null ? void 0 : H.canvasPosToClientPos) != "function") return A(se);
      const Be = 10, at = t.comfyApp.canvasPosToClientPos([se.pos[0] + Be, se.pos[1] + (Qe.y ?? 0)]), nt = t.comfyApp.canvasPosToClientPos([se.pos[0] + se.size[0] - Be, se.pos[1] + (Qe.y ?? 0) + (Qe.computedHeight ?? 24)]);
      return !at || !nt ? A(se) : new DOMRect(at[0], at[1], nt[0] - at[0], nt[1] - at[1]);
    }
    function Ee(Z) {
      var se, Qe, Be, at, nt, We;
      const ee = ((Be = (Qe = (se = t.comfyApp) == null ? void 0 : se.graph) == null ? void 0 : Qe.getNodeById) == null ? void 0 : Be.call(Qe, String(Z.node_id))) ?? ((We = (nt = (at = t.comfyApp) == null ? void 0 : at.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : We.call(nt, String(Z.node_id)));
      return A(ee);
    }
    const we = M(() => (C.value, D.value.inputs.map((Z, ee) => {
      const se = T(le(Z));
      return se ? {
        key: `input-${ee}-${Z.node_id}-${Z.widget_idx ?? "na"}`,
        style: se,
        active: $.value === ee
      } : null;
    }).filter((Z) => !!Z))), Se = M(() => (C.value, D.value.outputs.map((Z, ee) => {
      const se = T(Ee(Z));
      return se ? {
        key: `output-${ee}-${Z.node_id}-${Z.selector ?? "primary"}`,
        style: se,
        active: S.value === ee
      } : null;
    }).filter((Z) => !!Z)));
    function X(Z) {
      var ts, qt, ss, Kt, H, fe, Le, $e, qe, Ye;
      if (De(Z.target)) return null;
      const ee = (ts = t.comfyApp) == null ? void 0 : ts.canvas;
      if (!ee) return null;
      const se = (qt = ee.convertEventToCanvasOffset) == null ? void 0 : qt.call(ee, Z);
      if (!se || se.length < 2) return null;
      const [Qe, Be] = se, at = ee.graph || ((ss = t.comfyApp) == null ? void 0 : ss.graph) || ((Kt = t.comfyApp) == null ? void 0 : Kt.rootGraph), nt = ((H = at == null ? void 0 : at.getNodeOnPos) == null ? void 0 : H.call(at, Qe, Be, ee.visible_nodes)) || ((fe = ee.getNodeOnPos) == null ? void 0 : fe.call(ee, Qe, Be)) || he(Z.target);
      if (!nt) return null;
      const We = (Le = nt.getWidgetOnPos) == null ? void 0 : Le.call(nt, Qe, Be, !0);
      if (We)
        return { kind: "input", node: nt, widget: We, canvasX: Qe, canvasY: Be };
      const ut = (($e = nt.getOutputOnPos) == null ? void 0 : $e.call(nt, [Qe, Be])) || ((Ye = (qe = nt.constructor) == null ? void 0 : qe.nodeData) != null && Ye.output_node ? { name: nt.title || nt.type || "output", type: "image" } : null);
      return ut ? { kind: "output", node: nt, output: ut, canvasX: Qe, canvasY: Be } : null;
    }
    function j(Z, ee) {
      var We;
      const se = Array.isArray(Z.widgets) ? Z.widgets.indexOf(ee) : -1, Qe = D.value.inputs.findIndex(
        (ut) => String(ut.node_id) === String(Z.id) && ut.widget_idx === se
      );
      if (Qe >= 0) {
        $.value = Qe;
        return;
      }
      const Be = typeof ((We = ee == null ? void 0 : ee.options) == null ? void 0 : We.property) == "string" ? ee.options.property : void 0, at = (ee == null ? void 0 : ee.name) || Be || "input", nt = {
        name: q(String(at), `input_${D.value.inputs.length + 1}`),
        display_name: String((ee == null ? void 0 : ee.name) || Be || `Input ${D.value.inputs.length + 1}`),
        type: ae(ee == null ? void 0 : ee.type),
        node_id: String(Z.id),
        widget_idx: se >= 0 ? se : void 0,
        field_key: Be,
        required: !0,
        default: (ee == null ? void 0 : ee.value) ?? ""
      };
      de(nt.type) && (nt.min = me(ee, "min"), nt.max = me(ee, "max")), J(nt.type) && (nt.enum_values = ue(ee)), D.value.inputs.push(nt), $.value = D.value.inputs.length - 1, S.value = null;
    }
    function pe(Z, ee) {
      const se = Array.isArray(Z.outputs) ? Z.outputs.indexOf(ee) : -1, Qe = se >= 0 ? `slot:${se}` : "primary", Be = D.value.outputs.findIndex(
        (nt) => String(nt.node_id) === String(Z.id) && (nt.selector || "primary") === Qe
      );
      if (Be >= 0) {
        S.value = Be;
        return;
      }
      const at = {
        name: q(String((ee == null ? void 0 : ee.name) || "output"), `output_${D.value.outputs.length + 1}`),
        display_name: String((ee == null ? void 0 : ee.name) || `Output ${D.value.outputs.length + 1}`),
        type: ae(ee == null ? void 0 : ee.type),
        node_id: String(Z.id),
        selector: Qe
      };
      D.value.outputs.push(at), S.value = D.value.outputs.length - 1, $.value = null;
    }
    function be(Z) {
      var Qe, Be, at;
      if (!r.value) {
        I.value = null, E.value = null;
        return;
      }
      const ee = X(Z);
      if (!ee) {
        I.value = null, E.value = null;
        return;
      }
      if (ee.kind === "input") {
        const nt = Array.isArray(ee.node.widgets) ? ee.node.widgets.indexOf(ee.widget) : -1, We = T(((Qe = ke(ee.node.id, nt)) == null ? void 0 : Qe.getBoundingClientRect()) ?? le({
          node_id: String(ee.node.id),
          widget_idx: nt >= 0 ? nt : void 0
        }));
        if (!We) {
          I.value = null, E.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Be = ee.widget) == null ? void 0 : Be.name) || "widget"} · Node ${ee.node.id}`
        }, E.value = { kind: "input", style: We };
        return;
      }
      const se = T(A(ee.node));
      if (!se) {
        I.value = null, E.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((at = ee.output) == null ? void 0 : at.name) || ee.node.title || ee.node.type || "output"} · Node ${ee.node.id}`
      }, E.value = { kind: "output", style: se };
    }
    function je(Z) {
      var Qe, Be, at;
      if (!r.value || !w.value || Z.button !== 0) return;
      const ee = X(Z);
      if (!ee) return;
      const se = (Qe = t.comfyApp) == null ? void 0 : Qe.canvas;
      if (se) {
        if (ee.kind === "input") {
          Z.preventDefault(), Z.stopImmediatePropagation(), Z.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = ee.canvasX, se.graph_mouse[1] = ee.canvasY), (Be = se.selectNode) == null || Be.call(se, ee.node, !1), j(ee.node, ee.widget);
          return;
        }
        Z.preventDefault(), Z.stopImmediatePropagation(), Z.stopPropagation(), Array.isArray(se.graph_mouse) && (se.graph_mouse[0] = ee.canvasX, se.graph_mouse[1] = ee.canvasY), (at = se.selectNode) == null || at.call(se, ee.node, !1), pe(ee.node, ee.output);
      }
    }
    function Ve() {
      document.addEventListener("pointerdown", je, !0), document.addEventListener("pointermove", be, !0);
    }
    function Ce() {
      document.removeEventListener("pointerdown", je, !0), document.removeEventListener("pointermove", be, !0);
    }
    async function ne() {
      if (c.value) {
        u.value = !0, p.value = null;
        try {
          v.value = await n(c.value), w.value = ce(v.value.execution_contract);
        } catch (Z) {
          p.value = Z instanceof Error ? Z.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function He() {
      if (!(!w.value || !c.value)) {
        d.value = !0, p.value = null;
        try {
          v.value = await a(c.value, w.value), w.value = ce(v.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (Z) {
          p.value = Z instanceof Error ? Z.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Te() {
      k.value = !0;
    }
    async function Ze() {
      if (c.value) {
        k.value = !1, f.value = !0, p.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ae({ reopenPanel: !0 });
        } catch (Z) {
          p.value = Z instanceof Error ? Z.message : "Failed to delete workflow contract";
        } finally {
          f.value = !1;
        }
      }
    }
    function Ue() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ae(Z) {
      r.value = !1, I.value = null, E.value = null, k.value = !1, Z != null && Z.reopenPanel && Ue();
    }
    async function Xe(Z) {
      var Qe, Be;
      const se = (Be = (Qe = Z.detail) == null ? void 0 : Qe.workflowName) == null ? void 0 : Be.trim();
      se && (c.value = se, $.value = null, S.value = null, g.value = !1, r.value = !0, await ne());
    }
    function yt(Z) {
      if (Z.key === "Escape" && r.value) {
        if (k.value) {
          k.value = !1;
          return;
        }
        Ae({ reopenPanel: !0 });
      }
    }
    function Nt() {
      if (P != null) return;
      const Z = () => {
        if (C.value += 1, !r.value) {
          P = null;
          return;
        }
        P = window.requestAnimationFrame(Z);
      };
      P = window.requestAnimationFrame(Z);
    }
    function es() {
      P != null && (window.cancelAnimationFrame(P), P = null);
    }
    return $t(r, (Z) => {
      Z ? (Ve(), Nt()) : (Ce(), es());
    }), dt(() => {
      window.addEventListener("comfygit:open-io-mapping", Xe), window.addEventListener("keydown", yt);
    }), To(() => {
      Ce(), es(), window.removeEventListener("comfygit:open-io-mapping", Xe), window.removeEventListener("keydown", yt);
    }), (Z, ee) => r.value ? (o(), i("div", S7, [
      s("div", I7, [
        (o(!0), i(V, null, ye(we.value, (se) => (o(), i("div", {
          key: se.key,
          class: Fe(["io-highlight", "io-highlight-input", { active: se.active }]),
          style: Ft(se.style)
        }, null, 6))), 128)),
        (o(!0), i(V, null, ye(Se.value, (se) => (o(), i("div", {
          key: se.key,
          class: Fe(["io-highlight", "io-highlight-output", { active: se.active }]),
          style: Ft(se.style)
        }, null, 6))), 128)),
        E.value ? (o(), i("div", {
          key: 0,
          class: Fe(["io-highlight", E.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Ft(E.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", E7, [
        s("div", T7, [
          ee[8] || (ee[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", M7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (o(), i("div", P7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", R7, [
          b(Oe, {
            size: "sm",
            variant: "secondary",
            onClick: ee[0] || (ee[0] = (se) => Ae({ reopenPanel: !0 }))
          }, {
            default: h(() => [...ee[9] || (ee[9] = [
              x(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", D7, [
        s("div", N7, [
          u.value ? (o(), i("div", L7, " Loading workflow contract... ")) : p.value ? (o(), i("div", U7, m(p.value), 1)) : w.value ? (o(), i(V, { key: 2 }, [
            s("section", O7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: ee[1] || (ee[1] = (se) => g.value = !g.value)
              }, [
                ee[10] || (ee[10] = s("span", null, "Contract Details", -1)),
                s("span", A7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (o(), i("div", z7, [
                b(Bt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(Pt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Q
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Bt, { label: "Display Name" }, {
                  default: h(() => [
                    b(Pt, {
                      modelValue: D.value.display_name,
                      "onUpdate:modelValue": ee[2] || (ee[2] = (se) => D.value.display_name = se),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Bt, { label: "Description" }, {
                  default: h(() => [
                    b(An, {
                      modelValue: D.value.description,
                      "onUpdate:modelValue": ee[3] || (ee[3] = (se) => D.value.description = se),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", F7, [
              s("span", V7, m(W.value), 1),
              s("span", B7, m(D.value.inputs.length) + " input" + m(D.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", W7, m(D.value.outputs.length) + " output" + m(D.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", G7, [
              s("div", j7, [
                b(wn, { variant: "section" }, {
                  default: h(() => [...ee[11] || (ee[11] = [
                    x("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.inputs.length ? y("", !0) : (o(), i("div", H7, " No inputs configured. ")),
              (o(!0), i(V, null, ye(D.value.inputs, (se, Qe) => (o(), i("div", {
                key: `input-${Qe}`,
                class: Fe(["item-card", { selected: $.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Be) => ze(Qe)
                }, [
                  s("div", null, [
                    s("div", K7, m(se.name || `Input ${Qe + 1}`), 1),
                    s("div", J7, [
                      x(" Node " + m(se.node_id || "?"), 1),
                      se.widget_idx !== void 0 ? (o(), i(V, { key: 0 }, [
                        x(" · Widget " + m(se.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", Q7, [
                      s("span", null, m(se.type || "string"), 1),
                      s("span", null, m(se.required ? "required" : "optional"), 1),
                      se.default !== void 0 && se.default !== "" ? (o(), i("span", Y7, "default " + m(re(se.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((Be) => Pe(Qe), ["stop"])
                  }, {
                    default: h(() => [...ee[12] || (ee[12] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, q7),
                $.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ee[4] || (ee[4] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Bt, { label: "Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Be) => se.name = Be,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Be) => se.display_name = Be,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": se.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Be) => se.type = Be
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, { label: "Required" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": se.required ? "true" : "false",
                        options: U,
                        "full-width": "",
                        "onUpdate:modelValue": (Be) => se.required = Be === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, {
                    class: Fe({ "item-grid-full": se.type === "string" || se.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      se.type === "string" ? (o(), R(An, {
                        key: 0,
                        "model-value": te(se.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Be) => se.default = Be
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (o(), R(Pt, {
                        key: 1,
                        modelValue: se.default,
                        "onUpdate:modelValue": (Be) => se.default = Be,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  de(se.type) ? (o(), R(Bt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(Pt, {
                        "model-value": ve(se.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Be) => se.min = K(Be)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  de(se.type) ? (o(), R(Bt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(Pt, {
                        "model-value": ve(se.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Be) => se.max = K(Be)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  J(se.type) ? (o(), R(Bt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(An, {
                        "model-value": L(se.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Be) => se.enum_values = G(Be)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", X7, [
              s("div", Z7, [
                b(wn, { variant: "section" }, {
                  default: h(() => [...ee[13] || (ee[13] = [
                    x("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              D.value.outputs.length ? y("", !0) : (o(), i("div", eD, " No outputs configured. ")),
              (o(!0), i(V, null, ye(D.value.outputs, (se, Qe) => (o(), i("div", {
                key: `output-${Qe}`,
                class: Fe(["item-card", { selected: S.value === Qe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Be) => Ne(Qe)
                }, [
                  s("div", null, [
                    s("div", sD, m(se.name || `Output ${Qe + 1}`), 1),
                    s("div", nD, [
                      x(" Node " + m(se.node_id || "?"), 1),
                      se.selector ? (o(), i(V, { key: 0 }, [
                        x(" · " + m(se.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", oD, [
                      s("span", null, m(se.type || "file"), 1)
                    ])
                  ]),
                  b(Oe, {
                    size: "sm",
                    variant: "ghost",
                    onClick: bt((Be) => ge(Qe), ["stop"])
                  }, {
                    default: h(() => [...ee[14] || (ee[14] = [
                      x(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, tD),
                S.value === Qe ? (o(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: ee[5] || (ee[5] = bt(() => {
                  }, ["stop"]))
                }, [
                  b(Bt, { label: "Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: se.name,
                        "onUpdate:modelValue": (Be) => se.name = Be,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, { label: "Display Name" }, {
                    default: h(() => [
                      b(Pt, {
                        modelValue: se.display_name,
                        "onUpdate:modelValue": (Be) => se.display_name = Be,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Bt, { label: "Type" }, {
                    default: h(() => [
                      b(Jo, {
                        "model-value": se.type,
                        options: O,
                        "full-width": "",
                        "onUpdate:modelValue": (Be) => se.type = Be
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", aD, [
          s("div", lD, [
            b(Oe, {
              variant: "secondary",
              onClick: ee[6] || (ee[6] = (se) => Ae({ reopenPanel: !0 }))
            }, {
              default: h(() => [...ee[15] || (ee[15] = [
                x(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", iD, [
            b(Oe, {
              variant: "danger",
              disabled: !F.value,
              loading: f.value,
              onClick: Te
            }, {
              default: h(() => [...ee[16] || (ee[16] = [
                x(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Oe, {
              variant: "primary",
              loading: d.value,
              onClick: He
            }, {
              default: h(() => [...ee[17] || (ee[17] = [
                x(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      k.value ? (o(), R(Nl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ze,
        onCancel: ee[7] || (ee[7] = (se) => k.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), cD = /* @__PURE__ */ Me(rD, [["__scopeId", "data-v-13515b27"]]), uD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', dD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', mD = {
  comfy: uD,
  phosphor: dD
}, Ol = "comfy", Uc = "comfygit-theme";
let vn = null, Oc = Ol;
function fD() {
  try {
    const e = localStorage.getItem(Uc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ol;
}
function Ac(e = Ol) {
  vn && vn.remove(), vn = document.createElement("style"), vn.id = "comfygit-theme-styles", vn.setAttribute("data-theme", e), vn.textContent = mD[e], document.head.appendChild(vn), document.body.setAttribute("data-comfygit-theme", e), Oc = e;
  try {
    localStorage.setItem(Uc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function vD() {
  return Oc;
}
function pD(e) {
  Ac(e);
}
function gD(e) {
  var r;
  const { ui_id: t, state: n } = e || {}, a = (n == null ? void 0 : n.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Fi = "ComfyGit.DevAutoReload", zc = "ComfyGit.DevAutoReload.PanelOpen";
function hD() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ka() {
  const e = hD();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Fi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Fi) === "true";
  } catch {
    return !1;
  }
}
function Fc(e) {
  if (ka())
    try {
      sessionStorage.setItem(zc, e ? "true" : "false");
    } catch {
    }
}
function yD() {
  if (!ka()) return !1;
  try {
    return sessionStorage.getItem(zc) === "true";
  } catch {
    return !1;
  }
}
async function Vi(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), f = u.get("last-modified"), p = u.get("content-length");
    if (d || f)
      return [d, f, p].filter(Boolean).join(":");
  }
  const n = await fetch(e, { cache: "no-store", method: "GET" });
  if (!n.ok) return null;
  const a = n.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await n.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function wD(e) {
  if (!ka()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Vi(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let n = !1;
  window.setInterval(async () => {
    if (!n)
      for (const a of t)
        try {
          const l = await Vi(a.url);
          if (a.signature && l && l !== a.signature) {
            n = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const _D = "./comfygit-panel.css", kD = "./comfygit-panel.js", Vc = new URL(_D, import.meta.url).href, bD = new URL(kD, import.meta.url).href, Al = document.createElement("link");
Al.rel = "stylesheet";
Al.href = Vc;
document.head.appendChild(Al);
const $D = fD();
Ac($D);
ka() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), pD(e);
  },
  getTheme: () => {
    const e = vD();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = Us;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = Us;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((n) => requestAnimationFrame(n)), t.graphToPrompt(t.rootGraph);
  }
};
let zs = null, ho = null, ps = null, yo = null, eo = null, Bi = null, to = null, Wi = null, so = null, Gi = null;
const zn = _(null);
let So = "no_workspace", Bc = !1;
async function lo(e = !1) {
  const t = Hn();
  if (!t) return null;
  try {
    const n = e ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status", a = await t.fetchApi(n);
    a.ok && (zn.value = await a.json());
  } catch {
  }
}
async function cl() {
  const e = Hn();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const n = await t.json();
        So = n.state, Bc = n.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ul() {
  var t;
  if (So === "managed" || !Bc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const n of e)
    if (((t = n.textContent) == null ? void 0 : t.trim()) === "Manager" && !n.querySelector("svg, i, img")) {
      n.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function CD() {
  if (!zn.value) return !1;
  const e = zn.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || zn.value.has_changes;
}
function no(e) {
  io(), Fc(!0), zs = document.createElement("div"), zs.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", zs.appendChild(t), zs.addEventListener("click", (a) => {
    a.target === zs && io();
  });
  const n = (a) => {
    a.key === "Escape" && (io(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), ho = Po({
    render: () => jn(gP, {
      initialView: e,
      onClose: io,
      onStatusUpdate: async (a) => {
        zn.value = a, Pn(), await cl(), Qo(), ul();
      }
    })
  }), ho.mount(t), document.body.appendChild(zs);
}
function io() {
  Fc(!1), ho && (ho.unmount(), ho = null), zs && (zs.remove(), zs = null);
}
function ji(e) {
  oo(), ps = document.createElement("div"), ps.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  ps.style.position = "fixed", ps.style.top = `${t.bottom + 8}px`, ps.style.right = `${window.innerWidth - t.right}px`, ps.style.zIndex = "10001";
  const n = (l) => {
    ps && !ps.contains(l.target) && l.target !== e && (oo(), document.removeEventListener("mousedown", n));
  };
  setTimeout(() => document.addEventListener("mousedown", n), 0);
  const a = (l) => {
    l.key === "Escape" && (oo(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), yo = Po({
    render: () => jn(Rc, {
      status: zn.value,
      onClose: oo,
      onCommitted: (l) => {
        oo(), xD(l.success, l.message), lo().then(Pn);
      }
    })
  }), yo.mount(ps), document.body.appendChild(ps);
}
function oo() {
  yo && (yo.unmount(), yo = null), ps && (ps.remove(), ps = null);
}
function xD(e, t) {
  const n = document.createElement("div"), a = e ? "#22c55e" : "#ef4444";
  n.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${a};
    border-radius: 8px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10002;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: sans-serif;
    font-size: 13px;
    color: var(--fg-color, #fff);
    animation: toastSlideUp 0.2s ease;
  `;
  const l = document.createElement("span");
  l.textContent = e ? "✓" : "✕", l.style.cssText = `
    color: ${a};
    font-weight: bold;
    font-size: 14px;
  `, n.appendChild(l);
  const r = document.createElement("span");
  r.textContent = t, n.appendChild(r), document.body.appendChild(n), setTimeout(() => {
    n.style.opacity = "0", n.style.transition = "opacity 0.2s ease", setTimeout(() => n.remove(), 200);
  }, 3e3);
}
function SD() {
  eo || (eo = document.createElement("div"), eo.className = "comfygit-download-queue-root", Bi = Po({
    render: () => jn(uR)
  }), Bi.mount(eo), document.body.appendChild(eo), console.log("[ComfyGit] Model download queue mounted"));
}
function ID() {
  to || (to = document.createElement("div"), to.className = "comfygit-missing-resources-root", Wi = Po({
    render: () => jn(x7)
  }), Wi.mount(to), document.body.appendChild(to), console.log("[ComfyGit] Missing resources popup mounted"));
}
function ED() {
  so || (so = document.createElement("div"), so.className = "comfygit-io-mapping-root", Gi = Po({
    render: () => jn(cD, {
      comfyApp: Us
    })
  }), Gi.mount(so), document.body.appendChild(so), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let ls = null;
function Pn() {
  if (!ls) return;
  const e = ls.querySelector(".commit-indicator");
  e && (e.style.display = CD() ? "block" : "none");
}
function Qo() {
  if (!ls) return;
  const e = So !== "managed";
  ls.disabled = e, ls.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Wc = document.createElement("style");
Wc.textContent = `
  .comfygit-panel-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-container {
    width: var(--cg-panel-width, 580px);
    max-width: 90vw;
    max-height: 80vh;
    display: flex;
  }

  .comfygit-btn-group {
    display: flex;
    gap: 0;
    margin-right: 4px;
    order: -1;
  }

  .comfygit-panel-btn,
  .comfygit-commit-btn {
    height: 32px;
    padding: 0 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .comfygit-panel-btn {
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    color: white !important;
    border: none !important;
    border-radius: 4px 0 0 4px !important;
    box-shadow: var(--cg-btn-shadow-inset, inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15)) !important;
  }

  .comfygit-panel-btn:hover {
    background: linear-gradient(180deg, var(--cg-btn-gradient-start, #fb923c) 0%, var(--cg-btn-gradient-end, #ea580c) 100%) !important;
    filter: brightness(1.1);
  }

  .comfygit-commit-btn {
    background: linear-gradient(180deg, #525252 0%, #3f3f3f 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
    position: relative;
  }

  .comfygit-commit-btn:hover:not(:disabled) {
    background: linear-gradient(180deg, #404040 0%, #2e2e2e 100%) !important;
  }

  .comfygit-commit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .comfygit-mock-btn {
    background: linear-gradient(180deg, #7c3aed 0%, #5b21b6 100%) !important;
    color: white !important;
    border: none !important;
    border-left: 1px solid rgba(0, 0, 0, 0.3) !important;
    border-radius: 0 4px 4px 0 !important;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .comfygit-mock-btn:hover {
    background: linear-gradient(180deg, #8b5cf6 0%, #6d28d9 100%) !important;
  }

  /* Adjust commit button border-radius when mock button is present */
  .comfygit-btn-group:has(.comfygit-mock-btn) .comfygit-commit-btn {
    border-radius: 0 !important;
  }

  .commit-indicator {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 8px;
    height: 8px;
    background: #fbbf24;
    border-radius: 50%;
    display: none;
  }

  .comfygit-commit-popover-container {
    animation: popoverFadeIn 0.15s ease-out;
  }

  @keyframes popoverFadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(Wc);
Us.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => no()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        ls && !ls.disabled && ji(ls);
      }
    }
  ],
  // Default keybindings (user can customize in Settings → Keyboard Shortcuts)
  keybindings: [
    {
      commandId: "ComfyGit.OpenPanel",
      combo: { key: "l", alt: !0, shift: !0 }
    },
    {
      commandId: "ComfyGit.QuickCommit",
      combo: { key: "k", alt: !0, shift: !0 }
    }
  ],
  // Hook into workflow loading to intercept missing resources
  async beforeConfigureGraph(e, t) {
    if (So === "managed")
      try {
        await Promise.all([
          Us.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Us.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (n) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", n);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (So !== "managed") return;
    const t = window.__comfygit_pending_workflow;
    t && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: t }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const t = document.createElement("button");
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => no(), ls = document.createElement("button"), ls.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", ls.innerHTML = 'Commit <span class="commit-indicator"></span>', ls.title = "Quick Commit", ls.onclick = () => ji(ls), e.appendChild(t), e.appendChild(ls), (r = (l = Us.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Us.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), SD(), ID(), ED(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      no(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      io();
    })), window.addEventListener("comfygit:status-refresh", (async () => {
      await lo(), Pn(), Qo();
    }));
    const { loadPendingDownloads: n } = qn();
    n(), await Promise.all([lo(), cl()]), Pn(), Qo(), ul(), yD() && setTimeout(() => {
      zs || no();
    }, 100), wD([
      { name: "panel script", url: bD },
      { name: "panel stylesheet", url: Vc }
    ]), setTimeout(ul, 100), setInterval(async () => {
      await Promise.all([lo(), cl()]), Pn(), Qo();
    }, 3e4);
    const a = Hn();
    if (a) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((v) => {
          (v.startsWith("workflow:") || v.startsWith("Comfy.OpenWorkflowsPaths:") || v.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(v);
        }), window.location.reload();
      }, u = function() {
        const v = document.createElement("div");
        v.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--bg-color);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          z-index: 10000;
          display: flex;
          align-items: center;
          gap: 16px;
          font-family: sans-serif;
          font-size: 14px;
          color: var(--fg-color);
        `;
        const w = document.createElement("span");
        w.textContent = "Workflows updated - refresh required", v.appendChild(w);
        const g = document.createElement("button");
        g.textContent = "Refresh", g.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => c(), v.appendChild(g);
        const k = document.createElement("button");
        k.textContent = "×", k.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, k.onmouseover = () => k.style.opacity = "1", k.onmouseout = () => k.style.opacity = "0.6", k.onclick = () => v.remove(), v.appendChild(k), document.body.appendChild(v), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(v) {
        const w = document.getElementById("comfygit-error-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-error-toast", g.style.cssText = `
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a1a;
          border: 2px solid #e53935;
          border-radius: 8px;
          padding: 16px 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 600px;
        `;
        const k = document.createElement("span");
        k.textContent = "⚠️", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const S = document.createElement("div");
        S.textContent = "Node installation failed", S.style.cssText = "font-weight: 600; color: #e53935;", $.appendChild(S);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", $.appendChild(C), g.appendChild($);
        const I = document.createElement("button");
        I.textContent = "View Logs", I.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, I.onmouseover = () => I.style.background = "#c62828", I.onmouseout = () => I.style.background = "#e53935", I.onclick = () => {
          g.remove(), no("debug-env");
        }, g.appendChild(I);
        const E = document.createElement("button");
        E.textContent = "×", E.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", v), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, f = function(v) {
        const w = document.getElementById("comfygit-restart-toast");
        w && w.remove();
        const g = document.createElement("div");
        g.id = "comfygit-restart-toast", g.style.cssText = `
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: #1e1e1e;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          z-index: 999999;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
          font-size: 14px;
          color: #fff;
          max-width: 550px;
        `;
        const k = document.createElement("span");
        k.textContent = "✅", k.style.fontSize = "20px", g.appendChild(k);
        const $ = document.createElement("div");
        $.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const S = document.createElement("div");
        S.textContent = "To apply changes, please restart ComfyUI", S.style.cssText = "font-weight: 500; color: #fff;", $.appendChild(S);
        const C = document.createElement("div");
        C.textContent = `${v} node package${v > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", $.appendChild(C), g.appendChild($);
        const I = document.createElement("button");
        I.textContent = "Apply Changes", I.style.cssText = `
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
          border-radius: 20px;
          padding: 6px 14px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          transition: background 0.2s;
        `, I.onmouseover = () => I.style.background = "rgba(255,255,255,0.1)", I.onmouseout = () => I.style.background = "transparent", I.onclick = async () => {
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", S.textContent = "Restarting...", C.textContent = "Applying changes, please wait...";
          try {
            const P = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                if (localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false") {
                  console.log("[ComfyGit] Auto-refresh enabled after node install restart, reloading page..."), c();
                  return;
                }
                Us.refreshComboInNodes && (await Us.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), k.textContent = "✅", S.textContent = "Nodes Installed", S.style.color = "#4caf50", C.textContent = `${v} package${v > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (O) {
                console.error("[ComfyGit] Failed to refresh nodes:", O), k.textContent = "✅", S.textContent = "Restart Complete", S.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", P, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (P) {
            console.error("[ComfyGit] Failed to restart:", P), S.textContent = "Restart Failed", S.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
        const E = document.createElement("button");
        E.textContent = "×", E.title = "Dismiss (restart later)", E.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, E.onmouseover = () => E.style.opacity = "1", E.onmouseout = () => E.style.opacity = "0.6", E.onclick = () => g.remove(), g.appendChild(E), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${v} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (v) => {
        const { change_type: w, workflow_name: g } = v.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await lo(), Pn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let p = !1;
      a.addEventListener("status", async (v) => {
        const w = v.detail != null;
        w && !p && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), p = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (v) => {
        const w = gD(v.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (v) => {
        const w = v, { count: g = 1 } = w.detail || {};
        f(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
