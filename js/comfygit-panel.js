var Uc = Object.defineProperty;
var Oc = (e, t, o) => t in e ? Uc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var _n = (e, t, o) => Oc(e, typeof t != "symbol" ? t + "" : t, o);
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
const gt = {}, wo = [], bs = () => {
}, Ai = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Ac = Object.prototype.hasOwnProperty, ft = (e, t) => Ac.call(e, t), et = Array.isArray, _o = (e) => fn(e) === "[object Map]", Mo = (e) => fn(e) === "[object Set]", Ul = (e) => fn(e) === "[object Date]", tt = (e) => typeof e == "function", Ct = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", pt = (e) => e !== null && typeof e == "object", zi = (e) => (pt(e) || tt(e)) && tt(e.then) && tt(e.catch), Fi = Object.prototype.toString, fn = (e) => Fi.call(e), zc = (e) => fn(e).slice(8, -1), Vi = (e) => fn(e) === "[object Object]", cl = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((o) => t[o] || (t[o] = e(o)));
}, Fc = /-\w/g, is = Yn(
  (e) => e.replace(Fc, (t) => t.slice(1).toUpperCase())
), Vc = /\B([A-Z])/g, Js = Yn(
  (e) => e.replace(Vc, "-$1").toLowerCase()
), Xn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Yn(
  (e) => e ? `on${Xn(e)}` : ""
), Hs = (e, t) => !Object.is(e, t), En = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, Bi = (e, t, o, a = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Bc = (e) => {
  const t = Ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ol;
const ea = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (et(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = Ct(a) ? Hc(a) : Rt(a);
      if (l)
        for (const r in l)
          t[r] = l[r];
    }
    return t;
  } else if (Ct(e) || pt(e))
    return e;
}
const Wc = /;(?![^(]*\))/g, Gc = /:([^]+)/, jc = /\/\*[^]*?\*\//g;
function Hc(e) {
  const t = {};
  return e.replace(jc, "").split(Wc).forEach((o) => {
    if (o) {
      const a = o.split(Gc);
      a.length > 1 && (t[a[0].trim()] = a[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (et(e))
    for (let o = 0; o < e.length; o++) {
      const a = Be(e[o]);
      a && (t += a + " ");
    }
  else if (pt(e))
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
  for (let a = 0; o && a < e.length; a++)
    o = lo(e[a], t[a]);
  return o;
}
function lo(e, t) {
  if (e === t) return !0;
  let o = Ul(e), a = Ul(t);
  if (o || a)
    return o && a ? e.getTime() === t.getTime() : !1;
  if (o = ms(e), a = ms(t), o || a)
    return e === t;
  if (o = et(e), a = et(t), o || a)
    return o && a ? Jc(e, t) : !1;
  if (o = pt(e), a = pt(t), o || a) {
    if (!o || !a)
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
const Gi = (e) => !!(e && e.__v_isRef === !0), m = (e) => Ct(e) ? e : e == null ? "" : et(e) || pt(e) && (e.toString === Fi || !tt(e.toString)) ? Gi(e) ? m(e.value) : JSON.stringify(e, ji, 2) : String(e), ji = (e, t) => Gi(t) ? ji(e, t.value) : _o(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [a, l], r) => (o[Ma(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => Ma(o))
} : ms(t) ? Ma(t) : pt(t) && !et(t) && !Vi(t) ? String(t) : t, Ma = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ms(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
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
    const t = wt, o = us;
    wt = this, us = !0;
    try {
      return this.fn();
    } finally {
      Qi(this), wt = t, us = o, this.flags &= -3;
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
        } catch (a) {
          e || (e = a);
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
  let t, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), fl(a), Xc(a)) : t = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
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
  const t = e.dep, o = wt, a = us;
  wt = e, us = !0;
  try {
    Ji(e);
    const l = e.fn(e._value);
    (t.version === 0 || Hs(l, e._value)) && (e.flags |= 128, e._value = l, t.version++);
  } catch (l) {
    throw t.version++, l;
  } finally {
    wt = o, us = a, Qi(e), e.flags &= -3;
  }
}
function fl(e, t = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
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
let us = !0;
const Xi = [];
function Ds() {
  Xi.push(us), us = !1;
}
function Ns() {
  const e = Xi.pop();
  us = e === void 0 ? !0 : e;
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
    if (!wt || !us || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Zc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, Zi(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = a);
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
      for (let a = t.deps; a; a = a.nextDep)
        Zi(a);
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
  if (us && wt) {
    let a = Ga.get(e);
    a || Ga.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new vl()), l.map = a, l.key = o), l.track();
  }
}
function Ps(e, t, o, a, l, r) {
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
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === an || !ms(w) && w >= f) && u(p);
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
  return t === e ? t : (zt(t, "iterate", an), as(e) ? t : t.map(fs));
}
function ta(e) {
  return zt(e = ut(e), "iterate", an), e;
}
function Ws(e, t) {
  return Us(e) ? no(e) ? Io(fs(t)) : Io(t) : fs(t);
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
      (o) => o.map((a) => Ws(this, a)),
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
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...t) {
    return zl(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zl(this, "reduceRight", e, t);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Es(this, "some", e, t, void 0, arguments);
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
    return Ra(this, "values", (e) => Ws(this, e));
  }
};
function Ra(e, t, o) {
  const a = ta(e), l = a[t]();
  return a !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const tu = Array.prototype;
function Es(e, t, o, a, l, r) {
  const c = ta(e), u = c !== e && !as(e), d = c[t];
  if (d !== tu[t]) {
    const p = d.apply(e, r);
    return u ? fs(p) : p;
  }
  let v = o;
  c !== e && (u ? v = function(p, w) {
    return o.call(this, Ws(e, p), w, e);
  } : o.length > 2 && (v = function(p, w) {
    return o.call(this, p, w, e);
  }));
  const f = d.call(c, v, a);
  return u && l ? l(f) : f;
}
function zl(e, t, o, a) {
  const l = ta(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[t](r, ...a);
}
function La(e, t, o) {
  const a = ut(e);
  zt(a, "iterate", an);
  const l = a[t](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ut(o[0]), a[t](...o)) : l;
}
function Uo(e, t, o = []) {
  Ds(), dl();
  const a = ut(e)[t].apply(e, o);
  return ml(), Ns(), a;
}
const su = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), er = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function ou(e) {
  ms(e) || (e = String(e));
  const t = ut(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class tr {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, a) {
    if (o === "__v_skip") return t.__v_skip;
    const l = this._isReadonly, r = this._isShallow;
    if (o === "__v_isReactive")
      return !l;
    if (o === "__v_isReadonly")
      return l;
    if (o === "__v_isShallow")
      return r;
    if (o === "__v_raw")
      return a === (l ? r ? fu : ar : r ? nr : or).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(a) ? t : void 0;
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
      Wt(t) ? t : a
    );
    if ((ms(o) ? er.has(o) : su(o)) || (l || zt(t, "get", o), r))
      return u;
    if (Wt(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && pt(d) ? On(d) : d;
    }
    return pt(u) ? l ? On(u) : co(u) : u;
  }
}
class sr extends tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, a, l) {
    let r = t[o];
    const c = et(t) && cl(o);
    if (!this._isShallow) {
      const v = Us(r);
      if (!as(a) && !Us(a) && (r = ut(r), a = ut(a)), !c && Wt(r) && !Wt(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < t.length : ft(t, o), d = Reflect.set(
      t,
      o,
      a,
      Wt(t) ? t : l
    );
    return t === ut(l) && (u ? Hs(a, r) && Ps(t, "set", o, a) : Ps(t, "add", o, a)), d;
  }
  deleteProperty(t, o) {
    const a = ft(t, o);
    t[o];
    const l = Reflect.deleteProperty(t, o);
    return l && a && Ps(t, "delete", o, void 0), l;
  }
  has(t, o) {
    const a = Reflect.has(t, o);
    return (!ms(o) || !er.has(o)) && zt(t, "has", o), a;
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
const Ha = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function ru(e, t, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? Ha : t ? Io : fs;
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
function bn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cu(e, t) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Hs(l, u) && zt(c, "get", l), zt(c, "get", u));
      const { has: d } = kn(c), v = t ? Ha : e ? Io : fs;
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
      const c = this, u = c.__v_raw, d = ut(u), v = t ? Ha : e ? Io : fs;
      return !e && zt(d, "iterate", oo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
    }
  };
  return Mt(
    o,
    e ? {
      add: bn("add"),
      set: bn("set"),
      delete: bn("delete"),
      clear: bn("clear")
    } : {
      add(l) {
        !t && !as(l) && !Us(l) && (l = ut(l));
        const r = ut(this);
        return kn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !t && !as(r) && !Us(r) && (r = ut(r));
        const c = ut(this), { has: u, get: d } = kn(c);
        let v = u.call(c, l);
        v || (l = ut(l), v = u.call(c, l));
        const f = d.call(c, l);
        return c.set(l, r), v ? Hs(r, f) && Ps(c, "set", l, r) : Ps(c, "add", l, r), this;
      },
      delete(l) {
        const r = ut(this), { has: c, get: u } = kn(r);
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
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
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
  return Us(e) ? e : gl(
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
function On(e) {
  return gl(
    e,
    !0,
    lu,
    mu,
    ar
  );
}
function gl(e, t, o, a, l) {
  if (!pt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = pu(e);
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
  return Us(e) ? no(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Us(e) {
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
const fs = (e) => pt(e) ? co(e) : e, Io = (e) => pt(e) ? On(e) : e;
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
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? t : ut(t), this._value = o ? t : fs(t), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const o = this._rawValue, a = this.__v_isShallow || as(t) || Us(t);
    t = a ? t : ut(t), Hs(t, o) && (this._rawValue = t, this._value = a ? t : fs(t), this.dep.trigger());
  }
}
function st(e) {
  return Wt(e) ? e.value : e;
}
const _u = {
  get: (e, t, o) => t === "__v_raw" ? e : st(Reflect.get(e, t, o)),
  set: (e, t, o, a) => {
    const l = e[t];
    return Wt(l) && !Wt(o) ? (l.value = o, !0) : Reflect.set(e, t, o, a);
  }
};
function lr(e) {
  return no(e) ? e : new Proxy(e, _u);
}
class ku {
  constructor(t, o, a) {
    this.fn = t, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
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
  let a, l;
  return tt(e) ? a = e : (a = e.get, l = e.set), new ku(a, l, o);
}
const $n = {}, An = /* @__PURE__ */ new WeakMap();
let to;
function $u(e, t = !1, o = to) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function Cu(e, t, o = gt) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (T) => l ? T : as(T) || l === !1 || l === 0 ? Rs(T, 1) : Rs(T);
  let f, p, w, g, _ = !1, x = !1;
  if (Wt(e) ? (p = () => e.value, _ = as(e)) : no(e) ? (p = () => v(e), _ = !0) : et(e) ? (x = !0, _ = e.some((T) => no(T) || as(T)), p = () => e.map((T) => {
    if (Wt(T))
      return T.value;
    if (no(T))
      return v(T);
    if (tt(T))
      return d ? d(T, 2) : T();
  })) : tt(e) ? t ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Ns();
      }
    }
    const T = to;
    to = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = T;
    }
  } : p = bs, t && l) {
    const T = p, D = l === !0 ? 1 / 0 : l;
    p = () => Rs(T(), D);
  }
  const C = Yc(), S = () => {
    f.stop(), C && C.active && rl(C.effects, f);
  };
  if (r && t) {
    const T = t;
    t = (...D) => {
      T(...D), S();
    };
  }
  let I = x ? new Array(e.length).fill($n) : $n;
  const M = (T) => {
    if (!(!(f.flags & 1) || !f.dirty && !T))
      if (t) {
        const D = f.run();
        if (l || _ || (x ? D.some((z, G) => Hs(z, I[G])) : Hs(D, I))) {
          w && w();
          const z = to;
          to = f;
          try {
            const G = [
              D,
              // pass undefined as the old value when it's changed for the first time
              I === $n ? void 0 : x && I[0] === $n ? [] : I,
              g
            ];
            I = D, d ? d(t, 3, G) : (
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
  return u && u(M), f = new Hi(p), f.scheduler = c ? () => c(M, !1) : M, g = (T) => $u(T, !1, f), w = f.onStop = () => {
    const T = An.get(f);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const D of T) D();
      An.delete(f);
    }
  }, t ? a ? M(!0) : I = f.run() : c ? c(M.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Rs(e, t = 1 / 0, o) {
  if (t <= 0 || !pt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= t))
    return e;
  if (o.set(e, t), t--, Wt(e))
    Rs(e.value, t, o);
  else if (et(e))
    for (let a = 0; a < e.length; a++)
      Rs(e[a], t, o);
  else if (Mo(e) || _o(e))
    e.forEach((a) => {
      Rs(a, t, o);
    });
  else if (Vi(e)) {
    for (const a in e)
      Rs(e[a], t, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Rs(e[a], t, o);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vn(e, t, o, a) {
  try {
    return a ? e(...a) : e();
  } catch (l) {
    sa(l, t, o);
  }
}
function vs(e, t, o, a) {
  if (tt(e)) {
    const l = vn(e, t, o, a);
    return l && zi(l) && l.catch((r) => {
      sa(r, t, o);
    }), l;
  }
  if (et(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], t, o, a));
    return l;
  }
}
function sa(e, t, o, a = !0) {
  const l = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = t && t.appContext.config || gt;
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
  xu(e, o, l, a, c);
}
function xu(e, t, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const qt = [];
let ys = -1;
const ko = [];
let Gs = null, go = 0;
const ir = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Pt(e) {
  const t = zn || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Su(e) {
  let t = ys + 1, o = qt.length;
  for (; t < o; ) {
    const a = t + o >>> 1, l = qt[a], r = ln(l);
    r < e || r === e && l.flags & 2 ? t = a + 1 : o = a;
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
  zn || (zn = ir.then(ur));
}
function Iu(e) {
  et(e) ? ko.push(...e) : Gs && e.id === -1 ? Gs.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), rr();
}
function Fl(e, t, o = ys + 1) {
  for (; o < qt.length; o++) {
    const a = qt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      qt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function cr(e) {
  if (ko.length) {
    const t = [...new Set(ko)].sort(
      (o, a) => ln(o) - ln(a)
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
    ys = -1, qt.length = 0, cr(), zn = null, (qt.length || ko.length) && ur();
  }
}
let Ut = null, dr = null;
function Fn(e) {
  const t = Ut;
  return Ut = e, dr = e && e.type.__scopeId || null, t;
}
function h(e, t = Ut, o) {
  if (!t || e._n)
    return e;
  const a = (...l) => {
    a._d && Wn(-1);
    const r = Fn(t);
    let c;
    try {
      c = e(...l);
    } finally {
      Fn(r), a._d && Wn(1);
    }
    return c;
  };
  return a._n = !0, a._c = !0, a._d = !0, a;
}
function Tt(e, t) {
  if (Ut === null)
    return e;
  const o = ra(Ut), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < t.length; l++) {
    let [r, c, u, d = gt] = t[l];
    r && (tt(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Rs(c), a.push({
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
function Ys(e, t, o, a) {
  const l = e.dirs, r = t && t.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ds(), vs(d, o, 8, [
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
  process(e, t, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: x, createComment: C }
    } = v, S = Qo(t.props);
    let { shapeFlag: I, children: M, dynamicChildren: T } = t;
    if (e == null) {
      const D = t.el = x(""), z = t.anchor = x("");
      g(D, o, a), g(z, o, a);
      const G = (q, ce) => {
        I & 16 && f(
          M,
          q,
          ce,
          l,
          r,
          c,
          u,
          d
        );
      }, L = () => {
        const q = t.target = qa(t.props, _), ce = pr(q, t, x, g);
        q && (c !== "svg" && Bl(q) ? c = "svg" : c !== "mathml" && Wl(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), S || (G(q, ce), Tn(t, !1)));
      };
      S && (G(o, z), Tn(t, !0)), Vl(t.props) ? (t.el.__isMounted = !1, jt(() => {
        L(), delete t.el.__isMounted;
      }, r)) : L();
    } else {
      if (Vl(t.props) && e.el.__isMounted === !1) {
        jt(() => {
          vr.process(
            e,
            t,
            o,
            a,
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
      const D = t.anchor = e.anchor, z = t.target = e.target, G = t.targetAnchor = e.targetAnchor, L = Qo(e.props), q = L ? o : z, ce = L ? D : G;
      if (c === "svg" || Bl(z) ? c = "svg" : (c === "mathml" || Wl(z)) && (c = "mathml"), T ? (w(
        e.dynamicChildren,
        T,
        q,
        l,
        r,
        c,
        u
      ), $l(e, t, !0)) : d || p(
        e,
        t,
        q,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), S)
        L ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Cn(
          t,
          o,
          D,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const ne = t.target = qa(
          t.props,
          _
        );
        ne && Cn(
          t,
          ne,
          null,
          v,
          0
        );
      } else L && Cn(
        t,
        z,
        G,
        v,
        1
      );
      Tn(t, S);
    }
  },
  remove(e, t, o, { um: a, o: { remove: l } }, r) {
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
        const x = u[_];
        a(
          x,
          t,
          o,
          g,
          !!x.dynamicChildren
        );
      }
    }
  },
  move: Cn,
  hydrate: Eu
};
function Cn(e, t, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, t, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, t, o), (!p || Qo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        t,
        o,
        2
      );
  p && a(u, t, o);
}
function Eu(e, t, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(x, C, S, I) {
    C.anchor = p(
      c(x),
      C,
      u(x),
      o,
      a,
      l,
      r
    ), C.targetStart = S, C.targetAnchor = I;
  }
  const g = t.target = qa(
    t.props,
    d
  ), _ = Qo(t.props);
  if (g) {
    const x = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (_)
        w(
          e,
          t,
          x,
          x && c(x)
        );
      else {
        t.anchor = c(e);
        let C = x;
        for (; C; ) {
          if (C && C.nodeType === 8) {
            if (C.data === "teleport start anchor")
              t.targetStart = C;
            else if (C.data === "teleport anchor") {
              t.targetAnchor = C, g._lpa = t.targetAnchor && c(t.targetAnchor);
              break;
            }
          }
          C = c(C);
        }
        t.targetAnchor || pr(g, t, f, v), p(
          x && c(x),
          t,
          g,
          o,
          a,
          l,
          r
        );
      }
    Tn(t, _);
  } else _ && t.shapeFlag & 16 && w(e, t, e, c(e));
  return t.anchor && c(t.anchor);
}
const Kt = vr;
function Tn(e, t) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (t ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function pr(e, t, o, a) {
  const l = t.targetStart = o(""), r = t.targetAnchor = o("");
  return l[mr] = r, e && (a(l, e), a(r, e)), r;
}
const Ms = Symbol("_leaveCb"), xn = Symbol("_enterCb");
function gr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return at(() => {
    e.isMounted = !0;
  }), aa(() => {
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
    const o = xl(), a = gr();
    return () => {
      const l = t.default && wl(t.default(), !0);
      if (!l || !l.length)
        return;
      const r = wr(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Da(r);
      const d = Gl(r);
      if (!d)
        return Da(r);
      let v = rn(
        d,
        c,
        a,
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
          a,
          o
        );
        if (io(f, p), u === "out-in" && d.type !== Vt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Da(r);
        u === "in-out" && d.type !== Vt ? p.delayLeave = (w, g, _) => {
          const x = _r(
            a,
            f
          );
          x[String(f.key)] = f, w[Ms] = () => {
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
  let a = o.get(t.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(t.type, a)), a;
}
function rn(e, t, o, a, l) {
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
    onLeaveCancelled: x,
    onBeforeAppear: C,
    onAppear: S,
    onAfterAppear: I,
    onAppearCancelled: M
  } = t, T = String(e.key), D = _r(o, e), z = (q, ce) => {
    q && vs(
      q,
      a,
      9,
      ce
    );
  }, G = (q, ce) => {
    const ne = ce[1];
    z(q, ce), et(q) ? q.every((Y) => Y.length <= 1) && ne() : q.length <= 1 && ne();
  }, L = {
    mode: c,
    persisted: u,
    beforeEnter(q) {
      let ce = d;
      if (!o.isMounted)
        if (r)
          ce = C || d;
        else
          return;
      q[Ms] && q[Ms](
        !0
        /* cancelled */
      );
      const ne = D[T];
      ne && so(e, ne) && ne.el[Ms] && ne.el[Ms](), z(ce, [q]);
    },
    enter(q) {
      let ce = v, ne = f, Y = p;
      if (!o.isMounted)
        if (r)
          ce = S || v, ne = I || f, Y = M || p;
        else
          return;
      let we = !1;
      const ee = q[xn] = (j) => {
        we || (we = !0, j ? z(Y, [q]) : z(ne, [q]), L.delayedLeave && L.delayedLeave(), q[xn] = void 0);
      };
      ce ? G(ce, [q, ee]) : ee();
    },
    leave(q, ce) {
      const ne = String(e.key);
      if (q[xn] && q[xn](
        !0
        /* cancelled */
      ), o.isUnmounting)
        return ce();
      z(w, [q]);
      let Y = !1;
      const we = q[Ms] = (ee) => {
        Y || (Y = !0, ce(), ee ? z(x, [q]) : z(_, [q]), q[Ms] = void 0, D[ne] === e && delete D[ne]);
      };
      D[ne] = e, g ? G(g, [q, we]) : we();
    },
    clone(q) {
      const ce = rn(
        q,
        t,
        o,
        a,
        l
      );
      return l && l(ce), ce;
    }
  };
  return L;
}
function Da(e) {
  if (oa(e))
    return e = qs(e), e.children = null, e;
}
function Gl(e) {
  if (!oa(e))
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
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      wl(c.children, t, u)
    )) : (t || c.type !== Vt) && a.push(u != null ? qs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function be(e, t) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function kr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = /* @__PURE__ */ new WeakMap();
function Yo(e, t, o, a, l = !1) {
  if (et(e)) {
    e.forEach(
      (_, x) => Yo(
        _,
        t && (et(t) ? t[x] : t),
        o,
        a,
        l
      )
    );
    return;
  }
  if (bo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Yo(e, t, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ra(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = t && t.r, f = u.refs === gt ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === gt ? Ai : (_) => ft(w, _);
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
    const _ = Ct(d), x = Wt(d);
    if (_ || x) {
      const C = () => {
        if (e.f) {
          const S = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            et(S) && rl(S, r);
          else if (et(S))
            S.includes(r) || S.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const I = [r];
            d.value = I, e.k && (f[e.k] = I);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : x && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const S = () => {
          C(), Vn.delete(e);
        };
        S.id = -1, Vn.set(e, S), jt(S, o);
      } else
        jl(e), C();
    }
  }
}
function jl(e) {
  const t = Vn.get(e);
  t && (t.flags |= 8, Vn.delete(e));
}
ea().requestIdleCallback;
ea().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, oa = (e) => e.type.__isKeepAlive;
function Pu(e, t) {
  br(e, "a", t);
}
function Ru(e, t) {
  br(e, "da", t);
}
function br(e, t, o = Bt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (na(t, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      oa(l.parent.vnode) && Lu(a, t, o, l), l = l.parent;
  }
}
function Lu(e, t, o, a) {
  const l = na(
    t,
    e,
    a,
    !0
    /* prepend */
  );
  Po(() => {
    rl(a[t], l);
  }, o);
}
function na(e, t, o = Bt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = t.__weh || (t.__weh = (...c) => {
      Ds();
      const u = pn(o), d = vs(t, o, e, c);
      return u(), Ns(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Os = (e) => (t, o = Bt) => {
  (!dn || e === "sp") && na(e, (...a) => t(...a), o);
}, Du = Os("bm"), at = Os("m"), Nu = Os(
  "bu"
), $r = Os("u"), aa = Os(
  "bum"
), Po = Os("um"), Uu = Os(
  "sp"
), Ou = Os("rtg"), Au = Os("rtc");
function zu(e, t = Bt) {
  na("ec", e, t);
}
const Fu = "components", Cr = Symbol.for("v-ndc");
function _l(e) {
  return Ct(e) ? Vu(Fu, e, !1) || e : e || Cr;
}
function Vu(e, t, o = !0, a = !1) {
  const l = Ut || Bt;
  if (l) {
    const r = l.type;
    {
      const u = Td(
        r,
        !1
      );
      if (u && (u === t || u === is(t) || u === Xn(is(t))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Hl(l[e] || r[e], t) || // global registration
      Hl(l.appContext[e], t)
    );
    return !c && a ? r : c;
  }
}
function Hl(e, t) {
  return e && (e[t] || e[is(t)] || e[Xn(is(t))]);
}
function ge(e, t, o, a) {
  let l;
  const r = o, c = et(e);
  if (c || Ct(e)) {
    const u = c && no(e);
    let d = !1, v = !1;
    u && (d = !as(e), v = Us(e), e = ta(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = t(
        d ? v ? Io(fs(e[f])) : fs(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = t(u + 1, u, void 0, r);
  } else if (pt(e))
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
    const a = t[o];
    if (et(a))
      for (let l = 0; l < a.length; l++)
        e[a[l].name] = a[l].fn;
    else a && (e[a.name] = a.key ? (...l) => {
      const r = a.fn(...l);
      return r && (r.key = a.key), r;
    } : a.fn);
  }
  return e;
}
function ot(e, t, o = {}, a, l) {
  if (Ut.ce || Ut.parent && bo(Ut.parent) && Ut.parent.ce) {
    const v = Object.keys(o).length > 0;
    return t !== "default" && (o.name = t), n(), R(
      B,
      null,
      [b("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[t];
  r && r._c && (r._d = !1), n();
  const c = r && xr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !ms(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
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
), Na = (e, t) => e !== gt && !e.__isScriptSetup && ft(e, t), Bu = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return a[t];
          case 2:
            return l[t];
          case 4:
            return o[t];
          case 3:
            return r[t];
        }
      else {
        if (Na(a, t))
          return c[t] = 1, a[t];
        if (l !== gt && ft(l, t))
          return c[t] = 2, l[t];
        if (ft(r, t))
          return c[t] = 3, r[t];
        if (o !== gt && ft(o, t))
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
    if (o !== gt && ft(o, t))
      return c[t] = 4, o[t];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Na(l, t) ? (l[t] = o, !0) : a !== gt && ft(a, t) ? (a[t] = o, !0) : ft(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== gt && u[0] !== "$" && ft(e, u) || Na(t, u) || ft(r, u) || ft(a, u) || ft(Xo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
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
  const t = Ir(e), o = e.proxy, a = e.ctx;
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
    activated: x,
    deactivated: C,
    beforeDestroy: S,
    beforeUnmount: I,
    destroyed: M,
    unmounted: T,
    render: D,
    renderTracked: z,
    renderTriggered: G,
    errorCaptured: L,
    serverPrefetch: q,
    // public API
    expose: ce,
    inheritAttrs: ne,
    // assets
    components: Y,
    directives: we,
    filters: ee
  } = t;
  if (v && Gu(v, a, null), c)
    for (const ke in c) {
      const se = c[ke];
      tt(se) && (a[ke] = se.bind(o));
    }
  if (l) {
    const ke = l.call(o, o);
    pt(ke) && (e.data = co(ke));
  }
  if (Ja = !0, r)
    for (const ke in r) {
      const se = r[ke], fe = tt(se) ? se.bind(o, o) : tt(se.get) ? se.get.bind(o, o) : bs, U = !tt(se) && tt(se.set) ? se.set.bind(o) : bs, me = P({
        get: fe,
        set: U
      });
      Object.defineProperty(a, ke, {
        enumerable: !0,
        configurable: !0,
        get: () => me.value,
        set: (Pe) => me.value = Pe
      });
    }
  if (u)
    for (const ke in u)
      Sr(u[ke], a, o, ke);
  if (d) {
    const ke = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(ke).forEach((se) => {
      Qu(se, ke[se]);
    });
  }
  f && Kl(f, e, "c");
  function K(ke, se) {
    et(se) ? se.forEach((fe) => ke(fe.bind(o))) : se && ke(se.bind(o));
  }
  if (K(Du, p), K(at, w), K(Nu, g), K($r, _), K(Pu, x), K(Ru, C), K(zu, L), K(Au, z), K(Ou, G), K(aa, I), K(Po, T), K(Uu, q), et(ce))
    if (ce.length) {
      const ke = e.exposed || (e.exposed = {});
      ce.forEach((se) => {
        Object.defineProperty(ke, se, {
          get: () => o[se],
          set: (fe) => o[se] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === bs && (e.render = D), ne != null && (e.inheritAttrs = ne), Y && (e.components = Y), we && (e.directives = we), q && kr(e);
}
function Gu(e, t, o = bs) {
  et(e) && (e = Qa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    pt(l) ? "default" in l ? r = Mn(
      l.from || a,
      l.default,
      !0
    ) : r = Mn(l.from || a) : r = Mn(l), Wt(r) ? Object.defineProperty(t, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[a] = r;
  }
}
function Kl(e, t, o) {
  vs(
    et(e) ? e.map((a) => a.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Sr(e, t, o, a) {
  let l = a.includes(".") ? Mr(o, a) : () => o[a];
  if (Ct(e)) {
    const r = t[e];
    tt(r) && ht(l, r);
  } else if (tt(e))
    ht(l, e.bind(o));
  else if (pt(e))
    if (et(e))
      e.forEach((r) => Sr(r, t, o, a));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : t[e.handler];
      tt(r) && ht(l, r, e);
    }
}
function Ir(e) {
  const t = e.type, { mixins: o, extends: a } = t, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(t);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = t : (d = {}, l.length && l.forEach(
    (v) => Bn(d, v, c, !0)
  ), Bn(d, t, c)), pt(t) && r.set(t, d), d;
}
function Bn(e, t, o, a = !1) {
  const { mixins: l, extends: r } = t;
  r && Bn(e, r, o, !0), l && l.forEach(
    (c) => Bn(e, c, o, !0)
  );
  for (const c in t)
    if (!(a && c === "expose")) {
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
  for (const a in t)
    o[a] = Gt(e[a], t[a]);
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
  return function(a, l = null) {
    tt(a) || (a = Mt({}, a)), l != null && !pt(l) && (l = null);
    const r = Er(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: Ku++,
      _component: a,
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
          const g = v._ceVNode || b(a, l);
          return g.appContext = r, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(g, f, w), d = !0, v._container = f, f.__vue_app__ = v, ra(g.component);
        }
      },
      onUnmount(f) {
        u.push(f);
      },
      unmount() {
        d && (vs(
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
    const a = Bt.parent && Bt.parent.provides;
    a === o && (o = Bt.provides = Object.create(a)), o[e] = t;
  }
}
function Mn(e, t, o = !1) {
  const a = xl();
  if (a || $o) {
    let l = $o ? $o._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(t) ? t.call(a && a.proxy) : t;
  }
}
const Yu = Symbol.for("v-scx"), Xu = () => Mn(Yu);
function ht(e, t, o) {
  return Tr(e, t, o);
}
function Tr(e, t, o = gt) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = t && a || !t && r !== "post";
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
  u.call = (g, _, x) => vs(g, f, _, x);
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
  const a = this.proxy, l = Ct(e) ? e.includes(".") ? Mr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  tt(t) ? r = t : (r = t.handler, o = t);
  const c = pn(this), u = Tr(l, r.bind(a), o);
  return c(), u;
}
function Mr(e, t) {
  const o = t.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const ed = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${is(t)}Modifiers`] || e[`${Js(t)}Modifiers`];
function td(e, t, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || gt;
  let l = o;
  const r = t.startsWith("update:"), c = r && ed(a, t.slice(7));
  c && (c.trim && (l = o.map((f) => Ct(f) ? f.trim() : f)), c.number && (l = o.map(Zn)));
  let u, d = a[u = Ta(t)] || // also try camelCase event handler (#2249)
  a[u = Ta(is(t))];
  !d && r && (d = a[u = Ta(Js(t))]), d && vs(
    d,
    e,
    6,
    l
  );
  const v = a[u + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, vs(
      v,
      e,
      6,
      l
    );
  }
}
const sd = /* @__PURE__ */ new WeakMap();
function Pr(e, t, o = !1) {
  const a = o ? sd : t.emitsCache, l = a.get(e);
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
  return !r && !u ? (pt(e) && a.set(e, null), null) : (et(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), pt(e) && a.set(e, c), c);
}
function la(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ft(e, t[0].toLowerCase() + t.slice(1)) || ft(e, Js(t)) || ft(e, t));
}
function Yl(e) {
  const {
    type: t,
    vnode: o,
    proxy: a,
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
    inheritAttrs: x
  } = e, C = Fn(e);
  let S, I;
  try {
    if (o.shapeFlag & 4) {
      const T = l || a, D = T;
      S = _s(
        v.call(
          D,
          T,
          f,
          p,
          g,
          w,
          _
        )
      ), I = u;
    } else {
      const T = t;
      S = _s(
        T.length > 1 ? T(
          p,
          { attrs: u, slots: c, emit: d }
        ) : T(
          p,
          null
        )
      ), I = t.props ? u : od(u);
    }
  } catch (T) {
    Zo.length = 0, sa(T, e, 1), S = b(Vt);
  }
  let M = S;
  if (I && x !== !1) {
    const T = Object.keys(I), { shapeFlag: D } = M;
    T.length && D & 7 && (r && T.some(il) && (I = nd(
      I,
      r
    )), M = qs(M, I, !1, !0));
  }
  return o.dirs && (M = qs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && io(M, o.transition), S = M, Fn(C), S;
}
const od = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Qn(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, nd = (e, t) => {
  const o = {};
  for (const a in e)
    (!il(a) || !(a.slice(9) in t)) && (o[a] = e[a]);
  return o;
};
function ad(e, t, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = t, v = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Xl(a, c, v) : !!c;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !la(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Xl(a, c, v) : !0 : !!c;
  return !1;
}
function Xl(e, t, o) {
  const a = Object.keys(t);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (t[r] !== e[r] && !la(o, r))
      return !0;
  }
  return !1;
}
function ld({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Rr = {}, Lr = () => Object.create(Rr), Dr = (e) => Object.getPrototypeOf(e) === Rr;
function id(e, t, o, a = !1) {
  const l = {}, r = Lr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nr(e, t, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : gu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function rd(e, t, o, a) {
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
    (a || c > 0) && !(c & 16)
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
function Nr(e, t, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (qo(d))
        continue;
      const v = t[d];
      let f;
      l && ft(l, f = is(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : la(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || gt;
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
function Ya(e, t, o, a, l, r) {
  const c = e[o];
  if (c != null) {
    const u = ft(c, "default");
    if (u && a === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && tt(d)) {
        const { propsDefaults: v } = l;
        if (o in v)
          a = v[o];
        else {
          const f = pn(l);
          a = v[o] = d.call(
            null,
            t
          ), f();
        }
      } else
        a = d;
      l.ce && l.ce._setProp(o, a);
    }
    c[
      0
      /* shouldCast */
    ] && (r && !u ? a = !1 : c[
      1
      /* shouldCastTrue */
    ] && (a === "" || a === Js(o)) && (a = !0));
  }
  return a;
}
const cd = /* @__PURE__ */ new WeakMap();
function Ur(e, t, o = !1) {
  const a = o ? cd : t.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Ur(p, t, !0);
      Mt(c, w), g && u.push(...g);
    };
    !o && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return pt(e) && a.set(e, wo), wo;
  if (et(r))
    for (let f = 0; f < r.length; f++) {
      const p = is(r[f]);
      Zl(p) && (c[p] = gt);
    }
  else if (r)
    for (const f in r) {
      const p = is(f);
      if (Zl(p)) {
        const w = r[f], g = c[p] = et(w) || tt(w) ? { type: w } : Mt({}, w), _ = g.type;
        let x = !1, C = !0;
        if (et(_))
          for (let S = 0; S < _.length; ++S) {
            const I = _[S], M = tt(I) && I.name;
            if (M === "Boolean") {
              x = !0;
              break;
            } else M === "String" && (C = !1);
          }
        else
          x = tt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = x, g[
          1
          /* shouldCastTrue */
        ] = C, (x || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return pt(e) && a.set(e, v), v;
}
function Zl(e) {
  return e[0] !== "$" && !qo(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => et(e) ? e.map(_s) : [_s(e)], ud = (e, t, o) => {
  if (t._n)
    return t;
  const a = h((...l) => bl(t(...l)), o);
  return a._c = !1, a;
}, Or = (e, t, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (tt(r))
      t[l] = ud(l, r, a);
    else if (r != null) {
      const c = bl(r);
      t[l] = () => c;
    }
  }
}, Ar = (e, t) => {
  const o = bl(t);
  e.slots.default = () => o;
}, zr = (e, t, o) => {
  for (const a in t)
    (o || !kl(a)) && (e[a] = t[a]);
}, dd = (e, t, o) => {
  const a = e.slots = Lr();
  if (e.vnode.shapeFlag & 32) {
    const l = t._;
    l ? (zr(a, t, o), o && Bi(a, "_", l, !0)) : Or(t, a);
  } else t && Ar(e, t);
}, md = (e, t, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = gt;
  if (a.shapeFlag & 32) {
    const u = t._;
    u ? o && u === 1 ? r = !1 : zr(l, t, o) : (r = !t.$stable, Or(t, l)), c = t;
  } else t && (Ar(e, t), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, jt = hd;
function fd(e) {
  return vd(e);
}
function vd(e, t) {
  const o = ea();
  o.__VUE__ = !0;
  const {
    insert: a,
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
  } = e, x = (E, A, re, Ee = null, Ce = null, Se = null, ze = void 0, Fe = null, Ne = !!A.dynamicChildren) => {
    if (E === A)
      return;
    E && !so(E, A) && (Ee = te(E), Pe(E, Ce, Se, !0), E = null), A.patchFlag === -2 && (Ne = !1, A.dynamicChildren = null);
    const { type: Te, ref: Je, shapeFlag: We } = A;
    switch (Te) {
      case ia:
        C(E, A, re, Ee);
        break;
      case Vt:
        S(E, A, re, Ee);
        break;
      case Oa:
        E == null && I(A, re, Ee, ze);
        break;
      case B:
        Y(
          E,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
        break;
      default:
        We & 1 ? D(
          E,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : We & 6 ? we(
          E,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : (We & 64 || We & 128) && Te.process(
          E,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne,
          ve
        );
    }
    Je != null && Ce ? Yo(Je, E && E.ref, Se, A || E, !A) : Je == null && E && E.ref != null && Yo(E.ref, null, Se, E, !0);
  }, C = (E, A, re, Ee) => {
    if (E == null)
      a(
        A.el = u(A.children),
        re,
        Ee
      );
    else {
      const Ce = A.el = E.el;
      A.children !== E.children && v(Ce, A.children);
    }
  }, S = (E, A, re, Ee) => {
    E == null ? a(
      A.el = d(A.children || ""),
      re,
      Ee
    ) : A.el = E.el;
  }, I = (E, A, re, Ee) => {
    [E.el, E.anchor] = _(
      E.children,
      A,
      re,
      Ee,
      E.el,
      E.anchor
    );
  }, M = ({ el: E, anchor: A }, re, Ee) => {
    let Ce;
    for (; E && E !== A; )
      Ce = w(E), a(E, re, Ee), E = Ce;
    a(A, re, Ee);
  }, T = ({ el: E, anchor: A }) => {
    let re;
    for (; E && E !== A; )
      re = w(E), l(E), E = re;
    l(A);
  }, D = (E, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    if (A.type === "svg" ? ze = "svg" : A.type === "math" && (ze = "mathml"), E == null)
      z(
        A,
        re,
        Ee,
        Ce,
        Se,
        ze,
        Fe,
        Ne
      );
    else {
      const Te = E.el && E.el._isVueCE ? E.el : null;
      try {
        Te && Te._beginPatch(), q(
          E,
          A,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
      } finally {
        Te && Te._endPatch();
      }
    }
  }, z = (E, A, re, Ee, Ce, Se, ze, Fe) => {
    let Ne, Te;
    const { props: Je, shapeFlag: We, transition: pe, dirs: J } = E;
    if (Ne = E.el = c(
      E.type,
      Se,
      Je && Je.is,
      Je
    ), We & 8 ? f(Ne, E.children) : We & 16 && L(
      E.children,
      Ne,
      null,
      Ee,
      Ce,
      Ua(E, Se),
      ze,
      Fe
    ), J && Ys(E, null, Ee, "created"), G(Ne, E, E.scopeId, ze, Ee), Je) {
      for (const Ie in Je)
        Ie !== "value" && !qo(Ie) && r(Ne, Ie, null, Je[Ie], Se, Ee);
      "value" in Je && r(Ne, "value", null, Je.value, Se), (Te = Je.onVnodeBeforeMount) && ps(Te, Ee, E);
    }
    J && Ys(E, null, Ee, "beforeMount");
    const qe = pd(Ce, pe);
    qe && pe.beforeEnter(Ne), a(Ne, A, re), ((Te = Je && Je.onVnodeMounted) || qe || J) && jt(() => {
      Te && ps(Te, Ee, E), qe && pe.enter(Ne), J && Ys(E, null, Ee, "mounted");
    }, Ce);
  }, G = (E, A, re, Ee, Ce) => {
    if (re && g(E, re), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        g(E, Ee[Se]);
    if (Ce) {
      let Se = Ce.subTree;
      if (A === Se || Vr(Se.type) && (Se.ssContent === A || Se.ssFallback === A)) {
        const ze = Ce.vnode;
        G(
          E,
          ze,
          ze.scopeId,
          ze.slotScopeIds,
          Ce.parent
        );
      }
    }
  }, L = (E, A, re, Ee, Ce, Se, ze, Fe, Ne = 0) => {
    for (let Te = Ne; Te < E.length; Te++) {
      const Je = E[Te] = Fe ? js(E[Te]) : _s(E[Te]);
      x(
        null,
        Je,
        A,
        re,
        Ee,
        Ce,
        Se,
        ze,
        Fe
      );
    }
  }, q = (E, A, re, Ee, Ce, Se, ze) => {
    const Fe = A.el = E.el;
    let { patchFlag: Ne, dynamicChildren: Te, dirs: Je } = A;
    Ne |= E.patchFlag & 16;
    const We = E.props || gt, pe = A.props || gt;
    let J;
    if (re && Xs(re, !1), (J = pe.onVnodeBeforeUpdate) && ps(J, re, A, E), Je && Ys(A, E, re, "beforeUpdate"), re && Xs(re, !0), (We.innerHTML && pe.innerHTML == null || We.textContent && pe.textContent == null) && f(Fe, ""), Te ? ce(
      E.dynamicChildren,
      Te,
      Fe,
      re,
      Ee,
      Ua(A, Ce),
      Se
    ) : ze || se(
      E,
      A,
      Fe,
      null,
      re,
      Ee,
      Ua(A, Ce),
      Se,
      !1
    ), Ne > 0) {
      if (Ne & 16)
        ne(Fe, We, pe, re, Ce);
      else if (Ne & 2 && We.class !== pe.class && r(Fe, "class", null, pe.class, Ce), Ne & 4 && r(Fe, "style", We.style, pe.style, Ce), Ne & 8) {
        const qe = A.dynamicProps;
        for (let Ie = 0; Ie < qe.length; Ie++) {
          const Xe = qe[Ie], Ve = We[Xe], Ue = pe[Xe];
          (Ue !== Ve || Xe === "value") && r(Fe, Xe, Ve, Ue, Ce, re);
        }
      }
      Ne & 1 && E.children !== A.children && f(Fe, A.children);
    } else !ze && Te == null && ne(Fe, We, pe, re, Ce);
    ((J = pe.onVnodeUpdated) || Je) && jt(() => {
      J && ps(J, re, A, E), Je && Ys(A, E, re, "updated");
    }, Ee);
  }, ce = (E, A, re, Ee, Ce, Se, ze) => {
    for (let Fe = 0; Fe < A.length; Fe++) {
      const Ne = E[Fe], Te = A[Fe], Je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ne.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ne.type === B || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(Ne, Te) || // - In the case of a component, it could contain anything.
        Ne.shapeFlag & 198) ? p(Ne.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      x(
        Ne,
        Te,
        Je,
        null,
        Ee,
        Ce,
        Se,
        ze,
        !0
      );
    }
  }, ne = (E, A, re, Ee, Ce) => {
    if (A !== re) {
      if (A !== gt)
        for (const Se in A)
          !qo(Se) && !(Se in re) && r(
            E,
            Se,
            A[Se],
            null,
            Ce,
            Ee
          );
      for (const Se in re) {
        if (qo(Se)) continue;
        const ze = re[Se], Fe = A[Se];
        ze !== Fe && Se !== "value" && r(E, Se, Fe, ze, Ce, Ee);
      }
      "value" in re && r(E, "value", A.value, re.value, Ce);
    }
  }, Y = (E, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    const Te = A.el = E ? E.el : u(""), Je = A.anchor = E ? E.anchor : u("");
    let { patchFlag: We, dynamicChildren: pe, slotScopeIds: J } = A;
    J && (Fe = Fe ? Fe.concat(J) : J), E == null ? (a(Te, re, Ee), a(Je, re, Ee), L(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      A.children || [],
      re,
      Je,
      Ce,
      Se,
      ze,
      Fe,
      Ne
    )) : We > 0 && We & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    E.dynamicChildren ? (ce(
      E.dynamicChildren,
      pe,
      re,
      Ce,
      Se,
      ze,
      Fe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (A.key != null || Ce && A === Ce.subTree) && $l(
      E,
      A,
      !0
      /* shallow */
    )) : se(
      E,
      A,
      re,
      Je,
      Ce,
      Se,
      ze,
      Fe,
      Ne
    );
  }, we = (E, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    A.slotScopeIds = Fe, E == null ? A.shapeFlag & 512 ? Ce.ctx.activate(
      A,
      re,
      Ee,
      ze,
      Ne
    ) : ee(
      A,
      re,
      Ee,
      Ce,
      Se,
      ze,
      Ne
    ) : j(E, A, Ne);
  }, ee = (E, A, re, Ee, Ce, Se, ze) => {
    const Fe = E.component = Cd(
      E,
      Ee,
      Ce
    );
    if (oa(E) && (Fe.ctx.renderer = ve), xd(Fe, !1, ze), Fe.asyncDep) {
      if (Ce && Ce.registerDep(Fe, K, ze), !E.el) {
        const Ne = Fe.subTree = b(Vt);
        S(null, Ne, A, re), E.placeholder = Ne.el;
      }
    } else
      K(
        Fe,
        E,
        A,
        re,
        Ce,
        Se,
        ze
      );
  }, j = (E, A, re) => {
    const Ee = A.component = E.component;
    if (ad(E, A, re))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        ke(Ee, A, re);
        return;
      } else
        Ee.next = A, Ee.update();
    else
      A.el = E.el, Ee.vnode = A;
  }, K = (E, A, re, Ee, Ce, Se, ze) => {
    const Fe = () => {
      if (E.isMounted) {
        let { next: We, bu: pe, u: J, parent: qe, vnode: Ie } = E;
        {
          const ue = Fr(E);
          if (ue) {
            We && (We.el = Ie.el, ke(E, We, ze)), ue.asyncDep.then(() => {
              E.isUnmounted || Fe();
            });
            return;
          }
        }
        let Xe = We, Ve;
        Xs(E, !1), We ? (We.el = Ie.el, ke(E, We, ze)) : We = Ie, pe && En(pe), (Ve = We.props && We.props.onVnodeBeforeUpdate) && ps(Ve, qe, We, Ie), Xs(E, !0);
        const Ue = Yl(E), W = E.subTree;
        E.subTree = Ue, x(
          W,
          Ue,
          // parent may have changed if it's in a teleport
          p(W.el),
          // anchor may have changed if it's in a fragment
          te(W),
          E,
          Ce,
          Se
        ), We.el = Ue.el, Xe === null && ld(E, Ue.el), J && jt(J, Ce), (Ve = We.props && We.props.onVnodeUpdated) && jt(
          () => ps(Ve, qe, We, Ie),
          Ce
        );
      } else {
        let We;
        const { el: pe, props: J } = A, { bm: qe, m: Ie, parent: Xe, root: Ve, type: Ue } = E, W = bo(A);
        Xs(E, !1), qe && En(qe), !W && (We = J && J.onVnodeBeforeMount) && ps(We, Xe, A), Xs(E, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Ue);
          const ue = E.subTree = Yl(E);
          x(
            null,
            ue,
            re,
            Ee,
            E,
            Ce,
            Se
          ), A.el = ue.el;
        }
        if (Ie && jt(Ie, Ce), !W && (We = J && J.onVnodeMounted)) {
          const ue = A;
          jt(
            () => ps(We, Xe, ue),
            Ce
          );
        }
        (A.shapeFlag & 256 || Xe && bo(Xe.vnode) && Xe.vnode.shapeFlag & 256) && E.a && jt(E.a, Ce), E.isMounted = !0, A = re = Ee = null;
      }
    };
    E.scope.on();
    const Ne = E.effect = new Hi(Fe);
    E.scope.off();
    const Te = E.update = Ne.run.bind(Ne), Je = E.job = Ne.runIfDirty.bind(Ne);
    Je.i = E, Je.id = E.uid, Ne.scheduler = () => yl(Je), Xs(E, !0), Te();
  }, ke = (E, A, re) => {
    A.component = E;
    const Ee = E.vnode.props;
    E.vnode = A, E.next = null, rd(E, A.props, Ee, re), md(E, A.children, re), Ds(), Fl(E), Ns();
  }, se = (E, A, re, Ee, Ce, Se, ze, Fe, Ne = !1) => {
    const Te = E && E.children, Je = E ? E.shapeFlag : 0, We = A.children, { patchFlag: pe, shapeFlag: J } = A;
    if (pe > 0) {
      if (pe & 128) {
        U(
          Te,
          We,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
        return;
      } else if (pe & 256) {
        fe(
          Te,
          We,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
        return;
      }
    }
    J & 8 ? (Je & 16 && $e(Te, Ce, Se), We !== Te && f(re, We)) : Je & 16 ? J & 16 ? U(
      Te,
      We,
      re,
      Ee,
      Ce,
      Se,
      ze,
      Fe,
      Ne
    ) : $e(Te, Ce, Se, !0) : (Je & 8 && f(re, ""), J & 16 && L(
      We,
      re,
      Ee,
      Ce,
      Se,
      ze,
      Fe,
      Ne
    ));
  }, fe = (E, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    E = E || wo, A = A || wo;
    const Te = E.length, Je = A.length, We = Math.min(Te, Je);
    let pe;
    for (pe = 0; pe < We; pe++) {
      const J = A[pe] = Ne ? js(A[pe]) : _s(A[pe]);
      x(
        E[pe],
        J,
        re,
        null,
        Ce,
        Se,
        ze,
        Fe,
        Ne
      );
    }
    Te > Je ? $e(
      E,
      Ce,
      Se,
      !0,
      !1,
      We
    ) : L(
      A,
      re,
      Ee,
      Ce,
      Se,
      ze,
      Fe,
      Ne,
      We
    );
  }, U = (E, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    let Te = 0;
    const Je = A.length;
    let We = E.length - 1, pe = Je - 1;
    for (; Te <= We && Te <= pe; ) {
      const J = E[Te], qe = A[Te] = Ne ? js(A[Te]) : _s(A[Te]);
      if (so(J, qe))
        x(
          J,
          qe,
          re,
          null,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
      else
        break;
      Te++;
    }
    for (; Te <= We && Te <= pe; ) {
      const J = E[We], qe = A[pe] = Ne ? js(A[pe]) : _s(A[pe]);
      if (so(J, qe))
        x(
          J,
          qe,
          re,
          null,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        );
      else
        break;
      We--, pe--;
    }
    if (Te > We) {
      if (Te <= pe) {
        const J = pe + 1, qe = J < Je ? A[J].el : Ee;
        for (; Te <= pe; )
          x(
            null,
            A[Te] = Ne ? js(A[Te]) : _s(A[Te]),
            re,
            qe,
            Ce,
            Se,
            ze,
            Fe,
            Ne
          ), Te++;
      }
    } else if (Te > pe)
      for (; Te <= We; )
        Pe(E[Te], Ce, Se, !0), Te++;
    else {
      const J = Te, qe = Te, Ie = /* @__PURE__ */ new Map();
      for (Te = qe; Te <= pe; Te++) {
        const N = A[Te] = Ne ? js(A[Te]) : _s(A[Te]);
        N.key != null && Ie.set(N.key, Te);
      }
      let Xe, Ve = 0;
      const Ue = pe - qe + 1;
      let W = !1, ue = 0;
      const he = new Array(Ue);
      for (Te = 0; Te < Ue; Te++) he[Te] = 0;
      for (Te = J; Te <= We; Te++) {
        const N = E[Te];
        if (Ve >= Ue) {
          Pe(N, Ce, Se, !0);
          continue;
        }
        let O;
        if (N.key != null)
          O = Ie.get(N.key);
        else
          for (Xe = qe; Xe <= pe; Xe++)
            if (he[Xe - qe] === 0 && so(N, A[Xe])) {
              O = Xe;
              break;
            }
        O === void 0 ? Pe(N, Ce, Se, !0) : (he[O - qe] = Te + 1, O >= ue ? ue = O : W = !0, x(
          N,
          A[O],
          re,
          null,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ), Ve++);
      }
      const Qe = W ? gd(he) : wo;
      for (Xe = Qe.length - 1, Te = Ue - 1; Te >= 0; Te--) {
        const N = qe + Te, O = A[N], X = A[N + 1], Oe = N + 1 < Je ? (
          // #13559, fallback to el placeholder for unresolved async component
          X.el || X.placeholder
        ) : Ee;
        he[Te] === 0 ? x(
          null,
          O,
          re,
          Oe,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : W && (Xe < 0 || Te !== Qe[Xe] ? me(O, re, Oe, 2) : Xe--);
      }
    }
  }, me = (E, A, re, Ee, Ce = null) => {
    const { el: Se, type: ze, transition: Fe, children: Ne, shapeFlag: Te } = E;
    if (Te & 6) {
      me(E.component.subTree, A, re, Ee);
      return;
    }
    if (Te & 128) {
      E.suspense.move(A, re, Ee);
      return;
    }
    if (Te & 64) {
      ze.move(E, A, re, ve);
      return;
    }
    if (ze === B) {
      a(Se, A, re);
      for (let We = 0; We < Ne.length; We++)
        me(Ne[We], A, re, Ee);
      a(E.anchor, A, re);
      return;
    }
    if (ze === Oa) {
      M(E, A, re);
      return;
    }
    if (Ee !== 2 && Te & 1 && Fe)
      if (Ee === 0)
        Fe.beforeEnter(Se), a(Se, A, re), jt(() => Fe.enter(Se), Ce);
      else {
        const { leave: We, delayLeave: pe, afterLeave: J } = Fe, qe = () => {
          E.ctx.isUnmounted ? l(Se) : a(Se, A, re);
        }, Ie = () => {
          Se._isLeaving && Se[Ms](
            !0
            /* cancelled */
          ), We(Se, () => {
            qe(), J && J();
          });
        };
        pe ? pe(Se, qe, Ie) : Ie();
      }
    else
      a(Se, A, re);
  }, Pe = (E, A, re, Ee = !1, Ce = !1) => {
    const {
      type: Se,
      props: ze,
      ref: Fe,
      children: Ne,
      dynamicChildren: Te,
      shapeFlag: Je,
      patchFlag: We,
      dirs: pe,
      cacheIndex: J
    } = E;
    if (We === -2 && (Ce = !1), Fe != null && (Ds(), Yo(Fe, null, re, E, !0), Ns()), J != null && (A.renderCache[J] = void 0), Je & 256) {
      A.ctx.deactivate(E);
      return;
    }
    const qe = Je & 1 && pe, Ie = !bo(E);
    let Xe;
    if (Ie && (Xe = ze && ze.onVnodeBeforeUnmount) && ps(Xe, A, E), Je & 6)
      Q(E.component, re, Ee);
    else {
      if (Je & 128) {
        E.suspense.unmount(re, Ee);
        return;
      }
      qe && Ys(E, null, A, "beforeUnmount"), Je & 64 ? E.type.remove(
        E,
        A,
        re,
        ve,
        Ee
      ) : Te && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Te.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== B || We > 0 && We & 64) ? $e(
        Te,
        A,
        re,
        !1,
        !0
      ) : (Se === B && We & 384 || !Ce && Je & 16) && $e(Ne, A, re), Ee && ye(E);
    }
    (Ie && (Xe = ze && ze.onVnodeUnmounted) || qe) && jt(() => {
      Xe && ps(Xe, A, E), qe && Ys(E, null, A, "unmounted");
    }, re);
  }, ye = (E) => {
    const { type: A, el: re, anchor: Ee, transition: Ce } = E;
    if (A === B) {
      Z(re, Ee);
      return;
    }
    if (A === Oa) {
      T(E);
      return;
    }
    const Se = () => {
      l(re), Ce && !Ce.persisted && Ce.afterLeave && Ce.afterLeave();
    };
    if (E.shapeFlag & 1 && Ce && !Ce.persisted) {
      const { leave: ze, delayLeave: Fe } = Ce, Ne = () => ze(re, Se);
      Fe ? Fe(E.el, Se, Ne) : Ne();
    } else
      Se();
  }, Z = (E, A) => {
    let re;
    for (; E !== A; )
      re = w(E), l(E), E = re;
    l(A);
  }, Q = (E, A, re) => {
    const { bum: Ee, scope: Ce, job: Se, subTree: ze, um: Fe, m: Ne, a: Te } = E;
    ei(Ne), ei(Te), Ee && En(Ee), Ce.stop(), Se && (Se.flags |= 8, Pe(ze, E, A, re)), Fe && jt(Fe, A), jt(() => {
      E.isUnmounted = !0;
    }, A);
  }, $e = (E, A, re, Ee = !1, Ce = !1, Se = 0) => {
    for (let ze = Se; ze < E.length; ze++)
      Pe(E[ze], A, re, Ee, Ce);
  }, te = (E) => {
    if (E.shapeFlag & 6)
      return te(E.component.subTree);
    if (E.shapeFlag & 128)
      return E.suspense.next();
    const A = w(E.anchor || E.el), re = A && A[mr];
    return re ? w(re) : A;
  };
  let oe = !1;
  const Re = (E, A, re) => {
    E == null ? A._vnode && Pe(A._vnode, null, null, !0) : x(
      A._vnode || null,
      E,
      A,
      null,
      null,
      null,
      re
    ), A._vnode = E, oe || (oe = !0, Fl(), cr(), oe = !1);
  }, ve = {
    p: x,
    um: Pe,
    m: me,
    r: ye,
    mt: ee,
    mc: L,
    pc: se,
    pbc: ce,
    n: te,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: Ju(Re)
  };
}
function Ua({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: t }, o) {
  o ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function pd(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $l(e, t, o = !1) {
  const a = e.children, l = t.children;
  if (et(a) && et(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === ia && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Vt && !u.el && (u.el = c.el);
    }
}
function gd(e) {
  const t = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        t[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (t[a] = o[r - 1]), o[r] = a);
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
const B = Symbol.for("v-fgt"), ia = Symbol.for("v-txt"), Vt = Symbol.for("v-cmt"), Oa = Symbol.for("v-stc"), Zo = [];
let es = null;
function n(e = !1) {
  Zo.push(es = e ? null : []);
}
function yd() {
  Zo.pop(), es = Zo[Zo.length - 1] || null;
}
let cn = 1;
function Wn(e, t = !1) {
  cn += e, e < 0 && es && t && (es.hasOnce = !0);
}
function Br(e) {
  return e.dynamicChildren = cn > 0 ? es || wo : null, yd(), cn > 0 && es && es.push(e), e;
}
function i(e, t, o, a, l, r) {
  return Br(
    s(
      e,
      t,
      o,
      a,
      l,
      r,
      !0
    )
  );
}
function R(e, t, o, a, l) {
  return Br(
    b(
      e,
      t,
      o,
      a,
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
const Wr = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || Wt(e) || tt(e) ? { i: Ut, r: e, k: t, f: !!o } : e : null);
function s(e, t = null, o = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wr(t),
    ref: t && Pn(t),
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
    patchFlag: a,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Ut
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
function wd(e, t = null, o = null, a = 0, l = null, r = !1) {
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
    u && !Ct(u) && (t.class = Be(u)), pt(d) && (hl(d) && !et(d) && (d = Mt({}, d)), t.style = Rt(d));
  }
  const c = Ct(e) ? 1 : Vr(e) ? 128 : fr(e) ? 64 : pt(e) ? 4 : tt(e) ? 2 : 0;
  return s(
    e,
    t,
    o,
    a,
    l,
    c,
    r,
    !0
  );
}
function _d(e) {
  return e ? hl(e) || Dr(e) ? Mt({}, e) : e : null;
}
function qs(e, t, o = !1, a = !1) {
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
      o && r ? et(r) ? r.concat(Pn(t)) : [r, Pn(t)] : Pn(t)
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
  return d && a && io(
    f,
    d.clone(f)
  ), f;
}
function $(e = " ", t = 0) {
  return b(ia, null, e, t);
}
function y(e = "", t = !1) {
  return t ? (n(), R(Vt, null, e)) : b(Vt, null, e);
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
  const { shapeFlag: a } = e;
  if (t == null)
    t = null;
  else if (et(t))
    o = 16;
  else if (typeof t == "object")
    if (a & 65) {
      const l = t.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = t._;
      !l && !Dr(t) ? t._ctx = Ut : l === 3 && Ut && (Ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else tt(t) ? (t = { default: t, _ctx: Ut }, o = 32) : (t = String(t), a & 64 ? (o = 16, t = [$(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function kd(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        t.class !== a.class && (t.class = Be([t.class, a.class]));
      else if (l === "style")
        t.style = Rt([t.style, a.style]);
      else if (Qn(l)) {
        const r = t[l], c = a[l];
        c && r !== c && !(et(r) && r.includes(c)) && (t[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (t[l] = a[l]);
  }
  return t;
}
function ps(e, t, o, a = null) {
  vs(e, t, 7, [
    o,
    a
  ]);
}
const bd = Er();
let $d = 0;
function Cd(e, t, o) {
  const a = e.type, l = (t ? t.appContext : e.appContext) || bd, r = {
    uid: $d++,
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
    propsOptions: Ur(a, l),
    emitsOptions: Pr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: gt,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: gt,
    data: gt,
    props: gt,
    attrs: gt,
    slots: gt,
    refs: gt,
    setupState: gt,
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
const xl = () => Bt || Ut;
let Gn, Xa;
{
  const e = ea(), t = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Gn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Bt = o
  ), Xa = t(
    "__VUE_SSR_SETTERS__",
    (o) => dn = o
  );
}
const pn = (e) => {
  const t = Bt;
  return Gn(e), e.scope.on(), () => {
    e.scope.off(), Gn(t);
  };
}, ti = () => {
  Bt && Bt.scope.off(), Gn(null);
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function xd(e, t = !1, o = !1) {
  t && Xa(t);
  const { props: a, children: l } = e.vnode, r = Gr(e);
  id(e, a, r, t), dd(e, l, o || t);
  const c = r ? Sd(e, t) : void 0;
  return t && Xa(!1), c;
}
function Sd(e, t) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bu);
  const { setup: a } = o;
  if (a) {
    Ds();
    const l = e.setupContext = a.length > 1 ? Ed(e) : null, r = pn(e), c = vn(
      a,
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
          sa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      si(e, c);
  } else
    jr(e);
}
function si(e, t, o) {
  tt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pt(t) && (e.setupState = lr(t)), jr(e);
}
function jr(e, t, o) {
  const a = e.type;
  e.render || (e.render = a.render || bs);
  {
    const l = pn(e);
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
    Wn(-1);
    const a = arguments.length;
    return a === 2 ? pt(t) && !et(t) ? un(t) ? b(e, null, [t]) : b(e, t) : b(e, null, t) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), b(e, t, o));
  } finally {
    Wn(1);
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
  createElement: (e, t, o, a) => {
    const l = t === "svg" ? Ts.createElementNS(Rd, e) : t === "mathml" ? Ts.createElementNS(Ld, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
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
  insertStaticContent(e, t, o, a, l, r) {
    const c = o ? o.previousSibling : t.lastChild;
    if (l && (l === r || l.nextSibling))
      for (; t.insertBefore(l.cloneNode(!0), o), !(l === r || !(l = l.nextSibling)); )
        ;
    else {
      ni.innerHTML = Hr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ni.content;
      if (a === "svg" || a === "mathml") {
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
}, Vs = "transition", Oo = "animation", Eo = Symbol("_vtc"), qr = {
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
), Nd = (e) => (e.displayName = "Transition", e.props = Kr, e), Ud = /* @__PURE__ */ Nd(
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
    type: a,
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
  } = e, _ = Od(l), x = _ && _[0], C = _ && _[1], {
    onBeforeEnter: S,
    onEnter: I,
    onEnterCancelled: M,
    onLeave: T,
    onLeaveCancelled: D,
    onBeforeAppear: z = S,
    onAppear: G = I,
    onAppearCancelled: L = M
  } = t, q = (Y, we, ee, j) => {
    Y._enterCancelled = j, Bs(Y, we ? f : u), Bs(Y, we ? v : c), ee && ee();
  }, ce = (Y, we) => {
    Y._isLeaving = !1, Bs(Y, p), Bs(Y, g), Bs(Y, w), we && we();
  }, ne = (Y) => (we, ee) => {
    const j = Y ? G : I, K = () => q(we, Y, ee);
    Zs(j, [we, K]), li(() => {
      Bs(we, Y ? d : r), hs(we, Y ? f : u), ai(j) || ii(we, a, x, K);
    });
  };
  return Mt(t, {
    onBeforeEnter(Y) {
      Zs(S, [Y]), hs(Y, r), hs(Y, c);
    },
    onBeforeAppear(Y) {
      Zs(z, [Y]), hs(Y, d), hs(Y, v);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(Y, we) {
      Y._isLeaving = !0;
      const ee = () => ce(Y, we);
      hs(Y, p), Y._enterCancelled ? (hs(Y, w), el(Y)) : (el(Y), hs(Y, w)), li(() => {
        Y._isLeaving && (Bs(Y, p), hs(Y, g), ai(T) || ii(Y, a, C, ee));
      }), Zs(T, [Y, ee]);
    },
    onEnterCancelled(Y) {
      q(Y, !1, void 0, !0), Zs(M, [Y]);
    },
    onAppearCancelled(Y) {
      q(Y, !0, void 0, !0), Zs(L, [Y]);
    },
    onLeaveCancelled(Y) {
      ce(Y), Zs(D, [Y]);
    }
  });
}
function Od(e) {
  if (e == null)
    return null;
  if (pt(e))
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
  t.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Eo];
  o && (o.delete(t), o.size || (e[Eo] = void 0));
}
function li(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ad = 0;
function ii(e, t, o, a) {
  const l = e._endId = ++Ad, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Qr(e, t);
  if (!c)
    return a();
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
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Vs}Delay`), r = a(`${Vs}Duration`), c = ri(l, r), u = a(`${Oo}Delay`), d = a(`${Oo}Duration`), v = ri(u, d);
  let f = null, p = 0, w = 0;
  t === Vs ? c > 0 && (f = Vs, p = c, w = r.length) : t === Oo ? v > 0 && (f = Oo, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Vs : Oo : null, w = f ? f === Vs ? r.length : d.length : 0);
  const g = f === Vs && /\b(?:transform|all)(?:,|$)/.test(
    a(`${Vs}Property`).toString()
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
  return Math.max(...t.map((o, a) => ci(o) + ci(e[a])));
}
function ci(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function zd(e, t, o) {
  const a = e[Eo];
  a && (t = (t ? [t, ...a] : [...a]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const ui = Symbol("_vod"), Fd = Symbol("_vsh"), Vd = Symbol(""), Bd = /(?:^|;)\s*display\s*:/;
function Wd(e, t, o) {
  const a = e.style, l = Ct(o);
  let r = !1;
  if (o && !l) {
    if (t)
      if (Ct(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Rn(a, u, "");
        }
      else
        for (const c in t)
          o[c] == null && Rn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Rn(a, c, o[c]);
  } else if (l) {
    if (t !== o) {
      const c = a[Vd];
      c && (o += ";" + c), a.cssText = o, r = Bd.test(o);
    }
  } else t && e.removeAttribute("style");
  ui in e && (e[ui] = r ? a.display : "", e[Fd] && (a.display = "none"));
}
const di = /\s*!important$/;
function Rn(e, t, o) {
  if (et(o))
    o.forEach((a) => Rn(e, t, a));
  else if (o == null && (o = ""), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const a = Gd(e, t);
    di.test(o) ? e.setProperty(
      Js(a),
      o.replace(di, ""),
      "important"
    ) : e[a] = o;
  }
}
const mi = ["Webkit", "Moz", "ms"], za = {};
function Gd(e, t) {
  const o = za[t];
  if (o)
    return o;
  let a = is(t);
  if (a !== "filter" && a in e)
    return za[t] = a;
  a = Xn(a);
  for (let l = 0; l < mi.length; l++) {
    const r = mi[l] + a;
    if (r in e)
      return za[t] = r;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function vi(e, t, o, a, l, r = Kc(t)) {
  a && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, o) : o == null || r && !Wi(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : ms(o) ? String(o) : o
  );
}
function pi(e, t, o, a, l) {
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
function Ls(e, t, o, a) {
  e.addEventListener(t, o, a);
}
function jd(e, t, o, a) {
  e.removeEventListener(t, o, a);
}
const gi = Symbol("_vei");
function Hd(e, t, o, a, l = null) {
  const r = e[gi] || (e[gi] = {}), c = r[t];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = qd(t);
    if (a) {
      const v = r[t] = Qd(
        a,
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
    let a;
    for (; a = e.match(hi); )
      e = e.slice(0, e.length - a[0].length), t[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), t];
}
let Fa = 0;
const Kd = /* @__PURE__ */ Promise.resolve(), Jd = () => Fa || (Kd.then(() => Fa = 0), Fa = Date.now());
function Qd(e, t) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    vs(
      Yd(a, o.value),
      t,
      5,
      [a]
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
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return t;
}
const yi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xd = (e, t, o, a, l, r) => {
  const c = l === "svg";
  t === "class" ? zd(e, a, c) : t === "style" ? Wd(e, o, a) : Qn(t) ? il(t) || Hd(e, t, o, a, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zd(e, t, a, c)) ? (pi(e, t, a), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vi(e, t, a, c, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Ct(a)) ? pi(e, is(t), a, r, t) : (t === "true-value" ? e._trueValue = a : t === "false-value" && (e._falseValue = a), vi(e, t, a, c));
};
function Zd(e, t, o, a) {
  if (a)
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
const Yr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), jn = Symbol("_moveCb"), wi = Symbol("_enterCb"), em = (e) => (delete e.props.mode, e), tm = /* @__PURE__ */ em({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Kr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const o = xl(), a = gr();
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
        const p = v[jn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[jn] = null, Bs(v, c));
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
              a,
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
          rn(f, u, a, o)
        );
      }
      return b(d, null, r);
    };
  }
}), sm = tm;
function om(e) {
  const t = e.el;
  t[jn] && t[jn](), t[wi] && t[wi]();
}
function nm(e) {
  Xr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function am(e) {
  const t = Yr.get(e), o = Xr.get(e), a = t.left - o.left, l = t.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function lm(e, t, o) {
  const a = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Qr(a);
  return r.removeChild(a), c;
}
const Ks = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return et(t) ? (o) => En(t, o) : t;
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
  return t && (e = e.trim()), o && (e = Zn(e)), e;
}
const en = {
  created(e, { modifiers: { lazy: t, trim: o, number: a } }, l) {
    e[ls] = Ks(l);
    const r = a || l.props && l.props.type === "number";
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
  beforeUpdate(e, { value: t, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ls] = Ks(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, d = t ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && t === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Hn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, o) {
    e[ls] = Ks(o), Ls(e, "change", () => {
      const a = e._modelValue, l = To(e), r = e.checked, c = e[ls];
      if (et(a)) {
        const u = ul(a, l), d = u !== -1;
        if (r && !d)
          c(a.concat(l));
        else if (!r && d) {
          const v = [...a];
          v.splice(u, 1), c(v);
        }
      } else if (Mo(a)) {
        const u = new Set(a);
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
function bi(e, { value: t, oldValue: o }, a) {
  e._modelValue = t;
  let l;
  if (et(t))
    l = ul(t, a.props.value) > -1;
  else if (Mo(t))
    l = t.has(a.props.value);
  else {
    if (t === o) return;
    l = lo(t, Zr(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Ln = {
  created(e, { value: t }, o) {
    e.checked = lo(t, o.props.value), e[ls] = Ks(o), Ls(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: o }, a) {
    e[ls] = Ks(a), t !== o && (e.checked = lo(t, a.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: o } }, a) {
    const l = Mo(t);
    Ls(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => o ? Zn(To(c)) : To(c)
      );
      e[ls](
        e.multiple ? l ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pt(() => {
        e._assigning = !1;
      });
    }), e[ls] = Ks(a);
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
  const o = e.multiple, a = et(t);
  if (!(o && !a && !Mo(t))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (a) {
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
}, yt = (e, t) => {
  const o = e._withMods || (e._withMods = {}), a = t.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
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
}, ds = (e, t) => {
  const o = e._withKeys || (e._withKeys = {}), a = t.join(".");
  return o[a] || (o[a] = ((l) => {
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
const gn = ((...e) => {
  const t = mm().createApp(...e), { mount: o } = t;
  return t.mount = (a) => {
    const l = vm(a);
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
const pm = { class: "panel-layout" }, gm = {
  key: 0,
  class: "panel-layout-header"
}, hm = {
  key: 1,
  class: "panel-layout-search"
}, ym = { class: "panel-layout-content" }, wm = {
  key: 2,
  class: "panel-layout-footer"
}, _m = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (t, o) => (n(), i("div", pm, [
      t.$slots.header ? (n(), i("div", gm, [
        ot(t.$slots, "header", {}, void 0)
      ])) : y("", !0),
      t.$slots.search ? (n(), i("div", hm, [
        ot(t.$slots, "search", {}, void 0)
      ])) : y("", !0),
      s("div", ym, [
        ot(t.$slots, "content", {}, void 0)
      ]),
      t.$slots.footer ? (n(), i("div", wm, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), xe = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, Ot = /* @__PURE__ */ xe(_m, [["__scopeId", "data-v-21565df9"]]), km = {
  key: 0,
  class: "panel-title-prefix"
}, bm = {
  key: 1,
  class: "panel-title-prefix-theme"
}, $m = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (t, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", km, m(e.prefix), 1)) : (n(), i("span", bm)),
        ot(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), Cm = /* @__PURE__ */ xe($m, [["__scopeId", "data-v-c3875efc"]]), xm = ["title"], Sm = ["width", "height"], Im = /* @__PURE__ */ be({
  __name: "InfoButton",
  props: {
    size: { default: 16 },
    title: { default: "About this section" }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("button", {
      class: "info-button",
      title: e.title,
      onClick: o[0] || (o[0] = (a) => t.$emit("click"))
    }, [
      (n(), i("svg", {
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
      ])], 8, Sm))
    ], 8, xm));
  }
}), Sl = /* @__PURE__ */ xe(Im, [["__scopeId", "data-v-6fc7f16d"]]), Em = { class: "header-left" }, Tm = {
  key: 0,
  class: "header-actions"
}, Mm = /* @__PURE__ */ be({
  __name: "PanelHeader",
  props: {
    title: {},
    showInfo: { type: Boolean, default: !1 },
    showPrefix: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  emits: ["info-click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      s("div", Em, [
        b(Cm, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), R(Sl, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => t.$emit("info-click"))
        })) : y("", !0)
      ]),
      t.$slots.actions ? (n(), i("div", Tm, [
        ot(t.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), At = /* @__PURE__ */ xe(Mm, [["__scopeId", "data-v-55a62cd6"]]), Pm = {
  key: 0,
  class: "section-title-count"
}, Rm = {
  key: 1,
  class: "section-title-icon"
}, Lm = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Pm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Rm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ xe(Lm, [["__scopeId", "data-v-559361eb"]]), Dm = { class: "status-grid" }, Nm = { class: "status-grid__columns" }, Um = { class: "status-grid__column" }, Om = { class: "status-grid__title" }, Am = { class: "status-grid__column status-grid__column--right" }, zm = { class: "status-grid__title" }, Fm = {
  key: 0,
  class: "status-grid__footer"
}, Vm = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", Dm, [
      s("div", Nm, [
        s("div", Um, [
          s("h4", Om, m(e.leftTitle), 1),
          ot(t.$slots, "left", {}, void 0)
        ]),
        s("div", Am, [
          s("h4", zm, m(e.rightTitle), 1),
          ot(t.$slots, "right", {}, void 0)
        ])
      ]),
      t.$slots.footer ? (n(), i("div", Fm, [
        ot(t.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Bm = /* @__PURE__ */ xe(Vm, [["__scopeId", "data-v-73b7ba3f"]]), Wm = {
  key: 0,
  class: "status-item__icon"
}, Gm = {
  key: 1,
  class: "status-item__count"
}, jm = { class: "status-item__label" }, Hm = /* @__PURE__ */ be({
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
    return (a, l) => (n(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Wm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Gm, m(e.count), 1)) : y("", !0),
      s("span", jm, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ xe(Hm, [["__scopeId", "data-v-6f929183"]]), qm = { class: "issue-card__header" }, Km = { class: "issue-card__icon" }, Jm = { class: "issue-card__title" }, Qm = {
  key: 0,
  class: "issue-card__content"
}, Ym = {
  key: 0,
  class: "issue-card__description"
}, Xm = {
  key: 1,
  class: "issue-card__items"
}, Zm = {
  key: 2,
  class: "issue-card__actions"
}, ef = /* @__PURE__ */ be({
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
    return (a, l) => (n(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      s("div", qm, [
        s("span", Km, m(e.icon), 1),
        s("h4", Jm, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Qm, [
        e.description ? (n(), i("p", Ym, m(e.description), 1)) : y("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Xm, [
        (n(!0), i(B, null, ge(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = s("span", { class: "issue-card__bullet" }, "•", -1)),
          s("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Zm, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ xe(ef, [["__scopeId", "data-v-df6aa348"]]), tf = ["type", "disabled"], sf = {
  key: 0,
  class: "spinner"
}, of = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", sf)) : y("", !0),
      e.loading ? y("", !0) : ot(t.$slots, "default", { key: 1 }, void 0)
    ], 10, tf));
  }
}), Me = /* @__PURE__ */ xe(of, [["__scopeId", "data-v-772abe47"]]), nf = { class: "empty-state" }, af = {
  key: 0,
  class: "empty-icon"
}, lf = { class: "empty-message" }, rf = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (t, o) => (n(), i("div", nf, [
      e.icon ? (n(), i("div", af, m(e.icon), 1)) : y("", !0),
      s("p", lf, m(e.message), 1),
      e.actionLabel ? (n(), R(Me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("action"))
      }, {
        default: h(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ xe(rf, [["__scopeId", "data-v-4466284f"]]), cf = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-label"]),
      style: Rt({ minWidth: e.minWidth })
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 4));
  }
}), Dn = /* @__PURE__ */ xe(cf, [["__scopeId", "data-v-75e9eeb8"]]), uf = /* @__PURE__ */ be({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), tl = /* @__PURE__ */ xe(uf, [["__scopeId", "data-v-2f186e4c"]]), df = { class: "detail-row" }, mf = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("div", df, [
      b(Dn, { "min-width": e.labelMinWidth }, {
        default: h(() => [
          $(m(e.label), 1)
        ]),
        _: 1
      }, 8, ["min-width"]),
      e.value ? (n(), R(tl, {
        key: 0,
        mono: e.mono,
        variant: e.valueVariant,
        truncate: e.truncate
      }, {
        default: h(() => [
          $(m(e.value), 1)
        ]),
        _: 1
      }, 8, ["mono", "variant", "truncate"])) : ot(t.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(mf, [["__scopeId", "data-v-ef15664a"]]), ff = { class: "modal-header" }, vf = { class: "modal-body" }, pf = { class: "status-section" }, gf = {
  key: 0,
  class: "status-section"
}, hf = { class: "section-header-row" }, yf = {
  key: 0,
  class: "workflow-group"
}, wf = { class: "workflow-group-header" }, _f = { class: "workflow-group-title" }, kf = { class: "workflow-list" }, bf = { class: "workflow-name" }, $f = { class: "workflow-issue" }, Cf = {
  key: 1,
  class: "workflow-group"
}, xf = { class: "workflow-group-header" }, Sf = { class: "workflow-group-title" }, If = { class: "workflow-list" }, Ef = { class: "workflow-name" }, Tf = { class: "workflow-issue" }, Mf = {
  key: 2,
  class: "workflow-group"
}, Pf = { class: "workflow-group-header" }, Rf = { class: "workflow-group-title" }, Lf = { class: "workflow-list" }, Df = { class: "workflow-name" }, Nf = {
  key: 3,
  class: "workflow-group"
}, Uf = { class: "workflow-group-header" }, Of = { class: "workflow-group-title" }, Af = { class: "workflow-list" }, zf = { class: "workflow-name" }, Ff = {
  key: 4,
  class: "workflow-group"
}, Vf = { class: "workflow-group-header" }, Bf = { class: "workflow-group-title" }, Wf = { class: "workflow-list" }, Gf = { class: "workflow-name" }, jf = {
  key: 5,
  class: "workflow-group"
}, Hf = { class: "workflow-group-title" }, qf = { class: "expand-icon" }, Kf = {
  key: 0,
  class: "workflow-list"
}, Jf = { class: "workflow-name" }, Qf = {
  key: 1,
  class: "status-section"
}, Yf = {
  key: 0,
  class: "change-group"
}, Xf = { class: "change-group-header" }, Zf = { class: "change-group-title" }, ev = { class: "change-list" }, tv = { class: "node-name" }, sv = {
  key: 0,
  class: "dev-badge"
}, ov = {
  key: 1,
  class: "change-group"
}, nv = { class: "change-group-header" }, av = { class: "change-group-title" }, lv = { class: "change-list" }, iv = { class: "node-name" }, rv = {
  key: 0,
  class: "dev-badge"
}, cv = {
  key: 2,
  class: "change-group"
}, uv = { class: "change-list" }, dv = { class: "change-item" }, mv = { class: "node-name" }, fv = {
  key: 3,
  class: "change-group"
}, vv = {
  key: 2,
  class: "status-section"
}, pv = { class: "section-header-row" }, gv = {
  key: 0,
  class: "drift-item"
}, hv = { class: "drift-list" }, yv = {
  key: 0,
  class: "drift-list-more"
}, wv = {
  key: 1,
  class: "drift-item"
}, _v = { class: "drift-list" }, kv = {
  key: 0,
  class: "drift-list-more"
}, bv = {
  key: 2,
  class: "drift-item"
}, $v = { class: "drift-list" }, Cv = { class: "version-actual" }, xv = { class: "version-expected" }, Sv = {
  key: 0,
  class: "drift-list-more"
}, Iv = {
  key: 3,
  class: "drift-item"
}, Ev = { class: "repair-action" }, Tv = {
  key: 3,
  class: "status-section"
}, Mv = { class: "info-box" }, Pv = { class: "drift-list" }, Rv = {
  key: 0,
  class: "drift-list-more"
}, Lv = {
  key: 4,
  class: "status-section"
}, Dv = { class: "warning-box" }, Nv = {
  key: 5,
  class: "empty-state-inline"
}, Uv = { class: "modal-actions" }, Ov = /* @__PURE__ */ be({
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
    }), ht(() => t.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state === "synced"
      )) || [];
    }), l = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (x) => x.status === "broken" && x.sync_state !== "synced"
      )) || [];
    }), r = P(() => {
      var w, g, _;
      return ((_ = (g = (w = t.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((x) => {
        var S, I, M;
        const C = (M = (I = (S = t.status) == null ? void 0 : S.workflows) == null ? void 0 : I.analyzed) == null ? void 0 : M.find((T) => T.name === x);
        return !C || C.status !== "broken";
      })) || [];
    }), c = P(() => {
      var w, g, _, x, C;
      return (w = t.status) != null && w.workflows ? (((g = t.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = t.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((x = t.status.workflows.deleted) == null ? void 0 : x.length) ?? 0) > 0 || (((C = t.status.workflows.synced) == null ? void 0 : C.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var g, _, x;
      const w = (g = t.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((x = w.nodes_removed) == null ? void 0 : x.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = P(() => {
      var w, g, _, x, C, S;
      return !c.value && !u.value && ((g = (w = t.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = t.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (C = (x = t.status) == null ? void 0 : x.comparison) == null ? void 0 : C.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
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
      var _, x, C, S, I, M, T, D, z, G, L, q, ce, ne, Y, we, ee, j, K, ke, se, fe;
      return n(), R(Kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (U) => w.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = yt(() => {
            }, ["stop"]))
          }, [
            s("div", ff, [
              g[8] || (g[8] = s("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              s("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (U) => w.$emit("close"))
              }, "✕")
            ]),
            s("div", vf, [
              s("div", pf, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[9] || (g[9] = [
                    $("BRANCH", -1)
                  ])]),
                  _: 1
                }),
                b(_t, {
                  label: "Current Branch:",
                  value: e.status.current_branch || "detached HEAD",
                  mono: !0
                }, null, 8, ["value"])
              ]),
              c.value ? (n(), i("div", gf, [
                s("div", hf, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (U) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", yf, [
                  s("div", wf, [
                    g[11] || (g[11] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", _f, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  s("div", kf, [
                    (n(!0), i(B, null, ge(a.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", bf, m(U.name), 1),
                      s("span", $f, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", Cf, [
                  s("div", xf, [
                    g[12] || (g[12] = s("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    s("span", Sf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  s("div", If, [
                    (n(!0), i(B, null, ge(l.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      s("span", Ef, m(U.name), 1),
                      s("span", Tf, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (x = (_ = e.status.workflows) == null ? void 0 : _.new) != null && x.length ? (n(), i("div", Mf, [
                  s("div", Pf, [
                    g[13] || (g[13] = s("span", { class: "workflow-status-icon new" }, "●", -1)),
                    s("span", Rf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  s("div", Lf, [
                    (n(!0), i(B, null, ge(e.status.workflows.new, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Df, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (C = e.status.workflows) == null ? void 0 : C.modified) != null && S.length ? (n(), i("div", Nf, [
                  s("div", Uf, [
                    g[14] || (g[14] = s("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    s("span", Of, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  s("div", Af, [
                    (n(!0), i(B, null, ge(e.status.workflows.modified, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", zf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = (I = e.status.workflows) == null ? void 0 : I.deleted) != null && M.length ? (n(), i("div", Ff, [
                  s("div", Vf, [
                    g[15] || (g[15] = s("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    s("span", Bf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  s("div", Wf, [
                    (n(!0), i(B, null, ge(e.status.workflows.deleted, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Gf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", jf, [
                  s("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (U) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = s("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    s("span", Hf, "SYNCED (" + m(r.value.length) + ")", 1),
                    s("span", qf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", Kf, [
                    (n(!0), i(B, null, ge(r.value, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      s("span", Jf, m(U), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", Qf, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (T = e.status.git_changes) == null ? void 0 : T.nodes_added) != null && D.length ? (n(), i("div", Yf, [
                  s("div", Xf, [
                    g[18] || (g[18] = s("span", { class: "change-icon add" }, "+", -1)),
                    s("span", Zf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  s("div", ev, [
                    (n(!0), i(B, null, ge(e.status.git_changes.nodes_added, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      s("span", tv, m(f(U)), 1),
                      p(U) ? (n(), i("span", sv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (G = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && G.length ? (n(), i("div", ov, [
                  s("div", nv, [
                    g[19] || (g[19] = s("span", { class: "change-icon remove" }, "-", -1)),
                    s("span", av, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  s("div", lv, [
                    (n(!0), i(B, null, ge(e.status.git_changes.nodes_removed, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      s("span", iv, m(f(U)), 1),
                      p(U) ? (n(), i("span", rv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (L = e.status.git_changes) != null && L.workflow_changes ? (n(), i("div", cv, [
                  g[20] || (g[20] = s("div", { class: "change-group-header" }, [
                    s("span", { class: "change-icon modified" }, "~"),
                    s("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  s("div", uv, [
                    s("div", dv, [
                      s("span", mv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (q = e.status.git_changes) != null && q.has_other_changes ? (n(), i("div", fv, [...g[21] || (g[21] = [
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
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (n(), i("div", vv, [
                s("div", pv, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  s("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (U) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ne = e.status.comparison) == null ? void 0 : ne.missing_nodes) != null && Y.length ? (n(), i("div", gv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  s("div", hv, [
                    (n(!0), i(B, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", yv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (ee = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && ee.length ? (n(), i("div", wv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  s("div", _v, [
                    (n(!0), i(B, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", kv, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (j = e.status.comparison) == null ? void 0 : j.version_mismatches) != null && K.length ? (n(), i("div", bv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  s("div", $v, [
                    (n(!0), i(B, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (U) => (n(), i("div", {
                      key: U.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(U.name) + ": ", 1),
                      s("span", Cv, m(U.actual), 1),
                      g[23] || (g[23] = $(" → ", -1)),
                      s("span", xv, m(U.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", Sv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ke = e.status.comparison) == null ? void 0 : ke.packages_in_sync) === !1 ? (n(), i("div", Iv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                s("div", Ev, [
                  b(Me, {
                    variant: "warning",
                    loading: e.isRepairing,
                    onClick: g[4] || (g[4] = (U) => w.$emit("repair"))
                  }, {
                    default: h(() => [...g[24] || (g[24] = [
                      $(" Repair Environment ", -1)
                    ])]),
                    _: 1
                  }, 8, ["loading"]),
                  g[25] || (g[25] = s("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (fe = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && fe.length ? (n(), i("div", Tv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                s("div", Mv, [
                  g[28] || (g[28] = s("span", { class: "info-icon" }, "ℹ", -1)),
                  s("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                s("div", Pv, [
                  (n(!0), i(B, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (U) => (n(), i("div", {
                    key: U,
                    class: "drift-list-item"
                  }, " • " + m(U), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Rv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Lv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                s("div", Dv, [
                  g[30] || (g[30] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = s("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", Nv, [...g[32] || (g[32] = [
                s("div", { class: "empty-icon" }, "✅", -1),
                s("div", { class: "empty-message" }, [
                  s("strong", null, "Environment is clean!"),
                  s("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            s("div", Uv, [
              b(Me, {
                variant: "secondary",
                onClick: g[5] || (g[5] = (U) => w.$emit("close"))
              }, {
                default: h(() => [...g[33] || (g[33] = [
                  $(" Close ", -1)
                ])]),
                _: 1
              })
            ])
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), Av = /* @__PURE__ */ xe(Ov, [["__scopeId", "data-v-e2b37122"]]), zv = { class: "health-section-header" }, Fv = { class: "suggestions-content" }, Vv = { class: "suggestions-text" }, Bv = { style: { "margin-top": "var(--cg-space-3)" } }, Wv = {
  key: 1,
  class: "no-issues-text"
}, Gv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = k(!1), r = k(!1);
    function c() {
      l.value = !0;
    }
    function u() {
      l.value = !1, v("view-workflows");
    }
    function d() {
      l.value = !1, v("view-nodes");
    }
    const v = o, f = k(!1), p = k(!1);
    function w() {
      p.value = !0, v("repair-environment");
    }
    function g() {
      p.value = !1;
    }
    function _() {
      l.value = !1;
    }
    const x = P(() => {
      const Z = a.status.workflows.analyzed || [], Q = Z.filter(
        ($e) => $e.unresolved_models_count > 0 || $e.ambiguous_models_count > 0
      );
      return Q.length === 0 && a.status.missing_models_count > 0 ? Z.filter(($e) => $e.sync_state === "synced") : Q;
    });
    function C() {
      const Z = x.value;
      Z.length !== 0 && (f.value = !0, v("repair-missing-models", Z.map((Q) => Q.name)));
    }
    function S() {
      f.value = !1;
    }
    t({ resetRepairingState: S, resetRepairingEnvironmentState: g, closeDetailModal: _ });
    const I = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), M = P(() => a.status.has_changes), T = P(() => {
      const Z = a.status.git_changes;
      return Z.nodes_added.length > 0 || Z.nodes_removed.length > 0 || Z.workflow_changes;
    }), D = P(() => a.status.has_changes || I.value), z = P(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), G = P(() => a.status.git_changes.has_other_changes), L = P(() => {
      var Z;
      return ((Z = a.status.workflows.analyzed) == null ? void 0 : Z.filter((Q) => Q.status === "broken")) || [];
    }), q = P(() => {
      var Z;
      return ((Z = a.status.workflows.analyzed) == null ? void 0 : Z.filter(
        (Q) => Q.has_path_sync_issues && !Q.has_issues
      )) || [];
    }), ce = P(() => L.value.length > 0);
    function ne(Z) {
      const Q = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const $e of Q) {
        const te = Z.match($e);
        if (te != null && te[1])
          return te[1];
      }
      return null;
    }
    function Y(Z) {
      const Q = Z.map(ne).filter(($e) => !!$e);
      return [...new Set(Q)];
    }
    function we(Z) {
      if (Z.length === 0) return "";
      if (Z.length === 1) return ` (>= ${Z[0]})`;
      const Q = Z.slice(0, 2).map((te) => `>= ${te}`).join(", "), $e = Z.length > 2;
      return ` (${Q}${$e ? ", ..." : ""})`;
    }
    function ee(Z) {
      return Z.replace(/uninstallable node mappings?/gi, (Q) => Q.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function j(Z) {
      const Q = ee(Z.issue_summary || "Has issues"), $e = /(?:>=|v?\d+\.\d+)/i.test(Q), te = Y(Z.version_gated_guidance || []);
      return (Z.nodes_version_gated_count || 0) > 0 && te.length > 0 && !$e ? `${Z.name} — ${Q} (needs ComfyUI ${te.map((oe) => `>= ${oe}`).join(", ")})` : `${Z.name} — ${Q}`;
    }
    const K = P(() => L.value.reduce(
      (Z, Q) => Z + (Q.nodes_version_gated_count || 0),
      0
    )), ke = P(() => {
      const Z = L.value.flatMap(
        (Q) => Y(Q.version_gated_guidance || [])
      );
      return [...new Set(Z)];
    }), se = P(() => L.value.reduce(
      (Z, Q) => Z + (Q.nodes_uninstallable_count || 0),
      0
    )), fe = P(() => {
      const Z = [];
      return K.value > 0 && Z.push(
        `${K.value} require newer ComfyUI${we(ke.value)}`
      ), se.value > 0 && Z.push(`${se.value} need community packages`), Z.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${Z.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = P(() => ce.value || q.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), me = P(() => {
      const Z = [];
      return a.status.workflows.new.length > 0 && Z.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && Z.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && Z.push(`${a.status.workflows.deleted.length} deleted`), Z.length > 0 ? `${Z.join(", ")} workflow${Z.length === 1 && !Z[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = P(() => {
      var $e, te;
      const Z = [], Q = a.status.comparison;
      return ($e = Q.missing_nodes) != null && $e.length && Z.push(`${Q.missing_nodes.length} missing node${Q.missing_nodes.length === 1 ? "" : "s"}`), (te = Q.extra_nodes) != null && te.length && Z.push(`${Q.extra_nodes.length} untracked node${Q.extra_nodes.length === 1 ? "" : "s"}`), Z.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${Z.join(" and ")}.`;
    }), ye = P(() => {
      var $e, te;
      const Z = [], Q = a.status.comparison;
      return ($e = Q.extra_nodes) != null && $e.length && (Q.extra_nodes.slice(0, 3).forEach((oe) => {
        Z.push(`Untracked: ${oe}`);
      }), Q.extra_nodes.length > 3 && Z.push(`...and ${Q.extra_nodes.length - 3} more untracked`)), (te = Q.missing_nodes) != null && te.length && (Q.missing_nodes.slice(0, 3).forEach((oe) => {
        Z.push(`Missing: ${oe}`);
      }), Q.missing_nodes.length > 3 && Z.push(`...and ${Q.missing_nodes.length - 3} more missing`)), Z;
    });
    return (Z, Q) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, { title: "STATUS" })
        ]),
        content: h(() => [
          a.setupState === "no_workspace" ? (n(), R(cs, {
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
                onClick: Q[0] || (Q[0] = ($e) => Z.$emit("start-setup"))
              }, {
                default: h(() => [...Q[13] || (Q[13] = [
                  $(" Start Setup ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "unmanaged" ? (n(), R(cs, {
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
                onClick: Q[1] || (Q[1] = ($e) => Z.$emit("view-environments"))
              }, {
                default: h(() => [...Q[14] || (Q[14] = [
                  $(" View Environments ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : a.setupState === "empty_workspace" ? (n(), R(cs, {
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
                onClick: Q[2] || (Q[2] = ($e) => Z.$emit("create-environment"))
              }, {
                default: h(() => [...Q[15] || (Q[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", {
            class: "health-section-wrapper",
            onMouseenter: Q[4] || (Q[4] = ($e) => r.value = !0),
            onMouseleave: Q[5] || (Q[5] = ($e) => r.value = !1)
          }, [
            s("div", zv, [
              b(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...Q[16] || (Q[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Ud, { name: "fade" }, {
                default: h(() => [
                  r.value ? (n(), R(Me, {
                    key: 0,
                    variant: "ghost",
                    size: "xs",
                    class: "show-all-button",
                    onClick: c
                  }, {
                    default: h(() => [...Q[17] || (Q[17] = [
                      $(" Show All ", -1)
                    ])]),
                    _: 1
                  })) : y("", !0)
                ]),
                _: 1
              })
            ]),
            b(Bm, {
              "left-title": "WORKFLOWS",
              "right-title": "GIT CHANGES"
            }, Qt({
              left: h(() => [
                e.status.workflows.new.length ? (n(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.workflows.new.length,
                  label: "new",
                  variant: "new"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.modified.length ? (n(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.workflows.modified.length,
                  label: "modified",
                  variant: "modified"
                }, null, 8, ["count"])) : y("", !0),
                e.status.workflows.deleted.length ? (n(), R(gs, {
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
                  separator: I.value
                }, null, 8, ["count", "separator"])
              ]),
              right: h(() => [
                e.status.git_changes.nodes_added.length ? (n(), R(gs, {
                  key: 0,
                  icon: "●",
                  count: e.status.git_changes.nodes_added.length,
                  label: e.status.git_changes.nodes_added.length === 1 ? "node added" : "nodes added",
                  variant: "new"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.nodes_removed.length ? (n(), R(gs, {
                  key: 1,
                  icon: "●",
                  count: e.status.git_changes.nodes_removed.length,
                  label: e.status.git_changes.nodes_removed.length === 1 ? "node removed" : "nodes removed",
                  variant: "deleted"
                }, null, 8, ["count", "label"])) : y("", !0),
                e.status.git_changes.workflow_changes ? (n(), R(gs, {
                  key: 2,
                  icon: "●",
                  count: z.value,
                  label: z.value === 1 ? "workflow changed" : "workflows changed",
                  variant: "modified"
                }, null, 8, ["count", "label"])) : y("", !0),
                G.value ? (n(), R(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                M.value && !T.value && !G.value ? (n(), R(gs, {
                  key: 4,
                  icon: "●",
                  label: "configuration updated",
                  variant: "modified"
                })) : y("", !0),
                M.value ? y("", !0) : (n(), R(gs, {
                  key: 5,
                  icon: "✓",
                  label: "No uncommitted changes",
                  variant: "ok"
                }))
              ]),
              _: 2
            }, [
              D.value ? {
                name: "footer",
                fn: h(() => [
                  Q[19] || (Q[19] = s("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  s("div", Fv, [
                    s("span", Vv, m(me.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: Q[3] || (Q[3] = ($e) => Z.$emit("commit-changes"))
                    }, {
                      default: h(() => [...Q[18] || (Q[18] = [
                        $(" Commit ", -1)
                      ])]),
                      _: 1
                    })
                  ])
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ], 32),
          e.status.is_detached_head ? (n(), R(cs, {
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
                onClick: Q[6] || (Q[6] = ($e) => Z.$emit("create-branch"))
              }, {
                default: h(() => [...Q[20] || (Q[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          s("div", Bv, [
            b(ns, {
              level: "4",
              style: { "margin-bottom": "var(--cg-space-2)" }
            }, {
              default: h(() => [...Q[21] || (Q[21] = [
                $(" ISSUES ", -1)
              ])]),
              _: 1
            }),
            U.value ? (n(), i(B, { key: 0 }, [
              L.value.length > 0 ? (n(), R(cs, {
                key: 0,
                severity: "error",
                icon: "⚠",
                title: `${L.value.length} workflow${L.value.length === 1 ? "" : "s"} can't run`,
                description: fe.value,
                items: L.value.map(j)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[7] || (Q[7] = ($e) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[22] || (Q[22] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "description", "items"])) : y("", !0),
              q.value.length > 0 ? (n(), R(cs, {
                key: 1,
                severity: "warning",
                icon: "⚠",
                title: `${q.value.length} workflow${q.value.length === 1 ? "" : "s"} with path issues`,
                description: "These workflows can run but have model paths that should be synced.",
                items: q.value.map(($e) => `${$e.name} — ${$e.models_needing_path_sync_count} model path${$e.models_needing_path_sync_count === 1 ? "" : "s"} to sync`)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[8] || (Q[8] = ($e) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[23] || (Q[23] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "items"])) : y("", !0),
              e.status.missing_models_count > 0 && !ce.value ? (n(), R(cs, {
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
                    disabled: f.value,
                    onClick: C
                  }, {
                    default: h(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Q[9] || (Q[9] = ($e) => Z.$emit("view-workflows"))
                  }, {
                    default: h(() => [...Q[24] || (Q[24] = [
                      $(" See Workflows ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title"])) : y("", !0),
              e.status.comparison.is_synced ? y("", !0) : (n(), R(cs, {
                key: 3,
                severity: "error",
                icon: "⚠",
                title: "Environment not synced",
                description: Pe.value,
                items: ye.value
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: c
                  }, {
                    default: h(() => [...Q[25] || (Q[25] = [
                      $(" View Details ", -1)
                    ])]),
                    _: 1
                  }),
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[10] || (Q[10] = ($e) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Q[26] || (Q[26] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["description", "items"])),
              e.status.has_legacy_manager ? (n(), R(cs, {
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
                    onClick: Q[11] || (Q[11] = ($e) => Z.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Q[27] || (Q[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (n(), i("span", Wv, "No issues")) : (n(), R(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Av, {
        show: l.value,
        status: e.status,
        "is-repairing": p.value,
        onClose: Q[12] || (Q[12] = ($e) => l.value = !1),
        onNavigateWorkflows: u,
        onNavigateNodes: d,
        onRepair: w
      }, null, 8, ["show", "status", "is-repairing"])
    ], 64));
  }
}), jv = /* @__PURE__ */ xe(Gv, [["__scopeId", "data-v-df52ba90"]]), NR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const UR = [
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
], OR = {
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
}, Hv = [
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
], AR = [
  ...Hv,
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
  constructor(o, a, l, r) {
    super(o);
    _n(this, "status");
    _n(this, "data");
    _n(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function qv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), t = k(null);
  async function o(V, _e) {
    var Dt;
    if (!((Dt = window.app) != null && Dt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi(V, _e), mt = await He.text();
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
  async function a(V) {
    return o(`/v2/comfygit/cloud/auth/config?cloud_url=${encodeURIComponent(V)}`);
  }
  async function l(V, _e, He) {
    return o("/v2/comfygit/cloud/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: _e, password: He })
    });
  }
  async function r(V, _e, He) {
    return o("/v2/comfygit/cloud/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, email: _e, password: He })
    });
  }
  async function c(V, _e) {
    return o(`/v2/comfygit/cloud/auth/me?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function u(V, _e) {
    return o("/v2/comfygit/cloud/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cloud_url: V, refresh_token: _e || null })
    });
  }
  async function d(V, _e) {
    return o(`/v2/comfygit/cloud/environments?cloud_url=${encodeURIComponent(V)}`, {
      headers: { Authorization: `Bearer ${_e}` }
    });
  }
  async function v(V, _e, He) {
    return o(
      `/v2/comfygit/cloud/environments/${encodeURIComponent(_e)}/revisions?cloud_url=${encodeURIComponent(V)}`,
      {
        headers: { Authorization: `Bearer ${He}` }
      }
    );
  }
  async function f(V, _e, He, mt) {
    return o("/v2/comfygit/cloud/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${_e}`
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
  async function w(V, _e = !1) {
    return o("/v2/comfygit/commit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: V, allow_issues: _e })
    });
  }
  async function g(V = 10, _e = 0) {
    return o(`/v2/comfygit/log?limit=${V}&offset=${_e}`);
  }
  async function _(V, _e = 50) {
    return o(`/v2/comfygit/log?branch=${encodeURIComponent(V)}&limit=${_e}`);
  }
  async function x(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function C() {
    return o("/v2/comfygit/export/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function S() {
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
  async function M(V) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    });
  }
  async function T(V, _e) {
    return o(`/v2/comfygit/environment_export/${encodeURIComponent(V)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: _e, force: !0 })
    });
  }
  async function D() {
    return o("/v2/comfygit/branches");
  }
  async function z(V) {
    return o(`/v2/comfygit/commit/${V}`);
  }
  async function G(V, _e = !1) {
    return o("/v2/comfygit/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ref: V, force: _e })
    });
  }
  async function L(V, _e = "HEAD") {
    return o("/v2/comfygit/branch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, start_point: _e })
    });
  }
  async function q(V, _e = !1) {
    return o("/v2/comfygit/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ branch: V, force: _e })
    });
  }
  async function ce(V, _e = !1) {
    return o(`/v2/comfygit/branch/${encodeURIComponent(V)}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ force: _e })
    });
  }
  async function ne() {
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
    return (await ne()).environments;
  }
  async function we(V) {
    try {
      return await o(`/v2/comfygit/environments/${encodeURIComponent(V)}`);
    } catch {
      return null;
    }
  }
  async function ee(V, _e) {
    const He = { target_env: V };
    return _e && (He.workspace_path = _e), o("/v2/comfygit/switch_environment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(He)
    });
  }
  async function j() {
    try {
      return o("/v2/comfygit/switch_status");
    } catch {
      return null;
    }
  }
  async function K(V) {
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
  async function fe(V) {
    return o(`/v2/workspace/environments/${V}`, {
      method: "DELETE"
    });
  }
  async function U(V = !1) {
    try {
      return o(V ? "/v2/comfygit/workflows?refresh=true" : "/v2/comfygit/workflows");
    } catch {
      const _e = await p(V), He = [];
      return _e.workflows.new.forEach((mt) => {
        He.push({
          name: mt,
          status: "new",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), _e.workflows.modified.forEach((mt) => {
        He.push({
          name: mt,
          status: "modified",
          missing_nodes: 0,
          version_gated_count: 0,
          uninstallable_count: 0,
          missing_models: 0,
          path: mt
        });
      }), _e.workflows.synced.forEach((mt) => {
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
  async function me(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/details`);
  }
  async function Pe(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`);
  }
  async function ye(V, _e) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function Z(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/contract`, {
      method: "DELETE"
    });
  }
  async function Q(V) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/resolve`, {
      method: "POST"
    });
  }
  async function $e(V, _e, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/install`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ install_nodes: _e, install_models: He })
    });
  }
  async function te(V, _e, He) {
    return o(`/v2/comfygit/workflow/${encodeURIComponent(V)}/model-importance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: _e, importance: He })
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
  async function ve(V) {
    return o(`/v2/workspace/models/details/${encodeURIComponent(V)}`);
  }
  async function le(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/source-candidates`);
  }
  async function E(V) {
    return o(`/v2/workspace/models/${encodeURIComponent(V)}/hashes`, {
      method: "POST"
    });
  }
  async function A() {
    return o("/v2/workspace/models/workflow-source-candidates");
  }
  async function re(V) {
    return o("/v2/workspace/open-location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Ee(V, _e) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function Ce(V, _e) {
    return o(`/v2/workspace/models/${V}/source`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source_url: _e })
    });
  }
  async function Se(V) {
    return o(`/v2/workspace/models/${V}`, {
      method: "DELETE"
    });
  }
  async function ze(V) {
    return o("/v2/workspace/models/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Fe() {
    return o("/v2/workspace/models/scan", {
      method: "POST"
    });
  }
  async function Ne() {
    return o("/v2/workspace/models/directory");
  }
  async function Te(V) {
    return o("/v2/workspace/models/directory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function Je(V) {
    const _e = new URLSearchParams({ url: V });
    return o(`/v2/workspace/huggingface/repo-info?${_e}`);
  }
  async function We() {
    return o("/v2/workspace/models/subdirectories");
  }
  async function pe(V, _e = 10) {
    const He = new URLSearchParams({ query: V, limit: String(_e) });
    return o(`/v2/workspace/huggingface/search?${He}`);
  }
  async function J(V) {
    try {
      const _e = V ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(V)}` : "/v2/comfygit/config";
      return o(_e);
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
  async function qe(V, _e) {
    const He = _e ? `/v2/comfygit/config?workspace_path=${encodeURIComponent(_e)}` : "/v2/comfygit/config";
    return o(He, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function Ie(V, _e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), _e && He.append("lines", _e.toString()), o(`/v2/comfygit/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Xe(V, _e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), _e && He.append("lines", _e.toString()), o(`/v2/workspace/debug/logs?${He}`);
    } catch {
      return [];
    }
  }
  async function Ve() {
    return o("/v2/comfygit/debug/logs/path");
  }
  async function Ue() {
    return o("/v2/comfygit/debug/manifest");
  }
  async function W() {
    return o("/v2/workspace/debug/logs/path");
  }
  async function ue(V, _e) {
    try {
      const He = new URLSearchParams();
      return V && He.append("level", V), _e && He.append("lines", _e.toString()), o(`/v2/workspace/debug/orchestrator-logs?${He}`);
    } catch {
      return [];
    }
  }
  async function he() {
    return o("/v2/workspace/debug/orchestrator-logs/path");
  }
  async function Qe(V) {
    return o("/v2/workspace/open-file", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: V })
    });
  }
  async function N() {
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
  async function O(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/track-dev`, {
      method: "POST"
    });
  }
  async function X(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/install`, {
      method: "POST"
    });
  }
  async function Oe(V, _e) {
    var Fs, Is, Dl, Nl;
    const He = qv(), mt = ((Is = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Is.clientId) ?? ((Nl = (Dl = window.app) == null ? void 0 : Dl.api) == null ? void 0 : Nl.initialClientId) ?? "comfygit-panel", Dt = {
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
    }), console.log("[ComfyGit] Task queued with ui_id:", He, "for package:", V.id), _e != null && _e.beforeQueueStart && await _e.beforeQueueStart(He), await o("/v2/manager/queue/start", {
      method: "POST"
    }), { ui_id: He };
  }
  async function Ae(V) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/update`, {
      method: "POST"
    });
  }
  async function Le(V, _e) {
    return o(`/v2/comfygit/nodes/${encodeURIComponent(V)}/criticality`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ criticality: _e })
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
  async function kt(V, _e) {
    return o("/v2/comfygit/remotes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: V, url: _e })
    });
  }
  async function Et(V) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "DELETE"
    });
  }
  async function ie(V, _e, He) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: _e, push_url: He })
    });
  }
  async function F(V, _e) {
    const He = {};
    return _e && (He["X-Git-Auth-Token"] = _e), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/fetch`, {
      method: "POST",
      headers: He
    });
  }
  async function de(V) {
    try {
      return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/status`);
    } catch {
      return null;
    }
  }
  async function Ge(V = "skip", _e = !0) {
    return o("/v2/comfygit/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model_strategy: V,
        remove_extra_nodes: _e
      })
    });
  }
  async function dt(V, _e) {
    const He = _e ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/pull-preview`;
    return o(He);
  }
  async function xt(V, _e = {}) {
    const He = { "Content-Type": "application/json" };
    return _e.authToken && (He["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/pull`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({
        model_strategy: _e.modelStrategy || "skip",
        force: _e.force || !1,
        resolutions: _e.resolutions
      })
    });
  }
  async function it(V, _e) {
    const He = _e ? `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview?branch=${encodeURIComponent(_e)}` : `/v2/comfygit/remotes/${encodeURIComponent(V)}/push-preview`;
    return o(He);
  }
  async function St(V, _e = {}) {
    const He = { "Content-Type": "application/json" };
    return _e.authToken && (He["X-Git-Auth-Token"] = _e.authToken), o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/push`, {
      method: "POST",
      headers: He,
      body: JSON.stringify({ force: _e.force || !1 })
    });
  }
  async function ts(V, _e) {
    return o(`/v2/comfygit/remotes/${encodeURIComponent(V)}/validate-merge`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolutions: _e })
    });
  }
  async function xs(V) {
    const _e = {
      success: 0,
      failed: []
    };
    for (const He of V)
      try {
        await Q(He), _e.success++;
      } catch (mt) {
        _e.failed.push({
          name: He,
          error: mt instanceof Error ? mt.message : "Unknown error"
        });
      }
    return _e;
  }
  async function Qs(V) {
    var mt;
    const _e = new FormData();
    if (_e.append("file", V), !((mt = window.app) != null && mt.api))
      throw new Error("ComfyUI API not available");
    const He = await window.app.api.fetchApi("/v2/workspace/import/preview", {
      method: "POST",
      body: _e
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
  async function da(V, _e, He, mt) {
    var Fs;
    const Dt = new FormData();
    if (Dt.append("file", V), Dt.append("name", _e), Dt.append("model_strategy", He), Dt.append("torch_backend", mt), !((Fs = window.app) != null && Fs.api))
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
  async function uo(V, _e, He, mt) {
    return o("/v2/workspace/import/git", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        git_url: V,
        name: _e,
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
  async function ya(V, _e) {
    return o("/v2/comfygit/deploy/runpod/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: V, save_key: _e })
    });
  }
  async function hn() {
    return o("/v2/comfygit/deploy/runpod/volumes");
  }
  async function wa(V) {
    const _e = V ? `/v2/comfygit/deploy/runpod/gpu-types?data_center_id=${encodeURIComponent(V)}` : "/v2/comfygit/deploy/runpod/gpu-types";
    return o(_e);
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
  async function yn(V = !1) {
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
  async function wn(V) {
    return o("/v2/comfygit/deploy/custom/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(V)
    });
  }
  async function ae(V) {
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
  async function Ke() {
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
  async function vt(V, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function Lt(V, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(_e)}/start`, {
      method: "POST"
    });
  }
  async function ss(V, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(_e)}/stop`, {
      method: "POST"
    });
  }
  async function No(V, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances/${encodeURIComponent(_e)}`, {
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
    exportEnv: x,
    validateExport: C,
    validateDeploy: S,
    exportEnvWithForce: I,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: T,
    // Git Operations
    getBranches: D,
    getCommitDetail: z,
    checkout: G,
    createBranch: L,
    switchBranch: q,
    deleteBranch: ce,
    // Environment Management
    listEnvironments: ne,
    getEnvironments: Y,
    getEnvironmentDetails: we,
    switchEnvironment: ee,
    getSwitchProgress: j,
    createEnvironment: K,
    getCreateProgress: ke,
    getComfyUIReleases: se,
    deleteEnvironment: fe,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: me,
    getWorkflowContract: Pe,
    saveWorkflowContract: ye,
    deleteWorkflowContract: Z,
    resolveWorkflow: Q,
    installWorkflowDeps: $e,
    setModelImportance: te,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Re,
    getModelDetails: ve,
    getModelSourceCandidates: le,
    computeModelHashes: E,
    getWorkflowSourceCandidates: A,
    openFileLocation: re,
    addModelSource: Ee,
    removeModelSource: Ce,
    deleteModel: Se,
    downloadModel: ze,
    scanWorkspaceModels: Fe,
    getModelsDirectory: Ne,
    setModelsDirectory: Te,
    getHuggingFaceRepoInfo: Je,
    getModelsSubdirectories: We,
    searchHuggingFaceRepos: pe,
    // Settings
    getConfig: J,
    updateConfig: qe,
    // Cloud Auth
    getCloudAuthConfig: a,
    loginToCloud: l,
    signupToCloud: r,
    getCloudMe: c,
    logoutFromCloud: u,
    getCloudEnvironments: d,
    getCloudEnvironmentRevisions: v,
    publishCurrentEnvironmentToCloud: f,
    // Debug/Logs
    getEnvironmentLogs: Ie,
    getEnvironmentManifest: Ue,
    getWorkspaceLogs: Xe,
    getEnvironmentLogPath: Ve,
    getWorkspaceLogPath: W,
    getOrchestratorLogs: ue,
    getOrchestratorLogPath: he,
    openFile: Qe,
    // Node Management
    getNodes: N,
    trackNodeAsDev: O,
    installNode: X,
    queueNodeInstall: Oe,
    updateNode: Ae,
    updateNodeCriticality: Le,
    uninstallNode: je,
    // Git Remotes
    getRemotes: nt,
    addRemote: kt,
    removeRemote: Et,
    updateRemoteUrl: ie,
    fetchRemote: F,
    getRemoteSyncStatus: de,
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
    getNetworkVolumes: hn,
    getRunPodGpuTypes: wa,
    deployToRunPod: _a,
    getRunPodPods: ka,
    terminateRunPodPod: ba,
    stopRunPodPod: $a,
    startRunPodPod: Ca,
    getDeploymentStatus: xa,
    exportDeployPackage: Sa,
    getStoredRunPodKey: yn,
    clearRunPodKey: Ia,
    // Custom Worker Operations
    getCustomWorkers: Ea,
    addCustomWorker: wn,
    removeCustomWorker: ae,
    testWorkerConnection: H,
    scanForWorkers: Ke,
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
async function Sn(e, t) {
  var a;
  if (!((a = window.app) != null && a.api))
    throw new Error("ComfyUI API not available");
  const o = await window.app.api.fetchApi(e, t);
  if (!o.ok) {
    const l = await o.json().catch(() => ({}));
    throw new Error(l.error || l.message || `Request failed: ${o.status}`);
  }
  return o.json();
}
function Kv() {
  async function e() {
    try {
      return await Sn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function t() {
    try {
      return await Sn("/v2/comfygit/orchestrator/status");
    } catch {
      return null;
    }
  }
  async function o() {
    await Sn("/v2/comfygit/orchestrator/restart", { method: "POST" });
  }
  async function a() {
    await Sn("/v2/comfygit/orchestrator/kill", { method: "POST" });
  }
  return {
    checkHealth: e,
    getStatus: t,
    restart: o,
    kill: a
  };
}
const Jv = { class: "base-modal-header" }, Qv = {
  key: 0,
  class: "base-modal-title"
}, Yv = { class: "base-modal-body" }, Xv = {
  key: 0,
  class: "base-modal-loading"
}, Zv = {
  key: 1,
  class: "base-modal-error"
}, ep = {
  key: 0,
  class: "base-modal-footer"
}, tp = /* @__PURE__ */ be({
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
    const o = e, a = t;
    function l() {
      o.closeOnOverlayClick && a("close");
    }
    function r(c) {
      c.key === "Escape" && o.showCloseButton && a("close");
    }
    return at(() => {
      document.addEventListener("keydown", r), document.body.style.overflow = "hidden";
    }), Po(() => {
      document.removeEventListener("keydown", r), document.body.style.overflow = "";
    }), (c, u) => (n(), R(Kt, { to: "body" }, [
      s("div", {
        class: "base-modal-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        s("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = yt(() => {
          }, ["stop"]))
        }, [
          s("div", Jv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Qv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
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
          s("div", Yv, [
            e.loading ? (n(), i("div", Xv, "Loading...")) : e.error ? (n(), i("div", Zv, m(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", ep, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), $t = /* @__PURE__ */ xe(tp, [["__scopeId", "data-v-06a4be14"]]), sp = ["type", "disabled"], op = {
  key: 0,
  class: "spinner"
}, np = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("button", {
      type: e.type,
      disabled: e.disabled || e.loading,
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => t.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", op)) : y("", !0),
      ot(t.$slots, "default", {}, void 0)
    ], 10, sp));
  }
}), De = /* @__PURE__ */ xe(np, [["__scopeId", "data-v-f3452606"]]), ap = {
  key: 0,
  class: "base-title-count"
}, lp = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (t, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        ot(t.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", ap, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ xe(lp, [["__scopeId", "data-v-5a01561d"]]), ip = ["value", "disabled"], rp = {
  key: 0,
  value: "",
  disabled: ""
}, cp = ["value"], up = {
  key: 0,
  class: "base-select-error"
}, dp = /* @__PURE__ */ be({
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
    function o(a) {
      return typeof a == "string" ? a : a.label;
    }
    return (a, l) => (n(), i("div", {
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", rp, m(e.placeholder), 1)) : y("", !0),
        (n(!0), i(B, null, ge(e.options, (r) => (n(), i("option", {
          key: t(r),
          value: t(r)
        }, m(o(r)), 9, cp))), 128))
      ], 42, ip),
      e.error ? (n(), i("span", up, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Nn = /* @__PURE__ */ xe(dp, [["__scopeId", "data-v-4996bfe0"]]), mp = { class: "popover-header" }, fp = { class: "popover-title" }, vp = { class: "popover-content" }, pp = {
  key: 0,
  class: "popover-actions"
}, gp = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (t, o) => (n(), R(Kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "popover",
          style: Rt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = yt(() => {
          }, ["stop"]))
        }, [
          s("div", mp, [
            s("h4", fp, m(e.title), 1),
            s("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", vp, [
            ot(t.$slots, "content", {}, void 0)
          ]),
          t.$slots.actions ? (n(), i("div", pp, [
            ot(t.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ xe(gp, [["__scopeId", "data-v-7c1f5547"]]), hp = { class: "detail-section" }, yp = {
  key: 0,
  class: "empty-message"
}, wp = { class: "model-header" }, _p = { class: "model-name" }, kp = { class: "model-details" }, bp = { class: "model-row" }, $p = { class: "model-row" }, Cp = { class: "label" }, xp = {
  key: 0,
  class: "model-row model-row-nodes"
}, Sp = { class: "node-list" }, Ip = ["onClick"], Ep = {
  key: 1,
  class: "model-row"
}, Tp = { class: "value" }, Mp = {
  key: 2,
  class: "model-row"
}, Pp = { class: "value error" }, Rp = {
  key: 0,
  class: "model-actions"
}, Lp = { class: "detail-section" }, Dp = {
  key: 0,
  class: "empty-message"
}, Np = { class: "node-content" }, Up = { class: "node-main" }, Op = { class: "node-name" }, Ap = { class: "node-badge" }, zp = {
  key: 0,
  class: "node-version"
}, Fp = ["onClick"], Vp = {
  key: 2,
  class: "node-install-queued"
}, Bp = {
  key: 0,
  class: "node-guidance"
}, Wp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), x = k(/* @__PURE__ */ new Set()), C = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(ee) {
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
    function M(ee) {
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
    function T(ee) {
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
    function D(ee) {
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
      const j = ee.hash || ee.filename;
      return _.value.has(j) ? ee.loaded_by : ee.loaded_by.slice(0, 3);
    }
    function G(ee) {
      return _.value.has(ee);
    }
    function L(ee) {
      _.value.has(ee) ? _.value.delete(ee) : _.value.add(ee), _.value = new Set(_.value);
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ce(ee, j) {
      w.value[ee] = j, p.value = !0;
    }
    async function ne(ee) {
      try {
        await c(ee);
      } catch (j) {
        f.value = j instanceof Error ? j.message : "Failed to open file location";
      }
    }
    async function Y(ee) {
      if (ee.package_id)
        try {
          const j = ee.latest_version || "latest";
          await u({
            id: ee.package_id,
            version: j,
            selected_version: j,
            mode: "remote",
            channel: "default"
          }), x.value.add(ee.package_id);
        } catch (j) {
          f.value = j instanceof Error ? j.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [ee, j] of Object.entries(w.value))
          await r(o.workflowName, ee, j);
        a("refresh"), a("close");
      } catch (ee) {
        f.value = ee instanceof Error ? ee.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return at(q), (ee, j) => (n(), i(B, null, [
      b($t, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: j[4] || (j[4] = (K) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(B, { key: 0 }, [
            s("section", hp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", yp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, ge(d.value.models, (K) => {
                var ke;
                return n(), i("div", {
                  key: K.hash || K.filename,
                  class: "model-card"
                }, [
                  s("div", wp, [
                    j[6] || (j[6] = s("span", { class: "model-icon" }, "📦", -1)),
                    s("span", _p, m(K.filename), 1)
                  ]),
                  s("div", kp, [
                    s("div", bp, [
                      j[7] || (j[7] = s("span", { class: "label" }, "Status:", -1)),
                      s("span", {
                        class: Be(["value", S(K.status)])
                      }, m(I(K.status)), 3)
                    ]),
                    s("div", $p, [
                      s("span", Cp, [
                        j[8] || (j[8] = $(" Importance: ", -1)),
                        b(Sl, {
                          size: 14,
                          title: "About importance levels",
                          onClick: j[0] || (j[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Nn, {
                        "model-value": w.value[K.filename] || K.importance,
                        options: C,
                        "onUpdate:modelValue": (se) => ce(K.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    K.loaded_by && K.loaded_by.length > 0 ? (n(), i("div", xp, [
                      j[9] || (j[9] = s("span", { class: "label" }, "Loaded by:", -1)),
                      s("div", Sp, [
                        (n(!0), i(B, null, ge(z(K), (se, fe) => (n(), i("div", {
                          key: `${se.node_id}-${fe}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        K.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => L(K.hash || K.filename)
                        }, m(G(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, Ip)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    K.size_mb ? (n(), i("div", Ep, [
                      j[10] || (j[10] = s("span", { class: "label" }, "Size:", -1)),
                      s("span", Tp, m(K.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    K.has_category_mismatch ? (n(), i("div", Mp, [
                      j[13] || (j[13] = s("span", { class: "label" }, "Location issue:", -1)),
                      s("span", Pp, [
                        j[11] || (j[11] = $(" In ", -1)),
                        s("code", null, m(K.actual_category) + "/", 1),
                        j[12] || (j[12] = $(" but loader needs ", -1)),
                        s("code", null, m((ke = K.expected_categories) == null ? void 0 : ke[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  K.status !== "available" ? (n(), i("div", Rp, [
                    K.status === "downloadable" ? (n(), R(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: j[1] || (j[1] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...j[14] || (j[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : K.status === "category_mismatch" && K.file_path ? (n(), R(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => ne(K.file_path)
                    }, {
                      default: h(() => [...j[15] || (j[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : K.status !== "path_mismatch" ? (n(), R(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: j[2] || (j[2] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...j[16] || (j[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            s("section", Lp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Dp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, ge(d.value.nodes, (K, ke) => (n(), i("div", {
                key: `${K.name}-${K.status}-${ke}`,
                class: "node-item"
              }, [
                s("span", {
                  class: Be(["node-status", M(K.status)])
                }, m(T(K.status)), 3),
                s("div", Np, [
                  s("div", Up, [
                    s("span", Op, m(K.name), 1),
                    s("span", Ap, m(D(K.status)), 1),
                    K.version ? (n(), i("span", zp, "v" + m(K.version), 1)) : y("", !0),
                    K.status === "uninstallable" && K.package_id && !x.value.has(K.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(K)
                    }, " Install ", 8, Fp)) : K.status === "uninstallable" && K.package_id && x.value.has(K.package_id) ? (n(), i("span", Vp, " Queued ")) : y("", !0)
                  ]),
                  K.guidance ? (n(), i("div", Bp, m(K.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: j[3] || (j[3] = (K) => a("close"))
          }, {
            default: h(() => [...j[17] || (j[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...j[18] || (j[18] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ]),
        _: 1
      }, 8, ["title", "loading", "error"]),
      b(Yt, {
        show: g.value,
        title: "Model Importance Levels",
        onClose: j[5] || (j[5] = (K) => g.value = !1)
      }, {
        content: h(() => [...j[19] || (j[19] = [
          s("ul", { class: "importance-info-list" }, [
            s("li", null, [
              s("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            s("li", null, [
              s("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            s("li", null, [
              s("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Gp = /* @__PURE__ */ xe(Wp, [["__scopeId", "data-v-543076d9"]]), rt = co({
  items: [],
  status: "idle"
});
let ws = null;
function tc() {
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
    await jp(e), e.status = "completed", e.progress = 100;
  } catch (t) {
    e.status = "failed", e.error = t instanceof Error ? t.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", ho();
  }
}
async function jp(e) {
  return new Promise((t, o) => {
    ws && (ws.close(), ws = null);
    const a = new URLSearchParams({
      url: e.url,
      target_path: e.targetPath,
      filename: e.filename,
      workflow: e.workflow
    }), l = new EventSource(`/v2/comfygit/models/download-stream?${a}`);
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
            const _ = u, x = (_ - r) / 1e3, C = e.downloaded - c;
            if (C > 0 && x > 0)
              if (e.speed = C / x, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
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
async function Hp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const t = await e.json();
    if (!t.pending_downloads || t.pending_downloads.length === 0) return;
    for (const o of t.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: tc(),
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
      rt.items.push(a);
    }
    console.log(`[ComfyGit] Loaded ${t.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Lo() {
  function e(C) {
    for (const S of C) {
      if (rt.items.some(
        (T) => T.url === S.url && T.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(T.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
        id: tc(),
        workflow: S.workflow,
        filename: S.filename,
        url: S.url,
        targetPath: S.targetPath,
        size: S.size || 0,
        type: S.type || "model",
        status: "queued",
        progress: 0,
        downloaded: 0,
        speed: 0,
        eta: 0,
        retries: 0
      };
      rt.items.push(M);
    }
    rt.status === "idle" && ho();
  }
  async function t(C) {
    const S = Va(C);
    if (S) {
      if (S.status === "downloading") {
        try {
          await fetch(`/v2/comfygit/models/download?url=${encodeURIComponent(S.url)}`, {
            method: "DELETE"
          });
        } catch {
        }
        ws && (ws.close(), ws = null), S.status = "failed", S.error = "Cancelled by user", rt.status = "idle", ho();
      } else if (S.status === "queued") {
        const I = rt.items.findIndex((M) => M.id === C);
        I >= 0 && rt.items.splice(I, 1);
      }
    }
  }
  function o(C) {
    const S = Va(C);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && ho());
  }
  function a(C) {
    const S = Va(C);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && ho());
  }
  function l() {
    const C = rt.items.filter((S) => S.status === "paused");
    for (const S of C)
      S.status = "queued";
    rt.status === "idle" && ho();
  }
  function r(C) {
    const S = rt.items.findIndex((I) => I.id === C);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function c() {
    rt.items = rt.items.filter((C) => C.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter((C) => C.status !== "failed");
  }
  const d = P(
    () => rt.items.find((C) => C.status === "downloading")
  ), v = P(
    () => rt.items.filter((C) => C.status === "queued")
  ), f = P(
    () => rt.items.filter((C) => C.status === "completed")
  ), p = P(
    () => rt.items.filter((C) => C.status === "failed")
  ), w = P(
    () => rt.items.filter((C) => C.status === "paused")
  ), g = P(() => rt.items.length > 0), _ = P(
    () => rt.items.filter((C) => C.status === "queued" || C.status === "downloading").length
  ), x = P(
    () => rt.items.some((C) => C.status === "paused")
  );
  return {
    // State (readonly to prevent external mutations)
    queue: On(rt),
    // Computed
    currentDownload: d,
    queuedItems: v,
    completedItems: f,
    failedItems: p,
    pausedItems: w,
    hasItems: g,
    activeCount: _,
    hasPaused: x,
    // Actions
    addToQueue: e,
    cancelDownload: t,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: Hp
  };
}
function sc() {
  const e = k(null), t = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(I, M) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const T = await window.app.api.fetchApi(I, M);
    if (!T.ok) {
      const z = await T.json().catch(() => ({})), G = z.error || z.message || `Request failed: ${T.status}`;
      throw new Error(G);
    }
    return T.json();
  }
  async function u(I) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await c(
        `/v2/comfygit/workflow/${I}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), M.nodes.version_gated = M.nodes.version_gated || [], M.nodes.uninstallable = M.nodes.uninstallable || [], M.node_guidance = M.node_guidance || {}, M.package_aliases = M.package_aliases || {}, e.value = M, M;
    } catch (M) {
      const T = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = T, M;
    } finally {
      l.value = !1;
    }
  }
  async function d(I, M, T, D) {
    l.value = !0, r.value = null;
    try {
      let z;
      if (!Ao()) {
        const G = Object.fromEntries(M), L = Object.fromEntries(T), q = D ? Array.from(D) : [];
        z = await c(
          `/v2/comfygit/workflow/${I}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: G,
              model_choices: L,
              skipped_packages: q
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
  async function v(I, M = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: M })
        }
      )), o.value = T.results, T.results;
    } catch (T) {
      const D = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = D, T;
    } finally {
      l.value = !1;
    }
  }
  async function f(I, M = 10) {
    l.value = !0, r.value = null;
    try {
      let T;
      return Ao() || (T = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: I, limit: M })
        }
      )), a.value = T.results, T.results;
    } catch (T) {
      const D = T instanceof Error ? T.message : "Unknown error occurred";
      throw r.value = D, T;
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
    } catch (M) {
      const T = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = T, M;
    }
  }
  async function _(I) {
    var T;
    const M = await c(
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
      const D = new Map(((T = M.failed) == null ? void 0 : T.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < p.nodesToInstall.length; z++) {
        const G = p.nodesToInstall[z], L = D.get(G);
        p.nodeInstallProgress.completedNodes.push({
          node_id: G,
          success: !L,
          error: L
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function x(I, M, T) {
    w(), p.phase = "resolving", r.value = null;
    const D = Object.fromEntries(M), z = Object.fromEntries(T);
    try {
      const G = await fetch(`/v2/comfygit/workflow/${I}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: z
        })
      });
      if (!G.ok)
        throw new Error(`Request failed: ${G.status}`);
      if (!G.body)
        throw new Error("No response body");
      const L = G.body.getReader(), q = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: ne, value: Y } = await L.read();
        if (ne) break;
        ce += q.decode(Y, { stream: !0 });
        const we = ce.split(`

`);
        ce = we.pop() || "";
        for (const ee of we) {
          if (!ee.trim()) continue;
          const j = ee.split(`
`);
          let K = "", ke = "";
          for (const se of j)
            se.startsWith("event: ") ? K = se.slice(7) : se.startsWith("data: ") && (ke = se.slice(6));
          if (ke)
            try {
              const se = JSON.parse(ke);
              C(K, se);
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
  function C(I, M) {
    switch (I) {
      case "batch_start":
        p.phase = "downloading", p.totalFiles = M.total;
        break;
      case "file_start":
        p.currentFile = M.filename, p.currentFileIndex = M.index, p.bytesDownloaded = 0, p.bytesTotal = void 0;
        break;
      case "file_progress":
        p.bytesDownloaded = M.downloaded, p.bytesTotal = M.total;
        break;
      case "file_complete":
        p.completedFiles.push({
          filename: M.filename,
          success: M.success,
          error: M.error
        });
        break;
      case "batch_complete":
        break;
      case "done":
        p.nodesToInstall = M.nodes_to_install || [], M.download_results && (p.completedFiles = M.download_results), p.phase = "complete";
        break;
      case "error":
        p.error = M.message, p.phase = "error", r.value = M.message;
        break;
    }
  }
  function S(I, M) {
    const { addToQueue: T } = Lo(), D = M.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: I,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return D.length > 0 && T(D), D.length;
  }
  return {
    // State
    result: e,
    appliedResult: t,
    searchResults: o,
    modelSearchResults: a,
    isLoading: l,
    error: r,
    progress: p,
    // Methods
    analyzeWorkflow: u,
    applyResolution: d,
    applyResolutionWithProgress: x,
    installNodes: g,
    searchNodes: v,
    searchModels: f,
    resetProgress: w,
    queueModelDownloads: S
  };
}
const qp = { class: "resolution-stepper" }, Kp = { class: "stepper-header" }, Jp = ["onClick"], Qp = {
  key: 0,
  class: "step-icon"
}, Yp = {
  key: 1,
  class: "step-number"
}, Xp = { class: "step-label" }, Zp = {
  key: 0,
  class: "step-connector"
}, eg = { class: "stepper-content" }, tg = /* @__PURE__ */ be({
  __name: "ResolutionStepper",
  props: {
    steps: {},
    currentStep: {},
    completedSteps: {},
    stepStats: {}
  },
  emits: ["step-change"],
  setup(e, { emit: t }) {
    const o = e, a = t;
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
      a("step-change", v);
    }
    return (v, f) => (n(), i("div", qp, [
      s("div", Kp, [
        (n(!0), i(B, null, ge(e.steps, (p, w) => (n(), i("div", {
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
            l(p.id) ? (n(), i("span", Qp, "✓")) : (n(), i("span", Yp, m(w + 1), 1))
          ], 2),
          s("div", Xp, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Zp)) : y("", !0)
        ], 10, Jp))), 128))
      ]),
      s("div", eg, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), sg = /* @__PURE__ */ xe(tg, [["__scopeId", "data-v-2a7b3af8"]]), og = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = P(() => t.confidence >= 0.9 ? "high" : t.confidence >= 0.7 ? "medium" : "low"), a = P(() => `confidence-${o.value}`), l = P(() => t.showPercentage ? `${Math.round(t.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), qn = /* @__PURE__ */ xe(og, [["__scopeId", "data-v-17ec4b80"]]), ng = { class: "node-info" }, ag = { class: "node-info-text" }, lg = { class: "item-body" }, ig = {
  key: 0,
  class: "resolved-state"
}, rg = {
  key: 1,
  class: "multiple-options"
}, cg = {
  key: 0,
  class: "installed-packs-section"
}, ug = { class: "installed-packs-list" }, dg = ["onClick"], mg = { class: "installed-pack-name" }, fg = { class: "installed-pack-source" }, vg = { class: "options-list" }, pg = ["onClick"], gg = ["name", "value", "checked", "onChange"], hg = { class: "option-content" }, yg = { class: "option-header" }, wg = { class: "option-package-id" }, _g = {
  key: 0,
  class: "option-title"
}, kg = { class: "option-meta" }, bg = {
  key: 0,
  class: "installed-badge"
}, $g = { class: "action-buttons" }, Cg = {
  key: 2,
  class: "unresolved"
}, xg = {
  key: 0,
  class: "installed-packs-section"
}, Sg = { class: "installed-packs-list" }, Ig = ["onClick"], Eg = { class: "installed-pack-name" }, Tg = { class: "installed-pack-source" }, Mg = {
  key: 1,
  class: "searching-state"
}, Pg = { class: "options-list" }, Rg = ["onClick"], Lg = ["name", "value"], Dg = { class: "option-content" }, Ng = { class: "option-header" }, Ug = { class: "option-package-id" }, Og = {
  key: 0,
  class: "option-description"
}, Ag = { class: "option-meta" }, zg = {
  key: 0,
  class: "installed-badge"
}, Fg = {
  key: 3,
  class: "unresolved-message"
}, Vg = { class: "action-buttons" }, Bg = /* @__PURE__ */ be({
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
    const o = e, a = t;
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
      a("option-selected", f);
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
    return (f, p) => (n(), i("div", {
      class: Be(["node-resolution-item", { selected: e.isSelected, ambiguous: e.hasMultipleOptions, resolved: r.value }])
    }, [
      s("div", ng, [
        s("span", ag, [
          p[7] || (p[7] = $("Node type: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", lg, [
        r.value ? (n(), i("div", ig, [
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: p[0] || (p[0] = (w) => a("clear-choice"))
          }, {
            default: h(() => [...p[8] || (p[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", rg, [
          c.value.length > 0 ? (n(), i("div", cg, [
            p[9] || (p[9] = s("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            s("div", ug, [
              (n(!0), i(B, null, ge(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", mg, m(w.package_id), 1),
                s("span", fg, m(v(w.source)), 1)
              ], 8, dg))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = s("p", { class: "options-prompt" }, "Potential matches:", -1)),
          s("div", vg, [
            (n(!0), i(B, null, ge(e.options, (w, g) => (n(), i("label", {
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
              }, null, 40, gg),
              s("div", hg, [
                s("div", yg, [
                  s("span", wg, m(w.package_id), 1),
                  b(qn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", _g, m(w.title), 1)) : y("", !0),
                s("div", kg, [
                  w.is_installed ? (n(), i("span", bg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, pg))), 128))
          ]),
          s("div", $g, [
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[1] || (p[1] = (w) => a("search"))
            }, {
              default: h(() => [...p[10] || (p[10] = [
                $(" Search Registry ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[2] || (p[2] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[11] || (p[11] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[3] || (p[3] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[12] || (p[12] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Cg, [
          c.value.length > 0 ? (n(), i("div", xg, [
            p[14] || (p[14] = s("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            s("div", Sg, [
              (n(!0), i(B, null, ge(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                s("span", Eg, m(w.package_id), 1),
                s("span", Tg, m(v(w.source)), 1)
              ], 8, Ig))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Mg, [...p[15] || (p[15] = [
            s("span", { class: "searching-spinner" }, null, -1),
            s("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(B, { key: 2 }, [
            p[16] || (p[16] = s("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            s("div", Pg, [
              (n(!0), i(B, null, ge(e.searchResults.slice(0, 5), (w, g) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                s("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Lg),
                s("div", Dg, [
                  s("div", Ng, [
                    s("span", Ug, m(w.package_id), 1),
                    b(qn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", Og, m(l(w.description)), 1)) : y("", !0),
                  s("div", Ag, [
                    w.is_installed ? (n(), i("span", zg, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Rg))), 128))
            ])
          ], 64)) : (n(), i("div", Fg, [...p[17] || (p[17] = [
            s("span", { class: "warning-icon" }, "⚠", -1),
            s("span", null, "No matching package found in registry", -1)
          ])])),
          s("div", Vg, [
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[4] || (p[4] = (w) => a("search"))
            }, {
              default: h(() => {
                var w;
                return [
                  $(m((w = e.searchResults) != null && w.length ? "Refine Search" : "Search Registry"), 1)
                ];
              }),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[5] || (p[5] = (w) => a("manual-entry"))
            }, {
              default: h(() => [...p[18] || (p[18] = [
                $(" Enter Manually ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: p[6] || (p[6] = (w) => a("mark-optional"))
            }, {
              default: h(() => [...p[19] || (p[19] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Wg = /* @__PURE__ */ xe(Bg, [["__scopeId", "data-v-fb0bbf03"]]), Gg = { class: "item-navigator" }, jg = { class: "nav-item-info" }, Hg = ["title"], qg = { class: "nav-controls" }, Kg = { class: "nav-arrows" }, Jg = ["disabled"], Qg = ["disabled"], Yg = { class: "nav-position" }, Xg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", Gg, [
      s("div", jg, [
        s("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, Hg)
      ]),
      s("div", qg, [
        s("div", Kg, [
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Jg),
          s("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Qg)
        ]),
        s("span", Yg, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), oc = /* @__PURE__ */ xe(Xg, [["__scopeId", "data-v-74af7920"]]), Zg = ["type", "value", "placeholder", "disabled"], eh = {
  key: 0,
  class: "base-input-error"
}, th = /* @__PURE__ */ be({
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
    return (t, o) => (n(), i("div", {
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      s("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = ds((a) => t.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ds((a) => t.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Zg),
      e.error ? (n(), i("span", eh, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ xe(th, [["__scopeId", "data-v-9ba02cdc"]]), sh = { class: "node-resolution-step" }, oh = {
  key: 0,
  class: "auto-resolved-section"
}, nh = { class: "section-header" }, ah = { class: "stat-badge" }, lh = { class: "resolved-packages-list" }, ih = { class: "package-info" }, rh = { class: "package-id" }, ch = { class: "node-count" }, uh = { class: "package-actions" }, dh = {
  key: 0,
  class: "status-badge install"
}, mh = {
  key: 1,
  class: "status-badge skip"
}, fh = ["onClick"], vh = {
  key: 1,
  class: "section-divider"
}, ph = { class: "step-header" }, gh = { class: "stat-badge" }, hh = {
  key: 1,
  class: "step-body"
}, yh = {
  key: 3,
  class: "empty-state"
}, wh = { class: "node-modal-body" }, _h = { class: "node-search-results-container" }, kh = {
  key: 0,
  class: "node-search-results"
}, bh = ["onClick"], $h = { class: "node-result-header" }, Ch = { class: "node-result-package-id" }, xh = {
  key: 0,
  class: "node-result-description"
}, Sh = {
  key: 1,
  class: "node-empty-state"
}, Ih = {
  key: 2,
  class: "node-empty-state"
}, Eh = {
  key: 3,
  class: "node-empty-state"
}, Th = { class: "node-manual-entry-modal" }, Mh = { class: "node-modal-body" }, Ph = { class: "node-modal-actions" }, Rh = /* @__PURE__ */ be({
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
    const o = e, a = t, { searchNodes: l } = sc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function x() {
      _.value && fe(), _.value = !1;
    }
    const C = P(() => o.nodes[r.value]), S = P(() => o.nodes.filter((te) => o.nodeChoices.has(te.node_type)).length), I = P(() => C.value ? w.value.get(C.value.node_type) || [] : []), M = P(() => C.value ? g.value.has(C.value.node_type) : !1);
    ht(C, async (te) => {
      var oe;
      te && ((oe = te.options) != null && oe.length || w.value.has(te.node_type) || g.value.has(te.node_type) || o.nodeChoices.has(te.node_type) || await T(te.node_type));
    }, { immediate: !0 });
    async function T(te) {
      g.value.add(te);
      try {
        const oe = await l(te, 5);
        w.value.set(te, oe);
      } catch {
        w.value.set(te, []);
      } finally {
        g.value.delete(te);
      }
    }
    const D = P(() => o.autoResolvedPackages.filter((te) => !o.skippedPackages.has(te.package_id)).length);
    function z(te) {
      return o.skippedPackages.has(te);
    }
    function G(te) {
      a("package-skip", te);
    }
    const L = P(() => {
      var oe;
      if (!C.value) return "not-found";
      const te = o.nodeChoices.get(C.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = C.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), q = P(() => {
      var oe;
      if (!C.value) return;
      const te = o.nodeChoices.get(C.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return te.package_id ? `→ ${te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = C.value.options) != null && oe.length ? `${C.value.options.length} matches` : "Not Found";
    });
    function ce(te) {
      te >= 0 && te < o.nodes.length && (r.value = te);
    }
    function ne() {
      var te;
      for (let oe = r.value + 1; oe < o.nodes.length; oe++) {
        const Re = o.nodes[oe];
        if (!((te = o.nodeChoices) != null && te.has(Re.node_type))) {
          ce(oe);
          return;
        }
      }
    }
    function Y() {
      C.value && (a("mark-optional", C.value.node_type), Pt(() => ne()));
    }
    function we() {
      C.value && (a("skip", C.value.node_type), Pt(() => ne()));
    }
    function ee(te) {
      C.value && (a("option-selected", C.value.node_type, te), Pt(() => ne()));
    }
    function j() {
      C.value && a("clear-choice", C.value.node_type);
    }
    function K() {
      C.value && (d.value = C.value.node_type, f.value = I.value, c.value = !0, ye(d.value));
    }
    function ke() {
      v.value = "", u.value = !0;
    }
    function se(te) {
      C.value && (a("manual-entry", C.value.node_type, te), Pt(() => ne()));
    }
    function fe() {
      c.value = !1, d.value = "", f.value = [];
    }
    function U() {
      u.value = !1, v.value = "";
    }
    let me = null;
    function Pe() {
      me && clearTimeout(me), me = setTimeout(() => {
        ye(d.value);
      }, 300);
    }
    async function ye(te) {
      if (!te.trim()) {
        f.value = [];
        return;
      }
      p.value = !0;
      try {
        f.value = await l(te, 10);
      } catch {
        f.value = [];
      } finally {
        p.value = !1;
      }
    }
    function Z(te) {
      C.value && (a("manual-entry", C.value.node_type, te.package_id), fe(), Pt(() => ne()));
    }
    function Q(te) {
      C.value && (a("manual-entry", C.value.node_type, te.package_id), Pt(() => ne()));
    }
    function $e() {
      !C.value || !v.value.trim() || (a("manual-entry", C.value.node_type, v.value.trim()), U(), Pt(() => ne()));
    }
    return (te, oe) => {
      var Re, ve;
      return n(), i("div", sh, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", oh, [
          s("div", nh, [
            oe[6] || (oe[6] = s("div", { class: "section-info" }, [
              s("h4", { class: "section-title" }, "Packages to Install"),
              s("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            s("span", ah, m(D.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          s("div", lh, [
            (n(!0), i(B, null, ge(e.autoResolvedPackages, (le) => (n(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              s("div", ih, [
                s("code", rh, m(le.package_id), 1),
                s("span", ch, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              s("div", uh, [
                z(le.package_id) ? (n(), i("span", mh, " SKIPPED ")) : (n(), i("span", dh, " WILL INSTALL ")),
                s("button", {
                  class: "toggle-skip-btn",
                  onClick: (E) => G(le.package_id)
                }, m(z(le.package_id) ? "Include" : "Skip"), 9, fh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", vh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(B, { key: 2 }, [
          s("div", ph, [
            oe[7] || (oe[7] = s("div", { class: "step-info" }, [
              s("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              s("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            s("span", gh, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          C.value ? (n(), R(oc, {
            key: 0,
            "item-name": C.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (le) => ce(r.value - 1)),
            onNext: oe[1] || (oe[1] = (le) => ce(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          C.value ? (n(), i("div", hh, [
            b(Wg, {
              "node-type": C.value.node_type,
              "has-multiple-options": !!((Re = C.value.options) != null && Re.length),
              options: C.value.options,
              choice: (ve = e.nodeChoices) == null ? void 0 : ve.get(C.value.node_type),
              status: L.value,
              "status-label": q.value,
              "search-results": I.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Y,
              onSkip: we,
              onManualEntry: ke,
              onSearch: K,
              onOptionSelected: ee,
              onClearChoice: j,
              onSearchResultSelected: Q,
              onInstalledPackSelected: se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", yh, [...oe[8] || (oe[8] = [
          s("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), R(Kt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = yt((le) => _.value = !0, ["self"])),
            onMouseup: yt(x, ["self"])
          }, [
            s("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (le) => _.value = !1)
            }, [
              s("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = s("h4", null, "Search Node Packages", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: fe
                }, "✕")
              ]),
              s("div", wh, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                s("div", _h, [
                  f.value.length > 0 ? (n(), i("div", kh, [
                    (n(!0), i(B, null, ge(f.value, (le) => (n(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (E) => Z(le)
                    }, [
                      s("div", $h, [
                        s("code", Ch, m(le.package_id), 1),
                        le.match_confidence ? (n(), R(qn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (n(), i("div", xh, m(le.description), 1)) : y("", !0)
                    ], 8, bh))), 128))
                  ])) : p.value ? (n(), i("div", Sh, "Searching...")) : d.value ? (n(), i("div", Ih, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", Eh, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), R(Kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: yt(U, ["self"])
          }, [
            s("div", Th, [
              s("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = s("h4", null, "Enter Package Manually", -1)),
                s("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              s("div", Mh, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                s("div", Ph, [
                  b(De, {
                    variant: "secondary",
                    onClick: U
                  }, {
                    default: h(() => [...oe[11] || (oe[11] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !v.value.trim(),
                    onClick: $e
                  }, {
                    default: h(() => [...oe[12] || (oe[12] = [
                      $(" Add Package ", -1)
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
}), Lh = /* @__PURE__ */ xe(Rh, [["__scopeId", "data-v-94c6a438"]]), Dh = { class: "node-info" }, Nh = { class: "node-info-text" }, Uh = { class: "item-body" }, Oh = {
  key: 0,
  class: "resolved-state"
}, Ah = {
  key: 1,
  class: "multiple-options"
}, zh = { class: "options-list" }, Fh = ["onClick"], Vh = ["name", "value", "checked", "onChange"], Bh = { class: "option-content" }, Wh = { class: "option-header" }, Gh = { class: "option-filename" }, jh = { class: "option-meta" }, Hh = { class: "option-size" }, qh = { class: "option-category" }, Kh = { class: "option-path" }, Jh = { class: "action-buttons" }, Qh = {
  key: 2,
  class: "unresolved"
}, Yh = { class: "action-buttons" }, Xh = /* @__PURE__ */ be({
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
    const o = e, a = t, l = P(() => !!o.choice);
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
      a("option-selected", d);
    }
    function u(d) {
      if (!d) return "Unknown";
      const v = d / (1024 * 1024 * 1024);
      return v >= 1 ? `${v.toFixed(2)} GB` : `${(d / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (d, v) => (n(), i("div", {
      class: Be(["model-resolution-item", { resolved: l.value, ambiguous: e.hasMultipleOptions }])
    }, [
      s("div", Dh, [
        s("span", Nh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          s("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      s("div", Uh, [
        l.value ? (n(), i("div", Oh, [
          b(De, {
            variant: "ghost",
            size: "sm",
            onClick: v[0] || (v[0] = (f) => a("clear-choice"))
          }, {
            default: h(() => [...v[8] || (v[8] = [
              $(" Change Selection ", -1)
            ])]),
            _: 1
          })
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Ah, [
          v[12] || (v[12] = s("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          s("div", zh, [
            (n(!0), i(B, null, ge(e.options, (f, p) => (n(), i("label", {
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
              }, null, 40, Vh),
              s("div", Bh, [
                s("div", Wh, [
                  s("span", Gh, m(f.model.filename), 1),
                  b(qn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                s("div", jh, [
                  s("span", Hh, m(u(f.model.size)), 1),
                  s("span", qh, m(f.model.category), 1)
                ]),
                s("div", Kh, m(f.model.relative_path), 1)
              ])
            ], 10, Fh))), 128))
          ]),
          s("div", Jh, [
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: v[1] || (v[1] = (f) => a("search"))
            }, {
              default: h(() => [...v[9] || (v[9] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "ghost",
              size: "sm",
              onClick: v[2] || (v[2] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[10] || (v[10] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[3] || (v[3] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[11] || (v[11] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : (n(), i("div", Qh, [
          v[16] || (v[16] = s("div", { class: "unresolved-message" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "Model not found in workspace")
          ], -1)),
          s("div", Yh, [
            b(De, {
              variant: "primary",
              size: "sm",
              onClick: v[4] || (v[4] = (f) => a("search"))
            }, {
              default: h(() => [...v[13] || (v[13] = [
                $(" Search Workspace ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[5] || (v[5] = (f) => a("download-url"))
            }, {
              default: h(() => [...v[14] || (v[14] = [
                $(" Download URL ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: "secondary",
              size: "sm",
              onClick: v[6] || (v[6] = (f) => a("mark-optional"))
            }, {
              default: h(() => [...v[15] || (v[15] = [
                $(" Mark Optional ", -1)
              ])]),
              _: 1
            })
          ])
        ]))
      ])
    ], 2));
  }
}), Zh = /* @__PURE__ */ xe(Xh, [["__scopeId", "data-v-8a82fefa"]]), ey = { class: "model-resolution-step" }, ty = { class: "step-header" }, sy = { class: "step-info" }, oy = { class: "step-title" }, ny = { class: "step-description" }, ay = { class: "stat-badge" }, ly = {
  key: 1,
  class: "step-body"
}, iy = {
  key: 2,
  class: "empty-state"
}, ry = { class: "model-search-modal" }, cy = { class: "model-modal-body" }, uy = {
  key: 0,
  class: "model-search-results"
}, dy = ["onClick"], my = { class: "model-result-header" }, fy = { class: "model-result-filename" }, vy = { class: "model-result-meta" }, py = { class: "model-result-category" }, gy = { class: "model-result-size" }, hy = {
  key: 0,
  class: "model-result-path"
}, yy = {
  key: 1,
  class: "model-no-results"
}, wy = {
  key: 2,
  class: "model-searching"
}, _y = { class: "model-download-url-modal" }, ky = { class: "model-modal-body" }, by = { class: "model-input-group" }, $y = { class: "model-input-group" }, Cy = { class: "model-modal-actions" }, xy = /* @__PURE__ */ be({
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
    function a(se) {
      var fe;
      return se && ((fe = o[se]) == null ? void 0 : fe[0]) || null;
    }
    const l = e, r = t, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = P(() => l.models[c.value]), x = P(() => l.models.some((se) => se.is_download_intent)), C = P(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), S = P(() => {
      var fe;
      if (!_.value) return "";
      const se = a((fe = _.value.reference) == null ? void 0 : fe.node_type);
      return se ? `${se}/${_.value.filename}` : "";
    }), I = P(() => {
      var fe;
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
      return _.value.is_download_intent ? "download" : (fe = _.value.options) != null && fe.length ? "ambiguous" : "not-found";
    }), M = P(() => {
      var fe, U;
      if (!_.value) return;
      const se = l.modelChoices.get(_.value.filename);
      if (se)
        switch (se.action) {
          case "select":
            return (fe = se.selected_model) != null && fe.filename ? `→ ${se.selected_model.filename}` : "Selected";
          case "download":
            return "Download";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
          case "cancel_download":
            return "Cancelled";
        }
      return _.value.is_download_intent ? "Pending Download" : (U = _.value.options) != null && U.length ? `${_.value.options.length} matches` : "Not Found";
    });
    function T(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function D() {
      var se;
      for (let fe = c.value + 1; fe < l.models.length; fe++) {
        const U = l.models[fe];
        if (!U.is_download_intent && !((se = l.modelChoices) != null && se.has(U.filename))) {
          T(fe);
          return;
        }
      }
    }
    function z() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => D()));
    }
    function G() {
      _.value && (r("skip", _.value.filename), Pt(() => D()));
    }
    function L(se) {
      _.value && (r("option-selected", _.value.filename, se), Pt(() => D()));
    }
    function q() {
      _.value && r("clear-choice", _.value.filename);
    }
    function ce() {
      _.value && (v.value = _.value.filename, u.value = !0);
    }
    function ne() {
      _.value && (f.value = _.value.download_source || "", p.value = _.value.target_path || S.value, d.value = !0);
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
    function j(se) {
      _.value && (Y(), Pt(() => D()));
    }
    function K() {
      !_.value || !f.value.trim() || (r("download-url", _.value.filename, f.value.trim(), p.value.trim() || void 0), we(), Pt(() => D()));
    }
    function ke(se) {
      if (!se) return "Unknown";
      const fe = se / (1024 * 1024 * 1024);
      return fe >= 1 ? `${fe.toFixed(2)} GB` : `${(se / (1024 * 1024)).toFixed(1)} MB`;
    }
    return (se, fe) => {
      var U, me, Pe;
      return n(), i("div", ey, [
        s("div", ty, [
          s("div", sy, [
            s("h3", oy, m(x.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            s("p", ny, m(x.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          s("span", ay, m(C.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), R(oc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: fe[0] || (fe[0] = (ye) => T(c.value - 1)),
          onNext: fe[1] || (fe[1] = (ye) => T(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ly, [
          b(Zh, {
            filename: _.value.filename,
            "node-type": ((U = _.value.reference) == null ? void 0 : U.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: I.value,
            "status-label": M.value,
            onMarkOptional: z,
            onSkip: G,
            onDownloadUrl: ne,
            onSearch: ce,
            onOptionSelected: L,
            onClearChoice: q
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", iy, [...fe[5] || (fe[5] = [
          s("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(Kt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: yt(Y, ["self"])
          }, [
            s("div", ry, [
              s("div", { class: "model-modal-header" }, [
                fe[6] || (fe[6] = s("h4", null, "Search Workspace Models", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              s("div", cy, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ye) => v.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: ee
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", uy, [
                  (n(!0), i(B, null, ge(w.value, (ye) => (n(), i("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (Z) => j()
                  }, [
                    s("div", my, [
                      s("code", fy, m(ye.filename), 1)
                    ]),
                    s("div", vy, [
                      s("span", py, m(ye.category), 1),
                      s("span", gy, m(ke(ye.size)), 1)
                    ]),
                    ye.relative_path ? (n(), i("div", hy, m(ye.relative_path), 1)) : y("", !0)
                  ], 8, dy))), 128))
                ])) : v.value && !g.value ? (n(), i("div", yy, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", wy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), R(Kt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: yt(we, ["self"])
          }, [
            s("div", _y, [
              s("div", { class: "model-modal-header" }, [
                fe[7] || (fe[7] = s("h4", null, "Enter Download URL", -1)),
                s("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              s("div", ky, [
                s("div", by, [
                  fe[8] || (fe[8] = s("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": fe[3] || (fe[3] = (ye) => f.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                s("div", $y, [
                  fe[9] || (fe[9] = s("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": fe[4] || (fe[4] = (ye) => p.value = ye),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                s("div", Cy, [
                  b(De, {
                    variant: "secondary",
                    onClick: we
                  }, {
                    default: h(() => [...fe[10] || (fe[10] = [
                      $("Cancel", -1)
                    ])]),
                    _: 1
                  }),
                  b(De, {
                    variant: "primary",
                    disabled: !f.value.trim() || !p.value.trim(),
                    onClick: K
                  }, {
                    default: h(() => [...fe[11] || (fe[11] = [
                      $(" Queue Download ", -1)
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
}), Sy = /* @__PURE__ */ xe(xy, [["__scopeId", "data-v-5c700bfa"]]), Iy = { class: "applying-step" }, Ey = {
  key: 0,
  class: "phase-content"
}, Ty = {
  key: 1,
  class: "phase-content"
}, My = { class: "phase-description" }, Py = { class: "overall-progress" }, Ry = { class: "progress-bar" }, Ly = { class: "progress-label" }, Dy = { class: "install-list" }, Ny = { class: "install-icon" }, Uy = { key: 0 }, Oy = {
  key: 1,
  class: "spinner"
}, Ay = { key: 2 }, zy = { key: 3 }, Fy = {
  key: 0,
  class: "install-error"
}, Vy = {
  key: 2,
  class: "phase-content"
}, By = { class: "phase-header" }, Wy = { class: "phase-title" }, Gy = { class: "completion-summary" }, jy = {
  key: 0,
  class: "summary-item success"
}, Hy = { class: "summary-text" }, qy = {
  key: 1,
  class: "summary-item error"
}, Ky = { class: "summary-text" }, Jy = {
  key: 2,
  class: "failed-list"
}, Qy = { class: "failed-node-id" }, Yy = { class: "failed-error" }, Xy = {
  key: 4,
  class: "summary-item success"
}, Zy = {
  key: 5,
  class: "restart-prompt"
}, e1 = {
  key: 3,
  class: "phase-content error"
}, t1 = { class: "error-message" }, s1 = /* @__PURE__ */ be({
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
    }), a = P(() => {
      var u;
      return ((u = t.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = P(() => a.value.length > 0);
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
      return n(), i("div", Iy, [
        e.progress.phase === "resolving" ? (n(), i("div", Ey, [...d[2] || (d[2] = [
          s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          s("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Ty, [
          d[3] || (d[3] = s("div", { class: "phase-header" }, [
            s("div", { class: "loading-spinner" }),
            s("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          s("p", My, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          s("div", Py, [
            s("div", Ry, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            s("span", Ly, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          s("div", Dy, [
            (n(!0), i(B, null, ge(e.progress.nodesToInstall, (g, _) => (n(), i("div", {
              key: g,
              class: Be(["install-item", r(g, _)])
            }, [
              s("span", Ny, [
                r(g, _) === "pending" ? (n(), i("span", Uy, "○")) : r(g, _) === "installing" ? (n(), i("span", Oy, "◌")) : r(g, _) === "complete" ? (n(), i("span", Ay, "✓")) : r(g, _) === "failed" ? (n(), i("span", zy, "✗")) : y("", !0)
              ]),
              s("code", null, m(g), 1),
              c(g) ? (n(), i("span", Fy, m(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Vy, [
          s("div", By, [
            s("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            s("h3", Wy, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          s("div", Gy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", jy, [
              d[4] || (d[4] = s("span", { class: "summary-icon" }, "✓", -1)),
              s("span", Hy, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", qy, [
              d[5] || (d[5] = s("span", { class: "summary-icon" }, "✗", -1)),
              s("span", Ky, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Jy, [
              (n(!0), i(B, null, ge(a.value, (g) => (n(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                s("code", Qy, m(g.node_id), 1),
                s("span", Yy, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Xy, [...d[6] || (d[6] = [
              s("span", { class: "summary-icon" }, "✓", -1),
              s("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = s("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Zy, [
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
        ])) : e.progress.phase === "error" ? (n(), i("div", e1, [
          d[9] || (d[9] = s("div", { class: "phase-header" }, [
            s("span", { class: "phase-icon error" }, "✗"),
            s("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          s("p", t1, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), o1 = /* @__PURE__ */ xe(s1, [["__scopeId", "data-v-5efaae58"]]), n1 = {
  key: 0,
  class: "loading-state"
}, a1 = {
  key: 1,
  class: "wizard-content"
}, l1 = {
  key: 0,
  class: "step-content"
}, i1 = { class: "analysis-summary" }, r1 = { class: "analysis-header" }, c1 = { class: "summary-description" }, u1 = { class: "stats-grid" }, d1 = { class: "stat-card" }, m1 = { class: "stat-items" }, f1 = {
  key: 0,
  class: "stat-item success"
}, v1 = { class: "stat-count" }, p1 = {
  key: 1,
  class: "stat-item info"
}, g1 = { class: "stat-count" }, h1 = {
  key: 2,
  class: "stat-item warning"
}, y1 = { class: "stat-count" }, w1 = {
  key: 3,
  class: "stat-item warning"
}, _1 = { class: "stat-count" }, k1 = {
  key: 4,
  class: "stat-item warning"
}, b1 = { class: "stat-count" }, $1 = {
  key: 5,
  class: "stat-item error"
}, C1 = { class: "stat-count" }, x1 = { class: "stat-card" }, S1 = { class: "stat-items" }, I1 = { class: "stat-item success" }, E1 = { class: "stat-count" }, T1 = {
  key: 0,
  class: "stat-item info"
}, M1 = { class: "stat-count" }, P1 = {
  key: 1,
  class: "stat-item warning"
}, R1 = { class: "stat-count" }, L1 = {
  key: 2,
  class: "stat-item warning"
}, D1 = { class: "stat-count" }, N1 = {
  key: 3,
  class: "stat-item error"
}, U1 = { class: "stat-count" }, O1 = {
  key: 0,
  class: "status-message warning"
}, A1 = { class: "status-text" }, z1 = {
  key: 1,
  class: "status-message warning"
}, F1 = { class: "status-text" }, V1 = {
  key: 2,
  class: "status-message info"
}, B1 = { class: "status-text" }, W1 = {
  key: 3,
  class: "status-message info"
}, G1 = { class: "status-text" }, j1 = {
  key: 4,
  class: "status-message info"
}, H1 = { class: "status-text" }, q1 = {
  key: 5,
  class: "status-message warning"
}, K1 = { class: "status-text" }, J1 = {
  key: 6,
  class: "status-message success"
}, Q1 = {
  key: 7,
  class: "category-mismatch-section"
}, Y1 = { class: "mismatch-list" }, X1 = { class: "mismatch-path" }, Z1 = { class: "mismatch-target" }, ew = {
  key: 8,
  class: "category-mismatch-section"
}, tw = { class: "mismatch-list" }, sw = { class: "mismatch-path" }, ow = { class: "status-text" }, nw = {
  key: 1,
  class: "step-content node-step-content"
}, aw = {
  key: 0,
  class: "community-node-section"
}, lw = { class: "community-node-header" }, iw = { class: "community-node-title" }, rw = { class: "community-node-list" }, cw = { class: "community-node-info" }, uw = { class: "community-node-heading" }, dw = { class: "item-name" }, mw = { class: "community-node-package" }, fw = { class: "community-node-meta" }, vw = { class: "community-node-guidance" }, pw = { key: 0 }, gw = { class: "community-choice-status" }, hw = { class: "community-node-actions" }, yw = {
  key: 3,
  class: "step-content"
}, ww = { class: "review-summary" }, _w = { class: "review-stats" }, kw = { class: "review-stat" }, bw = { class: "stat-value" }, $w = { class: "review-stat" }, Cw = { class: "stat-value" }, xw = { class: "review-stat" }, Sw = { class: "stat-value" }, Iw = { class: "review-stat" }, Ew = { class: "stat-value" }, Tw = {
  key: 0,
  class: "review-section"
}, Mw = { class: "section-title" }, Pw = { class: "review-items" }, Rw = { class: "item-name" }, Lw = { class: "item-choice" }, Dw = {
  key: 0,
  class: "choice-badge install"
}, Nw = {
  key: 1,
  class: "choice-badge skip"
}, Uw = {
  key: 1,
  class: "review-section"
}, Ow = { class: "section-title" }, Aw = { class: "review-items" }, zw = { class: "item-name" }, Fw = { class: "item-choice" }, Vw = {
  key: 0,
  class: "choice-badge install"
}, Bw = {
  key: 1,
  class: "choice-badge optional"
}, Ww = {
  key: 2,
  class: "choice-badge skip"
}, Gw = {
  key: 2,
  class: "review-section"
}, jw = { class: "section-title" }, Hw = { class: "review-items" }, qw = { class: "item-name" }, Kw = { class: "item-choice" }, Jw = {
  key: 0,
  class: "choice-badge install"
}, Qw = {
  key: 1,
  class: "choice-badge optional"
}, Yw = {
  key: 2,
  class: "choice-badge skip"
}, Xw = {
  key: 1,
  class: "choice-badge pending"
}, Zw = {
  key: 3,
  class: "review-section"
}, e0 = { class: "section-title" }, t0 = { class: "review-items download-details" }, s0 = { class: "download-info" }, o0 = { class: "item-name" }, n0 = { class: "download-meta" }, a0 = { class: "download-path" }, l0 = ["title"], i0 = {
  key: 4,
  class: "review-section"
}, r0 = { class: "section-title" }, c0 = { class: "review-items" }, u0 = { class: "item-name" }, d0 = { class: "item-choice" }, m0 = {
  key: 0,
  class: "choice-badge install"
}, f0 = {
  key: 1,
  class: "choice-badge download"
}, v0 = {
  key: 2,
  class: "choice-badge optional"
}, p0 = {
  key: 3,
  class: "choice-badge skip"
}, g0 = {
  key: 4,
  class: "choice-badge skip"
}, h0 = {
  key: 1,
  class: "choice-badge download"
}, y0 = {
  key: 2,
  class: "choice-badge pending"
}, w0 = {
  key: 5,
  class: "no-choices"
}, _0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: t }) {
    const o = e, a = t, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = sc(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), x = k([]), C = k(!1), S = k(!1), I = k(null), M = k("analysis"), T = k([]), D = k(/* @__PURE__ */ new Map()), z = k(/* @__PURE__ */ new Map()), G = k(/* @__PURE__ */ new Set()), L = P(() => {
      const ie = [
        { id: "analysis", label: "Analysis" }
      ];
      return (ee.value || ke.value || se.value) && ie.push({ id: "nodes", label: "Nodes" }), j.value && ie.push({ id: "models", label: "Models" }), ie.push({ id: "review", label: "Review" }), M.value === "applying" && ie.push({ id: "applying", label: "Applying" }), ie;
    }), q = P(() => _.value ? _.value.stats.needs_user_input : !1), ce = P(() => _.value ? _.value.nodes.version_gated || [] : []), ne = P(() => _.value ? _.value.nodes.uninstallable || [] : []), Y = P(() => ne.value.filter((ie) => {
      var F;
      return !!((F = ie.package) != null && F.package_id);
    })), we = P(() => ce.value.length > 0), ee = P(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), j = P(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), K = P(() => _.value ? _.value.stats.download_intents > 0 : !1), ke = P(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), se = P(() => Y.value.length > 0), fe = P(() => _.value ? _.value.nodes.resolved.length : 0), U = P(() => _.value ? _.value.models.resolved.filter((ie) => ie.has_category_mismatch) : []), me = P(() => U.value.length > 0), Pe = P(() => ee.value || ke.value || se.value ? "nodes" : j.value ? "models" : "review"), ye = P(() => {
      if (!_.value) return [];
      const ie = _.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Set();
      return ie.filter((de) => F.has(de.package.package_id) ? !1 : (F.add(de.package.package_id), !0));
    }), Z = P(() => {
      if (!_.value) return [];
      const ie = _.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Map();
      for (const de of ie) {
        const Ge = F.get(de.package.package_id);
        Ge ? Ge.node_types_count++ : F.set(de.package.package_id, {
          package_id: de.package.package_id,
          title: de.package.title,
          node_types_count: 1
        });
      }
      return Array.from(F.values());
    }), Q = P(() => ye.value.filter((ie) => !G.value.has(ie.package.package_id))), $e = P(() => _.value ? _.value.models.resolved.filter(
      (ie) => ie.match_type === "download_intent" || ie.match_type === "property_download_intent"
    ).map((ie) => ({
      filename: ie.reference.widget_value,
      reference: ie.reference,
      is_download_intent: !0,
      resolved_model: ie.model,
      download_source: ie.download_source,
      target_path: ie.target_path
    })) : []), te = P(() => {
      if (!_.value) return [];
      const ie = _.value.nodes.unresolved.map((de) => ({
        node_type: de.reference.node_type,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.nodes.ambiguous.map((de) => ({
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
      return [...ie, ...F];
    }), oe = P(() => {
      if (!_.value) return [];
      const ie = _.value.models.unresolved.map((de) => ({
        filename: de.reference.widget_value,
        reference: de.reference,
        reason: de.reason,
        is_unresolved: !0,
        options: void 0
      })), F = _.value.models.ambiguous.map((de) => ({
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
      return [...ie, ...F];
    }), Re = P(() => {
      const ie = oe.value, F = $e.value.map((de) => ({
        filename: de.filename,
        reference: de.reference,
        is_download_intent: !0,
        resolved_model: de.resolved_model,
        download_source: de.download_source,
        target_path: de.target_path,
        options: void 0
      }));
      return [...ie, ...F];
    }), ve = P(() => $e.value.filter((ie) => {
      const F = z.value.get(ie.filename);
      return F ? F.action === "download" : !0;
    }).map((ie) => ({
      filename: ie.filename,
      url: ie.download_source,
      target_path: ie.target_path
    })));
    function le(ie, F = 50) {
      return ie.length <= F ? ie : ie.slice(0, F - 3) + "...";
    }
    const E = P(() => {
      let ie = Q.value.length;
      for (const F of D.value.values())
        F.action === "install" && ie++;
      for (const F of z.value.values())
        F.action === "select" && ie++;
      return ie;
    }), A = P(() => {
      let ie = 0;
      for (const F of z.value.values())
        F.action === "download" && ie++;
      for (const F of $e.value)
        z.value.get(F.filename) || ie++;
      return ie;
    }), re = P(() => {
      let ie = 0;
      for (const F of D.value.values())
        F.action === "optional" && ie++;
      for (const F of z.value.values())
        F.action === "optional" && ie++;
      return ie;
    }), Ee = P(() => {
      let ie = G.value.size;
      for (const F of D.value.values())
        F.action === "skip" && ie++;
      for (const F of z.value.values())
        F.action === "skip" && ie++;
      for (const F of te.value)
        D.value.has(F.node_type) || ie++;
      for (const F of oe.value)
        z.value.has(F.filename) || ie++;
      return ie;
    }), Ce = P(() => {
      const ie = {};
      if (ie.analysis = { resolved: 1, total: 1 }, ee.value || se.value) {
        const F = te.value.length, de = Y.value.length, Ge = te.value.filter(
          (St) => D.value.has(St.node_type)
        ).length, dt = Y.value.filter(
          (St) => D.value.has(St.reference.node_type)
        ).length, xt = F + de, it = Ge + dt;
        ie.nodes = { resolved: it, total: xt };
      }
      if (j.value) {
        const F = Re.value.length, de = Re.value.filter(
          (Ge) => z.value.has(Ge.filename) || Ge.is_download_intent
        ).length;
        ie.models = { resolved: de, total: F };
      }
      if (ie.review = { resolved: 1, total: 1 }, M.value === "applying") {
        const F = d.totalFiles || 1, de = d.completedFiles.length;
        ie.applying = { resolved: de, total: F };
      }
      return ie;
    });
    function Se(ie) {
      M.value = ie;
    }
    function ze() {
      const ie = L.value.findIndex((F) => F.id === M.value);
      ie > 0 && (M.value = L.value[ie - 1].id);
    }
    function Fe() {
      const ie = L.value.findIndex((F) => F.id === M.value);
      ie < L.value.length - 1 && (M.value = L.value[ie + 1].id);
    }
    function Ne() {
      for (const ie of Y.value) {
        const F = ie.reference.node_type;
        D.value.has(F) || ue(ie, "registry");
      }
    }
    function Te(ie) {
      switch (ie) {
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
    function Je(ie) {
      return ie.filter((F) => F.installed && F.tracked).filter((F) => F.name !== "comfygit-manager").map((F) => ({
        package_id: F.registry_id || F.name,
        source: F.source
      })).filter((F, de, Ge) => Ge.findIndex((dt) => dt.package_id === F.package_id) === de).sort((F, de) => {
        const Ge = Te(F.source) - Te(de.source);
        return Ge !== 0 ? Ge : F.package_id.localeCompare(de.package_id);
      });
    }
    async function We() {
      C.value = !0, I.value = null;
      try {
        const [ie, F] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = ie, x.value = Je(F.nodes), Ne();
      } catch (ie) {
        I.value = ie instanceof Error ? ie.message : "Failed to analyze workflow";
      } finally {
        C.value = !1;
      }
    }
    function pe() {
      T.value.includes("analysis") || T.value.push("analysis"), ee.value || ke.value || se.value ? M.value = "nodes" : j.value ? M.value = "models" : M.value = "review";
    }
    function J(ie) {
      D.value.set(ie, { action: "optional" });
    }
    function qe(ie) {
      D.value.set(ie, { action: "skip" });
    }
    function Ie(ie, F) {
      var Ge;
      const de = te.value.find((dt) => dt.node_type === ie);
      (Ge = de == null ? void 0 : de.options) != null && Ge[F] && D.value.set(ie, {
        action: "install",
        package_id: de.options[F].package_id
      });
    }
    function Xe(ie, F) {
      D.value.set(ie, {
        action: "install",
        package_id: F
      });
    }
    function Ve(ie) {
      D.value.delete(ie);
    }
    function Ue(ie) {
      return D.value.get(ie);
    }
    function W(ie) {
      const F = Ue(ie);
      return F ? F.action === "optional" ? "Marked optional" : F.action === "skip" ? "Skipped" : F.action === "install" ? F.install_source === "git" ? "Will install via Git" : "Will install from registry" : "Skipped" : "Skipped";
    }
    function ue(ie, F) {
      var dt;
      const de = (dt = ie.package) == null ? void 0 : dt.package_id;
      if (!de) return;
      const Ge = {
        action: "install",
        package_id: de,
        version: ie.package.latest_version || null,
        install_source: F
      };
      F === "git" && ie.package.repository && (Ge.repository = ie.package.repository), D.value.set(ie.reference.node_type, Ge);
    }
    function he(ie) {
      D.value.set(ie, { action: "optional" });
    }
    function Qe(ie) {
      D.value.set(ie, { action: "skip" });
    }
    function N(ie) {
      G.value.has(ie) ? G.value.delete(ie) : G.value.add(ie);
    }
    function O(ie) {
      z.value.set(ie, { action: "optional" });
    }
    function X(ie) {
      z.value.set(ie, { action: "skip" });
    }
    function Oe(ie, F) {
      var Ge;
      const de = oe.value.find((dt) => dt.filename === ie);
      (Ge = de == null ? void 0 : de.options) != null && Ge[F] && z.value.set(ie, {
        action: "select",
        selected_model: de.options[F].model
      });
    }
    function Ae(ie, F, de) {
      z.value.set(ie, {
        action: "download",
        url: F,
        target_path: de
      });
    }
    function Le(ie) {
      z.value.delete(ie);
    }
    async function je(ie) {
      try {
        await p(ie);
      } catch (F) {
        I.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function nt() {
      var ie;
      S.value = !0, I.value = null, v(), d.phase = "resolving", M.value = "applying";
      try {
        const F = await r(o.workflowName, D.value, z.value, G.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const de = Y.value.map((it) => {
          const St = Ue(it.reference.node_type);
          if ((St == null ? void 0 : St.action) !== "install" || St.install_source !== "git")
            return null;
          const ts = St.repository || it.package.repository, xs = St.package_id || it.package.package_id;
          return !ts || !xs ? null : {
            id: xs,
            repository: ts,
            selectedVersion: St.version || it.package.latest_version || "latest"
          };
        }).filter((it) => !!it), Ge = new Set(de.map((it) => it.id)), dt = [
          ...F.nodes_to_install || [],
          ...Q.value.map((it) => it.package.package_id)
        ];
        d.nodesToInstall = [...new Set(dt)].filter((it) => !Ge.has(it)), d.nodesToInstall.length > 0 && await c(o.workflowName);
        for (const it of de)
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
        const xt = d.installError || ((ie = d.nodeInstallProgress) == null ? void 0 : ie.completedNodes.some((it) => !it.success));
        !d.needsRestart && !xt && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (F) {
        I.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = I.value, d.phase = "error";
      } finally {
        S.value = !1;
      }
    }
    function kt() {
      a("refresh"), a("restart"), a("close");
    }
    async function Et() {
      var F;
      const ie = ((F = d.nodeInstallProgress) == null ? void 0 : F.completedNodes.filter((de) => !de.success).map((de) => de.node_id)) || [];
      if (ie.length !== 0) {
        d.phase = "installing", d.nodeInstallProgress = {
          completedNodes: [],
          totalNodes: ie.length
        }, d.nodesToInstall = ie, d.nodesInstalled = [], d.installError = void 0;
        try {
          await c(o.workflowName), d.phase = "complete";
        } catch (de) {
          d.error = de instanceof Error ? de.message : "Retry failed", d.phase = "error";
        }
      }
    }
    return at(We), (ie, F) => (n(), R($t, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: C.value,
      error: I.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (de) => a("close"))
    }, {
      body: h(() => [
        C.value && !_.value ? (n(), i("div", n1, [...F[2] || (F[2] = [
          s("div", { class: "loading-spinner" }, null, -1),
          s("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", a1, [
          b(sg, {
            steps: L.value,
            "current-step": M.value,
            "completed-steps": T.value,
            "step-stats": Ce.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (n(), i("div", l1, [
            s("div", i1, [
              s("div", r1, [
                F[3] || (F[3] = s("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                s("p", c1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              s("div", u1, [
                s("div", d1, [
                  F[16] || (F[16] = s("div", { class: "stat-header" }, "Nodes", -1)),
                  s("div", m1, [
                    fe.value > 0 ? (n(), i("div", f1, [
                      F[4] || (F[4] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", v1, m(fe.value), 1),
                      F[5] || (F[5] = s("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", p1, [
                      F[6] || (F[6] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", g1, m(_.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = s("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", h1, [
                      F[8] || (F[8] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", y1, m(_.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ce.value.length > 0 ? (n(), i("div", w1, [
                      F[10] || (F[10] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", _1, m(ce.value.length), 1),
                      F[11] || (F[11] = s("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    ne.value.length > 0 ? (n(), i("div", k1, [
                      F[12] || (F[12] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", b1, m(ne.value.length), 1),
                      F[13] || (F[13] = s("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", $1, [
                      F[14] || (F[14] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", C1, m(_.value.nodes.unresolved.length), 1),
                      F[15] || (F[15] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                s("div", x1, [
                  F[27] || (F[27] = s("div", { class: "stat-header" }, "Models", -1)),
                  s("div", S1, [
                    s("div", I1, [
                      F[17] || (F[17] = s("span", { class: "stat-icon" }, "✓", -1)),
                      s("span", E1, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      F[18] || (F[18] = s("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", T1, [
                      F[19] || (F[19] = s("span", { class: "stat-icon" }, "⬇", -1)),
                      s("span", M1, m(_.value.stats.download_intents), 1),
                      F[20] || (F[20] = s("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    me.value ? (n(), i("div", P1, [
                      F[21] || (F[21] = s("span", { class: "stat-icon" }, "⚠", -1)),
                      s("span", R1, m(U.value.length), 1),
                      F[22] || (F[22] = s("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", L1, [
                      F[23] || (F[23] = s("span", { class: "stat-icon" }, "?", -1)),
                      s("span", D1, m(_.value.models.ambiguous.length), 1),
                      F[24] || (F[24] = s("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", N1, [
                      F[25] || (F[25] = s("span", { class: "stat-icon" }, "✗", -1)),
                      s("span", U1, m(_.value.models.unresolved.length), 1),
                      F[26] || (F[26] = s("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              q.value ? (n(), i("div", O1, [
                F[28] || (F[28] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", A1, m(te.value.length + oe.value.length) + " items need your input", 1)
              ])) : we.value ? (n(), i("div", z1, [
                F[29] || (F[29] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", F1, m(ce.value.length) + " node type" + m(ce.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ne.value.length > 0 ? (n(), i("div", V1, [
                F[30] || (F[30] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", B1, m(ne.value.length) + " community-mapped node type" + m(ne.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ke.value ? (n(), i("div", W1, [
                F[31] || (F[31] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", G1, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(K.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : K.value ? (n(), i("div", j1, [
                F[32] || (F[32] = s("span", { class: "status-icon" }, "⬇", -1)),
                s("span", H1, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (n(), i("div", q1, [
                F[33] || (F[33] = s("span", { class: "status-icon" }, "⚠", -1)),
                s("span", K1, m(U.value.length) + " model" + m(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", J1, [...F[34] || (F[34] = [
                s("span", { class: "status-icon" }, "✓", -1),
                s("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (n(), i("div", Q1, [
                F[37] || (F[37] = s("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                s("div", Y1, [
                  (n(!0), i(B, null, ge(U.value, (de) => {
                    var Ge, dt;
                    return n(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      s("code", X1, m(de.actual_category) + "/" + m((Ge = de.model) == null ? void 0 : Ge.filename), 1),
                      F[36] || (F[36] = s("span", { class: "mismatch-arrow" }, "→", -1)),
                      s("code", Z1, m((dt = de.expected_categories) == null ? void 0 : dt[0]) + "/", 1),
                      de.file_path ? (n(), R(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (xt) => je(de.file_path)
                      }, {
                        default: h(() => [...F[35] || (F[35] = [
                          $(" Open File Location ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              we.value ? (n(), i("div", ew, [
                F[38] || (F[38] = s("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                s("div", tw, [
                  (n(!0), i(B, null, ge(ce.value, (de) => {
                    var Ge;
                    return n(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      s("code", sw, m(de.reference.node_type), 1),
                      s("span", ow, m(de.guidance || ((Ge = _.value.node_guidance) == null ? void 0 : Ge[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "nodes" ? (n(), i("div", nw, [
            b(Lh, {
              nodes: te.value,
              "node-choices": D.value,
              "auto-resolved-packages": Z.value,
              "skipped-packages": G.value,
              "installed-node-packs": x.value,
              onMarkOptional: J,
              onSkip: qe,
              onOptionSelected: Ie,
              onManualEntry: Xe,
              onClearChoice: Ve,
              onPackageSkip: N
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (n(), i("div", aw, [
              s("div", lw, [
                s("h4", iw, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                F[39] || (F[39] = s("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              s("div", rw, [
                (n(!0), i(B, null, ge(Y.value, (de) => (n(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  s("div", cw, [
                    s("div", uw, [
                      s("code", dw, m(de.reference.node_type), 1),
                      s("span", mw, m(de.package.title || de.package.package_id), 1)
                    ]),
                    s("div", fw, m(de.package.package_id), 1),
                    s("div", vw, [
                      F[40] || (F[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (n(), i("span", pw, m(de.guidance), 1)) : y("", !0)
                    ]),
                    s("div", gw, m(W(de.reference.node_type)), 1)
                  ]),
                  s("div", hw, [
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      disabled: !de.package.package_id,
                      onClick: (Ge) => ue(de, "registry")
                    }, {
                      default: h(() => [...F[41] || (F[41] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"]),
                    de.package.repository ? (n(), R(De, {
                      key: 0,
                      size: "sm",
                      variant: "ghost",
                      disabled: !de.package.package_id,
                      onClick: (Ge) => ue(de, "git")
                    }, {
                      default: h(() => [...F[42] || (F[42] = [
                        $(" Install via Git ", -1)
                      ])]),
                      _: 1
                    }, 8, ["disabled", "onClick"])) : y("", !0),
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => he(de.reference.node_type)
                    }, {
                      default: h(() => [...F[43] || (F[43] = [
                        $(" Optional ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(De, {
                      size: "sm",
                      variant: "secondary",
                      onClick: (Ge) => Qe(de.reference.node_type)
                    }, {
                      default: h(() => [...F[44] || (F[44] = [
                        $(" Skip ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ]))), 128))
              ])
            ])) : y("", !0)
          ])) : y("", !0),
          M.value === "models" ? (n(), R(Sy, {
            key: 2,
            models: Re.value,
            "model-choices": z.value,
            onMarkOptional: O,
            onSkip: X,
            onOptionSelected: Oe,
            onDownloadUrl: Ae,
            onClearChoice: Le
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          M.value === "review" ? (n(), i("div", yw, [
            s("div", ww, [
              F[50] || (F[50] = s("div", { class: "review-header" }, [
                s("h3", { class: "summary-title" }, "Review Your Choices"),
                s("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              s("div", _w, [
                s("div", kw, [
                  s("span", bw, m(E.value), 1),
                  F[45] || (F[45] = s("span", { class: "stat-label" }, "to install", -1))
                ]),
                s("div", $w, [
                  s("span", Cw, m(A.value), 1),
                  F[46] || (F[46] = s("span", { class: "stat-label" }, "to download", -1))
                ]),
                s("div", xw, [
                  s("span", Sw, m(re.value), 1),
                  F[47] || (F[47] = s("span", { class: "stat-label" }, "optional", -1))
                ]),
                s("div", Iw, [
                  s("span", Ew, m(Ee.value), 1),
                  F[48] || (F[48] = s("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              Z.value.length > 0 ? (n(), i("div", Tw, [
                s("h4", Mw, "Node Packages (" + m(Z.value.length) + ")", 1),
                s("div", Pw, [
                  (n(!0), i(B, null, ge(Z.value, (de) => (n(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    s("code", Rw, m(de.package_id), 1),
                    s("div", Lw, [
                      G.value.has(de.package_id) ? (n(), i("span", Nw, "Skipped")) : (n(), i("span", Dw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Y.value.length > 0 ? (n(), i("div", Uw, [
                s("h4", Ow, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                s("div", Aw, [
                  (n(!0), i(B, null, ge(Y.value, (de) => {
                    var Ge, dt, xt;
                    return n(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      s("code", zw, m(de.reference.node_type), 1),
                      s("div", Fw, [
                        ((Ge = Ue(de.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", Vw, m(((dt = Ue(de.reference.node_type)) == null ? void 0 : dt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((xt = Ue(de.reference.node_type)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", Bw, " Optional ")) : (n(), i("span", Ww, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length > 0 ? (n(), i("div", Gw, [
                s("h4", jw, "Node Choices (" + m(te.value.length) + ")", 1),
                s("div", Hw, [
                  (n(!0), i(B, null, ge(te.value, (de) => {
                    var Ge, dt, xt, it;
                    return n(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      s("code", qw, m(de.node_type), 1),
                      s("div", Kw, [
                        D.value.has(de.node_type) ? (n(), i(B, { key: 0 }, [
                          ((Ge = D.value.get(de.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", Jw, m((dt = D.value.get(de.node_type)) == null ? void 0 : dt.package_id), 1)) : ((xt = D.value.get(de.node_type)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", Qw, " Optional ")) : ((it = D.value.get(de.node_type)) == null ? void 0 : it.action) === "skip" ? (n(), i("span", Yw, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Xw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (n(), i("div", Zw, [
                s("h4", e0, "Models to Download (" + m(ve.value.length) + ")", 1),
                s("div", t0, [
                  (n(!0), i(B, null, ge(ve.value, (de) => (n(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    s("div", s0, [
                      s("code", o0, m(de.filename), 1),
                      s("div", n0, [
                        s("span", a0, "→ " + m(de.target_path), 1),
                        de.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, m(le(de.url)), 9, l0)) : y("", !0)
                      ])
                    ]),
                    F[49] || (F[49] = s("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (n(), i("div", i0, [
                s("h4", r0, "Models (" + m(Re.value.length) + ")", 1),
                s("div", c0, [
                  (n(!0), i(B, null, ge(Re.value, (de) => {
                    var Ge, dt, xt, it, St, ts, xs;
                    return n(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      s("code", u0, m(de.filename), 1),
                      s("div", d0, [
                        z.value.has(de.filename) ? (n(), i(B, { key: 0 }, [
                          ((Ge = z.value.get(de.filename)) == null ? void 0 : Ge.action) === "select" ? (n(), i("span", m0, m((xt = (dt = z.value.get(de.filename)) == null ? void 0 : dt.selected_model) == null ? void 0 : xt.filename), 1)) : ((it = z.value.get(de.filename)) == null ? void 0 : it.action) === "download" ? (n(), i("span", f0, " Download ")) : ((St = z.value.get(de.filename)) == null ? void 0 : St.action) === "optional" ? (n(), i("span", v0, " Optional ")) : ((ts = z.value.get(de.filename)) == null ? void 0 : ts.action) === "skip" ? (n(), i("span", p0, " Skip ")) : ((xs = z.value.get(de.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (n(), i("span", g0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (n(), i("span", h0, " Pending Download ")) : (n(), i("span", y0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ye.value.length === 0 && Y.value.length === 0 && te.value.length === 0 && Re.value.length === 0 ? (n(), i("div", w0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "applying" ? (n(), R(o1, {
            key: 4,
            progress: st(d),
            onRestart: kt,
            onRetryFailed: Et
          }, null, 8, ["progress"])) : y("", !0)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        M.value !== "analysis" && M.value !== "applying" ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          disabled: S.value,
          onClick: ze
        }, {
          default: h(() => [...F[51] || (F[51] = [
            $(" ← Back ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        F[54] || (F[54] = s("div", { class: "footer-spacer" }, null, -1)),
        M.value !== "applying" || st(d).phase === "complete" || st(d).phase === "error" ? (n(), R(De, {
          key: 1,
          variant: "secondary",
          onClick: F[0] || (F[0] = (de) => a("close"))
        }, {
          default: h(() => [
            $(m(st(d).phase === "complete" ? "Close" : "Cancel"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "analysis" ? (n(), R(De, {
          key: 2,
          variant: "primary",
          disabled: C.value,
          onClick: pe
        }, {
          default: h(() => [
            $(m(Pe.value === "review" ? "Continue to Review →" : "Continue"), 1)
          ]),
          _: 1
        }, 8, ["disabled"])) : y("", !0),
        M.value === "nodes" ? (n(), R(De, {
          key: 3,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [
            $(m(j.value ? "Continue to Models →" : "Continue to Review →"), 1)
          ]),
          _: 1
        })) : y("", !0),
        M.value === "models" ? (n(), R(De, {
          key: 4,
          variant: "primary",
          onClick: Fe
        }, {
          default: h(() => [...F[52] || (F[52] = [
            $(" Continue to Review → ", -1)
          ])]),
          _: 1
        })) : y("", !0),
        M.value === "review" ? (n(), R(De, {
          key: 5,
          variant: "primary",
          disabled: S.value,
          loading: S.value,
          onClick: nt
        }, {
          default: h(() => [...F[53] || (F[53] = [
            $(" Apply Resolution ", -1)
          ])]),
          _: 1
        }, 8, ["disabled", "loading"])) : y("", !0)
      ]),
      _: 1
    }, 8, ["title", "loading", "error"]));
  }
}), k0 = /* @__PURE__ */ xe(_0, [["__scopeId", "data-v-49848358"]]), b0 = { class: "search-input-wrapper" }, $0 = ["value", "placeholder"], C0 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(null);
    let r;
    function c(d) {
      const v = d.target.value;
      o.debounce > 0 ? (clearTimeout(r), r = window.setTimeout(() => {
        a("update:modelValue", v);
      }, o.debounce)) : a("update:modelValue", v);
    }
    function u() {
      var d;
      a("update:modelValue", ""), a("clear"), (d = l.value) == null || d.focus();
    }
    return at(() => {
      o.autoFocus && l.value && l.value.focus();
    }), (d, v) => (n(), i("div", b0, [
      s("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ds(u, ["escape"])
      }, null, 40, $0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), x0 = /* @__PURE__ */ xe(C0, [["__scopeId", "data-v-266f857a"]]), S0 = { class: "search-bar" }, I0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (t, o) => (n(), i("div", S0, [
      b(x0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => t.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => t.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ xe(I0, [["__scopeId", "data-v-3d51bbfd"]]), E0 = { class: "section-group" }, T0 = {
  key: 0,
  class: "section-content"
}, M0 = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", E0, [
      b(ns, {
        count: e.count,
        clickable: e.collapsible,
        expanded: l.value,
        onClick: r
      }, {
        default: h(() => [
          $(m(e.title), 1)
        ]),
        _: 1
      }, 8, ["count", "clickable", "expanded"]),
      !e.collapsible || l.value ? (n(), i("div", T0, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), It = /* @__PURE__ */ xe(M0, [["__scopeId", "data-v-c48e33ed"]]), P0 = { class: "item-header" }, R0 = {
  key: 0,
  class: "item-icon"
}, L0 = { class: "item-info" }, D0 = {
  key: 0,
  class: "item-title"
}, N0 = {
  key: 1,
  class: "item-subtitle"
}, U0 = {
  key: 0,
  class: "item-details"
}, O0 = {
  key: 1,
  class: "item-actions"
}, A0 = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = P(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      s("div", P0, [
        l.$slots.icon ? (n(), i("span", R0, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        s("div", L0, [
          l.$slots.title ? (n(), i("div", D0, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", N0, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", U0, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", O0, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Ft = /* @__PURE__ */ xe(A0, [["__scopeId", "data-v-cc435e0e"]]), z0 = { class: "loading-state" }, F0 = { class: "loading-message" }, V0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (t, o) => (n(), i("div", z0, [
      o[0] || (o[0] = s("div", { class: "spinner" }, null, -1)),
      s("p", F0, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ xe(V0, [["__scopeId", "data-v-ad8436c9"]]), B0 = { class: "error-state" }, W0 = { class: "error-message" }, G0 = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (t, o) => (n(), i("div", B0, [
      o[2] || (o[2] = s("span", { class: "error-icon" }, "⚠", -1)),
      s("p", W0, m(e.message), 1),
      e.retry ? (n(), R(Me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => t.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ xe(G0, [["__scopeId", "data-v-5397be48"]]), j0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = P(
      () => r.value.filter((U) => U.status === "broken")
    ), x = P(
      () => r.value.filter((U) => U.status === "new")
    ), C = P(
      () => r.value.filter((U) => U.status === "modified")
    ), S = P(
      () => r.value.filter((U) => U.status === "synced")
    ), I = P(() => {
      if (!d.value.trim()) return r.value;
      const U = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(U));
    }), M = P(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), T = P(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = P(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = P(
      () => S.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), G = P(
      () => f.value ? z.value : z.value.slice(0, 5)
    );
    async function L(U = !1) {
      c.value = !0, u.value = null;
      try {
        r.value = await l(U);
      } catch (me) {
        u.value = me instanceof Error ? me.message : "Failed to load workflows";
      } finally {
        c.value = !1;
      }
    }
    t({ loadWorkflows: L });
    function q(U) {
      g.value = U, p.value = !0;
    }
    function ce(U) {
      g.value = U, w.value = !0;
    }
    function ne(U) {
      g.value = U, window.dispatchEvent(new CustomEvent("comfygit:open-io-mapping", {
        detail: { workflowName: U }
      })), window.dispatchEvent(new CustomEvent("comfygit:close-panel"));
    }
    function Y(U) {
      var ye;
      const Pe = (ye = U.detail) == null ? void 0 : ye.workflowName;
      Pe && ne(Pe);
    }
    function we() {
      a("refresh");
    }
    async function ee() {
      w.value = !1, await L(!0);
    }
    async function j() {
      try {
        await fetch("/v2/manager/reboot");
      } catch {
        console.error("Failed to restart:", err);
      }
    }
    function K(U) {
      return U.replace(/uninstallable node mappings?/gi, (me) => me.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function ke(U) {
      if (U.issue_summary && U.issue_summary.trim().length > 0)
        return K(U.issue_summary);
      const me = [];
      return U.version_gated_count && U.version_gated_count > 0 && me.push(`${U.version_gated_count} node${U.version_gated_count > 1 ? "s" : ""} require newer ComfyUI`), U.uninstallable_count && U.uninstallable_count > 0 && me.push(`${U.uninstallable_count} node${U.uninstallable_count > 1 ? "s" : ""} need community packages`), U.missing_nodes > 0 && me.push(`${U.missing_nodes} missing node${U.missing_nodes > 1 ? "s" : ""}`), U.missing_models > 0 && me.push(`${U.missing_models} missing model${U.missing_models > 1 ? "s" : ""}`), U.models_with_category_mismatch && U.models_with_category_mismatch > 0 && me.push(`${U.models_with_category_mismatch} model${U.models_with_category_mismatch > 1 ? "s" : ""} in wrong directory`), U.pending_downloads && U.pending_downloads > 0 && me.push(`${U.pending_downloads} pending download${U.pending_downloads > 1 ? "s" : ""}`), me.length > 0 ? me.join(", ") : "Has issues";
    }
    function se(U) {
      const me = U.sync_state === "new" ? "New" : U.sync_state === "modified" ? "Modified" : U.sync_state === "synced" ? "Synced" : U.sync_state, Pe = fe(U);
      return U.has_path_sync_issues && U.models_needing_path_sync && U.models_needing_path_sync > 0 ? `${U.models_needing_path_sync} model path${U.models_needing_path_sync > 1 ? "s" : ""} need${U.models_needing_path_sync === 1 ? "s" : ""} sync · ${Pe}` : `${me || "Unknown"} · ${Pe}`;
    }
    function fe(U) {
      const me = U.contract_summary;
      return !me || !me.has_contract ? "No contract" : me.status === "incomplete" ? `${me.input_count} in / ${me.output_count} out · incomplete` : `${me.input_count} in / ${me.output_count} out`;
    }
    return at(() => {
      L(), window.addEventListener("comfygit:open-workflow-contract", Y);
    }), aa(() => {
      window.removeEventListener("comfygit:open-workflow-contract", Y);
    }), (U, me) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, { title: "WORKFLOWS" })
        ]),
        search: h(() => [
          b(ro, {
            modelValue: d.value,
            "onUpdate:modelValue": me[0] || (me[0] = (Pe) => d.value = Pe),
            placeholder: "🔍 Search workflows..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          c.value ? (n(), R($s, {
            key: 0,
            message: "Loading workflows..."
          })) : u.value ? (n(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: L
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            M.value.length ? (n(), R(It, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(M.value, (Pe) => (n(), R(Ft, {
                  key: Pe.name,
                  status: "broken"
                }, {
                  icon: h(() => [...me[7] || (me[7] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(ke(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ye) => ce(Pe.name)
                    }, {
                      default: h(() => [...me[8] || (me[8] = [
                        $(" Resolve ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => ne(Pe.name)
                    }, {
                      default: h(() => [...me[9] || (me[9] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => q(Pe.name)
                    }, {
                      default: h(() => [...me[10] || (me[10] = [
                        $(" Details ▸ ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            T.value.length ? (n(), R(It, {
              key: 1,
              title: "NEW",
              count: T.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(T.value, (Pe) => (n(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "new"
                }, {
                  icon: h(() => [
                    $(m(Pe.has_path_sync_issues ? "⚡" : "●"), 1)
                  ]),
                  title: h(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => ne(Pe.name)
                    }, {
                      default: h(() => [...me[11] || (me[11] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => q(Pe.name)
                    }, {
                      default: h(() => [...me[12] || (me[12] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), R(It, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(D.value, (Pe) => (n(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "modified"
                }, {
                  icon: h(() => [...me[13] || (me[13] = [
                    $("⚡", -1)
                  ])]),
                  title: h(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => ne(Pe.name)
                    }, {
                      default: h(() => [...me[14] || (me[14] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => q(Pe.name)
                    }, {
                      default: h(() => [...me[15] || (me[15] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            z.value.length ? (n(), R(It, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: me[2] || (me[2] = (Pe) => v.value = Pe)
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(G.value, (Pe) => (n(), R(Ft, {
                  key: Pe.name,
                  status: Pe.has_path_sync_issues ? "warning" : "synced"
                }, {
                  icon: h(() => [
                    $(m(Pe.has_path_sync_issues ? "⚡" : "✓"), 1)
                  ]),
                  title: h(() => [
                    $(m(Pe.name), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(se(Pe)), 1)
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => ne(Pe.name)
                    }, {
                      default: h(() => [...me[16] || (me[16] = [
                        $(" Contract ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ye) => q(Pe.name)
                    }, {
                      default: h(() => [...me[17] || (me[17] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["status"]))), 128)),
                !f.value && z.value.length > 5 ? (n(), R(Me, {
                  key: 0,
                  variant: "ghost",
                  size: "sm",
                  onClick: me[1] || (me[1] = (Pe) => f.value = !0),
                  style: { width: "100%", "margin-top": "var(--cg-space-2)" }
                }, {
                  default: h(() => [
                    $(" View all " + m(z.value.length) + " → ", 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ]),
              _: 1
            }, 8, ["count", "initially-expanded"])) : y("", !0),
            I.value.length ? y("", !0) : (n(), R(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), R(Gp, {
        key: 0,
        "workflow-name": g.value,
        onClose: me[3] || (me[3] = (Pe) => p.value = !1),
        onResolve: me[4] || (me[4] = (Pe) => ce(g.value)),
        onRefresh: me[5] || (me[5] = (Pe) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), R(k0, {
        key: 1,
        "workflow-name": g.value,
        onClose: ee,
        onInstall: we,
        onRefresh: me[6] || (me[6] = (Pe) => a("refresh")),
        onRestart: j
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), H0 = /* @__PURE__ */ xe(j0, [["__scopeId", "data-v-28ee54dd"]]), q0 = /* @__PURE__ */ be({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      ot(t.$slots, "default", {}, void 0)
    ], 2));
  }
}), Il = /* @__PURE__ */ xe(q0, [["__scopeId", "data-v-ccb7816e"]]), K0 = ["disabled"], J0 = { class: "dropdown-value" }, Q0 = ["onClick"], Y0 = {
  key: 0,
  class: "dropdown-error"
}, X0 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(!1), r = k(null), c = k(null), u = k({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = P(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((I) => d(I) === o.modelValue);
      return S ? v(S) : String(o.modelValue);
    });
    function p() {
      o.disabled || (l.value = !l.value);
    }
    function w() {
      l.value = !1;
    }
    function g(S) {
      a("update:modelValue", d(S)), w();
    }
    function _() {
      if (!r.value) return;
      const S = r.value.getBoundingClientRect(), I = window.innerHeight, M = I - S.bottom, T = S.top, D = Math.min(300, o.options.length * 36 + 8), z = M < D && T > M;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...z ? { bottom: `${I - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    ht(l, async (S) => {
      S && (await Pt(), _());
    });
    function x() {
      l.value && _();
    }
    function C(S) {
      S.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", x, !0), window.addEventListener("keydown", C);
    }), Po(() => {
      window.removeEventListener("scroll", x, !0), window.removeEventListener("keydown", C);
    }), (S, I) => (n(), i("div", {
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
        s("span", J0, m(f.value), 1),
        I[0] || (I[0] = s("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, K0),
      (n(), R(Kt, { to: "body" }, [
        l.value ? (n(), i("div", {
          key: 0,
          class: "dropdown-overlay",
          onClick: w
        })) : y("", !0),
        l.value ? (n(), i("div", {
          key: 1,
          ref_key: "menuRef",
          ref: c,
          class: "dropdown-menu",
          style: Rt(u.value)
        }, [
          (n(!0), i(B, null, ge(e.options, (M) => (n(), i("div", {
            key: d(M),
            class: Be(["dropdown-option", { selected: d(M) === e.modelValue }]),
            onClick: (T) => g(M)
          }, m(v(M)), 11, Q0))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Y0, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), Z0 = /* @__PURE__ */ xe(X0, [["__scopeId", "data-v-857e085b"]]), e_ = { class: "destination-section" }, t_ = { class: "section-label" }, s_ = { class: "destination-row" }, o_ = {
  key: 0,
  class: "path-separator"
}, n_ = /* @__PURE__ */ be({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = P(() => {
      const x = d.value.map((C) => ({
        label: C,
        value: C
      }));
      return x.push({ label: "Custom path...", value: "__custom__" }), x;
    }), w = P(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const x = d.value.find(
        (C) => {
          var S;
          return C.toLowerCase() === ((S = o.suggestedDirectory) == null ? void 0 : S.toLowerCase());
        }
      );
      x && x !== r.value && (f = !0, r.value = x, Pt(() => {
        f = !1;
      }));
    }
    async function _() {
      try {
        const x = await l();
        d.value = x.directories, x.directories.length > 0 && !r.value && (r.value = x.directories[0]);
      } catch {
        d.value = ["checkpoints", "loras", "vae", "controlnet", "unet"], r.value || (r.value = "checkpoints");
      }
    }
    return ht(w, (x) => {
      a("update:modelValue", x);
    }, { immediate: !0 }), ht(() => o.suggestedDirectory, g), ht(d, g), ht(r, (x, C) => {
      f || C === "" || (v.value = !0);
    }), at(_), (x, C) => (n(), i("div", e_, [
      s("h4", t_, m(e.label), 1),
      s("div", s_, [
        b(Z0, {
          modelValue: r.value,
          "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", o_, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), R(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": C[1] || (C[1] = (S) => c.value = S),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), R(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": C[2] || (C[2] = (S) => u.value = S),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), nc = /* @__PURE__ */ xe(n_, [["__scopeId", "data-v-2fbc2b02"]]);
function a_(e) {
  const t = e.toLowerCase();
  return t === "huggingface.co" || t.endsWith(".huggingface.co") || t === "hf.co";
}
function l_(e) {
  const t = e.trim();
  if (!t) return { kind: "unknown" };
  let o;
  try {
    o = new URL(t);
  } catch {
    return { kind: "unknown" };
  }
  if (!a_(o.hostname)) return { kind: "unknown" };
  const a = o.pathname.replace(/^\/+/, "").split("/").filter(Boolean);
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
function i_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function xi(e, t, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(t)}/${i_(o)}`;
}
const r_ = { class: "hf-file-browser" }, c_ = { class: "browser-header" }, u_ = { class: "repo-info" }, d_ = { class: "repo-id" }, m_ = {
  key: 0,
  class: "revision-pill"
}, f_ = {
  key: 0,
  class: "loading-state"
}, v_ = {
  key: 1,
  class: "error-state"
}, p_ = { class: "toolbar" }, g_ = { class: "toolbar-actions" }, h_ = { class: "file-list-container" }, y_ = {
  key: 0,
  class: "file-list-header"
}, w_ = ["checked", "indeterminate"], __ = {
  key: 1,
  class: "file-checkbox-spacer"
}, k_ = { class: "sort-indicator" }, b_ = { class: "sort-indicator" }, $_ = {
  key: 1,
  class: "empty-state"
}, C_ = {
  key: 2,
  class: "file-list"
}, x_ = ["onClick"], S_ = ["checked", "onChange"], I_ = { class: "file-path" }, E_ = { class: "file-size" }, T_ = { class: "action-bar" }, M_ = { class: "summary-info" }, P_ = { class: "summary-count" }, R_ = { class: "summary-size" }, L_ = /* @__PURE__ */ be({
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
    const o = e, a = t, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, x = P(() => {
      let ye = r.value;
      if (o.initialPath) {
        const Z = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ye = ye.filter((Q) => Q.path.startsWith(Z) || Q.path === o.initialPath);
      }
      if (f.value && (ye = ye.filter((Z) => Z.is_model_file)), v.value.trim()) {
        const Z = v.value.toLowerCase();
        ye = ye.filter((Q) => Q.path.toLowerCase().includes(Z));
      }
      return ye;
    }), C = P(() => {
      const ye = [...x.value];
      return ye.sort((Z, Q) => {
        let $e;
        return p.value === "name" ? $e = Z.path.localeCompare(Q.path) : $e = Z.size - Q.size, w.value ? $e : -$e;
      }), ye;
    }), S = P(() => x.value.length === 0 ? !1 : x.value.every((ye) => c.value.has(ye.path))), I = P(() => x.value.some((ye) => c.value.has(ye.path))), M = P(() => g.value.trim().length > 0), T = P(() => {
      let ye = 0;
      for (const Z of c.value) {
        const Q = r.value.find(($e) => $e.path === Z);
        Q && (ye += Q.size);
      }
      return ye;
    }), D = P(() => {
      if (c.value.size === 0) return null;
      const ye = /* @__PURE__ */ new Set();
      for (const Z of c.value) {
        const Q = ke(Z);
        Q && ye.add(Q.toLowerCase());
      }
      return ye.size !== 1 ? null : [...ye][0];
    }), z = P(() => o.mode || "download"), G = P(() => o.actionLabel || (z.value === "source" ? "Use as Source" : "Queue Download")), L = P(() => z.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), q = P(() => z.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !M.value);
    function ce(ye) {
      if (ye === 0) return "0 B";
      const Z = 1024 * 1024 * 1024, Q = 1024 * 1024, $e = 1024;
      return ye >= Z ? `${(ye / Z).toFixed(2)} GB` : ye >= Q ? `${(ye / Q).toFixed(1)} MB` : ye >= $e ? `${(ye / $e).toFixed(0)} KB` : `${ye} B`;
    }
    function ne(ye) {
      const Z = ye.match(_);
      return Z ? `${Z[1]}${Z[4]}` : null;
    }
    function Y(ye) {
      if (z.value === "source") {
        c.value = c.value.has(ye.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ye.path]);
        return;
      }
      const Z = new Set(c.value), Q = Z.has(ye.path), $e = ye.shard_group || ne(ye.path);
      if ($e) {
        const te = r.value.filter((oe) => (oe.shard_group || ne(oe.path)) === $e);
        Q ? te.forEach((oe) => Z.delete(oe.path)) : te.forEach((oe) => Z.add(oe.path));
      } else
        Q ? Z.delete(ye.path) : Z.add(ye.path);
      c.value = Z;
    }
    function we() {
      const ye = new Set(c.value);
      for (const Z of x.value)
        Z.is_model_file && ye.add(Z.path);
      c.value = ye;
    }
    function ee() {
      c.value = /* @__PURE__ */ new Set();
    }
    function j() {
      if (S.value) {
        const ye = new Set(c.value);
        for (const Z of x.value)
          ye.delete(Z.path);
        c.value = ye;
      } else {
        const ye = new Set(c.value);
        for (const Z of x.value)
          ye.add(Z.path);
        c.value = ye;
      }
    }
    function K(ye) {
      p.value === ye ? w.value = !w.value : (p.value = ye, w.value = !0);
    }
    function ke(ye) {
      const Z = ye.split("/");
      return Z.length >= 2 ? Z[Z.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function fe() {
      if (c.value.size === 0 || !M.value) return;
      const ye = se(), Z = [];
      for (const Q of c.value) {
        const $e = r.value.find((te) => te.path === Q);
        $e && Z.push({
          url: xi(o.repoId, o.revision, $e.path),
          destination: ye,
          filename: $e.path.split("/").pop() || $e.path
        });
      }
      a("queue", Z);
    }
    function U() {
      if (c.value.size !== 1) return;
      const [ye] = c.value;
      a("selectSource", xi(o.repoId, o.revision, ye));
    }
    function me() {
      if (z.value === "source") {
        U();
        return;
      }
      fe();
    }
    async function Pe() {
      if (o.repoId) {
        u.value = !0, d.value = null;
        try {
          const ye = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, Z = await l(ye);
          if (r.value = Z.files, o.preselectedFile) {
            const Q = r.value.find(($e) => $e.path === o.preselectedFile);
            Q && Y(Q);
          }
        } catch (ye) {
          d.value = ye instanceof Error ? ye.message : "Failed to load repository";
        } finally {
          u.value = !1;
        }
      }
    }
    return ht(() => [o.repoId, o.revision], () => {
      o.repoId && Pe();
    }, { immediate: !1 }), at(() => {
      Pe();
    }), (ye, Z) => (n(), i("div", r_, [
      s("div", c_, [
        s("button", {
          class: "back-btn",
          onClick: Z[0] || (Z[0] = (Q) => ye.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        s("div", u_, [
          s("span", d_, m(e.repoId), 1),
          e.revision ? (n(), i("span", m_, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", f_, " Loading repository files... ")) : d.value ? (n(), i("div", v_, m(d.value), 1)) : (n(), i(B, { key: 2 }, [
        s("div", p_, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (Q) => v.value = Q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          s("div", g_, [
            s("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: Z[2] || (Z[2] = (Q) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            z.value === "download" ? (n(), i("button", {
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
        s("div", h_, [
          x.value.length > 0 ? (n(), i("div", y_, [
            z.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              indeterminate: I.value && !S.value,
              class: "file-checkbox",
              onChange: j
            }, null, 40, w_)) : (n(), i("span", __)),
            s("span", {
              class: "header-name",
              onClick: Z[3] || (Z[3] = (Q) => K("name"))
            }, [
              Z[7] || (Z[7] = $(" Name ", -1)),
              s("span", k_, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            s("span", {
              class: "header-size",
              onClick: Z[4] || (Z[4] = (Q) => K("size"))
            }, [
              Z[8] || (Z[8] = $(" Size ", -1)),
              s("span", b_, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          x.value.length === 0 ? (n(), i("div", $_, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", C_, [
            (n(!0), i(B, null, ge(C.value, (Q) => (n(), i("div", {
              key: Q.path,
              class: Be(["file-item", { selected: c.value.has(Q.path) }]),
              onClick: ($e) => Y(Q)
            }, [
              s("input", {
                type: "checkbox",
                checked: c.value.has(Q.path),
                class: "file-checkbox",
                onClick: Z[5] || (Z[5] = yt(() => {
                }, ["stop"])),
                onChange: ($e) => Y(Q)
              }, null, 40, S_),
              s("span", I_, m(Q.path), 1),
              s("span", E_, m(ce(Q.size)), 1)
            ], 10, x_))), 128))
          ]))
        ]),
        z.value === "download" ? (n(), R(nc, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": Z[6] || (Z[6] = (Q) => g.value = Q),
          "suggested-directory": D.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        s("div", T_, [
          s("div", M_, [
            s("span", P_, m(L.value), 1),
            s("span", R_, m(ce(T.value)), 1)
          ]),
          b(De, {
            variant: "primary",
            disabled: q.value,
            onClick: me
          }, {
            default: h(() => [
              $(m(G.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), D_ = /* @__PURE__ */ xe(L_, [["__scopeId", "data-v-06caa551"]]), N_ = { class: "token-config-modal" }, U_ = { class: "provider-info" }, O_ = { class: "provider-icon" }, A_ = { class: "provider-name" }, z_ = {
  key: 0,
  class: "current-token"
}, F_ = { class: "mask" }, V_ = { class: "token-input-section" }, B_ = { class: "input-label" }, W_ = { class: "help-text" }, G_ = ["href"], j_ = { class: "modal-actions" }, H_ = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {},
    overlayZIndex: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: t }) {
    const o = e, a = t, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(
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
          const x = o.provider === "huggingface" ? { huggingface_token: r.value.trim() } : { civitai_api_key: r.value.trim() };
          await l(x), r.value = "", a("saved"), a("close");
        } catch (x) {
          console.error("Failed to save token:", x);
        } finally {
          c.value = !1;
        }
      }
    }
    async function _() {
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
    return (x, C) => (n(), R($t, {
      title: "Configure API Token",
      "overlay-z-index": e.overlayZIndex,
      onClose: C[2] || (C[2] = (S) => x.$emit("close"))
    }, {
      body: h(() => [
        s("div", N_, [
          s("div", U_, [
            s("span", O_, m(v.value), 1),
            s("span", A_, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", z_, [
            C[4] || (C[4] = s("span", { class: "label" }, "Current token:", -1)),
            s("span", F_, m(e.currentTokenMask), 1),
            b(De, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...C[3] || (C[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          s("div", V_, [
            s("label", B_, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": C[0] || (C[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            s("div", W_, [
              s("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, G_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        s("div", j_, [
          b(De, {
            variant: "secondary",
            onClick: C[1] || (C[1] = (S) => x.$emit("close"))
          }, {
            default: h(() => [...C[5] || (C[5] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: "primary",
            disabled: !r.value.trim(),
            loading: c.value,
            onClick: g
          }, {
            default: h(() => [...C[6] || (C[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }, 8, ["overlay-z-index"]));
  }
}), q_ = /* @__PURE__ */ xe(H_, [["__scopeId", "data-v-525ec64a"]]), K_ = { class: "huggingface-tab" }, J_ = {
  key: 0,
  class: "search-section"
}, Q_ = { class: "search-header" }, Y_ = { class: "search-bar" }, X_ = {
  key: 1,
  class: "search-results"
}, Z_ = {
  key: 0,
  class: "loading-state"
}, ek = {
  key: 1,
  class: "error-state"
}, tk = {
  key: 2,
  class: "results-list"
}, sk = ["onClick"], ok = { class: "repo-header" }, nk = { class: "repo-id" }, ak = { class: "repo-stats" }, lk = {
  class: "stat",
  title: "Downloads"
}, ik = {
  class: "stat",
  title: "Likes"
}, rk = {
  key: 0,
  class: "repo-desc"
}, ck = {
  key: 1,
  class: "repo-tags"
}, uk = {
  key: 3,
  class: "empty-state"
}, dk = {
  key: 4,
  class: "hint-state"
}, mk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" },
    overlayZIndex: { default: 10003 }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: t, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), x = P(() => {
      if (!u.value) return !1;
      const G = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || G.includes("authentication") || G.includes("unauthorized");
    });
    function C(G) {
      return G >= 1e6 ? `${(G / 1e6).toFixed(1)}M` : G >= 1e3 ? `${(G / 1e3).toFixed(1)}K` : String(G);
    }
    async function S() {
      const G = l.value.trim();
      if (!G) return;
      u.value = null;
      const L = l_(G);
      if (L.kind === "file" && L.repoId && L.path) {
        v.value = L.repoId, f.value = L.revision || "main";
        const q = L.path.split("/");
        q.length > 1 ? p.value = q.slice(0, -1).join("/") : p.value = void 0, w.value = L.path, a.value = "browse";
        return;
      }
      if (L.kind === "repo" && L.repoId) {
        v.value = L.repoId, f.value = L.revision || "main", p.value = L.path, w.value = void 0, a.value = "browse";
        return;
      }
      if (/^[\w-]+\/[\w.-]+$/.test(G) && !G.includes("://")) {
        v.value = G, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const q = await t(G);
        r.value = q.results, d.value = !0;
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function I(G) {
      v.value = G, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function M() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function T() {
      try {
        const G = await o();
        _.value = G.huggingface_token || null;
      } catch (G) {
        console.error("Failed to load config:", G);
      }
    }
    function D() {
      T(), x.value && l.value && S();
    }
    function z() {
      _.value = null;
    }
    return at(T), (G, L) => (n(), i("div", K_, [
      a.value === "search" ? (n(), i("div", J_, [
        s("div", Q_, [
          s("div", Y_, [
            b(bt, {
              modelValue: l.value,
              "onUpdate:modelValue": L[0] || (L[0] = (q) => l.value = q),
              placeholder: "Search repos, paste URL, or enter user/repo...",
              onKeydown: ds(S, ["enter"])
            }, null, 8, ["modelValue"]),
            b(De, {
              variant: "primary",
              onClick: S,
              loading: c.value
            }, {
              default: h(() => [...L[6] || (L[6] = [
                $(" Search ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ]),
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: L[1] || (L[1] = (q) => g.value = !0)
          }, {
            default: h(() => [
              $(m(_.value ? `Token: ${_.value}` : "Configure Token"), 1)
            ]),
            _: 1
          })
        ])
      ])) : y("", !0),
      a.value === "search" ? (n(), i("div", X_, [
        c.value ? (n(), i("div", Z_, " Searching HuggingFace... ")) : u.value ? (n(), i("div", ek, [
          s("p", null, m(u.value), 1),
          x.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            size: "sm",
            onClick: L[2] || (L[2] = (q) => g.value = !0)
          }, {
            default: h(() => [...L[7] || (L[7] = [
              $(" Configure HuggingFace Token ", -1)
            ])]),
            _: 1
          })) : y("", !0)
        ])) : r.value.length > 0 ? (n(), i("div", tk, [
          (n(!0), i(B, null, ge(r.value, (q) => (n(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ce) => I(q.repo_id)
          }, [
            s("div", ok, [
              s("span", nk, m(q.repo_id), 1),
              s("div", ak, [
                s("span", lk, [
                  L[8] || (L[8] = s("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(C(q.downloads)), 1)
                ]),
                s("span", ik, [
                  L[9] || (L[9] = s("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(C(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (n(), i("p", rk, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (n(), i("div", ck, [
              (n(!0), i(B, null, ge(q.tags.slice(0, 5), (ce) => (n(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, sk))), 128))
        ])) : d.value ? (n(), i("div", uk, " No repositories found ")) : (n(), i("div", dk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(D_, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: M,
        onQueue: L[3] || (L[3] = (q) => G.$emit("queue", q)),
        onSelectSource: L[4] || (L[4] = (q) => G.$emit("selectSource", q))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), R(q_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: L[5] || (L[5] = (q) => g.value = !1),
        onSaved: D,
        onCleared: z
      }, null, 8, ["current-token-mask", "overlay-z-index"])) : y("", !0)
    ]));
  }
}), ac = /* @__PURE__ */ xe(mk, [["__scopeId", "data-v-eccbf32d"]]), fk = { class: "candidate-card" }, vk = { class: "candidate-main" }, pk = { class: "candidate-url" }, gk = { class: "candidate-meta" }, hk = { class: "meta-chip" }, yk = {
  key: 0,
  class: "meta-chip"
}, wk = {
  key: 1,
  class: "meta-chip"
}, _k = {
  key: 0,
  class: "reason-list",
  "aria-label": "Why this link matched"
}, kk = { class: "reason-heading" }, bk = {
  key: 1,
  class: "candidate-context"
}, $k = { class: "candidate-actions" }, Ck = /* @__PURE__ */ be({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select", "showMatchInfo"],
  setup(e, { emit: t }) {
    const o = t;
    function a(r) {
      return r === "huggingface" ? "Hugging Face" : r === "civitai" ? "Civitai" : "Direct URL";
    }
    function l(r) {
      return r >= 75 ? "Strong" : r >= 45 ? "Possible" : "Weak";
    }
    return (r, c) => {
      var u;
      return n(), i("article", fk, [
        s("div", vk, [
          s("div", pk, m(e.candidate.url), 1),
          s("div", gk, [
            s("span", hk, [
              c[2] || (c[2] = s("span", { class: "chip-label" }, "Provider", -1)),
              s("span", null, m(a(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", yk, [
              c[3] || (c[3] = s("span", { class: "chip-label" }, "Workflow", -1)),
              s("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", wk, [
              c[4] || (c[4] = s("span", { class: "chip-label" }, "Match", -1)),
              s("span", null, m(l(e.candidate.confidence)), 1)
            ])) : y("", !0)
          ]),
          (u = e.candidate.reasons) != null && u.length ? (n(), i("div", _k, [
            s("div", kk, [
              c[5] || (c[5] = s("span", { class: "reason-label" }, "Matched by", -1)),
              b(Sl, {
                size: 14,
                title: "About match reasons",
                onClick: c[0] || (c[0] = (d) => o("showMatchInfo"))
              })
            ]),
            (n(!0), i(B, null, ge(e.candidate.reasons, (d) => (n(), i("span", {
              key: d,
              class: "reason-chip"
            }, m(d), 1))), 128))
          ])) : y("", !0),
          e.candidate.context ? (n(), i("details", bk, [
            c[6] || (c[6] = s("summary", null, "Workflow snippet", -1)),
            s("p", null, m(e.candidate.context), 1)
          ])) : y("", !0)
        ]),
        s("div", $k, [
          b(De, {
            variant: "primary",
            size: "sm",
            loading: e.loading,
            onClick: c[1] || (c[1] = (d) => o("select", e.candidate.url))
          }, {
            default: h(() => [
              $(m(e.actionLabel), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), lc = /* @__PURE__ */ xe(Ck, [["__scopeId", "data-v-18b56588"]]), xk = { class: "source-url-form" }, Sk = { class: "input-group" }, Ik = { key: 0 }, Ek = {
  key: 1,
  class: "description"
}, Tk = { class: "actions" }, Mk = /* @__PURE__ */ be({
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
    const o = e, a = t, l = P(() => o.modelValue.trim()), r = P(() => {
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
      c.value && a("submit", l.value);
    }
    return (d, v) => (n(), i("div", xk, [
      s("div", Sk, [
        e.label ? (n(), i("label", Ik, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Ek, m(e.description), 1)) : y("", !0)
      ]),
      ot(d.$slots, "default", {}, void 0),
      s("div", Tk, [
        b(De, {
          variant: "primary",
          disabled: !c.value,
          loading: e.loading,
          onClick: u
        }, {
          default: h(() => [
            $(m(e.actionLabel), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ])
    ]));
  }
}), ic = /* @__PURE__ */ xe(Mk, [["__scopeId", "data-v-e2610d45"]]), Pk = { class: "source-picker" }, Rk = {
  key: 0,
  class: "model-summary"
}, Lk = { class: "model-heading" }, Dk = { class: "summary-name" }, Nk = { class: "summary-meta" }, Uk = {
  key: 0,
  class: "hash-row"
}, Ok = { class: "hash-value" }, Ak = {
  key: 1,
  class: "hash-row"
}, zk = { class: "hash-value" }, Fk = {
  key: 2,
  class: "hash-row"
}, Vk = { class: "hash-value" }, Bk = {
  key: 4,
  class: "hash-error"
}, Wk = { class: "tab-bar" }, Gk = ["onClick"], jk = {
  key: 1,
  class: "tab-content"
}, Hk = { class: "section-header-row" }, qk = {
  key: 0,
  class: "state-message"
}, Kk = {
  key: 1,
  class: "error-message"
}, Jk = {
  key: 2,
  class: "candidate-list"
}, Qk = {
  key: 3,
  class: "state-message"
}, Yk = {
  key: 2,
  class: "tab-content source-browser-content"
}, Xk = {
  key: 3,
  class: "tab-content"
}, Zk = { class: "section-header-row" }, eb = /* @__PURE__ */ be({
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
    const o = e, a = t, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(!1), _ = k(null), x = P(() => d.value.filter((M) => M.source === "workflow")), C = P(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
    async function S() {
      v.value = !0, f.value = null;
      try {
        const M = await l(o.model.hash);
        d.value = M.candidates;
      } catch (M) {
        f.value = M instanceof Error ? M.message : "Failed to scan workflows";
      } finally {
        v.value = !1;
      }
    }
    async function I() {
      if (o.model.hash) {
        g.value = !0, _.value = null;
        try {
          const M = await r(o.model.hash);
          a("hashesComputed", M);
        } catch (M) {
          _.value = M instanceof Error ? M.message : "Failed to compute hashes";
        } finally {
          g.value = !1;
        }
      }
    }
    return at(S), (M, T) => (n(), i("div", Pk, [
      e.showModelSummary ? (n(), i("div", Rk, [
        s("div", Lk, [
          T[6] || (T[6] = s("div", { class: "summary-label" }, "Local model", -1)),
          s("div", Dk, m(e.model.filename), 1)
        ]),
        s("div", Nk, [
          e.model.hash ? (n(), i("div", Uk, [
            T[7] || (T[7] = s("span", { class: "hash-label" }, "quick hash", -1)),
            s("span", Ok, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (n(), i("div", Ak, [
            T[8] || (T[8] = s("span", { class: "hash-label" }, "blake3", -1)),
            s("span", zk, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (n(), i("div", Fk, [
            T[9] || (T[9] = s("span", { class: "hash-label" }, "sha256", -1)),
            s("span", Vk, m(e.model.sha256), 1)
          ])) : y("", !0),
          C.value ? (n(), R(De, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: g.value,
            onClick: I
          }, {
            default: h(() => [...T[10] || (T[10] = [
              $(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          _.value ? (n(), i("p", Bk, m(_.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      s("div", Wk, [
        (n(), i(B, null, ge(c, (D) => s("button", {
          key: D.id,
          class: Be(["tab-btn", { active: u.value === D.id }]),
          onClick: (z) => u.value = D.id
        }, m(D.label), 11, Gk)), 64))
      ]),
      u.value === "workflow" ? (n(), i("section", jk, [
        s("div", Hk, [
          T[12] || (T[12] = s("div", null, [
            s("h4", null, "Workflow Links"),
            s("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(De, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: S
          }, {
            default: h(() => [...T[11] || (T[11] = [
              $(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (n(), i("div", qk, "Scanning workflows...")) : f.value ? (n(), i("div", Kk, m(f.value), 1)) : x.value.length ? (n(), i("div", Jk, [
          (n(!0), i(B, null, ge(x.value, (D) => (n(), R(lc, {
            key: `${D.workflow}:${D.url}`,
            candidate: D,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === D.url,
            onSelect: T[0] || (T[0] = (z) => a("selectSource", z)),
            onShowMatchInfo: T[1] || (T[1] = (z) => w.value = !0)
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", Qk, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (n(), i("section", Yk, [
        b(ac, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          "overlay-z-index": e.overlayZIndex,
          onSelectSource: T[2] || (T[2] = (D) => a("selectSource", D))
        }, null, 8, ["action-label", "overlay-z-index"])
      ])) : u.value === "direct" ? (n(), i("section", Xk, [
        s("div", Zk, [
          s("div", null, [
            T[13] || (T[13] = s("h4", null, "Direct URL", -1)),
            s("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(ic, {
          modelValue: p.value,
          "onUpdate:modelValue": T[3] || (T[3] = (D) => p.value = D),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: T[4] || (T[4] = (D) => a("selectSource", D))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0),
      b(Yt, {
        show: w.value,
        title: "About Match Reasons",
        "max-width": "460px",
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: T[5] || (T[5] = (D) => w.value = !1)
      }, {
        content: h(() => [...T[14] || (T[14] = [
          s("ul", { class: "match-info-list" }, [
            s("li", null, [
              s("strong", null, "Filename match"),
              $(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            s("li", null, [
              s("strong", null, "Model name match"),
              $(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            s("li", null, [
              s("strong", null, "Hash match"),
              $(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            s("li", null, [
              s("strong", null, "Category nearby"),
              $(" means the workflow text near the link mentions the model folder/category.")
            ]),
            s("li", null, [
              s("strong", null, "Model file URL"),
              $(" means the URL itself ends like a model file.")
            ]),
            s("li", null, [
              s("strong", null, "Known model host"),
              $(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show", "overlay-z-index"])
    ]));
  }
}), tb = /* @__PURE__ */ xe(eb, [["__scopeId", "data-v-338697e6"]]), sb = {
  key: 0,
  class: "error-message"
}, ob = /* @__PURE__ */ be({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    ht(() => o.model, (f) => {
      r.value = f;
    });
    async function d(f) {
      if (!(!f || !o.model.hash)) {
        c.value = f, u.value = null;
        try {
          await l(o.model.hash, f), a("saved"), a("close");
        } catch (p) {
          u.value = p instanceof Error ? p.message : "Failed to save source";
        } finally {
          c.value = null;
        }
      }
    }
    function v(f) {
      r.value = f, a("hashesComputed");
    }
    return (f, p) => (n(), R($t, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(tb, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (n(), i("p", sb, m(u.value), 1)) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: p[0] || (p[0] = (w) => a("close"))
        }, {
          default: h(() => [...p[2] || (p[2] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title", "overlay-z-index"]));
  }
}), rc = /* @__PURE__ */ xe(ob, [["__scopeId", "data-v-62104cdb"]]);
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
const nb = {
  key: 0,
  class: "model-details"
}, ab = { class: "detail-section" }, lb = { class: "detail-row" }, ib = { class: "detail-value mono" }, rb = { class: "detail-row" }, cb = { class: "detail-value mono" }, ub = { class: "detail-row" }, db = { class: "detail-value mono" }, mb = {
  key: 0,
  class: "detail-row"
}, fb = { class: "detail-value" }, vb = ["disabled"], pb = {
  key: 1,
  class: "detail-row"
}, gb = { class: "detail-value hash-error" }, hb = { class: "detail-row" }, yb = { class: "detail-value" }, wb = { class: "detail-row" }, _b = { class: "detail-value" }, kb = { class: "detail-row" }, bb = { class: "detail-value" }, $b = { class: "detail-section" }, Cb = { class: "section-header" }, xb = {
  key: 0,
  class: "locations-list"
}, Sb = { class: "location-path mono" }, Ib = {
  key: 0,
  class: "location-modified"
}, Eb = ["onClick"], Tb = {
  key: 1,
  class: "empty-state"
}, Mb = { class: "detail-section" }, Pb = { class: "section-header-row" }, Rb = { class: "section-header" }, Lb = {
  key: 0,
  class: "sources-list"
}, Db = { class: "source-type" }, Nb = ["href"], Ub = ["disabled", "onClick"], Ob = {
  key: 1,
  class: "empty-state"
}, Ab = {
  key: 2,
  class: "source-error"
}, zb = {
  key: 3,
  class: "source-success"
}, Fb = /* @__PURE__ */ be({
  __name: "ModelDetailModal",
  props: {
    identifier: {},
    overlayZIndex: {}
  },
  emits: ["close", "sourceSaved"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), x = k(null), C = P(() => {
      var ne;
      return !!((ne = u.value) != null && ne.hash && (!u.value.blake3 || !u.value.sha256));
    }), S = k(null);
    let I = null;
    function M(ne, Y = "success", we = 2e3) {
      I && clearTimeout(I), S.value = { message: ne, type: Y }, I = setTimeout(() => {
        S.value = null;
      }, we);
    }
    function T(ne) {
      if (!ne) return "Unknown";
      const Y = 1024 * 1024 * 1024, we = 1024 * 1024;
      return ne >= Y ? `${(ne / Y).toFixed(1)} GB` : ne >= we ? `${(ne / we).toFixed(0)} MB` : `${(ne / 1024).toFixed(0)} KB`;
    }
    async function D(ne) {
      try {
        await El(ne), M("Copied to clipboard!");
      } catch (Y) {
        console.error("Failed to copy:", Y), M("Failed to copy to clipboard", "error");
      }
    }
    async function z(ne) {
      if (u.value) {
        f.value = ne, p.value = null, w.value = null;
        try {
          await r(u.value.hash, ne), M("Source removed"), await ce();
        } catch (Y) {
          p.value = Y instanceof Error ? Y.message : "Failed to remove source";
        } finally {
          f.value = null;
        }
      }
    }
    async function G() {
      w.value = "Source added successfully!", g.value = !1, await ce(), a("sourceSaved");
    }
    async function L() {
      await ce();
    }
    async function q() {
      var ne;
      if ((ne = u.value) != null && ne.hash) {
        _.value = !0, x.value = null;
        try {
          u.value = await c(u.value.hash), M("Hashes computed successfully!");
        } catch (Y) {
          x.value = Y instanceof Error ? Y.message : "Failed to compute hashes";
        } finally {
          _.value = !1;
        }
      }
    }
    async function ce() {
      d.value = !0, v.value = null;
      try {
        u.value = await l(o.identifier);
      } catch (ne) {
        v.value = ne instanceof Error ? ne.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(ce), (ne, Y) => {
      var we;
      return n(), i(B, null, [
        b($t, {
          title: `Model Details: ${((we = u.value) == null ? void 0 : we.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Y[5] || (Y[5] = (ee) => ne.$emit("close"))
        }, {
          body: h(() => {
            var ee, j, K, ke;
            return [
              u.value ? (n(), i("div", nb, [
                s("section", ab, [
                  s("div", lb, [
                    Y[7] || (Y[7] = s("span", { class: "detail-label" }, "Hash:", -1)),
                    s("span", ib, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => D(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", rb, [
                    Y[8] || (Y[8] = s("span", { class: "detail-label" }, "Blake3:", -1)),
                    s("span", cb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => D(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  s("div", ub, [
                    Y[9] || (Y[9] = s("span", { class: "detail-label" }, "SHA256:", -1)),
                    s("span", db, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => D(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  C.value ? (n(), i("div", mb, [
                    Y[10] || (Y[10] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", fb, [
                      s("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: q
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, vb)
                    ])
                  ])) : y("", !0),
                  x.value ? (n(), i("div", pb, [
                    Y[11] || (Y[11] = s("span", { class: "detail-label" }, null, -1)),
                    s("span", gb, m(x.value), 1)
                  ])) : y("", !0),
                  s("div", hb, [
                    Y[12] || (Y[12] = s("span", { class: "detail-label" }, "Size:", -1)),
                    s("span", yb, m(T(u.value.size)), 1)
                  ]),
                  s("div", wb, [
                    Y[13] || (Y[13] = s("span", { class: "detail-label" }, "Category:", -1)),
                    s("span", _b, m(u.value.category), 1)
                  ]),
                  s("div", kb, [
                    Y[14] || (Y[14] = s("span", { class: "detail-label" }, "Last Seen:", -1)),
                    s("span", bb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                s("section", $b, [
                  s("h4", Cb, "Locations (" + m(((ee = u.value.locations) == null ? void 0 : ee.length) || 0) + ")", 1),
                  (j = u.value.locations) != null && j.length ? (n(), i("div", xb, [
                    (n(!0), i(B, null, ge(u.value.locations, (se, fe) => (n(), i("div", {
                      key: fe,
                      class: "location-item"
                    }, [
                      s("span", Sb, m(se.path), 1),
                      se.modified ? (n(), i("span", Ib, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => D(se.path)
                      }, " Copy File Path ", 8, Eb)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Tb, "No locations found"))
                ]),
                s("section", Mb, [
                  s("div", Pb, [
                    s("h4", Rb, "Download Sources (" + m(((K = u.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                    s("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ke = u.value.sources) != null && ke.length ? (n(), i("div", Lb, [
                    (n(!0), i(B, null, ge(u.value.sources, (se, fe) => (n(), i("div", {
                      key: fe,
                      class: "source-item"
                    }, [
                      s("span", Db, m(se.type) + ":", 1),
                      s("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, Nb),
                      s("button", {
                        class: "remove-source-btn",
                        disabled: f.value === se.url,
                        onClick: (U) => z(se.url)
                      }, m(f.value === se.url ? "..." : "×"), 9, Ub)
                    ]))), 128))
                  ])) : (n(), i("div", Ob, " No download sources configured ")),
                  p.value ? (n(), i("p", Ab, m(p.value), 1)) : y("", !0),
                  w.value ? (n(), i("p", zb, m(w.value), 1)) : y("", !0)
                ])
              ])) : y("", !0)
            ];
          }),
          footer: h(() => [
            s("button", {
              class: "btn-secondary",
              onClick: Y[4] || (Y[4] = (ee) => ne.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), R(Kt, { to: "body" }, [
          S.value ? (n(), i("div", {
            key: 0,
            class: Be(["toast", S.value.type])
          }, m(S.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), R(rc, {
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
}), cc = /* @__PURE__ */ xe(Fb, [["__scopeId", "data-v-cd808fbc"]]), Vb = { class: "workflow-links-tab" }, Bb = { class: "section-header-row" }, Wb = {
  key: 0,
  class: "state-message"
}, Gb = {
  key: 1,
  class: "error-message"
}, jb = {
  key: 2,
  class: "candidate-list"
}, Hb = {
  key: 3,
  class: "state-message"
}, qb = /* @__PURE__ */ be({
  __name: "WorkflowLinksTab",
  emits: ["selectUrl"],
  setup(e, { emit: t }) {
    const o = t, { getWorkflowSourceCandidates: a } = ct(), l = k([]), r = k(!1), c = k(null), u = k(!1), d = P(() => l.value.filter((f) => f.source === "workflow"));
    async function v() {
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
    return at(v), (f, p) => (n(), i("div", Vb, [
      s("div", Bb, [
        p[4] || (p[4] = s("div", null, [
          s("h4", null, "Workflow Links"),
          s("p", null, "Model links found in saved workflow notes or metadata.")
        ], -1)),
        b(De, {
          variant: "secondary",
          size: "sm",
          loading: r.value,
          onClick: v
        }, {
          default: h(() => [...p[3] || (p[3] = [
            $(" Scan ", -1)
          ])]),
          _: 1
        }, 8, ["loading"])
      ]),
      r.value ? (n(), i("div", Wb, "Scanning workflows...")) : c.value ? (n(), i("div", Gb, m(c.value), 1)) : d.value.length ? (n(), i("div", jb, [
        (n(!0), i(B, null, ge(d.value, (w) => (n(), R(lc, {
          key: `${w.workflow}:${w.url}`,
          candidate: w,
          "action-label": "Use URL",
          onSelect: p[0] || (p[0] = (g) => o("selectUrl", g)),
          onShowMatchInfo: p[1] || (p[1] = (g) => u.value = !0)
        }, null, 8, ["candidate"]))), 128))
      ])) : (n(), i("div", Hb, " No likely workflow links found. Try Hugging Face or Direct URL. ")),
      b(Yt, {
        show: u.value,
        title: "About Match Reasons",
        "max-width": "460px",
        onClose: p[2] || (p[2] = (w) => u.value = !1)
      }, {
        content: h(() => [...p[5] || (p[5] = [
          s("ul", { class: "match-info-list" }, [
            s("li", null, [
              s("strong", null, "Filename match"),
              $(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            s("li", null, [
              s("strong", null, "Model name match"),
              $(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            s("li", null, [
              s("strong", null, "Hash match"),
              $(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            s("li", null, [
              s("strong", null, "Category nearby"),
              $(" means the workflow text near the link mentions the model folder/category.")
            ]),
            s("li", null, [
              s("strong", null, "Model file URL"),
              $(" means the URL itself ends like a model file.")
            ]),
            s("li", null, [
              s("strong", null, "Known model host"),
              $(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Kb = /* @__PURE__ */ xe(qb, [["__scopeId", "data-v-1be75a55"]]), Jb = { class: "civitai-tab" }, Qb = /* @__PURE__ */ be({
  __name: "CivitaiTab",
  setup(e) {
    return (t, o) => (n(), i("div", Jb, [...o[0] || (o[0] = [
      s("div", { class: "placeholder" }, [
        s("div", { class: "icon" }, "🎨"),
        s("h3", null, "Civitai Integration"),
        s("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
      ], -1)
    ])]));
  }
}), Yb = /* @__PURE__ */ xe(Qb, [["__scopeId", "data-v-44948051"]]), Xb = { class: "direct-url-tab" }, Zb = {
  key: 0,
  class: "error"
}, e2 = /* @__PURE__ */ be({
  __name: "DirectUrlTab",
  props: {
    initialUrl: {}
  },
  emits: ["queue"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(""), r = k("");
    ht(() => o.initialUrl, (v) => {
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
      a("queue", [{
        url: v,
        targetPath: f,
        filename: c.value
      }]), l.value = "";
    };
    function d(v, f) {
      return `${v.replace(/\/+$/, "")}/${f.replace(/^\/+/, "")}`;
    }
    return (v, f) => (n(), i("div", Xb, [
      b(ic, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(nc, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", Zb, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = s("p", { class: "note" }, "Model will be queued for background download.", -1))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled"])
    ]));
  }
}), t2 = /* @__PURE__ */ xe(e2, [["__scopeId", "data-v-a6d21f27"]]), s2 = { class: "download-modal" }, o2 = { class: "tab-bar" }, n2 = ["onClick"], a2 = { class: "tab-content" }, l2 = /* @__PURE__ */ be({
  __name: "ModelDownloadModal",
  props: {
    show: { type: Boolean }
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = t, { addToQueue: a } = Lo(), l = [
      { id: "workflow", label: "Workflow Links", icon: "🔎" },
      { id: "huggingface", label: "HuggingFace", icon: "🤗" },
      { id: "civitai", label: "Civitai", icon: "🎨" },
      { id: "direct", label: "Direct URL", icon: "🔗" }
    ], r = k("workflow"), c = k("");
    function u(p) {
      a(p.map((w) => ({
        workflow: "__manual__",
        filename: w.filename,
        url: w.url,
        targetPath: w.destination ? `${w.destination}/${w.filename}` : w.filename
      }))), o("close");
    }
    function d(p) {
      a(p.map((w) => ({
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
    return (p, w) => e.show ? (n(), R($t, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        s("div", s2, [
          s("div", o2, [
            (n(), i(B, null, ge(l, (g) => s("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, n2)), 64))
          ]),
          s("div", a2, [
            r.value === "workflow" ? (n(), R(Kb, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (n(), R(ac, {
              key: 1,
              onQueue: u
            })) : r.value === "civitai" ? (n(), R(Yb, { key: 2 })) : r.value === "direct" ? (n(), R(t2, {
              key: 3,
              "initial-url": c.value,
              onQueue: d
            }, null, 8, ["initial-url"])) : y("", !0)
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...w[0] || (w[0] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), uc = /* @__PURE__ */ xe(l2, [["__scopeId", "data-v-de2e4fac"]]), i2 = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: t }) {
    const o = t, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const x = P(
      () => r.value.reduce((L, q) => L + (q.size || 0), 0)
    ), C = P(() => {
      if (!f.value.trim()) return r.value;
      const L = f.value.toLowerCase();
      return r.value.filter((q) => q.filename.toLowerCase().includes(L));
    }), S = P(() => {
      if (!f.value.trim()) return c.value;
      const L = f.value.toLowerCase();
      return c.value.filter((q) => q.filename.toLowerCase().includes(L));
    }), I = P(() => {
      const L = {};
      for (const ce of C.value) {
        const ne = ce.type || "other";
        L[ne] || (L[ne] = []), L[ne].push(ce);
      }
      const q = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(L).sort(([ce], [ne]) => {
        const Y = q.indexOf(ce), we = q.indexOf(ne);
        return Y >= 0 && we >= 0 ? Y - we : Y >= 0 ? -1 : we >= 0 ? 1 : ce.localeCompare(ne);
      }).map(([ce, ne]) => ({ type: ce, models: ne }));
    });
    function M(L) {
      if (!L) return "Unknown";
      const q = L / (1024 * 1024);
      return q >= 1024 ? `${(q / 1024).toFixed(1)} GB` : `${q.toFixed(0)} MB`;
    }
    function T(L) {
      w.value = L.hash || L.filename;
    }
    function D(L) {
      o("navigate", "model-index");
    }
    function z(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function G() {
      d.value = !0, v.value = null;
      try {
        const L = await a();
        r.value = L, c.value = [];
        const q = await l();
        u.value = q.environment || "production";
      } catch (L) {
        v.value = L instanceof Error ? L.message : "Failed to load models";
      } finally {
        d.value = !1;
      }
    }
    return at(G), (L, q) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, {
            title: "MODELS IN THIS ENVIRONMENT",
            "show-info": !0,
            onInfoClick: q[1] || (q[1] = (ce) => p.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: q[0] || (q[0] = (ce) => g.value = !0)
              }, {
                default: h(() => [...q[6] || (q[6] = [
                  s("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    s("path", { d: "M14 14H2v-2h12v2z" })
                  ], -1),
                  $(" DOWNLOAD + ", -1)
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
            "onUpdate:modelValue": q[2] || (q[2] = (ce) => f.value = ce),
            placeholder: "🔍 Search models used in this environment..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value ? (n(), R($s, {
            key: 0,
            message: "Loading environment models..."
          })) : v.value ? (n(), R(Cs, {
            key: 1,
            message: v.value,
            retry: !0,
            onRetry: G
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length ? (n(), R(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(M(x.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, ge(I.value, (ce) => (n(), R(It, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(ce.models, (ne) => (n(), R(Ft, {
                  key: ne.hash || ne.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...q[7] || (q[7] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(m(ne.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(M(ne.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: (ne.used_in_workflows || []).join(", ") || "Not used"
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Path:",
                      value: ne.relative_path || "Unknown",
                      mono: !0
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (Y) => T(ne)
                    }, {
                      default: h(() => [...q[8] || (q[8] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            S.value.length ? (n(), R(It, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(S.value, (ce) => (n(), R(Ft, {
                  key: ce.filename,
                  status: "broken"
                }, {
                  icon: h(() => [...q[9] || (q[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(ce.filename), 1)
                  ]),
                  subtitle: h(() => [...q[10] || (q[10] = [
                    s("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
                  ])]),
                  details: h(() => {
                    var ne;
                    return [
                      b(_t, {
                        label: "Required by:",
                        value: ((ne = ce.workflow_names) == null ? void 0 : ne.join(", ")) || "Unknown"
                      }, null, 8, ["value"])
                    ];
                  }),
                  actions: h(() => [
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (ne) => z(ce.filename)
                    }, {
                      default: h(() => [...q[11] || (q[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (ne) => D(ce.filename)
                    }, {
                      default: h(() => [...q[12] || (q[12] = [
                        $(" Search Workspace Index ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !C.value.length && !S.value.length ? (n(), R(rs, {
              key: 2,
              icon: "📭",
              message: f.value ? `No models match '${f.value}'` : "No models in this environment."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
        show: p.value,
        title: "About Environment Models",
        onClose: q[3] || (q[3] = (ce) => p.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            q[13] || (q[13] = $(" These are models currently used by workflows in ", -1)),
            s("strong", null, '"' + m(u.value) + '"', 1),
            q[14] || (q[14] = $(". All models are symlinked from the workspace model index. ", -1))
          ])
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: _
          }, {
            default: h(() => [...q[15] || (q[15] = [
              $(" View Workspace Model Index → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(cc, {
        key: 0,
        identifier: w.value,
        onClose: q[4] || (q[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(uc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), r2 = /* @__PURE__ */ xe(i2, [["__scopeId", "data-v-af3ca736"]]), c2 = {
  key: 0,
  class: "indexing-progress"
}, u2 = { class: "progress-info" }, d2 = { class: "progress-label" }, m2 = { class: "progress-count" }, f2 = { class: "progress-bar" }, v2 = { class: "directory-modal-body" }, p2 = { class: "input-group" }, g2 = { class: "current-path" }, h2 = { class: "input-group" }, y2 = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: t }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = t, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), x = k(null), C = k(""), S = k(!1), I = k(!1), M = k(null), T = P(
      () => u.value.reduce((we, ee) => we + (ee.size || 0), 0)
    ), D = P(() => {
      if (!p.value.trim()) return u.value;
      const we = p.value.toLowerCase();
      return u.value.filter((ee) => {
        const j = ee, K = ee.sha256 || j.sha256_hash || "";
        return ee.filename.toLowerCase().includes(we) || K.toLowerCase().includes(we);
      });
    }), z = P(() => {
      const we = {};
      for (const j of D.value) {
        const K = j.type || "other";
        we[K] || (we[K] = []), we[K].push(j);
      }
      const ee = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([j], [K]) => {
        const ke = ee.indexOf(j), se = ee.indexOf(K);
        return ke >= 0 && se >= 0 ? ke - se : ke >= 0 ? -1 : se >= 0 ? 1 : j.localeCompare(K);
      }).map(([j, K]) => ({ type: j, models: K }));
    });
    function G(we) {
      if (!we) return "Unknown";
      const ee = 1024 * 1024 * 1024, j = 1024 * 1024;
      return we >= ee ? `${(we / ee).toFixed(1)} GB` : we >= j ? `${(we / j).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
    }
    function L(we) {
      g.value = we.hash || we.filename;
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        const we = await a();
        await ne(), we.changes > 0 && console.log(`Scan complete: ${we.changes} changes detected`);
      } catch (we) {
        f.value = we instanceof Error ? we.message : "Failed to scan models";
      } finally {
        v.value = !1;
      }
    }
    async function ce() {
      if (C.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const we = await r(C.value.trim());
          x.value = we.path, _.value = !1, C.value = "", await ne(), console.log(`Directory changed: ${we.models_indexed} models indexed`), c("refresh");
        } catch (we) {
          f.value = we instanceof Error ? we.message : "Failed to change directory";
        } finally {
          S.value = !1;
        }
      }
    }
    async function ne() {
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
        x.value = we.path;
      } catch {
      }
    }
    return at(() => {
      ne(), Y();
    }), (we, ee) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: ee[2] || (ee[2] = (j) => w.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: v.value,
                onClick: q
              }, {
                default: h(() => [
                  $(m(v.value ? "Scanning..." : "Scan for Models"), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ee[0] || (ee[0] = (j) => _.value = !0)
              }, {
                default: h(() => [...ee[10] || (ee[10] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ee[1] || (ee[1] = (j) => I.value = !0)
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
                  $(" DOWNLOAD + ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        search: h(() => [
          M.value ? (n(), i("div", c2, [
            s("div", u2, [
              s("span", d2, m(M.value.message), 1),
              s("span", m2, m(M.value.current) + "/" + m(M.value.total), 1)
            ]),
            s("div", f2, [
              s("div", {
                class: "progress-fill",
                style: Rt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": ee[3] || (ee[3] = (j) => p.value = j),
            placeholder: "🔍 Search all indexed models..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          d.value || M.value ? (n(), R($s, {
            key: 0,
            message: M.value ? "Indexing models..." : "Loading workspace models..."
          }, null, 8, ["message"])) : f.value ? (n(), R(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: ne
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            u.value.length ? (n(), R(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(u.value.length) + " models • " + m(G(T.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, ge(z.value, (j) => (n(), R(It, {
              key: j.type,
              title: j.type.toUpperCase(),
              count: j.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(j.models, (K) => (n(), R(Ft, {
                  key: K.sha256 || K.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...ee[12] || (ee[12] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(m(K.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(G(K.size)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Hash:",
                      value: K.hash ? K.hash.substring(0, 16) : "N/A",
                      mono: !0,
                      "value-variant": "hash",
                      "label-min-width": "auto"
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (ke) => L(K)
                    }, {
                      default: h(() => [...ee[13] || (ee[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 2
            }, 1032, ["title", "count"]))), 128)),
            D.value.length ? y("", !0) : (n(), R(rs, {
              key: 1,
              icon: "📭",
              message: p.value ? `No models match '${p.value}'` : "No models in workspace index"
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
        show: w.value,
        title: "About Workspace Model Index",
        onClose: ee[4] || (ee[4] = (j) => w.value = !1)
      }, {
        content: h(() => [...ee[14] || (ee[14] = [
          s("p", null, [
            $(" Content-addressable model storage shared across "),
            s("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), R(cc, {
        key: 0,
        identifier: g.value,
        onClose: ee[5] || (ee[5] = (j) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      _.value ? (n(), R($t, {
        key: 1,
        title: "Change Models Directory",
        size: "md",
        "overlay-z-index": 10010,
        onClose: ee[8] || (ee[8] = (j) => _.value = !1)
      }, {
        body: h(() => [
          s("div", v2, [
            s("div", p2, [
              ee[15] || (ee[15] = s("label", null, "Current Directory", -1)),
              s("code", g2, m(x.value || "Not set"), 1)
            ]),
            s("div", h2, [
              ee[16] || (ee[16] = s("label", null, "New Directory Path", -1)),
              b(bt, {
                modelValue: C.value,
                "onUpdate:modelValue": ee[6] || (ee[6] = (j) => C.value = j),
                placeholder: "/path/to/models"
              }, null, 8, ["modelValue"])
            ]),
            ee[17] || (ee[17] = s("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
          ])
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: ee[7] || (ee[7] = (j) => _.value = !1)
          }, {
            default: h(() => [...ee[18] || (ee[18] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: "primary",
            disabled: !C.value.trim() || S.value,
            loading: S.value,
            onClick: ce
          }, {
            default: h(() => [
              $(m(S.value ? "Indexing..." : "Change Directory"), 1)
            ]),
            _: 1
          }, 8, ["disabled", "loading"])
        ]),
        _: 1
      })) : y("", !0),
      b(uc, {
        show: I.value,
        onClose: ee[9] || (ee[9] = (j) => I.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), w2 = /* @__PURE__ */ xe(y2, [["__scopeId", "data-v-9fca048b"]]), _2 = { class: "node-details" }, k2 = { class: "status-row" }, b2 = {
  key: 0,
  class: "detail-row"
}, $2 = { class: "value" }, C2 = { class: "detail-row" }, x2 = { class: "value" }, S2 = {
  key: 1,
  class: "detail-row"
}, I2 = { class: "value mono" }, E2 = {
  key: 2,
  class: "detail-row"
}, T2 = ["href"], M2 = {
  key: 3,
  class: "detail-row"
}, P2 = { class: "value mono small" }, R2 = { class: "detail-row" }, L2 = {
  key: 0,
  class: "value"
}, D2 = {
  key: 1,
  class: "workflow-list"
}, N2 = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), R($t, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: h(() => [
        s("div", _2, [
          s("div", k2, [
            d[2] || (d[2] = s("span", { class: "label" }, "Status:", -1)),
            s("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", b2, [
            d[3] || (d[3] = s("span", { class: "label" }, "Version:", -1)),
            s("span", $2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          s("div", C2, [
            d[4] || (d[4] = s("span", { class: "label" }, "Source:", -1)),
            s("span", x2, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", S2, [
            d[5] || (d[5] = s("span", { class: "label" }, "Registry ID:", -1)),
            s("span", I2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", E2, [
            d[7] || (d[7] = s("span", { class: "label" }, "Repository:", -1)),
            s("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
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
            ], 8, T2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", M2, [
            d[8] || (d[8] = s("span", { class: "label" }, "Download URL:", -1)),
            s("span", P2, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = s("div", { class: "section-divider" }, null, -1)),
          s("div", R2, [
            d[9] || (d[9] = s("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", L2, " Not used in any workflows ")) : (n(), i("div", D2, [
              (n(!0), i(B, null, ge(e.node.used_in_workflows, (v) => (n(), i("span", {
                key: v,
                class: "workflow-tag"
              }, m(v), 1))), 128))
            ]))
          ])
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[0] || (d[0] = (v) => a("close"))
        }, {
          default: h(() => [...d[11] || (d[11] = [
            $(" Close ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), U2 = /* @__PURE__ */ xe(N2, [["__scopeId", "data-v-b342f626"]]), O2 = { class: "dialog-message" }, A2 = {
  key: 0,
  class: "dialog-details"
}, z2 = {
  key: 1,
  class: "dialog-warning"
}, F2 = /* @__PURE__ */ be({
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
    return (t, o) => (n(), R($t, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => t.$emit("cancel"))
    }, {
      body: h(() => [
        s("p", O2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", A2, [
          (n(!0), i(B, null, ge(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", z2, [
          o[4] || (o[4] = s("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("cancel"))
        }, {
          default: h(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => t.$emit("secondary"))
        }, {
          default: h(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [
            $(m(e.confirmLabel), 1)
          ]),
          _: 1
        }, 8, ["variant"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Tl = /* @__PURE__ */ xe(F2, [["__scopeId", "data-v-3670b9f5"]]), V2 = { class: "mismatch-warning" }, B2 = { class: "version-mismatch" }, W2 = { class: "version-actual" }, G2 = { class: "version-expected" }, j2 = { style: { color: "var(--cg-color-warning)" } }, H2 = { style: { color: "var(--cg-color-warning)" } }, q2 = {
  key: 0,
  class: "community-status-badge"
}, K2 = { key: 0 }, J2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Q2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, Y2 = { class: "criticality-control" }, X2 = ["value", "disabled", "onChange"], Z2 = /* @__PURE__ */ be({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
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
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), x = k(null), C = k(/* @__PURE__ */ new Set()), S = k(/* @__PURE__ */ new Set()), I = k(null), M = P(() => {
      if (!g.value.trim()) return f.value.nodes;
      const ve = g.value.toLowerCase();
      return f.value.nodes.filter(
        (le) => {
          var E, A;
          return le.name.toLowerCase().includes(ve) || ((E = le.description) == null ? void 0 : E.toLowerCase().includes(ve)) || ((A = le.repository) == null ? void 0 : A.toLowerCase().includes(ve));
        }
      );
    }), T = P(
      () => M.value.filter((ve) => ve.installed && ve.tracked)
    ), D = P(
      () => M.value.filter((ve) => !ve.installed && ve.tracked && !ve.issue_type)
    ), z = P(
      () => M.value.filter((ve) => ve.installed && !ve.tracked)
    ), G = P(
      () => M.value.filter((ve) => ve.issue_type === "version_gated")
    ), L = P(
      () => M.value.filter((ve) => ve.issue_type === "uninstallable")
    );
    function q(ve) {
      return ve.registry_id || ve.name;
    }
    function ce(ve) {
      return C.value.has(q(ve));
    }
    async function ne(ve, le) {
      const E = ve.registry_id;
      if (!E) {
        a("toast", `Node "${ve.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !ve.repository) {
        a("toast", `Node "${ve.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: E,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && ve.repository && (A.repository = ve.repository, A.install_source = "git"), await d(A), C.value.add(q(ve)), a("toast", `✓ Queued install for "${ve.name}"`, "success");
    }
    function Y(ve) {
      return {
        registry: "Registry",
        git: "Git",
        development: "Dev",
        unknown: "Unknown",
        untracked: "Untracked"
      }[ve] || ve;
    }
    const we = P(() => o.versionMismatches.length > 0);
    function ee(ve) {
      return !ve.used_in_workflows || ve.used_in_workflows.length === 0 ? "Not used in any workflows" : ve.used_in_workflows.length === 1 ? ve.used_in_workflows[0] : `${ve.used_in_workflows.length} workflows`;
    }
    function j(ve) {
      return ve.criticality === "optional" ? "optional" : "required";
    }
    function K(ve) {
      return S.value.has(ve.name);
    }
    async function ke(ve, le) {
      const E = le.target, A = j(ve), re = E.value;
      if (re !== A) {
        S.value = new Set(S.value).add(ve.name), ve.criticality = re;
        try {
          const Ee = await v(ve.name, re);
          if (Ee.status !== "success") {
            ve.criticality = A, a("toast", Ee.message || `Failed to update "${ve.name}" criticality`, "error");
            return;
          }
          a("toast", `Marked "${ve.name}" as ${re}`, "success");
        } catch (Ee) {
          ve.criticality = A, E.value = A, a("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
        } finally {
          const Ee = new Set(S.value);
          Ee.delete(ve.name), S.value = Ee;
        }
      }
    }
    function se(ve) {
      return ve.issue_type === "version_gated" ? "Requires newer ComfyUI version" : "Blocked";
    }
    function fe(ve) {
      return ve.issue_type === "version_gated" ? "Upgrade ComfyUI to a version that includes this builtin node." : "Manual intervention required.";
    }
    function U(ve) {
      return ve.registry_id ? `Community-mapped package: ${ve.registry_id}` : "Community-mapped package";
    }
    function me(ve) {
      return "Found via community mapping. Install from registry by default, or use git when needed.";
    }
    function Pe(ve) {
      x.value = ve;
    }
    function ye() {
      a("open-node-manager");
    }
    function Z(ve) {
      I.value = {
        title: "Track as Development Node",
        message: `Track "${ve}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await r(ve);
            le.status === "success" ? (a("toast", `✓ Node "${ve}" tracked as development`, "success"), await Re()) : a("toast", `Failed to track node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error tracking node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function Q(ve) {
      I.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ve}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await u(ve);
            le.status === "success" ? (a("toast", `✓ Node "${ve}" removed`, "success"), await Re()) : a("toast", `Failed to remove node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error removing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function $e(ve) {
      I.value = {
        title: "Install Missing Node",
        message: `Install "${ve}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0;
            const le = await c(ve);
            le.status === "success" ? (a("toast", `✓ Node "${ve}" installed`, "success"), await Re()) : a("toast", `Failed to install node: ${le.message || "Unknown error"}`, "error");
          } catch (le) {
            a("toast", `Error installing node: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function te(ve) {
      I.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ve.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ne(ve, "registry");
          } catch (le) {
            a("toast", `Error queueing install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
          } finally {
            p.value = !1;
          }
        }
      };
    }
    function oe(ve) {
      I.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ve.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          I.value = null;
          try {
            p.value = !0, await ne(ve, "git");
          } catch (le) {
            a("toast", `Error queueing git install: ${le instanceof Error ? le.message : "Unknown error"}`, "error");
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
      } catch (ve) {
        w.value = ve instanceof Error ? ve.message : "Failed to load nodes";
      } finally {
        p.value = !1;
      }
    }
    return at(Re), (ve, le) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (E) => _.value = !0)
          }, {
            actions: h(() => [
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ye
              }, {
                default: h(() => [...le[7] || (le[7] = [
                  $(" Browse Nodes ", -1)
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
            "onUpdate:modelValue": le[1] || (le[1] = (E) => g.value = E),
            placeholder: "Search custom nodes..."
          }, null, 8, ["modelValue"])
        ]),
        content: h(() => [
          p.value ? (n(), R($s, {
            key: 0,
            message: "Loading nodes..."
          })) : w.value ? (n(), R(Cs, {
            key: 1,
            message: w.value,
            retry: !0,
            onRetry: Re
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            we.value ? (n(), R(It, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                s("div", V2, [
                  le[8] || (le[8] = s("span", { class: "warning-icon" }, "⚠", -1)),
                  s("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(B, null, ge(e.versionMismatches, (E) => (n(), R(Ft, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", B2, [
                      s("span", W2, m(E.actual), 1),
                      le[10] || (le[10] = s("span", { class: "version-arrow" }, "→", -1)),
                      s("span", G2, m(E.expected), 1)
                    ])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "warning",
                      size: "sm",
                      onClick: le[2] || (le[2] = (A) => a("repair-environment"))
                    }, {
                      default: h(() => [...le[11] || (le[11] = [
                        $(" Repair ", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            G.value.length ? (n(), R(It, {
              key: 1,
              title: "BLOCKED",
              count: G.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(G.value, (E) => (n(), R(Ft, {
                  key: `blocked-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    $("⛔", -1)
                  ])]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", j2, m(se(E)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: E.issue_guidance || fe(E)
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
                      onClick: (A) => Pe(E)
                    }, {
                      default: h(() => [...le[13] || (le[13] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            L.value.length ? (n(), R(It, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(L.value, (E) => (n(), R(Ft, {
                  key: `community-${E.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    s("span", H2, m(U(E)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: E.issue_guidance || me(E)
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
                      onClick: (A) => Pe(E)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(E) ? (n(), i("span", q2, "Queued")) : (n(), i(B, { key: 1 }, [
                      E.registry_id ? (n(), R(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => te(E)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      E.repository ? (n(), R(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => oe(E)
                      }, {
                        default: h(() => [...le[17] || (le[17] = [
                          $(" Install via Git ", -1)
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
            z.value.length ? (n(), R(It, {
              key: 3,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(z.value, (E) => (n(), R(Ft, {
                  key: E.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[18] || (le[18] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
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
                      onClick: (A) => Pe(E)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => Z(E.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => Q(E.name)
                    }, {
                      default: h(() => [...le[22] || (le[22] = [
                        $(" Remove ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            T.value.length ? (n(), R(It, {
              key: 4,
              title: "INSTALLED",
              count: T.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(T.value, (E) => (n(), R(Ft, {
                  key: E.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(m(E.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [
                    E.version ? (n(), i("span", K2, m(E.source === "development" ? "" : "v") + m(E.version), 1)) : (n(), i("span", J2, "version unknown")),
                    s("span", Q2, " • " + m(Y(E.source)), 1)
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
                      onClick: (A) => Pe(E)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    s("label", Y2, [
                      le[25] || (le[25] = s("span", null, "Readiness", -1)),
                      s("select", {
                        class: "criticality-select",
                        value: j(E),
                        disabled: K(E),
                        onChange: (A) => ke(E, A)
                      }, [...le[24] || (le[24] = [
                        s("option", { value: "required" }, "Required", -1),
                        s("option", { value: "optional" }, "Optional", -1)
                      ])], 40, X2)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), R(It, {
              key: 5,
              title: "MISSING",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(D.value, (E) => (n(), R(Ft, {
                  key: E.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(m(E.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
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
                      onClick: (A) => Pe(E)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => $e(E.name)
                    }, {
                      default: h(() => [...le[29] || (le[29] = [
                        $(" Install ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !T.value.length && !D.value.length && !G.value.length && !L.value.length && !z.value.length ? (n(), R(rs, {
              key: 6,
              icon: "📭",
              message: g.value ? `No nodes match '${g.value}'` : "No custom nodes found."
            }, null, 8, ["message"])) : y("", !0)
          ], 64))
        ]),
        _: 1
      }),
      b(Yt, {
        show: _.value,
        title: "About Custom Nodes",
        onClose: le[4] || (le[4] = (E) => _.value = !1)
      }, {
        content: h(() => [...le[30] || (le[30] = [
          s("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            s("br"),
            s("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            s("br"),
            s("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            s("br"),
            s("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            s("br"),
            s("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: le[3] || (le[3] = (E) => _.value = !1)
          }, {
            default: h(() => [...le[31] || (le[31] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      x.value ? (n(), R(U2, {
        key: 0,
        node: x.value,
        onClose: le[5] || (le[5] = (E) => x.value = null)
      }, null, 8, ["node"])) : y("", !0),
      I.value ? (n(), R(Tl, {
        key: 1,
        title: I.value.title,
        message: I.value.message,
        warning: I.value.warning,
        "confirm-label": I.value.confirmLabel,
        destructive: I.value.destructive,
        onConfirm: I.value.onConfirm,
        onCancel: le[6] || (le[6] = (E) => I.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), e$ = /* @__PURE__ */ xe(Z2, [["__scopeId", "data-v-edfa1c86"]]), t$ = { class: "setting-info" }, s$ = { class: "setting-label" }, o$ = {
  key: 0,
  class: "required-marker"
}, n$ = {
  key: 0,
  class: "setting-description"
}, a$ = { class: "setting-control" }, l$ = /* @__PURE__ */ be({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      s("div", t$, [
        s("div", s$, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", o$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", n$, m(e.description), 1)) : y("", !0)
      ]),
      s("div", a$, [
        ot(t.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ xe(l$, [["__scopeId", "data-v-3e106b1c"]]), i$ = ["type", "value", "placeholder", "disabled"], r$ = /* @__PURE__ */ be({
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
    const a = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return at(() => {
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
    }), (u, d) => (n(), i("input", {
      ref_key: "inputRef",
      ref: r,
      type: e.type,
      value: e.modelValue,
      placeholder: e.placeholder,
      disabled: e.disabled,
      class: Be(["text-input", { error: e.hasError, monospace: e.monospace }]),
      onInput: c,
      onKeyup: [
        d[0] || (d[0] = ds((v) => u.$emit("enter"), ["enter"])),
        d[1] || (d[1] = ds((v) => u.$emit("escape"), ["escape"]))
      ],
      onFocus: d[2] || (d[2] = (v) => u.$emit("focus")),
      onBlur: d[3] || (d[3] = (v) => u.$emit("blur"))
    }, null, 42, i$));
  }
}), yo = /* @__PURE__ */ xe(r$, [["__scopeId", "data-v-0380d08f"]]), c$ = { class: "toggle" }, u$ = ["checked", "disabled"], d$ = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", c$, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, u$),
      o[1] || (o[1] = s("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Si = /* @__PURE__ */ xe(d$, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function dc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function m$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function f$() {
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
  function a() {
    const l = e();
    return l !== null && l.length > 0;
  }
  return {
    getToken: e,
    setToken: t,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: dc,
    isRemoteHttps: m$
  };
}
const v$ = { class: "workspace-settings-content" }, p$ = { class: "settings-section" }, g$ = { class: "path-setting" }, h$ = { class: "path-value" }, y$ = { class: "path-setting" }, w$ = { class: "path-value" }, _$ = { class: "settings-section" }, k$ = { class: "token-setting" }, b$ = {
  key: 0,
  class: "token-warning"
}, $$ = { class: "token-actions" }, C$ = { class: "settings-section" }, x$ = { class: "settings-section" }, S$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: t, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = f$(), g = k(!1), _ = k(null), x = k(null), C = k(null), S = k(null), I = k(""), M = k(""), T = k(""), D = k(""), z = k(!1), G = k(!1), L = k(!1), q = k(""), ce = k(!1), ne = k(!1), Y = k(null), we = k(!1), ee = k(!0);
    function j($e) {
      return $e.join(" ");
    }
    function K($e) {
      return $e.trim() ? $e.trim().split(/\s+/) : [];
    }
    const ke = P(() => {
      if (!S.value) return !1;
      const $e = z.value, te = G.value, oe = L.value, Re = D.value !== j(S.value.comfyui_extra_args || []);
      return $e || te || oe || Re;
    }), se = P(() => w());
    async function fe() {
      var $e;
      g.value = !0, _.value = null;
      try {
        C.value = await r(a.workspacePath || void 0), S.value = { ...C.value }, I.value = C.value.civitai_api_key || "", M.value = C.value.huggingface_token || "", D.value = j(C.value.comfyui_extra_args || []), T.value = v() || "", q.value = T.value, z.value = !1, G.value = !1, L.value = !1, Y.value = null;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = te !== "false", ee.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Re = ($e = (await u()).remotes) == null ? void 0 : $e.find((ve) => ve.name === "origin");
          ce.value = !!(Re && dc(Re.url));
        } catch {
          ce.value = !1;
        }
      } catch (te) {
        _.value = te instanceof Error ? te.message : "Failed to load settings";
      } finally {
        g.value = !1;
      }
    }
    async function U() {
      var $e;
      x.value = null;
      try {
        const te = {};
        z.value && (te.civitai_api_key = I.value || null), G.value && (te.huggingface_token = M.value || null), D.value !== j((($e = S.value) == null ? void 0 : $e.comfyui_extra_args) || []) && (te.comfyui_extra_args = K(D.value)), await c(te, a.workspacePath || void 0), L.value && (T.value ? f(T.value) : p()), await fe(), x.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          x.value = null;
        }, 3e3);
      } catch (te) {
        const oe = te instanceof Error ? te.message : "Failed to save settings";
        x.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function me() {
      S.value && (I.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", D.value = j(S.value.comfyui_extra_args || []), T.value = q.value, z.value = !1, G.value = !1, L.value = !1, Y.value = null, x.value = null);
    }
    async function Pe() {
      if (T.value) {
        ne.value = !0, Y.value = null;
        try {
          const $e = await d(T.value);
          Y.value = {
            type: $e.status === "success" ? "success" : "error",
            message: $e.message
          };
        } catch ($e) {
          Y.value = {
            type: "error",
            message: $e instanceof Error ? $e.message : "Connection test failed"
          };
        } finally {
          ne.value = !1;
        }
      }
    }
    function ye() {
      T.value = "", L.value = !0, Y.value = null;
    }
    function Z($e) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String($e)), console.log("[ComfyGit] Auto-refresh setting saved:", $e);
    }
    function Q($e) {
      $e ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", $e ? "enabled" : "disabled");
    }
    return t({
      saveSettings: U,
      resetSettings: me,
      hasChanges: ke,
      loadSettings: fe
    }), at(fe), ($e, te) => (n(), i("div", v$, [
      g.value ? (n(), R($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), R(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: fe
      }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
        b(It, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Re;
            return [
              s("div", p$, [
                s("div", g$, [
                  te[9] || (te[9] = s("div", { class: "path-label" }, "Workspace Root", -1)),
                  te[10] || (te[10] = s("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  s("div", h$, m(((oe = C.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                s("div", y$, [
                  te[11] || (te[11] = s("div", { class: "path-label" }, "Models Directory", -1)),
                  te[12] || (te[12] = s("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  s("div", w$, m(((Re = C.value) == null ? void 0 : Re.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(It, { title: "API CREDENTIALS" }, {
          default: h(() => [
            s("div", _$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: I.value,
                    "onUpdate:modelValue": te[0] || (te[0] = (oe) => I.value = oe),
                    type: "password",
                    placeholder: "Enter CivitAI API key...",
                    style: { minWidth: "300px" },
                    onInput: te[1] || (te[1] = (oe) => z.value = !0)
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
                    modelValue: M.value,
                    "onUpdate:modelValue": te[2] || (te[2] = (oe) => M.value = oe),
                    type: "password",
                    placeholder: "Enter HuggingFace token...",
                    style: { minWidth: "300px" },
                    onInput: te[3] || (te[3] = (oe) => G.value = !0)
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
                  s("div", k$, [
                    b(yo, {
                      modelValue: T.value,
                      "onUpdate:modelValue": te[4] || (te[4] = (oe) => T.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: te[5] || (te[5] = (oe) => L.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (n(), i("div", b$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    te[15] || (te[15] = s("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    s("div", $$, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: ne.value,
                        disabled: !T.value || ne.value,
                        onClick: Pe
                      }, {
                        default: h(() => [...te[13] || (te[13] = [
                          $(" Test Connection ", -1)
                        ])]),
                        _: 1
                      }, 8, ["loading", "disabled"]),
                      se.value ? (n(), R(Me, {
                        key: 0,
                        variant: "ghost",
                        size: "xs",
                        onClick: ye
                      }, {
                        default: h(() => [...te[14] || (te[14] = [
                          $(" Clear ", -1)
                        ])]),
                        _: 1
                      })) : y("", !0)
                    ]),
                    Y.value ? (n(), i("div", {
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
            s("div", C$, [
              b(vo, {
                label: "Extra Startup Arguments",
                description: "Additional command-line arguments passed to ComfyUI on startup (e.g., --lowvram, --listen 0.0.0.0). Takes effect on next restart."
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: D.value,
                    "onUpdate:modelValue": te[6] || (te[6] = (oe) => D.value = oe),
                    placeholder: "--lowvram --listen 0.0.0.0",
                    style: { minWidth: "300px" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              te[16] || (te[16] = s("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                s("code", null, "--lowvram"),
                $(", "),
                s("code", null, "--highvram"),
                $(", "),
                s("code", null, "--listen 0.0.0.0"),
                $(", "),
                s("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(It, { title: "UI SETTINGS" }, {
          default: h(() => [
            s("div", x$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Si, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      te[7] || (te[7] = (oe) => we.value = oe),
                      Z
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
                      te[8] || (te[8] = (oe) => ee.value = oe),
                      Q
                    ]
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }),
        x.value ? (n(), R(Il, {
          key: 0,
          variant: (x.value.type === "success", "compact")
        }, {
          default: h(() => [
            s("span", {
              style: Rt({ color: x.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(x.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), mc = /* @__PURE__ */ xe(S$, [["__scopeId", "data-v-f1bdc574"]]), I$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const t = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(Ot, null, {
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
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = t.value) != null && c.hasChanges ? (n(), R(Me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = t.value) == null ? void 0 : d.resetSettings();
                })
              }, {
                default: h(() => [...l[3] || (l[3] = [
                  $(" Reset ", -1)
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
}), E$ = { class: "env-title" }, T$ = {
  key: 0,
  class: "current-badge"
}, M$ = {
  key: 0,
  class: "branch-info"
}, P$ = /* @__PURE__ */ be({
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
    return (t, o) => (n(), R(Ft, {
      status: e.isCurrent ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        s("div", E$, [
          s("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", T$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", M$, [
          o[0] || (o[0] = s("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
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
          e.lastUsed && e.showLastUsed ? (n(), R(_t, {
            key: 0,
            label: "Last used:",
            value: e.lastUsed
          }, null, 8, ["value"])) : y("", !0)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["status"]));
  }
}), R$ = /* @__PURE__ */ xe(P$, [["__scopeId", "data-v-9231917a"]]), L$ = { class: "env-details" }, D$ = { class: "status-row" }, N$ = {
  key: 0,
  class: "detail-row"
}, U$ = { class: "value mono" }, O$ = {
  key: 1,
  class: "detail-row"
}, A$ = { class: "value mono small" }, z$ = { class: "collapsible-section" }, F$ = { class: "value" }, V$ = {
  key: 0,
  class: "collapsible-body"
}, B$ = { class: "item-list" }, W$ = { class: "item-name" }, G$ = { class: "item-name" }, j$ = { class: "item-name" }, H$ = { class: "item-name" }, q$ = {
  key: 0,
  class: "empty-list"
}, K$ = { class: "collapsible-section" }, J$ = { class: "value" }, Q$ = {
  key: 0,
  class: "collapsible-body"
}, Y$ = { class: "item-list" }, X$ = { class: "item-name" }, Z$ = {
  key: 0,
  class: "item-meta"
}, eC = {
  key: 0,
  class: "empty-list"
}, tC = { class: "collapsible-section" }, sC = { class: "value" }, oC = {
  key: 0,
  class: "missing-count"
}, nC = {
  key: 0,
  class: "collapsible-body"
}, aC = { class: "item-list" }, lC = { class: "model-row" }, iC = { class: "item-name" }, rC = { class: "model-meta" }, cC = { class: "item-meta" }, uC = {
  key: 0,
  class: "item-meta"
}, dC = {
  key: 0,
  class: "empty-list"
}, mC = {
  key: 2,
  class: "section-divider"
}, fC = {
  key: 3,
  class: "detail-row"
}, vC = { class: "value" }, pC = { class: "footer-actions" }, gC = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(/* @__PURE__ */ new Set());
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
    return (d, v) => (n(), R($t, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, x, C, S, I, M, T, D, z, G;
        return [
          s("div", L$, [
            s("div", D$, [
              v[7] || (v[7] = s("span", { class: "label" }, "Status:", -1)),
              s("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", N$, [
              v[8] || (v[8] = s("span", { class: "label" }, "Branch:", -1)),
              s("span", U$, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", O$, [
              v[9] || (v[9] = s("span", { class: "label" }, "Path:", -1)),
              s("span", A$, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = s("div", { class: "section-divider" }, null, -1)),
            s("div", z$, [
              s("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (L) => r("workflows"))
              }, [
                v[10] || (v[10] = s("span", { class: "label" }, "Workflows:", -1)),
                s("span", F$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", V$, [
                s("div", B$, [
                  (n(!0), i(B, null, ge(e.detail.workflows.synced, (L) => (n(), i("div", {
                    key: "synced-" + L,
                    class: "list-item"
                  }, [
                    s("span", W$, m(L), 1),
                    v[11] || (v[11] = s("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.new, (L) => (n(), i("div", {
                    key: "new-" + L,
                    class: "list-item"
                  }, [
                    s("span", G$, m(L), 1),
                    v[12] || (v[12] = s("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.modified, (L) => (n(), i("div", {
                    key: "mod-" + L,
                    class: "list-item"
                  }, [
                    s("span", j$, m(L), 1),
                    v[13] || (v[13] = s("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.deleted, (L) => (n(), i("div", {
                    key: "del-" + L,
                    class: "list-item"
                  }, [
                    s("span", H$, m(L), 1),
                    v[14] || (v[14] = s("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", q$, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            s("div", K$, [
              s("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (L) => r("nodes"))
              }, [
                v[15] || (v[15] = s("span", { class: "label" }, "Nodes:", -1)),
                s("span", J$, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (x = e.detail) != null && x.nodes && l.value.has("nodes") ? (n(), i("div", Q$, [
                s("div", Y$, [
                  (n(!0), i(B, null, ge(e.detail.nodes, (L) => (n(), i("div", {
                    key: L.name,
                    class: "list-item"
                  }, [
                    s("span", X$, m(L.name), 1),
                    L.version ? (n(), i("span", Z$, m(L.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", eC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            s("div", tC, [
              s("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (L) => r("models"))
              }, [
                v[16] || (v[16] = s("span", { class: "label" }, "Models:", -1)),
                s("span", sC, [
                  $(m(((C = e.detail) == null ? void 0 : C.model_count) ?? e.environment.model_count) + " ", 1),
                  (I = (S = e.detail) == null ? void 0 : S.models) != null && I.missing.length ? (n(), i("span", oC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (M = e.detail) != null && M.models ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (T = e.detail) != null && T.models && l.value.has("models") ? (n(), i("div", nC, [
                s("div", aC, [
                  (n(!0), i(B, null, ge(e.detail.models.missing, (L) => (n(), i("div", {
                    key: L.filename,
                    class: "list-item model-item"
                  }, [
                    s("div", lC, [
                      s("span", iC, m(L.filename), 1),
                      s("span", {
                        class: Be(["criticality-badge", L.criticality])
                      }, m(L.criticality), 3)
                    ]),
                    s("div", rC, [
                      s("span", cC, m(L.category), 1),
                      L.workflow_names.length ? (n(), i("span", uC, " used by: " + m(L.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", dC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", mC)) : y("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (n(), i("div", fC, [
              v[17] || (v[17] = s("span", { class: "label" }, "Created:", -1)),
              s("span", vC, m(u(((G = e.detail) == null ? void 0 : G.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        s("div", pC, [
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: v[3] || (v[3] = (f) => a("export", e.environment.name))
          }, {
            default: h(() => [...v[19] || (v[19] = [
              $(" Export ", -1)
            ])]),
            _: 1
          }),
          e.canDelete ? (n(), R(De, {
            key: 0,
            variant: "danger",
            size: "sm",
            onClick: v[4] || (v[4] = (f) => a("delete", e.environment.name))
          }, {
            default: h(() => [...v[20] || (v[20] = [
              $(" Delete ", -1)
            ])]),
            _: 1
          })) : y("", !0),
          v[22] || (v[22] = s("div", { class: "footer-spacer" }, null, -1)),
          b(De, {
            variant: "secondary",
            size: "sm",
            onClick: v[5] || (v[5] = (f) => a("close"))
          }, {
            default: h(() => [...v[21] || (v[21] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), hC = /* @__PURE__ */ xe(gC, [["__scopeId", "data-v-750671f5"]]), fc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], vc = "3.12", Ml = [
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
], pc = "auto", yC = { class: "progress-bar" }, wC = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const t = e, o = P(() => `${Math.max(0, Math.min(100, t.progress))}%`);
    return (a, l) => (n(), i("div", yC, [
      s("div", {
        class: Be(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), gc = /* @__PURE__ */ xe(wC, [["__scopeId", "data-v-1beb0512"]]), _C = { class: "task-progress" }, kC = { class: "progress-info" }, bC = { class: "progress-percentage" }, $C = { class: "progress-message" }, CC = {
  key: 0,
  class: "progress-steps"
}, xC = { class: "step-icon" }, SC = { class: "step-label" }, IC = /* @__PURE__ */ be({
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
    function a(l) {
      const r = o(l);
      return r === "completed" ? "✓" : r === "active" ? "⟳" : "○";
    }
    return (l, r) => (n(), i("div", _C, [
      b(gc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      s("div", kC, [
        s("span", bC, m(e.progress) + "%", 1),
        s("span", $C, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", CC, [
        (n(!0), i(B, null, ge(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          s("span", xC, m(a(c.id)), 1),
          s("span", SC, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Kn = /* @__PURE__ */ xe(IC, [["__scopeId", "data-v-9d1de66c"]]), EC = {
  key: 0,
  class: "create-env-form"
}, TC = { class: "form-field" }, MC = { class: "input-wrapper" }, PC = {
  key: 0,
  class: "validating-indicator"
}, RC = {
  key: 1,
  class: "valid-indicator"
}, LC = {
  key: 0,
  class: "field-error"
}, DC = { class: "form-field" }, NC = ["value"], UC = { class: "form-field" }, OC = ["disabled"], AC = ["value"], zC = { class: "form-field" }, FC = ["value"], VC = { class: "form-field form-field--checkbox" }, BC = { class: "form-checkbox" }, WC = {
  key: 1,
  class: "create-env-progress"
}, GC = { class: "creating-intro" }, jC = {
  key: 0,
  class: "progress-warning"
}, HC = {
  key: 1,
  class: "create-error"
}, qC = { class: "error-message" }, KC = {
  key: 1,
  class: "footer-status"
}, JC = 10, QC = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: t }) {
    const o = t, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(vc), v = k("latest"), f = k(pc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let x = null, C = 0;
    const S = P(() => !!u.value.trim() && _.value && !w.value && !g.value && !T.value), I = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = k(!1), T = k(!1), D = k({
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
    ], q = k(null);
    ht(u, (se) => {
      _.value = !1, x && (clearTimeout(x), x = null);
      const fe = se.trim();
      if (!fe) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, x = setTimeout(() => {
        ce(fe);
      }, 400);
    });
    async function ce(se, fe = !1) {
      const U = se.trim();
      if (!U)
        return _.value = !1, g.value = !1, w.value = fe ? "Environment name is required" : null, !1;
      const me = ++C;
      g.value = !0;
      try {
        const Pe = await c(U);
        return me !== C ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return me !== C || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === C && (g.value = !1);
      }
    }
    async function ne() {
      x && (clearTimeout(x), x = null), await ce(u.value, !0);
    }
    function Y() {
      T.value || o("close");
    }
    async function we() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (x && (clearTimeout(x), x = null), !!await ce(se, !0)) {
        T.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: se,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(U);
          me.status === "started" ? ee() : me.status === "error" && (D.value = {
            progress: 0,
            message: me.message || "Failed to start creation",
            error: me.message
          });
        } catch (U) {
          D.value = {
            progress: 0,
            message: U instanceof Error ? U.message : "Unknown error",
            error: U instanceof Error ? U.message : "Unknown error"
          };
        }
      }
    }
    function ee() {
      z || (G = 0, z = window.setInterval(async () => {
        try {
          const se = await r();
          G = 0, D.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (j(), o("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (j(), D.value.error = se.error || se.message) : se.state === "idle" && T.value && (j(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          G++, G >= JC && (j(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function j() {
      z && (clearInterval(z), z = null);
    }
    function K() {
      T.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function ke() {
      M.value = !0;
      try {
        I.value = await a();
      } catch (se) {
        console.error("Failed to load ComfyUI releases:", se);
      } finally {
        M.value = !1;
      }
    }
    return at(async () => {
      var se;
      await Pt(), (se = q.value) == null || se.focus(), ke();
    }), Po(() => {
      j(), x && (clearTimeout(x), x = null);
    }), (se, fe) => (n(), R($t, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !T.value,
      onClose: Y
    }, {
      body: h(() => [
        T.value ? (n(), i("div", WC, [
          s("p", GC, [
            fe[12] || (fe[12] = $(" Creating environment ", -1)),
            s("strong", null, m(u.value), 1),
            fe[13] || (fe[13] = $("... ", -1))
          ]),
          b(Kn, {
            progress: D.value.progress,
            message: D.value.message,
            "current-phase": D.value.phase,
            variant: D.value.error ? "error" : "default",
            "show-steps": !0,
            steps: L
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          D.value.error ? y("", !0) : (n(), i("p", jC, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", HC, [
            s("p", qC, m(D.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", EC, [
          s("div", TC, [
            fe[6] || (fe[6] = s("label", { class: "form-label" }, "Name", -1)),
            s("div", MC, [
              Tt(s("input", {
                ref_key: "nameInput",
                ref: q,
                "onUpdate:modelValue": fe[0] || (fe[0] = (U) => u.value = U),
                type: "text",
                class: Be(["form-input", { error: !!w.value, valid: _.value }]),
                placeholder: "my-environment",
                onKeyup: ds(we, ["enter"]),
                onBlur: ne
              }, null, 34), [
                [en, u.value]
              ]),
              g.value ? (n(), i("span", PC, "...")) : _.value ? (n(), i("span", RC, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", LC, m(w.value), 1)) : y("", !0),
            fe[7] || (fe[7] = s("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          s("div", DC, [
            fe[8] || (fe[8] = s("label", { class: "form-label" }, "Python Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": fe[1] || (fe[1] = (U) => d.value = U),
              class: "form-select"
            }, [
              (n(!0), i(B, null, ge(st(fc), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U), 9, NC))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          s("div", UC, [
            fe[9] || (fe[9] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": fe[2] || (fe[2] = (U) => v.value = U),
              class: "form-select",
              disabled: M.value
            }, [
              (n(!0), i(B, null, ge(I.value, (U) => (n(), i("option", {
                key: U.tag_name,
                value: U.tag_name
              }, m(U.name), 9, AC))), 128))
            ], 8, OC), [
              [Co, v.value]
            ])
          ]),
          s("div", zC, [
            fe[10] || (fe[10] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(s("select", {
              "onUpdate:modelValue": fe[3] || (fe[3] = (U) => f.value = U),
              class: "form-select"
            }, [
              (n(!0), i(B, null, ge(st(Ml), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U) + m(U === "auto" ? " (detect GPU)" : ""), 9, FC))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          s("div", VC, [
            s("label", BC, [
              Tt(s("input", {
                type: "checkbox",
                "onUpdate:modelValue": fe[4] || (fe[4] = (U) => p.value = U)
              }, null, 512), [
                [Hn, p.value]
              ]),
              fe[11] || (fe[11] = s("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        T.value ? (n(), i(B, { key: 1 }, [
          D.value.error ? (n(), R(De, {
            key: 0,
            variant: "secondary",
            onClick: K
          }, {
            default: h(() => [...fe[16] || (fe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", KC, " Creating environment... "))
        ], 64)) : (n(), i(B, { key: 0 }, [
          b(De, {
            variant: "primary",
            disabled: !S.value,
            onClick: we
          }, {
            default: h(() => [...fe[14] || (fe[14] = [
              $(" Create ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
            variant: "secondary",
            onClick: fe[5] || (fe[5] = (U) => o("close"))
          }, {
            default: h(() => [...fe[15] || (fe[15] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          })
        ], 64))
      ]),
      _: 1
    }, 8, ["show-close-button"]));
  }
}), YC = /* @__PURE__ */ xe(QC, [["__scopeId", "data-v-3faa3d9b"]]), XC = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: t, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = P(() => [...c.value].sort((z, G) => z.is_current !== G.is_current ? z.is_current ? -1 : 1 : z.name.localeCompare(G.name))), x = P(() => {
      if (!v.value.trim()) return _.value;
      const z = v.value.toLowerCase();
      return _.value.filter(
        (G) => {
          var L;
          return G.name.toLowerCase().includes(z) || ((L = G.current_branch) == null ? void 0 : L.toLowerCase().includes(z));
        }
      );
    });
    function C(z, G) {
      p.value = !1, a("created", z, G);
    }
    function S() {
      p.value = !0;
    }
    async function I(z) {
      w.value = z, g.value = null;
      const G = await r(z.name);
      G && (g.value = G);
    }
    function M(z) {
      w.value = null, g.value = null, a("delete", z);
    }
    function T(z) {
      w.value = null, g.value = null, a("export", z);
    }
    async function D() {
      u.value = !0, d.value = null;
      try {
        c.value = await l();
      } catch (z) {
        d.value = z instanceof Error ? z.message : "Failed to load environments";
      } finally {
        u.value = !1;
      }
    }
    return at(D), t({
      loadEnvironments: D,
      openCreateModal: S
    }), (z, G) => (n(), i(B, null, [
      b(Ot, null, {
        header: h(() => [
          b(At, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: G[1] || (G[1] = (L) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...G[7] || (G[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: G[0] || (G[0] = (L) => z.$emit("import"))
              }, {
                default: h(() => [...G[8] || (G[8] = [
                  $(" Import ", -1)
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
          u.value ? (n(), R($s, {
            key: 0,
            message: "Loading environments..."
          })) : d.value ? (n(), R(Cs, {
            key: 1,
            message: d.value,
            retry: !0,
            onRetry: D
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            x.value.length ? (n(), R(It, {
              key: 0,
              title: "ENVIRONMENTS",
              count: x.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(x.value, (L) => (n(), R(R$, {
                  key: L.name,
                  "environment-name": L.name,
                  "is-current": L.is_current,
                  "current-branch": L.current_branch,
                  "show-last-used": !1
                }, {
                  actions: h(() => [
                    !L.is_current && e.canSwitch ? (n(), R(Me, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: (q) => z.$emit("switch", L.name)
                    }, {
                      default: h(() => [...G[9] || (G[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => I(L)
                    }, {
                      default: h(() => [...G[10] || (G[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z.$emit("export", L.name)
                    }, {
                      default: h(() => [...G[11] || (G[11] = [
                        $(" Export ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 2
                }, 1032, ["environment-name", "is-current", "current-branch"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            x.value.length ? y("", !0) : (n(), R(rs, {
              key: 1,
              icon: "🌍",
              message: v.value ? `No environments match '${v.value}'` : "No environments found. Create one to get started!"
            }, Qt({ _: 2 }, [
              v.value ? void 0 : {
                name: "actions",
                fn: h(() => [
                  e.canCreate ? (n(), R(Me, {
                    key: 0,
                    variant: "primary",
                    onClick: S
                  }, {
                    default: h(() => [...G[12] || (G[12] = [
                      $(" Create Environment ", -1)
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
      b(Yt, {
        show: f.value,
        title: "About Environments",
        onClose: G[4] || (G[4] = (L) => f.value = !1)
      }, {
        content: h(() => [...G[13] || (G[13] = [
          s("p", null, [
            s("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(hC, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: G[5] || (G[5] = (L) => {
          w.value = null, g.value = null;
        }),
        onDelete: M,
        onExport: T
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), R(YC, {
        key: 1,
        onClose: G[6] || (G[6] = (L) => p.value = !1),
        onCreated: C
      })) : y("", !0)
    ], 64));
  }
}), ZC = /* @__PURE__ */ xe(XC, [["__scopeId", "data-v-01163d8c"]]), ex = { class: "file-path" }, tx = { class: "file-path-text" }, sx = ["title"], ox = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, o = k(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(t.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", ex, [
      r[0] || (r[0] = s("span", { class: "file-path-icon" }, "📄", -1)),
      s("code", tx, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, sx)) : y("", !0)
    ]));
  }
}), nx = /* @__PURE__ */ xe(ox, [["__scopeId", "data-v-f0982173"]]), ax = { class: "base-textarea-wrapper" }, lx = ["value", "rows", "placeholder", "disabled", "maxlength"], ix = {
  key: 0,
  class: "base-textarea-count"
}, rx = /* @__PURE__ */ be({
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
    const o = e, a = t;
    function l(r) {
      r.shiftKey || r.ctrlKey || r.metaKey || o.submitOnEnter && (r.preventDefault(), a("submit"));
    }
    return (r, c) => (n(), i("div", ax, [
      s("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ds(yt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ds(yt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ds(l, ["enter"])
        ]
      }, null, 40, lx),
      e.showCharCount && e.maxLength ? (n(), i("div", ix, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ xe(rx, [["__scopeId", "data-v-c6d16c93"]]), cx = ["checked", "disabled"], ux = { class: "base-checkbox-box" }, dx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, mx = {
  key: 0,
  class: "base-checkbox-label"
}, fx = /* @__PURE__ */ be({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      s("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => t.$emit("update:modelValue", a.target.checked))
      }, null, 40, cx),
      s("span", ux, [
        e.modelValue ? (n(), i("svg", dx, [...o[1] || (o[1] = [
          s("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      t.$slots.default ? (n(), i("span", mx, [
        ot(t.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Jn = /* @__PURE__ */ xe(fx, [["__scopeId", "data-v-bf17c831"]]), vx = { class: "export-blocked" }, px = { class: "error-header" }, gx = { class: "error-summary" }, hx = { class: "error-title" }, yx = { class: "error-description" }, wx = { class: "issues-list" }, _x = { class: "issue-message" }, kx = {
  key: 0,
  class: "issue-details"
}, bx = ["onClick"], $x = { class: "issue-fix" }, Cx = {
  key: 0,
  class: "commit-section"
}, xx = {
  key: 0,
  class: "issues-warning"
}, Sx = {
  key: 1,
  class: "commit-error"
}, Ix = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = co({}), f = P(() => o.mode === "publish" ? "Publish" : "Export"), p = P(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = P(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), g = P(
      () => w.value && !u.value
    ), _ = P(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function x(S) {
      const I = o.issues[S];
      return v[S] || I.details.length <= 3 ? I.details : I.details.slice(0, 3);
    }
    async function C() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success")
            a("committed");
          else if (I.status === "blocked") {
            const M = ((S = I.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = I.message || "Commit failed";
        } catch (I) {
          d.value = I instanceof Error ? I.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, I) => (n(), R($t, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: I[4] || (I[4] = (M) => S.$emit("close"))
    }, {
      body: h(() => [
        s("div", vx, [
          s("div", px, [
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
            s("div", gx, [
              s("h3", hx, m(f.value) + " blocked", 1),
              s("p", yx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          s("div", wx, [
            (n(!0), i(B, null, ge(e.issues, (M, T) => (n(), i("div", {
              key: T,
              class: "issue-item"
            }, [
              s("div", _x, m(M.message), 1),
              M.details.length ? (n(), i("div", kx, [
                (n(!0), i(B, null, ge(x(T), (D, z) => (n(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(D), 1))), 128)),
                M.details.length > 3 && !v[T] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (D) => v[T] = !0
                }, " +" + m(M.details.length - 3) + " more ", 9, bx)) : y("", !0)
              ])) : y("", !0),
              s("div", $x, [
                M.type === "uncommitted_workflows" ? (n(), i(B, { key: 0 }, [
                  $(" Commit your workflow changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "uncommitted_git_changes" ? (n(), i(B, { key: 1 }, [
                  $(" Commit your changes before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : M.type === "unresolved_issues" ? (n(), i(B, { key: 2 }, [
                  $(" Resolve all workflow issues before " + m(f.value.toLowerCase()) + "ing. ", 1)
                ], 64)) : y("", !0)
              ])
            ]))), 128))
          ]),
          p.value ? (n(), i("div", Cx, [
            w.value ? (n(), i("div", xx, [
              I[7] || (I[7] = s("div", { class: "warning-header" }, [
                s("span", { class: "warning-icon-badge" }, "!"),
                s("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": I[0] || (I[0] = (M) => u.value = M),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...I[6] || (I[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": I[1] || (I[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: C,
              onCtrlEnter: C
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", Sx, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(B, { key: 0 }, [
          b(De, {
            variant: "secondary",
            onClick: I[2] || (I[2] = (M) => S.$emit("close"))
          }, {
            default: h(() => [...I[8] || (I[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: C
          }, {
            default: h(() => [
              $(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), R(De, {
          key: 1,
          variant: "primary",
          onClick: I[3] || (I[3] = (M) => S.$emit("close"))
        }, {
          default: h(() => [...I[9] || (I[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Ex = /* @__PURE__ */ xe(Ix, [["__scopeId", "data-v-a8990107"]]), Tx = { class: "readiness-body" }, Mx = {
  key: 0,
  class: "issue-section"
}, Px = { class: "section-heading" }, Rx = { class: "issue-list" }, Lx = { class: "issue-main" }, Dx = { class: "issue-name" }, Nx = { class: "issue-meta" }, Ux = { key: 0 }, Ox = { key: 1 }, Ax = ["disabled", "onClick"], zx = {
  key: 1,
  class: "issue-note"
}, Fx = {
  key: 1,
  class: "issue-section"
}, Vx = { class: "section-heading" }, Bx = { class: "issue-list" }, Wx = { class: "issue-main" }, Gx = { class: "issue-name" }, jx = { class: "issue-meta" }, Hx = { class: "issue-reason" }, qx = ["disabled", "onClick"], Kx = {
  key: 1,
  class: "issue-note"
}, Jx = {
  key: 2,
  class: "empty-state"
}, Qx = {
  key: 3,
  class: "error-message"
}, Yx = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: t }) {
    const o = e, a = t, { getModelDetails: l, updateNodeCriticality: r } = ct(), c = k(null), u = k(null), d = k(null), v = k(null), f = P(() => o.warnings.models_without_sources), p = P(() => o.warnings.nodes_without_provenance);
    async function w(C) {
      u.value = C, v.value = null;
      try {
        c.value = await l(C);
      } catch (S) {
        v.value = S instanceof Error ? S.message : `Failed to load ${C}`;
      } finally {
        u.value = null;
      }
    }
    async function g(C) {
      d.value = C, v.value = null;
      try {
        const S = await r(C, "optional");
        if (S.status !== "success") {
          v.value = S.message || `Failed to update ${C}`;
          return;
        }
        a("revalidate");
      } catch (S) {
        v.value = S instanceof Error ? S.message : `Failed to update ${C}`;
      } finally {
        d.value = null;
      }
    }
    function _() {
      c.value = null, a("revalidate");
    }
    function x() {
      a("revalidate");
    }
    return (C, S) => (n(), i(B, null, [
      b($t, {
        size: "lg",
        "overlay-z-index": 10007,
        onClose: S[1] || (S[1] = (I) => a("close"))
      }, {
        header: h(() => [...S[3] || (S[3] = [
          s("div", { class: "readiness-heading" }, [
            s("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
            s("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
          ], -1)
        ])]),
        body: h(() => [
          s("div", Tx, [
            f.value.length ? (n(), i("section", Mx, [
              s("div", Px, [
                S[4] || (S[4] = s("h4", null, "Models Missing Source URLs", -1)),
                s("span", null, m(f.value.length), 1)
              ]),
              s("div", Rx, [
                (n(!0), i(B, null, ge(f.value, (I) => (n(), i("article", {
                  key: I.hash || I.filename,
                  class: "issue-item"
                }, [
                  s("div", Lx, [
                    s("div", Dx, m(I.filename), 1),
                    s("div", Nx, [
                      I.hash ? (n(), i("span", Ux, "hash " + m(I.hash), 1)) : y("", !0),
                      I.workflows.length ? (n(), i("span", Ox, "used by " + m(I.workflows.join(", ")), 1)) : y("", !0),
                      s("span", null, m(I.criticality || "required"), 1)
                    ])
                  ]),
                  I.hash ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: u.value === I.hash,
                    onClick: (M) => w(I.hash)
                  }, m(u.value === I.hash ? "Loading..." : "Add Source"), 9, Ax)) : (n(), i("span", zx, "Missing hash"))
                ]))), 128))
              ])
            ])) : y("", !0),
            p.value.length ? (n(), i("section", Fx, [
              s("div", Vx, [
                S[5] || (S[5] = s("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                s("span", null, m(p.value.length), 1)
              ]),
              s("div", Bx, [
                (n(!0), i(B, null, ge(p.value, (I) => (n(), i("article", {
                  key: I.name,
                  class: "issue-item"
                }, [
                  s("div", Wx, [
                    s("div", Gx, m(I.name), 1),
                    s("div", jx, [
                      s("span", null, m(I.source), 1),
                      s("span", null, m(I.criticality), 1)
                    ]),
                    s("p", Hx, m(I.reason), 1)
                  ]),
                  I.criticality === "required" ? (n(), i("button", {
                    key: 0,
                    class: "issue-action",
                    disabled: d.value === I.name,
                    onClick: (M) => g(I.name)
                  }, m(d.value === I.name ? "Saving..." : "Mark Optional"), 9, qx)) : (n(), i("span", Kx, "Optional warning"))
                ]))), 128))
              ])
            ])) : y("", !0),
            !f.value.length && !p.value.length ? (n(), i("div", Jx, " No reproducibility issues remain. ")) : y("", !0),
            v.value ? (n(), i("div", Qx, m(v.value), 1)) : y("", !0)
          ])
        ]),
        footer: h(() => [
          s("button", {
            class: "primary-action",
            onClick: S[0] || (S[0] = (I) => a("close"))
          }, " Done ")
        ]),
        _: 1
      }),
      c.value ? (n(), R(rc, {
        key: 0,
        model: c.value,
        "overlay-z-index": 10008,
        onClose: S[2] || (S[2] = (I) => c.value = null),
        onSaved: _,
        onHashesComputed: x
      }, null, 8, ["model"])) : y("", !0)
    ], 64));
  }
}), hc = /* @__PURE__ */ xe(Yx, [["__scopeId", "data-v-ba86608d"]]), Xx = { class: "repro-warning" }, Zx = { class: "repro-warning-content" }, e3 = {
  key: 0,
  class: "warning-group"
}, t3 = { class: "warning-list" }, s3 = { key: 0 }, o3 = {
  key: 1,
  class: "warning-group"
}, n3 = { class: "warning-list" }, a3 = { key: 0 }, l3 = /* @__PURE__ */ be({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const t = e, o = P(() => t.warnings.models_without_sources || []), a = P(() => t.warnings.nodes_without_provenance || []), l = P(() => o.value.length), r = P(() => a.value.length), c = P(() => l.value + r.value), u = P(
      () => o.value.slice(0, t.maxItemsPerGroup)
    ), d = P(
      () => a.value.slice(0, t.maxItemsPerGroup)
    ), v = P(
      () => Math.max(0, l.value - u.value.length)
    ), f = P(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (n(), i("div", Xx, [
      w[3] || (w[3] = s("span", { class: "repro-warning-icon" }, "!", -1)),
      s("div", Zx, [
        s("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        s("p", null, m(e.message), 1),
        l.value ? (n(), i("div", e3, [
          w[1] || (w[1] = s("div", { class: "warning-group-label" }, " Models ", -1)),
          s("ul", t3, [
            (n(!0), i(B, null, ge(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (n(), i("li", s3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", o3, [
          w[2] || (w[2] = s("div", { class: "warning-group-label" }, " Nodes ", -1)),
          s("ul", n3, [
            (n(!0), i(B, null, ge(d.value, (g) => (n(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (n(), i("li", a3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        s("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ xe(l3, [["__scopeId", "data-v-11be310d"]]), i3 = { class: "export-card" }, r3 = { class: "export-path-row" }, c3 = {
  key: 1,
  class: "export-warning"
}, u3 = { class: "export-footer-actions" }, d3 = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const t = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), x = P(() => {
      var j;
      return ((j = t.environmentName) == null ? void 0 : j.trim()) || null;
    }), C = P(() => x.value ? `EXPORT ENVIRONMENT: ${x.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = P(() => x.value ? `Environment '${x.value}' has been exported` : "Your environment has been exported"), I = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : G.value ? "Export Anyway" : "Export Environment"), M = P(() => {
      var j;
      return ((j = w.value) == null ? void 0 : j.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), T = P(
      () => M.value.models_without_sources.length
    ), D = P(
      () => {
        var j;
        return ((j = M.value.nodes_without_provenance) == null ? void 0 : j.length) || 0;
      }
    ), z = P(
      () => T.value + D.value
    ), G = P(
      () => {
        var j;
        return !!((j = w.value) != null && j.can_export) && z.value > 0;
      }
    );
    async function L() {
      u.value = !0;
      try {
        const j = x.value ? await l(x.value) : await o();
        return w.value = j, j;
      } catch (j) {
        return f.value = {
          status: "error",
          message: j instanceof Error ? j.message : "Validation failed"
        }, null;
      } finally {
        u.value = !1;
      }
    }
    async function q() {
      f.value = null;
      const j = await L();
      if (j) {
        if (!j.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ce() {
      g.value = !1;
      const j = await L();
      if (j) {
        if (!j.can_export) {
          g.value = !0;
          return;
        }
        await Y();
      }
    }
    async function ne() {
      await L();
    }
    async function Y() {
      d.value = !0;
      try {
        const j = x.value ? await r(x.value, c.value || void 0) : await a(c.value || void 0);
        f.value = j;
      } catch (j) {
        f.value = {
          status: "error",
          message: j instanceof Error ? j.message : "Export failed"
        };
      } finally {
        d.value = !1;
      }
    }
    async function we() {
      var j;
      if ((j = f.value) != null && j.path)
        try {
          await navigator.clipboard.writeText(f.value.path);
        } catch (K) {
          console.error("Failed to copy path:", K);
        }
    }
    async function ee() {
      var j;
      if ((j = f.value) != null && j.path) {
        v.value = !0;
        try {
          const K = await fetch(`/v2/comfygit/download?path=${encodeURIComponent(f.value.path)}`);
          if (!K.ok)
            throw new Error(`Download failed: ${K.statusText}`);
          const ke = await K.blob(), se = URL.createObjectURL(ke), fe = f.value.path.split("/").pop() || "environment-export.tar.gz", U = document.createElement("a");
          U.href = se, U.download = fe, document.body.appendChild(U), U.click(), document.body.removeChild(U), URL.revokeObjectURL(se);
        } catch (K) {
          console.error("Failed to download:", K), alert(`Download failed: ${K instanceof Error ? K.message : "Unknown error"}`);
        } finally {
          v.value = !1;
        }
      }
    }
    return at(() => {
      L();
    }), (j, K) => (n(), i(B, null, [
      b(Ot, null, Qt({
        content: h(() => [
          G.value ? (n(), R(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: M.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: K[1] || (K[1] = (ke) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(It, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              s("div", i3, [
                K[8] || (K[8] = s("div", { class: "export-card-header" }, [
                  s("span", { class: "export-icon" }, "📁"),
                  s("div", { class: "export-header-text" }, [
                    s("div", { class: "export-title" }, "Output Destination"),
                    s("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                s("div", r3, [
                  b(yo, {
                    modelValue: c.value,
                    "onUpdate:modelValue": K[2] || (K[2] = (ke) => c.value = ke),
                    placeholder: "/mnt/c/Users/you/exports/",
                    class: "path-input"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            _: 1
          }),
          f.value ? (n(), R(It, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Ft, {
                status: f.value.status === "success" ? "synced" : "broken"
              }, Qt({
                icon: h(() => [
                  $(m(f.value.status === "success" ? "✓" : "✕"), 1)
                ]),
                title: h(() => [
                  $(m(f.value.status === "success" ? "Export Completed Successfully" : "Export Failed"), 1)
                ]),
                subtitle: h(() => [
                  $(m(f.value.status === "success" ? S.value : f.value.message), 1)
                ]),
                _: 2
              }, [
                f.value.status === "success" ? {
                  name: "details",
                  fn: h(() => [
                    b(_t, { label: "Saved to:" }, {
                      default: h(() => [
                        b(nx, {
                          path: f.value.path || "Unknown location"
                        }, null, 8, ["path"])
                      ]),
                      _: 1
                    }),
                    f.value.models_without_sources !== void 0 ? (n(), R(_t, {
                      key: 0,
                      label: "Models without sources:",
                      value: f.value.models_without_sources.toString()
                    }, null, 8, ["value"])) : y("", !0),
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", c3, [...K[9] || (K[9] = [
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
                      default: h(() => [...K[10] || (K[10] = [
                        s("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          s("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          s("path", { d: "M14 14H2v2h12v-2z" })
                        ], -1),
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["loading"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: we
                    }, {
                      default: h(() => [...K[11] || (K[11] = [
                        $(" Copy Path ", -1)
                      ])]),
                      _: 1
                    }),
                    b(Me, {
                      variant: "ghost",
                      size: "sm",
                      onClick: K[3] || (K[3] = (ke) => f.value = null)
                    }, {
                      default: h(() => [...K[12] || (K[12] = [
                        $(" Dismiss ", -1)
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
          s("div", u3, [
            e.embedded ? (n(), R(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: K[4] || (K[4] = (ke) => j.$emit("close"))
            }, {
              default: h(() => [...K[13] || (K[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])) : y("", !0),
            b(Me, {
              variant: "primary",
              size: "md",
              loading: u.value || d.value,
              disabled: u.value || d.value,
              onClick: q
            }, {
              default: h(() => [
                $(m(I.value), 1)
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
              title: C.value,
              "show-info": !0,
              onInfoClick: K[0] || (K[0] = (ke) => p.value = !0)
            }, null, 8, ["title"])
          ]),
          key: "0"
        }
      ]), 1024),
      b(Yt, {
        show: p.value,
        title: "What Gets Exported",
        onClose: K[5] || (K[5] = (ke) => p.value = !1)
      }, {
        content: h(() => [...K[14] || (K[14] = [
          s("div", { class: "export-info" }, [
            s("div", { class: "info-section" }, [
              s("strong", null, "Included in Export:"),
              s("ul", null, [
                s("li", null, [
                  s("strong", null, "Workflows"),
                  $(" — All workflows in this environment")
                ]),
                s("li", null, [
                  s("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                s("li", null, [
                  s("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                s("li", null, [
                  s("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
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
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (n(), R(Ex, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: K[6] || (K[6] = (ke) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), R(hc, {
        key: 1,
        warnings: w.value.warnings,
        onClose: K[7] || (K[7] = (ke) => _.value = !1),
        onRevalidate: ne
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), m3 = /* @__PURE__ */ xe(d3, [["__scopeId", "data-v-6cf814a2"]]), f3 = { class: "file-input-wrapper" }, v3 = ["accept", "multiple", "disabled"], p3 = /* @__PURE__ */ be({
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
    const a = o, l = k(null);
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
    }), (u, d) => (n(), i("div", f3, [
      s("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, v3),
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
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), g3 = /* @__PURE__ */ xe(p3, [["__scopeId", "data-v-cd192091"]]), h3 = {
  key: 0,
  class: "drop-zone-empty"
}, y3 = { class: "drop-zone-text" }, w3 = { class: "drop-zone-primary" }, _3 = { class: "drop-zone-secondary" }, k3 = { class: "drop-zone-actions" }, b3 = {
  key: 1,
  class: "drop-zone-file"
}, $3 = { class: "file-info" }, C3 = { class: "file-details" }, x3 = { class: "file-name" }, S3 = { class: "file-size" }, I3 = /* @__PURE__ */ be({
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
    const o = t, a = k(!1), l = k(null), r = k(0), c = P(() => l.value !== null), u = P(() => {
      var C;
      return ((C = l.value) == null ? void 0 : C.name) || "";
    }), d = P(() => {
      if (!l.value) return "";
      const C = l.value.size;
      return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KB` : C < 1024 * 1024 * 1024 ? `${(C / (1024 * 1024)).toFixed(1)} MB` : `${(C / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(C) {
      var S;
      C.stopPropagation(), r.value++, (S = C.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(C) {
      C.stopPropagation(), C.dataTransfer && (C.dataTransfer.dropEffect = "copy");
    }
    function p(C) {
      C.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(C) {
      var I;
      C.stopPropagation(), r.value = 0, a.value = !1;
      const S = (I = C.dataTransfer) == null ? void 0 : I.files;
      S && S.length > 0 && _(S[0]);
    }
    function g(C) {
      C.length > 0 && _(C[0]);
    }
    function _(C) {
      l.value = C, o("fileSelected", C);
    }
    function x() {
      l.value = null, o("clear");
    }
    return (C, S) => (n(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: yt(v, ["prevent"]),
      onDragover: yt(f, ["prevent"]),
      onDragleave: yt(p, ["prevent"]),
      onDrop: yt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", b3, [
        s("div", $3, [
          S[1] || (S[1] = s("div", { class: "file-icon" }, "📦", -1)),
          s("div", C3, [
            s("div", x3, m(u.value), 1),
            s("div", S3, m(d.value), 1)
          ])
        ]),
        b(Me, {
          variant: "ghost",
          size: "xs",
          onClick: x,
          title: "Remove file"
        }, {
          default: h(() => [...S[2] || (S[2] = [
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
      ])) : (n(), i("div", h3, [
        S[0] || (S[0] = s("div", { class: "drop-zone-icon" }, [
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
        s("div", y3, [
          s("p", w3, m(e.primaryText), 1),
          s("p", _3, m(e.secondaryText), 1)
        ]),
        s("div", k3, [
          b(g3, {
            accept: e.accept,
            multiple: e.multiple,
            variant: "primary",
            size: "sm",
            onChange: g
          }, {
            default: h(() => [
              $(m(e.buttonText), 1)
            ]),
            _: 1
          }, 8, ["accept", "multiple"])
        ])
      ]))
    ], 34));
  }
}), E3 = /* @__PURE__ */ xe(I3, [["__scopeId", "data-v-0f79cb86"]]), T3 = { class: "commit-hash" }, M3 = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const t = e, o = P(() => t.hash.slice(0, t.length));
    return (a, l) => (n(), i("span", T3, m(o.value), 1));
  }
}), yc = /* @__PURE__ */ xe(M3, [["__scopeId", "data-v-7c333cc6"]]), P3 = { class: "import-preview" }, R3 = { class: "preview-header" }, L3 = {
  key: 0,
  class: "source-env"
}, D3 = { class: "preview-content" }, N3 = { class: "preview-section" }, U3 = { class: "section-header" }, O3 = { class: "section-info" }, A3 = { class: "section-count" }, z3 = {
  key: 0,
  class: "item-list"
}, F3 = { class: "item-name" }, V3 = {
  key: 0,
  class: "item-more"
}, B3 = { class: "preview-section" }, W3 = { class: "section-header" }, G3 = { class: "section-info" }, j3 = { class: "section-count" }, H3 = {
  key: 0,
  class: "item-list"
}, q3 = { class: "item-details" }, K3 = { class: "item-name" }, J3 = { class: "item-meta" }, Q3 = {
  key: 0,
  class: "item-more"
}, Y3 = { class: "preview-section" }, X3 = { class: "section-header" }, Z3 = { class: "section-info" }, eS = { class: "section-count" }, tS = {
  key: 0,
  class: "item-list"
}, sS = { class: "item-name" }, oS = {
  key: 0,
  class: "item-more"
}, nS = {
  key: 0,
  class: "preview-section"
}, aS = { class: "git-info" }, lS = /* @__PURE__ */ be({
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
    const t = e, o = P(() => t.workflows.length), a = P(() => t.models.length), l = P(() => t.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", P3, [
      s("div", R3, [
        b(ns, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", L3, [
          u[1] || (u[1] = $(" From: ", -1)),
          b(tl, null, {
            default: h(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      s("div", D3, [
        s("div", N3, [
          s("div", U3, [
            u[3] || (u[3] = s("div", { class: "section-icon" }, "📄", -1)),
            s("div", O3, [
              u[2] || (u[2] = s("div", { class: "section-title" }, "Workflows", -1)),
              s("div", A3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", z3, [
            (n(!0), i(B, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", F3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", V3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", B3, [
          s("div", W3, [
            u[6] || (u[6] = s("div", { class: "section-icon" }, "🎨", -1)),
            s("div", G3, [
              u[5] || (u[5] = s("div", { class: "section-title" }, "Models", -1)),
              s("div", j3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", H3, [
            (n(!0), i(B, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = s("span", { class: "item-bullet" }, "•", -1)),
              s("div", q3, [
                s("span", K3, m(d.filename), 1),
                s("span", J3, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", Q3, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        s("div", Y3, [
          s("div", X3, [
            u[9] || (u[9] = s("div", { class: "section-icon" }, "🔌", -1)),
            s("div", Z3, [
              u[8] || (u[8] = s("div", { class: "section-title" }, "Custom Nodes", -1)),
              s("div", eS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", tS, [
            (n(!0), i(B, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = s("span", { class: "item-bullet" }, "•", -1)),
              s("span", sS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", oS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", nS, [
          u[11] || (u[11] = s("div", { class: "section-header" }, [
            s("div", { class: "section-icon" }, "🌿"),
            s("div", { class: "section-info" }, [
              s("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          s("div", aS, [
            e.gitBranch ? (n(), R(_t, {
              key: 0,
              label: "Branch"
            }, {
              default: h(() => [
                b(tl, null, {
                  default: h(() => [
                    $(m(e.gitBranch), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : y("", !0),
            e.gitCommit ? (n(), R(_t, {
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
}), iS = /* @__PURE__ */ xe(lS, [["__scopeId", "data-v-182fe113"]]), rS = { class: "import-config" }, cS = { class: "config-container" }, uS = { class: "config-field" }, dS = { class: "input-wrapper" }, mS = ["value"], fS = {
  key: 0,
  class: "validating-indicator"
}, vS = {
  key: 1,
  class: "valid-indicator"
}, pS = {
  key: 0,
  class: "field-error"
}, gS = { class: "config-field" }, hS = { class: "strategy-options" }, yS = ["value", "checked", "onChange"], wS = { class: "strategy-content" }, _S = { class: "strategy-label" }, kS = { class: "strategy-description" }, bS = { class: "config-field switch-field" }, $S = { class: "switch-label" }, CS = ["checked"], xS = { class: "advanced-section" }, SS = { class: "advanced-content" }, IS = { class: "config-field" }, ES = ["value"], TS = ["value"], MS = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(!1), r = k(!1);
    ht(() => o.nameError, (f) => {
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
      a("update:name", p), r.value = !1, u && clearTimeout(u), p.length > 0 ? (l.value = !0, u = setTimeout(() => {
        a("validate-name", p);
      }, 400)) : l.value = !1;
    }
    function v() {
      o.name.length > 0 && a("validate-name", o.name);
    }
    return (f, p) => (n(), i("div", rS, [
      b(ns, null, {
        default: h(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      s("div", cS, [
        s("div", uS, [
          b(Dn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          s("div", dS, [
            s("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, mS),
            l.value ? (n(), i("span", fS, "...")) : r.value ? (n(), i("span", vS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", pS, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = s("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        s("div", gS, [
          b(Dn, null, {
            default: h(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          s("div", hS, [
            (n(), i(B, null, ge(c, (w) => s("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              s("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, yS),
              s("div", wS, [
                s("span", _S, m(w.label), 1),
                s("span", kS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        s("div", bS, [
          s("label", $S, [
            s("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, CS),
            p[6] || (p[6] = s("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        s("details", xS, [
          p[8] || (p[8] = s("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          s("div", SS, [
            s("div", IS, [
              b(Dn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              s("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(B, null, ge(st(Ml), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, TS))), 128))
              ], 40, ES)
            ])
          ])
        ])
      ])
    ]));
  }
}), PS = /* @__PURE__ */ xe(MS, [["__scopeId", "data-v-89ea06a1"]]), RS = { class: "import-flow" }, LS = {
  key: 0,
  class: "import-empty"
}, DS = { class: "git-import-section" }, NS = { class: "git-url-input-row" }, US = ["disabled"], OS = {
  key: 0,
  class: "git-error"
}, AS = {
  key: 1,
  class: "import-configure"
}, zS = { class: "selected-file-bar" }, FS = {
  key: 0,
  class: "file-bar-content"
}, VS = { class: "file-bar-info" }, BS = { class: "file-bar-name" }, WS = { class: "file-bar-size" }, GS = {
  key: 1,
  class: "file-bar-content"
}, jS = { class: "file-bar-info" }, HS = { class: "file-bar-name" }, qS = {
  key: 0,
  class: "preview-loading"
}, KS = { class: "import-actions" }, JS = {
  key: 2,
  class: "import-progress"
}, QS = { class: "creating-intro" }, YS = {
  key: 0,
  class: "progress-warning"
}, XS = {
  key: 1,
  class: "import-error"
}, ZS = { class: "error-message" }, e5 = {
  key: 3,
  class: "import-complete"
}, t5 = { class: "complete-message" }, s5 = { class: "complete-title" }, o5 = { class: "complete-details" }, n5 = { class: "complete-actions" }, a5 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: t, emit: o }) {
    var Z, Q, $e, te;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(a.resumeImport ?? !1), _ = k(!1), x = k(!1), C = k(""), S = k(!1), I = k(null), M = k(""), T = k(null), D = k(!1), z = k(null), G = k(null), L = k({
      name: ((Z = a.initialProgress) == null ? void 0 : Z.environmentName) ?? "",
      modelStrategy: "required",
      torchBackend: "auto",
      switchAfterImport: !0
    }), q = k(null), ce = k({
      message: ((Q = a.initialProgress) == null ? void 0 : Q.message) ?? "Preparing import...",
      phase: (($e = a.initialProgress) == null ? void 0 : $e.phase) ?? "",
      progress: ((te = a.initialProgress) == null ? void 0 : te.progress) ?? 0,
      error: null
    }), ne = [
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
    }), we = P(() => !S.value && !I.value && G.value && L.value.name.length > 0 && !q.value && (w.value || T.value));
    async function ee(oe) {
      w.value = oe, S.value = !0, I.value = null, G.value = null;
      try {
        const Re = await r(oe);
        G.value = Re;
      } catch (Re) {
        I.value = Re instanceof Error ? Re.message : "Failed to analyze file", console.error("Preview error:", Re);
      } finally {
        S.value = !1;
      }
    }
    function j() {
      w.value = null, T.value = null, M.value = "", z.value = null, _.value = !1, x.value = !1, C.value = "", G.value = null, I.value = null, L.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, q.value = null, l("source-cleared");
    }
    function K() {
      Pe(), j(), g.value = !1, S.value = !1, D.value = !1, ce.value = {
        message: "Preparing import...",
        phase: "",
        progress: 0,
        error: null
      };
    }
    async function ke() {
      if (M.value.trim()) {
        D.value = !0, z.value = null;
        try {
          const oe = await c(M.value.trim());
          T.value = M.value.trim(), G.value = oe;
        } catch (oe) {
          z.value = oe instanceof Error ? oe.message : "Failed to analyze repository";
        } finally {
          D.value = !1;
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
    async function fe(oe) {
      if (!oe) {
        q.value = "Environment name is required";
        return;
      }
      try {
        const Re = await u(oe);
        q.value = Re.valid ? null : Re.error || "Invalid name";
      } catch {
        q.value = "Failed to validate name";
      }
    }
    async function U() {
      if (L.value.name && !(!w.value && !T.value)) {
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
          else if (T.value)
            oe = await v(
              T.value,
              L.value.name,
              L.value.modelStrategy,
              L.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? me() : (x.value = !1, C.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          x.value = !1, C.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
        }
      }
    }
    async function me() {
      if (p) return;
      const oe = async () => {
        try {
          const ve = await f();
          return ce.value = {
            message: ve.message,
            phase: ve.phase || "",
            progress: ve.progress ?? (ve.state === "importing" ? 50 : 0),
            error: ve.error || null
          }, ve.state === "complete" ? (Pe(), x.value = !0, C.value = `Environment '${ve.environment_name}' created successfully`, g.value = !1, _.value = !0, ve.environment_name && l("import-complete", ve.environment_name, L.value.switchAfterImport), !1) : ve.state === "error" ? (Pe(), x.value = !1, C.value = ve.error || ve.message, g.value = !1, _.value = !0, !1) : !0;
        } catch (ve) {
          return console.error("Failed to poll import progress:", ve), !0;
        }
      };
      await oe() && (p = setInterval(async () => {
        await oe() || Pe();
      }, 2e3));
    }
    function Pe() {
      p && (clearInterval(p), p = null);
    }
    function ye(oe) {
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
        }, me());
      } catch (oe) {
        console.log("[ComfyGit ImportFlow] Import progress check failed:", oe);
      }
    }), t({
      handleReset: K,
      isImporting: g,
      canImport: we
    }), (oe, Re) => {
      var ve;
      return n(), i("div", RS, [
        !w.value && !T.value && !g.value ? (n(), i("div", LS, [
          b(E3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: ee
          }),
          Re[7] || (Re[7] = s("div", { class: "import-divider" }, [
            s("span", null, "or")
          ], -1)),
          s("div", DS, [
            Re[5] || (Re[5] = s("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            s("div", NS, [
              Tt(s("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Re[0] || (Re[0] = (le) => M.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ds(ke, ["enter"]),
                disabled: D.value
              }, null, 40, US), [
                [en, M.value]
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !M.value.trim() || D.value,
                onClick: ke
              }, {
                default: h(() => [
                  $(m(D.value ? "Analyzing..." : "ANALYZE"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ]),
            z.value ? (n(), i("div", OS, m(z.value), 1)) : y("", !0),
            Re[6] || (Re[6] = s("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || T.value) && !g.value && !_.value ? (n(), i("div", AS, [
          s("div", zS, [
            w.value ? (n(), i("div", FS, [
              Re[8] || (Re[8] = s("div", { class: "file-bar-icon" }, "📦", -1)),
              s("div", VS, [
                s("div", BS, m(w.value.name), 1),
                s("div", WS, m(ye(w.value.size)), 1)
              ])
            ])) : T.value ? (n(), i("div", GS, [
              Re[10] || (Re[10] = s("div", { class: "file-bar-icon" }, "🔗", -1)),
              s("div", jS, [
                s("div", HS, m(se(T.value)), 1),
                Re[9] || (Re[9] = s("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: j
            }, {
              default: h(() => [...Re[11] || (Re[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", qS, [...Re[12] || (Re[12] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : I.value ? (n(), R(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [I.value]
          }, null, 8, ["details"])) : G.value ? (n(), R(iS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          G.value ? (n(), R(PS, {
            key: 3,
            name: L.value.name,
            "onUpdate:name": Re[1] || (Re[1] = (le) => L.value.name = le),
            "model-strategy": L.value.modelStrategy,
            "onUpdate:modelStrategy": Re[2] || (Re[2] = (le) => L.value.modelStrategy = le),
            "torch-backend": L.value.torchBackend,
            "onUpdate:torchBackend": Re[3] || (Re[3] = (le) => L.value.torchBackend = le),
            "switch-after-import": L.value.switchAfterImport,
            "onUpdate:switchAfterImport": Re[4] || (Re[4] = (le) => L.value.switchAfterImport = le),
            "name-error": q.value,
            onValidateName: fe
          }, null, 8, ["name", "model-strategy", "torch-backend", "switch-after-import", "name-error"])) : y("", !0),
          L.value.modelStrategy === "skip" && ((ve = G.value) != null && ve.models_needing_download) ? (n(), R(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${G.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          s("div", KS, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: j
            }, {
              default: h(() => [...Re[13] || (Re[13] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              size: "md",
              disabled: !we.value,
              onClick: U
            }, {
              default: h(() => [...Re[14] || (Re[14] = [
                $(" Create Environment ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])) : g.value ? (n(), i("div", JS, [
          s("p", QS, [
            Re[15] || (Re[15] = $(" Importing environment ", -1)),
            s("strong", null, m(L.value.name), 1),
            Re[16] || (Re[16] = $("... ", -1))
          ]),
          b(Kn, {
            progress: ce.value.progress,
            message: ce.value.message,
            "current-phase": ce.value.phase,
            variant: ce.value.error ? "error" : "default",
            "show-steps": !0,
            steps: ne
          }, null, 8, ["progress", "message", "current-phase", "variant"]),
          ce.value.error ? y("", !0) : (n(), i("p", YS, " This may take several minutes. Please wait... ")),
          ce.value.error ? (n(), i("div", XS, [
            s("p", ZS, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", e5, [
          s("div", {
            class: Be(["complete-icon", x.value ? "success" : "error"])
          }, m(x.value ? "✓" : "✕"), 3),
          s("div", t5, [
            s("div", s5, m(x.value ? "Import Successful" : "Import Failed"), 1),
            s("div", o5, m(C.value), 1)
          ]),
          s("div", n5, [
            b(Me, {
              variant: "primary",
              size: "md",
              onClick: K
            }, {
              default: h(() => [...Re[17] || (Re[17] = [
                $(" Import Another ", -1)
              ])]),
              _: 1
            })
          ])
        ])) : y("", !0)
      ]);
    };
  }
}), wc = /* @__PURE__ */ xe(a5, [["__scopeId", "data-v-72cbc04e"]]), l5 = /* @__PURE__ */ be({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(B, null, [
      b(Ot, null, Qt({
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
              onInfoClick: c[0] || (c[0] = (u) => a.value = !0)
            })
          ]),
          key: "0"
        }
      ]), 1024),
      b(Yt, {
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
}), i5 = /* @__PURE__ */ xe(l5, [["__scopeId", "data-v-41b1f298"]]), r5 = { class: "base-tabs" }, c5 = ["disabled", "onClick"], u5 = {
  key: 0,
  class: "base-tabs__badge"
}, d5 = /* @__PURE__ */ be({
  __name: "BaseTabs",
  props: {
    tabs: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l(r) {
      var c;
      (c = o.tabs.find((u) => u.id === r)) != null && c.disabled || a("update:modelValue", r);
    }
    return (r, c) => (n(), i("div", r5, [
      (n(!0), i(B, null, ge(e.tabs, (u) => (n(), i("button", {
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
        $(m(u.label) + " ", 1),
        u.badge ? (n(), i("span", u5, m(u.badge), 1)) : y("", !0)
      ], 10, c5))), 128))
    ]));
  }
}), Pl = /* @__PURE__ */ xe(d5, [["__scopeId", "data-v-ad5e6cad"]]), m5 = { class: "commit-list" }, f5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (t, o) => (n(), i("div", m5, [
      ot(t.$slots, "default", {}, void 0)
    ]));
  }
}), _c = /* @__PURE__ */ xe(f5, [["__scopeId", "data-v-8c5ee761"]]), v5 = { class: "commit-message" }, p5 = { class: "commit-date" }, g5 = /* @__PURE__ */ be({
  __name: "CommitItem",
  props: {
    hash: {},
    message: {},
    relativeDate: {},
    clickable: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = e, a = t;
    function l() {
      o.clickable && a("click");
    }
    return (r, c) => (n(), i("div", {
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(yc, { hash: e.hash }, null, 8, ["hash"]),
      s("span", v5, m(e.message), 1),
      s("span", p5, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = yt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), kc = /* @__PURE__ */ xe(g5, [["__scopeId", "data-v-dd7c621b"]]), h5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const t = e, o = P(() => `HISTORY (${t.currentRef || "detached"})`);
    return (a, l) => (n(), R(Ot, null, Qt({
      content: h(() => [
        e.commits.length === 0 ? (n(), R(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(_c, { key: 1 }, {
          default: h(() => [
            (n(!0), i(B, null, ge(e.commits, (r) => (n(), R(kc, {
              key: r.hash,
              hash: r.short_hash || r.hash,
              message: r.message,
              "relative-date": r.date_relative || r.relative_date,
              onClick: (c) => a.$emit("select", r)
            }, {
              actions: h(() => [
                b(Me, {
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
          b(At, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), y5 = /* @__PURE__ */ xe(h5, [["__scopeId", "data-v-fa4bf3a1"]]), w5 = { class: "branch-create-form" }, _5 = { class: "form-actions" }, k5 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: t }) {
    const o = t, a = k(""), l = P(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", w5, [
      b(yo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      s("div", _5, [
        b(Me, {
          variant: "primary",
          size: "sm",
          disabled: !l.value,
          onClick: r
        }, {
          default: h(() => [...d[1] || (d[1] = [
            $(" Create ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]),
        b(Me, {
          variant: "secondary",
          size: "sm",
          onClick: c
        }, {
          default: h(() => [...d[2] || (d[2] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), b5 = /* @__PURE__ */ xe(k5, [["__scopeId", "data-v-7c500394"]]), $5 = { class: "branch-list-item__indicator" }, C5 = { class: "branch-list-item__name" }, x5 = {
  key: 0,
  class: "branch-list-item__actions"
}, S5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, I5 = /* @__PURE__ */ be({
  __name: "BranchListItem",
  props: {
    branchName: {},
    isCurrent: { type: Boolean, default: !1 },
    clickable: { type: Boolean, default: !1 },
    showCurrentLabel: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e) {
    return (t, o) => (n(), i("div", {
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && t.$emit("click"))
    }, [
      s("span", $5, m(e.isCurrent ? "●" : "○"), 1),
      s("span", C5, m(e.branchName), 1),
      t.$slots.actions || e.showCurrentLabel ? (n(), i("div", x5, [
        ot(t.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", S5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), E5 = /* @__PURE__ */ xe(I5, [["__scopeId", "data-v-c6581a24"]]), T5 = { class: "header-info" }, M5 = { class: "branch-name" }, P5 = {
  key: 0,
  class: "current-badge"
}, R5 = { class: "branch-meta" }, L5 = { key: 0 }, D5 = {
  key: 0,
  class: "meta-note"
}, N5 = {
  key: 0,
  class: "loading"
}, U5 = {
  key: 1,
  class: "empty-state"
}, O5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const t = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const c = await o(t.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), R($t, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        s("div", T5, [
          u[4] || (u[4] = s("h3", { class: "header-title" }, "BRANCH", -1)),
          s("span", M5, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", P5, "CURRENT")) : y("", !0)
        ]),
        b(De, {
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
        s("div", R5, [
          r.value ? (n(), i("span", L5, "Loading...")) : (n(), i(B, { key: 1 }, [
            s("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", D5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", N5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", U5, " No commits found on this branch ")) : (n(), R(_c, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(B, null, ge(a.value, (d) => (n(), R(kc, {
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
        e.isCurrent ? y("", !0) : (n(), R(Me, {
          key: 0,
          variant: "destructive",
          size: "sm",
          onClick: u[1] || (u[1] = (d) => c.$emit("delete", e.branchName))
        }, {
          default: h(() => [...u[6] || (u[6] = [
            $(" Delete Branch ", -1)
          ])]),
          _: 1
        })),
        u[8] || (u[8] = s("div", { class: "footer-spacer" }, null, -1)),
        e.isCurrent ? y("", !0) : (n(), R(De, {
          key: 1,
          variant: "primary",
          onClick: u[2] || (u[2] = (d) => c.$emit("switch", e.branchName))
        }, {
          default: h(() => [...u[7] || (u[7] = [
            $(" Switch to Branch ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }));
  }
}), A5 = /* @__PURE__ */ xe(O5, [["__scopeId", "data-v-2e5437cc"]]), z5 = {
  key: 2,
  class: "branch-list"
}, F5 = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: t }) {
    const o = t, a = k(!1), l = k(null);
    function r(f) {
      o("create", f), c();
    }
    function c() {
      a.value = !1;
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
    return (f, p) => (n(), R(Ot, null, Qt({
      content: h(() => [
        a.value ? (n(), R(b5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), R(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", z5, [
          (n(!0), i(B, null, ge(e.branches, (w) => (n(), R(E5, {
            key: w.name,
            "branch-name": w.name,
            "is-current": w.is_current,
            clickable: !0,
            "show-current-label": !0,
            onClick: (g) => u(w)
          }, {
            actions: h(() => [
              w.is_current ? y("", !0) : (n(), R(Me, {
                key: 0,
                variant: "secondary",
                size: "xs",
                onClick: yt((g) => o("switch", w.name), ["stop"])
              }, {
                default: h(() => [...p[3] || (p[3] = [
                  $(" Switch ", -1)
                ])]),
                _: 1
              }, 8, ["onClick"]))
            ]),
            _: 2
          }, 1032, ["branch-name", "is-current", "onClick"]))), 128))
        ])),
        l.value ? (n(), R(A5, {
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
              a.value ? y("", !0) : (n(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: p[0] || (p[0] = (w) => a.value = !0)
              }, {
                default: h(() => [...p[2] || (p[2] = [
                  $(" + Create Branch ", -1)
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
}), V5 = /* @__PURE__ */ xe(F5, [["__scopeId", "data-v-a3de96cc"]]);
function bc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const B5 = { class: "remote-url-display" }, W5 = ["title"], G5 = ["title"], j5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, H5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, q5 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const t = e, o = k(!1), a = P(() => {
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
    return (r, c) => (n(), i("div", B5, [
      s("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, W5),
      s("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", H5, [...c[1] || (c[1] = [
          s("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", j5, [...c[0] || (c[0] = [
          s("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          s("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, G5)
    ]));
  }
}), K5 = /* @__PURE__ */ xe(q5, [["__scopeId", "data-v-7768a58d"]]), J5 = { class: "remote-title" }, Q5 = {
  key: 0,
  class: "default-badge"
}, Y5 = {
  key: 1,
  class: "sync-badge"
}, X5 = {
  key: 0,
  class: "ahead"
}, Z5 = {
  key: 1,
  class: "behind"
}, e8 = {
  key: 1,
  class: "synced"
}, t8 = ["href"], s8 = {
  key: 1,
  class: "remote-url-text"
}, o8 = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const t = e, o = P(() => t.fetchingRemote === t.remote.name), a = P(() => t.remote.is_default), l = P(() => t.syncStatus && t.syncStatus.behind > 0), r = P(() => t.syncStatus && t.syncStatus.ahead > 0), c = P(() => t.remote.push_url !== t.remote.fetch_url), u = P(() => {
      const v = t.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = P(() => t.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), R(Ft, {
      status: a.value ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        s("div", J5, [
          s("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", Q5, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", Y5, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", X5, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", Z5, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", e8, "✓ synced"))
          ])) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        u.value ? (n(), i("a", {
          key: 0,
          href: u.value,
          target: "_blank",
          rel: "noopener noreferrer",
          class: "remote-url-link",
          onClick: f[0] || (f[0] = yt(() => {
          }, ["stop"]))
        }, m(d.value), 9, t8)) : (n(), i("span", s8, m(d.value), 1))
      ]),
      actions: h(() => [
        b(Me, {
          variant: "primary",
          size: "xs",
          loading: o.value,
          onClick: f[1] || (f[1] = (p) => v.$emit("fetch", e.remote.name))
        }, {
          default: h(() => [...f[6] || (f[6] = [
            $(" Fetch ", -1)
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
            $(" Pull" + m(e.syncStatus && e.syncStatus.behind > 0 ? ` ↓${e.syncStatus.behind}` : ""), 1)
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
            $(" Push" + m(e.syncStatus && e.syncStatus.ahead > 0 ? ` ↑${e.syncStatus.ahead}` : ""), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled"]),
        b(Me, {
          variant: "secondary",
          size: "xs",
          onClick: f[4] || (f[4] = (p) => v.$emit("edit", e.remote.name))
        }, {
          default: h(() => [...f[7] || (f[7] = [
            $(" Edit URL ", -1)
          ])]),
          _: 1
        }),
        a.value ? y("", !0) : (n(), R(Me, {
          key: 0,
          variant: "destructive",
          size: "xs",
          onClick: f[5] || (f[5] = (p) => v.$emit("remove", e.remote.name))
        }, {
          default: h(() => [...f[8] || (f[8] = [
            $(" Remove ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      c.value ? {
        name: "details",
        fn: h(() => [
          e.remote.push_url !== e.remote.fetch_url ? (n(), R(_t, {
            key: 0,
            label: "Push URL:"
          }, {
            default: h(() => [
              b(K5, {
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
}), n8 = /* @__PURE__ */ xe(o8, [["__scopeId", "data-v-8310f3a8"]]), a8 = ["for"], l8 = {
  key: 0,
  class: "base-form-field-required"
}, i8 = { class: "base-form-field-input" }, r8 = {
  key: 1,
  class: "base-form-field-error"
}, c8 = {
  key: 2,
  class: "base-form-field-hint"
}, u8 = /* @__PURE__ */ be({
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
    return (a, l) => (n(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", l8, "*")) : y("", !0)
      ], 8, a8)) : y("", !0),
      s("div", i8, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", r8, m(e.error), 1)) : e.hint ? (n(), i("span", c8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Nt = /* @__PURE__ */ xe(u8, [["__scopeId", "data-v-9a1cf296"]]), d8 = { class: "remote-form" }, m8 = { class: "form-header" }, f8 = { class: "form-body" }, v8 = {
  key: 0,
  class: "form-error"
}, p8 = { class: "form-actions" }, g8 = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    ht(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
          a("submit", l.value);
        } catch (v) {
          c.value = v instanceof Error ? v.message : "Failed to submit form";
        } finally {
          r.value = !1;
        }
      }
    }
    return (v, f) => (n(), i("div", d8, [
      s("div", m8, [
        b(ns, null, {
          default: h(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      s("div", f8, [
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
        c.value ? (n(), i("div", v8, m(c.value), 1)) : y("", !0)
      ]),
      s("div", p8, [
        b(Me, {
          variant: "primary",
          size: "md",
          disabled: !u.value,
          loading: r.value,
          onClick: d
        }, {
          default: h(() => [
            $(m(e.mode === "add" ? "Add Remote" : "Update URL"), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"]),
        b(Me, {
          variant: "ghost",
          size: "md",
          onClick: f[3] || (f[3] = (p) => v.$emit("cancel"))
        }, {
          default: h(() => [...f[4] || (f[4] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        })
      ])
    ]));
  }
}), h8 = /* @__PURE__ */ xe(g8, [["__scopeId", "data-v-56021b18"]]), y8 = { class: "conflict-summary-box" }, w8 = { class: "summary-header" }, _8 = { class: "summary-text" }, k8 = { key: 0 }, b8 = {
  key: 1,
  class: "all-resolved"
}, $8 = { class: "summary-progress" }, C8 = { class: "progress-bar" }, x8 = { class: "progress-text" }, S8 = /* @__PURE__ */ be({
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
    return (a, l) => (n(), i("div", y8, [
      s("div", w8, [
        l[0] || (l[0] = s("span", { class: "summary-icon" }, "⚠", -1)),
        s("div", _8, [
          s("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", k8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", b8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      s("div", $8, [
        s("div", C8, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        s("span", x8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), I8 = /* @__PURE__ */ xe(S8, [["__scopeId", "data-v-4e9e6cc9"]]), E8 = { class: "modal-header" }, T8 = { class: "modal-title" }, M8 = { class: "modal-body" }, P8 = {
  key: 0,
  class: "error-box"
}, R8 = {
  key: 0,
  class: "error-hint"
}, L8 = {
  key: 1,
  class: "loading-state"
}, D8 = { class: "commit-summary" }, N8 = {
  key: 0,
  class: "commits-section"
}, U8 = { class: "commit-list" }, O8 = { class: "commit-hash" }, A8 = { class: "commit-message" }, z8 = { class: "commit-date" }, F8 = {
  key: 1,
  class: "changes-section"
}, V8 = {
  key: 0,
  class: "change-group",
  open: ""
}, B8 = { class: "change-count" }, W8 = { class: "change-list" }, G8 = {
  key: 0,
  class: "conflict-badge"
}, j8 = {
  key: 1,
  class: "change-group"
}, H8 = { class: "change-count" }, q8 = { class: "change-list" }, K8 = {
  key: 2,
  class: "change-group"
}, J8 = { class: "change-count" }, Q8 = { class: "change-list" }, Y8 = {
  key: 3,
  class: "strategy-section"
}, X8 = { class: "radio-group" }, Z8 = { class: "radio-option" }, e4 = { class: "radio-option" }, t4 = { class: "radio-option" }, s4 = {
  key: 4,
  class: "up-to-date"
}, o4 = { class: "modal-actions" }, Ii = "comfygit.pullModelStrategy", n4 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(localStorage.getItem(Ii) || "skip");
    ht(l, (C) => {
      localStorage.setItem(Ii, C);
    });
    const r = P(() => {
      var C;
      return ((C = o.error) == null ? void 0 : C.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = P(() => {
      if (!o.preview) return 0;
      const C = o.preview.changes.workflows;
      return C.added.length + C.modified.length + C.deleted.length;
    }), u = P(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = P(() => {
      var C;
      return c.value > 0 || u.value > 0 || (((C = o.preview) == null ? void 0 : C.changes.models.count) || 0) > 0;
    }), v = P(() => o.preview && bc(o.preview) ? o.preview : null), f = P(() => {
      var C;
      return ((C = v.value) == null ? void 0 : C.workflow_conflicts.length) ?? 0;
    }), p = P(() => {
      var C;
      return ((C = o.conflictResolutions) == null ? void 0 : C.size) ?? 0;
    }), w = P(
      () => f.value > 0 && p.value === f.value
    ), g = P(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(C) {
      if (!v.value) return !1;
      const S = C.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((I) => I.name === S);
    }
    function x(C) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: C, resolutions: S });
    }
    return (C, S) => {
      var I, M;
      return n(), R(Kt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (T) => C.$emit("close"))
        }, [
          s("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = yt(() => {
            }, ["stop"]))
          }, [
            s("div", E8, [
              s("h3", T8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              s("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (T) => C.$emit("close"))
              }, "✕")
            ]),
            s("div", M8, [
              e.error ? (n(), i("div", P8, [
                S[13] || (S[13] = s("span", { class: "error-icon" }, "✕", -1)),
                s("div", null, [
                  S[12] || (S[12] = s("strong", null, "PULL FAILED", -1)),
                  s("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", R8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", L8, [...S[14] || (S[14] = [
                s("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (I = e.preview) != null && I.has_uncommitted_changes ? (n(), i(B, { key: 2 }, [
                S[15] || (S[15] = s("div", { class: "warning-box" }, [
                  s("span", { class: "warning-icon" }, "⚠"),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = s("div", { class: "options-section" }, [
                  s("p", null, [
                    s("strong", null, "Options:")
                  ]),
                  s("ul", null, [
                    s("li", null, "Commit your changes first (recommended)"),
                    s("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                s("div", D8, [
                  S[17] || (S[17] = s("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", N8, [
                  S[18] || (S[18] = s("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  s("div", U8, [
                    (n(!0), i(B, null, ge(e.preview.commits, (T) => (n(), i("div", {
                      key: T.hash,
                      class: "commit-item"
                    }, [
                      s("span", O8, m(T.short_hash || T.hash.slice(0, 7)), 1),
                      s("span", A8, m(T.message), 1),
                      s("span", z8, m(T.date_relative || T.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", F8, [
                  S[22] || (S[22] = s("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", V8, [
                    s("summary", null, [
                      S[19] || (S[19] = s("span", { class: "change-type" }, "Workflows", -1)),
                      s("span", B8, m(c.value) + " changes", 1)
                    ]),
                    s("div", W8, [
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.added, (T) => (n(), i("div", {
                        key: "a-" + T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128)),
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.modified, (T) => (n(), i("div", {
                        key: "m-" + T,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(T) + " ", 1),
                        _(T) ? (n(), i("span", G8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.deleted, (T) => (n(), i("div", {
                        key: "d-" + T,
                        class: "change-item delete"
                      }, " - " + m(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", j8, [
                    s("summary", null, [
                      S[20] || (S[20] = s("span", { class: "change-type" }, "Nodes", -1)),
                      s("span", H8, m(u.value) + " to install", 1)
                    ]),
                    s("div", q8, [
                      (n(!0), i(B, null, ge(e.preview.changes.nodes.to_install, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item add"
                      }, " + " + m(T), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", K8, [
                    s("summary", null, [
                      S[21] || (S[21] = s("span", { class: "change-type" }, "Models", -1)),
                      s("span", J8, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    s("div", Q8, [
                      (n(!0), i(B, null, ge(e.preview.changes.models.referenced, (T) => (n(), i("div", {
                        key: T,
                        class: "change-item"
                      }, m(T), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (n(), R(I8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", Y8, [
                  S[27] || (S[27] = s("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  s("div", X8, [
                    s("label", Z8, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (T) => l.value = T),
                        value: "all"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[23] || (S[23] = s("span", null, "Download all models", -1))
                    ]),
                    s("label", e4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (T) => l.value = T),
                        value: "required"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[24] || (S[24] = s("span", null, "Download required only", -1))
                    ]),
                    s("label", t4, [
                      Tt(s("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (T) => l.value = T),
                        value: "skip"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[25] || (S[25] = s("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = s("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = s("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", s4, [
                  S[29] || (S[29] = s("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            s("div", o4, [
              b(Me, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (T) => C.$emit("close"))
              }, {
                default: h(() => [...S[30] || (S[30] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              e.error ? (n(), i(B, { key: 0 }, [
                b(Me, {
                  variant: "secondary",
                  loading: e.pulling,
                  onClick: S[5] || (S[5] = (T) => x(!1))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (T) => x(!0))
                }, {
                  default: h(() => [...S[32] || (S[32] = [
                    $(" Force Pull ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"])
              ], 64)) : (M = e.preview) != null && M.has_uncommitted_changes ? (n(), R(Me, {
                key: 1,
                variant: "destructive",
                loading: e.pulling,
                onClick: S[7] || (S[7] = (T) => x(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(B, { key: 2 }, [
                v.value && !w.value ? (n(), R(Me, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (T) => a("openConflictResolution"))
                }, {
                  default: h(() => [
                    $(" Resolve Conflicts (" + m(p.value) + "/" + m(f.value) + ") ", 1)
                  ]),
                  _: 1
                })) : (n(), R(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pulling,
                  disabled: !g.value,
                  onClick: S[9] || (S[9] = (T) => x(!1))
                }, {
                  default: h(() => [...S[34] || (S[34] = [
                    $(" Pull Changes ", -1)
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
}), a4 = /* @__PURE__ */ xe(n4, [["__scopeId", "data-v-1d633bba"]]), l4 = { class: "modal-header" }, i4 = { class: "modal-title" }, r4 = { class: "modal-body" }, c4 = {
  key: 0,
  class: "error-box"
}, u4 = {
  key: 1,
  class: "loading-state"
}, d4 = {
  key: 2,
  class: "warning-box"
}, m4 = {
  key: 1,
  class: "commits-section"
}, f4 = { class: "commit-list" }, v4 = { class: "commit-hash" }, p4 = { class: "commit-message" }, g4 = { class: "commit-date" }, h4 = { class: "force-option" }, y4 = { class: "checkbox-option" }, w4 = { class: "commit-summary" }, _4 = { key: 0 }, k4 = { key: 1 }, b4 = {
  key: 0,
  class: "info-box"
}, $4 = {
  key: 2,
  class: "commits-section"
}, C4 = { class: "commit-list" }, x4 = { class: "commit-hash" }, S4 = { class: "commit-message" }, I4 = { class: "commit-date" }, E4 = {
  key: 3,
  class: "up-to-date"
}, T4 = { class: "modal-actions" }, M4 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = k(!1), r = k(!1), c = P(() => {
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
      a("push", { force: w });
    }
    return (w, g) => {
      var _, x, C, S;
      return n(), i(B, null, [
        (n(), R(Kt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (I) => w.$emit("close"))
          }, [
            s("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = yt(() => {
              }, ["stop"]))
            }, [
              s("div", l4, [
                s("h3", i4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                s("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (I) => w.$emit("close"))
                }, "✕")
              ]),
              s("div", r4, [
                e.error ? (n(), i("div", c4, [
                  g[13] || (g[13] = s("span", { class: "error-icon" }, "!", -1)),
                  s("div", null, [
                    g[12] || (g[12] = s("strong", null, "Push failed", -1)),
                    s("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", u4, [...g[14] || (g[14] = [
                  s("span", { class: "spinner" }, "⟳", -1),
                  $(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", d4, [...g[15] || (g[15] = [
                  s("span", { class: "warning-icon" }, "!", -1),
                  s("div", null, [
                    s("strong", null, "UNCOMMITTED CHANGES"),
                    s("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (x = e.preview) != null && x.remote_has_new_commits ? (n(), i(B, { key: 3 }, [
                  g[19] || (g[19] = s("div", { class: "warning-box" }, [
                    s("span", { class: "warning-icon" }, "!"),
                    s("div", null, [
                      s("strong", null, "REMOTE HAS NEW COMMITS"),
                      s("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (n(), R(sl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", m4, [
                    g[16] || (g[16] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", f4, [
                      (n(!0), i(B, null, ge(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", v4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", p4, m(I.message), 1),
                        s("span", g4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  s("div", h4, [
                    s("label", y4, [
                      Tt(s("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (I) => l.value = I)
                      }, null, 512), [
                        [Hn, l.value]
                      ]),
                      g[17] || (g[17] = s("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = s("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(B, { key: 4 }, [
                  s("div", w4, [
                    g[20] || (g[20] = s("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", _4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", k4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", b4, [...g[21] || (g[21] = [
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
                  f.value ? (n(), R(sl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (I) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", $4, [
                    g[22] || (g[22] = s("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    s("div", C4, [
                      (n(!0), i(B, null, ge(e.preview.commits, (I) => (n(), i("div", {
                        key: I.hash,
                        class: "commit-item"
                      }, [
                        s("span", x4, m(I.short_hash || I.hash.slice(0, 7)), 1),
                        s("span", S4, m(I.message), 1),
                        s("span", I4, m(I.date_relative || I.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", E4, [
                    g[23] || (g[23] = s("span", { class: "icon" }, "✓", -1)),
                    $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              s("div", T4, [
                b(Me, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (I) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    $(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (C = e.preview) != null && C.remote_has_new_commits ? (n(), i(B, { key: 0 }, [
                  b(Me, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (I) => w.$emit("pull-first"))
                  }, {
                    default: h(() => [...g[25] || (g[25] = [
                      $(" Pull First ", -1)
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
                      $(m(f.value ? "Force Push Anyway" : "Force Push"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ], 64)) : e.preview && e.preview.commits_ahead > 0 && !e.preview.has_uncommitted_changes ? (n(), R(Me, {
                  key: 1,
                  variant: "primary",
                  loading: e.pushing,
                  onClick: g[7] || (g[7] = (I) => p(!1))
                }, {
                  default: h(() => [
                    $(m(f.value ? "Push Anyway" : "Push"), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        r.value && ((S = e.preview) != null && S.warnings) ? (n(), R(hc, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (I) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (I) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), P4 = /* @__PURE__ */ xe(M4, [["__scopeId", "data-v-7748bf33"]]), R4 = { class: "resolution-choice-group" }, L4 = ["disabled"], D4 = ["disabled"], N4 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (t, o) => (n(), i("div", R4, [
      s("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => t.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        s("span", { class: "choice-icon" }, "◀", -1),
        s("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, L4),
      s("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => t.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        s("span", { class: "choice-label" }, "Keep Theirs", -1),
        s("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, D4)
    ]));
  }
}), U4 = /* @__PURE__ */ xe(N4, [["__scopeId", "data-v-985715ed"]]), O4 = { class: "conflict-header" }, A4 = { class: "conflict-info" }, z4 = { class: "workflow-name" }, F4 = { class: "conflict-description" }, V4 = {
  key: 0,
  class: "resolved-badge"
}, B4 = { class: "resolved-text" }, W4 = { class: "conflict-hashes" }, G4 = { class: "hash-item" }, j4 = { class: "hash-item" }, H4 = { class: "conflict-actions" }, q4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = k(o.resolution);
    ht(() => o.resolution, (d) => {
      l.value = d;
    }), ht(l, (d) => {
      d && a("resolve", d);
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
      return n(), i("div", {
        class: Be(["conflict-item", { resolved: r.value }])
      }, [
        s("div", O4, [
          v[2] || (v[2] = s("span", { class: "conflict-icon" }, "⚠", -1)),
          s("div", A4, [
            s("code", z4, m(e.conflict.name) + ".json", 1),
            s("div", F4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", V4, [
            v[1] || (v[1] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", B4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        s("div", W4, [
          s("span", G4, [
            v[3] || (v[3] = $("Your: ", -1)),
            s("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          s("span", j4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            s("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        s("div", H4, [
          b(U4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), K4 = /* @__PURE__ */ xe(q4, [["__scopeId", "data-v-506d3bbf"]]), J4 = { class: "resolution-content" }, Q4 = {
  key: 0,
  class: "error-box"
}, Y4 = { class: "resolution-header" }, X4 = { class: "header-stats" }, Z4 = { class: "stat" }, eI = { class: "stat-value" }, tI = { class: "stat resolved" }, sI = { class: "stat-value" }, oI = {
  key: 0,
  class: "stat pending"
}, nI = { class: "stat-value" }, aI = { class: "conflicts-list" }, lI = {
  key: 1,
  class: "all-resolved-message"
}, iI = /* @__PURE__ */ be({
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
    const o = e, a = t, l = P(() => o.resolutions.size), r = P(() => o.workflowConflicts.length - l.value), c = P(() => l.value === o.workflowConflicts.length), u = P(
      () => o.operationType === "pull" ? "Validate & Pull" : "Validate & Merge"
    );
    function d(w) {
      const g = o.resolutions.get(w);
      return (g == null ? void 0 : g.resolution) ?? null;
    }
    function v(w, g) {
      a("resolve", w, g);
    }
    function f() {
      a("close");
    }
    function p() {
      a("apply");
    }
    return (w, g) => (n(), R($t, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        s("div", J4, [
          e.error ? (n(), i("div", Q4, [
            g[1] || (g[1] = s("span", { class: "error-icon" }, "✕", -1)),
            s("div", null, [
              g[0] || (g[0] = s("strong", null, "Validation Failed", -1)),
              s("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          s("div", Y4, [
            s("div", X4, [
              s("div", Z4, [
                s("span", eI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = s("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              s("div", tI, [
                s("span", sI, m(l.value), 1),
                g[3] || (g[3] = s("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", oI, [
                s("span", nI, m(r.value), 1),
                g[4] || (g[4] = s("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = s("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          s("div", aI, [
            (n(!0), i(B, null, ge(e.workflowConflicts, (_) => (n(), R(K4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (x) => v(_.name, x)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", lI, [
            g[6] || (g[6] = s("span", { class: "resolved-icon" }, "✓", -1)),
            s("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: f
        }, {
          default: h(() => [...g[7] || (g[7] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        g[8] || (g[8] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
          variant: "primary",
          disabled: !c.value || e.validating,
          loading: e.validating,
          onClick: p
        }, {
          default: h(() => [
            $(m(u.value), 1)
          ]),
          _: 1
        }, 8, ["disabled", "loading"])
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), rI = /* @__PURE__ */ xe(iI, [["__scopeId", "data-v-c58d150d"]]), cI = { class: "node-conflict-item" }, uI = { class: "node-header" }, dI = { class: "node-name" }, mI = { class: "node-id" }, fI = { class: "version-comparison" }, vI = { class: "version yours" }, pI = { class: "version theirs" }, gI = { class: "chosen-version" }, hI = { class: "chosen" }, yI = { class: "chosen-reason" }, wI = { class: "affected-workflows" }, _I = { class: "wf-source" }, kI = { class: "wf-version" }, bI = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (t, o) => (n(), i("div", cI, [
      s("div", uI, [
        s("code", dI, m(e.conflict.node_name), 1),
        s("span", mI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      s("div", fI, [
        s("div", vI, [
          o[0] || (o[0] = s("span", { class: "label" }, "Your version:", -1)),
          s("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = s("span", { class: "arrow" }, "→", -1)),
        s("div", pI, [
          o[1] || (o[1] = s("span", { class: "label" }, "Their version:", -1)),
          s("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      s("div", gI, [
        o[3] || (o[3] = s("span", { class: "label" }, "Will install:", -1)),
        s("code", hI, m(e.conflict.chosen_version), 1),
        s("span", yI, m(e.conflict.chosen_reason), 1)
      ]),
      s("details", wI, [
        s("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        s("ul", null, [
          (n(!0), i(B, null, ge(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            s("code", null, m(a.name), 1),
            s("span", _I, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            s("span", kI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), $I = /* @__PURE__ */ xe(bI, [["__scopeId", "data-v-8b626725"]]), CI = { class: "validation-content" }, xI = {
  key: 0,
  class: "compatible-message"
}, SI = { class: "conflicts-list" }, II = {
  key: 2,
  class: "warnings-section"
}, EI = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: t }) {
    const o = e, a = t, l = P(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), R($t, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        s("div", CI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", xI, [
            c[5] || (c[5] = s("span", { class: "icon" }, "✓", -1)),
            s("div", null, [
              c[4] || (c[4] = s("strong", null, "All clear!", -1)),
              s("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(B, { key: 1 }, [
            c[6] || (c[6] = s("div", { class: "warning-header" }, [
              s("span", { class: "icon" }, "⚠"),
              s("div", null, [
                s("strong", null, "Node Version Differences"),
                s("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            s("div", SI, [
              (n(!0), i(B, null, ge(e.validation.node_conflicts, (u) => (n(), R($I, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = s("div", { class: "info-box" }, [
              s("strong", null, "What happens if you proceed?"),
              s("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", II, [
            c[8] || (c[8] = s("h4", null, "Warnings", -1)),
            s("ul", null, [
              (n(!0), i(B, null, ge(e.validation.warnings, (u, d) => (n(), i("li", { key: d }, m(u), 1))), 128))
            ])
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: c[0] || (c[0] = (u) => a("cancel"))
        }, {
          default: h(() => [...c[9] || (c[9] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        c[11] || (c[11] = s("div", { class: "footer-spacer" }, null, -1)),
        b(De, {
          variant: "secondary",
          onClick: c[1] || (c[1] = (u) => a("goBack"))
        }, {
          default: h(() => [...c[10] || (c[10] = [
            $(" ← Change Choices ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: "primary",
          loading: e.executing,
          onClick: c[2] || (c[2] = (u) => a("proceed"))
        }, {
          default: h(() => [
            $(m(l.value), 1)
          ]),
          _: 1
        }, 8, ["loading"])
      ]),
      _: 1
    }));
  }
}), TI = /* @__PURE__ */ xe(EI, [["__scopeId", "data-v-fefd26ed"]]), MI = {
  key: 0,
  class: "embedded-toolbar"
}, PI = { class: "embedded-toolbar-search" }, RI = /* @__PURE__ */ be({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: t }) {
    const o = t, {
      getRemotes: a,
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
    } = ct(), _ = k([]), x = k({}), C = k(!1), S = k(null), I = k(""), M = k(!1), T = k(null), D = k(!1), z = k("add"), G = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = P(() => {
      if (!I.value.trim()) return _.value;
      const Ve = I.value.toLowerCase();
      return _.value.filter(
        (Ue) => Ue.name.toLowerCase().includes(Ve) || Ue.fetch_url.toLowerCase().includes(Ve) || Ue.push_url.toLowerCase().includes(Ve)
      );
    });
    async function q() {
      C.value = !0, S.value = null;
      try {
        const Ve = await a();
        _.value = Ve.remotes, await Promise.all(
          Ve.remotes.map(async (Ue) => {
            const W = await d(Ue.name);
            W && (x.value[Ue.name] = W);
          })
        );
      } catch (Ve) {
        S.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        C.value = !1;
      }
    }
    function ce() {
      z.value = "add", G.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function ne(Ve) {
      const Ue = _.value.find((W) => W.name === Ve);
      Ue && (z.value = "edit", G.value = {
        name: Ue.name,
        fetchUrl: Ue.fetch_url,
        pushUrl: Ue.push_url
      }, D.value = !0);
    }
    async function Y(Ve) {
      try {
        z.value === "add" ? await l(Ve.name, Ve.fetchUrl) : await c(Ve.name, Ve.fetchUrl, Ve.pushUrl || void 0), D.value = !1, await q();
      } catch (Ue) {
        S.value = Ue instanceof Error ? Ue.message : "Operation failed";
      }
    }
    function we() {
      D.value = !1, G.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function ee(Ve) {
      T.value = Ve;
      try {
        await u(Ve);
        const Ue = await d(Ve);
        Ue && (x.value[Ve] = Ue), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Ue) {
        o("toast", Ue instanceof Error ? Ue.message : "Fetch failed", "error");
      } finally {
        T.value = null;
      }
    }
    async function j(Ve) {
      if (confirm(`Remove remote "${Ve}"?`))
        try {
          await r(Ve), await q();
        } catch (Ue) {
          S.value = Ue instanceof Error ? Ue.message : "Failed to remove remote";
        }
    }
    function K() {
      window.open("https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes", "_blank");
    }
    const ke = k("idle"), se = P(() => ke.value === "pull_preview"), fe = P(
      () => ke.value === "resolving" || ke.value === "validating"
    ), U = P(
      () => ke.value === "validation_review" || ke.value === "executing"
    ), me = k(!1), Pe = k(null), ye = k(!1), Z = k(null), Q = k(null), $e = k(!1), te = k(null), oe = k(null), Re = k(/* @__PURE__ */ new Map()), ve = k(null), le = k(null), E = P(() => te.value && bc(te.value) ? te.value : null);
    async function A(Ve) {
      Q.value = Ve, ke.value = "pull_preview", $e.value = !0, te.value = null, oe.value = null;
      try {
        te.value = await v(Ve);
      } catch (Ue) {
        oe.value = Ue instanceof Error ? Ue.message : "Failed to load pull preview";
      } finally {
        $e.value = !1;
      }
    }
    function re() {
      ke.value = "idle", te.value = null, oe.value = null, Q.value = null;
    }
    async function Ee(Ve) {
      if (!Q.value) return;
      ke.value = "executing", oe.value = null;
      const Ue = Q.value;
      try {
        const W = await f(Ue, Ve);
        if (W.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Ue}`, "success"), await q();
      } catch (W) {
        oe.value = W instanceof Error ? W.message : "Pull failed", ke.value = "pull_preview";
      }
    }
    function Ce() {
      E.value && (ke.value = "resolving", le.value = null);
    }
    function Se(Ve, Ue) {
      Re.value.set(Ve, { name: Ve, resolution: Ue });
    }
    function ze() {
      ke.value = "pull_preview";
    }
    async function Fe() {
      ke.value = "validating", le.value = null;
      try {
        const Ve = Array.from(Re.value.values());
        ve.value = await g(Q.value, Ve), ke.value = "validation_review";
      } catch (Ve) {
        le.value = Ve instanceof Error ? Ve.message : "Validation failed", ke.value = "resolving";
      }
    }
    async function Ne() {
      ke.value = "executing";
      const Ve = Q.value;
      try {
        const Ue = Array.from(Re.value.values()), W = await f(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ue
        });
        if (W.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${W.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Ve}`, "success"), await q();
      } catch (Ue) {
        oe.value = Ue instanceof Error ? Ue.message : "Pull failed", ke.value = "validation_review";
      }
    }
    function Te() {
      ke.value = "resolving";
    }
    function Je() {
      We(), ke.value = "idle";
    }
    function We() {
      Re.value.clear(), ve.value = null, le.value = null, oe.value = null, te.value = null, Q.value = null;
    }
    async function pe(Ve) {
      Q.value = Ve, me.value = !0, $e.value = !0, Pe.value = null, Z.value = null;
      try {
        Pe.value = await p(Ve);
      } catch (Ue) {
        Z.value = Ue instanceof Error ? Ue.message : "Failed to load push preview";
      } finally {
        $e.value = !1;
      }
    }
    async function J() {
      if (Q.value) {
        $e.value = !0, Z.value = null;
        try {
          Pe.value = await p(Q.value);
        } catch (Ve) {
          Z.value = Ve instanceof Error ? Ve.message : "Failed to refresh push preview";
        } finally {
          $e.value = !1;
        }
      }
    }
    function qe() {
      me.value = !1, Pe.value = null, Z.value = null, Q.value = null;
    }
    async function Ie(Ve) {
      var W;
      if (!Q.value) return;
      ye.value = !0;
      const Ue = Q.value;
      Z.value = null;
      try {
        await w(Ue, Ve), qe(), o("toast", `✓ Pushed to ${Ue}`, "success"), await q();
      } catch (ue) {
        const he = ue instanceof Error ? ue.message : "Push failed";
        Z.value = he, ue instanceof ec && ue.status === 409 && ((W = ue.data) != null && W.needs_force) && Pe.value ? Pe.value = {
          ...Pe.value,
          remote_has_new_commits: !0,
          needs_force: !0,
          can_push: !0,
          block_reason: null
        } : o("toast", he, "error");
      } finally {
        ye.value = !1;
      }
    }
    function Xe() {
      const Ve = Q.value;
      qe(), Ve && A(Ve);
    }
    return at(q), (Ve, Ue) => (n(), i(B, null, [
      b(Ot, null, Qt({
        content: h(() => [
          C.value ? (n(), R($s, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (n(), R(Cs, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            e.embedded && !D.value ? (n(), i("div", MI, [
              s("div", PI, [
                b(ro, {
                  modelValue: I.value,
                  "onUpdate:modelValue": Ue[2] || (Ue[2] = (W) => I.value = W),
                  placeholder: "🔍 Search remotes..."
                }, null, 8, ["modelValue"])
              ]),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: ce
              }, {
                default: h(() => [...Ue[5] || (Ue[5] = [
                  $(" + Add Remote ", -1)
                ])]),
                _: 1
              })
            ])) : y("", !0),
            D.value ? (n(), R(h8, {
              key: 1,
              mode: z.value,
              "remote-name": G.value.name,
              "fetch-url": G.value.fetchUrl,
              "push-url": G.value.pushUrl,
              onSubmit: Y,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            L.value.length && !D.value ? (n(), R(It, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(L.value, (W) => (n(), R(n8, {
                  key: W.name,
                  remote: W,
                  "sync-status": x.value[W.name],
                  "fetching-remote": T.value,
                  onFetch: ee,
                  onEdit: ne,
                  onRemove: j,
                  onPull: A,
                  onPush: pe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !D.value ? (n(), R(rs, {
              key: 3,
              icon: "🌐",
              message: I.value ? `No remotes match '${I.value}'` : "No remotes configured."
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "primary",
                  onClick: ce
                }, {
                  default: h(() => [...Ue[6] || (Ue[6] = [
                    $(" Add Your First Remote ", -1)
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
              onInfoClick: Ue[0] || (Ue[0] = (W) => M.value = !0)
            }, {
              actions: h(() => [
                D.value ? y("", !0) : (n(), R(Me, {
                  key: 0,
                  variant: "primary",
                  size: "sm",
                  onClick: ce
                }, {
                  default: h(() => [...Ue[4] || (Ue[4] = [
                    $(" + Add Remote ", -1)
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
            D.value ? y("", !0) : (n(), R(ro, {
              key: 0,
              modelValue: I.value,
              "onUpdate:modelValue": Ue[1] || (Ue[1] = (W) => I.value = W),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(Yt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: Ue[3] || (Ue[3] = (W) => M.value = !1)
      }, {
        content: h(() => [...Ue[7] || (Ue[7] = [
          s("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          s("p", null, [
            $(" The "),
            s("strong", null, '"origin"'),
            $(" remote is typically the main repository you cloned from. You can configure multiple remotes for collaboration workflows. ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "link",
            onClick: K
          }, {
            default: h(() => [...Ue[8] || (Ue[8] = [
              $(" Learn more about Git remotes → ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      b(a4, {
        show: se.value,
        "remote-name": Q.value || "",
        preview: te.value,
        loading: $e.value,
        pulling: ke.value === "executing",
        error: oe.value,
        "conflict-resolutions": Re.value,
        onClose: re,
        onPull: Ee,
        onOpenConflictResolution: Ce
      }, null, 8, ["show", "remote-name", "preview", "loading", "pulling", "error", "conflict-resolutions"]),
      b(P4, {
        show: me.value,
        "remote-name": Q.value || "",
        preview: Pe.value,
        loading: $e.value,
        pushing: ye.value,
        error: Z.value,
        onClose: qe,
        onPush: Ie,
        onPullFirst: Xe,
        onRevalidate: J
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      fe.value && E.value ? (n(), R(rI, {
        key: 0,
        "workflow-conflicts": E.value.workflow_conflicts,
        resolutions: Re.value,
        "operation-type": "pull",
        validating: ke.value === "validating",
        error: le.value,
        onClose: ze,
        onResolve: Se,
        onApply: Fe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      U.value && ve.value ? (n(), R(TI, {
        key: 1,
        validation: ve.value,
        "operation-type": "pull",
        executing: ke.value === "executing",
        onProceed: Ne,
        onGoBack: Te,
        onCancel: Je
      }, null, 8, ["validation", "executing"])) : y("", !0)
    ], 64));
  }
}), LI = /* @__PURE__ */ xe(RI, [["__scopeId", "data-v-a6651a66"]]), DI = /* @__PURE__ */ be({
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
    const o = e, a = t, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return ht(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), R(Ot, null, {
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
        r.value === "history" ? (n(), R(y5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), R(V5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), R(LI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), NI = { class: "text-viewer-wrapper" }, UI = ["disabled", "title"], OI = { class: "text-content" }, AI = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle");
    async function l() {
      if (t.content)
        try {
          await El(t.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", NI, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, UI),
        s("pre", OI, m(e.content), 1)
      ], 544)
    ]));
  }
}), zI = /* @__PURE__ */ xe(AI, [["__scopeId", "data-v-85a537ba"]]), FI = {
  key: 1,
  class: "manifest-viewer-shell"
}, VI = { class: "manifest-path" }, BI = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: t } = ct(), o = k(!1), a = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, a.value = null;
      try {
        r.value = await t();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return at(c), (u, d) => (n(), i(B, null, [
      b(Ot, null, Qt({
        content: h(() => [
          o.value ? (n(), R($s, {
            key: 0,
            message: "Loading manifest..."
          })) : a.value ? (n(), R(Cs, {
            key: 1,
            message: a.value,
            retry: !0,
            onRetry: c
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            !r.value.exists || !r.value.content ? (n(), R(rs, {
              key: 0,
              icon: "📄",
              message: "No manifest content available"
            })) : (n(), i("div", FI, [
              b(zI, {
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
                    $(m(o.value ? "Loading..." : "Refresh"), 1)
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
      b(Yt, {
        show: l.value,
        title: "About Manifest View",
        onClose: d[2] || (d[2] = (v) => l.value = !1)
      }, {
        content: h(() => [
          d[3] || (d[3] = s("p", null, [
            $(" This view shows the live "),
            s("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            s("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          s("div", VI, [
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
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), WI = /* @__PURE__ */ xe(BI, [["__scopeId", "data-v-814a8fdd"]]), GI = { class: "log-viewer-wrapper" }, jI = ["disabled", "title"], HI = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const t = e, o = k(null), a = k("idle"), l = P(() => t.logs.map((v) => ({
      text: t.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Pt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), ht(() => t.logs, r);
    async function c() {
      if (l.value.length === 0) return;
      const v = l.value.map((f) => f.text).join(`
`);
      try {
        await El(v), a.value = "copied", setTimeout(() => {
          a.value = "idle";
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
    return (v, f) => (n(), i("div", GI, [
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
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, jI),
        (n(!0), i(B, null, ge(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), $c = /* @__PURE__ */ xe(HI, [["__scopeId", "data-v-5aaf1b88"]]), qI = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: t, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await t(void 0, 500);
        try {
          const x = await o();
          v.value = x.environment || "production";
        } catch {
        }
      } catch (x) {
        u.value = x instanceof Error ? x.message : "Failed to load environment logs";
      } finally {
        c.value = !1;
      }
    }
    async function g() {
      try {
        const x = await a();
        x.exists && (f.value = x.path);
      } catch {
      }
    }
    async function _() {
      if (f.value) {
        p.value = !0;
        try {
          await l(f.value);
        } catch (x) {
          console.error("Failed to open log file:", x);
        } finally {
          p.value = !1;
        }
      }
    }
    return at(() => {
      w(), g();
    }), (x, C) => (n(), i(B, null, [
      b(Ot, null, Qt({
        content: h(() => [
          c.value ? (n(), R($s, {
            key: 0,
            message: "Loading environment logs..."
          })) : u.value ? (n(), R(Cs, {
            key: 1,
            message: u.value,
            retry: !0,
            onRetry: w
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length === 0 ? (n(), R(rs, {
              key: 0,
              icon: "📝",
              message: "No environment logs available"
            })) : (n(), R($c, {
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
              onInfoClick: C[0] || (C[0] = (S) => d.value = !0)
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
                    $(m(p.value ? "Opening..." : "Open Log File"), 1)
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
                    $(m(c.value ? "Loading..." : "Refresh"), 1)
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
      b(Yt, {
        show: d.value,
        title: "About Environment Logs",
        onClose: C[2] || (C[2] = (S) => d.value = !1)
      }, {
        content: h(() => [
          s("p", null, [
            C[3] || (C[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            s("strong", null, m(v.value), 1),
            C[4] || (C[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          C[5] || (C[5] = s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: C[1] || (C[1] = (S) => d.value = !1)
          }, {
            default: h(() => [...C[6] || (C[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ei = /* @__PURE__ */ be({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: t,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), x = P(() => u.value === "workspace" ? w.value : g.value);
    async function C() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await t(void 0, 500) : d.value = await a(void 0, 500);
      } catch (M) {
        f.value = M instanceof Error ? M.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [M, T] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (w.value = M.path), T.exists && (g.value = T.path);
      } catch {
      }
    }
    async function I() {
      if (x.value) {
        _.value = !0;
        try {
          await r(x.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          _.value = !1;
        }
      }
    }
    return ht(u, () => {
      C();
    }), ht(() => c.initialTab, (M) => {
      M && (u.value = M);
    }), at(() => {
      C(), S();
    }), (M, T) => (n(), i(B, null, [
      b(Ot, null, Qt({
        content: h(() => [
          v.value ? (n(), R($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), R(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: C
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            d.value.length === 0 ? (n(), R(rs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), R($c, {
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
              onInfoClick: T[0] || (T[0] = (D) => p.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: I,
                  disabled: !x.value || _.value,
                  title: "Open log file in default editor"
                }, {
                  default: h(() => [
                    $(m(_.value ? "Opening..." : "Open Log File"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: C,
                  disabled: v.value
                }, {
                  default: h(() => [
                    $(m(v.value ? "Loading..." : "Refresh"), 1)
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
              "onUpdate:modelValue": T[1] || (T[1] = (D) => u.value = D),
              tabs: [
                { id: "workspace", label: "Workspace" },
                { id: "orchestrator", label: "Orchestrator" }
              ]
            }, null, 8, ["modelValue"])
          ]),
          key: "1"
        }
      ]), 1024),
      b(Yt, {
        show: p.value,
        title: "About Logs",
        onClose: T[3] || (T[3] = (D) => p.value = !1)
      }, {
        content: h(() => [...T[4] || (T[4] = [
          s("p", null, [
            s("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          s("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            s("strong", null, "Log Levels:"),
            s("br"),
            s("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            s("br"),
            s("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            s("br"),
            s("strong", null, "INFO:"),
            $(" General operational information"),
            s("br"),
            s("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: T[2] || (T[2] = (D) => p.value = !1)
          }, {
            default: h(() => [...T[5] || (T[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), KI = /* @__PURE__ */ be({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const t = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = k(t.initialTab ?? "manifest"), l = k(
      t.initialTab && t.initialTab !== "manifest" ? t.initialTab : "env"
    ), r = k(!1), c = P(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = P(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return ht(() => t.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), ht(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, v) => (n(), i(B, null, [
      b(Ot, null, Qt({
        header: h(() => [
          b(At, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), R(WI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), R(qI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), R(Ei, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), R(Ei, {
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
            b(Pl, {
              modelValue: l.value,
              "onUpdate:modelValue": v[1] || (v[1] = (f) => l.value = f),
              tabs: o
            }, null, 8, ["modelValue"])
          ]),
          key: "0"
        } : void 0
      ]), 1024),
      b(Yt, {
        show: r.value,
        title: u.value,
        "max-width": "520px",
        onClose: v[3] || (v[3] = (f) => r.value = !1)
      }, {
        content: h(() => [
          a.value === "manifest" ? (n(), i(B, { key: 0 }, [
            v[4] || (v[4] = s("p", null, [
              s("strong", null, "Manifest"),
              $(" shows the live "),
              s("strong", null, "pyproject.toml"),
              $(" from the current environment's "),
              s("strong", null, ".cec"),
              $(" directory. ")
            ], -1)),
            v[5] || (v[5] = s("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = s("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (n(), i(B, { key: 1 }, [
            v[7] || (v[7] = s("p", null, [
              s("strong", null, "Logging"),
              $(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = s("p", null, [
              s("strong", null, "Environment"),
              $(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = s("p", null, [
              s("strong", null, "Workspace"),
              $(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = s("p", null, [
              s("strong", null, "Orchestrator"),
              $(" logs show supervisor and handoff behavior for environment creation, switching, restarts, and process management. ")
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
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show", "title"])
    ], 64));
  }
}), JI = { class: "header-info" }, QI = { class: "commit-hash" }, YI = {
  key: 0,
  class: "commit-refs"
}, XI = { class: "commit-message" }, ZI = { class: "commit-date" }, e6 = {
  key: 0,
  class: "loading"
}, t6 = {
  key: 1,
  class: "changes-section"
}, s6 = { class: "stats-row" }, o6 = { class: "stat" }, n6 = { class: "stat insertions" }, a6 = { class: "stat deletions" }, l6 = {
  key: 0,
  class: "change-group"
}, i6 = {
  key: 1,
  class: "change-group"
}, r6 = {
  key: 0,
  class: "version"
}, c6 = {
  key: 2,
  class: "change-group"
}, u6 = { class: "change-item" }, d6 = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const t = e, { getCommitDetail: o } = ct(), a = k(null), l = k(!0), r = P(() => {
      if (!a.value) return !1;
      const u = a.value.changes.workflows;
      return u.added.length > 0 || u.modified.length > 0 || u.deleted.length > 0;
    }), c = P(() => {
      if (!a.value) return !1;
      const u = a.value.changes.nodes;
      return u.added.length > 0 || u.removed.length > 0;
    });
    return at(async () => {
      try {
        a.value = await o(t.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), R($t, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          s("div", JI, [
            d[4] || (d[4] = s("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            s("span", QI, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", YI, [
              (n(!0), i(B, null, ge(a.value.refs, (g) => (n(), i("span", {
                key: g,
                class: "ref-badge"
              }, m(g), 1))), 128))
            ])) : y("", !0)
          ]),
          b(De, {
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
          s("div", XI, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          s("div", ZI, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", e6, "Loading details...")) : a.value ? (n(), i("div", t6, [
            s("div", s6, [
              s("span", o6, m(a.value.stats.files_changed) + " files", 1),
              s("span", n6, "+" + m(a.value.stats.insertions), 1),
              s("span", a6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", l6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[6] || (d[6] = [
                  $("WORKFLOWS", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, ge(a.value.changes.workflows.added, (p) => (n(), i("div", {
                key: "add-" + p,
                class: "change-item added"
              }, [
                d[7] || (d[7] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = s("span", { class: "change-icon" }, "~", -1)),
                s("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", i6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[10] || (d[10] = [
                  $("NODES", -1)
                ])]),
                _: 1
              }),
              (n(!0), i(B, null, ge(a.value.changes.nodes.added, (p) => (n(), i("div", {
                key: "add-" + p.name,
                class: "change-item added"
              }, [
                d[11] || (d[11] = s("span", { class: "change-icon" }, "+", -1)),
                s("span", null, m(p.name), 1),
                p.version ? (n(), i("span", r6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = s("span", { class: "change-icon" }, "-", -1)),
                s("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", c6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              s("div", u6, [
                d[14] || (d[14] = s("span", { class: "change-icon" }, "●", -1)),
                s("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
              ])
            ])) : y("", !0)
          ])) : y("", !0)
        ];
      }),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: d[1] || (d[1] = (v) => u.$emit("createBranch", e.commit))
        }, {
          default: h(() => [...d[15] || (d[15] = [
            $(" Create Branch From Here ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: "primary",
          onClick: d[2] || (d[2] = (v) => u.$emit("checkout", e.commit))
        }, {
          default: h(() => [...d[16] || (d[16] = [
            $(" Checkout ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), m6 = /* @__PURE__ */ xe(d6, [["__scopeId", "data-v-d256ff6d"]]), f6 = { class: "popover-header" }, v6 = { class: "popover-body" }, p6 = {
  key: 0,
  class: "changes-summary"
}, g6 = {
  key: 0,
  class: "change-item"
}, h6 = {
  key: 1,
  class: "change-item"
}, y6 = {
  key: 2,
  class: "change-item"
}, w6 = {
  key: 3,
  class: "change-item"
}, _6 = {
  key: 4,
  class: "change-item"
}, k6 = {
  key: 5,
  class: "change-item"
}, b6 = {
  key: 1,
  class: "no-changes"
}, $6 = {
  key: 2,
  class: "loading"
}, C6 = {
  key: 3,
  class: "issues-error"
}, x6 = { class: "error-header" }, S6 = { class: "error-title" }, I6 = { class: "issues-list" }, E6 = { class: "workflow-state" }, T6 = { class: "message-section" }, M6 = { class: "popover-footer" }, P6 = {
  key: 1,
  class: "commit-popover"
}, R6 = { class: "popover-header" }, L6 = { class: "popover-body" }, D6 = {
  key: 0,
  class: "changes-summary"
}, N6 = {
  key: 0,
  class: "change-item"
}, U6 = {
  key: 1,
  class: "change-item"
}, O6 = {
  key: 2,
  class: "change-item"
}, A6 = {
  key: 3,
  class: "change-item"
}, z6 = {
  key: 4,
  class: "change-item"
}, F6 = {
  key: 5,
  class: "change-item"
}, V6 = {
  key: 1,
  class: "no-changes"
}, B6 = {
  key: 2,
  class: "loading"
}, W6 = {
  key: 3,
  class: "issues-error"
}, G6 = { class: "error-header" }, j6 = { class: "error-title" }, H6 = { class: "issues-list" }, q6 = { class: "workflow-state" }, K6 = { class: "message-section" }, J6 = { class: "popover-footer" }, Q6 = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: t }) {
    const o = e, a = t, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || o.status.has_changes;
    }), v = P(() => {
      if (!o.status) return !1;
      const _ = o.status.workflows, x = o.status.git_changes;
      return _.new.length > 0 || _.modified.length > 0 || _.deleted.length > 0 || x.nodes_added.length > 0 || x.nodes_removed.length > 0;
    }), f = P(() => {
      var _;
      return (_ = o.status) != null && _.workflows.analyzed ? o.status.workflows.analyzed.filter((x) => x.has_issues) : [];
    }), p = P(() => f.value.length > 0), w = P(() => p.value && !u.value);
    async function g() {
      var _, x, C, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const I = await l(r.value.trim(), u.value);
          if (I.status === "success") {
            const M = `Committed: ${((_ = I.summary) == null ? void 0 : _.new) || 0} new, ${((x = I.summary) == null ? void 0 : x.modified) || 0} modified, ${((C = I.summary) == null ? void 0 : C.deleted) || 0} deleted`;
            a("committed", { success: !0, message: M });
          } else if (I.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (I.status === "blocked") {
            const M = ((S = I.issues) == null ? void 0 : S.map((T) => `${T.name}: ${T.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: I.message || "Commit failed" });
        } catch (I) {
          a("committed", { success: !1, message: I instanceof Error ? I.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, x) => e.asModal ? (n(), R(Kt, {
      key: 0,
      to: "body"
    }, [
      s("div", {
        class: "modal-overlay",
        onClick: x[5] || (x[5] = (C) => a("close"))
      }, [
        s("div", {
          class: "commit-popover modal",
          onClick: x[4] || (x[4] = yt(() => {
          }, ["stop"]))
        }, [
          s("div", f6, [
            x[11] || (x[11] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            s("button", {
              class: "close-btn",
              onClick: x[0] || (x[0] = (C) => a("close"))
            }, [...x[10] || (x[10] = [
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
          s("div", v6, [
            e.status && d.value ? (n(), i("div", p6, [
              e.status.workflows.new.length ? (n(), i("div", g6, [
                x[12] || (x[12] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", h6, [
                x[13] || (x[13] = s("span", { class: "change-icon modified" }, "~", -1)),
                s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", y6, [
                x[14] || (x[14] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", w6, [
                x[15] || (x[15] = s("span", { class: "change-icon new" }, "+", -1)),
                s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", _6, [
                x[16] || (x[16] = s("span", { class: "change-icon deleted" }, "-", -1)),
                s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (n(), i("div", k6, [...x[17] || (x[17] = [
                s("span", { class: "change-icon modified" }, "~", -1),
                s("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", b6, " No changes to commit ")) : (n(), i("div", $6, " Loading... ")),
            p.value ? (n(), i("div", C6, [
              s("div", x6, [
                x[18] || (x[18] = s("span", { class: "error-icon" }, "⚠", -1)),
                s("span", S6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              s("div", I6, [
                (n(!0), i(B, null, ge(f.value, (C) => (n(), i("div", {
                  key: C.name,
                  class: "issue-item"
                }, [
                  s("strong", null, m(C.name), 1),
                  s("span", E6, "(" + m(C.sync_state) + ")", 1),
                  $(": " + m(C.issue_summary), 1)
                ]))), 128))
              ]),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": x[1] || (x[1] = (C) => u.value = C),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...x[19] || (x[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            s("div", T6, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": x[2] || (x[2] = (C) => r.value = C),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          s("div", M6, [
            b(De, {
              variant: "secondary",
              onClick: x[3] || (x[3] = (C) => a("close"))
            }, {
              default: h(() => [...x[20] || (x[20] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(De, {
              variant: u.value ? "danger" : "primary",
              disabled: !d.value || !r.value.trim() || c.value || w.value,
              loading: c.value,
              onClick: g
            }, {
              default: h(() => [
                $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
              ]),
              _: 1
            }, 8, ["variant", "disabled", "loading"])
          ])
        ])
      ])
    ])) : (n(), i("div", P6, [
      s("div", R6, [
        x[22] || (x[22] = s("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        s("button", {
          class: "close-btn",
          onClick: x[6] || (x[6] = (C) => a("close"))
        }, [...x[21] || (x[21] = [
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
      s("div", L6, [
        e.status && d.value ? (n(), i("div", D6, [
          e.status.workflows.new.length ? (n(), i("div", N6, [
            x[23] || (x[23] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", U6, [
            x[24] || (x[24] = s("span", { class: "change-icon modified" }, "~", -1)),
            s("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", O6, [
            x[25] || (x[25] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", A6, [
            x[26] || (x[26] = s("span", { class: "change-icon new" }, "+", -1)),
            s("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", z6, [
            x[27] || (x[27] = s("span", { class: "change-icon deleted" }, "-", -1)),
            s("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (n(), i("div", F6, [...x[28] || (x[28] = [
            s("span", { class: "change-icon modified" }, "~", -1),
            s("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", V6, " No changes to commit ")) : (n(), i("div", B6, " Loading... ")),
        p.value ? (n(), i("div", W6, [
          s("div", G6, [
            x[29] || (x[29] = s("span", { class: "error-icon" }, "⚠", -1)),
            s("span", j6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          s("div", H6, [
            (n(!0), i(B, null, ge(f.value, (C) => (n(), i("div", {
              key: C.name,
              class: "issue-item"
            }, [
              s("strong", null, m(C.name), 1),
              s("span", q6, "(" + m(C.sync_state) + ")", 1),
              $(": " + m(C.issue_summary), 1)
            ]))), 128))
          ]),
          b(Jn, {
            modelValue: u.value,
            "onUpdate:modelValue": x[7] || (x[7] = (C) => u.value = C),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...x[30] || (x[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        s("div", K6, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": x[8] || (x[8] = (C) => r.value = C),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      s("div", J6, [
        b(De, {
          variant: "secondary",
          onClick: x[9] || (x[9] = (C) => a("close"))
        }, {
          default: h(() => [...x[31] || (x[31] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(De, {
          variant: u.value ? "danger" : "primary",
          disabled: !d.value || !r.value.trim() || c.value || w.value,
          loading: c.value,
          onClick: g
        }, {
          default: h(() => [
            $(m(c.value ? "Committing..." : u.value ? "⚠️ Force Commit" : "Commit"), 1)
          ]),
          _: 1
        }, 8, ["variant", "disabled", "loading"])
      ])
    ]));
  }
}), Cc = /* @__PURE__ */ xe(Q6, [["__scopeId", "data-v-5f897631"]]), Y6 = { class: "switch-body" }, X6 = { class: "switch-message" }, Z6 = { class: "switch-details" }, eE = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => e.show ? (n(), R($t, {
      key: 0,
      title: "Confirm Environment Switch",
      size: "md",
      "overlay-z-index": 10005,
      onClose: o[2] || (o[2] = (a) => t.$emit("close"))
    }, {
      body: h(() => [
        s("div", Y6, [
          s("p", X6, [
            o[3] || (o[3] = $(" Switch from ", -1)),
            s("strong", null, m(e.fromEnvironment), 1),
            o[4] || (o[4] = $(" to ", -1)),
            s("strong", null, m(e.toEnvironment), 1),
            o[5] || (o[5] = $("? ", -1))
          ]),
          o[6] || (o[6] = s("div", { class: "warning-box" }, [
            s("span", { class: "warning-icon" }, "⚠"),
            s("span", null, "This will restart ComfyUI")
          ], -1)),
          s("p", Z6, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
          o[7] || (o[7] = s("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
        ])
      ]),
      footer: h(() => [
        b(Me, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => t.$emit("close"))
        }, {
          default: h(() => [...o[8] || (o[8] = [
            $(" Cancel ", -1)
          ])]),
          _: 1
        }),
        b(Me, {
          variant: "primary",
          onClick: o[1] || (o[1] = (a) => t.$emit("confirm"))
        }, {
          default: h(() => [...o[9] || (o[9] = [
            $(" Switch ", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    })) : y("", !0);
  }
}), tE = /* @__PURE__ */ xe(eE, [["__scopeId", "data-v-f6d223e6"]]), sE = {
  key: 0,
  class: "modal-overlay"
}, oE = { class: "modal-content" }, nE = { class: "modal-body" }, aE = { class: "progress-info" }, lE = { class: "progress-percentage" }, iE = { class: "progress-state" }, rE = { class: "switch-steps" }, cE = { class: "step-icon" }, uE = { class: "step-label" }, dE = /* @__PURE__ */ be({
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
    }), a = P(() => t.state === "complete" ? "success" : t.state === "critical_failure" || t.state === "rolled_back" ? "error" : "default"), l = P(() => {
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
    return (r, c) => (n(), R(Kt, { to: "body" }, [
      e.show ? (n(), i("div", sE, [
        s("div", oE, [
          c[1] || (c[1] = s("div", { class: "modal-header" }, [
            s("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          s("div", nE, [
            b(gc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            s("div", aE, [
              s("div", lE, m(e.progress) + "%", 1),
              s("div", iE, m(o.value), 1)
            ]),
            s("div", rE, [
              (n(!0), i(B, null, ge(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                s("span", cE, m(u.icon), 1),
                s("span", uE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = s("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), mE = /* @__PURE__ */ xe(dE, [["__scopeId", "data-v-768a5078"]]), fE = { class: "modal-header" }, vE = { class: "modal-body" }, pE = {
  key: 0,
  class: "node-section"
}, gE = { class: "node-list" }, hE = {
  key: 1,
  class: "node-section"
}, yE = { class: "node-list" }, wE = { class: "modal-actions" }, _E = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (t, o) => (n(), R(Kt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => t.$emit("close"))
      }, [
        s("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = yt(() => {
          }, ["stop"]))
        }, [
          s("div", fE, [
            o[5] || (o[5] = s("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            s("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => t.$emit("close"))
            }, "✕")
          ]),
          s("div", vE, [
            o[8] || (o[8] = s("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", pE, [
              o[6] || (o[6] = s("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              s("div", gE, [
                (n(!0), i(B, null, ge(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", hE, [
              o[7] || (o[7] = s("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              s("div", yE, [
                (n(!0), i(B, null, ge(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = s("div", { class: "warning-box" }, [
              s("span", { class: "warning-icon" }, "⚠"),
              s("span", null, "This may take several minutes")
            ], -1))
          ]),
          s("div", wE, [
            b(Me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => t.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => t.$emit("confirm"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Sync Now ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), kE = /* @__PURE__ */ xe(_E, [["__scopeId", "data-v-7cad7518"]]), bE = [
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
], In = "v0.0.24", $E = "Akatz", CE = { class: "social-buttons" }, xE = ["title", "aria-label", "onClick"], SE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, IE = ["d"], EE = ["title", "aria-label", "onClick"], TE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, ME = ["d"], PE = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function t(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", CE, [
      (n(!0), i(B, null, ge(st(bE), (l) => (n(), i(B, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", SE, [
            s("path", {
              d: l.iconPath
            }, null, 8, IE)
          ]))
        ], 8, xE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => t(l.url)
        }, [
          (n(), i("svg", TE, [
            s("path", {
              d: l.iconPath
            }, null, 8, ME)
          ]))
        ], 8, EE))
      ], 64))), 128))
    ]));
  }
}), xc = /* @__PURE__ */ xe(PE, [["__scopeId", "data-v-4f846342"]]), RE = { class: "footer-info" }, LE = ["title"], DE = {
  key: 0,
  class: "dev-badge"
}, NE = { class: "made-by" }, UE = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: t } = ct(), o = k(null), a = k(null), l = k(null), r = P(() => o.value === "development"), c = P(() => {
      var d;
      if (!r.value) return In;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${In} (${u})` : `${In} (development)`;
    });
    return at(async () => {
      try {
        const u = await t();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", RE, [
      s("span", {
        class: "version",
        title: c.value
      }, [
        $(m(st(In)) + " ", 1),
        r.value ? (n(), i("span", DE, "dev")) : y("", !0)
      ], 8, LE),
      s("span", NE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = s("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          s("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + m(st($E)), 1)
      ])
    ]));
  }
}), Sc = /* @__PURE__ */ xe(UE, [["__scopeId", "data-v-4fa265b3"]]), OE = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = k(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), R($t, {
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
          b(De, {
            variant: "primary",
            disabled: !((u = o.value) != null && u.hasChanges),
            onClick: a
          }, {
            default: h(() => [...c[2] || (c[2] = [
              $(" Save Changes ", -1)
            ])]),
            _: 1
          }, 8, ["disabled"]),
          b(De, {
            variant: "secondary",
            onClick: c[0] || (c[0] = (d) => r.$emit("close"))
          }, {
            default: h(() => [...c[3] || (c[3] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })
        ];
      }),
      _: 1
    }));
  }
}), AE = /* @__PURE__ */ xe(OE, [["__scopeId", "data-v-fac00ae7"]]), zE = { class: "header-actions" }, FE = {
  key: 0,
  class: "wizard-step"
}, VE = { class: "form-field" }, BE = ["placeholder"], WE = {
  key: 0,
  class: "form-error"
}, GE = { class: "form-field form-field--checkbox" }, jE = { class: "form-checkbox" }, HE = {
  key: 0,
  class: "form-field"
}, qE = ["placeholder"], KE = {
  key: 0,
  class: "form-info"
}, JE = {
  key: 1,
  class: "form-suggestion"
}, QE = {
  key: 2,
  class: "form-error"
}, YE = {
  key: 3,
  class: "form-info"
}, XE = {
  key: 1,
  class: "wizard-step"
}, ZE = {
  key: 0,
  class: "progress-check-loading"
}, eT = {
  key: 0,
  class: "cli-warning"
}, tT = { class: "cli-warning-header" }, sT = {
  key: 1,
  class: "env-landing"
}, oT = { class: "env-list" }, nT = ["value"], aT = { class: "env-name" }, lT = {
  key: 2,
  class: "env-create"
}, iT = { class: "form-field" }, rT = { class: "form-field" }, cT = ["value"], uT = { class: "form-field" }, dT = ["disabled"], mT = ["value"], fT = { class: "form-field" }, vT = ["value"], pT = { class: "form-field form-field--checkbox" }, gT = { class: "form-checkbox" }, hT = {
  key: 0,
  class: "form-error"
}, yT = {
  key: 1,
  class: "env-creating"
}, wT = { class: "creating-intro" }, _T = {
  key: 3,
  class: "env-import"
}, kT = { class: "wizard-footer" }, bT = { class: "wizard-footer-actions" }, po = 10, $T = 600 * 1e3, Ti = 1800 * 1e3, CT = /* @__PURE__ */ be({
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
    const o = e, a = t, {
      initializeWorkspace: l,
      getInitializeProgress: r,
      validatePath: c,
      createEnvironment: u,
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), x = k(!1), C = k(!1), S = k(!1), I = k(null), M = k(o.initialStep === 2), T = k(o.defaultPath), D = k(!!o.detectedModelsDir), z = k(o.detectedModelsDir || ""), G = k(null), L = k(null), q = k(null), ce = k(null), ne = k("my-new-env"), Y = k(vc), we = k("latest"), ee = k(pc), j = k(!0), K = k(null), ke = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), fe = k(!1), U = k(!1), me = k(!1), Pe = k({ progress: 0, message: "" }), ye = k({ progress: 0, message: "" }), Z = [
      { id: "init_structure", label: "Initialize structure", progressThreshold: 5 },
      { id: "resolve_version", label: "Resolve ComfyUI version", progressThreshold: 10 },
      { id: "clone_comfyui", label: "Clone/restore ComfyUI", progressThreshold: 25 },
      { id: "configure_environment", label: "Configure environment", progressThreshold: 30 },
      { id: "create_venv", label: "Create virtual environment", progressThreshold: 35 },
      { id: "install_pytorch", label: "Install PyTorch", progressThreshold: 70 },
      { id: "configure_pytorch", label: "Configure PyTorch", progressThreshold: 75 },
      { id: "install_dependencies", label: "Install dependencies", progressThreshold: 95 },
      { id: "finalize", label: "Finalize environment", progressThreshold: 100 }
    ], Q = k(0), $e = k(null), te = k(0), oe = k(null), Re = P(() => {
      var Ie, Xe;
      const pe = (Ie = T.value) == null ? void 0 : Ie.trim(), J = !G.value, qe = !D.value || !L.value && ((Xe = z.value) == null ? void 0 : Xe.trim());
      return pe && J && qe;
    }), ve = P(() => {
      var pe;
      return (pe = ne.value) == null ? void 0 : pe.trim();
    }), le = P(() => !!(p.value === 2 || ke.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), E = P(() => ke.value || o.workspacePath || null);
    async function A() {
      var pe;
      if (G.value = null, !!((pe = T.value) != null && pe.trim()))
        try {
          const J = await c({ path: T.value, type: "workspace" });
          J.valid || (G.value = J.error || "Invalid path");
        } catch (J) {
          G.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function re() {
      var pe;
      if (L.value = null, q.value = null, ce.value = null, !!((pe = z.value) != null && pe.trim()))
        try {
          const J = await c({ path: z.value, type: "models" });
          if (J.valid)
            ce.value = J.model_count ?? null;
          else if (L.value = J.error || "Invalid path", J.suggestion) {
            q.value = J.suggestion, z.value = J.suggestion, L.value = null;
            const qe = await c({ path: J.suggestion, type: "models" });
            qe.valid && (ce.value = qe.model_count ?? null);
          }
        } catch (J) {
          L.value = J instanceof Error ? J.message : "Validation failed";
        }
    }
    async function Ee() {
      var pe, J, qe, Ie, Xe;
      if (G.value = null, L.value = null, await A(), (pe = G.value) != null && pe.includes("already exists")) {
        G.value = null, ke.value = ((J = T.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!G.value && !(D.value && ((qe = z.value) != null && qe.trim()) && (await re(), L.value))) {
        U.value = !0;
        try {
          await l({
            workspace_path: ((Ie = T.value) == null ? void 0 : Ie.trim()) || o.defaultPath,
            models_directory: D.value && ((Xe = z.value) == null ? void 0 : Xe.trim()) || null
          }), Q.value = 0, $e.value = Date.now();
          const Ve = setInterval(async () => {
            var Ue;
            if ($e.value && Date.now() - $e.value > $T) {
              clearInterval(Ve), U.value = !1, G.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const W = await r();
              if (Q.value = 0, W.state === "idle" && U.value) {
                clearInterval(Ve), U.value = !1, G.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: W.progress, message: W.message }, W.state === "complete" ? (clearInterval(Ve), U.value = !1, ke.value = ((Ue = T.value) == null ? void 0 : Ue.trim()) || o.defaultPath, p.value = 2, Se()) : W.state === "error" && (clearInterval(Ve), U.value = !1, G.value = W.error || "Workspace creation failed");
            } catch (W) {
              Q.value++, console.warn(`Polling failure ${Q.value}/${po}:`, W), Q.value >= po && (clearInterval(Ve), U.value = !1, G.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          U.value = !1, G.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
        }
      }
    }
    async function Ce() {
      me.value = !0, K.value = null;
      try {
        const pe = {
          name: ne.value.trim() || "my-new-env",
          python_version: Y.value,
          comfyui_version: we.value,
          torch_backend: ee.value,
          switch_after: j.value,
          workspace_path: ke.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          te.value = 0, oe.value = Date.now();
          const qe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Ti) {
              clearInterval(qe), me.value = !1, K.value = "Environment creation timed out. Check server logs for details.";
              return;
            }
            try {
              const Ie = await d();
              if (te.value = 0, Ie.state === "idle" && me.value) {
                clearInterval(qe), me.value = !1, K.value = "Environment creation was interrupted. Please try again.";
                return;
              }
              if (ye.value = {
                progress: Ie.progress ?? 0,
                message: Ie.message,
                phase: Ie.phase
              }, Ie.state === "complete") {
                clearInterval(qe), me.value = !1;
                const Xe = Ie.environment_name || pe.name;
                j.value ? a("complete", Xe, ke.value) : (g.value = "landing", a("environment-created-no-switch", Xe));
              } else Ie.state === "error" && (clearInterval(qe), me.value = !1, K.value = Ie.error || "Environment creation failed");
            } catch (Ie) {
              te.value++, console.warn(`Polling failure ${te.value}/${po}:`, Ie), te.value >= po && (clearInterval(qe), me.value = !1, K.value = "Lost connection to server. Please refresh and try again.");
            }
          }, 2e3);
        }
      } catch (pe) {
        me.value = !1, K.value = pe instanceof Error ? pe.message : "Unknown error";
      }
    }
    async function Se() {
      fe.value = !0;
      try {
        se.value = await f();
      } catch (pe) {
        console.error("Failed to load ComfyUI releases:", pe);
      } finally {
        fe.value = !1;
      }
    }
    function ze() {
      w.value && a("switch-environment", w.value, ke.value);
    }
    function Fe() {
      g.value === "create" || g.value === "import" ? g.value = "landing" : p.value === 2 && o.setupState === "no_workspace" && (p.value = 1);
    }
    function Ne(pe, J) {
      x.value = !1, J ? a("complete", pe, ke.value) : (a("environment-created-no-switch", pe), g.value = "landing");
    }
    function Te() {
    }
    at(async () => {
      if (o.detectedModelsDir && (z.value = o.detectedModelsDir), o.workspacePath && (ke.value = o.workspacePath), p.value === 2) {
        Se();
        const pe = setTimeout(() => {
          M.value = !1;
        }, 3e3);
        await Je(), clearTimeout(pe), M.value = !1;
      }
    });
    async function Je() {
      try {
        const pe = await d();
        if (console.log("[ComfyGit] Create progress check:", pe.state, pe), pe.state === "creating") {
          console.log("[ComfyGit] Resuming in-progress environment creation:", pe.environment_name), g.value = "create", me.value = !0, ne.value = pe.environment_name || "my-new-env", ye.value = {
            progress: pe.progress ?? 0,
            message: pe.message,
            phase: pe.phase
          }, We();
          return;
        }
      } catch (pe) {
        console.log("[ComfyGit] Create progress check failed:", pe);
      }
      try {
        const pe = await v();
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), I.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, g.value = "import", x.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function We() {
      te.value = 0, oe.value = Date.now();
      let pe = null;
      const J = async () => {
        if (oe.value && Date.now() - oe.value > Ti)
          return pe && clearInterval(pe), me.value = !1, K.value = "Environment creation timed out. Check server logs for details.", !1;
        try {
          const Ie = await d();
          if (te.value = 0, Ie.state === "idle" && me.value)
            return pe && clearInterval(pe), me.value = !1, K.value = "Environment creation was interrupted. Please try again.", !1;
          if (ye.value = {
            progress: Ie.progress ?? 0,
            message: Ie.message,
            phase: Ie.phase
          }, Ie.state === "complete") {
            pe && clearInterval(pe), me.value = !1;
            const Xe = Ie.environment_name || ne.value;
            return a("complete", Xe, ke.value), !1;
          } else if (Ie.state === "error")
            return pe && clearInterval(pe), me.value = !1, K.value = Ie.error || "Environment creation failed", !1;
          return !0;
        } catch (Ie) {
          return te.value++, console.warn(`Polling failure ${te.value}/${po}:`, Ie), te.value >= po ? (pe && clearInterval(pe), me.value = !1, K.value = "Lost connection to server. Please refresh and try again.", !1) : !0;
        }
      };
      await J() && (pe = setInterval(async () => {
        !await J() && pe && clearInterval(pe);
      }, 2e3));
    }
    return (pe, J) => (n(), i(B, null, [
      b($t, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (qe) => pe.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = s("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          s("div", zE, [
            b(xc),
            J[19] || (J[19] = s("span", { class: "header-divider" }, null, -1)),
            le.value ? (n(), i("button", {
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
              onClick: J[1] || (J[1] = (qe) => pe.$emit("close")),
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
            p.value === 1 ? (n(), i("div", FE, [
              J[24] || (J[24] = s("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              s("div", VE, [
                J[21] || (J[21] = s("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Ie) => T.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, BE), [
                  [en, T.value]
                ]),
                G.value ? (n(), i("p", WE, m(G.value), 1)) : y("", !0)
              ]),
              s("div", GE, [
                s("label", jE, [
                  Tt(s("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Ie) => D.value = Ie)
                  }, null, 512), [
                    [Hn, D.value]
                  ]),
                  J[22] || (J[22] = s("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", HE, [
                J[23] || (J[23] = s("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(s("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Ie) => z.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, qE), [
                  [en, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (n(), i("p", KE, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (n(), i("p", JE, " Did you mean: " + m(q.value), 1)) : y("", !0),
                L.value ? (n(), i("p", QE, m(L.value), 1)) : y("", !0),
                ce.value !== null && !L.value ? (n(), i("p", YE, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              U.value ? (n(), R(Kn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", XE, [
              M.value ? (n(), i("div", ZE, [...J[25] || (J[25] = [
                s("div", { class: "loading-spinner" }, null, -1),
                s("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(B, { key: 1 }, [
                !o.cliInstalled && !C.value ? (n(), i("div", eT, [
                  s("div", tT, [
                    J[27] || (J[27] = s("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = s("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    s("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (Ie) => C.value = !0),
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
                g.value === "landing" ? (n(), i("div", sT, [
                  J[34] || (J[34] = s("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  s("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (Ie) => g.value = "create")
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
                    onClick: J[7] || (J[7] = (Ie) => {
                      S.value = !1, g.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    s("span", { class: "option-icon" }, "📦", -1),
                    s("div", { class: "option-content" }, [
                      s("span", { class: "option-title" }, "Import Environment"),
                      s("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    s("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (qe = o.existingEnvironments) != null && qe.length ? (n(), i(B, { key: 0 }, [
                    J[33] || (J[33] = s("div", { class: "landing-divider" }, [
                      s("span", null, "or switch to existing")
                    ], -1)),
                    s("div", oT, [
                      (n(!0), i(B, null, ge(o.existingEnvironments, (Ie) => (n(), i("label", {
                        key: Ie,
                        class: Be(["env-option", { selected: w.value === Ie }])
                      }, [
                        Tt(s("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ie,
                          "onUpdate:modelValue": J[8] || (J[8] = (Xe) => w.value = Xe)
                        }, null, 8, nT), [
                          [Ln, w.value]
                        ]),
                        s("span", aT, m(Ie), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", lT, [
                  me.value ? (n(), i("div", yT, [
                    s("p", wT, [
                      J[41] || (J[41] = $(" Creating environment ", -1)),
                      s("strong", null, m(ne.value), 1),
                      J[42] || (J[42] = $("... ", -1))
                    ]),
                    b(Kn, {
                      progress: ye.value.progress,
                      message: ye.value.message,
                      "current-phase": ye.value.phase,
                      "show-steps": !0,
                      steps: Z
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = s("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(B, { key: 0 }, [
                    J[40] || (J[40] = s("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    s("div", iT, [
                      J[35] || (J[35] = s("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(s("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Ie) => ne.value = Ie),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [en, ne.value]
                      ])
                    ]),
                    s("div", rT, [
                      J[36] || (J[36] = s("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Ie) => Y.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, ge(st(fc), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, m(Ie), 9, cT))), 128))
                      ], 512), [
                        [Co, Y.value]
                      ])
                    ]),
                    s("div", uT, [
                      J[37] || (J[37] = s("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Ie) => we.value = Ie),
                        class: "form-select",
                        disabled: fe.value
                      }, [
                        (n(!0), i(B, null, ge(se.value, (Ie) => (n(), i("option", {
                          key: Ie.tag_name,
                          value: Ie.tag_name
                        }, m(Ie.name), 9, mT))), 128))
                      ], 8, dT), [
                        [Co, we.value]
                      ])
                    ]),
                    s("div", fT, [
                      J[38] || (J[38] = s("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(s("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Ie) => ee.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, ge(st(Ml), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, m(Ie) + m(Ie === "auto" ? " (detect GPU)" : ""), 9, vT))), 128))
                      ], 512), [
                        [Co, ee.value]
                      ])
                    ]),
                    s("div", pT, [
                      s("label", gT, [
                        Tt(s("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Ie) => j.value = Ie)
                        }, null, 512), [
                          [Hn, j.value]
                        ]),
                        J[39] || (J[39] = s("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    K.value ? (n(), i("div", hT, m(K.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", _T, [
                  b(wc, {
                    "workspace-path": ke.value,
                    "resume-import": S.value,
                    "initial-progress": I.value ?? void 0,
                    onImportComplete: Ne,
                    onImportStarted: J[14] || (J[14] = (Ie) => x.value = !0),
                    onSourceCleared: Te
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          s("div", kT, [
            b(Sc),
            s("div", bT, [
              p.value === 1 ? (n(), R(De, {
                key: 0,
                variant: "primary",
                disabled: !Re.value || U.value,
                onClick: Ee
              }, {
                default: h(() => [
                  $(m(U.value ? "Creating..." : "Next"), 1)
                ]),
                _: 1
              }, 8, ["disabled"])) : p.value === 2 ? (n(), i(B, { key: 1 }, [
                !me.value && !x.value && (g.value !== "landing" || o.setupState === "no_workspace" && !ke.value) ? (n(), R(De, {
                  key: 0,
                  variant: "secondary",
                  onClick: Fe
                }, {
                  default: h(() => [...J[44] || (J[44] = [
                    $(" Back ", -1)
                  ])]),
                  _: 1
                })) : y("", !0),
                g.value === "create" ? (n(), R(De, {
                  key: 1,
                  variant: "primary",
                  disabled: !ve.value || me.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    $(m(me.value ? "Creating..." : j.value ? "Create & Switch" : "Create Environment"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0),
                g.value === "landing" && w.value ? (n(), R(De, {
                  key: 2,
                  variant: "primary",
                  onClick: ze
                }, {
                  default: h(() => [
                    $(" Switch to " + m(w.value), 1)
                  ]),
                  _: 1
                })) : y("", !0)
              ], 64)) : y("", !0)
            ])
          ])
        ]),
        _: 1
      }),
      _.value ? (n(), R(AE, {
        key: 0,
        "workspace-path": E.value,
        onClose: J[16] || (J[16] = (qe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), xT = /* @__PURE__ */ xe(CT, [["__scopeId", "data-v-9a9aadc0"]]), ST = { class: "update-banner" }, IT = { class: "update-banner__left" }, ET = { class: "update-banner__title" }, TT = {
  key: 0,
  class: "update-banner__summary"
}, MT = { class: "update-banner__actions" }, PT = ["disabled"], RT = ["disabled"], LT = ["disabled"], DT = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: t }) {
    const o = t;
    return (a, l) => (n(), i("div", ST, [
      s("div", IT, [
        s("div", ET, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", TT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      s("div", MT, [
        s("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, PT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, RT)) : y("", !0),
        s("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, LT)
      ])
    ]));
  }
}), NT = /* @__PURE__ */ xe(DT, [["__scopeId", "data-v-49562c5c"]]), Ic = "ComfyGit.UpdateNotice.DismissedVersion";
function UT() {
  try {
    return localStorage.getItem(Ic);
  } catch {
    return null;
  }
}
function OT(e) {
  try {
    localStorage.setItem(Ic, e);
  } catch {
  }
}
function AT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : UT() !== e.latest_version;
}
const zT = { class: "comfygit-panel" }, FT = { class: "panel-header" }, VT = { class: "header-left" }, BT = {
  key: 0,
  class: "header-info"
}, WT = { class: "header-actions" }, GT = { class: "env-switcher" }, jT = { class: "env-switcher-header" }, HT = { class: "env-control-buttons" }, qT = {
  key: 0,
  class: "header-info"
}, KT = { class: "branch-name" }, JT = { class: "panel-main" }, QT = { class: "sidebar" }, YT = { class: "sidebar-content" }, XT = { class: "sidebar-section" }, ZT = { class: "sidebar-section" }, eM = { class: "sidebar-section" }, tM = { class: "sidebar-footer" }, sM = { class: "content-area" }, oM = {
  key: 0,
  class: "error-message"
}, nM = {
  key: 1,
  class: "loading"
}, aM = { class: "dialog-content env-selector-dialog" }, lM = { class: "dialog-header" }, iM = { class: "dialog-body" }, rM = { class: "env-list" }, cM = { class: "env-info" }, uM = { class: "env-name-row" }, dM = { class: "env-indicator" }, mM = { class: "env-name" }, fM = {
  key: 0,
  class: "env-branch"
}, vM = {
  key: 1,
  class: "current-label"
}, pM = { class: "env-stats" }, gM = ["onClick"], hM = { class: "toast-container" }, yM = { class: "toast-message" }, Mi = "ComfyGit.LastView", Pi = "ComfyGit.LastSection", wM = /* @__PURE__ */ be({
  __name: "ComfyGitPanel",
  props: {
    initialView: {}
  },
  emits: ["close", "statusUpdate"],
  setup(e, { emit: t }) {
    const o = e, a = t, {
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
      syncEnvironmentManually: x,
      repairWorkflowModels: C,
      getSetupStatus: S,
      getUpdateCheck: I,
      updateManager: M
    } = ct(), T = Kv(), D = k(null), z = k([]), G = k([]), L = k([]), q = P(() => L.value.find((ae) => ae.is_current)), ce = k(null), ne = k(!1), Y = k(!1), we = k("remotes"), ee = k("manifest"), j = k(null), K = k(!1), ke = k(1), se = P(() => {
      var ae;
      return ((ae = j.value) == null ? void 0 : ae.state) || "managed";
    }), fe = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, U = P(() => {
      var ae, H;
      return ((H = (ae = j.value) == null ? void 0 : ae.runtime_context) == null ? void 0 : H.capabilities) || fe;
    }), me = k(!1), Pe = k(null), ye = k(null), Z = k(!1), Q = k(null), $e = k(!1), te = k(!1), oe = P(() => !$e.value && AT(Q.value)), Re = k(null), ve = k(null), le = k(null), E = k(!1), A = k(!1), re = k(""), Ee = k(null), Ce = k({ state: "idle", progress: 0, message: "" });
    let Se = null, ze = null;
    const Fe = {
      manifest: { view: "diagnostics", section: "diagnostics" },
      "debug-env": { view: "diagnostics", section: "diagnostics" },
      "debug-workspace": { view: "diagnostics", section: "diagnostics" },
      "debug-orchestrator": { view: "diagnostics", section: "diagnostics" },
      history: { view: "version-control", section: "version-control" },
      branches: { view: "version-control", section: "version-control" },
      remotes: { view: "version-control", section: "version-control" },
      status: { view: "status", section: "this-env" },
      workflows: { view: "workflows", section: "this-env" }
    }, Ne = o.initialView ? Fe[o.initialView] : null, Te = [
      "status",
      "workflows",
      "models-env",
      "nodes",
      "version-control",
      "environments",
      "model-index",
      "settings",
      "diagnostics"
    ], Je = ["this-env", "version-control", "workspace", "diagnostics"];
    function We() {
      try {
        const ae = sessionStorage.getItem(Mi), H = sessionStorage.getItem(Pi), Ke = ae === "branches" || ae === "history" || ae === "remotes" ? "version-control" : ae === "manifest" || ae === "debug-env" || ae === "debug-workspace" ? "diagnostics" : ae, Ye = H === "all-envs" ? "workspace" : H === "sharing" ? "version-control" : H;
        if (ae && H && Te.includes(Ke) && Je.includes(Ye))
          return { view: Ke, section: Ye };
      } catch {
      }
      return null;
    }
    const pe = We(), J = k((Ne == null ? void 0 : Ne.view) ?? (pe == null ? void 0 : pe.view) ?? "status"), qe = k((Ne == null ? void 0 : Ne.section) ?? (pe == null ? void 0 : pe.section) ?? "this-env");
    function Ie(ae, H) {
      J.value = ae, qe.value = H;
      try {
        sessionStorage.setItem(Mi, ae), sessionStorage.setItem(Pi, H);
      } catch {
      }
    }
    function Xe(ae) {
      const Ke = {
        "model-index": { view: "model-index", section: "workspace" },
        remotes: { view: "version-control", section: "version-control" }
      }[ae];
      Ke && Ie(Ke.view, Ke.section);
    }
    function Ve(ae) {
      we.value = ae, Ie("version-control", "version-control");
    }
    function Ue(ae) {
      ee.value = ae, Ie("diagnostics", "diagnostics");
    }
    function W() {
      Ve("branches");
    }
    function ue() {
      a("close"), setTimeout(async () => {
        await he("Comfy.OpenManagerDialog") || await he("Comfy.Manager.CustomNodesManager.ShowCustomNodesMenu") || Qe(["Extensions", "Manage extensions"]) || Qe(["Manager"]) || console.warn("[ComfyGit] Extensions manager entrypoint not found");
      }, 100);
    }
    async function he(ae) {
      var Ye, lt;
      const H = window.app, Ke = [
        (Ye = H == null ? void 0 : H.extensionManager) == null ? void 0 : Ye.command,
        (lt = H == null ? void 0 : H.extensionManager) == null ? void 0 : lt.commands,
        H == null ? void 0 : H.command,
        H == null ? void 0 : H.commands
      ];
      for (const vt of Ke)
        if (typeof (vt == null ? void 0 : vt.execute) == "function")
          try {
            return await vt.execute(ae), !0;
          } catch (Lt) {
            console.debug(`[ComfyGit] Command ${ae} did not open Extensions manager`, Lt);
          }
      return !1;
    }
    function Qe(ae) {
      var Ye, lt, vt;
      const H = ae.map((Lt) => Lt.toLowerCase()), Ke = document.querySelectorAll('button, [role="button"]');
      for (const Lt of Ke) {
        const ss = Lt;
        if ([
          (Ye = ss.textContent) == null ? void 0 : Ye.trim(),
          (lt = ss.getAttribute("title")) == null ? void 0 : lt.trim(),
          (vt = ss.getAttribute("aria-label")) == null ? void 0 : vt.trim()
        ].filter(Boolean).map((zs) => zs.toLowerCase()).some((zs) => H.includes(zs)))
          return ss.click(), !0;
      }
      return !1;
    }
    const N = k(null), O = k(!1), X = k(!1), Oe = k([]);
    let Ae = 0;
    function Le(ae, H = "info", Ke = 3e3) {
      const Ye = ++Ae;
      return Oe.value.push({ id: Ye, message: ae, type: H }), Ke > 0 && setTimeout(() => {
        Oe.value = Oe.value.filter((lt) => lt.id !== Ye);
      }, Ke), Ye;
    }
    function je(ae) {
      Oe.value = Oe.value.filter((H) => H.id !== ae);
    }
    function nt(ae, H) {
      Le(ae, H);
    }
    async function kt() {
      Q.value = null, $e.value = !1;
      try {
        Q.value = await I();
      } catch {
      }
    }
    function Et() {
      var H;
      const ae = (H = Q.value) == null ? void 0 : H.release_url;
      if (ae)
        try {
          window.open(ae, "_blank", "noopener,noreferrer");
        } catch {
        }
    }
    function ie() {
      var H;
      const ae = (H = Q.value) == null ? void 0 : H.latest_version;
      ae && OT(ae), $e.value = !0;
    }
    async function F() {
      var H, Ke;
      if (te.value) return;
      te.value = !0;
      const ae = Le("Updating comfygit-manager...", "info", 0);
      try {
        const Ye = await M();
        if (je(ae), Ye.status !== "success") {
          if (Le(Ye.message || "Update failed", "error"), Ye.manual_instructions) {
            const lt = Ye.manual_instructions.split(`
`).map((vt) => vt.trim()).filter(Boolean);
            N.value = {
              title: "Manual Update Required",
              message: "Self-update failed. Follow these steps:",
              details: lt,
              confirmLabel: "OK",
              cancelLabel: "Close",
              onConfirm: () => {
                N.value = null;
              }
            };
          }
          return;
        }
        if (Le(Ye.message || "Update complete", "success"), ie(), Ye.restart_required) {
          Qs();
          try {
            await ((Ke = (H = window.app) == null ? void 0 : H.api) == null ? void 0 : Ke.fetchApi("/v2/manager/reboot"));
          } catch {
          }
        }
      } catch (Ye) {
        je(ae);
        const lt = Ye instanceof Error ? Ye.message : "Update failed";
        Le(lt, "error");
      } finally {
        te.value = !1;
      }
    }
    const de = P(() => {
      if (!D.value) return "neutral";
      const ae = D.value.workflows, H = ae.new.length > 0 || ae.modified.length > 0 || ae.deleted.length > 0 || D.value.has_changes;
      return D.value.comparison.is_synced ? H ? "warning" : "success" : "error";
    });
    P(() => D.value ? de.value === "success" ? "All synced" : de.value === "warning" ? "Uncommitted changes" : de.value === "error" ? "Not synced" : "" : "");
    async function Ge(ae = {}) {
      me.value = !0, Pe.value = null;
      try {
        const [H, Ke, Ye, lt] = await Promise.all([
          l(!0),
          r(),
          c(),
          p()
        ]);
        D.value = H, z.value = Ke.commits, G.value = Ye.branches, L.value = lt, a("statusUpdate", H), (ae.refreshWorkflows ?? !0) && Re.value && await Re.value.loadWorkflows(!0);
      } catch (H) {
        Pe.value = H instanceof Error ? H.message : "Failed to load status", D.value = null, z.value = [], G.value = [];
      } finally {
        me.value = !1;
      }
    }
    function dt(ae) {
      ye.value = ae;
    }
    async function xt(ae) {
      var Ke;
      ye.value = null;
      const H = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      N.value = {
        title: H ? "Checkout with Uncommitted Changes" : "Checkout Commit",
        message: H ? "You have uncommitted changes that will be lost." : `Checkout commit ${ae.short_hash || ((Ke = ae.hash) == null ? void 0 : Ke.slice(0, 7))}?`,
        details: H ? wn() : void 0,
        warning: "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Discard & Checkout" : "Checkout",
        cancelLabel: "Cancel",
        destructive: H,
        onConfirm: async () => {
          var vt;
          N.value = null, Qs();
          const Ye = Le(`Checking out ${ae.short_hash || ((vt = ae.hash) == null ? void 0 : vt.slice(0, 7))}...`, "info", 0), lt = await u(ae.hash, H);
          je(Ye), lt.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(lt.message || "Checkout failed", "error");
        }
      };
    }
    async function it(ae) {
      const H = D.value && (D.value.workflows.new.length > 0 || D.value.workflows.modified.length > 0 || D.value.workflows.deleted.length > 0 || D.value.has_changes);
      N.value = {
        title: H ? "Switch Branch with Uncommitted Changes" : "Switch Branch",
        message: H ? "You have uncommitted changes." : `Switch to branch "${ae}"?`,
        details: H ? wn() : void 0,
        warning: H ? "This will restart ComfyUI. Changes will remain in current branch." : "This will restart ComfyUI to apply the changes.",
        confirmLabel: H ? "Switch Anyway" : "Switch",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, Qs();
          const Ke = Le(`Switching to ${ae}...`, "info", 0), Ye = await v(ae, H);
          je(Ke), Ye.status === "success" ? Le("Restarting ComfyUI...", "success") : Le(Ye.message || "Branch switch failed", "error");
        }
      };
    }
    async function St(ae) {
      const H = Le(`Creating branch ${ae}...`, "info", 0), Ke = await d(ae);
      je(H), Ke.status === "success" ? (Le(`Branch "${ae}" created`, "success"), await Ge()) : Le(Ke.message || "Failed to create branch", "error");
    }
    async function ts(ae, H = !1) {
      const Ke = async (Ye) => {
        var vt;
        const lt = Le(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Lt = await f(ae, Ye);
          je(lt), Lt.status === "success" ? (Le(`Branch "${ae}" deleted`, "success"), await Ge()) : (vt = Lt.message) != null && vt.includes("not fully merged") ? N.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              N.value = null, await Ke(!0);
            }
          } : Le(Lt.message || "Failed to delete branch", "error");
        } catch (Lt) {
          je(lt);
          const ss = Lt instanceof Error ? Lt.message : "Failed to delete branch";
          ss.includes("not fully merged") ? N.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              N.value = null, await Ke(!0);
            }
          } : Le(ss, "error");
        }
      };
      N.value = {
        title: "Delete Branch",
        message: `Delete branch "${ae}"?`,
        warning: "This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          N.value = null, await Ke(H);
        }
      };
    }
    async function xs(ae) {
      ye.value = null;
      const H = prompt("Enter branch name:");
      if (H) {
        const Ke = Le(`Creating branch ${H}...`, "info", 0), Ye = await d(H, ae.hash);
        je(Ke), Ye.status === "success" ? (Le(`Branch "${H}" created from ${ae.short_hash}`, "success"), await Ge()) : Le(Ye.message || "Failed to create branch", "error");
      }
    }
    function Qs() {
      sessionStorage.setItem("ComfyGit.PendingRefresh", "true"), console.log("[ComfyGit] Set refresh flag for post-restart notification");
    }
    async function ua() {
      if (!U.value.can_restart_current) {
        Le("Restart is not available in this runtime context.", "warning");
        return;
      }
      N.value = {
        title: "Restart Environment",
        message: "Restart the current environment?",
        warning: "ComfyUI will restart. Any running workflows will be interrupted.",
        confirmLabel: "Restart",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          N.value = null, Qs(), Le("Restarting environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/manager/reboot");
          } catch {
          }
        }
      };
    }
    async function da() {
      if (!U.value.can_stop_current) {
        Le("Stop is not available in this runtime context.", "warning");
        return;
      }
      N.value = {
        title: "Stop Environment",
        message: "Stop the current environment?",
        warning: "This will completely shut down ComfyUI. You will need to restart manually.",
        confirmLabel: "Stop",
        cancelLabel: "Cancel",
        onConfirm: async () => {
          var ae;
          N.value = null, Le("Stopping environment...", "info");
          try {
            (ae = window.app) != null && ae.api && await window.app.api.fetchApi("/v2/comfygit/stop", { method: "POST" });
          } catch {
          }
        }
      };
    }
    async function As(ae, H) {
      if (!U.value.can_switch_environment) {
        Le("Environment switching is not available in this runtime context.", "warning");
        return;
      }
      Z.value = !1, re.value = ae, Ee.value = H || null, E.value = !0;
    }
    async function ma() {
      E.value = !1, A.value = !0, Qs(), Ce.value = {
        progress: 10,
        state: uo(10),
        message: mo(10)
      };
      try {
        await w(re.value, Ee.value || void 0), fa(), va();
      } catch (ae) {
        Ss(), A.value = !1, Le(`Failed to initiate switch: ${ae instanceof Error ? ae.message : "Unknown error"}`, "error"), Ce.value = { state: "idle", progress: 0, message: "" }, Ee.value = null;
      }
    }
    function uo(ae) {
      return ae >= 100 ? "complete" : ae >= 80 ? "validating" : ae >= 60 ? "starting" : ae >= 30 ? "syncing" : "preparing";
    }
    function mo(ae) {
      return {
        preparing: "Stopping current environment...",
        syncing: "Preparing target environment...",
        starting: "Starting new environment...",
        validating: "Waiting for server to be ready...",
        complete: "Switch complete!"
      }[uo(ae)] || "";
    }
    function fa() {
      if (ze) return;
      let ae = 10;
      const H = 60, Ke = 5e3, Ye = 100, lt = (H - ae) / (Ke / Ye);
      ze = window.setInterval(() => {
        if (ae += lt, ae >= H && (ae = H, Ss()), Ce.value.progress < H) {
          const vt = Math.floor(ae);
          Ce.value = {
            progress: vt,
            state: uo(vt),
            message: mo(vt)
          };
        }
      }, Ye);
    }
    function Ss() {
      ze && (clearInterval(ze), ze = null);
    }
    function va() {
      Se || (Se = window.setInterval(async () => {
        try {
          let ae = await T.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await g()), !ae)
            return;
          const H = ae.progress || 0;
          H >= 60 && Ss();
          const Ke = Math.max(H, Ce.value.progress), Ye = ae.state && ae.state !== "idle" && ae.state !== "unknown", lt = Ye ? ae.state : uo(Ke), vt = Ye && ae.message || mo(Ke);
          Ce.value = {
            state: lt,
            progress: Ke,
            message: vt
          }, ae.state === "complete" ? (Ss(), Do(), A.value = !1, Le(`✓ Switched to ${re.value}`, "success"), await Ge(), re.value = "") : ae.state === "rolled_back" ? (Ss(), Do(), A.value = !1, Le("Switch failed, restored previous environment", "warning"), re.value = "") : ae.state === "critical_failure" && (Ss(), Do(), A.value = !1, Le(`Critical error during switch: ${ae.message}`, "error"), re.value = "");
        } catch (ae) {
          console.error("Failed to poll switch progress:", ae);
        }
      }, 1e3));
    }
    function Do() {
      Ss(), Se && (clearInterval(Se), Se = null);
    }
    function pa() {
      var ae;
      E.value = !1, re.value = "", (ae = j.value) != null && ae.state && j.value.state !== "managed" && (ke.value = j.value.state === "no_workspace" ? 1 : 2, K.value = !0);
    }
    async function ga(ae) {
      O.value = !1, await Ge(), Le(ae.message, ae.success ? "success" : "error");
    }
    async function ha() {
      X.value = !1;
      const ae = Le("Syncing environment...", "info", 0);
      try {
        const H = await x("skip", !0);
        if (je(ae), H.status === "success") {
          const Ke = [];
          H.nodes_installed.length && Ke.push(`${H.nodes_installed.length} installed`), H.nodes_removed.length && Ke.push(`${H.nodes_removed.length} removed`);
          const Ye = Ke.length ? `: ${Ke.join(", ")}` : "";
          Le(`✓ Environment synced${Ye}`, "success"), await Ge();
        } else {
          const Ke = H.errors.length ? H.errors.join("; ") : H.message;
          Le(`Sync failed: ${Ke}`, "error");
        }
      } catch (H) {
        je(ae), Le(`Sync error: ${H instanceof Error ? H.message : "Unknown error"}`, "error");
      }
    }
    async function ya(ae) {
      var H;
      try {
        const Ke = await C(ae);
        Ke.failed.length === 0 ? Le(`✓ Repaired ${Ke.success} workflow${Ke.success === 1 ? "" : "s"}`, "success") : Le(`Repaired ${Ke.success}, failed: ${Ke.failed.length}`, "warning"), await Ge();
      } catch (Ke) {
        Le(`Repair failed: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
      } finally {
        (H = le.value) == null || H.resetRepairingState();
      }
    }
    async function hn() {
      var H, Ke;
      const ae = Le("Repairing environment...", "info", 0);
      try {
        const Ye = await x("skip", !0);
        if (je(ae), Ye.status === "success") {
          const lt = [];
          Ye.nodes_installed.length && lt.push(`${Ye.nodes_installed.length} installed`), Ye.nodes_removed.length && lt.push(`${Ye.nodes_removed.length} removed`);
          const vt = lt.length ? `: ${lt.join(", ")}` : "";
          Le(`✓ Environment repaired${vt}`, "success"), (H = le.value) == null || H.closeDetailModal(), await Ge();
        } else {
          const lt = Ye.errors.length ? Ye.errors.join(", ") : Ye.message || "Unknown error";
          Le(`Repair failed: ${lt}`, "error");
        }
      } catch (Ye) {
        je(ae), Le(`Repair error: ${Ye instanceof Error ? Ye.message : "Unknown error"}`, "error");
      } finally {
        (Ke = le.value) == null || Ke.resetRepairingEnvironmentState();
      }
    }
    async function wa(ae, H) {
      Le(`Environment '${ae}' created`, "success"), await Ge(), ve.value && await ve.value.loadEnvironments(), H && U.value.can_switch_environment && await As(ae);
    }
    async function _a(ae) {
      var H;
      if (!U.value.can_delete_environment) {
        Le("Environment deletion is not available in this runtime context.", "warning");
        return;
      }
      if (((H = q.value) == null ? void 0 : H.name) === ae) {
        Le("Cannot delete the currently active environment. Switch to another environment first.", "error");
        return;
      }
      N.value = {
        title: "Delete Environment",
        message: `Are you sure you want to delete "${ae}"?`,
        warning: "This will permanently delete the environment and all its data. This action cannot be undone.",
        confirmLabel: "Delete",
        cancelLabel: "Cancel",
        destructive: !0,
        onConfirm: async () => {
          N.value = null;
          try {
            const Ke = await _(ae);
            Ke.status === "success" ? (Le(`Environment "${ae}" deleted`, "success"), await Ge(), ve.value && await ve.value.loadEnvironments()) : Le(Ke.message || "Failed to delete environment", "error");
          } catch (Ke) {
            Le(`Error deleting environment: ${Ke instanceof Error ? Ke.message : "Unknown error"}`, "error");
          }
        }
      };
    }
    async function ka(ae, H) {
      K.value = !1;
      try {
        j.value = await S();
      } catch {
      }
      U.value.can_switch_environment && await As(ae, H);
    }
    function ba() {
      K.value = !1, a("close");
    }
    async function $a(ae, H) {
      await As(ae, H);
    }
    async function Ca(ae) {
      ne.value = !1, await Ge(), await As(ae);
    }
    function xa() {
      ce.value = null, ne.value = !0;
    }
    function Sa(ae) {
      ce.value = ae, Y.value = !0;
    }
    function yn() {
      Y.value = !1, ce.value = null;
    }
    async function Ia(ae) {
      j.value = await S(), console.log(`Environment '${ae}' created. Available for switching.`);
    }
    function Ea() {
      if (!U.value.can_create_environment) {
        Le("Environment creation is not available in this runtime context.", "warning");
        return;
      }
      Ie("environments", "workspace"), setTimeout(() => {
        var ae;
        (ae = ve.value) == null || ae.openCreateModal();
      }, 100);
    }
    function wn() {
      if (!D.value) return [];
      const ae = [], H = D.value.workflows;
      return H.new.length && ae.push(`${H.new.length} new workflow(s)`), H.modified.length && ae.push(`${H.modified.length} modified workflow(s)`), H.deleted.length && ae.push(`${H.deleted.length} deleted workflow(s)`), ae;
    }
    return at(async () => {
      try {
        if (j.value = await S(), j.value.state === "no_workspace" && U.value.can_initialize_workspace) {
          K.value = !0, ke.value = 1;
          return;
        }
        if (j.value.state === "empty_workspace" && U.value.can_create_environment) {
          K.value = !0, ke.value = 2;
          return;
        }
        if (j.value.state === "unmanaged" && U.value.can_switch_environment) {
          K.value = !0, ke.value = 2;
          return;
        }
      } catch (ae) {
        console.warn("Setup status check failed, proceeding normally:", ae);
      }
      await Promise.all([
        Ge({ refreshWorkflows: !1 }),
        kt()
      ]);
    }), (ae, H) => {
      var Ke, Ye, lt, vt, Lt, ss, No, zs, V, _e, He, mt, Dt;
      return n(), i("div", zT, [
        s("div", FT, [
          s("div", VT, [
            H[27] || (H[27] = s("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (n(), i("div", BT)) : y("", !0)
          ]),
          s("div", WT, [
            b(xc),
            H[30] || (H[30] = s("span", { class: "header-divider" }, null, -1)),
            s("button", {
              class: Be(["icon-btn", { spinning: me.value }]),
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
              onClick: H[0] || (H[0] = (Ze) => a("close")),
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
        oe.value && Q.value ? (n(), R(NT, {
          key: 0,
          info: Q.value,
          updating: te.value,
          onUpdate: F,
          onDismiss: ie,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        s("div", GT, [
          s("div", jT, [
            H[31] || (H[31] = s("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            s("div", HT, [
              U.value.can_restart_current ? (n(), i("button", {
                key: 0,
                class: "env-control-btn",
                title: "Restart environment",
                onClick: ua
              }, " Restart ")) : y("", !0),
              U.value.can_stop_current ? (n(), i("button", {
                key: 1,
                class: "env-control-btn stop",
                title: "Stop environment",
                onClick: da
              }, " Stop ")) : y("", !0)
            ])
          ]),
          s("button", {
            class: "env-switcher-btn",
            onClick: H[1] || (H[1] = (Ze) => Ie("environments", "workspace"))
          }, [
            D.value ? (n(), i("div", qT, [
              s("span", null, m(((Ke = q.value) == null ? void 0 : Ke.name) || ((Ye = D.value) == null ? void 0 : Ye.environment) || "Loading..."), 1),
              s("span", KT, "(" + m(D.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[32] || (H[32] = s("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        s("div", JT, [
          s("div", QT, [
            s("div", YT, [
              s("div", XT, [
                H[33] || (H[33] = s("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "status" && qe.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Ze) => Ie("status", "this-env"))
                }, " STATUS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Ze) => Ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Ze) => Ie("models-env", "this-env"))
                }, " MODELS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: H[5] || (H[5] = (Ze) => Ie("nodes", "this-env"))
                }, " NODES ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: H[6] || (H[6] = (Ze) => Ve("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              H[36] || (H[36] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", ZT, [
                H[34] || (H[34] = s("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: H[7] || (H[7] = (Ze) => Ie("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: H[8] || (H[8] = (Ze) => Ie("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: H[9] || (H[9] = (Ze) => Ie("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              H[37] || (H[37] = s("div", { class: "sidebar-divider" }, null, -1)),
              s("div", eM, [
                H[35] || (H[35] = s("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value === "manifest" }]),
                  onClick: H[10] || (H[10] = (Ze) => Ue("manifest"))
                }, " MANIFEST ", 2),
                s("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && ee.value !== "manifest" }]),
                  onClick: H[11] || (H[11] = (Ze) => Ue("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            s("div", tM, [
              b(Sc)
            ])
          ]),
          s("div", sM, [
            Pe.value ? (n(), i("div", oM, m(Pe.value), 1)) : !D.value && J.value === "status" ? (n(), i("div", nM, " Loading status... ")) : (n(), i(B, { key: 2 }, [
              J.value === "status" ? (n(), R(jv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: D.value,
                "setup-state": se.value,
                onSwitchBranch: W,
                onCommitChanges: H[12] || (H[12] = (Ze) => O.value = !0),
                onSyncEnvironment: H[13] || (H[13] = (Ze) => X.value = !0),
                onViewWorkflows: H[14] || (H[14] = (Ze) => Ie("workflows", "this-env")),
                onViewHistory: H[15] || (H[15] = (Ze) => Ve("history")),
                onViewDebug: H[16] || (H[16] = (Ze) => Ue("env")),
                onViewNodes: H[17] || (H[17] = (Ze) => Ie("nodes", "this-env")),
                onRepairMissingModels: ya,
                onRepairEnvironment: hn,
                onStartSetup: H[18] || (H[18] = (Ze) => K.value = !0),
                onViewEnvironments: H[19] || (H[19] = (Ze) => Ie("environments", "workspace")),
                onCreateEnvironment: Ea
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (n(), R(H0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Re,
                onRefresh: Ge
              }, null, 512)) : J.value === "models-env" ? (n(), R(r2, {
                key: 2,
                onNavigate: Xe
              })) : J.value === "version-control" ? (n(), R(DI, {
                key: 3,
                commits: z.value,
                "current-ref": (lt = D.value) == null ? void 0 : lt.branch,
                branches: G.value,
                current: ((vt = D.value) == null ? void 0 : vt.branch) || null,
                "initial-tab": we.value,
                onSelect: dt,
                onCheckout: xt,
                onSwitch: it,
                onCreate: St,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (n(), R(e$, {
                key: 4,
                "version-mismatches": ((ss = (Lt = D.value) == null ? void 0 : Lt.comparison) == null ? void 0 : ss.version_mismatches) || [],
                onOpenNodeManager: ue,
                onRepairEnvironment: hn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (n(), R(KI, {
                key: 5,
                "initial-tab": ee.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (n(), R(ZC, {
                key: 6,
                ref_key: "environmentsSectionRef",
                ref: ve,
                "can-create": U.value.can_create_environment,
                "can-switch": U.value.can_switch_environment,
                "can-delete": U.value.can_delete_environment,
                onSwitch: As,
                onCreated: wa,
                onDelete: _a,
                onImport: xa,
                onExport: Sa
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (n(), R(w2, {
                key: 7,
                onRefresh: Ge
              })) : J.value === "settings" ? (n(), R(I$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        ye.value ? (n(), R(m6, {
          key: 1,
          commit: ye.value,
          onClose: H[20] || (H[20] = (Ze) => ye.value = null),
          onCheckout: xt,
          onCreateBranch: xs
        }, null, 8, ["commit"])) : y("", !0),
        N.value ? (n(), R(Tl, {
          key: 2,
          title: N.value.title,
          message: N.value.message,
          details: N.value.details,
          warning: N.value.warning,
          confirmLabel: N.value.confirmLabel,
          cancelLabel: N.value.cancelLabel,
          secondaryLabel: N.value.secondaryLabel,
          secondaryAction: N.value.secondaryAction,
          destructive: N.value.destructive,
          onConfirm: N.value.onConfirm,
          onCancel: H[21] || (H[21] = (Ze) => N.value = null),
          onSecondary: N.value.onSecondary
        }, null, 8, ["title", "message", "details", "warning", "confirmLabel", "cancelLabel", "secondaryLabel", "secondaryAction", "destructive", "onConfirm", "onSecondary"])) : y("", !0),
        ne.value ? (n(), R($t, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: H[22] || (H[22] = (Ze) => ne.value = !1)
        }, {
          body: h(() => [
            b(i5, {
              embedded: "",
              onImportCompleteSwitch: Ca
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (n(), R($t, {
          key: 4,
          title: ce.value ? `EXPORT ENVIRONMENT: ${ce.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: yn
        }, {
          body: h(() => [
            b(m3, {
              embedded: "",
              "environment-name": ce.value,
              onClose: yn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(tE, {
          show: E.value,
          "from-environment": ((No = q.value) == null ? void 0 : No.name) || "unknown",
          "to-environment": re.value,
          onConfirm: ma,
          onClose: pa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        O.value && D.value ? (n(), R(Cc, {
          key: 5,
          status: D.value,
          "as-modal": !0,
          onClose: H[23] || (H[23] = (Ze) => O.value = !1),
          onCommitted: ga
        }, null, 8, ["status"])) : y("", !0),
        X.value && D.value ? (n(), R(kE, {
          key: 6,
          show: X.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: ha,
          onClose: H[24] || (H[24] = (Ze) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(mE, {
          show: A.value,
          state: Ce.value.state,
          progress: Ce.value.progress,
          message: Ce.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        Z.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: H[26] || (H[26] = yt((Ze) => Z.value = !1, ["self"]))
        }, [
          s("div", aM, [
            s("div", lM, [
              H[39] || (H[39] = s("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              s("button", {
                class: "icon-btn",
                onClick: H[25] || (H[25] = (Ze) => Z.value = !1)
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
            s("div", iM, [
              H[40] || (H[40] = s("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              s("div", rM, [
                (n(!0), i(B, null, ge(L.value, (Ze) => (n(), i("div", {
                  key: Ze.name,
                  class: Be(["env-item", { current: Ze.is_current }])
                }, [
                  s("div", cM, [
                    s("div", uM, [
                      s("span", dM, m(Ze.is_current ? "●" : "○"), 1),
                      s("span", mM, m(Ze.name), 1),
                      Ze.current_branch ? (n(), i("span", fM, "(" + m(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (n(), i("span", vM, "CURRENT")) : y("", !0)
                    ]),
                    s("div", pM, m(Ze.workflow_count) + " workflows • " + m(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && U.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fs) => As(Ze.name)
                  }, " SWITCH ", 8, gM)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        K.value ? (n(), R(xT, {
          key: 8,
          "default-path": ((zs = j.value) == null ? void 0 : zs.default_path) || "~/comfygit",
          "detected-models-dir": ((V = j.value) == null ? void 0 : V.detected_models_dir) || null,
          "initial-step": ke.value,
          "existing-environments": ((_e = j.value) == null ? void 0 : _e.environments) || [],
          "cli-installed": ((He = j.value) == null ? void 0 : He.cli_installed) ?? !0,
          "setup-state": ((mt = j.value) == null ? void 0 : mt.state) || "no_workspace",
          "workspace-path": ((Dt = j.value) == null ? void 0 : Dt.workspace_path) || null,
          onComplete: ka,
          onClose: ba,
          onSwitchEnvironment: $a,
          onEnvironmentCreatedNoSwitch: Ia
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        s("div", hM, [
          b(sm, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(B, null, ge(Oe.value, (Ze) => (n(), i("div", {
                key: Ze.id,
                class: Be(["toast", Ze.type])
              }, [
                s("span", yM, m(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), _M = /* @__PURE__ */ xe(wM, [["__scopeId", "data-v-cab83752"]]), kM = { class: "item-header" }, bM = { class: "item-info" }, $M = { class: "filename" }, CM = { class: "metadata" }, xM = { class: "size" }, SM = {
  key: 0,
  class: "type"
}, IM = { class: "item-actions" }, EM = {
  key: 0,
  class: "progress-section"
}, TM = { class: "progress-bar" }, MM = { class: "progress-stats" }, PM = { class: "downloaded" }, RM = { class: "speed" }, LM = {
  key: 0,
  class: "eta"
}, DM = {
  key: 1,
  class: "status-msg paused"
}, NM = {
  key: 2,
  class: "status-msg queued"
}, UM = {
  key: 3,
  class: "status-msg completed"
}, OM = {
  key: 4,
  class: "status-msg failed"
}, AM = {
  key: 0,
  class: "retries"
}, zM = /* @__PURE__ */ be({
  __name: "DownloadQueueItem",
  props: {
    item: {}
  },
  emits: ["cancel", "retry", "resume", "remove"],
  setup(e, { emit: t }) {
    const o = t;
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      s("div", kM, [
        s("div", bM, [
          s("div", $M, m(e.item.filename), 1),
          s("div", CM, [
            s("span", xM, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", SM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        s("div", IM, [
          e.item.status === "queued" || e.item.status === "downloading" ? (n(), i("button", {
            key: 0,
            class: "action-icon cancel",
            onClick: u[0] || (u[0] = (d) => o("cancel")),
            title: "Cancel"
          }, " × ")) : y("", !0),
          e.item.status === "paused" ? (n(), i("button", {
            key: 1,
            class: "action-icon resume",
            onClick: u[1] || (u[1] = (d) => o("resume")),
            title: "Resume"
          }, " ▶ ")) : y("", !0),
          e.item.status === "failed" ? (n(), i("button", {
            key: 2,
            class: "action-icon retry",
            onClick: u[2] || (u[2] = (d) => o("retry")),
            title: "Retry"
          }, " ↻ ")) : y("", !0),
          e.item.status === "completed" || e.item.status === "failed" || e.item.status === "paused" ? (n(), i("button", {
            key: 3,
            class: "action-icon remove",
            onClick: u[3] || (u[3] = (d) => o("remove")),
            title: "Remove"
          }, " × ")) : y("", !0)
        ])
      ]),
      e.item.status === "downloading" ? (n(), i("div", EM, [
        s("div", TM, [
          s("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        s("div", MM, [
          s("span", PM, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          s("span", RM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", LM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", DM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", NM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", UM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", OM, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", AM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ xe(zM, [["__scopeId", "data-v-2110df65"]]), FM = { class: "queue-title" }, VM = { class: "count" }, BM = { class: "queue-actions" }, WM = { class: "action-label" }, GM = {
  key: 0,
  class: "overall-progress"
}, jM = { class: "progress-bar" }, HM = {
  key: 0,
  class: "current-mini"
}, qM = { class: "filename" }, KM = { class: "speed" }, JM = {
  key: 1,
  class: "queue-content"
}, QM = {
  key: 0,
  class: "section"
}, YM = {
  key: 1,
  class: "section"
}, XM = { class: "section-header" }, ZM = { class: "section-label paused" }, e7 = { class: "items-list" }, t7 = {
  key: 2,
  class: "section"
}, s7 = { class: "section-header" }, o7 = { class: "section-label" }, n7 = { class: "items-list" }, a7 = {
  key: 3,
  class: "section"
}, l7 = { class: "section-header" }, i7 = { class: "section-label" }, r7 = { class: "items-list" }, c7 = {
  key: 4,
  class: "section"
}, u7 = { class: "section-header" }, d7 = { class: "section-label failed" }, m7 = { class: "items-list" }, f7 = /* @__PURE__ */ be({
  __name: "ModelDownloadQueue",
  setup(e) {
    const {
      queue: t,
      currentDownload: o,
      queuedItems: a,
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
    } = Lo(), x = k(!1);
    let C = null;
    ht(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (T, D) => {
        C && (clearTimeout(C), C = null);
        const z = T.active === 0 && T.failed === 0 && T.paused === 0 && T.completed > 0, G = D && (D.active > 0 || D.paused > 0);
        z && G && (C = setTimeout(() => {
          _(), C = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = P(() => {
      var z;
      if (t.items.length === 0) return 0;
      const T = l.value.length, D = ((z = o.value) == null ? void 0 : z.progress) || 0;
      return Math.round((T + D / 100) / t.items.length * 100);
    });
    function I(T) {
      v(T);
    }
    function M(T) {
      return T === 0 ? "..." : `${(T / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (T, D) => (n(), R(Kt, { to: "body" }, [
      st(u) ? (n(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !x.value }])
      }, [
        s("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (z) => x.value = !x.value)
        }, [
          s("div", FM, [
            D[4] || (D[4] = s("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = s("span", { class: "title" }, "Downloads", -1)),
            s("span", VM, "(" + m(st(d)) + "/" + m(st(t).items.length) + ")", 1)
          ]),
          s("div", BM, [
            s("span", WM, m(x.value ? "minimize" : "expand"), 1)
          ])
        ]),
        x.value ? (n(), i("div", JM, [
          st(o) ? (n(), i("div", QM, [
            D[6] || (D[6] = s("div", { class: "section-label" }, "Downloading", -1)),
            b(zo, {
              item: st(o),
              onCancel: D[1] || (D[1] = (z) => I(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (n(), i("div", YM, [
            s("div", XM, [
              s("span", ZM, "Paused (" + m(st(c).length) + ")", 1),
              s("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...z) => st(w) && st(w)(...z))
              }, "Resume All")
            ]),
            s("div", e7, [
              (n(!0), i(B, null, ge(st(c), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onResume: (G) => st(p)(z.id),
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(a).length > 0 ? (n(), i("div", t7, [
            s("div", s7, [
              s("span", o7, "Queued (" + m(st(a).length) + ")", 1)
            ]),
            s("div", n7, [
              (n(!0), i(B, null, ge(st(a), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onCancel: (G) => I(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (n(), i("div", a7, [
            s("div", l7, [
              s("span", i7, "Completed (" + m(st(l).length) + ")", 1),
              s("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...z) => st(_) && st(_)(...z))
              }, "Clear")
            ]),
            s("div", r7, [
              (n(!0), i(B, null, ge(st(l).slice(0, 3), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (n(), i("div", c7, [
            s("div", u7, [
              s("span", d7, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            s("div", m7, [
              (n(!0), i(B, null, ge(st(r), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onRetry: (G) => st(f)(z.id),
                onRemove: (G) => st(g)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", GM, [
          s("div", jM, [
            s("div", {
              class: "progress-fill",
              style: Rt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          st(o) ? (n(), i("div", HM, [
            s("span", qM, m(st(o).filename), 1),
            s("span", KM, m(M(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), v7 = /* @__PURE__ */ xe(f7, [["__scopeId", "data-v-3a3c9607"]]), p7 = { class: "detail-header" }, g7 = { class: "item-count" }, h7 = { class: "resource-list" }, y7 = { class: "item-info" }, w7 = { class: "item-name" }, _7 = {
  key: 0,
  class: "item-subtitle"
}, k7 = {
  key: 0,
  class: "installing-badge"
}, b7 = ["title"], $7 = {
  key: 2,
  class: "installed-badge"
}, C7 = {
  key: 3,
  class: "queued-badge"
}, x7 = {
  key: 4,
  class: "action-buttons"
}, S7 = {
  key: 1,
  class: "no-action"
}, I7 = /* @__PURE__ */ be({
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
    const o = e, a = t, l = P(() => o.items.filter((g) => g.canAction)), r = P(() => l.value.length > 0 && l.value.every(
      (g) => {
        var _, x;
        return o.queuedItems.has(g.id) || ((_ = o.installedItems) == null ? void 0 : _.has(g.id)) || ((x = o.failedItems) == null ? void 0 : x.has(g.id));
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
    return (g, _) => (n(), R($t, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (x) => a("close"))
    }, {
      body: h(() => [
        s("div", p7, [
          s("span", g7, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), R(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (x) => a("bulk-action"))
          }, {
            default: h(() => [
              $(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        s("div", h7, [
          (n(!0), i(B, null, ge(e.items, (x) => (n(), i("div", {
            key: x.id,
            class: "resource-item"
          }, [
            s("div", y7, [
              s("span", w7, m(x.name), 1),
              x.subtitle ? (n(), i("span", _7, m(x.subtitle), 1)) : y("", !0)
            ]),
            x.canAction ? (n(), i(B, { key: 0 }, [
              d(x) ? (n(), i("span", k7, "Installing...")) : f(x) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(x)
              }, "Failed ⚠", 8, b7)) : v(x) ? (n(), i("span", $7, "Installed")) : u(x) ? (n(), i("span", C7, "Queued")) : (n(), i("div", x7, [
                (n(!0), i(B, null, ge(w(x), (C) => (n(), R(De, {
                  key: `${x.id}-${C.key}`,
                  size: "sm",
                  variant: C.variant || "secondary",
                  onClick: (S) => a("action", x, C.key)
                }, {
                  default: h(() => [
                    $(m(C.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", S7, m(x.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (x) => a("close"))
        }, {
          default: h(() => [..._[3] || (_[3] = [
            $("Close", -1)
          ])]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), E7 = /* @__PURE__ */ xe(I7, [["__scopeId", "data-v-ec7e9202"]]), T7 = {
  key: 0,
  class: "loading-state"
}, M7 = {
  key: 1,
  class: "analysis-results"
}, P7 = {
  key: 0,
  class: "section"
}, R7 = { class: "section-header" }, L7 = { class: "section-title" }, D7 = { class: "item-list" }, N7 = { class: "package-info" }, U7 = { class: "package-name" }, O7 = { class: "node-count" }, A7 = {
  key: 1,
  class: "installing-badge"
}, z7 = {
  key: 2,
  class: "queued-badge"
}, F7 = ["title"], V7 = {
  key: 4,
  class: "installed-badge"
}, B7 = {
  key: 1,
  class: "section"
}, W7 = { class: "section-header" }, G7 = { class: "section-title" }, j7 = { class: "item-list" }, H7 = { class: "node-type" }, q7 = {
  key: 0,
  class: "overflow-note"
}, K7 = {
  key: 2,
  class: "section"
}, J7 = { class: "section-header" }, Q7 = { class: "section-title" }, Y7 = { class: "item-list" }, X7 = { class: "node-type" }, Z7 = { class: "not-found" }, eP = {
  key: 0,
  class: "overflow-note"
}, tP = {
  key: 3,
  class: "section"
}, sP = { class: "section-header" }, oP = { class: "section-title" }, nP = { class: "item-list" }, aP = { class: "package-info community-info" }, lP = { class: "community-title-row" }, iP = { class: "package-name" }, rP = { class: "node-count" }, cP = { class: "community-mapping-note" }, uP = { key: 0 }, dP = {
  key: 0,
  class: "community-actions"
}, mP = {
  key: 1,
  class: "installing-badge"
}, fP = {
  key: 2,
  class: "queued-badge"
}, vP = ["title"], pP = {
  key: 4,
  class: "installed-badge"
}, gP = ["title"], hP = {
  key: 1,
  class: "no-url"
}, yP = {
  key: 4,
  class: "section"
}, wP = { class: "section-header" }, _P = { class: "section-title" }, kP = { class: "item-list" }, bP = { class: "model-info" }, $P = { class: "model-name" }, CP = {
  key: 1,
  class: "queued-badge"
}, xP = {
  key: 1,
  class: "no-url"
}, SP = { class: "dont-show-again" }, IP = 3e4, EP = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const t = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), x = k(/* @__PURE__ */ new Map()), { addToQueue: C } = Lo(), { queueNodeInstall: S } = ct(), I = P(() => {
      var W;
      return ((W = a.value) == null ? void 0 : W.package_aliases) || {};
    });
    function M(W) {
      if (!W) return null;
      const ue = I.value;
      let he = W;
      const Qe = /* @__PURE__ */ new Set();
      for (; ue[he] && !Qe.has(he); )
        Qe.add(he), he = ue[he];
      return he;
    }
    function T(W, ue) {
      return W instanceof Error && W.message ? W.message : typeof W == "string" && W.trim().length > 0 ? W : ue;
    }
    function D(W) {
      for (const [ue, he] of _.value.entries())
        he === W && _.value.delete(ue);
    }
    function z(W) {
      if (!x.value.has(W)) return;
      const ue = x.value.get(W);
      clearTimeout(ue), x.value.delete(W);
    }
    function G() {
      for (const W of x.value.values())
        clearTimeout(W);
      x.value = /* @__PURE__ */ new Map();
    }
    function L(W) {
      z(W);
      const ue = setTimeout(() => {
        if (x.value.delete(W), !c.value.has(W)) return;
        D(W), c.value.delete(W), f.value === W && (f.value = null), u.value.set(W, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", W);
      }, IP);
      x.value.set(W, ue);
    }
    function q(W) {
      const ue = `Cannot install "${W.title}" - package_id is missing`;
      u.value.set(W.item_id, ue), o.value = ue, console.warn("[ComfyGit] Community install requested without package_id:", W);
    }
    const ce = P(() => ne.value.length > 0 || we.value.length > 0 || ee.value.length > 0 || j.value.length > 0 || U.value.length > 0), ne = P(() => {
      var he, Qe;
      if (!((he = a.value) != null && he.nodes)) return [];
      const W = /* @__PURE__ */ new Map(), ue = (a.value.nodes.resolved || []).filter((N) => {
        var O;
        return !N.is_installed && ((O = N.package) == null ? void 0 : O.package_id);
      });
      for (const N of ue) {
        const O = M(N.package.package_id);
        if (!O) continue;
        W.has(O) || W.set(O, {
          package_id: O,
          title: N.package.title || O,
          node_count: 0,
          node_types: [],
          repository: N.package.repository || null,
          latest_version: N.package.latest_version || null
        });
        const X = W.get(O);
        X.node_count++, X.node_types.push(((Qe = N.reference) == null ? void 0 : Qe.node_type) || N.node_type);
      }
      return Array.from(W.values());
    }), Y = P(() => ne.value.reduce((W, ue) => W + ue.node_count, 0)), we = P(() => {
      var W;
      return (W = a.value) != null && W.nodes ? (a.value.nodes.unresolved || []).map((ue) => {
        var he;
        return {
          node_type: ((he = ue.reference) == null ? void 0 : he.node_type) || ue.node_type
        };
      }) : [];
    }), ee = P(() => {
      var ue;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const W = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((he) => {
        var N;
        const Qe = ((N = he.reference) == null ? void 0 : N.node_type) || he.node_type;
        return {
          node_type: Qe,
          guidance: he.guidance || W[Qe] || null
        };
      });
    }), j = P(() => {
      var he, Qe, N, O, X, Oe, Ae, Le;
      if (!((he = a.value) != null && he.nodes)) return [];
      const W = a.value.node_guidance || {}, ue = /* @__PURE__ */ new Map();
      for (const je of a.value.nodes.uninstallable || []) {
        const nt = ((Qe = je.reference) == null ? void 0 : Qe.node_type) || je.node_type, kt = M(((N = je.package) == null ? void 0 : N.package_id) || null), Et = kt || `node:${nt}`;
        ue.has(Et) || ue.set(Et, {
          item_id: Et,
          node_type: nt,
          title: ((O = je.package) == null ? void 0 : O.title) || kt || nt,
          node_count: 0,
          package_id: kt,
          repository: ((X = je.package) == null ? void 0 : X.repository) || null,
          latest_version: ((Oe = je.package) == null ? void 0 : Oe.latest_version) || null,
          guidance: je.guidance || W[nt] || null
        });
        const ie = ue.get(Et);
        ie.node_count++, ie.guidance || (ie.guidance = je.guidance || W[nt] || null), !ie.repository && ((Ae = je.package) != null && Ae.repository) && (ie.repository = je.package.repository), !ie.latest_version && ((Le = je.package) != null && Le.latest_version) && (ie.latest_version = je.package.latest_version);
      }
      return Array.from(ue.values());
    }), K = P(() => j.value.filter((W) => !!W.package_id)), ke = P(() => j.value.length >= 5 ? j.value.slice(0, 4) : j.value), se = P(() => K.value.length > 0 && K.value.every((W) => {
      const ue = W.package_id;
      return r.value.has(ue) || c.value.has(ue) || u.value.has(ue);
    }));
    function fe(W) {
      const ue = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return W.repository && ue.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ue;
    }
    const U = P(() => {
      var N;
      if (!((N = a.value) != null && N.models)) return [];
      const W = (a.value.models.resolved || []).filter(
        (O) => O.match_type === "download_intent" || O.match_type === "property_download_intent" || O.match_type === "not_found"
      ).map((O) => {
        var X, Oe, Ae, Le;
        return {
          filename: ((Oe = (X = O.reference) == null ? void 0 : X.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ae = O.reference) == null ? void 0 : Ae.widget_value) || O.widget_value,
          widget_value: ((Le = O.reference) == null ? void 0 : Le.widget_value) || O.widget_value,
          // Backend returns download_source as URL string directly, and target_path at top level
          url: O.download_source || null,
          targetPath: O.target_path || null,
          canDownload: !!(O.download_source && O.target_path)
        };
      }), ue = (a.value.models.unresolved || []).map((O) => {
        var X, Oe, Ae, Le;
        return {
          filename: ((Oe = (X = O.reference) == null ? void 0 : X.widget_value) == null ? void 0 : Oe.split("/").pop()) || ((Ae = O.reference) == null ? void 0 : Ae.widget_value) || O.widget_value,
          widget_value: ((Le = O.reference) == null ? void 0 : Le.widget_value) || O.widget_value,
          url: null,
          targetPath: null,
          canDownload: !1
        };
      }), he = /* @__PURE__ */ new Map(), Qe = [];
      for (const O of W) {
        if (!O.url) {
          Qe.push(O);
          continue;
        }
        const X = `${O.filename}::${O.url}`, Oe = he.get(X);
        if (!Oe) {
          he.set(X, O);
          continue;
        }
        !Oe.targetPath && O.targetPath && (Oe.targetPath = O.targetPath), !Oe.canDownload && O.canDownload && (Oe.canDownload = O.canDownload);
      }
      return [...he.values(), ...Qe, ...ue];
    }), me = P(() => U.value.filter((W) => W.canDownload)), Pe = P(() => ne.value.length >= 5 ? ne.value.slice(0, 4) : ne.value), ye = P(() => U.value.length >= 5 ? U.value.slice(0, 4) : U.value), Z = P(() => ne.value.length > 0 && ne.value.every(
      (W) => r.value.has(W.package_id) || c.value.has(W.package_id) || u.value.has(W.package_id)
    )), Q = P(() => me.value.length > 0 && me.value.every((W) => d.value.has(W.url))), $e = P(() => ne.value.length > 0 || K.value.length > 0 || me.value.length > 0), te = P(() => {
      const W = (ne.value.length === 0 || Z.value) && (K.value.length === 0 || se.value), ue = me.value.length === 0 || Q.value;
      return W && ue;
    }), oe = P(() => w.value === "models" ? `Missing Models (${U.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${j.value.length})` : ""), Re = P(() => w.value === "models" ? U.value.map((W) => ({
      id: W.url || W.widget_value,
      name: W.filename,
      canAction: W.canDownload,
      actionDisabledReason: W.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ne.value.map((W) => ({
      id: W.package_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !0
    })) : w.value === "community" ? j.value.map((W) => ({
      id: W.package_id || W.item_id,
      name: W.title,
      subtitle: `(${W.node_count} ${W.node_count === 1 ? "node" : "nodes"})`,
      canAction: !!W.package_id,
      actionDisabledReason: W.package_id ? void 0 : "Manual setup required",
      actions: W.package_id ? fe(W) : []
    })) : []);
    function ve(W, ue) {
      if (w.value === "models") {
        const he = U.value.find((Qe) => Qe.url === W.id || Qe.widget_value === W.id);
        he && Ee(he);
      } else if (w.value === "packages") {
        const he = ne.value.find((Qe) => Qe.package_id === W.id);
        he && E(he);
      } else if (w.value === "community") {
        const he = j.value.find((N) => (N.package_id || N.item_id) === W.id);
        if (!he) return;
        if (!he.package_id) {
          q({ item_id: he.item_id, title: he.title });
          return;
        }
        A(he, ue === "install_git" ? "git" : "registry");
      }
    }
    function le() {
      w.value === "models" ? ze() : w.value === "packages" ? Ce() : w.value === "community" && Se();
    }
    async function E(W) {
      return re(W.package_id, W.latest_version, "registry");
    }
    async function A(W, ue) {
      return W.package_id ? re(W.package_id, W.latest_version, ue, W.repository) : (q({ item_id: W.item_id, title: W.title }), !1);
    }
    async function re(W, ue, he, Qe) {
      const N = M(W) || W, O = ue || "latest";
      if (r.value.has(N) || c.value.has(N) || u.value.has(N))
        return !0;
      Ve(), f.value = N;
      let X = null;
      try {
        const Oe = {
          id: N,
          version: O,
          selected_version: O,
          mode: "remote",
          channel: "default"
        };
        he === "git" && Qe && (Oe.repository = Qe, Oe.install_source = "git");
        const { ui_id: Ae } = await S(Oe, {
          beforeQueueStart: (Le) => {
            X = Le, _.value.set(Le, N), c.value.add(N), L(N), console.log("[ComfyGit] Registered pending install:", {
              ui_id: Le,
              packageId: N,
              pendingInstalls: Array.from(_.value.entries())
            });
          }
        });
        return X || (X = Ae, _.value.set(Ae, N), c.value.add(N), L(N), console.log("[ComfyGit] Registered pending install (fallback):", {
          ui_id: Ae,
          packageId: N,
          pendingInstalls: Array.from(_.value.entries())
        })), !0;
      } catch (Oe) {
        const Ae = T(Oe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Oe), X && _.value.delete(X), D(N), z(N), c.value.delete(N), u.value.set(N, Ae), !1;
      } finally {
        f.value = null;
      }
    }
    function Ee(W) {
      !W.url || !W.targetPath || d.value.has(W.url) || (C([{
        workflow: "unsaved",
        filename: W.filename,
        url: W.url,
        targetPath: W.targetPath
      }]), d.value.add(W.url));
    }
    async function Ce() {
      const W = { attempted: 0, failed: 0 };
      for (const ue of ne.value)
        !r.value.has(ue.package_id) && !c.value.has(ue.package_id) && !u.value.has(ue.package_id) && (W.attempted++, await E(ue) || W.failed++);
      return W;
    }
    async function Se() {
      const W = { attempted: 0, failed: 0 };
      for (const ue of K.value) {
        const he = ue.package_id;
        !r.value.has(he) && !c.value.has(he) && !u.value.has(he) && (W.attempted++, await A(ue, "registry") || W.failed++);
      }
      return W;
    }
    function ze() {
      const W = me.value.filter(
        (ue) => !d.value.has(ue.url)
      );
      if (W.length === 0) return 0;
      C(W.map((ue) => ({
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      })));
      for (const ue of W)
        d.value.add(ue.url);
      return W.length;
    }
    async function Fe() {
      const W = await Ce(), ue = await Se();
      ze();
      const he = W.attempted + ue.attempted, Qe = W.failed + ue.failed;
      if (he > 0 && Qe > 0) {
        const N = he - Qe;
        o.value = `${N} of ${he} installs queued, ${Qe} failed`;
      }
    }
    function Ne() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Te(W) {
      var N, O;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ue = W == null ? void 0 : W.id;
      if (ue && g.value.has(ue)) {
        console.log(`[ComfyGit] Already shown popup for workflow ${ue} this session`);
        return;
      }
      const he = window.app, Qe = (N = he == null ? void 0 : he.extensionManager) == null ? void 0 : N.workflow;
      if (Qe) {
        let Ae = !1;
        for (let Le = 0; Le < 20; Le++) {
          const je = Qe.activeWorkflow;
          if (!je) {
            await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          const nt = (O = je.activeState) == null ? void 0 : O.id;
          if (!(ue && nt === ue)) {
            Le < 19 && await new Promise((Et) => setTimeout(Et, 50));
            continue;
          }
          if (Ae = !0, je.isPersisted === !0) {
            console.log(`[ComfyGit] Skipping popup for saved workflow: ${je.filename}`), ue && g.value.add(ue);
            return;
          }
          break;
        }
        Ae || console.warn("[ComfyGit] Could not verify workflow state, showing popup as fallback");
      }
      t.value = !0, o.value = null, G(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const X = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: W, name: "unsaved" })
        });
        if (!X.ok) {
          const Oe = await X.json();
          throw new Error(Oe.error || "Failed to analyze workflow");
        }
        a.value = await X.json(), ce.value && (l.value = !0, ue && g.value.add(ue));
      } catch (X) {
        console.error("[ComfyGit] Failed to analyze workflow:", X);
      } finally {
        t.value = !1;
      }
    }
    function Je() {
      G(), l.value = !1, a.value = null;
    }
    function We(W) {
      const { workflow: ue } = W.detail;
      ue && Te(ue);
    }
    function pe(W) {
      var Qe;
      const ue = (Qe = W.detail) == null ? void 0 : Qe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ue,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const he = _.value.get(ue);
      he ? (z(he), f.value = he, console.log("[ComfyGit] Installing package:", he)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ue);
    }
    function J(W) {
      var N, O, X, Oe, Ae, Le, je;
      const ue = (N = W.detail) == null ? void 0 : N.ui_id, he = (X = (O = W.detail) == null ? void 0 : O.status) == null ? void 0 : X.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ue,
        status: he,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: W.detail
      });
      const Qe = _.value.get(ue);
      if (Qe) {
        if (z(Qe), _.value.delete(ue), c.value.delete(Qe), f.value === Qe && (f.value = null), he === "success")
          r.value.add(Qe), p.value++, console.log("[ComfyGit] Package installed successfully:", Qe);
        else {
          const nt = ((Le = (Ae = (Oe = W.detail) == null ? void 0 : Oe.status) == null ? void 0 : Ae.messages) == null ? void 0 : Le[0]) || ((je = W.detail) == null ? void 0 : je.result) || "Unknown error";
          u.value.set(Qe, nt), console.error("[ComfyGit] Package install failed:", Qe, nt);
        }
        _.value.size === 0 && p.value > 0 && (console.log("[ComfyGit] All installs complete, dispatching nodes-installed event:", p.value), window.dispatchEvent(new CustomEvent("comfygit:nodes-installed", {
          detail: { count: p.value }
        })));
      } else
        console.warn("[ComfyGit] cm-task-completed: No matching package for taskId:", ue);
    }
    let qe = null;
    function Ie() {
      var W;
      return qe || (qe = (W = window.app) == null ? void 0 : W.api), qe;
    }
    let Xe = !1;
    function Ve() {
      if (Xe) return !0;
      const W = Ie();
      return W ? (W.addEventListener("cm-task-started", pe), W.addEventListener("cm-task-completed", J), W.addEventListener("comfygit:workflow-changed", Ue), Xe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ue(W) {
      const { change_type: ue } = W.detail;
      (ue === "created" || ue === "modified") && l.value && (G(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", We);
    }), Po(() => {
      if (G(), window.removeEventListener("comfygit:workflow-loaded", We), Xe) {
        const W = Ie();
        W && (W.removeEventListener("cm-task-started", pe), W.removeEventListener("cm-task-completed", J), W.removeEventListener("comfygit:workflow-changed", Ue)), Xe = !1;
      }
    }), (W, ue) => (n(), i(B, null, [
      l.value ? (n(), R($t, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: t.value,
        error: o.value || void 0,
        onClose: Je
      }, {
        body: h(() => [
          t.value ? (n(), i("div", T7, [...ue[5] || (ue[5] = [
            s("div", { class: "loading-spinner" }, null, -1),
            s("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ce.value ? (n(), i("div", M7, [
            ne.value.length > 0 ? (n(), i("div", P7, [
              s("div", R7, [
                s("span", L7, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                ne.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Z.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    $(m(Z.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", D7, [
                (n(!0), i(B, null, ge(Pe.value, (he) => (n(), i("div", {
                  key: he.package_id,
                  class: "package-item"
                }, [
                  s("div", N7, [
                    s("span", U7, m(he.title), 1),
                    s("span", O7, "(" + m(he.node_count) + " " + m(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(he.package_id) && !c.value.has(he.package_id) && !u.value.has(he.package_id) ? (n(), R(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === he.package_id,
                    onClick: (Qe) => E(he)
                  }, {
                    default: h(() => [
                      $(m(f.value === he.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === he.package_id ? (n(), i("span", A7, "Installing...")) : c.value.has(he.package_id) ? (n(), i("span", z7, "Queued")) : u.value.has(he.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(he.package_id)
                  }, "Failed ⚠", 8, F7)) : (n(), i("span", V7, "Installed"))
                ]))), 128)),
                ne.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[0] || (ue[0] = (he) => w.value = "packages")
                }, [
                  s("span", null, "Show all " + m(ne.value.length) + " packages...", 1),
                  ue[6] || (ue[6] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (n(), i("div", B7, [
              s("div", W7, [
                s("span", G7, "Unknown Nodes (" + m(we.value.length) + ")", 1)
              ]),
              s("div", j7, [
                (n(!0), i(B, null, ge(we.value.slice(0, 5), (he) => (n(), i("div", {
                  key: he.node_type,
                  class: "item"
                }, [
                  s("code", H7, m(he.node_type), 1),
                  ue[7] || (ue[7] = s("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (n(), i("div", q7, " ...and " + m(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            ee.value.length > 0 ? (n(), i("div", K7, [
              s("div", J7, [
                s("span", Q7, "Requires Newer ComfyUI (" + m(ee.value.length) + ")", 1)
              ]),
              s("div", Y7, [
                (n(!0), i(B, null, ge(ee.value.slice(0, 5), (he) => (n(), i("div", {
                  key: `vg-${he.node_type}`,
                  class: "item"
                }, [
                  s("code", X7, m(he.node_type), 1),
                  s("span", Z7, m(he.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                ee.value.length > 5 ? (n(), i("div", eP, " ...and " + m(ee.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            j.value.length > 0 ? (n(), i("div", tP, [
              s("div", sP, [
                s("span", oP, "Community-Mapped Packages (" + m(j.value.length) + ")", 1),
                K.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: se.value,
                  onClick: Se
                }, {
                  default: h(() => [
                    $(m(se.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", nP, [
                (n(!0), i(B, null, ge(ke.value, (he) => (n(), i("div", {
                  key: `community-${he.item_id}`,
                  class: "package-item"
                }, [
                  s("div", aP, [
                    s("div", lP, [
                      s("span", iP, m(he.title), 1),
                      s("span", rP, "(" + m(he.node_count) + " " + m(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    s("div", cP, [
                      ue[8] || (ue[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      he.guidance ? (n(), i("span", uP, ". " + m(he.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  he.package_id ? (n(), i(B, { key: 0 }, [
                    !r.value.has(he.package_id) && !c.value.has(he.package_id) && !u.value.has(he.package_id) ? (n(), i("div", dP, [
                      b(De, {
                        size: "sm",
                        variant: "secondary",
                        disabled: f.value === he.package_id,
                        onClick: (Qe) => A(he, "registry")
                      }, {
                        default: h(() => [
                          $(m(f.value === he.package_id ? "Queueing..." : "Install"), 1)
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"]),
                      he.repository ? (n(), R(De, {
                        key: 0,
                        size: "sm",
                        variant: "ghost",
                        disabled: f.value === he.package_id,
                        onClick: (Qe) => A(he, "git")
                      }, {
                        default: h(() => [...ue[9] || (ue[9] = [
                          $(" Install via Git ", -1)
                        ])]),
                        _: 1
                      }, 8, ["disabled", "onClick"])) : y("", !0)
                    ])) : f.value === he.package_id ? (n(), i("span", mP, "Installing...")) : c.value.has(he.package_id) ? (n(), i("span", fP, "Queued")) : u.value.has(he.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(he.package_id)
                    }, "Failed ⚠", 8, vP)) : (n(), i("span", pP, "Installed"))
                  ], 64)) : (n(), i(B, { key: 1 }, [
                    u.value.has(he.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(he.item_id)
                    }, "Failed ⚠", 8, gP)) : (n(), i("span", hP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                j.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[1] || (ue[1] = (he) => w.value = "community")
                }, [
                  s("span", null, "Show all " + m(j.value.length) + " packages...", 1),
                  ue[10] || (ue[10] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            U.value.length > 0 ? (n(), i("div", yP, [
              s("div", wP, [
                s("span", _P, "Missing Models (" + m(U.value.length) + ")", 1),
                me.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: Q.value,
                  onClick: ze
                }, {
                  default: h(() => [
                    $(m(Q.value ? "All Queued" : "Download All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              s("div", kP, [
                (n(!0), i(B, null, ge(ye.value, (he) => (n(), i("div", {
                  key: he.widget_value,
                  class: "model-item"
                }, [
                  s("div", bP, [
                    s("span", $P, m(he.filename), 1)
                  ]),
                  he.canDownload ? (n(), i(B, { key: 0 }, [
                    d.value.has(he.url) ? (n(), i("span", CP, "Queued")) : (n(), R(De, {
                      key: 0,
                      size: "sm",
                      variant: "secondary",
                      onClick: (Qe) => Ee(he)
                    }, {
                      default: h(() => [...ue[11] || (ue[11] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]))
                  ], 64)) : (n(), i("span", xP, "Manual download required"))
                ]))), 128)),
                U.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[2] || (ue[2] = (he) => w.value = "models")
                }, [
                  s("span", null, "Show all " + m(U.value.length) + " models...", 1),
                  ue[12] || (ue[12] = s("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            s("div", SP, [
              b(Jn, {
                modelValue: v.value,
                "onUpdate:modelValue": [
                  ue[3] || (ue[3] = (he) => v.value = he),
                  Ne
                ]
              }, {
                default: h(() => [...ue[13] || (ue[13] = [
                  $(" Don't show this popup ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ])) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: Je
          }, {
            default: h(() => [...ue[14] || (ue[14] = [
              $("Dismiss", -1)
            ])]),
            _: 1
          }),
          $e.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            disabled: te.value,
            onClick: Fe
          }, {
            default: h(() => [
              $(m(te.value ? "All Done" : "Download All"), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        _: 1
      }, 8, ["loading", "error"])) : y("", !0),
      w.value ? (n(), R(E7, {
        key: 1,
        title: oe.value,
        items: Re.value,
        "item-type": w.value,
        "queued-items": w.value === "models" ? d.value : c.value,
        "installed-items": w.value === "models" ? void 0 : r.value,
        "failed-items": w.value === "models" ? void 0 : u.value,
        "installing-item": w.value === "models" ? void 0 : f.value,
        onClose: ue[4] || (ue[4] = (he) => w.value = null),
        onAction: ve,
        onBulkAction: le
      }, null, 8, ["title", "items", "item-type", "queued-items", "installed-items", "failed-items", "installing-item"])) : y("", !0)
    ], 64));
  }
}), TP = /* @__PURE__ */ xe(EP, [["__scopeId", "data-v-dfb55c3f"]]), MP = {
  key: 0,
  class: "io-mapping-root"
}, PP = { class: "io-mapping-visual-layer" }, RP = { class: "io-mapping-header" }, LP = { class: "io-mapping-header-main" }, DP = { class: "io-mapping-subtitle" }, NP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, UP = { class: "io-mapping-header-actions" }, OP = { class: "io-mapping-sidebar" }, AP = { class: "io-mapping-sidebar-scroll" }, zP = {
  key: 0,
  class: "io-state-block"
}, FP = {
  key: 1,
  class: "io-state-block io-state-error"
}, VP = { class: "contract-meta-section" }, BP = { class: "contract-meta-toggle-icon" }, WP = {
  key: 0,
  class: "contract-meta-body"
}, GP = { class: "contract-summary" }, jP = { class: "summary-pill" }, HP = { class: "summary-pill" }, qP = { class: "summary-pill" }, KP = { class: "mapping-section" }, JP = { class: "section-header" }, QP = {
  key: 0,
  class: "empty-message"
}, YP = ["onClick"], XP = { class: "item-card-title" }, ZP = { class: "item-card-meta" }, eR = { class: "item-card-summary" }, tR = { key: 0 }, sR = { class: "mapping-section" }, oR = { class: "section-header" }, nR = {
  key: 0,
  class: "empty-message"
}, aR = ["onClick"], lR = { class: "item-card-title" }, iR = { class: "item-card-meta" }, rR = { class: "item-card-summary" }, cR = { class: "io-mapping-footer" }, uR = { class: "io-mapping-footer-left" }, dR = { class: "io-mapping-footer-right" }, mR = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const t = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), x = k(null), C = k(null), S = k(0), I = k(null), M = k(null);
    let T = null;
    const D = [
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
      var N;
      return ((N = p.value) == null ? void 0 : N.contract_summary.has_contract) === !0;
    }), L = P(() => {
      if (!w.value)
        return { inputs: [], outputs: [] };
      const N = w.value.default_contract || "default";
      return w.value.contracts[N] || (w.value.contracts[N] = { inputs: [], outputs: [] }), w.value.contracts[N];
    }), q = P(() => {
      var O;
      const N = ((O = p.value) == null ? void 0 : O.contract_summary.status) ?? "none";
      return N === "valid" ? "Valid Contract" : N === "incomplete" ? "Incomplete Contract" : "No Contract";
    });
    function ce(N) {
      return N ? JSON.parse(JSON.stringify(N)) : {
        version: 1,
        default_contract: "default",
        contracts: {
          default: { inputs: [], outputs: [] }
        }
      };
    }
    function ne(N) {
      return N === "integer" || N === "number";
    }
    function Y(N) {
      return N === "enum";
    }
    function we(N) {
      return N == null ? "" : String(N);
    }
    function ee(N) {
      const O = N.trim();
      if (!O) return;
      const X = Number(O);
      return Number.isFinite(X) ? X : void 0;
    }
    function j(N) {
      return (N || []).join(`
`);
    }
    function K(N) {
      return N.split(/[\n,]/).map((O) => O.trim()).filter(Boolean);
    }
    function ke(N) {
      return typeof N == "string" ? N.length > 24 ? `${N.slice(0, 24)}...` : N : String(N);
    }
    function se(N) {
      return N == null ? "" : String(N);
    }
    function fe(N) {
      var X;
      const O = (X = N == null ? void 0 : N.options) == null ? void 0 : X.values;
      return Array.isArray(O) ? O.map((Oe) => String(Oe)).filter(Boolean) : [];
    }
    function U(N, O) {
      var Ae;
      const X = (Ae = N == null ? void 0 : N.options) == null ? void 0 : Ae[O];
      if (X == null || X === "") return;
      const Oe = Number(X);
      return Number.isFinite(Oe) ? Oe : void 0;
    }
    function me(N, O) {
      return N.trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || O;
    }
    function Pe(N) {
      if (!w.value) return;
      const O = N.trim() || "default";
      w.value.default_contract = O, w.value.contracts[O] || (w.value.contracts[O] = { inputs: [], outputs: [] });
    }
    function ye(N) {
      const O = String(N ?? "").toLowerCase();
      return O.includes("image") ? "image" : O.includes("video") ? "video" : O.includes("audio") ? "audio" : O.includes("int") ? "integer" : O.includes("float") || O.includes("double") || O.includes("number") ? "number" : O.includes("bool") ? "boolean" : O.includes("combo") || O.includes("enum") ? "enum" : O.includes("string") || O.includes("text") ? "string" : "file";
    }
    function Z(N) {
      L.value.inputs.splice(N, 1), x.value === N && (x.value = null);
    }
    function Q(N) {
      L.value.outputs.splice(N, 1), C.value === N && (C.value = null);
    }
    function $e(N) {
      x.value = x.value === N ? null : N, x.value != null && (C.value = null);
    }
    function te(N) {
      C.value = C.value === N ? null : N, C.value != null && (x.value = null);
    }
    function oe(N) {
      const O = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(String(N)) : String(N);
      return document.querySelector(`[data-node-id="${O}"]`);
    }
    function Re(N) {
      return N instanceof Element ? !!N.closest(".io-mapping-header, .io-mapping-sidebar") : !1;
    }
    function ve(N) {
      var Oe, Ae, Le, je, nt, kt;
      if (!(N instanceof Element)) return null;
      const O = N.closest("[data-node-id]"), X = O == null ? void 0 : O.getAttribute("data-node-id");
      return X ? ((Le = (Ae = (Oe = t.comfyApp) == null ? void 0 : Oe.graph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : Le.call(Ae, X)) ?? ((kt = (nt = (je = t.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : kt.call(nt, X)) ?? null : null;
    }
    function le(N, O) {
      if (O == null || O < 0) return null;
      const X = oe(N);
      return X ? X.querySelectorAll('[data-testid="node-widget"]')[O] ?? null : null;
    }
    function E(N) {
      return !N || N.width <= 0 || N.height <= 0 ? null : {
        left: `${N.left}px`,
        top: `${N.top}px`,
        width: `${N.width}px`,
        height: `${N.height}px`
      };
    }
    function A(N) {
      const O = oe((N == null ? void 0 : N.id) ?? "");
      if (O) return O.getBoundingClientRect();
      const X = t.comfyApp;
      if (!N || typeof (X == null ? void 0 : X.canvasPosToClientPos) != "function") return null;
      const Ae = X.canvasPosToClientPos([N.pos[0], N.pos[1] - 32]), Le = X.canvasPosToClientPos([N.pos[0] + N.size[0], N.pos[1] + N.size[1]]);
      return !Ae || !Le ? null : new DOMRect(Ae[0], Ae[1], Le[0] - Ae[0], Le[1] - Ae[1]);
    }
    function re(N) {
      var nt, kt, Et, ie, F, de, Ge;
      const O = le(N.node_id, N.widget_idx);
      if (O) return O.getBoundingClientRect();
      const X = ((Et = (kt = (nt = t.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : kt.getNodeById) == null ? void 0 : Et.call(kt, String(N.node_id))) ?? ((de = (F = (ie = t.comfyApp) == null ? void 0 : ie.rootGraph) == null ? void 0 : F.getNodeById) == null ? void 0 : de.call(F, String(N.node_id)));
      if (!X || typeof N.widget_idx != "number" || !Array.isArray(X.widgets)) return null;
      const Oe = X.widgets[N.widget_idx];
      if (!Oe || typeof ((Ge = t.comfyApp) == null ? void 0 : Ge.canvasPosToClientPos) != "function") return A(X);
      const Ae = 10, Le = t.comfyApp.canvasPosToClientPos([X.pos[0] + Ae, X.pos[1] + (Oe.y ?? 0)]), je = t.comfyApp.canvasPosToClientPos([X.pos[0] + X.size[0] - Ae, X.pos[1] + (Oe.y ?? 0) + (Oe.computedHeight ?? 24)]);
      return !Le || !je ? A(X) : new DOMRect(Le[0], Le[1], je[0] - Le[0], je[1] - Le[1]);
    }
    function Ee(N) {
      var X, Oe, Ae, Le, je, nt;
      const O = ((Ae = (Oe = (X = t.comfyApp) == null ? void 0 : X.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Ae.call(Oe, String(N.node_id))) ?? ((nt = (je = (Le = t.comfyApp) == null ? void 0 : Le.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(N.node_id)));
      return A(O);
    }
    const Ce = P(() => (S.value, L.value.inputs.map((N, O) => {
      const X = E(re(N));
      return X ? {
        key: `input-${O}-${N.node_id}-${N.widget_idx ?? "na"}`,
        style: X,
        active: x.value === O
      } : null;
    }).filter((N) => !!N))), Se = P(() => (S.value, L.value.outputs.map((N, O) => {
      const X = E(Ee(N));
      return X ? {
        key: `output-${O}-${N.node_id}-${N.selector ?? "primary"}`,
        style: X,
        active: C.value === O
      } : null;
    }).filter((N) => !!N)));
    function ze(N) {
      var Et, ie, F, de, Ge, dt, xt, it, St, ts;
      if (Re(N.target)) return null;
      const O = (Et = t.comfyApp) == null ? void 0 : Et.canvas;
      if (!O) return null;
      const X = (ie = O.convertEventToCanvasOffset) == null ? void 0 : ie.call(O, N);
      if (!X || X.length < 2) return null;
      const [Oe, Ae] = X, Le = O.graph || ((F = t.comfyApp) == null ? void 0 : F.graph) || ((de = t.comfyApp) == null ? void 0 : de.rootGraph), je = ((Ge = Le == null ? void 0 : Le.getNodeOnPos) == null ? void 0 : Ge.call(Le, Oe, Ae, O.visible_nodes)) || ((dt = O.getNodeOnPos) == null ? void 0 : dt.call(O, Oe, Ae)) || ve(N.target);
      if (!je) return null;
      const nt = (xt = je.getWidgetOnPos) == null ? void 0 : xt.call(je, Oe, Ae, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: Oe, canvasY: Ae };
      const kt = ((it = je.getOutputOnPos) == null ? void 0 : it.call(je, [Oe, Ae])) || ((ts = (St = je.constructor) == null ? void 0 : St.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: je, output: kt, canvasX: Oe, canvasY: Ae } : null;
    }
    function Fe(N, O) {
      var nt;
      const X = Array.isArray(N.widgets) ? N.widgets.indexOf(O) : -1, Oe = L.value.inputs.findIndex(
        (kt) => String(kt.node_id) === String(N.id) && kt.widget_idx === X
      );
      if (Oe >= 0) {
        x.value = Oe;
        return;
      }
      const Ae = typeof ((nt = O == null ? void 0 : O.options) == null ? void 0 : nt.property) == "string" ? O.options.property : void 0, Le = (O == null ? void 0 : O.name) || Ae || "input", je = {
        name: me(String(Le), `input_${L.value.inputs.length + 1}`),
        display_name: String((O == null ? void 0 : O.name) || Ae || `Input ${L.value.inputs.length + 1}`),
        type: ye(O == null ? void 0 : O.type),
        node_id: String(N.id),
        widget_idx: X >= 0 ? X : void 0,
        field_key: Ae,
        required: !0,
        default: (O == null ? void 0 : O.value) ?? ""
      };
      ne(je.type) && (je.min = U(O, "min"), je.max = U(O, "max")), Y(je.type) && (je.enum_values = fe(O)), L.value.inputs.push(je), x.value = L.value.inputs.length - 1, C.value = null;
    }
    function Ne(N, O) {
      const X = Array.isArray(N.outputs) ? N.outputs.indexOf(O) : -1, Oe = X >= 0 ? `slot:${X}` : "primary", Ae = L.value.outputs.findIndex(
        (je) => String(je.node_id) === String(N.id) && (je.selector || "primary") === Oe
      );
      if (Ae >= 0) {
        C.value = Ae;
        return;
      }
      const Le = {
        name: me(String((O == null ? void 0 : O.name) || "output"), `output_${L.value.outputs.length + 1}`),
        display_name: String((O == null ? void 0 : O.name) || `Output ${L.value.outputs.length + 1}`),
        type: ye(O == null ? void 0 : O.type),
        node_id: String(N.id),
        selector: Oe
      };
      L.value.outputs.push(Le), C.value = L.value.outputs.length - 1, x.value = null;
    }
    function Te(N) {
      var Oe, Ae, Le;
      if (!r.value) {
        I.value = null, M.value = null;
        return;
      }
      const O = ze(N);
      if (!O) {
        I.value = null, M.value = null;
        return;
      }
      if (O.kind === "input") {
        const je = Array.isArray(O.node.widgets) ? O.node.widgets.indexOf(O.widget) : -1, nt = E(((Oe = le(O.node.id, je)) == null ? void 0 : Oe.getBoundingClientRect()) ?? re({
          node_id: String(O.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          I.value = null, M.value = null;
          return;
        }
        I.value = {
          kind: "input",
          label: `${((Ae = O.widget) == null ? void 0 : Ae.name) || "widget"} · Node ${O.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const X = E(A(O.node));
      if (!X) {
        I.value = null, M.value = null;
        return;
      }
      I.value = {
        kind: "output",
        label: `${((Le = O.output) == null ? void 0 : Le.name) || O.node.title || O.node.type || "output"} · Node ${O.node.id}`
      }, M.value = { kind: "output", style: X };
    }
    function Je(N) {
      var Oe, Ae, Le;
      if (!r.value || !w.value || N.button !== 0) return;
      const O = ze(N);
      if (!O) return;
      const X = (Oe = t.comfyApp) == null ? void 0 : Oe.canvas;
      if (X) {
        if (O.kind === "input") {
          N.preventDefault(), N.stopImmediatePropagation(), N.stopPropagation(), Array.isArray(X.graph_mouse) && (X.graph_mouse[0] = O.canvasX, X.graph_mouse[1] = O.canvasY), (Ae = X.selectNode) == null || Ae.call(X, O.node, !1), Fe(O.node, O.widget);
          return;
        }
        N.preventDefault(), N.stopImmediatePropagation(), N.stopPropagation(), Array.isArray(X.graph_mouse) && (X.graph_mouse[0] = O.canvasX, X.graph_mouse[1] = O.canvasY), (Le = X.selectNode) == null || Le.call(X, O.node, !1), Ne(O.node, O.output);
      }
    }
    function We() {
      document.addEventListener("pointerdown", Je, !0), document.addEventListener("pointermove", Te, !0);
    }
    function pe() {
      document.removeEventListener("pointerdown", Je, !0), document.removeEventListener("pointermove", Te, !0);
    }
    async function J() {
      if (c.value) {
        u.value = !0, f.value = null;
        try {
          p.value = await o(c.value), w.value = ce(p.value.execution_contract);
        } catch (N) {
          f.value = N instanceof Error ? N.message : "Failed to load workflow contract";
        } finally {
          u.value = !1;
        }
      }
    }
    async function qe() {
      if (!(!w.value || !c.value)) {
        d.value = !0, f.value = null;
        try {
          p.value = await a(c.value, w.value), w.value = ce(p.value.execution_contract), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ue({ reopenPanel: !0 });
        } catch (N) {
          f.value = N instanceof Error ? N.message : "Failed to save workflow contract";
        } finally {
          d.value = !1;
        }
      }
    }
    async function Ie() {
      _.value = !0;
    }
    async function Xe() {
      if (c.value) {
        _.value = !1, v.value = !0, f.value = null;
        try {
          await l(c.value), window.dispatchEvent(new CustomEvent("comfygit:workflow-contract-saved", {
            detail: { workflowName: c.value }
          })), Ue({ reopenPanel: !0 });
        } catch (N) {
          f.value = N instanceof Error ? N.message : "Failed to delete workflow contract";
        } finally {
          v.value = !1;
        }
      }
    }
    function Ve() {
      window.dispatchEvent(new CustomEvent("comfygit:open-panel", {
        detail: { initialView: "workflows" }
      }));
    }
    function Ue(N) {
      r.value = !1, I.value = null, M.value = null, _.value = !1, N != null && N.reopenPanel && Ve();
    }
    async function W(N) {
      var Oe, Ae;
      const X = (Ae = (Oe = N.detail) == null ? void 0 : Oe.workflowName) == null ? void 0 : Ae.trim();
      X && (c.value = X, x.value = null, C.value = null, g.value = !1, r.value = !0, await J());
    }
    function ue(N) {
      if (N.key === "Escape" && r.value) {
        if (_.value) {
          _.value = !1;
          return;
        }
        Ue({ reopenPanel: !0 });
      }
    }
    function he() {
      if (T != null) return;
      const N = () => {
        if (S.value += 1, !r.value) {
          T = null;
          return;
        }
        T = window.requestAnimationFrame(N);
      };
      T = window.requestAnimationFrame(N);
    }
    function Qe() {
      T != null && (window.cancelAnimationFrame(T), T = null);
    }
    return ht(r, (N) => {
      N ? (We(), he()) : (pe(), Qe());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", W), window.addEventListener("keydown", ue);
    }), aa(() => {
      pe(), Qe(), window.removeEventListener("comfygit:open-io-mapping", W), window.removeEventListener("keydown", ue);
    }), (N, O) => r.value ? (n(), i("div", MP, [
      s("div", PP, [
        (n(!0), i(B, null, ge(Ce.value, (X) => (n(), i("div", {
          key: X.key,
          class: Be(["io-highlight", "io-highlight-input", { active: X.active }]),
          style: Rt(X.style)
        }, null, 6))), 128)),
        (n(!0), i(B, null, ge(Se.value, (X) => (n(), i("div", {
          key: X.key,
          class: Be(["io-highlight", "io-highlight-output", { active: X.active }]),
          style: Rt(X.style)
        }, null, 6))), 128)),
        M.value ? (n(), i("div", {
          key: 0,
          class: Be(["io-highlight", M.value.kind === "input" ? "io-highlight-hover-input" : "io-highlight-hover-output"]),
          style: Rt(M.value.style)
        }, null, 6)) : y("", !0)
      ]),
      s("div", RP, [
        s("div", LP, [
          O[8] || (O[8] = s("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          s("div", DP, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          I.value ? (n(), i("div", NP, " Hovering " + m(I.value.kind) + ": " + m(I.value.label), 1)) : y("", !0)
        ]),
        s("div", UP, [
          b(De, {
            size: "sm",
            variant: "secondary",
            onClick: O[0] || (O[0] = (X) => Ue({ reopenPanel: !0 }))
          }, {
            default: h(() => [...O[9] || (O[9] = [
              $(" Exit ", -1)
            ])]),
            _: 1
          })
        ])
      ]),
      s("aside", OP, [
        s("div", AP, [
          u.value ? (n(), i("div", zP, " Loading workflow contract... ")) : f.value ? (n(), i("div", FP, m(f.value), 1)) : w.value ? (n(), i(B, { key: 2 }, [
            s("section", VP, [
              s("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: O[1] || (O[1] = (X) => g.value = !g.value)
              }, [
                O[10] || (O[10] = s("span", null, "Contract Details", -1)),
                s("span", BP, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", WP, [
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
                      "onUpdate:modelValue": O[2] || (O[2] = (X) => L.value.display_name = X),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Nt, { label: "Description" }, {
                  default: h(() => [
                    b(xo, {
                      modelValue: L.value.description,
                      "onUpdate:modelValue": O[3] || (O[3] = (X) => L.value.description = X),
                      rows: 2,
                      placeholder: "Optional description for this contract"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ])) : y("", !0)
            ]),
            s("section", GP, [
              s("span", jP, m(q.value), 1),
              s("span", HP, m(L.value.inputs.length) + " input" + m(L.value.inputs.length === 1 ? "" : "s"), 1),
              s("span", qP, m(L.value.outputs.length) + " output" + m(L.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            s("section", KP, [
              s("div", JP, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...O[11] || (O[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.inputs.length ? y("", !0) : (n(), i("div", QP, " No inputs configured. ")),
              (n(!0), i(B, null, ge(L.value.inputs, (X, Oe) => (n(), i("div", {
                key: `input-${Oe}`,
                class: Be(["item-card", { selected: x.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ae) => $e(Oe)
                }, [
                  s("div", null, [
                    s("div", XP, m(X.name || `Input ${Oe + 1}`), 1),
                    s("div", ZP, [
                      $(" Node " + m(X.node_id || "?"), 1),
                      X.widget_idx !== void 0 ? (n(), i(B, { key: 0 }, [
                        $(" · Widget " + m(X.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", eR, [
                      s("span", null, m(X.type || "string"), 1),
                      s("span", null, m(X.required ? "required" : "optional"), 1),
                      X.default !== void 0 && X.default !== "" ? (n(), i("span", tR, "default " + m(ke(X.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: yt((Ae) => Z(Oe), ["stop"])
                  }, {
                    default: h(() => [...O[12] || (O[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, YP),
                x.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[4] || (O[4] = yt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ae) => X.name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ae) => X.display_name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": X.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.type = Ae
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Required" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": X.required ? "true" : "false",
                        options: z,
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.required = Ae === "true"
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, {
                    class: Be({ "item-grid-full": X.type === "string" || X.type === "enum" }),
                    label: "Default"
                  }, {
                    default: h(() => [
                      X.type === "string" ? (n(), R(xo, {
                        key: 0,
                        "model-value": se(X.default),
                        rows: 3,
                        placeholder: "Default string value",
                        "onUpdate:modelValue": (Ae) => X.default = Ae
                      }, null, 8, ["model-value", "onUpdate:modelValue"])) : (n(), R(bt, {
                        key: 1,
                        modelValue: X.default,
                        "onUpdate:modelValue": (Ae) => X.default = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]))
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  ne(X.type) ? (n(), R(Nt, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(X.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.min = ee(Ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ne(X.type) ? (n(), R(Nt, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(X.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.max = ee(Ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Y(X.type) ? (n(), R(Nt, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": j(X.enum_values),
                        rows: 4,
                        placeholder: "One or more values, separated by commas or new lines",
                        "onUpdate:modelValue": (Ae) => X.enum_values = K(Ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0)
                ])) : y("", !0)
              ], 2))), 128))
            ]),
            s("section", sR, [
              s("div", oR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...O[13] || (O[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.outputs.length ? y("", !0) : (n(), i("div", nR, " No outputs configured. ")),
              (n(!0), i(B, null, ge(L.value.outputs, (X, Oe) => (n(), i("div", {
                key: `output-${Oe}`,
                class: Be(["item-card", { selected: C.value === Oe }])
              }, [
                s("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ae) => te(Oe)
                }, [
                  s("div", null, [
                    s("div", lR, m(X.name || `Output ${Oe + 1}`), 1),
                    s("div", iR, [
                      $(" Node " + m(X.node_id || "?"), 1),
                      X.selector ? (n(), i(B, { key: 0 }, [
                        $(" · " + m(X.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    s("div", rR, [
                      s("span", null, m(X.type || "file"), 1)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: yt((Ae) => Q(Oe), ["stop"])
                  }, {
                    default: h(() => [...O[14] || (O[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, aR),
                C.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[5] || (O[5] = yt(() => {
                  }, ["stop"]))
                }, [
                  b(Nt, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ae) => X.name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ae) => X.display_name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Nt, { label: "Type" }, {
                    default: h(() => [
                      b(Nn, {
                        "model-value": X.type,
                        options: D,
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.type = Ae
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ])) : y("", !0)
              ], 2))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        s("div", cR, [
          s("div", uR, [
            b(De, {
              variant: "secondary",
              onClick: O[6] || (O[6] = (X) => Ue({ reopenPanel: !0 }))
            }, {
              default: h(() => [...O[15] || (O[15] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            })
          ]),
          s("div", dR, [
            b(De, {
              variant: "danger",
              disabled: !G.value,
              loading: v.value,
              onClick: Ie
            }, {
              default: h(() => [...O[16] || (O[16] = [
                $(" Delete ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            b(De, {
              variant: "primary",
              loading: d.value,
              onClick: qe
            }, {
              default: h(() => [...O[17] || (O[17] = [
                $(" Save ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])
        ])
      ]),
      _.value ? (n(), R(Tl, {
        key: 0,
        title: "Delete Workflow Contract",
        message: `Delete the contract for ${c.value}?`,
        warning: "This removes the saved input/output contract for this workflow. The workflow itself will not be deleted.",
        "confirm-label": "Delete",
        "cancel-label": "Cancel",
        destructive: !0,
        onConfirm: Xe,
        onCancel: O[7] || (O[7] = (X) => _.value = !1)
      }, null, 8, ["message"])) : y("", !0)
    ])) : y("", !0);
  }
}), fR = /* @__PURE__ */ xe(mR, [["__scopeId", "data-v-13515b27"]]), vR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', pR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', gR = {
  comfy: vR,
  phosphor: pR
}, Rl = "comfy", Ec = "comfygit-theme";
let eo = null, Tc = Rl;
function hR() {
  try {
    const e = localStorage.getItem(Ec);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Rl;
}
function Mc(e = Rl) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = gR[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), Tc = e;
  try {
    localStorage.setItem(Ec, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function yR() {
  return Tc;
}
function wR(e) {
  Mc(e);
}
function _R(e) {
  var r;
  const { ui_id: t, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!t)
    return null;
  const l = a[t];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Ri = "ComfyGit.DevAutoReload", Pc = "ComfyGit.DevAutoReload.PanelOpen";
function kR() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ca() {
  const e = kR();
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
function bR() {
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
  const a = o.headers, l = [
    a.get("etag"),
    a.get("last-modified"),
    a.get("content-length")
  ].filter(Boolean).join(":"), r = await o.text();
  let c = 0;
  for (let u = 0; u < r.length; u += 1)
    c = (c << 5) - c + r.charCodeAt(u) | 0;
  return `${l}:${r.length}:${c}`;
}
async function $R(e) {
  if (!ca()) return;
  const t = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of t)
    try {
      a.signature = await Li(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of t)
        try {
          const l = await Li(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const CR = "./comfygit-panel.css", xR = "./comfygit-panel.js", Lc = new URL(CR, import.meta.url).href, SR = new URL(xR, import.meta.url).href, Ll = document.createElement("link");
Ll.rel = "stylesheet";
Ll.href = Lc;
document.head.appendChild(Ll);
const IR = hR();
Mc(IR);
ca() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), wR(e);
  },
  getTheme: () => {
    const e = yR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ks = null, tn = null, Xt = null, sn = null, Fo = null, Di = null, Vo = null, Ni = null, Bo = null, Ui = null;
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
function ER() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Wo(e) {
  Ho(), Rc(!0), ks = document.createElement("div"), ks.className = "comfygit-panel-overlay";
  const t = document.createElement("div");
  t.className = "comfygit-panel-container", ks.appendChild(t), ks.addEventListener("click", (a) => {
    a.target === ks && Ho();
  });
  const o = (a) => {
    a.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), tn = gn({
    render: () => Ro(_M, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (a) => {
        So.value = a, on(), await ol(), al(), nl();
      }
    })
  }), tn.mount(t), document.body.appendChild(ks);
}
function Ho() {
  Rc(!1), tn && (tn.unmount(), tn = null), ks && (ks.remove(), ks = null);
}
function Oi(e) {
  Go(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const t = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${t.bottom + 8}px`, Xt.style.right = `${window.innerWidth - t.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), sn = gn({
    render: () => Ro(Cc, {
      status: So.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), TR(l.success, l.message), Un().then(on);
      }
    })
  }), sn.mount(Xt), document.body.appendChild(Xt);
}
function Go() {
  sn && (sn.unmount(), sn = null), Xt && (Xt.remove(), Xt = null);
}
function TR(e, t) {
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
  r.textContent = t, o.appendChild(r), document.body.appendChild(o), setTimeout(() => {
    o.style.opacity = "0", o.style.transition = "opacity 0.2s ease", setTimeout(() => o.remove(), 200);
  }, 3e3);
}
function MR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Di = gn({
    render: () => Ro(v7)
  }), Di.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function PR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Ni = gn({
    render: () => Ro(TP)
  }), Ni.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function RR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-io-mapping-root", Ui = gn({
    render: () => Ro(fR, {
      comfyApp: Zt
    })
  }), Ui.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let Ht = null;
function on() {
  if (!Ht) return;
  const e = Ht.querySelector(".commit-indicator");
  e && (e.style.display = ER() ? "block" : "none");
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
    t.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", t.textContent = "ComfyGit", t.title = "ComfyGit Control Panel", t.onclick = () => Wo(), Ht = document.createElement("button"), Ht.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", Ht.innerHTML = 'Commit <span class="commit-indicator"></span>', Ht.title = "Quick Commit", Ht.onclick = () => Oi(Ht), e.appendChild(t), e.appendChild(Ht), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), MR(), PR(), RR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Wo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([Un(), ol()]), on(), al(), nl(), bR() && setTimeout(() => {
      ks || Wo();
    }, 100), $R([
      { name: "panel script", url: SR },
      { name: "panel stylesheet", url: Lc }
    ]), setTimeout(nl, 100), setInterval(async () => {
      await Promise.all([Un(), ol()]), on(), al();
    }, 3e4);
    const a = Zt.api;
    if (a) {
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
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const C = document.createElement("div");
        C.textContent = "Node installation failed", C.style.cssText = "font-weight: 600; color: #e53935;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", x.appendChild(S), g.appendChild(x);
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
        const M = document.createElement("button");
        M.textContent = "×", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => g.remove(), g.appendChild(M), document.body.appendChild(g), console.log("[ComfyGit] Manager error toast displayed:", p), setTimeout(() => {
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
        const x = document.createElement("div");
        x.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const C = document.createElement("div");
        C.textContent = "To apply changes, please restart ComfyUI", C.style.cssText = "font-weight: 500; color: #fff;", x.appendChild(C);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", x.appendChild(S), g.appendChild(x);
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
          I.disabled = !0, I.textContent = "Restarting...", I.style.opacity = "0.7", C.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const T = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", C.textContent = "Nodes Installed", C.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", I.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), _.textContent = "✅", C.textContent = "Restart Complete", C.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", I.style.display = "none";
              }
            };
            a.addEventListener("reconnected", T, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (T) {
            console.error("[ComfyGit] Failed to restart:", T), C.textContent = "Restart Failed", C.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", I.textContent = "Try Again", I.disabled = !1, I.style.opacity = "1";
          }
        }, g.appendChild(I);
        const M = document.createElement("button");
        M.textContent = "×", M.title = "Dismiss (restart later)", M.style.cssText = `
          background: transparent;
          border: none;
          color: #fff;
          font-size: 24px;
          line-height: 1;
          cursor: pointer;
          padding: 0 4px;
          opacity: 0.6;
        `, M.onmouseover = () => M.style.opacity = "1", M.onmouseout = () => M.style.opacity = "0.6", M.onclick = () => g.remove(), g.appendChild(M), document.body.appendChild(g), console.log(`[ComfyGit] Restart required notification displayed (${p} packages installed)`);
      };
      a.addEventListener("comfygit:workflow-changed", async (p) => {
        const { change_type: w, workflow_name: g } = p.detail;
        console.log(`[ComfyGit] Workflow ${w}: ${g}`), await Un(), on();
      }), console.log("[ComfyGit] Registered workflow file change listener");
      let f = !1;
      a.addEventListener("status", async (p) => {
        const w = p.detail != null;
        w && !f && sessionStorage.getItem("ComfyGit.PendingRefresh") && (sessionStorage.removeItem("ComfyGit.PendingRefresh"), localStorage.getItem("ComfyGit.Settings.AutoRefresh") !== "false" ? (console.log("[ComfyGit] Auto-refresh enabled, reloading page..."), c()) : u()), f = w;
      }), console.log("[ComfyGit] Refresh notification system initialized"), a.addEventListener("cm-task-completed", (p) => {
        const w = _R(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
