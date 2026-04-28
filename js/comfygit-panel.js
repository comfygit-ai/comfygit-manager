var Oc = Object.defineProperty;
var Uc = (e, t, o) => t in e ? Oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var kn = (e, t, o) => Uc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const yt = {}, wo = [], bs = () => {
}, Ai = () => !1, Yn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Ac = Object.prototype.hasOwnProperty, ft = (e, t) => Ac.call(e, t), et = Array.isArray, _o = (e) => fn(e) === "[object Map]", Mo = (e) => fn(e) === "[object Set]", Ol = (e) => fn(e) === "[object Date]", tt = (e) => typeof e == "function", Ct = (e) => typeof e == "string", ds = (e) => typeof e == "symbol", ht = (e) => e !== null && typeof e == "object", zi = (e) => (ht(e) || tt(e)) && tt(e.then) && tt(e.catch), Fi = Object.prototype.toString, fn = (e) => Fi.call(e), zc = (e) => fn(e).slice(8, -1), Vi = (e) => fn(e) === "[object Object]", cl = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Fc = /-\w/g, is = Xn(
  (e) => e.replace(Fc, (t) => t.slice(1).toUpperCase())
), Vc = /\B([A-Z])/g, Js = Xn(
  (e) => e.replace(Vc, "-$1").toLowerCase()
), Zn = Xn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Xn(
  (e) => e ? `on${Zn(e)}` : ""
), Hs = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Bi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, ea = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Bc = (e) => {
  const t = Ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ul;
const ta = () => Ul || (Ul = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (et(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = Ct(n) ? Hc(n) : Rt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Ct(e) || ht(e))
    return e;
}
const Wc = /;(?![^(]*\))/g, Gc = /:([^]+)/, jc = /\/\*[^]*?\*\//g;
function Hc(e) {
  const t = {};
  return e.replace(jc, "").split(Wc).forEach((o) => {
    if (o) {
      const n = o.split(Gc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (et(e))
    for (let o = 0; o < e.length; o++) {
      const n = Be(e[o]);
      n && (t += n + " ");
    }
  else if (ht(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kc = /* @__PURE__ */ ll(qc);
function Wi(e) {
  return !!e || e === "";
}
function Jc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = lo(e[n], t[n]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Ol(e), n = Ol(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = ds(e), n = ds(t), o || n)
    return e === t;
  if (o = et(e), n = et(t), o || n)
    return o && n ? Jc(e, t) : !1;
  if (o = ht(e), n = ht(t), o || n) {
    if (!o || !n)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(t).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !lo(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ul(e, t) {
  return e.findIndex((o) => lo(o, t));
}
const Gi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ct(e) ? e : e == null ? "" : et(e) || ht(e) && (e.toString === Fi || !tt(e.toString)) ? Gi(e) ? m(e.value) : JSON.stringify(e, ji, 2) : String(e), ji = (e, t) => Gi(t) ? ji(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Ma(n, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ma(o))
} : ds(t) ? Ma(t) : ht(t) && !et(t) && !Vi(t) ? String(t) : t, Ma = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ds(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jt;
class Qc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !t && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].pause();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, o;
      if (this.scopes)
        for (t = 0, o = this.scopes.length; t < o; t++)
          this.scopes[t].resume();
      for (t = 0, o = this.effects.length; t < o; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const o = Jt;
      try {
        return Jt = this, t();
      } finally {
        Jt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Jt, Jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Jt = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let o, n;
      for (o = 0, n = this.effects.length; o < n; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, n = this.cleanups.length; o < n; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, n = this.scopes.length; o < n; o++)
          this.scopes[o].stop(!0);
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
function Yc() {
  return Jt;
}
let wt;
const Pa = /* @__PURE__ */ new WeakSet();
class Hi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Pa.has(this) && (Pa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ki(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Al(this), Ji(this);
    const t = wt, o = cs;
    wt = this, cs = !0;
    try {
      return this.fn();
    } finally {
      Qi(this), wt = t, cs = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fl(t);
      this.deps = this.depsTail = void 0, Al(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Pa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wa(this) && this.run();
  }
  get dirty() {
    return Wa(this);
  }
}
let qi = 0, Ko, Jo;
function Ki(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function dl() {
  qi++;
}
function ml() {
  if (--qi > 0)
    return;
  if (Jo) {
    let t = Jo;
    for (Jo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Ko; ) {
    let t = Ko;
    for (Ko = void 0; t; ) {
      const o = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = o;
    }
  }
  if (e) throw e;
}
function Ji(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Qi(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), fl(n), Xc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Wa(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = wt, n = cs;
  wt = e, cs = !0;
  try {
    Ji(e);
    const l = e.fn(e._value);
    (t.version === 0 || Hs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    wt = o, cs = n, Qi(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Xc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let cs = !0;
const Xi = [];
function Ds() {
  Xi.push(cs), cs = !1;
}
function Ns() {
  const e = Xi.pop();
  cs = e === void 0 ? !0 : e;
}
function Al(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const o = wt;
    wt = void 0;
    try {
      t();
    } finally {
      wt = o;
    }
  }
}
let nn = 0;
class Zc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!wt || !cs || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Zc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Zi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, nn++, this.notify(t);
  }
  notify(t) {
    dl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      ml();
    }
  }
}
function Zi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Zi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ga = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), ja = Symbol(
  ""
), an = Symbol(
  ""
);
function zt(e, t, o) {
  if (cs && wt) {
    let n = Ga.get(e);
    n || Ga.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new vl()), l.map = n, l.key = o), l.track();
  }
}
function Ps(e, t, o, n, l, r) {
  const c = Ga.get(e);
  if (!c) {
    nn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (dl(), t === "clear")
    c.forEach(u);
  else {
    const d = et(e), v = d && cl(o);
    if (d && o === "length") {
      const f = Number(n);
      c.forEach((p, w) => {
        (w === "length" || w === an || !ds(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(an)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(oo)), _o(e) && u(c.get(ja)));
          break;
        case "delete":
          d || (u(c.get(oo)), _o(e) && u(c.get(ja)));
          break;
        case "set":
          _o(e) && u(c.get(oo));
          break;
      }
  }
  ml();
}
function fo(e) {
  const t = ut(e);
  return t === e ? t : (zt(t, "iterate", an), as(e) ? t : t.map(ms));
}
function sa(e) {
  return zt(e = ut(e), "iterate", an), e;
}
function Ws(e, t) {
  return Os(e) ? no(e) ? Io(ms(t)) : Io(t) : ms(t);
}
const eu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ra(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => et(t) ? fo(t) : t)
    );
  },
  entries() {
    return Ra(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, t) {
    return Es(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Es(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Ws(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Es(
      this,
      "find",
      e,
      t,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Es(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Es(
      this,
      "findLast",
      e,
      t,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Es(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Es(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return La(this, "includes", e);
  },
  indexOf(...e) {
    return La(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return La(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Es(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oo(this, "pop");
  },
  push(...e) {
    return Oo(this, "push", e);
  },
  reduce(e, ...t) {
    return zl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zl(this, "reduceRight", e, t);
  },
  shift() {
    return Oo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Es(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oo(this, "splice", e);
  },
  toReversed() {
    return fo(this).toReversed();
  },
  toSorted(e) {
    return fo(this).toSorted(e);
  },
  toSpliced(...e) {
    return fo(this).toSpliced(...e);
  },
  unshift(...e) {
    return Oo(this, "unshift", e);
  },
  values() {
    return Ra(this, "values", (e) => Ws(this, e));
  }
};
function Ra(e, t, o) {
  const n = sa(e), l = n[t]();
  return n !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const tu = Array.prototype;
function Es(e, t, o, n, l, r) {
  const c = sa(e), u = c !== e && !as(e), d = c[t];
  if (d !== tu[t]) {
    const p = d.apply(e, r);
    return u ? ms(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Ws(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, n);
  return u && l ? l(f) : f;
}
function zl(e, t, o, n) {
  const l = sa(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[t](r, ...n);
}
function La(e, t, o) {
  const n = ut(e);
  zt(n, "iterate", an);
  const l = n[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ut(o[0]), n[t](...o)) : l;
}
function Oo(e, t, o = []) {
  Ds(), dl();
  const n = ut(e)[t].apply(e, o);
  return ml(), Ns(), n;
}
const su = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), er = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ds)
);
function ou(e) {
  ds(e) || (e = String(e));
  const t = ut(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class tr {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, n) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return n === (l ? r ? fu : ar : r ? nr : or).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = et(t);
    if (!l) {
      let d;
      if (c && (d = eu[o]))
        return d;
      if (o === "hasOwnProperty")
        return ou;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Wt(t) ? t : n
    );
    if ((ds(o) ? er.has(o) : su(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Wt(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && ht(d) ? An(d) : d;
    }
    return ht(u) ? l ? An(u) : co(u) : u;
  }
}
class sr extends tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const c = et(t) && cl(o);
    if (!this._isShallow) {
      const v = Os(r);
      if (!as(n) && !Os(n) && (r = ut(r), n = ut(n)), !c && Wt(r) && !Wt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      n,
      Wt(t) ? t : l
    );
    return t === ut(l) && (u ? Hs(n, r) && Ps(t, "set", o, n) : Ps(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Ps(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!ds(o) || !er.has(o)) && zt(t, "has", o), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      et(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class nu extends tr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return !0;
  }
  deleteProperty(t, o) {
    return !0;
  }
}
const au = /* @__PURE__ */ new sr(), lu = /* @__PURE__ */ new nu(), iu = /* @__PURE__ */ new sr(!0);
const Ha = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function ru(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ut(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), f = o ? Ha : t ? Io : ms;
    return !t && zt(
      r,
      "iterate",
      d ? ja : oo
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = v.next();
        return w ? { value: p, done: w } : {
          value: u ? [f(p[0]), f(p[1])] : f(p),
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
function $n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Hs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = bn(c), v = t ? Ha : e ? Io : ms;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(ut(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (Hs(l, u) && zt(c, "has", l), zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), v = t ? Ha : e ? Io : ms;
      return !e && zt(d, "iterate", oo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: $n("add"),
      set: $n("set"),
      delete: $n("delete"),
      clear: $n("clear")
    } : {
      add(l) {
        !t && !as(l) && !Os(l) && (l = ut(l));
        const r = ut(this);
        return bn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !as(r) && !Os(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = bn(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Hs(r, f) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = bn(r);
        let d = c.call(r, l);
        d || (l = ut(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ps(r, "delete", l, void 0), v;
      },
      clear() {
        const l = ut(this), r = l.size !== 0, c = l.clear();
        return r && Ps(
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
    o[l] = ru(l, e, t);
  }), o;
}
function pl(e, t) {
  const o = cu(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const uu = {
  get: /* @__PURE__ */ pl(!1, !1)
}, du = {
  get: /* @__PURE__ */ pl(!1, !0)
}, mu = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap();
function vu(e) {
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
function pu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vu(zc(e));
}
function co(e) {
  return Os(e) ? e : gl(
    e,
    !1,
    au,
    uu,
    or
  );
}
function gu(e) {
  return gl(
    e,
    !1,
    iu,
    du,
    nr
  );
}
function An(e) {
  return gl(
    e,
    !0,
    lu,
    mu,
    ar
  );
}
function gl(e, t, o, n, l) {
  if (!ht(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = pu(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? n : o
  );
  return l.set(e, u), u;
}
function no(e) {
  return Os(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Os(e) {
  return !!(e && e.__v_isReadonly);
}
function as(e) {
  return !!(e && e.__v_isShallow);
}
function hl(e) {
  return e ? !!e.__v_raw : !1;
}
function ut(e) {
  const t = e && e.__v_raw;
  return t ? ut(t) : e;
}
function hu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Bi(e, "__v_skip", !0), e;
}
const ms = (e) => ht(e) ? co(e) : e, Io = (e) => ht(e) ? An(e) : e;
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return yu(e, !1);
}
function yu(e, t) {
  return Wt(e) ? e : new wu(e, t);
}
class wu {
  constructor(t, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : ms(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || as(t) || Os(t);
    t = n ? t : ut(t), Hs(t, o) && (this._rawValue = t, this._value = n ? t : ms(t), this.dep.trigger());
  }
}
function st(e) {
  return Wt(e) ? e.value : e;
}
const _u = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Wt(l) && !Wt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function lr(e) {
  return no(e) ? e : new Proxy(e, _u);
}
class ku {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Ki(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Yi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function bu(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new ku(n, l, o);
}
const Cn = {}, zn = /* @__PURE__ */ new WeakMap();
let to;
function $u(e, t = !1, o = to) {
  if (o) {
    let n = zn.get(o);
    n || zn.set(o, n = []), n.push(e);
  }
}
function Cu(e, t, o = yt) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (M) => l ? M : as(M) || l === !1 || l === 0 ? Rs(M, 1) : Rs(M);
  let f, p, w, g, _ = !1, C = !1;
  if (Wt(e) ? (p = () => e.value, _ = as(e)) : no(e) ? (p = () => v(e), _ = !0) : et(e) ? (C = !0, _ = e.some((M) => no(M) || as(M)), p = () => e.map((M) => {
    if (Wt(M))
      return M.value;
    if (no(M))
      return v(M);
    if (tt(M))
      return d ? d(M, 2) : M();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Ns();
      }
    }
    const M = to;
    to = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = M;
    }
  } : p = bs, t && l) {
    const M = p, N = l === !0 ? 1 / 0 : l;
    p = () => Rs(M(), N);
  }
  const $ = Yc(), x = () => {
    f.stop(), $ && $.active && rl($.effects, f);
  };
  if (r && t) {
    const M = t;
    t = (...N) => {
      M(...N), x();
    };
  }
  let I = C ? new Array(e.length).fill(Cn) : Cn;
  const T = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const N = f.run();
        if (l || _ || (C ? N.some((z, j) => Hs(z, I[j])) : Hs(N, I))) {
          w && w();
          const z = to;
          to = f;
          try {
            const j = [
              N,
              // pass undefined as the old value when it's changed for the first time
              I === Cn ? void 0 : C && I[0] === Cn ? [] : I,
              g
            ];
            I = N, d ? d(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            to = z;
          }
        }
      } else
        f.run();
  };
  return u && u(T), f = new Hi(p), f.scheduler = c ? () => c(T, !1) : T, g = (M) => $u(M, !1, f), w = f.onStop = () => {
    const M = zn.get(f);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const N of M) N();
      zn.delete(f);
    }
  }, t ? n ? T(!0) : I = f.run() : c ? c(T.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Rs(e, t = 1 / 0, o) {
  if (t <= 0 || !ht(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Wt(e))
    Rs(e.value, t, o);
  else if (et(e))
    for (let n = 0; n < e.length; n++)
      Rs(e[n], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((n) => {
      Rs(n, t, o);
    });
  else if (Vi(e)) {
    for (const n in e)
      Rs(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Rs(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    oa(l, t, o);
  }
}
function fs(e, t, o, n) {
  if (tt(e)) {
    const l = vn(e, t, o, n);
    return l && zi(l) && l.catch((r) => {
      oa(r, t, o);
    }), l;
  }
  if (et(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(fs(e[r], t, o, n));
    return l;
  }
}
function oa(e, t, o, n = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || yt;
  if (t) {
    let u = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const f = u.ec;
      if (f) {
        for (let p = 0; p < f.length; p++)
          if (f[p](e, d, v) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Ds(), vn(r, null, 10, [
        e,
        d,
        v
      ]), Ns();
      return;
    }
  }
  xu(e, o, l, n, c);
}
function xu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let ys = -1;
const ko = [];
let Gs = null, go = 0;
const ir = /* @__PURE__ */ Promise.resolve();
let Fn = null;
function Pt(e) {
  const t = Fn || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Su(e) {
  let t = ys + 1, o = qt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = qt[n], r = ln(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const t = ln(e), o = qt[qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ln(o) ? qt.push(e) : qt.splice(Su(t), 0, e), e.flags |= 1, rr();
  }
}
function rr() {
  Fn || (Fn = ir.then(ur));
}
function Iu(e) {
  et(e) ? ko.push(...e) : Gs && e.id === -1 ? Gs.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), rr();
}
function Fl(e, t, o = ys + 1) {
  for (; o < qt.length; o++) {
    const n = qt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function cr(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, n) => ln(o) - ln(n)
    );
    if (ko.length = 0, Gs) {
      Gs.push(...t);
      return;
    }
    for (Gs = t, go = 0; go < Gs.length; go++) {
      const o = Gs[go];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, go = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ur(e) {
  try {
    for (ys = 0; ys < qt.length; ys++) {
      const t = qt[ys];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ys < qt.length; ys++) {
      const t = qt[ys];
      t && (t.flags &= -2);
    }
    ys = -1, qt.length = 0, cr(), Fn = null, (qt.length || ko.length) && ur();
  }
}
let Ot = null, dr = null;
function Vn(e) {
  const t = Ot;
  return Ot = e, dr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ot, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && Gn(-1);
    const r = Vn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Vn(r), n._d && Gn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Tt(e, t) {
  if (Ot === null)
    return e;
  const o = ra(Ot), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = yt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(c), n.push({
      dir: r,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function Ys(e, t, o, n) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[n];
    d && (Ds(), fs(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ns());
  }
}
const mr = Symbol("_vte"), fr = (e) => e.__isTeleport, Qo = (e) => e && (e.disabled || e.disabled === ""), Vl = (e) => e && (e.defer || e.defer === ""), Bl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qa = (e, t) => {
  const o = e && e.to;
  return Ct(o) ? t ? t(o) : null : o;
}, vr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: C, createComment: $ }
    } = v, x = Qo(t.props);
    let { shapeFlag: I, children: T, dynamicChildren: M } = t;
    if (e == null) {
      const N = t.el = C(""), z = t.anchor = C("");
      g(N, o, n), g(z, o, n);
      const j = (K, ce) => {
        I & 16 && f(
          T,
          K,
          ce,
          l,
          r,
          c,
          u,
          d
        );
      }, L = () => {
        const K = t.target = qa(t.props, _), ce = pr(K, t, C, g);
        K && (c !== "svg" && Bl(K) ? c = "svg" : c !== "mathml" && Wl(K) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), x || (j(K, ce), Mn(t, !1)));
      };
      x && (j(o, z), Mn(t, !0)), Vl(t.props) ? (t.el.__isMounted = !1, jt(() => {
        L(), delete t.el.__isMounted;
      }, r)) : L();
    } else {
      if (Vl(t.props) && e.el.__isMounted === !1) {
        jt(() => {
          vr.process(
            e,
            t,
            o,
            n,
            l,
            r,
            c,
            u,
            d,
            v
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const N = t.anchor = e.anchor, z = t.target = e.target, j = t.targetAnchor = e.targetAnchor, L = Qo(e.props), K = L ? o : z, ce = L ? N : j;
      if (c === "svg" || Bl(z) ? c = "svg" : (c === "mathml" || Wl(z)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        K,
        l,
        r,
        c,
        u
      ), $l(e, t, !0)) : d || p(
        e,
        t,
        K,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), x)
        L ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : xn(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = t.target = qa(
          t.props,
          _
        );
        te && xn(
          t,
          te,
          null,
          v,
          0
        );
      } else L && xn(
        t,
        z,
        j,
        v,
        1
      );
      Mn(t, x);
    }
  },
  remove(e, t, o, { um: n, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: p,
      props: w
    } = e;
    if (p && (l(v), l(f)), r && l(d), c & 16) {
      const g = r || !Qo(w);
      for (let _ = 0; _ < u.length; _++) {
        const C = u[_];
        n(
          C,
          t,
          o,
          g,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: xn,
  hydrate: Eu
};
function xn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && n(c, t, o), (!p || Qo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function Eu(e, t, o, n, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(C, $, x, I) {
    $.anchor = p(
      c(C),
      $,
      u(C),
      o,
      n,
      l,
      r
    ), $.targetStart = x, $.targetAnchor = I;
  }
  const g = t.target = qa(
    t.props,
    d
  ), _ = Qo(t.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          C,
          C && c(C)
        );
      else {
        t.anchor = c(e);
        let $ = C;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              t.targetStart = $;
            else if ($.data === "teleport anchor") {
              t.targetAnchor = $, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          $ = c($);
        }
        t.targetAnchor || pr(g, t, f, v), p(
          C && c(C),
          t,
          g,
          o,
          n,
          l,
          r
        );
      }
    Mn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Kt = vr;
function Mn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function pr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[mr] = r, e && (n(l, e), n(r, e)), r;
}
const Ms = Symbol("_leaveCb"), Sn = Symbol("_enterCb");
function gr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), pn(() => {
    e.isUnmounting = !0;
  }), e;
}
const os = [Function, Array], hr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: os,
  onEnter: os,
  onAfterEnter: os,
  onEnterCancelled: os,
  // leave
  onBeforeLeave: os,
  onLeave: os,
  onAfterLeave: os,
  onLeaveCancelled: os,
  // appear
  onBeforeAppear: os,
  onAppear: os,
  onAfterAppear: os,
  onAppearCancelled: os
}, yr = (e) => {
  const t = e.subTree;
  return t.component ? yr(t.component) : t;
}, Tu = {
  name: "BaseTransition",
  props: hr,
  setup(e, { slots: t }) {
    const o = xl(), n = gr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = wr(l), c = ut(e), { mode: u } = c;
      if (n.isLeaving)
        return Da(r);
      const d = Gl(r);
      if (!d)
        return Da(r);
      let v = rn(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Vt && io(d, v);
      let f = o.subTree && Gl(o.subTree);
      if (f && f.type !== Vt && !so(f, d) && yr(o).type !== Vt) {
        let p = rn(
          f,
          c,
          n,
          o
        );
        if (io(f, p), u === "out-in" && d.type !== Vt)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Da(r);
        u === "in-out" && d.type !== Vt ? p.delayLeave = (w, g, _) => {
          const C = _r(
            n,
            f
          );
          C[String(f.key)] = f, w[Ms] = () => {
            g(), w[Ms] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function wr(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Vt) {
        t = o;
        break;
      }
  }
  return t;
}
const Mu = Tu;
function _r(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function rn(e, t, o, n, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: p,
    onBeforeLeave: w,
    onLeave: g,
    onAfterLeave: _,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: x,
    onAfterAppear: I,
    onAppearCancelled: T
  } = t, M = String(e.key), N = _r(o, e), z = (K, ce) => {
    K && fs(
      K,
      n,
      9,
      ce
    );
  }, j = (K, ce) => {
    const te = ce[1];
    z(K, ce), et(K) ? K.every((Y) => Y.length <= 1) && te() : K.length <= 1 && te();
  }, L = {
    mode: c,
    persisted: u,
    beforeEnter(K) {
      let ce = d;
      if (!o.isMounted)
        if (r)
          ce = $ || d;
        else
          return;
      K[Ms] && K[Ms](
        !0
        /* cancelled */
      );
      const te = N[M];
      te && so(e, te) && te.el[Ms] && te.el[Ms](), z(ce, [K]);
    },
    enter(K) {
      let ce = v, te = f, Y = p;
      if (!o.isMounted)
        if (r)
          ce = x || v, te = I || f, Y = T || p;
        else
          return;
      let we = !1;
      const ee = K[Sn] = (W) => {
        we || (we = !0, W ? z(Y, [K]) : z(te, [K]), L.delayedLeave && L.delayedLeave(), K[Sn] = void 0);
      };
      ce ? j(ce, [K, ee]) : ee();
    },
    leave(K, ce) {
      const te = String(e.key);
      if (K[Sn] && K[Sn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ce();
      z(w, [K]);
      let Y = !1;
      const we = K[Ms] = (ee) => {
        Y || (Y = !0, ce(), ee ? z(C, [K]) : z(_, [K]), K[Ms] = void 0, N[te] === e && delete N[te]);
      };
      N[te] = e, g ? j(g, [K, we]) : we();
    },
    clone(K) {
      const ce = rn(
        K,
        t,
        o,
        n,
        l
      );
      return l && l(ce), ce;
    }
  };
  return L;
}
function Da(e) {
  if (na(e))
    return e = qs(e), e.children = null, e;
}
function Gl(e) {
  if (!na(e))
    return fr(e.type) && e.children ? wr(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: o } = e;
  if (o) {
    if (t & 16)
      return o[0];
    if (t & 32 && tt(o.default))
      return o.default();
  }
}
function io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wl(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, n = n.concat(
      wl(c.children, t, u)
    )) : (t || c.type !== Vt) && n.push(u != null ? qs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ce(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Bn = /* @__PURE__ */ new WeakMap();
function Yo(e, t, o, n, l = !1) {
  if (et(e)) {
    e.forEach(
      (_, C) => Yo(
        _,
        t && (et(t) ? t[C] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (bo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Yo(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ra(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === yt ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === yt ? Ai : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (jl(t), Ct(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Wt(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    vn(d, u, 12, [c, f]);
  else {
    const _ = Ct(d), C = Wt(d);
    if (_ || C) {
      const $ = () => {
        if (e.f) {
          const x = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            et(x) && rl(x, r);
          else if (et(x))
            x.includes(r) || x.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const I = [r];
            d.value = I, e.k && (f[e.k] = I);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : C && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const x = () => {
          $(), Bn.delete(e);
        };
        x.id = -1, Bn.set(e, x), jt(x, o);
      } else
        jl(e), $();
    }
  }
}
function jl(e) {
  const t = Bn.get(e);
  t && (t.flags |= 8, Bn.delete(e));
}
ta().requestIdleCallback;
ta().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, na = (e) => e.type.__isKeepAlive;
function Pu(e, t) {
  br(e, "a", t);
}
function Ru(e, t) {
  br(e, "da", t);
}
function br(e, t, o = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (aa(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      na(l.parent.vnode) && Lu(n, t, o, l), l = l.parent;
  }
}
function Lu(e, t, o, n) {
  const l = aa(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    rl(n[t], l);
  }, o);
}
function aa(e, t, o = Bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ds();
      const u = gn(o), d = fs(t, o, e, c);
      return u(), Ns(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const Us = (e) => (t, o = Bt) => {
  (!dn || e === "sp") && aa(e, (...n) => t(...n), o);
}, Du = Us("bm"), at = Us("m"), Nu = Us(
  "bu"
), $r = Us("u"), pn = Us(
  "bum"
), Po = Us("um"), Ou = Us(
  "sp"
), Uu = Us("rtg"), Au = Us("rtc");
function zu(e, t = Bt) {
  aa("ec", e, t);
}
const Fu = "components", Cr = Symbol.for("v-ndc");
function _l(e) {
  return Ct(e) ? Vu(Fu, e, !1) || e : e || Cr;
}
function Vu(e, t, o = !0, n = !1) {
  const l = Ot || Bt;
  if (l) {
    const r = l.type;
    {
      const u = Td(
        r,
        !1
      );
      if (u && (u === t || u === is(t) || u === Zn(is(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hl(l[e] || r[e], t) || // global registration
      Hl(l.appContext[e], t)
    );
    return !c && n ? r : c;
  }
}
function Hl(e, t) {
  return e && (e[t] || e[is(t)] || e[Zn(is(t))]);
}
function he(e, t, o, n) {
  let l;
  const r = o, c = et(e);
  if (c || Ct(e)) {
    const u = c && no(e);
    let d = !1, v = !1;
    u && (d = !as(e), v = Os(e), e = sa(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Io(ms(e[f])) : ms(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (ht(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => t(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = t(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Qt(e, t) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (et(n))
      for (let l = 0; l < n.length; l++)
        e[n[l].name] = n[l].fn;
    else n && (e[n.name] = n.key ? (...l) => {
      const r = n.fn(...l);
      return r && (r.key = n.key), r;
    } : n.fn);
  }
  return e;
}
function ot(e, t, o = {}, n, l) {
  if (Ot.ce || Ot.parent && bo(Ot.parent) && Ot.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), a(), R(
      B,
      null,
      [b("slot", o, n && n())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), a();
  const c = r && xr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !ds(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function xr(e) {
  return e.some((t) => un(t) ? !(t.type === Vt || t.type === B && !xr(t.children)) : !0) ? e : null;
}
const Ka = (e) => e ? Gr(e) ? ra(e) : Ka(e.parent) : null, Xo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ka(e.parent),
    $root: (e) => Ka(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Zu.bind(e)
  })
), Na = (e, t) => e !== yt && !e.__isScriptSetup && ft(e, t), Bu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: n, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Na(n, t))
          return c[t] = 1, n[t];
        if (l !== yt && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== yt && ft(o, t))
          return c[t] = 4, o[t];
        Ja && (c[t] = 0);
      }
    }
    const v = Xo[t];
    let f, p;
    if (v)
      return t === "$attrs" && zt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[t])
    )
      return f;
    if (o !== yt && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: n, setupState: l, ctx: r } = e;
    return Na(l, t) ? (l[t] = o, !0) : n !== yt && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== yt && u[0] !== "$" && ft(e, u) || Na(t, u) || ft(r, u) || ft(n, u) || ft(Xo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function ql(e) {
  return et(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Ja = !0;
function Wu(e) {
  const t = Ir(e), o = e.proxy, n = e.ctx;
  Ja = !1, t.beforeCreate && Kl(t.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: d,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: p,
    mounted: w,
    beforeUpdate: g,
    updated: _,
    activated: C,
    deactivated: $,
    beforeDestroy: x,
    beforeUnmount: I,
    destroyed: T,
    unmounted: M,
    render: N,
    renderTracked: z,
    renderTriggered: j,
    errorCaptured: L,
    serverPrefetch: K,
    // public API
    expose: ce,
    inheritAttrs: te,
    // assets
    components: Y,
    directives: we,
    filters: ee
  } = t;
  if (v && Gu(v, n, null), c)
    for (const ke in c) {
      const se = c[ke];
      tt(se) && (n[ke] = se.bind(o));
    }
  if (l) {
    const ke = l.call(o, o);
    ht(ke) && (e.data = co(ke));
  }
  if (Ja = !0, r)
    for (const ke in r) {
      const se = r[ke], pe = tt(se) ? se.bind(o, o) : tt(se.get) ? se.get.bind(o, o) : bs, O = !tt(se) && tt(se.set) ? se.set.bind(o) : bs, ue = P({
        get: pe,
        set: O
      });
      Object.defineProperty(n, ke, {
        enumerable: !0,
        configurable: !0,
        get: () => ue.value,
        set: (Pe) => ue.value = Pe
      });
    }
  if (u)
    for (const ke in u)
      Sr(u[ke], n, o, ke);
  if (d) {
    const ke = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(ke).forEach((se) => {
      Qu(se, ke[se]);
    });
  }
  f && Kl(f, e, "c");
  function Q(ke, se) {
    et(se) ? se.forEach((pe) => ke(pe.bind(o))) : se && ke(se.bind(o));
  }
  if (Q(Du, p), Q(at, w), Q(Nu, g), Q($r, _), Q(Pu, C), Q(Ru, $), Q(zu, L), Q(Au, z), Q(Uu, j), Q(pn, I), Q(Po, M), Q(Ou, K), et(ce))
    if (ce.length) {
      const ke = e.exposed || (e.exposed = {});
      ce.forEach((se) => {
        Object.defineProperty(ke, se, {
          get: () => o[se],
          set: (pe) => o[se] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === bs && (e.render = N), te != null && (e.inheritAttrs = te), Y && (e.components = Y), we && (e.directives = we), K && kr(e);
}
function Gu(e, t, o = bs) {
  et(e) && (e = Qa(e));
  for (const n in e) {
    const l = e[n];
    let r;
    ht(l) ? "default" in l ? r = Pn(
      l.from || n,
      l.default,
      !0
    ) : r = Pn(l.from || n) : r = Pn(l), Wt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function Kl(e, t, o) {
  fs(
    et(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Sr(e, t, o, n) {
  let l = n.includes(".") ? Mr(o, n) : () => o[n];
  if (Ct(e)) {
    const r = t[e];
    tt(r) && pt(l, r);
  } else if (tt(e))
    pt(l, e.bind(o));
  else if (ht(e))
    if (et(e))
      e.forEach((r) => Sr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && pt(l, r, e);
    }
}
function Ir(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => Wn(d, v, c, !0)
  ), Wn(d, t, c)), ht(t) && r.set(t, d), d;
}
function Wn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && Wn(e, r, o, !0), l && l.forEach(
    (c) => Wn(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = ju[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const ju = {
  data: Jl,
  props: Ql,
  emits: Ql,
  // objects
  methods: jo,
  computed: jo,
  // lifecycle
  beforeCreate: Gt,
  created: Gt,
  beforeMount: Gt,
  mounted: Gt,
  beforeUpdate: Gt,
  updated: Gt,
  beforeDestroy: Gt,
  beforeUnmount: Gt,
  destroyed: Gt,
  unmounted: Gt,
  activated: Gt,
  deactivated: Gt,
  errorCaptured: Gt,
  serverPrefetch: Gt,
  // assets
  components: jo,
  directives: jo,
  // watch
  watch: qu,
  // provide / inject
  provide: Jl,
  inject: Hu
};
function Jl(e, t) {
  return t ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Hu(e, t) {
  return jo(Qa(e), Qa(t));
}
function Qa(e) {
  if (et(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function Gt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function jo(e, t) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ql(e, t) {
  return e ? et(e) && et(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Mt(
    /* @__PURE__ */ Object.create(null),
    ql(e),
    ql(t ?? {})
  ) : t;
}
function qu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Gt(e[n], t[n]);
  return o;
}
function Er() {
  return {
    app: null,
    config: {
      isNativeTag: Ai,
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
let Ku = 0;
function Ju(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Mt({}, n)), l != null && !ht(l) && (l = null);
    const r = Er(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Ku++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Pd,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...p) {
        return c.has(f) || (f && tt(f.install) ? (c.add(f), f.install(v, ...p)) : tt(f) && (c.add(f), f(v, ...p))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, p) {
        return p ? (r.components[f] = p, v) : r.components[f];
      },
      directive(f, p) {
        return p ? (r.directives[f] = p, v) : r.directives[f];
      },
      mount(f, p, w) {
        if (!d) {
          const g = v._ceVNode || b(n, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ra(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (fs(
          u,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, p) {
        return r.provides[f] = p, v;
      },
      runWithContext(f) {
        const p = $o;
        $o = v;
        try {
          return f();
        } finally {
          $o = p;
        }
      }
    };
    return v;
  };
}
let $o = null;
function Qu(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === o && (o = Bt.provides = Object.create(n)), o[e] = t;
  }
}
function Pn(e, t, o = !1) {
  const n = xl();
  if (n || $o) {
    let l = $o ? $o._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Yu = Symbol.for("v-scx"), Xu = () => Pn(Yu);
function pt(e, t, o) {
  return Tr(e, t, o);
}
function Tr(e, t, o = yt) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (dn) {
    if (r === "sync") {
      const g = Xu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = bs, g.resume = bs, g.pause = bs, g;
    }
  }
  const f = Bt;
  u.call = (g, _, C) => fs(g, f, _, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    jt(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : yl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = Cu(e, t, u);
  return dn && (v ? v.push(w) : d && w()), w;
}
function Zu(e, t, o) {
  const n = this.proxy, l = Ct(e) ? e.includes(".") ? Mr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = gn(this), u = Tr(l, r.bind(n), o);
  return c(), u;
}
function Mr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const ed = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Js(t)}Modifiers`];
function td(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || yt;
  let l = o;
  const r = t.startsWith("update:"), c = r && ed(n, t.slice(7));
  c && (c.trim && (l = o.map((f) => Ct(f) ? f.trim() : f)), c.number && (l = o.map(ea)));
  let u, d = n[u = Ta(t)] || // also try camelCase event handler (#2249)
  n[u = Ta(is(t))];
  !d && r && (d = n[u = Ta(Js(t))]), d && fs(
    d,
    e,
    6,
    l
  );
  const v = n[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, fs(
      v,
      e,
      6,
      l
    );
  }
}
const sd = /* @__PURE__ */ new WeakMap();
function Pr(e, t, o = !1) {
  const n = o ? sd : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Pr(v, t, !0);
      f && (u = !0, Mt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (ht(e) && n.set(e, null), null) : (et(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), ht(e) && n.set(e, c), c);
}
function la(e, t) {
  return !e || !Yn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Js(t)) || ft(e, t));
}
function Yl(e) {
  const {
    type: t,
    vnode: o,
    proxy: n,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: d,
    render: v,
    renderCache: f,
    props: p,
    data: w,
    setupState: g,
    ctx: _,
    inheritAttrs: C
  } = e, $ = Vn(e);
  let x, I;
  try {
    if (o.shapeFlag & 4) {
      const M = l || n, N = M;
      x = _s(
        v.call(
          N,
          M,
          f,
          p,
          g,
          w,
          _
        )
      ), I = u;
    } else {
      const M = t;
      x = _s(
        M.length > 1 ? M(
          p,
          { attrs: u, slots: c, emit: d }
        ) : M(
          p,
          null
        )
      ), I = t.props ? u : od(u);
    }
  } catch (M) {
    Zo.length = 0, oa(M, e, 1), x = b(Vt);
  }
  let T = x;
  if (I && C !== !1) {
    const M = Object.keys(I), { shapeFlag: N } = T;
    M.length && N & 7 && (r && M.some(il) && (I = nd(
      I,
      r
    )), T = qs(T, I, !1, !0));
  }
  return o.dirs && (T = qs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && io(T, o.transition), x = T, Vn($), x;
}
const od = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Yn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, nd = (e, t) => {
  const o = {};
  for (const n in e)
    (!il(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function ad(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Xl(n, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== n[w] && !la(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Xl(n, c, v) : !0 : !!c;
  return !1;
}
function Xl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !la(o, r))
      return !0;
  }
  return !1;
}
function ld({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Rr = {}, Lr = () => Object.create(Rr), Dr = (e) => Object.getPrototypeOf(e) === Rr;
function id(e, t, o, n = !1) {
  const l = {}, r = Lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : gu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function rd(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ut(l), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const f = e.vnode.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        let w = f[p];
        if (la(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = is(w);
            l[_] = Ya(
              d,
              u,
              _,
              g,
              e,
              !1
            );
          }
        else
          g !== r[w] && (r[w] = g, v = !0);
      }
    }
  } else {
    Nr(e, t, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Js(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Ya(
        d,
        u,
        p,
        void 0,
        e,
        !0
      )) : delete l[p]);
    if (r !== u)
      for (const p in r)
        (!t || !ft(t, p)) && (delete r[p], v = !0);
  }
  v && Ps(e.attrs, "set", "");
}
function Nr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (qo(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = is(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : la(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || yt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = Ya(
        l,
        d,
        p,
        v[p],
        e,
        !ft(v, p)
      );
    }
  }
  return c;
}
function Ya(e, t, o, n, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && n === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          n = v[o];
        else {
          const f = gn(l);
          n = v[o] = d.call(
            null,
            t
          ), f();
        }
      } else
        n = d;
      l.ce && l.ce._setProp(o, n);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Js(o)) && (n = !0));
  }
  return n;
}
const cd = /* @__PURE__ */ new WeakMap();
function Or(e, t, o = !1) {
  const n = o ? cd : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Or(p, t, !0);
      Mt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return ht(e) && n.set(e, wo), wo;
  if (et(r))
    for (let f = 0; f < r.length; f++) {
      const p = is(r[f]);
      Zl(p) && (c[p] = yt);
    }
  else if (r)
    for (const f in r) {
      const p = is(f);
      if (Zl(p)) {
        const w = r[f], g = c[p] = et(w) || tt(w) ? { type: w } : Mt({}, w), _ = g.type;
        let C = !1, $ = !0;
        if (et(_))
          for (let x = 0; x < _.length; ++x) {
            const I = _[x], T = tt(I) && I.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          C = tt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = $, (C || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return ht(e) && n.set(e, v), v;
}
function Zl(e) {
  return e[0] !== "$" && !qo(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => et(e) ? e.map(_s) : [_s(e)], ud = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => bl(t(...l)), o);
  return n._c = !1, n;
}, Ur = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = ud(l, r, n);
    else if (r != null) {
      const c = bl(r);
      t[l] = () => c;
    }
  }
}, Ar = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, zr = (e, t, o) => {
  for (const n in t)
    (o || !kl(n)) && (e[n] = t[n]);
}, dd = (e, t, o) => {
  const n = e.slots = Lr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (zr(n, t, o), o && Bi(n, "_", l, !0)) : Ur(t, n);
  } else t && Ar(e, t);
}, md = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = yt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : zr(l, t, o) : (r = !t.$stable, Ur(t, l)), c = t;
  } else t && (Ar(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, jt = hd;
function fd(e) {
  return vd(e);
}
function vd(e, t) {
  const o = ta();
  o.__VUE__ = !0;
  const {
    insert: n,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: p,
    nextSibling: w,
    setScopeId: g = bs,
    insertStaticContent: _
  } = e, C = (E, U, ie, Ee = null, xe = null, Se = null, X = void 0, H = null, ve = !!U.dynamicChildren) => {
    if (E === U)
      return;
    E && !so(E, U) && (Ee = le(E), Pe(E, xe, Se, !0), E = null), U.patchFlag === -2 && (ve = !1, U.dynamicChildren = null);
    const { type: be, ref: Ke, shapeFlag: We } = U;
    switch (be) {
      case ia:
        $(E, U, ie, Ee);
        break;
      case Vt:
        x(E, U, ie, Ee);
        break;
      case Ua:
        E == null && I(U, ie, Ee, X);
        break;
      case B:
        Y(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve
        );
        break;
      default:
        We & 1 ? N(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve
        ) : We & 6 ? we(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve
        ) : (We & 64 || We & 128) && be.process(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve,
          fe
        );
    }
    Ke != null && xe ? Yo(Ke, E && E.ref, Se, U || E, !U) : Ke == null && E && E.ref != null && Yo(E.ref, null, Se, E, !0);
  }, $ = (E, U, ie, Ee) => {
    if (E == null)
      n(
        U.el = u(U.children),
        ie,
        Ee
      );
    else {
      const xe = U.el = E.el;
      U.children !== E.children && v(xe, U.children);
    }
  }, x = (E, U, ie, Ee) => {
    E == null ? n(
      U.el = d(U.children || ""),
      ie,
      Ee
    ) : U.el = E.el;
  }, I = (E, U, ie, Ee) => {
    [E.el, E.anchor] = _(
      E.children,
      U,
      ie,
      Ee,
      E.el,
      E.anchor
    );
  }, T = ({ el: E, anchor: U }, ie, Ee) => {
    let xe;
    for (; E && E !== U; )
      xe = w(E), n(E, ie, Ee), E = xe;
    n(U, ie, Ee);
  }, M = ({ el: E, anchor: U }) => {
    let ie;
    for (; E && E !== U; )
      ie = w(E), l(E), E = ie;
    l(U);
  }, N = (E, U, ie, Ee, xe, Se, X, H, ve) => {
    if (U.type === "svg" ? X = "svg" : U.type === "math" && (X = "mathml"), E == null)
      z(
        U,
        ie,
        Ee,
        xe,
        Se,
        X,
        H,
        ve
      );
    else {
      const be = E.el && E.el._isVueCE ? E.el : null;
      try {
        be && be._beginPatch(), K(
          E,
          U,
          xe,
          Se,
          X,
          H,
          ve
        );
      } finally {
        be && be._endPatch();
      }
    }
  }, z = (E, U, ie, Ee, xe, Se, X, H) => {
    let ve, be;
    const { props: Ke, shapeFlag: We, transition: ge, dirs: J } = E;
    if (ve = E.el = c(
      E.type,
      Se,
      Ke && Ke.is,
      Ke
    ), We & 8 ? f(ve, E.children) : We & 16 && L(
      E.children,
      ve,
      null,
      Ee,
      xe,
      Oa(E, Se),
      X,
      H
    ), J && Ys(E, null, Ee, "created"), j(ve, E, E.scopeId, X, Ee), Ke) {
      for (const Te in Ke)
        Te !== "value" && !qo(Te) && r(ve, Te, null, Ke[Te], Se, Ee);
      "value" in Ke && r(ve, "value", null, Ke.value, Se), (be = Ke.onVnodeBeforeMount) && ps(be, Ee, E);
    }
    J && Ys(E, null, Ee, "beforeMount");
    const qe = pd(xe, ge);
    qe && ge.beforeEnter(ve), n(ve, U, ie), ((be = Ke && Ke.onVnodeMounted) || qe || J) && jt(() => {
      be && ps(be, Ee, E), qe && ge.enter(ve), J && Ys(E, null, Ee, "mounted");
    }, xe);
  }, j = (E, U, ie, Ee, xe) => {
    if (ie && g(E, ie), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        g(E, Ee[Se]);
    if (xe) {
      let Se = xe.subTree;
      if (U === Se || Vr(Se.type) && (Se.ssContent === U || Se.ssFallback === U)) {
        const X = xe.vnode;
        j(
          E,
          X,
          X.scopeId,
          X.slotScopeIds,
          xe.parent
        );
      }
    }
  }, L = (E, U, ie, Ee, xe, Se, X, H, ve = 0) => {
    for (let be = ve; be < E.length; be++) {
      const Ke = E[be] = H ? js(E[be]) : _s(E[be]);
      C(
        null,
        Ke,
        U,
        ie,
        Ee,
        xe,
        Se,
        X,
        H
      );
    }
  }, K = (E, U, ie, Ee, xe, Se, X) => {
    const H = U.el = E.el;
    let { patchFlag: ve, dynamicChildren: be, dirs: Ke } = U;
    ve |= E.patchFlag & 16;
    const We = E.props || yt, ge = U.props || yt;
    let J;
    if (ie && Xs(ie, !1), (J = ge.onVnodeBeforeUpdate) && ps(J, ie, U, E), Ke && Ys(U, E, ie, "beforeUpdate"), ie && Xs(ie, !0), (We.innerHTML && ge.innerHTML == null || We.textContent && ge.textContent == null) && f(H, ""), be ? ce(
      E.dynamicChildren,
      be,
      H,
      ie,
      Ee,
      Oa(U, xe),
      Se
    ) : X || se(
      E,
      U,
      H,
      null,
      ie,
      Ee,
      Oa(U, xe),
      Se,
      !1
    ), ve > 0) {
      if (ve & 16)
        te(H, We, ge, ie, xe);
      else if (ve & 2 && We.class !== ge.class && r(H, "class", null, ge.class, xe), ve & 4 && r(H, "style", We.style, ge.style, xe), ve & 8) {
        const qe = U.dynamicProps;
        for (let Te = 0; Te < qe.length; Te++) {
          const Xe = qe[Te], Fe = We[Xe], Oe = ge[Xe];
          (Oe !== Fe || Xe === "value") && r(H, Xe, Fe, Oe, xe, ie);
        }
      }
      ve & 1 && E.children !== U.children && f(H, U.children);
    } else !X && be == null && te(H, We, ge, ie, xe);
    ((J = ge.onVnodeUpdated) || Ke) && jt(() => {
      J && ps(J, ie, U, E), Ke && Ys(U, E, ie, "updated");
    }, Ee);
  }, ce = (E, U, ie, Ee, xe, Se, X) => {
    for (let H = 0; H < U.length; H++) {
      const ve = E[H], be = U[H], Ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ve.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ve.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(ve, be) || // - In the case of a component, it could contain anything.
        ve.shapeFlag & 198) ? p(ve.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      C(
        ve,
        be,
        Ke,
        null,
        Ee,
        xe,
        Se,
        X,
        !0
      );
    }
  }, te = (E, U, ie, Ee, xe) => {
    if (U !== ie) {
      if (U !== yt)
        for (const Se in U)
          !qo(Se) && !(Se in ie) && r(
            E,
            Se,
            U[Se],
            null,
            xe,
            Ee
          );
      for (const Se in ie) {
        if (qo(Se)) continue;
        const X = ie[Se], H = U[Se];
        X !== H && Se !== "value" && r(E, Se, H, X, xe, Ee);
      }
      "value" in ie && r(E, "value", U.value, ie.value, xe);
    }
  }, Y = (E, U, ie, Ee, xe, Se, X, H, ve) => {
    const be = U.el = E ? E.el : u(""), Ke = U.anchor = E ? E.anchor : u("");
    let { patchFlag: We, dynamicChildren: ge, slotScopeIds: J } = U;
    J && (H = H ? H.concat(J) : J), E == null ? (n(be, ie, Ee), n(Ke, ie, Ee), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      ie,
      Ke,
      xe,
      Se,
      X,
      H,
      ve
    )) : We > 0 && We & 64 && ge && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (ce(
      E.dynamicChildren,
      ge,
      ie,
      xe,
      Se,
      X,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || xe && U === xe.subTree) && $l(
      E,
      U,
      !0
      /* shallow */
    )) : se(
      E,
      U,
      ie,
      Ke,
      xe,
      Se,
      X,
      H,
      ve
    );
  }, we = (E, U, ie, Ee, xe, Se, X, H, ve) => {
    U.slotScopeIds = H, E == null ? U.shapeFlag & 512 ? xe.ctx.activate(
      U,
      ie,
      Ee,
      X,
      ve
    ) : ee(
      U,
      ie,
      Ee,
      xe,
      Se,
      X,
      ve
    ) : W(E, U, ve);
  }, ee = (E, U, ie, Ee, xe, Se, X) => {
    const H = E.component = Cd(
      E,
      Ee,
      xe
    );
    if (na(E) && (H.ctx.renderer = fe), xd(H, !1, X), H.asyncDep) {
      if (xe && xe.registerDep(H, Q, X), !E.el) {
        const ve = H.subTree = b(Vt);
        x(null, ve, U, ie), E.placeholder = ve.el;
      }
    } else
      Q(
        H,
        E,
        U,
        ie,
        xe,
        Se,
        X
      );
  }, W = (E, U, ie) => {
    const Ee = U.component = E.component;
    if (ad(E, U, ie))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        ke(Ee, U, ie);
        return;
      } else
        Ee.next = U, Ee.update();
    else
      U.el = E.el, Ee.vnode = U;
  }, Q = (E, U, ie, Ee, xe, Se, X) => {
    const H = () => {
      if (E.isMounted) {
        let { next: We, bu: ge, u: J, parent: qe, vnode: Te } = E;
        {
          const de = Fr(E);
          if (de) {
            We && (We.el = Te.el, ke(E, We, X)), de.asyncDep.then(() => {
              E.isUnmounted || H();
            });
            return;
          }
        }
        let Xe = We, Fe;
        Xs(E, !1), We ? (We.el = Te.el, ke(E, We, X)) : We = Te, ge && Tn(ge), (Fe = We.props && We.props.onVnodeBeforeUpdate) && ps(Fe, qe, We, Te), Xs(E, !0);
        const Oe = Yl(E), G = E.subTree;
        E.subTree = Oe, C(
          G,
          Oe,
          // parent may have changed if it's in a teleport
          p(G.el),
          // anchor may have changed if it's in a fragment
          le(G),
          E,
          xe,
          Se
        ), We.el = Oe.el, Xe === null && ld(E, Oe.el), J && jt(J, xe), (Fe = We.props && We.props.onVnodeUpdated) && jt(
          () => ps(Fe, qe, We, Te),
          xe
        );
      } else {
        let We;
        const { el: ge, props: J } = U, { bm: qe, m: Te, parent: Xe, root: Fe, type: Oe } = E, G = bo(U);
        Xs(E, !1), qe && Tn(qe), !G && (We = J && J.onVnodeBeforeMount) && ps(We, Xe, U), Xs(E, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(Oe);
          const de = E.subTree = Yl(E);
          C(
            null,
            de,
            ie,
            Ee,
            E,
            xe,
            Se
          ), U.el = de.el;
        }
        if (Te && jt(Te, xe), !G && (We = J && J.onVnodeMounted)) {
          const de = U;
          jt(
            () => ps(We, Xe, de),
            xe
          );
        }
        (U.shapeFlag & 256 || Xe && bo(Xe.vnode) && Xe.vnode.shapeFlag & 256) && E.a && jt(E.a, xe), E.isMounted = !0, U = ie = Ee = null;
      }
    };
    E.scope.on();
    const ve = E.effect = new Hi(H);
    E.scope.off();
    const be = E.update = ve.run.bind(ve), Ke = E.job = ve.runIfDirty.bind(ve);
    Ke.i = E, Ke.id = E.uid, ve.scheduler = () => yl(Ke), Xs(E, !0), be();
  }, ke = (E, U, ie) => {
    U.component = E;
    const Ee = E.vnode.props;
    E.vnode = U, E.next = null, rd(E, U.props, Ee, ie), md(E, U.children, ie), Ds(), Fl(E), Ns();
  }, se = (E, U, ie, Ee, xe, Se, X, H, ve = !1) => {
    const be = E && E.children, Ke = E ? E.shapeFlag : 0, We = U.children, { patchFlag: ge, shapeFlag: J } = U;
    if (ge > 0) {
      if (ge & 128) {
        O(
          be,
          We,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve
        );
        return;
      } else if (ge & 256) {
        pe(
          be,
          We,
          ie,
          Ee,
          xe,
          Se,
          X,
          H,
          ve
        );
        return;
      }
    }
    J & 8 ? (Ke & 16 && Ve(be, xe, Se), We !== be && f(ie, We)) : Ke & 16 ? J & 16 ? O(
      be,
      We,
      ie,
      Ee,
      xe,
      Se,
      X,
      H,
      ve
    ) : Ve(be, xe, Se, !0) : (Ke & 8 && f(ie, ""), J & 16 && L(
      We,
      ie,
      Ee,
      xe,
      Se,
      X,
      H,
      ve
    ));
  }, pe = (E, U, ie, Ee, xe, Se, X, H, ve) => {
    E = E || wo, U = U || wo;
    const be = E.length, Ke = U.length, We = Math.min(be, Ke);
    let ge;
    for (ge = 0; ge < We; ge++) {
      const J = U[ge] = ve ? js(U[ge]) : _s(U[ge]);
      C(
        E[ge],
        J,
        ie,
        null,
        xe,
        Se,
        X,
        H,
        ve
      );
    }
    be > Ke ? Ve(
      E,
      xe,
      Se,
      !0,
      !1,
      We
    ) : L(
      U,
      ie,
      Ee,
      xe,
      Se,
      X,
      H,
      ve,
      We
    );
  }, O = (E, U, ie, Ee, xe, Se, X, H, ve) => {
    let be = 0;
    const Ke = U.length;
    let We = E.length - 1, ge = Ke - 1;
    for (; be <= We && be <= ge; ) {
      const J = E[be], qe = U[be] = ve ? js(U[be]) : _s(U[be]);
      if (so(J, qe))
        C(
          J,
          qe,
          ie,
          null,
          xe,
          Se,
          X,
          H,
          ve
        );
      else
        break;
      be++;
    }
    for (; be <= We && be <= ge; ) {
      const J = E[We], qe = U[ge] = ve ? js(U[ge]) : _s(U[ge]);
      if (so(J, qe))
        C(
          J,
          qe,
          ie,
          null,
          xe,
          Se,
          X,
          H,
          ve
        );
      else
        break;
      We--, ge--;
    }
    if (be > We) {
      if (be <= ge) {
        const J = ge + 1, qe = J < Ke ? U[J].el : Ee;
        for (; be <= ge; )
          C(
            null,
            U[be] = ve ? js(U[be]) : _s(U[be]),
            ie,
            qe,
            xe,
            Se,
            X,
            H,
            ve
          ), be++;
      }
    } else if (be > ge)
      for (; be <= We; )
        Pe(E[be], xe, Se, !0), be++;
    else {
      const J = be, qe = be, Te = /* @__PURE__ */ new Map();
      for (be = qe; be <= ge; be++) {
        const D = U[be] = ve ? js(U[be]) : _s(U[be]);
        D.key != null && Te.set(D.key, be);
      }
      let Xe, Fe = 0;
      const Oe = ge - qe + 1;
      let G = !1, de = 0;
      const ye = new Array(Oe);
      for (be = 0; be < Oe; be++) ye[be] = 0;
      for (be = J; be <= We; be++) {
        const D = E[be];
        if (Fe >= Oe) {
          Pe(D, xe, Se, !0);
          continue;
        }
        let A;
        if (D.key != null)
          A = Te.get(D.key);
        else
          for (Xe = qe; Xe <= ge; Xe++)
            if (ye[Xe - qe] === 0 && so(D, U[Xe])) {
              A = Xe;
              break;
            }
        A === void 0 ? Pe(D, xe, Se, !0) : (ye[A - qe] = be + 1, A >= de ? de = A : G = !0, C(
          D,
          U[A],
          ie,
          null,
          xe,
          Se,
          X,
          H,
          ve
        ), Fe++);
      }
      const Qe = G ? gd(ye) : wo;
      for (Xe = Qe.length - 1, be = Oe - 1; be >= 0; be--) {
        const D = qe + be, A = U[D], Z = U[D + 1], Ae = D + 1 < Ke ? (
          // #13559, fallback to el placeholder for unresolved async component
          Z.el || Z.placeholder
        ) : Ee;
        ye[be] === 0 ? C(
          null,
          A,
          ie,
          Ae,
          xe,
          Se,
          X,
          H,
          ve
        ) : G && (Xe < 0 || be !== Qe[Xe] ? ue(A, ie, Ae, 2) : Xe--);
      }
    }
  }, ue = (E, U, ie, Ee, xe = null) => {
    const { el: Se, type: X, transition: H, children: ve, shapeFlag: be } = E;
    if (be & 6) {
      ue(E.component.subTree, U, ie, Ee);
      return;
    }
    if (be & 128) {
      E.suspense.move(U, ie, Ee);
      return;
    }
    if (be & 64) {
      X.move(E, U, ie, fe);
      return;
    }
    if (X === B) {
      n(Se, U, ie);
      for (let We = 0; We < ve.length; We++)
        ue(ve[We], U, ie, Ee);
      n(E.anchor, U, ie);
      return;
    }
    if (X === Ua) {
      T(E, U, ie);
      return;
    }
    if (Ee !== 2 && be & 1 && H)
      if (Ee === 0)
        H.beforeEnter(Se), n(Se, U, ie), jt(() => H.enter(Se), xe);
      else {
        const { leave: We, delayLeave: ge, afterLeave: J } = H, qe = () => {
          E.ctx.isUnmounted ? l(Se) : n(Se, U, ie);
        }, Te = () => {
          Se._isLeaving && Se[Ms](
            !0
            /* cancelled */
          ), We(Se, () => {
            qe(), J && J();
          });
        };
        ge ? ge(Se, qe, Te) : Te();
      }
    else
      n(Se, U, ie);
  }, Pe = (E, U, ie, Ee = !1, xe = !1) => {
    const {
      type: Se,
      props: X,
      ref: H,
      children: ve,
      dynamicChildren: be,
      shapeFlag: Ke,
      patchFlag: We,
      dirs: ge,
      cacheIndex: J
    } = E;
    if (We === -2 && (xe = !1), H != null && (Ds(), Yo(H, null, ie, E, !0), Ns()), J != null && (U.renderCache[J] = void 0), Ke & 256) {
      U.ctx.deactivate(E);
      return;
    }
    const qe = Ke & 1 && ge, Te = !bo(E);
    let Xe;
    if (Te && (Xe = X && X.onVnodeBeforeUnmount) && ps(Xe, U, E), Ke & 6)
      Ue(E.component, ie, Ee);
    else {
      if (Ke & 128) {
        E.suspense.unmount(ie, Ee);
        return;
      }
      qe && Ys(E, null, U, "beforeUnmount"), Ke & 64 ? E.type.remove(
        E,
        U,
        ie,
        fe,
        Ee
      ) : be && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !be.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== B || We > 0 && We & 64) ? Ve(
        be,
        U,
        ie,
        !1,
        !0
      ) : (Se === B && We & 384 || !xe && Ke & 16) && Ve(ve, U, ie), Ee && _e(E);
    }
    (Te && (Xe = X && X.onVnodeUnmounted) || qe) && jt(() => {
      Xe && ps(Xe, U, E), qe && Ys(E, null, U, "unmounted");
    }, ie);
  }, _e = (E) => {
    const { type: U, el: ie, anchor: Ee, transition: xe } = E;
    if (U === B) {
      De(ie, Ee);
      return;
    }
    if (U === Ua) {
      M(E);
      return;
    }
    const Se = () => {
      l(ie), xe && !xe.persisted && xe.afterLeave && xe.afterLeave();
    };
    if (E.shapeFlag & 1 && xe && !xe.persisted) {
      const { leave: X, delayLeave: H } = xe, ve = () => X(ie, Se);
      H ? H(E.el, Se, ve) : ve();
    } else
      Se();
  }, De = (E, U) => {
    let ie;
    for (; E !== U; )
      ie = w(E), l(E), E = ie;
    l(U);
  }, Ue = (E, U, ie) => {
    const { bum: Ee, scope: xe, job: Se, subTree: X, um: H, m: ve, a: be } = E;
    ei(ve), ei(be), Ee && Tn(Ee), xe.stop(), Se && (Se.flags |= 8, Pe(X, E, U, ie)), H && jt(H, U), jt(() => {
      E.isUnmounted = !0;
    }, U);
  }, Ve = (E, U, ie, Ee = !1, xe = !1, Se = 0) => {
    for (let X = Se; X < E.length; X++)
      Pe(E[X], U, ie, Ee, xe);
  }, le = (E) => {
    if (E.shapeFlag & 6)
      return le(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const U = w(E.anchor || E.el), ie = U && U[mr];
    return ie ? w(ie) : U;
  };
  let oe = !1;
  const Re = (E, U, ie) => {
    E == null ? U._vnode && Pe(U._vnode, null, null, !0) : C(
      U._vnode || null,
      E,
      U,
      null,
      null,
      null,
      ie
    ), U._vnode = E, oe || (oe = !0, Fl(), cr(), oe = !1);
  }, fe = {
    p: C,
    um: Pe,
    m: ue,
    r: _e,
    mt: ee,
    mc: L,
    pc: se,
    pbc: ce,
    n: le,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: Ju(Re)
  };
}
function Oa({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function pd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $l(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (et(n) && et(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === ia && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Vt && !u.el && (u.el = c.el);
    }
}
function gd(e) {
  const t = e.slice(), o = [0];
  let n, l, r, c, u;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[n] = l, o.push(n);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[n] = o[r - 1]), o[r] = n);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = t[c];
  return o;
}
function Fr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fr(t);
}
function ei(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Vr = (e) => e.__isSuspense;
function hd(e, t) {
  t && t.pendingBranch ? et(e) ? t.effects.push(...e) : t.effects.push(e) : Iu(e);
}
const B = Symbol.for("v-fgt"), ia = Symbol.for("v-txt"), Vt = Symbol.for("v-cmt"), Ua = Symbol.for("v-stc"), Zo = [];
let es = null;
function a(e = !1) {
  Zo.push(es = e ? null : []);
}
function yd() {
  Zo.pop(), es = Zo[Zo.length - 1] || null;
}
let cn = 1;
function Gn(e, t = !1) {
  cn += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Br(e) {
  return e.dynamicChildren = cn > 0 ? es || wo : null, yd(), cn > 0 && es && es.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Br(
    s(
      e,
      t,
      o,
      n,
      l,
      r,
      !0
    )
  );
}
function R(e, t, o, n, l) {
  return Br(
    b(
      e,
      t,
      o,
      n,
      l,
      !0
    )
  );
}
function un(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wr = ({ key: e }) => e ?? null, Rn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || Wt(e) || tt(e) ? { i: Ot, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, n = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wr(t),
    ref: t && Rn(t),
    scopeId: dr,
    slotScopeIds: null,
    children: o,
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
    patchFlag: n,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return u ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= Ct(o) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const b = wd;
function wd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === Cr) && (e = Vt), un(e)) {
    const u = qs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Cl(u, o), cn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (Md(e) && (e = e.__vccOpts), t) {
    t = _d(t);
    let { class: u, style: d } = t;
    u && !Ct(u) && (t.class = Be(u)), ht(d) && (hl(d) && !et(d) && (d = Mt({}, d)), t.style = Rt(d));
  }
  const c = Ct(e) ? 1 : Vr(e) ? 128 : fr(e) ? 64 : ht(e) ? 4 : tt(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    n,
    l,
    c,
    r,
    !0
  );
}
function _d(e) {
  return e ? hl(e) || Dr(e) ? Mt({}, e) : e : null;
}
function qs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? kd(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Wr(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? et(r) ? r.concat(Rn(t)) : [r, Rn(t)] : Rn(t)
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
    patchFlag: t && e.type !== B ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && qs(e.ssContent),
    ssFallback: e.ssFallback && qs(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && io(
    f,
    d.clone(f)
  ), f;
}
function S(e = " ", t = 0) {
  return b(ia, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), R(Vt, null, e)) : b(Vt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? b(Vt) : et(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : b(ia, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qs(e);
}
function Cl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (et(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Dr(t) ? t._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Ot }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [S(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function kd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Be([t.class, n.class]));
      else if (l === "style")
        t.style = Rt([t.style, n.style]);
      else if (Yn(l)) {
        const r = t[l], c = n[l];
        c && r !== c && !(et(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function ps(e, t, o, n = null) {
  fs(e, t, 7, [
    o,
    n
  ]);
}
const bd = Er();
let $d = 0;
function Cd(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || bd, r = {
    uid: $d++,
    vnode: e,
    type: n,
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
    scope: new Qc(
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
    propsOptions: Or(n, l),
    emitsOptions: Pr(n, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: yt,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: yt,
    data: yt,
    props: yt,
    attrs: yt,
    slots: yt,
    refs: yt,
    setupState: yt,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = td.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const xl = () => Bt || Ot;
let jn, Xa;
{
  const e = ta(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  jn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Xa = t(
    "__VUE_SSR_SETTERS__",
    (o) => dn = o
  );
}
const gn = (e) => {
  const t = Bt;
  return jn(e), e.scope.on(), () => {
    e.scope.off(), jn(t);
  };
}, ti = () => {
  Bt && Bt.scope.off(), jn(null);
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function xd(e, t = !1, o = !1) {
  t && Xa(t);
  const { props: n, children: l } = e.vnode, r = Gr(e);
  id(e, n, r, t), dd(e, l, o || t);
  const c = r ? Sd(e, t) : void 0;
  return t && Xa(!1), c;
}
function Sd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bu);
  const { setup: n } = o;
  if (n) {
    Ds();
    const l = e.setupContext = n.length > 1 ? Ed(e) : null, r = gn(e), c = vn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = zi(c);
    if (Ns(), r(), (u || e.sp) && !bo(e) && kr(e), u) {
      if (c.then(ti, ti), t)
        return c.then((d) => {
          si(e, d);
        }).catch((d) => {
          oa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      si(e, c);
  } else
    jr(e);
}
function si(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ht(t) && (e.setupState = lr(t)), jr(e);
}
function jr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || bs);
  {
    const l = gn(e);
    Ds();
    try {
      Wu(e);
    } finally {
      Ns(), l();
    }
  }
}
const Id = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function Ed(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Id),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ra(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lr(hu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Xo)
        return Xo[o](e);
    },
    has(t, o) {
      return o in t || o in Xo;
    }
  })) : e.proxy;
}
function Td(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Md(e) {
  return tt(e) && "__vccOpts" in e;
}
const P = (e, t) => bu(e, t, dn);
function Ro(e, t, o) {
  try {
    Gn(-1);
    const n = arguments.length;
    return n === 2 ? ht(t) && !et(t) ? un(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && un(o) && (o = [o]), b(e, t, o));
  } finally {
    Gn(1);
  }
}
const Pd = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Za;
const oi = typeof window < "u" && window.trustedTypes;
if (oi)
  try {
    Za = /* @__PURE__ */ oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hr = Za ? (e) => Za.createHTML(e) : (e) => e, Rd = "http://www.w3.org/2000/svg", Ld = "http://www.w3.org/1998/Math/MathML", Ts = typeof document < "u" ? document : null, ni = Ts && /* @__PURE__ */ Ts.createElement("template"), Dd = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Ts.createElementNS(Rd, e) : t === "mathml" ? Ts.createElementNS(Ld, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Ts.createTextNode(e),
  createComment: (e) => Ts.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ts.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, n, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ni.innerHTML = Hr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ni.content;
      if (n === "svg" || n === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, o);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, Vs = "transition", Uo = "animation", Eo = Symbol("_vtc"), qr = {
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
}, Kr = /* @__PURE__ */ Mt(
  {},
  hr,
  qr
), Nd = (e) => (e.displayName = "Transition", e.props = Kr, e), Od = /* @__PURE__ */ Nd(
  (e, { slots: t }) => Ro(Mu, Jr(e), t)
), Zs = (e, t = []) => {
  et(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ai = (e) => e ? et(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jr(e) {
  const t = {};
  for (const Y in e)
    Y in qr || (t[Y] = e[Y]);
  if (e.css === !1)
    return t;
  const {
    name: o = "v",
    type: n,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = c,
    appearToClass: f = u,
    leaveFromClass: p = `${o}-leave-from`,
    leaveActiveClass: w = `${o}-leave-active`,
    leaveToClass: g = `${o}-leave-to`
  } = e, _ = Ud(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: x,
    onEnter: I,
    onEnterCancelled: T,
    onLeave: M,
    onLeaveCancelled: N,
    onBeforeAppear: z = x,
    onAppear: j = I,
    onAppearCancelled: L = T
  } = t, K = (Y, we, ee, W) => {
    Y._enterCancelled = W, Bs(Y, we ? f : u), Bs(Y, we ? v : c), ee && ee();
  }, ce = (Y, we) => {
    Y._isLeaving = !1, Bs(Y, p), Bs(Y, g), Bs(Y, w), we && we();
  }, te = (Y) => (we, ee) => {
    const W = Y ? j : I, Q = () => K(we, Y, ee);
    Zs(W, [we, Q]), li(() => {
      Bs(we, Y ? d : r), hs(we, Y ? f : u), ai(W) || ii(we, n, C, Q);
    });
  };
  return Mt(t, {
    onBeforeEnter(Y) {
      Zs(x, [Y]), hs(Y, r), hs(Y, c);
    },
    onBeforeAppear(Y) {
      Zs(z, [Y]), hs(Y, d), hs(Y, v);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(Y, we) {
      Y._isLeaving = !0;
      const ee = () => ce(Y, we);
      hs(Y, p), Y._enterCancelled ? (hs(Y, w), el(Y)) : (el(Y), hs(Y, w)), li(() => {
        Y._isLeaving && (Bs(Y, p), hs(Y, g), ai(M) || ii(Y, n, $, ee));
      }), Zs(M, [Y, ee]);
    },
    onEnterCancelled(Y) {
      K(Y, !1, void 0, !0), Zs(T, [Y]);
    },
    onAppearCancelled(Y) {
      K(Y, !0, void 0, !0), Zs(L, [Y]);
    },
    onLeaveCancelled(Y) {
      ce(Y), Zs(N, [Y]);
    }
  });
}
function Ud(e) {
  if (e == null)
    return null;
  if (ht(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const t = Aa(e);
    return [t, t];
  }
}
function Aa(e) {
  return Bc(e);
}
function hs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Bs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ad = 0;
function ii(e, t, o, n) {
  const l = e._endId = ++Ad, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Qr(e, t);
  if (!c)
    return n();
  const v = c + "end";
  let f = 0;
  const p = () => {
    e.removeEventListener(v, w), r();
  }, w = (g) => {
    g.target === e && ++f >= d && p();
  };
  setTimeout(() => {
    f < d && p();
  }, u + 1), e.addEventListener(v, w);
}
function Qr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${Vs}Delay`), r = n(`${Vs}Duration`), c = ri(l, r), u = n(`${Uo}Delay`), d = n(`${Uo}Duration`), v = ri(u, d);
  let f = null, p = 0, w = 0;
  t === Vs ? c > 0 && (f = Vs, p = c, w = r.length) : t === Uo ? v > 0 && (f = Uo, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Vs : Uo : null, w = f ? f === Vs ? r.length : d.length : 0);
  const g = f === Vs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Vs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function ri(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => ci(o) + ci(e[n])));
}
function ci(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function zd(e, t, o) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ui = Symbol("_vod"), Fd = Symbol("_vsh"), Vd = Symbol(""), Bd = /(?:^|;)\s*display\s*:/;
function Wd(e, t, o) {
  const n = e.style, l = Ct(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (Ct(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Ln(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Ln(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Ln(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[Vd];
      c && (o += ";" + c), n.cssText = o, r = Bd.test(o);
    }
  } else t && e.removeAttribute("style");
  ui in e && (e[ui] = r ? n.display : "", e[Fd] && (n.display = "none"));
}
const di = /\s*!important$/;
function Ln(e, t, o) {
  if (et(o))
    o.forEach((n) => Ln(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Gd(e, t);
    di.test(o) ? e.setProperty(
      Js(n),
      o.replace(di, ""),
      "important"
    ) : e[n] = o;
  }
}
const mi = ["Webkit", "Moz", "ms"], za = {};
function Gd(e, t) {
  const o = za[t];
  if (o)
    return o;
  let n = is(t);
  if (n !== "filter" && n in e)
    return za[t] = n;
  n = Zn(n);
  for (let l = 0; l < mi.length; l++) {
    const r = mi[l] + n;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function vi(e, t, o, n, l, r = Kc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, o) : o == null || r && !Wi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ds(o) ? String(o) : o
  );
}
function pi(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? Hr(o) : o);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[t];
    u === "boolean" ? o = Wi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Ls(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function jd(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const gi = Symbol("_vei");
function Hd(e, t, o, n, l = null) {
  const r = e[gi] || (e[gi] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = qd(t);
    if (n) {
      const v = r[t] = Qd(
        n,
        l
      );
      Ls(e, u, v, d);
    } else c && (jd(e, u, c, d), r[t] = void 0);
  }
}
const hi = /(?:Once|Passive|Capture)$/;
function qd(e) {
  let t;
  if (hi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(hi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), t];
}
let Fa = 0;
const Kd = /* @__PURE__ */ Promise.resolve(), Jd = () => Fa || (Kd.then(() => Fa = 0), Fa = Date.now());
function Qd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    fs(
      Yd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Jd(), o;
}
function Yd(e, t) {
  if (et(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xd = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? zd(e, n, c) : t === "style" ? Wd(e, o, n) : Yn(t) ? il(t) || Hd(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zd(e, t, n, c)) ? (pi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vi(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ct(n)) ? pi(e, is(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), vi(e, t, n, c));
};
function Zd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && yi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return yi(t) && Ct(o) ? !1 : t in e;
}
const Yr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Hn = Symbol("_moveCb"), wi = Symbol("_enterCb"), em = (e) => (delete e.props.mode, e), tm = /* @__PURE__ */ em({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Kr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), n = gr();
    let l, r;
    return $r(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!lm(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(om), l.forEach(nm);
      const u = l.filter(am);
      el(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[Hn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[Hn] = null, Bs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = Jr(c);
      let d = c.tag || B;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), io(
            f,
            rn(
              f,
              u,
              n,
              o
            )
          ), Yr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? wl(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && io(
          f,
          rn(f, u, n, o)
        );
      }
      return b(d, null, r);
    };
  }
}), sm = tm;
function om(e) {
  const t = e.el;
  t[Hn] && t[Hn](), t[wi] && t[wi]();
}
function nm(e) {
  Xr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function am(e) {
  const t = Yr.get(e), o = Xr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function lm(e, t, o) {
  const n = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Qr(n);
  return r.removeChild(n), c;
}
const Ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return et(t) ? (o) => Tn(t, o) : t;
};
function im(e) {
  e.target.composing = !0;
}
function _i(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ls = Symbol("_assign");
function ki(e, t, o) {
  return t && (e = e.trim()), o && (e = ea(e)), e;
}
const en = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[ls] = Ks(l);
    const r = n || l.props && l.props.type === "number";
    Ls(e, t ? "change" : "input", (c) => {
      c.target.composing || e[ls](ki(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = ki(e.value, o, r);
    }), t || (Ls(e, "compositionstart", im), Ls(e, "compositionend", _i), Ls(e, "change", _i));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[ls] = Ks(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ea(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, qn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = Ks(o), Ls(e, "change", () => {
      const n = e._modelValue, l = To(e), r = e.checked, c = e[ls];
      if (et(n)) {
        const u = ul(n, l), d = u !== -1;
        if (r && !d)
          c(n.concat(l));
        else if (!r && d) {
          const v = [...n];
          v.splice(u, 1), c(v);
        }
      } else if (Mo(n)) {
        const u = new Set(n);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Zr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: bi,
  beforeUpdate(e, t, o) {
    e[ls] = Ks(o), bi(e, t, o);
  }
};
function bi(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (et(t))
    l = ul(t, n.props.value) > -1;
  else if (Mo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = lo(t, Zr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Dn = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[ls] = Ks(o), Ls(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[ls] = Ks(n), t !== o && (e.checked = lo(t, n.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = Mo(t);
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? ea(To(c)) : To(c)
      );
      e[ls](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ls] = Ks(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    $i(e, t);
  },
  beforeUpdate(e, t, o) {
    e[ls] = Ks(o);
  },
  updated(e, { value: t }) {
    e._assigning || $i(e, t);
  }
};
function $i(e, t) {
  const o = e.multiple, n = et(t);
  if (!(o && !n && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = ul(t, u) > -1;
        } else
          c.selected = t.has(u);
      else if (lo(To(c), t)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function To(e) {
  return "_value" in e ? e._value : e.value;
}
function Zr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const rm = ["ctrl", "shift", "alt", "meta"], cm = {
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
  exact: (e, t) => rm.some((o) => e[`${o}Key`] && !t.includes(o))
}, gt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = cm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, um = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, us = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = Js(l.key);
    if (t.some(
      (c) => c === r || um[c] === r
    ))
      return e(l);
  }));
}, dm = /* @__PURE__ */ Mt({ patchProp: Xd }, Dd);
let Ci;
function mm() {
  return Ci || (Ci = fd(dm));
}
const hn = ((...e) => {
  const t = mm().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = vm(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, fm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function fm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function vm(e) {
  return Ct(e) ? document.querySelector(e) : e;
}
const UR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const AR = [
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
], zR = {
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
}, pm = [
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
], FR = [
  ...pm,
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
function Ao() {
  return !1;
}
class ec extends Error {
  constructor(o, n, l, r) {
    super(o);
    kn(this, "status");
    kn(this, "data");
    kn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function gm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(V, $e) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi(V, $e), mt = await He.text();
    if (!He.ok) {
      let Ze = {};
      if (mt)
        try {
          const Is = JSON.parse(mt);
          Is && typeof Is == "object" && (Ze = Is);
        } catch {
          Ze = { error: mt };
        }
      const Fs = Ze.error || Ze.message || Ze.detail || He.statusText || `Request failed: ${He.status}`;
      throw new ec(String(Fs), He.status, Ze, V);
    }
    if (mt)
      return JSON.parse(mt);
  }
  async function n(V) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(V)}`);
  }
  async function l(V, $e, He) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: $e, password: He })
    });
  }
  async function r(V, $e, He) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: $e, password: He })
    });
  }
  async function c(V, $e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function u(V, $e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, refresh_token: $e || null })
    });
  }
  async function d(V, $e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${$e}` }
    });
  }
  async function v(V, $e, He) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent($e)}/revisions?cloud_url=${encodeURIComponent(V)}`,
      {
        headers: { Authorization: `Bearer ${He}` }
      }
    );
  }
  async function f(V, $e, He, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${$e}`
      },
      body: JSON.stringify({
        cloud_url: V,
        source_message: He || null,
        cloud_environment_id: mt || null
      })
    });
  }
  async function p(V = !1) {
    return o(V ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function w(V, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: $e })
    });
  }
  async function g(V = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${V}&offset=${$e}`);
  }
  async function _(V, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(V)}&limit=${$e}`);
  }
  async function C(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function $() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function x() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function I(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V, force: !0 })
    });
  }
  async function T(V) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function M(V, $e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: $e, force: !0 })
    });
  }
  async function N() {
    return o("/v2/comfygit/branches");
  }
  async function z(V) {
    return o(`/v2/comfygit/commit/${V}`);
  }
  async function j(V, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: $e })
    });
  }
  async function L(V, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: $e })
    });
  }
  async function K(V, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: $e })
    });
  }
  async function ce(V, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(V)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function te() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const V = await p();
        return {
          environments: [{
            name: V.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + V.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: V.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: V.branch
          }],
          current: V.environment,
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
  async function Y() {
    return (await te()).environments;
  }
  async function we(V) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(V)}`);
    } catch {
      return null;
    }
  }
  async function ee(V, $e) {
    const He = { target_env: V };
    return $e && (He.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(He)
    });
  }
  async function W() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function Q(V) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ke() {
    return o("/v2/workspace/environments/create_status");
  }
  async function se(V = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${V}`);
  }
  async function pe(V) {
    return o(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function O(V = !1) {
    try {
      return o(V ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await p(V), He = [];
      return $e.workflows.new.forEach((mt) => {
        He.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.modified.forEach((mt) => {
        He.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), $e.workflows.synced.forEach((mt) => {
        He.push({
          name: mt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), He;
    }
  }
  async function ue(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function Pe(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`);
  }
  async function _e(V, $e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function De(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "DELETE"
    });
  }
  async function Ue(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function Ve(V, $e, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: He })
    });
  }
  async function le(V, $e, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: He })
    });
  }
  async function oe() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function Re() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function fe(V) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(V)}`);
  }
  async function ae(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/source-candidates`);
  }
  async function E(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/hashes`, {
      method: "POST"
    });
  }
  async function U() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function ie(V) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Ee(V, $e) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function xe(V, $e) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Se(V) {
    return o(`/v2/workspace/models/${V}`, {
      method: "DELETE"
    });
  }
  async function X(V) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function H() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function ve() {
    return o("/v2/workspace/models/directory");
  }
  async function be(V) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Ke(V) {
    const $e = new URLSearchParams({ url: V });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function We() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function ge(V, $e = 10) {
    const He = new URLSearchParams({ query: V, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${He}`);
  }
  async function J(V) {
    try {
      const $e = V ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(V)}` : "/v2/comfygit/config";
      return o($e);
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
  async function qe(V, $e) {
    const He = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(He, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Te(V, $e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), $e && He.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Xe(V, $e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), $e && He.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Fe() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Oe() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function G() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function de(V, $e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), $e && He.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${He}`);
    } catch {
      return [];
    }
  }
  async function ye() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Qe(V) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function D() {
    try {
      return o("/v2/comfygit/nodes");
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
  async function A(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/track-dev`, {
      method: "POST"
    });
  }
  async function Z(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/install`, {
      method: "POST"
    });
  }
  async function Ae(V, $e) {
    var Fs, Is, Dl, Nl;
    const He = gm(), mt = ((Is = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Is.clientId) ?? ((Nl = (Dl = window.app) == null ? void 0 : Dl.api) == null ? void 0 : Nl.initialClientId) ?? "comfygit-panel", Dt = {
      id: V.id,
      version: V.version || V.selected_version || "latest",
      selected_version: V.selected_version || "latest",
      mode: V.mode || "remote",
      channel: V.channel || "default"
    };
    return V.install_source && (Dt.install_source = V.install_source), V.install_source === "git" && V.repository && (Dt.repository = V.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Dt,
        ui_id: He,
        client_id: mt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", He, "for package:", V.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(He), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: He };
  }
  async function ze(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function Le(V, $e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: $e })
    });
  }
  async function je(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function nt() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function kt(V, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: $e })
    });
  }
  async function Et(V) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function re(V, $e, He) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: He })
    });
  }
  async function F(V, $e) {
    const He = {};
    return $e && (He["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST",
      headers: He
    });
  }
  async function me(V) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function Ge(V = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: $e
      })
    });
  }
  async function dt(V, $e) {
    const He = $e ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview`;
    return o(He);
  }
  async function xt(V, $e = {}) {
    const He = { "Content-Type": "application/json" };
    return $e.authToken && (He["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/pull`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function it(V, $e) {
    const He = $e ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview`;
    return o(He);
  }
  async function St(V, $e = {}) {
    const He = { "Content-Type": "application/json" };
    return $e.authToken && (He["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/push`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function ts(V, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function xs(V) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const He of V)
      try {
        await Ue(He), $e.success++;
      } catch (mt) {
        $e.failed.push({
          name: He,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return $e;
  }
  async function Qs(V) {
    var mt;
    const $e = new FormData();
    if ($e.append("file", V), !((mt = window.app) != null && mt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!He.ok) {
      const Dt = await He.json().catch(() => ({}));
      throw new Error(Dt.error || `Preview failed: ${He.status}`);
    }
    return He.json();
  }
  async function ua(V) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(V)}`
    );
  }
  async function da(V, $e, He, mt) {
    var Fs;
    const Dt = new FormData();
    if (Dt.append("file", V), Dt.append("name", $e), Dt.append("model_strategy", He), Dt.append("torch_backend", mt), !((Fs = window.app) != null && Fs.api))
      throw new Error("ComfyUI API not available");
    const Ze = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Dt
    });
    if (!Ze.ok) {
      const Is = await Ze.json().catch(() => ({}));
      throw new Error(Is.message || Is.error || `Import failed: ${Ze.status}`);
    }
    return Ze.json();
  }
  async function As() {
    return o("/v2/workspace/import/status");
  }
  async function ma(V) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: V })
    });
  }
  async function uo(V, $e, He, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: V,
        name: $e,
        model_strategy: He,
        torch_backend: mt
      })
    });
  }
  async function mo() {
    return o("/v2/setup/status");
  }
  async function fa() {
    return o("/v2/comfygit/update-check");
  }
  async function Ss() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function va(V) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Do() {
    return o("/v2/setup/initialize_status");
  }
  async function pa(V) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ga() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ha() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function ya(V, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: $e })
    });
  }
  async function yn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wa(V) {
    const $e = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function _a(V) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ka() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ba(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function $a(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/stop`, {
      method: "POST"
    });
  }
  async function Ca(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/start`, {
      method: "POST"
    });
  }
  async function xa(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/status`);
  }
  async function Sa(V) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function wn(V = !1) {
    return o(V ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ia() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function _n(V) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ne(V) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function q(V) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Je() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function Ye(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/info`);
  }
  async function lt(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`);
  }
  async function vt(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function Lt(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function ss(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function No(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function zs(V) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: V })
    });
  }
  return {
    isLoading: e,
    error: t,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: _,
    exportEnv: C,
    validateExport: $,
    validateDeploy: x,
    exportEnvWithForce: I,
    validateEnvironmentExport: T,
    exportEnvironmentWithForce: M,
    // Git Operations
    getBranches: N,
    getCommitDetail: z,
    checkout: j,
    createBranch: L,
    switchBranch: K,
    deleteBranch: ce,
    // Environment Management
    listEnvironments: te,
    getEnvironments: Y,
    getEnvironmentDetails: we,
    switchEnvironment: ee,
    getSwitchProgress: W,
    createEnvironment: Q,
    getCreateProgress: ke,
    getComfyUIReleases: se,
    deleteEnvironment: pe,
    // Workflow Management
    getWorkflows: O,
    getWorkflowDetails: ue,
    getWorkflowContract: Pe,
    saveWorkflowContract: _e,
    deleteWorkflowContract: De,
    resolveWorkflow: Ue,
    installWorkflowDeps: Ve,
    setModelImportance: le,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Re,
    getModelDetails: fe,
    getModelSourceCandidates: ae,
    computeModelHashes: E,
    getWorkflowSourceCandidates: U,
    openFileLocation: ie,
    addModelSource: Ee,
    removeModelSource: xe,
    deleteModel: Se,
    downloadModel: X,
    scanWorkspaceModels: H,
    getModelsDirectory: ve,
    setModelsDirectory: be,
    getHuggingFaceRepoInfo: Ke,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: ge,
    // Settings
    getConfig: J,
    updateConfig: qe,
    // Cloud Auth
    getCloudAuthConfig: n,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: Te,
    getEnvironmentManifest: Oe,
    getWorkspaceLogs: Xe,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: G,
    getOrchestratorLogs: de,
    getOrchestratorLogPath: ye,
    openFile: Qe,
    // Node Management
    getNodes: D,
    trackNodeAsDev: A,
    installNode: Z,
    queueNodeInstall: Ae,
    updateNode: ze,
    updateNodeCriticality: Le,
    uninstallNode: je,
    // Git Remotes
    getRemotes: nt,
    addRemote: kt,
    removeRemote: Et,
    updateRemoteUrl: re,
    fetchRemote: F,
    getRemoteSyncStatus: me,
    // Push/Pull
    getPullPreview: dt,
    pullFromRemote: xt,
    getPushPreview: it,
    pushToRemote: St,
    validateMerge: ts,
    // Environment Sync
    syncEnvironmentManually: Ge,
    // Workflow Repair
    repairWorkflowModels: xs,
    // Import Operations
    previewTarballImport: Qs,
    previewGitImport: ma,
    validateEnvironmentName: ua,
    executeImport: da,
    executeGitImport: uo,
    getImportProgress: As,
    // First-Time Setup
    getSetupStatus: mo,
    // Manager Update Notice
    getUpdateCheck: fa,
    updateManager: Ss,
    initializeWorkspace: va,
    getInitializeProgress: Do,
    validatePath: pa,
    // Deploy Operations
    getDeploySummary: ga,
    getDataCenters: ha,
    testRunPodConnection: ya,
    getNetworkVolumes: yn,
    getRunPodGpuTypes: wa,
    deployToRunPod: _a,
    getRunPodPods: ka,
    terminateRunPodPod: ba,
    stopRunPodPod: $a,
    startRunPodPod: Ca,
    getDeploymentStatus: xa,
    exportDeployPackage: Sa,
    getStoredRunPodKey: wn,
    clearRunPodKey: Ia,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: _n,
    removeCustomWorker: ne,
    testWorkerConnection: q,
    scanForWorkers: Je,
    getWorkerSystemInfo: Ye,
    getWorkerInstances: lt,
    deployToWorker: vt,
    startWorkerInstance: Lt,
    stopWorkerInstance: ss,
    terminateWorkerInstance: No,
    // Git Authentication
    testGitAuth: zs
  };
}
const hm = { class: "panel-layout" }, ym = {
  key: 0,
  class: "panel-layout-header"
}, wm = {
  key: 1,
  class: "panel-layout-search"
}, _m = { class: "panel-layout-content" }, km = {
  key: 2,
  class: "panel-layout-footer"
}, bm = /* @__PURE__ */ Ce({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", hm, [
      t.$slots.header ? (a(), i("div", ym, [
        ot(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", wm, [
        ot(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", _m, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", km, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ut = /* @__PURE__ */ Ie(bm, [["__scopeId", "data-v-21565df9"]]), $m = {
  key: 0,
  class: "panel-title-prefix"
}, Cm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, xm = /* @__PURE__ */ Ce({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", $m, m(e.prefix), 1)) : (a(), i("span", Cm)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Sm = /* @__PURE__ */ Ie(xm, [["__scopeId", "data-v-c3875efc"]]), Im = ["title"], Em = ["width", "height"], Tm = /* @__PURE__ */ Ce({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (n) => t.$emit("click"))
    }, [
      (a(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...o[1] || (o[1] = [
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
      ])], 8, Em))
    ], 8, Im));
  }
}), tc = /* @__PURE__ */ Ie(Tm, [["__scopeId", "data-v-6fc7f16d"]]), Mm = { class: "header-left" }, Pm = {
  key: 0,
  class: "header-actions"
}, Rm = /* @__PURE__ */ Ce({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Mm, [
        b(Sm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            S(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(tc, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", Pm, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ie(Rm, [["__scopeId", "data-v-55a62cd6"]]), Lm = {
  key: 0,
  class: "section-title-count"
}, Dm = {
  key: 1,
  class: "section-title-icon"
}, Nm = /* @__PURE__ */ Ce({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Lm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", Dm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ Ie(Nm, [["__scopeId", "data-v-559361eb"]]), Om = { class: "status-grid" }, Um = { class: "status-grid__columns" }, Am = { class: "status-grid__column" }, zm = { class: "status-grid__title" }, Fm = { class: "status-grid__column status-grid__column--right" }, Vm = { class: "status-grid__title" }, Bm = {
  key: 0,
  class: "status-grid__footer"
}, Wm = /* @__PURE__ */ Ce({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", Om, [
      s("div", Um, [
        s("div", Am, [
          s("h4", zm, m(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", Fm, [
          s("h4", Vm, m(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Bm, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Gm = /* @__PURE__ */ Ie(Wm, [["__scopeId", "data-v-73b7ba3f"]]), jm = {
  key: 0,
  class: "status-item__icon"
}, Hm = {
  key: 1,
  class: "status-item__count"
}, qm = { class: "status-item__label" }, Km = /* @__PURE__ */ Ce({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = P(() => `status-item--${t.variant}`);
    return (n, l) => (a(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (a(), i("span", jm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", Hm, m(e.count), 1)) : y("", !0),
      s("span", qm, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ Ie(Km, [["__scopeId", "data-v-6f929183"]]), Jm = { class: "issue-card__header" }, Qm = { class: "issue-card__icon" }, Ym = { class: "issue-card__title" }, Xm = {
  key: 0,
  class: "issue-card__content"
}, Zm = {
  key: 0,
  class: "issue-card__description"
}, ef = {
  key: 1,
  class: "issue-card__items"
}, tf = {
  key: 2,
  class: "issue-card__actions"
}, sf = /* @__PURE__ */ Ce({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const t = e, o = P(() => `issue-card--${t.severity}`);
    return (n, l) => (a(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      s("div", Jm, [
        s("span", Qm, m(e.icon), 1),
        s("h4", Ym, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Xm, [
        e.description ? (a(), i("p", Zm, m(e.description), 1)) : y("", !0),
        ot(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", ef, [
        (a(!0), i(B, null, he(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", tf, [
        ot(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Ie(sf, [["__scopeId", "data-v-df6aa348"]]), of = ["type", "disabled"], nf = {
  key: 0,
  class: "spinner"
}, af = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", nf)) : y("", !0),
      e.loading ? y("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, of));
  }
}), Me = /* @__PURE__ */ Ie(af, [["__scopeId", "data-v-772abe47"]]), lf = /* @__PURE__ */ Ce({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-label"]),
      style: Rt({ minWidth: e.minWidth })
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Nn = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-75e9eeb8"]]), rf = /* @__PURE__ */ Ce({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), tl = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-2f186e4c"]]), cf = { class: "detail-row" }, uf = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("div", cf, [
      b(Nn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          S(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(tl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          S(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ Ie(uf, [["__scopeId", "data-v-ef15664a"]]), df = { class: "modal-header" }, mf = { class: "modal-body" }, ff = { class: "status-section" }, vf = {
  key: 0,
  class: "status-section"
}, pf = { class: "section-header-row" }, gf = {
  key: 0,
  class: "workflow-group"
}, hf = { class: "workflow-group-header" }, yf = { class: "workflow-group-title" }, wf = { class: "workflow-list" }, _f = { class: "workflow-name" }, kf = { class: "workflow-issue" }, bf = {
  key: 1,
  class: "workflow-group"
}, $f = { class: "workflow-group-header" }, Cf = { class: "workflow-group-title" }, xf = { class: "workflow-list" }, Sf = { class: "workflow-name" }, If = { class: "workflow-issue" }, Ef = {
  key: 2,
  class: "workflow-group"
}, Tf = { class: "workflow-group-header" }, Mf = { class: "workflow-group-title" }, Pf = { class: "workflow-list" }, Rf = { class: "workflow-name" }, Lf = {
  key: 3,
  class: "workflow-group"
}, Df = { class: "workflow-group-header" }, Nf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Uf = { class: "workflow-name" }, Af = {
  key: 4,
  class: "workflow-group"
}, zf = { class: "workflow-group-header" }, Ff = { class: "workflow-group-title" }, Vf = { class: "workflow-list" }, Bf = { class: "workflow-name" }, Wf = {
  key: 5,
  class: "workflow-group"
}, Gf = { class: "workflow-group-title" }, jf = { class: "expand-icon" }, Hf = {
  key: 0,
  class: "workflow-list"
}, qf = { class: "workflow-name" }, Kf = {
  key: 1,
  class: "status-section"
}, Jf = {
  key: 0,
  class: "change-group"
}, Qf = { class: "change-group-header" }, Yf = { class: "change-group-title" }, Xf = { class: "change-list" }, Zf = { class: "node-name" }, ev = {
  key: 0,
  class: "dev-badge"
}, tv = {
  key: 1,
  class: "change-group"
}, sv = { class: "change-group-header" }, ov = { class: "change-group-title" }, nv = { class: "change-list" }, av = { class: "node-name" }, lv = {
  key: 0,
  class: "dev-badge"
}, iv = {
  key: 2,
  class: "change-group"
}, rv = { class: "change-list" }, cv = { class: "change-item" }, uv = { class: "node-name" }, dv = {
  key: 3,
  class: "change-group"
}, mv = {
  key: 2,
  class: "status-section"
}, fv = { class: "section-header-row" }, vv = {
  key: 0,
  class: "drift-item"
}, pv = { class: "drift-list" }, gv = {
  key: 0,
  class: "drift-list-more"
}, hv = {
  key: 1,
  class: "drift-item"
}, yv = { class: "drift-list" }, wv = {
  key: 0,
  class: "drift-list-more"
}, _v = {
  key: 2,
  class: "drift-item"
}, kv = { class: "drift-list" }, bv = { class: "version-actual" }, $v = { class: "version-expected" }, Cv = {
  key: 0,
  class: "drift-list-more"
}, xv = {
  key: 3,
  class: "drift-item"
}, Sv = { class: "repair-action" }, Iv = {
  key: 3,
  class: "status-section"
}, Ev = { class: "info-box" }, Tv = { class: "drift-list" }, Mv = {
  key: 0,
  class: "drift-list-more"
}, Pv = {
  key: 4,
  class: "status-section"
}, Rv = { class: "warning-box" }, Lv = {
  key: 5,
  class: "empty-state-inline"
}, Dv = { class: "modal-actions" }, Nv = /* @__PURE__ */ Ce({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const t = e, o = k(!1);
    at(() => {
      console.log("StatusDetailModal mounted, initial show value:", t.show);
    }), pt(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const n = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((C) => {
        var x, I, T;
        const $ = (T = (I = (x = t.status) == null ? void 0 : x.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : T.find((M) => M.name === C);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = P(() => {
      var w, g, _, C, $;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = t.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || ((($ = t.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var g, _, C;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = P(() => {
      var w, g, _, C, $, x;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((x = ($ = (C = t.status) == null ? void 0 : C.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : x.length) ?? 0) === 0;
    }), v = P(() => {
      var g, _;
      const w = (_ = (g = t.status) == null ? void 0 : g.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var _, C, $, x, I, T, M, N, z, j, L, K, ce, te, Y, we, ee, W, Q, ke, se, pe;
      return a(), R(Kt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (O) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = gt(() => {
            }, ["stop"]))
          }, [
            s("div", df, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (O) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", mf, [
              s("div", ff, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    S("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (a(), i("div", vf, [
                s("div", pf, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      S("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (O) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                n.value.length ? (a(), i("div", gf, [
                  s("div", hf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", yf, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  s("div", wf, [
                    (a(!0), i(B, null, he(n.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", _f, m(O.name), 1),
                      s("span", kf, m(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", bf, [
                  s("div", $f, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Cf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", xf, [
                    (a(!0), i(B, null, he(l.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", Sf, m(O.name), 1),
                      s("span", If, m(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), i("div", Ef, [
                  s("div", Tf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Mf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Pf, [
                    (a(!0), i(B, null, he(e.status.workflows.new, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Rf, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && x.length ? (a(), i("div", Lf, [
                  s("div", Df, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Nf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Of, [
                    (a(!0), i(B, null, he(e.status.workflows.modified, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Uf, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && T.length ? (a(), i("div", Af, [
                  s("div", zf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Ff, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Vf, [
                    (a(!0), i(B, null, he(e.status.workflows.deleted, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Bf, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Wf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (O) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Gf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", jf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", Hf, [
                    (a(!0), i(B, null, he(r.value, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", qf, m(O), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), i("div", Kf, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    S("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && N.length ? (a(), i("div", Jf, [
                  s("div", Qf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Yf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Xf, [
                    (a(!0), i(B, null, he(e.status.git_changes.nodes_added, (O) => (a(), i("div", {
                      key: f(O),
                      class: "change-item"
                    }, [
                      s("span", Zf, m(f(O)), 1),
                      p(O) ? (a(), i("span", ev, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (j = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && j.length ? (a(), i("div", tv, [
                  s("div", sv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", ov, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", nv, [
                    (a(!0), i(B, null, he(e.status.git_changes.nodes_removed, (O) => (a(), i("div", {
                      key: f(O),
                      class: "change-item"
                    }, [
                      s("span", av, m(f(O)), 1),
                      p(O) ? (a(), i("span", lv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (L = e.status.git_changes) != null && L.workflow_changes ? (a(), i("div", iv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", rv, [
                    s("div", cv, [
                      s("span", uv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (K = e.status.git_changes) != null && K.has_other_changes ? (a(), i("div", dv, [...g[21] || (g[21] = [
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
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (a(), i("div", mv, [
                s("div", fv, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      S("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (O) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && Y.length ? (a(), i("div", vv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", pv, [
                    (a(!0), i(B, null, he(e.status.comparison.missing_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + m(O), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", gv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ee = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && ee.length ? (a(), i("div", hv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", yv, [
                    (a(!0), i(B, null, he(e.status.comparison.extra_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + m(O), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", wv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Q = (W = e.status.comparison) == null ? void 0 : W.version_mismatches) != null && Q.length ? (a(), i("div", _v, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", kv, [
                    (a(!0), i(B, null, he(e.status.comparison.version_mismatches.slice(0, 10), (O) => (a(), i("div", {
                      key: O.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      S(m(O.name) + ": ", 1),
                      s("span", bv, m(O.actual), 1),
                      g[23] || (g[23] = S(" → ", -1)),
                      s("span", $v, m(O.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", Cv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ke = e.status.comparison) == null ? void 0 : ke.packages_in_sync) === !1 ? (a(), i("div", xv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Sv, [
                  b(Me, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (O) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      S(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (pe = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && pe.length ? (a(), i("div", Iv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    S("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Ev, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Tv, [
                  (a(!0), i(B, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (O) => (a(), i("div", {
                    key: O,
                    class: "drift-list-item"
                  }, " • " + m(O), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", Mv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", Pv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    S("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Rv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Lv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Dv, [
              b(Me, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (O) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  S(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Ov = /* @__PURE__ */ Ie(Nv, [["__scopeId", "data-v-e2b37122"]]), Uv = { class: "base-modal-header" }, Av = {
  key: 0,
  class: "base-modal-title"
}, zv = { class: "base-modal-body" }, Fv = {
  key: 0,
  class: "base-modal-loading"
}, Vv = {
  key: 1,
  class: "base-modal-error"
}, Bv = {
  key: 0,
  class: "base-modal-footer"
}, Wv = /* @__PURE__ */ Ce({
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
    const o = e, n = t;
    function l() {
      o.closeOnOverlayClick && n("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && n("close");
    }
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (a(), R(Kt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = gt(() => {
          }, ["stop"]))
        }, [
          s("div", Uv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", Av, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (a(), i("button", {
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
          s("div", zv, [
            e.loading ? (a(), i("div", Fv, "Loading...")) : e.error ? (a(), i("div", Vv, m(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Bv, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Wv, [["__scopeId", "data-v-06a4be14"]]), Gv = ["type", "disabled"], jv = {
  key: 0,
  class: "spinner"
}, Hv = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (n) => t.$emit("click", n))
    }, [
      e.loading ? (a(), i("span", jv)) : y("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, Gv));
  }
}), Ne = /* @__PURE__ */ Ie(Hv, [["__scopeId", "data-v-f3452606"]]), qv = ["type", "value", "placeholder", "disabled"], Kv = {
  key: 0,
  class: "base-input-error"
}, Jv = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("div", {
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        onKeyup: [
          o[1] || (o[1] = us((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = us((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, qv),
      e.error ? (a(), i("span", Kv, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(Jv, [["__scopeId", "data-v-9ba02cdc"]]), Qv = ["disabled"], Yv = { class: "dropdown-value" }, Xv = ["onClick"], Zv = {
  key: 0,
  class: "dropdown-error"
}, ep = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(!1), r = k(null), c = k(null), u = k({});
    function d(x) {
      return typeof x == "string" ? x : x.value;
    }
    function v(x) {
      return typeof x == "string" ? x : x.label;
    }
    const f = P(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const x = o.options.find((I) => d(I) === o.modelValue);
      return x ? v(x) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(x) {
      n("update:modelValue", d(x)), w();
    }
    function _() {
      if (!r.value) return;
      const x = r.value.getBoundingClientRect(), I = window.innerHeight, T = I - x.bottom, M = x.top, N = Math.min(300, o.options.length * 36 + 8), z = T < N && M > T;
      u.value = {
        position: "fixed",
        left: `${x.left}px`,
        width: `${x.width}px`,
        maxHeight: "300px",
        ...z ? { bottom: `${I - x.top + 4}px` } : { top: `${x.bottom + 4}px` }
      };
    }
    pt(l, async (x) => {
      x && (await Pt(), _());
    });
    function C() {
      l.value && _();
    }
    function $(x) {
      x.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", $);
    }), Po(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", $);
    }), (x, I) => (a(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      s("button", {
        type: "button",
        class: Be(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        s("span", Yv, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Qv),
      (a(), R(Kt, { to: "body" }, [
        l.value ? (a(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (a(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Rt(u.value)
        }, [
          (a(!0), i(B, null, he(e.options, (T) => (a(), i("div", {
            key: d(T),
            class: Be(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (M) => g(T)
          }, m(v(T)), 11, Xv))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", Zv, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), tp = /* @__PURE__ */ Ie(ep, [["__scopeId", "data-v-857e085b"]]), sp = { class: "destination-section" }, op = { class: "section-label" }, np = { class: "destination-row" }, ap = {
  key: 0,
  class: "path-separator"
}, lp = /* @__PURE__ */ Ce({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = P(() => {
      const C = d.value.map(($) => ({
        label: $,
        value: $
      }));
      return C.push({ label: "Custom path...", value: "__custom__" }), C;
    }), w = P(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const C = d.value.find(
        ($) => {
          var x;
          return $.toLowerCase() === ((x = o.suggestedDirectory) == null ? void 0 : x.toLowerCase());
        }
      );
      C && C !== r.value && (f = !0, r.value = C, Pt(() => {
        f = !1;
      }));
    }
    async function _() {
      try {
        const C = await l();
        d.value = C.directories, C.directories.length > 0 && !r.value && (r.value = C.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return pt(w, (C) => {
      n("update:modelValue", C);
    }, { immediate: !0 }), pt(() => o.suggestedDirectory, g), pt(d, g), pt(r, (C, $) => {
      f || $ === "" || (v.value = !0);
    }), at(_), (C, $) => (a(), i("div", sp, [
      s("h4", op, m(e.label), 1),
      s("div", np, [
        b(tp, {
          modelValue: r.value,
          "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (a(), i("span", ap, "/")) : y("", !0),
        r.value !== "__custom__" ? (a(), R(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": $[1] || ($[1] = (x) => c.value = x),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (a(), R(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": $[2] || ($[2] = (x) => u.value = x),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), sc = /* @__PURE__ */ Ie(lp, [["__scopeId", "data-v-2fbc2b02"]]);
function ip(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function rp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!ip(o.hostname)) return { kind: "unknown" };
  const n = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (n[0] === "datasets" || n[0] === "spaces") return { kind: "unknown" };
  if (n.length < 2) return { kind: "unknown" };
  const l = `${n[0]}/${n[1]}`, r = n.slice(2);
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
function cp(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function xi(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${cp(o)}`;
}
const up = { class: "hf-file-browser" }, dp = { class: "browser-header" }, mp = { class: "repo-info" }, fp = { class: "repo-id" }, vp = {
  key: 0,
  class: "revision-pill"
}, pp = {
  key: 0,
  class: "loading-state"
}, gp = {
  key: 1,
  class: "error-state"
}, hp = { class: "toolbar" }, yp = { class: "toolbar-actions" }, wp = { class: "file-list-container" }, _p = {
  key: 0,
  class: "file-list-header"
}, kp = ["checked", "indeterminate"], bp = {
  key: 1,
  class: "file-checkbox-spacer"
}, $p = { class: "sort-indicator" }, Cp = { class: "sort-indicator" }, xp = {
  key: 1,
  class: "empty-state"
}, Sp = {
  key: 2,
  class: "file-list"
}, Ip = ["onClick"], Ep = ["checked", "onChange"], Tp = { class: "file-path" }, Mp = { class: "file-size" }, Pp = { class: "action-bar" }, Rp = { class: "summary-info" }, Lp = { class: "summary-count" }, Dp = { class: "summary-size" }, Np = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = P(() => {
      let _e = r.value;
      if (o.initialPath) {
        const De = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        _e = _e.filter((Ue) => Ue.path.startsWith(De) || Ue.path === o.initialPath);
      }
      if (f.value && (_e = _e.filter((De) => De.is_model_file)), v.value.trim()) {
        const De = v.value.toLowerCase();
        _e = _e.filter((Ue) => Ue.path.toLowerCase().includes(De));
      }
      return _e;
    }), $ = P(() => {
      const _e = [...C.value];
      return _e.sort((De, Ue) => {
        let Ve;
        return p.value === "name" ? Ve = De.path.localeCompare(Ue.path) : Ve = De.size - Ue.size, w.value ? Ve : -Ve;
      }), _e;
    }), x = P(() => C.value.length === 0 ? !1 : C.value.every((_e) => c.value.has(_e.path))), I = P(() => C.value.some((_e) => c.value.has(_e.path))), T = P(() => g.value.trim().length > 0), M = P(() => {
      let _e = 0;
      for (const De of c.value) {
        const Ue = r.value.find((Ve) => Ve.path === De);
        Ue && (_e += Ue.size);
      }
      return _e;
    }), N = P(() => {
      if (c.value.size === 0) return null;
      const _e = /* @__PURE__ */ new Set();
      for (const De of c.value) {
        const Ue = ke(De);
        Ue && _e.add(Ue.toLowerCase());
      }
      return _e.size !== 1 ? null : [..._e][0];
    }), z = P(() => o.mode || "download"), j = P(() => o.actionLabel || (z.value === "source" ? "Use as Source" : "Queue Download")), L = P(() => z.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), K = P(() => z.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !T.value);
    function ce(_e) {
      if (_e === 0) return "0 B";
      const De = 1024 * 1024 * 1024, Ue = 1024 * 1024, Ve = 1024;
      return _e >= De ? `${(_e / De).toFixed(2)} GB` : _e >= Ue ? `${(_e / Ue).toFixed(1)} MB` : _e >= Ve ? `${(_e / Ve).toFixed(0)} KB` : `${_e} B`;
    }
    function te(_e) {
      const De = _e.match(_);
      return De ? `${De[1]}${De[4]}` : null;
    }
    function Y(_e) {
      if (z.value === "source") {
        c.value = c.value.has(_e.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([_e.path]);
        return;
      }
      const De = new Set(c.value), Ue = De.has(_e.path), Ve = _e.shard_group || te(_e.path);
      if (Ve) {
        const le = r.value.filter((oe) => (oe.shard_group || te(oe.path)) === Ve);
        Ue ? le.forEach((oe) => De.delete(oe.path)) : le.forEach((oe) => De.add(oe.path));
      } else
        Ue ? De.delete(_e.path) : De.add(_e.path);
      c.value = De;
    }
    function we() {
      const _e = new Set(c.value);
      for (const De of C.value)
        De.is_model_file && _e.add(De.path);
      c.value = _e;
    }
    function ee() {
      c.value = /* @__PURE__ */ new Set();
    }
    function W() {
      if (x.value) {
        const _e = new Set(c.value);
        for (const De of C.value)
          _e.delete(De.path);
        c.value = _e;
      } else {
        const _e = new Set(c.value);
        for (const De of C.value)
          _e.add(De.path);
        c.value = _e;
      }
    }
    function Q(_e) {
      p.value === _e ? w.value = !w.value : (p.value = _e, w.value = !0);
    }
    function ke(_e) {
      const De = _e.split("/");
      return De.length >= 2 ? De[De.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function pe() {
      if (c.value.size === 0 || !T.value) return;
      const _e = se(), De = [];
      for (const Ue of c.value) {
        const Ve = r.value.find((le) => le.path === Ue);
        Ve && De.push({
          url: xi(o.repoId, o.revision, Ve.path),
          destination: _e,
          filename: Ve.path.split("/").pop() || Ve.path
        });
      }
      n("queue", De);
    }
    function O() {
      if (c.value.size !== 1) return;
      const [_e] = c.value;
      n("selectSource", xi(o.repoId, o.revision, _e));
    }
    function ue() {
      if (z.value === "source") {
        O();
        return;
      }
      pe();
    }
    async function Pe() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const _e = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, De = await l(_e);
          if (r.value = De.files, o.preselectedFile) {
            const Ue = r.value.find((Ve) => Ve.path === o.preselectedFile);
            Ue && Y(Ue);
          }
        } catch (_e) {
          d.value = _e instanceof Error ? _e.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return pt(() => [o.repoId, o.revision], () => {
      o.repoId && Pe();
    }, { immediate: !1 }), at(() => {
      Pe();
    }), (_e, De) => (a(), i("div", up, [
      s("div", dp, [
        s("button", {
          class: "back-btn",
          onClick: De[0] || (De[0] = (Ue) => _e.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", mp, [
          s("span", fp, m(e.repoId), 1),
          e.revision ? (a(), i("span", vp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (a(), i("div", pp, " Loading repository files... ")) : d.value ? (a(), i("div", gp, m(d.value), 1)) : (a(), i(B, { key: 2 }, [
        s("div", hp, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": De[1] || (De[1] = (Ue) => v.value = Ue),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", yp, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: De[2] || (De[2] = (Ue) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            z.value === "download" ? (a(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: we
            }, "Auto-Select Models")) : y("", !0),
            s("button", {
              class: "action-btn",
              onClick: ee
            }, "Clear")
          ])
        ]),
        s("div", wp, [
          C.value.length > 0 ? (a(), i("div", _p, [
            z.value === "download" ? (a(), i("input", {
              key: 0,
              type: "checkbox",
              checked: x.value,
              indeterminate: I.value && !x.value,
              class: "file-checkbox",
              onChange: W
            }, null, 40, kp)) : (a(), i("span", bp)),
            s("span", {
              class: "header-name",
              onClick: De[3] || (De[3] = (Ue) => Q("name"))
            }, [
              De[7] || (De[7] = S(" Name ", -1)),
              s("span", $p, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: De[4] || (De[4] = (Ue) => Q("size"))
            }, [
              De[8] || (De[8] = S(" Size ", -1)),
              s("span", Cp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (a(), i("div", xp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", Sp, [
            (a(!0), i(B, null, he($.value, (Ue) => (a(), i("div", {
              key: Ue.path,
              class: Be(["file-item", { selected: c.value.has(Ue.path) }]),
              onClick: (Ve) => Y(Ue)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Ue.path),
                class: "file-checkbox",
                onClick: De[5] || (De[5] = gt(() => {
                }, ["stop"])),
                onChange: (Ve) => Y(Ue)
              }, null, 40, Ep),
              s("span", Tp, m(Ue.path), 1),
              s("span", Mp, m(ce(Ue.size)), 1)
            ], 10, Ip))), 128))
          ]))
        ]),
        z.value === "download" ? (a(), R(sc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": De[6] || (De[6] = (Ue) => g.value = Ue),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Pp, [
          s("div", Rp, [
            s("span", Lp, m(L.value), 1),
            s("span", Dp, m(ce(M.value)), 1)
          ]),
          b(Ne, {
            variant: "primary",
            disabled: K.value,
            onClick: ue
          }, {
            default: h(() => [
              S(m(j.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Op = /* @__PURE__ */ Ie(Np, [["__scopeId", "data-v-06caa551"]]), Up = { class: "token-config-modal" }, Ap = { class: "provider-info" }, zp = { class: "provider-icon" }, Fp = { class: "provider-name" }, Vp = {
  key: 0,
  class: "current-token"
}, Bp = { class: "mask" }, Wp = { class: "token-input-section" }, Gp = { class: "input-label" }, jp = { class: "help-text" }, Hp = ["href"], qp = { class: "modal-actions" }, Kp = /* @__PURE__ */ Ce({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), v = P(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), f = P(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), p = P(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), w = P(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function g() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const C = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(C), r.value = "", n("saved"), n("close");
        } catch (C) {
          console.error("Failed to save token:", C);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
      u.value = !0;
      try {
        const C = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(C), n("cleared"), n("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, $) => (a(), R($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: $[2] || ($[2] = (x) => C.$emit("close"))
    }, {
      body: h(() => [
        s("div", Up, [
          s("div", Ap, [
            s("span", zp, m(v.value), 1),
            s("span", Fp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Vp, [
            $[4] || ($[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Bp, m(e.currentTokenMask), 1),
            b(Ne, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...$[3] || ($[3] = [
                S(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", Wp, [
            s("label", Gp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", jp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, Hp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", qp, [
          b(Ne, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (x) => C.$emit("close"))
          }, {
            default: h(() => [...$[5] || ($[5] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...$[6] || ($[6] = [
              S(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), Jp = /* @__PURE__ */ Ie(Kp, [["__scopeId", "data-v-525ec64a"]]), Qp = { class: "huggingface-tab" }, Yp = {
  key: 0,
  class: "search-section"
}, Xp = { class: "search-header" }, Zp = { class: "search-bar" }, eg = {
  key: 1,
  class: "search-results"
}, tg = {
  key: 0,
  class: "loading-state"
}, sg = {
  key: 1,
  class: "error-state"
}, og = {
  key: 2,
  class: "results-list"
}, ng = ["onClick"], ag = { class: "repo-header" }, lg = { class: "repo-id" }, ig = { class: "repo-stats" }, rg = {
  class: "stat",
  title: "Downloads"
}, cg = {
  class: "stat",
  title: "Likes"
}, ug = {
  key: 0,
  class: "repo-desc"
}, dg = {
  key: 1,
  class: "repo-tags"
}, mg = {
  key: 3,
  class: "empty-state"
}, fg = {
  key: 4,
  class: "hint-state"
}, vg = /* @__PURE__ */ Ce({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), n = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), C = P(() => {
      if (!u.value) return !1;
      const j = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || j.includes("authentication") || j.includes("unauthorized");
    });
    function $(j) {
      return j >= 1e6 ? `${(j / 1e6).toFixed(1)}M` : j >= 1e3 ? `${(j / 1e3).toFixed(1)}K` : String(j);
    }
    async function x() {
      const j = l.value.trim();
      if (!j) return;
      u.value = null;
      const L = rp(j);
      if (L.kind === "file" && L.repoId && L.path) {
        v.value = L.repoId, f.value = L.revision || "main";
        const K = L.path.split("/");
        K.length > 1 ? p.value = K.slice(0, -1).join("/") : p.value = void 0, w.value = L.path, n.value = "browse";
        return;
      }
      if (L.kind === "repo" && L.repoId) {
        v.value = L.repoId, f.value = L.revision || "main", p.value = L.path, w.value = void 0, n.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(j) && !j.includes("://")) {
        v.value = j, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const K = await t(j);
        r.value = K.results, d.value = !0;
      } catch (K) {
        u.value = K instanceof Error ? K.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(j) {
      v.value = j, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function T() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const j = await o();
        _.value = j.huggingface_token || null;
      } catch (j) {
        console.error("Failed to load config:", j);
      }
    }
    function N() {
      M(), C.value && l.value && x();
    }
    function z() {
      _.value = null;
    }
    return at(M), (j, L) => (a(), i("div", Qp, [
      n.value === "search" ? (a(), i("div", Yp, [
        s("div", Xp, [
          s("div", Zp, [
            b(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": L[0] || (L[0] = (K) => l.value = K),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: us(x, ["enter"])
            }, null, 8, ["modelValue"]),
            b(Ne, {
              variant: "primary",
              onClick: x,
              loading: c.value
            }, {
              default: h(() => [...L[6] || (L[6] = [
                S(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: L[1] || (L[1] = (K) => g.value = !0)
          }, {
            default: h(() => [
              S(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      n.value === "search" ? (a(), i("div", eg, [
        c.value ? (a(), i("div", tg, " Searching HuggingFace... ")) : u.value ? (a(), i("div", sg, [
          s("p", null, m(u.value), 1),
          C.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: L[2] || (L[2] = (K) => g.value = !0)
          }, {
            default: h(() => [...L[7] || (L[7] = [
              S(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (a(), i("div", og, [
          (a(!0), i(B, null, he(r.value, (K) => (a(), i("div", {
            key: K.repo_id,
            class: "repo-card",
            onClick: (ce) => I(K.repo_id)
          }, [
            s("div", ag, [
              s("span", lg, m(K.repo_id), 1),
              s("div", ig, [
                s("span", rg, [
                  L[8] || (L[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  S(" " + m($(K.downloads)), 1)
                ]),
                s("span", cg, [
                  L[9] || (L[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  S(" " + m($(K.likes)), 1)
                ])
              ])
            ]),
            K.description ? (a(), i("p", ug, m(K.description), 1)) : y("", !0),
            K.tags.length > 0 ? (a(), i("div", dg, [
              (a(!0), i(B, null, he(K.tags.slice(0, 5), (ce) => (a(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, ng))), 128))
        ])) : d.value ? (a(), i("div", mg, " No repositories found ")) : (a(), i("div", fg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), R(Op, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: T,
        onQueue: L[3] || (L[3] = (K) => j.$emit("queue", K)),
        onSelectSource: L[4] || (L[4] = (K) => j.$emit("selectSource", K))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (a(), R(Jp, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: L[5] || (L[5] = (K) => g.value = !1),
        onSaved: N,
        onCleared: z
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), oc = /* @__PURE__ */ Ie(vg, [["__scopeId", "data-v-eccbf32d"]]), pg = { class: "candidate-card" }, gg = { class: "candidate-main" }, hg = { class: "candidate-url" }, yg = { class: "candidate-meta" }, wg = { class: "meta-chip" }, _g = {
  key: 0,
  class: "meta-chip"
}, kg = ["aria-expanded"], bg = {
  key: 1,
  class: "meta-chip"
}, $g = { class: "match-popover-reasons" }, Cg = { class: "candidate-footer" }, xg = {
  key: 0,
  class: "candidate-context"
}, Sg = { key: 1 }, Ig = /* @__PURE__ */ Ce({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r() {
      n.value = !1;
    }
    function c(f) {
      var w;
      const p = f.target;
      p instanceof Node && ((w = l.value) != null && w.contains(p) || r());
    }
    function u(f) {
      f.key === "Escape" && r();
    }
    pt(n, (f) => {
      f ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), pn(() => {
      document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u);
    });
    function d(f) {
      return f === "huggingface" ? "Hugging Face" : f === "civitai" ? "Civitai" : "Direct URL";
    }
    function v(f) {
      return f >= 75 ? "Strong" : f >= 45 ? "Possible" : "Weak";
    }
    return (f, p) => {
      var w, g;
      return a(), i("article", pg, [
        s("div", gg, [
          s("div", hg, m(e.candidate.url), 1),
          s("div", yg, [
            s("span", wg, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (a(), i("span", _g, [
              p[4] || (p[4] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (a(), i("span", {
              key: 1,
              ref_key: "matchPopoverRoot",
              ref: l,
              class: "match-chip-wrap"
            }, [
              (w = e.candidate.reasons) != null && w.length ? (a(), i("button", {
                key: 0,
                class: "meta-chip meta-chip-button",
                type: "button",
                "aria-expanded": n.value,
                onClick: p[0] || (p[0] = gt((_) => n.value = !n.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, kg)) : (a(), i("span", bg, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              n.value && ((g = e.candidate.reasons) != null && g.length) ? (a(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = gt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", $g, [
                  (a(!0), i(B, null, he(e.candidate.reasons, (_) => (a(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", Cg, [
            e.candidate.context ? (a(), i("details", xg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (a(), i("div", Sg)),
            b(Ne, {
              variant: "primary",
              size: "sm",
              loading: e.loading,
              onClick: p[2] || (p[2] = (_) => o("select", e.candidate.url))
            }, {
              default: h(() => [
                S(m(e.actionLabel), 1)
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]);
    };
  }
}), nc = /* @__PURE__ */ Ie(Ig, [["__scopeId", "data-v-329b9068"]]), Eg = { class: "source-url-form" }, Tg = { class: "input-group" }, Mg = { key: 0 }, Pg = {
  key: 1,
  class: "description"
}, Rg = { class: "actions" }, Lg = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = P(() => o.modelValue.trim()), r = P(() => {
      const d = l.value;
      if (!d) return null;
      try {
        const v = new URL(d);
        if (!["http:", "https:"].includes(v.protocol))
          return "Use an HTTP or HTTPS URL.";
      } catch {
        return "Enter a valid URL.";
      }
      return null;
    }), c = P(() => !!l.value && !r.value && !o.disabled);
    function u() {
      c.value && n("submit", l.value);
    }
    return (d, v) => (a(), i("div", Eg, [
      s("div", Tg, [
        e.label ? (a(), i("label", Mg, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => n("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (a(), i("p", Pg, m(e.description), 1)) : y("", !0)
      ]),
      ot(d.$slots, "default", {}, void 0),
      s("div", Rg, [
        b(Ne, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            S(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), ac = /* @__PURE__ */ Ie(Lg, [["__scopeId", "data-v-e2610d45"]]), Dg = { class: "source-picker" }, Ng = {
  key: 0,
  class: "model-summary"
}, Og = { class: "model-heading" }, Ug = { class: "summary-name" }, Ag = { class: "summary-meta" }, zg = {
  key: 0,
  class: "hash-row"
}, Fg = { class: "hash-value" }, Vg = {
  key: 1,
  class: "hash-row"
}, Bg = { class: "hash-value" }, Wg = {
  key: 2,
  class: "hash-row"
}, Gg = { class: "hash-value" }, jg = {
  key: 4,
  class: "hash-error"
}, Hg = { class: "tab-bar" }, qg = ["onClick"], Kg = {
  key: 1,
  class: "tab-content"
}, Jg = { class: "section-header-row" }, Qg = {
  key: 0,
  class: "state-message"
}, Yg = {
  key: 1,
  class: "error-message"
}, Xg = {
  key: 2,
  class: "candidate-list"
}, Zg = {
  key: 3,
  class: "state-message"
}, eh = {
  key: 2,
  class: "tab-content source-browser-content"
}, th = {
  key: 3,
  class: "tab-content"
}, sh = { class: "section-header-row" }, oh = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = P(() => d.value.filter((I) => I.source === "workflow")), C = P(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function $() {
      v.value = !0, f.value = null;
      try {
        const I = await l(o.model.hash);
        d.value = I.candidates;
      } catch (I) {
        f.value = I instanceof Error ? I.message : "Failed to scan workflows";
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      if (o.model.hash) {
        w.value = !0, g.value = null;
        try {
          const I = await r(o.model.hash);
          n("hashesComputed", I);
        } catch (I) {
          g.value = I instanceof Error ? I.message : "Failed to compute hashes";
        } finally {
          w.value = !1;
        }
      }
    }
    return at($), (I, T) => (a(), i("div", Dg, [
      e.showModelSummary ? (a(), i("div", Ng, [
        s("div", Og, [
          T[4] || (T[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Ug, m(e.model.filename), 1)
        ]),
        s("div", Ag, [
          e.model.hash ? (a(), i("div", zg, [
            T[5] || (T[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Fg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (a(), i("div", Vg, [
            T[6] || (T[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Bg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (a(), i("div", Wg, [
            T[7] || (T[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Gg, m(e.model.sha256), 1)
          ])) : y("", !0),
          C.value ? (a(), R(Ne, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: w.value,
            onClick: x
          }, {
            default: h(() => [...T[8] || (T[8] = [
              S(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          g.value ? (a(), i("p", jg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Hg, [
        (a(), i(B, null, he(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (N) => u.value = M.id
        }, m(M.label), 11, qg)), 64))
      ]),
      u.value === "workflow" ? (a(), i("section", Kg, [
        s("div", Jg, [
          T[10] || (T[10] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(Ne, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: $
          }, {
            default: h(() => [...T[9] || (T[9] = [
              S(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (a(), i("div", Qg, "Scanning workflows...")) : f.value ? (a(), i("div", Yg, m(f.value), 1)) : _.value.length ? (a(), i("div", Xg, [
          (a(!0), i(B, null, he(_.value, (M) => (a(), R(nc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: T[0] || (T[0] = (N) => n("selectSource", N))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (a(), i("div", Zg, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (a(), i("section", eh, [
        b(oc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: T[1] || (T[1] = (M) => n("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (a(), i("section", th, [
        s("div", sh, [
          s("div", null, [
            T[11] || (T[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(ac, {
          modelValue: p.value,
          "onUpdate:modelValue": T[2] || (T[2] = (M) => p.value = M),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: T[3] || (T[3] = (M) => n("selectSource", M))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0)
    ]));
  }
}), nh = /* @__PURE__ */ Ie(oh, [["__scopeId", "data-v-e9633660"]]), ah = {
  key: 0,
  class: "error-message"
}, lh = /* @__PURE__ */ Ce({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    pt(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        c.value = f, u.value = null;
        try {
          await l(o.model.hash, f), n("saved"), n("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, n("hashesComputed");
    }
    return (f, p) => (a(), R($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => n("close"))
    }, {
      body: h(() => [
        b(nh, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (a(), i("p", ah, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => n("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            S(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), lc = /* @__PURE__ */ Ie(lh, [["__scopeId", "data-v-62104cdb"]]), ih = { class: "readiness-body" }, rh = {
  key: 0,
  class: "issue-section"
}, ch = { class: "section-heading" }, uh = { class: "issue-list" }, dh = { class: "issue-main" }, mh = { class: "issue-name" }, fh = { class: "issue-meta" }, vh = { key: 0 }, ph = { key: 1 }, gh = ["disabled", "onClick"], hh = {
  key: 1,
  class: "issue-note"
}, yh = {
  key: 1,
  class: "issue-section"
}, wh = { class: "section-heading" }, _h = { class: "issue-list" }, kh = { class: "issue-main" }, bh = { class: "issue-name" }, $h = { class: "issue-meta" }, Ch = { class: "issue-reason" }, xh = ["disabled", "onClick"], Sh = {
  key: 1,
  class: "issue-note"
}, Ih = {
  key: 2,
  class: "empty-state"
}, Eh = {
  key: 3,
  class: "error-message"
}, Th = /* @__PURE__ */ Ce({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, updateNodeCriticality: r } = ct(), c = k(null), u = k(null), d = k(null), v = k(null), f = P(() => o.warnings.models_without_sources), p = P(() => o.warnings.nodes_without_provenance);
    async function w($) {
      u.value = $, v.value = null;
      try {
        c.value = await l($);
      } catch (x) {
        v.value = x instanceof Error ? x.message : `Failed to load ${$}`;
      } finally {
        u.value = null;
      }
    }
    async function g($) {
      d.value = $, v.value = null;
      try {
        const x = await r($, "optional");
        if (x.status !== "success") {
          v.value = x.message || `Failed to update ${$}`;
          return;
        }
        n("revalidate");
      } catch (x) {
        v.value = x instanceof Error ? x.message : `Failed to update ${$}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      c.value = null, n("revalidate");
    }
    function C() {
      n("revalidate");
    }
    return ($, x) => (a(), i(B, null, [
      b($t, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: x[1] || (x[1] = (I) => n("close"))
      }, {
        header: h(() => [...x[3] || (x[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Required development nodes can also be marked optional when they should stay local but not be part of portable builds. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", ih, [
            f.value.length ? (a(), i("section", rh, [
              s("div", ch, [
                x[4] || (x[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", uh, [
                (a(!0), i(B, null, he(f.value, (I) => (a(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", dh, [
                    s("div", mh, m(I.filename), 1),
                    s("div", fh, [
                      I.hash ? (a(), i("span", vh, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (a(), i("span", ph, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (T) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, gh)) : (a(), i("span", hh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (a(), i("section", yh, [
              s("div", wh, [
                x[5] || (x[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", _h, [
                (a(!0), i(B, null, he(p.value, (I) => (a(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", kh, [
                    s("div", bh, m(I.name), 1),
                    s("div", $h, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Ch, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (T) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, xh)) : (a(), i("span", Sh, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (a(), i("div", Ih, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (a(), i("div", Eh, m(v.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: x[0] || (x[0] = (I) => n("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (a(), R(lc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: x[2] || (x[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: C
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Sl = /* @__PURE__ */ Ie(Th, [["__scopeId", "data-v-03f88a10"]]), Mh = { class: "health-section-header" }, Ph = { class: "suggestions-content" }, Rh = { class: "suggestions-text" }, Lh = { style: { "margin-top": "var(--cg-space-3)" } }, Dh = {
  key: 1,
  class: "no-issues-text"
}, Nh = {
  key: 2,
  class: "no-issues-text"
}, Oh = /* @__PURE__ */ Ce({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(null), v = k(!1), { validateExport: f } = ct();
    function p() {
      l.value = !0;
    }
    function w() {
      l.value = !1, _("view-workflows");
    }
    function g() {
      l.value = !1, _("view-nodes");
    }
    const _ = o, C = k(!1), $ = k(!1);
    function x() {
      $.value = !0, _("repair-environment");
    }
    function I() {
      $.value = !1;
    }
    function T() {
      l.value = !1;
    }
    const M = P(() => {
      const X = n.status.workflows.analyzed || [], H = X.filter(
        (ve) => ve.unresolved_models_count > 0 || ve.ambiguous_models_count > 0
      );
      return H.length === 0 && n.status.missing_models_count > 0 ? X.filter((ve) => ve.sync_state === "synced") : H;
    });
    function N() {
      const X = M.value;
      X.length !== 0 && (C.value = !0, _("repair-missing-models", X.map((H) => H.name)));
    }
    function z() {
      C.value = !1;
    }
    t({ resetRepairingState: z, resetRepairingEnvironmentState: I, closeDetailModal: T });
    const j = P(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), L = P(() => n.status.has_changes), K = P(() => {
      const X = n.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ce = P(() => n.status.has_changes || j.value), te = P(() => {
      var X;
      return ((X = u.value) == null ? void 0 : X.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), Y = P(
      () => te.value.models_without_sources.length
    ), we = P(
      () => te.value.nodes_without_provenance.length
    ), ee = P(
      () => Y.value + we.value
    ), W = P(
      () => ee.value > 0
    ), Q = P(() => {
      const X = [];
      if (Y.value > 0 && X.push(`${Y.value} model${Y.value === 1 ? "" : "s"} missing download source`), we.value > 0) {
        const H = te.value.nodes_without_provenance.filter((be) => be.criticality === "optional").length, ve = we.value - H;
        ve > 0 && X.push(`${ve} required node${ve === 1 ? "" : "s"} missing portable source`), H > 0 && X.push(`${H} optional node${H === 1 ? "" : "s"} missing portable source`);
      }
      return X;
    });
    async function ke() {
      v.value = !0, d.value = null;
      try {
        u.value = await f();
      } catch (X) {
        d.value = X instanceof Error ? X.message : "Failed to check readiness";
      } finally {
        v.value = !1;
      }
    }
    async function se() {
      await ke();
    }
    pt(
      () => [
        n.setupState,
        n.status.has_changes,
        n.status.workflows.new.length,
        n.status.workflows.modified.length,
        n.status.workflows.deleted.length,
        n.status.missing_models_count,
        n.status.comparison.is_synced,
        n.status.has_legacy_manager
      ],
      () => {
        n.setupState === "managed" && ke();
      },
      { immediate: !0 }
    );
    const pe = P(() => Object.keys(n.status.git_changes.workflow_changes_detail).length), O = P(() => n.status.git_changes.has_other_changes), ue = P(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter((H) => H.status === "broken")) || [];
    }), Pe = P(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter(
        (H) => H.has_path_sync_issues && !H.has_issues
      )) || [];
    }), _e = P(() => ue.value.length > 0);
    function De(X) {
      const H = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ve of H) {
        const be = X.match(ve);
        if (be != null && be[1])
          return be[1];
      }
      return null;
    }
    function Ue(X) {
      const H = X.map(De).filter((ve) => !!ve);
      return [...new Set(H)];
    }
    function Ve(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const H = X.slice(0, 2).map((be) => `>= ${be}`).join(", "), ve = X.length > 2;
      return ` (${H}${ve ? ", ..." : ""})`;
    }
    function le(X) {
      return X.replace(/uninstallable node mappings?/gi, (H) => H.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function oe(X) {
      const H = le(X.issue_summary || "Has issues"), ve = /(?:>=|v?\d+\.\d+)/i.test(H), be = Ue(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && be.length > 0 && !ve ? `${X.name} — ${H} (needs ComfyUI ${be.map((Ke) => `>= ${Ke}`).join(", ")})` : `${X.name} — ${H}`;
    }
    const Re = P(() => ue.value.reduce(
      (X, H) => X + (H.nodes_version_gated_count || 0),
      0
    )), fe = P(() => {
      const X = ue.value.flatMap(
        (H) => Ue(H.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ae = P(() => ue.value.reduce(
      (X, H) => X + (H.nodes_uninstallable_count || 0),
      0
    )), E = P(() => {
      const X = [];
      return Re.value > 0 && X.push(
        `${Re.value} require newer ComfyUI${Ve(fe.value)}`
      ), ae.value > 0 && X.push(`${ae.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = P(() => _e.value || Pe.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), ie = P(() => U.value || W.value || !!d.value), Ee = P(() => {
      const X = [];
      return n.status.workflows.new.length > 0 && X.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && X.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && X.push(`${n.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), xe = P(() => {
      var ve, be;
      const X = [], H = n.status.comparison;
      return (ve = H.missing_nodes) != null && ve.length && X.push(`${H.missing_nodes.length} missing node${H.missing_nodes.length === 1 ? "" : "s"}`), (be = H.extra_nodes) != null && be.length && X.push(`${H.extra_nodes.length} untracked node${H.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), Se = P(() => {
      var ve, be;
      const X = [], H = n.status.comparison;
      return (ve = H.extra_nodes) != null && ve.length && (H.extra_nodes.slice(0, 3).forEach((Ke) => {
        X.push(`Untracked: ${Ke}`);
      }), H.extra_nodes.length > 3 && X.push(`...and ${H.extra_nodes.length - 3} more untracked`)), (be = H.missing_nodes) != null && be.length && (H.missing_nodes.slice(0, 3).forEach((Ke) => {
        X.push(`Missing: ${Ke}`);
      }), H.missing_nodes.length > 3 && X.push(`...and ${H.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, H) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, { title: "STATUS" })
        ]),
        content: h(() => [
          n.setupState === "no_workspace" ? (a(), R(Yt, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: H[0] || (H[0] = (ve) => X.$emit("start-setup"))
              }, {
                default: h(() => [...H[15] || (H[15] = [
                  S(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "unmanaged" ? (a(), R(Yt, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: H[1] || (H[1] = (ve) => X.$emit("view-environments"))
              }, {
                default: h(() => [...H[16] || (H[16] = [
                  S(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : n.setupState === "empty_workspace" ? (a(), R(Yt, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: H[2] || (H[2] = (ve) => X.$emit("create-environment"))
              }, {
                default: h(() => [...H[17] || (H[17] = [
                  S(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: H[4] || (H[4] = (ve) => r.value = !0),
            onMouseleave: H[5] || (H[5] = (ve) => r.value = !1)
          }, [
            s("div", Mh, [
              b(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...H[18] || (H[18] = [
                  S(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Od, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), R(Me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...H[19] || (H[19] = [
                      S(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(Gm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Qt({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(gs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(gs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: j.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(gs, {
                  key: 2,
                  icon: "●",
                  count: pe.value,
                  label: pe.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                O.value ? (a(), R(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                L.value && !K.value && !O.value ? (a(), R(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                L.value ? y("", !0) : (a(), R(gs, {
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
                  H[21] || (H[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Ph, [
                    s("span", Rh, m(Ee.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: H[3] || (H[3] = (ve) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...H[20] || (H[20] = [
                        S(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (a(), R(Yt, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: H[6] || (H[6] = (ve) => X.$emit("create-branch"))
              }, {
                default: h(() => [...H[22] || (H[22] = [
                  S(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Lh, [
            b(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...H[23] || (H[23] = [
                S(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            ie.value ? (a(), i(B, { key: 0 }, [
              ue.value.length > 0 ? (a(), R(Yt, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${ue.value.length} workflow${ue.value.length === 1 ? "" : "s"} can't run`,
                description: E.value,
                items: ue.value.map(oe)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[7] || (H[7] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[24] || (H[24] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              Pe.value.length > 0 ? (a(), R(Yt, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${Pe.value.length} workflow${Pe.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: Pe.value.map((ve) => `${ve.name} — ${ve.models_needing_path_sync_count} model path${ve.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[8] || (H[8] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[25] || (H[25] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !_e.value ? (a(), R(Yt, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    disabled: C.value,
                    onClick: N
                  }, {
                    default: h(() => [
                      S(m(C.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: H[9] || (H[9] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...H[26] || (H[26] = [
                      S(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (a(), R(Yt, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: xe.value,
                items: Se.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: p
                  }, {
                    default: h(() => [...H[27] || (H[27] = [
                      S(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[10] || (H[10] = (ve) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[28] || (H[28] = [
                      S(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (a(), R(Yt, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[11] || (H[11] = (ve) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...H[29] || (H[29] = [
                      S(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0),
              W.value ? (a(), R(Yt, {
                key: 5,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility needs attention",
                description: "Some dependencies are missing source details needed to rebuild this environment elsewhere.",
                items: Q.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: H[12] || (H[12] = (ve) => c.value = !0)
                  }, {
                    default: h(() => [...H[30] || (H[30] = [
                      S(" Review Issues ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["items"])) : d.value ? (a(), R(Yt, {
                key: 6,
                severity: "warning",
                icon: "!",
                title: "Environment reproducibility check failed",
                description: d.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    loading: v.value,
                    onClick: ke
                  }, {
                    default: h(() => [...H[31] || (H[31] = [
                      S(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ce.value ? (a(), i("span", Dh, "No issues")) : (a(), i("span", Nh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Ov, {
        show: l.value,
        status: e.status,
        "is-repairing": $.value,
        onClose: H[13] || (H[13] = (ve) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: x
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (a(), R(Sl, {
        key: 0,
        warnings: u.value.warnings,
        onClose: H[14] || (H[14] = (ve) => c.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Uh = /* @__PURE__ */ Ie(Oh, [["__scopeId", "data-v-f6b165fd"]]);
async function In(e, t) {
  var n;
  if (!((n = window.app) != null && n.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, t);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Ah() {
  async function e() {
    try {
      return await In("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await In("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await In("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await In("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const zh = {
  key: 0,
  class: "base-title-count"
}, Fh = /* @__PURE__ */ Ce({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), R(_l(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", zh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ Ie(Fh, [["__scopeId", "data-v-5a01561d"]]), Vh = ["value", "disabled"], Bh = {
  key: 0,
  value: "",
  disabled: ""
}, Wh = ["value"], Gh = {
  key: 0,
  class: "base-select-error"
}, jh = /* @__PURE__ */ Ce({
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
    function t(n) {
      return typeof n == "string" ? n : n.value;
    }
    function o(n) {
      return typeof n == "string" ? n : n.label;
    }
    return (n, l) => (a(), i("div", {
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => n.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (a(), i("option", Bh, m(e.placeholder), 1)) : y("", !0),
        (a(!0), i(B, null, he(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Wh))), 128))
      ], 42, Vh),
      e.error ? (a(), i("span", Gh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), On = /* @__PURE__ */ Ie(jh, [["__scopeId", "data-v-4996bfe0"]]), Hh = { class: "popover-header" }, qh = { class: "popover-title" }, Kh = { class: "popover-content" }, Jh = {
  key: 0,
  class: "popover-actions"
}, Qh = /* @__PURE__ */ Ce({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (a(), R(Kt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Rt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = gt(() => {
          }, ["stop"]))
        }, [
          s("div", Hh, [
            s("h4", qh, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Kh, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Jh, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ Ie(Qh, [["__scopeId", "data-v-7c1f5547"]]), Yh = { class: "detail-section" }, Xh = {
  key: 0,
  class: "empty-message"
}, Zh = { class: "model-header" }, ey = { class: "model-name" }, ty = { class: "model-details" }, sy = { class: "model-row" }, oy = { class: "model-row" }, ny = { class: "label" }, ay = {
  key: 0,
  class: "model-row model-row-nodes"
}, ly = { class: "node-list" }, iy = ["onClick"], ry = {
  key: 1,
  class: "model-row"
}, cy = { class: "value" }, uy = {
  key: 2,
  class: "model-row"
}, dy = { class: "value error" }, my = {
  key: 0,
  class: "model-actions"
}, fy = { class: "detail-section" }, vy = {
  key: 0,
  class: "empty-message"
}, py = { class: "node-content" }, gy = { class: "node-main" }, hy = { class: "node-name" }, yy = { class: "node-badge" }, wy = {
  key: 0,
  class: "node-version"
}, _y = ["onClick"], ky = {
  key: 2,
  class: "node-install-queued"
}, by = {
  key: 0,
  class: "node-guidance"
}, $y = /* @__PURE__ */ Ce({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function x(ee) {
      switch (ee) {
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
    function I(ee) {
      switch (ee) {
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
    function T(ee) {
      switch (ee) {
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
    function M(ee) {
      switch (ee) {
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
    function N(ee) {
      switch (ee) {
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
    function z(ee) {
      if (!ee.loaded_by || ee.loaded_by.length === 0) return [];
      const W = ee.hash || ee.filename;
      return _.value.has(W) ? ee.loaded_by : ee.loaded_by.slice(0, 3);
    }
    function j(ee) {
      return _.value.has(ee);
    }
    function L(ee) {
      _.value.has(ee) ? _.value.delete(ee) : _.value.add(ee), _.value = new Set(_.value);
    }
    async function K() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ce(ee, W) {
      w.value[ee] = W, p.value = !0;
    }
    async function te(ee) {
      try {
        await c(ee);
      } catch (W) {
        f.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function Y(ee) {
      if (ee.package_id)
        try {
          const W = ee.latest_version || "latest";
          await u({
            id: ee.package_id,
            version: W,
            selected_version: W,
            mode: "remote",
            channel: "default"
          }), C.value.add(ee.package_id);
        } catch (W) {
          f.value = W instanceof Error ? W.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!p.value) {
        n("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ee, W] of Object.entries(w.value))
          await r(o.workflowName, ee, W);
        n("refresh"), n("close");
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return at(K), (ee, W) => (a(), i(B, null, [
      b($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: W[4] || (W[4] = (Q) => n("close"))
      }, {
        body: h(() => [
          d.value ? (a(), i(B, { key: 0 }, [
            s("section", Yh, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", Xh, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, he(d.value.models, (Q) => {
                var ke;
                return a(), i("div", {
                  key: Q.hash || Q.filename,
                  class: "model-card"
                }, [
                  s("div", Zh, [
                    W[6] || (W[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", ey, m(Q.filename), 1)
                  ]),
                  s("div", ty, [
                    s("div", sy, [
                      W[7] || (W[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", x(Q.status)])
                      }, m(I(Q.status)), 3)
                    ]),
                    s("div", oy, [
                      s("span", ny, [
                        W[8] || (W[8] = S(" Importance: ", -1)),
                        b(tc, {
                          size: 14,
                          title: "About importance levels",
                          onClick: W[0] || (W[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(On, {
                        "model-value": w.value[Q.filename] || Q.importance,
                        options: $,
                        "onUpdate:modelValue": (se) => ce(Q.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    Q.loaded_by && Q.loaded_by.length > 0 ? (a(), i("div", ay, [
                      W[9] || (W[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", ly, [
                        (a(!0), i(B, null, he(z(Q), (se, pe) => (a(), i("div", {
                          key: `${se.node_id}-${pe}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        Q.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => L(Q.hash || Q.filename)
                        }, m(j(Q.hash || Q.filename) ? "▼ Show less" : `▶ View all (${Q.loaded_by.length})`), 9, iy)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    Q.size_mb ? (a(), i("div", ry, [
                      W[10] || (W[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", cy, m(Q.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    Q.has_category_mismatch ? (a(), i("div", uy, [
                      W[13] || (W[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", dy, [
                        W[11] || (W[11] = S(" In ", -1)),
                        s("code", null, m(Q.actual_category) + "/", 1),
                        W[12] || (W[12] = S(" but loader needs ", -1)),
                        s("code", null, m((ke = Q.expected_categories) == null ? void 0 : ke[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  Q.status !== "available" ? (a(), i("div", my, [
                    Q.status === "downloadable" ? (a(), R(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: W[1] || (W[1] = (se) => n("resolve"))
                    }, {
                      default: h(() => [...W[14] || (W[14] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    })) : Q.status === "category_mismatch" && Q.file_path ? (a(), R(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => te(Q.file_path)
                    }, {
                      default: h(() => [...W[15] || (W[15] = [
                        S(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : Q.status !== "path_mismatch" ? (a(), R(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: W[2] || (W[2] = (se) => n("resolve"))
                    }, {
                      default: h(() => [...W[16] || (W[16] = [
                        S(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", fy, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", vy, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, he(d.value.nodes, (Q, ke) => (a(), i("div", {
                key: `${Q.name}-${Q.status}-${ke}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", T(Q.status)])
                }, m(M(Q.status)), 3),
                s("div", py, [
                  s("div", gy, [
                    s("span", hy, m(Q.name), 1),
                    s("span", yy, m(N(Q.status)), 1),
                    Q.version ? (a(), i("span", wy, "v" + m(Q.version), 1)) : y("", !0),
                    Q.status === "uninstallable" && Q.package_id && !C.value.has(Q.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(Q)
                    }, " Install ", 8, _y)) : Q.status === "uninstallable" && Q.package_id && C.value.has(Q.package_id) ? (a(), i("span", ky, " Queued ")) : y("", !0)
                  ]),
                  Q.guidance ? (a(), i("div", by, m(Q.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: W[3] || (W[3] = (Q) => n("close"))
          }, {
            default: h(() => [...W[17] || (W[17] = [
              S(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...W[18] || (W[18] = [
              S(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(rs, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: W[5] || (W[5] = (Q) => g.value = !1)
      }, {
        content: h(() => [...W[19] || (W[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              S(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              S(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              S(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Cy = /* @__PURE__ */ Ie($y, [["__scopeId", "data-v-543076d9"]]), rt = co({
  items: [],
  status: "idle"
});
let ws = null;
function ic() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Va(e) {
  return rt.items.find((t) => t.id === e);
}
async function ho() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((t) => t.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await xy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", ho();
  }
}
async function xy(e) {
  return new Promise((t, o) => {
    ws && (ws.close(), ws = null);
    const n = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${n}`);
    ws = l;
    let r = Date.now(), c = 0, u = Date.now(), d = !1;
    const v = 2e3, f = window.setInterval(() => {
      d || Date.now() - u > v && (e.speed = 0, e.eta = 0);
    }, 250), p = () => {
      window.clearInterval(f);
    };
    l.onmessage = (w) => {
      try {
        const g = JSON.parse(w.data);
        switch (g.type) {
          case "progress":
            e.downloaded = g.downloaded || 0, e.size = g.total || e.size, u = Date.now();
            const _ = u, C = (_ - r) / 1e3, $ = e.downloaded - c;
            if ($ > 0 && C > 0)
              if (e.speed = $ / C, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const x = e.size - e.downloaded;
                e.eta = x / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ws = null, t();
            break;
          case "error":
            d = !0, p(), l.close(), ws = null, o(new Error(g.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      p(), l.close(), ws = null, d || o(new Error("Connection lost"));
    };
  });
}
async function Sy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: ic(),
        workflow: o.workflow,
        filename: o.filename,
        url: o.url,
        targetPath: o.target_path,
        size: o.size || 0,
        type: "model",
        status: "paused",
        // Start as paused so user can review
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      rt.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Lo() {
  function e($) {
    for (const x of $) {
      if (rt.items.some(
        (M) => M.url === x.url && M.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const T = {
        id: ic(),
        workflow: x.workflow,
        filename: x.filename,
        url: x.url,
        targetPath: x.targetPath,
        size: x.size || 0,
        type: x.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      rt.items.push(T);
    }
    rt.status === "idle" && ho();
  }
  async function t($) {
    const x = Va($);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), x.status = "failed", x.error = "Cancelled by user", rt.status = "idle", ho();
      } else if (x.status === "queued") {
        const I = rt.items.findIndex((T) => T.id === $);
        I >= 0 && rt.items.splice(I, 1);
      }
    }
  }
  function o($) {
    const x = Va($);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, rt.status === "idle" && ho());
  }
  function n($) {
    const x = Va($);
    !x || x.status !== "paused" || (x.status = "queued", rt.status === "idle" && ho());
  }
  function l() {
    const $ = rt.items.filter((x) => x.status === "paused");
    for (const x of $)
      x.status = "queued";
    rt.status === "idle" && ho();
  }
  function r($) {
    const x = rt.items.findIndex((I) => I.id === $);
    x >= 0 && ["completed", "failed", "paused"].includes(rt.items[x].status) && rt.items.splice(x, 1);
  }
  function c() {
    rt.items = rt.items.filter(($) => $.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter(($) => $.status !== "failed");
  }
  const d = P(
    () => rt.items.find(($) => $.status === "downloading")
  ), v = P(
    () => rt.items.filter(($) => $.status === "queued")
  ), f = P(
    () => rt.items.filter(($) => $.status === "completed")
  ), p = P(
    () => rt.items.filter(($) => $.status === "failed")
  ), w = P(
    () => rt.items.filter(($) => $.status === "paused")
  ), g = P(() => rt.items.length > 0), _ = P(
    () => rt.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), C = P(
    () => rt.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: An(rt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: C,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: n,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Sy
  };
}
function rc() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function c(I, T) {
    var N;
    if (!((N = window.app) != null && N.api))
      throw new Error("ComfyUI API not available");
    const M = await window.app.api.fetchApi(I, T);
    if (!M.ok) {
      const z = await M.json().catch(() => ({})), j = z.error || z.message || `Request failed: ${M.status}`;
      throw new Error(j);
    }
    return M.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, T.package_aliases = T.package_aliases || {}, e.value = T, T;
    } catch (T) {
      const M = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = M, T;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, T, M, N) {
    l.value = !0, r.value = null;
    try {
      let z;
      if (!Ao()) {
        const j = Object.fromEntries(T), L = Object.fromEntries(M), K = N ? Array.from(N) : [];
        z = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: L,
              skipped_packages: K
            })
          }
        );
      }
      return t.value = z, z;
    } catch (z) {
      const j = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = j, z;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, T = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: T })
        }
      )), o.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, T = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: T })
        }
      )), n.value = M.results, M.results;
    } catch (M) {
      const N = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = N, M;
    } finally {
      l.value = !1;
    }
  }
  const p = co({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function w() {
    p.phase = "idle", p.currentFile = void 0, p.currentFileIndex = void 0, p.totalFiles = void 0, p.bytesDownloaded = void 0, p.bytesTotal = void 0, p.completedFiles = [], p.nodesToInstall = [], p.nodesInstalled = [], p.installError = void 0, p.needsRestart = void 0, p.error = void 0, p.nodeInstallProgress = void 0;
  }
  async function g(I) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(I);
    } catch (T) {
      const M = T instanceof Error ? T.message : "Failed to install nodes";
      throw p.installError = M, T;
    }
  }
  async function _(I) {
    var M;
    const T = await c(
      `/v2/comfygit/workflow/${I}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: p.nodesToInstall
        })
      }
    );
    if (p.nodeInstallProgress) {
      p.nodeInstallProgress.totalNodes = p.nodesToInstall.length;
      const N = new Map(((M = T.failed) == null ? void 0 : M.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < p.nodesToInstall.length; z++) {
        const j = p.nodesToInstall[z], L = N.get(j);
        p.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !L,
          error: L
        });
      }
    }
    return p.nodesInstalled = T.nodes_installed, p.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (p.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function C(I, T, M) {
    w(), p.phase = "resolving", r.value = null;
    const N = Object.fromEntries(T), z = Object.fromEntries(M);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: z
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const L = j.body.getReader(), K = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: te, value: Y } = await L.read();
        if (te) break;
        ce += K.decode(Y, { stream: !0 });
        const we = ce.split(`

`);
        ce = we.pop() || "";
        for (const ee of we) {
          if (!ee.trim()) continue;
          const W = ee.split(`
`);
          let Q = "", ke = "";
          for (const se of W)
            se.startsWith("event: ") ? Q = se.slice(7) : se.startsWith("data: ") && (ke = se.slice(6));
          if (ke)
            try {
              const se = JSON.parse(ke);
              $(Q, se);
            } catch (se) {
              console.warn("Failed to parse SSE event:", se);
            }
        }
      }
    } catch (j) {
      const L = j instanceof Error ? j.message : "Unknown error occurred";
      throw r.value = L, p.error = L, p.phase = "error", j;
    }
  }
  function $(I, T) {
    switch (I) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = T.total;
        break;
      case "file_start":
        p.currentFile = T.filename, p.currentFileIndex = T.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = T.downloaded, p.bytesTotal = T.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = T.nodes_to_install || [], T.download_results && (p.completedFiles = T.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = T.message, p.phase = "error", r.value = T.message;
        break;
    }
  }
  function x(I, T) {
    const { addToQueue: M } = Lo(), N = T.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: I,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return N.length > 0 && M(N), N.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: n,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: C,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: x
  };
}
const Iy = { class: "resolution-stepper" }, Ey = { class: "stepper-header" }, Ty = ["onClick"], My = {
  key: 0,
  class: "step-icon"
}, Py = {
  key: 1,
  class: "step-number"
}, Ry = { class: "step-label" }, Ly = {
  key: 0,
  class: "step-connector"
}, Dy = { class: "stepper-content" }, Ny = /* @__PURE__ */ Ce({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const p = o.stepStats[v];
        return p.total > 0 && p.resolved === p.total;
      }
      return o.completedSteps.includes(v);
    }
    function r(v) {
      var f;
      if ((f = o.stepStats) != null && f[v]) {
        const p = o.stepStats[v];
        return p.resolved > 0 && p.resolved < p.total;
      }
      return !1;
    }
    function c(v) {
      return l(v) ? "state-complete" : r(v) ? "state-partial" : "state-pending";
    }
    function u(v) {
      return !1;
    }
    function d(v) {
      n("step-change", v);
    }
    return (v, f) => (a(), i("div", Iy, [
      s("div", Ey, [
        (a(!0), i(B, null, he(e.steps, (p, w) => (a(), i("div", {
          key: p.id,
          class: Be(["step", {
            active: e.currentStep === p.id,
            completed: l(p.id),
            "in-progress": r(p.id),
            disabled: u(p.id)
          }]),
          onClick: (g) => d(p.id)
        }, [
          s("div", {
            class: Be(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (a(), i("span", My, "✓")) : (a(), i("span", Py, m(w + 1), 1))
          ], 2),
          s("div", Ry, m(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Ly)) : y("", !0)
        ], 10, Ty))), 128))
      ]),
      s("div", Dy, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Oy = /* @__PURE__ */ Ie(Ny, [["__scopeId", "data-v-2a7b3af8"]]), Uy = /* @__PURE__ */ Ce({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = P(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), n = P(() => `confidence-${o.value}`), l = P(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (a(), i("span", {
      class: Be(["confidence-badge", n.value, e.size])
    }, m(l.value), 3));
  }
}), Kn = /* @__PURE__ */ Ie(Uy, [["__scopeId", "data-v-17ec4b80"]]), Ay = { class: "node-info" }, zy = { class: "node-info-text" }, Fy = { class: "item-body" }, Vy = {
  key: 0,
  class: "resolved-state"
}, By = {
  key: 1,
  class: "multiple-options"
}, Wy = {
  key: 0,
  class: "installed-packs-section"
}, Gy = { class: "installed-packs-list" }, jy = ["onClick"], Hy = { class: "installed-pack-name" }, qy = { class: "installed-pack-source" }, Ky = { class: "options-list" }, Jy = ["onClick"], Qy = ["name", "value", "checked", "onChange"], Yy = { class: "option-content" }, Xy = { class: "option-header" }, Zy = { class: "option-package-id" }, e1 = {
  key: 0,
  class: "option-title"
}, t1 = { class: "option-meta" }, s1 = {
  key: 0,
  class: "installed-badge"
}, o1 = { class: "action-buttons" }, n1 = {
  key: 2,
  class: "unresolved"
}, a1 = {
  key: 0,
  class: "installed-packs-section"
}, l1 = { class: "installed-packs-list" }, i1 = ["onClick"], r1 = { class: "installed-pack-name" }, c1 = { class: "installed-pack-source" }, u1 = {
  key: 1,
  class: "searching-state"
}, d1 = { class: "options-list" }, m1 = ["onClick"], f1 = ["name", "value"], v1 = { class: "option-content" }, p1 = { class: "option-header" }, g1 = { class: "option-package-id" }, h1 = {
  key: 0,
  class: "option-description"
}, y1 = { class: "option-meta" }, w1 = {
  key: 0,
  class: "installed-badge"
}, _1 = {
  key: 3,
  class: "unresolved-message"
}, k1 = { class: "action-buttons" }, b1 = /* @__PURE__ */ Ce({
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
    options: {},
    selectedOptionIndex: {},
    choice: {},
    status: {},
    statusLabel: {},
    searchResults: {},
    isSearching: { type: Boolean },
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected", "installed-pack-selected"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(f, p = 80) {
      return f.length <= p ? f : f.slice(0, p - 3) + "...";
    }
    const r = P(() => !!o.choice);
    P(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.action;
    }), P(() => {
      var f;
      return (f = o.choice) == null ? void 0 : f.package_id;
    });
    const c = P(() => o.installedNodePacks || []), u = P(() => {
      switch (o.status) {
        case "not-found":
          return "unresolved";
        case "ambiguous":
          return "ambiguous";
        case "install":
          return "resolved";
        case "optional":
          return "optional";
        case "skip":
          return "skip";
        default:
          return "unresolved";
      }
    });
    function d(f) {
      n("option-selected", f);
    }
    function v(f) {
      switch (f) {
        case "development":
          return "dev";
        case "git":
          return "git";
        case "registry":
          return "registry";
        default:
          return f || "unknown";
      }
    }
    return (f, p) => (a(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", Ay, [
        s("span", zy, [
          p[7] || (p[7] = S("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Fy, [
        r.value ? (a(), i("div", Vy, [
          b(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => n("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              S(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", By, [
          c.value.length > 0 ? (a(), i("div", Wy, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", Gy, [
              (a(!0), i(B, null, he(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", Hy, m(w.package_id), 1),
                s("span", qy, m(v(w.source)), 1)
              ], 8, jy))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Ky, [
            (a(!0), i(B, null, he(e.options, (w, g) => (a(), i("label", {
              key: w.package_id,
              class: Be(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => d(g)
            }, [
              s("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => d(g)
              }, null, 40, Qy),
              s("div", Yy, [
                s("div", Xy, [
                  s("span", Zy, m(w.package_id), 1),
                  b(Kn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", e1, m(w.title), 1)) : y("", !0),
                s("div", t1, [
                  w.is_installed ? (a(), i("span", s1, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Jy))), 128))
          ]),
          s("div", o1, [
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => n("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                S(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                S(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", n1, [
          c.value.length > 0 ? (a(), i("div", a1, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", l1, [
              (a(!0), i(B, null, he(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", r1, m(w.package_id), 1),
                s("span", c1, m(v(w.source)), 1)
              ], 8, i1))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (a(), i("div", u1, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(B, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", d1, [
              (a(!0), i(B, null, he(e.searchResults.slice(0, 5), (w, g) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, f1),
                s("div", v1, [
                  s("div", p1, [
                    s("span", g1, m(w.package_id), 1),
                    b(Kn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", h1, m(l(w.description)), 1)) : y("", !0),
                  s("div", y1, [
                    w.is_installed ? (a(), i("span", w1, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, m1))), 128))
            ])
          ], 64)) : (a(), i("div", _1, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", k1, [
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => n("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  S(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => n("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                S(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => n("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), $1 = /* @__PURE__ */ Ie(b1, [["__scopeId", "data-v-fb0bbf03"]]), C1 = { class: "item-navigator" }, x1 = { class: "nav-item-info" }, S1 = ["title"], I1 = { class: "nav-controls" }, E1 = { class: "nav-arrows" }, T1 = ["disabled"], M1 = ["disabled"], P1 = { class: "nav-position" }, R1 = /* @__PURE__ */ Ce({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", C1, [
      s("div", x1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, S1)
      ]),
      s("div", I1, [
        s("div", E1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, T1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, M1)
        ]),
        s("span", P1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), cc = /* @__PURE__ */ Ie(R1, [["__scopeId", "data-v-74af7920"]]), L1 = { class: "node-resolution-step" }, D1 = {
  key: 0,
  class: "auto-resolved-section"
}, N1 = { class: "section-header" }, O1 = { class: "stat-badge" }, U1 = { class: "resolved-packages-list" }, A1 = { class: "package-info" }, z1 = { class: "package-id" }, F1 = { class: "node-count" }, V1 = { class: "package-actions" }, B1 = {
  key: 0,
  class: "status-badge install"
}, W1 = {
  key: 1,
  class: "status-badge skip"
}, G1 = ["onClick"], j1 = {
  key: 1,
  class: "section-divider"
}, H1 = { class: "step-header" }, q1 = { class: "stat-badge" }, K1 = {
  key: 1,
  class: "step-body"
}, J1 = {
  key: 3,
  class: "empty-state"
}, Q1 = { class: "node-modal-body" }, Y1 = { class: "node-search-results-container" }, X1 = {
  key: 0,
  class: "node-search-results"
}, Z1 = ["onClick"], ew = { class: "node-result-header" }, tw = { class: "node-result-package-id" }, sw = {
  key: 0,
  class: "node-result-description"
}, ow = {
  key: 1,
  class: "node-empty-state"
}, nw = {
  key: 2,
  class: "node-empty-state"
}, aw = {
  key: 3,
  class: "node-empty-state"
}, lw = { class: "node-manual-entry-modal" }, iw = { class: "node-modal-body" }, rw = { class: "node-modal-actions" }, cw = /* @__PURE__ */ Ce({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: t }) {
    const o = e, n = t, { searchNodes: l } = rc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && pe(), _.value = !1;
    }
    const $ = P(() => o.nodes[r.value]), x = P(() => o.nodes.filter((le) => o.nodeChoices.has(le.node_type)).length), I = P(() => $.value ? w.value.get($.value.node_type) || [] : []), T = P(() => $.value ? g.value.has($.value.node_type) : !1);
    pt($, async (le) => {
      var oe;
      le && ((oe = le.options) != null && oe.length || w.value.has(le.node_type) || g.value.has(le.node_type) || o.nodeChoices.has(le.node_type) || await M(le.node_type));
    }, { immediate: !0 });
    async function M(le) {
      g.value.add(le);
      try {
        const oe = await l(le, 5);
        w.value.set(le, oe);
      } catch {
        w.value.set(le, []);
      } finally {
        g.value.delete(le);
      }
    }
    const N = P(() => o.autoResolvedPackages.filter((le) => !o.skippedPackages.has(le.package_id)).length);
    function z(le) {
      return o.skippedPackages.has(le);
    }
    function j(le) {
      n("package-skip", le);
    }
    const L = P(() => {
      var oe;
      if (!$.value) return "not-found";
      const le = o.nodeChoices.get($.value.node_type);
      if (le)
        switch (le.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = $.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), K = P(() => {
      var oe;
      if (!$.value) return;
      const le = o.nodeChoices.get($.value.node_type);
      if (le)
        switch (le.action) {
          case "install":
            return le.package_id ? `→ ${le.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = $.value.options) != null && oe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function ce(le) {
      le >= 0 && le < o.nodes.length && (r.value = le);
    }
    function te() {
      var le;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Re = o.nodes[oe];
        if (!((le = o.nodeChoices) != null && le.has(Re.node_type))) {
          ce(oe);
          return;
        }
      }
    }
    function Y() {
      $.value && (n("mark-optional", $.value.node_type), Pt(() => te()));
    }
    function we() {
      $.value && (n("skip", $.value.node_type), Pt(() => te()));
    }
    function ee(le) {
      $.value && (n("option-selected", $.value.node_type, le), Pt(() => te()));
    }
    function W() {
      $.value && n("clear-choice", $.value.node_type);
    }
    function Q() {
      $.value && (d.value = $.value.node_type, f.value = I.value, c.value = !0, _e(d.value));
    }
    function ke() {
      v.value = "", u.value = !0;
    }
    function se(le) {
      $.value && (n("manual-entry", $.value.node_type, le), Pt(() => te()));
    }
    function pe() {
      c.value = !1, d.value = "", f.value = [];
    }
    function O() {
      u.value = !1, v.value = "";
    }
    let ue = null;
    function Pe() {
      ue && clearTimeout(ue), ue = setTimeout(() => {
        _e(d.value);
      }, 300);
    }
    async function _e(le) {
      if (!le.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(le, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function De(le) {
      $.value && (n("manual-entry", $.value.node_type, le.package_id), pe(), Pt(() => te()));
    }
    function Ue(le) {
      $.value && (n("manual-entry", $.value.node_type, le.package_id), Pt(() => te()));
    }
    function Ve() {
      !$.value || !v.value.trim() || (n("manual-entry", $.value.node_type, v.value.trim()), O(), Pt(() => te()));
    }
    return (le, oe) => {
      var Re, fe;
      return a(), i("div", L1, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", D1, [
          s("div", N1, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", O1, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", U1, [
            (a(!0), i(B, null, he(e.autoResolvedPackages, (ae) => (a(), i("div", {
              key: ae.package_id,
              class: "resolved-package-item"
            }, [
              s("div", A1, [
                s("code", z1, m(ae.package_id), 1),
                s("span", F1, m(ae.node_types_count) + " node type" + m(ae.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", V1, [
                z(ae.package_id) ? (a(), i("span", W1, " SKIPPED ")) : (a(), i("span", B1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (E) => j(ae.package_id)
                }, m(z(ae.package_id) ? "Include" : "Skip"), 9, G1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", j1)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(B, { key: 2 }, [
          s("div", H1, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", q1, m(x.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(cc, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (ae) => ce(r.value - 1)),
            onNext: oe[1] || (oe[1] = (ae) => ce(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), i("div", K1, [
            b($1, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((Re = $.value.options) != null && Re.length),
              options: $.value.options,
              choice: (fe = e.nodeChoices) == null ? void 0 : fe.get($.value.node_type),
              status: L.value,
              "status-label": K.value,
              "search-results": I.value,
              "is-searching": T.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Y,
              onSkip: we,
              onManualEntry: ke,
              onSearch: Q,
              onOptionSelected: ee,
              onClearChoice: W,
              onSearchResultSelected: Ue,
              onInstalledPackSelected: se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", J1, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(Kt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = gt((ae) => _.value = !0, ["self"])),
            onMouseup: gt(C, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (ae) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              s("div", Q1, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (ae) => d.value = ae),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", Y1, [
                  f.value.length > 0 ? (a(), i("div", X1, [
                    (a(!0), i(B, null, he(f.value, (ae) => (a(), i("div", {
                      key: ae.package_id,
                      class: "node-search-result-item",
                      onClick: (E) => De(ae)
                    }, [
                      s("div", ew, [
                        s("code", tw, m(ae.package_id), 1),
                        ae.match_confidence ? (a(), R(Kn, {
                          key: 0,
                          confidence: ae.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ae.description ? (a(), i("div", sw, m(ae.description), 1)) : y("", !0)
                    ], 8, Z1))), 128))
                  ])) : p.value ? (a(), i("div", ow, "Searching...")) : d.value ? (a(), i("div", nw, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), i("div", aw, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(Kt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: gt(O, ["self"])
          }, [
            s("div", lw, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              s("div", iw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (ae) => v.value = ae),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", rw, [
                  b(Ne, {
                    variant: "secondary",
                    onClick: O
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      S("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: Ve
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
                      S(" Add Package ", -1)
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
}), uw = /* @__PURE__ */ Ie(cw, [["__scopeId", "data-v-94c6a438"]]), dw = { class: "node-info" }, mw = { class: "node-info-text" }, fw = { class: "item-body" }, vw = {
  key: 0,
  class: "resolved-state"
}, pw = {
  key: 1,
  class: "multiple-options"
}, gw = { class: "options-list" }, hw = ["onClick"], yw = ["name", "value", "checked", "onChange"], ww = { class: "option-content" }, _w = { class: "option-header" }, kw = { class: "option-filename" }, bw = { class: "option-meta" }, $w = { class: "option-size" }, Cw = { class: "option-category" }, xw = { class: "option-path" }, Sw = { class: "action-buttons" }, Iw = {
  key: 2,
  class: "unresolved"
}, Ew = { class: "action-buttons" }, Tw = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = P(() => !!o.choice);
    P(() => {
      var d;
      return (d = o.choice) == null ? void 0 : d.action;
    }), P(() => {
      var d, v;
      return ((v = (d = o.choice) == null ? void 0 : d.selected_model) == null ? void 0 : v.filename) || "selected";
    });
    const r = P(() => {
      switch (o.status) {
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
      n("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (a(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", dw, [
        s("span", mw, [
          v[7] || (v[7] = S("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", fw, [
        l.value ? (a(), i("div", vw, [
          b(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => n("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              S(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", pw, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", gw, [
            (a(!0), i(B, null, he(e.options, (f, p) => (a(), i("label", {
              key: f.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              s("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, yw),
              s("div", ww, [
                s("div", _w, [
                  s("span", kw, m(f.model.filename), 1),
                  b(Kn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", bw, [
                  s("span", $w, m(u(f.model.size)), 1),
                  s("span", Cw, m(f.model.category), 1)
                ]),
                s("div", xw, m(f.model.relative_path), 1)
              ])
            ], 10, hw))), 128))
          ]),
          s("div", Sw, [
            b(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => n("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                S(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                S(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => n("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (a(), i("div", Iw, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Ew, [
            b(Ne, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => n("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                S(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => n("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                S(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => n("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                S(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Mw = /* @__PURE__ */ Ie(Tw, [["__scopeId", "data-v-8a82fefa"]]), Pw = { class: "model-resolution-step" }, Rw = { class: "step-header" }, Lw = { class: "step-info" }, Dw = { class: "step-title" }, Nw = { class: "step-description" }, Ow = { class: "stat-badge" }, Uw = {
  key: 1,
  class: "step-body"
}, Aw = {
  key: 2,
  class: "empty-state"
}, zw = { class: "model-search-modal" }, Fw = { class: "model-modal-body" }, Vw = {
  key: 0,
  class: "model-search-results"
}, Bw = ["onClick"], Ww = { class: "model-result-header" }, Gw = { class: "model-result-filename" }, jw = { class: "model-result-meta" }, Hw = { class: "model-result-category" }, qw = { class: "model-result-size" }, Kw = {
  key: 0,
  class: "model-result-path"
}, Jw = {
  key: 1,
  class: "model-no-results"
}, Qw = {
  key: 2,
  class: "model-searching"
}, Yw = { class: "model-download-url-modal" }, Xw = { class: "model-modal-body" }, Zw = { class: "model-input-group" }, e0 = { class: "model-input-group" }, t0 = { class: "model-modal-actions" }, s0 = /* @__PURE__ */ Ce({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: t }) {
    const o = {
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
    function n(se) {
      var pe;
      return se && ((pe = o[se]) == null ? void 0 : pe[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = P(() => l.models[c.value]), C = P(() => l.models.some((se) => se.is_download_intent)), $ = P(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), x = P(() => {
      var pe;
      if (!_.value) return "";
      const se = n((pe = _.value.reference) == null ? void 0 : pe.node_type);
      return se ? `${se}/${_.value.filename}` : "";
    }), I = P(() => {
      var pe;
      if (!_.value) return "not-found";
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
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
      return _.value.is_download_intent ? "download" : (pe = _.value.options) != null && pe.length ? "ambiguous" : "not-found";
    }), T = P(() => {
      var pe, O;
      if (!_.value) return;
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (pe = se.selected_model) != null && pe.filename ? `→ ${se.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (O = _.value.options) != null && O.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function M(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function N() {
      var se;
      for (let pe = c.value + 1; pe < l.models.length; pe++) {
        const O = l.models[pe];
        if (!O.is_download_intent && !((se = l.modelChoices) != null && se.has(O.filename))) {
          M(pe);
          return;
        }
      }
    }
    function z() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => N()));
    }
    function j() {
      _.value && (r("skip", _.value.filename), Pt(() => N()));
    }
    function L(se) {
      _.value && (r("option-selected", _.value.filename, se), Pt(() => N()));
    }
    function K() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ce() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function te() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || x.value, d.value = !0);
    }
    function Y() {
      u.value = !1, v.value = "", w.value = [];
    }
    function we() {
      d.value = !1, f.value = "", p.value = "";
    }
    function ee() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function W(se) {
      _.value && (Y(), Pt(() => N()));
    }
    function Q() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), we(), Pt(() => N()));
    }
    function ke(se) {
      if (!se) return "Unknown";
      const pe = se / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, pe) => {
      var O, ue, Pe;
      return a(), i("div", Pw, [
        s("div", Rw, [
          s("div", Lw, [
            s("h3", Dw, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Nw, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Ow, m($.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(cc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (_e) => M(c.value - 1)),
          onNext: pe[1] || (pe[1] = (_e) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Uw, [
          b(Mw, {
            filename: _.value.filename,
            "node-type": ((O = _.value.reference) == null ? void 0 : O.node_type) || "Unknown",
            "has-multiple-options": !!((ue = _.value.options) != null && ue.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: I.value,
            "status-label": T.value,
            onMarkOptional: z,
            onSkip: j,
            onDownloadUrl: te,
            onSearch: ce,
            onOptionSelected: L,
            onClearChoice: K
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", Aw, [...pe[5] || (pe[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(Kt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(Y, ["self"])
          }, [
            s("div", zw, [
              s("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Fw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (_e) => v.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Vw, [
                  (a(!0), i(B, null, he(w.value, (_e) => (a(), i("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (De) => W()
                  }, [
                    s("div", Ww, [
                      s("code", Gw, m(_e.filename), 1)
                    ]),
                    s("div", jw, [
                      s("span", Hw, m(_e.category), 1),
                      s("span", qw, m(ke(_e.size)), 1)
                    ]),
                    _e.relative_path ? (a(), i("div", Kw, m(_e.relative_path), 1)) : y("", !0)
                  ], 8, Bw))), 128))
                ])) : v.value && !g.value ? (a(), i("div", Jw, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), i("div", Qw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(Kt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: gt(we, ["self"])
          }, [
            s("div", Yw, [
              s("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", Xw, [
                s("div", Zw, [
                  pe[8] || (pe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (_e) => f.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", e0, [
                  pe[9] || (pe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (_e) => p.value = _e),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", t0, [
                  b(Ne, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...pe[10] || (pe[10] = [
                      S("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(Ne, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: Q
                  }, {
                    default: h(() => [...pe[11] || (pe[11] = [
                      S(" Queue Download ", -1)
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
}), o0 = /* @__PURE__ */ Ie(s0, [["__scopeId", "data-v-5c700bfa"]]), n0 = { class: "applying-step" }, a0 = {
  key: 0,
  class: "phase-content"
}, l0 = {
  key: 1,
  class: "phase-content"
}, i0 = { class: "phase-description" }, r0 = { class: "overall-progress" }, c0 = { class: "progress-bar" }, u0 = { class: "progress-label" }, d0 = { class: "install-list" }, m0 = { class: "install-icon" }, f0 = { key: 0 }, v0 = {
  key: 1,
  class: "spinner"
}, p0 = { key: 2 }, g0 = { key: 3 }, h0 = {
  key: 0,
  class: "install-error"
}, y0 = {
  key: 2,
  class: "phase-content"
}, w0 = { class: "phase-header" }, _0 = { class: "phase-title" }, k0 = { class: "completion-summary" }, b0 = {
  key: 0,
  class: "summary-item success"
}, $0 = { class: "summary-text" }, C0 = {
  key: 1,
  class: "summary-item error"
}, x0 = { class: "summary-text" }, S0 = {
  key: 2,
  class: "failed-list"
}, I0 = { class: "failed-node-id" }, E0 = { class: "failed-error" }, T0 = {
  key: 4,
  class: "summary-item success"
}, M0 = {
  key: 5,
  class: "restart-prompt"
}, P0 = {
  key: 3,
  class: "phase-content error"
}, R0 = { class: "error-message" }, L0 = /* @__PURE__ */ Ce({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const t = e, o = P(() => {
      var v, f;
      const u = ((v = t.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || t.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), n = P(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = P(() => n.value.length > 0);
    function r(u, d) {
      var f, p;
      const v = (f = t.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = t.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = t.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, f, p, w;
      return a(), i("div", n0, [
        e.progress.phase === "resolving" ? (a(), i("div", a0, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", l0, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", i0, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", r0, [
            s("div", c0, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", u0, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", d0, [
            (a(!0), i(B, null, he(e.progress.nodesToInstall, (g, _) => (a(), i("div", {
              key: g,
              class: Be(["install-item", r(g, _)])
            }, [
              s("span", m0, [
                r(g, _) === "pending" ? (a(), i("span", f0, "○")) : r(g, _) === "installing" ? (a(), i("span", v0, "◌")) : r(g, _) === "complete" ? (a(), i("span", p0, "✓")) : r(g, _) === "failed" ? (a(), i("span", g0, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              c(g) ? (a(), i("span", h0, m(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", y0, [
          s("div", w0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", _0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", k0, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", b0, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", $0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", C0, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", x0, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", S0, [
              (a(!0), i(B, null, he(n.value, (g) => (a(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", I0, m(g.node_id), 1),
                s("span", E0, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", T0, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", M0, [
              d[7] || (d[7] = s("div", { class: "restart-warning" }, [
                s("span", { class: "warning-icon" }, "⚠"),
                s("div", { class: "warning-content" }, [
                  s("strong", null, "Restart Required"),
                  s("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              s("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (g) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (a(), i("div", P0, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", R0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), D0 = /* @__PURE__ */ Ie(L0, [["__scopeId", "data-v-5efaae58"]]), N0 = {
  key: 0,
  class: "loading-state"
}, O0 = {
  key: 1,
  class: "wizard-content"
}, U0 = {
  key: 0,
  class: "step-content"
}, A0 = { class: "analysis-summary" }, z0 = { class: "analysis-header" }, F0 = { class: "summary-description" }, V0 = { class: "stats-grid" }, B0 = { class: "stat-card" }, W0 = { class: "stat-items" }, G0 = {
  key: 0,
  class: "stat-item success"
}, j0 = { class: "stat-count" }, H0 = {
  key: 1,
  class: "stat-item info"
}, q0 = { class: "stat-count" }, K0 = {
  key: 2,
  class: "stat-item warning"
}, J0 = { class: "stat-count" }, Q0 = {
  key: 3,
  class: "stat-item warning"
}, Y0 = { class: "stat-count" }, X0 = {
  key: 4,
  class: "stat-item warning"
}, Z0 = { class: "stat-count" }, e_ = {
  key: 5,
  class: "stat-item error"
}, t_ = { class: "stat-count" }, s_ = { class: "stat-card" }, o_ = { class: "stat-items" }, n_ = { class: "stat-item success" }, a_ = { class: "stat-count" }, l_ = {
  key: 0,
  class: "stat-item info"
}, i_ = { class: "stat-count" }, r_ = {
  key: 1,
  class: "stat-item warning"
}, c_ = { class: "stat-count" }, u_ = {
  key: 2,
  class: "stat-item warning"
}, d_ = { class: "stat-count" }, m_ = {
  key: 3,
  class: "stat-item error"
}, f_ = { class: "stat-count" }, v_ = {
  key: 0,
  class: "status-message warning"
}, p_ = { class: "status-text" }, g_ = {
  key: 1,
  class: "status-message warning"
}, h_ = { class: "status-text" }, y_ = {
  key: 2,
  class: "status-message info"
}, w_ = { class: "status-text" }, __ = {
  key: 3,
  class: "status-message info"
}, k_ = { class: "status-text" }, b_ = {
  key: 4,
  class: "status-message info"
}, $_ = { class: "status-text" }, C_ = {
  key: 5,
  class: "status-message warning"
}, x_ = { class: "status-text" }, S_ = {
  key: 6,
  class: "status-message success"
}, I_ = {
  key: 7,
  class: "category-mismatch-section"
}, E_ = { class: "mismatch-list" }, T_ = { class: "mismatch-path" }, M_ = { class: "mismatch-target" }, P_ = {
  key: 8,
  class: "category-mismatch-section"
}, R_ = { class: "mismatch-list" }, L_ = { class: "mismatch-path" }, D_ = { class: "status-text" }, N_ = {
  key: 1,
  class: "step-content node-step-content"
}, O_ = {
  key: 0,
  class: "community-node-section"
}, U_ = { class: "community-node-header" }, A_ = { class: "community-node-title" }, z_ = { class: "community-node-list" }, F_ = { class: "community-node-info" }, V_ = { class: "community-node-heading" }, B_ = { class: "item-name" }, W_ = { class: "community-node-package" }, G_ = { class: "community-node-meta" }, j_ = { class: "community-node-guidance" }, H_ = { key: 0 }, q_ = { class: "community-choice-status" }, K_ = { class: "community-node-actions" }, J_ = {
  key: 3,
  class: "step-content"
}, Q_ = { class: "review-summary" }, Y_ = { class: "review-stats" }, X_ = { class: "review-stat" }, Z_ = { class: "stat-value" }, ek = { class: "review-stat" }, tk = { class: "stat-value" }, sk = { class: "review-stat" }, ok = { class: "stat-value" }, nk = { class: "review-stat" }, ak = { class: "stat-value" }, lk = {
  key: 0,
  class: "review-section"
}, ik = { class: "section-title" }, rk = { class: "review-items" }, ck = { class: "item-name" }, uk = { class: "item-choice" }, dk = {
  key: 0,
  class: "choice-badge install"
}, mk = {
  key: 1,
  class: "choice-badge skip"
}, fk = {
  key: 1,
  class: "review-section"
}, vk = { class: "section-title" }, pk = { class: "review-items" }, gk = { class: "item-name" }, hk = { class: "item-choice" }, yk = {
  key: 0,
  class: "choice-badge install"
}, wk = {
  key: 1,
  class: "choice-badge optional"
}, _k = {
  key: 2,
  class: "choice-badge skip"
}, kk = {
  key: 2,
  class: "review-section"
}, bk = { class: "section-title" }, $k = { class: "review-items" }, Ck = { class: "item-name" }, xk = { class: "item-choice" }, Sk = {
  key: 0,
  class: "choice-badge install"
}, Ik = {
  key: 1,
  class: "choice-badge optional"
}, Ek = {
  key: 2,
  class: "choice-badge skip"
}, Tk = {
  key: 1,
  class: "choice-badge pending"
}, Mk = {
  key: 3,
  class: "review-section"
}, Pk = { class: "section-title" }, Rk = { class: "review-items download-details" }, Lk = { class: "download-info" }, Dk = { class: "item-name" }, Nk = { class: "download-meta" }, Ok = { class: "download-path" }, Uk = ["title"], Ak = {
  key: 4,
  class: "review-section"
}, zk = { class: "section-title" }, Fk = { class: "review-items" }, Vk = { class: "item-name" }, Bk = { class: "item-choice" }, Wk = {
  key: 0,
  class: "choice-badge install"
}, Gk = {
  key: 1,
  class: "choice-badge download"
}, jk = {
  key: 2,
  class: "choice-badge optional"
}, Hk = {
  key: 3,
  class: "choice-badge skip"
}, qk = {
  key: 4,
  class: "choice-badge skip"
}, Kk = {
  key: 1,
  class: "choice-badge download"
}, Jk = {
  key: 2,
  class: "choice-badge pending"
}, Qk = {
  key: 5,
  class: "no-choices"
}, Yk = /* @__PURE__ */ Ce({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = rc(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), C = k([]), $ = k(!1), x = k(!1), I = k(null), T = k("analysis"), M = k([]), N = k(/* @__PURE__ */ new Map()), z = k(/* @__PURE__ */ new Map()), j = k(/* @__PURE__ */ new Set()), L = P(() => {
      const re = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ee.value || ke.value || se.value) && re.push({ id: "nodes", label: "Nodes" }), W.value && re.push({ id: "models", label: "Models" }), re.push({ id: "review", label: "Review" }), T.value === "applying" && re.push({ id: "applying", label: "Applying" }), re;
    }), K = P(() => _.value ? _.value.stats.needs_user_input : !1), ce = P(() => _.value ? _.value.nodes.version_gated || [] : []), te = P(() => _.value ? _.value.nodes.uninstallable || [] : []), Y = P(() => te.value.filter((re) => {
      var F;
      return !!((F = re.package) != null && F.package_id);
    })), we = P(() => ce.value.length > 0), ee = P(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), W = P(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), Q = P(() => _.value ? _.value.stats.download_intents > 0 : !1), ke = P(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), se = P(() => Y.value.length > 0), pe = P(() => _.value ? _.value.nodes.resolved.length : 0), O = P(() => _.value ? _.value.models.resolved.filter((re) => re.has_category_mismatch) : []), ue = P(() => O.value.length > 0), Pe = P(() => ee.value || ke.value || se.value ? "nodes" : W.value ? "models" : "review"), _e = P(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((me) => !me.is_installed), F = /* @__PURE__ */ new Set();
      return re.filter((me) => F.has(me.package.package_id) ? !1 : (F.add(me.package.package_id), !0));
    }), De = P(() => {
      if (!_.value) return [];
      const re = _.value.nodes.resolved.filter((me) => !me.is_installed), F = /* @__PURE__ */ new Map();
      for (const me of re) {
        const Ge = F.get(me.package.package_id);
        Ge ? Ge.node_types_count++ : F.set(me.package.package_id, {
          package_id: me.package.package_id,
          title: me.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), Ue = P(() => _e.value.filter((re) => !j.value.has(re.package.package_id))), Ve = P(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), le = P(() => {
      if (!_.value) return [];
      const re = _.value.nodes.unresolved.map((me) => ({
        node_type: me.reference.node_type,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.nodes.ambiguous.map((me) => ({
        node_type: me.reference.node_type,
        has_multiple_options: !0,
        options: me.options.map((Ge) => ({
          package_id: Ge.package.package_id,
          title: Ge.package.title,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          is_installed: Ge.is_installed
        }))
      }));
      return [...re, ...F];
    }), oe = P(() => {
      if (!_.value) return [];
      const re = _.value.models.unresolved.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        reason: me.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.models.ambiguous.map((me) => ({
        filename: me.reference.widget_value,
        reference: me.reference,
        has_multiple_options: !0,
        options: me.options.map((Ge) => ({
          model: Ge.model,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          has_download_source: Ge.has_download_source
        }))
      }));
      return [...re, ...F];
    }), Re = P(() => {
      const re = oe.value, F = Ve.value.map((me) => ({
        filename: me.filename,
        reference: me.reference,
        is_download_intent: !0,
        resolved_model: me.resolved_model,
        download_source: me.download_source,
        target_path: me.target_path,
        options: void 0
      }));
      return [...re, ...F];
    }), fe = P(() => Ve.value.filter((re) => {
      const F = z.value.get(re.filename);
      return F ? F.action === "download" : !0;
    }).map((re) => ({
      filename: re.filename,
      url: re.download_source,
      target_path: re.target_path
    })));
    function ae(re, F = 50) {
      return re.length <= F ? re : re.slice(0, F - 3) + "...";
    }
    const E = P(() => {
      let re = Ue.value.length;
      for (const F of N.value.values())
        F.action === "install" && re++;
      for (const F of z.value.values())
        F.action === "select" && re++;
      return re;
    }), U = P(() => {
      let re = 0;
      for (const F of z.value.values())
        F.action === "download" && re++;
      for (const F of Ve.value)
        z.value.get(F.filename) || re++;
      return re;
    }), ie = P(() => {
      let re = 0;
      for (const F of N.value.values())
        F.action === "optional" && re++;
      for (const F of z.value.values())
        F.action === "optional" && re++;
      return re;
    }), Ee = P(() => {
      let re = j.value.size;
      for (const F of N.value.values())
        F.action === "skip" && re++;
      for (const F of z.value.values())
        F.action === "skip" && re++;
      for (const F of le.value)
        N.value.has(F.node_type) || re++;
      for (const F of oe.value)
        z.value.has(F.filename) || re++;
      return re;
    }), xe = P(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, ee.value || se.value) {
        const F = le.value.length, me = Y.value.length, Ge = le.value.filter(
          (St) => N.value.has(St.node_type)
        ).length, dt = Y.value.filter(
          (St) => N.value.has(St.reference.node_type)
        ).length, xt = F + me, it = Ge + dt;
        re.nodes = { resolved: it, total: xt };
      }
      if (W.value) {
        const F = Re.value.length, me = Re.value.filter(
          (Ge) => z.value.has(Ge.filename) || Ge.is_download_intent
        ).length;
        re.models = { resolved: me, total: F };
      }
      if (re.review = { resolved: 1, total: 1 }, T.value === "applying") {
        const F = d.totalFiles || 1, me = d.completedFiles.length;
        re.applying = { resolved: me, total: F };
      }
      return re;
    });
    function Se(re) {
      T.value = re;
    }
    function X() {
      const re = L.value.findIndex((F) => F.id === T.value);
      re > 0 && (T.value = L.value[re - 1].id);
    }
    function H() {
      const re = L.value.findIndex((F) => F.id === T.value);
      re < L.value.length - 1 && (T.value = L.value[re + 1].id);
    }
    function ve() {
      for (const re of Y.value) {
        const F = re.reference.node_type;
        N.value.has(F) || de(re, "registry");
      }
    }
    function be(re) {
      switch (re) {
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
    function Ke(re) {
      return re.filter((F) => F.installed && F.tracked).filter((F) => F.name !== "comfygit-manager").map((F) => ({
        package_id: F.registry_id || F.name,
        source: F.source
      })).filter((F, me, Ge) => Ge.findIndex((dt) => dt.package_id === F.package_id) === me).sort((F, me) => {
        const Ge = be(F.source) - be(me.source);
        return Ge !== 0 ? Ge : F.package_id.localeCompare(me.package_id);
      });
    }
    async function We() {
      $.value = !0, I.value = null;
      try {
        const [re, F] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = re, C.value = Ke(F.nodes), ve();
      } catch (re) {
        I.value = re instanceof Error ? re.message : "Failed to analyze workflow";
      } finally {
        $.value = !1;
      }
    }
    function ge() {
      M.value.includes("analysis") || M.value.push("analysis"), ee.value || ke.value || se.value ? T.value = "nodes" : W.value ? T.value = "models" : T.value = "review";
    }
    function J(re) {
      N.value.set(re, { action: "optional" });
    }
    function qe(re) {
      N.value.set(re, { action: "skip" });
    }
    function Te(re, F) {
      var Ge;
      const me = le.value.find((dt) => dt.node_type === re);
      (Ge = me == null ? void 0 : me.options) != null && Ge[F] && N.value.set(re, {
        action: "install",
        package_id: me.options[F].package_id
      });
    }
    function Xe(re, F) {
      N.value.set(re, {
        action: "install",
        package_id: F
      });
    }
    function Fe(re) {
      N.value.delete(re);
    }
    function Oe(re) {
      return N.value.get(re);
    }
    function G(re) {
      const F = Oe(re);
      return F ? F.action === "optional" ? "Marked optional" : F.action === "skip" ? "Skipped" : F.action === "install" ? F.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(re, F) {
      var dt;
      const me = (dt = re.package) == null ? void 0 : dt.package_id;
      if (!me) return;
      const Ge = {
        action: "install",
        package_id: me,
        version: re.package.latest_version || null,
        install_source: F
      };
      F === "git" && re.package.repository && (Ge.repository = re.package.repository), N.value.set(re.reference.node_type, Ge);
    }
    function ye(re) {
      N.value.set(re, { action: "optional" });
    }
    function Qe(re) {
      N.value.set(re, { action: "skip" });
    }
    function D(re) {
      j.value.has(re) ? j.value.delete(re) : j.value.add(re);
    }
    function A(re) {
      z.value.set(re, { action: "optional" });
    }
    function Z(re) {
      z.value.set(re, { action: "skip" });
    }
    function Ae(re, F) {
      var Ge;
      const me = oe.value.find((dt) => dt.filename === re);
      (Ge = me == null ? void 0 : me.options) != null && Ge[F] && z.value.set(re, {
        action: "select",
        selected_model: me.options[F].model
      });
    }
    function ze(re, F, me) {
      z.value.set(re, {
        action: "download",
        url: F,
        target_path: me
      });
    }
    function Le(re) {
      z.value.delete(re);
    }
    async function je(re) {
      try {
        await p(re);
      } catch (F) {
        I.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function nt() {
      var re;
      x.value = !0, I.value = null, v(), d.phase = "resolving", T.value = "applying";
      try {
        const F = await r(o.workflowName, N.value, z.value, j.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const me = Y.value.map((it) => {
          const St = Oe(it.reference.node_type);
          if ((St == null ? void 0 : St.action) !== "install" || St.install_source !== "git")
            return null;
          const ts = St.repository || it.package.repository, xs = St.package_id || it.package.package_id;
          return !ts || !xs ? null : {
            id: xs,
            repository: ts,
            selectedVersion: St.version || it.package.latest_version || "latest"
          };
        }).filter((it) => !!it), Ge = new Set(me.map((it) => it.id)), dt = [
          ...F.nodes_to_install || [],
          ...Ue.value.map((it) => it.package.package_id)
        ];
        d.nodesToInstall = [...new Set(dt)].filter((it) => !Ge.has(it)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const it of me)
          await w({
            id: it.id,
            version: it.selectedVersion,
            selected_version: it.selectedVersion,
            repository: it.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const xt = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((it) => !it.success));
        !d.needsRestart && !xt && setTimeout(() => {
          n("refresh"), n("install"), n("close");
        }, 1500);
      } catch (F) {
        I.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function kt() {
      n("refresh"), n("restart"), n("close");
    }
    async function Et() {
      var F;
      const re = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((me) => !me.success).map((me) => me.node_id)) || [];
      if (re.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: re.length
        }, d.nodesToInstall = re, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (me) {
          d.error = me instanceof Error ? me.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return at(We), (re, F) => (a(), R($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: $.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (me) => n("close"))
    }, {
      body: h(() => [
        $.value && !_.value ? (a(), i("div", N0, [...F[2] || (F[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", O0, [
          b(Oy, {
            steps: L.value,
            "current-step": T.value,
            "completed-steps": M.value,
            "step-stats": xe.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (a(), i("div", U0, [
            s("div", A0, [
              s("div", z0, [
                F[3] || (F[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", F0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", V0, [
                s("div", B0, [
                  F[16] || (F[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", W0, [
                    pe.value > 0 ? (a(), i("div", G0, [
                      F[4] || (F[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", j0, m(pe.value), 1),
                      F[5] || (F[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", H0, [
                      F[6] || (F[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", q0, m(_.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", K0, [
                      F[8] || (F[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", J0, m(_.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ce.value.length > 0 ? (a(), i("div", Q0, [
                      F[10] || (F[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", Y0, m(ce.value.length), 1),
                      F[11] || (F[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    te.value.length > 0 ? (a(), i("div", X0, [
                      F[12] || (F[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", Z0, m(te.value.length), 1),
                      F[13] || (F[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", e_, [
                      F[14] || (F[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", t_, m(_.value.nodes.unresolved.length), 1),
                      F[15] || (F[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", s_, [
                  F[27] || (F[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", o_, [
                    s("div", n_, [
                      F[17] || (F[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", a_, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      F[18] || (F[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", l_, [
                      F[19] || (F[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", i_, m(_.value.stats.download_intents), 1),
                      F[20] || (F[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ue.value ? (a(), i("div", r_, [
                      F[21] || (F[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", c_, m(O.value.length), 1),
                      F[22] || (F[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", u_, [
                      F[23] || (F[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", d_, m(_.value.models.ambiguous.length), 1),
                      F[24] || (F[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", m_, [
                      F[25] || (F[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", f_, m(_.value.models.unresolved.length), 1),
                      F[26] || (F[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), i("div", v_, [
                F[28] || (F[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", p_, m(le.value.length + oe.value.length) + " items need your input", 1)
              ])) : we.value ? (a(), i("div", g_, [
                F[29] || (F[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", h_, m(ce.value.length) + " node type" + m(ce.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : te.value.length > 0 ? (a(), i("div", y_, [
                F[30] || (F[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", w_, m(te.value.length) + " community-mapped node type" + m(te.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ke.value ? (a(), i("div", __, [
                F[31] || (F[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", k_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(Q.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : Q.value ? (a(), i("div", b_, [
                F[32] || (F[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", $_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ue.value ? (a(), i("div", C_, [
                F[33] || (F[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", x_, m(O.value.length) + " model" + m(O.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", S_, [...F[34] || (F[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ue.value ? (a(), i("div", I_, [
                F[37] || (F[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", E_, [
                  (a(!0), i(B, null, he(O.value, (me) => {
                    var Ge, dt;
                    return a(), i("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", T_, m(me.actual_category) + "/" + m((Ge = me.model) == null ? void 0 : Ge.filename), 1),
                      F[36] || (F[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", M_, m((dt = me.expected_categories) == null ? void 0 : dt[0]) + "/", 1),
                      me.file_path ? (a(), R(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (xt) => je(me.file_path)
                      }, {
                        default: h(() => [...F[35] || (F[35] = [
                          S(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              we.value ? (a(), i("div", P_, [
                F[38] || (F[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", R_, [
                  (a(!0), i(B, null, he(ce.value, (me) => {
                    var Ge;
                    return a(), i("div", {
                      key: `vg-${me.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", L_, m(me.reference.node_type), 1),
                      s("span", D_, m(me.guidance || ((Ge = _.value.node_guidance) == null ? void 0 : Ge[me.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (a(), i("div", N_, [
            b(uw, {
              nodes: le.value,
              "node-choices": N.value,
              "auto-resolved-packages": De.value,
              "skipped-packages": j.value,
              "installed-node-packs": C.value,
              onMarkOptional: J,
              onSkip: qe,
              onOptionSelected: Te,
              onManualEntry: Xe,
              onClearChoice: Fe,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (a(), i("div", O_, [
              s("div", U_, [
                s("h4", A_, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                F[39] || (F[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", z_, [
                (a(!0), i(B, null, he(Y.value, (me) => (a(), i("div", {
                  key: `community-${me.reference.node_type}-${me.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", F_, [
                    s("div", V_, [
                      s("code", B_, m(me.reference.node_type), 1),
                      s("span", W_, m(me.package.title || me.package.package_id), 1)
                    ]),
                    s("div", G_, m(me.package.package_id), 1),
                    s("div", j_, [
                      F[40] || (F[40] = S(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      me.guidance ? (a(), i("span", H_, m(me.guidance), 1)) : y("", !0)
                    ]),
                    s("div", q_, m(G(me.reference.node_type)), 1)
                  ]),
                  s("div", K_, [
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !me.package.package_id,
                      onClick: (Ge) => de(me, "registry")
                    }, {
                      default: h(() => [...F[41] || (F[41] = [
                        S(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    me.package.repository ? (a(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !me.package.package_id,
                      onClick: (Ge) => de(me, "git")
                    }, {
                      default: h(() => [...F[42] || (F[42] = [
                        S(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => ye(me.reference.node_type)
                    }, {
                      default: h(() => [...F[43] || (F[43] = [
                        S(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => Qe(me.reference.node_type)
                    }, {
                      default: h(() => [...F[44] || (F[44] = [
                        S(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          T.value === "models" ? (a(), R(o0, {
            key: 2,
            models: Re.value,
            "model-choices": z.value,
            onMarkOptional: A,
            onSkip: Z,
            onOptionSelected: Ae,
            onDownloadUrl: ze,
            onClearChoice: Le
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (a(), i("div", J_, [
            s("div", Q_, [
              F[50] || (F[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", Y_, [
                s("div", X_, [
                  s("span", Z_, m(E.value), 1),
                  F[45] || (F[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", ek, [
                  s("span", tk, m(U.value), 1),
                  F[46] || (F[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", sk, [
                  s("span", ok, m(ie.value), 1),
                  F[47] || (F[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", nk, [
                  s("span", ak, m(Ee.value), 1),
                  F[48] || (F[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              De.value.length > 0 ? (a(), i("div", lk, [
                s("h4", ik, "Node Packages (" + m(De.value.length) + ")", 1),
                s("div", rk, [
                  (a(!0), i(B, null, he(De.value, (me) => (a(), i("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    s("code", ck, m(me.package_id), 1),
                    s("div", uk, [
                      j.value.has(me.package_id) ? (a(), i("span", mk, "Skipped")) : (a(), i("span", dk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Y.value.length > 0 ? (a(), i("div", fk, [
                s("h4", vk, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                s("div", pk, [
                  (a(!0), i(B, null, he(Y.value, (me) => {
                    var Ge, dt, xt;
                    return a(), i("div", {
                      key: `review-community-${me.reference.node_type}-${me.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", gk, m(me.reference.node_type), 1),
                      s("div", hk, [
                        ((Ge = Oe(me.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", yk, m(((dt = Oe(me.reference.node_type)) == null ? void 0 : dt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((xt = Oe(me.reference.node_type)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", wk, " Optional ")) : (a(), i("span", _k, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              le.value.length > 0 ? (a(), i("div", kk, [
                s("h4", bk, "Node Choices (" + m(le.value.length) + ")", 1),
                s("div", $k, [
                  (a(!0), i(B, null, he(le.value, (me) => {
                    var Ge, dt, xt, it;
                    return a(), i("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      s("code", Ck, m(me.node_type), 1),
                      s("div", xk, [
                        N.value.has(me.node_type) ? (a(), i(B, { key: 0 }, [
                          ((Ge = N.value.get(me.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", Sk, m((dt = N.value.get(me.node_type)) == null ? void 0 : dt.package_id), 1)) : ((xt = N.value.get(me.node_type)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", Ik, " Optional ")) : ((it = N.value.get(me.node_type)) == null ? void 0 : it.action) === "skip" ? (a(), i("span", Ek, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Tk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              fe.value.length > 0 ? (a(), i("div", Mk, [
                s("h4", Pk, "Models to Download (" + m(fe.value.length) + ")", 1),
                s("div", Rk, [
                  (a(!0), i(B, null, he(fe.value, (me) => (a(), i("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Lk, [
                      s("code", Dk, m(me.filename), 1),
                      s("div", Nk, [
                        s("span", Ok, "→ " + m(me.target_path), 1),
                        me.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, m(ae(me.url)), 9, Uk)) : y("", !0)
                      ])
                    ]),
                    F[49] || (F[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (a(), i("div", Ak, [
                s("h4", zk, "Models (" + m(Re.value.length) + ")", 1),
                s("div", Fk, [
                  (a(!0), i(B, null, he(Re.value, (me) => {
                    var Ge, dt, xt, it, St, ts, xs;
                    return a(), i("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      s("code", Vk, m(me.filename), 1),
                      s("div", Bk, [
                        z.value.has(me.filename) ? (a(), i(B, { key: 0 }, [
                          ((Ge = z.value.get(me.filename)) == null ? void 0 : Ge.action) === "select" ? (a(), i("span", Wk, m((xt = (dt = z.value.get(me.filename)) == null ? void 0 : dt.selected_model) == null ? void 0 : xt.filename), 1)) : ((it = z.value.get(me.filename)) == null ? void 0 : it.action) === "download" ? (a(), i("span", Gk, " Download ")) : ((St = z.value.get(me.filename)) == null ? void 0 : St.action) === "optional" ? (a(), i("span", jk, " Optional ")) : ((ts = z.value.get(me.filename)) == null ? void 0 : ts.action) === "skip" ? (a(), i("span", Hk, " Skip ")) : ((xs = z.value.get(me.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (a(), i("span", qk, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (a(), i("span", Kk, " Pending Download ")) : (a(), i("span", Jk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              _e.value.length === 0 && Y.value.length === 0 && le.value.length === 0 && Re.value.length === 0 ? (a(), i("div", Qk, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (a(), R(D0, {
            key: 4,
            progress: st(d),
            onRestart: kt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        T.value !== "analysis" && T.value !== "applying" ? (a(), R(Ne, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: X
        }, {
          default: h(() => [...F[51] || (F[51] = [
            S(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[54] || (F[54] = s("div", { class: "footer-spacer" }, null, -1)),
        T.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (a(), R(Ne, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (me) => n("close"))
        }, {
          default: h(() => [
            S(m(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "analysis" ? (a(), R(Ne, {
          key: 2,
          variant: "primary",
          disabled: $.value,
          onClick: ge
        }, {
          default: h(() => [
            S(m(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        T.value === "nodes" ? (a(), R(Ne, {
          key: 3,
          variant: "primary",
          onClick: H
        }, {
          default: h(() => [
            S(m(W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (a(), R(Ne, {
          key: 4,
          variant: "primary",
          onClick: H
        }, {
          default: h(() => [...F[52] || (F[52] = [
            S(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        T.value === "review" ? (a(), R(Ne, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: nt
        }, {
          default: h(() => [...F[53] || (F[53] = [
            S(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), Xk = /* @__PURE__ */ Ie(Yk, [["__scopeId", "data-v-49848358"]]), Zk = { class: "search-input-wrapper" }, eb = ["value", "placeholder"], tb = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        n("update:modelValue", v);
      }, o.debounce)) : n("update:modelValue", v);
    }
    function u() {
      var d;
      n("update:modelValue", ""), n("clear"), (d = l.value) == null || d.focus();
    }
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (a(), i("div", Zk, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: us(u, ["escape"])
      }, null, 40, eb),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), sb = /* @__PURE__ */ Ie(tb, [["__scopeId", "data-v-266f857a"]]), ob = { class: "search-bar" }, nb = /* @__PURE__ */ Ce({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", ob, [
      b(sb, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ Ie(nb, [["__scopeId", "data-v-3d51bbfd"]]), ab = { class: "section-group" }, lb = {
  key: 0,
  class: "section-content"
}, ib = /* @__PURE__ */ Ce({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, n("toggle", l.value));
    }
    return (c, u) => (a(), i("section", ab, [
      b(ns, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          S(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (a(), i("div", lb, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), It = /* @__PURE__ */ Ie(ib, [["__scopeId", "data-v-c48e33ed"]]), rb = { class: "item-header" }, cb = {
  key: 0,
  class: "item-icon"
}, ub = { class: "item-info" }, db = {
  key: 0,
  class: "item-title"
}, mb = {
  key: 1,
  class: "item-subtitle"
}, fb = {
  key: 0,
  class: "item-details"
}, vb = {
  key: 1,
  class: "item-actions"
}, pb = /* @__PURE__ */ Ce({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = P(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (a(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, n.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", rb, [
        l.$slots.icon ? (a(), i("span", cb, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", ub, [
          l.$slots.title ? (a(), i("div", db, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", mb, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", fb, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", vb, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ Ie(pb, [["__scopeId", "data-v-cc435e0e"]]), gb = { class: "empty-state" }, hb = {
  key: 0,
  class: "empty-icon"
}, yb = { class: "empty-message" }, wb = /* @__PURE__ */ Ce({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", gb, [
      e.icon ? (a(), i("div", hb, m(e.icon), 1)) : y("", !0),
      s("p", yb, m(e.message), 1),
      e.actionLabel ? (a(), R(Me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("action"))
      }, {
        default: h(() => [
          S(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ Ie(wb, [["__scopeId", "data-v-4466284f"]]), _b = { class: "loading-state" }, kb = { class: "loading-message" }, bb = /* @__PURE__ */ Ce({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", _b, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", kb, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ Ie(bb, [["__scopeId", "data-v-ad8436c9"]]), $b = { class: "error-state" }, Cb = { class: "error-message" }, xb = /* @__PURE__ */ Ce({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", $b, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", Cb, m(e.message), 1),
      e.retry ? (a(), R(Me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (n) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          S(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ Ie(xb, [["__scopeId", "data-v-5397be48"]]), Sb = /* @__PURE__ */ Ce({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = P(
      () => r.value.filter((O) => O.status === "broken")
    ), C = P(
      () => r.value.filter((O) => O.status === "new")
    ), $ = P(
      () => r.value.filter((O) => O.status === "modified")
    ), x = P(
      () => r.value.filter((O) => O.status === "synced")
    ), I = P(() => {
      if (!d.value.trim()) return r.value;
      const O = d.value.toLowerCase();
      return r.value.filter((ue) => ue.name.toLowerCase().includes(O));
    }), T = P(
      () => _.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), M = P(
      () => C.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), N = P(
      () => $.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = P(
      () => x.value.filter(
        (O) => !d.value.trim() || O.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = P(
      () => f.value ? z.value : z.value.slice(0, 5)
    );
    async function L(O = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(O);
      } catch (ue) {
        u.value = ue instanceof Error ? ue.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: L });
    function K(O) {
      g.value = O, p.value = !0;
    }
    function ce(O) {
      g.value = O, w.value = !0;
    }
    function te(O) {
      g.value = O, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: O }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Y(O) {
      var _e;
      const Pe = (_e = O.detail) == null ? void 0 : _e.workflowName;
      Pe && te(Pe);
    }
    function we() {
      n("refresh");
    }
    async function ee() {
      w.value = !1, await L(!0);
    }
    async function W() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function Q(O) {
      return O.replace(/uninstallable node mappings?/gi, (ue) => ue.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ke(O) {
      if (O.issue_summary && O.issue_summary.trim().length > 0)
        return Q(O.issue_summary);
      const ue = [];
      return O.version_gated_count && O.version_gated_count > 0 && ue.push(`${O.version_gated_count} node${O.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), O.uninstallable_count && O.uninstallable_count > 0 && ue.push(`${O.uninstallable_count} node${O.uninstallable_count > 1 ? "s" : ""} need community packages`), O.missing_nodes > 0 && ue.push(`${O.missing_nodes} missing node${O.missing_nodes > 1 ? "s" : ""}`), O.missing_models > 0 && ue.push(`${O.missing_models} missing model${O.missing_models > 1 ? "s" : ""}`), O.models_with_category_mismatch && O.models_with_category_mismatch > 0 && ue.push(`${O.models_with_category_mismatch} model${O.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), O.pending_downloads && O.pending_downloads > 0 && ue.push(`${O.pending_downloads} pending download${O.pending_downloads > 1 ? "s" : ""}`), ue.length > 0 ? ue.join(", ") : "Has issues";
    }
    function se(O) {
      const ue = O.sync_state === "new" ? "New" : O.sync_state === "modified" ? "Modified" : O.sync_state === "synced" ? "Synced" : O.sync_state, Pe = pe(O);
      return O.has_path_sync_issues && O.models_needing_path_sync && O.models_needing_path_sync > 0 ? `${O.models_needing_path_sync} model path${O.models_needing_path_sync > 1 ? "s" : ""} need${O.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${ue || "Unknown"} · ${Pe}`;
    }
    function pe(O) {
      const ue = O.contract_summary;
      return !ue || !ue.has_contract ? "No contract" : ue.status === "incomplete" ? `${ue.input_count} in / ${ue.output_count} out · incomplete` : `${ue.input_count} in / ${ue.output_count} out`;
    }
    return at(() => {
      L(), window.addEventListener("comfygit:open-workflow-contract", Y);
    }), pn(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Y);
    }), (O, ue) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: d.value,
            "onUpdate:modelValue": ue[0] || (ue[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (a(), R($s, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (a(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            T.value.length ? (a(), R(It, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(T.value, (Pe) => (a(), R(Ft, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: h(() => [...ue[7] || (ue[7] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(ke(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (_e) => ce(Pe.name)
                    }, {
                      default: h(() => [...ue[8] || (ue[8] = [
                        S(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => te(Pe.name)
                    }, {
                      default: h(() => [...ue[9] || (ue[9] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => K(Pe.name)
                    }, {
                      default: h(() => [...ue[10] || (ue[10] = [
                        S(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (a(), R(It, {
              key: 1,
              title: "NEW",
              count: M.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(M.value, (Pe) => (a(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    S(m(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    S(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => te(Pe.name)
                    }, {
                      default: h(() => [...ue[11] || (ue[11] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => K(Pe.name)
                    }, {
                      default: h(() => [...ue[12] || (ue[12] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (a(), R(It, {
              key: 2,
              title: "MODIFIED",
              count: N.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(N.value, (Pe) => (a(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...ue[13] || (ue[13] = [
                    S("⚡", -1)
                  ])]),
                  title: h(() => [
                    S(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => te(Pe.name)
                    }, {
                      default: h(() => [...ue[14] || (ue[14] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => K(Pe.name)
                    }, {
                      default: h(() => [...ue[15] || (ue[15] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            z.value.length ? (a(), R(It, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: ue[2] || (ue[2] = (Pe) => v.value = Pe)
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(j.value, (Pe) => (a(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    S(m(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    S(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => te(Pe.name)
                    }, {
                      default: h(() => [...ue[16] || (ue[16] = [
                        S(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (_e) => K(Pe.name)
                    }, {
                      default: h(() => [...ue[17] || (ue[17] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && z.value.length > 5 ? (a(), R(Me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: ue[1] || (ue[1] = (Pe) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    S(" View all " + m(z.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (a(), R(vs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), R(Cy, {
        key: 0,
        "workflow-name": g.value,
        onClose: ue[3] || (ue[3] = (Pe) => p.value = !1),
        onResolve: ue[4] || (ue[4] = (Pe) => ce(g.value)),
        onRefresh: ue[5] || (ue[5] = (Pe) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), R(Xk, {
        key: 1,
        "workflow-name": g.value,
        onClose: ee,
        onInstall: we,
        onRefresh: ue[6] || (ue[6] = (Pe) => n("refresh")),
        onRestart: W
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Ib = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-28ee54dd"]]), Eb = /* @__PURE__ */ Ce({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Il = /* @__PURE__ */ Ie(Eb, [["__scopeId", "data-v-ccb7816e"]]);
async function El(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
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
const Tb = {
  key: 0,
  class: "model-details"
}, Mb = { class: "detail-section" }, Pb = { class: "detail-row" }, Rb = { class: "detail-value mono" }, Lb = { class: "detail-row" }, Db = { class: "detail-value mono" }, Nb = { class: "detail-row" }, Ob = { class: "detail-value mono" }, Ub = {
  key: 0,
  class: "detail-row"
}, Ab = { class: "detail-value" }, zb = ["disabled"], Fb = {
  key: 1,
  class: "detail-row"
}, Vb = { class: "detail-value hash-error" }, Bb = { class: "detail-row" }, Wb = { class: "detail-value" }, Gb = { class: "detail-row" }, jb = { class: "detail-value" }, Hb = { class: "detail-row" }, qb = { class: "detail-value" }, Kb = { class: "detail-section" }, Jb = { class: "section-header" }, Qb = {
  key: 0,
  class: "locations-list"
}, Yb = { class: "location-path mono" }, Xb = {
  key: 0,
  class: "location-modified"
}, Zb = ["onClick"], e2 = {
  key: 1,
  class: "empty-state"
}, t2 = { class: "detail-section" }, s2 = { class: "section-header-row" }, o2 = { class: "section-header" }, n2 = {
  key: 0,
  class: "sources-list"
}, a2 = { class: "source-type" }, l2 = ["href"], i2 = ["disabled", "onClick"], r2 = {
  key: 1,
  class: "empty-state"
}, c2 = {
  key: 2,
  class: "source-error"
}, u2 = {
  key: 3,
  class: "source-success"
}, d2 = /* @__PURE__ */ Ce({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = P(() => {
      var te;
      return !!((te = u.value) != null && te.hash && (!u.value.blake3 || !u.value.sha256));
    }), x = k(null);
    let I = null;
    function T(te, Y = "success", we = 2e3) {
      I && clearTimeout(I), x.value = { message: te, type: Y }, I = setTimeout(() => {
        x.value = null;
      }, we);
    }
    function M(te) {
      if (!te) return "Unknown";
      const Y = 1024 * 1024 * 1024, we = 1024 * 1024;
      return te >= Y ? `${(te / Y).toFixed(1)} GB` : te >= we ? `${(te / we).toFixed(0)} MB` : `${(te / 1024).toFixed(0)} KB`;
    }
    async function N(te) {
      try {
        await El(te), T("Copied to clipboard!");
      } catch (Y) {
        console.error("Failed to copy:", Y), T("Failed to copy to clipboard", "error");
      }
    }
    async function z(te) {
      if (u.value) {
        f.value = te, p.value = null, w.value = null;
        try {
          await r(u.value.hash, te), T("Source removed"), await ce();
        } catch (Y) {
          p.value = Y instanceof Error ? Y.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function j() {
      w.value = "Source added successfully!", g.value = !1, await ce(), n("sourceSaved");
    }
    async function L() {
      await ce();
    }
    async function K() {
      var te;
      if ((te = u.value) != null && te.hash) {
        _.value = !0, C.value = null;
        try {
          u.value = await c(u.value.hash), T("Hashes computed successfully!");
        } catch (Y) {
          C.value = Y instanceof Error ? Y.message : "Failed to compute hashes";
        } finally {
          _.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, v.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (te) {
        v.value = te instanceof Error ? te.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(ce), (te, Y) => {
      var we;
      return a(), i(B, null, [
        b($t, {
          title: `Model Details: ${((we = u.value) == null ? void 0 : we.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Y[5] || (Y[5] = (ee) => te.$emit("close"))
        }, {
          body: h(() => {
            var ee, W, Q, ke;
            return [
              u.value ? (a(), i("div", Tb, [
                s("section", Mb, [
                  s("div", Pb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Rb, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => N(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Lb, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Db, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => N(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Nb, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Ob, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => N(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  $.value ? (a(), i("div", Ub, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Ab, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: K
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, zb)
                    ])
                  ])) : y("", !0),
                  C.value ? (a(), i("div", Fb, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Vb, m(C.value), 1)
                  ])) : y("", !0),
                  s("div", Bb, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Wb, m(M(u.value.size)), 1)
                  ]),
                  s("div", Gb, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", jb, m(u.value.category), 1)
                  ]),
                  s("div", Hb, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", qb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Kb, [
                  s("h4", Jb, "Locations (" + m(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (W = u.value.locations) != null && W.length ? (a(), i("div", Qb, [
                    (a(!0), i(B, null, he(u.value.locations, (se, pe) => (a(), i("div", {
                      key: pe,
                      class: "location-item"
                    }, [
                      s("span", Yb, m(se.path), 1),
                      se.modified ? (a(), i("span", Xb, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => N(se.path)
                      }, " Copy File Path ", 8, Zb)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", e2, "No locations found"))
                ]),
                s("section", t2, [
                  s("div", s2, [
                    s("h4", o2, "Download Sources (" + m(((Q = u.value.sources) == null ? void 0 : Q.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ke = u.value.sources) != null && ke.length ? (a(), i("div", n2, [
                    (a(!0), i(B, null, he(u.value.sources, (se, pe) => (a(), i("div", {
                      key: pe,
                      class: "source-item"
                    }, [
                      s("span", a2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, l2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === se.url,
                        onClick: (O) => z(se.url)
                      }, m(f.value === se.url ? "..." : "×"), 9, i2)
                    ]))), 128))
                  ])) : (a(), i("div", r2, " No download sources configured ")),
                  p.value ? (a(), i("p", c2, m(p.value), 1)) : y("", !0),
                  w.value ? (a(), i("p", u2, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Y[4] || (Y[4] = (ee) => te.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (a(), R(Kt, { to: "body" }, [
          x.value ? (a(), i("div", {
            key: 0,
            class: Be(["toast", x.value.type])
          }, m(x.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (a(), R(lc, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Y[6] || (Y[6] = (ee) => g.value = !1),
          onSaved: j,
          onHashesComputed: L
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), uc = /* @__PURE__ */ Ie(d2, [["__scopeId", "data-v-cd808fbc"]]), m2 = { class: "workflow-links-tab" }, f2 = { class: "section-header-row" }, v2 = {
  key: 0,
  class: "state-message"
}, p2 = {
  key: 1,
  class: "error-message"
}, g2 = {
  key: 2,
  class: "candidate-list"
}, h2 = {
  key: 3,
  class: "state-message"
}, y2 = /* @__PURE__ */ Ce({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: n } = ct(), l = k([]), r = k(!1), c = k(null), u = P(() => l.value.filter((v) => v.source === "workflow"));
    async function d() {
      r.value = !0, c.value = null;
      try {
        const v = await n();
        l.value = v.candidates;
      } catch (v) {
        c.value = v instanceof Error ? v.message : "Failed to scan workflows";
      } finally {
        r.value = !1;
      }
    }
    return at(d), (v, f) => (a(), i("div", m2, [
      s("div", f2, [
        f[2] || (f[2] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(Ne, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [...f[1] || (f[1] = [
            S(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (a(), i("div", v2, "Scanning workflows...")) : c.value ? (a(), i("div", p2, m(c.value), 1)) : u.value.length ? (a(), i("div", g2, [
        (a(!0), i(B, null, he(u.value, (p) => (a(), R(nc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (a(), i("div", h2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), w2 = /* @__PURE__ */ Ie(y2, [["__scopeId", "data-v-1aac54cc"]]), _2 = { class: "civitai-tab" }, k2 = /* @__PURE__ */ Ce({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", _2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), b2 = /* @__PURE__ */ Ie(k2, [["__scopeId", "data-v-44948051"]]), $2 = { class: "direct-url-tab" }, C2 = {
  key: 0,
  class: "error"
}, x2 = /* @__PURE__ */ Ce({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(""), r = k("");
    pt(() => o.initialUrl, (v) => {
      v && v !== l.value && (l.value = v);
    }, { immediate: !0 });
    const c = P(() => {
      const v = l.value.trim();
      if (!v) return "";
      try {
        const f = new URL(v);
        return decodeURIComponent(f.pathname).replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      } catch {
        return v.split("?", 1)[0].replace(/\\/g, "/").split("/").filter(Boolean).pop() || "";
      }
    }), u = (v) => {
      if (!r.value.trim() || !c.value) return;
      const f = d(r.value, c.value);
      n("queue", [{
        url: v,
        targetPath: f,
        filename: c.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (a(), i("div", $2, [
      b(ac, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(sc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (a(), i("p", C2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), S2 = /* @__PURE__ */ Ie(x2, [["__scopeId", "data-v-a6d21f27"]]), I2 = { class: "download-modal" }, E2 = { class: "tab-bar" }, T2 = ["onClick"], M2 = { class: "tab-content" }, P2 = /* @__PURE__ */ Ce({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Lo(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), c = k("");
    function u(p) {
      n(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      n(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.targetPath
      }))), o("close");
    }
    function v(p) {
      c.value = p, r.value = "direct";
    }
    function f() {
      o("close");
    }
    return (p, w) => e.show ? (a(), R($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", I2, [
          s("div", E2, [
            (a(), i(B, null, he(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, T2)), 64))
          ]),
          s("div", M2, [
            r.value === "workflow" ? (a(), R(w2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (a(), R(oc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (a(), R(b2, { key: 2 })) : r.value === "direct" ? (a(), R(S2, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...w[0] || (w[0] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), dc = /* @__PURE__ */ Ie(P2, [["__scopeId", "data-v-de2e4fac"]]), R2 = /* @__PURE__ */ Ce({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const C = P(
      () => r.value.reduce((L, K) => L + (K.size || 0), 0)
    ), $ = P(() => {
      if (!f.value.trim()) return r.value;
      const L = f.value.toLowerCase();
      return r.value.filter((K) => K.filename.toLowerCase().includes(L));
    }), x = P(() => {
      if (!f.value.trim()) return c.value;
      const L = f.value.toLowerCase();
      return c.value.filter((K) => K.filename.toLowerCase().includes(L));
    }), I = P(() => {
      const L = {};
      for (const ce of $.value) {
        const te = ce.type || "other";
        L[te] || (L[te] = []), L[te].push(ce);
      }
      const K = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ce], [te]) => {
        const Y = K.indexOf(ce), we = K.indexOf(te);
        return Y >= 0 && we >= 0 ? Y - we : Y >= 0 ? -1 : we >= 0 ? 1 : ce.localeCompare(te);
      }).map(([ce, te]) => ({ type: ce, models: te }));
    });
    function T(L) {
      if (!L) return "Unknown";
      const K = L / (1024 * 1024);
      return K >= 1024 ? `${(K / 1024).toFixed(1)} GB` : `${K.toFixed(0)} MB`;
    }
    function M(L) {
      w.value = L.hash || L.filename;
    }
    function N(L) {
      o("navigate", "model-index");
    }
    function z(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function j() {
      d.value = !0, v.value = null;
      try {
        const L = await n();
        r.value = L, c.value = [];
        const K = await l();
        u.value = K.environment || "production";
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return at(j), (L, K) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: K[1] || (K[1] = (ce) => p.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: K[0] || (K[0] = (ce) => g.value = !0)
              }, {
                default: h(() => [...K[6] || (K[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  S(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: f.value,
            "onUpdate:modelValue": K[2] || (K[2] = (ce) => f.value = ce),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (a(), R($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (a(), R(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: j
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            r.value.length ? (a(), R(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                S(" Total: " + m(r.value.length) + " models • " + m(T(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(B, null, he(I.value, (ce) => (a(), R(It, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(ce.models, (te) => (a(), R(Ft, {
                  key: te.hash || te.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...K[7] || (K[7] = [
                    S("📦", -1)
                  ])]),
                  title: h(() => [
                    S(m(te.filename), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(T(te.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: (te.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Path:",
                      value: te.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => M(te)
                    }, {
                      default: h(() => [...K[8] || (K[8] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            x.value.length ? (a(), R(It, {
              key: 1,
              title: "MISSING",
              count: x.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(x.value, (ce) => (a(), R(Ft, {
                  key: ce.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...K[9] || (K[9] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [...K[10] || (K[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var te;
                    return [
                      b(_t, {
                        label: "Required by:",
                        value: ((te = ce.workflow_names) == null ? void 0 : te.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (te) => z(ce.filename)
                    }, {
                      default: h(() => [...K[11] || (K[11] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (te) => N(ce.filename)
                    }, {
                      default: h(() => [...K[12] || (K[12] = [
                        S(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !$.value.length && !x.value.length ? (a(), R(vs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(rs, {
        show: p.value,
        title: "About Environment Models",
        onClose: K[3] || (K[3] = (ce) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            K[13] || (K[13] = S(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            K[14] || (K[14] = S(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...K[15] || (K[15] = [
              S(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(uc, {
        key: 0,
        identifier: w.value,
        onClose: K[4] || (K[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(dc, {
        show: g.value,
        onClose: K[5] || (K[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), L2 = /* @__PURE__ */ Ie(R2, [["__scopeId", "data-v-af3ca736"]]), D2 = {
  key: 0,
  class: "indexing-progress"
}, N2 = { class: "progress-info" }, O2 = { class: "progress-label" }, U2 = { class: "progress-count" }, A2 = { class: "progress-bar" }, z2 = { class: "directory-modal-body" }, F2 = { class: "input-group" }, V2 = { class: "current-path" }, B2 = { class: "input-group" }, W2 = /* @__PURE__ */ Ce({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), C = k(null), $ = k(""), x = k(!1), I = k(!1), T = k(null), M = P(
      () => u.value.reduce((we, ee) => we + (ee.size || 0), 0)
    ), N = P(() => {
      if (!p.value.trim()) return u.value;
      const we = p.value.toLowerCase();
      return u.value.filter((ee) => {
        const W = ee, Q = ee.sha256 || W.sha256_hash || "";
        return ee.filename.toLowerCase().includes(we) || Q.toLowerCase().includes(we);
      });
    }), z = P(() => {
      const we = {};
      for (const W of N.value) {
        const Q = W.type || "other";
        we[Q] || (we[Q] = []), we[Q].push(W);
      }
      const ee = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([W], [Q]) => {
        const ke = ee.indexOf(W), se = ee.indexOf(Q);
        return ke >= 0 && se >= 0 ? ke - se : ke >= 0 ? -1 : se >= 0 ? 1 : W.localeCompare(Q);
      }).map(([W, Q]) => ({ type: W, models: Q }));
    });
    function j(we) {
      if (!we) return "Unknown";
      const ee = 1024 * 1024 * 1024, W = 1024 * 1024;
      return we >= ee ? `${(we / ee).toFixed(1)} GB` : we >= W ? `${(we / W).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
    }
    function L(we) {
      g.value = we.hash || we.filename;
    }
    async function K() {
      v.value = !0, f.value = null;
      try {
        const we = await n();
        await te(), we.changes > 0 && console.log(`Scan complete: ${we.changes} changes detected`);
      } catch (we) {
        f.value = we instanceof Error ? we.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ce() {
      if ($.value.trim()) {
        x.value = !0, f.value = null;
        try {
          const we = await r($.value.trim());
          C.value = we.path, _.value = !1, $.value = "", await te(), console.log(`Directory changed: ${we.models_indexed} models indexed`), c("refresh");
        } catch (we) {
          f.value = we instanceof Error ? we.message : "Failed to change directory";
        } finally {
          x.value = !1;
        }
      }
    }
    async function te() {
      d.value = !0, f.value = null;
      try {
        u.value = await o();
      } catch (we) {
        f.value = we instanceof Error ? we.message : "Failed to load workspace models";
      } finally {
        d.value = !1;
      }
    }
    async function Y() {
      try {
        const we = await l();
        C.value = we.path;
      } catch {
      }
    }
    return at(() => {
      te(), Y();
    }), (we, ee) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ee[2] || (ee[2] = (W) => w.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: K
              }, {
                default: h(() => [
                  S(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ee[0] || (ee[0] = (W) => _.value = !0)
              }, {
                default: h(() => [...ee[10] || (ee[10] = [
                  S(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ee[1] || (ee[1] = (W) => I.value = !0)
              }, {
                default: h(() => [...ee[11] || (ee[11] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  S(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          T.value ? (a(), i("div", D2, [
            s("div", N2, [
              s("span", O2, m(T.value.message), 1),
              s("span", U2, m(T.value.current) + "/" + m(T.value.total), 1)
            ]),
            s("div", A2, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": ee[3] || (ee[3] = (W) => p.value = W),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || T.value ? (a(), R($s, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (a(), R(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            u.value.length ? (a(), R(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                S(" Total: " + m(u.value.length) + " models • " + m(j(M.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (a(!0), i(B, null, he(z.value, (W) => (a(), R(It, {
              key: W.type,
              title: W.type.toUpperCase(),
              count: W.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(W.models, (Q) => (a(), R(Ft, {
                  key: Q.sha256 || Q.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...ee[12] || (ee[12] = [
                    S("📦", -1)
                  ])]),
                  title: h(() => [
                    S(m(Q.filename), 1)
                  ]),
                  subtitle: h(() => [
                    S(m(j(Q.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Hash:",
                      value: Q.hash ? Q.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => L(Q)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            N.value.length ? y("", !0) : (a(), R(vs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(rs, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ee[4] || (ee[4] = (W) => w.value = !1)
      }, {
        content: h(() => [...ee[14] || (ee[14] = [
          s("p", null, [
            S(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            S(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (a(), R(uc, {
        key: 0,
        identifier: g.value,
        onClose: ee[5] || (ee[5] = (W) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (a(), R($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: ee[8] || (ee[8] = (W) => _.value = !1)
      }, {
        body: h(() => [
          s("div", z2, [
            s("div", F2, [
              ee[15] || (ee[15] = s("label", null, "Current Directory", -1)),
              s("code", V2, m(C.value || "Not set"), 1)
            ]),
            s("div", B2, [
              ee[16] || (ee[16] = s("label", null, "New Directory Path", -1)),
              b(bt, {
                modelValue: $.value,
                "onUpdate:modelValue": ee[6] || (ee[6] = (W) => $.value = W),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            ee[17] || (ee[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: ee[7] || (ee[7] = (W) => _.value = !1)
          }, {
            default: h(() => [...ee[18] || (ee[18] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ne, {
            variant: "primary",
            disabled: !$.value.trim() || x.value,
            loading: x.value,
            onClick: ce
          }, {
            default: h(() => [
              S(m(x.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(dc, {
        show: I.value,
        onClose: ee[9] || (ee[9] = (W) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), G2 = /* @__PURE__ */ Ie(W2, [["__scopeId", "data-v-9fca048b"]]), j2 = { class: "node-details" }, H2 = { class: "status-row" }, q2 = {
  key: 0,
  class: "detail-row"
}, K2 = { class: "value" }, J2 = { class: "detail-row" }, Q2 = { class: "value" }, Y2 = {
  key: 1,
  class: "detail-row"
}, X2 = { class: "value mono" }, Z2 = {
  key: 2,
  class: "detail-row"
}, e$ = ["href"], t$ = {
  key: 3,
  class: "detail-row"
}, s$ = { class: "value mono small" }, o$ = { class: "detail-row" }, n$ = {
  key: 0,
  class: "value"
}, a$ = {
  key: 1,
  class: "workflow-list"
}, l$ = /* @__PURE__ */ Ce({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (a(), R($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => n("close"))
    }, {
      body: h(() => [
        s("div", j2, [
          s("div", H2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", q2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", K2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", J2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", Q2, m(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", Y2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", X2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", Z2, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              S(m(e.node.repository) + " ", 1),
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
            ], 8, e$)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", t$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", s$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", o$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", n$, " Not used in any workflows ")) : (a(), i("div", a$, [
              (a(!0), i(B, null, he(e.node.used_in_workflows, (v) => (a(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => n("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            S(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), i$ = /* @__PURE__ */ Ie(l$, [["__scopeId", "data-v-b342f626"]]), r$ = { class: "dialog-message" }, c$ = {
  key: 0,
  class: "dialog-details"
}, u$ = {
  key: 1,
  class: "dialog-warning"
}, d$ = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), R($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (n) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", r$, m(e.message), 1),
        e.details && e.details.length ? (a(), i("div", c$, [
          (a(!0), i(B, null, he(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", u$, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          S(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("cancel"))
        }, {
          default: h(() => [
            S(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (a(), R(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (n) => t.$emit("secondary"))
        }, {
          default: h(() => [
            S(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
        }, {
          default: h(() => [
            S(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tl = /* @__PURE__ */ Ie(d$, [["__scopeId", "data-v-3670b9f5"]]), m$ = { class: "mismatch-warning" }, f$ = { class: "version-mismatch" }, v$ = { class: "version-actual" }, p$ = { class: "version-expected" }, g$ = { style: { color: "var(--cg-color-warning)" } }, h$ = { style: { color: "var(--cg-color-warning)" } }, y$ = {
  key: 0,
  class: "community-status-badge"
}, w$ = { key: 0 }, _$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, k$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, b$ = { class: "criticality-control" }, $$ = ["value", "disabled", "onChange"], C$ = /* @__PURE__ */ Ce({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getNodes: l,
      trackNodeAsDev: r,
      installNode: c,
      uninstallNode: u,
      queueNodeInstall: d,
      updateNodeCriticality: v
    } = ct(), f = k({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), C = k(null), $ = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), I = k(null), T = P(() => {
      if (!g.value.trim()) return f.value.nodes;
      const fe = g.value.toLowerCase();
      return f.value.nodes.filter(
        (ae) => {
          var E, U;
          return ae.name.toLowerCase().includes(fe) || ((E = ae.description) == null ? void 0 : E.toLowerCase().includes(fe)) || ((U = ae.repository) == null ? void 0 : U.toLowerCase().includes(fe));
        }
      );
    }), M = P(
      () => T.value.filter((fe) => fe.installed && fe.tracked)
    ), N = P(
      () => T.value.filter((fe) => !fe.installed && fe.tracked && !fe.issue_type)
    ), z = P(
      () => T.value.filter((fe) => fe.installed && !fe.tracked)
    ), j = P(
      () => T.value.filter((fe) => fe.issue_type === "version_gated")
    ), L = P(
      () => T.value.filter((fe) => fe.issue_type === "uninstallable")
    );
    function K(fe) {
      return fe.registry_id || fe.name;
    }
    function ce(fe) {
      return $.value.has(K(fe));
    }
    async function te(fe, ae) {
      const E = fe.registry_id;
      if (!E) {
        n("toast", `Node "${fe.name}" has no package id for install`, "warning");
        return;
      }
      if (ae === "git" && !fe.repository) {
        n("toast", `Node "${fe.name}" has no repository URL for git install`, "warning");
        return;
      }
      const U = {
        id: E,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      ae === "git" && fe.repository && (U.repository = fe.repository, U.install_source = "git"), await d(U), $.value.add(K(fe)), n("toast", `✓ Queued install for "${fe.name}"`, "success");
    }
    function Y(fe) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[fe] || fe;
    }
    const we = P(() => o.versionMismatches.length > 0);
    function ee(fe) {
      return !fe.used_in_workflows || fe.used_in_workflows.length === 0 ? "Not used in any workflows" : fe.used_in_workflows.length === 1 ? fe.used_in_workflows[0] : `${fe.used_in_workflows.length} workflows`;
    }
    function W(fe) {
      return fe.criticality === "optional" ? "optional" : "required";
    }
    function Q(fe) {
      return x.value.has(fe.name);
    }
    async function ke(fe, ae) {
      const E = ae.target, U = W(fe), ie = E.value;
      if (ie !== U) {
        x.value = new Set(x.value).add(fe.name), fe.criticality = ie;
        try {
          const Ee = await v(fe.name, ie);
          if (Ee.status !== "success") {
            fe.criticality = U, n("toast", Ee.message || `Failed to update "${fe.name}" criticality`, "error");
            return;
          }
          n("toast", `Marked "${fe.name}" as ${ie}`, "success");
        } catch (Ee) {
          fe.criticality = U, E.value = U, n("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
        } finally {
          const Ee = new Set(x.value);
          Ee.delete(fe.name), x.value = Ee;
        }
      }
    }
    function se(fe) {
      return fe.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function pe(fe) {
      return fe.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function O(fe) {
      return fe.registry_id ? `Community-mapped package: ${fe.registry_id}` : "Community-mapped package";
    }
    function ue(fe) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Pe(fe) {
      C.value = fe;
    }
    function _e() {
      n("open-node-manager");
    }
    function De(fe) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${fe}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ae = await r(fe);
            ae.status === "success" ? (n("toast", `✓ Node "${fe}" tracked as development`, "success"), await Re()) : n("toast", `Failed to track node: ${ae.message || "Unknown error"}`, "error");
          } catch (ae) {
            n("toast", `Error tracking node: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ue(fe) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${fe}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ae = await u(fe);
            ae.status === "success" ? (n("toast", `✓ Node "${fe}" removed`, "success"), await Re()) : n("toast", `Failed to remove node: ${ae.message || "Unknown error"}`, "error");
          } catch (ae) {
            n("toast", `Error removing node: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Ve(fe) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${fe}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const ae = await c(fe);
            ae.status === "success" ? (n("toast", `✓ Node "${fe}" installed`, "success"), await Re()) : n("toast", `Failed to install node: ${ae.message || "Unknown error"}`, "error");
          } catch (ae) {
            n("toast", `Error installing node: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function le(fe) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${fe.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await te(fe, "registry");
          } catch (ae) {
            n("toast", `Error queueing install: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function oe(fe) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${fe.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await te(fe, "git");
          } catch (ae) {
            n("toast", `Error queueing git install: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    async function Re() {
      p.value = !0, w.value = null;
      try {
        f.value = await l();
      } catch (fe) {
        w.value = fe instanceof Error ? fe.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return at(Re), (fe, ae) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ae[0] || (ae[0] = (E) => _.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: _e
              }, {
                default: h(() => [...ae[7] || (ae[7] = [
                  S(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: g.value,
            "onUpdate:modelValue": ae[1] || (ae[1] = (E) => g.value = E),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (a(), R($s, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (a(), R(Cs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Re
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            we.value ? (a(), R(It, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", m$, [
                  ae[8] || (ae[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(B, null, he(e.versionMismatches, (E) => (a(), R(Ft, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ae[9] || (ae[9] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", f$, [
                      s("span", v$, m(E.actual), 1),
                      ae[10] || (ae[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", p$, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: ae[2] || (ae[2] = (U) => n("repair-environment"))
                    }, {
                      default: h(() => [...ae[11] || (ae[11] = [
                        S(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            j.value.length ? (a(), R(It, {
              key: 1,
              title: "BLOCKED",
              count: j.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(j.value, (E) => (a(), R(Ft, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ae[12] || (ae[12] = [
                    S("⛔", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", g$, m(se(E)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: E.issue_guidance || pe(E)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: ee(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Pe(E)
                    }, {
                      default: h(() => [...ae[13] || (ae[13] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            L.value.length ? (a(), R(It, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(L.value, (E) => (a(), R(Ft, {
                  key: `community-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ae[14] || (ae[14] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", h$, m(O(E)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: E.issue_guidance || ue(E)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: ee(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Pe(E)
                    }, {
                      default: h(() => [...ae[15] || (ae[15] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(E) ? (a(), i("span", y$, "Queued")) : (a(), i(B, { key: 1 }, [
                      E.registry_id ? (a(), R(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (U) => le(E)
                      }, {
                        default: h(() => [...ae[16] || (ae[16] = [
                          S(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      E.repository ? (a(), R(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (U) => oe(E)
                      }, {
                        default: h(() => [...ae[17] || (ae[17] = [
                          S(" Install via Git ", -1)
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
            z.value.length ? (a(), R(It, {
              key: 3,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(z.value, (E) => (a(), R(Ft, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ae[18] || (ae[18] = [
                    S("?", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ae[19] || (ae[19] = [
                    s("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: ee(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Pe(E)
                    }, {
                      default: h(() => [...ae[20] || (ae[20] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => De(E.name)
                    }, {
                      default: h(() => [...ae[21] || (ae[21] = [
                        S(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => Ue(E.name)
                    }, {
                      default: h(() => [...ae[22] || (ae[22] = [
                        S(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            M.value.length ? (a(), R(It, {
              key: 4,
              title: "INSTALLED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(M.value, (E) => (a(), R(Ft, {
                  key: E.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    S(m(E.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    E.version ? (a(), i("span", w$, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (a(), i("span", _$, "version unknown")),
                    s("span", k$, " • " + m(Y(E.source)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: ee(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Pe(E)
                    }, {
                      default: h(() => [...ae[23] || (ae[23] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", b$, [
                      ae[25] || (ae[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: W(E),
                        disabled: Q(E),
                        onChange: (U) => ke(E, U)
                      }, [...ae[24] || (ae[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, $$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            N.value.length ? (a(), R(It, {
              key: 5,
              title: "MISSING",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(N.value, (E) => (a(), R(Ft, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: h(() => [...ae[26] || (ae[26] = [
                    S("!", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ae[27] || (ae[27] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Required by:",
                      value: ee(E)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (U) => Pe(E)
                    }, {
                      default: h(() => [...ae[28] || (ae[28] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => Ve(E.name)
                    }, {
                      default: h(() => [...ae[29] || (ae[29] = [
                        S(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !M.value.length && !N.value.length && !j.value.length && !L.value.length && !z.value.length ? (a(), R(vs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(rs, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: ae[4] || (ae[4] = (E) => _.value = !1)
      }, {
        content: h(() => [...ae[30] || (ae[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            S(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            S(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            S(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            S(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            S(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: ae[3] || (ae[3] = (E) => _.value = !1)
          }, {
            default: h(() => [...ae[31] || (ae[31] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (a(), R(i$, {
        key: 0,
        node: C.value,
        onClose: ae[5] || (ae[5] = (E) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (a(), R(Tl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ae[6] || (ae[6] = (E) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), x$ = /* @__PURE__ */ Ie(C$, [["__scopeId", "data-v-edfa1c86"]]), S$ = { class: "setting-info" }, I$ = { class: "setting-label" }, E$ = {
  key: 0,
  class: "required-marker"
}, T$ = {
  key: 0,
  class: "setting-description"
}, M$ = { class: "setting-control" }, P$ = /* @__PURE__ */ Ce({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", S$, [
        s("div", I$, [
          S(m(e.label) + " ", 1),
          e.required ? (a(), i("span", E$, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", T$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", M$, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ Ie(P$, [["__scopeId", "data-v-3e106b1c"]]), R$ = ["type", "value", "placeholder", "disabled"], L$ = /* @__PURE__ */ Ce({
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
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return at(() => {
      n.autoFocus && r.value && r.value.focus();
    }), t({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, d) => (a(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = us((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = us((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, R$));
  }
}), yo = /* @__PURE__ */ Ie(L$, [["__scopeId", "data-v-0380d08f"]]), D$ = { class: "toggle" }, N$ = ["checked", "disabled"], O$ = /* @__PURE__ */ Ce({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", D$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, N$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Si = /* @__PURE__ */ Ie(O$, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function mc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function U$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function A$() {
  function e() {
    try {
      return localStorage.getItem(Ba);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Ba, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ba);
    } catch (l) {
      console.error("[useGitAuth] Failed to clear token:", l);
    }
  }
  function n() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: n,
    isRemoteSsh: mc,
    isRemoteHttps: U$
  };
}
const z$ = { class: "workspace-settings-content" }, F$ = { class: "settings-section" }, V$ = { class: "path-setting" }, B$ = { class: "path-value" }, W$ = { class: "path-setting" }, G$ = { class: "path-value" }, j$ = { class: "settings-section" }, H$ = { class: "token-setting" }, q$ = {
  key: 0,
  class: "token-warning"
}, K$ = { class: "token-actions" }, J$ = { class: "settings-section" }, Q$ = { class: "settings-section" }, Y$ = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = A$(), g = k(!1), _ = k(null), C = k(null), $ = k(null), x = k(null), I = k(""), T = k(""), M = k(""), N = k(""), z = k(!1), j = k(!1), L = k(!1), K = k(""), ce = k(!1), te = k(!1), Y = k(null), we = k(!1), ee = k(!0);
    function W(Ve) {
      return Ve.join(" ");
    }
    function Q(Ve) {
      return Ve.trim() ? Ve.trim().split(/\s+/) : [];
    }
    const ke = P(() => {
      if (!x.value) return !1;
      const Ve = z.value, le = j.value, oe = L.value, Re = N.value !== W(x.value.comfyui_extra_args || []);
      return Ve || le || oe || Re;
    }), se = P(() => w());
    async function pe() {
      var Ve;
      g.value = !0, _.value = null;
      try {
        $.value = await r(n.workspacePath || void 0), x.value = { ...$.value }, I.value = $.value.civitai_api_key || "", T.value = $.value.huggingface_token || "", N.value = W($.value.comfyui_extra_args || []), M.value = v() || "", K.value = M.value, z.value = !1, j.value = !1, L.value = !1, Y.value = null;
        const le = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = le !== "false", ee.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Re = (Ve = (await u()).remotes) == null ? void 0 : Ve.find((fe) => fe.name === "origin");
          ce.value = !!(Re && mc(Re.url));
        } catch {
          ce.value = !1;
        }
      } catch (le) {
        _.value = le instanceof Error ? le.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function O() {
      var Ve;
      C.value = null;
      try {
        const le = {};
        z.value && (le.civitai_api_key = I.value || null), j.value && (le.huggingface_token = T.value || null), N.value !== W(((Ve = x.value) == null ? void 0 : Ve.comfyui_extra_args) || []) && (le.comfyui_extra_args = Q(N.value)), await c(le, n.workspacePath || void 0), L.value && (M.value ? f(M.value) : p()), await pe(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (le) {
        const oe = le instanceof Error ? le.message : "Failed to save settings";
        C.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function ue() {
      x.value && (I.value = x.value.civitai_api_key || "", T.value = x.value.huggingface_token || "", N.value = W(x.value.comfyui_extra_args || []), M.value = K.value, z.value = !1, j.value = !1, L.value = !1, Y.value = null, C.value = null);
    }
    async function Pe() {
      if (M.value) {
        te.value = !0, Y.value = null;
        try {
          const Ve = await d(M.value);
          Y.value = {
            type: Ve.status === "success" ? "success" : "error",
            message: Ve.message
          };
        } catch (Ve) {
          Y.value = {
            type: "error",
            message: Ve instanceof Error ? Ve.message : "Connection test failed"
          };
        } finally {
          te.value = !1;
        }
      }
    }
    function _e() {
      M.value = "", L.value = !0, Y.value = null;
    }
    function De(Ve) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(Ve)), console.log("[ComfyGit] Auto-refresh setting saved:", Ve);
    }
    function Ue(Ve) {
      Ve ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", Ve ? "enabled" : "disabled");
    }
    return t({
      saveSettings: O,
      resetSettings: ue,
      hasChanges: ke,
      loadSettings: pe
    }), at(pe), (Ve, le) => (a(), i("div", z$, [
      g.value ? (a(), R($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (a(), R(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: pe
      }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
        b(It, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Re;
            return [
              s("div", F$, [
                s("div", V$, [
                  le[9] || (le[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  le[10] || (le[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", B$, m(((oe = $.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", W$, [
                  le[11] || (le[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  le[12] || (le[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", G$, m(((Re = $.value) == null ? void 0 : Re.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(It, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", j$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": le[0] || (le[0] = (oe) => I.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: le[1] || (le[1] = (oe) => z.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: T.value,
                    "onUpdate:modelValue": le[2] || (le[2] = (oe) => T.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: le[3] || (le[3] = (oe) => j.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "GitHub Personal Access Token",
                description: "Client-side token used for private Git remote access during deploy and remote operations",
                stacked: ""
              }, {
                default: h(() => [
                  s("div", H$, [
                    b(yo, {
                      modelValue: M.value,
                      "onUpdate:modelValue": le[4] || (le[4] = (oe) => M.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: le[5] || (le[5] = (oe) => L.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (a(), i("div", q$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    le[15] || (le[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", K$, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: te.value,
                        disabled: !M.value || te.value,
                        onClick: Pe
                      }, {
                        default: h(() => [...le[13] || (le[13] = [
                          S(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (a(), R(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: _e
                      }, {
                        default: h(() => [...le[14] || (le[14] = [
                          S(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    Y.value ? (a(), i("div", {
                      key: 1,
                      class: Be(["token-test-result", Y.value.type])
                    }, m(Y.value.message), 3)) : y("", !0)
                  ])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        b(It, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            s("div", J$, [
              b(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": le[6] || (le[6] = (oe) => N.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              le[16] || (le[16] = s("div", { class: "setting-hint" }, [
                S(" Common flags: "),
                s("code", null, "--lowvram"),
                S(", "),
                s("code", null, "--highvram"),
                S(", "),
                s("code", null, "--listen 0.0.0.0"),
                S(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(It, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", Q$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Si, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      le[7] || (le[7] = (oe) => we.value = oe),
                      De
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              b(vo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: h(() => [
                  b(Si, {
                    modelValue: ee.value,
                    "onUpdate:modelValue": [
                      le[8] || (le[8] = (oe) => ee.value = oe),
                      Ue
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        C.value ? (a(), R(Il, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Rt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), fc = /* @__PURE__ */ Ie(Y$, [["__scopeId", "data-v-f1bdc574"]]), X$ = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (n, l) => (a(), R(Ut, null, {
      header: h(() => [
        b(At, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !((r = t.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  S(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (a(), R(Me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  S(" Reset ", -1)
                ])]),
                _: 1
              })) : y("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: h(() => [
        b(fc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), Z$ = { class: "env-title" }, eC = {
  key: 0,
  class: "current-badge"
}, tC = {
  key: 0,
  class: "branch-info"
}, sC = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), R(Ft, {
      status: e.isCurrent ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        S(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", Z$, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", eC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", tC, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          S(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        ot(t.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: h(() => [
          b(_t, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          b(_t, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          b(_t, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (a(), R(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), oC = /* @__PURE__ */ Ie(sC, [["__scopeId", "data-v-9231917a"]]), nC = { class: "env-details" }, aC = { class: "status-row" }, lC = {
  key: 0,
  class: "detail-row"
}, iC = { class: "value mono" }, rC = {
  key: 1,
  class: "detail-row"
}, cC = { class: "value mono small" }, uC = { class: "collapsible-section" }, dC = { class: "value" }, mC = {
  key: 0,
  class: "collapsible-body"
}, fC = { class: "item-list" }, vC = { class: "item-name" }, pC = { class: "item-name" }, gC = { class: "item-name" }, hC = { class: "item-name" }, yC = {
  key: 0,
  class: "empty-list"
}, wC = { class: "collapsible-section" }, _C = { class: "value" }, kC = {
  key: 0,
  class: "collapsible-body"
}, bC = { class: "item-list" }, $C = { class: "item-name" }, CC = {
  key: 0,
  class: "item-meta"
}, xC = {
  key: 0,
  class: "empty-list"
}, SC = { class: "collapsible-section" }, IC = { class: "value" }, EC = {
  key: 0,
  class: "missing-count"
}, TC = {
  key: 0,
  class: "collapsible-body"
}, MC = { class: "item-list" }, PC = { class: "model-row" }, RC = { class: "item-name" }, LC = { class: "model-meta" }, DC = { class: "item-meta" }, NC = {
  key: 0,
  class: "item-meta"
}, OC = {
  key: 0,
  class: "empty-list"
}, UC = {
  key: 2,
  class: "section-divider"
}, AC = {
  key: 3,
  class: "detail-row"
}, zC = { class: "value" }, FC = { class: "footer-actions" }, VC = /* @__PURE__ */ Ce({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(/* @__PURE__ */ new Set());
    function r(d) {
      l.value.has(d) ? l.value.delete(d) : l.value.add(d), l.value = new Set(l.value);
    }
    const c = P(() => {
      var v;
      if (!((v = o.detail) != null && v.workflows)) return !0;
      const d = o.detail.workflows;
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
    return (d, v) => (a(), R($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => n("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, C, $, x, I, T, M, N, z, j;
        return [
          s("div", nC, [
            s("div", aC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", lC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", iC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", rC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", cC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", uC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (L) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", dC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", mC, [
                s("div", fC, [
                  (a(!0), i(B, null, he(e.detail.workflows.synced, (L) => (a(), i("div", {
                    key: "synced-" + L,
                    class: "list-item"
                  }, [
                    s("span", vC, m(L), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.new, (L) => (a(), i("div", {
                    key: "new-" + L,
                    class: "list-item"
                  }, [
                    s("span", pC, m(L), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.modified, (L) => (a(), i("div", {
                    key: "mod-" + L,
                    class: "list-item"
                  }, [
                    s("span", gC, m(L), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.deleted, (L) => (a(), i("div", {
                    key: "del-" + L,
                    class: "list-item"
                  }, [
                    s("span", hC, m(L), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", yC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", wC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (L) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", _C, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (a(), i("div", kC, [
                s("div", bC, [
                  (a(!0), i(B, null, he(e.detail.nodes, (L) => (a(), i("div", {
                    key: L.name,
                    class: "list-item"
                  }, [
                    s("span", $C, m(L.name), 1),
                    L.version ? (a(), i("span", CC, m(L.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", xC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", SC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (L) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", IC, [
                  S(m((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (x = e.detail) == null ? void 0 : x.models) != null && I.missing.length ? (a(), i("span", EC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (a(), i("div", TC, [
                s("div", MC, [
                  (a(!0), i(B, null, he(e.detail.models.missing, (L) => (a(), i("div", {
                    key: L.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", PC, [
                      s("span", RC, m(L.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", L.criticality])
                      }, m(L.criticality), 3)
                    ]),
                    s("div", LC, [
                      s("span", DC, m(L.category), 1),
                      L.workflow_names.length ? (a(), i("span", NC, " used by: " + m(L.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", OC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (a(), i("div", UC)) : y("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (a(), i("div", AC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", zC, m(u(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", FC, [
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => n("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              S(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (a(), R(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => n("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              S(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => n("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), BC = /* @__PURE__ */ Ie(VC, [["__scopeId", "data-v-750671f5"]]), vc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], pc = "3.12", Ml = [
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
], gc = "auto", WC = { class: "progress-bar" }, GC = /* @__PURE__ */ Ce({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = P(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", WC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), hc = /* @__PURE__ */ Ie(GC, [["__scopeId", "data-v-1beb0512"]]), jC = { class: "task-progress" }, HC = { class: "progress-info" }, qC = { class: "progress-percentage" }, KC = { class: "progress-message" }, JC = {
  key: 0,
  class: "progress-steps"
}, QC = { class: "step-icon" }, YC = { class: "step-label" }, XC = /* @__PURE__ */ Ce({
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
    function o(l) {
      const r = t.steps.find((c) => c.id === l);
      return r ? t.progress >= r.progressThreshold ? "completed" : t.currentPhase === l ? "active" : "pending" : "pending";
    }
    function n(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (a(), i("div", jC, [
      b(hc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", HC, [
        s("span", qC, m(e.progress) + "%", 1),
        s("span", KC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", JC, [
        (a(!0), i(B, null, he(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", QC, m(n(c.id)), 1),
          s("span", YC, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Jn = /* @__PURE__ */ Ie(XC, [["__scopeId", "data-v-9d1de66c"]]), ZC = {
  key: 0,
  class: "create-env-form"
}, ex = { class: "form-field" }, tx = { class: "input-wrapper" }, sx = {
  key: 0,
  class: "validating-indicator"
}, ox = {
  key: 1,
  class: "valid-indicator"
}, nx = {
  key: 0,
  class: "field-error"
}, ax = { class: "form-field" }, lx = ["value"], ix = { class: "form-field" }, rx = ["disabled"], cx = ["value"], ux = { class: "form-field" }, dx = ["value"], mx = { class: "form-field form-field--checkbox" }, fx = { class: "form-checkbox" }, vx = {
  key: 1,
  class: "create-env-progress"
}, px = { class: "creating-intro" }, gx = {
  key: 0,
  class: "progress-warning"
}, hx = {
  key: 1,
  class: "create-error"
}, yx = { class: "error-message" }, wx = {
  key: 1,
  class: "footer-status"
}, _x = 10, kx = /* @__PURE__ */ Ce({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(pc), v = k("latest"), f = k(gc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let C = null, $ = 0;
    const x = P(() => !!u.value.trim() && _.value && !w.value && !g.value && !M.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), M = k(!1), N = k({
      progress: 0,
      message: ""
    });
    let z = null, j = 0;
    const L = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], K = k(null);
    pt(u, (se) => {
      _.value = !1, C && (clearTimeout(C), C = null);
      const pe = se.trim();
      if (!pe) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ce(pe);
      }, 400);
    });
    async function ce(se, pe = !1) {
      const O = se.trim();
      if (!O)
        return _.value = !1, g.value = !1, w.value = pe ? "Environment name is required" : null, !1;
      const ue = ++$;
      g.value = !0;
      try {
        const Pe = await c(O);
        return ue !== $ ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return ue !== $ || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        ue === $ && (g.value = !1);
      }
    }
    async function te() {
      C && (clearTimeout(C), C = null), await ce(u.value, !0);
    }
    function Y() {
      M.value || o("close");
    }
    async function we() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ce(se, !0)) {
        M.value = !0, N.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const O = {
            name: se,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, ue = await l(O);
          ue.status === "started" ? ee() : ue.status === "error" && (N.value = {
            progress: 0,
            message: ue.message || "Failed to start creation",
            error: ue.message
          });
        } catch (O) {
          N.value = {
            progress: 0,
            message: O instanceof Error ? O.message : "Unknown error",
            error: O instanceof Error ? O.message : "Unknown error"
          };
        }
      }
    }
    function ee() {
      z || (j = 0, z = window.setInterval(async () => {
        try {
          const se = await r();
          j = 0, N.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (W(), o("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (W(), N.value.error = se.error || se.message) : se.state === "idle" && M.value && (W(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= _x && (W(), N.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      z && (clearInterval(z), z = null);
    }
    function Q() {
      M.value = !1, N.value = { progress: 0, message: "" }, o("close");
    }
    async function ke() {
      T.value = !0;
      try {
        I.value = await n();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        T.value = !1;
      }
    }
    return at(async () => {
      var se;
      await Pt(), (se = K.value) == null || se.focus(), ke();
    }), Po(() => {
      W(), C && (clearTimeout(C), C = null);
    }), (se, pe) => (a(), R($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Y
    }, {
      body: h(() => [
        M.value ? (a(), i("div", vx, [
          s("p", px, [
            pe[12] || (pe[12] = S(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            pe[13] || (pe[13] = S("... ", -1))
          ]),
          b(Jn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: L
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? y("", !0) : (a(), i("p", gx, " This may take several minutes. Please wait... ")),
          N.value.error ? (a(), i("div", hx, [
            s("p", yx, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", ZC, [
          s("div", ex, [
            pe[6] || (pe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", tx, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: K,
                "onUpdate:modelValue": pe[0] || (pe[0] = (O) => u.value = O),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: us(we, ["enter"]),
                onBlur: te
              }, null, 34), [
                [en, u.value]
              ]),
              g.value ? (a(), i("span", sx, "...")) : _.value ? (a(), i("span", ox, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", nx, m(w.value), 1)) : y("", !0),
            pe[7] || (pe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", ax, [
            pe[8] || (pe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (O) => d.value = O),
              class: "form-select"
            }, [
              (a(!0), i(B, null, he(st(vc), (O) => (a(), i("option", {
                key: O,
                value: O
              }, m(O), 9, lx))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", ix, [
            pe[9] || (pe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (O) => v.value = O),
              class: "form-select",
              disabled: T.value
            }, [
              (a(!0), i(B, null, he(I.value, (O) => (a(), i("option", {
                key: O.tag_name,
                value: O.tag_name
              }, m(O.name), 9, cx))), 128))
            ], 8, rx), [
              [Co, v.value]
            ])
          ]),
          s("div", ux, [
            pe[10] || (pe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (O) => f.value = O),
              class: "form-select"
            }, [
              (a(!0), i(B, null, he(st(Ml), (O) => (a(), i("option", {
                key: O,
                value: O
              }, m(O) + m(O === "auto" ? " (detect GPU)" : ""), 9, dx))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          s("div", mx, [
            s("label", fx, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (O) => p.value = O)
              }, null, 512), [
                [qn, p.value]
              ]),
              pe[11] || (pe[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        M.value ? (a(), i(B, { key: 1 }, [
          N.value.error ? (a(), R(Ne, {
            key: 0,
            variant: "secondary",
            onClick: Q
          }, {
            default: h(() => [...pe[16] || (pe[16] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })) : (a(), i("span", wx, " Creating environment... "))
        ], 64)) : (a(), i(B, { key: 0 }, [
          b(Ne, {
            variant: "primary",
            disabled: !x.value,
            onClick: we
          }, {
            default: h(() => [...pe[14] || (pe[14] = [
              S(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ne, {
            variant: "secondary",
            onClick: pe[5] || (pe[5] = (O) => o("close"))
          }, {
            default: h(() => [...pe[15] || (pe[15] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), bx = /* @__PURE__ */ Ie(kx, [["__scopeId", "data-v-3faa3d9b"]]), $x = /* @__PURE__ */ Ce({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = P(() => [...c.value].sort((z, j) => z.is_current !== j.is_current ? z.is_current ? -1 : 1 : z.name.localeCompare(j.name))), C = P(() => {
      if (!v.value.trim()) return _.value;
      const z = v.value.toLowerCase();
      return _.value.filter(
        (j) => {
          var L;
          return j.name.toLowerCase().includes(z) || ((L = j.current_branch) == null ? void 0 : L.toLowerCase().includes(z));
        }
      );
    });
    function $(z, j) {
      p.value = !1, n("created", z, j);
    }
    function x() {
      p.value = !0;
    }
    async function I(z) {
      w.value = z, g.value = null;
      const j = await r(z.name);
      j && (g.value = j);
    }
    function T(z) {
      w.value = null, g.value = null, n("delete", z);
    }
    function M(z) {
      w.value = null, g.value = null, n("export", z);
    }
    async function N() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (z) {
        d.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return at(N), t({
      loadEnvironments: N,
      openCreateModal: x
    }), (z, j) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: j[1] || (j[1] = (L) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: h(() => [...j[7] || (j[7] = [
                  S(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: j[0] || (j[0] = (L) => z.$emit("import"))
              }, {
                default: h(() => [...j[8] || (j[8] = [
                  S(" Import ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: v.value,
            "onUpdate:modelValue": j[2] || (j[2] = (L) => v.value = L),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          u.value ? (a(), R($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (a(), R(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: N
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            C.value.length ? (a(), R(It, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(C.value, (L) => (a(), R(oC, {
                  key: L.name,
                  "environment-name": L.name,
                  "is-current": L.is_current,
                  "current-branch": L.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !L.is_current && e.canSwitch ? (a(), R(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (K) => z.$emit("switch", L.name)
                    }, {
                      default: h(() => [...j[9] || (j[9] = [
                        S(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => I(L)
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => z.$emit("export", L.name)
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
                        S(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            C.value.length ? y("", !0) : (a(), R(vs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Qt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (a(), R(Me, {
                    key: 0,
                    variant: "primary",
                    onClick: x
                  }, {
                    default: h(() => [...j[12] || (j[12] = [
                      S(" Create Environment ", -1)
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
      b(rs, {
        show: f.value,
        title: "About Environments",
        onClose: j[4] || (j[4] = (L) => f.value = !1)
      }, {
        content: h(() => [...j[13] || (j[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            S(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
          b(Me, {
            variant: "secondary",
            onClick: j[3] || (j[3] = (L) => f.value = !1)
          }, {
            default: h(() => [...j[14] || (j[14] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(BC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: j[5] || (j[5] = (L) => {
          w.value = null, g.value = null;
        }),
        onDelete: T,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (a(), R(bx, {
        key: 1,
        onClose: j[6] || (j[6] = (L) => p.value = !1),
        onCreated: $
      })) : y("", !0)
    ], 64));
  }
}), Cx = /* @__PURE__ */ Ie($x, [["__scopeId", "data-v-01163d8c"]]), xx = { class: "file-path" }, Sx = { class: "file-path-text" }, Ix = ["title"], Ex = /* @__PURE__ */ Ce({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function n() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (a(), i("div", xx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Sx, m(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, Ix)) : y("", !0)
    ]));
  }
}), Tx = /* @__PURE__ */ Ie(Ex, [["__scopeId", "data-v-f0982173"]]), Mx = { class: "base-textarea-wrapper" }, Px = ["value", "rows", "placeholder", "disabled", "maxlength"], Rx = {
  key: 0,
  class: "base-textarea-count"
}, Lx = /* @__PURE__ */ Ce({
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
    const o = e, n = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), n("submit"));
    }
    return (r, c) => (a(), i("div", Mx, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = us(gt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = us(gt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          us(l, ["enter"])
        ]
      }, null, 40, Px),
      e.showCharCount && e.maxLength ? (a(), i("div", Rx, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ Ie(Lx, [["__scopeId", "data-v-c6d16c93"]]), Dx = ["checked", "disabled"], Nx = { class: "base-checkbox-box" }, Ox = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ux = {
  key: 0,
  class: "base-checkbox-label"
}, Ax = /* @__PURE__ */ Ce({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked))
      }, null, 40, Dx),
      s("span", Nx, [
        e.modelValue ? (a(), i("svg", Ox, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Ux, [
        ot(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Qn = /* @__PURE__ */ Ie(Ax, [["__scopeId", "data-v-bf17c831"]]), zx = { class: "export-blocked" }, Fx = { class: "error-header" }, Vx = { class: "error-summary" }, Bx = { class: "error-title" }, Wx = { class: "error-description" }, Gx = { class: "issues-list" }, jx = { class: "issue-message" }, Hx = {
  key: 0,
  class: "issue-details"
}, qx = ["onClick"], Kx = { class: "issue-fix" }, Jx = {
  key: 0,
  class: "commit-section"
}, Qx = {
  key: 0,
  class: "issues-warning"
}, Yx = {
  key: 1,
  class: "commit-error"
}, Xx = /* @__PURE__ */ Ce({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = co({}), f = P(() => o.mode === "publish" ? "Publish" : "Export"), p = P(
      () => o.issues.some((x) => x.type === "uncommitted_workflows" || x.type === "uncommitted_git_changes")
    ), w = P(
      () => o.issues.some((x) => x.type === "unresolved_issues")
    ), g = P(
      () => w.value && !u.value
    ), _ = P(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function C(x) {
      const I = o.issues[x];
      return v[x] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function $() {
      var x;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            n("committed");
          else if (I.status === "blocked") {
            const T = ((x = I.issues) == null ? void 0 : x.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${T}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (x, I) => (a(), R($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (T) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", zx, [
          s("div", Fx, [
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
            s("div", Vx, [
              s("h3", Bx, m(f.value) + " blocked", 1),
              s("p", Wx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", Gx, [
            (a(!0), i(B, null, he(e.issues, (T, M) => (a(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", jx, m(T.message), 1),
              T.details.length ? (a(), i("div", Hx, [
                (a(!0), i(B, null, he(C(M), (N, z) => (a(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                T.details.length > 3 && !v[M] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[M] = !0
                }, " +" + m(T.details.length - 3) + " more ", 9, qx)) : y("", !0)
              ])) : y("", !0),
              s("div", Kx, [
                T.type === "uncommitted_workflows" ? (a(), i(B, { key: 0 }, [
                  S(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "uncommitted_git_changes" ? (a(), i(B, { key: 1 }, [
                  S(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : T.type === "unresolved_issues" ? (a(), i(B, { key: 2 }, [
                  S(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (a(), i("div", Jx, [
            w.value ? (a(), i("div", Qx, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Qn, {
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (T) => u.value = T),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  S(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (T) => r.value = T),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: $,
              onCtrlEnter: $
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (a(), i("div", Yx, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (a(), i(B, { key: 0 }, [
          b(Ne, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (T) => x.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              S(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(Ne, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: $
          }, {
            default: h(() => [
              S(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (a(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (T) => x.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            S(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Zx = /* @__PURE__ */ Ie(Xx, [["__scopeId", "data-v-a8990107"]]), e3 = { class: "repro-warning" }, t3 = { class: "repro-warning-content" }, s3 = {
  key: 0,
  class: "warning-group"
}, o3 = { class: "warning-list" }, n3 = { key: 0 }, a3 = {
  key: 1,
  class: "warning-group"
}, l3 = { class: "warning-list" }, i3 = { key: 0 }, r3 = /* @__PURE__ */ Ce({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = P(() => t.warnings.models_without_sources || []), n = P(() => t.warnings.nodes_without_provenance || []), l = P(() => o.value.length), r = P(() => n.value.length), c = P(() => l.value + r.value), u = P(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = P(
      () => n.value.slice(0, t.maxItemsPerGroup)
    ), v = P(
      () => Math.max(0, l.value - u.value.length)
    ), f = P(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (a(), i("div", e3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", t3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (a(), i("div", s3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", o3, [
            (a(!0), i(B, null, he(u.value, (g) => (a(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (a(), i("li", n3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", a3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", l3, [
            (a(!0), i(B, null, he(d.value, (g) => (a(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (a(), i("li", i3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ Ie(r3, [["__scopeId", "data-v-11be310d"]]), c3 = { class: "export-card" }, u3 = { class: "export-path-row" }, d3 = {
  key: 1,
  class: "export-warning"
}, m3 = { class: "export-footer-actions" }, f3 = /* @__PURE__ */ Ce({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), C = P(() => {
      var W;
      return ((W = t.environmentName) == null ? void 0 : W.trim()) || null;
    }), $ = P(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = P(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), I = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : j.value ? "Export Anyway" : "Export Environment"), T = P(() => {
      var W;
      return ((W = w.value) == null ? void 0 : W.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), M = P(
      () => T.value.models_without_sources.length
    ), N = P(
      () => {
        var W;
        return ((W = T.value.nodes_without_provenance) == null ? void 0 : W.length) || 0;
      }
    ), z = P(
      () => M.value + N.value
    ), j = P(
      () => {
        var W;
        return !!((W = w.value) != null && W.can_export) && z.value > 0;
      }
    );
    async function L() {
      u.value = !0;
      try {
        const W = C.value ? await l(C.value) : await o();
        return w.value = W, W;
      } catch (W) {
        return f.value = {
          status: "error",
          message: W instanceof Error ? W.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function K() {
      f.value = null;
      const W = await L();
      if (W) {
        if (!W.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ce() {
      g.value = !1;
      const W = await L();
      if (W) {
        if (!W.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function te() {
      await L();
    }
    async function Y() {
      d.value = !0;
      try {
        const W = C.value ? await r(C.value, c.value || void 0) : await n(c.value || void 0);
        f.value = W;
      } catch (W) {
        f.value = {
          status: "error",
          message: W instanceof Error ? W.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function we() {
      var W;
      if ((W = f.value) != null && W.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (Q) {
          console.error("Failed to copy path:", Q);
        }
    }
    async function ee() {
      var W;
      if ((W = f.value) != null && W.path) {
        v.value = !0;
        try {
          const Q = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!Q.ok)
            throw new Error(`Download failed: ${Q.statusText}`);
          const ke = await Q.blob(), se = URL.createObjectURL(ke), pe = f.value.path.split("/").pop() || "environment-export.tar.gz", O = document.createElement("a");
          O.href = se, O.download = pe, document.body.appendChild(O), O.click(), document.body.removeChild(O), URL.revokeObjectURL(se);
        } catch (Q) {
          console.error("Failed to download:", Q), alert(`Download failed: ${Q instanceof Error ? Q.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return at(() => {
      L();
    }), (W, Q) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          j.value ? (a(), R(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: T.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: Q[1] || (Q[1] = (ke) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(It, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", c3, [
                Q[8] || (Q[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", u3, [
                  b(yo, {
                    modelValue: c.value,
                    "onUpdate:modelValue": Q[2] || (Q[2] = (ke) => c.value = ke),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (a(), R(It, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Ft, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Qt({
                icon: h(() => [
                  S(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  S(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  S(m(f.value.status === "success" ? x.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        b(Tx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (a(), R(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (a(), i("div", d3, [...Q[9] || (Q[9] = [
                      s("span", { class: "warning-icon" }, "!", -1),
                      s("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : y("", !0)
                  ]),
                  key: "0"
                } : void 0,
                f.value.status === "success" ? {
                  name: "actions",
                  fn: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      loading: v.value,
                      onClick: ee
                    }, {
                      default: h(() => [...Q[10] || (Q[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: we
                    }, {
                      default: h(() => [...Q[11] || (Q[11] = [
                        S(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: Q[3] || (Q[3] = (ke) => f.value = null)
                    }, {
                      default: h(() => [...Q[12] || (Q[12] = [
                        S(" Dismiss ", -1)
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
          s("div", m3, [
            e.embedded ? (a(), R(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: Q[4] || (Q[4] = (ke) => W.$emit("close"))
            }, {
              default: h(() => [...Q[13] || (Q[13] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Me, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: K
            }, {
              default: h(() => [
                S(m(I.value), 1)
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
            b(At, {
              title: $.value,
              "show-info": !0,
              onInfoClick: Q[0] || (Q[0] = (ke) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(rs, {
        show: p.value,
        title: "What Gets Exported",
        onClose: Q[5] || (Q[5] = (ke) => p.value = !1)
      }, {
        content: h(() => [...Q[14] || (Q[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  S(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  S(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  S(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  S(" — Environment settings and metadata")
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
              S(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (a(), R(Zx, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: Q[6] || (Q[6] = (ke) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), R(Sl, {
        key: 1,
        warnings: w.value.warnings,
        onClose: Q[7] || (Q[7] = (ke) => _.value = !1),
        onRevalidate: te
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), v3 = /* @__PURE__ */ Ie(f3, [["__scopeId", "data-v-6cf814a2"]]), p3 = { class: "file-input-wrapper" }, g3 = ["accept", "multiple", "disabled"], h3 = /* @__PURE__ */ Ce({
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
  setup(e, { expose: t, emit: o }) {
    const n = o, l = k(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (n("change", d.files), d.value = "");
    }
    return t({
      triggerInput: r
    }), (u, d) => (a(), i("div", p3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, g3),
      b(Me, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          ot(u.$slots, "default", {}, () => [
            d[0] || (d[0] = s("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              s("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              s("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            S(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), y3 = /* @__PURE__ */ Ie(h3, [["__scopeId", "data-v-cd192091"]]), w3 = {
  key: 0,
  class: "drop-zone-empty"
}, _3 = { class: "drop-zone-text" }, k3 = { class: "drop-zone-primary" }, b3 = { class: "drop-zone-secondary" }, $3 = { class: "drop-zone-actions" }, C3 = {
  key: 1,
  class: "drop-zone-file"
}, x3 = { class: "file-info" }, S3 = { class: "file-details" }, I3 = { class: "file-name" }, E3 = { class: "file-size" }, T3 = /* @__PURE__ */ Ce({
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
    const o = t, n = k(!1), l = k(null), r = k(0), c = P(() => l.value !== null), u = P(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), d = P(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v($) {
      var x;
      $.stopPropagation(), r.value++, (x = $.dataTransfer) != null && x.types.includes("Files") && (n.value = !0);
    }
    function f($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function p($) {
      $.stopPropagation(), r.value--, r.value === 0 && (n.value = !1);
    }
    function w($) {
      var I;
      $.stopPropagation(), r.value = 0, n.value = !1;
      const x = (I = $.dataTransfer) == null ? void 0 : I.files;
      x && x.length > 0 && _(x[0]);
    }
    function g($) {
      $.length > 0 && _($[0]);
    }
    function _($) {
      l.value = $, o("fileSelected", $);
    }
    function C() {
      l.value = null, o("clear");
    }
    return ($, x) => (a(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": n.value, "has-file": c.value }]),
      onDragenter: gt(v, ["prevent"]),
      onDragover: gt(f, ["prevent"]),
      onDragleave: gt(p, ["prevent"]),
      onDrop: gt(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", C3, [
        s("div", x3, [
          x[1] || (x[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", S3, [
            s("div", I3, m(u.value), 1),
            s("div", E3, m(d.value), 1)
          ])
        ]),
        b(Me, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...x[2] || (x[2] = [
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
      ])) : (a(), i("div", w3, [
        x[0] || (x[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", _3, [
          s("p", k3, m(e.primaryText), 1),
          s("p", b3, m(e.secondaryText), 1)
        ]),
        s("div", $3, [
          b(y3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              S(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), M3 = /* @__PURE__ */ Ie(T3, [["__scopeId", "data-v-0f79cb86"]]), P3 = { class: "commit-hash" }, R3 = /* @__PURE__ */ Ce({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = P(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", P3, m(o.value), 1));
  }
}), yc = /* @__PURE__ */ Ie(R3, [["__scopeId", "data-v-7c333cc6"]]), L3 = { class: "import-preview" }, D3 = { class: "preview-header" }, N3 = {
  key: 0,
  class: "source-env"
}, O3 = { class: "preview-content" }, U3 = { class: "preview-section" }, A3 = { class: "section-header" }, z3 = { class: "section-info" }, F3 = { class: "section-count" }, V3 = {
  key: 0,
  class: "item-list"
}, B3 = { class: "item-name" }, W3 = {
  key: 0,
  class: "item-more"
}, G3 = { class: "preview-section" }, j3 = { class: "section-header" }, H3 = { class: "section-info" }, q3 = { class: "section-count" }, K3 = {
  key: 0,
  class: "item-list"
}, J3 = { class: "item-details" }, Q3 = { class: "item-name" }, Y3 = { class: "item-meta" }, X3 = {
  key: 0,
  class: "item-more"
}, Z3 = { class: "preview-section" }, eS = { class: "section-header" }, tS = { class: "section-info" }, sS = { class: "section-count" }, oS = {
  key: 0,
  class: "item-list"
}, nS = { class: "item-name" }, aS = {
  key: 0,
  class: "item-more"
}, lS = {
  key: 0,
  class: "preview-section"
}, iS = { class: "git-info" }, rS = /* @__PURE__ */ Ce({
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
    const t = e, o = P(() => t.workflows.length), n = P(() => t.models.length), l = P(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (a(), i("div", L3, [
      s("div", D3, [
        b(ns, null, {
          default: h(() => [...u[0] || (u[0] = [
            S("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", N3, [
          u[1] || (u[1] = S(" From: ", -1)),
          b(tl, null, {
            default: h(() => [
              S(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", O3, [
        s("div", U3, [
          s("div", A3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", z3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", F3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", V3, [
            (a(!0), i(B, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", B3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", W3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", G3, [
          s("div", j3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", H3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", q3, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", K3, [
            (a(!0), i(B, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", J3, [
                s("span", Q3, m(d.filename), 1),
                s("span", Y3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", X3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", Z3, [
          s("div", eS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", tS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", sS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", oS, [
            (a(!0), i(B, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", nS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", aS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", lS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", iS, [
            e.gitBranch ? (a(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(tl, null, {
                  default: h(() => [
                    S(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (a(), R(_t, {
              key: 1,
              label: "Commit"
            }, {
              default: h(() => [
                b(yc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), cS = /* @__PURE__ */ Ie(rS, [["__scopeId", "data-v-182fe113"]]), uS = { class: "import-config" }, dS = { class: "config-container" }, mS = { class: "config-field" }, fS = { class: "input-wrapper" }, vS = ["value"], pS = {
  key: 0,
  class: "validating-indicator"
}, gS = {
  key: 1,
  class: "valid-indicator"
}, hS = {
  key: 0,
  class: "field-error"
}, yS = { class: "config-field" }, wS = { class: "strategy-options" }, _S = ["value", "checked", "onChange"], kS = { class: "strategy-content" }, bS = { class: "strategy-label" }, $S = { class: "strategy-description" }, CS = { class: "config-field switch-field" }, xS = { class: "switch-label" }, SS = ["checked"], IS = { class: "advanced-section" }, ES = { class: "advanced-content" }, TS = { class: "config-field" }, MS = ["value"], PS = ["value"], RS = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(!1), r = k(!1);
    pt(() => o.nameError, (f) => {
      l.value = !1, r.value = !f && o.name.length > 0;
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
    function d(f) {
      const p = f.target.value;
      n("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        n("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && n("validate-name", o.name);
    }
    return (f, p) => (a(), i("div", uS, [
      b(ns, null, {
        default: h(() => [...p[2] || (p[2] = [
          S("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", dS, [
        s("div", mS, [
          b(Nn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              S("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", fS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, vS),
            l.value ? (a(), i("span", pS, "...")) : r.value ? (a(), i("span", gS, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", hS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", yS, [
          b(Nn, null, {
            default: h(() => [...p[5] || (p[5] = [
              S("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", wS, [
            (a(), i(B, null, he(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => n("update:modelStrategy", w.value)
              }, null, 40, _S),
              s("div", kS, [
                s("span", bS, m(w.label), 1),
                s("span", $S, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", CS, [
          s("label", xS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, SS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", IS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", ES, [
            s("div", TS, [
              b(Nn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  S("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => n("update:torchBackend", w.target.value))
              }, [
                (a(!0), i(B, null, he(st(Ml), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, PS))), 128))
              ], 40, MS)
            ])
          ])
        ])
      ])
    ]));
  }
}), LS = /* @__PURE__ */ Ie(RS, [["__scopeId", "data-v-89ea06a1"]]), DS = { class: "import-flow" }, NS = {
  key: 0,
  class: "import-empty"
}, OS = { class: "git-import-section" }, US = { class: "git-url-input-row" }, AS = ["disabled"], zS = {
  key: 0,
  class: "git-error"
}, FS = {
  key: 1,
  class: "import-configure"
}, VS = { class: "selected-file-bar" }, BS = {
  key: 0,
  class: "file-bar-content"
}, WS = { class: "file-bar-info" }, GS = { class: "file-bar-name" }, jS = { class: "file-bar-size" }, HS = {
  key: 1,
  class: "file-bar-content"
}, qS = { class: "file-bar-info" }, KS = { class: "file-bar-name" }, JS = {
  key: 0,
  class: "preview-loading"
}, QS = { class: "import-actions" }, YS = {
  key: 2,
  class: "import-progress"
}, XS = { class: "creating-intro" }, ZS = {
  key: 0,
  class: "progress-warning"
}, e8 = {
  key: 1,
  class: "import-error"
}, t8 = { class: "error-message" }, s8 = {
  key: 3,
  class: "import-complete"
}, o8 = { class: "complete-message" }, n8 = { class: "complete-title" }, a8 = { class: "complete-details" }, l8 = { class: "complete-actions" }, i8 = /* @__PURE__ */ Ce({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var De, Ue, Ve, le;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), x = k(!1), I = k(null), T = k(""), M = k(null), N = k(!1), z = k(null), j = k(null), L = k({
      name: ((De = n.initialProgress) == null ? void 0 : De.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), K = k(null), ce = k({
      message: ((Ue = n.initialProgress) == null ? void 0 : Ue.message) ?? "Preparing import...",
      phase: ((Ve = n.initialProgress) == null ? void 0 : Ve.phase) ?? "",
      progress: ((le = n.initialProgress) == null ? void 0 : le.progress) ?? 0,
      error: null
    }), te = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Y = P(() => {
      if (!j.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const oe = j.value;
      return {
        sourceEnvironment: oe.comfyui_version ? `ComfyUI ${oe.comfyui_version}` : "Unknown",
        workflows: oe.workflows.map((Re) => Re.name),
        models: oe.models.map((Re) => ({
          filename: Re.filename,
          size: 0,
          type: Re.relative_path.split("/")[0] || "model"
        })),
        nodes: oe.nodes.map((Re) => Re.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), we = P(() => !x.value && !I.value && j.value && L.value.name.length > 0 && !K.value && (w.value || M.value));
    async function ee(oe) {
      w.value = oe, x.value = !0, I.value = null, j.value = null;
      try {
        const Re = await r(oe);
        j.value = Re;
      } catch (Re) {
        I.value = Re instanceof Error ? Re.message : "Failed to analyze file", console.error("Preview error:", Re);
      } finally {
        x.value = !1;
      }
    }
    function W() {
      w.value = null, M.value = null, T.value = "", z.value = null, _.value = !1, C.value = !1, $.value = "", j.value = null, I.value = null, L.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, K.value = null, l("source-cleared");
    }
    function Q() {
      Pe(), W(), g.value = !1, x.value = !1, N.value = !1, ce.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ke() {
      if (T.value.trim()) {
        N.value = !0, z.value = null;
        try {
          const oe = await c(T.value.trim());
          M.value = T.value.trim(), j.value = oe;
        } catch (oe) {
          z.value = oe instanceof Error ? oe.message : "Failed to analyze repository";
        } finally {
          N.value = !1;
        }
      }
    }
    function se(oe) {
      try {
        const Re = new URL(oe);
        return Re.host + Re.pathname.replace(/\.git$/, "");
      } catch {
        return oe;
      }
    }
    async function pe(oe) {
      if (!oe) {
        K.value = "Environment name is required";
        return;
      }
      try {
        const Re = await u(oe);
        K.value = Re.valid ? null : Re.error || "Invalid name";
      } catch {
        K.value = "Failed to validate name";
      }
    }
    async function O() {
      if (L.value.name && !(!w.value && !M.value)) {
        g.value = !0, _.value = !1, ce.value = { message: `Creating environment '${L.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let oe;
          if (w.value)
            oe = await d(
              w.value,
              L.value.name,
              L.value.modelStrategy,
              L.value.torchBackend
            );
          else if (M.value)
            oe = await v(
              M.value,
              L.value.name,
              L.value.modelStrategy,
              L.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? ue() : (C.value = !1, $.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          C.value = !1, $.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function ue() {
      if (p) return;
      const oe = async () => {
        try {
          const fe = await f();
          return ce.value = {
            message: fe.message,
            phase: fe.phase || "",
            progress: fe.progress ?? (fe.state === "importing" ? 50 : 0),
            error: fe.error || null
          }, fe.state === "complete" ? (Pe(), C.value = !0, $.value = `Environment '${fe.environment_name}' created successfully`, g.value = !1, _.value = !0, fe.environment_name && l("import-complete", fe.environment_name, L.value.switchAfterImport), !1) : fe.state === "error" ? (Pe(), C.value = !1, $.value = fe.error || fe.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (fe) {
          return console.error("Failed to poll import progress:", fe), !0;
        }
      };
      await oe() && (p = setInterval(async () => {
        await oe() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function _e(oe) {
      return oe < 1024 ? `${oe} B` : oe < 1024 * 1024 ? `${(oe / 1024).toFixed(1)} KB` : oe < 1024 * 1024 * 1024 ? `${(oe / (1024 * 1024)).toFixed(1)} MB` : `${(oe / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return at(async () => {
      try {
        const oe = await f();
        console.log("[ComfyGit ImportFlow] Import progress check:", oe.state, oe), oe.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", oe.environment_name), g.value = !0, L.value.name = oe.environment_name || L.value.name || "", ce.value = {
          progress: oe.progress ?? 0,
          message: oe.message || "Importing...",
          phase: oe.phase || "",
          error: null
        }, ue());
      } catch (oe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", oe);
      }
    }), t({
      handleReset: Q,
      isImporting: g,
      canImport: we
    }), (oe, Re) => {
      var fe;
      return a(), i("div", DS, [
        !w.value && !M.value && !g.value ? (a(), i("div", NS, [
          b(M3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          Re[7] || (Re[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", OS, [
            Re[5] || (Re[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", US, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Re[0] || (Re[0] = (ae) => T.value = ae),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: us(ke, ["enter"]),
                disabled: N.value
              }, null, 40, AS), [
                [en, T.value]
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || N.value,
                onClick: ke
              }, {
                default: h(() => [
                  S(m(N.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            z.value ? (a(), i("div", zS, m(z.value), 1)) : y("", !0),
            Re[6] || (Re[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !_.value ? (a(), i("div", FS, [
          s("div", VS, [
            w.value ? (a(), i("div", BS, [
              Re[8] || (Re[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", WS, [
                s("div", GS, m(w.value.name), 1),
                s("div", jS, m(_e(w.value.size)), 1)
              ])
            ])) : M.value ? (a(), i("div", HS, [
              Re[10] || (Re[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", qS, [
                s("div", KS, m(se(M.value)), 1),
                Re[9] || (Re[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: W
            }, {
              default: h(() => [...Re[11] || (Re[11] = [
                S(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          x.value ? (a(), i("div", JS, [...Re[12] || (Re[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (a(), R(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : j.value ? (a(), R(cS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          j.value ? (a(), R(LS, {
            key: 3,
            name: L.value.name,
            "onUpdate:name": Re[1] || (Re[1] = (ae) => L.value.name = ae),
            "model-strategy": L.value.modelStrategy,
            "onUpdate:modelStrategy": Re[2] || (Re[2] = (ae) => L.value.modelStrategy = ae),
            "torch-backend": L.value.torchBackend,
            "onUpdate:torchBackend": Re[3] || (Re[3] = (ae) => L.value.torchBackend = ae),
            "switch-after-import": L.value.switchAfterImport,
            "onUpdate:switchAfterImport": Re[4] || (Re[4] = (ae) => L.value.switchAfterImport = ae),
            "name-error": K.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          L.value.modelStrategy === "skip" && ((fe = j.value) != null && fe.models_needing_download) ? (a(), R(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", QS, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: W
            }, {
              default: h(() => [...Re[13] || (Re[13] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              size: "md",
              disabled: !we.value,
              onClick: O
            }, {
              default: h(() => [...Re[14] || (Re[14] = [
                S(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (a(), i("div", YS, [
          s("p", XS, [
            Re[15] || (Re[15] = S(" Importing environment ", -1)),
            s("strong", null, m(L.value.name), 1),
            Re[16] || (Re[16] = S("... ", -1))
          ]),
          b(Jn, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (a(), i("p", ZS, " This may take several minutes. Please wait... ")),
          ce.value.error ? (a(), i("div", e8, [
            s("p", t8, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", s8, [
          s("div", {
            class: Be(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", o8, [
            s("div", n8, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", a8, m($.value), 1)
          ]),
          s("div", l8, [
            b(Me, {
              variant: "primary",
              size: "md",
              onClick: Q
            }, {
              default: h(() => [...Re[17] || (Re[17] = [
                S(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), wc = /* @__PURE__ */ Ie(i8, [["__scopeId", "data-v-72cbc04e"]]), r8 = /* @__PURE__ */ Ce({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          b(wc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(At, {
              title: "IMPORT ENVIRONMENT",
              "show-info": !0,
              onInfoClick: c[0] || (c[0] = (u) => n.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(rs, {
        show: n.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => n.value = !1)
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
}), c8 = /* @__PURE__ */ Ie(r8, [["__scopeId", "data-v-41b1f298"]]), u8 = { class: "base-tabs" }, d8 = ["disabled", "onClick"], m8 = {
  key: 0,
  class: "base-tabs__badge"
}, f8 = /* @__PURE__ */ Ce({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || n("update:modelValue", r);
    }
    return (r, c) => (a(), i("div", u8, [
      (a(!0), i(B, null, he(e.tabs, (u) => (a(), i("button", {
        key: u.id,
        class: Be([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (d) => l(u.id)
      }, [
        S(m(u.label) + " ", 1),
        u.badge ? (a(), i("span", m8, m(u.badge), 1)) : y("", !0)
      ], 10, d8))), 128))
    ]));
  }
}), Pl = /* @__PURE__ */ Ie(f8, [["__scopeId", "data-v-ad5e6cad"]]), v8 = { class: "commit-list" }, p8 = /* @__PURE__ */ Ce({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", v8, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), _c = /* @__PURE__ */ Ie(p8, [["__scopeId", "data-v-8c5ee761"]]), g8 = { class: "commit-message" }, h8 = { class: "commit-date" }, y8 = /* @__PURE__ */ Ce({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    function l() {
      o.clickable && n("click");
    }
    return (r, c) => (a(), i("div", {
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(yc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", g8, m(e.message), 1),
      s("span", h8, m(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = gt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), kc = /* @__PURE__ */ Ie(y8, [["__scopeId", "data-v-dd7c621b"]]), w8 = /* @__PURE__ */ Ce({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = P(() => `HISTORY (${t.currentRef || "detached"})`);
    return (n, l) => (a(), R(Ut, null, Qt({
      content: h(() => [
        e.commits.length === 0 ? (a(), R(vs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(_c, { key: 1 }, {
          default: h(() => [
            (a(!0), i(B, null, he(e.commits, (r) => (a(), R(kc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => n.$emit("select", r)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => n.$emit("checkout", r),
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
          b(At, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), _8 = /* @__PURE__ */ Ie(w8, [["__scopeId", "data-v-fa4bf3a1"]]), k8 = { class: "branch-create-form" }, b8 = { class: "form-actions" }, $8 = /* @__PURE__ */ Ce({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, n = k(""), l = P(() => {
      const u = n.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", n.value.trim()), n.value = "");
    }
    function c() {
      n.value = "", o("cancel");
    }
    return (u, d) => (a(), i("div", k8, [
      b(yo, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", b8, [
        b(Me, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            S(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Me, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), C8 = /* @__PURE__ */ Ie($8, [["__scopeId", "data-v-7c500394"]]), x8 = { class: "branch-list-item__indicator" }, S8 = { class: "branch-list-item__name" }, I8 = {
  key: 0,
  class: "branch-list-item__actions"
}, E8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, T8 = /* @__PURE__ */ Ce({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), i("div", {
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, [
      s("span", x8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", S8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", I8, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", E8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), M8 = /* @__PURE__ */ Ie(T8, [["__scopeId", "data-v-c6581a24"]]), P8 = { class: "header-info" }, R8 = { class: "branch-name" }, L8 = {
  key: 0,
  class: "current-badge"
}, D8 = { class: "branch-meta" }, N8 = { key: 0 }, O8 = {
  key: 0,
  class: "meta-note"
}, U8 = {
  key: 0,
  class: "loading"
}, A8 = {
  key: 1,
  class: "empty-state"
}, z8 = /* @__PURE__ */ Ce({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), n = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const c = await o(t.branchName, 50);
        n.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (a(), R($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", P8, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", R8, m(e.branchName), 1),
          e.isCurrent ? (a(), i("span", L8, "CURRENT")) : y("", !0)
        ]),
        b(Ne, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: h(() => [...u[5] || (u[5] = [
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
        s("div", D8, [
          r.value ? (a(), i("span", N8, "Loading...")) : (a(), i(B, { key: 1 }, [
            s("span", null, m(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", O8, "(showing first " + m(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", U8, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", A8, " No commits found on this branch ")) : (a(), R(_c, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(B, null, he(n.value, (d) => (a(), R(kc, {
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
        e.isCurrent ? y("", !0) : (a(), R(Me, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            S(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (a(), R(Ne, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            S(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), F8 = /* @__PURE__ */ Ie(z8, [["__scopeId", "data-v-2e5437cc"]]), V8 = {
  key: 2,
  class: "branch-list"
}, B8 = /* @__PURE__ */ Ce({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, n = k(!1), l = k(null);
    function r(f) {
      o("create", f), c();
    }
    function c() {
      n.value = !1;
    }
    function u(f) {
      l.value = f;
    }
    function d(f) {
      l.value = null, o("delete", f);
    }
    function v(f) {
      l.value = null, o("switch", f);
    }
    return (f, p) => (a(), R(Ut, null, Qt({
      content: h(() => [
        n.value ? (a(), R(C8, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(vs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", V8, [
          (a(!0), i(B, null, he(e.branches, (w) => (a(), R(M8, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (a(), R(Me, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: gt((g) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  S(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (a(), R(F8, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: p[1] || (p[1] = (w) => l.value = null),
          onDelete: d,
          onSwitch: v
        }, null, 8, ["branch-name", "is-current"])) : y("", !0)
      ]),
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(At, { title: "BRANCHES" }, {
            actions: h(() => [
              n.value ? y("", !0) : (a(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => n.value = !0)
              }, {
                default: h(() => [...p[2] || (p[2] = [
                  S(" + Create Branch ", -1)
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
}), W8 = /* @__PURE__ */ Ie(B8, [["__scopeId", "data-v-a3de96cc"]]);
function bc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const G8 = { class: "remote-url-display" }, j8 = ["title"], H8 = ["title"], q8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, K8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J8 = /* @__PURE__ */ Ce({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), n = P(() => {
      if (t.url.length <= t.maxLength)
        return t.url;
      const r = t.url.slice(0, Math.floor(t.maxLength * 0.6)), c = t.url.slice(-Math.floor(t.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(t.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (a(), i("div", G8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, j8),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", K8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", q8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, H8)
    ]));
  }
}), Q8 = /* @__PURE__ */ Ie(J8, [["__scopeId", "data-v-7768a58d"]]), Y8 = { class: "remote-title" }, X8 = {
  key: 0,
  class: "default-badge"
}, Z8 = {
  key: 1,
  class: "sync-badge"
}, e5 = {
  key: 0,
  class: "ahead"
}, t5 = {
  key: 1,
  class: "behind"
}, s5 = {
  key: 1,
  class: "synced"
}, o5 = ["href"], n5 = {
  key: 1,
  class: "remote-url-text"
}, a5 = /* @__PURE__ */ Ce({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = P(() => t.fetchingRemote === t.remote.name), n = P(() => t.remote.is_default), l = P(() => t.syncStatus && t.syncStatus.behind > 0), r = P(() => t.syncStatus && t.syncStatus.ahead > 0), c = P(() => t.remote.push_url !== t.remote.fetch_url), u = P(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = P(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (a(), R(Ft, {
      status: n.value ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        S(m(n.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", Y8, [
          s("span", null, m(e.remote.name), 1),
          n.value ? (a(), i("span", X8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", Z8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", e5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", t5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", s5, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (a(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = gt(() => {
          }, ["stop"]))
        }, m(d.value), 9, o5)) : (a(), i("span", n5, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Me, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            S(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        b(Me, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[2] || (f[2] = (p) => v.$emit("pull", e.remote.name))
        }, {
          default: h(() => [
            S(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: f[3] || (f[3] = (p) => v.$emit("push", e.remote.name))
        }, {
          default: h(() => [
            S(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            S(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        n.value ? y("", !0) : (a(), R(Me, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
            S(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (a(), R(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(Q8, {
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
}), l5 = /* @__PURE__ */ Ie(a5, [["__scopeId", "data-v-8310f3a8"]]), i5 = ["for"], r5 = {
  key: 0,
  class: "base-form-field-required"
}, c5 = { class: "base-form-field-input" }, u5 = {
  key: 1,
  class: "base-form-field-error"
}, d5 = {
  key: 2,
  class: "base-form-field-hint"
}, m5 = /* @__PURE__ */ Ce({
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
    const t = e, o = P(() => t.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (n, l) => (a(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (a(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        S(m(e.label) + " ", 1),
        e.required ? (a(), i("span", r5, "*")) : y("", !0)
      ], 8, i5)) : y("", !0),
      s("div", c5, [
        ot(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", u5, m(e.error), 1)) : e.hint ? (a(), i("span", d5, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ Ie(m5, [["__scopeId", "data-v-9a1cf296"]]), f5 = { class: "remote-form" }, v5 = { class: "form-header" }, p5 = { class: "form-body" }, g5 = {
  key: 0,
  class: "form-error"
}, h5 = { class: "form-actions" }, y5 = /* @__PURE__ */ Ce({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    pt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = P(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function d() {
      if (!(!u.value || r.value)) {
        c.value = null, r.value = !0;
        try {
          n("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (a(), i("div", f5, [
      s("div", v5, [
        b(ns, null, {
          default: h(() => [
            S(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", p5, [
        b(Nt, {
          label: "Remote Name",
          required: ""
        }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.name,
              "onUpdate:modelValue": f[0] || (f[0] = (p) => l.value.name = p),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        b(Nt, {
          label: "Fetch URL",
          required: ""
        }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value.fetchUrl = p),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        b(Nt, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (a(), i("div", g5, m(c.value), 1)) : y("", !0)
      ]),
      s("div", h5, [
        b(Me, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            S(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Me, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), w5 = /* @__PURE__ */ Ie(y5, [["__scopeId", "data-v-56021b18"]]), _5 = { class: "conflict-summary-box" }, k5 = { class: "summary-header" }, b5 = { class: "summary-text" }, $5 = { key: 0 }, C5 = {
  key: 1,
  class: "all-resolved"
}, x5 = { class: "summary-progress" }, S5 = { class: "progress-bar" }, I5 = { class: "progress-text" }, E5 = /* @__PURE__ */ Ce({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const t = e, o = P(
      () => t.conflictCount > 0 ? t.resolvedCount / t.conflictCount * 100 : 0
    );
    return (n, l) => (a(), i("div", _5, [
      s("div", k5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", b5, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", $5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), i("p", C5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", x5, [
        s("div", S5, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", I5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), T5 = /* @__PURE__ */ Ie(E5, [["__scopeId", "data-v-4e9e6cc9"]]), M5 = { class: "modal-header" }, P5 = { class: "modal-title" }, R5 = { class: "modal-body" }, L5 = {
  key: 0,
  class: "error-box"
}, D5 = {
  key: 0,
  class: "error-hint"
}, N5 = {
  key: 1,
  class: "loading-state"
}, O5 = { class: "commit-summary" }, U5 = {
  key: 0,
  class: "commits-section"
}, A5 = { class: "commit-list" }, z5 = { class: "commit-hash" }, F5 = { class: "commit-message" }, V5 = { class: "commit-date" }, B5 = {
  key: 1,
  class: "changes-section"
}, W5 = {
  key: 0,
  class: "change-group",
  open: ""
}, G5 = { class: "change-count" }, j5 = { class: "change-list" }, H5 = {
  key: 0,
  class: "conflict-badge"
}, q5 = {
  key: 1,
  class: "change-group"
}, K5 = { class: "change-count" }, J5 = { class: "change-list" }, Q5 = {
  key: 2,
  class: "change-group"
}, Y5 = { class: "change-count" }, X5 = { class: "change-list" }, Z5 = {
  key: 3,
  class: "strategy-section"
}, e4 = { class: "radio-group" }, t4 = { class: "radio-option" }, s4 = { class: "radio-option" }, o4 = { class: "radio-option" }, n4 = {
  key: 4,
  class: "up-to-date"
}, a4 = { class: "modal-actions" }, Ii = "comfygit.pullModelStrategy", l4 = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(localStorage.getItem(Ii) || "skip");
    pt(l, ($) => {
      localStorage.setItem(Ii, $);
    });
    const r = P(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = P(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = P(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = P(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), v = P(() => o.preview && bc(o.preview) ? o.preview : null), f = P(() => {
      var $;
      return (($ = v.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), p = P(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), w = P(
      () => f.value > 0 && p.value === f.value
    ), g = P(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _($) {
      if (!v.value) return !1;
      const x = $.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((I) => I.name === x);
    }
    function C($) {
      const x = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      n("pull", { modelStrategy: l.value, force: $, resolutions: x });
    }
    return ($, x) => {
      var I, T;
      return a(), R(Kt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: x[11] || (x[11] = (M) => $.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: x[10] || (x[10] = gt(() => {
            }, ["stop"]))
          }, [
            s("div", M5, [
              s("h3", P5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            s("div", R5, [
              e.error ? (a(), i("div", L5, [
                x[13] || (x[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  x[12] || (x[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (a(), i("p", D5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", N5, [...x[14] || (x[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                S(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (a(), i(B, { key: 2 }, [
                x[15] || (x[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                x[16] || (x[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (a(), i(B, { key: 3 }, [
                s("div", O5, [
                  x[17] || (x[17] = s("span", { class: "icon" }, "📥", -1)),
                  S(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", U5, [
                  x[18] || (x[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", A5, [
                    (a(!0), i(B, null, he(e.preview.commits, (M) => (a(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", z5, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", F5, m(M.message), 1),
                      s("span", V5, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", B5, [
                  x[22] || (x[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", W5, [
                    s("summary", null, [
                      x[19] || (x[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", G5, m(c.value) + " changes", 1)
                    ]),
                    s("div", j5, [
                      (a(!0), i(B, null, he(e.preview.changes.workflows.added, (M) => (a(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (a(!0), i(B, null, he(e.preview.changes.workflows.modified, (M) => (a(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        S(" ~ " + m(M) + " ", 1),
                        _(M) ? (a(), i("span", H5, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(B, null, he(e.preview.changes.workflows.deleted, (M) => (a(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), i("details", q5, [
                    s("summary", null, [
                      x[20] || (x[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", K5, m(u.value) + " to install", 1)
                    ]),
                    s("div", J5, [
                      (a(!0), i(B, null, he(e.preview.changes.nodes.to_install, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", Q5, [
                    s("summary", null, [
                      x[21] || (x[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", Y5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", X5, [
                      (a(!0), i(B, null, he(e.preview.changes.models.referenced, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (a(), R(T5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", Z5, [
                  x[27] || (x[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", e4, [
                    s("label", t4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      x[23] || (x[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", s4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      x[24] || (x[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", o4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Dn, l.value]
                      ]),
                      x[25] || (x[25] = s("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", n4, [
                  x[29] || (x[29] = s("span", { class: "icon" }, "✓", -1)),
                  S(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", a4, [
              b(Me, {
                variant: "secondary",
                onClick: x[4] || (x[4] = (M) => $.$emit("close"))
              }, {
                default: h(() => [...x[30] || (x[30] = [
                  S(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (a(), i(B, { key: 0 }, [
                b(Me, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: x[5] || (x[5] = (M) => C(!1))
                }, {
                  default: h(() => [...x[31] || (x[31] = [
                    S(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: x[6] || (x[6] = (M) => C(!0))
                }, {
                  default: h(() => [...x[32] || (x[32] = [
                    S(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (a(), R(Me, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: x[7] || (x[7] = (M) => C(!0))
              }, {
                default: h(() => [...x[33] || (x[33] = [
                  S(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (a(), i(B, { key: 2 }, [
                v.value && !w.value ? (a(), R(Me, {
                  key: 0,
                  variant: "primary",
                  onClick: x[8] || (x[8] = (M) => n("openConflictResolution"))
                }, {
                  default: h(() => [
                    S(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (a(), R(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: x[9] || (x[9] = (M) => C(!1))
                }, {
                  default: h(() => [...x[34] || (x[34] = [
                    S(" Pull Changes ", -1)
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
}), i4 = /* @__PURE__ */ Ie(l4, [["__scopeId", "data-v-1d633bba"]]), r4 = { class: "modal-header" }, c4 = { class: "modal-title" }, u4 = { class: "modal-body" }, d4 = {
  key: 0,
  class: "error-box"
}, m4 = {
  key: 1,
  class: "loading-state"
}, f4 = {
  key: 2,
  class: "warning-box"
}, v4 = {
  key: 1,
  class: "commits-section"
}, p4 = { class: "commit-list" }, g4 = { class: "commit-hash" }, h4 = { class: "commit-message" }, y4 = { class: "commit-date" }, w4 = { class: "force-option" }, _4 = { class: "checkbox-option" }, k4 = { class: "commit-summary" }, b4 = { key: 0 }, $4 = { key: 1 }, C4 = {
  key: 0,
  class: "info-box"
}, x4 = {
  key: 2,
  class: "commits-section"
}, S4 = { class: "commit-list" }, I4 = { class: "commit-hash" }, E4 = { class: "commit-message" }, T4 = { class: "commit-date" }, M4 = {
  key: 3,
  class: "up-to-date"
}, P4 = { class: "modal-actions" }, R4 = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(!1), r = k(!1), c = P(() => {
      var w;
      return ((w = o.preview) == null ? void 0 : w.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), u = P(
      () => c.value.models_without_sources.length
    ), d = P(
      () => c.value.nodes_without_provenance.length
    ), v = P(
      () => u.value + d.value
    ), f = P(() => v.value > 0);
    function p(w) {
      n("push", { force: w });
    }
    return (w, g) => {
      var _, C, $, x;
      return a(), i(B, null, [
        (a(), R(Kt, { to: "body" }, [
          e.show ? (a(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = gt(() => {
              }, ["stop"]))
            }, [
              s("div", r4, [
                s("h3", c4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", u4, [
                e.error ? (a(), i("div", d4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", m4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  S(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", f4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (a(), i(B, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (a(), R(sl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", v4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", p4, [
                      (a(!0), i(B, null, he(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", g4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", h4, m(I.message), 1),
                        s("span", y4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", w4, [
                    s("label", _4, [
                      Tt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [qn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (a(), i(B, { key: 4 }, [
                  s("div", k4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", b4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", $4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", C4, [...g[21] || (g[21] = [
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
                  f.value ? (a(), R(sl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", x4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", S4, [
                      (a(!0), i(B, null, he(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", I4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", E4, m(I.message), 1),
                        s("span", T4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", M4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    S(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", P4, [
                b(Me, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    S(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                ($ = e.preview) != null && $.remote_has_new_commits ? (a(), i(B, { key: 0 }, [
                  b(Me, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      S(" Pull First ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "destructive",
                    disabled: !l.value,
                    loading: e.pushing,
                    onClick: g[6] || (g[6] = (I) => p(!0))
                  }, {
                    default: h(() => [
                      S(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (a(), R(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    S(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((x = e.preview) != null && x.warnings) ? (a(), R(Sl, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), L4 = /* @__PURE__ */ Ie(R4, [["__scopeId", "data-v-7748bf33"]]), D4 = { class: "resolution-choice-group" }, N4 = ["disabled"], O4 = ["disabled"], U4 = /* @__PURE__ */ Ce({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", D4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, N4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, O4)
    ]));
  }
}), A4 = /* @__PURE__ */ Ie(U4, [["__scopeId", "data-v-985715ed"]]), z4 = { class: "conflict-header" }, F4 = { class: "conflict-info" }, V4 = { class: "workflow-name" }, B4 = { class: "conflict-description" }, W4 = {
  key: 0,
  class: "resolved-badge"
}, G4 = { class: "resolved-text" }, j4 = { class: "conflict-hashes" }, H4 = { class: "hash-item" }, q4 = { class: "hash-item" }, K4 = { class: "conflict-actions" }, J4 = /* @__PURE__ */ Ce({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    pt(() => o.resolution, (d) => {
      l.value = d;
    }), pt(l, (d) => {
      d && n("resolve", d);
    });
    const r = P(() => l.value !== null), c = P(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = P(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (d, v) => {
      var f, p;
      return a(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", z4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", F4, [
            s("code", V4, m(e.conflict.name) + ".json", 1),
            s("div", B4, m(c.value), 1)
          ]),
          r.value ? (a(), i("div", W4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", G4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", j4, [
          s("span", H4, [
            v[3] || (v[3] = S("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", q4, [
            v[4] || (v[4] = S("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", K4, [
          b(A4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Q4 = /* @__PURE__ */ Ie(J4, [["__scopeId", "data-v-506d3bbf"]]), Y4 = { class: "resolution-content" }, X4 = {
  key: 0,
  class: "error-box"
}, Z4 = { class: "resolution-header" }, eI = { class: "header-stats" }, tI = { class: "stat" }, sI = { class: "stat-value" }, oI = { class: "stat resolved" }, nI = { class: "stat-value" }, aI = {
  key: 0,
  class: "stat pending"
}, lI = { class: "stat-value" }, iI = { class: "conflicts-list" }, rI = {
  key: 1,
  class: "all-resolved-message"
}, cI = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = P(() => o.resolutions.size), r = P(() => o.workflowConflicts.length - l.value), c = P(() => l.value === o.workflowConflicts.length), u = P(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function v(w, g) {
      n("resolve", w, g);
    }
    function f() {
      n("close");
    }
    function p() {
      n("apply");
    }
    return (w, g) => (a(), R($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", Y4, [
          e.error ? (a(), i("div", X4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", Z4, [
            s("div", eI, [
              s("div", tI, [
                s("span", sI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", oI, [
                s("span", nI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", aI, [
                s("span", lI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", iI, [
            (a(!0), i(B, null, he(e.workflowConflicts, (_) => (a(), R(Q4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => v(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", rI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ne, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            S(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), uI = /* @__PURE__ */ Ie(cI, [["__scopeId", "data-v-c58d150d"]]), dI = { class: "node-conflict-item" }, mI = { class: "node-header" }, fI = { class: "node-name" }, vI = { class: "node-id" }, pI = { class: "version-comparison" }, gI = { class: "version yours" }, hI = { class: "version theirs" }, yI = { class: "chosen-version" }, wI = { class: "chosen" }, _I = { class: "chosen-reason" }, kI = { class: "affected-workflows" }, bI = { class: "wf-source" }, $I = { class: "wf-version" }, CI = /* @__PURE__ */ Ce({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", dI, [
      s("div", mI, [
        s("code", fI, m(e.conflict.node_name), 1),
        s("span", vI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", pI, [
        s("div", gI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", hI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", yI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", wI, m(e.conflict.chosen_version), 1),
        s("span", _I, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", kI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(B, null, he(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, m(n.name), 1),
            s("span", bI, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", $I, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), xI = /* @__PURE__ */ Ie(CI, [["__scopeId", "data-v-8b626725"]]), SI = { class: "validation-content" }, II = {
  key: 0,
  class: "compatible-message"
}, EI = { class: "conflicts-list" }, TI = {
  key: 2,
  class: "warnings-section"
}, MI = /* @__PURE__ */ Ce({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = P(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (a(), R($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => n("cancel"))
    }, {
      body: h(() => [
        s("div", SI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", II, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (a(), i(B, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", EI, [
              (a(!0), i(B, null, he(e.validation.node_conflicts, (u) => (a(), R(xI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", TI, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (a(!0), i(B, null, he(e.validation.warnings, (u, d) => (a(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => n("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(Ne, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => n("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            S(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => n("proceed"))
        }, {
          default: h(() => [
            S(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), PI = /* @__PURE__ */ Ie(MI, [["__scopeId", "data-v-fefd26ed"]]), RI = {
  key: 0,
  class: "embedded-toolbar"
}, LI = { class: "embedded-toolbar-search" }, DI = /* @__PURE__ */ Ce({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: n,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: d,
      getPullPreview: v,
      pullFromRemote: f,
      getPushPreview: p,
      pushToRemote: w,
      validateMerge: g
    } = ct(), _ = k([]), C = k({}), $ = k(!1), x = k(null), I = k(""), T = k(!1), M = k(null), N = k(!1), z = k("add"), j = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = P(() => {
      if (!I.value.trim()) return _.value;
      const Fe = I.value.toLowerCase();
      return _.value.filter(
        (Oe) => Oe.name.toLowerCase().includes(Fe) || Oe.fetch_url.toLowerCase().includes(Fe) || Oe.push_url.toLowerCase().includes(Fe)
      );
    });
    async function K() {
      $.value = !0, x.value = null;
      try {
        const Fe = await n();
        _.value = Fe.remotes, await Promise.all(
          Fe.remotes.map(async (Oe) => {
            const G = await d(Oe.name);
            G && (C.value[Oe.name] = G);
          })
        );
      } catch (Fe) {
        x.value = Fe instanceof Error ? Fe.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function ce() {
      z.value = "add", j.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function te(Fe) {
      const Oe = _.value.find((G) => G.name === Fe);
      Oe && (z.value = "edit", j.value = {
        name: Oe.name,
        fetchUrl: Oe.fetch_url,
        pushUrl: Oe.push_url
      }, N.value = !0);
    }
    async function Y(Fe) {
      try {
        z.value === "add" ? await l(Fe.name, Fe.fetchUrl) : await c(Fe.name, Fe.fetchUrl, Fe.pushUrl || void 0), N.value = !1, await K();
      } catch (Oe) {
        x.value = Oe instanceof Error ? Oe.message : "Operation failed";
      }
    }
    function we() {
      N.value = !1, j.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ee(Fe) {
      M.value = Fe;
      try {
        await u(Fe);
        const Oe = await d(Fe);
        Oe && (C.value[Fe] = Oe), o("toast", `✓ Fetched from ${Fe}`, "success");
      } catch (Oe) {
        o("toast", Oe instanceof Error ? Oe.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function W(Fe) {
      if (confirm(`Remove remote "${Fe}"?`))
        try {
          await r(Fe), await K();
        } catch (Oe) {
          x.value = Oe instanceof Error ? Oe.message : "Failed to remove remote";
        }
    }
    function Q() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ke = k("idle"), se = P(() => ke.value === "pull_preview"), pe = P(
      () => ke.value === "resolving" || ke.value === "validating"
    ), O = P(
      () => ke.value === "validation_review" || ke.value === "executing"
    ), ue = k(!1), Pe = k(null), _e = k(!1), De = k(null), Ue = k(null), Ve = k(!1), le = k(null), oe = k(null), Re = k(/* @__PURE__ */ new Map()), fe = k(null), ae = k(null), E = P(() => le.value && bc(le.value) ? le.value : null);
    async function U(Fe) {
      Ue.value = Fe, ke.value = "pull_preview", Ve.value = !0, le.value = null, oe.value = null;
      try {
        le.value = await v(Fe);
      } catch (Oe) {
        oe.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        Ve.value = !1;
      }
    }
    function ie() {
      ke.value = "idle", le.value = null, oe.value = null, Ue.value = null;
    }
    async function Ee(Fe) {
      if (!Ue.value) return;
      ke.value = "executing", oe.value = null;
      const Oe = Ue.value;
      try {
        const G = await f(Oe, Fe);
        if (G.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await K();
      } catch (G) {
        oe.value = G instanceof Error ? G.message : "Pull failed", ke.value = "pull_preview";
      }
    }
    function xe() {
      E.value && (ke.value = "resolving", ae.value = null);
    }
    function Se(Fe, Oe) {
      Re.value.set(Fe, { name: Fe, resolution: Oe });
    }
    function X() {
      ke.value = "pull_preview";
    }
    async function H() {
      ke.value = "validating", ae.value = null;
      try {
        const Fe = Array.from(Re.value.values());
        fe.value = await g(Ue.value, Fe), ke.value = "validation_review";
      } catch (Fe) {
        ae.value = Fe instanceof Error ? Fe.message : "Validation failed", ke.value = "resolving";
      }
    }
    async function ve() {
      ke.value = "executing";
      const Fe = Ue.value;
      try {
        const Oe = Array.from(Re.value.values()), G = await f(Fe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (G.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Fe}`, "success"), await K();
      } catch (Oe) {
        oe.value = Oe instanceof Error ? Oe.message : "Pull failed", ke.value = "validation_review";
      }
    }
    function be() {
      ke.value = "resolving";
    }
    function Ke() {
      We(), ke.value = "idle";
    }
    function We() {
      Re.value.clear(), fe.value = null, ae.value = null, oe.value = null, le.value = null, Ue.value = null;
    }
    async function ge(Fe) {
      Ue.value = Fe, ue.value = !0, Ve.value = !0, Pe.value = null, De.value = null;
      try {
        Pe.value = await p(Fe);
      } catch (Oe) {
        De.value = Oe instanceof Error ? Oe.message : "Failed to load push preview";
      } finally {
        Ve.value = !1;
      }
    }
    async function J() {
      if (Ue.value) {
        Ve.value = !0, De.value = null;
        try {
          Pe.value = await p(Ue.value);
        } catch (Fe) {
          De.value = Fe instanceof Error ? Fe.message : "Failed to refresh push preview";
        } finally {
          Ve.value = !1;
        }
      }
    }
    function qe() {
      ue.value = !1, Pe.value = null, De.value = null, Ue.value = null;
    }
    async function Te(Fe) {
      var G;
      if (!Ue.value) return;
      _e.value = !0;
      const Oe = Ue.value;
      De.value = null;
      try {
        await w(Oe, Fe), qe(), o("toast", `✓ Pushed to ${Oe}`, "success"), await K();
      } catch (de) {
        const ye = de instanceof Error ? de.message : "Push failed";
        De.value = ye, de instanceof ec && de.status === 409 && ((G = de.data) != null && G.needs_force) && Pe.value ? Pe.value = {
          ...Pe.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", ye, "error");
      } finally {
        _e.value = !1;
      }
    }
    function Xe() {
      const Fe = Ue.value;
      qe(), Fe && U(Fe);
    }
    return at(K), (Fe, Oe) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          $.value ? (a(), R($s, {
            key: 0,
            message: "Loading remotes..."
          })) : x.value ? (a(), R(Cs, {
            key: 1,
            message: x.value,
            retry: !0,
            onRetry: K
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            e.embedded && !N.value ? (a(), i("div", RI, [
              s("div", LI, [
                b(ro, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Oe[2] || (Oe[2] = (G) => I.value = G),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...Oe[5] || (Oe[5] = [
                  S(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            N.value ? (a(), R(w5, {
              key: 1,
              mode: z.value,
              "remote-name": j.value.name,
              "fetch-url": j.value.fetchUrl,
              "push-url": j.value.pushUrl,
              onSubmit: Y,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            L.value.length && !N.value ? (a(), R(It, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(L.value, (G) => (a(), R(l5, {
                  key: G.name,
                  remote: G,
                  "sync-status": C.value[G.name],
                  "fetching-remote": M.value,
                  onFetch: ee,
                  onEdit: te,
                  onRemove: W,
                  onPull: U,
                  onPush: ge
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !N.value ? (a(), R(vs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...Oe[6] || (Oe[6] = [
                    S(" Add Your First Remote ", -1)
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
            b(At, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Oe[0] || (Oe[0] = (G) => T.value = !0)
            }, {
              actions: h(() => [
                N.value ? y("", !0) : (a(), R(Me, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ce
                }, {
                  default: h(() => [...Oe[4] || (Oe[4] = [
                    S(" + Add Remote ", -1)
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
            N.value ? y("", !0) : (a(), R(ro, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Oe[1] || (Oe[1] = (G) => I.value = G),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(rs, {
        show: T.value,
        title: "About Git Remotes",
        onClose: Oe[3] || (Oe[3] = (G) => T.value = !1)
      }, {
        content: h(() => [...Oe[7] || (Oe[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            S(" The "),
            s("strong", null, '"origin"'),
            S(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "link",
            onClick: Q
          }, {
            default: h(() => [...Oe[8] || (Oe[8] = [
              S(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(i4, {
        show: se.value,
        "remote-name": Ue.value || "",
        preview: le.value,
        loading: Ve.value,
        pulling: ke.value === "executing",
        error: oe.value,
        "conflict-resolutions": Re.value,
        onClose: ie,
        onPull: Ee,
        onOpenConflictResolution: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(L4, {
        show: ue.value,
        "remote-name": Ue.value || "",
        preview: Pe.value,
        loading: Ve.value,
        pushing: _e.value,
        error: De.value,
        onClose: qe,
        onPush: Te,
        onPullFirst: Xe,
        onRevalidate: J
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      pe.value && E.value ? (a(), R(uI, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Re.value,
        "operation-type": "pull",
        validating: ke.value === "validating",
        error: ae.value,
        onClose: X,
        onResolve: Se,
        onApply: H
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      O.value && fe.value ? (a(), R(PI, {
        key: 1,
        validation: fe.value,
        "operation-type": "pull",
        executing: ke.value === "executing",
        onProceed: ve,
        onGoBack: be,
        onCancel: Ke
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), NI = /* @__PURE__ */ Ie(DI, [["__scopeId", "data-v-a6651a66"]]), OI = /* @__PURE__ */ Ce({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return pt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), R(Ut, null, {
      header: h(() => [
        b(At, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Pl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (a(), R(_8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), R(W8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), R(NI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), UI = { class: "text-viewer-wrapper" }, AI = ["disabled", "title"], zI = { class: "text-content" }, FI = /* @__PURE__ */ Ce({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await El(t.content), n.value = "copied", setTimeout(() => {
            n.value = "idle";
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
    return (u, d) => (a(), i("div", UI, [
      s("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy text"
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, AI),
        s("pre", zI, m(e.content), 1)
      ], 544)
    ]));
  }
}), VI = /* @__PURE__ */ Ie(FI, [["__scopeId", "data-v-85a537ba"]]), BI = {
  key: 1,
  class: "manifest-viewer-shell"
}, WI = { class: "manifest-path" }, GI = /* @__PURE__ */ Ce({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = k(!1), n = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, n.value = null;
      try {
        r.value = await t();
      } catch (u) {
        n.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return at(c), (u, d) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          o.value ? (a(), R($s, {
            key: 0,
            message: "Loading manifest..."
          })) : n.value ? (a(), R(Cs, {
            key: 1,
            message: n.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            !r.value.exists || !r.value.content ? (a(), R(vs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", BI, [
              b(VI, {
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
            b(At, {
              title: "MANIFEST (PYPROJECT.TOML)",
              "show-info": !0,
              onInfoClick: d[0] || (d[0] = (v) => l.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: c,
                  disabled: o.value
                }, {
                  default: h(() => [
                    S(m(o.value ? "Loading..." : "Refresh"), 1)
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
      b(rs, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            S(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            S(" from the current environment's "),
            s("strong", null, ".cec"),
            S(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", WI, [
            s("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: d[1] || (d[1] = (v) => l.value = !1)
          }, {
            default: h(() => [...d[7] || (d[7] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), jI = /* @__PURE__ */ Ie(GI, [["__scopeId", "data-v-814a8fdd"]]), HI = { class: "log-viewer-wrapper" }, qI = ["disabled", "title"], KI = /* @__PURE__ */ Ce({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle"), l = P(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Pt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), pt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await El(v), n.value = "copied", setTimeout(() => {
          n.value = "idle";
        }, 2e3);
      } catch (f) {
        console.error("Failed to copy logs:", f);
      }
    }
    function u(v) {
      (v.ctrlKey || v.metaKey) && v.key === "c" && v.stopPropagation();
    }
    function d(v) {
      v.stopPropagation();
    }
    return (v, f) => (a(), i("div", HI, [
      s("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        s("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: n.value !== "idle",
          title: n.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, qI),
        (a(!0), i(B, null, he(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), $c = /* @__PURE__ */ Ie(KI, [["__scopeId", "data-v-5aaf1b88"]]), JI = /* @__PURE__ */ Ce({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const C = await o();
          v.value = C.environment || "production";
        } catch {
        }
      } catch (C) {
        u.value = C instanceof Error ? C.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const C = await n();
        C.exists && (f.value = C.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (C) {
          console.error("Failed to open log file:", C);
        } finally {
          p.value = !1;
        }
      }
    }
    return at(() => {
      w(), g();
    }), (C, $) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          c.value ? (a(), R($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (a(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            r.value.length === 0 ? (a(), R(vs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R($c, {
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
            b(At, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: $[0] || ($[0] = (x) => d.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: _,
                  disabled: !f.value || p.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    S(m(p.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: w,
                  disabled: c.value
                }, {
                  default: h(() => [
                    S(m(c.value ? "Loading..." : "Refresh"), 1)
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
      b(rs, {
        show: d.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (x) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            $[3] || ($[3] = S(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
            $[4] || ($[4] = S(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            S(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            S(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            S(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            S(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: $[1] || ($[1] = (x) => d.value = !1)
          }, {
            default: h(() => [...$[6] || ($[6] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ Ce({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: n,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), C = P(() => u.value === "workspace" ? w.value : g.value);
    async function $() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await n(void 0, 500);
      } catch (T) {
        f.value = T instanceof Error ? T.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function x() {
      try {
        const [T, M] = await Promise.all([
          o(),
          l()
        ]);
        T.exists && (w.value = T.path), M.exists && (g.value = M.path);
      } catch {
      }
    }
    async function I() {
      if (C.value) {
        _.value = !0;
        try {
          await r(C.value);
        } catch (T) {
          console.error("Failed to open log file:", T);
        } finally {
          _.value = !1;
        }
      }
    }
    return pt(u, () => {
      $();
    }), pt(() => c.initialTab, (T) => {
      T && (u.value = T);
    }), at(() => {
      $(), x();
    }), (T, M) => (a(), i(B, null, [
      b(Ut, null, Qt({
        content: h(() => [
          v.value ? (a(), R($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (a(), R(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: $
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            d.value.length === 0 ? (a(), R(vs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), R($c, {
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
            b(At, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: M[0] || (M[0] = (N) => p.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !C.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    S(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: $,
                  disabled: v.value
                }, {
                  default: h(() => [
                    S(m(v.value ? "Loading..." : "Refresh"), 1)
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
            b(Pl, {
              modelValue: u.value,
              "onUpdate:modelValue": M[1] || (M[1] = (N) => u.value = N),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(rs, {
        show: p.value,
        title: "About Logs",
        onClose: M[3] || (M[3] = (N) => p.value = !1)
      }, {
        content: h(() => [...M[4] || (M[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            S(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            S(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            S(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            S(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            S(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            S(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: M[2] || (M[2] = (N) => p.value = !1)
          }, {
            default: h(() => [...M[5] || (M[5] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), QI = /* @__PURE__ */ Ce({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], n = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), c = P(() => n.value === "manifest" ? "MANIFEST" : "LOGGING"), u = P(() => n.value === "manifest" ? "About Manifest" : "About Logging");
    return pt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), pt(l, (d) => {
      n.value !== "manifest" && (n.value = d);
    }), (d, v) => (a(), i(B, null, [
      b(Ut, null, Qt({
        header: h(() => [
          b(At, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          n.value === "manifest" ? (a(), R(jI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), R(JI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), R(Ei, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), R(Ei, {
            key: 3,
            embedded: "",
            "initial-tab": "orchestrator"
          }))
        ]),
        _: 2
      }, [
        n.value !== "manifest" ? {
          name: "search",
          fn: h(() => [
            b(Pl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(rs, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          n.value === "manifest" ? (a(), i(B, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              S(" shows the live "),
              s("strong", null, "pyproject.toml"),
              S(" from the current environment's "),
              s("strong", null, ".cec"),
              S(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (a(), i(B, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              S(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              S(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              S(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              S(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
            ], -1))
          ], 64))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            size: "sm",
            onClick: v[2] || (v[2] = (f) => r.value = !1)
          }, {
            default: h(() => [...v[11] || (v[11] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), YI = { class: "header-info" }, XI = { class: "commit-hash" }, ZI = {
  key: 0,
  class: "commit-refs"
}, e6 = { class: "commit-message" }, t6 = { class: "commit-date" }, s6 = {
  key: 0,
  class: "loading"
}, o6 = {
  key: 1,
  class: "changes-section"
}, n6 = { class: "stats-row" }, a6 = { class: "stat" }, l6 = { class: "stat insertions" }, i6 = { class: "stat deletions" }, r6 = {
  key: 0,
  class: "change-group"
}, c6 = {
  key: 1,
  class: "change-group"
}, u6 = {
  key: 0,
  class: "version"
}, d6 = {
  key: 2,
  class: "change-group"
}, m6 = { class: "change-item" }, f6 = /* @__PURE__ */ Ce({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), n = k(null), l = k(!0), r = P(() => {
      if (!n.value) return !1;
      const u = n.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = P(() => {
      if (!n.value) return !1;
      const u = n.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return at(async () => {
      try {
        n.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (a(), R($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", YI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", XI, m(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", ZI, [
              (a(!0), i(B, null, he(n.value.refs, (g) => (a(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(Ne, {
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
        var v, f;
        return [
          s("div", e6, m(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", t6, m(((f = n.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", s6, "Loading details...")) : n.value ? (a(), i("div", o6, [
            s("div", n6, [
              s("span", a6, m(n.value.stats.files_changed) + " files", 1),
              s("span", l6, "+" + m(n.value.stats.insertions), 1),
              s("span", i6, "-" + m(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", r6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  S("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(B, null, he(n.value.changes.workflows.added, (p) => (a(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(B, null, he(n.value.changes.workflows.modified, (p) => (a(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (a(!0), i(B, null, he(n.value.changes.workflows.deleted, (p) => (a(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (a(), i("div", c6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  S("NODES", -1)
                ])]),
                _: 1
              }),
              (a(!0), i(B, null, he(n.value.changes.nodes.added, (p) => (a(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (a(), i("span", u6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(B, null, he(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", d6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  S("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", m6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(n.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            S(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            S(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), v6 = /* @__PURE__ */ Ie(f6, [["__scopeId", "data-v-d256ff6d"]]), p6 = { class: "popover-header" }, g6 = { class: "popover-body" }, h6 = {
  key: 0,
  class: "changes-summary"
}, y6 = {
  key: 0,
  class: "change-item"
}, w6 = {
  key: 1,
  class: "change-item"
}, _6 = {
  key: 2,
  class: "change-item"
}, k6 = {
  key: 3,
  class: "change-item"
}, b6 = {
  key: 4,
  class: "change-item"
}, $6 = {
  key: 5,
  class: "change-item"
}, C6 = {
  key: 1,
  class: "no-changes"
}, x6 = {
  key: 2,
  class: "loading"
}, S6 = {
  key: 3,
  class: "issues-error"
}, I6 = { class: "error-header" }, E6 = { class: "error-title" }, T6 = { class: "issues-list" }, M6 = { class: "workflow-state" }, P6 = { class: "message-section" }, R6 = { class: "popover-footer" }, L6 = {
  key: 1,
  class: "commit-popover"
}, D6 = { class: "popover-header" }, N6 = { class: "popover-body" }, O6 = {
  key: 0,
  class: "changes-summary"
}, U6 = {
  key: 0,
  class: "change-item"
}, A6 = {
  key: 1,
  class: "change-item"
}, z6 = {
  key: 2,
  class: "change-item"
}, F6 = {
  key: 3,
  class: "change-item"
}, V6 = {
  key: 4,
  class: "change-item"
}, B6 = {
  key: 5,
  class: "change-item"
}, W6 = {
  key: 1,
  class: "no-changes"
}, G6 = {
  key: 2,
  class: "loading"
}, j6 = {
  key: 3,
  class: "issues-error"
}, H6 = { class: "error-header" }, q6 = { class: "error-title" }, K6 = { class: "issues-list" }, J6 = { class: "workflow-state" }, Q6 = { class: "message-section" }, Y6 = { class: "popover-footer" }, X6 = /* @__PURE__ */ Ce({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = P(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, C = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || C.nodes_added.length > 0 || C.nodes_removed.length > 0;
    }), f = P(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((C) => C.has_issues) : [];
    }), p = P(() => f.value.length > 0), w = P(() => p.value && !u.value);
    async function g() {
      var _, C, $, x;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const T = `Committed: ${((_ = I.summary) == null ? void 0 : _.new) || 0} new, ${((C = I.summary) == null ? void 0 : C.modified) || 0} modified, ${(($ = I.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            n("committed", { success: !0, message: T });
          } else if (I.status === "no_changes")
            n("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const T = ((x = I.issues) == null ? void 0 : x.map((M) => `${M.name}: ${M.issue}`).join("; ")) || "Unknown issues";
            n("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            n("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          n("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (a(), R(Kt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = ($) => n("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = gt(() => {
          }, ["stop"]))
        }, [
          s("div", p6, [
            C[11] || (C[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = ($) => n("close"))
            }, [...C[10] || (C[10] = [
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
          s("div", g6, [
            e.status && d.value ? (a(), i("div", h6, [
              e.status.workflows.new.length ? (a(), i("div", y6, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", w6, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", _6, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", k6, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", b6, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (a(), i("div", $6, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", C6, " No changes to commit ")) : (a(), i("div", x6, " Loading... ")),
            p.value ? (a(), i("div", S6, [
              s("div", I6, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", E6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", T6, [
                (a(!0), i(B, null, he(f.value, ($) => (a(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m($.name), 1),
                  s("span", M6, "(" + m($.sync_state) + ")", 1),
                  S(": " + m($.issue_summary), 1)
                ]))), 128))
              ]),
              b(Qn, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  S(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", P6, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = ($) => r.value = $),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", R6, [
            b(Ne, {
              variant: "secondary",
              onClick: C[3] || (C[3] = ($) => n("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Ne, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                S(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (a(), i("div", L6, [
      s("div", D6, [
        C[22] || (C[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = ($) => n("close"))
        }, [...C[21] || (C[21] = [
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
      s("div", N6, [
        e.status && d.value ? (a(), i("div", O6, [
          e.status.workflows.new.length ? (a(), i("div", U6, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", A6, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", z6, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", F6, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", V6, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (a(), i("div", B6, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", W6, " No changes to commit ")) : (a(), i("div", G6, " Loading... ")),
        p.value ? (a(), i("div", j6, [
          s("div", H6, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", q6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", K6, [
            (a(!0), i(B, null, he(f.value, ($) => (a(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              s("strong", null, m($.name), 1),
              s("span", J6, "(" + m($.sync_state) + ")", 1),
              S(": " + m($.issue_summary), 1)
            ]))), 128))
          ]),
          b(Qn, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              S(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", Q6, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = ($) => r.value = $),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", Y6, [
        b(Ne, {
          variant: "secondary",
          onClick: C[9] || (C[9] = ($) => n("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Ne, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            S(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(X6, [["__scopeId", "data-v-5f897631"]]), Z6 = { class: "switch-body" }, eE = { class: "switch-message" }, tE = { class: "switch-details" }, sE = /* @__PURE__ */ Ce({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (a(), R($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (n) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", Z6, [
          s("p", eE, [
            o[3] || (o[3] = S(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            o[4] || (o[4] = S(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            o[5] || (o[5] = S("? ", -1))
          ]),
          o[6] || (o[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", tE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (n) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            S(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Me, {
          variant: "primary",
          onClick: o[1] || (o[1] = (n) => t.$emit("confirm"))
        }, {
          default: h(() => [...o[9] || (o[9] = [
            S(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), oE = /* @__PURE__ */ Ie(sE, [["__scopeId", "data-v-f6d223e6"]]), nE = {
  key: 0,
  class: "modal-overlay"
}, aE = { class: "modal-content" }, lE = { class: "modal-body" }, iE = { class: "progress-info" }, rE = { class: "progress-percentage" }, cE = { class: "progress-state" }, uE = { class: "switch-steps" }, dE = { class: "step-icon" }, mE = { class: "step-label" }, fE = /* @__PURE__ */ Ce({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const t = e, o = P(() => {
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
    }), n = P(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = P(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === t.state);
      return r.map((u, d) => {
        let v = "pending", f = "○";
        return d < c ? (v = "completed", f = "✓") : d === c && (v = "active", f = "⟳"), {
          ...u,
          status: v,
          icon: f
        };
      });
    });
    return (r, c) => (a(), R(Kt, { to: "body" }, [
      e.show ? (a(), i("div", nE, [
        s("div", aE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", lE, [
            b(hc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", iE, [
              s("div", rE, m(e.progress) + "%", 1),
              s("div", cE, m(o.value), 1)
            ]),
            s("div", uE, [
              (a(!0), i(B, null, he(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", dE, m(u.icon), 1),
                s("span", mE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), vE = /* @__PURE__ */ Ie(fE, [["__scopeId", "data-v-768a5078"]]), pE = { class: "modal-header" }, gE = { class: "modal-body" }, hE = {
  key: 0,
  class: "node-section"
}, yE = { class: "node-list" }, wE = {
  key: 1,
  class: "node-section"
}, _E = { class: "node-list" }, kE = { class: "modal-actions" }, bE = /* @__PURE__ */ Ce({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (a(), R(Kt, { to: "body" }, [
      e.show ? (a(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = gt(() => {
          }, ["stop"]))
        }, [
          s("div", pE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", gE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", hE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", yE, [
                (a(!0), i(B, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", wE, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", _E, [
                (a(!0), i(B, null, he(e.mismatchDetails.extra_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item remove"
                }, " - " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", kE, [
            b(Me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (n) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (n) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                S(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), $E = /* @__PURE__ */ Ie(bE, [["__scopeId", "data-v-7cad7518"]]), CE = [
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
], En = "v0.0.24", xE = "Akatz", SE = { class: "social-buttons" }, IE = ["title", "aria-label", "onClick"], EE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, TE = ["d"], ME = ["title", "aria-label", "onClick"], PE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, RE = ["d"], LE = /* @__PURE__ */ Ce({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", SE, [
      (a(!0), i(B, null, he(st(CE), (l) => (a(), i(B, {
        key: l.id
      }, [
        l.label ? (a(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          S(m(l.label) + " ", 1),
          (a(), i("svg", EE, [
            s("path", {
              d: l.iconPath
            }, null, 8, TE)
          ]))
        ], 8, IE)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", PE, [
            s("path", {
              d: l.iconPath
            }, null, 8, RE)
          ]))
        ], 8, ME))
      ], 64))), 128))
    ]));
  }
}), xc = /* @__PURE__ */ Ie(LE, [["__scopeId", "data-v-4f846342"]]), DE = { class: "footer-info" }, NE = ["title"], OE = {
  key: 0,
  class: "dev-badge"
}, UE = { class: "made-by" }, AE = /* @__PURE__ */ Ce({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), n = k(null), l = k(null), r = P(() => o.value === "development"), c = P(() => {
      var d;
      if (!r.value) return En;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${En} (${u})` : `${En} (development)`;
    });
    return at(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", DE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        S(m(st(En)) + " ", 1),
        r.value ? (a(), i("span", OE, "dev")) : y("", !0)
      ], 8, NE),
      s("span", UE, [
        d[0] || (d[0] = S(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        S(" by " + m(st(xE)), 1)
      ])
    ]));
  }
}), Sc = /* @__PURE__ */ Ie(AE, [["__scopeId", "data-v-4fa265b3"]]), zE = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function n() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (a(), R($t, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(fc, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: h(() => {
        var u;
        return [
          b(Ne, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: n
          }, {
            default: h(() => [...c[2] || (c[2] = [
              S(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(Ne, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              S(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), FE = /* @__PURE__ */ Ie(zE, [["__scopeId", "data-v-fac00ae7"]]), VE = { class: "header-actions" }, BE = {
  key: 0,
  class: "wizard-step"
}, WE = { class: "form-field" }, GE = ["placeholder"], jE = {
  key: 0,
  class: "form-error"
}, HE = { class: "form-field form-field--checkbox" }, qE = { class: "form-checkbox" }, KE = {
  key: 0,
  class: "form-field"
}, JE = ["placeholder"], QE = {
  key: 0,
  class: "form-info"
}, YE = {
  key: 1,
  class: "form-suggestion"
}, XE = {
  key: 2,
  class: "form-error"
}, ZE = {
  key: 3,
  class: "form-info"
}, eT = {
  key: 1,
  class: "wizard-step"
}, tT = {
  key: 0,
  class: "progress-check-loading"
}, sT = {
  key: 0,
  class: "cli-warning"
}, oT = { class: "cli-warning-header" }, nT = {
  key: 1,
  class: "env-landing"
}, aT = { class: "env-list" }, lT = ["value"], iT = { class: "env-name" }, rT = {
  key: 2,
  class: "env-create"
}, cT = { class: "form-field" }, uT = { class: "form-field" }, dT = ["value"], mT = { class: "form-field" }, fT = ["disabled"], vT = ["value"], pT = { class: "form-field" }, gT = ["value"], hT = { class: "form-field form-field--checkbox" }, yT = { class: "form-checkbox" }, wT = {
  key: 0,
  class: "form-error"
}, _T = {
  key: 1,
  class: "env-creating"
}, kT = { class: "creating-intro" }, bT = {
  key: 3,
  class: "env-import"
}, $T = { class: "wizard-footer" }, CT = { class: "wizard-footer-actions" }, po = 10, xT = 600 * 1e3, Ti = 1800 * 1e3, ST = /* @__PURE__ */ Ce({
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
    const o = e, n = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), x = k(!1), I = k(null), T = k(o.initialStep === 2), M = k(o.defaultPath), N = k(!!o.detectedModelsDir), z = k(o.detectedModelsDir || ""), j = k(null), L = k(null), K = k(null), ce = k(null), te = k("my-new-env"), Y = k(pc), we = k("latest"), ee = k(gc), W = k(!0), Q = k(null), ke = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = k(!1), O = k(!1), ue = k(!1), Pe = k({ progress: 0, message: "" }), _e = k({ progress: 0, message: "" }), De = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Ue = k(0), Ve = k(null), le = k(0), oe = k(null), Re = P(() => {
      var Te, Xe;
      const ge = (Te = M.value) == null ? void 0 : Te.trim(), J = !j.value, qe = !N.value || !L.value && ((Xe = z.value) == null ? void 0 : Xe.trim());
      return ge && J && qe;
    }), fe = P(() => {
      var ge;
      return (ge = te.value) == null ? void 0 : ge.trim();
    }), ae = P(() => !!(p.value === 2 || ke.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), E = P(() => ke.value || o.workspacePath || null);
    async function U() {
      var ge;
      if (j.value = null, !!((ge = M.value) != null && ge.trim()))
        try {
          const J = await c({ path: M.value, type: "workspace" });
          J.valid || (j.value = J.error || "Invalid path");
        } catch (J) {
          j.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function ie() {
      var ge;
      if (L.value = null, K.value = null, ce.value = null, !!((ge = z.value) != null && ge.trim()))
        try {
          const J = await c({ path: z.value, type: "models" });
          if (J.valid)
            ce.value = J.model_count ?? null;
          else if (L.value = J.error || "Invalid path", J.suggestion) {
            K.value = J.suggestion, z.value = J.suggestion, L.value = null;
            const qe = await c({ path: J.suggestion, type: "models" });
            qe.valid && (ce.value = qe.model_count ?? null);
          }
        } catch (J) {
          L.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Ee() {
      var ge, J, qe, Te, Xe;
      if (j.value = null, L.value = null, await U(), (ge = j.value) != null && ge.includes("already exists")) {
        j.value = null, ke.value = ((J = M.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!j.value && !(N.value && ((qe = z.value) != null && qe.trim()) && (await ie(), L.value))) {
        O.value = !0;
        try {
          await l({
            workspace_path: ((Te = M.value) == null ? void 0 : Te.trim()) || o.defaultPath,
            models_directory: N.value && ((Xe = z.value) == null ? void 0 : Xe.trim()) || null
          }), Ue.value = 0, Ve.value = Date.now();
          const Fe = setInterval(async () => {
            var Oe;
            if (Ve.value && Date.now() - Ve.value > xT) {
              clearInterval(Fe), O.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const G = await r();
              if (Ue.value = 0, G.state === "idle" && O.value) {
                clearInterval(Fe), O.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: G.progress, message: G.message }, G.state === "complete" ? (clearInterval(Fe), O.value = !1, ke.value = ((Oe = M.value) == null ? void 0 : Oe.trim()) || o.defaultPath, p.value = 2, Se()) : G.state === "error" && (clearInterval(Fe), O.value = !1, j.value = G.error || "Workspace creation failed");
            } catch (G) {
              Ue.value++, console.warn(`Polling failure ${Ue.value}/${po}:`, G), Ue.value >= po && (clearInterval(Fe), O.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Fe) {
          O.value = !1, j.value = Fe instanceof Error ? Fe.message : "Failed to create workspace";
        }
      }
    }
    async function xe() {
      ue.value = !0, Q.value = null;
      try {
        const ge = {
          name: te.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: we.value,
          torch_backend: ee.value,
          switch_after: W.value,
          workspace_path: ke.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ge)).status === "started") {
          le.value = 0, oe.value = Date.now();
          const qe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ti) {
              clearInterval(qe), ue.value = !1, Q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Te = await d();
              if (le.value = 0, Te.state === "idle" && ue.value) {
                clearInterval(qe), ue.value = !1, Q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (_e.value = {
                progress: Te.progress ?? 0,
                message: Te.message,
                phase: Te.phase
              }, Te.state === "complete") {
                clearInterval(qe), ue.value = !1;
                const Xe = Te.environment_name || ge.name;
                W.value ? n("complete", Xe, ke.value) : (g.value = "landing", n("environment-created-no-switch", Xe));
              } else Te.state === "error" && (clearInterval(qe), ue.value = !1, Q.value = Te.error || "Environment creation failed");
            } catch (Te) {
              le.value++, console.warn(`Polling failure ${le.value}/${po}:`, Te), le.value >= po && (clearInterval(qe), ue.value = !1, Q.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ge) {
        ue.value = !1, Q.value = ge instanceof Error ? ge.message : "Unknown error";
      }
    }
    async function Se() {
      pe.value = !0;
      try {
        se.value = await f();
      } catch (ge) {
        console.error("Failed to load ComfyUI releases:", ge);
      } finally {
        pe.value = !1;
      }
    }
    function X() {
      w.value && n("switch-environment", w.value, ke.value);
    }
    function H() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function ve(ge, J) {
      C.value = !1, J ? n("complete", ge, ke.value) : (n("environment-created-no-switch", ge), g.value = "landing");
    }
    function be() {
    }
    at(async () => {
      if (o.detectedModelsDir && (z.value = o.detectedModelsDir), o.workspacePath && (ke.value = o.workspacePath), p.value === 2) {
        Se();
        const ge = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Ke(), clearTimeout(ge), T.value = !1;
      }
    });
    async function Ke() {
      try {
        const ge = await d();
        if (console.log("[ComfyGit] Create progress check:", ge.state, ge), ge.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ge.environment_name), g.value = "create", ue.value = !0, te.value = ge.environment_name || "my-new-env", _e.value = {
            progress: ge.progress ?? 0,
            message: ge.message,
            phase: ge.phase
          }, We();
          return;
        }
      } catch (ge) {
        console.log("[ComfyGit] Create progress check failed:", ge);
      }
      try {
        const ge = await v();
        console.log("[ComfyGit] Import progress check:", ge.state, ge), ge.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ge.environment_name), I.value = {
          message: ge.message || "Importing...",
          phase: ge.phase || "",
          progress: ge.progress ?? 0,
          environmentName: ge.environment_name || ""
        }, x.value = !0, g.value = "import", C.value = !0);
      } catch (ge) {
        console.log("[ComfyGit] Import progress check failed:", ge);
      }
    }
    async function We() {
      le.value = 0, oe.value = Date.now();
      let ge = null;
      const J = async () => {
        if (oe.value && Date.now() - oe.value > Ti)
          return ge && clearInterval(ge), ue.value = !1, Q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Te = await d();
          if (le.value = 0, Te.state === "idle" && ue.value)
            return ge && clearInterval(ge), ue.value = !1, Q.value = "Environment creation was interrupted. Please try again.", !1;
          if (_e.value = {
            progress: Te.progress ?? 0,
            message: Te.message,
            phase: Te.phase
          }, Te.state === "complete") {
            ge && clearInterval(ge), ue.value = !1;
            const Xe = Te.environment_name || te.value;
            return n("complete", Xe, ke.value), !1;
          } else if (Te.state === "error")
            return ge && clearInterval(ge), ue.value = !1, Q.value = Te.error || "Environment creation failed", !1;
          return !0;
        } catch (Te) {
          return le.value++, console.warn(`Polling failure ${le.value}/${po}:`, Te), le.value >= po ? (ge && clearInterval(ge), ue.value = !1, Q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (ge = setInterval(async () => {
        !await J() && ge && clearInterval(ge);
      }, 2e3));
    }
    return (ge, J) => (a(), i(B, null, [
      b($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (qe) => ge.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", VE, [
            b(xc),
            J[19] || (J[19] = s("span", { class: "header-divider" }, null, -1)),
            ae.value ? (a(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (qe) => _.value = !0)
            }, [...J[17] || (J[17] = [
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
              onClick: J[1] || (J[1] = (qe) => ge.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
          var qe;
          return [
            p.value === 1 ? (a(), i("div", BE, [
              J[24] || (J[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", WE, [
                J[21] || (J[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Te) => M.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, GE), [
                  [en, M.value]
                ]),
                j.value ? (a(), i("p", jE, m(j.value), 1)) : y("", !0)
              ]),
              s("div", HE, [
                s("label", qE, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Te) => N.value = Te)
                  }, null, 512), [
                    [qn, N.value]
                  ]),
                  J[22] || (J[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (a(), i("div", KE, [
                J[23] || (J[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Te) => z.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, JE), [
                  [en, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (a(), i("p", QE, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                K.value ? (a(), i("p", YE, " Did you mean: " + m(K.value), 1)) : y("", !0),
                L.value ? (a(), i("p", XE, m(L.value), 1)) : y("", !0),
                ce.value !== null && !L.value ? (a(), i("p", ZE, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              O.value ? (a(), R(Jn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), i("div", eT, [
              T.value ? (a(), i("div", tT, [...J[25] || (J[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(B, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), i("div", sT, [
                  s("div", oT, [
                    J[27] || (J[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (Te) => $.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = s("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = s("div", { class: "cli-warning-commands" }, [
                    s("code", null, "pipx install comfygit"),
                    s("span", { class: "cli-warning-or" }, "or"),
                    s("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (a(), i("div", nT, [
                  J[34] || (J[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (Te) => g.value = "create")
                  }, [...J[31] || (J[31] = [
                    s("span", { class: "option-icon" }, "➕", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Create New Environment"),
                      s("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  s("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (Te) => {
                      x.value = !1, g.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (qe = o.existingEnvironments) != null && qe.length ? (a(), i(B, { key: 0 }, [
                    J[33] || (J[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", aT, [
                      (a(!0), i(B, null, he(o.existingEnvironments, (Te) => (a(), i("label", {
                        key: Te,
                        class: Be(["env-option", { selected: w.value === Te }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Te,
                          "onUpdate:modelValue": J[8] || (J[8] = (Xe) => w.value = Xe)
                        }, null, 8, lT), [
                          [Dn, w.value]
                        ]),
                        s("span", iT, m(Te), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), i("div", rT, [
                  ue.value ? (a(), i("div", _T, [
                    s("p", kT, [
                      J[41] || (J[41] = S(" Creating environment ", -1)),
                      s("strong", null, m(te.value), 1),
                      J[42] || (J[42] = S("... ", -1))
                    ]),
                    b(Jn, {
                      progress: _e.value.progress,
                      message: _e.value.message,
                      "current-phase": _e.value.phase,
                      "show-steps": !0,
                      steps: De
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(B, { key: 0 }, [
                    J[40] || (J[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", cT, [
                      J[35] || (J[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Te) => te.value = Te),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [en, te.value]
                      ])
                    ]),
                    s("div", uT, [
                      J[36] || (J[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Te) => Y.value = Te),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, he(st(vc), (Te) => (a(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te), 9, dT))), 128))
                      ], 512), [
                        [Co, Y.value]
                      ])
                    ]),
                    s("div", mT, [
                      J[37] || (J[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Te) => we.value = Te),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (a(!0), i(B, null, he(se.value, (Te) => (a(), i("option", {
                          key: Te.tag_name,
                          value: Te.tag_name
                        }, m(Te.name), 9, vT))), 128))
                      ], 8, fT), [
                        [Co, we.value]
                      ])
                    ]),
                    s("div", pT, [
                      J[38] || (J[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Te) => ee.value = Te),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, he(st(Ml), (Te) => (a(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te) + m(Te === "auto" ? " (detect GPU)" : ""), 9, gT))), 128))
                      ], 512), [
                        [Co, ee.value]
                      ])
                    ]),
                    s("div", hT, [
                      s("label", yT, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Te) => W.value = Te)
                        }, null, 512), [
                          [qn, W.value]
                        ]),
                        J[39] || (J[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    Q.value ? (a(), i("div", wT, m(Q.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), i("div", bT, [
                  b(wc, {
                    "workspace-path": ke.value,
                    "resume-import": x.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: ve,
                    onImportStarted: J[14] || (J[14] = (Te) => C.value = !0),
                    onSourceCleared: be
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", $T, [
            b(Sc),
            s("div", CT, [
              p.value === 1 ? (a(), R(Ne, {
                key: 0,
                variant: "primary",
                disabled: !Re.value || O.value,
                onClick: Ee
              }, {
                default: h(() => [
                  S(m(O.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (a(), i(B, { key: 1 }, [
                !ue.value && !C.value && (g.value !== "landing" || o.setupState === "no_workspace" && !ke.value) ? (a(), R(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: H
                }, {
                  default: h(() => [...J[44] || (J[44] = [
                    S(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (a(), R(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !fe.value || ue.value,
                  onClick: xe
                }, {
                  default: h(() => [
                    S(m(ue.value ? "Creating..." : W.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (a(), R(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: X
                }, {
                  default: h(() => [
                    S(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (a(), R(FE, {
        key: 0,
        "workspace-path": E.value,
        onClose: J[16] || (J[16] = (qe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), IT = /* @__PURE__ */ Ie(ST, [["__scopeId", "data-v-9a9aadc0"]]), ET = { class: "update-banner" }, TT = { class: "update-banner__left" }, MT = { class: "update-banner__title" }, PT = {
  key: 0,
  class: "update-banner__summary"
}, RT = { class: "update-banner__actions" }, LT = ["disabled"], DT = ["disabled"], NT = ["disabled"], OT = /* @__PURE__ */ Ce({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", ET, [
      s("div", TT, [
        s("div", MT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", PT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", RT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, LT),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, DT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, NT)
      ])
    ]));
  }
}), UT = /* @__PURE__ */ Ie(OT, [["__scopeId", "data-v-49562c5c"]]), Ic = "ComfyGit.UpdateNotice.DismissedVersion";
function AT() {
  try {
    return localStorage.getItem(Ic);
  } catch {
    return null;
  }
}
function zT(e) {
  try {
    localStorage.setItem(Ic, e);
  } catch {
  }
}
function FT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : AT() !== e.latest_version;
}
const VT = { class: "comfygit-panel" }, BT = { class: "panel-header" }, WT = { class: "header-left" }, GT = {
  key: 0,
  class: "header-info"
}, jT = { class: "header-actions" }, HT = { class: "env-switcher" }, qT = { class: "env-switcher-header" }, KT = { class: "env-control-buttons" }, JT = {
  key: 0,
  class: "header-info"
}, QT = { class: "branch-name" }, YT = { class: "panel-main" }, XT = { class: "sidebar" }, ZT = { class: "sidebar-content" }, eM = { class: "sidebar-section" }, tM = { class: "sidebar-section" }, sM = { class: "sidebar-section" }, oM = { class: "sidebar-footer" }, nM = { class: "content-area" }, aM = {
  key: 0,
  class: "error-message"
}, lM = {
  key: 1,
  class: "loading"
}, iM = { class: "dialog-content env-selector-dialog" }, rM = { class: "dialog-header" }, cM = { class: "dialog-body" }, uM = { class: "env-list" }, dM = { class: "env-info" }, mM = { class: "env-name-row" }, fM = { class: "env-indicator" }, vM = { class: "env-name" }, pM = {
  key: 0,
  class: "env-branch"
}, gM = {
  key: 1,
  class: "current-label"
}, hM = { class: "env-stats" }, yM = ["onClick"], wM = { class: "toast-container" }, _M = { class: "toast-message" }, Mi = "ComfyGit.LastView", Pi = "ComfyGit.LastSection", kM = /* @__PURE__ */ Ce({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, n = t, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: $,
      getSetupStatus: x,
      getUpdateCheck: I,
      updateManager: T
    } = ct(), M = Ah(), N = k(null), z = k([]), j = k([]), L = k([]), K = P(() => L.value.find((ne) => ne.is_current)), ce = k(null), te = k(!1), Y = k(!1), we = k("remotes"), ee = k("manifest"), W = k(null), Q = k(!1), ke = k(1), se = P(() => {
      var ne;
      return ((ne = W.value) == null ? void 0 : ne.state) || "managed";
    }), pe = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, O = P(() => {
      var ne, q;
      return ((q = (ne = W.value) == null ? void 0 : ne.runtime_context) == null ? void 0 : q.capabilities) || pe;
    }), ue = k(!1), Pe = k(null), _e = k(null), De = k(!1), Ue = k(null), Ve = k(!1), le = k(!1), oe = P(() => !Ve.value && FT(Ue.value)), Re = k(null), fe = k(null), ae = k(null), E = k(!1), U = k(!1), ie = k(""), Ee = k(null), xe = k({ state: "idle", progress: 0, message: "" });
    let Se = null, X = null;
    const H = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" }
    }, ve = o.initialView ? H[o.initialView] : null, be = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Ke = ["this-env", "version-control", "workspace", "diagnostics"];
    function We() {
      try {
        const ne = sessionStorage.getItem(Mi), q = sessionStorage.getItem(Pi), Je = ne === "branches" || ne === "history" || ne === "remotes" ? "version-control" : ne === "manifest" || ne === "debug-env" || ne === "debug-workspace" ? "diagnostics" : ne, Ye = q === "all-envs" ? "workspace" : q === "sharing" ? "version-control" : q;
        if (ne && q && be.includes(Je) && Ke.includes(Ye))
          return { view: Je, section: Ye };
      } catch {
      }
      return null;
    }
    const ge = We(), J = k((ve == null ? void 0 : ve.view) ?? (ge == null ? void 0 : ge.view) ?? "status"), qe = k((ve == null ? void 0 : ve.section) ?? (ge == null ? void 0 : ge.section) ?? "this-env");
    function Te(ne, q) {
      J.value = ne, qe.value = q;
      try {
        sessionStorage.setItem(Mi, ne), sessionStorage.setItem(Pi, q);
      } catch {
      }
    }
    function Xe(ne) {
      const Je = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ne];
      Je && Te(Je.view, Je.section);
    }
    function Fe(ne) {
      we.value = ne, Te("version-control", "version-control");
    }
    function Oe(ne) {
      ee.value = ne, Te("diagnostics", "diagnostics");
    }
    function G() {
      Fe("branches");
    }
    function de() {
      n("close"), setTimeout(async () => {
        await ye("Comfy.OpenManagerDialog") || await ye("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function ye(ne) {
      var Ye, lt;
      const q = window.app, Je = [
        (Ye = q == null ? void 0 : q.extensionManager) == null ? void 0 : Ye.command,
        (lt = q == null ? void 0 : q.extensionManager) == null ? void 0 : lt.commands,
        q == null ? void 0 : q.command,
        q == null ? void 0 : q.commands
      ];
      for (const vt of Je)
        if (typeof (vt == null ? void 0 : vt.execute) == "function")
          try {
            return await vt.execute(ne), !0;
          } catch (Lt) {
            console.debug(`[ComfyGit] Command ${ne} did not open Extensions manager`, Lt);
          }
      return !1;
    }
    function Qe(ne) {
      var Ye, lt, vt;
      const q = ne.map((Lt) => Lt.toLowerCase()), Je = document.querySelectorAll('button, [role="button"]');
      for (const Lt of Je) {
        const ss = Lt;
        if ([
          (Ye = ss.textContent) == null ? void 0 : Ye.trim(),
          (lt = ss.getAttribute("title")) == null ? void 0 : lt.trim(),
          (vt = ss.getAttribute("aria-label")) == null ? void 0 : vt.trim()
        ].filter(Boolean).map((zs) => zs.toLowerCase()).some((zs) => q.includes(zs)))
          return ss.click(), !0;
      }
      return !1;
    }
    const D = k(null), A = k(!1), Z = k(!1), Ae = k([]);
    let ze = 0;
    function Le(ne, q = "info", Je = 3e3) {
      const Ye = ++ze;
      return Ae.value.push({ id: Ye, message: ne, type: q }), Je > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((lt) => lt.id !== Ye);
      }, Je), Ye;
    }
    function je(ne) {
      Ae.value = Ae.value.filter((q) => q.id !== ne);
    }
    function nt(ne, q) {
      Le(ne, q);
    }
    async function kt() {
      Ue.value = null, Ve.value = !1;
      try {
        Ue.value = await I();
      } catch {
      }
    }
    function Et() {
      var q;
      const ne = (q = Ue.value) == null ? void 0 : q.release_url;
      if (ne)
        try {
          window.open(ne, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function re() {
      var q;
      const ne = (q = Ue.value) == null ? void 0 : q.latest_version;
      ne && zT(ne), Ve.value = !0;
    }
    async function F() {
      var q, Je;
      if (le.value) return;
      le.value = !0;
      const ne = Le("Updating comfygit-manager...", "info", 0);
      try {
        const Ye = await T();
        if (je(ne), Ye.status !== "success") {
          if (Le(Ye.message || "Update failed", "error"), Ye.manual_instructions) {
            const lt = Ye.manual_instructions.split(`
`).map((vt) => vt.trim()).filter(Boolean);
            D.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: lt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                D.value = null;
              }
            };
          }
          return;
        }
        if (Le(Ye.message || "Update complete", "success"), re(), Ye.restart_required) {
          Qs();
          try {
            await ((Je = (q = window.app) == null ? void 0 : q.api) == null ? void 0 : Je.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ye) {
        je(ne);
        const lt = Ye instanceof Error ? Ye.message : "Update failed";
        Le(lt, "error");
      } finally {
        le.value = !1;
      }
    }
    const me = P(() => {
      if (!N.value) return "neutral";
      const ne = N.value.workflows, q = ne.new.length > 0 || ne.modified.length > 0 || ne.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? q ? "warning" : "success" : "error";
    });
    P(() => N.value ? me.value === "success" ? "All synced" : me.value === "warning" ? "Uncommitted changes" : me.value === "error" ? "Not synced" : "" : "");
    async function Ge(ne = {}) {
      ue.value = !0, Pe.value = null;
      try {
        const [q, Je, Ye, lt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = q, z.value = Je.commits, j.value = Ye.branches, L.value = lt, n("statusUpdate", q), (ne.refreshWorkflows ?? !0) && Re.value && await Re.value.loadWorkflows(!0);
      } catch (q) {
        Pe.value = q instanceof Error ? q.message : "Failed to load status", N.value = null, z.value = [], j.value = [];
      } finally {
        ue.value = !1;
      }
    }
    function dt(ne) {
      _e.value = ne;
    }
    async function xt(ne) {
      var Je;
      _e.value = null;
      const q = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: q ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: q ? "You have uncommitted changes that will be lost." : `Checkout commit ${ne.short_hash || ((Je = ne.hash) == null ? void 0 : Je.slice(0, 7))}?`,
        details: q ? _n() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: q,
        onConfirm: async () => {
          var vt;
          D.value = null, Qs();
          const Ye = Le(`Checking out ${ne.short_hash || ((vt = ne.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), lt = await u(ne.hash, q);
          je(Ye), lt.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(lt.message || "Checkout failed", "error");
        }
      };
    }
    async function it(ne) {
      const q = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: q ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: q ? "You have uncommitted changes." : `Switch to branch "${ne}"?`,
        details: q ? _n() : void 0,
        warning: q ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: q ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Qs();
          const Je = Le(`Switching to ${ne}...`, "info", 0), Ye = await v(ne, q);
          je(Je), Ye.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(Ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function St(ne) {
      const q = Le(`Creating branch ${ne}...`, "info", 0), Je = await d(ne);
      je(q), Je.status === "success" ? (Le(`Branch "${ne}" created`, "success"), await Ge()) : Le(Je.message || "Failed to create branch", "error");
    }
    async function ts(ne, q = !1) {
      const Je = async (Ye) => {
        var vt;
        const lt = Le(`Deleting branch ${ne}...`, "info", 0);
        try {
          const Lt = await f(ne, Ye);
          je(lt), Lt.status === "success" ? (Le(`Branch "${ne}" deleted`, "success"), await Ge()) : (vt = Lt.message) != null && vt.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await Je(!0);
            }
          } : Le(Lt.message || "Failed to delete branch", "error");
        } catch (Lt) {
          je(lt);
          const ss = Lt instanceof Error ? Lt.message : "Failed to delete branch";
          ss.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ne}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await Je(!0);
            }
          } : Le(ss, "error");
        }
      };
      D.value = {
        title: "Delete Branch",
        message: `Delete branch "${ne}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, await Je(q);
        }
      };
    }
    async function xs(ne) {
      _e.value = null;
      const q = prompt("Enter branch name:");
      if (q) {
        const Je = Le(`Creating branch ${q}...`, "info", 0), Ye = await d(q, ne.hash);
        je(Je), Ye.status === "success" ? (Le(`Branch "${q}" created from ${ne.short_hash}`, "success"), await Ge()) : Le(Ye.message || "Failed to create branch", "error");
      }
    }
    function Qs() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ua() {
      if (!O.value.can_restart_current) {
        Le("Restart is not available in this runtime context.", "warning");
        return;
      }
      D.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          D.value = null, Qs(), Le("Restarting environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function da() {
      if (!O.value.can_stop_current) {
        Le("Stop is not available in this runtime context.", "warning");
        return;
      }
      D.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ne;
          D.value = null, Le("Stopping environment...", "info");
          try {
            (ne = window.app) != null && ne.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function As(ne, q) {
      if (!O.value.can_switch_environment) {
        Le("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      De.value = !1, ie.value = ne, Ee.value = q || null, E.value = !0;
    }
    async function ma() {
      E.value = !1, U.value = !0, Qs(), xe.value = {
        progress: 10,
        state: uo(10),
        message: mo(10)
      };
      try {
        await w(ie.value, Ee.value || void 0), fa(), va();
      } catch (ne) {
        Ss(), U.value = !1, Le(`Failed to initiate switch: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error"), xe.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function uo(ne) {
      return ne >= 100 ? "complete" : ne >= 80 ? "validating" : ne >= 60 ? "starting" : ne >= 30 ? "syncing" : "preparing";
    }
    function mo(ne) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(ne)] || "";
    }
    function fa() {
      if (X) return;
      let ne = 10;
      const q = 60, Je = 5e3, Ye = 100, lt = (q - ne) / (Je / Ye);
      X = window.setInterval(() => {
        if (ne += lt, ne >= q && (ne = q, Ss()), xe.value.progress < q) {
          const vt = Math.floor(ne);
          xe.value = {
            progress: vt,
            state: uo(vt),
            message: mo(vt)
          };
        }
      }, Ye);
    }
    function Ss() {
      X && (clearInterval(X), X = null);
    }
    function va() {
      Se || (Se = window.setInterval(async () => {
        try {
          let ne = await M.getStatus();
          if ((!ne || ne.state === "idle") && (ne = await g()), !ne)
            return;
          const q = ne.progress || 0;
          q >= 60 && Ss();
          const Je = Math.max(q, xe.value.progress), Ye = ne.state && ne.state !== "idle" && ne.state !== "unknown", lt = Ye ? ne.state : uo(Je), vt = Ye && ne.message || mo(Je);
          xe.value = {
            state: lt,
            progress: Je,
            message: vt
          }, ne.state === "complete" ? (Ss(), Do(), U.value = !1, Le(`✓ Switched to ${ie.value}`, "success"), await Ge(), ie.value = "") : ne.state === "rolled_back" ? (Ss(), Do(), U.value = !1, Le("Switch failed, restored previous environment", "warning"), ie.value = "") : ne.state === "critical_failure" && (Ss(), Do(), U.value = !1, Le(`Critical error during switch: ${ne.message}`, "error"), ie.value = "");
        } catch (ne) {
          console.error("Failed to poll switch progress:", ne);
        }
      }, 1e3));
    }
    function Do() {
      Ss(), Se && (clearInterval(Se), Se = null);
    }
    function pa() {
      var ne;
      E.value = !1, ie.value = "", (ne = W.value) != null && ne.state && W.value.state !== "managed" && (ke.value = W.value.state === "no_workspace" ? 1 : 2, Q.value = !0);
    }
    async function ga(ne) {
      A.value = !1, await Ge(), Le(ne.message, ne.success ? "success" : "error");
    }
    async function ha() {
      Z.value = !1;
      const ne = Le("Syncing environment...", "info", 0);
      try {
        const q = await C("skip", !0);
        if (je(ne), q.status === "success") {
          const Je = [];
          q.nodes_installed.length && Je.push(`${q.nodes_installed.length} installed`), q.nodes_removed.length && Je.push(`${q.nodes_removed.length} removed`);
          const Ye = Je.length ? `: ${Je.join(", ")}` : "";
          Le(`✓ Environment synced${Ye}`, "success"), await Ge();
        } else {
          const Je = q.errors.length ? q.errors.join("; ") : q.message;
          Le(`Sync failed: ${Je}`, "error");
        }
      } catch (q) {
        je(ne), Le(`Sync error: ${q instanceof Error ? q.message : "Unknown error"}`, "error");
      }
    }
    async function ya(ne) {
      var q;
      try {
        const Je = await $(ne);
        Je.failed.length === 0 ? Le(`✓ Repaired ${Je.success} workflow${Je.success === 1 ? "" : "s"}`, "success") : Le(`Repaired ${Je.success}, failed: ${Je.failed.length}`, "warning"), await Ge();
      } catch (Je) {
        Le(`Repair failed: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
      } finally {
        (q = ae.value) == null || q.resetRepairingState();
      }
    }
    async function yn() {
      var q, Je;
      const ne = Le("Repairing environment...", "info", 0);
      try {
        const Ye = await C("skip", !0);
        if (je(ne), Ye.status === "success") {
          const lt = [];
          Ye.nodes_installed.length && lt.push(`${Ye.nodes_installed.length} installed`), Ye.nodes_removed.length && lt.push(`${Ye.nodes_removed.length} removed`);
          const vt = lt.length ? `: ${lt.join(", ")}` : "";
          Le(`✓ Environment repaired${vt}`, "success"), (q = ae.value) == null || q.closeDetailModal(), await Ge();
        } else {
          const lt = Ye.errors.length ? Ye.errors.join(", ") : Ye.message || "Unknown error";
          Le(`Repair failed: ${lt}`, "error");
        }
      } catch (Ye) {
        je(ne), Le(`Repair error: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
      } finally {
        (Je = ae.value) == null || Je.resetRepairingEnvironmentState();
      }
    }
    async function wa(ne, q) {
      Le(`Environment '${ne}' created`, "success"), await Ge(), fe.value && await fe.value.loadEnvironments(), q && O.value.can_switch_environment && await As(ne);
    }
    async function _a(ne) {
      var q;
      if (!O.value.can_delete_environment) {
        Le("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((q = K.value) == null ? void 0 : q.name) === ne) {
        Le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      D.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ne}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            const Je = await _(ne);
            Je.status === "success" ? (Le(`Environment "${ne}" deleted`, "success"), await Ge(), fe.value && await fe.value.loadEnvironments()) : Le(Je.message || "Failed to delete environment", "error");
          } catch (Je) {
            Le(`Error deleting environment: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ka(ne, q) {
      Q.value = !1;
      try {
        W.value = await x();
      } catch {
      }
      O.value.can_switch_environment && await As(ne, q);
    }
    function ba() {
      Q.value = !1, n("close");
    }
    async function $a(ne, q) {
      await As(ne, q);
    }
    async function Ca(ne) {
      te.value = !1, await Ge(), await As(ne);
    }
    function xa() {
      ce.value = null, te.value = !0;
    }
    function Sa(ne) {
      ce.value = ne, Y.value = !0;
    }
    function wn() {
      Y.value = !1, ce.value = null;
    }
    async function Ia(ne) {
      W.value = await x(), console.log(`Environment '${ne}' created. Available for switching.`);
    }
    function Ea() {
      if (!O.value.can_create_environment) {
        Le("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Te("environments", "workspace"), setTimeout(() => {
        var ne;
        (ne = fe.value) == null || ne.openCreateModal();
      }, 100);
    }
    function _n() {
      if (!N.value) return [];
      const ne = [], q = N.value.workflows;
      return q.new.length && ne.push(`${q.new.length} new workflow(s)`), q.modified.length && ne.push(`${q.modified.length} modified workflow(s)`), q.deleted.length && ne.push(`${q.deleted.length} deleted workflow(s)`), ne;
    }
    return at(async () => {
      try {
        if (W.value = await x(), W.value.state === "no_workspace" && O.value.can_initialize_workspace) {
          Q.value = !0, ke.value = 1;
          return;
        }
        if (W.value.state === "empty_workspace" && O.value.can_create_environment) {
          Q.value = !0, ke.value = 2;
          return;
        }
        if (W.value.state === "unmanaged" && O.value.can_switch_environment) {
          Q.value = !0, ke.value = 2;
          return;
        }
      } catch (ne) {
        console.warn("Setup status check failed, proceeding normally:", ne);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        kt()
      ]);
    }), (ne, q) => {
      var Je, Ye, lt, vt, Lt, ss, No, zs, V, $e, He, mt, Dt;
      return a(), i("div", VT, [
        s("div", BT, [
          s("div", WT, [
            q[27] || (q[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (a(), i("div", GT)) : y("", !0)
          ]),
          s("div", jT, [
            b(xc),
            q[30] || (q[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: ue.value }]),
              onClick: Ge,
              title: "Refresh"
            }, [...q[28] || (q[28] = [
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
              onClick: q[0] || (q[0] = (Ze) => n("close")),
              title: "Close"
            }, [...q[29] || (q[29] = [
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
        oe.value && Ue.value ? (a(), R(UT, {
          key: 0,
          info: Ue.value,
          updating: le.value,
          onUpdate: F,
          onDismiss: re,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", HT, [
          s("div", qT, [
            q[31] || (q[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", KT, [
              O.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ua
              }, " Restart ")) : y("", !0),
              O.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: da
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: q[1] || (q[1] = (Ze) => Te("environments", "workspace"))
          }, [
            N.value ? (a(), i("div", JT, [
              s("span", null, m(((Je = K.value) == null ? void 0 : Je.name) || ((Ye = N.value) == null ? void 0 : Ye.environment) || "Loading..."), 1),
              s("span", QT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            q[32] || (q[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", YT, [
          s("div", XT, [
            s("div", ZT, [
              s("div", eM, [
                q[33] || (q[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "status" && qe.value === "this-env" }]),
                  onClick: q[2] || (q[2] = (Ze) => Te("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: q[3] || (q[3] = (Ze) => Te("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: q[4] || (q[4] = (Ze) => Te("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: q[5] || (q[5] = (Ze) => Te("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: q[6] || (q[6] = (Ze) => Fe("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              q[36] || (q[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", tM, [
                q[34] || (q[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: q[7] || (q[7] = (Ze) => Te("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: q[8] || (q[8] = (Ze) => Te("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: q[9] || (q[9] = (Ze) => Te("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              q[37] || (q[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", sM, [
                q[35] || (q[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value === "manifest" }]),
                  onClick: q[10] || (q[10] = (Ze) => Oe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value !== "manifest" }]),
                  onClick: q[11] || (q[11] = (Ze) => Oe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", oM, [
              b(Sc)
            ])
          ]),
          s("div", nM, [
            Pe.value ? (a(), i("div", aM, m(Pe.value), 1)) : !N.value && J.value === "status" ? (a(), i("div", lM, " Loading status... ")) : (a(), i(B, { key: 2 }, [
              J.value === "status" ? (a(), R(Uh, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ae,
                status: N.value,
                "setup-state": se.value,
                onSwitchBranch: G,
                onCommitChanges: q[12] || (q[12] = (Ze) => A.value = !0),
                onSyncEnvironment: q[13] || (q[13] = (Ze) => Z.value = !0),
                onViewWorkflows: q[14] || (q[14] = (Ze) => Te("workflows", "this-env")),
                onViewHistory: q[15] || (q[15] = (Ze) => Fe("history")),
                onViewDebug: q[16] || (q[16] = (Ze) => Oe("env")),
                onViewNodes: q[17] || (q[17] = (Ze) => Te("nodes", "this-env")),
                onRepairMissingModels: ya,
                onRepairEnvironment: yn,
                onStartSetup: q[18] || (q[18] = (Ze) => Q.value = !0),
                onViewEnvironments: q[19] || (q[19] = (Ze) => Te("environments", "workspace")),
                onCreateEnvironment: Ea
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (a(), R(Ib, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Re,
                onRefresh: Ge
              }, null, 512)) : J.value === "models-env" ? (a(), R(L2, {
                key: 2,
                onNavigate: Xe
              })) : J.value === "version-control" ? (a(), R(OI, {
                key: 3,
                commits: z.value,
                "current-ref": (lt = N.value) == null ? void 0 : lt.branch,
                branches: j.value,
                current: ((vt = N.value) == null ? void 0 : vt.branch) || null,
                "initial-tab": we.value,
                onSelect: dt,
                onCheckout: xt,
                onSwitch: it,
                onCreate: St,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (a(), R(x$, {
                key: 4,
                "version-mismatches": ((ss = (Lt = N.value) == null ? void 0 : Lt.comparison) == null ? void 0 : ss.version_mismatches) || [],
                onOpenNodeManager: de,
                onRepairEnvironment: yn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (a(), R(QI, {
                key: 5,
                "initial-tab": ee.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (a(), R(Cx, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: fe,
                "can-create": O.value.can_create_environment,
                "can-switch": O.value.can_switch_environment,
                "can-delete": O.value.can_delete_environment,
                onSwitch: As,
                onCreated: wa,
                onDelete: _a,
                onImport: xa,
                onExport: Sa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (a(), R(G2, {
                key: 7,
                onRefresh: Ge
              })) : J.value === "settings" ? (a(), R(X$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        _e.value ? (a(), R(v6, {
          key: 1,
          commit: _e.value,
          onClose: q[20] || (q[20] = (Ze) => _e.value = null),
          onCheckout: xt,
          onCreateBranch: xs
        }, null, 8, ["commit"])) : y("", !0),
        D.value ? (a(), R(Tl, {
          key: 2,
          title: D.value.title,
          message: D.value.message,
          details: D.value.details,
          warning: D.value.warning,
          confirmLabel: D.value.confirmLabel,
          cancelLabel: D.value.cancelLabel,
          secondaryLabel: D.value.secondaryLabel,
          secondaryAction: D.value.secondaryAction,
          destructive: D.value.destructive,
          onConfirm: D.value.onConfirm,
          onCancel: q[21] || (q[21] = (Ze) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        te.value ? (a(), R($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: q[22] || (q[22] = (Ze) => te.value = !1)
        }, {
          body: h(() => [
            b(c8, {
              embedded: "",
              onImportCompleteSwitch: Ca
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (a(), R($t, {
          key: 4,
          title: ce.value ? `EXPORT ENVIRONMENT: ${ce.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: wn
        }, {
          body: h(() => [
            b(v3, {
              embedded: "",
              "environment-name": ce.value,
              onClose: wn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(oE, {
          show: E.value,
          "from-environment": ((No = K.value) == null ? void 0 : No.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: ma,
          onClose: pa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        A.value && N.value ? (a(), R(Cc, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: q[23] || (q[23] = (Ze) => A.value = !1),
          onCommitted: ga
        }, null, 8, ["status"])) : y("", !0),
        Z.value && N.value ? (a(), R($E, {
          key: 6,
          show: Z.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ha,
          onClose: q[24] || (q[24] = (Ze) => Z.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(vE, {
          show: U.value,
          state: xe.value.state,
          progress: xe.value.progress,
          message: xe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        De.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: q[26] || (q[26] = gt((Ze) => De.value = !1, ["self"]))
        }, [
          s("div", iM, [
            s("div", rM, [
              q[39] || (q[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: q[25] || (q[25] = (Ze) => De.value = !1)
              }, [...q[38] || (q[38] = [
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
            s("div", cM, [
              q[40] || (q[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", uM, [
                (a(!0), i(B, null, he(L.value, (Ze) => (a(), i("div", {
                  key: Ze.name,
                  class: Be(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", dM, [
                    s("div", mM, [
                      s("span", fM, m(Ze.is_current ? "●" : "○"), 1),
                      s("span", vM, m(Ze.name), 1),
                      Ze.current_branch ? (a(), i("span", pM, "(" + m(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (a(), i("span", gM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", hM, m(Ze.workflow_count) + " workflows • " + m(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && O.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fs) => As(Ze.name)
                  }, " SWITCH ", 8, yM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Q.value ? (a(), R(IT, {
          key: 8,
          "default-path": ((zs = W.value) == null ? void 0 : zs.default_path) || "~/comfygit",
          "detected-models-dir": ((V = W.value) == null ? void 0 : V.detected_models_dir) || null,
          "initial-step": ke.value,
          "existing-environments": (($e = W.value) == null ? void 0 : $e.environments) || [],
          "cli-installed": ((He = W.value) == null ? void 0 : He.cli_installed) ?? !0,
          "setup-state": ((mt = W.value) == null ? void 0 : mt.state) || "no_workspace",
          "workspace-path": ((Dt = W.value) == null ? void 0 : Dt.workspace_path) || null,
          onComplete: ka,
          onClose: ba,
          onSwitchEnvironment: $a,
          onEnvironmentCreatedNoSwitch: Ia
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", wM, [
          b(sm, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(B, null, he(Ae.value, (Ze) => (a(), i("div", {
                key: Ze.id,
                class: Be(["toast", Ze.type])
              }, [
                s("span", _M, m(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), bM = /* @__PURE__ */ Ie(kM, [["__scopeId", "data-v-cab83752"]]), $M = { class: "item-header" }, CM = { class: "item-info" }, xM = { class: "filename" }, SM = { class: "metadata" }, IM = { class: "size" }, EM = {
  key: 0,
  class: "type"
}, TM = { class: "item-actions" }, MM = {
  key: 0,
  class: "progress-section"
}, PM = { class: "progress-bar" }, RM = { class: "progress-stats" }, LM = { class: "downloaded" }, DM = { class: "speed" }, NM = {
  key: 0,
  class: "eta"
}, OM = {
  key: 1,
  class: "status-msg paused"
}, UM = {
  key: 2,
  class: "status-msg queued"
}, AM = {
  key: 3,
  class: "status-msg completed"
}, zM = {
  key: 4,
  class: "status-msg failed"
}, FM = {
  key: 0,
  class: "retries"
}, VM = /* @__PURE__ */ Ce({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
    function n(c) {
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
    return (c, u) => (a(), i("div", {
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", $M, [
        s("div", CM, [
          s("div", xM, m(e.item.filename), 1),
          s("div", SM, [
            s("span", IM, m(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", EM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", TM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (a(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (a(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (a(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (a(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (a(), i("div", MM, [
        s("div", PM, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", RM, [
          s("span", LM, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          s("span", DM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", NM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", OM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", UM, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", AM, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", zM, [
        S(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", FM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ Ie(VM, [["__scopeId", "data-v-2110df65"]]), BM = { class: "queue-title" }, WM = { class: "count" }, GM = { class: "queue-actions" }, jM = { class: "action-label" }, HM = {
  key: 0,
  class: "overall-progress"
}, qM = { class: "progress-bar" }, KM = {
  key: 0,
  class: "current-mini"
}, JM = { class: "filename" }, QM = { class: "speed" }, YM = {
  key: 1,
  class: "queue-content"
}, XM = {
  key: 0,
  class: "section"
}, ZM = {
  key: 1,
  class: "section"
}, eP = { class: "section-header" }, tP = { class: "section-label paused" }, sP = { class: "items-list" }, oP = {
  key: 2,
  class: "section"
}, nP = { class: "section-header" }, aP = { class: "section-label" }, lP = { class: "items-list" }, iP = {
  key: 3,
  class: "section"
}, rP = { class: "section-header" }, cP = { class: "section-label" }, uP = { class: "items-list" }, dP = {
  key: 4,
  class: "section"
}, mP = { class: "section-header" }, fP = { class: "section-label failed" }, vP = { class: "items-list" }, pP = /* @__PURE__ */ Ce({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: n,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Lo(), C = k(!1);
    let $ = null;
    pt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (M, N) => {
        $ && (clearTimeout($), $ = null);
        const z = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, j = N && (N.active > 0 || N.paused > 0);
        z && j && ($ = setTimeout(() => {
          _(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const x = P(() => {
      var z;
      if (t.items.length === 0) return 0;
      const M = l.value.length, N = ((z = o.value) == null ? void 0 : z.progress) || 0;
      return Math.round((M + N / 100) / t.items.length * 100);
    });
    function I(M) {
      v(M);
    }
    function T(M) {
      return M === 0 ? "..." : `${(M / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (M, N) => (a(), R(Kt, { to: "body" }, [
      st(u) ? (a(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !C.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: N[0] || (N[0] = (z) => C.value = !C.value)
        }, [
          s("div", BM, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", WM, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", GM, [
            s("span", jM, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), i("div", YM, [
          st(o) ? (a(), i("div", XM, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(zo, {
              item: st(o),
              onCancel: N[1] || (N[1] = (z) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (a(), i("div", ZM, [
            s("div", eP, [
              s("span", tP, "Paused (" + m(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...z) => st(w) && st(w)(...z))
              }, "Resume All")
            ]),
            s("div", sP, [
              (a(!0), i(B, null, he(st(c), (z) => (a(), R(zo, {
                key: z.id,
                item: z,
                onResume: (j) => st(p)(z.id),
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(n).length > 0 ? (a(), i("div", oP, [
            s("div", nP, [
              s("span", aP, "Queued (" + m(st(n).length) + ")", 1)
            ]),
            s("div", lP, [
              (a(!0), i(B, null, he(st(n), (z) => (a(), R(zo, {
                key: z.id,
                item: z,
                onCancel: (j) => I(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (a(), i("div", iP, [
            s("div", rP, [
              s("span", cP, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...z) => st(_) && st(_)(...z))
              }, "Clear")
            ]),
            s("div", uP, [
              (a(!0), i(B, null, he(st(l).slice(0, 3), (z) => (a(), R(zo, {
                key: z.id,
                item: z,
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (a(), i("div", dP, [
            s("div", mP, [
              s("span", fP, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", vP, [
              (a(!0), i(B, null, he(st(r), (z) => (a(), R(zo, {
                key: z.id,
                item: z,
                onRetry: (j) => st(f)(z.id),
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", HM, [
          s("div", qM, [
            s("div", {
              class: "progress-fill",
              style: Rt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", KM, [
            s("span", JM, m(st(o).filename), 1),
            s("span", QM, m(T(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), gP = /* @__PURE__ */ Ie(pP, [["__scopeId", "data-v-3a3c9607"]]), hP = { class: "detail-header" }, yP = { class: "item-count" }, wP = { class: "resource-list" }, _P = { class: "item-info" }, kP = { class: "item-name" }, bP = {
  key: 0,
  class: "item-subtitle"
}, $P = {
  key: 0,
  class: "installing-badge"
}, CP = ["title"], xP = {
  key: 2,
  class: "installed-badge"
}, SP = {
  key: 3,
  class: "queued-badge"
}, IP = {
  key: 4,
  class: "action-buttons"
}, EP = {
  key: 1,
  class: "no-action"
}, TP = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = P(() => o.items.filter((g) => g.canAction)), r = P(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, C;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((C = o.failedItems) == null ? void 0 : C.has(g.id));
      }
    )), c = P(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(g) {
      return o.queuedItems.has(g.id);
    }
    function d(g) {
      return o.installingItem === g.id;
    }
    function v(g) {
      var _;
      return ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function f(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.has(g.id)) ?? !1;
    }
    function p(g) {
      var _;
      return ((_ = o.failedItems) == null ? void 0 : _.get(g.id)) || "Unknown error";
    }
    function w(g) {
      return g.actions && g.actions.length > 0 ? g.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (g, _) => (a(), R($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => n("close"))
    }, {
      body: h(() => [
        s("div", hP, [
          s("span", yP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (a(), R(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (C) => n("bulk-action"))
          }, {
            default: h(() => [
              S(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", wP, [
          (a(!0), i(B, null, he(e.items, (C) => (a(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", _P, [
              s("span", kP, m(C.name), 1),
              C.subtitle ? (a(), i("span", bP, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), i(B, { key: 0 }, [
              d(C) ? (a(), i("span", $P, "Installing...")) : f(C) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, CP)) : v(C) ? (a(), i("span", xP, "Installed")) : u(C) ? (a(), i("span", SP, "Queued")) : (a(), i("div", IP, [
                (a(!0), i(B, null, he(w(C), ($) => (a(), R(Ne, {
                  key: `${C.id}-${$.key}`,
                  size: "sm",
                  variant: $.variant || "secondary",
                  onClick: (x) => n("action", C, $.key)
                }, {
                  default: h(() => [
                    S(m($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (a(), i("span", EP, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(Ne, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => n("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            S("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), MP = /* @__PURE__ */ Ie(TP, [["__scopeId", "data-v-ec7e9202"]]), PP = {
  key: 0,
  class: "loading-state"
}, RP = {
  key: 1,
  class: "analysis-results"
}, LP = {
  key: 0,
  class: "section"
}, DP = { class: "section-header" }, NP = { class: "section-title" }, OP = { class: "item-list" }, UP = { class: "package-info" }, AP = { class: "package-name" }, zP = { class: "node-count" }, FP = {
  key: 1,
  class: "installing-badge"
}, VP = {
  key: 2,
  class: "queued-badge"
}, BP = ["title"], WP = {
  key: 4,
  class: "installed-badge"
}, GP = {
  key: 1,
  class: "section"
}, jP = { class: "section-header" }, HP = { class: "section-title" }, qP = { class: "item-list" }, KP = { class: "node-type" }, JP = {
  key: 0,
  class: "overflow-note"
}, QP = {
  key: 2,
  class: "section"
}, YP = { class: "section-header" }, XP = { class: "section-title" }, ZP = { class: "item-list" }, e7 = { class: "node-type" }, t7 = { class: "not-found" }, s7 = {
  key: 0,
  class: "overflow-note"
}, o7 = {
  key: 3,
  class: "section"
}, n7 = { class: "section-header" }, a7 = { class: "section-title" }, l7 = { class: "item-list" }, i7 = { class: "package-info community-info" }, r7 = { class: "community-title-row" }, c7 = { class: "package-name" }, u7 = { class: "node-count" }, d7 = { class: "community-mapping-note" }, m7 = { key: 0 }, f7 = {
  key: 0,
  class: "community-actions"
}, v7 = {
  key: 1,
  class: "installing-badge"
}, p7 = {
  key: 2,
  class: "queued-badge"
}, g7 = ["title"], h7 = {
  key: 4,
  class: "installed-badge"
}, y7 = ["title"], w7 = {
  key: 1,
  class: "no-url"
}, _7 = {
  key: 4,
  class: "section"
}, k7 = { class: "section-header" }, b7 = { class: "section-title" }, $7 = { class: "item-list" }, C7 = { class: "model-info" }, x7 = { class: "model-name" }, S7 = {
  key: 1,
  class: "queued-badge"
}, I7 = {
  key: 1,
  class: "no-url"
}, E7 = { class: "dont-show-again" }, T7 = 3e4, M7 = /* @__PURE__ */ Ce({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: $ } = Lo(), { queueNodeInstall: x } = ct(), I = P(() => {
      var G;
      return ((G = n.value) == null ? void 0 : G.package_aliases) || {};
    });
    function T(G) {
      if (!G) return null;
      const de = I.value;
      let ye = G;
      const Qe = /* @__PURE__ */ new Set();
      for (; de[ye] && !Qe.has(ye); )
        Qe.add(ye), ye = de[ye];
      return ye;
    }
    function M(G, de) {
      return G instanceof Error && G.message ? G.message : typeof G == "string" && G.trim().length > 0 ? G : de;
    }
    function N(G) {
      for (const [de, ye] of _.value.entries())
        ye === G && _.value.delete(de);
    }
    function z(G) {
      if (!C.value.has(G)) return;
      const de = C.value.get(G);
      clearTimeout(de), C.value.delete(G);
    }
    function j() {
      for (const G of C.value.values())
        clearTimeout(G);
      C.value = /* @__PURE__ */ new Map();
    }
    function L(G) {
      z(G);
      const de = setTimeout(() => {
        if (C.value.delete(G), !c.value.has(G)) return;
        N(G), c.value.delete(G), f.value === G && (f.value = null), u.value.set(G, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", G);
      }, T7);
      C.value.set(G, de);
    }
    function K(G) {
      const de = `Cannot install "${G.title}" - package_id is missing`;
      u.value.set(G.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", G);
    }
    const ce = P(() => te.value.length > 0 || we.value.length > 0 || ee.value.length > 0 || W.value.length > 0 || O.value.length > 0), te = P(() => {
      var ye, Qe;
      if (!((ye = n.value) != null && ye.nodes)) return [];
      const G = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((D) => {
        var A;
        return !D.is_installed && ((A = D.package) == null ? void 0 : A.package_id);
      });
      for (const D of de) {
        const A = T(D.package.package_id);
        if (!A) continue;
        G.has(A) || G.set(A, {
          package_id: A,
          title: D.package.title || A,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const Z = G.get(A);
        Z.node_count++, Z.node_types.push(((Qe = D.reference) == null ? void 0 : Qe.node_type) || D.node_type);
      }
      return Array.from(G.values());
    }), Y = P(() => te.value.reduce((G, de) => G + de.node_count, 0)), we = P(() => {
      var G;
      return (G = n.value) != null && G.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var ye;
        return {
          node_type: ((ye = de.reference) == null ? void 0 : ye.node_type) || de.node_type
        };
      }) : [];
    }), ee = P(() => {
      var de;
      if (!((de = n.value) != null && de.nodes)) return [];
      const G = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((ye) => {
        var D;
        const Qe = ((D = ye.reference) == null ? void 0 : D.node_type) || ye.node_type;
        return {
          node_type: Qe,
          guidance: ye.guidance || G[Qe] || null
        };
      });
    }), W = P(() => {
      var ye, Qe, D, A, Z, Ae, ze, Le;
      if (!((ye = n.value) != null && ye.nodes)) return [];
      const G = n.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
      for (const je of n.value.nodes.uninstallable || []) {
        const nt = ((Qe = je.reference) == null ? void 0 : Qe.node_type) || je.node_type, kt = T(((D = je.package) == null ? void 0 : D.package_id) || null), Et = kt || `node:${nt}`;
        de.has(Et) || de.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((A = je.package) == null ? void 0 : A.title) || kt || nt,
          node_count: 0,
          package_id: kt,
          repository: ((Z = je.package) == null ? void 0 : Z.repository) || null,
          latest_version: ((Ae = je.package) == null ? void 0 : Ae.latest_version) || null,
          guidance: je.guidance || G[nt] || null
        });
        const re = de.get(Et);
        re.node_count++, re.guidance || (re.guidance = je.guidance || G[nt] || null), !re.repository && ((ze = je.package) != null && ze.repository) && (re.repository = je.package.repository), !re.latest_version && ((Le = je.package) != null && Le.latest_version) && (re.latest_version = je.package.latest_version);
      }
      return Array.from(de.values());
    }), Q = P(() => W.value.filter((G) => !!G.package_id)), ke = P(() => W.value.length >= 5 ? W.value.slice(0, 4) : W.value), se = P(() => Q.value.length > 0 && Q.value.every((G) => {
      const de = G.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function pe(G) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return G.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const O = P(() => {
      var D;
      if (!((D = n.value) != null && D.models)) return [];
      const G = (n.value.models.resolved || []).filter(
        (A) => A.match_type === "download_intent" || A.match_type === "property_download_intent" || A.match_type === "not_found"
      ).map((A) => {
        var Z, Ae, ze, Le;
        return {
          filename: ((Ae = (Z = A.reference) == null ? void 0 : Z.widget_value) == null ? void 0 : Ae.split("/").pop()) || ((ze = A.reference) == null ? void 0 : ze.widget_value) || A.widget_value,
          widget_value: ((Le = A.reference) == null ? void 0 : Le.widget_value) || A.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: A.download_source || null,
          targetPath: A.target_path || null,
          canDownload: !!(A.download_source && A.target_path)
        };
      }), de = (n.value.models.unresolved || []).map((A) => {
        var Z, Ae, ze, Le;
        return {
          filename: ((Ae = (Z = A.reference) == null ? void 0 : Z.widget_value) == null ? void 0 : Ae.split("/").pop()) || ((ze = A.reference) == null ? void 0 : ze.widget_value) || A.widget_value,
          widget_value: ((Le = A.reference) == null ? void 0 : Le.widget_value) || A.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), ye = /* @__PURE__ */ new Map(), Qe = [];
      for (const A of G) {
        if (!A.url) {
          Qe.push(A);
          continue;
        }
        const Z = `${A.filename}::${A.url}`, Ae = ye.get(Z);
        if (!Ae) {
          ye.set(Z, A);
          continue;
        }
        !Ae.targetPath && A.targetPath && (Ae.targetPath = A.targetPath), !Ae.canDownload && A.canDownload && (Ae.canDownload = A.canDownload);
      }
      return [...ye.values(), ...Qe, ...de];
    }), ue = P(() => O.value.filter((G) => G.canDownload)), Pe = P(() => te.value.length >= 5 ? te.value.slice(0, 4) : te.value), _e = P(() => O.value.length >= 5 ? O.value.slice(0, 4) : O.value), De = P(() => te.value.length > 0 && te.value.every(
      (G) => r.value.has(G.package_id) || c.value.has(G.package_id) || u.value.has(G.package_id)
    )), Ue = P(() => ue.value.length > 0 && ue.value.every((G) => d.value.has(G.url))), Ve = P(() => te.value.length > 0 || Q.value.length > 0 || ue.value.length > 0), le = P(() => {
      const G = (te.value.length === 0 || De.value) && (Q.value.length === 0 || se.value), de = ue.value.length === 0 || Ue.value;
      return G && de;
    }), oe = P(() => w.value === "models" ? `Missing Models (${O.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${W.value.length})` : ""), Re = P(() => w.value === "models" ? O.value.map((G) => ({
      id: G.url || G.widget_value,
      name: G.filename,
      canAction: G.canDownload,
      actionDisabledReason: G.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? te.value.map((G) => ({
      id: G.package_id,
      name: G.title,
      subtitle: `(${G.node_count} ${G.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? W.value.map((G) => ({
      id: G.package_id || G.item_id,
      name: G.title,
      subtitle: `(${G.node_count} ${G.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!G.package_id,
      actionDisabledReason: G.package_id ? void 0 : "Manual setup required",
      actions: G.package_id ? pe(G) : []
    })) : []);
    function fe(G, de) {
      if (w.value === "models") {
        const ye = O.value.find((Qe) => Qe.url === G.id || Qe.widget_value === G.id);
        ye && Ee(ye);
      } else if (w.value === "packages") {
        const ye = te.value.find((Qe) => Qe.package_id === G.id);
        ye && E(ye);
      } else if (w.value === "community") {
        const ye = W.value.find((D) => (D.package_id || D.item_id) === G.id);
        if (!ye) return;
        if (!ye.package_id) {
          K({ item_id: ye.item_id, title: ye.title });
          return;
        }
        U(ye, de === "install_git" ? "git" : "registry");
      }
    }
    function ae() {
      w.value === "models" ? X() : w.value === "packages" ? xe() : w.value === "community" && Se();
    }
    async function E(G) {
      return ie(G.package_id, G.latest_version, "registry");
    }
    async function U(G, de) {
      return G.package_id ? ie(G.package_id, G.latest_version, de, G.repository) : (K({ item_id: G.item_id, title: G.title }), !1);
    }
    async function ie(G, de, ye, Qe) {
      const D = T(G) || G, A = de || "latest";
      if (r.value.has(D) || c.value.has(D) || u.value.has(D))
        return !0;
      Fe(), f.value = D;
      let Z = null;
      try {
        const Ae = {
          id: D,
          version: A,
          selected_version: A,
          mode: "remote",
          channel: "default"
        };
        ye === "git" && Qe && (Ae.repository = Qe, Ae.install_source = "git");
        const { ui_id: ze } = await x(Ae, {
          beforeQueueStart: (Le) => {
            Z = Le, _.value.set(Le, D), c.value.add(D), L(D), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Le,
              packageId: D,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return Z || (Z = ze, _.value.set(ze, D), c.value.add(D), L(D), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: ze,
          packageId: D,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Ae) {
        const ze = M(Ae, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Ae), Z && _.value.delete(Z), N(D), z(D), c.value.delete(D), u.value.set(D, ze), !1;
      } finally {
        f.value = null;
      }
    }
    function Ee(G) {
      !G.url || !G.targetPath || d.value.has(G.url) || ($([{
        workflow: "unsaved",
        filename: G.filename,
        url: G.url,
        targetPath: G.targetPath
      }]), d.value.add(G.url));
    }
    async function xe() {
      const G = { attempted: 0, failed: 0 };
      for (const de of te.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (G.attempted++, await E(de) || G.failed++);
      return G;
    }
    async function Se() {
      const G = { attempted: 0, failed: 0 };
      for (const de of Q.value) {
        const ye = de.package_id;
        !r.value.has(ye) && !c.value.has(ye) && !u.value.has(ye) && (G.attempted++, await U(de, "registry") || G.failed++);
      }
      return G;
    }
    function X() {
      const G = ue.value.filter(
        (de) => !d.value.has(de.url)
      );
      if (G.length === 0) return 0;
      $(G.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of G)
        d.value.add(de.url);
      return G.length;
    }
    async function H() {
      const G = await xe(), de = await Se();
      X();
      const ye = G.attempted + de.attempted, Qe = G.failed + de.failed;
      if (ye > 0 && Qe > 0) {
        const D = ye - Qe;
        o.value = `${D} of ${ye} installs queued, ${Qe} failed`;
      }
    }
    function ve() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function be(G) {
      var D, A;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = G == null ? void 0 : G.id;
      if (de && g.value.has(de)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${de} this session`);
        return;
      }
      const ye = window.app, Qe = (D = ye == null ? void 0 : ye.extensionManager) == null ? void 0 : D.workflow;
      if (Qe) {
        let ze = !1;
        for (let Le = 0; Le < 20; Le++) {
          const je = Qe.activeWorkflow;
          if (!je) {
            await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          const nt = (A = je.activeState) == null ? void 0 : A.id;
          if (!(de && nt === de)) {
            Le < 19 && await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          if (ze = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), de && g.value.add(de);
            return;
          }
          break;
        }
        ze || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Z = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: G, name: "unsaved" })
        });
        if (!Z.ok) {
          const Ae = await Z.json();
          throw new Error(Ae.error || "Failed to analyze workflow");
        }
        n.value = await Z.json(), ce.value && (l.value = !0, de && g.value.add(de));
      } catch (Z) {
        console.error("[ComfyGit] Failed to analyze workflow:", Z);
      } finally {
        t.value = !1;
      }
    }
    function Ke() {
      j(), l.value = !1, n.value = null;
    }
    function We(G) {
      const { workflow: de } = G.detail;
      de && be(de);
    }
    function ge(G) {
      var Qe;
      const de = (Qe = G.detail) == null ? void 0 : Qe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: G.detail
      });
      const ye = _.value.get(de);
      ye ? (z(ye), f.value = ye, console.log("[ComfyGit] Installing package:", ye)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function J(G) {
      var D, A, Z, Ae, ze, Le, je;
      const de = (D = G.detail) == null ? void 0 : D.ui_id, ye = (Z = (A = G.detail) == null ? void 0 : A.status) == null ? void 0 : Z.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: ye,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: G.detail
      });
      const Qe = _.value.get(de);
      if (Qe) {
        if (z(Qe), _.value.delete(de), c.value.delete(Qe), f.value === Qe && (f.value = null), ye === "success")
          r.value.add(Qe), p.value++, console.log("[ComfyGit] Package installed successfully:", Qe);
        else {
          const nt = ((Le = (ze = (Ae = G.detail) == null ? void 0 : Ae.status) == null ? void 0 : ze.messages) == null ? void 0 : Le[0]) || ((je = G.detail) == null ? void 0 : je.result) || "Unknown error";
          u.value.set(Qe, nt), console.error("[ComfyGit] Package install failed:", Qe, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", de);
    }
    let qe = null;
    function Te() {
      var G;
      return qe || (qe = (G = window.app) == null ? void 0 : G.api), qe;
    }
    let Xe = !1;
    function Fe() {
      if (Xe) return !0;
      const G = Te();
      return G ? (G.addEventListener("cm-task-started", ge), G.addEventListener("cm-task-completed", J), G.addEventListener("comfygit:workflow-changed", Oe), Xe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Oe(G) {
      const { change_type: de } = G.detail;
      (de === "created" || de === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", We);
    }), Po(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", We), Xe) {
        const G = Te();
        G && (G.removeEventListener("cm-task-started", ge), G.removeEventListener("cm-task-completed", J), G.removeEventListener("comfygit:workflow-changed", Oe)), Xe = !1;
      }
    }), (G, de) => (a(), i(B, null, [
      l.value ? (a(), R($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (a(), i("div", PP, [...de[5] || (de[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ce.value ? (a(), i("div", RP, [
            te.value.length > 0 ? (a(), i("div", LP, [
              s("div", DP, [
                s("span", NP, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                te.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: De.value,
                  onClick: xe
                }, {
                  default: h(() => [
                    S(m(De.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", OP, [
                (a(!0), i(B, null, he(Pe.value, (ye) => (a(), i("div", {
                  key: ye.package_id,
                  class: "package-item"
                }, [
                  s("div", UP, [
                    s("span", AP, m(ye.title), 1),
                    s("span", zP, "(" + m(ye.node_count) + " " + m(ye.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ye.package_id) && !c.value.has(ye.package_id) && !u.value.has(ye.package_id) ? (a(), R(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === ye.package_id,
                    onClick: (Qe) => E(ye)
                  }, {
                    default: h(() => [
                      S(m(f.value === ye.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === ye.package_id ? (a(), i("span", FP, "Installing...")) : c.value.has(ye.package_id) ? (a(), i("span", VP, "Queued")) : u.value.has(ye.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ye.package_id)
                  }, "Failed ⚠", 8, BP)) : (a(), i("span", WP, "Installed"))
                ]))), 128)),
                te.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[0] || (de[0] = (ye) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(te.value.length) + " packages...", 1),
                  de[6] || (de[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (a(), i("div", GP, [
              s("div", jP, [
                s("span", HP, "Unknown Nodes (" + m(we.value.length) + ")", 1)
              ]),
              s("div", qP, [
                (a(!0), i(B, null, he(we.value.slice(0, 5), (ye) => (a(), i("div", {
                  key: ye.node_type,
                  class: "item"
                }, [
                  s("code", KP, m(ye.node_type), 1),
                  de[7] || (de[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (a(), i("div", JP, " ...and " + m(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (a(), i("div", QP, [
              s("div", YP, [
                s("span", XP, "Requires Newer ComfyUI (" + m(ee.value.length) + ")", 1)
              ]),
              s("div", ZP, [
                (a(!0), i(B, null, he(ee.value.slice(0, 5), (ye) => (a(), i("div", {
                  key: `vg-${ye.node_type}`,
                  class: "item"
                }, [
                  s("code", e7, m(ye.node_type), 1),
                  s("span", t7, m(ye.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ee.value.length > 5 ? (a(), i("div", s7, " ...and " + m(ee.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (a(), i("div", o7, [
              s("div", n7, [
                s("span", a7, "Community-Mapped Packages (" + m(W.value.length) + ")", 1),
                Q.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: se.value,
                  onClick: Se
                }, {
                  default: h(() => [
                    S(m(se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", l7, [
                (a(!0), i(B, null, he(ke.value, (ye) => (a(), i("div", {
                  key: `community-${ye.item_id}`,
                  class: "package-item"
                }, [
                  s("div", i7, [
                    s("div", r7, [
                      s("span", c7, m(ye.title), 1),
                      s("span", u7, "(" + m(ye.node_count) + " " + m(ye.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", d7, [
                      de[8] || (de[8] = S(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ye.guidance ? (a(), i("span", m7, ". " + m(ye.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ye.package_id ? (a(), i(B, { key: 0 }, [
                    !r.value.has(ye.package_id) && !c.value.has(ye.package_id) && !u.value.has(ye.package_id) ? (a(), i("div", f7, [
                      b(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === ye.package_id,
                        onClick: (Qe) => U(ye, "registry")
                      }, {
                        default: h(() => [
                          S(m(f.value === ye.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ye.repository ? (a(), R(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === ye.package_id,
                        onClick: (Qe) => U(ye, "git")
                      }, {
                        default: h(() => [...de[9] || (de[9] = [
                          S(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : f.value === ye.package_id ? (a(), i("span", v7, "Installing...")) : c.value.has(ye.package_id) ? (a(), i("span", p7, "Queued")) : u.value.has(ye.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ye.package_id)
                    }, "Failed ⚠", 8, g7)) : (a(), i("span", h7, "Installed"))
                  ], 64)) : (a(), i(B, { key: 1 }, [
                    u.value.has(ye.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ye.item_id)
                    }, "Failed ⚠", 8, y7)) : (a(), i("span", w7, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                W.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[1] || (de[1] = (ye) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(W.value.length) + " packages...", 1),
                  de[10] || (de[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            O.value.length > 0 ? (a(), i("div", _7, [
              s("div", k7, [
                s("span", b7, "Missing Models (" + m(O.value.length) + ")", 1),
                ue.value.length > 1 ? (a(), R(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Ue.value,
                  onClick: X
                }, {
                  default: h(() => [
                    S(m(Ue.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", $7, [
                (a(!0), i(B, null, he(_e.value, (ye) => (a(), i("div", {
                  key: ye.widget_value,
                  class: "model-item"
                }, [
                  s("div", C7, [
                    s("span", x7, m(ye.filename), 1)
                  ]),
                  ye.canDownload ? (a(), i(B, { key: 0 }, [
                    d.value.has(ye.url) ? (a(), i("span", S7, "Queued")) : (a(), R(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Qe) => Ee(ye)
                    }, {
                      default: h(() => [...de[11] || (de[11] = [
                        S(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (a(), i("span", I7, "Manual download required"))
                ]))), 128)),
                O.value.length >= 5 ? (a(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: de[2] || (de[2] = (ye) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(O.value.length) + " models...", 1),
                  de[12] || (de[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", E7, [
              b(Qn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  de[3] || (de[3] = (ye) => v.value = ye),
                  ve
                ]
              }, {
                default: h(() => [...de[13] || (de[13] = [
                  S(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(Ne, {
            variant: "secondary",
            onClick: Ke
          }, {
            default: h(() => [...de[14] || (de[14] = [
              S("Dismiss", -1)
            ])]),
            _: 1
          }),
          Ve.value ? (a(), R(Ne, {
            key: 0,
            variant: "primary",
            disabled: le.value,
            onClick: H
          }, {
            default: h(() => [
              S(m(le.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), R(MP, {
        key: 1,
        title: oe.value,
        items: Re.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: de[4] || (de[4] = (ye) => w.value = null),
        onAction: fe,
        onBulkAction: ae
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), P7 = /* @__PURE__ */ Ie(M7, [["__scopeId", "data-v-dfb55c3f"]]), R7 = {
  key: 0,
  class: "io-mapping-root"
}, L7 = { class: "io-mapping-visual-layer" }, D7 = { class: "io-mapping-header" }, N7 = { class: "io-mapping-header-main" }, O7 = { class: "io-mapping-subtitle" }, U7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, A7 = { class: "io-mapping-header-actions" }, z7 = { class: "io-mapping-sidebar" }, F7 = { class: "io-mapping-sidebar-scroll" }, V7 = {
  key: 0,
  class: "io-state-block"
}, B7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, W7 = { class: "contract-meta-section" }, G7 = { class: "contract-meta-toggle-icon" }, j7 = {
  key: 0,
  class: "contract-meta-body"
}, H7 = { class: "contract-summary" }, q7 = { class: "summary-pill" }, K7 = { class: "summary-pill" }, J7 = { class: "summary-pill" }, Q7 = { class: "mapping-section" }, Y7 = { class: "section-header" }, X7 = {
  key: 0,
  class: "empty-message"
}, Z7 = ["onClick"], eR = { class: "item-card-title" }, tR = { class: "item-card-meta" }, sR = { class: "item-card-summary" }, oR = { key: 0 }, nR = { class: "mapping-section" }, aR = { class: "section-header" }, lR = {
  key: 0,
  class: "empty-message"
}, iR = ["onClick"], rR = { class: "item-card-title" }, cR = { class: "item-card-meta" }, uR = { class: "item-card-summary" }, dR = { class: "io-mapping-footer" }, mR = { class: "io-mapping-footer-left" }, fR = { class: "io-mapping-footer-right" }, vR = /* @__PURE__ */ Ce({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = k(null), x = k(0), I = k(null), T = k(null);
    let M = null;
    const N = [
      "string",
      "integer",
      "number",
      "boolean",
      "enum",
      "image",
      "video",
      "audio",
      "file"
    ], z = [
      { label: "Required", value: "true" },
      { label: "Optional", value: "false" }
    ], j = P(() => {
      var D;
      return ((D = p.value) == null ? void 0 : D.contract_summary.has_contract) === !0;
    }), L = P(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const D = w.value.default_contract || "default";
      return w.value.contracts[D] || (w.value.contracts[D] = { inputs: [], outputs: [] }), w.value.contracts[D];
    }), K = P(() => {
      var A;
      const D = ((A = p.value) == null ? void 0 : A.contract_summary.status) ?? "none";
      return D === "valid" ? "Valid Contract" : D === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ce(D) {
      return D ? JSON.parse(JSON.stringify(D)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function te(D) {
      return D === "integer" || D === "number";
    }
    function Y(D) {
      return D === "enum";
    }
    function we(D) {
      return D == null ? "" : String(D);
    }
    function ee(D) {
      const A = D.trim();
      if (!A) return;
      const Z = Number(A);
      return Number.isFinite(Z) ? Z : void 0;
    }
    function W(D) {
      return (D || []).join(`
`);
    }
    function Q(D) {
      return D.split(/[\n,]/).map((A) => A.trim()).filter(Boolean);
    }
    function ke(D) {
      return typeof D == "string" ? D.length > 24 ? `${D.slice(0, 24)}...` : D : String(D);
    }
    function se(D) {
      return D == null ? "" : String(D);
    }
    function pe(D) {
      var Z;
      const A = (Z = D == null ? void 0 : D.options) == null ? void 0 : Z.values;
      return Array.isArray(A) ? A.map((Ae) => String(Ae)).filter(Boolean) : [];
    }
    function O(D, A) {
      var ze;
      const Z = (ze = D == null ? void 0 : D.options) == null ? void 0 : ze[A];
      if (Z == null || Z === "") return;
      const Ae = Number(Z);
      return Number.isFinite(Ae) ? Ae : void 0;
    }
    function ue(D, A) {
      return D.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || A;
    }
    function Pe(D) {
      if (!w.value) return;
      const A = D.trim() || "default";
      w.value.default_contract = A, w.value.contracts[A] || (w.value.contracts[A] = { inputs: [], outputs: [] });
    }
    function _e(D) {
      const A = String(D ?? "").toLowerCase();
      return A.includes("image") ? "image" : A.includes("video") ? "video" : A.includes("audio") ? "audio" : A.includes("int") ? "integer" : A.includes("float") || A.includes("double") || A.includes("number") ? "number" : A.includes("bool") ? "boolean" : A.includes("combo") || A.includes("enum") ? "enum" : A.includes("string") || A.includes("text") ? "string" : "file";
    }
    function De(D) {
      L.value.inputs.splice(D, 1), C.value === D && (C.value = null);
    }
    function Ue(D) {
      L.value.outputs.splice(D, 1), $.value === D && ($.value = null);
    }
    function Ve(D) {
      C.value = C.value === D ? null : D, C.value != null && ($.value = null);
    }
    function le(D) {
      $.value = $.value === D ? null : D, $.value != null && (C.value = null);
    }
    function oe(D) {
      const A = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(D)) : String(D);
      return document.querySelector(`[data-node-id="${A}"]`);
    }
    function Re(D) {
      return D instanceof Element ? !!D.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function fe(D) {
      var Ae, ze, Le, je, nt, kt;
      if (!(D instanceof Element)) return null;
      const A = D.closest("[data-node-id]"), Z = A == null ? void 0 : A.getAttribute("data-node-id");
      return Z ? ((Le = (ze = (Ae = t.comfyApp) == null ? void 0 : Ae.graph) == null ? void 0 : ze.getNodeById) == null ? void 0 : Le.call(ze, Z)) ?? ((kt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : kt.call(nt, Z)) ?? null : null;
    }
    function ae(D, A) {
      if (A == null || A < 0) return null;
      const Z = oe(D);
      return Z ? Z.querySelectorAll('[data-testid="node-widget"]')[A] ?? null : null;
    }
    function E(D) {
      return !D || D.width <= 0 || D.height <= 0 ? null : {
        left: `${D.left}px`,
        top: `${D.top}px`,
        width: `${D.width}px`,
        height: `${D.height}px`
      };
    }
    function U(D) {
      const A = oe((D == null ? void 0 : D.id) ?? "");
      if (A) return A.getBoundingClientRect();
      const Z = t.comfyApp;
      if (!D || typeof (Z == null ? void 0 : Z.canvasPosToClientPos) != "function") return null;
      const ze = Z.canvasPosToClientPos([D.pos[0], D.pos[1] - 32]), Le = Z.canvasPosToClientPos([D.pos[0] + D.size[0], D.pos[1] + D.size[1]]);
      return !ze || !Le ? null : new DOMRect(ze[0], ze[1], Le[0] - ze[0], Le[1] - ze[1]);
    }
    function ie(D) {
      var nt, kt, Et, re, F, me, Ge;
      const A = ae(D.node_id, D.widget_idx);
      if (A) return A.getBoundingClientRect();
      const Z = ((Et = (kt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : kt.getNodeById) == null ? void 0 : Et.call(kt, String(D.node_id))) ?? ((me = (F = (re = t.comfyApp) == null ? void 0 : re.rootGraph) == null ? void 0 : F.getNodeById) == null ? void 0 : me.call(F, String(D.node_id)));
      if (!Z || typeof D.widget_idx != "number" || !Array.isArray(Z.widgets)) return null;
      const Ae = Z.widgets[D.widget_idx];
      if (!Ae || typeof ((Ge = t.comfyApp) == null ? void 0 : Ge.canvasPosToClientPos) != "function") return U(Z);
      const ze = 10, Le = t.comfyApp.canvasPosToClientPos([Z.pos[0] + ze, Z.pos[1] + (Ae.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([Z.pos[0] + Z.size[0] - ze, Z.pos[1] + (Ae.y ?? 0) + (Ae.computedHeight ?? 24)]);
      return !Le || !je ? U(Z) : new DOMRect(Le[0], Le[1], je[0] - Le[0], je[1] - Le[1]);
    }
    function Ee(D) {
      var Z, Ae, ze, Le, je, nt;
      const A = ((ze = (Ae = (Z = t.comfyApp) == null ? void 0 : Z.graph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : ze.call(Ae, String(D.node_id))) ?? ((nt = (je = (Le = t.comfyApp) == null ? void 0 : Le.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(D.node_id)));
      return U(A);
    }
    const xe = P(() => (x.value, L.value.inputs.map((D, A) => {
      const Z = E(ie(D));
      return Z ? {
        key: `input-${A}-${D.node_id}-${D.widget_idx ?? "na"}`,
        style: Z,
        active: C.value === A
      } : null;
    }).filter((D) => !!D))), Se = P(() => (x.value, L.value.outputs.map((D, A) => {
      const Z = E(Ee(D));
      return Z ? {
        key: `output-${A}-${D.node_id}-${D.selector ?? "primary"}`,
        style: Z,
        active: $.value === A
      } : null;
    }).filter((D) => !!D)));
    function X(D) {
      var Et, re, F, me, Ge, dt, xt, it, St, ts;
      if (Re(D.target)) return null;
      const A = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!A) return null;
      const Z = (re = A.convertEventToCanvasOffset) == null ? void 0 : re.call(A, D);
      if (!Z || Z.length < 2) return null;
      const [Ae, ze] = Z, Le = A.graph || ((F = t.comfyApp) == null ? void 0 : F.graph) || ((me = t.comfyApp) == null ? void 0 : me.rootGraph), je = ((Ge = Le == null ? void 0 : Le.getNodeOnPos) == null ? void 0 : Ge.call(Le, Ae, ze, A.visible_nodes)) || ((dt = A.getNodeOnPos) == null ? void 0 : dt.call(A, Ae, ze)) || fe(D.target);
      if (!je) return null;
      const nt = (xt = je.getWidgetOnPos) == null ? void 0 : xt.call(je, Ae, ze, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: Ae, canvasY: ze };
      const kt = ((it = je.getOutputOnPos) == null ? void 0 : it.call(je, [Ae, ze])) || ((ts = (St = je.constructor) == null ? void 0 : St.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: je, output: kt, canvasX: Ae, canvasY: ze } : null;
    }
    function H(D, A) {
      var nt;
      const Z = Array.isArray(D.widgets) ? D.widgets.indexOf(A) : -1, Ae = L.value.inputs.findIndex(
        (kt) => String(kt.node_id) === String(D.id) && kt.widget_idx === Z
      );
      if (Ae >= 0) {
        C.value = Ae;
        return;
      }
      const ze = typeof ((nt = A == null ? void 0 : A.options) == null ? void 0 : nt.property) == "string" ? A.options.property : void 0, Le = (A == null ? void 0 : A.name) || ze || "input", je = {
        name: ue(String(Le), `input_${L.value.inputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || ze || `Input ${L.value.inputs.length + 1}`),
        type: _e(A == null ? void 0 : A.type),
        node_id: String(D.id),
        widget_idx: Z >= 0 ? Z : void 0,
        field_key: ze,
        required: !0,
        default: (A == null ? void 0 : A.value) ?? ""
      };
      te(je.type) && (je.min = O(A, "min"), je.max = O(A, "max")), Y(je.type) && (je.enum_values = pe(A)), L.value.inputs.push(je), C.value = L.value.inputs.length - 1, $.value = null;
    }
    function ve(D, A) {
      const Z = Array.isArray(D.outputs) ? D.outputs.indexOf(A) : -1, Ae = Z >= 0 ? `slot:${Z}` : "primary", ze = L.value.outputs.findIndex(
        (je) => String(je.node_id) === String(D.id) && (je.selector || "primary") === Ae
      );
      if (ze >= 0) {
        $.value = ze;
        return;
      }
      const Le = {
        name: ue(String((A == null ? void 0 : A.name) || "output"), `output_${L.value.outputs.length + 1}`),
        display_name: String((A == null ? void 0 : A.name) || `Output ${L.value.outputs.length + 1}`),
        type: _e(A == null ? void 0 : A.type),
        node_id: String(D.id),
        selector: Ae
      };
      L.value.outputs.push(Le), $.value = L.value.outputs.length - 1, C.value = null;
    }
    function be(D) {
      var Ae, ze, Le;
      if (!r.value) {
        I.value = null, T.value = null;
        return;
      }
      const A = X(D);
      if (!A) {
        I.value = null, T.value = null;
        return;
      }
      if (A.kind === "input") {
        const je = Array.isArray(A.node.widgets) ? A.node.widgets.indexOf(A.widget) : -1, nt = E(((Ae = ae(A.node.id, je)) == null ? void 0 : Ae.getBoundingClientRect()) ?? ie({
          node_id: String(A.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          I.value = null, T.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((ze = A.widget) == null ? void 0 : ze.name) || "widget"} · Node ${A.node.id}`
        }, T.value = { kind: "input", style: nt };
        return;
      }
      const Z = E(U(A.node));
      if (!Z) {
        I.value = null, T.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((Le = A.output) == null ? void 0 : Le.name) || A.node.title || A.node.type || "output"} · Node ${A.node.id}`
      }, T.value = { kind: "output", style: Z };
    }
    function Ke(D) {
      var Ae, ze, Le;
      if (!r.value || !w.value || D.button !== 0) return;
      const A = X(D);
      if (!A) return;
      const Z = (Ae = t.comfyApp) == null ? void 0 : Ae.canvas;
      if (Z) {
        if (A.kind === "input") {
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(Z.graph_mouse) && (Z.graph_mouse[0] = A.canvasX, Z.graph_mouse[1] = A.canvasY), (ze = Z.selectNode) == null || ze.call(Z, A.node, !1), H(A.node, A.widget);
          return;
        }
        D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(Z.graph_mouse) && (Z.graph_mouse[0] = A.canvasX, Z.graph_mouse[1] = A.canvasY), (Le = Z.selectNode) == null || Le.call(Z, A.node, !1), ve(A.node, A.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", Ke, !0), document.addEventListener("pointermove", be, !0);
    }
    function ge() {
      document.removeEventListener("pointerdown", Ke, !0), document.removeEventListener("pointermove", be, !0);
    }
    async function J() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = ce(p.value.execution_contract);
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function qe() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await n(c.value, w.value), w.value = ce(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Te() {
      _.value = !0;
    }
    async function Xe() {
      if (c.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Oe({ reopenPanel: !0 });
        } catch (D) {
          f.value = D instanceof Error ? D.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function Fe() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Oe(D) {
      r.value = !1, I.value = null, T.value = null, _.value = !1, D != null && D.reopenPanel && Fe();
    }
    async function G(D) {
      var Ae, ze;
      const Z = (ze = (Ae = D.detail) == null ? void 0 : Ae.workflowName) == null ? void 0 : ze.trim();
      Z && (c.value = Z, C.value = null, $.value = null, g.value = !1, r.value = !0, await J());
    }
    function de(D) {
      if (D.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Oe({ reopenPanel: !0 });
      }
    }
    function ye() {
      if (M != null) return;
      const D = () => {
        if (x.value += 1, !r.value) {
          M = null;
          return;
        }
        M = window.requestAnimationFrame(D);
      };
      M = window.requestAnimationFrame(D);
    }
    function Qe() {
      M != null && (window.cancelAnimationFrame(M), M = null);
    }
    return pt(r, (D) => {
      D ? (We(), ye()) : (ge(), Qe());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", G), window.addEventListener("keydown", de);
    }), pn(() => {
      ge(), Qe(), window.removeEventListener("comfygit:open-io-mapping", G), window.removeEventListener("keydown", de);
    }), (D, A) => r.value ? (a(), i("div", R7, [
      s("div", L7, [
        (a(!0), i(B, null, he(xe.value, (Z) => (a(), i("div", {
          key: Z.key,
          class: Be(["io-highlight", "io-highlight-input", { active: Z.active }]),
          style: Rt(Z.style)
        }, null, 6))), 128)),
        (a(!0), i(B, null, he(Se.value, (Z) => (a(), i("div", {
          key: Z.key,
          class: Be(["io-highlight", "io-highlight-output", { active: Z.active }]),
          style: Rt(Z.style)
        }, null, 6))), 128)),
        T.value ? (a(), i("div", {
          key: 0,
          class: Be(["io-highlight", T.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Rt(T.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", D7, [
        s("div", N7, [
          A[8] || (A[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", O7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (a(), i("div", U7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", A7, [
          b(Ne, {
            size: "sm",
            variant: "secondary",
            onClick: A[0] || (A[0] = (Z) => Oe({ reopenPanel: !0 }))
          }, {
            default: h(() => [...A[9] || (A[9] = [
              S(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", z7, [
        s("div", F7, [
          u.value ? (a(), i("div", V7, " Loading workflow contract... ")) : f.value ? (a(), i("div", B7, m(f.value), 1)) : w.value ? (a(), i(B, { key: 2 }, [
            s("section", W7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: A[1] || (A[1] = (Z) => g.value = !g.value)
              }, [
                A[10] || (A[10] = s("span", null, "Contract Details", -1)),
                s("span", G7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (a(), i("div", j7, [
                b(Nt, { label: "Default Contract" }, {
                  default: h(() => [
                    b(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Nt, { label: "Display Name" }, {
                  default: h(() => [
                    b(bt, {
                      modelValue: L.value.display_name,
                      "onUpdate:modelValue": A[2] || (A[2] = (Z) => L.value.display_name = Z),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Nt, { label: "Description" }, {
                  default: h(() => [
                    b(xo, {
                      modelValue: L.value.description,
                      "onUpdate:modelValue": A[3] || (A[3] = (Z) => L.value.description = Z),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", H7, [
              s("span", q7, m(K.value), 1),
              s("span", K7, m(L.value.inputs.length) + " input" + m(L.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", J7, m(L.value.outputs.length) + " output" + m(L.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", Q7, [
              s("div", Y7, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...A[11] || (A[11] = [
                    S("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.inputs.length ? y("", !0) : (a(), i("div", X7, " No inputs configured. ")),
              (a(!0), i(B, null, he(L.value.inputs, (Z, Ae) => (a(), i("div", {
                key: `input-${Ae}`,
                class: Be(["item-card", { selected: C.value === Ae }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (ze) => Ve(Ae)
                }, [
                  s("div", null, [
                    s("div", eR, m(Z.name || `Input ${Ae + 1}`), 1),
                    s("div", tR, [
                      S(" Node " + m(Z.node_id || "?"), 1),
                      Z.widget_idx !== void 0 ? (a(), i(B, { key: 0 }, [
                        S(" · Widget " + m(Z.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", sR, [
                      s("span", null, m(Z.type || "string"), 1),
                      s("span", null, m(Z.required ? "required" : "optional"), 1),
                      Z.default !== void 0 && Z.default !== "" ? (a(), i("span", oR, "default " + m(ke(Z.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((ze) => De(Ae), ["stop"])
                  }, {
                    default: h(() => [...A[12] || (A[12] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, Z7),
                C.value === Ae ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: A[4] || (A[4] = gt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Z.name,
                        "onUpdate:modelValue": (ze) => Z.name = ze,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Z.display_name,
                        "onUpdate:modelValue": (ze) => Z.display_name = ze,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(On, {
                        "model-value": Z.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (ze) => Z.type = ze
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Required" }, {
                    default: h(() => [
                      b(On, {
                        "model-value": Z.required ? "true" : "false",
                        options: z,
                        "full-width": "",
                        "onUpdate:modelValue": (ze) => Z.required = ze === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, {
                    class: Be({ "item-grid-full": Z.type === "string" || Z.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      Z.type === "string" ? (a(), R(xo, {
                        key: 0,
                        "model-value": se(Z.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (ze) => Z.default = ze
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (a(), R(bt, {
                        key: 1,
                        modelValue: Z.default,
                        "onUpdate:modelValue": (ze) => Z.default = ze,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  te(Z.type) ? (a(), R(Nt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(Z.min),
                        "full-width": "",
                        "onUpdate:modelValue": (ze) => Z.min = ee(ze)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  te(Z.type) ? (a(), R(Nt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(Z.max),
                        "full-width": "",
                        "onUpdate:modelValue": (ze) => Z.max = ee(ze)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Y(Z.type) ? (a(), R(Nt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": W(Z.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (ze) => Z.enum_values = Q(ze)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", nR, [
              s("div", aR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...A[13] || (A[13] = [
                    S("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.outputs.length ? y("", !0) : (a(), i("div", lR, " No outputs configured. ")),
              (a(!0), i(B, null, he(L.value.outputs, (Z, Ae) => (a(), i("div", {
                key: `output-${Ae}`,
                class: Be(["item-card", { selected: $.value === Ae }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (ze) => le(Ae)
                }, [
                  s("div", null, [
                    s("div", rR, m(Z.name || `Output ${Ae + 1}`), 1),
                    s("div", cR, [
                      S(" Node " + m(Z.node_id || "?"), 1),
                      Z.selector ? (a(), i(B, { key: 0 }, [
                        S(" · " + m(Z.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", uR, [
                      s("span", null, m(Z.type || "file"), 1)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: gt((ze) => Ue(Ae), ["stop"])
                  }, {
                    default: h(() => [...A[14] || (A[14] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, iR),
                $.value === Ae ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: A[5] || (A[5] = gt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Z.name,
                        "onUpdate:modelValue": (ze) => Z.name = ze,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: Z.display_name,
                        "onUpdate:modelValue": (ze) => Z.display_name = ze,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(On, {
                        "model-value": Z.type,
                        options: N,
                        "full-width": "",
                        "onUpdate:modelValue": (ze) => Z.type = ze
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", dR, [
          s("div", mR, [
            b(Ne, {
              variant: "secondary",
              onClick: A[6] || (A[6] = (Z) => Oe({ reopenPanel: !0 }))
            }, {
              default: h(() => [...A[15] || (A[15] = [
                S(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", fR, [
            b(Ne, {
              variant: "danger",
              disabled: !j.value,
              loading: v.value,
              onClick: Te
            }, {
              default: h(() => [...A[16] || (A[16] = [
                S(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(Ne, {
              variant: "primary",
              loading: d.value,
              onClick: qe
            }, {
              default: h(() => [...A[17] || (A[17] = [
                S(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (a(), R(Tl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Xe,
        onCancel: A[7] || (A[7] = (Z) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), pR = /* @__PURE__ */ Ie(vR, [["__scopeId", "data-v-13515b27"]]), gR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', hR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', yR = {
  comfy: gR,
  phosphor: hR
}, Rl = "comfy", Ec = "comfygit-theme";
let eo = null, Tc = Rl;
function wR() {
  try {
    const e = localStorage.getItem(Ec);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Rl;
}
function Mc(e = Rl) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = yR[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), Tc = e;
  try {
    localStorage.setItem(Ec, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function _R() {
  return Tc;
}
function kR(e) {
  Mc(e);
}
function bR(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ri = "ComfyGit.DevAutoReload", Pc = "ComfyGit.DevAutoReload.PanelOpen";
function $R() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ca() {
  const e = $R();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Ri, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Ri) === "true";
  } catch {
    return !1;
  }
}
function Rc(e) {
  if (ca())
    try {
      sessionStorage.setItem(Pc, e ? "true" : "false");
    } catch {
    }
}
function CR() {
  if (!ca()) return !1;
  try {
    return sessionStorage.getItem(Pc) === "true";
  } catch {
    return !1;
  }
}
async function Li(e) {
  const t = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (t.ok) {
    const u = t.headers, d = u.get("etag"), v = u.get("last-modified"), f = u.get("content-length");
    if (d || v)
      return [d, v, f].filter(Boolean).join(":");
  }
  const o = await fetch(e, { cache: "no-store", method: "GET" });
  if (!o.ok) return null;
  const n = o.headers, l = [
    n.get("etag"),
    n.get("last-modified"),
    n.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function xR(e) {
  if (!ca()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Li(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Li(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const SR = "./comfygit-panel.css", IR = "./comfygit-panel.js", Lc = new URL(SR, import.meta.url).href, ER = new URL(IR, import.meta.url).href, Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.href = Lc;
document.head.appendChild(Ll);
const TR = wR();
Mc(TR);
ca() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), kR(e);
  },
  getTheme: () => {
    const e = _R();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ks = null, tn = null, Xt = null, sn = null, Fo = null, Di = null, Vo = null, Ni = null, Bo = null, Oi = null;
const So = k(null);
let mn = "no_workspace", Dc = !1;
async function Un() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const t = await Zt.api.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
  } catch {
  }
}
async function ol() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const t = await Zt.api.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        mn = o.state, Dc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var t;
  if (mn === "managed" || !Dc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function MR() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Wo(e) {
  Ho(), Rc(!0), ks = document.createElement("div"), ks.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", ks.appendChild(t), ks.addEventListener("click", (n) => {
    n.target === ks && Ho();
  });
  const o = (n) => {
    n.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), tn = hn({
    render: () => Ro(bM, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (n) => {
        So.value = n, on(), await ol(), al(), nl();
      }
    })
  }), tn.mount(t), document.body.appendChild(ks);
}
function Ho() {
  Rc(!1), tn && (tn.unmount(), tn = null), ks && (ks.remove(), ks = null);
}
function Ui(e) {
  Go(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), sn = hn({
    render: () => Ro(Cc, {
      status: So.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), PR(l.success, l.message), Un().then(on);
      }
    })
  }), sn.mount(Xt), document.body.appendChild(Xt);
}
function Go() {
  sn && (sn.unmount(), sn = null), Xt && (Xt.remove(), Xt = null);
}
function PR(e, t) {
  const o = document.createElement("div"), n = e ? "#22c55e" : "#ef4444";
  o.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--bg-color, #1a1a1a);
    border: 1px solid ${n};
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
    color: ${n};
    font-weight: bold;
    font-size: 14px;
  `, o.appendChild(l);
  const r = document.createElement("span");
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function RR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Di = hn({
    render: () => Ro(gP)
  }), Di.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function LR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Ni = hn({
    render: () => Ro(P7)
  }), Ni.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function DR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-io-mapping-root", Oi = hn({
    render: () => Ro(pR, {
      comfyApp: Zt
    })
  }), Oi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function on() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = MR() ? "block" : "none");
}
function al() {
  if (!Ht) return;
  const e = mn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Nc = document.createElement("style");
Nc.textContent = `
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
document.head.appendChild(Nc);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Wo()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Ht && !Ht.disabled && Ui(Ht);
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
    if (mn === "managed")
      try {
        await Promise.all([
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          Zt.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (mn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Wo(), Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Ui(Ht), e.appendChild(t), e.appendChild(Ht), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), RR(), LR(), DR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Wo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([Un(), ol()]), on(), al(), nl(), CR() && setTimeout(() => {
      ks || Wo();
    }, 100), xR([
      { name: "panel script", url: ER },
      { name: "panel stylesheet", url: Lc }
    ]), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Un(), ol()]), on(), al();
    }, 3e4);
    const n = Zt.api;
    if (n) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((p) => {
          (p.startsWith("workflow:") || p.startsWith("Comfy.OpenWorkflowsPaths:") || p.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(p);
        }), window.location.reload();
      }, u = function() {
        const p = document.createElement("div");
        p.style.cssText = `
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
        w.textContent = "Workflows updated - refresh required", p.appendChild(w);
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
        `, g.onmouseover = () => g.style.background = "var(--comfy-input-bg)", g.onmouseout = () => g.style.background = "var(--comfy-menu-bg)", g.onclick = () => c(), p.appendChild(g);
        const _ = document.createElement("button");
        _.textContent = "×", _.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, _.onmouseover = () => _.style.opacity = "1", _.onmouseout = () => _.style.opacity = "0.6", _.onclick = () => p.remove(), p.appendChild(_), document.body.appendChild(p), console.log("[ComfyGit] Refresh notification displayed");
      }, d = function(p) {
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
        const _ = document.createElement("span");
        _.textContent = "⚠️", _.style.fontSize = "20px", g.appendChild(_);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = "Dependency conflict detected", x.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(x), g.appendChild(C);
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
          g.remove(), Wo("debug-env");
        }, g.appendChild(I);
        const T = document.createElement("button");
        T.textContent = "×", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && g.remove();
        }, 1e4);
      }, v = function(p) {
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
        const _ = document.createElement("span");
        _.textContent = "✅", _.style.fontSize = "20px", g.appendChild(_);
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", C.appendChild($);
        const x = document.createElement("div");
        x.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, x.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(x), g.appendChild(C);
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
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", $.textContent = "Restarting...", x.textContent = "Applying changes, please wait...";
          try {
            const M = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (N) {
                console.error("[ComfyGit] Failed to refresh nodes:", N), _.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", x.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            n.addEventListener("reconnected", M, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (M) {
            console.error("[ComfyGit] Failed to restart:", M), $.textContent = "Restart Failed", $.style.color = "#e53935", x.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
        const T = document.createElement("button");
        T.textContent = "×", T.title = "Dismiss (restart later)", T.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => g.remove(), g.appendChild(T), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      n.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await Un(), on();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = bR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
