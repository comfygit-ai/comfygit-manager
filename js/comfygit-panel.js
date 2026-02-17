import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const vt = {}, $o = [], bs = () => {
}, pi = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), qa = (e) => e.startsWith("onUpdate:"), It = Object.assign, Ya = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, rc = Object.prototype.hasOwnProperty, dt = (e, s) => rc.call(e, s), Qe = Array.isArray, Co = (e) => fn(e) === "[object Map]", Mo = (e) => fn(e) === "[object Set]", yl = (e) => fn(e) === "[object Date]", st = (e) => typeof e == "function", Ct = (e) => typeof e == "string", us = (e) => typeof e == "symbol", mt = (e) => e !== null && typeof e == "object", gi = (e) => (mt(e) || st(e)) && st(e.then) && st(e.catch), hi = Object.prototype.toString, fn = (e) => hi.call(e), cc = (e) => fn(e).slice(8, -1), yi = (e) => fn(e) === "[object Object]", Qa = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ho = /* @__PURE__ */ Ka(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, uc = /-\w/g, os = Yn(
  (e) => e.replace(uc, (s) => s.slice(1).toUpperCase())
), dc = /\B([A-Z])/g, Ks = Yn(
  (e) => e.replace(dc, "-$1").toLowerCase()
), Qn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ma = Yn(
  (e) => e ? `on${Qn(e)}` : ""
), Gs = (e, s) => !Object.is(e, s), Tn = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, wi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Jn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, mc = (e) => {
  const s = Ct(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let wl;
const Xn = () => wl || (wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Qt(e) {
  if (Qe(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = Ct(a) ? gc(a) : Qt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if (Ct(e) || mt(e))
    return e;
}
const fc = /;(?![^(]*\))/g, vc = /:([^]+)/, pc = /\/\*[^]*?\*\//g;
function gc(e) {
  const s = {};
  return e.replace(pc, "").split(fc).forEach((o) => {
    if (o) {
      const a = o.split(vc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Re(e) {
  let s = "";
  if (Ct(e))
    s = e;
  else if (Qe(e))
    for (let o = 0; o < e.length; o++) {
      const a = Re(e[o]);
      a && (s += a + " ");
    }
  else if (mt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yc = /* @__PURE__ */ Ka(hc);
function _i(e) {
  return !!e || e === "";
}
function wc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = ao(e[a], s[a]);
  return o;
}
function ao(e, s) {
  if (e === s) return !0;
  let o = yl(e), a = yl(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = us(e), a = us(s), o || a)
    return e === s;
  if (o = Qe(e), a = Qe(s), o || a)
    return o && a ? wc(e, s) : !1;
  if (o = mt(e), a = mt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), m = s.hasOwnProperty(c);
      if (u && !m || !u && m || !ao(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function Ja(e, s) {
  return e.findIndex((o) => ao(o, s));
}
const ki = (e) => !!(e && e.__v_isRef === !0), d = (e) => Ct(e) ? e : e == null ? "" : Qe(e) || mt(e) && (e.toString === hi || !st(e.toString)) ? ki(e) ? d(e.value) : JSON.stringify(e, bi, 2) : String(e), bi = (e, s) => ki(s) ? bi(e, s.value) : Co(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[fa(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => fa(o))
} : us(s) ? fa(s) : mt(s) && !Qe(s) && !yi(s) ? String(s) : s, fa = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    us(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let jt;
class _c {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = jt, !s && jt && (this.index = (jt.scopes || (jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let s, o;
      if (this.scopes)
        for (s = 0, o = this.scopes.length; s < o; s++)
          this.scopes[s].pause();
      for (s = 0, o = this.effects.length; s < o; s++)
        this.effects[s].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let s, o;
      if (this.scopes)
        for (s = 0, o = this.scopes.length; s < o; s++)
          this.scopes[s].resume();
      for (s = 0, o = this.effects.length; s < o; s++)
        this.effects[s].resume();
    }
  }
  run(s) {
    if (this._active) {
      const o = jt;
      try {
        return jt = this, s();
      } finally {
        jt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = jt, jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (jt = this.prevScope, this.prevScope = void 0);
  }
  stop(s) {
    if (this._active) {
      this._active = !1;
      let o, a;
      for (o = 0, a = this.effects.length; o < a; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, a = this.cleanups.length; o < a; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, a = this.scopes.length; o < a; o++)
          this.scopes[o].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !s) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function kc() {
  return jt;
}
let ht;
const va = /* @__PURE__ */ new WeakSet();
class $i {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, jt && jt.active && jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, va.has(this) && (va.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _l(this), Si(this);
    const s = ht, o = cs;
    ht = this, cs = !0;
    try {
      return this.fn();
    } finally {
      Ii(this), ht = s, cs = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        el(s);
      this.deps = this.depsTail = void 0, _l(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? va.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pa(this) && this.run();
  }
  get dirty() {
    return Pa(this);
  }
}
let Ci = 0, Ko, qo;
function xi(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = qo, qo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function Xa() {
  Ci++;
}
function Za() {
  if (--Ci > 0)
    return;
  if (qo) {
    let s = qo;
    for (qo = void 0; s; ) {
      const o = s.next;
      s.next = void 0, s.flags &= -9, s = o;
    }
  }
  let e;
  for (; Ko; ) {
    let s = Ko;
    for (Ko = void 0; s; ) {
      const o = s.next;
      if (s.next = void 0, s.flags &= -9, s.flags & 1)
        try {
          s.trigger();
        } catch (a) {
          e || (e = a);
        }
      s = o;
    }
  }
  if (e) throw e;
}
function Si(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Ii(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), el(a), bc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Pa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Ei(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Ei(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === on) || (e.globalVersion = on, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = ht, a = cs;
  ht = e, cs = !0;
  try {
    Si(e);
    const l = e.fn(e._value);
    (s.version === 0 || Gs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    ht = o, cs = a, Ii(e), e.flags &= -3;
  }
}
function el(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      el(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function bc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let cs = !0;
const Ti = [];
function Rs() {
  Ti.push(cs), cs = !1;
}
function Ms() {
  const e = Ti.pop();
  cs = e === void 0 ? !0 : e;
}
function _l(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = ht;
    ht = void 0;
    try {
      s();
    } finally {
      ht = o;
    }
  }
}
let on = 0;
class $c {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!ht || !cs || ht === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ht)
      o = this.activeLink = new $c(ht, this), ht.deps ? (o.prevDep = ht.depsTail, ht.depsTail.nextDep = o, ht.depsTail = o) : ht.deps = ht.depsTail = o, Pi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = ht.depsTail, o.nextDep = void 0, ht.depsTail.nextDep = o, ht.depsTail = o, ht.deps === o && (ht.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, on++, this.notify(s);
  }
  notify(s) {
    Xa();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Za();
    }
  }
}
function Pi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        Pi(a);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ra = /* @__PURE__ */ new WeakMap(), oo = Symbol(
  ""
), Ma = Symbol(
  ""
), nn = Symbol(
  ""
);
function Lt(e, s, o) {
  if (cs && ht) {
    let a = Ra.get(e);
    a || Ra.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new tl()), l.map = a, l.key = o), l.track();
  }
}
function Es(e, s, o, a, l, r) {
  const c = Ra.get(e);
  if (!c) {
    on++;
    return;
  }
  const u = (m) => {
    m && m.trigger();
  };
  if (Xa(), s === "clear")
    c.forEach(u);
  else {
    const m = Qe(e), f = m && Qa(o);
    if (m && o === "length") {
      const v = Number(a);
      c.forEach((y, k) => {
        (k === "length" || k === nn || !us(k) && k >= v) && u(y);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), f && u(c.get(nn)), s) {
        case "add":
          m ? f && u(c.get("length")) : (u(c.get(oo)), Co(e) && u(c.get(Ma)));
          break;
        case "delete":
          m || (u(c.get(oo)), Co(e) && u(c.get(Ma)));
          break;
        case "set":
          Co(e) && u(c.get(oo));
          break;
      }
  }
  Za();
}
function ho(e) {
  const s = ct(e);
  return s === e ? s : (Lt(s, "iterate", nn), es(e) ? s : s.map(ds));
}
function Zn(e) {
  return Lt(e = ct(e), "iterate", nn), e;
}
function Vs(e, s) {
  return Ds(e) ? no(e) ? To(ds(s)) : To(s) : ds(s);
}
const Cc = {
  __proto__: null,
  [Symbol.iterator]() {
    return pa(this, Symbol.iterator, (e) => Vs(this, e));
  },
  concat(...e) {
    return ho(this).concat(
      ...e.map((s) => Qe(s) ? ho(s) : s)
    );
  },
  entries() {
    return pa(this, "entries", (e) => (e[1] = Vs(this, e[1]), e));
  },
  every(e, s) {
    return xs(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return xs(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Vs(this, a)),
      arguments
    );
  },
  find(e, s) {
    return xs(
      this,
      "find",
      e,
      s,
      (o) => Vs(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return xs(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return xs(
      this,
      "findLast",
      e,
      s,
      (o) => Vs(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return xs(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return xs(this, "forEach", e, s, void 0, arguments);
  },
  includes(...e) {
    return ga(this, "includes", e);
  },
  indexOf(...e) {
    return ga(this, "indexOf", e);
  },
  join(e) {
    return ho(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ga(this, "lastIndexOf", e);
  },
  map(e, s) {
    return xs(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Ao(this, "pop");
  },
  push(...e) {
    return Ao(this, "push", e);
  },
  reduce(e, ...s) {
    return kl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return kl(this, "reduceRight", e, s);
  },
  shift() {
    return Ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return xs(this, "some", e, s, void 0, arguments);
  },
  splice(...e) {
    return Ao(this, "splice", e);
  },
  toReversed() {
    return ho(this).toReversed();
  },
  toSorted(e) {
    return ho(this).toSorted(e);
  },
  toSpliced(...e) {
    return ho(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ao(this, "unshift", e);
  },
  values() {
    return pa(this, "values", (e) => Vs(this, e));
  }
};
function pa(e, s, o) {
  const a = Zn(e), l = a[s]();
  return a !== e && !es(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const xc = Array.prototype;
function xs(e, s, o, a, l, r) {
  const c = Zn(e), u = c !== e && !es(e), m = c[s];
  if (m !== xc[s]) {
    const y = m.apply(e, r);
    return u ? ds(y) : y;
  }
  let f = o;
  c !== e && (u ? f = function(y, k) {
    return o.call(this, Vs(e, y), k, e);
  } : o.length > 2 && (f = function(y, k) {
    return o.call(this, y, k, e);
  }));
  const v = m.call(c, f, a);
  return u && l ? l(v) : v;
}
function kl(e, s, o, a) {
  const l = Zn(e);
  let r = o;
  return l !== e && (es(e) ? o.length > 3 && (r = function(c, u, m) {
    return o.call(this, c, u, m, e);
  }) : r = function(c, u, m) {
    return o.call(this, c, Vs(e, u), m, e);
  }), l[s](r, ...a);
}
function ga(e, s, o) {
  const a = ct(e);
  Lt(a, "iterate", nn);
  const l = a[s](...o);
  return (l === -1 || l === !1) && nl(o[0]) ? (o[0] = ct(o[0]), a[s](...o)) : l;
}
function Ao(e, s, o = []) {
  Rs(), Xa();
  const a = ct(e)[s].apply(e, o);
  return Za(), Ms(), a;
}
const Sc = /* @__PURE__ */ Ka("__proto__,__v_isRef,__isVue"), Ri = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(us)
);
function Ic(e) {
  us(e) || (e = String(e));
  const s = ct(this);
  return Lt(s, "has", e), s.hasOwnProperty(e);
}
class Mi {
  constructor(s = !1, o = !1) {
    this._isReadonly = s, this._isShallow = o;
  }
  get(s, o, a) {
    if (o === "__v_skip") return s.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? Ac : Ui : r ? Ni : Li).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = Qe(s);
    if (!l) {
      let m;
      if (c && (m = Cc[o]))
        return m;
      if (o === "hasOwnProperty")
        return Ic;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      At(s) ? s : a
    );
    if ((us(o) ? Ri.has(o) : Sc(o)) || (l || Lt(s, "get", o), r))
      return u;
    if (At(u)) {
      const m = c && Qa(o) ? u : u.value;
      return l && mt(m) ? Un(m) : m;
    }
    return mt(u) ? l ? Un(u) : qs(u) : u;
  }
}
class Di extends Mi {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = Qe(s) && Qa(o);
    if (!this._isShallow) {
      const f = Ds(r);
      if (!es(a) && !Ds(a) && (r = ct(r), a = ct(a)), !c && At(r) && !At(a))
        return f || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : dt(s, o), m = Reflect.set(
      s,
      o,
      a,
      At(s) ? s : l
    );
    return s === ct(l) && (u ? Gs(a, r) && Es(s, "set", o, a) : Es(s, "add", o, a)), m;
  }
  deleteProperty(s, o) {
    const a = dt(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Es(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!us(o) || !Ri.has(o)) && Lt(s, "has", o), a;
  }
  ownKeys(s) {
    return Lt(
      s,
      "iterate",
      Qe(s) ? "length" : oo
    ), Reflect.ownKeys(s);
  }
}
class Ec extends Mi {
  constructor(s = !1) {
    super(!0, s);
  }
  set(s, o) {
    return !0;
  }
  deleteProperty(s, o) {
    return !0;
  }
}
const Tc = /* @__PURE__ */ new Di(), Pc = /* @__PURE__ */ new Ec(), Rc = /* @__PURE__ */ new Di(!0);
const Da = (e) => e, wn = (e) => Reflect.getPrototypeOf(e);
function Mc(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = ct(l), c = Co(r), u = e === "entries" || e === Symbol.iterator && c, m = e === "keys" && c, f = l[e](...a), v = o ? Da : s ? To : ds;
    return !s && Lt(
      r,
      "iterate",
      m ? Ma : oo
    ), {
      // iterator protocol
      next() {
        const { value: y, done: k } = f.next();
        return k ? { value: y, done: k } : {
          value: u ? [v(y[0]), v(y[1])] : v(y),
          done: k
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function _n(e) {
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Dc(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ct(r), u = ct(l);
      e || (Gs(l, u) && Lt(c, "get", l), Lt(c, "get", u));
      const { has: m } = wn(c), f = s ? Da : e ? To : ds;
      if (m.call(c, l))
        return f(r.get(l));
      if (m.call(c, u))
        return f(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Lt(ct(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ct(r), u = ct(l);
      return e || (Gs(l, u) && Lt(c, "has", l), Lt(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, m = ct(u), f = s ? Da : e ? To : ds;
      return !e && Lt(m, "iterate", oo), u.forEach((v, y) => l.call(r, f(v), f(y), c));
    }
  };
  return It(
    o,
    e ? {
      add: _n("add"),
      set: _n("set"),
      delete: _n("delete"),
      clear: _n("clear")
    } : {
      add(l) {
        !s && !es(l) && !Ds(l) && (l = ct(l));
        const r = ct(this);
        return wn(r).has.call(r, l) || (r.add(l), Es(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !es(r) && !Ds(r) && (r = ct(r));
        const c = ct(this), { has: u, get: m } = wn(c);
        let f = u.call(c, l);
        f || (l = ct(l), f = u.call(c, l));
        const v = m.call(c, l);
        return c.set(l, r), f ? Gs(r, v) && Es(c, "set", l, r) : Es(c, "add", l, r), this;
      },
      delete(l) {
        const r = ct(this), { has: c, get: u } = wn(r);
        let m = c.call(r, l);
        m || (l = ct(l), m = c.call(r, l)), u && u.call(r, l);
        const f = r.delete(l);
        return m && Es(r, "delete", l, void 0), f;
      },
      clear() {
        const l = ct(this), r = l.size !== 0, c = l.clear();
        return r && Es(
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
    o[l] = Mc(l, e, s);
  }), o;
}
function sl(e, s) {
  const o = Dc(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    dt(o, l) && l in a ? o : a,
    l,
    r
  );
}
const Lc = {
  get: /* @__PURE__ */ sl(!1, !1)
}, Nc = {
  get: /* @__PURE__ */ sl(!1, !0)
}, Uc = {
  get: /* @__PURE__ */ sl(!0, !1)
};
const Li = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Ui = /* @__PURE__ */ new WeakMap(), Ac = /* @__PURE__ */ new WeakMap();
function Oc(e) {
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
function zc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oc(cc(e));
}
function qs(e) {
  return Ds(e) ? e : ol(
    e,
    !1,
    Tc,
    Lc,
    Li
  );
}
function Fc(e) {
  return ol(
    e,
    !1,
    Rc,
    Nc,
    Ni
  );
}
function Un(e) {
  return ol(
    e,
    !0,
    Pc,
    Uc,
    Ui
  );
}
function ol(e, s, o, a, l) {
  if (!mt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = zc(e);
  if (r === 0)
    return e;
  const c = l.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    r === 2 ? a : o
  );
  return l.set(e, u), u;
}
function no(e) {
  return Ds(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ds(e) {
  return !!(e && e.__v_isReadonly);
}
function es(e) {
  return !!(e && e.__v_isShallow);
}
function nl(e) {
  return e ? !!e.__v_raw : !1;
}
function ct(e) {
  const s = e && e.__v_raw;
  return s ? ct(s) : e;
}
function Vc(e) {
  return !dt(e, "__v_skip") && Object.isExtensible(e) && wi(e, "__v_skip", !0), e;
}
const ds = (e) => mt(e) ? qs(e) : e, To = (e) => mt(e) ? Un(e) : e;
function At(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _(e) {
  return Bc(e, !1);
}
function Bc(e, s) {
  return At(e) ? e : new Wc(e, s);
}
class Wc {
  constructor(s, o) {
    this.dep = new tl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : ct(s), this._value = o ? s : ds(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || es(s) || Ds(s);
    s = a ? s : ct(s), Gs(s, o) && (this._rawValue = s, this._value = a ? s : ds(s), this.dep.trigger());
  }
}
function Xe(e) {
  return At(e) ? e.value : e;
}
const Gc = {
  get: (e, s, o) => s === "__v_raw" ? e : Xe(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return At(l) && !At(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function Ai(e) {
  return no(e) ? e : new Proxy(e, Gc);
}
class jc {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new tl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = on - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return xi(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Ei(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function Hc(e, s, o = !1) {
  let a, l;
  return st(e) ? a = e : (a = e.get, l = e.set), new jc(a, l, o);
}
const kn = {}, An = /* @__PURE__ */ new WeakMap();
let to;
function Kc(e, s = !1, o = to) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function qc(e, s, o = vt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: m } = o, f = (I) => l ? I : es(I) || l === !1 || l === 0 ? Ts(I, 1) : Ts(I);
  let v, y, k, p, w = !1, x = !1;
  if (At(e) ? (y = () => e.value, w = es(e)) : no(e) ? (y = () => f(e), w = !0) : Qe(e) ? (x = !0, w = e.some((I) => no(I) || es(I)), y = () => e.map((I) => {
    if (At(I))
      return I.value;
    if (no(I))
      return f(I);
    if (st(I))
      return m ? m(I, 2) : I();
  })) : st(e) ? s ? y = m ? () => m(e, 2) : e : y = () => {
    if (k) {
      Rs();
      try {
        k();
      } finally {
        Ms();
      }
    }
    const I = to;
    to = v;
    try {
      return m ? m(e, 3, [p]) : e(p);
    } finally {
      to = I;
    }
  } : y = bs, s && l) {
    const I = y, M = l === !0 ? 1 / 0 : l;
    y = () => Ts(I(), M);
  }
  const $ = kc(), C = () => {
    v.stop(), $ && $.active && Ya($.effects, v);
  };
  if (r && s) {
    const I = s;
    s = (...M) => {
      I(...M), C();
    };
  }
  let N = x ? new Array(e.length).fill(kn) : kn;
  const T = (I) => {
    if (!(!(v.flags & 1) || !v.dirty && !I))
      if (s) {
        const M = v.run();
        if (l || w || (x ? M.some((L, W) => Gs(L, N[W])) : Gs(M, N))) {
          k && k();
          const L = to;
          to = v;
          try {
            const W = [
              M,
              // pass undefined as the old value when it's changed for the first time
              N === kn ? void 0 : x && N[0] === kn ? [] : N,
              p
            ];
            N = M, m ? m(s, 3, W) : (
              // @ts-expect-error
              s(...W)
            );
          } finally {
            to = L;
          }
        }
      } else
        v.run();
  };
  return u && u(T), v = new $i(y), v.scheduler = c ? () => c(T, !1) : T, p = (I) => Kc(I, !1, v), k = v.onStop = () => {
    const I = An.get(v);
    if (I) {
      if (m)
        m(I, 4);
      else
        for (const M of I) M();
      An.delete(v);
    }
  }, s ? a ? T(!0) : N = v.run() : c ? c(T.bind(null, !0), !0) : v.run(), C.pause = v.pause.bind(v), C.resume = v.resume.bind(v), C.stop = C, C;
}
function Ts(e, s = 1 / 0, o) {
  if (s <= 0 || !mt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, At(e))
    Ts(e.value, s, o);
  else if (Qe(e))
    for (let a = 0; a < e.length; a++)
      Ts(e[a], s, o);
  else if (Mo(e) || Co(e))
    e.forEach((a) => {
      Ts(a, s, o);
    });
  else if (yi(e)) {
    for (const a in e)
      Ts(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Ts(e[a], s, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, s, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    ea(l, s, o);
  }
}
function ms(e, s, o, a) {
  if (st(e)) {
    const l = vn(e, s, o, a);
    return l && gi(l) && l.catch((r) => {
      ea(r, s, o);
    }), l;
  }
  if (Qe(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(ms(e[r], s, o, a));
    return l;
  }
}
function ea(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || vt;
  if (s) {
    let u = s.parent;
    const m = s.proxy, f = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; u; ) {
      const v = u.ec;
      if (v) {
        for (let y = 0; y < v.length; y++)
          if (v[y](e, m, f) === !1)
            return;
      }
      u = u.parent;
    }
    if (r) {
      Rs(), vn(r, null, 10, [
        e,
        m,
        f
      ]), Ms();
      return;
    }
  }
  Yc(e, o, l, a, c);
}
function Yc(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Bt = [];
let ws = -1;
const xo = [];
let Bs = null, _o = 0;
const Oi = /* @__PURE__ */ Promise.resolve();
let On = null;
function Et(e) {
  const s = On || Oi;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function Qc(e) {
  let s = ws + 1, o = Bt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Bt[a], r = an(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function al(e) {
  if (!(e.flags & 1)) {
    const s = an(e), o = Bt[Bt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= an(o) ? Bt.push(e) : Bt.splice(Qc(s), 0, e), e.flags |= 1, zi();
  }
}
function zi() {
  On || (On = Oi.then(Vi));
}
function Jc(e) {
  Qe(e) ? xo.push(...e) : Bs && e.id === -1 ? Bs.splice(_o + 1, 0, e) : e.flags & 1 || (xo.push(e), e.flags |= 1), zi();
}
function bl(e, s, o = ws + 1) {
  for (; o < Bt.length; o++) {
    const a = Bt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Bt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function Fi(e) {
  if (xo.length) {
    const s = [...new Set(xo)].sort(
      (o, a) => an(o) - an(a)
    );
    if (xo.length = 0, Bs) {
      Bs.push(...s);
      return;
    }
    for (Bs = s, _o = 0; _o < Bs.length; _o++) {
      const o = Bs[_o];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Bs = null, _o = 0;
  }
}
const an = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vi(e) {
  try {
    for (ws = 0; ws < Bt.length; ws++) {
      const s = Bt[ws];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), vn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ws < Bt.length; ws++) {
      const s = Bt[ws];
      s && (s.flags &= -2);
    }
    ws = -1, Bt.length = 0, Fi(), On = null, (Bt.length || xo.length) && Vi();
  }
}
let Rt = null, Bi = null;
function zn(e) {
  const s = Rt;
  return Rt = e, Bi = e && e.type.__scopeId || null, s;
}
function g(e, s = Rt, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Bn(-1);
    const r = zn(s);
    let c;
    try {
      c = e(...l);
    } finally {
      zn(r), a._d && Bn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function lt(e, s) {
  if (Rt === null)
    return e;
  const o = aa(Rt), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, m = vt] = s[l];
    r && (st(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ts(c), a.push({
      dir: r,
      instance: o,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: m
    }));
  }
  return e;
}
function Js(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let m = u.dir[a];
    m && (Rs(), ms(m, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Ms());
  }
}
const Wi = Symbol("_vte"), Gi = (e) => e.__isTeleport, Yo = (e) => e && (e.disabled || e.disabled === ""), $l = (e) => e && (e.defer || e.defer === ""), Cl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, La = (e, s) => {
  const o = e && e.to;
  return Ct(o) ? s ? s(o) : null : o;
}, ji = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, m, f) {
    const {
      mc: v,
      pc: y,
      pbc: k,
      o: { insert: p, querySelector: w, createText: x, createComment: $ }
    } = f, C = Yo(s.props);
    let { shapeFlag: N, children: T, dynamicChildren: I } = s;
    if (e == null) {
      const M = s.el = x(""), L = s.anchor = x("");
      p(M, o, a), p(L, o, a);
      const W = (R, te) => {
        N & 16 && v(
          T,
          R,
          te,
          l,
          r,
          c,
          u,
          m
        );
      }, E = () => {
        const R = s.target = La(s.props, w), te = Hi(R, s, x, p);
        R && (c !== "svg" && Cl(R) ? c = "svg" : c !== "mathml" && xl(R) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(R), C || (W(R, te), Pn(s, !1)));
      };
      C && (W(o, L), Pn(s, !0)), $l(s.props) ? (s.el.__isMounted = !1, Ft(() => {
        E(), delete s.el.__isMounted;
      }, r)) : E();
    } else {
      if ($l(s.props) && e.el.__isMounted === !1) {
        Ft(() => {
          ji.process(
            e,
            s,
            o,
            a,
            l,
            r,
            c,
            u,
            m,
            f
          );
        }, r);
        return;
      }
      s.el = e.el, s.targetStart = e.targetStart;
      const M = s.anchor = e.anchor, L = s.target = e.target, W = s.targetAnchor = e.targetAnchor, E = Yo(e.props), R = E ? o : L, te = E ? M : W;
      if (c === "svg" || Cl(L) ? c = "svg" : (c === "mathml" || xl(L)) && (c = "mathml"), I ? (k(
        e.dynamicChildren,
        I,
        R,
        l,
        r,
        c,
        u
      ), ul(e, s, !0)) : m || y(
        e,
        s,
        R,
        te,
        l,
        r,
        c,
        u,
        !1
      ), C)
        E ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : bn(
          s,
          o,
          M,
          f,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const se = s.target = La(
          s.props,
          w
        );
        se && bn(
          s,
          se,
          null,
          f,
          0
        );
      } else E && bn(
        s,
        L,
        W,
        f,
        1
      );
      Pn(s, C);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
    const {
      shapeFlag: c,
      children: u,
      anchor: m,
      targetStart: f,
      targetAnchor: v,
      target: y,
      props: k
    } = e;
    if (y && (l(f), l(v)), r && l(m), c & 16) {
      const p = r || !Yo(k);
      for (let w = 0; w < u.length; w++) {
        const x = u[w];
        a(
          x,
          s,
          o,
          p,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: bn,
  hydrate: Xc
};
function bn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: m, children: f, props: v } = e, y = r === 2;
  if (y && a(c, s, o), (!y || Yo(v)) && m & 16)
    for (let k = 0; k < f.length; k++)
      l(
        f[k],
        s,
        o,
        2
      );
  y && a(u, s, o);
}
function Xc(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: m, insert: f, createText: v }
}, y) {
  function k(x, $, C, N) {
    $.anchor = y(
      c(x),
      $,
      u(x),
      o,
      a,
      l,
      r
    ), $.targetStart = C, $.targetAnchor = N;
  }
  const p = s.target = La(
    s.props,
    m
  ), w = Yo(s.props);
  if (p) {
    const x = p._lpa || p.firstChild;
    if (s.shapeFlag & 16)
      if (w)
        k(
          e,
          s,
          x,
          x && c(x)
        );
      else {
        s.anchor = c(e);
        let $ = x;
        for (; $; ) {
          if ($ && $.nodeType === 8) {
            if ($.data === "teleport start anchor")
              s.targetStart = $;
            else if ($.data === "teleport anchor") {
              s.targetAnchor = $, p._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          $ = c($);
        }
        s.targetAnchor || Hi(p, s, v, f), y(
          x && c(x),
          s,
          p,
          o,
          a,
          l,
          r
        );
      }
    Pn(s, w);
  } else w && s.shapeFlag & 16 && k(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Mt = ji;
function Pn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function Hi(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[Wi] = r, e && (a(l, e), a(r, e)), r;
}
const Is = Symbol("_leaveCb"), $n = Symbol("_enterCb");
function Ki() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), tr(() => {
    e.isUnmounting = !0;
  }), e;
}
const Xt = [Function, Array], qi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Xt,
  onEnter: Xt,
  onAfterEnter: Xt,
  onEnterCancelled: Xt,
  // leave
  onBeforeLeave: Xt,
  onLeave: Xt,
  onAfterLeave: Xt,
  onLeaveCancelled: Xt,
  // appear
  onBeforeAppear: Xt,
  onAppear: Xt,
  onAfterAppear: Xt,
  onAppearCancelled: Xt
}, Yi = (e) => {
  const s = e.subTree;
  return s.component ? Yi(s.component) : s;
}, Zc = {
  name: "BaseTransition",
  props: qi,
  setup(e, { slots: s }) {
    const o = ml(), a = Ki();
    return () => {
      const l = s.default && ll(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = Qi(l), c = ct(e), { mode: u } = c;
      if (a.isLeaving)
        return ha(r);
      const m = Sl(r);
      if (!m)
        return ha(r);
      let f = ln(
        m,
        c,
        a,
        o,
        // #11061, ensure enterHooks is fresh after clone
        (y) => f = y
      );
      m.type !== Nt && lo(m, f);
      let v = o.subTree && Sl(o.subTree);
      if (v && v.type !== Nt && !so(v, m) && Yi(o).type !== Nt) {
        let y = ln(
          v,
          c,
          a,
          o
        );
        if (lo(v, y), u === "out-in" && m.type !== Nt)
          return a.isLeaving = !0, y.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete y.afterLeave, v = void 0;
          }, ha(r);
        u === "in-out" && m.type !== Nt ? y.delayLeave = (k, p, w) => {
          const x = Ji(
            a,
            v
          );
          x[String(v.key)] = v, k[Is] = () => {
            p(), k[Is] = void 0, delete f.delayedLeave, v = void 0;
          }, f.delayedLeave = () => {
            w(), delete f.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function Qi(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Nt) {
        s = o;
        break;
      }
  }
  return s;
}
const eu = Zc;
function Ji(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function ln(e, s, o, a, l) {
  const {
    appear: r,
    mode: c,
    persisted: u = !1,
    onBeforeEnter: m,
    onEnter: f,
    onAfterEnter: v,
    onEnterCancelled: y,
    onBeforeLeave: k,
    onLeave: p,
    onAfterLeave: w,
    onLeaveCancelled: x,
    onBeforeAppear: $,
    onAppear: C,
    onAfterAppear: N,
    onAppearCancelled: T
  } = s, I = String(e.key), M = Ji(o, e), L = (R, te) => {
    R && ms(
      R,
      a,
      9,
      te
    );
  }, W = (R, te) => {
    const se = te[1];
    L(R, te), Qe(R) ? R.every((oe) => oe.length <= 1) && se() : R.length <= 1 && se();
  }, E = {
    mode: c,
    persisted: u,
    beforeEnter(R) {
      let te = m;
      if (!o.isMounted)
        if (r)
          te = $ || m;
        else
          return;
      R[Is] && R[Is](
        !0
        /* cancelled */
      );
      const se = M[I];
      se && so(e, se) && se.el[Is] && se.el[Is](), L(te, [R]);
    },
    enter(R) {
      let te = f, se = v, oe = y;
      if (!o.isMounted)
        if (r)
          te = C || f, se = N || v, oe = T || y;
        else
          return;
      let X = !1;
      const V = R[$n] = (Q) => {
        X || (X = !0, Q ? L(oe, [R]) : L(se, [R]), E.delayedLeave && E.delayedLeave(), R[$n] = void 0);
      };
      te ? W(te, [R, V]) : V();
    },
    leave(R, te) {
      const se = String(e.key);
      if (R[$n] && R[$n](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return te();
      L(k, [R]);
      let oe = !1;
      const X = R[Is] = (V) => {
        oe || (oe = !0, te(), V ? L(x, [R]) : L(w, [R]), R[Is] = void 0, M[se] === e && delete M[se]);
      };
      M[se] = e, p ? W(p, [R, X]) : X();
    },
    clone(R) {
      const te = ln(
        R,
        s,
        o,
        a,
        l
      );
      return l && l(te), te;
    }
  };
  return E;
}
function ha(e) {
  if (ta(e))
    return e = js(e), e.children = null, e;
}
function Sl(e) {
  if (!ta(e))
    return Gi(e.type) && e.children ? Qi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && st(o.default))
      return o.default();
  }
}
function lo(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, lo(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function ll(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      ll(c.children, s, u)
    )) : (s || c.type !== Nt) && a.push(u != null ? js(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function ye(e, s) {
  return st(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    It({ name: e.name }, s, { setup: e })
  ) : e;
}
function Xi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Fn = /* @__PURE__ */ new WeakMap();
function Qo(e, s, o, a, l = !1) {
  if (Qe(e)) {
    e.forEach(
      (w, x) => Qo(
        w,
        s && (Qe(s) ? s[x] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (So(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Qo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? aa(a.component) : a.el, c = l ? null : r, { i: u, r: m } = e, f = s && s.r, v = u.refs === vt ? u.refs = {} : u.refs, y = u.setupState, k = ct(y), p = y === vt ? pi : (w) => dt(k, w);
  if (f != null && f !== m) {
    if (Il(s), Ct(f))
      v[f] = null, p(f) && (y[f] = null);
    else if (At(f)) {
      f.value = null;
      const w = s;
      w.k && (v[w.k] = null);
    }
  }
  if (st(m))
    vn(m, u, 12, [c, v]);
  else {
    const w = Ct(m), x = At(m);
    if (w || x) {
      const $ = () => {
        if (e.f) {
          const C = w ? p(m) ? y[m] : v[m] : m.value;
          if (l)
            Qe(C) && Ya(C, r);
          else if (Qe(C))
            C.includes(r) || C.push(r);
          else if (w)
            v[m] = [r], p(m) && (y[m] = v[m]);
          else {
            const N = [r];
            m.value = N, e.k && (v[e.k] = N);
          }
        } else w ? (v[m] = c, p(m) && (y[m] = c)) : x && (m.value = c, e.k && (v[e.k] = c));
      };
      if (c) {
        const C = () => {
          $(), Fn.delete(e);
        };
        C.id = -1, Fn.set(e, C), Ft(C, o);
      } else
        Il(e), $();
    }
  }
}
function Il(e) {
  const s = Fn.get(e);
  s && (s.flags |= 8, Fn.delete(e));
}
Xn().requestIdleCallback;
Xn().cancelIdleCallback;
const So = (e) => !!e.type.__asyncLoader, ta = (e) => e.type.__isKeepAlive;
function tu(e, s) {
  Zi(e, "a", s);
}
function su(e, s) {
  Zi(e, "da", s);
}
function Zi(e, s, o = Ut) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (sa(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      ta(l.parent.vnode) && ou(a, s, o, l), l = l.parent;
  }
}
function ou(e, s, o, a) {
  const l = sa(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Ys(() => {
    Ya(a[s], l);
  }, o);
}
function sa(e, s, o = Ut, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Rs();
      const u = pn(o), m = ms(s, o, e, c);
      return u(), Ms(), m;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Ls = (e) => (s, o = Ut) => {
  (!un || e === "sp") && sa(e, (...a) => s(...a), o);
}, nu = Ls("bm"), rt = Ls("m"), au = Ls(
  "bu"
), er = Ls("u"), tr = Ls(
  "bum"
), Ys = Ls("um"), lu = Ls(
  "sp"
), iu = Ls("rtg"), ru = Ls("rtc");
function cu(e, s = Ut) {
  sa("ec", e, s);
}
const uu = "components", sr = Symbol.for("v-ndc");
function il(e) {
  return Ct(e) ? du(uu, e, !1) || e : e || sr;
}
function du(e, s, o = !0, a = !1) {
  const l = Rt || Ut;
  if (l) {
    const r = l.type;
    {
      const u = Zu(
        r,
        !1
      );
      if (u && (u === s || u === os(s) || u === Qn(os(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      El(l[e] || r[e], s) || // global registration
      El(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function El(e, s) {
  return e && (e[s] || e[os(s)] || e[Qn(os(s))]);
}
function he(e, s, o, a) {
  let l;
  const r = o, c = Qe(e);
  if (c || Ct(e)) {
    const u = c && no(e);
    let m = !1, f = !1;
    u && (m = !es(e), f = Ds(e), e = Zn(e)), l = new Array(e.length);
    for (let v = 0, y = e.length; v < y; v++)
      l[v] = s(
        m ? f ? To(ds(e[v])) : ds(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (mt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, m) => s(u, m, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let m = 0, f = u.length; m < f; m++) {
        const v = u[m];
        l[m] = s(e[v], v, m, r);
      }
    }
  else
    l = [];
  return l;
}
function io(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Qe(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function at(e, s, o = {}, a, l) {
  if (Rt.ce || Rt.parent && So(Rt.parent) && Rt.parent.ce) {
    const f = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), P(
      B,
      null,
      [S("slot", o, a && a())],
      f ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && or(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, m = P(
    B,
    {
      key: (u && !us(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), m;
}
function or(e) {
  return e.some((s) => cn(s) ? !(s.type === Nt || s.type === B && !or(s.children)) : !0) ? e : null;
}
const Na = (e) => e ? br(e) ? aa(e) : Na(e.parent) : null, Jo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ It(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Na(e.parent),
    $root: (e) => Na(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ar(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      al(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Et.bind(e.proxy)),
    $watch: (e) => $u.bind(e)
  })
), ya = (e, s) => e !== vt && !e.__isScriptSetup && dt(e, s), mu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: m } = e;
    if (s[0] !== "$") {
      const k = c[s];
      if (k !== void 0)
        switch (k) {
          case 1:
            return a[s];
          case 2:
            return l[s];
          case 4:
            return o[s];
          case 3:
            return r[s];
        }
      else {
        if (ya(a, s))
          return c[s] = 1, a[s];
        if (l !== vt && dt(l, s))
          return c[s] = 2, l[s];
        if (dt(r, s))
          return c[s] = 3, r[s];
        if (o !== vt && dt(o, s))
          return c[s] = 4, o[s];
        Ua && (c[s] = 0);
      }
    }
    const f = Jo[s];
    let v, y;
    if (f)
      return s === "$attrs" && Lt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (v = u.__cssModules) && (v = v[s])
    )
      return v;
    if (o !== vt && dt(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      y = m.config.globalProperties, dt(y, s)
    )
      return y[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return ya(l, s) ? (l[s] = o, !0) : a !== vt && dt(a, s) ? (a[s] = o, !0) : dt(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let m;
    return !!(o[u] || e !== vt && u[0] !== "$" && dt(e, u) || ya(s, u) || dt(r, u) || dt(a, u) || dt(Jo, u) || dt(l.config.globalProperties, u) || (m = c.__cssModules) && m[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : dt(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Tl(e) {
  return Qe(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Ua = !0;
function fu(e) {
  const s = ar(e), o = e.proxy, a = e.ctx;
  Ua = !1, s.beforeCreate && Pl(s.beforeCreate, e, "bc");
  const {
    // state
    data: l,
    computed: r,
    methods: c,
    watch: u,
    provide: m,
    inject: f,
    // lifecycle
    created: v,
    beforeMount: y,
    mounted: k,
    beforeUpdate: p,
    updated: w,
    activated: x,
    deactivated: $,
    beforeDestroy: C,
    beforeUnmount: N,
    destroyed: T,
    unmounted: I,
    render: M,
    renderTracked: L,
    renderTriggered: W,
    errorCaptured: E,
    serverPrefetch: R,
    // public API
    expose: te,
    inheritAttrs: se,
    // assets
    components: oe,
    directives: X,
    filters: V
  } = s;
  if (f && vu(f, a, null), c)
    for (const re in c) {
      const F = c[re];
      st(F) && (a[re] = F.bind(o));
    }
  if (l) {
    const re = l.call(o, o);
    mt(re) && (e.data = qs(re));
  }
  if (Ua = !0, r)
    for (const re in r) {
      const F = r[re], ee = st(F) ? F.bind(o, o) : st(F.get) ? F.get.bind(o, o) : bs, le = !st(F) && st(F.set) ? F.set.bind(o) : bs, Ae = D({
        get: ee,
        set: le
      });
      Object.defineProperty(a, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (qe) => Ae.value = qe
      });
    }
  if (u)
    for (const re in u)
      nr(u[re], a, o, re);
  if (m) {
    const re = st(m) ? m.call(o) : m;
    Reflect.ownKeys(re).forEach((F) => {
      _u(F, re[F]);
    });
  }
  v && Pl(v, e, "c");
  function ne(re, F) {
    Qe(F) ? F.forEach((ee) => re(ee.bind(o))) : F && re(F.bind(o));
  }
  if (ne(nu, y), ne(rt, k), ne(au, p), ne(er, w), ne(tu, x), ne(su, $), ne(cu, E), ne(ru, L), ne(iu, W), ne(tr, N), ne(Ys, I), ne(lu, R), Qe(te))
    if (te.length) {
      const re = e.exposed || (e.exposed = {});
      te.forEach((F) => {
        Object.defineProperty(re, F, {
          get: () => o[F],
          set: (ee) => o[F] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  M && e.render === bs && (e.render = M), se != null && (e.inheritAttrs = se), oe && (e.components = oe), X && (e.directives = X), R && Xi(e);
}
function vu(e, s, o = bs) {
  Qe(e) && (e = Aa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    mt(l) ? "default" in l ? r = Rn(
      l.from || a,
      l.default,
      !0
    ) : r = Rn(l.from || a) : r = Rn(l), At(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Pl(e, s, o) {
  ms(
    Qe(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function nr(e, s, o, a) {
  let l = a.includes(".") ? rr(o, a) : () => o[a];
  if (Ct(e)) {
    const r = s[e];
    st(r) && $t(l, r);
  } else if (st(e))
    $t(l, e.bind(o));
  else if (mt(e))
    if (Qe(e))
      e.forEach((r) => nr(r, s, o, a));
    else {
      const r = st(e.handler) ? e.handler.bind(o) : s[e.handler];
      st(r) && $t(l, r, e);
    }
}
function ar(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let m;
  return u ? m = u : !l.length && !o && !a ? m = s : (m = {}, l.length && l.forEach(
    (f) => Vn(m, f, c, !0)
  ), Vn(m, s, c)), mt(s) && r.set(s, m), m;
}
function Vn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Vn(e, r, o, !0), l && l.forEach(
    (c) => Vn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = pu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const pu = {
  data: Rl,
  props: Ml,
  emits: Ml,
  // objects
  methods: jo,
  computed: jo,
  // lifecycle
  beforeCreate: zt,
  created: zt,
  beforeMount: zt,
  mounted: zt,
  beforeUpdate: zt,
  updated: zt,
  beforeDestroy: zt,
  beforeUnmount: zt,
  destroyed: zt,
  unmounted: zt,
  activated: zt,
  deactivated: zt,
  errorCaptured: zt,
  serverPrefetch: zt,
  // assets
  components: jo,
  directives: jo,
  // watch
  watch: hu,
  // provide / inject
  provide: Rl,
  inject: gu
};
function Rl(e, s) {
  return s ? e ? function() {
    return It(
      st(e) ? e.call(this, this) : e,
      st(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function gu(e, s) {
  return jo(Aa(e), Aa(s));
}
function Aa(e) {
  if (Qe(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function zt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function jo(e, s) {
  return e ? It(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Ml(e, s) {
  return e ? Qe(e) && Qe(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : It(
    /* @__PURE__ */ Object.create(null),
    Tl(e),
    Tl(s ?? {})
  ) : s;
}
function hu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = It(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = zt(e[a], s[a]);
  return o;
}
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: pi,
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
let yu = 0;
function wu(e, s) {
  return function(a, l = null) {
    st(a) || (a = It({}, a)), l != null && !mt(l) && (l = null);
    const r = lr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let m = !1;
    const f = r.app = {
      _uid: yu++,
      _component: a,
      _props: l,
      _container: null,
      _context: r,
      _instance: null,
      version: td,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...y) {
        return c.has(v) || (v && st(v.install) ? (c.add(v), v.install(f, ...y)) : st(v) && (c.add(v), v(f, ...y))), f;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), f;
      },
      component(v, y) {
        return y ? (r.components[v] = y, f) : r.components[v];
      },
      directive(v, y) {
        return y ? (r.directives[v] = y, f) : r.directives[v];
      },
      mount(v, y, k) {
        if (!m) {
          const p = f._ceVNode || S(a, l);
          return p.appContext = r, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(p, v, k), m = !0, f._container = v, v.__vue_app__ = f, aa(p.component);
        }
      },
      onUnmount(v) {
        u.push(v);
      },
      unmount() {
        m && (ms(
          u,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(v, y) {
        return r.provides[v] = y, f;
      },
      runWithContext(v) {
        const y = Io;
        Io = f;
        try {
          return v();
        } finally {
          Io = y;
        }
      }
    };
    return f;
  };
}
let Io = null;
function _u(e, s) {
  if (Ut) {
    let o = Ut.provides;
    const a = Ut.parent && Ut.parent.provides;
    a === o && (o = Ut.provides = Object.create(a)), o[e] = s;
  }
}
function Rn(e, s, o = !1) {
  const a = ml();
  if (a || Io) {
    let l = Io ? Io._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && st(s) ? s.call(a && a.proxy) : s;
  }
}
const ku = Symbol.for("v-scx"), bu = () => Rn(ku);
function $t(e, s, o) {
  return ir(e, s, o);
}
function ir(e, s, o = vt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = It({}, o), m = s && a || !s && r !== "post";
  let f;
  if (un) {
    if (r === "sync") {
      const p = bu();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!m) {
      const p = () => {
      };
      return p.stop = bs, p.resume = bs, p.pause = bs, p;
    }
  }
  const v = Ut;
  u.call = (p, w, x) => ms(p, v, w, x);
  let y = !1;
  r === "post" ? u.scheduler = (p) => {
    Ft(p, v && v.suspense);
  } : r !== "sync" && (y = !0, u.scheduler = (p, w) => {
    w ? p() : al(p);
  }), u.augmentJob = (p) => {
    s && (p.flags |= 4), y && (p.flags |= 2, v && (p.id = v.uid, p.i = v));
  };
  const k = qc(e, s, u);
  return un && (f ? f.push(k) : m && k()), k;
}
function $u(e, s, o) {
  const a = this.proxy, l = Ct(e) ? e.includes(".") ? rr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  st(s) ? r = s : (r = s.handler, o = s);
  const c = pn(this), u = ir(l, r.bind(a), o);
  return c(), u;
}
function rr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Cu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${os(s)}Modifiers`] || e[`${Ks(s)}Modifiers`];
function xu(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || vt;
  let l = o;
  const r = s.startsWith("update:"), c = r && Cu(a, s.slice(7));
  c && (c.trim && (l = o.map((v) => Ct(v) ? v.trim() : v)), c.number && (l = o.map(Jn)));
  let u, m = a[u = ma(s)] || // also try camelCase event handler (#2249)
  a[u = ma(os(s))];
  !m && r && (m = a[u = ma(Ks(s))]), m && ms(
    m,
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
    e.emitted[u] = !0, ms(
      f,
      e,
      6,
      l
    );
  }
}
const Su = /* @__PURE__ */ new WeakMap();
function cr(e, s, o = !1) {
  const a = o ? Su : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!st(e)) {
    const m = (f) => {
      const v = cr(f, s, !0);
      v && (u = !0, It(c, v));
    };
    !o && s.mixins.length && s.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !r && !u ? (mt(e) && a.set(e, null), null) : (Qe(r) ? r.forEach((m) => c[m] = null) : It(c, r), mt(e) && a.set(e, c), c);
}
function oa(e, s) {
  return !e || !qn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), dt(e, s[0].toLowerCase() + s.slice(1)) || dt(e, Ks(s)) || dt(e, s));
}
function Dl(e) {
  const {
    type: s,
    vnode: o,
    proxy: a,
    withProxy: l,
    propsOptions: [r],
    slots: c,
    attrs: u,
    emit: m,
    render: f,
    renderCache: v,
    props: y,
    data: k,
    setupState: p,
    ctx: w,
    inheritAttrs: x
  } = e, $ = zn(e);
  let C, N;
  try {
    if (o.shapeFlag & 4) {
      const I = l || a, M = I;
      C = ks(
        f.call(
          M,
          I,
          v,
          y,
          p,
          k,
          w
        )
      ), N = u;
    } else {
      const I = s;
      C = ks(
        I.length > 1 ? I(
          y,
          { attrs: u, slots: c, emit: m }
        ) : I(
          y,
          null
        )
      ), N = s.props ? u : Iu(u);
    }
  } catch (I) {
    Xo.length = 0, ea(I, e, 1), C = S(Nt);
  }
  let T = C;
  if (N && x !== !1) {
    const I = Object.keys(N), { shapeFlag: M } = T;
    I.length && M & 7 && (r && I.some(qa) && (N = Eu(
      N,
      r
    )), T = js(T, N, !1, !0));
  }
  return o.dirs && (T = js(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(o.dirs) : o.dirs), o.transition && lo(T, o.transition), C = T, zn($), C;
}
const Iu = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || qn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, Eu = (e, s) => {
  const o = {};
  for (const a in e)
    (!qa(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function Tu(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: m } = s, f = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return a ? Ll(a, c, f) : !!c;
    if (m & 8) {
      const v = s.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const k = v[y];
        if (c[k] !== a[k] && !oa(f, k))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Ll(a, c, f) : !0 : !!c;
  return !1;
}
function Ll(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !oa(o, r))
      return !0;
  }
  return !1;
}
function Pu({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const ur = {}, dr = () => Object.create(ur), mr = (e) => Object.getPrototypeOf(e) === ur;
function Ru(e, s, o, a = !1) {
  const l = {}, r = dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fr(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : Fc(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function Mu(e, s, o, a) {
  const {
    props: l,
    attrs: r,
    vnode: { patchFlag: c }
  } = e, u = ct(l), [m] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (a || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const v = e.vnode.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        let k = v[y];
        if (oa(e.emitsOptions, k))
          continue;
        const p = s[k];
        if (m)
          if (dt(r, k))
            p !== r[k] && (r[k] = p, f = !0);
          else {
            const w = os(k);
            l[w] = Oa(
              m,
              u,
              w,
              p,
              e,
              !1
            );
          }
        else
          p !== r[k] && (r[k] = p, f = !0);
      }
    }
  } else {
    fr(e, s, l, r) && (f = !0);
    let v;
    for (const y in u)
      (!s || // for camelCase
      !dt(s, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Ks(y)) === y || !dt(s, v))) && (m ? o && // for camelCase
      (o[y] !== void 0 || // for kebab-case
      o[v] !== void 0) && (l[y] = Oa(
        m,
        u,
        y,
        void 0,
        e,
        !0
      )) : delete l[y]);
    if (r !== u)
      for (const y in r)
        (!s || !dt(s, y)) && (delete r[y], f = !0);
  }
  f && Es(e.attrs, "set", "");
}
function fr(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let m in s) {
      if (Ho(m))
        continue;
      const f = s[m];
      let v;
      l && dt(l, v = os(m)) ? !r || !r.includes(v) ? o[v] = f : (u || (u = {}))[v] = f : oa(e.emitsOptions, m) || (!(m in a) || f !== a[m]) && (a[m] = f, c = !0);
    }
  if (r) {
    const m = ct(o), f = u || vt;
    for (let v = 0; v < r.length; v++) {
      const y = r[v];
      o[y] = Oa(
        l,
        m,
        y,
        f[y],
        e,
        !dt(f, y)
      );
    }
  }
  return c;
}
function Oa(e, s, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = dt(c, "default");
    if (u && a === void 0) {
      const m = c.default;
      if (c.type !== Function && !c.skipFactory && st(m)) {
        const { propsDefaults: f } = l;
        if (o in f)
          a = f[o];
        else {
          const v = pn(l);
          a = f[o] = m.call(
            null,
            s
          ), v();
        }
      } else
        a = m;
      l.ce && l.ce._setProp(o, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Ks(o)) && (a = !0));
  }
  return a;
}
const Du = /* @__PURE__ */ new WeakMap();
function vr(e, s, o = !1) {
  const a = o ? Du : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let m = !1;
  if (!st(e)) {
    const v = (y) => {
      m = !0;
      const [k, p] = vr(y, s, !0);
      It(c, k), p && u.push(...p);
    };
    !o && s.mixins.length && s.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !m)
    return mt(e) && a.set(e, $o), $o;
  if (Qe(r))
    for (let v = 0; v < r.length; v++) {
      const y = os(r[v]);
      Nl(y) && (c[y] = vt);
    }
  else if (r)
    for (const v in r) {
      const y = os(v);
      if (Nl(y)) {
        const k = r[v], p = c[y] = Qe(k) || st(k) ? { type: k } : It({}, k), w = p.type;
        let x = !1, $ = !0;
        if (Qe(w))
          for (let C = 0; C < w.length; ++C) {
            const N = w[C], T = st(N) && N.name;
            if (T === "Boolean") {
              x = !0;
              break;
            } else T === "String" && ($ = !1);
          }
        else
          x = st(w) && w.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = x, p[
          1
          /* shouldCastTrue */
        ] = $, (x || dt(p, "default")) && u.push(y);
      }
    }
  const f = [c, u];
  return mt(e) && a.set(e, f), f;
}
function Nl(e) {
  return e[0] !== "$" && !Ho(e);
}
const rl = (e) => e === "_" || e === "_ctx" || e === "$stable", cl = (e) => Qe(e) ? e.map(ks) : [ks(e)], Lu = (e, s, o) => {
  if (s._n)
    return s;
  const a = g((...l) => cl(s(...l)), o);
  return a._c = !1, a;
}, pr = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (rl(l)) continue;
    const r = e[l];
    if (st(r))
      s[l] = Lu(l, r, a);
    else if (r != null) {
      const c = cl(r);
      s[l] = () => c;
    }
  }
}, gr = (e, s) => {
  const o = cl(s);
  e.slots.default = () => o;
}, hr = (e, s, o) => {
  for (const a in s)
    (o || !rl(a)) && (e[a] = s[a]);
}, Nu = (e, s, o) => {
  const a = e.slots = dr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (hr(a, s, o), o && wi(a, "_", l, !0)) : pr(s, a);
  } else s && gr(e, s);
}, Uu = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = vt;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : hr(l, s, o) : (r = !s.$stable, pr(s, l)), c = s;
  } else s && (gr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !rl(u) && c[u] == null && delete l[u];
}, Ft = Vu;
function Au(e) {
  return Ou(e);
}
function Ou(e, s) {
  const o = Xn();
  o.__VUE__ = !0;
  const {
    insert: a,
    remove: l,
    patchProp: r,
    createElement: c,
    createText: u,
    createComment: m,
    setText: f,
    setElementText: v,
    parentNode: y,
    nextSibling: k,
    setScopeId: p = bs,
    insertStaticContent: w
  } = e, x = (U, H, ce, Ee = null, ke = null, be = null, De = void 0, we = null, Pe = !!H.dynamicChildren) => {
    if (U === H)
      return;
    U && !so(U, H) && (Ee = z(U), qe(U, ke, be, !0), U = null), H.patchFlag === -2 && (Pe = !1, H.dynamicChildren = null);
    const { type: fe, ref: Be, shapeFlag: Ue } = H;
    switch (fe) {
      case na:
        $(U, H, ce, Ee);
        break;
      case Nt:
        C(U, H, ce, Ee);
        break;
      case _a:
        U == null && N(H, ce, Ee, De);
        break;
      case B:
        oe(
          U,
          H,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe
        );
        break;
      default:
        Ue & 1 ? M(
          U,
          H,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe
        ) : Ue & 6 ? X(
          U,
          H,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe
        ) : (Ue & 64 || Ue & 128) && fe.process(
          U,
          H,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe,
          Te
        );
    }
    Be != null && ke ? Qo(Be, U && U.ref, be, H || U, !H) : Be == null && U && U.ref != null && Qo(U.ref, null, be, U, !0);
  }, $ = (U, H, ce, Ee) => {
    if (U == null)
      a(
        H.el = u(H.children),
        ce,
        Ee
      );
    else {
      const ke = H.el = U.el;
      H.children !== U.children && f(ke, H.children);
    }
  }, C = (U, H, ce, Ee) => {
    U == null ? a(
      H.el = m(H.children || ""),
      ce,
      Ee
    ) : H.el = U.el;
  }, N = (U, H, ce, Ee) => {
    [U.el, U.anchor] = w(
      U.children,
      H,
      ce,
      Ee,
      U.el,
      U.anchor
    );
  }, T = ({ el: U, anchor: H }, ce, Ee) => {
    let ke;
    for (; U && U !== H; )
      ke = k(U), a(U, ce, Ee), U = ke;
    a(H, ce, Ee);
  }, I = ({ el: U, anchor: H }) => {
    let ce;
    for (; U && U !== H; )
      ce = k(U), l(U), U = ce;
    l(H);
  }, M = (U, H, ce, Ee, ke, be, De, we, Pe) => {
    if (H.type === "svg" ? De = "svg" : H.type === "math" && (De = "mathml"), U == null)
      L(
        H,
        ce,
        Ee,
        ke,
        be,
        De,
        we,
        Pe
      );
    else {
      const fe = U.el && U.el._isVueCE ? U.el : null;
      try {
        fe && fe._beginPatch(), R(
          U,
          H,
          ke,
          be,
          De,
          we,
          Pe
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, L = (U, H, ce, Ee, ke, be, De, we) => {
    let Pe, fe;
    const { props: Be, shapeFlag: Ue, transition: ve, dirs: j } = U;
    if (Pe = U.el = c(
      U.type,
      be,
      Be && Be.is,
      Be
    ), Ue & 8 ? v(Pe, U.children) : Ue & 16 && E(
      U.children,
      Pe,
      null,
      Ee,
      ke,
      wa(U, be),
      De,
      we
    ), j && Js(U, null, Ee, "created"), W(Pe, U, U.scopeId, De, Ee), Be) {
      for (const Ie in Be)
        Ie !== "value" && !Ho(Ie) && r(Pe, Ie, null, Be[Ie], be, Ee);
      "value" in Be && r(Pe, "value", null, Be.value, be), (fe = Be.onVnodeBeforeMount) && gs(fe, Ee, U);
    }
    j && Js(U, null, Ee, "beforeMount");
    const Oe = zu(ke, ve);
    Oe && ve.beforeEnter(Pe), a(Pe, H, ce), ((fe = Be && Be.onVnodeMounted) || Oe || j) && Ft(() => {
      fe && gs(fe, Ee, U), Oe && ve.enter(Pe), j && Js(U, null, Ee, "mounted");
    }, ke);
  }, W = (U, H, ce, Ee, ke) => {
    if (ce && p(U, ce), Ee)
      for (let be = 0; be < Ee.length; be++)
        p(U, Ee[be]);
    if (ke) {
      let be = ke.subTree;
      if (H === be || wr(be.type) && (be.ssContent === H || be.ssFallback === H)) {
        const De = ke.vnode;
        W(
          U,
          De,
          De.scopeId,
          De.slotScopeIds,
          ke.parent
        );
      }
    }
  }, E = (U, H, ce, Ee, ke, be, De, we, Pe = 0) => {
    for (let fe = Pe; fe < U.length; fe++) {
      const Be = U[fe] = we ? Ws(U[fe]) : ks(U[fe]);
      x(
        null,
        Be,
        H,
        ce,
        Ee,
        ke,
        be,
        De,
        we
      );
    }
  }, R = (U, H, ce, Ee, ke, be, De) => {
    const we = H.el = U.el;
    let { patchFlag: Pe, dynamicChildren: fe, dirs: Be } = H;
    Pe |= U.patchFlag & 16;
    const Ue = U.props || vt, ve = H.props || vt;
    let j;
    if (ce && Xs(ce, !1), (j = ve.onVnodeBeforeUpdate) && gs(j, ce, H, U), Be && Js(H, U, ce, "beforeUpdate"), ce && Xs(ce, !0), (Ue.innerHTML && ve.innerHTML == null || Ue.textContent && ve.textContent == null) && v(we, ""), fe ? te(
      U.dynamicChildren,
      fe,
      we,
      ce,
      Ee,
      wa(H, ke),
      be
    ) : De || F(
      U,
      H,
      we,
      null,
      ce,
      Ee,
      wa(H, ke),
      be,
      !1
    ), Pe > 0) {
      if (Pe & 16)
        se(we, Ue, ve, ce, ke);
      else if (Pe & 2 && Ue.class !== ve.class && r(we, "class", null, ve.class, ke), Pe & 4 && r(we, "style", Ue.style, ve.style, ke), Pe & 8) {
        const Oe = H.dynamicProps;
        for (let Ie = 0; Ie < Oe.length; Ie++) {
          const Ce = Oe[Ie], Le = Ue[Ce], Me = ve[Ce];
          (Me !== Le || Ce === "value") && r(we, Ce, Le, Me, ke, ce);
        }
      }
      Pe & 1 && U.children !== H.children && v(we, H.children);
    } else !De && fe == null && se(we, Ue, ve, ce, ke);
    ((j = ve.onVnodeUpdated) || Be) && Ft(() => {
      j && gs(j, ce, H, U), Be && Js(H, U, ce, "updated");
    }, Ee);
  }, te = (U, H, ce, Ee, ke, be, De) => {
    for (let we = 0; we < H.length; we++) {
      const Pe = U[we], fe = H[we], Be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Pe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Pe.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(Pe, fe) || // - In the case of a component, it could contain anything.
        Pe.shapeFlag & 198) ? y(Pe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ce
        )
      );
      x(
        Pe,
        fe,
        Be,
        null,
        Ee,
        ke,
        be,
        De,
        !0
      );
    }
  }, se = (U, H, ce, Ee, ke) => {
    if (H !== ce) {
      if (H !== vt)
        for (const be in H)
          !Ho(be) && !(be in ce) && r(
            U,
            be,
            H[be],
            null,
            ke,
            Ee
          );
      for (const be in ce) {
        if (Ho(be)) continue;
        const De = ce[be], we = H[be];
        De !== we && be !== "value" && r(U, be, we, De, ke, Ee);
      }
      "value" in ce && r(U, "value", H.value, ce.value, ke);
    }
  }, oe = (U, H, ce, Ee, ke, be, De, we, Pe) => {
    const fe = H.el = U ? U.el : u(""), Be = H.anchor = U ? U.anchor : u("");
    let { patchFlag: Ue, dynamicChildren: ve, slotScopeIds: j } = H;
    j && (we = we ? we.concat(j) : j), U == null ? (a(fe, ce, Ee), a(Be, ce, Ee), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      ce,
      Be,
      ke,
      be,
      De,
      we,
      Pe
    )) : Ue > 0 && Ue & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    U.dynamicChildren ? (te(
      U.dynamicChildren,
      ve,
      ce,
      ke,
      be,
      De,
      we
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || ke && H === ke.subTree) && ul(
      U,
      H,
      !0
      /* shallow */
    )) : F(
      U,
      H,
      ce,
      Be,
      ke,
      be,
      De,
      we,
      Pe
    );
  }, X = (U, H, ce, Ee, ke, be, De, we, Pe) => {
    H.slotScopeIds = we, U == null ? H.shapeFlag & 512 ? ke.ctx.activate(
      H,
      ce,
      Ee,
      De,
      Pe
    ) : V(
      H,
      ce,
      Ee,
      ke,
      be,
      De,
      Pe
    ) : Q(U, H, Pe);
  }, V = (U, H, ce, Ee, ke, be, De) => {
    const we = U.component = qu(
      U,
      Ee,
      ke
    );
    if (ta(U) && (we.ctx.renderer = Te), Yu(we, !1, De), we.asyncDep) {
      if (ke && ke.registerDep(we, ne, De), !U.el) {
        const Pe = we.subTree = S(Nt);
        C(null, Pe, H, ce), U.placeholder = Pe.el;
      }
    } else
      ne(
        we,
        U,
        H,
        ce,
        ke,
        be,
        De
      );
  }, Q = (U, H, ce) => {
    const Ee = H.component = U.component;
    if (Tu(U, H, ce))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        re(Ee, H, ce);
        return;
      } else
        Ee.next = H, Ee.update();
    else
      H.el = U.el, Ee.vnode = H;
  }, ne = (U, H, ce, Ee, ke, be, De) => {
    const we = () => {
      if (U.isMounted) {
        let { next: Ue, bu: ve, u: j, parent: Oe, vnode: Ie } = U;
        {
          const me = yr(U);
          if (me) {
            Ue && (Ue.el = Ie.el, re(U, Ue, De)), me.asyncDep.then(() => {
              U.isUnmounted || we();
            });
            return;
          }
        }
        let Ce = Ue, Le;
        Xs(U, !1), Ue ? (Ue.el = Ie.el, re(U, Ue, De)) : Ue = Ie, ve && Tn(ve), (Le = Ue.props && Ue.props.onVnodeBeforeUpdate) && gs(Le, Oe, Ue, Ie), Xs(U, !0);
        const Me = Dl(U), q = U.subTree;
        U.subTree = Me, x(
          q,
          Me,
          // parent may have changed if it's in a teleport
          y(q.el),
          // anchor may have changed if it's in a fragment
          z(q),
          U,
          ke,
          be
        ), Ue.el = Me.el, Ce === null && Pu(U, Me.el), j && Ft(j, ke), (Le = Ue.props && Ue.props.onVnodeUpdated) && Ft(
          () => gs(Le, Oe, Ue, Ie),
          ke
        );
      } else {
        let Ue;
        const { el: ve, props: j } = H, { bm: Oe, m: Ie, parent: Ce, root: Le, type: Me } = U, q = So(H);
        Xs(U, !1), Oe && Tn(Oe), !q && (Ue = j && j.onVnodeBeforeMount) && gs(Ue, Ce, H), Xs(U, !0);
        {
          Le.ce && // @ts-expect-error _def is private
          Le.ce._def.shadowRoot !== !1 && Le.ce._injectChildStyle(Me);
          const me = U.subTree = Dl(U);
          x(
            null,
            me,
            ce,
            Ee,
            U,
            ke,
            be
          ), H.el = me.el;
        }
        if (Ie && Ft(Ie, ke), !q && (Ue = j && j.onVnodeMounted)) {
          const me = H;
          Ft(
            () => gs(Ue, Ce, me),
            ke
          );
        }
        (H.shapeFlag & 256 || Ce && So(Ce.vnode) && Ce.vnode.shapeFlag & 256) && U.a && Ft(U.a, ke), U.isMounted = !0, H = ce = Ee = null;
      }
    };
    U.scope.on();
    const Pe = U.effect = new $i(we);
    U.scope.off();
    const fe = U.update = Pe.run.bind(Pe), Be = U.job = Pe.runIfDirty.bind(Pe);
    Be.i = U, Be.id = U.uid, Pe.scheduler = () => al(Be), Xs(U, !0), fe();
  }, re = (U, H, ce) => {
    H.component = U;
    const Ee = U.vnode.props;
    U.vnode = H, U.next = null, Mu(U, H.props, Ee, ce), Uu(U, H.children, ce), Rs(), bl(U), Ms();
  }, F = (U, H, ce, Ee, ke, be, De, we, Pe = !1) => {
    const fe = U && U.children, Be = U ? U.shapeFlag : 0, Ue = H.children, { patchFlag: ve, shapeFlag: j } = H;
    if (ve > 0) {
      if (ve & 128) {
        le(
          fe,
          Ue,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe
        );
        return;
      } else if (ve & 256) {
        ee(
          fe,
          Ue,
          ce,
          Ee,
          ke,
          be,
          De,
          we,
          Pe
        );
        return;
      }
    }
    j & 8 ? (Be & 16 && Y(fe, ke, be), Ue !== fe && v(ce, Ue)) : Be & 16 ? j & 16 ? le(
      fe,
      Ue,
      ce,
      Ee,
      ke,
      be,
      De,
      we,
      Pe
    ) : Y(fe, ke, be, !0) : (Be & 8 && v(ce, ""), j & 16 && E(
      Ue,
      ce,
      Ee,
      ke,
      be,
      De,
      we,
      Pe
    ));
  }, ee = (U, H, ce, Ee, ke, be, De, we, Pe) => {
    U = U || $o, H = H || $o;
    const fe = U.length, Be = H.length, Ue = Math.min(fe, Be);
    let ve;
    for (ve = 0; ve < Ue; ve++) {
      const j = H[ve] = Pe ? Ws(H[ve]) : ks(H[ve]);
      x(
        U[ve],
        j,
        ce,
        null,
        ke,
        be,
        De,
        we,
        Pe
      );
    }
    fe > Be ? Y(
      U,
      ke,
      be,
      !0,
      !1,
      Ue
    ) : E(
      H,
      ce,
      Ee,
      ke,
      be,
      De,
      we,
      Pe,
      Ue
    );
  }, le = (U, H, ce, Ee, ke, be, De, we, Pe) => {
    let fe = 0;
    const Be = H.length;
    let Ue = U.length - 1, ve = Be - 1;
    for (; fe <= Ue && fe <= ve; ) {
      const j = U[fe], Oe = H[fe] = Pe ? Ws(H[fe]) : ks(H[fe]);
      if (so(j, Oe))
        x(
          j,
          Oe,
          ce,
          null,
          ke,
          be,
          De,
          we,
          Pe
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ue && fe <= ve; ) {
      const j = U[Ue], Oe = H[ve] = Pe ? Ws(H[ve]) : ks(H[ve]);
      if (so(j, Oe))
        x(
          j,
          Oe,
          ce,
          null,
          ke,
          be,
          De,
          we,
          Pe
        );
      else
        break;
      Ue--, ve--;
    }
    if (fe > Ue) {
      if (fe <= ve) {
        const j = ve + 1, Oe = j < Be ? H[j].el : Ee;
        for (; fe <= ve; )
          x(
            null,
            H[fe] = Pe ? Ws(H[fe]) : ks(H[fe]),
            ce,
            Oe,
            ke,
            be,
            De,
            we,
            Pe
          ), fe++;
      }
    } else if (fe > ve)
      for (; fe <= Ue; )
        qe(U[fe], ke, be, !0), fe++;
    else {
      const j = fe, Oe = fe, Ie = /* @__PURE__ */ new Map();
      for (fe = Oe; fe <= ve; fe++) {
        const Fe = H[fe] = Pe ? Ws(H[fe]) : ks(H[fe]);
        Fe.key != null && Ie.set(Fe.key, fe);
      }
      let Ce, Le = 0;
      const Me = ve - Oe + 1;
      let q = !1, me = 0;
      const ge = new Array(Me);
      for (fe = 0; fe < Me; fe++) ge[fe] = 0;
      for (fe = j; fe <= Ue; fe++) {
        const Fe = U[fe];
        if (Le >= Me) {
          qe(Fe, ke, be, !0);
          continue;
        }
        let et;
        if (Fe.key != null)
          et = Ie.get(Fe.key);
        else
          for (Ce = Oe; Ce <= ve; Ce++)
            if (ge[Ce - Oe] === 0 && so(Fe, H[Ce])) {
              et = Ce;
              break;
            }
        et === void 0 ? qe(Fe, ke, be, !0) : (ge[et - Oe] = fe + 1, et >= me ? me = et : q = !0, x(
          Fe,
          H[et],
          ce,
          null,
          ke,
          be,
          De,
          we,
          Pe
        ), Le++);
      }
      const ze = q ? Fu(ge) : $o;
      for (Ce = ze.length - 1, fe = Me - 1; fe >= 0; fe--) {
        const Fe = Oe + fe, et = H[Fe], ot = H[Fe + 1], Ze = Fe + 1 < Be ? (
          // #13559, fallback to el placeholder for unresolved async component
          ot.el || ot.placeholder
        ) : Ee;
        ge[fe] === 0 ? x(
          null,
          et,
          ce,
          Ze,
          ke,
          be,
          De,
          we,
          Pe
        ) : q && (Ce < 0 || fe !== ze[Ce] ? Ae(et, ce, Ze, 2) : Ce--);
      }
    }
  }, Ae = (U, H, ce, Ee, ke = null) => {
    const { el: be, type: De, transition: we, children: Pe, shapeFlag: fe } = U;
    if (fe & 6) {
      Ae(U.component.subTree, H, ce, Ee);
      return;
    }
    if (fe & 128) {
      U.suspense.move(H, ce, Ee);
      return;
    }
    if (fe & 64) {
      De.move(U, H, ce, Te);
      return;
    }
    if (De === B) {
      a(be, H, ce);
      for (let Ue = 0; Ue < Pe.length; Ue++)
        Ae(Pe[Ue], H, ce, Ee);
      a(U.anchor, H, ce);
      return;
    }
    if (De === _a) {
      T(U, H, ce);
      return;
    }
    if (Ee !== 2 && fe & 1 && we)
      if (Ee === 0)
        we.beforeEnter(be), a(be, H, ce), Ft(() => we.enter(be), ke);
      else {
        const { leave: Ue, delayLeave: ve, afterLeave: j } = we, Oe = () => {
          U.ctx.isUnmounted ? l(be) : a(be, H, ce);
        }, Ie = () => {
          be._isLeaving && be[Is](
            !0
            /* cancelled */
          ), Ue(be, () => {
            Oe(), j && j();
          });
        };
        ve ? ve(be, Oe, Ie) : Ie();
      }
    else
      a(be, H, ce);
  }, qe = (U, H, ce, Ee = !1, ke = !1) => {
    const {
      type: be,
      props: De,
      ref: we,
      children: Pe,
      dynamicChildren: fe,
      shapeFlag: Be,
      patchFlag: Ue,
      dirs: ve,
      cacheIndex: j
    } = U;
    if (Ue === -2 && (ke = !1), we != null && (Rs(), Qo(we, null, ce, U, !0), Ms()), j != null && (H.renderCache[j] = void 0), Be & 256) {
      H.ctx.deactivate(U);
      return;
    }
    const Oe = Be & 1 && ve, Ie = !So(U);
    let Ce;
    if (Ie && (Ce = De && De.onVnodeBeforeUnmount) && gs(Ce, H, U), Be & 6)
      A(U.component, ce, Ee);
    else {
      if (Be & 128) {
        U.suspense.unmount(ce, Ee);
        return;
      }
      Oe && Js(U, null, H, "beforeUnmount"), Be & 64 ? U.type.remove(
        U,
        H,
        ce,
        Te,
        Ee
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (be !== B || Ue > 0 && Ue & 64) ? Y(
        fe,
        H,
        ce,
        !1,
        !0
      ) : (be === B && Ue & 384 || !ke && Be & 16) && Y(Pe, H, ce), Ee && je(U);
    }
    (Ie && (Ce = De && De.onVnodeUnmounted) || Oe) && Ft(() => {
      Ce && gs(Ce, H, U), Oe && Js(U, null, H, "unmounted");
    }, ce);
  }, je = (U) => {
    const { type: H, el: ce, anchor: Ee, transition: ke } = U;
    if (H === B) {
      xe(ce, Ee);
      return;
    }
    if (H === _a) {
      I(U);
      return;
    }
    const be = () => {
      l(ce), ke && !ke.persisted && ke.afterLeave && ke.afterLeave();
    };
    if (U.shapeFlag & 1 && ke && !ke.persisted) {
      const { leave: De, delayLeave: we } = ke, Pe = () => De(ce, be);
      we ? we(U.el, be, Pe) : Pe();
    } else
      be();
  }, xe = (U, H) => {
    let ce;
    for (; U !== H; )
      ce = k(U), l(U), U = ce;
    l(H);
  }, A = (U, H, ce) => {
    const { bum: Ee, scope: ke, job: be, subTree: De, um: we, m: Pe, a: fe } = U;
    Ul(Pe), Ul(fe), Ee && Tn(Ee), ke.stop(), be && (be.flags |= 8, qe(De, U, H, ce)), we && Ft(we, H), Ft(() => {
      U.isUnmounted = !0;
    }, H);
  }, Y = (U, H, ce, Ee = !1, ke = !1, be = 0) => {
    for (let De = be; De < U.length; De++)
      qe(U[De], H, ce, Ee, ke);
  }, z = (U) => {
    if (U.shapeFlag & 6)
      return z(U.component.subTree);
    if (U.shapeFlag & 128)
      return U.suspense.next();
    const H = k(U.anchor || U.el), ce = H && H[Wi];
    return ce ? k(ce) : H;
  };
  let O = !1;
  const ie = (U, H, ce) => {
    U == null ? H._vnode && qe(H._vnode, null, null, !0) : x(
      H._vnode || null,
      U,
      H,
      null,
      null,
      null,
      ce
    ), H._vnode = U, O || (O = !0, bl(), Fi(), O = !1);
  }, Te = {
    p: x,
    um: qe,
    m: Ae,
    r: je,
    mt: V,
    mc: E,
    pc: F,
    pbc: te,
    n: z,
    o: e
  };
  return {
    render: ie,
    hydrate: void 0,
    createApp: wu(ie)
  };
}
function wa({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function zu(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function ul(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (Qe(a) && Qe(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = Ws(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && ul(c, u)), u.type === na && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Nt && !u.el && (u.el = c.el);
    }
}
function Fu(e) {
  const s = e.slice(), o = [0];
  let a, l, r, c, u;
  const m = e.length;
  for (a = 0; a < m; a++) {
    const f = e[a];
    if (f !== 0) {
      if (l = o[o.length - 1], e[l] < f) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < f ? r = u + 1 : c = u;
      f < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = s[c];
  return o;
}
function yr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : yr(s);
}
function Ul(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const wr = (e) => e.__isSuspense;
function Vu(e, s) {
  s && s.pendingBranch ? Qe(e) ? s.effects.push(...e) : s.effects.push(e) : Jc(e);
}
const B = Symbol.for("v-fgt"), na = Symbol.for("v-txt"), Nt = Symbol.for("v-cmt"), _a = Symbol.for("v-stc"), Xo = [];
let qt = null;
function n(e = !1) {
  Xo.push(qt = e ? null : []);
}
function Bu() {
  Xo.pop(), qt = Xo[Xo.length - 1] || null;
}
let rn = 1;
function Bn(e, s = !1) {
  rn += e, e < 0 && qt && s && (qt.hasOnce = !0);
}
function _r(e) {
  return e.dynamicChildren = rn > 0 ? qt || $o : null, Bu(), rn > 0 && qt && qt.push(e), e;
}
function i(e, s, o, a, l, r) {
  return _r(
    t(
      e,
      s,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function P(e, s, o, a, l) {
  return _r(
    S(
      e,
      s,
      o,
      a,
      l,
      !0
    )
  );
}
function cn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function so(e, s) {
  return e.type === s.type && e.key === s.key;
}
const kr = ({ key: e }) => e ?? null, Mn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || At(e) || st(e) ? { i: Rt, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && kr(s),
    ref: s && Mn(s),
    scopeId: Bi,
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
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return u ? (dl(m, o), r & 128 && e.normalize(m)) : o && (m.shapeFlag |= Ct(o) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  qt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && qt.push(m), m;
}
const S = Wu;
function Wu(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === sr) && (e = Nt), cn(e)) {
    const u = js(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && dl(u, o), rn > 0 && !r && qt && (u.shapeFlag & 6 ? qt[qt.indexOf(e)] = u : qt.push(u)), u.patchFlag = -2, u;
  }
  if (ed(e) && (e = e.__vccOpts), s) {
    s = Gu(s);
    let { class: u, style: m } = s;
    u && !Ct(u) && (s.class = Re(u)), mt(m) && (nl(m) && !Qe(m) && (m = It({}, m)), s.style = Qt(m));
  }
  const c = Ct(e) ? 1 : wr(e) ? 128 : Gi(e) ? 64 : mt(e) ? 4 : st(e) ? 2 : 0;
  return t(
    e,
    s,
    o,
    a,
    l,
    c,
    r,
    !0
  );
}
function Gu(e) {
  return e ? nl(e) || mr(e) ? It({}, e) : e : null;
}
function js(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: m } = e, f = s ? ju(l || {}, s) : l, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && kr(f),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? Qe(r) ? r.concat(Mn(s)) : [r, Mn(s)] : Mn(s)
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
    patchFlag: s && e.type !== B ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && js(e.ssContent),
    ssFallback: e.ssFallback && js(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && a && lo(
    v,
    m.clone(v)
  ), v;
}
function b(e = " ", s = 0) {
  return S(na, null, e, s);
}
function h(e = "", s = !1) {
  return s ? (n(), P(Nt, null, e)) : S(Nt, null, e);
}
function ks(e) {
  return e == null || typeof e == "boolean" ? S(Nt) : Qe(e) ? S(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cn(e) ? Ws(e) : S(na, null, String(e));
}
function Ws(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : js(e);
}
function dl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (Qe(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), dl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !mr(s) ? s._ctx = Rt : l === 3 && Rt && (Rt.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else st(s) ? (s = { default: s, _ctx: Rt }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [b(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function ju(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Re([s.class, a.class]));
      else if (l === "style")
        s.style = Qt([s.style, a.style]);
      else if (qn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(Qe(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function gs(e, s, o, a = null) {
  ms(e, s, 7, [
    o,
    a
  ]);
}
const Hu = lr();
let Ku = 0;
function qu(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || Hu, r = {
    uid: Ku++,
    vnode: e,
    type: a,
    parent: s,
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
    scope: new _c(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: s ? s.provides : Object.create(l.provides),
    ids: s ? s.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: vr(a, l),
    emitsOptions: cr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: vt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: vt,
    data: vt,
    props: vt,
    attrs: vt,
    slots: vt,
    refs: vt,
    setupState: vt,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = xu.bind(null, r), e.ce && e.ce(r), r;
}
let Ut = null;
const ml = () => Ut || Rt;
let Wn, za;
{
  const e = Xn(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Wn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Ut = o
  ), za = s(
    "__VUE_SSR_SETTERS__",
    (o) => un = o
  );
}
const pn = (e) => {
  const s = Ut;
  return Wn(e), e.scope.on(), () => {
    e.scope.off(), Wn(s);
  };
}, Al = () => {
  Ut && Ut.scope.off(), Wn(null);
};
function br(e) {
  return e.vnode.shapeFlag & 4;
}
let un = !1;
function Yu(e, s = !1, o = !1) {
  s && za(s);
  const { props: a, children: l } = e.vnode, r = br(e);
  Ru(e, a, r, s), Nu(e, l, o || s);
  const c = r ? Qu(e, s) : void 0;
  return s && za(!1), c;
}
function Qu(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mu);
  const { setup: a } = o;
  if (a) {
    Rs();
    const l = e.setupContext = a.length > 1 ? Xu(e) : null, r = pn(e), c = vn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = gi(c);
    if (Ms(), r(), (u || e.sp) && !So(e) && Xi(e), u) {
      if (c.then(Al, Al), s)
        return c.then((m) => {
          Ol(e, m);
        }).catch((m) => {
          ea(m, e, 0);
        });
      e.asyncDep = c;
    } else
      Ol(e, c);
  } else
    $r(e);
}
function Ol(e, s, o) {
  st(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : mt(s) && (e.setupState = Ai(s)), $r(e);
}
function $r(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || bs);
  {
    const l = pn(e);
    Rs();
    try {
      fu(e);
    } finally {
      Ms(), l();
    }
  }
}
const Ju = {
  get(e, s) {
    return Lt(e, "get", ""), e[s];
  }
};
function Xu(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ju),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function aa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ai(Vc(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Jo)
        return Jo[o](e);
    },
    has(s, o) {
      return o in s || o in Jo;
    }
  })) : e.proxy;
}
function Zu(e, s = !0) {
  return st(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function ed(e) {
  return st(e) && "__vccOpts" in e;
}
const D = (e, s) => Hc(e, s, un);
function gn(e, s, o) {
  try {
    Bn(-1);
    const a = arguments.length;
    return a === 2 ? mt(s) && !Qe(s) ? cn(s) ? S(e, null, [s]) : S(e, s) : S(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && cn(o) && (o = [o]), S(e, s, o));
  } finally {
    Bn(1);
  }
}
const td = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fa;
const zl = typeof window < "u" && window.trustedTypes;
if (zl)
  try {
    Fa = /* @__PURE__ */ zl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cr = Fa ? (e) => Fa.createHTML(e) : (e) => e, sd = "http://www.w3.org/2000/svg", od = "http://www.w3.org/1998/Math/MathML", Ss = typeof document < "u" ? document : null, Fl = Ss && /* @__PURE__ */ Ss.createElement("template"), nd = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ss.createElementNS(sd, e) : s === "mathml" ? Ss.createElementNS(od, e) : o ? Ss.createElement(e, { is: o }) : Ss.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ss.createTextNode(e),
  createComment: (e) => Ss.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ss.querySelector(e),
  setScopeId(e, s) {
    e.setAttribute(s, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, s, o, a, l, r) {
    const c = o ? o.previousSibling : s.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; s.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      Fl.innerHTML = Cr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Fl.content;
      if (a === "svg" || a === "mathml") {
        const m = u.firstChild;
        for (; m.firstChild; )
          u.appendChild(m.firstChild);
        u.removeChild(m);
      }
      s.insertBefore(u, o);
    }
    return [
      // first
      c ? c.nextSibling : s.firstChild,
      // last
      o ? o.previousSibling : s.lastChild
    ];
  }
}, zs = "transition", Oo = "animation", Po = Symbol("_vtc"), xr = {
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
}, Sr = /* @__PURE__ */ It(
  {},
  qi,
  xr
), ad = (e) => (e.displayName = "Transition", e.props = Sr, e), ld = /* @__PURE__ */ ad(
  (e, { slots: s }) => gn(eu, Ir(e), s)
), Zs = (e, s = []) => {
  Qe(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, Vl = (e) => e ? Qe(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Ir(e) {
  const s = {};
  for (const oe in e)
    oe in xr || (s[oe] = e[oe]);
  if (e.css === !1)
    return s;
  const {
    name: o = "v",
    type: a,
    duration: l,
    enterFromClass: r = `${o}-enter-from`,
    enterActiveClass: c = `${o}-enter-active`,
    enterToClass: u = `${o}-enter-to`,
    appearFromClass: m = r,
    appearActiveClass: f = c,
    appearToClass: v = u,
    leaveFromClass: y = `${o}-leave-from`,
    leaveActiveClass: k = `${o}-leave-active`,
    leaveToClass: p = `${o}-leave-to`
  } = e, w = id(l), x = w && w[0], $ = w && w[1], {
    onBeforeEnter: C,
    onEnter: N,
    onEnterCancelled: T,
    onLeave: I,
    onLeaveCancelled: M,
    onBeforeAppear: L = C,
    onAppear: W = N,
    onAppearCancelled: E = T
  } = s, R = (oe, X, V, Q) => {
    oe._enterCancelled = Q, Fs(oe, X ? v : u), Fs(oe, X ? f : c), V && V();
  }, te = (oe, X) => {
    oe._isLeaving = !1, Fs(oe, y), Fs(oe, p), Fs(oe, k), X && X();
  }, se = (oe) => (X, V) => {
    const Q = oe ? W : N, ne = () => R(X, oe, V);
    Zs(Q, [X, ne]), Bl(() => {
      Fs(X, oe ? m : r), ys(X, oe ? v : u), Vl(Q) || Wl(X, a, x, ne);
    });
  };
  return It(s, {
    onBeforeEnter(oe) {
      Zs(C, [oe]), ys(oe, r), ys(oe, c);
    },
    onBeforeAppear(oe) {
      Zs(L, [oe]), ys(oe, m), ys(oe, f);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(oe, X) {
      oe._isLeaving = !0;
      const V = () => te(oe, X);
      ys(oe, y), oe._enterCancelled ? (ys(oe, k), Va(oe)) : (Va(oe), ys(oe, k)), Bl(() => {
        oe._isLeaving && (Fs(oe, y), ys(oe, p), Vl(I) || Wl(oe, a, $, V));
      }), Zs(I, [oe, V]);
    },
    onEnterCancelled(oe) {
      R(oe, !1, void 0, !0), Zs(T, [oe]);
    },
    onAppearCancelled(oe) {
      R(oe, !0, void 0, !0), Zs(E, [oe]);
    },
    onLeaveCancelled(oe) {
      te(oe), Zs(M, [oe]);
    }
  });
}
function id(e) {
  if (e == null)
    return null;
  if (mt(e))
    return [ka(e.enter), ka(e.leave)];
  {
    const s = ka(e);
    return [s, s];
  }
}
function ka(e) {
  return mc(e);
}
function ys(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Po] || (e[Po] = /* @__PURE__ */ new Set())).add(s);
}
function Fs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Po];
  o && (o.delete(s), o.size || (e[Po] = void 0));
}
function Bl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rd = 0;
function Wl(e, s, o, a) {
  const l = e._endId = ++rd, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: m } = Er(e, s);
  if (!c)
    return a();
  const f = c + "end";
  let v = 0;
  const y = () => {
    e.removeEventListener(f, k), r();
  }, k = (p) => {
    p.target === e && ++v >= m && y();
  };
  setTimeout(() => {
    v < m && y();
  }, u + 1), e.addEventListener(f, k);
}
function Er(e, s) {
  const o = window.getComputedStyle(e), a = (w) => (o[w] || "").split(", "), l = a(`${zs}Delay`), r = a(`${zs}Duration`), c = Gl(l, r), u = a(`${Oo}Delay`), m = a(`${Oo}Duration`), f = Gl(u, m);
  let v = null, y = 0, k = 0;
  s === zs ? c > 0 && (v = zs, y = c, k = r.length) : s === Oo ? f > 0 && (v = Oo, y = f, k = m.length) : (y = Math.max(c, f), v = y > 0 ? c > f ? zs : Oo : null, k = v ? v === zs ? r.length : m.length : 0);
  const p = v === zs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${zs}Property`).toString()
  );
  return {
    type: v,
    timeout: y,
    propCount: k,
    hasTransform: p
  };
}
function Gl(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => jl(o) + jl(e[a])));
}
function jl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Va(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function cd(e, s, o) {
  const a = e[Po];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const Hl = Symbol("_vod"), ud = Symbol("_vsh"), dd = Symbol(""), md = /(?:^|;)\s*display\s*:/;
function fd(e, s, o) {
  const a = e.style, l = Ct(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if (Ct(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Dn(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Dn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Dn(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[dd];
      c && (o += ";" + c), a.cssText = o, r = md.test(o);
    }
  } else s && e.removeAttribute("style");
  Hl in e && (e[Hl] = r ? a.display : "", e[ud] && (a.display = "none"));
}
const Kl = /\s*!important$/;
function Dn(e, s, o) {
  if (Qe(o))
    o.forEach((a) => Dn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = vd(e, s);
    Kl.test(o) ? e.setProperty(
      Ks(a),
      o.replace(Kl, ""),
      "important"
    ) : e[a] = o;
  }
}
const ql = ["Webkit", "Moz", "ms"], ba = {};
function vd(e, s) {
  const o = ba[s];
  if (o)
    return o;
  let a = os(s);
  if (a !== "filter" && a in e)
    return ba[s] = a;
  a = Qn(a);
  for (let l = 0; l < ql.length; l++) {
    const r = ql[l] + a;
    if (r in e)
      return ba[s] = r;
  }
  return s;
}
const Yl = "http://www.w3.org/1999/xlink";
function Ql(e, s, o, a, l, r = yc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Yl, s.slice(6, s.length)) : e.setAttributeNS(Yl, s, o) : o == null || r && !_i(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : us(o) ? String(o) : o
  );
}
function Jl(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? Cr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, m = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== m || !("_value" in e)) && (e.value = m), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = _i(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ps(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function pd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const Xl = Symbol("_vei");
function gd(e, s, o, a, l = null) {
  const r = e[Xl] || (e[Xl] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, m] = hd(s);
    if (a) {
      const f = r[s] = _d(
        a,
        l
      );
      Ps(e, u, f, m);
    } else c && (pd(e, u, c, m), r[s] = void 0);
  }
}
const Zl = /(?:Once|Passive|Capture)$/;
function hd(e) {
  let s;
  if (Zl.test(e)) {
    s = {};
    let a;
    for (; a = e.match(Zl); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ks(e.slice(2)), s];
}
let $a = 0;
const yd = /* @__PURE__ */ Promise.resolve(), wd = () => $a || (yd.then(() => $a = 0), $a = Date.now());
function _d(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    ms(
      kd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = wd(), o;
}
function kd(e, s) {
  if (Qe(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const ei = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? cd(e, a, c) : s === "style" ? fd(e, o, a) : qn(s) ? qa(s) || gd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : $d(e, s, a, c)) ? (Jl(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && Ql(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !Ct(a)) ? Jl(e, os(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), Ql(e, s, a, c));
};
function $d(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && ei(s) && st(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ei(s) && Ct(o) ? !1 : s in e;
}
const Tr = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ new WeakMap(), Gn = Symbol("_moveCb"), ti = Symbol("_enterCb"), Cd = (e) => (delete e.props.mode, e), xd = /* @__PURE__ */ Cd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ It({}, Sr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = ml(), a = Ki();
    let l, r;
    return er(() => {
      if (!l.length)
        return;
      const c = e.moveClass || `${e.name || "v"}-move`;
      if (!Pd(
        l[0].el,
        o.vnode.el,
        c
      )) {
        l = [];
        return;
      }
      l.forEach(Id), l.forEach(Ed);
      const u = l.filter(Td);
      Va(o.vnode.el), u.forEach((m) => {
        const f = m.el, v = f.style;
        ys(f, c), v.transform = v.webkitTransform = v.transitionDuration = "";
        const y = f[Gn] = (k) => {
          k && k.target !== f || (!k || k.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", y), f[Gn] = null, Fs(f, c));
        };
        f.addEventListener("transitionend", y);
      }), l = [];
    }), () => {
      const c = ct(e), u = Ir(c);
      let m = c.tag || B;
      if (l = [], r)
        for (let f = 0; f < r.length; f++) {
          const v = r[f];
          v.el && v.el instanceof Element && (l.push(v), lo(
            v,
            ln(
              v,
              u,
              a,
              o
            )
          ), Tr.set(v, {
            left: v.el.offsetLeft,
            top: v.el.offsetTop
          }));
        }
      r = s.default ? ll(s.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const v = r[f];
        v.key != null && lo(
          v,
          ln(v, u, a, o)
        );
      }
      return S(m, null, r);
    };
  }
}), Sd = xd;
function Id(e) {
  const s = e.el;
  s[Gn] && s[Gn](), s[ti] && s[ti]();
}
function Ed(e) {
  Pr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function Td(e) {
  const s = Tr.get(e), o = Pr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function Pd(e, s, o) {
  const a = e.cloneNode(), l = e[Po];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((m) => m && a.classList.remove(m));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Er(a);
  return r.removeChild(a), c;
}
const Hs = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return Qe(s) ? (o) => Tn(s, o) : s;
};
function Rd(e) {
  e.target.composing = !0;
}
function si(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const ts = Symbol("_assign");
function oi(e, s, o) {
  return s && (e = e.trim()), o && (e = Jn(e)), e;
}
const Yt = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ts] = Hs(l);
    const r = a || l.props && l.props.type === "number";
    Ps(e, s ? "change" : "input", (c) => {
      c.target.composing || e[ts](oi(e.value, o, r));
    }), (o || r) && Ps(e, "change", () => {
      e.value = oi(e.value, o, r);
    }), s || (Ps(e, "compositionstart", Rd), Ps(e, "compositionend", si), Ps(e, "change", si));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ts] = Hs(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Jn(e.value) : e.value, m = s ?? "";
    u !== m && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === m) || (e.value = m));
  }
}, dn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
    e[ts] = Hs(o), Ps(e, "change", () => {
      const a = e._modelValue, l = Ro(e), r = e.checked, c = e[ts];
      if (Qe(a)) {
        const u = Ja(a, l), m = u !== -1;
        if (r && !m)
          c(a.concat(l));
        else if (!r && m) {
          const f = [...a];
          f.splice(u, 1), c(f);
        }
      } else if (Mo(a)) {
        const u = new Set(a);
        r ? u.add(l) : u.delete(l), c(u);
      } else
        c(Rr(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ni,
  beforeUpdate(e, s, o) {
    e[ts] = Hs(o), ni(e, s, o);
  }
};
function ni(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (Qe(s))
    l = Ja(s, a.props.value) > -1;
  else if (Mo(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = ao(s, Rr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const rs = {
  created(e, { value: s }, o) {
    e.checked = ao(s, o.props.value), e[ts] = Hs(o), Ps(e, "change", () => {
      e[ts](Ro(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ts] = Hs(a), s !== o && (e.checked = ao(s, a.props.value));
  }
}, $s = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Mo(s);
    Ps(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Jn(Ro(c)) : Ro(c)
      );
      e[ts](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Et(() => {
        e._assigning = !1;
      });
    }), e[ts] = Hs(a);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: s }) {
    ai(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ts] = Hs(o);
  },
  updated(e, { value: s }) {
    e._assigning || ai(e, s);
  }
};
function ai(e, s) {
  const o = e.multiple, a = Qe(s);
  if (!(o && !a && !Mo(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = Ro(c);
      if (o)
        if (a) {
          const m = typeof u;
          m === "string" || m === "number" ? c.selected = s.some((f) => String(f) === String(u)) : c.selected = Ja(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (ao(Ro(c), s)) {
        e.selectedIndex !== l && (e.selectedIndex = l);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ro(e) {
  return "_value" in e ? e._value : e.value;
}
function Rr(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
}
const la = {
  created(e, s, o) {
    Cn(e, s, o, null, "created");
  },
  mounted(e, s, o) {
    Cn(e, s, o, null, "mounted");
  },
  beforeUpdate(e, s, o, a) {
    Cn(e, s, o, a, "beforeUpdate");
  },
  updated(e, s, o, a) {
    Cn(e, s, o, a, "updated");
  }
};
function Md(e, s) {
  switch (e) {
    case "SELECT":
      return $s;
    case "TEXTAREA":
      return Yt;
    default:
      switch (s) {
        case "checkbox":
          return dn;
        case "radio":
          return rs;
        default:
          return Yt;
      }
  }
}
function Cn(e, s, o, a, l) {
  const c = Md(
    e.tagName,
    o.props && o.props.type
  )[l];
  c && c(e, s, o, a);
}
const Dd = ["ctrl", "shift", "alt", "meta"], Ld = {
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
  exact: (e, s) => Dd.some((o) => e[`${o}Key`] && !s.includes(o))
}, wt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = Ld[s[c]];
      if (u && u(l, s)) return;
    }
    return e(l, ...r);
  }));
}, Nd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ss = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Ks(l.key);
    if (s.some(
      (c) => c === r || Nd[c] === r
    ))
      return e(l);
  }));
}, Ud = /* @__PURE__ */ It({ patchProp: bd }, nd);
let li;
function Ad() {
  return li || (li = Au(Ud));
}
const ia = ((...e) => {
  const s = Ad().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = zd(a);
    if (!l) return;
    const r = s._component;
    !st(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, Od(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function Od(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zd(e) {
  return Ct(e) ? document.querySelector(e) : e;
}
const Fd = { class: "panel-layout" }, Vd = {
  key: 0,
  class: "panel-layout-header"
}, Bd = {
  key: 1,
  class: "panel-layout-search"
}, Wd = { class: "panel-layout-content" }, Gd = {
  key: 2,
  class: "panel-layout-footer"
}, jd = /* @__PURE__ */ ye({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", Fd, [
      s.$slots.header ? (n(), i("div", Vd, [
        at(s.$slots, "header", {}, void 0)
      ])) : h("", !0),
      s.$slots.search ? (n(), i("div", Bd, [
        at(s.$slots, "search", {}, void 0)
      ])) : h("", !0),
      t("div", Wd, [
        at(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", Gd, [
        at(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), _e = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, Wt = /* @__PURE__ */ _e(jd, [["__scopeId", "data-v-21565df9"]]), Hd = {
  key: 0,
  class: "panel-title-prefix"
}, Kd = {
  key: 1,
  class: "panel-title-prefix-theme"
}, qd = /* @__PURE__ */ ye({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), P(il(`h${e.level}`), {
      class: Re(["panel-title", e.variant])
    }, {
      default: g(() => [
        e.showPrefix ? (n(), i("span", Hd, d(e.prefix), 1)) : (n(), i("span", Kd)),
        at(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Yd = /* @__PURE__ */ _e(qd, [["__scopeId", "data-v-c3875efc"]]), Qd = ["title"], Jd = ["width", "height"], Xd = /* @__PURE__ */ ye({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => s.$emit("click"))
    }, [
      (n(), i("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 16 16",
        fill: "currentColor"
      }, [...o[1] || (o[1] = [
        t("circle", {
          cx: "8",
          cy: "8",
          r: "7",
          stroke: "currentColor",
          "stroke-width": "1.5",
          fill: "none"
        }, null, -1),
        t("text", {
          x: "8",
          y: "11",
          "text-anchor": "middle",
          "font-size": "10",
          "font-weight": "bold",
          fill: "currentColor"
        }, "i", -1)
      ])], 8, Jd))
    ], 8, Qd));
  }
}), Mr = /* @__PURE__ */ _e(Xd, [["__scopeId", "data-v-6fc7f16d"]]), Zd = { class: "header-left" }, em = {
  key: 0,
  class: "header-actions"
}, tm = /* @__PURE__ */ ye({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Zd, [
        S(Yd, { "show-prefix": e.showPrefix }, {
          default: g(() => [
            b(d(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), P(Mr, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : h("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", em, [
        at(s.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Gt = /* @__PURE__ */ _e(tm, [["__scopeId", "data-v-55a62cd6"]]), sm = {
  key: 0,
  class: "section-title-count"
}, om = {
  key: 1,
  class: "section-title-icon"
}, nm = /* @__PURE__ */ ye({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), P(il(`h${e.level}`), {
      class: Re(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: g(() => [
        at(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", sm, "(" + d(e.count) + ")", 1)) : h("", !0),
        e.clickable ? (n(), i("span", om, d(e.expanded ? "▼" : "▸"), 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Kt = /* @__PURE__ */ _e(nm, [["__scopeId", "data-v-559361eb"]]), am = { class: "status-grid" }, lm = { class: "status-grid__columns" }, im = { class: "status-grid__column" }, rm = { class: "status-grid__title" }, cm = { class: "status-grid__column status-grid__column--right" }, um = { class: "status-grid__title" }, dm = {
  key: 0,
  class: "status-grid__footer"
}, mm = /* @__PURE__ */ ye({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", am, [
      t("div", lm, [
        t("div", im, [
          t("h4", rm, d(e.leftTitle), 1),
          at(s.$slots, "left", {}, void 0)
        ]),
        t("div", cm, [
          t("h4", um, d(e.rightTitle), 1),
          at(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", dm, [
        at(s.$slots, "footer", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), fm = /* @__PURE__ */ _e(mm, [["__scopeId", "data-v-73b7ba3f"]]), vm = {
  key: 0,
  class: "status-item__icon"
}, pm = {
  key: 1,
  class: "status-item__count"
}, gm = { class: "status-item__label" }, hm = /* @__PURE__ */ ye({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = D(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Re(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", vm, d(e.icon), 1)) : h("", !0),
      e.count !== void 0 ? (n(), i("span", pm, d(e.count), 1)) : h("", !0),
      t("span", gm, d(e.label), 1)
    ], 2));
  }
}), hs = /* @__PURE__ */ _e(hm, [["__scopeId", "data-v-6f929183"]]), ym = { class: "issue-card__header" }, wm = { class: "issue-card__icon" }, _m = { class: "issue-card__title" }, km = {
  key: 0,
  class: "issue-card__content"
}, bm = {
  key: 0,
  class: "issue-card__description"
}, $m = {
  key: 1,
  class: "issue-card__items"
}, Cm = {
  key: 2,
  class: "issue-card__actions"
}, xm = /* @__PURE__ */ ye({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = D(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Re(["issue-card", o.value])
    }, [
      t("div", ym, [
        t("span", wm, d(e.icon), 1),
        t("h4", _m, d(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", km, [
        e.description ? (n(), i("p", bm, d(e.description), 1)) : h("", !0),
        at(a.$slots, "default", {}, void 0)
      ])) : h("", !0),
      e.items && e.items.length ? (n(), i("div", $m, [
        (n(!0), i(B, null, he(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, d(r), 1)
        ]))), 128))
      ])) : h("", !0),
      a.$slots.actions ? (n(), i("div", Cm, [
        at(a.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), ls = /* @__PURE__ */ _e(xm, [["__scopeId", "data-v-df6aa348"]]), Sm = ["type", "disabled"], Im = {
  key: 0,
  class: "spinner"
}, Em = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Re(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", Im)) : h("", !0),
      e.loading ? h("", !0) : at(s.$slots, "default", { key: 1 }, void 0)
    ], 10, Sm));
  }
}), pe = /* @__PURE__ */ _e(Em, [["__scopeId", "data-v-772abe47"]]), Tm = { class: "empty-state" }, Pm = {
  key: 0,
  class: "empty-icon"
}, Rm = { class: "empty-message" }, Mm = /* @__PURE__ */ ye({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", Tm, [
      e.icon ? (n(), i("div", Pm, d(e.icon), 1)) : h("", !0),
      t("p", Rm, d(e.message), 1),
      e.actionLabel ? (n(), P(pe, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: g(() => [
          b(d(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : h("", !0)
    ]));
  }
}), fs = /* @__PURE__ */ _e(Mm, [["__scopeId", "data-v-4466284f"]]), Dm = /* @__PURE__ */ ye({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Re(["detail-label"]),
      style: Qt({ minWidth: e.minWidth })
    }, [
      at(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Ln = /* @__PURE__ */ _e(Dm, [["__scopeId", "data-v-75e9eeb8"]]), Lm = /* @__PURE__ */ ye({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Re(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      at(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Ba = /* @__PURE__ */ _e(Lm, [["__scopeId", "data-v-2f186e4c"]]), Nm = { class: "detail-row" }, Um = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), i("div", Nm, [
      S(Ln, { "min-width": e.labelMinWidth }, {
        default: g(() => [
          b(d(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), P(Ba, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: g(() => [
          b(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : at(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), yt = /* @__PURE__ */ _e(Um, [["__scopeId", "data-v-ef15664a"]]), Am = { class: "modal-header" }, Om = { class: "modal-body" }, zm = { class: "status-section" }, Fm = {
  key: 0,
  class: "status-section"
}, Vm = { class: "section-header-row" }, Bm = {
  key: 0,
  class: "workflow-group"
}, Wm = { class: "workflow-group-header" }, Gm = { class: "workflow-group-title" }, jm = { class: "workflow-list" }, Hm = { class: "workflow-name" }, Km = { class: "workflow-issue" }, qm = {
  key: 1,
  class: "workflow-group"
}, Ym = { class: "workflow-group-header" }, Qm = { class: "workflow-group-title" }, Jm = { class: "workflow-list" }, Xm = { class: "workflow-name" }, Zm = { class: "workflow-issue" }, ef = {
  key: 2,
  class: "workflow-group"
}, tf = { class: "workflow-group-header" }, sf = { class: "workflow-group-title" }, of = { class: "workflow-list" }, nf = { class: "workflow-name" }, af = {
  key: 3,
  class: "workflow-group"
}, lf = { class: "workflow-group-header" }, rf = { class: "workflow-group-title" }, cf = { class: "workflow-list" }, uf = { class: "workflow-name" }, df = {
  key: 4,
  class: "workflow-group"
}, mf = { class: "workflow-group-header" }, ff = { class: "workflow-group-title" }, vf = { class: "workflow-list" }, pf = { class: "workflow-name" }, gf = {
  key: 5,
  class: "workflow-group"
}, hf = { class: "workflow-group-title" }, yf = { class: "expand-icon" }, wf = {
  key: 0,
  class: "workflow-list"
}, _f = { class: "workflow-name" }, kf = {
  key: 1,
  class: "status-section"
}, bf = {
  key: 0,
  class: "change-group"
}, $f = { class: "change-group-header" }, Cf = { class: "change-group-title" }, xf = { class: "change-list" }, Sf = { class: "node-name" }, If = {
  key: 0,
  class: "dev-badge"
}, Ef = {
  key: 1,
  class: "change-group"
}, Tf = { class: "change-group-header" }, Pf = { class: "change-group-title" }, Rf = { class: "change-list" }, Mf = { class: "node-name" }, Df = {
  key: 0,
  class: "dev-badge"
}, Lf = {
  key: 2,
  class: "change-group"
}, Nf = { class: "change-list" }, Uf = { class: "change-item" }, Af = { class: "node-name" }, Of = {
  key: 3,
  class: "change-group"
}, zf = {
  key: 2,
  class: "status-section"
}, Ff = { class: "section-header-row" }, Vf = {
  key: 0,
  class: "drift-item"
}, Bf = { class: "drift-list" }, Wf = {
  key: 0,
  class: "drift-list-more"
}, Gf = {
  key: 1,
  class: "drift-item"
}, jf = { class: "drift-list" }, Hf = {
  key: 0,
  class: "drift-list-more"
}, Kf = {
  key: 2,
  class: "drift-item"
}, qf = { class: "drift-list" }, Yf = { class: "version-actual" }, Qf = { class: "version-expected" }, Jf = {
  key: 0,
  class: "drift-list-more"
}, Xf = {
  key: 3,
  class: "drift-item"
}, Zf = { class: "repair-action" }, ev = {
  key: 3,
  class: "status-section"
}, tv = { class: "info-box" }, sv = { class: "drift-list" }, ov = {
  key: 0,
  class: "drift-list-more"
}, nv = {
  key: 4,
  class: "status-section"
}, av = { class: "warning-box" }, lv = {
  key: 5,
  class: "empty-state-inline"
}, iv = { class: "modal-actions" }, rv = /* @__PURE__ */ ye({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = _(!1);
    rt(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), $t(() => s.show, (k, p) => {
      console.log("StatusDetailModal show prop changed from", p, "to", k);
    }, { immediate: !0 });
    const a = D(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = D(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.analyzed) == null ? void 0 : w.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = D(() => {
      var k, p, w;
      return ((w = (p = (k = s.status) == null ? void 0 : k.workflows) == null ? void 0 : p.synced) == null ? void 0 : w.filter((x) => {
        var C, N, T;
        const $ = (T = (N = (C = s.status) == null ? void 0 : C.workflows) == null ? void 0 : N.analyzed) == null ? void 0 : T.find((I) => I.name === x);
        return !$ || $.status !== "broken";
      })) || [];
    }), c = D(() => {
      var k, p, w, x, $;
      return (k = s.status) != null && k.workflows ? (((p = s.status.workflows.new) == null ? void 0 : p.length) ?? 0) > 0 || (((w = s.status.workflows.modified) == null ? void 0 : w.length) ?? 0) > 0 || (((x = s.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || ((($ = s.status.workflows.synced) == null ? void 0 : $.length) ?? 0) > 0 : !1;
    }), u = D(() => {
      var p, w, x;
      const k = (p = s.status) == null ? void 0 : p.git_changes;
      return k ? (((w = k.nodes_added) == null ? void 0 : w.length) ?? 0) > 0 || (((x = k.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || k.workflow_changes || k.has_other_changes : !1;
    }), m = D(() => {
      var k, p, w, x, $, C;
      return !c.value && !u.value && ((p = (k = s.status) == null ? void 0 : k.comparison) == null ? void 0 : p.is_synced) && (((w = s.status) == null ? void 0 : w.missing_models_count) ?? 0) === 0 && (((C = ($ = (x = s.status) == null ? void 0 : x.comparison) == null ? void 0 : $.disabled_nodes) == null ? void 0 : C.length) ?? 0) === 0;
    }), f = D(() => {
      var p, w;
      const k = (w = (p = s.status) == null ? void 0 : p.git_changes) == null ? void 0 : w.workflow_changes;
      return k ? typeof k == "number" ? k : Object.keys(k).length : 0;
    });
    function v(k) {
      return typeof k == "string" ? k : k.name;
    }
    function y(k) {
      return typeof k == "object" && k.is_development === !0;
    }
    return (k, p) => {
      var w, x, $, C, N, T, I, M, L, W, E, R, te, se, oe, X, V, Q, ne, re, F, ee;
      return n(), P(Mt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: p[7] || (p[7] = (le) => k.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: p[6] || (p[6] = wt(() => {
            }, ["stop"]))
          }, [
            t("div", Am, [
              p[8] || (p[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: p[0] || (p[0] = (le) => k.$emit("close"))
              }, "✕")
            ]),
            t("div", Om, [
              t("div", zm, [
                S(Kt, { level: "4" }, {
                  default: g(() => [...p[9] || (p[9] = [
                    b("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                S(yt, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", Fm, [
                t("div", Vm, [
                  S(Kt, { level: "4" }, {
                    default: g(() => [...p[10] || (p[10] = [
                      b("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[1] || (p[1] = (le) => k.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", Bm, [
                  t("div", Wm, [
                    p[11] || (p[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Gm, "BROKEN (COMMITTED) (" + d(a.value.length) + ")", 1)
                  ]),
                  t("div", jm, [
                    (n(!0), i(B, null, he(a.value, (le) => (n(), i("div", {
                      key: le.name,
                      class: "workflow-item"
                    }, [
                      t("span", Hm, d(le.name), 1),
                      t("span", Km, d(le.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                l.value.length ? (n(), i("div", qm, [
                  t("div", Ym, [
                    p[12] || (p[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", Qm, "BROKEN (UNCOMMITTED) (" + d(l.value.length) + ")", 1)
                  ]),
                  t("div", Jm, [
                    (n(!0), i(B, null, he(l.value, (le) => (n(), i("div", {
                      key: le.name,
                      class: "workflow-item"
                    }, [
                      t("span", Xm, d(le.name), 1),
                      t("span", Zm, d(le.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (x = (w = e.status.workflows) == null ? void 0 : w.new) != null && x.length ? (n(), i("div", ef, [
                  t("div", tf, [
                    p[13] || (p[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", sf, "NEW (" + d(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", of, [
                    (n(!0), i(B, null, he(e.status.workflows.new, (le) => (n(), i("div", {
                      key: le,
                      class: "workflow-item"
                    }, [
                      t("span", nf, d(le), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (C = ($ = e.status.workflows) == null ? void 0 : $.modified) != null && C.length ? (n(), i("div", af, [
                  t("div", lf, [
                    p[14] || (p[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", rf, "MODIFIED (" + d(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", cf, [
                    (n(!0), i(B, null, he(e.status.workflows.modified, (le) => (n(), i("div", {
                      key: le,
                      class: "workflow-item"
                    }, [
                      t("span", uf, d(le), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (T = (N = e.status.workflows) == null ? void 0 : N.deleted) != null && T.length ? (n(), i("div", df, [
                  t("div", mf, [
                    p[15] || (p[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", ff, "DELETED (" + d(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", vf, [
                    (n(!0), i(B, null, he(e.status.workflows.deleted, (le) => (n(), i("div", {
                      key: le,
                      class: "workflow-item"
                    }, [
                      t("span", pf, d(le), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                r.value.length ? (n(), i("div", gf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: p[2] || (p[2] = (le) => o.value = !o.value)
                  }, [
                    p[16] || (p[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", hf, "SYNCED (" + d(r.value.length) + ")", 1),
                    t("span", yf, d(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", wf, [
                    (n(!0), i(B, null, he(r.value, (le) => (n(), i("div", {
                      key: le,
                      class: "workflow-item"
                    }, [
                      t("span", _f, d(le), 1)
                    ]))), 128))
                  ])) : h("", !0)
                ])) : h("", !0)
              ])) : h("", !0),
              u.value ? (n(), i("div", kf, [
                S(Kt, { level: "4" }, {
                  default: g(() => [...p[17] || (p[17] = [
                    b("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (M = (I = e.status.git_changes) == null ? void 0 : I.nodes_added) != null && M.length ? (n(), i("div", bf, [
                  t("div", $f, [
                    p[18] || (p[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Cf, "NODES ADDED (" + d(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", xf, [
                    (n(!0), i(B, null, he(e.status.git_changes.nodes_added, (le) => (n(), i("div", {
                      key: v(le),
                      class: "change-item"
                    }, [
                      t("span", Sf, d(v(le)), 1),
                      y(le) ? (n(), i("span", If, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (W = (L = e.status.git_changes) == null ? void 0 : L.nodes_removed) != null && W.length ? (n(), i("div", Ef, [
                  t("div", Tf, [
                    p[19] || (p[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", Pf, "NODES REMOVED (" + d(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (n(!0), i(B, null, he(e.status.git_changes.nodes_removed, (le) => (n(), i("div", {
                      key: v(le),
                      class: "change-item"
                    }, [
                      t("span", Mf, d(v(le)), 1),
                      y(le) ? (n(), i("span", Df, "dev")) : h("", !0)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                (E = e.status.git_changes) != null && E.workflow_changes ? (n(), i("div", Lf, [
                  p[20] || (p[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", Nf, [
                    t("div", Uf, [
                      t("span", Af, d(f.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : h("", !0),
                (R = e.status.git_changes) != null && R.has_other_changes ? (n(), i("div", Of, [...p[21] || (p[21] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : h("", !0)
              ])) : h("", !0),
              (te = e.status.comparison) != null && te.is_synced ? h("", !0) : (n(), i("div", zf, [
                t("div", Ff, [
                  S(Kt, { level: "4" }, {
                    default: g(() => [...p[22] || (p[22] = [
                      b("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: p[3] || (p[3] = (le) => k.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                p[26] || (p[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (oe = (se = e.status.comparison) == null ? void 0 : se.missing_nodes) != null && oe.length ? (n(), i("div", Vf, [
                  S(yt, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", Bf, [
                    (n(!0), i(B, null, he(e.status.comparison.missing_nodes.slice(0, 10), (le) => (n(), i("div", {
                      key: le,
                      class: "drift-list-item"
                    }, " - " + d(le), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", Wf, " ... and " + d(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (V = (X = e.status.comparison) == null ? void 0 : X.extra_nodes) != null && V.length ? (n(), i("div", Gf, [
                  S(yt, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", jf, [
                    (n(!0), i(B, null, he(e.status.comparison.extra_nodes.slice(0, 10), (le) => (n(), i("div", {
                      key: le,
                      class: "drift-list-item"
                    }, " - " + d(le), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", Hf, " ... and " + d(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                (ne = (Q = e.status.comparison) == null ? void 0 : Q.version_mismatches) != null && ne.length ? (n(), i("div", Kf, [
                  S(yt, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", qf, [
                    (n(!0), i(B, null, he(e.status.comparison.version_mismatches.slice(0, 10), (le) => (n(), i("div", {
                      key: le.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      b(d(le.name) + ": ", 1),
                      t("span", Yf, d(le.actual), 1),
                      p[23] || (p[23] = b(" → ", -1)),
                      t("span", Qf, d(le.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Jf, " ... and " + d(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : h("", !0)
                  ])
                ])) : h("", !0),
                ((re = e.status.comparison) == null ? void 0 : re.packages_in_sync) === !1 ? (n(), i("div", Xf, [
                  S(yt, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : h("", !0),
                t("div", Zf, [
                  S(pe, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: p[4] || (p[4] = (le) => k.$emit("repair"))
                  }, {
                    default: g(() => [...p[24] || (p[24] = [
                      b(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  p[25] || (p[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (ee = (F = e.status.comparison) == null ? void 0 : F.disabled_nodes) != null && ee.length ? (n(), i("div", ev, [
                S(Kt, { level: "4" }, {
                  default: g(() => [...p[27] || (p[27] = [
                    b("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", tv, [
                  p[28] || (p[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, d(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", sv, [
                  (n(!0), i(B, null, he(e.status.comparison.disabled_nodes.slice(0, 10), (le) => (n(), i("div", {
                    key: le,
                    class: "drift-list-item"
                  }, " • " + d(le), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", ov, " ... and " + d(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : h("", !0)
                ])
              ])) : h("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", nv, [
                S(Kt, { level: "4" }, {
                  default: g(() => [...p[29] || (p[29] = [
                    b("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", av, [
                  p[30] || (p[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                p[31] || (p[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : h("", !0),
              m.value ? (n(), i("div", lv, [...p[32] || (p[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : h("", !0)
            ]),
            t("div", iv, [
              S(pe, {
                variant: "secondary",
                onClick: p[5] || (p[5] = (le) => k.$emit("close"))
              }, {
                default: g(() => [...p[33] || (p[33] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), cv = /* @__PURE__ */ _e(rv, [["__scopeId", "data-v-e2b37122"]]), uv = { class: "health-section-header" }, dv = { class: "suggestions-content" }, mv = { class: "suggestions-text" }, fv = { style: { "margin-top": "var(--cg-space-3)" } }, vv = {
  key: 1,
  class: "no-issues-text"
}, pv = /* @__PURE__ */ ye({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = _(!1), r = _(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, f("view-workflows");
    }
    function m() {
      l.value = !1, f("view-nodes");
    }
    const f = o, v = _(!1), y = _(!1);
    function k() {
      y.value = !0, f("repair-environment");
    }
    function p() {
      y.value = !1;
    }
    function w() {
      l.value = !1;
    }
    const x = D(() => {
      const xe = a.status.workflows.analyzed || [], A = xe.filter(
        (Y) => Y.unresolved_models_count > 0 || Y.ambiguous_models_count > 0
      );
      return A.length === 0 && a.status.missing_models_count > 0 ? xe.filter((Y) => Y.sync_state === "synced") : A;
    });
    function $() {
      const xe = x.value;
      xe.length !== 0 && (v.value = !0, f("repair-missing-models", xe.map((A) => A.name)));
    }
    function C() {
      v.value = !1;
    }
    s({ resetRepairingState: C, resetRepairingEnvironmentState: p, closeDetailModal: w });
    const N = D(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), T = D(() => a.status.has_changes), I = D(() => {
      const xe = a.status.git_changes;
      return xe.nodes_added.length > 0 || xe.nodes_removed.length > 0 || xe.workflow_changes;
    }), M = D(() => a.status.has_changes || N.value), L = D(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), W = D(() => a.status.git_changes.has_other_changes), E = D(() => {
      var xe;
      return ((xe = a.status.workflows.analyzed) == null ? void 0 : xe.filter((A) => A.status === "broken")) || [];
    }), R = D(() => {
      var xe;
      return ((xe = a.status.workflows.analyzed) == null ? void 0 : xe.filter(
        (A) => A.has_path_sync_issues && !A.has_issues
      )) || [];
    }), te = D(() => E.value.length > 0);
    function se(xe) {
      const A = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const Y of A) {
        const z = xe.match(Y);
        if (z != null && z[1])
          return z[1];
      }
      return null;
    }
    function oe(xe) {
      const A = xe.map(se).filter((Y) => !!Y);
      return [...new Set(A)];
    }
    function X(xe) {
      if (xe.length === 0) return "";
      if (xe.length === 1) return ` (>= ${xe[0]})`;
      const A = xe.slice(0, 2).map((z) => `>= ${z}`).join(", "), Y = xe.length > 2;
      return ` (${A}${Y ? ", ..." : ""})`;
    }
    function V(xe) {
      return xe.replace(/uninstallable node mappings?/gi, (A) => A.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(xe) {
      const A = V(xe.issue_summary || "Has issues"), Y = /(?:>=|v?\d+\.\d+)/i.test(A), z = oe(xe.version_gated_guidance || []);
      return (xe.nodes_version_gated_count || 0) > 0 && z.length > 0 && !Y ? `${xe.name} — ${A} (needs ComfyUI ${z.map((O) => `>= ${O}`).join(", ")})` : `${xe.name} — ${A}`;
    }
    const ne = D(() => E.value.reduce(
      (xe, A) => xe + (A.nodes_version_gated_count || 0),
      0
    )), re = D(() => {
      const xe = E.value.flatMap(
        (A) => oe(A.version_gated_guidance || [])
      );
      return [...new Set(xe)];
    }), F = D(() => E.value.reduce(
      (xe, A) => xe + (A.nodes_uninstallable_count || 0),
      0
    )), ee = D(() => {
      const xe = [];
      return ne.value > 0 && xe.push(
        `${ne.value} require newer ComfyUI${X(re.value)}`
      ), F.value > 0 && xe.push(`${F.value} need community packages`), xe.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${xe.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), le = D(() => te.value || R.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), Ae = D(() => {
      const xe = [];
      return a.status.workflows.new.length > 0 && xe.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && xe.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && xe.push(`${a.status.workflows.deleted.length} deleted`), xe.length > 0 ? `${xe.join(", ")} workflow${xe.length === 1 && !xe[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), qe = D(() => {
      var Y, z;
      const xe = [], A = a.status.comparison;
      return (Y = A.missing_nodes) != null && Y.length && xe.push(`${A.missing_nodes.length} missing node${A.missing_nodes.length === 1 ? "" : "s"}`), (z = A.extra_nodes) != null && z.length && xe.push(`${A.extra_nodes.length} untracked node${A.extra_nodes.length === 1 ? "" : "s"}`), xe.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${xe.join(" and ")}.`;
    }), je = D(() => {
      var Y, z;
      const xe = [], A = a.status.comparison;
      return (Y = A.extra_nodes) != null && Y.length && (A.extra_nodes.slice(0, 3).forEach((O) => {
        xe.push(`Untracked: ${O}`);
      }), A.extra_nodes.length > 3 && xe.push(`...and ${A.extra_nodes.length - 3} more untracked`)), (z = A.missing_nodes) != null && z.length && (A.missing_nodes.slice(0, 3).forEach((O) => {
        xe.push(`Missing: ${O}`);
      }), A.missing_nodes.length > 3 && xe.push(`...and ${A.missing_nodes.length - 3} more missing`)), xe;
    });
    return (xe, A) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, { title: "STATUS" })
        ]),
        content: g(() => [
          a.setupState === "no_workspace" ? (n(), P(ls, {
            key: 0,
            severity: "info",
            icon: "🚀",
            title: "No ComfyGit workspace detected",
            description: "Set up a workspace to manage your ComfyUI environments, workflows, and models with version control."
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: A[0] || (A[0] = (Y) => xe.$emit("start-setup"))
              }, {
                default: g(() => [...A[13] || (A[13] = [
                  b(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), P(ls, {
            key: 1,
            severity: "warning",
            icon: "⚠",
            title: "Not in a managed environment",
            description: "You're running from an unmanaged ComfyUI installation. Switch to a managed environment to use ComfyGit features."
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: A[1] || (A[1] = (Y) => xe.$emit("view-environments"))
              }, {
                default: g(() => [...A[14] || (A[14] = [
                  b(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), P(ls, {
            key: 2,
            severity: "info",
            icon: "🏗",
            title: "Workspace ready - create your first environment",
            description: "Your workspace is set up. Create a managed environment to start using ComfyGit."
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: A[2] || (A[2] = (Y) => xe.$emit("create-environment"))
              }, {
                default: g(() => [...A[15] || (A[15] = [
                  b(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: A[4] || (A[4] = (Y) => r.value = !0),
            onMouseleave: A[5] || (A[5] = (Y) => r.value = !1)
          }, [
            t("div", uv, [
              S(Kt, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: g(() => [...A[16] || (A[16] = [
                  b(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              S(ld, { name: "fade" }, {
                default: g(() => [
                  r.value ? (n(), P(pe, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: g(() => [...A[17] || (A[17] = [
                      b(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                _: 1
              })
            ]),
            S(fm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, io({
              left: g(() => [
                e.status.workflows.new.length ? (n(), P(hs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.modified.length ? (n(), P(hs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : h("", !0),
                e.status.workflows.deleted.length ? (n(), P(hs, {
                  key: 2,
                  icon: "●",
                  count: e.status.workflows.deleted.length,
                  label: "deleted",
                  variant: "deleted"
                }, null, 8, ["count"])) : h("", !0),
                S(hs, {
                  icon: "✓",
                  count: e.status.workflows.synced.length,
                  label: "synced",
                  variant: "synced",
                  separator: N.value
                }, null, 8, ["count", "separator"])
              ]),
              right: g(() => [
                e.status.git_changes.nodes_added.length ? (n(), P(hs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), P(hs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : h("", !0),
                e.status.git_changes.workflow_changes ? (n(), P(hs, {
                  key: 2,
                  icon: "●",
                  count: L.value,
                  label: L.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : h("", !0),
                W.value ? (n(), P(hs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : h("", !0),
                T.value && !I.value && !W.value ? (n(), P(hs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : h("", !0),
                T.value ? h("", !0) : (n(), P(hs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              M.value ? {
                name: "footer",
                fn: g(() => [
                  A[19] || (A[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", dv, [
                    t("span", mv, d(Ae.value), 1),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: A[3] || (A[3] = (Y) => xe.$emit("commit-changes"))
                    }, {
                      default: g(() => [...A[18] || (A[18] = [
                        b(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (n(), P(ls, {
            key: 3,
            severity: "error",
            icon: "⚠",
            title: "You are in detached HEAD state",
            description: "Any commits you make will not be saved to a branch! Create a branch to preserve your work.",
            style: { "margin-top": "var(--cg-space-3)" }
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: A[6] || (A[6] = (Y) => xe.$emit("create-branch"))
              }, {
                default: g(() => [...A[20] || (A[20] = [
                  b(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : h("", !0),
          t("div", fv, [
            S(Kt, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: g(() => [...A[21] || (A[21] = [
                b(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            le.value ? (n(), i(B, { key: 0 }, [
              E.value.length > 0 ? (n(), P(ls, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${E.value.length} workflow${E.value.length === 1 ? "" : "s"} can't run`,
                description: ee.value,
                items: E.value.map(Q)
              }, {
                actions: g(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[7] || (A[7] = (Y) => xe.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[22] || (A[22] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : h("", !0),
              R.value.length > 0 ? (n(), P(ls, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${R.value.length} workflow${R.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: R.value.map((Y) => `${Y.name} — ${Y.models_needing_path_sync_count} model path${Y.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: g(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[8] || (A[8] = (Y) => xe.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[23] || (A[23] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : h("", !0),
              e.status.missing_models_count > 0 && !te.value ? (n(), P(ls, {
                key: 2,
                severity: "warning",
                icon: "⚠",
                title: `${e.status.missing_models_count} missing model${e.status.missing_models_count === 1 ? "" : "s"}`,
                description: "Some workflows reference models that are not found in the workspace index. This can happen after updating the model index."
              }, {
                actions: g(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    disabled: v.value,
                    onClick: $
                  }, {
                    default: g(() => [
                      b(d(v.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  S(pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: A[9] || (A[9] = (Y) => xe.$emit("view-workflows"))
                  }, {
                    default: g(() => [...A[24] || (A[24] = [
                      b(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : h("", !0),
              e.status.comparison.is_synced ? h("", !0) : (n(), P(ls, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: qe.value,
                items: je.value
              }, {
                actions: g(() => [
                  S(pe, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: g(() => [...A[25] || (A[25] = [
                      b(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[10] || (A[10] = (Y) => xe.$emit("view-nodes"))
                  }, {
                    default: g(() => [...A[26] || (A[26] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), P(ls, {
                key: 4,
                severity: "warning",
                icon: "⚠",
                title: "Legacy ComfyUI-Manager detected",
                description: "The old ComfyUI-Manager extension is installed alongside ComfyGit. For proper environment tracking, use ComfyGit's built-in Manager instead and remove the legacy extension."
              }, {
                actions: g(() => [
                  S(pe, {
                    variant: "primary",
                    size: "sm",
                    onClick: A[11] || (A[11] = (Y) => xe.$emit("view-nodes"))
                  }, {
                    default: g(() => [...A[27] || (A[27] = [
                      b(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : h("", !0)
            ], 64)) : M.value ? (n(), i("span", vv, "No issues")) : (n(), P(fs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      S(cv, {
        show: l.value,
        status: e.status,
        "is-repairing": y.value,
        onClose: A[12] || (A[12] = (Y) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: m,
        onRepair: k
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), gv = /* @__PURE__ */ _e(pv, [["__scopeId", "data-v-df52ba90"]]), hv = ["type", "value", "placeholder", "disabled"], yv = /* @__PURE__ */ ye({
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
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, r = _(null);
    function c(u) {
      const m = u.target.value;
      l("update:modelValue", m);
    }
    return rt(() => {
      a.autoFocus && r.value && r.value.focus();
    }), s({
      focus: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.focus();
      },
      blur: () => {
        var u;
        return (u = r.value) == null ? void 0 : u.blur();
      }
    }), (u, m) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Re(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        m[0] || (m[0] = ss((f) => u.$emit("enter"), ["enter"])),
        m[1] || (m[1] = ss((f) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: m[2] || (m[2] = (f) => u.$emit("focus")),
      onBlur: m[3] || (m[3] = (f) => u.$emit("blur"))
    }, null, 42, hv));
  }
}), Zo = /* @__PURE__ */ _e(yv, [["__scopeId", "data-v-0380d08f"]]), wv = { class: "branch-create-form" }, _v = { class: "form-actions" }, kv = /* @__PURE__ */ ye({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = D(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, m) => (n(), i("div", wv, [
      S(Zo, {
        modelValue: a.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => a.value = f),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", _v, [
        S(pe, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: g(() => [...m[1] || (m[1] = [
            b(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        S(pe, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: g(() => [...m[2] || (m[2] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), bv = /* @__PURE__ */ _e(kv, [["__scopeId", "data-v-7c500394"]]), $v = { class: "branch-list-item__indicator" }, Cv = { class: "branch-list-item__name" }, xv = {
  key: 0,
  class: "branch-list-item__actions"
}, Sv = {
  key: 0,
  class: "branch-list-item__current-label"
}, Iv = /* @__PURE__ */ ye({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", $v, d(e.isCurrent ? "●" : "○"), 1),
      t("span", Cv, d(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", xv, [
        at(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", Sv, " current ")) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Ev = /* @__PURE__ */ _e(Iv, [["__scopeId", "data-v-c6581a24"]]), PD = qs({
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
  ...Array(12).fill(null).map((e, s) => ({
    name: `synced-workflow-${s + 1}.json`,
    status: "synced",
    missing_nodes: 0,
    missing_models: 0,
    node_count: 5 + s,
    model_count: 1 + s % 3,
    sync_state: "synced"
  }))
], MD = {
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
}, Tv = [
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
], DD = [
  ...Tv,
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
function ko() {
  return !1;
}
function Pv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ut() {
  const e = _(!1), s = _(null);
  async function o(K, $e) {
    var Tt;
    if (!((Tt = window.app) != null && Tt.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi(K, $e);
    if (!Ve.ok) {
      const as = await Ve.json().catch(() => ({}));
      throw new Error(as.error || as.message || `Request failed: ${Ve.status}`);
    }
    const gt = await Ve.text();
    if (gt)
      return JSON.parse(gt);
  }
  async function a(K = !1) {
    return o(K ? "/v2/comfygit/status?refresh=true" : "/v2/comfygit/status");
  }
  async function l(K, $e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: K, allow_issues: $e })
    });
  }
  async function r(K = 10, $e = 0) {
    return o(`/v2/comfygit/log?limit=${K}&offset=${$e}`);
  }
  async function c(K, $e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(K)}&limit=${$e}`);
  }
  async function u(K) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function m() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function f() {
    return o("/v2/comfygit/deploy/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function v(K) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K, force: !0 })
    });
  }
  async function y() {
    return o("/v2/comfygit/branches");
  }
  async function k(K) {
    return o(`/v2/comfygit/commit/${K}`);
  }
  async function p(K, $e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: K, force: $e })
    });
  }
  async function w(K, $e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, start_point: $e })
    });
  }
  async function x(K, $e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: K, force: $e })
    });
  }
  async function $(K, $e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(K)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: $e })
    });
  }
  async function C() {
    try {
      return await o("/v2/comfygit/environments");
    } catch {
      try {
        const K = await a();
        return {
          environments: [{
            name: K.environment,
            is_current: !0,
            path: "~/comfygit/environments/" + K.environment,
            created_at: (/* @__PURE__ */ new Date()).toISOString(),
            workflow_count: K.workflows.total,
            node_count: 0,
            model_count: 0,
            current_branch: K.branch
          }],
          current: K.environment,
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
  async function N() {
    return (await C()).environments;
  }
  async function T(K) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(K)}`);
    } catch {
      return null;
    }
  }
  async function I(K, $e) {
    const Ve = { target_env: K };
    return $e && (Ve.workspace_path = $e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Ve)
    });
  }
  async function M() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function L(K) {
    return o("/v2/workspace/environments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function W() {
    return o("/v2/workspace/environments/create_status");
  }
  async function E(K = 20) {
    return o(`/v2/workspace/comfyui_releases?limit=${K}`);
  }
  async function R(K) {
    return o(`/v2/workspace/environments/${K}`, {
      method: "DELETE"
    });
  }
  async function te(K = !1) {
    try {
      return o(K ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const $e = await a(K), Ve = [];
      return $e.workflows.new.forEach((gt) => {
        Ve.push({
          name: gt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: gt
        });
      }), $e.workflows.modified.forEach((gt) => {
        Ve.push({
          name: gt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: gt
        });
      }), $e.workflows.synced.forEach((gt) => {
        Ve.push({
          name: gt,
          status: "synced",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: gt
        });
      }), Ve;
    }
  }
  async function se(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/details`);
  }
  async function oe(K) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/resolve`, {
      method: "POST"
    });
  }
  async function X(K, $e, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: $e, install_models: Ve })
    });
  }
  async function V(K, $e, Ve) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(K)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: $e, importance: Ve })
    });
  }
  async function Q() {
    try {
      return o("/v2/comfygit/models/environment");
    } catch {
      return [];
    }
  }
  async function ne() {
    try {
      return o("/v2/workspace/models");
    } catch {
      return [];
    }
  }
  async function re(K) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(K)}`);
  }
  async function F(K) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function ee(K, $e) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function le(K, $e) {
    return o(`/v2/workspace/models/${K}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: $e })
    });
  }
  async function Ae(K) {
    return o(`/v2/workspace/models/${K}`, {
      method: "DELETE"
    });
  }
  async function qe(K) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function je() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function xe() {
    return o("/v2/workspace/models/directory");
  }
  async function A(K) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function Y(K) {
    const $e = new URLSearchParams({ url: K });
    return o(`/v2/workspace/huggingface/repo-info?${$e}`);
  }
  async function z() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function O(K, $e = 10) {
    const Ve = new URLSearchParams({ query: K, limit: String($e) });
    return o(`/v2/workspace/huggingface/search?${Ve}`);
  }
  async function ie(K) {
    try {
      const $e = K ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(K)}` : "/v2/comfygit/config";
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
  async function Te(K, $e) {
    const Ve = $e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent($e)}` : "/v2/comfygit/config";
    return o(Ve, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Ye(K, $e) {
    try {
      const Ve = new URLSearchParams();
      return K && Ve.append("level", K), $e && Ve.append("lines", $e.toString()), o(`/v2/comfygit/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function U(K, $e) {
    try {
      const Ve = new URLSearchParams();
      return K && Ve.append("level", K), $e && Ve.append("lines", $e.toString()), o(`/v2/workspace/debug/logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function H() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function ce() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function Ee(K, $e) {
    try {
      const Ve = new URLSearchParams();
      return K && Ve.append("level", K), $e && Ve.append("lines", $e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${Ve}`);
    } catch {
      return [];
    }
  }
  async function ke() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function be(K) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: K })
    });
  }
  async function De() {
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
  async function we(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/track-dev`, {
      method: "POST"
    });
  }
  async function Pe(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/install`, {
      method: "POST"
    });
  }
  async function fe(K, $e) {
    var As, Os, No, Uo;
    const Ve = Pv(), gt = ((Os = (As = window.app) == null ? void 0 : As.api) == null ? void 0 : Os.clientId) ?? ((Uo = (No = window.app) == null ? void 0 : No.api) == null ? void 0 : Uo.initialClientId) ?? "comfygit-panel", Tt = {
      id: K.id,
      version: K.version || K.selected_version || "latest",
      selected_version: K.selected_version || "latest",
      mode: K.mode || "remote",
      channel: K.channel || "default"
    };
    return K.install_source && (Tt.install_source = K.install_source), K.install_source === "git" && K.repository && (Tt.repository = K.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Tt,
        ui_id: Ve,
        client_id: gt
      })
    }), console.log("[ComfyGit] Task queued with ui_id:", Ve, "for package:", K.id), $e != null && $e.beforeQueueStart && await $e.beforeQueueStart(Ve), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: Ve };
  }
  async function Be(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}/update`, {
      method: "POST"
    });
  }
  async function Ue(K) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ve() {
    try {
      return o("/v2/comfygit/remotes");
    } catch {
      return { remotes: [] };
    }
  }
  async function j(K, $e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: K, url: $e })
    });
  }
  async function Oe(K) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function Ie(K, $e, Ve) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: $e, push_url: Ve })
    });
  }
  async function Ce(K, $e) {
    const Ve = {};
    return $e && (Ve["X-Git-Auth-Token"] = $e), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/fetch`, {
      method: "POST",
      headers: Ve
    });
  }
  async function Le(K) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/status`);
    } catch {
      return null;
    }
  }
  async function Me(K = "skip", $e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: K,
        remove_extra_nodes: $e
      })
    });
  }
  async function q(K, $e) {
    const Ve = $e ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/pull-preview`;
    return o(Ve);
  }
  async function me(K, $e = {}) {
    const Ve = { "Content-Type": "application/json" };
    return $e.authToken && (Ve["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/pull`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({
        model_strategy: $e.modelStrategy || "skip",
        force: $e.force || !1,
        resolutions: $e.resolutions
      })
    });
  }
  async function ge(K, $e) {
    const Ve = $e ? `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview?branch=${encodeURIComponent($e)}` : `/v2/comfygit/remotes/${encodeURIComponent(K)}/push-preview`;
    return o(Ve);
  }
  async function ze(K, $e = {}) {
    const Ve = { "Content-Type": "application/json" };
    return $e.authToken && (Ve["X-Git-Auth-Token"] = $e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/push`, {
      method: "POST",
      headers: Ve,
      body: JSON.stringify({ force: $e.force || !1 })
    });
  }
  async function Fe(K, $e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(K)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: $e })
    });
  }
  async function et(K) {
    const $e = {
      success: 0,
      failed: []
    };
    for (const Ve of K)
      try {
        await oe(Ve), $e.success++;
      } catch (gt) {
        $e.failed.push({
          name: Ve,
          error: gt instanceof Error ? gt.message : "Unknown error"
        });
      }
    return $e;
  }
  async function ot(K) {
    var gt;
    const $e = new FormData();
    if ($e.append("file", K), !((gt = window.app) != null && gt.api))
      throw new Error("ComfyUI API not available");
    const Ve = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: $e
      // Don't set Content-Type - browser will set multipart boundary automatically
    });
    if (!Ve.ok) {
      const Tt = await Ve.json().catch(() => ({}));
      throw new Error(Tt.error || `Preview failed: ${Ve.status}`);
    }
    return Ve.json();
  }
  async function Ze(K) {
    return o(
      `/v2/workspace/environments/validate?name=${encodeURIComponent(K)}`
    );
  }
  async function xt(K, $e, Ve, gt) {
    var As;
    const Tt = new FormData();
    if (Tt.append("file", K), Tt.append("name", $e), Tt.append("model_strategy", Ve), Tt.append("torch_backend", gt), !((As = window.app) != null && As.api))
      throw new Error("ComfyUI API not available");
    const as = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Tt
    });
    if (!as.ok) {
      const Os = await as.json().catch(() => ({}));
      throw new Error(Os.message || Os.error || `Import failed: ${as.status}`);
    }
    return as.json();
  }
  async function _t() {
    return o("/v2/workspace/import/status");
  }
  async function ae(K) {
    return o("/v2/workspace/import/preview/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ git_url: K })
    });
  }
  async function G(K, $e, Ve, gt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: K,
        name: $e,
        model_strategy: Ve,
        torch_backend: gt
      })
    });
  }
  async function de() {
    return o("/v2/setup/status");
  }
  async function Ge() {
    return o("/v2/comfygit/update-check");
  }
  async function nt() {
    return o("/v2/comfygit/update", { method: "POST" });
  }
  async function Se(K) {
    return o("/v2/setup/initialize_workspace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function Z() {
    return o("/v2/setup/initialize_status");
  }
  async function He(K) {
    return o("/v2/setup/validate_path", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function bt() {
    return o("/v2/comfygit/deploy/summary");
  }
  async function St() {
    return o("/v2/comfygit/deploy/runpod/data-centers");
  }
  async function Jt(K, $e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: K, save_key: $e })
    });
  }
  async function Cs() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function Dt(K) {
    const $e = K ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(K)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o($e);
  }
  async function Ke(K) {
    return o("/v2/comfygit/deploy/runpod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ns() {
    return o("/v2/comfygit/deploy/runpod/pods");
  }
  async function ps(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ro(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/stop`, {
      method: "POST"
    });
  }
  async function co(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/start`, {
      method: "POST"
    });
  }
  async function uo(K) {
    return o(`/v2/comfygit/deploy/runpod/${encodeURIComponent(K)}/status`);
  }
  async function Qs(K) {
    return o("/v2/comfygit/deploy/package", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: K })
    });
  }
  async function mo(K = !1) {
    return o(K ? "/v2/comfygit/deploy/runpod/key?verify=true" : "/v2/comfygit/deploy/runpod/key");
  }
  async function fo() {
    return o("/v2/comfygit/deploy/runpod/key", {
      method: "DELETE"
    });
  }
  async function vo() {
    return o("/v2/comfygit/deploy/custom/workers");
  }
  async function po(K) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function go(K) {
    return o(`/v2/comfygit/deploy/custom/workers/${encodeURIComponent(K)}`, {
      method: "DELETE"
    });
  }
  async function ca(K) {
    return o("/v2/comfygit/deploy/custom/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(K)
    });
  }
  async function ua() {
    return o("/v2/comfygit/deploy/custom/scan", {
      method: "POST"
    });
  }
  async function da(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/info`);
  }
  async function yn(K) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`);
  }
  async function ue(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify($e)
    });
  }
  async function J(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}/start`, {
      method: "POST"
    });
  }
  async function We(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}/stop`, {
      method: "POST"
    });
  }
  async function Je(K, $e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(K)}/instances/${encodeURIComponent($e)}`, {
      method: "DELETE"
    });
  }
  async function ft(K) {
    return o("/v2/comfygit/deploy/test-git-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: K })
    });
  }
  return {
    isLoading: e,
    error: s,
    getStatus: a,
    commit: l,
    getHistory: r,
    getBranchHistory: c,
    exportEnv: u,
    validateExport: m,
    validateDeploy: f,
    exportEnvWithForce: v,
    // Git Operations
    getBranches: y,
    getCommitDetail: k,
    checkout: p,
    createBranch: w,
    switchBranch: x,
    deleteBranch: $,
    // Environment Management
    listEnvironments: C,
    getEnvironments: N,
    getEnvironmentDetails: T,
    switchEnvironment: I,
    getSwitchProgress: M,
    createEnvironment: L,
    getCreateProgress: W,
    getComfyUIReleases: E,
    deleteEnvironment: R,
    // Workflow Management
    getWorkflows: te,
    getWorkflowDetails: se,
    resolveWorkflow: oe,
    installWorkflowDeps: X,
    setModelImportance: V,
    // Model Management
    getEnvironmentModels: Q,
    getWorkspaceModels: ne,
    getModelDetails: re,
    openFileLocation: F,
    addModelSource: ee,
    removeModelSource: le,
    deleteModel: Ae,
    downloadModel: qe,
    scanWorkspaceModels: je,
    getModelsDirectory: xe,
    setModelsDirectory: A,
    getHuggingFaceRepoInfo: Y,
    getModelsSubdirectories: z,
    searchHuggingFaceRepos: O,
    // Settings
    getConfig: ie,
    updateConfig: Te,
    // Debug/Logs
    getEnvironmentLogs: Ye,
    getWorkspaceLogs: U,
    getEnvironmentLogPath: H,
    getWorkspaceLogPath: ce,
    getOrchestratorLogs: Ee,
    getOrchestratorLogPath: ke,
    openFile: be,
    // Node Management
    getNodes: De,
    trackNodeAsDev: we,
    installNode: Pe,
    queueNodeInstall: fe,
    updateNode: Be,
    uninstallNode: Ue,
    // Git Remotes
    getRemotes: ve,
    addRemote: j,
    removeRemote: Oe,
    updateRemoteUrl: Ie,
    fetchRemote: Ce,
    getRemoteSyncStatus: Le,
    // Push/Pull
    getPullPreview: q,
    pullFromRemote: me,
    getPushPreview: ge,
    pushToRemote: ze,
    validateMerge: Fe,
    // Environment Sync
    syncEnvironmentManually: Me,
    // Workflow Repair
    repairWorkflowModels: et,
    // Import Operations
    previewTarballImport: ot,
    previewGitImport: ae,
    validateEnvironmentName: Ze,
    executeImport: xt,
    executeGitImport: G,
    getImportProgress: _t,
    // First-Time Setup
    getSetupStatus: de,
    // Manager Update Notice
    getUpdateCheck: Ge,
    updateManager: nt,
    initializeWorkspace: Se,
    getInitializeProgress: Z,
    validatePath: He,
    // Deploy Operations
    getDeploySummary: bt,
    getDataCenters: St,
    testRunPodConnection: Jt,
    getNetworkVolumes: Cs,
    getRunPodGpuTypes: Dt,
    deployToRunPod: Ke,
    getRunPodPods: ns,
    terminateRunPodPod: ps,
    stopRunPodPod: ro,
    startRunPodPod: co,
    getDeploymentStatus: uo,
    exportDeployPackage: Qs,
    getStoredRunPodKey: mo,
    clearRunPodKey: fo,
    // Custom Worker Operations
    getCustomWorkers: vo,
    addCustomWorker: po,
    removeCustomWorker: go,
    testWorkerConnection: ca,
    scanForWorkers: ua,
    getWorkerSystemInfo: da,
    getWorkerInstances: yn,
    deployToWorker: ue,
    startWorkerInstance: J,
    stopWorkerInstance: We,
    terminateWorkerInstance: Je,
    // Git Authentication
    testGitAuth: ft
  };
}
const Rv = { class: "base-modal-header" }, Mv = {
  key: 0,
  class: "base-modal-title"
}, Dv = { class: "base-modal-body" }, Lv = {
  key: 0,
  class: "base-modal-loading"
}, Nv = {
  key: 1,
  class: "base-modal-error"
}, Uv = {
  key: 0,
  class: "base-modal-footer"
}, Av = /* @__PURE__ */ ye({
  __name: "BaseModal",
  props: {
    title: {},
    size: { default: "md" },
    showCloseButton: { type: Boolean, default: !0 },
    closeOnOverlayClick: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !1 },
    error: {},
    fixedHeight: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && a("close");
    }
    return rt(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Ys(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), P(Mt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        onClick: l
      }, [
        t("div", {
          class: Re(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = wt(() => {
          }, ["stop"]))
        }, [
          t("div", Rv, [
            at(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Mv, d(e.title), 1)) : h("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (m) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : h("", !0)
          ]),
          t("div", Dv, [
            e.loading ? (n(), i("div", Lv, "Loading...")) : e.error ? (n(), i("div", Nv, d(e.error), 1)) : at(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Uv, [
            at(c.$slots, "footer", {}, void 0)
          ])) : h("", !0)
        ], 2)
      ])
    ]));
  }
}), kt = /* @__PURE__ */ _e(Av, [["__scopeId", "data-v-8dab1081"]]), Ov = ["type", "disabled"], zv = {
  key: 0,
  class: "spinner"
}, Fv = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Re(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", zv)) : h("", !0),
      at(s.$slots, "default", {}, void 0)
    ], 10, Ov));
  }
}), Ne = /* @__PURE__ */ _e(Fv, [["__scopeId", "data-v-f3452606"]]), Vv = { class: "commit-list" }, Bv = /* @__PURE__ */ ye({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", Vv, [
      at(s.$slots, "default", {}, void 0)
    ]));
  }
}), Dr = /* @__PURE__ */ _e(Bv, [["__scopeId", "data-v-8c5ee761"]]), Wv = { class: "commit-hash" }, Gv = /* @__PURE__ */ ye({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = D(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", Wv, d(o.value), 1));
  }
}), Lr = /* @__PURE__ */ _e(Gv, [["__scopeId", "data-v-7c333cc6"]]), jv = { class: "commit-message" }, Hv = { class: "commit-date" }, Kv = /* @__PURE__ */ ye({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l() {
      o.clickable && a("click");
    }
    return (r, c) => (n(), i("div", {
      class: Re(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      S(Lr, { hash: e.hash }, null, 8, ["hash"]),
      t("span", jv, d(e.message), 1),
      t("span", Hv, d(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = wt(() => {
        }, ["stop"]))
      }, [
        at(r.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Nr = /* @__PURE__ */ _e(Kv, [["__scopeId", "data-v-dd7c621b"]]), qv = { class: "header-info" }, Yv = { class: "branch-name" }, Qv = {
  key: 0,
  class: "current-badge"
}, Jv = { class: "branch-meta" }, Xv = { key: 0 }, Zv = {
  key: 0,
  class: "meta-note"
}, ep = {
  key: 0,
  class: "loading"
}, tp = {
  key: 1,
  class: "empty-state"
}, sp = /* @__PURE__ */ ye({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ut(), a = _([]), l = _(!1), r = _(!0);
    return rt(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), P(kt, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (m) => c.$emit("close"))
    }, {
      header: g(() => [
        t("div", qv, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", Yv, d(e.branchName), 1),
          e.isCurrent ? (n(), i("span", Qv, "CURRENT")) : h("", !0)
        ]),
        S(Ne, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (m) => c.$emit("close"))
        }, {
          default: g(() => [...u[5] || (u[5] = [
            t("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ]),
      body: g(() => [
        t("div", Jv, [
          r.value ? (n(), i("span", Xv, "Loading...")) : (n(), i(B, { key: 1 }, [
            t("span", null, d(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", Zv, "(showing first " + d(a.value.length) + ")", 1)) : h("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", ep, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", tp, " No commits found on this branch ")) : (n(), P(Dr, {
          key: 2,
          class: "branch-commits"
        }, {
          default: g(() => [
            (n(!0), i(B, null, he(a.value, (m) => (n(), P(Nr, {
              key: m.hash,
              hash: m.short_hash || m.hash.slice(0, 7),
              message: m.message,
              "relative-date": m.date_relative || m.relative_date || "",
              clickable: !1
            }, null, 8, ["hash", "message", "relative-date"]))), 128))
          ]),
          _: 1
        }))
      ]),
      footer: g(() => [
        e.isCurrent ? h("", !0) : (n(), P(pe, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (m) => c.$emit("delete", e.branchName))
        }, {
          default: g(() => [...u[6] || (u[6] = [
            b(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? h("", !0) : (n(), P(Ne, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (m) => c.$emit("switch", e.branchName))
        }, {
          default: g(() => [...u[7] || (u[7] = [
            b(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), op = /* @__PURE__ */ _e(sp, [["__scopeId", "data-v-2e5437cc"]]), np = {
  key: 2,
  class: "branch-list"
}, ap = /* @__PURE__ */ ye({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {}
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1), l = _(null);
    function r(v) {
      o("create", v), c();
    }
    function c() {
      a.value = !1;
    }
    function u(v) {
      l.value = v;
    }
    function m(v) {
      l.value = null, o("delete", v);
    }
    function f(v) {
      l.value = null, o("switch", v);
    }
    return (v, y) => (n(), P(Wt, null, {
      header: g(() => [
        S(Gt, { title: "BRANCHES" }, {
          actions: g(() => [
            a.value ? h("", !0) : (n(), P(pe, {
              key: 0,
              variant: "primary",
              size: "sm",
              onClick: y[0] || (y[0] = (k) => a.value = !0)
            }, {
              default: g(() => [...y[2] || (y[2] = [
                b(" + Create Branch ", -1)
              ])]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]),
      content: g(() => [
        a.value ? (n(), P(bv, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : h("", !0),
        e.branches.length === 0 ? (n(), P(fs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", np, [
          (n(!0), i(B, null, he(e.branches, (k) => (n(), P(Ev, {
            key: k.name,
            "branch-name": k.name,
            "is-current": k.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (p) => u(k)
          }, {
            actions: g(() => [
              k.is_current ? h("", !0) : (n(), P(pe, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: wt((p) => o("switch", k.name), ["stop"])
              }, {
                default: g(() => [...y[3] || (y[3] = [
                  b(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), P(op, {
          key: 3,
          "branch-name": l.value.name,
          "is-current": l.value.is_current,
          onClose: y[1] || (y[1] = (k) => l.value = null),
          onDelete: m,
          onSwitch: f
        }, null, 8, ["branch-name", "is-current"])) : h("", !0)
      ]),
      _: 1
    }));
  }
}), lp = /* @__PURE__ */ _e(ap, [["__scopeId", "data-v-eefdcb00"]]), ip = /* @__PURE__ */ ye({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {}
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = D(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), P(Wt, null, {
      header: g(() => [
        S(Gt, { title: o.value }, null, 8, ["title"])
      ]),
      content: g(() => [
        e.commits.length === 0 ? (n(), P(fs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), P(Dr, { key: 1 }, {
          default: g(() => [
            (n(!0), i(B, null, he(e.commits, (r) => (n(), P(Nr, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: g(() => [
                S(pe, {
                  variant: "ghost",
                  size: "xs",
                  onClick: (c) => a.$emit("checkout", r),
                  title: "Checkout this commit"
                }, {
                  default: g(() => [...l[0] || (l[0] = [
                    t("svg", {
                      width: "12",
                      height: "12",
                      viewBox: "0 0 16 16",
                      fill: "currentColor"
                    }, [
                      t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" })
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
      _: 1
    }));
  }
}), rp = /* @__PURE__ */ _e(ip, [["__scopeId", "data-v-62a5d9da"]]);
async function xn(e, s) {
  var a;
  if (!((a = window.app) != null && a.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, s);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function cp() {
  async function e() {
    try {
      return await xn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
    try {
      return await xn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await xn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await xn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: s,
    restart: o,
    kill: a
  };
}
const up = {
  key: 0,
  class: "base-title-count"
}, dp = /* @__PURE__ */ ye({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), P(il(`h${e.level}`), {
      class: Re(["base-title", e.variant])
    }, {
      default: g(() => [
        at(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", up, "(" + d(e.count) + ")", 1)) : h("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), en = /* @__PURE__ */ _e(dp, [["__scopeId", "data-v-5a01561d"]]), mp = ["value", "disabled"], fp = {
  key: 0,
  value: "",
  disabled: ""
}, vp = ["value"], pp = {
  key: 0,
  class: "base-select-error"
}, gp = /* @__PURE__ */ ye({
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
    function s(a) {
      return typeof a == "string" ? a : a.value;
    }
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Re(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Re(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", fp, d(e.placeholder), 1)) : h("", !0),
        (n(!0), i(B, null, he(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, d(o(r)), 9, vp))), 128))
      ], 42, mp),
      e.error ? (n(), i("span", pp, d(e.error), 1)) : h("", !0)
    ], 2));
  }
}), hp = /* @__PURE__ */ _e(gp, [["__scopeId", "data-v-4996bfe0"]]), yp = { class: "popover-header" }, wp = { class: "popover-title" }, _p = { class: "popover-content" }, kp = {
  key: 0,
  class: "popover-actions"
}, bp = /* @__PURE__ */ ye({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), P(Mt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Qt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = wt(() => {
          }, ["stop"]))
        }, [
          t("div", yp, [
            t("h4", wp, d(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", _p, [
            at(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", kp, [
            at(s.$slots, "actions", {}, void 0)
          ])) : h("", !0)
        ], 4)
      ])) : h("", !0)
    ]));
  }
}), vs = /* @__PURE__ */ _e(bp, [["__scopeId", "data-v-42815ace"]]), $p = { class: "detail-section" }, Cp = {
  key: 0,
  class: "empty-message"
}, xp = { class: "model-header" }, Sp = { class: "model-name" }, Ip = { class: "model-details" }, Ep = { class: "model-row" }, Tp = { class: "model-row" }, Pp = { class: "label" }, Rp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Mp = { class: "node-list" }, Dp = ["onClick"], Lp = {
  key: 1,
  class: "model-row"
}, Np = { class: "value" }, Up = {
  key: 2,
  class: "model-row"
}, Ap = { class: "value error" }, Op = {
  key: 0,
  class: "model-actions"
}, zp = { class: "detail-section" }, Fp = {
  key: 0,
  class: "empty-message"
}, Vp = { class: "node-content" }, Bp = { class: "node-main" }, Wp = { class: "node-name" }, Gp = { class: "node-badge" }, jp = {
  key: 0,
  class: "node-version"
}, Hp = ["onClick"], Kp = {
  key: 2,
  class: "node-install-queued"
}, qp = {
  key: 0,
  class: "node-guidance"
}, Yp = /* @__PURE__ */ ye({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ut(), m = _(null), f = _(!1), v = _(null), y = _(!1), k = _({}), p = _(!1), w = _(/* @__PURE__ */ new Set()), x = _(/* @__PURE__ */ new Set()), $ = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function C(V) {
      switch (V) {
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
    function N(V) {
      switch (V) {
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
    function T(V) {
      switch (V) {
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
    function I(V) {
      switch (V) {
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
    function M(V) {
      switch (V) {
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
    function L(V) {
      if (!V.loaded_by || V.loaded_by.length === 0) return [];
      const Q = V.hash || V.filename;
      return w.value.has(Q) ? V.loaded_by : V.loaded_by.slice(0, 3);
    }
    function W(V) {
      return w.value.has(V);
    }
    function E(V) {
      w.value.has(V) ? w.value.delete(V) : w.value.add(V), w.value = new Set(w.value);
    }
    async function R() {
      f.value = !0, v.value = null;
      try {
        m.value = await l(o.workflowName);
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to load workflow details";
      } finally {
        f.value = !1;
      }
    }
    function te(V, Q) {
      k.value[V] = Q, y.value = !0;
    }
    async function se(V) {
      try {
        await c(V);
      } catch (Q) {
        v.value = Q instanceof Error ? Q.message : "Failed to open file location";
      }
    }
    async function oe(V) {
      if (V.package_id)
        try {
          const Q = V.latest_version || "latest";
          await u({
            id: V.package_id,
            version: Q,
            selected_version: Q,
            mode: "remote",
            channel: "default"
          }), x.value.add(V.package_id);
        } catch (Q) {
          v.value = Q instanceof Error ? Q.message : "Failed to queue node install";
        }
    }
    async function X() {
      if (!y.value) {
        a("close");
        return;
      }
      f.value = !0, v.value = null;
      try {
        for (const [V, Q] of Object.entries(k.value))
          await r(o.workflowName, V, Q);
        a("refresh"), a("close");
      } catch (V) {
        v.value = V instanceof Error ? V.message : "Failed to save changes";
      } finally {
        f.value = !1;
      }
    }
    return rt(R), (V, Q) => (n(), i(B, null, [
      S(kt, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: f.value,
        error: v.value || void 0,
        onClose: Q[4] || (Q[4] = (ne) => a("close"))
      }, {
        body: g(() => [
          m.value ? (n(), i(B, { key: 0 }, [
            t("section", $p, [
              S(en, { variant: "section" }, {
                default: g(() => [
                  b("MODELS USED (" + d(m.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.models.length === 0 ? (n(), i("div", Cp, " No models used in this workflow ")) : h("", !0),
              (n(!0), i(B, null, he(m.value.models, (ne) => {
                var re;
                return n(), i("div", {
                  key: ne.hash || ne.filename,
                  class: "model-card"
                }, [
                  t("div", xp, [
                    Q[6] || (Q[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", Sp, d(ne.filename), 1)
                  ]),
                  t("div", Ip, [
                    t("div", Ep, [
                      Q[7] || (Q[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Re(["value", C(ne.status)])
                      }, d(N(ne.status)), 3)
                    ]),
                    t("div", Tp, [
                      t("span", Pp, [
                        Q[8] || (Q[8] = b(" Importance: ", -1)),
                        S(Mr, {
                          size: 14,
                          title: "About importance levels",
                          onClick: Q[0] || (Q[0] = (F) => p.value = !0)
                        })
                      ]),
                      S(hp, {
                        "model-value": k.value[ne.filename] || ne.importance,
                        options: $,
                        "onUpdate:modelValue": (F) => te(ne.filename, F)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    ne.loaded_by && ne.loaded_by.length > 0 ? (n(), i("div", Rp, [
                      Q[9] || (Q[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", Mp, [
                        (n(!0), i(B, null, he(L(ne), (F, ee) => (n(), i("div", {
                          key: `${F.node_id}-${ee}`,
                          class: "node-reference"
                        }, d(F.node_type) + " (Node #" + d(F.node_id) + ") ", 1))), 128)),
                        ne.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (F) => E(ne.hash || ne.filename)
                        }, d(W(ne.hash || ne.filename) ? "▼ Show less" : `▶ View all (${ne.loaded_by.length})`), 9, Dp)) : h("", !0)
                      ])
                    ])) : h("", !0),
                    ne.size_mb ? (n(), i("div", Lp, [
                      Q[10] || (Q[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Np, d(ne.size_mb) + " MB", 1)
                    ])) : h("", !0),
                    ne.has_category_mismatch ? (n(), i("div", Up, [
                      Q[13] || (Q[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Ap, [
                        Q[11] || (Q[11] = b(" In ", -1)),
                        t("code", null, d(ne.actual_category) + "/", 1),
                        Q[12] || (Q[12] = b(" but loader needs ", -1)),
                        t("code", null, d((re = ne.expected_categories) == null ? void 0 : re[0]) + "/", 1)
                      ])
                    ])) : h("", !0)
                  ]),
                  ne.status !== "available" ? (n(), i("div", Op, [
                    ne.status === "downloadable" ? (n(), P(Ne, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: Q[1] || (Q[1] = (F) => a("resolve"))
                    }, {
                      default: g(() => [...Q[14] || (Q[14] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    })) : ne.status === "category_mismatch" && ne.file_path ? (n(), P(Ne, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (F) => se(ne.file_path)
                    }, {
                      default: g(() => [...Q[15] || (Q[15] = [
                        b(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : ne.status !== "path_mismatch" ? (n(), P(Ne, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: Q[2] || (Q[2] = (F) => a("resolve"))
                    }, {
                      default: g(() => [...Q[16] || (Q[16] = [
                        b(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : h("", !0)
                  ])) : h("", !0)
                ]);
              }), 128))
            ]),
            t("section", zp, [
              S(en, { variant: "section" }, {
                default: g(() => [
                  b("NODES USED (" + d(m.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              m.value.nodes.length === 0 ? (n(), i("div", Fp, " No custom nodes used in this workflow ")) : h("", !0),
              (n(!0), i(B, null, he(m.value.nodes, (ne, re) => (n(), i("div", {
                key: `${ne.name}-${ne.status}-${re}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Re(["node-status", T(ne.status)])
                }, d(I(ne.status)), 3),
                t("div", Vp, [
                  t("div", Bp, [
                    t("span", Wp, d(ne.name), 1),
                    t("span", Gp, d(M(ne.status)), 1),
                    ne.version ? (n(), i("span", jp, "v" + d(ne.version), 1)) : h("", !0),
                    ne.status === "uninstallable" && ne.package_id && !x.value.has(ne.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (F) => oe(ne)
                    }, " Install ", 8, Hp)) : ne.status === "uninstallable" && ne.package_id && x.value.has(ne.package_id) ? (n(), i("span", Kp, " Queued ")) : h("", !0)
                  ]),
                  ne.guidance ? (n(), i("div", qp, d(ne.guidance), 1)) : h("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : h("", !0)
        ]),
        footer: g(() => [
          S(Ne, {
            variant: "secondary",
            onClick: Q[3] || (Q[3] = (ne) => a("close"))
          }, {
            default: g(() => [...Q[17] || (Q[17] = [
              b(" Close ", -1)
            ])]),
            _: 1
          }),
          y.value ? (n(), P(Ne, {
            key: 0,
            variant: "primary",
            onClick: X
          }, {
            default: g(() => [...Q[18] || (Q[18] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      S(vs, {
        show: p.value,
        title: "Model Importance Levels",
        onClose: Q[5] || (Q[5] = (ne) => p.value = !1)
      }, {
        content: g(() => [...Q[19] || (Q[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              b(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              b(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              b(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qp = /* @__PURE__ */ _e(Yp, [["__scopeId", "data-v-543076d9"]]), it = qs({
  items: [],
  status: "idle"
});
let _s = null;
function Ur() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Ca(e) {
  return it.items.find((s) => s.id === e);
}
async function bo() {
  if (it.status === "downloading") return;
  const e = it.items.find((s) => s.status === "queued");
  if (!e) {
    it.status = "idle";
    return;
  }
  it.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Jp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    it.status = "idle", bo();
  }
}
async function Jp(e) {
  return new Promise((s, o) => {
    _s && (_s.close(), _s = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
    _s = l;
    let r = Date.now(), c = 0, u = !1;
    l.onmessage = (m) => {
      try {
        const f = JSON.parse(m.data);
        switch (f.type) {
          case "progress":
            e.downloaded = f.downloaded || 0, e.size = f.total || e.size;
            const v = Date.now(), y = (v - r) / 1e3;
            if (y > 0.5) {
              const k = e.downloaded - c;
              if (e.speed = k / y, r = v, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const p = e.size - e.downloaded;
                e.eta = p / e.speed;
              }
            }
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            u = !0, l.close(), _s = null, s();
            break;
          case "error":
            u = !0, l.close(), _s = null, o(new Error(f.message || "Download failed"));
            break;
        }
      } catch {
      }
    }, l.onerror = () => {
      l.close(), _s = null, u || o(new Error("Connection lost"));
    };
  });
}
async function Xp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (it.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: Ur(),
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
      it.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Do() {
  function e($) {
    for (const C of $) {
      if (it.items.some(
        (I) => I.url === C.url && I.targetPath === C.targetPath && ["queued", "downloading", "paused", "completed"].includes(I.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${C.filename}`);
        continue;
      }
      const T = {
        id: Ur(),
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
      it.items.push(T);
    }
    it.status === "idle" && bo();
  }
  async function s($) {
    const C = Ca($);
    if (C) {
      if (C.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(C.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        _s && (_s.close(), _s = null), C.status = "failed", C.error = "Cancelled by user", it.status = "idle", bo();
      } else if (C.status === "queued") {
        const N = it.items.findIndex((T) => T.id === $);
        N >= 0 && it.items.splice(N, 1);
      }
    }
  }
  function o($) {
    const C = Ca($);
    !C || C.status !== "failed" || (C.status = "queued", C.error = void 0, C.progress = 0, C.downloaded = 0, it.status === "idle" && bo());
  }
  function a($) {
    const C = Ca($);
    !C || C.status !== "paused" || (C.status = "queued", it.status === "idle" && bo());
  }
  function l() {
    const $ = it.items.filter((C) => C.status === "paused");
    for (const C of $)
      C.status = "queued";
    it.status === "idle" && bo();
  }
  function r($) {
    const C = it.items.findIndex((N) => N.id === $);
    C >= 0 && ["completed", "failed", "paused"].includes(it.items[C].status) && it.items.splice(C, 1);
  }
  function c() {
    it.items = it.items.filter(($) => $.status !== "completed");
  }
  function u() {
    it.items = it.items.filter(($) => $.status !== "failed");
  }
  const m = D(
    () => it.items.find(($) => $.status === "downloading")
  ), f = D(
    () => it.items.filter(($) => $.status === "queued")
  ), v = D(
    () => it.items.filter(($) => $.status === "completed")
  ), y = D(
    () => it.items.filter(($) => $.status === "failed")
  ), k = D(
    () => it.items.filter(($) => $.status === "paused")
  ), p = D(() => it.items.length > 0), w = D(
    () => it.items.filter(($) => $.status === "queued" || $.status === "downloading").length
  ), x = D(
    () => it.items.some(($) => $.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: Un(it),
    // Computed
    currentDownload: m,
    queuedItems: f,
    completedItems: v,
    failedItems: y,
    pausedItems: k,
    hasItems: p,
    activeCount: w,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Xp
  };
}
function Ar() {
  const e = _(null), s = _(null), o = _([]), a = _([]), l = _(!1), r = _(null);
  async function c(N, T) {
    var M;
    if (!((M = window.app) != null && M.api))
      throw new Error("ComfyUI API not available");
    const I = await window.app.api.fetchApi(N, T);
    if (!I.ok) {
      const L = await I.json().catch(() => ({})), W = L.error || L.message || `Request failed: ${I.status}`;
      throw new Error(W);
    }
    return I.json();
  }
  async function u(N) {
    l.value = !0, r.value = null;
    try {
      let T;
      return ko() || (T = await c(
        `/v2/comfygit/workflow/${N}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), T.nodes.version_gated = T.nodes.version_gated || [], T.nodes.uninstallable = T.nodes.uninstallable || [], T.node_guidance = T.node_guidance || {}, T.package_aliases = T.package_aliases || {}, e.value = T, T;
    } catch (T) {
      const I = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = I, T;
    } finally {
      l.value = !1;
    }
  }
  async function m(N, T, I, M) {
    l.value = !0, r.value = null;
    try {
      let L;
      if (!ko()) {
        const W = Object.fromEntries(T), E = Object.fromEntries(I), R = M ? Array.from(M) : [];
        L = await c(
          `/v2/comfygit/workflow/${N}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: W,
              model_choices: E,
              skipped_packages: R
            })
          }
        );
      }
      return s.value = L, L;
    } catch (L) {
      const W = L instanceof Error ? L.message : "Unknown error occurred";
      throw r.value = W, L;
    } finally {
      l.value = !1;
    }
  }
  async function f(N, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return ko() || (I = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), o.value = I.results, I.results;
    } catch (I) {
      const M = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = M, I;
    } finally {
      l.value = !1;
    }
  }
  async function v(N, T = 10) {
    l.value = !0, r.value = null;
    try {
      let I;
      return ko() || (I = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: N, limit: T })
        }
      )), a.value = I.results, I.results;
    } catch (I) {
      const M = I instanceof Error ? I.message : "Unknown error occurred";
      throw r.value = M, I;
    } finally {
      l.value = !1;
    }
  }
  const y = qs({
    phase: "idle",
    completedFiles: [],
    nodesToInstall: [],
    nodesInstalled: []
  });
  function k() {
    y.phase = "idle", y.currentFile = void 0, y.currentFileIndex = void 0, y.totalFiles = void 0, y.bytesDownloaded = void 0, y.bytesTotal = void 0, y.completedFiles = [], y.nodesToInstall = [], y.nodesInstalled = [], y.installError = void 0, y.needsRestart = void 0, y.error = void 0, y.nodeInstallProgress = void 0;
  }
  async function p(N) {
    y.phase = "installing", y.nodesInstalled = [], y.installError = void 0, y.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return ko(), await w(N);
    } catch (T) {
      const I = T instanceof Error ? T.message : "Failed to install nodes";
      throw y.installError = I, T;
    }
  }
  async function w(N) {
    var I;
    const T = await c(
      `/v2/comfygit/workflow/${N}/install`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packages: y.nodesToInstall
        })
      }
    );
    if (y.nodeInstallProgress) {
      y.nodeInstallProgress.totalNodes = y.nodesToInstall.length;
      const M = new Map(((I = T.failed) == null ? void 0 : I.map((L) => [L.node_id, L.error])) || []);
      for (let L = 0; L < y.nodesToInstall.length; L++) {
        const W = y.nodesToInstall[L], E = M.get(W);
        y.nodeInstallProgress.completedNodes.push({
          node_id: W,
          success: !E,
          error: E
        });
      }
    }
    return y.nodesInstalled = T.nodes_installed, y.needsRestart = T.nodes_installed.length > 0, T.failed && T.failed.length > 0 && (y.installError = `${T.failed.length} package(s) failed to install`), T;
  }
  async function x(N, T, I) {
    k(), y.phase = "resolving", r.value = null;
    const M = Object.fromEntries(T), L = Object.fromEntries(I);
    try {
      const W = await fetch(`/v2/comfygit/workflow/${N}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: M,
          model_choices: L
        })
      });
      if (!W.ok)
        throw new Error(`Request failed: ${W.status}`);
      if (!W.body)
        throw new Error("No response body");
      const E = W.body.getReader(), R = new TextDecoder();
      let te = "";
      for (; ; ) {
        const { done: se, value: oe } = await E.read();
        if (se) break;
        te += R.decode(oe, { stream: !0 });
        const X = te.split(`

`);
        te = X.pop() || "";
        for (const V of X) {
          if (!V.trim()) continue;
          const Q = V.split(`
`);
          let ne = "", re = "";
          for (const F of Q)
            F.startsWith("event: ") ? ne = F.slice(7) : F.startsWith("data: ") && (re = F.slice(6));
          if (re)
            try {
              const F = JSON.parse(re);
              $(ne, F);
            } catch (F) {
              console.warn("Failed to parse SSE event:", F);
            }
        }
      }
    } catch (W) {
      const E = W instanceof Error ? W.message : "Unknown error occurred";
      throw r.value = E, y.error = E, y.phase = "error", W;
    }
  }
  function $(N, T) {
    switch (N) {
      case "batch_start":
        y.phase = "downloading", y.totalFiles = T.total;
        break;
      case "file_start":
        y.currentFile = T.filename, y.currentFileIndex = T.index, y.bytesDownloaded = 0, y.bytesTotal = void 0;
        break;
      case "file_progress":
        y.bytesDownloaded = T.downloaded, y.bytesTotal = T.total;
        break;
      case "file_complete":
        y.completedFiles.push({
          filename: T.filename,
          success: T.success,
          error: T.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        y.nodesToInstall = T.nodes_to_install || [], T.download_results && (y.completedFiles = T.download_results), y.phase = "complete";
        break;
      case "error":
        y.error = T.message, y.phase = "error", r.value = T.message;
        break;
    }
  }
  function C(N, T) {
    const { addToQueue: I } = Do(), M = T.filter((L) => L.url && L.target_path).map((L) => ({
      workflow: N,
      filename: L.filename,
      url: L.url,
      targetPath: L.target_path,
      size: L.size || 0,
      type: "model"
    }));
    return M.length > 0 && I(M), M.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: y,
    // Methods
    analyzeWorkflow: u,
    applyResolution: m,
    applyResolutionWithProgress: x,
    installNodes: p,
    searchNodes: f,
    searchModels: v,
    resetProgress: k,
    queueModelDownloads: C
  };
}
const Zp = { class: "resolution-stepper" }, eg = { class: "stepper-header" }, tg = ["onClick"], sg = {
  key: 0,
  class: "step-icon"
}, og = {
  key: 1,
  class: "step-number"
}, ng = { class: "step-label" }, ag = {
  key: 0,
  class: "step-connector"
}, lg = { class: "stepper-content" }, ig = /* @__PURE__ */ ye({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const y = o.stepStats[f];
        return y.total > 0 && y.resolved === y.total;
      }
      return o.completedSteps.includes(f);
    }
    function r(f) {
      var v;
      if ((v = o.stepStats) != null && v[f]) {
        const y = o.stepStats[f];
        return y.resolved > 0 && y.resolved < y.total;
      }
      return !1;
    }
    function c(f) {
      return l(f) ? "state-complete" : r(f) ? "state-partial" : "state-pending";
    }
    function u(f) {
      return !1;
    }
    function m(f) {
      a("step-change", f);
    }
    return (f, v) => (n(), i("div", Zp, [
      t("div", eg, [
        (n(!0), i(B, null, he(e.steps, (y, k) => (n(), i("div", {
          key: y.id,
          class: Re(["step", {
            active: e.currentStep === y.id,
            completed: l(y.id),
            "in-progress": r(y.id),
            disabled: u(y.id)
          }]),
          onClick: (p) => m(y.id)
        }, [
          t("div", {
            class: Re(["step-indicator", c(y.id)])
          }, [
            l(y.id) ? (n(), i("span", sg, "✓")) : (n(), i("span", og, d(k + 1), 1))
          ], 2),
          t("div", ng, d(y.label), 1),
          k < e.steps.length - 1 ? (n(), i("div", ag)) : h("", !0)
        ], 10, tg))), 128))
      ]),
      t("div", lg, [
        at(f.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), rg = /* @__PURE__ */ _e(ig, [["__scopeId", "data-v-2a7b3af8"]]), cg = /* @__PURE__ */ ye({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = D(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = D(() => `confidence-${o.value}`), l = D(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Re(["confidence-badge", a.value, e.size])
    }, d(l.value), 3));
  }
}), jn = /* @__PURE__ */ _e(cg, [["__scopeId", "data-v-17ec4b80"]]), ug = { class: "node-info" }, dg = { class: "node-info-text" }, mg = { class: "item-body" }, fg = {
  key: 0,
  class: "resolved-state"
}, vg = {
  key: 1,
  class: "multiple-options"
}, pg = { class: "options-list" }, gg = ["onClick"], hg = ["name", "value", "checked", "onChange"], yg = { class: "option-content" }, wg = { class: "option-header" }, _g = { class: "option-package-id" }, kg = {
  key: 0,
  class: "option-title"
}, bg = { class: "option-meta" }, $g = {
  key: 0,
  class: "installed-badge"
}, Cg = { class: "action-buttons" }, xg = {
  key: 2,
  class: "unresolved"
}, Sg = {
  key: 0,
  class: "searching-state"
}, Ig = { class: "options-list" }, Eg = ["onClick"], Tg = ["name", "value"], Pg = { class: "option-content" }, Rg = { class: "option-header" }, Mg = { class: "option-package-id" }, Dg = {
  key: 0,
  class: "option-description"
}, Lg = { class: "option-meta" }, Ng = {
  key: 0,
  class: "installed-badge"
}, Ug = {
  key: 2,
  class: "unresolved-message"
}, Ag = { class: "action-buttons" }, Og = /* @__PURE__ */ ye({
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
    isSearching: { type: Boolean }
  },
  emits: ["mark-optional", "skip", "manual-entry", "search", "option-selected", "clear-choice", "search-result-selected"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(m, f = 80) {
      return m.length <= f ? m : m.slice(0, f - 3) + "...";
    }
    const r = D(() => !!o.choice);
    D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.package_id;
    });
    const c = D(() => {
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
    function u(m) {
      a("option-selected", m);
    }
    return (m, f) => (n(), i("div", {
      class: Re(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      t("div", ug, [
        t("span", dg, [
          f[7] || (f[7] = b("Node type: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Re(["status-badge", c.value])
        }, d(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", mg, [
        r.value ? (n(), i("div", fg, [
          S(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...f[8] || (f[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", vg, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a package to install:", -1)),
          t("div", pg, [
            (n(!0), i(B, null, he(e.options, (v, y) => (n(), i("label", {
              key: v.package_id,
              class: Re(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (k) => u(y)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (k) => u(y)
              }, null, 40, hg),
              t("div", yg, [
                t("div", wg, [
                  t("span", _g, d(v.package_id), 1),
                  S(jn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                v.title && v.title !== v.package_id ? (n(), i("div", kg, d(v.title), 1)) : h("", !0),
                t("div", bg, [
                  v.is_installed ? (n(), i("span", $g, "Already Installed")) : h("", !0)
                ])
              ])
            ], 10, gg))), 128))
          ]),
          t("div", Cg, [
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("manual-entry"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[11] || (f[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", xg, [
          e.isSearching ? (n(), i("div", Sg, [...f[13] || (f[13] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(B, { key: 1 }, [
            f[14] || (f[14] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Ig, [
              (n(!0), i(B, null, he(e.searchResults.slice(0, 5), (v, y) => (n(), i("label", {
                key: v.package_id,
                class: "option-card",
                onClick: (k) => a("search-result-selected", v)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: y
                }, null, 8, Tg),
                t("div", Pg, [
                  t("div", Rg, [
                    t("span", Mg, d(v.package_id), 1),
                    S(jn, {
                      confidence: v.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  v.description ? (n(), i("div", Dg, d(l(v.description)), 1)) : h("", !0),
                  t("div", Lg, [
                    v.is_installed ? (n(), i("span", Ng, "Already Installed")) : h("", !0)
                  ])
                ])
              ], 8, Eg))), 128))
            ])
          ], 64)) : (n(), i("div", Ug, [...f[15] || (f[15] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Ag, [
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => {
                var v;
                return [
                  b(d((v = e.searchResults) != null && v.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("manual-entry"))
            }, {
              default: g(() => [...f[16] || (f[16] = [
                b(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[17] || (f[17] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), zg = /* @__PURE__ */ _e(Og, [["__scopeId", "data-v-c2997d1d"]]), Fg = { class: "item-navigator" }, Vg = { class: "nav-item-info" }, Bg = ["title"], Wg = { class: "nav-controls" }, Gg = { class: "nav-arrows" }, jg = ["disabled"], Hg = ["disabled"], Kg = { class: "nav-position" }, qg = /* @__PURE__ */ ye({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Fg, [
      t("div", Vg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, d(e.itemName), 9, Bg)
      ]),
      t("div", Wg, [
        t("div", Gg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, jg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Hg)
        ]),
        t("span", Kg, d(e.currentIndex + 1) + "/" + d(e.totalItems), 1)
      ])
    ]));
  }
}), Or = /* @__PURE__ */ _e(qg, [["__scopeId", "data-v-74af7920"]]), Yg = ["type", "value", "placeholder", "disabled"], Qg = {
  key: 0,
  class: "base-input-error"
}, Jg = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), i("div", {
      class: Re(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Re(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = ss((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ss((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Yg),
      e.error ? (n(), i("span", Qg, d(e.error), 1)) : h("", !0)
    ], 2));
  }
}), Ot = /* @__PURE__ */ _e(Jg, [["__scopeId", "data-v-9ba02cdc"]]), Xg = { class: "node-resolution-step" }, Zg = {
  key: 0,
  class: "auto-resolved-section"
}, eh = { class: "section-header" }, th = { class: "stat-badge" }, sh = { class: "resolved-packages-list" }, oh = { class: "package-info" }, nh = { class: "package-id" }, ah = { class: "node-count" }, lh = { class: "package-actions" }, ih = {
  key: 0,
  class: "status-badge install"
}, rh = {
  key: 1,
  class: "status-badge skip"
}, ch = ["onClick"], uh = {
  key: 1,
  class: "section-divider"
}, dh = { class: "step-header" }, mh = { class: "stat-badge" }, fh = {
  key: 1,
  class: "step-body"
}, vh = {
  key: 3,
  class: "empty-state"
}, ph = { class: "node-modal-body" }, gh = { class: "node-search-results-container" }, hh = {
  key: 0,
  class: "node-search-results"
}, yh = ["onClick"], wh = { class: "node-result-header" }, _h = { class: "node-result-package-id" }, kh = {
  key: 0,
  class: "node-result-description"
}, bh = {
  key: 1,
  class: "node-empty-state"
}, $h = {
  key: 2,
  class: "node-empty-state"
}, Ch = {
  key: 3,
  class: "node-empty-state"
}, xh = { class: "node-manual-entry-modal" }, Sh = { class: "node-modal-body" }, Ih = { class: "node-modal-actions" }, Eh = /* @__PURE__ */ ye({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = Ar(), r = _(0), c = _(!1), u = _(!1), m = _(""), f = _(""), v = _([]), y = _(!1), k = _(/* @__PURE__ */ new Map()), p = _(/* @__PURE__ */ new Set()), w = _(!1);
    function x() {
      w.value && F(), w.value = !1;
    }
    const $ = D(() => o.nodes[r.value]), C = D(() => o.nodes.filter((Y) => o.nodeChoices.has(Y.node_type)).length), N = D(() => $.value ? k.value.get($.value.node_type) || [] : []), T = D(() => $.value ? p.value.has($.value.node_type) : !1);
    $t($, async (Y) => {
      var z;
      Y && ((z = Y.options) != null && z.length || k.value.has(Y.node_type) || p.value.has(Y.node_type) || o.nodeChoices.has(Y.node_type) || await I(Y.node_type));
    }, { immediate: !0 });
    async function I(Y) {
      p.value.add(Y);
      try {
        const z = await l(Y, 5);
        k.value.set(Y, z);
      } catch {
        k.value.set(Y, []);
      } finally {
        p.value.delete(Y);
      }
    }
    const M = D(() => o.autoResolvedPackages.filter((Y) => !o.skippedPackages.has(Y.package_id)).length);
    function L(Y) {
      return o.skippedPackages.has(Y);
    }
    function W(Y) {
      a("package-skip", Y);
    }
    const E = D(() => {
      var z;
      if (!$.value) return "not-found";
      const Y = o.nodeChoices.get($.value.node_type);
      if (Y)
        switch (Y.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (z = $.value.options) != null && z.length ? "ambiguous" : "not-found";
    }), R = D(() => {
      var z;
      if (!$.value) return;
      const Y = o.nodeChoices.get($.value.node_type);
      if (Y)
        switch (Y.action) {
          case "install":
            return Y.package_id ? `→ ${Y.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (z = $.value.options) != null && z.length ? `${$.value.options.length} matches` : "Not Found";
    });
    function te(Y) {
      Y >= 0 && Y < o.nodes.length && (r.value = Y);
    }
    function se() {
      var Y;
      for (let z = r.value + 1; z < o.nodes.length; z++) {
        const O = o.nodes[z];
        if (!((Y = o.nodeChoices) != null && Y.has(O.node_type))) {
          te(z);
          return;
        }
      }
    }
    function oe() {
      $.value && (a("mark-optional", $.value.node_type), Et(() => se()));
    }
    function X() {
      $.value && (a("skip", $.value.node_type), Et(() => se()));
    }
    function V(Y) {
      $.value && (a("option-selected", $.value.node_type, Y), Et(() => se()));
    }
    function Q() {
      $.value && a("clear-choice", $.value.node_type);
    }
    function ne() {
      $.value && (m.value = $.value.node_type, v.value = N.value, c.value = !0, qe(m.value));
    }
    function re() {
      f.value = "", u.value = !0;
    }
    function F() {
      c.value = !1, m.value = "", v.value = [];
    }
    function ee() {
      u.value = !1, f.value = "";
    }
    let le = null;
    function Ae() {
      le && clearTimeout(le), le = setTimeout(() => {
        qe(m.value);
      }, 300);
    }
    async function qe(Y) {
      if (!Y.trim()) {
        v.value = [];
        return;
      }
      y.value = !0;
      try {
        v.value = await l(Y, 10);
      } catch {
        v.value = [];
      } finally {
        y.value = !1;
      }
    }
    function je(Y) {
      $.value && (a("manual-entry", $.value.node_type, Y.package_id), F(), Et(() => se()));
    }
    function xe(Y) {
      $.value && (a("manual-entry", $.value.node_type, Y.package_id), Et(() => se()));
    }
    function A() {
      !$.value || !f.value.trim() || (a("manual-entry", $.value.node_type, f.value.trim()), ee(), Et(() => se()));
    }
    return (Y, z) => {
      var O, ie;
      return n(), i("div", Xg, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", Zg, [
          t("div", eh, [
            z[6] || (z[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", th, d(M.value) + "/" + d(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", sh, [
            (n(!0), i(B, null, he(e.autoResolvedPackages, (Te) => (n(), i("div", {
              key: Te.package_id,
              class: "resolved-package-item"
            }, [
              t("div", oh, [
                t("code", nh, d(Te.package_id), 1),
                t("span", ah, d(Te.node_types_count) + " node type" + d(Te.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", lh, [
                L(Te.package_id) ? (n(), i("span", rh, " SKIPPED ")) : (n(), i("span", ih, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (Ye) => W(Te.package_id)
                }, d(L(Te.package_id) ? "Include" : "Skip"), 9, ch)
              ])
            ]))), 128))
          ])
        ])) : h("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", uh)) : h("", !0),
        e.nodes.length > 0 ? (n(), i(B, { key: 2 }, [
          t("div", dh, [
            z[7] || (z[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", mh, d(C.value) + "/" + d(e.nodes.length) + " resolved", 1)
          ]),
          $.value ? (n(), P(Or, {
            key: 0,
            "item-name": $.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: z[0] || (z[0] = (Te) => te(r.value - 1)),
            onNext: z[1] || (z[1] = (Te) => te(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
          $.value ? (n(), i("div", fh, [
            S(zg, {
              "node-type": $.value.node_type,
              "has-multiple-options": !!((O = $.value.options) != null && O.length),
              options: $.value.options,
              choice: (ie = e.nodeChoices) == null ? void 0 : ie.get($.value.node_type),
              status: E.value,
              "status-label": R.value,
              "search-results": N.value,
              "is-searching": T.value,
              onMarkOptional: oe,
              onSkip: X,
              onManualEntry: re,
              onSearch: ne,
              onOptionSelected: V,
              onClearChoice: Q,
              onSearchResultSelected: xe
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching"])
          ])) : h("", !0)
        ], 64)) : h("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", vh, [...z[8] || (z[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : h("", !0),
        (n(), P(Mt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: z[4] || (z[4] = wt((Te) => w.value = !0, ["self"])),
            onMouseup: wt(x, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: z[3] || (z[3] = (Te) => w.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                z[9] || (z[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: F
                }, "✕")
              ]),
              t("div", ph, [
                S(Ot, {
                  modelValue: m.value,
                  "onUpdate:modelValue": z[2] || (z[2] = (Te) => m.value = Te),
                  placeholder: "Search by node type, package name...",
                  onInput: Ae
                }, null, 8, ["modelValue"]),
                t("div", gh, [
                  v.value.length > 0 ? (n(), i("div", hh, [
                    (n(!0), i(B, null, he(v.value, (Te) => (n(), i("div", {
                      key: Te.package_id,
                      class: "node-search-result-item",
                      onClick: (Ye) => je(Te)
                    }, [
                      t("div", wh, [
                        t("code", _h, d(Te.package_id), 1),
                        Te.match_confidence ? (n(), P(jn, {
                          key: 0,
                          confidence: Te.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : h("", !0)
                      ]),
                      Te.description ? (n(), i("div", kh, d(Te.description), 1)) : h("", !0)
                    ], 8, yh))), 128))
                  ])) : y.value ? (n(), i("div", bh, "Searching...")) : m.value ? (n(), i("div", $h, 'No packages found matching "' + d(m.value) + '"', 1)) : (n(), i("div", Ch, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : h("", !0)
        ])),
        (n(), P(Mt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: wt(ee, ["self"])
          }, [
            t("div", xh, [
              t("div", { class: "node-modal-header" }, [
                z[10] || (z[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: ee
                }, "✕")
              ]),
              t("div", Sh, [
                S(Ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": z[5] || (z[5] = (Te) => f.value = Te),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Ih, [
                  S(Ne, {
                    variant: "secondary",
                    onClick: ee
                  }, {
                    default: g(() => [...z[11] || (z[11] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Ne, {
                    variant: "primary",
                    disabled: !f.value.trim(),
                    onClick: A
                  }, {
                    default: g(() => [...z[12] || (z[12] = [
                      b(" Add Package ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), Th = /* @__PURE__ */ _e(Eh, [["__scopeId", "data-v-6d7f8125"]]), Ph = { class: "node-info" }, Rh = { class: "node-info-text" }, Mh = { class: "item-body" }, Dh = {
  key: 0,
  class: "resolved-state"
}, Lh = {
  key: 1,
  class: "multiple-options"
}, Nh = { class: "options-list" }, Uh = ["onClick"], Ah = ["name", "value", "checked", "onChange"], Oh = { class: "option-content" }, zh = { class: "option-header" }, Fh = { class: "option-filename" }, Vh = { class: "option-meta" }, Bh = { class: "option-size" }, Wh = { class: "option-category" }, Gh = { class: "option-path" }, jh = { class: "action-buttons" }, Hh = {
  key: 2,
  class: "unresolved"
}, Kh = { class: "action-buttons" }, qh = /* @__PURE__ */ ye({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = D(() => !!o.choice);
    D(() => {
      var m;
      return (m = o.choice) == null ? void 0 : m.action;
    }), D(() => {
      var m, f;
      return ((f = (m = o.choice) == null ? void 0 : m.selected_model) == null ? void 0 : f.filename) || "selected";
    });
    const r = D(() => {
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
    function c(m) {
      a("option-selected", m);
    }
    function u(m) {
      if (!m) return "Unknown";
      const f = m / (1024 * 1024 * 1024);
      return f >= 1 ? `${f.toFixed(2)} GB` : `${(m / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (m, f) => (n(), i("div", {
      class: Re(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      t("div", Ph, [
        t("span", Rh, [
          f[7] || (f[7] = b("Used by: ", -1)),
          t("code", null, d(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Re(["status-badge", r.value])
        }, d(e.statusLabel), 3)) : h("", !0)
      ]),
      t("div", Mh, [
        l.value ? (n(), i("div", Dh, [
          S(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: f[0] || (f[0] = (v) => a("clear-choice"))
          }, {
            default: g(() => [...f[8] || (f[8] = [
              b(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Lh, [
          f[12] || (f[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Nh, [
            (n(!0), i(B, null, he(e.options, (v, y) => (n(), i("label", {
              key: v.model.hash,
              class: Re(["option-card", { selected: e.selectedOptionIndex === y }]),
              onClick: (k) => c(y)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: y,
                checked: e.selectedOptionIndex === y,
                onChange: (k) => c(y)
              }, null, 40, Ah),
              t("div", Oh, [
                t("div", zh, [
                  t("span", Fh, d(v.model.filename), 1),
                  S(jn, {
                    confidence: v.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Vh, [
                  t("span", Bh, d(u(v.model.size)), 1),
                  t("span", Wh, d(v.model.category), 1)
                ]),
                t("div", Gh, d(v.model.relative_path), 1)
              ])
            ], 10, Uh))), 128))
          ]),
          t("div", jh, [
            S(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: f[1] || (f[1] = (v) => a("search"))
            }, {
              default: g(() => [...f[9] || (f[9] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "ghost",
              size: "sm",
              onClick: f[2] || (f[2] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[10] || (f[10] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[3] || (f[3] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[11] || (f[11] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Hh, [
          f[16] || (f[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Kh, [
            S(Ne, {
              variant: "primary",
              size: "sm",
              onClick: f[4] || (f[4] = (v) => a("search"))
            }, {
              default: g(() => [...f[13] || (f[13] = [
                b(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[5] || (f[5] = (v) => a("download-url"))
            }, {
              default: g(() => [...f[14] || (f[14] = [
                b(" Download URL ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: "secondary",
              size: "sm",
              onClick: f[6] || (f[6] = (v) => a("mark-optional"))
            }, {
              default: g(() => [...f[15] || (f[15] = [
                b(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Yh = /* @__PURE__ */ _e(qh, [["__scopeId", "data-v-8a82fefa"]]), Qh = { class: "model-resolution-step" }, Jh = { class: "step-header" }, Xh = { class: "step-info" }, Zh = { class: "step-title" }, ey = { class: "step-description" }, ty = { class: "stat-badge" }, sy = {
  key: 1,
  class: "step-body"
}, oy = {
  key: 2,
  class: "empty-state"
}, ny = { class: "model-search-modal" }, ay = { class: "model-modal-body" }, ly = {
  key: 0,
  class: "model-search-results"
}, iy = ["onClick"], ry = { class: "model-result-header" }, cy = { class: "model-result-filename" }, uy = { class: "model-result-meta" }, dy = { class: "model-result-category" }, my = { class: "model-result-size" }, fy = {
  key: 0,
  class: "model-result-path"
}, vy = {
  key: 1,
  class: "model-no-results"
}, py = {
  key: 2,
  class: "model-searching"
}, gy = { class: "model-download-url-modal" }, hy = { class: "model-modal-body" }, yy = { class: "model-input-group" }, wy = { class: "model-input-group" }, _y = { class: "model-modal-actions" }, ky = /* @__PURE__ */ ye({
  __name: "ModelResolutionStep",
  props: {
    models: {},
    modelChoices: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "download-url", "clear-choice"],
  setup(e, { emit: s }) {
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
    function a(F) {
      var ee;
      return F && ((ee = o[F]) == null ? void 0 : ee[0]) || null;
    }
    const l = e, r = s, c = _(0), u = _(!1), m = _(!1), f = _(""), v = _(""), y = _(""), k = _([]), p = _(!1), w = D(() => l.models[c.value]), x = D(() => l.models.some((F) => F.is_download_intent)), $ = D(() => l.models.filter(
      (F) => l.modelChoices.has(F.filename) || F.is_download_intent
    ).length), C = D(() => {
      var ee;
      if (!w.value) return "";
      const F = a((ee = w.value.reference) == null ? void 0 : ee.node_type);
      return F ? `${F}/${w.value.filename}` : "";
    }), N = D(() => {
      var ee;
      if (!w.value) return "not-found";
      const F = l.modelChoices.get(w.value.filename);
      if (F)
        switch (F.action) {
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
      return w.value.is_download_intent ? "download" : (ee = w.value.options) != null && ee.length ? "ambiguous" : "not-found";
    }), T = D(() => {
      var ee, le;
      if (!w.value) return;
      const F = l.modelChoices.get(w.value.filename);
      if (F)
        switch (F.action) {
          case "select":
            return (ee = F.selected_model) != null && ee.filename ? `→ ${F.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return w.value.is_download_intent ? "Pending Download" : (le = w.value.options) != null && le.length ? `${w.value.options.length} matches` : "Not Found";
    });
    function I(F) {
      F >= 0 && F < l.models.length && (c.value = F);
    }
    function M() {
      var F;
      for (let ee = c.value + 1; ee < l.models.length; ee++) {
        const le = l.models[ee];
        if (!le.is_download_intent && !((F = l.modelChoices) != null && F.has(le.filename))) {
          I(ee);
          return;
        }
      }
    }
    function L() {
      w.value && (r("mark-optional", w.value.filename), Et(() => M()));
    }
    function W() {
      w.value && (r("skip", w.value.filename), Et(() => M()));
    }
    function E(F) {
      w.value && (r("option-selected", w.value.filename, F), Et(() => M()));
    }
    function R() {
      w.value && r("clear-choice", w.value.filename);
    }
    function te() {
      w.value && (f.value = w.value.filename, u.value = !0);
    }
    function se() {
      w.value && (v.value = w.value.download_source || "", y.value = w.value.target_path || C.value, m.value = !0);
    }
    function oe() {
      u.value = !1, f.value = "", k.value = [];
    }
    function X() {
      m.value = !1, v.value = "", y.value = "";
    }
    function V() {
      p.value = !0, setTimeout(() => {
        p.value = !1;
      }, 300);
    }
    function Q(F) {
      w.value && (oe(), Et(() => M()));
    }
    function ne() {
      !w.value || !v.value.trim() || (r("download-url", w.value.filename, v.value.trim(), y.value.trim() || void 0), X(), Et(() => M()));
    }
    function re(F) {
      if (!F) return "Unknown";
      const ee = F / (1024 * 1024 * 1024);
      return ee >= 1 ? `${ee.toFixed(2)} GB` : `${(F / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (F, ee) => {
      var le, Ae, qe;
      return n(), i("div", Qh, [
        t("div", Jh, [
          t("div", Xh, [
            t("h3", Zh, d(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", ey, d(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", ty, d($.value) + "/" + d(e.models.length) + " resolved", 1)
        ]),
        w.value ? (n(), P(Or, {
          key: 0,
          "item-name": w.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: ee[0] || (ee[0] = (je) => I(c.value - 1)),
          onNext: ee[1] || (ee[1] = (je) => I(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : h("", !0),
        w.value ? (n(), i("div", sy, [
          S(Yh, {
            filename: w.value.filename,
            "node-type": ((le = w.value.reference) == null ? void 0 : le.node_type) || "Unknown",
            "has-multiple-options": !!((Ae = w.value.options) != null && Ae.length),
            options: w.value.options,
            choice: (qe = e.modelChoices) == null ? void 0 : qe.get(w.value.filename),
            status: N.value,
            "status-label": T.value,
            onMarkOptional: L,
            onSkip: W,
            onDownloadUrl: se,
            onSearch: te,
            onOptionSelected: E,
            onClearChoice: R
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", oy, [...ee[5] || (ee[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), P(Mt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: wt(oe, ["self"])
          }, [
            t("div", ny, [
              t("div", { class: "model-modal-header" }, [
                ee[6] || (ee[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: oe
                }, "✕")
              ]),
              t("div", ay, [
                S(Ot, {
                  modelValue: f.value,
                  "onUpdate:modelValue": ee[2] || (ee[2] = (je) => f.value = je),
                  placeholder: "Search by filename, category...",
                  onInput: V
                }, null, 8, ["modelValue"]),
                k.value.length > 0 ? (n(), i("div", ly, [
                  (n(!0), i(B, null, he(k.value, (je) => (n(), i("div", {
                    key: je.hash,
                    class: "model-search-result-item",
                    onClick: (xe) => Q()
                  }, [
                    t("div", ry, [
                      t("code", cy, d(je.filename), 1)
                    ]),
                    t("div", uy, [
                      t("span", dy, d(je.category), 1),
                      t("span", my, d(re(je.size)), 1)
                    ]),
                    je.relative_path ? (n(), i("div", fy, d(je.relative_path), 1)) : h("", !0)
                  ], 8, iy))), 128))
                ])) : f.value && !p.value ? (n(), i("div", vy, ' No models found matching "' + d(f.value) + '" ', 1)) : h("", !0),
                p.value ? (n(), i("div", py, "Searching...")) : h("", !0)
              ])
            ])
          ])) : h("", !0)
        ])),
        (n(), P(Mt, { to: "body" }, [
          m.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: wt(X, ["self"])
          }, [
            t("div", gy, [
              t("div", { class: "model-modal-header" }, [
                ee[7] || (ee[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: X
                }, "✕")
              ]),
              t("div", hy, [
                t("div", yy, [
                  ee[8] || (ee[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  S(Ot, {
                    modelValue: v.value,
                    "onUpdate:modelValue": ee[3] || (ee[3] = (je) => v.value = je),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", wy, [
                  ee[9] || (ee[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  S(Ot, {
                    modelValue: y.value,
                    "onUpdate:modelValue": ee[4] || (ee[4] = (je) => y.value = je),
                    placeholder: C.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", _y, [
                  S(Ne, {
                    variant: "secondary",
                    onClick: X
                  }, {
                    default: g(() => [...ee[10] || (ee[10] = [
                      b("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  S(Ne, {
                    variant: "primary",
                    disabled: !v.value.trim() || !y.value.trim(),
                    onClick: ne
                  }, {
                    default: g(() => [...ee[11] || (ee[11] = [
                      b(" Queue Download ", -1)
                    ])]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ])
            ])
          ])) : h("", !0)
        ]))
      ]);
    };
  }
}), by = /* @__PURE__ */ _e(ky, [["__scopeId", "data-v-5c700bfa"]]), $y = { class: "applying-step" }, Cy = {
  key: 0,
  class: "phase-content"
}, xy = {
  key: 1,
  class: "phase-content"
}, Sy = { class: "phase-description" }, Iy = { class: "overall-progress" }, Ey = { class: "progress-bar" }, Ty = { class: "progress-label" }, Py = { class: "install-list" }, Ry = { class: "install-icon" }, My = { key: 0 }, Dy = {
  key: 1,
  class: "spinner"
}, Ly = { key: 2 }, Ny = { key: 3 }, Uy = {
  key: 0,
  class: "install-error"
}, Ay = {
  key: 2,
  class: "phase-content"
}, Oy = { class: "phase-header" }, zy = { class: "phase-title" }, Fy = { class: "completion-summary" }, Vy = {
  key: 0,
  class: "summary-item success"
}, By = { class: "summary-text" }, Wy = {
  key: 1,
  class: "summary-item error"
}, Gy = { class: "summary-text" }, jy = {
  key: 2,
  class: "failed-list"
}, Hy = { class: "failed-node-id" }, Ky = { class: "failed-error" }, qy = {
  key: 4,
  class: "summary-item success"
}, Yy = {
  key: 5,
  class: "restart-prompt"
}, Qy = {
  key: 3,
  class: "phase-content error"
}, Jy = { class: "error-message" }, Xy = /* @__PURE__ */ ye({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = D(() => {
      var f, v;
      const u = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const m = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.length) ?? 0;
      return Math.round(m / u * 100);
    }), a = D(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((m) => !m.success)) || [];
    }), l = D(() => a.value.length > 0);
    function r(u, m) {
      var v, y;
      const f = (v = s.progress.nodeInstallProgress) == null ? void 0 : v.completedNodes.find((k) => k.node_id === u);
      return f ? f.success ? "complete" : "failed" : ((y = s.progress.nodeInstallProgress) == null ? void 0 : y.currentIndex) === m ? "installing" : "pending";
    }
    function c(u) {
      var m, f;
      return (f = (m = s.progress.nodeInstallProgress) == null ? void 0 : m.completedNodes.find((v) => v.node_id === u)) == null ? void 0 : f.error;
    }
    return (u, m) => {
      var f, v, y, k;
      return n(), i("div", $y, [
        e.progress.phase === "resolving" ? (n(), i("div", Cy, [...m[2] || (m[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", xy, [
          m[3] || (m[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Sy, " Installing " + d((((f = e.progress.nodeInstallProgress) == null ? void 0 : f.currentIndex) ?? 0) + 1) + " of " + d(((v = e.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", Iy, [
            t("div", Ey, [
              t("div", {
                class: "progress-fill",
                style: Qt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Ty, d(((y = e.progress.nodeInstallProgress) == null ? void 0 : y.completedNodes.length) ?? 0) + " / " + d(((k = e.progress.nodeInstallProgress) == null ? void 0 : k.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Py, [
            (n(!0), i(B, null, he(e.progress.nodesToInstall, (p, w) => (n(), i("div", {
              key: p,
              class: Re(["install-item", r(p, w)])
            }, [
              t("span", Ry, [
                r(p, w) === "pending" ? (n(), i("span", My, "○")) : r(p, w) === "installing" ? (n(), i("span", Dy, "◌")) : r(p, w) === "complete" ? (n(), i("span", Ly, "✓")) : r(p, w) === "failed" ? (n(), i("span", Ny, "✗")) : h("", !0)
              ]),
              t("code", null, d(p), 1),
              c(p) ? (n(), i("span", Uy, d(c(p)), 1)) : h("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Ay, [
          t("div", Oy, [
            t("span", {
              class: Re(["phase-icon", l.value ? "warning" : "success"])
            }, d(l.value ? "⚠" : "✓"), 3),
            t("h3", zy, d(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Fy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Vy, [
              m[4] || (m[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", By, d(e.progress.nodesInstalled.length) + " node package" + d(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", Wy, [
              m[5] || (m[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", Gy, d(a.value.length) + " package" + d(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("div", jy, [
              (n(!0), i(B, null, he(a.value, (p) => (n(), i("div", {
                key: p.node_id,
                class: "failed-item"
              }, [
                t("code", Hy, d(p.node_id), 1),
                t("span", Ky, d(p.error), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: m[0] || (m[0] = (p) => u.$emit("retry-failed"))
            }, " Retry Failed (" + d(a.value.length) + ") ", 1)) : h("", !0),
            l.value ? h("", !0) : (n(), i("div", qy, [...m[6] || (m[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            m[8] || (m[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Yy, [
              m[7] || (m[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: m[1] || (m[1] = (p) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : h("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", Qy, [
          m[9] || (m[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", Jy, d(e.progress.error), 1)
        ])) : h("", !0)
      ]);
    };
  }
}), Zy = /* @__PURE__ */ _e(Xy, [["__scopeId", "data-v-5efaae58"]]), e1 = {
  key: 0,
  class: "loading-state"
}, t1 = {
  key: 1,
  class: "wizard-content"
}, s1 = {
  key: 0,
  class: "step-content"
}, o1 = { class: "analysis-summary" }, n1 = { class: "analysis-header" }, a1 = { class: "summary-description" }, l1 = { class: "stats-grid" }, i1 = { class: "stat-card" }, r1 = { class: "stat-items" }, c1 = {
  key: 0,
  class: "stat-item success"
}, u1 = { class: "stat-count" }, d1 = {
  key: 1,
  class: "stat-item info"
}, m1 = { class: "stat-count" }, f1 = {
  key: 2,
  class: "stat-item warning"
}, v1 = { class: "stat-count" }, p1 = {
  key: 3,
  class: "stat-item warning"
}, g1 = { class: "stat-count" }, h1 = {
  key: 4,
  class: "stat-item warning"
}, y1 = { class: "stat-count" }, w1 = {
  key: 5,
  class: "stat-item error"
}, _1 = { class: "stat-count" }, k1 = { class: "stat-card" }, b1 = { class: "stat-items" }, $1 = { class: "stat-item success" }, C1 = { class: "stat-count" }, x1 = {
  key: 0,
  class: "stat-item info"
}, S1 = { class: "stat-count" }, I1 = {
  key: 1,
  class: "stat-item warning"
}, E1 = { class: "stat-count" }, T1 = {
  key: 2,
  class: "stat-item warning"
}, P1 = { class: "stat-count" }, R1 = {
  key: 3,
  class: "stat-item error"
}, M1 = { class: "stat-count" }, D1 = {
  key: 0,
  class: "status-message warning"
}, L1 = { class: "status-text" }, N1 = {
  key: 1,
  class: "status-message warning"
}, U1 = { class: "status-text" }, A1 = {
  key: 2,
  class: "status-message info"
}, O1 = { class: "status-text" }, z1 = {
  key: 3,
  class: "status-message info"
}, F1 = { class: "status-text" }, V1 = {
  key: 4,
  class: "status-message info"
}, B1 = { class: "status-text" }, W1 = {
  key: 5,
  class: "status-message warning"
}, G1 = { class: "status-text" }, j1 = {
  key: 6,
  class: "status-message success"
}, H1 = {
  key: 7,
  class: "category-mismatch-section"
}, K1 = { class: "mismatch-list" }, q1 = { class: "mismatch-path" }, Y1 = { class: "mismatch-target" }, Q1 = {
  key: 8,
  class: "category-mismatch-section"
}, J1 = { class: "mismatch-list" }, X1 = { class: "mismatch-path" }, Z1 = { class: "status-text" }, e0 = {
  key: 1,
  class: "step-content node-step-content"
}, t0 = {
  key: 0,
  class: "community-node-section"
}, s0 = { class: "community-node-header" }, o0 = { class: "community-node-title" }, n0 = { class: "community-node-list" }, a0 = { class: "community-node-info" }, l0 = { class: "community-node-heading" }, i0 = { class: "item-name" }, r0 = { class: "community-node-package" }, c0 = { class: "community-node-meta" }, u0 = { class: "community-node-guidance" }, d0 = { key: 0 }, m0 = { class: "community-choice-status" }, f0 = { class: "community-node-actions" }, v0 = {
  key: 3,
  class: "step-content"
}, p0 = { class: "review-summary" }, g0 = { class: "review-stats" }, h0 = { class: "review-stat" }, y0 = { class: "stat-value" }, w0 = { class: "review-stat" }, _0 = { class: "stat-value" }, k0 = { class: "review-stat" }, b0 = { class: "stat-value" }, $0 = { class: "review-stat" }, C0 = { class: "stat-value" }, x0 = {
  key: 0,
  class: "review-section"
}, S0 = { class: "section-title" }, I0 = { class: "review-items" }, E0 = { class: "item-name" }, T0 = { class: "item-choice" }, P0 = {
  key: 0,
  class: "choice-badge install"
}, R0 = {
  key: 1,
  class: "choice-badge skip"
}, M0 = {
  key: 1,
  class: "review-section"
}, D0 = { class: "section-title" }, L0 = { class: "review-items" }, N0 = { class: "item-name" }, U0 = { class: "item-choice" }, A0 = {
  key: 0,
  class: "choice-badge install"
}, O0 = {
  key: 1,
  class: "choice-badge optional"
}, z0 = {
  key: 2,
  class: "choice-badge skip"
}, F0 = {
  key: 2,
  class: "review-section"
}, V0 = { class: "section-title" }, B0 = { class: "review-items" }, W0 = { class: "item-name" }, G0 = { class: "item-choice" }, j0 = {
  key: 0,
  class: "choice-badge install"
}, H0 = {
  key: 1,
  class: "choice-badge optional"
}, K0 = {
  key: 2,
  class: "choice-badge skip"
}, q0 = {
  key: 1,
  class: "choice-badge pending"
}, Y0 = {
  key: 3,
  class: "review-section"
}, Q0 = { class: "section-title" }, J0 = { class: "review-items download-details" }, X0 = { class: "download-info" }, Z0 = { class: "item-name" }, ew = { class: "download-meta" }, tw = { class: "download-path" }, sw = ["title"], ow = {
  key: 4,
  class: "review-section"
}, nw = { class: "section-title" }, aw = { class: "review-items" }, lw = { class: "item-name" }, iw = { class: "item-choice" }, rw = {
  key: 0,
  class: "choice-badge install"
}, cw = {
  key: 1,
  class: "choice-badge download"
}, uw = {
  key: 2,
  class: "choice-badge optional"
}, dw = {
  key: 3,
  class: "choice-badge skip"
}, mw = {
  key: 4,
  class: "choice-badge skip"
}, fw = {
  key: 1,
  class: "choice-badge download"
}, vw = {
  key: 2,
  class: "choice-badge pending"
}, pw = {
  key: 5,
  class: "no-choices"
}, gw = /* @__PURE__ */ ye({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: m, resetProgress: f } = Ar(), { loadPendingDownloads: v } = Do(), { openFileLocation: y, queueNodeInstall: k } = ut(), p = _(null), w = _(!1), x = _(!1), $ = _(null), C = _("analysis"), N = _([]), T = _(/* @__PURE__ */ new Map()), I = _(/* @__PURE__ */ new Map()), M = _(/* @__PURE__ */ new Set()), L = D(() => {
      const ae = [
        { id: "analysis", label: "Analysis" }
      ];
      return (oe.value || Q.value || ne.value) && ae.push({ id: "nodes", label: "Nodes" }), X.value && ae.push({ id: "models", label: "Models" }), ae.push({ id: "review", label: "Review" }), C.value === "applying" && ae.push({ id: "applying", label: "Applying" }), ae;
    }), W = D(() => p.value ? p.value.stats.needs_user_input : !1), E = D(() => p.value ? p.value.nodes.version_gated || [] : []), R = D(() => p.value ? p.value.nodes.uninstallable || [] : []), te = D(() => R.value.filter((ae) => {
      var G;
      return !!((G = ae.package) != null && G.package_id);
    })), se = D(() => E.value.length > 0), oe = D(() => p.value ? p.value.nodes.unresolved.length > 0 || p.value.nodes.ambiguous.length > 0 : !1), X = D(() => p.value ? p.value.models.unresolved.length > 0 || p.value.models.ambiguous.length > 0 : !1), V = D(() => p.value ? p.value.stats.download_intents > 0 : !1), Q = D(() => p.value ? p.value.stats.nodes_needing_installation > 0 : !1), ne = D(() => te.value.length > 0), re = D(() => p.value ? p.value.nodes.resolved.length : 0), F = D(() => p.value ? p.value.models.resolved.filter((ae) => ae.has_category_mismatch) : []), ee = D(() => F.value.length > 0), le = D(() => oe.value || Q.value || ne.value ? "nodes" : X.value ? "models" : "review"), Ae = D(() => {
      if (!p.value) return [];
      const ae = p.value.nodes.resolved.filter((de) => !de.is_installed), G = /* @__PURE__ */ new Set();
      return ae.filter((de) => G.has(de.package.package_id) ? !1 : (G.add(de.package.package_id), !0));
    }), qe = D(() => {
      if (!p.value) return [];
      const ae = p.value.nodes.resolved.filter((de) => !de.is_installed), G = /* @__PURE__ */ new Map();
      for (const de of ae) {
        const Ge = G.get(de.package.package_id);
        Ge ? Ge.node_types_count++ : G.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(G.values());
    }), je = D(() => Ae.value.filter((ae) => !M.value.has(ae.package.package_id))), xe = D(() => p.value ? p.value.models.resolved.filter(
      (ae) => ae.match_type === "download_intent" || ae.match_type === "property_download_intent"
    ).map((ae) => ({
      filename: ae.reference.widget_value,
      reference: ae.reference,
      is_download_intent: !0,
      resolved_model: ae.model,
      download_source: ae.download_source,
      target_path: ae.target_path
    })) : []), A = D(() => {
      if (!p.value) return [];
      const ae = p.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), G = p.value.nodes.ambiguous.map((de) => ({
        node_type: de.reference.node_type,
        has_multiple_options: !0,
        options: de.options.map((Ge) => ({
          package_id: Ge.package.package_id,
          title: Ge.package.title,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          is_installed: Ge.is_installed
        }))
      }));
      return [...ae, ...G];
    }), Y = D(() => {
      if (!p.value) return [];
      const ae = p.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), G = p.value.models.ambiguous.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        has_multiple_options: !0,
        options: de.options.map((Ge) => ({
          model: Ge.model,
          match_confidence: Ge.match_confidence,
          match_type: Ge.match_type,
          has_download_source: Ge.has_download_source
        }))
      }));
      return [...ae, ...G];
    }), z = D(() => {
      const ae = Y.value, G = xe.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...ae, ...G];
    }), O = D(() => xe.value.filter((ae) => {
      const G = I.value.get(ae.filename);
      return G ? G.action === "download" : !0;
    }).map((ae) => ({
      filename: ae.filename,
      url: ae.download_source,
      target_path: ae.target_path
    })));
    function ie(ae, G = 50) {
      return ae.length <= G ? ae : ae.slice(0, G - 3) + "...";
    }
    const Te = D(() => {
      let ae = je.value.length;
      for (const G of T.value.values())
        G.action === "install" && ae++;
      for (const G of I.value.values())
        G.action === "select" && ae++;
      return ae;
    }), Ye = D(() => {
      let ae = 0;
      for (const G of I.value.values())
        G.action === "download" && ae++;
      for (const G of xe.value)
        I.value.get(G.filename) || ae++;
      return ae;
    }), U = D(() => {
      let ae = 0;
      for (const G of T.value.values())
        G.action === "optional" && ae++;
      for (const G of I.value.values())
        G.action === "optional" && ae++;
      return ae;
    }), H = D(() => {
      let ae = M.value.size;
      for (const G of T.value.values())
        G.action === "skip" && ae++;
      for (const G of I.value.values())
        G.action === "skip" && ae++;
      for (const G of A.value)
        T.value.has(G.node_type) || ae++;
      for (const G of Y.value)
        I.value.has(G.filename) || ae++;
      return ae;
    }), ce = D(() => {
      const ae = {};
      if (ae.analysis = { resolved: 1, total: 1 }, oe.value || ne.value) {
        const G = A.value.length, de = te.value.length, Ge = A.value.filter(
          (He) => T.value.has(He.node_type)
        ).length, nt = te.value.filter(
          (He) => T.value.has(He.reference.node_type)
        ).length, Se = G + de, Z = Ge + nt;
        ae.nodes = { resolved: Z, total: Se };
      }
      if (X.value) {
        const G = z.value.length, de = z.value.filter(
          (Ge) => I.value.has(Ge.filename) || Ge.is_download_intent
        ).length;
        ae.models = { resolved: de, total: G };
      }
      if (ae.review = { resolved: 1, total: 1 }, C.value === "applying") {
        const G = m.totalFiles || 1, de = m.completedFiles.length;
        ae.applying = { resolved: de, total: G };
      }
      return ae;
    });
    function Ee(ae) {
      C.value = ae;
    }
    function ke() {
      const ae = L.value.findIndex((G) => G.id === C.value);
      ae > 0 && (C.value = L.value[ae - 1].id);
    }
    function be() {
      const ae = L.value.findIndex((G) => G.id === C.value);
      ae < L.value.length - 1 && (C.value = L.value[ae + 1].id);
    }
    function De() {
      for (const ae of te.value) {
        const G = ae.reference.node_type;
        T.value.has(G) || Ce(ae, "registry");
      }
    }
    async function we() {
      w.value = !0, $.value = null;
      try {
        p.value = await l(o.workflowName), De();
      } catch (ae) {
        $.value = ae instanceof Error ? ae.message : "Failed to analyze workflow";
      } finally {
        w.value = !1;
      }
    }
    function Pe() {
      N.value.includes("analysis") || N.value.push("analysis"), oe.value || Q.value || ne.value ? C.value = "nodes" : X.value ? C.value = "models" : C.value = "review";
    }
    function fe(ae) {
      T.value.set(ae, { action: "optional" });
    }
    function Be(ae) {
      T.value.set(ae, { action: "skip" });
    }
    function Ue(ae, G) {
      var Ge;
      const de = A.value.find((nt) => nt.node_type === ae);
      (Ge = de == null ? void 0 : de.options) != null && Ge[G] && T.value.set(ae, {
        action: "install",
        package_id: de.options[G].package_id
      });
    }
    function ve(ae, G) {
      T.value.set(ae, {
        action: "install",
        package_id: G
      });
    }
    function j(ae) {
      T.value.delete(ae);
    }
    function Oe(ae) {
      return T.value.get(ae);
    }
    function Ie(ae) {
      const G = Oe(ae);
      return G ? G.action === "optional" ? "Marked optional" : G.action === "skip" ? "Skipped" : G.action === "install" ? G.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function Ce(ae, G) {
      var nt;
      const de = (nt = ae.package) == null ? void 0 : nt.package_id;
      if (!de) return;
      const Ge = {
        action: "install",
        package_id: de,
        version: ae.package.latest_version || null,
        install_source: G
      };
      G === "git" && ae.package.repository && (Ge.repository = ae.package.repository), T.value.set(ae.reference.node_type, Ge);
    }
    function Le(ae) {
      T.value.set(ae, { action: "optional" });
    }
    function Me(ae) {
      T.value.set(ae, { action: "skip" });
    }
    function q(ae) {
      M.value.has(ae) ? M.value.delete(ae) : M.value.add(ae);
    }
    function me(ae) {
      I.value.set(ae, { action: "optional" });
    }
    function ge(ae) {
      I.value.set(ae, { action: "skip" });
    }
    function ze(ae, G) {
      var Ge;
      const de = Y.value.find((nt) => nt.filename === ae);
      (Ge = de == null ? void 0 : de.options) != null && Ge[G] && I.value.set(ae, {
        action: "select",
        selected_model: de.options[G].model
      });
    }
    function Fe(ae, G, de) {
      I.value.set(ae, {
        action: "download",
        url: G,
        target_path: de
      });
    }
    function et(ae) {
      I.value.delete(ae);
    }
    async function ot(ae) {
      try {
        await y(ae);
      } catch (G) {
        $.value = G instanceof Error ? G.message : "Failed to open file location";
      }
    }
    async function Ze() {
      var ae;
      x.value = !0, $.value = null, f(), m.phase = "resolving", C.value = "applying";
      try {
        const G = await r(o.workflowName, T.value, I.value, M.value);
        G.models_to_download && G.models_to_download.length > 0 && u(o.workflowName, G.models_to_download);
        const de = te.value.map((Z) => {
          const He = Oe(Z.reference.node_type);
          if ((He == null ? void 0 : He.action) !== "install" || He.install_source !== "git")
            return null;
          const bt = He.repository || Z.package.repository, St = He.package_id || Z.package.package_id;
          return !bt || !St ? null : {
            id: St,
            repository: bt,
            selectedVersion: He.version || Z.package.latest_version || "latest"
          };
        }).filter((Z) => !!Z), Ge = new Set(de.map((Z) => Z.id)), nt = [
          ...G.nodes_to_install || [],
          ...je.value.map((Z) => Z.package.package_id)
        ];
        m.nodesToInstall = [...new Set(nt)].filter((Z) => !Ge.has(Z)), m.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const Z of de)
          await k({
            id: Z.id,
            version: Z.selectedVersion,
            selected_version: Z.selectedVersion,
            repository: Z.repository,
            install_source: "git",
            mode: "remote",
            channel: "default"
          }), m.needsRestart = !0;
        m.phase = "complete", await v();
        const Se = m.installError || ((ae = m.nodeInstallProgress) == null ? void 0 : ae.completedNodes.some((Z) => !Z.success));
        !m.needsRestart && !Se && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (G) {
        $.value = G instanceof Error ? G.message : "Failed to apply resolution", m.error = $.value, m.phase = "error";
      } finally {
        x.value = !1;
      }
    }
    function xt() {
      a("refresh"), a("restart"), a("close");
    }
    async function _t() {
      var G;
      const ae = ((G = m.nodeInstallProgress) == null ? void 0 : G.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (ae.length !== 0) {
        m.phase = "installing", m.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ae.length
        }, m.nodesToInstall = ae, m.nodesInstalled = [], m.installError = void 0;
        try {
          await c(o.workflowName), m.phase = "complete";
        } catch (de) {
          m.error = de instanceof Error ? de.message : "Retry failed", m.phase = "error";
        }
      }
    }
    return rt(we), (ae, G) => (n(), P(kt, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: w.value,
      error: $.value || void 0,
      "fixed-height": !0,
      onClose: G[1] || (G[1] = (de) => a("close"))
    }, {
      body: g(() => [
        w.value && !p.value ? (n(), i("div", e1, [...G[2] || (G[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : p.value ? (n(), i("div", t1, [
          S(rg, {
            steps: L.value,
            "current-step": C.value,
            "completed-steps": N.value,
            "step-stats": ce.value,
            onStepChange: Ee
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          C.value === "analysis" ? (n(), i("div", s1, [
            t("div", o1, [
              t("div", n1, [
                G[3] || (G[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", a1, " Found " + d(p.value.stats.total_nodes) + " nodes and " + d(p.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", l1, [
                t("div", i1, [
                  G[16] || (G[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", r1, [
                    re.value > 0 ? (n(), i("div", c1, [
                      G[4] || (G[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", u1, d(re.value), 1),
                      G[5] || (G[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : h("", !0),
                    p.value.stats.packages_needing_installation > 0 ? (n(), i("div", d1, [
                      G[6] || (G[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", m1, d(p.value.stats.packages_needing_installation), 1),
                      G[7] || (G[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : h("", !0),
                    p.value.nodes.ambiguous.length > 0 ? (n(), i("div", f1, [
                      G[8] || (G[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", v1, d(p.value.nodes.ambiguous.length), 1),
                      G[9] || (G[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    E.value.length > 0 ? (n(), i("div", p1, [
                      G[10] || (G[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", g1, d(E.value.length), 1),
                      G[11] || (G[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : h("", !0),
                    R.value.length > 0 ? (n(), i("div", h1, [
                      G[12] || (G[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", y1, d(R.value.length), 1),
                      G[13] || (G[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : h("", !0),
                    p.value.nodes.unresolved.length > 0 ? (n(), i("div", w1, [
                      G[14] || (G[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", _1, d(p.value.nodes.unresolved.length), 1),
                      G[15] || (G[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ]),
                t("div", k1, [
                  G[27] || (G[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", b1, [
                    t("div", $1, [
                      G[17] || (G[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", C1, d(p.value.models.resolved.length - p.value.stats.download_intents - p.value.stats.models_with_category_mismatch), 1),
                      G[18] || (G[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    p.value.stats.download_intents > 0 ? (n(), i("div", x1, [
                      G[19] || (G[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", S1, d(p.value.stats.download_intents), 1),
                      G[20] || (G[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : h("", !0),
                    ee.value ? (n(), i("div", I1, [
                      G[21] || (G[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", E1, d(F.value.length), 1),
                      G[22] || (G[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : h("", !0),
                    p.value.models.ambiguous.length > 0 ? (n(), i("div", T1, [
                      G[23] || (G[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", P1, d(p.value.models.ambiguous.length), 1),
                      G[24] || (G[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : h("", !0),
                    p.value.models.unresolved.length > 0 ? (n(), i("div", R1, [
                      G[25] || (G[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", M1, d(p.value.models.unresolved.length), 1),
                      G[26] || (G[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : h("", !0)
                  ])
                ])
              ]),
              W.value ? (n(), i("div", D1, [
                G[28] || (G[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", L1, d(A.value.length + Y.value.length) + " items need your input", 1)
              ])) : se.value ? (n(), i("div", N1, [
                G[29] || (G[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", U1, d(E.value.length) + " node type" + d(E.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : R.value.length > 0 ? (n(), i("div", A1, [
                G[30] || (G[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", O1, d(R.value.length) + " community-mapped node type" + d(R.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : Q.value ? (n(), i("div", z1, [
                G[31] || (G[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", F1, d(p.value.stats.packages_needing_installation) + " package" + d(p.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + d(p.value.stats.nodes_needing_installation) + " node type" + d(p.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + d(V.value ? `, ${p.value.stats.download_intents} model${p.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : V.value ? (n(), i("div", V1, [
                G[32] || (G[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", B1, d(p.value.stats.download_intents) + " model" + d(p.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : ee.value ? (n(), i("div", W1, [
                G[33] || (G[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", G1, d(F.value.length) + " model" + d(F.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", j1, [...G[34] || (G[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              ee.value ? (n(), i("div", H1, [
                G[37] || (G[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", K1, [
                  (n(!0), i(B, null, he(F.value, (de) => {
                    var Ge, nt;
                    return n(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", q1, d(de.actual_category) + "/" + d((Ge = de.model) == null ? void 0 : Ge.filename), 1),
                      G[36] || (G[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", Y1, d((nt = de.expected_categories) == null ? void 0 : nt[0]) + "/", 1),
                      de.file_path ? (n(), P(Ne, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Se) => ot(de.file_path)
                      }, {
                        default: g(() => [...G[35] || (G[35] = [
                          b(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              se.value ? (n(), i("div", Q1, [
                G[38] || (G[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", J1, [
                  (n(!0), i(B, null, he(E.value, (de) => {
                    var Ge;
                    return n(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", X1, d(de.reference.node_type), 1),
                      t("span", Z1, d(de.guidance || ((Ge = p.value.node_guidance) == null ? void 0 : Ge[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : h("", !0)
            ])
          ])) : h("", !0),
          C.value === "nodes" ? (n(), i("div", e0, [
            S(Th, {
              nodes: A.value,
              "node-choices": T.value,
              "auto-resolved-packages": qe.value,
              "skipped-packages": M.value,
              onMarkOptional: fe,
              onSkip: Be,
              onOptionSelected: Ue,
              onManualEntry: ve,
              onClearChoice: j,
              onPackageSkip: q
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages"]),
            te.value.length > 0 ? (n(), i("div", t0, [
              t("div", s0, [
                t("h4", o0, "Community-Mapped Packages (" + d(te.value.length) + ")", 1),
                G[39] || (G[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", n0, [
                (n(!0), i(B, null, he(te.value, (de) => (n(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", a0, [
                    t("div", l0, [
                      t("code", i0, d(de.reference.node_type), 1),
                      t("span", r0, d(de.package.title || de.package.package_id), 1)
                    ]),
                    t("div", c0, d(de.package.package_id), 1),
                    t("div", u0, [
                      G[40] || (G[40] = b(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (n(), i("span", d0, d(de.guidance), 1)) : h("", !0)
                    ]),
                    t("div", m0, d(Ie(de.reference.node_type)), 1)
                  ]),
                  t("div", f0, [
                    S(Ne, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (Ge) => Ce(de, "registry")
                    }, {
                      default: g(() => [...G[41] || (G[41] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (n(), P(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (Ge) => Ce(de, "git")
                    }, {
                      default: g(() => [...G[42] || (G[42] = [
                        b(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : h("", !0),
                    S(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => Le(de.reference.node_type)
                    }, {
                      default: g(() => [...G[43] || (G[43] = [
                        b(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(Ne, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => Me(de.reference.node_type)
                    }, {
                      default: g(() => [...G[44] || (G[44] = [
                        b(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : h("", !0)
          ])) : h("", !0),
          C.value === "models" ? (n(), P(by, {
            key: 2,
            models: z.value,
            "model-choices": I.value,
            onMarkOptional: me,
            onSkip: ge,
            onOptionSelected: ze,
            onDownloadUrl: Fe,
            onClearChoice: et
          }, null, 8, ["models", "model-choices"])) : h("", !0),
          C.value === "review" ? (n(), i("div", v0, [
            t("div", p0, [
              G[50] || (G[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", g0, [
                t("div", h0, [
                  t("span", y0, d(Te.value), 1),
                  G[45] || (G[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", w0, [
                  t("span", _0, d(Ye.value), 1),
                  G[46] || (G[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", k0, [
                  t("span", b0, d(U.value), 1),
                  G[47] || (G[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", $0, [
                  t("span", C0, d(H.value), 1),
                  G[48] || (G[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              qe.value.length > 0 ? (n(), i("div", x0, [
                t("h4", S0, "Node Packages (" + d(qe.value.length) + ")", 1),
                t("div", I0, [
                  (n(!0), i(B, null, he(qe.value, (de) => (n(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    t("code", E0, d(de.package_id), 1),
                    t("div", T0, [
                      M.value.has(de.package_id) ? (n(), i("span", R0, "Skipped")) : (n(), i("span", P0, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : h("", !0),
              te.value.length > 0 ? (n(), i("div", M0, [
                t("h4", D0, "Community-Mapped Packages (" + d(te.value.length) + ")", 1),
                t("div", L0, [
                  (n(!0), i(B, null, he(te.value, (de) => {
                    var Ge, nt, Se;
                    return n(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", N0, d(de.reference.node_type), 1),
                      t("div", U0, [
                        ((Ge = Oe(de.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", A0, d(((nt = Oe(de.reference.node_type)) == null ? void 0 : nt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Se = Oe(de.reference.node_type)) == null ? void 0 : Se.action) === "optional" ? (n(), i("span", O0, " Optional ")) : (n(), i("span", z0, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              A.value.length > 0 ? (n(), i("div", F0, [
                t("h4", V0, "Node Choices (" + d(A.value.length) + ")", 1),
                t("div", B0, [
                  (n(!0), i(B, null, he(A.value, (de) => {
                    var Ge, nt, Se, Z;
                    return n(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      t("code", W0, d(de.node_type), 1),
                      t("div", G0, [
                        T.value.has(de.node_type) ? (n(), i(B, { key: 0 }, [
                          ((Ge = T.value.get(de.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", j0, d((nt = T.value.get(de.node_type)) == null ? void 0 : nt.package_id), 1)) : ((Se = T.value.get(de.node_type)) == null ? void 0 : Se.action) === "optional" ? (n(), i("span", H0, " Optional ")) : ((Z = T.value.get(de.node_type)) == null ? void 0 : Z.action) === "skip" ? (n(), i("span", K0, " Skip ")) : h("", !0)
                        ], 64)) : (n(), i("span", q0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              O.value.length > 0 ? (n(), i("div", Y0, [
                t("h4", Q0, "Models to Download (" + d(O.value.length) + ")", 1),
                t("div", J0, [
                  (n(!0), i(B, null, he(O.value, (de) => (n(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", X0, [
                      t("code", Z0, d(de.filename), 1),
                      t("div", ew, [
                        t("span", tw, "→ " + d(de.target_path), 1),
                        de.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, d(ie(de.url)), 9, sw)) : h("", !0)
                      ])
                    ]),
                    G[49] || (G[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : h("", !0),
              z.value.length > 0 ? (n(), i("div", ow, [
                t("h4", nw, "Models (" + d(z.value.length) + ")", 1),
                t("div", aw, [
                  (n(!0), i(B, null, he(z.value, (de) => {
                    var Ge, nt, Se, Z, He, bt, St;
                    return n(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      t("code", lw, d(de.filename), 1),
                      t("div", iw, [
                        I.value.has(de.filename) ? (n(), i(B, { key: 0 }, [
                          ((Ge = I.value.get(de.filename)) == null ? void 0 : Ge.action) === "select" ? (n(), i("span", rw, d((Se = (nt = I.value.get(de.filename)) == null ? void 0 : nt.selected_model) == null ? void 0 : Se.filename), 1)) : ((Z = I.value.get(de.filename)) == null ? void 0 : Z.action) === "download" ? (n(), i("span", cw, " Download ")) : ((He = I.value.get(de.filename)) == null ? void 0 : He.action) === "optional" ? (n(), i("span", uw, " Optional ")) : ((bt = I.value.get(de.filename)) == null ? void 0 : bt.action) === "skip" ? (n(), i("span", dw, " Skip ")) : ((St = I.value.get(de.filename)) == null ? void 0 : St.action) === "cancel_download" ? (n(), i("span", mw, " Cancel Download ")) : h("", !0)
                        ], 64)) : de.is_download_intent ? (n(), i("span", fw, " Pending Download ")) : (n(), i("span", vw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : h("", !0),
              Ae.value.length === 0 && te.value.length === 0 && A.value.length === 0 && z.value.length === 0 ? (n(), i("div", pw, " No dependencies need resolution. ")) : h("", !0)
            ])
          ])) : h("", !0),
          C.value === "applying" ? (n(), P(Zy, {
            key: 4,
            progress: Xe(m),
            onRestart: xt,
            onRetryFailed: _t
          }, null, 8, ["progress"])) : h("", !0)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        C.value !== "analysis" && C.value !== "applying" ? (n(), P(Ne, {
          key: 0,
          variant: "secondary",
          disabled: x.value,
          onClick: ke
        }, {
          default: g(() => [...G[51] || (G[51] = [
            b(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        G[54] || (G[54] = t("div", { class: "footer-spacer" }, null, -1)),
        C.value !== "applying" || Xe(m).phase === "complete" || Xe(m).phase === "error" ? (n(), P(Ne, {
          key: 1,
          variant: "secondary",
          onClick: G[0] || (G[0] = (de) => a("close"))
        }, {
          default: g(() => [
            b(d(Xe(m).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : h("", !0),
        C.value === "analysis" ? (n(), P(Ne, {
          key: 2,
          variant: "primary",
          disabled: w.value,
          onClick: Pe
        }, {
          default: g(() => [
            b(d(le.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : h("", !0),
        C.value === "nodes" ? (n(), P(Ne, {
          key: 3,
          variant: "primary",
          onClick: be
        }, {
          default: g(() => [
            b(d(X.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : h("", !0),
        C.value === "models" ? (n(), P(Ne, {
          key: 4,
          variant: "primary",
          onClick: be
        }, {
          default: g(() => [...G[52] || (G[52] = [
            b(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        C.value === "review" ? (n(), P(Ne, {
          key: 5,
          variant: "primary",
          disabled: x.value,
          loading: x.value,
          onClick: Ze
        }, {
          default: g(() => [...G[53] || (G[53] = [
            b(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), hw = /* @__PURE__ */ _e(gw, [["__scopeId", "data-v-939d49cc"]]), yw = { class: "search-input-wrapper" }, ww = ["value", "placeholder"], _w = /* @__PURE__ */ ye({
  __name: "SearchInput",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 },
    autoFocus: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(null);
    let r;
    function c(m) {
      const f = m.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", f);
      }, o.debounce)) : a("update:modelValue", f);
    }
    function u() {
      var m;
      a("update:modelValue", ""), a("clear"), (m = l.value) == null || m.focus();
    }
    return rt(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (m, f) => (n(), i("div", yw, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ss(u, ["escape"])
      }, null, 40, ww),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : h("", !0)
    ]));
  }
}), kw = /* @__PURE__ */ _e(_w, [["__scopeId", "data-v-266f857a"]]), bw = { class: "search-bar" }, $w = /* @__PURE__ */ ye({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", bw, [
      S(kw, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), Lo = /* @__PURE__ */ _e($w, [["__scopeId", "data-v-3d51bbfd"]]), Cw = { class: "section-group" }, xw = {
  key: 0,
  class: "section-content"
}, Sw = /* @__PURE__ */ ye({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", Cw, [
      S(Kt, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: g(() => [
          b(d(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", xw, [
        at(c.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ]));
  }
}), pt = /* @__PURE__ */ _e(Sw, [["__scopeId", "data-v-c48e33ed"]]), Iw = { class: "item-header" }, Ew = {
  key: 0,
  class: "item-icon"
}, Tw = { class: "item-info" }, Pw = {
  key: 0,
  class: "item-title"
}, Rw = {
  key: 1,
  class: "item-subtitle"
}, Mw = {
  key: 0,
  class: "item-details"
}, Dw = {
  key: 1,
  class: "item-actions"
}, Lw = /* @__PURE__ */ ye({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = D(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Re(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", Iw, [
        l.$slots.icon ? (n(), i("span", Ew, [
          at(l.$slots, "icon", {}, void 0)
        ])) : h("", !0),
        t("div", Tw, [
          l.$slots.title ? (n(), i("div", Pw, [
            at(l.$slots, "title", {}, void 0)
          ])) : h("", !0),
          l.$slots.subtitle ? (n(), i("div", Rw, [
            at(l.$slots, "subtitle", {}, void 0)
          ])) : h("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", Mw, [
        at(l.$slots, "details", {}, void 0)
      ])) : h("", !0),
      l.$slots.actions ? (n(), i("div", Dw, [
        at(l.$slots, "actions", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Pt = /* @__PURE__ */ _e(Lw, [["__scopeId", "data-v-cc435e0e"]]), Nw = { class: "loading-state" }, Uw = { class: "loading-message" }, Aw = /* @__PURE__ */ ye({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", Nw, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", Uw, d(e.message), 1)
    ]));
  }
}), Ns = /* @__PURE__ */ _e(Aw, [["__scopeId", "data-v-ad8436c9"]]), Ow = { class: "error-state" }, zw = { class: "error-message" }, Fw = /* @__PURE__ */ ye({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", Ow, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", zw, d(e.message), 1),
      e.retry ? (n(), P(pe, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: g(() => [...o[1] || (o[1] = [
          b(" Retry ", -1)
        ])]),
        _: 1
      })) : h("", !0)
    ]));
  }
}), Us = /* @__PURE__ */ _e(Fw, [["__scopeId", "data-v-5397be48"]]), Vw = /* @__PURE__ */ ye({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ut(), r = _([]), c = _(!1), u = _(null), m = _(""), f = _(!0), v = _(!1), y = _(!1), k = _(!1), p = _(null), w = D(
      () => r.value.filter((re) => re.status === "broken")
    ), x = D(
      () => r.value.filter((re) => re.status === "new")
    ), $ = D(
      () => r.value.filter((re) => re.status === "modified")
    ), C = D(
      () => r.value.filter((re) => re.status === "synced")
    ), N = D(() => {
      if (!m.value.trim()) return r.value;
      const re = m.value.toLowerCase();
      return r.value.filter((F) => F.name.toLowerCase().includes(re));
    }), T = D(
      () => w.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), I = D(
      () => x.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), M = D(
      () => $.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), L = D(
      () => C.value.filter(
        (re) => !m.value.trim() || re.name.toLowerCase().includes(m.value.toLowerCase())
      )
    ), W = D(
      () => v.value ? L.value : L.value.slice(0, 5)
    );
    async function E(re = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(re);
      } catch (F) {
        u.value = F instanceof Error ? F.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    s({ loadWorkflows: E });
    function R(re) {
      p.value = re, y.value = !0;
    }
    function te(re) {
      p.value = re, k.value = !0;
    }
    function se() {
      a("refresh");
    }
    async function oe() {
      k.value = !1, await E(!0);
    }
    async function X() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function V(re) {
      return re.replace(/uninstallable node mappings?/gi, (F) => F.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function Q(re) {
      if (re.issue_summary && re.issue_summary.trim().length > 0)
        return V(re.issue_summary);
      const F = [];
      return re.version_gated_count && re.version_gated_count > 0 && F.push(`${re.version_gated_count} node${re.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), re.uninstallable_count && re.uninstallable_count > 0 && F.push(`${re.uninstallable_count} node${re.uninstallable_count > 1 ? "s" : ""} need community packages`), re.missing_nodes > 0 && F.push(`${re.missing_nodes} missing node${re.missing_nodes > 1 ? "s" : ""}`), re.missing_models > 0 && F.push(`${re.missing_models} missing model${re.missing_models > 1 ? "s" : ""}`), re.models_with_category_mismatch && re.models_with_category_mismatch > 0 && F.push(`${re.models_with_category_mismatch} model${re.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), re.pending_downloads && re.pending_downloads > 0 && F.push(`${re.pending_downloads} pending download${re.pending_downloads > 1 ? "s" : ""}`), F.length > 0 ? F.join(", ") : "Has issues";
    }
    function ne(re) {
      const F = re.sync_state === "new" ? "New" : re.sync_state === "modified" ? "Modified" : re.sync_state === "synced" ? "Synced" : re.sync_state;
      return re.has_path_sync_issues && re.models_needing_path_sync && re.models_needing_path_sync > 0 ? `${re.models_needing_path_sync} model path${re.models_needing_path_sync > 1 ? "s" : ""} need${re.models_needing_path_sync === 1 ? "s" : ""} sync` : F || "Unknown";
    }
    return rt(E), (re, F) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, { title: "WORKFLOWS" })
        ]),
        search: g(() => [
          S(Lo, {
            modelValue: m.value,
            "onUpdate:modelValue": F[0] || (F[0] = (ee) => m.value = ee),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          c.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), P(Us, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: E
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            T.value.length ? (n(), P(pt, {
              key: 0,
              title: "BROKEN",
              count: T.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(T.value, (ee) => (n(), P(Pt, {
                  key: ee.name,
                  status: "broken"
                }, {
                  icon: g(() => [...F[7] || (F[7] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(Q(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (le) => te(ee.name)
                    }, {
                      default: g(() => [...F[8] || (F[8] = [
                        b(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => R(ee.name)
                    }, {
                      default: g(() => [...F[9] || (F[9] = [
                        b(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (n(), P(pt, {
              key: 1,
              title: "NEW",
              count: I.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(I.value, (ee) => (n(), P(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: g(() => [
                    b(d(ee.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ne(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => R(ee.name)
                    }, {
                      default: g(() => [...F[10] || (F[10] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            M.value.length ? (n(), P(pt, {
              key: 2,
              title: "MODIFIED",
              count: M.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(M.value, (ee) => (n(), P(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: g(() => [...F[11] || (F[11] = [
                    b("⚡", -1)
                  ])]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ne(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => R(ee.name)
                    }, {
                      default: g(() => [...F[12] || (F[12] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (n(), P(pt, {
              key: 3,
              title: "SYNCED",
              count: L.value.length,
              collapsible: !0,
              "initially-expanded": f.value,
              onToggle: F[2] || (F[2] = (ee) => f.value = ee)
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(W.value, (ee) => (n(), P(Pt, {
                  key: ee.name,
                  status: ee.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: g(() => [
                    b(d(ee.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: g(() => [
                    b(d(ee.name), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(ne(ee)), 1)
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (le) => R(ee.name)
                    }, {
                      default: g(() => [...F[13] || (F[13] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !v.value && L.value.length > 5 ? (n(), P(pe, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: F[1] || (F[1] = (ee) => v.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: g(() => [
                    b(" View all " + d(L.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : h("", !0),
            N.value.length ? h("", !0) : (n(), P(fs, {
              key: 4,
              icon: "📭",
              message: m.value ? `No workflows match '${m.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      y.value && p.value ? (n(), P(Qp, {
        key: 0,
        "workflow-name": p.value,
        onClose: F[3] || (F[3] = (ee) => y.value = !1),
        onResolve: F[4] || (F[4] = (ee) => te(p.value)),
        onRefresh: F[5] || (F[5] = (ee) => a("refresh"))
      }, null, 8, ["workflow-name"])) : h("", !0),
      k.value && p.value ? (n(), P(hw, {
        key: 1,
        "workflow-name": p.value,
        onClose: oe,
        onInstall: se,
        onRefresh: F[6] || (F[6] = (ee) => a("refresh")),
        onRestart: X
      }, null, 8, ["workflow-name"])) : h("", !0)
    ], 64));
  }
}), Bw = /* @__PURE__ */ _e(Vw, [["__scopeId", "data-v-06d0e772"]]), Ww = /* @__PURE__ */ ye({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["summary-bar", e.variant])
    }, [
      at(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), hn = /* @__PURE__ */ _e(Ww, [["__scopeId", "data-v-ccb7816e"]]), Gw = {
  key: 0,
  class: "model-details"
}, jw = { class: "detail-section" }, Hw = { class: "detail-row" }, Kw = { class: "detail-value mono" }, qw = { class: "detail-row" }, Yw = { class: "detail-value mono" }, Qw = { class: "detail-row" }, Jw = { class: "detail-value mono" }, Xw = { class: "detail-row" }, Zw = { class: "detail-value" }, e_ = { class: "detail-row" }, t_ = { class: "detail-value" }, s_ = { class: "detail-row" }, o_ = { class: "detail-value" }, n_ = { class: "detail-section" }, a_ = { class: "section-header" }, l_ = {
  key: 0,
  class: "locations-list"
}, i_ = { class: "location-path mono" }, r_ = {
  key: 0,
  class: "location-modified"
}, c_ = ["onClick"], u_ = {
  key: 1,
  class: "empty-state"
}, d_ = { class: "detail-section" }, m_ = { class: "section-header" }, f_ = {
  key: 0,
  class: "sources-list"
}, v_ = { class: "source-type" }, p_ = ["href"], g_ = ["disabled", "onClick"], h_ = {
  key: 1,
  class: "empty-state"
}, y_ = { class: "add-source-form" }, w_ = ["disabled"], __ = {
  key: 2,
  class: "source-error"
}, k_ = {
  key: 3,
  class: "source-success"
}, b_ = /* @__PURE__ */ ye({
  __name: "ModelDetailModal",
  props: {
    identifier: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, { getModelDetails: a, addModelSource: l, removeModelSource: r, openFileLocation: c } = ut(), u = _(null), m = _(!0), f = _(null), v = _(""), y = _(!1), k = _(null), p = _(null), w = _(null), x = _(null);
    let $ = null;
    function C(E, R = "success", te = 2e3) {
      $ && clearTimeout($), x.value = { message: E, type: R }, $ = setTimeout(() => {
        x.value = null;
      }, te);
    }
    function N(E) {
      if (!E) return "Unknown";
      const R = 1024 * 1024 * 1024, te = 1024 * 1024;
      return E >= R ? `${(E / R).toFixed(1)} GB` : E >= te ? `${(E / te).toFixed(0)} MB` : `${(E / 1024).toFixed(0)} KB`;
    }
    function T(E) {
      navigator.clipboard.writeText(E), C("Copied to clipboard!");
    }
    async function I(E) {
      try {
        await c(E), C("Opening file location...");
      } catch {
        C("Failed to open location", "error");
      }
    }
    async function M() {
      if (!(!v.value.trim() || !u.value)) {
        y.value = !0, p.value = null, w.value = null;
        try {
          await l(u.value.hash, v.value.trim()), w.value = "Source added successfully!", v.value = "", await W();
        } catch (E) {
          p.value = E instanceof Error ? E.message : "Failed to add source";
        } finally {
          y.value = !1;
        }
      }
    }
    async function L(E) {
      if (u.value) {
        k.value = E, p.value = null, w.value = null;
        try {
          await r(u.value.hash, E), C("Source removed"), await W();
        } catch (R) {
          p.value = R instanceof Error ? R.message : "Failed to remove source";
        } finally {
          k.value = null;
        }
      }
    }
    async function W() {
      m.value = !0, f.value = null;
      try {
        u.value = await a(o.identifier);
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load model details";
      } finally {
        m.value = !1;
      }
    }
    return rt(W), (E, R) => {
      var te;
      return n(), i(B, null, [
        S(kt, {
          title: `Model Details: ${((te = u.value) == null ? void 0 : te.filename) || "Loading..."}`,
          size: "lg",
          loading: m.value,
          error: f.value,
          onClose: R[5] || (R[5] = (se) => E.$emit("close"))
        }, {
          body: g(() => {
            var se, oe, X, V;
            return [
              u.value ? (n(), i("div", Gw, [
                t("section", jw, [
                  t("div", Hw, [
                    R[6] || (R[6] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", Kw, d(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[0] || (R[0] = (Q) => T(u.value.hash))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", qw, [
                    R[7] || (R[7] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", Yw, d(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[1] || (R[1] = (Q) => T(u.value.blake3))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Qw, [
                    R[8] || (R[8] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", Jw, d(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: R[2] || (R[2] = (Q) => T(u.value.sha256))
                    }, "Copy")) : h("", !0)
                  ]),
                  t("div", Xw, [
                    R[9] || (R[9] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", Zw, d(N(u.value.size)), 1)
                  ]),
                  t("div", e_, [
                    R[10] || (R[10] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", t_, d(u.value.category), 1)
                  ]),
                  t("div", s_, [
                    R[11] || (R[11] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", o_, d(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", n_, [
                  t("h4", a_, "Locations (" + d(((se = u.value.locations) == null ? void 0 : se.length) || 0) + ")", 1),
                  (oe = u.value.locations) != null && oe.length ? (n(), i("div", l_, [
                    (n(!0), i(B, null, he(u.value.locations, (Q, ne) => (n(), i("div", {
                      key: ne,
                      class: "location-item"
                    }, [
                      t("span", i_, d(Q.path), 1),
                      Q.modified ? (n(), i("span", r_, "Modified: " + d(Q.modified), 1)) : h("", !0),
                      Q.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (re) => I(Q.path)
                      }, " Open File Location ", 8, c_)) : h("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", u_, "No locations found"))
                ]),
                t("section", d_, [
                  t("h4", m_, "Download Sources (" + d(((X = u.value.sources) == null ? void 0 : X.length) || 0) + ")", 1),
                  (V = u.value.sources) != null && V.length ? (n(), i("div", f_, [
                    (n(!0), i(B, null, he(u.value.sources, (Q, ne) => (n(), i("div", {
                      key: ne,
                      class: "source-item"
                    }, [
                      t("span", v_, d(Q.type) + ":", 1),
                      t("a", {
                        href: Q.url,
                        target: "_blank",
                        class: "source-url"
                      }, d(Q.url), 9, p_),
                      t("button", {
                        class: "remove-source-btn",
                        disabled: k.value === Q.url,
                        onClick: (re) => L(Q.url)
                      }, d(k.value === Q.url ? "..." : "×"), 9, g_)
                    ]))), 128))
                  ])) : (n(), i("div", h_, " No download sources configured ")),
                  t("div", y_, [
                    lt(t("input", {
                      "onUpdate:modelValue": R[3] || (R[3] = (Q) => v.value = Q),
                      type: "text",
                      placeholder: "Enter download URL (CivitAI, HuggingFace, etc.)",
                      class: "source-input"
                    }, null, 512), [
                      [Yt, v.value]
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      disabled: !v.value.trim() || y.value,
                      onClick: M
                    }, d(y.value ? "Adding..." : "Add Source"), 9, w_)
                  ]),
                  p.value ? (n(), i("p", __, d(p.value), 1)) : h("", !0),
                  w.value ? (n(), i("p", k_, d(w.value), 1)) : h("", !0)
                ])
              ])) : h("", !0)
            ];
          }),
          footer: g(() => [
            t("button", {
              class: "btn-secondary",
              onClick: R[4] || (R[4] = (se) => E.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error"]),
        (n(), P(Mt, { to: "body" }, [
          x.value ? (n(), i("div", {
            key: 0,
            class: Re(["toast", x.value.type])
          }, d(x.value.message), 3)) : h("", !0)
        ]))
      ], 64);
    };
  }
}), fl = /* @__PURE__ */ _e(b_, [["__scopeId", "data-v-f15cbb56"]]), $_ = ["disabled"], C_ = { class: "dropdown-value" }, x_ = ["onClick"], S_ = {
  key: 0,
  class: "dropdown-error"
}, I_ = /* @__PURE__ */ ye({
  __name: "BaseDropdown",
  props: {
    modelValue: {},
    options: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    error: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(null), c = _(null), u = _({});
    function m(C) {
      return typeof C == "string" ? C : C.value;
    }
    function f(C) {
      return typeof C == "string" ? C : C.label;
    }
    const v = D(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const C = o.options.find((N) => m(N) === o.modelValue);
      return C ? f(C) : String(o.modelValue);
    });
    function y() {
      o.disabled || (l.value = !l.value);
    }
    function k() {
      l.value = !1;
    }
    function p(C) {
      a("update:modelValue", m(C)), k();
    }
    function w() {
      if (!r.value) return;
      const C = r.value.getBoundingClientRect(), N = window.innerHeight, T = N - C.bottom, I = C.top, M = Math.min(300, o.options.length * 36 + 8), L = T < M && I > T;
      u.value = {
        position: "fixed",
        left: `${C.left}px`,
        width: `${C.width}px`,
        maxHeight: "300px",
        ...L ? { bottom: `${N - C.top + 4}px` } : { top: `${C.bottom + 4}px` }
      };
    }
    $t(l, async (C) => {
      C && (await Et(), w());
    });
    function x() {
      l.value && w();
    }
    function $(C) {
      C.key === "Escape" && l.value && k();
    }
    return rt(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", $);
    }), Ys(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", $);
    }), (C, N) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Re(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: y
      }, [
        t("span", C_, d(v.value), 1),
        N[0] || (N[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, $_),
      (n(), P(Mt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: k
        })) : h("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Qt(u.value)
        }, [
          (n(!0), i(B, null, he(e.options, (T) => (n(), i("div", {
            key: m(T),
            class: Re(["dropdown-option", { selected: m(T) === e.modelValue }]),
            onClick: (I) => p(T)
          }, d(f(T)), 11, x_))), 128))
        ], 4)) : h("", !0)
      ])),
      e.error ? (n(), i("span", S_, d(e.error), 1)) : h("", !0)
    ], 512));
  }
}), E_ = /* @__PURE__ */ _e(I_, [["__scopeId", "data-v-857e085b"]]);
function T_(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function P_(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!T_(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
  if (a[0] === "datasets" || a[0] === "spaces") return { kind: "unknown" };
  if (a.length < 2) return { kind: "unknown" };
  const l = `${a[0]}/${a[1]}`, r = a.slice(2);
  if (r.length === 0)
    return { kind: "repo", repoId: l, revision: "main" };
  const c = r[0];
  if (c === "tree") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return { kind: "repo", repoId: l, revision: u, path: m || void 0 };
  }
  if (c === "resolve") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: u, path: m } : { kind: "repo", repoId: l, revision: u };
  }
  if (c === "blob") {
    const u = r[1] || "main", m = r.slice(2).join("/");
    return m ? { kind: "file", repoId: l, revision: u, path: m } : { kind: "repo", repoId: l, revision: u };
  }
  return { kind: "repo", repoId: l, revision: "main" };
}
function R_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function M_(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${R_(o)}`;
}
const D_ = { class: "hf-file-browser" }, L_ = { class: "browser-header" }, N_ = { class: "repo-info" }, U_ = { class: "repo-id" }, A_ = {
  key: 0,
  class: "revision-pill"
}, O_ = {
  key: 0,
  class: "loading-state"
}, z_ = {
  key: 1,
  class: "error-state"
}, F_ = { class: "toolbar" }, V_ = { class: "toolbar-actions" }, B_ = { class: "file-list-container" }, W_ = {
  key: 0,
  class: "file-list-header"
}, G_ = ["checked", "indeterminate"], j_ = { class: "sort-indicator" }, H_ = { class: "sort-indicator" }, K_ = {
  key: 1,
  class: "empty-state"
}, q_ = {
  key: 2,
  class: "file-list"
}, Y_ = ["onClick"], Q_ = ["checked", "onChange"], J_ = { class: "file-path" }, X_ = { class: "file-size" }, Z_ = { class: "destination-section" }, ek = { class: "destination-row" }, tk = {
  key: 0,
  class: "path-separator"
}, sk = { class: "action-bar" }, ok = { class: "summary-info" }, nk = { class: "summary-count" }, ak = { class: "summary-size" }, lk = /* @__PURE__ */ ye({
  __name: "HfFileBrowser",
  props: {
    repoId: {},
    revision: {},
    initialPath: {},
    preselectedFile: {}
  },
  emits: ["queue", "back"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l, getModelsSubdirectories: r } = ut(), c = _([]), u = _(/* @__PURE__ */ new Set()), m = _(!1), f = _(null), v = _(""), y = _(!1), k = _("name"), p = _(!0), w = _(""), x = _(""), $ = _(""), C = _([]), N = _(!1);
    let T = !1;
    const I = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, M = D(() => {
      let A = c.value;
      if (o.initialPath) {
        const Y = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        A = A.filter((z) => z.path.startsWith(Y) || z.path === o.initialPath);
      }
      if (y.value && (A = A.filter((Y) => Y.is_model_file)), v.value.trim()) {
        const Y = v.value.toLowerCase();
        A = A.filter((z) => z.path.toLowerCase().includes(Y));
      }
      return A;
    }), L = D(() => {
      const A = [...M.value];
      return A.sort((Y, z) => {
        let O;
        return k.value === "name" ? O = Y.path.localeCompare(z.path) : O = Y.size - z.size, p.value ? O : -O;
      }), A;
    }), W = D(() => M.value.length === 0 ? !1 : M.value.every((A) => u.value.has(A.path))), E = D(() => M.value.some((A) => u.value.has(A.path))), R = D(() => {
      const A = C.value.map((Y) => ({
        label: Y,
        value: Y
      }));
      return A.push({ label: "Custom path...", value: "__custom__" }), A;
    }), te = D(() => w.value === "__custom__" ? $.value.trim().length > 0 : w.value.length > 0), se = D(() => {
      let A = 0;
      for (const Y of u.value) {
        const z = c.value.find((O) => O.path === Y);
        z && (A += z.size);
      }
      return A;
    });
    function oe(A) {
      if (A === 0) return "0 B";
      const Y = 1024 * 1024 * 1024, z = 1024 * 1024, O = 1024;
      return A >= Y ? `${(A / Y).toFixed(2)} GB` : A >= z ? `${(A / z).toFixed(1)} MB` : A >= O ? `${(A / O).toFixed(0)} KB` : `${A} B`;
    }
    function X(A) {
      const Y = A.match(I);
      return Y ? `${Y[1]}${Y[4]}` : null;
    }
    function V(A) {
      const Y = new Set(u.value), z = Y.has(A.path), O = A.shard_group || X(A.path);
      if (O) {
        const ie = c.value.filter((Te) => (Te.shard_group || X(Te.path)) === O);
        z ? ie.forEach((Te) => Y.delete(Te.path)) : ie.forEach((Te) => Y.add(Te.path));
      } else
        z ? Y.delete(A.path) : Y.add(A.path);
      u.value = Y;
    }
    function Q() {
      const A = new Set(u.value);
      for (const Y of M.value)
        Y.is_model_file && A.add(Y.path);
      u.value = A;
    }
    function ne() {
      u.value = /* @__PURE__ */ new Set();
    }
    function re() {
      if (W.value) {
        const A = new Set(u.value);
        for (const Y of M.value)
          A.delete(Y.path);
        u.value = A;
      } else {
        const A = new Set(u.value);
        for (const Y of M.value)
          A.add(Y.path);
        u.value = A;
      }
    }
    function F(A) {
      k.value === A ? p.value = !p.value : (k.value = A, p.value = !0);
    }
    function ee(A) {
      const Y = A.split("/");
      return Y.length >= 2 ? Y[Y.length - 2] : null;
    }
    function le() {
      if (N.value || u.value.size === 0) return;
      const A = /* @__PURE__ */ new Set();
      for (const O of u.value) {
        const ie = ee(O);
        ie && A.add(ie.toLowerCase());
      }
      if (A.size !== 1) return;
      const Y = [...A][0], z = C.value.find(
        (O) => O.toLowerCase() === Y
      );
      z && z !== w.value && (T = !0, w.value = z, Et(() => {
        T = !1;
      }));
    }
    function Ae() {
      return w.value === "__custom__" ? $.value.trim() : x.value.trim() ? `${w.value}/${x.value.trim()}` : w.value;
    }
    function qe() {
      if (u.value.size === 0 || !te.value) return;
      const A = Ae(), Y = [];
      for (const z of u.value) {
        const O = c.value.find((ie) => ie.path === z);
        O && Y.push({
          url: M_(o.repoId, o.revision, O.path),
          destination: A,
          filename: O.path.split("/").pop() || O.path
        });
      }
      a("queue", Y);
    }
    async function je() {
      if (o.repoId) {
        m.value = !0, f.value = null;
        try {
          const A = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Y = await l(A);
          if (c.value = Y.files, o.preselectedFile) {
            const z = c.value.find((O) => O.path === o.preselectedFile);
            z && V(z);
          }
        } catch (A) {
          f.value = A instanceof Error ? A.message : "Failed to load repository";
        } finally {
          m.value = !1;
        }
      }
    }
    async function xe() {
      try {
        const A = await r();
        C.value = A.directories, A.directories.length > 0 && !w.value && (w.value = A.directories[0]);
      } catch {
        C.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], w.value || (w.value = "checkpoints");
      }
    }
    return $t(() => [o.repoId, o.revision], () => {
      o.repoId && je();
    }, { immediate: !1 }), $t(() => o.repoId, () => {
      N.value = !1;
    }), $t(u, () => {
      le();
    }, { deep: !0 }), $t(C, () => {
      C.value.length > 0 && u.value.size > 0 && le();
    }), $t(w, (A, Y) => {
      T || Y === "" || (N.value = !0);
    }), rt(() => {
      je(), xe();
    }), (A, Y) => (n(), i("div", D_, [
      t("div", L_, [
        t("button", {
          class: "back-btn",
          onClick: Y[0] || (Y[0] = (z) => A.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", N_, [
          t("span", U_, d(e.repoId), 1),
          e.revision ? (n(), i("span", A_, d(e.revision), 1)) : h("", !0)
        ])
      ]),
      m.value ? (n(), i("div", O_, " Loading repository files... ")) : f.value ? (n(), i("div", z_, d(f.value), 1)) : (n(), i(B, { key: 2 }, [
        t("div", F_, [
          S(Ot, {
            modelValue: v.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (z) => v.value = z),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", V_, [
            t("button", {
              class: Re(["toggle-btn", { active: y.value }]),
              onClick: Y[2] || (Y[2] = (z) => y.value = !y.value)
            }, d(y.value ? "Models Only" : "All Files"), 3),
            t("button", {
              class: "action-btn",
              onClick: Q
            }, "Auto-Select Models"),
            t("button", {
              class: "action-btn",
              onClick: ne
            }, "Clear")
          ])
        ]),
        t("div", B_, [
          M.value.length > 0 ? (n(), i("div", W_, [
            t("input", {
              type: "checkbox",
              checked: W.value,
              indeterminate: E.value && !W.value,
              class: "file-checkbox",
              onChange: re
            }, null, 40, G_),
            t("span", {
              class: "header-name",
              onClick: Y[3] || (Y[3] = (z) => F("name"))
            }, [
              Y[9] || (Y[9] = b(" Name ", -1)),
              t("span", j_, d(k.value === "name" ? p.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: Y[4] || (Y[4] = (z) => F("size"))
            }, [
              Y[10] || (Y[10] = b(" Size ", -1)),
              t("span", H_, d(k.value === "size" ? p.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : h("", !0),
          M.value.length === 0 ? (n(), i("div", K_, d(c.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", q_, [
            (n(!0), i(B, null, he(L.value, (z) => (n(), i("div", {
              key: z.path,
              class: Re(["file-item", { selected: u.value.has(z.path) }]),
              onClick: (O) => V(z)
            }, [
              t("input", {
                type: "checkbox",
                checked: u.value.has(z.path),
                class: "file-checkbox",
                onClick: Y[5] || (Y[5] = wt(() => {
                }, ["stop"])),
                onChange: (O) => V(z)
              }, null, 40, Q_),
              t("span", J_, d(z.path), 1),
              t("span", X_, d(oe(z.size)), 1)
            ], 10, Y_))), 128))
          ]))
        ]),
        t("div", Z_, [
          Y[11] || (Y[11] = t("h4", { class: "section-label" }, "Download Destination", -1)),
          t("div", ek, [
            S(E_, {
              modelValue: w.value,
              "onUpdate:modelValue": Y[6] || (Y[6] = (z) => w.value = z),
              options: R.value,
              placeholder: "Select directory...",
              class: "dest-select"
            }, null, 8, ["modelValue", "options"]),
            w.value !== "__custom__" ? (n(), i("span", tk, "/")) : h("", !0),
            w.value !== "__custom__" ? (n(), P(Ot, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": Y[7] || (Y[7] = (z) => x.value = z),
              placeholder: "subfolder (optional)",
              class: "dest-subfolder"
            }, null, 8, ["modelValue"])) : h("", !0)
          ]),
          w.value === "__custom__" ? (n(), P(Ot, {
            key: 0,
            modelValue: $.value,
            "onUpdate:modelValue": Y[8] || (Y[8] = (z) => $.value = z),
            placeholder: "Enter full path relative to models directory...",
            class: "dest-custom",
            "full-width": ""
          }, null, 8, ["modelValue"])) : h("", !0)
        ]),
        t("div", sk, [
          t("div", ok, [
            t("span", nk, d(u.value.size) + " file(s) selected", 1),
            t("span", ak, d(oe(se.value)), 1)
          ]),
          S(Ne, {
            variant: "primary",
            disabled: u.value.size === 0 || !te.value,
            onClick: qe
          }, {
            default: g(() => [...Y[12] || (Y[12] = [
              b(" Queue Download ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), ik = /* @__PURE__ */ _e(lk, [["__scopeId", "data-v-183acebc"]]), rk = { class: "token-config-modal" }, ck = { class: "provider-info" }, uk = { class: "provider-icon" }, dk = { class: "provider-name" }, mk = {
  key: 0,
  class: "current-token"
}, fk = { class: "mask" }, vk = { class: "token-input-section" }, pk = { class: "input-label" }, gk = { class: "help-text" }, hk = ["href"], yk = { class: "modal-actions" }, wk = /* @__PURE__ */ ye({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ut(), r = _(""), c = _(!1), u = _(!1), m = D(
      () => o.provider === "huggingface" ? "HuggingFace" : "CivitAI"
    ), f = D(
      () => o.provider === "huggingface" ? "🤗" : "🎨"
    ), v = D(
      () => o.provider === "huggingface" ? "hf_xxxx..." : "Enter API key..."
    ), y = D(
      () => o.provider === "huggingface" ? "https://huggingface.co/settings/tokens" : "https://civitai.com/user/account"
    ), k = D(
      () => o.provider === "huggingface" ? "Get your HuggingFace token →" : "Get your CivitAI API key →"
    );
    async function p() {
      if (r.value.trim()) {
        c.value = !0;
        try {
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          c.value = !1;
        }
      }
    }
    async function w() {
      u.value = !0;
      try {
        const x = o.provider === "huggingface" ? { huggingface_token: null } : { civitai_api_key: null };
        await l(x), a("cleared"), a("close");
      } catch (x) {
        console.error("Failed to clear token:", x);
      } finally {
        u.value = !1;
      }
    }
    return (x, $) => (n(), P(kt, {
      title: "Configure API Token",
      onClose: $[2] || ($[2] = (C) => x.$emit("close"))
    }, {
      body: g(() => [
        t("div", rk, [
          t("div", ck, [
            t("span", uk, d(f.value), 1),
            t("span", dk, d(m.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", mk, [
            $[4] || ($[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", fk, d(e.currentTokenMask), 1),
            S(Ne, {
              variant: "danger",
              size: "sm",
              onClick: w,
              loading: u.value
            }, {
              default: g(() => [...$[3] || ($[3] = [
                b(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0),
          t("div", vk, [
            t("label", pk, d(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            S(Ot, {
              modelValue: r.value,
              "onUpdate:modelValue": $[0] || ($[0] = (C) => r.value = C),
              type: "password",
              placeholder: v.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", gk, [
              t("a", {
                href: y.value,
                target: "_blank",
                rel: "noopener"
              }, d(k.value), 9, hk)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        t("div", yk, [
          S(Ne, {
            variant: "secondary",
            onClick: $[1] || ($[1] = (C) => x.$emit("close"))
          }, {
            default: g(() => [...$[5] || ($[5] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Ne, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: p
          }, {
            default: g(() => [...$[6] || ($[6] = [
              b(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), _k = /* @__PURE__ */ _e(wk, [["__scopeId", "data-v-0687d0ce"]]), kk = { class: "huggingface-tab" }, bk = {
  key: 0,
  class: "search-section"
}, $k = { class: "search-header" }, Ck = { class: "search-bar" }, xk = {
  key: 1,
  class: "search-results"
}, Sk = {
  key: 0,
  class: "loading-state"
}, Ik = {
  key: 1,
  class: "error-state"
}, Ek = {
  key: 2,
  class: "results-list"
}, Tk = ["onClick"], Pk = { class: "repo-header" }, Rk = { class: "repo-id" }, Mk = { class: "repo-stats" }, Dk = {
  class: "stat",
  title: "Downloads"
}, Lk = {
  class: "stat",
  title: "Likes"
}, Nk = {
  key: 0,
  class: "repo-desc"
}, Uk = {
  key: 1,
  class: "repo-tags"
}, Ak = {
  key: 3,
  class: "empty-state"
}, Ok = {
  key: 4,
  class: "hint-state"
}, zk = /* @__PURE__ */ ye({
  __name: "HuggingFaceTab",
  emits: ["queue"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ut(), a = _("search"), l = _(""), r = _([]), c = _(!1), u = _(null), m = _(!1), f = _(null), v = _("main"), y = _(), k = _(), p = _(!1), w = _(null), x = D(() => {
      if (!u.value) return !1;
      const W = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || W.includes("authentication") || W.includes("unauthorized");
    });
    function $(W) {
      return W >= 1e6 ? `${(W / 1e6).toFixed(1)}M` : W >= 1e3 ? `${(W / 1e3).toFixed(1)}K` : String(W);
    }
    async function C() {
      const W = l.value.trim();
      if (!W) return;
      u.value = null;
      const E = P_(W);
      if (E.kind === "file" && E.repoId && E.path) {
        f.value = E.repoId, v.value = E.revision || "main";
        const R = E.path.split("/");
        R.length > 1 ? y.value = R.slice(0, -1).join("/") : y.value = void 0, k.value = E.path, a.value = "browse";
        return;
      }
      if (E.kind === "repo" && E.repoId) {
        f.value = E.repoId, v.value = E.revision || "main", y.value = E.path, k.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(W) && !W.includes("://")) {
        f.value = W, v.value = "main", y.value = void 0, k.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const R = await s(W);
        r.value = R.results, m.value = !0;
      } catch (R) {
        u.value = R instanceof Error ? R.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function N(W) {
      f.value = W, v.value = "main", y.value = void 0, k.value = void 0, a.value = "browse";
    }
    function T() {
      a.value = "search", f.value = null, y.value = void 0, k.value = void 0;
    }
    async function I() {
      try {
        const W = await o();
        w.value = W.huggingface_token || null;
      } catch (W) {
        console.error("Failed to load config:", W);
      }
    }
    function M() {
      I(), x.value && l.value && C();
    }
    function L() {
      w.value = null;
    }
    return rt(I), (W, E) => (n(), i("div", kk, [
      a.value === "search" ? (n(), i("div", bk, [
        t("div", $k, [
          t("div", Ck, [
            S(Ot, {
              modelValue: l.value,
              "onUpdate:modelValue": E[0] || (E[0] = (R) => l.value = R),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ss(C, ["enter"])
            }, null, 8, ["modelValue"]),
            S(Ne, {
              variant: "primary",
              onClick: C,
              loading: c.value
            }, {
              default: g(() => [...E[5] || (E[5] = [
                b(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          S(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: E[1] || (E[1] = (R) => p.value = !0)
          }, {
            default: g(() => [
              b(d(w.value ? `Token: ${w.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : h("", !0),
      a.value === "search" ? (n(), i("div", xk, [
        c.value ? (n(), i("div", Sk, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Ik, [
          t("p", null, d(u.value), 1),
          x.value ? (n(), P(Ne, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: E[2] || (E[2] = (R) => p.value = !0)
          }, {
            default: g(() => [...E[6] || (E[6] = [
              b(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : h("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", Ek, [
          (n(!0), i(B, null, he(r.value, (R) => (n(), i("div", {
            key: R.repo_id,
            class: "repo-card",
            onClick: (te) => N(R.repo_id)
          }, [
            t("div", Pk, [
              t("span", Rk, d(R.repo_id), 1),
              t("div", Mk, [
                t("span", Dk, [
                  E[7] || (E[7] = t("span", { class: "stat-icon" }, "↓", -1)),
                  b(" " + d($(R.downloads)), 1)
                ]),
                t("span", Lk, [
                  E[8] || (E[8] = t("span", { class: "stat-icon" }, "★", -1)),
                  b(" " + d($(R.likes)), 1)
                ])
              ])
            ]),
            R.description ? (n(), i("p", Nk, d(R.description), 1)) : h("", !0),
            R.tags.length > 0 ? (n(), i("div", Uk, [
              (n(!0), i(B, null, he(R.tags.slice(0, 5), (te) => (n(), i("span", {
                key: te,
                class: "tag"
              }, d(te), 1))), 128))
            ])) : h("", !0)
          ], 8, Tk))), 128))
        ])) : m.value ? (n(), i("div", Ak, " No repositories found ")) : (n(), i("div", Ok, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), P(ik, {
        key: 2,
        "repo-id": f.value,
        revision: v.value,
        "initial-path": y.value,
        "preselected-file": k.value,
        onBack: T,
        onQueue: E[3] || (E[3] = (R) => W.$emit("queue", R))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file"])),
      p.value ? (n(), P(_k, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": w.value,
        onClose: E[4] || (E[4] = (R) => p.value = !1),
        onSaved: M,
        onCleared: L
      }, null, 8, ["current-token-mask"])) : h("", !0)
    ]));
  }
}), Fk = /* @__PURE__ */ _e(zk, [["__scopeId", "data-v-e13209bf"]]), Vk = { class: "civitai-tab" }, Bk = /* @__PURE__ */ ye({
  __name: "CivitaiTab",
  setup(e) {
    return (s, o) => (n(), i("div", Vk, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Wk = /* @__PURE__ */ _e(Bk, [["__scopeId", "data-v-44948051"]]), Gk = { class: "direct-url-tab" }, jk = { class: "input-group" }, Hk = { class: "input-group" }, Kk = {
  key: 0,
  class: "error"
}, qk = { class: "actions" }, Yk = /* @__PURE__ */ ye({
  __name: "DirectUrlTab",
  emits: ["queue"],
  setup(e, { emit: s }) {
    const o = s, a = _(""), l = _(""), r = D(() => {
      const m = l.value.trim();
      if (!m) return null;
      const f = m.replace(/\\/g, "/").split("/").pop() || "";
      return f.includes(".") && !f.endsWith(".") ? null : "Target path must include a filename (e.g. checkpoints/model.safetensors).";
    }), c = D(() => a.value.trim() !== "" && l.value.trim() !== "" && !r.value), u = () => {
      if (!c.value) return;
      const m = l.value.replace(/\\/g, "/").split("/").pop() || "";
      o("queue", [{
        url: a.value.trim(),
        targetPath: l.value.trim(),
        filename: m
      }]), a.value = "", l.value = "";
    };
    return (m, f) => (n(), i("div", Gk, [
      t("div", jk, [
        f[2] || (f[2] = t("label", null, "Download URL", -1)),
        S(Ot, {
          modelValue: a.value,
          "onUpdate:modelValue": f[0] || (f[0] = (v) => a.value = v),
          placeholder: "https://example.com/model.safetensors"
        }, null, 8, ["modelValue"])
      ]),
      t("div", Hk, [
        f[3] || (f[3] = t("label", null, "Target Path (relative to models directory)", -1)),
        S(Ot, {
          modelValue: l.value,
          "onUpdate:modelValue": f[1] || (f[1] = (v) => l.value = v),
          placeholder: "e.g. checkpoints/model.safetensors"
        }, null, 8, ["modelValue"]),
        r.value ? (n(), i("p", Kk, d(r.value), 1)) : h("", !0)
      ]),
      f[5] || (f[5] = t("p", { class: "note" }, "Model will be queued for background download.", -1)),
      t("div", qk, [
        S(Ne, {
          variant: "primary",
          disabled: !c.value,
          onClick: u
        }, {
          default: g(() => [...f[4] || (f[4] = [
            b(" Queue Download ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ])
    ]));
  }
}), Qk = /* @__PURE__ */ _e(Yk, [["__scopeId", "data-v-01def7aa"]]), Jk = { class: "download-modal" }, Xk = { class: "tab-bar" }, Zk = ["onClick"], eb = { class: "tab-content" }, tb = /* @__PURE__ */ ye({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Do(), l = [
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = _("huggingface");
    function c(f) {
      a(f.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.destination ? `${v.destination}/${v.filename}` : v.filename
      }))), o("close");
    }
    function u(f) {
      a(f.map((v) => ({
        workflow: "__manual__",
        filename: v.filename,
        url: v.url,
        targetPath: v.targetPath
      }))), o("close");
    }
    function m() {
      o("close");
    }
    return (f, v) => e.show ? (n(), P(kt, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: m
    }, {
      body: g(() => [
        t("div", Jk, [
          t("div", Xk, [
            (n(), i(B, null, he(l, (y) => t("button", {
              key: y.id,
              class: Re(["tab-btn", { active: r.value === y.id }]),
              onClick: (k) => r.value = y.id
            }, d(y.icon) + " " + d(y.label), 11, Zk)), 64))
          ]),
          t("div", eb, [
            r.value === "huggingface" ? (n(), P(Fk, {
              key: 0,
              onQueue: c
            })) : r.value === "civitai" ? (n(), P(Wk, { key: 1 })) : r.value === "direct" ? (n(), P(Qk, {
              key: 2,
              onQueue: u
            })) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: m
        }, {
          default: g(() => [...v[0] || (v[0] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : h("", !0);
  }
}), zr = /* @__PURE__ */ _e(tb, [["__scopeId", "data-v-90a9f401"]]), sb = /* @__PURE__ */ ye({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ut(), r = _([]), c = _([]), u = _("production"), m = _(!1), f = _(null), v = _(""), y = _(!1), k = _(null), p = _(!1);
    function w() {
      y.value = !1, o("navigate", "model-index");
    }
    const x = D(
      () => r.value.reduce((E, R) => E + (R.size || 0), 0)
    ), $ = D(() => {
      if (!v.value.trim()) return r.value;
      const E = v.value.toLowerCase();
      return r.value.filter((R) => R.filename.toLowerCase().includes(E));
    }), C = D(() => {
      if (!v.value.trim()) return c.value;
      const E = v.value.toLowerCase();
      return c.value.filter((R) => R.filename.toLowerCase().includes(E));
    }), N = D(() => {
      const E = {};
      for (const te of $.value) {
        const se = te.type || "other";
        E[se] || (E[se] = []), E[se].push(te);
      }
      const R = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(E).sort(([te], [se]) => {
        const oe = R.indexOf(te), X = R.indexOf(se);
        return oe >= 0 && X >= 0 ? oe - X : oe >= 0 ? -1 : X >= 0 ? 1 : te.localeCompare(se);
      }).map(([te, se]) => ({ type: te, models: se }));
    });
    function T(E) {
      if (!E) return "Unknown";
      const R = E / (1024 * 1024);
      return R >= 1024 ? `${(R / 1024).toFixed(1)} GB` : `${R.toFixed(0)} MB`;
    }
    function I(E) {
      k.value = E.hash || E.filename;
    }
    function M(E) {
      o("navigate", "model-index");
    }
    function L(E) {
      alert(`Download functionality not yet implemented for ${E}`);
    }
    async function W() {
      m.value = !0, f.value = null;
      try {
        const E = await a();
        r.value = E, c.value = [];
        const R = await l();
        u.value = R.environment || "production";
      } catch (E) {
        f.value = E instanceof Error ? E.message : "Failed to load models";
      } finally {
        m.value = !1;
      }
    }
    return rt(W), (E, R) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: R[1] || (R[1] = (te) => y.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: R[0] || (R[0] = (te) => p.value = !0)
              }, {
                default: g(() => [...R[6] || (R[6] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          S(Lo, {
            modelValue: v.value,
            "onUpdate:modelValue": R[2] || (R[2] = (te) => v.value = te),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading environment models..."
          })) : f.value ? (n(), P(Us, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: W
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length ? (n(), P(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(r.value.length) + " models • " + d(T(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(B, null, he(N.value, (te) => (n(), P(pt, {
              key: te.type,
              title: te.type.toUpperCase(),
              count: te.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(te.models, (se) => (n(), P(Pt, {
                  key: se.hash || se.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...R[7] || (R[7] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(se.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(T(se.size)), 1)
                  ]),
                  details: g(() => [
                    S(yt, {
                      label: "Used by:",
                      value: (se.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    S(yt, {
                      label: "Path:",
                      value: se.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (oe) => I(se)
                    }, {
                      default: g(() => [...R[8] || (R[8] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            C.value.length ? (n(), P(pt, {
              key: 1,
              title: "MISSING",
              count: C.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(C.value, (te) => (n(), P(Pt, {
                  key: te.filename,
                  status: "broken"
                }, {
                  icon: g(() => [...R[9] || (R[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(te.filename), 1)
                  ]),
                  subtitle: g(() => [...R[10] || (R[10] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: g(() => {
                    var se;
                    return [
                      S(yt, {
                        label: "Required by:",
                        value: ((se = te.workflow_names) == null ? void 0 : se.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: g(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (se) => L(te.filename)
                    }, {
                      default: g(() => [...R[11] || (R[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => M(te.filename)
                    }, {
                      default: g(() => [...R[12] || (R[12] = [
                        b(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !$.value.length && !C.value.length ? (n(), P(fs, {
              key: 2,
              icon: "📭",
              message: v.value ? `No models match '${v.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: y.value,
        title: "About Environment Models",
        onClose: R[3] || (R[3] = (te) => y.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            R[13] || (R[13] = b(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + d(u.value) + '"', 1),
            R[14] || (R[14] = b(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: g(() => [
          S(pe, {
            variant: "primary",
            onClick: w
          }, {
            default: g(() => [...R[15] || (R[15] = [
              b(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), P(fl, {
        key: 0,
        identifier: k.value,
        onClose: R[4] || (R[4] = (te) => k.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      S(zr, {
        show: p.value,
        onClose: R[5] || (R[5] = (te) => p.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), ob = /* @__PURE__ */ _e(sb, [["__scopeId", "data-v-af3ca736"]]), nb = {
  key: 0,
  class: "indexing-progress"
}, ab = { class: "progress-info" }, lb = { class: "progress-label" }, ib = { class: "progress-count" }, rb = { class: "progress-bar" }, cb = { class: "modal-content" }, ub = { class: "modal-header" }, db = { class: "modal-body" }, mb = { class: "input-group" }, fb = { class: "current-path" }, vb = { class: "input-group" }, pb = { class: "modal-footer" }, gb = /* @__PURE__ */ ye({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ut(), c = s, u = _([]), m = _(!1), f = _(!1), v = _(null), y = _(""), k = _(!1), p = _(null), w = _(!1), x = _(null), $ = _(""), C = _(!1), N = _(!1), T = _(null), I = D(
      () => u.value.reduce((X, V) => X + (V.size || 0), 0)
    ), M = D(() => {
      if (!y.value.trim()) return u.value;
      const X = y.value.toLowerCase();
      return u.value.filter((V) => {
        const Q = V, ne = V.sha256 || Q.sha256_hash || "";
        return V.filename.toLowerCase().includes(X) || ne.toLowerCase().includes(X);
      });
    }), L = D(() => {
      const X = {};
      for (const Q of M.value) {
        const ne = Q.type || "other";
        X[ne] || (X[ne] = []), X[ne].push(Q);
      }
      const V = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(X).sort(([Q], [ne]) => {
        const re = V.indexOf(Q), F = V.indexOf(ne);
        return re >= 0 && F >= 0 ? re - F : re >= 0 ? -1 : F >= 0 ? 1 : Q.localeCompare(ne);
      }).map(([Q, ne]) => ({ type: Q, models: ne }));
    });
    function W(X) {
      if (!X) return "Unknown";
      const V = 1024 * 1024 * 1024, Q = 1024 * 1024;
      return X >= V ? `${(X / V).toFixed(1)} GB` : X >= Q ? `${(X / Q).toFixed(0)} MB` : `${(X / 1024).toFixed(0)} KB`;
    }
    function E(X) {
      p.value = X.hash || X.filename;
    }
    async function R() {
      f.value = !0, v.value = null;
      try {
        const X = await a();
        await se(), X.changes > 0 && console.log(`Scan complete: ${X.changes} changes detected`);
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to scan models";
      } finally {
        f.value = !1;
      }
    }
    async function te() {
      if ($.value.trim()) {
        C.value = !0, v.value = null;
        try {
          const X = await r($.value.trim());
          x.value = X.path, w.value = !1, $.value = "", await se(), console.log(`Directory changed: ${X.models_indexed} models indexed`), c("refresh");
        } catch (X) {
          v.value = X instanceof Error ? X.message : "Failed to change directory";
        } finally {
          C.value = !1;
        }
      }
    }
    async function se() {
      m.value = !0, v.value = null;
      try {
        u.value = await o();
      } catch (X) {
        v.value = X instanceof Error ? X.message : "Failed to load workspace models";
      } finally {
        m.value = !1;
      }
    }
    async function oe() {
      try {
        const X = await l();
        x.value = X.path;
      } catch {
      }
    }
    return rt(() => {
      se(), oe();
    }), (X, V) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: V[2] || (V[2] = (Q) => k.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                disabled: f.value,
                onClick: R
              }, {
                default: g(() => [
                  b(d(f.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: V[0] || (V[0] = (Q) => w.value = !0)
              }, {
                default: g(() => [...V[11] || (V[11] = [
                  b(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: V[1] || (V[1] = (Q) => N.value = !0)
              }, {
                default: g(() => [...V[12] || (V[12] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  b(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          T.value ? (n(), i("div", nb, [
            t("div", ab, [
              t("span", lb, d(T.value.message), 1),
              t("span", ib, d(T.value.current) + "/" + d(T.value.total), 1)
            ]),
            t("div", rb, [
              t("div", {
                class: "progress-fill",
                style: Qt({ width: `${T.value.current / T.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : h("", !0),
          S(Lo, {
            modelValue: y.value,
            "onUpdate:modelValue": V[3] || (V[3] = (Q) => y.value = Q),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value || T.value ? (n(), P(Ns, {
            key: 0,
            message: T.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : v.value ? (n(), P(Us, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: se
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            u.value.length ? (n(), P(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(u.value.length) + " models • " + d(W(I.value)), 1)
              ]),
              _: 1
            })) : h("", !0),
            (n(!0), i(B, null, he(L.value, (Q) => (n(), P(pt, {
              key: Q.type,
              title: Q.type.toUpperCase(),
              count: Q.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(Q.models, (ne) => (n(), P(Pt, {
                  key: ne.sha256 || ne.filename,
                  status: "synced"
                }, {
                  icon: g(() => [...V[13] || (V[13] = [
                    b("📦", -1)
                  ])]),
                  title: g(() => [
                    b(d(ne.filename), 1)
                  ]),
                  subtitle: g(() => [
                    b(d(W(ne.size)), 1)
                  ]),
                  details: g(() => [
                    S(yt, {
                      label: "Hash:",
                      value: ne.hash ? ne.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (re) => E(ne)
                    }, {
                      default: g(() => [...V[14] || (V[14] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            M.value.length ? h("", !0) : (n(), P(fs, {
              key: 1,
              icon: "📭",
              message: y.value ? `No models match '${y.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: k.value,
        title: "About Workspace Model Index",
        onClose: V[4] || (V[4] = (Q) => k.value = !1)
      }, {
        content: g(() => [...V[15] || (V[15] = [
          t("p", null, [
            b(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            b(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), P(fl, {
        key: 0,
        identifier: p.value,
        onClose: V[5] || (V[5] = (Q) => p.value = null)
      }, null, 8, ["identifier"])) : h("", !0),
      (n(), P(Mt, { to: "body" }, [
        w.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: V[9] || (V[9] = wt((Q) => w.value = !1, ["self"]))
        }, [
          t("div", cb, [
            t("div", ub, [
              V[16] || (V[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: V[6] || (V[6] = (Q) => w.value = !1)
              }, "✕")
            ]),
            t("div", db, [
              t("div", mb, [
                V[17] || (V[17] = t("label", null, "Current Directory", -1)),
                t("code", fb, d(x.value || "Not set"), 1)
              ]),
              t("div", vb, [
                V[18] || (V[18] = t("label", null, "New Directory Path", -1)),
                S(Ot, {
                  modelValue: $.value,
                  "onUpdate:modelValue": V[7] || (V[7] = (Q) => $.value = Q),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              V[19] || (V[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", pb, [
              S(Ne, {
                variant: "secondary",
                onClick: V[8] || (V[8] = (Q) => w.value = !1)
              }, {
                default: g(() => [...V[20] || (V[20] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              S(Ne, {
                variant: "primary",
                disabled: !$.value.trim() || C.value,
                loading: C.value,
                onClick: te
              }, {
                default: g(() => [
                  b(d(C.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : h("", !0)
      ])),
      S(zr, {
        show: N.value,
        onClose: V[10] || (V[10] = (Q) => N.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), hb = /* @__PURE__ */ _e(gb, [["__scopeId", "data-v-3705114c"]]), yb = { class: "node-details" }, wb = { class: "status-row" }, _b = {
  key: 0,
  class: "detail-row"
}, kb = { class: "value" }, bb = { class: "detail-row" }, $b = { class: "value" }, Cb = {
  key: 1,
  class: "detail-row"
}, xb = { class: "value mono" }, Sb = {
  key: 2,
  class: "detail-row"
}, Ib = ["href"], Eb = {
  key: 3,
  class: "detail-row"
}, Tb = { class: "value mono small" }, Pb = { class: "detail-row" }, Rb = {
  key: 0,
  class: "value"
}, Mb = {
  key: 1,
  class: "workflow-list"
}, Db = /* @__PURE__ */ ye({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = D(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = D(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, m) => (n(), P(kt, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: m[1] || (m[1] = (f) => a("close"))
    }, {
      body: g(() => [
        t("div", yb, [
          t("div", wb, [
            m[2] || (m[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Re(["status-badge", l.value])
            }, d(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", _b, [
            m[3] || (m[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", kb, d(e.node.source === "development" ? "" : "v") + d(e.node.version), 1)
          ])) : h("", !0),
          t("div", bb, [
            m[4] || (m[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", $b, d(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", Cb, [
            m[5] || (m[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", xb, d(e.node.registry_id), 1)
          ])) : h("", !0),
          e.node.repository ? (n(), i("div", Sb, [
            m[7] || (m[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              b(d(e.node.repository) + " ", 1),
              m[6] || (m[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, Ib)
          ])) : h("", !0),
          e.node.download_url ? (n(), i("div", Eb, [
            m[8] || (m[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", Tb, d(e.node.download_url), 1)
          ])) : h("", !0),
          m[10] || (m[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", Pb, [
            m[9] || (m[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", Rb, " Not used in any workflows ")) : (n(), i("div", Mb, [
              (n(!0), i(B, null, he(e.node.used_in_workflows, (f) => (n(), i("span", {
                key: f,
                class: "workflow-tag"
              }, d(f), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: m[0] || (m[0] = (f) => a("close"))
        }, {
          default: g(() => [...m[11] || (m[11] = [
            b(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Lb = /* @__PURE__ */ _e(Db, [["__scopeId", "data-v-b342f626"]]), Nb = { class: "dialog-message" }, Ub = {
  key: 0,
  class: "dialog-details"
}, Ab = {
  key: 1,
  class: "dialog-warning"
}, Ob = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), P(kt, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: g(() => [
        t("p", Nb, d(e.message), 1),
        e.details && e.details.length ? (n(), i("div", Ub, [
          (n(!0), i(B, null, he(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + d(a), 1))), 128))
        ])) : h("", !0),
        e.warning ? (n(), i("p", Ab, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          b(" " + d(e.warning), 1)
        ])) : h("", !0)
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: g(() => [
            b(d(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), P(Ne, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: g(() => [
            b(d(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : h("", !0),
        S(Ne, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
        }, {
          default: g(() => [
            b(d(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), vl = /* @__PURE__ */ _e(Ob, [["__scopeId", "data-v-3670b9f5"]]), zb = { class: "mismatch-warning" }, Fb = { class: "version-mismatch" }, Vb = { class: "version-actual" }, Bb = { class: "version-expected" }, Wb = { style: { color: "var(--cg-color-warning)" } }, Gb = { style: { color: "var(--cg-color-warning)" } }, jb = {
  key: 0,
  class: "community-status-badge"
}, Hb = { key: 0 }, Kb = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, qb = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Yb = /* @__PURE__ */ ye({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getNodes: l, trackNodeAsDev: r, installNode: c, uninstallNode: u, queueNodeInstall: m } = ut(), f = _({
      nodes: [],
      total_count: 0,
      installed_count: 0,
      missing_count: 0,
      untracked_count: 0,
      blocked_count: 0
    }), v = _(!1), y = _(null), k = _(""), p = _(!1), w = _(null), x = _(/* @__PURE__ */ new Set()), $ = _(null), C = D(() => {
      if (!k.value.trim()) return f.value.nodes;
      const z = k.value.toLowerCase();
      return f.value.nodes.filter(
        (O) => {
          var ie, Te;
          return O.name.toLowerCase().includes(z) || ((ie = O.description) == null ? void 0 : ie.toLowerCase().includes(z)) || ((Te = O.repository) == null ? void 0 : Te.toLowerCase().includes(z));
        }
      );
    }), N = D(
      () => C.value.filter((z) => z.installed && z.tracked)
    ), T = D(
      () => C.value.filter((z) => !z.installed && z.tracked && !z.issue_type)
    ), I = D(
      () => C.value.filter((z) => z.installed && !z.tracked)
    ), M = D(
      () => C.value.filter((z) => z.issue_type === "version_gated")
    ), L = D(
      () => C.value.filter((z) => z.issue_type === "uninstallable")
    ), W = D(() => M.value.length), E = D(() => L.value.length);
    function R(z) {
      return z.registry_id || z.name;
    }
    function te(z) {
      return x.value.has(R(z));
    }
    async function se(z, O) {
      const ie = z.registry_id;
      if (!ie) {
        a("toast", `Node "${z.name}" has no package id for install`, "warning");
        return;
      }
      if (O === "git" && !z.repository) {
        a("toast", `Node "${z.name}" has no repository URL for git install`, "warning");
        return;
      }
      const Te = {
        id: ie,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      O === "git" && z.repository && (Te.repository = z.repository, Te.install_source = "git"), await m(Te), x.value.add(R(z)), a("toast", `✓ Queued install for "${z.name}"`, "success");
    }
    function oe(z) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[z] || z;
    }
    const X = D(() => o.versionMismatches.length > 0);
    function V(z) {
      return !z.used_in_workflows || z.used_in_workflows.length === 0 ? "Not used in any workflows" : z.used_in_workflows.length === 1 ? z.used_in_workflows[0] : `${z.used_in_workflows.length} workflows`;
    }
    function Q(z) {
      return z.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function ne(z) {
      return z.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function re(z) {
      return z.registry_id ? `Community-mapped package: ${z.registry_id}` : "Community-mapped package";
    }
    function F(z) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function ee(z) {
      w.value = z;
    }
    function le() {
      a("open-node-manager");
    }
    function Ae(z) {
      $.value = {
        title: "Track as Development Node",
        message: `Track "${z}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const O = await r(z);
            O.status === "success" ? (a("toast", `✓ Node "${z}" tracked as development`, "success"), await Y()) : a("toast", `Failed to track node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error tracking node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function qe(z) {
      $.value = {
        title: "Remove Untracked Node",
        message: `Remove "${z}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const O = await u(z);
            O.status === "success" ? (a("toast", `✓ Node "${z}" removed`, "success"), await Y()) : a("toast", `Failed to remove node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error removing node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function je(z) {
      $.value = {
        title: "Install Missing Node",
        message: `Install "${z}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0;
            const O = await c(z);
            O.status === "success" ? (a("toast", `✓ Node "${z}" installed`, "success"), await Y()) : a("toast", `Failed to install node: ${O.message || "Unknown error"}`, "error");
          } catch (O) {
            a("toast", `Error installing node: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function xe(z) {
      $.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${z.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await se(z, "registry");
          } catch (O) {
            a("toast", `Error queueing install: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    function A(z) {
      $.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${z.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          $.value = null;
          try {
            v.value = !0, await se(z, "git");
          } catch (O) {
            a("toast", `Error queueing git install: ${O instanceof Error ? O.message : "Unknown error"}`, "error");
          } finally {
            v.value = !1;
          }
        }
      };
    }
    async function Y() {
      v.value = !0, y.value = null;
      try {
        f.value = await l();
      } catch (z) {
        y.value = z instanceof Error ? z.message : "Failed to load nodes";
      } finally {
        v.value = !1;
      }
    }
    return rt(Y), (z, O) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: O[0] || (O[0] = (ie) => p.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: le
              }, {
                default: g(() => [...O[7] || (O[7] = [
                  b(" Browse Nodes ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          S(Lo, {
            modelValue: k.value,
            "onUpdate:modelValue": O[1] || (O[1] = (ie) => k.value = ie),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          v.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading nodes..."
          })) : y.value ? (n(), P(Us, {
            key: 1,
            message: y.value,
            retry: !0,
            onRetry: Y
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            f.value.total_count ? (n(), P(hn, {
              key: 0,
              variant: "compact"
            }, {
              default: g(() => [
                b(d(f.value.installed_count) + " installed ", 1),
                f.value.missing_count ? (n(), i(B, { key: 0 }, [
                  b(" • " + d(f.value.missing_count) + " missing", 1)
                ], 64)) : h("", !0),
                W.value ? (n(), i(B, { key: 1 }, [
                  b(" • " + d(W.value) + " blocked", 1)
                ], 64)) : h("", !0),
                E.value ? (n(), i(B, { key: 2 }, [
                  b(" • " + d(E.value) + " community-mapped", 1)
                ], 64)) : h("", !0),
                f.value.untracked_count ? (n(), i(B, { key: 3 }, [
                  b(" • " + d(f.value.untracked_count) + " untracked", 1)
                ], 64)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            X.value ? (n(), P(pt, {
              key: 1,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                t("div", zb, [
                  O[8] || (O[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, d(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(B, null, he(e.versionMismatches, (ie) => (n(), P(Pt, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: g(() => [...O[9] || (O[9] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Fb, [
                      t("span", Vb, d(ie.actual), 1),
                      O[10] || (O[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", Bb, d(ie.expected), 1)
                    ])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "warning",
                      size: "sm",
                      onClick: O[2] || (O[2] = (Te) => a("repair-environment"))
                    }, {
                      default: g(() => [...O[11] || (O[11] = [
                        b(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            M.value.length ? (n(), P(pt, {
              key: 2,
              title: "BLOCKED",
              count: M.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(M.value, (ie) => (n(), P(Pt, {
                  key: `blocked-${ie.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...O[12] || (O[12] = [
                    b("⛔", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Wb, d(Q(ie)), 1)
                  ]),
                  details: g(() => [
                    S(yt, {
                      label: "Guidance:",
                      value: ie.issue_guidance || ne(ie)
                    }, null, 8, ["value"]),
                    S(yt, {
                      label: "Used by:",
                      value: V(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...O[13] || (O[13] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            L.value.length ? (n(), P(pt, {
              key: 3,
              title: "COMMUNITY-MAPPED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(L.value, (ie) => (n(), P(Pt, {
                  key: `community-${ie.name}`,
                  status: "warning"
                }, {
                  icon: g(() => [...O[14] || (O[14] = [
                    b("⚠", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    t("span", Gb, d(re(ie)), 1)
                  ]),
                  details: g(() => [
                    S(yt, {
                      label: "Guidance:",
                      value: ie.issue_guidance || F(ie)
                    }, null, 8, ["value"]),
                    S(yt, {
                      label: "Used by:",
                      value: V(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...O[15] || (O[15] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    te(ie) ? (n(), i("span", jb, "Queued")) : (n(), i(B, { key: 1 }, [
                      ie.registry_id ? (n(), P(pe, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (Te) => xe(ie)
                      }, {
                        default: g(() => [...O[16] || (O[16] = [
                          b(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0),
                      ie.repository ? (n(), P(pe, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (Te) => A(ie)
                      }, {
                        default: g(() => [...O[17] || (O[17] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : h("", !0)
                    ], 64))
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            I.value.length ? (n(), P(pt, {
              key: 4,
              title: "UNTRACKED",
              count: I.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(I.value, (ie) => (n(), P(Pt, {
                  key: ie.name,
                  status: "warning"
                }, {
                  icon: g(() => [...O[18] || (O[18] = [
                    b("?", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [...O[19] || (O[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: g(() => [
                    S(yt, {
                      label: "Used by:",
                      value: V(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...O[20] || (O[20] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Te) => Ae(ie.name)
                    }, {
                      default: g(() => [...O[21] || (O[21] = [
                        b(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (Te) => qe(ie.name)
                    }, {
                      default: g(() => [...O[22] || (O[22] = [
                        b(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            N.value.length ? (n(), P(pt, {
              key: 5,
              title: "INSTALLED",
              count: N.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(N.value, (ie) => (n(), P(Pt, {
                  key: ie.name,
                  status: "synced"
                }, {
                  icon: g(() => [
                    b(d(ie.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [
                    ie.version ? (n(), i("span", Hb, d(ie.source === "development" ? "" : "v") + d(ie.version), 1)) : (n(), i("span", Kb, "version unknown")),
                    t("span", qb, " • " + d(oe(ie.source)), 1)
                  ]),
                  details: g(() => [
                    S(yt, {
                      label: "Used by:",
                      value: V(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...O[23] || (O[23] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: le
                    }, {
                      default: g(() => [...O[24] || (O[24] = [
                        b(" Manage ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            T.value.length ? (n(), P(pt, {
              key: 6,
              title: "MISSING",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(T.value, (ie) => (n(), P(Pt, {
                  key: ie.name,
                  status: "missing"
                }, {
                  icon: g(() => [...O[25] || (O[25] = [
                    b("!", -1)
                  ])]),
                  title: g(() => [
                    b(d(ie.name), 1)
                  ]),
                  subtitle: g(() => [...O[26] || (O[26] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: g(() => [
                    S(yt, {
                      label: "Required by:",
                      value: V(ie)
                    }, null, 8, ["value"])
                  ]),
                  actions: g(() => [
                    S(pe, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Te) => ee(ie)
                    }, {
                      default: g(() => [...O[27] || (O[27] = [
                        b(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      onClick: (Te) => je(ie.name)
                    }, {
                      default: g(() => [...O[28] || (O[28] = [
                        b(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !N.value.length && !T.value.length && !M.value.length && !L.value.length && !I.value.length ? (n(), P(fs, {
              key: 7,
              icon: "📭",
              message: k.value ? `No nodes match '${k.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: p.value,
        title: "About Custom Nodes",
        onClose: O[4] || (O[4] = (ie) => p.value = !1)
      }, {
        content: g(() => [...O[29] || (O[29] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            b(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            b(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            b(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            b(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            b(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: g(() => [
          S(pe, {
            variant: "primary",
            onClick: O[3] || (O[3] = (ie) => p.value = !1)
          }, {
            default: g(() => [...O[30] || (O[30] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), P(Lb, {
        key: 0,
        node: w.value,
        onClose: O[5] || (O[5] = (ie) => w.value = null)
      }, null, 8, ["node"])) : h("", !0),
      $.value ? (n(), P(vl, {
        key: 1,
        title: $.value.title,
        message: $.value.message,
        warning: $.value.warning,
        "confirm-label": $.value.confirmLabel,
        destructive: $.value.destructive,
        onConfirm: $.value.onConfirm,
        onCancel: O[6] || (O[6] = (ie) => $.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : h("", !0)
    ], 64));
  }
}), Qb = /* @__PURE__ */ _e(Yb, [["__scopeId", "data-v-3ef68ac4"]]);
function Fr(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const Jb = { class: "remote-url-display" }, Xb = ["title"], Zb = ["title"], e2 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, t2 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, s2 = /* @__PURE__ */ ye({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = _(!1), a = D(() => {
      if (s.url.length <= s.maxLength)
        return s.url;
      const r = s.url.slice(0, Math.floor(s.maxLength * 0.6)), c = s.url.slice(-Math.floor(s.maxLength * 0.3));
      return `${r}...${c}`;
    });
    async function l() {
      try {
        await navigator.clipboard.writeText(s.url), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (r) {
        console.error("Failed to copy URL:", r);
      }
    }
    return (r, c) => (n(), i("div", Jb, [
      t("span", {
        class: "url-text",
        title: e.url
      }, d(a.value), 9, Xb),
      t("button", {
        class: Re(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", t2, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", e2, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, Zb)
    ]));
  }
}), o2 = /* @__PURE__ */ _e(s2, [["__scopeId", "data-v-7768a58d"]]), n2 = { class: "remote-title" }, a2 = {
  key: 0,
  class: "default-badge"
}, l2 = {
  key: 1,
  class: "sync-badge"
}, i2 = {
  key: 0,
  class: "ahead"
}, r2 = {
  key: 1,
  class: "behind"
}, c2 = {
  key: 1,
  class: "synced"
}, u2 = ["href"], d2 = {
  key: 1,
  class: "remote-url-text"
}, m2 = /* @__PURE__ */ ye({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = D(() => s.fetchingRemote === s.remote.name), a = D(() => s.remote.is_default), l = D(() => s.syncStatus && s.syncStatus.behind > 0), r = D(() => s.syncStatus && s.syncStatus.ahead > 0), c = D(() => s.remote.push_url !== s.remote.fetch_url), u = D(() => {
      const f = s.remote.fetch_url, v = f.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return v ? `https://${v[1]}/${v[2]}` : f.startsWith("https://") || f.startsWith("http://") ? f.replace(/\.git$/, "") : null;
    }), m = D(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (f, v) => (n(), P(Pt, {
      status: a.value ? "synced" : void 0
    }, io({
      icon: g(() => [
        b(d(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: g(() => [
        t("div", n2, [
          t("span", null, d(e.remote.name), 1),
          a.value ? (n(), i("span", a2, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", l2, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", i2, "↑" + d(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", r2, "↓" + d(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", c2, "✓ synced"))
          ])) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        u.value ? (n(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: v[0] || (v[0] = wt(() => {
          }, ["stop"]))
        }, d(m.value), 9, u2)) : (n(), i("span", d2, d(m.value), 1))
      ]),
      actions: g(() => [
        S(pe, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: v[1] || (v[1] = (y) => f.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...v[6] || (v[6] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        S(pe, {
          variant: l.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[2] || (v[2] = (y) => f.$emit("pull", e.remote.name))
        }, {
          default: g(() => [
            b(" Pull" + d(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(pe, {
          variant: r.value ? "primary" : "secondary",
          size: "xs",
          disabled: !e.syncStatus,
          onClick: v[3] || (v[3] = (y) => f.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push" + d(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        S(pe, {
          variant: "secondary",
          size: "xs",
          onClick: v[4] || (v[4] = (y) => f.$emit("edit", e.remote.name))
        }, {
          default: g(() => [...v[7] || (v[7] = [
            b(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? h("", !0) : (n(), P(pe, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: v[5] || (v[5] = (y) => f.$emit("remove", e.remote.name))
        }, {
          default: g(() => [...v[8] || (v[8] = [
            b(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: g(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), P(yt, {
            key: 0,
            label: "Push URL:"
          }, {
            default: g(() => [
              S(o2, {
                url: e.remote.push_url
              }, null, 8, ["url"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), f2 = /* @__PURE__ */ _e(m2, [["__scopeId", "data-v-8310f3a8"]]), v2 = ["for"], p2 = {
  key: 0,
  class: "base-form-field-required"
}, g2 = { class: "base-form-field-input" }, h2 = {
  key: 1,
  class: "base-form-field-error"
}, y2 = {
  key: 2,
  class: "base-form-field-hint"
}, w2 = /* @__PURE__ */ ye({
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
    const s = e, o = D(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Re(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        b(d(e.label) + " ", 1),
        e.required ? (n(), i("span", p2, "*")) : h("", !0)
      ], 8, v2)) : h("", !0),
      t("div", g2, [
        at(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", h2, d(e.error), 1)) : e.hint ? (n(), i("span", y2, d(e.hint), 1)) : h("", !0)
    ], 2));
  }
}), xa = /* @__PURE__ */ _e(w2, [["__scopeId", "data-v-9a1cf296"]]), _2 = { class: "remote-form" }, k2 = { class: "form-header" }, b2 = { class: "form-body" }, $2 = {
  key: 0,
  class: "form-error"
}, C2 = { class: "form-actions" }, x2 = /* @__PURE__ */ ye({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = _(!1), c = _(null);
    $t(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
      l.value = {
        name: o.remoteName,
        fetchUrl: o.fetchUrl,
        pushUrl: o.pushUrl
      };
    });
    const u = D(() => l.value.name.trim() !== "" && l.value.fetchUrl.trim() !== "");
    async function m() {
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
    return (f, v) => (n(), i("div", _2, [
      t("div", k2, [
        S(Kt, null, {
          default: g(() => [
            b(d(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", b2, [
        S(xa, {
          label: "Remote Name",
          required: ""
        }, {
          default: g(() => [
            S(Ot, {
              modelValue: l.value.name,
              "onUpdate:modelValue": v[0] || (v[0] = (y) => l.value.name = y),
              disabled: e.mode === "edit",
              placeholder: "e.g., origin, upstream"
            }, null, 8, ["modelValue", "disabled"])
          ]),
          _: 1
        }),
        S(xa, {
          label: "Fetch URL",
          required: ""
        }, {
          default: g(() => [
            S(Ot, {
              modelValue: l.value.fetchUrl,
              "onUpdate:modelValue": v[1] || (v[1] = (y) => l.value.fetchUrl = y),
              placeholder: "https://github.com/user/repo.git"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        S(xa, { label: "Push URL (optional)" }, {
          default: g(() => [
            S(Ot, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": v[2] || (v[2] = (y) => l.value.pushUrl = y),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", $2, d(c.value), 1)) : h("", !0)
      ]),
      t("div", C2, [
        S(pe, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: m
        }, {
          default: g(() => [
            b(d(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        S(pe, {
          variant: "ghost",
          size: "md",
          onClick: v[3] || (v[3] = (y) => f.$emit("cancel"))
        }, {
          default: g(() => [...v[4] || (v[4] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), S2 = /* @__PURE__ */ _e(x2, [["__scopeId", "data-v-56021b18"]]), I2 = { class: "conflict-summary-box" }, E2 = { class: "summary-header" }, T2 = { class: "summary-text" }, P2 = { key: 0 }, R2 = {
  key: 1,
  class: "all-resolved"
}, M2 = { class: "summary-progress" }, D2 = { class: "progress-bar" }, L2 = { class: "progress-text" }, N2 = /* @__PURE__ */ ye({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = D(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", I2, [
      t("div", E2, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", T2, [
          t("strong", null, d(e.conflictCount) + " conflict" + d(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", P2, " Resolve all conflicts before " + d(e.operationType) + "ing ", 1)) : (n(), i("p", R2, " All conflicts resolved - ready to " + d(e.operationType), 1))
        ])
      ]),
      t("div", M2, [
        t("div", D2, [
          t("div", {
            class: "progress-fill",
            style: Qt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", L2, d(e.resolvedCount) + " / " + d(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), U2 = /* @__PURE__ */ _e(N2, [["__scopeId", "data-v-4e9e6cc9"]]), A2 = { class: "modal-header" }, O2 = { class: "modal-title" }, z2 = { class: "modal-body" }, F2 = {
  key: 0,
  class: "error-box"
}, V2 = {
  key: 0,
  class: "error-hint"
}, B2 = {
  key: 1,
  class: "loading-state"
}, W2 = { class: "commit-summary" }, G2 = {
  key: 0,
  class: "commits-section"
}, j2 = { class: "commit-list" }, H2 = { class: "commit-hash" }, K2 = { class: "commit-message" }, q2 = { class: "commit-date" }, Y2 = {
  key: 1,
  class: "changes-section"
}, Q2 = {
  key: 0,
  class: "change-group",
  open: ""
}, J2 = { class: "change-count" }, X2 = { class: "change-list" }, Z2 = {
  key: 0,
  class: "conflict-badge"
}, e$ = {
  key: 1,
  class: "change-group"
}, t$ = { class: "change-count" }, s$ = { class: "change-list" }, o$ = {
  key: 2,
  class: "change-group"
}, n$ = { class: "change-count" }, a$ = { class: "change-list" }, l$ = {
  key: 3,
  class: "strategy-section"
}, i$ = { class: "radio-group" }, r$ = { class: "radio-option" }, c$ = { class: "radio-option" }, u$ = { class: "radio-option" }, d$ = {
  key: 4,
  class: "up-to-date"
}, m$ = { class: "modal-actions" }, ii = "comfygit.pullModelStrategy", f$ = /* @__PURE__ */ ye({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(localStorage.getItem(ii) || "skip");
    $t(l, ($) => {
      localStorage.setItem(ii, $);
    });
    const r = D(() => {
      var $;
      return (($ = o.error) == null ? void 0 : $.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = D(() => {
      if (!o.preview) return 0;
      const $ = o.preview.changes.workflows;
      return $.added.length + $.modified.length + $.deleted.length;
    }), u = D(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), m = D(() => {
      var $;
      return c.value > 0 || u.value > 0 || ((($ = o.preview) == null ? void 0 : $.changes.models.count) || 0) > 0;
    }), f = D(() => o.preview && Fr(o.preview) ? o.preview : null), v = D(() => {
      var $;
      return (($ = f.value) == null ? void 0 : $.workflow_conflicts.length) ?? 0;
    }), y = D(() => {
      var $;
      return (($ = o.conflictResolutions) == null ? void 0 : $.size) ?? 0;
    }), k = D(
      () => v.value > 0 && y.value === v.value
    ), p = D(() => !(!o.preview || o.preview.has_uncommitted_changes || f.value && !k.value));
    function w($) {
      if (!f.value) return !1;
      const C = $.replace(/\.json$/, "");
      return f.value.workflow_conflicts.some((N) => N.name === C);
    }
    function x($) {
      const C = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: $, resolutions: C });
    }
    return ($, C) => {
      var N, T;
      return n(), P(Mt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: C[11] || (C[11] = (I) => $.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: C[10] || (C[10] = wt(() => {
            }, ["stop"]))
          }, [
            t("div", A2, [
              t("h3", O2, "PULL FROM " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: C[0] || (C[0] = (I) => $.$emit("close"))
              }, "✕")
            ]),
            t("div", z2, [
              e.error ? (n(), i("div", F2, [
                C[13] || (C[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  C[12] || (C[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, d(e.error), 1),
                  r.value ? (n(), i("p", V2, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : h("", !0)
                ])
              ])) : e.loading ? (n(), i("div", B2, [...C[14] || (C[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (N = e.preview) != null && N.has_uncommitted_changes ? (n(), i(B, { key: 2 }, [
                C[15] || (C[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                C[16] || (C[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                t("div", W2, [
                  C[17] || (C[17] = t("span", { class: "icon" }, "📥", -1)),
                  b(" " + d(e.preview.commits_behind) + " commit" + d(e.preview.commits_behind !== 1 ? "s" : "") + " from " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", G2, [
                  C[18] || (C[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", j2, [
                    (n(!0), i(B, null, he(e.preview.commits, (I) => (n(), i("div", {
                      key: I.hash,
                      class: "commit-item"
                    }, [
                      t("span", H2, d(I.short_hash || I.hash.slice(0, 7)), 1),
                      t("span", K2, d(I.message), 1),
                      t("span", q2, d(I.date_relative || I.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                m.value ? (n(), i("div", Y2, [
                  C[22] || (C[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", Q2, [
                    t("summary", null, [
                      C[19] || (C[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", J2, d(c.value) + " changes", 1)
                    ]),
                    t("div", X2, [
                      (n(!0), i(B, null, he(e.preview.changes.workflows.added, (I) => (n(), i("div", {
                        key: "a-" + I,
                        class: "change-item add"
                      }, " + " + d(I), 1))), 128)),
                      (n(!0), i(B, null, he(e.preview.changes.workflows.modified, (I) => (n(), i("div", {
                        key: "m-" + I,
                        class: "change-item modify"
                      }, [
                        b(" ~ " + d(I) + " ", 1),
                        w(I) ? (n(), i("span", Z2, "CONFLICT")) : h("", !0)
                      ]))), 128)),
                      (n(!0), i(B, null, he(e.preview.changes.workflows.deleted, (I) => (n(), i("div", {
                        key: "d-" + I,
                        class: "change-item delete"
                      }, " - " + d(I), 1))), 128))
                    ])
                  ])) : h("", !0),
                  u.value > 0 ? (n(), i("details", e$, [
                    t("summary", null, [
                      C[20] || (C[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", t$, d(u.value) + " to install", 1)
                    ]),
                    t("div", s$, [
                      (n(!0), i(B, null, he(e.preview.changes.nodes.to_install, (I) => (n(), i("div", {
                        key: I,
                        class: "change-item add"
                      }, " + " + d(I), 1))), 128))
                    ])
                  ])) : h("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", o$, [
                    t("summary", null, [
                      C[21] || (C[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", n$, d(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", a$, [
                      (n(!0), i(B, null, he(e.preview.changes.models.referenced, (I) => (n(), i("div", {
                        key: I,
                        class: "change-item"
                      }, d(I), 1))), 128))
                    ])
                  ])) : h("", !0)
                ])) : h("", !0),
                f.value ? (n(), P(U2, {
                  key: 2,
                  "conflict-count": v.value,
                  "resolved-count": y.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : h("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", l$, [
                  C[27] || (C[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", i$, [
                    t("label", r$, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[1] || (C[1] = (I) => l.value = I),
                        value: "all"
                      }, null, 512), [
                        [rs, l.value]
                      ]),
                      C[23] || (C[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", c$, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[2] || (C[2] = (I) => l.value = I),
                        value: "required"
                      }, null, 512), [
                        [rs, l.value]
                      ]),
                      C[24] || (C[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", u$, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": C[3] || (C[3] = (I) => l.value = I),
                        value: "skip"
                      }, null, 512), [
                        [rs, l.value]
                      ]),
                      C[25] || (C[25] = t("span", null, "Skip model downloads", -1)),
                      C[26] || (C[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  C[28] || (C[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : h("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", d$, [
                  C[29] || (C[29] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ])) : h("", !0)
              ], 64)) : h("", !0)
            ]),
            t("div", m$, [
              S(pe, {
                variant: "secondary",
                onClick: C[4] || (C[4] = (I) => $.$emit("close"))
              }, {
                default: g(() => [...C[30] || (C[30] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(B, { key: 0 }, [
                S(pe, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: C[5] || (C[5] = (I) => x(!1))
                }, {
                  default: g(() => [...C[31] || (C[31] = [
                    b(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                S(pe, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: C[6] || (C[6] = (I) => x(!0))
                }, {
                  default: g(() => [...C[32] || (C[32] = [
                    b(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), P(pe, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: C[7] || (C[7] = (I) => x(!0))
              }, {
                default: g(() => [...C[33] || (C[33] = [
                  b(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(B, { key: 2 }, [
                f.value && !k.value ? (n(), P(pe, {
                  key: 0,
                  variant: "primary",
                  onClick: C[8] || (C[8] = (I) => a("openConflictResolution"))
                }, {
                  default: g(() => [
                    b(" Resolve Conflicts (" + d(y.value) + "/" + d(v.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), P(pe, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !p.value,
                  onClick: C[9] || (C[9] = (I) => x(!1))
                }, {
                  default: g(() => [...C[34] || (C[34] = [
                    b(" Pull Changes ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading", "disabled"]))
              ], 64)) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), v$ = /* @__PURE__ */ _e(f$, [["__scopeId", "data-v-1d633bba"]]), p$ = { class: "modal-header" }, g$ = { class: "modal-title" }, h$ = { class: "modal-body" }, y$ = {
  key: 0,
  class: "loading-state"
}, w$ = {
  key: 1,
  class: "warning-box"
}, _$ = {
  key: 0,
  class: "commits-section"
}, k$ = { class: "commit-list" }, b$ = { class: "commit-hash" }, $$ = { class: "commit-message" }, C$ = { class: "commit-date" }, x$ = { class: "force-option" }, S$ = { class: "checkbox-option" }, I$ = { class: "commit-summary" }, E$ = { key: 0 }, T$ = { key: 1 }, P$ = {
  key: 0,
  class: "info-box"
}, R$ = {
  key: 1,
  class: "commits-section"
}, M$ = { class: "commit-list" }, D$ = { class: "commit-hash" }, L$ = { class: "commit-message" }, N$ = { class: "commit-date" }, U$ = {
  key: 2,
  class: "up-to-date"
}, A$ = { class: "modal-actions" }, O$ = /* @__PURE__ */ ye({
  __name: "PushModal",
  props: {
    show: { type: Boolean },
    remoteName: {},
    preview: {},
    loading: { type: Boolean },
    pushing: { type: Boolean }
  },
  emits: ["close", "push", "pull-first"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1);
    function l(r) {
      o("push", { force: r });
    }
    return (r, c) => {
      var u, m, f;
      return n(), P(Mt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: c[7] || (c[7] = (v) => r.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: c[6] || (c[6] = wt(() => {
            }, ["stop"]))
          }, [
            t("div", p$, [
              t("h3", g$, "PUSH TO " + d(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: c[0] || (c[0] = (v) => r.$emit("close"))
              }, "✕")
            ]),
            t("div", h$, [
              e.loading ? (n(), i("div", y$, [...c[8] || (c[8] = [
                t("span", { class: "spinner" }, "⟳", -1),
                b(" Loading preview... ", -1)
              ])])) : (u = e.preview) != null && u.has_uncommitted_changes ? (n(), i("div", w$, [...c[9] || (c[9] = [
                t("span", { class: "warning-icon" }, "⚠", -1),
                t("div", null, [
                  t("strong", null, "UNCOMMITTED CHANGES"),
                  t("p", null, "Commit your changes before pushing.")
                ], -1)
              ])])) : (m = e.preview) != null && m.remote_has_new_commits ? (n(), i(B, { key: 2 }, [
                c[13] || (c[13] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "REMOTE HAS NEW COMMITS"),
                    t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                  ])
                ], -1)),
                e.preview.commits_ahead > 0 ? (n(), i("div", _$, [
                  c[10] || (c[10] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", k$, [
                    (n(!0), i(B, null, he(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", b$, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", $$, d(v.message), 1),
                      t("span", C$, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : h("", !0),
                t("div", x$, [
                  t("label", S$, [
                    lt(t("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": c[1] || (c[1] = (v) => a.value = v)
                    }, null, 512), [
                      [dn, a.value]
                    ]),
                    c[11] || (c[11] = t("span", null, "Force push (overwrite remote)", -1))
                  ]),
                  c[12] || (c[12] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                ])
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                t("div", I$, [
                  c[14] || (c[14] = t("span", { class: "icon" }, "📤", -1)),
                  e.preview.is_first_push ? (n(), i("span", E$, " Creating " + d(e.preview.remote) + "/" + d(e.preview.branch) + " with " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", T$, " Pushing " + d(e.preview.commits_ahead) + " commit" + d(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + d(e.preview.remote) + "/" + d(e.preview.branch), 1))
                ]),
                e.preview.is_first_push ? (n(), i("div", P$, [...c[15] || (c[15] = [
                  t("svg", {
                    class: "info-icon",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("circle", {
                      cx: "8",
                      cy: "8",
                      r: "7",
                      stroke: "currentColor",
                      "stroke-width": "1.5",
                      fill: "none"
                    }),
                    t("text", {
                      x: "8",
                      y: "11",
                      "text-anchor": "middle",
                      "font-size": "10",
                      "font-weight": "bold",
                      fill: "currentColor"
                    }, "i")
                  ], -1),
                  t("span", null, "This will create the remote branch for the first time.", -1)
                ])])) : h("", !0),
                e.preview.commits_ahead > 0 ? (n(), i("div", R$, [
                  c[16] || (c[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                  t("div", M$, [
                    (n(!0), i(B, null, he(e.preview.commits, (v) => (n(), i("div", {
                      key: v.hash,
                      class: "commit-item"
                    }, [
                      t("span", D$, d(v.short_hash || v.hash.slice(0, 7)), 1),
                      t("span", L$, d(v.message), 1),
                      t("span", N$, d(v.date_relative || v.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : (n(), i("div", U$, [
                  c[17] || (c[17] = t("span", { class: "icon" }, "✓", -1)),
                  b(" Nothing to push - already up to date with " + d(e.preview.remote) + "/" + d(e.preview.branch), 1)
                ]))
              ], 64)) : h("", !0)
            ]),
            t("div", A$, [
              S(pe, {
                variant: "secondary",
                onClick: c[2] || (c[2] = (v) => r.$emit("close"))
              }, {
                default: g(() => [...c[18] || (c[18] = [
                  b(" Cancel ", -1)
                ])]),
                _: 1
              }),
              (f = e.preview) != null && f.remote_has_new_commits ? (n(), i(B, { key: 0 }, [
                S(pe, {
                  variant: "secondary",
                  onClick: c[3] || (c[3] = (v) => r.$emit("pull-first"))
                }, {
                  default: g(() => [...c[19] || (c[19] = [
                    b(" Pull First ", -1)
                  ])]),
                  _: 1
                }),
                S(pe, {
                  variant: "destructive",
                  disabled: !a.value,
                  loading: e.pushing,
                  onClick: c[4] || (c[4] = (v) => l(!0))
                }, {
                  default: g(() => [...c[20] || (c[20] = [
                    b(" Force Push ", -1)
                  ])]),
                  _: 1
                }, 8, ["disabled", "loading"])
              ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), P(pe, {
                key: 1,
                variant: "primary",
                loading: e.pushing,
                onClick: c[5] || (c[5] = (v) => l(!1))
              }, {
                default: g(() => [...c[21] || (c[21] = [
                  b(" Push ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : h("", !0)
            ])
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), z$ = /* @__PURE__ */ _e(O$, [["__scopeId", "data-v-3c2e35ab"]]), F$ = { class: "resolution-choice-group" }, V$ = ["disabled"], B$ = ["disabled"], W$ = /* @__PURE__ */ ye({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", F$, [
      t("button", {
        class: Re(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, V$),
      t("button", {
        class: Re(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, B$)
    ]));
  }
}), G$ = /* @__PURE__ */ _e(W$, [["__scopeId", "data-v-985715ed"]]), j$ = { class: "conflict-header" }, H$ = { class: "conflict-info" }, K$ = { class: "workflow-name" }, q$ = { class: "conflict-description" }, Y$ = {
  key: 0,
  class: "resolved-badge"
}, Q$ = { class: "resolved-text" }, J$ = { class: "conflict-hashes" }, X$ = { class: "hash-item" }, Z$ = { class: "hash-item" }, eC = { class: "conflict-actions" }, tC = /* @__PURE__ */ ye({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(o.resolution);
    $t(() => o.resolution, (m) => {
      l.value = m;
    }), $t(l, (m) => {
      m && a("resolve", m);
    });
    const r = D(() => l.value !== null), c = D(() => o.conflict.conflict_type === "both_modified" ? "Both you and remote modified this workflow" : "Conflicting changes detected"), u = D(() => {
      switch (l.value) {
        case "take_base":
          return "Keep Mine";
        case "take_target":
          return "Keep Theirs";
        default:
          return "";
      }
    });
    return (m, f) => {
      var v, y;
      return n(), i("div", {
        class: Re(["conflict-item", { resolved: r.value }])
      }, [
        t("div", j$, [
          f[2] || (f[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", H$, [
            t("code", K$, d(e.conflict.name) + ".json", 1),
            t("div", q$, d(c.value), 1)
          ]),
          r.value ? (n(), i("div", Y$, [
            f[1] || (f[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", Q$, d(u.value), 1)
          ])) : h("", !0)
        ]),
        t("div", J$, [
          t("span", X$, [
            f[3] || (f[3] = b("Your: ", -1)),
            t("code", null, d(((v = e.conflict.base_hash) == null ? void 0 : v.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", Z$, [
            f[4] || (f[4] = b("Theirs: ", -1)),
            t("code", null, d(((y = e.conflict.target_hash) == null ? void 0 : y.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", eC, [
          S(G$, {
            modelValue: l.value,
            "onUpdate:modelValue": f[0] || (f[0] = (k) => l.value = k),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), sC = /* @__PURE__ */ _e(tC, [["__scopeId", "data-v-506d3bbf"]]), oC = { class: "resolution-content" }, nC = {
  key: 0,
  class: "error-box"
}, aC = { class: "resolution-header" }, lC = { class: "header-stats" }, iC = { class: "stat" }, rC = { class: "stat-value" }, cC = { class: "stat resolved" }, uC = { class: "stat-value" }, dC = {
  key: 0,
  class: "stat pending"
}, mC = { class: "stat-value" }, fC = { class: "conflicts-list" }, vC = {
  key: 1,
  class: "all-resolved-message"
}, pC = /* @__PURE__ */ ye({
  __name: "WorkflowResolutionModal",
  props: {
    workflowConflicts: {},
    resolutions: {},
    operationType: {},
    validating: { type: Boolean },
    error: {}
  },
  emits: ["close", "resolve", "apply"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = D(() => o.resolutions.size), r = D(() => o.workflowConflicts.length - l.value), c = D(() => l.value === o.workflowConflicts.length), u = D(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function m(k) {
      const p = o.resolutions.get(k);
      return (p == null ? void 0 : p.resolution) ?? null;
    }
    function f(k, p) {
      a("resolve", k, p);
    }
    function v() {
      a("close");
    }
    function y() {
      a("apply");
    }
    return (k, p) => (n(), P(kt, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: v
    }, {
      body: g(() => [
        t("div", oC, [
          e.error ? (n(), i("div", nC, [
            p[1] || (p[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              p[0] || (p[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, d(e.error), 1)
            ])
          ])) : h("", !0),
          t("div", aC, [
            t("div", lC, [
              t("div", iC, [
                t("span", rC, d(e.workflowConflicts.length), 1),
                p[2] || (p[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", cC, [
                t("span", uC, d(l.value), 1),
                p[3] || (p[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", dC, [
                t("span", mC, d(r.value), 1),
                p[4] || (p[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : h("", !0)
            ]),
            p[5] || (p[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", fC, [
            (n(!0), i(B, null, he(e.workflowConflicts, (w) => (n(), P(sC, {
              key: w.name,
              conflict: w,
              resolution: m(w.name),
              onResolve: (x) => f(w.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", vC, [
            p[6] || (p[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + d(u.value) + '" to continue.', 1)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: v
        }, {
          default: g(() => [...p[7] || (p[7] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        p[8] || (p[8] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Ne, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: y
        }, {
          default: g(() => [
            b(d(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), gC = /* @__PURE__ */ _e(pC, [["__scopeId", "data-v-c58d150d"]]), hC = { class: "node-conflict-item" }, yC = { class: "node-header" }, wC = { class: "node-name" }, _C = { class: "node-id" }, kC = { class: "version-comparison" }, bC = { class: "version yours" }, $C = { class: "version theirs" }, CC = { class: "chosen-version" }, xC = { class: "chosen" }, SC = { class: "chosen-reason" }, IC = { class: "affected-workflows" }, EC = { class: "wf-source" }, TC = { class: "wf-version" }, PC = /* @__PURE__ */ ye({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", hC, [
      t("div", yC, [
        t("code", wC, d(e.conflict.node_name), 1),
        t("span", _C, "(" + d(e.conflict.node_id) + ")", 1)
      ]),
      t("div", kC, [
        t("div", bC, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, d(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", $C, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, d(e.conflict.target_version), 1)
        ])
      ]),
      t("div", CC, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", xC, d(e.conflict.chosen_version), 1),
        t("span", SC, d(e.conflict.chosen_reason), 1)
      ]),
      t("details", IC, [
        t("summary", null, " Affected workflows (" + d(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(B, null, he(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, d(a.name), 1),
            t("span", EC, "(" + d(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", TC, "needs v" + d(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), RC = /* @__PURE__ */ _e(PC, [["__scopeId", "data-v-8b626725"]]), MC = { class: "validation-content" }, DC = {
  key: 0,
  class: "compatible-message"
}, LC = { class: "conflicts-list" }, NC = {
  key: 2,
  class: "warnings-section"
}, UC = /* @__PURE__ */ ye({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = D(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), P(kt, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: g(() => [
        t("div", MC, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", DC, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + d(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(B, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", LC, [
              (n(!0), i(B, null, he(e.validation.node_conflicts, (u) => (n(), P(RC, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : h("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", NC, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
              (n(!0), i(B, null, he(e.validation.warnings, (u, m) => (n(), i("li", { key: m }, d(u), 1))), 128))
            ])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: g(() => [...c[9] || (c[9] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
        S(Ne, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: g(() => [...c[10] || (c[10] = [
            b(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        S(Ne, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: g(() => [
            b(d(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), AC = /* @__PURE__ */ _e(UC, [["__scopeId", "data-v-fefd26ed"]]), OC = { key: 0 }, zC = /* @__PURE__ */ ye({
  __name: "RemotesSection",
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
      getRemotes: a,
      addRemote: l,
      removeRemote: r,
      updateRemoteUrl: c,
      fetchRemote: u,
      getRemoteSyncStatus: m,
      getPullPreview: f,
      pullFromRemote: v,
      getPushPreview: y,
      pushToRemote: k,
      validateMerge: p
    } = ut(), w = _([]), x = _(null), $ = _({}), C = _(!1), N = _(null), T = _(""), I = _(!1), M = _(null), L = _(!1), W = _("add"), E = _({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), R = D(() => {
      if (!T.value.trim()) return w.value;
      const Ce = T.value.toLowerCase();
      return w.value.filter(
        (Le) => Le.name.toLowerCase().includes(Ce) || Le.fetch_url.toLowerCase().includes(Ce) || Le.push_url.toLowerCase().includes(Ce)
      );
    });
    async function te() {
      C.value = !0, N.value = null;
      try {
        const Ce = await a();
        w.value = Ce.remotes, x.value = Ce.current_branch_tracking || null, await Promise.all(
          Ce.remotes.map(async (Le) => {
            const Me = await m(Le.name);
            Me && ($.value[Le.name] = Me);
          })
        );
      } catch (Ce) {
        N.value = Ce instanceof Error ? Ce.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function se() {
      W.value = "add", E.value = { name: "", fetchUrl: "", pushUrl: "" }, L.value = !0;
    }
    function oe(Ce) {
      const Le = w.value.find((Me) => Me.name === Ce);
      Le && (W.value = "edit", E.value = {
        name: Le.name,
        fetchUrl: Le.fetch_url,
        pushUrl: Le.push_url
      }, L.value = !0);
    }
    async function X(Ce) {
      try {
        W.value === "add" ? await l(Ce.name, Ce.fetchUrl) : await c(Ce.name, Ce.fetchUrl, Ce.pushUrl || void 0), L.value = !1, await te();
      } catch (Le) {
        N.value = Le instanceof Error ? Le.message : "Operation failed";
      }
    }
    function V() {
      L.value = !1, E.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Q(Ce) {
      M.value = Ce;
      try {
        await u(Ce);
        const Le = await m(Ce);
        Le && ($.value[Ce] = Le), o("toast", `✓ Fetched from ${Ce}`, "success");
      } catch (Le) {
        o("toast", Le instanceof Error ? Le.message : "Fetch failed", "error");
      } finally {
        M.value = null;
      }
    }
    async function ne(Ce) {
      if (confirm(`Remove remote "${Ce}"?`))
        try {
          await r(Ce), await te();
        } catch (Le) {
          N.value = Le instanceof Error ? Le.message : "Failed to remove remote";
        }
    }
    function re() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const F = _("idle"), ee = D(() => F.value === "pull_preview"), le = D(
      () => F.value === "resolving" || F.value === "validating"
    ), Ae = D(
      () => F.value === "validation_review" || F.value === "executing"
    ), qe = _(!1), je = _(null), xe = _(!1), A = _(null), Y = _(!1), z = _(null), O = _(null), ie = _(/* @__PURE__ */ new Map()), Te = _(null), Ye = _(null), U = D(() => z.value && Fr(z.value) ? z.value : null);
    async function H(Ce) {
      A.value = Ce, F.value = "pull_preview", Y.value = !0, z.value = null, O.value = null;
      try {
        z.value = await f(Ce);
      } catch (Le) {
        O.value = Le instanceof Error ? Le.message : "Failed to load pull preview";
      } finally {
        Y.value = !1;
      }
    }
    function ce() {
      F.value = "idle", z.value = null, O.value = null, A.value = null;
    }
    async function Ee(Ce) {
      if (!A.value) return;
      F.value = "executing", O.value = null;
      const Le = A.value;
      try {
        const Me = await v(Le, Ce);
        if (Me.rolled_back) {
          O.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, F.value = "pull_preview";
          return;
        }
        Ue(), F.value = "idle", o("toast", `✓ Pulled from ${Le}`, "success"), await te();
      } catch (Me) {
        O.value = Me instanceof Error ? Me.message : "Pull failed", F.value = "pull_preview";
      }
    }
    function ke() {
      U.value && (F.value = "resolving", Ye.value = null);
    }
    function be(Ce, Le) {
      ie.value.set(Ce, { name: Ce, resolution: Le });
    }
    function De() {
      F.value = "pull_preview";
    }
    async function we() {
      F.value = "validating", Ye.value = null;
      try {
        const Ce = Array.from(ie.value.values());
        Te.value = await p(A.value, Ce), F.value = "validation_review";
      } catch (Ce) {
        Ye.value = Ce instanceof Error ? Ce.message : "Validation failed", F.value = "resolving";
      }
    }
    async function Pe() {
      F.value = "executing";
      const Ce = A.value;
      try {
        const Le = Array.from(ie.value.values()), Me = await v(Ce, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Le
        });
        if (Me.rolled_back) {
          O.value = `Pull failed and was rolled back: ${Me.error || "Unknown error"}`, F.value = "pull_preview";
          return;
        }
        Ue(), F.value = "idle", o("toast", `✓ Pulled from ${Ce}`, "success"), await te();
      } catch (Le) {
        O.value = Le instanceof Error ? Le.message : "Pull failed", F.value = "validation_review";
      }
    }
    function fe() {
      F.value = "resolving";
    }
    function Be() {
      Ue(), F.value = "idle";
    }
    function Ue() {
      ie.value.clear(), Te.value = null, Ye.value = null, O.value = null, z.value = null, A.value = null;
    }
    async function ve(Ce) {
      A.value = Ce, qe.value = !0, Y.value = !0, je.value = null;
      try {
        je.value = await y(Ce);
      } catch (Le) {
        N.value = Le instanceof Error ? Le.message : "Failed to load push preview";
      } finally {
        Y.value = !1;
      }
    }
    function j() {
      qe.value = !1, je.value = null, A.value = null;
    }
    async function Oe(Ce) {
      if (!A.value) return;
      xe.value = !0;
      const Le = A.value;
      try {
        await k(Le, Ce), j(), o("toast", `✓ Pushed to ${Le}`, "success"), await te();
      } catch (Me) {
        o("toast", Me instanceof Error ? Me.message : "Push failed", "error");
      } finally {
        xe.value = !1;
      }
    }
    function Ie() {
      const Ce = A.value;
      j(), Ce && H(Ce);
    }
    return rt(te), (Ce, Le) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "GIT REMOTES",
            "show-info": !0,
            onInfoClick: Le[0] || (Le[0] = (Me) => I.value = !0)
          }, {
            actions: g(() => [
              L.value ? h("", !0) : (n(), P(pe, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: se
              }, {
                default: g(() => [...Le[3] || (Le[3] = [
                  b(" + Add Remote ", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          L.value ? h("", !0) : (n(), P(Lo, {
            key: 0,
            modelValue: T.value,
            "onUpdate:modelValue": Le[1] || (Le[1] = (Me) => T.value = Me),
            placeholder: "🔍 Search remotes..."
          }, null, 8, ["modelValue"]))
        ]),
        content: g(() => [
          C.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading remotes..."
          })) : N.value ? (n(), P(Us, {
            key: 1,
            message: N.value,
            retry: !0,
            onRetry: te
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            L.value ? (n(), P(S2, {
              key: 0,
              mode: W.value,
              "remote-name": E.value.name,
              "fetch-url": E.value.fetchUrl,
              "push-url": E.value.pushUrl,
              onSubmit: X,
              onCancel: V
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : h("", !0),
            w.value.length && !L.value ? (n(), P(hn, {
              key: 1,
              variant: "compact"
            }, {
              default: g(() => [
                b(" Total: " + d(w.value.length) + " remote" + d(w.value.length !== 1 ? "s" : "") + " ", 1),
                x.value ? (n(), i("span", OC, " • Tracking: " + d(x.value.remote) + "/" + d(x.value.branch), 1)) : h("", !0)
              ]),
              _: 1
            })) : h("", !0),
            R.value.length && !L.value ? (n(), P(pt, {
              key: 2,
              title: "REMOTES",
              count: R.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(R.value, (Me) => (n(), P(f2, {
                  key: Me.name,
                  remote: Me,
                  "sync-status": $.value[Me.name],
                  "fetching-remote": M.value,
                  onFetch: Q,
                  onEdit: oe,
                  onRemove: ne,
                  onPull: H,
                  onPush: ve
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            !R.value.length && !L.value ? (n(), P(fs, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
            }, {
              actions: g(() => [
                S(pe, {
                  variant: "primary",
                  onClick: se
                }, {
                  default: g(() => [...Le[4] || (Le[4] = [
                    b(" Add Your First Remote ", -1)
                  ])]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["message"])) : h("", !0)
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: I.value,
        title: "About Git Remotes",
        onClose: Le[2] || (Le[2] = (Me) => I.value = !1)
      }, {
        content: g(() => [...Le[5] || (Le[5] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            b(" The "),
            t("strong", null, '"origin"'),
            b(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: g(() => [
          S(pe, {
            variant: "link",
            onClick: re
          }, {
            default: g(() => [...Le[6] || (Le[6] = [
              b(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      S(v$, {
        show: ee.value,
        "remote-name": A.value || "",
        preview: z.value,
        loading: Y.value,
        pulling: F.value === "executing",
        error: O.value,
        "conflict-resolutions": ie.value,
        onClose: ce,
        onPull: Ee,
        onOpenConflictResolution: ke
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      S(z$, {
        show: qe.value,
        "remote-name": A.value || "",
        preview: je.value,
        loading: Y.value,
        pushing: xe.value,
        onClose: j,
        onPush: Oe,
        onPullFirst: Ie
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing"]),
      le.value && U.value ? (n(), P(gC, {
        key: 0,
        "workflow-conflicts": U.value.workflow_conflicts,
        resolutions: ie.value,
        "operation-type": "pull",
        validating: F.value === "validating",
        error: Ye.value,
        onClose: De,
        onResolve: be,
        onApply: we
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : h("", !0),
      Ae.value && Te.value ? (n(), P(AC, {
        key: 1,
        validation: Te.value,
        "operation-type": "pull",
        executing: F.value === "executing",
        onProceed: Pe,
        onGoBack: fe,
        onCancel: Be
      }, null, 8, ["validation", "executing"])) : h("", !0)
    ], 64));
  }
}), FC = /* @__PURE__ */ _e(zC, [["__scopeId", "data-v-9ae3b76d"]]), VC = { class: "setting-info" }, BC = { class: "setting-label" }, WC = {
  key: 0,
  class: "required-marker"
}, GC = {
  key: 0,
  class: "setting-description"
}, jC = { class: "setting-control" }, HC = /* @__PURE__ */ ye({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["setting-row", { disabled: e.disabled }])
    }, [
      t("div", VC, [
        t("div", BC, [
          b(d(e.label) + " ", 1),
          e.required ? (n(), i("span", WC, "*")) : h("", !0)
        ]),
        e.description ? (n(), i("div", GC, d(e.description), 1)) : h("", !0)
      ]),
      t("div", jC, [
        at(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), zo = /* @__PURE__ */ _e(HC, [["__scopeId", "data-v-cb5d236c"]]), KC = { class: "toggle" }, qC = ["checked", "disabled"], YC = /* @__PURE__ */ ye({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", KC, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, qC),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), ri = /* @__PURE__ */ _e(YC, [["__scopeId", "data-v-71c0f550"]]), QC = { class: "workspace-settings-content" }, JC = { class: "settings-section" }, XC = { class: "path-setting" }, ZC = { class: "path-value" }, e3 = { class: "path-setting" }, t3 = { class: "path-value" }, s3 = { class: "settings-section" }, o3 = { class: "settings-section" }, n3 = { class: "settings-section" }, a3 = /* @__PURE__ */ ye({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c } = ut(), u = _(!1), m = _(null), f = _(null), v = _(null), y = _(null), k = _(""), p = _(""), w = _(""), x = _(!1), $ = _(!1), C = _(!1), N = _(!0);
    function T(se) {
      return se.join(" ");
    }
    function I(se) {
      return se.trim() ? se.trim().split(/\s+/) : [];
    }
    const M = D(() => {
      if (!y.value) return !1;
      const se = x.value, oe = $.value, X = w.value !== T(y.value.comfyui_extra_args || []);
      return se || oe || X;
    });
    async function L() {
      u.value = !0, m.value = null;
      try {
        v.value = await r(a.workspacePath || void 0), y.value = { ...v.value }, k.value = v.value.civitai_api_key || "", p.value = v.value.huggingface_token || "", w.value = T(v.value.comfyui_extra_args || []), x.value = !1, $.value = !1;
        const se = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        C.value = se !== "false", N.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
      } catch (se) {
        m.value = se instanceof Error ? se.message : "Failed to load settings";
      } finally {
        u.value = !1;
      }
    }
    async function W() {
      var se;
      f.value = null;
      try {
        const oe = {};
        x.value && (oe.civitai_api_key = k.value || null), $.value && (oe.huggingface_token = p.value || null), w.value !== T(((se = y.value) == null ? void 0 : se.comfyui_extra_args) || []) && (oe.comfyui_extra_args = I(w.value)), await c(oe, a.workspacePath || void 0), await L(), f.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          f.value = null;
        }, 3e3);
      } catch (oe) {
        const X = oe instanceof Error ? oe.message : "Failed to save settings";
        f.value = { type: "error", message: X }, l("error", X);
      }
    }
    function E() {
      y.value && (k.value = y.value.civitai_api_key || "", p.value = y.value.huggingface_token || "", w.value = T(y.value.comfyui_extra_args || []), x.value = !1, $.value = !1, f.value = null);
    }
    function R(se) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String(se)), console.log("[ComfyGit] Auto-refresh setting saved:", se);
    }
    function te(se) {
      se ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", se ? "enabled" : "disabled");
    }
    return s({
      saveSettings: W,
      resetSettings: E,
      hasChanges: M,
      loadSettings: L
    }), rt(L), (se, oe) => (n(), i("div", QC, [
      u.value ? (n(), P(Ns, {
        key: 0,
        message: "Loading workspace settings..."
      })) : m.value ? (n(), P(Us, {
        key: 1,
        message: m.value,
        retry: !0,
        onRetry: L
      }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
        S(pt, { title: "WORKSPACE PATHS" }, {
          default: g(() => {
            var X, V;
            return [
              t("div", JC, [
                t("div", XC, [
                  oe[7] || (oe[7] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  oe[8] || (oe[8] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", ZC, d(((X = v.value) == null ? void 0 : X.workspace_path) || "Loading..."), 1)
                ]),
                t("div", e3, [
                  oe[9] || (oe[9] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  oe[10] || (oe[10] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", t3, d(((V = v.value) == null ? void 0 : V.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        S(pt, { title: "API CREDENTIALS" }, {
          default: g(() => [
            t("div", s3, [
              S(zo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: g(() => [
                  S(Zo, {
                    modelValue: k.value,
                    "onUpdate:modelValue": oe[0] || (oe[0] = (X) => k.value = X),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: oe[1] || (oe[1] = (X) => x.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(zo, {
                label: "HuggingFace Token",
                description: "Access token for downloading gated/private models from HuggingFace"
              }, {
                default: g(() => [
                  S(Zo, {
                    modelValue: p.value,
                    "onUpdate:modelValue": oe[2] || (oe[2] = (X) => p.value = X),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: oe[3] || (oe[3] = (X) => $.value = !0)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        S(pt, { title: "COMFYUI SETTINGS" }, {
          default: g(() => [
            t("div", o3, [
              S(zo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: g(() => [
                  S(Zo, {
                    modelValue: w.value,
                    "onUpdate:modelValue": oe[4] || (oe[4] = (X) => w.value = X),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              oe[11] || (oe[11] = t("div", { class: "setting-hint" }, [
                b(" Common flags: "),
                t("code", null, "--lowvram"),
                b(", "),
                t("code", null, "--highvram"),
                b(", "),
                t("code", null, "--listen 0.0.0.0"),
                b(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        S(pt, { title: "UI SETTINGS" }, {
          default: g(() => [
            t("div", n3, [
              S(zo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: g(() => [
                  S(ri, {
                    modelValue: C.value,
                    "onUpdate:modelValue": [
                      oe[5] || (oe[5] = (X) => C.value = X),
                      R
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              S(zo, {
                label: "Show Missing Dependencies Popup",
                description: "Show popup when loading unsaved workflows with missing nodes or models. Saved workflows are tracked in the ComfyGit panel."
              }, {
                default: g(() => [
                  S(ri, {
                    modelValue: N.value,
                    "onUpdate:modelValue": [
                      oe[6] || (oe[6] = (X) => N.value = X),
                      te
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        f.value ? (n(), P(hn, {
          key: 0,
          variant: (f.value.type === "success", "compact")
        }, {
          default: g(() => [
            t("span", {
              style: Qt({ color: f.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, d(f.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : h("", !0)
      ], 64))
    ]));
  }
}), Vr = /* @__PURE__ */ _e(a3, [["__scopeId", "data-v-9c5b427b"]]), l3 = /* @__PURE__ */ ye({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = _(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), P(Wt, null, {
      header: g(() => [
        S(Gt, { title: "WORKSPACE SETTINGS" }, {
          actions: g(() => {
            var r, c;
            return [
              S(pe, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.saveSettings();
                })
              }, {
                default: g(() => [...l[2] || (l[2] = [
                  b(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (n(), P(pe, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var m;
                  return (m = s.value) == null ? void 0 : m.resetSettings();
                })
              }, {
                default: g(() => [...l[3] || (l[3] = [
                  b(" Reset ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ];
          }),
          _: 1
        })
      ]),
      content: g(() => [
        S(Vr, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), i3 = { class: "base-tabs" }, r3 = ["disabled", "onClick"], c3 = {
  key: 0,
  class: "base-tabs__badge"
}, u3 = /* @__PURE__ */ ye({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (n(), i("div", i3, [
      (n(!0), i(B, null, he(e.tabs, (u) => (n(), i("button", {
        key: u.id,
        class: Re([
          "base-tabs__tab",
          {
            active: e.modelValue === u.id,
            disabled: u.disabled
          }
        ]),
        disabled: u.disabled,
        onClick: (m) => l(u.id)
      }, [
        b(d(u.label) + " ", 1),
        u.badge ? (n(), i("span", c3, d(u.badge), 1)) : h("", !0)
      ], 10, r3))), 128))
    ]));
  }
}), Br = /* @__PURE__ */ _e(u3, [["__scopeId", "data-v-ad5e6cad"]]), d3 = { class: "log-viewer-wrapper" }, m3 = ["disabled", "title"], f3 = /* @__PURE__ */ ye({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = _(null), a = _("idle"), l = D(() => s.logs.map((f) => ({
      text: s.rawFormat || !f.timestamp ? f.message : `${f.timestamp} - ${f.name} - ${f.level} - ${f.func}:${f.line} - ${f.message}`,
      level: f.level
    })));
    async function r() {
      var v;
      await Et();
      const f = (v = o.value) == null ? void 0 : v.closest(".panel-layout-content");
      f && (f.scrollTop = f.scrollHeight);
    }
    rt(r), $t(() => s.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const f = l.value.map((v) => v.text).join(`
`);
      try {
        await navigator.clipboard.writeText(f), a.value = "copied", setTimeout(() => {
          a.value = "idle";
        }, 2e3);
      } catch (v) {
        console.error("Failed to copy logs:", v);
      }
    }
    function u(f) {
      (f.ctrlKey || f.metaKey) && f.key === "c" && f.stopPropagation();
    }
    function m(f) {
      f.stopPropagation();
    }
    return (f, v) => (n(), i("div", d3, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: m,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, d(a.value === "copied" ? "Copied!" : "Copy"), 9, m3),
        (n(!0), i(B, null, he(l.value, (y, k) => (n(), i("div", {
          key: k,
          class: Re(`log-line log-level-${y.level.toLowerCase()}`)
        }, d(y.text), 3))), 128))
      ], 544)
    ]));
  }
}), Wr = /* @__PURE__ */ _e(f3, [["__scopeId", "data-v-c0cc6d21"]]), v3 = /* @__PURE__ */ ye({
  __name: "WorkspaceDebugSection",
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ut(), c = _("workspace"), u = _([]), m = _(!1), f = _(null), v = _(!1), y = _(null), k = _(null), p = _(!1), w = D(() => c.value === "workspace" ? y.value : k.value);
    async function x() {
      m.value = !0, f.value = null;
      try {
        c.value === "workspace" ? u.value = await s(void 0, 500) : u.value = await a(void 0, 500);
      } catch (N) {
        f.value = N instanceof Error ? N.message : `Failed to load ${c.value} logs`;
      } finally {
        m.value = !1;
      }
    }
    async function $() {
      try {
        const [N, T] = await Promise.all([
          o(),
          l()
        ]);
        N.exists && (y.value = N.path), T.exists && (k.value = T.path);
      } catch {
      }
    }
    async function C() {
      if (w.value) {
        p.value = !0;
        try {
          await r(w.value);
        } catch (N) {
          console.error("Failed to open log file:", N);
        } finally {
          p.value = !1;
        }
      }
    }
    return $t(c, () => {
      x();
    }), rt(() => {
      x(), $();
    }), (N, T) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "DEBUG (LOGS)",
            "show-info": !0,
            onInfoClick: T[0] || (T[0] = (I) => v.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: C,
                disabled: !w.value || p.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(d(p.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: x,
                disabled: m.value
              }, {
                default: g(() => [
                  b(d(m.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          S(Br, {
            modelValue: c.value,
            "onUpdate:modelValue": T[1] || (T[1] = (I) => c.value = I),
            tabs: [
              { id: "workspace", label: "Workspace" },
              { id: "orchestrator", label: "Orchestrator" }
            ]
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          m.value ? (n(), P(Ns, {
            key: 0,
            message: `Loading ${c.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), P(Us, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            u.value.length === 0 ? (n(), P(fs, {
              key: 0,
              icon: "📝",
              message: `No ${c.value} logs available`
            }, null, 8, ["message"])) : (n(), P(Wr, {
              key: 1,
              logs: u.value,
              "raw-format": c.value === "orchestrator"
            }, null, 8, ["logs", "raw-format"]))
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: v.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (I) => v.value = !1)
      }, {
        content: g(() => [...T[4] || (T[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            b(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            b(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            b(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            b(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: g(() => [
          S(pe, {
            variant: "primary",
            onClick: T[2] || (T[2] = (I) => v.value = !1)
          }, {
            default: g(() => [...T[5] || (T[5] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), p3 = /* @__PURE__ */ ye({
  __name: "DebugEnvSection",
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ut(), r = _([]), c = _(!1), u = _(null), m = _(!1), f = _("production"), v = _(null), y = _(!1);
    async function k() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
        try {
          const x = await o();
          f.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function p() {
      try {
        const x = await a();
        x.exists && (v.value = x.path);
      } catch {
      }
    }
    async function w() {
      if (v.value) {
        y.value = !0;
        try {
          await l(v.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          y.value = !1;
        }
      }
    }
    return rt(() => {
      k(), p();
    }), (x, $) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "DEBUG (ENVIRONMENT LOGS)",
            "show-info": !0,
            onInfoClick: $[0] || ($[0] = (C) => m.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: w,
                disabled: !v.value || y.value,
                title: "Open log file in default editor"
              }, {
                default: g(() => [
                  b(d(y.value ? "Opening..." : "Open Log File"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: k,
                disabled: c.value
              }, {
                default: g(() => [
                  b(d(c.value ? "Loading..." : "Refresh"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            _: 1
          })
        ]),
        content: g(() => [
          c.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), P(Us, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: k
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length === 0 ? (n(), P(fs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), P(Wr, {
              key: 1,
              logs: r.value
            }, null, 8, ["logs"]))
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: m.value,
        title: "About Environment Logs",
        onClose: $[2] || ($[2] = (C) => m.value = !1)
      }, {
        content: g(() => [
          t("p", null, [
            $[3] || ($[3] = b(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, d(f.value), 1),
            $[4] || ($[4] = b(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          $[5] || ($[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            b(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            b(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            b(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            b(" Detailed debugging information ")
          ], -1))
        ]),
        actions: g(() => [
          S(pe, {
            variant: "primary",
            onClick: $[1] || ($[1] = (C) => m.value = !1)
          }, {
            default: g(() => [...$[6] || ($[6] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), g3 = { class: "env-title" }, h3 = {
  key: 0,
  class: "current-badge"
}, y3 = {
  key: 0,
  class: "branch-info"
}, w3 = /* @__PURE__ */ ye({
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
    return (s, o) => (n(), P(Pt, {
      status: e.isCurrent ? "synced" : void 0
    }, io({
      icon: g(() => [
        b(d(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: g(() => [
        t("div", g3, [
          t("span", null, d(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", h3, "CURRENT")) : h("", !0)
        ])
      ]),
      subtitle: g(() => [
        e.currentBranch ? (n(), i("span", y3, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          b(" " + d(e.currentBranch), 1)
        ])) : h("", !0)
      ]),
      actions: g(() => [
        at(s.$slots, "actions", {}, void 0, !0)
      ]),
      _: 2
    }, [
      e.showDetails ? {
        name: "details",
        fn: g(() => [
          S(yt, {
            label: "Workflows:",
            value: String(e.workflowCount)
          }, null, 8, ["value"]),
          S(yt, {
            label: "Nodes:",
            value: String(e.nodeCount)
          }, null, 8, ["value"]),
          S(yt, {
            label: "Models:",
            value: String(e.modelCount)
          }, null, 8, ["value"]),
          e.lastUsed && e.showLastUsed ? (n(), P(yt, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : h("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), _3 = /* @__PURE__ */ _e(w3, [["__scopeId", "data-v-9231917a"]]), k3 = { class: "env-details" }, b3 = { class: "status-row" }, $3 = {
  key: 0,
  class: "detail-row"
}, C3 = { class: "value mono" }, x3 = {
  key: 1,
  class: "detail-row"
}, S3 = { class: "value mono small" }, I3 = { class: "collapsible-section" }, E3 = { class: "value" }, T3 = {
  key: 0,
  class: "collapsible-body"
}, P3 = { class: "item-list" }, R3 = { class: "item-name" }, M3 = { class: "item-name" }, D3 = { class: "item-name" }, L3 = { class: "item-name" }, N3 = {
  key: 0,
  class: "empty-list"
}, U3 = { class: "collapsible-section" }, A3 = { class: "value" }, O3 = {
  key: 0,
  class: "collapsible-body"
}, z3 = { class: "item-list" }, F3 = { class: "item-name" }, V3 = {
  key: 0,
  class: "item-meta"
}, B3 = {
  key: 0,
  class: "empty-list"
}, W3 = { class: "collapsible-section" }, G3 = { class: "value" }, j3 = {
  key: 0,
  class: "missing-count"
}, H3 = {
  key: 0,
  class: "collapsible-body"
}, K3 = { class: "item-list" }, q3 = { class: "model-row" }, Y3 = { class: "item-name" }, Q3 = { class: "model-meta" }, J3 = { class: "item-meta" }, X3 = {
  key: 0,
  class: "item-meta"
}, Z3 = {
  key: 0,
  class: "empty-list"
}, ex = {
  key: 2,
  class: "section-divider"
}, tx = {
  key: 3,
  class: "detail-row"
}, sx = { class: "value" }, ox = { class: "footer-actions" }, nx = /* @__PURE__ */ ye({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(/* @__PURE__ */ new Set());
    function r(m) {
      l.value.has(m) ? l.value.delete(m) : l.value.add(m), l.value = new Set(l.value);
    }
    const c = D(() => {
      var f;
      if (!((f = o.detail) != null && f.workflows)) return !0;
      const m = o.detail.workflows;
      return !m.synced.length && !m.new.length && !m.modified.length && !m.deleted.length;
    });
    function u(m) {
      if (!m) return "Unknown";
      try {
        return new Date(m).toLocaleString(void 0, {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        });
      } catch {
        return m;
      }
    }
    return (m, f) => (n(), P(kt, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: f[5] || (f[5] = (v) => a("close"))
    }, {
      body: g(() => {
        var v, y, k, p, w, x, $, C, N, T, I, M, L, W;
        return [
          t("div", k3, [
            t("div", b3, [
              f[6] || (f[6] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Re(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, d(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", $3, [
              f[7] || (f[7] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", C3, d(e.environment.current_branch), 1)
            ])) : h("", !0),
            e.environment.path ? (n(), i("div", x3, [
              f[8] || (f[8] = t("span", { class: "label" }, "Path:", -1)),
              t("span", S3, d(e.environment.path), 1)
            ])) : h("", !0),
            f[17] || (f[17] = t("div", { class: "section-divider" }, null, -1)),
            t("div", I3, [
              t("div", {
                class: "collapsible-header",
                onClick: f[0] || (f[0] = (E) => r("workflows"))
              }, [
                f[9] || (f[9] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", E3, d(((v = e.detail) == null ? void 0 : v.workflow_count) ?? e.environment.workflow_count), 1),
                (y = e.detail) != null && y.workflows ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (k = e.detail) != null && k.workflows && l.value.has("workflows") ? (n(), i("div", T3, [
                t("div", P3, [
                  (n(!0), i(B, null, he(e.detail.workflows.synced, (E) => (n(), i("div", {
                    key: "synced-" + E,
                    class: "list-item"
                  }, [
                    t("span", R3, d(E), 1),
                    f[10] || (f[10] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, he(e.detail.workflows.new, (E) => (n(), i("div", {
                    key: "new-" + E,
                    class: "list-item"
                  }, [
                    t("span", M3, d(E), 1),
                    f[11] || (f[11] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, he(e.detail.workflows.modified, (E) => (n(), i("div", {
                    key: "mod-" + E,
                    class: "list-item"
                  }, [
                    t("span", D3, d(E), 1),
                    f[12] || (f[12] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, he(e.detail.workflows.deleted, (E) => (n(), i("div", {
                    key: "del-" + E,
                    class: "list-item"
                  }, [
                    t("span", L3, d(E), 1),
                    f[13] || (f[13] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", N3, "No workflows")) : h("", !0)
                ])
              ])) : h("", !0)
            ]),
            t("div", U3, [
              t("div", {
                class: "collapsible-header",
                onClick: f[1] || (f[1] = (E) => r("nodes"))
              }, [
                f[14] || (f[14] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", A3, d(((p = e.detail) == null ? void 0 : p.node_count) ?? e.environment.node_count), 1),
                (w = e.detail) != null && w.nodes ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", O3, [
                t("div", z3, [
                  (n(!0), i(B, null, he(e.detail.nodes, (E) => (n(), i("div", {
                    key: E.name,
                    class: "list-item"
                  }, [
                    t("span", F3, d(E.name), 1),
                    E.version ? (n(), i("span", V3, d(E.version), 1)) : h("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? h("", !0) : (n(), i("div", B3, "No nodes"))
                ])
              ])) : h("", !0)
            ]),
            t("div", W3, [
              t("div", {
                class: "collapsible-header",
                onClick: f[2] || (f[2] = (E) => r("models"))
              }, [
                f[15] || (f[15] = t("span", { class: "label" }, "Models:", -1)),
                t("span", G3, [
                  b(d((($ = e.detail) == null ? void 0 : $.model_count) ?? e.environment.model_count) + " ", 1),
                  (N = (C = e.detail) == null ? void 0 : C.models) != null && N.missing.length ? (n(), i("span", j3, "(" + d(e.detail.models.missing.length) + " missing)", 1)) : h("", !0)
                ]),
                (T = e.detail) != null && T.models ? (n(), i("span", {
                  key: 0,
                  class: Re(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : h("", !0)
              ]),
              (I = e.detail) != null && I.models && l.value.has("models") ? (n(), i("div", H3, [
                t("div", K3, [
                  (n(!0), i(B, null, he(e.detail.models.missing, (E) => (n(), i("div", {
                    key: E.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", q3, [
                      t("span", Y3, d(E.filename), 1),
                      t("span", {
                        class: Re(["criticality-badge", E.criticality])
                      }, d(E.criticality), 3)
                    ]),
                    t("div", Q3, [
                      t("span", J3, d(E.category), 1),
                      E.workflow_names.length ? (n(), i("span", X3, " used by: " + d(E.workflow_names.join(", ")), 1)) : h("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? h("", !0) : (n(), i("div", Z3, "No missing models"))
                ])
              ])) : h("", !0)
            ]),
            (M = e.detail) != null && M.created_at || e.environment.created_at ? (n(), i("div", ex)) : h("", !0),
            (L = e.detail) != null && L.created_at || e.environment.created_at ? (n(), i("div", tx, [
              f[16] || (f[16] = t("span", { class: "label" }, "Created:", -1)),
              t("span", sx, d(u(((W = e.detail) == null ? void 0 : W.created_at) ?? e.environment.created_at)), 1)
            ])) : h("", !0)
          ])
        ];
      }),
      footer: g(() => [
        t("div", ox, [
          e.canDelete ? (n(), P(Ne, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: f[3] || (f[3] = (v) => a("delete", e.environment.name))
          }, {
            default: g(() => [...f[18] || (f[18] = [
              b(" Delete ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          f[20] || (f[20] = t("div", { class: "footer-spacer" }, null, -1)),
          S(Ne, {
            variant: "secondary",
            size: "sm",
            onClick: f[4] || (f[4] = (v) => a("close"))
          }, {
            default: g(() => [...f[19] || (f[19] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), ax = /* @__PURE__ */ _e(nx, [["__scopeId", "data-v-92e68b76"]]), Gr = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], jr = "3.12", pl = [
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
], Hr = "auto", lx = { class: "progress-bar" }, ix = /* @__PURE__ */ ye({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = D(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", lx, [
      t("div", {
        class: Re(["progress-fill", e.variant]),
        style: Qt({ width: o.value })
      }, null, 6)
    ]));
  }
}), ra = /* @__PURE__ */ _e(ix, [["__scopeId", "data-v-1beb0512"]]), rx = { class: "task-progress" }, cx = { class: "progress-info" }, ux = { class: "progress-percentage" }, dx = { class: "progress-message" }, mx = {
  key: 0,
  class: "progress-steps"
}, fx = { class: "step-icon" }, vx = { class: "step-label" }, px = /* @__PURE__ */ ye({
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
    const s = e;
    function o(l) {
      const r = s.steps.find((c) => c.id === l);
      return r ? s.progress >= r.progressThreshold ? "completed" : s.currentPhase === l ? "active" : "pending" : "pending";
    }
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", rx, [
      S(ra, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", cx, [
        t("span", ux, d(e.progress) + "%", 1),
        t("span", dx, d(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", mx, [
        (n(!0), i(B, null, he(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Re(["step", o(c.id)])
        }, [
          t("span", fx, d(a(c.id)), 1),
          t("span", vx, d(c.label), 1)
        ], 2))), 128))
      ])) : h("", !0)
    ]));
  }
}), Hn = /* @__PURE__ */ _e(px, [["__scopeId", "data-v-9d1de66c"]]), gx = {
  key: 0,
  class: "create-env-form"
}, hx = { class: "form-field" }, yx = { class: "input-wrapper" }, wx = {
  key: 0,
  class: "validating-indicator"
}, _x = {
  key: 1,
  class: "valid-indicator"
}, kx = {
  key: 0,
  class: "field-error"
}, bx = { class: "form-field" }, $x = ["value"], Cx = { class: "form-field" }, xx = ["disabled"], Sx = ["value"], Ix = { class: "form-field" }, Ex = ["value"], Tx = { class: "form-field form-field--checkbox" }, Px = { class: "form-checkbox" }, Rx = {
  key: 1,
  class: "create-env-progress"
}, Mx = { class: "creating-intro" }, Dx = {
  key: 0,
  class: "progress-warning"
}, Lx = {
  key: 1,
  class: "create-error"
}, Nx = { class: "error-message" }, Ux = {
  key: 1,
  class: "footer-status"
}, Ax = 10, Ox = /* @__PURE__ */ ye({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ut(), u = _(""), m = _(jr), f = _("latest"), v = _(Hr), y = _(!1), k = _(null), p = _(!1), w = _(!1);
    let x = null, $ = 0;
    const C = D(() => !!u.value.trim() && w.value && !k.value && !p.value && !I.value), N = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), T = _(!1), I = _(!1), M = _({
      progress: 0,
      message: ""
    });
    let L = null, W = 0;
    const E = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], R = _(null);
    $t(u, (F) => {
      w.value = !1, x && (clearTimeout(x), x = null);
      const ee = F.trim();
      if (!ee) {
        k.value = null, p.value = !1;
        return;
      }
      p.value = !0, x = setTimeout(() => {
        te(ee);
      }, 400);
    });
    async function te(F, ee = !1) {
      const le = F.trim();
      if (!le)
        return w.value = !1, p.value = !1, k.value = ee ? "Environment name is required" : null, !1;
      const Ae = ++$;
      p.value = !0;
      try {
        const qe = await c(le);
        return Ae !== $ ? !1 : (k.value = qe.valid ? null : qe.error || "Invalid name", w.value = !!qe.valid, !!qe.valid);
      } catch {
        return Ae !== $ || (k.value = "Failed to validate name", w.value = !1), !1;
      } finally {
        Ae === $ && (p.value = !1);
      }
    }
    async function se() {
      x && (clearTimeout(x), x = null), await te(u.value, !0);
    }
    function oe() {
      I.value || o("close");
    }
    async function X() {
      const F = u.value.trim();
      if (!F) {
        k.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await te(F, !0)) {
        I.value = !0, M.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const le = {
            name: F,
            python_version: m.value,
            comfyui_version: f.value,
            torch_backend: v.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, Ae = await l(le);
          Ae.status === "started" ? V() : Ae.status === "error" && (M.value = {
            progress: 0,
            message: Ae.message || "Failed to start creation",
            error: Ae.message
          });
        } catch (le) {
          M.value = {
            progress: 0,
            message: le instanceof Error ? le.message : "Unknown error",
            error: le instanceof Error ? le.message : "Unknown error"
          };
        }
      }
    }
    function V() {
      L || (W = 0, L = window.setInterval(async () => {
        try {
          const F = await r();
          W = 0, M.value = {
            progress: F.progress ?? 0,
            message: F.message,
            phase: F.phase,
            error: F.error
          }, F.state === "complete" ? (Q(), o("created", F.environment_name || u.value.trim(), y.value)) : F.state === "error" ? (Q(), M.value.error = F.error || F.message) : F.state === "idle" && I.value && (Q(), M.value.error = "Creation was interrupted. Please try again.");
        } catch {
          W++, W >= Ax && (Q(), M.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function Q() {
      L && (clearInterval(L), L = null);
    }
    function ne() {
      I.value = !1, M.value = { progress: 0, message: "" }, o("close");
    }
    async function re() {
      T.value = !0;
      try {
        N.value = await a();
      } catch (F) {
        console.error("Failed to load ComfyUI releases:", F);
      } finally {
        T.value = !1;
      }
    }
    return rt(async () => {
      var F;
      await Et(), (F = R.value) == null || F.focus(), re();
    }), Ys(() => {
      Q(), x && (clearTimeout(x), x = null);
    }), (F, ee) => (n(), P(kt, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !I.value,
      onClose: oe
    }, {
      body: g(() => [
        I.value ? (n(), i("div", Rx, [
          t("p", Mx, [
            ee[12] || (ee[12] = b(" Creating environment ", -1)),
            t("strong", null, d(u.value), 1),
            ee[13] || (ee[13] = b("... ", -1))
          ]),
          S(Hn, {
            progress: M.value.progress,
            message: M.value.message,
            "current-phase": M.value.phase,
            variant: M.value.error ? "error" : "default",
            "show-steps": !0,
            steps: E
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          M.value.error ? h("", !0) : (n(), i("p", Dx, " This may take several minutes. Please wait... ")),
          M.value.error ? (n(), i("div", Lx, [
            t("p", Nx, d(M.value.error), 1)
          ])) : h("", !0)
        ])) : (n(), i("div", gx, [
          t("div", hx, [
            ee[6] || (ee[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", yx, [
              lt(t("input", {
                ref_key: "nameInput",
                ref: R,
                "onUpdate:modelValue": ee[0] || (ee[0] = (le) => u.value = le),
                type: "text",
                class: Re(["form-input", { error: !!k.value, valid: w.value }]),
                placeholder: "my-environment",
                onKeyup: ss(X, ["enter"]),
                onBlur: se
              }, null, 34), [
                [Yt, u.value]
              ]),
              p.value ? (n(), i("span", wx, "...")) : w.value ? (n(), i("span", _x, "✓")) : h("", !0)
            ]),
            k.value ? (n(), i("div", kx, d(k.value), 1)) : h("", !0),
            ee[7] || (ee[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", bx, [
            ee[8] || (ee[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            lt(t("select", {
              "onUpdate:modelValue": ee[1] || (ee[1] = (le) => m.value = le),
              class: "form-select"
            }, [
              (n(!0), i(B, null, he(Xe(Gr), (le) => (n(), i("option", {
                key: le,
                value: le
              }, d(le), 9, $x))), 128))
            ], 512), [
              [$s, m.value]
            ])
          ]),
          t("div", Cx, [
            ee[9] || (ee[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            lt(t("select", {
              "onUpdate:modelValue": ee[2] || (ee[2] = (le) => f.value = le),
              class: "form-select",
              disabled: T.value
            }, [
              (n(!0), i(B, null, he(N.value, (le) => (n(), i("option", {
                key: le.tag_name,
                value: le.tag_name
              }, d(le.name), 9, Sx))), 128))
            ], 8, xx), [
              [$s, f.value]
            ])
          ]),
          t("div", Ix, [
            ee[10] || (ee[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            lt(t("select", {
              "onUpdate:modelValue": ee[3] || (ee[3] = (le) => v.value = le),
              class: "form-select"
            }, [
              (n(!0), i(B, null, he(Xe(pl), (le) => (n(), i("option", {
                key: le,
                value: le
              }, d(le) + d(le === "auto" ? " (detect GPU)" : ""), 9, Ex))), 128))
            ], 512), [
              [$s, v.value]
            ])
          ]),
          t("div", Tx, [
            t("label", Px, [
              lt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": ee[4] || (ee[4] = (le) => y.value = le)
              }, null, 512), [
                [dn, y.value]
              ]),
              ee[11] || (ee[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: g(() => [
        I.value ? (n(), i(B, { key: 1 }, [
          M.value.error ? (n(), P(Ne, {
            key: 0,
            variant: "secondary",
            onClick: ne
          }, {
            default: g(() => [...ee[16] || (ee[16] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", Ux, " Creating environment... "))
        ], 64)) : (n(), i(B, { key: 0 }, [
          S(Ne, {
            variant: "primary",
            disabled: !C.value,
            onClick: X
          }, {
            default: g(() => [...ee[14] || (ee[14] = [
              b(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Ne, {
            variant: "secondary",
            onClick: ee[5] || (ee[5] = (le) => o("close"))
          }, {
            default: g(() => [...ee[15] || (ee[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), zx = /* @__PURE__ */ _e(Ox, [["__scopeId", "data-v-3faa3d9b"]]), Fx = /* @__PURE__ */ ye({
  __name: "EnvironmentsSection",
  emits: ["switch", "created", "delete"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ut(), c = _([]), u = _(!1), m = _(null), f = _(""), v = _(!1), y = _(!1), k = _(null), p = _(null), w = D(() => {
      if (!f.value.trim()) return c.value;
      const I = f.value.toLowerCase();
      return c.value.filter(
        (M) => {
          var L;
          return M.name.toLowerCase().includes(I) || ((L = M.current_branch) == null ? void 0 : L.toLowerCase().includes(I));
        }
      );
    });
    function x(I, M) {
      y.value = !1, a("created", I, M);
    }
    function $() {
      y.value = !0;
    }
    async function C(I) {
      k.value = I, p.value = null;
      const M = await r(I.name);
      M && (p.value = M);
    }
    function N(I) {
      k.value = null, p.value = null, a("delete", I);
    }
    async function T() {
      u.value = !0, m.value = null;
      try {
        c.value = await l();
      } catch (I) {
        m.value = I instanceof Error ? I.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return rt(T), s({
      loadEnvironments: T,
      openCreateModal: $
    }), (I, M) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (L) => v.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "primary",
                size: "sm",
                onClick: $
              }, {
                default: g(() => [...M[6] || (M[6] = [
                  b(" Create ", -1)
                ])]),
                _: 1
              }),
              S(pe, {
                variant: "secondary",
                size: "sm",
                onClick: T
              }, {
                default: g(() => [...M[7] || (M[7] = [
                  b(" Refresh ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          S(Lo, {
            modelValue: f.value,
            "onUpdate:modelValue": M[1] || (M[1] = (L) => f.value = L),
            placeholder: "🔍 Search environments..."
          }, null, 8, ["modelValue"])
        ]),
        content: g(() => [
          u.value ? (n(), P(Ns, {
            key: 0,
            message: "Loading environments..."
          })) : m.value ? (n(), P(Us, {
            key: 1,
            message: m.value,
            retry: !0,
            onRetry: T
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            w.value.length ? (n(), P(pt, {
              key: 0,
              title: "ENVIRONMENTS",
              count: w.value.length
            }, {
              default: g(() => [
                (n(!0), i(B, null, he(w.value, (L) => (n(), P(_3, {
                  key: L.name,
                  "environment-name": L.name,
                  "is-current": L.is_current,
                  "current-branch": L.current_branch,
                  "show-last-used": !1
                }, {
                  actions: g(() => [
                    L.is_current ? h("", !0) : (n(), P(pe, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (W) => I.$emit("switch", L.name)
                    }, {
                      default: g(() => [...M[8] || (M[8] = [
                        b(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (W) => C(L)
                    }, {
                      default: g(() => [...M[9] || (M[9] = [
                        b(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : h("", !0),
            w.value.length ? h("", !0) : (n(), P(fs, {
              key: 1,
              icon: "🌍",
              message: f.value ? `No environments match '${f.value}'` : "No environments found. Create one to get started!"
            }, io({ _: 2 }, [
              f.value ? void 0 : {
                name: "actions",
                fn: g(() => [
                  S(pe, {
                    variant: "primary",
                    onClick: $
                  }, {
                    default: g(() => [...M[10] || (M[10] = [
                      b(" Create Environment ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                key: "0"
              }
            ]), 1032, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      S(vs, {
        show: v.value,
        title: "About Environments",
        onClose: M[3] || (M[3] = (L) => v.value = !1)
      }, {
        content: g(() => [...M[11] || (M[11] = [
          t("p", null, [
            t("strong", null, "Environments"),
            b(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Use cases:")
          ], -1),
          t("ul", { style: { "margin-top": "var(--cg-space-1)", "padding-left": "var(--cg-space-4)" } }, [
            t("li", null, "Separate production and development workflows"),
            t("li", null, "Test different node configurations"),
            t("li", null, "Experiment with new models safely"),
            t("li", null, "Maintain multiple project versions")
          ], -1)
        ])]),
        actions: g(() => [
          S(pe, {
            variant: "secondary",
            onClick: M[2] || (M[2] = (L) => v.value = !1)
          }, {
            default: g(() => [...M[12] || (M[12] = [
              b(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      k.value ? (n(), P(ax, {
        key: 0,
        environment: k.value,
        detail: p.value,
        "can-delete": c.value.length > 1,
        onClose: M[4] || (M[4] = (L) => {
          k.value = null, p.value = null;
        }),
        onDelete: N
      }, null, 8, ["environment", "detail", "can-delete"])) : h("", !0),
      y.value ? (n(), P(zx, {
        key: 1,
        onClose: M[5] || (M[5] = (L) => y.value = !1),
        onCreated: x
      })) : h("", !0)
    ], 64));
  }
}), Vx = /* @__PURE__ */ _e(Fx, [["__scopeId", "data-v-0c0fbd88"]]), Bx = { class: "file-path" }, Wx = { class: "file-path-text" }, Gx = ["title"], jx = /* @__PURE__ */ ye({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = _(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", Bx, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", Wx, d(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, d(o.value ? "✓" : "📋"), 9, Gx)) : h("", !0)
    ]));
  }
}), Hx = /* @__PURE__ */ _e(jx, [["__scopeId", "data-v-f0982173"]]), Kx = { class: "base-textarea-wrapper" }, qx = ["value", "rows", "placeholder", "disabled", "maxlength"], Yx = {
  key: 0,
  class: "base-textarea-count"
}, Qx = /* @__PURE__ */ ye({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (n(), i("div", Kx, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ss(wt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ss(wt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ss(l, ["enter"])
        ]
      }, null, 40, qx),
      e.showCharCount && e.maxLength ? (n(), i("div", Yx, d(e.modelValue.length) + " / " + d(e.maxLength), 1)) : h("", !0)
    ]));
  }
}), Wa = /* @__PURE__ */ _e(Qx, [["__scopeId", "data-v-c6d16c93"]]), Jx = ["checked", "disabled"], Xx = { class: "base-checkbox-box" }, Zx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, e5 = {
  key: 0,
  class: "base-checkbox-label"
}, t5 = /* @__PURE__ */ ye({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Re(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, Jx),
      t("span", Xx, [
        e.modelValue ? (n(), i("svg", Zx, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : h("", !0)
      ]),
      s.$slots.default ? (n(), i("span", e5, [
        at(s.$slots, "default", {}, void 0)
      ])) : h("", !0)
    ], 2));
  }
}), Kn = /* @__PURE__ */ _e(t5, [["__scopeId", "data-v-bf17c831"]]), s5 = { class: "export-blocked" }, o5 = { class: "error-header" }, n5 = { class: "error-summary" }, a5 = { class: "error-description" }, l5 = { class: "issues-list" }, i5 = { class: "issue-message" }, r5 = {
  key: 0,
  class: "issue-details"
}, c5 = ["onClick"], u5 = { class: "issue-fix" }, d5 = {
  key: 0,
  class: "commit-section"
}, m5 = {
  key: 0,
  class: "issues-warning"
}, f5 = {
  key: 1,
  class: "commit-error"
}, v5 = /* @__PURE__ */ ye({
  __name: "ExportBlockedModal",
  props: {
    issues: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = _(""), c = _(!1), u = _(!1), m = _(""), f = qs({}), v = D(
      () => o.issues.some(($) => $.type === "uncommitted_workflows" || $.type === "uncommitted_git_changes")
    ), y = D(
      () => o.issues.some(($) => $.type === "unresolved_issues")
    ), k = D(
      () => y.value && !u.value
    ), p = D(
      () => v.value && r.value.trim() !== "" && !c.value && !k.value
    );
    function w($) {
      const C = o.issues[$];
      return f[$] || C.details.length <= 3 ? C.details : C.details.slice(0, 3);
    }
    async function x() {
      var $;
      if (p.value) {
        c.value = !0, m.value = "";
        try {
          const C = await l(r.value.trim(), u.value);
          if (C.status === "success")
            a("committed");
          else if (C.status === "blocked") {
            const N = (($ = C.issues) == null ? void 0 : $.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            m.value = `Commit blocked: ${N}`;
          } else
            m.value = C.message || "Commit failed";
        } catch (C) {
          m.value = C instanceof Error ? C.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return ($, C) => (n(), P(kt, {
      title: v.value ? "Commit & Export" : "Cannot Export",
      size: "md",
      onClose: C[4] || (C[4] = (N) => $.$emit("close"))
    }, {
      body: g(() => [
        t("div", s5, [
          t("div", o5, [
            C[6] || (C[6] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", n5, [
              C[5] || (C[5] = t("h3", { class: "error-title" }, "Export blocked", -1)),
              t("p", a5, d(v.value ? "Commit your changes to proceed with export." : "The following issues must be resolved before exporting."), 1)
            ])
          ]),
          t("div", l5, [
            (n(!0), i(B, null, he(e.issues, (N, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              t("div", i5, d(N.message), 1),
              N.details.length ? (n(), i("div", r5, [
                (n(!0), i(B, null, he(w(T), (I, M) => (n(), i("div", {
                  key: M,
                  class: "issue-detail"
                }, d(I), 1))), 128)),
                N.details.length > 3 && !f[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (I) => f[T] = !0
                }, " +" + d(N.details.length - 3) + " more ", 9, c5)) : h("", !0)
              ])) : h("", !0),
              t("div", u5, [
                N.type === "uncommitted_workflows" ? (n(), i(B, { key: 0 }, [
                  b(" Commit your workflow changes before exporting. ")
                ], 64)) : N.type === "uncommitted_git_changes" ? (n(), i(B, { key: 1 }, [
                  b(" Commit your changes before exporting. ")
                ], 64)) : N.type === "unresolved_issues" ? (n(), i(B, { key: 2 }, [
                  b(" Resolve all workflow issues before exporting. ")
                ], 64)) : h("", !0)
              ])
            ]))), 128))
          ]),
          v.value ? (n(), i("div", d5, [
            y.value ? (n(), i("div", m5, [
              C[8] || (C[8] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              S(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": C[0] || (C[0] = (N) => u.value = N),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...C[7] || (C[7] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            S(Wa, {
              modelValue: r.value,
              "onUpdate:modelValue": C[1] || (C[1] = (N) => r.value = N),
              placeholder: "Describe your changes...",
              disabled: c.value || k.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            m.value ? (n(), i("div", f5, d(m.value), 1)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        v.value ? (n(), i(B, { key: 0 }, [
          S(Ne, {
            variant: "secondary",
            onClick: C[2] || (C[2] = (N) => $.$emit("close"))
          }, {
            default: g(() => [...C[9] || (C[9] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(Ne, {
            variant: u.value ? "danger" : "primary",
            disabled: !p.value,
            loading: c.value,
            onClick: x
          }, {
            default: g(() => [
              b(d(c.value ? "Committing..." : u.value ? "Force Commit & Export" : "Commit & Export"), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), P(Ne, {
          key: 1,
          variant: "primary",
          onClick: C[3] || (C[3] = (N) => $.$emit("close"))
        }, {
          default: g(() => [...C[10] || (C[10] = [
            b(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Kr = /* @__PURE__ */ _e(v5, [["__scopeId", "data-v-bd79ba24"]]), p5 = { class: "export-warnings" }, g5 = {
  key: 0,
  class: "success-header"
}, h5 = { class: "warning-header" }, y5 = { class: "warning-summary" }, w5 = { class: "warning-title" }, _5 = { class: "models-section" }, k5 = { class: "models-list" }, b5 = { class: "model-info" }, $5 = { class: "model-filename" }, C5 = { class: "model-workflows" }, x5 = ["onClick"], S5 = /* @__PURE__ */ ye({
  __name: "ExportWarningsModal",
  props: {
    models: {}
  },
  emits: ["confirm", "cancel", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(null), c = D(() => l.value || o.models.length <= 3 ? o.models : o.models.slice(0, 3));
    function u() {
      r.value = null, a("revalidate");
    }
    return (m, f) => (n(), i(B, null, [
      S(kt, {
        title: "Export Warnings",
        size: "md",
        onClose: f[3] || (f[3] = (v) => m.$emit("cancel"))
      }, {
        body: g(() => [
          t("div", p5, [
            e.models.length === 0 ? (n(), i("div", g5, [...f[4] || (f[4] = [
              t("span", { class: "success-icon" }, [
                t("svg", {
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 1 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" })
                ])
              ], -1),
              t("div", { class: "success-summary" }, [
                t("h3", { class: "success-title" }, "All models have source URLs"),
                t("p", { class: "success-description" }, " Your environment is ready to export. Recipients will be able to download all models automatically. ")
              ], -1)
            ])])) : (n(), i(B, { key: 1 }, [
              t("div", h5, [
                f[6] || (f[6] = t("span", { class: "warning-icon" }, [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z" }),
                    t("path", { d: "M8 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 4zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" })
                  ])
                ], -1)),
                t("div", y5, [
                  t("h3", w5, d(e.models.length) + " model" + d(e.models.length !== 1 ? "s" : "") + " missing source URLs ", 1),
                  f[5] || (f[5] = t("p", { class: "warning-description" }, ` Recipients won't be able to download these models automatically. Click "Add Source" to fix, or export anyway. `, -1))
                ])
              ]),
              t("div", _5, [
                t("div", k5, [
                  (n(!0), i(B, null, he(c.value, (v) => (n(), i("div", {
                    key: v.hash,
                    class: "model-item"
                  }, [
                    t("div", b5, [
                      t("div", $5, d(v.filename), 1),
                      t("div", C5, " Used by: " + d(v.workflows.join(", ")), 1)
                    ]),
                    t("button", {
                      class: "add-source-btn",
                      onClick: (y) => r.value = v.hash
                    }, " Add Source ", 8, x5)
                  ]))), 128))
                ]),
                e.models.length > 3 && !l.value ? (n(), i("button", {
                  key: 0,
                  class: "show-more-btn",
                  onClick: f[0] || (f[0] = (v) => l.value = !0)
                }, " Show " + d(e.models.length - 3) + " more model" + d(e.models.length - 3 !== 1 ? "s" : "") + "... ", 1)) : h("", !0)
              ])
            ], 64))
          ])
        ]),
        footer: g(() => [
          S(Ne, {
            variant: "secondary",
            onClick: f[1] || (f[1] = (v) => m.$emit("cancel"))
          }, {
            default: g(() => [...f[7] || (f[7] = [
              b(" Cancel Export ", -1)
            ])]),
            _: 1
          }),
          S(Ne, {
            variant: "primary",
            onClick: f[2] || (f[2] = (v) => m.$emit("confirm"))
          }, {
            default: g(() => [
              b(d(e.models.length === 0 ? "Export" : "Export Anyway"), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      r.value ? (n(), P(fl, {
        key: 0,
        identifier: r.value,
        onClose: u
      }, null, 8, ["identifier"])) : h("", !0)
    ], 64));
  }
}), qr = /* @__PURE__ */ _e(S5, [["__scopeId", "data-v-b698d882"]]), I5 = { class: "export-card" }, E5 = { class: "export-path-row" }, T5 = { class: "export-actions" }, P5 = {
  key: 1,
  class: "export-warning"
}, R5 = /* @__PURE__ */ ye({
  __name: "ExportSection",
  setup(e) {
    const { validateExport: s, exportEnvWithForce: o } = ut(), a = _(""), l = _(!1), r = _(!1), c = _(!1), u = _(null), m = _(!1), f = _(null), v = _(!1), y = _(!1), k = D(() => l.value ? "Validating..." : r.value ? "Exporting..." : "Export Environment");
    async function p() {
      l.value = !0, u.value = null;
      try {
        const I = await s();
        f.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? y.value = !0 : await C() : v.value = !0;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function w() {
      y.value = !1, await C();
    }
    async function x() {
      v.value = !1, l.value = !0;
      try {
        const I = await s();
        f.value = I, I.can_export ? I.warnings.models_without_sources.length > 0 ? y.value = !0 : await C() : v.value = !0;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Re-validation failed"
        };
      } finally {
        l.value = !1;
      }
    }
    async function $() {
      try {
        const I = await s();
        f.value = I;
      } catch (I) {
        console.error("Re-validation failed:", I);
      }
    }
    async function C() {
      r.value = !0;
      try {
        const I = await o(a.value || void 0);
        u.value = I;
      } catch (I) {
        u.value = {
          status: "error",
          message: I instanceof Error ? I.message : "Export failed"
        };
      } finally {
        r.value = !1;
      }
    }
    async function N() {
      var I;
      if ((I = u.value) != null && I.path)
        try {
          await navigator.clipboard.writeText(u.value.path);
        } catch (M) {
          console.error("Failed to copy path:", M);
        }
    }
    async function T() {
      var I;
      if ((I = u.value) != null && I.path) {
        c.value = !0;
        try {
          const M = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(u.value.path)}`);
          if (!M.ok)
            throw new Error(`Download failed: ${M.statusText}`);
          const L = await M.blob(), W = URL.createObjectURL(L), E = u.value.path.split("/").pop() || "environment-export.tar.gz", R = document.createElement("a");
          R.href = W, R.download = E, document.body.appendChild(R), R.click(), document.body.removeChild(R), URL.revokeObjectURL(W);
        } catch (M) {
          console.error("Failed to download:", M), alert(`Download failed: ${M instanceof Error ? M.message : "Unknown error"}`);
        } finally {
          c.value = !1;
        }
      }
    }
    return (I, M) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "EXPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: M[0] || (M[0] = (L) => m.value = !0)
          })
        ]),
        content: g(() => [
          S(pt, { title: "EXPORT OPTIONS" }, {
            default: g(() => [
              t("div", I5, [
                M[7] || (M[7] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", E5, [
                  S(Zo, {
                    modelValue: a.value,
                    "onUpdate:modelValue": M[1] || (M[1] = (L) => a.value = L),
                    placeholder: "Leave empty for default, or enter path like /mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ]),
                t("div", T5, [
                  S(pe, {
                    variant: "primary",
                    size: "md",
                    loading: l.value || r.value,
                    disabled: l.value || r.value,
                    onClick: p
                  }, {
                    default: g(() => [
                      M[6] || (M[6] = t("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M8 4L3 9h3v6h4V9h3L8 4z" }),
                        t("path", { d: "M14 2H2v2h12V2z" })
                      ], -1)),
                      b(" " + d(k.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"])
                ])
              ])
            ]),
            _: 1
          }),
          u.value ? (n(), P(pt, {
            key: 0,
            title: "LAST EXPORT"
          }, {
            default: g(() => [
              S(Pt, {
                status: u.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: g(() => [
                  b(d(u.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(d(u.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(d(u.value.status === "success" ? "Your environment has been exported" : u.value.message), 1)
                ]),
                _: 2
              }, [
                u.value.status === "success" ? {
                  name: "details",
                  fn: g(() => [
                    S(yt, { label: "Saved to:" }, {
                      default: g(() => [
                        S(Hx, {
                          path: u.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    u.value.models_without_sources !== void 0 ? (n(), P(yt, {
                      key: 0,
                      label: "Models without sources:",
                      value: u.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : h("", !0),
                    u.value.models_without_sources && u.value.models_without_sources > 0 ? (n(), i("div", P5, [...M[8] || (M[8] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
                    ])])) : h("", !0)
                  ]),
                  key: "0"
                } : void 0,
                u.value.status === "success" ? {
                  name: "actions",
                  fn: g(() => [
                    S(pe, {
                      variant: "primary",
                      size: "sm",
                      loading: c.value,
                      onClick: T
                    }, {
                      default: g(() => [...M[9] || (M[9] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    S(pe, {
                      variant: "secondary",
                      size: "sm",
                      onClick: N
                    }, {
                      default: g(() => [...M[10] || (M[10] = [
                        b(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    S(pe, {
                      variant: "ghost",
                      size: "sm",
                      onClick: M[2] || (M[2] = (L) => u.value = null)
                    }, {
                      default: g(() => [...M[11] || (M[11] = [
                        b(" Dismiss ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        _: 1
      }),
      S(vs, {
        show: m.value,
        title: "What Gets Exported",
        onClose: M[3] || (M[3] = (L) => m.value = !1)
      }, {
        content: g(() => [...M[12] || (M[12] = [
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  b(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  b(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  b(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  b(" — Environment settings and metadata")
                ])
              ])
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "Use Cases:"),
              t("ul", null, [
                t("li", null, "Share environments with collaborators"),
                t("li", null, "Back up your setup for safekeeping"),
                t("li", null, "Import into other ComfyGit workspaces")
              ])
            ]),
            t("p", { class: "info-note" }, [
              t("strong", null, "Note:"),
              b(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      v.value && f.value ? (n(), P(Kr, {
        key: 0,
        issues: f.value.blocking_issues,
        onClose: M[4] || (M[4] = (L) => v.value = !1),
        onCommitted: x
      }, null, 8, ["issues"])) : h("", !0),
      y.value && f.value ? (n(), P(qr, {
        key: 1,
        models: f.value.warnings.models_without_sources,
        onConfirm: w,
        onCancel: M[5] || (M[5] = (L) => y.value = !1),
        onRevalidate: $
      }, null, 8, ["models"])) : h("", !0)
    ], 64));
  }
}), M5 = /* @__PURE__ */ _e(R5, [["__scopeId", "data-v-ddeffd68"]]), D5 = { class: "file-input-wrapper" }, L5 = ["accept", "multiple", "disabled"], N5 = /* @__PURE__ */ ye({
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
  setup(e, { expose: s, emit: o }) {
    const a = o, l = _(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const m = u.target;
      m.files && m.files.length > 0 && (a("change", m.files), m.value = "");
    }
    return s({
      triggerInput: r
    }), (u, m) => (n(), i("div", D5, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, L5),
      S(pe, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: g(() => [
          at(u.$slots, "default", {}, () => [
            m[0] || (m[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            b(" " + d(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), U5 = /* @__PURE__ */ _e(N5, [["__scopeId", "data-v-cd192091"]]), A5 = {
  key: 0,
  class: "drop-zone-empty"
}, O5 = { class: "drop-zone-text" }, z5 = { class: "drop-zone-primary" }, F5 = { class: "drop-zone-secondary" }, V5 = { class: "drop-zone-actions" }, B5 = {
  key: 1,
  class: "drop-zone-file"
}, W5 = { class: "file-info" }, G5 = { class: "file-details" }, j5 = { class: "file-name" }, H5 = { class: "file-size" }, K5 = /* @__PURE__ */ ye({
  __name: "FileDropZone",
  props: {
    accept: { default: "*/*" },
    multiple: { type: Boolean, default: !1 },
    primaryText: { default: "Drag & drop file here" },
    secondaryText: { default: "or click to browse" },
    buttonText: { default: "Browse Files" }
  },
  emits: ["fileSelected", "clear"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1), l = _(null), r = _(0), c = D(() => l.value !== null), u = D(() => {
      var $;
      return (($ = l.value) == null ? void 0 : $.name) || "";
    }), m = D(() => {
      if (!l.value) return "";
      const $ = l.value.size;
      return $ < 1024 ? `${$} B` : $ < 1024 * 1024 ? `${($ / 1024).toFixed(1)} KB` : $ < 1024 * 1024 * 1024 ? `${($ / (1024 * 1024)).toFixed(1)} MB` : `${($ / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function f($) {
      var C;
      $.stopPropagation(), r.value++, (C = $.dataTransfer) != null && C.types.includes("Files") && (a.value = !0);
    }
    function v($) {
      $.stopPropagation(), $.dataTransfer && ($.dataTransfer.dropEffect = "copy");
    }
    function y($) {
      $.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function k($) {
      var N;
      $.stopPropagation(), r.value = 0, a.value = !1;
      const C = (N = $.dataTransfer) == null ? void 0 : N.files;
      C && C.length > 0 && w(C[0]);
    }
    function p($) {
      $.length > 0 && w($[0]);
    }
    function w($) {
      l.value = $, o("fileSelected", $);
    }
    function x() {
      l.value = null, o("clear");
    }
    return ($, C) => (n(), i("div", {
      class: Re(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: wt(f, ["prevent"]),
      onDragover: wt(v, ["prevent"]),
      onDragleave: wt(y, ["prevent"]),
      onDrop: wt(k, ["prevent"])
    }, [
      c.value ? (n(), i("div", B5, [
        t("div", W5, [
          C[1] || (C[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", G5, [
            t("div", j5, d(u.value), 1),
            t("div", H5, d(m.value), 1)
          ])
        ]),
        S(pe, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: g(() => [...C[2] || (C[2] = [
            t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
            ], -1)
          ])]),
          _: 1
        })
      ])) : (n(), i("div", A5, [
        C[0] || (C[0] = t("div", { class: "drop-zone-icon" }, [
          t("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
            t("path", { d: "M2 14h12v-2H2v2z" })
          ])
        ], -1)),
        t("div", O5, [
          t("p", z5, d(e.primaryText), 1),
          t("p", F5, d(e.secondaryText), 1)
        ]),
        t("div", V5, [
          S(U5, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: p
          }, {
            default: g(() => [
              b(d(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), q5 = /* @__PURE__ */ _e(K5, [["__scopeId", "data-v-0f79cb86"]]), Y5 = { class: "import-preview" }, Q5 = { class: "preview-header" }, J5 = {
  key: 0,
  class: "source-env"
}, X5 = { class: "preview-content" }, Z5 = { class: "preview-section" }, eS = { class: "section-header" }, tS = { class: "section-info" }, sS = { class: "section-count" }, oS = {
  key: 0,
  class: "item-list"
}, nS = { class: "item-name" }, aS = {
  key: 0,
  class: "item-more"
}, lS = { class: "preview-section" }, iS = { class: "section-header" }, rS = { class: "section-info" }, cS = { class: "section-count" }, uS = {
  key: 0,
  class: "item-list"
}, dS = { class: "item-details" }, mS = { class: "item-name" }, fS = { class: "item-meta" }, vS = {
  key: 0,
  class: "item-more"
}, pS = { class: "preview-section" }, gS = { class: "section-header" }, hS = { class: "section-info" }, yS = { class: "section-count" }, wS = {
  key: 0,
  class: "item-list"
}, _S = { class: "item-name" }, kS = {
  key: 0,
  class: "item-more"
}, bS = {
  key: 0,
  class: "preview-section"
}, $S = { class: "git-info" }, CS = /* @__PURE__ */ ye({
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
    const s = e, o = D(() => s.workflows.length), a = D(() => s.models.length), l = D(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", Y5, [
      t("div", Q5, [
        S(Kt, null, {
          default: g(() => [...u[0] || (u[0] = [
            b("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", J5, [
          u[1] || (u[1] = b(" From: ", -1)),
          S(Ba, null, {
            default: g(() => [
              b(d(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : h("", !0)
      ]),
      t("div", X5, [
        t("div", Z5, [
          t("div", eS, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", tS, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", sS, d(o.value) + " file" + d(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", oS, [
            (n(!0), i(B, null, he(e.workflows.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", nS, d(m), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", aS, " +" + d(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", lS, [
          t("div", iS, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", rS, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", cS, d(a.value) + " file" + d(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", uS, [
            (n(!0), i(B, null, he(e.models.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", dS, [
                t("span", mS, d(m.filename), 1),
                t("span", fS, d(r(m.size)) + " • " + d(m.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", vS, " +" + d(e.models.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        t("div", pS, [
          t("div", gS, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", hS, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", yS, d(l.value) + " node" + d(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", wS, [
            (n(!0), i(B, null, he(e.nodes.slice(0, e.maxPreviewItems), (m) => (n(), i("div", {
              key: m,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", _S, d(m), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", kS, " +" + d(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : h("", !0)
          ])) : h("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", bS, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", $S, [
            e.gitBranch ? (n(), P(yt, {
              key: 0,
              label: "Branch"
            }, {
              default: g(() => [
                S(Ba, null, {
                  default: g(() => [
                    b(d(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : h("", !0),
            e.gitCommit ? (n(), P(yt, {
              key: 1,
              label: "Commit"
            }, {
              default: g(() => [
                S(Lr, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : h("", !0)
          ])
        ])) : h("", !0)
      ])
    ]));
  }
}), xS = /* @__PURE__ */ _e(CS, [["__scopeId", "data-v-182fe113"]]), SS = { class: "import-config" }, IS = { class: "config-container" }, ES = { class: "config-field" }, TS = { class: "input-wrapper" }, PS = ["value"], RS = {
  key: 0,
  class: "validating-indicator"
}, MS = {
  key: 1,
  class: "valid-indicator"
}, DS = {
  key: 0,
  class: "field-error"
}, LS = { class: "config-field" }, NS = { class: "strategy-options" }, US = ["value", "checked", "onChange"], AS = { class: "strategy-content" }, OS = { class: "strategy-label" }, zS = { class: "strategy-description" }, FS = { class: "config-field switch-field" }, VS = { class: "switch-label" }, BS = ["checked"], WS = { class: "advanced-section" }, GS = { class: "advanced-content" }, jS = { class: "config-field" }, HS = ["value"], KS = ["value"], qS = /* @__PURE__ */ ye({
  __name: "ImportConfigForm",
  props: {
    name: {},
    modelStrategy: {},
    torchBackend: {},
    switchAfterImport: { type: Boolean },
    nameError: {}
  },
  emits: ["update:name", "update:modelStrategy", "update:torchBackend", "update:switchAfterImport", "validate-name"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = _(!1), r = _(!1);
    $t(() => o.nameError, (v) => {
      l.value = !1, r.value = !v && o.name.length > 0;
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
    function m(v) {
      const y = v.target.value;
      a("update:name", y), r.value = !1, u && clearTimeout(u), y.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", y);
      }, 400)) : l.value = !1;
    }
    function f() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (v, y) => (n(), i("div", SS, [
      S(Kt, null, {
        default: g(() => [...y[2] || (y[2] = [
          b("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", IS, [
        t("div", ES, [
          S(Ln, { required: "" }, {
            default: g(() => [...y[3] || (y[3] = [
              b("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", TS, [
            t("input", {
              type: "text",
              class: Re(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: m,
              onBlur: f
            }, null, 42, PS),
            l.value ? (n(), i("span", RS, "...")) : r.value ? (n(), i("span", MS, "✓")) : h("", !0)
          ]),
          e.nameError ? (n(), i("div", DS, d(e.nameError), 1)) : h("", !0),
          y[4] || (y[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", LS, [
          S(Ln, null, {
            default: g(() => [...y[5] || (y[5] = [
              b("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", NS, [
            (n(), i(B, null, he(c, (k) => t("label", {
              key: k.value,
              class: Re(["strategy-option", { active: e.modelStrategy === k.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: k.value,
                checked: e.modelStrategy === k.value,
                onChange: (p) => a("update:modelStrategy", k.value)
              }, null, 40, US),
              t("div", AS, [
                t("span", OS, d(k.label), 1),
                t("span", zS, d(k.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", FS, [
          t("label", VS, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: y[0] || (y[0] = (k) => a("update:switchAfterImport", k.target.checked))
            }, null, 40, BS),
            y[6] || (y[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", WS, [
          y[8] || (y[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", GS, [
            t("div", jS, [
              S(Ln, null, {
                default: g(() => [...y[7] || (y[7] = [
                  b("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: y[1] || (y[1] = (k) => a("update:torchBackend", k.target.value))
              }, [
                (n(!0), i(B, null, he(Xe(pl), (k) => (n(), i("option", {
                  key: k,
                  value: k
                }, d(k) + d(k === "auto" ? " (detect GPU)" : ""), 9, KS))), 128))
              ], 40, HS)
            ])
          ])
        ])
      ])
    ]));
  }
}), YS = /* @__PURE__ */ _e(qS, [["__scopeId", "data-v-89ea06a1"]]), QS = { class: "import-flow" }, JS = {
  key: 0,
  class: "import-empty"
}, XS = { class: "git-import-section" }, ZS = { class: "git-url-input-row" }, e8 = ["disabled"], t8 = {
  key: 0,
  class: "git-error"
}, s8 = {
  key: 1,
  class: "import-configure"
}, o8 = { class: "selected-file-bar" }, n8 = {
  key: 0,
  class: "file-bar-content"
}, a8 = { class: "file-bar-info" }, l8 = { class: "file-bar-name" }, i8 = { class: "file-bar-size" }, r8 = {
  key: 1,
  class: "file-bar-content"
}, c8 = { class: "file-bar-info" }, u8 = { class: "file-bar-name" }, d8 = {
  key: 0,
  class: "preview-loading"
}, m8 = { class: "import-actions" }, f8 = {
  key: 2,
  class: "import-progress"
}, v8 = { class: "creating-intro" }, p8 = {
  key: 0,
  class: "progress-warning"
}, g8 = {
  key: 1,
  class: "import-error"
}, h8 = { class: "error-message" }, y8 = {
  key: 3,
  class: "import-complete"
}, w8 = { class: "complete-message" }, _8 = { class: "complete-title" }, k8 = { class: "complete-details" }, b8 = { class: "complete-actions" }, $8 = /* @__PURE__ */ ye({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var xe, A, Y, z;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: m, executeGitImport: f, getImportProgress: v } = ut();
    let y = null;
    const k = _(null), p = _(a.resumeImport ?? !1), w = _(!1), x = _(!1), $ = _(""), C = _(!1), N = _(null), T = _(""), I = _(null), M = _(!1), L = _(null), W = _(null), E = _({
      name: ((xe = a.initialProgress) == null ? void 0 : xe.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), R = _(null), te = _({
      message: ((A = a.initialProgress) == null ? void 0 : A.message) ?? "Preparing import...",
      phase: ((Y = a.initialProgress) == null ? void 0 : Y.phase) ?? "",
      progress: ((z = a.initialProgress) == null ? void 0 : z.progress) ?? 0,
      error: null
    }), se = [
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 15 },
      { id: "extract_builtins", label: "Extract builtin nodes", progressThreshold: 20 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 35 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 60 },
      { id: "sync_nodes", label: "Sync custom nodes", progressThreshold: 70 },
      { id: "copy_workflows", label: "Copy workflows", progressThreshold: 80 },
      { id: "resolve_models", label: "Resolve models", progressThreshold: 85 },
      { id: "download_models", label: "Download models", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], oe = D(() => {
      if (!W.value)
        return {
          sourceEnvironment: "",
          workflows: [],
          models: [],
          nodes: [],
          gitBranch: void 0,
          gitCommit: void 0
        };
      const O = W.value;
      return {
        sourceEnvironment: O.comfyui_version ? `ComfyUI ${O.comfyui_version}` : "Unknown",
        workflows: O.workflows.map((ie) => ie.name),
        models: O.models.map((ie) => ({
          filename: ie.filename,
          size: 0,
          type: ie.relative_path.split("/")[0] || "model"
        })),
        nodes: O.nodes.map((ie) => ie.name),
        gitBranch: void 0,
        gitCommit: void 0
      };
    }), X = D(() => !C.value && !N.value && W.value && E.value.name.length > 0 && !R.value && (k.value || I.value));
    async function V(O) {
      k.value = O, C.value = !0, N.value = null, W.value = null;
      try {
        const ie = await r(O);
        W.value = ie;
      } catch (ie) {
        N.value = ie instanceof Error ? ie.message : "Failed to analyze file", console.error("Preview error:", ie);
      } finally {
        C.value = !1;
      }
    }
    function Q() {
      k.value = null, I.value = null, T.value = "", L.value = null, w.value = !1, x.value = !1, $.value = "", W.value = null, N.value = null, E.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, R.value = null, l("source-cleared");
    }
    function ne() {
      qe(), Q(), p.value = !1, C.value = !1, M.value = !1, te.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function re() {
      if (T.value.trim()) {
        M.value = !0, L.value = null;
        try {
          const O = await c(T.value.trim());
          I.value = T.value.trim(), W.value = O;
        } catch (O) {
          L.value = O instanceof Error ? O.message : "Failed to analyze repository";
        } finally {
          M.value = !1;
        }
      }
    }
    function F(O) {
      try {
        const ie = new URL(O);
        return ie.host + ie.pathname.replace(/\.git$/, "");
      } catch {
        return O;
      }
    }
    async function ee(O) {
      if (!O) {
        R.value = "Environment name is required";
        return;
      }
      try {
        const ie = await u(O);
        R.value = ie.valid ? null : ie.error || "Invalid name";
      } catch {
        R.value = "Failed to validate name";
      }
    }
    async function le() {
      if (E.value.name && !(!k.value && !I.value)) {
        p.value = !0, w.value = !1, te.value = { message: `Creating environment '${E.value.name}'...`, phase: "", progress: 0, error: null }, l("import-started");
        try {
          let O;
          if (k.value)
            O = await m(
              k.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else if (I.value)
            O = await f(
              I.value,
              E.value.name,
              E.value.modelStrategy,
              E.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          O.status === "started" ? Ae() : (x.value = !1, $.value = O.message, p.value = !1, w.value = !0);
        } catch (O) {
          x.value = !1, $.value = O instanceof Error ? O.message : "Unknown error occurred during import", p.value = !1, w.value = !0;
        }
      }
    }
    async function Ae() {
      if (y) return;
      const O = async () => {
        try {
          const Te = await v();
          return te.value = {
            message: Te.message,
            phase: Te.phase || "",
            progress: Te.progress ?? (Te.state === "importing" ? 50 : 0),
            error: Te.error || null
          }, Te.state === "complete" ? (qe(), x.value = !0, $.value = `Environment '${Te.environment_name}' created successfully`, p.value = !1, w.value = !0, Te.environment_name && l("import-complete", Te.environment_name, E.value.switchAfterImport), !1) : Te.state === "error" ? (qe(), x.value = !1, $.value = Te.error || Te.message, p.value = !1, w.value = !0, !1) : !0;
        } catch (Te) {
          return console.error("Failed to poll import progress:", Te), !0;
        }
      };
      await O() && (y = setInterval(async () => {
        await O() || qe();
      }, 2e3));
    }
    function qe() {
      y && (clearInterval(y), y = null);
    }
    function je(O) {
      return O < 1024 ? `${O} B` : O < 1024 * 1024 ? `${(O / 1024).toFixed(1)} KB` : O < 1024 * 1024 * 1024 ? `${(O / (1024 * 1024)).toFixed(1)} MB` : `${(O / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return rt(async () => {
      try {
        const O = await v();
        console.log("[ComfyGit ImportFlow] Import progress check:", O.state, O), O.state === "importing" && (console.log("[ComfyGit ImportFlow] Resuming in-progress import:", O.environment_name), p.value = !0, E.value.name = O.environment_name || E.value.name || "", te.value = {
          progress: O.progress ?? 0,
          message: O.message || "Importing...",
          phase: O.phase || "",
          error: null
        }, Ae());
      } catch (O) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", O);
      }
    }), s({
      handleReset: ne,
      isImporting: p,
      canImport: X
    }), (O, ie) => {
      var Te;
      return n(), i("div", QS, [
        !k.value && !I.value && !p.value ? (n(), i("div", JS, [
          S(q5, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: V
          }),
          ie[7] || (ie[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", XS, [
            ie[5] || (ie[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", ZS, [
              lt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": ie[0] || (ie[0] = (Ye) => T.value = Ye),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ss(re, ["enter"]),
                disabled: M.value
              }, null, 40, e8), [
                [Yt, T.value]
              ]),
              S(pe, {
                variant: "primary",
                size: "sm",
                disabled: !T.value.trim() || M.value,
                onClick: re
              }, {
                default: g(() => [
                  b(d(M.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            L.value ? (n(), i("div", t8, d(L.value), 1)) : h("", !0),
            ie[6] || (ie[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (k.value || I.value) && !p.value && !w.value ? (n(), i("div", s8, [
          t("div", o8, [
            k.value ? (n(), i("div", n8, [
              ie[8] || (ie[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", a8, [
                t("div", l8, d(k.value.name), 1),
                t("div", i8, d(je(k.value.size)), 1)
              ])
            ])) : I.value ? (n(), i("div", r8, [
              ie[10] || (ie[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", c8, [
                t("div", u8, d(F(I.value)), 1),
                ie[9] || (ie[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : h("", !0),
            S(pe, {
              variant: "ghost",
              size: "sm",
              onClick: Q
            }, {
              default: g(() => [...ie[11] || (ie[11] = [
                b(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          C.value ? (n(), i("div", d8, [...ie[12] || (ie[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : N.value ? (n(), P(ls, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [N.value]
          }, null, 8, ["details"])) : W.value ? (n(), P(xS, {
            key: 2,
            "source-environment": oe.value.sourceEnvironment,
            workflows: oe.value.workflows,
            models: oe.value.models,
            nodes: oe.value.nodes,
            "git-branch": oe.value.gitBranch,
            "git-commit": oe.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : h("", !0),
          W.value ? (n(), P(YS, {
            key: 3,
            name: E.value.name,
            "onUpdate:name": ie[1] || (ie[1] = (Ye) => E.value.name = Ye),
            "model-strategy": E.value.modelStrategy,
            "onUpdate:modelStrategy": ie[2] || (ie[2] = (Ye) => E.value.modelStrategy = Ye),
            "torch-backend": E.value.torchBackend,
            "onUpdate:torchBackend": ie[3] || (ie[3] = (Ye) => E.value.torchBackend = Ye),
            "switch-after-import": E.value.switchAfterImport,
            "onUpdate:switchAfterImport": ie[4] || (ie[4] = (Ye) => E.value.switchAfterImport = Ye),
            "name-error": R.value,
            onValidateName: ee
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : h("", !0),
          E.value.modelStrategy === "skip" && ((Te = W.value) != null && Te.models_needing_download) ? (n(), P(ls, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${W.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : h("", !0),
          t("div", m8, [
            S(pe, {
              variant: "secondary",
              size: "md",
              onClick: Q
            }, {
              default: g(() => [...ie[13] || (ie[13] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
              variant: "primary",
              size: "md",
              disabled: !X.value,
              onClick: le
            }, {
              default: g(() => [...ie[14] || (ie[14] = [
                b(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : p.value ? (n(), i("div", f8, [
          t("p", v8, [
            ie[15] || (ie[15] = b(" Importing environment ", -1)),
            t("strong", null, d(E.value.name), 1),
            ie[16] || (ie[16] = b("... ", -1))
          ]),
          S(Hn, {
            progress: te.value.progress,
            message: te.value.message,
            "current-phase": te.value.phase,
            variant: te.value.error ? "error" : "default",
            "show-steps": !0,
            steps: se
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          te.value.error ? h("", !0) : (n(), i("p", p8, " This may take several minutes. Please wait... ")),
          te.value.error ? (n(), i("div", g8, [
            t("p", h8, d(te.value.error), 1)
          ])) : h("", !0)
        ])) : w.value ? (n(), i("div", y8, [
          t("div", {
            class: Re(["complete-icon", x.value ? "success" : "error"])
          }, d(x.value ? "✓" : "✕"), 3),
          t("div", w8, [
            t("div", _8, d(x.value ? "Import Successful" : "Import Failed"), 1),
            t("div", k8, d($.value), 1)
          ]),
          t("div", b8, [
            S(pe, {
              variant: "primary",
              size: "md",
              onClick: ne
            }, {
              default: g(() => [...ie[17] || (ie[17] = [
                b(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : h("", !0)
      ]);
    };
  }
}), Yr = /* @__PURE__ */ _e($8, [["__scopeId", "data-v-72cbc04e"]]), C8 = /* @__PURE__ */ ye({
  __name: "ImportSection",
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = _(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "IMPORT ENVIRONMENT",
            "show-info": !0,
            onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
          })
        ]),
        content: g(() => [
          S(Yr, { onImportComplete: l })
        ]),
        _: 1
      }),
      S(vs, {
        show: a.value,
        title: "How Import Works",
        onClose: c[1] || (c[1] = (u) => a.value = !1)
      }, {
        content: g(() => [...c[2] || (c[2] = [
          t("div", { class: "help-steps" }, [
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "1"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Creates a New Environment"),
                t("p", null, "Import does not modify your current environment - it creates a brand new one")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "2"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Preview Before Import"),
                t("p", null, "See what nodes, models, and workflows will be set up")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "3"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Choose Model Strategy"),
                t("p", null, "Download all models, only required ones, or skip for later")
              ])
            ]),
            t("div", { class: "help-step" }, [
              t("span", { class: "step-number" }, "4"),
              t("div", { class: "step-content" }, [
                t("strong", null, "Switch When Ready"),
                t("p", null, "After creation, switch to the new environment to start using it")
              ])
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), x8 = /* @__PURE__ */ _e(C8, [["__scopeId", "data-v-e13bfe76"]]), Sn = ko(), S8 = 5e3, yo = _([]), Sa = _(!1), Ia = _(null);
let Fo = null;
async function In(e, s) {
  var o;
  if (!((o = window.app) != null && o.api))
    throw new Error("ComfyUI API not available");
  return window.app.api.fetchApi(e, s);
}
function Qr(e) {
  const s = D(
    () => yo.value.filter((p) => p.status === "running")
  ), o = D(
    () => yo.value.filter((p) => p.status === "deploying")
  ), a = D(
    () => yo.value.filter((p) => p.status === "stopped")
  ), l = D(
    () => s.value.length + o.value.length
  ), r = D(() => {
    const p = {
      deploying: 0,
      running: 1,
      stopped: 2,
      error: 3,
      terminated: 4
    };
    return [...yo.value].sort(
      (w, x) => (p[w.status] ?? 5) - (p[x.status] ?? 5)
    );
  });
  async function c() {
    Sa.value = !0, Ia.value = null;
    try {
      let p;
      if (!Sn) {
        const w = await In("/v2/comfygit/deploy/instances");
        if (!w.ok)
          throw new Error(`Failed to fetch instances: ${w.status}`);
        p = await w.json();
      }
      yo.value = p.instances;
    } catch (p) {
      Ia.value = p instanceof Error ? p.message : "Unknown error", console.error("[useDeployInstances] refreshInstances error:", p);
    } finally {
      Sa.value = !1;
    }
  }
  function u(p, w) {
    if (p.provider === "custom" && p.worker_name) {
      const x = p.id.includes(":") ? p.id.split(":").slice(1).join(":") : p.id;
      return w === "terminate" ? `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}` : `/v2/comfygit/deploy/custom/${p.worker_name}/instances/${x}/${w}`;
    }
    return w === "terminate" ? `/v2/comfygit/deploy/${p.provider}/${p.id}` : `/v2/comfygit/deploy/${p.provider}/${p.id}/${w}`;
  }
  async function m(p) {
    try {
      if (!Sn) {
        const w = u(p, "stop"), x = await In(w, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to stop instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] stopInstance error:", w), w;
    }
  }
  async function f(p) {
    try {
      if (!Sn) {
        const w = u(p, "start"), x = await In(w, { method: "POST" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to start instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] startInstance error:", w), w;
    }
  }
  async function v(p) {
    try {
      if (!Sn) {
        const w = u(p, "terminate"), x = await In(w, { method: "DELETE" });
        if (!x.ok) {
          const $ = await x.json();
          throw new Error($.message || "Failed to terminate instance");
        }
      }
      await c();
    } catch (w) {
      throw console.error("[useDeployInstances] terminateInstance error:", w), w;
    }
  }
  function y() {
    Fo || (Fo = window.setInterval(c, S8));
  }
  function k() {
    Fo && (clearInterval(Fo), Fo = null);
  }
  return $t(o, (p) => {
    p.length > 0 && y();
  }, { immediate: !0 }), e != null && e.autoStart && (c(), y()), {
    // State
    instances: yo,
    isLoading: Sa,
    error: Ia,
    // Computed
    runningInstances: s,
    deployingInstances: o,
    stoppedInstances: a,
    liveInstanceCount: l,
    sortedInstances: r,
    // Actions
    refreshInstances: c,
    stopInstance: m,
    startInstance: f,
    terminateInstance: v,
    // Polling
    startPolling: y,
    stopPolling: k
  };
}
const I8 = { class: "instance-header" }, E8 = { class: "provider-badge" }, T8 = { class: "instance-name" }, P8 = {
  key: 0,
  class: "spinner"
}, R8 = { class: "instance-details" }, M8 = {
  key: 0,
  class: "detail"
}, D8 = {
  key: 1,
  class: "detail instance-url"
}, L8 = {
  key: 2,
  class: "detail"
}, N8 = {
  key: 3,
  class: "detail"
}, U8 = {
  key: 4,
  class: "detail total-cost"
}, A8 = {
  key: 0,
  class: "deployment-progress"
}, O8 = { class: "progress-message" }, z8 = { class: "instance-actions" }, F8 = /* @__PURE__ */ ye({
  __name: "InstanceCard",
  props: {
    instance: {},
    isLoading: { type: Boolean }
  },
  emits: ["stop", "start", "terminate"],
  setup(e) {
    const s = e, o = D(() => s.instance.provider === "custom" && s.instance.worker_name ? s.instance.worker_name : {
      runpod: "RunPod",
      vast: "Vast.ai",
      custom: "Custom"
    }[s.instance.provider] || s.instance.provider), a = D(() => ({
      deploying: "Deploying",
      starting: "Starting",
      running: "Running",
      stopped: "Stopped",
      error: "Error",
      terminated: "Terminated"
    })[s.instance.status] || s.instance.status), l = D(() => `status-${s.instance.status}`);
    function r() {
      s.instance.comfyui_url && window.open(s.instance.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function c() {
      s.instance.console_url && window.open(s.instance.console_url, "_blank", "noopener,noreferrer");
    }
    function u(m) {
      const f = Math.floor(m / 3600), v = Math.floor(m % 3600 / 60);
      return f > 0 ? `${f}h ${v}m` : `${v}m`;
    }
    return (m, f) => (n(), i("div", {
      class: Re(["instance-card", l.value])
    }, [
      t("div", I8, [
        t("span", E8, d(o.value), 1),
        t("span", T8, d(e.instance.name), 1),
        t("span", {
          class: Re(["status-indicator", e.instance.status])
        }, [
          e.instance.status === "deploying" || e.instance.status === "starting" ? (n(), i("span", P8)) : h("", !0),
          b(" " + d(a.value), 1)
        ], 2)
      ]),
      t("div", R8, [
        e.instance.gpu_type ? (n(), i("span", M8, d(e.instance.gpu_type), 1)) : h("", !0),
        e.instance.comfyui_url ? (n(), i("span", D8, d(e.instance.comfyui_url), 1)) : h("", !0),
        e.instance.uptime_seconds ? (n(), i("span", L8, d(u(e.instance.uptime_seconds)), 1)) : h("", !0),
        e.instance.cost_per_hour ? (n(), i("span", N8, "$" + d(e.instance.cost_per_hour.toFixed(2)) + "/hr", 1)) : h("", !0),
        e.instance.total_cost ? (n(), i("span", U8, "$" + d(e.instance.total_cost.toFixed(2)) + " total", 1)) : h("", !0)
      ]),
      e.instance.status === "deploying" ? (n(), i("div", A8, [
        t("div", O8, d(e.instance.deployment_message || "Deploying..."), 1),
        e.instance.deployment_progress ? (n(), P(ra, {
          key: 0,
          progress: e.instance.deployment_progress
        }, null, 8, ["progress"])) : h("", !0)
      ])) : h("", !0),
      t("div", z8, [
        e.instance.status === "running" && e.instance.comfyui_url ? (n(), P(pe, {
          key: 0,
          variant: "primary",
          size: "xs",
          onClick: r
        }, {
          default: g(() => [...f[3] || (f[3] = [
            b(" Open ComfyUI ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        e.instance.console_url && e.instance.provider !== "custom" ? (n(), P(pe, {
          key: 1,
          variant: "ghost",
          size: "xs",
          onClick: c
        }, {
          default: g(() => [...f[4] || (f[4] = [
            b(" Console ", -1)
          ])]),
          _: 1
        })) : h("", !0),
        e.instance.status === "running" ? (n(), P(pe, {
          key: 2,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[0] || (f[0] = (v) => m.$emit("stop", e.instance))
        }, {
          default: g(() => [...f[5] || (f[5] = [
            b(" Stop ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : h("", !0),
        e.instance.status === "stopped" ? (n(), P(pe, {
          key: 3,
          variant: "secondary",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[1] || (f[1] = (v) => m.$emit("start", e.instance))
        }, {
          default: g(() => [...f[6] || (f[6] = [
            b(" Start ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])) : h("", !0),
        S(pe, {
          variant: "destructive",
          size: "xs",
          loading: e.isLoading,
          disabled: e.isLoading,
          onClick: f[2] || (f[2] = (v) => m.$emit("terminate", e.instance))
        }, {
          default: g(() => [...f[7] || (f[7] = [
            b(" Terminate ", -1)
          ])]),
          _: 1
        }, 8, ["loading", "disabled"])
      ])
    ], 2));
  }
}), V8 = /* @__PURE__ */ _e(F8, [["__scopeId", "data-v-746c3894"]]), B8 = { class: "instances-tab" }, W8 = { class: "instances-header" }, G8 = {
  key: 0,
  class: "loading-state"
}, j8 = {
  key: 1,
  class: "empty-state"
}, H8 = {
  key: 2,
  class: "instances-list"
}, K8 = /* @__PURE__ */ ye({
  __name: "InstancesTab",
  props: {
    instances: {},
    isLoading: { type: Boolean },
    actionLoadingId: {}
  },
  emits: ["refresh", "stop", "start", "terminate"],
  setup(e) {
    const s = e, o = D(() => {
      const a = {
        deploying: 0,
        running: 1,
        stopped: 2,
        error: 3,
        terminated: 4
      };
      return [...s.instances].sort(
        (l, r) => (a[l.status] ?? 5) - (a[r.status] ?? 5)
      );
    });
    return (a, l) => (n(), i("div", B8, [
      t("div", W8, [
        S(Kt, null, {
          default: g(() => [...l[4] || (l[4] = [
            b("Active Instances", -1)
          ])]),
          _: 1
        }),
        S(pe, {
          variant: "ghost",
          size: "xs",
          loading: e.isLoading,
          onClick: l[0] || (l[0] = (r) => a.$emit("refresh"))
        }, {
          default: g(() => [...l[5] || (l[5] = [
            b(" Refresh ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      e.isLoading && e.instances.length === 0 ? (n(), i("div", G8, [...l[6] || (l[6] = [
        t("span", { class: "spinner" }, null, -1),
        b(" Loading instances... ", -1)
      ])])) : e.instances.length === 0 ? (n(), i("div", j8, [...l[7] || (l[7] = [
        t("span", { class: "empty-icon" }, "○", -1),
        t("span", { class: "empty-text" }, "No active instances", -1),
        t("p", { class: "empty-help" }, "Deploy an instance from the RunPod tab to get started.", -1)
      ])])) : (n(), i("div", H8, [
        (n(!0), i(B, null, he(o.value, (r) => (n(), P(V8, {
          key: r.id,
          instance: r,
          "is-loading": e.actionLoadingId === r.id,
          onStop: l[1] || (l[1] = (c) => a.$emit("stop", c)),
          onStart: l[2] || (l[2] = (c) => a.$emit("start", c)),
          onTerminate: l[3] || (l[3] = (c) => a.$emit("terminate", c))
        }, null, 8, ["instance", "is-loading"]))), 128))
      ]))
    ]));
  }
}), q8 = /* @__PURE__ */ _e(K8, [["__scopeId", "data-v-ba614fc3"]]), Y8 = { class: "remote-header" }, Q8 = { class: "remote-info" }, J8 = { class: "remote-icon" }, X8 = { class: "remote-name" }, Z8 = {
  key: 0,
  class: "default-badge"
}, e4 = {
  key: 1,
  class: "sync-badge"
}, t4 = {
  key: 0,
  class: "ahead"
}, s4 = {
  key: 1,
  class: "behind"
}, o4 = {
  key: 1,
  class: "synced"
}, n4 = ["href"], a4 = {
  key: 1,
  class: "remote-url-text"
}, l4 = { class: "remote-actions" }, i4 = /* @__PURE__ */ ye({
  __name: "DeployRemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    isSelected: { type: Boolean },
    isFetching: { type: Boolean },
    isPushing: { type: Boolean }
  },
  emits: ["fetch", "push", "select"],
  setup(e) {
    const s = e, o = D(() => s.remote.is_default), a = D(() => {
      const r = s.remote.fetch_url, c = r.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return c ? `https://${c[1]}/${c[2]}` : r.startsWith("https://") || r.startsWith("http://") ? r.replace(/\.git$/, "") : null;
    }), l = D(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (r, c) => (n(), i("div", {
      class: Re(["deploy-remote-card", { selected: e.isSelected }])
    }, [
      t("div", Y8, [
        t("div", Q8, [
          t("span", J8, d(o.value ? "🔗" : "🌐"), 1),
          t("span", X8, d(e.remote.name), 1),
          o.value ? (n(), i("span", Z8, "DEFAULT")) : h("", !0),
          e.syncStatus ? (n(), i("span", e4, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", t4, "↑" + d(e.syncStatus.ahead), 1)) : h("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", s4, "↓" + d(e.syncStatus.behind), 1)) : h("", !0)
            ], 64)) : (n(), i("span", o4, "✓ synced"))
          ])) : h("", !0)
        ]),
        a.value ? (n(), i("a", {
          key: 0,
          href: a.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url",
          onClick: c[0] || (c[0] = wt(() => {
          }, ["stop"]))
        }, d(l.value), 9, n4)) : (n(), i("span", a4, d(l.value), 1))
      ]),
      t("div", l4, [
        S(pe, {
          variant: "secondary",
          size: "xs",
          loading: e.isFetching,
          onClick: c[1] || (c[1] = (u) => r.$emit("fetch", e.remote.name))
        }, {
          default: g(() => [...c[4] || (c[4] = [
            b(" Fetch ", -1)
          ])]),
          _: 1
        }, 8, ["loading"]),
        e.syncStatus && e.syncStatus.ahead > 0 ? (n(), P(pe, {
          key: 0,
          variant: "primary",
          size: "xs",
          loading: e.isPushing,
          onClick: c[2] || (c[2] = (u) => r.$emit("push", e.remote.name))
        }, {
          default: g(() => [
            b(" Push ↑" + d(e.syncStatus.ahead), 1)
          ]),
          _: 1
        }, 8, ["loading"])) : h("", !0),
        S(pe, {
          variant: e.isSelected ? "primary" : "secondary",
          size: "xs",
          onClick: c[3] || (c[3] = (u) => r.$emit("select", e.remote.name))
        }, {
          default: g(() => [
            b(d(e.isSelected ? "● Selected" : "Use for Deploy"), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ])
    ], 2));
  }
}), Jr = /* @__PURE__ */ _e(i4, [["__scopeId", "data-v-d687d161"]]), r4 = { class: "runpod-tab" }, c4 = { class: "api-key-card" }, u4 = { class: "api-key-row" }, d4 = { class: "api-key-input-wrapper" }, m4 = ["type", "disabled"], f4 = ["title"], v4 = { class: "status-icon" }, p4 = { class: "status-text" }, g4 = {
  key: 0,
  class: "credit-balance"
}, h4 = { class: "config-card" }, y4 = { class: "config-row" }, w4 = ["disabled"], _4 = {
  key: 0,
  value: ""
}, k4 = {
  key: 1,
  value: "",
  disabled: ""
}, b4 = ["value", "disabled"], $4 = { class: "config-row" }, C4 = {
  key: 0,
  class: "loading-inline"
}, x4 = { class: "no-volumes-state" }, S4 = { class: "no-volumes-text" }, I4 = ["value"], E4 = { class: "config-row" }, T4 = ["disabled"], P4 = {
  key: 0,
  value: ""
}, R4 = {
  key: 1,
  value: ""
}, M4 = {
  key: 2,
  value: ""
}, D4 = ["value"], L4 = { class: "config-row" }, N4 = { class: "radio-group" }, U4 = { class: "radio-option" }, A4 = { class: "radio-label" }, O4 = { class: "radio-option disabled" }, z4 = { class: "radio-label" }, F4 = { class: "config-row" }, V4 = { class: "radio-group" }, B4 = { class: "radio-option" }, W4 = { class: "radio-label" }, G4 = { class: "radio-option disabled" }, j4 = { class: "radio-label" }, H4 = { class: "config-row" }, K4 = {
  key: 0,
  class: "loading-text"
}, q4 = {
  key: 1,
  class: "empty-remotes"
}, Y4 = { class: "remotes-list" }, Q4 = {
  key: 0,
  class: "sync-warning"
}, J4 = { class: "warning-content" }, X4 = { class: "remotes-footer" }, Z4 = { class: "summary-card" }, eI = {
  key: 0,
  class: "loading-text"
}, tI = { class: "summary-row" }, sI = { class: "summary-value" }, oI = { class: "summary-row" }, nI = { class: "summary-value" }, aI = { class: "summary-row" }, lI = { class: "summary-value" }, iI = {
  key: 0,
  class: "summary-sub-row"
}, rI = { class: "summary-sub-label" }, cI = {
  key: 1,
  class: "summary-sub-row warning"
}, uI = { class: "summary-sub-label" }, dI = { class: "summary-row" }, mI = { class: "summary-value" }, fI = { class: "summary-row" }, vI = { class: "summary-value" }, pI = { class: "deployment-summary" }, gI = { class: "summary-columns" }, hI = { class: "summary-column" }, yI = { class: "pricing-row" }, wI = { class: "pricing-value" }, _I = { class: "pricing-row" }, kI = { class: "pricing-value" }, bI = { class: "pricing-row" }, $I = { class: "pricing-value" }, CI = { class: "pricing-row total" }, xI = { class: "pricing-value" }, SI = { class: "summary-column" }, II = { class: "spec-row" }, EI = { class: "spec-row" }, TI = {
  key: 0,
  class: "spec-row"
}, PI = {
  key: 1,
  class: "spec-row spot-warning"
}, RI = {
  key: 4,
  class: "deploy-actions"
}, MI = { class: "progress-content" }, DI = { class: "phase-indicator" }, LI = { key: 0 }, NI = { key: 1 }, UI = { key: 2 }, AI = {
  key: 3,
  class: "spinner"
}, OI = { class: "phase-text" }, zI = { class: "phase-name" }, FI = { class: "phase-detail" }, VI = {
  key: 0,
  class: "ready-actions"
}, BI = { class: "console-link" }, WI = ["href"], GI = /* @__PURE__ */ ye({
  __name: "RunPodTab",
  emits: ["toast", "navigate", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getDeploySummary: a,
      testRunPodConnection: l,
      getNetworkVolumes: r,
      getRunPodGpuTypes: c,
      deployToRunPod: u,
      getDeploymentStatus: m,
      getStoredRunPodKey: f,
      clearRunPodKey: v,
      validateDeploy: y,
      getRemotes: k,
      getRemoteSyncStatus: p,
      fetchRemote: w,
      pushToRemote: x,
      getDataCenters: $
    } = ut(), C = _(!1), N = _(""), T = _(!1), I = _(!1), M = _(null), L = _(null), W = _(""), E = _(""), R = _(""), te = _("SECURE"), se = _("ON_DEMAND"), oe = _("my-comfyui-deploy"), X = _([]), V = _({}), Q = _(!1), ne = _(null), re = _(null), F = _(null), ee = _([]), le = _(!1), Ae = _([]), qe = _(!1), je = _([]), xe = _(!1), A = _(null), Y = _(!1), z = _(!1), O = _(null), ie = _(!1), Te = _(null), Ye = _(null), U = _(null), H = _(!1), ce = _(null), Ee = _(!1), ke = _(!1), be = D(() => Ae.value.find((Se) => Se.id === E.value) || null), De = D(() => W.value ? Ae.value.filter((Se) => Se.data_center_id === W.value) : Ae.value), we = D(() => je.value.filter((Se) => Se.available)), Pe = D(() => ne.value && V.value[ne.value] || null), fe = D(() => {
      if (!ne.value) return null;
      const Se = X.value.find((Z) => Z.name === ne.value);
      return (Se == null ? void 0 : Se.fetch_url) || null;
    }), Be = D(() => T.value && E.value && R.value && fe.value && !z.value && !H.value), Ue = (Se) => {
      const Z = je.value.find((bt) => bt.id === R.value);
      if (!Z) return "0.00";
      if (Se === "SECURE") return (Z.securePrice ?? 0).toFixed(2);
      if (Se === "COMMUNITY") return (Z.communityPrice ?? 0).toFixed(2);
      const He = te.value === "SECURE";
      return Se === "ON_DEMAND" ? He ? (Z.securePrice ?? 0).toFixed(2) : (Z.communityPrice ?? 0).toFixed(2) : He ? (Z.secureSpotPrice ?? 0).toFixed(2) : (Z.communitySpotPrice ?? 0).toFixed(2);
    }, ve = D(() => {
      const Se = je.value.find((Dt) => Dt.id === R.value), Z = Ae.value.find((Dt) => Dt.id === E.value);
      if (!Se) return null;
      const He = te.value === "SECURE", bt = se.value === "SPOT";
      let St;
      bt ? St = He ? Se.secureSpotPrice ?? 0 : Se.communitySpotPrice ?? 0 : St = He ? Se.securePrice ?? 0 : Se.communityPrice ?? 0;
      const Jt = Z ? Z.size_gb * 14e-5 : 0, Cs = 4e-3;
      return {
        gpu: St,
        volume: Jt,
        container: Cs,
        total: St + Jt + Cs
      };
    });
    async function j() {
      await me(), await Promise.all([ze(), Oe()]);
    }
    async function Oe() {
      Q.value = !0;
      try {
        const Se = await k();
        X.value = Se.remotes, await Promise.all(
          Se.remotes.map(async (He) => {
            const bt = await p(He.name);
            bt && (V.value[He.name] = bt);
          })
        );
        const Z = Se.remotes.find((He) => He.is_default);
        Z ? ne.value = Z.name : Se.remotes.length > 0 && (ne.value = Se.remotes[0].name);
      } catch {
        o("toast", "Failed to load remotes", "error");
      } finally {
        Q.value = !1;
      }
    }
    async function Ie(Se) {
      re.value = Se;
      try {
        await w(Se);
        const Z = await p(Se);
        Z && (V.value[Se] = Z), o("toast", `Fetched from ${Se}`, "success");
      } catch {
        o("toast", "Fetch failed", "error");
      } finally {
        re.value = null;
      }
    }
    async function Ce(Se) {
      F.value = Se;
      try {
        await x(Se, { force: !1 });
        const Z = await p(Se);
        Z && (V.value[Se] = Z), o("toast", `Pushed to ${Se}`, "success");
      } catch {
        o("toast", "Push failed", "error");
      } finally {
        F.value = null;
      }
    }
    function Le(Se) {
      ne.value = Se;
    }
    async function Me() {
      if (N.value) {
        I.value = !0, M.value = null;
        try {
          const Se = await l(N.value, !0);
          Se.status === "success" ? (T.value = !0, L.value = Se.credit_balance ?? null, M.value = { type: "success", message: Se.message }, await j()) : M.value = { type: "error", message: Se.message };
        } catch (Se) {
          M.value = {
            type: "error",
            message: Se instanceof Error ? Se.message : "Connection test failed"
          };
        } finally {
          I.value = !1;
        }
      }
    }
    async function q() {
      try {
        await v(), N.value = "", T.value = !1, M.value = null, L.value = null, ee.value = [], W.value = "", Ae.value = [], E.value = "", je.value = [], R.value = "", A.value = null, o("toast", "API key cleared", "info");
      } catch {
        o("toast", "Failed to clear key", "error");
      }
    }
    async function me() {
      qe.value = !0, le.value = !0;
      try {
        const Se = await r();
        Ae.value = Se.volumes;
        const Z = /* @__PURE__ */ new Map();
        for (const He of Se.volumes)
          He.data_center_id && !Z.has(He.data_center_id) && Z.set(He.data_center_id, {
            id: He.data_center_id,
            name: He.data_center_name || He.data_center_id,
            available: !0
          });
        if (Se.volumes.length === 0) {
          const He = await $();
          ee.value = He.data_centers;
        } else
          ee.value = Array.from(Z.values());
        if (Ae.value.length > 0) {
          const He = Ae.value[0];
          E.value = He.id, He.data_center_id && (W.value = He.data_center_id, await ge(He.data_center_id));
        } else ee.value.length > 0 && (W.value = ee.value[0].id);
      } catch {
        o("toast", "Failed to load network volumes", "error");
      } finally {
        qe.value = !1, le.value = !1;
      }
    }
    async function ge(Se) {
      xe.value = !0;
      try {
        const Z = await c(Se);
        je.value = Z.gpu_types;
        const He = je.value.find((bt) => bt.available);
        He ? R.value = He.id : R.value = "";
      } catch {
        o("toast", "Failed to load GPU types", "error");
      } finally {
        xe.value = !1;
      }
    }
    $t(W, async (Se) => {
      if (!Se || qe.value) return;
      const Z = Ae.value.find((He) => He.id === E.value);
      Z && Z.data_center_id !== Se && (E.value = ""), await ge(Se);
    }), $t(E, async (Se) => {
      if (!Se) {
        je.value = [], R.value = "";
        return;
      }
      if (qe.value) return;
      const Z = Ae.value.find((He) => He.id === Se);
      Z && Z.data_center_id !== W.value ? W.value = Z.data_center_id : Z && await ge(Z.data_center_id);
    });
    async function ze() {
      Y.value = !0;
      try {
        A.value = await a();
      } catch {
        o("toast", "Failed to load environment summary", "error");
      } finally {
        Y.value = !1;
      }
    }
    async function Fe() {
      if (!(!R.value || !E.value)) {
        H.value = !0, O.value = null;
        try {
          const Se = await y();
          ce.value = Se, Se.can_export ? Se.warnings.models_without_sources.length > 0 ? ke.value = !0 : await Ze() : Ee.value = !0;
        } catch (Se) {
          O.value = {
            status: "error",
            message: Se instanceof Error ? Se.message : "Validation failed"
          }, o("toast", "Validation failed", "error");
        } finally {
          H.value = !1;
        }
      }
    }
    async function et() {
      ke.value = !1, await Ze();
    }
    async function ot() {
      try {
        const Se = await y();
        ce.value = Se;
      } catch {
        console.error("Re-validation failed");
      }
    }
    async function Ze() {
      z.value = !0;
      try {
        let Se;
        if (se.value === "SPOT") {
          const He = je.value.find((bt) => bt.id === R.value);
          He && (Se = te.value === "SECURE" ? He.secureSpotPrice : He.communitySpotPrice);
        }
        const Z = await u({
          gpu_type_id: R.value,
          pod_name: oe.value || "my-comfyui-deploy",
          network_volume_id: E.value,
          cloud_type: te.value,
          pricing_type: se.value,
          spot_bid: Se,
          import_source: fe.value
        });
        O.value = Z, Z.status === "success" && Z.pod_id ? (Te.value = Z.pod_id, ie.value = !0, xt(Z.pod_id), o("toast", "Deployment started", "success"), o("deployed")) : o("toast", Z.message, "error");
      } catch (Se) {
        O.value = {
          status: "error",
          message: Se instanceof Error ? Se.message : "Deployment failed"
        }, o("toast", "Deployment failed", "error");
      } finally {
        z.value = !1;
      }
    }
    function xt(Se) {
      ae(Se), U.value = window.setInterval(() => ae(Se), 3e3);
    }
    function _t() {
      U.value && (clearInterval(U.value), U.value = null);
    }
    async function ae(Se) {
      try {
        const Z = await m(Se);
        Ye.value = Z, (Z.phase === "READY" || Z.phase === "ERROR" || Z.phase === "STOPPED") && (_t(), Z.phase === "READY" && o("toast", "ComfyUI is ready!", "success"), o("deployed"));
      } catch (Z) {
        console.error("Failed to poll deployment status:", Z);
      }
    }
    function G() {
      ie.value = !1, _t(), Te.value = null, Ye.value = null;
    }
    function de() {
      var Se;
      (Se = Ye.value) != null && Se.comfyui_url && window.open(Ye.value.comfyui_url, "_blank", "noopener,noreferrer");
    }
    function Ge(Se) {
      return {
        STARTING_POD: "Starting Pod",
        SETTING_UP: "Setting Up Environment",
        READY: "Ready",
        STOPPED: "Stopped",
        ERROR: "Error"
      }[Se || ""] || "Initializing...";
    }
    function nt(Se) {
      return {
        STARTING_POD: 25,
        SETTING_UP: 60,
        READY: 100,
        STOPPED: 0,
        ERROR: 0
      }[Se || ""] ?? 10;
    }
    return rt(async () => {
      try {
        const Se = await f(!0);
        Se.has_key && Se.key_preview && (N.value = `****${Se.key_preview}`, Se.valid ? (T.value = !0, L.value = Se.credit_balance ?? null, M.value = { type: "success", message: "Connected to RunPod" }, await j()) : Se.error && (M.value = { type: "error", message: Se.error }));
      } catch {
      }
    }), Ys(() => {
      _t();
    }), (Se, Z) => {
      var He, bt, St, Jt, Cs, Dt;
      return n(), i(B, null, [
        t("div", r4, [
          S(pt, { title: "RUNPOD API KEY" }, {
            default: g(() => [
              t("div", c4, [
                t("div", u4, [
                  t("div", d4, [
                    lt(t("input", {
                      "onUpdate:modelValue": Z[0] || (Z[0] = (Ke) => N.value = Ke),
                      type: C.value ? "text" : "password",
                      class: "api-key-input",
                      placeholder: "Enter your RunPod API key (rp_...)",
                      disabled: T.value
                    }, null, 8, m4), [
                      [la, N.value]
                    ]),
                    t("button", {
                      class: "toggle-visibility-btn",
                      onClick: Z[1] || (Z[1] = (Ke) => C.value = !C.value),
                      title: C.value ? "Hide key" : "Show key"
                    }, d(C.value ? "👁" : "👁‍🗨"), 9, f4)
                  ]),
                  T.value ? h("", !0) : (n(), P(pe, {
                    key: 0,
                    variant: "secondary",
                    size: "xs",
                    loading: I.value,
                    disabled: !N.value || I.value,
                    onClick: Me
                  }, {
                    default: g(() => [...Z[16] || (Z[16] = [
                      b(" Test ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading", "disabled"])),
                  T.value ? (n(), P(pe, {
                    key: 1,
                    variant: "ghost",
                    size: "xs",
                    onClick: q
                  }, {
                    default: g(() => [...Z[17] || (Z[17] = [
                      b(" Clear ", -1)
                    ])]),
                    _: 1
                  })) : h("", !0)
                ]),
                M.value ? (n(), i("div", {
                  key: 0,
                  class: Re(["connection-status", M.value.type])
                }, [
                  t("span", v4, d(M.value.type === "success" ? "✓" : "✕"), 1),
                  t("span", p4, d(M.value.message), 1),
                  L.value !== null ? (n(), i("span", g4, " $" + d(L.value.toFixed(2)) + " credit ", 1)) : h("", !0)
                ], 2)) : h("", !0),
                Z[18] || (Z[18] = t("div", { class: "api-key-help" }, [
                  t("span", { class: "help-icon" }, "i"),
                  t("span", { class: "help-text" }, [
                    b(" Get your API key at "),
                    t("a", {
                      href: "https://runpod.io/console/user/settings",
                      target: "_blank",
                      rel: "noopener"
                    }, "runpod.io/console/user/settings"),
                    b(". Key stored locally, never sent to ComfyGit servers. ")
                  ])
                ], -1))
              ])
            ]),
            _: 1
          }),
          T.value ? (n(), P(pt, {
            key: 0,
            title: "CONFIGURATION"
          }, {
            default: g(() => [
              t("div", h4, [
                t("div", y4, [
                  Z[19] || (Z[19] = t("label", { class: "config-label" }, "Region", -1)),
                  lt(t("select", {
                    "onUpdate:modelValue": Z[2] || (Z[2] = (Ke) => W.value = Ke),
                    class: "config-select",
                    disabled: le.value
                  }, [
                    le.value ? (n(), i("option", _4, "Loading...")) : W.value ? h("", !0) : (n(), i("option", k4, "Select a region")),
                    (n(!0), i(B, null, he(ee.value, (Ke) => (n(), i("option", {
                      key: Ke.id,
                      value: Ke.id,
                      disabled: !Ke.available
                    }, d(Ke.id) + " (" + d(Ke.name) + ")" + d(Ke.available ? "" : " [Unavailable]"), 9, b4))), 128))
                  ], 8, w4), [
                    [$s, W.value]
                  ])
                ]),
                t("div", $4, [
                  Z[24] || (Z[24] = t("label", { class: "config-label" }, "Network Volume", -1)),
                  qe.value ? (n(), i("div", C4, "Loading volumes...")) : De.value.length === 0 ? (n(), i(B, { key: 1 }, [
                    t("div", x4, [
                      Z[20] || (Z[20] = t("span", { class: "no-volumes-icon" }, "⚠", -1)),
                      t("span", S4, "No volumes in " + d(W.value || "this region"), 1)
                    ]),
                    Z[21] || (Z[21] = t("p", { class: "volume-help" }, " Network volumes provide persistent storage that survives pod termination. Create one on RunPod first: ", -1)),
                    Z[22] || (Z[22] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-link"
                    }, " Create Volume on RunPod → ", -1))
                  ], 64)) : (n(), i(B, { key: 2 }, [
                    lt(t("select", {
                      "onUpdate:modelValue": Z[3] || (Z[3] = (Ke) => E.value = Ke),
                      class: "config-select"
                    }, [
                      (n(!0), i(B, null, he(De.value, (Ke) => (n(), i("option", {
                        key: Ke.id,
                        value: Ke.id
                      }, d(Ke.name) + " (" + d(Ke.size_gb) + "GB) ", 9, I4))), 128))
                    ], 512), [
                      [$s, E.value]
                    ]),
                    Z[23] || (Z[23] = t("a", {
                      href: "https://www.runpod.io/console/user/storage",
                      target: "_blank",
                      rel: "noopener",
                      class: "create-volume-inline-link"
                    }, " + Create new volume ", -1))
                  ], 64))
                ]),
                t("div", E4, [
                  Z[25] || (Z[25] = t("label", { class: "config-label" }, "GPU Type", -1)),
                  lt(t("select", {
                    "onUpdate:modelValue": Z[4] || (Z[4] = (Ke) => R.value = Ke),
                    class: "config-select",
                    disabled: xe.value || !E.value
                  }, [
                    E.value ? xe.value ? (n(), i("option", R4, "Loading GPUs...")) : we.value.length === 0 ? (n(), i("option", M4, "No GPUs available in this region")) : h("", !0) : (n(), i("option", P4, "Select a volume first")),
                    (n(!0), i(B, null, he(we.value, (Ke) => (n(), i("option", {
                      key: Ke.id,
                      value: Ke.id
                    }, d(Ke.displayName) + " (" + d(Ke.memoryInGb) + "GB) - $" + d(te.value === "SECURE" ? (Ke.securePrice ?? 0).toFixed(2) : (Ke.communityPrice ?? 0).toFixed(2)) + "/hr " + d(Ke.stockStatus ? `[${Ke.stockStatus}]` : ""), 9, D4))), 128))
                  ], 8, T4), [
                    [$s, R.value]
                  ])
                ]),
                t("div", L4, [
                  Z[26] || (Z[26] = t("label", { class: "config-label" }, "Cloud Type", -1)),
                  t("div", N4, [
                    t("label", U4, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[5] || (Z[5] = (Ke) => te.value = Ke),
                        value: "SECURE"
                      }, null, 512), [
                        [rs, te.value]
                      ]),
                      t("span", A4, "Secure ($" + d(Ue("SECURE")) + "/hr)", 1)
                    ]),
                    t("label", O4, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[6] || (Z[6] = (Ke) => te.value = Ke),
                        value: "COMMUNITY",
                        disabled: ""
                      }, null, 512), [
                        [rs, te.value]
                      ]),
                      t("span", z4, "Community ($" + d(Ue("COMMUNITY")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", F4, [
                  Z[27] || (Z[27] = t("label", { class: "config-label" }, [
                    b(" Pricing "),
                    t("span", {
                      class: "info-tooltip",
                      title: "On-Demand pods run until you stop them. Spot pods are cheaper but may be interrupted if capacity is needed."
                    }, "ⓘ")
                  ], -1)),
                  t("div", V4, [
                    t("label", B4, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[7] || (Z[7] = (Ke) => se.value = Ke),
                        value: "ON_DEMAND"
                      }, null, 512), [
                        [rs, se.value]
                      ]),
                      t("span", W4, "On-Demand ($" + d(Ue("ON_DEMAND")) + "/hr)", 1)
                    ]),
                    t("label", G4, [
                      lt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": Z[8] || (Z[8] = (Ke) => se.value = Ke),
                        value: "SPOT",
                        disabled: ""
                      }, null, 512), [
                        [rs, se.value]
                      ]),
                      t("span", j4, "Spot ($" + d(Ue("SPOT")) + "/hr)", 1)
                    ])
                  ])
                ]),
                t("div", H4, [
                  Z[28] || (Z[28] = t("label", { class: "config-label" }, "Pod Name", -1)),
                  lt(t("input", {
                    "onUpdate:modelValue": Z[9] || (Z[9] = (Ke) => oe.value = Ke),
                    type: "text",
                    class: "config-input",
                    placeholder: "my-comfyui-deploy"
                  }, null, 512), [
                    [Yt, oe.value]
                  ])
                ])
              ])
            ]),
            _: 1
          })) : h("", !0),
          T.value ? (n(), P(pt, {
            key: 1,
            title: "DEPLOY SOURCE"
          }, {
            default: g(() => [
              Q.value ? (n(), i("div", K4, "Loading remotes...")) : X.value.length === 0 ? (n(), i("div", q4, [
                Z[30] || (Z[30] = t("div", { class: "empty-message" }, [
                  t("span", { class: "empty-icon" }, "🌐"),
                  t("span", { class: "empty-text" }, "No Git remotes configured"),
                  t("p", { class: "empty-help" }, "Configure a remote repository to deploy your environment.")
                ], -1)),
                S(pe, {
                  variant: "primary",
                  size: "xs",
                  onClick: Z[10] || (Z[10] = (Ke) => o("navigate", "remotes"))
                }, {
                  default: g(() => [...Z[29] || (Z[29] = [
                    b(" Go to Remotes Tab → ", -1)
                  ])]),
                  _: 1
                })
              ])) : (n(), i(B, { key: 2 }, [
                t("div", Y4, [
                  (n(!0), i(B, null, he(X.value, (Ke) => (n(), P(Jr, {
                    key: Ke.name,
                    remote: Ke,
                    "sync-status": V.value[Ke.name],
                    "is-selected": ne.value === Ke.name,
                    "is-fetching": re.value === Ke.name,
                    "is-pushing": F.value === Ke.name,
                    onFetch: Ie,
                    onPush: Ce,
                    onSelect: Le
                  }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
                ]),
                Pe.value && Pe.value.ahead > 0 ? (n(), i("div", Q4, [
                  Z[31] || (Z[31] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("div", J4, [
                    t("strong", null, d(Pe.value.ahead) + " unpushed commit" + d(Pe.value.ahead !== 1 ? "s" : ""), 1),
                    t("p", null, "Push to '" + d(ne.value) + "' before deploying to include your latest changes.", 1)
                  ]),
                  S(pe, {
                    variant: "primary",
                    size: "xs",
                    loading: F.value === ne.value,
                    onClick: Z[11] || (Z[11] = (Ke) => ne.value && Ce(ne.value))
                  }, {
                    default: g(() => [
                      b(" Push to " + d(ne.value), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ])) : h("", !0),
                t("div", X4, [
                  S(pe, {
                    variant: "link",
                    size: "xs",
                    onClick: Z[12] || (Z[12] = (Ke) => o("navigate", "remotes"))
                  }, {
                    default: g(() => [...Z[32] || (Z[32] = [
                      b(" Manage remotes → ", -1)
                    ])]),
                    _: 1
                  })
                ])
              ], 64))
            ]),
            _: 1
          })) : h("", !0),
          T.value ? (n(), P(pt, {
            key: 2,
            title: "ENVIRONMENT SUMMARY"
          }, {
            default: g(() => [
              t("div", Z4, [
                Y.value ? (n(), i("div", eI, "Loading environment summary...")) : A.value ? (n(), i(B, { key: 1 }, [
                  t("div", tI, [
                    Z[33] || (Z[33] = t("span", { class: "summary-label" }, "ComfyUI", -1)),
                    t("span", sI, d(A.value.comfyui_version), 1)
                  ]),
                  t("div", oI, [
                    Z[34] || (Z[34] = t("span", { class: "summary-label" }, "Nodes", -1)),
                    t("span", nI, d(A.value.node_count) + " custom nodes", 1)
                  ]),
                  t("div", aI, [
                    Z[35] || (Z[35] = t("span", { class: "summary-label" }, "Models", -1)),
                    t("span", lI, d(A.value.model_count) + " models", 1)
                  ]),
                  A.value.models_with_sources > 0 ? (n(), i("div", iI, [
                    t("span", rI, "└─ " + d(A.value.models_with_sources) + " with sources (auto-download)", 1)
                  ])) : h("", !0),
                  A.value.models_without_sources > 0 ? (n(), i("div", cI, [
                    t("span", uI, "└─ " + d(A.value.models_without_sources) + " without sources (manual upload)", 1)
                  ])) : h("", !0),
                  t("div", dI, [
                    Z[36] || (Z[36] = t("span", { class: "summary-label" }, "Workflows", -1)),
                    t("span", mI, d(A.value.workflow_count) + " committed", 1)
                  ]),
                  t("div", fI, [
                    Z[37] || (Z[37] = t("span", { class: "summary-label" }, "Package", -1)),
                    t("span", vI, "~" + d(A.value.estimated_package_size_mb) + " MB", 1)
                  ])
                ], 64)) : h("", !0)
              ])
            ]),
            _: 1
          })) : h("", !0),
          T.value && ve.value ? (n(), P(pt, {
            key: 3,
            title: "DEPLOYMENT SUMMARY"
          }, {
            default: g(() => {
              var Ke, ns;
              return [
                t("div", pI, [
                  t("div", gI, [
                    t("div", hI, [
                      Z[42] || (Z[42] = t("div", { class: "column-header" }, "Pricing", -1)),
                      t("div", yI, [
                        Z[38] || (Z[38] = t("span", { class: "pricing-label" }, "GPU:", -1)),
                        t("span", wI, "$" + d(ve.value.gpu.toFixed(2)) + "/hr", 1)
                      ]),
                      t("div", _I, [
                        Z[39] || (Z[39] = t("span", { class: "pricing-label" }, "Volume:", -1)),
                        t("span", kI, "$" + d(ve.value.volume.toFixed(3)) + "/hr", 1)
                      ]),
                      t("div", bI, [
                        Z[40] || (Z[40] = t("span", { class: "pricing-label" }, "Disk:", -1)),
                        t("span", $I, "$" + d(ve.value.container.toFixed(3)) + "/hr", 1)
                      ]),
                      Z[43] || (Z[43] = t("div", { class: "pricing-divider" }, null, -1)),
                      t("div", CI, [
                        Z[41] || (Z[41] = t("span", { class: "pricing-label" }, "Total:", -1)),
                        t("span", xI, "~$" + d(ve.value.total.toFixed(2)) + "/hr", 1)
                      ])
                    ]),
                    t("div", SI, [
                      Z[45] || (Z[45] = t("div", { class: "column-header" }, "Pod Specs", -1)),
                      t("div", II, [
                        t("span", null, d(((Ke = je.value.find((ps) => ps.id === R.value)) == null ? void 0 : Ke.displayName) || "GPU") + " (" + d(((ns = je.value.find((ps) => ps.id === R.value)) == null ? void 0 : ns.memoryInGb) || 0) + "GB VRAM)", 1)
                      ]),
                      t("div", EI, [
                        t("span", null, "Region: " + d(W.value), 1)
                      ]),
                      be.value ? (n(), i("div", TI, [
                        t("span", null, "Volume: " + d(be.value.name), 1)
                      ])) : h("", !0),
                      se.value === "SPOT" ? (n(), i("div", PI, [...Z[44] || (Z[44] = [
                        t("span", null, "⚠ Spot instance - may be interrupted", -1)
                      ])])) : h("", !0)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          })) : h("", !0),
          T.value ? (n(), i("div", RI, [
            S(pe, {
              variant: "primary",
              size: "md",
              loading: H.value || z.value,
              disabled: !Be.value,
              onClick: Fe
            }, {
              default: g(() => [
                Z[46] || (Z[46] = t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M8 1L3 6h3v5h4V6h3L8 1z" }),
                  t("path", { d: "M14 12v2H2v-2H0v4h16v-4h-2z" })
                ], -1)),
                b(" " + d(H.value ? "Validating..." : z.value ? "Deploying..." : "Deploy to RunPod"), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])) : h("", !0),
          O.value ? (n(), P(pt, {
            key: 5,
            title: "DEPLOY STATUS"
          }, {
            default: g(() => [
              S(Pt, {
                status: O.value.status === "success" ? "synced" : "broken"
              }, io({
                icon: g(() => [
                  b(d(O.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: g(() => [
                  b(d(O.value.status === "success" ? "Deployment Started" : "Deployment Failed"), 1)
                ]),
                subtitle: g(() => [
                  b(d(O.value.message), 1)
                ]),
                actions: g(() => [
                  S(pe, {
                    variant: "ghost",
                    size: "xs",
                    onClick: Z[13] || (Z[13] = (Ke) => O.value = null)
                  }, {
                    default: g(() => [...Z[47] || (Z[47] = [
                      b(" Dismiss ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 2
              }, [
                O.value.pod_id ? {
                  name: "details",
                  fn: g(() => [
                    S(yt, {
                      label: "Pod ID:",
                      value: O.value.pod_id
                    }, null, 8, ["value"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["status"])
            ]),
            _: 1
          })) : h("", !0)
        ]),
        ie.value ? (n(), P(kt, {
          key: 0,
          title: "Deploying to RunPod",
          size: "sm",
          "show-close-button": ((He = Ye.value) == null ? void 0 : He.phase) === "READY" || ((bt = Ye.value) == null ? void 0 : bt.phase) === "ERROR" || ((St = Ye.value) == null ? void 0 : St.phase) === "STOPPED",
          "close-on-overlay-click": !1,
          onClose: G
        }, io({
          body: g(() => {
            var Ke, ns, ps, ro, co, uo, Qs, mo, fo, vo, po, go;
            return [
              t("div", MI, [
                t("div", DI, [
                  t("div", {
                    class: Re(["phase-icon", (ns = (Ke = Ye.value) == null ? void 0 : Ke.phase) == null ? void 0 : ns.toLowerCase()])
                  }, [
                    ((ps = Ye.value) == null ? void 0 : ps.phase) === "READY" ? (n(), i("span", LI, "✓")) : ((ro = Ye.value) == null ? void 0 : ro.phase) === "ERROR" ? (n(), i("span", NI, "✕")) : ((co = Ye.value) == null ? void 0 : co.phase) === "STOPPED" ? (n(), i("span", UI, "○")) : (n(), i("span", AI, "⟳"))
                  ], 2),
                  t("div", OI, [
                    t("div", zI, d(Ge((uo = Ye.value) == null ? void 0 : uo.phase)), 1),
                    t("div", FI, d(((Qs = Ye.value) == null ? void 0 : Qs.phase_detail) || "Starting..."), 1)
                  ])
                ]),
                S(ra, {
                  progress: nt((mo = Ye.value) == null ? void 0 : mo.phase),
                  variant: ((fo = Ye.value) == null ? void 0 : fo.phase) === "ERROR" ? "error" : ((vo = Ye.value) == null ? void 0 : vo.phase) === "READY" ? "success" : "default"
                }, null, 8, ["progress", "variant"]),
                ((po = Ye.value) == null ? void 0 : po.phase) === "READY" ? (n(), i("div", VI, [
                  S(pe, {
                    variant: "primary",
                    size: "md",
                    onClick: de
                  }, {
                    default: g(() => [...Z[48] || (Z[48] = [
                      b(" Open ComfyUI ", -1)
                    ])]),
                    _: 1
                  })
                ])) : h("", !0),
                t("div", BI, [
                  (go = Ye.value) != null && go.console_url ? (n(), i("a", {
                    key: 0,
                    href: Ye.value.console_url,
                    target: "_blank",
                    rel: "noopener"
                  }, " View in RunPod Console → ", 8, WI)) : h("", !0)
                ])
              ])
            ];
          }),
          _: 2
        }, [
          ((Jt = Ye.value) == null ? void 0 : Jt.phase) === "READY" || ((Cs = Ye.value) == null ? void 0 : Cs.phase) === "ERROR" || ((Dt = Ye.value) == null ? void 0 : Dt.phase) === "STOPPED" ? {
            name: "footer",
            fn: g(() => [
              S(pe, {
                variant: "ghost",
                size: "xs",
                onClick: G
              }, {
                default: g(() => [...Z[49] || (Z[49] = [
                  b(" Close ", -1)
                ])]),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["show-close-button"])) : h("", !0),
        Ee.value && ce.value ? (n(), P(Kr, {
          key: 1,
          issues: ce.value.blocking_issues,
          onClose: Z[14] || (Z[14] = (Ke) => Ee.value = !1)
        }, null, 8, ["issues"])) : h("", !0),
        ke.value && ce.value ? (n(), P(qr, {
          key: 2,
          models: ce.value.warnings.models_without_sources,
          onConfirm: et,
          onCancel: Z[15] || (Z[15] = (Ke) => ke.value = !1),
          onRevalidate: ot
        }, null, 8, ["models"])) : h("", !0)
      ], 64);
    };
  }
}), jI = /* @__PURE__ */ _e(GI, [["__scopeId", "data-v-522cd4d9"]]), HI = { class: "worker-header" }, KI = { class: "worker-status" }, qI = { class: "worker-name" }, YI = { class: "worker-actions" }, QI = { class: "worker-details" }, JI = { class: "detail-item" }, XI = { class: "detail-value" }, ZI = {
  key: 0,
  class: "detail-item"
}, e6 = { class: "detail-value" }, t6 = {
  key: 1,
  class: "detail-item"
}, s6 = { class: "detail-value mode-badge" }, o6 = {
  key: 0,
  class: "worker-stats"
}, n6 = {
  key: 0,
  class: "stat-item"
}, a6 = { key: 0 }, l6 = {
  key: 1,
  class: "worker-stats offline"
}, i6 = /* @__PURE__ */ ye({
  __name: "WorkerCard",
  props: {
    worker: {},
    isActionLoading: { type: Boolean }
  },
  emits: ["deploy", "remove"],
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Re(["worker-card", { offline: e.worker.status === "offline" }])
    }, [
      t("div", HI, [
        t("div", KI, [
          t("span", {
            class: Re(["status-dot", e.worker.status])
          }, null, 2),
          t("span", qI, d(e.worker.name), 1)
        ]),
        t("div", YI, [
          e.worker.status === "online" ? (n(), P(pe, {
            key: 0,
            variant: "primary",
            size: "xs",
            disabled: e.isActionLoading,
            onClick: o[0] || (o[0] = (a) => s.$emit("deploy", e.worker))
          }, {
            default: g(() => [...o[2] || (o[2] = [
              b(" Deploy ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"])) : h("", !0),
          S(pe, {
            variant: "ghost",
            size: "xs",
            loading: e.isActionLoading,
            onClick: o[1] || (o[1] = (a) => s.$emit("remove", e.worker.name))
          }, {
            default: g(() => [...o[3] || (o[3] = [
              b(" Remove ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ])
      ]),
      t("div", QI, [
        t("span", JI, [
          t("span", XI, d(e.worker.host) + ":" + d(e.worker.port), 1)
        ]),
        e.worker.gpu_info ? (n(), i("span", ZI, [
          o[4] || (o[4] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", e6, d(e.worker.gpu_info), 1)
        ])) : h("", !0),
        e.worker.mode ? (n(), i("span", t6, [
          o[5] || (o[5] = t("span", { class: "detail-label" }, "•", -1)),
          t("span", s6, d(e.worker.mode), 1)
        ])) : h("", !0)
      ]),
      e.worker.status === "online" ? (n(), i("div", o6, [
        o[6] || (o[6] = t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value online" }, "Online")
        ], -1)),
        e.worker.instance_count !== void 0 ? (n(), i("span", n6, [
          b(" • " + d(e.worker.instance_count) + " instance" + d(e.worker.instance_count !== 1 ? "s" : "") + " ", 1),
          e.worker.running_count ? (n(), i("span", a6, "(" + d(e.worker.running_count) + " running)", 1)) : h("", !0)
        ])) : h("", !0)
      ])) : (n(), i("div", l6, [...o[7] || (o[7] = [
        t("span", { class: "stat-item" }, [
          b(" Status: "),
          t("span", { class: "stat-value offline" }, "Offline")
        ], -1)
      ])]))
    ], 2));
  }
}), r6 = /* @__PURE__ */ _e(i6, [["__scopeId", "data-v-b1be7134"]]), c6 = { class: "add-worker-content" }, u6 = { class: "manual-form" }, d6 = { class: "form-row" }, m6 = { class: "form-row-inline" }, f6 = { class: "form-field flex-2" }, v6 = { class: "form-field flex-1" }, p6 = { class: "form-row" }, g6 = { class: "api-key-wrapper" }, h6 = ["type"], y6 = { class: "result-icon" }, w6 = { class: "result-content" }, _6 = { class: "result-message" }, k6 = {
  key: 0,
  class: "result-detail"
}, b6 = { class: "modal-actions" }, $6 = /* @__PURE__ */ ye({
  __name: "AddWorkerModal",
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = qs({
      name: "",
      host: "",
      port: 9090,
      apiKey: ""
    }), r = _(!1), c = _(!1), u = _(!1), m = _(null), f = D(() => l.host && l.port && l.apiKey), v = D(() => l.name && l.host && l.port && l.apiKey);
    async function y() {
      if (f.value) {
        c.value = !0, m.value = null;
        try {
          const p = await a({
            host: l.host,
            port: l.port,
            api_key: l.apiKey
          });
          p.status === "success" ? (m.value = {
            type: "success",
            message: p.message,
            gpu_info: p.gpu_info
          }, !l.name && p.gpu_info && (l.name = `worker-${l.host.split(".").pop()}`)) : m.value = {
            type: "error",
            message: p.message
          };
        } catch (p) {
          m.value = {
            type: "error",
            message: p instanceof Error ? p.message : "Connection test failed"
          };
        } finally {
          c.value = !1;
        }
      }
    }
    function k() {
      v.value && (u.value = !0, o("add", {
        name: l.name,
        host: l.host,
        port: l.port,
        api_key: l.apiKey
      }));
    }
    return (p, w) => (n(), P(kt, {
      title: "ADD WORKER MANUALLY",
      size: "md",
      onClose: w[5] || (w[5] = (x) => p.$emit("close"))
    }, {
      body: g(() => [
        t("div", c6, [
          t("div", u6, [
            t("div", d6, [
              w[6] || (w[6] = t("label", { class: "form-label" }, "Worker Name", -1)),
              lt(t("input", {
                "onUpdate:modelValue": w[0] || (w[0] = (x) => l.name = x),
                type: "text",
                class: "form-input",
                placeholder: "my-gpu-worker"
              }, null, 512), [
                [Yt, l.name]
              ])
            ]),
            t("div", m6, [
              t("div", f6, [
                w[7] || (w[7] = t("label", { class: "form-label" }, "Host", -1)),
                lt(t("input", {
                  "onUpdate:modelValue": w[1] || (w[1] = (x) => l.host = x),
                  type: "text",
                  class: "form-input",
                  placeholder: "192.168.1.50"
                }, null, 512), [
                  [Yt, l.host]
                ])
              ]),
              t("div", v6, [
                w[8] || (w[8] = t("label", { class: "form-label" }, "Port", -1)),
                lt(t("input", {
                  "onUpdate:modelValue": w[2] || (w[2] = (x) => l.port = x),
                  type: "number",
                  class: "form-input",
                  placeholder: "9090"
                }, null, 512), [
                  [
                    Yt,
                    l.port,
                    void 0,
                    { number: !0 }
                  ]
                ])
              ])
            ]),
            t("div", p6, [
              w[9] || (w[9] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", g6, [
                lt(t("input", {
                  "onUpdate:modelValue": w[3] || (w[3] = (x) => l.apiKey = x),
                  type: r.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************"
                }, null, 8, h6), [
                  [la, l.apiKey]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: w[4] || (w[4] = (x) => r.value = !r.value),
                  type: "button"
                }, d(r.value ? "👁" : "👁‍🗨"), 1)
              ]),
              w[10] || (w[10] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            m.value ? (n(), i("div", {
              key: 0,
              class: Re(["test-result", m.value.type])
            }, [
              t("span", y6, d(m.value.type === "success" ? "✓" : "✕"), 1),
              t("div", w6, [
                t("span", _6, d(m.value.message), 1),
                m.value.gpu_info ? (n(), i("span", k6, "GPU: " + d(m.value.gpu_info), 1)) : h("", !0)
              ])
            ], 2)) : h("", !0)
          ])
        ])
      ]),
      footer: g(() => [
        t("div", b6, [
          S(pe, {
            variant: "ghost",
            size: "sm",
            loading: c.value,
            disabled: !f.value || c.value,
            onClick: y
          }, {
            default: g(() => [...w[11] || (w[11] = [
              b(" Test Connection ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(pe, {
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !v.value || u.value,
            onClick: k
          }, {
            default: g(() => [...w[12] || (w[12] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }));
  }
}), C6 = /* @__PURE__ */ _e($6, [["__scopeId", "data-v-07a00732"]]), x6 = { class: "discovered-content" }, S6 = {
  key: 0,
  class: "workers-list"
}, I6 = { class: "worker-info" }, E6 = { class: "worker-name" }, T6 = { class: "worker-address" }, P6 = {
  key: 0,
  class: "worker-gpu"
}, R6 = {
  key: 1,
  class: "empty-state"
}, M6 = {
  key: 2,
  class: "api-key-section"
}, D6 = { class: "selected-worker" }, L6 = { class: "selected-name" }, N6 = { class: "selected-address" }, U6 = { class: "form-row" }, A6 = { class: "api-key-wrapper" }, O6 = ["type"], z6 = { class: "result-icon" }, F6 = { class: "result-message" }, V6 = { class: "modal-actions" }, B6 = /* @__PURE__ */ ye({
  __name: "DiscoveredWorkersModal",
  props: {
    workers: {}
  },
  emits: ["close", "add"],
  setup(e, { emit: s }) {
    const o = s, { testWorkerConnection: a } = ut(), l = _(null), r = _(""), c = _(!1), u = _(!1), m = _(null), f = _(null);
    async function v(k) {
      var p;
      l.value = k, r.value = "", f.value = null, await Et(), (p = m.value) == null || p.focus();
    }
    async function y() {
      if (!(!l.value || !r.value)) {
        u.value = !0, f.value = null;
        try {
          const k = await a({
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          });
          k.status === "success" ? o("add", {
            name: l.value.name,
            host: l.value.host,
            port: l.value.port,
            api_key: r.value
          }) : f.value = {
            type: "error",
            message: k.message
          };
        } catch (k) {
          f.value = {
            type: "error",
            message: k instanceof Error ? k.message : "Connection failed"
          };
        } finally {
          u.value = !1;
        }
      }
    }
    return (k, p) => (n(), P(kt, {
      title: "DISCOVERED WORKERS",
      size: "md",
      onClose: p[3] || (p[3] = (w) => k.$emit("close"))
    }, {
      body: g(() => [
        t("div", x6, [
          e.workers.length > 0 ? (n(), i("div", S6, [
            (n(!0), i(B, null, he(e.workers, (w) => (n(), i("div", {
              key: `${w.host}:${w.port}`,
              class: "worker-item"
            }, [
              t("div", I6, [
                t("span", E6, d(w.name), 1),
                t("span", T6, d(w.host) + ":" + d(w.port), 1),
                w.gpu_info ? (n(), i("span", P6, d(w.gpu_info), 1)) : h("", !0)
              ]),
              S(pe, {
                variant: "primary",
                size: "xs",
                onClick: (x) => v(w)
              }, {
                default: g(() => [...p[4] || (p[4] = [
                  b(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ]))), 128))
          ])) : (n(), i("div", R6, [...p[5] || (p[5] = [
            t("span", { class: "empty-icon" }, "📡", -1),
            t("span", { class: "empty-text" }, "No workers found on the network", -1),
            t("span", { class: "empty-help" }, [
              b("Make sure workers are running with "),
              t("code", null, "--broadcast")
            ], -1)
          ])])),
          l.value ? (n(), i("div", M6, [
            t("div", D6, [
              p[6] || (p[6] = t("span", { class: "selected-label" }, "Adding:", -1)),
              t("span", L6, d(l.value.name), 1),
              t("span", N6, "(" + d(l.value.host) + ":" + d(l.value.port) + ")", 1)
            ]),
            t("div", U6, [
              p[7] || (p[7] = t("label", { class: "form-label" }, "API Key", -1)),
              t("div", A6, [
                lt(t("input", {
                  ref_key: "apiKeyInput",
                  ref: m,
                  "onUpdate:modelValue": p[0] || (p[0] = (w) => r.value = w),
                  type: c.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "cg_wk_*********************************",
                  onKeyup: ss(y, ["enter"])
                }, null, 40, O6), [
                  [la, r.value]
                ]),
                t("button", {
                  class: "toggle-visibility",
                  onClick: p[1] || (p[1] = (w) => c.value = !c.value),
                  type: "button"
                }, d(c.value ? "👁" : "👁‍🗨"), 1)
              ]),
              p[8] || (p[8] = t("div", { class: "form-help" }, [
                t("span", { class: "help-icon" }, "ⓘ"),
                b(" Run "),
                t("code", null, "cg-deploy worker setup"),
                b(" on the worker to get the key ")
              ], -1))
            ]),
            f.value ? (n(), i("div", {
              key: 0,
              class: Re(["test-result", f.value.type])
            }, [
              t("span", z6, d(f.value.type === "success" ? "✓" : "✕"), 1),
              t("span", F6, d(f.value.message), 1)
            ], 2)) : h("", !0)
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", V6, [
          l.value ? (n(), P(pe, {
            key: 0,
            variant: "ghost",
            size: "sm",
            onClick: p[2] || (p[2] = (w) => {
              l.value = null, r.value = "", f.value = null;
            })
          }, {
            default: g(() => [...p[9] || (p[9] = [
              b(" Back ", -1)
            ])]),
            _: 1
          })) : h("", !0),
          l.value ? (n(), P(pe, {
            key: 1,
            variant: "primary",
            size: "sm",
            loading: u.value,
            disabled: !r.value || u.value,
            onClick: y
          }, {
            default: g(() => [...p[10] || (p[10] = [
              b(" Add Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])) : h("", !0)
        ])
      ]),
      _: 1
    }));
  }
}), W6 = /* @__PURE__ */ _e(B6, [["__scopeId", "data-v-5a3e40a4"]]), G6 = { class: "deploy-content" }, j6 = { class: "section" }, H6 = {
  key: 0,
  class: "loading-text"
}, K6 = {
  key: 1,
  class: "empty-remotes"
}, q6 = {
  key: 2,
  class: "remotes-list"
}, Y6 = { class: "section" }, Q6 = { class: "mode-options" }, J6 = { class: "mode-option" }, X6 = ["disabled"], Z6 = { class: "mode-option" }, eE = { class: "section" }, tE = {
  key: 0,
  class: "section"
}, sE = { class: "summary-row" }, oE = {
  key: 1,
  class: "sync-warning"
}, nE = { class: "warning-content" }, aE = { class: "modal-actions" }, lE = /* @__PURE__ */ ye({
  __name: "DeployToWorkerModal",
  props: {
    worker: {}
  },
  emits: ["close", "toast", "deployed"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getRemotes: l,
      getRemoteSyncStatus: r,
      fetchRemote: c,
      pushToRemote: u,
      getDeploySummary: m,
      deployToWorker: f
    } = ut(), v = _([]), y = _({}), k = _(!1), p = _(null), w = _(null), x = _(null), $ = _(o.worker.mode || "native"), C = _(""), N = _(null), T = _(!1), I = D(() => p.value && y.value[p.value] || null), M = D(() => {
      if (!p.value) return null;
      const X = v.value.find((V) => V.name === p.value);
      return (X == null ? void 0 : X.fetch_url) || null;
    }), L = D(() => M.value && !T.value);
    async function W() {
      k.value = !0;
      try {
        const X = await l();
        v.value = X.remotes, await Promise.all(
          X.remotes.map(async (Q) => {
            const ne = await r(Q.name);
            ne && (y.value[Q.name] = ne);
          })
        );
        const V = X.remotes.find((Q) => Q.is_default);
        V ? p.value = V.name : X.remotes.length > 0 && (p.value = X.remotes[0].name);
      } catch {
        a("toast", "Failed to load remotes", "error");
      } finally {
        k.value = !1;
      }
    }
    async function E() {
      try {
        N.value = await m();
      } catch {
      }
    }
    async function R(X) {
      w.value = X;
      try {
        await c(X);
        const V = await r(X);
        V && (y.value[X] = V), a("toast", `Fetched from ${X}`, "success");
      } catch {
        a("toast", "Fetch failed", "error");
      } finally {
        w.value = null;
      }
    }
    async function te(X) {
      x.value = X;
      try {
        await u(X, { force: !1 });
        const V = await r(X);
        V && (y.value[X] = V), a("toast", `Pushed to ${X}`, "success");
      } catch {
        a("toast", "Push failed", "error");
      } finally {
        x.value = null;
      }
    }
    function se(X) {
      p.value = X;
    }
    async function oe() {
      if (M.value) {
        T.value = !0;
        try {
          const X = await f(o.worker.name, {
            import_source: M.value,
            mode: $.value,
            name: C.value || void 0
          });
          X.id ? (a("toast", `Deployment started: ${X.name || X.id}`, "success"), a("deployed")) : X.status === "error" ? a("toast", X.message || "Deployment failed", "error") : a("toast", "Unexpected response from worker", "error");
        } catch (X) {
          a("toast", X instanceof Error ? X.message : "Deployment failed", "error");
        } finally {
          T.value = !1;
        }
      }
    }
    return rt(() => {
      W(), E();
    }), (X, V) => (n(), P(kt, {
      title: `DEPLOY TO: ${e.worker.name}`,
      size: "md",
      onClose: V[5] || (V[5] = (Q) => X.$emit("close"))
    }, {
      body: g(() => [
        t("div", G6, [
          t("div", j6, [
            V[7] || (V[7] = t("div", { class: "section-label" }, "DEPLOY SOURCE", -1)),
            k.value ? (n(), i("div", H6, "Loading remotes...")) : v.value.length === 0 ? (n(), i("div", K6, [...V[6] || (V[6] = [
              t("span", { class: "empty-icon" }, "🌐", -1),
              t("span", { class: "empty-text" }, "No Git remotes configured", -1),
              t("p", { class: "empty-help" }, "Configure a remote repository to deploy.", -1)
            ])])) : (n(), i("div", q6, [
              (n(!0), i(B, null, he(v.value, (Q) => (n(), P(Jr, {
                key: Q.name,
                remote: Q,
                "sync-status": y.value[Q.name],
                "is-selected": p.value === Q.name,
                "is-fetching": w.value === Q.name,
                "is-pushing": x.value === Q.name,
                onFetch: R,
                onPush: te,
                onSelect: se
              }, null, 8, ["remote", "sync-status", "is-selected", "is-fetching", "is-pushing"]))), 128))
            ]))
          ]),
          t("div", Y6, [
            V[10] || (V[10] = t("div", { class: "section-label" }, "INSTANCE MODE", -1)),
            t("div", Q6, [
              t("label", J6, [
                lt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[0] || (V[0] = (Q) => $.value = Q),
                  value: "docker",
                  disabled: !e.worker.mode || e.worker.mode === "native"
                }, null, 8, X6), [
                  [rs, $.value]
                ]),
                V[8] || (V[8] = t("span", { class: "mode-label" }, "Docker (isolated container)", -1))
              ]),
              t("label", Z6, [
                lt(t("input", {
                  type: "radio",
                  "onUpdate:modelValue": V[1] || (V[1] = (Q) => $.value = Q),
                  value: "native"
                }, null, 512), [
                  [rs, $.value]
                ]),
                V[9] || (V[9] = t("span", { class: "mode-label" }, "Native (direct process)", -1))
              ])
            ])
          ]),
          t("div", eE, [
            V[11] || (V[11] = t("div", { class: "section-label" }, "INSTANCE NAME (optional)", -1)),
            lt(t("input", {
              "onUpdate:modelValue": V[2] || (V[2] = (Q) => C.value = Q),
              type: "text",
              class: "form-input",
              placeholder: "my-deployment"
            }, null, 512), [
              [Yt, C.value]
            ])
          ]),
          N.value ? (n(), i("div", tE, [
            V[12] || (V[12] = t("div", { class: "section-label" }, "ENVIRONMENT SUMMARY", -1)),
            t("div", sE, " ComfyUI: " + d(N.value.comfyui_version) + " • " + d(N.value.node_count) + " nodes • " + d(N.value.model_count) + " models • " + d(N.value.workflow_count) + " workflows ", 1)
          ])) : h("", !0),
          I.value && I.value.ahead > 0 ? (n(), i("div", oE, [
            V[14] || (V[14] = t("span", { class: "warning-icon" }, "⚠", -1)),
            t("div", nE, [
              t("strong", null, d(I.value.ahead) + " unpushed commit" + d(I.value.ahead !== 1 ? "s" : ""), 1),
              t("p", null, "Push to '" + d(p.value) + "' before deploying to include your latest changes.", 1)
            ]),
            S(pe, {
              variant: "primary",
              size: "xs",
              loading: x.value === p.value,
              onClick: V[3] || (V[3] = (Q) => p.value && te(p.value))
            }, {
              default: g(() => [...V[13] || (V[13] = [
                b(" Push ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : h("", !0)
        ])
      ]),
      footer: g(() => [
        t("div", aE, [
          S(pe, {
            variant: "ghost",
            size: "sm",
            onClick: V[4] || (V[4] = (Q) => X.$emit("close"))
          }, {
            default: g(() => [...V[15] || (V[15] = [
              b(" Cancel ", -1)
            ])]),
            _: 1
          }),
          S(pe, {
            variant: "primary",
            size: "sm",
            loading: T.value,
            disabled: !L.value || T.value,
            onClick: oe
          }, {
            default: g(() => [...V[16] || (V[16] = [
              b(" Deploy to Worker ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"])
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), iE = /* @__PURE__ */ _e(lE, [["__scopeId", "data-v-c12720d3"]]), rE = { class: "custom-tab" }, cE = { class: "section-header" }, uE = { class: "section-actions" }, dE = { class: "workers-content" }, mE = {
  key: 0,
  class: "loading-state"
}, fE = {
  key: 1,
  class: "empty-state"
}, vE = {
  key: 2,
  class: "workers-list"
}, pE = { class: "scan-icon" }, gE = { class: "scan-message" }, hE = /* @__PURE__ */ ye({
  __name: "CustomTab",
  emits: ["toast", "deployed"],
  setup(e, { emit: s }) {
    const o = s, {
      getCustomWorkers: a,
      addCustomWorker: l,
      removeCustomWorker: r,
      scanForWorkers: c
    } = ut(), u = _([]), m = _([]), f = _(!1), v = _(!1), y = _(null), k = _(!1), p = _(!1), w = _(null), x = _(null);
    async function $() {
      f.value = !0;
      try {
        const W = await a();
        u.value = W.workers;
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Failed to load workers", "error");
      } finally {
        f.value = !1;
      }
    }
    async function C() {
      v.value = !0, x.value = null;
      try {
        const W = await c(), E = W.discovered.filter(
          (R) => !u.value.some((te) => te.host === R.host && te.port === R.port)
        );
        m.value = E, E.length > 0 ? p.value = !0 : W.discovered.length > 0 ? x.value = {
          type: "info",
          message: "All discovered workers are already registered"
        } : x.value = {
          type: "info",
          message: "No workers found on the network. Make sure workers are running with --broadcast"
        };
      } catch (W) {
        o("toast", W instanceof Error ? W.message : "Network scan failed", "error");
      } finally {
        v.value = !1;
      }
    }
    async function N(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), k.value = !1, await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function T(W) {
      try {
        await l(W), o("toast", `Worker '${W.name}' added`, "success"), p.value = !1, await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to add worker", "error");
      }
    }
    async function I(W) {
      y.value = W;
      try {
        await r(W), o("toast", `Worker '${W}' removed`, "success"), await $();
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to remove worker", "error");
      } finally {
        y.value = null;
      }
    }
    function M(W) {
      w.value = W;
    }
    function L() {
      w.value = null, o("deployed");
    }
    return rt(() => {
      $();
    }), (W, E) => (n(), i("div", rE, [
      t("div", cE, [
        E[8] || (E[8] = t("span", { class: "section-title" }, "CUSTOM WORKERS", -1)),
        t("div", uE, [
          S(pe, {
            variant: "ghost",
            size: "xs",
            loading: v.value,
            disabled: v.value,
            onClick: C
          }, {
            default: g(() => [...E[6] || (E[6] = [
              b(" Scan Network ", -1)
            ])]),
            _: 1
          }, 8, ["loading", "disabled"]),
          S(pe, {
            variant: "secondary",
            size: "xs",
            onClick: E[0] || (E[0] = (R) => k.value = !0)
          }, {
            default: g(() => [...E[7] || (E[7] = [
              b(" + Add ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      t("div", dE, [
        f.value && u.value.length === 0 ? (n(), i("div", mE, [...E[9] || (E[9] = [
          t("span", { class: "spinner" }, null, -1),
          b(" Loading workers... ", -1)
        ])])) : u.value.length === 0 ? (n(), i("div", fE, [...E[10] || (E[10] = [
          t("div", { class: "empty-card" }, [
            t("span", { class: "empty-text" }, "No workers registered yet"),
            t("p", { class: "empty-help" }, " To add a custom worker: "),
            t("ol", { class: "setup-steps" }, [
              t("li", null, [
                b("On your GPU machine, run:"),
                t("br"),
                t("code", null, "cg-deploy worker setup"),
                t("br"),
                t("code", null, "cg-deploy worker up --broadcast")
              ]),
              t("li", null, 'Click "Scan Network" above or "Add" to enter manually')
            ])
          ], -1)
        ])])) : (n(), i("div", vE, [
          (n(!0), i(B, null, he(u.value, (R) => (n(), P(r6, {
            key: R.name,
            worker: R,
            "is-action-loading": y.value === R.name,
            onDeploy: M,
            onRemove: I
          }, null, 8, ["worker", "is-action-loading"]))), 128))
        ]))
      ]),
      x.value ? (n(), i("div", {
        key: 0,
        class: Re(["scan-result", x.value.type])
      }, [
        t("span", pE, d(x.value.type === "success" ? "✓" : "ⓘ"), 1),
        t("span", gE, d(x.value.message), 1),
        t("button", {
          class: "dismiss-btn",
          onClick: E[1] || (E[1] = (R) => x.value = null)
        }, "×")
      ], 2)) : h("", !0),
      p.value ? (n(), P(W6, {
        key: 1,
        workers: m.value,
        onClose: E[2] || (E[2] = (R) => p.value = !1),
        onAdd: T
      }, null, 8, ["workers"])) : h("", !0),
      k.value ? (n(), P(C6, {
        key: 2,
        onClose: E[3] || (E[3] = (R) => k.value = !1),
        onAdd: N
      })) : h("", !0),
      w.value ? (n(), P(iE, {
        key: 3,
        worker: w.value,
        onClose: E[4] || (E[4] = (R) => w.value = null),
        onToast: E[5] || (E[5] = (R, te) => o("toast", R, te)),
        onDeployed: L
      }, null, 8, ["worker"])) : h("", !0)
    ]));
  }
}), yE = /* @__PURE__ */ _e(hE, [["__scopeId", "data-v-1637dead"]]), Ea = "ComfyGit.Deploy.GitHubPAT";
function Xr(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function wE(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function _E() {
  function e() {
    try {
      return localStorage.getItem(Ea);
    } catch {
      return null;
    }
  }
  function s(l) {
    try {
      localStorage.setItem(Ea, l);
    } catch (r) {
      console.error("[useGitAuth] Failed to save token:", r);
    }
  }
  function o() {
    try {
      localStorage.removeItem(Ea);
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
    setToken: s,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: Xr,
    isRemoteHttps: wE
  };
}
const kE = { class: "settings-content" }, bE = { class: "settings-section" }, $E = {
  key: 0,
  class: "ssh-warning"
}, CE = { class: "form-row" }, xE = { class: "token-wrapper" }, SE = ["type"], IE = { class: "result-icon" }, EE = { class: "result-message" }, TE = { class: "token-actions" }, PE = /* @__PURE__ */ ye({
  __name: "DeploySettingsModal",
  emits: ["close", "saved"],
  setup(e, { emit: s }) {
    const o = s, { getToken: a, setToken: l, clearToken: r, hasToken: c } = _E(), { getRemotes: u, testGitAuth: m } = ut(), f = _(""), v = _(!1), y = _(!1), k = _(null), p = _(!1), w = D(() => c());
    rt(async () => {
      var T;
      const N = a();
      N && (f.value = N);
      try {
        const M = (T = (await u()).remotes) == null ? void 0 : T.find((L) => L.name === "origin");
        M && Xr(M.url) && (p.value = !0);
      } catch {
      }
    });
    async function x() {
      if (f.value) {
        y.value = !0, k.value = null;
        try {
          const N = await m(f.value);
          k.value = {
            type: N.status === "success" ? "success" : "error",
            message: N.message
          };
        } catch (N) {
          k.value = {
            type: "error",
            message: N instanceof Error ? N.message : "Connection test failed"
          };
        } finally {
          y.value = !1;
        }
      }
    }
    function $() {
      f.value && (l(f.value), o("saved"), o("close"));
    }
    function C() {
      r(), f.value = "", k.value = null;
    }
    return (N, T) => (n(), P(kt, {
      title: "DEPLOY SETTINGS",
      size: "sm",
      onClose: T[2] || (T[2] = (I) => N.$emit("close"))
    }, {
      body: g(() => [
        t("div", kE, [
          t("div", bE, [
            T[8] || (T[8] = t("div", { class: "section-header" }, [
              t("span", { class: "section-title" }, "GitHub Authentication")
            ], -1)),
            T[9] || (T[9] = t("p", { class: "section-description" }, " Required for push/pull to private repositories on cloud instances. ", -1)),
            p.value ? (n(), i("div", $E, [...T[3] || (T[3] = [
              t("span", { class: "warning-icon" }, "!", -1),
              t("div", { class: "warning-content" }, [
                t("strong", null, "SSH remote detected"),
                t("p", null, [
                  b("PAT authentication only works with HTTPS remotes. Consider converting your remote URL from "),
                  t("code", null, "git@github.com:..."),
                  b(" to "),
                  t("code", null, "https://github.com/...")
                ])
              ], -1)
            ])])) : h("", !0),
            t("div", CE, [
              T[4] || (T[4] = t("label", { class: "form-label" }, "Personal Access Token", -1)),
              t("div", xE, [
                lt(t("input", {
                  "onUpdate:modelValue": T[0] || (T[0] = (I) => f.value = I),
                  type: v.value ? "text" : "password",
                  class: "form-input",
                  placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx"
                }, null, 8, SE), [
                  [la, f.value]
                ]),
                t("button", {
                  type: "button",
                  class: "toggle-visibility",
                  onClick: T[1] || (T[1] = (I) => v.value = !v.value)
                }, d(v.value ? "Hide" : "Show"), 1)
              ]),
              T[5] || (T[5] = t("div", { class: "form-help" }, " Token is stored in your browser only. Never saved to the server. ", -1))
            ]),
            k.value ? (n(), i("div", {
              key: 1,
              class: Re(["test-result", k.value.type])
            }, [
              t("span", IE, d(k.value.type === "success" ? "✓" : "✕"), 1),
              t("span", EE, d(k.value.message), 1)
            ], 2)) : h("", !0),
            t("div", TE, [
              S(pe, {
                variant: "ghost",
                size: "sm",
                loading: y.value,
                disabled: !f.value || y.value,
                onClick: x
              }, {
                default: g(() => [...T[6] || (T[6] = [
                  b(" Test Connection ", -1)
                ])]),
                _: 1
              }, 8, ["loading", "disabled"]),
              w.value ? (n(), P(pe, {
                key: 0,
                variant: "destructive",
                size: "xs",
                onClick: C
              }, {
                default: g(() => [...T[7] || (T[7] = [
                  b(" Clear ", -1)
                ])]),
                _: 1
              })) : h("", !0)
            ])
          ])
        ])
      ]),
      footer: g(() => [
        S(pe, {
          variant: "primary",
          size: "sm",
          disabled: !f.value,
          onClick: $
        }, {
          default: g(() => [...T[10] || (T[10] = [
            b(" Save ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])
      ]),
      _: 1
    }));
  }
}), RE = /* @__PURE__ */ _e(PE, [["__scopeId", "data-v-b21588ad"]]), ME = /* @__PURE__ */ ye({
  __name: "DeploySection",
  emits: ["toast", "navigate"],
  setup(e, { emit: s }) {
    const o = s, {
      instances: a,
      isLoading: l,
      liveInstanceCount: r,
      refreshInstances: c,
      stopInstance: u,
      startInstance: m,
      terminateInstance: f,
      startPolling: v,
      stopPolling: y
    } = Qr(), k = _(!1), p = _(!1), w = _("instances"), x = _(null), $ = _(null), C = D(() => [
      {
        id: "instances",
        label: "Instances",
        badge: r.value > 0 ? String(r.value) : void 0
      },
      {
        id: "runpod",
        label: "RunPod"
      },
      {
        id: "custom",
        label: "Custom"
      }
    ]);
    async function N(W) {
      x.value = W.id;
      try {
        await u(W), o("toast", "Instance stopped", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to stop instance", "error");
      } finally {
        x.value = null;
      }
    }
    async function T(W) {
      x.value = W.id;
      try {
        await m(W), o("toast", "Instance starting...", "success");
      } catch (E) {
        o("toast", E instanceof Error ? E.message : "Failed to start instance", "error");
      } finally {
        x.value = null;
      }
    }
    function I(W) {
      $.value = W;
    }
    async function M() {
      const W = $.value;
      if (W) {
        $.value = null, x.value = W.id;
        try {
          await f(W), o("toast", "Instance terminated", "success");
        } catch (E) {
          o("toast", E instanceof Error ? E.message : "Failed to terminate instance", "error");
        } finally {
          x.value = null;
        }
      }
    }
    async function L() {
      await c(), w.value = "instances";
    }
    return rt(() => {
      c(), v();
    }), Ys(() => {
      y();
    }), (W, E) => (n(), i(B, null, [
      S(Wt, null, {
        header: g(() => [
          S(Gt, {
            title: "DEPLOY TO CLOUD",
            "show-info": !0,
            onInfoClick: E[1] || (E[1] = (R) => k.value = !0)
          }, {
            actions: g(() => [
              S(pe, {
                variant: "ghost",
                size: "xs",
                onClick: E[0] || (E[0] = (R) => p.value = !0)
              }, {
                default: g(() => [...E[10] || (E[10] = [
                  b(" Settings ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: g(() => [
          S(Br, {
            modelValue: w.value,
            "onUpdate:modelValue": E[2] || (E[2] = (R) => w.value = R),
            tabs: C.value
          }, null, 8, ["modelValue", "tabs"])
        ]),
        content: g(() => [
          w.value === "instances" ? (n(), P(q8, {
            key: 0,
            instances: Xe(a),
            "is-loading": Xe(l),
            "action-loading-id": x.value,
            onRefresh: Xe(c),
            onStop: N,
            onStart: T,
            onTerminate: I
          }, null, 8, ["instances", "is-loading", "action-loading-id", "onRefresh"])) : h("", !0),
          w.value === "runpod" ? (n(), P(jI, {
            key: 1,
            onToast: E[3] || (E[3] = (R, te) => o("toast", R, te)),
            onNavigate: E[4] || (E[4] = (R) => o("navigate", R)),
            onDeployed: L
          })) : h("", !0),
          w.value === "custom" ? (n(), P(yE, {
            key: 2,
            onToast: E[5] || (E[5] = (R, te) => o("toast", R, te)),
            onDeployed: L
          })) : h("", !0)
        ]),
        _: 1
      }),
      $.value ? (n(), P(vl, {
        key: 0,
        title: "Terminate Instance",
        message: `Are you sure you want to terminate '${$.value.name}'?`,
        warning: "This will permanently delete the instance and all data stored on it. This action cannot be undone.",
        "confirm-label": "Terminate",
        destructive: !0,
        onConfirm: M,
        onCancel: E[6] || (E[6] = (R) => $.value = null)
      }, null, 8, ["message"])) : h("", !0),
      S(vs, {
        show: k.value,
        title: "Deploy to Cloud",
        onClose: E[7] || (E[7] = (R) => k.value = !1)
      }, {
        content: g(() => [...E[11] || (E[11] = [
          t("div", { class: "deploy-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "What is Deploy?"),
              t("p", null, "Deploy lets you run your ComfyUI environment on cloud GPU instances using your own RunPod account (BYOK - Bring Your Own Key).")
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "What gets deployed:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  b(" - All committed workflows")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  b(" - Installed automatically")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  b(" - Downloaded from sources (when available)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  b(" - Environment settings")
                ])
              ])
            ]),
            t("div", { class: "info-section" }, [
              t("strong", null, "Cost Information:"),
              t("p", null, "You pay RunPod directly for GPU time. Costs vary by GPU type and cloud tier. Monitor your spend at runpod.io.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      p.value ? (n(), P(RE, {
        key: 1,
        onClose: E[8] || (E[8] = (R) => p.value = !1),
        onSaved: E[9] || (E[9] = (R) => o("toast", "GitHub token saved", "success"))
      })) : h("", !0)
    ], 64));
  }
}), DE = /* @__PURE__ */ _e(ME, [["__scopeId", "data-v-d4e32a10"]]), LE = { class: "header-info" }, NE = { class: "commit-hash" }, UE = {
  key: 0,
  class: "commit-refs"
}, AE = { class: "commit-message" }, OE = { class: "commit-date" }, zE = {
  key: 0,
  class: "loading"
}, FE = {
  key: 1,
  class: "changes-section"
}, VE = { class: "stats-row" }, BE = { class: "stat" }, WE = { class: "stat insertions" }, GE = { class: "stat deletions" }, jE = {
  key: 0,
  class: "change-group"
}, HE = {
  key: 1,
  class: "change-group"
}, KE = {
  key: 0,
  class: "version"
}, qE = {
  key: 2,
  class: "change-group"
}, YE = { class: "change-item" }, QE = /* @__PURE__ */ ye({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ut(), a = _(null), l = _(!0), r = D(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = D(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return rt(async () => {
      try {
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, m) => (n(), P(kt, {
      size: "md",
      "show-close-button": !1,
      onClose: m[3] || (m[3] = (f) => u.$emit("close"))
    }, {
      header: g(() => {
        var f, v, y, k;
        return [
          t("div", LE, [
            m[4] || (m[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", NE, d(((f = a.value) == null ? void 0 : f.short_hash) || e.commit.short_hash || ((v = e.commit.hash) == null ? void 0 : v.slice(0, 7))), 1),
            (k = (y = a.value) == null ? void 0 : y.refs) != null && k.length ? (n(), i("span", UE, [
              (n(!0), i(B, null, he(a.value.refs, (p) => (n(), i("span", {
                key: p,
                class: "ref-badge"
              }, d(p), 1))), 128))
            ])) : h("", !0)
          ]),
          S(Ne, {
            variant: "ghost",
            size: "sm",
            onClick: m[0] || (m[0] = (p) => u.$emit("close"))
          }, {
            default: g(() => [...m[5] || (m[5] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])]),
            _: 1
          })
        ];
      }),
      body: g(() => {
        var f, v;
        return [
          t("div", AE, d(((f = a.value) == null ? void 0 : f.message) || e.commit.message), 1),
          t("div", OE, d(((v = a.value) == null ? void 0 : v.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", zE, "Loading details...")) : a.value ? (n(), i("div", FE, [
            t("div", VE, [
              t("span", BE, d(a.value.stats.files_changed) + " files", 1),
              t("span", WE, "+" + d(a.value.stats.insertions), 1),
              t("span", GE, "-" + d(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", jE, [
              S(en, { variant: "section" }, {
                default: g(() => [...m[6] || (m[6] = [
                  b("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, he(a.value.changes.workflows.added, (y) => (n(), i("div", {
                key: "add-" + y,
                class: "change-item added"
              }, [
                m[7] || (m[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(y), 1)
              ]))), 128)),
              (n(!0), i(B, null, he(a.value.changes.workflows.modified, (y) => (n(), i("div", {
                key: "mod-" + y,
                class: "change-item modified"
              }, [
                m[8] || (m[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, d(y), 1)
              ]))), 128)),
              (n(!0), i(B, null, he(a.value.changes.workflows.deleted, (y) => (n(), i("div", {
                key: "del-" + y,
                class: "change-item deleted"
              }, [
                m[9] || (m[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(y), 1)
              ]))), 128))
            ])) : h("", !0),
            c.value ? (n(), i("div", HE, [
              S(en, { variant: "section" }, {
                default: g(() => [...m[10] || (m[10] = [
                  b("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, he(a.value.changes.nodes.added, (y) => (n(), i("div", {
                key: "add-" + y.name,
                class: "change-item added"
              }, [
                m[11] || (m[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, d(y.name), 1),
                y.version ? (n(), i("span", KE, "(" + d(y.version) + ")", 1)) : h("", !0)
              ]))), 128)),
              (n(!0), i(B, null, he(a.value.changes.nodes.removed, (y) => (n(), i("div", {
                key: "rem-" + y.name,
                class: "change-item deleted"
              }, [
                m[12] || (m[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, d(y.name), 1)
              ]))), 128))
            ])) : h("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", qE, [
              S(en, { variant: "section" }, {
                default: g(() => [...m[13] || (m[13] = [
                  b("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", YE, [
                m[14] || (m[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, d(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : h("", !0)
          ])) : h("", !0)
        ];
      }),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: m[1] || (m[1] = (f) => u.$emit("createBranch", e.commit))
        }, {
          default: g(() => [...m[15] || (m[15] = [
            b(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        S(Ne, {
          variant: "primary",
          onClick: m[2] || (m[2] = (f) => u.$emit("checkout", e.commit))
        }, {
          default: g(() => [...m[16] || (m[16] = [
            b(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), JE = /* @__PURE__ */ _e(QE, [["__scopeId", "data-v-d256ff6d"]]), XE = { class: "popover-header" }, ZE = { class: "popover-body" }, eT = {
  key: 0,
  class: "changes-summary"
}, tT = {
  key: 0,
  class: "change-item"
}, sT = {
  key: 1,
  class: "change-item"
}, oT = {
  key: 2,
  class: "change-item"
}, nT = {
  key: 3,
  class: "change-item"
}, aT = {
  key: 4,
  class: "change-item"
}, lT = {
  key: 5,
  class: "change-item"
}, iT = {
  key: 1,
  class: "no-changes"
}, rT = {
  key: 2,
  class: "loading"
}, cT = {
  key: 3,
  class: "issues-error"
}, uT = { class: "error-header" }, dT = { class: "error-title" }, mT = { class: "issues-list" }, fT = { class: "workflow-state" }, vT = { class: "message-section" }, pT = { class: "popover-footer" }, gT = {
  key: 1,
  class: "commit-popover"
}, hT = { class: "popover-header" }, yT = { class: "popover-body" }, wT = {
  key: 0,
  class: "changes-summary"
}, _T = {
  key: 0,
  class: "change-item"
}, kT = {
  key: 1,
  class: "change-item"
}, bT = {
  key: 2,
  class: "change-item"
}, $T = {
  key: 3,
  class: "change-item"
}, CT = {
  key: 4,
  class: "change-item"
}, xT = {
  key: 5,
  class: "change-item"
}, ST = {
  key: 1,
  class: "no-changes"
}, IT = {
  key: 2,
  class: "loading"
}, ET = {
  key: 3,
  class: "issues-error"
}, TT = { class: "error-header" }, PT = { class: "error-title" }, RT = { class: "issues-list" }, MT = { class: "workflow-state" }, DT = { class: "message-section" }, LT = { class: "popover-footer" }, NT = /* @__PURE__ */ ye({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ut(), r = _(""), c = _(!1), u = _(!1), m = D(() => {
      if (!o.status) return !1;
      const w = o.status.workflows;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || o.status.has_changes;
    }), f = D(() => {
      if (!o.status) return !1;
      const w = o.status.workflows, x = o.status.git_changes;
      return w.new.length > 0 || w.modified.length > 0 || w.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), v = D(() => {
      var w;
      return (w = o.status) != null && w.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), y = D(() => v.value.length > 0), k = D(() => y.value && !u.value);
    async function p() {
      var w, x, $, C;
      if (!(y.value && !u.value) && !(!m.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const N = await l(r.value.trim(), u.value);
          if (N.status === "success") {
            const T = `Committed: ${((w = N.summary) == null ? void 0 : w.new) || 0} new, ${((x = N.summary) == null ? void 0 : x.modified) || 0} modified, ${(($ = N.summary) == null ? void 0 : $.deleted) || 0} deleted`;
            a("committed", { success: !0, message: T });
          } else if (N.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (N.status === "blocked") {
            const T = ((C = N.issues) == null ? void 0 : C.map((I) => `${I.name}: ${I.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${T}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: N.message || "Commit failed" });
        } catch (N) {
          a("committed", { success: !1, message: N instanceof Error ? N.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (w, x) => e.asModal ? (n(), P(Mt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = ($) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = wt(() => {
          }, ["stop"]))
        }, [
          t("div", XE, [
            x[11] || (x[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = ($) => a("close"))
            }, [...x[10] || (x[10] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ]),
          t("div", ZE, [
            e.status && m.value ? (n(), i("div", eT, [
              e.status.workflows.new.length ? (n(), i("div", tT, [
                x[12] || (x[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : h("", !0),
              e.status.workflows.modified.length ? (n(), i("div", sT, [
                x[13] || (x[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
              ])) : h("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", oT, [
                x[14] || (x[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", nT, [
                x[15] || (x[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : h("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", aT, [
                x[16] || (x[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : h("", !0),
              f.value ? h("", !0) : (n(), i("div", lT, [...x[17] || (x[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", iT, " No changes to commit ")) : (n(), i("div", rT, " Loading... ")),
            y.value ? (n(), i("div", cT, [
              t("div", uT, [
                x[18] || (x[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", dT, d(v.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", mT, [
                (n(!0), i(B, null, he(v.value, ($) => (n(), i("div", {
                  key: $.name,
                  class: "issue-item"
                }, [
                  t("strong", null, d($.name), 1),
                  t("span", fT, "(" + d($.sync_state) + ")", 1),
                  b(": " + d($.issue_summary), 1)
                ]))), 128))
              ]),
              S(Kn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = ($) => u.value = $),
                class: "allow-issues-toggle"
              }, {
                default: g(() => [...x[19] || (x[19] = [
                  b(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : h("", !0),
            t("div", vT, [
              S(Wa, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = ($) => r.value = $),
                placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
                disabled: !m.value || c.value || k.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: p,
                onSubmit: p
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", pT, [
            S(Ne, {
              variant: "secondary",
              onClick: x[3] || (x[3] = ($) => a("close"))
            }, {
              default: g(() => [...x[20] || (x[20] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(Ne, {
              variant: u.value ? "danger" : "primary",
              disabled: !m.value || !r.value.trim() || c.value || k.value,
              loading: c.value,
              onClick: p
            }, {
              default: g(() => [
                b(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", gT, [
      t("div", hT, [
        x[22] || (x[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = ($) => a("close"))
        }, [...x[21] || (x[21] = [
          t("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "currentColor"
          }, [
            t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
          ], -1)
        ])])
      ]),
      t("div", yT, [
        e.status && m.value ? (n(), i("div", wT, [
          e.status.workflows.new.length ? (n(), i("div", _T, [
            x[23] || (x[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : h("", !0),
          e.status.workflows.modified.length ? (n(), i("div", kT, [
            x[24] || (x[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, d(e.status.workflows.modified.length) + " modified", 1)
          ])) : h("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", bT, [
            x[25] || (x[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", $T, [
            x[26] || (x[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, d(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : h("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", CT, [
            x[27] || (x[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, d(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : h("", !0),
          f.value ? h("", !0) : (n(), i("div", xT, [...x[28] || (x[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", ST, " No changes to commit ")) : (n(), i("div", IT, " Loading... ")),
        y.value ? (n(), i("div", ET, [
          t("div", TT, [
            x[29] || (x[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", PT, d(v.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", RT, [
            (n(!0), i(B, null, he(v.value, ($) => (n(), i("div", {
              key: $.name,
              class: "issue-item"
            }, [
              t("strong", null, d($.name), 1),
              t("span", MT, "(" + d($.sync_state) + ")", 1),
              b(": " + d($.issue_summary), 1)
            ]))), 128))
          ]),
          S(Kn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = ($) => u.value = $),
            class: "allow-issues-toggle"
          }, {
            default: g(() => [...x[30] || (x[30] = [
              b(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : h("", !0),
        t("div", DT, [
          S(Wa, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = ($) => r.value = $),
            placeholder: k.value ? "Enable 'Allow issues' to commit" : m.value ? "Describe your changes..." : "No changes",
            disabled: !m.value || c.value || k.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: p,
            onSubmit: p
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", LT, [
        S(Ne, {
          variant: "secondary",
          onClick: x[9] || (x[9] = ($) => a("close"))
        }, {
          default: g(() => [...x[31] || (x[31] = [
            b(" Cancel ", -1)
          ])]),
          _: 1
        }),
        S(Ne, {
          variant: u.value ? "danger" : "primary",
          disabled: !m.value || !r.value.trim() || c.value || k.value,
          loading: c.value,
          onClick: p
        }, {
          default: g(() => [
            b(d(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Zr = /* @__PURE__ */ _e(NT, [["__scopeId", "data-v-5f897631"]]), UT = { class: "modal-header" }, AT = { class: "modal-body" }, OT = { class: "switch-message" }, zT = { class: "switch-details" }, FT = { class: "modal-actions" }, VT = /* @__PURE__ */ ye({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), P(Mt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = wt(() => {
          }, ["stop"]))
        }, [
          t("div", UT, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", AT, [
            t("p", OT, [
              o[6] || (o[6] = b(" Switch from ", -1)),
              t("strong", null, d(e.fromEnvironment), 1),
              o[7] || (o[7] = b(" to ", -1)),
              t("strong", null, d(e.toEnvironment), 1),
              o[8] || (o[8] = b("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", zT, ' Your current work will be preserved. You can switch back to "' + d(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", FT, [
            S(pe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[12] || (o[12] = [
                b(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), BT = /* @__PURE__ */ _e(VT, [["__scopeId", "data-v-e9c5253e"]]), WT = {
  key: 0,
  class: "modal-overlay"
}, GT = { class: "modal-content" }, jT = { class: "modal-body" }, HT = { class: "progress-info" }, KT = { class: "progress-percentage" }, qT = { class: "progress-state" }, YT = { class: "switch-steps" }, QT = { class: "step-icon" }, JT = { class: "step-label" }, XT = /* @__PURE__ */ ye({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = D(() => {
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
      return s.message || r[s.state] || s.state;
    }), a = D(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = D(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === s.state);
      return r.map((u, m) => {
        let f = "pending", v = "○";
        return m < c ? (f = "completed", v = "✓") : m === c && (f = "active", v = "⟳"), {
          ...u,
          status: f,
          icon: v
        };
      });
    });
    return (r, c) => (n(), P(Mt, { to: "body" }, [
      e.show ? (n(), i("div", WT, [
        t("div", GT, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", jT, [
            S(ra, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", HT, [
              t("div", KT, d(e.progress) + "%", 1),
              t("div", qT, d(o.value), 1)
            ]),
            t("div", YT, [
              (n(!0), i(B, null, he(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Re(["switch-step", u.status])
              }, [
                t("span", QT, d(u.icon), 1),
                t("span", JT, d(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), ZT = /* @__PURE__ */ _e(XT, [["__scopeId", "data-v-768a5078"]]), e7 = { class: "modal-header" }, t7 = { class: "modal-body" }, s7 = {
  key: 0,
  class: "node-section"
}, o7 = { class: "node-list" }, n7 = {
  key: 1,
  class: "node-section"
}, a7 = { class: "node-list" }, l7 = { class: "modal-actions" }, i7 = /* @__PURE__ */ ye({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), P(Mt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = wt(() => {
          }, ["stop"]))
        }, [
          t("div", e7, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", t7, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", s7, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", o7, [
                (n(!0), i(B, null, he(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + d(a), 1))), 128))
              ])
            ])) : h("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", n7, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", a7, [
                (n(!0), i(B, null, he(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + d(a), 1))), 128))
              ])
            ])) : h("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", l7, [
            S(pe, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: g(() => [...o[10] || (o[10] = [
                b(" Cancel ", -1)
              ])]),
              _: 1
            }),
            S(pe, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: g(() => [...o[11] || (o[11] = [
                b(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : h("", !0)
    ]));
  }
}), r7 = /* @__PURE__ */ _e(i7, [["__scopeId", "data-v-7cad7518"]]), c7 = [
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
], u7 = "v0.0.23", d7 = "Akatz", m7 = { class: "social-buttons" }, f7 = ["title", "aria-label", "onClick"], v7 = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, p7 = ["d"], g7 = ["title", "aria-label", "onClick"], h7 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, y7 = ["d"], w7 = /* @__PURE__ */ ye({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", m7, [
      (n(!0), i(B, null, he(Xe(c7), (l) => (n(), i(B, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          b(d(l.label) + " ", 1),
          (n(), i("svg", v7, [
            t("path", {
              d: l.iconPath
            }, null, 8, p7)
          ]))
        ], 8, f7)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", h7, [
            t("path", {
              d: l.iconPath
            }, null, 8, y7)
          ]))
        ], 8, g7))
      ], 64))), 128))
    ]));
  }
}), ec = /* @__PURE__ */ _e(w7, [["__scopeId", "data-v-4f846342"]]), _7 = { class: "footer-info" }, k7 = { class: "version" }, b7 = { class: "made-by" }, $7 = /* @__PURE__ */ ye({
  __name: "FooterInfo",
  setup(e) {
    return (s, o) => (n(), i("div", _7, [
      t("span", k7, d(Xe(u7)), 1),
      t("span", b7, [
        o[0] || (o[0] = b(" made with ", -1)),
        o[1] || (o[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        b(" by " + d(Xe(d7)), 1)
      ])
    ]));
  }
}), tc = /* @__PURE__ */ _e($7, [["__scopeId", "data-v-8bc3db0a"]]), C7 = /* @__PURE__ */ ye({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = _(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), P(kt, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: g(() => [
        S(Vr, {
          ref_key: "contentRef",
          ref: o,
          "workspace-path": e.workspacePath,
          onSaved: l
        }, null, 8, ["workspace-path"])
      ]),
      footer: g(() => {
        var u;
        return [
          S(Ne, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: g(() => [...c[2] || (c[2] = [
              b(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          S(Ne, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (m) => r.$emit("close"))
          }, {
            default: g(() => [...c[3] || (c[3] = [
              b(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), x7 = /* @__PURE__ */ _e(C7, [["__scopeId", "data-v-fac00ae7"]]), S7 = { class: "header-actions" }, I7 = {
  key: 0,
  class: "wizard-step"
}, E7 = { class: "form-field" }, T7 = ["placeholder"], P7 = {
  key: 0,
  class: "form-error"
}, R7 = { class: "form-field form-field--checkbox" }, M7 = { class: "form-checkbox" }, D7 = {
  key: 0,
  class: "form-field"
}, L7 = ["placeholder"], N7 = {
  key: 0,
  class: "form-info"
}, U7 = {
  key: 1,
  class: "form-suggestion"
}, A7 = {
  key: 2,
  class: "form-error"
}, O7 = {
  key: 3,
  class: "form-info"
}, z7 = {
  key: 1,
  class: "wizard-step"
}, F7 = {
  key: 0,
  class: "progress-check-loading"
}, V7 = {
  key: 0,
  class: "cli-warning"
}, B7 = { class: "cli-warning-header" }, W7 = {
  key: 1,
  class: "env-landing"
}, G7 = { class: "env-list" }, j7 = ["value"], H7 = { class: "env-name" }, K7 = {
  key: 2,
  class: "env-create"
}, q7 = { class: "form-field" }, Y7 = { class: "form-field" }, Q7 = ["value"], J7 = { class: "form-field" }, X7 = ["disabled"], Z7 = ["value"], eP = { class: "form-field" }, tP = ["value"], sP = { class: "form-field form-field--checkbox" }, oP = { class: "form-checkbox" }, nP = {
  key: 0,
  class: "form-error"
}, aP = {
  key: 1,
  class: "env-creating"
}, lP = { class: "creating-intro" }, iP = {
  key: 3,
  class: "env-import"
}, rP = { class: "wizard-footer" }, cP = { class: "wizard-footer-actions" }, wo = 10, uP = 600 * 1e3, ci = 1800 * 1e3, dP = /* @__PURE__ */ ye({
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
  setup(e, { emit: s }) {
    const o = e, a = s, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: m,
      getImportProgress: f,
      getComfyUIReleases: v
    } = ut(), y = _(o.initialStep || 1), k = _(null), p = _("landing"), w = _(!1), x = _(!1), $ = _(!1), C = _(!1), N = _(null), T = _(o.initialStep === 2), I = _(o.defaultPath), M = _(!!o.detectedModelsDir), L = _(o.detectedModelsDir || ""), W = _(null), E = _(null), R = _(null), te = _(null), se = _("my-new-env"), oe = _(jr), X = _("latest"), V = _(Hr), Q = _(!0), ne = _(null), re = _(null), F = _([{ tag_name: "latest", name: "Latest", published_at: "" }]), ee = _(!1), le = _(!1), Ae = _(!1), qe = _({ progress: 0, message: "" }), je = _({ progress: 0, message: "" }), xe = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], A = _(0), Y = _(null), z = _(0), O = _(null), ie = D(() => {
      var Ie, Ce;
      const ve = (Ie = I.value) == null ? void 0 : Ie.trim(), j = !W.value, Oe = !M.value || !E.value && ((Ce = L.value) == null ? void 0 : Ce.trim());
      return ve && j && Oe;
    }), Te = D(() => {
      var ve;
      return (ve = se.value) == null ? void 0 : ve.trim();
    }), Ye = D(() => !!(y.value === 2 || re.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), U = D(() => re.value || o.workspacePath || null);
    async function H() {
      var ve;
      if (W.value = null, !!((ve = I.value) != null && ve.trim()))
        try {
          const j = await c({ path: I.value, type: "workspace" });
          j.valid || (W.value = j.error || "Invalid path");
        } catch (j) {
          W.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function ce() {
      var ve;
      if (E.value = null, R.value = null, te.value = null, !!((ve = L.value) != null && ve.trim()))
        try {
          const j = await c({ path: L.value, type: "models" });
          if (j.valid)
            te.value = j.model_count ?? null;
          else if (E.value = j.error || "Invalid path", j.suggestion) {
            R.value = j.suggestion, L.value = j.suggestion, E.value = null;
            const Oe = await c({ path: j.suggestion, type: "models" });
            Oe.valid && (te.value = Oe.model_count ?? null);
          }
        } catch (j) {
          E.value = j instanceof Error ? j.message : "Validation failed";
        }
    }
    async function Ee() {
      var ve, j, Oe, Ie, Ce;
      if (W.value = null, E.value = null, await H(), (ve = W.value) != null && ve.includes("already exists")) {
        W.value = null, re.value = ((j = I.value) == null ? void 0 : j.trim()) || o.defaultPath, y.value = 2, be();
        return;
      }
      if (!W.value && !(M.value && ((Oe = L.value) != null && Oe.trim()) && (await ce(), E.value))) {
        le.value = !0;
        try {
          await l({
            workspace_path: ((Ie = I.value) == null ? void 0 : Ie.trim()) || o.defaultPath,
            models_directory: M.value && ((Ce = L.value) == null ? void 0 : Ce.trim()) || null
          }), A.value = 0, Y.value = Date.now();
          const Le = setInterval(async () => {
            var Me;
            if (Y.value && Date.now() - Y.value > uP) {
              clearInterval(Le), le.value = !1, W.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const q = await r();
              if (A.value = 0, q.state === "idle" && le.value) {
                clearInterval(Le), le.value = !1, W.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              qe.value = { progress: q.progress, message: q.message }, q.state === "complete" ? (clearInterval(Le), le.value = !1, re.value = ((Me = I.value) == null ? void 0 : Me.trim()) || o.defaultPath, y.value = 2, be()) : q.state === "error" && (clearInterval(Le), le.value = !1, W.value = q.error || "Workspace creation failed");
            } catch (q) {
              A.value++, console.warn(`Polling failure ${A.value}/${wo}:`, q), A.value >= wo && (clearInterval(Le), le.value = !1, W.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Le) {
          le.value = !1, W.value = Le instanceof Error ? Le.message : "Failed to create workspace";
        }
      }
    }
    async function ke() {
      Ae.value = !0, ne.value = null;
      try {
        const ve = {
          name: se.value.trim() || "my-new-env",
          python_version: oe.value,
          comfyui_version: X.value,
          torch_backend: V.value,
          switch_after: Q.value,
          workspace_path: re.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(ve)).status === "started") {
          z.value = 0, O.value = Date.now();
          const Oe = setInterval(async () => {
            if (O.value && Date.now() - O.value > ci) {
              clearInterval(Oe), Ae.value = !1, ne.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ie = await m();
              if (z.value = 0, Ie.state === "idle" && Ae.value) {
                clearInterval(Oe), Ae.value = !1, ne.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (je.value = {
                progress: Ie.progress ?? 0,
                message: Ie.message,
                phase: Ie.phase
              }, Ie.state === "complete") {
                clearInterval(Oe), Ae.value = !1;
                const Ce = Ie.environment_name || ve.name;
                Q.value ? a("complete", Ce, re.value) : (p.value = "landing", a("environment-created-no-switch", Ce));
              } else Ie.state === "error" && (clearInterval(Oe), Ae.value = !1, ne.value = Ie.error || "Environment creation failed");
            } catch (Ie) {
              z.value++, console.warn(`Polling failure ${z.value}/${wo}:`, Ie), z.value >= wo && (clearInterval(Oe), Ae.value = !1, ne.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (ve) {
        Ae.value = !1, ne.value = ve instanceof Error ? ve.message : "Unknown error";
      }
    }
    async function be() {
      ee.value = !0;
      try {
        F.value = await v();
      } catch (ve) {
        console.error("Failed to load ComfyUI releases:", ve);
      } finally {
        ee.value = !1;
      }
    }
    function De() {
      k.value && a("switch-environment", k.value, re.value);
    }
    function we() {
      p.value === "create" || p.value === "import" ? p.value = "landing" : y.value === 2 && o.setupState === "no_workspace" && (y.value = 1);
    }
    function Pe(ve, j) {
      x.value = !1, j ? a("complete", ve, re.value) : (a("environment-created-no-switch", ve), p.value = "landing");
    }
    function fe() {
    }
    rt(async () => {
      if (o.detectedModelsDir && (L.value = o.detectedModelsDir), o.workspacePath && (re.value = o.workspacePath), y.value === 2) {
        be();
        const ve = setTimeout(() => {
          T.value = !1;
        }, 3e3);
        await Be(), clearTimeout(ve), T.value = !1;
      }
    });
    async function Be() {
      try {
        const ve = await m();
        if (console.log("[ComfyGit] Create progress check:", ve.state, ve), ve.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", ve.environment_name), p.value = "create", Ae.value = !0, se.value = ve.environment_name || "my-new-env", je.value = {
            progress: ve.progress ?? 0,
            message: ve.message,
            phase: ve.phase
          }, Ue();
          return;
        }
      } catch (ve) {
        console.log("[ComfyGit] Create progress check failed:", ve);
      }
      try {
        const ve = await f();
        console.log("[ComfyGit] Import progress check:", ve.state, ve), ve.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", ve.environment_name), N.value = {
          message: ve.message || "Importing...",
          phase: ve.phase || "",
          progress: ve.progress ?? 0,
          environmentName: ve.environment_name || ""
        }, C.value = !0, p.value = "import", x.value = !0);
      } catch (ve) {
        console.log("[ComfyGit] Import progress check failed:", ve);
      }
    }
    async function Ue() {
      z.value = 0, O.value = Date.now();
      let ve = null;
      const j = async () => {
        if (O.value && Date.now() - O.value > ci)
          return ve && clearInterval(ve), Ae.value = !1, ne.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ie = await m();
          if (z.value = 0, Ie.state === "idle" && Ae.value)
            return ve && clearInterval(ve), Ae.value = !1, ne.value = "Environment creation was interrupted. Please try again.", !1;
          if (je.value = {
            progress: Ie.progress ?? 0,
            message: Ie.message,
            phase: Ie.phase
          }, Ie.state === "complete") {
            ve && clearInterval(ve), Ae.value = !1;
            const Ce = Ie.environment_name || se.value;
            return a("complete", Ce, re.value), !1;
          } else if (Ie.state === "error")
            return ve && clearInterval(ve), Ae.value = !1, ne.value = Ie.error || "Environment creation failed", !1;
          return !0;
        } catch (Ie) {
          return z.value++, console.warn(`Polling failure ${z.value}/${wo}:`, Ie), z.value >= wo ? (ve && clearInterval(ve), Ae.value = !1, ne.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await j() && (ve = setInterval(async () => {
        !await j() && ve && clearInterval(ve);
      }, 2e3));
    }
    return (ve, j) => (n(), i(B, null, [
      S(kt, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: j[15] || (j[15] = (Oe) => ve.$emit("close"))
      }, {
        header: g(() => [
          j[20] || (j[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", S7, [
            S(ec),
            j[19] || (j[19] = t("span", { class: "header-divider" }, null, -1)),
            Ye.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: j[0] || (j[0] = (Oe) => w.value = !0)
            }, [...j[17] || (j[17] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2"
              }, [
                t("circle", {
                  cx: "12",
                  cy: "12",
                  r: "3"
                }),
                t("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" })
              ], -1)
            ])])) : h("", !0),
            t("button", {
              class: "icon-btn",
              onClick: j[1] || (j[1] = (Oe) => ve.$emit("close")),
              title: "Close"
            }, [...j[18] || (j[18] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        body: g(() => {
          var Oe;
          return [
            y.value === 1 ? (n(), i("div", I7, [
              j[24] || (j[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", E7, [
                j[21] || (j[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                lt(t("input", {
                  "onUpdate:modelValue": j[2] || (j[2] = (Ie) => I.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, T7), [
                  [Yt, I.value]
                ]),
                W.value ? (n(), i("p", P7, d(W.value), 1)) : h("", !0)
              ]),
              t("div", R7, [
                t("label", M7, [
                  lt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": j[3] || (j[3] = (Ie) => M.value = Ie)
                  }, null, 512), [
                    [dn, M.value]
                  ]),
                  j[22] || (j[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              M.value ? (n(), i("div", D7, [
                j[23] || (j[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                lt(t("input", {
                  "onUpdate:modelValue": j[4] || (j[4] = (Ie) => L.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, L7), [
                  [Yt, L.value]
                ]),
                e.detectedModelsDir && !L.value ? (n(), i("p", N7, " Detected: " + d(e.detectedModelsDir), 1)) : h("", !0),
                R.value ? (n(), i("p", U7, " Did you mean: " + d(R.value), 1)) : h("", !0),
                E.value ? (n(), i("p", A7, d(E.value), 1)) : h("", !0),
                te.value !== null && !E.value ? (n(), i("p", O7, " Found " + d(te.value) + " model files ", 1)) : h("", !0)
              ])) : h("", !0),
              le.value ? (n(), P(Hn, {
                key: 1,
                progress: qe.value.progress,
                message: qe.value.message
              }, null, 8, ["progress", "message"])) : h("", !0)
            ])) : h("", !0),
            y.value === 2 ? (n(), i("div", z7, [
              T.value ? (n(), i("div", F7, [...j[25] || (j[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(B, { key: 1 }, [
                !o.cliInstalled && !$.value ? (n(), i("div", V7, [
                  t("div", B7, [
                    j[27] || (j[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    j[28] || (j[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: j[5] || (j[5] = (Ie) => $.value = !0),
                      title: "Dismiss"
                    }, [...j[26] || (j[26] = [
                      t("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "currentColor"
                      }, [
                        t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                      ], -1)
                    ])])
                  ]),
                  j[29] || (j[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  j[30] || (j[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : h("", !0),
                p.value === "landing" ? (n(), i("div", W7, [
                  j[34] || (j[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: j[6] || (j[6] = (Ie) => p.value = "create")
                  }, [...j[31] || (j[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: j[7] || (j[7] = (Ie) => {
                      C.value = !1, p.value = "import";
                    })
                  }, [...j[32] || (j[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (Oe = o.existingEnvironments) != null && Oe.length ? (n(), i(B, { key: 0 }, [
                    j[33] || (j[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", G7, [
                      (n(!0), i(B, null, he(o.existingEnvironments, (Ie) => (n(), i("label", {
                        key: Ie,
                        class: Re(["env-option", { selected: k.value === Ie }])
                      }, [
                        lt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ie,
                          "onUpdate:modelValue": j[8] || (j[8] = (Ce) => k.value = Ce)
                        }, null, 8, j7), [
                          [rs, k.value]
                        ]),
                        t("span", H7, d(Ie), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : h("", !0)
                ])) : p.value === "create" ? (n(), i("div", K7, [
                  Ae.value ? (n(), i("div", aP, [
                    t("p", lP, [
                      j[41] || (j[41] = b(" Creating environment ", -1)),
                      t("strong", null, d(se.value), 1),
                      j[42] || (j[42] = b("... ", -1))
                    ]),
                    S(Hn, {
                      progress: je.value.progress,
                      message: je.value.message,
                      "current-phase": je.value.phase,
                      "show-steps": !0,
                      steps: xe
                    }, null, 8, ["progress", "message", "current-phase"]),
                    j[43] || (j[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(B, { key: 0 }, [
                    j[40] || (j[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", q7, [
                      j[35] || (j[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      lt(t("input", {
                        "onUpdate:modelValue": j[9] || (j[9] = (Ie) => se.value = Ie),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [Yt, se.value]
                      ])
                    ]),
                    t("div", Y7, [
                      j[36] || (j[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      lt(t("select", {
                        "onUpdate:modelValue": j[10] || (j[10] = (Ie) => oe.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, he(Xe(Gr), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie), 9, Q7))), 128))
                      ], 512), [
                        [$s, oe.value]
                      ])
                    ]),
                    t("div", J7, [
                      j[37] || (j[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      lt(t("select", {
                        "onUpdate:modelValue": j[11] || (j[11] = (Ie) => X.value = Ie),
                        class: "form-select",
                        disabled: ee.value
                      }, [
                        (n(!0), i(B, null, he(F.value, (Ie) => (n(), i("option", {
                          key: Ie.tag_name,
                          value: Ie.tag_name
                        }, d(Ie.name), 9, Z7))), 128))
                      ], 8, X7), [
                        [$s, X.value]
                      ])
                    ]),
                    t("div", eP, [
                      j[38] || (j[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      lt(t("select", {
                        "onUpdate:modelValue": j[12] || (j[12] = (Ie) => V.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, he(Xe(pl), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, d(Ie) + d(Ie === "auto" ? " (detect GPU)" : ""), 9, tP))), 128))
                      ], 512), [
                        [$s, V.value]
                      ])
                    ]),
                    t("div", sP, [
                      t("label", oP, [
                        lt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": j[13] || (j[13] = (Ie) => Q.value = Ie)
                        }, null, 512), [
                          [dn, Q.value]
                        ]),
                        j[39] || (j[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    ne.value ? (n(), i("div", nP, d(ne.value), 1)) : h("", !0)
                  ], 64))
                ])) : p.value === "import" ? (n(), i("div", iP, [
                  S(Yr, {
                    "workspace-path": re.value,
                    "resume-import": C.value,
                    "initial-progress": N.value ?? void 0,
                    onImportComplete: Pe,
                    onImportStarted: j[14] || (j[14] = (Ie) => x.value = !0),
                    onSourceCleared: fe
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : h("", !0)
              ], 64))
            ])) : h("", !0)
          ];
        }),
        footer: g(() => [
          t("div", rP, [
            S(tc),
            t("div", cP, [
              y.value === 1 ? (n(), P(Ne, {
                key: 0,
                variant: "primary",
                disabled: !ie.value || le.value,
                onClick: Ee
              }, {
                default: g(() => [
                  b(d(le.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : y.value === 2 ? (n(), i(B, { key: 1 }, [
                !Ae.value && !x.value && (p.value !== "landing" || o.setupState === "no_workspace" && !re.value) ? (n(), P(Ne, {
                  key: 0,
                  variant: "secondary",
                  onClick: we
                }, {
                  default: g(() => [...j[44] || (j[44] = [
                    b(" Back ", -1)
                  ])]),
                  _: 1
                })) : h("", !0),
                p.value === "create" ? (n(), P(Ne, {
                  key: 1,
                  variant: "primary",
                  disabled: !Te.value || Ae.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    b(d(Ae.value ? "Creating..." : Q.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0),
                p.value === "landing" && k.value ? (n(), P(Ne, {
                  key: 2,
                  variant: "primary",
                  onClick: De
                }, {
                  default: g(() => [
                    b(" Switch to " + d(k.value), 1)
                  ]),
                  _: 1
                })) : h("", !0)
              ], 64)) : h("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      w.value ? (n(), P(x7, {
        key: 0,
        "workspace-path": U.value,
        onClose: j[16] || (j[16] = (Oe) => w.value = !1)
      }, null, 8, ["workspace-path"])) : h("", !0)
    ], 64));
  }
}), mP = /* @__PURE__ */ _e(dP, [["__scopeId", "data-v-9a9aadc0"]]), fP = { class: "update-banner" }, vP = { class: "update-banner__left" }, pP = { class: "update-banner__title" }, gP = {
  key: 0,
  class: "update-banner__summary"
}, hP = { class: "update-banner__actions" }, yP = ["disabled"], wP = ["disabled"], _P = ["disabled"], kP = /* @__PURE__ */ ye({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", fP, [
      t("div", vP, [
        t("div", pP, " ComfyGit Manager v" + d(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", gP, d(e.info.changelog_summary), 1)) : h("", !0)
      ]),
      t("div", hP, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, d(e.updating ? "Updating…" : "Update"), 9, yP),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, wP)) : h("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, _P)
      ])
    ]));
  }
}), bP = /* @__PURE__ */ _e(kP, [["__scopeId", "data-v-49562c5c"]]), sc = "ComfyGit.UpdateNotice.DismissedVersion";
function $P() {
  try {
    return localStorage.getItem(sc);
  } catch {
    return null;
  }
}
function CP(e) {
  try {
    localStorage.setItem(sc, e);
  } catch {
  }
}
function xP(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : $P() !== e.latest_version;
}
const SP = { class: "comfygit-panel" }, IP = { class: "panel-header" }, EP = { class: "header-left" }, TP = {
  key: 0,
  class: "header-info"
}, PP = { class: "header-actions" }, RP = { class: "env-switcher" }, MP = {
  key: 0,
  class: "header-info"
}, DP = { class: "branch-name" }, LP = { class: "panel-main" }, NP = { class: "sidebar" }, UP = { class: "sidebar-content" }, AP = { class: "sidebar-section" }, OP = { class: "sidebar-section" }, zP = { class: "sidebar-section" }, FP = {
  key: 0,
  class: "sidebar-badge"
}, VP = { class: "sidebar-footer" }, BP = { class: "content-area" }, WP = {
  key: 0,
  class: "error-message"
}, GP = {
  key: 1,
  class: "loading"
}, jP = { class: "dialog-content env-selector-dialog" }, HP = { class: "dialog-header" }, KP = { class: "dialog-body" }, qP = { class: "env-list" }, YP = { class: "env-info" }, QP = { class: "env-name-row" }, JP = { class: "env-indicator" }, XP = { class: "env-name" }, ZP = {
  key: 0,
  class: "env-branch"
}, eR = {
  key: 1,
  class: "current-label"
}, tR = { class: "env-stats" }, sR = ["onClick"], oR = { class: "toast-container" }, nR = { class: "toast-message" }, ui = "ComfyGit.LastView", di = "ComfyGit.LastSection", aR = /* @__PURE__ */ ye({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
      getStatus: l,
      getHistory: r,
      getBranches: c,
      checkout: u,
      createBranch: m,
      switchBranch: f,
      deleteBranch: v,
      getEnvironments: y,
      switchEnvironment: k,
      getSwitchProgress: p,
      deleteEnvironment: w,
      syncEnvironmentManually: x,
      repairWorkflowModels: $,
      getSetupStatus: C,
      getUpdateCheck: N,
      updateManager: T
    } = ut(), I = cp(), { liveInstanceCount: M } = Qr({ autoStart: !0 }), L = _(null), W = _([]), E = _([]), R = _([]), te = D(() => R.value.find((ue) => ue.is_current)), se = _(null), oe = _(!1), X = _(1), V = D(() => {
      var ue;
      return ((ue = se.value) == null ? void 0 : ue.state) || "managed";
    }), Q = _(!1), ne = _(null), re = _(null), F = _(!1), ee = _(null), le = _(!1), Ae = _(!1), qe = D(() => !le.value && xP(ee.value)), je = _(null), xe = _(null), A = _(null), Y = _(!1), z = _(!1), O = _(""), ie = _(null), Te = _({ state: "idle", progress: 0, message: "" });
    let Ye = null, U = null;
    const H = {
      "debug-env": { view: "debug-env", section: "this-env" },
      "debug-workspace": { view: "debug-workspace", section: "all-envs" },
      status: { view: "status", section: "this-env" }
    }, ce = o.initialView ? H[o.initialView] : null, Ee = [
      "status",
      "workflows",
      "models-env",
      "branches",
      "history",
      "nodes",
      "debug-env",
      "environments",
      "model-index",
      "settings",
      "debug-workspace",
      "export",
      "import",
      "remotes",
      "deploy"
    ], ke = ["this-env", "all-envs", "sharing"];
    function be() {
      try {
        const ue = sessionStorage.getItem(ui), J = sessionStorage.getItem(di);
        if (ue && J && Ee.includes(ue) && ke.includes(J))
          return { view: ue, section: J };
      } catch {
      }
      return null;
    }
    const De = be(), we = _((ce == null ? void 0 : ce.view) ?? (De == null ? void 0 : De.view) ?? "status"), Pe = _((ce == null ? void 0 : ce.section) ?? (De == null ? void 0 : De.section) ?? "this-env");
    function fe(ue, J) {
      we.value = ue, Pe.value = J;
      try {
        sessionStorage.setItem(ui, ue), sessionStorage.setItem(di, J);
      } catch {
      }
    }
    function Be(ue) {
      const We = {
        "model-index": { view: "model-index", section: "all-envs" },
        remotes: { view: "remotes", section: "sharing" }
      }[ue];
      We && fe(We.view, We.section);
    }
    function Ue() {
      fe("branches", "this-env");
    }
    function ve() {
      a("close"), setTimeout(() => {
        var J;
        const ue = document.querySelectorAll("button.comfyui-button");
        for (const We of ue)
          if (((J = We.textContent) == null ? void 0 : J.trim()) === "Manager") {
            We.click();
            return;
          }
        console.warn("[ComfyGit] Manager button not found in toolbar");
      }, 100);
    }
    const j = _(null), Oe = _(!1), Ie = _(!1), Ce = _([]);
    let Le = 0;
    function Me(ue, J = "info", We = 3e3) {
      const Je = ++Le;
      return Ce.value.push({ id: Je, message: ue, type: J }), We > 0 && setTimeout(() => {
        Ce.value = Ce.value.filter((ft) => ft.id !== Je);
      }, We), Je;
    }
    function q(ue) {
      Ce.value = Ce.value.filter((J) => J.id !== ue);
    }
    function me(ue, J) {
      Me(ue, J);
    }
    async function ge() {
      ee.value = null, le.value = !1;
      try {
        ee.value = await N();
      } catch {
      }
    }
    function ze() {
      var J;
      const ue = (J = ee.value) == null ? void 0 : J.release_url;
      if (ue)
        try {
          window.open(ue, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function Fe() {
      var J;
      const ue = (J = ee.value) == null ? void 0 : J.latest_version;
      ue && CP(ue), le.value = !0;
    }
    async function et() {
      var J, We;
      if (Ae.value) return;
      Ae.value = !0;
      const ue = Me("Updating comfygit-manager...", "info", 0);
      try {
        const Je = await T();
        if (q(ue), Je.status !== "success") {
          if (Me(Je.message || "Update failed", "error"), Je.manual_instructions) {
            const ft = Je.manual_instructions.split(`
`).map((K) => K.trim()).filter(Boolean);
            j.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: ft,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                j.value = null;
              }
            };
          }
          return;
        }
        if (Me(Je.message || "Update complete", "success"), Fe(), Je.restart_required) {
          nt();
          try {
            await ((We = (J = window.app) == null ? void 0 : J.api) == null ? void 0 : We.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Je) {
        q(ue);
        const ft = Je instanceof Error ? Je.message : "Update failed";
        Me(ft, "error");
      } finally {
        Ae.value = !1;
      }
    }
    const ot = D(() => {
      if (!L.value) return "neutral";
      const ue = L.value.workflows, J = ue.new.length > 0 || ue.modified.length > 0 || ue.deleted.length > 0 || L.value.has_changes;
      return L.value.comparison.is_synced ? J ? "warning" : "success" : "error";
    });
    D(() => L.value ? ot.value === "success" ? "All synced" : ot.value === "warning" ? "Uncommitted changes" : ot.value === "error" ? "Not synced" : "" : "");
    async function Ze() {
      Q.value = !0, ne.value = null;
      try {
        const [ue, J, We, Je] = await Promise.all([
          l(!0),
          r(),
          c(),
          y()
        ]);
        L.value = ue, W.value = J.commits, E.value = We.branches, R.value = Je, a("statusUpdate", ue), je.value && await je.value.loadWorkflows(!0);
      } catch (ue) {
        ne.value = ue instanceof Error ? ue.message : "Failed to load status", L.value = null, W.value = [], E.value = [];
      } finally {
        Q.value = !1;
      }
    }
    function xt(ue) {
      re.value = ue;
    }
    async function _t(ue) {
      var We;
      re.value = null;
      const J = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      j.value = {
        title: J ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: J ? "You have uncommitted changes that will be lost." : `Checkout commit ${ue.short_hash || ((We = ue.hash) == null ? void 0 : We.slice(0, 7))}?`,
        details: J ? yn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: J,
        onConfirm: async () => {
          var K;
          j.value = null, nt();
          const Je = Me(`Checking out ${ue.short_hash || ((K = ue.hash) == null ? void 0 : K.slice(0, 7))}...`, "info", 0), ft = await u(ue.hash, J);
          q(Je), ft.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(ft.message || "Checkout failed", "error");
        }
      };
    }
    async function ae(ue) {
      const J = L.value && (L.value.workflows.new.length > 0 || L.value.workflows.modified.length > 0 || L.value.workflows.deleted.length > 0 || L.value.has_changes);
      j.value = {
        title: J ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: J ? "You have uncommitted changes." : `Switch to branch "${ue}"?`,
        details: J ? yn() : void 0,
        warning: J ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: J ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, nt();
          const We = Me(`Switching to ${ue}...`, "info", 0), Je = await f(ue, J);
          q(We), Je.status === "success" ? Me("Restarting ComfyUI...", "success") : Me(Je.message || "Branch switch failed", "error");
        }
      };
    }
    async function G(ue) {
      const J = Me(`Creating branch ${ue}...`, "info", 0), We = await m(ue);
      q(J), We.status === "success" ? (Me(`Branch "${ue}" created`, "success"), await Ze()) : Me(We.message || "Failed to create branch", "error");
    }
    async function de(ue, J = !1) {
      const We = async (Je) => {
        var K;
        const ft = Me(`Deleting branch ${ue}...`, "info", 0);
        try {
          const $e = await v(ue, Je);
          q(ft), $e.status === "success" ? (Me(`Branch "${ue}" deleted`, "success"), await Ze()) : (K = $e.message) != null && K.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await We(!0);
            }
          } : Me($e.message || "Failed to delete branch", "error");
        } catch ($e) {
          q(ft);
          const Ve = $e instanceof Error ? $e.message : "Failed to delete branch";
          Ve.includes("not fully merged") ? j.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ue}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              j.value = null, await We(!0);
            }
          } : Me(Ve, "error");
        }
      };
      j.value = {
        title: "Delete Branch",
        message: `Delete branch "${ue}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          j.value = null, await We(J);
        }
      };
    }
    async function Ge(ue) {
      re.value = null;
      const J = prompt("Enter branch name:");
      if (J) {
        const We = Me(`Creating branch ${J}...`, "info", 0), Je = await m(J, ue.hash);
        q(We), Je.status === "success" ? (Me(`Branch "${J}" created from ${ue.short_hash}`, "success"), await Ze()) : Me(Je.message || "Failed to create branch", "error");
      }
    }
    function nt() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function Se() {
      j.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          j.value = null, nt(), Me("Restarting environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function Z() {
      j.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ue;
          j.value = null, Me("Stopping environment...", "info");
          try {
            (ue = window.app) != null && ue.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function He(ue, J) {
      F.value = !1, O.value = ue, ie.value = J || null, Y.value = !0;
    }
    async function bt() {
      Y.value = !1, z.value = !0, nt(), Te.value = {
        progress: 10,
        state: St(10),
        message: Jt(10)
      };
      try {
        await k(O.value, ie.value || void 0), Cs(), Ke();
      } catch (ue) {
        Dt(), z.value = !1, Me(`Failed to initiate switch: ${ue instanceof Error ? ue.message : "Unknown error"}`, "error"), Te.value = { state: "idle", progress: 0, message: "" }, ie.value = null;
      }
    }
    function St(ue) {
      return ue >= 100 ? "complete" : ue >= 80 ? "validating" : ue >= 60 ? "starting" : ue >= 30 ? "syncing" : "preparing";
    }
    function Jt(ue) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[St(ue)] || "";
    }
    function Cs() {
      if (U) return;
      let ue = 10;
      const J = 60, We = 5e3, Je = 100, ft = (J - ue) / (We / Je);
      U = window.setInterval(() => {
        if (ue += ft, ue >= J && (ue = J, Dt()), Te.value.progress < J) {
          const K = Math.floor(ue);
          Te.value = {
            progress: K,
            state: St(K),
            message: Jt(K)
          };
        }
      }, Je);
    }
    function Dt() {
      U && (clearInterval(U), U = null);
    }
    function Ke() {
      Ye || (Ye = window.setInterval(async () => {
        try {
          let ue = await I.getStatus();
          if ((!ue || ue.state === "idle") && (ue = await p()), !ue)
            return;
          const J = ue.progress || 0;
          J >= 60 && Dt();
          const We = Math.max(J, Te.value.progress), Je = ue.state && ue.state !== "idle" && ue.state !== "unknown", ft = Je ? ue.state : St(We), K = Je && ue.message || Jt(We);
          Te.value = {
            state: ft,
            progress: We,
            message: K
          }, ue.state === "complete" ? (Dt(), ns(), z.value = !1, Me(`✓ Switched to ${O.value}`, "success"), await Ze(), O.value = "") : ue.state === "rolled_back" ? (Dt(), ns(), z.value = !1, Me("Switch failed, restored previous environment", "warning"), O.value = "") : ue.state === "critical_failure" && (Dt(), ns(), z.value = !1, Me(`Critical error during switch: ${ue.message}`, "error"), O.value = "");
        } catch (ue) {
          console.error("Failed to poll switch progress:", ue);
        }
      }, 1e3));
    }
    function ns() {
      Dt(), Ye && (clearInterval(Ye), Ye = null);
    }
    function ps() {
      var ue;
      Y.value = !1, O.value = "", (ue = se.value) != null && ue.state && se.value.state !== "managed" && (X.value = se.value.state === "no_workspace" ? 1 : 2, oe.value = !0);
    }
    async function ro(ue) {
      Oe.value = !1, await Ze(), Me(ue.message, ue.success ? "success" : "error");
    }
    async function co() {
      Ie.value = !1;
      const ue = Me("Syncing environment...", "info", 0);
      try {
        const J = await x("skip", !0);
        if (q(ue), J.status === "success") {
          const We = [];
          J.nodes_installed.length && We.push(`${J.nodes_installed.length} installed`), J.nodes_removed.length && We.push(`${J.nodes_removed.length} removed`);
          const Je = We.length ? `: ${We.join(", ")}` : "";
          Me(`✓ Environment synced${Je}`, "success"), await Ze();
        } else {
          const We = J.errors.length ? J.errors.join("; ") : J.message;
          Me(`Sync failed: ${We}`, "error");
        }
      } catch (J) {
        q(ue), Me(`Sync error: ${J instanceof Error ? J.message : "Unknown error"}`, "error");
      }
    }
    async function uo(ue) {
      var J;
      try {
        const We = await $(ue);
        We.failed.length === 0 ? Me(`✓ Repaired ${We.success} workflow${We.success === 1 ? "" : "s"}`, "success") : Me(`Repaired ${We.success}, failed: ${We.failed.length}`, "warning"), await Ze();
      } catch (We) {
        Me(`Repair failed: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
      } finally {
        (J = A.value) == null || J.resetRepairingState();
      }
    }
    async function Qs() {
      var J, We;
      const ue = Me("Repairing environment...", "info", 0);
      try {
        const Je = await x("skip", !0);
        if (q(ue), Je.status === "success") {
          const ft = [];
          Je.nodes_installed.length && ft.push(`${Je.nodes_installed.length} installed`), Je.nodes_removed.length && ft.push(`${Je.nodes_removed.length} removed`);
          const K = ft.length ? `: ${ft.join(", ")}` : "";
          Me(`✓ Environment repaired${K}`, "success"), (J = A.value) == null || J.closeDetailModal(), await Ze();
        } else {
          const ft = Je.errors.length ? Je.errors.join(", ") : Je.message || "Unknown error";
          Me(`Repair failed: ${ft}`, "error");
        }
      } catch (Je) {
        q(ue), Me(`Repair error: ${Je instanceof Error ? Je.message : "Unknown error"}`, "error");
      } finally {
        (We = A.value) == null || We.resetRepairingEnvironmentState();
      }
    }
    async function mo(ue, J) {
      Me(`Environment '${ue}' created`, "success"), await Ze(), xe.value && await xe.value.loadEnvironments(), J && await He(ue);
    }
    async function fo(ue) {
      var J;
      if (((J = te.value) == null ? void 0 : J.name) === ue) {
        Me("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      j.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ue}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          j.value = null;
          try {
            const We = await w(ue);
            We.status === "success" ? (Me(`Environment "${ue}" deleted`, "success"), await Ze(), xe.value && await xe.value.loadEnvironments()) : Me(We.message || "Failed to delete environment", "error");
          } catch (We) {
            Me(`Error deleting environment: ${We instanceof Error ? We.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function vo(ue, J) {
      oe.value = !1;
      try {
        se.value = await C();
      } catch {
      }
      await He(ue, J);
    }
    function po() {
      oe.value = !1, a("close");
    }
    async function go(ue, J) {
      await He(ue, J);
    }
    async function ca(ue) {
      await Ze(), await He(ue);
    }
    async function ua(ue) {
      se.value = await C(), console.log(`Environment '${ue}' created. Available for switching.`);
    }
    function da() {
      fe("environments", "all-envs"), setTimeout(() => {
        var ue;
        (ue = xe.value) == null || ue.openCreateModal();
      }, 100);
    }
    function yn() {
      if (!L.value) return [];
      const ue = [], J = L.value.workflows;
      return J.new.length && ue.push(`${J.new.length} new workflow(s)`), J.modified.length && ue.push(`${J.modified.length} modified workflow(s)`), J.deleted.length && ue.push(`${J.deleted.length} deleted workflow(s)`), ue;
    }
    return rt(async () => {
      try {
        if (se.value = await C(), se.value.state === "no_workspace") {
          oe.value = !0, X.value = 1;
          return;
        }
        if (se.value.state === "empty_workspace") {
          oe.value = !0, X.value = 2;
          return;
        }
        if (se.value.state === "unmanaged") {
          oe.value = !0, X.value = 2;
          return;
        }
      } catch (ue) {
        console.warn("Setup status check failed, proceeding normally:", ue);
      }
      await Promise.all([
        Ze(),
        ge()
      ]);
    }), (ue, J) => {
      var We, Je, ft, K, $e, Ve, gt, Tt, as, As, Os, No, Uo;
      return n(), i("div", SP, [
        t("div", IP, [
          t("div", EP, [
            J[31] || (J[31] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            L.value ? (n(), i("div", TP)) : h("", !0)
          ]),
          t("div", PP, [
            S(ec),
            J[34] || (J[34] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Re(["icon-btn", { spinning: Q.value }]),
              onClick: Ze,
              title: "Refresh"
            }, [...J[32] || (J[32] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M13.65 2.35a8 8 0 1 0 1.4 9.65h-2.25a5.75 5.75 0 1 1-1-6.45L9.5 8H16V1.5l-2.35 2.35z" })
              ], -1)
            ])], 2),
            t("button", {
              class: "icon-btn",
              onClick: J[0] || (J[0] = (tt) => a("close")),
              title: "Close"
            }, [...J[33] || (J[33] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])
          ])
        ]),
        qe.value && ee.value ? (n(), P(bP, {
          key: 0,
          info: ee.value,
          updating: Ae.value,
          onUpdate: et,
          onDismiss: Fe,
          onReleaseNotes: ze
        }, null, 8, ["info", "updating"])) : h("", !0),
        t("div", RP, [
          t("div", { class: "env-switcher-header" }, [
            J[35] || (J[35] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", { class: "env-control-buttons" }, [
              t("button", {
                class: "env-control-btn",
                title: "Restart environment",
                onClick: Se
              }, " Restart "),
              t("button", {
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: Z
              }, " Stop ")
            ])
          ]),
          t("button", {
            class: "env-switcher-btn",
            onClick: J[1] || (J[1] = (tt) => fe("environments", "all-envs"))
          }, [
            L.value ? (n(), i("div", MP, [
              t("span", null, d(((We = te.value) == null ? void 0 : We.name) || ((Je = L.value) == null ? void 0 : Je.environment) || "Loading..."), 1),
              t("span", DP, "(" + d(L.value.branch || "detached") + ")", 1)
            ])) : h("", !0),
            J[36] || (J[36] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", LP, [
          t("div", NP, [
            t("div", UP, [
              t("div", AP, [
                J[37] || (J[37] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "status" && Pe.value === "this-env" }]),
                  onClick: J[2] || (J[2] = (tt) => fe("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "workflows" }]),
                  onClick: J[3] || (J[3] = (tt) => fe("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "models-env" }]),
                  onClick: J[4] || (J[4] = (tt) => fe("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "branches" }]),
                  onClick: J[5] || (J[5] = (tt) => fe("branches", "this-env"))
                }, " BRANCHES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "history" }]),
                  onClick: J[6] || (J[6] = (tt) => fe("history", "this-env"))
                }, " HISTORY ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "nodes" }]),
                  onClick: J[7] || (J[7] = (tt) => fe("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "debug-env" }]),
                  onClick: J[8] || (J[8] = (tt) => fe("debug-env", "this-env"))
                }, " DEBUG ", 2)
              ]),
              J[41] || (J[41] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", OP, [
                J[38] || (J[38] = t("div", { class: "sidebar-section-title" }, "ALL ENVS", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "environments" }]),
                  onClick: J[9] || (J[9] = (tt) => fe("environments", "all-envs"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "model-index" }]),
                  onClick: J[10] || (J[10] = (tt) => fe("model-index", "all-envs"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "settings" }]),
                  onClick: J[11] || (J[11] = (tt) => fe("settings", "all-envs"))
                }, " SETTINGS ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "debug-workspace" }]),
                  onClick: J[12] || (J[12] = (tt) => fe("debug-workspace", "all-envs"))
                }, " DEBUG ", 2)
              ]),
              J[42] || (J[42] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", zP, [
                J[40] || (J[40] = t("div", { class: "sidebar-section-title" }, "SHARING", -1)),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "deploy" }]),
                  onClick: J[13] || (J[13] = (tt) => fe("deploy", "sharing"))
                }, [
                  J[39] || (J[39] = b(" DEPLOY ", -1)),
                  Xe(M) > 0 ? (n(), i("span", FP, d(Xe(M)), 1)) : h("", !0)
                ], 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "export" }]),
                  onClick: J[14] || (J[14] = (tt) => fe("export", "sharing"))
                }, " EXPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "import" }]),
                  onClick: J[15] || (J[15] = (tt) => fe("import", "sharing"))
                }, " IMPORT ", 2),
                t("button", {
                  class: Re(["sidebar-item", { active: we.value === "remotes" }]),
                  onClick: J[16] || (J[16] = (tt) => fe("remotes", "sharing"))
                }, " REMOTES ", 2)
              ])
            ]),
            t("div", VP, [
              S(tc)
            ])
          ]),
          t("div", BP, [
            ne.value ? (n(), i("div", WP, d(ne.value), 1)) : !L.value && we.value === "status" ? (n(), i("div", GP, " Loading status... ")) : (n(), i(B, { key: 2 }, [
              we.value === "status" ? (n(), P(gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: A,
                status: L.value,
                "setup-state": V.value,
                onSwitchBranch: Ue,
                onCommitChanges: J[17] || (J[17] = (tt) => Oe.value = !0),
                onSyncEnvironment: J[18] || (J[18] = (tt) => Ie.value = !0),
                onViewWorkflows: J[19] || (J[19] = (tt) => fe("workflows", "this-env")),
                onViewHistory: J[20] || (J[20] = (tt) => fe("history", "this-env")),
                onViewDebug: J[21] || (J[21] = (tt) => fe("debug-env", "this-env")),
                onViewNodes: J[22] || (J[22] = (tt) => fe("nodes", "this-env")),
                onRepairMissingModels: uo,
                onRepairEnvironment: Qs,
                onStartSetup: J[23] || (J[23] = (tt) => oe.value = !0),
                onViewEnvironments: J[24] || (J[24] = (tt) => fe("environments", "all-envs")),
                onCreateEnvironment: da
              }, null, 8, ["status", "setup-state"])) : we.value === "workflows" ? (n(), P(Bw, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: je,
                onRefresh: Ze
              }, null, 512)) : we.value === "models-env" ? (n(), P(ob, {
                key: 2,
                onNavigate: Be
              })) : we.value === "branches" ? (n(), P(lp, {
                key: 3,
                branches: E.value,
                current: ((ft = L.value) == null ? void 0 : ft.branch) || null,
                onSwitch: ae,
                onCreate: G,
                onDelete: de
              }, null, 8, ["branches", "current"])) : we.value === "history" ? (n(), P(rp, {
                key: 4,
                commits: W.value,
                "current-ref": (K = L.value) == null ? void 0 : K.branch,
                onSelect: xt,
                onCheckout: _t
              }, null, 8, ["commits", "current-ref"])) : we.value === "nodes" ? (n(), P(Qb, {
                key: 5,
                "version-mismatches": ((Ve = ($e = L.value) == null ? void 0 : $e.comparison) == null ? void 0 : Ve.version_mismatches) || [],
                onOpenNodeManager: ve,
                onRepairEnvironment: Qs,
                onToast: me
              }, null, 8, ["version-mismatches"])) : we.value === "debug-env" ? (n(), P(p3, { key: 6 })) : we.value === "environments" ? (n(), P(Vx, {
                key: 7,
                ref_key: "environmentsSectionRef",
                ref: xe,
                onSwitch: He,
                onCreated: mo,
                onDelete: fo
              }, null, 512)) : we.value === "model-index" ? (n(), P(hb, {
                key: 8,
                onRefresh: Ze
              })) : we.value === "settings" ? (n(), P(l3, { key: 9 })) : we.value === "debug-workspace" ? (n(), P(v3, { key: 10 })) : we.value === "deploy" ? (n(), P(DE, {
                key: 11,
                onToast: me,
                onNavigate: Be
              })) : we.value === "export" ? (n(), P(M5, { key: 12 })) : we.value === "import" ? (n(), P(x8, {
                key: 13,
                onImportCompleteSwitch: ca
              })) : we.value === "remotes" ? (n(), P(FC, {
                key: 14,
                onToast: me
              })) : h("", !0)
            ], 64))
          ])
        ]),
        re.value ? (n(), P(JE, {
          key: 1,
          commit: re.value,
          onClose: J[25] || (J[25] = (tt) => re.value = null),
          onCheckout: _t,
          onCreateBranch: Ge
        }, null, 8, ["commit"])) : h("", !0),
        j.value ? (n(), P(vl, {
          key: 2,
          title: j.value.title,
          message: j.value.message,
          details: j.value.details,
          warning: j.value.warning,
          confirmLabel: j.value.confirmLabel,
          cancelLabel: j.value.cancelLabel,
          secondaryLabel: j.value.secondaryLabel,
          secondaryAction: j.value.secondaryAction,
          destructive: j.value.destructive,
          onConfirm: j.value.onConfirm,
          onCancel: J[26] || (J[26] = (tt) => j.value = null),
          onSecondary: j.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : h("", !0),
        S(BT, {
          show: Y.value,
          "from-environment": ((gt = te.value) == null ? void 0 : gt.name) || "unknown",
          "to-environment": O.value,
          onConfirm: bt,
          onClose: ps
        }, null, 8, ["show", "from-environment", "to-environment"]),
        Oe.value && L.value ? (n(), P(Zr, {
          key: 3,
          status: L.value,
          "as-modal": !0,
          onClose: J[27] || (J[27] = (tt) => Oe.value = !1),
          onCommitted: ro
        }, null, 8, ["status"])) : h("", !0),
        Ie.value && L.value ? (n(), P(r7, {
          key: 4,
          show: Ie.value,
          "mismatch-details": {
            missing_nodes: L.value.comparison.missing_nodes,
            extra_nodes: L.value.comparison.extra_nodes
          },
          onConfirm: co,
          onClose: J[28] || (J[28] = (tt) => Ie.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : h("", !0),
        S(ZT, {
          show: z.value,
          state: Te.value.state,
          progress: Te.value.progress,
          message: Te.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        F.value ? (n(), i("div", {
          key: 5,
          class: "dialog-overlay",
          onClick: J[30] || (J[30] = wt((tt) => F.value = !1, ["self"]))
        }, [
          t("div", jP, [
            t("div", HP, [
              J[44] || (J[44] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: J[29] || (J[29] = (tt) => F.value = !1)
              }, [...J[43] || (J[43] = [
                t("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "currentColor"
                }, [
                  t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
                ], -1)
              ])])
            ]),
            t("div", KP, [
              J[45] || (J[45] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", qP, [
                (n(!0), i(B, null, he(R.value, (tt) => (n(), i("div", {
                  key: tt.name,
                  class: Re(["env-item", { current: tt.is_current }])
                }, [
                  t("div", YP, [
                    t("div", QP, [
                      t("span", JP, d(tt.is_current ? "●" : "○"), 1),
                      t("span", XP, d(tt.name), 1),
                      tt.current_branch ? (n(), i("span", ZP, "(" + d(tt.current_branch) + ")", 1)) : h("", !0),
                      tt.is_current ? (n(), i("span", eR, "CURRENT")) : h("", !0)
                    ]),
                    t("div", tR, d(tt.workflow_count) + " workflows • " + d(tt.node_count) + " nodes ", 1)
                  ]),
                  tt.is_current ? h("", !0) : (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (ED) => He(tt.name)
                  }, " SWITCH ", 8, sR))
                ], 2))), 128))
              ])
            ])
          ])
        ])) : h("", !0),
        oe.value ? (n(), P(mP, {
          key: 6,
          "default-path": ((Tt = se.value) == null ? void 0 : Tt.default_path) || "~/comfygit",
          "detected-models-dir": ((as = se.value) == null ? void 0 : as.detected_models_dir) || null,
          "initial-step": X.value,
          "existing-environments": ((As = se.value) == null ? void 0 : As.environments) || [],
          "cli-installed": ((Os = se.value) == null ? void 0 : Os.cli_installed) ?? !0,
          "setup-state": ((No = se.value) == null ? void 0 : No.state) || "no_workspace",
          "workspace-path": ((Uo = se.value) == null ? void 0 : Uo.workspace_path) || null,
          onComplete: vo,
          onClose: po,
          onSwitchEnvironment: go,
          onEnvironmentCreatedNoSwitch: ua
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : h("", !0),
        t("div", oR, [
          S(Sd, { name: "toast" }, {
            default: g(() => [
              (n(!0), i(B, null, he(Ce.value, (tt) => (n(), i("div", {
                key: tt.id,
                class: Re(["toast", tt.type])
              }, [
                t("span", nR, d(tt.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), lR = /* @__PURE__ */ _e(aR, [["__scopeId", "data-v-9c2af32e"]]), iR = { class: "item-header" }, rR = { class: "item-info" }, cR = { class: "filename" }, uR = { class: "metadata" }, dR = { class: "size" }, mR = {
  key: 0,
  class: "type"
}, fR = { class: "item-actions" }, vR = {
  key: 0,
  class: "progress-section"
}, pR = { class: "progress-bar" }, gR = { class: "progress-stats" }, hR = { class: "downloaded" }, yR = { class: "speed" }, wR = {
  key: 0,
  class: "eta"
}, _R = {
  key: 1,
  class: "status-msg paused"
}, kR = {
  key: 2,
  class: "status-msg queued"
}, bR = {
  key: 3,
  class: "status-msg completed"
}, $R = {
  key: 4,
  class: "status-msg failed"
}, CR = {
  key: 0,
  class: "retries"
}, xR = /* @__PURE__ */ ye({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: s }) {
    const o = s;
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
    return (c, u) => (n(), i("div", {
      class: Re(["download-item", `status-${e.item.status}`])
    }, [
      t("div", iR, [
        t("div", rR, [
          t("div", cR, d(e.item.filename), 1),
          t("div", uR, [
            t("span", dR, d(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", mR, d(e.item.type), 1)) : h("", !0)
          ])
        ]),
        t("div", fR, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (m) => o("cancel")),
            title: "Cancel"
          }, " × ")) : h("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (m) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : h("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (m) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : h("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (m) => o("remove")),
            title: "Remove"
          }, " × ")) : h("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", vR, [
        t("div", pR, [
          t("div", {
            class: "progress-fill",
            style: Qt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", gR, [
          t("span", hR, d(a(e.item.downloaded)) + " / " + d(a(e.item.size)), 1),
          t("span", yR, d(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", wR, d(r(e.item.eta)), 1)) : h("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", _R, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", kR, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", bR, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", $R, [
        b(" ✗ " + d(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", CR, "(" + d(e.item.retries) + " retries)", 1)) : h("", !0)
      ])) : h("", !0)
    ], 2));
  }
}), Vo = /* @__PURE__ */ _e(xR, [["__scopeId", "data-v-2110df65"]]), SR = { class: "queue-title" }, IR = { class: "count" }, ER = { class: "queue-actions" }, TR = { class: "action-label" }, PR = {
  key: 0,
  class: "overall-progress"
}, RR = { class: "progress-bar" }, MR = {
  key: 0,
  class: "current-mini"
}, DR = { class: "filename" }, LR = { class: "speed" }, NR = {
  key: 1,
  class: "queue-content"
}, UR = {
  key: 0,
  class: "section"
}, AR = {
  key: 1,
  class: "section"
}, OR = { class: "section-header" }, zR = { class: "section-label paused" }, FR = { class: "items-list" }, VR = {
  key: 2,
  class: "section"
}, BR = { class: "section-header" }, WR = { class: "section-label" }, GR = { class: "items-list" }, jR = {
  key: 3,
  class: "section"
}, HR = { class: "section-header" }, KR = { class: "section-label" }, qR = { class: "items-list" }, YR = {
  key: 4,
  class: "section"
}, QR = { class: "section-header" }, JR = { class: "section-label failed" }, XR = { class: "items-list" }, ZR = /* @__PURE__ */ ye({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: s,
      currentDownload: o,
      queuedItems: a,
      completedItems: l,
      failedItems: r,
      pausedItems: c,
      hasItems: u,
      activeCount: m,
      cancelDownload: f,
      retryDownload: v,
      resumeDownload: y,
      resumeAllPaused: k,
      removeItem: p,
      clearCompleted: w
    } = Do(), x = _(!1);
    let $ = null;
    $t(
      () => ({
        active: m.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (I, M) => {
        $ && (clearTimeout($), $ = null);
        const L = I.active === 0 && I.failed === 0 && I.paused === 0 && I.completed > 0, W = M && (M.active > 0 || M.paused > 0);
        L && W && ($ = setTimeout(() => {
          w(), $ = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const C = D(() => {
      var L;
      if (s.items.length === 0) return 0;
      const I = l.value.length, M = ((L = o.value) == null ? void 0 : L.progress) || 0;
      return Math.round((I + M / 100) / s.items.length * 100);
    });
    function N(I) {
      f(I);
    }
    function T(I) {
      return I === 0 ? "" : `${(I / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (I, M) => (n(), P(Mt, { to: "body" }, [
      Xe(u) ? (n(), i("div", {
        key: 0,
        class: Re(["model-download-queue", { minimized: !x.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: M[0] || (M[0] = (L) => x.value = !x.value)
        }, [
          t("div", SR, [
            M[4] || (M[4] = t("span", { class: "icon" }, "↓", -1)),
            M[5] || (M[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", IR, "(" + d(Xe(m)) + "/" + d(Xe(s).items.length) + ")", 1)
          ]),
          t("div", ER, [
            t("span", TR, d(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", NR, [
          Xe(o) ? (n(), i("div", UR, [
            M[6] || (M[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            S(Vo, {
              item: Xe(o),
              onCancel: M[1] || (M[1] = (L) => N(Xe(o).id))
            }, null, 8, ["item"])
          ])) : h("", !0),
          Xe(c).length > 0 ? (n(), i("div", AR, [
            t("div", OR, [
              t("span", zR, "Paused (" + d(Xe(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: M[2] || (M[2] = //@ts-ignore
                (...L) => Xe(k) && Xe(k)(...L))
              }, "Resume All")
            ]),
            t("div", FR, [
              (n(!0), i(B, null, he(Xe(c), (L) => (n(), P(Vo, {
                key: L.id,
                item: L,
                onResume: (W) => Xe(y)(L.id),
                onRemove: (W) => Xe(p)(L.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Xe(a).length > 0 ? (n(), i("div", VR, [
            t("div", BR, [
              t("span", WR, "Queued (" + d(Xe(a).length) + ")", 1)
            ]),
            t("div", GR, [
              (n(!0), i(B, null, he(Xe(a), (L) => (n(), P(Vo, {
                key: L.id,
                item: L,
                onCancel: (W) => N(L.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : h("", !0),
          Xe(l).length > 0 ? (n(), i("div", jR, [
            t("div", HR, [
              t("span", KR, "Completed (" + d(Xe(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: M[3] || (M[3] = //@ts-ignore
                (...L) => Xe(w) && Xe(w)(...L))
              }, "Clear")
            ]),
            t("div", qR, [
              (n(!0), i(B, null, he(Xe(l).slice(0, 3), (L) => (n(), P(Vo, {
                key: L.id,
                item: L,
                onRemove: (W) => Xe(p)(L.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : h("", !0),
          Xe(r).length > 0 ? (n(), i("div", YR, [
            t("div", QR, [
              t("span", JR, "Failed (" + d(Xe(r).length) + ")", 1)
            ]),
            t("div", XR, [
              (n(!0), i(B, null, he(Xe(r), (L) => (n(), P(Vo, {
                key: L.id,
                item: L,
                onRetry: (W) => Xe(v)(L.id),
                onRemove: (W) => Xe(p)(L.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : h("", !0)
        ])) : (n(), i("div", PR, [
          t("div", RR, [
            t("div", {
              class: "progress-fill",
              style: Qt({ width: `${C.value}%` })
            }, null, 4)
          ]),
          Xe(o) ? (n(), i("div", MR, [
            t("span", DR, d(Xe(o).filename), 1),
            t("span", LR, d(T(Xe(o).speed)), 1)
          ])) : h("", !0)
        ]))
      ], 2)) : h("", !0)
    ]));
  }
}), eM = /* @__PURE__ */ _e(ZR, [["__scopeId", "data-v-60751cfa"]]), tM = { class: "detail-header" }, sM = { class: "item-count" }, oM = { class: "resource-list" }, nM = { class: "item-info" }, aM = { class: "item-name" }, lM = {
  key: 0,
  class: "item-subtitle"
}, iM = {
  key: 0,
  class: "installing-badge"
}, rM = ["title"], cM = {
  key: 2,
  class: "installed-badge"
}, uM = {
  key: 3,
  class: "queued-badge"
}, dM = {
  key: 4,
  class: "action-buttons"
}, mM = {
  key: 1,
  class: "no-action"
}, fM = /* @__PURE__ */ ye({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = D(() => o.items.filter((p) => p.canAction)), r = D(() => l.value.length > 0 && l.value.every(
      (p) => {
        var w, x;
        return o.queuedItems.has(p.id) || ((w = o.installedItems) == null ? void 0 : w.has(p.id)) || ((x = o.failedItems) == null ? void 0 : x.has(p.id));
      }
    )), c = D(() => r.value ? "All Queued" : o.itemType === "models" ? "Download All" : "Install All");
    function u(p) {
      return o.queuedItems.has(p.id);
    }
    function m(p) {
      return o.installingItem === p.id;
    }
    function f(p) {
      var w;
      return ((w = o.installedItems) == null ? void 0 : w.has(p.id)) ?? !1;
    }
    function v(p) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.has(p.id)) ?? !1;
    }
    function y(p) {
      var w;
      return ((w = o.failedItems) == null ? void 0 : w.get(p.id)) || "Unknown error";
    }
    function k(p) {
      return p.actions && p.actions.length > 0 ? p.actions : [{
        key: "default",
        label: o.itemType === "models" ? "Download" : "Install",
        variant: "secondary"
      }];
    }
    return (p, w) => (n(), P(kt, {
      title: e.title,
      size: "md",
      onClose: w[2] || (w[2] = (x) => a("close"))
    }, {
      body: g(() => [
        t("div", tM, [
          t("span", sM, d(e.items.length) + " " + d(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), P(Ne, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: w[0] || (w[0] = (x) => a("bulk-action"))
          }, {
            default: g(() => [
              b(d(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        t("div", oM, [
          (n(!0), i(B, null, he(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            t("div", nM, [
              t("span", aM, d(x.name), 1),
              x.subtitle ? (n(), i("span", lM, d(x.subtitle), 1)) : h("", !0)
            ]),
            x.canAction ? (n(), i(B, { key: 0 }, [
              m(x) ? (n(), i("span", iM, "Installing...")) : v(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: y(x)
              }, "Failed ⚠", 8, rM)) : f(x) ? (n(), i("span", cM, "Installed")) : u(x) ? (n(), i("span", uM, "Queued")) : (n(), i("div", dM, [
                (n(!0), i(B, null, he(k(x), ($) => (n(), P(Ne, {
                  key: `${x.id}-${$.key}`,
                  size: "sm",
                  variant: $.variant || "secondary",
                  onClick: (C) => a("action", x, $.key)
                }, {
                  default: g(() => [
                    b(d($.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", mM, d(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: g(() => [
        S(Ne, {
          variant: "secondary",
          onClick: w[1] || (w[1] = (x) => a("close"))
        }, {
          default: g(() => [...w[3] || (w[3] = [
            b("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), vM = /* @__PURE__ */ _e(fM, [["__scopeId", "data-v-ec7e9202"]]), pM = {
  key: 0,
  class: "loading-state"
}, gM = {
  key: 1,
  class: "analysis-results"
}, hM = {
  key: 0,
  class: "section"
}, yM = { class: "section-header" }, wM = { class: "section-title" }, _M = { class: "item-list" }, kM = { class: "package-info" }, bM = { class: "package-name" }, $M = { class: "node-count" }, CM = {
  key: 1,
  class: "installing-badge"
}, xM = {
  key: 2,
  class: "queued-badge"
}, SM = ["title"], IM = {
  key: 4,
  class: "installed-badge"
}, EM = {
  key: 1,
  class: "section"
}, TM = { class: "section-header" }, PM = { class: "section-title" }, RM = { class: "item-list" }, MM = { class: "node-type" }, DM = {
  key: 0,
  class: "overflow-note"
}, LM = {
  key: 2,
  class: "section"
}, NM = { class: "section-header" }, UM = { class: "section-title" }, AM = { class: "item-list" }, OM = { class: "node-type" }, zM = { class: "not-found" }, FM = {
  key: 0,
  class: "overflow-note"
}, VM = {
  key: 3,
  class: "section"
}, BM = { class: "section-header" }, WM = { class: "section-title" }, GM = { class: "item-list" }, jM = { class: "package-info community-info" }, HM = { class: "community-title-row" }, KM = { class: "package-name" }, qM = { class: "node-count" }, YM = { class: "community-mapping-note" }, QM = { key: 0 }, JM = {
  key: 0,
  class: "community-actions"
}, XM = {
  key: 1,
  class: "installing-badge"
}, ZM = {
  key: 2,
  class: "queued-badge"
}, eD = ["title"], tD = {
  key: 4,
  class: "installed-badge"
}, sD = ["title"], oD = {
  key: 1,
  class: "no-url"
}, nD = {
  key: 4,
  class: "section"
}, aD = { class: "section-header" }, lD = { class: "section-title" }, iD = { class: "item-list" }, rD = { class: "model-info" }, cD = { class: "model-name" }, uD = {
  key: 1,
  class: "queued-badge"
}, dD = {
  key: 1,
  class: "no-url"
}, mD = { class: "dont-show-again" }, fD = 3e4, vD = /* @__PURE__ */ ye({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = _(!1), o = _(null), a = _(null), l = _(!1), r = _(/* @__PURE__ */ new Set()), c = _(/* @__PURE__ */ new Set()), u = _(/* @__PURE__ */ new Map()), m = _(/* @__PURE__ */ new Set()), f = _(!1), v = _(null), y = _(0), k = _(null), p = _(/* @__PURE__ */ new Set()), w = _(/* @__PURE__ */ new Map()), x = _(/* @__PURE__ */ new Map()), { addToQueue: $ } = Do(), { queueNodeInstall: C } = ut(), N = D(() => {
      var q;
      return ((q = a.value) == null ? void 0 : q.package_aliases) || {};
    });
    function T(q) {
      if (!q) return null;
      const me = N.value;
      let ge = q;
      const ze = /* @__PURE__ */ new Set();
      for (; me[ge] && !ze.has(ge); )
        ze.add(ge), ge = me[ge];
      return ge;
    }
    function I(q, me) {
      return q instanceof Error && q.message ? q.message : typeof q == "string" && q.trim().length > 0 ? q : me;
    }
    function M(q) {
      for (const [me, ge] of w.value.entries())
        ge === q && w.value.delete(me);
    }
    function L(q) {
      if (!x.value.has(q)) return;
      const me = x.value.get(q);
      clearTimeout(me), x.value.delete(q);
    }
    function W() {
      for (const q of x.value.values())
        clearTimeout(q);
      x.value = /* @__PURE__ */ new Map();
    }
    function E(q) {
      L(q);
      const me = setTimeout(() => {
        if (x.value.delete(q), !c.value.has(q)) return;
        M(q), c.value.delete(q), v.value === q && (v.value = null), u.value.set(q, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", q);
      }, fD);
      x.value.set(q, me);
    }
    function R(q) {
      const me = `Cannot install "${q.title}" - package_id is missing`;
      u.value.set(q.item_id, me), o.value = me, console.warn("[ComfyGit] Community install requested without package_id:", q);
    }
    const te = D(() => se.value.length > 0 || X.value.length > 0 || V.value.length > 0 || Q.value.length > 0 || le.value.length > 0), se = D(() => {
      var ge, ze;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const q = /* @__PURE__ */ new Map(), me = (a.value.nodes.resolved || []).filter((Fe) => {
        var et;
        return !Fe.is_installed && ((et = Fe.package) == null ? void 0 : et.package_id);
      });
      for (const Fe of me) {
        const et = T(Fe.package.package_id);
        if (!et) continue;
        q.has(et) || q.set(et, {
          package_id: et,
          title: Fe.package.title || et,
          node_count: 0,
          node_types: [],
          repository: Fe.package.repository || null,
          latest_version: Fe.package.latest_version || null
        });
        const ot = q.get(et);
        ot.node_count++, ot.node_types.push(((ze = Fe.reference) == null ? void 0 : ze.node_type) || Fe.node_type);
      }
      return Array.from(q.values());
    }), oe = D(() => se.value.reduce((q, me) => q + me.node_count, 0)), X = D(() => {
      var q;
      return (q = a.value) != null && q.nodes ? (a.value.nodes.unresolved || []).map((me) => {
        var ge;
        return {
          node_type: ((ge = me.reference) == null ? void 0 : ge.node_type) || me.node_type
        };
      }) : [];
    }), V = D(() => {
      var me;
      if (!((me = a.value) != null && me.nodes)) return [];
      const q = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((ge) => {
        var Fe;
        const ze = ((Fe = ge.reference) == null ? void 0 : Fe.node_type) || ge.node_type;
        return {
          node_type: ze,
          guidance: ge.guidance || q[ze] || null
        };
      });
    }), Q = D(() => {
      var ge, ze, Fe, et, ot, Ze, xt, _t;
      if (!((ge = a.value) != null && ge.nodes)) return [];
      const q = a.value.node_guidance || {}, me = /* @__PURE__ */ new Map();
      for (const ae of a.value.nodes.uninstallable || []) {
        const G = ((ze = ae.reference) == null ? void 0 : ze.node_type) || ae.node_type, de = T(((Fe = ae.package) == null ? void 0 : Fe.package_id) || null), Ge = de || `node:${G}`;
        me.has(Ge) || me.set(Ge, {
          item_id: Ge,
          node_type: G,
          title: ((et = ae.package) == null ? void 0 : et.title) || de || G,
          node_count: 0,
          package_id: de,
          repository: ((ot = ae.package) == null ? void 0 : ot.repository) || null,
          latest_version: ((Ze = ae.package) == null ? void 0 : Ze.latest_version) || null,
          guidance: ae.guidance || q[G] || null
        });
        const nt = me.get(Ge);
        nt.node_count++, nt.guidance || (nt.guidance = ae.guidance || q[G] || null), !nt.repository && ((xt = ae.package) != null && xt.repository) && (nt.repository = ae.package.repository), !nt.latest_version && ((_t = ae.package) != null && _t.latest_version) && (nt.latest_version = ae.package.latest_version);
      }
      return Array.from(me.values());
    }), ne = D(() => Q.value.filter((q) => !!q.package_id)), re = D(() => Q.value.length >= 5 ? Q.value.slice(0, 4) : Q.value), F = D(() => ne.value.length > 0 && ne.value.every((q) => {
      const me = q.package_id;
      return r.value.has(me) || c.value.has(me) || u.value.has(me);
    }));
    function ee(q) {
      const me = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return q.repository && me.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), me;
    }
    const le = D(() => {
      var ge;
      if (!((ge = a.value) != null && ge.models)) return [];
      const q = (a.value.models.resolved || []).filter(
        (ze) => ze.match_type === "download_intent" || ze.match_type === "property_download_intent" || ze.match_type === "not_found"
      ).map((ze) => {
        var Fe, et, ot, Ze;
        return {
          filename: ((et = (Fe = ze.reference) == null ? void 0 : Fe.widget_value) == null ? void 0 : et.split("/").pop()) || ((ot = ze.reference) == null ? void 0 : ot.widget_value) || ze.widget_value,
          widget_value: ((Ze = ze.reference) == null ? void 0 : Ze.widget_value) || ze.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: ze.download_source || null,
          targetPath: ze.target_path || null,
          canDownload: !!(ze.download_source && ze.target_path)
        };
      }), me = (a.value.models.unresolved || []).map((ze) => {
        var Fe, et, ot, Ze;
        return {
          filename: ((et = (Fe = ze.reference) == null ? void 0 : Fe.widget_value) == null ? void 0 : et.split("/").pop()) || ((ot = ze.reference) == null ? void 0 : ot.widget_value) || ze.widget_value,
          widget_value: ((Ze = ze.reference) == null ? void 0 : Ze.widget_value) || ze.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      });
      return [...q, ...me];
    }), Ae = D(() => le.value.filter((q) => q.canDownload)), qe = D(() => se.value.length >= 5 ? se.value.slice(0, 4) : se.value), je = D(() => le.value.length >= 5 ? le.value.slice(0, 4) : le.value), xe = D(() => se.value.length > 0 && se.value.every(
      (q) => r.value.has(q.package_id) || c.value.has(q.package_id) || u.value.has(q.package_id)
    )), A = D(() => Ae.value.length > 0 && Ae.value.every((q) => m.value.has(q.url))), Y = D(() => se.value.length > 0 || ne.value.length > 0 || Ae.value.length > 0), z = D(() => {
      const q = (se.value.length === 0 || xe.value) && (ne.value.length === 0 || F.value), me = Ae.value.length === 0 || A.value;
      return q && me;
    }), O = D(() => k.value === "models" ? `Missing Models (${le.value.length})` : k.value === "packages" ? `Missing Custom Nodes (${oe.value})` : k.value === "community" ? `Community-Mapped Packages (${Q.value.length})` : ""), ie = D(() => k.value === "models" ? le.value.map((q) => ({
      id: q.url || q.widget_value,
      name: q.filename,
      canAction: q.canDownload,
      actionDisabledReason: q.canDownload ? void 0 : "Manual download required"
    })) : k.value === "packages" ? se.value.map((q) => ({
      id: q.package_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : k.value === "community" ? Q.value.map((q) => ({
      id: q.package_id || q.item_id,
      name: q.title,
      subtitle: `(${q.node_count} ${q.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!q.package_id,
      actionDisabledReason: q.package_id ? void 0 : "Manual setup required",
      actions: q.package_id ? ee(q) : []
    })) : []);
    function Te(q, me) {
      if (k.value === "models") {
        const ge = le.value.find((ze) => ze.url === q.id || ze.widget_value === q.id);
        ge && Ee(ge);
      } else if (k.value === "packages") {
        const ge = se.value.find((ze) => ze.package_id === q.id);
        ge && U(ge);
      } else if (k.value === "community") {
        const ge = Q.value.find((Fe) => (Fe.package_id || Fe.item_id) === q.id);
        if (!ge) return;
        if (!ge.package_id) {
          R({ item_id: ge.item_id, title: ge.title });
          return;
        }
        H(ge, me === "install_git" ? "git" : "registry");
      }
    }
    function Ye() {
      k.value === "models" ? De() : k.value === "packages" ? ke() : k.value === "community" && be();
    }
    async function U(q) {
      return ce(q.package_id, q.latest_version, "registry");
    }
    async function H(q, me) {
      return q.package_id ? ce(q.package_id, q.latest_version, me, q.repository) : (R({ item_id: q.item_id, title: q.title }), !1);
    }
    async function ce(q, me, ge, ze) {
      const Fe = T(q) || q, et = me || "latest";
      if (r.value.has(Fe) || c.value.has(Fe) || u.value.has(Fe))
        return !0;
      Le(), v.value = Fe;
      let ot = null;
      try {
        const Ze = {
          id: Fe,
          version: et,
          selected_version: et,
          mode: "remote",
          channel: "default"
        };
        ge === "git" && ze && (Ze.repository = ze, Ze.install_source = "git");
        const { ui_id: xt } = await C(Ze, {
          beforeQueueStart: (_t) => {
            ot = _t, w.value.set(_t, Fe), c.value.add(Fe), E(Fe), console.log("[ComfyGit] Registered pending install:", {
              ui_id: _t,
              packageId: Fe,
              pendingInstalls: Array.from(w.value.entries())
            });
          }
        });
        return ot || (ot = xt, w.value.set(xt, Fe), c.value.add(Fe), E(Fe), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: xt,
          packageId: Fe,
          pendingInstalls: Array.from(w.value.entries())
        })), !0;
      } catch (Ze) {
        const xt = I(Ze, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Ze), ot && w.value.delete(ot), M(Fe), L(Fe), c.value.delete(Fe), u.value.set(Fe, xt), !1;
      } finally {
        v.value = null;
      }
    }
    function Ee(q) {
      !q.url || !q.targetPath || m.value.has(q.url) || ($([{
        workflow: "unsaved",
        filename: q.filename,
        url: q.url,
        targetPath: q.targetPath
      }]), m.value.add(q.url));
    }
    async function ke() {
      const q = { attempted: 0, failed: 0 };
      for (const me of se.value)
        !r.value.has(me.package_id) && !c.value.has(me.package_id) && !u.value.has(me.package_id) && (q.attempted++, await U(me) || q.failed++);
      return q;
    }
    async function be() {
      const q = { attempted: 0, failed: 0 };
      for (const me of ne.value) {
        const ge = me.package_id;
        !r.value.has(ge) && !c.value.has(ge) && !u.value.has(ge) && (q.attempted++, await H(me, "registry") || q.failed++);
      }
      return q;
    }
    function De() {
      const q = Ae.value.filter(
        (me) => !m.value.has(me.url)
      );
      if (q.length === 0) return 0;
      $(q.map((me) => ({
        workflow: "unsaved",
        filename: me.filename,
        url: me.url,
        targetPath: me.targetPath
      })));
      for (const me of q)
        m.value.add(me.url);
      return q.length;
    }
    async function we() {
      const q = await ke(), me = await be();
      De();
      const ge = q.attempted + me.attempted, ze = q.failed + me.failed;
      if (ge > 0 && ze > 0) {
        const Fe = ge - ze;
        o.value = `${Fe} of ${ge} installs queued, ${ze} failed`;
      }
    }
    function Pe() {
      f.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function fe(q) {
      var Fe, et;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const me = q == null ? void 0 : q.id;
      if (me && p.value.has(me)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${me} this session`);
        return;
      }
      const ge = window.app, ze = (Fe = ge == null ? void 0 : ge.extensionManager) == null ? void 0 : Fe.workflow;
      if (ze) {
        let xt = !1;
        for (let _t = 0; _t < 20; _t++) {
          const ae = ze.activeWorkflow;
          if (!ae) {
            await new Promise((Ge) => setTimeout(Ge, 50));
            continue;
          }
          const G = (et = ae.activeState) == null ? void 0 : et.id;
          if (!(me && G === me)) {
            _t < 19 && await new Promise((Ge) => setTimeout(Ge, 50));
            continue;
          }
          if (xt = !0, ae.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${ae.filename}`), me && p.value.add(me);
            return;
          }
          break;
        }
        xt || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      s.value = !0, o.value = null, W(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), m.value = /* @__PURE__ */ new Set(), w.value = /* @__PURE__ */ new Map(), f.value = !1, y.value = 0;
      try {
        const ot = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: q, name: "unsaved" })
        });
        if (!ot.ok) {
          const Ze = await ot.json();
          throw new Error(Ze.error || "Failed to analyze workflow");
        }
        a.value = await ot.json(), te.value && (l.value = !0, me && p.value.add(me));
      } catch (ot) {
        console.error("[ComfyGit] Failed to analyze workflow:", ot);
      } finally {
        s.value = !1;
      }
    }
    function Be() {
      W(), l.value = !1, a.value = null;
    }
    function Ue(q) {
      const { workflow: me } = q.detail;
      me && fe(me);
    }
    function ve(q) {
      var ze;
      const me = (ze = q.detail) == null ? void 0 : ze.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: me,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: q.detail
      });
      const ge = w.value.get(me);
      ge ? (L(ge), v.value = ge, console.log("[ComfyGit] Installing package:", ge)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", me);
    }
    function j(q) {
      var Fe, et, ot, Ze, xt, _t, ae;
      const me = (Fe = q.detail) == null ? void 0 : Fe.ui_id, ge = (ot = (et = q.detail) == null ? void 0 : et.status) == null ? void 0 : ot.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: me,
        status: ge,
        pendingInstalls: Array.from(w.value.entries()),
        eventDetail: q.detail
      });
      const ze = w.value.get(me);
      if (ze) {
        if (L(ze), w.value.delete(me), c.value.delete(ze), v.value === ze && (v.value = null), ge === "success")
          r.value.add(ze), y.value++, console.log("[ComfyGit] Package installed successfully:", ze);
        else {
          const G = ((_t = (xt = (Ze = q.detail) == null ? void 0 : Ze.status) == null ? void 0 : xt.messages) == null ? void 0 : _t[0]) || ((ae = q.detail) == null ? void 0 : ae.result) || "Unknown error";
          u.value.set(ze, G), console.error("[ComfyGit] Package install failed:", ze, G);
        }
        w.value.size === 0 && y.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", y.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: y.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", me);
    }
    let Oe = null;
    function Ie() {
      var q;
      return Oe || (Oe = (q = window.app) == null ? void 0 : q.api), Oe;
    }
    let Ce = !1;
    function Le() {
      if (Ce) return !0;
      const q = Ie();
      return q ? (q.addEventListener("cm-task-started", ve), q.addEventListener("cm-task-completed", j), q.addEventListener("comfygit:workflow-changed", Me), Ce = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Me(q) {
      const { change_type: me } = q.detail;
      (me === "created" || me === "modified") && l.value && (W(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return rt(() => {
      window.addEventListener("comfygit:workflow-loaded", Ue);
    }), Ys(() => {
      if (W(), window.removeEventListener("comfygit:workflow-loaded", Ue), Ce) {
        const q = Ie();
        q && (q.removeEventListener("cm-task-started", ve), q.removeEventListener("cm-task-completed", j), q.removeEventListener("comfygit:workflow-changed", Me)), Ce = !1;
      }
    }), (q, me) => (n(), i(B, null, [
      l.value ? (n(), P(kt, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Be
      }, {
        body: g(() => [
          s.value ? (n(), i("div", pM, [...me[5] || (me[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && te.value ? (n(), i("div", gM, [
            se.value.length > 0 ? (n(), i("div", hM, [
              t("div", yM, [
                t("span", wM, "Missing Custom Nodes (" + d(oe.value) + ")", 1),
                se.value.length > 1 ? (n(), P(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: xe.value,
                  onClick: ke
                }, {
                  default: g(() => [
                    b(d(xe.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", _M, [
                (n(!0), i(B, null, he(qe.value, (ge) => (n(), i("div", {
                  key: ge.package_id,
                  class: "package-item"
                }, [
                  t("div", kM, [
                    t("span", bM, d(ge.title), 1),
                    t("span", $M, "(" + d(ge.node_count) + " " + d(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), P(Ne, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: v.value === ge.package_id,
                    onClick: (ze) => U(ge)
                  }, {
                    default: g(() => [
                      b(d(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : v.value === ge.package_id ? (n(), i("span", CM, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", xM, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(ge.package_id)
                  }, "Failed ⚠", 8, SM)) : (n(), i("span", IM, "Installed"))
                ]))), 128)),
                se.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[0] || (me[0] = (ge) => k.value = "packages")
                }, [
                  t("span", null, "Show all " + d(se.value.length) + " packages...", 1),
                  me[6] || (me[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            X.value.length > 0 ? (n(), i("div", EM, [
              t("div", TM, [
                t("span", PM, "Unknown Nodes (" + d(X.value.length) + ")", 1)
              ]),
              t("div", RM, [
                (n(!0), i(B, null, he(X.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: ge.node_type,
                  class: "item"
                }, [
                  t("code", MM, d(ge.node_type), 1),
                  me[7] || (me[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                X.value.length > 5 ? (n(), i("div", DM, " ...and " + d(X.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            V.value.length > 0 ? (n(), i("div", LM, [
              t("div", NM, [
                t("span", UM, "Requires Newer ComfyUI (" + d(V.value.length) + ")", 1)
              ]),
              t("div", AM, [
                (n(!0), i(B, null, he(V.value.slice(0, 5), (ge) => (n(), i("div", {
                  key: `vg-${ge.node_type}`,
                  class: "item"
                }, [
                  t("code", OM, d(ge.node_type), 1),
                  t("span", zM, d(ge.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                V.value.length > 5 ? (n(), i("div", FM, " ...and " + d(V.value.length - 5) + " more ", 1)) : h("", !0)
              ])
            ])) : h("", !0),
            Q.value.length > 0 ? (n(), i("div", VM, [
              t("div", BM, [
                t("span", WM, "Community-Mapped Packages (" + d(Q.value.length) + ")", 1),
                ne.value.length > 1 ? (n(), P(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: F.value,
                  onClick: be
                }, {
                  default: g(() => [
                    b(d(F.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", GM, [
                (n(!0), i(B, null, he(re.value, (ge) => (n(), i("div", {
                  key: `community-${ge.item_id}`,
                  class: "package-item"
                }, [
                  t("div", jM, [
                    t("div", HM, [
                      t("span", KM, d(ge.title), 1),
                      t("span", qM, "(" + d(ge.node_count) + " " + d(ge.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", YM, [
                      me[8] || (me[8] = b(" Found via community mapping — registry metadata may be incomplete", -1)),
                      ge.guidance ? (n(), i("span", QM, ". " + d(ge.guidance), 1)) : h("", !0)
                    ])
                  ]),
                  ge.package_id ? (n(), i(B, { key: 0 }, [
                    !r.value.has(ge.package_id) && !c.value.has(ge.package_id) && !u.value.has(ge.package_id) ? (n(), i("div", JM, [
                      S(Ne, {
                        size: "sm",
                        variant: "secondary",
                        disabled: v.value === ge.package_id,
                        onClick: (ze) => H(ge, "registry")
                      }, {
                        default: g(() => [
                          b(d(v.value === ge.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      ge.repository ? (n(), P(Ne, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: v.value === ge.package_id,
                        onClick: (ze) => H(ge, "git")
                      }, {
                        default: g(() => [...me[9] || (me[9] = [
                          b(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : h("", !0)
                    ])) : v.value === ge.package_id ? (n(), i("span", XM, "Installing...")) : c.value.has(ge.package_id) ? (n(), i("span", ZM, "Queued")) : u.value.has(ge.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(ge.package_id)
                    }, "Failed ⚠", 8, eD)) : (n(), i("span", tD, "Installed"))
                  ], 64)) : (n(), i(B, { key: 1 }, [
                    u.value.has(ge.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(ge.item_id)
                    }, "Failed ⚠", 8, sD)) : (n(), i("span", oD, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                Q.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[1] || (me[1] = (ge) => k.value = "community")
                }, [
                  t("span", null, "Show all " + d(Q.value.length) + " packages...", 1),
                  me[10] || (me[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            le.value.length > 0 ? (n(), i("div", nD, [
              t("div", aD, [
                t("span", lD, "Missing Models (" + d(le.value.length) + ")", 1),
                Ae.value.length > 1 ? (n(), P(Ne, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: A.value,
                  onClick: De
                }, {
                  default: g(() => [
                    b(d(A.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : h("", !0)
              ]),
              t("div", iD, [
                (n(!0), i(B, null, he(je.value, (ge) => (n(), i("div", {
                  key: ge.widget_value,
                  class: "model-item"
                }, [
                  t("div", rD, [
                    t("span", cD, d(ge.filename), 1)
                  ]),
                  ge.canDownload ? (n(), i(B, { key: 0 }, [
                    m.value.has(ge.url) ? (n(), i("span", uD, "Queued")) : (n(), P(Ne, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (ze) => Ee(ge)
                    }, {
                      default: g(() => [...me[11] || (me[11] = [
                        b(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", dD, "Manual download required"))
                ]))), 128)),
                le.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: me[2] || (me[2] = (ge) => k.value = "models")
                }, [
                  t("span", null, "Show all " + d(le.value.length) + " models...", 1),
                  me[12] || (me[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : h("", !0)
              ])
            ])) : h("", !0),
            t("div", mD, [
              S(Kn, {
                modelValue: f.value,
                "onUpdate:modelValue": [
                  me[3] || (me[3] = (ge) => f.value = ge),
                  Pe
                ]
              }, {
                default: g(() => [...me[13] || (me[13] = [
                  b(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : h("", !0)
        ]),
        footer: g(() => [
          S(Ne, {
            variant: "secondary",
            onClick: Be
          }, {
            default: g(() => [...me[14] || (me[14] = [
              b("Dismiss", -1)
            ])]),
            _: 1
          }),
          Y.value ? (n(), P(Ne, {
            key: 0,
            variant: "primary",
            disabled: z.value,
            onClick: we
          }, {
            default: g(() => [
              b(d(z.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : h("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : h("", !0),
      k.value ? (n(), P(vM, {
        key: 1,
        title: O.value,
        items: ie.value,
        "item-type": k.value,
        "queued-items": k.value === "models" ? m.value : c.value,
        "installed-items": k.value === "models" ? void 0 : r.value,
        "failed-items": k.value === "models" ? void 0 : u.value,
        "installing-item": k.value === "models" ? void 0 : v.value,
        onClose: me[4] || (me[4] = (ge) => k.value = null),
        onAction: Te,
        onBulkAction: Ye
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : h("", !0)
    ], 64));
  }
}), pD = /* @__PURE__ */ _e(vD, [["__scopeId", "data-v-176eb7b8"]]), gD = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', hD = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', yD = {
  comfy: gD,
  phosphor: hD
}, gl = "comfy", oc = "comfygit-theme";
let eo = null, nc = gl;
function wD() {
  try {
    const e = localStorage.getItem(oc);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return gl;
}
function ac(e = gl) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = yD[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), nc = e;
  try {
    localStorage.setItem(oc, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function _D() {
  return nc;
}
function kD(e) {
  ac(e);
}
function bD(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const hl = document.createElement("link");
hl.rel = "stylesheet";
hl.href = new URL("./comfygit-panel.css", import.meta.url).href;
document.head.appendChild(hl);
const $D = wD();
ac($D);
sessionStorage.removeItem("ComfyGit.LastView");
sessionStorage.removeItem("ComfyGit.LastSection");
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), kD(e);
  },
  getTheme: () => {
    const e = _D();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let is = null, Ht = null, tn = null, Bo = null, mi = null, Wo = null, fi = null;
const Eo = _(null);
let mn = "no_workspace", lc = !1;
async function Nn() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const s = await Zt.api.fetchApi("/v2/comfygit/status");
    s.ok && (Eo.value = await s.json());
  } catch {
  }
}
async function Ga() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const s = await Zt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        mn = o.state, lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function ja() {
  var s;
  if (mn === "managed" || !lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function CD() {
  if (!Eo.value) return !1;
  const e = Eo.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || Eo.value.has_changes;
}
function En(e) {
  is && is.remove(), is = document.createElement("div"), is.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", is.appendChild(s), is.addEventListener("click", (l) => {
    l.target === is && Ta();
  });
  const o = (l) => {
    l.key === "Escape" && (Ta(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), ia({
    render: () => gn(lR, {
      initialView: e,
      onClose: Ta,
      onStatusUpdate: async (l) => {
        Eo.value = l, sn(), await Ga(), Ha(), ja();
      }
    })
  }).mount(s), document.body.appendChild(is);
}
function Ta() {
  is && (is.remove(), is = null);
}
function vi(e) {
  Go(), Ht = document.createElement("div"), Ht.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Ht.style.position = "fixed", Ht.style.top = `${s.bottom + 8}px`, Ht.style.right = `${window.innerWidth - s.right}px`, Ht.style.zIndex = "10001";
  const o = (l) => {
    Ht && !Ht.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), tn = ia({
    render: () => gn(Zr, {
      status: Eo.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), xD(l.success, l.message), Nn().then(sn);
      }
    })
  }), tn.mount(Ht), document.body.appendChild(Ht);
}
function Go() {
  tn && (tn.unmount(), tn = null), Ht && (Ht.remove(), Ht = null);
}
function xD(e, s) {
  const o = document.createElement("div"), a = e ? "#22c55e" : "#ef4444";
  o.style.cssText = `
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
  `, o.appendChild(l);
  const r = document.createElement("span");
  r.textContent = s, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function SD() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-download-queue-root", mi = ia({
    render: () => gn(eM)
  }), mi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Model download queue mounted"));
}
function ID() {
  Wo || (Wo = document.createElement("div"), Wo.className = "comfygit-missing-resources-root", fi = ia({
    render: () => gn(pD)
  }), fi.mount(Wo), document.body.appendChild(Wo), console.log("[ComfyGit] Missing resources popup mounted"));
}
let Vt = null;
function sn() {
  if (!Vt) return;
  const e = Vt.querySelector(".commit-indicator");
  e && (e.style.display = CD() ? "block" : "none");
}
function Ha() {
  if (!Vt) return;
  const e = mn !== "managed";
  Vt.disabled = e, Vt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
}
const ic = document.createElement("style");
ic.textContent = `
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
document.head.appendChild(ic);
Zt.registerExtension({
  name: "Comfy.ComfyGitPanel",
  // Commands that can be triggered by keybindings or menu items
  commands: [
    {
      id: "ComfyGit.OpenPanel",
      label: "Open ComfyGit Panel",
      icon: "pi pi-folder-open",
      function: () => En()
    },
    {
      id: "ComfyGit.QuickCommit",
      label: "Quick Commit",
      icon: "pi pi-check",
      function: () => {
        Vt && !Vt.disabled && vi(Vt);
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
  async beforeConfigureGraph(e, s) {
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
    const s = window.__comfygit_pending_workflow;
    s && (delete window.__comfygit_pending_workflow, window.dispatchEvent(new CustomEvent("comfygit:workflow-loaded", {
      detail: { workflow: s }
    })));
  },
  async setup() {
    var l, r;
    const e = document.createElement("div");
    e.className = "comfygit-btn-group";
    const s = document.createElement("button");
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = En, Vt = document.createElement("button"), Vt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Vt.innerHTML = 'Commit <span class="commit-indicator"></span>', Vt.title = "Quick Commit", Vt.onclick = () => vi(Vt), e.appendChild(s), e.appendChild(Vt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), SD(), ID(), window.addEventListener("comfygit:open-panel", ((c) => {
      var m;
      const u = (m = c.detail) == null ? void 0 : m.initialView;
      En(u);
    }));
    const { loadPendingDownloads: o } = Do();
    o(), await Promise.all([Nn(), Ga()]), sn(), Ha(), ja(), setTimeout(ja, 100), setInterval(async () => {
      await Promise.all([Nn(), Ga()]), sn(), Ha();
    }, 3e4);
    const a = Zt.api;
    if (a) {
      let c = function() {
        localStorage.removeItem("workflow"), localStorage.removeItem("Comfy.PreviousWorkflow"), localStorage.removeItem("Comfy.OpenWorkflowsPaths"), localStorage.removeItem("Comfy.ActiveWorkflowIndex"), Object.keys(sessionStorage).forEach((y) => {
          (y.startsWith("workflow:") || y.startsWith("Comfy.OpenWorkflowsPaths:") || y.startsWith("Comfy.ActiveWorkflowIndex:")) && sessionStorage.removeItem(y);
        }), window.location.reload();
      }, u = function() {
        const y = document.createElement("div");
        y.style.cssText = `
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
        const k = document.createElement("span");
        k.textContent = "Workflows updated - refresh required", y.appendChild(k);
        const p = document.createElement("button");
        p.textContent = "Refresh", p.style.cssText = `
          background: var(--comfy-menu-bg);
          color: var(--fg-color);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 6px 16px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
        `, p.onmouseover = () => p.style.background = "var(--comfy-input-bg)", p.onmouseout = () => p.style.background = "var(--comfy-menu-bg)", p.onclick = () => c(), y.appendChild(p);
        const w = document.createElement("button");
        w.textContent = "×", w.style.cssText = `
          background: transparent;
          border: none;
          color: var(--fg-color);
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, w.onmouseover = () => w.style.opacity = "1", w.onmouseout = () => w.style.opacity = "0.6", w.onclick = () => y.remove(), y.appendChild(w), document.body.appendChild(y), console.log("[ComfyGit] Refresh notification displayed");
      }, m = function(y) {
        const k = document.getElementById("comfygit-error-toast");
        k && k.remove();
        const p = document.createElement("div");
        p.id = "comfygit-error-toast", p.style.cssText = `
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
        const w = document.createElement("span");
        w.textContent = "⚠️", w.style.fontSize = "20px", p.appendChild(w);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const $ = document.createElement("div");
        $.textContent = "Node installation failed", $.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild($);
        const C = document.createElement("div");
        C.textContent = "Dependency conflict detected", C.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(C), p.appendChild(x);
        const N = document.createElement("button");
        N.textContent = "View Logs", N.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, N.onmouseover = () => N.style.background = "#c62828", N.onmouseout = () => N.style.background = "#e53935", N.onclick = () => {
          p.remove(), En("debug-env");
        }, p.appendChild(N);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => p.remove(), p.appendChild(T), document.body.appendChild(p), console.log("[ComfyGit] Manager error toast displayed:", y), setTimeout(() => {
          document.getElementById("comfygit-error-toast") && p.remove();
        }, 1e4);
      }, f = function(y) {
        const k = document.getElementById("comfygit-restart-toast");
        k && k.remove();
        const p = document.createElement("div");
        p.id = "comfygit-restart-toast", p.style.cssText = `
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
        const w = document.createElement("span");
        w.textContent = "✅", w.style.fontSize = "20px", p.appendChild(w);
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const $ = document.createElement("div");
        $.textContent = "To apply changes, please restart ComfyUI", $.style.cssText = "font-weight: 500; color: #fff;", x.appendChild($);
        const C = document.createElement("div");
        C.textContent = `${y} node package${y > 1 ? "s" : ""} ready to install`, C.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(C), p.appendChild(x);
        const N = document.createElement("button");
        N.textContent = "Apply Changes", N.style.cssText = `
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
        `, N.onmouseover = () => N.style.background = "rgba(255,255,255,0.1)", N.onmouseout = () => N.style.background = "transparent", N.onclick = async () => {
          N.disabled = !0, N.textContent = "Restarting...", N.style.opacity = "0.7", $.textContent = "Restarting...", C.textContent = "Applying changes, please wait...";
          try {
            const I = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), w.textContent = "✅", $.textContent = "Nodes Installed", $.style.color = "#4caf50", C.textContent = `${y} package${y > 1 ? "s" : ""} installed successfully!`, p.style.borderColor = "#4caf50", N.style.display = "none", setTimeout(() => {
                  p.remove();
                }, 3e3);
              } catch (M) {
                console.error("[ComfyGit] Failed to refresh nodes:", M), w.textContent = "✅", $.textContent = "Restart Complete", $.style.color = "#4caf50", C.textContent = "Refresh the page to load new nodes.", p.style.borderColor = "#4caf50", N.style.display = "none";
              }
            };
            a.addEventListener("reconnected", I, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (I) {
            console.error("[ComfyGit] Failed to restart:", I), $.textContent = "Restart Failed", $.style.color = "#e53935", C.textContent = "Could not restart server. Try again.", p.style.borderColor = "#e53935", N.textContent = "Try Again", N.disabled = !1, N.style.opacity = "1";
          }
        }, p.appendChild(N);
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
        `, T.onmouseover = () => T.style.opacity = "1", T.onmouseout = () => T.style.opacity = "0.6", T.onclick = () => p.remove(), p.appendChild(T), document.body.appendChild(p), console.log(`[ComfyGit] Restart required notification displayed (${y} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (y) => {
        const { change_type: k, workflow_name: p } = y.detail;
        console.log(`[ComfyGit] Workflow ${k}: ${p}`), await Nn(), sn();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let v = !1;
      a.addEventListener("status", async (y) => {
        const k = y.detail != null;
        k && !v && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), v = k;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (y) => {
        const k = bD(y.detail);
        k && m(k);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (y) => {
        const k = y, { count: p = 1 } = k.detail || {};
        f(p);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
