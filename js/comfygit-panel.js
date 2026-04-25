var Nc = Object.defineProperty;
var Uc = (e, s, o) => s in e ? Nc(e, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[s] = o;
var _n = (e, s, o) => Uc(e, typeof s != "symbol" ? s + "" : s, o);
import { app as Zt } from "../../scripts/app.js";
/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const s = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) s[o] = 1;
  return (o) => o in s;
}
const ht = {}, wo = [], bs = () => {
}, zi = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), il = (e) => e.startsWith("onUpdate:"), Mt = Object.assign, rl = (e, s) => {
  const o = e.indexOf(s);
  o > -1 && e.splice(o, 1);
}, Oc = Object.prototype.hasOwnProperty, ft = (e, s) => Oc.call(e, s), et = Array.isArray, _o = (e) => fn(e) === "[object Map]", Mo = (e) => fn(e) === "[object Set]", Ol = (e) => fn(e) === "[object Date]", tt = (e) => typeof e == "function", $t = (e) => typeof e == "string", ms = (e) => typeof e == "symbol", gt = (e) => e !== null && typeof e == "object", Fi = (e) => (gt(e) || tt(e)) && tt(e.then) && tt(e.catch), Vi = Object.prototype.toString, fn = (e) => Vi.call(e), Ac = (e) => fn(e).slice(8, -1), Bi = (e) => fn(e) === "[object Object]", cl = (e) => $t(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qo = /* @__PURE__ */ ll(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const s = /* @__PURE__ */ Object.create(null);
  return ((o) => s[o] || (s[o] = e(o)));
}, zc = /-\w/g, is = Yn(
  (e) => e.replace(zc, (s) => s.slice(1).toUpperCase())
), Fc = /\B([A-Z])/g, Js = Yn(
  (e) => e.replace(Fc, "-$1").toLowerCase()
), Xn = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = Yn(
  (e) => e ? `on${Xn(e)}` : ""
), Hs = (e, s) => !Object.is(e, s), En = (e, ...s) => {
  for (let o = 0; o < e.length; o++)
    e[o](...s);
}, Wi = (e, s, o, a = !1) => {
  Object.defineProperty(e, s, {
    configurable: !0,
    enumerable: !1,
    writable: a,
    value: o
  });
}, Zn = (e) => {
  const s = parseFloat(e);
  return isNaN(s) ? e : s;
}, Vc = (e) => {
  const s = $t(e) ? Number(e) : NaN;
  return isNaN(s) ? e : s;
};
let Al;
const ea = () => Al || (Al = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (et(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++) {
      const a = e[o], l = $t(a) ? jc(a) : Rt(a);
      if (l)
        for (const r in l)
          s[r] = l[r];
    }
    return s;
  } else if ($t(e) || gt(e))
    return e;
}
const Bc = /;(?![^(]*\))/g, Wc = /:([^]+)/, Gc = /\/\*[^]*?\*\//g;
function jc(e) {
  const s = {};
  return e.replace(Gc, "").split(Bc).forEach((o) => {
    if (o) {
      const a = o.split(Wc);
      a.length > 1 && (s[a[0].trim()] = a[1].trim());
    }
  }), s;
}
function Be(e) {
  let s = "";
  if ($t(e))
    s = e;
  else if (et(e))
    for (let o = 0; o < e.length; o++) {
      const a = Be(e[o]);
      a && (s += a + " ");
    }
  else if (gt(e))
    for (const o in e)
      e[o] && (s += o + " ");
  return s.trim();
}
const Hc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qc = /* @__PURE__ */ ll(Hc);
function Gi(e) {
  return !!e || e === "";
}
function Kc(e, s) {
  if (e.length !== s.length) return !1;
  let o = !0;
  for (let a = 0; o && a < e.length; a++)
    o = lo(e[a], s[a]);
  return o;
}
function lo(e, s) {
  if (e === s) return !0;
  let o = Ol(e), a = Ol(s);
  if (o || a)
    return o && a ? e.getTime() === s.getTime() : !1;
  if (o = ms(e), a = ms(s), o || a)
    return e === s;
  if (o = et(e), a = et(s), o || a)
    return o && a ? Kc(e, s) : !1;
  if (o = gt(e), a = gt(s), o || a) {
    if (!o || !a)
      return !1;
    const l = Object.keys(e).length, r = Object.keys(s).length;
    if (l !== r)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = s.hasOwnProperty(c);
      if (u && !d || !u && d || !lo(e[c], s[c]))
        return !1;
    }
  }
  return String(e) === String(s);
}
function ul(e, s) {
  return e.findIndex((o) => lo(o, s));
}
const ji = (e) => !!(e && e.__v_isRef === !0), m = (e) => $t(e) ? e : e == null ? "" : et(e) || gt(e) && (e.toString === Vi || !tt(e.toString)) ? ji(e) ? m(e.value) : JSON.stringify(e, Hi, 2) : String(e), Hi = (e, s) => ji(s) ? Hi(e, s.value) : _o(s) ? {
  [`Map(${s.size})`]: [...s.entries()].reduce(
    (o, [a, l], r) => (o[Ma(a, r) + " =>"] = l, o),
    {}
  )
} : Mo(s) ? {
  [`Set(${s.size})`]: [...s.values()].map((o) => Ma(o))
} : ms(s) ? Ma(s) : gt(s) && !et(s) && !Bi(s) ? String(s) : s, Ma = (e, s = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ms(e) ? `Symbol(${(o = e.description) != null ? o : s})` : e
  );
};
/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jt;
class Jc {
  constructor(s = !1) {
    this.detached = s, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !s && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
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
      const o = Jt;
      try {
        return Jt = this, s();
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
function Qc() {
  return Jt;
}
let wt;
const Pa = /* @__PURE__ */ new WeakSet();
class qi {
  constructor(s) {
    this.fn = s, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ji(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, zl(this), Qi(this);
    const s = wt, o = us;
    wt = this, us = !0;
    try {
      return this.fn();
    } finally {
      Yi(this), wt = s, us = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let s = this.deps; s; s = s.nextDep)
        fl(s);
      this.deps = this.depsTail = void 0, zl(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Ki = 0, Ko, Jo;
function Ji(e, s = !1) {
  if (e.flags |= 8, s) {
    e.next = Jo, Jo = e;
    return;
  }
  e.next = Ko, Ko = e;
}
function dl() {
  Ki++;
}
function ml() {
  if (--Ki > 0)
    return;
  if (Jo) {
    let s = Jo;
    for (Jo = void 0; s; ) {
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
function Qi(e) {
  for (let s = e.deps; s; s = s.nextDep)
    s.version = -1, s.prevActiveLink = s.dep.activeLink, s.dep.activeLink = s;
}
function Yi(e) {
  let s, o = e.depsTail, a = o;
  for (; a; ) {
    const l = a.prevDep;
    a.version === -1 ? (a === o && (o = l), fl(a), Yc(a)) : s = a, a.dep.activeLink = a.prevActiveLink, a.prevActiveLink = void 0, a = l;
  }
  e.deps = s, e.depsTail = o;
}
function Wa(e) {
  for (let s = e.deps; s; s = s.nextDep)
    if (s.dep.version !== s.version || s.dep.computed && (Xi(s.dep.computed) || s.dep.version !== s.version))
      return !0;
  return !!e._dirty;
}
function Xi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === nn) || (e.globalVersion = nn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wa(e))))
    return;
  e.flags |= 2;
  const s = e.dep, o = wt, a = us;
  wt = e, us = !0;
  try {
    Qi(e);
    const l = e.fn(e._value);
    (s.version === 0 || Hs(l, e._value)) && (e.flags |= 128, e._value = l, s.version++);
  } catch (l) {
    throw s.version++, l;
  } finally {
    wt = o, us = a, Yi(e), e.flags &= -3;
  }
}
function fl(e, s = !1) {
  const { dep: o, prevSub: a, nextSub: l } = e;
  if (a && (a.nextSub = l, e.prevSub = void 0), l && (l.prevSub = a, e.nextSub = void 0), o.subs === e && (o.subs = a, !a && o.computed)) {
    o.computed.flags &= -5;
    for (let r = o.computed.deps; r; r = r.nextDep)
      fl(r, !0);
  }
  !s && !--o.sc && o.map && o.map.delete(o.key);
}
function Yc(e) {
  const { prevDep: s, nextDep: o } = e;
  s && (s.nextDep = o, e.prevDep = void 0), o && (o.prevDep = s, e.nextDep = void 0);
}
let us = !0;
const Zi = [];
function Ds() {
  Zi.push(us), us = !1;
}
function Ns() {
  const e = Zi.pop();
  us = e === void 0 ? !0 : e;
}
function zl(e) {
  const { cleanup: s } = e;
  if (e.cleanup = void 0, s) {
    const o = wt;
    wt = void 0;
    try {
      s();
    } finally {
      wt = o;
    }
  }
}
let nn = 0;
class Xc {
  constructor(s, o) {
    this.sub = s, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(s) {
    this.computed = s, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(s) {
    if (!wt || !us || wt === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== wt)
      o = this.activeLink = new Xc(wt, this), wt.deps ? (o.prevDep = wt.depsTail, wt.depsTail.nextDep = o, wt.depsTail = o) : wt.deps = wt.depsTail = o, er(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const a = o.nextDep;
      a.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = a), o.prevDep = wt.depsTail, o.nextDep = void 0, wt.depsTail.nextDep = o, wt.depsTail = o, wt.deps === o && (wt.deps = a);
    }
    return o;
  }
  trigger(s) {
    this.version++, nn++, this.notify(s);
  }
  notify(s) {
    dl();
    try {
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      ml();
    }
  }
}
function er(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const s = e.dep.computed;
    if (s && !e.dep.subs) {
      s.flags |= 20;
      for (let a = s.deps; a; a = a.nextDep)
        er(a);
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
function Ft(e, s, o) {
  if (us && wt) {
    let a = Ga.get(e);
    a || Ga.set(e, a = /* @__PURE__ */ new Map());
    let l = a.get(o);
    l || (a.set(o, l = new vl()), l.map = a, l.key = o), l.track();
  }
}
function Ps(e, s, o, a, l, r) {
  const c = Ga.get(e);
  if (!c) {
    nn++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (dl(), s === "clear")
    c.forEach(u);
  else {
    const d = et(e), v = d && cl(o);
    if (d && o === "length") {
      const f = Number(a);
      c.forEach((p, w) => {
        (w === "length" || w === an || !ms(w) && w >= f) && u(p);
      });
    } else
      switch ((o !== void 0 || c.has(void 0)) && u(c.get(o)), v && u(c.get(an)), s) {
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
  const s = ut(e);
  return s === e ? s : (Ft(s, "iterate", an), as(e) ? s : s.map(fs));
}
function ta(e) {
  return Ft(e = ut(e), "iterate", an), e;
}
function Ws(e, s) {
  return Us(e) ? no(e) ? Io(fs(s)) : Io(s) : fs(s);
}
const Zc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ra(this, Symbol.iterator, (e) => Ws(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((s) => et(s) ? fo(s) : s)
    );
  },
  entries() {
    return Ra(this, "entries", (e) => (e[1] = Ws(this, e[1]), e));
  },
  every(e, s) {
    return Es(this, "every", e, s, void 0, arguments);
  },
  filter(e, s) {
    return Es(
      this,
      "filter",
      e,
      s,
      (o) => o.map((a) => Ws(this, a)),
      arguments
    );
  },
  find(e, s) {
    return Es(
      this,
      "find",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findIndex(e, s) {
    return Es(this, "findIndex", e, s, void 0, arguments);
  },
  findLast(e, s) {
    return Es(
      this,
      "findLast",
      e,
      s,
      (o) => Ws(this, o),
      arguments
    );
  },
  findLastIndex(e, s) {
    return Es(this, "findLastIndex", e, s, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, s) {
    return Es(this, "forEach", e, s, void 0, arguments);
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
  map(e, s) {
    return Es(this, "map", e, s, void 0, arguments);
  },
  pop() {
    return Uo(this, "pop");
  },
  push(...e) {
    return Uo(this, "push", e);
  },
  reduce(e, ...s) {
    return Fl(this, "reduce", e, s);
  },
  reduceRight(e, ...s) {
    return Fl(this, "reduceRight", e, s);
  },
  shift() {
    return Uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, s) {
    return Es(this, "some", e, s, void 0, arguments);
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
function Ra(e, s, o) {
  const a = ta(e), l = a[s]();
  return a !== e && !as(e) && (l._next = l.next, l.next = () => {
    const r = l._next();
    return r.done || (r.value = o(r.value)), r;
  }), l;
}
const eu = Array.prototype;
function Es(e, s, o, a, l, r) {
  const c = ta(e), u = c !== e && !as(e), d = c[s];
  if (d !== eu[s]) {
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
function Fl(e, s, o, a) {
  const l = ta(e);
  let r = o;
  return l !== e && (as(e) ? o.length > 3 && (r = function(c, u, d) {
    return o.call(this, c, u, d, e);
  }) : r = function(c, u, d) {
    return o.call(this, c, Ws(e, u), d, e);
  }), l[s](r, ...a);
}
function La(e, s, o) {
  const a = ut(e);
  Ft(a, "iterate", an);
  const l = a[s](...o);
  return (l === -1 || l === !1) && hl(o[0]) ? (o[0] = ut(o[0]), a[s](...o)) : l;
}
function Uo(e, s, o = []) {
  Ds(), dl();
  const a = ut(e)[s].apply(e, o);
  return ml(), Ns(), a;
}
const tu = /* @__PURE__ */ ll("__proto__,__v_isRef,__isVue"), tr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ms)
);
function su(e) {
  ms(e) || (e = String(e));
  const s = ut(this);
  return Ft(s, "has", e), s.hasOwnProperty(e);
}
class sr {
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
      return a === (l ? r ? mu : lr : r ? ar : nr).get(s) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(s) === Object.getPrototypeOf(a) ? s : void 0;
    const c = et(s);
    if (!l) {
      let d;
      if (c && (d = Zc[o]))
        return d;
      if (o === "hasOwnProperty")
        return su;
    }
    const u = Reflect.get(
      s,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Gt(s) ? s : a
    );
    if ((ms(o) ? tr.has(o) : tu(o)) || (l || Ft(s, "get", o), r))
      return u;
    if (Gt(u)) {
      const d = c && cl(o) ? u : u.value;
      return l && gt(d) ? On(d) : d;
    }
    return gt(u) ? l ? On(u) : co(u) : u;
  }
}
class or extends sr {
  constructor(s = !1) {
    super(!1, s);
  }
  set(s, o, a, l) {
    let r = s[o];
    const c = et(s) && cl(o);
    if (!this._isShallow) {
      const v = Us(r);
      if (!as(a) && !Us(a) && (r = ut(r), a = ut(a)), !c && Gt(r) && !Gt(a))
        return v || (r.value = a), !0;
    }
    const u = c ? Number(o) < s.length : ft(s, o), d = Reflect.set(
      s,
      o,
      a,
      Gt(s) ? s : l
    );
    return s === ut(l) && (u ? Hs(a, r) && Ps(s, "set", o, a) : Ps(s, "add", o, a)), d;
  }
  deleteProperty(s, o) {
    const a = ft(s, o);
    s[o];
    const l = Reflect.deleteProperty(s, o);
    return l && a && Ps(s, "delete", o, void 0), l;
  }
  has(s, o) {
    const a = Reflect.has(s, o);
    return (!ms(o) || !tr.has(o)) && Ft(s, "has", o), a;
  }
  ownKeys(s) {
    return Ft(
      s,
      "iterate",
      et(s) ? "length" : oo
    ), Reflect.ownKeys(s);
  }
}
class ou extends sr {
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
const nu = /* @__PURE__ */ new or(), au = /* @__PURE__ */ new ou(), lu = /* @__PURE__ */ new or(!0);
const Ha = (e) => e, kn = (e) => Reflect.getPrototypeOf(e);
function iu(e, s, o) {
  return function(...a) {
    const l = this.__v_raw, r = ut(l), c = _o(r), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = l[e](...a), f = o ? Ha : s ? Io : fs;
    return !s && Ft(
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
  return function(...s) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ru(e, s) {
  const o = {
    get(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      e || (Hs(l, u) && Ft(c, "get", l), Ft(c, "get", u));
      const { has: d } = kn(c), v = s ? Ha : e ? Io : fs;
      if (d.call(c, l))
        return v(r.get(l));
      if (d.call(c, u))
        return v(r.get(u));
      r !== c && r.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !e && Ft(ut(l), "iterate", oo), l.size;
    },
    has(l) {
      const r = this.__v_raw, c = ut(r), u = ut(l);
      return e || (Hs(l, u) && Ft(c, "has", l), Ft(c, "has", u)), l === u ? r.has(l) : r.has(l) || r.has(u);
    },
    forEach(l, r) {
      const c = this, u = c.__v_raw, d = ut(u), v = s ? Ha : e ? Io : fs;
      return !e && Ft(d, "iterate", oo), u.forEach((f, p) => l.call(r, v(f), v(p), c));
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
        !s && !as(l) && !Us(l) && (l = ut(l));
        const r = ut(this);
        return kn(r).has.call(r, l) || (r.add(l), Ps(r, "add", l, l)), this;
      },
      set(l, r) {
        !s && !as(r) && !Us(r) && (r = ut(r));
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
    o[l] = iu(l, e, s);
  }), o;
}
function pl(e, s) {
  const o = ru(e, s);
  return (a, l, r) => l === "__v_isReactive" ? !e : l === "__v_isReadonly" ? e : l === "__v_raw" ? a : Reflect.get(
    ft(o, l) && l in a ? o : a,
    l,
    r
  );
}
const cu = {
  get: /* @__PURE__ */ pl(!1, !1)
}, uu = {
  get: /* @__PURE__ */ pl(!1, !0)
}, du = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const nr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap();
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
  return Us(e) ? e : gl(
    e,
    !1,
    nu,
    cu,
    nr
  );
}
function pu(e) {
  return gl(
    e,
    !1,
    lu,
    uu,
    ar
  );
}
function On(e) {
  return gl(
    e,
    !0,
    au,
    du,
    lr
  );
}
function gl(e, s, o, a, l) {
  if (!gt(e) || e.__v_raw && !(s && e.__v_isReactive))
    return e;
  const r = vu(e);
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
  const s = e && e.__v_raw;
  return s ? ut(s) : e;
}
function gu(e) {
  return !ft(e, "__v_skip") && Object.isExtensible(e) && Wi(e, "__v_skip", !0), e;
}
const fs = (e) => gt(e) ? co(e) : e, Io = (e) => gt(e) ? On(e) : e;
function Gt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function k(e) {
  return hu(e, !1);
}
function hu(e, s) {
  return Gt(e) ? e : new yu(e, s);
}
class yu {
  constructor(s, o) {
    this.dep = new vl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? s : ut(s), this._value = o ? s : fs(s), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(s) {
    const o = this._rawValue, a = this.__v_isShallow || as(s) || Us(s);
    s = a ? s : ut(s), Hs(s, o) && (this._rawValue = s, this._value = a ? s : fs(s), this.dep.trigger());
  }
}
function st(e) {
  return Gt(e) ? e.value : e;
}
const wu = {
  get: (e, s, o) => s === "__v_raw" ? e : st(Reflect.get(e, s, o)),
  set: (e, s, o, a) => {
    const l = e[s];
    return Gt(l) && !Gt(o) ? (l.value = o, !0) : Reflect.set(e, s, o, a);
  }
};
function ir(e) {
  return no(e) ? e : new Proxy(e, wu);
}
class _u {
  constructor(s, o, a) {
    this.fn = s, this.setter = o, this._value = void 0, this.dep = new vl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = nn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = a;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return Ji(this, !0), !0;
  }
  get value() {
    const s = this.dep.track();
    return Xi(this), s && (s.version = this.dep.version), this._value;
  }
  set value(s) {
    this.setter && this.setter(s);
  }
}
function ku(e, s, o = !1) {
  let a, l;
  return tt(e) ? a = e : (a = e.get, l = e.set), new _u(a, l, o);
}
const $n = {}, An = /* @__PURE__ */ new WeakMap();
let to;
function bu(e, s = !1, o = to) {
  if (o) {
    let a = An.get(o);
    a || An.set(o, a = []), a.push(e);
  }
}
function $u(e, s, o = ht) {
  const { immediate: a, deep: l, once: r, scheduler: c, augmentJob: u, call: d } = o, v = (E) => l ? E : as(E) || l === !1 || l === 0 ? Rs(E, 1) : Rs(E);
  let f, p, w, g, _ = !1, C = !1;
  if (Gt(e) ? (p = () => e.value, _ = as(e)) : no(e) ? (p = () => v(e), _ = !0) : et(e) ? (C = !0, _ = e.some((E) => no(E) || as(E)), p = () => e.map((E) => {
    if (Gt(E))
      return E.value;
    if (no(E))
      return v(E);
    if (tt(E))
      return d ? d(E, 2) : E();
  })) : tt(e) ? s ? p = d ? () => d(e, 2) : e : p = () => {
    if (w) {
      Ds();
      try {
        w();
      } finally {
        Ns();
      }
    }
    const E = to;
    to = f;
    try {
      return d ? d(e, 3, [g]) : e(g);
    } finally {
      to = E;
    }
  } : p = bs, s && l) {
    const E = p, D = l === !0 ? 1 / 0 : l;
    p = () => Rs(E(), D);
  }
  const x = Qc(), S = () => {
    f.stop(), x && x.active && rl(x.effects, f);
  };
  if (r && s) {
    const E = s;
    s = (...D) => {
      E(...D), S();
    };
  }
  let T = C ? new Array(e.length).fill($n) : $n;
  const M = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (s) {
        const D = f.run();
        if (l || _ || (C ? D.some((z, j) => Hs(z, T[j])) : Hs(D, T))) {
          w && w();
          const z = to;
          to = f;
          try {
            const j = [
              D,
              // pass undefined as the old value when it's changed for the first time
              T === $n ? void 0 : C && T[0] === $n ? [] : T,
              g
            ];
            T = D, d ? d(s, 3, j) : (
              // @ts-expect-error
              s(...j)
            );
          } finally {
            to = z;
          }
        }
      } else
        f.run();
  };
  return u && u(M), f = new qi(p), f.scheduler = c ? () => c(M, !1) : M, g = (E) => bu(E, !1, f), w = f.onStop = () => {
    const E = An.get(f);
    if (E) {
      if (d)
        d(E, 4);
      else
        for (const D of E) D();
      An.delete(f);
    }
  }, s ? a ? M(!0) : T = f.run() : c ? c(M.bind(null, !0), !0) : f.run(), S.pause = f.pause.bind(f), S.resume = f.resume.bind(f), S.stop = S, S;
}
function Rs(e, s = 1 / 0, o) {
  if (s <= 0 || !gt(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Map(), (o.get(e) || 0) >= s))
    return e;
  if (o.set(e, s), s--, Gt(e))
    Rs(e.value, s, o);
  else if (et(e))
    for (let a = 0; a < e.length; a++)
      Rs(e[a], s, o);
  else if (Mo(e) || _o(e))
    e.forEach((a) => {
      Rs(a, s, o);
    });
  else if (Bi(e)) {
    for (const a in e)
      Rs(e[a], s, o);
    for (const a of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, a) && Rs(e[a], s, o);
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
    sa(l, s, o);
  }
}
function vs(e, s, o, a) {
  if (tt(e)) {
    const l = vn(e, s, o, a);
    return l && Fi(l) && l.catch((r) => {
      sa(r, s, o);
    }), l;
  }
  if (et(e)) {
    const l = [];
    for (let r = 0; r < e.length; r++)
      l.push(vs(e[r], s, o, a));
    return l;
  }
}
function sa(e, s, o, a = !0) {
  const l = s ? s.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: c } = s && s.appContext.config || ht;
  if (s) {
    let u = s.parent;
    const d = s.proxy, v = `https://vuejs.org/error-reference/#runtime-${o}`;
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
  Cu(e, o, l, a, c);
}
function Cu(e, s, o, a = !0, l = !1) {
  if (l)
    throw e;
  console.error(e);
}
const Kt = [];
let ys = -1;
const ko = [];
let Gs = null, go = 0;
const rr = /* @__PURE__ */ Promise.resolve();
let zn = null;
function Pt(e) {
  const s = zn || rr;
  return e ? s.then(this ? e.bind(this) : e) : s;
}
function xu(e) {
  let s = ys + 1, o = Kt.length;
  for (; s < o; ) {
    const a = s + o >>> 1, l = Kt[a], r = ln(l);
    r < e || r === e && l.flags & 2 ? s = a + 1 : o = a;
  }
  return s;
}
function yl(e) {
  if (!(e.flags & 1)) {
    const s = ln(e), o = Kt[Kt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && s >= ln(o) ? Kt.push(e) : Kt.splice(xu(s), 0, e), e.flags |= 1, cr();
  }
}
function cr() {
  zn || (zn = rr.then(dr));
}
function Su(e) {
  et(e) ? ko.push(...e) : Gs && e.id === -1 ? Gs.splice(go + 1, 0, e) : e.flags & 1 || (ko.push(e), e.flags |= 1), cr();
}
function Vl(e, s, o = ys + 1) {
  for (; o < Kt.length; o++) {
    const a = Kt[o];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid)
        continue;
      Kt.splice(o, 1), o--, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function ur(e) {
  if (ko.length) {
    const s = [...new Set(ko)].sort(
      (o, a) => ln(o) - ln(a)
    );
    if (ko.length = 0, Gs) {
      Gs.push(...s);
      return;
    }
    for (Gs = s, go = 0; go < Gs.length; go++) {
      const o = Gs[go];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gs = null, go = 0;
  }
}
const ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function dr(e) {
  try {
    for (ys = 0; ys < Kt.length; ys++) {
      const s = Kt[ys];
      s && !(s.flags & 8) && (s.flags & 4 && (s.flags &= -2), vn(
        s,
        s.i,
        s.i ? 15 : 14
      ), s.flags & 4 || (s.flags &= -2));
    }
  } finally {
    for (; ys < Kt.length; ys++) {
      const s = Kt[ys];
      s && (s.flags &= -2);
    }
    ys = -1, Kt.length = 0, ur(), zn = null, (Kt.length || ko.length) && dr();
  }
}
let Ot = null, mr = null;
function Fn(e) {
  const s = Ot;
  return Ot = e, mr = e && e.type.__scopeId || null, s;
}
function h(e, s = Ot, o) {
  if (!s || e._n)
    return e;
  const a = (...l) => {
    a._d && Wn(-1);
    const r = Fn(s);
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
function Tt(e, s) {
  if (Ot === null)
    return e;
  const o = ra(Ot), a = e.dirs || (e.dirs = []);
  for (let l = 0; l < s.length; l++) {
    let [r, c, u, d = ht] = s[l];
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
function Ys(e, s, o, a) {
  const l = e.dirs, r = s && s.dirs;
  for (let c = 0; c < l.length; c++) {
    const u = l[c];
    r && (u.oldValue = r[c].value);
    let d = u.dir[a];
    d && (Ds(), vs(d, o, 8, [
      e.el,
      u,
      e,
      s
    ]), Ns());
  }
}
const fr = Symbol("_vte"), vr = (e) => e.__isTeleport, Qo = (e) => e && (e.disabled || e.disabled === ""), Bl = (e) => e && (e.defer || e.defer === ""), Wl = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Gl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, qa = (e, s) => {
  const o = e && e.to;
  return $t(o) ? s ? s(o) : null : o;
}, pr = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, s, o, a, l, r, c, u, d, v) {
    const {
      mc: f,
      pc: p,
      pbc: w,
      o: { insert: g, querySelector: _, createText: C, createComment: x }
    } = v, S = Qo(s.props);
    let { shapeFlag: T, children: M, dynamicChildren: E } = s;
    if (e == null) {
      const D = s.el = C(""), z = s.anchor = C("");
      g(D, o, a), g(z, o, a);
      const j = (q, ce) => {
        T & 16 && f(
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
        const q = s.target = qa(s.props, _), ce = gr(q, s, C, g);
        q && (c !== "svg" && Wl(q) ? c = "svg" : c !== "mathml" && Gl(q) && (c = "mathml"), l && l.isCE && (l.ce._teleportTargets || (l.ce._teleportTargets = /* @__PURE__ */ new Set())).add(q), S || (j(q, ce), Tn(s, !1)));
      };
      S && (j(o, z), Tn(s, !0)), Bl(s.props) ? (s.el.__isMounted = !1, Ht(() => {
        L(), delete s.el.__isMounted;
      }, r)) : L();
    } else {
      if (Bl(s.props) && e.el.__isMounted === !1) {
        Ht(() => {
          pr.process(
            e,
            s,
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
      s.el = e.el, s.targetStart = e.targetStart;
      const D = s.anchor = e.anchor, z = s.target = e.target, j = s.targetAnchor = e.targetAnchor, L = Qo(e.props), q = L ? o : z, ce = L ? D : j;
      if (c === "svg" || Wl(z) ? c = "svg" : (c === "mathml" || Gl(z)) && (c = "mathml"), E ? (w(
        e.dynamicChildren,
        E,
        q,
        l,
        r,
        c,
        u
      ), $l(e, s, !0)) : d || p(
        e,
        s,
        q,
        ce,
        l,
        r,
        c,
        u,
        !1
      ), S)
        L ? s.props && e.props && s.props.to !== e.props.to && (s.props.to = e.props.to) : Cn(
          s,
          o,
          D,
          v,
          1
        );
      else if ((s.props && s.props.to) !== (e.props && e.props.to)) {
        const ne = s.target = qa(
          s.props,
          _
        );
        ne && Cn(
          s,
          ne,
          null,
          v,
          0
        );
      } else L && Cn(
        s,
        z,
        j,
        v,
        1
      );
      Tn(s, S);
    }
  },
  remove(e, s, o, { um: a, o: { remove: l } }, r) {
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
        a(
          C,
          s,
          o,
          g,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: Cn,
  hydrate: Iu
};
function Cn(e, s, o, { o: { insert: a }, m: l }, r = 2) {
  r === 0 && a(e.targetAnchor, s, o);
  const { el: c, anchor: u, shapeFlag: d, children: v, props: f } = e, p = r === 2;
  if (p && a(c, s, o), (!p || Qo(f)) && d & 16)
    for (let w = 0; w < v.length; w++)
      l(
        v[w],
        s,
        o,
        2
      );
  p && a(u, s, o);
}
function Iu(e, s, o, a, l, r, {
  o: { nextSibling: c, parentNode: u, querySelector: d, insert: v, createText: f }
}, p) {
  function w(C, x, S, T) {
    x.anchor = p(
      c(C),
      x,
      u(C),
      o,
      a,
      l,
      r
    ), x.targetStart = S, x.targetAnchor = T;
  }
  const g = s.target = qa(
    s.props,
    d
  ), _ = Qo(s.props);
  if (g) {
    const C = g._lpa || g.firstChild;
    if (s.shapeFlag & 16)
      if (_)
        w(
          e,
          s,
          C,
          C && c(C)
        );
      else {
        s.anchor = c(e);
        let x = C;
        for (; x; ) {
          if (x && x.nodeType === 8) {
            if (x.data === "teleport start anchor")
              s.targetStart = x;
            else if (x.data === "teleport anchor") {
              s.targetAnchor = x, g._lpa = s.targetAnchor && c(s.targetAnchor);
              break;
            }
          }
          x = c(x);
        }
        s.targetAnchor || gr(g, s, f, v), p(
          C && c(C),
          s,
          g,
          o,
          a,
          l,
          r
        );
      }
    Tn(s, _);
  } else _ && s.shapeFlag & 16 && w(e, s, e, c(e));
  return s.anchor && c(s.anchor);
}
const Lt = pr;
function Tn(e, s) {
  const o = e.ctx;
  if (o && o.ut) {
    let a, l;
    for (s ? (a = e.el, l = e.anchor) : (a = e.targetStart, l = e.targetAnchor); a && a !== l; )
      a.nodeType === 1 && a.setAttribute("data-v-owner", o.uid), a = a.nextSibling;
    o.ut();
  }
}
function gr(e, s, o, a) {
  const l = s.targetStart = o(""), r = s.targetAnchor = o("");
  return l[fr] = r, e && (a(l, e), a(r, e)), r;
}
const Ms = Symbol("_leaveCb"), xn = Symbol("_enterCb");
function hr() {
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
const os = [Function, Array], yr = {
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
}, wr = (e) => {
  const s = e.subTree;
  return s.component ? wr(s.component) : s;
}, Eu = {
  name: "BaseTransition",
  props: yr,
  setup(e, { slots: s }) {
    const o = xl(), a = hr();
    return () => {
      const l = s.default && wl(s.default(), !0);
      if (!l || !l.length)
        return;
      const r = _r(l), c = ut(e), { mode: u } = c;
      if (a.isLeaving)
        return Da(r);
      const d = jl(r);
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
      d.type !== Bt && io(d, v);
      let f = o.subTree && jl(o.subTree);
      if (f && f.type !== Bt && !so(f, d) && wr(o).type !== Bt) {
        let p = rn(
          f,
          c,
          a,
          o
        );
        if (io(f, p), u === "out-in" && d.type !== Bt)
          return a.isLeaving = !0, p.afterLeave = () => {
            a.isLeaving = !1, o.job.flags & 8 || o.update(), delete p.afterLeave, f = void 0;
          }, Da(r);
        u === "in-out" && d.type !== Bt ? p.delayLeave = (w, g, _) => {
          const C = kr(
            a,
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
function _r(e) {
  let s = e[0];
  if (e.length > 1) {
    for (const o of e)
      if (o.type !== Bt) {
        s = o;
        break;
      }
  }
  return s;
}
const Tu = Eu;
function kr(e, s) {
  const { leavingVNodes: o } = e;
  let a = o.get(s.type);
  return a || (a = /* @__PURE__ */ Object.create(null), o.set(s.type, a)), a;
}
function rn(e, s, o, a, l) {
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
    onBeforeAppear: x,
    onAppear: S,
    onAfterAppear: T,
    onAppearCancelled: M
  } = s, E = String(e.key), D = kr(o, e), z = (q, ce) => {
    q && vs(
      q,
      a,
      9,
      ce
    );
  }, j = (q, ce) => {
    const ne = ce[1];
    z(q, ce), et(q) ? q.every((Y) => Y.length <= 1) && ne() : q.length <= 1 && ne();
  }, L = {
    mode: c,
    persisted: u,
    beforeEnter(q) {
      let ce = d;
      if (!o.isMounted)
        if (r)
          ce = x || d;
        else
          return;
      q[Ms] && q[Ms](
        !0
        /* cancelled */
      );
      const ne = D[E];
      ne && so(e, ne) && ne.el[Ms] && ne.el[Ms](), z(ce, [q]);
    },
    enter(q) {
      let ce = v, ne = f, Y = p;
      if (!o.isMounted)
        if (r)
          ce = S || v, ne = T || f, Y = M || p;
        else
          return;
      let we = !1;
      const Z = q[xn] = (W) => {
        we || (we = !0, W ? z(Y, [q]) : z(ne, [q]), L.delayedLeave && L.delayedLeave(), q[xn] = void 0);
      };
      ce ? j(ce, [q, Z]) : Z();
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
      const we = q[Ms] = (Z) => {
        Y || (Y = !0, ce(), Z ? z(C, [q]) : z(_, [q]), q[Ms] = void 0, D[ne] === e && delete D[ne]);
      };
      D[ne] = e, g ? j(g, [q, we]) : we();
    },
    clone(q) {
      const ce = rn(
        q,
        s,
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
function jl(e) {
  if (!oa(e))
    return vr(e.type) && e.children ? _r(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: s, children: o } = e;
  if (o) {
    if (s & 16)
      return o[0];
    if (s & 32 && tt(o.default))
      return o.default();
  }
}
function io(e, s) {
  e.shapeFlag & 6 && e.component ? (e.transition = s, io(e.component.subTree, s)) : e.shapeFlag & 128 ? (e.ssContent.transition = s.clone(e.ssContent), e.ssFallback.transition = s.clone(e.ssFallback)) : e.transition = s;
}
function wl(e, s = !1, o) {
  let a = [], l = 0;
  for (let r = 0; r < e.length; r++) {
    let c = e[r];
    const u = o == null ? c.key : String(o) + String(c.key != null ? c.key : r);
    c.type === B ? (c.patchFlag & 128 && l++, a = a.concat(
      wl(c.children, s, u)
    )) : (s || c.type !== Bt) && a.push(u != null ? qs(c, { key: u }) : c);
  }
  if (l > 1)
    for (let r = 0; r < a.length; r++)
      a[r].patchFlag = -2;
  return a;
}
// @__NO_SIDE_EFFECTS__
function be(e, s) {
  return tt(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Mt({ name: e.name }, s, { setup: e })
  ) : e;
}
function br(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Vn = /* @__PURE__ */ new WeakMap();
function Yo(e, s, o, a, l = !1) {
  if (et(e)) {
    e.forEach(
      (_, C) => Yo(
        _,
        s && (et(s) ? s[C] : s),
        o,
        a,
        l
      )
    );
    return;
  }
  if (bo(a) && !l) {
    a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Yo(e, s, o, a.component.subTree);
    return;
  }
  const r = a.shapeFlag & 4 ? ra(a.component) : a.el, c = l ? null : r, { i: u, r: d } = e, v = s && s.r, f = u.refs === ht ? u.refs = {} : u.refs, p = u.setupState, w = ut(p), g = p === ht ? zi : (_) => ft(w, _);
  if (v != null && v !== d) {
    if (Hl(s), $t(v))
      f[v] = null, g(v) && (p[v] = null);
    else if (Gt(v)) {
      v.value = null;
      const _ = s;
      _.k && (f[_.k] = null);
    }
  }
  if (tt(d))
    vn(d, u, 12, [c, f]);
  else {
    const _ = $t(d), C = Gt(d);
    if (_ || C) {
      const x = () => {
        if (e.f) {
          const S = _ ? g(d) ? p[d] : f[d] : d.value;
          if (l)
            et(S) && rl(S, r);
          else if (et(S))
            S.includes(r) || S.push(r);
          else if (_)
            f[d] = [r], g(d) && (p[d] = f[d]);
          else {
            const T = [r];
            d.value = T, e.k && (f[e.k] = T);
          }
        } else _ ? (f[d] = c, g(d) && (p[d] = c)) : C && (d.value = c, e.k && (f[e.k] = c));
      };
      if (c) {
        const S = () => {
          x(), Vn.delete(e);
        };
        S.id = -1, Vn.set(e, S), Ht(S, o);
      } else
        Hl(e), x();
    }
  }
}
function Hl(e) {
  const s = Vn.get(e);
  s && (s.flags |= 8, Vn.delete(e));
}
ea().requestIdleCallback;
ea().cancelIdleCallback;
const bo = (e) => !!e.type.__asyncLoader, oa = (e) => e.type.__isKeepAlive;
function Mu(e, s) {
  $r(e, "a", s);
}
function Pu(e, s) {
  $r(e, "da", s);
}
function $r(e, s, o = Wt) {
  const a = e.__wdc || (e.__wdc = () => {
    let l = o;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return e();
  });
  if (na(s, a, o), o) {
    let l = o.parent;
    for (; l && l.parent; )
      oa(l.parent.vnode) && Ru(a, s, o, l), l = l.parent;
  }
}
function Ru(e, s, o, a) {
  const l = na(
    s,
    e,
    a,
    !0
    /* prepend */
  );
  Po(() => {
    rl(a[s], l);
  }, o);
}
function na(e, s, o = Wt, a = !1) {
  if (o) {
    const l = o[e] || (o[e] = []), r = s.__weh || (s.__weh = (...c) => {
      Ds();
      const u = pn(o), d = vs(s, o, e, c);
      return u(), Ns(), d;
    });
    return a ? l.unshift(r) : l.push(r), r;
  }
}
const Os = (e) => (s, o = Wt) => {
  (!dn || e === "sp") && na(e, (...a) => s(...a), o);
}, Lu = Os("bm"), at = Os("m"), Du = Os(
  "bu"
), Cr = Os("u"), aa = Os(
  "bum"
), Po = Os("um"), Nu = Os(
  "sp"
), Uu = Os("rtg"), Ou = Os("rtc");
function Au(e, s = Wt) {
  na("ec", e, s);
}
const zu = "components", xr = Symbol.for("v-ndc");
function _l(e) {
  return $t(e) ? Fu(zu, e, !1) || e : e || xr;
}
function Fu(e, s, o = !0, a = !1) {
  const l = Ot || Wt;
  if (l) {
    const r = l.type;
    {
      const u = Ed(
        r,
        !1
      );
      if (u && (u === s || u === is(s) || u === Xn(is(s))))
        return r;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      ql(l[e] || r[e], s) || // global registration
      ql(l.appContext[e], s)
    );
    return !c && a ? r : c;
  }
}
function ql(e, s) {
  return e && (e[s] || e[is(s)] || e[Xn(is(s))]);
}
function ge(e, s, o, a) {
  let l;
  const r = o, c = et(e);
  if (c || $t(e)) {
    const u = c && no(e);
    let d = !1, v = !1;
    u && (d = !as(e), v = Us(e), e = ta(e)), l = new Array(e.length);
    for (let f = 0, p = e.length; f < p; f++)
      l[f] = s(
        d ? v ? Io(fs(e[f])) : fs(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    l = new Array(e);
    for (let u = 0; u < e; u++)
      l[u] = s(u + 1, u, void 0, r);
  } else if (gt(e))
    if (e[Symbol.iterator])
      l = Array.from(
        e,
        (u, d) => s(u, d, void 0, r)
      );
    else {
      const u = Object.keys(e);
      l = new Array(u.length);
      for (let d = 0, v = u.length; d < v; d++) {
        const f = u[d];
        l[d] = s(e[f], f, d, r);
      }
    }
  else
    l = [];
  return l;
}
function Qt(e, s) {
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
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
function ot(e, s, o = {}, a, l) {
  if (Ot.ce || Ot.parent && bo(Ot.parent) && Ot.parent.ce) {
    const v = Object.keys(o).length > 0;
    return s !== "default" && (o.name = s), n(), R(
      B,
      null,
      [b("slot", o, a && a())],
      v ? -2 : 64
    );
  }
  let r = e[s];
  r && r._c && (r._d = !1), n();
  const c = r && Sr(r(o)), u = o.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, d = R(
    B,
    {
      key: (u && !ms(u) ? u : `_${s}`) + // #7256 force differentiate fallback content from actual content
      (!c && a ? "_fb" : "")
    },
    c || (a ? a() : []),
    c && e._ === 1 ? 64 : -2
  );
  return r && r._c && (r._d = !0), d;
}
function Sr(e) {
  return e.some((s) => un(s) ? !(s.type === Bt || s.type === B && !Sr(s.children)) : !0) ? e : null;
}
const Ka = (e) => e ? jr(e) ? ra(e) : Ka(e.parent) : null, Xo = (
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
    $options: (e) => Er(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yl(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pt.bind(e.proxy)),
    $watch: (e) => Xu.bind(e)
  })
), Na = (e, s) => e !== ht && !e.__isScriptSetup && ft(e, s), Vu = {
  get({ _: e }, s) {
    if (s === "__v_skip")
      return !0;
    const { ctx: o, setupState: a, data: l, props: r, accessCache: c, type: u, appContext: d } = e;
    if (s[0] !== "$") {
      const w = c[s];
      if (w !== void 0)
        switch (w) {
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
        if (Na(a, s))
          return c[s] = 1, a[s];
        if (l !== ht && ft(l, s))
          return c[s] = 2, l[s];
        if (ft(r, s))
          return c[s] = 3, r[s];
        if (o !== ht && ft(o, s))
          return c[s] = 4, o[s];
        Ja && (c[s] = 0);
      }
    }
    const v = Xo[s];
    let f, p;
    if (v)
      return s === "$attrs" && Ft(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = u.__cssModules) && (f = f[s])
    )
      return f;
    if (o !== ht && ft(o, s))
      return c[s] = 4, o[s];
    if (
      // global properties
      p = d.config.globalProperties, ft(p, s)
    )
      return p[s];
  },
  set({ _: e }, s, o) {
    const { data: a, setupState: l, ctx: r } = e;
    return Na(l, s) ? (l[s] = o, !0) : a !== ht && ft(a, s) ? (a[s] = o, !0) : ft(e.props, s) || s[0] === "$" && s.slice(1) in e ? !1 : (r[s] = o, !0);
  },
  has({
    _: { data: e, setupState: s, accessCache: o, ctx: a, appContext: l, props: r, type: c }
  }, u) {
    let d;
    return !!(o[u] || e !== ht && u[0] !== "$" && ft(e, u) || Na(s, u) || ft(r, u) || ft(a, u) || ft(Xo, u) || ft(l.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, s, o) {
    return o.get != null ? e._.accessCache[s] = 0 : ft(o, "value") && this.set(e, s, o.value, null), Reflect.defineProperty(e, s, o);
  }
};
function Kl(e) {
  return et(e) ? e.reduce(
    (s, o) => (s[o] = null, s),
    {}
  ) : e;
}
let Ja = !0;
function Bu(e) {
  const s = Er(e), o = e.proxy, a = e.ctx;
  Ja = !1, s.beforeCreate && Jl(s.beforeCreate, e, "bc");
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
    deactivated: x,
    beforeDestroy: S,
    beforeUnmount: T,
    destroyed: M,
    unmounted: E,
    render: D,
    renderTracked: z,
    renderTriggered: j,
    errorCaptured: L,
    serverPrefetch: q,
    // public API
    expose: ce,
    inheritAttrs: ne,
    // assets
    components: Y,
    directives: we,
    filters: Z
  } = s;
  if (v && Wu(v, a, null), c)
    for (const ke in c) {
      const se = c[ke];
      tt(se) && (a[ke] = se.bind(o));
    }
  if (l) {
    const ke = l.call(o, o);
    gt(ke) && (e.data = co(ke));
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
      Ir(u[ke], a, o, ke);
  if (d) {
    const ke = tt(d) ? d.call(o) : d;
    Reflect.ownKeys(ke).forEach((se) => {
      Ju(se, ke[se]);
    });
  }
  f && Jl(f, e, "c");
  function K(ke, se) {
    et(se) ? se.forEach((fe) => ke(fe.bind(o))) : se && ke(se.bind(o));
  }
  if (K(Lu, p), K(at, w), K(Du, g), K(Cr, _), K(Mu, C), K(Pu, x), K(Au, L), K(Ou, z), K(Uu, j), K(aa, T), K(Po, E), K(Nu, q), et(ce))
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
  D && e.render === bs && (e.render = D), ne != null && (e.inheritAttrs = ne), Y && (e.components = Y), we && (e.directives = we), q && br(e);
}
function Wu(e, s, o = bs) {
  et(e) && (e = Qa(e));
  for (const a in e) {
    const l = e[a];
    let r;
    gt(l) ? "default" in l ? r = Mn(
      l.from || a,
      l.default,
      !0
    ) : r = Mn(l.from || a) : r = Mn(l), Gt(r) ? Object.defineProperty(s, a, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : s[a] = r;
  }
}
function Jl(e, s, o) {
  vs(
    et(e) ? e.map((a) => a.bind(s.proxy)) : e.bind(s.proxy),
    s,
    o
  );
}
function Ir(e, s, o, a) {
  let l = a.includes(".") ? Pr(o, a) : () => o[a];
  if ($t(e)) {
    const r = s[e];
    tt(r) && yt(l, r);
  } else if (tt(e))
    yt(l, e.bind(o));
  else if (gt(e))
    if (et(e))
      e.forEach((r) => Ir(r, s, o, a));
    else {
      const r = tt(e.handler) ? e.handler.bind(o) : s[e.handler];
      tt(r) && yt(l, r, e);
    }
}
function Er(e) {
  const s = e.type, { mixins: o, extends: a } = s, {
    mixins: l,
    optionsCache: r,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = r.get(s);
  let d;
  return u ? d = u : !l.length && !o && !a ? d = s : (d = {}, l.length && l.forEach(
    (v) => Bn(d, v, c, !0)
  ), Bn(d, s, c)), gt(s) && r.set(s, d), d;
}
function Bn(e, s, o, a = !1) {
  const { mixins: l, extends: r } = s;
  r && Bn(e, r, o, !0), l && l.forEach(
    (c) => Bn(e, c, o, !0)
  );
  for (const c in s)
    if (!(a && c === "expose")) {
      const u = Gu[c] || o && o[c];
      e[c] = u ? u(e[c], s[c]) : s[c];
    }
  return e;
}
const Gu = {
  data: Ql,
  props: Yl,
  emits: Yl,
  // objects
  methods: jo,
  computed: jo,
  // lifecycle
  beforeCreate: jt,
  created: jt,
  beforeMount: jt,
  mounted: jt,
  beforeUpdate: jt,
  updated: jt,
  beforeDestroy: jt,
  beforeUnmount: jt,
  destroyed: jt,
  unmounted: jt,
  activated: jt,
  deactivated: jt,
  errorCaptured: jt,
  serverPrefetch: jt,
  // assets
  components: jo,
  directives: jo,
  // watch
  watch: Hu,
  // provide / inject
  provide: Ql,
  inject: ju
};
function Ql(e, s) {
  return s ? e ? function() {
    return Mt(
      tt(e) ? e.call(this, this) : e,
      tt(s) ? s.call(this, this) : s
    );
  } : s : e;
}
function ju(e, s) {
  return jo(Qa(e), Qa(s));
}
function Qa(e) {
  if (et(e)) {
    const s = {};
    for (let o = 0; o < e.length; o++)
      s[e[o]] = e[o];
    return s;
  }
  return e;
}
function jt(e, s) {
  return e ? [...new Set([].concat(e, s))] : s;
}
function jo(e, s) {
  return e ? Mt(/* @__PURE__ */ Object.create(null), e, s) : s;
}
function Yl(e, s) {
  return e ? et(e) && et(s) ? [.../* @__PURE__ */ new Set([...e, ...s])] : Mt(
    /* @__PURE__ */ Object.create(null),
    Kl(e),
    Kl(s ?? {})
  ) : s;
}
function Hu(e, s) {
  if (!e) return s;
  if (!s) return e;
  const o = Mt(/* @__PURE__ */ Object.create(null), e);
  for (const a in s)
    o[a] = jt(e[a], s[a]);
  return o;
}
function Tr() {
  return {
    app: null,
    config: {
      isNativeTag: zi,
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
function Ku(e, s) {
  return function(a, l = null) {
    tt(a) || (a = Mt({}, a)), l != null && !gt(l) && (l = null);
    const r = Tr(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const v = r.app = {
      _uid: qu++,
      _component: a,
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
function Ju(e, s) {
  if (Wt) {
    let o = Wt.provides;
    const a = Wt.parent && Wt.parent.provides;
    a === o && (o = Wt.provides = Object.create(a)), o[e] = s;
  }
}
function Mn(e, s, o = !1) {
  const a = xl();
  if (a || $o) {
    let l = $o ? $o._context.provides : a ? a.parent == null || a.ce ? a.vnode.appContext && a.vnode.appContext.provides : a.parent.provides : void 0;
    if (l && e in l)
      return l[e];
    if (arguments.length > 1)
      return o && tt(s) ? s.call(a && a.proxy) : s;
  }
}
const Qu = Symbol.for("v-scx"), Yu = () => Mn(Qu);
function yt(e, s, o) {
  return Mr(e, s, o);
}
function Mr(e, s, o = ht) {
  const { immediate: a, deep: l, flush: r, once: c } = o, u = Mt({}, o), d = s && a || !s && r !== "post";
  let v;
  if (dn) {
    if (r === "sync") {
      const g = Yu();
      v = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!d) {
      const g = () => {
      };
      return g.stop = bs, g.resume = bs, g.pause = bs, g;
    }
  }
  const f = Wt;
  u.call = (g, _, C) => vs(g, f, _, C);
  let p = !1;
  r === "post" ? u.scheduler = (g) => {
    Ht(g, f && f.suspense);
  } : r !== "sync" && (p = !0, u.scheduler = (g, _) => {
    _ ? g() : yl(g);
  }), u.augmentJob = (g) => {
    s && (g.flags |= 4), p && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const w = $u(e, s, u);
  return dn && (v ? v.push(w) : d && w()), w;
}
function Xu(e, s, o) {
  const a = this.proxy, l = $t(e) ? e.includes(".") ? Pr(a, e) : () => a[e] : e.bind(a, a);
  let r;
  tt(s) ? r = s : (r = s.handler, o = s);
  const c = pn(this), u = Mr(l, r.bind(a), o);
  return c(), u;
}
function Pr(e, s) {
  const o = s.split(".");
  return () => {
    let a = e;
    for (let l = 0; l < o.length && a; l++)
      a = a[o[l]];
    return a;
  };
}
const Zu = (e, s) => s === "modelValue" || s === "model-value" ? e.modelModifiers : e[`${s}Modifiers`] || e[`${is(s)}Modifiers`] || e[`${Js(s)}Modifiers`];
function ed(e, s, ...o) {
  if (e.isUnmounted) return;
  const a = e.vnode.props || ht;
  let l = o;
  const r = s.startsWith("update:"), c = r && Zu(a, s.slice(7));
  c && (c.trim && (l = o.map((f) => $t(f) ? f.trim() : f)), c.number && (l = o.map(Zn)));
  let u, d = a[u = Ta(s)] || // also try camelCase event handler (#2249)
  a[u = Ta(is(s))];
  !d && r && (d = a[u = Ta(Js(s))]), d && vs(
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
const td = /* @__PURE__ */ new WeakMap();
function Rr(e, s, o = !1) {
  const a = o ? td : s.emitsCache, l = a.get(e);
  if (l !== void 0)
    return l;
  const r = e.emits;
  let c = {}, u = !1;
  if (!tt(e)) {
    const d = (v) => {
      const f = Rr(v, s, !0);
      f && (u = !0, Mt(c, f));
    };
    !o && s.mixins.length && s.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !u ? (gt(e) && a.set(e, null), null) : (et(r) ? r.forEach((d) => c[d] = null) : Mt(c, r), gt(e) && a.set(e, c), c);
}
function la(e, s) {
  return !e || !Qn(s) ? !1 : (s = s.slice(2).replace(/Once$/, ""), ft(e, s[0].toLowerCase() + s.slice(1)) || ft(e, Js(s)) || ft(e, s));
}
function Xl(e) {
  const {
    type: s,
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
    inheritAttrs: C
  } = e, x = Fn(e);
  let S, T;
  try {
    if (o.shapeFlag & 4) {
      const E = l || a, D = E;
      S = _s(
        v.call(
          D,
          E,
          f,
          p,
          g,
          w,
          _
        )
      ), T = u;
    } else {
      const E = s;
      S = _s(
        E.length > 1 ? E(
          p,
          { attrs: u, slots: c, emit: d }
        ) : E(
          p,
          null
        )
      ), T = s.props ? u : sd(u);
    }
  } catch (E) {
    Zo.length = 0, sa(E, e, 1), S = b(Bt);
  }
  let M = S;
  if (T && C !== !1) {
    const E = Object.keys(T), { shapeFlag: D } = M;
    E.length && D & 7 && (r && E.some(il) && (T = od(
      T,
      r
    )), M = qs(M, T, !1, !0));
  }
  return o.dirs && (M = qs(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(o.dirs) : o.dirs), o.transition && io(M, o.transition), S = M, Fn(x), S;
}
const sd = (e) => {
  let s;
  for (const o in e)
    (o === "class" || o === "style" || Qn(o)) && ((s || (s = {}))[o] = e[o]);
  return s;
}, od = (e, s) => {
  const o = {};
  for (const a in e)
    (!il(a) || !(a.slice(9) in s)) && (o[a] = e[a]);
  return o;
};
function nd(e, s, o) {
  const { props: a, children: l, component: r } = e, { props: c, children: u, patchFlag: d } = s, v = r.emitsOptions;
  if (s.dirs || s.transition)
    return !0;
  if (o && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return a ? Zl(a, c, v) : !!c;
    if (d & 8) {
      const f = s.dynamicProps;
      for (let p = 0; p < f.length; p++) {
        const w = f[p];
        if (c[w] !== a[w] && !la(v, w))
          return !0;
      }
    }
  } else
    return (l || u) && (!u || !u.$stable) ? !0 : a === c ? !1 : a ? c ? Zl(a, c, v) : !0 : !!c;
  return !1;
}
function Zl(e, s, o) {
  const a = Object.keys(s);
  if (a.length !== Object.keys(e).length)
    return !0;
  for (let l = 0; l < a.length; l++) {
    const r = a[l];
    if (s[r] !== e[r] && !la(o, r))
      return !0;
  }
  return !1;
}
function ad({ vnode: e, parent: s }, o) {
  for (; s; ) {
    const a = s.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.el = e.el), a === e)
      (e = s.vnode).el = o, s = s.parent;
    else
      break;
  }
}
const Lr = {}, Dr = () => Object.create(Lr), Nr = (e) => Object.getPrototypeOf(e) === Lr;
function ld(e, s, o, a = !1) {
  const l = {}, r = Dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ur(e, s, l, r);
  for (const c in e.propsOptions[0])
    c in l || (l[c] = void 0);
  o ? e.props = a ? l : pu(l) : e.type.props ? e.props = l : e.props = r, e.attrs = r;
}
function id(e, s, o, a) {
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
        const g = s[w];
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
    Ur(e, s, l, r) && (v = !0);
    let f;
    for (const p in u)
      (!s || // for camelCase
      !ft(s, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Js(p)) === p || !ft(s, f))) && (d ? o && // for camelCase
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
        (!s || !ft(s, p)) && (delete r[p], v = !0);
  }
  v && Ps(e.attrs, "set", "");
}
function Ur(e, s, o, a) {
  const [l, r] = e.propsOptions;
  let c = !1, u;
  if (s)
    for (let d in s) {
      if (qo(d))
        continue;
      const v = s[d];
      let f;
      l && ft(l, f = is(d)) ? !r || !r.includes(f) ? o[f] = v : (u || (u = {}))[f] = v : la(e.emitsOptions, d) || (!(d in a) || v !== a[d]) && (a[d] = v, c = !0);
    }
  if (r) {
    const d = ut(o), v = u || ht;
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
function Ya(e, s, o, a, l, r) {
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
            s
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
const rd = /* @__PURE__ */ new WeakMap();
function Or(e, s, o = !1) {
  const a = o ? rd : s.propsCache, l = a.get(e);
  if (l)
    return l;
  const r = e.props, c = {}, u = [];
  let d = !1;
  if (!tt(e)) {
    const f = (p) => {
      d = !0;
      const [w, g] = Or(p, s, !0);
      Mt(c, w), g && u.push(...g);
    };
    !o && s.mixins.length && s.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return gt(e) && a.set(e, wo), wo;
  if (et(r))
    for (let f = 0; f < r.length; f++) {
      const p = is(r[f]);
      ei(p) && (c[p] = ht);
    }
  else if (r)
    for (const f in r) {
      const p = is(f);
      if (ei(p)) {
        const w = r[f], g = c[p] = et(w) || tt(w) ? { type: w } : Mt({}, w), _ = g.type;
        let C = !1, x = !0;
        if (et(_))
          for (let S = 0; S < _.length; ++S) {
            const T = _[S], M = tt(T) && T.name;
            if (M === "Boolean") {
              C = !0;
              break;
            } else M === "String" && (x = !1);
          }
        else
          C = tt(_) && _.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = C, g[
          1
          /* shouldCastTrue */
        ] = x, (C || ft(g, "default")) && u.push(p);
      }
    }
  const v = [c, u];
  return gt(e) && a.set(e, v), v;
}
function ei(e) {
  return e[0] !== "$" && !qo(e);
}
const kl = (e) => e === "_" || e === "_ctx" || e === "$stable", bl = (e) => et(e) ? e.map(_s) : [_s(e)], cd = (e, s, o) => {
  if (s._n)
    return s;
  const a = h((...l) => bl(s(...l)), o);
  return a._c = !1, a;
}, Ar = (e, s, o) => {
  const a = e._ctx;
  for (const l in e) {
    if (kl(l)) continue;
    const r = e[l];
    if (tt(r))
      s[l] = cd(l, r, a);
    else if (r != null) {
      const c = bl(r);
      s[l] = () => c;
    }
  }
}, zr = (e, s) => {
  const o = bl(s);
  e.slots.default = () => o;
}, Fr = (e, s, o) => {
  for (const a in s)
    (o || !kl(a)) && (e[a] = s[a]);
}, ud = (e, s, o) => {
  const a = e.slots = Dr();
  if (e.vnode.shapeFlag & 32) {
    const l = s._;
    l ? (Fr(a, s, o), o && Wi(a, "_", l, !0)) : Ar(s, a);
  } else s && zr(e, s);
}, dd = (e, s, o) => {
  const { vnode: a, slots: l } = e;
  let r = !0, c = ht;
  if (a.shapeFlag & 32) {
    const u = s._;
    u ? o && u === 1 ? r = !1 : Fr(l, s, o) : (r = !s.$stable, Ar(s, l)), c = s;
  } else s && (zr(e, s), c = { default: 1 });
  if (r)
    for (const u in l)
      !kl(u) && c[u] == null && delete l[u];
}, Ht = gd;
function md(e) {
  return fd(e);
}
function fd(e, s) {
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
  } = e, C = (I, A, re, Ee = null, Ce = null, Se = null, ze = void 0, Fe = null, Ne = !!A.dynamicChildren) => {
    if (I === A)
      return;
    I && !so(I, A) && (Ee = te(I), Pe(I, Ce, Se, !0), I = null), A.patchFlag === -2 && (Ne = !1, A.dynamicChildren = null);
    const { type: Te, ref: Je, shapeFlag: We } = A;
    switch (Te) {
      case ia:
        x(I, A, re, Ee);
        break;
      case Bt:
        S(I, A, re, Ee);
        break;
      case Oa:
        I == null && T(A, re, Ee, ze);
        break;
      case B:
        Y(
          I,
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
          I,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : We & 6 ? we(
          I,
          A,
          re,
          Ee,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : (We & 64 || We & 128) && Te.process(
          I,
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
    Je != null && Ce ? Yo(Je, I && I.ref, Se, A || I, !A) : Je == null && I && I.ref != null && Yo(I.ref, null, Se, I, !0);
  }, x = (I, A, re, Ee) => {
    if (I == null)
      a(
        A.el = u(A.children),
        re,
        Ee
      );
    else {
      const Ce = A.el = I.el;
      A.children !== I.children && v(Ce, A.children);
    }
  }, S = (I, A, re, Ee) => {
    I == null ? a(
      A.el = d(A.children || ""),
      re,
      Ee
    ) : A.el = I.el;
  }, T = (I, A, re, Ee) => {
    [I.el, I.anchor] = _(
      I.children,
      A,
      re,
      Ee,
      I.el,
      I.anchor
    );
  }, M = ({ el: I, anchor: A }, re, Ee) => {
    let Ce;
    for (; I && I !== A; )
      Ce = w(I), a(I, re, Ee), I = Ce;
    a(A, re, Ee);
  }, E = ({ el: I, anchor: A }) => {
    let re;
    for (; I && I !== A; )
      re = w(I), l(I), I = re;
    l(A);
  }, D = (I, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    if (A.type === "svg" ? ze = "svg" : A.type === "math" && (ze = "mathml"), I == null)
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
      const Te = I.el && I.el._isVueCE ? I.el : null;
      try {
        Te && Te._beginPatch(), q(
          I,
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
  }, z = (I, A, re, Ee, Ce, Se, ze, Fe) => {
    let Ne, Te;
    const { props: Je, shapeFlag: We, transition: pe, dirs: J } = I;
    if (Ne = I.el = c(
      I.type,
      Se,
      Je && Je.is,
      Je
    ), We & 8 ? f(Ne, I.children) : We & 16 && L(
      I.children,
      Ne,
      null,
      Ee,
      Ce,
      Ua(I, Se),
      ze,
      Fe
    ), J && Ys(I, null, Ee, "created"), j(Ne, I, I.scopeId, ze, Ee), Je) {
      for (const Ie in Je)
        Ie !== "value" && !qo(Ie) && r(Ne, Ie, null, Je[Ie], Se, Ee);
      "value" in Je && r(Ne, "value", null, Je.value, Se), (Te = Je.onVnodeBeforeMount) && ps(Te, Ee, I);
    }
    J && Ys(I, null, Ee, "beforeMount");
    const qe = vd(Ce, pe);
    qe && pe.beforeEnter(Ne), a(Ne, A, re), ((Te = Je && Je.onVnodeMounted) || qe || J) && Ht(() => {
      Te && ps(Te, Ee, I), qe && pe.enter(Ne), J && Ys(I, null, Ee, "mounted");
    }, Ce);
  }, j = (I, A, re, Ee, Ce) => {
    if (re && g(I, re), Ee)
      for (let Se = 0; Se < Ee.length; Se++)
        g(I, Ee[Se]);
    if (Ce) {
      let Se = Ce.subTree;
      if (A === Se || Br(Se.type) && (Se.ssContent === A || Se.ssFallback === A)) {
        const ze = Ce.vnode;
        j(
          I,
          ze,
          ze.scopeId,
          ze.slotScopeIds,
          Ce.parent
        );
      }
    }
  }, L = (I, A, re, Ee, Ce, Se, ze, Fe, Ne = 0) => {
    for (let Te = Ne; Te < I.length; Te++) {
      const Je = I[Te] = Fe ? js(I[Te]) : _s(I[Te]);
      C(
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
  }, q = (I, A, re, Ee, Ce, Se, ze) => {
    const Fe = A.el = I.el;
    let { patchFlag: Ne, dynamicChildren: Te, dirs: Je } = A;
    Ne |= I.patchFlag & 16;
    const We = I.props || ht, pe = A.props || ht;
    let J;
    if (re && Xs(re, !1), (J = pe.onVnodeBeforeUpdate) && ps(J, re, A, I), Je && Ys(A, I, re, "beforeUpdate"), re && Xs(re, !0), (We.innerHTML && pe.innerHTML == null || We.textContent && pe.textContent == null) && f(Fe, ""), Te ? ce(
      I.dynamicChildren,
      Te,
      Fe,
      re,
      Ee,
      Ua(A, Ce),
      Se
    ) : ze || se(
      I,
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
      Ne & 1 && I.children !== A.children && f(Fe, A.children);
    } else !ze && Te == null && ne(Fe, We, pe, re, Ce);
    ((J = pe.onVnodeUpdated) || Je) && Ht(() => {
      J && ps(J, re, A, I), Je && Ys(A, I, re, "updated");
    }, Ee);
  }, ce = (I, A, re, Ee, Ce, Se, ze) => {
    for (let Fe = 0; Fe < A.length; Fe++) {
      const Ne = I[Fe], Te = A[Fe], Je = (
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
      C(
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
  }, ne = (I, A, re, Ee, Ce) => {
    if (A !== re) {
      if (A !== ht)
        for (const Se in A)
          !qo(Se) && !(Se in re) && r(
            I,
            Se,
            A[Se],
            null,
            Ce,
            Ee
          );
      for (const Se in re) {
        if (qo(Se)) continue;
        const ze = re[Se], Fe = A[Se];
        ze !== Fe && Se !== "value" && r(I, Se, Fe, ze, Ce, Ee);
      }
      "value" in re && r(I, "value", A.value, re.value, Ce);
    }
  }, Y = (I, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    const Te = A.el = I ? I.el : u(""), Je = A.anchor = I ? I.anchor : u("");
    let { patchFlag: We, dynamicChildren: pe, slotScopeIds: J } = A;
    J && (Fe = Fe ? Fe.concat(J) : J), I == null ? (a(Te, re, Ee), a(Je, re, Ee), L(
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
    I.dynamicChildren ? (ce(
      I.dynamicChildren,
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
      I,
      A,
      !0
      /* shallow */
    )) : se(
      I,
      A,
      re,
      Je,
      Ce,
      Se,
      ze,
      Fe,
      Ne
    );
  }, we = (I, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    A.slotScopeIds = Fe, I == null ? A.shapeFlag & 512 ? Ce.ctx.activate(
      A,
      re,
      Ee,
      ze,
      Ne
    ) : Z(
      A,
      re,
      Ee,
      Ce,
      Se,
      ze,
      Ne
    ) : W(I, A, Ne);
  }, Z = (I, A, re, Ee, Ce, Se, ze) => {
    const Fe = I.component = $d(
      I,
      Ee,
      Ce
    );
    if (oa(I) && (Fe.ctx.renderer = ve), Cd(Fe, !1, ze), Fe.asyncDep) {
      if (Ce && Ce.registerDep(Fe, K, ze), !I.el) {
        const Ne = Fe.subTree = b(Bt);
        S(null, Ne, A, re), I.placeholder = Ne.el;
      }
    } else
      K(
        Fe,
        I,
        A,
        re,
        Ce,
        Se,
        ze
      );
  }, W = (I, A, re) => {
    const Ee = A.component = I.component;
    if (nd(I, A, re))
      if (Ee.asyncDep && !Ee.asyncResolved) {
        ke(Ee, A, re);
        return;
      } else
        Ee.next = A, Ee.update();
    else
      A.el = I.el, Ee.vnode = A;
  }, K = (I, A, re, Ee, Ce, Se, ze) => {
    const Fe = () => {
      if (I.isMounted) {
        let { next: We, bu: pe, u: J, parent: qe, vnode: Ie } = I;
        {
          const ue = Vr(I);
          if (ue) {
            We && (We.el = Ie.el, ke(I, We, ze)), ue.asyncDep.then(() => {
              I.isUnmounted || Fe();
            });
            return;
          }
        }
        let Xe = We, Ve;
        Xs(I, !1), We ? (We.el = Ie.el, ke(I, We, ze)) : We = Ie, pe && En(pe), (Ve = We.props && We.props.onVnodeBeforeUpdate) && ps(Ve, qe, We, Ie), Xs(I, !0);
        const Ue = Xl(I), G = I.subTree;
        I.subTree = Ue, C(
          G,
          Ue,
          // parent may have changed if it's in a teleport
          p(G.el),
          // anchor may have changed if it's in a fragment
          te(G),
          I,
          Ce,
          Se
        ), We.el = Ue.el, Xe === null && ad(I, Ue.el), J && Ht(J, Ce), (Ve = We.props && We.props.onVnodeUpdated) && Ht(
          () => ps(Ve, qe, We, Ie),
          Ce
        );
      } else {
        let We;
        const { el: pe, props: J } = A, { bm: qe, m: Ie, parent: Xe, root: Ve, type: Ue } = I, G = bo(A);
        Xs(I, !1), qe && En(qe), !G && (We = J && J.onVnodeBeforeMount) && ps(We, Xe, A), Xs(I, !0);
        {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(Ue);
          const ue = I.subTree = Xl(I);
          C(
            null,
            ue,
            re,
            Ee,
            I,
            Ce,
            Se
          ), A.el = ue.el;
        }
        if (Ie && Ht(Ie, Ce), !G && (We = J && J.onVnodeMounted)) {
          const ue = A;
          Ht(
            () => ps(We, Xe, ue),
            Ce
          );
        }
        (A.shapeFlag & 256 || Xe && bo(Xe.vnode) && Xe.vnode.shapeFlag & 256) && I.a && Ht(I.a, Ce), I.isMounted = !0, A = re = Ee = null;
      }
    };
    I.scope.on();
    const Ne = I.effect = new qi(Fe);
    I.scope.off();
    const Te = I.update = Ne.run.bind(Ne), Je = I.job = Ne.runIfDirty.bind(Ne);
    Je.i = I, Je.id = I.uid, Ne.scheduler = () => yl(Je), Xs(I, !0), Te();
  }, ke = (I, A, re) => {
    A.component = I;
    const Ee = I.vnode.props;
    I.vnode = A, I.next = null, id(I, A.props, Ee, re), dd(I, A.children, re), Ds(), Vl(I), Ns();
  }, se = (I, A, re, Ee, Ce, Se, ze, Fe, Ne = !1) => {
    const Te = I && I.children, Je = I ? I.shapeFlag : 0, We = A.children, { patchFlag: pe, shapeFlag: J } = A;
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
  }, fe = (I, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    I = I || wo, A = A || wo;
    const Te = I.length, Je = A.length, We = Math.min(Te, Je);
    let pe;
    for (pe = 0; pe < We; pe++) {
      const J = A[pe] = Ne ? js(A[pe]) : _s(A[pe]);
      C(
        I[pe],
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
      I,
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
  }, U = (I, A, re, Ee, Ce, Se, ze, Fe, Ne) => {
    let Te = 0;
    const Je = A.length;
    let We = I.length - 1, pe = Je - 1;
    for (; Te <= We && Te <= pe; ) {
      const J = I[Te], qe = A[Te] = Ne ? js(A[Te]) : _s(A[Te]);
      if (so(J, qe))
        C(
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
      const J = I[We], qe = A[pe] = Ne ? js(A[pe]) : _s(A[pe]);
      if (so(J, qe))
        C(
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
          C(
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
        Pe(I[Te], Ce, Se, !0), Te++;
    else {
      const J = Te, qe = Te, Ie = /* @__PURE__ */ new Map();
      for (Te = qe; Te <= pe; Te++) {
        const N = A[Te] = Ne ? js(A[Te]) : _s(A[Te]);
        N.key != null && Ie.set(N.key, Te);
      }
      let Xe, Ve = 0;
      const Ue = pe - qe + 1;
      let G = !1, ue = 0;
      const he = new Array(Ue);
      for (Te = 0; Te < Ue; Te++) he[Te] = 0;
      for (Te = J; Te <= We; Te++) {
        const N = I[Te];
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
        O === void 0 ? Pe(N, Ce, Se, !0) : (he[O - qe] = Te + 1, O >= ue ? ue = O : G = !0, C(
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
      const Qe = G ? pd(he) : wo;
      for (Xe = Qe.length - 1, Te = Ue - 1; Te >= 0; Te--) {
        const N = qe + Te, O = A[N], X = A[N + 1], Oe = N + 1 < Je ? (
          // #13559, fallback to el placeholder for unresolved async component
          X.el || X.placeholder
        ) : Ee;
        he[Te] === 0 ? C(
          null,
          O,
          re,
          Oe,
          Ce,
          Se,
          ze,
          Fe,
          Ne
        ) : G && (Xe < 0 || Te !== Qe[Xe] ? me(O, re, Oe, 2) : Xe--);
      }
    }
  }, me = (I, A, re, Ee, Ce = null) => {
    const { el: Se, type: ze, transition: Fe, children: Ne, shapeFlag: Te } = I;
    if (Te & 6) {
      me(I.component.subTree, A, re, Ee);
      return;
    }
    if (Te & 128) {
      I.suspense.move(A, re, Ee);
      return;
    }
    if (Te & 64) {
      ze.move(I, A, re, ve);
      return;
    }
    if (ze === B) {
      a(Se, A, re);
      for (let We = 0; We < Ne.length; We++)
        me(Ne[We], A, re, Ee);
      a(I.anchor, A, re);
      return;
    }
    if (ze === Oa) {
      M(I, A, re);
      return;
    }
    if (Ee !== 2 && Te & 1 && Fe)
      if (Ee === 0)
        Fe.beforeEnter(Se), a(Se, A, re), Ht(() => Fe.enter(Se), Ce);
      else {
        const { leave: We, delayLeave: pe, afterLeave: J } = Fe, qe = () => {
          I.ctx.isUnmounted ? l(Se) : a(Se, A, re);
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
  }, Pe = (I, A, re, Ee = !1, Ce = !1) => {
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
    } = I;
    if (We === -2 && (Ce = !1), Fe != null && (Ds(), Yo(Fe, null, re, I, !0), Ns()), J != null && (A.renderCache[J] = void 0), Je & 256) {
      A.ctx.deactivate(I);
      return;
    }
    const qe = Je & 1 && pe, Ie = !bo(I);
    let Xe;
    if (Ie && (Xe = ze && ze.onVnodeBeforeUnmount) && ps(Xe, A, I), Je & 6)
      Q(I.component, re, Ee);
    else {
      if (Je & 128) {
        I.suspense.unmount(re, Ee);
        return;
      }
      qe && Ys(I, null, A, "beforeUnmount"), Je & 64 ? I.type.remove(
        I,
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
      ) : (Se === B && We & 384 || !Ce && Je & 16) && $e(Ne, A, re), Ee && ye(I);
    }
    (Ie && (Xe = ze && ze.onVnodeUnmounted) || qe) && Ht(() => {
      Xe && ps(Xe, A, I), qe && Ys(I, null, A, "unmounted");
    }, re);
  }, ye = (I) => {
    const { type: A, el: re, anchor: Ee, transition: Ce } = I;
    if (A === B) {
      ee(re, Ee);
      return;
    }
    if (A === Oa) {
      E(I);
      return;
    }
    const Se = () => {
      l(re), Ce && !Ce.persisted && Ce.afterLeave && Ce.afterLeave();
    };
    if (I.shapeFlag & 1 && Ce && !Ce.persisted) {
      const { leave: ze, delayLeave: Fe } = Ce, Ne = () => ze(re, Se);
      Fe ? Fe(I.el, Se, Ne) : Ne();
    } else
      Se();
  }, ee = (I, A) => {
    let re;
    for (; I !== A; )
      re = w(I), l(I), I = re;
    l(A);
  }, Q = (I, A, re) => {
    const { bum: Ee, scope: Ce, job: Se, subTree: ze, um: Fe, m: Ne, a: Te } = I;
    ti(Ne), ti(Te), Ee && En(Ee), Ce.stop(), Se && (Se.flags |= 8, Pe(ze, I, A, re)), Fe && Ht(Fe, A), Ht(() => {
      I.isUnmounted = !0;
    }, A);
  }, $e = (I, A, re, Ee = !1, Ce = !1, Se = 0) => {
    for (let ze = Se; ze < I.length; ze++)
      Pe(I[ze], A, re, Ee, Ce);
  }, te = (I) => {
    if (I.shapeFlag & 6)
      return te(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const A = w(I.anchor || I.el), re = A && A[fr];
    return re ? w(re) : A;
  };
  let oe = !1;
  const Re = (I, A, re) => {
    I == null ? A._vnode && Pe(A._vnode, null, null, !0) : C(
      A._vnode || null,
      I,
      A,
      null,
      null,
      null,
      re
    ), A._vnode = I, oe || (oe = !0, Vl(), ur(), oe = !1);
  }, ve = {
    p: C,
    um: Pe,
    m: me,
    r: ye,
    mt: Z,
    mc: L,
    pc: se,
    pbc: ce,
    n: te,
    o: e
  };
  return {
    render: Re,
    hydrate: void 0,
    createApp: Ku(Re)
  };
}
function Ua({ type: e, props: s }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && s && s.encoding && s.encoding.includes("html") ? void 0 : o;
}
function Xs({ effect: e, job: s }, o) {
  o ? (e.flags |= 32, s.flags |= 4) : (e.flags &= -33, s.flags &= -5);
}
function vd(e, s) {
  return (!e || e && !e.pendingBranch) && s && !s.persisted;
}
function $l(e, s, o = !1) {
  const a = e.children, l = s.children;
  if (et(a) && et(l))
    for (let r = 0; r < a.length; r++) {
      const c = a[r];
      let u = l[r];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = l[r] = js(l[r]), u.el = c.el), !o && u.patchFlag !== -2 && $l(c, u)), u.type === ia && // avoid cached text nodes retaining detached dom nodes
      u.patchFlag !== -1 && (u.el = c.el), u.type === Bt && !u.el && (u.el = c.el);
    }
}
function pd(e) {
  const s = e.slice(), o = [0];
  let a, l, r, c, u;
  const d = e.length;
  for (a = 0; a < d; a++) {
    const v = e[a];
    if (v !== 0) {
      if (l = o[o.length - 1], e[l] < v) {
        s[a] = l, o.push(a);
        continue;
      }
      for (r = 0, c = o.length - 1; r < c; )
        u = r + c >> 1, e[o[u]] < v ? r = u + 1 : c = u;
      v < e[o[r]] && (r > 0 && (s[a] = o[r - 1]), o[r] = a);
    }
  }
  for (r = o.length, c = o[r - 1]; r-- > 0; )
    o[r] = c, c = s[c];
  return o;
}
function Vr(e) {
  const s = e.subTree.component;
  if (s)
    return s.asyncDep && !s.asyncResolved ? s : Vr(s);
}
function ti(e) {
  if (e)
    for (let s = 0; s < e.length; s++)
      e[s].flags |= 8;
}
const Br = (e) => e.__isSuspense;
function gd(e, s) {
  s && s.pendingBranch ? et(e) ? s.effects.push(...e) : s.effects.push(e) : Su(e);
}
const B = Symbol.for("v-fgt"), ia = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), Oa = Symbol.for("v-stc"), Zo = [];
let es = null;
function n(e = !1) {
  Zo.push(es = e ? null : []);
}
function hd() {
  Zo.pop(), es = Zo[Zo.length - 1] || null;
}
let cn = 1;
function Wn(e, s = !1) {
  cn += e, e < 0 && es && s && (es.hasOnce = !0);
}
function Wr(e) {
  return e.dynamicChildren = cn > 0 ? es || wo : null, hd(), cn > 0 && es && es.push(e), e;
}
function i(e, s, o, a, l, r) {
  return Wr(
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
function R(e, s, o, a, l) {
  return Wr(
    b(
      e,
      s,
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
function so(e, s) {
  return e.type === s.type && e.key === s.key;
}
const Gr = ({ key: e }) => e ?? null, Pn = ({
  ref: e,
  ref_key: s,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $t(e) || Gt(e) || tt(e) ? { i: Ot, r: e, k: s, f: !!o } : e : null);
function t(e, s = null, o = null, a = 0, l = null, r = e === B ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: s,
    key: s && Gr(s),
    ref: s && Pn(s),
    scopeId: mr,
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
    ctx: Ot
  };
  return u ? (Cl(d, o), r & 128 && e.normalize(d)) : o && (d.shapeFlag |= $t(o) ? 8 : 16), cn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  es && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && es.push(d), d;
}
const b = yd;
function yd(e, s = null, o = null, a = 0, l = null, r = !1) {
  if ((!e || e === xr) && (e = Bt), un(e)) {
    const u = qs(
      e,
      s,
      !0
      /* mergeRef: true */
    );
    return o && Cl(u, o), cn > 0 && !r && es && (u.shapeFlag & 6 ? es[es.indexOf(e)] = u : es.push(u)), u.patchFlag = -2, u;
  }
  if (Td(e) && (e = e.__vccOpts), s) {
    s = wd(s);
    let { class: u, style: d } = s;
    u && !$t(u) && (s.class = Be(u)), gt(d) && (hl(d) && !et(d) && (d = Mt({}, d)), s.style = Rt(d));
  }
  const c = $t(e) ? 1 : Br(e) ? 128 : vr(e) ? 64 : gt(e) ? 4 : tt(e) ? 2 : 0;
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
function wd(e) {
  return e ? hl(e) || Nr(e) ? Mt({}, e) : e : null;
}
function qs(e, s, o = !1, a = !1) {
  const { props: l, ref: r, patchFlag: c, children: u, transition: d } = e, v = s ? _d(l || {}, s) : l, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Gr(v),
    ref: s && s.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && r ? et(r) ? r.concat(Pn(s)) : [r, Pn(s)] : Pn(s)
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
function $(e = " ", s = 0) {
  return b(ia, null, e, s);
}
function y(e = "", s = !1) {
  return s ? (n(), R(Bt, null, e)) : b(Bt, null, e);
}
function _s(e) {
  return e == null || typeof e == "boolean" ? b(Bt) : et(e) ? b(
    B,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : un(e) ? js(e) : b(ia, null, String(e));
}
function js(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qs(e);
}
function Cl(e, s) {
  let o = 0;
  const { shapeFlag: a } = e;
  if (s == null)
    s = null;
  else if (et(s))
    o = 16;
  else if (typeof s == "object")
    if (a & 65) {
      const l = s.default;
      l && (l._c && (l._d = !1), Cl(e, l()), l._c && (l._d = !0));
      return;
    } else {
      o = 32;
      const l = s._;
      !l && !Nr(s) ? s._ctx = Ot : l === 3 && Ot && (Ot.slots._ === 1 ? s._ = 1 : (s._ = 2, e.patchFlag |= 1024));
    }
  else tt(s) ? (s = { default: s, _ctx: Ot }, o = 32) : (s = String(s), a & 64 ? (o = 16, s = [$(s)]) : o = 8);
  e.children = s, e.shapeFlag |= o;
}
function _d(...e) {
  const s = {};
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    for (const l in a)
      if (l === "class")
        s.class !== a.class && (s.class = Be([s.class, a.class]));
      else if (l === "style")
        s.style = Rt([s.style, a.style]);
      else if (Qn(l)) {
        const r = s[l], c = a[l];
        c && r !== c && !(et(r) && r.includes(c)) && (s[l] = r ? [].concat(r, c) : c);
      } else l !== "" && (s[l] = a[l]);
  }
  return s;
}
function ps(e, s, o, a = null) {
  vs(e, s, 7, [
    o,
    a
  ]);
}
const kd = Tr();
let bd = 0;
function $d(e, s, o) {
  const a = e.type, l = (s ? s.appContext : e.appContext) || kd, r = {
    uid: bd++,
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
    scope: new Jc(
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
    propsOptions: Or(a, l),
    emitsOptions: Rr(a, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: a.inheritAttrs,
    // state
    ctx: ht,
    data: ht,
    props: ht,
    attrs: ht,
    slots: ht,
    refs: ht,
    setupState: ht,
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
  return r.ctx = { _: r }, r.root = s ? s.root : r, r.emit = ed.bind(null, r), e.ce && e.ce(r), r;
}
let Wt = null;
const xl = () => Wt || Ot;
let Gn, Xa;
{
  const e = ea(), s = (o, a) => {
    let l;
    return (l = e[o]) || (l = e[o] = []), l.push(a), (r) => {
      l.length > 1 ? l.forEach((c) => c(r)) : l[0](r);
    };
  };
  Gn = s(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Wt = o
  ), Xa = s(
    "__VUE_SSR_SETTERS__",
    (o) => dn = o
  );
}
const pn = (e) => {
  const s = Wt;
  return Gn(e), e.scope.on(), () => {
    e.scope.off(), Gn(s);
  };
}, si = () => {
  Wt && Wt.scope.off(), Gn(null);
};
function jr(e) {
  return e.vnode.shapeFlag & 4;
}
let dn = !1;
function Cd(e, s = !1, o = !1) {
  s && Xa(s);
  const { props: a, children: l } = e.vnode, r = jr(e);
  ld(e, a, r, s), ud(e, l, o || s);
  const c = r ? xd(e, s) : void 0;
  return s && Xa(!1), c;
}
function xd(e, s) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Vu);
  const { setup: a } = o;
  if (a) {
    Ds();
    const l = e.setupContext = a.length > 1 ? Id(e) : null, r = pn(e), c = vn(
      a,
      e,
      0,
      [
        e.props,
        l
      ]
    ), u = Fi(c);
    if (Ns(), r(), (u || e.sp) && !bo(e) && br(e), u) {
      if (c.then(si, si), s)
        return c.then((d) => {
          oi(e, d);
        }).catch((d) => {
          sa(d, e, 0);
        });
      e.asyncDep = c;
    } else
      oi(e, c);
  } else
    Hr(e);
}
function oi(e, s, o) {
  tt(s) ? e.type.__ssrInlineRender ? e.ssrRender = s : e.render = s : gt(s) && (e.setupState = ir(s)), Hr(e);
}
function Hr(e, s, o) {
  const a = e.type;
  e.render || (e.render = a.render || bs);
  {
    const l = pn(e);
    Ds();
    try {
      Bu(e);
    } finally {
      Ns(), l();
    }
  }
}
const Sd = {
  get(e, s) {
    return Ft(e, "get", ""), e[s];
  }
};
function Id(e) {
  const s = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Sd),
    slots: e.slots,
    emit: e.emit,
    expose: s
  };
}
function ra(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ir(gu(e.exposed)), {
    get(s, o) {
      if (o in s)
        return s[o];
      if (o in Xo)
        return Xo[o](e);
    },
    has(s, o) {
      return o in s || o in Xo;
    }
  })) : e.proxy;
}
function Ed(e, s = !0) {
  return tt(e) ? e.displayName || e.name : e.name || s && e.__name;
}
function Td(e) {
  return tt(e) && "__vccOpts" in e;
}
const P = (e, s) => ku(e, s, dn);
function Ro(e, s, o) {
  try {
    Wn(-1);
    const a = arguments.length;
    return a === 2 ? gt(s) && !et(s) ? un(s) ? b(e, null, [s]) : b(e, s) : b(e, null, s) : (a > 3 ? o = Array.prototype.slice.call(arguments, 2) : a === 3 && un(o) && (o = [o]), b(e, s, o));
  } finally {
    Wn(1);
  }
}
const Md = "3.5.25";
/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Za;
const ni = typeof window < "u" && window.trustedTypes;
if (ni)
  try {
    Za = /* @__PURE__ */ ni.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const qr = Za ? (e) => Za.createHTML(e) : (e) => e, Pd = "http://www.w3.org/2000/svg", Rd = "http://www.w3.org/1998/Math/MathML", Ts = typeof document < "u" ? document : null, ai = Ts && /* @__PURE__ */ Ts.createElement("template"), Ld = {
  insert: (e, s, o) => {
    s.insertBefore(e, o || null);
  },
  remove: (e) => {
    const s = e.parentNode;
    s && s.removeChild(e);
  },
  createElement: (e, s, o, a) => {
    const l = s === "svg" ? Ts.createElementNS(Pd, e) : s === "mathml" ? Ts.createElementNS(Rd, e) : o ? Ts.createElement(e, { is: o }) : Ts.createElement(e);
    return e === "select" && a && a.multiple != null && l.setAttribute("multiple", a.multiple), l;
  },
  createText: (e) => Ts.createTextNode(e),
  createComment: (e) => Ts.createComment(e),
  setText: (e, s) => {
    e.nodeValue = s;
  },
  setElementText: (e, s) => {
    e.textContent = s;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ts.querySelector(e),
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
      ai.innerHTML = qr(
        a === "svg" ? `<svg>${e}</svg>` : a === "mathml" ? `<math>${e}</math>` : e
      );
      const u = ai.content;
      if (a === "svg" || a === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
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
}, Vs = "transition", Oo = "animation", Eo = Symbol("_vtc"), Kr = {
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
}, Jr = /* @__PURE__ */ Mt(
  {},
  yr,
  Kr
), Dd = (e) => (e.displayName = "Transition", e.props = Jr, e), Nd = /* @__PURE__ */ Dd(
  (e, { slots: s }) => Ro(Tu, Qr(e), s)
), Zs = (e, s = []) => {
  et(e) ? e.forEach((o) => o(...s)) : e && e(...s);
}, li = (e) => e ? et(e) ? e.some((s) => s.length > 1) : e.length > 1 : !1;
function Qr(e) {
  const s = {};
  for (const Y in e)
    Y in Kr || (s[Y] = e[Y]);
  if (e.css === !1)
    return s;
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
  } = e, _ = Ud(l), C = _ && _[0], x = _ && _[1], {
    onBeforeEnter: S,
    onEnter: T,
    onEnterCancelled: M,
    onLeave: E,
    onLeaveCancelled: D,
    onBeforeAppear: z = S,
    onAppear: j = T,
    onAppearCancelled: L = M
  } = s, q = (Y, we, Z, W) => {
    Y._enterCancelled = W, Bs(Y, we ? f : u), Bs(Y, we ? v : c), Z && Z();
  }, ce = (Y, we) => {
    Y._isLeaving = !1, Bs(Y, p), Bs(Y, g), Bs(Y, w), we && we();
  }, ne = (Y) => (we, Z) => {
    const W = Y ? j : T, K = () => q(we, Y, Z);
    Zs(W, [we, K]), ii(() => {
      Bs(we, Y ? d : r), hs(we, Y ? f : u), li(W) || ri(we, a, C, K);
    });
  };
  return Mt(s, {
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
      const Z = () => ce(Y, we);
      hs(Y, p), Y._enterCancelled ? (hs(Y, w), el(Y)) : (el(Y), hs(Y, w)), ii(() => {
        Y._isLeaving && (Bs(Y, p), hs(Y, g), li(E) || ri(Y, a, x, Z));
      }), Zs(E, [Y, Z]);
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
function Ud(e) {
  if (e == null)
    return null;
  if (gt(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const s = Aa(e);
    return [s, s];
  }
}
function Aa(e) {
  return Vc(e);
}
function hs(e, s) {
  s.split(/\s+/).forEach((o) => o && e.classList.add(o)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(s);
}
function Bs(e, s) {
  s.split(/\s+/).forEach((a) => a && e.classList.remove(a));
  const o = e[Eo];
  o && (o.delete(s), o.size || (e[Eo] = void 0));
}
function ii(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Od = 0;
function ri(e, s, o, a) {
  const l = e._endId = ++Od, r = () => {
    l === e._endId && a();
  };
  if (o != null)
    return setTimeout(r, o);
  const { type: c, timeout: u, propCount: d } = Yr(e, s);
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
function Yr(e, s) {
  const o = window.getComputedStyle(e), a = (_) => (o[_] || "").split(", "), l = a(`${Vs}Delay`), r = a(`${Vs}Duration`), c = ci(l, r), u = a(`${Oo}Delay`), d = a(`${Oo}Duration`), v = ci(u, d);
  let f = null, p = 0, w = 0;
  s === Vs ? c > 0 && (f = Vs, p = c, w = r.length) : s === Oo ? v > 0 && (f = Oo, p = v, w = d.length) : (p = Math.max(c, v), f = p > 0 ? c > v ? Vs : Oo : null, w = f ? f === Vs ? r.length : d.length : 0);
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
function ci(e, s) {
  for (; e.length < s.length; )
    e = e.concat(e);
  return Math.max(...s.map((o, a) => ui(o) + ui(e[a])));
}
function ui(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function el(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ad(e, s, o) {
  const a = e[Eo];
  a && (s = (s ? [s, ...a] : [...a]).join(" ")), s == null ? e.removeAttribute("class") : o ? e.setAttribute("class", s) : e.className = s;
}
const di = Symbol("_vod"), zd = Symbol("_vsh"), Fd = Symbol(""), Vd = /(?:^|;)\s*display\s*:/;
function Bd(e, s, o) {
  const a = e.style, l = $t(o);
  let r = !1;
  if (o && !l) {
    if (s)
      if ($t(s))
        for (const c of s.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          o[u] == null && Rn(a, u, "");
        }
      else
        for (const c in s)
          o[c] == null && Rn(a, c, "");
    for (const c in o)
      c === "display" && (r = !0), Rn(a, c, o[c]);
  } else if (l) {
    if (s !== o) {
      const c = a[Fd];
      c && (o += ";" + c), a.cssText = o, r = Vd.test(o);
    }
  } else s && e.removeAttribute("style");
  di in e && (e[di] = r ? a.display : "", e[zd] && (a.display = "none"));
}
const mi = /\s*!important$/;
function Rn(e, s, o) {
  if (et(o))
    o.forEach((a) => Rn(e, s, a));
  else if (o == null && (o = ""), s.startsWith("--"))
    e.setProperty(s, o);
  else {
    const a = Wd(e, s);
    mi.test(o) ? e.setProperty(
      Js(a),
      o.replace(mi, ""),
      "important"
    ) : e[a] = o;
  }
}
const fi = ["Webkit", "Moz", "ms"], za = {};
function Wd(e, s) {
  const o = za[s];
  if (o)
    return o;
  let a = is(s);
  if (a !== "filter" && a in e)
    return za[s] = a;
  a = Xn(a);
  for (let l = 0; l < fi.length; l++) {
    const r = fi[l] + a;
    if (r in e)
      return za[s] = r;
  }
  return s;
}
const vi = "http://www.w3.org/1999/xlink";
function pi(e, s, o, a, l, r = qc(s)) {
  a && s.startsWith("xlink:") ? o == null ? e.removeAttributeNS(vi, s.slice(6, s.length)) : e.setAttributeNS(vi, s, o) : o == null || r && !Gi(o) ? e.removeAttribute(s) : e.setAttribute(
    s,
    r ? "" : ms(o) ? String(o) : o
  );
}
function gi(e, s, o, a, l) {
  if (s === "innerHTML" || s === "textContent") {
    o != null && (e[s] = s === "innerHTML" ? qr(o) : o);
    return;
  }
  const r = e.tagName;
  if (s === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const u = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (u !== d || !("_value" in e)) && (e.value = d), o == null && e.removeAttribute(s), e._value = o;
    return;
  }
  let c = !1;
  if (o === "" || o == null) {
    const u = typeof e[s];
    u === "boolean" ? o = Gi(o) : o == null && u === "string" ? (o = "", c = !0) : u === "number" && (o = 0, c = !0);
  }
  try {
    e[s] = o;
  } catch {
  }
  c && e.removeAttribute(l || s);
}
function Ls(e, s, o, a) {
  e.addEventListener(s, o, a);
}
function Gd(e, s, o, a) {
  e.removeEventListener(s, o, a);
}
const hi = Symbol("_vei");
function jd(e, s, o, a, l = null) {
  const r = e[hi] || (e[hi] = {}), c = r[s];
  if (a && c)
    c.value = a;
  else {
    const [u, d] = Hd(s);
    if (a) {
      const v = r[s] = Jd(
        a,
        l
      );
      Ls(e, u, v, d);
    } else c && (Gd(e, u, c, d), r[s] = void 0);
  }
}
const yi = /(?:Once|Passive|Capture)$/;
function Hd(e) {
  let s;
  if (yi.test(e)) {
    s = {};
    let a;
    for (; a = e.match(yi); )
      e = e.slice(0, e.length - a[0].length), s[a[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Js(e.slice(2)), s];
}
let Fa = 0;
const qd = /* @__PURE__ */ Promise.resolve(), Kd = () => Fa || (qd.then(() => Fa = 0), Fa = Date.now());
function Jd(e, s) {
  const o = (a) => {
    if (!a._vts)
      a._vts = Date.now();
    else if (a._vts <= o.attached)
      return;
    vs(
      Qd(a, o.value),
      s,
      5,
      [a]
    );
  };
  return o.value = e, o.attached = Kd(), o;
}
function Qd(e, s) {
  if (et(s)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, s.map(
      (a) => (l) => !l._stopped && a && a(l)
    );
  } else
    return s;
}
const wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Yd = (e, s, o, a, l, r) => {
  const c = l === "svg";
  s === "class" ? Ad(e, a, c) : s === "style" ? Bd(e, o, a) : Qn(s) ? il(s) || jd(e, s, o, a, r) : (s[0] === "." ? (s = s.slice(1), !0) : s[0] === "^" ? (s = s.slice(1), !1) : Xd(e, s, a, c)) ? (gi(e, s, a), !e.tagName.includes("-") && (s === "value" || s === "checked" || s === "selected") && pi(e, s, a, c, r, s !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(s) || !$t(a)) ? gi(e, is(s), a, r, s) : (s === "true-value" ? e._trueValue = a : s === "false-value" && (e._falseValue = a), pi(e, s, a, c));
};
function Xd(e, s, o, a) {
  if (a)
    return !!(s === "innerHTML" || s === "textContent" || s in e && wi(s) && tt(o));
  if (s === "spellcheck" || s === "draggable" || s === "translate" || s === "autocorrect" || s === "sandbox" && e.tagName === "IFRAME" || s === "form" || s === "list" && e.tagName === "INPUT" || s === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (s === "width" || s === "height") {
    const l = e.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return wi(s) && $t(o) ? !1 : s in e;
}
const Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), jn = Symbol("_moveCb"), _i = Symbol("_enterCb"), Zd = (e) => (delete e.props.mode, e), em = /* @__PURE__ */ Zd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ Mt({}, Jr, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: s }) {
    const o = xl(), a = hr();
    let l, r;
    return Cr(() => {
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
      el(o.vnode.el), u.forEach((d) => {
        const v = d.el, f = v.style;
        hs(v, c), f.transform = f.webkitTransform = f.transitionDuration = "";
        const p = v[jn] = (w) => {
          w && w.target !== v || (!w || w.propertyName.endsWith("transform")) && (v.removeEventListener("transitionend", p), v[jn] = null, Bs(v, c));
        };
        v.addEventListener("transitionend", p);
      }), l = [];
    }), () => {
      const c = ut(e), u = Qr(c);
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
          ), Xr.set(f, {
            left: f.el.offsetLeft,
            top: f.el.offsetTop
          }));
        }
      r = s.default ? wl(s.default()) : [];
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
}), tm = em;
function sm(e) {
  const s = e.el;
  s[jn] && s[jn](), s[_i] && s[_i]();
}
function om(e) {
  Zr.set(e, {
    left: e.el.offsetLeft,
    top: e.el.offsetTop
  });
}
function nm(e) {
  const s = Xr.get(e), o = Zr.get(e), a = s.left - o.left, l = s.top - o.top;
  if (a || l) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${a}px,${l}px)`, r.transitionDuration = "0s", e;
  }
}
function am(e, s, o) {
  const a = e.cloneNode(), l = e[Eo];
  l && l.forEach((u) => {
    u.split(/\s+/).forEach((d) => d && a.classList.remove(d));
  }), o.split(/\s+/).forEach((u) => u && a.classList.add(u)), a.style.display = "none";
  const r = s.nodeType === 1 ? s : s.parentNode;
  r.appendChild(a);
  const { hasTransform: c } = Yr(a);
  return r.removeChild(a), c;
}
const Ks = (e) => {
  const s = e.props["onUpdate:modelValue"] || !1;
  return et(s) ? (o) => En(s, o) : s;
};
function lm(e) {
  e.target.composing = !0;
}
function ki(e) {
  const s = e.target;
  s.composing && (s.composing = !1, s.dispatchEvent(new Event("input")));
}
const ls = Symbol("_assign");
function bi(e, s, o) {
  return s && (e = e.trim()), o && (e = Zn(e)), e;
}
const en = {
  created(e, { modifiers: { lazy: s, trim: o, number: a } }, l) {
    e[ls] = Ks(l);
    const r = a || l.props && l.props.type === "number";
    Ls(e, s ? "change" : "input", (c) => {
      c.target.composing || e[ls](bi(e.value, o, r));
    }), (o || r) && Ls(e, "change", () => {
      e.value = bi(e.value, o, r);
    }), s || (Ls(e, "compositionstart", lm), Ls(e, "compositionend", ki), Ls(e, "change", ki));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: s }) {
    e.value = s ?? "";
  },
  beforeUpdate(e, { value: s, oldValue: o, modifiers: { lazy: a, trim: l, number: r } }, c) {
    if (e[ls] = Ks(c), e.composing) return;
    const u = (r || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, d = s ?? "";
    u !== d && (document.activeElement === e && e.type !== "range" && (a && s === o || l && e.value.trim() === d) || (e.value = d));
  }
}, Hn = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, s, o) {
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
        c(ec(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: $i,
  beforeUpdate(e, s, o) {
    e[ls] = Ks(o), $i(e, s, o);
  }
};
function $i(e, { value: s, oldValue: o }, a) {
  e._modelValue = s;
  let l;
  if (et(s))
    l = ul(s, a.props.value) > -1;
  else if (Mo(s))
    l = s.has(a.props.value);
  else {
    if (s === o) return;
    l = lo(s, ec(e, !0));
  }
  e.checked !== l && (e.checked = l);
}
const Ln = {
  created(e, { value: s }, o) {
    e.checked = lo(s, o.props.value), e[ls] = Ks(o), Ls(e, "change", () => {
      e[ls](To(e));
    });
  },
  beforeUpdate(e, { value: s, oldValue: o }, a) {
    e[ls] = Ks(a), s !== o && (e.checked = lo(s, a.props.value));
  }
}, Co = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: s, modifiers: { number: o } }, a) {
    const l = Mo(s);
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
  mounted(e, { value: s }) {
    Ci(e, s);
  },
  beforeUpdate(e, s, o) {
    e[ls] = Ks(o);
  },
  updated(e, { value: s }) {
    e._assigning || Ci(e, s);
  }
};
function Ci(e, s) {
  const o = e.multiple, a = et(s);
  if (!(o && !a && !Mo(s))) {
    for (let l = 0, r = e.options.length; l < r; l++) {
      const c = e.options[l], u = To(c);
      if (o)
        if (a) {
          const d = typeof u;
          d === "string" || d === "number" ? c.selected = s.some((v) => String(v) === String(u)) : c.selected = ul(s, u) > -1;
        } else
          c.selected = s.has(u);
      else if (lo(To(c), s)) {
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
function ec(e, s) {
  const o = s ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : s;
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
  exact: (e, s) => im.some((o) => e[`${o}Key`] && !s.includes(o))
}, vt = (e, s) => {
  const o = e._withMods || (e._withMods = {}), a = s.join(".");
  return o[a] || (o[a] = ((l, ...r) => {
    for (let c = 0; c < s.length; c++) {
      const u = rm[s[c]];
      if (u && u(l, s)) return;
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
}, ds = (e, s) => {
  const o = e._withKeys || (e._withKeys = {}), a = s.join(".");
  return o[a] || (o[a] = ((l) => {
    if (!("key" in l))
      return;
    const r = Js(l.key);
    if (s.some(
      (c) => c === r || cm[c] === r
    ))
      return e(l);
  }));
}, um = /* @__PURE__ */ Mt({ patchProp: Yd }, Ld);
let xi;
function dm() {
  return xi || (xi = md(um));
}
const gn = ((...e) => {
  const s = dm().createApp(...e), { mount: o } = s;
  return s.mount = (a) => {
    const l = fm(a);
    if (!l) return;
    const r = s._component;
    !tt(r) && !r.render && !r.template && (r.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const c = o(l, !1, mm(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), c;
  }, s;
});
function mm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fm(e) {
  return $t(e) ? document.querySelector(e) : e;
}
const vm = { class: "panel-layout" }, pm = {
  key: 0,
  class: "panel-layout-header"
}, gm = {
  key: 1,
  class: "panel-layout-search"
}, hm = { class: "panel-layout-content" }, ym = {
  key: 2,
  class: "panel-layout-footer"
}, wm = /* @__PURE__ */ be({
  __name: "PanelLayout",
  setup(e) {
    return (s, o) => (n(), i("div", vm, [
      s.$slots.header ? (n(), i("div", pm, [
        ot(s.$slots, "header", {}, void 0)
      ])) : y("", !0),
      s.$slots.search ? (n(), i("div", gm, [
        ot(s.$slots, "search", {}, void 0)
      ])) : y("", !0),
      t("div", hm, [
        ot(s.$slots, "content", {}, void 0)
      ]),
      s.$slots.footer ? (n(), i("div", ym, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), xe = (e, s) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of s)
    o[a] = l;
  return o;
}, At = /* @__PURE__ */ xe(wm, [["__scopeId", "data-v-21565df9"]]), _m = {
  key: 0,
  class: "panel-title-prefix"
}, km = {
  key: 1,
  class: "panel-title-prefix-theme"
}, bm = /* @__PURE__ */ be({
  __name: "PanelTitle",
  props: {
    level: { default: 3 },
    variant: { default: "view" },
    showPrefix: { type: Boolean, default: !1 },
    prefix: { default: "> " }
  },
  setup(e) {
    return (s, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["panel-title", e.variant])
    }, {
      default: h(() => [
        e.showPrefix ? (n(), i("span", _m, m(e.prefix), 1)) : (n(), i("span", km)),
        ot(s.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), $m = /* @__PURE__ */ xe(bm, [["__scopeId", "data-v-c3875efc"]]), Cm = ["title"], xm = ["width", "height"], Sm = /* @__PURE__ */ be({
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
      ])], 8, xm))
    ], 8, Cm));
  }
}), Sl = /* @__PURE__ */ xe(Sm, [["__scopeId", "data-v-6fc7f16d"]]), Im = { class: "header-left" }, Em = {
  key: 0,
  class: "header-actions"
}, Tm = /* @__PURE__ */ be({
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
      class: Be(["panel-header", { stacked: e.stacked }])
    }, [
      t("div", Im, [
        b($m, { "show-prefix": e.showPrefix }, {
          default: h(() => [
            $(m(e.title), 1)
          ]),
          _: 1
        }, 8, ["show-prefix"]),
        e.showInfo ? (n(), R(Sl, {
          key: 0,
          onClick: o[0] || (o[0] = (a) => s.$emit("info-click"))
        })) : y("", !0)
      ]),
      s.$slots.actions ? (n(), i("div", Em, [
        ot(s.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), zt = /* @__PURE__ */ xe(Tm, [["__scopeId", "data-v-55a62cd6"]]), Mm = {
  key: 0,
  class: "section-title-count"
}, Pm = {
  key: 1,
  class: "section-title-icon"
}, Rm = /* @__PURE__ */ be({
  __name: "SectionTitle",
  props: {
    level: { default: 4 },
    count: {},
    clickable: { type: Boolean, default: !1 },
    expanded: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e) {
    return (s, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["section-title", { clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, {
      default: h(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", Mm, "(" + m(e.count) + ")", 1)) : y("", !0),
        e.clickable ? (n(), i("span", Pm, m(e.expanded ? "▼" : "▸"), 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ns = /* @__PURE__ */ xe(Rm, [["__scopeId", "data-v-559361eb"]]), Lm = { class: "status-grid" }, Dm = { class: "status-grid__columns" }, Nm = { class: "status-grid__column" }, Um = { class: "status-grid__title" }, Om = { class: "status-grid__column status-grid__column--right" }, Am = { class: "status-grid__title" }, zm = {
  key: 0,
  class: "status-grid__footer"
}, Fm = /* @__PURE__ */ be({
  __name: "StatusGrid",
  props: {
    leftTitle: {},
    rightTitle: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", Lm, [
      t("div", Dm, [
        t("div", Nm, [
          t("h4", Um, m(e.leftTitle), 1),
          ot(s.$slots, "left", {}, void 0)
        ]),
        t("div", Om, [
          t("h4", Am, m(e.rightTitle), 1),
          ot(s.$slots, "right", {}, void 0)
        ])
      ]),
      s.$slots.footer ? (n(), i("div", zm, [
        ot(s.$slots, "footer", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), Vm = /* @__PURE__ */ xe(Fm, [["__scopeId", "data-v-73b7ba3f"]]), Bm = {
  key: 0,
  class: "status-item__icon"
}, Wm = {
  key: 1,
  class: "status-item__count"
}, Gm = { class: "status-item__label" }, jm = /* @__PURE__ */ be({
  __name: "StatusItem",
  props: {
    icon: {},
    count: {},
    label: {},
    variant: { default: "default" },
    separator: { type: Boolean, default: !1 }
  },
  setup(e) {
    const s = e, o = P(() => `status-item--${s.variant}`);
    return (a, l) => (n(), i("div", {
      class: Be(["status-item", o.value, { "is-separator": e.separator }])
    }, [
      e.icon ? (n(), i("span", Bm, m(e.icon), 1)) : y("", !0),
      e.count !== void 0 ? (n(), i("span", Wm, m(e.count), 1)) : y("", !0),
      t("span", Gm, m(e.label), 1)
    ], 2));
  }
}), gs = /* @__PURE__ */ xe(jm, [["__scopeId", "data-v-6f929183"]]), Hm = { class: "issue-card__header" }, qm = { class: "issue-card__icon" }, Km = { class: "issue-card__title" }, Jm = {
  key: 0,
  class: "issue-card__content"
}, Qm = {
  key: 0,
  class: "issue-card__description"
}, Ym = {
  key: 1,
  class: "issue-card__items"
}, Xm = {
  key: 2,
  class: "issue-card__actions"
}, Zm = /* @__PURE__ */ be({
  __name: "IssueCard",
  props: {
    severity: { default: "warning" },
    icon: { default: "⚠" },
    title: {},
    description: {},
    items: {}
  },
  setup(e) {
    const s = e, o = P(() => `issue-card--${s.severity}`);
    return (a, l) => (n(), i("div", {
      class: Be(["issue-card", o.value])
    }, [
      t("div", Hm, [
        t("span", qm, m(e.icon), 1),
        t("h4", Km, m(e.title), 1)
      ]),
      a.$slots.default || e.description ? (n(), i("div", Jm, [
        e.description ? (n(), i("p", Qm, m(e.description), 1)) : y("", !0),
        ot(a.$slots, "default", {}, void 0)
      ])) : y("", !0),
      e.items && e.items.length ? (n(), i("div", Ym, [
        (n(!0), i(B, null, ge(e.items, (r, c) => (n(), i("div", {
          key: c,
          class: "issue-card__item"
        }, [
          l[0] || (l[0] = t("span", { class: "issue-card__bullet" }, "•", -1)),
          t("span", null, m(r), 1)
        ]))), 128))
      ])) : y("", !0),
      a.$slots.actions ? (n(), i("div", Xm, [
        ot(a.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), cs = /* @__PURE__ */ xe(Zm, [["__scopeId", "data-v-df6aa348"]]), ef = ["type", "disabled"], tf = {
  key: 0,
  class: "spinner"
}, sf = /* @__PURE__ */ be({
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
      class: Be(["action-btn", e.variant, e.size, { loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", tf)) : y("", !0),
      e.loading ? y("", !0) : ot(s.$slots, "default", { key: 1 }, void 0)
    ], 10, ef));
  }
}), Me = /* @__PURE__ */ xe(sf, [["__scopeId", "data-v-772abe47"]]), of = { class: "empty-state" }, nf = {
  key: 0,
  class: "empty-icon"
}, af = { class: "empty-message" }, lf = /* @__PURE__ */ be({
  __name: "EmptyState",
  props: {
    icon: {},
    message: {},
    actionLabel: {},
    actionVariant: { default: "secondary" }
  },
  emits: ["action"],
  setup(e) {
    return (s, o) => (n(), i("div", of, [
      e.icon ? (n(), i("div", nf, m(e.icon), 1)) : y("", !0),
      t("p", af, m(e.message), 1),
      e.actionLabel ? (n(), R(Me, {
        key: 1,
        variant: e.actionVariant || "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("action"))
      }, {
        default: h(() => [
          $(m(e.actionLabel), 1)
        ]),
        _: 1
      }, 8, ["variant"])) : y("", !0)
    ]));
  }
}), rs = /* @__PURE__ */ xe(lf, [["__scopeId", "data-v-4466284f"]]), rf = /* @__PURE__ */ be({
  __name: "Label",
  props: {
    minWidth: { default: "70px" }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Be(["detail-label"]),
      style: Rt({ minWidth: e.minWidth })
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 4));
  }
}), Dn = /* @__PURE__ */ xe(rf, [["__scopeId", "data-v-75e9eeb8"]]), cf = /* @__PURE__ */ be({
  __name: "Value",
  props: {
    mono: { type: Boolean, default: !1 },
    variant: { default: "default" },
    truncate: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("span", {
      class: Be(["detail-value", e.variant, { mono: e.mono, truncate: e.truncate }])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), tl = /* @__PURE__ */ xe(cf, [["__scopeId", "data-v-2f186e4c"]]), uf = { class: "detail-row" }, df = /* @__PURE__ */ be({
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
    return (s, o) => (n(), i("div", uf, [
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
      }, 8, ["mono", "variant", "truncate"])) : ot(s.$slots, "value", { key: 1 }, void 0)
    ]));
  }
}), _t = /* @__PURE__ */ xe(df, [["__scopeId", "data-v-ef15664a"]]), mf = { class: "modal-header" }, ff = { class: "modal-body" }, vf = { class: "status-section" }, pf = {
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
}, Nf = { class: "workflow-group-header" }, Uf = { class: "workflow-group-title" }, Of = { class: "workflow-list" }, Af = { class: "workflow-name" }, zf = {
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
}, Nv = { class: "modal-actions" }, Uv = /* @__PURE__ */ be({
  __name: "StatusDetailModal",
  props: {
    show: { type: Boolean },
    status: {},
    isRepairing: { type: Boolean }
  },
  emits: ["close", "navigate-workflows", "navigate-nodes", "repair"],
  setup(e) {
    const s = e, o = k(!1);
    at(() => {
      console.log("StatusDetailModal mounted, initial show value:", s.show);
    }), yt(() => s.show, (w, g) => {
      console.log("StatusDetailModal show prop changed from", g, "to", w);
    }, { immediate: !0 });
    const a = P(() => {
      var w, g, _;
      return ((_ = (g = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state === "synced"
      )) || [];
    }), l = P(() => {
      var w, g, _;
      return ((_ = (g = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : g.analyzed) == null ? void 0 : _.filter(
        (C) => C.status === "broken" && C.sync_state !== "synced"
      )) || [];
    }), r = P(() => {
      var w, g, _;
      return ((_ = (g = (w = s.status) == null ? void 0 : w.workflows) == null ? void 0 : g.synced) == null ? void 0 : _.filter((C) => {
        var S, T, M;
        const x = (M = (T = (S = s.status) == null ? void 0 : S.workflows) == null ? void 0 : T.analyzed) == null ? void 0 : M.find((E) => E.name === C);
        return !x || x.status !== "broken";
      })) || [];
    }), c = P(() => {
      var w, g, _, C, x;
      return (w = s.status) != null && w.workflows ? (((g = s.status.workflows.new) == null ? void 0 : g.length) ?? 0) > 0 || (((_ = s.status.workflows.modified) == null ? void 0 : _.length) ?? 0) > 0 || (((C = s.status.workflows.deleted) == null ? void 0 : C.length) ?? 0) > 0 || (((x = s.status.workflows.synced) == null ? void 0 : x.length) ?? 0) > 0 : !1;
    }), u = P(() => {
      var g, _, C;
      const w = (g = s.status) == null ? void 0 : g.git_changes;
      return w ? (((_ = w.nodes_added) == null ? void 0 : _.length) ?? 0) > 0 || (((C = w.nodes_removed) == null ? void 0 : C.length) ?? 0) > 0 || w.workflow_changes || w.has_other_changes : !1;
    }), d = P(() => {
      var w, g, _, C, x, S;
      return !c.value && !u.value && ((g = (w = s.status) == null ? void 0 : w.comparison) == null ? void 0 : g.is_synced) && (((_ = s.status) == null ? void 0 : _.missing_models_count) ?? 0) === 0 && (((S = (x = (C = s.status) == null ? void 0 : C.comparison) == null ? void 0 : x.disabled_nodes) == null ? void 0 : S.length) ?? 0) === 0;
    }), v = P(() => {
      var g, _;
      const w = (_ = (g = s.status) == null ? void 0 : g.git_changes) == null ? void 0 : _.workflow_changes;
      return w ? typeof w == "number" ? w : Object.keys(w).length : 0;
    });
    function f(w) {
      return typeof w == "string" ? w : w.name;
    }
    function p(w) {
      return typeof w == "object" && w.is_development === !0;
    }
    return (w, g) => {
      var _, C, x, S, T, M, E, D, z, j, L, q, ce, ne, Y, we, Z, W, K, ke, se, fe;
      return n(), R(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: g[7] || (g[7] = (U) => w.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: g[6] || (g[6] = vt(() => {
            }, ["stop"]))
          }, [
            t("div", mf, [
              g[8] || (g[8] = t("h3", { class: "modal-title" }, "ENVIRONMENT STATUS DETAILS", -1)),
              t("button", {
                class: "modal-close",
                onClick: g[0] || (g[0] = (U) => w.$emit("close"))
              }, "✕")
            ]),
            t("div", ff, [
              t("div", vf, [
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
              c.value ? (n(), i("div", pf, [
                t("div", gf, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[10] || (g[10] = [
                      $("WORKFLOWS", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: g[1] || (g[1] = (U) => w.$emit("navigate-workflows"))
                  }, " See Workflows → ")
                ]),
                a.value.length ? (n(), i("div", hf, [
                  t("div", yf, [
                    g[11] || (g[11] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", wf, "BROKEN (COMMITTED) (" + m(a.value.length) + ")", 1)
                  ]),
                  t("div", _f, [
                    (n(!0), i(B, null, ge(a.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      t("span", kf, m(U.name), 1),
                      t("span", bf, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                l.value.length ? (n(), i("div", $f, [
                  t("div", Cf, [
                    g[12] || (g[12] = t("span", { class: "workflow-status-icon broken" }, "⚠", -1)),
                    t("span", xf, "BROKEN (UNCOMMITTED) (" + m(l.value.length) + ")", 1)
                  ]),
                  t("div", Sf, [
                    (n(!0), i(B, null, ge(l.value, (U) => (n(), i("div", {
                      key: U.name,
                      class: "workflow-item"
                    }, [
                      t("span", If, m(U.name), 1),
                      t("span", Ef, m(U.issue_summary), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (C = (_ = e.status.workflows) == null ? void 0 : _.new) != null && C.length ? (n(), i("div", Tf, [
                  t("div", Mf, [
                    g[13] || (g[13] = t("span", { class: "workflow-status-icon new" }, "●", -1)),
                    t("span", Pf, "NEW (" + m(e.status.workflows.new.length) + ")", 1)
                  ]),
                  t("div", Rf, [
                    (n(!0), i(B, null, ge(e.status.workflows.new, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      t("span", Lf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (S = (x = e.status.workflows) == null ? void 0 : x.modified) != null && S.length ? (n(), i("div", Df, [
                  t("div", Nf, [
                    g[14] || (g[14] = t("span", { class: "workflow-status-icon modified" }, "●", -1)),
                    t("span", Uf, "MODIFIED (" + m(e.status.workflows.modified.length) + ")", 1)
                  ]),
                  t("div", Of, [
                    (n(!0), i(B, null, ge(e.status.workflows.modified, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      t("span", Af, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (M = (T = e.status.workflows) == null ? void 0 : T.deleted) != null && M.length ? (n(), i("div", zf, [
                  t("div", Ff, [
                    g[15] || (g[15] = t("span", { class: "workflow-status-icon deleted" }, "●", -1)),
                    t("span", Vf, "DELETED (" + m(e.status.workflows.deleted.length) + ")", 1)
                  ]),
                  t("div", Bf, [
                    (n(!0), i(B, null, ge(e.status.workflows.deleted, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      t("span", Wf, m(U), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                r.value.length ? (n(), i("div", Gf, [
                  t("div", {
                    class: "workflow-group-header clickable",
                    onClick: g[2] || (g[2] = (U) => o.value = !o.value)
                  }, [
                    g[16] || (g[16] = t("span", { class: "workflow-status-icon synced" }, "✓", -1)),
                    t("span", jf, "SYNCED (" + m(r.value.length) + ")", 1),
                    t("span", Hf, m(o.value ? "▼" : "▶"), 1)
                  ]),
                  o.value ? (n(), i("div", qf, [
                    (n(!0), i(B, null, ge(r.value, (U) => (n(), i("div", {
                      key: U,
                      class: "workflow-item"
                    }, [
                      t("span", Kf, m(U), 1)
                    ]))), 128))
                  ])) : y("", !0)
                ])) : y("", !0)
              ])) : y("", !0),
              u.value ? (n(), i("div", Jf, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[17] || (g[17] = [
                    $("UNCOMMITTED CHANGES", -1)
                  ])]),
                  _: 1
                }),
                (D = (E = e.status.git_changes) == null ? void 0 : E.nodes_added) != null && D.length ? (n(), i("div", Qf, [
                  t("div", Yf, [
                    g[18] || (g[18] = t("span", { class: "change-icon add" }, "+", -1)),
                    t("span", Xf, "NODES ADDED (" + m(e.status.git_changes.nodes_added.length) + ")", 1)
                  ]),
                  t("div", Zf, [
                    (n(!0), i(B, null, ge(e.status.git_changes.nodes_added, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      t("span", ev, m(f(U)), 1),
                      p(U) ? (n(), i("span", tv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (j = (z = e.status.git_changes) == null ? void 0 : z.nodes_removed) != null && j.length ? (n(), i("div", sv, [
                  t("div", ov, [
                    g[19] || (g[19] = t("span", { class: "change-icon remove" }, "-", -1)),
                    t("span", nv, "NODES REMOVED (" + m(e.status.git_changes.nodes_removed.length) + ")", 1)
                  ]),
                  t("div", av, [
                    (n(!0), i(B, null, ge(e.status.git_changes.nodes_removed, (U) => (n(), i("div", {
                      key: f(U),
                      class: "change-item"
                    }, [
                      t("span", lv, m(f(U)), 1),
                      p(U) ? (n(), i("span", iv, "dev")) : y("", !0)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                (L = e.status.git_changes) != null && L.workflow_changes ? (n(), i("div", rv, [
                  g[20] || (g[20] = t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "WORKFLOW FILES CHANGED")
                  ], -1)),
                  t("div", cv, [
                    t("div", uv, [
                      t("span", dv, m(v.value) + " workflow file(s) modified", 1)
                    ])
                  ])
                ])) : y("", !0),
                (q = e.status.git_changes) != null && q.has_other_changes ? (n(), i("div", mv, [...g[21] || (g[21] = [
                  t("div", { class: "change-group-header" }, [
                    t("span", { class: "change-icon modified" }, "~"),
                    t("span", { class: "change-group-title" }, "OTHER CHANGES")
                  ], -1),
                  t("div", { class: "change-list" }, [
                    t("div", { class: "change-item" }, [
                      t("span", { class: "node-name" }, "Configuration or other files modified")
                    ])
                  ], -1)
                ])])) : y("", !0)
              ])) : y("", !0),
              (ce = e.status.comparison) != null && ce.is_synced ? y("", !0) : (n(), i("div", fv, [
                t("div", vv, [
                  b(ns, { level: "4" }, {
                    default: h(() => [...g[22] || (g[22] = [
                      $("ENVIRONMENT DRIFT", -1)
                    ])]),
                    _: 1
                  }),
                  t("button", {
                    class: "link-btn",
                    onClick: g[3] || (g[3] = (U) => w.$emit("navigate-nodes"))
                  }, " See Nodes → ")
                ]),
                g[26] || (g[26] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("span", null, "Environment needs repair")
                ], -1)),
                (Y = (ne = e.status.comparison) == null ? void 0 : ne.missing_nodes) != null && Y.length ? (n(), i("div", pv, [
                  b(_t, {
                    label: "Missing Nodes:",
                    value: `${e.status.comparison.missing_nodes.length} nodes in pyproject.toml not installed`
                  }, null, 8, ["value"]),
                  t("div", gv, [
                    (n(!0), i(B, null, ge(e.status.comparison.missing_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.missing_nodes.length > 10 ? (n(), i("div", hv, " ... and " + m(e.status.comparison.missing_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (Z = (we = e.status.comparison) == null ? void 0 : we.extra_nodes) != null && Z.length ? (n(), i("div", yv, [
                  b(_t, {
                    label: "Extra Nodes:",
                    value: `${e.status.comparison.extra_nodes.length} untracked nodes on filesystem`
                  }, null, 8, ["value"]),
                  t("div", wv, [
                    (n(!0), i(B, null, ge(e.status.comparison.extra_nodes.slice(0, 10), (U) => (n(), i("div", {
                      key: U,
                      class: "drift-list-item"
                    }, " - " + m(U), 1))), 128)),
                    e.status.comparison.extra_nodes.length > 10 ? (n(), i("div", _v, " ... and " + m(e.status.comparison.extra_nodes.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                (K = (W = e.status.comparison) == null ? void 0 : W.version_mismatches) != null && K.length ? (n(), i("div", kv, [
                  b(_t, {
                    label: "Version Mismatches:",
                    value: `${e.status.comparison.version_mismatches.length} node(s) have wrong versions`
                  }, null, 8, ["value"]),
                  t("div", bv, [
                    (n(!0), i(B, null, ge(e.status.comparison.version_mismatches.slice(0, 10), (U) => (n(), i("div", {
                      key: U.name,
                      class: "drift-list-item version-mismatch"
                    }, [
                      $(m(U.name) + ": ", 1),
                      t("span", $v, m(U.actual), 1),
                      g[23] || (g[23] = $(" → ", -1)),
                      t("span", Cv, m(U.expected), 1)
                    ]))), 128)),
                    e.status.comparison.version_mismatches.length > 10 ? (n(), i("div", xv, " ... and " + m(e.status.comparison.version_mismatches.length - 10) + " more ", 1)) : y("", !0)
                  ])
                ])) : y("", !0),
                ((ke = e.status.comparison) == null ? void 0 : ke.packages_in_sync) === !1 ? (n(), i("div", Sv, [
                  b(_t, {
                    label: "Package Sync:",
                    value: "Python packages out of sync",
                    "value-variant": "warning"
                  })
                ])) : y("", !0),
                t("div", Iv, [
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
                  g[25] || (g[25] = t("p", { class: "help-text" }, "Syncs environment to match pyproject.toml manifest", -1))
                ])
              ])),
              (fe = (se = e.status.comparison) == null ? void 0 : se.disabled_nodes) != null && fe.length ? (n(), i("div", Ev, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[27] || (g[27] = [
                    $("DISABLED NODES", -1)
                  ])]),
                  _: 1
                }),
                t("div", Tv, [
                  g[28] || (g[28] = t("span", { class: "info-icon" }, "ℹ", -1)),
                  t("span", null, m(e.status.comparison.disabled_nodes.length) + " nodes are disabled", 1)
                ]),
                t("div", Mv, [
                  (n(!0), i(B, null, ge(e.status.comparison.disabled_nodes.slice(0, 10), (U) => (n(), i("div", {
                    key: U,
                    class: "drift-list-item"
                  }, " • " + m(U), 1))), 128)),
                  e.status.comparison.disabled_nodes.length > 10 ? (n(), i("div", Pv, " ... and " + m(e.status.comparison.disabled_nodes.length - 10) + " more ", 1)) : y("", !0)
                ])
              ])) : y("", !0),
              (e.status.missing_models_count ?? 0) > 0 ? (n(), i("div", Rv, [
                b(ns, { level: "4" }, {
                  default: h(() => [...g[29] || (g[29] = [
                    $("MISSING MODELS", -1)
                  ])]),
                  _: 1
                }),
                t("div", Lv, [
                  g[30] || (g[30] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.status.missing_models_count) + " model(s) not found in workspace", 1)
                ]),
                g[31] || (g[31] = t("p", { class: "help-text" }, " Some workflows reference models that need to be downloaded or resolved. Use the Workflows section to resolve these issues. ", -1))
              ])) : y("", !0),
              d.value ? (n(), i("div", Dv, [...g[32] || (g[32] = [
                t("div", { class: "empty-icon" }, "✅", -1),
                t("div", { class: "empty-message" }, [
                  t("strong", null, "Environment is clean!"),
                  t("p", null, "No workflows, no uncommitted changes, no issues detected.")
                ], -1)
              ])])) : y("", !0)
            ]),
            t("div", Nv, [
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
}), Ov = /* @__PURE__ */ xe(Uv, [["__scopeId", "data-v-e2b37122"]]), Av = { class: "health-section-header" }, zv = { class: "suggestions-content" }, Fv = { class: "suggestions-text" }, Vv = { style: { "margin-top": "var(--cg-space-3)" } }, Bv = {
  key: 1,
  class: "no-issues-text"
}, Wv = /* @__PURE__ */ be({
  __name: "StatusSection",
  props: {
    status: {},
    setupState: { default: "managed" }
  },
  emits: ["view-workflows", "view-history", "commit-changes", "view-debug", "sync-environment", "create-branch", "view-nodes", "repair-missing-models", "repair-environment", "start-setup", "view-environments", "create-environment"],
  setup(e, { expose: s, emit: o }) {
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
    const C = P(() => {
      const ee = a.status.workflows.analyzed || [], Q = ee.filter(
        ($e) => $e.unresolved_models_count > 0 || $e.ambiguous_models_count > 0
      );
      return Q.length === 0 && a.status.missing_models_count > 0 ? ee.filter(($e) => $e.sync_state === "synced") : Q;
    });
    function x() {
      const ee = C.value;
      ee.length !== 0 && (f.value = !0, v("repair-missing-models", ee.map((Q) => Q.name)));
    }
    function S() {
      f.value = !1;
    }
    s({ resetRepairingState: S, resetRepairingEnvironmentState: g, closeDetailModal: _ });
    const T = P(() => a.status.workflows.new.length > 0 || a.status.workflows.modified.length > 0 || a.status.workflows.deleted.length > 0), M = P(() => a.status.has_changes), E = P(() => {
      const ee = a.status.git_changes;
      return ee.nodes_added.length > 0 || ee.nodes_removed.length > 0 || ee.workflow_changes;
    }), D = P(() => a.status.has_changes || T.value), z = P(() => Object.keys(a.status.git_changes.workflow_changes_detail).length), j = P(() => a.status.git_changes.has_other_changes), L = P(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter((Q) => Q.status === "broken")) || [];
    }), q = P(() => {
      var ee;
      return ((ee = a.status.workflows.analyzed) == null ? void 0 : ee.filter(
        (Q) => Q.has_path_sync_issues && !Q.has_issues
      )) || [];
    }), ce = P(() => L.value.length > 0);
    function ne(ee) {
      const Q = [
        />=\s*v?(\d+(?:\.\d+){1,3})/i,
        /requires\s+comfyui\s*v?(\d+(?:\.\d+){1,3})/i,
        /comfyui\s*v?(\d+(?:\.\d+){1,3})\+/i
      ];
      for (const $e of Q) {
        const te = ee.match($e);
        if (te != null && te[1])
          return te[1];
      }
      return null;
    }
    function Y(ee) {
      const Q = ee.map(ne).filter(($e) => !!$e);
      return [...new Set(Q)];
    }
    function we(ee) {
      if (ee.length === 0) return "";
      if (ee.length === 1) return ` (>= ${ee[0]})`;
      const Q = ee.slice(0, 2).map((te) => `>= ${te}`).join(", "), $e = ee.length > 2;
      return ` (${Q}${$e ? ", ..." : ""})`;
    }
    function Z(ee) {
      return ee.replace(/uninstallable node mappings?/gi, (Q) => Q.toLowerCase().endsWith("s") ? "community packages" : "community package").replace(/no installable package versions?/gi, "need community packages").replace(/\bare uninstallable\b/gi, "need community packages").replace(/\buninstallable\b/gi, "community-mapped");
    }
    function W(ee) {
      const Q = Z(ee.issue_summary || "Has issues"), $e = /(?:>=|v?\d+\.\d+)/i.test(Q), te = Y(ee.version_gated_guidance || []);
      return (ee.nodes_version_gated_count || 0) > 0 && te.length > 0 && !$e ? `${ee.name} — ${Q} (needs ComfyUI ${te.map((oe) => `>= ${oe}`).join(", ")})` : `${ee.name} — ${Q}`;
    }
    const K = P(() => L.value.reduce(
      (ee, Q) => ee + (Q.nodes_version_gated_count || 0),
      0
    )), ke = P(() => {
      const ee = L.value.flatMap(
        (Q) => Y(Q.version_gated_guidance || [])
      );
      return [...new Set(ee)];
    }), se = P(() => L.value.reduce(
      (ee, Q) => ee + (Q.nodes_uninstallable_count || 0),
      0
    )), fe = P(() => {
      const ee = [];
      return K.value > 0 && ee.push(
        `${K.value} require newer ComfyUI${we(ke.value)}`
      ), se.value > 0 && ee.push(`${se.value} need community packages`), ee.length > 0 ? `These workflows have missing, blocked, or actionable dependencies (${ee.join(", ")}) that must be resolved before they can run.` : "These workflows have missing dependencies that must be resolved before they can run.";
    }), U = P(() => ce.value || q.value.length > 0 || a.status.missing_models_count > 0 || !a.status.comparison.is_synced || a.status.has_legacy_manager), me = P(() => {
      const ee = [];
      return a.status.workflows.new.length > 0 && ee.push(`${a.status.workflows.new.length} new`), a.status.workflows.modified.length > 0 && ee.push(`${a.status.workflows.modified.length} modified`), a.status.workflows.deleted.length > 0 && ee.push(`${a.status.workflows.deleted.length} deleted`), ee.length > 0 ? `${ee.join(", ")} workflow${ee.length === 1 && !ee[0].includes(",") ? "" : "s"} to commit` : "Changes ready to commit";
    }), Pe = P(() => {
      var $e, te;
      const ee = [], Q = a.status.comparison;
      return ($e = Q.missing_nodes) != null && $e.length && ee.push(`${Q.missing_nodes.length} missing node${Q.missing_nodes.length === 1 ? "" : "s"}`), (te = Q.extra_nodes) != null && te.length && ee.push(`${Q.extra_nodes.length} untracked node${Q.extra_nodes.length === 1 ? "" : "s"}`), ee.length === 0 ? "Your environment state does not match the manifest." : `Environment has ${ee.join(" and ")}.`;
    }), ye = P(() => {
      var $e, te;
      const ee = [], Q = a.status.comparison;
      return ($e = Q.extra_nodes) != null && $e.length && (Q.extra_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Untracked: ${oe}`);
      }), Q.extra_nodes.length > 3 && ee.push(`...and ${Q.extra_nodes.length - 3} more untracked`)), (te = Q.missing_nodes) != null && te.length && (Q.missing_nodes.slice(0, 3).forEach((oe) => {
        ee.push(`Missing: ${oe}`);
      }), Q.missing_nodes.length > 3 && ee.push(`...and ${Q.missing_nodes.length - 3} more missing`)), ee;
    });
    return (ee, Q) => (n(), i(B, null, [
      b(At, null, {
        header: h(() => [
          b(zt, { title: "STATUS" })
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
                onClick: Q[0] || (Q[0] = ($e) => ee.$emit("start-setup"))
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
                onClick: Q[1] || (Q[1] = ($e) => ee.$emit("view-environments"))
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
                onClick: Q[2] || (Q[2] = ($e) => ee.$emit("create-environment"))
              }, {
                default: h(() => [...Q[15] || (Q[15] = [
                  $(" Create Environment ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", {
            class: "health-section-wrapper",
            onMouseenter: Q[4] || (Q[4] = ($e) => r.value = !0),
            onMouseleave: Q[5] || (Q[5] = ($e) => r.value = !1)
          }, [
            t("div", Av, [
              b(ns, {
                level: "4",
                style: { "margin-bottom": "var(--cg-space-2)" }
              }, {
                default: h(() => [...Q[16] || (Q[16] = [
                  $(" ENVIRONMENT HEALTH ", -1)
                ])]),
                _: 1
              }),
              b(Nd, { name: "fade" }, {
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
            b(Vm, {
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
                  separator: T.value
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
                j.value ? (n(), R(gs, {
                  key: 3,
                  icon: "●",
                  label: "other changes",
                  variant: "modified"
                })) : y("", !0),
                M.value && !E.value && !j.value ? (n(), R(gs, {
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
                  Q[19] || (Q[19] = t("h4", { class: "footer-title" }, "ACTIONS", -1)),
                  t("div", zv, [
                    t("span", Fv, m(me.value), 1),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: Q[3] || (Q[3] = ($e) => ee.$emit("commit-changes"))
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
                onClick: Q[6] || (Q[6] = ($e) => ee.$emit("create-branch"))
              }, {
                default: h(() => [...Q[20] || (Q[20] = [
                  $(" Create Branch ", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })) : y("", !0),
          t("div", Vv, [
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
                items: L.value.map(W)
              }, {
                actions: h(() => [
                  b(Me, {
                    variant: "primary",
                    size: "sm",
                    onClick: Q[7] || (Q[7] = ($e) => ee.$emit("view-workflows"))
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
                    onClick: Q[8] || (Q[8] = ($e) => ee.$emit("view-workflows"))
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
                    onClick: x
                  }, {
                    default: h(() => [
                      $(m(f.value ? "Repairing..." : "Repair"), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  b(Me, {
                    variant: "secondary",
                    size: "sm",
                    onClick: Q[9] || (Q[9] = ($e) => ee.$emit("view-workflows"))
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
                    onClick: Q[10] || (Q[10] = ($e) => ee.$emit("view-nodes"))
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
                    onClick: Q[11] || (Q[11] = ($e) => ee.$emit("view-nodes"))
                  }, {
                    default: h(() => [...Q[27] || (Q[27] = [
                      $(" See Nodes ", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })) : y("", !0)
            ], 64)) : D.value ? (n(), i("span", Bv, "No issues")) : (n(), R(rs, {
              key: 2,
              icon: "✅",
              message: "Everything looks good! No issues detected."
            }))
          ])
        ]),
        _: 1
      }),
      b(Ov, {
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
}), Gv = /* @__PURE__ */ xe(Wv, [["__scopeId", "data-v-df52ba90"]]), BR = co({
  hasWorkspace: !1,
  hasEnvironments: !1,
  isManaged: !1,
  hasLegacyManager: !1
});
const WR = [
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
], GR = {
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
}, jv = [
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
], jR = [
  ...jv,
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
class tc extends Error {
  constructor(o, a, l, r) {
    super(o);
    _n(this, "status");
    _n(this, "data");
    _n(this, "endpoint");
    this.name = "ComfyGitApiError", this.status = a, this.data = l, this.endpoint = r;
  }
}
function Hv() {
  return typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const s = Math.random() * 16 | 0;
    return (e === "x" ? s : s & 3 | 8).toString(16);
  });
}
function ct() {
  const e = k(!1), s = k(null);
  async function o(V, _e) {
    var Nt;
    if (!((Nt = window.app) != null && Nt.api))
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
      throw new tc(String(Fs), He.status, Ze, V);
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
  async function C(V) {
    return o("/v2/comfygit/export", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ output_path: V })
    });
  }
  async function x() {
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
  async function T(V) {
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
  async function E(V, _e) {
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
  async function j(V, _e = !1) {
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
  async function Z(V, _e) {
    const He = { target_env: V };
    return _e && (He.workspace_path = _e), o("/v2/comfygit/switch_environment", {
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
  async function ee(V) {
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
  async function I(V) {
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
  async function G() {
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
    var Fs, Is, Nl, Ul;
    const He = Hv(), mt = ((Is = (Fs = window.app) == null ? void 0 : Fs.api) == null ? void 0 : Is.clientId) ?? ((Ul = (Nl = window.app) == null ? void 0 : Nl.api) == null ? void 0 : Ul.initialClientId) ?? "comfygit-panel", Nt = {
      id: V.id,
      version: V.version || V.selected_version || "latest",
      selected_version: V.selected_version || "latest",
      mode: V.mode || "remote",
      channel: V.channel || "default"
    };
    return V.install_source && (Nt.install_source = V.install_source), V.install_source === "git" && V.repository && (Nt.repository = V.repository), await o("/v2/manager/queue/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        kind: "install",
        params: Nt,
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
  async function Ct(V, _e = {}) {
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
  async function xt(V, _e = {}) {
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
      const Nt = await He.json().catch(() => ({}));
      throw new Error(Nt.error || `Preview failed: ${He.status}`);
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
    const Nt = new FormData();
    if (Nt.append("file", V), Nt.append("name", _e), Nt.append("model_strategy", He), Nt.append("torch_backend", mt), !((Fs = window.app) != null && Fs.api))
      throw new Error("ComfyUI API not available");
    const Ze = await window.app.api.fetchApi("/v2/workspace/import", {
      method: "POST",
      body: Nt
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
  async function pt(V, _e) {
    return o(`/v2/comfygit/deploy/custom/${encodeURIComponent(V)}/instances`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(_e)
    });
  }
  async function Dt(V, _e) {
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
    error: s,
    getStatus: p,
    commit: w,
    getHistory: g,
    getBranchHistory: _,
    exportEnv: C,
    validateExport: x,
    validateDeploy: S,
    exportEnvWithForce: T,
    validateEnvironmentExport: M,
    exportEnvironmentWithForce: E,
    // Git Operations
    getBranches: D,
    getCommitDetail: z,
    checkout: j,
    createBranch: L,
    switchBranch: q,
    deleteBranch: ce,
    // Environment Management
    listEnvironments: ne,
    getEnvironments: Y,
    getEnvironmentDetails: we,
    switchEnvironment: Z,
    getSwitchProgress: W,
    createEnvironment: K,
    getCreateProgress: ke,
    getComfyUIReleases: se,
    deleteEnvironment: fe,
    // Workflow Management
    getWorkflows: U,
    getWorkflowDetails: me,
    getWorkflowContract: Pe,
    saveWorkflowContract: ye,
    deleteWorkflowContract: ee,
    resolveWorkflow: Q,
    installWorkflowDeps: $e,
    setModelImportance: te,
    // Model Management
    getEnvironmentModels: oe,
    getWorkspaceModels: Re,
    getModelDetails: ve,
    getModelSourceCandidates: le,
    computeModelHashes: I,
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
    getWorkspaceLogPath: G,
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
    pullFromRemote: Ct,
    getPushPreview: it,
    pushToRemote: xt,
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
    deployToWorker: pt,
    startWorkerInstance: Dt,
    stopWorkerInstance: ss,
    terminateWorkerInstance: No,
    // Git Authentication
    testGitAuth: zs
  };
}
async function Sn(e, s) {
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
function qv() {
  async function e() {
    try {
      return await Sn("/v2/comfygit/orchestrator/health");
    } catch {
      return null;
    }
  }
  async function s() {
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
    getStatus: s,
    restart: o,
    kill: a
  };
}
const Kv = { class: "base-modal-header" }, Jv = {
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
}, ep = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
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
    }), (c, u) => (n(), R(Lt, { to: "body" }, [
      t("div", {
        class: "base-modal-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: l
      }, [
        t("div", {
          class: Be(["base-modal-content", e.size, { "fixed-height": e.fixedHeight }]),
          onClick: u[1] || (u[1] = vt(() => {
          }, ["stop"]))
        }, [
          t("div", Kv, [
            ot(c.$slots, "header", {}, () => [
              e.title ? (n(), i("h3", Jv, m(e.title), 1)) : y("", !0)
            ]),
            e.showCloseButton ? (n(), i("button", {
              key: 0,
              class: "base-modal-close",
              onClick: u[0] || (u[0] = (d) => c.$emit("close"))
            }, [...u[2] || (u[2] = [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ], -1)
            ])])) : y("", !0)
          ]),
          t("div", Qv, [
            e.loading ? (n(), i("div", Yv, "Loading...")) : e.error ? (n(), i("div", Xv, m(e.error), 1)) : ot(c.$slots, "body", { key: 2 }, void 0)
          ]),
          c.$slots.footer ? (n(), i("div", Zv, [
            ot(c.$slots, "footer", {}, void 0)
          ])) : y("", !0)
        ], 2)
      ], 4)
    ]));
  }
}), It = /* @__PURE__ */ xe(ep, [["__scopeId", "data-v-06a4be14"]]), tp = ["type", "disabled"], sp = {
  key: 0,
  class: "spinner"
}, op = /* @__PURE__ */ be({
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
      class: Be(["base-btn", e.variant, e.size, { "full-width": e.fullWidth, loading: e.loading }]),
      onClick: o[0] || (o[0] = (a) => s.$emit("click", a))
    }, [
      e.loading ? (n(), i("span", sp)) : y("", !0),
      ot(s.$slots, "default", {}, void 0)
    ], 10, tp));
  }
}), De = /* @__PURE__ */ xe(op, [["__scopeId", "data-v-f3452606"]]), np = {
  key: 0,
  class: "base-title-count"
}, ap = /* @__PURE__ */ be({
  __name: "BaseTitle",
  props: {
    level: { default: 3 },
    variant: { default: "section" },
    count: {}
  },
  setup(e) {
    return (s, o) => (n(), R(_l(`h${e.level}`), {
      class: Be(["base-title", e.variant])
    }, {
      default: h(() => [
        ot(s.$slots, "default", {}, void 0, !0),
        e.count !== void 0 ? (n(), i("span", np, "(" + m(e.count) + ")", 1)) : y("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ao = /* @__PURE__ */ xe(ap, [["__scopeId", "data-v-5a01561d"]]), lp = ["value", "disabled"], ip = {
  key: 0,
  value: "",
  disabled: ""
}, rp = ["value"], cp = {
  key: 0,
  class: "base-select-error"
}, up = /* @__PURE__ */ be({
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
      class: Be(["base-select-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("select", {
        value: e.modelValue,
        disabled: e.disabled,
        class: Be(["base-select", { error: !!e.error }]),
        onChange: l[0] || (l[0] = (r) => a.$emit("update:modelValue", r.target.value))
      }, [
        e.placeholder ? (n(), i("option", ip, m(e.placeholder), 1)) : y("", !0),
        (n(!0), i(B, null, ge(e.options, (r) => (n(), i("option", {
          key: s(r),
          value: s(r)
        }, m(o(r)), 9, rp))), 128))
      ], 42, lp),
      e.error ? (n(), i("span", cp, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), Nn = /* @__PURE__ */ xe(up, [["__scopeId", "data-v-4996bfe0"]]), dp = { class: "popover-header" }, mp = { class: "popover-title" }, fp = { class: "popover-content" }, vp = {
  key: 0,
  class: "popover-actions"
}, pp = /* @__PURE__ */ be({
  __name: "InfoPopover",
  props: {
    show: { type: Boolean },
    title: {},
    maxWidth: { default: "400px" },
    overlayZIndex: { default: 10004 }
  },
  emits: ["close"],
  setup(e) {
    return (s, o) => (n(), R(Lt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "popover-overlay",
        style: Rt({ zIndex: e.overlayZIndex }),
        onClick: o[2] || (o[2] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "popover",
          style: Rt({ maxWidth: e.maxWidth }),
          onClick: o[1] || (o[1] = vt(() => {
          }, ["stop"]))
        }, [
          t("div", dp, [
            t("h4", mp, m(e.title), 1),
            t("button", {
              class: "popover-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", fp, [
            ot(s.$slots, "content", {}, void 0)
          ]),
          s.$slots.actions ? (n(), i("div", vp, [
            ot(s.$slots, "actions", {}, void 0)
          ])) : y("", !0)
        ], 4)
      ], 4)) : y("", !0)
    ]));
  }
}), Yt = /* @__PURE__ */ xe(pp, [["__scopeId", "data-v-7c1f5547"]]), gp = { class: "detail-section" }, hp = {
  key: 0,
  class: "empty-message"
}, yp = { class: "model-header" }, wp = { class: "model-name" }, _p = { class: "model-details" }, kp = { class: "model-row" }, bp = { class: "model-row" }, $p = { class: "label" }, Cp = {
  key: 0,
  class: "model-row model-row-nodes"
}, xp = { class: "node-list" }, Sp = ["onClick"], Ip = {
  key: 1,
  class: "model-row"
}, Ep = { class: "value" }, Tp = {
  key: 2,
  class: "model-row"
}, Mp = { class: "value error" }, Pp = {
  key: 0,
  class: "model-actions"
}, Rp = { class: "detail-section" }, Lp = {
  key: 0,
  class: "empty-message"
}, Dp = { class: "node-content" }, Np = { class: "node-main" }, Up = { class: "node-name" }, Op = { class: "node-badge" }, Ap = {
  key: 0,
  class: "node-version"
}, zp = ["onClick"], Fp = {
  key: 2,
  class: "node-install-queued"
}, Vp = {
  key: 0,
  class: "node-guidance"
}, Bp = /* @__PURE__ */ be({
  __name: "WorkflowDetailsModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "resolve", "refresh"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getWorkflowDetails: l, setModelImportance: r, openFileLocation: c, queueNodeInstall: u } = ct(), d = k(null), v = k(!1), f = k(null), p = k(!1), w = k({}), g = k(!1), _ = k(/* @__PURE__ */ new Set()), C = k(/* @__PURE__ */ new Set()), x = [
      { label: "Required", value: "required" },
      { label: "Flexible", value: "flexible" },
      { label: "Optional", value: "optional" }
    ];
    function S(Z) {
      switch (Z) {
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
    function T(Z) {
      switch (Z) {
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
    function M(Z) {
      switch (Z) {
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
    function E(Z) {
      switch (Z) {
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
    function D(Z) {
      switch (Z) {
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
    function z(Z) {
      if (!Z.loaded_by || Z.loaded_by.length === 0) return [];
      const W = Z.hash || Z.filename;
      return _.value.has(W) ? Z.loaded_by : Z.loaded_by.slice(0, 3);
    }
    function j(Z) {
      return _.value.has(Z);
    }
    function L(Z) {
      _.value.has(Z) ? _.value.delete(Z) : _.value.add(Z), _.value = new Set(_.value);
    }
    async function q() {
      v.value = !0, f.value = null;
      try {
        d.value = await l(o.workflowName);
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to load workflow details";
      } finally {
        v.value = !1;
      }
    }
    function ce(Z, W) {
      w.value[Z] = W, p.value = !0;
    }
    async function ne(Z) {
      try {
        await c(Z);
      } catch (W) {
        f.value = W instanceof Error ? W.message : "Failed to open file location";
      }
    }
    async function Y(Z) {
      if (Z.package_id)
        try {
          const W = Z.latest_version || "latest";
          await u({
            id: Z.package_id,
            version: W,
            selected_version: W,
            mode: "remote",
            channel: "default"
          }), C.value.add(Z.package_id);
        } catch (W) {
          f.value = W instanceof Error ? W.message : "Failed to queue node install";
        }
    }
    async function we() {
      if (!p.value) {
        a("close");
        return;
      }
      v.value = !0, f.value = null;
      try {
        for (const [Z, W] of Object.entries(w.value))
          await r(o.workflowName, Z, W);
        a("refresh"), a("close");
      } catch (Z) {
        f.value = Z instanceof Error ? Z.message : "Failed to save changes";
      } finally {
        v.value = !1;
      }
    }
    return at(q), (Z, W) => (n(), i(B, null, [
      b(It, {
        title: `WORKFLOW DETAILS: ${e.workflowName}`,
        size: "lg",
        loading: v.value,
        error: f.value || void 0,
        onClose: W[4] || (W[4] = (K) => a("close"))
      }, {
        body: h(() => [
          d.value ? (n(), i(B, { key: 0 }, [
            t("section", gp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("MODELS USED (" + m(d.value.models.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.models.length === 0 ? (n(), i("div", hp, " No models used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, ge(d.value.models, (K) => {
                var ke;
                return n(), i("div", {
                  key: K.hash || K.filename,
                  class: "model-card"
                }, [
                  t("div", yp, [
                    W[6] || (W[6] = t("span", { class: "model-icon" }, "📦", -1)),
                    t("span", wp, m(K.filename), 1)
                  ]),
                  t("div", _p, [
                    t("div", kp, [
                      W[7] || (W[7] = t("span", { class: "label" }, "Status:", -1)),
                      t("span", {
                        class: Be(["value", S(K.status)])
                      }, m(T(K.status)), 3)
                    ]),
                    t("div", bp, [
                      t("span", $p, [
                        W[8] || (W[8] = $(" Importance: ", -1)),
                        b(Sl, {
                          size: 14,
                          title: "About importance levels",
                          onClick: W[0] || (W[0] = (se) => g.value = !0)
                        })
                      ]),
                      b(Nn, {
                        "model-value": w.value[K.filename] || K.importance,
                        options: x,
                        "onUpdate:modelValue": (se) => ce(K.filename, se)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    K.loaded_by && K.loaded_by.length > 0 ? (n(), i("div", Cp, [
                      W[9] || (W[9] = t("span", { class: "label" }, "Loaded by:", -1)),
                      t("div", xp, [
                        (n(!0), i(B, null, ge(z(K), (se, fe) => (n(), i("div", {
                          key: `${se.node_id}-${fe}`,
                          class: "node-reference"
                        }, m(se.node_type) + " (Node #" + m(se.node_id) + ") ", 1))), 128)),
                        K.loaded_by.length > 3 ? (n(), i("button", {
                          key: 0,
                          class: "expand-toggle",
                          onClick: (se) => L(K.hash || K.filename)
                        }, m(j(K.hash || K.filename) ? "▼ Show less" : `▶ View all (${K.loaded_by.length})`), 9, Sp)) : y("", !0)
                      ])
                    ])) : y("", !0),
                    K.size_mb ? (n(), i("div", Ip, [
                      W[10] || (W[10] = t("span", { class: "label" }, "Size:", -1)),
                      t("span", Ep, m(K.size_mb) + " MB", 1)
                    ])) : y("", !0),
                    K.has_category_mismatch ? (n(), i("div", Tp, [
                      W[13] || (W[13] = t("span", { class: "label" }, "Location issue:", -1)),
                      t("span", Mp, [
                        W[11] || (W[11] = $(" In ", -1)),
                        t("code", null, m(K.actual_category) + "/", 1),
                        W[12] || (W[12] = $(" but loader needs ", -1)),
                        t("code", null, m((ke = K.expected_categories) == null ? void 0 : ke[0]) + "/", 1)
                      ])
                    ])) : y("", !0)
                  ]),
                  K.status !== "available" ? (n(), i("div", Pp, [
                    K.status === "downloadable" ? (n(), R(De, {
                      key: 0,
                      variant: "primary",
                      size: "sm",
                      onClick: W[1] || (W[1] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...W[14] || (W[14] = [
                        $(" Download ", -1)
                      ])]),
                      _: 1
                    })) : K.status === "category_mismatch" && K.file_path ? (n(), R(De, {
                      key: 1,
                      variant: "secondary",
                      size: "sm",
                      onClick: (se) => ne(K.file_path)
                    }, {
                      default: h(() => [...W[15] || (W[15] = [
                        $(" Open File Location ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : K.status !== "path_mismatch" ? (n(), R(De, {
                      key: 2,
                      variant: "secondary",
                      size: "sm",
                      onClick: W[2] || (W[2] = (se) => a("resolve"))
                    }, {
                      default: h(() => [...W[16] || (W[16] = [
                        $(" Resolve ", -1)
                      ])]),
                      _: 1
                    })) : y("", !0)
                  ])) : y("", !0)
                ]);
              }), 128))
            ]),
            t("section", Rp, [
              b(ao, { variant: "section" }, {
                default: h(() => [
                  $("NODES USED (" + m(d.value.nodes.length) + ")", 1)
                ]),
                _: 1
              }),
              d.value.nodes.length === 0 ? (n(), i("div", Lp, " No custom nodes used in this workflow ")) : y("", !0),
              (n(!0), i(B, null, ge(d.value.nodes, (K, ke) => (n(), i("div", {
                key: `${K.name}-${K.status}-${ke}`,
                class: "node-item"
              }, [
                t("span", {
                  class: Be(["node-status", M(K.status)])
                }, m(E(K.status)), 3),
                t("div", Dp, [
                  t("div", Np, [
                    t("span", Up, m(K.name), 1),
                    t("span", Op, m(D(K.status)), 1),
                    K.version ? (n(), i("span", Ap, "v" + m(K.version), 1)) : y("", !0),
                    K.status === "uninstallable" && K.package_id && !C.value.has(K.package_id) ? (n(), i("button", {
                      key: 1,
                      class: "node-install-link",
                      onClick: (se) => Y(K)
                    }, " Install ", 8, zp)) : K.status === "uninstallable" && K.package_id && C.value.has(K.package_id) ? (n(), i("span", Fp, " Queued ")) : y("", !0)
                  ]),
                  K.guidance ? (n(), i("div", Vp, m(K.guidance), 1)) : y("", !0)
                ])
              ]))), 128))
            ])
          ], 64)) : y("", !0)
        ]),
        footer: h(() => [
          b(De, {
            variant: "secondary",
            onClick: W[3] || (W[3] = (K) => a("close"))
          }, {
            default: h(() => [...W[17] || (W[17] = [
              $(" Close ", -1)
            ])]),
            _: 1
          }),
          p.value ? (n(), R(De, {
            key: 0,
            variant: "primary",
            onClick: we
          }, {
            default: h(() => [...W[18] || (W[18] = [
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
        onClose: W[5] || (W[5] = (K) => g.value = !1)
      }, {
        content: h(() => [...W[19] || (W[19] = [
          t("ul", { class: "importance-info-list" }, [
            t("li", null, [
              t("strong", null, "Required"),
              $(" — Must have for workflow to run")
            ]),
            t("li", null, [
              t("strong", null, "Flexible"),
              $(" — Workflow adapts if missing")
            ]),
            t("li", null, [
              t("strong", null, "Optional"),
              $(" — Nice to have, can be skipped")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Wp = /* @__PURE__ */ xe(Bp, [["__scopeId", "data-v-543076d9"]]), rt = co({
  items: [],
  status: "idle"
});
let ws = null;
function sc() {
  return `dl-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function Va(e) {
  return rt.items.find((s) => s.id === e);
}
async function ho() {
  if (rt.status === "downloading") return;
  const e = rt.items.find((s) => s.status === "queued");
  if (!e) {
    rt.status = "idle";
    return;
  }
  rt.status = "downloading", e.status = "downloading", e.progress = 0, e.downloaded = 0;
  try {
    await Gp(e), e.status = "completed", e.progress = 100;
  } catch (s) {
    e.status = "failed", e.error = s instanceof Error ? s.message : "Download failed", e.retries++;
  } finally {
    rt.status = "idle", ho();
  }
}
async function Gp(e) {
  return new Promise((s, o) => {
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
            const _ = u, C = (_ - r) / 1e3, x = e.downloaded - c;
            if (x > 0 && C > 0)
              if (e.speed = x / C, r = _, c = e.downloaded, e.speed > 0 && e.size > 0) {
                const S = e.size - e.downloaded;
                e.eta = S / e.speed;
              } else
                e.eta = 0;
            e.size > 0 && (e.progress = Math.round(e.downloaded / e.size * 100));
            break;
          case "complete":
            d = !0, p(), l.close(), ws = null, s();
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
async function jp() {
  try {
    const e = await fetch("/v2/comfygit/models/pending-downloads");
    if (!e.ok) return;
    const s = await e.json();
    if (!s.pending_downloads || s.pending_downloads.length === 0) return;
    for (const o of s.pending_downloads) {
      if (rt.items.some((l) => l.url === o.url && l.filename === o.filename))
        continue;
      const a = {
        id: sc(),
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
    console.log(`[ComfyGit] Loaded ${s.pending_downloads.length} pending download(s)`);
  } catch (e) {
    console.warn("[ComfyGit] Failed to load pending downloads:", e);
  }
}
function Lo() {
  function e(x) {
    for (const S of x) {
      if (rt.items.some(
        (E) => E.url === S.url && E.targetPath === S.targetPath && ["queued", "downloading", "paused", "completed"].includes(E.status)
      )) {
        console.log(`[ComfyGit] Skipping duplicate download: ${S.filename}`);
        continue;
      }
      const M = {
        id: sc(),
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
  async function s(x) {
    const S = Va(x);
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
        const T = rt.items.findIndex((M) => M.id === x);
        T >= 0 && rt.items.splice(T, 1);
      }
    }
  }
  function o(x) {
    const S = Va(x);
    !S || S.status !== "failed" || (S.status = "queued", S.error = void 0, S.progress = 0, S.downloaded = 0, rt.status === "idle" && ho());
  }
  function a(x) {
    const S = Va(x);
    !S || S.status !== "paused" || (S.status = "queued", rt.status === "idle" && ho());
  }
  function l() {
    const x = rt.items.filter((S) => S.status === "paused");
    for (const S of x)
      S.status = "queued";
    rt.status === "idle" && ho();
  }
  function r(x) {
    const S = rt.items.findIndex((T) => T.id === x);
    S >= 0 && ["completed", "failed", "paused"].includes(rt.items[S].status) && rt.items.splice(S, 1);
  }
  function c() {
    rt.items = rt.items.filter((x) => x.status !== "completed");
  }
  function u() {
    rt.items = rt.items.filter((x) => x.status !== "failed");
  }
  const d = P(
    () => rt.items.find((x) => x.status === "downloading")
  ), v = P(
    () => rt.items.filter((x) => x.status === "queued")
  ), f = P(
    () => rt.items.filter((x) => x.status === "completed")
  ), p = P(
    () => rt.items.filter((x) => x.status === "failed")
  ), w = P(
    () => rt.items.filter((x) => x.status === "paused")
  ), g = P(() => rt.items.length > 0), _ = P(
    () => rt.items.filter((x) => x.status === "queued" || x.status === "downloading").length
  ), C = P(
    () => rt.items.some((x) => x.status === "paused")
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
    hasPaused: C,
    // Actions
    addToQueue: e,
    cancelDownload: s,
    retryDownload: o,
    resumeDownload: a,
    resumeAllPaused: l,
    removeItem: r,
    clearCompleted: c,
    clearFailed: u,
    loadPendingDownloads: jp
  };
}
function oc() {
  const e = k(null), s = k(null), o = k([]), a = k([]), l = k(!1), r = k(null);
  async function c(T, M) {
    var D;
    if (!((D = window.app) != null && D.api))
      throw new Error("ComfyUI API not available");
    const E = await window.app.api.fetchApi(T, M);
    if (!E.ok) {
      const z = await E.json().catch(() => ({})), j = z.error || z.message || `Request failed: ${E.status}`;
      throw new Error(j);
    }
    return E.json();
  }
  async function u(T) {
    l.value = !0, r.value = null;
    try {
      let M;
      return Ao() || (M = await c(
        `/v2/comfygit/workflow/${T}/analyze`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" }
        }
      )), M.nodes.version_gated = M.nodes.version_gated || [], M.nodes.uninstallable = M.nodes.uninstallable || [], M.node_guidance = M.node_guidance || {}, M.package_aliases = M.package_aliases || {}, e.value = M, M;
    } catch (M) {
      const E = M instanceof Error ? M.message : "Unknown error occurred";
      throw r.value = E, M;
    } finally {
      l.value = !1;
    }
  }
  async function d(T, M, E, D) {
    l.value = !0, r.value = null;
    try {
      let z;
      if (!Ao()) {
        const j = Object.fromEntries(M), L = Object.fromEntries(E), q = D ? Array.from(D) : [];
        z = await c(
          `/v2/comfygit/workflow/${T}/apply-resolution`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              node_choices: j,
              model_choices: L,
              skipped_packages: q
            })
          }
        );
      }
      return s.value = z, z;
    } catch (z) {
      const j = z instanceof Error ? z.message : "Unknown error occurred";
      throw r.value = j, z;
    } finally {
      l.value = !1;
    }
  }
  async function v(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-nodes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), o.value = E.results, E.results;
    } catch (E) {
      const D = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = D, E;
    } finally {
      l.value = !1;
    }
  }
  async function f(T, M = 10) {
    l.value = !0, r.value = null;
    try {
      let E;
      return Ao() || (E = await c(
        "/v2/comfygit/workflow/search-models",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: T, limit: M })
        }
      )), a.value = E.results, E.results;
    } catch (E) {
      const D = E instanceof Error ? E.message : "Unknown error occurred";
      throw r.value = D, E;
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
  async function g(T) {
    p.phase = "installing", p.nodesInstalled = [], p.installError = void 0, p.nodeInstallProgress = {
      completedNodes: []
    };
    try {
      return Ao(), await _(T);
    } catch (M) {
      const E = M instanceof Error ? M.message : "Failed to install nodes";
      throw p.installError = E, M;
    }
  }
  async function _(T) {
    var E;
    const M = await c(
      `/v2/comfygit/workflow/${T}/install`,
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
      const D = new Map(((E = M.failed) == null ? void 0 : E.map((z) => [z.node_id, z.error])) || []);
      for (let z = 0; z < p.nodesToInstall.length; z++) {
        const j = p.nodesToInstall[z], L = D.get(j);
        p.nodeInstallProgress.completedNodes.push({
          node_id: j,
          success: !L,
          error: L
        });
      }
    }
    return p.nodesInstalled = M.nodes_installed, p.needsRestart = M.nodes_installed.length > 0, M.failed && M.failed.length > 0 && (p.installError = `${M.failed.length} package(s) failed to install`), M;
  }
  async function C(T, M, E) {
    w(), p.phase = "resolving", r.value = null;
    const D = Object.fromEntries(M), z = Object.fromEntries(E);
    try {
      const j = await fetch(`/v2/comfygit/workflow/${T}/apply-resolution-stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          node_choices: D,
          model_choices: z
        })
      });
      if (!j.ok)
        throw new Error(`Request failed: ${j.status}`);
      if (!j.body)
        throw new Error("No response body");
      const L = j.body.getReader(), q = new TextDecoder();
      let ce = "";
      for (; ; ) {
        const { done: ne, value: Y } = await L.read();
        if (ne) break;
        ce += q.decode(Y, { stream: !0 });
        const we = ce.split(`

`);
        ce = we.pop() || "";
        for (const Z of we) {
          if (!Z.trim()) continue;
          const W = Z.split(`
`);
          let K = "", ke = "";
          for (const se of W)
            se.startsWith("event: ") ? K = se.slice(7) : se.startsWith("data: ") && (ke = se.slice(6));
          if (ke)
            try {
              const se = JSON.parse(ke);
              x(K, se);
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
  function x(T, M) {
    switch (T) {
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
  function S(T, M) {
    const { addToQueue: E } = Lo(), D = M.filter((z) => z.url && z.target_path).map((z) => ({
      workflow: T,
      filename: z.filename,
      url: z.url,
      targetPath: z.target_path,
      size: z.size || 0,
      type: "model"
    }));
    return D.length > 0 && E(D), D.length;
  }
  return {
    // State
    result: e,
    appliedResult: s,
    searchResults: o,
    modelSearchResults: a,
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
    queueModelDownloads: S
  };
}
const Hp = { class: "resolution-stepper" }, qp = { class: "stepper-header" }, Kp = ["onClick"], Jp = {
  key: 0,
  class: "step-icon"
}, Qp = {
  key: 1,
  class: "step-number"
}, Yp = { class: "step-label" }, Xp = {
  key: 0,
  class: "step-connector"
}, Zp = { class: "stepper-content" }, eg = /* @__PURE__ */ be({
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
    return (v, f) => (n(), i("div", Hp, [
      t("div", qp, [
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
          t("div", {
            class: Be(["step-indicator", c(p.id)])
          }, [
            l(p.id) ? (n(), i("span", Jp, "✓")) : (n(), i("span", Qp, m(w + 1), 1))
          ], 2),
          t("div", Yp, m(p.label), 1),
          w < e.steps.length - 1 ? (n(), i("div", Xp)) : y("", !0)
        ], 10, Kp))), 128))
      ]),
      t("div", Zp, [
        ot(v.$slots, "default", {}, void 0)
      ])
    ]));
  }
}), tg = /* @__PURE__ */ xe(eg, [["__scopeId", "data-v-2a7b3af8"]]), sg = /* @__PURE__ */ be({
  __name: "ConfidenceBadge",
  props: {
    confidence: {},
    size: { default: "sm" },
    showPercentage: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = P(() => s.confidence >= 0.9 ? "high" : s.confidence >= 0.7 ? "medium" : "low"), a = P(() => `confidence-${o.value}`), l = P(() => s.showPercentage ? `${Math.round(s.confidence * 100)}%` : o.value.charAt(0).toUpperCase() + o.value.slice(1));
    return (r, c) => (n(), i("span", {
      class: Be(["confidence-badge", a.value, e.size])
    }, m(l.value), 3));
  }
}), qn = /* @__PURE__ */ xe(sg, [["__scopeId", "data-v-17ec4b80"]]), og = { class: "node-info" }, ng = { class: "node-info-text" }, ag = { class: "item-body" }, lg = {
  key: 0,
  class: "resolved-state"
}, ig = {
  key: 1,
  class: "multiple-options"
}, rg = {
  key: 0,
  class: "installed-packs-section"
}, cg = { class: "installed-packs-list" }, ug = ["onClick"], dg = { class: "installed-pack-name" }, mg = { class: "installed-pack-source" }, fg = { class: "options-list" }, vg = ["onClick"], pg = ["name", "value", "checked", "onChange"], gg = { class: "option-content" }, hg = { class: "option-header" }, yg = { class: "option-package-id" }, wg = {
  key: 0,
  class: "option-title"
}, _g = { class: "option-meta" }, kg = {
  key: 0,
  class: "installed-badge"
}, bg = { class: "action-buttons" }, $g = {
  key: 2,
  class: "unresolved"
}, Cg = {
  key: 0,
  class: "installed-packs-section"
}, xg = { class: "installed-packs-list" }, Sg = ["onClick"], Ig = { class: "installed-pack-name" }, Eg = { class: "installed-pack-source" }, Tg = {
  key: 1,
  class: "searching-state"
}, Mg = { class: "options-list" }, Pg = ["onClick"], Rg = ["name", "value"], Lg = { class: "option-content" }, Dg = { class: "option-header" }, Ng = { class: "option-package-id" }, Ug = {
  key: 0,
  class: "option-description"
}, Og = { class: "option-meta" }, Ag = {
  key: 0,
  class: "installed-badge"
}, zg = {
  key: 3,
  class: "unresolved-message"
}, Fg = { class: "action-buttons" }, Vg = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s;
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
      t("div", og, [
        t("span", ng, [
          p[7] || (p[7] = $("Node type: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", u.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", ag, [
        r.value ? (n(), i("div", lg, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", ig, [
          c.value.length > 0 ? (n(), i("div", rg, [
            p[9] || (p[9] = t("p", { class: "options-prompt" }, "Or map to an installed node pack:", -1)),
            t("div", cg, [
              (n(!0), i(B, null, ge(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", dg, m(w.package_id), 1),
                t("span", mg, m(v(w.source)), 1)
              ], 8, ug))), 128))
            ])
          ])) : y("", !0),
          p[13] || (p[13] = t("p", { class: "options-prompt" }, "Potential matches:", -1)),
          t("div", fg, [
            (n(!0), i(B, null, ge(e.options, (w, g) => (n(), i("label", {
              key: w.package_id,
              class: Be(["option-card", { selected: e.selectedOptionIndex === g }]),
              onClick: (_) => d(g)
            }, [
              t("input", {
                type: "radio",
                name: `node-option-${e.nodeType}`,
                value: g,
                checked: e.selectedOptionIndex === g,
                onChange: (_) => d(g)
              }, null, 40, pg),
              t("div", gg, [
                t("div", hg, [
                  t("span", yg, m(w.package_id), 1),
                  b(qn, {
                    confidence: w.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                w.title && w.title !== w.package_id ? (n(), i("div", wg, m(w.title), 1)) : y("", !0),
                t("div", _g, [
                  w.is_installed ? (n(), i("span", kg, "Already Installed")) : y("", !0)
                ])
              ])
            ], 10, vg))), 128))
          ]),
          t("div", bg, [
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
        ])) : (n(), i("div", $g, [
          c.value.length > 0 ? (n(), i("div", Cg, [
            p[14] || (p[14] = t("p", { class: "options-prompt" }, "Map to an installed node pack:", -1)),
            t("div", xg, [
              (n(!0), i(B, null, ge(c.value, (w) => (n(), i("button", {
                key: w.package_id,
                type: "button",
                class: "installed-pack-chip",
                onClick: (g) => a("installed-pack-selected", w.package_id)
              }, [
                t("span", Ig, m(w.package_id), 1),
                t("span", Eg, m(v(w.source)), 1)
              ], 8, Sg))), 128))
            ])
          ])) : y("", !0),
          e.isSearching ? (n(), i("div", Tg, [...p[15] || (p[15] = [
            t("span", { class: "searching-spinner" }, null, -1),
            t("span", null, "Searching registry...", -1)
          ])])) : e.searchResults && e.searchResults.length > 0 ? (n(), i(B, { key: 2 }, [
            p[16] || (p[16] = t("p", { class: "options-prompt" }, "Potential matches found:", -1)),
            t("div", Mg, [
              (n(!0), i(B, null, ge(e.searchResults.slice(0, 5), (w, g) => (n(), i("label", {
                key: w.package_id,
                class: "option-card",
                onClick: (_) => a("search-result-selected", w)
              }, [
                t("input", {
                  type: "radio",
                  name: `search-result-${e.nodeType}`,
                  value: g
                }, null, 8, Rg),
                t("div", Lg, [
                  t("div", Dg, [
                    t("span", Ng, m(w.package_id), 1),
                    b(qn, {
                      confidence: w.match_confidence,
                      size: "sm"
                    }, null, 8, ["confidence"])
                  ]),
                  w.description ? (n(), i("div", Ug, m(l(w.description)), 1)) : y("", !0),
                  t("div", Og, [
                    w.is_installed ? (n(), i("span", Ag, "Already Installed")) : y("", !0)
                  ])
                ])
              ], 8, Pg))), 128))
            ])
          ], 64)) : (n(), i("div", zg, [...p[17] || (p[17] = [
            t("span", { class: "warning-icon" }, "⚠", -1),
            t("span", null, "No matching package found in registry", -1)
          ])])),
          t("div", Fg, [
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
}), Bg = /* @__PURE__ */ xe(Vg, [["__scopeId", "data-v-fb0bbf03"]]), Wg = { class: "item-navigator" }, Gg = { class: "nav-item-info" }, jg = ["title"], Hg = { class: "nav-controls" }, qg = { class: "nav-arrows" }, Kg = ["disabled"], Jg = ["disabled"], Qg = { class: "nav-position" }, Yg = /* @__PURE__ */ be({
  __name: "ItemNavigator",
  props: {
    itemName: {},
    currentIndex: {},
    totalItems: {}
  },
  emits: ["prev", "next"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", Wg, [
      t("div", Gg, [
        t("code", {
          class: "item-name",
          title: e.itemName
        }, m(e.itemName), 9, jg)
      ]),
      t("div", Hg, [
        t("div", qg, [
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === 0,
            onClick: l[0] || (l[0] = (r) => o("prev")),
            title: "Previous item"
          }, " ← ", 8, Kg),
          t("button", {
            class: "nav-arrow",
            disabled: e.currentIndex === e.totalItems - 1,
            onClick: l[1] || (l[1] = (r) => o("next")),
            title: "Next item"
          }, " → ", 8, Jg)
        ]),
        t("span", Qg, m(e.currentIndex + 1) + "/" + m(e.totalItems), 1)
      ])
    ]));
  }
}), nc = /* @__PURE__ */ xe(Yg, [["__scopeId", "data-v-74af7920"]]), Xg = ["type", "value", "placeholder", "disabled"], Zg = {
  key: 0,
  class: "base-input-error"
}, eh = /* @__PURE__ */ be({
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
      class: Be(["base-input-wrapper", { "full-width": e.fullWidth, error: !!e.error }])
    }, [
      t("input", {
        type: e.type,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        class: Be(["base-input", { error: !!e.error }]),
        onInput: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.value)),
        onKeyup: [
          o[1] || (o[1] = ds((a) => s.$emit("enter"), ["enter"])),
          o[2] || (o[2] = ds((a) => s.$emit("escape"), ["escape"]))
        ]
      }, null, 42, Xg),
      e.error ? (n(), i("span", Zg, m(e.error), 1)) : y("", !0)
    ], 2));
  }
}), bt = /* @__PURE__ */ xe(eh, [["__scopeId", "data-v-9ba02cdc"]]), th = { class: "node-resolution-step" }, sh = {
  key: 0,
  class: "auto-resolved-section"
}, oh = { class: "section-header" }, nh = { class: "stat-badge" }, ah = { class: "resolved-packages-list" }, lh = { class: "package-info" }, ih = { class: "package-id" }, rh = { class: "node-count" }, ch = { class: "package-actions" }, uh = {
  key: 0,
  class: "status-badge install"
}, dh = {
  key: 1,
  class: "status-badge skip"
}, mh = ["onClick"], fh = {
  key: 1,
  class: "section-divider"
}, vh = { class: "step-header" }, ph = { class: "stat-badge" }, gh = {
  key: 1,
  class: "step-body"
}, hh = {
  key: 3,
  class: "empty-state"
}, yh = { class: "node-modal-body" }, wh = { class: "node-search-results-container" }, _h = {
  key: 0,
  class: "node-search-results"
}, kh = ["onClick"], bh = { class: "node-result-header" }, $h = { class: "node-result-package-id" }, Ch = {
  key: 0,
  class: "node-result-description"
}, xh = {
  key: 1,
  class: "node-empty-state"
}, Sh = {
  key: 2,
  class: "node-empty-state"
}, Ih = {
  key: 3,
  class: "node-empty-state"
}, Eh = { class: "node-manual-entry-modal" }, Th = { class: "node-modal-body" }, Mh = { class: "node-modal-actions" }, Ph = /* @__PURE__ */ be({
  __name: "NodeResolutionStep",
  props: {
    nodes: {},
    nodeChoices: {},
    autoResolvedPackages: {},
    skippedPackages: {},
    installedNodePacks: {}
  },
  emits: ["mark-optional", "skip", "option-selected", "manual-entry", "clear-choice", "package-skip"],
  setup(e, { emit: s }) {
    const o = e, a = s, { searchNodes: l } = oc(), r = k(0), c = k(!1), u = k(!1), d = k(""), v = k(""), f = k([]), p = k(!1), w = k(/* @__PURE__ */ new Map()), g = k(/* @__PURE__ */ new Set()), _ = k(!1);
    function C() {
      _.value && fe(), _.value = !1;
    }
    const x = P(() => o.nodes[r.value]), S = P(() => o.nodes.filter((te) => o.nodeChoices.has(te.node_type)).length), T = P(() => x.value ? w.value.get(x.value.node_type) || [] : []), M = P(() => x.value ? g.value.has(x.value.node_type) : !1);
    yt(x, async (te) => {
      var oe;
      te && ((oe = te.options) != null && oe.length || w.value.has(te.node_type) || g.value.has(te.node_type) || o.nodeChoices.has(te.node_type) || await E(te.node_type));
    }, { immediate: !0 });
    async function E(te) {
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
    function j(te) {
      a("package-skip", te);
    }
    const L = P(() => {
      var oe;
      if (!x.value) return "not-found";
      const te = o.nodeChoices.get(x.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return "install";
          case "optional":
            return "optional";
          case "skip":
            return "skip";
        }
      return (oe = x.value.options) != null && oe.length ? "ambiguous" : "not-found";
    }), q = P(() => {
      var oe;
      if (!x.value) return;
      const te = o.nodeChoices.get(x.value.node_type);
      if (te)
        switch (te.action) {
          case "install":
            return te.package_id ? `→ ${te.package_id}` : "Installing";
          case "optional":
            return "Optional";
          case "skip":
            return "Skipped";
        }
      return (oe = x.value.options) != null && oe.length ? `${x.value.options.length} matches` : "Not Found";
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
      x.value && (a("mark-optional", x.value.node_type), Pt(() => ne()));
    }
    function we() {
      x.value && (a("skip", x.value.node_type), Pt(() => ne()));
    }
    function Z(te) {
      x.value && (a("option-selected", x.value.node_type, te), Pt(() => ne()));
    }
    function W() {
      x.value && a("clear-choice", x.value.node_type);
    }
    function K() {
      x.value && (d.value = x.value.node_type, f.value = T.value, c.value = !0, ye(d.value));
    }
    function ke() {
      v.value = "", u.value = !0;
    }
    function se(te) {
      x.value && (a("manual-entry", x.value.node_type, te), Pt(() => ne()));
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
    function ee(te) {
      x.value && (a("manual-entry", x.value.node_type, te.package_id), fe(), Pt(() => ne()));
    }
    function Q(te) {
      x.value && (a("manual-entry", x.value.node_type, te.package_id), Pt(() => ne()));
    }
    function $e() {
      !x.value || !v.value.trim() || (a("manual-entry", x.value.node_type, v.value.trim()), U(), Pt(() => ne()));
    }
    return (te, oe) => {
      var Re, ve;
      return n(), i("div", th, [
        e.autoResolvedPackages.length > 0 ? (n(), i("div", sh, [
          t("div", oh, [
            oe[6] || (oe[6] = t("div", { class: "section-info" }, [
              t("h4", { class: "section-title" }, "Packages to Install"),
              t("p", { class: "section-description" }, " These packages were automatically resolved. You can skip any if needed. ")
            ], -1)),
            t("span", nh, m(D.value) + "/" + m(e.autoResolvedPackages.length) + " to install", 1)
          ]),
          t("div", ah, [
            (n(!0), i(B, null, ge(e.autoResolvedPackages, (le) => (n(), i("div", {
              key: le.package_id,
              class: "resolved-package-item"
            }, [
              t("div", lh, [
                t("code", ih, m(le.package_id), 1),
                t("span", rh, m(le.node_types_count) + " node type" + m(le.node_types_count > 1 ? "s" : ""), 1)
              ]),
              t("div", ch, [
                z(le.package_id) ? (n(), i("span", dh, " SKIPPED ")) : (n(), i("span", uh, " WILL INSTALL ")),
                t("button", {
                  class: "toggle-skip-btn",
                  onClick: (I) => j(le.package_id)
                }, m(z(le.package_id) ? "Include" : "Skip"), 9, mh)
              ])
            ]))), 128))
          ])
        ])) : y("", !0),
        e.autoResolvedPackages.length > 0 && e.nodes.length > 0 ? (n(), i("div", fh)) : y("", !0),
        e.nodes.length > 0 ? (n(), i(B, { key: 2 }, [
          t("div", vh, [
            oe[7] || (oe[7] = t("div", { class: "step-info" }, [
              t("h3", { class: "step-title" }, "Resolve Missing Nodes"),
              t("p", { class: "step-description" }, " Browse unresolved nodes and choose how to handle each one. Unaddressed items will be skipped. ")
            ], -1)),
            t("span", ph, m(S.value) + "/" + m(e.nodes.length) + " resolved", 1)
          ]),
          x.value ? (n(), R(nc, {
            key: 0,
            "item-name": x.value.node_type,
            "current-index": r.value,
            "total-items": e.nodes.length,
            onPrev: oe[0] || (oe[0] = (le) => ce(r.value - 1)),
            onNext: oe[1] || (oe[1] = (le) => ce(r.value + 1))
          }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
          x.value ? (n(), i("div", gh, [
            b(Bg, {
              "node-type": x.value.node_type,
              "has-multiple-options": !!((Re = x.value.options) != null && Re.length),
              options: x.value.options,
              choice: (ve = e.nodeChoices) == null ? void 0 : ve.get(x.value.node_type),
              status: L.value,
              "status-label": q.value,
              "search-results": T.value,
              "is-searching": M.value,
              "installed-node-packs": e.installedNodePacks,
              onMarkOptional: Y,
              onSkip: we,
              onManualEntry: ke,
              onSearch: K,
              onOptionSelected: Z,
              onClearChoice: W,
              onSearchResultSelected: Q,
              onInstalledPackSelected: se
            }, null, 8, ["node-type", "has-multiple-options", "options", "choice", "status", "status-label", "search-results", "is-searching", "installed-node-packs"])
          ])) : y("", !0)
        ], 64)) : y("", !0),
        e.nodes.length === 0 && e.autoResolvedPackages.length === 0 ? (n(), i("div", hh, [...oe[8] || (oe[8] = [
          t("p", null, "No nodes need resolution.", -1)
        ])])) : y("", !0),
        (n(), R(Lt, { to: "body" }, [
          c.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onMousedown: oe[4] || (oe[4] = vt((le) => _.value = !0, ["self"])),
            onMouseup: vt(C, ["self"])
          }, [
            t("div", {
              class: "node-search-modal",
              onMousedown: oe[3] || (oe[3] = (le) => _.value = !1)
            }, [
              t("div", { class: "node-modal-header" }, [
                oe[9] || (oe[9] = t("h4", null, "Search Node Packages", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: fe
                }, "✕")
              ]),
              t("div", yh, [
                b(bt, {
                  modelValue: d.value,
                  "onUpdate:modelValue": oe[2] || (oe[2] = (le) => d.value = le),
                  placeholder: "Search by node type, package name...",
                  onInput: Pe
                }, null, 8, ["modelValue"]),
                t("div", wh, [
                  f.value.length > 0 ? (n(), i("div", _h, [
                    (n(!0), i(B, null, ge(f.value, (le) => (n(), i("div", {
                      key: le.package_id,
                      class: "node-search-result-item",
                      onClick: (I) => ee(le)
                    }, [
                      t("div", bh, [
                        t("code", $h, m(le.package_id), 1),
                        le.match_confidence ? (n(), R(qn, {
                          key: 0,
                          confidence: le.match_confidence,
                          size: "sm"
                        }, null, 8, ["confidence"])) : y("", !0)
                      ]),
                      le.description ? (n(), i("div", Ch, m(le.description), 1)) : y("", !0)
                    ], 8, kh))), 128))
                  ])) : p.value ? (n(), i("div", xh, "Searching...")) : d.value ? (n(), i("div", Sh, 'No packages found matching "' + m(d.value) + '"', 1)) : (n(), i("div", Ih, "Enter a search term"))
                ])
              ])
            ], 32)
          ], 32)) : y("", !0)
        ])),
        (n(), R(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "node-resolution-modal-overlay",
            onClick: vt(U, ["self"])
          }, [
            t("div", Eh, [
              t("div", { class: "node-modal-header" }, [
                oe[10] || (oe[10] = t("h4", null, "Enter Package Manually", -1)),
                t("button", {
                  class: "node-modal-close-btn",
                  onClick: U
                }, "✕")
              ]),
              t("div", Th, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": oe[5] || (oe[5] = (le) => v.value = le),
                  label: "Package ID or GitHub URL",
                  placeholder: "e.g., comfyui-my-package"
                }, null, 8, ["modelValue"]),
                t("div", Mh, [
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
}), Rh = /* @__PURE__ */ xe(Ph, [["__scopeId", "data-v-94c6a438"]]), Lh = { class: "node-info" }, Dh = { class: "node-info-text" }, Nh = { class: "item-body" }, Uh = {
  key: 0,
  class: "resolved-state"
}, Oh = {
  key: 1,
  class: "multiple-options"
}, Ah = { class: "options-list" }, zh = ["onClick"], Fh = ["name", "value", "checked", "onChange"], Vh = { class: "option-content" }, Bh = { class: "option-header" }, Wh = { class: "option-filename" }, Gh = { class: "option-meta" }, jh = { class: "option-size" }, Hh = { class: "option-category" }, qh = { class: "option-path" }, Kh = { class: "action-buttons" }, Jh = {
  key: 2,
  class: "unresolved"
}, Qh = { class: "action-buttons" }, Yh = /* @__PURE__ */ be({
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
    const o = e, a = s, l = P(() => !!o.choice);
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
      t("div", Lh, [
        t("span", Dh, [
          v[7] || (v[7] = $("Used by: ", -1)),
          t("code", null, m(e.nodeType), 1)
        ]),
        e.statusLabel ? (n(), i("span", {
          key: 0,
          class: Be(["status-badge", r.value])
        }, m(e.statusLabel), 3)) : y("", !0)
      ]),
      t("div", Nh, [
        l.value ? (n(), i("div", Uh, [
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
        ])) : e.hasMultipleOptions && e.options ? (n(), i("div", Oh, [
          v[12] || (v[12] = t("p", { class: "options-prompt" }, "Select a model to use:", -1)),
          t("div", Ah, [
            (n(!0), i(B, null, ge(e.options, (f, p) => (n(), i("label", {
              key: f.model.hash,
              class: Be(["option-card", { selected: e.selectedOptionIndex === p }]),
              onClick: (w) => c(p)
            }, [
              t("input", {
                type: "radio",
                name: `model-option-${e.filename}`,
                value: p,
                checked: e.selectedOptionIndex === p,
                onChange: (w) => c(p)
              }, null, 40, Fh),
              t("div", Vh, [
                t("div", Bh, [
                  t("span", Wh, m(f.model.filename), 1),
                  b(qn, {
                    confidence: f.match_confidence,
                    size: "sm"
                  }, null, 8, ["confidence"])
                ]),
                t("div", Gh, [
                  t("span", jh, m(u(f.model.size)), 1),
                  t("span", Hh, m(f.model.category), 1)
                ]),
                t("div", qh, m(f.model.relative_path), 1)
              ])
            ], 10, zh))), 128))
          ]),
          t("div", Kh, [
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
        ])) : (n(), i("div", Jh, [
          v[16] || (v[16] = t("div", { class: "unresolved-message" }, [
            t("span", { class: "warning-icon" }, "⚠"),
            t("span", null, "Model not found in workspace")
          ], -1)),
          t("div", Qh, [
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
}), Xh = /* @__PURE__ */ xe(Yh, [["__scopeId", "data-v-8a82fefa"]]), Zh = { class: "model-resolution-step" }, ey = { class: "step-header" }, ty = { class: "step-info" }, sy = { class: "step-title" }, oy = { class: "step-description" }, ny = { class: "stat-badge" }, ay = {
  key: 1,
  class: "step-body"
}, ly = {
  key: 2,
  class: "empty-state"
}, iy = { class: "model-search-modal" }, ry = { class: "model-modal-body" }, cy = {
  key: 0,
  class: "model-search-results"
}, uy = ["onClick"], dy = { class: "model-result-header" }, my = { class: "model-result-filename" }, fy = { class: "model-result-meta" }, vy = { class: "model-result-category" }, py = { class: "model-result-size" }, gy = {
  key: 0,
  class: "model-result-path"
}, hy = {
  key: 1,
  class: "model-no-results"
}, yy = {
  key: 2,
  class: "model-searching"
}, wy = { class: "model-download-url-modal" }, _y = { class: "model-modal-body" }, ky = { class: "model-input-group" }, by = { class: "model-input-group" }, $y = { class: "model-modal-actions" }, Cy = /* @__PURE__ */ be({
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
    function a(se) {
      var fe;
      return se && ((fe = o[se]) == null ? void 0 : fe[0]) || null;
    }
    const l = e, r = s, c = k(0), u = k(!1), d = k(!1), v = k(""), f = k(""), p = k(""), w = k([]), g = k(!1), _ = P(() => l.models[c.value]), C = P(() => l.models.some((se) => se.is_download_intent)), x = P(() => l.models.filter(
      (se) => l.modelChoices.has(se.filename) || se.is_download_intent
    ).length), S = P(() => {
      var fe;
      if (!_.value) return "";
      const se = a((fe = _.value.reference) == null ? void 0 : fe.node_type);
      return se ? `${se}/${_.value.filename}` : "";
    }), T = P(() => {
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
    function E(se) {
      se >= 0 && se < l.models.length && (c.value = se);
    }
    function D() {
      var se;
      for (let fe = c.value + 1; fe < l.models.length; fe++) {
        const U = l.models[fe];
        if (!U.is_download_intent && !((se = l.modelChoices) != null && se.has(U.filename))) {
          E(fe);
          return;
        }
      }
    }
    function z() {
      _.value && (r("mark-optional", _.value.filename), Pt(() => D()));
    }
    function j() {
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
    function Z() {
      g.value = !0, setTimeout(() => {
        g.value = !1;
      }, 300);
    }
    function W(se) {
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
      return n(), i("div", Zh, [
        t("div", ey, [
          t("div", ty, [
            t("h3", sy, m(C.value ? "Review Model Downloads" : "Resolve Missing Models"), 1),
            t("p", oy, m(C.value ? "Review pending downloads. Mark as optional or skip to cancel." : "Browse unresolved models and choose how to handle each one. Unaddressed items will be skipped."), 1)
          ]),
          t("span", ny, m(x.value) + "/" + m(e.models.length) + " resolved", 1)
        ]),
        _.value ? (n(), R(nc, {
          key: 0,
          "item-name": _.value.filename,
          "current-index": c.value,
          "total-items": e.models.length,
          onPrev: fe[0] || (fe[0] = (ye) => E(c.value - 1)),
          onNext: fe[1] || (fe[1] = (ye) => E(c.value + 1))
        }, null, 8, ["item-name", "current-index", "total-items"])) : y("", !0),
        _.value ? (n(), i("div", ay, [
          b(Xh, {
            filename: _.value.filename,
            "node-type": ((U = _.value.reference) == null ? void 0 : U.node_type) || "Unknown",
            "has-multiple-options": !!((me = _.value.options) != null && me.length),
            options: _.value.options,
            choice: (Pe = e.modelChoices) == null ? void 0 : Pe.get(_.value.filename),
            status: T.value,
            "status-label": M.value,
            onMarkOptional: z,
            onSkip: j,
            onDownloadUrl: ne,
            onSearch: ce,
            onOptionSelected: L,
            onClearChoice: q
          }, null, 8, ["filename", "node-type", "has-multiple-options", "options", "choice", "status", "status-label"])
        ])) : (n(), i("div", ly, [...fe[5] || (fe[5] = [
          t("p", null, "No models need resolution.", -1)
        ])])),
        (n(), R(Lt, { to: "body" }, [
          u.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(Y, ["self"])
          }, [
            t("div", iy, [
              t("div", { class: "model-modal-header" }, [
                fe[6] || (fe[6] = t("h4", null, "Search Workspace Models", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: Y
                }, "✕")
              ]),
              t("div", ry, [
                b(bt, {
                  modelValue: v.value,
                  "onUpdate:modelValue": fe[2] || (fe[2] = (ye) => v.value = ye),
                  placeholder: "Search by filename, category...",
                  onInput: Z
                }, null, 8, ["modelValue"]),
                w.value.length > 0 ? (n(), i("div", cy, [
                  (n(!0), i(B, null, ge(w.value, (ye) => (n(), i("div", {
                    key: ye.hash,
                    class: "model-search-result-item",
                    onClick: (ee) => W()
                  }, [
                    t("div", dy, [
                      t("code", my, m(ye.filename), 1)
                    ]),
                    t("div", fy, [
                      t("span", vy, m(ye.category), 1),
                      t("span", py, m(ke(ye.size)), 1)
                    ]),
                    ye.relative_path ? (n(), i("div", gy, m(ye.relative_path), 1)) : y("", !0)
                  ], 8, uy))), 128))
                ])) : v.value && !g.value ? (n(), i("div", hy, ' No models found matching "' + m(v.value) + '" ', 1)) : y("", !0),
                g.value ? (n(), i("div", yy, "Searching...")) : y("", !0)
              ])
            ])
          ])) : y("", !0)
        ])),
        (n(), R(Lt, { to: "body" }, [
          d.value ? (n(), i("div", {
            key: 0,
            class: "model-resolution-modal-overlay",
            onClick: vt(we, ["self"])
          }, [
            t("div", wy, [
              t("div", { class: "model-modal-header" }, [
                fe[7] || (fe[7] = t("h4", null, "Enter Download URL", -1)),
                t("button", {
                  class: "model-modal-close-btn",
                  onClick: we
                }, "✕")
              ]),
              t("div", _y, [
                t("div", ky, [
                  fe[8] || (fe[8] = t("label", { class: "model-input-label" }, "Download URL", -1)),
                  b(bt, {
                    modelValue: f.value,
                    "onUpdate:modelValue": fe[3] || (fe[3] = (ye) => f.value = ye),
                    placeholder: "https://civitai.com/api/download/..."
                  }, null, 8, ["modelValue"])
                ]),
                t("div", by, [
                  fe[9] || (fe[9] = t("label", { class: "model-input-label" }, "Host Path", -1)),
                  b(bt, {
                    modelValue: p.value,
                    "onUpdate:modelValue": fe[4] || (fe[4] = (ye) => p.value = ye),
                    placeholder: S.value || "e.g. loras/model.safetensors"
                  }, null, 8, ["modelValue", "placeholder"])
                ]),
                t("div", $y, [
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
}), xy = /* @__PURE__ */ xe(Cy, [["__scopeId", "data-v-5c700bfa"]]), Sy = { class: "applying-step" }, Iy = {
  key: 0,
  class: "phase-content"
}, Ey = {
  key: 1,
  class: "phase-content"
}, Ty = { class: "phase-description" }, My = { class: "overall-progress" }, Py = { class: "progress-bar" }, Ry = { class: "progress-label" }, Ly = { class: "install-list" }, Dy = { class: "install-icon" }, Ny = { key: 0 }, Uy = {
  key: 1,
  class: "spinner"
}, Oy = { key: 2 }, Ay = { key: 3 }, zy = {
  key: 0,
  class: "install-error"
}, Fy = {
  key: 2,
  class: "phase-content"
}, Vy = { class: "phase-header" }, By = { class: "phase-title" }, Wy = { class: "completion-summary" }, Gy = {
  key: 0,
  class: "summary-item success"
}, jy = { class: "summary-text" }, Hy = {
  key: 1,
  class: "summary-item error"
}, qy = { class: "summary-text" }, Ky = {
  key: 2,
  class: "failed-list"
}, Jy = { class: "failed-node-id" }, Qy = { class: "failed-error" }, Yy = {
  key: 4,
  class: "summary-item success"
}, Xy = {
  key: 5,
  class: "restart-prompt"
}, Zy = {
  key: 3,
  class: "phase-content error"
}, e1 = { class: "error-message" }, t1 = /* @__PURE__ */ be({
  __name: "ApplyingStep",
  props: {
    progress: {}
  },
  emits: ["restart", "retry-failed"],
  setup(e) {
    const s = e, o = P(() => {
      var v, f;
      const u = ((v = s.progress.nodeInstallProgress) == null ? void 0 : v.totalNodes) || s.progress.nodesToInstall.length;
      if (!u) return 0;
      const d = ((f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.length) ?? 0;
      return Math.round(d / u * 100);
    }), a = P(() => {
      var u;
      return ((u = s.progress.nodeInstallProgress) == null ? void 0 : u.completedNodes.filter((d) => !d.success)) || [];
    }), l = P(() => a.value.length > 0);
    function r(u, d) {
      var f, p;
      const v = (f = s.progress.nodeInstallProgress) == null ? void 0 : f.completedNodes.find((w) => w.node_id === u);
      return v ? v.success ? "complete" : "failed" : ((p = s.progress.nodeInstallProgress) == null ? void 0 : p.currentIndex) === d ? "installing" : "pending";
    }
    function c(u) {
      var d, v;
      return (v = (d = s.progress.nodeInstallProgress) == null ? void 0 : d.completedNodes.find((f) => f.node_id === u)) == null ? void 0 : v.error;
    }
    return (u, d) => {
      var v, f, p, w;
      return n(), i("div", Sy, [
        e.progress.phase === "resolving" ? (n(), i("div", Iy, [...d[2] || (d[2] = [
          t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Applying Resolution")
          ], -1),
          t("p", { class: "phase-description" }, "Processing your choices...", -1)
        ])])) : e.progress.phase === "installing" ? (n(), i("div", Ey, [
          d[3] || (d[3] = t("div", { class: "phase-header" }, [
            t("div", { class: "loading-spinner" }),
            t("h3", { class: "phase-title" }, "Installing Node Packages")
          ], -1)),
          t("p", Ty, " Installing " + m((((v = e.progress.nodeInstallProgress) == null ? void 0 : v.currentIndex) ?? 0) + 1) + " of " + m(((f = e.progress.nodeInstallProgress) == null ? void 0 : f.totalNodes) ?? e.progress.nodesToInstall.length) + " packages... ", 1),
          t("div", My, [
            t("div", Py, [
              t("div", {
                class: "progress-fill",
                style: Rt({ width: `${o.value}%` })
              }, null, 4)
            ]),
            t("span", Ry, m(((p = e.progress.nodeInstallProgress) == null ? void 0 : p.completedNodes.length) ?? 0) + " / " + m(((w = e.progress.nodeInstallProgress) == null ? void 0 : w.totalNodes) ?? e.progress.nodesToInstall.length), 1)
          ]),
          t("div", Ly, [
            (n(!0), i(B, null, ge(e.progress.nodesToInstall, (g, _) => (n(), i("div", {
              key: g,
              class: Be(["install-item", r(g, _)])
            }, [
              t("span", Dy, [
                r(g, _) === "pending" ? (n(), i("span", Ny, "○")) : r(g, _) === "installing" ? (n(), i("span", Uy, "◌")) : r(g, _) === "complete" ? (n(), i("span", Oy, "✓")) : r(g, _) === "failed" ? (n(), i("span", Ay, "✗")) : y("", !0)
              ]),
              t("code", null, m(g), 1),
              c(g) ? (n(), i("span", zy, m(c(g)), 1)) : y("", !0)
            ], 2))), 128))
          ])
        ])) : e.progress.phase === "complete" ? (n(), i("div", Fy, [
          t("div", Vy, [
            t("span", {
              class: Be(["phase-icon", l.value ? "warning" : "success"])
            }, m(l.value ? "⚠" : "✓"), 3),
            t("h3", By, m(l.value ? "Resolution Completed with Errors" : "Resolution Complete"), 1)
          ]),
          t("div", Wy, [
            e.progress.nodesInstalled.length > 0 ? (n(), i("div", Gy, [
              d[4] || (d[4] = t("span", { class: "summary-icon" }, "✓", -1)),
              t("span", jy, m(e.progress.nodesInstalled.length) + " node package" + m(e.progress.nodesInstalled.length > 1 ? "s" : "") + " installed", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Hy, [
              d[5] || (d[5] = t("span", { class: "summary-icon" }, "✗", -1)),
              t("span", qy, m(a.value.length) + " package" + m(a.value.length > 1 ? "s" : "") + " failed to install", 1)
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("div", Ky, [
              (n(!0), i(B, null, ge(a.value, (g) => (n(), i("div", {
                key: g.node_id,
                class: "failed-item"
              }, [
                t("code", Jy, m(g.node_id), 1),
                t("span", Qy, m(g.error), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.length > 0 ? (n(), i("button", {
              key: 3,
              class: "retry-button",
              onClick: d[0] || (d[0] = (g) => u.$emit("retry-failed"))
            }, " Retry Failed (" + m(a.value.length) + ") ", 1)) : y("", !0),
            l.value ? y("", !0) : (n(), i("div", Yy, [...d[6] || (d[6] = [
              t("span", { class: "summary-icon" }, "✓", -1),
              t("span", { class: "summary-text" }, "Workflow dependencies resolved", -1)
            ])])),
            d[8] || (d[8] = t("p", { class: "summary-note" }, "Model downloads (if any) will continue in the background.", -1)),
            e.progress.needsRestart ? (n(), i("div", Xy, [
              d[7] || (d[7] = t("div", { class: "restart-warning" }, [
                t("span", { class: "warning-icon" }, "⚠"),
                t("div", { class: "warning-content" }, [
                  t("strong", null, "Restart Required"),
                  t("p", null, "Node packages were installed. ComfyUI needs to restart to load them.")
                ])
              ], -1)),
              t("button", {
                class: "restart-button",
                onClick: d[1] || (d[1] = (g) => u.$emit("restart"))
              }, " Restart ComfyUI ")
            ])) : y("", !0)
          ])
        ])) : e.progress.phase === "error" ? (n(), i("div", Zy, [
          d[9] || (d[9] = t("div", { class: "phase-header" }, [
            t("span", { class: "phase-icon error" }, "✗"),
            t("h3", { class: "phase-title" }, "Resolution Failed")
          ], -1)),
          t("p", e1, m(e.progress.error), 1)
        ])) : y("", !0)
      ]);
    };
  }
}), s1 = /* @__PURE__ */ xe(t1, [["__scopeId", "data-v-5efaae58"]]), o1 = {
  key: 0,
  class: "loading-state"
}, n1 = {
  key: 1,
  class: "wizard-content"
}, a1 = {
  key: 0,
  class: "step-content"
}, l1 = { class: "analysis-summary" }, i1 = { class: "analysis-header" }, r1 = { class: "summary-description" }, c1 = { class: "stats-grid" }, u1 = { class: "stat-card" }, d1 = { class: "stat-items" }, m1 = {
  key: 0,
  class: "stat-item success"
}, f1 = { class: "stat-count" }, v1 = {
  key: 1,
  class: "stat-item info"
}, p1 = { class: "stat-count" }, g1 = {
  key: 2,
  class: "stat-item warning"
}, h1 = { class: "stat-count" }, y1 = {
  key: 3,
  class: "stat-item warning"
}, w1 = { class: "stat-count" }, _1 = {
  key: 4,
  class: "stat-item warning"
}, k1 = { class: "stat-count" }, b1 = {
  key: 5,
  class: "stat-item error"
}, $1 = { class: "stat-count" }, C1 = { class: "stat-card" }, x1 = { class: "stat-items" }, S1 = { class: "stat-item success" }, I1 = { class: "stat-count" }, E1 = {
  key: 0,
  class: "stat-item info"
}, T1 = { class: "stat-count" }, M1 = {
  key: 1,
  class: "stat-item warning"
}, P1 = { class: "stat-count" }, R1 = {
  key: 2,
  class: "stat-item warning"
}, L1 = { class: "stat-count" }, D1 = {
  key: 3,
  class: "stat-item error"
}, N1 = { class: "stat-count" }, U1 = {
  key: 0,
  class: "status-message warning"
}, O1 = { class: "status-text" }, A1 = {
  key: 1,
  class: "status-message warning"
}, z1 = { class: "status-text" }, F1 = {
  key: 2,
  class: "status-message info"
}, V1 = { class: "status-text" }, B1 = {
  key: 3,
  class: "status-message info"
}, W1 = { class: "status-text" }, G1 = {
  key: 4,
  class: "status-message info"
}, j1 = { class: "status-text" }, H1 = {
  key: 5,
  class: "status-message warning"
}, q1 = { class: "status-text" }, K1 = {
  key: 6,
  class: "status-message success"
}, J1 = {
  key: 7,
  class: "category-mismatch-section"
}, Q1 = { class: "mismatch-list" }, Y1 = { class: "mismatch-path" }, X1 = { class: "mismatch-target" }, Z1 = {
  key: 8,
  class: "category-mismatch-section"
}, ew = { class: "mismatch-list" }, tw = { class: "mismatch-path" }, sw = { class: "status-text" }, ow = {
  key: 1,
  class: "step-content node-step-content"
}, nw = {
  key: 0,
  class: "community-node-section"
}, aw = { class: "community-node-header" }, lw = { class: "community-node-title" }, iw = { class: "community-node-list" }, rw = { class: "community-node-info" }, cw = { class: "community-node-heading" }, uw = { class: "item-name" }, dw = { class: "community-node-package" }, mw = { class: "community-node-meta" }, fw = { class: "community-node-guidance" }, vw = { key: 0 }, pw = { class: "community-choice-status" }, gw = { class: "community-node-actions" }, hw = {
  key: 3,
  class: "step-content"
}, yw = { class: "review-summary" }, ww = { class: "review-stats" }, _w = { class: "review-stat" }, kw = { class: "stat-value" }, bw = { class: "review-stat" }, $w = { class: "stat-value" }, Cw = { class: "review-stat" }, xw = { class: "stat-value" }, Sw = { class: "review-stat" }, Iw = { class: "stat-value" }, Ew = {
  key: 0,
  class: "review-section"
}, Tw = { class: "section-title" }, Mw = { class: "review-items" }, Pw = { class: "item-name" }, Rw = { class: "item-choice" }, Lw = {
  key: 0,
  class: "choice-badge install"
}, Dw = {
  key: 1,
  class: "choice-badge skip"
}, Nw = {
  key: 1,
  class: "review-section"
}, Uw = { class: "section-title" }, Ow = { class: "review-items" }, Aw = { class: "item-name" }, zw = { class: "item-choice" }, Fw = {
  key: 0,
  class: "choice-badge install"
}, Vw = {
  key: 1,
  class: "choice-badge optional"
}, Bw = {
  key: 2,
  class: "choice-badge skip"
}, Ww = {
  key: 2,
  class: "review-section"
}, Gw = { class: "section-title" }, jw = { class: "review-items" }, Hw = { class: "item-name" }, qw = { class: "item-choice" }, Kw = {
  key: 0,
  class: "choice-badge install"
}, Jw = {
  key: 1,
  class: "choice-badge optional"
}, Qw = {
  key: 2,
  class: "choice-badge skip"
}, Yw = {
  key: 1,
  class: "choice-badge pending"
}, Xw = {
  key: 3,
  class: "review-section"
}, Zw = { class: "section-title" }, e0 = { class: "review-items download-details" }, t0 = { class: "download-info" }, s0 = { class: "item-name" }, o0 = { class: "download-meta" }, n0 = { class: "download-path" }, a0 = ["title"], l0 = {
  key: 4,
  class: "review-section"
}, i0 = { class: "section-title" }, r0 = { class: "review-items" }, c0 = { class: "item-name" }, u0 = { class: "item-choice" }, d0 = {
  key: 0,
  class: "choice-badge install"
}, m0 = {
  key: 1,
  class: "choice-badge download"
}, f0 = {
  key: 2,
  class: "choice-badge optional"
}, v0 = {
  key: 3,
  class: "choice-badge skip"
}, p0 = {
  key: 4,
  class: "choice-badge skip"
}, g0 = {
  key: 1,
  class: "choice-badge download"
}, h0 = {
  key: 2,
  class: "choice-badge pending"
}, y0 = {
  key: 5,
  class: "no-choices"
}, w0 = /* @__PURE__ */ be({
  __name: "WorkflowResolveModal",
  props: {
    workflowName: {}
  },
  emits: ["close", "install", "refresh", "restart"],
  setup(e, { emit: s }) {
    const o = e, a = s, { analyzeWorkflow: l, applyResolution: r, installNodes: c, queueModelDownloads: u, progress: d, resetProgress: v } = oc(), { loadPendingDownloads: f } = Lo(), { openFileLocation: p, queueNodeInstall: w, getNodes: g } = ct(), _ = k(null), C = k([]), x = k(!1), S = k(!1), T = k(null), M = k("analysis"), E = k([]), D = k(/* @__PURE__ */ new Map()), z = k(/* @__PURE__ */ new Map()), j = k(/* @__PURE__ */ new Set()), L = P(() => {
      const ie = [
        { id: "analysis", label: "Analysis" }
      ];
      return (Z.value || ke.value || se.value) && ie.push({ id: "nodes", label: "Nodes" }), W.value && ie.push({ id: "models", label: "Models" }), ie.push({ id: "review", label: "Review" }), M.value === "applying" && ie.push({ id: "applying", label: "Applying" }), ie;
    }), q = P(() => _.value ? _.value.stats.needs_user_input : !1), ce = P(() => _.value ? _.value.nodes.version_gated || [] : []), ne = P(() => _.value ? _.value.nodes.uninstallable || [] : []), Y = P(() => ne.value.filter((ie) => {
      var F;
      return !!((F = ie.package) != null && F.package_id);
    })), we = P(() => ce.value.length > 0), Z = P(() => _.value ? _.value.nodes.unresolved.length > 0 || _.value.nodes.ambiguous.length > 0 : !1), W = P(() => _.value ? _.value.models.unresolved.length > 0 || _.value.models.ambiguous.length > 0 : !1), K = P(() => _.value ? _.value.stats.download_intents > 0 : !1), ke = P(() => _.value ? _.value.stats.nodes_needing_installation > 0 : !1), se = P(() => Y.value.length > 0), fe = P(() => _.value ? _.value.nodes.resolved.length : 0), U = P(() => _.value ? _.value.models.resolved.filter((ie) => ie.has_category_mismatch) : []), me = P(() => U.value.length > 0), Pe = P(() => Z.value || ke.value || se.value ? "nodes" : W.value ? "models" : "review"), ye = P(() => {
      if (!_.value) return [];
      const ie = _.value.nodes.resolved.filter((de) => !de.is_installed), F = /* @__PURE__ */ new Set();
      return ie.filter((de) => F.has(de.package.package_id) ? !1 : (F.add(de.package.package_id), !0));
    }), ee = P(() => {
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
    }), Q = P(() => ye.value.filter((ie) => !j.value.has(ie.package.package_id))), $e = P(() => _.value ? _.value.models.resolved.filter(
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
    const I = P(() => {
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
      let ie = j.value.size;
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
      if (ie.analysis = { resolved: 1, total: 1 }, Z.value || se.value) {
        const F = te.value.length, de = Y.value.length, Ge = te.value.filter(
          (xt) => D.value.has(xt.node_type)
        ).length, dt = Y.value.filter(
          (xt) => D.value.has(xt.reference.node_type)
        ).length, Ct = F + de, it = Ge + dt;
        ie.nodes = { resolved: it, total: Ct };
      }
      if (W.value) {
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
      x.value = !0, T.value = null;
      try {
        const [ie, F] = await Promise.all([
          l(o.workflowName),
          g()
        ]);
        _.value = ie, C.value = Je(F.nodes), Ne();
      } catch (ie) {
        T.value = ie instanceof Error ? ie.message : "Failed to analyze workflow";
      } finally {
        x.value = !1;
      }
    }
    function pe() {
      E.value.includes("analysis") || E.value.push("analysis"), Z.value || ke.value || se.value ? M.value = "nodes" : W.value ? M.value = "models" : M.value = "review";
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
    function G(ie) {
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
      j.value.has(ie) ? j.value.delete(ie) : j.value.add(ie);
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
        T.value = F instanceof Error ? F.message : "Failed to open file location";
      }
    }
    async function nt() {
      var ie;
      S.value = !0, T.value = null, v(), d.phase = "resolving", M.value = "applying";
      try {
        const F = await r(o.workflowName, D.value, z.value, j.value);
        F.models_to_download && F.models_to_download.length > 0 && u(o.workflowName, F.models_to_download);
        const de = Y.value.map((it) => {
          const xt = Ue(it.reference.node_type);
          if ((xt == null ? void 0 : xt.action) !== "install" || xt.install_source !== "git")
            return null;
          const ts = xt.repository || it.package.repository, xs = xt.package_id || it.package.package_id;
          return !ts || !xs ? null : {
            id: xs,
            repository: ts,
            selectedVersion: xt.version || it.package.latest_version || "latest"
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
        const Ct = d.installError || ((ie = d.nodeInstallProgress) == null ? void 0 : ie.completedNodes.some((it) => !it.success));
        !d.needsRestart && !Ct && setTimeout(() => {
          a("refresh"), a("install"), a("close");
        }, 1500);
      } catch (F) {
        T.value = F instanceof Error ? F.message : "Failed to apply resolution", d.error = T.value, d.phase = "error";
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
    return at(We), (ie, F) => (n(), R(It, {
      title: `Resolve Dependencies: ${e.workflowName}`,
      size: "lg",
      loading: x.value,
      error: T.value || void 0,
      "fixed-height": !0,
      onClose: F[1] || (F[1] = (de) => a("close"))
    }, {
      body: h(() => [
        x.value && !_.value ? (n(), i("div", o1, [...F[2] || (F[2] = [
          t("div", { class: "loading-spinner" }, null, -1),
          t("p", null, "Analyzing workflow dependencies...", -1)
        ])])) : _.value ? (n(), i("div", n1, [
          b(tg, {
            steps: L.value,
            "current-step": M.value,
            "completed-steps": E.value,
            "step-stats": Ce.value,
            onStepChange: Se
          }, null, 8, ["steps", "current-step", "completed-steps", "step-stats"]),
          M.value === "analysis" ? (n(), i("div", a1, [
            t("div", l1, [
              t("div", i1, [
                F[3] || (F[3] = t("h3", { class: "summary-title" }, "Analysis Complete", -1)),
                t("p", r1, " Found " + m(_.value.stats.total_nodes) + " nodes and " + m(_.value.stats.total_models) + " models in this workflow. ", 1)
              ]),
              t("div", c1, [
                t("div", u1, [
                  F[16] || (F[16] = t("div", { class: "stat-header" }, "Nodes", -1)),
                  t("div", d1, [
                    fe.value > 0 ? (n(), i("div", m1, [
                      F[4] || (F[4] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", f1, m(fe.value), 1),
                      F[5] || (F[5] = t("span", { class: "stat-label" }, "resolved", -1))
                    ])) : y("", !0),
                    _.value.stats.packages_needing_installation > 0 ? (n(), i("div", v1, [
                      F[6] || (F[6] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", p1, m(_.value.stats.packages_needing_installation), 1),
                      F[7] || (F[7] = t("span", { class: "stat-label" }, "to install", -1))
                    ])) : y("", !0),
                    _.value.nodes.ambiguous.length > 0 ? (n(), i("div", g1, [
                      F[8] || (F[8] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", h1, m(_.value.nodes.ambiguous.length), 1),
                      F[9] || (F[9] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    ce.value.length > 0 ? (n(), i("div", y1, [
                      F[10] || (F[10] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", w1, m(ce.value.length), 1),
                      F[11] || (F[11] = t("span", { class: "stat-label" }, "requires newer ComfyUI", -1))
                    ])) : y("", !0),
                    ne.value.length > 0 ? (n(), i("div", _1, [
                      F[12] || (F[12] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", k1, m(ne.value.length), 1),
                      F[13] || (F[13] = t("span", { class: "stat-label" }, "community-mapped", -1))
                    ])) : y("", !0),
                    _.value.nodes.unresolved.length > 0 ? (n(), i("div", b1, [
                      F[14] || (F[14] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", $1, m(_.value.nodes.unresolved.length), 1),
                      F[15] || (F[15] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ]),
                t("div", C1, [
                  F[27] || (F[27] = t("div", { class: "stat-header" }, "Models", -1)),
                  t("div", x1, [
                    t("div", S1, [
                      F[17] || (F[17] = t("span", { class: "stat-icon" }, "✓", -1)),
                      t("span", I1, m(_.value.models.resolved.length - _.value.stats.download_intents - _.value.stats.models_with_category_mismatch), 1),
                      F[18] || (F[18] = t("span", { class: "stat-label" }, "resolved", -1))
                    ]),
                    _.value.stats.download_intents > 0 ? (n(), i("div", E1, [
                      F[19] || (F[19] = t("span", { class: "stat-icon" }, "⬇", -1)),
                      t("span", T1, m(_.value.stats.download_intents), 1),
                      F[20] || (F[20] = t("span", { class: "stat-label" }, "pending download", -1))
                    ])) : y("", !0),
                    me.value ? (n(), i("div", M1, [
                      F[21] || (F[21] = t("span", { class: "stat-icon" }, "⚠", -1)),
                      t("span", P1, m(U.value.length), 1),
                      F[22] || (F[22] = t("span", { class: "stat-label" }, "wrong directory", -1))
                    ])) : y("", !0),
                    _.value.models.ambiguous.length > 0 ? (n(), i("div", R1, [
                      F[23] || (F[23] = t("span", { class: "stat-icon" }, "?", -1)),
                      t("span", L1, m(_.value.models.ambiguous.length), 1),
                      F[24] || (F[24] = t("span", { class: "stat-label" }, "ambiguous", -1))
                    ])) : y("", !0),
                    _.value.models.unresolved.length > 0 ? (n(), i("div", D1, [
                      F[25] || (F[25] = t("span", { class: "stat-icon" }, "✗", -1)),
                      t("span", N1, m(_.value.models.unresolved.length), 1),
                      F[26] || (F[26] = t("span", { class: "stat-label" }, "missing", -1))
                    ])) : y("", !0)
                  ])
                ])
              ]),
              q.value ? (n(), i("div", U1, [
                F[28] || (F[28] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", O1, m(te.value.length + oe.value.length) + " items need your input", 1)
              ])) : we.value ? (n(), i("div", A1, [
                F[29] || (F[29] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", z1, m(ce.value.length) + " node type" + m(ce.value.length > 1 ? "s are" : " is") + " blocked and require manual action", 1)
              ])) : ne.value.length > 0 ? (n(), i("div", F1, [
                F[30] || (F[30] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", V1, m(ne.value.length) + " community-mapped node type" + m(ne.value.length > 1 ? "s need" : " needs") + " installation choices", 1)
              ])) : ke.value ? (n(), i("div", B1, [
                F[31] || (F[31] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", W1, m(_.value.stats.packages_needing_installation) + " package" + m(_.value.stats.packages_needing_installation > 1 ? "s" : "") + " to install (" + m(_.value.stats.nodes_needing_installation) + " node type" + m(_.value.stats.nodes_needing_installation > 1 ? "s" : "") + ")" + m(K.value ? `, ${_.value.stats.download_intents} model${_.value.stats.download_intents > 1 ? "s" : ""} to download` : ""), 1)
              ])) : K.value ? (n(), i("div", G1, [
                F[32] || (F[32] = t("span", { class: "status-icon" }, "⬇", -1)),
                t("span", j1, m(_.value.stats.download_intents) + " model" + m(_.value.stats.download_intents > 1 ? "s" : "") + " pending download - click Continue to Review to proceed", 1)
              ])) : me.value ? (n(), i("div", H1, [
                F[33] || (F[33] = t("span", { class: "status-icon" }, "⚠", -1)),
                t("span", q1, m(U.value.length) + " model" + m(U.value.length > 1 ? "s" : "") + " in wrong directory (manual move required)", 1)
              ])) : (n(), i("div", K1, [...F[34] || (F[34] = [
                t("span", { class: "status-icon" }, "✓", -1),
                t("span", { class: "status-text" }, "All dependencies are resolved!", -1)
              ])])),
              me.value ? (n(), i("div", J1, [
                F[37] || (F[37] = t("h4", { class: "section-subtitle" }, "Move these files manually:", -1)),
                t("div", Q1, [
                  (n(!0), i(B, null, ge(U.value, (de) => {
                    var Ge, dt;
                    return n(), i("div", {
                      key: de.reference.widget_value,
                      class: "mismatch-item"
                    }, [
                      t("code", Y1, m(de.actual_category) + "/" + m((Ge = de.model) == null ? void 0 : Ge.filename), 1),
                      F[36] || (F[36] = t("span", { class: "mismatch-arrow" }, "→", -1)),
                      t("code", X1, m((dt = de.expected_categories) == null ? void 0 : dt[0]) + "/", 1),
                      de.file_path ? (n(), R(De, {
                        key: 0,
                        variant: "ghost",
                        size: "sm",
                        onClick: (Ct) => je(de.file_path)
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
              we.value ? (n(), i("div", Z1, [
                F[38] || (F[38] = t("h4", { class: "section-subtitle" }, "Blocked node types:", -1)),
                t("div", ew, [
                  (n(!0), i(B, null, ge(ce.value, (de) => {
                    var Ge;
                    return n(), i("div", {
                      key: `vg-${de.reference.node_type}`,
                      class: "mismatch-item"
                    }, [
                      t("code", tw, m(de.reference.node_type), 1),
                      t("span", sw, m(de.guidance || ((Ge = _.value.node_guidance) == null ? void 0 : Ge[de.reference.node_type]) || "Requires a newer ComfyUI version."), 1)
                    ]);
                  }), 128))
                ])
              ])) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "nodes" ? (n(), i("div", ow, [
            b(Rh, {
              nodes: te.value,
              "node-choices": D.value,
              "auto-resolved-packages": ee.value,
              "skipped-packages": j.value,
              "installed-node-packs": C.value,
              onMarkOptional: J,
              onSkip: qe,
              onOptionSelected: Ie,
              onManualEntry: Xe,
              onClearChoice: Ve,
              onPackageSkip: N
            }, null, 8, ["nodes", "node-choices", "auto-resolved-packages", "skipped-packages", "installed-node-packs"]),
            Y.value.length > 0 ? (n(), i("div", nw, [
              t("div", aw, [
                t("h4", lw, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                F[39] || (F[39] = t("p", { class: "community-node-description" }, " These mappings are actionable. Default install uses the registry; choose Git only when explicitly needed. ", -1))
              ]),
              t("div", iw, [
                (n(!0), i(B, null, ge(Y.value, (de) => (n(), i("div", {
                  key: `community-${de.reference.node_type}-${de.package.package_id}`,
                  class: "community-node-item"
                }, [
                  t("div", rw, [
                    t("div", cw, [
                      t("code", uw, m(de.reference.node_type), 1),
                      t("span", dw, m(de.package.title || de.package.package_id), 1)
                    ]),
                    t("div", mw, m(de.package.package_id), 1),
                    t("div", fw, [
                      F[40] || (F[40] = $(" Found via community mapping — registry metadata may be incomplete. ", -1)),
                      de.guidance ? (n(), i("span", vw, m(de.guidance), 1)) : y("", !0)
                    ]),
                    t("div", pw, m(G(de.reference.node_type)), 1)
                  ]),
                  t("div", gw, [
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
          M.value === "models" ? (n(), R(xy, {
            key: 2,
            models: Re.value,
            "model-choices": z.value,
            onMarkOptional: O,
            onSkip: X,
            onOptionSelected: Oe,
            onDownloadUrl: Ae,
            onClearChoice: Le
          }, null, 8, ["models", "model-choices"])) : y("", !0),
          M.value === "review" ? (n(), i("div", hw, [
            t("div", yw, [
              F[50] || (F[50] = t("div", { class: "review-header" }, [
                t("h3", { class: "summary-title" }, "Review Your Choices"),
                t("p", { class: "summary-description" }, " Confirm the actions to take. Items without explicit choices will be skipped. ")
              ], -1)),
              t("div", ww, [
                t("div", _w, [
                  t("span", kw, m(I.value), 1),
                  F[45] || (F[45] = t("span", { class: "stat-label" }, "to install", -1))
                ]),
                t("div", bw, [
                  t("span", $w, m(A.value), 1),
                  F[46] || (F[46] = t("span", { class: "stat-label" }, "to download", -1))
                ]),
                t("div", Cw, [
                  t("span", xw, m(re.value), 1),
                  F[47] || (F[47] = t("span", { class: "stat-label" }, "optional", -1))
                ]),
                t("div", Sw, [
                  t("span", Iw, m(Ee.value), 1),
                  F[48] || (F[48] = t("span", { class: "stat-label" }, "skipped", -1))
                ])
              ]),
              ee.value.length > 0 ? (n(), i("div", Ew, [
                t("h4", Tw, "Node Packages (" + m(ee.value.length) + ")", 1),
                t("div", Mw, [
                  (n(!0), i(B, null, ge(ee.value, (de) => (n(), i("div", {
                    key: de.package_id,
                    class: "review-item"
                  }, [
                    t("code", Pw, m(de.package_id), 1),
                    t("div", Rw, [
                      j.value.has(de.package_id) ? (n(), i("span", Dw, "Skipped")) : (n(), i("span", Lw, "Will Install"))
                    ])
                  ]))), 128))
                ])
              ])) : y("", !0),
              Y.value.length > 0 ? (n(), i("div", Nw, [
                t("h4", Uw, "Community-Mapped Packages (" + m(Y.value.length) + ")", 1),
                t("div", Ow, [
                  (n(!0), i(B, null, ge(Y.value, (de) => {
                    var Ge, dt, Ct;
                    return n(), i("div", {
                      key: `review-community-${de.reference.node_type}-${de.package.package_id}`,
                      class: "review-item"
                    }, [
                      t("code", Aw, m(de.reference.node_type), 1),
                      t("div", zw, [
                        ((Ge = Ue(de.reference.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", Fw, m(((dt = Ue(de.reference.node_type)) == null ? void 0 : dt.install_source) === "git" ? "Install via Git" : "Install from Registry"), 1)) : ((Ct = Ue(de.reference.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Vw, " Optional ")) : (n(), i("span", Bw, " Skip "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              te.value.length > 0 ? (n(), i("div", Ww, [
                t("h4", Gw, "Node Choices (" + m(te.value.length) + ")", 1),
                t("div", jw, [
                  (n(!0), i(B, null, ge(te.value, (de) => {
                    var Ge, dt, Ct, it;
                    return n(), i("div", {
                      key: de.node_type,
                      class: "review-item"
                    }, [
                      t("code", Hw, m(de.node_type), 1),
                      t("div", qw, [
                        D.value.has(de.node_type) ? (n(), i(B, { key: 0 }, [
                          ((Ge = D.value.get(de.node_type)) == null ? void 0 : Ge.action) === "install" ? (n(), i("span", Kw, m((dt = D.value.get(de.node_type)) == null ? void 0 : dt.package_id), 1)) : ((Ct = D.value.get(de.node_type)) == null ? void 0 : Ct.action) === "optional" ? (n(), i("span", Jw, " Optional ")) : ((it = D.value.get(de.node_type)) == null ? void 0 : it.action) === "skip" ? (n(), i("span", Qw, " Skip ")) : y("", !0)
                        ], 64)) : (n(), i("span", Yw, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ve.value.length > 0 ? (n(), i("div", Xw, [
                t("h4", Zw, "Models to Download (" + m(ve.value.length) + ")", 1),
                t("div", e0, [
                  (n(!0), i(B, null, ge(ve.value, (de) => (n(), i("div", {
                    key: de.filename,
                    class: "review-item download-item"
                  }, [
                    t("div", t0, [
                      t("code", s0, m(de.filename), 1),
                      t("div", o0, [
                        t("span", n0, "→ " + m(de.target_path), 1),
                        de.url ? (n(), i("span", {
                          key: 0,
                          class: "download-url",
                          title: de.url
                        }, m(le(de.url)), 9, a0)) : y("", !0)
                      ])
                    ]),
                    F[49] || (F[49] = t("span", { class: "choice-badge download" }, "Will Download", -1))
                  ]))), 128))
                ])
              ])) : y("", !0),
              Re.value.length > 0 ? (n(), i("div", l0, [
                t("h4", i0, "Models (" + m(Re.value.length) + ")", 1),
                t("div", r0, [
                  (n(!0), i(B, null, ge(Re.value, (de) => {
                    var Ge, dt, Ct, it, xt, ts, xs;
                    return n(), i("div", {
                      key: de.filename,
                      class: "review-item"
                    }, [
                      t("code", c0, m(de.filename), 1),
                      t("div", u0, [
                        z.value.has(de.filename) ? (n(), i(B, { key: 0 }, [
                          ((Ge = z.value.get(de.filename)) == null ? void 0 : Ge.action) === "select" ? (n(), i("span", d0, m((Ct = (dt = z.value.get(de.filename)) == null ? void 0 : dt.selected_model) == null ? void 0 : Ct.filename), 1)) : ((it = z.value.get(de.filename)) == null ? void 0 : it.action) === "download" ? (n(), i("span", m0, " Download ")) : ((xt = z.value.get(de.filename)) == null ? void 0 : xt.action) === "optional" ? (n(), i("span", f0, " Optional ")) : ((ts = z.value.get(de.filename)) == null ? void 0 : ts.action) === "skip" ? (n(), i("span", v0, " Skip ")) : ((xs = z.value.get(de.filename)) == null ? void 0 : xs.action) === "cancel_download" ? (n(), i("span", p0, " Cancel Download ")) : y("", !0)
                        ], 64)) : de.is_download_intent ? (n(), i("span", g0, " Pending Download ")) : (n(), i("span", h0, " No action (skipped) "))
                      ])
                    ]);
                  }), 128))
                ])
              ])) : y("", !0),
              ye.value.length === 0 && Y.value.length === 0 && te.value.length === 0 && Re.value.length === 0 ? (n(), i("div", y0, " No dependencies need resolution. ")) : y("", !0)
            ])
          ])) : y("", !0),
          M.value === "applying" ? (n(), R(s1, {
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
        F[54] || (F[54] = t("div", { class: "footer-spacer" }, null, -1)),
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
          disabled: x.value,
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
            $(m(W.value ? "Continue to Models →" : "Continue to Review →"), 1)
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
}), _0 = /* @__PURE__ */ xe(w0, [["__scopeId", "data-v-49848358"]]), k0 = { class: "search-input-wrapper" }, b0 = ["value", "placeholder"], $0 = /* @__PURE__ */ be({
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
    const o = e, a = s, l = k(null);
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
    }), (d, v) => (n(), i("div", k0, [
      t("input", {
        ref_key: "inputRef",
        ref: l,
        value: e.modelValue,
        type: "text",
        placeholder: e.placeholder,
        class: "search-input",
        onInput: c,
        onKeyup: ds(u, ["escape"])
      }, null, 40, b0),
      e.clearable && e.modelValue ? (n(), i("button", {
        key: 0,
        class: "clear-button",
        onClick: u,
        title: "Clear search"
      }, " ✕ ")) : y("", !0)
    ]));
  }
}), C0 = /* @__PURE__ */ xe($0, [["__scopeId", "data-v-266f857a"]]), x0 = { class: "search-bar" }, S0 = /* @__PURE__ */ be({
  __name: "SearchBar",
  props: {
    modelValue: {},
    placeholder: { default: "🔍 Search..." },
    debounce: { default: 300 },
    clearable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "clear"],
  setup(e) {
    return (s, o) => (n(), i("div", x0, [
      b(C0, {
        "model-value": e.modelValue,
        placeholder: e.placeholder,
        debounce: e.debounce,
        clearable: e.clearable,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.$emit("update:modelValue", a)),
        onClear: o[1] || (o[1] = (a) => s.$emit("clear"))
      }, null, 8, ["model-value", "placeholder", "debounce", "clearable"])
    ]));
  }
}), ro = /* @__PURE__ */ xe(S0, [["__scopeId", "data-v-3d51bbfd"]]), I0 = { class: "section-group" }, E0 = {
  key: 0,
  class: "section-content"
}, T0 = /* @__PURE__ */ be({
  __name: "SectionGroup",
  props: {
    title: {},
    count: {},
    collapsible: { type: Boolean, default: !1 },
    initiallyExpanded: { type: Boolean, default: !0 }
  },
  emits: ["toggle"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.initiallyExpanded);
    function r() {
      o.collapsible && (l.value = !l.value, a("toggle", l.value));
    }
    return (c, u) => (n(), i("section", I0, [
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
      !e.collapsible || l.value ? (n(), i("div", E0, [
        ot(c.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ]));
  }
}), St = /* @__PURE__ */ xe(T0, [["__scopeId", "data-v-c48e33ed"]]), M0 = { class: "item-header" }, P0 = {
  key: 0,
  class: "item-icon"
}, R0 = { class: "item-info" }, L0 = {
  key: 0,
  class: "item-title"
}, D0 = {
  key: 1,
  class: "item-subtitle"
}, N0 = {
  key: 0,
  class: "item-details"
}, U0 = {
  key: 1,
  class: "item-actions"
}, O0 = /* @__PURE__ */ be({
  __name: "ItemCard",
  props: {
    status: {},
    clickable: { type: Boolean, default: !1 },
    compact: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const o = e, a = P(() => o.status ? `status-${o.status}` : "");
    return (l, r) => (n(), i("div", {
      class: Be(["item-card", { clickable: e.clickable, compact: e.compact }, a.value]),
      onClick: r[0] || (r[0] = (c) => e.clickable && l.$emit("click"))
    }, [
      t("div", M0, [
        l.$slots.icon ? (n(), i("span", P0, [
          ot(l.$slots, "icon", {}, void 0)
        ])) : y("", !0),
        t("div", R0, [
          l.$slots.title ? (n(), i("div", L0, [
            ot(l.$slots, "title", {}, void 0)
          ])) : y("", !0),
          l.$slots.subtitle ? (n(), i("div", D0, [
            ot(l.$slots, "subtitle", {}, void 0)
          ])) : y("", !0)
        ])
      ]),
      l.$slots.details ? (n(), i("div", N0, [
        ot(l.$slots, "details", {}, void 0)
      ])) : y("", !0),
      l.$slots.actions ? (n(), i("div", U0, [
        ot(l.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Vt = /* @__PURE__ */ xe(O0, [["__scopeId", "data-v-cc435e0e"]]), A0 = { class: "loading-state" }, z0 = { class: "loading-message" }, F0 = /* @__PURE__ */ be({
  __name: "LoadingState",
  props: {
    message: { default: "Loading..." }
  },
  setup(e) {
    return (s, o) => (n(), i("div", A0, [
      o[0] || (o[0] = t("div", { class: "spinner" }, null, -1)),
      t("p", z0, m(e.message), 1)
    ]));
  }
}), $s = /* @__PURE__ */ xe(F0, [["__scopeId", "data-v-ad8436c9"]]), V0 = { class: "error-state" }, B0 = { class: "error-message" }, W0 = /* @__PURE__ */ be({
  __name: "ErrorState",
  props: {
    message: {},
    retry: { type: Boolean, default: !1 }
  },
  emits: ["retry"],
  setup(e) {
    return (s, o) => (n(), i("div", V0, [
      o[2] || (o[2] = t("span", { class: "error-icon" }, "⚠", -1)),
      t("p", B0, m(e.message), 1),
      e.retry ? (n(), R(Me, {
        key: 0,
        variant: "secondary",
        size: "sm",
        onClick: o[0] || (o[0] = (a) => s.$emit("retry"))
      }, {
        default: h(() => [...o[1] || (o[1] = [
          $(" Retry ", -1)
        ])]),
        _: 1
      })) : y("", !0)
    ]));
  }
}), Cs = /* @__PURE__ */ xe(W0, [["__scopeId", "data-v-5397be48"]]), G0 = /* @__PURE__ */ be({
  __name: "WorkflowsSection",
  emits: ["refresh"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getWorkflows: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(""), v = k(!0), f = k(!1), p = k(!1), w = k(!1), g = k(null), _ = P(
      () => r.value.filter((U) => U.status === "broken")
    ), C = P(
      () => r.value.filter((U) => U.status === "new")
    ), x = P(
      () => r.value.filter((U) => U.status === "modified")
    ), S = P(
      () => r.value.filter((U) => U.status === "synced")
    ), T = P(() => {
      if (!d.value.trim()) return r.value;
      const U = d.value.toLowerCase();
      return r.value.filter((me) => me.name.toLowerCase().includes(U));
    }), M = P(
      () => _.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), E = P(
      () => C.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), D = P(
      () => x.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), z = P(
      () => S.value.filter(
        (U) => !d.value.trim() || U.name.toLowerCase().includes(d.value.toLowerCase())
      )
    ), j = P(
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
    s({ loadWorkflows: L });
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
    async function Z() {
      w.value = !1, await L(!0);
    }
    async function W() {
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
      b(At, null, {
        header: h(() => [
          b(zt, { title: "WORKFLOWS" })
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
            M.value.length ? (n(), R(St, {
              key: 0,
              title: "BROKEN",
              count: M.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(M.value, (Pe) => (n(), R(Vt, {
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
            E.value.length ? (n(), R(St, {
              key: 1,
              title: "NEW",
              count: E.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(E.value, (Pe) => (n(), R(Vt, {
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
            D.value.length ? (n(), R(St, {
              key: 2,
              title: "MODIFIED",
              count: D.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(D.value, (Pe) => (n(), R(Vt, {
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
            z.value.length ? (n(), R(St, {
              key: 3,
              title: "SYNCED",
              count: z.value.length,
              collapsible: !0,
              "initially-expanded": v.value,
              onToggle: me[2] || (me[2] = (Pe) => v.value = Pe)
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(j.value, (Pe) => (n(), R(Vt, {
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
            T.value.length ? y("", !0) : (n(), R(rs, {
              key: 4,
              icon: "📭",
              message: d.value ? `No workflows match '${d.value}'` : "No workflows found in this environment."
            }, null, 8, ["message"]))
          ], 64))
        ]),
        _: 1
      }),
      p.value && g.value ? (n(), R(Wp, {
        key: 0,
        "workflow-name": g.value,
        onClose: me[3] || (me[3] = (Pe) => p.value = !1),
        onResolve: me[4] || (me[4] = (Pe) => ce(g.value)),
        onRefresh: me[5] || (me[5] = (Pe) => a("refresh"))
      }, null, 8, ["workflow-name"])) : y("", !0),
      w.value && g.value ? (n(), R(_0, {
        key: 1,
        "workflow-name": g.value,
        onClose: Z,
        onInstall: we,
        onRefresh: me[6] || (me[6] = (Pe) => a("refresh")),
        onRestart: W
      }, null, 8, ["workflow-name"])) : y("", !0)
    ], 64));
  }
}), j0 = /* @__PURE__ */ xe(G0, [["__scopeId", "data-v-28ee54dd"]]), H0 = /* @__PURE__ */ be({
  __name: "SummaryBar",
  props: {
    variant: { default: "default" }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Be(["summary-bar", e.variant])
    }, [
      ot(s.$slots, "default", {}, void 0)
    ], 2));
  }
}), Il = /* @__PURE__ */ xe(H0, [["__scopeId", "data-v-ccb7816e"]]), q0 = ["disabled"], K0 = { class: "dropdown-value" }, J0 = ["onClick"], Q0 = {
  key: 0,
  class: "dropdown-error"
}, Y0 = /* @__PURE__ */ be({
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
    const o = e, a = s, l = k(!1), r = k(null), c = k(null), u = k({});
    function d(S) {
      return typeof S == "string" ? S : S.value;
    }
    function v(S) {
      return typeof S == "string" ? S : S.label;
    }
    const f = P(() => {
      if (!o.modelValue && o.placeholder)
        return o.placeholder;
      const S = o.options.find((T) => d(T) === o.modelValue);
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
      const S = r.value.getBoundingClientRect(), T = window.innerHeight, M = T - S.bottom, E = S.top, D = Math.min(300, o.options.length * 36 + 8), z = M < D && E > M;
      u.value = {
        position: "fixed",
        left: `${S.left}px`,
        width: `${S.width}px`,
        maxHeight: "300px",
        ...z ? { bottom: `${T - S.top + 4}px` } : { top: `${S.bottom + 4}px` }
      };
    }
    yt(l, async (S) => {
      S && (await Pt(), _());
    });
    function C() {
      l.value && _();
    }
    function x(S) {
      S.key === "Escape" && l.value && w();
    }
    return at(() => {
      window.addEventListener("scroll", C, !0), window.addEventListener("keydown", x);
    }), Po(() => {
      window.removeEventListener("scroll", C, !0), window.removeEventListener("keydown", x);
    }), (S, T) => (n(), i("div", {
      class: "base-dropdown",
      ref_key: "dropdownRef",
      ref: r
    }, [
      t("button", {
        type: "button",
        class: Be(["dropdown-trigger", { open: l.value, error: !!e.error }]),
        disabled: e.disabled,
        onClick: p
      }, [
        t("span", K0, m(f.value), 1),
        T[0] || (T[0] = t("span", { class: "dropdown-arrow" }, "▼", -1))
      ], 10, q0),
      (n(), R(Lt, { to: "body" }, [
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
            onClick: (E) => g(M)
          }, m(v(M)), 11, J0))), 128))
        ], 4)) : y("", !0)
      ])),
      e.error ? (n(), i("span", Q0, m(e.error), 1)) : y("", !0)
    ], 512));
  }
}), X0 = /* @__PURE__ */ xe(Y0, [["__scopeId", "data-v-857e085b"]]), Z0 = { class: "destination-section" }, e_ = { class: "section-label" }, t_ = { class: "destination-row" }, s_ = {
  key: 0,
  class: "path-separator"
}, o_ = /* @__PURE__ */ be({
  __name: "DownloadDestinationPicker",
  props: {
    modelValue: {},
    label: { default: "Download Destination" },
    suggestedDirectory: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const o = e, a = s, { getModelsSubdirectories: l } = ct(), r = k(""), c = k(""), u = k(""), d = k([]), v = k(!1);
    let f = !1;
    const p = P(() => {
      const C = d.value.map((x) => ({
        label: x,
        value: x
      }));
      return C.push({ label: "Custom path...", value: "__custom__" }), C;
    }), w = P(() => r.value === "__custom__" ? u.value.trim() : r.value ? c.value.trim() ? `${r.value}/${c.value.trim()}` : r.value : "");
    function g() {
      if (v.value || !o.suggestedDirectory) return;
      const C = d.value.find(
        (x) => {
          var S;
          return x.toLowerCase() === ((S = o.suggestedDirectory) == null ? void 0 : S.toLowerCase());
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
    return yt(w, (C) => {
      a("update:modelValue", C);
    }, { immediate: !0 }), yt(() => o.suggestedDirectory, g), yt(d, g), yt(r, (C, x) => {
      f || x === "" || (v.value = !0);
    }), at(_), (C, x) => (n(), i("div", Z0, [
      t("h4", e_, m(e.label), 1),
      t("div", t_, [
        b(X0, {
          modelValue: r.value,
          "onUpdate:modelValue": x[0] || (x[0] = (S) => r.value = S),
          options: p.value,
          placeholder: "Select directory...",
          class: "dest-select"
        }, null, 8, ["modelValue", "options"]),
        r.value !== "__custom__" ? (n(), i("span", s_, "/")) : y("", !0),
        r.value !== "__custom__" ? (n(), R(bt, {
          key: 1,
          modelValue: c.value,
          "onUpdate:modelValue": x[1] || (x[1] = (S) => c.value = S),
          placeholder: "subfolder (optional)",
          class: "dest-subfolder"
        }, null, 8, ["modelValue"])) : y("", !0)
      ]),
      r.value === "__custom__" ? (n(), R(bt, {
        key: 0,
        modelValue: u.value,
        "onUpdate:modelValue": x[2] || (x[2] = (S) => u.value = S),
        placeholder: "Enter directory relative to models folder...",
        class: "dest-custom",
        "full-width": ""
      }, null, 8, ["modelValue"])) : y("", !0)
    ]));
  }
}), ac = /* @__PURE__ */ xe(o_, [["__scopeId", "data-v-2fbc2b02"]]);
function n_(e) {
  const s = e.toLowerCase();
  return s === "huggingface.co" || s.endsWith(".huggingface.co") || s === "hf.co";
}
function a_(e) {
  const s = e.trim();
  if (!s) return { kind: "unknown" };
  let o;
  try {
    o = new URL(s);
  } catch {
    return { kind: "unknown" };
  }
  if (!n_(o.hostname)) return { kind: "unknown" };
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
function l_(e) {
  return e.split("/").map(encodeURIComponent).join("/");
}
function Si(e, s, o) {
  const [a, l] = e.split("/");
  return `https://huggingface.co/${encodeURIComponent(a)}/${encodeURIComponent(l)}/resolve/${encodeURIComponent(s)}/${l_(o)}`;
}
const i_ = { class: "hf-file-browser" }, r_ = { class: "browser-header" }, c_ = { class: "repo-info" }, u_ = { class: "repo-id" }, d_ = {
  key: 0,
  class: "revision-pill"
}, m_ = {
  key: 0,
  class: "loading-state"
}, f_ = {
  key: 1,
  class: "error-state"
}, v_ = { class: "toolbar" }, p_ = { class: "toolbar-actions" }, g_ = { class: "file-list-container" }, h_ = {
  key: 0,
  class: "file-list-header"
}, y_ = ["checked", "indeterminate"], w_ = {
  key: 1,
  class: "file-checkbox-spacer"
}, __ = { class: "sort-indicator" }, k_ = { class: "sort-indicator" }, b_ = {
  key: 1,
  class: "empty-state"
}, $_ = {
  key: 2,
  class: "file-list"
}, C_ = ["onClick"], x_ = ["checked", "onChange"], S_ = { class: "file-path" }, I_ = { class: "file-size" }, E_ = { class: "action-bar" }, T_ = { class: "summary-info" }, M_ = { class: "summary-count" }, P_ = { class: "summary-size" }, R_ = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s, { getHuggingFaceRepoInfo: l } = ct(), r = k([]), c = k(/* @__PURE__ */ new Set()), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k("name"), w = k(!0), g = k(""), _ = /^(.*)-(\d{4,5})-of-(\d{4,5})(\.[^.]+)$/i, C = P(() => {
      let ye = r.value;
      if (o.initialPath) {
        const ee = o.initialPath.endsWith("/") ? o.initialPath : `${o.initialPath}/`;
        ye = ye.filter((Q) => Q.path.startsWith(ee) || Q.path === o.initialPath);
      }
      if (f.value && (ye = ye.filter((ee) => ee.is_model_file)), v.value.trim()) {
        const ee = v.value.toLowerCase();
        ye = ye.filter((Q) => Q.path.toLowerCase().includes(ee));
      }
      return ye;
    }), x = P(() => {
      const ye = [...C.value];
      return ye.sort((ee, Q) => {
        let $e;
        return p.value === "name" ? $e = ee.path.localeCompare(Q.path) : $e = ee.size - Q.size, w.value ? $e : -$e;
      }), ye;
    }), S = P(() => C.value.length === 0 ? !1 : C.value.every((ye) => c.value.has(ye.path))), T = P(() => C.value.some((ye) => c.value.has(ye.path))), M = P(() => g.value.trim().length > 0), E = P(() => {
      let ye = 0;
      for (const ee of c.value) {
        const Q = r.value.find(($e) => $e.path === ee);
        Q && (ye += Q.size);
      }
      return ye;
    }), D = P(() => {
      if (c.value.size === 0) return null;
      const ye = /* @__PURE__ */ new Set();
      for (const ee of c.value) {
        const Q = ke(ee);
        Q && ye.add(Q.toLowerCase());
      }
      return ye.size !== 1 ? null : [...ye][0];
    }), z = P(() => o.mode || "download"), j = P(() => o.actionLabel || (z.value === "source" ? "Use as Source" : "Queue Download")), L = P(() => z.value === "source" ? c.value.size === 1 ? "1 file selected" : `${c.value.size} files selected` : `${c.value.size} file(s) selected`), q = P(() => z.value === "source" ? c.value.size !== 1 : c.value.size === 0 || !M.value);
    function ce(ye) {
      if (ye === 0) return "0 B";
      const ee = 1024 * 1024 * 1024, Q = 1024 * 1024, $e = 1024;
      return ye >= ee ? `${(ye / ee).toFixed(2)} GB` : ye >= Q ? `${(ye / Q).toFixed(1)} MB` : ye >= $e ? `${(ye / $e).toFixed(0)} KB` : `${ye} B`;
    }
    function ne(ye) {
      const ee = ye.match(_);
      return ee ? `${ee[1]}${ee[4]}` : null;
    }
    function Y(ye) {
      if (z.value === "source") {
        c.value = c.value.has(ye.path) ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([ye.path]);
        return;
      }
      const ee = new Set(c.value), Q = ee.has(ye.path), $e = ye.shard_group || ne(ye.path);
      if ($e) {
        const te = r.value.filter((oe) => (oe.shard_group || ne(oe.path)) === $e);
        Q ? te.forEach((oe) => ee.delete(oe.path)) : te.forEach((oe) => ee.add(oe.path));
      } else
        Q ? ee.delete(ye.path) : ee.add(ye.path);
      c.value = ee;
    }
    function we() {
      const ye = new Set(c.value);
      for (const ee of C.value)
        ee.is_model_file && ye.add(ee.path);
      c.value = ye;
    }
    function Z() {
      c.value = /* @__PURE__ */ new Set();
    }
    function W() {
      if (S.value) {
        const ye = new Set(c.value);
        for (const ee of C.value)
          ye.delete(ee.path);
        c.value = ye;
      } else {
        const ye = new Set(c.value);
        for (const ee of C.value)
          ye.add(ee.path);
        c.value = ye;
      }
    }
    function K(ye) {
      p.value === ye ? w.value = !w.value : (p.value = ye, w.value = !0);
    }
    function ke(ye) {
      const ee = ye.split("/");
      return ee.length >= 2 ? ee[ee.length - 2] : null;
    }
    function se() {
      return g.value.trim();
    }
    function fe() {
      if (c.value.size === 0 || !M.value) return;
      const ye = se(), ee = [];
      for (const Q of c.value) {
        const $e = r.value.find((te) => te.path === Q);
        $e && ee.push({
          url: Si(o.repoId, o.revision, $e.path),
          destination: ye,
          filename: $e.path.split("/").pop() || $e.path
        });
      }
      a("queue", ee);
    }
    function U() {
      if (c.value.size !== 1) return;
      const [ye] = c.value;
      a("selectSource", Si(o.repoId, o.revision, ye));
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
          const ye = `https://huggingface.co/${o.repoId}/tree/${o.revision || "main"}`, ee = await l(ye);
          if (r.value = ee.files, o.preselectedFile) {
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
    return yt(() => [o.repoId, o.revision], () => {
      o.repoId && Pe();
    }, { immediate: !1 }), at(() => {
      Pe();
    }), (ye, ee) => (n(), i("div", i_, [
      t("div", r_, [
        t("button", {
          class: "back-btn",
          onClick: ee[0] || (ee[0] = (Q) => ye.$emit("back")),
          title: "Back to search"
        }, " ◄ "),
        t("div", c_, [
          t("span", u_, m(e.repoId), 1),
          e.revision ? (n(), i("span", d_, m(e.revision), 1)) : y("", !0)
        ])
      ]),
      u.value ? (n(), i("div", m_, " Loading repository files... ")) : d.value ? (n(), i("div", f_, m(d.value), 1)) : (n(), i(B, { key: 2 }, [
        t("div", v_, [
          b(bt, {
            modelValue: v.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (Q) => v.value = Q),
            placeholder: "Filter files...",
            type: "search",
            class: "search-input"
          }, null, 8, ["modelValue"]),
          t("div", p_, [
            t("button", {
              class: Be(["toggle-btn", { active: f.value }]),
              onClick: ee[2] || (ee[2] = (Q) => f.value = !f.value)
            }, m(f.value ? "Models Only" : "All Files"), 3),
            z.value === "download" ? (n(), i("button", {
              key: 0,
              class: "action-btn",
              onClick: we
            }, "Auto-Select Models")) : y("", !0),
            t("button", {
              class: "action-btn",
              onClick: Z
            }, "Clear")
          ])
        ]),
        t("div", g_, [
          C.value.length > 0 ? (n(), i("div", h_, [
            z.value === "download" ? (n(), i("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              indeterminate: T.value && !S.value,
              class: "file-checkbox",
              onChange: W
            }, null, 40, y_)) : (n(), i("span", w_)),
            t("span", {
              class: "header-name",
              onClick: ee[3] || (ee[3] = (Q) => K("name"))
            }, [
              ee[7] || (ee[7] = $(" Name ", -1)),
              t("span", __, m(p.value === "name" ? w.value ? "▲" : "▼" : ""), 1)
            ]),
            t("span", {
              class: "header-size",
              onClick: ee[4] || (ee[4] = (Q) => K("size"))
            }, [
              ee[8] || (ee[8] = $(" Size ", -1)),
              t("span", k_, m(p.value === "size" ? w.value ? "▲" : "▼" : ""), 1)
            ])
          ])) : y("", !0),
          C.value.length === 0 ? (n(), i("div", b_, m(r.value.length === 0 ? "No files in repository" : "No files match filter"), 1)) : (n(), i("div", $_, [
            (n(!0), i(B, null, ge(x.value, (Q) => (n(), i("div", {
              key: Q.path,
              class: Be(["file-item", { selected: c.value.has(Q.path) }]),
              onClick: ($e) => Y(Q)
            }, [
              t("input", {
                type: "checkbox",
                checked: c.value.has(Q.path),
                class: "file-checkbox",
                onClick: ee[5] || (ee[5] = vt(() => {
                }, ["stop"])),
                onChange: ($e) => Y(Q)
              }, null, 40, x_),
              t("span", S_, m(Q.path), 1),
              t("span", I_, m(ce(Q.size)), 1)
            ], 10, C_))), 128))
          ]))
        ]),
        z.value === "download" ? (n(), R(ac, {
          key: 0,
          modelValue: g.value,
          "onUpdate:modelValue": ee[6] || (ee[6] = (Q) => g.value = Q),
          "suggested-directory": D.value
        }, null, 8, ["modelValue", "suggested-directory"])) : y("", !0),
        t("div", E_, [
          t("div", T_, [
            t("span", M_, m(L.value), 1),
            t("span", P_, m(ce(E.value)), 1)
          ]),
          b(De, {
            variant: "primary",
            disabled: q.value,
            onClick: me
          }, {
            default: h(() => [
              $(m(j.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ], 64))
    ]));
  }
}), L_ = /* @__PURE__ */ xe(R_, [["__scopeId", "data-v-06caa551"]]), D_ = { class: "token-config-modal" }, N_ = { class: "provider-info" }, U_ = { class: "provider-icon" }, O_ = { class: "provider-name" }, A_ = {
  key: 0,
  class: "current-token"
}, z_ = { class: "mask" }, F_ = { class: "token-input-section" }, V_ = { class: "input-label" }, B_ = { class: "help-text" }, W_ = ["href"], G_ = { class: "modal-actions" }, j_ = /* @__PURE__ */ be({
  __name: "TokenConfigModal",
  props: {
    provider: {},
    currentTokenMask: {}
  },
  emits: ["close", "saved", "cleared"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateConfig: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(
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
          await l(C), r.value = "", a("saved"), a("close");
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
        await l(C), a("cleared"), a("close");
      } catch (C) {
        console.error("Failed to clear token:", C);
      } finally {
        u.value = !1;
      }
    }
    return (C, x) => (n(), R(It, {
      title: "Configure API Token",
      onClose: x[2] || (x[2] = (S) => C.$emit("close"))
    }, {
      body: h(() => [
        t("div", D_, [
          t("div", N_, [
            t("span", U_, m(v.value), 1),
            t("span", O_, m(d.value), 1)
          ]),
          e.currentTokenMask ? (n(), i("div", A_, [
            x[4] || (x[4] = t("span", { class: "label" }, "Current token:", -1)),
            t("span", z_, m(e.currentTokenMask), 1),
            b(De, {
              variant: "danger",
              size: "sm",
              onClick: _,
              loading: u.value
            }, {
              default: h(() => [...x[3] || (x[3] = [
                $(" Clear Token ", -1)
              ])]),
              _: 1
            }, 8, ["loading"])
          ])) : y("", !0),
          t("div", F_, [
            t("label", V_, m(e.currentTokenMask ? "Replace with new token:" : "Enter token:"), 1),
            b(bt, {
              modelValue: r.value,
              "onUpdate:modelValue": x[0] || (x[0] = (S) => r.value = S),
              type: "password",
              placeholder: f.value
            }, null, 8, ["modelValue", "placeholder"]),
            t("div", B_, [
              t("a", {
                href: p.value,
                target: "_blank",
                rel: "noopener"
              }, m(w.value), 9, W_)
            ])
          ])
        ])
      ]),
      footer: h(() => [
        t("div", G_, [
          b(De, {
            variant: "secondary",
            onClick: x[1] || (x[1] = (S) => C.$emit("close"))
          }, {
            default: h(() => [...x[5] || (x[5] = [
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
            default: h(() => [...x[6] || (x[6] = [
              $(" Save Token ", -1)
            ])]),
            _: 1
          }, 8, ["disabled", "loading"])
        ])
      ]),
      _: 1
    }));
  }
}), H_ = /* @__PURE__ */ xe(j_, [["__scopeId", "data-v-0687d0ce"]]), q_ = { class: "huggingface-tab" }, K_ = {
  key: 0,
  class: "search-section"
}, J_ = { class: "search-header" }, Q_ = { class: "search-bar" }, Y_ = {
  key: 1,
  class: "search-results"
}, X_ = {
  key: 0,
  class: "loading-state"
}, Z_ = {
  key: 1,
  class: "error-state"
}, ek = {
  key: 2,
  class: "results-list"
}, tk = ["onClick"], sk = { class: "repo-header" }, ok = { class: "repo-id" }, nk = { class: "repo-stats" }, ak = {
  class: "stat",
  title: "Downloads"
}, lk = {
  class: "stat",
  title: "Likes"
}, ik = {
  key: 0,
  class: "repo-desc"
}, rk = {
  key: 1,
  class: "repo-tags"
}, ck = {
  key: 3,
  class: "empty-state"
}, uk = {
  key: 4,
  class: "hint-state"
}, dk = /* @__PURE__ */ be({
  __name: "HuggingFaceTab",
  props: {
    modeKind: { default: "download" },
    actionLabel: { default: "Queue Download" }
  },
  emits: ["queue", "selectSource"],
  setup(e) {
    const { searchHuggingFaceRepos: s, getConfig: o } = ct(), a = k("search"), l = k(""), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k(null), f = k("main"), p = k(), w = k(), g = k(!1), _ = k(null), C = P(() => {
      if (!u.value) return !1;
      const j = u.value.toLowerCase();
      return u.value.includes("401") || u.value.includes("403") || j.includes("authentication") || j.includes("unauthorized");
    });
    function x(j) {
      return j >= 1e6 ? `${(j / 1e6).toFixed(1)}M` : j >= 1e3 ? `${(j / 1e3).toFixed(1)}K` : String(j);
    }
    async function S() {
      const j = l.value.trim();
      if (!j) return;
      u.value = null;
      const L = a_(j);
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
      if (/^[\w-]+\/[\w.-]+$/.test(j) && !j.includes("://")) {
        v.value = j, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
        return;
      }
      c.value = !0;
      try {
        const q = await s(j);
        r.value = q.results, d.value = !0;
      } catch (q) {
        u.value = q instanceof Error ? q.message : "Search failed";
      } finally {
        c.value = !1;
      }
    }
    function T(j) {
      v.value = j, f.value = "main", p.value = void 0, w.value = void 0, a.value = "browse";
    }
    function M() {
      a.value = "search", v.value = null, p.value = void 0, w.value = void 0;
    }
    async function E() {
      try {
        const j = await o();
        _.value = j.huggingface_token || null;
      } catch (j) {
        console.error("Failed to load config:", j);
      }
    }
    function D() {
      E(), C.value && l.value && S();
    }
    function z() {
      _.value = null;
    }
    return at(E), (j, L) => (n(), i("div", q_, [
      a.value === "search" ? (n(), i("div", K_, [
        t("div", J_, [
          t("div", Q_, [
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
      a.value === "search" ? (n(), i("div", Y_, [
        c.value ? (n(), i("div", X_, " Searching HuggingFace... ")) : u.value ? (n(), i("div", Z_, [
          t("p", null, m(u.value), 1),
          C.value ? (n(), R(De, {
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
        ])) : r.value.length > 0 ? (n(), i("div", ek, [
          (n(!0), i(B, null, ge(r.value, (q) => (n(), i("div", {
            key: q.repo_id,
            class: "repo-card",
            onClick: (ce) => T(q.repo_id)
          }, [
            t("div", sk, [
              t("span", ok, m(q.repo_id), 1),
              t("div", nk, [
                t("span", ak, [
                  L[8] || (L[8] = t("span", { class: "stat-icon" }, "↓", -1)),
                  $(" " + m(x(q.downloads)), 1)
                ]),
                t("span", lk, [
                  L[9] || (L[9] = t("span", { class: "stat-icon" }, "★", -1)),
                  $(" " + m(x(q.likes)), 1)
                ])
              ])
            ]),
            q.description ? (n(), i("p", ik, m(q.description), 1)) : y("", !0),
            q.tags.length > 0 ? (n(), i("div", rk, [
              (n(!0), i(B, null, ge(q.tags.slice(0, 5), (ce) => (n(), i("span", {
                key: ce,
                class: "tag"
              }, m(ce), 1))), 128))
            ])) : y("", !0)
          ], 8, tk))), 128))
        ])) : d.value ? (n(), i("div", ck, " No repositories found ")) : (n(), i("div", uk, " Enter a HuggingFace URL, repo ID (user/repo), or search term "))
      ])) : (n(), R(L_, {
        key: 2,
        "repo-id": v.value,
        revision: f.value,
        "initial-path": p.value,
        "preselected-file": w.value,
        mode: e.modeKind,
        "action-label": e.actionLabel,
        onBack: M,
        onQueue: L[3] || (L[3] = (q) => j.$emit("queue", q)),
        onSelectSource: L[4] || (L[4] = (q) => j.$emit("selectSource", q))
      }, null, 8, ["repo-id", "revision", "initial-path", "preselected-file", "mode", "action-label"])),
      g.value ? (n(), R(H_, {
        key: 3,
        provider: "huggingface",
        "current-token-mask": _.value,
        onClose: L[5] || (L[5] = (q) => g.value = !1),
        onSaved: D,
        onCleared: z
      }, null, 8, ["current-token-mask"])) : y("", !0)
    ]));
  }
}), lc = /* @__PURE__ */ xe(dk, [["__scopeId", "data-v-6ebbcfa4"]]), mk = { class: "candidate-card" }, fk = { class: "candidate-main" }, vk = { class: "candidate-url" }, pk = { class: "candidate-meta" }, gk = { class: "meta-chip" }, hk = {
  key: 0,
  class: "meta-chip"
}, yk = {
  key: 1,
  class: "meta-chip"
}, wk = {
  key: 0,
  class: "reason-list",
  "aria-label": "Why this link matched"
}, _k = { class: "reason-heading" }, kk = {
  key: 1,
  class: "candidate-context"
}, bk = { class: "candidate-actions" }, $k = /* @__PURE__ */ be({
  __name: "ModelSourceCandidateCard",
  props: {
    candidate: {},
    actionLabel: { default: "Use as Source" },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["select", "showMatchInfo"],
  setup(e, { emit: s }) {
    const o = s;
    function a(r) {
      return r === "huggingface" ? "Hugging Face" : r === "civitai" ? "Civitai" : "Direct URL";
    }
    function l(r) {
      return r >= 75 ? "Strong" : r >= 45 ? "Possible" : "Weak";
    }
    return (r, c) => {
      var u;
      return n(), i("article", mk, [
        t("div", fk, [
          t("div", vk, m(e.candidate.url), 1),
          t("div", pk, [
            t("span", gk, [
              c[2] || (c[2] = t("span", { class: "chip-label" }, "Provider", -1)),
              t("span", null, m(a(e.candidate.source_type)), 1)
            ]),
            e.candidate.workflow ? (n(), i("span", hk, [
              c[3] || (c[3] = t("span", { class: "chip-label" }, "Workflow", -1)),
              t("span", null, m(e.candidate.workflow), 1)
            ])) : y("", !0),
            e.candidate.confidence ? (n(), i("span", yk, [
              c[4] || (c[4] = t("span", { class: "chip-label" }, "Match", -1)),
              t("span", null, m(l(e.candidate.confidence)), 1)
            ])) : y("", !0)
          ]),
          (u = e.candidate.reasons) != null && u.length ? (n(), i("div", wk, [
            t("div", _k, [
              c[5] || (c[5] = t("span", { class: "reason-label" }, "Matched by", -1)),
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
          e.candidate.context ? (n(), i("details", kk, [
            c[6] || (c[6] = t("summary", null, "Workflow snippet", -1)),
            t("p", null, m(e.candidate.context), 1)
          ])) : y("", !0)
        ]),
        t("div", bk, [
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
}), ic = /* @__PURE__ */ xe($k, [["__scopeId", "data-v-18b56588"]]), Ck = { class: "source-url-form" }, xk = { class: "input-group" }, Sk = { key: 0 }, Ik = {
  key: 1,
  class: "description"
}, Ek = { class: "actions" }, Tk = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = P(() => o.modelValue.trim()), r = P(() => {
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
    return (d, v) => (n(), i("div", Ck, [
      t("div", xk, [
        e.label ? (n(), i("label", Sk, m(e.label), 1)) : y("", !0),
        b(bt, {
          "model-value": e.modelValue,
          placeholder: e.placeholder,
          error: r.value || void 0,
          "full-width": "",
          "onUpdate:modelValue": v[0] || (v[0] = (f) => a("update:modelValue", f)),
          onEnter: u
        }, null, 8, ["model-value", "placeholder", "error"]),
        e.description ? (n(), i("p", Ik, m(e.description), 1)) : y("", !0)
      ]),
      ot(d.$slots, "default", {}, void 0),
      t("div", Ek, [
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
}), rc = /* @__PURE__ */ xe(Tk, [["__scopeId", "data-v-e2610d45"]]), Mk = { class: "source-picker" }, Pk = {
  key: 0,
  class: "model-summary"
}, Rk = { class: "model-heading" }, Lk = { class: "summary-name" }, Dk = { class: "summary-meta" }, Nk = {
  key: 0,
  class: "hash-row"
}, Uk = { class: "hash-value" }, Ok = {
  key: 1,
  class: "hash-row"
}, Ak = { class: "hash-value" }, zk = {
  key: 2,
  class: "hash-row"
}, Fk = { class: "hash-value" }, Vk = {
  key: 4,
  class: "hash-error"
}, Bk = { class: "tab-bar" }, Wk = ["onClick"], Gk = {
  key: 1,
  class: "tab-content"
}, jk = { class: "section-header-row" }, Hk = {
  key: 0,
  class: "state-message"
}, qk = {
  key: 1,
  class: "error-message"
}, Kk = {
  key: 2,
  class: "candidate-list"
}, Jk = {
  key: 3,
  class: "state-message"
}, Qk = {
  key: 2,
  class: "tab-content source-browser-content"
}, Yk = {
  key: 3,
  class: "tab-content"
}, Xk = { class: "section-header-row" }, Zk = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s, { getModelSourceCandidates: l, computeModelHashes: r } = ct(), c = [
      { id: "workflow", label: "Workflow Links" },
      { id: "huggingface", label: "Hugging Face" },
      { id: "direct", label: "Direct URL" }
    ], u = k("workflow"), d = k([]), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(!1), _ = k(null), C = P(() => d.value.filter((M) => M.source === "workflow")), x = P(() => !!(o.model.hash && (!o.model.blake3 || !o.model.sha256)));
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
    async function T() {
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
    return at(S), (M, E) => (n(), i("div", Mk, [
      e.showModelSummary ? (n(), i("div", Pk, [
        t("div", Rk, [
          E[6] || (E[6] = t("div", { class: "summary-label" }, "Local model", -1)),
          t("div", Lk, m(e.model.filename), 1)
        ]),
        t("div", Dk, [
          e.model.hash ? (n(), i("div", Nk, [
            E[7] || (E[7] = t("span", { class: "hash-label" }, "quick hash", -1)),
            t("span", Uk, m(e.model.hash), 1)
          ])) : y("", !0),
          e.model.blake3 ? (n(), i("div", Ok, [
            E[8] || (E[8] = t("span", { class: "hash-label" }, "blake3", -1)),
            t("span", Ak, m(e.model.blake3), 1)
          ])) : y("", !0),
          e.model.sha256 ? (n(), i("div", zk, [
            E[9] || (E[9] = t("span", { class: "hash-label" }, "sha256", -1)),
            t("span", Fk, m(e.model.sha256), 1)
          ])) : y("", !0),
          x.value ? (n(), R(De, {
            key: 3,
            class: "compute-hashes-btn",
            variant: "secondary",
            size: "sm",
            loading: g.value,
            onClick: T
          }, {
            default: h(() => [...E[10] || (E[10] = [
              $(" Compute full hashes ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])) : y("", !0),
          _.value ? (n(), i("p", Vk, m(_.value), 1)) : y("", !0)
        ])
      ])) : y("", !0),
      t("div", Bk, [
        (n(), i(B, null, ge(c, (D) => t("button", {
          key: D.id,
          class: Be(["tab-btn", { active: u.value === D.id }]),
          onClick: (z) => u.value = D.id
        }, m(D.label), 11, Wk)), 64))
      ]),
      u.value === "workflow" ? (n(), i("section", Gk, [
        t("div", jk, [
          E[12] || (E[12] = t("div", null, [
            t("h4", null, "Workflow Links"),
            t("p", null, "Candidate model links found in saved workflow notes or metadata.")
          ], -1)),
          b(De, {
            variant: "secondary",
            size: "sm",
            loading: v.value,
            onClick: S
          }, {
            default: h(() => [...E[11] || (E[11] = [
              $(" Scan ", -1)
            ])]),
            _: 1
          }, 8, ["loading"])
        ]),
        v.value ? (n(), i("div", Hk, "Scanning workflows...")) : f.value ? (n(), i("div", qk, m(f.value), 1)) : C.value.length ? (n(), i("div", Kk, [
          (n(!0), i(B, null, ge(C.value, (D) => (n(), R(ic, {
            key: `${D.workflow}:${D.url}`,
            candidate: D,
            "action-label": e.actionLabel,
            loading: e.loadingUrl === D.url,
            onSelect: E[0] || (E[0] = (z) => a("selectSource", z)),
            onShowMatchInfo: E[1] || (E[1] = (z) => w.value = !0)
          }, null, 8, ["candidate", "action-label", "loading"]))), 128))
        ])) : (n(), i("div", Jk, " No likely workflow links found. Try direct URL for now. "))
      ])) : u.value === "huggingface" ? (n(), i("section", Qk, [
        b(lc, {
          "mode-kind": "source",
          "action-label": e.actionLabel,
          onSelectSource: E[2] || (E[2] = (D) => a("selectSource", D))
        }, null, 8, ["action-label"])
      ])) : u.value === "direct" ? (n(), i("section", Yk, [
        t("div", Xk, [
          t("div", null, [
            E[13] || (E[13] = t("h4", null, "Direct URL", -1)),
            t("p", null, m(e.directDescription), 1)
          ])
        ]),
        b(rc, {
          modelValue: p.value,
          "onUpdate:modelValue": E[3] || (E[3] = (D) => p.value = D),
          label: "",
          placeholder: e.directPlaceholder,
          "action-label": e.actionLabel,
          loading: e.loadingUrl === p.value.trim(),
          onSubmit: E[4] || (E[4] = (D) => a("selectSource", D))
        }, null, 8, ["modelValue", "placeholder", "action-label", "loading"])
      ])) : y("", !0),
      b(Yt, {
        show: w.value,
        title: "About Match Reasons",
        "max-width": "460px",
        "overlay-z-index": e.overlayZIndex + 2,
        onClose: E[5] || (E[5] = (D) => w.value = !1)
      }, {
        content: h(() => [...E[14] || (E[14] = [
          t("ul", { class: "match-info-list" }, [
            t("li", null, [
              t("strong", null, "Filename match"),
              $(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            t("li", null, [
              t("strong", null, "Model name match"),
              $(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            t("li", null, [
              t("strong", null, "Hash match"),
              $(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            t("li", null, [
              t("strong", null, "Category nearby"),
              $(" means the workflow text near the link mentions the model folder/category.")
            ]),
            t("li", null, [
              t("strong", null, "Model file URL"),
              $(" means the URL itself ends like a model file.")
            ]),
            t("li", null, [
              t("strong", null, "Known model host"),
              $(" means the URL points at a recognized model host such as Hugging Face or Civitai.")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show", "overlay-z-index"])
    ]));
  }
}), eb = /* @__PURE__ */ xe(Zk, [["__scopeId", "data-v-2a46a79f"]]), tb = {
  key: 0,
  class: "error-message"
}, sb = /* @__PURE__ */ be({
  __name: "ModelSourceModal",
  props: {
    model: {},
    overlayZIndex: { default: 10011 }
  },
  emits: ["close", "saved", "hashesComputed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { addModelSource: l } = ct(), r = k(o.model), c = k(null), u = k(null);
    yt(() => o.model, (f) => {
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
    return (f, p) => (n(), R(It, {
      title: `Find Source: ${e.model.filename}`,
      size: "lg",
      "fixed-height": "",
      "overlay-z-index": e.overlayZIndex,
      onClose: p[1] || (p[1] = (w) => a("close"))
    }, {
      body: h(() => [
        b(eb, {
          model: r.value,
          "loading-url": c.value,
          "overlay-z-index": e.overlayZIndex,
          "action-label": "Use as Source",
          onSelectSource: d,
          onHashesComputed: v
        }, null, 8, ["model", "loading-url", "overlay-z-index"]),
        u.value ? (n(), i("p", tb, m(u.value), 1)) : y("", !0)
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
}), ob = /* @__PURE__ */ xe(sb, [["__scopeId", "data-v-62104cdb"]]);
async function El(e) {
  var o;
  if (typeof navigator < "u" && ((o = navigator.clipboard) != null && o.writeText)) {
    await navigator.clipboard.writeText(e);
    return;
  }
  if (typeof document > "u")
    throw new Error("Clipboard unavailable");
  const s = document.createElement("textarea");
  s.value = e, s.setAttribute("readonly", ""), s.style.position = "fixed", s.style.top = "-1000px", s.style.left = "-1000px", s.style.opacity = "0", document.body.appendChild(s);
  try {
    if (s.focus(), s.select(), s.setSelectionRange(0, s.value.length), !document.execCommand("copy"))
      throw new Error("execCommand copy failed");
  } finally {
    s.remove();
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
  setup(e, { emit: s }) {
    const o = e, a = s, { getModelDetails: l, removeModelSource: r, computeModelHashes: c } = ct(), u = k(null), d = k(!0), v = k(null), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), x = P(() => {
      var ne;
      return !!((ne = u.value) != null && ne.hash && (!u.value.blake3 || !u.value.sha256));
    }), S = k(null);
    let T = null;
    function M(ne, Y = "success", we = 2e3) {
      T && clearTimeout(T), S.value = { message: ne, type: Y }, T = setTimeout(() => {
        S.value = null;
      }, we);
    }
    function E(ne) {
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
    async function j() {
      w.value = "Source added successfully!", g.value = !1, await ce(), a("sourceSaved");
    }
    async function L() {
      await ce();
    }
    async function q() {
      var ne;
      if ((ne = u.value) != null && ne.hash) {
        _.value = !0, C.value = null;
        try {
          u.value = await c(u.value.hash), M("Hashes computed successfully!");
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
      } catch (ne) {
        v.value = ne instanceof Error ? ne.message : "Failed to load model details";
      } finally {
        d.value = !1;
      }
    }
    return at(ce), (ne, Y) => {
      var we;
      return n(), i(B, null, [
        b(It, {
          title: `Model Details: ${((we = u.value) == null ? void 0 : we.filename) || "Loading..."}`,
          size: "lg",
          loading: d.value,
          error: v.value,
          "overlay-z-index": e.overlayZIndex,
          onClose: Y[5] || (Y[5] = (Z) => ne.$emit("close"))
        }, {
          body: h(() => {
            var Z, W, K, ke;
            return [
              u.value ? (n(), i("div", nb, [
                t("section", ab, [
                  t("div", lb, [
                    Y[7] || (Y[7] = t("span", { class: "detail-label" }, "Hash:", -1)),
                    t("span", ib, m(u.value.hash || "Not computed"), 1),
                    u.value.hash ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[0] || (Y[0] = (se) => D(u.value.hash))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", rb, [
                    Y[8] || (Y[8] = t("span", { class: "detail-label" }, "Blake3:", -1)),
                    t("span", cb, m(u.value.blake3 || "Not computed"), 1),
                    u.value.blake3 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[1] || (Y[1] = (se) => D(u.value.blake3))
                    }, "Copy")) : y("", !0)
                  ]),
                  t("div", ub, [
                    Y[9] || (Y[9] = t("span", { class: "detail-label" }, "SHA256:", -1)),
                    t("span", db, m(u.value.sha256 || "Not computed"), 1),
                    u.value.sha256 ? (n(), i("button", {
                      key: 0,
                      class: "copy-btn",
                      onClick: Y[2] || (Y[2] = (se) => D(u.value.sha256))
                    }, "Copy")) : y("", !0)
                  ]),
                  x.value ? (n(), i("div", mb, [
                    Y[10] || (Y[10] = t("span", { class: "detail-label" }, null, -1)),
                    t("span", fb, [
                      t("button", {
                        class: "compute-hashes-btn",
                        disabled: _.value,
                        onClick: q
                      }, m(_.value ? "Computing hashes..." : "Compute Full Hashes"), 9, vb)
                    ])
                  ])) : y("", !0),
                  C.value ? (n(), i("div", pb, [
                    Y[11] || (Y[11] = t("span", { class: "detail-label" }, null, -1)),
                    t("span", gb, m(C.value), 1)
                  ])) : y("", !0),
                  t("div", hb, [
                    Y[12] || (Y[12] = t("span", { class: "detail-label" }, "Size:", -1)),
                    t("span", yb, m(E(u.value.size)), 1)
                  ]),
                  t("div", wb, [
                    Y[13] || (Y[13] = t("span", { class: "detail-label" }, "Category:", -1)),
                    t("span", _b, m(u.value.category), 1)
                  ]),
                  t("div", kb, [
                    Y[14] || (Y[14] = t("span", { class: "detail-label" }, "Last Seen:", -1)),
                    t("span", bb, m(u.value.last_seen || "Unknown"), 1)
                  ])
                ]),
                t("section", $b, [
                  t("h4", Cb, "Locations (" + m(((Z = u.value.locations) == null ? void 0 : Z.length) || 0) + ")", 1),
                  (W = u.value.locations) != null && W.length ? (n(), i("div", xb, [
                    (n(!0), i(B, null, ge(u.value.locations, (se, fe) => (n(), i("div", {
                      key: fe,
                      class: "location-item"
                    }, [
                      t("span", Sb, m(se.path), 1),
                      se.modified ? (n(), i("span", Ib, "Modified: " + m(se.modified), 1)) : y("", !0),
                      se.path ? (n(), i("button", {
                        key: 1,
                        class: "open-location-btn",
                        onClick: (U) => D(se.path)
                      }, " Copy File Path ", 8, Eb)) : y("", !0)
                    ]))), 128))
                  ])) : (n(), i("div", Tb, "No locations found"))
                ]),
                t("section", Mb, [
                  t("div", Pb, [
                    t("h4", Rb, "Download Sources (" + m(((K = u.value.sources) == null ? void 0 : K.length) || 0) + ")", 1),
                    t("button", {
                      class: "find-source-btn",
                      onClick: Y[3] || (Y[3] = (se) => g.value = !0)
                    }, " Find Source ")
                  ]),
                  (ke = u.value.sources) != null && ke.length ? (n(), i("div", Lb, [
                    (n(!0), i(B, null, ge(u.value.sources, (se, fe) => (n(), i("div", {
                      key: fe,
                      class: "source-item"
                    }, [
                      t("span", Db, m(se.type) + ":", 1),
                      t("a", {
                        href: se.url,
                        target: "_blank",
                        class: "source-url"
                      }, m(se.url), 9, Nb),
                      t("button", {
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
            t("button", {
              class: "btn-secondary",
              onClick: Y[4] || (Y[4] = (Z) => ne.$emit("close"))
            }, "Close")
          ]),
          _: 1
        }, 8, ["title", "loading", "error", "overlay-z-index"]),
        (n(), R(Lt, { to: "body" }, [
          S.value ? (n(), i("div", {
            key: 0,
            class: Be(["toast", S.value.type])
          }, m(S.value.message), 3)) : y("", !0)
        ])),
        u.value && g.value ? (n(), R(ob, {
          key: 0,
          model: u.value,
          "overlay-z-index": (e.overlayZIndex || 10003) + 2,
          onClose: Y[6] || (Y[6] = (Z) => g.value = !1),
          onSaved: j,
          onHashesComputed: L
        }, null, 8, ["model", "overlay-z-index"])) : y("", !0)
      ], 64);
    };
  }
}), Tl = /* @__PURE__ */ xe(Fb, [["__scopeId", "data-v-cd808fbc"]]), Vb = { class: "workflow-links-tab" }, Bb = { class: "section-header-row" }, Wb = {
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
  setup(e, { emit: s }) {
    const o = s, { getWorkflowSourceCandidates: a } = ct(), l = k([]), r = k(!1), c = k(null), u = k(!1), d = P(() => l.value.filter((f) => f.source === "workflow"));
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
      t("div", Bb, [
        p[4] || (p[4] = t("div", null, [
          t("h4", null, "Workflow Links"),
          t("p", null, "Model links found in saved workflow notes or metadata.")
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
        (n(!0), i(B, null, ge(d.value, (w) => (n(), R(ic, {
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
          t("ul", { class: "match-info-list" }, [
            t("li", null, [
              t("strong", null, "Filename match"),
              $(" means the link or nearby workflow text includes the exact model filename.")
            ]),
            t("li", null, [
              t("strong", null, "Model name match"),
              $(" means the link or nearby workflow text includes the filename without its extension.")
            ]),
            t("li", null, [
              t("strong", null, "Hash match"),
              $(" means a known quick, Blake3, or SHA256 hash appears near the link.")
            ]),
            t("li", null, [
              t("strong", null, "Category nearby"),
              $(" means the workflow text near the link mentions the model folder/category.")
            ]),
            t("li", null, [
              t("strong", null, "Model file URL"),
              $(" means the URL itself ends like a model file.")
            ]),
            t("li", null, [
              t("strong", null, "Known model host"),
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
    return (s, o) => (n(), i("div", Jb, [...o[0] || (o[0] = [
      t("div", { class: "placeholder" }, [
        t("div", { class: "icon" }, "🎨"),
        t("h3", null, "Civitai Integration"),
        t("p", null, "Coming soon! Civitai model search and download will be available in a future update.")
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(""), r = k("");
    yt(() => o.initialUrl, (v) => {
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
      b(rc, {
        modelValue: l.value,
        "onUpdate:modelValue": f[1] || (f[1] = (p) => l.value = p),
        label: "Download URL",
        placeholder: "https://example.com/model.safetensors",
        "action-label": "Queue Download",
        disabled: !r.value.trim() || !c.value,
        onSubmit: u
      }, {
        default: h(() => [
          b(ac, {
            modelValue: r.value,
            "onUpdate:modelValue": f[0] || (f[0] = (p) => r.value = p)
          }, null, 8, ["modelValue"]),
          l.value.trim() && !c.value ? (n(), i("p", Zb, " Could not infer a filename from this URL. ")) : y("", !0),
          f[2] || (f[2] = t("p", { class: "note" }, "Model will be queued for background download.", -1))
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
  setup(e, { emit: s }) {
    const o = s, { addToQueue: a } = Lo(), l = [
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
    return (p, w) => e.show ? (n(), R(It, {
      key: 0,
      title: "DOWNLOAD NEW MODEL",
      size: "xl",
      "fixed-height": "",
      onClose: f
    }, {
      body: h(() => [
        t("div", s2, [
          t("div", o2, [
            (n(), i(B, null, ge(l, (g) => t("button", {
              key: g.id,
              class: Be(["tab-btn", { active: r.value === g.id }]),
              onClick: (_) => r.value = g.id
            }, m(g.icon) + " " + m(g.label), 11, n2)), 64))
          ]),
          t("div", a2, [
            r.value === "workflow" ? (n(), R(Kb, {
              key: 0,
              onSelectUrl: v
            })) : r.value === "huggingface" ? (n(), R(lc, {
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
}), cc = /* @__PURE__ */ xe(l2, [["__scopeId", "data-v-de2e4fac"]]), i2 = /* @__PURE__ */ be({
  __name: "ModelsEnvSection",
  emits: ["navigate"],
  setup(e, { emit: s }) {
    const o = s, { getEnvironmentModels: a, getStatus: l } = ct(), r = k([]), c = k([]), u = k("production"), d = k(!1), v = k(null), f = k(""), p = k(!1), w = k(null), g = k(!1);
    function _() {
      p.value = !1, o("navigate", "model-index");
    }
    const C = P(
      () => r.value.reduce((L, q) => L + (q.size || 0), 0)
    ), x = P(() => {
      if (!f.value.trim()) return r.value;
      const L = f.value.toLowerCase();
      return r.value.filter((q) => q.filename.toLowerCase().includes(L));
    }), S = P(() => {
      if (!f.value.trim()) return c.value;
      const L = f.value.toLowerCase();
      return c.value.filter((q) => q.filename.toLowerCase().includes(L));
    }), T = P(() => {
      const L = {};
      for (const ce of x.value) {
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
    function E(L) {
      w.value = L.hash || L.filename;
    }
    function D(L) {
      o("navigate", "model-index");
    }
    function z(L) {
      alert(`Download functionality not yet implemented for ${L}`);
    }
    async function j() {
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
    return at(j), (L, q) => (n(), i(B, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
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
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
            onRetry: j
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            r.value.length ? (n(), R(Il, {
              key: 0,
              variant: "compact"
            }, {
              default: h(() => [
                $(" Total: " + m(r.value.length) + " models • " + m(M(C.value)) + " (symlinked from workspace) ", 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, ge(T.value, (ce) => (n(), R(St, {
              key: ce.type,
              title: ce.type.toUpperCase(),
              count: ce.models.length,
              collapsible: !0,
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(ce.models, (ne) => (n(), R(Vt, {
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
                      onClick: (Y) => E(ne)
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
            S.value.length ? (n(), R(St, {
              key: 1,
              title: "MISSING",
              count: S.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(S.value, (ce) => (n(), R(Vt, {
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
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Not found in workspace index", -1)
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
            !x.value.length && !S.value.length ? (n(), R(rs, {
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
          t("p", null, [
            q[13] || (q[13] = $(" These are models currently used by workflows in ", -1)),
            t("strong", null, '"' + m(u.value) + '"', 1),
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
      w.value ? (n(), R(Tl, {
        key: 0,
        identifier: w.value,
        onClose: q[4] || (q[4] = (ce) => w.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      b(cc, {
        show: g.value,
        onClose: q[5] || (q[5] = (ce) => g.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), r2 = /* @__PURE__ */ xe(i2, [["__scopeId", "data-v-af3ca736"]]), c2 = {
  key: 0,
  class: "indexing-progress"
}, u2 = { class: "progress-info" }, d2 = { class: "progress-label" }, m2 = { class: "progress-count" }, f2 = { class: "progress-bar" }, v2 = { class: "modal-content" }, p2 = { class: "modal-header" }, g2 = { class: "modal-body" }, h2 = { class: "input-group" }, y2 = { class: "current-path" }, w2 = { class: "input-group" }, _2 = { class: "modal-footer" }, k2 = /* @__PURE__ */ be({
  __name: "ModelIndexSection",
  emits: ["refresh"],
  setup(e, { emit: s }) {
    const {
      getWorkspaceModels: o,
      scanWorkspaceModels: a,
      getModelsDirectory: l,
      setModelsDirectory: r
    } = ct(), c = s, u = k([]), d = k(!1), v = k(!1), f = k(null), p = k(""), w = k(!1), g = k(null), _ = k(!1), C = k(null), x = k(""), S = k(!1), T = k(!1), M = k(null), E = P(
      () => u.value.reduce((we, Z) => we + (Z.size || 0), 0)
    ), D = P(() => {
      if (!p.value.trim()) return u.value;
      const we = p.value.toLowerCase();
      return u.value.filter((Z) => {
        const W = Z, K = Z.sha256 || W.sha256_hash || "";
        return Z.filename.toLowerCase().includes(we) || K.toLowerCase().includes(we);
      });
    }), z = P(() => {
      const we = {};
      for (const W of D.value) {
        const K = W.type || "other";
        we[K] || (we[K] = []), we[K].push(W);
      }
      const Z = ["checkpoints", "loras", "vae", "controlnet", "upscale_models", "clip", "embeddings", "clip_vision", "diffusion_models", "text_encoders", "unet", "configs", "diffusers"];
      return Object.entries(we).sort(([W], [K]) => {
        const ke = Z.indexOf(W), se = Z.indexOf(K);
        return ke >= 0 && se >= 0 ? ke - se : ke >= 0 ? -1 : se >= 0 ? 1 : W.localeCompare(K);
      }).map(([W, K]) => ({ type: W, models: K }));
    });
    function j(we) {
      if (!we) return "Unknown";
      const Z = 1024 * 1024 * 1024, W = 1024 * 1024;
      return we >= Z ? `${(we / Z).toFixed(1)} GB` : we >= W ? `${(we / W).toFixed(0)} MB` : `${(we / 1024).toFixed(0)} KB`;
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
      if (x.value.trim()) {
        S.value = !0, f.value = null;
        try {
          const we = await r(x.value.trim());
          C.value = we.path, _.value = !1, x.value = "", await ne(), console.log(`Directory changed: ${we.models_indexed} models indexed`), c("refresh");
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
        C.value = we.path;
      } catch {
      }
    }
    return at(() => {
      ne(), Y();
    }), (we, Z) => (n(), i(B, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "WORKSPACE MODEL INDEX",
            "show-info": !0,
            stacked: !0,
            onInfoClick: Z[2] || (Z[2] = (W) => w.value = !0)
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
                onClick: Z[0] || (Z[0] = (W) => _.value = !0)
              }, {
                default: h(() => [...Z[11] || (Z[11] = [
                  $(" Change Directory ", -1)
                ])]),
                _: 1
              }),
              b(Me, {
                variant: "primary",
                size: "sm",
                onClick: Z[1] || (Z[1] = (W) => T.value = !0)
              }, {
                default: h(() => [...Z[12] || (Z[12] = [
                  t("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 16 16",
                    fill: "currentColor"
                  }, [
                    t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                    t("path", { d: "M14 14H2v-2h12v2z" })
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
            t("div", u2, [
              t("span", d2, m(M.value.message), 1),
              t("span", m2, m(M.value.current) + "/" + m(M.value.total), 1)
            ]),
            t("div", f2, [
              t("div", {
                class: "progress-fill",
                style: Rt({ width: `${M.value.current / M.value.total * 100}%` })
              }, null, 4)
            ])
          ])) : y("", !0),
          b(ro, {
            modelValue: p.value,
            "onUpdate:modelValue": Z[3] || (Z[3] = (W) => p.value = W),
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
                $(" Total: " + m(u.value.length) + " models • " + m(j(E.value)), 1)
              ]),
              _: 1
            })) : y("", !0),
            (n(!0), i(B, null, ge(z.value, (W) => (n(), R(St, {
              key: W.type,
              title: W.type.toUpperCase(),
              count: W.models.length,
              collapsible: !0,
              "initially-expanded": !1
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(W.models, (K) => (n(), R(Vt, {
                  key: K.sha256 || K.filename,
                  status: "synced"
                }, {
                  icon: h(() => [...Z[13] || (Z[13] = [
                    $("📦", -1)
                  ])]),
                  title: h(() => [
                    $(m(K.filename), 1)
                  ]),
                  subtitle: h(() => [
                    $(m(j(K.size)), 1)
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
                      default: h(() => [...Z[14] || (Z[14] = [
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
        onClose: Z[4] || (Z[4] = (W) => w.value = !1)
      }, {
        content: h(() => [...Z[15] || (Z[15] = [
          t("p", null, [
            $(" Content-addressable model storage shared across "),
            t("strong", null, "all environments"),
            $(". Models are deduplicated by hash. ")
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value ? (n(), R(Tl, {
        key: 0,
        identifier: g.value,
        onClose: Z[5] || (Z[5] = (W) => g.value = null)
      }, null, 8, ["identifier"])) : y("", !0),
      (n(), R(Lt, { to: "body" }, [
        _.value ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: Z[9] || (Z[9] = vt((W) => _.value = !1, ["self"]))
        }, [
          t("div", v2, [
            t("div", p2, [
              Z[16] || (Z[16] = t("h3", null, "Change Models Directory", -1)),
              t("button", {
                class: "modal-close",
                onClick: Z[6] || (Z[6] = (W) => _.value = !1)
              }, "✕")
            ]),
            t("div", g2, [
              t("div", h2, [
                Z[17] || (Z[17] = t("label", null, "Current Directory", -1)),
                t("code", y2, m(C.value || "Not set"), 1)
              ]),
              t("div", w2, [
                Z[18] || (Z[18] = t("label", null, "New Directory Path", -1)),
                b(bt, {
                  modelValue: x.value,
                  "onUpdate:modelValue": Z[7] || (Z[7] = (W) => x.value = W),
                  placeholder: "/path/to/models"
                }, null, 8, ["modelValue"])
              ]),
              Z[19] || (Z[19] = t("p", { class: "modal-note" }, " Note: Changing the directory will scan and index all models in the new location. This may take a few minutes for large collections. ", -1))
            ]),
            t("div", _2, [
              b(De, {
                variant: "secondary",
                onClick: Z[8] || (Z[8] = (W) => _.value = !1)
              }, {
                default: h(() => [...Z[20] || (Z[20] = [
                  $(" Cancel ", -1)
                ])]),
                _: 1
              }),
              b(De, {
                variant: "primary",
                disabled: !x.value.trim() || S.value,
                loading: S.value,
                onClick: ce
              }, {
                default: h(() => [
                  $(m(S.value ? "Indexing..." : "Change Directory"), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ])
          ])
        ])) : y("", !0)
      ])),
      b(cc, {
        show: T.value,
        onClose: Z[10] || (Z[10] = (W) => T.value = !1)
      }, null, 8, ["show"])
    ], 64));
  }
}), b2 = /* @__PURE__ */ xe(k2, [["__scopeId", "data-v-3705114c"]]), $2 = { class: "node-details" }, C2 = { class: "status-row" }, x2 = {
  key: 0,
  class: "detail-row"
}, S2 = { class: "value" }, I2 = { class: "detail-row" }, E2 = { class: "value" }, T2 = {
  key: 1,
  class: "detail-row"
}, M2 = { class: "value mono" }, P2 = {
  key: 2,
  class: "detail-row"
}, R2 = ["href"], L2 = {
  key: 3,
  class: "detail-row"
}, D2 = { class: "value mono small" }, N2 = { class: "detail-row" }, U2 = {
  key: 0,
  class: "value"
}, O2 = {
  key: 1,
  class: "workflow-list"
}, A2 = /* @__PURE__ */ be({
  __name: "NodeDetailsModal",
  props: {
    node: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "dev" : "installed" : "warning" : "missing"), r = P(() => o.node.installed ? o.node.tracked ? o.node.source === "development" ? "Development" : "Installed" : "Untracked" : "Missing"), c = P(() => ({
      registry: "ComfyUI Registry",
      git: "Git Repository",
      development: "Local Development",
      unknown: "Unknown",
      untracked: "Untracked"
    })[o.node.source] || o.node.source);
    return (u, d) => (n(), R(It, {
      title: `NODE DETAILS: ${e.node.name}`,
      size: "md",
      onClose: d[1] || (d[1] = (v) => a("close"))
    }, {
      body: h(() => [
        t("div", $2, [
          t("div", C2, [
            d[2] || (d[2] = t("span", { class: "label" }, "Status:", -1)),
            t("span", {
              class: Be(["status-badge", l.value])
            }, m(r.value), 3)
          ]),
          e.node.version ? (n(), i("div", x2, [
            d[3] || (d[3] = t("span", { class: "label" }, "Version:", -1)),
            t("span", S2, m(e.node.source === "development" ? "" : "v") + m(e.node.version), 1)
          ])) : y("", !0),
          t("div", I2, [
            d[4] || (d[4] = t("span", { class: "label" }, "Source:", -1)),
            t("span", E2, m(c.value), 1)
          ]),
          e.node.registry_id ? (n(), i("div", T2, [
            d[5] || (d[5] = t("span", { class: "label" }, "Registry ID:", -1)),
            t("span", M2, m(e.node.registry_id), 1)
          ])) : y("", !0),
          e.node.repository ? (n(), i("div", P2, [
            d[7] || (d[7] = t("span", { class: "label" }, "Repository:", -1)),
            t("a", {
              href: e.node.repository,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "repo-link"
            }, [
              $(m(e.node.repository) + " ", 1),
              d[6] || (d[6] = t("svg", {
                class: "external-icon",
                width: "12",
                height: "12",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M3.75 2A1.75 1.75 0 0 0 2 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 14 12.25v-3.5a.75.75 0 0 0-1.5 0v3.5a.25.25 0 0 1-.25.25h-8.5a.25.25 0 0 1-.25-.25v-8.5a.25.25 0 0 1 .25-.25h3.5a.75.75 0 0 0 0-1.5h-3.5z" }),
                t("path", { d: "M10 1a.75.75 0 0 0 0 1.5h2.44L7.22 7.72a.75.75 0 1 0 1.06 1.06l5.22-5.22V6a.75.75 0 0 0 1.5 0V1.75a.75.75 0 0 0-.75-.75H10z" })
              ], -1))
            ], 8, R2)
          ])) : y("", !0),
          e.node.download_url ? (n(), i("div", L2, [
            d[8] || (d[8] = t("span", { class: "label" }, "Download URL:", -1)),
            t("span", D2, m(e.node.download_url), 1)
          ])) : y("", !0),
          d[10] || (d[10] = t("div", { class: "section-divider" }, null, -1)),
          t("div", N2, [
            d[9] || (d[9] = t("span", { class: "label" }, "Used by:", -1)),
            !e.node.used_in_workflows || e.node.used_in_workflows.length === 0 ? (n(), i("span", U2, " Not used in any workflows ")) : (n(), i("div", O2, [
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
}), z2 = /* @__PURE__ */ xe(A2, [["__scopeId", "data-v-b342f626"]]), F2 = { class: "dialog-message" }, V2 = {
  key: 0,
  class: "dialog-details"
}, B2 = {
  key: 1,
  class: "dialog-warning"
}, W2 = /* @__PURE__ */ be({
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
    return (s, o) => (n(), R(It, {
      title: e.title,
      size: "sm",
      onClose: o[3] || (o[3] = (a) => s.$emit("cancel"))
    }, {
      body: h(() => [
        t("p", F2, m(e.message), 1),
        e.details && e.details.length ? (n(), i("div", V2, [
          (n(!0), i(B, null, ge(e.details, (a, l) => (n(), i("div", {
            key: l,
            class: "detail-item"
          }, " • " + m(a), 1))), 128))
        ])) : y("", !0),
        e.warning ? (n(), i("p", B2, [
          o[4] || (o[4] = t("span", { class: "warning-icon" }, "⚠", -1)),
          $(" " + m(e.warning), 1)
        ])) : y("", !0)
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: o[0] || (o[0] = (a) => s.$emit("cancel"))
        }, {
          default: h(() => [
            $(m(e.cancelLabel), 1)
          ]),
          _: 1
        }),
        e.secondaryAction ? (n(), R(De, {
          key: 0,
          variant: "secondary",
          onClick: o[1] || (o[1] = (a) => s.$emit("secondary"))
        }, {
          default: h(() => [
            $(m(e.secondaryLabel), 1)
          ]),
          _: 1
        })) : y("", !0),
        b(De, {
          variant: e.destructive ? "danger" : "primary",
          onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), Ml = /* @__PURE__ */ xe(W2, [["__scopeId", "data-v-3670b9f5"]]), G2 = { class: "mismatch-warning" }, j2 = { class: "version-mismatch" }, H2 = { class: "version-actual" }, q2 = { class: "version-expected" }, K2 = { style: { color: "var(--cg-color-warning)" } }, J2 = { style: { color: "var(--cg-color-warning)" } }, Q2 = {
  key: 0,
  class: "community-status-badge"
}, Y2 = { key: 0 }, X2 = {
  key: 1,
  style: { color: "var(--cg-color-text-muted)" }
}, Z2 = { style: { color: "var(--cg-color-text-muted)", "margin-left": "8px" } }, e$ = { class: "criticality-control" }, t$ = ["value", "disabled", "onChange"], s$ = /* @__PURE__ */ be({
  __name: "NodesSection",
  props: {
    versionMismatches: { default: () => [] }
  },
  emits: ["open-node-manager", "repair-environment", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, {
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
    }), p = k(!1), w = k(null), g = k(""), _ = k(!1), C = k(null), x = k(/* @__PURE__ */ new Set()), S = k(/* @__PURE__ */ new Set()), T = k(null), M = P(() => {
      if (!g.value.trim()) return f.value.nodes;
      const ve = g.value.toLowerCase();
      return f.value.nodes.filter(
        (le) => {
          var I, A;
          return le.name.toLowerCase().includes(ve) || ((I = le.description) == null ? void 0 : I.toLowerCase().includes(ve)) || ((A = le.repository) == null ? void 0 : A.toLowerCase().includes(ve));
        }
      );
    }), E = P(
      () => M.value.filter((ve) => ve.installed && ve.tracked)
    ), D = P(
      () => M.value.filter((ve) => !ve.installed && ve.tracked && !ve.issue_type)
    ), z = P(
      () => M.value.filter((ve) => ve.installed && !ve.tracked)
    ), j = P(
      () => M.value.filter((ve) => ve.issue_type === "version_gated")
    ), L = P(
      () => M.value.filter((ve) => ve.issue_type === "uninstallable")
    );
    function q(ve) {
      return ve.registry_id || ve.name;
    }
    function ce(ve) {
      return x.value.has(q(ve));
    }
    async function ne(ve, le) {
      const I = ve.registry_id;
      if (!I) {
        a("toast", `Node "${ve.name}" has no package id for install`, "warning");
        return;
      }
      if (le === "git" && !ve.repository) {
        a("toast", `Node "${ve.name}" has no repository URL for git install`, "warning");
        return;
      }
      const A = {
        id: I,
        version: "latest",
        selected_version: "latest",
        mode: "remote",
        channel: "default"
      };
      le === "git" && ve.repository && (A.repository = ve.repository, A.install_source = "git"), await d(A), x.value.add(q(ve)), a("toast", `✓ Queued install for "${ve.name}"`, "success");
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
    function Z(ve) {
      return !ve.used_in_workflows || ve.used_in_workflows.length === 0 ? "Not used in any workflows" : ve.used_in_workflows.length === 1 ? ve.used_in_workflows[0] : `${ve.used_in_workflows.length} workflows`;
    }
    function W(ve) {
      return ve.criticality === "optional" ? "optional" : "required";
    }
    function K(ve) {
      return S.value.has(ve.name);
    }
    async function ke(ve, le) {
      const I = le.target, A = W(ve), re = I.value;
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
          ve.criticality = A, I.value = A, a("toast", `Error updating criticality: ${Ee instanceof Error ? Ee.message : "Unknown error"}`, "error");
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
      C.value = ve;
    }
    function ye() {
      a("open-node-manager");
    }
    function ee(ve) {
      T.value = {
        title: "Track as Development Node",
        message: `Track "${ve}" as a development node? This will add it to your environment manifest with source='development'.`,
        warning: "Development nodes are tracked locally but not version-controlled.",
        confirmLabel: "Track as Dev",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
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
      T.value = {
        title: "Remove Untracked Node",
        message: `Remove "${ve}" from custom_nodes/?`,
        warning: "This will permanently delete the node directory.",
        confirmLabel: "Remove",
        destructive: !0,
        onConfirm: async () => {
          T.value = null;
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
      T.value = {
        title: "Install Missing Node",
        message: `Install "${ve}"?`,
        warning: "This will download and install the node from the registry.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
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
      T.value = {
        title: "Install Community-Mapped Package",
        message: `Install "${ve.name}" from the registry?`,
        warning: "This will queue a registry install through the manager queue.",
        confirmLabel: "Install",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
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
      T.value = {
        title: "Install Community-Mapped Package via Git",
        message: `Install "${ve.name}" from git?`,
        warning: "Use git install only when you explicitly need the repository source.",
        confirmLabel: "Install via Git",
        destructive: !1,
        onConfirm: async () => {
          T.value = null;
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
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "CUSTOM NODES",
            "show-info": !0,
            onInfoClick: le[0] || (le[0] = (I) => _.value = !0)
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
            "onUpdate:modelValue": le[1] || (le[1] = (I) => g.value = I),
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
            we.value ? (n(), R(St, {
              key: 0,
              title: "VERSION MISMATCHES",
              count: e.versionMismatches.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                t("div", G2, [
                  le[8] || (le[8] = t("span", { class: "warning-icon" }, "⚠", -1)),
                  t("span", null, m(e.versionMismatches.length) + " node(s) have wrong versions. Environment needs repair.", 1)
                ]),
                (n(!0), i(B, null, ge(e.versionMismatches, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[9] || (le[9] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", j2, [
                      t("span", H2, m(I.actual), 1),
                      le[10] || (le[10] = t("span", { class: "version-arrow" }, "→", -1)),
                      t("span", q2, m(I.expected), 1)
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
            j.value.length ? (n(), R(St, {
              key: 1,
              title: "BLOCKED",
              count: j.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(j.value, (I) => (n(), R(Vt, {
                  key: `blocked-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[12] || (le[12] = [
                    $("⛔", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", K2, m(se(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || fe(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Pe(I)
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
            L.value.length ? (n(), R(St, {
              key: 2,
              title: "COMMUNITY-MAPPED",
              count: L.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(L.value, (I) => (n(), R(Vt, {
                  key: `community-${I.name}`,
                  status: "warning"
                }, {
                  icon: h(() => [...le[14] || (le[14] = [
                    $("⚠", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    t("span", J2, m(U(I)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Guidance:",
                      value: I.issue_guidance || me(I)
                    }, null, 8, ["value"]),
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Pe(I)
                    }, {
                      default: h(() => [...le[15] || (le[15] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    ce(I) ? (n(), i("span", Q2, "Queued")) : (n(), i(B, { key: 1 }, [
                      I.registry_id ? (n(), R(Me, {
                        key: 0,
                        variant: "primary",
                        size: "sm",
                        onClick: (A) => te(I)
                      }, {
                        default: h(() => [...le[16] || (le[16] = [
                          $(" Install ", -1)
                        ])]),
                        _: 1
                      }, 8, ["onClick"])) : y("", !0),
                      I.repository ? (n(), R(Me, {
                        key: 1,
                        variant: "secondary",
                        size: "sm",
                        onClick: (A) => oe(I)
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
            z.value.length ? (n(), R(St, {
              key: 3,
              title: "UNTRACKED",
              count: z.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(z.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "warning"
                }, {
                  icon: h(() => [...le[18] || (le[18] = [
                    $("?", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[19] || (le[19] = [
                    t("span", { style: { color: "var(--cg-color-warning)" } }, "On filesystem but not tracked", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Pe(I)
                    }, {
                      default: h(() => [...le[20] || (le[20] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => ee(I.name)
                    }, {
                      default: h(() => [...le[21] || (le[21] = [
                        $(" Track as Dev ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "destructive",
                      size: "sm",
                      onClick: (A) => Q(I.name)
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
            E.value.length ? (n(), R(St, {
              key: 4,
              title: "INSTALLED",
              count: E.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(E.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "synced"
                }, {
                  icon: h(() => [
                    $(m(I.source === "development" ? "🔧" : "📦"), 1)
                  ]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [
                    I.version ? (n(), i("span", Y2, m(I.source === "development" ? "" : "v") + m(I.version), 1)) : (n(), i("span", X2, "version unknown")),
                    t("span", Z2, " • " + m(Y(I.source)), 1)
                  ]),
                  details: h(() => [
                    b(_t, {
                      label: "Used by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Pe(I)
                    }, {
                      default: h(() => [...le[23] || (le[23] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    t("label", e$, [
                      le[25] || (le[25] = t("span", null, "Readiness", -1)),
                      t("select", {
                        class: "criticality-select",
                        value: W(I),
                        disabled: K(I),
                        onChange: (A) => ke(I, A)
                      }, [...le[24] || (le[24] = [
                        t("option", { value: "required" }, "Required", -1),
                        t("option", { value: "optional" }, "Optional", -1)
                      ])], 40, t$)
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            D.value.length ? (n(), R(St, {
              key: 5,
              title: "MISSING",
              count: D.value.length,
              collapsible: "",
              "initially-expanded": !0
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(D.value, (I) => (n(), R(Vt, {
                  key: I.name,
                  status: "missing"
                }, {
                  icon: h(() => [...le[26] || (le[26] = [
                    $("!", -1)
                  ])]),
                  title: h(() => [
                    $(m(I.name), 1)
                  ]),
                  subtitle: h(() => [...le[27] || (le[27] = [
                    t("span", { style: { color: "var(--cg-color-error)" } }, "Tracked but not installed", -1)
                  ])]),
                  details: h(() => [
                    b(_t, {
                      label: "Required by:",
                      value: Z(I)
                    }, null, 8, ["value"])
                  ]),
                  actions: h(() => [
                    b(Me, {
                      variant: "secondary",
                      size: "xs",
                      onClick: (A) => Pe(I)
                    }, {
                      default: h(() => [...le[28] || (le[28] = [
                        $(" View Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "primary",
                      size: "sm",
                      onClick: (A) => $e(I.name)
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
            !E.value.length && !D.value.length && !j.value.length && !L.value.length && !z.value.length ? (n(), R(rs, {
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
        onClose: le[4] || (le[4] = (I) => _.value = !1)
      }, {
        content: h(() => [...le[30] || (le[30] = [
          t("p", null, " Custom nodes extend ComfyUI's capabilities. ComfyGit tracks nodes in your environment manifest for reproducibility. ", -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Installed:"),
            $(" Tracked nodes available in this environment"),
            t("br"),
            t("strong", null, "Missing:"),
            $(" Tracked nodes that need to be installed"),
            t("br"),
            t("strong", null, "Blocked:"),
            $(" Node types that require newer ComfyUI"),
            t("br"),
            t("strong", null, "Community-Mapped:"),
            $(" Actionable package mappings from community metadata"),
            t("br"),
            t("strong", null, "Untracked:"),
            $(" Nodes on filesystem but not in manifest ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)", color: "var(--cg-color-text-muted)" } }, ` Use "Track as Dev" for local development nodes you don't want to version. `, -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: le[3] || (le[3] = (I) => _.value = !1)
          }, {
            default: h(() => [...le[31] || (le[31] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      C.value ? (n(), R(z2, {
        key: 0,
        node: C.value,
        onClose: le[5] || (le[5] = (I) => C.value = null)
      }, null, 8, ["node"])) : y("", !0),
      T.value ? (n(), R(Ml, {
        key: 1,
        title: T.value.title,
        message: T.value.message,
        warning: T.value.warning,
        "confirm-label": T.value.confirmLabel,
        destructive: T.value.destructive,
        onConfirm: T.value.onConfirm,
        onCancel: le[6] || (le[6] = (I) => T.value = null)
      }, null, 8, ["title", "message", "warning", "confirm-label", "destructive", "onConfirm"])) : y("", !0)
    ], 64));
  }
}), o$ = /* @__PURE__ */ xe(s$, [["__scopeId", "data-v-edfa1c86"]]), n$ = { class: "setting-info" }, a$ = { class: "setting-label" }, l$ = {
  key: 0,
  class: "required-marker"
}, i$ = {
  key: 0,
  class: "setting-description"
}, r$ = { class: "setting-control" }, c$ = /* @__PURE__ */ be({
  __name: "SettingRow",
  props: {
    label: {},
    description: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    stacked: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (s, o) => (n(), i("div", {
      class: Be(["setting-row", { disabled: e.disabled, stacked: e.stacked }])
    }, [
      t("div", n$, [
        t("div", a$, [
          $(m(e.label) + " ", 1),
          e.required ? (n(), i("span", l$, "*")) : y("", !0)
        ]),
        e.description ? (n(), i("div", i$, m(e.description), 1)) : y("", !0)
      ]),
      t("div", r$, [
        ot(s.$slots, "default", {}, void 0)
      ])
    ], 2));
  }
}), vo = /* @__PURE__ */ xe(c$, [["__scopeId", "data-v-3e106b1c"]]), u$ = ["type", "value", "placeholder", "disabled"], d$ = /* @__PURE__ */ be({
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
    const a = e, l = o, r = k(null);
    function c(u) {
      const d = u.target.value;
      l("update:modelValue", d);
    }
    return at(() => {
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
    }, null, 42, u$));
  }
}), yo = /* @__PURE__ */ xe(d$, [["__scopeId", "data-v-0380d08f"]]), m$ = { class: "toggle" }, f$ = ["checked", "disabled"], v$ = /* @__PURE__ */ be({
  __name: "Toggle",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", m$, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked)),
        class: "toggle-input"
      }, null, 40, f$),
      o[1] || (o[1] = t("span", { class: "toggle-slider" }, null, -1))
    ]));
  }
}), Ii = /* @__PURE__ */ xe(v$, [["__scopeId", "data-v-71c0f550"]]), Ba = "ComfyGit.Deploy.GitHubPAT";
function uc(e) {
  return e.startsWith("git@") || e.startsWith("ssh://");
}
function p$(e) {
  return e.startsWith("https://") || e.startsWith("http://");
}
function g$() {
  function e() {
    try {
      return localStorage.getItem(Ba);
    } catch {
      return null;
    }
  }
  function s(l) {
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
    setToken: s,
    clearToken: o,
    hasToken: a,
    isRemoteSsh: uc,
    isRemoteHttps: p$
  };
}
const h$ = { class: "workspace-settings-content" }, y$ = { class: "settings-section" }, w$ = { class: "path-setting" }, _$ = { class: "path-value" }, k$ = { class: "path-setting" }, b$ = { class: "path-value" }, $$ = { class: "settings-section" }, C$ = { class: "token-setting" }, x$ = {
  key: 0,
  class: "token-warning"
}, S$ = { class: "token-actions" }, I$ = { class: "settings-section" }, E$ = { class: "settings-section" }, T$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsContent",
  props: {
    workspacePath: {}
  },
  emits: ["saved", "error"],
  setup(e, { expose: s, emit: o }) {
    const a = e, l = o, { getConfig: r, updateConfig: c, getRemotes: u, testGitAuth: d } = ct(), { getToken: v, setToken: f, clearToken: p, hasToken: w } = g$(), g = k(!1), _ = k(null), C = k(null), x = k(null), S = k(null), T = k(""), M = k(""), E = k(""), D = k(""), z = k(!1), j = k(!1), L = k(!1), q = k(""), ce = k(!1), ne = k(!1), Y = k(null), we = k(!1), Z = k(!0);
    function W($e) {
      return $e.join(" ");
    }
    function K($e) {
      return $e.trim() ? $e.trim().split(/\s+/) : [];
    }
    const ke = P(() => {
      if (!S.value) return !1;
      const $e = z.value, te = j.value, oe = L.value, Re = D.value !== W(S.value.comfyui_extra_args || []);
      return $e || te || oe || Re;
    }), se = P(() => w());
    async function fe() {
      var $e;
      g.value = !0, _.value = null;
      try {
        x.value = await r(a.workspacePath || void 0), S.value = { ...x.value }, T.value = x.value.civitai_api_key || "", M.value = x.value.huggingface_token || "", D.value = W(x.value.comfyui_extra_args || []), E.value = v() || "", q.value = E.value, z.value = !1, j.value = !1, L.value = !1, Y.value = null;
        const te = localStorage.getItem("ComfyGit.Settings.AutoRefresh");
        we.value = te !== "false", Z.value = localStorage.getItem("comfygit:popup-disabled") !== "true";
        try {
          const Re = ($e = (await u()).remotes) == null ? void 0 : $e.find((ve) => ve.name === "origin");
          ce.value = !!(Re && uc(Re.url));
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
      C.value = null;
      try {
        const te = {};
        z.value && (te.civitai_api_key = T.value || null), j.value && (te.huggingface_token = M.value || null), D.value !== W((($e = S.value) == null ? void 0 : $e.comfyui_extra_args) || []) && (te.comfyui_extra_args = K(D.value)), await c(te, a.workspacePath || void 0), L.value && (E.value ? f(E.value) : p()), await fe(), C.value = { type: "success", message: "Settings saved successfully" }, l("saved"), setTimeout(() => {
          C.value = null;
        }, 3e3);
      } catch (te) {
        const oe = te instanceof Error ? te.message : "Failed to save settings";
        C.value = { type: "error", message: oe }, l("error", oe);
      }
    }
    function me() {
      S.value && (T.value = S.value.civitai_api_key || "", M.value = S.value.huggingface_token || "", D.value = W(S.value.comfyui_extra_args || []), E.value = q.value, z.value = !1, j.value = !1, L.value = !1, Y.value = null, C.value = null);
    }
    async function Pe() {
      if (E.value) {
        ne.value = !0, Y.value = null;
        try {
          const $e = await d(E.value);
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
      E.value = "", L.value = !0, Y.value = null;
    }
    function ee($e) {
      localStorage.setItem("ComfyGit.Settings.AutoRefresh", String($e)), console.log("[ComfyGit] Auto-refresh setting saved:", $e);
    }
    function Q($e) {
      $e ? localStorage.removeItem("comfygit:popup-disabled") : localStorage.setItem("comfygit:popup-disabled", "true"), console.log("[ComfyGit] Popup setting changed:", $e ? "enabled" : "disabled");
    }
    return s({
      saveSettings: U,
      resetSettings: me,
      hasChanges: ke,
      loadSettings: fe
    }), at(fe), ($e, te) => (n(), i("div", h$, [
      g.value ? (n(), R($s, {
        key: 0,
        message: "Loading workspace settings..."
      })) : _.value ? (n(), R(Cs, {
        key: 1,
        message: _.value,
        retry: !0,
        onRetry: fe
      }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
        b(St, { title: "WORKSPACE PATHS" }, {
          default: h(() => {
            var oe, Re;
            return [
              t("div", y$, [
                t("div", w$, [
                  te[9] || (te[9] = t("div", { class: "path-label" }, "Workspace Root", -1)),
                  te[10] || (te[10] = t("div", { class: "path-description" }, "Root directory of this workspace (read-only)", -1)),
                  t("div", _$, m(((oe = x.value) == null ? void 0 : oe.workspace_path) || "Loading..."), 1)
                ]),
                t("div", k$, [
                  te[11] || (te[11] = t("div", { class: "path-label" }, "Models Directory", -1)),
                  te[12] || (te[12] = t("div", { class: "path-description" }, "Where model files are indexed and stored", -1)),
                  t("div", b$, m(((Re = x.value) == null ? void 0 : Re.models_path) || "Not configured"), 1)
                ])
              ])
            ];
          }),
          _: 1
        }),
        b(St, { title: "API CREDENTIALS" }, {
          default: h(() => [
            t("div", $$, [
              b(vo, {
                label: "CivitAI API Key",
                description: "API key for downloading models from CivitAI"
              }, {
                default: h(() => [
                  b(yo, {
                    modelValue: T.value,
                    "onUpdate:modelValue": te[0] || (te[0] = (oe) => T.value = oe),
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
                    onInput: te[3] || (te[3] = (oe) => j.value = !0)
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
                  t("div", C$, [
                    b(yo, {
                      modelValue: E.value,
                      "onUpdate:modelValue": te[4] || (te[4] = (oe) => E.value = oe),
                      type: "password",
                      placeholder: "ghp_xxxxxxxxxxxxxxxxxxxx",
                      onInput: te[5] || (te[5] = (oe) => L.value = !0)
                    }, null, 8, ["modelValue"]),
                    ce.value ? (n(), i("div", x$, " SSH origin remote detected. PAT authentication only works with HTTPS remotes. ")) : y("", !0),
                    te[15] || (te[15] = t("div", { class: "token-help" }, " Stored in your browser only. Never sent to the server except when you explicitly test or use authenticated remote operations. ", -1)),
                    t("div", S$, [
                      b(Me, {
                        variant: "ghost",
                        size: "xs",
                        loading: ne.value,
                        disabled: !E.value || ne.value,
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
        b(St, { title: "COMFYUI SETTINGS" }, {
          default: h(() => [
            t("div", I$, [
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
              te[16] || (te[16] = t("div", { class: "setting-hint" }, [
                $(" Common flags: "),
                t("code", null, "--lowvram"),
                $(", "),
                t("code", null, "--highvram"),
                $(", "),
                t("code", null, "--listen 0.0.0.0"),
                $(", "),
                t("code", null, "--cuda-device 1")
              ], -1))
            ])
          ]),
          _: 1
        }),
        b(St, { title: "UI SETTINGS" }, {
          default: h(() => [
            t("div", E$, [
              b(vo, {
                label: "Auto-Refresh After Git Operations",
                description: "Automatically refresh the page after branch switches and checkouts. If disabled, shows a notification with a refresh button."
              }, {
                default: h(() => [
                  b(Ii, {
                    modelValue: we.value,
                    "onUpdate:modelValue": [
                      te[7] || (te[7] = (oe) => we.value = oe),
                      ee
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
                  b(Ii, {
                    modelValue: Z.value,
                    "onUpdate:modelValue": [
                      te[8] || (te[8] = (oe) => Z.value = oe),
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
        C.value ? (n(), R(Il, {
          key: 0,
          variant: (C.value.type === "success", "compact")
        }, {
          default: h(() => [
            t("span", {
              style: Rt({ color: C.value.type === "success" ? "var(--cg-color-success)" : "var(--cg-color-error)" })
            }, m(C.value.message), 5)
          ]),
          _: 1
        }, 8, ["variant"])) : y("", !0)
      ], 64))
    ]));
  }
}), dc = /* @__PURE__ */ xe(T$, [["__scopeId", "data-v-f1bdc574"]]), M$ = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsSection",
  setup(e) {
    const s = k(null);
    function o() {
      console.log("[ComfyGit] Settings saved");
    }
    return (a, l) => (n(), R(At, null, {
      header: h(() => [
        b(zt, { title: "WORKSPACE SETTINGS" }, {
          actions: h(() => {
            var r, c;
            return [
              b(Me, {
                variant: "primary",
                size: "sm",
                disabled: !((r = s.value) != null && r.hasChanges),
                onClick: l[0] || (l[0] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.saveSettings();
                })
              }, {
                default: h(() => [...l[2] || (l[2] = [
                  $(" Save Changes ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"]),
              (c = s.value) != null && c.hasChanges ? (n(), R(Me, {
                key: 0,
                variant: "ghost",
                size: "sm",
                onClick: l[1] || (l[1] = (u) => {
                  var d;
                  return (d = s.value) == null ? void 0 : d.resetSettings();
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
        b(dc, {
          ref_key: "contentRef",
          ref: s,
          onSaved: o
        }, null, 512)
      ]),
      _: 1
    }));
  }
}), P$ = { class: "env-title" }, R$ = {
  key: 0,
  class: "current-badge"
}, L$ = {
  key: 0,
  class: "branch-info"
}, D$ = /* @__PURE__ */ be({
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
    return (s, o) => (n(), R(Vt, {
      status: e.isCurrent ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        $(m(e.isCurrent ? "🌍" : "○"), 1)
      ]),
      title: h(() => [
        t("div", P$, [
          t("span", null, m(e.environmentName), 1),
          e.isCurrent && e.showCurrentLabel ? (n(), i("span", R$, "CURRENT")) : y("", !0)
        ])
      ]),
      subtitle: h(() => [
        e.currentBranch ? (n(), i("span", L$, [
          o[0] || (o[0] = t("span", { class: "branch-icon" }, "⎇", -1)),
          $(" " + m(e.currentBranch), 1)
        ])) : y("", !0)
      ]),
      actions: h(() => [
        ot(s.$slots, "actions", {}, void 0, !0)
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
}), N$ = /* @__PURE__ */ xe(D$, [["__scopeId", "data-v-9231917a"]]), U$ = { class: "env-details" }, O$ = { class: "status-row" }, A$ = {
  key: 0,
  class: "detail-row"
}, z$ = { class: "value mono" }, F$ = {
  key: 1,
  class: "detail-row"
}, V$ = { class: "value mono small" }, B$ = { class: "collapsible-section" }, W$ = { class: "value" }, G$ = {
  key: 0,
  class: "collapsible-body"
}, j$ = { class: "item-list" }, H$ = { class: "item-name" }, q$ = { class: "item-name" }, K$ = { class: "item-name" }, J$ = { class: "item-name" }, Q$ = {
  key: 0,
  class: "empty-list"
}, Y$ = { class: "collapsible-section" }, X$ = { class: "value" }, Z$ = {
  key: 0,
  class: "collapsible-body"
}, eC = { class: "item-list" }, tC = { class: "item-name" }, sC = {
  key: 0,
  class: "item-meta"
}, oC = {
  key: 0,
  class: "empty-list"
}, nC = { class: "collapsible-section" }, aC = { class: "value" }, lC = {
  key: 0,
  class: "missing-count"
}, iC = {
  key: 0,
  class: "collapsible-body"
}, rC = { class: "item-list" }, cC = { class: "model-row" }, uC = { class: "item-name" }, dC = { class: "model-meta" }, mC = { class: "item-meta" }, fC = {
  key: 0,
  class: "item-meta"
}, vC = {
  key: 0,
  class: "empty-list"
}, pC = {
  key: 2,
  class: "section-divider"
}, gC = {
  key: 3,
  class: "detail-row"
}, hC = { class: "value" }, yC = { class: "footer-actions" }, wC = /* @__PURE__ */ be({
  __name: "EnvironmentDetailsModal",
  props: {
    environment: {},
    detail: {},
    canDelete: { type: Boolean }
  },
  emits: ["close", "delete", "export"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(/* @__PURE__ */ new Set());
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
    return (d, v) => (n(), R(It, {
      title: `ENVIRONMENT DETAILS: ${e.environment.name.toUpperCase()}`,
      size: "md",
      onClose: v[6] || (v[6] = (f) => a("close"))
    }, {
      body: h(() => {
        var f, p, w, g, _, C, x, S, T, M, E, D, z, j;
        return [
          t("div", U$, [
            t("div", O$, [
              v[7] || (v[7] = t("span", { class: "label" }, "Status:", -1)),
              t("span", {
                class: Be(["status-badge", e.environment.is_current ? "current" : "inactive"])
              }, m(e.environment.is_current ? "Current" : "Inactive"), 3)
            ]),
            e.environment.current_branch ? (n(), i("div", A$, [
              v[8] || (v[8] = t("span", { class: "label" }, "Branch:", -1)),
              t("span", z$, m(e.environment.current_branch), 1)
            ])) : y("", !0),
            e.environment.path ? (n(), i("div", F$, [
              v[9] || (v[9] = t("span", { class: "label" }, "Path:", -1)),
              t("span", V$, m(e.environment.path), 1)
            ])) : y("", !0),
            v[18] || (v[18] = t("div", { class: "section-divider" }, null, -1)),
            t("div", B$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[0] || (v[0] = (L) => r("workflows"))
              }, [
                v[10] || (v[10] = t("span", { class: "label" }, "Workflows:", -1)),
                t("span", W$, m(((f = e.detail) == null ? void 0 : f.workflow_count) ?? e.environment.workflow_count), 1),
                (p = e.detail) != null && p.workflows ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("workflows") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (w = e.detail) != null && w.workflows && l.value.has("workflows") ? (n(), i("div", G$, [
                t("div", j$, [
                  (n(!0), i(B, null, ge(e.detail.workflows.synced, (L) => (n(), i("div", {
                    key: "synced-" + L,
                    class: "list-item"
                  }, [
                    t("span", H$, m(L), 1),
                    v[11] || (v[11] = t("span", { class: "sync-badge synced" }, "synced", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.new, (L) => (n(), i("div", {
                    key: "new-" + L,
                    class: "list-item"
                  }, [
                    t("span", q$, m(L), 1),
                    v[12] || (v[12] = t("span", { class: "sync-badge new" }, "new", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.modified, (L) => (n(), i("div", {
                    key: "mod-" + L,
                    class: "list-item"
                  }, [
                    t("span", K$, m(L), 1),
                    v[13] || (v[13] = t("span", { class: "sync-badge modified" }, "modified", -1))
                  ]))), 128)),
                  (n(!0), i(B, null, ge(e.detail.workflows.deleted, (L) => (n(), i("div", {
                    key: "del-" + L,
                    class: "list-item"
                  }, [
                    t("span", J$, m(L), 1),
                    v[14] || (v[14] = t("span", { class: "sync-badge deleted" }, "deleted", -1))
                  ]))), 128)),
                  c.value ? (n(), i("div", Q$, "No workflows")) : y("", !0)
                ])
              ])) : y("", !0)
            ]),
            t("div", Y$, [
              t("div", {
                class: "collapsible-header",
                onClick: v[1] || (v[1] = (L) => r("nodes"))
              }, [
                v[15] || (v[15] = t("span", { class: "label" }, "Nodes:", -1)),
                t("span", X$, m(((g = e.detail) == null ? void 0 : g.node_count) ?? e.environment.node_count), 1),
                (_ = e.detail) != null && _.nodes ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("nodes") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (C = e.detail) != null && C.nodes && l.value.has("nodes") ? (n(), i("div", Z$, [
                t("div", eC, [
                  (n(!0), i(B, null, ge(e.detail.nodes, (L) => (n(), i("div", {
                    key: L.name,
                    class: "list-item"
                  }, [
                    t("span", tC, m(L.name), 1),
                    L.version ? (n(), i("span", sC, m(L.version), 1)) : y("", !0)
                  ]))), 128)),
                  e.detail.nodes.length ? y("", !0) : (n(), i("div", oC, "No nodes"))
                ])
              ])) : y("", !0)
            ]),
            t("div", nC, [
              t("div", {
                class: "collapsible-header",
                onClick: v[2] || (v[2] = (L) => r("models"))
              }, [
                v[16] || (v[16] = t("span", { class: "label" }, "Models:", -1)),
                t("span", aC, [
                  $(m(((x = e.detail) == null ? void 0 : x.model_count) ?? e.environment.model_count) + " ", 1),
                  (T = (S = e.detail) == null ? void 0 : S.models) != null && T.missing.length ? (n(), i("span", lC, "(" + m(e.detail.models.missing.length) + " missing)", 1)) : y("", !0)
                ]),
                (M = e.detail) != null && M.models ? (n(), i("span", {
                  key: 0,
                  class: Be(["chevron", { expanded: l.value.has("models") }])
                }, "▶", 2)) : y("", !0)
              ]),
              (E = e.detail) != null && E.models && l.value.has("models") ? (n(), i("div", iC, [
                t("div", rC, [
                  (n(!0), i(B, null, ge(e.detail.models.missing, (L) => (n(), i("div", {
                    key: L.filename,
                    class: "list-item model-item"
                  }, [
                    t("div", cC, [
                      t("span", uC, m(L.filename), 1),
                      t("span", {
                        class: Be(["criticality-badge", L.criticality])
                      }, m(L.criticality), 3)
                    ]),
                    t("div", dC, [
                      t("span", mC, m(L.category), 1),
                      L.workflow_names.length ? (n(), i("span", fC, " used by: " + m(L.workflow_names.join(", ")), 1)) : y("", !0)
                    ])
                  ]))), 128)),
                  e.detail.models.missing.length ? y("", !0) : (n(), i("div", vC, "No missing models"))
                ])
              ])) : y("", !0)
            ]),
            (D = e.detail) != null && D.created_at || e.environment.created_at ? (n(), i("div", pC)) : y("", !0),
            (z = e.detail) != null && z.created_at || e.environment.created_at ? (n(), i("div", gC, [
              v[17] || (v[17] = t("span", { class: "label" }, "Created:", -1)),
              t("span", hC, m(u(((j = e.detail) == null ? void 0 : j.created_at) ?? e.environment.created_at)), 1)
            ])) : y("", !0)
          ])
        ];
      }),
      footer: h(() => [
        t("div", yC, [
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
          v[22] || (v[22] = t("div", { class: "footer-spacer" }, null, -1)),
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
}), _C = /* @__PURE__ */ xe(wC, [["__scopeId", "data-v-750671f5"]]), mc = [
  "3.12",
  "3.11",
  "3.10",
  "3.13"
], fc = "3.12", Pl = [
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
], vc = "auto", kC = { class: "progress-bar" }, bC = /* @__PURE__ */ be({
  __name: "ProgressBar",
  props: {
    progress: {},
    variant: { default: "default" },
    height: { default: "md" }
  },
  setup(e) {
    const s = e, o = P(() => `${Math.max(0, Math.min(100, s.progress))}%`);
    return (a, l) => (n(), i("div", kC, [
      t("div", {
        class: Be(["progress-fill", e.variant]),
        style: Rt({ width: o.value })
      }, null, 6)
    ]));
  }
}), pc = /* @__PURE__ */ xe(bC, [["__scopeId", "data-v-1beb0512"]]), $C = { class: "task-progress" }, CC = { class: "progress-info" }, xC = { class: "progress-percentage" }, SC = { class: "progress-message" }, IC = {
  key: 0,
  class: "progress-steps"
}, EC = { class: "step-icon" }, TC = { class: "step-label" }, MC = /* @__PURE__ */ be({
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
    return (l, r) => (n(), i("div", $C, [
      b(pc, {
        progress: e.progress,
        variant: e.variant
      }, null, 8, ["progress", "variant"]),
      t("div", CC, [
        t("span", xC, m(e.progress) + "%", 1),
        t("span", SC, m(e.message), 1)
      ]),
      e.showSteps && e.steps.length > 0 ? (n(), i("div", IC, [
        (n(!0), i(B, null, ge(e.steps, (c) => (n(), i("div", {
          key: c.id,
          class: Be(["step", o(c.id)])
        }, [
          t("span", EC, m(a(c.id)), 1),
          t("span", TC, m(c.label), 1)
        ], 2))), 128))
      ])) : y("", !0)
    ]));
  }
}), Kn = /* @__PURE__ */ xe(MC, [["__scopeId", "data-v-9d1de66c"]]), PC = {
  key: 0,
  class: "create-env-form"
}, RC = { class: "form-field" }, LC = { class: "input-wrapper" }, DC = {
  key: 0,
  class: "validating-indicator"
}, NC = {
  key: 1,
  class: "valid-indicator"
}, UC = {
  key: 0,
  class: "field-error"
}, OC = { class: "form-field" }, AC = ["value"], zC = { class: "form-field" }, FC = ["disabled"], VC = ["value"], BC = { class: "form-field" }, WC = ["value"], GC = { class: "form-field form-field--checkbox" }, jC = { class: "form-checkbox" }, HC = {
  key: 1,
  class: "create-env-progress"
}, qC = { class: "creating-intro" }, KC = {
  key: 0,
  class: "progress-warning"
}, JC = {
  key: 1,
  class: "create-error"
}, QC = { class: "error-message" }, YC = {
  key: 1,
  class: "footer-status"
}, XC = 10, ZC = /* @__PURE__ */ be({
  __name: "CreateEnvironmentModal",
  emits: ["close", "created"],
  setup(e, { emit: s }) {
    const o = s, { getComfyUIReleases: a, createEnvironment: l, getCreateProgress: r, validateEnvironmentName: c } = ct(), u = k(""), d = k(fc), v = k("latest"), f = k(vc), p = k(!1), w = k(null), g = k(!1), _ = k(!1);
    let C = null, x = 0;
    const S = P(() => !!u.value.trim() && _.value && !w.value && !g.value && !E.value), T = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), M = k(!1), E = k(!1), D = k({
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
    ], q = k(null);
    yt(u, (se) => {
      _.value = !1, C && (clearTimeout(C), C = null);
      const fe = se.trim();
      if (!fe) {
        w.value = null, g.value = !1;
        return;
      }
      g.value = !0, C = setTimeout(() => {
        ce(fe);
      }, 400);
    });
    async function ce(se, fe = !1) {
      const U = se.trim();
      if (!U)
        return _.value = !1, g.value = !1, w.value = fe ? "Environment name is required" : null, !1;
      const me = ++x;
      g.value = !0;
      try {
        const Pe = await c(U);
        return me !== x ? !1 : (w.value = Pe.valid ? null : Pe.error || "Invalid name", _.value = !!Pe.valid, !!Pe.valid);
      } catch {
        return me !== x || (w.value = "Failed to validate name", _.value = !1), !1;
      } finally {
        me === x && (g.value = !1);
      }
    }
    async function ne() {
      C && (clearTimeout(C), C = null), await ce(u.value, !0);
    }
    function Y() {
      E.value || o("close");
    }
    async function we() {
      const se = u.value.trim();
      if (!se) {
        w.value = "Environment name is required";
        return;
      }
      if (C && (clearTimeout(C), C = null), !!await ce(se, !0)) {
        E.value = !0, D.value = { progress: 0, message: "Starting...", phase: "init" };
        try {
          const U = {
            name: se,
            python_version: d.value,
            comfyui_version: v.value,
            torch_backend: f.value,
            switch_after: !1
            // We'll handle switch in parent after modal closes
          }, me = await l(U);
          me.status === "started" ? Z() : me.status === "error" && (D.value = {
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
    function Z() {
      z || (j = 0, z = window.setInterval(async () => {
        try {
          const se = await r();
          j = 0, D.value = {
            progress: se.progress ?? 0,
            message: se.message,
            phase: se.phase,
            error: se.error
          }, se.state === "complete" ? (W(), o("created", se.environment_name || u.value.trim(), p.value)) : se.state === "error" ? (W(), D.value.error = se.error || se.message) : se.state === "idle" && E.value && (W(), D.value.error = "Creation was interrupted. Please try again.");
        } catch {
          j++, j >= XC && (W(), D.value.error = "Lost connection to server.");
        }
      }, 2e3));
    }
    function W() {
      z && (clearInterval(z), z = null);
    }
    function K() {
      E.value = !1, D.value = { progress: 0, message: "" }, o("close");
    }
    async function ke() {
      M.value = !0;
      try {
        T.value = await a();
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
      W(), C && (clearTimeout(C), C = null);
    }), (se, fe) => (n(), R(It, {
      title: "CREATE NEW ENVIRONMENT",
      size: "sm",
      "show-close-button": !E.value,
      onClose: Y
    }, {
      body: h(() => [
        E.value ? (n(), i("div", HC, [
          t("p", qC, [
            fe[12] || (fe[12] = $(" Creating environment ", -1)),
            t("strong", null, m(u.value), 1),
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
          D.value.error ? y("", !0) : (n(), i("p", KC, " This may take several minutes. Please wait... ")),
          D.value.error ? (n(), i("div", JC, [
            t("p", QC, m(D.value.error), 1)
          ])) : y("", !0)
        ])) : (n(), i("div", PC, [
          t("div", RC, [
            fe[6] || (fe[6] = t("label", { class: "form-label" }, "Name", -1)),
            t("div", LC, [
              Tt(t("input", {
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
              g.value ? (n(), i("span", DC, "...")) : _.value ? (n(), i("span", NC, "✓")) : y("", !0)
            ]),
            w.value ? (n(), i("div", UC, m(w.value), 1)) : y("", !0),
            fe[7] || (fe[7] = t("div", { class: "field-hint" }, "Use letters, numbers, dots, hyphens, and underscores.", -1))
          ]),
          t("div", OC, [
            fe[8] || (fe[8] = t("label", { class: "form-label" }, "Python Version", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": fe[1] || (fe[1] = (U) => d.value = U),
              class: "form-select"
            }, [
              (n(!0), i(B, null, ge(st(mc), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U), 9, AC))), 128))
            ], 512), [
              [Co, d.value]
            ])
          ]),
          t("div", zC, [
            fe[9] || (fe[9] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": fe[2] || (fe[2] = (U) => v.value = U),
              class: "form-select",
              disabled: M.value
            }, [
              (n(!0), i(B, null, ge(T.value, (U) => (n(), i("option", {
                key: U.tag_name,
                value: U.tag_name
              }, m(U.name), 9, VC))), 128))
            ], 8, FC), [
              [Co, v.value]
            ])
          ]),
          t("div", BC, [
            fe[10] || (fe[10] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
            Tt(t("select", {
              "onUpdate:modelValue": fe[3] || (fe[3] = (U) => f.value = U),
              class: "form-select"
            }, [
              (n(!0), i(B, null, ge(st(Pl), (U) => (n(), i("option", {
                key: U,
                value: U
              }, m(U) + m(U === "auto" ? " (detect GPU)" : ""), 9, WC))), 128))
            ], 512), [
              [Co, f.value]
            ])
          ]),
          t("div", GC, [
            t("label", jC, [
              Tt(t("input", {
                type: "checkbox",
                "onUpdate:modelValue": fe[4] || (fe[4] = (U) => p.value = U)
              }, null, 512), [
                [Hn, p.value]
              ]),
              fe[11] || (fe[11] = t("span", null, "Switch to this environment after creation", -1))
            ])
          ])
        ]))
      ]),
      footer: h(() => [
        E.value ? (n(), i(B, { key: 1 }, [
          D.value.error ? (n(), R(De, {
            key: 0,
            variant: "secondary",
            onClick: K
          }, {
            default: h(() => [...fe[16] || (fe[16] = [
              $(" Close ", -1)
            ])]),
            _: 1
          })) : (n(), i("span", YC, " Creating environment... "))
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
}), ex = /* @__PURE__ */ xe(ZC, [["__scopeId", "data-v-3faa3d9b"]]), tx = /* @__PURE__ */ be({
  __name: "EnvironmentsSection",
  props: {
    canCreate: { type: Boolean, default: !0 },
    canSwitch: { type: Boolean, default: !0 },
    canDelete: { type: Boolean, default: !0 }
  },
  emits: ["switch", "created", "delete", "import", "export"],
  setup(e, { expose: s, emit: o }) {
    const a = o, { getEnvironments: l, getEnvironmentDetails: r } = ct(), c = k([]), u = k(!1), d = k(null), v = k(""), f = k(!1), p = k(!1), w = k(null), g = k(null), _ = P(() => [...c.value].sort((z, j) => z.is_current !== j.is_current ? z.is_current ? -1 : 1 : z.name.localeCompare(j.name))), C = P(() => {
      if (!v.value.trim()) return _.value;
      const z = v.value.toLowerCase();
      return _.value.filter(
        (j) => {
          var L;
          return j.name.toLowerCase().includes(z) || ((L = j.current_branch) == null ? void 0 : L.toLowerCase().includes(z));
        }
      );
    });
    function x(z, j) {
      p.value = !1, a("created", z, j);
    }
    function S() {
      p.value = !0;
    }
    async function T(z) {
      w.value = z, g.value = null;
      const j = await r(z.name);
      j && (g.value = j);
    }
    function M(z) {
      w.value = null, g.value = null, a("delete", z);
    }
    function E(z) {
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
    return at(D), s({
      loadEnvironments: D,
      openCreateModal: S
    }), (z, j) => (n(), i(B, null, [
      b(At, null, {
        header: h(() => [
          b(zt, {
            title: "ENVIRONMENTS",
            "show-info": !0,
            onInfoClick: j[1] || (j[1] = (L) => f.value = !0)
          }, {
            actions: h(() => [
              e.canCreate ? (n(), R(Me, {
                key: 0,
                variant: "primary",
                size: "sm",
                onClick: S
              }, {
                default: h(() => [...j[7] || (j[7] = [
                  $(" Create ", -1)
                ])]),
                _: 1
              })) : y("", !0),
              b(Me, {
                variant: "secondary",
                size: "sm",
                onClick: j[0] || (j[0] = (L) => z.$emit("import"))
              }, {
                default: h(() => [...j[8] || (j[8] = [
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
            "onUpdate:modelValue": j[2] || (j[2] = (L) => v.value = L),
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
            C.value.length ? (n(), R(St, {
              key: 0,
              title: "ENVIRONMENTS",
              count: C.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(C.value, (L) => (n(), R(N$, {
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
                      default: h(() => [...j[9] || (j[9] = [
                        $(" Switch ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : y("", !0),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => T(L)
                    }, {
                      default: h(() => [...j[10] || (j[10] = [
                        $(" Details ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"]),
                    b(Me, {
                      variant: "secondary",
                      size: "sm",
                      onClick: (q) => z.$emit("export", L.name)
                    }, {
                      default: h(() => [...j[11] || (j[11] = [
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
            C.value.length ? y("", !0) : (n(), R(rs, {
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
                    default: h(() => [...j[12] || (j[12] = [
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
        onClose: j[4] || (j[4] = (L) => f.value = !1)
      }, {
        content: h(() => [...j[13] || (j[13] = [
          t("p", null, [
            t("strong", null, "Environments"),
            $(" are isolated workspaces that contain their own workflows, nodes, and models. Each environment can track different branches and maintain separate state. ")
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
        actions: h(() => [
          b(Me, {
            variant: "secondary",
            onClick: j[3] || (j[3] = (L) => f.value = !1)
          }, {
            default: h(() => [...j[14] || (j[14] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"]),
      w.value ? (n(), R(_C, {
        key: 0,
        environment: w.value,
        detail: g.value,
        "can-delete": e.canDelete && c.value.length > 1,
        onClose: j[5] || (j[5] = (L) => {
          w.value = null, g.value = null;
        }),
        onDelete: M,
        onExport: E
      }, null, 8, ["environment", "detail", "can-delete"])) : y("", !0),
      p.value ? (n(), R(ex, {
        key: 1,
        onClose: j[6] || (j[6] = (L) => p.value = !1),
        onCreated: x
      })) : y("", !0)
    ], 64));
  }
}), sx = /* @__PURE__ */ xe(tx, [["__scopeId", "data-v-01163d8c"]]), ox = { class: "file-path" }, nx = { class: "file-path-text" }, ax = ["title"], lx = /* @__PURE__ */ be({
  __name: "FilePath",
  props: {
    path: {},
    copyable: { type: Boolean, default: !0 }
  },
  setup(e) {
    const s = e, o = k(!1);
    async function a() {
      try {
        await navigator.clipboard.writeText(s.path), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (l) {
        console.error("Failed to copy:", l);
      }
    }
    return (l, r) => (n(), i("div", ox, [
      r[0] || (r[0] = t("span", { class: "file-path-icon" }, "📄", -1)),
      t("code", nx, m(e.path), 1),
      e.copyable ? (n(), i("button", {
        key: 0,
        class: "copy-btn",
        title: o.value ? "Copied!" : "Copy path",
        onClick: a
      }, m(o.value ? "✓" : "📋"), 9, ax)) : y("", !0)
    ]));
  }
}), ix = /* @__PURE__ */ xe(lx, [["__scopeId", "data-v-f0982173"]]), rx = { class: "base-textarea-wrapper" }, cx = ["value", "rows", "placeholder", "disabled", "maxlength"], ux = {
  key: 0,
  class: "base-textarea-count"
}, dx = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", rx, [
      t("textarea", {
        value: e.modelValue,
        rows: e.rows,
        placeholder: e.placeholder,
        disabled: e.disabled,
        maxlength: e.maxLength,
        class: "base-textarea",
        onInput: c[0] || (c[0] = (u) => r.$emit("update:modelValue", u.target.value)),
        onKeydown: [
          c[1] || (c[1] = ds(vt((u) => r.$emit("ctrlEnter"), ["ctrl"]), ["enter"])),
          c[2] || (c[2] = ds(vt((u) => r.$emit("ctrlEnter"), ["meta"]), ["enter"])),
          ds(l, ["enter"])
        ]
      }, null, 40, cx),
      e.showCharCount && e.maxLength ? (n(), i("div", ux, m(e.modelValue.length) + " / " + m(e.maxLength), 1)) : y("", !0)
    ]));
  }
}), xo = /* @__PURE__ */ xe(dx, [["__scopeId", "data-v-c6d16c93"]]), mx = ["checked", "disabled"], fx = { class: "base-checkbox-box" }, vx = {
  key: 0,
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, px = {
  key: 0,
  class: "base-checkbox-label"
}, gx = /* @__PURE__ */ be({
  __name: "BaseCheckbox",
  props: {
    modelValue: { type: Boolean },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("label", {
      class: Be(["base-checkbox", { disabled: e.disabled }])
    }, [
      t("input", {
        type: "checkbox",
        checked: e.modelValue,
        disabled: e.disabled,
        class: "base-checkbox-input",
        onChange: o[0] || (o[0] = (a) => s.$emit("update:modelValue", a.target.checked))
      }, null, 40, mx),
      t("span", fx, [
        e.modelValue ? (n(), i("svg", vx, [...o[1] || (o[1] = [
          t("path", {
            d: "M2 6L5 9L10 3",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, null, -1)
        ])])) : y("", !0)
      ]),
      s.$slots.default ? (n(), i("span", px, [
        ot(s.$slots, "default", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), Jn = /* @__PURE__ */ xe(gx, [["__scopeId", "data-v-bf17c831"]]), hx = { class: "export-blocked" }, yx = { class: "error-header" }, wx = { class: "error-summary" }, _x = { class: "error-title" }, kx = { class: "error-description" }, bx = { class: "issues-list" }, $x = { class: "issue-message" }, Cx = {
  key: 0,
  class: "issue-details"
}, xx = ["onClick"], Sx = { class: "issue-fix" }, Ix = {
  key: 0,
  class: "commit-section"
}, Ex = {
  key: 0,
  class: "issues-warning"
}, Tx = {
  key: 1,
  class: "commit-error"
}, Mx = /* @__PURE__ */ be({
  __name: "ExportBlockedModal",
  props: {
    issues: {},
    mode: {}
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = k(""), v = co({}), f = P(() => o.mode === "publish" ? "Publish" : "Export"), p = P(
      () => o.issues.some((S) => S.type === "uncommitted_workflows" || S.type === "uncommitted_git_changes")
    ), w = P(
      () => o.issues.some((S) => S.type === "unresolved_issues")
    ), g = P(
      () => w.value && !u.value
    ), _ = P(
      () => p.value && r.value.trim() !== "" && !c.value && !g.value
    );
    function C(S) {
      const T = o.issues[S];
      return v[S] || T.details.length <= 3 ? T.details : T.details.slice(0, 3);
    }
    async function x() {
      var S;
      if (_.value) {
        c.value = !0, d.value = "";
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success")
            a("committed");
          else if (T.status === "blocked") {
            const M = ((S = T.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            d.value = `Commit blocked: ${M}`;
          } else
            d.value = T.message || "Commit failed";
        } catch (T) {
          d.value = T instanceof Error ? T.message : "Commit failed";
        } finally {
          c.value = !1;
        }
      }
    }
    return (S, T) => (n(), R(It, {
      title: p.value ? `Commit & ${f.value}` : `Cannot ${f.value}`,
      size: "md",
      onClose: T[4] || (T[4] = (M) => S.$emit("close"))
    }, {
      body: h(() => [
        t("div", hx, [
          t("div", yx, [
            T[5] || (T[5] = t("span", { class: "error-icon" }, [
              t("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "currentColor"
              }, [
                t("path", { d: "M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22z" })
              ])
            ], -1)),
            t("div", wx, [
              t("h3", _x, m(f.value) + " blocked", 1),
              t("p", kx, m(p.value ? `Commit your changes to proceed with ${f.value.toLowerCase()}.` : `The following issues must be resolved before ${f.value.toLowerCase()}.`), 1)
            ])
          ]),
          t("div", bx, [
            (n(!0), i(B, null, ge(e.issues, (M, E) => (n(), i("div", {
              key: E,
              class: "issue-item"
            }, [
              t("div", $x, m(M.message), 1),
              M.details.length ? (n(), i("div", Cx, [
                (n(!0), i(B, null, ge(C(E), (D, z) => (n(), i("div", {
                  key: z,
                  class: "issue-detail"
                }, m(D), 1))), 128)),
                M.details.length > 3 && !v[E] ? (n(), i("button", {
                  key: 0,
                  class: "show-more-inline",
                  onClick: (D) => v[E] = !0
                }, " +" + m(M.details.length - 3) + " more ", 9, xx)) : y("", !0)
              ])) : y("", !0),
              t("div", Sx, [
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
          p.value ? (n(), i("div", Ix, [
            w.value ? (n(), i("div", Ex, [
              T[7] || (T[7] = t("div", { class: "warning-header" }, [
                t("span", { class: "warning-icon-badge" }, "!"),
                t("span", { class: "warning-label" }, "Some workflow issues cannot be fixed by committing")
              ], -1)),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": T[0] || (T[0] = (M) => u.value = M),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...T[6] || (T[6] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            b(xo, {
              modelValue: r.value,
              "onUpdate:modelValue": T[1] || (T[1] = (M) => r.value = M),
              placeholder: "Describe your changes...",
              disabled: c.value || g.value,
              rows: 3,
              "submit-on-enter": !0,
              onSubmit: x,
              onCtrlEnter: x
            }, null, 8, ["modelValue", "disabled"]),
            d.value ? (n(), i("div", Tx, m(d.value), 1)) : y("", !0)
          ])) : y("", !0)
        ])
      ]),
      footer: h(() => [
        p.value ? (n(), i(B, { key: 0 }, [
          b(De, {
            variant: "secondary",
            onClick: T[2] || (T[2] = (M) => S.$emit("close"))
          }, {
            default: h(() => [...T[8] || (T[8] = [
              $(" Cancel ", -1)
            ])]),
            _: 1
          }),
          b(De, {
            variant: u.value ? "danger" : "primary",
            disabled: !_.value,
            loading: c.value,
            onClick: x
          }, {
            default: h(() => [
              $(m(c.value ? "Committing..." : u.value ? `Force Commit & ${f.value}` : `Commit & ${f.value}`), 1)
            ]),
            _: 1
          }, 8, ["variant", "disabled", "loading"])
        ], 64)) : (n(), R(De, {
          key: 1,
          variant: "primary",
          onClick: T[3] || (T[3] = (M) => S.$emit("close"))
        }, {
          default: h(() => [...T[9] || (T[9] = [
            $(" Understood ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 1
    }, 8, ["title"]));
  }
}), Px = /* @__PURE__ */ xe(Mx, [["__scopeId", "data-v-a8990107"]]), Rx = { class: "readiness-header" }, Lx = { class: "readiness-body" }, Dx = {
  key: 0,
  class: "issue-section"
}, Nx = { class: "section-heading" }, Ux = { class: "issue-list" }, Ox = { class: "issue-main" }, Ax = { class: "issue-name" }, zx = { class: "issue-meta" }, Fx = { key: 0 }, Vx = { key: 1 }, Bx = ["onClick"], Wx = {
  key: 1,
  class: "issue-note"
}, Gx = {
  key: 1,
  class: "issue-section"
}, jx = { class: "section-heading" }, Hx = { class: "issue-list" }, qx = { class: "issue-main" }, Kx = { class: "issue-name" }, Jx = { class: "issue-meta" }, Qx = { class: "issue-reason" }, Yx = ["disabled", "onClick"], Xx = {
  key: 1,
  class: "issue-note"
}, Zx = {
  key: 2,
  class: "empty-state"
}, e3 = {
  key: 3,
  class: "error-message"
}, t3 = { class: "readiness-footer" }, s3 = /* @__PURE__ */ be({
  __name: "ReadinessIssuesModal",
  props: {
    warnings: {}
  },
  emits: ["close", "revalidate"],
  setup(e, { emit: s }) {
    const o = e, a = s, { updateNodeCriticality: l } = ct(), r = k(null), c = k(null), u = k(null), d = P(() => o.warnings.models_without_sources), v = P(() => o.warnings.nodes_without_provenance);
    async function f(w) {
      c.value = w, u.value = null;
      try {
        const g = await l(w, "optional");
        if (g.status !== "success") {
          u.value = g.message || `Failed to update ${w}`;
          return;
        }
        a("revalidate");
      } catch (g) {
        u.value = g instanceof Error ? g.message : `Failed to update ${w}`;
      } finally {
        c.value = null;
      }
    }
    function p() {
      r.value = null, a("revalidate");
    }
    return (w, g) => (n(), i(B, null, [
      (n(), R(Lt, { to: "body" }, [
        t("div", {
          class: "readiness-overlay",
          onClick: g[4] || (g[4] = (_) => a("close"))
        }, [
          t("div", {
            class: "readiness-modal",
            onClick: g[3] || (g[3] = vt(() => {
            }, ["stop"]))
          }, [
            t("div", Rx, [
              g[6] || (g[6] = t("div", null, [
                t("h3", { class: "readiness-title" }, "Review Reproducibility Issues"),
                t("p", { class: "readiness-subtitle" }, " Add missing source details where possible. Optional nodes are still listed as warnings, but they will not be treated as required build inputs. ")
              ], -1)),
              t("button", {
                class: "readiness-close",
                onClick: g[0] || (g[0] = (_) => a("close"))
              }, "x")
            ]),
            t("div", Lx, [
              d.value.length ? (n(), i("section", Dx, [
                t("div", Nx, [
                  g[7] || (g[7] = t("h4", null, "Models Missing Source URLs", -1)),
                  t("span", null, m(d.value.length), 1)
                ]),
                t("div", Ux, [
                  (n(!0), i(B, null, ge(d.value, (_) => (n(), i("article", {
                    key: _.hash || _.filename,
                    class: "issue-item"
                  }, [
                    t("div", Ox, [
                      t("div", Ax, m(_.filename), 1),
                      t("div", zx, [
                        _.hash ? (n(), i("span", Fx, "hash " + m(_.hash), 1)) : y("", !0),
                        _.workflows.length ? (n(), i("span", Vx, "used by " + m(_.workflows.join(", ")), 1)) : y("", !0),
                        t("span", null, m(_.criticality || "required"), 1)
                      ])
                    ]),
                    _.hash ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      onClick: (C) => r.value = _.hash
                    }, " Add URL ", 8, Bx)) : (n(), i("span", Wx, "Missing hash"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              v.value.length ? (n(), i("section", Gx, [
                t("div", jx, [
                  g[8] || (g[8] = t("h4", null, "Custom Nodes Missing Portable Provenance", -1)),
                  t("span", null, m(v.value.length), 1)
                ]),
                t("div", Hx, [
                  (n(!0), i(B, null, ge(v.value, (_) => (n(), i("article", {
                    key: _.name,
                    class: "issue-item"
                  }, [
                    t("div", qx, [
                      t("div", Kx, m(_.name), 1),
                      t("div", Jx, [
                        t("span", null, m(_.source), 1),
                        t("span", null, m(_.criticality), 1)
                      ]),
                      t("p", Qx, m(_.reason), 1)
                    ]),
                    _.criticality === "required" ? (n(), i("button", {
                      key: 0,
                      class: "issue-action",
                      disabled: c.value === _.name,
                      onClick: (C) => f(_.name)
                    }, m(c.value === _.name ? "Saving..." : "Mark Optional"), 9, Yx)) : (n(), i("span", Xx, "Optional warning"))
                  ]))), 128))
                ])
              ])) : y("", !0),
              !d.value.length && !v.value.length ? (n(), i("div", Zx, " No reproducibility issues remain. ")) : y("", !0),
              u.value ? (n(), i("div", e3, m(u.value), 1)) : y("", !0)
            ]),
            t("div", t3, [
              t("button", {
                class: "secondary-action",
                onClick: g[1] || (g[1] = (_) => a("revalidate"))
              }, " Refresh Check "),
              t("button", {
                class: "primary-action",
                onClick: g[2] || (g[2] = (_) => a("close"))
              }, " Done ")
            ])
          ])
        ])
      ])),
      r.value ? (n(), R(Tl, {
        key: 0,
        identifier: r.value,
        "overlay-z-index": 10008,
        onClose: p,
        onSourceSaved: g[5] || (g[5] = (_) => a("revalidate"))
      }, null, 8, ["identifier"])) : y("", !0)
    ], 64));
  }
}), gc = /* @__PURE__ */ xe(s3, [["__scopeId", "data-v-84048536"]]), o3 = { class: "repro-warning" }, n3 = { class: "repro-warning-content" }, a3 = {
  key: 0,
  class: "warning-group"
}, l3 = { class: "warning-list" }, i3 = { key: 0 }, r3 = {
  key: 1,
  class: "warning-group"
}, c3 = { class: "warning-list" }, u3 = { key: 0 }, d3 = /* @__PURE__ */ be({
  __name: "ReproducibilityWarningBanner",
  props: {
    warnings: {},
    message: { default: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly. Review the missing details, or continue anyway." },
    maxItemsPerGroup: { default: 2 }
  },
  emits: ["review"],
  setup(e) {
    const s = e, o = P(() => s.warnings.models_without_sources || []), a = P(() => s.warnings.nodes_without_provenance || []), l = P(() => o.value.length), r = P(() => a.value.length), c = P(() => l.value + r.value), u = P(
      () => o.value.slice(0, s.maxItemsPerGroup)
    ), d = P(
      () => a.value.slice(0, s.maxItemsPerGroup)
    ), v = P(
      () => Math.max(0, l.value - u.value.length)
    ), f = P(
      () => Math.max(0, r.value - d.value.length)
    );
    return (p, w) => (n(), i("div", o3, [
      w[3] || (w[3] = t("span", { class: "repro-warning-icon" }, "!", -1)),
      t("div", n3, [
        t("strong", null, m(c.value) + " reproducibility warning" + m(c.value !== 1 ? "s" : ""), 1),
        t("p", null, m(e.message), 1),
        l.value ? (n(), i("div", a3, [
          w[1] || (w[1] = t("div", { class: "warning-group-label" }, " Models ", -1)),
          t("ul", l3, [
            (n(!0), i(B, null, ge(u.value, (g) => (n(), i("li", {
              key: g.hash || g.filename
            }, m(g.filename), 1))), 128)),
            v.value ? (n(), i("li", i3, "+" + m(v.value) + " more model" + m(v.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        r.value ? (n(), i("div", r3, [
          w[2] || (w[2] = t("div", { class: "warning-group-label" }, " Nodes ", -1)),
          t("ul", c3, [
            (n(!0), i(B, null, ge(d.value, (g) => (n(), i("li", {
              key: g.name
            }, m(g.name) + " (" + m(g.criticality) + ") ", 1))), 128)),
            f.value ? (n(), i("li", u3, "+" + m(f.value) + " more node" + m(f.value !== 1 ? "s" : ""), 1)) : y("", !0)
          ])
        ])) : y("", !0),
        t("button", {
          class: "review-issues-btn",
          onClick: w[0] || (w[0] = (g) => p.$emit("review"))
        }, " Review Issues ")
      ])
    ]));
  }
}), sl = /* @__PURE__ */ xe(d3, [["__scopeId", "data-v-11be310d"]]), m3 = { class: "export-card" }, f3 = { class: "export-path-row" }, v3 = {
  key: 1,
  class: "export-warning"
}, p3 = { class: "export-footer-actions" }, g3 = /* @__PURE__ */ be({
  __name: "ExportSection",
  props: {
    environmentName: {},
    embedded: { type: Boolean }
  },
  emits: ["close"],
  setup(e) {
    const s = e, { validateExport: o, exportEnvWithForce: a, validateEnvironmentExport: l, exportEnvironmentWithForce: r } = ct(), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(!1), _ = k(!1), C = P(() => {
      var W;
      return ((W = s.environmentName) == null ? void 0 : W.trim()) || null;
    }), x = P(() => C.value ? `EXPORT ENVIRONMENT: ${C.value.toUpperCase()}` : "EXPORT ENVIRONMENT"), S = P(() => C.value ? `Environment '${C.value}' has been exported` : "Your environment has been exported"), T = P(() => u.value ? "Validating..." : d.value ? "Exporting..." : j.value ? "Export Anyway" : "Export Environment"), M = P(() => {
      var W;
      return ((W = w.value) == null ? void 0 : W.warnings) || {
        models_without_sources: [],
        nodes_without_provenance: []
      };
    }), E = P(
      () => M.value.models_without_sources.length
    ), D = P(
      () => {
        var W;
        return ((W = M.value.nodes_without_provenance) == null ? void 0 : W.length) || 0;
      }
    ), z = P(
      () => E.value + D.value
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
    async function q() {
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
    async function ne() {
      await L();
    }
    async function Y() {
      d.value = !0;
      try {
        const W = C.value ? await r(C.value, c.value || void 0) : await a(c.value || void 0);
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
        } catch (K) {
          console.error("Failed to copy path:", K);
        }
    }
    async function Z() {
      var W;
      if ((W = f.value) != null && W.path) {
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
    }), (W, K) => (n(), i(B, null, [
      b(At, null, Qt({
        content: h(() => [
          j.value ? (n(), R(sl, {
            key: 0,
            class: "export-readiness-warning",
            warnings: M.value,
            message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
            onReview: K[1] || (K[1] = (ke) => _.value = !0)
          }, null, 8, ["warnings"])) : y("", !0),
          b(St, { title: "EXPORT OPTIONS" }, {
            default: h(() => [
              t("div", m3, [
                K[8] || (K[8] = t("div", { class: "export-card-header" }, [
                  t("span", { class: "export-icon" }, "📁"),
                  t("div", { class: "export-header-text" }, [
                    t("div", { class: "export-title" }, "Output Destination"),
                    t("div", { class: "export-subtitle" }, "Leave empty for default location, or specify a custom path")
                  ])
                ], -1)),
                t("div", f3, [
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
          f.value ? (n(), R(St, {
            key: 1,
            title: "LAST EXPORT"
          }, {
            default: h(() => [
              b(Vt, {
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
                        b(ix, {
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
                    f.value.models_without_sources && f.value.models_without_sources > 0 ? (n(), i("div", v3, [...K[9] || (K[9] = [
                      t("span", { class: "warning-icon" }, "!", -1),
                      t("span", { class: "warning-text" }, " Some models don't have source information. They may need to be downloaded manually when importing this environment elsewhere. ", -1)
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
                      onClick: Z
                    }, {
                      default: h(() => [...K[10] || (K[10] = [
                        t("svg", {
                          width: "14",
                          height: "14",
                          viewBox: "0 0 16 16",
                          fill: "currentColor"
                        }, [
                          t("path", { d: "M8 12L3 7h3V1h4v6h3L8 12z" }),
                          t("path", { d: "M14 14H2v2h12v-2z" })
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
          t("div", p3, [
            e.embedded ? (n(), R(Me, {
              key: 0,
              variant: "secondary",
              size: "md",
              disabled: d.value,
              onClick: K[4] || (K[4] = (ke) => W.$emit("close"))
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
                $(m(T.value), 1)
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
            b(zt, {
              title: x.value,
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
          t("div", { class: "export-info" }, [
            t("div", { class: "info-section" }, [
              t("strong", null, "Included in Export:"),
              t("ul", null, [
                t("li", null, [
                  t("strong", null, "Workflows"),
                  $(" — All workflows in this environment")
                ]),
                t("li", null, [
                  t("strong", null, "Custom Nodes"),
                  $(" — Node definitions and dependencies")
                ]),
                t("li", null, [
                  t("strong", null, "Models"),
                  $(" — References and source URLs (not the files)")
                ]),
                t("li", null, [
                  t("strong", null, "Configuration"),
                  $(" — Environment settings and metadata")
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
              $(" Model files are not included to keep exports small. Models can be re-downloaded on import using their source information. ")
            ])
          ], -1)
        ])]),
        _: 1
      }, 8, ["show"]),
      g.value && w.value ? (n(), R(Px, {
        key: 0,
        issues: w.value.blocking_issues,
        onClose: K[6] || (K[6] = (ke) => g.value = !1),
        onCommitted: ce
      }, null, 8, ["issues"])) : y("", !0),
      _.value && w.value ? (n(), R(gc, {
        key: 1,
        warnings: w.value.warnings,
        onClose: K[7] || (K[7] = (ke) => _.value = !1),
        onRevalidate: ne
      }, null, 8, ["warnings"])) : y("", !0)
    ], 64));
  }
}), h3 = /* @__PURE__ */ xe(g3, [["__scopeId", "data-v-6cf814a2"]]), y3 = { class: "file-input-wrapper" }, w3 = ["accept", "multiple", "disabled"], _3 = /* @__PURE__ */ be({
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
    const a = o, l = k(null);
    function r() {
      var u;
      (u = l.value) == null || u.click();
    }
    function c(u) {
      const d = u.target;
      d.files && d.files.length > 0 && (a("change", d.files), d.value = "");
    }
    return s({
      triggerInput: r
    }), (u, d) => (n(), i("div", y3, [
      t("input", {
        ref_key: "fileInputRef",
        ref: l,
        type: "file",
        accept: e.accept,
        multiple: e.multiple,
        disabled: e.disabled,
        class: "file-input-hidden",
        onChange: c
      }, null, 40, w3),
      b(Me, {
        variant: e.variant,
        size: e.size,
        disabled: e.disabled,
        onClick: r
      }, {
        default: h(() => [
          ot(u.$slots, "default", {}, () => [
            d[0] || (d[0] = t("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 16 16",
              fill: "currentColor"
            }, [
              t("path", { d: "M8 4L4 8h3v4h2V8h3L8 4z" }),
              t("path", { d: "M2 14h12v-2H2v2z" })
            ], -1)),
            $(" " + m(e.label), 1)
          ], !0)
        ]),
        _: 3
      }, 8, ["variant", "size", "disabled"])
    ]));
  }
}), k3 = /* @__PURE__ */ xe(_3, [["__scopeId", "data-v-cd192091"]]), b3 = {
  key: 0,
  class: "drop-zone-empty"
}, $3 = { class: "drop-zone-text" }, C3 = { class: "drop-zone-primary" }, x3 = { class: "drop-zone-secondary" }, S3 = { class: "drop-zone-actions" }, I3 = {
  key: 1,
  class: "drop-zone-file"
}, E3 = { class: "file-info" }, T3 = { class: "file-details" }, M3 = { class: "file-name" }, P3 = { class: "file-size" }, R3 = /* @__PURE__ */ be({
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
    const o = s, a = k(!1), l = k(null), r = k(0), c = P(() => l.value !== null), u = P(() => {
      var x;
      return ((x = l.value) == null ? void 0 : x.name) || "";
    }), d = P(() => {
      if (!l.value) return "";
      const x = l.value.size;
      return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KB` : x < 1024 * 1024 * 1024 ? `${(x / (1024 * 1024)).toFixed(1)} MB` : `${(x / (1024 * 1024 * 1024)).toFixed(1)} GB`;
    });
    function v(x) {
      var S;
      x.stopPropagation(), r.value++, (S = x.dataTransfer) != null && S.types.includes("Files") && (a.value = !0);
    }
    function f(x) {
      x.stopPropagation(), x.dataTransfer && (x.dataTransfer.dropEffect = "copy");
    }
    function p(x) {
      x.stopPropagation(), r.value--, r.value === 0 && (a.value = !1);
    }
    function w(x) {
      var T;
      x.stopPropagation(), r.value = 0, a.value = !1;
      const S = (T = x.dataTransfer) == null ? void 0 : T.files;
      S && S.length > 0 && _(S[0]);
    }
    function g(x) {
      x.length > 0 && _(x[0]);
    }
    function _(x) {
      l.value = x, o("fileSelected", x);
    }
    function C() {
      l.value = null, o("clear");
    }
    return (x, S) => (n(), i("div", {
      class: Be(["file-drop-zone", { "drop-active": a.value, "has-file": c.value }]),
      onDragenter: vt(v, ["prevent"]),
      onDragover: vt(f, ["prevent"]),
      onDragleave: vt(p, ["prevent"]),
      onDrop: vt(w, ["prevent"])
    }, [
      c.value ? (n(), i("div", I3, [
        t("div", E3, [
          S[1] || (S[1] = t("div", { class: "file-icon" }, "📦", -1)),
          t("div", T3, [
            t("div", M3, m(u.value), 1),
            t("div", P3, m(d.value), 1)
          ])
        ]),
        b(Me, {
          variant: "ghost",
          size: "xs",
          onClick: C,
          title: "Remove file"
        }, {
          default: h(() => [...S[2] || (S[2] = [
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
      ])) : (n(), i("div", b3, [
        S[0] || (S[0] = t("div", { class: "drop-zone-icon" }, [
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
        t("div", $3, [
          t("p", C3, m(e.primaryText), 1),
          t("p", x3, m(e.secondaryText), 1)
        ]),
        t("div", S3, [
          b(k3, {
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
}), L3 = /* @__PURE__ */ xe(R3, [["__scopeId", "data-v-0f79cb86"]]), D3 = { class: "commit-hash" }, N3 = /* @__PURE__ */ be({
  __name: "CommitHash",
  props: {
    hash: {},
    length: { default: 7 }
  },
  setup(e) {
    const s = e, o = P(() => s.hash.slice(0, s.length));
    return (a, l) => (n(), i("span", D3, m(o.value), 1));
  }
}), hc = /* @__PURE__ */ xe(N3, [["__scopeId", "data-v-7c333cc6"]]), U3 = { class: "import-preview" }, O3 = { class: "preview-header" }, A3 = {
  key: 0,
  class: "source-env"
}, z3 = { class: "preview-content" }, F3 = { class: "preview-section" }, V3 = { class: "section-header" }, B3 = { class: "section-info" }, W3 = { class: "section-count" }, G3 = {
  key: 0,
  class: "item-list"
}, j3 = { class: "item-name" }, H3 = {
  key: 0,
  class: "item-more"
}, q3 = { class: "preview-section" }, K3 = { class: "section-header" }, J3 = { class: "section-info" }, Q3 = { class: "section-count" }, Y3 = {
  key: 0,
  class: "item-list"
}, X3 = { class: "item-details" }, Z3 = { class: "item-name" }, eS = { class: "item-meta" }, tS = {
  key: 0,
  class: "item-more"
}, sS = { class: "preview-section" }, oS = { class: "section-header" }, nS = { class: "section-info" }, aS = { class: "section-count" }, lS = {
  key: 0,
  class: "item-list"
}, iS = { class: "item-name" }, rS = {
  key: 0,
  class: "item-more"
}, cS = {
  key: 0,
  class: "preview-section"
}, uS = { class: "git-info" }, dS = /* @__PURE__ */ be({
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
    const s = e, o = P(() => s.workflows.length), a = P(() => s.models.length), l = P(() => s.nodes.length);
    function r(c) {
      return c < 1024 ? `${c} B` : c < 1024 * 1024 ? `${(c / 1024).toFixed(1)} KB` : c < 1024 * 1024 * 1024 ? `${(c / (1024 * 1024)).toFixed(1)} MB` : `${(c / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    return (c, u) => (n(), i("div", U3, [
      t("div", O3, [
        b(ns, null, {
          default: h(() => [...u[0] || (u[0] = [
            $("Import Preview", -1)
          ])]),
          _: 1
        }),
        e.sourceEnvironment ? (n(), i("span", A3, [
          u[1] || (u[1] = $(" From: ", -1)),
          b(tl, null, {
            default: h(() => [
              $(m(e.sourceEnvironment), 1)
            ]),
            _: 1
          })
        ])) : y("", !0)
      ]),
      t("div", z3, [
        t("div", F3, [
          t("div", V3, [
            u[3] || (u[3] = t("div", { class: "section-icon" }, "📄", -1)),
            t("div", B3, [
              u[2] || (u[2] = t("div", { class: "section-title" }, "Workflows", -1)),
              t("div", W3, m(o.value) + " file" + m(o.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.workflows.length > 0 ? (n(), i("div", G3, [
            (n(!0), i(B, null, ge(e.workflows.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[4] || (u[4] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", j3, m(d), 1)
            ]))), 128)),
            e.workflows.length > e.maxPreviewItems ? (n(), i("div", H3, " +" + m(e.workflows.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", q3, [
          t("div", K3, [
            u[6] || (u[6] = t("div", { class: "section-icon" }, "🎨", -1)),
            t("div", J3, [
              u[5] || (u[5] = t("div", { class: "section-title" }, "Models", -1)),
              t("div", Q3, m(a.value) + " file" + m(a.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.models.length > 0 ? (n(), i("div", Y3, [
            (n(!0), i(B, null, ge(e.models.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d.filename,
              class: "preview-item"
            }, [
              u[7] || (u[7] = t("span", { class: "item-bullet" }, "•", -1)),
              t("div", X3, [
                t("span", Z3, m(d.filename), 1),
                t("span", eS, m(r(d.size)) + " • " + m(d.type), 1)
              ])
            ]))), 128)),
            e.models.length > e.maxPreviewItems ? (n(), i("div", tS, " +" + m(e.models.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        t("div", sS, [
          t("div", oS, [
            u[9] || (u[9] = t("div", { class: "section-icon" }, "🔌", -1)),
            t("div", nS, [
              u[8] || (u[8] = t("div", { class: "section-title" }, "Custom Nodes", -1)),
              t("div", aS, m(l.value) + " node" + m(l.value !== 1 ? "s" : ""), 1)
            ])
          ]),
          e.nodes.length > 0 ? (n(), i("div", lS, [
            (n(!0), i(B, null, ge(e.nodes.slice(0, e.maxPreviewItems), (d) => (n(), i("div", {
              key: d,
              class: "preview-item"
            }, [
              u[10] || (u[10] = t("span", { class: "item-bullet" }, "•", -1)),
              t("span", iS, m(d), 1)
            ]))), 128)),
            e.nodes.length > e.maxPreviewItems ? (n(), i("div", rS, " +" + m(e.nodes.length - e.maxPreviewItems) + " more ", 1)) : y("", !0)
          ])) : y("", !0)
        ]),
        e.gitBranch || e.gitCommit ? (n(), i("div", cS, [
          u[11] || (u[11] = t("div", { class: "section-header" }, [
            t("div", { class: "section-icon" }, "🌿"),
            t("div", { class: "section-info" }, [
              t("div", { class: "section-title" }, "Git Information")
            ])
          ], -1)),
          t("div", uS, [
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
                b(hc, { hash: e.gitCommit }, null, 8, ["hash"])
              ]),
              _: 1
            })) : y("", !0)
          ])
        ])) : y("", !0)
      ])
    ]));
  }
}), mS = /* @__PURE__ */ xe(dS, [["__scopeId", "data-v-182fe113"]]), fS = { class: "import-config" }, vS = { class: "config-container" }, pS = { class: "config-field" }, gS = { class: "input-wrapper" }, hS = ["value"], yS = {
  key: 0,
  class: "validating-indicator"
}, wS = {
  key: 1,
  class: "valid-indicator"
}, _S = {
  key: 0,
  class: "field-error"
}, kS = { class: "config-field" }, bS = { class: "strategy-options" }, $S = ["value", "checked", "onChange"], CS = { class: "strategy-content" }, xS = { class: "strategy-label" }, SS = { class: "strategy-description" }, IS = { class: "config-field switch-field" }, ES = { class: "switch-label" }, TS = ["checked"], MS = { class: "advanced-section" }, PS = { class: "advanced-content" }, RS = { class: "config-field" }, LS = ["value"], DS = ["value"], NS = /* @__PURE__ */ be({
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
    const o = e, a = s, l = k(!1), r = k(!1);
    yt(() => o.nameError, (f) => {
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
    return (f, p) => (n(), i("div", fS, [
      b(ns, null, {
        default: h(() => [...p[2] || (p[2] = [
          $("Configuration", -1)
        ])]),
        _: 1
      }),
      t("div", vS, [
        t("div", pS, [
          b(Dn, { required: "" }, {
            default: h(() => [...p[3] || (p[3] = [
              $("Environment Name", -1)
            ])]),
            _: 1
          }),
          t("div", gS, [
            t("input", {
              type: "text",
              class: Be(["name-input", { error: e.nameError || e.name.length === 0, valid: r.value }]),
              value: e.name,
              placeholder: "my-imported-env",
              onInput: d,
              onBlur: v
            }, null, 42, hS),
            l.value ? (n(), i("span", yS, "...")) : r.value ? (n(), i("span", wS, "✓")) : y("", !0)
          ]),
          e.nameError ? (n(), i("div", _S, m(e.nameError), 1)) : y("", !0),
          p[4] || (p[4] = t("div", { class: "field-hint" }, "Creates a new environment with this name", -1))
        ]),
        t("div", kS, [
          b(Dn, null, {
            default: h(() => [...p[5] || (p[5] = [
              $("Model Download Strategy", -1)
            ])]),
            _: 1
          }),
          t("div", bS, [
            (n(), i(B, null, ge(c, (w) => t("label", {
              key: w.value,
              class: Be(["strategy-option", { active: e.modelStrategy === w.value }])
            }, [
              t("input", {
                type: "radio",
                name: "model-strategy",
                value: w.value,
                checked: e.modelStrategy === w.value,
                onChange: (g) => a("update:modelStrategy", w.value)
              }, null, 40, $S),
              t("div", CS, [
                t("span", xS, m(w.label), 1),
                t("span", SS, m(w.description), 1)
              ])
            ], 2)), 64))
          ])
        ]),
        t("div", IS, [
          t("label", ES, [
            t("input", {
              type: "checkbox",
              checked: e.switchAfterImport,
              onChange: p[0] || (p[0] = (w) => a("update:switchAfterImport", w.target.checked))
            }, null, 40, TS),
            p[6] || (p[6] = t("span", null, "Switch to this environment after import", -1))
          ])
        ]),
        t("details", MS, [
          p[8] || (p[8] = t("summary", { class: "advanced-toggle" }, "Advanced Options", -1)),
          t("div", PS, [
            t("div", RS, [
              b(Dn, null, {
                default: h(() => [...p[7] || (p[7] = [
                  $("PyTorch Backend", -1)
                ])]),
                _: 1
              }),
              t("select", {
                class: "backend-select",
                value: e.torchBackend,
                onChange: p[1] || (p[1] = (w) => a("update:torchBackend", w.target.value))
              }, [
                (n(!0), i(B, null, ge(st(Pl), (w) => (n(), i("option", {
                  key: w,
                  value: w
                }, m(w) + m(w === "auto" ? " (detect GPU)" : ""), 9, DS))), 128))
              ], 40, LS)
            ])
          ])
        ])
      ])
    ]));
  }
}), US = /* @__PURE__ */ xe(NS, [["__scopeId", "data-v-89ea06a1"]]), OS = { class: "import-flow" }, AS = {
  key: 0,
  class: "import-empty"
}, zS = { class: "git-import-section" }, FS = { class: "git-url-input-row" }, VS = ["disabled"], BS = {
  key: 0,
  class: "git-error"
}, WS = {
  key: 1,
  class: "import-configure"
}, GS = { class: "selected-file-bar" }, jS = {
  key: 0,
  class: "file-bar-content"
}, HS = { class: "file-bar-info" }, qS = { class: "file-bar-name" }, KS = { class: "file-bar-size" }, JS = {
  key: 1,
  class: "file-bar-content"
}, QS = { class: "file-bar-info" }, YS = { class: "file-bar-name" }, XS = {
  key: 0,
  class: "preview-loading"
}, ZS = { class: "import-actions" }, e5 = {
  key: 2,
  class: "import-progress"
}, t5 = { class: "creating-intro" }, s5 = {
  key: 0,
  class: "progress-warning"
}, o5 = {
  key: 1,
  class: "import-error"
}, n5 = { class: "error-message" }, a5 = {
  key: 3,
  class: "import-complete"
}, l5 = { class: "complete-message" }, i5 = { class: "complete-title" }, r5 = { class: "complete-details" }, c5 = { class: "complete-actions" }, u5 = /* @__PURE__ */ be({
  __name: "ImportFlow",
  props: {
    workspacePath: {},
    resumeImport: { type: Boolean },
    initialProgress: {}
  },
  emits: ["import-complete", "import-started", "source-cleared"],
  setup(e, { expose: s, emit: o }) {
    var ee, Q, $e, te;
    const a = e, l = o, { previewTarballImport: r, previewGitImport: c, validateEnvironmentName: u, executeImport: d, executeGitImport: v, getImportProgress: f } = ct();
    let p = null;
    const w = k(null), g = k(a.resumeImport ?? !1), _ = k(!1), C = k(!1), x = k(""), S = k(!1), T = k(null), M = k(""), E = k(null), D = k(!1), z = k(null), j = k(null), L = k({
      name: ((ee = a.initialProgress) == null ? void 0 : ee.environmentName) ?? "",
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
    }), we = P(() => !S.value && !T.value && j.value && L.value.name.length > 0 && !q.value && (w.value || E.value));
    async function Z(oe) {
      w.value = oe, S.value = !0, T.value = null, j.value = null;
      try {
        const Re = await r(oe);
        j.value = Re;
      } catch (Re) {
        T.value = Re instanceof Error ? Re.message : "Failed to analyze file", console.error("Preview error:", Re);
      } finally {
        S.value = !1;
      }
    }
    function W() {
      w.value = null, E.value = null, M.value = "", z.value = null, _.value = !1, C.value = !1, x.value = "", j.value = null, T.value = null, L.value = { name: "", modelStrategy: "required", torchBackend: "auto", switchAfterImport: !0 }, q.value = null, l("source-cleared");
    }
    function K() {
      Pe(), W(), g.value = !1, S.value = !1, D.value = !1, ce.value = {
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
          E.value = M.value.trim(), j.value = oe;
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
      if (L.value.name && !(!w.value && !E.value)) {
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
          else if (E.value)
            oe = await v(
              E.value,
              L.value.name,
              L.value.modelStrategy,
              L.value.torchBackend
            );
          else
            throw new Error("No import source selected");
          oe.status === "started" ? me() : (C.value = !1, x.value = oe.message, g.value = !1, _.value = !0);
        } catch (oe) {
          C.value = !1, x.value = oe instanceof Error ? oe.message : "Unknown error occurred during import", g.value = !1, _.value = !0;
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
          }, ve.state === "complete" ? (Pe(), C.value = !0, x.value = `Environment '${ve.environment_name}' created successfully`, g.value = !1, _.value = !0, ve.environment_name && l("import-complete", ve.environment_name, L.value.switchAfterImport), !1) : ve.state === "error" ? (Pe(), C.value = !1, x.value = ve.error || ve.message, g.value = !1, _.value = !0, !1) : !0;
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
    }), s({
      handleReset: K,
      isImporting: g,
      canImport: we
    }), (oe, Re) => {
      var ve;
      return n(), i("div", OS, [
        !w.value && !E.value && !g.value ? (n(), i("div", AS, [
          b(L3, {
            accept: ".tar.gz,.tgz,.zip",
            "primary-text": "Drag & drop environment export here",
            "secondary-text": "Supports .tar.gz, .tgz, or .zip files",
            "button-text": "Select Export File",
            onFileSelected: Z
          }),
          Re[7] || (Re[7] = t("div", { class: "import-divider" }, [
            t("span", null, "or")
          ], -1)),
          t("div", zS, [
            Re[5] || (Re[5] = t("div", { class: "git-import-header" }, "Import from Git Repository", -1)),
            t("div", FS, [
              Tt(t("input", {
                type: "text",
                class: "git-url-input",
                "onUpdate:modelValue": Re[0] || (Re[0] = (le) => M.value = le),
                placeholder: "https://github.com/user/repo.git",
                onKeyup: ds(ke, ["enter"]),
                disabled: D.value
              }, null, 40, VS), [
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
            z.value ? (n(), i("div", BS, m(z.value), 1)) : y("", !0),
            Re[6] || (Re[6] = t("div", { class: "git-url-hint" }, "Paste a GitHub URL to preview the environment", -1))
          ])
        ])) : (w.value || E.value) && !g.value && !_.value ? (n(), i("div", WS, [
          t("div", GS, [
            w.value ? (n(), i("div", jS, [
              Re[8] || (Re[8] = t("div", { class: "file-bar-icon" }, "📦", -1)),
              t("div", HS, [
                t("div", qS, m(w.value.name), 1),
                t("div", KS, m(ye(w.value.size)), 1)
              ])
            ])) : E.value ? (n(), i("div", JS, [
              Re[10] || (Re[10] = t("div", { class: "file-bar-icon" }, "🔗", -1)),
              t("div", QS, [
                t("div", YS, m(se(E.value)), 1),
                Re[9] || (Re[9] = t("div", { class: "file-bar-size" }, "Git Repository", -1))
              ])
            ])) : y("", !0),
            b(Me, {
              variant: "ghost",
              size: "sm",
              onClick: W
            }, {
              default: h(() => [...Re[11] || (Re[11] = [
                $(" Change Source ", -1)
              ])]),
              _: 1
            })
          ]),
          S.value ? (n(), i("div", XS, [...Re[12] || (Re[12] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("div", { class: "loading-text" }, "Analyzing import file...", -1)
          ])])) : T.value ? (n(), R(cs, {
            key: 1,
            type: "error",
            title: "Failed to Analyze File",
            details: [T.value]
          }, null, 8, ["details"])) : j.value ? (n(), R(mS, {
            key: 2,
            "source-environment": Y.value.sourceEnvironment,
            workflows: Y.value.workflows,
            models: Y.value.models,
            nodes: Y.value.nodes,
            "git-branch": Y.value.gitBranch,
            "git-commit": Y.value.gitCommit
          }, null, 8, ["source-environment", "workflows", "models", "nodes", "git-branch", "git-commit"])) : y("", !0),
          j.value ? (n(), R(US, {
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
          L.value.modelStrategy === "skip" && ((ve = j.value) != null && ve.models_needing_download) ? (n(), R(cs, {
            key: 4,
            type: "warning",
            title: "Models Will Not Be Downloaded",
            details: [
              `${j.value.models_needing_download} model(s) will need to be downloaded later`,
              "You can resolve missing models from the STATUS page after import"
            ]
          }, null, 8, ["details"])) : y("", !0),
          t("div", ZS, [
            b(Me, {
              variant: "secondary",
              size: "md",
              onClick: W
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
        ])) : g.value ? (n(), i("div", e5, [
          t("p", t5, [
            Re[15] || (Re[15] = $(" Importing environment ", -1)),
            t("strong", null, m(L.value.name), 1),
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
          ce.value.error ? y("", !0) : (n(), i("p", s5, " This may take several minutes. Please wait... ")),
          ce.value.error ? (n(), i("div", o5, [
            t("p", n5, m(ce.value.error), 1)
          ])) : y("", !0)
        ])) : _.value ? (n(), i("div", a5, [
          t("div", {
            class: Be(["complete-icon", C.value ? "success" : "error"])
          }, m(C.value ? "✓" : "✕"), 3),
          t("div", l5, [
            t("div", i5, m(C.value ? "Import Successful" : "Import Failed"), 1),
            t("div", r5, m(x.value), 1)
          ]),
          t("div", c5, [
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
}), yc = /* @__PURE__ */ xe(u5, [["__scopeId", "data-v-72cbc04e"]]), d5 = /* @__PURE__ */ be({
  __name: "ImportSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["import-complete-switch"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1);
    function l(r, c) {
      c && o("import-complete-switch", r);
    }
    return (r, c) => (n(), i(B, null, [
      b(At, null, Qt({
        content: h(() => [
          b(yc, { onImportComplete: l })
        ]),
        _: 2
      }, [
        e.embedded ? void 0 : {
          name: "header",
          fn: h(() => [
            b(zt, {
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
}), m5 = /* @__PURE__ */ xe(d5, [["__scopeId", "data-v-41b1f298"]]), f5 = { class: "base-tabs" }, v5 = ["disabled", "onClick"], p5 = {
  key: 0,
  class: "base-tabs__badge"
}, g5 = /* @__PURE__ */ be({
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
    return (r, c) => (n(), i("div", f5, [
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
        u.badge ? (n(), i("span", p5, m(u.badge), 1)) : y("", !0)
      ], 10, v5))), 128))
    ]));
  }
}), Rl = /* @__PURE__ */ xe(g5, [["__scopeId", "data-v-ad5e6cad"]]), h5 = { class: "commit-list" }, y5 = /* @__PURE__ */ be({
  __name: "CommitList",
  setup(e) {
    return (s, o) => (n(), i("div", h5, [
      ot(s.$slots, "default", {}, void 0)
    ]));
  }
}), wc = /* @__PURE__ */ xe(y5, [["__scopeId", "data-v-8c5ee761"]]), w5 = { class: "commit-message" }, _5 = { class: "commit-date" }, k5 = /* @__PURE__ */ be({
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
      class: Be(["commit-item", { clickable: e.clickable }]),
      onClick: l
    }, [
      b(hc, { hash: e.hash }, null, 8, ["hash"]),
      t("span", w5, m(e.message), 1),
      t("span", _5, m(e.relativeDate), 1),
      r.$slots.actions ? (n(), i("div", {
        key: 0,
        class: "commit-actions",
        onClick: c[0] || (c[0] = vt(() => {
        }, ["stop"]))
      }, [
        ot(r.$slots, "actions", {}, void 0)
      ])) : y("", !0)
    ], 2));
  }
}), _c = /* @__PURE__ */ xe(k5, [["__scopeId", "data-v-dd7c621b"]]), b5 = /* @__PURE__ */ be({
  __name: "HistorySection",
  props: {
    commits: {},
    currentRef: {},
    embedded: { type: Boolean }
  },
  emits: ["select", "checkout"],
  setup(e) {
    const s = e, o = P(() => `HISTORY (${s.currentRef || "detached"})`);
    return (a, l) => (n(), R(At, null, Qt({
      content: h(() => [
        e.commits.length === 0 ? (n(), R(rs, {
          key: 0,
          icon: "📜",
          message: "No commits yet"
        })) : (n(), R(wc, { key: 1 }, {
          default: h(() => [
            (n(!0), i(B, null, ge(e.commits, (r) => (n(), R(_c, {
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
      _: 2
    }, [
      e.embedded ? void 0 : {
        name: "header",
        fn: h(() => [
          b(zt, { title: o.value }, null, 8, ["title"])
        ]),
        key: "0"
      }
    ]), 1024));
  }
}), $5 = /* @__PURE__ */ xe(b5, [["__scopeId", "data-v-fa4bf3a1"]]), C5 = { class: "branch-create-form" }, x5 = { class: "form-actions" }, S5 = /* @__PURE__ */ be({
  __name: "BranchCreateForm",
  emits: ["create", "cancel"],
  setup(e, { emit: s }) {
    const o = s, a = k(""), l = P(() => {
      const u = a.value.trim();
      return u.length > 0 && !u.startsWith("-") && !u.endsWith(".lock") && !/[\s~^:?*\[\\]/.test(u);
    });
    function r() {
      l.value && (o("create", a.value.trim()), a.value = "");
    }
    function c() {
      a.value = "", o("cancel");
    }
    return (u, d) => (n(), i("div", C5, [
      b(yo, {
        modelValue: a.value,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v),
        placeholder: "Branch name...",
        "auto-focus": !0,
        onEnter: r,
        onEscape: c
      }, null, 8, ["modelValue"]),
      t("div", x5, [
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
}), I5 = /* @__PURE__ */ xe(S5, [["__scopeId", "data-v-7c500394"]]), E5 = { class: "branch-list-item__indicator" }, T5 = { class: "branch-list-item__name" }, M5 = {
  key: 0,
  class: "branch-list-item__actions"
}, P5 = {
  key: 0,
  class: "branch-list-item__current-label"
}, R5 = /* @__PURE__ */ be({
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
      class: Be(["branch-list-item", { current: e.isCurrent, clickable: e.clickable }]),
      onClick: o[0] || (o[0] = (a) => e.clickable && s.$emit("click"))
    }, [
      t("span", E5, m(e.isCurrent ? "●" : "○"), 1),
      t("span", T5, m(e.branchName), 1),
      s.$slots.actions || e.showCurrentLabel ? (n(), i("div", M5, [
        ot(s.$slots, "actions", {}, void 0),
        e.isCurrent && e.showCurrentLabel ? (n(), i("span", P5, " current ")) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), L5 = /* @__PURE__ */ xe(R5, [["__scopeId", "data-v-c6581a24"]]), D5 = { class: "header-info" }, N5 = { class: "branch-name" }, U5 = {
  key: 0,
  class: "current-badge"
}, O5 = { class: "branch-meta" }, A5 = { key: 0 }, z5 = {
  key: 0,
  class: "meta-note"
}, F5 = {
  key: 0,
  class: "loading"
}, V5 = {
  key: 1,
  class: "empty-state"
}, B5 = /* @__PURE__ */ be({
  __name: "BranchDetailModal",
  props: {
    branchName: {},
    isCurrent: { type: Boolean }
  },
  emits: ["close", "delete", "switch"],
  setup(e) {
    const s = e, { getBranchHistory: o } = ct(), a = k([]), l = k(!1), r = k(!0);
    return at(async () => {
      try {
        const c = await o(s.branchName, 50);
        a.value = c.commits, l.value = c.has_more;
      } finally {
        r.value = !1;
      }
    }), (c, u) => (n(), R(It, {
      size: "md",
      "show-close-button": !1,
      onClose: u[3] || (u[3] = (d) => c.$emit("close"))
    }, {
      header: h(() => [
        t("div", D5, [
          u[4] || (u[4] = t("h3", { class: "header-title" }, "BRANCH", -1)),
          t("span", N5, m(e.branchName), 1),
          e.isCurrent ? (n(), i("span", U5, "CURRENT")) : y("", !0)
        ]),
        b(De, {
          variant: "ghost",
          size: "sm",
          onClick: u[0] || (u[0] = (d) => c.$emit("close"))
        }, {
          default: h(() => [...u[5] || (u[5] = [
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
      body: h(() => [
        t("div", O5, [
          r.value ? (n(), i("span", A5, "Loading...")) : (n(), i(B, { key: 1 }, [
            t("span", null, m(a.value.length) + " commits", 1),
            l.value ? (n(), i("span", z5, "(showing first " + m(a.value.length) + ")", 1)) : y("", !0)
          ], 64))
        ]),
        r.value ? (n(), i("div", F5, "Loading commit history...")) : a.value.length === 0 ? (n(), i("div", V5, " No commits found on this branch ")) : (n(), R(wc, {
          key: 2,
          class: "branch-commits"
        }, {
          default: h(() => [
            (n(!0), i(B, null, ge(a.value, (d) => (n(), R(_c, {
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
        u[8] || (u[8] = t("div", { class: "footer-spacer" }, null, -1)),
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
}), W5 = /* @__PURE__ */ xe(B5, [["__scopeId", "data-v-2e5437cc"]]), G5 = {
  key: 2,
  class: "branch-list"
}, j5 = /* @__PURE__ */ be({
  __name: "BranchSection",
  props: {
    branches: {},
    current: {},
    embedded: { type: Boolean }
  },
  emits: ["switch", "create", "delete"],
  setup(e, { emit: s }) {
    const o = s, a = k(!1), l = k(null);
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
    return (f, p) => (n(), R(At, null, Qt({
      content: h(() => [
        a.value ? (n(), R(I5, {
          key: 0,
          onCreate: r,
          onCancel: c
        })) : y("", !0),
        e.branches.length === 0 ? (n(), R(rs, {
          key: 1,
          icon: "○",
          message: "No branches found"
        })) : (n(), i("div", G5, [
          (n(!0), i(B, null, ge(e.branches, (w) => (n(), R(L5, {
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
                onClick: vt((g) => o("switch", w.name), ["stop"])
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
        l.value ? (n(), R(W5, {
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
          b(zt, { title: "BRANCHES" }, {
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
}), H5 = /* @__PURE__ */ xe(j5, [["__scopeId", "data-v-a3de96cc"]]);
function kc(e) {
  return "has_conflicts" in e && e.has_conflicts === !0 && Array.isArray(e.workflow_conflicts);
}
const q5 = { class: "remote-url-display" }, K5 = ["title"], J5 = ["title"], Q5 = {
  key: 0,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, Y5 = {
  key: 1,
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, X5 = /* @__PURE__ */ be({
  __name: "RemoteUrlDisplay",
  props: {
    url: {},
    maxLength: { default: 60 }
  },
  setup(e) {
    const s = e, o = k(!1), a = P(() => {
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
    return (r, c) => (n(), i("div", q5, [
      t("span", {
        class: "url-text",
        title: e.url
      }, m(a.value), 9, K5),
      t("button", {
        class: Be(["copy-btn", { copied: o.value }]),
        onClick: l,
        title: o.value ? "Copied!" : "Copy URL"
      }, [
        o.value ? (n(), i("svg", Y5, [...c[1] || (c[1] = [
          t("path", { d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" }, null, -1)
        ])])) : (n(), i("svg", Q5, [...c[0] || (c[0] = [
          t("path", { d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25v-7.5z" }, null, -1),
          t("path", { d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25v-7.5zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-7.5z" }, null, -1)
        ])]))
      ], 10, J5)
    ]));
  }
}), Z5 = /* @__PURE__ */ xe(X5, [["__scopeId", "data-v-7768a58d"]]), e8 = { class: "remote-title" }, t8 = {
  key: 0,
  class: "default-badge"
}, s8 = {
  key: 1,
  class: "sync-badge"
}, o8 = {
  key: 0,
  class: "ahead"
}, n8 = {
  key: 1,
  class: "behind"
}, a8 = {
  key: 1,
  class: "synced"
}, l8 = ["href"], i8 = {
  key: 1,
  class: "remote-url-text"
}, r8 = /* @__PURE__ */ be({
  __name: "RemoteCard",
  props: {
    remote: {},
    syncStatus: {},
    fetchingRemote: {}
  },
  emits: ["fetch", "edit", "remove", "pull", "push"],
  setup(e) {
    const s = e, o = P(() => s.fetchingRemote === s.remote.name), a = P(() => s.remote.is_default), l = P(() => s.syncStatus && s.syncStatus.behind > 0), r = P(() => s.syncStatus && s.syncStatus.ahead > 0), c = P(() => s.remote.push_url !== s.remote.fetch_url), u = P(() => {
      const v = s.remote.fetch_url, f = v.match(/^git@([^:]+):(.+?)(?:\.git)?$/);
      return f ? `https://${f[1]}/${f[2]}` : v.startsWith("https://") || v.startsWith("http://") ? v.replace(/\.git$/, "") : null;
    }), d = P(() => s.remote.fetch_url.replace(/^https?:\/\//, "").replace(/^git@/, "").replace(/\.git$/, "").replace(/:/, "/"));
    return (v, f) => (n(), R(Vt, {
      status: a.value ? "synced" : void 0
    }, Qt({
      icon: h(() => [
        $(m(a.value ? "🔗" : "🌐"), 1)
      ]),
      title: h(() => [
        t("div", e8, [
          t("span", null, m(e.remote.name), 1),
          a.value ? (n(), i("span", t8, "DEFAULT")) : y("", !0),
          e.syncStatus ? (n(), i("span", s8, [
            e.syncStatus.ahead > 0 || e.syncStatus.behind > 0 ? (n(), i(B, { key: 0 }, [
              e.syncStatus.ahead > 0 ? (n(), i("span", o8, "↑" + m(e.syncStatus.ahead), 1)) : y("", !0),
              e.syncStatus.behind > 0 ? (n(), i("span", n8, "↓" + m(e.syncStatus.behind), 1)) : y("", !0)
            ], 64)) : (n(), i("span", a8, "✓ synced"))
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
          onClick: f[0] || (f[0] = vt(() => {
          }, ["stop"]))
        }, m(d.value), 9, l8)) : (n(), i("span", i8, m(d.value), 1))
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
              b(Z5, {
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
}), c8 = /* @__PURE__ */ xe(r8, [["__scopeId", "data-v-8310f3a8"]]), u8 = ["for"], d8 = {
  key: 0,
  class: "base-form-field-required"
}, m8 = { class: "base-form-field-input" }, f8 = {
  key: 1,
  class: "base-form-field-error"
}, v8 = {
  key: 2,
  class: "base-form-field-hint"
}, p8 = /* @__PURE__ */ be({
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
    const s = e, o = P(() => s.id || `field-${Math.random().toString(36).substr(2, 9)}`);
    return (a, l) => (n(), i("div", {
      class: Be(["base-form-field", { "full-width": e.fullWidth }])
    }, [
      e.label ? (n(), i("label", {
        key: 0,
        for: o.value,
        class: "base-form-field-label"
      }, [
        $(m(e.label) + " ", 1),
        e.required ? (n(), i("span", d8, "*")) : y("", !0)
      ], 8, u8)) : y("", !0),
      t("div", m8, [
        ot(a.$slots, "default", {}, void 0)
      ]),
      e.error ? (n(), i("span", f8, m(e.error), 1)) : e.hint ? (n(), i("span", v8, m(e.hint), 1)) : y("", !0)
    ], 2));
  }
}), Ut = /* @__PURE__ */ xe(p8, [["__scopeId", "data-v-9a1cf296"]]), g8 = { class: "remote-form" }, h8 = { class: "form-header" }, y8 = { class: "form-body" }, w8 = {
  key: 0,
  class: "form-error"
}, _8 = { class: "form-actions" }, k8 = /* @__PURE__ */ be({
  __name: "RemoteForm",
  props: {
    mode: { default: "add" },
    remoteName: { default: "" },
    fetchUrl: { default: "" },
    pushUrl: { default: "" }
  },
  emits: ["submit", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k({
      name: o.remoteName,
      fetchUrl: o.fetchUrl,
      pushUrl: o.pushUrl
    }), r = k(!1), c = k(null);
    yt(() => [o.remoteName, o.fetchUrl, o.pushUrl], () => {
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
    return (v, f) => (n(), i("div", g8, [
      t("div", h8, [
        b(ns, null, {
          default: h(() => [
            $(m(e.mode === "add" ? "ADD NEW REMOTE" : "EDIT REMOTE"), 1)
          ]),
          _: 1
        })
      ]),
      t("div", y8, [
        b(Ut, {
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
        b(Ut, {
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
        b(Ut, { label: "Push URL (optional)" }, {
          default: h(() => [
            b(bt, {
              modelValue: l.value.pushUrl,
              "onUpdate:modelValue": f[2] || (f[2] = (p) => l.value.pushUrl = p),
              placeholder: "Leave empty to use fetch URL"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        c.value ? (n(), i("div", w8, m(c.value), 1)) : y("", !0)
      ]),
      t("div", _8, [
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
}), b8 = /* @__PURE__ */ xe(k8, [["__scopeId", "data-v-56021b18"]]), $8 = { class: "conflict-summary-box" }, C8 = { class: "summary-header" }, x8 = { class: "summary-text" }, S8 = { key: 0 }, I8 = {
  key: 1,
  class: "all-resolved"
}, E8 = { class: "summary-progress" }, T8 = { class: "progress-bar" }, M8 = { class: "progress-text" }, P8 = /* @__PURE__ */ be({
  __name: "ConflictSummaryBox",
  props: {
    conflictCount: {},
    resolvedCount: {},
    operationType: {}
  },
  setup(e) {
    const s = e, o = P(
      () => s.conflictCount > 0 ? s.resolvedCount / s.conflictCount * 100 : 0
    );
    return (a, l) => (n(), i("div", $8, [
      t("div", C8, [
        l[0] || (l[0] = t("span", { class: "summary-icon" }, "⚠", -1)),
        t("div", x8, [
          t("strong", null, m(e.conflictCount) + " conflict" + m(e.conflictCount !== 1 ? "s" : "") + " detected", 1),
          e.resolvedCount < e.conflictCount ? (n(), i("p", S8, " Resolve all conflicts before " + m(e.operationType) + "ing ", 1)) : (n(), i("p", I8, " All conflicts resolved - ready to " + m(e.operationType), 1))
        ])
      ]),
      t("div", E8, [
        t("div", T8, [
          t("div", {
            class: "progress-fill",
            style: Rt({ width: o.value + "%" })
          }, null, 4)
        ]),
        t("span", M8, m(e.resolvedCount) + " / " + m(e.conflictCount) + " resolved", 1)
      ])
    ]));
  }
}), R8 = /* @__PURE__ */ xe(P8, [["__scopeId", "data-v-4e9e6cc9"]]), L8 = { class: "modal-header" }, D8 = { class: "modal-title" }, N8 = { class: "modal-body" }, U8 = {
  key: 0,
  class: "error-box"
}, O8 = {
  key: 0,
  class: "error-hint"
}, A8 = {
  key: 1,
  class: "loading-state"
}, z8 = { class: "commit-summary" }, F8 = {
  key: 0,
  class: "commits-section"
}, V8 = { class: "commit-list" }, B8 = { class: "commit-hash" }, W8 = { class: "commit-message" }, G8 = { class: "commit-date" }, j8 = {
  key: 1,
  class: "changes-section"
}, H8 = {
  key: 0,
  class: "change-group",
  open: ""
}, q8 = { class: "change-count" }, K8 = { class: "change-list" }, J8 = {
  key: 0,
  class: "conflict-badge"
}, Q8 = {
  key: 1,
  class: "change-group"
}, Y8 = { class: "change-count" }, X8 = { class: "change-list" }, Z8 = {
  key: 2,
  class: "change-group"
}, e4 = { class: "change-count" }, t4 = { class: "change-list" }, s4 = {
  key: 3,
  class: "strategy-section"
}, o4 = { class: "radio-group" }, n4 = { class: "radio-option" }, a4 = { class: "radio-option" }, l4 = { class: "radio-option" }, i4 = {
  key: 4,
  class: "up-to-date"
}, r4 = { class: "modal-actions" }, Ei = "comfygit.pullModelStrategy", c4 = /* @__PURE__ */ be({
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
    const o = e, a = s, l = k(localStorage.getItem(Ei) || "skip");
    yt(l, (x) => {
      localStorage.setItem(Ei, x);
    });
    const r = P(() => {
      var x;
      return ((x = o.error) == null ? void 0 : x.toLowerCase().includes("unrelated histories")) ?? !1;
    }), c = P(() => {
      if (!o.preview) return 0;
      const x = o.preview.changes.workflows;
      return x.added.length + x.modified.length + x.deleted.length;
    }), u = P(() => o.preview ? o.preview.changes.nodes.to_install.length : 0), d = P(() => {
      var x;
      return c.value > 0 || u.value > 0 || (((x = o.preview) == null ? void 0 : x.changes.models.count) || 0) > 0;
    }), v = P(() => o.preview && kc(o.preview) ? o.preview : null), f = P(() => {
      var x;
      return ((x = v.value) == null ? void 0 : x.workflow_conflicts.length) ?? 0;
    }), p = P(() => {
      var x;
      return ((x = o.conflictResolutions) == null ? void 0 : x.size) ?? 0;
    }), w = P(
      () => f.value > 0 && p.value === f.value
    ), g = P(() => !(!o.preview || o.preview.has_uncommitted_changes || v.value && !w.value));
    function _(x) {
      if (!v.value) return !1;
      const S = x.replace(/\.json$/, "");
      return v.value.workflow_conflicts.some((T) => T.name === S);
    }
    function C(x) {
      const S = o.conflictResolutions ? Array.from(o.conflictResolutions.values()) : void 0;
      a("pull", { modelStrategy: l.value, force: x, resolutions: S });
    }
    return (x, S) => {
      var T, M;
      return n(), R(Lt, { to: "body" }, [
        e.show ? (n(), i("div", {
          key: 0,
          class: "modal-overlay",
          onClick: S[11] || (S[11] = (E) => x.$emit("close"))
        }, [
          t("div", {
            class: "modal-content",
            onClick: S[10] || (S[10] = vt(() => {
            }, ["stop"]))
          }, [
            t("div", L8, [
              t("h3", D8, "PULL FROM " + m(e.remoteName.toUpperCase()), 1),
              t("button", {
                class: "modal-close",
                onClick: S[0] || (S[0] = (E) => x.$emit("close"))
              }, "✕")
            ]),
            t("div", N8, [
              e.error ? (n(), i("div", U8, [
                S[13] || (S[13] = t("span", { class: "error-icon" }, "✕", -1)),
                t("div", null, [
                  S[12] || (S[12] = t("strong", null, "PULL FAILED", -1)),
                  t("p", null, m(e.error), 1),
                  r.value ? (n(), i("p", O8, ' This happens when the remote repository has no common history with your local repository. Try using "Force Pull" to merge despite unrelated histories. ')) : y("", !0)
                ])
              ])) : e.loading ? (n(), i("div", A8, [...S[14] || (S[14] = [
                t("span", { class: "spinner" }, "⟳", -1),
                $(" Loading preview... ", -1)
              ])])) : (T = e.preview) != null && T.has_uncommitted_changes ? (n(), i(B, { key: 2 }, [
                S[15] || (S[15] = t("div", { class: "warning-box" }, [
                  t("span", { class: "warning-icon" }, "⚠"),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "You have uncommitted changes that must be committed or discarded before pulling.")
                  ])
                ], -1)),
                S[16] || (S[16] = t("div", { class: "options-section" }, [
                  t("p", null, [
                    t("strong", null, "Options:")
                  ]),
                  t("ul", null, [
                    t("li", null, "Commit your changes first (recommended)"),
                    t("li", null, "Discard changes and force pull")
                  ])
                ], -1))
              ], 64)) : e.preview ? (n(), i(B, { key: 3 }, [
                t("div", z8, [
                  S[17] || (S[17] = t("span", { class: "icon" }, "📥", -1)),
                  $(" " + m(e.preview.commits_behind) + " commit" + m(e.preview.commits_behind !== 1 ? "s" : "") + " from " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ]),
                e.preview.commits && e.preview.commits.length > 0 ? (n(), i("div", F8, [
                  S[18] || (S[18] = t("h4", { class: "section-title" }, "INCOMING COMMITS", -1)),
                  t("div", V8, [
                    (n(!0), i(B, null, ge(e.preview.commits, (E) => (n(), i("div", {
                      key: E.hash,
                      class: "commit-item"
                    }, [
                      t("span", B8, m(E.short_hash || E.hash.slice(0, 7)), 1),
                      t("span", W8, m(E.message), 1),
                      t("span", G8, m(E.date_relative || E.relative_date), 1)
                    ]))), 128))
                  ])
                ])) : y("", !0),
                d.value ? (n(), i("div", j8, [
                  S[22] || (S[22] = t("h4", { class: "section-title" }, "INCOMING CHANGES", -1)),
                  c.value > 0 ? (n(), i("details", H8, [
                    t("summary", null, [
                      S[19] || (S[19] = t("span", { class: "change-type" }, "Workflows", -1)),
                      t("span", q8, m(c.value) + " changes", 1)
                    ]),
                    t("div", K8, [
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.added, (E) => (n(), i("div", {
                        key: "a-" + E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128)),
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.modified, (E) => (n(), i("div", {
                        key: "m-" + E,
                        class: "change-item modify"
                      }, [
                        $(" ~ " + m(E) + " ", 1),
                        _(E) ? (n(), i("span", J8, "CONFLICT")) : y("", !0)
                      ]))), 128)),
                      (n(!0), i(B, null, ge(e.preview.changes.workflows.deleted, (E) => (n(), i("div", {
                        key: "d-" + E,
                        class: "change-item delete"
                      }, " - " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  u.value > 0 ? (n(), i("details", Q8, [
                    t("summary", null, [
                      S[20] || (S[20] = t("span", { class: "change-type" }, "Nodes", -1)),
                      t("span", Y8, m(u.value) + " to install", 1)
                    ]),
                    t("div", X8, [
                      (n(!0), i(B, null, ge(e.preview.changes.nodes.to_install, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item add"
                      }, " + " + m(E), 1))), 128))
                    ])
                  ])) : y("", !0),
                  e.preview.changes.models.count > 0 ? (n(), i("details", Z8, [
                    t("summary", null, [
                      S[21] || (S[21] = t("span", { class: "change-type" }, "Models", -1)),
                      t("span", e4, m(e.preview.changes.models.count) + " referenced", 1)
                    ]),
                    t("div", t4, [
                      (n(!0), i(B, null, ge(e.preview.changes.models.referenced, (E) => (n(), i("div", {
                        key: E,
                        class: "change-item"
                      }, m(E), 1))), 128))
                    ])
                  ])) : y("", !0)
                ])) : y("", !0),
                v.value ? (n(), R(R8, {
                  key: 2,
                  "conflict-count": f.value,
                  "resolved-count": p.value,
                  "operation-type": "pull"
                }, null, 8, ["conflict-count", "resolved-count"])) : y("", !0),
                e.preview.changes.models.count > 0 ? (n(), i("div", s4, [
                  S[27] || (S[27] = t("h4", { class: "section-title" }, "MODEL DOWNLOAD STRATEGY", -1)),
                  t("div", o4, [
                    t("label", n4, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[1] || (S[1] = (E) => l.value = E),
                        value: "all"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[23] || (S[23] = t("span", null, "Download all models", -1))
                    ]),
                    t("label", a4, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[2] || (S[2] = (E) => l.value = E),
                        value: "required"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[24] || (S[24] = t("span", null, "Download required only", -1))
                    ]),
                    t("label", l4, [
                      Tt(t("input", {
                        type: "radio",
                        "onUpdate:modelValue": S[3] || (S[3] = (E) => l.value = E),
                        value: "skip"
                      }, null, 512), [
                        [Ln, l.value]
                      ]),
                      S[25] || (S[25] = t("span", null, "Skip model downloads", -1)),
                      S[26] || (S[26] = t("span", { class: "default-badge" }, "default", -1))
                    ])
                  ]),
                  S[28] || (S[28] = t("p", { class: "strategy-hint" }, "Models can be downloaded later from MODEL INDEX", -1))
                ])) : y("", !0),
                e.preview.commits_behind === 0 ? (n(), i("div", i4, [
                  S[29] || (S[29] = t("span", { class: "icon" }, "✓", -1)),
                  $(" Already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                ])) : y("", !0)
              ], 64)) : y("", !0)
            ]),
            t("div", r4, [
              b(Me, {
                variant: "secondary",
                onClick: S[4] || (S[4] = (E) => x.$emit("close"))
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
                  onClick: S[5] || (S[5] = (E) => C(!1))
                }, {
                  default: h(() => [...S[31] || (S[31] = [
                    $(" Retry ", -1)
                  ])]),
                  _: 1
                }, 8, ["loading"]),
                b(Me, {
                  variant: "destructive",
                  loading: e.pulling,
                  onClick: S[6] || (S[6] = (E) => C(!0))
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
                onClick: S[7] || (S[7] = (E) => C(!0))
              }, {
                default: h(() => [...S[33] || (S[33] = [
                  $(" Force Pull (Discard Changes) ", -1)
                ])]),
                _: 1
              }, 8, ["loading"])) : e.preview && e.preview.commits_behind > 0 ? (n(), i(B, { key: 2 }, [
                v.value && !w.value ? (n(), R(Me, {
                  key: 0,
                  variant: "primary",
                  onClick: S[8] || (S[8] = (E) => a("openConflictResolution"))
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
                  onClick: S[9] || (S[9] = (E) => C(!1))
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
}), u4 = /* @__PURE__ */ xe(c4, [["__scopeId", "data-v-1d633bba"]]), d4 = { class: "modal-header" }, m4 = { class: "modal-title" }, f4 = { class: "modal-body" }, v4 = {
  key: 0,
  class: "error-box"
}, p4 = {
  key: 1,
  class: "loading-state"
}, g4 = {
  key: 2,
  class: "warning-box"
}, h4 = {
  key: 1,
  class: "commits-section"
}, y4 = { class: "commit-list" }, w4 = { class: "commit-hash" }, _4 = { class: "commit-message" }, k4 = { class: "commit-date" }, b4 = { class: "force-option" }, $4 = { class: "checkbox-option" }, C4 = { class: "commit-summary" }, x4 = { key: 0 }, S4 = { key: 1 }, I4 = {
  key: 0,
  class: "info-box"
}, E4 = {
  key: 2,
  class: "commits-section"
}, T4 = { class: "commit-list" }, M4 = { class: "commit-hash" }, P4 = { class: "commit-message" }, R4 = { class: "commit-date" }, L4 = {
  key: 3,
  class: "up-to-date"
}, D4 = { class: "modal-actions" }, N4 = /* @__PURE__ */ be({
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
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(!1), r = k(!1), c = P(() => {
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
      var _, C, x, S;
      return n(), i(B, null, [
        (n(), R(Lt, { to: "body" }, [
          e.show ? (n(), i("div", {
            key: 0,
            class: "modal-overlay",
            onClick: g[9] || (g[9] = (T) => w.$emit("close"))
          }, [
            t("div", {
              class: "modal-content",
              onClick: g[8] || (g[8] = vt(() => {
              }, ["stop"]))
            }, [
              t("div", d4, [
                t("h3", m4, "PUSH TO " + m(e.remoteName.toUpperCase()), 1),
                t("button", {
                  class: "modal-close",
                  onClick: g[0] || (g[0] = (T) => w.$emit("close"))
                }, "✕")
              ]),
              t("div", f4, [
                e.error ? (n(), i("div", v4, [
                  g[13] || (g[13] = t("span", { class: "error-icon" }, "!", -1)),
                  t("div", null, [
                    g[12] || (g[12] = t("strong", null, "Push failed", -1)),
                    t("p", null, m(e.error), 1)
                  ])
                ])) : y("", !0),
                e.loading ? (n(), i("div", p4, [...g[14] || (g[14] = [
                  t("span", { class: "spinner" }, "⟳", -1),
                  $(" Loading preview... ", -1)
                ])])) : (_ = e.preview) != null && _.has_uncommitted_changes ? (n(), i("div", g4, [...g[15] || (g[15] = [
                  t("span", { class: "warning-icon" }, "!", -1),
                  t("div", null, [
                    t("strong", null, "UNCOMMITTED CHANGES"),
                    t("p", null, "Commit your changes before pushing.")
                  ], -1)
                ])])) : (C = e.preview) != null && C.remote_has_new_commits ? (n(), i(B, { key: 3 }, [
                  g[19] || (g[19] = t("div", { class: "warning-box" }, [
                    t("span", { class: "warning-icon" }, "!"),
                    t("div", null, [
                      t("strong", null, "REMOTE HAS NEW COMMITS"),
                      t("p", null, "The remote has commits you don't have locally. You should pull first to avoid overwriting changes.")
                    ])
                  ], -1)),
                  f.value ? (n(), R(sl, {
                    key: 0,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[1] || (g[1] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", h4, [
                    g[16] || (g[16] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    t("div", y4, [
                      (n(!0), i(B, null, ge(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        t("span", w4, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        t("span", _4, m(T.message), 1),
                        t("span", k4, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : y("", !0),
                  t("div", b4, [
                    t("label", $4, [
                      Tt(t("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": g[2] || (g[2] = (T) => l.value = T)
                      }, null, 512), [
                        [Hn, l.value]
                      ]),
                      g[17] || (g[17] = t("span", null, "Force push (overwrite remote)", -1))
                    ]),
                    g[18] || (g[18] = t("p", { class: "option-hint" }, "Uses --force-with-lease for safety", -1))
                  ])
                ], 64)) : e.preview ? (n(), i(B, { key: 4 }, [
                  t("div", C4, [
                    g[20] || (g[20] = t("span", { class: "icon" }, "📤", -1)),
                    e.preview.is_first_push ? (n(), i("span", x4, " Creating " + m(e.preview.remote) + "/" + m(e.preview.branch) + " with " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : ""), 1)) : (n(), i("span", S4, " Pushing " + m(e.preview.commits_ahead) + " commit" + m(e.preview.commits_ahead !== 1 ? "s" : "") + " to " + m(e.preview.remote) + "/" + m(e.preview.branch), 1))
                  ]),
                  e.preview.is_first_push ? (n(), i("div", I4, [...g[21] || (g[21] = [
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
                  ])])) : y("", !0),
                  f.value ? (n(), R(sl, {
                    key: 1,
                    warnings: c.value,
                    message: "Missing provenance can prevent another machine, or ComfyGit Cloud, from rebuilding this environment exactly.",
                    onReview: g[3] || (g[3] = (T) => r.value = !0)
                  }, null, 8, ["warnings"])) : y("", !0),
                  e.preview.commits_ahead > 0 ? (n(), i("div", E4, [
                    g[22] || (g[22] = t("h4", { class: "section-title" }, "OUTGOING COMMITS", -1)),
                    t("div", T4, [
                      (n(!0), i(B, null, ge(e.preview.commits, (T) => (n(), i("div", {
                        key: T.hash,
                        class: "commit-item"
                      }, [
                        t("span", M4, m(T.short_hash || T.hash.slice(0, 7)), 1),
                        t("span", P4, m(T.message), 1),
                        t("span", R4, m(T.date_relative || T.relative_date), 1)
                      ]))), 128))
                    ])
                  ])) : (n(), i("div", L4, [
                    g[23] || (g[23] = t("span", { class: "icon" }, "✓", -1)),
                    $(" Nothing to push - already up to date with " + m(e.preview.remote) + "/" + m(e.preview.branch), 1)
                  ]))
                ], 64)) : y("", !0)
              ]),
              t("div", D4, [
                b(Me, {
                  variant: "secondary",
                  onClick: g[4] || (g[4] = (T) => w.$emit("close"))
                }, {
                  default: h(() => [...g[24] || (g[24] = [
                    $(" Cancel ", -1)
                  ])]),
                  _: 1
                }),
                (x = e.preview) != null && x.remote_has_new_commits ? (n(), i(B, { key: 0 }, [
                  b(Me, {
                    variant: "secondary",
                    onClick: g[5] || (g[5] = (T) => w.$emit("pull-first"))
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
                    onClick: g[6] || (g[6] = (T) => p(!0))
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
                  onClick: g[7] || (g[7] = (T) => p(!1))
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
        r.value && ((S = e.preview) != null && S.warnings) ? (n(), R(gc, {
          key: 0,
          warnings: e.preview.warnings,
          onClose: g[10] || (g[10] = (T) => r.value = !1),
          onRevalidate: g[11] || (g[11] = (T) => w.$emit("revalidate"))
        }, null, 8, ["warnings"])) : y("", !0)
      ], 64);
    };
  }
}), U4 = /* @__PURE__ */ xe(N4, [["__scopeId", "data-v-7748bf33"]]), O4 = { class: "resolution-choice-group" }, A4 = ["disabled"], z4 = ["disabled"], F4 = /* @__PURE__ */ be({
  __name: "ResolutionChoiceGroup",
  props: {
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return (s, o) => (n(), i("div", O4, [
      t("button", {
        class: Be(["choice-btn", "mine", { selected: e.modelValue === "take_base" }]),
        onClick: o[0] || (o[0] = (a) => s.$emit("update:modelValue", "take_base")),
        disabled: e.disabled
      }, [...o[2] || (o[2] = [
        t("span", { class: "choice-icon" }, "◀", -1),
        t("span", { class: "choice-label" }, "Keep Mine", -1)
      ])], 10, A4),
      t("button", {
        class: Be(["choice-btn", "theirs", { selected: e.modelValue === "take_target" }]),
        onClick: o[1] || (o[1] = (a) => s.$emit("update:modelValue", "take_target")),
        disabled: e.disabled
      }, [...o[3] || (o[3] = [
        t("span", { class: "choice-label" }, "Keep Theirs", -1),
        t("span", { class: "choice-icon" }, "▶", -1)
      ])], 10, z4)
    ]));
  }
}), V4 = /* @__PURE__ */ xe(F4, [["__scopeId", "data-v-985715ed"]]), B4 = { class: "conflict-header" }, W4 = { class: "conflict-info" }, G4 = { class: "workflow-name" }, j4 = { class: "conflict-description" }, H4 = {
  key: 0,
  class: "resolved-badge"
}, q4 = { class: "resolved-text" }, K4 = { class: "conflict-hashes" }, J4 = { class: "hash-item" }, Q4 = { class: "hash-item" }, Y4 = { class: "conflict-actions" }, X4 = /* @__PURE__ */ be({
  __name: "WorkflowConflictItem",
  props: {
    conflict: {},
    resolution: {},
    disabled: { type: Boolean }
  },
  emits: ["resolve"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = k(o.resolution);
    yt(() => o.resolution, (d) => {
      l.value = d;
    }), yt(l, (d) => {
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
        t("div", B4, [
          v[2] || (v[2] = t("span", { class: "conflict-icon" }, "⚠", -1)),
          t("div", W4, [
            t("code", G4, m(e.conflict.name) + ".json", 1),
            t("div", j4, m(c.value), 1)
          ]),
          r.value ? (n(), i("div", H4, [
            v[1] || (v[1] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", q4, m(u.value), 1)
          ])) : y("", !0)
        ]),
        t("div", K4, [
          t("span", J4, [
            v[3] || (v[3] = $("Your: ", -1)),
            t("code", null, m(((f = e.conflict.base_hash) == null ? void 0 : f.slice(0, 8)) || "n/a"), 1)
          ]),
          t("span", Q4, [
            v[4] || (v[4] = $("Theirs: ", -1)),
            t("code", null, m(((p = e.conflict.target_hash) == null ? void 0 : p.slice(0, 8)) || "n/a"), 1)
          ])
        ]),
        t("div", Y4, [
          b(V4, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
            disabled: e.disabled
          }, null, 8, ["modelValue", "disabled"])
        ])
      ], 2);
    };
  }
}), Z4 = /* @__PURE__ */ xe(X4, [["__scopeId", "data-v-506d3bbf"]]), eI = { class: "resolution-content" }, tI = {
  key: 0,
  class: "error-box"
}, sI = { class: "resolution-header" }, oI = { class: "header-stats" }, nI = { class: "stat" }, aI = { class: "stat-value" }, lI = { class: "stat resolved" }, iI = { class: "stat-value" }, rI = {
  key: 0,
  class: "stat pending"
}, cI = { class: "stat-value" }, uI = { class: "conflicts-list" }, dI = {
  key: 1,
  class: "all-resolved-message"
}, mI = /* @__PURE__ */ be({
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
    const o = e, a = s, l = P(() => o.resolutions.size), r = P(() => o.workflowConflicts.length - l.value), c = P(() => l.value === o.workflowConflicts.length), u = P(
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
    return (w, g) => (n(), R(It, {
      title: `Resolve Workflow Conflicts: ${e.operationType === "pull" ? "Pull" : "Merge"}`,
      size: "lg",
      "fixed-height": !0,
      onClose: f
    }, {
      body: h(() => [
        t("div", eI, [
          e.error ? (n(), i("div", tI, [
            g[1] || (g[1] = t("span", { class: "error-icon" }, "✕", -1)),
            t("div", null, [
              g[0] || (g[0] = t("strong", null, "Validation Failed", -1)),
              t("p", null, m(e.error), 1)
            ])
          ])) : y("", !0),
          t("div", sI, [
            t("div", oI, [
              t("div", nI, [
                t("span", aI, m(e.workflowConflicts.length), 1),
                g[2] || (g[2] = t("span", { class: "stat-label" }, "total conflicts", -1))
              ]),
              t("div", lI, [
                t("span", iI, m(l.value), 1),
                g[3] || (g[3] = t("span", { class: "stat-label" }, "resolved", -1))
              ]),
              r.value > 0 ? (n(), i("div", rI, [
                t("span", cI, m(r.value), 1),
                g[4] || (g[4] = t("span", { class: "stat-label" }, "pending", -1))
              ])) : y("", !0)
            ]),
            g[5] || (g[5] = t("p", { class: "header-hint" }, " Choose which version to keep for each conflicting workflow. ", -1))
          ]),
          t("div", uI, [
            (n(!0), i(B, null, ge(e.workflowConflicts, (_) => (n(), R(Z4, {
              key: _.name,
              conflict: _,
              resolution: d(_.name),
              onResolve: (C) => v(_.name, C)
            }, null, 8, ["conflict", "resolution", "onResolve"]))), 128))
          ]),
          c.value ? (n(), i("div", dI, [
            g[6] || (g[6] = t("span", { class: "resolved-icon" }, "✓", -1)),
            t("span", null, 'All conflicts resolved! Click "' + m(u.value) + '" to continue.', 1)
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
        g[8] || (g[8] = t("div", { class: "footer-spacer" }, null, -1)),
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
}), fI = /* @__PURE__ */ xe(mI, [["__scopeId", "data-v-c58d150d"]]), vI = { class: "node-conflict-item" }, pI = { class: "node-header" }, gI = { class: "node-name" }, hI = { class: "node-id" }, yI = { class: "version-comparison" }, wI = { class: "version yours" }, _I = { class: "version theirs" }, kI = { class: "chosen-version" }, bI = { class: "chosen" }, $I = { class: "chosen-reason" }, CI = { class: "affected-workflows" }, xI = { class: "wf-source" }, SI = { class: "wf-version" }, II = /* @__PURE__ */ be({
  __name: "NodeConflictItem",
  props: {
    conflict: {}
  },
  setup(e) {
    return (s, o) => (n(), i("div", vI, [
      t("div", pI, [
        t("code", gI, m(e.conflict.node_name), 1),
        t("span", hI, "(" + m(e.conflict.node_id) + ")", 1)
      ]),
      t("div", yI, [
        t("div", wI, [
          o[0] || (o[0] = t("span", { class: "label" }, "Your version:", -1)),
          t("code", null, m(e.conflict.base_version), 1)
        ]),
        o[2] || (o[2] = t("span", { class: "arrow" }, "→", -1)),
        t("div", _I, [
          o[1] || (o[1] = t("span", { class: "label" }, "Their version:", -1)),
          t("code", null, m(e.conflict.target_version), 1)
        ])
      ]),
      t("div", kI, [
        o[3] || (o[3] = t("span", { class: "label" }, "Will install:", -1)),
        t("code", bI, m(e.conflict.chosen_version), 1),
        t("span", $I, m(e.conflict.chosen_reason), 1)
      ]),
      t("details", CI, [
        t("summary", null, " Affected workflows (" + m(e.conflict.affected_workflows.length) + ") ", 1),
        t("ul", null, [
          (n(!0), i(B, null, ge(e.conflict.affected_workflows, (a) => (n(), i("li", {
            key: a.name
          }, [
            t("code", null, m(a.name), 1),
            t("span", xI, "(" + m(a.source === "base" ? "yours" : "theirs") + ")", 1),
            t("span", SI, "needs v" + m(a.required_version), 1)
          ]))), 128))
        ])
      ])
    ]));
  }
}), EI = /* @__PURE__ */ xe(II, [["__scopeId", "data-v-8b626725"]]), TI = { class: "validation-content" }, MI = {
  key: 0,
  class: "compatible-message"
}, PI = { class: "conflicts-list" }, RI = {
  key: 2,
  class: "warnings-section"
}, LI = /* @__PURE__ */ be({
  __name: "ValidationResultsModal",
  props: {
    validation: {},
    operationType: {},
    executing: { type: Boolean }
  },
  emits: ["proceed", "goBack", "cancel"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = P(() => o.validation.is_compatible ? o.operationType === "pull" ? "Pull" : "Merge" : o.operationType === "pull" ? "Pull Anyway" : "Merge Anyway");
    return (r, c) => (n(), R(It, {
      title: "Compatibility Check",
      size: "lg",
      onClose: c[3] || (c[3] = (u) => a("cancel"))
    }, {
      body: h(() => [
        t("div", TI, [
          e.validation.is_compatible && e.validation.node_conflicts.length === 0 ? (n(), i("div", MI, [
            c[5] || (c[5] = t("span", { class: "icon" }, "✓", -1)),
            t("div", null, [
              c[4] || (c[4] = t("strong", null, "All clear!", -1)),
              t("p", null, "Your workflow choices are compatible. Ready to " + m(e.operationType) + ".", 1)
            ])
          ])) : e.validation.node_conflicts.length > 0 ? (n(), i(B, { key: 1 }, [
            c[6] || (c[6] = t("div", { class: "warning-header" }, [
              t("span", { class: "icon" }, "⚠"),
              t("div", null, [
                t("strong", null, "Node Version Differences"),
                t("p", null, " Your workflow choices require different versions of some nodes. The versions shown below will be installed. ")
              ])
            ], -1)),
            t("div", PI, [
              (n(!0), i(B, null, ge(e.validation.node_conflicts, (u) => (n(), R(EI, {
                key: u.node_id,
                conflict: u
              }, null, 8, ["conflict"]))), 128))
            ]),
            c[7] || (c[7] = t("div", { class: "info-box" }, [
              t("strong", null, "What happens if you proceed?"),
              t("p", null, " The highlighted versions will be installed. Workflows built with different versions may need minor adjustments. ")
            ], -1))
          ], 64)) : y("", !0),
          e.validation.warnings.length > 0 ? (n(), i("div", RI, [
            c[8] || (c[8] = t("h4", null, "Warnings", -1)),
            t("ul", null, [
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
        c[11] || (c[11] = t("div", { class: "footer-spacer" }, null, -1)),
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
}), DI = /* @__PURE__ */ xe(LI, [["__scopeId", "data-v-fefd26ed"]]), NI = {
  key: 0,
  class: "embedded-toolbar"
}, UI = { class: "embedded-toolbar-search" }, OI = /* @__PURE__ */ be({
  __name: "RemotesSection",
  props: {
    embedded: { type: Boolean }
  },
  emits: ["toast"],
  setup(e, { emit: s }) {
    const o = s, {
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
    } = ct(), _ = k([]), C = k({}), x = k(!1), S = k(null), T = k(""), M = k(!1), E = k(null), D = k(!1), z = k("add"), j = k({
      name: "",
      fetchUrl: "",
      pushUrl: ""
    }), L = P(() => {
      if (!T.value.trim()) return _.value;
      const Ve = T.value.toLowerCase();
      return _.value.filter(
        (Ue) => Ue.name.toLowerCase().includes(Ve) || Ue.fetch_url.toLowerCase().includes(Ve) || Ue.push_url.toLowerCase().includes(Ve)
      );
    });
    async function q() {
      x.value = !0, S.value = null;
      try {
        const Ve = await a();
        _.value = Ve.remotes, await Promise.all(
          Ve.remotes.map(async (Ue) => {
            const G = await d(Ue.name);
            G && (C.value[Ue.name] = G);
          })
        );
      } catch (Ve) {
        S.value = Ve instanceof Error ? Ve.message : "Failed to load remotes";
      } finally {
        x.value = !1;
      }
    }
    function ce() {
      z.value = "add", j.value = { name: "", fetchUrl: "", pushUrl: "" }, D.value = !0;
    }
    function ne(Ve) {
      const Ue = _.value.find((G) => G.name === Ve);
      Ue && (z.value = "edit", j.value = {
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
      D.value = !1, j.value = { name: "", fetchUrl: "", pushUrl: "" };
    }
    async function Z(Ve) {
      E.value = Ve;
      try {
        await u(Ve);
        const Ue = await d(Ve);
        Ue && (C.value[Ve] = Ue), o("toast", `✓ Fetched from ${Ve}`, "success");
      } catch (Ue) {
        o("toast", Ue instanceof Error ? Ue.message : "Fetch failed", "error");
      } finally {
        E.value = null;
      }
    }
    async function W(Ve) {
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
    ), me = k(!1), Pe = k(null), ye = k(!1), ee = k(null), Q = k(null), $e = k(!1), te = k(null), oe = k(null), Re = k(/* @__PURE__ */ new Map()), ve = k(null), le = k(null), I = P(() => te.value && kc(te.value) ? te.value : null);
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
        const G = await f(Ue, Ve);
        if (G.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ke.value = "pull_preview";
          return;
        }
        We(), ke.value = "idle", o("toast", `✓ Pulled from ${Ue}`, "success"), await q();
      } catch (G) {
        oe.value = G instanceof Error ? G.message : "Pull failed", ke.value = "pull_preview";
      }
    }
    function Ce() {
      I.value && (ke.value = "resolving", le.value = null);
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
        const Ue = Array.from(Re.value.values()), G = await f(Ve, {
          modelStrategy: localStorage.getItem("comfygit.pullModelStrategy") || "skip",
          force: !1,
          resolutions: Ue
        });
        if (G.rolled_back) {
          oe.value = `Pull failed and was rolled back: ${G.error || "Unknown error"}`, ke.value = "pull_preview";
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
      Q.value = Ve, me.value = !0, $e.value = !0, Pe.value = null, ee.value = null;
      try {
        Pe.value = await p(Ve);
      } catch (Ue) {
        ee.value = Ue instanceof Error ? Ue.message : "Failed to load push preview";
      } finally {
        $e.value = !1;
      }
    }
    async function J() {
      if (Q.value) {
        $e.value = !0, ee.value = null;
        try {
          Pe.value = await p(Q.value);
        } catch (Ve) {
          ee.value = Ve instanceof Error ? Ve.message : "Failed to refresh push preview";
        } finally {
          $e.value = !1;
        }
      }
    }
    function qe() {
      me.value = !1, Pe.value = null, ee.value = null, Q.value = null;
    }
    async function Ie(Ve) {
      var G;
      if (!Q.value) return;
      ye.value = !0;
      const Ue = Q.value;
      ee.value = null;
      try {
        await w(Ue, Ve), qe(), o("toast", `✓ Pushed to ${Ue}`, "success"), await q();
      } catch (ue) {
        const he = ue instanceof Error ? ue.message : "Push failed";
        ee.value = he, ue instanceof tc && ue.status === 409 && ((G = ue.data) != null && G.needs_force) && Pe.value ? Pe.value = {
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
      b(At, null, Qt({
        content: h(() => [
          x.value ? (n(), R($s, {
            key: 0,
            message: "Loading remotes..."
          })) : S.value ? (n(), R(Cs, {
            key: 1,
            message: S.value,
            retry: !0,
            onRetry: q
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            e.embedded && !D.value ? (n(), i("div", NI, [
              t("div", UI, [
                b(ro, {
                  modelValue: T.value,
                  "onUpdate:modelValue": Ue[2] || (Ue[2] = (G) => T.value = G),
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
            D.value ? (n(), R(b8, {
              key: 1,
              mode: z.value,
              "remote-name": j.value.name,
              "fetch-url": j.value.fetchUrl,
              "push-url": j.value.pushUrl,
              onSubmit: Y,
              onCancel: we
            }, null, 8, ["mode", "remote-name", "fetch-url", "push-url"])) : y("", !0),
            L.value.length && !D.value ? (n(), R(St, {
              key: 2,
              title: "REMOTES",
              count: L.value.length
            }, {
              default: h(() => [
                (n(!0), i(B, null, ge(L.value, (G) => (n(), R(c8, {
                  key: G.name,
                  remote: G,
                  "sync-status": C.value[G.name],
                  "fetching-remote": E.value,
                  onFetch: Z,
                  onEdit: ne,
                  onRemove: W,
                  onPull: A,
                  onPush: pe
                }, null, 8, ["remote", "sync-status", "fetching-remote"]))), 128))
              ]),
              _: 1
            }, 8, ["count"])) : y("", !0),
            !L.value.length && !D.value ? (n(), R(rs, {
              key: 3,
              icon: "🌐",
              message: T.value ? `No remotes match '${T.value}'` : "No remotes configured."
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
            b(zt, {
              title: "GIT REMOTES",
              "show-info": !0,
              onInfoClick: Ue[0] || (Ue[0] = (G) => M.value = !0)
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
              modelValue: T.value,
              "onUpdate:modelValue": Ue[1] || (Ue[1] = (G) => T.value = G),
              placeholder: "🔍 Search remotes..."
            }, null, 8, ["modelValue"]))
          ]),
          key: "1"
        }
      ]), 1024),
      b(Yt, {
        show: M.value,
        title: "About Git Remotes",
        onClose: Ue[3] || (Ue[3] = (G) => M.value = !1)
      }, {
        content: h(() => [...Ue[7] || (Ue[7] = [
          t("p", null, " Git remotes are named references to repositories on other servers. They allow you to fetch changes from and push changes to remote repositories. ", -1),
          t("p", null, [
            $(" The "),
            t("strong", null, '"origin"'),
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
      b(u4, {
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
      b(U4, {
        show: me.value,
        "remote-name": Q.value || "",
        preview: Pe.value,
        loading: $e.value,
        pushing: ye.value,
        error: ee.value,
        onClose: qe,
        onPush: Ie,
        onPullFirst: Xe,
        onRevalidate: J
      }, null, 8, ["show", "remote-name", "preview", "loading", "pushing", "error"]),
      fe.value && I.value ? (n(), R(fI, {
        key: 0,
        "workflow-conflicts": I.value.workflow_conflicts,
        resolutions: Re.value,
        "operation-type": "pull",
        validating: ke.value === "validating",
        error: le.value,
        onClose: ze,
        onResolve: Se,
        onApply: Fe
      }, null, 8, ["workflow-conflicts", "resolutions", "validating", "error"])) : y("", !0),
      U.value && ve.value ? (n(), R(DI, {
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
}), AI = /* @__PURE__ */ xe(OI, [["__scopeId", "data-v-a6651a66"]]), zI = /* @__PURE__ */ be({
  __name: "VersionControlSection",
  props: {
    commits: {},
    currentRef: {},
    branches: {},
    current: {},
    initialTab: {}
  },
  emits: ["select", "checkout", "switch", "create", "delete", "toast"],
  setup(e, { emit: s }) {
    const o = e, a = s, l = [
      { id: "remotes", label: "Remotes" },
      { id: "history", label: "History" },
      { id: "branches", label: "Branches" }
    ], r = k(o.initialTab ?? "remotes");
    return yt(() => o.initialTab, (c) => {
      c && (r.value = c);
    }), (c, u) => (n(), R(At, null, {
      header: h(() => [
        b(zt, { title: "VERSION CONTROL" })
      ]),
      search: h(() => [
        b(Rl, {
          modelValue: r.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => r.value = d),
          tabs: l
        }, null, 8, ["modelValue"])
      ]),
      content: h(() => [
        r.value === "history" ? (n(), R($5, {
          key: 0,
          embedded: "",
          commits: e.commits,
          "current-ref": e.currentRef,
          onSelect: u[1] || (u[1] = (d) => a("select", d)),
          onCheckout: u[2] || (u[2] = (d) => a("checkout", d))
        }, null, 8, ["commits", "current-ref"])) : r.value === "branches" ? (n(), R(H5, {
          key: 1,
          embedded: "",
          branches: e.branches,
          current: e.current,
          onSwitch: u[3] || (u[3] = (d) => a("switch", d)),
          onCreate: u[4] || (u[4] = (d) => a("create", d)),
          onDelete: u[5] || (u[5] = (d) => a("delete", d))
        }, null, 8, ["branches", "current"])) : (n(), R(AI, {
          key: 2,
          embedded: "",
          onToast: u[6] || (u[6] = (d, v) => a("toast", d, v))
        }))
      ]),
      _: 1
    }));
  }
}), FI = { class: "text-viewer-wrapper" }, VI = ["disabled", "title"], BI = { class: "text-content" }, WI = /* @__PURE__ */ be({
  __name: "TextViewer",
  props: {
    content: {}
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle");
    async function l() {
      if (s.content)
        try {
          await El(s.content), a.value = "copied", setTimeout(() => {
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
    return (u, d) => (n(), i("div", FI, [
      t("div", {
        ref_key: "textOutputElement",
        ref: o,
        class: "text-output",
        tabindex: "0",
        onKeydown: r,
        onCopy: c
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: l,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy text"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, VI),
        t("pre", BI, m(e.content), 1)
      ], 544)
    ]));
  }
}), GI = /* @__PURE__ */ xe(WI, [["__scopeId", "data-v-85a537ba"]]), jI = {
  key: 1,
  class: "manifest-viewer-shell"
}, HI = { class: "manifest-path" }, qI = /* @__PURE__ */ be({
  __name: "ManifestSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentManifest: s } = ct(), o = k(!1), a = k(null), l = k(!1), r = k({
      path: "",
      exists: !1,
      content: ""
    });
    async function c() {
      o.value = !0, a.value = null;
      try {
        r.value = await s();
      } catch (u) {
        a.value = u instanceof Error ? u.message : "Failed to load manifest";
      } finally {
        o.value = !1;
      }
    }
    return at(c), (u, d) => (n(), i(B, null, [
      b(At, null, Qt({
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
            })) : (n(), i("div", jI, [
              b(GI, {
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
            b(zt, {
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
          d[3] || (d[3] = t("p", null, [
            $(" This view shows the live "),
            t("strong", null, "pyproject.toml"),
            $(" from the current environment's "),
            t("strong", null, ".cec"),
            $(" directory. ")
          ], -1)),
          d[4] || (d[4] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " It is read-only and intended for quick inspection and debugging without leaving the ComfyGit panel. ", -1)),
          d[5] || (d[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, " Path: ", -1)),
          t("div", HI, [
            t("code", null, m(r.value.path || "unknown"), 1)
          ]),
          d[6] || (d[6] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, null, -1))
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
}), KI = /* @__PURE__ */ xe(qI, [["__scopeId", "data-v-814a8fdd"]]), JI = { class: "log-viewer-wrapper" }, QI = ["disabled", "title"], YI = /* @__PURE__ */ be({
  __name: "LogViewer",
  props: {
    logs: {},
    rawFormat: { type: Boolean }
  },
  setup(e) {
    const s = e, o = k(null), a = k("idle"), l = P(() => s.logs.map((v) => ({
      text: s.rawFormat || !v.timestamp ? v.message : `${v.timestamp} - ${v.name} - ${v.level} - ${v.func}:${v.line} - ${v.message}`,
      level: v.level
    })));
    async function r() {
      var f;
      await Pt();
      const v = (f = o.value) == null ? void 0 : f.closest(".panel-layout-content");
      v && (v.scrollTop = v.scrollHeight);
    }
    at(r), yt(() => s.logs, r);
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
    return (v, f) => (n(), i("div", JI, [
      t("div", {
        ref_key: "logOutputElement",
        ref: o,
        class: "log-output",
        onKeydown: u,
        onCopy: d,
        tabindex: "0"
      }, [
        t("button", {
          class: "copy-overlay-btn",
          onClick: c,
          disabled: a.value !== "idle",
          title: a.value === "copied" ? "Copied!" : "Copy all logs"
        }, m(a.value === "copied" ? "Copied!" : "Copy"), 9, QI),
        (n(!0), i(B, null, ge(l.value, (p, w) => (n(), i("div", {
          key: w,
          class: Be(`log-line log-level-${p.level.toLowerCase()}`)
        }, m(p.text), 3))), 128))
      ], 544)
    ]));
  }
}), bc = /* @__PURE__ */ xe(YI, [["__scopeId", "data-v-5aaf1b88"]]), XI = /* @__PURE__ */ be({
  __name: "DebugEnvSection",
  props: {
    embedded: { type: Boolean }
  },
  setup(e) {
    const { getEnvironmentLogs: s, getStatus: o, getEnvironmentLogPath: a, openFile: l } = ct(), r = k([]), c = k(!1), u = k(null), d = k(!1), v = k("production"), f = k(null), p = k(!1);
    async function w() {
      c.value = !0, u.value = null;
      try {
        r.value = await s(void 0, 500);
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
        const C = await a();
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
    }), (C, x) => (n(), i(B, null, [
      b(At, null, Qt({
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
            })) : (n(), R(bc, {
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
            b(zt, {
              title: "DEBUG (ENVIRONMENT LOGS)",
              "show-info": !0,
              onInfoClick: x[0] || (x[0] = (S) => d.value = !0)
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
        onClose: x[2] || (x[2] = (S) => d.value = !1)
      }, {
        content: h(() => [
          t("p", null, [
            x[3] || (x[3] = $(" Environment logs show operations, warnings, and errors for the current environment. These logs are specific to ", -1)),
            t("strong", null, m(v.value), 1),
            x[4] || (x[4] = $(" and help debug workflow execution, model loading, and node installation issues. ", -1))
          ]),
          x[5] || (x[5] = t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or important notices"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1))
        ]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: x[1] || (x[1] = (S) => d.value = !1)
          }, {
            default: h(() => [...x[6] || (x[6] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ti = /* @__PURE__ */ be({
  __name: "WorkspaceDebugSection",
  props: {
    embedded: { type: Boolean },
    initialTab: {}
  },
  setup(e) {
    const {
      getWorkspaceLogs: s,
      getWorkspaceLogPath: o,
      getOrchestratorLogs: a,
      getOrchestratorLogPath: l,
      openFile: r
    } = ct(), c = e, u = k(c.initialTab ?? "workspace"), d = k([]), v = k(!1), f = k(null), p = k(!1), w = k(null), g = k(null), _ = k(!1), C = P(() => u.value === "workspace" ? w.value : g.value);
    async function x() {
      v.value = !0, f.value = null;
      try {
        u.value === "workspace" ? d.value = await s(void 0, 500) : d.value = await a(void 0, 500);
      } catch (M) {
        f.value = M instanceof Error ? M.message : `Failed to load ${u.value} logs`;
      } finally {
        v.value = !1;
      }
    }
    async function S() {
      try {
        const [M, E] = await Promise.all([
          o(),
          l()
        ]);
        M.exists && (w.value = M.path), E.exists && (g.value = E.path);
      } catch {
      }
    }
    async function T() {
      if (C.value) {
        _.value = !0;
        try {
          await r(C.value);
        } catch (M) {
          console.error("Failed to open log file:", M);
        } finally {
          _.value = !1;
        }
      }
    }
    return yt(u, () => {
      x();
    }), yt(() => c.initialTab, (M) => {
      M && (u.value = M);
    }), at(() => {
      x(), S();
    }), (M, E) => (n(), i(B, null, [
      b(At, null, Qt({
        content: h(() => [
          v.value ? (n(), R($s, {
            key: 0,
            message: `Loading ${u.value} logs...`
          }, null, 8, ["message"])) : f.value ? (n(), R(Cs, {
            key: 1,
            message: f.value,
            retry: !0,
            onRetry: x
          }, null, 8, ["message"])) : (n(), i(B, { key: 2 }, [
            d.value.length === 0 ? (n(), R(rs, {
              key: 0,
              icon: "📝",
              message: `No ${u.value} logs available`
            }, null, 8, ["message"])) : (n(), R(bc, {
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
            b(zt, {
              title: "DEBUG (LOGS)",
              "show-info": !0,
              onInfoClick: E[0] || (E[0] = (D) => p.value = !0)
            }, {
              actions: h(() => [
                b(Me, {
                  variant: "secondary",
                  size: "sm",
                  onClick: T,
                  disabled: !C.value || _.value,
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
                  onClick: x,
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
            b(Rl, {
              modelValue: u.value,
              "onUpdate:modelValue": E[1] || (E[1] = (D) => u.value = D),
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
        onClose: E[3] || (E[3] = (D) => p.value = !1)
      }, {
        content: h(() => [...E[4] || (E[4] = [
          t("p", null, [
            t("strong", null, "Workspace Logs:"),
            $(" System-level events for the entire ComfyGit workspace, including operations that affect multiple environments. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Orchestrator Logs:"),
            $(" Process management events including ComfyUI startup, restarts, environment switches, and any errors during handoff. ")
          ], -1),
          t("p", { style: { "margin-top": "var(--cg-space-2)" } }, [
            t("strong", null, "Log Levels:"),
            t("br"),
            t("strong", null, "ERROR:"),
            $(" Critical failures requiring attention"),
            t("br"),
            t("strong", null, "WARNING:"),
            $(" Potential issues or deprecated features"),
            t("br"),
            t("strong", null, "INFO:"),
            $(" General operational information"),
            t("br"),
            t("strong", null, "DEBUG:"),
            $(" Detailed debugging information ")
          ], -1)
        ])]),
        actions: h(() => [
          b(Me, {
            variant: "primary",
            onClick: E[2] || (E[2] = (D) => p.value = !1)
          }, {
            default: h(() => [...E[5] || (E[5] = [
              $(" Got it ", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ZI = /* @__PURE__ */ be({
  __name: "DiagnosticsSection",
  props: {
    initialTab: {}
  },
  setup(e) {
    const s = e, o = [
      { id: "env", label: "Environment" },
      { id: "workspace", label: "Workspace" },
      { id: "orchestrator", label: "Orchestrator" }
    ], a = k(s.initialTab ?? "manifest"), l = k(
      s.initialTab && s.initialTab !== "manifest" ? s.initialTab : "env"
    ), r = k(!1), c = P(() => a.value === "manifest" ? "MANIFEST" : "LOGGING"), u = P(() => a.value === "manifest" ? "About Manifest" : "About Logging");
    return yt(() => s.initialTab, (d) => {
      d && (a.value = d, d !== "manifest" && (l.value = d));
    }), yt(l, (d) => {
      a.value !== "manifest" && (a.value = d);
    }), (d, v) => (n(), i(B, null, [
      b(At, null, Qt({
        header: h(() => [
          b(zt, {
            title: c.value,
            "show-info": !0,
            onInfoClick: v[0] || (v[0] = (f) => r.value = !0)
          }, null, 8, ["title"])
        ]),
        content: h(() => [
          a.value === "manifest" ? (n(), R(KI, {
            key: 0,
            embedded: ""
          })) : l.value === "env" ? (n(), R(XI, {
            key: 1,
            embedded: ""
          })) : l.value === "workspace" ? (n(), R(Ti, {
            key: 2,
            embedded: "",
            "initial-tab": "workspace"
          })) : (n(), R(Ti, {
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
            b(Rl, {
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
            v[4] || (v[4] = t("p", null, [
              t("strong", null, "Manifest"),
              $(" shows the live "),
              t("strong", null, "pyproject.toml"),
              $(" from the current environment's "),
              t("strong", null, ".cec"),
              $(" directory. ")
            ], -1)),
            v[5] || (v[5] = t("p", null, " Use it to inspect the environment state ComfyGit is tracking, including workflows, models, nodes, and workflow execution contracts. ", -1)),
            v[6] || (v[6] = t("p", null, " The manifest is read-only here. Change environment state through the manager actions or CLI, then commit the resulting manifest changes. ", -1))
          ], 64)) : (n(), i(B, { key: 1 }, [
            v[7] || (v[7] = t("p", null, [
              t("strong", null, "Logging"),
              $(" groups read-only logs for the current environment, workspace, and orchestrator. ")
            ], -1)),
            v[8] || (v[8] = t("p", null, [
              t("strong", null, "Environment"),
              $(" logs help debug workflow execution, model resolution, node installation, and other environment-local behavior. ")
            ], -1)),
            v[9] || (v[9] = t("p", null, [
              t("strong", null, "Workspace"),
              $(" logs show workspace-wide events that affect more than one environment. ")
            ], -1)),
            v[10] || (v[10] = t("p", null, [
              t("strong", null, "Orchestrator"),
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
}), e6 = { class: "header-info" }, t6 = { class: "commit-hash" }, s6 = {
  key: 0,
  class: "commit-refs"
}, o6 = { class: "commit-message" }, n6 = { class: "commit-date" }, a6 = {
  key: 0,
  class: "loading"
}, l6 = {
  key: 1,
  class: "changes-section"
}, i6 = { class: "stats-row" }, r6 = { class: "stat" }, c6 = { class: "stat insertions" }, u6 = { class: "stat deletions" }, d6 = {
  key: 0,
  class: "change-group"
}, m6 = {
  key: 1,
  class: "change-group"
}, f6 = {
  key: 0,
  class: "version"
}, v6 = {
  key: 2,
  class: "change-group"
}, p6 = { class: "change-item" }, g6 = /* @__PURE__ */ be({
  __name: "CommitDetailModal",
  props: {
    commit: {}
  },
  emits: ["close", "checkout", "createBranch"],
  setup(e) {
    const s = e, { getCommitDetail: o } = ct(), a = k(null), l = k(!0), r = P(() => {
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
        a.value = await o(s.commit.hash);
      } finally {
        l.value = !1;
      }
    }), (u, d) => (n(), R(It, {
      size: "md",
      "show-close-button": !1,
      onClose: d[3] || (d[3] = (v) => u.$emit("close"))
    }, {
      header: h(() => {
        var v, f, p, w;
        return [
          t("div", e6, [
            d[4] || (d[4] = t("h3", { class: "header-title" }, "COMMIT DETAILS", -1)),
            t("span", t6, m(((v = a.value) == null ? void 0 : v.short_hash) || e.commit.short_hash || ((f = e.commit.hash) == null ? void 0 : f.slice(0, 7))), 1),
            (w = (p = a.value) == null ? void 0 : p.refs) != null && w.length ? (n(), i("span", s6, [
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
      body: h(() => {
        var v, f;
        return [
          t("div", o6, m(((v = a.value) == null ? void 0 : v.message) || e.commit.message), 1),
          t("div", n6, m(((f = a.value) == null ? void 0 : f.date_relative) || e.commit.date_relative || e.commit.relative_date), 1),
          l.value ? (n(), i("div", a6, "Loading details...")) : a.value ? (n(), i("div", l6, [
            t("div", i6, [
              t("span", r6, m(a.value.stats.files_changed) + " files", 1),
              t("span", c6, "+" + m(a.value.stats.insertions), 1),
              t("span", u6, "-" + m(a.value.stats.deletions), 1)
            ]),
            r.value ? (n(), i("div", d6, [
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
                d[7] || (d[7] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.workflows.modified, (p) => (n(), i("div", {
                key: "mod-" + p,
                class: "change-item modified"
              }, [
                d[8] || (d[8] = t("span", { class: "change-icon" }, "~", -1)),
                t("span", null, m(p), 1)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.workflows.deleted, (p) => (n(), i("div", {
                key: "del-" + p,
                class: "change-item deleted"
              }, [
                d[9] || (d[9] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p), 1)
              ]))), 128))
            ])) : y("", !0),
            c.value ? (n(), i("div", m6, [
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
                d[11] || (d[11] = t("span", { class: "change-icon" }, "+", -1)),
                t("span", null, m(p.name), 1),
                p.version ? (n(), i("span", f6, "(" + m(p.version) + ")", 1)) : y("", !0)
              ]))), 128)),
              (n(!0), i(B, null, ge(a.value.changes.nodes.removed, (p) => (n(), i("div", {
                key: "rem-" + p.name,
                class: "change-item deleted"
              }, [
                d[12] || (d[12] = t("span", { class: "change-icon" }, "-", -1)),
                t("span", null, m(p.name), 1)
              ]))), 128))
            ])) : y("", !0),
            a.value.changes.models.resolved > 0 ? (n(), i("div", v6, [
              b(ao, { variant: "section" }, {
                default: h(() => [...d[13] || (d[13] = [
                  $("MODELS", -1)
                ])]),
                _: 1
              }),
              t("div", p6, [
                d[14] || (d[14] = t("span", { class: "change-icon" }, "●", -1)),
                t("span", null, m(a.value.changes.models.resolved) + " model(s) resolved", 1)
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
}), h6 = /* @__PURE__ */ xe(g6, [["__scopeId", "data-v-d256ff6d"]]), y6 = { class: "popover-header" }, w6 = { class: "popover-body" }, _6 = {
  key: 0,
  class: "changes-summary"
}, k6 = {
  key: 0,
  class: "change-item"
}, b6 = {
  key: 1,
  class: "change-item"
}, $6 = {
  key: 2,
  class: "change-item"
}, C6 = {
  key: 3,
  class: "change-item"
}, x6 = {
  key: 4,
  class: "change-item"
}, S6 = {
  key: 5,
  class: "change-item"
}, I6 = {
  key: 1,
  class: "no-changes"
}, E6 = {
  key: 2,
  class: "loading"
}, T6 = {
  key: 3,
  class: "issues-error"
}, M6 = { class: "error-header" }, P6 = { class: "error-title" }, R6 = { class: "issues-list" }, L6 = { class: "workflow-state" }, D6 = { class: "message-section" }, N6 = { class: "popover-footer" }, U6 = {
  key: 1,
  class: "commit-popover"
}, O6 = { class: "popover-header" }, A6 = { class: "popover-body" }, z6 = {
  key: 0,
  class: "changes-summary"
}, F6 = {
  key: 0,
  class: "change-item"
}, V6 = {
  key: 1,
  class: "change-item"
}, B6 = {
  key: 2,
  class: "change-item"
}, W6 = {
  key: 3,
  class: "change-item"
}, G6 = {
  key: 4,
  class: "change-item"
}, j6 = {
  key: 5,
  class: "change-item"
}, H6 = {
  key: 1,
  class: "no-changes"
}, q6 = {
  key: 2,
  class: "loading"
}, K6 = {
  key: 3,
  class: "issues-error"
}, J6 = { class: "error-header" }, Q6 = { class: "error-title" }, Y6 = { class: "issues-list" }, X6 = { class: "workflow-state" }, Z6 = { class: "message-section" }, eE = { class: "popover-footer" }, tE = /* @__PURE__ */ be({
  __name: "CommitPopover",
  props: {
    status: {},
    asModal: { type: Boolean, default: !1 }
  },
  emits: ["close", "committed"],
  setup(e, { emit: s }) {
    const o = e, a = s, { commit: l } = ct(), r = k(""), c = k(!1), u = k(!1), d = P(() => {
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
      var _, C, x, S;
      if (!(p.value && !u.value) && !(!d.value || !r.value.trim() || c.value)) {
        c.value = !0;
        try {
          const T = await l(r.value.trim(), u.value);
          if (T.status === "success") {
            const M = `Committed: ${((_ = T.summary) == null ? void 0 : _.new) || 0} new, ${((C = T.summary) == null ? void 0 : C.modified) || 0} modified, ${((x = T.summary) == null ? void 0 : x.deleted) || 0} deleted`;
            a("committed", { success: !0, message: M });
          } else if (T.status === "no_changes")
            a("committed", { success: !1, message: "No changes to commit" });
          else if (T.status === "blocked") {
            const M = ((S = T.issues) == null ? void 0 : S.map((E) => `${E.name}: ${E.issue}`).join("; ")) || "Unknown issues";
            a("committed", { success: !1, message: `Commit blocked - ${M}. Enable "Allow issues" to force.` });
          } else
            a("committed", { success: !1, message: T.message || "Commit failed" });
        } catch (T) {
          a("committed", { success: !1, message: T instanceof Error ? T.message : "Commit failed" });
        } finally {
          c.value = !1;
        }
      }
    }
    return (_, C) => e.asModal ? (n(), R(Lt, {
      key: 0,
      to: "body"
    }, [
      t("div", {
        class: "modal-overlay",
        onClick: C[5] || (C[5] = (x) => a("close"))
      }, [
        t("div", {
          class: "commit-popover modal",
          onClick: C[4] || (C[4] = vt(() => {
          }, ["stop"]))
        }, [
          t("div", y6, [
            C[11] || (C[11] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
            t("button", {
              class: "close-btn",
              onClick: C[0] || (C[0] = (x) => a("close"))
            }, [...C[10] || (C[10] = [
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
          t("div", w6, [
            e.status && d.value ? (n(), i("div", _6, [
              e.status.workflows.new.length ? (n(), i("div", k6, [
                C[12] || (C[12] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
              ])) : y("", !0),
              e.status.workflows.modified.length ? (n(), i("div", b6, [
                C[13] || (C[13] = t("span", { class: "change-icon modified" }, "~", -1)),
                t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
              ])) : y("", !0),
              e.status.workflows.deleted.length ? (n(), i("div", $6, [
                C[14] || (C[14] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_added.length ? (n(), i("div", C6, [
                C[15] || (C[15] = t("span", { class: "change-icon new" }, "+", -1)),
                t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
              ])) : y("", !0),
              e.status.git_changes.nodes_removed.length ? (n(), i("div", x6, [
                C[16] || (C[16] = t("span", { class: "change-icon deleted" }, "-", -1)),
                t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
              ])) : y("", !0),
              v.value ? y("", !0) : (n(), i("div", S6, [...C[17] || (C[17] = [
                t("span", { class: "change-icon modified" }, "~", -1),
                t("span", null, "Configuration updated", -1)
              ])]))
            ])) : e.status ? (n(), i("div", I6, " No changes to commit ")) : (n(), i("div", E6, " Loading... ")),
            p.value ? (n(), i("div", T6, [
              t("div", M6, [
                C[18] || (C[18] = t("span", { class: "error-icon" }, "⚠", -1)),
                t("span", P6, m(f.value.length) + " workflow(s) have issues", 1)
              ]),
              t("div", R6, [
                (n(!0), i(B, null, ge(f.value, (x) => (n(), i("div", {
                  key: x.name,
                  class: "issue-item"
                }, [
                  t("strong", null, m(x.name), 1),
                  t("span", L6, "(" + m(x.sync_state) + ")", 1),
                  $(": " + m(x.issue_summary), 1)
                ]))), 128))
              ]),
              b(Jn, {
                modelValue: u.value,
                "onUpdate:modelValue": C[1] || (C[1] = (x) => u.value = x),
                class: "allow-issues-toggle"
              }, {
                default: h(() => [...C[19] || (C[19] = [
                  $(" Commit anyway (ignore issues) ", -1)
                ])]),
                _: 1
              }, 8, ["modelValue"])
            ])) : y("", !0),
            t("div", D6, [
              b(xo, {
                modelValue: r.value,
                "onUpdate:modelValue": C[2] || (C[2] = (x) => r.value = x),
                placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
                disabled: !d.value || c.value || w.value,
                rows: 3,
                "submit-on-enter": !0,
                onCtrlEnter: g,
                onSubmit: g
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          t("div", N6, [
            b(De, {
              variant: "secondary",
              onClick: C[3] || (C[3] = (x) => a("close"))
            }, {
              default: h(() => [...C[20] || (C[20] = [
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
    ])) : (n(), i("div", U6, [
      t("div", O6, [
        C[22] || (C[22] = t("h3", { class: "popover-title" }, "COMMIT CHANGES", -1)),
        t("button", {
          class: "close-btn",
          onClick: C[6] || (C[6] = (x) => a("close"))
        }, [...C[21] || (C[21] = [
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
      t("div", A6, [
        e.status && d.value ? (n(), i("div", z6, [
          e.status.workflows.new.length ? (n(), i("div", F6, [
            C[23] || (C[23] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.workflows.new.length) + " new workflow(s)", 1)
          ])) : y("", !0),
          e.status.workflows.modified.length ? (n(), i("div", V6, [
            C[24] || (C[24] = t("span", { class: "change-icon modified" }, "~", -1)),
            t("span", null, m(e.status.workflows.modified.length) + " modified", 1)
          ])) : y("", !0),
          e.status.workflows.deleted.length ? (n(), i("div", B6, [
            C[25] || (C[25] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.workflows.deleted.length) + " deleted", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_added.length ? (n(), i("div", W6, [
            C[26] || (C[26] = t("span", { class: "change-icon new" }, "+", -1)),
            t("span", null, m(e.status.git_changes.nodes_added.length) + " node(s) added", 1)
          ])) : y("", !0),
          e.status.git_changes.nodes_removed.length ? (n(), i("div", G6, [
            C[27] || (C[27] = t("span", { class: "change-icon deleted" }, "-", -1)),
            t("span", null, m(e.status.git_changes.nodes_removed.length) + " node(s) removed", 1)
          ])) : y("", !0),
          v.value ? y("", !0) : (n(), i("div", j6, [...C[28] || (C[28] = [
            t("span", { class: "change-icon modified" }, "~", -1),
            t("span", null, "Configuration updated", -1)
          ])]))
        ])) : e.status ? (n(), i("div", H6, " No changes to commit ")) : (n(), i("div", q6, " Loading... ")),
        p.value ? (n(), i("div", K6, [
          t("div", J6, [
            C[29] || (C[29] = t("span", { class: "error-icon" }, "⚠", -1)),
            t("span", Q6, m(f.value.length) + " workflow(s) have issues", 1)
          ]),
          t("div", Y6, [
            (n(!0), i(B, null, ge(f.value, (x) => (n(), i("div", {
              key: x.name,
              class: "issue-item"
            }, [
              t("strong", null, m(x.name), 1),
              t("span", X6, "(" + m(x.sync_state) + ")", 1),
              $(": " + m(x.issue_summary), 1)
            ]))), 128))
          ]),
          b(Jn, {
            modelValue: u.value,
            "onUpdate:modelValue": C[7] || (C[7] = (x) => u.value = x),
            class: "allow-issues-toggle"
          }, {
            default: h(() => [...C[30] || (C[30] = [
              $(" Commit anyway (ignore issues) ", -1)
            ])]),
            _: 1
          }, 8, ["modelValue"])
        ])) : y("", !0),
        t("div", Z6, [
          b(xo, {
            modelValue: r.value,
            "onUpdate:modelValue": C[8] || (C[8] = (x) => r.value = x),
            placeholder: w.value ? "Enable 'Allow issues' to commit" : d.value ? "Describe your changes..." : "No changes",
            disabled: !d.value || c.value || w.value,
            rows: 3,
            "submit-on-enter": !0,
            onCtrlEnter: g,
            onSubmit: g
          }, null, 8, ["modelValue", "placeholder", "disabled"])
        ])
      ]),
      t("div", eE, [
        b(De, {
          variant: "secondary",
          onClick: C[9] || (C[9] = (x) => a("close"))
        }, {
          default: h(() => [...C[31] || (C[31] = [
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
}), $c = /* @__PURE__ */ xe(tE, [["__scopeId", "data-v-5f897631"]]), sE = { class: "modal-header" }, oE = { class: "modal-body" }, nE = { class: "switch-message" }, aE = { class: "switch-details" }, lE = { class: "modal-actions" }, iE = /* @__PURE__ */ be({
  __name: "ConfirmSwitchModal",
  props: {
    show: { type: Boolean },
    fromEnvironment: {},
    toEnvironment: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Lt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          t("div", sE, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "CONFIRM ENVIRONMENT SWITCH", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", oE, [
            t("p", nE, [
              o[6] || (o[6] = $(" Switch from ", -1)),
              t("strong", null, m(e.fromEnvironment), 1),
              o[7] || (o[7] = $(" to ", -1)),
              t("strong", null, m(e.toEnvironment), 1),
              o[8] || (o[8] = $("? ", -1))
            ]),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This will restart ComfyUI")
            ], -1)),
            t("p", aE, ' Your current work will be preserved. You can switch back to "' + m(e.fromEnvironment) + '" anytime. ', 1),
            o[10] || (o[10] = t("p", { class: "switch-eta" }, " Estimated downtime: ~30 seconds ", -1))
          ]),
          t("div", lE, [
            b(Me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[11] || (o[11] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
            }, {
              default: h(() => [...o[12] || (o[12] = [
                $(" Switch ", -1)
              ])]),
              _: 1
            })
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), rE = /* @__PURE__ */ xe(iE, [["__scopeId", "data-v-e9c5253e"]]), cE = {
  key: 0,
  class: "modal-overlay"
}, uE = { class: "modal-content" }, dE = { class: "modal-body" }, mE = { class: "progress-info" }, fE = { class: "progress-percentage" }, vE = { class: "progress-state" }, pE = { class: "switch-steps" }, gE = { class: "step-icon" }, hE = { class: "step-label" }, yE = /* @__PURE__ */ be({
  __name: "SwitchProgressModal",
  props: {
    show: { type: Boolean },
    state: {},
    progress: {},
    message: {}
  },
  setup(e) {
    const s = e, o = P(() => {
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
    }), a = P(() => s.state === "complete" ? "success" : s.state === "critical_failure" || s.state === "rolled_back" ? "error" : "default"), l = P(() => {
      const r = [
        { state: "preparing", label: "Stopping current environment", icon: "●" },
        { state: "syncing", label: "Preparing target environment", icon: "●" },
        { state: "starting", label: "Starting new environment", icon: "●" },
        { state: "validating", label: "Waiting for server to be ready", icon: "●" }
      ], c = r.findIndex((u) => u.state === s.state);
      return r.map((u, d) => {
        let v = "pending", f = "○";
        return d < c ? (v = "completed", f = "✓") : d === c && (v = "active", f = "⟳"), {
          ...u,
          status: v,
          icon: f
        };
      });
    });
    return (r, c) => (n(), R(Lt, { to: "body" }, [
      e.show ? (n(), i("div", cE, [
        t("div", uE, [
          c[1] || (c[1] = t("div", { class: "modal-header" }, [
            t("h3", { class: "modal-title" }, "SWITCHING ENVIRONMENTS...")
          ], -1)),
          t("div", dE, [
            b(pc, {
              progress: e.progress,
              variant: a.value
            }, null, 8, ["progress", "variant"]),
            t("div", mE, [
              t("div", fE, m(e.progress) + "%", 1),
              t("div", vE, m(o.value), 1)
            ]),
            t("div", pE, [
              (n(!0), i(B, null, ge(l.value, (u) => (n(), i("div", {
                key: u.state,
                class: Be(["switch-step", u.status])
              }, [
                t("span", gE, m(u.icon), 1),
                t("span", hE, m(u.label), 1)
              ], 2))), 128))
            ]),
            c[0] || (c[0] = t("p", { class: "progress-warning" }, " Please wait, do not close this window. ", -1))
          ])
        ])
      ])) : y("", !0)
    ]));
  }
}), wE = /* @__PURE__ */ xe(yE, [["__scopeId", "data-v-768a5078"]]), _E = { class: "modal-header" }, kE = { class: "modal-body" }, bE = {
  key: 0,
  class: "node-section"
}, $E = { class: "node-list" }, CE = {
  key: 1,
  class: "node-section"
}, xE = { class: "node-list" }, SE = { class: "modal-actions" }, IE = /* @__PURE__ */ be({
  __name: "SyncEnvironmentModal",
  props: {
    show: { type: Boolean },
    mismatchDetails: {}
  },
  emits: ["close", "confirm"],
  setup(e) {
    return (s, o) => (n(), R(Lt, { to: "body" }, [
      e.show ? (n(), i("div", {
        key: 0,
        class: "modal-overlay",
        onClick: o[4] || (o[4] = (a) => s.$emit("close"))
      }, [
        t("div", {
          class: "modal-content",
          onClick: o[3] || (o[3] = vt(() => {
          }, ["stop"]))
        }, [
          t("div", _E, [
            o[5] || (o[5] = t("h3", { class: "modal-title" }, "SYNC ENVIRONMENT", -1)),
            t("button", {
              class: "modal-close",
              onClick: o[0] || (o[0] = (a) => s.$emit("close"))
            }, "✕")
          ]),
          t("div", kE, [
            o[8] || (o[8] = t("p", { class: "sync-message" }, " Fix environment state mismatch: ", -1)),
            e.mismatchDetails.missing_nodes.length ? (n(), i("div", bE, [
              o[6] || (o[6] = t("h4", { class: "section-title" }, "Missing (will be installed):", -1)),
              t("div", $E, [
                (n(!0), i(B, null, ge(e.mismatchDetails.missing_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item add"
                }, " + " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            e.mismatchDetails.extra_nodes.length ? (n(), i("div", CE, [
              o[7] || (o[7] = t("h4", { class: "section-title" }, "Extra (will be removed):", -1)),
              t("div", xE, [
                (n(!0), i(B, null, ge(e.mismatchDetails.extra_nodes, (a) => (n(), i("div", {
                  key: a,
                  class: "node-item remove"
                }, " - " + m(a), 1))), 128))
              ])
            ])) : y("", !0),
            o[9] || (o[9] = t("div", { class: "warning-box" }, [
              t("span", { class: "warning-icon" }, "⚠"),
              t("span", null, "This may take several minutes")
            ], -1))
          ]),
          t("div", SE, [
            b(Me, {
              variant: "secondary",
              onClick: o[1] || (o[1] = (a) => s.$emit("close"))
            }, {
              default: h(() => [...o[10] || (o[10] = [
                $(" Cancel ", -1)
              ])]),
              _: 1
            }),
            b(Me, {
              variant: "primary",
              onClick: o[2] || (o[2] = (a) => s.$emit("confirm"))
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
}), EE = /* @__PURE__ */ xe(IE, [["__scopeId", "data-v-7cad7518"]]), TE = [
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
], In = "v0.0.24", ME = "Akatz", PE = { class: "social-buttons" }, RE = ["title", "aria-label", "onClick"], LE = {
  width: "14",
  height: "14",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, DE = ["d"], NE = ["title", "aria-label", "onClick"], UE = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "currentColor"
}, OE = ["d"], AE = /* @__PURE__ */ be({
  __name: "SocialButtons",
  setup(e) {
    function s(o) {
      window.open(o, "_blank", "noopener,noreferrer");
    }
    return (o, a) => (n(), i("div", PE, [
      (n(!0), i(B, null, ge(st(TE), (l) => (n(), i(B, {
        key: l.id
      }, [
        l.label ? (n(), i("button", {
          key: 0,
          class: "icon-btn sponsor-btn",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          $(m(l.label) + " ", 1),
          (n(), i("svg", LE, [
            t("path", {
              d: l.iconPath
            }, null, 8, DE)
          ]))
        ], 8, RE)) : (n(), i("button", {
          key: 1,
          class: "icon-btn social-link",
          title: l.title,
          "aria-label": l.ariaLabel,
          onClick: (r) => s(l.url)
        }, [
          (n(), i("svg", UE, [
            t("path", {
              d: l.iconPath
            }, null, 8, OE)
          ]))
        ], 8, NE))
      ], 64))), 128))
    ]));
  }
}), Cc = /* @__PURE__ */ xe(AE, [["__scopeId", "data-v-4f846342"]]), zE = { class: "footer-info" }, FE = ["title"], VE = {
  key: 0,
  class: "dev-badge"
}, BE = { class: "made-by" }, WE = /* @__PURE__ */ be({
  __name: "FooterInfo",
  setup(e) {
    const { getConfig: s } = ct(), o = k(null), a = k(null), l = k(null), r = P(() => o.value === "development"), c = P(() => {
      var d;
      if (!r.value) return In;
      const u = [a.value, (d = l.value) == null ? void 0 : d.slice(0, 7)].filter(Boolean).join(" @ ");
      return u ? `${In} (${u})` : `${In} (development)`;
    });
    return at(async () => {
      try {
        const u = await s();
        o.value = u.manager_source ?? null, a.value = u.manager_branch ?? null, l.value = u.manager_commit ?? null;
      } catch {
        o.value = null;
      }
    }), (u, d) => (n(), i("div", zE, [
      t("span", {
        class: "version",
        title: c.value
      }, [
        $(m(st(In)) + " ", 1),
        r.value ? (n(), i("span", VE, "dev")) : y("", !0)
      ], 8, FE),
      t("span", BE, [
        d[0] || (d[0] = $(" made with ", -1)),
        d[1] || (d[1] = t("svg", {
          class: "heart-icon",
          width: "10",
          height: "10",
          viewBox: "0 0 16 16",
          fill: "currentColor"
        }, [
          t("path", { d: "M8 14s-5.5-3.5-5.5-7A3.5 3.5 0 0 1 6 3.5c1.1 0 2 .5 2 .5s.9-.5 2-.5a3.5 3.5 0 0 1 3.5 3.5c0 3.5-5.5 7-5.5 7z" })
        ], -1)),
        $(" by " + m(st(ME)), 1)
      ])
    ]));
  }
}), xc = /* @__PURE__ */ xe(WE, [["__scopeId", "data-v-4fa265b3"]]), GE = /* @__PURE__ */ be({
  __name: "WorkspaceSettingsModal",
  props: {
    workspacePath: {}
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const o = k(null);
    async function a() {
      var r;
      await ((r = o.value) == null ? void 0 : r.saveSettings());
    }
    function l() {
      console.log("[ComfyGit] Settings saved from modal");
    }
    return (r, c) => (n(), R(It, {
      title: "WORKSPACE SETTINGS",
      size: "lg",
      "show-close-button": !0,
      onClose: c[1] || (c[1] = (u) => r.$emit("close"))
    }, {
      body: h(() => [
        b(dc, {
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
}), jE = /* @__PURE__ */ xe(GE, [["__scopeId", "data-v-fac00ae7"]]), HE = { class: "header-actions" }, qE = {
  key: 0,
  class: "wizard-step"
}, KE = { class: "form-field" }, JE = ["placeholder"], QE = {
  key: 0,
  class: "form-error"
}, YE = { class: "form-field form-field--checkbox" }, XE = { class: "form-checkbox" }, ZE = {
  key: 0,
  class: "form-field"
}, eT = ["placeholder"], tT = {
  key: 0,
  class: "form-info"
}, sT = {
  key: 1,
  class: "form-suggestion"
}, oT = {
  key: 2,
  class: "form-error"
}, nT = {
  key: 3,
  class: "form-info"
}, aT = {
  key: 1,
  class: "wizard-step"
}, lT = {
  key: 0,
  class: "progress-check-loading"
}, iT = {
  key: 0,
  class: "cli-warning"
}, rT = { class: "cli-warning-header" }, cT = {
  key: 1,
  class: "env-landing"
}, uT = { class: "env-list" }, dT = ["value"], mT = { class: "env-name" }, fT = {
  key: 2,
  class: "env-create"
}, vT = { class: "form-field" }, pT = { class: "form-field" }, gT = ["value"], hT = { class: "form-field" }, yT = ["disabled"], wT = ["value"], _T = { class: "form-field" }, kT = ["value"], bT = { class: "form-field form-field--checkbox" }, $T = { class: "form-checkbox" }, CT = {
  key: 0,
  class: "form-error"
}, xT = {
  key: 1,
  class: "env-creating"
}, ST = { class: "creating-intro" }, IT = {
  key: 3,
  class: "env-import"
}, ET = { class: "wizard-footer" }, TT = { class: "wizard-footer-actions" }, po = 10, MT = 600 * 1e3, Mi = 1800 * 1e3, PT = /* @__PURE__ */ be({
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
      getCreateProgress: d,
      getImportProgress: v,
      getComfyUIReleases: f
    } = ct(), p = k(o.initialStep || 1), w = k(null), g = k("landing"), _ = k(!1), C = k(!1), x = k(!1), S = k(!1), T = k(null), M = k(o.initialStep === 2), E = k(o.defaultPath), D = k(!!o.detectedModelsDir), z = k(o.detectedModelsDir || ""), j = k(null), L = k(null), q = k(null), ce = k(null), ne = k("my-new-env"), Y = k(fc), we = k("latest"), Z = k(vc), W = k(!0), K = k(null), ke = k(null), se = k([{ tag_name: "latest", name: "Latest", published_at: "" }]), fe = k(!1), U = k(!1), me = k(!1), Pe = k({ progress: 0, message: "" }), ye = k({ progress: 0, message: "" }), ee = [
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
      const pe = (Ie = E.value) == null ? void 0 : Ie.trim(), J = !j.value, qe = !D.value || !L.value && ((Xe = z.value) == null ? void 0 : Xe.trim());
      return pe && J && qe;
    }), ve = P(() => {
      var pe;
      return (pe = ne.value) == null ? void 0 : pe.trim();
    }), le = P(() => !!(p.value === 2 || ke.value || o.setupState === "empty_workspace" || o.setupState === "unmanaged")), I = P(() => ke.value || o.workspacePath || null);
    async function A() {
      var pe;
      if (j.value = null, !!((pe = E.value) != null && pe.trim()))
        try {
          const J = await c({ path: E.value, type: "workspace" });
          J.valid || (j.value = J.error || "Invalid path");
        } catch (J) {
          j.value = J instanceof Error ? J.message : "Validation failed";
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
      if (j.value = null, L.value = null, await A(), (pe = j.value) != null && pe.includes("already exists")) {
        j.value = null, ke.value = ((J = E.value) == null ? void 0 : J.trim()) || o.defaultPath, p.value = 2, Se();
        return;
      }
      if (!j.value && !(D.value && ((qe = z.value) != null && qe.trim()) && (await re(), L.value))) {
        U.value = !0;
        try {
          await l({
            workspace_path: ((Ie = E.value) == null ? void 0 : Ie.trim()) || o.defaultPath,
            models_directory: D.value && ((Xe = z.value) == null ? void 0 : Xe.trim()) || null
          }), Q.value = 0, $e.value = Date.now();
          const Ve = setInterval(async () => {
            var Ue;
            if ($e.value && Date.now() - $e.value > MT) {
              clearInterval(Ve), U.value = !1, j.value = "Workspace creation timed out. Please try again or check server logs.";
              return;
            }
            try {
              const G = await r();
              if (Q.value = 0, G.state === "idle" && U.value) {
                clearInterval(Ve), U.value = !1, j.value = "Workspace creation was interrupted. Please try again.";
                return;
              }
              Pe.value = { progress: G.progress, message: G.message }, G.state === "complete" ? (clearInterval(Ve), U.value = !1, ke.value = ((Ue = E.value) == null ? void 0 : Ue.trim()) || o.defaultPath, p.value = 2, Se()) : G.state === "error" && (clearInterval(Ve), U.value = !1, j.value = G.error || "Workspace creation failed");
            } catch (G) {
              Q.value++, console.warn(`Polling failure ${Q.value}/${po}:`, G), Q.value >= po && (clearInterval(Ve), U.value = !1, j.value = "Lost connection to server. Please refresh the page and try again.");
            }
          }, 500);
        } catch (Ve) {
          U.value = !1, j.value = Ve instanceof Error ? Ve.message : "Failed to create workspace";
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
          torch_backend: Z.value,
          switch_after: W.value,
          workspace_path: ke.value || void 0
          // Pass workspace path for first-time setup
        };
        if ((await u(pe)).status === "started") {
          te.value = 0, oe.value = Date.now();
          const qe = setInterval(async () => {
            if (oe.value && Date.now() - oe.value > Mi) {
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
                W.value ? a("complete", Xe, ke.value) : (g.value = "landing", a("environment-created-no-switch", Xe));
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
      C.value = !1, J ? a("complete", pe, ke.value) : (a("environment-created-no-switch", pe), g.value = "landing");
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
        console.log("[ComfyGit] Import progress check:", pe.state, pe), pe.state === "importing" && (console.log("[ComfyGit] Resuming in-progress import:", pe.environment_name), T.value = {
          message: pe.message || "Importing...",
          phase: pe.phase || "",
          progress: pe.progress ?? 0,
          environmentName: pe.environment_name || ""
        }, S.value = !0, g.value = "import", C.value = !0);
      } catch (pe) {
        console.log("[ComfyGit] Import progress check failed:", pe);
      }
    }
    async function We() {
      te.value = 0, oe.value = Date.now();
      let pe = null;
      const J = async () => {
        if (oe.value && Date.now() - oe.value > Mi)
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
      b(It, {
        size: "lg",
        "show-close-button": !1,
        "close-on-overlay-click": !1,
        onClose: J[15] || (J[15] = (qe) => pe.$emit("close"))
      }, {
        header: h(() => [
          J[20] || (J[20] = t("h3", { class: "base-modal-title" }, "WELCOME TO COMFYGIT", -1)),
          t("div", HE, [
            b(Cc),
            J[19] || (J[19] = t("span", { class: "header-divider" }, null, -1)),
            le.value ? (n(), i("button", {
              key: 0,
              class: "icon-btn settings-btn",
              title: "Workspace Settings",
              onClick: J[0] || (J[0] = (qe) => _.value = !0)
            }, [...J[17] || (J[17] = [
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
            ])])) : y("", !0),
            t("button", {
              class: "icon-btn",
              onClick: J[1] || (J[1] = (qe) => pe.$emit("close")),
              title: "Close"
            }, [...J[18] || (J[18] = [
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
        body: h(() => {
          var qe;
          return [
            p.value === 1 ? (n(), i("div", qE, [
              J[24] || (J[24] = t("p", { class: "wizard-intro" }, " Let's set up your ComfyGit workspace. This is where your managed environments, workflows, and model index will be stored. ", -1)),
              t("div", KE, [
                J[21] || (J[21] = t("label", { class: "form-label" }, "Workspace Path", -1)),
                Tt(t("input", {
                  "onUpdate:modelValue": J[2] || (J[2] = (Ie) => E.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.defaultPath
                }, null, 8, JE), [
                  [en, E.value]
                ]),
                j.value ? (n(), i("p", QE, m(j.value), 1)) : y("", !0)
              ]),
              t("div", YE, [
                t("label", XE, [
                  Tt(t("input", {
                    type: "checkbox",
                    "onUpdate:modelValue": J[3] || (J[3] = (Ie) => D.value = Ie)
                  }, null, 512), [
                    [Hn, D.value]
                  ]),
                  J[22] || (J[22] = t("span", null, "I have existing ComfyUI models", -1))
                ])
              ]),
              D.value ? (n(), i("div", ZE, [
                J[23] || (J[23] = t("label", { class: "form-label" }, "Models Directory", -1)),
                Tt(t("input", {
                  "onUpdate:modelValue": J[4] || (J[4] = (Ie) => z.value = Ie),
                  type: "text",
                  class: "form-input",
                  placeholder: e.detectedModelsDir || "/path/to/models"
                }, null, 8, eT), [
                  [en, z.value]
                ]),
                e.detectedModelsDir && !z.value ? (n(), i("p", tT, " Detected: " + m(e.detectedModelsDir), 1)) : y("", !0),
                q.value ? (n(), i("p", sT, " Did you mean: " + m(q.value), 1)) : y("", !0),
                L.value ? (n(), i("p", oT, m(L.value), 1)) : y("", !0),
                ce.value !== null && !L.value ? (n(), i("p", nT, " Found " + m(ce.value) + " model files ", 1)) : y("", !0)
              ])) : y("", !0),
              U.value ? (n(), R(Kn, {
                key: 1,
                progress: Pe.value.progress,
                message: Pe.value.message
              }, null, 8, ["progress", "message"])) : y("", !0)
            ])) : y("", !0),
            p.value === 2 ? (n(), i("div", aT, [
              M.value ? (n(), i("div", lT, [...J[25] || (J[25] = [
                t("div", { class: "loading-spinner" }, null, -1),
                t("div", { class: "loading-text" }, "Checking for in-progress operations...", -1)
              ])])) : (n(), i(B, { key: 1 }, [
                !o.cliInstalled && !x.value ? (n(), i("div", iT, [
                  t("div", rT, [
                    J[27] || (J[27] = t("span", { class: "cli-warning-icon" }, "!", -1)),
                    J[28] || (J[28] = t("span", { class: "cli-warning-title" }, "ComfyGit CLI Not Installed", -1)),
                    t("button", {
                      class: "cli-warning-close",
                      onClick: J[5] || (J[5] = (Ie) => x.value = !0),
                      title: "Dismiss"
                    }, [...J[26] || (J[26] = [
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
                  J[29] || (J[29] = t("p", { class: "cli-warning-text" }, " To start managed environments from the command line, you'll need the ComfyGit CLI. This is required to restart ComfyUI in managed mode after switching environments. ", -1)),
                  J[30] || (J[30] = t("div", { class: "cli-warning-commands" }, [
                    t("code", null, "pipx install comfygit"),
                    t("span", { class: "cli-warning-or" }, "or"),
                    t("code", null, "uv tool install comfygit")
                  ], -1))
                ])) : y("", !0),
                g.value === "landing" ? (n(), i("div", cT, [
                  J[34] || (J[34] = t("p", { class: "wizard-intro" }, " Now let's set up your first environment. ", -1)),
                  t("button", {
                    class: "landing-option",
                    onClick: J[6] || (J[6] = (Ie) => g.value = "create")
                  }, [...J[31] || (J[31] = [
                    t("span", { class: "option-icon" }, "➕", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Create New Environment"),
                      t("span", { class: "option-description" }, "Start fresh with a new ComfyUI installation")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  t("button", {
                    class: "landing-option",
                    onClick: J[7] || (J[7] = (Ie) => {
                      S.value = !1, g.value = "import";
                    })
                  }, [...J[32] || (J[32] = [
                    t("span", { class: "option-icon" }, "📦", -1),
                    t("div", { class: "option-content" }, [
                      t("span", { class: "option-title" }, "Import Environment"),
                      t("span", { class: "option-description" }, "From exported bundle (.tar.gz) or git repository")
                    ], -1),
                    t("span", { class: "option-arrow" }, "▸", -1)
                  ])]),
                  (qe = o.existingEnvironments) != null && qe.length ? (n(), i(B, { key: 0 }, [
                    J[33] || (J[33] = t("div", { class: "landing-divider" }, [
                      t("span", null, "or switch to existing")
                    ], -1)),
                    t("div", uT, [
                      (n(!0), i(B, null, ge(o.existingEnvironments, (Ie) => (n(), i("label", {
                        key: Ie,
                        class: Be(["env-option", { selected: w.value === Ie }])
                      }, [
                        Tt(t("input", {
                          type: "radio",
                          name: "env-select",
                          value: Ie,
                          "onUpdate:modelValue": J[8] || (J[8] = (Xe) => w.value = Xe)
                        }, null, 8, dT), [
                          [Ln, w.value]
                        ]),
                        t("span", mT, m(Ie), 1)
                      ], 2))), 128))
                    ])
                  ], 64)) : y("", !0)
                ])) : g.value === "create" ? (n(), i("div", fT, [
                  me.value ? (n(), i("div", xT, [
                    t("p", ST, [
                      J[41] || (J[41] = $(" Creating environment ", -1)),
                      t("strong", null, m(ne.value), 1),
                      J[42] || (J[42] = $("... ", -1))
                    ]),
                    b(Kn, {
                      progress: ye.value.progress,
                      message: ye.value.message,
                      "current-phase": ye.value.phase,
                      "show-steps": !0,
                      steps: ee
                    }, null, 8, ["progress", "message", "current-phase"]),
                    J[43] || (J[43] = t("p", { class: "progress-warning" }, " This may take several minutes. Please wait... ", -1))
                  ])) : (n(), i(B, { key: 0 }, [
                    J[40] || (J[40] = t("p", { class: "wizard-intro" }, " Create a new managed environment: ", -1)),
                    t("div", vT, [
                      J[35] || (J[35] = t("label", { class: "form-label" }, "Environment Name", -1)),
                      Tt(t("input", {
                        "onUpdate:modelValue": J[9] || (J[9] = (Ie) => ne.value = Ie),
                        type: "text",
                        class: "form-input",
                        placeholder: "my-new-env"
                      }, null, 512), [
                        [en, ne.value]
                      ])
                    ]),
                    t("div", pT, [
                      J[36] || (J[36] = t("label", { class: "form-label" }, "Python Version", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": J[10] || (J[10] = (Ie) => Y.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, ge(st(mc), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, m(Ie), 9, gT))), 128))
                      ], 512), [
                        [Co, Y.value]
                      ])
                    ]),
                    t("div", hT, [
                      J[37] || (J[37] = t("label", { class: "form-label" }, "ComfyUI Version", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": J[11] || (J[11] = (Ie) => we.value = Ie),
                        class: "form-select",
                        disabled: fe.value
                      }, [
                        (n(!0), i(B, null, ge(se.value, (Ie) => (n(), i("option", {
                          key: Ie.tag_name,
                          value: Ie.tag_name
                        }, m(Ie.name), 9, wT))), 128))
                      ], 8, yT), [
                        [Co, we.value]
                      ])
                    ]),
                    t("div", _T, [
                      J[38] || (J[38] = t("label", { class: "form-label" }, "PyTorch Backend", -1)),
                      Tt(t("select", {
                        "onUpdate:modelValue": J[12] || (J[12] = (Ie) => Z.value = Ie),
                        class: "form-select"
                      }, [
                        (n(!0), i(B, null, ge(st(Pl), (Ie) => (n(), i("option", {
                          key: Ie,
                          value: Ie
                        }, m(Ie) + m(Ie === "auto" ? " (detect GPU)" : ""), 9, kT))), 128))
                      ], 512), [
                        [Co, Z.value]
                      ])
                    ]),
                    t("div", bT, [
                      t("label", $T, [
                        Tt(t("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": J[13] || (J[13] = (Ie) => W.value = Ie)
                        }, null, 512), [
                          [Hn, W.value]
                        ]),
                        J[39] || (J[39] = t("span", null, "Switch to this environment after creation", -1))
                      ])
                    ]),
                    K.value ? (n(), i("div", CT, m(K.value), 1)) : y("", !0)
                  ], 64))
                ])) : g.value === "import" ? (n(), i("div", IT, [
                  b(yc, {
                    "workspace-path": ke.value,
                    "resume-import": S.value,
                    "initial-progress": T.value ?? void 0,
                    onImportComplete: Ne,
                    onImportStarted: J[14] || (J[14] = (Ie) => C.value = !0),
                    onSourceCleared: Te
                  }, null, 8, ["workspace-path", "resume-import", "initial-progress"])
                ])) : y("", !0)
              ], 64))
            ])) : y("", !0)
          ];
        }),
        footer: h(() => [
          t("div", ET, [
            b(xc),
            t("div", TT, [
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
                !me.value && !C.value && (g.value !== "landing" || o.setupState === "no_workspace" && !ke.value) ? (n(), R(De, {
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
                    $(m(me.value ? "Creating..." : W.value ? "Create & Switch" : "Create Environment"), 1)
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
      _.value ? (n(), R(jE, {
        key: 0,
        "workspace-path": I.value,
        onClose: J[16] || (J[16] = (qe) => _.value = !1)
      }, null, 8, ["workspace-path"])) : y("", !0)
    ], 64));
  }
}), RT = /* @__PURE__ */ xe(PT, [["__scopeId", "data-v-9a9aadc0"]]), LT = { class: "update-banner" }, DT = { class: "update-banner__left" }, NT = { class: "update-banner__title" }, UT = {
  key: 0,
  class: "update-banner__summary"
}, OT = { class: "update-banner__actions" }, AT = ["disabled"], zT = ["disabled"], FT = ["disabled"], VT = /* @__PURE__ */ be({
  __name: "UpdateNoticeBanner",
  props: {
    info: {},
    updating: { type: Boolean }
  },
  emits: ["update", "dismiss", "release-notes"],
  setup(e, { emit: s }) {
    const o = s;
    return (a, l) => (n(), i("div", LT, [
      t("div", DT, [
        t("div", NT, " ComfyGit Manager v" + m(e.info.latest_version) + " available ", 1),
        e.info.changelog_summary ? (n(), i("div", UT, m(e.info.changelog_summary), 1)) : y("", !0)
      ]),
      t("div", OT, [
        t("button", {
          class: "update-banner__btn primary",
          disabled: e.updating,
          onClick: l[0] || (l[0] = (r) => o("update"))
        }, m(e.updating ? "Updating…" : "Update"), 9, AT),
        e.info.release_url ? (n(), i("button", {
          key: 0,
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[1] || (l[1] = (r) => o("release-notes"))
        }, " Release notes ", 8, zT)) : y("", !0),
        t("button", {
          class: "update-banner__btn",
          disabled: e.updating,
          onClick: l[2] || (l[2] = (r) => o("dismiss"))
        }, " Dismiss ", 8, FT)
      ])
    ]));
  }
}), BT = /* @__PURE__ */ xe(VT, [["__scopeId", "data-v-49562c5c"]]), Sc = "ComfyGit.UpdateNotice.DismissedVersion";
function WT() {
  try {
    return localStorage.getItem(Sc);
  } catch {
    return null;
  }
}
function GT(e) {
  try {
    localStorage.setItem(Sc, e);
  } catch {
  }
}
function jT(e) {
  return !e || !e.update_available || !e.latest_version ? !1 : WT() !== e.latest_version;
}
const HT = { class: "comfygit-panel" }, qT = { class: "panel-header" }, KT = { class: "header-left" }, JT = {
  key: 0,
  class: "header-info"
}, QT = { class: "header-actions" }, YT = { class: "env-switcher" }, XT = { class: "env-switcher-header" }, ZT = { class: "env-control-buttons" }, eM = {
  key: 0,
  class: "header-info"
}, tM = { class: "branch-name" }, sM = { class: "panel-main" }, oM = { class: "sidebar" }, nM = { class: "sidebar-content" }, aM = { class: "sidebar-section" }, lM = { class: "sidebar-section" }, iM = { class: "sidebar-section" }, rM = { class: "sidebar-footer" }, cM = { class: "content-area" }, uM = {
  key: 0,
  class: "error-message"
}, dM = {
  key: 1,
  class: "loading"
}, mM = { class: "dialog-content env-selector-dialog" }, fM = { class: "dialog-header" }, vM = { class: "dialog-body" }, pM = { class: "env-list" }, gM = { class: "env-info" }, hM = { class: "env-name-row" }, yM = { class: "env-indicator" }, wM = { class: "env-name" }, _M = {
  key: 0,
  class: "env-branch"
}, kM = {
  key: 1,
  class: "current-label"
}, bM = { class: "env-stats" }, $M = ["onClick"], CM = { class: "toast-container" }, xM = { class: "toast-message" }, Pi = "ComfyGit.LastView", Ri = "ComfyGit.LastSection", SM = /* @__PURE__ */ be({
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
      createBranch: d,
      switchBranch: v,
      deleteBranch: f,
      getEnvironments: p,
      switchEnvironment: w,
      getSwitchProgress: g,
      deleteEnvironment: _,
      syncEnvironmentManually: C,
      repairWorkflowModels: x,
      getSetupStatus: S,
      getUpdateCheck: T,
      updateManager: M
    } = ct(), E = qv(), D = k(null), z = k([]), j = k([]), L = k([]), q = P(() => L.value.find((ae) => ae.is_current)), ce = k(null), ne = k(!1), Y = k(!1), we = k("remotes"), Z = k("manifest"), W = k(null), K = k(!1), ke = k(1), se = P(() => {
      var ae;
      return ((ae = W.value) == null ? void 0 : ae.state) || "managed";
    }), fe = {
      can_initialize_workspace: !1,
      can_create_environment: !0,
      can_switch_environment: !0,
      can_restart_current: !0,
      can_stop_current: !0,
      can_delete_environment: !0
    }, U = P(() => {
      var ae, H;
      return ((H = (ae = W.value) == null ? void 0 : ae.runtime_context) == null ? void 0 : H.capabilities) || fe;
    }), me = k(!1), Pe = k(null), ye = k(null), ee = k(!1), Q = k(null), $e = k(!1), te = k(!1), oe = P(() => !$e.value && jT(Q.value)), Re = k(null), ve = k(null), le = k(null), I = k(!1), A = k(!1), re = k(""), Ee = k(null), Ce = k({ state: "idle", progress: 0, message: "" });
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
        const ae = sessionStorage.getItem(Pi), H = sessionStorage.getItem(Ri), Ke = ae === "branches" || ae === "history" || ae === "remotes" ? "version-control" : ae === "manifest" || ae === "debug-env" || ae === "debug-workspace" ? "diagnostics" : ae, Ye = H === "all-envs" ? "workspace" : H === "sharing" ? "version-control" : H;
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
        sessionStorage.setItem(Pi, ae), sessionStorage.setItem(Ri, H);
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
      Z.value = ae, Ie("diagnostics", "diagnostics");
    }
    function G() {
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
      for (const pt of Ke)
        if (typeof (pt == null ? void 0 : pt.execute) == "function")
          try {
            return await pt.execute(ae), !0;
          } catch (Dt) {
            console.debug(`[ComfyGit] Command ${ae} did not open Extensions manager`, Dt);
          }
      return !1;
    }
    function Qe(ae) {
      var Ye, lt, pt;
      const H = ae.map((Dt) => Dt.toLowerCase()), Ke = document.querySelectorAll('button, [role="button"]');
      for (const Dt of Ke) {
        const ss = Dt;
        if ([
          (Ye = ss.textContent) == null ? void 0 : Ye.trim(),
          (lt = ss.getAttribute("title")) == null ? void 0 : lt.trim(),
          (pt = ss.getAttribute("aria-label")) == null ? void 0 : pt.trim()
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
        Q.value = await T();
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
      ae && GT(ae), $e.value = !0;
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
`).map((pt) => pt.trim()).filter(Boolean);
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
        D.value = H, z.value = Ke.commits, j.value = Ye.branches, L.value = lt, a("statusUpdate", H), (ae.refreshWorkflows ?? !0) && Re.value && await Re.value.loadWorkflows(!0);
      } catch (H) {
        Pe.value = H instanceof Error ? H.message : "Failed to load status", D.value = null, z.value = [], j.value = [];
      } finally {
        me.value = !1;
      }
    }
    function dt(ae) {
      ye.value = ae;
    }
    async function Ct(ae) {
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
          var pt;
          N.value = null, Qs();
          const Ye = Le(`Checking out ${ae.short_hash || ((pt = ae.hash) == null ? void 0 : pt.slice(0, 7))}...`, "info", 0), lt = await u(ae.hash, H);
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
    async function xt(ae) {
      const H = Le(`Creating branch ${ae}...`, "info", 0), Ke = await d(ae);
      je(H), Ke.status === "success" ? (Le(`Branch "${ae}" created`, "success"), await Ge()) : Le(Ke.message || "Failed to create branch", "error");
    }
    async function ts(ae, H = !1) {
      const Ke = async (Ye) => {
        var pt;
        const lt = Le(`Deleting branch ${ae}...`, "info", 0);
        try {
          const Dt = await f(ae, Ye);
          je(lt), Dt.status === "success" ? (Le(`Branch "${ae}" deleted`, "success"), await Ge()) : (pt = Dt.message) != null && pt.includes("not fully merged") ? N.value = {
            title: "Branch Not Fully Merged",
            message: `The branch "${ae}" has commits that haven't been merged.`,
            warning: "Force deleting will permanently lose any unmerged commits.",
            confirmLabel: "Force Delete",
            cancelLabel: "Cancel",
            onConfirm: async () => {
              N.value = null, await Ke(!0);
            }
          } : Le(Dt.message || "Failed to delete branch", "error");
        } catch (Dt) {
          je(lt);
          const ss = Dt instanceof Error ? Dt.message : "Failed to delete branch";
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
      ee.value = !1, re.value = ae, Ee.value = H || null, I.value = !0;
    }
    async function ma() {
      I.value = !1, A.value = !0, Qs(), Ce.value = {
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
          const pt = Math.floor(ae);
          Ce.value = {
            progress: pt,
            state: uo(pt),
            message: mo(pt)
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
          let ae = await E.getStatus();
          if ((!ae || ae.state === "idle") && (ae = await g()), !ae)
            return;
          const H = ae.progress || 0;
          H >= 60 && Ss();
          const Ke = Math.max(H, Ce.value.progress), Ye = ae.state && ae.state !== "idle" && ae.state !== "unknown", lt = Ye ? ae.state : uo(Ke), pt = Ye && ae.message || mo(Ke);
          Ce.value = {
            state: lt,
            progress: Ke,
            message: pt
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
      I.value = !1, re.value = "", (ae = W.value) != null && ae.state && W.value.state !== "managed" && (ke.value = W.value.state === "no_workspace" ? 1 : 2, K.value = !0);
    }
    async function ga(ae) {
      O.value = !1, await Ge(), Le(ae.message, ae.success ? "success" : "error");
    }
    async function ha() {
      X.value = !1;
      const ae = Le("Syncing environment...", "info", 0);
      try {
        const H = await C("skip", !0);
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
        const Ke = await x(ae);
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
        const Ye = await C("skip", !0);
        if (je(ae), Ye.status === "success") {
          const lt = [];
          Ye.nodes_installed.length && lt.push(`${Ye.nodes_installed.length} installed`), Ye.nodes_removed.length && lt.push(`${Ye.nodes_removed.length} removed`);
          const pt = lt.length ? `: ${lt.join(", ")}` : "";
          Le(`✓ Environment repaired${pt}`, "success"), (H = le.value) == null || H.closeDetailModal(), await Ge();
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
        W.value = await S();
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
      W.value = await S(), console.log(`Environment '${ae}' created. Available for switching.`);
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
        if (W.value = await S(), W.value.state === "no_workspace" && U.value.can_initialize_workspace) {
          K.value = !0, ke.value = 1;
          return;
        }
        if (W.value.state === "empty_workspace" && U.value.can_create_environment) {
          K.value = !0, ke.value = 2;
          return;
        }
        if (W.value.state === "unmanaged" && U.value.can_switch_environment) {
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
      var Ke, Ye, lt, pt, Dt, ss, No, zs, V, _e, He, mt, Nt;
      return n(), i("div", HT, [
        t("div", qT, [
          t("div", KT, [
            H[27] || (H[27] = t("h2", { class: "panel-title" }, "ComfyGit", -1)),
            D.value ? (n(), i("div", JT)) : y("", !0)
          ]),
          t("div", QT, [
            b(Cc),
            H[30] || (H[30] = t("span", { class: "header-divider" }, null, -1)),
            t("button", {
              class: Be(["icon-btn", { spinning: me.value }]),
              onClick: Ge,
              title: "Refresh"
            }, [...H[28] || (H[28] = [
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
              onClick: H[0] || (H[0] = (Ze) => a("close")),
              title: "Close"
            }, [...H[29] || (H[29] = [
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
        oe.value && Q.value ? (n(), R(BT, {
          key: 0,
          info: Q.value,
          updating: te.value,
          onUpdate: F,
          onDismiss: ie,
          onReleaseNotes: Et
        }, null, 8, ["info", "updating"])) : y("", !0),
        t("div", YT, [
          t("div", XT, [
            H[31] || (H[31] = t("div", { class: "env-switcher-label" }, "CURRENT ENVIRONMENT", -1)),
            t("div", ZT, [
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
          t("button", {
            class: "env-switcher-btn",
            onClick: H[1] || (H[1] = (Ze) => Ie("environments", "workspace"))
          }, [
            D.value ? (n(), i("div", eM, [
              t("span", null, m(((Ke = q.value) == null ? void 0 : Ke.name) || ((Ye = D.value) == null ? void 0 : Ye.environment) || "Loading..."), 1),
              t("span", tM, "(" + m(D.value.branch || "detached") + ")", 1)
            ])) : y("", !0),
            H[32] || (H[32] = t("span", { class: "switch-indicator" }, "SWITCH ▸", -1))
          ])
        ]),
        t("div", sM, [
          t("div", oM, [
            t("div", nM, [
              t("div", aM, [
                H[33] || (H[33] = t("div", { class: "sidebar-section-title" }, "THIS ENV", -1)),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "status" && qe.value === "this-env" }]),
                  onClick: H[2] || (H[2] = (Ze) => Ie("status", "this-env"))
                }, " STATUS ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "workflows" }]),
                  onClick: H[3] || (H[3] = (Ze) => Ie("workflows", "this-env"))
                }, " WORKFLOWS ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "models-env" }]),
                  onClick: H[4] || (H[4] = (Ze) => Ie("models-env", "this-env"))
                }, " MODELS ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "nodes" }]),
                  onClick: H[5] || (H[5] = (Ze) => Ie("nodes", "this-env"))
                }, " NODES ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "version-control" }]),
                  onClick: H[6] || (H[6] = (Ze) => Ve("remotes"))
                }, " VERSION CONTROL ", 2)
              ]),
              H[36] || (H[36] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", lM, [
                H[34] || (H[34] = t("div", { class: "sidebar-section-title" }, "WORKSPACE", -1)),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "environments" }]),
                  onClick: H[7] || (H[7] = (Ze) => Ie("environments", "workspace"))
                }, " ENVIRONMENTS ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "model-index" }]),
                  onClick: H[8] || (H[8] = (Ze) => Ie("model-index", "workspace"))
                }, " MODEL INDEX ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "settings" }]),
                  onClick: H[9] || (H[9] = (Ze) => Ie("settings", "workspace"))
                }, " SETTINGS ", 2)
              ]),
              H[37] || (H[37] = t("div", { class: "sidebar-divider" }, null, -1)),
              t("div", iM, [
                H[35] || (H[35] = t("div", { class: "sidebar-section-title" }, "DIAGNOSTICS", -1)),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && Z.value === "manifest" }]),
                  onClick: H[10] || (H[10] = (Ze) => Ue("manifest"))
                }, " MANIFEST ", 2),
                t("button", {
                  class: Be(["sidebar-item", { active: J.value === "diagnostics" && Z.value !== "manifest" }]),
                  onClick: H[11] || (H[11] = (Ze) => Ue("env"))
                }, " LOGGING ", 2)
              ])
            ]),
            t("div", rM, [
              b(xc)
            ])
          ]),
          t("div", cM, [
            Pe.value ? (n(), i("div", uM, m(Pe.value), 1)) : !D.value && J.value === "status" ? (n(), i("div", dM, " Loading status... ")) : (n(), i(B, { key: 2 }, [
              J.value === "status" ? (n(), R(Gv, {
                key: 0,
                ref_key: "statusSectionRef",
                ref: le,
                status: D.value,
                "setup-state": se.value,
                onSwitchBranch: G,
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
              }, null, 8, ["status", "setup-state"])) : J.value === "workflows" ? (n(), R(j0, {
                key: 1,
                ref_key: "workflowsSectionRef",
                ref: Re,
                onRefresh: Ge
              }, null, 512)) : J.value === "models-env" ? (n(), R(r2, {
                key: 2,
                onNavigate: Xe
              })) : J.value === "version-control" ? (n(), R(zI, {
                key: 3,
                commits: z.value,
                "current-ref": (lt = D.value) == null ? void 0 : lt.branch,
                branches: j.value,
                current: ((pt = D.value) == null ? void 0 : pt.branch) || null,
                "initial-tab": we.value,
                onSelect: dt,
                onCheckout: Ct,
                onSwitch: it,
                onCreate: xt,
                onDelete: ts,
                onToast: nt
              }, null, 8, ["commits", "current-ref", "branches", "current", "initial-tab"])) : J.value === "nodes" ? (n(), R(o$, {
                key: 4,
                "version-mismatches": ((ss = (Dt = D.value) == null ? void 0 : Dt.comparison) == null ? void 0 : ss.version_mismatches) || [],
                onOpenNodeManager: ue,
                onRepairEnvironment: hn,
                onToast: nt
              }, null, 8, ["version-mismatches"])) : J.value === "diagnostics" ? (n(), R(ZI, {
                key: 5,
                "initial-tab": Z.value
              }, null, 8, ["initial-tab"])) : J.value === "environments" ? (n(), R(sx, {
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
              }, null, 8, ["can-create", "can-switch", "can-delete"])) : J.value === "model-index" ? (n(), R(b2, {
                key: 7,
                onRefresh: Ge
              })) : J.value === "settings" ? (n(), R(M$, { key: 8 })) : y("", !0)
            ], 64))
          ])
        ]),
        ye.value ? (n(), R(h6, {
          key: 1,
          commit: ye.value,
          onClose: H[20] || (H[20] = (Ze) => ye.value = null),
          onCheckout: Ct,
          onCreateBranch: xs
        }, null, 8, ["commit"])) : y("", !0),
        N.value ? (n(), R(Ml, {
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
        ne.value ? (n(), R(It, {
          key: 3,
          title: "IMPORT ENVIRONMENT",
          size: "xl",
          "fixed-height": "",
          onClose: H[22] || (H[22] = (Ze) => ne.value = !1)
        }, {
          body: h(() => [
            b(m5, {
              embedded: "",
              onImportCompleteSwitch: Ca
            })
          ]),
          _: 1
        })) : y("", !0),
        Y.value ? (n(), R(It, {
          key: 4,
          title: ce.value ? `EXPORT ENVIRONMENT: ${ce.value.toUpperCase()}` : "EXPORT ENVIRONMENT",
          size: "md",
          onClose: yn
        }, {
          body: h(() => [
            b(h3, {
              embedded: "",
              "environment-name": ce.value,
              onClose: yn
            }, null, 8, ["environment-name"])
          ]),
          _: 1
        }, 8, ["title"])) : y("", !0),
        b(rE, {
          show: I.value,
          "from-environment": ((No = q.value) == null ? void 0 : No.name) || "unknown",
          "to-environment": re.value,
          onConfirm: ma,
          onClose: pa
        }, null, 8, ["show", "from-environment", "to-environment"]),
        O.value && D.value ? (n(), R($c, {
          key: 5,
          status: D.value,
          "as-modal": !0,
          onClose: H[23] || (H[23] = (Ze) => O.value = !1),
          onCommitted: ga
        }, null, 8, ["status"])) : y("", !0),
        X.value && D.value ? (n(), R(EE, {
          key: 6,
          show: X.value,
          "mismatch-details": {
            missing_nodes: D.value.comparison.missing_nodes,
            extra_nodes: D.value.comparison.extra_nodes
          },
          onConfirm: ha,
          onClose: H[24] || (H[24] = (Ze) => X.value = !1)
        }, null, 8, ["show", "mismatch-details"])) : y("", !0),
        b(wE, {
          show: A.value,
          state: Ce.value.state,
          progress: Ce.value.progress,
          message: Ce.value.message
        }, null, 8, ["show", "state", "progress", "message"]),
        ee.value ? (n(), i("div", {
          key: 7,
          class: "dialog-overlay",
          onClick: H[26] || (H[26] = vt((Ze) => ee.value = !1, ["self"]))
        }, [
          t("div", mM, [
            t("div", fM, [
              H[39] || (H[39] = t("h3", { class: "dialog-title" }, "SWITCH ENVIRONMENT", -1)),
              t("button", {
                class: "icon-btn",
                onClick: H[25] || (H[25] = (Ze) => ee.value = !1)
              }, [...H[38] || (H[38] = [
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
            t("div", vM, [
              H[40] || (H[40] = t("p", { class: "dialog-message" }, "Select environment to switch to:", -1)),
              t("div", pM, [
                (n(!0), i(B, null, ge(L.value, (Ze) => (n(), i("div", {
                  key: Ze.name,
                  class: Be(["env-item", { current: Ze.is_current }])
                }, [
                  t("div", gM, [
                    t("div", hM, [
                      t("span", yM, m(Ze.is_current ? "●" : "○"), 1),
                      t("span", wM, m(Ze.name), 1),
                      Ze.current_branch ? (n(), i("span", _M, "(" + m(Ze.current_branch) + ")", 1)) : y("", !0),
                      Ze.is_current ? (n(), i("span", kM, "CURRENT")) : y("", !0)
                    ]),
                    t("div", bM, m(Ze.workflow_count) + " workflows • " + m(Ze.node_count) + " nodes ", 1)
                  ]),
                  !Ze.is_current && U.value.can_switch_environment ? (n(), i("button", {
                    key: 0,
                    class: "switch-btn",
                    onClick: (Fs) => As(Ze.name)
                  }, " SWITCH ", 8, $M)) : y("", !0)
                ], 2))), 128))
              ])
            ])
          ])
        ])) : y("", !0),
        K.value ? (n(), R(RT, {
          key: 8,
          "default-path": ((zs = W.value) == null ? void 0 : zs.default_path) || "~/comfygit",
          "detected-models-dir": ((V = W.value) == null ? void 0 : V.detected_models_dir) || null,
          "initial-step": ke.value,
          "existing-environments": ((_e = W.value) == null ? void 0 : _e.environments) || [],
          "cli-installed": ((He = W.value) == null ? void 0 : He.cli_installed) ?? !0,
          "setup-state": ((mt = W.value) == null ? void 0 : mt.state) || "no_workspace",
          "workspace-path": ((Nt = W.value) == null ? void 0 : Nt.workspace_path) || null,
          onComplete: ka,
          onClose: ba,
          onSwitchEnvironment: $a,
          onEnvironmentCreatedNoSwitch: Ia
        }, null, 8, ["default-path", "detected-models-dir", "initial-step", "existing-environments", "cli-installed", "setup-state", "workspace-path"])) : y("", !0),
        t("div", CM, [
          b(tm, { name: "toast" }, {
            default: h(() => [
              (n(!0), i(B, null, ge(Oe.value, (Ze) => (n(), i("div", {
                key: Ze.id,
                class: Be(["toast", Ze.type])
              }, [
                t("span", xM, m(Ze.message), 1)
              ], 2))), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
}), IM = /* @__PURE__ */ xe(SM, [["__scopeId", "data-v-cab83752"]]), EM = { class: "item-header" }, TM = { class: "item-info" }, MM = { class: "filename" }, PM = { class: "metadata" }, RM = { class: "size" }, LM = {
  key: 0,
  class: "type"
}, DM = { class: "item-actions" }, NM = {
  key: 0,
  class: "progress-section"
}, UM = { class: "progress-bar" }, OM = { class: "progress-stats" }, AM = { class: "downloaded" }, zM = { class: "speed" }, FM = {
  key: 0,
  class: "eta"
}, VM = {
  key: 1,
  class: "status-msg paused"
}, BM = {
  key: 2,
  class: "status-msg queued"
}, WM = {
  key: 3,
  class: "status-msg completed"
}, GM = {
  key: 4,
  class: "status-msg failed"
}, jM = {
  key: 0,
  class: "retries"
}, HM = /* @__PURE__ */ be({
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
      class: Be(["download-item", `status-${e.item.status}`])
    }, [
      t("div", EM, [
        t("div", TM, [
          t("div", MM, m(e.item.filename), 1),
          t("div", PM, [
            t("span", RM, m(a(e.item.size)), 1),
            e.item.type ? (n(), i("span", LM, m(e.item.type), 1)) : y("", !0)
          ])
        ]),
        t("div", DM, [
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
      e.item.status === "downloading" ? (n(), i("div", NM, [
        t("div", UM, [
          t("div", {
            class: "progress-fill",
            style: Rt({ width: `${e.item.progress}%` })
          }, null, 4)
        ]),
        t("div", OM, [
          t("span", AM, m(a(e.item.downloaded)) + " / " + m(a(e.item.size)), 1),
          t("span", zM, m(l(e.item.speed)), 1),
          e.item.eta > 0 ? (n(), i("span", FM, m(r(e.item.eta)), 1)) : y("", !0)
        ])
      ])) : e.item.status === "paused" ? (n(), i("div", VM, " Paused - click Resume to download ")) : e.item.status === "queued" ? (n(), i("div", BM, " Waiting in queue... ")) : e.item.status === "completed" ? (n(), i("div", WM, " ✓ Downloaded ")) : e.item.status === "failed" ? (n(), i("div", GM, [
        $(" ✗ " + m(e.item.error || "Failed") + " ", 1),
        e.item.retries > 0 ? (n(), i("span", jM, "(" + m(e.item.retries) + " retries)", 1)) : y("", !0)
      ])) : y("", !0)
    ], 2));
  }
}), zo = /* @__PURE__ */ xe(HM, [["__scopeId", "data-v-2110df65"]]), qM = { class: "queue-title" }, KM = { class: "count" }, JM = { class: "queue-actions" }, QM = { class: "action-label" }, YM = {
  key: 0,
  class: "overall-progress"
}, XM = { class: "progress-bar" }, ZM = {
  key: 0,
  class: "current-mini"
}, e7 = { class: "filename" }, t7 = { class: "speed" }, s7 = {
  key: 1,
  class: "queue-content"
}, o7 = {
  key: 0,
  class: "section"
}, n7 = {
  key: 1,
  class: "section"
}, a7 = { class: "section-header" }, l7 = { class: "section-label paused" }, i7 = { class: "items-list" }, r7 = {
  key: 2,
  class: "section"
}, c7 = { class: "section-header" }, u7 = { class: "section-label" }, d7 = { class: "items-list" }, m7 = {
  key: 3,
  class: "section"
}, f7 = { class: "section-header" }, v7 = { class: "section-label" }, p7 = { class: "items-list" }, g7 = {
  key: 4,
  class: "section"
}, h7 = { class: "section-header" }, y7 = { class: "section-label failed" }, w7 = { class: "items-list" }, _7 = /* @__PURE__ */ be({
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
      activeCount: d,
      cancelDownload: v,
      retryDownload: f,
      resumeDownload: p,
      resumeAllPaused: w,
      removeItem: g,
      clearCompleted: _
    } = Lo(), C = k(!1);
    let x = null;
    yt(
      () => ({
        active: d.value,
        failed: r.value.length,
        paused: c.value.length,
        completed: l.value.length
      }),
      (E, D) => {
        x && (clearTimeout(x), x = null);
        const z = E.active === 0 && E.failed === 0 && E.paused === 0 && E.completed > 0, j = D && (D.active > 0 || D.paused > 0);
        z && j && (x = setTimeout(() => {
          _(), x = null;
        }, 2e3));
      },
      { deep: !0 }
    );
    const S = P(() => {
      var z;
      if (s.items.length === 0) return 0;
      const E = l.value.length, D = ((z = o.value) == null ? void 0 : z.progress) || 0;
      return Math.round((E + D / 100) / s.items.length * 100);
    });
    function T(E) {
      v(E);
    }
    function M(E) {
      return E === 0 ? "..." : `${(E / (1024 * 1024)).toFixed(1)} MB/s`;
    }
    return (E, D) => (n(), R(Lt, { to: "body" }, [
      st(u) ? (n(), i("div", {
        key: 0,
        class: Be(["model-download-queue", { minimized: !C.value }])
      }, [
        t("div", {
          class: "queue-header",
          onClick: D[0] || (D[0] = (z) => C.value = !C.value)
        }, [
          t("div", qM, [
            D[4] || (D[4] = t("span", { class: "icon" }, "↓", -1)),
            D[5] || (D[5] = t("span", { class: "title" }, "Downloads", -1)),
            t("span", KM, "(" + m(st(d)) + "/" + m(st(s).items.length) + ")", 1)
          ]),
          t("div", JM, [
            t("span", QM, m(C.value ? "minimize" : "expand"), 1)
          ])
        ]),
        C.value ? (n(), i("div", s7, [
          st(o) ? (n(), i("div", o7, [
            D[6] || (D[6] = t("div", { class: "section-label" }, "Downloading", -1)),
            b(zo, {
              item: st(o),
              onCancel: D[1] || (D[1] = (z) => T(st(o).id))
            }, null, 8, ["item"])
          ])) : y("", !0),
          st(c).length > 0 ? (n(), i("div", n7, [
            t("div", a7, [
              t("span", l7, "Paused (" + m(st(c).length) + ")", 1),
              t("button", {
                class: "resume-all-btn",
                onClick: D[2] || (D[2] = //@ts-ignore
                (...z) => st(w) && st(w)(...z))
              }, "Resume All")
            ]),
            t("div", i7, [
              (n(!0), i(B, null, ge(st(c), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onResume: (j) => st(p)(z.id),
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onResume", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(a).length > 0 ? (n(), i("div", r7, [
            t("div", c7, [
              t("span", u7, "Queued (" + m(st(a).length) + ")", 1)
            ]),
            t("div", d7, [
              (n(!0), i(B, null, ge(st(a), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onCancel: (j) => T(z.id)
              }, null, 8, ["item", "onCancel"]))), 128))
            ])
          ])) : y("", !0),
          st(l).length > 0 ? (n(), i("div", m7, [
            t("div", f7, [
              t("span", v7, "Completed (" + m(st(l).length) + ")", 1),
              t("button", {
                class: "clear-btn",
                onClick: D[3] || (D[3] = //@ts-ignore
                (...z) => st(_) && st(_)(...z))
              }, "Clear")
            ]),
            t("div", p7, [
              (n(!0), i(B, null, ge(st(l).slice(0, 3), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onRemove"]))), 128))
            ])
          ])) : y("", !0),
          st(r).length > 0 ? (n(), i("div", g7, [
            t("div", h7, [
              t("span", y7, "Failed (" + m(st(r).length) + ")", 1)
            ]),
            t("div", w7, [
              (n(!0), i(B, null, ge(st(r), (z) => (n(), R(zo, {
                key: z.id,
                item: z,
                onRetry: (j) => st(f)(z.id),
                onRemove: (j) => st(g)(z.id)
              }, null, 8, ["item", "onRetry", "onRemove"]))), 128))
            ])
          ])) : y("", !0)
        ])) : (n(), i("div", YM, [
          t("div", XM, [
            t("div", {
              class: "progress-fill",
              style: Rt({ width: `${S.value}%` })
            }, null, 4)
          ]),
          st(o) ? (n(), i("div", ZM, [
            t("span", e7, m(st(o).filename), 1),
            t("span", t7, m(M(st(o).speed)), 1)
          ])) : y("", !0)
        ]))
      ], 2)) : y("", !0)
    ]));
  }
}), k7 = /* @__PURE__ */ xe(_7, [["__scopeId", "data-v-3a3c9607"]]), b7 = { class: "detail-header" }, $7 = { class: "item-count" }, C7 = { class: "resource-list" }, x7 = { class: "item-info" }, S7 = { class: "item-name" }, I7 = {
  key: 0,
  class: "item-subtitle"
}, E7 = {
  key: 0,
  class: "installing-badge"
}, T7 = ["title"], M7 = {
  key: 2,
  class: "installed-badge"
}, P7 = {
  key: 3,
  class: "queued-badge"
}, R7 = {
  key: 4,
  class: "action-buttons"
}, L7 = {
  key: 1,
  class: "no-action"
}, D7 = /* @__PURE__ */ be({
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
    const o = e, a = s, l = P(() => o.items.filter((g) => g.canAction)), r = P(() => l.value.length > 0 && l.value.every(
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
    return (g, _) => (n(), R(It, {
      title: e.title,
      size: "md",
      onClose: _[2] || (_[2] = (C) => a("close"))
    }, {
      body: h(() => [
        t("div", b7, [
          t("span", $7, m(e.items.length) + " " + m(e.items.length === 1 ? "item" : "items"), 1),
          l.value.length > 1 ? (n(), R(De, {
            key: 0,
            size: "sm",
            variant: "secondary",
            disabled: r.value,
            onClick: _[0] || (_[0] = (C) => a("bulk-action"))
          }, {
            default: h(() => [
              $(m(c.value), 1)
            ]),
            _: 1
          }, 8, ["disabled"])) : y("", !0)
        ]),
        t("div", C7, [
          (n(!0), i(B, null, ge(e.items, (C) => (n(), i("div", {
            key: C.id,
            class: "resource-item"
          }, [
            t("div", x7, [
              t("span", S7, m(C.name), 1),
              C.subtitle ? (n(), i("span", I7, m(C.subtitle), 1)) : y("", !0)
            ]),
            C.canAction ? (n(), i(B, { key: 0 }, [
              d(C) ? (n(), i("span", E7, "Installing...")) : f(C) ? (n(), i("span", {
                key: 1,
                class: "failed-badge",
                title: p(C)
              }, "Failed ⚠", 8, T7)) : v(C) ? (n(), i("span", M7, "Installed")) : u(C) ? (n(), i("span", P7, "Queued")) : (n(), i("div", R7, [
                (n(!0), i(B, null, ge(w(C), (x) => (n(), R(De, {
                  key: `${C.id}-${x.key}`,
                  size: "sm",
                  variant: x.variant || "secondary",
                  onClick: (S) => a("action", C, x.key)
                }, {
                  default: h(() => [
                    $(m(x.label), 1)
                  ]),
                  _: 2
                }, 1032, ["variant", "onClick"]))), 128))
              ]))
            ], 64)) : (n(), i("span", L7, m(C.actionDisabledReason || "Not available"), 1))
          ]))), 128))
        ])
      ]),
      footer: h(() => [
        b(De, {
          variant: "secondary",
          onClick: _[1] || (_[1] = (C) => a("close"))
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
}), N7 = /* @__PURE__ */ xe(D7, [["__scopeId", "data-v-ec7e9202"]]), U7 = {
  key: 0,
  class: "loading-state"
}, O7 = {
  key: 1,
  class: "analysis-results"
}, A7 = {
  key: 0,
  class: "section"
}, z7 = { class: "section-header" }, F7 = { class: "section-title" }, V7 = { class: "item-list" }, B7 = { class: "package-info" }, W7 = { class: "package-name" }, G7 = { class: "node-count" }, j7 = {
  key: 1,
  class: "installing-badge"
}, H7 = {
  key: 2,
  class: "queued-badge"
}, q7 = ["title"], K7 = {
  key: 4,
  class: "installed-badge"
}, J7 = {
  key: 1,
  class: "section"
}, Q7 = { class: "section-header" }, Y7 = { class: "section-title" }, X7 = { class: "item-list" }, Z7 = { class: "node-type" }, eP = {
  key: 0,
  class: "overflow-note"
}, tP = {
  key: 2,
  class: "section"
}, sP = { class: "section-header" }, oP = { class: "section-title" }, nP = { class: "item-list" }, aP = { class: "node-type" }, lP = { class: "not-found" }, iP = {
  key: 0,
  class: "overflow-note"
}, rP = {
  key: 3,
  class: "section"
}, cP = { class: "section-header" }, uP = { class: "section-title" }, dP = { class: "item-list" }, mP = { class: "package-info community-info" }, fP = { class: "community-title-row" }, vP = { class: "package-name" }, pP = { class: "node-count" }, gP = { class: "community-mapping-note" }, hP = { key: 0 }, yP = {
  key: 0,
  class: "community-actions"
}, wP = {
  key: 1,
  class: "installing-badge"
}, _P = {
  key: 2,
  class: "queued-badge"
}, kP = ["title"], bP = {
  key: 4,
  class: "installed-badge"
}, $P = ["title"], CP = {
  key: 1,
  class: "no-url"
}, xP = {
  key: 4,
  class: "section"
}, SP = { class: "section-header" }, IP = { class: "section-title" }, EP = { class: "item-list" }, TP = { class: "model-info" }, MP = { class: "model-name" }, PP = {
  key: 1,
  class: "queued-badge"
}, RP = {
  key: 1,
  class: "no-url"
}, LP = { class: "dont-show-again" }, DP = 3e4, NP = /* @__PURE__ */ be({
  __name: "MissingResourcesPopup",
  setup(e) {
    const s = k(!1), o = k(null), a = k(null), l = k(!1), r = k(/* @__PURE__ */ new Set()), c = k(/* @__PURE__ */ new Set()), u = k(/* @__PURE__ */ new Map()), d = k(/* @__PURE__ */ new Set()), v = k(!1), f = k(null), p = k(0), w = k(null), g = k(/* @__PURE__ */ new Set()), _ = k(/* @__PURE__ */ new Map()), C = k(/* @__PURE__ */ new Map()), { addToQueue: x } = Lo(), { queueNodeInstall: S } = ct(), T = P(() => {
      var G;
      return ((G = a.value) == null ? void 0 : G.package_aliases) || {};
    });
    function M(G) {
      if (!G) return null;
      const ue = T.value;
      let he = G;
      const Qe = /* @__PURE__ */ new Set();
      for (; ue[he] && !Qe.has(he); )
        Qe.add(he), he = ue[he];
      return he;
    }
    function E(G, ue) {
      return G instanceof Error && G.message ? G.message : typeof G == "string" && G.trim().length > 0 ? G : ue;
    }
    function D(G) {
      for (const [ue, he] of _.value.entries())
        he === G && _.value.delete(ue);
    }
    function z(G) {
      if (!C.value.has(G)) return;
      const ue = C.value.get(G);
      clearTimeout(ue), C.value.delete(G);
    }
    function j() {
      for (const G of C.value.values())
        clearTimeout(G);
      C.value = /* @__PURE__ */ new Map();
    }
    function L(G) {
      z(G);
      const ue = setTimeout(() => {
        if (C.value.delete(G), !c.value.has(G)) return;
        D(G), c.value.delete(G), f.value === G && (f.value = null), u.value.set(G, "Queue timeout — please retry"), console.warn("[ComfyGit] Queue timeout waiting for cm-task-started:", G);
      }, DP);
      C.value.set(G, ue);
    }
    function q(G) {
      const ue = `Cannot install "${G.title}" - package_id is missing`;
      u.value.set(G.item_id, ue), o.value = ue, console.warn("[ComfyGit] Community install requested without package_id:", G);
    }
    const ce = P(() => ne.value.length > 0 || we.value.length > 0 || Z.value.length > 0 || W.value.length > 0 || U.value.length > 0), ne = P(() => {
      var he, Qe;
      if (!((he = a.value) != null && he.nodes)) return [];
      const G = /* @__PURE__ */ new Map(), ue = (a.value.nodes.resolved || []).filter((N) => {
        var O;
        return !N.is_installed && ((O = N.package) == null ? void 0 : O.package_id);
      });
      for (const N of ue) {
        const O = M(N.package.package_id);
        if (!O) continue;
        G.has(O) || G.set(O, {
          package_id: O,
          title: N.package.title || O,
          node_count: 0,
          node_types: [],
          repository: N.package.repository || null,
          latest_version: N.package.latest_version || null
        });
        const X = G.get(O);
        X.node_count++, X.node_types.push(((Qe = N.reference) == null ? void 0 : Qe.node_type) || N.node_type);
      }
      return Array.from(G.values());
    }), Y = P(() => ne.value.reduce((G, ue) => G + ue.node_count, 0)), we = P(() => {
      var G;
      return (G = a.value) != null && G.nodes ? (a.value.nodes.unresolved || []).map((ue) => {
        var he;
        return {
          node_type: ((he = ue.reference) == null ? void 0 : he.node_type) || ue.node_type
        };
      }) : [];
    }), Z = P(() => {
      var ue;
      if (!((ue = a.value) != null && ue.nodes)) return [];
      const G = a.value.node_guidance || {};
      return (a.value.nodes.version_gated || []).map((he) => {
        var N;
        const Qe = ((N = he.reference) == null ? void 0 : N.node_type) || he.node_type;
        return {
          node_type: Qe,
          guidance: he.guidance || G[Qe] || null
        };
      });
    }), W = P(() => {
      var he, Qe, N, O, X, Oe, Ae, Le;
      if (!((he = a.value) != null && he.nodes)) return [];
      const G = a.value.node_guidance || {}, ue = /* @__PURE__ */ new Map();
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
          guidance: je.guidance || G[nt] || null
        });
        const ie = ue.get(Et);
        ie.node_count++, ie.guidance || (ie.guidance = je.guidance || G[nt] || null), !ie.repository && ((Ae = je.package) != null && Ae.repository) && (ie.repository = je.package.repository), !ie.latest_version && ((Le = je.package) != null && Le.latest_version) && (ie.latest_version = je.package.latest_version);
      }
      return Array.from(ue.values());
    }), K = P(() => W.value.filter((G) => !!G.package_id)), ke = P(() => W.value.length >= 5 ? W.value.slice(0, 4) : W.value), se = P(() => K.value.length > 0 && K.value.every((G) => {
      const ue = G.package_id;
      return r.value.has(ue) || c.value.has(ue) || u.value.has(ue);
    }));
    function fe(G) {
      const ue = [
        { key: "install_registry", label: "Install", variant: "secondary" }
      ];
      return G.repository && ue.push({ key: "install_git", label: "Install via Git", variant: "ghost" }), ue;
    }
    const U = P(() => {
      var N;
      if (!((N = a.value) != null && N.models)) return [];
      const G = (a.value.models.resolved || []).filter(
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
      for (const O of G) {
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
    }), me = P(() => U.value.filter((G) => G.canDownload)), Pe = P(() => ne.value.length >= 5 ? ne.value.slice(0, 4) : ne.value), ye = P(() => U.value.length >= 5 ? U.value.slice(0, 4) : U.value), ee = P(() => ne.value.length > 0 && ne.value.every(
      (G) => r.value.has(G.package_id) || c.value.has(G.package_id) || u.value.has(G.package_id)
    )), Q = P(() => me.value.length > 0 && me.value.every((G) => d.value.has(G.url))), $e = P(() => ne.value.length > 0 || K.value.length > 0 || me.value.length > 0), te = P(() => {
      const G = (ne.value.length === 0 || ee.value) && (K.value.length === 0 || se.value), ue = me.value.length === 0 || Q.value;
      return G && ue;
    }), oe = P(() => w.value === "models" ? `Missing Models (${U.value.length})` : w.value === "packages" ? `Missing Custom Nodes (${Y.value})` : w.value === "community" ? `Community-Mapped Packages (${W.value.length})` : ""), Re = P(() => w.value === "models" ? U.value.map((G) => ({
      id: G.url || G.widget_value,
      name: G.filename,
      canAction: G.canDownload,
      actionDisabledReason: G.canDownload ? void 0 : "Manual download required"
    })) : w.value === "packages" ? ne.value.map((G) => ({
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
      actions: G.package_id ? fe(G) : []
    })) : []);
    function ve(G, ue) {
      if (w.value === "models") {
        const he = U.value.find((Qe) => Qe.url === G.id || Qe.widget_value === G.id);
        he && Ee(he);
      } else if (w.value === "packages") {
        const he = ne.value.find((Qe) => Qe.package_id === G.id);
        he && I(he);
      } else if (w.value === "community") {
        const he = W.value.find((N) => (N.package_id || N.item_id) === G.id);
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
    async function I(G) {
      return re(G.package_id, G.latest_version, "registry");
    }
    async function A(G, ue) {
      return G.package_id ? re(G.package_id, G.latest_version, ue, G.repository) : (q({ item_id: G.item_id, title: G.title }), !1);
    }
    async function re(G, ue, he, Qe) {
      const N = M(G) || G, O = ue || "latest";
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
        const Ae = E(Oe, "Failed to queue install request");
        return console.error("[ComfyGit] Failed to queue package install:", Oe), X && _.value.delete(X), D(N), z(N), c.value.delete(N), u.value.set(N, Ae), !1;
      } finally {
        f.value = null;
      }
    }
    function Ee(G) {
      !G.url || !G.targetPath || d.value.has(G.url) || (x([{
        workflow: "unsaved",
        filename: G.filename,
        url: G.url,
        targetPath: G.targetPath
      }]), d.value.add(G.url));
    }
    async function Ce() {
      const G = { attempted: 0, failed: 0 };
      for (const ue of ne.value)
        !r.value.has(ue.package_id) && !c.value.has(ue.package_id) && !u.value.has(ue.package_id) && (G.attempted++, await I(ue) || G.failed++);
      return G;
    }
    async function Se() {
      const G = { attempted: 0, failed: 0 };
      for (const ue of K.value) {
        const he = ue.package_id;
        !r.value.has(he) && !c.value.has(he) && !u.value.has(he) && (G.attempted++, await A(ue, "registry") || G.failed++);
      }
      return G;
    }
    function ze() {
      const G = me.value.filter(
        (ue) => !d.value.has(ue.url)
      );
      if (G.length === 0) return 0;
      x(G.map((ue) => ({
        workflow: "unsaved",
        filename: ue.filename,
        url: ue.url,
        targetPath: ue.targetPath
      })));
      for (const ue of G)
        d.value.add(ue.url);
      return G.length;
    }
    async function Fe() {
      const G = await Ce(), ue = await Se();
      ze();
      const he = G.attempted + ue.attempted, Qe = G.failed + ue.failed;
      if (he > 0 && Qe > 0) {
        const N = he - Qe;
        o.value = `${N} of ${he} installs queued, ${Qe} failed`;
      }
    }
    function Ne() {
      v.value ? localStorage.setItem("comfygit:popup-disabled", "true") : localStorage.removeItem("comfygit:popup-disabled");
    }
    async function Te(G) {
      var N, O;
      if (localStorage.getItem("comfygit:popup-disabled") === "true") {
        console.log("[ComfyGit] Popup globally disabled");
        return;
      }
      const ue = G == null ? void 0 : G.id;
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
      s.value = !0, o.value = null, j(), r.value = /* @__PURE__ */ new Set(), c.value = /* @__PURE__ */ new Set(), u.value = /* @__PURE__ */ new Map(), d.value = /* @__PURE__ */ new Set(), _.value = /* @__PURE__ */ new Map(), v.value = !1, p.value = 0;
      try {
        const X = await fetch("/v2/comfygit/workflow/analyze-json", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ workflow: G, name: "unsaved" })
        });
        if (!X.ok) {
          const Oe = await X.json();
          throw new Error(Oe.error || "Failed to analyze workflow");
        }
        a.value = await X.json(), ce.value && (l.value = !0, ue && g.value.add(ue));
      } catch (X) {
        console.error("[ComfyGit] Failed to analyze workflow:", X);
      } finally {
        s.value = !1;
      }
    }
    function Je() {
      j(), l.value = !1, a.value = null;
    }
    function We(G) {
      const { workflow: ue } = G.detail;
      ue && Te(ue);
    }
    function pe(G) {
      var Qe;
      const ue = (Qe = G.detail) == null ? void 0 : Qe.ui_id;
      console.log("[ComfyGit] cm-task-started received:", {
        taskId: ue,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: G.detail
      });
      const he = _.value.get(ue);
      he ? (z(he), f.value = he, console.log("[ComfyGit] Installing package:", he)) : console.warn("[ComfyGit] cm-task-started: No matching package for taskId:", ue);
    }
    function J(G) {
      var N, O, X, Oe, Ae, Le, je;
      const ue = (N = G.detail) == null ? void 0 : N.ui_id, he = (X = (O = G.detail) == null ? void 0 : O.status) == null ? void 0 : X.status_str;
      console.log("[ComfyGit] cm-task-completed received:", {
        taskId: ue,
        status: he,
        pendingInstalls: Array.from(_.value.entries()),
        eventDetail: G.detail
      });
      const Qe = _.value.get(ue);
      if (Qe) {
        if (z(Qe), _.value.delete(ue), c.value.delete(Qe), f.value === Qe && (f.value = null), he === "success")
          r.value.add(Qe), p.value++, console.log("[ComfyGit] Package installed successfully:", Qe);
        else {
          const nt = ((Le = (Ae = (Oe = G.detail) == null ? void 0 : Oe.status) == null ? void 0 : Ae.messages) == null ? void 0 : Le[0]) || ((je = G.detail) == null ? void 0 : je.result) || "Unknown error";
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
      var G;
      return qe || (qe = (G = window.app) == null ? void 0 : G.api), qe;
    }
    let Xe = !1;
    function Ve() {
      if (Xe) return !0;
      const G = Ie();
      return G ? (G.addEventListener("cm-task-started", pe), G.addEventListener("cm-task-completed", J), G.addEventListener("comfygit:workflow-changed", Ue), Xe = !0, console.log("[ComfyGit] Registered WebSocket event listeners for install tracking"), !0) : (console.warn("[ComfyGit] Could not register WebSocket listeners - API not available"), !1);
    }
    function Ue(G) {
      const { change_type: ue } = G.detail;
      (ue === "created" || ue === "modified") && l.value && (j(), l.value = !1, console.log("[ComfyGit] Workflow saved, auto-dismissing popup"));
    }
    return at(() => {
      window.addEventListener("comfygit:workflow-loaded", We);
    }), Po(() => {
      if (j(), window.removeEventListener("comfygit:workflow-loaded", We), Xe) {
        const G = Ie();
        G && (G.removeEventListener("cm-task-started", pe), G.removeEventListener("cm-task-completed", J), G.removeEventListener("comfygit:workflow-changed", Ue)), Xe = !1;
      }
    }), (G, ue) => (n(), i(B, null, [
      l.value ? (n(), R(It, {
        key: 0,
        title: "Missing Dependencies",
        size: "md",
        loading: s.value,
        error: o.value || void 0,
        onClose: Je
      }, {
        body: h(() => [
          s.value ? (n(), i("div", U7, [...ue[5] || (ue[5] = [
            t("div", { class: "loading-spinner" }, null, -1),
            t("span", null, "Analyzing workflow...", -1)
          ])])) : a.value && ce.value ? (n(), i("div", O7, [
            ne.value.length > 0 ? (n(), i("div", A7, [
              t("div", z7, [
                t("span", F7, "Missing Custom Nodes (" + m(Y.value) + ")", 1),
                ne.value.length > 1 ? (n(), R(De, {
                  key: 0,
                  size: "sm",
                  variant: "secondary",
                  disabled: ee.value,
                  onClick: Ce
                }, {
                  default: h(() => [
                    $(m(ee.value ? "All Queued" : "Install All"), 1)
                  ]),
                  _: 1
                }, 8, ["disabled"])) : y("", !0)
              ]),
              t("div", V7, [
                (n(!0), i(B, null, ge(Pe.value, (he) => (n(), i("div", {
                  key: he.package_id,
                  class: "package-item"
                }, [
                  t("div", B7, [
                    t("span", W7, m(he.title), 1),
                    t("span", G7, "(" + m(he.node_count) + " " + m(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                  ]),
                  !r.value.has(he.package_id) && !c.value.has(he.package_id) && !u.value.has(he.package_id) ? (n(), R(De, {
                    key: 0,
                    size: "sm",
                    variant: "secondary",
                    disabled: f.value === he.package_id,
                    onClick: (Qe) => I(he)
                  }, {
                    default: h(() => [
                      $(m(f.value === he.package_id ? "Queueing..." : "Install"), 1)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])) : f.value === he.package_id ? (n(), i("span", j7, "Installing...")) : c.value.has(he.package_id) ? (n(), i("span", H7, "Queued")) : u.value.has(he.package_id) ? (n(), i("span", {
                    key: 3,
                    class: "failed-badge",
                    title: u.value.get(he.package_id)
                  }, "Failed ⚠", 8, q7)) : (n(), i("span", K7, "Installed"))
                ]))), 128)),
                ne.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[0] || (ue[0] = (he) => w.value = "packages")
                }, [
                  t("span", null, "Show all " + m(ne.value.length) + " packages...", 1),
                  ue[6] || (ue[6] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            we.value.length > 0 ? (n(), i("div", J7, [
              t("div", Q7, [
                t("span", Y7, "Unknown Nodes (" + m(we.value.length) + ")", 1)
              ]),
              t("div", X7, [
                (n(!0), i(B, null, ge(we.value.slice(0, 5), (he) => (n(), i("div", {
                  key: he.node_type,
                  class: "item"
                }, [
                  t("code", Z7, m(he.node_type), 1),
                  ue[7] || (ue[7] = t("span", { class: "not-found" }, "Not found in registry", -1))
                ]))), 128)),
                we.value.length > 5 ? (n(), i("div", eP, " ...and " + m(we.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            Z.value.length > 0 ? (n(), i("div", tP, [
              t("div", sP, [
                t("span", oP, "Requires Newer ComfyUI (" + m(Z.value.length) + ")", 1)
              ]),
              t("div", nP, [
                (n(!0), i(B, null, ge(Z.value.slice(0, 5), (he) => (n(), i("div", {
                  key: `vg-${he.node_type}`,
                  class: "item"
                }, [
                  t("code", aP, m(he.node_type), 1),
                  t("span", lP, m(he.guidance || "Requires a newer ComfyUI version"), 1)
                ]))), 128)),
                Z.value.length > 5 ? (n(), i("div", iP, " ...and " + m(Z.value.length - 5) + " more ", 1)) : y("", !0)
              ])
            ])) : y("", !0),
            W.value.length > 0 ? (n(), i("div", rP, [
              t("div", cP, [
                t("span", uP, "Community-Mapped Packages (" + m(W.value.length) + ")", 1),
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
              t("div", dP, [
                (n(!0), i(B, null, ge(ke.value, (he) => (n(), i("div", {
                  key: `community-${he.item_id}`,
                  class: "package-item"
                }, [
                  t("div", mP, [
                    t("div", fP, [
                      t("span", vP, m(he.title), 1),
                      t("span", pP, "(" + m(he.node_count) + " " + m(he.node_count === 1 ? "node" : "nodes") + ")", 1)
                    ]),
                    t("div", gP, [
                      ue[8] || (ue[8] = $(" Found via community mapping — registry metadata may be incomplete", -1)),
                      he.guidance ? (n(), i("span", hP, ". " + m(he.guidance), 1)) : y("", !0)
                    ])
                  ]),
                  he.package_id ? (n(), i(B, { key: 0 }, [
                    !r.value.has(he.package_id) && !c.value.has(he.package_id) && !u.value.has(he.package_id) ? (n(), i("div", yP, [
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
                    ])) : f.value === he.package_id ? (n(), i("span", wP, "Installing...")) : c.value.has(he.package_id) ? (n(), i("span", _P, "Queued")) : u.value.has(he.package_id) ? (n(), i("span", {
                      key: 3,
                      class: "failed-badge",
                      title: u.value.get(he.package_id)
                    }, "Failed ⚠", 8, kP)) : (n(), i("span", bP, "Installed"))
                  ], 64)) : (n(), i(B, { key: 1 }, [
                    u.value.has(he.item_id) ? (n(), i("span", {
                      key: 0,
                      class: "failed-badge",
                      title: u.value.get(he.item_id)
                    }, "Failed ⚠", 8, $P)) : (n(), i("span", CP, "Manual setup required"))
                  ], 64))
                ]))), 128)),
                W.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[1] || (ue[1] = (he) => w.value = "community")
                }, [
                  t("span", null, "Show all " + m(W.value.length) + " packages...", 1),
                  ue[10] || (ue[10] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            U.value.length > 0 ? (n(), i("div", xP, [
              t("div", SP, [
                t("span", IP, "Missing Models (" + m(U.value.length) + ")", 1),
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
              t("div", EP, [
                (n(!0), i(B, null, ge(ye.value, (he) => (n(), i("div", {
                  key: he.widget_value,
                  class: "model-item"
                }, [
                  t("div", TP, [
                    t("span", MP, m(he.filename), 1)
                  ]),
                  he.canDownload ? (n(), i(B, { key: 0 }, [
                    d.value.has(he.url) ? (n(), i("span", PP, "Queued")) : (n(), R(De, {
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
                  ], 64)) : (n(), i("span", RP, "Manual download required"))
                ]))), 128)),
                U.value.length >= 5 ? (n(), i("div", {
                  key: 0,
                  class: "show-all-row",
                  onClick: ue[2] || (ue[2] = (he) => w.value = "models")
                }, [
                  t("span", null, "Show all " + m(U.value.length) + " models...", 1),
                  ue[12] || (ue[12] = t("span", { class: "show-all-arrow" }, "→", -1))
                ])) : y("", !0)
              ])
            ])) : y("", !0),
            t("div", LP, [
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
      w.value ? (n(), R(N7, {
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
}), UP = /* @__PURE__ */ xe(NP, [["__scopeId", "data-v-dfb55c3f"]]), OP = {
  key: 0,
  class: "io-mapping-root"
}, AP = { class: "io-mapping-visual-layer" }, zP = { class: "io-mapping-header" }, FP = { class: "io-mapping-header-main" }, VP = { class: "io-mapping-subtitle" }, BP = {
  key: 0,
  class: "io-mapping-hover-summary"
}, WP = { class: "io-mapping-header-actions" }, GP = { class: "io-mapping-sidebar" }, jP = { class: "io-mapping-sidebar-scroll" }, HP = {
  key: 0,
  class: "io-state-block"
}, qP = {
  key: 1,
  class: "io-state-block io-state-error"
}, KP = { class: "contract-meta-section" }, JP = { class: "contract-meta-toggle-icon" }, QP = {
  key: 0,
  class: "contract-meta-body"
}, YP = { class: "contract-summary" }, XP = { class: "summary-pill" }, ZP = { class: "summary-pill" }, eR = { class: "summary-pill" }, tR = { class: "mapping-section" }, sR = { class: "section-header" }, oR = {
  key: 0,
  class: "empty-message"
}, nR = ["onClick"], aR = { class: "item-card-title" }, lR = { class: "item-card-meta" }, iR = { class: "item-card-summary" }, rR = { key: 0 }, cR = { class: "mapping-section" }, uR = { class: "section-header" }, dR = {
  key: 0,
  class: "empty-message"
}, mR = ["onClick"], fR = { class: "item-card-title" }, vR = { class: "item-card-meta" }, pR = { class: "item-card-summary" }, gR = { class: "io-mapping-footer" }, hR = { class: "io-mapping-footer-left" }, yR = { class: "io-mapping-footer-right" }, wR = /* @__PURE__ */ be({
  __name: "WorkflowIOMappingOverlay",
  props: {
    comfyApp: {}
  },
  setup(e) {
    const s = e, { getWorkflowContract: o, saveWorkflowContract: a, deleteWorkflowContract: l } = ct(), r = k(!1), c = k(""), u = k(!1), d = k(!1), v = k(!1), f = k(null), p = k(null), w = k(null), g = k(!1), _ = k(!1), C = k(null), x = k(null), S = k(0), T = k(null), M = k(null);
    let E = null;
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
    ], j = P(() => {
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
    function Z(N) {
      const O = N.trim();
      if (!O) return;
      const X = Number(O);
      return Number.isFinite(X) ? X : void 0;
    }
    function W(N) {
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
    function ee(N) {
      L.value.inputs.splice(N, 1), C.value === N && (C.value = null);
    }
    function Q(N) {
      L.value.outputs.splice(N, 1), x.value === N && (x.value = null);
    }
    function $e(N) {
      C.value = C.value === N ? null : N, C.value != null && (x.value = null);
    }
    function te(N) {
      x.value = x.value === N ? null : N, x.value != null && (C.value = null);
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
      return X ? ((Le = (Ae = (Oe = s.comfyApp) == null ? void 0 : Oe.graph) == null ? void 0 : Ae.getNodeById) == null ? void 0 : Le.call(Ae, X)) ?? ((kt = (nt = (je = s.comfyApp) == null ? void 0 : je.rootGraph) == null ? void 0 : nt.getNodeById) == null ? void 0 : kt.call(nt, X)) ?? null : null;
    }
    function le(N, O) {
      if (O == null || O < 0) return null;
      const X = oe(N);
      return X ? X.querySelectorAll('[data-testid="node-widget"]')[O] ?? null : null;
    }
    function I(N) {
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
      const X = s.comfyApp;
      if (!N || typeof (X == null ? void 0 : X.canvasPosToClientPos) != "function") return null;
      const Ae = X.canvasPosToClientPos([N.pos[0], N.pos[1] - 32]), Le = X.canvasPosToClientPos([N.pos[0] + N.size[0], N.pos[1] + N.size[1]]);
      return !Ae || !Le ? null : new DOMRect(Ae[0], Ae[1], Le[0] - Ae[0], Le[1] - Ae[1]);
    }
    function re(N) {
      var nt, kt, Et, ie, F, de, Ge;
      const O = le(N.node_id, N.widget_idx);
      if (O) return O.getBoundingClientRect();
      const X = ((Et = (kt = (nt = s.comfyApp) == null ? void 0 : nt.graph) == null ? void 0 : kt.getNodeById) == null ? void 0 : Et.call(kt, String(N.node_id))) ?? ((de = (F = (ie = s.comfyApp) == null ? void 0 : ie.rootGraph) == null ? void 0 : F.getNodeById) == null ? void 0 : de.call(F, String(N.node_id)));
      if (!X || typeof N.widget_idx != "number" || !Array.isArray(X.widgets)) return null;
      const Oe = X.widgets[N.widget_idx];
      if (!Oe || typeof ((Ge = s.comfyApp) == null ? void 0 : Ge.canvasPosToClientPos) != "function") return A(X);
      const Ae = 10, Le = s.comfyApp.canvasPosToClientPos([X.pos[0] + Ae, X.pos[1] + (Oe.y ?? 0)]), je = s.comfyApp.canvasPosToClientPos([X.pos[0] + X.size[0] - Ae, X.pos[1] + (Oe.y ?? 0) + (Oe.computedHeight ?? 24)]);
      return !Le || !je ? A(X) : new DOMRect(Le[0], Le[1], je[0] - Le[0], je[1] - Le[1]);
    }
    function Ee(N) {
      var X, Oe, Ae, Le, je, nt;
      const O = ((Ae = (Oe = (X = s.comfyApp) == null ? void 0 : X.graph) == null ? void 0 : Oe.getNodeById) == null ? void 0 : Ae.call(Oe, String(N.node_id))) ?? ((nt = (je = (Le = s.comfyApp) == null ? void 0 : Le.rootGraph) == null ? void 0 : je.getNodeById) == null ? void 0 : nt.call(je, String(N.node_id)));
      return A(O);
    }
    const Ce = P(() => (S.value, L.value.inputs.map((N, O) => {
      const X = I(re(N));
      return X ? {
        key: `input-${O}-${N.node_id}-${N.widget_idx ?? "na"}`,
        style: X,
        active: C.value === O
      } : null;
    }).filter((N) => !!N))), Se = P(() => (S.value, L.value.outputs.map((N, O) => {
      const X = I(Ee(N));
      return X ? {
        key: `output-${O}-${N.node_id}-${N.selector ?? "primary"}`,
        style: X,
        active: x.value === O
      } : null;
    }).filter((N) => !!N)));
    function ze(N) {
      var Et, ie, F, de, Ge, dt, Ct, it, xt, ts;
      if (Re(N.target)) return null;
      const O = (Et = s.comfyApp) == null ? void 0 : Et.canvas;
      if (!O) return null;
      const X = (ie = O.convertEventToCanvasOffset) == null ? void 0 : ie.call(O, N);
      if (!X || X.length < 2) return null;
      const [Oe, Ae] = X, Le = O.graph || ((F = s.comfyApp) == null ? void 0 : F.graph) || ((de = s.comfyApp) == null ? void 0 : de.rootGraph), je = ((Ge = Le == null ? void 0 : Le.getNodeOnPos) == null ? void 0 : Ge.call(Le, Oe, Ae, O.visible_nodes)) || ((dt = O.getNodeOnPos) == null ? void 0 : dt.call(O, Oe, Ae)) || ve(N.target);
      if (!je) return null;
      const nt = (Ct = je.getWidgetOnPos) == null ? void 0 : Ct.call(je, Oe, Ae, !0);
      if (nt)
        return { kind: "input", node: je, widget: nt, canvasX: Oe, canvasY: Ae };
      const kt = ((it = je.getOutputOnPos) == null ? void 0 : it.call(je, [Oe, Ae])) || ((ts = (xt = je.constructor) == null ? void 0 : xt.nodeData) != null && ts.output_node ? { name: je.title || je.type || "output", type: "image" } : null);
      return kt ? { kind: "output", node: je, output: kt, canvasX: Oe, canvasY: Ae } : null;
    }
    function Fe(N, O) {
      var nt;
      const X = Array.isArray(N.widgets) ? N.widgets.indexOf(O) : -1, Oe = L.value.inputs.findIndex(
        (kt) => String(kt.node_id) === String(N.id) && kt.widget_idx === X
      );
      if (Oe >= 0) {
        C.value = Oe;
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
      ne(je.type) && (je.min = U(O, "min"), je.max = U(O, "max")), Y(je.type) && (je.enum_values = fe(O)), L.value.inputs.push(je), C.value = L.value.inputs.length - 1, x.value = null;
    }
    function Ne(N, O) {
      const X = Array.isArray(N.outputs) ? N.outputs.indexOf(O) : -1, Oe = X >= 0 ? `slot:${X}` : "primary", Ae = L.value.outputs.findIndex(
        (je) => String(je.node_id) === String(N.id) && (je.selector || "primary") === Oe
      );
      if (Ae >= 0) {
        x.value = Ae;
        return;
      }
      const Le = {
        name: me(String((O == null ? void 0 : O.name) || "output"), `output_${L.value.outputs.length + 1}`),
        display_name: String((O == null ? void 0 : O.name) || `Output ${L.value.outputs.length + 1}`),
        type: ye(O == null ? void 0 : O.type),
        node_id: String(N.id),
        selector: Oe
      };
      L.value.outputs.push(Le), x.value = L.value.outputs.length - 1, C.value = null;
    }
    function Te(N) {
      var Oe, Ae, Le;
      if (!r.value) {
        T.value = null, M.value = null;
        return;
      }
      const O = ze(N);
      if (!O) {
        T.value = null, M.value = null;
        return;
      }
      if (O.kind === "input") {
        const je = Array.isArray(O.node.widgets) ? O.node.widgets.indexOf(O.widget) : -1, nt = I(((Oe = le(O.node.id, je)) == null ? void 0 : Oe.getBoundingClientRect()) ?? re({
          node_id: String(O.node.id),
          widget_idx: je >= 0 ? je : void 0
        }));
        if (!nt) {
          T.value = null, M.value = null;
          return;
        }
        T.value = {
          kind: "input",
          label: `${((Ae = O.widget) == null ? void 0 : Ae.name) || "widget"} · Node ${O.node.id}`
        }, M.value = { kind: "input", style: nt };
        return;
      }
      const X = I(A(O.node));
      if (!X) {
        T.value = null, M.value = null;
        return;
      }
      T.value = {
        kind: "output",
        label: `${((Le = O.output) == null ? void 0 : Le.name) || O.node.title || O.node.type || "output"} · Node ${O.node.id}`
      }, M.value = { kind: "output", style: X };
    }
    function Je(N) {
      var Oe, Ae, Le;
      if (!r.value || !w.value || N.button !== 0) return;
      const O = ze(N);
      if (!O) return;
      const X = (Oe = s.comfyApp) == null ? void 0 : Oe.canvas;
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
      r.value = !1, T.value = null, M.value = null, _.value = !1, N != null && N.reopenPanel && Ve();
    }
    async function G(N) {
      var Oe, Ae;
      const X = (Ae = (Oe = N.detail) == null ? void 0 : Oe.workflowName) == null ? void 0 : Ae.trim();
      X && (c.value = X, C.value = null, x.value = null, g.value = !1, r.value = !0, await J());
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
      if (E != null) return;
      const N = () => {
        if (S.value += 1, !r.value) {
          E = null;
          return;
        }
        E = window.requestAnimationFrame(N);
      };
      E = window.requestAnimationFrame(N);
    }
    function Qe() {
      E != null && (window.cancelAnimationFrame(E), E = null);
    }
    return yt(r, (N) => {
      N ? (We(), he()) : (pe(), Qe());
    }), at(() => {
      window.addEventListener("comfygit:open-io-mapping", G), window.addEventListener("keydown", ue);
    }), aa(() => {
      pe(), Qe(), window.removeEventListener("comfygit:open-io-mapping", G), window.removeEventListener("keydown", ue);
    }), (N, O) => r.value ? (n(), i("div", OP, [
      t("div", AP, [
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
      t("div", zP, [
        t("div", FP, [
          O[8] || (O[8] = t("div", { class: "io-mapping-title" }, "I/O MAPPING MODE", -1)),
          t("div", VP, m(c.value) + " · Hover any input widget or output target on the graph, then click to add it to the contract. ", 1),
          T.value ? (n(), i("div", BP, " Hovering " + m(T.value.kind) + ": " + m(T.value.label), 1)) : y("", !0)
        ]),
        t("div", WP, [
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
      t("aside", GP, [
        t("div", jP, [
          u.value ? (n(), i("div", HP, " Loading workflow contract... ")) : f.value ? (n(), i("div", qP, m(f.value), 1)) : w.value ? (n(), i(B, { key: 2 }, [
            t("section", KP, [
              t("button", {
                class: "contract-meta-toggle",
                type: "button",
                onClick: O[1] || (O[1] = (X) => g.value = !g.value)
              }, [
                O[10] || (O[10] = t("span", null, "Contract Details", -1)),
                t("span", JP, m(g.value ? "▾" : "▸"), 1)
              ]),
              g.value ? (n(), i("div", QP, [
                b(Ut, { label: "Default Contract" }, {
                  default: h(() => [
                    b(bt, {
                      "model-value": w.value.default_contract,
                      "full-width": "",
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                }),
                b(Ut, { label: "Display Name" }, {
                  default: h(() => [
                    b(bt, {
                      modelValue: L.value.display_name,
                      "onUpdate:modelValue": O[2] || (O[2] = (X) => L.value.display_name = X),
                      "full-width": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b(Ut, { label: "Description" }, {
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
            t("section", YP, [
              t("span", XP, m(q.value), 1),
              t("span", ZP, m(L.value.inputs.length) + " input" + m(L.value.inputs.length === 1 ? "" : "s"), 1),
              t("span", eR, m(L.value.outputs.length) + " output" + m(L.value.outputs.length === 1 ? "" : "s"), 1)
            ]),
            t("section", tR, [
              t("div", sR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...O[11] || (O[11] = [
                    $("INPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.inputs.length ? y("", !0) : (n(), i("div", oR, " No inputs configured. ")),
              (n(!0), i(B, null, ge(L.value.inputs, (X, Oe) => (n(), i("div", {
                key: `input-${Oe}`,
                class: Be(["item-card", { selected: C.value === Oe }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ae) => $e(Oe)
                }, [
                  t("div", null, [
                    t("div", aR, m(X.name || `Input ${Oe + 1}`), 1),
                    t("div", lR, [
                      $(" Node " + m(X.node_id || "?"), 1),
                      X.widget_idx !== void 0 ? (n(), i(B, { key: 0 }, [
                        $(" · Widget " + m(X.widget_idx), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", iR, [
                      t("span", null, m(X.type || "string"), 1),
                      t("span", null, m(X.required ? "required" : "optional"), 1),
                      X.default !== void 0 && X.default !== "" ? (n(), i("span", rR, "default " + m(ke(X.default)), 1)) : y("", !0)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ae) => ee(Oe), ["stop"])
                  }, {
                    default: h(() => [...O[12] || (O[12] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, nR),
                C.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[4] || (O[4] = vt(() => {
                  }, ["stop"]))
                }, [
                  b(Ut, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ae) => X.name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ut, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ae) => X.display_name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ut, { label: "Type" }, {
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
                  b(Ut, { label: "Required" }, {
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
                  b(Ut, {
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
                  ne(X.type) ? (n(), R(Ut, {
                    key: 0,
                    label: "Min"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(X.min),
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.min = Z(Ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  ne(X.type) ? (n(), R(Ut, {
                    key: 1,
                    label: "Max"
                  }, {
                    default: h(() => [
                      b(bt, {
                        "model-value": we(X.max),
                        "full-width": "",
                        "onUpdate:modelValue": (Ae) => X.max = Z(Ae)
                      }, null, 8, ["model-value", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)) : y("", !0),
                  Y(X.type) ? (n(), R(Ut, {
                    key: 2,
                    class: "item-grid-full",
                    label: "Enum Values"
                  }, {
                    default: h(() => [
                      b(xo, {
                        "model-value": W(X.enum_values),
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
            t("section", cR, [
              t("div", uR, [
                b(ao, { variant: "section" }, {
                  default: h(() => [...O[13] || (O[13] = [
                    $("OUTPUTS", -1)
                  ])]),
                  _: 1
                })
              ]),
              L.value.outputs.length ? y("", !0) : (n(), i("div", dR, " No outputs configured. ")),
              (n(!0), i(B, null, ge(L.value.outputs, (X, Oe) => (n(), i("div", {
                key: `output-${Oe}`,
                class: Be(["item-card", { selected: x.value === Oe }])
              }, [
                t("div", {
                  class: "item-card-header item-card-header-toggle",
                  onClick: (Ae) => te(Oe)
                }, [
                  t("div", null, [
                    t("div", fR, m(X.name || `Output ${Oe + 1}`), 1),
                    t("div", vR, [
                      $(" Node " + m(X.node_id || "?"), 1),
                      X.selector ? (n(), i(B, { key: 0 }, [
                        $(" · " + m(X.selector), 1)
                      ], 64)) : y("", !0)
                    ]),
                    t("div", pR, [
                      t("span", null, m(X.type || "file"), 1)
                    ])
                  ]),
                  b(De, {
                    size: "sm",
                    variant: "ghost",
                    onClick: vt((Ae) => Q(Oe), ["stop"])
                  }, {
                    default: h(() => [...O[14] || (O[14] = [
                      $(" Remove ", -1)
                    ])]),
                    _: 1
                  }, 8, ["onClick"])
                ], 8, mR),
                x.value === Oe ? (n(), i("div", {
                  key: 0,
                  class: "item-grid",
                  onClick: O[5] || (O[5] = vt(() => {
                  }, ["stop"]))
                }, [
                  b(Ut, { label: "Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.name,
                        "onUpdate:modelValue": (Ae) => X.name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ut, { label: "Display Name" }, {
                    default: h(() => [
                      b(bt, {
                        modelValue: X.display_name,
                        "onUpdate:modelValue": (Ae) => X.display_name = Ae,
                        "full-width": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024),
                  b(Ut, { label: "Type" }, {
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
        t("div", gR, [
          t("div", hR, [
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
          t("div", yR, [
            b(De, {
              variant: "danger",
              disabled: !j.value,
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
      _.value ? (n(), R(Ml, {
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
}), _R = /* @__PURE__ */ xe(wR, [["__scopeId", "data-v-13515b27"]]), kR = '@import"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";[data-comfygit-theme=comfy]{--cg-font-display: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;--cg-font-mono: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;--cg-font-size-xs: 14.3px;--cg-font-size-sm: 16.9px;--cg-font-size-base: 18.2px;--cg-font-size-lg: 20.8px;--cg-font-size-xl: 23.4px;--cg-font-size-2xl: 26px;--cg-font-weight-normal: 400;--cg-font-weight-medium: 500;--cg-font-weight-semibold: 600;--cg-font-weight-bold: 700;--cg-panel-width: 884px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: 0;--cg-letter-spacing-wide: .025em;--cg-transition-fast: .15s ease;--cg-transition-base: .2s ease;--cg-transition-slow: .3s ease;--cg-color-bg-primary: #2d2e32;--cg-color-bg-secondary: #262729;--cg-color-bg-tertiary: #202121;--cg-color-bg-hover: #3c3d42;--cg-color-bg-overlay: rgba(0, 0, 0, .75);--cg-color-text-primary: #ffffff;--cg-color-text-secondary: #c5c5c5;--cg-color-text-muted: #8a8a8a;--cg-color-text-inverse: #000000;--cg-color-border: #55565e;--cg-color-border-subtle: #3c3d42;--cg-color-border-strong: #828282;--cg-color-accent: #31b9f4;--cg-color-accent-hover: #0b8ce9;--cg-color-accent-muted: rgba(49, 185, 244, .15);--cg-color-success: #47e469;--cg-color-success-muted: rgba(71, 228, 105, .15);--cg-color-warning: #fcbf64;--cg-color-warning-muted: rgba(252, 191, 100, .15);--cg-color-error: #dd424e;--cg-color-error-muted: rgba(221, 66, 78, .15);--cg-color-info: #31b9f4;--cg-color-info-muted: rgba(49, 185, 244, .15);--cg-radius-none: 0;--cg-radius-sm: 4px;--cg-radius-md: 6px;--cg-radius-lg: 8px;--cg-radius-xl: 12px;--cg-radius-2xl: 16px;--cg-radius-full: 9999px;--cg-shadow-sm: 0 1px 2px rgba(0, 0, 0, .3);--cg-shadow-md: 0 2px 8px rgba(0, 0, 0, .4);--cg-shadow-lg: 0 4px 16px rgba(0, 0, 0, .5);--cg-shadow-xl: 0 8px 32px rgba(0, 0, 0, .6);--cg-btn-gradient-start: #31b9f4;--cg-btn-gradient-end: #0b8ce9;--cg-btn-shadow-inset: inset 0 1px 0 rgba(255, 255, 255, .1);--cg-decoration-title-prefix: "";--cg-decoration-label-prefix: "";--cg-decoration-label-suffix: "";--cg-decoration-status-animation: none;--cg-decoration-status-shape: circle;--cg-shadow-accent: rgba(49, 185, 244, .3);--cg-shadow-accent-strong: rgba(49, 185, 244, .5);--cg-shadow-error: rgba(221, 66, 78, .3);--cg-shadow-success: rgba(71, 228, 105, .3);--cg-text-shadow-title: none;--cg-text-shadow-accent: none}[data-comfygit-theme=comfy] .comfygit-panel{box-shadow:var(--cg-shadow-lg);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar{background:var(--cg-color-bg-secondary);border-right:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .sidebar-item{border-radius:var(--cg-radius-md);transition:background var(--cg-transition-fast),color var(--cg-transition-fast)}[data-comfygit-theme=comfy] .sidebar-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .sidebar-item.active{background:var(--cg-color-accent-muted);color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] button{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .icon-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .icon-btn:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .status-grid{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .issue-card{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=comfy] .issue-card--warning,[data-comfygit-theme=comfy] .issue-card--error,[data-comfygit-theme=comfy] .issue-card--info{border-left-width:4px}[data-comfygit-theme=comfy] .branch-indicator{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .branch-indicator__name{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .commit-list{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .commit-item{transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .commit-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-item,[data-comfygit-theme=comfy] .branch-list-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .branch-item:hover,[data-comfygit-theme=comfy] .branch-list-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .branch-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .branch-create-form,[data-comfygit-theme=comfy] .create-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .text-input{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] input[type=text],[data-comfygit-theme=comfy] textarea{border-radius:var(--cg-radius-md);border:1px solid var(--cg-color-border);transition:border-color var(--cg-transition-fast),box-shadow var(--cg-transition-fast)}[data-comfygit-theme=comfy] input[type=text]:focus,[data-comfygit-theme=comfy] textarea:focus{border-color:var(--cg-color-accent);box-shadow:0 0 0 3px var(--cg-color-accent-muted)}[data-comfygit-theme=comfy] .dialog-content{border-radius:var(--cg-radius-xl);box-shadow:var(--cg-shadow-xl);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .status-badge{border-radius:var(--cg-radius-sm);font-size:var(--cg-font-size-xs);font-weight:var(--cg-font-weight-medium);padding:2px 8px}[data-comfygit-theme=comfy] .warning-box{border-radius:var(--cg-radius-md);border-left:4px solid var(--cg-color-warning);background:var(--cg-color-warning-muted)}[data-comfygit-theme=comfy] .env-switcher-btn{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .env-switcher-btn:hover{background:var(--cg-color-bg-hover);transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .section-title{font-weight:var(--cg-font-weight-semibold);letter-spacing:var(--cg-letter-spacing-wide);color:var(--cg-color-text-secondary)}[data-comfygit-theme=comfy] .commit-hash,[data-comfygit-theme=comfy] .branch-name-mono,[data-comfygit-theme=comfy] .file-path{font-family:var(--cg-font-mono)}[data-comfygit-theme=comfy] .settings-section{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] .setting-row{transition:background var(--cg-transition-fast)}[data-comfygit-theme=comfy] .setting-row:hover{background:transparent}[data-comfygit-theme=comfy] .toggle-slider{border-radius:var(--cg-radius-full)}[data-comfygit-theme=comfy] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=comfy] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=comfy] .status-dot.error{background:var(--cg-color-error)}[data-comfygit-theme=comfy] ::-webkit-scrollbar{width:8px;height:8px}[data-comfygit-theme=comfy] ::-webkit-scrollbar-track{background:var(--cg-color-bg-secondary)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb{background:var(--cg-color-border);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] ::-webkit-scrollbar-thumb:hover{background:var(--cg-color-border-strong)}[data-comfygit-theme=comfy] .view-title:before,[data-comfygit-theme=comfy] .panel-title:before,[data-comfygit-theme=comfy] .section-title:before{content:""}[data-comfygit-theme=comfy] .status-dot{width:8px;height:8px;border-radius:50%;animation:none}[data-comfygit-theme=comfy] .env-switcher-label{font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .panel-title,[data-comfygit-theme=comfy] .view-title{text-shadow:none}[data-comfygit-theme=comfy] .log-level{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-semibold)}[data-comfygit-theme=comfy] .log-item{border-radius:var(--cg-radius-md);transition:all var(--cg-transition-fast);margin-bottom:var(--cg-space-1)}[data-comfygit-theme=comfy] .log-item:hover{background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .log-item__context{border-radius:var(--cg-radius-sm);font-weight:var(--cg-font-weight-medium)}[data-comfygit-theme=comfy] .log-filter-bar{border-radius:var(--cg-radius-md);background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);margin-bottom:var(--cg-space-3)}[data-comfygit-theme=comfy] .filter-option{border-radius:var(--cg-radius-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=comfy] .filter-option:hover{transform:translateY(-1px);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .filter-option.active{box-shadow:0 0 8px var(--cg-shadow-accent)}[data-comfygit-theme=comfy] .log-list{border-radius:var(--cg-radius-md);overflow:hidden}[data-comfygit-theme=comfy] .remote-form{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .remote-url-display{background:var(--cg-color-bg-secondary);padding:var(--cg-space-1) var(--cg-space-2);border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .default-badge,[data-comfygit-theme=comfy] .copy-btn{border-radius:var(--cg-radius-sm)}[data-comfygit-theme=comfy] .file-path,[data-comfygit-theme=comfy] .export-warning{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .file-drop-zone{border-radius:var(--cg-radius-lg);transition:all var(--cg-transition-base)}[data-comfygit-theme=comfy] .file-drop-zone.drop-active{transform:scale(1.01)}[data-comfygit-theme=comfy] .file-drop-zone.has-file{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .import-preview,[data-comfygit-theme=comfy] .import-options{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .option-item{border-radius:var(--cg-radius-md)}[data-comfygit-theme=comfy] .option-item:hover{transform:translate(2px)}[data-comfygit-theme=comfy] .selected-file-bar{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .import-help{border-radius:var(--cg-radius-lg);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .help-number{border-radius:var(--cg-radius-md);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=comfy] .progress-bar{border-radius:var(--cg-radius-full);overflow:hidden}[data-comfygit-theme=comfy] .progress-bar-fill{border-radius:var(--cg-radius-full);box-shadow:0 0 8px var(--cg-shadow-accent-strong)}[data-comfygit-theme=comfy] .complete-icon.success{box-shadow:0 0 16px var(--cg-shadow-success)}[data-comfygit-theme=comfy] .complete-icon.error{box-shadow:0 0 16px var(--cg-shadow-error)}[data-comfygit-theme=comfy] .base-tabs{border-bottom-color:var(--cg-color-border-subtle)}[data-comfygit-theme=comfy] .base-tabs__tab{border-radius:var(--cg-radius-sm) var(--cg-radius-sm) 0 0}[data-comfygit-theme=comfy] .base-tabs__tab:hover:not(.disabled){background:var(--cg-color-bg-hover)}[data-comfygit-theme=comfy] .base-tabs__tab.active{background:var(--cg-color-accent-muted)}', bR = '@import"https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap";[data-comfygit-theme=phosphor]{--cg-font-display: "IBM Plex Mono", ui-monospace, monospace;--cg-font-body: "IBM Plex Mono", ui-monospace, monospace;--cg-font-mono: "IBM Plex Mono", ui-monospace, monospace;--cg-font-size-xs: 15.6px;--cg-font-size-sm: 18.2px;--cg-font-size-base: 22.1px;--cg-font-size-lg: 26px;--cg-font-size-xl: 31.2px;--cg-font-size-2xl: 36.4px;--cg-panel-width: 980px;--cg-space-1: 5.2px;--cg-space-2: 10.4px;--cg-space-3: 15.6px;--cg-space-4: 20.8px;--cg-space-5: 26px;--cg-space-6: 31.2px;--cg-space-8: 41.6px;--cg-space-10: 52px;--cg-space-12: 62.4px;--cg-letter-spacing-normal: .02em;--cg-letter-spacing-wide: .08em;--cg-color-bg-primary: #0a0a0a;--cg-color-bg-secondary: #050505;--cg-color-bg-tertiary: #000000;--cg-color-bg-hover: #0f1f0f;--cg-color-bg-overlay: rgba(0, 0, 0, .85);--cg-color-text-primary: #00ff41;--cg-color-text-secondary: #00cc33;--cg-color-text-muted: #008f11;--cg-color-text-inverse: #000000;--cg-color-border: #00ff41;--cg-color-border-subtle: #003b00;--cg-color-border-strong: #00ff41;--cg-color-accent: #00ff41;--cg-color-accent-hover: #39ff14;--cg-color-accent-muted: rgba(0, 255, 65, .15);--cg-color-success: #00ff41;--cg-color-success-muted: rgba(0, 255, 65, .2);--cg-color-warning: #ffff00;--cg-color-warning-muted: rgba(255, 255, 0, .15);--cg-color-error: #ff0040;--cg-color-error-muted: rgba(255, 0, 64, .15);--cg-color-info: #00ffff;--cg-color-info-muted: rgba(0, 255, 255, .15);--cg-radius-none: 0;--cg-radius-sm: 0;--cg-radius-md: 0;--cg-radius-lg: 0;--cg-radius-xl: 0;--cg-radius-2xl: 0;--cg-radius-full: 0;--cg-shadow-sm: 0 0 4px rgba(0, 255, 65, .3);--cg-shadow-md: 0 0 8px rgba(0, 255, 65, .4);--cg-shadow-lg: 0 0 16px rgba(0, 255, 65, .5);--cg-shadow-xl: 0 0 32px rgba(0, 255, 65, .6);--cg-btn-gradient-start: #00ff41;--cg-btn-gradient-end: #00cc33;--cg-btn-shadow-inset: none;--cg-decoration-title-prefix: "> ";--cg-decoration-label-prefix: "/* ";--cg-decoration-label-suffix: " */";--cg-decoration-status-animation: cursor-blink 1s step-end infinite;--cg-decoration-status-shape: cursor;--cg-shadow-accent: rgba(0, 255, 65, .3);--cg-shadow-accent-strong: rgba(0, 255, 65, .5);--cg-shadow-error: rgba(255, 0, 64, .3);--cg-shadow-success: rgba(0, 255, 65, .3);--cg-text-shadow-title: 0 0 8px var(--cg-color-accent);--cg-text-shadow-accent: 0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel{position:relative;overflow:hidden}[data-comfygit-theme=phosphor] .comfygit-panel:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 3px);pointer-events:none;z-index:100}[data-comfygit-theme=phosphor] .comfygit-panel:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#00ff4105;pointer-events:none;animation:phosphor-flicker 4s infinite;z-index:99}@keyframes phosphor-flicker{0%,to{opacity:1}50%{opacity:.98}52%{opacity:1}54%{opacity:.96}56%{opacity:1}}[data-comfygit-theme=phosphor] .comfygit-panel{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg),inset 0 0 100px #00ff4108;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .panel-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .panel-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .view-title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .view-title:before{content:var(--cg-decoration-title-prefix);opacity:.7}[data-comfygit-theme=phosphor] .env-name,[data-comfygit-theme=phosphor] .branch-name{color:var(--cg-color-text-secondary);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .branch-name:before{content:"@";margin-right:2px}[data-comfygit-theme=phosphor] .env-switcher-label:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .env-switcher-label:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .group-title:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .group-title:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .status-dot{width:6px;height:12px;border-radius:0;animation:var(--cg-decoration-status-animation)}[data-comfygit-theme=phosphor] .status-dot.success{background:var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-dot.warning{background:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-dot.error{background:var(--cg-color-error)}@keyframes cursor-blink{50%{opacity:0}}[data-comfygit-theme=phosphor] .icon-btn{color:var(--cg-color-text-primary);border:1px solid transparent}[data-comfygit-theme=phosphor] .icon-btn:hover{background:var(--cg-color-bg-hover);border-color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-section{margin-bottom:var(--cg-space-4)}[data-comfygit-theme=phosphor] .section-title{color:var(--cg-color-accent);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);text-shadow:0 0 8px var(--cg-color-accent);margin-bottom:var(--cg-space-2)}[data-comfygit-theme=phosphor] .section-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .count{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .status-grid{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .column-title{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-xs);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wider)}[data-comfygit-theme=phosphor] .column-title:before{content:"/* "}[data-comfygit-theme=phosphor] .column-title:after{content:" */"}[data-comfygit-theme=phosphor] .status-item{font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .status-item .icon{display:none}[data-comfygit-theme=phosphor] .synced-item:before{content:"└─ "}[data-comfygit-theme=phosphor] .count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .count.new{color:var(--cg-color-success);text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .count.modified{color:var(--cg-color-warning);text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .count.deleted{color:var(--cg-color-error);text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .count.synced{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .warning-box{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .warning-box:before{content:"[!] ";font-weight:700}[data-comfygit-theme=phosphor] .warning-box.error{border-color:var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card{background:transparent;border:1px solid;box-shadow:var(--cg-shadow-sm);transition:all var(--cg-transition-fast)}[data-comfygit-theme=phosphor] .issue-card:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .issue-card--warning{border-color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--warning .issue-card__title{text-shadow:0 0 8px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .issue-card--error{border-color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--error .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--error .issue-card__title{text-shadow:0 0 8px var(--cg-color-error)}[data-comfygit-theme=phosphor] .issue-card--info{border-color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .issue-card--info .issue-card__icon,[data-comfygit-theme=phosphor] .issue-card--info .issue-card__title{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .status-item__icon{display:none}[data-comfygit-theme=phosphor] .status-item:before{content:"├─ ";color:var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .status-item.is-separator:before{content:"└─ "}[data-comfygit-theme=phosphor] .status-item__count{font-weight:var(--cg-font-weight-bold)}[data-comfygit-theme=phosphor] .status-item--new .status-item__count{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .status-item--modified .status-item__count{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .status-item--deleted .status-item__count{text-shadow:0 0 4px var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-indicator__label:before{content:"/* ";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__label:after{content:" */";color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .branch-indicator__name{font-weight:var(--cg-font-weight-bold);text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .branch-indicator__remote{opacity:.7}[data-comfygit-theme=phosphor] .branch-indicator__ahead{text-shadow:0 0 4px var(--cg-color-success)}[data-comfygit-theme=phosphor] .branch-indicator__behind{text-shadow:0 0 4px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .branch-item,[data-comfygit-theme=phosphor] .branch-name{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .switch-btn,[data-comfygit-theme=phosphor] .current-label{font-size:var(--cg-font-size-sm)!important;padding:6px 12px!important}[data-comfygit-theme=phosphor] .switch-btn{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .switch-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .current-label{color:var(--cg-color-text-muted);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .history-section{font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .history-title{color:var(--cg-color-text-muted);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .commit-item{background:transparent;border:none;border-left:2px solid var(--cg-color-border-subtle);padding-left:var(--cg-space-3);margin-left:var(--cg-space-2)}[data-comfygit-theme=phosphor] .commit-item:hover{border-left-color:var(--cg-color-accent);background:var(--cg-color-bg-hover)}[data-comfygit-theme=phosphor] .commit-hash{color:var(--cg-color-accent);font-weight:var(--cg-font-weight-bold);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-hash:before{content:"#"}[data-comfygit-theme=phosphor] .commit-message{color:var(--cg-color-text-primary);font-size:var(--cg-font-size-base)}[data-comfygit-theme=phosphor] .commit-date{color:var(--cg-color-text-muted);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .panel-footer{border-top:1px solid var(--cg-color-border);background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .export-btn{background:transparent;color:var(--cg-color-text-primary);border:1px solid var(--cg-color-border);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .export-btn:hover:not(:disabled){background:var(--cg-color-bg-hover);border-color:var(--cg-color-accent);color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg)}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm);outline:none}[data-comfygit-theme=phosphor] .comfygit-panel-btn{background:var(--cg-color-accent)!important;color:var(--cg-color-bg-primary)!important;border:none!important;text-transform:uppercase;letter-spacing:.1em;font-family:var(--cg-font-mono);font-size:11px;box-shadow:0 0 8px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-panel-btn:hover{box-shadow:0 0 16px var(--cg-color-accent)!important}[data-comfygit-theme=phosphor] .comfygit-commit-btn{background:var(--cg-color-bg-tertiary)!important;color:var(--cg-color-text-primary)!important;border:1px solid var(--cg-color-border-subtle)!important;font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .comfygit-commit-btn:hover{border-color:var(--cg-color-accent)!important;box-shadow:0 0 8px #00ff414d!important}[data-comfygit-theme=phosphor] .commit-indicator{background:var(--cg-color-warning);box-shadow:0 0 6px var(--cg-color-warning)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar{width:8px}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-track{background:var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb{background:var(--cg-color-border-subtle);border:1px solid var(--cg-color-bg-tertiary)}[data-comfygit-theme=phosphor] .panel-content::-webkit-scrollbar-thumb:hover{background:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .comfygit-panel ::selection,[data-comfygit-theme=phosphor] .toast ::selection,[data-comfygit-theme=phosphor] .dialog-content ::selection,[data-comfygit-theme=phosphor] .commit-popover ::selection{background:var(--cg-color-accent);color:var(--cg-color-bg-primary)}[data-comfygit-theme=phosphor] .toast{background:var(--cg-color-bg-primary);border:1px solid var(--cg-color-border);font-family:var(--cg-font-mono);box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .toast.info{border-left:3px solid var(--cg-color-info)}[data-comfygit-theme=phosphor] .toast.success{border-left:3px solid var(--cg-color-success)}[data-comfygit-theme=phosphor] .toast.warning{border-left:3px solid var(--cg-color-warning)}[data-comfygit-theme=phosphor] .toast.error{border-left:3px solid var(--cg-color-error)}[data-comfygit-theme=phosphor] .toast-message:before{content:"> ";opacity:.5}[data-comfygit-theme=phosphor] .dialog-content{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .dialog-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .dialog-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .dialog-message{color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-details{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .dialog-warning{background:transparent;border:1px solid var(--cg-color-warning);color:var(--cg-color-warning)}[data-comfygit-theme=phosphor] .dialog-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .dialog-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .dialog-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent)}[data-comfygit-theme=phosphor] .dialog-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .dialog-btn.primary:hover{box-shadow:var(--cg-shadow-md)}[data-comfygit-theme=phosphor] .dialog-btn.primary.destructive{background:var(--cg-color-error)}[data-comfygit-theme=phosphor] .branch-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .branch-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs)}[data-comfygit-theme=phosphor] .action-btn.create{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .action-btn.create:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .action-btn.cancel{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .action-btn.cancel:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-popover{background:var(--cg-color-bg-primary);border:2px solid var(--cg-color-border);box-shadow:var(--cg-shadow-lg);font-family:var(--cg-font-mono)}[data-comfygit-theme=phosphor] .popover-title{color:var(--cg-color-accent);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .popover-title:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .commit-input{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle);color:var(--cg-color-text-primary);font-family:var(--cg-font-mono);font-size:var(--cg-font-size-sm)}[data-comfygit-theme=phosphor] .commit-input:focus{border-color:var(--cg-color-accent);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-input::placeholder{color:var(--cg-color-text-muted)}[data-comfygit-theme=phosphor] .changes-summary{background:var(--cg-color-bg-tertiary);border:1px solid var(--cg-color-border-subtle)}[data-comfygit-theme=phosphor] .change-item:before{content:"├─ ";color:var(--cg-color-border-subtle);margin-right:4px}[data-comfygit-theme=phosphor] .cancel-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .cancel-btn:hover{border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .commit-btn{font-family:var(--cg-font-mono);text-transform:uppercase;letter-spacing:var(--cg-letter-spacing-wide);font-size:var(--cg-font-size-xs);background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .commit-btn:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .result.success{background:transparent;border:1px solid var(--cg-color-success);color:var(--cg-color-success)}[data-comfygit-theme=phosphor] .result.error{background:transparent;border:1px solid var(--cg-color-error);color:var(--cg-color-error)}[data-comfygit-theme=phosphor] .base-modal-content{box-shadow:var(--cg-shadow-xl)}[data-comfygit-theme=phosphor] .base-title.view:before{content:var(--cg-decoration-title-prefix)}[data-comfygit-theme=phosphor] .base-title.section:before{content:var(--cg-decoration-label-prefix)}[data-comfygit-theme=phosphor] .base-title.section:after{content:var(--cg-decoration-label-suffix)}[data-comfygit-theme=phosphor] .base-title.dialog{text-shadow:0 0 8px var(--cg-color-accent)}[data-comfygit-theme=phosphor] .base-btn.primary{background:var(--cg-color-accent);color:var(--cg-color-bg-primary);box-shadow:var(--cg-shadow-sm)}[data-comfygit-theme=phosphor] .base-btn.primary:hover:not(:disabled){box-shadow:var(--cg-shadow-md);transform:none}[data-comfygit-theme=phosphor] .base-btn.secondary{background:transparent;border:1px solid var(--cg-color-border);color:var(--cg-color-text-primary)}[data-comfygit-theme=phosphor] .base-btn.secondary:hover:not(:disabled){border-color:var(--cg-color-accent);color:var(--cg-color-accent);background:transparent}[data-comfygit-theme=phosphor] .base-tabs{border-bottom-color:var(--cg-color-border)}[data-comfygit-theme=phosphor] .base-tabs__tab{text-shadow:none}[data-comfygit-theme=phosphor] .base-tabs__tab:before{content:""}[data-comfygit-theme=phosphor] .base-tabs__tab.active:before{content:"> ";opacity:.7}[data-comfygit-theme=phosphor] .base-tabs__tab.active{text-shadow:0 0 8px var(--cg-color-accent);border-bottom-color:var(--cg-color-accent);box-shadow:0 2px 8px var(--cg-shadow-accent)}[data-comfygit-theme=phosphor] .base-tabs__tab:hover:not(.disabled):not(.active){color:var(--cg-color-accent);text-shadow:0 0 4px var(--cg-color-accent)}', $R = {
  comfy: kR,
  phosphor: bR
}, Ll = "comfy", Ic = "comfygit-theme";
let eo = null, Ec = Ll;
function CR() {
  try {
    const e = localStorage.getItem(Ic);
    if (e && (e === "comfy" || e === "phosphor"))
      return e;
  } catch {
  }
  return Ll;
}
function Tc(e = Ll) {
  eo && eo.remove(), eo = document.createElement("style"), eo.id = "comfygit-theme-styles", eo.setAttribute("data-theme", e), eo.textContent = $R[e], document.head.appendChild(eo), document.body.setAttribute("data-comfygit-theme", e), Ec = e;
  try {
    localStorage.setItem(Ic, e);
  } catch {
  }
  console.log(`[ComfyGit] Applied theme: ${e}`);
}
function xR() {
  return Ec;
}
function SR(e) {
  Tc(e);
}
function IR(e) {
  var r;
  const { ui_id: s, state: o } = e || {}, a = (o == null ? void 0 : o.history) || {};
  if (!s)
    return null;
  const l = a[s];
  return l && l.result === "error" && ((r = l.status) == null ? void 0 : r.status_str) === "error" ? (l.status.messages || [])[0] || "Unknown error" : null;
}
const Li = "ComfyGit.DevAutoReload", Mc = "ComfyGit.DevAutoReload.PanelOpen";
function ER() {
  const e = new URLSearchParams(window.location.search).get("comfygitDevReload");
  return e === null ? null : e;
}
function ca() {
  const e = ER();
  if (e !== null) {
    const s = e !== "0" && e !== "false";
    try {
      localStorage.setItem(Li, s ? "true" : "false");
    } catch {
    }
    return s;
  }
  try {
    return localStorage.getItem(Li) === "true";
  } catch {
    return !1;
  }
}
function Pc(e) {
  if (ca())
    try {
      sessionStorage.setItem(Mc, e ? "true" : "false");
    } catch {
    }
}
function TR() {
  if (!ca()) return !1;
  try {
    return sessionStorage.getItem(Mc) === "true";
  } catch {
    return !1;
  }
}
async function Di(e) {
  const s = await fetch(e, { cache: "no-store", method: "HEAD" });
  if (s.ok) {
    const u = s.headers, d = u.get("etag"), v = u.get("last-modified"), f = u.get("content-length");
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
async function MR(e) {
  if (!ca()) return;
  const s = e.map((a) => ({
    ...a,
    signature: null
  }));
  for (const a of s)
    try {
      a.signature = await Di(a.url);
    } catch (l) {
      console.warn(`[ComfyGit] Dev auto-reload could not read ${a.name}:`, l);
    }
  console.log("[ComfyGit] Dev auto-reload enabled");
  let o = !1;
  window.setInterval(async () => {
    if (!o)
      for (const a of s)
        try {
          const l = await Di(a.url);
          if (a.signature && l && l !== a.signature) {
            o = !0, console.log(`[ComfyGit] ${a.name} changed, reloading page...`), window.setTimeout(() => window.location.reload(), 500);
            return;
          }
          l && (a.signature = l);
        } catch {
        }
  }, 1e3);
}
const PR = "./comfygit-panel.css", RR = "./comfygit-panel.js", Rc = new URL(PR, import.meta.url).href, LR = new URL(RR, import.meta.url).href, Dl = document.createElement("link");
Dl.rel = "stylesheet";
Dl.href = Rc;
document.head.appendChild(Dl);
const DR = CR();
Tc(DR);
ca() || (sessionStorage.removeItem("ComfyGit.LastView"), sessionStorage.removeItem("ComfyGit.LastSection"));
window.ComfyGit = {
  setTheme: (e) => {
    console.log(`[ComfyGit] Switching to theme: ${e}`), SR(e);
  },
  getTheme: () => {
    const e = xR();
    return console.log(`[ComfyGit] Current theme: ${e}`), e;
  }
};
let ks = null, tn = null, Xt = null, sn = null, Fo = null, Ni = null, Vo = null, Ui = null, Bo = null, Oi = null;
const So = k(null);
let mn = "no_workspace", Lc = !1;
async function Un() {
  var e;
  if (!((e = Zt) != null && e.api)) return null;
  try {
    const s = await Zt.api.fetchApi("/v2/comfygit/status");
    s.ok && (So.value = await s.json());
  } catch {
  }
}
async function ol() {
  var e;
  if ((e = Zt) != null && e.api)
    try {
      const s = await Zt.api.fetchApi("/v2/setup/status");
      if (s.ok) {
        const o = await s.json();
        mn = o.state, Lc = o.has_comfyui_manager ?? !1;
      }
    } catch {
    }
}
function nl() {
  var s;
  if (mn === "managed" || !Lc) return;
  const e = document.querySelectorAll("button.comfyui-button");
  for (const o of e)
    if (((s = o.textContent) == null ? void 0 : s.trim()) === "Manager" && !o.querySelector("svg, i, img")) {
      o.style.display = "none", console.log("[ComfyGit] Hiding built-in Manager button (ComfyUI-Manager present)");
      return;
    }
}
function NR() {
  if (!So.value) return !1;
  const e = So.value.workflows;
  return e.new.length > 0 || e.modified.length > 0 || e.deleted.length > 0 || So.value.has_changes;
}
function Wo(e) {
  Ho(), Pc(!0), ks = document.createElement("div"), ks.className = "comfygit-panel-overlay";
  const s = document.createElement("div");
  s.className = "comfygit-panel-container", ks.appendChild(s), ks.addEventListener("click", (a) => {
    a.target === ks && Ho();
  });
  const o = (a) => {
    a.key === "Escape" && (Ho(), document.removeEventListener("keydown", o));
  };
  document.addEventListener("keydown", o), tn = gn({
    render: () => Ro(IM, {
      initialView: e,
      onClose: Ho,
      onStatusUpdate: async (a) => {
        So.value = a, on(), await ol(), al(), nl();
      }
    })
  }), tn.mount(s), document.body.appendChild(ks);
}
function Ho() {
  Pc(!1), tn && (tn.unmount(), tn = null), ks && (ks.remove(), ks = null);
}
function Ai(e) {
  Go(), Xt = document.createElement("div"), Xt.className = "comfygit-commit-popover-container";
  const s = e.getBoundingClientRect();
  Xt.style.position = "fixed", Xt.style.top = `${s.bottom + 8}px`, Xt.style.right = `${window.innerWidth - s.right}px`, Xt.style.zIndex = "10001";
  const o = (l) => {
    Xt && !Xt.contains(l.target) && l.target !== e && (Go(), document.removeEventListener("mousedown", o));
  };
  setTimeout(() => document.addEventListener("mousedown", o), 0);
  const a = (l) => {
    l.key === "Escape" && (Go(), document.removeEventListener("keydown", a));
  };
  document.addEventListener("keydown", a), sn = gn({
    render: () => Ro($c, {
      status: So.value,
      onClose: Go,
      onCommitted: (l) => {
        Go(), UR(l.success, l.message), Un().then(on);
      }
    })
  }), sn.mount(Xt), document.body.appendChild(Xt);
}
function Go() {
  sn && (sn.unmount(), sn = null), Xt && (Xt.remove(), Xt = null);
}
function UR(e, s) {
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
function OR() {
  Fo || (Fo = document.createElement("div"), Fo.className = "comfygit-download-queue-root", Ni = gn({
    render: () => Ro(k7)
  }), Ni.mount(Fo), document.body.appendChild(Fo), console.log("[ComfyGit] Model download queue mounted"));
}
function AR() {
  Vo || (Vo = document.createElement("div"), Vo.className = "comfygit-missing-resources-root", Ui = gn({
    render: () => Ro(UP)
  }), Ui.mount(Vo), document.body.appendChild(Vo), console.log("[ComfyGit] Missing resources popup mounted"));
}
function zR() {
  Bo || (Bo = document.createElement("div"), Bo.className = "comfygit-io-mapping-root", Oi = gn({
    render: () => Ro(_R, {
      comfyApp: Zt
    })
  }), Oi.mount(Bo), document.body.appendChild(Bo), console.log("[ComfyGit] Workflow I/O mapping overlay mounted"));
}
let qt = null;
function on() {
  if (!qt) return;
  const e = qt.querySelector(".commit-indicator");
  e && (e.style.display = NR() ? "block" : "none");
}
function al() {
  if (!qt) return;
  const e = mn !== "managed";
  qt.disabled = e, qt.title = e ? "Commit disabled - switch to a managed environment first" : "Quick Commit";
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
        qt && !qt.disabled && Ai(qt);
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
    s.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-panel-btn", s.textContent = "ComfyGit", s.title = "ComfyGit Control Panel", s.onclick = () => Wo(), qt = document.createElement("button"), qt.className = "comfyui-button comfyui-menu-mobile-collapse comfygit-commit-btn", qt.innerHTML = 'Commit <span class="commit-indicator"></span>', qt.title = "Quick Commit", qt.onclick = () => Ai(qt), e.appendChild(s), e.appendChild(qt), (r = (l = Zt.menu) == null ? void 0 : l.settingsGroup) != null && r.element && (Zt.menu.settingsGroup.element.before(e), console.log("[ComfyGit] Control Panel buttons added to toolbar")), OR(), AR(), zR(), window.addEventListener("comfygit:open-panel", ((c) => {
      var d;
      const u = (d = c.detail) == null ? void 0 : d.initialView;
      Wo(u);
    })), window.addEventListener("comfygit:close-panel", (() => {
      Ho();
    }));
    const { loadPendingDownloads: o } = Lo();
    o(), await Promise.all([Un(), ol()]), on(), al(), nl(), TR() && setTimeout(() => {
      ks || Wo();
    }, 100), MR([
      { name: "panel script", url: LR },
      { name: "panel stylesheet", url: Rc }
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 4px;";
        const x = document.createElement("div");
        x.textContent = "Node installation failed", x.style.cssText = "font-weight: 600; color: #e53935;", C.appendChild(x);
        const S = document.createElement("div");
        S.textContent = "Dependency conflict detected", S.style.cssText = "font-size: 12px; opacity: 0.8;", C.appendChild(S), g.appendChild(C);
        const T = document.createElement("button");
        T.textContent = "View Logs", T.style.cssText = `
          background: #e53935;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        `, T.onmouseover = () => T.style.background = "#c62828", T.onmouseout = () => T.style.background = "#e53935", T.onclick = () => {
          g.remove(), Wo("debug-env");
        }, g.appendChild(T);
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
        const C = document.createElement("div");
        C.style.cssText = "flex: 1; display: flex; flex-direction: column; gap: 2px;";
        const x = document.createElement("div");
        x.textContent = "To apply changes, please restart ComfyUI", x.style.cssText = "font-weight: 500; color: #fff;", C.appendChild(x);
        const S = document.createElement("div");
        S.textContent = `${p} node package${p > 1 ? "s" : ""} ready to install`, S.style.cssText = "font-size: 12px; opacity: 0.7;", C.appendChild(S), g.appendChild(C);
        const T = document.createElement("button");
        T.textContent = "Apply Changes", T.style.cssText = `
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
        `, T.onmouseover = () => T.style.background = "rgba(255,255,255,0.1)", T.onmouseout = () => T.style.background = "transparent", T.onclick = async () => {
          T.disabled = !0, T.textContent = "Restarting...", T.style.opacity = "0.7", x.textContent = "Restarting...", S.textContent = "Applying changes, please wait...";
          try {
            const E = async () => {
              console.log("[ComfyGit] Reconnected after restart, refreshing node definitions...");
              try {
                Zt.refreshComboInNodes && (await Zt.refreshComboInNodes(), console.log("[ComfyGit] Node definitions refreshed successfully")), _.textContent = "✅", x.textContent = "Nodes Installed", x.style.color = "#4caf50", S.textContent = `${p} package${p > 1 ? "s" : ""} installed successfully!`, g.style.borderColor = "#4caf50", T.style.display = "none", setTimeout(() => {
                  g.remove();
                }, 3e3);
              } catch (D) {
                console.error("[ComfyGit] Failed to refresh nodes:", D), _.textContent = "✅", x.textContent = "Restart Complete", x.style.color = "#4caf50", S.textContent = "Refresh the page to load new nodes.", g.style.borderColor = "#4caf50", T.style.display = "none";
              }
            };
            a.addEventListener("reconnected", E, { once: !0 }), await fetch("/v2/manager/reboot");
          } catch (E) {
            console.error("[ComfyGit] Failed to restart:", E), x.textContent = "Restart Failed", x.style.color = "#e53935", S.textContent = "Could not restart server. Try again.", g.style.borderColor = "#e53935", T.textContent = "Try Again", T.disabled = !1, T.style.opacity = "1";
          }
        }, g.appendChild(T);
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
        const w = IR(p.detail);
        w && d(w);
      }), console.log("[ComfyGit] Manager error notification system initialized"), window.addEventListener("comfygit:nodes-installed", (p) => {
        const w = p, { count: g = 1 } = w.detail || {};
        v(g);
      }), console.log("[ComfyGit] Restart notification system initialized");
    }
  }
});
