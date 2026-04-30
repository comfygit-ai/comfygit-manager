var Nc = Object.defineProperty;
var Oc = (e, t, o) => t in e ? Nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var bn = (e, t, o) => Oc(e, typeof t != "symbol" ? t + "" : t, o);
import { app as ys } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function il(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) t[o] = 1;
  return (o) => o in t;
}
const yt = {}, wo = [], bs = () => {
}, Ui = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rl = (e) => e.startsWith("onUpdate:"), Pt = Object.assign, cl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Uc = Object.prototype.hasOwnProperty, ft = (e, t) => Uc.call(e, t), Xe = Array.isArray, _o = (e) => vn(e) === "[object Map]", Mo = (e) => vn(e) === "[object Set]", Nl = (e) => vn(e) === "[object Date]", tt = (e) => typeof e == "function", Ct = (e) => typeof e == "string", us = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Ai = (e) => (gt(e) || tt(e)) && tt(e.then) && tt(e.catch), zi = Object.prototype.toString, vn = (e) => zi.call(e), Ac = (e) => vn(e).slice(8, -1), Fi = (e) => vn(e) === "[object Object]", ul = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ko = /* @__PURE__ */ il(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, zc = /-\w/g, ls = Zn(
  (e) => e.replace(zc, (t) => t.slice(1).toUpperCase())
), Fc = /\B([A-Z])/g, Ks = Zn(
  (e) => e.replace(Fc, "-$1").toLowerCase()
), ea = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ma = Zn(
  (e) => e ? `on${ea(e)}` : ""
), Gs = (e, t) => !Object.is(e, t), Mn = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Vi = (e, t, o, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: o
  });
}, ta = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vc = (e) => {
  const t = Ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ol;
const sa = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lt(e) {
  if (Xe(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const n = e[o], l = Ct(n) ? jc(n) : Lt(n);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Ct(e) || gt(e))
    return e;
}
const Bc = /;(?![^(]*\))/g, Wc = /:([^]+)/, Gc = /\/\*[^]*?\*\//g;
function jc(e) {
  const t = {};
  return e.replace(Gc, "").split(Bc).forEach((o) => {
    if (o) {
      const n = o.split(Wc);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (Xe(e))
    for (let o = 0; o < e.length; o++) {
      const n = Be(e[o]);
      n && (t += n + " ");
    }
  else if (gt(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qc = /* @__PURE__ */ il(Hc);
function Bi(e) {
  return !!e || e === "";
}
function Kc(e, t) {
  if (e.length !== t.length) return !1;
  let o = !0;
  for (let n = 0; o && n < e.length; n++)
    o = lo(e[n], t[n]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Nl(e), n = Nl(t);
  if (o || n)
    return o && n ? e.getTime() === t.getTime() : !1;
  if (o = us(e), n = us(t), o || n)
    return e === t;
  if (o = Xe(e), n = Xe(t), o || n)
    return o && n ? Kc(e, t) : !1;
  if (o = gt(e), n = gt(t), o || n) {
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
function dl(e, t) {
  return e.findIndex((o) => lo(o, t));
}
const Wi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ct(e) ? e : e == null ? "" : Xe(e) || gt(e) && (e.toString === zi || !tt(e.toString)) ? Wi(e) ? m(e.value) : JSON.stringify(e, Gi, 2) : String(e), Gi = (e, t) => Wi(t) ? Gi(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [n, l], r) => (o[Pa(n, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Pa(o))
} : us(t) ? Pa(t) : gt(t) && !Xe(t) && !Fi(t) ? String(t) : t, Pa = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    us(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jt;
class Jc {
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
function Qc() {
  return Jt;
}
let wt;
const Ra = /* @__PURE__ */ new WeakSet();
class ji {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ra.has(this) && (Ra.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ul(this), Ki(this);
    const t = wt, o = rs;
    wt = this, rs = !0;
    try {
      return this.fn();
    } finally {
      Ji(this), wt = t, rs = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vl(t);
      this.deps = this.depsTail = void 0, Ul(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ra.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ga(this) && this.run();
  }
  get dirty() {
    return Ga(this);
  }
}
let Hi = 0, Jo, Qo;
function qi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qo, Qo = e;
    return;
  }
  e.next = Jo, Jo = e;
}
function ml() {
  Hi++;
}
function fl() {
  if (--Hi > 0)
    return;
  if (Qo) {
    let t = Qo;
    for (Qo = void 0; t; ) {
      const o = t.next;
      t.next = void 0, t.flags &= -9, t = o;
    }
  }
  let e;
  for (; Jo; ) {
    let t = Jo;
    for (Jo = void 0; t; ) {
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
function Ki(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ji(e) {
  let t, o = e.depsTail, n = o;
  for (; n; ) {
    const l = n.prevDep;
    n.version === -1 ? (n === o && (o = l), vl(n), Yc(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = l;
  }
  e.deps = t, e.depsTail = o;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === an) || (e.globalVersion = an, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ga(e))))
    return;
  e.flags |= 2;
  const t = e.dep, o = wt, n = rs;
  wt = e, rs = !0;
  try {
    Ki(e);
    const l = e.fn(e._value);
    (t.version === 0 || Gs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    wt = o, rs = n, Ji(e), e.flags &= -3;
  }
}
function vl(e, t = !1) {
  const { dep: o, prevSub: n, nextSub: l } = e;
  if (n && (n.nextSub = l, e.prevSub = void 0), l && (l.prevSub = n, e.nextSub = void 0), o.subs === e && (o.subs = n, !n && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      vl(r, !0);
  }
  !t && !--o.sc && o.map && o.map.delete(o.key);
}
function Yc(e) {
  const { prevDep: t, nextDep: o } = e;
  t && (t.nextDep = o, e.prevDep = void 0), o && (o.prevDep = t, e.nextDep = void 0);
}
let rs = !0;
const Yi = [];
function Ls() {
  Yi.push(rs), rs = !1;
}
function Ds() {
  const e = Yi.pop();
  rs = e === void 0 ? !0 : e;
}
function Ul(e) {
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
let an = 0;
class Xc {
  constructor(t, o) {
    this.sub = t, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class pl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!wt || !rs || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Xc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Xi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const n = o.nextDep;
      n.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = n), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = n);
    }
    return o;
  }
  trigger(t) {
    this.version++, an++, this.notify(t);
  }
  notify(t) {
    ml();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
function Xi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xi(n);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const ja = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Ha = Symbol(
  ""
), ln = Symbol(
  ""
);
function zt(e, t, o) {
  if (rs && wt) {
    let n = ja.get(e);
    n || ja.set(e, n = /* @__PURE__ */ new Map());
    let l = n.get(o);
    l || (n.set(o, l = new pl()), l.map = n, l.key = o), l.track();
  }
}
function Ms(e, t, o, n, l, r) {
  const c = ja.get(e);
  if (!c) {
    an++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (ml(), t === "clear")
    c.forEach(u);
  else {
    const d = Xe(e), v = d && ul(o);
    if (d && o === "length") {
      const f = Number(n);
      c.forEach((p, w) => {
        (w === "length" || w === ln || !us(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(ln)), t) {
        case "add":
          d ? v && u(c.get("length")) : (u(c.get(oo)), _o(e) && u(c.get(Ha)));
          break;
        case "delete":
          d || (u(c.get(oo)), _o(e) && u(c.get(Ha)));
          break;
        case "set":
          _o(e) && u(c.get(oo));
          break;
      }
  }
  fl();
}
function fo(e) {
  const t = ct(e);
  return t === e ? t : (zt(t, "iterate", ln), ns(e) ? t : t.map(ds));
}
function oa(e) {
  return zt(e = ct(e), "iterate", ln), e;
}
function Vs(e, t) {
  return Ns(e) ? no(e) ? Io(ds(t)) : Io(t) : ds(t);
}
const Zc = {
  __proto__: null,
  [Symbol.iterator]() {
    return La(this, Symbol.iterator, (e) => Vs(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Xe(t) ? fo(t) : t)
    );
  },
  entries() {
    return La(this, "entries", (e) => (e[1] = Vs(this, e[1]), e));
  },
  every(e, t) {
    return Is(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Is(
      this,
      "filter",
      e,
      t,
      (o) => o.map((n) => Vs(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Is(
      this,
      "find",
      e,
      t,
      (o) => Vs(this, o),
      arguments
    );
  },
  findIndex(e, t) {
    return Is(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Is(
      this,
      "findLast",
      e,
      t,
      (o) => Vs(this, o),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Is(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Is(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Da(this, "includes", e);
  },
  indexOf(...e) {
    return Da(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Da(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Is(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...t) {
    return Al(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Al(this, "reduceRight", e, t);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Is(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Uo(this, "splice", e);
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
    return Uo(this, "unshift", e);
  },
  values() {
    return La(this, "values", (e) => Vs(this, e));
  }
};
function La(e, t, o) {
  const n = oa(e), l = n[t]();
  return n !== e && !ns(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const eu = Array.prototype;
function Is(e, t, o, n, l, r) {
  const c = oa(e), u = c !== e && !ns(e), d = c[t];
  if (d !== eu[t]) {
    const p = d.apply(e, r);
    return u ? ds(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Vs(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, n);
  return u && l ? l(f) : f;
}
function Al(e, t, o, n) {
  const l = oa(e);
  let r = o;
  return l !== e && (ns(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Vs(e, u), d, e);
  }), l[t](r, ...n);
}
function Da(e, t, o) {
  const n = ct(e);
  zt(n, "iterate", ln);
  const l = n[t](...o);
  return (l === -1 || l === !1) && yl(o[0]) ? (o[0] = ct(o[0]), n[t](...o)) : l;
}
function Uo(e, t, o = []) {
  Ls(), ml();
  const n = ct(e)[t].apply(e, o);
  return fl(), Ds(), n;
}
const tu = /* @__PURE__ */ il("__proto__,__v_isRef,__isVue"), Zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(us)
);
function su(e) {
  us(e) || (e = String(e));
  const t = ct(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class er {
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
      return n === (l ? r ? mu : nr : r ? or : sr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = Xe(t);
    if (!l) {
      let d;
      if (c && (d = Zc[o]))
        return d;
      if (o === "hasOwnProperty")
        return su;
    }
    const u = Reflect.get(
      t,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Wt(t) ? t : n
    );
    if ((us(o) ? Zi.has(o) : tu(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Wt(u)) {
      const d = c && ul(o) ? u : u.value;
      return l && gt(d) ? zn(d) : d;
    }
    return gt(u) ? l ? zn(u) : co(u) : u;
  }
}
class tr extends er {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, n, l) {
    let r = t[o];
    const c = Xe(t) && ul(o);
    if (!this._isShallow) {
      const v = Ns(r);
      if (!ns(n) && !Ns(n) && (r = ct(r), n = ct(n)), !c && Wt(r) && !Wt(n))
        return v || (r.value = n), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      n,
      Wt(t) ? t : l
    );
    return t === ct(l) && (u ? Gs(n, r) && Ms(t, "set", o, n) : Ms(t, "add", o, n)), d;
  }
  deleteProperty(t, o) {
    const n = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && n && Ms(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const n = Reflect.has(t, o);
    return (!us(o) || !Zi.has(o)) && zt(t, "has", o), n;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Xe(t) ? "length" : oo
    ), Reflect.ownKeys(t);
  }
}
class ou extends er {
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
const nu = /* @__PURE__ */ new tr(), au = /* @__PURE__ */ new ou(), lu = /* @__PURE__ */ new tr(!0);
const qa = (e) => e, $n = (e) => Reflect.getPrototypeOf(e);
function iu(e, t, o) {
  return function(...n) {
    const l = this.__v_raw, r = ct(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...n), f = o ? qa : t ? Io : ds;
    return !t && zt(
      r,
      "iterate",
      d ? Ha : oo
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
function Cn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ru(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ct(r), u = ct(l);
      e || (Gs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = $n(c), v = t ? qa : e ? Io : ds;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && zt(ct(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ct(r), u = ct(l);
      return e || (Gs(l, u) && zt(c, "has", l), zt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ct(u), v = t ? qa : e ? Io : ds;
      return !e && zt(d, "iterate", oo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Pt(
    o,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(l) {
        !t && !ns(l) && !Ns(l) && (l = ct(l));
        const r = ct(this);
        return $n(r).has.call(r, l) || (r.add(l), Ms(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !ns(r) && !Ns(r) && (r = ct(r));
        const c = ct(this), { has: u, get: d } = $n(c);
        let v = u.call(c, l);
        v || (l = ct(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Gs(r, f) && Ms(c, "set", l, r) : Ms(c, "add", l, r), this;
      },
      delete(l) {
        const r = ct(this), { has: c, get: u } = $n(r);
        let d = c.call(r, l);
        d || (l = ct(l), d = c.call(r, l)), u && u.call(r, l);
        const v = r.delete(l);
        return d && Ms(r, "delete", l, void 0), v;
      },
      clear() {
        const l = ct(this), r = l.size !== 0, c = l.clear();
        return r && Ms(
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
    o[l] = iu(l, e, t);
  }), o;
}
function gl(e, t) {
  const o = ru(e, t);
  return (n, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? n : Reflect.get(
    ft(o, l) && l in n ? o : n,
    l,
    r
  );
}
const cu = {
  get: /* @__PURE__ */ gl(!1, !1)
}, uu = {
  get: /* @__PURE__ */ gl(!1, !0)
}, du = {
  get: /* @__PURE__ */ gl(!0, !1)
};
const sr = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap();
function fu(e) {
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
function vu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fu(Ac(e));
}
function co(e) {
  return Ns(e) ? e : hl(
    e,
    !1,
    nu,
    cu,
    sr
  );
}
function pu(e) {
  return hl(
    e,
    !1,
    lu,
    uu,
    or
  );
}
function zn(e) {
  return hl(
    e,
    !0,
    au,
    du,
    nr
  );
}
function hl(e, t, o, n, l) {
  if (!gt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = vu(e);
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
  return Ns(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ns(e) {
  return !!(e && e.__v_isReadonly);
}
function ns(e) {
  return !!(e && e.__v_isShallow);
}
function yl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const t = e && e.__v_raw;
  return t ? ct(t) : e;
}
function gu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Vi(e, "__v_skip", !0), e;
}
const ds = (e) => gt(e) ? co(e) : e, Io = (e) => gt(e) ? zn(e) : e;
function Wt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return hu(e, !1);
}
function hu(e, t) {
  return Wt(e) ? e : new yu(e, t);
}
class yu {
  constructor(t, o) {
    this.dep = new pl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ct(t), this._value = o ? t : ds(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, n = this.__v_isShallow || ns(t) || Ns(t);
    t = n ? t : ct(t), Gs(t, o) && (this._rawValue = t, this._value = n ? t : ds(t), this.dep.trigger());
  }
}
function st(e) {
  return Wt(e) ? e.value : e;
}
const wu = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, n) => {
    const l = e[t];
    return Wt(l) && !Wt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, n);
  }
};
function ar(e) {
  return no(e) ? e : new Proxy(e, wu);
}
class _u {
  constructor(t, o, n) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new pl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = an - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return qi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Qi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function ku(e, t, o = !1) {
  let n, l;
  return tt(e) ? n = e : (n = e.get, l = e.set), new _u(n, l, o);
}
const xn = {}, Fn = /* @__PURE__ */ new WeakMap();
let to;
function bu(e, t = !1, o = to) {
  if (o) {
    let n = Fn.get(o);
    n || Fn.set(o, n = []), n.push(e);
  }
}
function $u(e, t, o = yt) {
  const { immediate: n, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (M) => l ? M : ns(M) || l === !1 || l === 0 ? Ps(M, 1) : Ps(M);
  let f, p, w, g, _ = !1, C = !1;
  if (Wt(e) ? (p = () => e.value, _ = ns(e)) : no(e) ? (p = () => v(e), _ = !0) : Xe(e) ? (C = !0, _ = e.some((M) => no(M) || ns(M)), p = () => e.map((M) => {
    if (Wt(M))
      return M.value;
    if (no(M))
      return v(M);
    if (tt(M))
      return d ? d(M, 2) : M();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ls();
      try {
        w();
      } finally {
        Ds();
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
    p = () => Ps(M(), N);
  }
  const $ = Qc(), x = () => {
    f.stop(), $ && $.active && cl($.effects, f);
  };
  if (r && t) {
    const M = t;
    t = (...N) => {
      M(...N), x();
    };
  }
  let I = C ? new Array(e.length).fill(xn) : xn;
  const T = (M) => {
    if (!(!(f.flags & 1) || !f.dirty && !M))
      if (t) {
        const N = f.run();
        if (l || _ || (C ? N.some((z, G) => Gs(z, I[G])) : Gs(N, I))) {
          w && w();
          const z = to;
          to = f;
          try {
            const G = [
              N,
              // pass undefined as the old value when it's changed for the first time
              I === xn ? void 0 : C && I[0] === xn ? [] : I,
              g
            ];
            I = N, d ? d(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            to = z;
          }
        }
      } else
        f.run();
  };
  return u && u(T), f = new ji(p), f.scheduler = c ? () => c(T, !1) : T, g = (M) => bu(M, !1, f), w = f.onStop = () => {
    const M = Fn.get(f);
    if (M) {
      if (d)
        d(M, 4);
      else
        for (const N of M) N();
      Fn.delete(f);
    }
  }, t ? n ? T(!0) : I = f.run() : c ? c(T.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Ps(e, t = 1 / 0, o) {
  if (t <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Wt(e))
    Ps(e.value, t, o);
  else if (Xe(e))
    for (let n = 0; n < e.length; n++)
      Ps(e[n], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((n) => {
      Ps(n, t, o);
    });
  else if (Fi(e)) {
    for (const n in e)
      Ps(e[n], t, o);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Ps(e[n], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pn(e, t, o, n) {
  try {
    return n ? e(...n) : e();
  } catch (l) {
    na(l, t, o);
  }
}
function ms(e, t, o, n) {
  if (tt(e)) {
    const l = pn(e, t, o, n);
    return l && Ai(l) && l.catch((r) => {
      na(r, t, o);
    }), l;
  }
  if (Xe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ms(e[r], t, o, n));
    return l;
  }
}
function na(e, t, o, n = !0) {
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
      Ls(), pn(r, null, 10, [
        e,
        d,
        v
      ]), Ds();
      return;
    }
  }
  Cu(e, o, l, n, c);
}
function Cu(e, t, o, n = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let hs = -1;
const ko = [];
let Bs = null, go = 0;
const lr = /* @__PURE__ */ Promise.resolve();
let Vn = null;
function Rt(e) {
  const t = Vn || lr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xu(e) {
  let t = hs + 1, o = qt.length;
  for (; t < o; ) {
    const n = t + o >>> 1, l = qt[n], r = rn(l);
    r < e || r === e && l.flags & 2 ? t = n + 1 : o = n;
  }
  return t;
}
function wl(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), o = qt[qt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(o) ? qt.push(e) : qt.splice(xu(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  Vn || (Vn = lr.then(cr));
}
function Su(e) {
  Xe(e) ? ko.push(...e) : Bs && e.id === -1 ? Bs.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), ir();
}
function zl(e, t, o = hs + 1) {
  for (; o < qt.length; o++) {
    const n = qt[o];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function rr(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, n) => rn(o) - rn(n)
    );
    if (ko.length = 0, Bs) {
      Bs.push(...t);
      return;
    }
    for (Bs = t, go = 0; go < Bs.length; go++) {
      const o = Bs[go];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Bs = null, go = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  try {
    for (hs = 0; hs < qt.length; hs++) {
      const t = qt[hs];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), pn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; hs < qt.length; hs++) {
      const t = qt[hs];
      t && (t.flags &= -2);
    }
    hs = -1, qt.length = 0, rr(), Vn = null, (qt.length || ko.length) && cr();
  }
}
let Ot = null, ur = null;
function Bn(e) {
  const t = Ot;
  return Ot = e, ur = e && e.type.__scopeId || null, t;
}
function h(e, t = Ot, o) {
  if (!t || e._n)
    return e;
  const n = (...l) => {
    n._d && jn(-1);
    const r = Bn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Bn(r), n._d && jn(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Mt(e, t) {
  if (Ot === null)
    return e;
  const o = ca(Ot), n = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = yt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ps(c), n.push({
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
    d && (Ls(), ms(d, o, 8, [
      e.el,
      u,
      e,
      t
    ]), Ds());
  }
}
const dr = Symbol("_vte"), mr = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), Fl = (e) => e && (e.defer || e.defer === ""), Vl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Bl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ka = (e, t) => {
  const o = e && e.to;
  return Ct(o) ? t ? t(o) : null : o;
}, fr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, o, n, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: C, createComment: $ }
    } = v, x = Yo(t.props);
    let { shapeFlag: I, children: T, dynamicChildren: M } = t;
    if (e == null) {
      const N = t.el = C(""), z = t.anchor = C("");
      g(N, o, n), g(z, o, n);
      const G = (K, ce) => {
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
        const K = t.target = Ka(t.props, _), ce = vr(K, t, C, g);
        K && (c !== "svg" && Vl(K) ? c = "svg" : c !== "mathml" && Bl(K) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), x || (G(K, ce), Pn(t, !1)));
      };
      x && (G(o, z), Pn(t, !0)), Fl(t.props) ? (t.el.__isMounted = !1, jt(() => {
        L(), delete t.el.__isMounted;
      }, r)) : L();
    } else {
      if (Fl(t.props) && e.el.__isMounted === !1) {
        jt(() => {
          fr.process(
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
      const N = t.anchor = e.anchor, z = t.target = e.target, G = t.targetAnchor = e.targetAnchor, L = Yo(e.props), K = L ? o : z, ce = L ? N : G;
      if (c === "svg" || Vl(z) ? c = "svg" : (c === "mathml" || Bl(z)) && (c = "mathml"), M ? (w(
        e.dynamicChildren,
        M,
        K,
        l,
        r,
        c,
        u
      ), Cl(e, t, !0)) : d || p(
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
        L ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Sn(
          t,
          o,
          N,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const te = t.target = Ka(
          t.props,
          _
        );
        te && Sn(
          t,
          te,
          null,
          v,
          0
        );
      } else L && Sn(
        t,
        z,
        G,
        v,
        1
      );
      Pn(t, x);
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
      const g = r || !Yo(w);
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
  move: Sn,
  hydrate: Iu
};
function Sn(e, t, o, { o: { insert: n }, m: l }, r = 2) {
  r === 0 && n(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && n(c, t, o), (!p || Yo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && n(u, t, o);
}
function Iu(e, t, o, n, l, r, {
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
  const g = t.target = Ka(
    t.props,
    d
  ), _ = Yo(t.props);
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
        t.targetAnchor || vr(g, t, f, v), p(
          C && c(C),
          t,
          g,
          o,
          n,
          l,
          r
        );
      }
    Pn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Kt = fr;
function Pn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let n, l;
    for (t ? (n = e.el, l = e.anchor) : (n = e.targetStart, l = e.targetAnchor); n && n !== l; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", o.uid), n = n.nextSibling;
    o.ut();
  }
}
function vr(e, t, o, n) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[dr] = r, e && (n(l, e), n(r, e)), r;
}
const Ts = Symbol("_leaveCb"), In = Symbol("_enterCb");
function pr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), gn(() => {
    e.isUnmounting = !0;
  }), e;
}
const ss = [Function, Array], gr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ss,
  onEnter: ss,
  onAfterEnter: ss,
  onEnterCancelled: ss,
  // leave
  onBeforeLeave: ss,
  onLeave: ss,
  onAfterLeave: ss,
  onLeaveCancelled: ss,
  // appear
  onBeforeAppear: ss,
  onAppear: ss,
  onAfterAppear: ss,
  onAppearCancelled: ss
}, hr = (e) => {
  const t = e.subTree;
  return t.component ? hr(t.component) : t;
}, Eu = {
  name: "BaseTransition",
  props: gr,
  setup(e, { slots: t }) {
    const o = Sl(), n = pr();
    return () => {
      const l = t.default && _l(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = yr(l), c = ct(e), { mode: u } = c;
      if (n.isLeaving)
        return Na(r);
      const d = Wl(r);
      if (!d)
        return Na(r);
      let v = cn(
        d,
        c,
        n,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (p) => v = p
      );
      d.type !== Vt && io(d, v);
      let f = o.subTree && Wl(o.subTree);
      if (f && f.type !== Vt && !so(f, d) && hr(o).type !== Vt) {
        let p = cn(
          f,
          c,
          n,
          o
        );
        if (io(f, p), u === "out-in" && d.type !== Vt)
          return n.isLeaving = !0, p.afterLeave = () => {
            n.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Na(r);
        u === "in-out" && d.type !== Vt ? p.delayLeave = (w, g, _) => {
          const C = wr(
            n,
            f
          );
          C[String(f.key)] = f, w[Ts] = () => {
            g(), w[Ts] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            _(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function yr(e) {
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
const Tu = Eu;
function wr(e, t) {
  const { leavingVNodes: o } = e;
  let n = o.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), o.set(t.type, n)), n;
}
function cn(e, t, o, n, l) {
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
  } = t, M = String(e.key), N = wr(o, e), z = (K, ce) => {
    K && ms(
      K,
      n,
      9,
      ce
    );
  }, G = (K, ce) => {
    const te = ce[1];
    z(K, ce), Xe(K) ? K.every((Y) => Y.length <= 1) && te() : K.length <= 1 && te();
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
      K[Ts] && K[Ts](
        !0
        /* cancelled */
      );
      const te = N[M];
      te && so(e, te) && te.el[Ts] && te.el[Ts](), z(ce, [K]);
    },
    enter(K) {
      let ce = v, te = f, Y = p;
      if (!o.isMounted)
        if (r)
          ce = x || v, te = I || f, Y = T || p;
        else
          return;
      let we = !1;
      const ee = K[In] = (W) => {
        we || (we = !0, W ? z(Y, [K]) : z(te, [K]), L.delayedLeave && L.delayedLeave(), K[In] = void 0);
      };
      ce ? G(ce, [K, ee]) : ee();
    },
    leave(K, ce) {
      const te = String(e.key);
      if (K[In] && K[In](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ce();
      z(w, [K]);
      let Y = !1;
      const we = K[Ts] = (ee) => {
        Y || (Y = !0, ce(), ee ? z(C, [K]) : z(_, [K]), K[Ts] = void 0, N[te] === e && delete N[te]);
      };
      N[te] = e, g ? G(g, [K, we]) : we();
    },
    clone(K) {
      const ce = cn(
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
function Na(e) {
  if (aa(e))
    return e = Hs(e), e.children = null, e;
}
function Wl(e) {
  if (!aa(e))
    return mr(e.type) && e.children ? yr(e.children) : e;
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
function _l(e, t = !1, o) {
  let n = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, n = n.concat(
      _l(c.children, t, u)
    )) : (t || c.type !== Vt) && n.push(u != null ? Hs(c, { key: u }) : c);
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
    Pt({ name: e.name }, t, { setup: e })
  ) : e;
}
function _r(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wn = /* @__PURE__ */ new WeakMap();
function Xo(e, t, o, n, l = !1) {
  if (Xe(e)) {
    e.forEach(
      (_, C) => Xo(
        _,
        t && (Xe(t) ? t[C] : t),
        o,
        n,
        l
      )
    );
    return;
  }
  if (bo(n) && !l) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Xo(e, t, o, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? ca(n.component) : n.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === yt ? u.refs = {} : u.refs, p = u.setupState, w = ct(p), g = p === yt ? Ui : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (Gl(t), Ct(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Wt(v)) {
      v.value = null;
      const _ = t;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    pn(d, u, 12, [c, f]);
  else {
    const _ = Ct(d), C = Wt(d);
    if (_ || C) {
      const $ = () => {
        if (e.f) {
          const x = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            Xe(x) && cl(x, r);
          else if (Xe(x))
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
          $(), Wn.delete(e);
        };
        x.id = -1, Wn.set(e, x), jt(x, o);
      } else
        Gl(e), $();
    }
  }
}
function Gl(e) {
  const t = Wn.get(e);
  t && (t.flags |= 8, Wn.delete(e));
}
sa().requestIdleCallback;
sa().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, aa = (e) => e.type.__isKeepAlive;
function Mu(e, t) {
  kr(e, "a", t);
}
function Pu(e, t) {
  kr(e, "da", t);
}
function kr(e, t, o = Bt) {
  const n = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (la(t, n, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      aa(l.parent.vnode) && Ru(n, t, o, l), l = l.parent;
  }
}
function Ru(e, t, o, n) {
  const l = la(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    cl(n[t], l);
  }, o);
}
function la(e, t, o = Bt, n = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ls();
      const u = hn(o), d = ms(t, o, e, c);
      return u(), Ds(), d;
    });
    return n ? l.unshift(r) : l.push(r), r;
  }
}
const Os = (e) => (t, o = Bt) => {
  (!mn || e === "sp") && la(e, (...n) => t(...n), o);
}, Lu = Os("bm"), at = Os("m"), Du = Os(
  "bu"
), br = Os("u"), gn = Os(
  "bum"
), Po = Os("um"), Nu = Os(
  "sp"
), Ou = Os("rtg"), Uu = Os("rtc");
function Au(e, t = Bt) {
  la("ec", e, t);
}
const zu = "components", $r = Symbol.for("v-ndc");
function kl(e) {
  return Ct(e) ? Fu(zu, e, !1) || e : e || $r;
}
function Fu(e, t, o = !0, n = !1) {
  const l = Ot || Bt;
  if (l) {
    const r = l.type;
    {
      const u = Ed(
        r,
        !1
      );
      if (u && (u === t || u === ls(t) || u === ea(ls(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      jl(l[e] || r[e], t) || // global registration
      jl(l.appContext[e], t)
    );
    return !c && n ? r : c;
  }
}
function jl(e, t) {
  return e && (e[t] || e[ls(t)] || e[ea(ls(t))]);
}
function he(e, t, o, n) {
  let l;
  const r = o, c = Xe(e);
  if (c || Ct(e)) {
    const u = c && no(e);
    let d = !1, v = !1;
    u && (d = !ns(e), v = Ns(e), e = oa(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Io(ds(e[f])) : ds(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (gt(e))
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
    if (Xe(n))
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
  const c = r && Cr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !us(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && n ? "_fb" : "")
    },
    c || (n ? n() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Cr(e) {
  return e.some((t) => dn(t) ? !(t.type === Vt || t.type === B && !Cr(t.children)) : !0) ? e : null;
}
const Ja = (e) => e ? Wr(e) ? ca(e) : Ja(e.parent) : null, Zo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ja(e.parent),
    $root: (e) => Ja(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      wl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: (e) => Xu.bind(e)
  })
), Oa = (e, t) => e !== yt && !e.__isScriptSetup && ft(e, t), Vu = {
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
        if (Oa(n, t))
          return c[t] = 1, n[t];
        if (l !== yt && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== yt && ft(o, t))
          return c[t] = 4, o[t];
        Qa && (c[t] = 0);
      }
    }
    const v = Zo[t];
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
    return Oa(l, t) ? (l[t] = o, !0) : n !== yt && ft(n, t) ? (n[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: n, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== yt && u[0] !== "$" && ft(e, u) || Oa(t, u) || ft(r, u) || ft(n, u) || ft(Zo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ft(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
function Hl(e) {
  return Xe(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
let Qa = !0;
function Bu(e) {
  const t = Sr(e), o = e.proxy, n = e.ctx;
  Qa = !1, t.beforeCreate && ql(t.beforeCreate, e, "bc");
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
    renderTriggered: G,
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
  if (v && Wu(v, n, null), c)
    for (const ke in c) {
      const se = c[ke];
      tt(se) && (n[ke] = se.bind(o));
    }
  if (l) {
    const ke = l.call(o, o);
    gt(ke) && (e.data = co(ke));
  }
  if (Qa = !0, r)
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
      xr(u[ke], n, o, ke);
  if (d) {
    const ke = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(ke).forEach((se) => {
      Ju(se, ke[se]);
    });
  }
  f && ql(f, e, "c");
  function Q(ke, se) {
    Xe(se) ? se.forEach((pe) => ke(pe.bind(o))) : se && ke(se.bind(o));
  }
  if (Q(Lu, p), Q(at, w), Q(Du, g), Q(br, _), Q(Mu, C), Q(Pu, $), Q(Au, L), Q(Uu, z), Q(Ou, G), Q(gn, I), Q(Po, M), Q(Nu, K), Xe(ce))
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
  N && e.render === bs && (e.render = N), te != null && (e.inheritAttrs = te), Y && (e.components = Y), we && (e.directives = we), K && _r(e);
}
function Wu(e, t, o = bs) {
  Xe(e) && (e = Ya(e));
  for (const n in e) {
    const l = e[n];
    let r;
    gt(l) ? "default" in l ? r = Rn(
      l.from || n,
      l.default,
      !0
    ) : r = Rn(l.from || n) : r = Rn(l), Wt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[n] = r;
  }
}
function ql(e, t, o) {
  ms(
    Xe(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function xr(e, t, o, n) {
  let l = n.includes(".") ? Tr(o, n) : () => o[n];
  if (Ct(e)) {
    const r = t[e];
    tt(r) && vt(l, r);
  } else if (tt(e))
    vt(l, e.bind(o));
  else if (gt(e))
    if (Xe(e))
      e.forEach((r) => xr(r, t, o, n));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && vt(l, r, e);
    }
}
function Sr(e) {
  const t = e.type, { mixins: o, extends: n } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !n ? d = t : (d = {}, l.length && l.forEach(
    (v) => Gn(d, v, c, !0)
  ), Gn(d, t, c)), gt(t) && r.set(t, d), d;
}
function Gn(e, t, o, n = !1) {
  const { mixins: l, extends: r } = t;
  r && Gn(e, r, o, !0), l && l.forEach(
    (c) => Gn(e, c, o, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const u = Gu[c] || o && o[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Gu = {
  data: Kl,
  props: Jl,
  emits: Jl,
  // objects
  methods: Ho,
  computed: Ho,
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
  components: Ho,
  directives: Ho,
  // watch
  watch: Hu,
  // provide / inject
  provide: Kl,
  inject: ju
};
function Kl(e, t) {
  return t ? e ? function() {
    return Pt(
      tt(e) ? e.call(this, this) : e,
      tt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ju(e, t) {
  return Ho(Ya(e), Ya(t));
}
function Ya(e) {
  if (Xe(e)) {
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
function Ho(e, t) {
  return e ? Pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jl(e, t) {
  return e ? Xe(e) && Xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Pt(
    /* @__PURE__ */ Object.create(null),
    Hl(e),
    Hl(t ?? {})
  ) : t;
}
function Hu(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Pt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    o[n] = Gt(e[n], t[n]);
  return o;
}
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: Ui,
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
let qu = 0;
function Ku(e, t) {
  return function(n, l = null) {
    tt(n) || (n = Pt({}, n)), l != null && !gt(l) && (l = null);
    const r = Ir(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: qu++,
      _component: n,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: Md,
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
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ca(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (ms(
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
function Ju(e, t) {
  if (Bt) {
    let o = Bt.provides;
    const n = Bt.parent && Bt.parent.provides;
    n === o && (o = Bt.provides = Object.create(n)), o[e] = t;
  }
}
function Rn(e, t, o = !1) {
  const n = Sl();
  if (n || $o) {
    let l = $o ? $o._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(n && n.proxy) : t;
  }
}
const Qu = Symbol.for("v-scx"), Yu = () => Rn(Qu);
function vt(e, t, o) {
  return Er(e, t, o);
}
function Er(e, t, o = yt) {
  const { immediate: n, deep: l, flush: r, once: c } = o, u = Pt({}, o), d = t && n || !t && r !== "post";
  let v;
  if (mn) {
    if (r === "sync") {
      const g = Yu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = bs, g.resume = bs, g.pause = bs, g;
    }
  }
  const f = Bt;
  u.call = (g, _, C) => ms(g, f, _, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    jt(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : wl(g);
  }), u.augmentJob = (g) => {
    t && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = $u(e, t, u);
  return mn && (v ? v.push(w) : d && w()), w;
}
function Xu(e, t, o) {
  const n = this.proxy, l = Ct(e) ? e.includes(".") ? Tr(n, e) : () => n[e] : e.bind(n, n);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = hn(this), u = Er(l, r.bind(n), o);
  return c(), u;
}
function Tr(e, t) {
  const o = t.split(".");
  return () => {
    let n = e;
    for (let l = 0; l < o.length && n; l++)
      n = n[o[l]];
    return n;
  };
}
const Zu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ls(t)}Modifiers`] || e[`${Ks(t)}Modifiers`];
function ed(e, t, ...o) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || yt;
  let l = o;
  const r = t.startsWith("update:"), c = r && Zu(n, t.slice(7));
  c && (c.trim && (l = o.map((f) => Ct(f) ? f.trim() : f)), c.number && (l = o.map(ta)));
  let u, d = n[u = Ma(t)] || // also try camelCase event handler (#2249)
  n[u = Ma(ls(t))];
  !d && r && (d = n[u = Ma(Ks(t))]), d && ms(
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
    e.emitted[u] = !0, ms(
      v,
      e,
      6,
      l
    );
  }
}
const td = /* @__PURE__ */ new WeakMap();
function Mr(e, t, o = !1) {
  const n = o ? td : t.emitsCache, l = n.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Mr(v, t, !0);
      f && (u = !0, Pt(c, f));
    };
    !o && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (gt(e) && n.set(e, null), null) : (Xe(r) ? r.forEach((d) => c[d] = null) : Pt(c, r), gt(e) && n.set(e, c), c);
}
function ia(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Ks(t)) || ft(e, t));
}
function Ql(e) {
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
  } = e, $ = Bn(e);
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
      ), I = t.props ? u : sd(u);
    }
  } catch (M) {
    en.length = 0, na(M, e, 1), x = b(Vt);
  }
  let T = x;
  if (I && C !== !1) {
    const M = Object.keys(I), { shapeFlag: N } = T;
    M.length && N & 7 && (r && M.some(rl) && (I = od(
      I,
      r
    )), T = Hs(T, I, !1, !0));
  }
  return o.dirs && (T = Hs(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && io(T, o.transition), x = T, Bn($), x;
}
const sd = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Xn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, od = (e, t) => {
  const o = {};
  for (const n in e)
    (!rl(n) || !(n.slice(9) in t)) && (o[n] = e[n]);
  return o;
};
function nd(e, t, o) {
  const { props: n, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return n ? Yl(n, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== n[w] && !ia(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : n === c ? !1 : n ? c ? Yl(n, c, v) : !0 : !!c;
  return !1;
}
function Yl(e, t, o) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < n.length; l++) {
    const r = n[l];
    if (t[r] !== e[r] && !ia(o, r))
      return !0;
  }
  return !1;
}
function ad({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Pr = {}, Rr = () => Object.create(Pr), Lr = (e) => Object.getPrototypeOf(e) === Pr;
function ld(e, t, o, n = !1) {
  const l = {}, r = Rr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = n ? l : pu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function id(e, t, o, n) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ct(l), [d] = e.propsOptions;
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
        if (ia(e.emitsOptions, w))
          continue;
        const g = t[w];
        if (d)
          if (ft(r, w))
            g !== r[w] && (r[w] = g, v = !0);
          else {
            const _ = ls(w);
            l[_] = Xa(
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
    Dr(e, t, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!t || // for camelCase
      !ft(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ks(p)) === p || !ft(t, f))) && (d ? o && // for camelCase
      (o[p] !== void 0 || // for kebab-case
      o[f] !== void 0) && (l[p] = Xa(
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
  v && Ms(e.attrs, "set", "");
}
function Dr(e, t, o, n) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Ko(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = ls(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : ia(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, c = !0);
    }
  if (r) {
    const d = ct(o), v = u || yt;
    for (let f = 0; f < r.length; f++) {
      const p = r[f];
      o[p] = Xa(
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
function Xa(e, t, o, n, l, r) {
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
          const f = hn(l);
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
    ] && (n === "" || n === Ks(o)) && (n = !0));
  }
  return n;
}
const rd = /* @__PURE__ */ new WeakMap();
function Nr(e, t, o = !1) {
  const n = o ? rd : t.propsCache, l = n.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Nr(p, t, !0);
      Pt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return gt(e) && n.set(e, wo), wo;
  if (Xe(r))
    for (let f = 0; f < r.length; f++) {
      const p = ls(r[f]);
      Xl(p) && (c[p] = yt);
    }
  else if (r)
    for (const f in r) {
      const p = ls(f);
      if (Xl(p)) {
        const w = r[f], g = c[p] = Xe(w) || tt(w) ? { type: w } : Pt({}, w), _ = g.type;
        let C = !1, $ = !0;
        if (Xe(_))
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
  return gt(e) && n.set(e, v), v;
}
function Xl(e) {
  return e[0] !== "$" && !Ko(e);
}
const bl = (e) => e === "_" || e === "_ctx" || e === "$stable", $l = (e) => Xe(e) ? e.map(_s) : [_s(e)], cd = (e, t, o) => {
  if (t._n)
    return t;
  const n = h((...l) => $l(t(...l)), o);
  return n._c = !1, n;
}, Or = (e, t, o) => {
  const n = e._ctx;
  for (const l in e) {
    if (bl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = cd(l, r, n);
    else if (r != null) {
      const c = $l(r);
      t[l] = () => c;
    }
  }
}, Ur = (e, t) => {
  const o = $l(t);
  e.slots.default = () => o;
}, Ar = (e, t, o) => {
  for (const n in t)
    (o || !bl(n)) && (e[n] = t[n]);
}, ud = (e, t, o) => {
  const n = e.slots = Rr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (Ar(n, t, o), o && Vi(n, "_", l, !0)) : Or(t, n);
  } else t && Ur(e, t);
}, dd = (e, t, o) => {
  const { vnode: n, slots: l } = e;
  let r = !0, c = yt;
  if (n.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : Ar(l, t, o) : (r = !t.$stable, Or(t, l)), c = t;
  } else t && (Ur(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !bl(u) && c[u] == null && delete l[u];
}, jt = gd;
function md(e) {
  return fd(e);
}
function fd(e, t) {
  const o = sa();
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
  } = e, C = (E, U, ie, Ee = null, xe = null, Se = null, X = void 0, q = null, ve = !!U.dynamicChildren) => {
    if (E === U)
      return;
    E && !so(E, U) && (Ee = ae(E), Pe(E, xe, Se, !0), E = null), U.patchFlag === -2 && (ve = !1, U.dynamicChildren = null);
    const { type: be, ref: Ke, shapeFlag: We } = U;
    switch (be) {
      case ra:
        $(E, U, ie, Ee);
        break;
      case Vt:
        x(E, U, ie, Ee);
        break;
      case Aa:
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
          q,
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
          q,
          ve
        ) : We & 6 ? we(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          q,
          ve
        ) : (We & 64 || We & 128) && be.process(
          E,
          U,
          ie,
          Ee,
          xe,
          Se,
          X,
          q,
          ve,
          fe
        );
    }
    Ke != null && xe ? Xo(Ke, E && E.ref, Se, U || E, !U) : Ke == null && E && E.ref != null && Xo(E.ref, null, Se, E, !0);
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
  }, N = (E, U, ie, Ee, xe, Se, X, q, ve) => {
    if (U.type === "svg" ? X = "svg" : U.type === "math" && (X = "mathml"), E == null)
      z(
        U,
        ie,
        Ee,
        xe,
        Se,
        X,
        q,
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
          q,
          ve
        );
      } finally {
        be && be._endPatch();
      }
    }
  }, z = (E, U, ie, Ee, xe, Se, X, q) => {
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
      Ua(E, Se),
      X,
      q
    ), J && Ys(E, null, Ee, "created"), G(ve, E, E.scopeId, X, Ee), Ke) {
      for (const Te in Ke)
        Te !== "value" && !Ko(Te) && r(ve, Te, null, Ke[Te], Se, Ee);
      "value" in Ke && r(ve, "value", null, Ke.value, Se), (be = Ke.onVnodeBeforeMount) && vs(be, Ee, E);
    }
    J && Ys(E, null, Ee, "beforeMount");
    const qe = vd(xe, ge);
    qe && ge.beforeEnter(ve), n(ve, U, ie), ((be = Ke && Ke.onVnodeMounted) || qe || J) && jt(() => {
      be && vs(be, Ee, E), qe && ge.enter(ve), J && Ys(E, null, Ee, "mounted");
    }, xe);
  }, G = (E, U, ie, Ee, xe) => {
    if (ie && g(E, ie), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        g(E, Ee[Se]);
    if (xe) {
      let Se = xe.subTree;
      if (U === Se || Fr(Se.type) && (Se.ssContent === U || Se.ssFallback === U)) {
        const X = xe.vnode;
        G(
          E,
          X,
          X.scopeId,
          X.slotScopeIds,
          xe.parent
        );
      }
    }
  }, L = (E, U, ie, Ee, xe, Se, X, q, ve = 0) => {
    for (let be = ve; be < E.length; be++) {
      const Ke = E[be] = q ? Ws(E[be]) : _s(E[be]);
      C(
        null,
        Ke,
        U,
        ie,
        Ee,
        xe,
        Se,
        X,
        q
      );
    }
  }, K = (E, U, ie, Ee, xe, Se, X) => {
    const q = U.el = E.el;
    let { patchFlag: ve, dynamicChildren: be, dirs: Ke } = U;
    ve |= E.patchFlag & 16;
    const We = E.props || yt, ge = U.props || yt;
    let J;
    if (ie && Xs(ie, !1), (J = ge.onVnodeBeforeUpdate) && vs(J, ie, U, E), Ke && Ys(U, E, ie, "beforeUpdate"), ie && Xs(ie, !0), (We.innerHTML && ge.innerHTML == null || We.textContent && ge.textContent == null) && f(q, ""), be ? ce(
      E.dynamicChildren,
      be,
      q,
      ie,
      Ee,
      Ua(U, xe),
      Se
    ) : X || se(
      E,
      U,
      q,
      null,
      ie,
      Ee,
      Ua(U, xe),
      Se,
      !1
    ), ve > 0) {
      if (ve & 16)
        te(q, We, ge, ie, xe);
      else if (ve & 2 && We.class !== ge.class && r(q, "class", null, ge.class, xe), ve & 4 && r(q, "style", We.style, ge.style, xe), ve & 8) {
        const qe = U.dynamicProps;
        for (let Te = 0; Te < qe.length; Te++) {
          const Ye = qe[Te], Fe = We[Ye], Oe = ge[Ye];
          (Oe !== Fe || Ye === "value") && r(q, Ye, Fe, Oe, xe, ie);
        }
      }
      ve & 1 && E.children !== U.children && f(q, U.children);
    } else !X && be == null && te(q, We, ge, ie, xe);
    ((J = ge.onVnodeUpdated) || Ke) && jt(() => {
      J && vs(J, ie, U, E), Ke && Ys(U, E, ie, "updated");
    }, Ee);
  }, ce = (E, U, ie, Ee, xe, Se, X) => {
    for (let q = 0; q < U.length; q++) {
      const ve = E[q], be = U[q], Ke = (
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
          !Ko(Se) && !(Se in ie) && r(
            E,
            Se,
            U[Se],
            null,
            xe,
            Ee
          );
      for (const Se in ie) {
        if (Ko(Se)) continue;
        const X = ie[Se], q = U[Se];
        X !== q && Se !== "value" && r(E, Se, q, X, xe, Ee);
      }
      "value" in ie && r(E, "value", U.value, ie.value, xe);
    }
  }, Y = (E, U, ie, Ee, xe, Se, X, q, ve) => {
    const be = U.el = E ? E.el : u(""), Ke = U.anchor = E ? E.anchor : u("");
    let { patchFlag: We, dynamicChildren: ge, slotScopeIds: J } = U;
    J && (q = q ? q.concat(J) : J), E == null ? (n(be, ie, Ee), n(Ke, ie, Ee), L(
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
      q,
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
      q
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || xe && U === xe.subTree) && Cl(
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
      q,
      ve
    );
  }, we = (E, U, ie, Ee, xe, Se, X, q, ve) => {
    U.slotScopeIds = q, E == null ? U.shapeFlag & 512 ? xe.ctx.activate(
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
    const q = E.component = $d(
      E,
      Ee,
      xe
    );
    if (aa(E) && (q.ctx.renderer = fe), Cd(q, !1, X), q.asyncDep) {
      if (xe && xe.registerDep(q, Q, X), !E.el) {
        const ve = q.subTree = b(Vt);
        x(null, ve, U, ie), E.placeholder = ve.el;
      }
    } else
      Q(
        q,
        E,
        U,
        ie,
        xe,
        Se,
        X
      );
  }, W = (E, U, ie) => {
    const Ee = U.component = E.component;
    if (nd(E, U, ie))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        ke(Ee, U, ie);
        return;
      } else
        Ee.next = U, Ee.update();
    else
      U.el = E.el, Ee.vnode = U;
  }, Q = (E, U, ie, Ee, xe, Se, X) => {
    const q = () => {
      if (E.isMounted) {
        let { next: We, bu: ge, u: J, parent: qe, vnode: Te } = E;
        {
          const de = zr(E);
          if (de) {
            We && (We.el = Te.el, ke(E, We, X)), de.asyncDep.then(() => {
              E.isUnmounted || q();
            });
            return;
          }
        }
        let Ye = We, Fe;
        Xs(E, !1), We ? (We.el = Te.el, ke(E, We, X)) : We = Te, ge && Mn(ge), (Fe = We.props && We.props.onVnodeBeforeUpdate) && vs(Fe, qe, We, Te), Xs(E, !0);
        const Oe = Ql(E), j = E.subTree;
        E.subTree = Oe, C(
          j,
          Oe,
          // parent may have changed if it's in a teleport
          p(j.el),
          // anchor may have changed if it's in a fragment
          ae(j),
          E,
          xe,
          Se
        ), We.el = Oe.el, Ye === null && ad(E, Oe.el), J && jt(J, xe), (Fe = We.props && We.props.onVnodeUpdated) && jt(
          () => vs(Fe, qe, We, Te),
          xe
        );
      } else {
        let We;
        const { el: ge, props: J } = U, { bm: qe, m: Te, parent: Ye, root: Fe, type: Oe } = E, j = bo(U);
        Xs(E, !1), qe && Mn(qe), !j && (We = J && J.onVnodeBeforeMount) && vs(We, Ye, U), Xs(E, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(Oe);
          const de = E.subTree = Ql(E);
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
        if (Te && jt(Te, xe), !j && (We = J && J.onVnodeMounted)) {
          const de = U;
          jt(
            () => vs(We, Ye, de),
            xe
          );
        }
        (U.shapeFlag & 256 || Ye && bo(Ye.vnode) && Ye.vnode.shapeFlag & 256) && E.a && jt(E.a, xe), E.isMounted = !0, U = ie = Ee = null;
      }
    };
    E.scope.on();
    const ve = E.effect = new ji(q);
    E.scope.off();
    const be = E.update = ve.run.bind(ve), Ke = E.job = ve.runIfDirty.bind(ve);
    Ke.i = E, Ke.id = E.uid, ve.scheduler = () => wl(Ke), Xs(E, !0), be();
  }, ke = (E, U, ie) => {
    U.component = E;
    const Ee = E.vnode.props;
    E.vnode = U, E.next = null, id(E, U.props, Ee, ie), dd(E, U.children, ie), Ls(), zl(E), Ds();
  }, se = (E, U, ie, Ee, xe, Se, X, q, ve = !1) => {
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
          q,
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
          q,
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
      q,
      ve
    ) : Ve(be, xe, Se, !0) : (Ke & 8 && f(ie, ""), J & 16 && L(
      We,
      ie,
      Ee,
      xe,
      Se,
      X,
      q,
      ve
    ));
  }, pe = (E, U, ie, Ee, xe, Se, X, q, ve) => {
    E = E || wo, U = U || wo;
    const be = E.length, Ke = U.length, We = Math.min(be, Ke);
    let ge;
    for (ge = 0; ge < We; ge++) {
      const J = U[ge] = ve ? Ws(U[ge]) : _s(U[ge]);
      C(
        E[ge],
        J,
        ie,
        null,
        xe,
        Se,
        X,
        q,
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
      q,
      ve,
      We
    );
  }, O = (E, U, ie, Ee, xe, Se, X, q, ve) => {
    let be = 0;
    const Ke = U.length;
    let We = E.length - 1, ge = Ke - 1;
    for (; be <= We && be <= ge; ) {
      const J = E[be], qe = U[be] = ve ? Ws(U[be]) : _s(U[be]);
      if (so(J, qe))
        C(
          J,
          qe,
          ie,
          null,
          xe,
          Se,
          X,
          q,
          ve
        );
      else
        break;
      be++;
    }
    for (; be <= We && be <= ge; ) {
      const J = E[We], qe = U[ge] = ve ? Ws(U[ge]) : _s(U[ge]);
      if (so(J, qe))
        C(
          J,
          qe,
          ie,
          null,
          xe,
          Se,
          X,
          q,
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
            U[be] = ve ? Ws(U[be]) : _s(U[be]),
            ie,
            qe,
            xe,
            Se,
            X,
            q,
            ve
          ), be++;
      }
    } else if (be > ge)
      for (; be <= We; )
        Pe(E[be], xe, Se, !0), be++;
    else {
      const J = be, qe = be, Te = /* @__PURE__ */ new Map();
      for (be = qe; be <= ge; be++) {
        const D = U[be] = ve ? Ws(U[be]) : _s(U[be]);
        D.key != null && Te.set(D.key, be);
      }
      let Ye, Fe = 0;
      const Oe = ge - qe + 1;
      let j = !1, de = 0;
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
          for (Ye = qe; Ye <= ge; Ye++)
            if (ye[Ye - qe] === 0 && so(D, U[Ye])) {
              A = Ye;
              break;
            }
        A === void 0 ? Pe(D, xe, Se, !0) : (ye[A - qe] = be + 1, A >= de ? de = A : j = !0, C(
          D,
          U[A],
          ie,
          null,
          xe,
          Se,
          X,
          q,
          ve
        ), Fe++);
      }
      const Qe = j ? pd(ye) : wo;
      for (Ye = Qe.length - 1, be = Oe - 1; be >= 0; be--) {
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
          q,
          ve
        ) : j && (Ye < 0 || be !== Qe[Ye] ? ue(A, ie, Ae, 2) : Ye--);
      }
    }
  }, ue = (E, U, ie, Ee, xe = null) => {
    const { el: Se, type: X, transition: q, children: ve, shapeFlag: be } = E;
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
    if (X === Aa) {
      T(E, U, ie);
      return;
    }
    if (Ee !== 2 && be & 1 && q)
      if (Ee === 0)
        q.beforeEnter(Se), n(Se, U, ie), jt(() => q.enter(Se), xe);
      else {
        const { leave: We, delayLeave: ge, afterLeave: J } = q, qe = () => {
          E.ctx.isUnmounted ? l(Se) : n(Se, U, ie);
        }, Te = () => {
          Se._isLeaving && Se[Ts](
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
      ref: q,
      children: ve,
      dynamicChildren: be,
      shapeFlag: Ke,
      patchFlag: We,
      dirs: ge,
      cacheIndex: J
    } = E;
    if (We === -2 && (xe = !1), q != null && (Ls(), Xo(q, null, ie, E, !0), Ds()), J != null && (U.renderCache[J] = void 0), Ke & 256) {
      U.ctx.deactivate(E);
      return;
    }
    const qe = Ke & 1 && ge, Te = !bo(E);
    let Ye;
    if (Te && (Ye = X && X.onVnodeBeforeUnmount) && vs(Ye, U, E), Ke & 6)
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
    (Te && (Ye = X && X.onVnodeUnmounted) || qe) && jt(() => {
      Ye && vs(Ye, U, E), qe && Ys(E, null, U, "unmounted");
    }, ie);
  }, _e = (E) => {
    const { type: U, el: ie, anchor: Ee, transition: xe } = E;
    if (U === B) {
      De(ie, Ee);
      return;
    }
    if (U === Aa) {
      M(E);
      return;
    }
    const Se = () => {
      l(ie), xe && !xe.persisted && xe.afterLeave && xe.afterLeave();
    };
    if (E.shapeFlag & 1 && xe && !xe.persisted) {
      const { leave: X, delayLeave: q } = xe, ve = () => X(ie, Se);
      q ? q(E.el, Se, ve) : ve();
    } else
      Se();
  }, De = (E, U) => {
    let ie;
    for (; E !== U; )
      ie = w(E), l(E), E = ie;
    l(U);
  }, Ue = (E, U, ie) => {
    const { bum: Ee, scope: xe, job: Se, subTree: X, um: q, m: ve, a: be } = E;
    Zl(ve), Zl(be), Ee && Mn(Ee), xe.stop(), Se && (Se.flags |= 8, Pe(X, E, U, ie)), q && jt(q, U), jt(() => {
      E.isUnmounted = !0;
    }, U);
  }, Ve = (E, U, ie, Ee = !1, xe = !1, Se = 0) => {
    for (let X = Se; X < E.length; X++)
      Pe(E[X], U, ie, Ee, xe);
  }, ae = (E) => {
    if (E.shapeFlag & 6)
      return ae(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const U = w(E.anchor || E.el), ie = U && U[dr];
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
    ), U._vnode = E, oe || (oe = !0, zl(), rr(), oe = !1);
  }, fe = {
    p: C,
    um: Pe,
    m: ue,
    r: _e,
    mt: ee,
    mc: L,
    pc: se,
    pbc: ce,
    n: ae,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: Ku(Re)
  };
}
function Ua({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function vd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Cl(e, t, o = !1) {
  const n = e.children, l = t.children;
  if (Xe(n) && Xe(l))
    for (let r = 0; r < n.length; r++) {
      const c = n[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ws(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && Cl(c, u)), u.type === ra && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Vt && !u.el && (u.el = c.el);
    }
}
function pd(e) {
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
function zr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : zr(t);
}
function Zl(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Fr = (e) => e.__isSuspense;
function gd(e, t) {
  t && t.pendingBranch ? Xe(e) ? t.effects.push(...e) : t.effects.push(e) : Su(e);
}
const B = Symbol.for("v-fgt"), ra = Symbol.for("v-txt"), Vt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), en = [];
let Zt = null;
function a(e = !1) {
  en.push(Zt = e ? null : []);
}
function hd() {
  en.pop(), Zt = en[en.length - 1] || null;
}
let un = 1;
function jn(e, t = !1) {
  un += e, e < 0 && Zt && t && (Zt.hasOnce = !0);
}
function Vr(e) {
  return e.dynamicChildren = un > 0 ? Zt || wo : null, hd(), un > 0 && Zt && Zt.push(e), e;
}
function i(e, t, o, n, l, r) {
  return Vr(
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
  return Vr(
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
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Br = ({ key: e }) => e ?? null, Ln = ({
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
    key: t && Br(t),
    ref: t && Ln(t),
    scopeId: ur,
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
  return u ? (xl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= Ct(o) ? 8 : 16), un > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Zt.push(d), d;
}
const b = yd;
function yd(e, t = null, o = null, n = 0, l = null, r = !1) {
  if ((!e || e === $r) && (e = Vt), dn(e)) {
    const u = Hs(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && xl(u, o), un > 0 && !r && Zt && (u.shapeFlag & 6 ? Zt[Zt.indexOf(e)] = u : Zt.push(u)), u.patchFlag = -2, u;
  }
  if (Td(e) && (e = e.__vccOpts), t) {
    t = wd(t);
    let { class: u, style: d } = t;
    u && !Ct(u) && (t.class = Be(u)), gt(d) && (yl(d) && !Xe(d) && (d = Pt({}, d)), t.style = Lt(d));
  }
  const c = Ct(e) ? 1 : Fr(e) ? 128 : mr(e) ? 64 : gt(e) ? 4 : tt(e) ? 2 : 0;
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
function wd(e) {
  return e ? yl(e) || Lr(e) ? Pt({}, e) : e : null;
}
function Hs(e, t, o = !1, n = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = t ? _d(l || {}, t) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Br(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Xe(r) ? r.concat(Ln(t)) : [r, Ln(t)] : Ln(t)
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
    ssContent: e.ssContent && Hs(e.ssContent),
    ssFallback: e.ssFallback && Hs(e.ssFallback),
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
  return b(ra, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (a(), R(Vt, null, e)) : b(Vt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? b(Vt) : Xe(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dn(e) ? Ws(e) : b(ra, null, String(e));
}
function Ws(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hs(e);
}
function xl(e, t) {
  let o = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Xe(t))
    o = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), xl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Lr(t) ? t._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Ot }, o = 32) : (t = String(t), n & 64 ? (o = 16, t = [S(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function _d(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    for (const l in n)
      if (l === "class")
        t.class !== n.class && (t.class = Be([t.class, n.class]));
      else if (l === "style")
        t.style = Lt([t.style, n.style]);
      else if (Xn(l)) {
        const r = t[l], c = n[l];
        c && r !== c && !(Xe(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = n[l]);
  }
  return t;
}
function vs(e, t, o, n = null) {
  ms(e, t, 7, [
    o,
    n
  ]);
}
const kd = Ir();
let bd = 0;
function $d(e, t, o) {
  const n = e.type, l = (t ? t.appContext : e.appContext) || kd, r = {
    uid: bd++,
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
    scope: new Jc(
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
    propsOptions: Nr(n, l),
    emitsOptions: Mr(n, l),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ed.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const Sl = () => Bt || Ot;
let Hn, Za;
{
  const e = sa(), t = (o, n) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(n), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Za = t(
    "__VUE_SSR_SETTERS__",
    (o) => mn = o
  );
}
const hn = (e) => {
  const t = Bt;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, ei = () => {
  Bt && Bt.scope.off(), Hn(null);
};
function Wr(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function Cd(e, t = !1, o = !1) {
  t && Za(t);
  const { props: n, children: l } = e.vnode, r = Wr(e);
  ld(e, n, r, t), ud(e, l, o || t);
  const c = r ? xd(e, t) : void 0;
  return t && Za(!1), c;
}
function xd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: n } = o;
  if (n) {
    Ls();
    const l = e.setupContext = n.length > 1 ? Id(e) : null, r = hn(e), c = pn(
      n,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Ai(c);
    if (Ds(), r(), (u || e.sp) && !bo(e) && _r(e), u) {
      if (c.then(ei, ei), t)
        return c.then((d) => {
          ti(e, d);
        }).catch((d) => {
          na(d, e, 0);
        });
      e.asyncDep = c;
    } else
      ti(e, c);
  } else
    Gr(e);
}
function ti(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : gt(t) && (e.setupState = ar(t)), Gr(e);
}
function Gr(e, t, o) {
  const n = e.type;
  e.render || (e.render = n.render || bs);
  {
    const l = hn(e);
    Ls();
    try {
      Bu(e);
    } finally {
      Ds(), l();
    }
  }
}
const Sd = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function Id(e) {
  const t = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ca(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ar(gu(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Zo)
        return Zo[o](e);
    },
    has(t, o) {
      return o in t || o in Zo;
    }
  })) : e.proxy;
}
function Ed(e, t = !0) {
  return tt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Td(e) {
  return tt(e) && "__vccOpts" in e;
}
const P = (e, t) => ku(e, t, mn);
function Ro(e, t, o) {
  try {
    jn(-1);
    const n = arguments.length;
    return n === 2 ? gt(t) && !Xe(t) ? dn(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (n > 3 ? o = Array.prototype.slice.call(arguments, 2) : n === 3 && dn(o) && (o = [o]), b(e, t, o));
  } finally {
    jn(1);
  }
}
const Md = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let el;
const si = typeof window < "u" && window.trustedTypes;
if (si)
  try {
    el = /* @__PURE__ */ si.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jr = el ? (e) => el.createHTML(e) : (e) => e, Pd = "http://www.w3.org/2000/svg", Rd = "http://www.w3.org/1998/Math/MathML", Es = typeof document < "u" ? document : null, oi = Es && /* @__PURE__ */ Es.createElement("template"), Ld = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, n) => {
    const l = t === "svg" ? Es.createElementNS(Pd, e) : t === "mathml" ? Es.createElementNS(Rd, e) : o ? Es.createElement(e, { is: o }) : Es.createElement(e);
    return e === "select" && n && n.multiple != null && l.setAttribute("multiple", n.multiple), l;
  },
  createText: (e) => Es.createTextNode(e),
  createComment: (e) => Es.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Es.querySelector(e),
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
      oi.innerHTML = jr(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const u = oi.content;
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
}, zs = "transition", Ao = "animation", Eo = Symbol("_vtc"), Hr = {
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
}, qr = /* @__PURE__ */ Pt(
  {},
  gr,
  Hr
), Dd = (e) => (e.displayName = "Transition", e.props = qr, e), Nd = /* @__PURE__ */ Dd(
  (e, { slots: t }) => Ro(Tu, Kr(e), t)
), Zs = (e, t = []) => {
  Xe(e) ? e.forEach((o) => o(...t)) : e && e(...t);
}, ni = (e) => e ? Xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Kr(e) {
  const t = {};
  for (const Y in e)
    Y in Hr || (t[Y] = e[Y]);
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
  } = e, _ = Od(l), C = _ && _[0], $ = _ && _[1], {
    onBeforeEnter: x,
    onEnter: I,
    onEnterCancelled: T,
    onLeave: M,
    onLeaveCancelled: N,
    onBeforeAppear: z = x,
    onAppear: G = I,
    onAppearCancelled: L = T
  } = t, K = (Y, we, ee, W) => {
    Y._enterCancelled = W, Fs(Y, we ? f : u), Fs(Y, we ? v : c), ee && ee();
  }, ce = (Y, we) => {
    Y._isLeaving = !1, Fs(Y, p), Fs(Y, g), Fs(Y, w), we && we();
  }, te = (Y) => (we, ee) => {
    const W = Y ? G : I, Q = () => K(we, Y, ee);
    Zs(W, [we, Q]), ai(() => {
      Fs(we, Y ? d : r), gs(we, Y ? f : u), ni(W) || li(we, n, C, Q);
    });
  };
  return Pt(t, {
    onBeforeEnter(Y) {
      Zs(x, [Y]), gs(Y, r), gs(Y, c);
    },
    onBeforeAppear(Y) {
      Zs(z, [Y]), gs(Y, d), gs(Y, v);
    },
    onEnter: te(!1),
    onAppear: te(!0),
    onLeave(Y, we) {
      Y._isLeaving = !0;
      const ee = () => ce(Y, we);
      gs(Y, p), Y._enterCancelled ? (gs(Y, w), tl(Y)) : (tl(Y), gs(Y, w)), ai(() => {
        Y._isLeaving && (Fs(Y, p), gs(Y, g), ni(M) || li(Y, n, $, ee));
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
function Od(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [za(e.enter), za(e.leave)];
  {
    const t = za(e);
    return [t, t];
  }
}
function za(e) {
  return Vc(e);
}
function gs(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function Fs(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function ai(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ud = 0;
function li(e, t, o, n) {
  const l = e._endId = ++Ud, r = () => {
    l === e._endId && n();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Jr(e, t);
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
function Jr(e, t) {
  const o = window.getComputedStyle(e), n = (_) => (o[_] || "").split(", "), l = n(`${zs}Delay`), r = n(`${zs}Duration`), c = ii(l, r), u = n(`${Ao}Delay`), d = n(`${Ao}Duration`), v = ii(u, d);
  let f = null, p = 0, w = 0;
  t === zs ? c > 0 && (f = zs, p = c, w = r.length) : t === Ao ? v > 0 && (f = Ao, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? zs : Ao : null, w = f ? f === zs ? r.length : d.length : 0);
  const g = f === zs && /\b(?:transform|all)(?:,|$)/.test(
    n(`${zs}Property`).toString()
  );
  return {
    type: f,
    timeout: p,
    propCount: w,
    hasTransform: g
  };
}
function ii(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((o, n) => ri(o) + ri(e[n])));
}
function ri(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ad(e, t, o) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ci = Symbol("_vod"), zd = Symbol("_vsh"), Fd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Bd(e, t, o) {
  const n = e.style, l = Ct(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (Ct(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Dn(n, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Dn(n, c, "");
    for (const c in o)
      c === "display" && (r = !0), Dn(n, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = n[Fd];
      c && (o += ";" + c), n.cssText = o, r = Vd.test(o);
    }
  } else t && e.removeAttribute("style");
  ci in e && (e[ci] = r ? n.display : "", e[zd] && (n.display = "none"));
}
const ui = /\s*!important$/;
function Dn(e, t, o) {
  if (Xe(o))
    o.forEach((n) => Dn(e, t, n));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const n = Wd(e, t);
    ui.test(o) ? e.setProperty(
      Ks(n),
      o.replace(ui, ""),
      "important"
    ) : e[n] = o;
  }
}
const di = ["Webkit", "Moz", "ms"], Fa = {};
function Wd(e, t) {
  const o = Fa[t];
  if (o)
    return o;
  let n = ls(t);
  if (n !== "filter" && n in e)
    return Fa[t] = n;
  n = ea(n);
  for (let l = 0; l < di.length; l++) {
    const r = di[l] + n;
    if (r in e)
      return Fa[t] = r;
  }
  return t;
}
const mi = "http://www.w3.org/1999/xlink";
function fi(e, t, o, n, l, r = qc(t)) {
  n && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(mi, t.slice(6, t.length)) : e.setAttributeNS(mi, t, o) : o == null || r && !Bi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : us(o) ? String(o) : o
  );
}
function vi(e, t, o, n, l) {
  if (t === "innerHTML" || t === "textContent") {
    o != null && (e[t] = t === "innerHTML" ? jr(o) : o);
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
    u === "boolean" ? o = Bi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[t] = o;
  } catch {
  }
  c && e.removeAttribute(l || t);
}
function Rs(e, t, o, n) {
  e.addEventListener(t, o, n);
}
function Gd(e, t, o, n) {
  e.removeEventListener(t, o, n);
}
const pi = Symbol("_vei");
function jd(e, t, o, n, l = null) {
  const r = e[pi] || (e[pi] = {}), c = r[t];
  if (n && c)
    c.value = n;
  else {
    const [u, d] = Hd(t);
    if (n) {
      const v = r[t] = Jd(
        n,
        l
      );
      Rs(e, u, v, d);
    } else c && (Gd(e, u, c, d), r[t] = void 0);
  }
}
const gi = /(?:Once|Passive|Capture)$/;
function Hd(e) {
  let t;
  if (gi.test(e)) {
    t = {};
    let n;
    for (; n = e.match(gi); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), t];
}
let Va = 0;
const qd = /* @__PURE__ */ Promise.resolve(), Kd = () => Va || (qd.then(() => Va = 0), Va = Date.now());
function Jd(e, t) {
  const o = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= o.attached)
      return;
    ms(
      Qd(n, o.value),
      t,
      5,
      [n]
    );
  };
  return o.value = e, o.attached = Kd(), o;
}
function Qd(e, t) {
  if (Xe(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (n) => (l) => !l._stopped && n && n(l)
    );
  } else
    return t;
}
const hi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, t, o, n, l, r) => {
  const c = l === "svg";
  t === "class" ? Ad(e, n, c) : t === "style" ? Bd(e, o, n) : Xn(t) ? rl(t) || jd(e, t, o, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xd(e, t, n, c)) ? (vi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fi(e, t, n, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ct(n)) ? vi(e, ls(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), fi(e, t, n, c));
};
function Xd(e, t, o, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && hi(t) && tt(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return hi(t) && Ct(o) ? !1 : t in e;
}
const Qr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), qn = Symbol("_moveCb"), yi = Symbol("_enterCb"), Zd = (e) => (delete e.props.mode, e), em = /* @__PURE__ */ Zd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Pt({}, qr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = Sl(), n = pr();
    let l, r;
    return br(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!am(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(sm), l.forEach(om);
      const u = l.filter(nm);
      tl(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        gs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[qn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[qn] = null, Fs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ct(e), u = Kr(c);
      let d = c.tag || B;
      if (l = [], r)
        for (let v = 0; v < r.length; v++) {
          const f = r[v];
          f.el && f.el instanceof Element && (l.push(f), io(
            f,
            cn(
              f,
              u,
              n,
              o
            )
          ), Qr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = t.default ? _l(t.default()) : [];
      for (let v = 0; v < r.length; v++) {
        const f = r[v];
        f.key != null && io(
          f,
          cn(f, u, n, o)
        );
      }
      return b(d, null, r);
    };
  }
}), tm = em;
function sm(e) {
  const t = e.el;
  t[qn] && t[qn](), t[yi] && t[yi]();
}
function om(e) {
  Yr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function nm(e) {
  const t = Qr.get(e), o = Yr.get(e), n = t.left - o.left, l = t.top - o.top;
  if (n || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${n}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function am(e, t, o) {
  const n = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && n.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && n.classList.add(u)), n.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(n);
  const { hasTransform: c } = Jr(n);
  return r.removeChild(n), c;
}
const qs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Xe(t) ? (o) => Mn(t, o) : t;
};
function lm(e) {
  e.target.composing = !0;
}
function wi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const as = Symbol("_assign");
function _i(e, t, o) {
  return t && (e = e.trim()), o && (e = ta(e)), e;
}
const tn = {
  created(e, { modifiers: { lazy: t, trim: o, number: n } }, l) {
    e[as] = qs(l);
    const r = n || l.props && l.props.type === "number";
    Rs(e, t ? "change" : "input", (c) => {
      c.target.composing || e[as](_i(e.value, o, r));
    }), (o || r) && Rs(e, "change", () => {
      e.value = _i(e.value, o, r);
    }), t || (Rs(e, "compositionstart", lm), Rs(e, "compositionend", wi), Rs(e, "change", wi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: n, trim: l, number: r } }, c) {
    if (e[as] = qs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? ta(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (n && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Kn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[as] = qs(o), Rs(e, "change", () => {
      const n = e._modelValue, l = To(e), r = e.checked, c = e[as];
      if (Xe(n)) {
        const u = dl(n, l), d = u !== -1;
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
        c(Xr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ki,
  beforeUpdate(e, t, o) {
    e[as] = qs(o), ki(e, t, o);
  }
};
function ki(e, { value: t, oldValue: o }, n) {
  e._modelValue = t;
  let l;
  if (Xe(t))
    l = dl(t, n.props.value) > -1;
  else if (Mo(t))
    l = t.has(n.props.value);
  else {
    if (t === o) return;
    l = lo(t, Xr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Nn = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[as] = qs(o), Rs(e, "change", () => {
      e[as](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, n) {
    e[as] = qs(n), t !== o && (e.checked = lo(t, n.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, n) {
    const l = Mo(t);
    Rs(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? ta(To(c)) : To(c)
      );
      e[as](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Rt(() => {
        e._assigning = !1;
      });
    }), e[as] = qs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    bi(e, t);
  },
  beforeUpdate(e, t, o) {
    e[as] = qs(o);
  },
  updated(e, { value: t }) {
    e._assigning || bi(e, t);
  }
};
function bi(e, t) {
  const o = e.multiple, n = Xe(t);
  if (!(o && !n && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (n) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = t.some((v) => String(v) === String(u)) : c.selected = dl(t, u) > -1;
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
function Xr(e, t) {
  const o = t ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : t;
}
const im = ["ctrl", "shift", "alt", "meta"], rm = {
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
  exact: (e, t) => im.some((o) => e[`${o}Key`] && !t.includes(o))
}, pt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), n = t.join(".");
  return o[n] || (o[n] = ((l, ...r) => {
    for (let c = 0; c < t.length; c++) {
      const u = rm[t[c]];
      if (u && u(l, t)) return;
    }
    return e(l, ...r);
  }));
}, cm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, cs = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return o[n] || (o[n] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ks(l.key);
    if (t.some(
      (c) => c === r || cm[c] === r
    ))
      return e(l);
  }));
}, um = /* @__PURE__ */ Pt({ patchProp: Yd }, Ld);
let $i;
function dm() {
  return $i || ($i = md(um));
}
const yn = ((...e) => {
  const t = dm().createApp(...e), { mount: o } = t;
  return t.mount = (n) => {
    const l = fm(n);
    if (!l) return;
    const r = t._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, mm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, t;
});
function mm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fm(e) {
  return Ct(e) ? document.querySelector(e) : e;
}
const AR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const zR = [
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
], FR = {
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
}, vm = [
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
], VR = [
  ...vm,
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
function zo() {
  return !1;
}
function pm(e) {
  return !!(e && typeof e.fetchApi == "function");
}
function Lo() {
  var o, n, l;
  const e = window, t = [
    (o = e.app) == null ? void 0 : o.api,
    (l = (n = e.comfyAPI) == null ? void 0 : n.api) == null ? void 0 : l.api
  ];
  for (const r of t)
    if (pm(r))
      return r;
  return null;
}
async function js(e, t) {
  const o = Lo();
  if (!o)
    throw new Error("ComfyUI API not available");
  return o.fetchApi(e, t);
}
function gm(e = "comfygit-panel") {
  const t = Lo();
  return (t == null ? void 0 : t.clientId) ?? (t == null ? void 0 : t.initialClientId) ?? e;
}
class Zr extends Error {
  constructor(o, n, l, r) {
    super(o);
    bn(this, "status");
    bn(this, "data");
    bn(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = n, this.data = l, this.endpoint = r;
  }
}
function hm() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function rt() {
  const e = k(!1), t = k(null);
  async function o(V, $e) {
    const He = await js(V, $e), mt = await He.text();
    if (!He.ok) {
      let Tt = {};
      if (mt)
        try {
          const Qs = JSON.parse(mt);
          Qs && typeof Qs == "object" && (Tt = Qs);
        } catch {
          Tt = { error: mt };
        }
      const et = Tt.error || Tt.message || Tt.detail || He.statusText || `Request failed: ${He.status}`;
      throw new Zr(String(et), He.status, Tt, V);
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
  async function G(V, $e = !1) {
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
  async function se(V = 100) {
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
  async function ae(V, $e, He) {
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
  async function ne(V) {
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
  async function q() {
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
  async function Ye(V, $e) {
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
  async function j() {
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
    const He = hm(), mt = gm(), Tt = {
      id: V.id,
      version: V.version || V.selected_version || "latest",
      selected_version: V.selected_version || "latest",
      mode: V.mode || "remote",
      channel: V.channel || "default"
    };
    return V.install_source && (Tt.install_source = V.install_source), V.install_source === "git" && V.repository && (Tt.repository = V.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Tt,
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
  async function ut(V, $e) {
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
  async function lt(V, $e) {
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
  async function es(V, $e) {
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
  async function Js(V) {
    const $e = new FormData();
    $e.append("file", V);
    const He = await js("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!He.ok) {
      const mt = await He.json().catch(() => ({}));
      throw new Error(mt.error || `Preview failed: ${He.status}`);
    }
    return He.json();
  }
  async function da(V) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(V)}`
    );
  }
  async function ma(V, $e, He, mt) {
    const Tt = new FormData();
    Tt.append("file", V), Tt.append("name", $e), Tt.append("model_strategy", He), Tt.append("torch_backend", mt);
    const et = await js("/v2/workspace/import", {
      method: "POST",
      body: Tt
    });
    if (!et.ok) {
      const Qs = await et.json().catch(() => ({}));
      throw new Error(Qs.message || Qs.error || `Import failed: ${et.status}`);
    }
    return et.json();
  }
  async function Us() {
    return o("/v2/workspace/import/status");
  }
  async function fa(V) {
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
  async function va() {
    return o("/v2/comfygit/update-check");
  }
  async function Ss() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function pa(V) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function No() {
    return o("/v2/setup/initialize_status");
  }
  async function ga(V) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ha() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function ya() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function wa(V, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: $e })
    });
  }
  async function wn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function _a(V) {
    const $e = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function ka(V) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ba() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function $a(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function Ca(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/stop`, {
      method: "POST"
    });
  }
  async function xa(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/start`, {
      method: "POST"
    });
  }
  async function Sa(V) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(V)}/status`);
  }
  async function Ia(V) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function _n(V = !1) {
    return o(V ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function Ea() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function Ta() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function kn(V) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function le(V) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function H(V) {
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
  async function Ze(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/info`);
  }
  async function dt(V) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`);
  }
  async function ht(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function Dt(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function ts(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function Oo(V, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function As(V) {
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
    checkout: G,
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
    setModelImportance: ae,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Re,
    getModelDetails: fe,
    getModelSourceCandidates: ne,
    computeModelHashes: E,
    getWorkflowSourceCandidates: U,
    openFileLocation: ie,
    addModelSource: Ee,
    removeModelSource: xe,
    deleteModel: Se,
    downloadModel: X,
    scanWorkspaceModels: q,
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
    getWorkspaceLogs: Ye,
    getEnvironmentLogPath: Fe,
    getWorkspaceLogPath: j,
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
    getPullPreview: ut,
    pullFromRemote: xt,
    getPushPreview: lt,
    pushToRemote: St,
    validateMerge: es,
    // Environment Sync
    syncEnvironmentManually: Ge,
    // Workflow Repair
    repairWorkflowModels: xs,
    // Import Operations
    previewTarballImport: Js,
    previewGitImport: fa,
    validateEnvironmentName: da,
    executeImport: ma,
    executeGitImport: uo,
    getImportProgress: Us,
    // First-Time Setup
    getSetupStatus: mo,
    // Manager Update Notice
    getUpdateCheck: va,
    updateManager: Ss,
    initializeWorkspace: pa,
    getInitializeProgress: No,
    validatePath: ga,
    // Deploy Operations
    getDeploySummary: ha,
    getDataCenters: ya,
    testRunPodConnection: wa,
    getNetworkVolumes: wn,
    getRunPodGpuTypes: _a,
    deployToRunPod: ka,
    getRunPodPods: ba,
    terminateRunPodPod: $a,
    stopRunPodPod: Ca,
    startRunPodPod: xa,
    getDeploymentStatus: Sa,
    exportDeployPackage: Ia,
    getStoredRunPodKey: _n,
    clearRunPodKey: Ea,
    // Custom Worker Operations
    getCustomWorkers: Ta,
    addCustomWorker: kn,
    removeCustomWorker: le,
    testWorkerConnection: H,
    scanForWorkers: Je,
    getWorkerSystemInfo: Ze,
    getWorkerInstances: dt,
    deployToWorker: ht,
    startWorkerInstance: Dt,
    stopWorkerInstance: ts,
    terminateWorkerInstance: Oo,
    // Git Authentication
    testGitAuth: As
  };
}
const ym = { class: "panel-layout" }, wm = {
  key: 0,
  class: "panel-layout-header"
}, _m = {
  key: 1,
  class: "panel-layout-search"
}, km = { class: "panel-layout-content" }, bm = {
  key: 2,
  class: "panel-layout-footer"
}, $m = /* @__PURE__ */ Ce({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (a(), i("div", ym, [
      t.$slots.header ? (a(), i("div", wm, [
        ot(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (a(), i("div", _m, [
        ot(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", km, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (a(), i("div", bm, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Ie = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, Ut = /* @__PURE__ */ Ie($m, [["__scopeId", "data-v-21565df9"]]), Cm = {
  key: 0,
  class: "panel-title-prefix"
}, xm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, Sm = /* @__PURE__ */ Ce({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (a(), R(kl(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (a(), i("span", Cm, m(e.prefix), 1)) : (a(), i("span", xm)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Im = /* @__PURE__ */ Ie(Sm, [["__scopeId", "data-v-c3875efc"]]), Em = ["title"], Tm = ["width", "height"], Mm = /* @__PURE__ */ Ce({
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
      ])], 8, Tm))
    ], 8, Em));
  }
}), ec = /* @__PURE__ */ Ie(Mm, [["__scopeId", "data-v-6fc7f16d"]]), Pm = { class: "header-left" }, Rm = {
  key: 0,
  class: "header-actions"
}, Lm = /* @__PURE__ */ Ce({
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
      s("div", Pm, [
        b(Im, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            S(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (a(), R(ec, {
          key: 0,
          onClick: o[0] || (o[0] = (n) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (a(), i("div", Rm, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ Ie(Lm, [["__scopeId", "data-v-55a62cd6"]]), Dm = {
  key: 0,
  class: "section-title-count"
}, Nm = {
  key: 1,
  class: "section-title-icon"
}, Om = /* @__PURE__ */ Ce({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (a(), R(kl(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (n) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Dm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (a(), i("span", Nm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), os = /* @__PURE__ */ Ie(Om, [["__scopeId", "data-v-559361eb"]]), Um = { class: "status-grid" }, Am = { class: "status-grid__columns" }, zm = { class: "status-grid__column" }, Fm = { class: "status-grid__title" }, Vm = { class: "status-grid__column status-grid__column--right" }, Bm = { class: "status-grid__title" }, Wm = {
  key: 0,
  class: "status-grid__footer"
}, Gm = /* @__PURE__ */ Ce({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", Um, [
      s("div", Am, [
        s("div", zm, [
          s("h4", Fm, m(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", Vm, [
          s("h4", Bm, m(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (a(), i("div", Wm, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), jm = /* @__PURE__ */ Ie(Gm, [["__scopeId", "data-v-73b7ba3f"]]), Hm = {
  key: 0,
  class: "status-item__icon"
}, qm = {
  key: 1,
  class: "status-item__count"
}, Km = { class: "status-item__label" }, Jm = /* @__PURE__ */ Ce({
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
      e.icon ? (a(), i("span", Hm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (a(), i("span", qm, m(e.count), 1)) : y("", !0),
      s("span", Km, m(e.label), 1)
    ], 2));
  }
}), ps = /* @__PURE__ */ Ie(Jm, [["__scopeId", "data-v-6f929183"]]), Qm = { class: "issue-card__header" }, Ym = { class: "issue-card__icon" }, Xm = { class: "issue-card__title" }, Zm = {
  key: 0,
  class: "issue-card__content"
}, ef = {
  key: 0,
  class: "issue-card__description"
}, tf = {
  key: 1,
  class: "issue-card__items"
}, sf = {
  key: 2,
  class: "issue-card__actions"
}, of = /* @__PURE__ */ Ce({
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
      s("div", Qm, [
        s("span", Ym, m(e.icon), 1),
        s("h4", Xm, m(e.title), 1)
      ]),
      n.$slots.default || e.description ? (a(), i("div", Zm, [
        e.description ? (a(), i("p", ef, m(e.description), 1)) : y("", !0),
        ot(n.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (a(), i("div", tf, [
        (a(!0), i(B, null, he(e.items, (r, c) => (a(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      n.$slots.actions ? (a(), i("div", sf, [
        ot(n.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yt = /* @__PURE__ */ Ie(of, [["__scopeId", "data-v-df6aa348"]]), nf = ["type", "disabled"], af = {
  key: 0,
  class: "spinner"
}, lf = /* @__PURE__ */ Ce({
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
      e.loading ? (a(), i("span", af)) : y("", !0),
      e.loading ? y("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, nf));
  }
}), Me = /* @__PURE__ */ Ie(lf, [["__scopeId", "data-v-772abe47"]]), rf = /* @__PURE__ */ Ce({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (a(), i("span", {
      class: Be(["detail-label"]),
      style: Lt({ minWidth: e.minWidth })
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), On = /* @__PURE__ */ Ie(rf, [["__scopeId", "data-v-75e9eeb8"]]), cf = /* @__PURE__ */ Ce({
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
}), sl = /* @__PURE__ */ Ie(cf, [["__scopeId", "data-v-2f186e4c"]]), uf = { class: "detail-row" }, df = /* @__PURE__ */ Ce({
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
    return (t, o) => (a(), i("div", uf, [
      b(On, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          S(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (a(), R(sl, {
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
}), _t = /* @__PURE__ */ Ie(df, [["__scopeId", "data-v-ef15664a"]]), mf = { class: "modal-header" }, ff = { class: "modal-body" }, vf = { class: "status-section" }, pf = {
  key: 0,
  class: "status-section"
}, gf = { class: "section-header-row" }, hf = {
  key: 0,
  class: "workflow-group"
}, yf = { class: "workflow-group-header" }, wf = { class: "workflow-group-title" }, _f = { class: "workflow-list" }, kf = { class: "workflow-name" }, bf = { class: "workflow-issue" }, $f = {
  key: 1,
  class: "workflow-group"
}, Cf = { class: "workflow-group-header" }, xf = { class: "workflow-group-title" }, Sf = { class: "workflow-list" }, If = { class: "workflow-name" }, Ef = { class: "workflow-issue" }, Tf = {
  key: 2,
  class: "workflow-group"
}, Mf = { class: "workflow-group-header" }, Pf = { class: "workflow-group-title" }, Rf = { class: "workflow-list" }, Lf = { class: "workflow-name" }, Df = {
  key: 3,
  class: "workflow-group"
}, Nf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Uf = { class: "workflow-list" }, Af = { class: "workflow-name" }, zf = {
  key: 4,
  class: "workflow-group"
}, Ff = { class: "workflow-group-header" }, Vf = { class: "workflow-group-title" }, Bf = { class: "workflow-list" }, Wf = { class: "workflow-name" }, Gf = {
  key: 5,
  class: "workflow-group"
}, jf = { class: "workflow-group-title" }, Hf = { class: "expand-icon" }, qf = {
  key: 0,
  class: "workflow-list"
}, Kf = { class: "workflow-name" }, Jf = {
  key: 1,
  class: "status-section"
}, Qf = {
  key: 0,
  class: "change-group"
}, Yf = { class: "change-group-header" }, Xf = { class: "change-group-title" }, Zf = { class: "change-list" }, ev = { class: "node-name" }, tv = {
  key: 0,
  class: "dev-badge"
}, sv = {
  key: 1,
  class: "change-group"
}, ov = { class: "change-group-header" }, nv = { class: "change-group-title" }, av = { class: "change-list" }, lv = { class: "node-name" }, iv = {
  key: 0,
  class: "dev-badge"
}, rv = {
  key: 2,
  class: "change-group"
}, cv = { class: "change-list" }, uv = { class: "change-item" }, dv = { class: "node-name" }, mv = {
  key: 3,
  class: "change-group"
}, fv = {
  key: 2,
  class: "status-section"
}, vv = { class: "section-header-row" }, pv = {
  key: 0,
  class: "drift-item"
}, gv = { class: "drift-list" }, hv = {
  key: 0,
  class: "drift-list-more"
}, yv = {
  key: 1,
  class: "drift-item"
}, wv = { class: "drift-list" }, _v = {
  key: 0,
  class: "drift-list-more"
}, kv = {
  key: 2,
  class: "drift-item"
}, bv = { class: "drift-list" }, $v = { class: "version-actual" }, Cv = { class: "version-expected" }, xv = {
  key: 0,
  class: "drift-list-more"
}, Sv = {
  key: 3,
  class: "drift-item"
}, Iv = { class: "repair-action" }, Ev = {
  key: 3,
  class: "status-section"
}, Tv = { class: "info-box" }, Mv = { class: "drift-list" }, Pv = {
  key: 0,
  class: "drift-list-more"
}, Rv = {
  key: 4,
  class: "status-section"
}, Lv = { class: "warning-box" }, Dv = {
  key: 5,
  class: "empty-state-inline"
}, Nv = { class: "modal-actions" }, Ov = /* @__PURE__ */ Ce({
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
    }), vt(() => t.show, (w, g) => {
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
      var _, C, $, x, I, T, M, N, z, G, L, K, ce, te, Y, we, ee, W, Q, ke, se, pe;
      return a(), R(Kt, { to: "body" }, [
        e.show ? (a(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (O) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = pt(() => {
            }, ["stop"]))
          }, [
            s("div", mf, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (O) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", ff, [
              s("div", vf, [
                b(os, { level: "4" }, {
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
              c.value ? (a(), i("div", pf, [
                s("div", gf, [
                  b(os, { level: "4" }, {
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
                n.value.length ? (a(), i("div", hf, [
                  s("div", yf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", wf, "BROKEN (COMMITTED) (" + m(n.value.length) + ")", 1)
                  ]),
                  s("div", _f, [
                    (a(!0), i(B, null, he(n.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", kf, m(O.name), 1),
                      s("span", bf, m(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (a(), i("div", $f, [
                  s("div", Cf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", xf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", Sf, [
                    (a(!0), i(B, null, he(l.value, (O) => (a(), i("div", {
                      key: O.name,
                      class: "workflow-item"
                    }, [
                      s("span", If, m(O.name), 1),
                      s("span", Ef, m(O.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (a(), i("div", Tf, [
                  s("div", Mf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Pf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Rf, [
                    (a(!0), i(B, null, he(e.status.workflows.new, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Lf, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && x.length ? (a(), i("div", Df, [
                  s("div", Nf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Of, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Uf, [
                    (a(!0), i(B, null, he(e.status.workflows.modified, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Af, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (T = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && T.length ? (a(), i("div", zf, [
                  s("div", Ff, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Bf, [
                    (a(!0), i(B, null, he(e.status.workflows.deleted, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Wf, m(O), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (a(), i("div", Gf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (O) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", jf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", Hf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (a(), i("div", qf, [
                    (a(!0), i(B, null, he(r.value, (O) => (a(), i("div", {
                      key: O,
                      class: "workflow-item"
                    }, [
                      s("span", Kf, m(O), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (a(), i("div", Jf, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    S("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (N = (M = e.status.git_changes) == null ? void 0 : M.nodes_added) != null && N.length ? (a(), i("div", Qf, [
                  s("div", Yf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Xf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", Zf, [
                    (a(!0), i(B, null, he(e.status.git_changes.nodes_added, (O) => (a(), i("div", {
                      key: f(O),
                      class: "change-item"
                    }, [
                      s("span", ev, m(f(O)), 1),
                      p(O) ? (a(), i("span", tv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (G = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && G.length ? (a(), i("div", sv, [
                  s("div", ov, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", nv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", av, [
                    (a(!0), i(B, null, he(e.status.git_changes.nodes_removed, (O) => (a(), i("div", {
                      key: f(O),
                      class: "change-item"
                    }, [
                      s("span", lv, m(f(O)), 1),
                      p(O) ? (a(), i("span", iv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (L = e.status.git_changes) != null && L.workflow_changes ? (a(), i("div", rv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", cv, [
                    s("div", uv, [
                      s("span", dv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (K = e.status.git_changes) != null && K.has_other_changes ? (a(), i("div", mv, [...g[21] || (g[21] = [
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
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (a(), i("div", fv, [
                s("div", vv, [
                  b(os, { level: "4" }, {
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
                (Y = (te = e.status.comparison) == null ? void 0 : te.missing_nodes) != null && Y.length ? (a(), i("div", pv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", gv, [
                    (a(!0), i(B, null, he(e.status.comparison.missing_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + m(O), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (a(), i("div", hv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ee = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && ee.length ? (a(), i("div", yv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", wv, [
                    (a(!0), i(B, null, he(e.status.comparison.extra_nodes.slice(0, 10), (O) => (a(), i("div", {
                      key: O,
                      class: "drift-list-item"
                    }, " - " + m(O), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (a(), i("div", _v, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Q = (W = e.status.comparison) == null ? void 0 : W.version_mismatches) != null && Q.length ? (a(), i("div", kv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", bv, [
                    (a(!0), i(B, null, he(e.status.comparison.version_mismatches.slice(0, 10), (O) => (a(), i("div", {
                      key: O.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      S(m(O.name) + ": ", 1),
                      s("span", $v, m(O.actual), 1),
                      g[23] || (g[23] = S(" → ", -1)),
                      s("span", Cv, m(O.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (a(), i("div", xv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ke = e.status.comparison) == null ? void 0 : ke.packages_in_sync) === !1 ? (a(), i("div", Sv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Iv, [
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
              (pe = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && pe.length ? (a(), i("div", Ev, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    S("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Tv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Mv, [
                  (a(!0), i(B, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (O) => (a(), i("div", {
                    key: O,
                    class: "drift-list-item"
                  }, " • " + m(O), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (a(), i("div", Pv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (a(), i("div", Rv, [
                b(os, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    S("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Lv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (a(), i("div", Dv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Nv, [
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
}), Uv = /* @__PURE__ */ Ie(Ov, [["__scopeId", "data-v-e2b37122"]]), Av = { class: "base-modal-header" }, zv = {
  key: 0,
  class: "base-modal-title"
}, Fv = { class: "base-modal-body" }, Vv = {
  key: 0,
  class: "base-modal-loading"
}, Bv = {
  key: 1,
  class: "base-modal-error"
}, Wv = {
  key: 0,
  class: "base-modal-footer"
}, Gv = /* @__PURE__ */ Ce({
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
        style: Lt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", Av, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (a(), i("h3", zv, m(e.title), 1)) : y("", !0)
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
          s("div", Fv, [
            e.loading ? (a(), i("div", Vv, "Loading...")) : e.error ? (a(), i("div", Bv, m(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (a(), i("div", Wv, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ Ie(Gv, [["__scopeId", "data-v-06a4be14"]]), jv = ["type", "disabled"], Hv = {
  key: 0,
  class: "spinner"
}, qv = /* @__PURE__ */ Ce({
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
      e.loading ? (a(), i("span", Hv)) : y("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, jv));
  }
}), Ne = /* @__PURE__ */ Ie(qv, [["__scopeId", "data-v-f3452606"]]), Kv = ["type", "value", "placeholder", "disabled"], Jv = {
  key: 0,
  class: "base-input-error"
}, Qv = /* @__PURE__ */ Ce({
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
          o[1] || (o[1] = cs((n) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = cs((n) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Kv),
      e.error ? (a(), i("span", Jv, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ Ie(Qv, [["__scopeId", "data-v-9ba02cdc"]]), Yv = ["disabled"], Xv = { class: "dropdown-value" }, Zv = ["onClick"], ep = {
  key: 0,
  class: "dropdown-error"
}, tp = /* @__PURE__ */ Ce({
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
    vt(l, async (x) => {
      x && (await Rt(), _());
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
        s("span", Xv, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, Yv),
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
          style: Lt(u.value)
        }, [
          (a(!0), i(B, null, he(e.options, (T) => (a(), i("div", {
            key: d(T),
            class: Be(["dropdown-option", { selected: d(T) === e.modelValue }]),
            onClick: (M) => g(T)
          }, m(v(T)), 11, Zv))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (a(), i("span", ep, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), sp = /* @__PURE__ */ Ie(tp, [["__scopeId", "data-v-857e085b"]]), op = { class: "destination-section" }, np = { class: "section-label" }, ap = { class: "destination-row" }, lp = {
  key: 0,
  class: "path-separator"
}, ip = /* @__PURE__ */ Ce({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelsSubdirectories: l } = rt(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
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
      C && C !== r.value && (f = !0, r.value = C, Rt(() => {
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
    return vt(w, (C) => {
      n("update:modelValue", C);
    }, { immediate: !0 }), vt(() => o.suggestedDirectory, g), vt(d, g), vt(r, (C, $) => {
      f || $ === "" || (v.value = !0);
    }), at(_), (C, $) => (a(), i("div", op, [
      s("h4", np, m(e.label), 1),
      s("div", ap, [
        b(sp, {
          modelValue: r.value,
          "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (a(), i("span", lp, "/")) : y("", !0),
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
}), tc = /* @__PURE__ */ Ie(ip, [["__scopeId", "data-v-2fbc2b02"]]);
function rp(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function cp(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!rp(o.hostname)) return { kind: "unknown" };
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
function up(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Ci(e, t, o) {
  const [n, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(n)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${up(o)}`;
}
const dp = { class: "hf-file-browser" }, mp = { class: "browser-header" }, fp = { class: "repo-info" }, vp = { class: "repo-id" }, pp = {
  key: 0,
  class: "revision-pill"
}, gp = {
  key: 0,
  class: "loading-state"
}, hp = {
  key: 1,
  class: "error-state"
}, yp = { class: "toolbar" }, wp = { class: "toolbar-actions" }, _p = { class: "file-list-container" }, kp = {
  key: 0,
  class: "file-list-header"
}, bp = ["checked", "indeterminate"], $p = {
  key: 1,
  class: "file-checkbox-spacer"
}, Cp = { class: "sort-indicator" }, xp = { class: "sort-indicator" }, Sp = {
  key: 1,
  class: "empty-state"
}, Ip = {
  key: 2,
  class: "file-list"
}, Ep = ["onClick"], Tp = ["checked", "onChange"], Mp = { class: "file-path" }, Pp = { class: "file-size" }, Rp = { class: "action-bar" }, Lp = { class: "summary-info" }, Dp = { class: "summary-count" }, Np = { class: "summary-size" }, Op = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { getHuggingFaceRepoInfo: l } = rt(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = P(() => {
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
    }), z = P(() => o.mode || "download"), G = P(() => o.actionLabel || (z.value === "source" ? "Use as Source" : "Queue Download")), L = P(() => z.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), K = P(() => z.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !T.value);
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
        const ae = r.value.filter((oe) => (oe.shard_group || te(oe.path)) === Ve);
        Ue ? ae.forEach((oe) => De.delete(oe.path)) : ae.forEach((oe) => De.add(oe.path));
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
        const Ve = r.value.find((ae) => ae.path === Ue);
        Ve && De.push({
          url: Ci(o.repoId, o.revision, Ve.path),
          destination: _e,
          filename: Ve.path.split("/").pop() || Ve.path
        });
      }
      n("queue", De);
    }
    function O() {
      if (c.value.size !== 1) return;
      const [_e] = c.value;
      n("selectSource", Ci(o.repoId, o.revision, _e));
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
    return vt(() => [o.repoId, o.revision], () => {
      o.repoId && Pe();
    }, { immediate: !1 }), at(() => {
      Pe();
    }), (_e, De) => (a(), i("div", dp, [
      s("div", mp, [
        s("button", {
          class: "back-btn",
          onClick: De[0] || (De[0] = (Ue) => _e.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", fp, [
          s("span", vp, m(e.repoId), 1),
          e.revision ? (a(), i("span", pp, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (a(), i("div", gp, " Loading repository files... ")) : d.value ? (a(), i("div", hp, m(d.value), 1)) : (a(), i(B, { key: 2 }, [
        s("div", yp, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": De[1] || (De[1] = (Ue) => v.value = Ue),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", wp, [
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
        s("div", _p, [
          C.value.length > 0 ? (a(), i("div", kp, [
            z.value === "download" ? (a(), i("input", {
              key: 0,
              type: "checkbox",
              checked: x.value,
              indeterminate: I.value && !x.value,
              class: "file-checkbox",
              onChange: W
            }, null, 40, bp)) : (a(), i("span", $p)),
            s("span", {
              class: "header-name",
              onClick: De[3] || (De[3] = (Ue) => Q("name"))
            }, [
              De[7] || (De[7] = S(" Name ", -1)),
              s("span", Cp, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: De[4] || (De[4] = (Ue) => Q("size"))
            }, [
              De[8] || (De[8] = S(" Size ", -1)),
              s("span", xp, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (a(), i("div", Sp, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (a(), i("div", Ip, [
            (a(!0), i(B, null, he($.value, (Ue) => (a(), i("div", {
              key: Ue.path,
              class: Be(["file-item", { selected: c.value.has(Ue.path) }]),
              onClick: (Ve) => Y(Ue)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Ue.path),
                class: "file-checkbox",
                onClick: De[5] || (De[5] = pt(() => {
                }, ["stop"])),
                onChange: (Ve) => Y(Ue)
              }, null, 40, Tp),
              s("span", Mp, m(Ue.path), 1),
              s("span", Pp, m(ce(Ue.size)), 1)
            ], 10, Ep))), 128))
          ]))
        ]),
        z.value === "download" ? (a(), R(tc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": De[6] || (De[6] = (Ue) => g.value = Ue),
          "suggested-directory": N.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", Rp, [
          s("div", Lp, [
            s("span", Dp, m(L.value), 1),
            s("span", Np, m(ce(M.value)), 1)
          ]),
          b(Ne, {
            variant: "primary",
            disabled: K.value,
            onClick: ue
          }, {
            default: h(() => [
              S(m(G.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), Up = /* @__PURE__ */ Ie(Op, [["__scopeId", "data-v-06caa551"]]), Ap = { class: "token-config-modal" }, zp = { class: "provider-info" }, Fp = { class: "provider-icon" }, Vp = { class: "provider-name" }, Bp = {
  key: 0,
  class: "current-token"
}, Wp = { class: "mask" }, Gp = { class: "token-input-section" }, jp = { class: "input-label" }, Hp = { class: "help-text" }, qp = ["href"], Kp = { class: "modal-actions" }, Jp = /* @__PURE__ */ Ce({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, n = t, { updateConfig: l } = rt(), r = k(""), c = k(!1), u = k(!1), d = P(
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
        s("div", Ap, [
          s("div", zp, [
            s("span", Fp, m(v.value), 1),
            s("span", Vp, m(d.value), 1)
          ]),
          e.currentTokenMask ? (a(), i("div", Bp, [
            $[4] || ($[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", Wp, m(e.currentTokenMask), 1),
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
          s("div", Gp, [
            s("label", jp, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (x) => r.value = x),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", Hp, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, qp)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", Kp, [
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
}), Qp = /* @__PURE__ */ Ie(Jp, [["__scopeId", "data-v-525ec64a"]]), Yp = { class: "huggingface-tab" }, Xp = {
  key: 0,
  class: "search-section"
}, Zp = { class: "search-header" }, eg = { class: "search-bar" }, tg = {
  key: 1,
  class: "search-results"
}, sg = {
  key: 0,
  class: "loading-state"
}, og = {
  key: 1,
  class: "error-state"
}, ng = {
  key: 2,
  class: "results-list"
}, ag = ["onClick"], lg = { class: "repo-header" }, ig = { class: "repo-id" }, rg = { class: "repo-stats" }, cg = {
  class: "stat",
  title: "Downloads"
}, ug = {
  class: "stat",
  title: "Likes"
}, dg = {
  key: 0,
  class: "repo-desc"
}, mg = {
  key: 1,
  class: "repo-tags"
}, fg = {
  key: 3,
  class: "empty-state"
}, vg = {
  key: 4,
  class: "hint-state"
}, pg = /* @__PURE__ */ Ce({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = rt(), n = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), C = P(() => {
      if (!u.value) return !1;
      const G = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || G.includes("authentication") || G.includes("unauthorized");
    });
    function $(G) {
      return G >= 1e6 ? `${(G / 1e6).toFixed(1)}M` : G >= 1e3 ? `${(G / 1e3).toFixed(1)}K` : String(G);
    }
    async function x() {
      const G = l.value.trim();
      if (!G) return;
      u.value = null;
      const L = cp(G);
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
      if (/^[\w-]+\/[\w.-]+$/.test(G) && !G.includes("://")) {
        v.value = G, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const K = await t(G);
        r.value = K.results, d.value = !0;
      } catch (K) {
        u.value = K instanceof Error ? K.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(G) {
      v.value = G, f.value = "main", p.value = void 0, w.value = void 0, n.value = "browse";
    }
    function T() {
      n.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function M() {
      try {
        const G = await o();
        _.value = G.huggingface_token || null;
      } catch (G) {
        console.error("Failed to load config:", G);
      }
    }
    function N() {
      M(), C.value && l.value && x();
    }
    function z() {
      _.value = null;
    }
    return at(M), (G, L) => (a(), i("div", Yp, [
      n.value === "search" ? (a(), i("div", Xp, [
        s("div", Zp, [
          s("div", eg, [
            b(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": L[0] || (L[0] = (K) => l.value = K),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: cs(x, ["enter"])
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
      n.value === "search" ? (a(), i("div", tg, [
        c.value ? (a(), i("div", sg, " Searching HuggingFace... ")) : u.value ? (a(), i("div", og, [
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
        ])) : r.value.length > 0 ? (a(), i("div", ng, [
          (a(!0), i(B, null, he(r.value, (K) => (a(), i("div", {
            key: K.repo_id,
            class: "repo-card",
            onClick: (ce) => I(K.repo_id)
          }, [
            s("div", lg, [
              s("span", ig, m(K.repo_id), 1),
              s("div", rg, [
                s("span", cg, [
                  L[8] || (L[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  S(" " + m($(K.downloads)), 1)
                ]),
                s("span", ug, [
                  L[9] || (L[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  S(" " + m($(K.likes)), 1)
                ])
              ])
            ]),
            K.description ? (a(), i("p", dg, m(K.description), 1)) : y("", !0),
            K.tags.length > 0 ? (a(), i("div", mg, [
              (a(!0), i(B, null, he(K.tags.slice(0, 5), (ce) => (a(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, ag))), 128))
        ])) : d.value ? (a(), i("div", fg, " No repositories found ")) : (a(), i("div", vg, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (a(), R(Up, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: T,
        onQueue: L[3] || (L[3] = (K) => G.$emit("queue", K)),
        onSelectSource: L[4] || (L[4] = (K) => G.$emit("selectSource", K))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (a(), R(Qp, {
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
}), sc = /* @__PURE__ */ Ie(pg, [["__scopeId", "data-v-eccbf32d"]]), gg = { class: "candidate-card" }, hg = { class: "candidate-main" }, yg = { class: "candidate-url" }, wg = { class: "candidate-meta" }, _g = { class: "meta-chip" }, kg = {
  key: 0,
  class: "meta-chip"
}, bg = ["aria-expanded"], $g = {
  key: 1,
  class: "meta-chip"
}, Cg = { class: "match-popover-reasons" }, xg = { class: "candidate-footer" }, Sg = {
  key: 0,
  class: "candidate-context"
}, Ig = { key: 1 }, Eg = /* @__PURE__ */ Ce({
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
    vt(n, (f) => {
      f ? (document.addEventListener("pointerdown", c), document.addEventListener("keydown", u)) : (document.removeEventListener("pointerdown", c), document.removeEventListener("keydown", u));
    }), gn(() => {
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
      return a(), i("article", gg, [
        s("div", hg, [
          s("div", yg, m(e.candidate.url), 1),
          s("div", wg, [
            s("span", _g, [
              p[3] || (p[3] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(d(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (a(), i("span", kg, [
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
                onClick: p[0] || (p[0] = pt((_) => n.value = !n.value, ["stop"]))
              }, [
                p[5] || (p[5] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ], 8, bg)) : (a(), i("span", $g, [
                p[6] || (p[6] = s("span", { class: "chip-label" }, "Match", -1)),
                s("span", null, m(v(e.candidate.confidence)), 1)
              ])),
              n.value && ((g = e.candidate.reasons) != null && g.length) ? (a(), i("div", {
                key: 2,
                class: "match-popover",
                onClick: p[1] || (p[1] = pt(() => {
                }, ["stop"]))
              }, [
                p[7] || (p[7] = s("div", { class: "match-popover-title" }, "Matched by", -1)),
                s("div", Cg, [
                  (a(!0), i(B, null, he(e.candidate.reasons, (_) => (a(), i("span", {
                    key: _,
                    class: "reason-chip"
                  }, m(_), 1))), 128))
                ])
              ])) : y("", !0)
            ], 512)) : y("", !0)
          ]),
          s("div", xg, [
            e.candidate.context ? (a(), i("details", Sg, [
              p[8] || (p[8] = s("summary", null, "Workflow snippet", -1)),
              s("p", null, m(e.candidate.context), 1)
            ])) : (a(), i("div", Ig)),
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
}), oc = /* @__PURE__ */ Ie(Eg, [["__scopeId", "data-v-329b9068"]]), Tg = { class: "source-url-form" }, Mg = { class: "input-group" }, Pg = { key: 0 }, Rg = {
  key: 1,
  class: "description"
}, Lg = { class: "actions" }, Dg = /* @__PURE__ */ Ce({
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
    return (d, v) => (a(), i("div", Tg, [
      s("div", Mg, [
        e.label ? (a(), i("label", Pg, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => n("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (a(), i("p", Rg, m(e.description), 1)) : y("", !0)
      ]),
      ot(d.$slots, "default", {}, void 0),
      s("div", Lg, [
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
}), nc = /* @__PURE__ */ Ie(Dg, [["__scopeId", "data-v-e2610d45"]]), Ng = { class: "source-picker" }, Og = {
  key: 0,
  class: "model-summary"
}, Ug = { class: "model-heading" }, Ag = { class: "summary-name" }, zg = { class: "summary-meta" }, Fg = {
  key: 0,
  class: "hash-row"
}, Vg = { class: "hash-value" }, Bg = {
  key: 1,
  class: "hash-row"
}, Wg = { class: "hash-value" }, Gg = {
  key: 2,
  class: "hash-row"
}, jg = { class: "hash-value" }, Hg = {
  key: 4,
  class: "hash-error"
}, qg = { class: "tab-bar" }, Kg = ["onClick"], Jg = {
  key: 1,
  class: "tab-content"
}, Qg = { class: "section-header-row" }, Yg = {
  key: 0,
  class: "state-message"
}, Xg = {
  key: 1,
  class: "error-message"
}, Zg = {
  key: 2,
  class: "candidate-list"
}, eh = {
  key: 3,
  class: "state-message"
}, th = {
  key: 2,
  class: "tab-content source-browser-content"
}, sh = {
  key: 3,
  class: "tab-content"
}, oh = { class: "section-header-row" }, nh = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { getModelSourceCandidates: l, computeModelHashes: r } = rt(), c = [
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
    return at($), (I, T) => (a(), i("div", Ng, [
      e.showModelSummary ? (a(), i("div", Og, [
        s("div", Ug, [
          T[4] || (T[4] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Ag, m(e.model.filename), 1)
        ]),
        s("div", zg, [
          e.model.hash ? (a(), i("div", Fg, [
            T[5] || (T[5] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Vg, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (a(), i("div", Bg, [
            T[6] || (T[6] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", Wg, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (a(), i("div", Gg, [
            T[7] || (T[7] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", jg, m(e.model.sha256), 1)
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
          g.value ? (a(), i("p", Hg, m(g.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", qg, [
        (a(), i(B, null, he(c, (M) => s("button", {
          key: M.id,
          class: Be(["tab-btn", { active: u.value === M.id }]),
          onClick: (N) => u.value = M.id
        }, m(M.label), 11, Kg)), 64))
      ]),
      u.value === "workflow" ? (a(), i("section", Jg, [
        s("div", Qg, [
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
        v.value ? (a(), i("div", Yg, "Scanning workflows...")) : f.value ? (a(), i("div", Xg, m(f.value), 1)) : _.value.length ? (a(), i("div", Zg, [
          (a(!0), i(B, null, he(_.value, (M) => (a(), R(oc, {
            key: `${M.workflow}:${M.url}`,
            candidate: M,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === M.url,
            onSelect: T[0] || (T[0] = (N) => n("selectSource", N))
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (a(), i("div", eh, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (a(), i("section", th, [
        b(sc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: T[1] || (T[1] = (M) => n("selectSource", M))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (a(), i("section", sh, [
        s("div", oh, [
          s("div", null, [
            T[11] || (T[11] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(nc, {
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
}), ah = /* @__PURE__ */ Ie(nh, [["__scopeId", "data-v-e9633660"]]), lh = {
  key: 0,
  class: "error-message"
}, ih = /* @__PURE__ */ Ce({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { addModelSource: l } = rt(), r = k(o.model), c = k(null), u = k(null);
    vt(() => o.model, (f) => {
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
        b(ah, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (a(), i("p", lh, m(u.value), 1)) : y("", !0)
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
}), ac = /* @__PURE__ */ Ie(ih, [["__scopeId", "data-v-62104cdb"]]), rh = { class: "readiness-body" }, ch = {
  key: 0,
  class: "issue-section"
}, uh = { class: "section-heading" }, dh = { class: "issue-list" }, mh = { class: "issue-main" }, fh = { class: "issue-name" }, vh = { class: "issue-meta" }, ph = { key: 0 }, gh = { key: 1 }, hh = ["disabled", "onClick"], yh = {
  key: 1,
  class: "issue-note"
}, wh = {
  key: 1,
  class: "issue-section"
}, _h = { class: "section-heading" }, kh = { class: "issue-list" }, bh = { class: "issue-main" }, $h = { class: "issue-name" }, Ch = { class: "issue-meta" }, xh = { class: "issue-reason" }, Sh = ["disabled", "onClick"], Ih = {
  key: 1,
  class: "issue-note"
}, Eh = {
  key: 2,
  class: "empty-state"
}, Th = {
  key: 3,
  class: "error-message"
}, Mh = /* @__PURE__ */ Ce({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, updateNodeCriticality: r } = rt(), c = k(null), u = k(null), d = k(null), v = k(null), f = P(() => o.warnings.models_without_sources), p = P(() => o.warnings.nodes_without_provenance);
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
          s("div", rh, [
            f.value.length ? (a(), i("section", ch, [
              s("div", uh, [
                x[4] || (x[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", dh, [
                (a(!0), i(B, null, he(f.value, (I) => (a(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", mh, [
                    s("div", fh, m(I.filename), 1),
                    s("div", vh, [
                      I.hash ? (a(), i("span", ph, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (a(), i("span", gh, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (T) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, hh)) : (a(), i("span", yh, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (a(), i("section", wh, [
              s("div", _h, [
                x[5] || (x[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", kh, [
                (a(!0), i(B, null, he(p.value, (I) => (a(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", bh, [
                    s("div", $h, m(I.name), 1),
                    s("div", Ch, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", xh, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (a(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (T) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, Sh)) : (a(), i("span", Ih, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (a(), i("div", Eh, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (a(), i("div", Th, m(v.value), 1)) : y("", !0)
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
      c.value ? (a(), R(ac, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: x[2] || (x[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: C
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), Il = /* @__PURE__ */ Ie(Mh, [["__scopeId", "data-v-03f88a10"]]), Ph = { class: "health-section-header" }, Rh = { class: "suggestions-content" }, Lh = { class: "suggestions-text" }, Dh = { style: { "margin-top": "var(--cg-space-3)" } }, Nh = {
  key: 1,
  class: "no-issues-text"
}, Oh = {
  key: 2,
  class: "no-issues-text"
}, Uh = /* @__PURE__ */ Ce({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = k(!1), r = k(!1), c = k(!1), u = k(null), d = k(null), v = k(!1), { validateExport: f } = rt();
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
      const X = n.status.workflows.analyzed || [], q = X.filter(
        (ve) => ve.unresolved_models_count > 0 || ve.ambiguous_models_count > 0
      );
      return q.length === 0 && n.status.missing_models_count > 0 ? X.filter((ve) => ve.sync_state === "synced") : q;
    });
    function N() {
      const X = M.value;
      X.length !== 0 && (C.value = !0, _("repair-missing-models", X.map((q) => q.name)));
    }
    function z() {
      C.value = !1;
    }
    t({ resetRepairingState: z, resetRepairingEnvironmentState: I, closeDetailModal: T });
    const G = P(() => n.status.workflows.new.length > 0 || n.status.workflows.modified.length > 0 || n.status.workflows.deleted.length > 0), L = P(() => n.status.has_changes), K = P(() => {
      const X = n.status.git_changes;
      return X.nodes_added.length > 0 || X.nodes_removed.length > 0 || X.workflow_changes;
    }), ce = P(() => n.status.has_changes || G.value), te = P(() => {
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
        const q = te.value.nodes_without_provenance.filter((be) => be.criticality === "optional").length, ve = we.value - q;
        ve > 0 && X.push(`${ve} required node${ve === 1 ? "" : "s"} missing portable source`), q > 0 && X.push(`${q} optional node${q === 1 ? "" : "s"} missing portable source`);
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
    vt(
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
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter((q) => q.status === "broken")) || [];
    }), Pe = P(() => {
      var X;
      return ((X = n.status.workflows.analyzed) == null ? void 0 : X.filter(
        (q) => q.has_path_sync_issues && !q.has_issues
      )) || [];
    }), _e = P(() => ue.value.length > 0);
    function De(X) {
      const q = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const ve of q) {
        const be = X.match(ve);
        if (be != null && be[1])
          return be[1];
      }
      return null;
    }
    function Ue(X) {
      const q = X.map(De).filter((ve) => !!ve);
      return [...new Set(q)];
    }
    function Ve(X) {
      if (X.length === 0) return "";
      if (X.length === 1) return ` (>= ${X[0]})`;
      const q = X.slice(0, 2).map((be) => `>= ${be}`).join(", "), ve = X.length > 2;
      return ` (${q}${ve ? ", ..." : ""})`;
    }
    function ae(X) {
      return X.replace(/uninstallable node mappings?/gi, (q) => q.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function oe(X) {
      const q = ae(X.issue_summary || "Has issues"), ve = /(?:>=|v?\d+\.\d+)/i.test(q), be = Ue(X.version_gated_guidance || []);
      return (X.nodes_version_gated_count || 0) > 0 && be.length > 0 && !ve ? `${X.name} — ${q} (needs ComfyUI ${be.map((Ke) => `>= ${Ke}`).join(", ")})` : `${X.name} — ${q}`;
    }
    const Re = P(() => ue.value.reduce(
      (X, q) => X + (q.nodes_version_gated_count || 0),
      0
    )), fe = P(() => {
      const X = ue.value.flatMap(
        (q) => Ue(q.version_gated_guidance || [])
      );
      return [...new Set(X)];
    }), ne = P(() => ue.value.reduce(
      (X, q) => X + (q.nodes_uninstallable_count || 0),
      0
    )), E = P(() => {
      const X = [];
      return Re.value > 0 && X.push(
        `${Re.value} require newer ComfyUI${Ve(fe.value)}`
      ), ne.value > 0 && X.push(`${ne.value} need community packages`), X.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${X.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = P(() => _e.value || Pe.value.length > 0 || n.status.missing_models_count > 0 || !n.status.comparison.is_synced || n.status.has_legacy_manager), ie = P(() => U.value || W.value || !!d.value), Ee = P(() => {
      const X = [];
      return n.status.workflows.new.length > 0 && X.push(`${n.status.workflows.new.length} new`), n.status.workflows.modified.length > 0 && X.push(`${n.status.workflows.modified.length} modified`), n.status.workflows.deleted.length > 0 && X.push(`${n.status.workflows.deleted.length} deleted`), X.length > 0 ? `${X.join(", ")} workflow${X.length === 1 && !X[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), xe = P(() => {
      var ve, be;
      const X = [], q = n.status.comparison;
      return (ve = q.missing_nodes) != null && ve.length && X.push(`${q.missing_nodes.length} missing node${q.missing_nodes.length === 1 ? "" : "s"}`), (be = q.extra_nodes) != null && be.length && X.push(`${q.extra_nodes.length} untracked node${q.extra_nodes.length === 1 ? "" : "s"}`), X.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${X.join(" and ")}.`;
    }), Se = P(() => {
      var ve, be;
      const X = [], q = n.status.comparison;
      return (ve = q.extra_nodes) != null && ve.length && (q.extra_nodes.slice(0, 3).forEach((Ke) => {
        X.push(`Untracked: ${Ke}`);
      }), q.extra_nodes.length > 3 && X.push(`...and ${q.extra_nodes.length - 3} more untracked`)), (be = q.missing_nodes) != null && be.length && (q.missing_nodes.slice(0, 3).forEach((Ke) => {
        X.push(`Missing: ${Ke}`);
      }), q.missing_nodes.length > 3 && X.push(`...and ${q.missing_nodes.length - 3} more missing`)), X;
    });
    return (X, q) => (a(), i(B, null, [
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
                onClick: q[0] || (q[0] = (ve) => X.$emit("start-setup"))
              }, {
                default: h(() => [...q[15] || (q[15] = [
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
                onClick: q[1] || (q[1] = (ve) => X.$emit("view-environments"))
              }, {
                default: h(() => [...q[16] || (q[16] = [
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
                onClick: q[2] || (q[2] = (ve) => X.$emit("create-environment"))
              }, {
                default: h(() => [...q[17] || (q[17] = [
                  S(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: q[4] || (q[4] = (ve) => r.value = !0),
            onMouseleave: q[5] || (q[5] = (ve) => r.value = !1)
          }, [
            s("div", Ph, [
              b(os, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...q[18] || (q[18] = [
                  S(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Nd, { name: "fade" }, {
                default: h(() => [
                  r.value ? (a(), R(Me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: p
                  }, {
                    default: h(() => [...q[19] || (q[19] = [
                      S(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(jm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Qt({
              left: h(() => [
                e.status.workflows.new.length ? (a(), R(ps, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (a(), R(ps, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (a(), R(ps, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : y("", !0),
                b(ps, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: G.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (a(), R(ps, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (a(), R(ps, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (a(), R(ps, {
                  key: 2,
                  icon: "●",
                  count: pe.value,
                  label: pe.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                O.value ? (a(), R(ps, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                L.value && !K.value && !O.value ? (a(), R(ps, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                L.value ? y("", !0) : (a(), R(ps, {
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
                  q[21] || (q[21] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Rh, [
                    s("span", Lh, m(Ee.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: q[3] || (q[3] = (ve) => X.$emit("commit-changes"))
                    }, {
                      default: h(() => [...q[20] || (q[20] = [
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
                onClick: q[6] || (q[6] = (ve) => X.$emit("create-branch"))
              }, {
                default: h(() => [...q[22] || (q[22] = [
                  S(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Dh, [
            b(os, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...q[23] || (q[23] = [
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
                    onClick: q[7] || (q[7] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...q[24] || (q[24] = [
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
                    onClick: q[8] || (q[8] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...q[25] || (q[25] = [
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
                    onClick: q[9] || (q[9] = (ve) => X.$emit("view-workflows"))
                  }, {
                    default: h(() => [...q[26] || (q[26] = [
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
                    default: h(() => [...q[27] || (q[27] = [
                      S(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: q[10] || (q[10] = (ve) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...q[28] || (q[28] = [
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
                    onClick: q[11] || (q[11] = (ve) => X.$emit("view-nodes"))
                  }, {
                    default: h(() => [...q[29] || (q[29] = [
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
                    onClick: q[12] || (q[12] = (ve) => c.value = !0)
                  }, {
                    default: h(() => [...q[30] || (q[30] = [
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
                    default: h(() => [...q[31] || (q[31] = [
                      S(" Retry ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }, 8, ["description"])) : y("", !0)
            ], 64)) : ce.value ? (a(), i("span", Nh, "No issues")) : (a(), i("span", Oh, "No runtime issues detected"))
          ])
        ]),
        _: 1
      }),
      b(Uv, {
        show: l.value,
        status: e.status,
        "is-repairing": $.value,
        onClose: q[13] || (q[13] = (ve) => l.value = !1),
        onNavigateWorkflows: w,
        onNavigateNodes: g,
        onRepair: x
      }, null, 8, ["show", "status", "is-repairing"]),
      c.value && u.value ? (a(), R(Il, {
        key: 0,
        warnings: u.value.warnings,
        onClose: q[14] || (q[14] = (ve) => c.value = !1),
        onRevalidate: se
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), Ah = /* @__PURE__ */ Ie(Uh, [["__scopeId", "data-v-f6b165fd"]]);
async function En(e, t) {
  const o = await js(e, t);
  if (!o.ok) {
    const n = await o.json().catch(() => ({}));
    throw new Error(n.error || n.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function zh() {
  async function e() {
    try {
      return await En("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await En("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await En("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function n() {
    await En("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: n
  };
}
const Fh = {
  key: 0,
  class: "base-title-count"
}, Vh = /* @__PURE__ */ Ce({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (a(), R(kl(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (a(), i("span", Fh, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ Ie(Vh, [["__scopeId", "data-v-5a01561d"]]), Bh = ["value", "disabled"], Wh = {
  key: 0,
  value: "",
  disabled: ""
}, Gh = ["value"], jh = {
  key: 0,
  class: "base-select-error"
}, Hh = /* @__PURE__ */ Ce({
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
        e.placeholder ? (a(), i("option", Wh, m(e.placeholder), 1)) : y("", !0),
        (a(!0), i(B, null, he(e.options, (r) => (a(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, Gh))), 128))
      ], 42, Bh),
      e.error ? (a(), i("span", jh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Un = /* @__PURE__ */ Ie(Hh, [["__scopeId", "data-v-4996bfe0"]]), qh = { class: "popover-header" }, Kh = { class: "popover-title" }, Jh = { class: "popover-content" }, Qh = {
  key: 0,
  class: "popover-actions"
}, Yh = /* @__PURE__ */ Ce({
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
        style: Lt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (n) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Lt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", qh, [
            s("h4", Kh, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", Jh, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (a(), i("div", Qh, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), is = /* @__PURE__ */ Ie(Yh, [["__scopeId", "data-v-7c1f5547"]]), Xh = { class: "detail-section" }, Zh = {
  key: 0,
  class: "empty-message"
}, ey = { class: "model-header" }, ty = { class: "model-name" }, sy = { class: "model-details" }, oy = { class: "model-row" }, ny = { class: "model-row" }, ay = { class: "label" }, ly = {
  key: 0,
  class: "model-row model-row-nodes"
}, iy = { class: "node-list" }, ry = ["onClick"], cy = {
  key: 1,
  class: "model-row"
}, uy = { class: "value" }, dy = {
  key: 2,
  class: "model-row"
}, my = { class: "value error" }, fy = {
  key: 0,
  class: "model-actions"
}, vy = { class: "detail-section" }, py = {
  key: 0,
  class: "empty-message"
}, gy = { class: "node-content" }, hy = { class: "node-main" }, yy = { class: "node-name" }, wy = { class: "node-badge" }, _y = {
  key: 0,
  class: "node-version"
}, ky = ["onClick"], by = {
  key: 2,
  class: "node-install-queued"
}, $y = {
  key: 0,
  class: "node-guidance"
}, Cy = /* @__PURE__ */ Ce({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = rt(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), $ = [
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
    function G(ee) {
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
            s("section", Xh, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (a(), i("div", Zh, " No models used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, he(d.value.models, (Q) => {
                var ke;
                return a(), i("div", {
                  key: Q.hash || Q.filename,
                  class: "model-card"
                }, [
                  s("div", ey, [
                    W[6] || (W[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", ty, m(Q.filename), 1)
                  ]),
                  s("div", sy, [
                    s("div", oy, [
                      W[7] || (W[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", x(Q.status)])
                      }, m(I(Q.status)), 3)
                    ]),
                    s("div", ny, [
                      s("span", ay, [
                        W[8] || (W[8] = S(" Importance: ", -1)),
                        b(ec, {
                          size: 14,
                          title: "About importance levels",
                          onClick: W[0] || (W[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Un, {
                        "model-value": w.value[Q.filename] || Q.importance,
                        options: $,
                        "onUpdate:modelValue": (se) => ce(Q.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    Q.loaded_by && Q.loaded_by.length > 0 ? (a(), i("div", ly, [
                      W[9] || (W[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", iy, [
                        (a(!0), i(B, null, he(z(Q), (se, pe) => (a(), i("div", {
                          key: `${se.node_id}-${pe}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        Q.loaded_by.length > 3 ? (a(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => L(Q.hash || Q.filename)
                        }, m(G(Q.hash || Q.filename) ? "▼ Show less" : `▶ View all (${Q.loaded_by.length})`), 9, ry)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    Q.size_mb ? (a(), i("div", cy, [
                      W[10] || (W[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", uy, m(Q.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    Q.has_category_mismatch ? (a(), i("div", dy, [
                      W[13] || (W[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", my, [
                        W[11] || (W[11] = S(" In ", -1)),
                        s("code", null, m(Q.actual_category) + "/", 1),
                        W[12] || (W[12] = S(" but loader needs ", -1)),
                        s("code", null, m((ke = Q.expected_categories) == null ? void 0 : ke[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  Q.status !== "available" ? (a(), i("div", fy, [
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
            s("section", vy, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  S("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (a(), i("div", py, " No custom nodes used in this workflow ")) : y("", !0),
              (a(!0), i(B, null, he(d.value.nodes, (Q, ke) => (a(), i("div", {
                key: `${Q.name}-${Q.status}-${ke}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", T(Q.status)])
                }, m(M(Q.status)), 3),
                s("div", gy, [
                  s("div", hy, [
                    s("span", yy, m(Q.name), 1),
                    s("span", wy, m(N(Q.status)), 1),
                    Q.version ? (a(), i("span", _y, "v" + m(Q.version), 1)) : y("", !0),
                    Q.status === "uninstallable" && Q.package_id && !C.value.has(Q.package_id) ? (a(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(Q)
                    }, " Install ", 8, ky)) : Q.status === "uninstallable" && Q.package_id && C.value.has(Q.package_id) ? (a(), i("span", by, " Queued ")) : y("", !0)
                  ]),
                  Q.guidance ? (a(), i("div", $y, m(Q.guidance), 1)) : y("", !0)
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
      b(is, {
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
}), xy = /* @__PURE__ */ Ie(Cy, [["__scopeId", "data-v-543076d9"]]), it = co({
  items: [],
  status: "idle"
});
let ws = null;
function lc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ba(e) {
  return it.items.find((t) => t.id === e);
}
async function ho() {
  if (it.status === "downloading") return;
  const e = it.items.find((t) => t.status === "queued");
  if (!e) {
    it.status = "idle";
    return;
  }
  it.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Sy(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", ho();
  }
}
async function Sy(e) {
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
async function Iy() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (it.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const n = {
        id: lc(),
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
      it.items.push(n);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Do() {
  function e($) {
    for (const x of $) {
      if (it.items.some(
        (M) => M.url === x.url && M.targetPath === x.targetPath && ["queued", "downloading", "paused", "completed"].includes(M.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${x.filename}`);
        continue;
      }
      const T = {
        id: lc(),
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
      it.items.push(T);
    }
    it.status === "idle" && ho();
  }
  async function t($) {
    const x = Ba($);
    if (x) {
      if (x.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(x.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), x.status = "failed", x.error = "Cancelled by user", it.status = "idle", ho();
      } else if (x.status === "queued") {
        const I = it.items.findIndex((T) => T.id === $);
        I >= 0 && it.items.splice(I, 1);
      }
    }
  }
  function o($) {
    const x = Ba($);
    !x || x.status !== "failed" || (x.status = "queued", x.error = void 0, x.progress = 0, x.downloaded = 0, it.status === "idle" && ho());
  }
  function n($) {
    const x = Ba($);
    !x || x.status !== "paused" || (x.status = "queued", it.status === "idle" && ho());
  }
  function l() {
    const $ = it.items.filter((x) => x.status === "paused");
    for (const x of $)
      x.status = "queued";
    it.status === "idle" && ho();
  }
  function r($) {
    const x = it.items.findIndex((I) => I.id === $);
    x >= 0 && ["completed", "failed", "paused"].includes(it.items[x].status) && it.items.splice(x, 1);
  }
  function c() {
    it.items = it.items.filter(($) => $.status !== "completed");
  }
  function u() {
    it.items = it.items.filter(($) => $.status !== "failed");
  }
  const d = P(
    () => it.items.find(($) => $.status === "downloading")
  ), v = P(
    () => it.items.filter(($) => $.status === "queued")
  ), f = P(
    () => it.items.filter(($) => $.status === "completed")
  ), p = P(
    () => it.items.filter(($) => $.status === "failed")
  ), w = P(
    () => it.items.filter(($) => $.status === "paused")
  ), g = P(() => it.items.length > 0), _ = P(
    () => it.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), C = P(
    () => it.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: zn(it),
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
    loadPendingDownloads: Iy
  };
}
function ic() {
  const e = k(null), t = k(null), o = k([]), n = k([]), l = k(!1), r = k(null);
  async function c(I, T) {
    const M = await js(I, T);
    if (!M.ok) {
      const N = await M.json().catch(() => ({})), z = N.error || N.message || `Request failed: ${M.status}`;
      throw new Error(z);
    }
    return M.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let T;
      return zo() || (T = await c(
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
      if (!zo()) {
        const G = Object.fromEntries(T), L = Object.fromEntries(M), K = N ? Array.from(N) : [];
        z = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: L,
              skipped_packages: K
            })
          }
        );
      }
      return t.value = z, z;
    } catch (z) {
      const G = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = G, z;
    } finally {
      l.value = !1;
    }
  }
  async function v(I, T = 10) {
    l.value = !0, r.value = null;
    try {
      let M;
      return zo() || (M = await c(
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
      return zo() || (M = await c(
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
      return zo(), await _(I);
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
        const G = p.nodesToInstall[z], L = N.get(G);
        p.nodeInstallProgress.completedNodes.push({
          node_id: G,
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
      const G = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: N,
          model_choices: z
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const L = G.body.getReader(), K = new TextDecoder();
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
    } catch (G) {
      const L = G instanceof Error ? G.message : "Unknown error occurred";
      throw r.value = L, p.error = L, p.phase = "error", G;
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
    const { addToQueue: M } = Do(), N = T.filter((z) => z.url && z.target_path).map((z) => ({
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
const Ey = { class: "resolution-stepper" }, Ty = { class: "stepper-header" }, My = ["onClick"], Py = {
  key: 0,
  class: "step-icon"
}, Ry = {
  key: 1,
  class: "step-number"
}, Ly = { class: "step-label" }, Dy = {
  key: 0,
  class: "step-connector"
}, Ny = { class: "stepper-content" }, Oy = /* @__PURE__ */ Ce({
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
    return (v, f) => (a(), i("div", Ey, [
      s("div", Ty, [
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
            l(p.id) ? (a(), i("span", Py, "✓")) : (a(), i("span", Ry, m(w + 1), 1))
          ], 2),
          s("div", Ly, m(p.label), 1),
          w < e.steps.length - 1 ? (a(), i("div", Dy)) : y("", !0)
        ], 10, My))), 128))
      ]),
      s("div", Ny, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), Uy = /* @__PURE__ */ Ie(Oy, [["__scopeId", "data-v-2a7b3af8"]]), Ay = /* @__PURE__ */ Ce({
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
}), Jn = /* @__PURE__ */ Ie(Ay, [["__scopeId", "data-v-17ec4b80"]]), zy = { class: "node-info" }, Fy = { class: "node-info-text" }, Vy = { class: "item-body" }, By = {
  key: 0,
  class: "resolved-state"
}, Wy = {
  key: 1,
  class: "multiple-options"
}, Gy = {
  key: 0,
  class: "installed-packs-section"
}, jy = { class: "installed-packs-list" }, Hy = ["onClick"], qy = { class: "installed-pack-name" }, Ky = { class: "installed-pack-source" }, Jy = { class: "options-list" }, Qy = ["onClick"], Yy = ["name", "value", "checked", "onChange"], Xy = { class: "option-content" }, Zy = { class: "option-header" }, e1 = { class: "option-package-id" }, t1 = {
  key: 0,
  class: "option-title"
}, s1 = { class: "option-meta" }, o1 = {
  key: 0,
  class: "installed-badge"
}, n1 = { class: "action-buttons" }, a1 = {
  key: 2,
  class: "unresolved"
}, l1 = {
  key: 0,
  class: "installed-packs-section"
}, i1 = { class: "installed-packs-list" }, r1 = ["onClick"], c1 = { class: "installed-pack-name" }, u1 = { class: "installed-pack-source" }, d1 = {
  key: 1,
  class: "searching-state"
}, m1 = { class: "options-list" }, f1 = ["onClick"], v1 = ["name", "value"], p1 = { class: "option-content" }, g1 = { class: "option-header" }, h1 = { class: "option-package-id" }, y1 = {
  key: 0,
  class: "option-description"
}, w1 = { class: "option-meta" }, _1 = {
  key: 0,
  class: "installed-badge"
}, k1 = {
  key: 3,
  class: "unresolved-message"
}, b1 = { class: "action-buttons" }, $1 = /* @__PURE__ */ Ce({
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
      s("div", zy, [
        s("span", Fy, [
          p[7] || (p[7] = S("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Vy, [
        r.value ? (a(), i("div", By, [
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
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", Wy, [
          c.value.length > 0 ? (a(), i("div", Gy, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", jy, [
              (a(!0), i(B, null, he(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", qy, m(w.package_id), 1),
                s("span", Ky, m(v(w.source)), 1)
              ], 8, Hy))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", Jy, [
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
              }, null, 40, Yy),
              s("div", Xy, [
                s("div", Zy, [
                  s("span", e1, m(w.package_id), 1),
                  b(Jn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (a(), i("div", t1, m(w.title), 1)) : y("", !0),
                s("div", s1, [
                  w.is_installed ? (a(), i("span", o1, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, Qy))), 128))
          ]),
          s("div", n1, [
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
        ])) : (a(), i("div", a1, [
          c.value.length > 0 ? (a(), i("div", l1, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", i1, [
              (a(!0), i(B, null, he(c.value, (w) => (a(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => n("installed-pack-selected", w.package_id)
              }, [
                s("span", c1, m(w.package_id), 1),
                s("span", u1, m(v(w.source)), 1)
              ], 8, r1))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (a(), i("div", d1, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (a(), i(B, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", m1, [
              (a(!0), i(B, null, he(e.searchResults.slice(0, 5), (w, g) => (a(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => n("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, v1),
                s("div", p1, [
                  s("div", g1, [
                    s("span", h1, m(w.package_id), 1),
                    b(Jn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (a(), i("div", y1, m(l(w.description)), 1)) : y("", !0),
                  s("div", w1, [
                    w.is_installed ? (a(), i("span", _1, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, f1))), 128))
            ])
          ], 64)) : (a(), i("div", k1, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", b1, [
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
}), C1 = /* @__PURE__ */ Ie($1, [["__scopeId", "data-v-fb0bbf03"]]), x1 = { class: "item-navigator" }, S1 = { class: "nav-item-info" }, I1 = ["title"], E1 = { class: "nav-controls" }, T1 = { class: "nav-arrows" }, M1 = ["disabled"], P1 = ["disabled"], R1 = { class: "nav-position" }, L1 = /* @__PURE__ */ Ce({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", x1, [
      s("div", S1, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, I1)
      ]),
      s("div", E1, [
        s("div", T1, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, M1),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, P1)
        ]),
        s("span", R1, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), rc = /* @__PURE__ */ Ie(L1, [["__scopeId", "data-v-74af7920"]]), D1 = { class: "node-resolution-step" }, N1 = {
  key: 0,
  class: "auto-resolved-section"
}, O1 = { class: "section-header" }, U1 = { class: "stat-badge" }, A1 = { class: "resolved-packages-list" }, z1 = { class: "package-info" }, F1 = { class: "package-id" }, V1 = { class: "node-count" }, B1 = { class: "package-actions" }, W1 = {
  key: 0,
  class: "status-badge install"
}, G1 = {
  key: 1,
  class: "status-badge skip"
}, j1 = ["onClick"], H1 = {
  key: 1,
  class: "section-divider"
}, q1 = { class: "step-header" }, K1 = { class: "stat-badge" }, J1 = {
  key: 1,
  class: "step-body"
}, Q1 = {
  key: 3,
  class: "empty-state"
}, Y1 = { class: "node-modal-body" }, X1 = { class: "node-search-results-container" }, Z1 = {
  key: 0,
  class: "node-search-results"
}, ew = ["onClick"], tw = { class: "node-result-header" }, sw = { class: "node-result-package-id" }, ow = {
  key: 0,
  class: "node-result-description"
}, nw = {
  key: 1,
  class: "node-empty-state"
}, aw = {
  key: 2,
  class: "node-empty-state"
}, lw = {
  key: 3,
  class: "node-empty-state"
}, iw = { class: "node-manual-entry-modal" }, rw = { class: "node-modal-body" }, cw = { class: "node-modal-actions" }, uw = /* @__PURE__ */ Ce({
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
    const o = e, n = t, { searchNodes: l } = ic(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && pe(), _.value = !1;
    }
    const $ = P(() => o.nodes[r.value]), x = P(() => o.nodes.filter((ae) => o.nodeChoices.has(ae.node_type)).length), I = P(() => $.value ? w.value.get($.value.node_type) || [] : []), T = P(() => $.value ? g.value.has($.value.node_type) : !1);
    vt($, async (ae) => {
      var oe;
      ae && ((oe = ae.options) != null && oe.length || w.value.has(ae.node_type) || g.value.has(ae.node_type) || o.nodeChoices.has(ae.node_type) || await M(ae.node_type));
    }, { immediate: !0 });
    async function M(ae) {
      g.value.add(ae);
      try {
        const oe = await l(ae, 5);
        w.value.set(ae, oe);
      } catch {
        w.value.set(ae, []);
      } finally {
        g.value.delete(ae);
      }
    }
    const N = P(() => o.autoResolvedPackages.filter((ae) => !o.skippedPackages.has(ae.package_id)).length);
    function z(ae) {
      return o.skippedPackages.has(ae);
    }
    function G(ae) {
      n("package-skip", ae);
    }
    const L = P(() => {
      var oe;
      if (!$.value) return "not-found";
      const ae = o.nodeChoices.get($.value.node_type);
      if (ae)
        switch (ae.action) {
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
      const ae = o.nodeChoices.get($.value.node_type);
      if (ae)
        switch (ae.action) {
          case "install":
            return ae.package_id ? `→ ${ae.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = $.value.options) != null && oe.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function ce(ae) {
      ae >= 0 && ae < o.nodes.length && (r.value = ae);
    }
    function te() {
      var ae;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Re = o.nodes[oe];
        if (!((ae = o.nodeChoices) != null && ae.has(Re.node_type))) {
          ce(oe);
          return;
        }
      }
    }
    function Y() {
      $.value && (n("mark-optional", $.value.node_type), Rt(() => te()));
    }
    function we() {
      $.value && (n("skip", $.value.node_type), Rt(() => te()));
    }
    function ee(ae) {
      $.value && (n("option-selected", $.value.node_type, ae), Rt(() => te()));
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
    function se(ae) {
      $.value && (n("manual-entry", $.value.node_type, ae), Rt(() => te()));
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
    async function _e(ae) {
      if (!ae.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(ae, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function De(ae) {
      $.value && (n("manual-entry", $.value.node_type, ae.package_id), pe(), Rt(() => te()));
    }
    function Ue(ae) {
      $.value && (n("manual-entry", $.value.node_type, ae.package_id), Rt(() => te()));
    }
    function Ve() {
      !$.value || !v.value.trim() || (n("manual-entry", $.value.node_type, v.value.trim()), O(), Rt(() => te()));
    }
    return (ae, oe) => {
      var Re, fe;
      return a(), i("div", D1, [
        e.autoResolvedPackages.length > 0 ? (a(), i("div", N1, [
          s("div", O1, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", U1, m(N.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", A1, [
            (a(!0), i(B, null, he(e.autoResolvedPackages, (ne) => (a(), i("div", {
              key: ne.package_id,
              class: "resolved-package-item"
            }, [
              s("div", z1, [
                s("code", F1, m(ne.package_id), 1),
                s("span", V1, m(ne.node_types_count) + " node type" + m(ne.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", B1, [
                z(ne.package_id) ? (a(), i("span", G1, " SKIPPED ")) : (a(), i("span", W1, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (E) => G(ne.package_id)
                }, m(z(ne.package_id) ? "Include" : "Skip"), 9, j1)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (a(), i("div", H1)) : y("", !0),
        e.nodes.length > 0 ? (a(), i(B, { key: 2 }, [
          s("div", q1, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", K1, m(x.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (a(), R(rc, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (ne) => ce(r.value - 1)),
            onNext: oe[1] || (oe[1] = (ne) => ce(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          $.value ? (a(), i("div", J1, [
            b(C1, {
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
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (a(), i("div", Q1, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (a(), R(Kt, { to: "body" }, [
          c.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = pt((ne) => _.value = !0, ["self"])),
            onMouseup: pt(C, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (ne) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: pe
                }, "✕")
              ]),
              s("div", Y1, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (ne) => d.value = ne),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", X1, [
                  f.value.length > 0 ? (a(), i("div", Z1, [
                    (a(!0), i(B, null, he(f.value, (ne) => (a(), i("div", {
                      key: ne.package_id,
                      class: "node-search-result-item",
                      onClick: (E) => De(ne)
                    }, [
                      s("div", tw, [
                        s("code", sw, m(ne.package_id), 1),
                        ne.match_confidence ? (a(), R(Jn, {
                          key: 0,
                          confidence: ne.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      ne.description ? (a(), i("div", ow, m(ne.description), 1)) : y("", !0)
                    ], 8, ew))), 128))
                  ])) : p.value ? (a(), i("div", nw, "Searching...")) : d.value ? (a(), i("div", aw, 'No packages found matching "' + m(d.value) + '"', 1)) : (a(), i("div", lw, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (a(), R(Kt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: pt(O, ["self"])
          }, [
            s("div", iw, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: O
                }, "✕")
              ]),
              s("div", rw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (ne) => v.value = ne),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", cw, [
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
}), dw = /* @__PURE__ */ Ie(uw, [["__scopeId", "data-v-94c6a438"]]), mw = { class: "node-info" }, fw = { class: "node-info-text" }, vw = { class: "item-body" }, pw = {
  key: 0,
  class: "resolved-state"
}, gw = {
  key: 1,
  class: "multiple-options"
}, hw = { class: "options-list" }, yw = ["onClick"], ww = ["name", "value", "checked", "onChange"], _w = { class: "option-content" }, kw = { class: "option-header" }, bw = { class: "option-filename" }, $w = { class: "option-meta" }, Cw = { class: "option-size" }, xw = { class: "option-category" }, Sw = { class: "option-path" }, Iw = { class: "action-buttons" }, Ew = {
  key: 2,
  class: "unresolved"
}, Tw = { class: "action-buttons" }, Mw = /* @__PURE__ */ Ce({
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
      s("div", mw, [
        s("span", fw, [
          v[7] || (v[7] = S("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (a(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", vw, [
        l.value ? (a(), i("div", pw, [
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
        ])) : e.hasMultipleOptions && e.options ? (a(), i("div", gw, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", hw, [
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
              }, null, 40, ww),
              s("div", _w, [
                s("div", kw, [
                  s("span", bw, m(f.model.filename), 1),
                  b(Jn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", $w, [
                  s("span", Cw, m(u(f.model.size)), 1),
                  s("span", xw, m(f.model.category), 1)
                ]),
                s("div", Sw, m(f.model.relative_path), 1)
              ])
            ], 10, yw))), 128))
          ]),
          s("div", Iw, [
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
        ])) : (a(), i("div", Ew, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Tw, [
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
}), Pw = /* @__PURE__ */ Ie(Mw, [["__scopeId", "data-v-8a82fefa"]]), Rw = { class: "model-resolution-step" }, Lw = { class: "step-header" }, Dw = { class: "step-info" }, Nw = { class: "step-title" }, Ow = { class: "step-description" }, Uw = { class: "stat-badge" }, Aw = {
  key: 1,
  class: "step-body"
}, zw = {
  key: 2,
  class: "empty-state"
}, Fw = { class: "model-search-modal" }, Vw = { class: "model-modal-body" }, Bw = {
  key: 0,
  class: "model-search-results"
}, Ww = ["onClick"], Gw = { class: "model-result-header" }, jw = { class: "model-result-filename" }, Hw = { class: "model-result-meta" }, qw = { class: "model-result-category" }, Kw = { class: "model-result-size" }, Jw = {
  key: 0,
  class: "model-result-path"
}, Qw = {
  key: 1,
  class: "model-no-results"
}, Yw = {
  key: 2,
  class: "model-searching"
}, Xw = { class: "model-download-url-modal" }, Zw = { class: "model-modal-body" }, e0 = { class: "model-input-group" }, t0 = { class: "model-input-group" }, s0 = { class: "model-modal-actions" }, o0 = /* @__PURE__ */ Ce({
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
      _.value && (r("mark-optional", _.value.filename), Rt(() => N()));
    }
    function G() {
      _.value && (r("skip", _.value.filename), Rt(() => N()));
    }
    function L(se) {
      _.value && (r("option-selected", _.value.filename, se), Rt(() => N()));
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
      _.value && (Y(), Rt(() => N()));
    }
    function Q() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), we(), Rt(() => N()));
    }
    function ke(se) {
      if (!se) return "Unknown";
      const pe = se / (1024 * 1024 * 1024);
      return pe >= 1 ? `${pe.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, pe) => {
      var O, ue, Pe;
      return a(), i("div", Rw, [
        s("div", Lw, [
          s("div", Dw, [
            s("h3", Nw, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", Ow, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", Uw, m($.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (a(), R(rc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: pe[0] || (pe[0] = (_e) => M(c.value - 1)),
          onNext: pe[1] || (pe[1] = (_e) => M(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (a(), i("div", Aw, [
          b(Pw, {
            filename: _.value.filename,
            "node-type": ((O = _.value.reference) == null ? void 0 : O.node_type) || "Unknown",
            "has-multiple-options": !!((ue = _.value.options) != null && ue.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: I.value,
            "status-label": T.value,
            onMarkOptional: z,
            onSkip: G,
            onDownloadUrl: te,
            onSearch: ce,
            onOptionSelected: L,
            onClearChoice: K
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (a(), i("div", zw, [...pe[5] || (pe[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (a(), R(Kt, { to: "body" }, [
          u.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(Y, ["self"])
          }, [
            s("div", Fw, [
              s("div", { class: "model-modal-header" }, [
                pe[6] || (pe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", Vw, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": pe[2] || (pe[2] = (_e) => v.value = _e),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (a(), i("div", Bw, [
                  (a(!0), i(B, null, he(w.value, (_e) => (a(), i("div", {
                    key: _e.hash,
                    class: "model-search-result-item",
                    onClick: (De) => W()
                  }, [
                    s("div", Gw, [
                      s("code", jw, m(_e.filename), 1)
                    ]),
                    s("div", Hw, [
                      s("span", qw, m(_e.category), 1),
                      s("span", Kw, m(ke(_e.size)), 1)
                    ]),
                    _e.relative_path ? (a(), i("div", Jw, m(_e.relative_path), 1)) : y("", !0)
                  ], 8, Ww))), 128))
                ])) : v.value && !g.value ? (a(), i("div", Qw, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (a(), i("div", Yw, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (a(), R(Kt, { to: "body" }, [
          d.value ? (a(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: pt(we, ["self"])
          }, [
            s("div", Xw, [
              s("div", { class: "model-modal-header" }, [
                pe[7] || (pe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", Zw, [
                s("div", e0, [
                  pe[8] || (pe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": pe[3] || (pe[3] = (_e) => f.value = _e),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", t0, [
                  pe[9] || (pe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": pe[4] || (pe[4] = (_e) => p.value = _e),
                    placeholder: x.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", s0, [
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
}), n0 = /* @__PURE__ */ Ie(o0, [["__scopeId", "data-v-5c700bfa"]]), a0 = { class: "applying-step" }, l0 = {
  key: 0,
  class: "phase-content"
}, i0 = {
  key: 1,
  class: "phase-content"
}, r0 = { class: "phase-description" }, c0 = { class: "overall-progress" }, u0 = { class: "progress-bar" }, d0 = { class: "progress-label" }, m0 = { class: "install-list" }, f0 = { class: "install-icon" }, v0 = { key: 0 }, p0 = {
  key: 1,
  class: "spinner"
}, g0 = { key: 2 }, h0 = { key: 3 }, y0 = {
  key: 0,
  class: "install-error"
}, w0 = {
  key: 2,
  class: "phase-content"
}, _0 = { class: "phase-header" }, k0 = { class: "phase-title" }, b0 = { class: "completion-summary" }, $0 = {
  key: 0,
  class: "summary-item success"
}, C0 = { class: "summary-text" }, x0 = {
  key: 1,
  class: "summary-item error"
}, S0 = { class: "summary-text" }, I0 = {
  key: 2,
  class: "failed-list"
}, E0 = { class: "failed-node-id" }, T0 = { class: "failed-error" }, M0 = {
  key: 4,
  class: "summary-item success"
}, P0 = {
  key: 5,
  class: "restart-prompt"
}, R0 = {
  key: 3,
  class: "phase-content error"
}, L0 = { class: "error-message" }, D0 = /* @__PURE__ */ Ce({
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
      return a(), i("div", a0, [
        e.progress.phase === "resolving" ? (a(), i("div", l0, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (a(), i("div", i0, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", r0, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", c0, [
            s("div", u0, [
              s("div", {
                class: "progress-fill",
                style: Lt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", d0, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", m0, [
            (a(!0), i(B, null, he(e.progress.nodesToInstall, (g, _) => (a(), i("div", {
              key: g,
              class: Be(["install-item", r(g, _)])
            }, [
              s("span", f0, [
                r(g, _) === "pending" ? (a(), i("span", v0, "○")) : r(g, _) === "installing" ? (a(), i("span", p0, "◌")) : r(g, _) === "complete" ? (a(), i("span", g0, "✓")) : r(g, _) === "failed" ? (a(), i("span", h0, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              c(g) ? (a(), i("span", y0, m(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (a(), i("div", w0, [
          s("div", _0, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", k0, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", b0, [
            e.progress.nodesInstalled.length > 0 ? (a(), i("div", $0, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", C0, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", x0, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", S0, m(n.value.length) + " package" + m(n.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("div", I0, [
              (a(!0), i(B, null, he(n.value, (g) => (a(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", E0, m(g.node_id), 1),
                s("span", T0, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.length > 0 ? (a(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(n.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (a(), i("div", M0, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (a(), i("div", P0, [
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
        ])) : e.progress.phase === "error" ? (a(), i("div", R0, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", L0, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), N0 = /* @__PURE__ */ Ie(D0, [["__scopeId", "data-v-5efaae58"]]), O0 = {
  key: 0,
  class: "loading-state"
}, U0 = {
  key: 1,
  class: "wizard-content"
}, A0 = {
  key: 0,
  class: "step-content"
}, z0 = { class: "analysis-summary" }, F0 = { class: "analysis-header" }, V0 = { class: "summary-description" }, B0 = { class: "stats-grid" }, W0 = { class: "stat-card" }, G0 = { class: "stat-items" }, j0 = {
  key: 0,
  class: "stat-item success"
}, H0 = { class: "stat-count" }, q0 = {
  key: 1,
  class: "stat-item info"
}, K0 = { class: "stat-count" }, J0 = {
  key: 2,
  class: "stat-item warning"
}, Q0 = { class: "stat-count" }, Y0 = {
  key: 3,
  class: "stat-item warning"
}, X0 = { class: "stat-count" }, Z0 = {
  key: 4,
  class: "stat-item warning"
}, e_ = { class: "stat-count" }, t_ = {
  key: 5,
  class: "stat-item error"
}, s_ = { class: "stat-count" }, o_ = { class: "stat-card" }, n_ = { class: "stat-items" }, a_ = { class: "stat-item success" }, l_ = { class: "stat-count" }, i_ = {
  key: 0,
  class: "stat-item info"
}, r_ = { class: "stat-count" }, c_ = {
  key: 1,
  class: "stat-item warning"
}, u_ = { class: "stat-count" }, d_ = {
  key: 2,
  class: "stat-item warning"
}, m_ = { class: "stat-count" }, f_ = {
  key: 3,
  class: "stat-item error"
}, v_ = { class: "stat-count" }, p_ = {
  key: 0,
  class: "status-message warning"
}, g_ = { class: "status-text" }, h_ = {
  key: 1,
  class: "status-message warning"
}, y_ = { class: "status-text" }, w_ = {
  key: 2,
  class: "status-message info"
}, __ = { class: "status-text" }, k_ = {
  key: 3,
  class: "status-message info"
}, b_ = { class: "status-text" }, $_ = {
  key: 4,
  class: "status-message info"
}, C_ = { class: "status-text" }, x_ = {
  key: 5,
  class: "status-message warning"
}, S_ = { class: "status-text" }, I_ = {
  key: 6,
  class: "status-message success"
}, E_ = {
  key: 7,
  class: "category-mismatch-section"
}, T_ = { class: "mismatch-list" }, M_ = { class: "mismatch-path" }, P_ = { class: "mismatch-target" }, R_ = {
  key: 8,
  class: "category-mismatch-section"
}, L_ = { class: "mismatch-list" }, D_ = { class: "mismatch-path" }, N_ = { class: "status-text" }, O_ = {
  key: 1,
  class: "step-content node-step-content"
}, U_ = {
  key: 0,
  class: "community-node-section"
}, A_ = { class: "community-node-header" }, z_ = { class: "community-node-title" }, F_ = { class: "community-node-list" }, V_ = { class: "community-node-info" }, B_ = { class: "community-node-heading" }, W_ = { class: "item-name" }, G_ = { class: "community-node-package" }, j_ = { class: "community-node-meta" }, H_ = { class: "community-node-guidance" }, q_ = { key: 0 }, K_ = { class: "community-choice-status" }, J_ = { class: "community-node-actions" }, Q_ = {
  key: 3,
  class: "step-content"
}, Y_ = { class: "review-summary" }, X_ = { class: "review-stats" }, Z_ = { class: "review-stat" }, ek = { class: "stat-value" }, tk = { class: "review-stat" }, sk = { class: "stat-value" }, ok = { class: "review-stat" }, nk = { class: "stat-value" }, ak = { class: "review-stat" }, lk = { class: "stat-value" }, ik = {
  key: 0,
  class: "review-section"
}, rk = { class: "section-title" }, ck = { class: "review-items" }, uk = { class: "item-name" }, dk = { class: "item-choice" }, mk = {
  key: 0,
  class: "choice-badge install"
}, fk = {
  key: 1,
  class: "choice-badge skip"
}, vk = {
  key: 1,
  class: "review-section"
}, pk = { class: "section-title" }, gk = { class: "review-items" }, hk = { class: "item-name" }, yk = { class: "item-choice" }, wk = {
  key: 0,
  class: "choice-badge install"
}, _k = {
  key: 1,
  class: "choice-badge optional"
}, kk = {
  key: 2,
  class: "choice-badge skip"
}, bk = {
  key: 2,
  class: "review-section"
}, $k = { class: "section-title" }, Ck = { class: "review-items" }, xk = { class: "item-name" }, Sk = { class: "item-choice" }, Ik = {
  key: 0,
  class: "choice-badge install"
}, Ek = {
  key: 1,
  class: "choice-badge optional"
}, Tk = {
  key: 2,
  class: "choice-badge skip"
}, Mk = {
  key: 1,
  class: "choice-badge pending"
}, Pk = {
  key: 3,
  class: "review-section"
}, Rk = { class: "section-title" }, Lk = { class: "review-items download-details" }, Dk = { class: "download-info" }, Nk = { class: "item-name" }, Ok = { class: "download-meta" }, Uk = { class: "download-path" }, Ak = ["title"], zk = {
  key: 4,
  class: "review-section"
}, Fk = { class: "section-title" }, Vk = { class: "review-items" }, Bk = { class: "item-name" }, Wk = { class: "item-choice" }, Gk = {
  key: 0,
  class: "choice-badge install"
}, jk = {
  key: 1,
  class: "choice-badge download"
}, Hk = {
  key: 2,
  class: "choice-badge optional"
}, qk = {
  key: 3,
  class: "choice-badge skip"
}, Kk = {
  key: 4,
  class: "choice-badge skip"
}, Jk = {
  key: 1,
  class: "choice-badge download"
}, Qk = {
  key: 2,
  class: "choice-badge pending"
}, Yk = {
  key: 5,
  class: "no-choices"
}, Xk = /* @__PURE__ */ Ce({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, n = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = ic(), { loadPendingDownloads: f } = Do(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = rt(), _ = k(null), C = k([]), $ = k(!1), x = k(!1), I = k(null), T = k("analysis"), M = k([]), N = k(/* @__PURE__ */ new Map()), z = k(/* @__PURE__ */ new Map()), G = k(/* @__PURE__ */ new Set()), L = P(() => {
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
    }), Ue = P(() => _e.value.filter((re) => !G.value.has(re.package.package_id))), Ve = P(() => _.value ? _.value.models.resolved.filter(
      (re) => re.match_type === "download_intent" || re.match_type === "property_download_intent"
    ).map((re) => ({
      filename: re.reference.widget_value,
      reference: re.reference,
      is_download_intent: !0,
      resolved_model: re.model,
      download_source: re.download_source,
      target_path: re.target_path
    })) : []), ae = P(() => {
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
    function ne(re, F = 50) {
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
      let re = G.value.size;
      for (const F of N.value.values())
        F.action === "skip" && re++;
      for (const F of z.value.values())
        F.action === "skip" && re++;
      for (const F of ae.value)
        N.value.has(F.node_type) || re++;
      for (const F of oe.value)
        z.value.has(F.filename) || re++;
      return re;
    }), xe = P(() => {
      const re = {};
      if (re.analysis = { resolved: 1, total: 1 }, ee.value || se.value) {
        const F = ae.value.length, me = Y.value.length, Ge = ae.value.filter(
          (St) => N.value.has(St.node_type)
        ).length, ut = Y.value.filter(
          (St) => N.value.has(St.reference.node_type)
        ).length, xt = F + me, lt = Ge + ut;
        re.nodes = { resolved: lt, total: xt };
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
    function q() {
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
      })).filter((F, me, Ge) => Ge.findIndex((ut) => ut.package_id === F.package_id) === me).sort((F, me) => {
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
      const me = ae.value.find((ut) => ut.node_type === re);
      (Ge = me == null ? void 0 : me.options) != null && Ge[F] && N.value.set(re, {
        action: "install",
        package_id: me.options[F].package_id
      });
    }
    function Ye(re, F) {
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
    function j(re) {
      const F = Oe(re);
      return F ? F.action === "optional" ? "Marked optional" : F.action === "skip" ? "Skipped" : F.action === "install" ? F.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function de(re, F) {
      var ut;
      const me = (ut = re.package) == null ? void 0 : ut.package_id;
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
      G.value.has(re) ? G.value.delete(re) : G.value.add(re);
    }
    function A(re) {
      z.value.set(re, { action: "optional" });
    }
    function Z(re) {
      z.value.set(re, { action: "skip" });
    }
    function Ae(re, F) {
      var Ge;
      const me = oe.value.find((ut) => ut.filename === re);
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
        const F = await r(o.workflowName, N.value, z.value, G.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const me = Y.value.map((lt) => {
          const St = Oe(lt.reference.node_type);
          if ((St == null ? void 0 : St.action) !== "install" || St.install_source !== "git")
            return null;
          const es = St.repository || lt.package.repository, xs = St.package_id || lt.package.package_id;
          return !es || !xs ? null : {
            id: xs,
            repository: es,
            selectedVersion: St.version || lt.package.latest_version || "latest"
          };
        }).filter((lt) => !!lt), Ge = new Set(me.map((lt) => lt.id)), ut = [
          ...F.nodes_to_install || [],
          ...Ue.value.map((lt) => lt.package.package_id)
        ];
        d.nodesToInstall = [...new Set(ut)].filter((lt) => !Ge.has(lt)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const lt of me)
          await w({
            id: lt.id,
            version: lt.selectedVersion,
            selected_version: lt.selectedVersion,
            repository: lt.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), d.needsRestart = !0;
        d.phase = "complete", await f();
        const xt = d.installError || ((re = d.nodeInstallProgress) == null ? void 0 : re.completedNodes.some((lt) => !lt.success));
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
        $.value && !_.value ? (a(), i("div", O0, [...F[2] || (F[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (a(), i("div", U0, [
          b(Uy, {
            steps: L.value,
            "current-step": T.value,
            "completed-steps": M.value,
            "step-stats": xe.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          T.value === "analysis" ? (a(), i("div", A0, [
            s("div", z0, [
              s("div", F0, [
                F[3] || (F[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", V0, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", B0, [
                s("div", W0, [
                  F[16] || (F[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", G0, [
                    pe.value > 0 ? (a(), i("div", j0, [
                      F[4] || (F[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", H0, m(pe.value), 1),
                      F[5] || (F[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (a(), i("div", q0, [
                      F[6] || (F[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", K0, m(_.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (a(), i("div", J0, [
                      F[8] || (F[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", Q0, m(_.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ce.value.length > 0 ? (a(), i("div", Y0, [
                      F[10] || (F[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", X0, m(ce.value.length), 1),
                      F[11] || (F[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    te.value.length > 0 ? (a(), i("div", Z0, [
                      F[12] || (F[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", e_, m(te.value.length), 1),
                      F[13] || (F[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (a(), i("div", t_, [
                      F[14] || (F[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", s_, m(_.value.nodes.unresolved.length), 1),
                      F[15] || (F[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", o_, [
                  F[27] || (F[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", n_, [
                    s("div", a_, [
                      F[17] || (F[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", l_, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      F[18] || (F[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (a(), i("div", i_, [
                      F[19] || (F[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", r_, m(_.value.stats.download_intents), 1),
                      F[20] || (F[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    ue.value ? (a(), i("div", c_, [
                      F[21] || (F[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", u_, m(O.value.length), 1),
                      F[22] || (F[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (a(), i("div", d_, [
                      F[23] || (F[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", m_, m(_.value.models.ambiguous.length), 1),
                      F[24] || (F[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (a(), i("div", f_, [
                      F[25] || (F[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", v_, m(_.value.models.unresolved.length), 1),
                      F[26] || (F[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              K.value ? (a(), i("div", p_, [
                F[28] || (F[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", g_, m(ae.value.length + oe.value.length) + " items need your input", 1)
              ])) : we.value ? (a(), i("div", h_, [
                F[29] || (F[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", y_, m(ce.value.length) + " node type" + m(ce.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : te.value.length > 0 ? (a(), i("div", w_, [
                F[30] || (F[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", __, m(te.value.length) + " community-mapped node type" + m(te.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ke.value ? (a(), i("div", k_, [
                F[31] || (F[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", b_, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(Q.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : Q.value ? (a(), i("div", $_, [
                F[32] || (F[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", C_, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ue.value ? (a(), i("div", x_, [
                F[33] || (F[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", S_, m(O.value.length) + " model" + m(O.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (a(), i("div", I_, [...F[34] || (F[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ue.value ? (a(), i("div", E_, [
                F[37] || (F[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", T_, [
                  (a(!0), i(B, null, he(O.value, (me) => {
                    var Ge, ut;
                    return a(), i("div", {
                      key: me.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", M_, m(me.actual_category) + "/" + m((Ge = me.model) == null ? void 0 : Ge.filename), 1),
                      F[36] || (F[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", P_, m((ut = me.expected_categories) == null ? void 0 : ut[0]) + "/", 1),
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
              we.value ? (a(), i("div", R_, [
                F[38] || (F[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", L_, [
                  (a(!0), i(B, null, he(ce.value, (me) => {
                    var Ge;
                    return a(), i("div", {
                      key: `vg-${me.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", D_, m(me.reference.node_type), 1),
                      s("span", N_, m(me.guidance || ((Ge = _.value.node_guidance) == null ? void 0 : Ge[me.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "nodes" ? (a(), i("div", O_, [
            b(dw, {
              nodes: ae.value,
              "node-choices": N.value,
              "auto-resolved-packages": De.value,
              "skipped-packages": G.value,
              "installed-node-packs": C.value,
              onMarkOptional: J,
              onSkip: qe,
              onOptionSelected: Te,
              onManualEntry: Ye,
              onClearChoice: Fe,
              onPackageSkip: D
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (a(), i("div", U_, [
              s("div", A_, [
                s("h4", z_, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                F[39] || (F[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", F_, [
                (a(!0), i(B, null, he(Y.value, (me) => (a(), i("div", {
                  key: `community-${me.reference.node_type}-${me.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", V_, [
                    s("div", B_, [
                      s("code", W_, m(me.reference.node_type), 1),
                      s("span", G_, m(me.package.title || me.package.package_id), 1)
                    ]),
                    s("div", j_, m(me.package.package_id), 1),
                    s("div", H_, [
                      F[40] || (F[40] = S(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      me.guidance ? (a(), i("span", q_, m(me.guidance), 1)) : y("", !0)
                    ]),
                    s("div", K_, m(j(me.reference.node_type)), 1)
                  ]),
                  s("div", J_, [
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
          T.value === "models" ? (a(), R(n0, {
            key: 2,
            models: Re.value,
            "model-choices": z.value,
            onMarkOptional: A,
            onSkip: Z,
            onOptionSelected: Ae,
            onDownloadUrl: ze,
            onClearChoice: Le
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          T.value === "review" ? (a(), i("div", Q_, [
            s("div", Y_, [
              F[50] || (F[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", X_, [
                s("div", Z_, [
                  s("span", ek, m(E.value), 1),
                  F[45] || (F[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", tk, [
                  s("span", sk, m(U.value), 1),
                  F[46] || (F[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", ok, [
                  s("span", nk, m(ie.value), 1),
                  F[47] || (F[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", ak, [
                  s("span", lk, m(Ee.value), 1),
                  F[48] || (F[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              De.value.length > 0 ? (a(), i("div", ik, [
                s("h4", rk, "Node Packages (" + m(De.value.length) + ")", 1),
                s("div", ck, [
                  (a(!0), i(B, null, he(De.value, (me) => (a(), i("div", {
                    key: me.package_id,
                    class: "review-item"
                  }, [
                    s("code", uk, m(me.package_id), 1),
                    s("div", dk, [
                      G.value.has(me.package_id) ? (a(), i("span", fk, "Skipped")) : (a(), i("span", mk, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Y.value.length > 0 ? (a(), i("div", vk, [
                s("h4", pk, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                s("div", gk, [
                  (a(!0), i(B, null, he(Y.value, (me) => {
                    var Ge, ut, xt;
                    return a(), i("div", {
                      key: `review-community-${me.reference.node_type}-${me.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", hk, m(me.reference.node_type), 1),
                      s("div", yk, [
                        ((Ge = Oe(me.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", wk, m(((ut = Oe(me.reference.node_type)) == null ? void 0 : ut.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((xt = Oe(me.reference.node_type)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", _k, " Optional ")) : (a(), i("span", kk, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ae.value.length > 0 ? (a(), i("div", bk, [
                s("h4", $k, "Node Choices (" + m(ae.value.length) + ")", 1),
                s("div", Ck, [
                  (a(!0), i(B, null, he(ae.value, (me) => {
                    var Ge, ut, xt, lt;
                    return a(), i("div", {
                      key: me.node_type,
                      class: "review-item"
                    }, [
                      s("code", xk, m(me.node_type), 1),
                      s("div", Sk, [
                        N.value.has(me.node_type) ? (a(), i(B, { key: 0 }, [
                          ((Ge = N.value.get(me.node_type)) == null ? void 0 : Ge.action) === "install" ? (a(), i("span", Ik, m((ut = N.value.get(me.node_type)) == null ? void 0 : ut.package_id), 1)) : ((xt = N.value.get(me.node_type)) == null ? void 0 : xt.action) === "optional" ? (a(), i("span", Ek, " Optional ")) : ((lt = N.value.get(me.node_type)) == null ? void 0 : lt.action) === "skip" ? (a(), i("span", Tk, " Skip ")) : y("", !0)
                        ], 64)) : (a(), i("span", Mk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              fe.value.length > 0 ? (a(), i("div", Pk, [
                s("h4", Rk, "Models to Download (" + m(fe.value.length) + ")", 1),
                s("div", Lk, [
                  (a(!0), i(B, null, he(fe.value, (me) => (a(), i("div", {
                    key: me.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", Dk, [
                      s("code", Nk, m(me.filename), 1),
                      s("div", Ok, [
                        s("span", Uk, "→ " + m(me.target_path), 1),
                        me.url ? (a(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: me.url
                        }, m(ne(me.url)), 9, Ak)) : y("", !0)
                      ])
                    ]),
                    F[49] || (F[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (a(), i("div", zk, [
                s("h4", Fk, "Models (" + m(Re.value.length) + ")", 1),
                s("div", Vk, [
                  (a(!0), i(B, null, he(Re.value, (me) => {
                    var Ge, ut, xt, lt, St, es, xs;
                    return a(), i("div", {
                      key: me.filename,
                      class: "review-item"
                    }, [
                      s("code", Bk, m(me.filename), 1),
                      s("div", Wk, [
                        z.value.has(me.filename) ? (a(), i(B, { key: 0 }, [
                          ((Ge = z.value.get(me.filename)) == null ? void 0 : Ge.action) === "select" ? (a(), i("span", Gk, m((xt = (ut = z.value.get(me.filename)) == null ? void 0 : ut.selected_model) == null ? void 0 : xt.filename), 1)) : ((lt = z.value.get(me.filename)) == null ? void 0 : lt.action) === "download" ? (a(), i("span", jk, " Download ")) : ((St = z.value.get(me.filename)) == null ? void 0 : St.action) === "optional" ? (a(), i("span", Hk, " Optional ")) : ((es = z.value.get(me.filename)) == null ? void 0 : es.action) === "skip" ? (a(), i("span", qk, " Skip ")) : ((xs = z.value.get(me.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (a(), i("span", Kk, " Cancel Download ")) : y("", !0)
                        ], 64)) : me.is_download_intent ? (a(), i("span", Jk, " Pending Download ")) : (a(), i("span", Qk, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              _e.value.length === 0 && Y.value.length === 0 && ae.value.length === 0 && Re.value.length === 0 ? (a(), i("div", Yk, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          T.value === "applying" ? (a(), R(N0, {
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
          onClick: q
        }, {
          default: h(() => [
            S(m(W.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        T.value === "models" ? (a(), R(Ne, {
          key: 4,
          variant: "primary",
          onClick: q
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
}), Zk = /* @__PURE__ */ Ie(Xk, [["__scopeId", "data-v-49848358"]]), eb = { class: "search-input-wrapper" }, tb = ["value", "placeholder"], sb = /* @__PURE__ */ Ce({
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
    }), (d, v) => (a(), i("div", eb, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: cs(u, ["escape"])
      }, null, 40, tb),
      e.clearable && e.modelValue ? (a(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), ob = /* @__PURE__ */ Ie(sb, [["__scopeId", "data-v-266f857a"]]), nb = { class: "search-bar" }, ab = /* @__PURE__ */ Ce({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (a(), i("div", nb, [
      b(ob, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => t.$emit("update:modelValue", n)),
        onClear: o[1] || (o[1] = (n) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ Ie(ab, [["__scopeId", "data-v-3d51bbfd"]]), lb = { class: "section-group" }, ib = {
  key: 0,
  class: "section-content"
}, rb = /* @__PURE__ */ Ce({
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
    return (c, u) => (a(), i("section", lb, [
      b(os, {
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
      !e.collapsible || l.value ? (a(), i("div", ib, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), It = /* @__PURE__ */ Ie(rb, [["__scopeId", "data-v-c48e33ed"]]), cb = { class: "item-header" }, ub = {
  key: 0,
  class: "item-icon"
}, db = { class: "item-info" }, mb = {
  key: 0,
  class: "item-title"
}, fb = {
  key: 1,
  class: "item-subtitle"
}, vb = {
  key: 0,
  class: "item-details"
}, pb = {
  key: 1,
  class: "item-actions"
}, gb = /* @__PURE__ */ Ce({
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
      s("div", cb, [
        l.$slots.icon ? (a(), i("span", ub, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", db, [
          l.$slots.title ? (a(), i("div", mb, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (a(), i("div", fb, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (a(), i("div", vb, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (a(), i("div", pb, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ Ie(gb, [["__scopeId", "data-v-cc435e0e"]]), hb = { class: "empty-state" }, yb = {
  key: 0,
  class: "empty-icon"
}, wb = { class: "empty-message" }, _b = /* @__PURE__ */ Ce({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (a(), i("div", hb, [
      e.icon ? (a(), i("div", yb, m(e.icon), 1)) : y("", !0),
      s("p", wb, m(e.message), 1),
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
}), fs = /* @__PURE__ */ Ie(_b, [["__scopeId", "data-v-4466284f"]]), kb = { class: "loading-state" }, bb = { class: "loading-message" }, $b = /* @__PURE__ */ Ce({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (a(), i("div", kb, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", bb, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ Ie($b, [["__scopeId", "data-v-ad8436c9"]]), Cb = { class: "error-state" }, xb = { class: "error-message" }, Sb = /* @__PURE__ */ Ce({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (a(), i("div", Cb, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", xb, m(e.message), 1),
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
}), Cs = /* @__PURE__ */ Ie(Sb, [["__scopeId", "data-v-5397be48"]]), Ib = /* @__PURE__ */ Ce({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getWorkflows: l } = rt(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = P(
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
    ), G = P(
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
    }), gn(() => {
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
                (a(!0), i(B, null, he(G.value, (Pe) => (a(), R(Ft, {
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
            I.value.length ? y("", !0) : (a(), R(fs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (a(), R(xy, {
        key: 0,
        "workflow-name": g.value,
        onClose: ue[3] || (ue[3] = (Pe) => p.value = !1),
        onResolve: ue[4] || (ue[4] = (Pe) => ce(g.value)),
        onRefresh: ue[5] || (ue[5] = (Pe) => n("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (a(), R(Zk, {
        key: 1,
        "workflow-name": g.value,
        onClose: ee,
        onInstall: we,
        onRefresh: ue[6] || (ue[6] = (Pe) => n("refresh")),
        onRestart: W
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), Eb = /* @__PURE__ */ Ie(Ib, [["__scopeId", "data-v-28ee54dd"]]), Tb = /* @__PURE__ */ Ce({
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
}), El = /* @__PURE__ */ Ie(Tb, [["__scopeId", "data-v-ccb7816e"]]);
async function Tl(e) {
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
const Mb = {
  key: 0,
  class: "model-details"
}, Pb = { class: "detail-section" }, Rb = { class: "detail-row" }, Lb = { class: "detail-value mono" }, Db = { class: "detail-row" }, Nb = { class: "detail-value mono" }, Ob = { class: "detail-row" }, Ub = { class: "detail-value mono" }, Ab = {
  key: 0,
  class: "detail-row"
}, zb = { class: "detail-value" }, Fb = ["disabled"], Vb = {
  key: 1,
  class: "detail-row"
}, Bb = { class: "detail-value hash-error" }, Wb = { class: "detail-row" }, Gb = { class: "detail-value" }, jb = { class: "detail-row" }, Hb = { class: "detail-value" }, qb = { class: "detail-row" }, Kb = { class: "detail-value" }, Jb = { class: "detail-section" }, Qb = { class: "section-header" }, Yb = {
  key: 0,
  class: "locations-list"
}, Xb = { class: "location-path mono" }, Zb = {
  key: 0,
  class: "location-modified"
}, e2 = ["onClick"], t2 = {
  key: 1,
  class: "empty-state"
}, s2 = { class: "detail-section" }, o2 = { class: "section-header-row" }, n2 = { class: "section-header" }, a2 = {
  key: 0,
  class: "sources-list"
}, l2 = { class: "source-type" }, i2 = ["href"], r2 = ["disabled", "onClick"], c2 = {
  key: 1,
  class: "empty-state"
}, u2 = {
  key: 2,
  class: "source-error"
}, d2 = {
  key: 3,
  class: "source-success"
}, m2 = /* @__PURE__ */ Ce({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, n = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = rt(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = P(() => {
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
        await Tl(te), T("Copied to clipboard!");
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
    async function G() {
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
              u.value ? (a(), i("div", Mb, [
                s("section", Pb, [
                  s("div", Rb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", Lb, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => N(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Db, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", Nb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => N(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", Ob, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", Ub, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (a(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => N(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  $.value ? (a(), i("div", Ab, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", zb, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: K
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, Fb)
                    ])
                  ])) : y("", !0),
                  C.value ? (a(), i("div", Vb, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", Bb, m(C.value), 1)
                  ])) : y("", !0),
                  s("div", Wb, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", Gb, m(M(u.value.size)), 1)
                  ]),
                  s("div", jb, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", Hb, m(u.value.category), 1)
                  ]),
                  s("div", qb, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", Kb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", Jb, [
                  s("h4", Qb, "Locations (" + m(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (W = u.value.locations) != null && W.length ? (a(), i("div", Yb, [
                    (a(!0), i(B, null, he(u.value.locations, (se, pe) => (a(), i("div", {
                      key: pe,
                      class: "location-item"
                    }, [
                      s("span", Xb, m(se.path), 1),
                      se.modified ? (a(), i("span", Zb, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (a(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (O) => N(se.path)
                      }, " Copy File Path ", 8, e2)) : y("", !0)
                    ]))), 128))
                  ])) : (a(), i("div", t2, "No locations found"))
                ]),
                s("section", s2, [
                  s("div", o2, [
                    s("h4", n2, "Download Sources (" + m(((Q = u.value.sources) == null ? void 0 : Q.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ke = u.value.sources) != null && ke.length ? (a(), i("div", a2, [
                    (a(!0), i(B, null, he(u.value.sources, (se, pe) => (a(), i("div", {
                      key: pe,
                      class: "source-item"
                    }, [
                      s("span", l2, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, i2),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === se.url,
                        onClick: (O) => z(se.url)
                      }, m(f.value === se.url ? "..." : "×"), 9, r2)
                    ]))), 128))
                  ])) : (a(), i("div", c2, " No download sources configured ")),
                  p.value ? (a(), i("p", u2, m(p.value), 1)) : y("", !0),
                  w.value ? (a(), i("p", d2, m(w.value), 1)) : y("", !0)
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
        u.value && g.value ? (a(), R(ac, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Y[6] || (Y[6] = (ee) => g.value = !1),
          onSaved: G,
          onHashesComputed: L
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), cc = /* @__PURE__ */ Ie(m2, [["__scopeId", "data-v-cd808fbc"]]), f2 = { class: "workflow-links-tab" }, v2 = { class: "section-header-row" }, p2 = {
  key: 0,
  class: "state-message"
}, g2 = {
  key: 1,
  class: "error-message"
}, h2 = {
  key: 2,
  class: "candidate-list"
}, y2 = {
  key: 3,
  class: "state-message"
}, w2 = /* @__PURE__ */ Ce({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: n } = rt(), l = k([]), r = k(!1), c = k(null), u = P(() => l.value.filter((v) => v.source === "workflow"));
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
    return at(d), (v, f) => (a(), i("div", f2, [
      s("div", v2, [
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
      r.value ? (a(), i("div", p2, "Scanning workflows...")) : c.value ? (a(), i("div", g2, m(c.value), 1)) : u.value.length ? (a(), i("div", h2, [
        (a(!0), i(B, null, he(u.value, (p) => (a(), R(oc, {
          key: `${p.workflow}:${p.url}`,
          candidate: p,
          "action-label": "Use URL",
          onSelect: f[0] || (f[0] = (w) => o("selectUrl", w))
        }, null, 8, ["candidate"]))), 128))
      ])) : (a(), i("div", y2, " No likely workflow links found. Try Hugging Face or Direct URL. "))
    ]));
  }
}), _2 = /* @__PURE__ */ Ie(w2, [["__scopeId", "data-v-1aac54cc"]]), k2 = { class: "civitai-tab" }, b2 = /* @__PURE__ */ Ce({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (a(), i("div", k2, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), $2 = /* @__PURE__ */ Ie(b2, [["__scopeId", "data-v-44948051"]]), C2 = { class: "direct-url-tab" }, x2 = {
  key: 0,
  class: "error"
}, S2 = /* @__PURE__ */ Ce({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(""), r = k("");
    vt(() => o.initialUrl, (v) => {
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
    return (v, f) => (a(), i("div", C2, [
      b(nc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(tc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (a(), i("p", x2, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), I2 = /* @__PURE__ */ Ie(S2, [["__scopeId", "data-v-a6d21f27"]]), E2 = { class: "download-modal" }, T2 = { class: "tab-bar" }, M2 = ["onClick"], P2 = { class: "tab-content" }, R2 = /* @__PURE__ */ Ce({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: n } = Do(), l = [
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
        s("div", E2, [
          s("div", T2, [
            (a(), i(B, null, he(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, M2)), 64))
          ]),
          s("div", P2, [
            r.value === "workflow" ? (a(), R(_2, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (a(), R(sc, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (a(), R($2, { key: 2 })) : r.value === "direct" ? (a(), R(I2, {
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
}), uc = /* @__PURE__ */ Ie(R2, [["__scopeId", "data-v-de2e4fac"]]), L2 = /* @__PURE__ */ Ce({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: n, getStatus: l } = rt(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
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
    async function G() {
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
    return at(G), (L, K) => (a(), i(B, null, [
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
            onRetry: G
          }, null, 8, ["message"])) : (a(), i(B, { key: 2 }, [
            r.value.length ? (a(), R(El, {
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
            !$.value.length && !x.value.length ? (a(), R(fs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
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
      w.value ? (a(), R(cc, {
        key: 0,
        identifier: w.value,
        onClose: K[4] || (K[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(uc, {
        show: g.value,
        onClose: K[5] || (K[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), D2 = /* @__PURE__ */ Ie(L2, [["__scopeId", "data-v-af3ca736"]]), N2 = {
  key: 0,
  class: "indexing-progress"
}, O2 = { class: "progress-info" }, U2 = { class: "progress-label" }, A2 = { class: "progress-count" }, z2 = { class: "progress-bar" }, F2 = { class: "directory-modal-body" }, V2 = { class: "input-group" }, B2 = { class: "current-path" }, W2 = { class: "input-group" }, G2 = /* @__PURE__ */ Ce({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: n,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = rt(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), C = k(null), $ = k(""), x = k(!1), I = k(!1), T = k(null), M = P(
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
    function G(we) {
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
          T.value ? (a(), i("div", N2, [
            s("div", O2, [
              s("span", U2, m(T.value.message), 1),
              s("span", A2, m(T.value.current) + "/" + m(T.value.total), 1)
            ]),
            s("div", z2, [
              s("div", {
                class: "progress-fill",
                style: Lt({ width: `${T.value.current / T.value.total * 100}%` })
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
            u.value.length ? (a(), R(El, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                S(" Total: " + m(u.value.length) + " models • " + m(G(M.value)), 1)
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
                    S(m(G(Q.size)), 1)
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
            N.value.length ? y("", !0) : (a(), R(fs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
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
      g.value ? (a(), R(cc, {
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
          s("div", F2, [
            s("div", V2, [
              ee[15] || (ee[15] = s("label", null, "Current Directory", -1)),
              s("code", B2, m(C.value || "Not set"), 1)
            ]),
            s("div", W2, [
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
      b(uc, {
        show: I.value,
        onClose: ee[9] || (ee[9] = (W) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), j2 = /* @__PURE__ */ Ie(G2, [["__scopeId", "data-v-9fca048b"]]), H2 = { class: "node-details" }, q2 = { class: "status-row" }, K2 = {
  key: 0,
  class: "detail-row"
}, J2 = { class: "value" }, Q2 = { class: "detail-row" }, Y2 = { class: "value" }, X2 = {
  key: 1,
  class: "detail-row"
}, Z2 = { class: "value mono" }, e$ = {
  key: 2,
  class: "detail-row"
}, t$ = ["href"], s$ = {
  key: 3,
  class: "detail-row"
}, o$ = { class: "value mono small" }, n$ = { class: "detail-row" }, a$ = {
  key: 0,
  class: "value"
}, l$ = {
  key: 1,
  class: "workflow-list"
}, i$ = /* @__PURE__ */ Ce({
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
        s("div", H2, [
          s("div", q2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (a(), i("div", K2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", J2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", Q2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", Y2, m(c.value), 1)
          ]),
          e.node.registry_id ? (a(), i("div", X2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", Z2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (a(), i("div", e$, [
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
            ], 8, t$)
          ])) : y("", !0),
          e.node.download_url ? (a(), i("div", s$, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", o$, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", n$, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (a(), i("span", a$, " Not used in any workflows ")) : (a(), i("div", l$, [
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
}), r$ = /* @__PURE__ */ Ie(i$, [["__scopeId", "data-v-b342f626"]]), c$ = { class: "dialog-message" }, u$ = {
  key: 0,
  class: "dialog-details"
}, d$ = {
  key: 1,
  class: "dialog-warning"
}, m$ = /* @__PURE__ */ Ce({
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
        s("p", c$, m(e.message), 1),
        e.details && e.details.length ? (a(), i("div", u$, [
          (a(!0), i(B, null, he(e.details, (n, l) => (a(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(n), 1))), 128))
        ])) : y("", !0),
        e.warning ? (a(), i("p", d$, [
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
}), Ml = /* @__PURE__ */ Ie(m$, [["__scopeId", "data-v-3670b9f5"]]), f$ = { class: "mismatch-warning" }, v$ = { class: "version-mismatch" }, p$ = { class: "version-actual" }, g$ = { class: "version-expected" }, h$ = { style: { color: "var(--cg-color-warning)" } }, y$ = { style: { color: "var(--cg-color-warning)" } }, w$ = {
  key: 0,
  class: "community-status-badge"
}, _$ = { key: 0 }, k$ = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, b$ = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, $$ = { class: "criticality-control" }, C$ = ["value", "disabled", "onChange"], x$ = /* @__PURE__ */ Ce({
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
    } = rt(), f = k({
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
        (ne) => {
          var E, U;
          return ne.name.toLowerCase().includes(fe) || ((E = ne.description) == null ? void 0 : E.toLowerCase().includes(fe)) || ((U = ne.repository) == null ? void 0 : U.toLowerCase().includes(fe));
        }
      );
    }), M = P(
      () => T.value.filter((fe) => fe.installed && fe.tracked)
    ), N = P(
      () => T.value.filter((fe) => !fe.installed && fe.tracked && !fe.issue_type)
    ), z = P(
      () => T.value.filter((fe) => fe.installed && !fe.tracked)
    ), G = P(
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
    async function te(fe, ne) {
      const E = fe.registry_id;
      if (!E) {
        n("toast", `Node "${fe.name}" has no package id for install`, "warning");
        return;
      }
      if (ne === "git" && !fe.repository) {
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
      ne === "git" && fe.repository && (U.repository = fe.repository, U.install_source = "git"), await d(U), $.value.add(K(fe)), n("toast", `✓ Queued install for "${fe.name}"`, "success");
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
    async function ke(fe, ne) {
      const E = ne.target, U = W(fe), ie = E.value;
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
            const ne = await r(fe);
            ne.status === "success" ? (n("toast", `✓ Node "${fe}" tracked as development`, "success"), await Re()) : n("toast", `Failed to track node: ${ne.message || "Unknown error"}`, "error");
          } catch (ne) {
            n("toast", `Error tracking node: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error");
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
            const ne = await u(fe);
            ne.status === "success" ? (n("toast", `✓ Node "${fe}" removed`, "success"), await Re()) : n("toast", `Failed to remove node: ${ne.message || "Unknown error"}`, "error");
          } catch (ne) {
            n("toast", `Error removing node: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error");
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
            const ne = await c(fe);
            ne.status === "success" ? (n("toast", `✓ Node "${fe}" installed`, "success"), await Re()) : n("toast", `Failed to install node: ${ne.message || "Unknown error"}`, "error");
          } catch (ne) {
            n("toast", `Error installing node: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function ae(fe) {
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
          } catch (ne) {
            n("toast", `Error queueing install: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error");
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
          } catch (ne) {
            n("toast", `Error queueing git install: ${ne instanceof Error ? ne.message : "Unknown error"}`, "error");
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
    return at(Re), (fe, ne) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: ne[0] || (ne[0] = (E) => _.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: _e
              }, {
                default: h(() => [...ne[7] || (ne[7] = [
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
            "onUpdate:modelValue": ne[1] || (ne[1] = (E) => g.value = E),
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
                s("div", f$, [
                  ne[8] || (ne[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (a(!0), i(B, null, he(e.versionMismatches, (E) => (a(), R(Ft, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...ne[9] || (ne[9] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", v$, [
                      s("span", p$, m(E.actual), 1),
                      ne[10] || (ne[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", g$, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: ne[2] || (ne[2] = (U) => n("repair-environment"))
                    }, {
                      default: h(() => [...ne[11] || (ne[11] = [
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
            G.value.length ? (a(), R(It, {
              key: 1,
              title: "BLOCKED",
              count: G.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(G.value, (E) => (a(), R(Ft, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...ne[12] || (ne[12] = [
                    S("⛔", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", h$, m(se(E)), 1)
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
                      default: h(() => [...ne[13] || (ne[13] = [
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
                  icon: h(() => [...ne[14] || (ne[14] = [
                    S("⚠", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", y$, m(O(E)), 1)
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
                      default: h(() => [...ne[15] || (ne[15] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(E) ? (a(), i("span", w$, "Queued")) : (a(), i(B, { key: 1 }, [
                      E.registry_id ? (a(), R(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (U) => ae(E)
                      }, {
                        default: h(() => [...ne[16] || (ne[16] = [
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
                        default: h(() => [...ne[17] || (ne[17] = [
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
                  icon: h(() => [...ne[18] || (ne[18] = [
                    S("?", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ne[19] || (ne[19] = [
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
                      default: h(() => [...ne[20] || (ne[20] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => De(E.name)
                    }, {
                      default: h(() => [...ne[21] || (ne[21] = [
                        S(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (U) => Ue(E.name)
                    }, {
                      default: h(() => [...ne[22] || (ne[22] = [
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
                    E.version ? (a(), i("span", _$, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (a(), i("span", k$, "version unknown")),
                    s("span", b$, " • " + m(Y(E.source)), 1)
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
                      default: h(() => [...ne[23] || (ne[23] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", $$, [
                      ne[25] || (ne[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: W(E),
                        disabled: Q(E),
                        onChange: (U) => ke(E, U)
                      }, [...ne[24] || (ne[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, C$)
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
                  icon: h(() => [...ne[26] || (ne[26] = [
                    S("!", -1)
                  ])]),
                  title: h(() => [
                    S(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...ne[27] || (ne[27] = [
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
                      default: h(() => [...ne[28] || (ne[28] = [
                        S(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (U) => Ve(E.name)
                    }, {
                      default: h(() => [...ne[29] || (ne[29] = [
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
            !M.value.length && !N.value.length && !G.value.length && !L.value.length && !z.value.length ? (a(), R(fs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(is, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: ne[4] || (ne[4] = (E) => _.value = !1)
      }, {
        content: h(() => [...ne[30] || (ne[30] = [
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
            onClick: ne[3] || (ne[3] = (E) => _.value = !1)
          }, {
            default: h(() => [...ne[31] || (ne[31] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (a(), R(r$, {
        key: 0,
        node: C.value,
        onClose: ne[5] || (ne[5] = (E) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (a(), R(Ml, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: ne[6] || (ne[6] = (E) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), S$ = /* @__PURE__ */ Ie(x$, [["__scopeId", "data-v-edfa1c86"]]), I$ = { class: "setting-info" }, E$ = { class: "setting-label" }, T$ = {
  key: 0,
  class: "required-marker"
}, M$ = {
  key: 0,
  class: "setting-description"
}, P$ = { class: "setting-control" }, R$ = /* @__PURE__ */ Ce({
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
      s("div", I$, [
        s("div", E$, [
          S(m(e.label) + " ", 1),
          e.required ? (a(), i("span", T$, "*")) : y("", !0)
        ]),
        e.description ? (a(), i("div", M$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", P$, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ Ie(R$, [["__scopeId", "data-v-3e106b1c"]]), L$ = ["type", "value", "placeholder", "disabled"], D$ = /* @__PURE__ */ Ce({
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
        d[0] || (d[0] = cs((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = cs((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, L$));
  }
}), yo = /* @__PURE__ */ Ie(D$, [["__scopeId", "data-v-0380d08f"]]), N$ = { class: "toggle" }, O$ = ["checked", "disabled"], U$ = /* @__PURE__ */ Ce({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("label", N$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "toggle-input"
      }, null, 40, O$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), xi = /* @__PURE__ */ Ie(U$, [["__scopeId", "data-v-71c0f550"]]), Wa = "ComfyGit.Deploy.GitHubPAT";
function dc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function A$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function z$() {
  function e() {
    try {
      return localStorage.getItem(Wa);
    } catch {
      return null;
    }
  }
  function t(l) {
    try {
      localStorage.setItem(Wa, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Wa);
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
    isRemoteSsh: dc,
    isRemoteHttps: A$
  };
}
const F$ = { class: "workspace-settings-content" }, V$ = { class: "settings-section" }, B$ = { class: "path-setting" }, W$ = { class: "path-value" }, G$ = { class: "path-setting" }, j$ = { class: "path-value" }, H$ = { class: "settings-section" }, q$ = { class: "token-setting" }, K$ = {
  key: 0,
  class: "token-warning"
}, J$ = { class: "token-actions" }, Q$ = { class: "settings-section" }, Y$ = { class: "settings-section" }, X$ = /* @__PURE__ */ Ce({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const n = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = rt(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = z$(), g = k(!1), _ = k(null), C = k(null), $ = k(null), x = k(null), I = k(""), T = k(""), M = k(""), N = k(""), z = k(!1), G = k(!1), L = k(!1), K = k(""), ce = k(!1), te = k(!1), Y = k(null), we = k(!1), ee = k(!0);
    function W(Ve) {
      return Ve.join(" ");
    }
    function Q(Ve) {
      return Ve.trim() ? Ve.trim().split(/\s+/) : [];
    }
    const ke = P(() => {
      if (!x.value) return !1;
      const Ve = z.value, ae = G.value, oe = L.value, Re = N.value !== W(x.value.comfyui_extra_args || []);
      return Ve || ae || oe || Re;
    }), se = P(() => w());
    async function pe() {
      var Ve;
      g.value = !0, _.value = null;
      try {
        $.value = await r(n.workspacePath || void 0), x.value = { ...$.value }, I.value = $.value.civitai_api_key || "", T.value = $.value.huggingface_token || "", N.value = W($.value.comfyui_extra_args || []), M.value = v() || "", K.value = M.value, z.value = !1, G.value = !1, L.value = !1, Y.value = null;
        const ae = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = ae !== "false", ee.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Re = (Ve = (await u()).remotes) == null ? void 0 : Ve.find((fe) => fe.name === "origin");
          ce.value = !!(Re && dc(Re.url));
        } catch {
          ce.value = !1;
        }
      } catch (ae) {
        _.value = ae instanceof Error ? ae.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function O() {
      var Ve;
      C.value = null;
      try {
        const ae = {};
        z.value && (ae.civitai_api_key = I.value || null), G.value && (ae.huggingface_token = T.value || null), N.value !== W(((Ve = x.value) == null ? void 0 : Ve.comfyui_extra_args) || []) && (ae.comfyui_extra_args = Q(N.value)), await c(ae, n.workspacePath || void 0), L.value && (M.value ? f(M.value) : p()), await pe(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (ae) {
        const oe = ae instanceof Error ? ae.message : "Failed to save settings";
        C.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function ue() {
      x.value && (I.value = x.value.civitai_api_key || "", T.value = x.value.huggingface_token || "", N.value = W(x.value.comfyui_extra_args || []), M.value = K.value, z.value = !1, G.value = !1, L.value = !1, Y.value = null, C.value = null);
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
    }), at(pe), (Ve, ae) => (a(), i("div", F$, [
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
              s("div", V$, [
                s("div", B$, [
                  ae[9] || (ae[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  ae[10] || (ae[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", W$, m(((oe = $.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", G$, [
                  ae[11] || (ae[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  ae[12] || (ae[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", j$, m(((Re = $.value) == null ? void 0 : Re.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(It, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", H$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": ae[0] || (ae[0] = (oe) => I.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: ae[1] || (ae[1] = (oe) => z.value = !0)
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
                    "onUpdate:modelValue": ae[2] || (ae[2] = (oe) => T.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: ae[3] || (ae[3] = (oe) => G.value = !0)
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
                  s("div", q$, [
                    b(yo, {
                      modelValue: M.value,
                      "onUpdate:modelValue": ae[4] || (ae[4] = (oe) => M.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: ae[5] || (ae[5] = (oe) => L.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (a(), i("div", K$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    ae[15] || (ae[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", J$, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: te.value,
                        disabled: !M.value || te.value,
                        onClick: Pe
                      }, {
                        default: h(() => [...ae[13] || (ae[13] = [
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
                        default: h(() => [...ae[14] || (ae[14] = [
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
            s("div", Q$, [
              b(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: N.value,
                    "onUpdate:modelValue": ae[6] || (ae[6] = (oe) => N.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              ae[16] || (ae[16] = s("div", { class: "setting-hint" }, [
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
            s("div", Y$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(xi, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      ae[7] || (ae[7] = (oe) => we.value = oe),
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
                  b(xi, {
                    modelValue: ee.value,
                    "onUpdate:modelValue": [
                      ae[8] || (ae[8] = (oe) => ee.value = oe),
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
        C.value ? (a(), R(El, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Lt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), mc = /* @__PURE__ */ Ie(X$, [["__scopeId", "data-v-f1bdc574"]]), Z$ = /* @__PURE__ */ Ce({
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
        b(mc, {
          ref_key: "contentRef",
          ref: t,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), eC = { class: "env-title" }, tC = {
  key: 0,
  class: "current-badge"
}, sC = {
  key: 0,
  class: "branch-info"
}, oC = /* @__PURE__ */ Ce({
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
        s("div", eC, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (a(), i("span", tC, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (a(), i("span", sC, [
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
}), nC = /* @__PURE__ */ Ie(oC, [["__scopeId", "data-v-9231917a"]]), aC = { class: "env-details" }, lC = { class: "status-row" }, iC = {
  key: 0,
  class: "detail-row"
}, rC = { class: "value mono" }, cC = {
  key: 1,
  class: "detail-row"
}, uC = { class: "value mono small" }, dC = { class: "collapsible-section" }, mC = { class: "value" }, fC = {
  key: 0,
  class: "collapsible-body"
}, vC = { class: "item-list" }, pC = { class: "item-name" }, gC = { class: "item-name" }, hC = { class: "item-name" }, yC = { class: "item-name" }, wC = {
  key: 0,
  class: "empty-list"
}, _C = { class: "collapsible-section" }, kC = { class: "value" }, bC = {
  key: 0,
  class: "collapsible-body"
}, $C = { class: "item-list" }, CC = { class: "item-name" }, xC = {
  key: 0,
  class: "item-meta"
}, SC = {
  key: 0,
  class: "empty-list"
}, IC = { class: "collapsible-section" }, EC = { class: "value" }, TC = {
  key: 0,
  class: "missing-count"
}, MC = {
  key: 0,
  class: "collapsible-body"
}, PC = { class: "item-list" }, RC = { class: "model-row" }, LC = { class: "item-name" }, DC = { class: "model-meta" }, NC = { class: "item-meta" }, OC = {
  key: 0,
  class: "item-meta"
}, UC = {
  key: 0,
  class: "empty-list"
}, AC = {
  key: 2,
  class: "section-divider"
}, zC = {
  key: 3,
  class: "detail-row"
}, FC = { class: "value" }, VC = { class: "footer-actions" }, BC = /* @__PURE__ */ Ce({
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
        var f, p, w, g, _, C, $, x, I, T, M, N, z, G;
        return [
          s("div", aC, [
            s("div", lC, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (a(), i("div", iC, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", rC, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (a(), i("div", cC, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", uC, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", dC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (L) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", mC, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (a(), i("div", fC, [
                s("div", vC, [
                  (a(!0), i(B, null, he(e.detail.workflows.synced, (L) => (a(), i("div", {
                    key: "synced-" + L,
                    class: "list-item"
                  }, [
                    s("span", pC, m(L), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.new, (L) => (a(), i("div", {
                    key: "new-" + L,
                    class: "list-item"
                  }, [
                    s("span", gC, m(L), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.modified, (L) => (a(), i("div", {
                    key: "mod-" + L,
                    class: "list-item"
                  }, [
                    s("span", hC, m(L), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (a(!0), i(B, null, he(e.detail.workflows.deleted, (L) => (a(), i("div", {
                    key: "del-" + L,
                    class: "list-item"
                  }, [
                    s("span", yC, m(L), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (a(), i("div", wC, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", _C, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (L) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", kC, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (a(), i("div", bC, [
                s("div", $C, [
                  (a(!0), i(B, null, he(e.detail.nodes, (L) => (a(), i("div", {
                    key: L.name,
                    class: "list-item"
                  }, [
                    s("span", CC, m(L.name), 1),
                    L.version ? (a(), i("span", xC, m(L.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (a(), i("div", SC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", IC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (L) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", EC, [
                  S(m((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (x = e.detail) == null ? void 0 : x.models) != null && I.missing.length ? (a(), i("span", TC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (T = e.detail) != null && T.models ? (a(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (M = e.detail) != null && M.models && l.value.has("models") ? (a(), i("div", MC, [
                s("div", PC, [
                  (a(!0), i(B, null, he(e.detail.models.missing, (L) => (a(), i("div", {
                    key: L.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", RC, [
                      s("span", LC, m(L.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", L.criticality])
                      }, m(L.criticality), 3)
                    ]),
                    s("div", DC, [
                      s("span", NC, m(L.category), 1),
                      L.workflow_names.length ? (a(), i("span", OC, " used by: " + m(L.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (a(), i("div", UC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (N = e.detail) != null && N.created_at || e.environment.created_at ? (a(), i("div", AC)) : y("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (a(), i("div", zC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", FC, m(u(((G = e.detail) == null ? void 0 : G.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", VC, [
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
}), WC = /* @__PURE__ */ Ie(BC, [["__scopeId", "data-v-750671f5"]]), fc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], vc = "3.12", Pl = [
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
], pc = "auto", GC = { class: "progress-bar" }, jC = /* @__PURE__ */ Ce({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = P(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (n, l) => (a(), i("div", GC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Lt({ width: o.value })
      }, null, 6)
    ]));
  }
}), gc = /* @__PURE__ */ Ie(jC, [["__scopeId", "data-v-1beb0512"]]), HC = { class: "task-progress" }, qC = { class: "progress-info" }, KC = { class: "progress-percentage" }, JC = { class: "progress-message" }, QC = {
  key: 0,
  class: "progress-steps"
}, YC = { class: "step-icon" }, XC = { class: "step-label" }, ZC = /* @__PURE__ */ Ce({
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
    return (l, r) => (a(), i("div", HC, [
      b(gc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", qC, [
        s("span", KC, m(e.progress) + "%", 1),
        s("span", JC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (a(), i("div", QC, [
        (a(!0), i(B, null, he(e.steps, (c) => (a(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", YC, m(n(c.id)), 1),
          s("span", XC, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Qn = /* @__PURE__ */ Ie(ZC, [["__scopeId", "data-v-9d1de66c"]]), ex = {
  key: 0,
  class: "create-env-form"
}, tx = { class: "form-field" }, sx = { class: "input-wrapper" }, ox = {
  key: 0,
  class: "validating-indicator"
}, nx = {
  key: 1,
  class: "valid-indicator"
}, ax = {
  key: 0,
  class: "field-error"
}, lx = { class: "form-field" }, ix = ["value"], rx = { class: "form-field" }, cx = ["disabled"], ux = ["value"], dx = { class: "form-field" }, mx = ["value"], fx = { class: "form-field form-field--checkbox" }, vx = { class: "form-checkbox" }, px = {
  key: 1,
  class: "create-env-progress"
}, gx = { class: "creating-intro" }, hx = {
  key: 0,
  class: "progress-warning"
}, yx = {
  key: 1,
  class: "create-error"
}, wx = { class: "error-message" }, _x = {
  key: 1,
  class: "footer-status"
}, kx = 10, bx = /* @__PURE__ */ Ce({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: n, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = rt(), u = k(""), d = k(vc), v = k("latest"), f = k(pc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let C = null, $ = 0;
    const x = P(() => !!u.value.trim() && _.value && !w.value && !g.value && !M.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = k(!1), M = k(!1), N = k({
      progress: 0,
      message: ""
    });
    let z = null, G = 0;
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
    vt(u, (se) => {
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
      z || (G = 0, z = window.setInterval(async () => {
        try {
          const se = await r();
          G = 0, N.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (W(), o("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (W(), N.value.error = se.error || se.message) : se.state === "idle" && M.value && (W(), N.value.error = "Creation was interrupted. Please try again.");
        } catch {
          G++, G >= kx && (W(), N.value.error = "Lost connection to server.");
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
      await Rt(), (se = K.value) == null || se.focus(), ke();
    }), Po(() => {
      W(), C && (clearTimeout(C), C = null);
    }), (se, pe) => (a(), R($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !M.value,
      onClose: Y
    }, {
      body: h(() => [
        M.value ? (a(), i("div", px, [
          s("p", gx, [
            pe[12] || (pe[12] = S(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            pe[13] || (pe[13] = S("... ", -1))
          ]),
          b(Qn, {
            progress: N.value.progress,
            message: N.value.message,
            "current-phase": N.value.phase,
            variant: N.value.error ? "error" : "default",
            "show-steps": !0,
            steps: L
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          N.value.error ? y("", !0) : (a(), i("p", hx, " This may take several minutes. Please wait... ")),
          N.value.error ? (a(), i("div", yx, [
            s("p", wx, m(N.value.error), 1)
          ])) : y("", !0)
        ])) : (a(), i("div", ex, [
          s("div", tx, [
            pe[6] || (pe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", sx, [
              Mt(s("input", {
                ref_key: "nameInput",
                ref: K,
                "onUpdate:modelValue": pe[0] || (pe[0] = (O) => u.value = O),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: cs(we, ["enter"]),
                onBlur: te
              }, null, 34), [
                [tn, u.value]
              ]),
              g.value ? (a(), i("span", ox, "...")) : _.value ? (a(), i("span", nx, "✓")) : y("", !0)
            ]),
            w.value ? (a(), i("div", ax, m(w.value), 1)) : y("", !0),
            pe[7] || (pe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", lx, [
            pe[8] || (pe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": pe[1] || (pe[1] = (O) => d.value = O),
              class: "form-select"
            }, [
              (a(!0), i(B, null, he(st(fc), (O) => (a(), i("option", {
                key: O,
                value: O
              }, m(O), 9, ix))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", rx, [
            pe[9] || (pe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": pe[2] || (pe[2] = (O) => v.value = O),
              class: "form-select",
              disabled: T.value
            }, [
              (a(!0), i(B, null, he(I.value, (O) => (a(), i("option", {
                key: O.tag_name,
                value: O.tag_name
              }, m(O.name), 9, ux))), 128))
            ], 8, cx), [
              [Co, v.value]
            ])
          ]),
          s("div", dx, [
            pe[10] || (pe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Mt(s("select", {
              "onUpdate:modelValue": pe[3] || (pe[3] = (O) => f.value = O),
              class: "form-select"
            }, [
              (a(!0), i(B, null, he(st(Pl), (O) => (a(), i("option", {
                key: O,
                value: O
              }, m(O) + m(O === "auto" ? " (detect GPU)" : ""), 9, mx))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          s("div", fx, [
            s("label", vx, [
              Mt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": pe[4] || (pe[4] = (O) => p.value = O)
              }, null, 512), [
                [Kn, p.value]
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
          })) : (a(), i("span", _x, " Creating environment... "))
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
}), $x = /* @__PURE__ */ Ie(bx, [["__scopeId", "data-v-3faa3d9b"]]), Cx = /* @__PURE__ */ Ce({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const n = o, { getEnvironments: l, getEnvironmentDetails: r } = rt(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = P(() => [...c.value].sort((z, G) => z.is_current !== G.is_current ? z.is_current ? -1 : 1 : z.name.localeCompare(G.name))), C = P(() => {
      if (!v.value.trim()) return _.value;
      const z = v.value.toLowerCase();
      return _.value.filter(
        (G) => {
          var L;
          return G.name.toLowerCase().includes(z) || ((L = G.current_branch) == null ? void 0 : L.toLowerCase().includes(z));
        }
      );
    });
    function $(z, G) {
      p.value = !1, n("created", z, G);
    }
    function x() {
      p.value = !0;
    }
    async function I(z) {
      w.value = z, g.value = null;
      const G = await r(z.name);
      G && (g.value = G);
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
    }), (z, G) => (a(), i(B, null, [
      b(Ut, null, {
        header: h(() => [
          b(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: G[1] || (G[1] = (L) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (a(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: x
              }, {
                default: h(() => [...G[7] || (G[7] = [
                  S(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: G[0] || (G[0] = (L) => z.$emit("import"))
              }, {
                default: h(() => [...G[8] || (G[8] = [
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
            "onUpdate:modelValue": G[2] || (G[2] = (L) => v.value = L),
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
                (a(!0), i(B, null, he(C.value, (L) => (a(), R(nC, {
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
                      default: h(() => [...G[9] || (G[9] = [
                        S(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => I(L)
                    }, {
                      default: h(() => [...G[10] || (G[10] = [
                        S(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (K) => z.$emit("export", L.name)
                    }, {
                      default: h(() => [...G[11] || (G[11] = [
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
            C.value.length ? y("", !0) : (a(), R(fs, {
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
                    default: h(() => [...G[12] || (G[12] = [
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
      b(is, {
        show: f.value,
        title: "About Environments",
        onClose: G[4] || (G[4] = (L) => f.value = !1)
      }, {
        content: h(() => [...G[13] || (G[13] = [
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
            onClick: G[3] || (G[3] = (L) => f.value = !1)
          }, {
            default: h(() => [...G[14] || (G[14] = [
              S(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (a(), R(WC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: G[5] || (G[5] = (L) => {
          w.value = null, g.value = null;
        }),
        onDelete: T,
        onExport: M
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (a(), R($x, {
        key: 1,
        onClose: G[6] || (G[6] = (L) => p.value = !1),
        onCreated: $
      })) : y("", !0)
    ], 64));
  }
}), xx = /* @__PURE__ */ Ie(Cx, [["__scopeId", "data-v-01163d8c"]]), Sx = { class: "file-path" }, Ix = { class: "file-path-text" }, Ex = ["title"], Tx = /* @__PURE__ */ Ce({
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
    return (l, r) => (a(), i("div", Sx, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", Ix, m(e.path), 1),
      e.copyable ? (a(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: n
      }, m(o.value ? "✓" : "📋"), 9, Ex)) : y("", !0)
    ]));
  }
}), Mx = /* @__PURE__ */ Ie(Tx, [["__scopeId", "data-v-f0982173"]]), Px = { class: "base-textarea-wrapper" }, Rx = ["value", "rows", "placeholder", "disabled", "maxlength"], Lx = {
  key: 0,
  class: "base-textarea-count"
}, Dx = /* @__PURE__ */ Ce({
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
    return (r, c) => (a(), i("div", Px, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = cs(pt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = cs(pt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          cs(l, ["enter"])
        ]
      }, null, 40, Rx),
      e.showCharCount && e.maxLength ? (a(), i("div", Lx, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ Ie(Dx, [["__scopeId", "data-v-c6d16c93"]]), Nx = ["checked", "disabled"], Ox = { class: "base-checkbox-box" }, Ux = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, Ax = {
  key: 0,
  class: "base-checkbox-label"
}, zx = /* @__PURE__ */ Ce({
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
      }, null, 40, Nx),
      s("span", Ox, [
        e.modelValue ? (a(), i("svg", Ux, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (a(), i("span", Ax, [
        ot(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Yn = /* @__PURE__ */ Ie(zx, [["__scopeId", "data-v-bf17c831"]]), Fx = { class: "export-blocked" }, Vx = { class: "error-header" }, Bx = { class: "error-summary" }, Wx = { class: "error-title" }, Gx = { class: "error-description" }, jx = { class: "issues-list" }, Hx = { class: "issue-message" }, qx = {
  key: 0,
  class: "issue-details"
}, Kx = ["onClick"], Jx = { class: "issue-fix" }, Qx = {
  key: 0,
  class: "commit-section"
}, Yx = {
  key: 0,
  class: "issues-warning"
}, Xx = {
  key: 1,
  class: "commit-error"
}, Zx = /* @__PURE__ */ Ce({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = rt(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = co({}), f = P(() => o.mode === "publish" ? "Publish" : "Export"), p = P(
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
        s("div", Fx, [
          s("div", Vx, [
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
            s("div", Bx, [
              s("h3", Wx, m(f.value) + " blocked", 1),
              s("p", Gx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", jx, [
            (a(!0), i(B, null, he(e.issues, (T, M) => (a(), i("div", {
              key: M,
              class: "issue-item"
            }, [
              s("div", Hx, m(T.message), 1),
              T.details.length ? (a(), i("div", qx, [
                (a(!0), i(B, null, he(C(M), (N, z) => (a(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(N), 1))), 128)),
                T.details.length > 3 && !v[M] ? (a(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (N) => v[M] = !0
                }, " +" + m(T.details.length - 3) + " more ", 9, Kx)) : y("", !0)
              ])) : y("", !0),
              s("div", Jx, [
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
          p.value ? (a(), i("div", Qx, [
            w.value ? (a(), i("div", Yx, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Yn, {
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
            d.value ? (a(), i("div", Xx, m(d.value), 1)) : y("", !0)
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
}), e3 = /* @__PURE__ */ Ie(Zx, [["__scopeId", "data-v-a8990107"]]), t3 = { class: "repro-warning" }, s3 = { class: "repro-warning-content" }, o3 = {
  key: 0,
  class: "warning-group"
}, n3 = { class: "warning-list" }, a3 = { key: 0 }, l3 = {
  key: 1,
  class: "warning-group"
}, i3 = { class: "warning-list" }, r3 = { key: 0 }, c3 = /* @__PURE__ */ Ce({
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
    return (p, w) => (a(), i("div", t3, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", s3, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (a(), i("div", o3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", n3, [
            (a(!0), i(B, null, he(u.value, (g) => (a(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (a(), i("li", a3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (a(), i("div", l3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", i3, [
            (a(!0), i(B, null, he(d.value, (g) => (a(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (a(), i("li", r3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), ol = /* @__PURE__ */ Ie(c3, [["__scopeId", "data-v-11be310d"]]), u3 = { class: "export-card" }, d3 = { class: "export-path-row" }, m3 = {
  key: 1,
  class: "export-warning"
}, f3 = { class: "export-footer-actions" }, v3 = /* @__PURE__ */ Ce({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: n, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = rt(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), C = P(() => {
      var W;
      return ((W = t.environmentName) == null ? void 0 : W.trim()) || null;
    }), $ = P(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), x = P(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), I = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : G.value ? "Export Anyway" : "Export Environment"), T = P(() => {
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
    ), G = P(
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
          G.value ? (a(), R(ol, {
            key: 0,
            class: "export-readiness-warning",
            warnings: T.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: Q[1] || (Q[1] = (ke) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(It, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", u3, [
                Q[8] || (Q[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", d3, [
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
                        b(Mx, {
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
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (a(), i("div", m3, [...Q[9] || (Q[9] = [
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
          s("div", f3, [
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
      b(is, {
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
      g.value && w.value ? (a(), R(e3, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: Q[6] || (Q[6] = (ke) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (a(), R(Il, {
        key: 1,
        warnings: w.value.warnings,
        onClose: Q[7] || (Q[7] = (ke) => _.value = !1),
        onRevalidate: te
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), p3 = /* @__PURE__ */ Ie(v3, [["__scopeId", "data-v-6cf814a2"]]), g3 = { class: "file-input-wrapper" }, h3 = ["accept", "multiple", "disabled"], y3 = /* @__PURE__ */ Ce({
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
    }), (u, d) => (a(), i("div", g3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, h3),
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
}), w3 = /* @__PURE__ */ Ie(y3, [["__scopeId", "data-v-cd192091"]]), _3 = {
  key: 0,
  class: "drop-zone-empty"
}, k3 = { class: "drop-zone-text" }, b3 = { class: "drop-zone-primary" }, $3 = { class: "drop-zone-secondary" }, C3 = { class: "drop-zone-actions" }, x3 = {
  key: 1,
  class: "drop-zone-file"
}, S3 = { class: "file-info" }, I3 = { class: "file-details" }, E3 = { class: "file-name" }, T3 = { class: "file-size" }, M3 = /* @__PURE__ */ Ce({
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
      onDragenter: pt(v, ["prevent"]),
      onDragover: pt(f, ["prevent"]),
      onDragleave: pt(p, ["prevent"]),
      onDrop: pt(w, ["prevent"])
    }, [
      c.value ? (a(), i("div", x3, [
        s("div", S3, [
          x[1] || (x[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", I3, [
            s("div", E3, m(u.value), 1),
            s("div", T3, m(d.value), 1)
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
      ])) : (a(), i("div", _3, [
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
        s("div", k3, [
          s("p", b3, m(e.primaryText), 1),
          s("p", $3, m(e.secondaryText), 1)
        ]),
        s("div", C3, [
          b(w3, {
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
}), P3 = /* @__PURE__ */ Ie(M3, [["__scopeId", "data-v-0f79cb86"]]), R3 = { class: "commit-hash" }, L3 = /* @__PURE__ */ Ce({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = P(() => t.hash.slice(0, t.length));
    return (n, l) => (a(), i("span", R3, m(o.value), 1));
  }
}), hc = /* @__PURE__ */ Ie(L3, [["__scopeId", "data-v-7c333cc6"]]), D3 = { class: "import-preview" }, N3 = { class: "preview-header" }, O3 = {
  key: 0,
  class: "source-env"
}, U3 = { class: "preview-content" }, A3 = { class: "preview-section" }, z3 = { class: "section-header" }, F3 = { class: "section-info" }, V3 = { class: "section-count" }, B3 = {
  key: 0,
  class: "item-list"
}, W3 = { class: "item-name" }, G3 = {
  key: 0,
  class: "item-more"
}, j3 = { class: "preview-section" }, H3 = { class: "section-header" }, q3 = { class: "section-info" }, K3 = { class: "section-count" }, J3 = {
  key: 0,
  class: "item-list"
}, Q3 = { class: "item-details" }, Y3 = { class: "item-name" }, X3 = { class: "item-meta" }, Z3 = {
  key: 0,
  class: "item-more"
}, eS = { class: "preview-section" }, tS = { class: "section-header" }, sS = { class: "section-info" }, oS = { class: "section-count" }, nS = {
  key: 0,
  class: "item-list"
}, aS = { class: "item-name" }, lS = {
  key: 0,
  class: "item-more"
}, iS = {
  key: 0,
  class: "preview-section"
}, rS = { class: "git-info" }, cS = /* @__PURE__ */ Ce({
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
    return (c, u) => (a(), i("div", D3, [
      s("div", N3, [
        b(os, null, {
          default: h(() => [...u[0] || (u[0] = [
            S("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (a(), i("span", O3, [
          u[1] || (u[1] = S(" From: ", -1)),
          b(sl, null, {
            default: h(() => [
              S(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", U3, [
        s("div", A3, [
          s("div", z3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", F3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", V3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (a(), i("div", B3, [
            (a(!0), i(B, null, he(e.workflows.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", W3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (a(), i("div", G3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", j3, [
          s("div", H3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", q3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", K3, m(n.value) + " file" + m(n.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (a(), i("div", J3, [
            (a(!0), i(B, null, he(e.models.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", Q3, [
                s("span", Y3, m(d.filename), 1),
                s("span", X3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (a(), i("div", Z3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", eS, [
          s("div", tS, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", sS, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", oS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (a(), i("div", nS, [
            (a(!0), i(B, null, he(e.nodes.slice(0, e.maxPreviewItems), (d) => (a(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", aS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (a(), i("div", lS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (a(), i("div", iS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", rS, [
            e.gitBranch ? (a(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(sl, null, {
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
                b(hc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), uS = /* @__PURE__ */ Ie(cS, [["__scopeId", "data-v-182fe113"]]), dS = { class: "import-config" }, mS = { class: "config-container" }, fS = { class: "config-field" }, vS = { class: "input-wrapper" }, pS = ["value"], gS = {
  key: 0,
  class: "validating-indicator"
}, hS = {
  key: 1,
  class: "valid-indicator"
}, yS = {
  key: 0,
  class: "field-error"
}, wS = { class: "config-field" }, _S = { class: "strategy-options" }, kS = ["value", "checked", "onChange"], bS = { class: "strategy-content" }, $S = { class: "strategy-label" }, CS = { class: "strategy-description" }, xS = { class: "config-field switch-field" }, SS = { class: "switch-label" }, IS = ["checked"], ES = { class: "advanced-section" }, TS = { class: "advanced-content" }, MS = { class: "config-field" }, PS = ["value"], RS = ["value"], LS = /* @__PURE__ */ Ce({
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
    vt(() => o.nameError, (f) => {
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
    return (f, p) => (a(), i("div", dS, [
      b(os, null, {
        default: h(() => [...p[2] || (p[2] = [
          S("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", mS, [
        s("div", fS, [
          b(On, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              S("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", vS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, pS),
            l.value ? (a(), i("span", gS, "...")) : r.value ? (a(), i("span", hS, "✓")) : y("", !0)
          ]),
          e.nameError ? (a(), i("div", yS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", wS, [
          b(On, null, {
            default: h(() => [...p[5] || (p[5] = [
              S("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", _S, [
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
              }, null, 40, kS),
              s("div", bS, [
                s("span", $S, m(w.label), 1),
                s("span", CS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", xS, [
          s("label", SS, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => n("update:switchAfterImport", w.target.checked))
            }, null, 40, IS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", ES, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", TS, [
            s("div", MS, [
              b(On, null, {
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
                (a(!0), i(B, null, he(st(Pl), (w) => (a(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, RS))), 128))
              ], 40, PS)
            ])
          ])
        ])
      ])
    ]));
  }
}), DS = /* @__PURE__ */ Ie(LS, [["__scopeId", "data-v-89ea06a1"]]), NS = { class: "import-flow" }, OS = {
  key: 0,
  class: "import-empty"
}, US = { class: "git-import-section" }, AS = { class: "git-url-input-row" }, zS = ["disabled"], FS = {
  key: 0,
  class: "git-error"
}, VS = {
  key: 1,
  class: "import-configure"
}, BS = { class: "selected-file-bar" }, WS = {
  key: 0,
  class: "file-bar-content"
}, GS = { class: "file-bar-info" }, jS = { class: "file-bar-name" }, HS = { class: "file-bar-size" }, qS = {
  key: 1,
  class: "file-bar-content"
}, KS = { class: "file-bar-info" }, JS = { class: "file-bar-name" }, QS = {
  key: 0,
  class: "preview-loading"
}, YS = { class: "import-actions" }, XS = {
  key: 2,
  class: "import-progress"
}, ZS = { class: "creating-intro" }, e8 = {
  key: 0,
  class: "progress-warning"
}, t8 = {
  key: 1,
  class: "import-error"
}, s8 = { class: "error-message" }, o8 = {
  key: 3,
  class: "import-complete"
}, n8 = { class: "complete-message" }, a8 = { class: "complete-title" }, l8 = { class: "complete-details" }, i8 = { class: "complete-actions" }, r8 = /* @__PURE__ */ Ce({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var De, Ue, Ve, ae;
    const n = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = rt();
    let p = null;
    const w = k(null), g = k(n.resumeImport ?? !1), _ = k(!1), C = k(!1), $ = k(""), x = k(!1), I = k(null), T = k(""), M = k(null), N = k(!1), z = k(null), G = k(null), L = k({
      name: ((De = n.initialProgress) == null ? void 0 : De.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), K = k(null), ce = k({
      message: ((Ue = n.initialProgress) == null ? void 0 : Ue.message) ?? "Preparing import...",
      phase: ((Ve = n.initialProgress) == null ? void 0 : Ve.phase) ?? "",
      progress: ((ae = n.initialProgress) == null ? void 0 : ae.progress) ?? 0,
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
      if (!G.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const oe = G.value;
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
    }), we = P(() => !x.value && !I.value && G.value && L.value.name.length > 0 && !K.value && (w.value || M.value));
    async function ee(oe) {
      w.value = oe, x.value = !0, I.value = null, G.value = null;
      try {
        const Re = await r(oe);
        G.value = Re;
      } catch (Re) {
        I.value = Re instanceof Error ? Re.message : "Failed to analyze file", console.error("Preview error:", Re);
      } finally {
        x.value = !1;
      }
    }
    function W() {
      w.value = null, M.value = null, T.value = "", z.value = null, _.value = !1, C.value = !1, $.value = "", G.value = null, I.value = null, L.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, K.value = null, l("source-cleared");
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
          M.value = T.value.trim(), G.value = oe;
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
      return a(), i("div", NS, [
        !w.value && !M.value && !g.value ? (a(), i("div", OS, [
          b(P3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          Re[7] || (Re[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", US, [
            Re[5] || (Re[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", AS, [
              Mt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Re[0] || (Re[0] = (ne) => T.value = ne),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: cs(ke, ["enter"]),
                disabled: N.value
              }, null, 40, zS), [
                [tn, T.value]
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
            z.value ? (a(), i("div", FS, m(z.value), 1)) : y("", !0),
            Re[6] || (Re[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || M.value) && !g.value && !_.value ? (a(), i("div", VS, [
          s("div", BS, [
            w.value ? (a(), i("div", WS, [
              Re[8] || (Re[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", GS, [
                s("div", jS, m(w.value.name), 1),
                s("div", HS, m(_e(w.value.size)), 1)
              ])
            ])) : M.value ? (a(), i("div", qS, [
              Re[10] || (Re[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", KS, [
                s("div", JS, m(se(M.value)), 1),
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
          x.value ? (a(), i("div", QS, [...Re[12] || (Re[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (a(), R(Yt, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : G.value ? (a(), R(uS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          G.value ? (a(), R(DS, {
            key: 3,
            name: L.value.name,
            "onUpdate:name": Re[1] || (Re[1] = (ne) => L.value.name = ne),
            "model-strategy": L.value.modelStrategy,
            "onUpdate:modelStrategy": Re[2] || (Re[2] = (ne) => L.value.modelStrategy = ne),
            "torch-backend": L.value.torchBackend,
            "onUpdate:torchBackend": Re[3] || (Re[3] = (ne) => L.value.torchBackend = ne),
            "switch-after-import": L.value.switchAfterImport,
            "onUpdate:switchAfterImport": Re[4] || (Re[4] = (ne) => L.value.switchAfterImport = ne),
            "name-error": K.value,
            onValidateName: pe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          L.value.modelStrategy === "skip" && ((fe = G.value) != null && fe.models_needing_download) ? (a(), R(Yt, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", YS, [
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
        ])) : g.value ? (a(), i("div", XS, [
          s("p", ZS, [
            Re[15] || (Re[15] = S(" Importing environment ", -1)),
            s("strong", null, m(L.value.name), 1),
            Re[16] || (Re[16] = S("... ", -1))
          ]),
          b(Qn, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: te
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (a(), i("p", e8, " This may take several minutes. Please wait... ")),
          ce.value.error ? (a(), i("div", t8, [
            s("p", s8, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (a(), i("div", o8, [
          s("div", {
            class: Be(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          s("div", n8, [
            s("div", a8, m(C.value ? "Import Successful" : "Import Failed"), 1),
            s("div", l8, m($.value), 1)
          ]),
          s("div", i8, [
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
}), yc = /* @__PURE__ */ Ie(r8, [["__scopeId", "data-v-72cbc04e"]]), c8 = /* @__PURE__ */ Ce({
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
          b(yc, { onImportComplete: l })
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
      b(is, {
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
}), u8 = /* @__PURE__ */ Ie(c8, [["__scopeId", "data-v-41b1f298"]]), d8 = { class: "base-tabs" }, m8 = ["disabled", "onClick"], f8 = {
  key: 0,
  class: "base-tabs__badge"
}, v8 = /* @__PURE__ */ Ce({
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
    return (r, c) => (a(), i("div", d8, [
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
        u.badge ? (a(), i("span", f8, m(u.badge), 1)) : y("", !0)
      ], 10, m8))), 128))
    ]));
  }
}), Rl = /* @__PURE__ */ Ie(v8, [["__scopeId", "data-v-ad5e6cad"]]), p8 = { class: "commit-list" }, g8 = /* @__PURE__ */ Ce({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (a(), i("div", p8, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), wc = /* @__PURE__ */ Ie(g8, [["__scopeId", "data-v-8c5ee761"]]), h8 = { class: "commit-message" }, y8 = { class: "commit-date" }, w8 = /* @__PURE__ */ Ce({
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
      b(hc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", h8, m(e.message), 1),
      s("span", y8, m(e.relativeDate), 1),
      r.$slots.actions ? (a(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = pt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _c = /* @__PURE__ */ Ie(w8, [["__scopeId", "data-v-dd7c621b"]]), _8 = /* @__PURE__ */ Ce({
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
        e.commits.length === 0 ? (a(), R(fs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (a(), R(wc, { key: 1 }, {
          default: h(() => [
            (a(!0), i(B, null, he(e.commits, (r) => (a(), R(_c, {
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
}), k8 = /* @__PURE__ */ Ie(_8, [["__scopeId", "data-v-fa4bf3a1"]]), b8 = { class: "branch-create-form" }, $8 = { class: "form-actions" }, C8 = /* @__PURE__ */ Ce({
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
    return (u, d) => (a(), i("div", b8, [
      b(yo, {
        modelValue: n.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => n.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", $8, [
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
}), x8 = /* @__PURE__ */ Ie(C8, [["__scopeId", "data-v-7c500394"]]), S8 = { class: "branch-list-item__indicator" }, I8 = { class: "branch-list-item__name" }, E8 = {
  key: 0,
  class: "branch-list-item__actions"
}, T8 = {
  key: 0,
  class: "branch-list-item__current-label"
}, M8 = /* @__PURE__ */ Ce({
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
      s("span", S8, m(e.isCurrent ? "●" : "○"), 1),
      s("span", I8, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (a(), i("div", E8, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (a(), i("span", T8, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), P8 = /* @__PURE__ */ Ie(M8, [["__scopeId", "data-v-c6581a24"]]), R8 = { class: "header-info" }, L8 = { class: "branch-name" }, D8 = {
  key: 0,
  class: "current-badge"
}, N8 = { class: "branch-meta" }, O8 = { key: 0 }, U8 = {
  key: 0,
  class: "meta-note"
}, A8 = {
  key: 0,
  class: "loading"
}, z8 = {
  key: 1,
  class: "empty-state"
}, F8 = /* @__PURE__ */ Ce({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = rt(), n = k([]), l = k(!1), r = k(!0);
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
        s("div", R8, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", L8, m(e.branchName), 1),
          e.isCurrent ? (a(), i("span", D8, "CURRENT")) : y("", !0)
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
        s("div", N8, [
          r.value ? (a(), i("span", O8, "Loading...")) : (a(), i(B, { key: 1 }, [
            s("span", null, m(n.value.length) + " commits", 1),
            l.value ? (a(), i("span", U8, "(showing first " + m(n.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (a(), i("div", A8, "Loading commit history...")) : n.value.length === 0 ? (a(), i("div", z8, " No commits found on this branch ")) : (a(), R(wc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (a(!0), i(B, null, he(n.value, (d) => (a(), R(_c, {
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
}), V8 = /* @__PURE__ */ Ie(F8, [["__scopeId", "data-v-2e5437cc"]]), B8 = {
  key: 2,
  class: "branch-list"
}, W8 = /* @__PURE__ */ Ce({
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
        n.value ? (a(), R(x8, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (a(), R(fs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (a(), i("div", B8, [
          (a(!0), i(B, null, he(e.branches, (w) => (a(), R(P8, {
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
                onClick: pt((g) => o("switch", w.name), ["stop"])
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
        l.value ? (a(), R(V8, {
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
}), G8 = /* @__PURE__ */ Ie(W8, [["__scopeId", "data-v-a3de96cc"]]);
function kc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const j8 = { class: "remote-url-display" }, H8 = ["title"], q8 = ["title"], K8 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, J8 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Q8 = /* @__PURE__ */ Ce({
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
    return (r, c) => (a(), i("div", j8, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(n.value), 9, H8),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (a(), i("svg", J8, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (a(), i("svg", K8, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, q8)
    ]));
  }
}), Y8 = /* @__PURE__ */ Ie(Q8, [["__scopeId", "data-v-7768a58d"]]), X8 = { class: "remote-title" }, Z8 = {
  key: 0,
  class: "default-badge"
}, e5 = {
  key: 1,
  class: "sync-badge"
}, t5 = {
  key: 0,
  class: "ahead"
}, s5 = {
  key: 1,
  class: "behind"
}, o5 = {
  key: 1,
  class: "synced"
}, n5 = ["href"], a5 = {
  key: 1,
  class: "remote-url-text"
}, l5 = /* @__PURE__ */ Ce({
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
        s("div", X8, [
          s("span", null, m(e.remote.name), 1),
          n.value ? (a(), i("span", Z8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (a(), i("span", e5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (a(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (a(), i("span", t5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (a(), i("span", s5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (a(), i("span", o5, "✓ synced"))
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
          onClick: f[0] || (f[0] = pt(() => {
          }, ["stop"]))
        }, m(d.value), 9, n5)) : (a(), i("span", a5, m(d.value), 1))
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
              b(Y8, {
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
}), i5 = /* @__PURE__ */ Ie(l5, [["__scopeId", "data-v-8310f3a8"]]), r5 = ["for"], c5 = {
  key: 0,
  class: "base-form-field-required"
}, u5 = { class: "base-form-field-input" }, d5 = {
  key: 1,
  class: "base-form-field-error"
}, m5 = {
  key: 2,
  class: "base-form-field-hint"
}, f5 = /* @__PURE__ */ Ce({
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
        e.required ? (a(), i("span", c5, "*")) : y("", !0)
      ], 8, r5)) : y("", !0),
      s("div", u5, [
        ot(n.$slots, "default", {}, void 0)
      ]),
      e.error ? (a(), i("span", d5, m(e.error), 1)) : e.hint ? (a(), i("span", m5, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ Ie(f5, [["__scopeId", "data-v-9a1cf296"]]), v5 = { class: "remote-form" }, p5 = { class: "form-header" }, g5 = { class: "form-body" }, h5 = {
  key: 0,
  class: "form-error"
}, y5 = { class: "form-actions" }, w5 = /* @__PURE__ */ Ce({
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
    vt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (v, f) => (a(), i("div", v5, [
      s("div", p5, [
        b(os, null, {
          default: h(() => [
            S(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", g5, [
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
        c.value ? (a(), i("div", h5, m(c.value), 1)) : y("", !0)
      ]),
      s("div", y5, [
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
}), _5 = /* @__PURE__ */ Ie(w5, [["__scopeId", "data-v-56021b18"]]), k5 = { class: "conflict-summary-box" }, b5 = { class: "summary-header" }, $5 = { class: "summary-text" }, C5 = { key: 0 }, x5 = {
  key: 1,
  class: "all-resolved"
}, S5 = { class: "summary-progress" }, I5 = { class: "progress-bar" }, E5 = { class: "progress-text" }, T5 = /* @__PURE__ */ Ce({
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
    return (n, l) => (a(), i("div", k5, [
      s("div", b5, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", $5, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (a(), i("p", C5, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (a(), i("p", x5, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", S5, [
        s("div", I5, [
          s("div", {
            class: "progress-fill",
            style: Lt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", E5, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), M5 = /* @__PURE__ */ Ie(T5, [["__scopeId", "data-v-4e9e6cc9"]]), P5 = { class: "modal-header" }, R5 = { class: "modal-title" }, L5 = { class: "modal-body" }, D5 = {
  key: 0,
  class: "error-box"
}, N5 = {
  key: 0,
  class: "error-hint"
}, O5 = {
  key: 1,
  class: "loading-state"
}, U5 = { class: "commit-summary" }, A5 = {
  key: 0,
  class: "commits-section"
}, z5 = { class: "commit-list" }, F5 = { class: "commit-hash" }, V5 = { class: "commit-message" }, B5 = { class: "commit-date" }, W5 = {
  key: 1,
  class: "changes-section"
}, G5 = {
  key: 0,
  class: "change-group",
  open: ""
}, j5 = { class: "change-count" }, H5 = { class: "change-list" }, q5 = {
  key: 0,
  class: "conflict-badge"
}, K5 = {
  key: 1,
  class: "change-group"
}, J5 = { class: "change-count" }, Q5 = { class: "change-list" }, Y5 = {
  key: 2,
  class: "change-group"
}, X5 = { class: "change-count" }, Z5 = { class: "change-list" }, e4 = {
  key: 3,
  class: "strategy-section"
}, t4 = { class: "radio-group" }, s4 = { class: "radio-option" }, o4 = { class: "radio-option" }, n4 = { class: "radio-option" }, a4 = {
  key: 4,
  class: "up-to-date"
}, l4 = { class: "modal-actions" }, Si = "comfygit.pullModelStrategy", i4 = /* @__PURE__ */ Ce({
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
    const o = e, n = t, l = k(localStorage.getItem(Si) || "skip");
    vt(l, ($) => {
      localStorage.setItem(Si, $);
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
    }), v = P(() => o.preview && kc(o.preview) ? o.preview : null), f = P(() => {
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
            onClick: x[10] || (x[10] = pt(() => {
            }, ["stop"]))
          }, [
            s("div", P5, [
              s("h3", R5, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: x[0] || (x[0] = (M) => $.$emit("close"))
              }, "✕")
            ]),
            s("div", L5, [
              e.error ? (a(), i("div", D5, [
                x[13] || (x[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  x[12] || (x[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (a(), i("p", N5, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (a(), i("div", O5, [...x[14] || (x[14] = [
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
                s("div", U5, [
                  x[17] || (x[17] = s("span", { class: "icon" }, "📥", -1)),
                  S(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (a(), i("div", A5, [
                  x[18] || (x[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", z5, [
                    (a(!0), i(B, null, he(e.preview.commits, (M) => (a(), i("div", {
                      key: M.hash,
                      class: "commit-item"
                    }, [
                      s("span", F5, m(M.short_hash || M.hash.slice(0, 7)), 1),
                      s("span", V5, m(M.message), 1),
                      s("span", B5, m(M.date_relative || M.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (a(), i("div", W5, [
                  x[22] || (x[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (a(), i("details", G5, [
                    s("summary", null, [
                      x[19] || (x[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", j5, m(c.value) + " changes", 1)
                    ]),
                    s("div", H5, [
                      (a(!0), i(B, null, he(e.preview.changes.workflows.added, (M) => (a(), i("div", {
                        key: "a-" + M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128)),
                      (a(!0), i(B, null, he(e.preview.changes.workflows.modified, (M) => (a(), i("div", {
                        key: "m-" + M,
                        class: "change-item modify"
                      }, [
                        S(" ~ " + m(M) + " ", 1),
                        _(M) ? (a(), i("span", q5, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (a(!0), i(B, null, he(e.preview.changes.workflows.deleted, (M) => (a(), i("div", {
                        key: "d-" + M,
                        class: "change-item delete"
                      }, " - " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (a(), i("details", K5, [
                    s("summary", null, [
                      x[20] || (x[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", J5, m(u.value) + " to install", 1)
                    ]),
                    s("div", Q5, [
                      (a(!0), i(B, null, he(e.preview.changes.nodes.to_install, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item add"
                      }, " + " + m(M), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (a(), i("details", Y5, [
                    s("summary", null, [
                      x[21] || (x[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", X5, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Z5, [
                      (a(!0), i(B, null, he(e.preview.changes.models.referenced, (M) => (a(), i("div", {
                        key: M,
                        class: "change-item"
                      }, m(M), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (a(), R(M5, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (a(), i("div", e4, [
                  x[27] || (x[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", t4, [
                    s("label", s4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[1] || (x[1] = (M) => l.value = M),
                        value: "all"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[23] || (x[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", o4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[2] || (x[2] = (M) => l.value = M),
                        value: "required"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[24] || (x[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", n4, [
                      Mt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": x[3] || (x[3] = (M) => l.value = M),
                        value: "skip"
                      }, null, 512), [
                        [Nn, l.value]
                      ]),
                      x[25] || (x[25] = s("span", null, "Skip model downloads", -1)),
                      x[26] || (x[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  x[28] || (x[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (a(), i("div", a4, [
                  x[29] || (x[29] = s("span", { class: "icon" }, "✓", -1)),
                  S(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", l4, [
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
}), r4 = /* @__PURE__ */ Ie(i4, [["__scopeId", "data-v-1d633bba"]]), c4 = { class: "modal-header" }, u4 = { class: "modal-title" }, d4 = { class: "modal-body" }, m4 = {
  key: 0,
  class: "error-box"
}, f4 = {
  key: 1,
  class: "loading-state"
}, v4 = {
  key: 2,
  class: "warning-box"
}, p4 = {
  key: 1,
  class: "commits-section"
}, g4 = { class: "commit-list" }, h4 = { class: "commit-hash" }, y4 = { class: "commit-message" }, w4 = { class: "commit-date" }, _4 = { class: "force-option" }, k4 = { class: "checkbox-option" }, b4 = { class: "commit-summary" }, $4 = { key: 0 }, C4 = { key: 1 }, x4 = {
  key: 0,
  class: "info-box"
}, S4 = {
  key: 2,
  class: "commits-section"
}, I4 = { class: "commit-list" }, E4 = { class: "commit-hash" }, T4 = { class: "commit-message" }, M4 = { class: "commit-date" }, P4 = {
  key: 3,
  class: "up-to-date"
}, R4 = { class: "modal-actions" }, L4 = /* @__PURE__ */ Ce({
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
              onClick: g[8] || (g[8] = pt(() => {
              }, ["stop"]))
            }, [
              s("div", c4, [
                s("h3", u4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", d4, [
                e.error ? (a(), i("div", m4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (a(), i("div", f4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  S(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (a(), i("div", v4, [...g[15] || (g[15] = [
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
                  f.value ? (a(), R(ol, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", p4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", g4, [
                      (a(!0), i(B, null, he(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", h4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", y4, m(I.message), 1),
                        s("span", w4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", _4, [
                    s("label", k4, [
                      Mt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [Kn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (a(), i(B, { key: 4 }, [
                  s("div", b4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (a(), i("span", $4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (a(), i("span", C4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (a(), i("div", x4, [...g[21] || (g[21] = [
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
                  f.value ? (a(), R(ol, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (a(), i("div", S4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", I4, [
                      (a(!0), i(B, null, he(e.preview.commits, (I) => (a(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", E4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", T4, m(I.message), 1),
                        s("span", M4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (a(), i("div", P4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    S(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", R4, [
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
        r.value && ((x = e.preview) != null && x.warnings) ? (a(), R(Il, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), D4 = /* @__PURE__ */ Ie(L4, [["__scopeId", "data-v-7748bf33"]]), N4 = { class: "resolution-choice-group" }, O4 = ["disabled"], U4 = ["disabled"], A4 = /* @__PURE__ */ Ce({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (a(), i("div", N4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (n) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, O4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (n) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, U4)
    ]));
  }
}), z4 = /* @__PURE__ */ Ie(A4, [["__scopeId", "data-v-985715ed"]]), F4 = { class: "conflict-header" }, V4 = { class: "conflict-info" }, B4 = { class: "workflow-name" }, W4 = { class: "conflict-description" }, G4 = {
  key: 0,
  class: "resolved-badge"
}, j4 = { class: "resolved-text" }, H4 = { class: "conflict-hashes" }, q4 = { class: "hash-item" }, K4 = { class: "hash-item" }, J4 = { class: "conflict-actions" }, Q4 = /* @__PURE__ */ Ce({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, n = t, l = k(o.resolution);
    vt(() => o.resolution, (d) => {
      l.value = d;
    }), vt(l, (d) => {
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
        s("div", F4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", V4, [
            s("code", B4, m(e.conflict.name) + ".json", 1),
            s("div", W4, m(c.value), 1)
          ]),
          r.value ? (a(), i("div", G4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", j4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", H4, [
          s("span", q4, [
            v[3] || (v[3] = S("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", K4, [
            v[4] || (v[4] = S("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", J4, [
          b(z4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Y4 = /* @__PURE__ */ Ie(Q4, [["__scopeId", "data-v-506d3bbf"]]), X4 = { class: "resolution-content" }, Z4 = {
  key: 0,
  class: "error-box"
}, eI = { class: "resolution-header" }, tI = { class: "header-stats" }, sI = { class: "stat" }, oI = { class: "stat-value" }, nI = { class: "stat resolved" }, aI = { class: "stat-value" }, lI = {
  key: 0,
  class: "stat pending"
}, iI = { class: "stat-value" }, rI = { class: "conflicts-list" }, cI = {
  key: 1,
  class: "all-resolved-message"
}, uI = /* @__PURE__ */ Ce({
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
        s("div", X4, [
          e.error ? (a(), i("div", Z4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", eI, [
            s("div", tI, [
              s("div", sI, [
                s("span", oI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", nI, [
                s("span", aI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (a(), i("div", lI, [
                s("span", iI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", rI, [
            (a(!0), i(B, null, he(e.workflowConflicts, (_) => (a(), R(Y4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => v(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (a(), i("div", cI, [
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
}), dI = /* @__PURE__ */ Ie(uI, [["__scopeId", "data-v-c58d150d"]]), mI = { class: "node-conflict-item" }, fI = { class: "node-header" }, vI = { class: "node-name" }, pI = { class: "node-id" }, gI = { class: "version-comparison" }, hI = { class: "version yours" }, yI = { class: "version theirs" }, wI = { class: "chosen-version" }, _I = { class: "chosen" }, kI = { class: "chosen-reason" }, bI = { class: "affected-workflows" }, $I = { class: "wf-source" }, CI = { class: "wf-version" }, xI = /* @__PURE__ */ Ce({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (a(), i("div", mI, [
      s("div", fI, [
        s("code", vI, m(e.conflict.node_name), 1),
        s("span", pI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", gI, [
        s("div", hI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", yI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", wI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", _I, m(e.conflict.chosen_version), 1),
        s("span", kI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", bI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (a(!0), i(B, null, he(e.conflict.affected_workflows, (n) => (a(), i("li", {
            key: n.name
          }, [
            s("code", null, m(n.name), 1),
            s("span", $I, "(" + m(n.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", CI, "needs v" + m(n.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), SI = /* @__PURE__ */ Ie(xI, [["__scopeId", "data-v-8b626725"]]), II = { class: "validation-content" }, EI = {
  key: 0,
  class: "compatible-message"
}, TI = { class: "conflicts-list" }, MI = {
  key: 2,
  class: "warnings-section"
}, PI = /* @__PURE__ */ Ce({
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
        s("div", II, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (a(), i("div", EI, [
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
            s("div", TI, [
              (a(!0), i(B, null, he(e.validation.node_conflicts, (u) => (a(), R(SI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (a(), i("div", MI, [
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
}), RI = /* @__PURE__ */ Ie(PI, [["__scopeId", "data-v-fefd26ed"]]), LI = {
  key: 0,
  class: "embedded-toolbar"
}, DI = { class: "embedded-toolbar-search" }, NI = /* @__PURE__ */ Ce({
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
    } = rt(), _ = k([]), C = k({}), $ = k(!1), x = k(null), I = k(""), T = k(!1), M = k(null), N = k(!1), z = k("add"), G = k({
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
            const j = await d(Oe.name);
            j && (C.value[Oe.name] = j);
          })
        );
      } catch (Fe) {
        x.value = Fe instanceof Error ? Fe.message : "Failed to load remotes";
      } finally {
        $.value = !1;
      }
    }
    function ce() {
      z.value = "add", G.value = { name: "", fetchUrl: "", pushUrl: "" }, N.value = !0;
    }
    function te(Fe) {
      const Oe = _.value.find((j) => j.name === Fe);
      Oe && (z.value = "edit", G.value = {
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
      N.value = !1, G.value = { name: "", fetchUrl: "", pushUrl: "" };
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
    ), ue = k(!1), Pe = k(null), _e = k(!1), De = k(null), Ue = k(null), Ve = k(!1), ae = k(null), oe = k(null), Re = k(/* @__PURE__ */ new Map()), fe = k(null), ne = k(null), E = P(() => ae.value && kc(ae.value) ? ae.value : null);
    async function U(Fe) {
      Ue.value = Fe, ke.value = "pull_preview", Ve.value = !0, ae.value = null, oe.value = null;
      try {
        ae.value = await v(Fe);
      } catch (Oe) {
        oe.value = Oe instanceof Error ? Oe.message : "Failed to load pull preview";
      } finally {
        Ve.value = !1;
      }
    }
    function ie() {
      ke.value = "idle", ae.value = null, oe.value = null, Ue.value = null;
    }
    async function Ee(Fe) {
      if (!Ue.value) return;
      ke.value = "executing", oe.value = null;
      const Oe = Ue.value;
      try {
        const j = await f(Oe, Fe);
        if (j.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${j.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Oe}`, "success"), await K();
      } catch (j) {
        oe.value = j instanceof Error ? j.message : "Pull failed", ke.value = "pull_preview";
      }
    }
    function xe() {
      E.value && (ke.value = "resolving", ne.value = null);
    }
    function Se(Fe, Oe) {
      Re.value.set(Fe, { name: Fe, resolution: Oe });
    }
    function X() {
      ke.value = "pull_preview";
    }
    async function q() {
      ke.value = "validating", ne.value = null;
      try {
        const Fe = Array.from(Re.value.values());
        fe.value = await g(Ue.value, Fe), ke.value = "validation_review";
      } catch (Fe) {
        ne.value = Fe instanceof Error ? Fe.message : "Validation failed", ke.value = "resolving";
      }
    }
    async function ve() {
      ke.value = "executing";
      const Fe = Ue.value;
      try {
        const Oe = Array.from(Re.value.values()), j = await f(Fe, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Oe
        });
        if (j.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${j.error || "Unknown error"}`, ke.value = "pull_preview";
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
      Re.value.clear(), fe.value = null, ne.value = null, oe.value = null, ae.value = null, Ue.value = null;
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
      var j;
      if (!Ue.value) return;
      _e.value = !0;
      const Oe = Ue.value;
      De.value = null;
      try {
        await w(Oe, Fe), qe(), o("toast", `✓ Pushed to ${Oe}`, "success"), await K();
      } catch (de) {
        const ye = de instanceof Error ? de.message : "Push failed";
        De.value = ye, de instanceof Zr && de.status === 409 && ((j = de.data) != null && j.needs_force) && Pe.value ? Pe.value = {
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
    function Ye() {
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
            e.embedded && !N.value ? (a(), i("div", LI, [
              s("div", DI, [
                b(ro, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Oe[2] || (Oe[2] = (j) => I.value = j),
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
            N.value ? (a(), R(_5, {
              key: 1,
              mode: z.value,
              "remote-name": G.value.name,
              "fetch-url": G.value.fetchUrl,
              "push-url": G.value.pushUrl,
              onSubmit: Y,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            L.value.length && !N.value ? (a(), R(It, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: h(() => [
                (a(!0), i(B, null, he(L.value, (j) => (a(), R(i5, {
                  key: j.name,
                  remote: j,
                  "sync-status": C.value[j.name],
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
            !L.value.length && !N.value ? (a(), R(fs, {
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
              onInfoClick: Oe[0] || (Oe[0] = (j) => T.value = !0)
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
              "onUpdate:modelValue": Oe[1] || (Oe[1] = (j) => I.value = j),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(is, {
        show: T.value,
        title: "About Git Remotes",
        onClose: Oe[3] || (Oe[3] = (j) => T.value = !1)
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
      b(r4, {
        show: se.value,
        "remote-name": Ue.value || "",
        preview: ae.value,
        loading: Ve.value,
        pulling: ke.value === "executing",
        error: oe.value,
        "conflict-resolutions": Re.value,
        onClose: ie,
        onPull: Ee,
        onOpenConflictResolution: xe
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(D4, {
        show: ue.value,
        "remote-name": Ue.value || "",
        preview: Pe.value,
        loading: Ve.value,
        pushing: _e.value,
        error: De.value,
        onClose: qe,
        onPush: Te,
        onPullFirst: Ye,
        onRevalidate: J
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      pe.value && E.value ? (a(), R(dI, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Re.value,
        "operation-type": "pull",
        validating: ke.value === "validating",
        error: ne.value,
        onClose: X,
        onResolve: Se,
        onApply: q
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      O.value && fe.value ? (a(), R(RI, {
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
}), OI = /* @__PURE__ */ Ie(NI, [["__scopeId", "data-v-a6651a66"]]), UI = /* @__PURE__ */ Ce({
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
    return vt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (a(), R(Ut, null, {
      header: h(() => [
        b(At, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Rl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (a(), R(k8, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => n("select", d)),
          onCheckout: u[2] || (u[2] = (d) => n("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (a(), R(G8, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => n("switch", d)),
          onCreate: u[4] || (u[4] = (d) => n("create", d)),
          onDelete: u[5] || (u[5] = (d) => n("delete", d))
        }, null, 8, ["branches", "current"])) : (a(), R(OI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => n("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), AI = { class: "text-viewer-wrapper" }, zI = ["disabled", "title"], FI = { class: "text-content" }, VI = /* @__PURE__ */ Ce({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), n = k("idle");
    async function l() {
      if (t.content)
        try {
          await Tl(t.content), n.value = "copied", setTimeout(() => {
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
    return (u, d) => (a(), i("div", AI, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, zI),
        s("pre", FI, m(e.content), 1)
      ], 544)
    ]));
  }
}), BI = /* @__PURE__ */ Ie(VI, [["__scopeId", "data-v-85a537ba"]]), WI = {
  key: 1,
  class: "manifest-viewer-shell"
}, GI = { class: "manifest-path" }, jI = /* @__PURE__ */ Ce({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = rt(), o = k(!1), n = k(null), l = k(!1), r = k({
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
            !r.value.exists || !r.value.content ? (a(), R(fs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (a(), i("div", WI, [
              b(BI, {
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
      b(is, {
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
          s("div", GI, [
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
}), HI = /* @__PURE__ */ Ie(jI, [["__scopeId", "data-v-814a8fdd"]]), qI = { class: "log-viewer-wrapper" }, KI = ["disabled", "title"], JI = /* @__PURE__ */ Ce({
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
      await Rt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), vt(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await Tl(v), n.value = "copied", setTimeout(() => {
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
    return (v, f) => (a(), i("div", qI, [
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
        }, m(n.value === "copied" ? "Copied!" : "Copy"), 9, KI),
        (a(!0), i(B, null, he(l.value, (p, w) => (a(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), bc = /* @__PURE__ */ Ie(JI, [["__scopeId", "data-v-5aaf1b88"]]), QI = /* @__PURE__ */ Ce({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: n, openFile: l } = rt(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
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
            r.value.length === 0 ? (a(), R(fs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (a(), R(bc, {
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
      b(is, {
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
}), Ii = /* @__PURE__ */ Ce({
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
    } = rt(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), C = P(() => u.value === "workspace" ? w.value : g.value);
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
    return vt(u, () => {
      $();
    }), vt(() => c.initialTab, (T) => {
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
            d.value.length === 0 ? (a(), R(fs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (a(), R(bc, {
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
            b(Rl, {
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
      b(is, {
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
}), YI = /* @__PURE__ */ Ce({
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
    return vt(() => t.initialTab, (d) => {
      d && (n.value = d, d !== "manifest" && (l.value = d));
    }), vt(l, (d) => {
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
          n.value === "manifest" ? (a(), R(HI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (a(), R(QI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (a(), R(Ii, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (a(), R(Ii, {
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
            b(Rl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(is, {
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
}), XI = { class: "header-info" }, ZI = { class: "commit-hash" }, e6 = {
  key: 0,
  class: "commit-refs"
}, t6 = { class: "commit-message" }, s6 = { class: "commit-date" }, o6 = {
  key: 0,
  class: "loading"
}, n6 = {
  key: 1,
  class: "changes-section"
}, a6 = { class: "stats-row" }, l6 = { class: "stat" }, i6 = { class: "stat insertions" }, r6 = { class: "stat deletions" }, c6 = {
  key: 0,
  class: "change-group"
}, u6 = {
  key: 1,
  class: "change-group"
}, d6 = {
  key: 0,
  class: "version"
}, m6 = {
  key: 2,
  class: "change-group"
}, f6 = { class: "change-item" }, v6 = /* @__PURE__ */ Ce({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = rt(), n = k(null), l = k(!0), r = P(() => {
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
          s("div", XI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", ZI, m(((v = n.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = n.value) == null ? void 0 : p.refs) != null && w.length ? (a(), i("span", e6, [
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
          s("div", t6, m(((v = n.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", s6, m(((f = n.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (a(), i("div", o6, "Loading details...")) : n.value ? (a(), i("div", n6, [
            s("div", a6, [
              s("span", l6, m(n.value.stats.files_changed) + " files", 1),
              s("span", i6, "+" + m(n.value.stats.insertions), 1),
              s("span", r6, "-" + m(n.value.stats.deletions), 1)
            ]),
            r.value ? (a(), i("div", c6, [
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
            c.value ? (a(), i("div", u6, [
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
                p.version ? (a(), i("span", d6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (a(!0), i(B, null, he(n.value.changes.nodes.removed, (p) => (a(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            n.value.changes.models.resolved > 0 ? (a(), i("div", m6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  S("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", f6, [
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
}), p6 = /* @__PURE__ */ Ie(v6, [["__scopeId", "data-v-d256ff6d"]]), g6 = { class: "popover-header" }, h6 = { class: "popover-body" }, y6 = {
  key: 0,
  class: "changes-summary"
}, w6 = {
  key: 0,
  class: "change-item"
}, _6 = {
  key: 1,
  class: "change-item"
}, k6 = {
  key: 2,
  class: "change-item"
}, b6 = {
  key: 3,
  class: "change-item"
}, $6 = {
  key: 4,
  class: "change-item"
}, C6 = {
  key: 5,
  class: "change-item"
}, x6 = {
  key: 1,
  class: "no-changes"
}, S6 = {
  key: 2,
  class: "loading"
}, I6 = {
  key: 3,
  class: "issues-error"
}, E6 = { class: "error-header" }, T6 = { class: "error-title" }, M6 = { class: "issues-list" }, P6 = { class: "workflow-state" }, R6 = { class: "message-section" }, L6 = { class: "popover-footer" }, D6 = {
  key: 1,
  class: "commit-popover"
}, N6 = { class: "popover-header" }, O6 = { class: "popover-body" }, U6 = {
  key: 0,
  class: "changes-summary"
}, A6 = {
  key: 0,
  class: "change-item"
}, z6 = {
  key: 1,
  class: "change-item"
}, F6 = {
  key: 2,
  class: "change-item"
}, V6 = {
  key: 3,
  class: "change-item"
}, B6 = {
  key: 4,
  class: "change-item"
}, W6 = {
  key: 5,
  class: "change-item"
}, G6 = {
  key: 1,
  class: "no-changes"
}, j6 = {
  key: 2,
  class: "loading"
}, H6 = {
  key: 3,
  class: "issues-error"
}, q6 = { class: "error-header" }, K6 = { class: "error-title" }, J6 = { class: "issues-list" }, Q6 = { class: "workflow-state" }, Y6 = { class: "message-section" }, X6 = { class: "popover-footer" }, Z6 = /* @__PURE__ */ Ce({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, n = t, { commit: l } = rt(), r = k(""), c = k(!1), u = k(!1), d = P(() => {
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
          onClick: C[4] || (C[4] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", g6, [
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
          s("div", h6, [
            e.status && d.value ? (a(), i("div", y6, [
              e.status.workflows.new.length ? (a(), i("div", w6, [
                C[12] || (C[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (a(), i("div", _6, [
                C[13] || (C[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (a(), i("div", k6, [
                C[14] || (C[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (a(), i("div", b6, [
                C[15] || (C[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (a(), i("div", $6, [
                C[16] || (C[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (a(), i("div", C6, [...C[17] || (C[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (a(), i("div", x6, " No changes to commit ")) : (a(), i("div", S6, " Loading... ")),
            p.value ? (a(), i("div", I6, [
              s("div", E6, [
                C[18] || (C[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", T6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", M6, [
                (a(!0), i(B, null, he(f.value, ($) => (a(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m($.name), 1),
                  s("span", P6, "(" + m($.sync_state) + ")", 1),
                  S(": " + m($.issue_summary), 1)
                ]))), 128))
              ]),
              b(Yn, {
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
            s("div", R6, [
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
          s("div", L6, [
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
    ])) : (a(), i("div", D6, [
      s("div", N6, [
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
      s("div", O6, [
        e.status && d.value ? (a(), i("div", U6, [
          e.status.workflows.new.length ? (a(), i("div", A6, [
            C[23] || (C[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (a(), i("div", z6, [
            C[24] || (C[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (a(), i("div", F6, [
            C[25] || (C[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (a(), i("div", V6, [
            C[26] || (C[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (a(), i("div", B6, [
            C[27] || (C[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (a(), i("div", W6, [...C[28] || (C[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (a(), i("div", G6, " No changes to commit ")) : (a(), i("div", j6, " Loading... ")),
        p.value ? (a(), i("div", H6, [
          s("div", q6, [
            C[29] || (C[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", K6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", J6, [
            (a(!0), i(B, null, he(f.value, ($) => (a(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              s("strong", null, m($.name), 1),
              s("span", Q6, "(" + m($.sync_state) + ")", 1),
              S(": " + m($.issue_summary), 1)
            ]))), 128))
          ]),
          b(Yn, {
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
        s("div", Y6, [
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
      s("div", X6, [
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
}), $c = /* @__PURE__ */ Ie(Z6, [["__scopeId", "data-v-5f897631"]]), eE = { class: "switch-body" }, tE = { class: "switch-message" }, sE = { class: "switch-details" }, oE = /* @__PURE__ */ Ce({
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
        s("div", eE, [
          s("p", tE, [
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
          s("p", sE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
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
}), nE = /* @__PURE__ */ Ie(oE, [["__scopeId", "data-v-f6d223e6"]]), aE = {
  key: 0,
  class: "modal-overlay"
}, lE = { class: "modal-content" }, iE = { class: "modal-body" }, rE = { class: "progress-info" }, cE = { class: "progress-percentage" }, uE = { class: "progress-state" }, dE = { class: "switch-steps" }, mE = { class: "step-icon" }, fE = { class: "step-label" }, vE = /* @__PURE__ */ Ce({
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
      e.show ? (a(), i("div", aE, [
        s("div", lE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", iE, [
            b(gc, {
              progress: e.progress,
              variant: n.value
            }, null, 8, ["progress", "variant"]),
            s("div", rE, [
              s("div", cE, m(e.progress) + "%", 1),
              s("div", uE, m(o.value), 1)
            ]),
            s("div", dE, [
              (a(!0), i(B, null, he(l.value, (u) => (a(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", mE, m(u.icon), 1),
                s("span", fE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), pE = /* @__PURE__ */ Ie(vE, [["__scopeId", "data-v-768a5078"]]), gE = { class: "modal-header" }, hE = { class: "modal-body" }, yE = {
  key: 0,
  class: "node-section"
}, wE = { class: "node-list" }, _E = {
  key: 1,
  class: "node-section"
}, kE = { class: "node-list" }, bE = { class: "modal-actions" }, $E = /* @__PURE__ */ Ce({
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
          onClick: o[3] || (o[3] = pt(() => {
          }, ["stop"]))
        }, [
          s("div", gE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (n) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", hE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (a(), i("div", yE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", wE, [
                (a(!0), i(B, null, he(e.mismatchDetails.missing_nodes, (n) => (a(), i("div", {
                  key: n,
                  class: "node-item add"
                }, " + " + m(n), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (a(), i("div", _E, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", kE, [
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
          s("div", bE, [
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
}), CE = /* @__PURE__ */ Ie($E, [["__scopeId", "data-v-7cad7518"]]), xE = [
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
], Tn = "v0.0.24", SE = "Akatz", IE = { class: "social-buttons" }, EE = ["title", "aria-label", "onClick"], TE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ME = ["d"], PE = ["title", "aria-label", "onClick"], RE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, LE = ["d"], DE = /* @__PURE__ */ Ce({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, n) => (a(), i("div", IE, [
      (a(!0), i(B, null, he(st(xE), (l) => (a(), i(B, {
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
          (a(), i("svg", TE, [
            s("path", {
              d: l.iconPath
            }, null, 8, ME)
          ]))
        ], 8, EE)) : (a(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (a(), i("svg", RE, [
            s("path", {
              d: l.iconPath
            }, null, 8, LE)
          ]))
        ], 8, PE))
      ], 64))), 128))
    ]));
  }
}), Cc = /* @__PURE__ */ Ie(DE, [["__scopeId", "data-v-4f846342"]]), NE = { class: "footer-info" }, OE = ["title"], UE = {
  key: 0,
  class: "dev-badge"
}, AE = { class: "made-by" }, zE = /* @__PURE__ */ Ce({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = rt(), o = k(null), n = k(null), l = k(null), r = P(() => o.value === "development"), c = P(() => {
      var d;
      if (!r.value) return Tn;
      const u = [n.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${Tn} (${u})` : `${Tn} (development)`;
    });
    return at(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, n.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (a(), i("div", NE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        S(m(st(Tn)) + " ", 1),
        r.value ? (a(), i("span", UE, "dev")) : y("", !0)
      ], 8, OE),
      s("span", AE, [
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
        S(" by " + m(st(SE)), 1)
      ])
    ]));
  }
}), xc = /* @__PURE__ */ Ie(zE, [["__scopeId", "data-v-4fa265b3"]]), FE = /* @__PURE__ */ Ce({
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
        b(mc, {
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
}), VE = /* @__PURE__ */ Ie(FE, [["__scopeId", "data-v-fac00ae7"]]), BE = { class: "header-actions" }, WE = {
  key: 0,
  class: "wizard-step"
}, GE = { class: "form-field" }, jE = ["placeholder"], HE = {
  key: 0,
  class: "form-error"
}, qE = { class: "form-field form-field--checkbox" }, KE = { class: "form-checkbox" }, JE = {
  key: 0,
  class: "form-field"
}, QE = ["placeholder"], YE = {
  key: 0,
  class: "form-info"
}, XE = {
  key: 1,
  class: "form-suggestion"
}, ZE = {
  key: 2,
  class: "form-error"
}, eT = {
  key: 3,
  class: "form-info"
}, tT = {
  key: 1,
  class: "wizard-step"
}, sT = {
  key: 0,
  class: "progress-check-loading"
}, oT = {
  key: 0,
  class: "cli-warning"
}, nT = { class: "cli-warning-header" }, aT = {
  key: 1,
  class: "env-landing"
}, lT = { class: "env-list" }, iT = ["value"], rT = { class: "env-name" }, cT = {
  key: 2,
  class: "env-create"
}, uT = { class: "form-field" }, dT = { class: "form-field" }, mT = ["value"], fT = { class: "form-field" }, vT = ["disabled"], pT = ["value"], gT = { class: "form-field" }, hT = ["value"], yT = { class: "form-field form-field--checkbox" }, wT = { class: "form-checkbox" }, _T = {
  key: 0,
  class: "form-error"
}, kT = {
  key: 1,
  class: "env-creating"
}, bT = { class: "creating-intro" }, $T = {
  key: 3,
  class: "env-import"
}, CT = { class: "wizard-footer" }, xT = { class: "wizard-footer-actions" }, po = 10, ST = 600 * 1e3, Ei = 1800 * 1e3, IT = /* @__PURE__ */ Ce({
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
    } = rt(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), C = k(!1), $ = k(!1), x = k(!1), I = k(null), T = k(o.initialStep === 2), M = k(o.defaultPath), N = k(!!o.detectedModelsDir), z = k(o.detectedModelsDir || ""), G = k(null), L = k(null), K = k(null), ce = k(null), te = k("my-new-env"), Y = k(vc), we = k("latest"), ee = k(pc), W = k(!0), Q = k(null), ke = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), pe = k(!1), O = k(!1), ue = k(!1), Pe = k({ progress: 0, message: "" }), _e = k({ progress: 0, message: "" }), De = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Ue = k(0), Ve = k(null), ae = k(0), oe = k(null), Re = P(() => {
      var Te, Ye;
      const ge = (Te = M.value) == null ? void 0 : Te.trim(), J = !G.value, qe = !N.value || !L.value && ((Ye = z.value) == null ? void 0 : Ye.trim());
      return ge && J && qe;
    }), fe = P(() => {
      var ge;
      return (ge = te.value) == null ? void 0 : ge.trim();
    }), ne = P(() => !!(p.value === 2 || ke.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), E = P(() => ke.value || o.workspacePath || null);
    async function U() {
      var ge;
      if (G.value = null, !!((ge = M.value) != null && ge.trim()))
        try {
          const J = await c({ path: M.value, type: "workspace" });
          J.valid || (G.value = J.error || "Invalid path");
        } catch (J) {
          G.value = J instanceof Error ? J.message : "Validation failed";
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
      var ge, J, qe, Te, Ye;
      if (G.value = null, L.value = null, await U(), (ge = G.value) != null && ge.includes("already exists")) {
        G.value = null, ke.value = ((J = M.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!G.value && !(N.value && ((qe = z.value) != null && qe.trim()) && (await ie(), L.value))) {
        O.value = !0;
        try {
          await l({
            workspace_path: ((Te = M.value) == null ? void 0 : Te.trim()) || o.defaultPath,
            models_directory: N.value && ((Ye = z.value) == null ? void 0 : Ye.trim()) || null
          }), Ue.value = 0, Ve.value = Date.now();
          const Fe = setInterval(async () => {
            var Oe;
            if (Ve.value && Date.now() - Ve.value > ST) {
              clearInterval(Fe), O.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const j = await r();
              if (Ue.value = 0, j.state === "idle" && O.value) {
                clearInterval(Fe), O.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: j.progress, message: j.message }, j.state === "complete" ? (clearInterval(Fe), O.value = !1, ke.value = ((Oe = M.value) == null ? void 0 : Oe.trim()) || o.defaultPath, p.value = 2, Se()) : j.state === "error" && (clearInterval(Fe), O.value = !1, G.value = j.error || "Workspace creation failed");
            } catch (j) {
              Ue.value++, console.warn(`Polling failure ${Ue.value}/${po}:`, j), Ue.value >= po && (clearInterval(Fe), O.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Fe) {
          O.value = !1, G.value = Fe instanceof Error ? Fe.message : "Failed to create workspace";
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
          ae.value = 0, oe.value = Date.now();
          const qe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ei) {
              clearInterval(qe), ue.value = !1, Q.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Te = await d();
              if (ae.value = 0, Te.state === "idle" && ue.value) {
                clearInterval(qe), ue.value = !1, Q.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (_e.value = {
                progress: Te.progress ?? 0,
                message: Te.message,
                phase: Te.phase
              }, Te.state === "complete") {
                clearInterval(qe), ue.value = !1;
                const Ye = Te.environment_name || ge.name;
                W.value ? n("complete", Ye, ke.value) : (g.value = "landing", n("environment-created-no-switch", Ye));
              } else Te.state === "error" && (clearInterval(qe), ue.value = !1, Q.value = Te.error || "Environment creation failed");
            } catch (Te) {
              ae.value++, console.warn(`Polling failure ${ae.value}/${po}:`, Te), ae.value >= po && (clearInterval(qe), ue.value = !1, Q.value = "Lost connection to server. Please refresh and try again.");
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
    function q() {
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
      ae.value = 0, oe.value = Date.now();
      let ge = null;
      const J = async () => {
        if (oe.value && Date.now() - oe.value > Ei)
          return ge && clearInterval(ge), ue.value = !1, Q.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Te = await d();
          if (ae.value = 0, Te.state === "idle" && ue.value)
            return ge && clearInterval(ge), ue.value = !1, Q.value = "Environment creation was interrupted. Please try again.", !1;
          if (_e.value = {
            progress: Te.progress ?? 0,
            message: Te.message,
            phase: Te.phase
          }, Te.state === "complete") {
            ge && clearInterval(ge), ue.value = !1;
            const Ye = Te.environment_name || te.value;
            return n("complete", Ye, ke.value), !1;
          } else if (Te.state === "error")
            return ge && clearInterval(ge), ue.value = !1, Q.value = Te.error || "Environment creation failed", !1;
          return !0;
        } catch (Te) {
          return ae.value++, console.warn(`Polling failure ${ae.value}/${po}:`, Te), ae.value >= po ? (ge && clearInterval(ge), ue.value = !1, Q.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
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
          s("div", BE, [
            b(Cc),
            J[19] || (J[19] = s("span", { class: "header-divider" }, null, -1)),
            ne.value ? (a(), i("button", {
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
            p.value === 1 ? (a(), i("div", WE, [
              J[24] || (J[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", GE, [
                J[21] || (J[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Mt(s("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Te) => M.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, jE), [
                  [tn, M.value]
                ]),
                G.value ? (a(), i("p", HE, m(G.value), 1)) : y("", !0)
              ]),
              s("div", qE, [
                s("label", KE, [
                  Mt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Te) => N.value = Te)
                  }, null, 512), [
                    [Kn, N.value]
                  ]),
                  J[22] || (J[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              N.value ? (a(), i("div", JE, [
                J[23] || (J[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Mt(s("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Te) => z.value = Te),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, QE), [
                  [tn, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (a(), i("p", YE, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                K.value ? (a(), i("p", XE, " Did you mean: " + m(K.value), 1)) : y("", !0),
                L.value ? (a(), i("p", ZE, m(L.value), 1)) : y("", !0),
                ce.value !== null && !L.value ? (a(), i("p", eT, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              O.value ? (a(), R(Qn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (a(), i("div", tT, [
              T.value ? (a(), i("div", sT, [...J[25] || (J[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (a(), i(B, { key: 1 }, [
                !o.cliInstalled && !$.value ? (a(), i("div", oT, [
                  s("div", nT, [
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
                g.value === "landing" ? (a(), i("div", aT, [
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
                    s("div", lT, [
                      (a(!0), i(B, null, he(o.existingEnvironments, (Te) => (a(), i("label", {
                        key: Te,
                        class: Be(["env-option", { selected: w.value === Te }])
                      }, [
                        Mt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Te,
                          "onUpdate:modelValue": J[8] || (J[8] = (Ye) => w.value = Ye)
                        }, null, 8, iT), [
                          [Nn, w.value]
                        ]),
                        s("span", rT, m(Te), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (a(), i("div", cT, [
                  ue.value ? (a(), i("div", kT, [
                    s("p", bT, [
                      J[41] || (J[41] = S(" Creating environment ", -1)),
                      s("strong", null, m(te.value), 1),
                      J[42] || (J[42] = S("... ", -1))
                    ]),
                    b(Qn, {
                      progress: _e.value.progress,
                      message: _e.value.message,
                      "current-phase": _e.value.phase,
                      "show-steps": !0,
                      steps: De
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (a(), i(B, { key: 0 }, [
                    J[40] || (J[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", uT, [
                      J[35] || (J[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Mt(s("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Te) => te.value = Te),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [tn, te.value]
                      ])
                    ]),
                    s("div", dT, [
                      J[36] || (J[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Te) => Y.value = Te),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, he(st(fc), (Te) => (a(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te), 9, mT))), 128))
                      ], 512), [
                        [Co, Y.value]
                      ])
                    ]),
                    s("div", fT, [
                      J[37] || (J[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Te) => we.value = Te),
                        class: "form-select",
                        disabled: pe.value
                      }, [
                        (a(!0), i(B, null, he(se.value, (Te) => (a(), i("option", {
                          key: Te.tag_name,
                          value: Te.tag_name
                        }, m(Te.name), 9, pT))), 128))
                      ], 8, vT), [
                        [Co, we.value]
                      ])
                    ]),
                    s("div", gT, [
                      J[38] || (J[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Mt(s("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Te) => ee.value = Te),
                        class: "form-select"
                      }, [
                        (a(!0), i(B, null, he(st(Pl), (Te) => (a(), i("option", {
                          key: Te,
                          value: Te
                        }, m(Te) + m(Te === "auto" ? " (detect GPU)" : ""), 9, hT))), 128))
                      ], 512), [
                        [Co, ee.value]
                      ])
                    ]),
                    s("div", yT, [
                      s("label", wT, [
                        Mt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Te) => W.value = Te)
                        }, null, 512), [
                          [Kn, W.value]
                        ]),
                        J[39] || (J[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    Q.value ? (a(), i("div", _T, m(Q.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (a(), i("div", $T, [
                  b(yc, {
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
          s("div", CT, [
            b(xc),
            s("div", xT, [
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
                  onClick: q
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
      _.value ? (a(), R(VE, {
        key: 0,
        "workspace-path": E.value,
        onClose: J[16] || (J[16] = (qe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), ET = /* @__PURE__ */ Ie(IT, [["__scopeId", "data-v-9a9aadc0"]]), TT = { class: "update-banner" }, MT = { class: "update-banner__left" }, PT = { class: "update-banner__title" }, RT = {
  key: 0,
  class: "update-banner__summary"
}, LT = { class: "update-banner__actions" }, DT = ["disabled"], NT = ["disabled"], OT = ["disabled"], UT = /* @__PURE__ */ Ce({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (n, l) => (a(), i("div", TT, [
      s("div", MT, [
        s("div", PT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (a(), i("div", RT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", LT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, DT),
        e.info.release_url ? (a(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, NT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, OT)
      ])
    ]));
  }
}), AT = /* @__PURE__ */ Ie(UT, [["__scopeId", "data-v-49562c5c"]]), Sc = "ComfyGit.UpdateNotice.DismissedVersion";
function zT() {
  try {
    return localStorage.getItem(Sc);
  } catch {
    return null;
  }
}
function FT(e) {
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
}
function VT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : zT() !== e.latest_version;
}
const BT = { class: "comfygit-panel" }, WT = { class: "panel-header" }, GT = { class: "header-left" }, jT = {
  key: 0,
  class: "header-info"
}, HT = { class: "header-actions" }, qT = { class: "env-switcher" }, KT = { class: "env-switcher-header" }, JT = { class: "env-control-buttons" }, QT = {
  key: 0,
  class: "header-info"
}, YT = { class: "branch-name" }, XT = { class: "panel-main" }, ZT = { class: "sidebar" }, eM = { class: "sidebar-content" }, tM = { class: "sidebar-section" }, sM = { class: "sidebar-section" }, oM = { class: "sidebar-section" }, nM = { class: "sidebar-footer" }, aM = { class: "content-area" }, lM = {
  key: 0,
  class: "error-message"
}, iM = {
  key: 1,
  class: "loading"
}, rM = { class: "dialog-content env-selector-dialog" }, cM = { class: "dialog-header" }, uM = { class: "dialog-body" }, dM = { class: "env-list" }, mM = { class: "env-info" }, fM = { class: "env-name-row" }, vM = { class: "env-indicator" }, pM = { class: "env-name" }, gM = {
  key: 0,
  class: "env-branch"
}, hM = {
  key: 1,
  class: "current-label"
}, yM = { class: "env-stats" }, wM = ["onClick"], _M = { class: "toast-container" }, kM = { class: "toast-message" }, Ti = "ComfyGit.LastView", Mi = "ComfyGit.LastSection", bM = /* @__PURE__ */ Ce({
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
    } = rt(), M = zh(), N = k(null), z = k([]), G = k([]), L = k([]), K = P(() => L.value.find((le) => le.is_current)), ce = k(null), te = k(!1), Y = k(!1), we = k("remotes"), ee = k("manifest"), W = k(null), Q = k(!1), ke = k(1), se = P(() => {
      var le;
      return ((le = W.value) == null ? void 0 : le.state) || "managed";
    }), pe = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, O = P(() => {
      var le, H;
      return ((H = (le = W.value) == null ? void 0 : le.runtime_context) == null ? void 0 : H.capabilities) || pe;
    }), ue = k(!1), Pe = k(null), _e = k(null), De = k(!1), Ue = k(null), Ve = k(!1), ae = k(!1), oe = P(() => !Ve.value && VT(Ue.value)), Re = k(null), fe = k(null), ne = k(null), E = k(!1), U = k(!1), ie = k(""), Ee = k(null), xe = k({ state: "idle", progress: 0, message: "" });
    let Se = null, X = null;
    const q = {
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
    }, ve = o.initialView ? q[o.initialView] : null, be = [
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
        const le = sessionStorage.getItem(Ti), H = sessionStorage.getItem(Mi), Je = le === "branches" || le === "history" || le === "remotes" ? "version-control" : le === "manifest" || le === "debug-env" || le === "debug-workspace" ? "diagnostics" : le, Ze = H === "all-envs" ? "workspace" : H === "sharing" ? "version-control" : H;
        if (le && H && be.includes(Je) && Ke.includes(Ze))
          return { view: Je, section: Ze };
      } catch {
      }
      return null;
    }
    const ge = We(), J = k((ve == null ? void 0 : ve.view) ?? (ge == null ? void 0 : ge.view) ?? "status"), qe = k((ve == null ? void 0 : ve.section) ?? (ge == null ? void 0 : ge.section) ?? "this-env");
    function Te(le, H) {
      J.value = le, qe.value = H;
      try {
        sessionStorage.setItem(Ti, le), sessionStorage.setItem(Mi, H);
      } catch {
      }
    }
    function Ye(le) {
      const Je = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[le];
      Je && Te(Je.view, Je.section);
    }
    function Fe(le) {
      we.value = le, Te("version-control", "version-control");
    }
    function Oe(le) {
      ee.value = le, Te("diagnostics", "diagnostics");
    }
    function j() {
      Fe("branches");
    }
    function de() {
      n("close"), setTimeout(async () => {
        await ye("Comfy.OpenManagerDialog") || await ye("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function ye(le) {
      var Ze, dt;
      const H = window.app, Je = [
        (Ze = H == null ? void 0 : H.extensionManager) == null ? void 0 : Ze.command,
        (dt = H == null ? void 0 : H.extensionManager) == null ? void 0 : dt.commands,
        H == null ? void 0 : H.command,
        H == null ? void 0 : H.commands
      ];
      for (const ht of Je)
        if (typeof (ht == null ? void 0 : ht.execute) == "function")
          try {
            return await ht.execute(le), !0;
          } catch (Dt) {
            console.debug(`[ComfyGit] Command ${le} did not open Extensions manager`, Dt);
          }
      return !1;
    }
    function Qe(le) {
      var Ze, dt, ht;
      const H = le.map((Dt) => Dt.toLowerCase()), Je = document.querySelectorAll('button, [role="button"]');
      for (const Dt of Je) {
        const ts = Dt;
        if ([
          (Ze = ts.textContent) == null ? void 0 : Ze.trim(),
          (dt = ts.getAttribute("title")) == null ? void 0 : dt.trim(),
          (ht = ts.getAttribute("aria-label")) == null ? void 0 : ht.trim()
        ].filter(Boolean).map((As) => As.toLowerCase()).some((As) => H.includes(As)))
          return ts.click(), !0;
      }
      return !1;
    }
    const D = k(null), A = k(!1), Z = k(!1), Ae = k([]);
    let ze = 0;
    function Le(le, H = "info", Je = 3e3) {
      const Ze = ++ze;
      return Ae.value.push({ id: Ze, message: le, type: H }), Je > 0 && setTimeout(() => {
        Ae.value = Ae.value.filter((dt) => dt.id !== Ze);
      }, Je), Ze;
    }
    function je(le) {
      Ae.value = Ae.value.filter((H) => H.id !== le);
    }
    function nt(le, H) {
      Le(le, H);
    }
    async function kt() {
      Ue.value = null, Ve.value = !1;
      try {
        Ue.value = await I();
      } catch {
      }
    }
    function Et() {
      var H;
      const le = (H = Ue.value) == null ? void 0 : H.release_url;
      if (le)
        try {
          window.open(le, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function re() {
      var H;
      const le = (H = Ue.value) == null ? void 0 : H.latest_version;
      le && FT(le), Ve.value = !0;
    }
    async function F() {
      if (ae.value) return;
      ae.value = !0;
      const le = Le("Updating comfygit-manager...", "info", 0);
      try {
        const H = await T();
        if (je(le), H.status !== "success") {
          if (Le(H.message || "Update failed", "error"), H.manual_instructions) {
            const Je = H.manual_instructions.split(`
`).map((Ze) => Ze.trim()).filter(Boolean);
            D.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: Je,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                D.value = null;
              }
            };
          }
          return;
        }
        if (Le(H.message || "Update complete", "success"), re(), H.restart_required) {
          Js();
          try {
            await js("/v2/manager/reboot");
          } catch {
          }
        }
      } catch (H) {
        je(le);
        const Je = H instanceof Error ? H.message : "Update failed";
        Le(Je, "error");
      } finally {
        ae.value = !1;
      }
    }
    const me = P(() => {
      if (!N.value) return "neutral";
      const le = N.value.workflows, H = le.new.length > 0 || le.modified.length > 0 || le.deleted.length > 0 || N.value.has_changes;
      return N.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    P(() => N.value ? me.value === "success" ? "All synced" : me.value === "warning" ? "Uncommitted changes" : me.value === "error" ? "Not synced" : "" : "");
    async function Ge(le = {}) {
      ue.value = !0, Pe.value = null;
      try {
        const [H, Je, Ze, dt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        N.value = H, z.value = Je.commits, G.value = Ze.branches, L.value = dt, n("statusUpdate", H), (le.refreshWorkflows ?? !0) && Re.value && await Re.value.loadWorkflows(!0);
      } catch (H) {
        Pe.value = H instanceof Error ? H.message : "Failed to load status", N.value = null, z.value = [], G.value = [];
      } finally {
        ue.value = !1;
      }
    }
    function ut(le) {
      _e.value = le;
    }
    async function xt(le) {
      var Je;
      _e.value = null;
      const H = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${le.short_hash || ((Je = le.hash) == null ? void 0 : Je.slice(0, 7))}?`,
        details: H ? kn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var ht;
          D.value = null, Js();
          const Ze = Le(`Checking out ${le.short_hash || ((ht = le.hash) == null ? void 0 : ht.slice(0, 7))}...`, "info", 0), dt = await u(le.hash, H);
          je(Ze), dt.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(dt.message || "Checkout failed", "error");
        }
      };
    }
    async function lt(le) {
      const H = N.value && (N.value.workflows.new.length > 0 || N.value.workflows.modified.length > 0 || N.value.workflows.deleted.length > 0 || N.value.has_changes);
      D.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${le}"?`,
        details: H ? kn() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, Js();
          const Je = Le(`Switching to ${le}...`, "info", 0), Ze = await v(le, H);
          je(Je), Ze.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(Ze.message || "Branch switch failed", "error");
        }
      };
    }
    async function St(le) {
      const H = Le(`Creating branch ${le}...`, "info", 0), Je = await d(le);
      je(H), Je.status === "success" ? (Le(`Branch "${le}" created`, "success"), await Ge()) : Le(Je.message || "Failed to create branch", "error");
    }
    async function es(le, H = !1) {
      const Je = async (Ze) => {
        var ht;
        const dt = Le(`Deleting branch ${le}...`, "info", 0);
        try {
          const Dt = await f(le, Ze);
          je(dt), Dt.status === "success" ? (Le(`Branch "${le}" deleted`, "success"), await Ge()) : (ht = Dt.message) != null && ht.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await Je(!0);
            }
          } : Le(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          je(dt);
          const ts = Dt instanceof Error ? Dt.message : "Failed to delete branch";
          ts.includes("not fully merged") ? D.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${le}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              D.value = null, await Je(!0);
            }
          } : Le(ts, "error");
        }
      };
      D.value = {
        title: "Delete Branch",
        message: `Delete branch "${le}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          D.value = null, await Je(H);
        }
      };
    }
    async function xs(le) {
      _e.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const Je = Le(`Creating branch ${H}...`, "info", 0), Ze = await d(H, le.hash);
        je(Je), Ze.status === "success" ? (Le(`Branch "${H}" created from ${le.short_hash}`, "success"), await Ge()) : Le(Ze.message || "Failed to create branch", "error");
      }
    }
    function Js() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function da() {
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
          D.value = null, Js(), Le("Restarting environment...", "info");
          try {
            await js("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function ma() {
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
          D.value = null, Le("Stopping environment...", "info");
          try {
            await js("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function Us(le, H) {
      if (!O.value.can_switch_environment) {
        Le("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      De.value = !1, ie.value = le, Ee.value = H || null, E.value = !0;
    }
    async function fa() {
      E.value = !1, U.value = !0, Js(), xe.value = {
        progress: 10,
        state: uo(10),
        message: mo(10)
      };
      try {
        await w(ie.value, Ee.value || void 0), va(), pa();
      } catch (le) {
        Ss(), U.value = !1, Le(`Failed to initiate switch: ${le instanceof Error ? le.message : "Unknown error"}`, "error"), xe.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function uo(le) {
      return le >= 100 ? "complete" : le >= 80 ? "validating" : le >= 60 ? "starting" : le >= 30 ? "syncing" : "preparing";
    }
    function mo(le) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(le)] || "";
    }
    function va() {
      if (X) return;
      let le = 10;
      const H = 60, Je = 5e3, Ze = 100, dt = (H - le) / (Je / Ze);
      X = window.setInterval(() => {
        if (le += dt, le >= H && (le = H, Ss()), xe.value.progress < H) {
          const ht = Math.floor(le);
          xe.value = {
            progress: ht,
            state: uo(ht),
            message: mo(ht)
          };
        }
      }, Ze);
    }
    function Ss() {
      X && (clearInterval(X), X = null);
    }
    function pa() {
      Se || (Se = window.setInterval(async () => {
        try {
          let le = await M.getStatus();
          if ((!le || le.state === "idle") && (le = await g()), !le)
            return;
          const H = le.progress || 0;
          H >= 60 && Ss();
          const Je = Math.max(H, xe.value.progress), Ze = le.state && le.state !== "idle" && le.state !== "unknown", dt = Ze ? le.state : uo(Je), ht = Ze && le.message || mo(Je);
          xe.value = {
            state: dt,
            progress: Je,
            message: ht
          }, le.state === "complete" ? (Ss(), No(), U.value = !1, Le(`✓ Switched to ${ie.value}`, "success"), await Ge(), ie.value = "") : le.state === "rolled_back" ? (Ss(), No(), U.value = !1, Le("Switch failed, restored previous environment", "warning"), ie.value = "") : le.state === "critical_failure" && (Ss(), No(), U.value = !1, Le(`Critical error during switch: ${le.message}`, "error"), ie.value = "");
        } catch (le) {
          console.error("Failed to poll switch progress:", le);
        }
      }, 1e3));
    }
    function No() {
      Ss(), Se && (clearInterval(Se), Se = null);
    }
    function ga() {
      var le;
      E.value = !1, ie.value = "", (le = W.value) != null && le.state && W.value.state !== "managed" && (ke.value = W.value.state === "no_workspace" ? 1 : 2, Q.value = !0);
    }
    async function ha(le) {
      A.value = !1, await Ge(), Le(le.message, le.success ? "success" : "error");
    }
    async function ya() {
      Z.value = !1;
      const le = Le("Syncing environment...", "info", 0);
      try {
        const H = await C("skip", !0);
        if (je(le), H.status === "success") {
          const Je = [];
          H.nodes_installed.length && Je.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && Je.push(`${H.nodes_removed.length} removed`);
          const Ze = Je.length ? `: ${Je.join(", ")}` : "";
          Le(`✓ Environment synced${Ze}`, "success"), await Ge();
        } else {
          const Je = H.errors.length ? H.errors.join("; ") : H.message;
          Le(`Sync failed: ${Je}`, "error");
        }
      } catch (H) {
        je(le), Le(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function wa(le) {
      var H;
      try {
        const Je = await $(le);
        Je.failed.length === 0 ? Le(`✓ Repaired ${Je.success} workflow${Je.success === 1 ? "" : "s"}`, "success") : Le(`Repaired ${Je.success}, failed: ${Je.failed.length}`, "warning"), await Ge();
      } catch (Je) {
        Le(`Repair failed: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
      } finally {
        (H = ne.value) == null || H.resetRepairingState();
      }
    }
    async function wn() {
      var H, Je;
      const le = Le("Repairing environment...", "info", 0);
      try {
        const Ze = await C("skip", !0);
        if (je(le), Ze.status === "success") {
          const dt = [];
          Ze.nodes_installed.length && dt.push(`${Ze.nodes_installed.length} installed`), Ze.nodes_removed.length && dt.push(`${Ze.nodes_removed.length} removed`);
          const ht = dt.length ? `: ${dt.join(", ")}` : "";
          Le(`✓ Environment repaired${ht}`, "success"), (H = ne.value) == null || H.closeDetailModal(), await Ge();
        } else {
          const dt = Ze.errors.length ? Ze.errors.join(", ") : Ze.message || "Unknown error";
          Le(`Repair failed: ${dt}`, "error");
        }
      } catch (Ze) {
        je(le), Le(`Repair error: ${Ze instanceof Error ? Ze.message : "Unknown error"}`, "error");
      } finally {
        (Je = ne.value) == null || Je.resetRepairingEnvironmentState();
      }
    }
    async function _a(le, H) {
      Le(`Environment '${le}' created`, "success"), await Ge(), fe.value && await fe.value.loadEnvironments(), H && O.value.can_switch_environment && await Us(le);
    }
    async function ka(le) {
      var H;
      if (!O.value.can_delete_environment) {
        Le("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((H = K.value) == null ? void 0 : H.name) === le) {
        Le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      D.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${le}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          D.value = null;
          try {
            const Je = await _(le);
            Je.status === "success" ? (Le(`Environment "${le}" deleted`, "success"), await Ge(), fe.value && await fe.value.loadEnvironments()) : Le(Je.message || "Failed to delete environment", "error");
          } catch (Je) {
            Le(`Error deleting environment: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ba(le, H) {
      Q.value = !1;
      try {
        W.value = await x();
      } catch {
      }
      O.value.can_switch_environment && await Us(le, H);
    }
    function $a() {
      Q.value = !1, n("close");
    }
    async function Ca(le, H) {
      await Us(le, H);
    }
    async function xa(le) {
      te.value = !1, await Ge(), await Us(le);
    }
    function Sa() {
      ce.value = null, te.value = !0;
    }
    function Ia(le) {
      ce.value = le, Y.value = !0;
    }
    function _n() {
      Y.value = !1, ce.value = null;
    }
    async function Ea(le) {
      W.value = await x(), console.log(`Environment '${le}' created. Available for switching.`);
    }
    function Ta() {
      if (!O.value.can_create_environment) {
        Le("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Te("environments", "workspace"), setTimeout(() => {
        var le;
        (le = fe.value) == null || le.openCreateModal();
      }, 100);
    }
    function kn() {
      if (!N.value) return [];
      const le = [], H = N.value.workflows;
      return H.new.length && le.push(`${H.new.length} new workflow(s)`), H.modified.length && le.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && le.push(`${H.deleted.length} deleted workflow(s)`), le;
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
      } catch (le) {
        console.warn("Setup status check failed, proceeding normally:", le);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        kt()
      ]);
    }), (le, H) => {
      var Je, Ze, dt, ht, Dt, ts, Oo, As, V, $e, He, mt, Tt;
      return a(), i("div", BT, [
        s("div", WT, [
          s("div", GT, [
            H[27] || (H[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            N.value ? (a(), i("div", jT)) : y("", !0)
          ]),
          s("div", HT, [
            b(Cc),
            H[30] || (H[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: ue.value }]),
              onClick: Ge,
              title: "Refresh"
            }, [...H[28] || (H[28] = [
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
              onClick: H[0] || (H[0] = (et) => n("close")),
              title: "Close"
            }, [...H[29] || (H[29] = [
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
        oe.value && Ue.value ? (a(), R(AT, {
          key: 0,
          info: Ue.value,
          updating: ae.value,
          onUpdate: F,
          onDismiss: re,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", qT, [
          s("div", KT, [
            H[31] || (H[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", JT, [
              O.value.can_restart_current ? (a(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: da
              }, " Restart ")) : y("", !0),
              O.value.can_stop_current ? (a(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: ma
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: H[1] || (H[1] = (et) => Te("environments", "workspace"))
          }, [
            N.value ? (a(), i("div", QT, [
              s("span", null, m(((Je = K.value) == null ? void 0 : Je.name) || ((Ze = N.value) == null ? void 0 : Ze.environment) || "Loading..."), 1),
              s("span", YT, "(" + m(N.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[32] || (H[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", XT, [
          s("div", ZT, [
            s("div", eM, [
              s("div", tM, [
                H[33] || (H[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "status" && qe.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (et) => Te("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (et) => Te("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (et) => Te("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: H[5] || (H[5] = (et) => Te("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: H[6] || (H[6] = (et) => Fe("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              H[36] || (H[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", sM, [
                H[34] || (H[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: H[7] || (H[7] = (et) => Te("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: H[8] || (H[8] = (et) => Te("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: H[9] || (H[9] = (et) => Te("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              H[37] || (H[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", oM, [
                H[35] || (H[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value === "manifest" }]),
                  onClick: H[10] || (H[10] = (et) => Oe("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value !== "manifest" }]),
                  onClick: H[11] || (H[11] = (et) => Oe("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", nM, [
              b(xc)
            ])
          ]),
          s("div", aM, [
            Pe.value ? (a(), i("div", lM, m(Pe.value), 1)) : !N.value && J.value === "status" ? (a(), i("div", iM, " Loading status... ")) : (a(), i(B, { key: 2 }, [
              J.value === "status" ? (a(), R(Ah, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: ne,
                status: N.value,
                "setup-state": se.value,
                onSwitchBranch: j,
                onCommitChanges: H[12] || (H[12] = (et) => A.value = !0),
                onSyncEnvironment: H[13] || (H[13] = (et) => Z.value = !0),
                onViewWorkflows: H[14] || (H[14] = (et) => Te("workflows", "this-env")),
                onViewHistory: H[15] || (H[15] = (et) => Fe("history")),
                onViewDebug: H[16] || (H[16] = (et) => Oe("env")),
                onViewNodes: H[17] || (H[17] = (et) => Te("nodes", "this-env")),
                onRepairMissingModels: wa,
                onRepairEnvironment: wn,
                onStartSetup: H[18] || (H[18] = (et) => Q.value = !0),
                onViewEnvironments: H[19] || (H[19] = (et) => Te("environments", "workspace")),
                onCreateEnvironment: Ta
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (a(), R(Eb, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Re,
                onRefresh: Ge
              }, null, 512)) : J.value === "models-env" ? (a(), R(D2, {
                key: 2,
                onNavigate: Ye
              })) : J.value === "version-control" ? (a(), R(UI, {
                key: 3,
                commits: z.value,
                "current-ref": (dt = N.value) == null ? void 0 : dt.branch,
                branches: G.value,
                current: ((ht = N.value) == null ? void 0 : ht.branch) || null,
                "initial-tab": we.value,
                onSelect: ut,
                onCheckout: xt,
                onSwitch: lt,
                onCreate: St,
                onDelete: es,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (a(), R(S$, {
                key: 4,
                "version-mismatches": ((ts = (Dt = N.value) == null ? void 0 : Dt.comparison) == null ? void 0 : ts.version_mismatches) || [],
                onOpenNodeManager: de,
                onRepairEnvironment: wn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (a(), R(YI, {
                key: 5,
                "initial-tab": ee.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (a(), R(xx, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: fe,
                "can-create": O.value.can_create_environment,
                "can-switch": O.value.can_switch_environment,
                "can-delete": O.value.can_delete_environment,
                onSwitch: Us,
                onCreated: _a,
                onDelete: ka,
                onImport: Sa,
                onExport: Ia
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (a(), R(j2, {
                key: 7,
                onRefresh: Ge
              })) : J.value === "settings" ? (a(), R(Z$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        _e.value ? (a(), R(p6, {
          key: 1,
          commit: _e.value,
          onClose: H[20] || (H[20] = (et) => _e.value = null),
          onCheckout: xt,
          onCreateBranch: xs
        }, null, 8, ["commit"])) : y("", !0),
        D.value ? (a(), R(Ml, {
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
          onCancel: H[21] || (H[21] = (et) => D.value = null),
          onSecondary: D.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        te.value ? (a(), R($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: H[22] || (H[22] = (et) => te.value = !1)
        }, {
          body: h(() => [
            b(u8, {
              embedded: "",
              onImportCompleteSwitch: xa
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (a(), R($t, {
          key: 4,
          title: ce.value ? `EXPORT ENVIRONMENT: ${ce.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: _n
        }, {
          body: h(() => [
            b(p3, {
              embedded: "",
              "environment-name": ce.value,
              onClose: _n
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(nE, {
          show: E.value,
          "from-environment": ((Oo = K.value) == null ? void 0 : Oo.name) || "unknown",
          "to-environment": ie.value,
          onConfirm: fa,
          onClose: ga
        }, null, 8, ["show", "from-environment", "to-environment"]),
        A.value && N.value ? (a(), R($c, {
          key: 5,
          status: N.value,
          "as-modal": !0,
          onClose: H[23] || (H[23] = (et) => A.value = !1),
          onCommitted: ha
        }, null, 8, ["status"])) : y("", !0),
        Z.value && N.value ? (a(), R(CE, {
          key: 6,
          show: Z.value,
          "mismatch-details": {
            missing_nodes: N.value.comparison.missing_nodes,
            extra_nodes: N.value.comparison.extra_nodes
          },
          onConfirm: ya,
          onClose: H[24] || (H[24] = (et) => Z.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(pE, {
          show: U.value,
          state: xe.value.state,
          progress: xe.value.progress,
          message: xe.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        De.value ? (a(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: H[26] || (H[26] = pt((et) => De.value = !1, ["self"]))
        }, [
          s("div", rM, [
            s("div", cM, [
              H[39] || (H[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: H[25] || (H[25] = (et) => De.value = !1)
              }, [...H[38] || (H[38] = [
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
            s("div", uM, [
              H[40] || (H[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", dM, [
                (a(!0), i(B, null, he(L.value, (et) => (a(), i("div", {
                  key: et.name,
                  class: Be(["env-item", { current: et.is_current }])
                }, [
                  s("div", mM, [
                    s("div", fM, [
                      s("span", vM, m(et.is_current ? "●" : "○"), 1),
                      s("span", pM, m(et.name), 1),
                      et.current_branch ? (a(), i("span", gM, "(" + m(et.current_branch) + ")", 1)) : y("", !0),
                      et.is_current ? (a(), i("span", hM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", yM, m(et.workflow_count) + " workflows • " + m(et.node_count) + " nodes ", 1)
                  ]),
                  !et.is_current && O.value.can_switch_environment ? (a(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Qs) => Us(et.name)
                  }, " SWITCH ", 8, wM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        Q.value ? (a(), R(ET, {
          key: 8,
          "default-path": ((As = W.value) == null ? void 0 : As.default_path) || "~/comfygit",
          "detected-models-dir": ((V = W.value) == null ? void 0 : V.detected_models_dir) || null,
          "initial-step": ke.value,
          "existing-environments": (($e = W.value) == null ? void 0 : $e.environments) || [],
          "cli-installed": ((He = W.value) == null ? void 0 : He.cli_installed) ?? !0,
          "setup-state": ((mt = W.value) == null ? void 0 : mt.state) || "no_workspace",
          "workspace-path": ((Tt = W.value) == null ? void 0 : Tt.workspace_path) || null,
          onComplete: ba,
          onClose: $a,
          onSwitchEnvironment: Ca,
          onEnvironmentCreatedNoSwitch: Ea
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", _M, [
          b(tm, { name: "toast" }, {
            default: h(() => [
              (a(!0), i(B, null, he(Ae.value, (et) => (a(), i("div", {
                key: et.id,
                class: Be(["toast", et.type])
              }, [
                s("span", kM, m(et.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), $M = /* @__PURE__ */ Ie(bM, [["__scopeId", "data-v-8ec8aac1"]]), CM = { class: "item-header" }, xM = { class: "item-info" }, SM = { class: "filename" }, IM = { class: "metadata" }, EM = { class: "size" }, TM = {
  key: 0,
  class: "type"
}, MM = { class: "item-actions" }, PM = {
  key: 0,
  class: "progress-section"
}, RM = { class: "progress-bar" }, LM = { class: "progress-stats" }, DM = { class: "downloaded" }, NM = { class: "speed" }, OM = {
  key: 0,
  class: "eta"
}, UM = {
  key: 1,
  class: "status-msg paused"
}, AM = {
  key: 2,
  class: "status-msg queued"
}, zM = {
  key: 3,
  class: "status-msg completed"
}, FM = {
  key: 4,
  class: "status-msg failed"
}, VM = {
  key: 0,
  class: "retries"
}, BM = /* @__PURE__ */ Ce({
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
      s("div", CM, [
        s("div", xM, [
          s("div", SM, m(e.item.filename), 1),
          s("div", IM, [
            s("span", EM, m(n(e.item.size)), 1),
            e.item.type ? (a(), i("span", TM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", MM, [
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
      e.item.status === "downloading" ? (a(), i("div", PM, [
        s("div", RM, [
          s("div", {
            class: "progress-fill",
            style: Lt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", LM, [
          s("span", DM, m(n(e.item.downloaded)) + " / " + m(n(e.item.size)), 1),
          s("span", NM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (a(), i("span", OM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (a(), i("div", UM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (a(), i("div", AM, " Waiting in queue... ")) : e.item.status === "completed" ? (a(), i("div", zM, " ✓ Downloaded ")) : e.item.status === "failed" ? (a(), i("div", FM, [
        S(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (a(), i("span", VM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), Fo = /* @__PURE__ */ Ie(BM, [["__scopeId", "data-v-2110df65"]]), WM = { class: "queue-title" }, GM = { class: "count" }, jM = { class: "queue-actions" }, HM = { class: "action-label" }, qM = {
  key: 0,
  class: "overall-progress"
}, KM = { class: "progress-bar" }, JM = {
  key: 0,
  class: "current-mini"
}, QM = { class: "filename" }, YM = { class: "speed" }, XM = {
  key: 1,
  class: "queue-content"
}, ZM = {
  key: 0,
  class: "section"
}, eP = {
  key: 1,
  class: "section"
}, tP = { class: "section-header" }, sP = { class: "section-label paused" }, oP = { class: "items-list" }, nP = {
  key: 2,
  class: "section"
}, aP = { class: "section-header" }, lP = { class: "section-label" }, iP = { class: "items-list" }, rP = {
  key: 3,
  class: "section"
}, cP = { class: "section-header" }, uP = { class: "section-label" }, dP = { class: "items-list" }, mP = {
  key: 4,
  class: "section"
}, fP = { class: "section-header" }, vP = { class: "section-label failed" }, pP = { class: "items-list" }, gP = /* @__PURE__ */ Ce({
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
    } = Do(), C = k(!1);
    let $ = null;
    vt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (M, N) => {
        $ && (clearTimeout($), $ = null);
        const z = M.active === 0 && M.failed === 0 && M.paused === 0 && M.completed > 0, G = N && (N.active > 0 || N.paused > 0);
        z && G && ($ = setTimeout(() => {
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
          s("div", WM, [
            N[4] || (N[4] = s("span", { class: "icon" }, "↓", -1)),
            N[5] || (N[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", GM, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", jM, [
            s("span", HM, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (a(), i("div", XM, [
          st(o) ? (a(), i("div", ZM, [
            N[6] || (N[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(Fo, {
              item: st(o),
              onCancel: N[1] || (N[1] = (z) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (a(), i("div", eP, [
            s("div", tP, [
              s("span", sP, "Paused (" + m(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: N[2] || (N[2] = //@ts-ignore
                (...z) => st(w) && st(w)(...z))
              }, "Resume All")
            ]),
            s("div", oP, [
              (a(!0), i(B, null, he(st(c), (z) => (a(), R(Fo, {
                key: z.id,
                item: z,
                onResume: (G) => st(p)(z.id),
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(n).length > 0 ? (a(), i("div", nP, [
            s("div", aP, [
              s("span", lP, "Queued (" + m(st(n).length) + ")", 1)
            ]),
            s("div", iP, [
              (a(!0), i(B, null, he(st(n), (z) => (a(), R(Fo, {
                key: z.id,
                item: z,
                onCancel: (G) => I(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (a(), i("div", rP, [
            s("div", cP, [
              s("span", uP, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: N[3] || (N[3] = //@ts-ignore
                (...z) => st(_) && st(_)(...z))
              }, "Clear")
            ]),
            s("div", dP, [
              (a(!0), i(B, null, he(st(l).slice(0, 3), (z) => (a(), R(Fo, {
                key: z.id,
                item: z,
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (a(), i("div", mP, [
            s("div", fP, [
              s("span", vP, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", pP, [
              (a(!0), i(B, null, he(st(r), (z) => (a(), R(Fo, {
                key: z.id,
                item: z,
                onRetry: (G) => st(f)(z.id),
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (a(), i("div", qM, [
          s("div", KM, [
            s("div", {
              class: "progress-fill",
              style: Lt({ width: `${x.value}%` })
            }, null, 4)
          ]),
          st(o) ? (a(), i("div", JM, [
            s("span", QM, m(st(o).filename), 1),
            s("span", YM, m(T(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), hP = /* @__PURE__ */ Ie(gP, [["__scopeId", "data-v-3a3c9607"]]), yP = { class: "detail-header" }, wP = { class: "item-count" }, _P = { class: "resource-list" }, kP = { class: "item-info" }, bP = { class: "item-name" }, $P = {
  key: 0,
  class: "item-subtitle"
}, CP = {
  key: 0,
  class: "installing-badge"
}, xP = ["title"], SP = {
  key: 2,
  class: "installed-badge"
}, IP = {
  key: 3,
  class: "queued-badge"
}, EP = {
  key: 4,
  class: "action-buttons"
}, TP = {
  key: 1,
  class: "no-action"
}, MP = /* @__PURE__ */ Ce({
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
        s("div", yP, [
          s("span", wP, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
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
        s("div", _P, [
          (a(!0), i(B, null, he(e.items, (C) => (a(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            s("div", kP, [
              s("span", bP, m(C.name), 1),
              C.subtitle ? (a(), i("span", $P, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (a(), i(B, { key: 0 }, [
              d(C) ? (a(), i("span", CP, "Installing...")) : f(C) ? (a(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, xP)) : v(C) ? (a(), i("span", SP, "Installed")) : u(C) ? (a(), i("span", IP, "Queued")) : (a(), i("div", EP, [
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
            ], 64)) : (a(), i("span", TP, m(C.actionDisabledReason || "Not available"), 1))
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
}), PP = /* @__PURE__ */ Ie(MP, [["__scopeId", "data-v-ec7e9202"]]), RP = {
  key: 0,
  class: "loading-state"
}, LP = {
  key: 1,
  class: "analysis-results"
}, DP = {
  key: 0,
  class: "section"
}, NP = { class: "section-header" }, OP = { class: "section-title" }, UP = { class: "item-list" }, AP = { class: "package-info" }, zP = { class: "package-name" }, FP = { class: "node-count" }, VP = {
  key: 1,
  class: "installing-badge"
}, BP = {
  key: 2,
  class: "queued-badge"
}, WP = ["title"], GP = {
  key: 4,
  class: "installed-badge"
}, jP = {
  key: 1,
  class: "section"
}, HP = { class: "section-header" }, qP = { class: "section-title" }, KP = { class: "item-list" }, JP = { class: "node-type" }, QP = {
  key: 0,
  class: "overflow-note"
}, YP = {
  key: 2,
  class: "section"
}, XP = { class: "section-header" }, ZP = { class: "section-title" }, e7 = { class: "item-list" }, t7 = { class: "node-type" }, s7 = { class: "not-found" }, o7 = {
  key: 0,
  class: "overflow-note"
}, n7 = {
  key: 3,
  class: "section"
}, a7 = { class: "section-header" }, l7 = { class: "section-title" }, i7 = { class: "item-list" }, r7 = { class: "package-info community-info" }, c7 = { class: "community-title-row" }, u7 = { class: "package-name" }, d7 = { class: "node-count" }, m7 = { class: "community-mapping-note" }, f7 = { key: 0 }, v7 = {
  key: 0,
  class: "community-actions"
}, p7 = {
  key: 1,
  class: "installing-badge"
}, g7 = {
  key: 2,
  class: "queued-badge"
}, h7 = ["title"], y7 = {
  key: 4,
  class: "installed-badge"
}, w7 = ["title"], _7 = {
  key: 1,
  class: "no-url"
}, k7 = {
  key: 4,
  class: "section"
}, b7 = { class: "section-header" }, $7 = { class: "section-title" }, C7 = { class: "item-list" }, x7 = { class: "model-info" }, S7 = { class: "model-name" }, I7 = {
  key: 1,
  class: "queued-badge"
}, E7 = {
  key: 1,
  class: "no-url"
}, T7 = { class: "dont-show-again" }, M7 = 3e4, P7 = /* @__PURE__ */ Ce({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), n = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: $ } = Do(), { queueNodeInstall: x } = rt(), I = P(() => {
      var j;
      return ((j = n.value) == null ? void 0 : j.package_aliases) || {};
    });
    function T(j) {
      if (!j) return null;
      const de = I.value;
      let ye = j;
      const Qe = /* @__PURE__ */ new Set();
      for (; de[ye] && !Qe.has(ye); )
        Qe.add(ye), ye = de[ye];
      return ye;
    }
    function M(j, de) {
      return j instanceof Error && j.message ? j.message : typeof j == "string" && j.trim().length > 0 ? j : de;
    }
    function N(j) {
      for (const [de, ye] of _.value.entries())
        ye === j && _.value.delete(de);
    }
    function z(j) {
      if (!C.value.has(j)) return;
      const de = C.value.get(j);
      clearTimeout(de), C.value.delete(j);
    }
    function G() {
      for (const j of C.value.values())
        clearTimeout(j);
      C.value = /* @__PURE__ */ new Map();
    }
    function L(j) {
      z(j);
      const de = setTimeout(() => {
        if (C.value.delete(j), !c.value.has(j)) return;
        N(j), c.value.delete(j), f.value === j && (f.value = null), u.value.set(j, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", j);
      }, M7);
      C.value.set(j, de);
    }
    function K(j) {
      const de = `Cannot install "${j.title}" - package_id is missing`;
      u.value.set(j.item_id, de), o.value = de, console.warn("[ComfyGit] Community install requested without package_id:", j);
    }
    const ce = P(() => te.value.length > 0 || we.value.length > 0 || ee.value.length > 0 || W.value.length > 0 || O.value.length > 0), te = P(() => {
      var ye, Qe;
      if (!((ye = n.value) != null && ye.nodes)) return [];
      const j = /* @__PURE__ */ new Map(), de = (n.value.nodes.resolved || []).filter((D) => {
        var A;
        return !D.is_installed && ((A = D.package) == null ? void 0 : A.package_id);
      });
      for (const D of de) {
        const A = T(D.package.package_id);
        if (!A) continue;
        j.has(A) || j.set(A, {
          package_id: A,
          title: D.package.title || A,
          node_count: 0,
          node_types: [],
          repository: D.package.repository || null,
          latest_version: D.package.latest_version || null
        });
        const Z = j.get(A);
        Z.node_count++, Z.node_types.push(((Qe = D.reference) == null ? void 0 : Qe.node_type) || D.node_type);
      }
      return Array.from(j.values());
    }), Y = P(() => te.value.reduce((j, de) => j + de.node_count, 0)), we = P(() => {
      var j;
      return (j = n.value) != null && j.nodes ? (n.value.nodes.unresolved || []).map((de) => {
        var ye;
        return {
          node_type: ((ye = de.reference) == null ? void 0 : ye.node_type) || de.node_type
        };
      }) : [];
    }), ee = P(() => {
      var de;
      if (!((de = n.value) != null && de.nodes)) return [];
      const j = n.value.node_guidance || {};
      return (n.value.nodes.version_gated || []).map((ye) => {
        var D;
        const Qe = ((D = ye.reference) == null ? void 0 : D.node_type) || ye.node_type;
        return {
          node_type: Qe,
          guidance: ye.guidance || j[Qe] || null
        };
      });
    }), W = P(() => {
      var ye, Qe, D, A, Z, Ae, ze, Le;
      if (!((ye = n.value) != null && ye.nodes)) return [];
      const j = n.value.node_guidance || {}, de = /* @__PURE__ */ new Map();
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
          guidance: je.guidance || j[nt] || null
        });
        const re = de.get(Et);
        re.node_count++, re.guidance || (re.guidance = je.guidance || j[nt] || null), !re.repository && ((ze = je.package) != null && ze.repository) && (re.repository = je.package.repository), !re.latest_version && ((Le = je.package) != null && Le.latest_version) && (re.latest_version = je.package.latest_version);
      }
      return Array.from(de.values());
    }), Q = P(() => W.value.filter((j) => !!j.package_id)), ke = P(() => W.value.length >= 5 ? W.value.slice(0, 4) : W.value), se = P(() => Q.value.length > 0 && Q.value.every((j) => {
      const de = j.package_id;
      return r.value.has(de) || c.value.has(de) || u.value.has(de);
    }));
    function pe(j) {
      const de = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return j.repository && de.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), de;
    }
    const O = P(() => {
      var D;
      if (!((D = n.value) != null && D.models)) return [];
      const j = (n.value.models.resolved || []).filter(
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
      for (const A of j) {
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
    }), ue = P(() => O.value.filter((j) => j.canDownload)), Pe = P(() => te.value.length >= 5 ? te.value.slice(0, 4) : te.value), _e = P(() => O.value.length >= 5 ? O.value.slice(0, 4) : O.value), De = P(() => te.value.length > 0 && te.value.every(
      (j) => r.value.has(j.package_id) || c.value.has(j.package_id) || u.value.has(j.package_id)
    )), Ue = P(() => ue.value.length > 0 && ue.value.every((j) => d.value.has(j.url))), Ve = P(() => te.value.length > 0 || Q.value.length > 0 || ue.value.length > 0), ae = P(() => {
      const j = (te.value.length === 0 || De.value) && (Q.value.length === 0 || se.value), de = ue.value.length === 0 || Ue.value;
      return j && de;
    }), oe = P(() => w.value === "models" ? `Missing Models (${O.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${W.value.length})` : ""), Re = P(() => w.value === "models" ? O.value.map((j) => ({
      id: j.url || j.widget_value,
      name: j.filename,
      canAction: j.canDownload,
      actionDisabledReason: j.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? te.value.map((j) => ({
      id: j.package_id,
      name: j.title,
      subtitle: `(${j.node_count} ${j.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? W.value.map((j) => ({
      id: j.package_id || j.item_id,
      name: j.title,
      subtitle: `(${j.node_count} ${j.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!j.package_id,
      actionDisabledReason: j.package_id ? void 0 : "Manual setup required",
      actions: j.package_id ? pe(j) : []
    })) : []);
    function fe(j, de) {
      if (w.value === "models") {
        const ye = O.value.find((Qe) => Qe.url === j.id || Qe.widget_value === j.id);
        ye && Ee(ye);
      } else if (w.value === "packages") {
        const ye = te.value.find((Qe) => Qe.package_id === j.id);
        ye && E(ye);
      } else if (w.value === "community") {
        const ye = W.value.find((D) => (D.package_id || D.item_id) === j.id);
        if (!ye) return;
        if (!ye.package_id) {
          K({ item_id: ye.item_id, title: ye.title });
          return;
        }
        U(ye, de === "install_git" ? "git" : "registry");
      }
    }
    function ne() {
      w.value === "models" ? X() : w.value === "packages" ? xe() : w.value === "community" && Se();
    }
    async function E(j) {
      return ie(j.package_id, j.latest_version, "registry");
    }
    async function U(j, de) {
      return j.package_id ? ie(j.package_id, j.latest_version, de, j.repository) : (K({ item_id: j.item_id, title: j.title }), !1);
    }
    async function ie(j, de, ye, Qe) {
      const D = T(j) || j, A = de || "latest";
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
    function Ee(j) {
      !j.url || !j.targetPath || d.value.has(j.url) || ($([{
        workflow: "unsaved",
        filename: j.filename,
        url: j.url,
        targetPath: j.targetPath
      }]), d.value.add(j.url));
    }
    async function xe() {
      const j = { attempted: 0, failed: 0 };
      for (const de of te.value)
        !r.value.has(de.package_id) && !c.value.has(de.package_id) && !u.value.has(de.package_id) && (j.attempted++, await E(de) || j.failed++);
      return j;
    }
    async function Se() {
      const j = { attempted: 0, failed: 0 };
      for (const de of Q.value) {
        const ye = de.package_id;
        !r.value.has(ye) && !c.value.has(ye) && !u.value.has(ye) && (j.attempted++, await U(de, "registry") || j.failed++);
      }
      return j;
    }
    function X() {
      const j = ue.value.filter(
        (de) => !d.value.has(de.url)
      );
      if (j.length === 0) return 0;
      $(j.map((de) => ({
        workflow: "unsaved",
        filename: de.filename,
        url: de.url,
        targetPath: de.targetPath
      })));
      for (const de of j)
        d.value.add(de.url);
      return j.length;
    }
    async function q() {
      const j = await xe(), de = await Se();
      X();
      const ye = j.attempted + de.attempted, Qe = j.failed + de.failed;
      if (ye > 0 && Qe > 0) {
        const D = ye - Qe;
        o.value = `${D} of ${ye} installs queued, ${Qe} failed`;
      }
    }
    function ve() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function be(j) {
      var D, A;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const de = j == null ? void 0 : j.id;
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
      t.value = !0, o.value = null, G(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const Z = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: j, name: "unsaved" })
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
      G(), l.value = !1, n.value = null;
    }
    function We(j) {
      const { workflow: de } = j.detail;
      de && be(de);
    }
    function ge(j) {
      var Qe;
      const de = (Qe = j.detail) == null ? void 0 : Qe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: de,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: j.detail
      });
      const ye = _.value.get(de);
      ye ? (z(ye), f.value = ye, console.log("[ComfyGit] Installing package:", ye)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", de);
    }
    function J(j) {
      var D, A, Z, Ae, ze, Le, je;
      const de = (D = j.detail) == null ? void 0 : D.ui_id, ye = (Z = (A = j.detail) == null ? void 0 : A.status) == null ? void 0 : Z.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: de,
        status: ye,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: j.detail
      });
      const Qe = _.value.get(de);
      if (Qe) {
        if (z(Qe), _.value.delete(de), c.value.delete(Qe), f.value === Qe && (f.value = null), ye === "success")
          r.value.add(Qe), p.value++, console.log("[ComfyGit] Package installed successfully:", Qe);
        else {
          const nt = ((Le = (ze = (Ae = j.detail) == null ? void 0 : Ae.status) == null ? void 0 : ze.messages) == null ? void 0 : Le[0]) || ((je = j.detail) == null ? void 0 : je.result) || "Unknown error";
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
      return qe || (qe = Lo()), qe;
    }
    let Ye = !1;
    function Fe() {
      if (Ye) return !0;
      const j = Te();
      return j ? (j.addEventListener("cm-task-started", ge), j.addEventListener("cm-task-completed", J), j.addEventListener("comfygit:workflow-changed", Oe), Ye = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Oe(j) {
      const { change_type: de } = j.detail;
      (de === "created" || de === "modified") && l.value && (G(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", We);
    }), Po(() => {
      if (G(), window.removeEventListener("comfygit:workflow-loaded", We), Ye) {
        const j = Te();
        j && (j.removeEventListener("cm-task-started", ge), j.removeEventListener("cm-task-completed", J), j.removeEventListener("comfygit:workflow-changed", Oe)), Ye = !1;
      }
    }), (j, de) => (a(), i(B, null, [
      l.value ? (a(), R($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Ke
      }, {
        body: h(() => [
          t.value ? (a(), i("div", RP, [...de[5] || (de[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : n.value && ce.value ? (a(), i("div", LP, [
            te.value.length > 0 ? (a(), i("div", DP, [
              s("div", NP, [
                s("span", OP, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
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
              s("div", UP, [
                (a(!0), i(B, null, he(Pe.value, (ye) => (a(), i("div", {
                  key: ye.package_id,
                  class: "package-item"
                }, [
                  s("div", AP, [
                    s("span", zP, m(ye.title), 1),
                    s("span", FP, "(" + m(ye.node_count) + " " + m(ye.node_count === 1 ? "node" : "nodes") + ")", 1)
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
                  }, 1032, ["disabled", "onClick"])) : f.value === ye.package_id ? (a(), i("span", VP, "Installing...")) : c.value.has(ye.package_id) ? (a(), i("span", BP, "Queued")) : u.value.has(ye.package_id) ? (a(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ye.package_id)
                  }, "Failed ⚠", 8, WP)) : (a(), i("span", GP, "Installed"))
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
            we.value.length > 0 ? (a(), i("div", jP, [
              s("div", HP, [
                s("span", qP, "Unknown Nodes (" + m(we.value.length) + ")", 1)
              ]),
              s("div", KP, [
                (a(!0), i(B, null, he(we.value.slice(0, 5), (ye) => (a(), i("div", {
                  key: ye.node_type,
                  class: "item"
                }, [
                  s("code", JP, m(ye.node_type), 1),
                  de[7] || (de[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (a(), i("div", QP, " ...and " + m(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (a(), i("div", YP, [
              s("div", XP, [
                s("span", ZP, "Requires Newer ComfyUI (" + m(ee.value.length) + ")", 1)
              ]),
              s("div", e7, [
                (a(!0), i(B, null, he(ee.value.slice(0, 5), (ye) => (a(), i("div", {
                  key: `vg-${ye.node_type}`,
                  class: "item"
                }, [
                  s("code", t7, m(ye.node_type), 1),
                  s("span", s7, m(ye.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ee.value.length > 5 ? (a(), i("div", o7, " ...and " + m(ee.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (a(), i("div", n7, [
              s("div", a7, [
                s("span", l7, "Community-Mapped Packages (" + m(W.value.length) + ")", 1),
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
              s("div", i7, [
                (a(!0), i(B, null, he(ke.value, (ye) => (a(), i("div", {
                  key: `community-${ye.item_id}`,
                  class: "package-item"
                }, [
                  s("div", r7, [
                    s("div", c7, [
                      s("span", u7, m(ye.title), 1),
                      s("span", d7, "(" + m(ye.node_count) + " " + m(ye.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", m7, [
                      de[8] || (de[8] = S(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ye.guidance ? (a(), i("span", f7, ". " + m(ye.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  ye.package_id ? (a(), i(B, { key: 0 }, [
                    !r.value.has(ye.package_id) && !c.value.has(ye.package_id) && !u.value.has(ye.package_id) ? (a(), i("div", v7, [
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
                    ])) : f.value === ye.package_id ? (a(), i("span", p7, "Installing...")) : c.value.has(ye.package_id) ? (a(), i("span", g7, "Queued")) : u.value.has(ye.package_id) ? (a(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ye.package_id)
                    }, "Failed ⚠", 8, h7)) : (a(), i("span", y7, "Installed"))
                  ], 64)) : (a(), i(B, { key: 1 }, [
                    u.value.has(ye.item_id) ? (a(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ye.item_id)
                    }, "Failed ⚠", 8, w7)) : (a(), i("span", _7, "Manual setup required"))
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
            O.value.length > 0 ? (a(), i("div", k7, [
              s("div", b7, [
                s("span", $7, "Missing Models (" + m(O.value.length) + ")", 1),
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
              s("div", C7, [
                (a(!0), i(B, null, he(_e.value, (ye) => (a(), i("div", {
                  key: ye.widget_value,
                  class: "model-item"
                }, [
                  s("div", x7, [
                    s("span", S7, m(ye.filename), 1)
                  ]),
                  ye.canDownload ? (a(), i(B, { key: 0 }, [
                    d.value.has(ye.url) ? (a(), i("span", I7, "Queued")) : (a(), R(Ne, {
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
                  ], 64)) : (a(), i("span", E7, "Manual download required"))
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
            s("div", T7, [
              b(Yn, {
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
            disabled: ae.value,
            onClick: q
          }, {
            default: h(() => [
              S(m(ae.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (a(), R(PP, {
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
        onBulkAction: ne
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), R7 = /* @__PURE__ */ Ie(P7, [["__scopeId", "data-v-d966f773"]]), L7 = {
  key: 0,
  class: "io-mapping-root"
}, D7 = { class: "io-mapping-visual-layer" }, N7 = { class: "io-mapping-header" }, O7 = { class: "io-mapping-header-main" }, U7 = { class: "io-mapping-subtitle" }, A7 = {
  key: 0,
  class: "io-mapping-hover-summary"
}, z7 = { class: "io-mapping-header-actions" }, F7 = { class: "io-mapping-sidebar" }, V7 = { class: "io-mapping-sidebar-scroll" }, B7 = {
  key: 0,
  class: "io-state-block"
}, W7 = {
  key: 1,
  class: "io-state-block io-state-error"
}, G7 = { class: "contract-meta-section" }, j7 = { class: "contract-meta-toggle-icon" }, H7 = {
  key: 0,
  class: "contract-meta-body"
}, q7 = { class: "contract-summary" }, K7 = { class: "summary-pill" }, J7 = { class: "summary-pill" }, Q7 = { class: "summary-pill" }, Y7 = { class: "mapping-section" }, X7 = { class: "section-header" }, Z7 = {
  key: 0,
  class: "empty-message"
}, eR = ["onClick"], tR = { class: "item-card-title" }, sR = { class: "item-card-meta" }, oR = { class: "item-card-summary" }, nR = { key: 0 }, aR = { class: "mapping-section" }, lR = { class: "section-header" }, iR = {
  key: 0,
  class: "empty-message"
}, rR = ["onClick"], cR = { class: "item-card-title" }, uR = { class: "item-card-meta" }, dR = { class: "item-card-summary" }, mR = { class: "io-mapping-footer" }, fR = { class: "io-mapping-footer-left" }, vR = { class: "io-mapping-footer-right" }, pR = /* @__PURE__ */ Ce({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: n, deleteWorkflowContract: l } = rt(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), $ = k(null), x = k(0), I = k(null), T = k(null);
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
    ], G = P(() => {
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
    function ae(D) {
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
    function ne(D, A) {
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
      const A = ne(D.node_id, D.widget_idx);
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
      var Et, re, F, me, Ge, ut, xt, lt, St, es;
      if (Re(D.target)) return null;
      const A = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!A) return null;
      const Z = (re = A.convertEventToCanvasOffset) == null ? void 0 : re.call(A, D);
      if (!Z || Z.length < 2) return null;
      const [Ae, ze] = Z, Le = A.graph || ((F = t.comfyApp) == null ? void 0 : F.graph) || ((me = t.comfyApp) == null ? void 0 : me.rootGraph), je = ((Ge = Le == null ? void 0 : Le.getNodeOnPos) == null ? void 0 : Ge.call(Le, Ae, ze, A.visible_nodes)) || ((ut = A.getNodeOnPos) == null ? void 0 : ut.call(A, Ae, ze)) || fe(D.target);
      if (!je) return null;
      const nt = (xt = je.getWidgetOnPos) == null ? void 0 : xt.call(je, Ae, ze, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: Ae, canvasY: ze };
      const kt = ((lt = je.getOutputOnPos) == null ? void 0 : lt.call(je, [Ae, ze])) || ((es = (St = je.constructor) == null ? void 0 : St.nodeData) != null && es.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: je, output: kt, canvasX: Ae, canvasY: ze } : null;
    }
    function q(D, A) {
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
        const je = Array.isArray(A.node.widgets) ? A.node.widgets.indexOf(A.widget) : -1, nt = E(((Ae = ne(A.node.id, je)) == null ? void 0 : Ae.getBoundingClientRect()) ?? ie({
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
          D.preventDefault(), D.stopImmediatePropagation(), D.stopPropagation(), Array.isArray(Z.graph_mouse) && (Z.graph_mouse[0] = A.canvasX, Z.graph_mouse[1] = A.canvasY), (ze = Z.selectNode) == null || ze.call(Z, A.node, !1), q(A.node, A.widget);
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
    async function Ye() {
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
    async function j(D) {
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
    return vt(r, (D) => {
      D ? (We(), ye()) : (ge(), Qe());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", j), window.addEventListener("keydown", de);
    }), gn(() => {
      ge(), Qe(), window.removeEventListener("comfygit:open-io-mapping", j), window.removeEventListener("keydown", de);
    }), (D, A) => r.value ? (a(), i("div", L7, [
      s("div", D7, [
        (a(!0), i(B, null, he(xe.value, (Z) => (a(), i("div", {
          key: Z.key,
          class: Be(["io-highlight", "io-highlight-input", { active: Z.active }]),
          style: Lt(Z.style)
        }, null, 6))), 128)),
        (a(!0), i(B, null, he(Se.value, (Z) => (a(), i("div", {
          key: Z.key,
          class: Be(["io-highlight", "io-highlight-output", { active: Z.active }]),
          style: Lt(Z.style)
        }, null, 6))), 128)),
        T.value ? (a(), i("div", {
          key: 0,
          class: Be(["io-highlight", T.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Lt(T.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", N7, [
        s("div", O7, [
          A[8] || (A[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", U7, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (a(), i("div", A7, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", z7, [
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
      s("aside", F7, [
        s("div", V7, [
          u.value ? (a(), i("div", B7, " Loading workflow contract... ")) : f.value ? (a(), i("div", W7, m(f.value), 1)) : w.value ? (a(), i(B, { key: 2 }, [
            s("section", G7, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: A[1] || (A[1] = (Z) => g.value = !g.value)
              }, [
                A[10] || (A[10] = s("span", null, "Contract Details", -1)),
                s("span", j7, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (a(), i("div", H7, [
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
            s("section", q7, [
              s("span", K7, m(K.value), 1),
              s("span", J7, m(L.value.inputs.length) + " input" + m(L.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", Q7, m(L.value.outputs.length) + " output" + m(L.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", Y7, [
              s("div", X7, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...A[11] || (A[11] = [
                    S("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.inputs.length ? y("", !0) : (a(), i("div", Z7, " No inputs configured. ")),
              (a(!0), i(B, null, he(L.value.inputs, (Z, Ae) => (a(), i("div", {
                key: `input-${Ae}`,
                class: Be(["item-card", { selected: C.value === Ae }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (ze) => Ve(Ae)
                }, [
                  s("div", null, [
                    s("div", tR, m(Z.name || `Input ${Ae + 1}`), 1),
                    s("div", sR, [
                      S(" Node " + m(Z.node_id || "?"), 1),
                      Z.widget_idx !== void 0 ? (a(), i(B, { key: 0 }, [
                        S(" · Widget " + m(Z.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", oR, [
                      s("span", null, m(Z.type || "string"), 1),
                      s("span", null, m(Z.required ? "required" : "optional"), 1),
                      Z.default !== void 0 && Z.default !== "" ? (a(), i("span", nR, "default " + m(ke(Z.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((ze) => De(Ae), ["stop"])
                  }, {
                    default: h(() => [...A[12] || (A[12] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, eR),
                C.value === Ae ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: A[4] || (A[4] = pt(() => {
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
                      b(Un, {
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
                      b(Un, {
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
            s("section", aR, [
              s("div", lR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...A[13] || (A[13] = [
                    S("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.outputs.length ? y("", !0) : (a(), i("div", iR, " No outputs configured. ")),
              (a(!0), i(B, null, he(L.value.outputs, (Z, Ae) => (a(), i("div", {
                key: `output-${Ae}`,
                class: Be(["item-card", { selected: $.value === Ae }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (ze) => ae(Ae)
                }, [
                  s("div", null, [
                    s("div", cR, m(Z.name || `Output ${Ae + 1}`), 1),
                    s("div", uR, [
                      S(" Node " + m(Z.node_id || "?"), 1),
                      Z.selector ? (a(), i(B, { key: 0 }, [
                        S(" · " + m(Z.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", dR, [
                      s("span", null, m(Z.type || "file"), 1)
                    ])
                  ]),
                  b(Ne, {
                    size: "sm",
                    variant: "ghost",
                    onClick: pt((ze) => Ue(Ae), ["stop"])
                  }, {
                    default: h(() => [...A[14] || (A[14] = [
                      S(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, rR),
                $.value === Ae ? (a(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: A[5] || (A[5] = pt(() => {
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
                      b(Un, {
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
        s("div", mR, [
          s("div", fR, [
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
          s("div", vR, [
            b(Ne, {
              variant: "danger",
              disabled: !G.value,
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
      _.value ? (a(), R(Ml, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Ye,
        onCancel: A[7] || (A[7] = (Z) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), gR = /* @__PURE__ */ Ie(pR, [["__scopeId", "data-v-13515b27"]]), hR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', yR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', wR = {
  comfy: hR,
  phosphor: yR
}, Ll = "comfy", Ic = "comfygit-theme";
let eo = null, Ec = Ll;
function _R() {
  try {
    const e = localStorage.getItem(Ic);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ll;
}
function Tc(e = Ll) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = wR[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), Ec = e;
  try {
    localStorage.setItem(Ic, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function kR() {
  return Ec;
}
function bR(e) {
  Tc(e);
}
function $R(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, n = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = n[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Pi = "ComfyGit.DevAutoReload", Mc = "ComfyGit.DevAutoReload.PanelOpen";
function CR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ua() {
  const e = CR();
  if (e !== null) {
    const t = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Pi, t ? "true" : "false");
    } catch {
    }
    return t;
  }
  try {
    return localStorage.getItem(Pi) === "true";
  } catch {
    return !1;
  }
}
function Pc(e) {
  if (ua())
    try {
      sessionStorage.setItem(Mc, e ? "true" : "false");
    } catch {
    }
}
function xR() {
  if (!ua()) return !1;
  try {
    return sessionStorage.getItem(Mc) === "true";
  } catch {
    return !1;
  }
}
async function Ri(e) {
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
async function SR(e) {
  if (!ua()) return;
  const t = e.map((n) => ({
    ...n,
    signature: null
  }));
  for (const n of t)
    try {
      n.signature = await Ri(n.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${n.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const n of t)
        try {
          const l = await Ri(n.url);
          if (n.signature && l && l !== n.signature) {
            o = !0, console.log(`[ComfyGit] ${n.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (n.signature = l);
        } catch {
        }
  }, 1e3);
}
const IR = "./comfygit-panel.css", ER = "./comfygit-panel.js", Rc = new URL(IR, import.meta.url).href, TR = new URL(ER, import.meta.url).href, Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.href = Rc;
document.head.appendChild(Dl);
const MR = _R();
Tc(MR);
ua() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), bR(e);
  },
  getTheme: () => {
    const e = kR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
window.ComfyGitDev = {
  ...window.ComfyGitDev ?? {},
  async exportCurrentApiPrompt() {
    const e = ys;
    if (typeof e.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return e.graphToPrompt(e.rootGraph);
  },
  async exportApiPromptForWorkflow(e) {
    const t = ys;
    if (typeof t.loadGraphData != "function")
      throw new Error("ComfyUI loadGraphData is not available");
    if (typeof t.graphToPrompt != "function")
      throw new Error("ComfyUI graphToPrompt is not available");
    return await t.loadGraphData(e, !0, !1, null, {
      deferWarnings: !0,
      skipAssetScans: !0,
      silentAssetErrors: !0
    }), await new Promise((o) => requestAnimationFrame(o)), t.graphToPrompt(t.rootGraph);
  }
};
let ks = null, sn = null, Xt = null, on = null, Vo = null, Li = null, Bo = null, Di = null, Wo = null, Ni = null;
const So = k(null);
let fn = "no_workspace", Lc = !1;
async function An() {
  const e = Lo();
  if (!e) return null;
  try {
    const t = await e.fetchApi("/v2/comfygit/status");
    t.ok && (So.value = await t.json());
  } catch {
  }
}
async function nl() {
  const e = Lo();
  if (e)
    try {
      const t = await e.fetchApi("/v2/setup/status");
      if (t.ok) {
        const o = await t.json();
        fn = o.state, Lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function al() {
  var t;
  if (fn === "managed" || !Lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((t = o.textContent) == null ? void 0 : t.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function PR() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Go(e) {
  qo(), Pc(!0), ks = document.createElement("div"), ks.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", ks.appendChild(t), ks.addEventListener("click", (n) => {
    n.target === ks && qo();
  });
  const o = (n) => {
    n.key === "Escape" && (qo(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), sn = yn({
    render: () => Ro($M, {
      initialView: e,
      onClose: qo,
      onStatusUpdate: async (n) => {
        So.value = n, nn(), await nl(), ll(), al();
      }
    })
  }), sn.mount(t), document.body.appendChild(ks);
}
function qo() {
  Pc(!1), sn && (sn.unmount(), sn = null), ks && (ks.remove(), ks = null);
}
function Oi(e) {
  jo(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (jo(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const n = (l) => {
    l.key === "Escape" && (jo(), document.removeEventListener("keydown", n));
  };
  document.addEventListener("keydown", n), on = yn({
    render: () => Ro($c, {
      status: So.value,
      onClose: jo,
      onCommitted: (l) => {
        jo(), RR(l.success, l.message), An().then(nn);
      }
    })
  }), on.mount(Xt), document.body.appendChild(Xt);
}
function jo() {
  on && (on.unmount(), on = null), Xt && (Xt.remove(), Xt = null);
}
function RR(e, t) {
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
function LR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-download-queue-root", Li = yn({
    render: () => Ro(hP)
  }), Li.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Model download queue mounted"));
}
function DR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-missing-resources-root", Di = yn({
    render: () => Ro(R7)
  }), Di.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function NR() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-io-mapping-root", Ni = yn({
    render: () => Ro(gR, {
      comfyApp: ys
    })
  }), Ni.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function nn() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = PR() ? "block" : "none");
}
function ll() {
  if (!Ht) return;
  const e = fn !== "managed";
  Ht.disabled = e, Ht.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const Dc = document.createElement("style");
Dc.textContent = `
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
document.head.appendChild(Dc);
ys.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => Go()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Ht && !Ht.disabled && Oi(Ht);
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
    if (fn === "managed")
      try {
        await Promise.all([
          ys.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingModelsWarning", !1),
          ys.ui.settings.setSettingValueAsync("Comfy.Workflow.ShowMissingNodesWarning", !1)
        ]);
      } catch (o) {
        console.warn("[ComfyGit] Failed to disable built-in warnings:", o);
      }
    window.__comfygit_pending_workflow = e;
  },
  async afterConfigureGraph(e) {
    if (fn !== "managed") return;
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Go(), Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Oi(Ht), e.appendChild(t), e.appendChild(Ht), (r = (l = ys.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (ys.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), LR(), DR(), NR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Go(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      qo();
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([An(), nl()]), nn(), ll(), al(), xR() && setTimeout(() => {
      ks || Go();
    }, 100), SR([
      { name: "panel script", url: TR },
      { name: "panel stylesheet", url: Rc }
    ]), setTimeout(al, 100), setInterval(async () => {
      await Promise.all([An(), nl()]), nn(), ll();
    }, 3e4);
    const n = Lo();
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
          g.remove(), Go("debug-env");
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
                ys.refreshComboInNodes && (await ys.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", x.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
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
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await An(), nn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      n.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), n.addEventListener("cm-task-completed", (p) => {
        const w = $R(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
